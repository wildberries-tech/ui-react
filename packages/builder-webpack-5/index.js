/* eslint-env node */
const { join } = require('path');

const RE_INCLUDE = /@wb-tech(\/|\\{1,2})ui-react/;

module.exports = (config, options = {}) => {
    if(!config.module) {
        config.module = {};
    }

    if(!config.module.rules) {
        config.module.rules = [];
    }

    if(!config.resolve) {
        config.resolve = {};
    }

    if(!config.resolve.extensions) {
        config.resolve.extensions = [];
    }

    config.resolve.extensions.push('.ts', '.tsx', '.pcss');

    config.resolve.extensions = [...new Set(config.resolve.extensions)];

    if(!options.disableTSRule) {
        config.module.rules.push({
            test   : /\.tsx?$/,
            include: !options.disableInclude ? RE_INCLUDE : undefined,
            use    : [{
                loader : require.resolve('ts-loader'),
                options: {
                    configFile   : join(__dirname, './tsconfig.json'),
                    transpileOnly: true
                }
            }]
        });
    }

    if(!options.disablePCSSRule) {
        config.module.rules.push({
            test   : /(\.module)?\.p?css$/,
            include: !options.disableInclude ? RE_INCLUDE : undefined,
            use    : [{
                loader : options.useMiniCssExtractPlugin ? options.useMiniCssExtractPlugin.loader : require.resolve('style-loader')
            }, {
                loader : require.resolve('css-loader'),
                options: {
                    importLoaders : 1,
                    sourceMap     : config.mode === 'development',
                    modules       : {
                        auto          : (filename) => /\.module\.(lazy\.)?\w+$/i.test(filename),
                        localIdentName: config.mode === 'production' ? '[hash:6]' : '[local]__[hash:base64:5]'
                    }
                }
            }, {
                loader : require.resolve('postcss-loader'),
                options: {
                    sourceMap     : config.mode === 'development',
                    postcssOptions: {
                        config: join(__dirname, './postcss.config.js')
                    }
                }
            }]
        });
    }
};
