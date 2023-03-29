import React, { useMemo, AnchorHTMLAttributes } from 'react';

import { IStyle, useClassnames } from '../../hooks/use-classnames';
import style from './index.module.pcss';

type TPick = 'title' | 'children' | 'onClick' | 'href' | 'target' | 'download';

export interface IProps extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, TPick> {
    className?: IStyle | string,
    presetStyle?: 'default' | 'active',
    isDisabled?: boolean
}

export const NavItem = ({ className, isDisabled, presetStyle = 'default', ...props }: IProps) => {
    const cn = useClassnames(style, className);

    const title = useMemo(() => {
        if(props.title) {
            return props.title;
        }

        if(typeof props.children === 'string') {
            return props.children;
        }
    }, [props.title, props.children]);

    return (
        <a
            {...props}
            className={cn('nav-item', {
                [`nav-item_preset-${presetStyle}`]: presetStyle,
                'nav-item_disabled'               : isDisabled
            })}
            title={title}
        />
    );
};
