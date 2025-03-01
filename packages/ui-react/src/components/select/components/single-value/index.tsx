import React from 'react';
import  { components, GroupBase, SingleValueProps } from 'react-select';

import { IOption, TSelectProps } from '../../types';
import { useOption } from '../../hooks/use-options';

interface IProps<IsMulti extends boolean = boolean> extends TSelectProps<IsMulti> {
    readonly option: SingleValueProps<IOption, IsMulti, GroupBase<IOption>>
}

export const SingleValue = ({ option }: IProps) => {
    const { getOptionBefore, getOptionAfter } = useOption({});

    return (
        <components.SingleValue {...option}>
            {getOptionBefore(option)}
            {option.children}
            {getOptionAfter(option)}
        </components.SingleValue>
    );
};
