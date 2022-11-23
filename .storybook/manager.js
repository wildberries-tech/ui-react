import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
    previewTabs: {
        canvas: {
            title: 'Sandbox'
        }
    },
    theme: create({
        base      : 'light',
        brandTitle: 'WB UI-React',
        brandImage: '/favicon-60.svg',
        fontBase: '"Open Sans", sans-serif',
        fontCode: 'monospace',
    })
});
