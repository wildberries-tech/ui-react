import React, { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react';

import { TStyle, useClassnames } from '../../hooks/use-classnames';
import { Text } from '../typography/text';

import style from './index.module.pcss';

type TAttributes = 'checked' | 'defaultChecked' | 'onChange' | 'onClick' | 'onBlur' | 'onFocus' | 'autoFocus' | 'id' | 'tabIndex' | 'disabled';

export interface IProps extends Pick<InputHTMLAttributes<HTMLInputElement>, TAttributes> {
    name: string,
    className?: string | TStyle,
    label?: ReactNode,
    value?: string,
    defaultValue?: string,
    description?: ReactNode
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
