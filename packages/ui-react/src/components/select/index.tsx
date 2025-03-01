import React, { useCallback } from 'react';
import SelectSource, {
    components,
    IndicatorsContainerProps,
    OptionProps,
    GroupBase,
    SingleValueProps,
    InputActionMeta
} from 'react-select';
import { AsyncPaginate } from 'react-select-async-paginate';

import { TComponentSelectProps, IOption } from './types';
import { useOption } from './hooks/use-options';
import { useGetClassnames } from './hooks/use-get-classnames';
import { NoOptions } from './components/no-options';
import { getParams } from './utils/get-params';
import { Option } from './components/option';
import { SingleValue } from './components/single-value';
import { IndicatorsContainer } from './components/indicators-container';
import { Container } from './components/container';

const DEFAULT_PAGE_SIZE = 10;

/**
 * Компонент позволяет создавать поля ввода с выпадающим списком
 **/
export const Select = <IsMulti extends boolean = false>({
    typeComponent = 'sync',
    isSearchable = false,
    isLoading = false,
    pageSize = DEFAULT_PAGE_SIZE,
    ...props
}: TComponentSelectProps<IsMulti>) => {
    const { classNames } = useGetClassnames({
        className: props.className,
        isError: props.isError 
    });

    const { getLoadOptions } = useOption({
        isOptionsForFetch: props.isOptionsForFetch,
        fetchOptions: props.fetchOptions 
    });

    const componentOption = useCallback((option: OptionProps<IOption, IsMulti, GroupBase<IOption>>) => (
        <Option
            option={option}
            className={props.className}
        />
    ), [props.className]);

    const componentSingleValue = useCallback((option: SingleValueProps<IOption, IsMulti, GroupBase<IOption>>) => <SingleValue option={option} />, []);

    const componentIndicatorsContainer = useCallback((option: IndicatorsContainerProps<IOption, IsMulti, GroupBase<IOption>>) => (
        <IndicatorsContainer
            option={option}
            className={props.className}
        />
    ), [props.className]);

    const componentNoOptions = useCallback(() => <NoOptions noOptionsText={props.noOptionsText} />, [props.noOptionsText]);

    const onInputChange = (newValue: string, actionMeta: InputActionMeta) => {
        if(newValue && props.onInputChange) {
            props.onInputChange(newValue, actionMeta);
        }
    };

    const params = getParams({
        ...props,
        isSearchable,
        pageSize 
    });

    if(typeComponent === 'async') {
        return (
            <Container label={props.label}>
                <AsyncPaginate<IOption, GroupBase<IOption>, unknown, IsMulti>
                    loadOptions={getLoadOptions}
                    isLoading={isLoading}
                    classNames={classNames}
                    onInputChange={onInputChange}
                    components={{
                        Option: (option) => componentOption(option),
                        SingleValue: (option) => componentSingleValue(option),
                        IndicatorSeparator: null,
                        IndicatorsContainer: (option) => componentIndicatorsContainer(option),
                        LoadingIndicator: components.LoadingIndicator,
                        NoOptionsMessage: componentNoOptions
                    }}
                    debounceTimeout={300}
                    {...params}
                />
            </Container>
        );
    }

    return (
        <Container label={props.label}>
            <SelectSource
                classNames={classNames}
                components={{
                    Option: componentOption,
                    SingleValue: componentSingleValue,
                    IndicatorSeparator: null,
                    IndicatorsContainer: componentIndicatorsContainer
                }}
                options={props.options}
                {...params}
            />
        </Container>
    );
};
