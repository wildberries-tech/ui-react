import { useMemo } from 'react';
import classnames, { Binding } from 'classnames/bind';
import type { Argument, Value } from 'classnames';

export interface IStyle {
    [key: string]: string
}

type TReturnFunction<TArgs = Argument> = (
    arg1: keyof TArgs | Record<keyof TArgs, Value>,
    arg2?: keyof TArgs | Record<keyof TArgs, Value>,
    arg3?: keyof TArgs | Record<keyof TArgs, Value>,
    arg4?: keyof TArgs | Record<keyof TArgs, Value>,
    arg5?: keyof TArgs | Record<keyof TArgs, Value>,
    ...args: Array<keyof TArgs | Record<keyof TArgs, Value>>
) => string;

export const classNames = <TTarget = Binding, TSource = Binding>(targetStyle: Record<keyof TTarget, string>, sourceStyle?: Record<keyof TSource, string> | string, combine?: boolean): TReturnFunction<TTarget & TSource> => {
    if(typeof sourceStyle === 'object' && !Array.isArray(sourceStyle)) {
        if(combine === true) {
            const style: Binding = { ...targetStyle };
            const keys = Object.keys(sourceStyle);

            for(const key of keys) {
                style[key] = style[key] ? `${style[key]} ${sourceStyle[key]}` : sourceStyle[key];
            }

            return classnames.bind(style) as TReturnFunction<TTarget & TSource>;
        }

        return classnames.bind({
            ...targetStyle,
            ...sourceStyle
        }) as TReturnFunction<TTarget & TSource>;
    } else if(typeof sourceStyle === 'string') {
        const style = { ...targetStyle };
        const keys = Object.keys(style);

        if(keys[0]) {
            style[keys[0]] = `${style[keys[0]]} ${sourceStyle}`;
        }

        return classnames.bind(style) as TReturnFunction<TTarget & TSource>;
    }

    return classnames.bind(targetStyle) as TReturnFunction<TTarget & TSource>;
};


export const useClassnames = <TTarget = Binding, TSource = Binding>(targetStyle: Record<keyof TTarget, string>, sourceStyle?: Record<keyof TSource, string> | string, combine?: boolean) => {
    return useMemo(() => classNames<TTarget, TSource>(targetStyle, sourceStyle, combine), [targetStyle, sourceStyle, combine]);
};
