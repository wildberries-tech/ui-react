import React, { FieldsetHTMLAttributes, ReactNode, useMemo } from 'react';
import { isElement } from 'react-is';

import { TStyle, useClassnames } from '../../hooks/use-classnames';
import { Text, TProps as ITextProps } from '../typography/v1/text';

import style from './index.module.pcss';

type TNative = FieldsetHTMLAttributes<HTMLFieldSetElement>;

type TLegendTypographyProps = Omit<ITextProps, 'tagName'>;

export interface IProps {
    /**
     * React-компоненты `Checkbox`, которые являются частью группы.
     **/
    readonly children: ReactNode,
    /**
     * Определяет CSS-классы, которые будут применены к корневому элементу
     **/
    readonly className?: string | TStyle,
    /**
     * Текст, который будет использован в качестве заголовка группы чекбоксов.
     **/
    readonly legend?: ReactNode | TLegendTypographyProps,
    /**
     * Направление, в котором будут располагаться чекбоксы.
     **/
    readonly direction?: 'row' | 'column',
    /**
     * Определяет, должны ли все чекбоксы в группе быть отключеными.
     **/
    readonly disabled?: TNative['disabled'],
    /**
     * Уникальный идентификатор компонента
     **/
    readonly id?: TNative['id']
}

export const RadioGroup = ({ direction = 'row', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    const elLegend = useMemo(() => {
        if(props.legend) {
            if(isElement(props.legend) || typeof props.legend === 'string') {
                return (
                    <Text
                        tagName="legend"
                        className={cn('radio-group__legend')}
                        children={props.legend}
                    />
                );
            }

            if(!isElement(props.legend) && typeof props.legend === 'object') {
                return (
                    <Text
                        tagName="legend"
                        className={cn('radio-group__legend')}
                        {...props.legend as TLegendTypographyProps}
                    />
                );
            }
        }
    }, [props.legend]);

    return (
        <fieldset
            id={props.id}
            disabled={props.disabled}
            className={cn('radio-group', {
                [`radio-group_${direction}`]: direction
            })}
        >
            {elLegend}
            {props.children}
        </fieldset>
    );
};
