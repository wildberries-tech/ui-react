import type { Meta, StoryObj } from '@storybook/react';

import { InputTextarea } from '..';

const META: Meta<typeof InputTextarea> = {
    title: 'Components/Fields/Textarea',
    component: InputTextarea,
    tags: ['autodocs'],
    args: {
        name       : 'textarea-field',
        placeholder: 'Заполни меня полностью...'
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};

export const Label: StoryObj<typeof META> = {
    args: {
        label: 'Field label'
    }
};

export const Disabled: StoryObj<typeof META> = {
    args: {
        label   : 'Field label',
        disabled: true
    }
};

export const Required: StoryObj<typeof META> = {
    args: {
        label   : 'Field label',
        required: true
    }
};

export const RequiredMultiline: StoryObj<typeof META> = {
    args: {
        label   : 'Field labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField label',
        required: true
    }
};

export const ReadOnly: StoryObj<typeof META> = {
    args: {
        label   : 'Field label',
        readOnly: true,
        value   : 'Read only value'
    }
};

export const Description: StoryObj<typeof META> = {
    args: {
        label        : 'Field label',
        elDescription: 'Description text'
    }
};

export const ErrorStatus: StoryObj<typeof META> = {
    args: {
        label  : 'Field label',
        isError: true,
        value  : 'Read only value'
    }
};

export const ErrorStatusAndMessage: StoryObj<typeof META> = {
    args: {
        label  : 'Field label',
        isError: true,
        elError: 'Error message text',
        value  : 'Read only value'
    }
};
