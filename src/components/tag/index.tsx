import React, { ReactNode, HTMLAttributes } from 'react';

import { IStyle, useClassnames } from '../../hooks/use-classnames';
import style from './index.module.pcss';

interface IProps extends Pick<HTMLAttributes<HTMLSpanElement>, 'onClick' | 'onDrag' | 'onMouseEnter' | 'onMouseLeave'> {
    id?: string,
    children?: ReactNode,
    className?: string | IStyle,
    presetStyle?: 'tag' | 'badge-success' | 'badge-rollbacked' | 'badge-active' | 'badge-processing' | 'badge-failed' | 'badge-purple',
    presetSize?: 'small' | 'medium' | 'large'
}

export const Tag = ({ presetSize = 'small', presetStyle = 'tag', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    return (
        <span
            id={props.id}
            onClick={props.onClick}
            onDrag={props.onDrag}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            children={props.children}
            className={cn('tag', {
                [`tag_style-${presetStyle}`]: presetStyle,
                [`tag_size-${presetSize}`]  : presetSize,
                'tag_interactive'           : !!props.onClick
            })}
        />
    );
};
