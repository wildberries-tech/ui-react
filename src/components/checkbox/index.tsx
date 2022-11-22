import React, { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react';

import { IStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

type TAttributes = 'checked' | 'defaultChecked' | 'onChange' | 'onClick' | 'onBlur' | 'onFocus' | 'autoFocus' | 'id' | 'tabIndex' | 'disabled';

export interface IProps extends Pick<InputHTMLAttributes<HTMLInputElement>, TAttributes> {
    name: string,
    className?: string | IStyle,
    indeterminate?: boolean,
    label?: ReactNode,
    value?: string,
    defaultValue?: string,
    description?: string
}

export const Checkbox = forwardRef<HTMLInputElement | null, IProps>(({ tabIndex = 0, ...props }, ref) => {
    const cn = useClassnames<typeof style>(style, props.className);

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
            className={cn('checkbox', {
                'checkbox_disabled'   : props.disabled,
                'checkbox_description': props.description,
            })}
        >
            <input
                ref={ref}
                id={props.id}
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
