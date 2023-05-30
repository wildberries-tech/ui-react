import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Radio } from '..';

const META: Meta<typeof Radio> = {
    title    : 'Components/Fields/Radios/Radio',
    component: Radio,
    tags: ['autodocs'],
    args     : {
        id   : 'input',
        name : 'radio',
        label: 'Label'
    },
    parameters: {
        layout: 'padded'
    }
};

export default META;

export const Default: StoryFn<typeof Radio> = (props) => (
    <Radio
        {...props}
        tabIndex={1}
        name="default"
    />
);

export const Disabled: StoryObj<typeof META> = {
    args: {
        name: 'checked',
        disabled: true,
        checked: true,
        onChange: () => undefined
    }
};

export const DefaultChecked: StoryObj<typeof META> = {
    args: {
        name: 'checked',
        checked: true,
        onChange: () => undefined
    }
};

export const DefaultCheckedDisabled: StoryObj<typeof META> = {
    args: {
        name: 'checked-disabled',
        checked: true,
        disabled: true,
        onChange: () => undefined
    }
};

export const WithDescription: StoryObj<typeof META> = {
    args: {
        name: 'desc',
        description: 'Common description',
        label: 'Common label',
        tabIndex: 2
    }
};

export const WithLongText: StoryObj<typeof META> = {
    args: {
        name: 'long',
        description: 'Very long description so long i can\'t read that much stop pls',
        label: 'Very long label so long i can\'t read that much stop pls',
        tabIndex: 2
    }
};
