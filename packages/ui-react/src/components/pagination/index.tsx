import React, { useState, useEffect, ChangeEvent, useRef, useCallback } from 'react';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';
import { Dropdown } from '../dropdown';
import { DropdownOption } from '../dropdown/components/option';
import { IconArrowsChevronBottom } from '../icons/arrows/chevron-bottom';
import { Text } from '../typography/v1/text';
import { InputText } from '../input-text';
import { debounce } from '../../tools/debounce';
import { consoleFormat } from '../../tools/console-format';

import PaginationButtons from './pagination-buttons';
import styles from './index.module.pcss';

const ITEMS_PER_PAGE_PRESETS = [5, 10, 20, 50, 100];
const DEFAULT_DEBOUNCE_TIMEOUT = 300;

interface IOption {
    label: string,
    value: string | number,
    isChecked?: boolean,
    onClick?: (value: string | number) => void
}

export interface IProps {
    /**
     * Задает дополнительные CSS классы для стилизации компонента
     **/
    readonly className?: string | TStyle,
    /**
     * Начальная страница по-умолчанию
     **/
    readonly currentPage?: number,
    /**
     * Пресеты для выпадающего списка выбора количества записей, дефолт [5, 10, 20, 50, 100]
     **/
    readonly itemsPerPagePreset?: Array<number>,
    /**
     * Объект переводов
     **/
    readonly i18n: {
        label: string,
        placeholder?: string
    },
    /**
     * Количество айтемов на странице
     **/
    readonly numberItemsPerPage: number,
    /**
     * Количество кнопок справа и слева от выборанной страницы
     **/
    readonly numberOfEdgeButtons?: number,
    /**
     * Общее количество айтемов
     **/
    readonly numberOfItems: number,
    /**
     * Количество средних кнопок
     **/
    readonly numberOfMiddleButtons?: number,
    /**
     * Обработчик на смену страницы
     **/
    readonly onChangePage?: (page: number) => void,
    /**
     * Обработчик на смену размера страницы
     **/
    readonly onChangePageSize?: (pageSize: number) => void,
    /**
     * Обработчик на смену размера страницы и номера страницы
     **/
    readonly onChangePagination?: ({ pageSize, pageNumber }: { pageSize?: number, pageNumber: number }) => void,
    /**
     * Показывать инпут ручного выбора страницы
     **/
    readonly showPageInput?: boolean,
    /**
     * Изменить таймаут инпута ручного выбора страницы, дефолт 300 мс
     **/
    readonly pageInputTimeout?: number,
    /**
     * Свойство позволяет объединить лейбл пагинации с триггером
     **/
    readonly isTriggerCombined?: boolean,
    /**
     * Свойство определяет расположение триггера относительно кнопок
     **/
    readonly direction?: 'row' | 'column',
    /**
     * Свойство позволяет скрывать кнопки пагинации в случае, если страница одна
     **/
    readonly isHideButtonsWithOnePage?: boolean
}

export const Pagination = ({
    numberOfEdgeButtons = 4,
    numberOfMiddleButtons = 3,
    currentPage = 1,
    direction = 'row',
    pageInputTimeout = DEFAULT_DEBOUNCE_TIMEOUT,
    itemsPerPagePreset = ITEMS_PER_PAGE_PRESETS,
    i18n: {
        label = '',
        placeholder = ''
    },
    ...props
}: IProps) => {
    const cn = useClassnames(styles, props.className);
    const $input = useRef<HTMLInputElement>(null);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [isInputError, setIsInputError] = useState<boolean>(false);
    const [numberItemsPerPage, setNumberItemsPerPage] = useState<number>(props.numberItemsPerPage);

    useEffect(() => {
        if(props.numberOfItems > 0 && numberItemsPerPage > 0) {
            setNumberOfPages(Math.ceil(props.numberOfItems / numberItemsPerPage));
        } else {
            setNumberOfPages(0);
        }
    }, [props.numberOfItems, props.numberItemsPerPage, numberItemsPerPage]);

    useEffect(() => {
        if(props.onChangePage ?? props.onChangePageSize) {
            consoleFormat('Свойства `onChangePage` и `onChangePageSize` устарели и будут удалены в следующих релизах, используйте `onChangePagination`');
        }
    }, [props.onChangePage, props.onChangePageSize]);

    const resetInput = () => {
        setIsInputError(false);

        if($input.current) {
            $input.current.value = '';
        }
    };

    const onChangePage = (pageNumber: number) => {
        // TODO Deprecated, убрать в следующих релизах
        props.onChangePage?.(pageNumber);

        props.onChangePagination?.({
            pageNumber
        });

        resetInput();
    };

    const onClickPreset = (preset: number) => {
        setNumberItemsPerPage(preset);

        resetInput();

        // TODO Deprecated, убрать в следующих релизах
        props.onChangePageSize?.(preset);

        // TODO Deprecated, убрать в следующих релизах
        props.onChangePage?.(1);

        props.onChangePagination?.({
            pageSize: preset,
            pageNumber: 1
        });
    };

    const onSetCurrentPage = debounce((e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);

        // TODO Deprecated, убрать в следующих релизах
        props.onChangePage?.(!isNaN(value) ? value : 1);

        props.onChangePagination?.({
            pageNumber: !isNaN(value) ? value : 1
        });

        setIsInputError(value > numberOfPages);
    }, pageInputTimeout);

    const options: Array<IOption> = itemsPerPagePreset.map((preset) => ({
        value  : String(preset),
        label  : String(preset)
    }));

    const elDefaultTrigger = useCallback((isOpen: boolean, isCombined?: boolean) => {
        return (
            <div
                className={cn('pagination__dropdown-trigger', {
                    'pagination__dropdown-trigger_combined': isCombined
                })}
            >
                <Text
                    presetSize="large"
                    className={cn('pagination__dropdown-trigger-text')}
                >
                    {numberItemsPerPage}
                </Text>
                <IconArrowsChevronBottom
                    svg={{
                        className: cn('pagination__dropdown-trigger-icon', {
                            'pagination__dropdown-trigger-icon_is-open': isOpen
                        })
                    }}
                />
            </div>
        );
    }, [numberItemsPerPage]);

    const elPaginationTrigger = useCallback((isOpen: boolean) => {
        if(props.isTriggerCombined) {
            return (
                <div
                    className={cn('pagination__controls', {
                        'pagination__controls_combined': props.isTriggerCombined
                    })}
                >
                    {label}
                    {elDefaultTrigger(isOpen, true)}
                </div>
            );
        }

        return elDefaultTrigger(isOpen);
    }, [numberItemsPerPage, props.isTriggerCombined, label]);

    if(props.showPageInput && !placeholder) {
        return (
            <Text presetColor="error">
                Для свойства showPageInput обязательно необходимо указать i18n.placeholder
            </Text>
        );
    }

    if(props.showPageInput && direction === 'column') {
        return (
            <Text presetColor="error">
                Свойства showPageInput и direction === column несовместимы
            </Text>
        );
    }

    const isShowButtons = props.isHideButtonsWithOnePage ? numberOfPages > 1 : true;

    return (
        <div
            className={cn('pagination', {
                [`pagination_${direction}`]: direction === 'column'
            })}
        >
            <div
                className={cn('pagination__wrapper', {
                    'pagination__wrapper_combined': props.isTriggerCombined
                })}
            >
                {!props.isTriggerCombined && label}
                <Dropdown
                    isShouldCloseOnDisappear={false}
                    className={cn('pagination__dropdown')}
                    triggerElement={elPaginationTrigger}
                    render={(isOpen, onClose) => {
                        return options.map((option, index) => (
                            <DropdownOption
                                key={index}
                                onClick={() => {
                                    onClose();

                                    onClickPreset(option.value as number);
                                }}
                                className={cn('pagination__option')}
                            >
                                {option.label}
                            </DropdownOption>
                        ));
                    }}
                />
            </div>
            {props.showPageInput ? (
                <InputText
                    ref={$input}
                    className={cn('pagination__page-input')}
                    name="pageNumber"
                    autoComplete="off"
                    isError={isInputError}
                    onChange={onSetCurrentPage}
                    placeholder={placeholder}
                />
            ) : null}
            {isShowButtons ? (
                <PaginationButtons
                    currentPage={currentPage}
                    numberOfEdgeButtons={numberOfEdgeButtons}
                    numberOfMiddleButtons={numberOfMiddleButtons}
                    numberOfPages={numberOfPages}
                    onChangePage={onChangePage}
                />
            ) : null}
        </div>
    );
};
