import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssModulesDTS from '@guanghechen/postcss-modules-dts';
import postcssNested from 'postcss-nested';
import postcssNestedAncestors from 'postcss-nested-ancestors';
import svgLoader from 'vite-svg-loader';

export default () => {
    return defineConfig({
        resolve: {
            extensions: ['.ts', '.tsx', '.jsx', '.cjs', '.mjs', '.js', '.json']
        },
        css: {
            modules: {
                ...postcssModulesDTS({
                    indent: '    '
                })
            },
            postcss: {
                plugins: [
                    postcssNested,
                    postcssNestedAncestors
                ]
            }
        },
        plugins: [
            react(),
            svgLoader()
        ]
    });
};
