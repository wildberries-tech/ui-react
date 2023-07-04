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
            onChangePage={setCurrentPageOne}
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
            onChangePage={setCurrentPageOne}
            numberOfItems={10}
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
            onChangePage={setCurrentPageOne}
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
            onChangePage={setCurrentPageOne}
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
            onChangePage={setCurrentPageOne}
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
            onChangePage={(page: number) => {
                setCurrentPageOne(page);
            }}
            numberOfItems={1000}
            numberItemsPerPage={10}
            showPageInput={true}
        />
    );
};

