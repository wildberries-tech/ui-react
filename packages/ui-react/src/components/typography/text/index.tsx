import { createElement, HTMLAttributes } from 'react';

import { TStyle, useClassnames } from '../../../hooks/use-classnames';
import { typographyColor } from '../types';
import style from '../index.module.pcss';

export const typographyTextTags = ['p', 'span', 'strong', 'a', 'b', 'i', 'em', 'legend'] as const;
export const typographyTextSize = ['large', 'large-bold', 'body', 'body-bold', 'caption', 'caption-bold'] as const;

export type TTypographyTextTags = typeof typographyTextTags[number];
export type TTypographyTextSizes = typeof typographyTextSize[number];
export type TTypographyTextColor = typeof typographyColor[number];

export interface IProps extends Omit<HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>, 'className'> {
    className?: TStyle | string,
    presetSize?: TTypographyTextSizes,
    tagName?: TTypographyTextTags,
    presetColor?: TTypographyTextColor
}

export const Text = ({ presetSize = 'body', tagName = 'p', presetColor = 'basic', className, ...attrs }: IProps) => {
    const cn = useClassnames(style, className, true);

    return createElement(tagName, {
        ...attrs,
        className: cn('typography', {
            [`typography_size-${presetSize}`]: presetSize,
            [`typography_color-${presetColor}`]: presetColor
        })
    });
};
