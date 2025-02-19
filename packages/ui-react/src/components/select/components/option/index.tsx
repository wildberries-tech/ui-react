import React from 'react';
import  { components, OptionProps, GroupBase } from 'react-select';

import { IconCheckMark } from '../../../icons/check-mark';
import { IOption, TSelectProps } from '../../types';
import { useOption } from '../../hooks/use-options';
import { type TStyle, useClassnames } from '../../../../hooks/use-classnames';

import style from './index.module.pcss';

interface IProps<IsMulti extends boolean = boolean> extends Omit<TSelectProps<IsMulti>, 'className'> {
    readonly option: OptionProps<IOption, IsMulti, GroupBase<IOption>>,
    readonly className?: string | TStyle
}

export const Option = ({ option, className }: IProps) => {
    const cn = useClassnames(style, className);
    const { getOptionBefore, getOptionAfter } = useOption({});

    const elSelected = () => {
        if(option.isSelected) {
            return (
                <IconCheckMark
                    svg={{
                        className: cn('select__icon-check-mark', {
                            'select__icon-check-mark_disabled': option.isDisabled
                        })
                    }}
                />
            ); 
        }
    };

    return (
        <components.Option {...option}>
            {elSelected()}
            {getOptionBefore(option)}
            {option.children}
            {getOptionAfter(option)}
        </components.Option>
    );
};
