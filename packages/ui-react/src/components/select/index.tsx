import React, { ReactNode, useCallback, useMemo } from 'react';
import SelectSource, {
    components,
    IndicatorsContainerProps,
    OptionProps,
    SingleValueProps,
    Props,
    GroupBase,
    PropsValue,
    ActionMeta,
    OptionsOrGroups,
    OnChangeValue,
    LoadingIndicatorProps,
    NoticeProps
} from 'react-select';
import { SelectComponents } from 'react-select/dist/declarations/src/components';
import { AsyncPaginate, useComponents } from 'react-select-async-paginate';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';
import { IconCheckMark } from '../icons/check-mark';
import { IconArrowsChevronBottom } from '../icons/arrows/chevron-bottom';
import { Loader } from '../loader';

import style from './index.module.pcss';

export declare type TOptionOrSingleValueProps<Option, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> =
    OptionProps<Option, IsMulti, Group>
    | SingleValueProps<Option, IsMulti, Group>;

interface IOption {
    label: string,
    value: string,
    elBefore?: ReactNode | ((option: TOptionOrSingleValueProps<IOption>) => ReactNode),
    elAfter?: ReactNode | ((option: TOptionOrSingleValueProps<IOption>) => ReactNode),
    disabled?: boolean
}

interface IPageParams {
    pageNumber?: number | string,
    pageSize?: number | string
}

interface ICallbackParams {
    [key: string | number]: string | number | boolean | null | undefined | ICallbackParams
}

type TSelectProps<IsMulti extends boolean = boolean> = Partial<Props<IOption, IsMulti, GroupBase<IOption>>>;

export interface IProps<IsMulti extends boolean = boolean> extends Omit<TSelectProps<IsMulti>, 'className'> {
    /**
     * Определяет позицию меню fixed или absolute
     **/
    readonly menuPosition?: TSelectProps['menuPosition'],
    /**
     * Включает возможность выбора нескольких опций
     **/
    readonly isMulti?: IsMulti,
    /**
     * Определяет CSS-классы, которые будут применены к корневому элементу или CSS модулю
     **/
    readonly className?: string | TStyle,
    /**
     * Коллеция выбранных значений
     **/
    readonly value?: PropsValue<IOption>,
    /**
     * Коллекция опций
     **/
    readonly options: OptionsOrGroups<IOption, GroupBase<IOption>>,
    /**
     * Срабатывает при изменении значения
     **/
    readonly onChange?: (newValue: OnChangeValue<IOption, IsMulti>, actionMeta: ActionMeta<IOption>) => void,
    /**
     * Выбранные опции по умолчанию
     **/
    readonly defaultValue?: PropsValue<IOption>,
    /**
     * Фильтрация опций
     **/
    /**
     * Приводит компонент в состояние ошибки
     **/
    readonly isError?: boolean,
    /**
     * Лейбл поля
     **/
    readonly label?: ReactNode,
    /**
     * Значение инпута по умолчанию
     **/
    readonly defaultInputValue?: TSelectProps['defaultInputValue'],
    /**
     * Скрывать выбранные опции
     **/
    readonly hideSelectedOptions?: TSelectProps['hideSelectedOptions'],
    /**
     * Открывает меню выбора
     **/
    readonly menuIsOpen?: TSelectProps['menuIsOpen'],
    /**
     * Открывать меню при первом рендере компонента
     **/
    readonly defaultMenuIsOpen?: TSelectProps['defaultMenuIsOpen'],
    /**
     * Режим чтения справа налево
     **/
    readonly isRtl?: TSelectProps['isRtl'],
    /**
     * Отображается пока не выбран не один элемент
     **/
    readonly placeholder?: TSelectProps['placeholder'],
    /**
     * Срабатывает при потере фокуса на элемента
     **/
    readonly onBlur?: TSelectProps['onBlur'],
    /**
     * Срабатывает при фокусе элемента
     **/
    readonly onFocus?: TSelectProps['onFocus'],
    /**
     * Срабатывает при нажатии кнопки
     **/
    readonly onKeyDown?: TSelectProps['onKeyDown'],
    /**
     * Срабатывает когда пользователь прокрутил меню до начала
     **/
    readonly onMenuScrollToTop?: TSelectProps['onMenuScrollToTop'],
    /**
     * Срабатывает когда пользователь прокрутил меню до конца
     **/
    readonly onMenuScrollToBottom?: TSelectProps['onMenuScrollToBottom'],
    /**
     * Открывать меню при фокусе на элемент
     **/
    readonly openMenuOnFocus?: TSelectProps['openMenuOnFocus'],
    /**
     * Открывать меню при клике
     **/
    readonly openMenuOnClick?: TSelectProps['openMenuOnClick'],
    /**
     * Количество элементов при нажатии клавиш вверх/вниз
     **/
    readonly pageSize?: TSelectProps['pageSize'],
    /**
     * Параметр `required` указывает, что данное поле является обязательным для заполнения перед отправкой формы
     */
    readonly required?: TSelectProps['required'],
    /**
     * Устанавливает порядок перехода по кнопке с помощью клавиши `Tab`.
     **/
    readonly tabIndex?: TSelectProps['tabIndex'],
    /**
     * Название инпута
     **/
    readonly name?: TSelectProps['name'],
    /**
     * Прокрутка меню при открытии
     **/
    readonly menuShouldScrollIntoView?: TSelectProps['menuShouldScrollIntoView'],
    /**
     * Блокировка прокрутки при открытом меню
     **/
    readonly menuShouldBlockScroll?: TSelectProps['menuShouldBlockScroll'],
    /**
     * Включает возможность поиска по опциям
     **/
    readonly isSearchable?: TSelectProps['isSearchable'],
    /**
     * Включает возможность очистки выбранного значения
     **/
    readonly isClearable?: TSelectProps['isClearable'],
    /**
     * Устанавливает фокус на элемент при первом рендере компонента
     **/
    readonly autoFocus?: TSelectProps['autoFocus'],
    /**
     * Удалять выбранную в данный момент опцию, когда пользователь нажимает клавишу Backspace при выборе isClearable или isMulti.
     **/
    readonly backspaceRemovesValue?: TSelectProps['backspaceRemovesValue'],
    /**
     * Удалять фокус ввода, когда пользователь выбирает опцию (удобно для отключения клавиатуры на сенсорных устройствах).
     **/
    readonly blurInputOnSelect?: TSelectProps['blurInputOnSelect'],
    /**
     * Когда пользователь достигает верхней/нижней части меню, запретите прокрутку родительского элемента прокрутки.
     **/
    readonly captureMenuScroll?: TSelectProps['captureMenuScroll'],
    /**
     * Закрывать меню выбора, когда пользователь выбирает опцию
     **/
    readonly closeMenuOnSelect?: TSelectProps['closeMenuOnSelect'],
    /**
     * Если `true`, закроет меню выбора, когда пользователь прокручивает `document/body`.
     *
     * Если `function` принимает стандартное событие `ScrollEvent`, вы возвращаете логическое значение: `true` - Меню закрывается, `false` - Меню остается открытым.
     *
     * Это полезно, когда у вас есть прокручиваемое модальное окно и вы хотите перенести меню, но хотите избежать артефактов.
     **/
    readonly closeMenuOnScroll?: TSelectProps['closeMenuOnScroll'],
    /**
     * Показывать ли значение в элементе Control
     **/
    readonly controlShouldRenderValue?: TSelectProps['controlShouldRenderValue'],
    /**
     * Очистить все значения и закрыть меню при нажатии `esc`
     **/
    readonly escapeClearsValue?: TSelectProps['escapeClearsValue'],
    /**
     * Фильтрация опций
     **/
    readonly filterOption?: TSelectProps['filterOption'],
    readonly classNames?: TSelectProps['classNames'],
    readonly components?: TSelectProps['components'],
    readonly formatGroupLabel?: TSelectProps['formatGroupLabel'],
    readonly getOptionLabel?: TSelectProps['getOptionLabel'],
    readonly getOptionValue?: TSelectProps['getOptionValue'],
    readonly inputValue?: TSelectProps['inputValue'],
    readonly isDisabled?: TSelectProps['isDisabled'],
    readonly isLoading?: TSelectProps['isLoading'],
    readonly isOptionDisabled?: TSelectProps['isOptionDisabled'],
    readonly loadingMessage?: TSelectProps['loadingMessage'],
    readonly maxMenuHeight?: TSelectProps['maxMenuHeight'],
    readonly menuPlacement?: TSelectProps['menuPlacement'],
    readonly minMenuHeight?: TSelectProps['minMenuHeight'],
    readonly noOptionsMessage?: TSelectProps['noOptionsMessage'],
    readonly onInputChange?: TSelectProps['onInputChange'],
    readonly onMenuClose?: TSelectProps['onMenuClose'],
    readonly onMenuOpen?: TSelectProps['onMenuOpen'],
    readonly screenReaderStatus?: TSelectProps['screenReaderStatus'],
    readonly styles?: TSelectProps['styles'],
    readonly tabSelectsValue?: TSelectProps['tabSelectsValue'],
    readonly unstyled?: TSelectProps['unstyled']
}

type TAsyncSelectProps<IsMulti extends boolean> = IProps<IsMulti> & {
    readonly typeComponent: 'async',
    readonly loadCallback: (pageParams: IPageParams, callbackParams: ICallbackParams | undefined) => unknown,
    readonly hasMore: boolean,
    readonly callbackParams?: ICallbackParams
};

type TSyncSelectProps<IsMulti extends boolean> = IProps<IsMulti> & {
    readonly typeComponent?: 'sync',
    readonly loadCallback?: never,
    readonly hasMore?: never,
    readonly callbackParams?: never
};

type TComponentSelectProps<IsMulti extends boolean> = TAsyncSelectProps<IsMulti> | TSyncSelectProps<IsMulti>;

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
    const cn = useClassnames(style, props.className);

    const elOptionSelected = useCallback((option: OptionProps<IOption, IsMulti, GroupBase<IOption>>) => {
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

    const elOptionBefore = useCallback((option: TOptionOrSingleValueProps<IOption, IsMulti, GroupBase<IOption>>) => {
        if(option.data.elBefore) {
            if(typeof option.data.elBefore === 'function') {
                return option.data.elBefore(option);
            }

            return option.data.elBefore;
        }
    }, []);

    const elOptionAfter = useCallback((option: TOptionOrSingleValueProps<IOption, IsMulti, GroupBase<IOption>>) => {
        if(option.data.elAfter) {
            if(typeof option.data.elAfter === 'function') {
                return option.data.elAfter(option);
            }

            return option.data.elAfter;
        }
    }, []);

    const componentOption = useCallback((option: OptionProps<IOption, IsMulti, GroupBase<IOption>>) => (
        <components.Option {...option}>
            {elOptionSelected(option)}
            {elOptionBefore(option)}
            {option.children}
            {elOptionAfter(option)}
        </components.Option>
    ), []);

    const componentSingleValue = useCallback((option: SingleValueProps<IOption, IsMulti, GroupBase<IOption>>) => (
        <components.SingleValue {...option}>
            {elOptionBefore(option)}
            {option.children}
            {elOptionAfter(option)}
        </components.SingleValue>
    ), []);

    const componentIndicatorsContainer = useCallback((option: IndicatorsContainerProps<IOption, IsMulti, GroupBase<IOption>>) => (
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
    ), []);

    const componentLoadingIndicator = useCallback((option: LoadingIndicatorProps<IOption, IsMulti, GroupBase<IOption>>) => (
        <components.LoadingIndicator {...option}>
            <Loader presetSize="small" />
        </components.LoadingIndicator>
    ), []);

    const componentLoadingMessage = useCallback((option: NoticeProps<IOption, IsMulti, GroupBase<IOption>>) => (
        <components.LoadingMessage {...option}>
            <Loader presetSize="small" />
        </components.LoadingMessage>
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

    const elContainer = useCallback((children: ReactNode) => {
        return (
            <label className={cn('select')}>
                {elLabel}
                {children}
            </label>
        );
    }, []);

    const loadOptions = useCallback(async (
        search: string,
        prevOptions: OptionsOrGroups<IOption, GroupBase<IOption>>
    ): Promise<{ options: Array<IOption | GroupBase<IOption>>, hasMore: boolean }> => {
        await props.loadCallback?.({ pageSize }, props.callbackParams);

        let filteredOptions;

        if(!search) {
            filteredOptions = props.options;
        } else {
            const searchLower = search.toLowerCase();

            filteredOptions = props.options.filter(({ label }) => label?.toLowerCase().includes(searchLower));
        }

        const hasMore = props.hasMore ?? false;
        const slicedOptions = filteredOptions.slice(
            prevOptions.length,
            prevOptions.length + pageSize
        );

        return {
            options: slicedOptions,
            hasMore
        };
    }, [props.options.length, props.hasMore, props.loadCallback, props.callbackParams]);

    const params = {
        placeholder: props.placeholder ?? '',
        options: props.options,
        isMulti: props.isMulti,
        hideSelectedOptions: props.hideSelectedOptions,
        menuIsOpen: props.menuIsOpen,
        defaultMenuIsOpen: props.defaultMenuIsOpen,
        defaultValue: props.defaultValue,
        filterOption: props.filterOption,
        isSearchable: isSearchable,
        name: props.name,
        isClearable: props.isClearable,
        escapeClearsValue: props.escapeClearsValue,
        value: props.value,
        autoFocus: props.autoFocus,
        isRtl: props.isRtl,
        backspaceRemovesValue: props.backspaceRemovesValue,
        blurInputOnSelect: props.blurInputOnSelect,
        captureMenuScroll: props.captureMenuScroll,
        closeMenuOnSelect: props.closeMenuOnSelect,
        closeMenuOnScroll: props.closeMenuOnScroll,
        controlShouldRenderValue: props.controlShouldRenderValue,
        isDisabled: props.isDisabled,
        defaultInputValue: props.defaultInputValue,
        menuShouldBlockScroll: props.menuShouldBlockScroll,
        menuShouldScrollIntoView: props.menuShouldScrollIntoView,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        onKeyDown: props.onKeyDown,
        onMenuScrollToTop: props.onMenuScrollToTop,
        onMenuScrollToBottom: props.onMenuScrollToBottom,
        onChange: props.onChange,
        openMenuOnFocus: props.openMenuOnFocus,
        openMenuOnClick: props.openMenuOnClick,
        pageSize: pageSize,
        tabIndex: props.tabIndex,
        menuPortalTarget: props.menuPortalTarget,
        menuPosition: props.menuPosition,
        getOptionLabel: (option: IOption) => option.label,
        isOptionDisabled: (option: IOption) => !!option.disabled
    };

    const classNames = {
        menu: () => cn('select__menu'),
        menuList: () => cn('select__menu-list'),
        singleValue: () => cn('select__single-value'),
        control: (option: { isDisabled: boolean }) => cn('select__control', {
            'select__control_disabled': option.isDisabled,
            'select__control_error': props.isError
        }),
        valueContainer: () => cn('select__value-container'),
        placeholder: () => cn('select__placeholder'),
        option: (option: { isDisabled: boolean, isFocused: boolean, isSelected: boolean }) => cn('select__option', {
            'select__option_focused': option.isFocused,
            'select__option_disabled': option.isDisabled,
            'select__option_selected': option.isSelected
        })
    };

    if(typeComponent === 'async') {
        return elContainer(
            <AsyncPaginate
                loadOptions={loadOptions}
                isLoading={isLoading}
                classNames={classNames}
                components={useComponents({
                    /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
                    Option: (option) => componentOption(option as OptionProps<IOption, IsMulti, GroupBase<IOption>>),
                    SingleValue: (option) => componentSingleValue(option as SingleValueProps<IOption, IsMulti, GroupBase<IOption>>),
                    IndicatorSeparator: null,
                    IndicatorsContainer: (option) => componentIndicatorsContainer(option as IndicatorsContainerProps<IOption, IsMulti, GroupBase<IOption>>),
                    LoadingIndicator: (option) => componentLoadingIndicator(option as LoadingIndicatorProps<IOption, IsMulti, GroupBase<IOption>>),
                    LoadingMessage: (option) => componentLoadingMessage(option as NoticeProps<IOption, IsMulti, GroupBase<IOption>>)
                    /* eslint-enable @typescript-eslint/no-unnecessary-type-assertion */
                }) as SelectComponents<IOption, IsMulti, GroupBase<IOption>>}
                {...params}
            />
        );
    }

    return elContainer(
        <SelectSource
            classNames={classNames}
            components={{
                Option: componentOption,
                SingleValue: componentSingleValue,
                IndicatorSeparator: null,
                IndicatorsContainer: componentIndicatorsContainer
            }}
            {...params}
        />
    );
};
