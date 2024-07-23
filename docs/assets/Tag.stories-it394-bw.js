import{j as l}from"./jsx-runtime-g8tG0yhs.js";import{R as e,r as L}from"./index-RYns6xqu.js";import{b as E}from"./IconBase-C0B5zwrg.js";import{c as b}from"./colors-C6ztQrZu.js";const j=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M225.84,54.13A62.07,62.07,0,0,0,138.32,54L128,63.58,117.68,54a62,62,0,0,0-87.58,87.8l89.35,90.65a12,12,0,0,0,17.1,0l89.29-90.59a62,62,0,0,0,0-87.7Zm-17,70.79L128,206.9,47.13,124.85a38,38,0,0,1,53.74-53.74c.1.1.2.2.31.29l18.64,17.36a12,12,0,0,0,16.36,0L154.82,71.4c.11-.09.21-.19.31-.29a38,38,0,1,1,53.68,53.81Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M217.36,133.36,128,224,38.64,133.36a50,50,0,0,1,70.72-70.72L128,80l18.64-17.36a50,50,0,1,1,70.72,70.72Z",opacity:"0.2"}),e.createElement("path",{d:"M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M221.6,58.38a56.06,56.06,0,0,0-79.12-.08L128,71.78,113.52,58.3a56,56,0,0,0-79.15,79.25l89.36,90.66a6,6,0,0,0,8.54,0l89.33-90.62a56,56,0,0,0,0-79.21Zm-8.52,70.75L128,215.45,42.89,129.1a44,44,0,0,1,62.22-62.23,1.07,1.07,0,0,0,.16.14l18.64,17.36a6,6,0,0,0,8.18,0L150.73,67a1.07,1.07,0,0,0,.16-.14,44,44,0,1,1,62.19,62.26Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M220.18,59.79a54.05,54.05,0,0,0-76.31,0L128,74.51,112.13,59.74A54,54,0,0,0,35.8,136.15l89.35,90.66a4,4,0,0,0,5.7,0l89.33-90.64a54,54,0,0,0,0-76.38Zm-5.67,70.74L128,218.3,41.47,130.51a46,46,0,0,1,65.06-65.06l.1.1,18.64,17.36a4,4,0,0,0,5.46,0l18.64-17.36.1-.1a46,46,0,1,1,65,65.08Z"}))]]);var v=Object.defineProperty,T=Object.defineProperties,_=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,c=(t,a,r)=>a in t?v(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,w=(t,a)=>{for(var r in a||(a={}))Z.call(a,r)&&c(t,r,a[r]);if(s)for(var r of s(a))O.call(a,r)&&c(t,r,a[r]);return t},M=(t,a)=>T(t,_(a));const d=L.forwardRef((t,a)=>e.createElement(E,M(w({ref:a},t),{weights:j})));d.displayName="HeartStraight";const q="_common_yhq2i_1",F="_text_yhq2i_34",m={common:q,text:F,"text-icon":"_text-icon_yhq2i_39"},f=({children:t,content:a="text",color:r="primary",className:g="",icon:y=l.jsx(d,{}),...x})=>{let n;a==="text"?n=l.jsx(l.Fragment,{children:t}):n=l.jsxs(l.Fragment,{children:[l.jsx("span",{children:t}),y]});const h=[m.common,m[a],`color-${r}`,g].join(" ");return l.jsx("button",{className:h,...x,children:n})};f.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{content:{required:!1,tsType:{name:"union",raw:'"text" | "text-icon"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"text-icon"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},icon:{required:!1,tsType:{name:"Icon"},description:"",defaultValue:{value:"<HeartStraight />",computed:!1}},color:{required:!1,tsType:{name:"colorsType"},description:"",defaultValue:{value:'"primary"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};const S={title:"Tag",component:f,argTypes:{color:{options:b}},parameters:{layout:"centered"},tags:["autodocs"]},o={args:{children:"Tag"}};var i,p,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Tag"
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,S as default};