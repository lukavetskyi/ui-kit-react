import{c as j}from"./colors-C6ztQrZu.js";import{j as e}from"./jsx-runtime-g8tG0yhs.js";import{r as d}from"./index-RYns6xqu.js";import{R as T,I as l,w as N,a as q}from"./X-BpvBJxcs.js";import"./IconBase-C0B5zwrg.js";const w="_notification_vbrdh_1",E="_icon_vbrdh_35",V="_open_vbrdh_51",W="_close_vbrdh_55",s={notification:w,icon:E,open:V,close:W},m=({children:y,open:n=!0,color:o="primary",onClose:a,className:h="",title:g,autoCloseDelay:r=0,...v})=>{const[b,c]=d.useState(n);d.useEffect(()=>{c(n)},[n]),d.useEffect(()=>{if(r){const x=setTimeout(()=>{c(!1)},r*1e3);return()=>{clearTimeout(x)}}},[r]),a===void 0&&(a=()=>{c(!1)});let t;o==="danger"?t=e.jsx(l,{}):o==="success"?t=e.jsx(N,{}):o==="warning"?t=e.jsx(l,{}):o==="info"&&(t=e.jsx(q,{}));const _=[`color-${o}`,s.notification,b?s.open:s.close,t===void 0?"":s.icon,h].join(" ");return e.jsxs("div",{className:_,...v,children:[e.jsxs("div",{children:[e.jsxs("h3",{children:[t,e.jsx("span",{children:g})]}),e.jsx(T,{onClick:a})]}),e.jsx("div",{children:y})]})};m.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{title:{required:!0,tsType:{name:"string"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},color:{required:!1,tsType:{name:"colorsType"},description:"",defaultValue:{value:"'primary'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},autoCloseDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["DetailedHTMLProps"]};const O={title:"Notification",component:m,argTypes:{color:{options:j}},parameters:{layout:"centered"},tags:["autodocs"]},i={args:{title:"Modal Window",children:"When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps."}};var u,p,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Modal Window",
    children: "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps."
  }
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const S=["Default"];export{i as Default,S as __namedExportsOrder,O as default};