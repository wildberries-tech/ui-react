import React from 'react';

import { Text } from '../../../typography/v2/text';
import { useClassnames } from '../../../../hooks/use-classnames';

import style from './index.module.pcss';

interface IProps {
    readonly noOptionsText?: string
}

export const NoOptions = ({ noOptionsText }: IProps) => {
    const cn = useClassnames(style);

    return (
        <div className={cn('select__no-options')}>
            <Text presetColor="secondary">
                {noOptionsText ?? 'No options'}
            </Text>
        </div>
    );
};