import { ReactNode } from 'react';
import {
    OptionProps,
    SingleValueProps,
    Props,
    GroupBase,
    PropsValue,
    ActionMeta,
    OptionsOrGroups,
    OnChangeValue
} from 'react-select';

import type { TStyle } from '../../hooks/use-classnames';

export declare type TOptionOrSingleValueProps<Option, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> =
    OptionProps<Option, IsMulti, Group>
    | SingleValueProps<Option, IsMulti, Group>;

export interface IOption {
    label: string,
    value: string,
    elBefore?: ReactNode | ((option: TOptionOrSingleValueProps<IOption>) => ReactNode),
    elAfter?: ReactNode | ((option: TOptionOrSingleValueProps<IOption>) => ReactNode),
    disabled?: boolean
}

export type TSelectProps<IsMulti extends boolean = boolean> = Partial<Props<IOption, IsMulti, GroupBase<IOption>>>;

export type TArrayOptions = Array<IOption | GroupBase<IOption>>;

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
    readonly options?: OptionsOrGroups<IOption, GroupBase<IOption>>,
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
    // readonly components?: TSelectProps['components'],
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
    readonly unstyled?: TSelectProps['unstyled'],
    readonly noOptionsText?: string
}

type TAsyncSelectProps<IsMulti extends boolean> = IProps<IsMulti> & {
    readonly typeComponent: 'async',
    /**
     * функция, загружающая асинхронно новые опции
     **/
    readonly fetchOptions: (search?: string) => Promise<TArrayOptions>,
    /**
     * параметр, который указывает, есть ли еще данные для подгрузки
     **/
    readonly isOptionsForFetch: boolean
};

type TSyncSelectProps<IsMulti extends boolean> = IProps<IsMulti> & {
    readonly typeComponent?: 'sync',
    readonly fetchOptions?: never,
    readonly isOptionsForFetch?: never
};

export type TComponentSelectProps<IsMulti extends boolean> = TAsyncSelectProps<IsMulti> | TSyncSelectProps<IsMulti>;
