import{p as w,m as $,e as ae,g as E,u as se,f as M,a as s,h as g,i as T,j as J,k as H,l as le,n as oe,q as ie,s as K,t as ue,v as Q,T as ce,x as de,S as U,y as j,z as ve,A as x,B as F,C as B,D as ge,E as fe,F as X,G as q,H as me,I as be,J as O,K as ye,L as he,M as Se,N as _e,O as Ce,P as ke,Q as ze,o as xe,R as we,w as Re,U as Ie}from"./index-DhqHykRR.js";const Pe="/assets/kari-bronson-alphagetti-large-BtmEzSNH.jpg",Ne=(e,n)=>{const r=e.__vccOpts||e;for(const[t,a]of n)r[t]=a;return r};function Be(e){return{aspectStyles:g(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const Y=w({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...$(),...ae()},"VResponsive"),G=E()({name:"VResponsive",props:Y(),setup(e,n){let{slots:r}=n;const{aspectStyles:t}=Be(e),{dimensionStyles:a}=se(e);return M(()=>{var o;return s("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[a.value,e.style]},[s("div",{class:"v-responsive__sizer",style:t.value},null),(o=r.additional)==null?void 0:o.call(r),r.default&&s("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}});function Z(e){return J(()=>{const n=[],r={};if(e.value.background)if(H(e.value.background)){if(r.backgroundColor=e.value.background,!e.value.text&&le(e.value.background)){const t=oe(e.value.background);if(t.a==null||t.a===1){const a=ie(t);r.color=a,r.caretColor=a}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(H(e.value.text)?(r.color=e.value.text,r.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:r}})}function L(e,n){const r=g(()=>({text:T(e)?e.value:null})),{colorClasses:t,colorStyles:a}=Z(r);return{textColorClasses:t,textColorStyles:a}}function Te(e,n){const r=g(()=>({background:T(e)?e.value:null})),{colorClasses:t,colorStyles:a}=Z(r);return{backgroundColorClasses:t,backgroundColorStyles:a}}const Oe=w({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Ve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K();return{roundedClasses:g(()=>{const t=T(e)?e.value:e.rounded,a=T(e)?e.value:e.tile,o=[];if(t===!0||t==="")o.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const c of String(t).split(" "))o.push(`rounded-${c}`);else(a||t===!1)&&o.push("rounded-0");return o})}}const je=w({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),N=(e,n)=>{let{slots:r}=n;const{transition:t,disabled:a,group:o,...c}=e,{component:m=o?ce:de,...b}=typeof t=="object"?t:{};return ue(m,Q(typeof t=="string"?{name:a?"":t}:b,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:a,group:o}).filter(i=>{let[u,f]=i;return f!==void 0})),c),r)};function $e(e,n){if(!U)return;const r=n.modifiers||{},t=n.value,{handler:a,options:o}=typeof t=="object"?t:{handler:t,options:{}},c=new IntersectionObserver(function(){var f;let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],b=arguments.length>1?arguments[1]:void 0;const i=(f=e._observe)==null?void 0:f[n.instance.$.uid];if(!i)return;const u=m.some(h=>h.isIntersecting);a&&(!r.quiet||i.init)&&(!r.once||u||i.init)&&a(u,m,b),u&&r.once?p(e,n):i.init=!0},o);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:c},c.observe(e)}function p(e,n){var t;const r=(t=e._observe)==null?void 0:t[n.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Ee={mounted:$e,unmounted:p},Me=w({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Y(),...$(),...Oe(),...je()},"VImg"),Ue=E()({name:"VImg",directives:{intersect:Ee},props:Me(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:r,slots:t}=n;const{backgroundColorClasses:a,backgroundColorStyles:o}=Te(j(e,"color")),{roundedClasses:c}=Ve(e),m=ve("VImg"),b=x(""),i=F(),u=x(e.eager?"loading":"idle"),f=x(),h=x(),v=g(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=g(()=>v.value.aspect||f.value/h.value||0);B(()=>e.src,()=>{R(u.value!=="idle")}),B(_,(l,d)=>{!l&&d&&i.value&&y(i.value)}),ge(()=>R());function R(l){if(!(e.eager&&l)&&!(U&&!l&&!e.eager)){if(u.value="loading",v.value.lazySrc){const d=new Image;d.src=v.value.lazySrc,y(d,null)}v.value.src&&fe(()=>{var d;r("loadstart",((d=i.value)==null?void 0:d.currentSrc)||v.value.src),setTimeout(()=>{var S;if(!m.isUnmounted)if((S=i.value)!=null&&S.complete){if(i.value.naturalWidth||C(),u.value==="error")return;_.value||y(i.value,null),u.value==="loading"&&I()}else _.value||y(i.value),k()})})}}function I(){var l;m.isUnmounted||(k(),y(i.value),u.value="loaded",r("load",((l=i.value)==null?void 0:l.currentSrc)||v.value.src))}function C(){var l;m.isUnmounted||(u.value="error",r("error",((l=i.value)==null?void 0:l.currentSrc)||v.value.src))}function k(){const l=i.value;l&&(b.value=l.currentSrc||l.src)}let z=-1;X(()=>{clearTimeout(z)});function y(l){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{if(clearTimeout(z),m.isUnmounted)return;const{naturalHeight:D,naturalWidth:W}=l;D||W?(f.value=W,h.value=D):!l.complete&&u.value==="loading"&&d!=null?z=window.setTimeout(S,d):(l.currentSrc.endsWith(".svg")||l.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,h.value=1)};S()}const P=g(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),V=()=>{var S;if(!v.value.src||u.value==="idle")return null;const l=s("img",{class:["v-img__img",P.value],style:{objectPosition:e.position},src:v.value.src,srcset:v.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:i,onLoad:I,onError:C},null),d=(S=t.sources)==null?void 0:S.call(t);return s(N,{transition:e.transition,appear:!0},{default:()=>[q(d?s("picture",{class:"v-img__picture"},[d,l]):l,[[ye,u.value==="loaded"]])]})},ee=()=>s(N,{transition:e.transition},{default:()=>[v.value.lazySrc&&u.value!=="loaded"&&s("img",{class:["v-img__img","v-img__img--preload",P.value],style:{objectPosition:e.position},src:v.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),te=()=>t.placeholder?s(N,{transition:e.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!t.error)&&s("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,re=()=>t.error?s(N,{transition:e.transition,appear:!0},{default:()=>[u.value==="error"&&s("div",{class:"v-img__error"},[t.error()])]}):null,ne=()=>e.gradient?s("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,A=x(!1);{const l=B(_,d=>{d&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{A.value=!0})}),l())})}return M(()=>{const l=G.filterProps(e);return q(s(G,Q({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!A.value},a.value,c.value,e.class],style:[{width:O(e.width==="auto"?f.value:e.width)},o.value,e.style]},l,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>s(be,null,[s(V,null,null),s(ee,null,null),s(ne,null,null),s(te,null,null),s(re,null,null)]),default:t.default}),[[me("intersect"),{handler:R,options:e.options},null,{once:!0}]])}),{currentSrc:b,image:i,state:u,naturalWidth:f,naturalHeight:h}}});function Fe(e,n){const r=F(),t=x(!1);if(U){const a=new IntersectionObserver(o=>{t.value=!!o.find(c=>c.isIntersecting)},n);X(()=>{a.disconnect()}),B(r,(o,c)=>{c&&(a.unobserve(c),t.value=!1),o&&a.observe(o)},{flush:"post"})}return{intersectionRef:r,isIntersecting:t}}const Ae=["x-small","small","default","large","x-large"],De=w({size:{type:[String,Number],default:"default"}},"size");function We(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K();return J(()=>{let r,t;return he(Ae,e.size)?r=`${n}--size-${e.size}`:e.size&&(t={width:O(e.size),height:O(e.size)}),{sizeClasses:r,sizeStyles:t}})}const He=w({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...$(),...De(),...Se({tag:"div"}),..._e()},"VProgressCircular"),qe=E()({name:"VProgressCircular",props:He(),setup(e,n){let{slots:r}=n;const t=20,a=2*Math.PI*t,o=F(),{themeClasses:c}=Ce(e),{sizeClasses:m,sizeStyles:b}=We(e),{textColorClasses:i,textColorStyles:u}=L(j(e,"color")),{textColorClasses:f,textColorStyles:h}=L(j(e,"bgColor")),{intersectionRef:v,isIntersecting:_}=Fe(),{resizeRef:R,contentRect:I}=ke(),C=g(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),k=g(()=>Number(e.width)),z=g(()=>b.value?Number(e.size):I.value?I.value.width:Math.max(k.value,32)),y=g(()=>t/(1-k.value/z.value)*2),P=g(()=>k.value/z.value*y.value),V=g(()=>O((100-C.value)/100*a));return ze(()=>{v.value=o.value,R.value=o.value}),M(()=>s(e.tag,{ref:o,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":_.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},c.value,m.value,i.value,e.class],style:[b.value,u.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:C.value},{default:()=>[s("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${y.value} ${y.value}`},[s("circle",{class:["v-progress-circular__underlay",f.value],style:h.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":P.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),s("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":P.value,"stroke-dasharray":a,"stroke-dashoffset":V.value},null)]),r.default&&s("div",{class:"v-progress-circular__content"},[r.default({value:C.value})])]})),{}}}),Ge={},Le={class:"d-flex align-center justify-center fill-height"};function Je(e,n){return xe(),we("div",null,[s(Ue,{contain:"",src:Pe},{placeholder:Re(()=>[Ie("div",Le,[s(qe,{color:"grey-lighten-4",indeterminate:""})])]),_:1})])}const Qe=Ne(Ge,[["render",Je]]);export{Qe as default};
