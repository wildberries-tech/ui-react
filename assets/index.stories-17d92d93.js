import{j as r,a as e}from"./jsx-runtime-68f49b4e.js";import{T as g}from"./index-de79efce.js";import{r as P}from"./index-f1f749bf.js";import{M as a,S as o}from"./index-de7d6c04.js";import"./index-464e8f3b.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-2788c53c.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-477f9050.js";import"./index-356e4a49.js";const S=()=>r(P.Fragment,{children:[e(a,{children:"Вместо того, чтобы использовать единый компонент, который отвечает за все аспекты вкладок (список вкладок, содержимое вкладок, состояние активной вкладки и т.д.), мы можем использовать его подкомпонены и делегировать им определенные задачи. Это делает компонент `Tabs` более гибким и переиспользуемым."}),e(a,{children:"Компонент `Tabs` состоит из четырех подкомпонентов: `Tab`, `TabList`, `TabPanel` и `Tabs`."}),e(a,{children:"`TabList` - компонент, который отображает список вкладок."}),e(a,{children:"`TabPanel` - компонент, который отображает содержимое каждой вкладки."}),e(a,{children:"`Tab` - компонент, который отображает содержимое вкладки."}),e(a,{children:"`Tabs` - компонент, который объединяет `TabList`, `Tab` и `TabPanel`"}),r("ol",{children:[r("li",{children:[e(a,{children:"Импортируйте `Tab`, `TabList`, `TabPanel` и `Tabs` в модуль, где вы хотите использовать наш компонент."}),e(o,{language:"ts",code:"import { Tab, TabList, TabPanel, Tabs } from '@wb-tech/ui-react';"})]}),r("li",{children:[e(a,{children:"Добавьте в необходимое место."}),e(o,{language:"tsx",format:!0,code:`
<Tabs presetStyle="pane">
    <TabList>
        <Tab>Таб #1</Tab>
        <Tab>Таб #2</Tab>
    </TabList>
    <TabPanel>Панель #1</TabPanel>
    <TabPanel>Панель #2</TabPanel>
</Tabs>
`})]})]})]}),F={title:"Components/Tabs",component:g,tags:["autodocs"],parameters:{documentation:{setup:{default:{title:"Использование композиции"},extended:{title:"Использование декомпозиции",content:e(S,{})}}}},args:{items:[{id:1,elTab:"Таб #1",elPanel:"Панель #1"},{id:2,elTab:"Таб #2",elPanel:"Панель #2"},{id:3,elTab:"Таб #3",elPanel:"Панель #3"}]}},t={args:{presetStyle:"pane"}},s={args:{presetStyle:"page"}},n={args:{presetStyle:"section"}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    presetStyle: 'pane'
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,T;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    presetStyle: 'page'
  }
}`,...(T=(m=s.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var b,d,u;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    presetStyle: 'section'
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const O=["Pane","Page","Section"];export{s as Page,t as Pane,n as Section,O as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-17d92d93.js.map
