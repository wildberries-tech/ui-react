import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof DatePicker> = {
    title: 'Components/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    args: {
        language: 'en',
        i18nValues: {
            'start-date': 'Начало периода',
            'end-date': 'Конец периода',
            'apply': 'Применить',
            'whole-period': 'Весь период'
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
