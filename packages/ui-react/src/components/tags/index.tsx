import React, { ReactHTML, ReactNode } from 'react';

import { TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

export interface IProps {
    /**
     * Параметр `children` может содержать любое количество дочерних компонентов `Tag`.
     */
    children?: ReactNode,
    /**
     * Параметр `className` используется для добавления пользовательских CSS классов к компоненту. Это позволяет настраивать внешний вид компонента с помощью пользовательских стилей.
     */
    className?: string | TStyle,
    /**
     * Параметр `tagName` используется для указания HTML-тега, который будет использоваться для отображения компонента или его части.
     */
    tagName?: keyof ReactHTML
}

/**
 * Компонент `Tags` используется для группировки набора компонентов `Tag`.
 */
export const Tags = ({ tagName: Component = 'div', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    return (
        <Component
            children={props.children}
            className={cn('tags')}
        />
    );
};
