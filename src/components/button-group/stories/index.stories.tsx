import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Docs from './index.docs.mdx';
import { Button } from '../../button';
import { ButtonGroup } from '../index';

const META: ComponentMeta<typeof ButtonGroup> = {
    title    : 'Buttons/Button Group',
    component: ButtonGroup,
    args     : {
        children: [
            <Button key="1" presetStyle="primary" children="Применить" />,
            <Button key="2" presetStyle="default" children="Отмена" />
        ]
    },
    argTypes: {
        className: {
            control: 'text'
        },
        children: {
            control: 'text'
        }
    },
    parameters: {
        docs: {
            page: Docs
        },
        design: {
            type: 'figma',
            url : 'https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=3250%3A112858&t=kP2lzF6gosdgFD3W-0'
        }
    }
};

export default META;

export const Sandbox: ComponentStory<typeof ButtonGroup> = (props) => <ButtonGroup {...props} />;

export const ColumnDesktop = Sandbox.bind({});
ColumnDesktop.args = {
    direction  : 'column',
    presetStyle: 'desktop'
};

export const ColumnMobile = Sandbox.bind({});
ColumnMobile.args = {
    direction  : 'column',
    presetStyle: 'mobile'
};

export const RowDesktop = Sandbox.bind({});
RowDesktop.args = {
    direction  : 'row',
    presetStyle: 'desktop'
};

export const RowMobile = Sandbox.bind({});
RowMobile.args = {
    direction  : 'row',
    presetStyle: 'mobile'
};
