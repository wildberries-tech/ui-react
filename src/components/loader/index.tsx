import React from 'react';

import { IStyle, useClassnames } from './../../hooks/use-classnames';
import style from './index.module.pcss';

export interface IProps {
    id?: string,
    className?: IStyle | string,
    presetSize?: 'small' | 'medium' | 'large' | 'button',
    presetStyle?: 'white' | 'rich-grey' | 'grey' | 'red' | 'light-green' | 'dark-purple'
}

export const Loader = ({ presetSize = 'medium', presetStyle = 'white', ...props }: IProps) => {
    const cn = useClassnames<typeof style>(style, props.className);

    return (
        <svg
            id={props.id}
            viewBox="0 0 50 50"
            className={cn('loader', {
                [`loader_${presetSize}`]: presetSize
            })}
        >
            <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="3"
                className={cn('loader__circle', {
                    [`loader__circle_${presetStyle}`]: presetStyle
                })}
            />
        </svg>
    );
};
