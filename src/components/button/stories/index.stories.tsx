import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconVideo } from './../../icons/video';
import { IconCircleMenu } from './../../icons/circle-menu';
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
        <IconVideo />
    )
};

export const DoubleIcon = Sandbox.bind({});
DoubleIcon.args = {
    presetStyle: 'primary',
    children   : [
        <IconVideo key={1} />,
        <IconCircleMenu key={2} />
    ]
};

export const IconText = Sandbox.bind({});
IconText.args = {
    presetStyle: 'default',
    children   : [
        <IconVideo key={1} />,
        'Кнопка'
    ]
};

export const IconTextIcon = Sandbox.bind({});
IconTextIcon.args = {
    presetStyle: 'default',
    children   : [
        <IconVideo key={1} />,
        'Кнопка',
        <IconCircleMenu key={2} />
    ]
};
