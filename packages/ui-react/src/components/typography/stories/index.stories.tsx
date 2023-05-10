import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof Typography> = {
    title    : 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    args: {
        children: 'Заголовок'
    },
    parameters: {
        css: {
            module
        }
    }
};

export default META;

export const H1: StoryObj<typeof META> = {
    args: {
        size: 'h1',
        tag : 'h1',
        children: 'Заголовок 1'
    }
};

export const H2: StoryObj<typeof META> = {
    args: {
        size: 'h2',
        tag : 'h2',
        children: 'Заголовок 2'
    }
};

export const H3: StoryObj<typeof META> = {
    args: {
        size: 'h3',
        tag : 'h3',
        children: 'Заголовок 3'
    }
};

export const H4: StoryObj<typeof META> = {
    args: {
        size: 'h4',
        tag : 'h4',
        children: 'Заголовок 4'
    }
};

export const P: StoryObj<typeof META> = {
    args: {
        size: 'body',
        tag : 'p',
        children: 'Параграф'
    }
};

export const Span: StoryObj<typeof META> = {
    args: {
        size: 'body',
        tag : 'span',
        children: 'Спан'
    }
};
