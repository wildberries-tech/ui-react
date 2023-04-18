import React from 'react';
import { Tabs as TabsSource, type TabsProps } from 'react-tabs';

import { type TStyle, useClassnames } from '../../../../hooks/use-classnames';
import { context, TContext } from '../../context';

import style from './index.module.pcss';

export interface IProps extends Omit<TabsProps, 'className' | 'selectedTabClassName' | 'selectedTabPanelClassName' | 'disabledTabClassName' | 'environment' | 'direction'> {
    /**
     * При использовании `presetStyle` компонент будет автоматически применять стили, соответствующие выбранному значению.
     */
    presetStyle?: TContext,
    /**
     * Параметр `className` используется для добавления пользовательских CSS классов к компоненту. Это позволяет настраивать внешний вид компонента с помощью пользовательских стилей.
     */
    className?: string | TStyle
}

export const Tabs = ({ presetStyle = 'pane', className, ...props }: IProps) => {
    const cn = useClassnames(style, className);

    return (
        <context.Provider value={presetStyle}>
            <TabsSource
                className={cn('tabs')}
                {...props}
            />
        </context.Provider>
    );
};

Tabs.tabsRole = 'Tabs';
