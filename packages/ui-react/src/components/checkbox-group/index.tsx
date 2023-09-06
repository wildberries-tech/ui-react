import React, { FieldsetHTMLAttributes, ReactNode, useMemo } from 'react';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

type TNative = FieldsetHTMLAttributes<HTMLFieldSetElement>;

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
    readonly legend?: ReactNode,
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

/**
 * Компонент `CheckboxGroup` представляет собой группу чекбоксов, которые могут быть выбраны пользователем.
 **/
export const CheckboxGroup = ({ direction = 'row', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    const elLegend = useMemo(() => {
        if(props.legend) {
            return (
                <legend
                    className={cn('checkbox-group__legend')}
                    children={props.legend}
                />
            );
        }
    }, [props.legend]);

    return (
        <fieldset
            id={props.id}
            disabled={props.disabled}
            className={cn('checkbox-group', {
                [`checkbox-group_${direction}`]: direction
            })}
        >
            {elLegend}
            {props.children}
        </fieldset>
    );
};
