import React, { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react';

import { IStyle, useClassnames } from '../../hooks/use-classnames';
import style from './index.module.pcss';

type TAttributes = 'id' | 'onChange' | 'onClick' | 'onBlur' | 'onFocus' | 'autoFocus' | 'tabIndex' | 'disabled' | 'maxLength' | 'minLength' | 'pattern' | 'placeholder' | 'readOnly' | 'required' | 'size' | 'autoComplete' | 'inputMode' | 'title' | 'autoCorrect';

export interface IProps extends Pick<InputHTMLAttributes<HTMLInputElement>, TAttributes> {
    name: string,
    className?: string | IStyle,
    label?: ReactNode,
    type?: 'email' | 'password' | 'search' | 'text' | 'tel' | 'url',
    value?: string,
    defaultValue?: string,
    isError?: boolean,
    elError?: ReactNode,
    elAfter?: ReactNode,
    elBefore?: ReactNode,
    elDescription?: ReactNode
}

export const InputText = forwardRef<HTMLInputElement | null, IProps>(({ tabIndex = 0, type = 'text', ...props }, ref) => {
    const cn = useClassnames<typeof style>(style, props.className);

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
                        'input-text__label_disabled': props.disabled || props.readOnly
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
                    id={props.id}
                    name={props.name}
                    type={type}
                    value={props.value}
                    defaultValue={props.defaultValue}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    onClick={props.onClick}
                    autoFocus={props.autoFocus}
                    disabled={props.readOnly || props.disabled}
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
