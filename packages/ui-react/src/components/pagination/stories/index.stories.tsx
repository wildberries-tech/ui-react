import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Pagination } from '..';
import module from '../../popover/index.module.pcss';

const META: Meta<typeof Pagination> = {
    title    : 'Components/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    args     : {
        currentPage : 1,
        onChangePage: () => undefined
    },
    parameters: {
        css: {
            html: false,
            module
        }
    }
};

export default META;

export const Default: StoryFn<typeof Pagination> = () => {
    const [currentPageOne, setCurrentPageOne] = useState<number>(1);

    return (
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            currentPage={currentPageOne}
            onChangePagination={({ pageNumber }) => setCurrentPageOne(pageNumber)}
            numberOfItems={10}
            numberItemsPerPage={10}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const CombinedTrigger: StoryFn<typeof Pagination> = () => {
    const [currentPageOne, setCurrentPageOne] = useState<number>(1);

    return (
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            isTriggerCombined={true}
            currentPage={currentPageOne}
            onChangePagination={({ pageNumber }) => setCurrentPageOne(pageNumber)}
            numberOfItems={10}
            numberItemsPerPage={10}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const CombinedTriggerColumn: StoryFn<typeof Pagination> = () => {
    const [currentPageOne, setCurrentPageOne] = useState<number>(1);

    return (
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            direction="column"
            isTriggerCombined={true}
            currentPage={currentPageOne}
            onChangePagination={({ pageNumber }) => setCurrentPageOne(pageNumber)}
            numberOfItems={1000}
            numberItemsPerPage={10}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const Column: StoryFn<typeof Pagination> = () => {
    const [currentPageOne, setCurrentPageOne] = useState<number>(1);

    return (
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            direction="column"
            currentPage={currentPageOne}
            onChangePagination={({ pageNumber }) => setCurrentPageOne(pageNumber)}
            numberOfItems={1000}
            numberItemsPerPage={10}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const ErrorProps: StoryFn<typeof Pagination> = () => {
    const [currentPageOne, setCurrentPageOne] = useState<number>(1);

    return (
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            currentPage={currentPageOne}
            onChangePagination={({ pageNumber }) => setCurrentPageOne(pageNumber)}
            numberOfItems={10}
            numberItemsPerPage={10}
            showPageInput={true}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const ManyItems: StoryFn<typeof Pagination> = () => {
    const [currentPageOne, setCurrentPageOne] = useState<number>(1);

    return (
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            currentPage={currentPageOne}
            onChangePagination={({ pageNumber }) => setCurrentPageOne(pageNumber)}
            numberOfItems={1000}
            numberItemsPerPage={10}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const ManyItemsCombinedTrigger: StoryFn<typeof Pagination> = () => {
    const [currentPageOne, setCurrentPageOne] = useState<number>(1);

    return (
        <Pagination
            i18n={{
                label: 'Показать записей'
            }}
            isTriggerCombined={true}
            currentPage={currentPageOne}
            onChangePagination={({ pageNumber }) => setCurrentPageOne(pageNumber)}
            numberOfItems={1000}
            numberItemsPerPage={10}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const ManyItemsWithInput: StoryFn<typeof Pagination> = () => {
    const [currentPageOne, setCurrentPageOne] = useState<number>(1);

    return (
        <Pagination
            i18n={{
                label: 'Показать записей',
                placeholder: '№ страницы'
            }}
            currentPage={currentPageOne}
            onChangePagination={({ pageNumber }) => setCurrentPageOne(pageNumber)}
            numberOfItems={1000}
            numberItemsPerPage={10}
            showPageInput={true}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const ManyItemsWithInputCombinedTrigger: StoryFn<typeof Pagination> = () => {
    const [currentPageOne, setCurrentPageOne] = useState<number>(1);

    return (
        <Pagination
            i18n={{
                label: 'Показать записей',
                placeholder: 'placeholder'
            }}
            isTriggerCombined={true}
            currentPage={currentPageOne}
            onChangePagination={({ pageNumber }) => setCurrentPageOne(pageNumber)}
            numberOfItems={10}
            numberItemsPerPage={10}
            showPageInput={true}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const DeprecatedProps: StoryFn<typeof Pagination> = () => {
    const [currentPageOne, setCurrentPageOne] = useState<number>(1);

    return (
        <Pagination
            i18n={{
                label: 'Показать записей',
                placeholder: 'placeholder'
            }}
            isTriggerCombined={true}
            currentPage={currentPageOne}
            onChangePage={setCurrentPageOne}
            numberOfItems={10}
            numberItemsPerPage={10}
            showPageInput={true}
        />
    );
};

