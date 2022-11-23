import React, { FieldsetHTMLAttributes, ReactNode, useMemo } from 'react';

import { IStyle, useClassnames } from '../../hooks/use-classnames';
import style from './index.module.pcss';

export interface IProps extends Pick<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'disabled'> {
    children: ReactNode,
    className?: string | IStyle,
    legend?: ReactNode,
    direction?: 'row' | 'column'
}

export const CheckboxGroup = ({ direction = 'row', ...props }: IProps) => {
    const cn = useClassnames<typeof style>(style, props.className);

    const elLegend = useMemo(() => {
        if(props.legend) {
            return (
                <legend
                    className={cn('checkbox-group__legend')}
                    children={props.legend}
                />
            );
        }
    }, [props.legend]);

    return (
        <fieldset
            disabled={props.disabled}
            className={cn('checkbox-group', {
                [`checkbox-group_${direction}`]: direction
            })}
        >
            {elLegend}
            {props.children}
        </fieldset>
    );
};
