import React, { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';

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
     * Указывает, находится ли переключатель в неопределенном состоянии.
     **/
    indeterminate?: boolean,
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
    description?: string,
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

/**
 * Компонент `Checkbox` представляет собой переключатель, который позволяет пользователю выбирать один или несколько вариантов из группы.
 **/
export const Checkbox = forwardRef<HTMLInputElement | null, IProps>(({ tabIndex = 0, ...props }, ref) => {
    const cn = useClassnames(style, props.className);

    const elDescription = useMemo(() => {
        if(props.description) {
            return (
                <span
                    className={cn('checkbox__description')}
                    children={props.description}
                />
            );
        }
    }, [props.description]);

    return (
        <label
            id={props.id}
            className={cn('checkbox', {
                'checkbox_disabled'   : props.disabled,
                'checkbox_description': props.description
            })}
        >
            <input
                ref={ref}
                id={props.id ? `${props.id}-input` : undefined}
                name={props.name}
                role="checkbox"
                type="checkbox"
                aria-checked={props.indeterminate ? 'mixed' : !!props.checked}
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
                className={cn('checkbox__input', {
                    'checkbox__input_indeterminate': props.indeterminate
                })}
            />
            {props.label}
            {elDescription}
        </label>
    );
});
