import React from 'react';

import { DesignTokens } from '../src';

export const parameters = {
    viewMode: 'docs',
    layout  : 'fullscreen',
    controls: {
        expanded: true,
        sort    : 'requiredFirst',
        matchers: {
            color: /(background|color)$/i,
            date : /Date$/
        }
    }
};

export const decorators = [
    (Story) => (
        <DesignTokens>
            <Story/>
        </DesignTokens>
    )
];

export const argTypes = {
    key: {
        table: {
            disable: true
        }
    },
    ref: {
        table: {
            disable: true
        }
    }
};
