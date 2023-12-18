var Se=Object.defineProperty;var ke=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ue=(e,t,n)=>(ke(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(o){if(o.ep)return;o.ep=!0;const f=n(o);fetch(o.href,f)}})();function W(){}function Oe(e){return e()}function ve(){return Object.create(null)}function Z(e){e.forEach(Oe)}function Ne(e){return typeof e=="function"}function Le(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Pe(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function J(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function Ye(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function c(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function g(){return $(" ")}function k(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function D(e){return e===""?null:+e}function je(e){return Array.from(e.childNodes)}function T(e,t){t=""+t,e.data!==t&&(e.data=t)}function C(e,t){e.value=t??""}function ye(e,t,n){for(let s=0;s<e.options.length;s+=1){const o=e.options[s];if(o.__value===t){o.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function De(e){const t=e.querySelector(":checked");return t&&t.__value}let X;function Q(e){X=e}function Fe(){if(!X)throw new Error("Function called outside component initialization");return X}function Me(e){Fe().$$.on_mount.push(e)}const G=[],$e=[];let z=[];const we=[],Ue=Promise.resolve();let re=!1;function Be(){re||(re=!0,Ue.then(Re))}function ne(e){z.push(e)}const oe=new Set;let B=0;function Re(){if(B!==0)return;const e=X;do{try{for(;B<G.length;){const t=G[B];B++,Q(t),Ge(t.$$)}}catch(t){throw G.length=0,B=0,t}for(Q(null),G.length=0,B=0;$e.length;)$e.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];oe.has(n)||(oe.add(n),n())}z.length=0}while(G.length);for(;we.length;)we.pop()();re=!1,oe.clear(),Q(e)}function Ge(e){if(e.fragment!==null){e.update(),Z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}function Te(e){const t=[],n=[];z.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),z=t}const qe=new Set;function ze(e,t){e&&e.i&&(qe.delete(e),e.i(t))}function Ee(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function He(e,t,n){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),ne(()=>{const f=e.$$.on_mount.map(Oe).filter(Ne);e.$$.on_destroy?e.$$.on_destroy.push(...f):Z(f),e.$$.on_mount=[]}),o.forEach(ne)}function Ke(e,t){const n=e.$$;n.fragment!==null&&(Te(n.after_update),Z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ve(e,t){e.$$.dirty[0]===-1&&(G.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Je(e,t,n,s,o,f,p=null,_=[-1]){const i=X;Q(e);const u=e.$$={fragment:null,ctx:[],props:f,update:W,not_equal:o,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:ve(),dirty:_,skip_bound:!1,root:t.target||i.$$.root};p&&p(u.root);let d=!1;if(u.ctx=n?n(e,t.props||{},(r,m,...O)=>{const v=O.length?O[0]:m;return u.ctx&&o(u.ctx[r],u.ctx[r]=v)&&(!u.skip_bound&&u.bound[r]&&u.bound[r](v),d&&Ve(e,r)),m}):[],u.update(),d=!0,Z(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const r=je(t.target);u.fragment&&u.fragment.l(r),r.forEach(q)}else u.fragment&&u.fragment.c();t.intro&&ze(e.$$.fragment),He(e,t.target,t.anchor),Re()}Q(i)}class Qe{constructor(){ue(this,"$$");ue(this,"$$set")}$destroy(){Ke(this,1),this.$destroy=W}$on(t,n){if(!Ne(n))return W;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!Pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const We="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(We);function Ce(e,t,n){const s=e.slice();return s[15]=t[n].year,s[16]=t[n].totalAmount,s[17]=t[n].yearlyGains,s[18]=t[n].yearlyExpense,s}function Ie(e){let t,n,s,o,f,p,_=Ee(e[6]),i=[];for(let u=0;u<_.length;u+=1)i[u]=Ae(Ce(e,_,u));return{c(){t=c("h2"),t.textContent="Results:",n=g(),s=c("table"),o=c("thead"),o.innerHTML='<tr><th class="svelte-5102sp">Year</th> <th class="svelte-5102sp">Total Amount</th> <th class="svelte-5102sp">Yearly Gains</th> <th class="svelte-5102sp">Yearly Expenses</th></tr>',f=g(),p=c("tbody");for(let u=0;u<i.length;u+=1)i[u].c();a(s,"class","svelte-5102sp")},m(u,d){J(u,t,d),J(u,n,d),J(u,s,d),l(s,o),l(s,f),l(s,p);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(p,null)},p(u,d){if(d&320){_=Ee(u[6]);let r;for(r=0;r<_.length;r+=1){const m=Ce(u,_,r);i[r]?i[r].p(m,d):(i[r]=Ae(m),i[r].c(),i[r].m(p,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=_.length}},d(u){u&&(q(t),q(n),q(s)),Ye(i,u)}}}function Ae(e){let t,n,s=e[15]+"",o,f,p,_=e[8](e[16])+"",i,u,d,r=e[8](e[17])+"",m,O,v,R=e[8](e[18])+"",N,L;return{c(){t=c("tr"),n=c("td"),o=$(s),f=g(),p=c("td"),i=$(_),u=g(),d=c("td"),m=$(r),O=g(),v=c("td"),N=$(R),L=g(),a(n,"class","svelte-5102sp"),a(p,"class","svelte-5102sp"),a(d,"class","svelte-5102sp"),a(v,"class","svelte-5102sp")},m(h,w){J(h,t,w),l(t,n),l(n,o),l(t,f),l(t,p),l(p,i),l(t,u),l(t,d),l(d,m),l(t,O),l(t,v),l(v,N),l(t,L)},p(h,w){w&64&&s!==(s=h[15]+"")&&T(o,s),w&64&&_!==(_=h[8](h[16])+"")&&T(i,_),w&64&&r!==(r=h[8](h[17])+"")&&T(m,r),w&64&&R!==(R=h[8](h[18])+"")&&T(N,R)},d(h){h&&q(t)}}}function Xe(e){let t,n,s,o,f,p,_,i,u,d,r,m,O,v,R,N,L,h,w,y,x,P,ee,Y,ie,H,ae,j,ce,F,fe,te,le,pe,de,I,he,K,_e,S,M,U,me,V,ge,se,be,E=e[6].length>0&&Ie(e);return{c(){t=c("main"),n=c("hr"),s=g(),o=c("h1"),o.textContent="FIRE Calculator",f=g(),p=c("hr"),_=g(),i=c("br"),u=g(),d=c("label"),r=$(`Principal Amount:
    `),m=c("input"),O=g(),v=c("label"),R=$(`Annual ROI:
    `),N=c("span"),L=$(e[1]),h=$("%"),w=g(),y=c("input"),x=g(),P=c("label"),ee=$(`Number of Years:
    `),Y=c("input"),ie=g(),H=c("label"),ae=$(`Yearly Expense:
    `),j=c("input"),ce=g(),F=c("label"),fe=$(`Inflation Rate:
    `),te=c("span"),le=$(e[4]),pe=$("%"),de=g(),I=c("input"),he=g(),K=c("label"),_e=$(`Select Currency:
    `),S=c("select"),M=c("option"),M.textContent="Indian Rupees (INR)",U=c("option"),U.textContent="US Dollars (USD)",me=g(),V=c("button"),V.textContent="Calculate",ge=g(),E&&E.c(),a(o,"class","svelte-5102sp"),a(m,"type","number"),a(m,"class","svelte-5102sp"),a(d,"class","svelte-5102sp"),a(y,"type","range"),a(y,"min","0"),a(y,"max","20"),a(y,"step","0.5"),a(y,"class","svelte-5102sp"),a(v,"class","svelte-5102sp"),a(Y,"type","number"),a(Y,"class","svelte-5102sp"),a(P,"class","svelte-5102sp"),a(j,"type","number"),a(j,"class","svelte-5102sp"),a(H,"class","svelte-5102sp"),a(I,"type","range"),a(I,"min","0"),a(I,"max","10"),a(I,"step","0.5"),a(I,"class","svelte-5102sp"),a(F,"class","svelte-5102sp"),M.__value="INR",C(M,M.__value),U.__value="USD",C(U,U.__value),a(S,"class","svelte-5102sp"),e[5]===void 0&&ne(()=>e[14].call(S)),a(K,"class","svelte-5102sp"),a(V,"class","svelte-5102sp"),a(t,"class","svelte-5102sp")},m(b,A){J(b,t,A),l(t,n),l(t,s),l(t,o),l(t,f),l(t,p),l(t,_),l(t,i),l(t,u),l(t,d),l(d,r),l(d,m),C(m,e[0]),l(t,O),l(t,v),l(v,R),l(v,N),l(N,L),l(N,h),l(v,w),l(v,y),C(y,e[1]),l(t,x),l(t,P),l(P,ee),l(P,Y),C(Y,e[2]),l(t,ie),l(t,H),l(H,ae),l(H,j),C(j,e[3]),l(t,ce),l(t,F),l(F,fe),l(F,te),l(te,le),l(te,pe),l(F,de),l(F,I),C(I,e[4]),l(t,he),l(t,K),l(K,_e),l(K,S),l(S,M),l(S,U),ye(S,e[5],!0),l(t,me),l(t,V),l(t,ge),E&&E.m(t,null),se||(be=[k(m,"input",e[9]),k(y,"change",e[10]),k(y,"input",e[10]),k(Y,"input",e[11]),k(j,"input",e[12]),k(I,"change",e[13]),k(I,"input",e[13]),k(S,"change",e[14]),k(V,"click",e[7])],se=!0)},p(b,[A]){A&1&&D(m.value)!==b[0]&&C(m,b[0]),A&2&&T(L,b[1]),A&2&&C(y,b[1]),A&4&&D(Y.value)!==b[2]&&C(Y,b[2]),A&8&&D(j.value)!==b[3]&&C(j,b[3]),A&16&&T(le,b[4]),A&16&&C(I,b[4]),A&32&&ye(S,b[5]),b[6].length>0?E?E.p(b,A):(E=Ie(b),E.c(),E.m(t,null)):E&&(E.d(1),E=null)},i:W,o:W,d(b){b&&q(t),E&&E.d(),se=!1,Z(be)}}}function Ze(e,t,n){let s=5e7,o=10,f=40,p=12e5,_=4,i="INR",u=[];const d=()=>{n(6,u=[]);let h=s,w=p;for(let y=1;y<=f;y++){w*=1+_/100,h-=w;const x=o/100,P=h*(1+x)**1,ee=P-h;h=P,u.push({year:y,totalAmount:h,yearlyGains:ee,yearlyExpense:w})}};Me(d);const r=h=>`${(h/1e7).toFixed(3)} crores`;function m(){s=D(this.value),n(0,s)}function O(){o=D(this.value),n(1,o)}function v(){f=D(this.value),n(2,f)}function R(){p=D(this.value),n(3,p)}function N(){_=D(this.value),n(4,_)}function L(){i=De(this),n(5,i)}return[s,o,f,p,_,i,u,d,r,m,O,v,R,N,L]}class xe extends Qe{constructor(t){super(),Je(this,t,Ze,Xe,Le,{})}}new xe({target:document.getElementById("app")});