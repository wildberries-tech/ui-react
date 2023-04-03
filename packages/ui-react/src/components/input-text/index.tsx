import React, { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

type TNative = InputHTMLAttributes<HTMLInputElement>;

export interface IProps {
    /**
     * Если параметр `id` не указан, то компонент будет создан без уникального идентификатора.
     */
    id?: TNative['id'],
    /**
     * Параметр `onChange` предназначен для обработки события изменения содержимого поля ввода текста.
     */
    onChange?: TNative['onChange'],
    /**
     * Параметр `onBlur` определяет функцию обратного вызова, которая будет вызвана, когда элемент теряет фокус (когда пользователь переключается на другой элемент на странице).
     */
    onBlur?: TNative['onBlur'],
    /**
     * Параметр `onFocus` определяет функцию обратного вызова, которая будет вызываться при фокусировке на элементе `input`.
     */
    onFocus?: TNative['onFocus'],
    /**
     * Параметр `autoFocus` определяет, следует ли автоматически устанавливать фокус на элемент, когда компонент монтируется.
     */
    autoFocus?: TNative['autoFocus'],
    /**
     * Параметр `tabIndex` указывает порядковый номер элемента при переходе по клавише `Tab`. Это позволяет управлять табуляцией на странице и устанавливать последовательность перехода фокуса между элементами при нажатии на клавишу `Tab`.
     */
    tabIndex?: TNative['tabIndex'],
    /**
     * Параметр `disabled` указывает, должно ли поле ввода быть неактивным и не реагировать на пользовательский ввод. Если `disabled` установлен в `true`, пользователь не сможет редактировать текст в поле ввода и оно будет иметь соответствующий стиль, который указывает на то, что поле недоступно для редактирования.
     */
    disabled?: TNative['disabled'],
    /**
     * Параметр `maxLength` указывает максимальную длину текста, которую можно ввести в поле ввода. Если установлено значение `maxLength`, пользователь не сможет ввести более указанного количества символов. Если значение `maxLength` не задано, пользователь сможет ввести любое количество символов в поле ввода.
     */
    maxLength?: TNative['maxLength'],
    /**
     * Параметр `minLength` указывает на минимальное количество символов, которое пользователь должен ввести в поле ввода. Если значение этого параметра больше, чем длина введенного текста, то поле ввода будет считаться недопустимым (ошибочным) и будет отображаться соответствующая валидационная информация.
     */
    minLength?: TNative['minLength'],
    /**
     * Регулярное выражение, которому должно соответствовать значение поля.
     */
    pattern?: TNative['pattern'],
    /**
     * Параметр `placeholder` позволяет установить текст-подсказку внутри текстовой области, который будет отображаться, когда текстовая область пуста.
     */
    placeholder?: TNative['placeholder'],
    /**
     * Параметр `readOnly` определяет, может ли пользователь редактировать текст в поле ввода или нет.
     */
    readOnly?: TNative['readOnly'],
    /**
     * Параметр `required` указывает, что данное поле является обязательным для заполнения перед отправкой формы
     */
    required?: TNative['required'],
    /**
     * Количество символов, которое может отображаться одновременно в поле.
     */
    size?: TNative['size'],
    /**
     * Параметр `autoComplete` определяет, должен ли браузер автоматически заполнять значение в поле ввода.
     */
    autoComplete?: TNative['autoComplete'],
    /**
     * Параметр `inputMode` определяет режим ввода текста для поля ввода. Он определяет, какая клавиатура должна появляться при вводе текста на мобильных устройствах.
     */
    inputMode?: TNative['inputMode'],
    /**
     * Параметр `autoCorrect` определяет, должна ли браузерная автокоррекция включаться для вводимого текста в поле ввода.
     */
    autoCorrect?: TNative['autoCorrect'],
    /**
     * Параметр `title` устанавливает значение атрибута `title` элемента `textarea`, которое используется для отображения всплывающей подсказки при наведении на элемент.
     */
    title?: TNative['title'],
    /**
     * Параметр `name` используется для установки имени элемента формы. Это имя будет отправлено на сервер вместе со значением поля при отправке формы.
     */
    name: string,
    /**
     * Параметр `className` используется для добавления пользовательских CSS классов к компоненту. Это позволяет настраивать внешний вид компонента с помощью пользовательских стилей.
     */
    className?: string | TStyle,
    /**
     * Параметр `label` используется для установки текста метки для текстового поля. Метка обычно отображается рядом с текстовым полем и предназначена для описания.
     */
    label?: ReactNode,
    /**
     * Тип поля ввода.
     */
    type?: 'email' | 'password' | 'search' | 'text' | 'tel' | 'url',
    /**
     * Параметр `value` используется для задания значения поля.
     */
    value?: string,
    /**
     * Параметр `defaultValue` используется для задания начального значения поля.
     */
    defaultValue?: string,
    /**
     * Параметр `isError` указывает, имеет ли поле ввода ошибку или нет. Если значение этого параметра установлено в `true`, то для поля ввода будет применяться соответствующий стиль, который указывает на наличие ошибки ввода.
     */
    isError?: boolean,
    /**
     * Параметр `elError` задает элемент, который будет использован в качестве места вывода сообщения об ошибке, если `isError` имеет значение true. Это элемент содержащий текст ошибки, который отображается рядом с полем ввода или под ним.
     */
    elError?: ReactNode,
    /**
     * Элемент, который следует разместить справа от поля ввода.
     */
    elAfter?: ReactNode,
    /**
     * Элемент, который следует разместить слева от поля ввода.
     */
    elBefore?: ReactNode,
    /**
     * Используется для отображения дополнительной информации о поле ввода, например, подсказки или описания того, какое содержимое следует вводить в поле. Это элемент отображается рядом с самим полем ввода.
     *
     * Этот параметр может быть полезен, если вы хотите предоставить пользователю дополнительную информацию о том, как использовать поле ввода или какой формат должен иметь вводимый текст.
     */
    elDescription?: ReactNode
}

/**
 * Компонент InputText - это текстовый ввод, который позволяет пользователю вводить текст в поле ввода.
 */
export const InputText = forwardRef<HTMLInputElement | null, IProps>(({ tabIndex = 0, type = 'text', ...props }, ref) => {
    const cn = useClassnames(style, props.className);

    const elRequired = useMemo(() => {
        if(props.required) {
            return (
                <sup
                    className={cn('input-text__label-required')}
                    children="*"
                />
            );
        }
    }, [props.required]);

    const elLabel = useMemo(() => {
        if(props.label) {
            return (
                <div
                    className={cn('input-text__label', {
                        'input-text__label_disabled': props.disabled ?? props.readOnly
                    })}
                >
                    {props.label}
                    {elRequired}
                </div>
            );
        }
    }, [props.label, props.disabled, props.readOnly, elRequired]);

    const elError = useMemo(() => {
        if(props.elError) {
            if(typeof props.elError === 'string') {
                return (
                    <span
                        className={cn('input-text__error')}
                        children={props.elError}
                    />
                );
            }

            return props.elError;
        }
    }, [props.elError]);

    const elDescription = useMemo(() => {
        if(props.elDescription) {
            if(typeof props.elDescription === 'string') {
                return (
                    <span
                        className={cn('input-text__description')}
                        children={props.elDescription}
                    />
                );
            }

            return props.elDescription;
        }
    }, [props.elDescription]);

    return (
        <label
            className={cn('input-text')}
            id={props.id}
        >
            {elLabel}
            <div
                className={cn('input-text__field', {
                    'input-text__field_disabled'        : props.disabled,
                    'input-text__field_read-only'       : props.readOnly,
                    'input-text__field_is-error'        : props.isError,
                    'input-text__field_before-and-after': !!props.elBefore && !!props.elAfter,
                    'input-text__field_before'          : !!props.elBefore && !props.elAfter,
                    'input-text__field_after'           : !props.elBefore && !!props.elAfter
                })}
            >
                {props.elBefore}
                <input
                    ref={ref}
                    id={props.id ? `${props.id}-input` : undefined}
                    name={props.name}
                    type={type}
                    value={props.value}
                    defaultValue={props.defaultValue}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    autoFocus={props.autoFocus}
                    disabled={props.readOnly ?? props.disabled}
                    tabIndex={props.readOnly || props.disabled ? -1 : tabIndex}
                    maxLength={props.maxLength}
                    minLength={props.minLength}
                    pattern={props.pattern}
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    required={props.required}
                    size={props.size}
                    autoComplete={props.autoComplete}
                    inputMode={props.inputMode}
                    title={props.title}
                    autoCorrect={props.autoCorrect}
                    className={cn('input-text__input')}
                />
                {props.elAfter}
            </div>
            {elDescription}
            {elError}
        </label>
    );
});
