var t6=Object.defineProperty,n6=Object.defineProperties;var o6=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var l3=Object.prototype.hasOwnProperty,i3=Object.prototype.propertyIsEnumerable;var a3=(t,e,o)=>e in t?t6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s3=(t,e)=>{for(var o in e||(e={}))l3.call(e,o)&&a3(t,o,e[o]);if(U)for(var o of U(e))i3.call(e,o)&&a3(t,o,e[o]);return t},u3=(t,e)=>n6(t,o6(e));var r3=(t,e)=>{var o={};for(var n in t)l3.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&U)for(var n of U(t))e.indexOf(n)<0&&i3.call(t,n)&&(o[n]=t[n]);return o};import{d as _,i as J,r as V,o as d,c as p,a as l,w as s,b as a,p as Q,e as X,f as r,g as T,F as x,h as c6,T as d3,j as N,v as R,u as h,t as j,k as B,l as _3,m as p3,n as M,q as v3,s as S,x as l6,y as W,z as K,A as i6,P as f3,B as Y,C as a6,D as h3,E as e3,G as s6,H as u6,I as r6,J as d6,K as _6,L as p6,M as v6}from"./vendor.40d041f3.js";const f6=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerpolicy&&(i.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?i.credentials="include":c.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(c){if(c.ep)return;c.ep=!0;const i=o(c);fetch(c.href,i)}};f6();var q=(t,e)=>{const o=t.__vccOpts||t;for(const[n,c]of e)o[n]=c;return o};const m3=t=>(Q("data-v-23c8a2be"),t=t(),X(),t),h6={class:"top-nav"},m6=m3(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-cai"})],-1)),k6={class:"menu"},g6=r("\u6587\u6863"),b6=m3(()=>a("i",{class:"iconfont iconfont-menu"},"\uE655",-1)),y6=[b6],B6=_({setup(t){const e=J("asideVisible"),o=()=>{e.value=!e.value};return(n,c)=>{const i=V("router-link");return d(),p("div",h6,[l(i,{to:"/",class:"logo"},{default:s(()=>[m6]),_:1}),a("ul",k6,[l(i,{to:"/doc/intro"},{default:s(()=>[g6]),_:1})]),a("span",{class:"toggleAsideButton",onClick:o},y6)])}}});var k3=q(B6,[["__scopeId","data-v-23c8a2be"]]);const t3=t=>(Q("data-v-fae5bece"),t=t(),X(),t),C6={class:"top-nav-and-banner"},$6={class:"banner"},x6=t3(()=>a("h1",null,"Tsai-UI",-1)),E6=t3(()=>a("h2",null,"\u4E00\u4E2A\u7B80\u5355&\u7528\u4E8E\u5B66\u4E60\u7684UI\u6846\u67B6",-1)),w6={class:"actions"},D6=t3(()=>a("a",{href:""},"GitHub",-1)),F6=r("\u5F00\u59CB"),S6=c6('<div class="features" data-v-fae5bece><ul data-v-fae5bece><li data-v-fae5bece><svg class="icon" aria-hidden="true" data-v-fae5bece><use xlink:href="#icon-vue" data-v-fae5bece></use></svg><h3 data-v-fae5bece>\u57FA\u4E8Evue 3.2.25</h3><p data-v-fae5bece>\u4F7F\u7528\u4E86Composition API setup\u8BED\u6CD5\u7CD6</p></li><li data-v-fae5bece><svg class="icon" aria-hidden="true" data-v-fae5bece><use xlink:href="#icon-ts" data-v-fae5bece></use></svg><h3 data-v-fae5bece>\u57FA\u4E8Etypescript 4.4.4</h3><p data-v-fae5bece>\u4F7F\u7528\u4E86Composition API setup\u8BED\u6CD5\u7CD6</p></li><li data-v-fae5bece><svg class="icon" aria-hidden="true" data-v-fae5bece><use xlink:href="#icon-light" data-v-fae5bece></use></svg><h3 data-v-fae5bece>\u4EE3\u7801\u7B80\u6D01\u6613\u8BFB</h3><p data-v-fae5bece>\u7EC4\u4EF6\u7684\u4EE3\u7801\u90FD\u975E\u5E38\u7B80\u6D01\u6613\u61C2</p></li></ul></div>',1),T6=_({setup(t){return J("asideVisible"),(e,o)=>{const n=V("router-link");return d(),p(x,null,[a("div",C6,[l(k3),a("div",$6,[x6,E6,a("p",w6,[D6,l(n,{to:"/doc/intro"},{default:s(()=>[F6]),_:1})])])]),T(' <Doc class="doc" v-if="asideVisible"></Doc> '),S6],64)}}});var z6=q(T6,[["__scopeId","data-v-fae5bece"]]);const g3=t=>(Q("data-v-27b63eee"),t=t(),X(),t),A6={class:"layout"},O6={class:"content"},M6=g3(()=>a("h2",null,"\u6587\u6863",-1)),q6=r("\u4ECB\u7ECD"),L6=r("\u5B89\u88C5"),V6=r("\u5F00\u59CB\u4F7F\u7528"),I6=g3(()=>a("h2",null,"\u7EC4\u4EF6\u5217\u8868",-1)),H6=r("Switch \u7EC4\u4EF6"),P6=r("Button \u7EC4\u4EF6"),U6=r("Dialog \u7EC4\u4EF6"),N6=r("Tabs \u7EC4\u4EF6"),R6=_({setup(t){const e=J("asideVisible");return(o,n)=>{const c=V("router-link"),i=V("router-view");return d(),p("div",A6,[l(k3,{class:"top-nav"}),a("div",O6,[l(d3,null,{default:s(()=>[N(a("aside",null,[M6,a("ol",null,[a("li",null,[l(c,{to:"/doc/intro"},{default:s(()=>[q6]),_:1})]),a("li",null,[l(c,{to:"/doc/install"},{default:s(()=>[L6]),_:1})]),a("li",null,[l(c,{to:"/doc/start"},{default:s(()=>[V6]),_:1})])]),I6,a("ol",null,[a("li",null,[l(c,{to:"/doc/switch"},{default:s(()=>[H6]),_:1})]),a("li",null,[l(c,{to:"/doc/button"},{default:s(()=>[P6]),_:1})]),a("li",null,[l(c,{to:"/doc/dialog"},{default:s(()=>[U6]),_:1})]),a("li",null,[l(c,{to:"/doc/tabs"},{default:s(()=>[N6]),_:1})])])],512),[[R,h(e)]])]),_:1}),a("main",null,[l(i,{class:"main"})])])])}}});var j6=q(R6,[["__scopeId","data-v-27b63eee"]]);const W6={class:"tsai-switch-wrapper"},K6={key:0},Z6={class:"circle"},G6={class:"loading"},J6={key:1},w=_({props:{checked:{type:Boolean,required:!0,default:!1},activeColor:{type:String,required:!1,default:"#3894ff"},inactiveColor:{type:String,required:!1,default:"#d7dae2"},activeText:{type:String,required:!1,default:""},inactiveText:{type:String,required:!1,default:""},inlinePrompt:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},beforeChange:{type:Function,required:!1}},emits:["update:checked"],setup(t,{emit:e}){const o=t,{checked:n,inactiveColor:c,activeColor:i,inactiveText:u,activeText:m,inlinePrompt:C,disabled:y,loading:D,beforeChange:k}=j(o),g=B(null);_3(()=>{const f=g.value;if(f){const{value:b}=u,{value:E}=m;I(f),H(f,b,E)}}),p3(n,f=>{const b=g.value;b&&(L(f,b),O(b,f))},{immediate:!0});const z=()=>{if(k&&k.value instanceof Function){const f=g.value;if(f){const b=f.querySelector(".loading"),{className:E}=f;f.className=`${E} tsai-disabled`,b.style.display="inline-block",k.value().then(G=>{G&&(b.style.display="none",f.className=`${E}`,F())}).catch(G=>{b.style.display="none",f.className=`${E}`,console.error(G),alert("\u5931\u8D25")})}}else F()},F=()=>{!y.value&&e("update:checked",!n.value)},A=f=>f.slice(0,1),I=f=>{const{className:b}=f;b.includes("tsai-checked")?f.style.backgroundColor=i.value:f.style.backgroundColor=c.value},H=(f,b,E)=>{b&&E&&(f.style.margin="0 5px"),b&&E===""&&(f.style.marginLeft="5px"),E&&b===""&&(f.style.marginRight="5px")},L=(f,b)=>{f?b.style.backgroundColor=i.value:b.style.backgroundColor=c.value},O=(f,b)=>{const E=f.previousElementSibling,P=f.nextElementSibling;E&&(b?E.style.color="black":E.style.color=i.value),P&&(b?P.style.color=i.value:P.style.color="black")};return(f,b)=>(d(),p("div",W6,[h(u)&&!h(C)?(d(),p("span",K6,M(h(u)),1)):T("v-if",!0),a("button",{class:v3(["tsai-switch",{"tsai-checked":h(n),"tsai-disabled":h(y)}]),onClick:z,ref_key:"buttonRef",ref:g},[T("\u5F00\u59CB"),N(a("span",{style:{"margin-left":"-14px"}},M(A(h(m))),513),[[R,h(n)&&h(u)&&h(C)]]),a("span",Z6,[N(a("i",G6,null,512),[[R,h(D)]])]),T("\u5173\u95ED"),N(a("span",{style:{"margin-right":"-14px"}},M(A(h(u))),513),[[R,!h(n)&&h(u)&&h(C)]])],2),h(m)&&!h(C)?(d(),p("span",J6,M(h(m)),1)):T("v-if",!0)]))}});var b3=t=>{t.__demoTitle=`
\u666E\u901A\u7528\u6CD5
`,t.__demoSourceCode=`<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
<\/script>

<template>
    <Switch v-model:checked="checked" />
</template>`};const y3=_({setup(t){const e=B(!1);return(o,n)=>(d(),S(w,{checked:e.value,"onUpdate:checked":n[0]||(n[0]=c=>e.value=c)},null,8,["checked"]))}});typeof b3=="function"&&b3(y3);var B3=t=>{t.__demoTitle=`
\u81EA\u5B9A\u4E49\u989C\u8272
`,t.__demoSourceCode=`<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
<\/script>

<template>
    <Switch
        v-model:checked="checked"
        active-color="#13ce66"
        inactive-color="#ff4949"
    />
</template>`};const C3=_({setup(t){const e=B(!1);return(o,n)=>(d(),S(w,{checked:e.value,"onUpdate:checked":n[0]||(n[0]=c=>e.value=c),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["checked"]))}});typeof B3=="function"&&B3(C3);var $3=t=>{t.__demoTitle=`
\u6FC0\u6D3B\u6587\u5B57\u9AD8\u4EAE
`,t.__demoSourceCode=`<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
<\/script>

<template>
    <Switch
        v-model:checked="checked"
        active-text="Open"
        active-color="#13ce66"
        inactive-color="#ff4949"
    />
    <Switch
        v-model:checked="checked"
        inactive-text="Close"
        active-color="#13ce66"
        inactive-color="#ff4949"
    />
    <Switch
        v-model:checked="checked"
        active-text="Open"
        inactive-text="Close"
        active-color="#13ce66"
        inactive-color="#ff4949"
    />
</template>`};const x3=_({setup(t){const e=B(!1);return(o,n)=>(d(),p(x,null,[l(w,{checked:e.value,"onUpdate:checked":n[0]||(n[0]=c=>e.value=c),"active-text":"Open","active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["checked"]),l(w,{checked:e.value,"onUpdate:checked":n[1]||(n[1]=c=>e.value=c),"inactive-text":"Close","active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["checked"]),l(w,{checked:e.value,"onUpdate:checked":n[2]||(n[2]=c=>e.value=c),"active-text":"Open","inactive-text":"Close","active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["checked"])],64))}});typeof $3=="function"&&$3(x3);var E3=t=>{t.__demoTitle=`
Switch\u663E\u793A\u6587\u5B57\uFF0C\u53EA\u80FD\u663E\u793A\u7B2C\u4E00\u4E2A\u6587\u5B57
`,t.__demoSourceCode=`<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
<\/script>

<template>
    <Switch
        v-model:checked="checked"
        active-text="Open"
        inactive-text="Close"
        active-color="#13ce66"
        inactive-color="#ff4949"
        inline-prompt
    />
    <br />
    <Switch
        v-model:checked="checked"
        active-text="\u5F00\u542F"
        inactive-text="\u5173\u95ED"
        active-color="#13ce66"
        inactive-color="#ff4949"
        inline-prompt
    />
</template>`};const Q6=a("br",null,null,-1),w3=_({setup(t){const e=B(!1);return(o,n)=>(d(),p(x,null,[l(w,{checked:e.value,"onUpdate:checked":n[0]||(n[0]=c=>e.value=c),"active-text":"Open","inactive-text":"Close","active-color":"#13ce66","inactive-color":"#ff4949","inline-prompt":""},null,8,["checked"]),Q6,l(w,{checked:e.value,"onUpdate:checked":n[1]||(n[1]=c=>e.value=c),"active-text":"\u5F00\u542F","inactive-text":"\u5173\u95ED","active-color":"#13ce66","inactive-color":"#ff4949","inline-prompt":""},null,8,["checked"])],64))}});typeof E3=="function"&&E3(w3);var D3=t=>{t.__demoTitle=`
disabled\u72B6\u6001
`,t.__demoSourceCode=`<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
const checked1 = ref(true);
<\/script>

<template>
    <Switch
        v-model:checked="checked"
        active-text="\u5F00\u542F"
        inactive-text="\u5173\u95ED"
        active-color="#13ce66"
        inactive-color="#ff4949"
        inline-prompt
        disabled
    />
    <br />
    <Switch
        v-model:checked="checked1"
        active-text="\u5F00\u542F"
        inactive-text="\u5173\u95ED"
        active-color="#13ce66"
        inactive-color="#ff4949"
        inline-prompt
        disabled
    />
</template>`};const X6=a("br",null,null,-1),F3=_({setup(t){const e=B(!1),o=B(!0);return(n,c)=>(d(),p(x,null,[l(w,{checked:e.value,"onUpdate:checked":c[0]||(c[0]=i=>e.value=i),"active-text":"\u5F00\u542F","inactive-text":"\u5173\u95ED","active-color":"#13ce66","inactive-color":"#ff4949","inline-prompt":"",disabled:""},null,8,["checked"]),X6,l(w,{checked:o.value,"onUpdate:checked":c[1]||(c[1]=i=>o.value=i),"active-text":"\u5F00\u542F","inactive-text":"\u5173\u95ED","active-color":"#13ce66","inactive-color":"#ff4949","inline-prompt":"",disabled:""},null,8,["checked"])],64))}});typeof D3=="function"&&D3(F3);var S3=t=>{t.__demoTitle=`
loading \u72B6\u6001
`,t.__demoSourceCode=`<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
const checked1 = ref(true);
<\/script>

<template>
    <Switch
        v-model:checked="checked1"
        active-text="\u5F00\u542F"
        inactive-text="\u5173\u95ED"
        active-color="#13ce66"
        inactive-color="#ff4949"
        inline-prompt
        disabled
        loading
    />
</template>`};const T3=_({setup(t){B(!1);const e=B(!0);return(o,n)=>(d(),S(w,{checked:e.value,"onUpdate:checked":n[0]||(n[0]=c=>e.value=c),"active-text":"\u5F00\u542F","inactive-text":"\u5173\u95ED","active-color":"#13ce66","inactive-color":"#ff4949","inline-prompt":"",disabled:"",loading:""},null,8,["checked"]))}});typeof S3=="function"&&S3(T3);var z3=t=>{t.__demoTitle=`
\u6839\u636Ebefore-change\u8FD4\u56DE\u503C\u6765\u51B3\u5B9A\u662F\u5426\u662F\u8F6C\u6362\u72B6\u6001
`,t.__demoSourceCode=`<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const checked = ref(false);
const beforeChange = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(true);
        }, 1000);
    });
};

const beforeChange2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject(false);
        }, 1000);
    });
};
<\/script>

<template>
    <Switch
        v-model:checked="checked"
        active-text="\u5F00\u542F"
        inactive-text="\u5173\u95ED"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :before-change="beforeChange"
        inline-prompt
    />
    <br />
    <Switch
        v-model:checked="checked"
        active-text="\u5F00\u542F"
        inactive-text="\u5173\u95ED"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :before-change="beforeChange2"
        inline-prompt
    />
</template>`};const Y6=a("br",null,null,-1),A3=_({setup(t){const e=B(!1),o=()=>new Promise(c=>{setTimeout(()=>c(!0),1e3)}),n=()=>new Promise((c,i)=>{setTimeout(()=>i(!1),1e3)});return(c,i)=>(d(),p(x,null,[l(w,{checked:e.value,"onUpdate:checked":i[0]||(i[0]=u=>e.value=u),"active-text":"\u5F00\u542F","inactive-text":"\u5173\u95ED","active-color":"#13ce66","inactive-color":"#ff4949","before-change":o,"inline-prompt":""},null,8,["checked"]),Y6,l(w,{checked:e.value,"onUpdate:checked":i[1]||(i[1]=u=>e.value=u),"active-text":"\u5F00\u542F","inactive-text":"\u5173\u95ED","active-color":"#13ce66","inactive-color":"#ff4949","before-change":n,"inline-prompt":""},null,8,["checked"])],64))}});typeof z3=="function"&&z3(A3);const e1=["disabled"],t1={key:0,class:"loading"},n1={inheritAttrs:!1},v=_(u3(s3({},n1),{props:{theme:{type:String,required:!1,default:"default"},size:{type:String,required:!1,default:"normal"},level:{type:String,required:!1,default:"default"},disabled:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1}},setup(t){const e=t,{theme:o,size:n,level:c,disabled:i,loading:u}=j(e),m=l6(),C=r3(m,[]),y=W(()=>({[`tsai-theme-${o.value}`]:o.value,[`tsai-size-${n.value}`]:n.value,[`tsai-level-${c.value}`]:c.value}));return(D,k)=>(d(),p("button",i6(C,{class:["tsai-button",h(y)],disabled:h(i)}),[h(u)?(d(),p("span",t1)):T("v-if",!0),K(D.$slots,"default")],16,e1))}}));const o1={class:"demo"},c1={class:"demo-component"},l1={class:"demo-actions"},i1={key:0,class:"demo-code"},a1=["innerHTML"],s1=_({props:{comp:{type:null,required:!0}},setup(t){const{comp:e}=t,o=W(()=>f3.highlight(e.__demoSourceCode,f3.languages.html,"html")),n=B(!1),c=W(()=>n.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),i=()=>{n.value=!n.value};return(u,m)=>(d(),p("div",null,[a("div",o1,[a("h2",null,M(e.__demoTitle),1),a("div",c1,[(d(),S(Y(e),{key:e}))]),a("div",l1,[l(v,{onClick:i},{default:s(()=>[r(M(h(c)),1)]),_:1})]),l(d3,null,{default:s(()=>[n.value?(d(),p("div",i1,[a("pre",{class:"language-html",innerHTML:h(o)},null,8,a1)])):T("v-if",!0)]),_:1})])]))}});var $=q(s1,[["__scopeId","data-v-09260093"]]);const u1=a("h1",null,"Switch \u7EC4\u4EF6\u793A\u4F8B",-1),r1=_({setup(t){return(e,o)=>(d(),p("div",null,[u1,l($,{comp:y3}),l($,{comp:C3}),l($,{comp:x3}),l($,{comp:w3}),l($,{comp:F3}),l($,{comp:T3}),l($,{comp:A3})]))}});var O3=t=>{t.__demoTitle=`
\u4E0D\u540C\u5927\u5C0F\u7684\u6309\u94AE
`,t.__demoSourceCode=`<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
<\/script>

<template>
    <Button @click="click">\u4F60\u597D</Button>
    <Button @click="click" size="small">\u4F60\u597D</Button>
    <Button @click="click" size="big">\u4F60\u597D</Button>
</template>`};const d1=r("\u4F60\u597D"),_1=r("\u4F60\u597D"),p1=r("\u4F60\u597D"),M3=_({setup(t){const e=()=>{console.log(1111)};return(o,n)=>(d(),p(x,null,[l(v,{onClick:e},{default:s(()=>[d1]),_:1}),l(v,{onClick:e,size:"small"},{default:s(()=>[_1]),_:1}),l(v,{onClick:e,size:"big"},{default:s(()=>[p1]),_:1})],64))}});typeof O3=="function"&&O3(M3);var q3=t=>{t.__demoTitle=`
\u4E0D\u540C\u4E3B\u9898\u7684\u6309\u94AE
`,t.__demoSourceCode=`<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
<\/script>

<template>
    <Button @click="click">\u4F60\u597D</Button>
    <Button @click="click" level="primary">\u4E3B\u8981\u6309\u94AE</Button>
    <Button @click="click" level="success">\u6210\u529F\u6309\u94AE</Button>
    <Button @click="click" level="danger">\u5371\u9669\u6309\u94AE</Button>
    <Button @click="click" level="warning">\u8B66\u544A\u6309\u94AE</Button>
</template>`};const v1=r("\u4F60\u597D"),f1=r("\u4E3B\u8981\u6309\u94AE"),h1=r("\u6210\u529F\u6309\u94AE"),m1=r("\u5371\u9669\u6309\u94AE"),k1=r("\u8B66\u544A\u6309\u94AE"),L3=_({setup(t){const e=()=>{console.log(1111)};return(o,n)=>(d(),p(x,null,[l(v,{onClick:e},{default:s(()=>[v1]),_:1}),l(v,{onClick:e,level:"primary"},{default:s(()=>[f1]),_:1}),l(v,{onClick:e,level:"success"},{default:s(()=>[h1]),_:1}),l(v,{onClick:e,level:"danger"},{default:s(()=>[m1]),_:1}),l(v,{onClick:e,level:"warning"},{default:s(()=>[k1]),_:1})],64))}});typeof q3=="function"&&q3(L3);var V3=t=>{t.__demoTitle=`
\u7981\u7528disabled\u6309\u94AE
`,t.__demoSourceCode=`<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
<\/script>

<template>
    <Button @click="click" disabled>\u4F60\u597D</Button>
    <Button @click="click" level="warning" disabled>\u8B66\u544A\u6309\u94AE</Button>
    <Button @click="click" level="primary" disabled>\u4E3B\u8981\u6309\u94AE</Button>
    <Button @click="click" level="danger" disabled>\u5371\u9669\u6309\u94AE</Button>
    <Button @click="click" level="danger" theme="link" disabled>
        \u5371\u9669\u6309\u94AE
    </Button>
    <Button @click="click" level="danger" theme="text" disabled>
        \u5371\u9669\u6309\u94AE
    </Button>
</template>`};const g1=r("\u4F60\u597D"),b1=r("\u8B66\u544A\u6309\u94AE"),y1=r("\u4E3B\u8981\u6309\u94AE"),B1=r("\u5371\u9669\u6309\u94AE"),C1=r(" \u5371\u9669\u6309\u94AE "),$1=r(" \u5371\u9669\u6309\u94AE "),I3=_({setup(t){const e=()=>{console.log(1111)};return(o,n)=>(d(),p(x,null,[l(v,{onClick:e,disabled:""},{default:s(()=>[g1]),_:1}),l(v,{onClick:e,level:"warning",disabled:""},{default:s(()=>[b1]),_:1}),l(v,{onClick:e,level:"primary",disabled:""},{default:s(()=>[y1]),_:1}),l(v,{onClick:e,level:"danger",disabled:""},{default:s(()=>[B1]),_:1}),l(v,{onClick:e,level:"danger",theme:"link",disabled:""},{default:s(()=>[C1]),_:1}),l(v,{onClick:e,level:"danger",theme:"text",disabled:""},{default:s(()=>[$1]),_:1})],64))}});typeof V3=="function"&&V3(I3);var H3=t=>{t.__demoTitle=`
link\u548Ctext\u6309\u94AE
`,t.__demoSourceCode=`<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
<\/script>

<template>
    <Button @click="click" theme="link">\u4F60\u597D</Button>
    <Button @click="click" theme="link" level="primary">\u4F60\u597D</Button>
    <Button @click="click" theme="link" level="danger">\u4F60\u597D</Button>
    <Button @click="click" theme="link" level="warning">\u4F60\u597D</Button>
    <Button @click="click" theme="text">\u4F60\u597D</Button>
    <Button @click="click" theme="text" level="primary">\u4F60\u597D</Button>
    <Button @click="click" theme="text" level="danger">\u4F60\u597D</Button>
    <Button @click="click" theme="text" level="warning">\u4F60\u597D</Button>
</template>`};const x1=r("\u4F60\u597D"),E1=r("\u4F60\u597D"),w1=r("\u4F60\u597D"),D1=r("\u4F60\u597D"),F1=r("\u4F60\u597D"),S1=r("\u4F60\u597D"),T1=r("\u4F60\u597D"),z1=r("\u4F60\u597D"),P3=_({setup(t){const e=()=>{console.log(1111)};return(o,n)=>(d(),p(x,null,[l(v,{onClick:e,theme:"link"},{default:s(()=>[x1]),_:1}),l(v,{onClick:e,theme:"link",level:"primary"},{default:s(()=>[E1]),_:1}),l(v,{onClick:e,theme:"link",level:"danger"},{default:s(()=>[w1]),_:1}),l(v,{onClick:e,theme:"link",level:"warning"},{default:s(()=>[D1]),_:1}),l(v,{onClick:e,theme:"text"},{default:s(()=>[F1]),_:1}),l(v,{onClick:e,theme:"text",level:"primary"},{default:s(()=>[S1]),_:1}),l(v,{onClick:e,theme:"text",level:"danger"},{default:s(()=>[T1]),_:1}),l(v,{onClick:e,theme:"text",level:"warning"},{default:s(()=>[z1]),_:1})],64))}});typeof H3=="function"&&H3(P3);var U3=t=>{t.__demoTitle=`
loading\u6309\u94AE
`,t.__demoSourceCode=`<script lang="ts" setup>
import Button from '@/lib/Button.vue';
const click = () => {
    console.log(1111);
};
<\/script>

<template>
    <Button @click="click" loading>\u52A0\u8F7D\u4E2D</Button>
    <Button @click="click">\u52A0\u8F7D\u5B8C\u6BD5</Button>
</template>`};const A1=r("\u52A0\u8F7D\u4E2D"),O1=r("\u52A0\u8F7D\u5B8C\u6BD5"),N3=_({setup(t){const e=()=>{console.log(1111)};return(o,n)=>(d(),p(x,null,[l(v,{onClick:e,loading:""},{default:s(()=>[A1]),_:1}),l(v,{onClick:e},{default:s(()=>[O1]),_:1})],64))}});typeof U3=="function"&&U3(N3);const M1=a("h1",null,"Button \u7EC4\u4EF6\u793A\u4F8B",-1),q1=_({setup(t){return(e,o)=>(d(),p("div",null,[M1,l($,{comp:M3}),l($,{comp:L3}),l($,{comp:I3}),l($,{comp:P3}),l($,{comp:N3})]))}});const L1={class:"tsai-dialog-wrapper"},V1={class:"tsai-dialog"},I1=r("\u9ED8\u8BA4\u6807\u9898"),H1=r(" \u9ED8\u8BA4\u5185\u5BB9 "),P1=r("OK"),U1=r("Cancel"),N1=_({props:{visible:{type:Boolean,required:!0,default:!1},closeOnClickOverlay:{type:Boolean,required:!1,default:!1},ok:{type:Function,required:!1},cancel:{type:Function,required:!1}},emits:["update:visible"],setup(t,{emit:e}){const o=t,{visible:n,closeOnClickOverlay:c}=j(o),i=()=>{e("update:visible",!n.value)},u=()=>{c.value&&i()},m=()=>{var y;((y=o.cancel)==null?void 0:y.call(o))&&i()},C=()=>{var y;((y=o.ok)==null?void 0:y.call(o))&&i()};return(y,D)=>(d(),S(a6,{to:"body"},[h(n)?(d(),p(x,{key:0},[a("div",{class:"tsai-dialog-overlay",onClick:u}),a("div",L1,[a("div",V1,[a("header",null,[K(y.$slots,"title",{},()=>[I1],!0),a("span",{class:"tsai-dialog-close",onClick:i})]),a("main",null,[K(y.$slots,"content",{},()=>[H1],!0)]),a("footer",null,[l(v,{level:"primary",onClick:C},{default:s(()=>[P1]),_:1}),l(v,{onClick:m},{default:s(()=>[U1]),_:1})])])])],64)):T("v-if",!0)]))}});var n3=q(N1,[["__scopeId","data-v-0051fbcb"]]),R3=t=>{t.__demoTitle=`
\u666E\u901A\u7528\u6CD5
`,t.__demoSourceCode=`<script setup lang="ts">
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';
import { ref } from 'vue';
const visible = ref(false);
const handleOk = () => {
    return true;
};
const handleCancel = () => {
    return false;
};
<\/script>

<template>
    <Dialog v-model:visible="visible" :ok="handleOk" :cancel="handleCancel">
        <template v-slot:title>
            <strong>\u6211\u662F\u5927\u6807\u9898</strong>
        </template>
        <template v-slot:content>
            <div>
                <p>111</p>
                <p>222</p>
                <p>333</p>
            </div>
        </template>
    </Dialog>
    <Button @click="visible = !visible">toggle</Button>
</template>`};const R1=a("strong",null,"\u6211\u662F\u5927\u6807\u9898",-1),j1=a("div",null,[a("p",null,"111"),a("p",null,"222"),a("p",null,"333")],-1),W1=r("toggle"),j3=_({setup(t){const e=B(!1),o=()=>!0,n=()=>!1;return(c,i)=>(d(),p(x,null,[l(n3,{visible:e.value,"onUpdate:visible":i[0]||(i[0]=u=>e.value=u),ok:o,cancel:n},{title:s(()=>[R1]),content:s(()=>[j1]),_:1},8,["visible"]),l(v,{onClick:i[1]||(i[1]=u=>e.value=!e.value)},{default:s(()=>[W1]),_:1})],64))}});typeof R3=="function"&&R3(j3);var W3=t=>{t.__demoTitle=`
\u70B9\u51FB\u8499\u5C42\u5173\u95ED
`,t.__demoSourceCode=`<script setup lang="ts">
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';
import { ref } from 'vue';
const visible = ref(false);
const handleOk = () => {
    return true;
};
const handleCancel = () => {
    return false;
};
<\/script>

<template>
    <Dialog
        v-model:visible="visible"
        closeOnClickOverlay
        :ok="handleOk"
        :cancel="handleCancel"
    ></Dialog>
    <Button @click="visible = !visible">toggle</Button>
</template>`};const K1=r("toggle"),K3=_({setup(t){const e=B(!1),o=()=>!0,n=()=>!1;return(c,i)=>(d(),p(x,null,[l(n3,{visible:e.value,"onUpdate:visible":i[0]||(i[0]=u=>e.value=u),closeOnClickOverlay:"",ok:o,cancel:n},null,8,["visible"]),l(v,{onClick:i[1]||(i[1]=u=>e.value=!e.value)},{default:s(()=>[K1]),_:1})],64))}});typeof W3=="function"&&W3(K3);var Z1=t=>{const{title:e,content:o,ok:n,cancel:c,closeOnClickOverlay:i}=t,u=document.createElement("div");document.body.appendChild(u);const m=()=>{C.unmount(),u.remove()},C=h3({render(){return e3(n3,{visible:!0,"onUpdate:visible":y=>{y||m()},closeOnClickOverlay:i,ok:n,cancel:c},{title:()=>e,content:()=>o})}});C.mount(u)},Z3=t=>{t.__demoTitle=`
\u4EE5\u51FD\u6570\u7684\u5F62\u5F0F\u6253\u5F00
`,t.__demoSourceCode=`<script setup lang="ts">
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';
//@ts-ignore
import openDialog from '@/lib/openDialog';
import { h } from 'vue';
const handleOk = () => {
    return true;
};
const handleCancel = () => {
    return false;
};
const showDialog = () => {
    openDialog({
        title: h('strong', '\u6211\u662F\u5927\u6807\u9898'),
        content: '\u6211\u662F\u5185\u5BB9',
        ok: handleOk,
        cancel: handleCancel,
        closeOnClickOverlay: true,
    });
};
<\/script>

<template>
    <Button @click="showDialog">toggle</Button>
</template>`};const G1=r("toggle"),G3=_({setup(t){const e=()=>!0,o=()=>!1,n=()=>{Z1({title:e3("strong","\u6211\u662F\u5927\u6807\u9898"),content:"\u6211\u662F\u5185\u5BB9",ok:e,cancel:o,closeOnClickOverlay:!0})};return(c,i)=>(d(),S(v,{onClick:n},{default:s(()=>[G1]),_:1}))}});typeof Z3=="function"&&Z3(G3);const J1=a("h1",null,"Dialog \u7EC4\u4EF6\u793A\u4F8B",-1),Q1=_({setup(t){return(e,o)=>(d(),p("div",null,[J1,l($,{comp:j3}),l($,{comp:K3}),l($,{comp:G3})]))}}),X1={};function Y1(t,e){return d(),p("div",null,[K(t.$slots,"default")])}var Z=q(X1,[["render",Y1]]);const e2={class:"tsai-tabs"},t2=["onClick"],n2={class:"tsai-tabs-content"},o2=_({props:{selected:{type:String,required:!0,default:""}},emits:["update:selected"],setup(t,{emit:e}){var D,k;const o=t,n=B(null),c=B(null),i=B(null),{selected:u}=j(o),m=(k=(D=s6()).default)==null?void 0:k.call(D);m==null||m.forEach(g=>{if(g.type!==Z)throw new Error("Tabs \u7684\u5B50\u7EC4\u4EF6\u5FC5\u987B\u662FTab")});const C=W(()=>m==null?void 0:m.filter(g=>{var z;return((z=g.props)==null?void 0:z.title)===u.value})[0]),y=g=>{e("update:selected",g)};return u6(()=>{if(c.value&&i.value&&n.value){const{width:g,left:z}=n.value.getBoundingClientRect(),{left:F}=i.value.getBoundingClientRect(),A=z-F;c.value.style.width=g+"px",c.value.style.left=A+"px"}}),(g,z)=>(d(),p("div",e2,[a("div",{class:"tsai-tabs-nav",ref_key:"containerRef",ref:i},[(d(!0),p(x,null,r6(h(m),F=>{var A,I,H;return d(),p("div",{class:v3(["tsai-tabs-nav-item",{selected:((A=F.props)==null?void 0:A.title)===h(u)}]),key:(I=F.props)==null?void 0:I.title,ref_for:!0,ref:L=>{var O;L&&((O=F.props)==null?void 0:O.title)===h(u)&&(n.value=L)},onClick:L=>{var O;return y((O=F.props)==null?void 0:O.title)}},M((H=F.props)==null?void 0:H.title),11,t2)}),128)),a("div",{class:"tsai-tabs-nav-indicator",ref_key:"indicatorRef",ref:c},null,512)],512),a("div",n2,[(d(),S(Y(h(C)),{class:"tsai-tabs-content-item",key:h(C)}))])]))}});var J3=t=>{t.__demoTitle=`
\u5BFC\u822A\u5207\u6362
`,t.__demoSourceCode=`<script setup lang="ts">
import Tabs from '@/lib/Tabs.vue';
import Tab from '@/lib/Tab.vue';
import { ref } from 'vue';
const selected = ref('\u5BFC\u822A222222');
<\/script>

<template>
    <Tabs v-model:selected="selected">
        <Tab title="\u5BFC\u822A1">\u5185\u5BB91</Tab>
        <Tab title="\u5BFC\u822A222222">\u5185\u5BB92</Tab>
        <Tab title="\u5BFC\u822A3">\u5185\u5BB93</Tab>
    </Tabs>
</template>`};const c2=r("\u5185\u5BB91"),l2=r("\u5185\u5BB92"),i2=r("\u5185\u5BB93"),Q3=_({setup(t){const e=B("\u5BFC\u822A222222");return(o,n)=>(d(),S(o2,{selected:e.value,"onUpdate:selected":n[0]||(n[0]=c=>e.value=c)},{default:s(()=>[l(Z,{title:"\u5BFC\u822A1"},{default:s(()=>[c2]),_:1}),l(Z,{title:"\u5BFC\u822A222222"},{default:s(()=>[l2]),_:1}),l(Z,{title:"\u5BFC\u822A3"},{default:s(()=>[i2]),_:1})]),_:1},8,["selected"]))}});typeof J3=="function"&&J3(Q3);const a2=a("h1",null,"\u5BFC\u822A \u7EC4\u4EF6\u793A\u4F8B",-1),s2=_({setup(t){return(e,o)=>(d(),p("div",null,[a2,l($,{comp:Q3})]))}}),u2="modulepreload",X3={},r2="./",o3=function(e,o){return!o||o.length===0?e():Promise.all(o.map(n=>{if(n=`${r2}${n}`,n in X3)return;X3[n]=!0;const c=n.endsWith(".css"),i=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":u2,c||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),c)return new Promise((m,C)=>{u.addEventListener("load",m),u.addEventListener("error",C)})})).then(()=>e())};function d2(t){switch(t){case"../markdown/install.md":return o3(()=>import("./install.47228924.js"),["assets/install.47228924.js","assets/vendor.40d041f3.js"]);case"../markdown/intro.md":return o3(()=>import("./intro.c345fd2f.js"),["assets/intro.c345fd2f.js","assets/vendor.40d041f3.js"]);case"../markdown/start.md":return o3(()=>import("./start.740b261e.js"),["assets/start.740b261e.js","assets/vendor.40d041f3.js"]);default:return new Promise(function(e,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}const _2=_({props:{path:{type:String,required:!0,default:""}},setup(t){const e=t,o=B();return d2(`../markdown/${e.path}.md`).then(n=>{o.value=n.default.render()}),(n,c)=>(d(),S(Y(o.value),{key:o.value}))}}),c3=t=>e3(_2,{path:t,key:t}),p2=d6(),Y3=_6({history:p2,routes:[{path:"/",component:z6},{path:"/doc",component:j6,children:[{path:"",redirect:"/doc/intro"},{path:"intro",component:c3("intro")},{path:"install",component:c3("install")},{path:"start",component:c3("start")},{path:"switch",component:r1},{path:"button",component:q1},{path:"dialog",component:Q1},{path:"tabs",component:s2}]}]});const v2=_({setup(t){const e=B(document.documentElement.clientWidth),o=B(e.value>500);return p3(e,()=>{o.value=e.value>500}),p6("asideVisible",o),_3(()=>{window.onresize=()=>{e.value=document.documentElement.clientWidth}}),v6(()=>{window.onresize=null}),Y3.afterEach(()=>{e.value<=500&&(o.value=!1)}),(n,c)=>{const i=V("router-view");return d(),S(i)}}});(function(t){var e,o,n,c,i,u='<svg><symbol id="icon-light" viewBox="0 0 1024 1024"><path d="M671.202947 864.189775a31.962045 31.962045 0 0 0-31.962046-31.962045 31.962045 31.962045 0 1 0 0-63.924091h-255.69636a31.962045 31.962045 0 1 0 0 63.924091 31.962045 31.962045 0 1 0 0 63.92409 31.962045 31.962045 0 1 0 0 63.92409h37.843061c13.232287 37.139896 48.358574 63.92409 90.005119 63.92409s76.772832-26.784194 90.005119-63.92409H639.240901a31.962045 31.962045 0 1 0 0-63.92409 31.962045 31.962045 0 0 0 31.962046-31.962045z" fill="#DAE2E5" ></path><path d="M511.392721 1.214558c-194.169424 0-351.582496 157.413072-351.582496 351.582495 0 127.84818 95.886135 255.696361 191.772271 383.544541h319.620451c95.886135-127.84818 191.77227-255.696361 191.77227-383.544541 0-194.169424-157.413072-351.582496-351.582496-351.582495z" fill="#EACA44" ></path><path d="M383.544541 832.22773h255.69636a31.962045 31.962045 0 0 0 31.962046-31.962046H351.582496a31.962045 31.962045 0 0 0 31.962045 31.962046zM383.544541 896.15182h255.69636a31.962045 31.962045 0 0 0 31.962046-31.962045H351.582496a31.962045 31.962045 0 0 0 31.962045 31.962045zM383.544541 960.07591h255.69636a31.962045 31.962045 0 0 0 31.962046-31.962045H351.582496a31.962045 31.962045 0 0 0 31.962045 31.962045z" fill="" ></path><path d="M511.392721 672.417504c-108.862726 0-207.561521-42.221862-281.649541-110.748486 34.614895 58.202884 78.179162 116.43773 121.839316 174.672576h319.620451c43.660154-58.234846 87.224421-116.469692 121.839315-174.672576-74.08802 68.526625-172.786816 110.748486-281.649541 110.748486z" fill="" ></path><path d="M542.619639 164.764342c0.127848-1.278482 0.735127-2.397153 0.735127-3.739559v-31.962045a31.962045 31.962045 0 1 0-63.92409 0v31.962045c0 1.342406 0.607279 2.461077 0.735127 3.739559C424.743617 177.005806 383.544541 220.570073 383.544541 272.891941c0 61.782633 57.244023 111.867158 127.84818 111.867158 35.286098 0 63.92409 21.478494 63.92409 47.943067s-28.637992 47.943068-63.92409 47.943068-63.92409-21.478494-63.92409-47.943068a31.962045 31.962045 0 1 0-63.92409 0c0 52.066171 40.847494 95.438667 95.886135 107.903864v35.925339a31.962045 31.962045 0 1 0 63.92409 0v-35.925339c55.038642-12.465198 95.886135-55.837693 95.886135-107.903864 0-61.782633-57.244023-111.867158-127.84818-111.867158-35.286098 0-63.92409-21.478494-63.92409-47.943067s28.637992-47.943068 63.92409-47.943068 63.92409 21.478494 63.92409 47.943068a31.962045 31.962045 0 1 0 63.92409 0c0-52.321868-41.199076-95.886135-96.621262-108.127599z" fill="" ></path><path d="M95.886135 320.835008H31.962045a31.962045 31.962045 0 1 0 0 63.924091h63.92409a31.962045 31.962045 0 1 0 0-63.924091zM181.256758 607.055122l-47.495599 42.765216a31.962045 31.962045 0 1 0 42.765216 47.495599l47.495599-42.765216a31.962045 31.962045 0 0 0-42.765216-47.495599zM990.823397 320.835008h-63.92409a31.962045 31.962045 0 1 0 0 63.924091h63.92409a31.962045 31.962045 0 1 0 0-63.924091zM841.560647 607.087084a31.930083 31.930083 0 0 0-45.130408 2.365191 31.898121 31.898121 0 0 0 2.365191 45.130408l47.463637 42.765216a31.962045 31.962045 0 0 0 42.797179-47.495599l-47.495599-42.765216zM841.592609 98.538985l47.463637-42.797178a31.898121 31.898121 0 0 0 2.333229-45.130408 31.930083 31.930083 0 0 0-45.130408-2.365191l-47.463637 42.797178a31.930083 31.930083 0 0 0-2.365191 45.130408c11.825957 13.104438 31.994007 14.159186 45.16237 2.365191zM181.224796 98.507023a31.962045 31.962045 0 0 0 42.765216-47.495599L176.462451 8.246208a31.962045 31.962045 0 0 0-42.733254 47.495599L181.224796 98.507023z" fill="#EACA44" ></path></symbol><symbol id="icon-cai" viewBox="0 0 1024 1024"><path d="M937.301333 688.917333c-19.093333-0.362667-36.906667-2.389333-54.506666-5.781333-36.714667-7.082667-71.402667-19.84-103.701334-38.826667-34.261333-20.138667-68.458667-40.426667-101.312-62.848-2.538667-1.728-5.098667-3.434667-7.466666-5.397333-12.394667-10.24-26.304-18.368-39.146667-27.946667-7.722667-5.76-15.104-11.989333-23.018667-17.493333-16.042667-11.157333-31.872-22.613333-49.557333-31.146667-9.386667-4.522667-18.794667-8.981333-29.44-9.706666-5.141333-0.341333-10.197333 0.533333-15.317333 0.810666-0.576 0.042667-1.344 0.128-1.685334 0.512-3.093333 3.285333-7.786667 3.733333-11.2 6.421334-1.024 0.810667-1.450667 0.768-2.282666-0.426667-2.453333-3.562667-5.44-6.698667-9.130667-9.045333-2.176-1.386667-3.413333-3.562667-5.077333-5.333334-2.56-2.709333-4.650667-5.845333-7.061334-8.725333-2.432-2.922667-4.522667-6.08-6.933333-9.024-2.474667-3.008-5.226667-5.802667-7.850667-8.661333-3.690667-4.032-6.784-8.490667-10.474666-12.501334-0.661333-0.725333-1.770667-1.408-1.173334-2.56 0.554667-1.045333 1.770667-0.853333 2.773334-0.853333 0.512 0 1.130667-0.042667 1.493333 0.234667 2.901333 2.112 6.549333 2.517333 9.557333 4.458666 13.781333 8.917333 28.842667 12.394667 45.141334 9.6 7.424-1.28 13.418667-5.248 18.538666-10.666666 9.002667-9.514667 16.661333-20.074667 23.936-30.933334 2.709333-4.032 5.738667-7.850667 7.637334-12.394666 0.405333-0.981333 1.344-1.749333 2.069333-2.581334 3.413333-3.84 6.741333-7.701333 8.96-12.394666 1.728-3.648 2.496-7.466667 1.621333-11.434667-1.621333-7.317333-9.109333-11.541333-17.237333-9.493333-4.458667 1.130667-8.789333 2.752-13.12 4.266666-14.08 4.906667-28.16 9.856-42.218667 14.826667-7.125333 2.517333-13.802667 5.866667-19.392 11.136-0.725333 0.704-1.642667 1.216-2.517333 1.749333-2.752 1.685333-4.864 0.746667-5.696-2.432-0.341333-1.301333-0.234667-2.282667 1.237333-2.88 2.368-0.96 4.096-2.730667 5.546667-4.778666 5.674667-7.936 12.949333-14.208 20.629333-20.117334 0.917333-0.704 2.432 0.277333 2.624-1.152 0.192-1.514667 1.472-1.898667 2.368-2.56 20.608-14.997333 42.666667-27.242667 67.008-35.136 7.530667-2.453333 14.912-5.418667 22.848-6.442666 4.608-0.597333 9.194667-0.277333 13.781334 0.362666 1.109333 0.149333 1.792 0.810667 2.410666 1.685334 7.936 11.008 15.381333 22.336 21.653334 34.410666 0.810667 1.557333 0.832 2.389333-0.618667 3.584-5.589333 4.608-11.114667 9.322667-16.554667 14.101334-14.528 12.757333-24.832 28.48-31.978666 46.314666-4.266667 10.602667-8.213333 21.354667-10.325334 32.618667-2.453333 13.013333 1.408 31.381333 17.493334 41.258667 3.413333 2.090667 6.848 4.181333 10.474666 5.866666 16.106667 7.509333 31.317333 16.64 46.613334 25.621334 15.509333 9.130667 31.722667 16.96 47.466666 25.706666 28.778667 16 57.002667 32.938667 85.418667 49.557334 16.768 9.813333 34.432 17.642667 52.778667 23.978666 25.472 8.789333 50.581333 18.581333 75.989333 27.52 19.584 6.890667 39.616 12.096 60.245333 14.826667 1.344 0.170667 2.538667 0.554667 3.221334 1.792 1.92 3.52 4.906667 6.037333 7.957333 8.512 0.704 0.576 1.792 1.216 1.685333 2.112-0.128 1.045333-1.472 0.938667-2.304 1.237333-14.165333 5.162667-29.056 6.037333-42.88 6.592zM150.997333 813.717333c1.130667-2.325333 1.984-4.053333 2.816-5.781333 7.893333-16.597333 18.410667-31.488 29.696-45.888 9.258667-11.818667 18.090667-23.957333 26.24-36.586667 2.325333-3.605333 4.693333-7.338667 8.32-9.941333 0.981333-0.704 1.728-1.642667 2.090667-2.837333 0.085333-0.32 0.213333-0.746667 0.448-0.896 2.794667-1.770667 4.096-4.714667 6.037333-7.168 2.304-2.901333 5.056-5.461333 6.805334-8.810667 0.512-0.96 1.130667-2.005333 1.984-2.624 3.861333-2.816 6.314667-6.869333 9.216-10.517333 1.92-2.389333 4.224-4.416 6.165333-6.805334 3.114667-3.84 6.314667-7.616 9.024-11.776 0.32-0.490667 0.64-1.088 1.109333-1.386666 6.058667-4.074667 7.530667-10.517333 8.277334-17.045334 0.405333-3.562667-0.426667-7.274667-0.789334-10.901333-0.106667-1.130667-0.704-2.24-1.792-2.666667-2.24-0.917333-3.264-2.858667-4.501333-4.672-1.792-2.624-4.053333-4.821333-6.613333-6.72-7.552-5.589333-15.36-10.816-23.68-15.168-3.029333-1.578667-4.693333-4.096-6.4-6.634666-1.152-1.728-1.770667-3.84-2.752-5.738667-1.024-1.962667-0.085333-3.797333 2.218666-3.754667 8.298667 0.106667 16.661333-0.832 24.832 2.069334 3.861333 1.365333 8 2.218667 12.224 2.304 7.509333 0.149333 14.997333 0.384 22.506667 0.618666 2.752 0.085333 5.44 0.533333 8.042667 1.386667 1.557333 0.512 3.136 0.533333 4.394666-0.469333 2.752-2.218667 5.504-4.522667 6.528-8.170667 0.149333-0.490667 0.192-1.066667 0.490667-1.450667 3.114667-4.16 4.650667-9.194667 7.530667-13.504 3.050667-4.586667 6.165333-9.173333 8.064-14.442666 0.512-1.429333 1.344-2.752 2.090666-4.096 1.109333-1.984 1.152-3.904-0.405333-5.674667a12.104533 12.104533 0 0 1-2.730667-5.418667c-0.213333-0.917333-0.490667-1.856-1.194666-2.517333-3.456-3.221333-5.205333-7.552-7.488-11.52-7.210667-12.608-17.941333-21.034667-31.125334-26.581333-2.304-0.981333-4.778667-1.152-7.274666-0.981334-11.690667 0.789333-23.125333 3.008-34.538667 5.589334-5.738667 1.301333-11.584 2.048-17.258667 3.690666-0.810667 0.234667-1.429333 0.128-2.133333-0.341333-3.349333-2.261333-4.245333-5.034667-2.730667-8.682667 2.752-6.613333 7.274667-11.882667 12.544-16.597333 6.869333-6.144 13.696-12.309333 19.690667-19.349333 5.376-6.314667 9.386667-13.354667 12.16-21.162667 4.928-13.909333 9.834667-27.818667 13.653333-42.069333 0.533333-1.984 1.429333-2.688 3.413334-2.282667 2.026667 0.405333 4.053333 0.384 6.101333-0.064 5.546667-1.194667 9.237333 1.706667 13.013333 5.290667 3.925333 3.712 4.394667 7.381333 2.325334 12.16-4.053333 9.472-7.402667 19.242667-10.688 29.013333-1.28 3.797333-2.368 8.149333-5.696 11.178667-1.6 1.450667-2.090667 3.690667-2.112 5.888-0.021333 4.352-0.085333 8.704-0.021334 13.056 0.085333 6.208 3.904 10.069333 10.090667 10.709333 3.456 0.362667 6.848 1.578667 10.304 1.813333 10.048 0.682667 19.328 4.778667 29.205333 6.122667 4.992 0.661333 10.026667 1.344 15.018667 0.298667 5.930667-1.258667 10.858667-4.181333 13.930667-9.557334 6.72-11.776 12.181333-24.042667 13.824-37.696 0.512-4.330667 0.832-8.661333 0.128-13.013333-1.984-12.48-11.648-20.8-24.298667-20.928-3.328-0.042667-6.656 0.042667-9.984-0.042667-3.242667-0.085333-6.784-6.378667-5.269333-9.258666 0.32-0.597333 0.832-0.832 1.429333-0.981334 3.754667-1.002667 6.656-3.392 9.408-5.952 3.072-2.837333 6.101333-5.717333 9.216-8.490666 9.728-8.704 20.928-11.285333 33.749333-8.874667 21.653333 4.074667 32.789333 21.866667 35.605334 35.968 0.469333 2.325333 0.042667 4.266667-1.045334 6.357333-11.477333 21.866667-24.512 42.752-38.464 63.104-5.312 7.765333-9.92 15.957333-11.968 25.301334-0.618667 2.816-1.621333 5.568-1.472 8.533333 0.021333 0.405333-0.128 0.853333-0.277333 1.237333-2.858667 7.04-5.056 14.293333-8.234667 21.248-8.789333 19.221333-16.362667 38.997333-25.685333 57.984-11.648 23.744-24.832 46.677333-38.4 69.376-0.832 1.408-1.941333 2.581333-3.136 3.690667-14.506667 13.504-27.114667 28.544-37.802667 45.269333-8.469333 13.269333-18.389333 25.429333-29.376 36.714667-8.32 8.554667-15.616 18.112-24.874666 25.749333-9.344 7.701333-18.666667 15.445333-28.352 22.72-6.186667 4.586667-13.248 7.552-21.397334 10.048zM355.925333 766.208c1.024 19.477333-2.965333 39.808-7.530666 60.074667-2.261333 10.048-3.84 20.288-7.957334 29.845333-1.578667 3.690667-3.349333 7.296-5.845333 10.474667-2.197333 2.773333-4.736 5.162667-7.978667 6.677333-3.605333 1.685333-5.589333 1.194667-7.872-2.112-3.242667-4.650667-2.794667-9.962667-2.005333-15.082667 2.090667-13.610667 6.442667-26.666667 10.730667-39.701333 3.370667-10.282667 7.616-20.437333 8-31.36 0.341333-9.301333 3.456-18.261333 2.773333-27.626667-0.149333-1.962667-0.021333-3.925333-0.256-5.866666-0.362667-3.093333-2.24-5.184-5.333333-5.269334-7.530667-0.192-12.693333-4.970667-18.538667-8.661333-3.178667-2.005333-5.568-4.906667-8.874667-6.677333-2.410667-1.28-4.16-3.605333-5.824-5.568-2.56-3.008-6.101333-5.12-7.957333-8.789334-0.490667-0.981333-0.725333-1.536-0.064-2.453333 2.624-3.690667 5.226667-7.381333 7.744-11.136 0.768-1.130667 1.216-0.789333 2.197333-0.192 10.154667 6.250667 20.949333 10.688 33.109334 10.794667 2.432 0.021333 4.778667-0.554667 6.954666-1.536 7.573333-3.370667 15.509333-5.738667 23.253334-8.661334 8.170667-3.072 16-6.826667 23.722666-10.837333 13.098667-6.826667 26.645333-12.714667 40.490667-17.813333 20.608-7.573333 40.298667-17.130667 60.074667-26.624 19.050667-9.152 37.717333-19.2 57.322666-27.157334 17.450667-7.082667 35.413333-12.586667 54.336-13.76 12.096-0.746667 24.256-0.149333 35.712 4.693334 6.378667 2.688 11.541333 6.912 15.104 12.928 1.770667 3.008 1.642667 3.925333-0.661333 6.592-2.602667 2.986667-6.016 4.714667-9.642667 6.08-6.485333 2.453333-13.248 3.861333-20.096 4.864-19.605333 2.88-38.72 8-57.834666 13.077333-11.114667 2.965333-22.4 5.12-33.856 6.634667-5.930667 0.789333-11.733333 2.794667-17.493334 4.586666-3.690667 1.152-7.232 6.869333-7.082666 10.773334 0.256 6.805333 0.618667 13.589333 2.965333 20.096 0.277333 0.789333 0.32 1.685333 0.32 2.517333 0.32 18.410667 3.264 36.522667 6.272 54.613333 1.194667 7.104 1.792 14.186667 0.789333 21.354667-0.256 1.834667-0.085333 3.52 1.045334 5.098667 0.789333 1.109333 1.130667 2.496 1.173333 3.882666 0.106667 6.250667 1.877333 12.266667 2.538667 18.453334 1.066667 9.728 0.448 19.242667-0.981334 28.778666-1.728 11.584-5.013333 22.826667-8.533333 33.962667-5.162667 16.256-10.965333 32.298667-17.621333 48-0.725333 1.728-1.557333 2.496-3.52 2.496-7.338667-0.042667-14.677333 0.042667-21.888-1.642667-4.48-1.045333-8.64-2.986667-12.074667-5.930666-2.432-2.090667-4.117333-5.034667-6.058667-7.68-0.533333-0.746667-0.682667-1.792-1.557333-2.282667-3.797333-2.069333-5.845333-5.909333-8.768-8.832-1.770667-1.792-3.093333-4.053333-4.864-5.909333-1.088-1.130667-1.664-2.602667-1.493333-4.224 0.192-1.706667 1.002667-3.050667 2.901333-2.901334 5.034667 0.405333 10.048 0.064 15.082667 0.149334 2.154667 0.042667 3.797333 0.853333 4.842666 2.752 1.024 1.834667 2.666667 2.517333 4.672 2.624 4.736 0.256 9.344-0.384 13.802667-2.048 3.242667-1.216 5.290667-3.648 6.549333-6.784 8.426667-21.056 12.416-42.794667 11.008-65.536-1.216-19.541333-3.392-38.912-8.661333-57.834667-2.282667-8.192-4.629333-16.384-7.616-24.362667-1.856-4.949333-4.864-8.789333-10.453333-9.92-0.64-0.128-1.28-0.533333-1.770667-0.938666-7.530667-6.314667-16.32-8.256-25.877333-7.189334-11.2 1.237333-22.357333 2.645333-33.28 5.568-10.901333 2.922667-20.757333 7.68-28.928 15.637334-0.490667 0.469333-1.088 1.237333-1.6 1.194666-4.821333-0.277333-7.210667 3.861333-10.005334 6.336-4.096 3.605333-8.469333 7.722667-7.317333 14.613334 0.661333 4.245333 0.085333 8.768 0.085333 14.677333zM251.434667 304.789333c2.645333-1.045333 5.226667-2.112 7.808-3.072 8.597333-3.178667 16.853333-7.061333 24.170666-12.650666 6.528-4.992 14.101333-7.402667 21.845334-9.557334 13.397333-3.712 26.901333-6.976 40.533333-9.621333 2.517333-0.490667 4.992-1.194667 7.317333-2.24 8.064-3.626667 12.608-9.898667 12.864-18.730667 0.426667-14.72-1.834667-29.056-7.317333-42.816-4.330667-10.858667-11.136-19.904-19.733333-27.669333-2.730667-2.474667-5.333333-5.034667-7.488-8.021333-1.472-2.026667-3.221333-3.776-5.504-4.885334-1.216-0.597333-1.472-1.408-0.234667-1.898666 3.434667-1.344 4.053333-5.418667 7.125333-7.082667 0.832-0.448 0.512-1.557333 0.725334-2.368 0.533333-1.877333 1.536-2.709333 3.584-2.048 4.544 1.472 8.554667 3.818667 11.904 7.253333 7.722667 7.893333 14.165333 16.832 20.394666 25.898667 10.837333 15.786667 20.330667 32.341333 27.178667 50.282667 0.832 2.154667 1.877333 4.224 3.285333 6.058666 0.704 0.917333 1.066667 1.92 1.066667 3.072 0 2.837333 1.642667 4.821333 4.16 5.077334 7.488 0.768 14.826667 2.922667 22.549333 1.386666 9.792-1.941333 19.008-5.376 27.968-9.642666 8.704-4.16 17.408-8.256 26.666667-11.072 28.48-8.682667 46.741333-37.632 47.616-65.493334 0.426667-13.376-2.154667-26.282667-4.842667-39.232-1.002667-4.821333-2.325333-9.642667-1.898666-14.656 0.298667-3.392 1.088-3.904 4.202666-2.496 2.496 1.130667 4.864 2.56 6.848 4.437334 15.829333 14.805333 27.498667 32.277333 33.386667 53.290666 1.749333 6.229333 2.88 12.629333 4.202667 18.965334 0.853333 4.053333 2.901333 7.744 3.221333 12.010666 0.192 2.688 2.090667 3.498667 5.653333 3.498667 7.744 0 15.509333-0.234667 23.232 0.064 10.389333 0.384 20.821333-0.021333 31.168 1.365333 4.501333 0.597333 8.874667 1.685333 13.034667 3.541334 11.392 5.12 22.144 11.370667 32.426667 18.453333 2.325333 1.6 2.261333 1.685333-0.021334 3.221333-4.778667 3.178667-10.304 3.968-15.744 4.906667-9.173333 1.578667-18.432 2.325333-27.754666 2.304-13.994667-0.021333-27.989333-0.106667-41.962667 0.213333-18.944 0.448-34.709333 8.384-48.917333 20.181334-3.264 2.709333-6.506667 5.461333-9.792 8.170666-0.682667 0.576-1.045333 1.322667-1.450667 2.069334-0.576 1.066667-1.173333 2.197333-2.304 2.666666-4.906667 1.984-5.568 6.72-7.082667 10.837334-0.512 1.408-0.746667 2.944-1.472 4.309333-5.76 10.773333-12.117333 21.162667-19.221333 31.082667-2.688 3.733333-5.738667 7.189333-8.917333 10.538666-2.389333 2.517333-5.312 4.224-8.362667 5.781334-1.024 0.512-1.728 0.32-2.496-0.426667-1.728-1.706667-2.602667-3.754667-2.837333-6.122667-0.64-6.954667 0.533333-13.781333 1.365333-20.629333 0.746667-6.101333 1.984-12.117333 3.221333-18.133333 0.981333-4.842667 0.832-9.664-0.085333-14.485334-0.085333-0.512-0.362667-1.024-0.277333-1.493333 0.789333-4.864-2.154667-6.784-5.994667-8.768-7.168-3.690667-13.824-2.816-20.394667 1.088-2.474667 1.472-5.12 1.237333-7.701333 1.194667-3.178667-0.064-5.781333 0.768-8.085333 3.029333-1.834667 1.792-4.458667 2.090667-6.890667 2.410667-2.112 0.277333-3.733333 1.173333-5.461333 2.432-3.413333 2.474667-7.04 4.736-10.752 6.741333-5.013333 2.709333-10.218667 5.098667-14.997334 8.277333-6.805333 4.522667-11.754667 10.517333-14.698666 18.197334-1.834667 4.778667-3.882667 9.472-5.952 14.144-1.6 3.605333-3.477333 7.04-6.336 9.834666-2.176 2.133333-4.288 2.133333-6.506667 0.042667-1.941333-1.813333-3.349333-4.074667-4.992-6.144-2.752-3.477333-5.76-6.762667-8.597333-10.133333-1.898667-2.261333-3.541333-4.714667-6.037334-6.4-1.216-0.810667-2.389333-1.536-3.904-1.728-10.133333-1.386667-20.224-0.490667-30.336 0.469333-15.36 1.472-30.741333 2.794667-46.08 4.565333-6.528 0.768-12.928-0.277333-19.157333-2.389333-0.554667-0.192-1.109333-0.426667-1.642667-0.682667-0.170667-0.042667-0.234667-0.234667-0.490666-0.576zM633.706667 757.952c8.021333 0.213333 15.573333 2.005333 23.061333 4.074667 5.184 1.429333 10.325333 2.986667 15.445333 4.608 8.021333 2.538667 15.509333 6.122667 22.378667 11.050666 5.973333 4.288 11.797333 8.746667 17.386667 13.504 14.762667 12.544 24.064 28.8 31.317333 46.421334 2.581333 6.314667 4.693333 12.8 6.677333 19.328 0.341333 1.152 0.874667 2.325333-1.109333 2.581333-0.490667 0.064-0.981333 0.64-1.365333 1.066667-2.922667 3.392-9.834667 4.864-13.546667 2.581333-1.877333-1.152-3.413333-2.944-5.098667-4.373333-2.474667-2.112-5.141333-4.074667-7.488-6.4-2.602667-2.581333-4.778667-5.653333-8.149333-7.552-2.24-1.258667-4.202667-3.2-5.973333-5.098667-4.053333-4.352-8.490667-8.32-12.586667-12.629333-2.24-2.368-4.992-4.309333-7.530667-6.421334-2.922667-2.410667-5.12-5.44-7.808-8.021333-2.368-2.304-4.970667-4.352-7.274666-6.762667-1.642667-1.728-3.648-3.008-4.309334-5.504-0.170667-0.661333-0.853333-1.024-1.493333-1.344-0.533333-0.256-1.344-0.426667-1.536-0.853333-1.450667-3.349333-4.928-4.458667-7.381333-6.656-2.432-2.197333-5.098667-4.181333-7.274667-6.634667-2.645333-2.986667-6.122667-4.949333-8.704-8.085333-1.792-2.176-4.416-3.904-6.592-5.909333-3.242667-2.986667-6.912-5.504-9.664-9.045334-0.917333-1.173333-0.768-1.6 0.341333-2.282666 2.666667-1.578667 5.589333-1.472 8.277334-1.642667zM514.304 550.272c3.285333 0 6.442667 0.064 9.6-0.021333 1.685333-0.042667 2.112 0.597333 2.176 2.218666 0.149333 3.626667-0.853333 7.274667 0.128 10.922667 0.341333 1.258667-0.448 1.984-1.621333 2.496-9.386667 4.074667-18.858667 7.872-28.608 11.029333-22.976 7.424-46.485333 12.821333-69.738667 19.221334-5.930667 1.621333-11.946667 2.922667-18.112 3.2-8.981333 0.426667-16.768-2.218667-22.954667-9.045334-1.301333-1.429333-1.301333-1.962667 0.512-3.072 10.368-6.314667 21.802667-10.048 33.216-13.866666 15.274667-5.098667 30.144-11.456 45.76-15.509334 16.341333-4.224 32.96-6.506667 49.642667-7.573333z"  ></path></symbol><symbol id="icon-vue" viewBox="0 0 2571 1024"><path d="M745.68353463 738.786795a137.397992 137.397992 0 0 1-51.524247 66.24546 137.397992 137.397992 0 0 1-90.780816 26.988891 279.703055 279.703055 0 0 1-68.698996-7.360606 68.698996 68.698996 0 0 1-36.803034-24.535356 63.791925 63.791925 0 0 1-24.535356-26.988891 161.933348 161.933348 0 0 1-14.721213-29.442427c-36.803034-103.048494-68.698996-188.922239-90.780816-255.1677L308.95420263 319.232212a885.726341 885.726341 0 0 1-39.256569-103.048494 404.833369 404.833369 0 0 0-17.174749-51.524247 188.922239 188.922239 0 0 0-9.814142-29.442427 76.059603 76.059603 0 0 1 4.907071-76.059602A161.933348 161.933348 0 0 1 304.04713163 7.633195a159.479812 159.479812 0 0 1 95.687887 0A112.862636 112.862636 0 0 1 458.61987263 73.878655l149.66567 461.264687c9.814142-36.803034 24.535356-78.513138 39.256569-122.676778l44.16364-127.58385A1187.511216 1187.511216 0 0 1 726.05524963 164.659471c14.721213-36.803034 24.535356-68.698996 31.895963-90.780816a76.059603 76.059603 0 0 1 49.070711-58.884854 132.490921 132.490921 0 0 1 88.327281-7.360606c36.803034 12.267678 61.338389 29.442427 68.698996 56.431318a100.594958 100.594958 0 0 1-7.360607 83.420209z" fill="#41B883" ></path><path d="M1361.52096263 677.448405a80.966674 80.966674 0 0 0 73.606067-51.524247 338.587909 338.587909 0 0 0 24.535356-147.212134v-149.66567a85.873745 85.873745 0 0 1 12.267678-44.16364 58.884854 58.884854 0 0 1 26.988891-29.442427 107.955565 107.955565 0 0 1 61.338389-14.721213 80.966674 80.966674 0 0 1 51.524247 14.721213 188.922239 188.922239 0 0 1 31.895963 29.442427 95.687887 95.687887 0 0 1 9.814142 44.16364 301.784875 301.784875 0 0 1 2.453536 83.42021c-2.453536 34.349498-2.453536 63.791925-2.453536 88.32728a456.357616 456.357616 0 0 1-24.535356 164.386884 252.714164 252.714164 0 0 1-68.698996 100.594958 203.643452 203.643452 0 0 1-90.780816 53.977783 436.729332 436.729332 0 0 1-115.316172 12.267677 377.844478 377.844478 0 0 1-105.502029-12.267677 242.900022 242.900022 0 0 1-93.234352-53.977783 309.145482 309.145482 0 0 1-63.791925-100.594958 505.428328 505.428328 0 0 1-29.442427-164.386884v-171.74749a83.420209 83.420209 0 0 1 17.174749-49.070711 78.513138 78.513138 0 0 1 29.442427-26.988891 100.594958 100.594958 0 0 1 51.524247-12.267678 107.955565 107.955565 0 0 1 61.33839 14.721213 51.524247 51.524247 0 0 1 26.988891 34.349498 85.873745 85.873745 0 0 1 12.267678 44.16364v144.758599a338.587909 338.587909 0 0 0 24.535355 147.212134 80.966674 80.966674 0 0 0 76.059603 51.524247zM2014.16142463 611.202945c-44.16364 0-66.24546 4.907071-66.24546 12.267678a63.791925 63.791925 0 0 0 29.442426 49.070711 132.490921 132.490921 0 0 0 80.966674 22.08182 188.922239 188.922239 0 0 0 83.42021-14.721213 139.851528 139.851528 0 0 0 44.16364-29.442427 125.130314 125.130314 0 0 1 76.059603-22.08182 68.698996 68.698996 0 0 1 39.256569 12.267678 39.256569 39.256569 0 0 1 22.08182 26.988891 53.977783 53.977783 0 0 1 2.453536 34.349498 80.966674 80.966674 0 0 1-12.267678 36.803034 277.24952 277.24952 0 0 1-115.316172 78.513138 463.718223 463.718223 0 0 1-152.119206 22.08182 412.193976 412.193976 0 0 1-107.955565-17.174749 353.309122 353.309122 0 0 1-95.687887-49.070711 184.015168 184.015168 0 0 1-68.698996-80.966674 262.528306 262.528306 0 0 1-26.988891-120.223243 345.948516 345.948516 0 0 1 26.988891-144.758599 255.167699 255.167699 0 0 1 68.698996-98.141423 208.550524 208.550524 0 0 1 93.234352-53.977782 345.948516 345.948516 0 0 1 110.4091-17.174749 426.915189 426.915189 0 0 1 110.409101 14.721213 279.703055 279.703055 0 0 1 95.687887 39.256569 284.610126 284.610126 0 0 1 68.698996 76.059603 169.293954 169.293954 0 0 1 19.628285 103.048494 117.769707 117.769707 0 0 1-31.895962 88.327281c-19.628285 22.08182-56.431318 31.895962-112.862637 31.895962zM1952.82303563 456.630204q-7.360607 22.08182 22.08182 22.08182h176.654561c12.267678 0 17.174749-2.453536 17.174749-9.814142a29.442427 29.442427 0 0 0-4.907071-17.174749 142.305063 142.305063 0 0 0-34.349498-34.349498 107.955565 107.955565 0 0 0-71.152532-22.08182 120.223243 120.223243 0 0 0-73.606067 22.08182 100.594958 100.594958 0 0 0-31.895962 39.256569zM694.15928763 522.875664a110.409101 110.409101 0 0 1-36.803034 46.617176 93.234352 93.234352 0 0 1-63.791925 19.628285l-46.617175-4.907071a66.24546 66.24546 0 0 1-29.442427-17.174749l-17.174749-19.628285a71.152532 71.152532 0 0 0-9.814143-19.628284c-24.535356-73.606067-46.617176-134.944456-63.791924-184.015168s-31.895962-85.873745-41.710105-117.769708c-12.267678-31.895962-22.08182-56.431318-26.988891-73.606067l-12.267678-36.803033-7.360607-19.628285C331.03602263 76.332191 311.40773863 0.272588 335.94309363 0.272588a851.376843 851.376843 0 0 1 115.316172 4.907071 68.698996 68.698996 0 0 1 39.256569 49.070711l98.141423 299.33134c2.453536 7.360607 14.721213 7.360607 14.721214 0l22.08182-61.338389 29.442427-90.780816c9.814142-31.895962 17.174749-58.884854 26.988891-85.873745s14.721213-46.617176 19.628285-61.33839A61.338389 61.338389 0 0 1 738.32292763 10.08673 237.99295 237.99295 0 0 1 799.66131663 5.179659h76.059603c0 19.628285-2.453536 26.988891-31.895962 98.141423z" fill="#415870" ></path></symbol><symbol id="icon-ts" viewBox="0 0 4352 1024"><path d="M670.688 153.696h-277.504V1011.2H280.704V153.696H3.2V51.2h664.992v102.496zM1189.472 246.56l-233.056 588.224C913.856 940.224 856.512 992 780.704 992c-20.352 0-38.848-1.856-53.664-5.536v-72.16c16.64 5.568 33.312 9.248 48.096 9.248 40.704 0 72.128-24.032 92.48-73.984l40.704-96.192L710.4 246.56h90.624l136.896 390.304c1.856 5.536 5.536 18.496 11.104 38.848h3.68c1.856-7.424 5.568-20.352 9.248-36.992L1106.24 246.56z m136.896 434.688h-1.856v307.04h-81.408V248.416h81.408v88.8h1.856c40.672-66.592 98.016-101.76 175.712-101.76 64.736 0 116.544 22.208 153.536 68.448 36.992 46.24 55.488 105.44 55.488 183.136 0 85.088-20.352 153.504-61.056 203.456-40.704 49.952-98.016 75.84-170.176 75.84-66.592 0-116.512-27.744-153.504-85.088z m-1.856-205.312v70.272c0 42.56 12.928 77.696 40.672 107.296 27.744 29.6 61.056 44.384 103.584 44.384 49.952 0 86.944-18.496 116.544-57.344 29.6-38.848 42.56-90.624 42.56-157.216 0-57.344-12.96-99.872-38.848-133.184-25.92-31.424-61.056-48.096-105.44-48.096-48.096 0-85.088 16.672-114.688 49.952-29.6 33.28-44.384 73.984-44.384 123.936z m887.84 44.384H1853.536c1.824 57.344 16.64 99.904 46.24 131.328 29.568 31.456 68.416 46.24 120.224 46.24 57.344 0 109.12-18.496 157.216-57.344v75.84c-44.384 33.312-103.584 48.096-177.568 48.096-72.128 0-127.616-22.176-168.32-68.448-40.704-46.24-61.056-110.976-61.056-194.208 0-79.52 22.208-142.432 66.592-192.352 44.416-49.952 99.904-74.016 166.496-74.016 66.592 0 118.368 22.208 153.504 64.768 36.992 42.528 53.664 101.728 53.664 179.392v40.704z m-83.232-68.448c0-46.24-11.104-83.232-33.28-109.12-22.208-25.888-53.632-38.848-92.48-38.848-38.848 0-70.304 12.96-98.048 40.704-25.888 27.744-42.528 62.88-49.952 107.264z m127.648 277.472v-55.488c51.776 33.28 101.728 48.096 155.36 48.096 55.488 0 98.048-11.104 125.792-35.168 29.6-22.176 42.528-55.488 42.528-96.16 0-36.992-9.248-64.736-29.6-86.944-18.496-22.208-61.024-51.808-125.76-88.8-72.16-42.528-118.4-77.664-136.896-105.408a175.36 175.36 0 0 1-29.568-98.048c0-49.952 20.32-92.48 59.168-127.616C2356.64 48.64 2408.448 32 2473.184 32c42.528 0 85.088 7.392 127.616 22.208v51.776a330.56 330.56 0 0 0-133.184-27.744c-48.096 0-86.912 12.96-114.688 36.992-27.744 24.064-42.528 55.488-42.528 92.48 0 36.992 9.248 64.736 29.6 86.944 18.496 22.208 61.024 49.952 125.76 86.944 66.592 36.992 111.008 70.272 133.184 99.872 22.208 29.6 33.312 62.912 33.312 101.728 0 53.664-18.496 98.048-57.344 133.184-36.992 35.168-90.624 51.808-160.928 51.808-24.032 0-51.776-3.712-85.088-11.104-29.6-9.248-53.632-18.496-72.128-27.744z m804.608 1.856c-36.992 22.176-83.232 35.136-135.008 35.136-68.448 0-123.936-24.032-166.496-70.304-42.528-48.064-62.88-109.12-62.88-186.816 0-81.376 24.032-146.112 72.128-197.92 48.096-51.776 109.152-77.664 183.136-77.664 38.848 0 75.84 7.392 112.832 24.032v51.808a226.304 226.304 0 0 0-120.224-33.312c-59.2 0-107.296 22.208-144.288 64.736-36.992 42.56-55.488 98.048-55.488 166.464 0 66.592 16.64 118.4 49.952 159.104 33.28 40.672 77.664 59.168 133.152 59.168 49.952 0 94.336-12.928 133.184-40.672z m307.072-436.544c-14.816-11.104-33.312-16.64-53.664-16.64-40.672 0-73.984 20.352-99.872 61.024-27.744 40.704-40.704 99.904-40.704 175.744v238.592h-44.384V246.56h44.384v112.832h1.856c11.104-38.848 29.6-68.448 55.488-90.624 25.888-22.208 53.632-31.456 86.944-31.456 18.496 0 35.136 3.712 49.952 9.248z m77.664-175.712c-9.248 0-18.496-3.712-25.888-11.104a37.664 37.664 0 0 1-11.104-27.744c0-11.104 3.712-20.352 11.104-25.888 7.392-7.424 16.64-9.248 25.888-9.248 11.104 0 18.496 3.68 27.744 9.248 7.424 7.392 11.104 14.784 11.104 25.888 0 11.104-3.68 20.352-11.104 27.744-9.248 7.392-16.64 11.104-27.744 11.104z m-22.176 636.288V248.416h46.24v506.816z m205.312-90.624h-1.856v323.68h-46.24V248.416h46.24v105.44h1.856c18.496-36.992 44.384-66.592 77.696-86.944 33.28-20.352 70.272-29.6 110.976-29.6 64.736 0 114.688 22.208 151.68 66.592 36.992 44.384 53.632 105.44 53.632 181.28 0 85.088-20.352 153.536-62.88 205.312-40.704 51.808-96.192 77.696-164.64 77.696-73.984-1.856-129.472-35.136-166.464-103.584z m-1.856-188.672v64.736c0 51.776 16.64 94.336 48.096 131.328 31.456 36.992 73.984 55.488 125.792 55.488 51.776 0 94.336-22.208 125.76-66.592 31.456-44.384 48.096-103.584 48.096-175.712 0-62.88-14.784-114.688-44.384-151.68-29.6-36.992-70.304-55.488-118.4-55.488-59.168 0-105.408 20.352-136.864 59.2-31.456 38.816-48.096 85.088-48.096 138.72z m678.848 271.904c-24.032 11.104-46.24 16.64-66.592 16.64-75.84 0-112.832-44.384-112.832-135.008V289.12h-90.624v-42.56h90.624V115.232c7.392-1.856 14.784-5.536 22.208-7.392 7.392-1.856 14.784-5.536 22.176-7.392v147.968h133.184v42.528h-133.184v334.816c0 35.136 5.568 61.024 16.672 75.84 11.072 14.784 29.568 24.032 55.488 24.032 18.496 0 38.848-5.536 61.024-18.496v40.704z" fill="#F3AC34" ></path></symbol><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M216.9856 315.2896m-32.768 0a32.768 32.768 0 1 0 65.536 0 32.768 32.768 0 1 0-65.536 0Z"  ></path><path d="M806.912 282.5216H348.16c-18.1248 0-32.8704 14.7456-32.8704 32.8704 0 18.1248 14.7456 32.8704 32.8704 32.8704h458.752c18.1248 0 32.8704-14.7456 32.8704-32.8704 0-18.1248-14.7456-32.8704-32.8704-32.8704z"  ></path><path d="M216.9856 512.1024m-32.768 0a32.768 32.768 0 1 0 65.536 0 32.768 32.768 0 1 0-65.536 0Z"  ></path><path d="M806.912 479.3344H348.16c-18.1248 0-32.8704 14.7456-32.8704 32.8704 0 18.1248 14.7456 32.8704 32.8704 32.8704h458.752c18.1248 0 32.8704-14.7456 32.8704-32.8704 0-18.1248-14.7456-32.8704-32.8704-32.8704z"  ></path><path d="M216.9856 708.5056m-32.768 0a32.768 32.768 0 1 0 65.536 0 32.768 32.768 0 1 0-65.536 0Z"  ></path><path d="M806.912 675.7376H348.16c-18.1248 0-32.8704 14.7456-32.8704 32.8704 0 18.1248 14.7456 32.8704 32.8704 32.8704h458.752c18.1248 0 32.8704-14.7456 32.8704-32.8704 0-18.1248-14.7456-32.8704-32.8704-32.8704z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M533.333333 682.666667v192h-64v-192h64z m-175.317333-72.618667l45.269333 45.269333-135.765333 135.744-45.248-45.226666 135.744-135.786667z m286.634667 0l135.744 135.765333-45.226667 45.248-135.786667-135.744 45.269334-45.269333zM330.666667 480v64h-192v-64h192z m533.333333 0v64h-192v-64h192z m-128.853333-247.061333l45.248 45.226666-135.744 135.786667-45.269334-45.269333 135.765334-135.744z m-467.626667 0l135.765333 135.744-45.269333 45.269333-135.744-135.765333 45.226667-45.248zM533.333333 149.333333v192h-64V149.333333h64z"  ></path></symbol></svg>',m=(m=document.getElementsByTagName("script"))[m.length-1].getAttribute("data-injectcss"),C=function(k,g){g.parentNode.insertBefore(k,g)};if(m&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(k){console&&console.log(k)}}function y(){i||(i=!0,n())}function D(){try{c.documentElement.doScroll("left")}catch{return void setTimeout(D,50)}y()}e=function(){var k,g;(g=document.createElement("div")).innerHTML=u,u=null,(k=g.getElementsByTagName("svg")[0])&&(k.setAttribute("aria-hidden","true"),k.style.position="absolute",k.style.width=0,k.style.height=0,k.style.overflow="hidden",g=k,(k=document.body).firstChild?C(g,k.firstChild):k.appendChild(g))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(e,0):(o=function(){document.removeEventListener("DOMContentLoaded",o,!1),e()},document.addEventListener("DOMContentLoaded",o,!1)):document.attachEvent&&(n=e,c=t.document,i=!1,D(),c.onreadystatechange=function(){c.readyState=="complete"&&(c.onreadystatechange=null,y())})})(window);const e6=h3(v2);e6.use(Y3);e6.mount("#app");
