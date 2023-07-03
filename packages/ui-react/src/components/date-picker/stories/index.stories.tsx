import type { Meta, StoryObj } from '@storybook/react';
import { enUS } from 'date-fns/locale';

import { DatePicker } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof DatePicker> = {
    title: 'Components/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    args: {
        i18nConfig: {
            locale: enUS,
            translation: {
                'start-date': 'Начало периода',
                'end-date': 'Конец периода',
                'apply': 'Применить',
                'whole-period': 'Весь период'
            }
        }
    },
    parameters: {
        css: {
            html: false,
            module
        }
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};

export const DateRange: StoryObj<typeof META> = {
    args: {
        isDateRange: true
    }
};

export const DateRangeDefaultDates: StoryObj<typeof META> = {
    args: {
        isDateRange: true,
        defaultSelectedDate: [new Date('2023-06-25'), new Date('2023-06-27')]
    }
};
