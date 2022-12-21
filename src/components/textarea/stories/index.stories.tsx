import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Docs from './index.docs.mdx';
import { InputTextarea } from '../index';

const META: ComponentMeta<typeof InputTextarea> = {
    title    : 'Inputs/Textarea',
    component: InputTextarea,
    args     : {
        name       : 'textarea-field',
        placeholder: 'Заполни меня полностью...'
    },
    argTypes: {
        className: {
            control: 'text'
        },
        elError: {
            control: 'text'
        },
        elDescription: {
            control: 'text'
        },
        label: {
            control: 'text'
        },
        onChange: {
            control: false,
            table  : {
                category: 'Events'
            }
        },
        onBlur: {
            control: false,
            table  : {
                category: 'Events'
            }
        },
        onFocus: {
            control: false,
            table  : {
                category: 'Events'
            }
        },
        onClick: {
            control: false,
            table  : {
                category: 'Events'
            }
        }
    },
    parameters: {
        docs: {
            page: Docs
        },
        design: {
            type: 'figma',
            url : 'https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=810%3A70610&t=c3RPRf1ZvacTDN86-0'
        }
    }
};

export default META;

const Template: ComponentStory<typeof InputTextarea> = (props) => <InputTextarea {...props} />;

export const API = Template.bind({});

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = {
    label: 'Field label'
};

export const Disabled = Template.bind({});
Disabled.args = {
    label   : 'Field label',
    disabled: true
};

export const Required = Template.bind({});
Required.args = {
    label   : 'Field label',
    required: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    label   : 'Field label',
    readOnly: true,
    value   : 'Read only value'
};

export const ErrorStatus = Template.bind({});
ErrorStatus.args = {
    label  : 'Field label',
    isError: true,
    value  : 'Read only value'
};

export const ErrorStatusAndMessage = Template.bind({});
ErrorStatusAndMessage.args = {
    label  : 'Field label',
    isError: true,
    elError: 'Error message text',
    value  : 'Read only value'
};

export const Description = Template.bind({});
Description.args = {
    label        : 'Field label',
    elDescription: 'Description text'
};
