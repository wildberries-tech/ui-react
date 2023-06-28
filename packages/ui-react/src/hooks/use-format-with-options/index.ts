import { useCallback } from 'react';
import { formatWithOptions } from 'date-fns/fp';
import { enUS, es, ru, zhCN, tr, it, pt, fr, de } from 'date-fns/locale';
import { addDays, startOfWeek, eachDayOfInterval } from 'date-fns';

export type TWeekdays = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export const locales = ['ru', 'en', 'es', 'zh-hans', 'tr', 'it', 'pt', 'fr', 'de'] as const;

export type TLanguage = typeof locales[number];

type TWeekHashMap = Record<TWeekdays, string>;

export const localesHashmap = {
    ru,
    es,
    tr,
    it,
    pt,
    fr,
    de,
    en: enUS,
    'zh-hans': zhCN
};

export const getLocale = (lang: TLanguage) => {
    return localesHashmap[lang];
};

const formatWithOptionsFunc = (date: Date, options: { lang: TLanguage, format?: string }) => {
    return formatWithOptions({ locale: getLocale(options.lang) }, options.format ?? 'dd.MM.yyyy HH:mm')(date);
};

export const getWeekDaysList = (lang: TLanguage) => {
    const start = startOfWeek(new Date(), { locale: getLocale(lang) });
    const end = addDays(start, 6);
    const week = eachDayOfInterval({
        start,
        end
    });
    const weekHashMap: Partial<TWeekHashMap> = {};

    for(const day of week) {
        const dayFullName = formatWithOptionsFunc(day, {
            format: 'EEEE',
            lang  : 'en'
        }).toLowerCase() as TWeekdays;
        const dayShortName = formatWithOptionsFunc(day, {
            format: 'EEEEEE',
            lang
        });

        weekHashMap[dayFullName] = dayShortName;
    }

    return weekHashMap;
};

export const useDateFnsFormatWithOptions = (lang: TLanguage) => {
    return useCallback((date: Date, format?: string) => {
        return formatWithOptionsFunc(date, {
            format,
            lang
        });
    }, [lang]);
};
