import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup } from '..';
import { Checkbox } from '../../checkbox';
import module from '../index.module.pcss';

const META: Meta<typeof CheckboxGroup> = {
    title: 'Components/Fields/Checkboxes/CheckboxGroup',
    component: CheckboxGroup,
    tags: ['autodocs'],
    args: {
        legend  : 'My checkbox family',
        children: [
            <Checkbox
                key="checkbox-1"
                name="checkbox-1"
            />,
            <Checkbox
                key="checkbox-2"
                name="checkbox-2"
                label="My checkbox 2"
            />,
            <Checkbox
                key="checkbox-3"
                name="checkbox-3"
                label="My checkbox 3"
                description="Description checkbox 3"
            />
        ]
    },
    parameters: {
        css: {
            module
        }
    }
};

export default META;

export const Row: StoryObj<typeof META> = {};

export const Column: StoryObj<typeof META> = {
    args: {
        direction: 'column'
    }
};
