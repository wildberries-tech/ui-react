import React, { FieldsetHTMLAttributes, ReactNode, useMemo } from 'react';

import { TStyle, useClassnames } from '../../hooks/use-classnames';
import { Text } from '../typography/text';

import style from './index.module.pcss';

export interface IProps extends Pick<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'disabled' | 'id'> {
    children: ReactNode,
    className?: string | TStyle,
    legend?: ReactNode,
    direction?: 'row' | 'column'
}

export const RadioGroup = ({ direction = 'row', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    const elLegend = useMemo(() => {
        if(props.legend) {
            return (
                <Text
                    tagName="legend"
                    className={cn('radio-group__legend')}
                    children={props.legend}
                />
            );
        }
    }, [props.legend]);

    return (
        <fieldset
            id={props.id}
            disabled={props.disabled}
            className={cn('radio-group', {
                [`radio-group_${direction}`]: direction
            })}
        >
            {elLegend}
            {props.children}
        </fieldset>
    );
};
