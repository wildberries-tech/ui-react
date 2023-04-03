import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { DesignTokens } from '..';

import { SetupExtended } from './setup.extended';

const META: Meta<typeof DesignTokens> = {
    title: 'Components/Design Tokens',
    component: DesignTokens,
    tags: ['autodocs'],
    parameters: {
        documentation: {
            setup: {
                extended: {
                    title  : 'Пример',
                    content: <SetupExtended />
                }
            }
        }
    },
    args: {
        children: 'Любое содержимое из типа ReactNode'
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};
