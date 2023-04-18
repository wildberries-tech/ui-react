import React, { ReactNode, useContext } from 'react';
import { Tab as TabSource, type TabProps } from 'react-tabs';

import { type TStyle, useClassnames } from '../../../../hooks/use-classnames';
import { context } from '../../context';

import style from './index.module.pcss';

export interface IProps extends Omit<TabProps, 'className' | 'disabledClassName' | 'selectedClassName' | 'children'> {
    className?: string | TStyle,
    children?: ReactNode | ((props: IProps) => ReactNode)
}

export const Tab = ({ className, ...props }: IProps) => {
    const cn = useClassnames(style, className);
    const presetStyle = useContext(context);

    return (
        <TabSource
            {...props}
            className={cn('tab', {
                [`tab_preset-${presetStyle}`]: presetStyle
            })}
            disabledClassName={cn('tab_disabled')}
            selectedClassName={cn('tab_selected')}
            children={typeof props.children === 'function' ? props.children(props) : props.children}
        />
    );
};

Tab.tabsRole = 'Tab';
