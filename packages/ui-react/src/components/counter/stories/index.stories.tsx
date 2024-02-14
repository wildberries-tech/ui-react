import type { Meta, StoryObj } from '@storybook/react';

import { Counter } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof Counter> = {
    title: 'Components/Counter',
    component: Counter,
    tags: ['autodocs'],
    args: {
        children: '999'
    },
    parameters: {
        css: {
            module
        }
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};

export const Orange: StoryObj<typeof META> = {
    args: {
        presetStyle: 'orange'
    }
};

export const DarkGray: StoryObj<typeof META> = {
    args: {
        presetStyle: 'dark-gray'
    }
};

export const Purple: StoryObj<typeof META> = {
    args: {
        presetStyle: 'purple'
    }
};

export const Big: StoryObj<typeof META> = {
    args: {
        presetSize : 'big'
    }
};
