import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

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
            i18nValues={i18nValues}
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
            i18nValues={i18nValues}
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

