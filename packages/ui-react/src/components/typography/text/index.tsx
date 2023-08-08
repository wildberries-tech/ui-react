import { ComponentType, createElement, HTMLAttributes, useEffect } from 'react';

import { TStyle, useClassnames } from '../../../hooks/use-classnames';
import { typographyColor } from '../types';
import style from '../index.module.pcss';
import { consoleFormat } from '../../../tools/console-format';

export const typographyTextTags = ['p', 'span', 'strong', 'a', 'b', 'i', 'em', 'legend'] as const;
export const typographyTextSize = ['large', 'large-bold', 'body', 'body-bold', 'caption', 'caption-bold'] as const;

export type TTypographyTextTags = typeof typographyTextTags[number];
export type TTypographyTextSizes = typeof typographyTextSize[number];
export type TTypographyTextColor = typeof typographyColor[number];

export type TProps<
    Element = Omit<HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>, 'className'>,
    AdditionalProps = Record<PropertyKey, any>
> = Element & AdditionalProps & {
    /**
     * Параметр `className` используется для добавления пользовательских CSS классов к компоненту. Это позволяет настраивать внешний вид компонента с помощью пользовательских стилей.
     */
    className?: TStyle | string,
    /**
     * Параметр `presetSize` используется для задания размера текста из заранее установленного списка
     */
    presetSize?: TTypographyTextSizes,
    /**
     * DEPRECATED. Параметр `tagName` используется для задания тэга, который будет рендериться, заменён на `parent`
     */
    tagName?: TTypographyTextTags,
    /**
     * Параметр `presetColor` используется для задания цвета текста из заранее установленного списка
     */
    presetColor?: TTypographyTextColor,
    /**
     * Параметр `parent` заменил устаревший параметр `tagName` и используется для передачи кастомного компонента или тэга из списка, в который будет рендериться текст
     */
    parent?: TTypographyTextTags | ComponentType<any>
};

export const Text = ({
    presetSize = 'body',
    presetColor = 'basic',
    tagName,
    className,
    parent,
    ...props
}: TProps) => {
    const cn = useClassnames(style, className, true);
    const componentToRender = parent ?? 'p';

    useEffect(() => {
        if(tagName) {
            consoleFormat('Component: Text. Свойство `tagName` заменено на `parent`');
        }
    }, [tagName]);

    return createElement(componentToRender, {
        ...props,
        className: cn('typography', {
            [`typography_size-${presetSize}`]: presetSize,
            [`typography_color-${presetColor}`]: presetColor
        })
    });
};
