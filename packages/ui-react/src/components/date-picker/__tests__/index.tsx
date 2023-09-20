import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { ru } from 'date-fns/locale';

import { DatePicker } from '..';

// TODO дописать тесты когда-нибудь

const i18nValues = {
    'start-date': 'Начало периода',
    'end-date': 'Конец периода',
    'apply': 'Применить',
    'whole-period': 'Весь период'
};

test('Default use', async () => {
    const { asFragment } = render(
        <DatePicker
            i18nConfig={{
                locale: ru,
                translation: i18nValues
            }}
            qa={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Range Picker', async () => {
    const { asFragment, getByTitle } = render(
        <DatePicker
            i18nConfig={{
                locale: ru,
                translation: i18nValues
            }}
            isDateRange={true}
            qa={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByTitle('date-picker'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Range Picker With Dates', async () => {
    const { asFragment, getByTitle } = render(
        <DatePicker
            i18nConfig={{
                locale: ru,
                translation: i18nValues
            }}
            isDateRange={true}
            defaultSelectedDate={[new Date('2023-06-25'), new Date('2023-06-27')]}
            qa={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByTitle('date-picker'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Single With Dates', async () => {
    const { asFragment, getByTitle } = render(
        <DatePicker
            i18nConfig={{
                locale: ru,
                translation: i18nValues
            }}
            defaultSelectedDate={[new Date('2023-06-25'), new Date('2023-06-27')]}
            qa={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByTitle('date-picker'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Default Min Max Dates', async () => {
    const { asFragment, getByTitle } = render(
        <DatePicker
            i18nConfig={{
                locale: ru,
                translation: i18nValues
            }}
            defaultMinDate={new Date('2023-06-25')}
            defaultMaxDate={new Date('2023-06-27')}
            defaultSelectedDate={[new Date('2023-06-25'), new Date('2023-06-27')]}
            qa={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByTitle('date-picker'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Default Min Max Dates', async () => {
    const { asFragment, getByTitle } = render(
        <DatePicker
            i18nConfig={{
                locale: ru,
                translation: i18nValues
            }}
            disableDatesInPast={true}
            defaultMinDate={new Date('2023-06-25')}
            defaultMaxDate={new Date('2023-06-27')}
            defaultSelectedDate={[new Date('2023-06-25'), new Date('2023-06-27')]}
            qa={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByTitle('date-picker'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Default Min Max Dates Period', async () => {
    const { asFragment, getByTitle } = render(
        <DatePicker
            i18nConfig={{
                locale: ru,
                translation: i18nValues
            }}
            disableDatesInPast={true}
            defaultMinDate={new Date('2023-06-25')}
            defaultMaxDate={new Date('2023-06-27')}
            defaultSelectedDate={[new Date('2023-06-25')]}
            disabledDates={[new Date('2023-06-25'), new Date('2023-06-25')]}
            disabled={true}
            maxPeriodDays={14}
            qa={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByTitle('date-picker'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Same period', async () => {
    const { asFragment, getByTitle } = render(
        <DatePicker
            i18nConfig={{
                locale: ru,
                translation: i18nValues
            }}
            defaultSelectedDate={[new Date('2023-06-25'), new Date('2023-06-25')]}
            readOnly={true}
            qa={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByTitle('date-picker'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Date Range Is Mobile', async () => {
    const { asFragment, getByTitle } = render(
        <DatePicker
            i18nConfig={{
                locale: ru,
                translation: i18nValues
            }}
            isMobile={true}
            isDateRange={true}
            qa={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByTitle('date-picker'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Datepicker Is Mobile', async () => {
    const { asFragment, getByTitle } = render(
        <DatePicker
            i18nConfig={{
                locale: ru,
                translation: i18nValues
            }}
            isMobile={true}
            qa={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByTitle('date-picker'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

