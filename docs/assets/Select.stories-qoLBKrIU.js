import{j as e}from"./jsx-runtime-g8tG0yhs.js";import{D as u}from"./CaretDown-bsu5OudD.js";import{c as f}from"./colors-C6ztQrZu.js";import"./index-RYns6xqu.js";import"./IconBase-C0B5zwrg.js";const h="_select_hgfav_1",S="_wrapper_hgfav_16",n={select:h,wrapper:S},i=({children:s,className:o="",color:p="primary",...d})=>{const m=[`color-${p}`,n.select,o].join(" ");return e.jsxs("div",{className:n.wrapper,children:[e.jsx("select",{className:m,...d,children:s}),e.jsx(u,{})]})};i.__docgenInfo={description:"",methods:[],displayName:"Select",props:{children:{required:!0,tsType:{name:"union",raw:"ValidChildren | ValidChildren[]",elements:[{name:"ReactElement",elements:[{name:"SelectOption"}],raw:"ReactElement<typeof SelectOption>"},{name:"Array",elements:[{name:"ReactElement",elements:[{name:"SelectOption"}],raw:"ReactElement<typeof SelectOption>"}],raw:"ValidChildren[]"}]},description:""},color:{required:!1,tsType:{name:"colorsType"},description:"",defaultValue:{value:'"primary"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["DetailedHTMLProps"]};const t=({children:s,...o})=>e.jsx("option",{...o,children:s});t.__docgenInfo={description:"",methods:[],displayName:"SelectOption",composes:["DetailedHTMLProps"]};const g={title:"Select",component:i,argTypes:{color:{options:f}},parameters:{layout:"centered"},tags:["autodocs"]},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"first"}),e.jsx(t,{children:"second"}),e.jsx(t,{children:"third"}),e.jsx(t,{children:"fourth"})]})}};var a,c,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: <>
      <SelectOption>first</SelectOption>
      <SelectOption>second</SelectOption>
      <SelectOption>third</SelectOption>
      <SelectOption>fourth</SelectOption>
    </>
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,g as default};