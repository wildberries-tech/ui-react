import { createElement, ReactHTML, ReactNode } from 'react';

import { IStyle, useClassnames } from './../../hooks/use-classnames';
import style from './index.module.pcss';

export interface IProps {
    className?: IStyle | string,
    direction?: 'row' | 'column',
    presetStyle?: 'desktop' | 'mobile',
    children?: ReactNode,
    tagName?: keyof ReactHTML | ''
}

export const ButtonGroup = ({ direction = 'column', tagName = 'div', presetStyle = 'desktop', ...props }: IProps) => {
    const cn = useClassnames<typeof style>(style, props.className);

    return createElement(tagName || 'div', {
        children : props.children,
        className: cn('button-group', {
            [`button-group_${direction}`]  : direction,
            [`button-group_${presetStyle}`]: presetStyle
        })
    });
};
