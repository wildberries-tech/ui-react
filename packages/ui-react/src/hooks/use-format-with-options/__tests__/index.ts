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
        'sunday': {
            'shortName': 'вс',
            'isWeekend': true
        },
        'monday': {
            'shortName': 'пн',
            'isWeekend': false
        },
        'tuesday': {
            'shortName': 'вт',
            'isWeekend': false
        },
        'wednesday': {
            'shortName': 'ср',
            'isWeekend': false
        },
        'thursday': {
            'shortName': 'чт',
            'isWeekend': false
        },
        'friday': {
            'shortName': 'пт',
            'isWeekend': false
        },
        'saturday': {
            'shortName': 'сб',
            'isWeekend': true
        }
    });
});

test('Get week days EN', () => {
    const weekdays = getWeekDaysList(enUS);

    expect(weekdays).toStrictEqual({
        'sunday': {
            'shortName': 'Su',
            'isWeekend': true
        },
        'monday': {
            'shortName': 'Mo',
            'isWeekend': false
        },
        'tuesday': {
            'shortName': 'Tu',
            'isWeekend': false
        },
        'wednesday': {
            'shortName': 'We',
            'isWeekend': false
        },
        'thursday': {
            'shortName': 'Th',
            'isWeekend': false
        },
        'friday': {
            'shortName': 'Fr',
            'isWeekend': false
        },
        'saturday': {
            'shortName': 'Sa',
            'isWeekend': true
        }
    });
});

