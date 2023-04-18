import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from '..';
import { IconEye } from '../../icons/eye';
import { IconGlobe } from '../../icons/globe';
import module from '../index.module.pcss';

const META: Meta<typeof InputText> = {
    title: 'Components/Fields/Text',
    component: InputText,
    tags: ['autodocs'],
    args: {
        name       : 'text-input-name',
        placeholder: 'Placeholder text'
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
        label   : 'Field label Field labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField labelField label',
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

export const IconAfter: StoryObj<typeof META> = {
    args: {
        elAfter: <IconEye />
    }
};

export const IconBefore: StoryObj<typeof META> = {
    args: {
        elBefore: <IconGlobe />
    }
};

export const Icons: StoryObj<typeof META> = {
    args: {
        elAfter : <IconEye />,
        elBefore: <IconGlobe />
    }
};
