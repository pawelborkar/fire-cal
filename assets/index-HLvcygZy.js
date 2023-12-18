var Se=Object.defineProperty;var ke=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var se=(e,t,n)=>(ke(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(o){if(o.ep)return;o.ep=!0;const f=n(o);fetch(o.href,f)}})();function X(){}function Oe(e){return e()}function ve(){return Object.create(null)}function x(e){e.forEach(Oe)}function Ne(e){return typeof e=="function"}function Le(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Pe(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function Q(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function Ye(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function a(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function g(){return y(" ")}function k(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function j(e){return e===""?null:+e}function je(e){return Array.from(e.childNodes)}function T(e,t){t=""+t,e.data!==t&&(e.data=t)}function C(e,t){e.value=t??""}function ye(e,t,n){for(let s=0;s<e.options.length;s+=1){const o=e.options[s];if(o.__value===t){o.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function De(e){const t=e.querySelector(":checked");return t&&t.__value}let Z;function W(e){Z=e}function Fe(){if(!Z)throw new Error("Function called outside component initialization");return Z}function Me(e){Fe().$$.on_mount.push(e)}const G=[],$e=[];let z=[];const we=[],Ue=Promise.resolve();let oe=!1;function Be(){oe||(oe=!0,Ue.then(Re))}function te(e){z.push(e)}const ue=new Set;let B=0;function Re(){if(B!==0)return;const e=Z;do{try{for(;B<G.length;){const t=G[B];B++,W(t),Ge(t.$$)}}catch(t){throw G.length=0,B=0,t}for(W(null),G.length=0,B=0;$e.length;)$e.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];ue.has(n)||(ue.add(n),n())}z.length=0}while(G.length);for(;we.length;)we.pop()();oe=!1,ue.clear(),W(e)}function Ge(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}function Te(e){const t=[],n=[];z.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),z=t}const qe=new Set;function ze(e,t){e&&e.i&&(qe.delete(e),e.i(t))}function Ee(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function He(e,t,n){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),te(()=>{const f=e.$$.on_mount.map(Oe).filter(Ne);e.$$.on_destroy?e.$$.on_destroy.push(...f):x(f),e.$$.on_mount=[]}),o.forEach(te)}function Ke(e,t){const n=e.$$;n.fragment!==null&&(Te(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ve(e,t){e.$$.dirty[0]===-1&&(G.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Je(e,t,n,s,o,f,p=null,_=[-1]){const i=Z;W(e);const u=e.$$={fragment:null,ctx:[],props:f,update:X,not_equal:o,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:ve(),dirty:_,skip_bound:!1,root:t.target||i.$$.root};p&&p(u.root);let d=!1;if(u.ctx=n?n(e,t.props||{},(r,m,...O)=>{const v=O.length?O[0]:m;return u.ctx&&o(u.ctx[r],u.ctx[r]=v)&&(!u.skip_bound&&u.bound[r]&&u.bound[r](v),d&&Ve(e,r)),m}):[],u.update(),d=!0,x(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const r=je(t.target);u.fragment&&u.fragment.l(r),r.forEach(q)}else u.fragment&&u.fragment.c();t.intro&&ze(e.$$.fragment),He(e,t.target,t.anchor),Re()}W(i)}class Qe{constructor(){se(this,"$$");se(this,"$$set")}$destroy(){Ke(this,1),this.$destroy=X}$on(t,n){if(!Ne(n))return X;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!Pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const We="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(We);function Ce(e,t,n){const s=e.slice();return s[15]=t[n].year,s[16]=t[n].totalAmount,s[17]=t[n].yearlyGains,s[6]=t[n].yearlyExpense,s}function Ie(e){let t,n,s,o,f,p,_=Ee(e[5]),i=[];for(let u=0;u<_.length;u+=1)i[u]=Ae(Ce(e,_,u));return{c(){t=a("h2"),t.textContent="Results:",n=g(),s=a("table"),o=a("thead"),o.innerHTML='<tr><th class="svelte-5102sp">Year</th> <th class="svelte-5102sp">Total Amount</th> <th class="svelte-5102sp">Yearly Gains</th> <th class="svelte-5102sp">Yearly Expenses</th></tr>',f=g(),p=a("tbody");for(let u=0;u<i.length;u+=1)i[u].c();c(s,"class","svelte-5102sp")},m(u,d){Q(u,t,d),Q(u,n,d),Q(u,s,d),l(s,o),l(s,f),l(s,p);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(p,null)},p(u,d){if(d&288){_=Ee(u[5]);let r;for(r=0;r<_.length;r+=1){const m=Ce(u,_,r);i[r]?i[r].p(m,d):(i[r]=Ae(m),i[r].c(),i[r].m(p,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=_.length}},d(u){u&&(q(t),q(n),q(s)),Ye(i,u)}}}function Ae(e){let t,n,s=e[15]+"",o,f,p,_=e[8](e[16])+"",i,u,d,r=e[8](e[17])+"",m,O,v,R=e[8](e[6])+"",N,L;return{c(){t=a("tr"),n=a("td"),o=y(s),f=g(),p=a("td"),i=y(_),u=g(),d=a("td"),m=y(r),O=g(),v=a("td"),N=y(R),L=g(),c(n,"class","svelte-5102sp"),c(p,"class","svelte-5102sp"),c(d,"class","svelte-5102sp"),c(v,"class","svelte-5102sp")},m(h,$){Q(h,t,$),l(t,n),l(n,o),l(t,f),l(t,p),l(p,i),l(t,u),l(t,d),l(d,m),l(t,O),l(t,v),l(v,N),l(t,L)},p(h,$){$&32&&s!==(s=h[15]+"")&&T(o,s),$&32&&_!==(_=h[8](h[16])+"")&&T(i,_),$&32&&r!==(r=h[8](h[17])+"")&&T(m,r),$&32&&R!==(R=h[8](h[6])+"")&&T(N,R)},d(h){h&&q(t)}}}function Xe(e){let t,n,s,o,f,p,_,i,u,d,r,m,O,v,R,N,L,h,$,E,H,D,re,P,ie,K,ce,Y,ae,F,fe,ee,ne,pe,de,I,he,V,_e,S,M,U,me,J,ge,le,be,w=e[5].length>0&&Ie(e);return{c(){t=a("main"),n=a("hr"),s=g(),o=a("h1"),o.textContent="F.I.R.E Calculator",f=g(),p=a("hr"),_=g(),i=a("br"),u=g(),d=a("label"),r=y(`Principal Amount:
    `),m=a("input"),O=g(),v=a("label"),R=y(`Annual ROI:
    `),N=a("span"),L=y(e[1]),h=y("%"),$=g(),E=a("input"),H=g(),D=a("label"),re=y(`Number of Years:
    `),P=a("input"),ie=g(),K=a("label"),ce=y(`Yearly Expense:
    `),Y=a("input"),ae=g(),F=a("label"),fe=y(`Inflation Rate:
    `),ee=a("span"),ne=y(e[3]),pe=y("%"),de=g(),I=a("input"),he=g(),V=a("label"),_e=y(`Select Currency:
    `),S=a("select"),M=a("option"),M.textContent="Indian Rupees (INR)",U=a("option"),U.textContent="US Dollars (USD)",me=g(),J=a("button"),J.textContent="Calculate",ge=g(),w&&w.c(),c(o,"class","svelte-5102sp"),c(m,"type","number"),c(m,"class","svelte-5102sp"),c(d,"class","svelte-5102sp"),c(E,"type","range"),c(E,"min","0"),c(E,"max","20"),c(E,"step","0.5"),c(E,"class","svelte-5102sp"),c(v,"class","svelte-5102sp"),c(P,"type","number"),c(P,"class","svelte-5102sp"),c(D,"class","svelte-5102sp"),c(Y,"type","number"),c(Y,"class","svelte-5102sp"),c(K,"class","svelte-5102sp"),c(I,"type","range"),c(I,"min","0"),c(I,"max","10"),c(I,"step","0.5"),c(I,"class","svelte-5102sp"),c(F,"class","svelte-5102sp"),M.__value="INR",C(M,M.__value),U.__value="USD",C(U,U.__value),c(S,"class","svelte-5102sp"),e[4]===void 0&&te(()=>e[14].call(S)),c(V,"class","svelte-5102sp"),c(J,"class","svelte-5102sp"),c(t,"class","svelte-5102sp")},m(b,A){Q(b,t,A),l(t,n),l(t,s),l(t,o),l(t,f),l(t,p),l(t,_),l(t,i),l(t,u),l(t,d),l(d,r),l(d,m),C(m,e[0]),l(t,O),l(t,v),l(v,R),l(v,N),l(N,L),l(N,h),l(v,$),l(v,E),C(E,e[1]),l(t,H),l(t,D),l(D,re),l(D,P),C(P,e[2]),l(t,ie),l(t,K),l(K,ce),l(K,Y),C(Y,e[6]),l(t,ae),l(t,F),l(F,fe),l(F,ee),l(ee,ne),l(ee,pe),l(F,de),l(F,I),C(I,e[3]),l(t,he),l(t,V),l(V,_e),l(V,S),l(S,M),l(S,U),ye(S,e[4],!0),l(t,me),l(t,J),l(t,ge),w&&w.m(t,null),le||(be=[k(m,"input",e[9]),k(E,"change",e[10]),k(E,"input",e[10]),k(P,"input",e[11]),k(Y,"input",e[12]),k(I,"change",e[13]),k(I,"input",e[13]),k(S,"change",e[14]),k(J,"click",e[7])],le=!0)},p(b,[A]){A&1&&j(m.value)!==b[0]&&C(m,b[0]),A&2&&T(L,b[1]),A&2&&C(E,b[1]),A&4&&j(P.value)!==b[2]&&C(P,b[2]),A&64&&j(Y.value)!==b[6]&&C(Y,b[6]),A&8&&T(ne,b[3]),A&8&&C(I,b[3]),A&16&&ye(S,b[4]),b[5].length>0?w?w.p(b,A):(w=Ie(b),w.c(),w.m(t,null)):w&&(w.d(1),w=null)},i:X,o:X,d(b){b&&q(t),w&&w.d(),le=!1,x(be)}}}function Ze(e,t,n){let s=1e6,o=7,f=40,p=2e4,_=3,i="INR",u=[];const d=()=>{n(5,u=[]);let h=s;for(let $=1;$<=f;$++){n(6,p*=1+_/100),h-=p;const E=o/100,H=h*(1+E)**1,D=H-h;h=H,u.push({year:$,totalAmount:h,yearlyGains:D,yearlyExpense:p})}};Me(d);const r=h=>`${(h/1e7).toFixed(3)} crores`;function m(){s=j(this.value),n(0,s)}function O(){o=j(this.value),n(1,o)}function v(){f=j(this.value),n(2,f)}function R(){p=j(this.value),n(6,p)}function N(){_=j(this.value),n(3,_)}function L(){i=De(this),n(4,i)}return[s,o,f,_,i,u,p,d,r,m,O,v,R,N,L]}class xe extends Qe{constructor(t){super(),Je(this,t,Ze,Xe,Le,{})}}new xe({target:document.getElementById("app")});