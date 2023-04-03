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
            // @ts-expect-error не потдерживает типы в среде исполнения
            storySort: (a, b) => {
                if(a.title === 'Документация') {
                    return 1;
                }

                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return a.title === b.title ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true });
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
