import type { Meta, StoryObj } from '@storybook/react';

import { NavItem } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof NavItem> = {
    title: 'Components/NavItem',
    component: NavItem,
    tags: ['autodocs'],
    args: {
        children: 'Кнопка',
        href: '#'
    },
    parameters: {
        css: {
            module
        }
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};

export const Active: StoryObj<typeof META> = {
    args: {
        presetStyle: 'active'
    }
};
