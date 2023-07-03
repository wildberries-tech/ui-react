import type { Meta, StoryObj } from '@storybook/react';

import { InputDate } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof InputDate> = {
    title: 'Components/Fields/Date',
    component: InputDate,
    tags: ['autodocs'],
    args: {
        name       : 'date-input-name',
        placeholder: 'Placeholder text'
    },
    parameters: {
        css: {
            module
        }
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};

export const Column: StoryObj<typeof META> = {
    args: {
        label: 'Field label',
        direction: 'column'
    }
};

export const Row: StoryObj<typeof META> = {
    args: {
        label: 'Field label',
        direction: 'row'
    }
};

export const Disabled: StoryObj<typeof META> = {
    args: {
        label   : 'Field label',
        disabled: true
    }
};

