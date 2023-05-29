import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { Pagination } from '..';

test('Default use', async () => {
    const { asFragment } = render(
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            currentPage={1}
            onChangePage={() => 2}
            numberOfItems={10}
            numberItemsPerPage={10}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Many items', async () => {
    const { asFragment } = render(
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            currentPage={1}
            onChangePage={() => 2}
            numberOfItems={1000}
            numberItemsPerPage={10}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Many items with input', async () => {
    const { asFragment } = render(
        <Pagination
            i18n={{
                label: 'Показать записей',
                placeholder: '№ страницы'
            }}
            currentPage={1}
            onChangePage={() => 2}
            numberOfItems={1000}
            numberItemsPerPage={10}
            showPageInput={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});
