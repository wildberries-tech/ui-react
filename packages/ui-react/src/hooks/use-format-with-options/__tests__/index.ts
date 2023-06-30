import { renderHook } from '@testing-library/react';
import { enUS, ru } from 'date-fns/locale';

import { getWeekDaysList, useDateFnsFormatWithOptions } from '..';

test('Hook useDate', () => {
    const { result } = renderHook(() => useDateFnsFormatWithOptions(enUS));
    const format = result.current;

    expect(format(new Date('2022-06-26'), 'yyyy-MM-dd')).toBe('2022-06-26');
});

test('Hook useDate RU', () => {
    const { result } = renderHook(() => useDateFnsFormatWithOptions(ru));
    const format = result.current;

    expect(format(new Date('2022-06-28'), 'dd.MM.yyyy')).toBe('28.06.2022');
});

test('Get week days RU', () => {
    const weekdays = getWeekDaysList(ru);

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
    const weekdays = getWeekDaysList(enUS);

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

