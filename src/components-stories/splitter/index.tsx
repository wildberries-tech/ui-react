import React, { ReactNode } from 'react';

import { IStyle, useClassnames } from '../../hooks/use-classnames';
import style from './index.module.pcss';

interface IProps {
    className?: string | IStyle,
    direction?: 'row' | 'column',
    children?: ReactNode,
    titles?: Array<string>
}

export const Splitter = ({ direction = 'column', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    if(Array.isArray(props.children) && props.children?.length) {
        return (
            <div
                className={cn('splitter', {
                    [`splitter_${direction}`]: !!direction
                })}
            >
                {props.children.map((item, index) => (
                    <div
                        key={index}
                        className={cn('splitter__item')}
                        data-title={props.titles?.[index]}
                    >
                        {item}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div
            children={props.children}
        />
    );
};
