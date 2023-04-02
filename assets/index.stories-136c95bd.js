import{d as a}from"./index-1d7acb10.js";import{a as e,j as D,F as c}from"./jsx-runtime-68f49b4e.js";import{u as i}from"./index-4fb8b842.js";import"./iframe-5f8f8dfb.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-477f9050.js";import"./index-356e4a49.js";function p(t={}){const{wrapper:o}=Object.assign({},i(),t.components);return o?e(o,{...t,children:e(s,{})}):s();function s(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a"},i(),t.components);return D(c,{children:[e(a,{title:"Hooks/useDesignTokens"}),`
`,e(n.h1,{id:"usedesigntokens",children:"useDesignTokens"}),`
`,D(n.p,{children:["Хук ",e(n.code,{children:"useDesignTokens"}),` - это пользовательский хук в React, который предоставляет доступ к переменным дизайн-токенов, определенным в рамках дизайн-системы проекта.
Использование хука позволяет упростить доступ к значениям дизайн-токенов в проекте и повысить согласованность дизайна.`]}),`
`,e(n.p,{children:"Содержит параметры: цветовая палитра, типографика, скругления, тени."}),`
`,e(n.h2,{id:"использование",children:"Использование"}),`
`,e(n.p,{children:"Импорт хука в код."}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`import { useDesignTokens } from '@wb-tech/ui-react';
`})}),`
`,e(n.p,{children:"Хук возвращает объект с атрибутами для использования."}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`import React from 'react';
import { render } from 'react-dom';

import { useDesignTokens } from '@wb-tech/ui-react';

const App = () => {
    const attrs = useDesignTokens();

    return (
        <div {...attrs}>
            <YourAppCode />
        </div>
    );
}

render(<App />, document.getElementById('root'));
`})}),`
`,e(n.p,{children:e(n.a,{href:"?path=/docs/native-design-tokens-%D0%BF%D0%B0%D0%BB%D0%B8%D1%82%D1%80%D0%B0--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F#%D0%BF%D0%B0%D0%BB%D0%B8%D1%82%D1%80%D0%B0",children:"Палитра"})}),`
`,e(n.p,{children:e(n.a,{href:"?path=/docs/native-design-tokens-%D1%82%D0%B5%D0%BD%D0%B8--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F#%D1%82%D0%B5%D0%BD%D0%B8",children:"Тени"})})]})}}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const r={title:"Hooks/useDesignTokens",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:p};const F=["__page"];export{F as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=index.stories-136c95bd.js.map
