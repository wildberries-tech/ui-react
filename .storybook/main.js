const { extendWebpackConfig } = require('./../builders');

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [{
        directory  : '../docs',
        titlePrefix: 'Documentation',
        files      : '**/*.stories.@(js|jsx|ts|tsx|mdx)'
    }, {
        directory  : '../src/components',
        files      : '**/*.stories.@(js|jsx|ts|tsx|mdx)'
    }, {
        directory  : '../src/hooks',
        titlePrefix: 'Hooks',
        files      : '**/*.stories.@(js|jsx|ts|tsx|mdx)'
    }],
    addons: [
        '@storybook/addon-viewport',
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@lamo2k123/storybook-addon-component-tokens',
        '@storybook/addon-actions',
        '@storybook/addon-backgrounds',
        '@storybook/addon-toolbars',
        '@storybook/addon-measure',
        '@storybook/addon-outline',
        '@storybook/addon-links',
        '@storybook/addon-a11y',
        '@storybook/addon-interactions',
        'storybook-addon-designs'
    ],
    framework: '@storybook/react',
    features: {
        previewMdx2 : true,
        storyStoreV7: true,
        postcss     : false
    },
    staticDirs: ['../public'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            resourceQuery: /raw/,
            type         : 'asset/source',
        });

        return extendWebpackConfig(config, {
            disableTSRule   : true,
            disableInclude  : true,
            enableCSSTypings: true
        });
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            skipChildrenPropWithoutDoc: false,
            shouldExtractLiteralValuesFromEnum: true,
            savePropValueAsString: true,
            compilerOptions: {
                allowSyntheticDefaultImports: true,
                esModuleInterop             : true
            },
            propFilter: true
        },
    }
}
