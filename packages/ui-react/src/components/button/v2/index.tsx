import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { isFragment, isElement } from 'react-is';

import { type TStyle, useClassnames } from '../../../hooks/use-classnames';

import style from './index.module.pcss';

type TNative = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IProps {
    /**
     * Устанавливает связь с формой
     **/
    form?: TNative['form'],
    /**
     * CSS класс или классы, которые будут применены к кнопке.
     **/
    className?: TStyle | string,
    /**
     * Устанавливает размер кнопки.
     **/
    presetSize?: 'medium' | 'small',
    /**
     * Устанавливает стиль кнопки.
     **/
    presetStyle?: 'primary' | 'primary-circle' | 'secondary' | 'secondary-circle' | 'interface' | 'interface-circle' | 'error' | 'ghost' | 'ghost-error',
    /**
     * Если установлен в true, то кнопка будет в состоянии загрузки.
     **/
    isLoading?: boolean,
    /**
     * Если установлен в true, то кнопка будет компактной.
     **/
    isCompact?: boolean,
    /**
     * Уникальный идентификатор для кнопки.
     **/
    id?: TNative['id'],
    /**
     * Устанавливает тип кнопки.
     **/
    type?: TNative['type'],
    /**
     * Устанавливает порядок перехода по кнопке с помощью клавиши `Tab`.
     **/
    tabIndex?: TNative['tabIndex'],
    /**
     * Определяет функцию обратного вызова, которая будет вызвана при фокусировке на кнопке.
     **/
    onFocus?: TNative['onFocus'],
    /**
     * Определяет функцию обратного вызова, которая будет выполнена при нажатии на кнопку.
     **/
    onClick?: TNative['onClick'],
    /**
     * Содержимое кнопки.
     **/
    children?: TNative['children'],
    /**
     * Устанавливает горячую клавишу для кнопки.
     **/
    accessKey?: TNative['accessKey'],
    /**
     * Если установлен в true, то кнопка будет заблокирована.
     **/
    disabled?: TNative['disabled']
}

const isValidCompact = (element: IProps['children']) => {
    // @ts-expect-error Непонятно как быть с типом
    return isElement(element) && !!(element.type === 'svg' || !isFragment(element) && element.type.name?.startsWith('Icon'));
};

const isCompact = (element: IProps['children']) => {
    console.log('asd', element);

    return !Array.isArray(element) && isValidCompact(element);
};

/**
 * Компонент `Button` представляет собой кнопку, которая может использоваться для выполнения каких-либо действий в приложении.
 **/
export const Button = forwardRef<HTMLButtonElement | null, IProps>(({ presetSize = 'medium', presetStyle = 'primary', type = 'button', ...props }, ref) => {
    const cn = useClassnames(style, props.className);

    return (
        <button
            id={props.id}
            type={type}
            ref={ref}
            form={props.form}
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            disabled={props.isLoading || props.disabled}
            tabIndex={props.isLoading || props.disabled ? -1 : props.tabIndex}
            onFocus={props.onFocus}
            onClick={props.onClick}
            accessKey={props.accessKey}
            className={cn('button', {
                [`button_${presetSize}`] : presetSize,
                [`button_${presetStyle}`]: presetStyle,
                'button_is-loading'      : props.isLoading,
                'button_compact'         : typeof props.isCompact === 'undefined' ? isCompact(props.children) : props.isCompact
            })}
            children={props.children}
        />
    );
});
