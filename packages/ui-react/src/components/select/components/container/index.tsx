import React, { ReactNode } from 'react';

import { useClassnames } from '../../../../hooks/use-classnames';

import style from './index.module.pcss';

interface IProps {
    readonly children: ReactNode,
    readonly label?: ReactNode
}

export const Container = ({ children, label }: IProps) => {
    const cn = useClassnames(style);

    return (
        <label className={cn('select__container')}>
            {label ? (
                <span
                    className={cn('select__label')}
                    children={label}
                />
            ) : null}
            {children}
        </label>
    );
};