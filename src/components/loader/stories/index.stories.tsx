import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Docs from './index.docs.mdx';
import { Loader } from '../index';

const META: ComponentMeta<typeof Loader> = {
    title    : 'Loader',
    component: Loader,
    argTypes : {
        className: {
            control: 'text'
        }
    },
    parameters: {
        docs: {
            page: Docs
        },
        design: {
            type: 'figma',
            url : 'https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=5%3A15787'
        }
    }
};

export default META;

export const Sandbox: ComponentStory<typeof Loader> = (props) => <Loader {...props} />;
Sandbox.parameters = {
    backgrounds: { default: 'dark' }
};

export const DefaultSmall = Sandbox.bind({});
DefaultSmall.args = {
    presetSize: 'small'
};
DefaultSmall.parameters = {
    backgrounds: { default: 'dark' }
};

export const DefaultMedium = Sandbox.bind({});
DefaultMedium.args = {
    presetSize: 'medium'
};
DefaultMedium.parameters = {
    backgrounds: { default: 'dark' }
};

export const DefaultLarge = Sandbox.bind({});
DefaultLarge.args = {
    presetSize: 'large'
};
DefaultLarge.parameters = {
    backgrounds: { default: 'dark' }
};

export const RichGreySmall = Sandbox.bind({});
RichGreySmall.args = {
    presetStyle: 'rich-grey',
    presetSize : 'small'
};

export const RichGreyMedium = Sandbox.bind({});
RichGreyMedium.args = {
    presetStyle: 'rich-grey',
    presetSize : 'medium'
};

export const RichGreyLarge = Sandbox.bind({});
RichGreyLarge.args = {
    presetStyle: 'rich-grey',
    presetSize : 'large'
};

export const GreySmall = Sandbox.bind({});
GreySmall.args = {
    presetStyle: 'grey',
    presetSize : 'small'
};

export const GreyMedium = Sandbox.bind({});
GreyMedium.args = {
    presetStyle: 'grey',
    presetSize : 'medium'
};

export const GreyLarge = Sandbox.bind({});
GreyLarge.args = {
    presetStyle: 'grey',
    presetSize : 'large'
};

export const RedSmall = Sandbox.bind({});
RedSmall.args = {
    presetStyle: 'red',
    presetSize : 'small'
};

export const RedMedium = Sandbox.bind({});
RedMedium.args = {
    presetStyle: 'red',
    presetSize : 'medium'
};

export const RedLarge = Sandbox.bind({});
RedLarge.args = {
    presetStyle: 'red',
    presetSize : 'large'
};

export const LightGreenSmall = Sandbox.bind({});
LightGreenSmall.args = {
    presetStyle: 'light-green',
    presetSize : 'small'
};

export const LightGreenMedium = Sandbox.bind({});
LightGreenMedium.args = {
    presetStyle: 'light-green',
    presetSize : 'medium'
};

export const LightGreenLarge = Sandbox.bind({});
LightGreenLarge.args = {
    presetStyle: 'light-green',
    presetSize : 'large'
};

export const DarkPurpleSmall = Sandbox.bind({});
DarkPurpleSmall.args = {
    presetStyle: 'dark-purple',
    presetSize : 'small'
};

export const DarkPurpleMedium = Sandbox.bind({});
DarkPurpleMedium.args = {
    presetStyle: 'dark-purple',
    presetSize : 'medium'
};

export const DarkPurpleLarge = Sandbox.bind({});
DarkPurpleLarge.args = {
    presetStyle: 'dark-purple',
    presetSize : 'large'
};
