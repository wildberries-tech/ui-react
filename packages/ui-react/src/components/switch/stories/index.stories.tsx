import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof Switch> = {
    title: 'Components/Fields/Switch',
    component: Switch,
    tags: ['autodocs'],
    args: {
        name: 'my-switch'
    },
    parameters: {
        css: {
            module
        }
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};

export const Label: StoryObj<typeof META> = {
    args: {
        label: 'Checkbox label'
    }
};

