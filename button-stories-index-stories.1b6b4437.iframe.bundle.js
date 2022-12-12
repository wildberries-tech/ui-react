"use strict";(self.webpackChunk_wb_tech_ui_react=self.webpackChunk_wb_tech_ui_react||[]).push([[67],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable,Hw:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Source,Lo:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.IconGallery,Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,_R:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.IconItem,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,oG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/components/button/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dashed:()=>Dashed,Default:()=>Default,Deprecated:()=>Deprecated,DoubleIcon:()=>DoubleIcon,Ghost:()=>Ghost,Icon:()=>Icon,IconText:()=>IconText,IconTextIcon:()=>IconTextIcon,Negative:()=>Negative,Primary:()=>Primary,Sandbox:()=>Sandbox,Success:()=>Success,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var video=__webpack_require__("./src/components/icons/video.tsx"),circle_menu=__webpack_require__("./src/components/icons/circle-menu.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),components_button=__webpack_require__("./src/components/button/index.tsx");function _createMdxContent(props){var _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{children:"Button"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Компонент конфигурируемой кнопки соответствующей дизайну."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Использование"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Импорт компонента в код."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Button } from '@wb-tech/ui-react';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Ниже приведены примеры основных состояний описанных в дизайн системе."}),"\n",(0,jsx_runtime.jsxs)(dist_esm.Xz,{children:[(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button--ghost"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button--default"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button--primary"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button--dashed"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button--negative"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button--success"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button--deprecated"})]}),"\n",(0,jsx_runtime.jsxs)(dist_esm.Xz,{children:[(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button--icon"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button--double-icon"})]}),"\n",(0,jsx_runtime.jsxs)(dist_esm.Xz,{children:[(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button--icon-text"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button--icon-text-icon"})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Параметры"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{of:components_button.z})]})}const index_docs=function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_Object$assign=Object.assign({},(0,esm.ah)(),props.components),MDXLayout=_Object$assign.wrapper;return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};const index_stories={title:"Buttons/Button",component:components_button.z,args:{children:"Кнопка"},argTypes:{className:{control:"text"},children:{control:"text"},onFocus:{control:!1,table:{category:"Events"}},onClick:{control:!1,table:{category:"Events"}}},parameters:{docs:{page:index_docs},design:{type:"figma",url:"https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=3250%3A113145"}}};var Sandbox=function Sandbox(props){return(0,jsx_runtime.jsx)(components_button.z,Object.assign({},props))};Sandbox.displayName="Sandbox";var Primary=Sandbox.bind({});Primary.args={presetStyle:"primary"};var Default=Sandbox.bind({});Default.args={presetStyle:"default"};var Dashed=Sandbox.bind({});Dashed.args={presetStyle:"dashed"};var Ghost=Sandbox.bind({});Ghost.args={presetStyle:"ghost"};var Negative=Sandbox.bind({});Negative.args={presetStyle:"negative"};var Success=Sandbox.bind({});Success.args={presetStyle:"success"};var Deprecated=Sandbox.bind({});Deprecated.args={presetStyle:"deprecated"};var Icon=Sandbox.bind({});Icon.args={presetStyle:"primary",children:(0,jsx_runtime.jsx)(video.IconVideo,{})};var DoubleIcon=Sandbox.bind({});DoubleIcon.args={presetStyle:"primary",children:[(0,jsx_runtime.jsx)(video.IconVideo,{},1),(0,jsx_runtime.jsx)(circle_menu.IconCircleMenu,{},2)]};var IconText=Sandbox.bind({});IconText.args={presetStyle:"default",children:[(0,jsx_runtime.jsx)(video.IconVideo,{},1),"Кнопка"]};var IconTextIcon=Sandbox.bind({});IconTextIcon.args={presetStyle:"default",children:[(0,jsx_runtime.jsx)(video.IconVideo,{},1),"Кнопка",(0,jsx_runtime.jsx)(circle_menu.IconCircleMenu,{},2)]},Sandbox.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},Sandbox.parameters),Primary.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},Primary.parameters),Default.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},Default.parameters),Dashed.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},Dashed.parameters),Ghost.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},Ghost.parameters),Negative.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},Negative.parameters),Success.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},Success.parameters),Deprecated.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},Deprecated.parameters),Icon.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},Icon.parameters),DoubleIcon.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},DoubleIcon.parameters),IconText.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},IconText.parameters),IconTextIcon.parameters=Object.assign({storySource:{source:"(props) => <Button {...props} />"}},IconTextIcon.parameters);var __namedExportsOrder=["Sandbox","Primary","Default","Dashed","Ghost","Negative","Success","Deprecated","Icon","DoubleIcon","IconText","IconTextIcon"];try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/stories/index.stories.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"src/components/button/stories/index.stories.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);