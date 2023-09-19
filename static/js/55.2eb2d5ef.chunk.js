"use strict";(self.webpackChunkmern_phonebook=self.webpackChunkmern_phonebook||[]).push([[55],{7055:function(n,e,o){o.r(e),o.d(e,{default:function(){return W}});var r,t,i,a,l,c,s=o(4005),d=o(7286),u=o(9434),p=o(8921),f=function(){return{contacts:(0,u.v9)(p.Af),activeContact:(0,u.v9)(p.Pd),filterValue:(0,u.v9)(p.Gd),error:(0,u.v9)(p.zh),isLoading:(0,u.v9)(p.xU)}},x=o(168),h=o(6444),g=h.ZP.div(r||(r=(0,x.Z)(["\n  /* max-width: 1280px; */\n  display: grid;\n  /* grid-auto-rows: 300px; */\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-row-gap: 10px;\n  grid-column-gap: 40px;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n"]))),v=o(3329),m=function(n){var e=n.children;return(0,v.jsx)(g,{children:e})},b=o(9119),j=o(9126),k=o(15),w="30px",y="14px",z=h.ZP.div(t||(t=(0,x.Z)(["\n  width: 100%;\n  margin-bottom: 15px;\n  position: relative;\n  display: inline-block;\n\n  input {\n    width: 100%;\n    height: ",";\n    padding-inline: ",";\n\n    border: 1px solid ",";\n    border-radius: 5px;\n    outline: transparent;\n    transition: border-color 250ms;\n\n    &:hover,\n    &:focus {\n      border-color: ",";\n    }\n\n    &::placeholder {\n      width: fit-content;\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n      transition: left 300ms, transform 300ms;\n      font-size: ",";\n    }\n\n    &:focus::placeholder {\n      left: 0;\n\n      transform: translateX(",");\n    }\n\n    & + svg {\n      position: absolute;\n      top: 50%;\n      left: calc(50% - 2.5 * ",");\n      transform: translate(-50%, -50%);\n      transition: left 300ms, transform 300ms;\n      cursor: text;\n    }\n\n    &:focus + svg,\n    &:not(:placeholder-shown) + svg {\n      left: calc("," * 0.55);\n    }\n  }\n"])),w,w,k.n.colors.border,k.n.colors.hovered,y,w,y,w),C=h.ZP.button(i||(i=(0,x.Z)(["\n  width: 18px;\n  height: 18px;\n\n  position: absolute;\n  top: 50%;\n  right: calc("," * 0.55);\n\n  transform: translate(50%, -50%);\n  border: 1px solid transparent;\n  border-radius: 50%;\n  background-color: ",";\n  color: ",";\n  font-weight: 700;\n  font-size: 12px;\n"])),w,k.n.colors.border,k.n.colors.white),F=o(6263),Z=function(){var n=(0,u.v9)(p.Gd),e=(0,u.I0)(),o=function(n){return e((0,F.hL)(n.target.value))};return(0,v.jsxs)(z,{children:[(0,v.jsx)("input",{type:"text",name:"filter",placeholder:"Search",value:n,onChange:o}),(0,v.jsx)(j.dVI,{size:"16",onClick:function(n){return n.target.previousElementSibling.focus()}}),n&&(0,v.jsx)(C,{onClick:o,children:"\u2715"})]})},L=o(2791),_=h.ZP.ul(a||(a=(0,x.Z)(["\n  width: 100%;\n  padding: 0;\n  display: inline-flex;\n  flex-direction: column;\n\n  font-weight: 500;\n  counter-reset: section;\n  list-style-type: none;\n\n  li {\n    display: inline-flex;\n    padding: 3px 10px 1px;\n\n    gap: 5px;\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n      color: ",";\n    }\n\n    &::before {\n      counter-increment: section;\n      content: counters(section, '.') '.';\n    }\n\n    /* temprary */\n    button {\n      margin-left: auto;\n      padding: 0;\n      background-color: transparent;\n      border-color: transparent;\n      font-weight: 700;\n\n      &:hover,\n      &:focus {\n        color: ",";\n      }\n    }\n  }\n\n  & .active {\n    background-color: ",";\n    color: ",";\n\n    &:hover,\n    &:focus {\n      color: ",";\n    }\n  }\n"])),k.n.colors.hovered,k.n.colors.failed,k.n.colors.saccess,k.n.colors.white,k.n.colors.white),B=o(7612),P=function(){var n=(0,u.I0)(),e=f(),o=e.contacts,r=e.activeContact,t=e.filterValue;(0,L.useEffect)((function(){n((0,B.VC)())}),[n]),(0,L.useEffect)((function(){var e,t,i=document.querySelector("li[data-id].active");if(null===(e=i)||void 0===e||e.classList.remove("active"),!(i=document.querySelector('li[data-id="'.concat(null===r||void 0===r?void 0:r._id,'"]')))){i=document.querySelector("li[data-id]");var a=o.find((function(n){return n._id===i.dataset.id}));n((0,F.BL)(a))}null===(t=i)||void 0===t||t.classList.add("active")}),[r,o,n]);var i=o.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})),a=function(e){var r=e.target.dataset.id,t=o.find((function(n){return n._id===r}));n((0,F.BL)(t))};return(0,v.jsx)(_,{children:i.map((function(e){return(0,v.jsxs)("li",{"data-id":e._id,onClick:a,children:[e.name,(0,v.jsx)("button",{onClick:function(){return n((0,B.xX)(e._id))},children:"Delete"})]},e._id)}))})},E=o(1545),S=o(3524),I=h.ZP.div(l||(l=(0,x.Z)(["\n  margin-bottom: 10px;\n  margin-left: 21%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 10px;\n\n  & a {\n    padding: 3px;\n    width: 26px;\n    height: 26px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border-radius: 50%;\n    border: 1px solid ",";\n    background-color: ",";\n    transition: border-color 250ms, background-color 250ms;\n\n    &:hover,\n    &:focus {\n      cursor: pointer;\n      border-color: ",";\n      background-color: ",";\n    }\n\n    & svg {\n      fill: ",";\n    }\n  }\n"])),k.n.colors.border,k.n.colors.white,k.n.colors.hovered,k.n.colors.ligthBlue,k.n.colors.accent),G=h.ZP.ul(c||(c=(0,x.Z)(["\n  list-style: none;\n  font-size: 16px;\n\n  & li {\n    padding-block: 5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-column-gap: 20px;\n    grid-template-areas: 'key value value value value';\n\n    & span {\n      &:nth-of-type(1) {\n        grid-area: key;\n        text-align: right;\n\n        color: ",";\n      }\n      &:nth-of-type(2) {\n        grid-area: value;\n        text-align: left;\n      }\n    }\n\n    &:not(:last-of-type) {\n      border-bottom: 1px solid ",";\n    }\n  }\n"])),k.n.colors.placeholder,k.n.colors.border),V=function(){var n=(0,d.a)().userId,e=f(),o=e.activeContact,r=!e.isLoading&&n===(null===o||void 0===o?void 0:o.owner),t=["_id","name","group","favorite","owner"],i={phone:{href:"tel:".concat(null===o||void 0===o?void 0:o.phone),icon:(0,v.jsx)(j.SPk,{size:"14"})},email:{href:"mailto:".concat(null===o||void 0===o?void 0:o.email),icon:(0,v.jsx)(j.lZw,{size:"14"})},whatsapp:{href:"https://wa.me/".concat(null===o||void 0===o?void 0:o.whatsapp),icon:(0,v.jsx)(j.RGt,{size:"14"})},viber:{href:"viber://chat?number:+".concat(null===o||void 0===o?void 0:o.viber),icon:(0,v.jsx)(E.i86,{size:"20"})},telegram:{href:"https://t.me/".concat(null===o||void 0===o?void 0:o.telegram.replace("@","")),icon:(0,v.jsx)(E.Gke,{size:"16"})},linkedin:{href:null===o||void 0===o?void 0:o.linkedin,icon:(0,v.jsx)(E.KCg,{size:"20"})},github:{href:null===o||void 0===o?void 0:o.github,icon:(0,v.jsx)(j.rFR,{size:"16"})},address:{href:(null===o||void 0===o?void 0:o.address)&&"https://www.google.com/maps/search/"+"".concat(null===o||void 0===o?void 0:o.address.split(/\s+/).join("+")),icon:(0,v.jsx)(S.jCW,{size:"16"})}};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(I,{children:r&&Object.keys(i).map((function(n){return o[n]&&(0,v.jsx)("a",{href:i[n].href,target:"_blank",rel:"noreferrer",children:i[n].icon},i[n].href)}))}),(0,v.jsx)(G,{children:r&&Object.keys(o).map((function(n){return!t.includes(n)&&o[n]&&(0,v.jsxs)("li",{children:[(0,v.jsx)("span",{children:"".concat(n)}),(0,v.jsx)("span",{children:"".concat(o[n])})]},n)}))})]})},W=function(){var n=(0,d.a)().userId,e=f(),o=e.activeContact,r=e.isLoading,t=n===(null===o||void 0===o?void 0:o.owner)?null===o||void 0===o?void 0:o.name:"";return(0,v.jsxs)(m,{children:[(0,v.jsxs)(b.W,{pi:"0",children:[(0,v.jsx)(Z,{})," ",(0,v.jsx)("br",{}),(0,v.jsx)(P,{})]}),(0,v.jsx)(b.W,{pi:"0",mt:"0 0 10px 21%",t2:t,children:(0,v.jsx)(V,{})}),r&&(0,v.jsx)(s.D,{})]})}},15:function(n,e,o){o.d(e,{n:function(){return r}});var r=Object.freeze({colors:{background:"#F7F6F9",accent:"#206bdd",hovered:"#2374ef",black:"#343434",white:"#FFFFFF",ligthBlue:"#E3F3FF",failed:"#E74A3B",saccess:"#019595",canceled:"#E5EDFA",border:"#b1b1b1",placeholder:"#5c5858"},fontSizes:{micro:"10px",xs:"12px",s:"14px",m:"16px",l:"18px",xl:"20px",xxl:"24px",xxxl:"32px"},fontWeight:{r:400,m:500,sb:600,b:700},breakpoints:{xs:"320px",s:"375px",m:"768px",l:"1280px"},animations:{cubicBezier:"cubic-bezier(0, 0.5, 1.3, 2)",duration:"250ms"},shadows:{authHeading:"0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)",authButton:"4px 2px 16px rgba(136, 165, 191, 0.48)"},toastify:{theme:"light"},modalBackdropcolors:{black:"rgba(23, 24, 32, 0.5)",grey:"rgba(103, 103, 103, 0.5)"},backgroundImages:{}})}}]);
//# sourceMappingURL=55.2eb2d5ef.chunk.js.map