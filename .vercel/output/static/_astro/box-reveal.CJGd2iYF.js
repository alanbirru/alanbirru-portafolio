import{k as E,s as m,u as I,a as w,j as h,h as b}from"./motion.6Csr2DQk.js";import{r as f}from"./index.B52nOzfP.js";function y(t,e,n){return typeof t=="string"?t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}function V(t){t.values.forEach(e=>e.stop())}function p(t,e){[...e].reverse().forEach(r=>{const s=t.getVariant(r);s&&m(t,s),t.variantChildren&&t.variantChildren.forEach(o=>{p(o,e)})})}function x(t,e){if(Array.isArray(e))return p(t,e);if(typeof e=="string")return p(t,[e]);m(t,e)}function C(){const t=new Set,e={subscribe(n){return t.add(n),()=>void t.delete(n)},start(n,r){const s=[];return t.forEach(o=>{s.push(E(o,n,{transitionOverride:r}))}),Promise.all(s)},set(n){return t.forEach(r=>{x(r,n)})},stop(){t.forEach(n=>{V(n)})},mount(){return()=>{e.stop()}}};return e}function A(){const t=I(C);return w(t.mount,[]),t}const g=A,j={some:0,all:1};function k(t,e,{root:n,margin:r,amount:s="some"}={}){const o=y(t),i=new WeakMap,c=l=>{l.forEach(a=>{const d=i.get(a.target);if(a.isIntersecting!==!!d)if(a.isIntersecting){const v=e(a);typeof v=="function"?i.set(a.target,v):u.unobserve(a.target)}else d&&(d(a),i.delete(a.target))})},u=new IntersectionObserver(c,{root:n,rootMargin:r,threshold:typeof s=="number"?s:j[s]});return o.forEach(l=>u.observe(l)),()=>u.disconnect()}function R(t,{root:e,margin:n,amount:r,once:s=!1}={}){const[o,i]=f.useState(!1);return f.useEffect(()=>{if(!t.current||s&&o)return;const c=()=>(i(!0),s?void 0:()=>i(!1)),u={root:e&&e.current||void 0,margin:n,amount:r};return k(t.current,c,u)},[e,t,n,s,r]),o}const L=({children:t,width:e="fit-content",boxColor:n,duration:r})=>{const s=g(),o=g(),i=f.useRef(null),c=R(i,{once:!0});return f.useEffect(()=>{c?(o.start("visible"),s.start("visible")):(o.start("hidden"),s.start("hidden"))},[c,s,o]),h.jsxs("div",{ref:i,style:{position:"relative",width:e,overflow:"hidden"},children:[h.jsx(b.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:s,transition:{duration:r||.5,delay:.25},children:t}),h.jsx(b.div,{variants:{hidden:{left:0},visible:{left:"100%"}},initial:"hidden",animate:o,transition:{duration:r||.5,ease:"easeIn"},style:{position:"absolute",top:4,bottom:4,left:0,right:0,zIndex:20,background:n||"#5046e6"}})]})};export{L as default};
