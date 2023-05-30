import React, { FieldsetHTMLAttributes, ReactNode, useMemo } from 'react';

import { TStyle, useClassnames } from '../../hooks/use-classnames';
import { Text } from '../typography/text';

import style from './index.module.pcss';

type TNative = FieldsetHTMLAttributes<HTMLFieldSetElement>;

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
    legend?: ReactNode,
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
            return (
                <Text
                    tagName="legend"
                    className={cn('radio-group__legend')}
                    children={props.legend}
                />
            );
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
