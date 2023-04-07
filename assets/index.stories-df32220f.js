import{d as u}from"./index-d76f9e52.js";import{a as n,j as c,F as a}from"./jsx-runtime-68f49b4e.js";import{u as l}from"./index-4fb8b842.js";import"./iframe-157c7299.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-477f9050.js";import"./index-356e4a49.js";function r(s={}){const{wrapper:m}=Object.assign({},l(),s.components);return m?n(m,{...s,children:n(t,{})}):t();function t(){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h4:"h4",hr:"hr"},l(),s.components);return c(a,{children:[n(u,{title:"Hooks/useClassnames"}),`
`,n(e.h1,{id:"useclassnames",children:"useClassnames"}),`
`,c(e.p,{children:["Хук ",n(e.code,{children:"useClassnames"})," - это пользовательский хук в React, который предоставляет доступ к именам классов, экспортированным из CSS-модулей."]}),`
`,n(e.p,{children:"CSS-модули - это методология CSS, которая позволяет изолировать стили компонентов и предотвращает конфликты имен классов между ними."}),`
`,c(e.p,{children:["Использование хука ",n(e.code,{children:"useClassnames"})," позволяет упростить работу с именами классов в компонентах и предотвращает конфликты между ними, что способствует более чистому и удобному написанию."]}),`
`,n(e.p,{children:"Поддерживает типизированные CSS модули."}),`
`,n(e.h2,{id:"использование",children:"Использование"}),`
`,n(e.p,{children:"Импорт хука в код."}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { useClassnames } from '@wb-tech/ui-react';
`})}),`
`,n(e.h2,{id:"примеры",children:"Примеры"}),`
`,n(e.p,{children:"Ваш CSS модуль."}),`
`,n(e.pre,{children:n(e.code,{className:"language-css",children:`/* ./my-component-style.css */
.my-component-block {
    display: block;

    &__element {
        background-color: #000000;

        &_mod {
            background-color: #ffffff;
        }
    }
}
`})}),`
`,n(e.h4,{id:"базовый-пример-использования",children:"Базовый пример использования"}),`
`,n(e.hr,{}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { useClassnames } from '@wb-tech/ui-react';

import style from './my-component-style.css';

export const MyComponent = () => {
    const cn = useClassnames(style);

    return (
        // Результат строки класса "my-component-block"
        <div className={cn('my-component-block')}>
            <div
                children="Элемент блока"
                // Результат строки класса "my-component-block__element my-component-block__element_mod"
                className={cn('my-component-block__element', {
                    'my-component-block__element_mod': true
                })}
            />
        </div>
    );
}
`})}),`
`,n(e.h4,{id:"пример-комбинирования-css-модулей",children:"Пример комбинирования CSS модулей."}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"Компонент:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { useClassnames, IStyle } from '@wb-tech/ui-react';

import style from './my-component-style.css';

export interface IProps {
    className?: string | IStyle
}

export const MyComponent = (props: IProps) => {
    const cn = useClassnames(style, props.className);

    return (
        <div className={cn('my-component-block')}>
            <div
                children="Элемент блока"
                className={cn('my-component-block__element', {
                    'my-component-block__element_mod': true
                })}
            />
        </div>
    );
}
`})}),`
`,n(e.p,{children:"Вызов компонента:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`// Вызов с передачей строки в className
<MyComponent className="my-other-class" />

// Результат (Вызова с передачей строки в className)
<div class="my-component-block my-other-class">
    <div class="my-component-block__element my-component-block__element_mod">Элемент блока</div>
</div>


// Вызов с передачей модуля в className
<MyComponent
    className={{
        'my-component-block'             : 'custom-block',
        'my-component-block__element'    : 'custom-element',
        'my-component-block__element_mod': 'custom-mod'
    }}
/>

// Результат (Вызова с передачей модуля в className)
<div class="my-component-block custom-block">
    <div class="my-component-block__element custom-element my-component-block__element_mod custom-mod">Элемент блока</div>
</div>
`})}),`
`,n(e.h4,{id:"пример-без-использования-комбинирования-css-модулей",children:"Пример без использования комбинирования CSS модулей."}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"Компонент:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { useClassnames, IStyle } from '@wb-tech/ui-react';

import style from './my-component-style.css';

export interface IProps {
    className?: string | IStyle
}

export const MyComponent = (props: IProps) => {
    // В аргумент комбинирования передан false
    const cn = useClassnames(style, props.className, false);

    return (
        <div className={cn('my-component-block')}>
            <div
                children="Элемент блока"
                className={cn('my-component-block__element', {
                    'my-component-block__element_mod': true
                })}
            />
        </div>
    );
}
`})}),`
`,n(e.p,{children:"Вызов компонента:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`// Вызов с передачей строки в className
<MyComponent className="my-other-class" />

// Результат (Вызова с передачей строки в className)
<div class="my-component-block my-other-class">
    <div class="my-component-block__element my-component-block__element_mod">Элемент блока</div>
</div>


// Вызов с передачей модуля в className
<MyComponent
    className={{
        'my-component-block'             : 'custom-block',
        'my-component-block__element'    : 'custom-element',
        'my-component-block__element_mod': 'custom-mod'
    }}
/>

// Результат (Вызова с передачей модуля в className)
<div class="custom-block">
    <div class="custom-element custom-mod">Элемент блока</div>
</div>
`})})]})}}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const o={title:"Hooks/useClassnames",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:r};const S=["__page"];export{S as __namedExportsOrder,p as __page,o as default};
//# sourceMappingURL=index.stories-df32220f.js.map
