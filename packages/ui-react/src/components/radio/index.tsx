import React, { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react';

import { TStyle, useClassnames } from '../../hooks/use-classnames';
import { Text } from '../typography/text';

import style from './index.module.pcss';

type TNative = InputHTMLAttributes<HTMLInputElement>;

export interface IProps {
    /**
     * Название поля ввода, которое будет отправлено на сервер вместе со значением.
     **/
    name: string,
    /**
     * Позволяет добавить пользовательские CSS-классы
     **/
    className?: string | TStyle,
    /**
     * Текст метки, связанной с переключателем.
     **/
    label?: ReactNode,
    /**
     * Значение, которое будет отправлено на сервер при отправке формы.
     **/
    value?: string,
    /**
     * Значение переключателя по умолчанию.
     **/
    defaultValue?: string,
    /**
     * Дополнительный текст, который поясняет, что выбирает переключатель.
     **/
    description?: ReactNode,
    /**
     * Устанавливает или определяет, должен ли компонент быть отмечен.
     **/
    checked?: TNative['checked'],
    /**
     * Определяет, должен ли флажок быть установлен при первоначальной загрузке компонента.
     **/
    defaultChecked?: TNative['defaultChecked'],
    /**
     * Функция обратного вызова, которая будет вызываться при изменении значения переключателя.
     **/
    onChange?: TNative['onChange'],
    /**
     * Функция обратного вызова, которая будет вызываться при клике на переключатель.
     **/
    onClick?: TNative['onClick'],
    /**
     * Функция обратного вызова, которая будет вызываться при потере фокуса на переключателе.
     **/
    onBlur?: TNative['onBlur'],
    /**
     * Функция обратного вызова, которая будет вызываться при получении фокуса на переключателе.
     **/
    onFocus?: TNative['onFocus'],
    /**
     * Указывает, должен ли компонент получать фокус при монтировании (отрисовке) на странице.
     **/
    autoFocus?: TNative['autoFocus'],
    /**
     * Уникальный идентификатор переключателя.
     **/
    id?: TNative['id'],
    /**
     * Порядковый номер элемента при переключении по `Tab`.
     **/
    tabIndex?: TNative['tabIndex'],
    /**
     * Определяет, будет ли компонент отключен.
     **/
    disabled?: TNative['disabled']
}

export const Radio = forwardRef<HTMLInputElement | null, IProps>(({ tabIndex = 0, ...props }, ref) => {
    const cn = useClassnames(style, props.className);

    const elDescription = useMemo(() => {
        if(props.description) {
            return (
                <span
                    className={cn('radio__description')}
                    children={props.description}
                />
            );
        }
    }, [props.description]);

    return (
        <label
            id={props.id}
            className={cn('radio', {
                'radio_disabled'   : props.disabled,
                'radio_description': !!props.description
            })}
        >
            <input
                ref={ref}
                id={props.id ? `${props.id}-input` : undefined}
                name={props.name}
                role="radio"
                type="radio"
                aria-checked={!!props.checked}
                checked={props.checked}
                defaultChecked={props.defaultChecked}
                value={props.value}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onClick={props.onClick}
                autoFocus={props.autoFocus}
                disabled={props.disabled}
                tabIndex={props.disabled ? -1 : tabIndex}
                className={cn('radio__input')}
            />
            <Text className={cn('radio__label', { 'radio__label_disabled': props.disabled })}>
                {props.label}
            </Text>
            {elDescription}
        </label>
    );
});
