import React, { useState, useEffect, useMemo, ChangeEvent, useRef, useCallback } from 'react';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';
import { Dropdown } from '../dropdown';
import { DropdownOption } from '../dropdown/components/option';
import { IconArrowsChevronBottom } from '../icons/arrows/chevron-bottom';
import { Text } from '../typography/text';
import { InputText } from '../input-text';
import { debounce } from '../../tools/debounce';

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
    className?: string | TStyle,
    /**
     * Начальная страница по-умолчанию
     **/
    currentPage?: number,
    /**
     * Пресеты для выпадающего списка выбора количества записей, дефолт [5, 10, 20, 50, 100]
     **/
    itemsPerPagePreset?: Array<number>,
    /**
     * Объект переводов
     **/
    i18n: {
        label: string,
        placeholder?: string
    },
    /**
     * Количество айтемов на странице
     **/
    numberItemsPerPage: number,
    /**
     * Количество кнопок справа и слева от выборанной страницы
     **/
    numberOfEdgeButtons?: number,
    /**
     * Общее количество айтемов
     **/
    numberOfItems: number,
    /**
     * Количество средних кнопок
     **/
    numberOfMiddleButtons?: number,
    /**
     * Обработчик на смену страницы
     **/
    onChangePage?: (page: number) => void,
    /**
     * Обработчик на смену размера страницы
     **/
    onChangePageSize?: (pageSize: number) => void,
    /**
     * Показывать инпут ручного выбора страницы
     **/
    showPageInput?: boolean,
    /**
     * Изменить таймаут инпута ручного выбора страницы, дефолт 300 мс
     **/
    pageInputTimeout?: number,
    /**
     * Свойство позволяет объединить лейбл пагинации с триггером
     **/
    isTriggerCombined?: boolean
}

export const Pagination = ({
    numberOfEdgeButtons = 4,
    numberOfMiddleButtons = 3,
    currentPage = 1,
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
    const [currentPageState, setCurrentPageState] = useState(currentPage);
    const [numberItemsPerPage, setNumberItemsPerPage] = useState<number>(props.numberItemsPerPage);

    useEffect(() => {
        if(props.numberOfItems > 0 && numberItemsPerPage > 0) {
            setNumberOfPages(Math.ceil(props.numberOfItems / numberItemsPerPage));
        } else {
            setNumberOfPages(0);
        }
    }, [props.numberOfItems, props.numberItemsPerPage, numberItemsPerPage]);

    useEffect(() => {
        props.onChangePage?.(currentPageState);
    }, [currentPageState]);

    const resetInput = () => {
        setIsInputError(false);

        if($input.current) {
            $input.current.value = '';
        }
    };

    const handleChangePage = (page: number) => {
        setCurrentPageState(page);

        resetInput();
    };

    const onClickPreset = (preset: number) => {
        setNumberItemsPerPage(preset);

        resetInput();

        setCurrentPageState(1);

        props.onChangePageSize?.(preset);
    };

    const onSetCurrentPage = debounce((e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);

        setCurrentPageState(!isNaN(value) ? value : 1);

        setIsInputError(value > numberOfPages);
    }, pageInputTimeout);

    const options: Array<IOption> = itemsPerPagePreset.map((preset) => ({
        value  : String(preset),
        label  : String(preset)
    }));

    const elDefaultTrigger = useCallback((isCombined?: boolean) => {
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
                        className: cn('pagination__dropdown-trigger-icon')
                    }}
                />
            </div>
        );
    }, [numberItemsPerPage]);

    const elPaginationTrigger = useMemo(() => {
        if(props.isTriggerCombined) {
            return (
                <div className={cn('pagination__controls')}>
                    {label}
                    {elDefaultTrigger(true)}
                </div>
            );
        }

        return elDefaultTrigger();
    }, [numberItemsPerPage, props.isTriggerCombined, label]);

    if(props.showPageInput && !placeholder) {
        return (
            <Text presetColor="error">
                Для инпута ручного выбора страницы обязательно необходимо указать placeholder
            </Text>
        );
    }

    return (
        <div className={cn('pagination')}>
            <div className={cn('pagination__buttons-container')}>
                {!props.isTriggerCombined && label}
                <Dropdown
                    triggerElement={elPaginationTrigger}
                    render={(isOpen, onClose) => {
                        return options.map((option, index) => (
                            <DropdownOption
                                key={index}
                                onClick={() => {
                                    onClose();

                                    onClickPreset(option.value as number);
                                }}
                                className={cn('pagination__trigger')}
                            >
                                {option.label}
                            </DropdownOption>
                        ));
                    }}
                />
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
                <PaginationButtons
                    currentPage={currentPageState}
                    numberOfEdgeButtons={numberOfEdgeButtons}
                    numberOfMiddleButtons={numberOfMiddleButtons}
                    numberOfPages={numberOfPages}
                    onChangePage={handleChangePage}
                />
            </div>
        </div>
    );
};
