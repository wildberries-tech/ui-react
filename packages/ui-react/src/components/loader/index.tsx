import React from 'react';

import { TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

export interface IProps {
    /**
     * Уникальный идентификатор компонента.
     */
    id?: string,
    /**
     * Класс(ы) для дополнительного оформления компонента.
     */
    className?: TStyle | string,
    /**
     * Определяет размер лоадера
     */
    presetSize?: 'small' | 'medium' | 'large' | 'button',
    /**
     * Определяет цветовую схему лоадера, предустановленную разработчиком.
     */
    presetStyle?: 'white' | 'rich-grey' | 'grey' | 'red' | 'light-green' | 'dark-purple'
}

/**
 * Компонент Loader представляет собой индикатор загрузки.
 */
export const Loader = ({ presetSize = 'medium', presetStyle = 'white', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    return (
        <svg
            id={props.id}
            viewBox="0 0 50 50"
            className={cn('loader', {
                [`loader_${presetSize}`]: presetSize
            })}
        >
            <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="3"
                className={cn('loader__circle', {
                    [`loader__circle_${presetStyle}`]: presetStyle
                })}
            />
        </svg>
    );
};
