import React from 'react';
import  { components, IndicatorsContainerProps, GroupBase } from 'react-select';

import { IconArrowsChevronBottom } from '../../../icons/arrows/chevron-bottom';
import { IOption, TSelectProps } from '../../types';
import { type TStyle, useClassnames } from '../../../../hooks/use-classnames';

import style from './index.module.pcss';

interface IProps<IsMulti extends boolean = boolean> extends Omit<TSelectProps<IsMulti>, 'className'> {
    readonly option: IndicatorsContainerProps<IOption, IsMulti, GroupBase<IOption>>,
    readonly className?: string | TStyle
}

export const IndicatorsContainer = ({ option, className }: IProps) => {
    const cn = useClassnames(style, className);

    return (
        <components.IndicatorsContainer {...option}>
            <IconArrowsChevronBottom
                svg={{
                    className: cn('select__icon-arrow-bottom', {
                        'select__icon-arrow-bottom_disabled': option.isDisabled,
                        'select__icon-arrow-bottom_open': option.selectProps.menuIsOpen
                    })
                }}
            />
        </components.IndicatorsContainer>
    );
};
