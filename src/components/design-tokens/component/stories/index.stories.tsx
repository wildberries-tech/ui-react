import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Docs from './index.docs.mdx';
import { DesignTokens } from '../index';

const META: ComponentMeta<typeof DesignTokens> = {
    title    : 'Design Tokens/Component',
    component: DesignTokens,
    args     : {
        children: 'Любое содержимое из типа ReactNode'
    },
    argTypes: {
        children: {
            control: 'text',
            table  : {
                type: {
                    summary: 'ReactNode'
                }
            }
        },
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
            url : 'https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=5%3A17'
        }
    }
};

export default META;

const Template: ComponentStory<typeof DesignTokens> = (props) => <DesignTokens {...props} />;

export const Component = Template.bind({});
