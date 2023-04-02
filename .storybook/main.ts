import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: [
        {
            directory  : '../docs',
            titlePrefix: 'Documentation',
            files      : '**/*.stories.@(js|jsx|ts|tsx|mdx)'
        },
        '../packages/**/*.mdx',
        '../packages/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    framework: {
        name   : '@storybook/react-vite',
        options: {}
    },
    docs: {
        autodocs   : 'tag',
        defaultName: 'Документация'
    },
    core: {
        disableTelemetry: true
    },
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            skipChildrenPropWithoutDoc: false,
            shouldRemoveUndefinedFromOptional: true,
            shouldExtractLiteralValuesFromEnum: true,
            savePropValueAsString: true,
            propFilter: (prop) =>  {
                if(prop.declarations !== undefined && prop.declarations.length > 0) {
                    const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
                        return !declaration.fileName.includes('node_modules');
                    });

                    return Boolean(hasPropAdditionalDescription);
                }

                return true;
            }
        }
    }
};

export default config;
