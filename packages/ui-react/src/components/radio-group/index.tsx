import React, { FieldsetHTMLAttributes, ReactNode, useMemo } from 'react';
import { isElement } from 'react-is';

import { TStyle, useClassnames } from '../../hooks/use-classnames';
import { Text, TProps as ITextProps } from '../typography/text';

import style from './index.module.pcss';

type TNative = FieldsetHTMLAttributes<HTMLFieldSetElement>;

type TLegendTypographyProps = Omit<ITextProps, 'tagName'>;

export interface IProps {
    /**
     * React-компоненты `Checkbox`, которые являются частью группы.
     **/
    children: ReactNode,
    /**
     * Определяет CSS-классы, которые будут применены к корневому элементу
     **/
    className?: string | TStyle,
    /**
     * Текст, который будет использован в качестве заголовка группы чекбоксов.
     **/
    legend?: ReactNode | TLegendTypographyProps,
    /**
     * Направление, в котором будут располагаться чекбоксы.
     **/
    direction?: 'row' | 'column',
    /**
     * Определяет, должны ли все чекбоксы в группе быть отключеными.
     **/
    disabled?: TNative['disabled'],
    /**
     * Уникальный идентификатор компонента
     **/
    id?: TNative['id']
}

export const RadioGroup = ({ direction = 'row', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    const elLegend = useMemo(() => {
        if(props.legend) {
            if(isElement(props.legend) || typeof props.legend === 'string') {
                return (
                    <Text
                        parent="legend"
                        className={cn('radio-group__legend')}
                        children={props.legend}
                    />
                );
            }

            if(!isElement(props.legend) && typeof props.legend === 'object') {
                return (
                    <Text
                        parent="legend"
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
