import React from 'react';

import { SVG } from '../../../icons';
import { useClassnames } from '../../../../hooks/use-classnames';

import style from './index.module.pcss';

export interface IProps {
    readonly checked?: boolean,
    readonly indeterminate?: boolean,
    readonly disabled?: boolean
}

export const CheckboxIcon = (props: IProps) => {
    const cn = useClassnames(style);

    return (
        <SVG
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className={cn('checkbox-icon')}
        >
            <path
                className={cn('checkbox-icon__rect')}
                d="M2.223 4.741a2.968 2.968 0 0 1 2.518-2.518 23.042 23.042 0 0 1 6.518 0 2.968 2.968 0 0 1 2.518 2.518 23.049 23.049 0 0 1 0 6.518 2.968 2.968 0 0 1-2.518 2.518 23.049 23.049 0 0 1-6.518 0 2.968 2.968 0 0 1-2.518-2.518 23.042 23.042 0 0 1 0-6.518Z"
            />
            {props.indeterminate ? (
                <rect
                    className={cn('checkbox-icon__indeterminate')}
                    width="6"
                    height="2"
                    x="5"
                    y="7"
                    rx="1"
                />
            ) : (
                <path
                    className={cn('checkbox-icon__check')}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5 7.8 2.3 2.3 4.271-4.6"
                />
            )}
            {props.disabled && !props.checked && !props.indeterminate ? (
                <path
                    className={cn('checkbox-icon__disabled')}
                    d="m3 3 10 10"
                />
            ) : null}
        </SVG>
    );
};
