import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof Switch> = {
    title: 'Version 2 (Beta)/Components/Fields/Switch',
    component: Switch,
    tags: ['autodocs'],
    args: {
        name: 'my-switch'
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

export const Default: StoryObj<typeof META> = {};

export const Label: StoryObj<typeof META> = {
    args: {
        label: 'Checkbox label'
    }
};

export const Disable: StoryObj<typeof META> = {
    args: {
        disabled: true,
        label   : 'Checkbox label'
    }
};

export const DisableActive: StoryObj<typeof META> = {
    args: {
        checked : true,
        disabled: true,
        label   : 'Checkbox label'
    }
};

export const Loading: StoryObj<typeof META> = {
    args: {
        loading: true,
        label   : 'Checkbox label'
    }
};

export const LoadingActive: StoryObj<typeof META> = {
    args: {
        checked : true,
        loading: true,
        label   : 'Checkbox label'    
    }
};

