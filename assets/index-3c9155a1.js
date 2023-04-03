import{a,j as n}from"./jsx-runtime-68f49b4e.js";import{r as E}from"./index-f1f749bf.js";import{u as D}from"./index-464e8f3b.js";const d={"input-textarea":"_input-textarea_12tm2_1","input-textarea__input":"_input-textarea__input_12tm2_1","input-textarea__input_disabled":"_input-textarea__input_disabled_12tm2_1","input-textarea__label":"_input-textarea__label_12tm2_1","input-textarea__label_disabled":"_input-textarea__label_disabled_12tm2_1","input-textarea__label-required":"_input-textarea__label-required_12tm2_1","input-textarea__input_is-error":"_input-textarea__input_is-error_12tm2_1","input-textarea__error":"_input-textarea__error_12tm2_1","input-textarea__description":"_input-textarea__description_12tm2_1"},r=E.forwardRef(({tabIndex:t=0,...u},F)=>{const e=D(d,u.className),l=E.useMemo(()=>{if(u.required)return a("sup",{className:e("input-textarea__label-required"),children:"*"})},[u.required]),i=E.useMemo(()=>{if(u.label)return n("div",{className:e("input-textarea__label",{"input-textarea__label_disabled":u.disabled??u.readOnly}),children:[u.label,l]})},[u.label,u.disabled,u.readOnly,l]),B=E.useMemo(()=>{if(u.elError)return typeof u.elError=="string"?a("span",{className:e("input-textarea__error"),children:u.elError}):u.elError},[u.elError]),C=E.useMemo(()=>{if(u.elDescription)return typeof u.elDescription=="string"?a("span",{className:e("input-textarea__description"),children:u.elDescription}):u.elDescription},[u.elDescription]);return n("label",{id:u.id,className:e("input-textarea"),children:[i,a("textarea",{ref:F,name:u.name,value:u.value,defaultValue:u.defaultValue,onChange:u.onChange,onBlur:u.onBlur,onFocus:u.onFocus,autoFocus:u.autoFocus,cols:u.cols,rows:u.rows,wrap:u.wrap,disabled:u.readOnly??u.disabled,tabIndex:u.readOnly||u.disabled?-1:t,maxLength:u.maxLength,minLength:u.minLength,placeholder:u.placeholder,readOnly:u.readOnly,required:u.required,autoComplete:u.autoComplete,inputMode:u.inputMode,title:u.title,autoCorrect:u.autoCorrect,className:e("input-textarea__input",{"input-textarea__input_is-error":u.isError})}),C,B]})});try{r.displayName="InputTextarea",r.__docgenInfo={description:"Компонент для отображения многострочного поля ввода текста.",displayName:"InputTextarea",props:{onChange:{defaultValue:null,description:"Параметр `onChange` предназначен для обработки события изменения содержимого поля ввода текста.",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLTextAreaElement>"}},onBlur:{defaultValue:null,description:"Параметр `onBlur` определяет функцию обратного вызова, которая будет вызвана, когда элемент теряет фокус (когда пользователь переключается на другой элемент на странице).",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onFocus:{defaultValue:null,description:"Параметр `onFocus` определяет функцию обратного вызова, которая будет вызываться при фокусировке на элементе `textarea`.",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},autoFocus:{defaultValue:null,description:"Параметр `autoFocus` определяет, следует ли автоматически устанавливать фокус на элемент, когда компонент монтируется.",name:"autoFocus",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:{value:"0"},description:"Параметр `tabIndex` указывает порядковый номер элемента при переходе по клавише `Tab`. Это позволяет управлять табуляцией на странице и устанавливать последовательность перехода фокуса между элементами при нажатии на клавишу `Tab`.",name:"tabIndex",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"Параметр `disabled` указывает, должно ли поле ввода быть неактивным и не реагировать на пользовательский ввод. Если `disabled` установлен в `true`, пользователь не сможет редактировать текст в поле ввода и оно будет иметь соответствующий стиль, который указывает на то, что поле недоступно для редактирования.",name:"disabled",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Параметр `maxLength` указывает максимальную длину текста, которую можно ввести в поле ввода. Если установлено значение `maxLength`, пользователь не сможет ввести более указанного количества символов. Если значение `maxLength` не задано, пользователь сможет ввести любое количество символов в поле ввода.",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"Параметр `minLength` указывает на минимальное количество символов, которое пользователь должен ввести в поле ввода. Если значение этого параметра больше, чем длина введенного текста, то поле ввода будет считаться недопустимым (ошибочным) и будет отображаться соответствующая валидационная информация.",name:"minLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"Параметр `placeholder` позволяет установить текст-подсказку внутри текстовой области, который будет отображаться, когда текстовая область пуста.",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"Параметр `readOnly` определяет, может ли пользователь редактировать текст в поле ввода или нет.",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Параметр `required` указывает, что данное поле является обязательным для заполнения перед отправкой формы",name:"required",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:"Параметр `autoComplete` определяет, должен ли браузер автоматически заполнять значение в поле ввода.",name:"autoComplete",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"Параметр `inputMode` определяет режим ввода текста для поля ввода. Он определяет, какая клавиатура должна появляться при вводе текста на мобильных устройствах.",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"none"'},{value:'"numeric"'},{value:'"decimal"'}]}},title:{defaultValue:null,description:"Параметр `title` устанавливает значение атрибута `title` элемента `textarea`, которое используется для отображения всплывающей подсказки при наведении на элемент.",name:"title",required:!1,type:{name:"string"}},autoCorrect:{defaultValue:null,description:"Параметр `autoCorrect` определяет, должна ли браузерная автокоррекция включаться для вводимого текста в поле ввода.",name:"autoCorrect",required:!1,type:{name:"string"}},cols:{defaultValue:null,description:"Параметр `cols` задает количество символов по горизонтали, которое будет отображаться в текстовом поле.",name:"cols",required:!1,type:{name:"number"}},rows:{defaultValue:null,description:"Параметр `rows` определяет количество строк, которое будет отображаться в поле ввода текста.",name:"rows",required:!1,type:{name:"number"}},wrap:{defaultValue:null,description:"Параметр `wrap` задает тип переноса строк.",name:"wrap",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Параметр `name` используется для установки имени элемента формы. Это имя будет отправлено на сервер вместе со значением текстового поля при отправке формы.",name:"name",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Параметр `className` используется для добавления пользовательских CSS классов к компоненту. Это позволяет настраивать внешний вид компонента с помощью пользовательских стилей.",name:"className",required:!1,type:{name:"string | TStyle"}},label:{defaultValue:null,description:"Параметр `label` используется для установки текста метки для текстового поля. Метка обычно отображается рядом с текстовым полем и предназначена для описания.",name:"label",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"Параметр `value` используется для задания значения поля.",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Параметр `defaultValue` используется для задания начального значения поля.",name:"defaultValue",required:!1,type:{name:"string"}},isError:{defaultValue:null,description:"Параметр `isError` указывает, имеет ли поле ввода ошибку или нет. Если значение этого параметра установлено в `true`, то для поля ввода будет применяться соответствующий стиль, который указывает на наличие ошибки ввода.",name:"isError",required:!1,type:{name:"boolean"}},elError:{defaultValue:null,description:"Параметр `elError` задает элемент, который будет использован в качестве места вывода сообщения об ошибке, если `isError` имеет значение true. Это элемент содержащий текст ошибки, который отображается рядом с полем ввода или под ним.",name:"elError",required:!1,type:{name:"ReactNode"}},elDescription:{defaultValue:null,description:`Используется для отображения дополнительной информации о поле ввода, например, подсказки или описания того, какое содержимое следует вводить в поле. Это элемент отображается рядом с самим полем ввода.

Этот параметр может быть полезен, если вы хотите предоставить пользователю дополнительную информацию о том, как использовать поле ввода или какой формат должен иметь вводимый текст.`,name:"elDescription",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"Если параметр `id` не указан, то компонент будет создан без уникального идентификатора.",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{r as I};
//# sourceMappingURL=index-3c9155a1.js.map