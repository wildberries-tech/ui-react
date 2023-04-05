import { useMemo } from 'react';
import type { Value } from 'classnames';
import classnames, { Binding } from 'classnames/bind';

export type TStyle = Record<string, string>;

type TReturnFunction<TArgs> = (
    arg1: keyof TArgs | Partial<Record<keyof TArgs, Value>>,
    arg2?: keyof TArgs | Partial<Record<keyof TArgs, Value>>,
    arg3?: keyof TArgs | Partial<Record<keyof TArgs, Value>>,
    arg4?: keyof TArgs | Partial<Record<keyof TArgs, Value>>,
    arg5?: keyof TArgs | Partial<Record<keyof TArgs, Value>>,
    ...args: Array<keyof TArgs | Partial<Record<keyof TArgs, Value>>>
) => string;

// export function useClassnames<TTarget>(target: TTarget, source?: string, overwrite?: boolean): TReturnFunction<TTarget>;
export function useClassnames<TTarget, TSource>(target: TTarget, source?: TSource, overwrite?: boolean): TReturnFunction<TSource extends string ? TTarget : TTarget & TSource>;

export function useClassnames<TTarget, TSource>(target: TTarget, source?: TSource, overwrite?: boolean) {
    return useMemo(() => {
        if(source) {
            if(typeof source === 'object' && !Array.isArray(source)) {
                if(overwrite) {
                    return classnames.bind({
                        ...target,
                        ...source
                    } as Binding) as TReturnFunction<TTarget & TSource>;
                }

                const result = { ...target } as Record<string, string>;

                for(const [key, value] of Object.entries(source)) {
                    // @ts-ignore Need fix
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions
                    result[key] = result[key] ? `${result[key]} ${source[key]}` : value;
                }

                return classnames.bind(result) as TReturnFunction<TTarget & TSource>;
            }

            if(typeof source === 'string') {
                const result = { ...target } as Record<string, string>;
                const keys = Object.keys(result);
                const value = result[keys[0]];

                if(keys[0] && value) {
                    result[keys[0]] = `${value} ${source}`;
                }

                return classnames.bind(result as Binding) as TReturnFunction<TTarget>;
            }
        }

        return classnames.bind(target as Binding) as TReturnFunction<TTarget>;
    }, [target, source, overwrite]);
}

