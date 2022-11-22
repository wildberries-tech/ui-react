import { ComponentMeta, ComponentStory } from '@storybook/react';

import Docs from './index.docs.mdx';

import { Checkbox } from '../index';

const META: ComponentMeta<typeof Checkbox> = {
    title    : 'Checkbox',
    component: Checkbox,
    args     : {
        name: 'my-checkbox'
    },
    argTypes : {
        className: {
            control: 'text'
        },
        label: {
            control: 'text'
        },
        description: {
            control: 'text'
        },
        onChange: {
            control: false,
            table: {
                category: 'Events'
            }
        },
        onBlur: {
            control: false,
            table: {
                category: 'Events'
            }
        },
        onFocus: {
            control: false,
            table: {
                category: 'Events'
            }
        },
        onClick: {
            control: false,
            table: {
                category: 'Events'
            }
        }
    },
    parameters: {
        docs: {
            page: Docs
        },
        design: {
            type: "figma",
            url : "https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=3273%3A113867",
        },
        options: {
            showPanel: false
        }
    }
};

export default META;

const Template: ComponentStory<typeof Checkbox> = (props) => <Checkbox {...props} />;

export const Sandbox = Template.bind({});
Sandbox.parameters = {
    options: {
        showPanel: true
    },
    actions: {
        argTypesRegex: '^on.*'
    }
}

export const NoText = Template.bind({});

export const Text = Template.bind({});
Text.args = {
    label: 'Checkbox label'
};

export const TextAndDescription = Template.bind({});
TextAndDescription.args = {
    label      : 'Checkbox label',
    description: 'Description checkbox'
}
