import { IProps, IOption } from '../types';

export const getParams = <IsMulti extends boolean = false>(props: IProps<IsMulti>) => {
    const {
        placeholder = '',  
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isLoading, className, classNames, onInputChange, options,
        ...restProps 
    } = props;

    return {
        placeholder,
        ...restProps,
        getOptionLabel: (option: IOption) => option.label,
        isOptionDisabled: (option: IOption) => !!option.disabled
    };
};