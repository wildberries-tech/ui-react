import { renderHook } from '@testing-library/react';

import { getLocale, getWeekDaysList, locales, localesHashmap, useDateFnsFormatWithOptions } from '..';

test('Get locale', () => {
    locales.forEach((localeItem) => {
        const locale = getLocale(localeItem);

        expect(locale).toBe(localesHashmap[localeItem]);
    });
});

test('Hook useDate', () => {
    const { result } = renderHook(() => useDateFnsFormatWithOptions('en'));
    const format = result.current;

    expect(format(new Date('2022-06-26'), 'dd.MM.yyyy')).toBe('26.06.2022');
});

test('Get week days RU', () => {
    const weekdays = getWeekDaysList('ru');

    expect(weekdays).toStrictEqual({
        'monday': 'пн',
        'tuesday': 'вт',
        'wednesday': 'ср',
        'thursday': 'чт',
        'friday': 'пт',
        'saturday': 'сб',
        'sunday': 'вс'
    });
});

test('Get week days EN', () => {
    const weekdays = getWeekDaysList('en');

    expect(weekdays).toStrictEqual({
        'sunday': 'Su',
        'monday': 'Mo',
        'tuesday': 'Tu',
        'wednesday': 'We',
        'thursday': 'Th',
        'friday': 'Fr',
        'saturday': 'Sa'
    });
});

