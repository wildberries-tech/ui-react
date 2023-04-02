import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from '..';

const META: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
    tags: ['autodocs'],
    args: {
        children: 'Trigger',
        render: 'Render'
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
