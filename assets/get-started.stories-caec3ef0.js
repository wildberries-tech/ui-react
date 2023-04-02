import"./chunk-PCJTTTQV-037b829e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{d as c}from"./index-de7d6c04.js";import{a as n,j as r,F as u}from"./jsx-runtime-68f49b4e.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-2788c53c.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-477f9050.js";import"./index-356e4a49.js";function d(i={}){const{wrapper:o}=Object.assign({},a(),i.components);return o?n(o,{...i,children:n(s,{})}):s();function s(){const e=Object.assign({h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code"},a(),i.components);return r(u,{children:[n(c,{title:"Как начать",parameters:{backgrounds:{disable:!0,grid:{disable:!0}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,n(e.h2,{id:"как-начать-использовать",children:"Как начать использовать"}),`
`,r(e.ol,{children:[`
`,n(e.li,{children:"Установка пакета кита в проект"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{children:`npm i @wb-tech/ui-react -S
`})}),`
`,r(e.ol,{start:"2",children:[`
`,n(e.li,{children:"Подключение билдера"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`// Webpack 5
// webpack.config.js
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
}, {
    // Передать в опции MiniCssExtractPlugin если он используется в проекте
    useMiniCssExtractPlugin: MiniCssExtractPlugin
});
`})}),`
`,r(e.ol,{start:"3",children:[`
`,n(e.li,{children:"Указать область действия дизайн токенов"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import React from 'react';
import { render } from 'react-dom';
import { DesignTokens } from '@wb-tech/ui-react';

// ...

render((
    <Provider store={store}>
        <DesignTokens>
            <Routes />
        </DesignTokens>
    </Provider>
));
`})}),`
`,r(e.ol,{start:"4",children:[`
`,r(e.li,{children:["Использовать компоненты ",n(e.code,{children:"@wb-tech/ui-react"})]}),`
`]})]})}}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const t={title:"Как начать",parameters:{backgrounds:{disable:!0,grid:{disable:!0}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const E=["__page"];export{E as __namedExportsOrder,l as __page,t as default};
//# sourceMappingURL=get-started.stories-caec3ef0.js.map
