import { useCallback } from 'react';
import { formatWithOptions } from 'date-fns/fp';
import { addDays, startOfWeek, eachDayOfInterval, Locale, isWeekend } from 'date-fns';

export type TWeekdays = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

interface IDay {
    shortName: string,
    isWeekend: boolean
}

type TWeekHashMap = Record<TWeekdays, IDay>;

const formatWithOptionsFunc = (date: Date, options: { locale?: Locale, format?: string }) => {
    return formatWithOptions({ locale: options.locale }, options.format ?? 'dd.MM.yyyy HH:mm')(date);
};

export const getWeekDaysList = (locale: Locale) => {
    const start = startOfWeek(new Date(), { locale });
    const end = addDays(start, 6);
    const week = eachDayOfInterval({
        start,
        end
    });
    const weekHashMap: Partial<TWeekHashMap> = {};

    for(const day of week) {
        const dayFullName = formatWithOptionsFunc(day, {
            format: 'EEEE'
        }).toLowerCase() as TWeekdays;
        const dayShortName = formatWithOptionsFunc(day, {
            format: 'EEEEEE',
            locale
        });

        weekHashMap[dayFullName] = {
            shortName: dayShortName,
            isWeekend: isWeekend(day)
        };
    }

    return weekHashMap;
};

export const useDateFnsFormatWithOptions = (locale: Locale) => {
    return useCallback((date: Date, format?: string) => {
        return formatWithOptionsFunc(date, {
            format,
            locale
        });
    }, [locale]);
};
