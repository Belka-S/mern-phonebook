"use strict";(self.webpackChunkmern_phonebook=self.webpackChunkmern_phonebook||[]).push([[86],{7656:function(n,r,e){e.d(r,{J:function(){return d},k:function(){return l}});var o,s,t,i=e(168),a=e(6444),c=e(15),u=(0,a.iv)(o||(o=(0,i.Z)(["\n  height: 41px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  cursor: pointer;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n\n  @media screen and (width >= 768px) {\n    font-size: 16px;\n  }\n\n  border: 1px solid;\n  border-radius: ",";\n  transition: border-color 250ms, background-color 250ms, color 250ms;\n"])),c.n.radius.s),l=a.ZP.button(s||(s=(0,i.Z)(["\n  ",";\n\n  margin-top: 30px;\n\n  font-weight: 700;\n  border-color: ",";\n  color: ",";\n  background-color: ",";\n\n  &:hover,\n  &:focus {\n    border-color: ",";\n    background-color: ",";\n  }\n\n  &:disabled {\n    cursor: auto;\n    color: ",";\n    border-color: ",";\n    background-color: ",";\n  }\n"])),u,c.n.colors.accent,c.n.colors.white,c.n.colors.accent,c.n.colors.hovered,c.n.colors.hovered,c.n.colors.border,c.n.colors.accent,c.n.colors.accent),d=a.ZP.a(t||(t=(0,i.Z)(["\n  ",";\n\n  margin-top: 18px;\n  padding-inline: 10px;\n\n  font-weight: 400;\n  border-color: ",";\n  color: ",";\n  background-color: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    border-color: ",";\n    background-color: ",";\n  }\n\n  & pre {\n    font-size: 12px;\n  }\n"])),u,c.n.colors.border,c.n.colors.black,c.n.colors.white,c.n.colors.hovered,c.n.colors.hovered,c.n.colors.ligthBlue)},8877:function(n,r,e){var o=e(2007),s=e.n(o),t=e(7656),i=e(3329);r.Z=function(n){var r=n.onClick,e=n.disabled,o=n.children;return(0,i.jsx)(t.k,{onClick:r,type:"submit",disabled:e,children:o})},t.k.propTepes={onClick:s().func,disabled:s().bool,children:s().oneOfType([s().string,s().node,s().oneOf(["img","png","svg"])])}},7775:function(n,r,e){e.d(r,{Bc:function(){return f},ZC:function(){return h},gN:function(){return m},l0:function(){return p}});var o,s,t,i,a,c=e(168),u=e(6444),l=e(5705),d=e(15),p=(0,u.ZP)(l.l0)(o||(o=(0,c.Z)(["\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n\n  border-radius: ",";\n  background-color: ",";\n"])),d.n.radius.m,d.n.colors.white),m=(0,u.ZP)(l.gN)(s||(s=(0,c.Z)(["\n  padding: 10px;\n  margin-bottom: 20px;\n\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  font-size: 16px;\n  font-family: 'Roboto', sans-serif;\n\n  border: 1px solid ",";\n  border-radius: ",";\n  outline: 1px solid transparent;\n  transition: border-color 250ms linear, outline-color 250ms linear;\n\n  border-color: ",";\n\n  &:hover,\n  &:focus {\n    border-color: ",";\n\n    outline-color: ",";\n  }\n"])),d.n.colors.border,d.n.radius.s,(function(n){var r=n.validation;switch(r){case"noValue":return d.n.colors.border;case r:return d.n.colors[r]}}),(function(n){var r=n.validation;if(r===r)return d.n.colors[r]}),(function(n){var r=n.validation;if(r===r)return d.n.colors[r]}));r.ZP=u.ZP.label(t||(t=(0,c.Z)(["\n  display: flex;\n  align-items: baseline;\n\n  font-size: 16px;\n  font-weight: 500;\n\n  & pre {\n    font-size: 10px;\n  }\n  // &::first-letter { text-transform: uppercase; }\n"])));var f=(0,u.ZP)(l.Bc)(i||(i=(0,c.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n\n  color: ",";\n"])),d.n.colors.error),h=u.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n\n  & h2 {\n    margin: 0;\n\n    font-family: 'Montserrat', sans-serif;\n    font-size: 24px;\n  }\n"])))},1086:function(n,r,e){e.r(r),e.d(r,{default:function(){return x}});var o=e(9439),s=e(1087),t=e(9119),i=e(1413),a=e(2791),c=e(5705),u=e(9434),l=e(8877),d=e(6635),p=e(7775),m=e(2797),f=e(3329),h={newPass:"",confirmPass:""},g=function(n){var r=n.id,e=n.pwdToken,o=(0,u.I0)(),s=function(n){var r=n.values,e=n.errors,o=n.key,s=!r[o]&&"noValue",t=e[o]?"error":"success";return s||t},t=function(n){var r=n.errors,e=n.values,o=Object.keys(r).length,s=Object.keys(e).some((function(n){return!e[n]}));return o||s};return(0,f.jsx)(c.J9,{initialValues:h,validationSchema:m.kM,onSubmit:function(n,s){o((0,d.gz)((0,i.Z)((0,i.Z)({},n),{},{id:r,pwdToken:e}))).unwrap().catch((function(n){return console.log(n)})),s.resetForm()},children:function(n){var r=n.values,e=n.errors;return(0,f.jsxs)(p.l0,{children:[(0,f.jsx)(p.ZC,{children:(0,f.jsx)("h2",{children:"Reset password"})}),Object.keys(h).map((function(n){return(0,f.jsxs)(a.Fragment,{children:[(0,f.jsxs)(p.ZP,{children:[n.at(0).toUpperCase()+n.replace("Pass"," password:").substring(1),(0,f.jsx)("pre",{children:" "}),(0,f.jsx)(p.Bc,{name:n,component:"span"})]}),(0,f.jsx)(p.gN,{type:"password",name:n,validation:s({values:r,errors:e,key:n})})]},n)})),(0,f.jsx)(l.Z,{disabled:t({values:r,errors:e}),children:"Submit"})]})}})},x=function(){var n=(0,s.lr)(),r=(0,o.Z)(n,1)[0],e=r.get("id"),i=r.get("pwd_token");return(0,f.jsx)(t.Z,{w:"400px",h:"100vh",p:"0",d:"flex",fd:"column",jc:"center",children:(0,f.jsx)(g,{id:e,pwdToken:i})})}},2103:function(n,r,e){e.d(r,{o4:function(){return p},Hu:function(){return d},xK:function(){return i},GZ:function(){return s},W3:function(){return l},fW:function(){return u},A1:function(){return t},Kx:function(){return a},u9:function(){return o},hJ:function(){return c}});var o=["phone","email","whatsapp","viber","telegram","linkedin","github","address","birthday","notes"],s=["firstName","lastName"].concat(o),t={msg:"only letters, numbers, underscores, dashes, spases",regExp:/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+(([_ -][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/},i={msg:"test@test.com, test@test.ua",regExp:/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/},a={msg:"only digits, spaces, dashes, parentheses, can start with +",regExp:/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/},c={msg:"only letters and numbers,  more than five, start with @",regExp:/.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/},u={msg:"https://linkedin.com",regExp:/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)+\/(([_-][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/},l={msg:"https://...github",regExp:/^(http(s?):\/\/)?(www\.)?github\.com+\/(([_-][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/},d={msg:"dd-mm-yyyy",regExp:/^([0-2^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)((19|20)\d{2}$)/},p={msg:"only letters, numbers, commas, dashes, spases",regExp:/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+(([ -]|(, )[a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/}},2797:function(n,r,e){e.d(r,{OD:function(){return f},Hj:function(){return p},kM:function(){return m},M7:function(){return l},if:function(){return u},I2:function(){return d}});var o=e(6727),s=e(2103),t=o.Z_().min(4,"is too short").matches(s.A1.regExp,s.A1.msg).required("is required"),i=o.Z_().matches(s.xK.regExp,s.xK.msg).required("is required"),a=o.Z_().min(6,"is too short").required("is required"),c=o.Rx().required("is required").typeError("must be a number"),u=o.Ry().shape({name:t,email:i,password:a}),l=o.Ry().shape({email:i,password:a}),d=o.Ry().shape({verificationCode:c}),p=o.Ry().shape({email:i}),m=o.Ry().shape({newPass:a,confirmPass:a.oneOf([o.iH("newPass")],"must match")}),f=o.Ry().shape({firstName:o.Z_().matches(s.A1.regExp,s.A1.msg).required("Required"),lastName:o.Z_().matches(s.A1.regExp,s.A1.msg),phone:o.Z_().matches(s.Kx.regExp,s.Kx.msg).required("Required"),email:o.Z_().matches(s.xK.regExp,s.xK.msg),whatsapp:o.Z_().matches(s.Kx.regExp,s.Kx.msg),viber:o.Z_().matches(s.Kx.regExp,s.Kx.msg),telegram:o.Z_().matches(s.hJ.regExp,s.hJ.msg),linkedin:o.Z_().matches(s.fW.regExp,s.fW.msg),github:o.Z_().matches(s.W3.regExp,s.W3.msg),address:o.Z_().matches(s.o4.regExp,s.o4.msg),birthday:o.Z_().matches(s.Hu.regExp,s.Hu.msg),notes:o.Z_()})}}]);
//# sourceMappingURL=86.65f74599.chunk.js.map