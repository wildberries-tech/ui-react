import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../..';
import module from '../../index.module.pcss';

const META: Meta<typeof Typography.Title> = {
    title    : 'Version 2 (Beta)/Components/Typography/Title',
    component: Typography.Title,
    tags: ['autodocs'],
    args: {
        children: 'Заголовок'
    },
    parameters: {
        css: {
            module
        },
        documentation: {
            setup: {
                import: {
                    version: '/v2'
                }
            }
        }
    }
};

export default META;

export const H1: StoryObj<typeof META> = {
    args: {
        tagName: 'h1',
        children: 'Text large'
    }
};

export const H2: StoryObj<typeof META> = {
    args: {
        tagName: 'h2',
        children: 'Text large bold'
    }
};

export const H3: StoryObj<typeof META> = {
    args: {
        tagName: 'h3',
        children: 'Заголовок 3'
    }
};

export const H4: StoryObj<typeof META> = {
    args: {
        tagName: 'h4',
        children: 'Заголовок 4'
    }
};
