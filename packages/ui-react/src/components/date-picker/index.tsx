import React, { ChangeEvent, Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    add,
    addDays,
    eachDayOfInterval,
    endOfISOWeek,
    endOfMonth,
    endOfWeek,
    isAfter,
    isBefore,
    isFirstDayOfMonth,
    isLastDayOfMonth,
    isSameDay,
    isSameMonth,
    isToday,
    startOfDay,
    startOfISOWeek,
    startOfMonth,
    startOfWeek,
    isWithinInterval,
    addYears,
    addMonths,
    startOfYear,
    eachWeekOfInterval,
    Locale,
    parse,
    isValid
} from 'date-fns';
import { ru } from 'date-fns/locale';
import { createPortal } from 'react-dom';

import { getWeekDaysList, TWeekdays, useDateFnsFormatWithOptions } from '../../hooks/use-format-with-options';
import { consoleFormat } from '../../tools/console-format';
import { IconCalendarDates } from '../icons/calendar-dates';
import { IconArrowsArrowRight } from '../icons/arrows/arrow-right';
import { IconArrowsArrowLeft } from '../icons/arrows/arrow-left';
import { IconClear } from '../icons/clear';
import { Checkbox } from '../checkbox';
import { Dropdown } from '../dropdown';
import { Button } from '../button/v1';
import { useClassnames, TStyle } from '../../hooks/use-classnames';
import { InputDate } from '../input-date';
import { Text } from '../typography/text';

import style from './index.module.pcss';

type TDateValuesArray = Array<Date>;

type TControls = 'whole-period' | 'start-date' | 'end-date' | 'apply';

interface IDays {
    name: TWeekdays,
    isWeekend: boolean
}

export interface IConfigI18n {
    translation: Record<TControls, string>,
    locale?: Locale
}

export interface IProps {
    /**
     * Параметр `className` используется для добавления пользовательских CSS классов к компоненту. Это позволяет настраивать внешний вид компонента с помощью пользовательских стилей.
     */
    readonly className?: string | TStyle,
    /**
     * Параметр `dropdownClassName` используется для добавления пользовательских CSS классов к компоненту Dropdown
     */
    readonly dropdownClassName?: TStyle,
    /**
     * Параметр `readOnly` делает компонент доступным только для чтения
     */
    readonly readOnly?: boolean,
    /**
     * Параметр `isDateRange` для указания, что поле содержит интервал
     */
    readonly isDateRange?: boolean,
    /**
     * Параметр `maxPeriodDays` для указания максимального периода в днях
     */
    readonly maxPeriodDays?: number,
    /**
     * Параметр `disableDatesInPast` отключает возмодность выбора дат в прошлом
     */
    readonly disableDatesInPast?: boolean,
    /**
     * Параметр `defaultMinDate` указывает минимальную дату
     */
    readonly defaultMinDate?: Date,
    /**
     * Параметр `defaultMaxDate` указывает максимальную дату
     */
    readonly defaultMaxDate?: Date,
    /**
     * Параметр `disabledDates` указывает отключнные даты
     */
    readonly disabledDates?: TDateValuesArray,
    /**
     * Параметр `disabledDates` указывает отключнные даты
     */
    readonly defaultSelectedDate?: TDateValuesArray,
    /**
     * Параметр `weekView` включает отображение вида в неделях. Пока не реализован
     */
    readonly weekView?: boolean,
    /**
     * Параметр `onChange` - функция, которая срабатывает на изменении значения
     */
    readonly onChange?: (value: TDateValuesArray) => void,
    /**
     * Параметр `i18nConfig` - конфиг переводов компонента
     */
    readonly i18nConfig: IConfigI18n,
    /**
     * Параметр `isMobile` включает мобильный вид
     */
    readonly isMobile?: boolean,
    /**
     * Параметр `qa` для тестовых целей
     */
    readonly qa?: boolean,
    /**
     * Параметр `container` позволяет указать альтернативный контейнер для рендера
     */
    readonly container?: HTMLElement,
    /**
     * Параметр `disabled` позволяет отключить ввод данных в компонент
     */
    readonly disabled?: boolean,
    /**
     * Параметр `isDateInputsReadOnly` позволяет отключить ввод данных в инпуты даты
     */
    readonly isDateInputsReadOnly?: boolean
}

interface ICalendarDate {
    day: Date,
    sameMonth?: boolean,
    disabled?: boolean,
    lastMonthDate?: boolean,
    firstMonthDate?: boolean,
    isToday?: boolean
}

type TDates = Array<Array<ICalendarDate>>;

type TMonths = Array<Array<Array<ICalendarDate>>>;

interface ICalendar {
    month: Date,
    selected: Date,
    dates: TDates,
    months: TMonths
}

const elementFromPoint = (x: number, y: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if(document.elementFromPoint !== undefined) {
        return document.elementFromPoint(x, y);
    }

    return null;
};

const isElementVisible = (el?: Element): boolean | undefined => {
    if(!el) {
        return;
    }

    const rect = el.getBoundingClientRect();
    const vWidth = window.innerWidth || document.documentElement.clientWidth;
    const vHeight = window.innerHeight || document.documentElement.clientHeight;

    if(rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) {
        return false;
    }

    const leftTopPosition = el.contains(elementFromPoint(rect.left, rect.top));
    const rightTopPosition = el.contains(elementFromPoint(rect.right, rect.top));
    const rightBottomPosition = el.contains(elementFromPoint(rect.right, rect.bottom));
    const leftBottomPosition = el.contains(elementFromPoint(rect.left, rect.bottom));

    return leftBottomPosition || rightBottomPosition || leftTopPosition || rightTopPosition || false;
};

const defaultSelectedDateEmpty: TDateValuesArray = [];
const defaultTranslationConfig = {
    translation: {
        'whole-period': 'Не указано значение',
        'start-date': 'Не указано значение',
        'end-date': 'Не указано значение',
        'apply': 'Не указано значение'
    },
    locale: ru
};

export const DatePicker = ({
    container = document.body,
    defaultSelectedDate = defaultSelectedDateEmpty,
    i18nConfig = defaultTranslationConfig,
    ...props
}: IProps) => {
    const cn = useClassnames(style, props.className);
    const locale = useMemo(() => {
        return i18nConfig.locale ?? defaultTranslationConfig.locale;
    }, [i18nConfig]);
    const format = useDateFnsFormatWithOptions(locale);

    const $container = useRef<HTMLDivElement>(null);

    const defaultMinDate = props.defaultMinDate ?? startOfYear(new Date());
    const defaultMaxDate = props.defaultMaxDate ?? new Date();

    const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<Date>();
    const [minDate, setMinDate] = useState<Date>(defaultMinDate);
    const [maxDate, setMaxDate] = useState<Date>(defaultMaxDate);
    const [selectedPeriod, setSelectedPeriod] = useState<TDateValuesArray>(defaultSelectedDate);
    const [currentHoveredDate, setCurrentHoveredDate] = useState<ICalendarDate | null>(null);
    const [displayDate, setDisplayDate] = useState<string>();
    const [isAllPeriod, setIsAllPeriod] = useState<boolean>(!!defaultSelectedDate.length);

    const defaultCalendar = {
        month   : defaultSelectedDate[0] ? new Date(defaultSelectedDate[0]) : new Date(),
        selected: defaultSelectedDate[0] ? new Date(defaultSelectedDate[0]) : new Date(),
        dates   : [],
        months  : []
    };

    const [calendar, setCalendar] = useState<ICalendar>(defaultCalendar);

    const disabledDatesInPast = useMemo(() => {
        return props.disableDatesInPast ? isSameMonth(calendar.month, new Date()) : false;
    }, [props.disableDatesInPast, calendar.month]);

    useEffect(() => {
        if(props.qa) {
            consoleFormat('DatePicker: Свойство `qa` нежелательно в продакшене');
        }
    }, [props.qa]);

    useEffect(() => {
        if(!props.isDateRange && defaultSelectedDate.length > 1) {
            consoleFormat('DatePicker: Свойство `isDateRange=false` не поддержвает длину `defaultSelectedDate` более 1');
        }
    }, [props.isDateRange, defaultSelectedDate]);

    const isSelected = (day: Date) => {
        if(selected) {
            return isSameDay(day, selected);
        }

        const selectedWithValues = selectedPeriod.filter((value) => Boolean(value));

        if(props.isDateRange && selectedWithValues.length === 2) {
            const datesArray = eachDayOfInterval({
                start: selectedWithValues[0],
                end: selectedWithValues[1]
            });
            const found = datesArray.find((el) => {
                return el.getTime() === day.getTime();
            });

            if(found) {
                return true;
            }
        } else if(selectedWithValues.length === 1) {
            return selectedWithValues[0].getTime() === day.getTime();
        }

        return false;
    };

    const calculateMonthDates = (week: Array<Date>, monthArg: Date) => {
        return week.map((weekDay) => eachDayOfInterval({
            start: startOfISOWeek(weekDay),
            end  : endOfISOWeek(weekDay)
        }).map((day) => {
            let disabled = false;

            if(props.disableDatesInPast) {
                disabled = isBefore(day, startOfDay(new Date()));
            }

            if(props.maxPeriodDays && !disabled) {
                disabled = isBefore(addDays(startOfDay(new Date()), props.maxPeriodDays), day);
            }

            if(!disabled) {
                disabled = isBefore(day, minDate) && (!isSameDay(day, minDate) || isAfter(day, maxDate));
            }

            if(props.disabledDates && !disabled) {
                disabled = !!props.disabledDates.find((date) => isSameDay(day, date));
            }

            if(props.disabled && !disabled) {
                disabled = true;
            }

            return {
                day,
                disabled,
                sameMonth     : isSameMonth(monthArg, day),
                isToday       : isToday(day),
                firstMonthDate: isFirstDayOfMonth(day),
                lastMonthDate : isLastDayOfMonth(day)
            };
        }));
    };

    const setDates = () => {
        setCalendar((prev) => {
            const next = { ...prev };

            next.months = [];

            return next;
        });

        if(props.isDateRange) {
            let monthPeriod = startOfYear(calendar.month);
            const newMonths: TMonths = [];

            for(let i = 0; i < 12; i += 1) {
                const weekDates = eachWeekOfInterval(
                    {
                        start: startOfMonth(monthPeriod),
                        end  : endOfMonth(monthPeriod)
                    },
                    { weekStartsOn: 1 }
                );

                newMonths.push(calculateMonthDates(weekDates, monthPeriod));

                monthPeriod = add(monthPeriod, { months: 1 });
            }

            setCalendar((prev) => {
                const next = { ...prev };

                next.months = newMonths;

                return next;
            });
        } else {
            const weekDates = eachWeekOfInterval(
                {
                    start: startOfMonth(calendar.month),
                    end  : endOfMonth(calendar.month)
                },
                { weekStartsOn: 1 }
            );

            setCalendar((prev) => {
                const next = { ...prev };

                next.months[0] = calculateMonthDates(weekDates, calendar.month);

                return next;
            });
        }
    };

    useEffect(() => {
        setDates();
    }, [calendar.month, minDate, maxDate, props.disabled]);

    const writeValue = (value: Array<Date> | undefined, callback?: () => void): void => {
        if(value) {
            if(!props.isDateRange) {
                setSelected(value[0]);
                const dateTime = format(value[0], 'dd.MM.yyyy');

                setDisplayDate(dateTime);
            } else if(value[0]?.getTime() > new Date(0).getTime()) {
                setCalendar((prev) => ({
                    ...prev,
                    month: !selectedPeriod.length ? value[0] : calendar.month
                }));

                setSelectedPeriod(value);

                if(value.length) {
                    value.sort((a, b) => {
                        return a.getTime() - b.getTime();
                    });

                    console.log('value', value);

                    const firstSelectedPeriod = value[0] ? format(value[0], 'dd.MM.yyyy') : '';
                    const secondSelectedPeriod = value[1] ? format(value[1], 'dd.MM.yyyy') : '';

                    if(isSameDay(value[0], value[1])) {
                        setDisplayDate(firstSelectedPeriod);
                    } else {
                        setDisplayDate(`${firstSelectedPeriod} - ${secondSelectedPeriod}`);
                    }
                }
            }

            setCalendar(defaultCalendar);

            setDates();

            callback?.();

            if(props.isMobile) {
                setIsMobileOpen(false);
            }

            props.onChange?.(value);
        }
    };

    useEffect(() => {
        if(!props.defaultMinDate && defaultSelectedDate[0]) {
            setMinDate(defaultSelectedDate[0]);
        }

        if(!props.defaultMaxDate && defaultSelectedDate[1]) {
            setMaxDate(defaultSelectedDate[1]);
        }
    }, [props.defaultMaxDate, props.defaultMinDate]);

    useEffect(() => {
        if(defaultSelectedDate.length && !selectedPeriod.length) {
            setSelectedPeriod(defaultSelectedDate);

            writeValue(defaultSelectedDate);
        }
    }, [selectedPeriod, defaultSelectedDate]);

    const setDate = (date: ICalendarDate | [ICalendarDate, ICalendarDate]) => {
        if(Array.isArray(date)) {
            const daysArray = [...date.map((dateItem) => dateItem.day)];

            setSelectedPeriod(daysArray);
        } else if(!date.disabled) {
            if(props.isDateRange) {
                let newSelectedPeriod = [...selectedPeriod];

                if(props.weekView) {
                    setSelectedPeriod([
                        startOfWeek(date.day, { weekStartsOn: 1 }),
                        endOfWeek(date.day, { weekStartsOn: 1 })
                    ]);
                } else {
                    if(newSelectedPeriod.length === 2) {
                        newSelectedPeriod = [];
                    }

                    if(newSelectedPeriod.length === 1) {
                        newSelectedPeriod.push(date.day);
                    }

                    if(newSelectedPeriod.length === 0) {
                        newSelectedPeriod.push(date.day);
                    }

                    const isSameDayMinDate = isSameDay(newSelectedPeriod[0], minDate);
                    const isSameDayMaxDate = isSameDay(newSelectedPeriod[1], maxDate);

                    if(isSameDayMinDate && isSameDayMaxDate) {
                        setIsAllPeriod(true);
                    } else {
                        setIsAllPeriod(false);
                    }
                }

                setSelectedPeriod(newSelectedPeriod);
            } else {
                writeValue([date.day]);
            }
        }
    };

    const onMouseEnterDate = (date: ICalendarDate) => {
        if(selectedPeriod[0]) {
            setCurrentHoveredDate(date);
        }
    };

    const onChangeCheckboxButt = (event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;

        setIsAllPeriod(checked);

        if(checked) {
            setDate([{ day: minDate }, { day: maxDate }]);
        }
    };

    const onChangeDate = (index: 0 | 1) => (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const parsedString = parse(value, 'yyyy-MM-dd', new Date());

        setSelectedPeriod((prev) => {
            const newSelectedPeriod = [...prev];

            if(index >= 0 && isValid(parsedString)) {
                newSelectedPeriod[index] = parsedString;

                // console.log({newSelectedPeriod, maxDate, minDate})
                //
                if(isAfter(newSelectedPeriod[index], maxDate)) {
                    newSelectedPeriod[index] = new Date(maxDate);
                } else if(isBefore(newSelectedPeriod[index], minDate)) {
                    newSelectedPeriod[index] = new Date(minDate);

                    newSelectedPeriod[index].setDate(newSelectedPeriod[index].getDate() + 1);
                }

                if(index === 0 && isAfter(newSelectedPeriod[0], newSelectedPeriod[1])) {
                    newSelectedPeriod[1] = new Date(newSelectedPeriod[0]);

                    newSelectedPeriod[1].setDate(newSelectedPeriod[1].getDate());
                } else if(index === 1 && isAfter(newSelectedPeriod[0], newSelectedPeriod[1])) {
                    newSelectedPeriod[0] = new Date(newSelectedPeriod[1]);

                    newSelectedPeriod[0].setDate(newSelectedPeriod[0].getDate());
                }
            }

            console.log('NEW SELECTED', newSelectedPeriod);

            return newSelectedPeriod;
        });
    };

    const onScrollToCurrentItem = () => {
        setTimeout(() => {
            const modal = document.getElementById('date-body');

            if(modal) {
                const target = modal.querySelectorAll('[data-scroll]');
                const elementVisible = isElementVisible(target[0]);

                if(elementVisible !== undefined && !elementVisible) {
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                    if(target[0].scrollIntoView !== undefined) {
                        target[0].scrollIntoView({
                            block   : 'start',
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    };

    const onClickTrigger = () => {
        if(props.isMobile) {
            setIsMobileOpen(true);
        }

        onScrollToCurrentItem();
    };

    useEffect(() => {
        if(selectedPeriod[0] || selectedPeriod[1]) {
            onScrollToCurrentItem();
        }
    }, [selectedPeriod]);

    const elMonthItem = useCallback((monthItem: TMonths[number], onClose?: () => void) => {
        const days: Array<IDays> = [{
            name     : 'monday',
            isWeekend: false
        }, {
            name     : 'tuesday',
            isWeekend: false
        }, {
            name     : 'wednesday',
            isWeekend: false
        }, {
            name     : 'thursday',
            isWeekend: false
        }, {
            name     : 'friday',
            isWeekend: false
        }, {
            name     : 'saturday',
            isWeekend: true
        }, {
            name     : 'sunday',
            isWeekend: true
        }];
        const weekdays = getWeekDaysList(locale);

        return (
            <Fragment key={String(monthItem[1][1].day)}>
                {props.isDateRange ? (
                    <div className={cn('date-picker__month-name')}>
                        {format(monthItem[1][1].day, 'LLLL')}
                    </div>
                ) : null}
                <div className={cn('date-picker__weekdays')}>
                    {days.map((dayItem) => (
                        <div
                            key={dayItem.name}
                            className={cn('date-picker__weekday', {
                                'date-picker__weekday_weekend': dayItem.isWeekend
                            })}
                        >
                            {weekdays[dayItem.name]}
                        </div>
                    ))}
                </div>
                <div className={cn('date-picker__dates')}>
                    {monthItem.map((weekItem) => (
                        <div
                            key={String(weekItem[1].day)}
                            className={cn('date-picker__dates-week')}
                        >
                            {weekItem.map((dayItem) => {
                                let isHovered = false;
                                let isDisabled = dayItem.disabled;
                                let isDataScroll!: boolean;
                                const isNotSameDay = !isSameDay(dayItem.day, selectedPeriod[0]);
                                const isBeforeSelected = isBefore(dayItem.day, selectedPeriod[0]);

                                if(isSelected(dayItem.day)) {
                                    isDataScroll = true;
                                }

                                if(selectedPeriod[0] && !selectedPeriod[1]) {
                                    isDisabled = isNotSameDay && isBeforeSelected;

                                    if(currentHoveredDate) {
                                        // TODO тут падает, если заховерил значение не из интервала
                                        isHovered = isWithinInterval(dayItem.day, {
                                            start: selectedPeriod[0],
                                            end  : currentHoveredDate.day
                                        });
                                    }
                                }

                                return (
                                    <button
                                        type="button"
                                        key={String(dayItem.day)}
                                        onMouseEnter={() => {
                                            if(!isDisabled) {
                                                onMouseEnterDate(dayItem);
                                            }
                                        }}
                                        onClick={() => {
                                            if(!isDisabled) {
                                                setDate(dayItem);
                                            }

                                            if(!props.isDateRange) {
                                                onClose?.();
                                            }
                                        }}
                                        data-scroll={isDataScroll}
                                        className={cn('date-picker__date', {
                                            'date-picker__date_muted'    : !dayItem.sameMonth,
                                            'date-picker__date_border'   : dayItem.sameMonth,
                                            'date-picker__date_today'    : dayItem.isToday,
                                            'date-picker__date_last-day' : dayItem.lastMonthDate,
                                            'date-picker__date_first-day': dayItem.firstMonthDate,
                                            'date-picker__date_disabled' : isDisabled,
                                            'date-picker__date_selected' : isSelected(dayItem.day),
                                            'date-picker__date_hovered'  : isHovered
                                        })}
                                    >
                                        {format(dayItem.day, 'dd')}
                                    </button>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </Fragment>
        );
    }, [
        selectedPeriod,
        props.isDateRange,
        selected,
        currentHoveredDate
    ]);

    const elCalendarBody = useCallback((onClose?: () => void) => {
        return (
            <div
                className={cn('date-picker__calendar-body')}
                id="date-body"
            >
                {calendar.months.map((monthItem) => elMonthItem(monthItem, onClose))}
            </div>
        );
    }, [calendar, elMonthItem]);

    const elPeriodCalendar = useCallback((onClose?: () => void) => {
        const startValue = selectedPeriod[0] ? format(selectedPeriod[0], 'yyyy-MM-dd') : '';
        const endValue = selectedPeriod[1] ? format(selectedPeriod[1], 'yyyy-MM-dd') : '';
        const minDateInner = format(minDate, 'yyyy-MM-dd');
        const maxDateInner = format(maxDate, 'yyyy-MM-dd');

        if(props.isDateRange) {
            return (
                <div className={cn('date-picker__period-calendar')}>
                    {!!defaultSelectedDate.length && (
                        <Checkbox
                            name="isAllPeriod"
                            checked={isAllPeriod}
                            label={i18nConfig.translation['whole-period']}
                            onChange={onChangeCheckboxButt}
                        />
                    )}
                    <div className={cn('date-picker__period-calendar-inputs')}>
                        <InputDate
                            label={i18nConfig.translation['start-date']}
                            name="startDate"
                            // disabled={props.isDateInputsReadOnly}
                            value={startValue}
                            minDate={minDateInner}
                            maxDate={maxDateInner}
                            onChange={onChangeDate(0)}
                        />
                        <InputDate
                            label={i18nConfig.translation['end-date']}
                            name="endDate"
                            value={endValue}
                            // disabled={props.isDateInputsReadOnly}
                            minDate={minDateInner}
                            maxDate={maxDateInner}
                            onChange={onChangeDate(1)}
                        />
                    </div>
                    <Button
                        type="button"
                        presetStyle="primary"
                        className={cn('date-picker__calendar-button')}
                        disabled={selectedPeriod.length < 2}
                        onClick={() => writeValue(selectedPeriod, onClose)}
                    >
                        {i18nConfig.translation.apply}
                    </Button>
                </div>
            );
        }
    }, [isAllPeriod, selectedPeriod, props.isDateRange, props.isMobile, defaultSelectedDate, minDate, maxDate]);

    const onClickChangeButton = (type: 'plus' | 'minus') => {
        const amount = type === 'plus' ? 1 : -1;

        if(props.isDateRange) {
            setCalendar((prev) => ({
                ...prev,
                month: addYears(calendar.month, amount)
            }));
        } else {
            setCalendar((prev) => ({
                ...prev,
                month: addMonths(calendar.month, amount)
            }));
        }
    };

    const elCalendar = useCallback((onClose?: () => void) => {
        const content = (
            <div
                ref={$container}
                className={cn('date-picker__wrap-calendar', {
                    'date-picker__wrap-calendar_date-range': props.isDateRange,
                    'date-picker__wrap-calendar_is-mobile' : props.isMobile
                })}
            >
                <div
                    className={cn('date-picker__calendar', {
                        'date-picker__calendar_date-range': props.isDateRange
                    })}
                >
                    <div className={cn('date-picker__month-row')}>
                        {!!props.isMobile && <span />}
                        <div className={cn('date-picker__month-row-controls')}>
                            <button
                                type="button"
                                onClick={() => onClickChangeButton('minus')}
                                className={cn('date-picker__row-left', {
                                    'date-picker__row-left_disabled': disabledDatesInPast
                                })}
                            >
                                <IconArrowsArrowLeft />
                            </button>
                            <div className={cn('date-picker__row-center')}>
                                {props.isDateRange ? format(calendar.month, 'yyyy') : format(calendar.month, 'LLLL yyyy')}
                            </div>
                            <button
                                type="button"
                                className={cn('date-picker__row-right')}
                                onClick={() => onClickChangeButton('plus')}
                            >
                                <IconArrowsArrowRight />
                            </button>
                        </div>
                        {!!props.isMobile && (
                            <IconClear
                                svg={{
                                    onClick: () => setIsMobileOpen(false)
                                }}
                            />
                        )}
                    </div>
                    {elCalendarBody(onClose)}
                </div>
                {elPeriodCalendar(onClose)}
            </div>
        );

        if(props.isMobile) {
            return createPortal(
                content,
                container
            );
        }

        return content;
    }, [elCalendarBody, elPeriodCalendar, props.isDateRange, calendar.month, disabledDatesInPast, props.isMobile, container]);

    const elTriggerElement = useMemo(() => {
        return (
            <button
                type="button"
                disabled={props.disabled}
                title={props.qa ? 'date-picker' : undefined}
                className={cn('date-picker__trigger', {
                    'date-picker__trigger_range': props.isDateRange
                })}
                onClick={onClickTrigger}
            >
                <Text
                    className={cn('date-picker__field')}
                    presetSize="body"
                >
                    {displayDate ?? ''}
                </Text>
                <IconCalendarDates
                    svg={{
                        className: cn('date-picker__field-icon')
                    }}
                />
            </button>
        );
    }, [props.readOnly, displayDate, props.isDateRange, props.isMobile, props.disabled]);

    const onCloseCalendar = () => {
        setCalendar(defaultCalendar);

        if(!defaultSelectedDate.length) {
            setSelectedPeriod([]);
        }
    };

    if(props.readOnly) {
        return elTriggerElement;
    }

    if(props.isMobile) {
        return (
            <div className={cn('date-picker')}>
                {elTriggerElement}
                {Boolean(isMobileOpen) && elCalendar()}
            </div>
        );
    }

    return (
        <Dropdown
            className={{
                'dropdown': cn('date-picker'),
                ...props.dropdownClassName
            }}
            container={container}
            placement="bottom-start"
            render={(isOpen, onClose) => elCalendar(onClose)}
            onCloseCallback={onCloseCalendar}
            triggerElement={elTriggerElement}
        />
    );
};

export default DatePicker;
