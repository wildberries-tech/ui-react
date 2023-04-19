import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
    tags: ['autodocs'],
    args: {
        children: 'Trigger',
        render: 'Render'
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

export const Hover: StoryObj<typeof META> = {
    args: {
        trigger: 'hover'
    }
};

export const Elements: StoryObj<typeof META> = {
    args: {
        children: (
            <a href="#">Триггер</a>
        ),
        render: () => (
            <div
                children="Render"
            />
        )
    }
};
