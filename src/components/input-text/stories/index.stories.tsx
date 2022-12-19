import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconEye } from './../../icons/eye';
import { IconGlobe } from './../../icons/globe';
import Docs from './index.docs.mdx';
import { InputText } from '../index';

const META: ComponentMeta<typeof InputText> = {
    title    : 'Inputs/Text',
    component: InputText,
    args     : {
        name       : 'text-input-name',
        placeholder: 'Placeholder text'
    },
    argTypes: {
        className: {
            control: 'text'
        },
        elError: {
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
            url : 'https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=5518%3A111977&t=TgfvRSzjWTadnmp1-0'
        }
    }
};

export default META;

const Template: ComponentStory<typeof InputText> = (props) => <InputText {...props} />;

export const Sandbox = Template.bind({});
Sandbox.parameters = {
    actions: {
        argTypesRegex: '^on.*'
    }
};

export const Default = Template.bind({});
Default.args = {};

export const IconAfter = Template.bind({});
IconAfter.args = {
    elAfter: <IconEye />
};

export const IconBefore = Template.bind({});
IconBefore.args = {
    elBefore: <IconGlobe />
};

export const IconBeforeAndAfter = Template.bind({});
IconBeforeAndAfter.args = {
    elAfter : <IconEye />,
    elBefore: <IconGlobe />
};

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
