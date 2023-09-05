import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';

import { Pagination } from '..';

test('Default use', async () => {
    const { asFragment } = render(
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            currentPage={1}
            onChangePagination={({ pageNumber }) => pageNumber + 1}
            numberOfItems={10}
            numberItemsPerPage={10}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Combined trigger', async () => {
    const { asFragment } = render(
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            isTriggerCombined={true}
            currentPage={1}
            onChangePagination={({ pageNumber }) => pageNumber + 1}
            numberOfItems={10}
            numberItemsPerPage={10}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Combined trigger column', async () => {
    const { asFragment } = render(
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            direction="column"
            isTriggerCombined={true}
            currentPage={1}
            onChangePagination={({ pageNumber }) => pageNumber + 1}
            numberOfItems={10}
            numberItemsPerPage={10}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Combined trigger column input', async () => {
    const { asFragment } = render(
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            direction="column"
            isTriggerCombined={true}
            currentPage={1}
            showPageInput={true}
            onChangePagination={({ pageNumber }) => pageNumber + 1}
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
            onChangePagination={({ pageNumber }) => pageNumber + 1}
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
            onChangePagination={({ pageNumber }) => pageNumber + 1}
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

test('Deprecated props', async () => {
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

test('Zero pages', async () => {
    const placeholderText = '№ страницы';
    const { asFragment } = render(
        <Pagination
            i18n={{
                label: 'Показать записей',
                placeholder: placeholderText
            }}
            currentPage={1}
            onChangePagination={({ pageNumber }) => pageNumber + 1}
            numberOfItems={0}
            numberItemsPerPage={0}
            showPageInput={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Clicks on elements', async () => {
    const placeholderText = '№ страницы';
    const { asFragment } = render(
        <Pagination
            i18n={{
                label: 'Показать записей',
                placeholder: placeholderText
            }}
            currentPage={1}
            onChangePagination={({ pageNumber }) => pageNumber + 1}
            numberOfItems={1000}
            numberItemsPerPage={10}
            showPageInput={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    const $input = screen.getByPlaceholderText(placeholderText);
    const $preset = screen.getByText('Показать записей').childNodes[1].childNodes[0];
    const $pageButton = screen.getByText('3');

    console.log('$preset', $preset);

    fireEvent.click($preset);

    const $option = screen.getByText('50');

    fireEvent.click($option);

    fireEvent.change($input, { target: { value: '123' } });

    fireEvent.change($input, { target: { value: '5' } });

    fireEvent.click($pageButton);

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Throw error', async () => {
    const { asFragment } = render(
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            currentPage={1}
            onChangePagination={({ pageNumber }) => pageNumber + 1}
            numberOfItems={0}
            numberItemsPerPage={0}
            showPageInput={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});
