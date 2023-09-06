import React, { ReactNode, useContext } from 'react';
import { TabPanel as TabPanelSource, type TabPanelProps } from 'react-tabs';

import { type TStyle, useClassnames } from '../../../../hooks/use-classnames';
import { context } from '../../context';

import style from './index.module.pcss';

export interface IProps extends Omit<TabPanelProps, 'className' | 'selectedClassName' | 'children'> {
    readonly className?: string | TStyle,
    readonly children?: ReactNode | ((props: IProps) => ReactNode)
}

export const TabPanel = ({ className, ...props }: IProps) => {
    const cn = useClassnames(style, className);
    const presetStyle = useContext(context);

    return (
        <TabPanelSource
            {...props}
            className={cn('tab-panel', {
                [`tab-panel_preset-${presetStyle}`]: presetStyle
            })}
            selectedClassName={cn('tab-panel_selected')}
            children={typeof props.children === 'function' ? props.children(props) : props.children}
        />
    );
};

TabPanel.tabsRole = 'TabPanel';
