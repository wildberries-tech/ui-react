import { createElement, HTMLAttributes } from 'react';

import { TStyle, useClassnames } from '../../../hooks/use-classnames';
import { typographyColor } from '../types';
import style from '../index.module.pcss';

export const typographyTitleTags = ['h1', 'h2', 'h3', 'h4'] as const;

export type TTypographyTitleTags = typeof typographyTitleTags[number];
export type TTypographyTitleColor = typeof typographyColor[number];

export interface IProps extends Omit<HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>, 'className'> {
    className?: TStyle | string,
    tagName?: TTypographyTitleTags,
    presetColor?: TTypographyTitleColor
}

export const Title = ({ tagName = 'h1', presetColor = 'basic', className, ...attrs }: IProps) => {
    const cn = useClassnames(style, className, true);

    return createElement(tagName, {
        ...attrs,
        className: cn('typography', {
            [`typography_size-${tagName}`]: tagName,
            [`typography_color-${presetColor}`]: presetColor
        })
    });
};
