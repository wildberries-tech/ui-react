import { ReactNode, createElement, ReactHTML } from 'react';

import { useDesignTokens, IOptions } from '../hook';

export interface IProps extends IOptions {
    children?: ReactNode,
    tagName?: keyof ReactHTML
}

export const DesignTokens = ({ tagName = 'div', ...props }: IProps) => {
    const attrs = useDesignTokens({
        className: props.className
    });

    return createElement(tagName, {
        ...attrs,
        children: props.children
    });
};
