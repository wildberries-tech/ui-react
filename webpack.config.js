const { resolve } = require('path');

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
/*
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
*/

/*
const { version } = require('./package.json');

const DIR_SRC = resolve(__dirname, 'src');
const DIR_BUILD = resolve(__dirname, 'build');
*/

module.exports = (env = {}) => {
    return {
/*
        bail   : process.env.NODE_ENV === 'production',
        target : 'web',
        cache: {
            type: env.WEBPACK_SERVE ? 'filesystem' : 'memory'
        },*/
        mode   : process.env.NODE_ENV,
        devtool: process.env.NODE_ENV === 'production' ? false : process.env.WEBPACK_DEVTOOL,
        output : {
            filename: 'index.js',
            libraryTarget: 'commonjs'
        },
        resolve: {
            symlinks  : false,
            modules   : ['node_modules'],
            extensions: ['.ts', '.tsx', '.js', '.json', '.pcss', '.css']
        },
        performance: {
            hints            : process.env.WEBPACK_PERFORMANCE_HINTS || false,
            maxAssetSize     : 200000,
            maxEntrypointSize: 400000,
            assetFilter      : (asset) => asset.endsWith('.css') || asset.endsWith('.js')
        },
/*
        stats    : {
            context     : DIR_SRC,
            assets      : true,
            assetsSort  : 'field',
            builtAt     : true,
            cached      : false,
            cachedAssets: true,
            children    : true,
            chunks      : false,
            chunkGroups : false,
            colors      : true,
            entrypoints : true,
            env         : true,
            errors      : true,
            timings     : true,
            version     : true,
            warnings    : true,
            modulesSort : '!size'
        },
        devServer: {
            host  : '0.0.0.0',
            port  : 8080,
            http2 : false,
            https : false,
            client: {
                logging: 'warn'
            },
            compress          : false,
            historyApiFallback: true,
            proxy             : [{
                context     : ['/boundaries-map/auth/!**', '/boundaries-map/del-op-api/!**', '/boundaries-map/areas-api/!**', '/boundaries-map/delivery-options-backend/api/!**'],
                target      : process.env[`WEBPACK_API_TARGET_${env.api ? env.api.toUpperCase() : 'DEV'}`],
                secure      : false,
                changeOrigin: true
            }]
        },
        optimization: {
            minimize              : process.env.NODE_ENV === 'production',
            removeAvailableModules: false,
            removeEmptyChunks     : false,
            runtimeChunk          : process.env.NODE_ENV === 'production',
            splitChunks           : {
                chunks              : 'async',
                minSize             : 20000,
                minRemainingSize    : 0,
                minChunks           : 1,
                maxAsyncRequests    : 30,
                maxInitialRequests  : 30,
                enforceSizeThreshold: 50000,
                cacheGroups         : {
                    defaultVendors: {
                        test              : /[\\/]node_modules[\\/]/,
                        priority          : -10,
                        reuseExistingChunk: true,
                    },
                    default: {
                        minChunks         : 2,
                        priority          : -20,
                        reuseExistingChunk: true,
                    }
                }
            },
            minimizer: [
                new TerserPlugin({
                    parallel     : true,
                    terserOptions: {
                        sourceMap: false,
                        ie8      : false,
                        output   : {
                            comments: false
                        }
                    }
                }),
                new CssMinimizerPlugin({
                    parallel: true
                })
            ],
        },
*/
        /*externals: {
            'react': 'react',
        },
        */
        externals: [
            nodeExternals({
                additionalModuleDirs: [
                    resolve(__dirname, 'node_modules')
                ]
            })
        ],
        externalsPresets: {
            node: true
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                use : [{
                    loader : 'ts-loader',
                    options: {
                        configFile   : './../../tsconfig.json',
                        transpileOnly: process.env.NODE_ENV !== 'production'
                    }
                }]
            }, {
                test: /(\.module)?\.p?css$/,
                use : [{
                    loader : 'style-loader'
                }, , {
                    loader : 'css-loader',
                    options: {
                        importLoaders : 1,
                        sourceMap     : process.env.NODE_ENV !== 'production',
                        modules       : {
                            auto          : (filename) => /\.module\.(lazy\.)?\w+$/i.test(filename),
                            localIdentName: process.env.NODE_ENV === 'production' ? '[hash:6]' : '[local]__[hash:base64:5]'
                        }
                    }
                }, {
                    loader : 'postcss-loader',
                    options: {
                        sourceMap     : process.env.NODE_ENV !== 'production',
                        postcssOptions: {
                            plugins: [
                                require('postcss-nested')
                            ]
                        }
                    }
                }]
            }]
        }
    }
};
