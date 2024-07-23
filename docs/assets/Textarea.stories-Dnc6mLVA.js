import{c as v}from"./colors-C6ztQrZu.js";import{j as e}from"./jsx-runtime-g8tG0yhs.js";import{r as S}from"./index-RYns6xqu.js";const b="_textarea_3odfp_1",q="_wrapper_3odfp_31",p={textarea:b,wrapper:q},h=({color:g="primary",className:y="",helperText:t="",maxLength:s,onChange:T=()=>{},...o})=>{const[_,j]=S.useState(0),l=n=>{j(n.target.value.length),T(n)},c=[`color-${g}`,p.textarea,y].join(" ");return t||s?e.jsxs("div",{className:p.wrapper,children:[e.jsx("textarea",{onChange:l,className:c,...o}),e.jsxs("div",{children:[e.jsx("span",{children:t}),e.jsx("span",{children:s?`${_}/${s}`:""})]})]}):e.jsx("textarea",{onChange:l,className:c,...o})};h.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{color:{required:!1,tsType:{name:"colorsType"},description:"",defaultValue:{value:'"primary"',computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1},onChange:{defaultValue:{value:"() => { }",computed:!1},required:!1}},composes:["DetailedHTMLProps"]};const w={title:"Textarea",component:h,argTypes:{color:{options:v}},parameters:{layout:"centered"},tags:["autodocs"]},a={args:{placeholder:"Placeholder"}},r={args:{placeholder:"Placeholder",helperText:"Helper text",maxLength:100}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder"
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,x,f;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder",
    helperText: "Helper text",
    maxLength: 100
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const V=["Default","HelpTextAndSymbols"];export{a as Default,r as HelpTextAndSymbols,V as __namedExportsOrder,w as default};
