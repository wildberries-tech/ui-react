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
    eachWeekOfInterval
} from 'date-fns';

import { getWeekDaysList, TLanguage, TWeekdays, useDateFnsFormatWithOptions } from '../../hooks/use-format-with-options';
import { consoleFormat } from '../../tools/console-format';
import { InputText } from '../input-text';
import { IconCalendar } from '../icons/calendar';
import { IconArrowsArrowRight } from '../icons/arrows/arrow-right';
import { IconArrowsArrowLeft } from '../icons/arrows/arrow-left';
import { Checkbox } from '../checkbox';
import { Dropdown } from '../dropdown';
import { Button } from '../button';
import { useClassnames, TStyle } from '../../hooks/use-classnames';

import style from './index.module.pcss';

type TDateValuesArray = Array<Date>;

type TControls = 'whole-period' | 'start-date' | 'end-date' | 'apply';

interface IDays {
    name: TWeekdays,
    isWeekend: boolean
}

export interface IProps {
    className?: string | TStyle,
    readOnly?: boolean,
    placeholder?: string,
    isDateRange?: boolean,
    maxPeriodDays?: number,
    disableDatesInPast?: boolean,
    defaultMinDate?: Date,
    defaultMaxDate?: Date,
    disabledDates?: TDateValuesArray,
    defaultSelectedDate?: TDateValuesArray,
    weekView?: boolean,
    enabled?: boolean,
    onChange?: (value: TDateValuesArray) => void,
    language?: TLanguage,
    i18nValues: Record<TControls, string>,
    qa?: boolean
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

const defaultSelectedDateEmpty: TDateValuesArray = [];

const elementFromPoint = (x: number, y: number) => {
    return document.elementFromPoint(x, y);
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

    return leftBottomPosition || rightBottomPosition || leftTopPosition || rightTopPosition || undefined;
};

export const DatePicker = ({
    language = 'ru',
    defaultMinDate,
    defaultMaxDate,
    defaultSelectedDate = defaultSelectedDateEmpty,
    ...props
}: IProps) => {
    const cn = useClassnames(style, props.className);
    const format = useDateFnsFormatWithOptions(language);

    const $container = useRef<HTMLDivElement>(null);

    const [selected, setSelected] = useState<Date>();
    const [minDate, setMinDate] = useState<Date>(defaultMinDate ?? startOfYear(new Date()));
    const [maxDate, setMaxDate] = useState<Date>(defaultMaxDate ?? new Date());
    const [selectedPeriodString, setSelectedPeriodString] = useState<Array<string>>([]);
    const [selectedPeriod, setSelectedPeriod] = useState<TDateValuesArray>(defaultSelectedDate);
    const [currentHoveredDate, setCurrentHoveredDate] = useState<ICalendarDate | null>(null);
    const [displayDate, setDisplayDate] = useState<string>();
    const [isAllPeriod, setIsAllPeriod] = useState<boolean>(!!defaultSelectedDate.length);
    const [calendar, setCalendar] = useState<ICalendar>({
        month   : new Date(),
        selected: new Date(),
        dates   : [],
        months  : []
    });

    const disabledDatesInPast = useMemo(() => {
        return props.disableDatesInPast ? isSameMonth(calendar.month, new Date()) : false;
    }, [props.disableDatesInPast, calendar.month]);

    useEffect(() => {
        if(props.qa) {
            consoleFormat('DatePicker: Свойство `qa` нежелательно в продакшене');
        }
    }, [props.qa]);

    useEffect(() => {
        if(defaultMinDate && disabledDatesInPast) {
            setMinDate(new Date());
        }
    }, [defaultMinDate, disabledDatesInPast]);

    useEffect(() => {
        if(defaultMaxDate) {
            setMaxDate(defaultMaxDate);
        }
    }, [defaultMaxDate]);

    useEffect(() => {
        if(props.isDateRange) {
            setSelectedPeriodString(selectedPeriod.map((dateItem) => format(dateItem, 'dd.MM.yyyy')));
        }
    }, [selectedPeriod, props.isDateRange]);

    const isSelected = (day: Date) => {
        if(selected) {
            return isSameDay(day, selected);
        }

        if(props.isDateRange && selectedPeriod.length === 2) {
            const datesArray = eachDayOfInterval({
                start: selectedPeriod[0],
                end: selectedPeriod[1]
            });
            const found = datesArray.find((el) => {
                return el.getTime() === day.getTime();
            });

            if(found) {
                return true;
            }
        } else if(selectedPeriod.length === 1) {
            return selectedPeriod[0].getTime() === day.getTime();
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

            if(props.enabled === false && !disabled) {
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
    }, [calendar.month]);

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

                if(selectedPeriod.length) {
                    selectedPeriod.sort((a, b) => {
                        return a.getTime() - b.getTime();
                    });

                    const firstSelectedPeriod = format(selectedPeriod[0], 'dd.MM.yyyy');
                    const secondSelectedPeriod = format(selectedPeriod[1], 'dd.MM.yyyy');

                    if(isSameDay(selectedPeriod[0], selectedPeriod[1])) {
                        setDisplayDate(firstSelectedPeriod);
                    } else {
                        setDisplayDate(`${firstSelectedPeriod} - ${secondSelectedPeriod}`);
                    }
                }
            }

            setDates();

            callback?.();

            props.onChange?.(selectedPeriod);
        }
    };

    useEffect(() => {
        if(defaultSelectedDate.length) {
            writeValue(defaultSelectedDate);
        }
    }, []);

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
        setCurrentHoveredDate(date);
    };

    const onChangeCheckboxButt = (event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;

        setIsAllPeriod(checked);

        if(checked) {
            setDate([{ day: minDate }, { day: maxDate }]);
        } else {
            setSelectedPeriod([]);
        }
    };

    const onChangeDate = (event: ChangeEvent<HTMLInputElement>, index = -1) => {
        const { value } = event.target;
        const dateStr = value.split('.').reverse()
            .join('-');

        if(!dateStr || value.split('.').length < 3) {
            return;
        }

        const newSelectedPeriod = [];

        if(index >= 0) {
            newSelectedPeriod[index] = new Date(dateStr);

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

            setSelectedPeriod(newSelectedPeriod);
        }
    };

    const onClickTrigger = () => {
        setTimeout(() => {
            const modal = document.getElementById('date-body');

            if(modal) {
                const target = modal.querySelectorAll('[data-scroll]');
                const element = isElementVisible(target[0]);

                if(element !== undefined && !element) {
                    target[0].scrollIntoView({
                        block   : 'start',
                        behavior: 'smooth'
                    });
                }
            }
        });
    };

    const elMonthItem = useCallback((monthItem: TMonths[number], onClose: () => void) => {
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
        const weekdays = getWeekDaysList(language);

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
                                const isNotSameDay = !isSameDay(dayItem.day, selectedPeriod[0]);
                                const isBeforeSelected = isBefore(dayItem.day, selectedPeriod[0]);

                                if(selectedPeriod[0] && currentHoveredDate && !selectedPeriod[1]) {
                                    isDisabled = isNotSameDay && isBeforeSelected;

                                    isHovered = isWithinInterval(dayItem.day, {
                                        start: selectedPeriod[0],
                                        end  : currentHoveredDate.day
                                    });
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
                                                onClose();
                                            }
                                        }}
                                        data-scroll={isSelected(dayItem.day) ? true : undefined}
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
        language,
        selectedPeriod,
        props.isDateRange,
        selected,
        currentHoveredDate
    ]);

    const elCalendarBody = useCallback((onClose: () => void) => {
        return (
            <div
                className={cn('date-picker__calendar-body')}
                id="date-body"
            >
                {calendar.months.map((monthItem) => elMonthItem(monthItem, onClose))}
            </div>
        );
    }, [language, calendar, elMonthItem]);

    const elPeriodCalendar = useCallback((onClose: () => void) => {
        if(props.isDateRange) {
            return (
                <div className={cn('date-picker__period-calendar')}>
                    <Checkbox
                        name="isAllPeriod"
                        checked={isAllPeriod}
                        label={props.i18nValues['whole-period']}
                        onChange={onChangeCheckboxButt}
                    />
                    <InputText
                        label={props.i18nValues['start-date']}
                        name="startDate"
                        value={selectedPeriodString[0] || ''}
                        onChange={onChangeDate}
                    />
                    <InputText
                        label={props.i18nValues['end-date']}
                        name="endDate"
                        value={selectedPeriodString[1] || ''}
                        onChange={onChangeDate}
                    />
                    <Button
                        type="button"
                        presetStyle="primary"
                        className={cn('date-picker__calendar-button')}
                        disabled={selectedPeriod.length < 2}
                        onClick={() => writeValue(selectedPeriod, onClose)}
                    >
                        {props.i18nValues.apply}
                    </Button>
                </div>
            );
        }
    }, [language, isAllPeriod, selectedPeriod, selectedPeriodString, props.isDateRange]);

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

    const elCalendar = useCallback((onClose: () => void) => {
        return (
            <div
                ref={$container}
                className={cn('date-picker__wrap-calendar', {
                    'date-picker__wrap-calendar_date-range': props.isDateRange
                })}
            >
                <div className={cn('date-picker__calendar')}>
                    <div className={cn('date-picker__month-row')}>
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
                    {elCalendarBody(onClose)}
                </div>
                {elPeriodCalendar(onClose)}
            </div>
        );
    }, [language, elCalendarBody, elPeriodCalendar, props.isDateRange, calendar.month, disabledDatesInPast]);

    const elTriggerElement = useMemo(() => {
        return (
            <button
                type="button"
                title={props.qa ? 'date-picker' : undefined}
                className={cn('date-picker', {
                    'date-picker_range': props.isDateRange
                })}
                onClick={onClickTrigger}
            >
                <InputText
                    disabled={props.readOnly}
                    readOnly={true}
                    name="date-picker"
                    value={displayDate ?? ''}
                    placeholder={props.placeholder}
                    className={{
                        'input-text__field': cn('date-picker__input-field')
                    }}
                    elAfter={(
                        <IconCalendar
                            svg={{
                                className: cn('date-picker__calendar-icon')
                            }}
                        />
                    )}
                />
            </button>
        );
    }, [language, props.readOnly, props.placeholder, displayDate, props.isDateRange]);

    if(props.readOnly) {
        return elTriggerElement;
    }

    return (
        <Dropdown
            placement="bottom-start"
            render={(isOpen, onClose) => elCalendar(onClose)}
            triggerElement={elTriggerElement}
        />
    );
};

export default DatePicker;
