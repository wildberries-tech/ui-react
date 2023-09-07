import React, { ReactNode, useCallback, useMemo } from 'react';
import SelectSource, { components, IndicatorsContainerProps, OptionProps, SingleValueProps, ActionMeta, OnChangeValue, Props } from 'react-select';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';
import { IconCheckMark } from '../icons/check-mark';
import { IconArrowsChevronBottom } from '../icons/arrows/chevron-bottom';

import style from './index.module.pcss';

interface IOption {
    label: string,
    value: string,
    elBefore?: ReactNode | ((option: OptionProps<IOption> | SingleValueProps<IOption>) => ReactNode),
    elAfter?: ReactNode | ((option: OptionProps<IOption> | SingleValueProps<IOption>) => ReactNode),
    disabled?: boolean
}

export interface IProps {
    /**
     * Определяет CSS-классы, которые будут применены к корневому элементу или CSS модулю
     **/
    readonly className?: string | TStyle,
    /**
     * Значение инпута по умолчанию
     **/
    readonly defaultInputValue?: Props['defaultInputValue'],
    /**
     * Включает возможность выбора нескольких опций
     **/
    readonly isMulti?: Props['isMulti'],
    /**
     * Скрывать выбранные опции
     **/
    readonly hideSelectedOptions?: Props['hideSelectedOptions'],
    /**
     * Открывает меню выбора
     **/
    readonly menuIsOpen?: Props['menuIsOpen'],
    /**
     * Открывать меню при первом рендере компонента
     **/
    readonly defaultMenuIsOpen?: Props['defaultMenuIsOpen'],
    /**
     * Режим чтения справа налево
     **/
    readonly isRtl?: Props['isRtl'],
    /**
     * Коллеция выбранных значений
     **/
    readonly value?: Array<IOption>,
    /**
     * Выбранные опции по умолчанию
     **/
    readonly defaultValue?: Array<IOption>,
    /**
     * Коллекция опций
     **/
    readonly options: Array<IOption>,
    /**
     * Отображается пока не выбран не один элемент
     **/
    readonly placeholder?: Props['placeholder'],
    /**
     * Срабатывает при потере фокуса на элемента
     **/
    readonly onBlur?: Props['onBlur'],
    /**
     * Срабатывает при фокусе элемента
     **/
    readonly onFocus?: Props['onFocus'],
    /**
     * Срабатывает при нажатии кнопки
     **/
    readonly onKeyDown?: Props['onKeyDown'],
    /**
     * Срабатывает когда пользователь прокрутил меню до начала
     **/
    readonly onMenuScrollToTop?: Props['onMenuScrollToTop'],
    /**
     * Срабатывает когда пользователь прокрутил меню до конца
     **/
    readonly onMenuScrollToBottom?: Props['onMenuScrollToBottom'],
    /**
     * Срабатывает при изменении значения
     **/
    readonly onChange?: (newValue: OnChangeValue<IOption, boolean>, actionMeta: ActionMeta<IOption>) => void,
    /**
     * Открывать меню при фокусе на элемент
     **/
    readonly openMenuOnFocus?: Props['openMenuOnFocus'],
    /**
     * Открывать меню при клике
     **/
    readonly openMenuOnClick?: Props['openMenuOnClick'],
    /**
     * Количество элементов при нажатии клавиш вверх/вниз
     **/
    readonly pageSize?: Props['pageSize'],
    /**
     * Параметр `required` указывает, что данное поле является обязательным для заполнения перед отправкой формы
     */
    readonly required?: Props['required'],
    /**
     * Устанавливает порядок перехода по кнопке с помощью клавиши `Tab`.
     **/
    readonly tabIndex?: Props['tabIndex'],
    /**
     * Название инпута
     **/
    readonly name?: Props['name'],
    /**
     * Прокрутка меню при открытии
     **/
    readonly menuShouldScrollIntoView?: Props['menuShouldScrollIntoView'],
    /**
     * Блокировка прокрутки при открытом меню
     **/
    readonly menuShouldBlockScroll?: Props['menuShouldBlockScroll'],
    /**
     * Включает возможность поиска по опциям
     **/
    readonly isSearchable?: Props['isSearchable'],
    /**
     * Включает возможность очистки выбранного значения
     **/
    readonly isClearable?: Props['isClearable'],
    /**
     * Устанавливает фокус на элемент при первом рендере компонента
     **/
    readonly autoFocus?: Props['autoFocus'],
    /**
     * Удалять выбранную в данный момент опцию, когда пользователь нажимает клавишу Backspace при выборе isClearable или isMulti.
     **/
    readonly backspaceRemovesValue?: Props['backspaceRemovesValue'],
    /**
     * Удалять фокус ввода, когда пользователь выбирает опцию (удобно для отключения клавиатуры на сенсорных устройствах).
     **/
    readonly blurInputOnSelect?: Props['blurInputOnSelect'],
    /**
     * Когда пользователь достигает верхней/нижней части меню, запретите прокрутку родительского элемента прокрутки.
     **/
    readonly captureMenuScroll?: Props['captureMenuScroll'],
    /**
     * Закрывать меню выбора, когда пользователь выбирает опцию
     **/
    readonly closeMenuOnSelect?: Props['closeMenuOnSelect'],
    /**
     * Если `true`, закроет меню выбора, когда пользователь прокручивает `document/body`.
     *
     * Если `function` принимает стандартное событие `ScrollEvent`, вы возвращаете логическое значение: `true` - Меню закрывается, `false` - Меню остается открытым.
     *
     * Это полезно, когда у вас есть прокручиваемое модальное окно и вы хотите перенести меню, но хотите избежать артефактов.
     **/
    readonly closeMenuOnScroll?: Props['closeMenuOnScroll'],
    readonly controlShouldRenderValue?: Props['controlShouldRenderValue'],
    /**
     * Очистить все значения и закрыть меню при нажатии `esc`
     **/
    readonly escapeClearsValue?: Props['escapeClearsValue'],
    /**
     * Фильтрация опций
     **/
    readonly filterOption?: Props['filterOption'],
    /**
     * Отключает поле ввода
     **/
    readonly isDisabled?: Props['isDisabled'],
    /**
     * Приводит компонент в состояние ошибки
     **/
    readonly isError?: boolean,
    /**
     * Лейбл поля
     **/
    readonly label?: ReactNode
}

/**
 * Компонент позволяет создавать поля ввода с выпадающим списком
 **/
export const Select = ({ isSearchable = false, ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    const elOptionSelected = useCallback((option: OptionProps<IOption>) => {
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
    }, []);

    const elOptionBefore = useCallback((option: OptionProps<IOption> | SingleValueProps<IOption>) => {
        if(option.data.elBefore) {
            if(typeof option.data.elBefore === 'function') {
                return option.data.elBefore(option);
            }

            return option.data.elBefore;
        }
    }, []);

    const elOptionAfter = useCallback((option: OptionProps<IOption> | SingleValueProps<IOption>) => {
        if(option.data.elAfter) {
            if(typeof option.data.elAfter === 'function') {
                return option.data.elAfter(option);
            }

            return option.data.elAfter;
        }
    }, []);

    const componentOption = useCallback((option: OptionProps<IOption>) => (
        <components.Option {...option}>
            {elOptionSelected(option)}
            {elOptionBefore(option)}
            {option.children}
            {elOptionAfter(option)}
        </components.Option>
    ), []);

    const componentSingleValue = useCallback((option: SingleValueProps<IOption>) => (
        <components.SingleValue {...option}>
            {elOptionBefore(option)}
            {option.children}
            {elOptionAfter(option)}
        </components.SingleValue>
    ), []);

    const componentIndicatorsContainer = useCallback((option: IndicatorsContainerProps<IOption>) => (
        <components.IndicatorsContainer {...option}>
            <IconArrowsChevronBottom
                svg={{
                    className: cn('select__icon-arrow-bottom', {
                        'select__icon-arrow-bottom_disabled': option.isDisabled,
                        'select__icon-arrow-bottom_open'    : option.selectProps.menuIsOpen
                    })
                }}
            />
        </components.IndicatorsContainer>
    ), []);

    const elLabel = useMemo(() => {
        if(props.label) {
            return (
                <span
                    className={cn('select__label')}
                    children={props.label}
                />
            );
        }
    }, [props.label]);

    return (
        <label className={cn('select')}>
            {elLabel}
            <SelectSource
                placeholder={props.placeholder ?? ''}
                options={props.options}
                isMulti={props.isMulti}
                hideSelectedOptions={props.hideSelectedOptions}
                menuIsOpen={props.menuIsOpen}
                defaultMenuIsOpen={props.defaultMenuIsOpen}
                defaultValue={props.defaultValue}
                filterOption={props.filterOption}
                isSearchable={isSearchable}
                name={props.name}
                isClearable={props.isClearable}
                escapeClearsValue={props.escapeClearsValue}
                value={props.value}
                autoFocus={props.autoFocus}
                isRtl={props.isRtl}
                backspaceRemovesValue={props.backspaceRemovesValue}
                blurInputOnSelect={props.blurInputOnSelect}
                captureMenuScroll={props.captureMenuScroll}
                closeMenuOnSelect={props.closeMenuOnSelect}
                closeMenuOnScroll={props.closeMenuOnScroll}
                controlShouldRenderValue={props.controlShouldRenderValue}
                isDisabled={props.isDisabled}
                defaultInputValue={props.defaultInputValue}
                menuShouldBlockScroll={props.menuShouldBlockScroll}
                menuShouldScrollIntoView={props.menuShouldScrollIntoView}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onKeyDown={props.onKeyDown}
                onMenuScrollToTop={props.onMenuScrollToTop}
                onMenuScrollToBottom={props.onMenuScrollToBottom}
                onChange={props.onChange}
                openMenuOnFocus={props.openMenuOnFocus}
                openMenuOnClick={props.openMenuOnClick}
                pageSize={props.pageSize}
                tabIndex={props.tabIndex}
                classNames={{
                    menu          : () => cn('select__menu'),
                    menuList      : () => cn('select__menu-list'),
                    singleValue   : () => cn('select__single-value'),
                    control       : (option) => cn('select__control', {
                        'select__control_disabled': option.isDisabled,
                        'select__control_error'   : props.isError
                    }),
                    valueContainer: () => cn('select__value-container'),
                    placeholder   : () => cn('select__placeholder'),
                    option        : (option) => cn('select__option', {
                        'select__option_focused' : option.isFocused,
                        'select__option_disabled': option.isDisabled,
                        'select__option_selected': option.isSelected
                    })
                }}
                components={{
                    Option             : componentOption,
                    SingleValue        : componentSingleValue,
                    IndicatorSeparator : null,
                    IndicatorsContainer: componentIndicatorsContainer
                }}
                getOptionLabel={(option) => option.label}
                isOptionDisabled={(option) => !!option.disabled}
            />
        </label>
    );
};
