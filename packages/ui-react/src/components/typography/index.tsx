import { createElement, HTMLAttributes } from 'react';

import { TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

export const typographyTags = ['h1', 'h2', 'h3', 'h4', 'p', 'span'] as const;
export const typographySize = ['h1', 'h2', 'h3', 'h4', 'large', 'large-bold', 'body', 'body-bold', 'caption', 'caption-bold'] as const;
export const typographyColor = ['basic', 'secondary', 'headers', 'disabled', 'brand', 'brand-1', 'warning', 'success', 'error', 'inverse', 'link'] as const;

export type TTypographyTags = typeof typographyTags[number];
export type TTypographySizes = typeof typographySize[number];
export type TTypographyColor = typeof typographyColor[number];

export interface IProps extends Omit<HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>, 'className'> {
    className?: TStyle | string,
    size?: TTypographySizes,
    tag?: TTypographyTags,
    color?: TTypographyColor
}

export const Typography = ({ size = 'body', tag = 'p', color = 'basic', className, ...attrs }: IProps) => {
    const cn = useClassnames(style, className, true);

    return createElement(tag, {
        ...attrs,
        className: cn('typography', {
            [`typography_size-${size}`]: size,
            [`typography_color-${color}`]: color
        })
    });
};
