import React, { useMemo, ReactNode, InputHTMLAttributes, useState, useEffect } from 'react';

import { IconCalendar } from '../icons/calendar';
import { TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

type TAttributes = 'id' | 'onChange' | 'onClick' | 'onBlur' | 'onKeyDownCapture' | 'onKeyUpCapture' | 'onFocus' | 'autoFocus' | 'tabIndex' | 'disabled' | 'maxLength' | 'minLength' | 'pattern' | 'placeholder' | 'readOnly' | 'required' | 'size' | 'autoComplete' | 'inputMode' | 'title' | 'autoCorrect';

export interface IProps extends Pick<InputHTMLAttributes<HTMLInputElement>, TAttributes> {
    readonly name: string,
    readonly className?: TStyle | string,
    readonly direction?: 'row' | 'column',
    readonly minDate?: string,
    readonly maxDate?: string,
    readonly label?: ReactNode,
    readonly tabIndex?: number,
    readonly elError?: boolean,
    readonly elIcon?: boolean,
    readonly value?: string,
    readonly defaultValue?: string,
    readonly type?: 'datetime-local' | 'date'
}

export const InputDate = ({ type = 'date', elIcon = true, minDate, maxDate, ...props }: IProps) => {
    const cn = useClassnames(style, props.className);
    const [inputValue, setInputValue] = useState<string | undefined>(props.value);

    useEffect(() => {
        setInputValue(props.value);
    }, [props.value]);

    const elLabel = useMemo(() => {
        if(props.label) {
            return (
                <div
                    className={cn('input-date__label', {
                        'input-date__label_disabled': props.disabled ?? props.readOnly,
                        'input-date__label_required': props.required
                    })}
                    children={props.label}
                />
            );
        }
    }, [props.label, props.disabled, props.readOnly, props.required]);

    const elPlaceholder = useMemo(() => {
        if(props.placeholder && !inputValue) {
            return (
                <span className={cn('input-date__input-placeholder')}>
                    {props.placeholder}
                </span>
            );
        }
    }, [props.placeholder, inputValue]);

    const elIconElement = useMemo(() => {
        if(elIcon) {
            return (
                <IconCalendar
                    svg={{
                        className: cn('input-date__icon')
                    }}
                />
            );
        }
    }, [elIcon]);

    const elInput = () => {
        return (
            <div
                className={cn('input-date__field', {
                    'input-date__field_disabled': props.disabled,
                    'input-date__field_read-only': props.readOnly
                })}
            >
                <input
                    {...props}
                    disabled={props.disabled}
                    type={type}
                    min={minDate}
                    max={maxDate}
                    onChange={(event) => {
                        const { value } = event.target;

                        setInputValue(value);

                        props.onChange?.(event);
                    }}
                    className={cn('input-date__input', {
                        'input-date__input_filled': inputValue
                    })}
                />
                {elPlaceholder}
                {elIconElement}
            </div>
        );
    };

    return (
        <label className={cn('input-date')}>
            {elLabel}
            {elInput()}
        </label>
    );
};

export default InputDate;
