import { ComponentType, createElement, HTMLAttributes } from 'react';

import { TStyle, useClassnames } from '../../../hooks/use-classnames';
import { typographyColor } from '../types';
import style from '../index.module.pcss';

export const typographyTextTags = ['p', 'span', 'strong', 'a', 'b', 'i', 'em', 'legend'] as const;
export const typographyTextSize = ['large', 'large-bold', 'body', 'body-bold', 'caption', 'caption-bold'] as const;

export type TTypographyTextTags = typeof typographyTextTags[number];
export type TTypographyTextSizes = typeof typographyTextSize[number];
export type TTypographyTextColor = typeof typographyColor[number];

export type TProps<
    Element = Omit<HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>, 'className'>,
    AdditionalProps = Record<PropertyKey, any>
> = Element & {
    /**
     * Параметр `className` используется для добавления пользовательских CSS классов к компоненту. Это позволяет настраивать внешний вид компонента с помощью пользовательских стилей.
     */
    className?: TStyle | string,
    /**
     * Параметр `presetSize` используется для задания размера текста из заранее установленного списка
     */
    presetSize?: TTypographyTextSizes,
    /**
     * Параметр `tagName` используется для задания тэга или компонента, который будет рендериться
     */
    tagName?: TTypographyTextTags | ComponentType<any>,
    /**
     * Параметр `presetColor` используется для задания цвета текста из заранее установленного списка
     */
    presetColor?: TTypographyTextColor,
    /**
     * Параметр `componentProps` используется для пробрасывания пропсов в кастомный компонент из свойства `tagName`
     */
    componentProps?: AdditionalProps
};

export const Text = ({
    presetSize = 'body',
    presetColor = 'basic',
    tagName = 'p',
    className,
    ...props
}: TProps) => {
    const cn = useClassnames(style, className, true);
    const textClassName = cn('typography', {
        [`typography_size-${presetSize}`]: presetSize,
        [`typography_color-${presetColor}`]: presetColor
    });

    if(typeof tagName === 'string') {
        return createElement(tagName, {
            ...props,
            className: textClassName
        });
    }

    return createElement(tagName, {
        ...props.componentProps,
        className: textClassName
    });
};
