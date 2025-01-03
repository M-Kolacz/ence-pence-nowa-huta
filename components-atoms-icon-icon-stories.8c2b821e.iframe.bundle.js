"use strict";(self.webpackChunkence_pence_huta_next=self.webpackChunkence_pence_huta_next||[]).push([[8410],{"./src/components/atoms/icon/icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/storybook.ts"),_icon_tsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/atoms/icon/icon.tsx"),_icons_name_ts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/atoms/icon/icons/name.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Icon",component:_icon_tsx__WEBPACK_IMPORTED_MODULE_3__.In,parameters:{layout:"centered",...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.lr)("https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=149-2&t=hULKaPxwkfdoOxEC-4")},args:{name:"add",size:"medium"},argTypes:{name:{control:{type:"select"},options:_icons_name_ts__WEBPACK_IMPORTED_MODULE_4__.k,description:"Name of the icon to render",type:"string"}}},Component={args:{}},Sizes={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex gap-4",children:_icon_tsx__WEBPACK_IMPORTED_MODULE_3__.LR.map((size=>(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_icon_tsx__WEBPACK_IMPORTED_MODULE_3__.In,{...args,key:size,size})))}),argTypes:{...(0,_app_utils_storybook_ts__WEBPACK_IMPORTED_MODULE_2__.rv)(["size"])}},__namedExportsOrder=["Component","Sizes"];Component.parameters={...Component.parameters,docs:{...Component.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Component.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: args => <div className="flex gap-4">\n      {sizes.map(size => <Icon {...args} key={size} size={size} />)}\n    </div>,\n  argTypes: {\n    ...disableControls<typeof Icon>(["size"])\n  }\n}',...Sizes.parameters?.docs?.source}}}},"./src/components/atoms/icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{In:()=>Icon,LR:()=>sizes});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_utils_misc_tsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/misc.tsx");const sizeClassName={font:"w-[1em] h-[1em]",small:"w-4 h-4",medium:"w-6 h-6",large:"w-8 h-8",extraLarge:"w-16 h-16"},sizes=Object.keys(sizeClassName);function Icon({name,className,title,children,size="medium",...props}){return children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"inline-flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{size,name,className,title,...props}),children]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{...props,className:(0,_app_utils_misc_tsx__WEBPACK_IMPORTED_MODULE_1__.cn)(sizeClassName[size],"inline self-center",className),children:[title?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:title||name}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use",{href:`icons/sprite.svg#${name}`})]})}Icon.__docgenInfo={description:'Renders an SVG icon. The icon defaults to the size of the font. To make it\nalign vertically with neighboring text, you can pass the text as a child of\nthe icon and it will be automatically aligned.\nAlternatively, if you\'re not ok with the icon being to the left of the text,\nyou need to wrap the icon and text in a common parent and set the parent to\ndisplay "flex" (or "inline-flex") with "items-center" and a reasonable gap.',methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"unknown[number]",raw:"(typeof iconNames)[number]"},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof sizeClassName",elements:[{name:"literal",value:"font"},{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"},{name:"literal",value:"extraLarge"}]},description:"",defaultValue:{value:'"medium"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Pass `title` prop to the `Icon` component to get `<title>` element rendered\nin the SVG container, providing this way for accessibility."}}}},"./src/components/atoms/icon/icons/name.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>iconNames});const iconNames=["add","blanket","breakfast","bubble-tea","cancel","cereal","diaper","document-money","dollars","email","facebook-verified","facebook","folder","image","kindergarten","menu","milk-bottle","newspaper","next","offer","ok","pacifier","phone-call","piggy-bank","prev","salad","shoes","web"]},"./src/utils/misc.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/utils/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hI:()=>setViewport,kK:()=>disableA11yRules,lr:()=>setDesignPreview,rv:()=>disableControls});__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var _storybook_modes_ts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/modes.ts");__webpack_require__("./node_modules/process/browser.js");const disableControls=controls=>{const disabledOptions={};return controls.forEach((control=>Object.assign(disabledOptions,{[control]:{table:{disable:!0}}}))),disabledOptions},disableA11yRules=rules=>({a11y:{config:{rules:rules.map((rule=>({id:rule,enabled:!1})))}}}),setViewport=device=>({viewport:{defaultViewport:device},chromatic:{modes:{[device]:_storybook_modes_ts__WEBPACK_IMPORTED_MODULE_1__.AF[device]}}}),setDesignPreview=url=>({design:{type:"figma",url:url.replace("/design/","/file/")}})},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_H7CJXHDS_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-H7CJXHDS.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/chunk-XP5HYGXS.mjs"),__webpack_require__("@storybook/global")),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),{window:globalWindow}=(__webpack_require__("storybook/internal/preview-api"),_storybook_global__WEBPACK_IMPORTED_MODULE_2__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");_chunk_H7CJXHDS_mjs__WEBPACK_IMPORTED_MODULE_0__.IX}}]);