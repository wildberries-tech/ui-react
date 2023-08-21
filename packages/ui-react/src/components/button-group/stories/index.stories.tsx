import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from '..';
import { Button } from '../../button/v1';
import module from '../index.module.pcss';

const META: Meta<typeof ButtonGroup> = {
    title: 'Components/Buttons/Button Group',
    component: ButtonGroup,
    tags: ['autodocs'],
    args: {
        children: [
            <Button
                key="1"
                presetStyle="primary"
                children="Send"
            />,
            <Button
                key="2"
                presetStyle="default"
                children="Cancel"
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

export const Default: StoryObj<typeof META> = {};

export const ColumnDesktop: StoryObj<typeof META> = {
    args: {
        direction  : 'column',
        presetStyle: 'desktop'
    }
};

export const ColumnMobile: StoryObj<typeof META> = {
    args: {
        direction  : 'column',
        presetStyle: 'mobile'
    }
};

export const RowDesktop: StoryObj<typeof META> = {
    args: {
        direction  : 'row',
        presetStyle: 'desktop'
    }
};

export const RowMobile: StoryObj<typeof META> = {
    args: {
        direction  : 'row',
        presetStyle: 'mobile'
    }
};
