import React from 'react';
import type { Preview, Decorator } from '@storybook/react';

import { DesignTokens } from '../packages/ui-react/src/components/design-tokens';

import { DocsAuto } from './components/docs/auto';

const preview: Preview = {
    parameters: {
        actions : { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date : /Date$/
            }
        },
        docs: {
            page: () => <DocsAuto />
        },
        options: {
            storySort: {
                order: ['Documentation', 'Builders'],
            }
        }
    }
};

export const decorators: Array<Decorator> = [
    (Story) => (
        <DesignTokens>
            <Story />
        </DesignTokens>
    )
];

export default preview;
