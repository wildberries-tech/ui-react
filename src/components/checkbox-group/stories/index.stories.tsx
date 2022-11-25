import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from '../../checkbox/index';
import Docs from './index.docs.mdx';
import { CheckboxGroup } from '../index';

const META: ComponentMeta<typeof CheckboxGroup> = {
    title        : 'Checkbox Group',
    component    : CheckboxGroup,
    subcomponents: { Checkbox },
    args         : {
        legend  : 'My checkbox family',
        children: [
            <Checkbox key="checkbox-1" name="checkbox-1" />,
            <Checkbox key="checkbox-2" name="checkbox-2" label="My checkbox 2" />,
            <Checkbox key="checkbox-3" name="checkbox-3" label="My checkbox 3" description="Description checkbox 3" />
        ]
    },
    argTypes: {
        className: {
            control: 'text'
        },
        legend: {
            control: 'text'
        },
        children: {
            control: false
        }
    },
    parameters: {
        docs: {
            page: Docs
        },
        design: {
            type: 'figma',
            url : 'https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=6633%3A127623&t=bJms1tK1Y27PyXbH-0'
        }
    }
};

export default META;

const Template: ComponentStory<typeof CheckboxGroup> = (props) => <CheckboxGroup {...props} />;

export const Sandbox = Template.bind({});

export const Row = Template.bind({});
Row.args = {
    direction: 'row'
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column'
};
