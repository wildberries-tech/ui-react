import React, { ButtonHTMLAttributes, useMemo } from 'react';
import { isFragment, isElement } from 'react-is';

import { IStyle, useClassnames } from './../../hooks/use-classnames';
import { Loader } from './../loader';
import style from './index.module.pcss';

type TAttributes = 'type' | 'tabIndex' | 'onFocus' | 'onClick' | 'children' | 'accessKey' | 'disabled';

export interface IProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, TAttributes> {
    className?: IStyle | string,
    presetSize?: 'large' | 'medium' | 'small',
    presetStyle?: 'primary' | 'default' | 'dashed' | 'ghost' | 'negative' | 'success' | 'deprecated',
    isLoader?: boolean,
    isCompact?: boolean
}

const LOADER_STYLE_MAP = {
    primary   : 'white',
    default   : 'rich-grey',
    dashed    : 'rich-grey',
    ghost     : 'rich-grey',
    negative  : 'red',
    success   : 'rich-grey',
    deprecated: 'white'
} as const;

const isValidCompact = (element: IProps['children']) => {
    // @ts-ignore
    return isElement(element) && (element.type === 'svg' || (!isFragment(element) && element.type.name?.startsWith('Icon')));
};

const isCompact = (element: IProps['children']) => {
    return Array.isArray(element) ? element.every(isValidCompact) : isValidCompact(element);
};

export const Button = ({ presetSize = 'medium', presetStyle = 'default', type = 'button', ...props }: IProps) => {
    const cn = useClassnames<typeof style>(style, props.className);

    const elChildren = useMemo(() => {
        if(props.isLoader) {
            return (
                <Loader
                    presetStyle={LOADER_STYLE_MAP[presetStyle]}
                    presetSize="button"
                />
            );
        }

        return props.children;
    }, [props.children, props.isLoader, presetStyle]);

    return (
        <button
            type={type}
            disabled={props.isLoader || props.disabled}
            tabIndex={props.isLoader || props.disabled ? -1 : props.tabIndex}
            onFocus={props.onFocus}
            onClick={props.onClick}
            accessKey={props.accessKey}
            className={cn('button', {
                [`button_${presetSize}`] : presetSize,
                [`button_${presetStyle}`]: presetStyle,
                'button_compact'         : typeof props.isCompact === 'undefined' ? isCompact(props.children) : props.isCompact
            })}
            children={elChildren}
        />
    );
};
