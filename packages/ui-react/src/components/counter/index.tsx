import React, { ReactHTML, ReactNode, MouseEvent } from 'react';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

export interface IProps {
    /**
     * Параметр `children` может содержать любые дочерние элементы, например строки, числа, другие компоненты React и т. д.
     */
    readonly children?: ReactNode,
    /**
     * Параметр `className` используется для добавления пользовательских CSS классов к компоненту. Это позволяет настраивать внешний вид компонента с помощью пользовательских стилей.
     */
    readonly className?: string | TStyle,
    /**
     * При использовании `presetStyle` компонент будет автоматически применять стили, соответствующие выбранному значению.
     */
    readonly presetStyle?: 'orange' | 'dark-gray',
    /**
     * При использовании `presetSize` компонент будет автоматически применять размер, соответствующий выбранному значению.
     */
    readonly presetSize?: 'small' | 'big',
    /**
     * Параметр `tagName` используется для указания HTML-тега, который будет использоваться для отображения компонента или его части.
     */
    readonly tagName?: keyof ReactHTML,
    /**
     * Обработчик события клика на компоненте.
     */
    readonly onClick?: (e: MouseEvent) => void
}

/**
 * Компонент `Counter` используется для отображения информации в виде счетчика, которые могут быть прикреплены к другим элементам интерфейса.
 */
export const Counter = ({ tagName: Component = 'span', presetSize = 'small', presetStyle = 'orange', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    return (
        <Component
            children={props.children}
            onClick={props.onClick}
            className={cn('counter', {
                [`counter_preset-style-${presetStyle}`]: presetStyle,
                [`counter_preset-size-${presetSize}`]  : presetSize,
                'counter_interactive'                  : !!props.onClick
            })}
        />
    );
};
