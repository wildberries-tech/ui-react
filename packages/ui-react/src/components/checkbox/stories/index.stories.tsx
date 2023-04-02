import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '..';

const META: Meta<typeof Checkbox> = {
    title: 'Components/Fields/Checkboxes/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    args: {
        name: 'my-checkbox'
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};

export const Label: StoryObj<typeof META> = {
    args: {
        label: 'Checkbox label'
    }
};

export const TextAndDescription: StoryObj<typeof META> = {
    args: {
        label      : 'Checkbox label',
        description: 'Description checkbox'
    }
};
