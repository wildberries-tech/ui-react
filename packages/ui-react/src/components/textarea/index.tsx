import React, { forwardRef, TextareaHTMLAttributes, ReactNode, useMemo } from 'react';

import { TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

type TNative = TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface IProps {
    /**
     * Параметр `onChange` предназначен для обработки события изменения содержимого поля ввода текста.
     */
    onChange?: TNative['onChange'],
    /**
     * Параметр `onBlur` определяет функцию обратного вызова, которая будет вызвана, когда элемент теряет фокус (когда пользователь переключается на другой элемент на странице).
     */
    onBlur?: TNative['onBlur'],
    /**
     * Параметр `onFocus` определяет функцию обратного вызова, которая будет вызываться при фокусировке на элементе `textarea`.
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
     * Параметр `autoComplete` определяет, должен ли браузер автоматически заполнять значение в поле ввода.
     */
    autoComplete?: TNative['autoComplete'],
    /**
     * Параметр `inputMode` определяет режим ввода текста для поля ввода. Он определяет, какая клавиатура должна появляться при вводе текста на мобильных устройствах.
     */
    inputMode?: TNative['inputMode'],
    /**
     * Параметр `title` устанавливает значение атрибута `title` элемента `textarea`, которое используется для отображения всплывающей подсказки при наведении на элемент.
     */
    title?: TNative['title'],
    /**
     * Параметр `autoCorrect` определяет, должна ли браузерная автокоррекция включаться для вводимого текста в поле ввода.
     */
    autoCorrect?: TNative['autoCorrect'],
    /**
     * Параметр `cols` задает количество символов по горизонтали, которое будет отображаться в текстовом поле.
     */
    cols?: TNative['cols'],
    /**
     * Параметр `rows` определяет количество строк, которое будет отображаться в поле ввода текста.
     */
    rows?: TNative['rows'],
    /**
     * Параметр `wrap` задает тип переноса строк.
     */
    wrap?: TNative['wrap'],
    /**
     * Параметр `name` используется для установки имени элемента формы. Это имя будет отправлено на сервер вместе со значением текстового поля при отправке формы.
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
     * Используется для отображения дополнительной информации о поле ввода, например, подсказки или описания того, какое содержимое следует вводить в поле. Это элемент отображается рядом с самим полем ввода.
     *
     * Этот параметр может быть полезен, если вы хотите предоставить пользователю дополнительную информацию о том, как использовать поле ввода или какой формат должен иметь вводимый текст.
     */
    elDescription?: ReactNode,
    /**
     * Если параметр `id` не указан, то компонент будет создан без уникального идентификатора.
     */
    id?: string
}

/**
 * Компонент для отображения многострочного поля ввода текста.
 */
export const InputTextarea = forwardRef<HTMLTextAreaElement | null, IProps>(({ tabIndex = 0, ...props }, ref) => {
    const cn = useClassnames(style, props.className);

    const elRequired = useMemo(() => {
        if(props.required) {
            return (
                <sup
                    className={cn('input-textarea__label-required')}
                    children="*"
                />
            );
        }
    }, [props.required]);

    const elLabel = useMemo(() => {
        if(props.label) {
            return (
                <div
                    className={cn('input-textarea__label', {
                        'input-textarea__label_disabled': props.disabled ?? props.readOnly
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
                        className={cn('input-textarea__error')}
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
                        className={cn('input-textarea__description')}
                        children={props.elDescription}
                    />
                );
            }

            return props.elDescription;
        }
    }, [props.elDescription]);

    return (
        <label
            id={props.id}
            className={cn('input-textarea')}
        >
            {elLabel}
            <textarea
                ref={ref}
                name={props.name}
                value={props.value}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                autoFocus={props.autoFocus}
                cols={props.cols}
                rows={props.rows}
                wrap={props.wrap}
                disabled={props.readOnly ?? props.disabled}
                tabIndex={props.readOnly || props.disabled ? -1 : tabIndex}
                maxLength={props.maxLength}
                minLength={props.minLength}
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                required={props.required}
                autoComplete={props.autoComplete}
                inputMode={props.inputMode}
                title={props.title}
                autoCorrect={props.autoCorrect}
                className={cn('input-textarea__input', {
                    'input-textarea__input_is-error': props.isError
                })}
            />
            {elDescription}
            {elError}
        </label>
    );
});
