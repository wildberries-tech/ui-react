import { createElement, ReactHTML, ReactNode } from 'react';

import { TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

export interface IProps {
    /**
     * Уникальный идентификатор компонента.
     **/
    id?: string,
    /**
     * Один или несколько классов для стилизации компонента.
     **/
    className?: TStyle | string,
    /**
     * Ориентация кнопок в группе.
     **/
    direction?: 'row' | 'column',
    /**
     * Предустановленный стиль для компонента.
     **/
    presetStyle?: 'desktop' | 'mobile',
    /**
     * Кнопки, которые нужно группировать.
     **/
    children?: ReactNode,
    /**
     * Тег, который будет использоваться для рендеринга компонента.
     **/
    tagName?: keyof ReactHTML | ''
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
