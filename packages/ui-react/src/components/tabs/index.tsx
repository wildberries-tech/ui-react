import React from 'react';

import { Tab, IProps as IPropsTab  } from './components/tab';
import { TabList } from './components/tab-list';
import { TabPanel, IProps as IPropsPanel } from './components/tab-panel';
import { Tabs, IProps as IPropsTabs } from './components/tabs';

export interface IProps extends Omit<IPropsTabs, 'children'> {
    /**
     * Набор параметров для табов и их панелей
     */
    items?: Array<{
        id?: string | number,
        disabled?: boolean,
        elTab: IPropsTab['children'],
        elPanel: IPropsPanel['children']
    }>
}

/**
 * Компонент `Tabs` позволяет организовывать вкладки на странице и показывать содержимое выбранной вкладки.
 * Он может быть использован для создания табов в любом приложении, где нужна организация контента по категориям или разделам.
 *
 * Компонент доступен в виде единой композиции, а также предоставляет декомпозированный вариант использования.
 *
 * Пример использования декомпозиции приведен в разделе `Настройки`
 */
export const TabsComposition = ({ items, focusTabOnClick = false, ...props }: IProps) => {
    if(!items?.length) {
        return null;
    }

    return (
        <Tabs
            {...props}
            focusTabOnClick={focusTabOnClick}
        >
            <TabList>
                {items.map((item, index) => (
                    <Tab
                        key={item.id ?? index}
                        children={item.elTab}
                        disabled={item.disabled}
                    />
                ))}
            </TabList>
            {items.map((item, index) => (
                <TabPanel
                    key={item.id ?? index}
                    children={item.elPanel}
                />
            ))}
        </Tabs>
    );
};
