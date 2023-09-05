import { createElement, ReactHTML, ReactNode } from 'react';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

export interface IProps {
    /**
     * Уникальный идентификатор компонента.
     **/
    readonly id?: string,
    /**
     * Один или несколько классов для стилизации компонента.
     **/
    readonly className?: TStyle | string,
    /**
     * Ориентация кнопок в группе.
     **/
    readonly direction?: 'row' | 'column',
    /**
     * Предустановленный стиль для компонента.
     **/
    readonly presetStyle?: 'desktop' | 'mobile',
    /**
     * Кнопки, которые нужно группировать.
     **/
    readonly children?: ReactNode,
    /**
     * Тег, который будет использоваться для рендеринга компонента.
     **/
    readonly tagName?: keyof ReactHTML | ''
}

/**
 * Компонент для группирования кнопок.
 **/
export const ButtonGroup = ({ direction = 'column', tagName = 'div', presetStyle = 'desktop', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    return createElement(tagName || 'div', {
        id       : props.id,
        children : props.children,
        className: cn('button-group', {
            [`button-group_${direction}`]  : direction,
            [`button-group_${presetStyle}`]: presetStyle
        })
    });
};
