module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [{
        directory  : '../docs',
        titlePrefix: 'Documentation',
        files      : '*.stories.@(js|jsx|ts|tsx|mdx)'
    }, {
        directory  : '../packages',
        titlePrefix: 'Components',
        files      : '*.stories.@(js|jsx|ts|tsx|mdx)'
    }],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    framework: '@storybook/react',
    features: {
        storyStoreV7: true,
        postcss     : false
    }
}
