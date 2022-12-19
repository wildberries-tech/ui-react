import React, { forwardRef, TextareaHTMLAttributes, ReactNode, useMemo } from 'react';

import { IStyle, useClassnames } from '../../hooks/use-classnames';
import style from './index.module.pcss';

type TAttributes = 'id' | 'onChange' | 'onClick' | 'onBlur' | 'onFocus' | 'autoFocus' | 'tabIndex' | 'disabled' | 'maxLength' | 'minLength' | 'placeholder' | 'readOnly' | 'required' | 'autoComplete' | 'inputMode' | 'title' | 'autoCorrect' | 'cols' | 'rows' | 'wrap';

export interface IProps extends Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, TAttributes> {
    name: string,
    className?: string | IStyle,
    label?: ReactNode,
    value?: string,
    defaultValue?: string,
    isError?: boolean,
    elError?: ReactNode,
    elDescription?: ReactNode
}

export const InputTextarea = forwardRef<HTMLTextAreaElement | null, IProps>(({ tabIndex = 0, ...props }, ref) => {
    const cn = useClassnames<typeof style>(style, props.className);

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
                        'input-textarea__label_disabled': props.disabled || props.readOnly
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
        <label className={cn('input-textarea')}>
            {elLabel}
            <textarea
                ref={ref}
                id={props.id}
                name={props.name}
                value={props.value}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onClick={props.onClick}
                autoFocus={props.autoFocus}
                cols={props.cols}
                rows={props.rows}
                wrap={props.wrap}
                disabled={props.readOnly || props.disabled}
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
