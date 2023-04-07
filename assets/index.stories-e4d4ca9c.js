import{d as s}from"./index-d76f9e52.js";import{a as n,j as i,F as a}from"./jsx-runtime-68f49b4e.js";import{u as l}from"./index-4fb8b842.js";import"./iframe-157c7299.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-477f9050.js";import"./index-356e4a49.js";function o(r={}){const{wrapper:d}=Object.assign({},l(),r.components);return d?n(d,{...r,children:n(t,{})}):t();function t(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li"},l(),r.components);return i(a,{children:[n(s,{title:"Builders/Webpack 5"}),`
`,n(e.h1,{id:"webpack-5",children:"Webpack 5"}),`
`,n(e.p,{children:"Для корректной сборки кита при использовании webpack 5 и выше необходимо воспользоваться билдером который расширит конфигурацию вашей сборки."}),`
`,n(e.h2,{id:"установка",children:"Установка"}),`
`,n(e.pre,{children:n(e.code,{children:`npm i @wb-tech/builder-webpack-5 -D
`})}),`
`,n(e.h2,{id:"использование",children:"Использование"}),`
`,n(e.p,{children:"Импорт пакета."}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`const extendWebpackConfig = require('@wb-tech/builder-webpack-5');
`})}),`
`,n(e.p,{children:"Конфигурация до расширения:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`// webpack.config.js
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
`,n(e.p,{children:"Конфигурация после расширения:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`// webpack.config.js
const extendWebpackConfig = require('@wb-tech/builder-webpack-5');

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
`,n(e.h2,{id:"опции",children:"Опции"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"disableTSRule"})," - Параметр ",n(e.code,{children:"disableTSRule"})," используется для отключения правил обработки ",n(e.code,{children:"ts"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"disablePCSSRule"})," - Параметр ",n(e.code,{children:"disablePCSSRule"})," используется для отключения правил обработки ",n(e.code,{children:"pcss"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"disableInclude"})," - Параметр ",n(e.code,{children:"disableInclude"})," используется для отключения директорий обработки билдером ",n(e.code,{children:"@wb-tech/ui-react"}),"."]}),`
`,i(e.li,{children:[n(e.code,{children:"useMiniCssExtractPlugin"})," - Параметр ",n(e.code,{children:"useMiniCssExtractPlugin"})," используется для передачи ",n(e.code,{children:"MiniCssExtractPlugin"})," если в вашей сборке он используется."]}),`
`]})]})}}const u=()=>{throw new Error("Docs-only story")};u.parameters={docsOnly:!0};const c={title:"Builders/Webpack 5",tags:["stories-mdx"],includeStories:["__page"]};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:o};const M=["__page"];export{M as __namedExportsOrder,u as __page,c as default};
//# sourceMappingURL=index.stories-e4d4ca9c.js.map
