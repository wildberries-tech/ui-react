import { type TStyle, useClassnames } from '../../../hooks/use-classnames';
import style from '../index.module.pcss';

interface IProps {
    readonly isError?: boolean,
    readonly className?: string | TStyle
}

export const useGetClassnames = ({ isError, className }: IProps) => {
    const cn = useClassnames(style, className);

    return {
        classNames: {
            menu: () => cn('select__menu'),
            menuList: () => cn('select__menu-list'),
            singleValue: () => cn('select__single-value'),
            control: (option: { isDisabled: boolean }) => cn('select__control', {
                'select__control_disabled': option.isDisabled,
                'select__control_error': isError
            }),
            valueContainer: () => cn('select__value-container'),
            placeholder: () => cn('select__placeholder'),
            option: (option: { isDisabled: boolean, isFocused: boolean, isSelected: boolean }) => cn('select__option', {
                'select__option_focused': option.isFocused,
                'select__option_disabled': option.isDisabled,
                'select__option_selected': option.isSelected
            })
        } 
    };
};