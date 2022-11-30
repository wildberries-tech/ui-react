import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Docs from './index.docs.mdx';
import { Button } from '../index';

const META: ComponentMeta<typeof Button> = {
    title    : 'Button',
    component: Button,
    args     : {
        children: 'Кнопка'
    },
    argTypes: {
        className: {
            control: 'text'
        },
        children: {
            control: 'text'
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
            url : 'https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=3250%3A113145'
        }
    }
};

export default META;

export const Sandbox: ComponentStory<typeof Button> = (props) => <Button {...props} />;

export const Primary = Sandbox.bind({});
Primary.args = {
    presetStyle: 'primary'
};

export const Default = Sandbox.bind({});
Default.args = {
    presetStyle: 'default'
};

export const Dashed = Sandbox.bind({});
Dashed.args = {
    presetStyle: 'dashed'
};

export const Ghost = Sandbox.bind({});
Ghost.args = {
    presetStyle: 'ghost'
};

export const Negative = Sandbox.bind({});
Negative.args = {
    presetStyle: 'negative'
};

export const Success = Sandbox.bind({});
Success.args = {
    presetStyle: 'success'
};

export const Deprecated = Sandbox.bind({});
Deprecated.args = {
    presetStyle: 'deprecated'
};

export const Icon = Sandbox.bind({});
Icon.args = {
    presetStyle: 'primary',
    children: (
        <svg key="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M6.594 2A4.573 4.573 0 0 0 2 6.406V7h2v-.5A2.59 2.59 0 0 1 6.594 4H7V2h-.406zM9 2v2h2V2H9zm4 0v2h2V2h-2zm4 0v2h.5c1.4.055 2.5 1.193 2.5 2.594V7h2v-.406A4.573 4.573 0 0 0 17.594 2H17zM2 9v2h2V9H2zm18 0v2h2V9h-2zM2 13v2h2v-2H2zm18 0v2h2v-2h-2zM2 17v.594A4.574 4.574 0 0 0 6.594 22H7v-2h-.406A2.59 2.59 0 0 1 4 17.5V17H2zm18 0v.406A2.59 2.59 0 0 1 17.5 20H17v2h.594A4.574 4.574 0 0 0 22 17.406V17h-2zM9 20v2h2v-2H9zm4 0v2h2v-2h-2z"/>
        </svg>
    )
};
