"use strict";(self.webpackChunk_wb_tech_ui_react=self.webpackChunk_wb_tech_ui_react||[]).push([[589],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable,Hw:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Source,Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,oG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/hooks/use-classnames/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js");function _createMdxContent(props){var _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",h1:"h1",h4:"h4",hr:"hr"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"use-classnames",parameters:{backgrounds:{disable:!0,grid:{disable:!0}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{children:"use-classnames"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Хук для удобной работы с CSS модулями. Возвращает функцию доступа к CSS классам.\nПоддерживает типизированные CSS модули."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{children:"Использование"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Импорт хука в код."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-tsx",children:"import { useClassnames } from '@wb-tech/ui-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{children:"Примеры"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Ваш CSS модуль."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-css",children:"/* ./my-component-style.css */\n.my-component-block {\n    display: block;\n\n    &__element {\n        background-color: #000000;\n\n        &_mod {\n            background-color: #ffffff;\n        }\n    }\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4,{children:"Базовый пример использования"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-tsx",children:"import { useClassnames } from '@wb-tech/ui-react';\n\nimport style from './my-component-style.css';\n\nexport const MyComponent = () => {\n    const cn = useClassnames(style);\n\n    return (\n        // Результат строки класса \"my-component-block\"\n        <div className={cn('my-component-block')}>\n            <div\n                children=\"Элемент блока\"\n                // Результат строки класса \"my-component-block__element my-component-block__element_mod\"\n                className={cn('my-component-block__element', {\n                    'my-component-block__element_mod': true\n                })}\n            />\n        </div>\n    );\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4,{children:"Пример комбинирования CSS модулей."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Компонент:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-tsx",children:"import { useClassnames, IStyle } from '@wb-tech/ui-react';\n\nimport style from './my-component-style.css';\n\nexport interface IProps {\n    className?: string | IStyle\n}\n\nexport const MyComponent = (props: IProps) => {\n    const cn = useClassnames(style, props.className);\n\n    return (\n        <div className={cn('my-component-block')}>\n            <div\n                children=\"Элемент блока\"\n                className={cn('my-component-block__element', {\n                    'my-component-block__element_mod': true\n                })}\n            />\n        </div>\n    );\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Вызов компонента:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-tsx",children:"// Вызов с передачей строки в className\n<MyComponent className=\"my-other-class\" />\n\n// Результат (Вызова с передачей строки в className)\n<div class=\"my-component-block my-other-class\">\n    <div class=\"my-component-block__element my-component-block__element_mod\">Элемент блока</div>\n</div>\n\n\n// Вызов с передачей модуля в className\n<MyComponent\n    className={{\n        'my-component-block'             : 'custom-block',\n        'my-component-block__element'    : 'custom-element',\n        'my-component-block__element_mod': 'custom-mod'\n    }}\n/>\n\n// Результат (Вызова с передачей модуля в className)\n<div class=\"my-component-block custom-block\">\n    <div class=\"my-component-block__element custom-element my-component-block__element_mod custom-mod\">Элемент блока</div>\n</div>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4,{children:"Пример без использования комбинирования CSS модулей."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Компонент:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-tsx",children:"import { useClassnames, IStyle } from '@wb-tech/ui-react';\n\nimport style from './my-component-style.css';\n\nexport interface IProps {\n    className?: string | IStyle\n}\n\nexport const MyComponent = (props: IProps) => {\n    // В аргумент комбинирования передан false\n    const cn = useClassnames(style, props.className, false);\n\n    return (\n        <div className={cn('my-component-block')}>\n            <div\n                children=\"Элемент блока\"\n                className={cn('my-component-block__element', {\n                    'my-component-block__element_mod': true\n                })}\n            />\n        </div>\n    );\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Вызов компонента:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-tsx",children:"// Вызов с передачей строки в className\n<MyComponent className=\"my-other-class\" />\n\n// Результат (Вызова с передачей строки в className)\n<div class=\"my-component-block my-other-class\">\n    <div class=\"my-component-block__element my-component-block__element_mod\">Элемент блока</div>\n</div>\n\n\n// Вызов с передачей модуля в className\n<MyComponent\n    className={{\n        'my-component-block'             : 'custom-block',\n        'my-component-block__element'    : 'custom-element',\n        'my-component-block__element_mod': 'custom-mod'\n    }}\n/>\n\n// Результат (Вызова с передачей модуля в className)\n<div class=\"custom-block\">\n    <div class=\"custom-element custom-mod\">Элемент блока</div>\n</div>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4,{children:"Пример с использование типов CSS модулей."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-tsx",children:"import { useClassnames } from '@wb-tech/ui-react';\n\nimport style from './my-component-style.css';\n\nexport const MyComponent = () => {\n    const cn = useClassnames<typeof style>(style);\n\n    // ...\n}\n"})})]})}function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_Object$assign=Object.assign({},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components),MDXLayout=_Object$assign.wrapper;return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"use-classnames",parameters:{backgrounds:{disable:!0,grid:{disable:!0}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react__WEBPACK_IMPORTED_MODULE_1__.createElement(MDXContent,null))}});const __WEBPACK_DEFAULT_EXPORT__=componentMeta;var __namedExportsOrder=["__page"]}}]);