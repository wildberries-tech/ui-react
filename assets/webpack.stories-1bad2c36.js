import"./chunk-PCJTTTQV-037b829e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{d as i}from"./index-de7d6c04.js";import{a as e,j as c,F as p}from"./jsx-runtime-68f49b4e.js";import{u as o}from"./index-4fb8b842.js";import"./iframe-2788c53c.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-477f9050.js";import"./index-356e4a49.js";function d(t={}){const{wrapper:a}=Object.assign({},o(),t.components);return a?e(a,{...t,children:e(s,{})}):s();function s(){const n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},o(),t.components);return c(p,{children:[e(i,{title:"Builders/Webpack 5",parameters:{backgrounds:{disable:!0,grid:{disable:!0}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e(n.h2,{id:"использование-с-webpack-5",children:"Использование с Webpack 5"}),`
`,e(n.p,{children:"Для корректной сборки кита при использование webpack 5 и выше необходимо воспользоваться расширением конфига сборки."}),`
`,e(n.p,{children:"Конфигурация до расширения:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`// webpack.config.js
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path    : './dist',
        filename: '[name].bundle.js'
    },
    ...
};
`})}),`
`,e(n.p,{children:"Конфигурация после расширения:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`// webpack.config.js
const { extendWebpackConfig } = require('@wb-tech/ui-react/builders');

module.exports = extendWebpackConfig({
    entry: {
        main: './src/index.js'
    },
    output: {
        path    : './dist',
        filename: '[name].bundle.js'
    },
    ...
});
`})})]})}}const u=()=>{throw new Error("Docs-only story")};u.parameters={docsOnly:!0};const r={title:"Builders/Webpack 5",parameters:{backgrounds:{disable:!0,grid:{disable:!0}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:d};const D=["__page"];export{D as __namedExportsOrder,u as __page,r as default};
//# sourceMappingURL=webpack.stories-1bad2c36.js.map
