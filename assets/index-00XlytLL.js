var Re=Object.defineProperty;var xe=(e,t,n)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var se=(e,t,n)=>(xe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(o){if(o.ep)return;o.ep=!0;const f=n(o);fetch(o.href,f)}})();function Q(){}function Ae(e){return e()}function ve(){return Object.create(null)}function X(e){e.forEach(Ae)}function Oe(e){return typeof e=="function"}function Se(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ke(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function V(e,t,n){e.insertBefore(t,n||null)}function G(e){e.parentNode&&e.parentNode.removeChild(e)}function Le(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function c(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function g(){return $(" ")}function x(e,t,n,u){return e.addEventListener(t,n,u),()=>e.removeEventListener(t,n,u)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Y(e){return e===""?null:+e}function Pe(e){return Array.from(e.childNodes)}function B(e,t){t=""+t,e.data!==t&&(e.data=t)}function E(e,t){e.value=t??""}function ye(e,t,n){for(let u=0;u<e.options.length;u+=1){const o=e.options[u];if(o.__value===t){o.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Ye(e){const t=e.querySelector(":checked");return t&&t.__value}let W;function J(e){W=e}function je(){if(!W)throw new Error("Function called outside component initialization");return W}function De(e){je().$$.on_mount.push(e)}const U=[],$e=[];let T=[];const qe=[],Fe=Promise.resolve();let re=!1;function Me(){re||(re=!0,Fe.then(Ne))}function ne(e){T.push(e)}const oe=new Set;let M=0;function Ne(){if(M!==0)return;const e=W;do{try{for(;M<U.length;){const t=U[M];M++,J(t),Ue(t.$$)}}catch(t){throw U.length=0,M=0,t}for(J(null),U.length=0,M=0;$e.length;)$e.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];oe.has(n)||(oe.add(n),n())}T.length=0}while(U.length);for(;qe.length;)qe.pop()();re=!1,oe.clear(),J(e)}function Ue(e){if(e.fragment!==null){e.update(),X(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}function Be(e){const t=[],n=[];T.forEach(u=>e.indexOf(u)===-1?t.push(u):n.push(u)),n.forEach(u=>u()),T=t}const Ge=new Set;function Te(e,t){e&&e.i&&(Ge.delete(e),e.i(t))}function we(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ze(e,t,n){const{fragment:u,after_update:o}=e.$$;u&&u.m(t,n),ne(()=>{const f=e.$$.on_mount.map(Ae).filter(Oe);e.$$.on_destroy?e.$$.on_destroy.push(...f):X(f),e.$$.on_mount=[]}),o.forEach(ne)}function He(e,t){const n=e.$$;n.fragment!==null&&(Be(n.after_update),X(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ke(e,t){e.$$.dirty[0]===-1&&(U.push(e),Me(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ve(e,t,n,u,o,f,d=null,_=[-1]){const i=W;J(e);const s=e.$$={fragment:null,ctx:[],props:f,update:Q,not_equal:o,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:ve(),dirty:_,skip_bound:!1,root:t.target||i.$$.root};d&&d(s.root);let p=!1;if(s.ctx=n?n(e,t.props||{},(r,m,...A)=>{const v=A.length?A[0]:m;return s.ctx&&o(s.ctx[r],s.ctx[r]=v)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](v),p&&Ke(e,r)),m}):[],s.update(),p=!0,X(s.before_update),s.fragment=u?u(s.ctx):!1,t.target){if(t.hydrate){const r=Pe(t.target);s.fragment&&s.fragment.l(r),r.forEach(G)}else s.fragment&&s.fragment.c();t.intro&&Te(e.$$.fragment),ze(e,t.target,t.anchor),Ne()}J(i)}class Je{constructor(){se(this,"$$");se(this,"$$set")}$destroy(){He(this,1),this.$destroy=Q}$on(t,n){if(!Oe(n))return Q;const u=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return u.push(n),()=>{const o=u.indexOf(n);o!==-1&&u.splice(o,1)}}$set(t){this.$$set&&!ke(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Qe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Qe);function Ee(e,t,n){const u=e.slice();return u[15]=t[n].year,u[16]=t[n].totalAmount,u[17]=t[n].yearlyGains,u[18]=t[n].yearlyExpense,u}function Ce(e){let t,n,u,o,f,d,_=we(e[6]),i=[];for(let s=0;s<_.length;s+=1)i[s]=Ie(Ee(e,_,s));return{c(){t=c("h2"),t.textContent="Results:",n=g(),u=c("table"),o=c("thead"),o.innerHTML='<tr><th class="svelte-173uqxn">Year</th> <th class="svelte-173uqxn">Total Amount</th> <th class="svelte-173uqxn">Yearly Gains</th> <th class="svelte-173uqxn">Yearly Expenses</th></tr>',f=g(),d=c("tbody");for(let s=0;s<i.length;s+=1)i[s].c();a(u,"class","svelte-173uqxn")},m(s,p){V(s,t,p),V(s,n,p),V(s,u,p),l(u,o),l(u,f),l(u,d);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(d,null)},p(s,p){if(p&320){_=we(s[6]);let r;for(r=0;r<_.length;r+=1){const m=Ee(s,_,r);i[r]?i[r].p(m,p):(i[r]=Ie(m),i[r].c(),i[r].m(d,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=_.length}},d(s){s&&(G(t),G(n),G(u)),Le(i,s)}}}function Ie(e){let t,n,u=e[15]+"",o,f,d,_=e[8](e[16])+"",i,s,p,r=e[8](e[17])+"",m,A,v,N=e[8](e[18])+"",O,S;return{c(){t=c("tr"),n=c("td"),o=$(u),f=g(),d=c("td"),i=$(_),s=g(),p=c("td"),m=$(r),A=g(),v=c("td"),O=$(N),S=g(),a(n,"class","svelte-173uqxn"),a(d,"class","svelte-173uqxn"),a(p,"class","svelte-173uqxn"),a(v,"class","svelte-173uqxn")},m(h,q){V(h,t,q),l(t,n),l(n,o),l(t,f),l(t,d),l(d,i),l(t,s),l(t,p),l(p,m),l(t,A),l(t,v),l(v,O),l(t,S)},p(h,q){q&64&&u!==(u=h[15]+"")&&B(o,u),q&64&&_!==(_=h[8](h[16])+"")&&B(i,_),q&64&&r!==(r=h[8](h[17])+"")&&B(m,r),q&64&&N!==(N=h[8](h[18])+"")&&B(O,N)},d(h){h&&G(t)}}}function We(e){let t,n,u,o,f,d,_,i,s,p,r,m,A,v,N,O,S,h,q,y,Z,k,ee,L,ie,z,ae,P,ce,j,fe,te,le,de,pe,C,he,H,_e,R,D,F,me,K,ge,ue,be,w=e[6].length>0&&Ce(e);return{c(){t=c("main"),n=c("hr"),u=g(),o=c("h1"),o.textContent="FIRE Calculator",f=g(),d=c("hr"),_=g(),i=c("br"),s=g(),p=c("label"),r=$(`Principal Amount:
    `),m=c("input"),A=g(),v=c("label"),N=$(`Annual ROI:
    `),O=c("span"),S=$(e[1]),h=$("%"),q=g(),y=c("input"),Z=g(),k=c("label"),ee=$(`Number of Years:
    `),L=c("input"),ie=g(),z=c("label"),ae=$(`Yearly Expense:
    `),P=c("input"),ce=g(),j=c("label"),fe=$(`Inflation Rate:
    `),te=c("span"),le=$(e[4]),de=$("%"),pe=g(),C=c("input"),he=g(),H=c("label"),_e=$(`Select Currency:
    `),R=c("select"),D=c("option"),D.textContent="Indian Rupees (INR)",F=c("option"),F.textContent="US Dollars (USD)",me=g(),K=c("button"),K.textContent="Calculate",ge=g(),w&&w.c(),a(o,"class","svelte-173uqxn"),a(m,"type","number"),a(m,"class","svelte-173uqxn"),a(p,"class","svelte-173uqxn"),a(y,"type","range"),a(y,"min","0"),a(y,"max","20"),a(y,"step","0.5"),a(y,"class","svelte-173uqxn"),a(v,"class","svelte-173uqxn"),a(L,"type","number"),a(L,"class","svelte-173uqxn"),a(k,"class","svelte-173uqxn"),a(P,"type","number"),a(P,"class","svelte-173uqxn"),a(z,"class","svelte-173uqxn"),a(C,"type","range"),a(C,"min","0"),a(C,"max","10"),a(C,"step","0.5"),a(C,"class","svelte-173uqxn"),a(j,"class","svelte-173uqxn"),D.__value="INR",E(D,D.__value),F.__value="USD",E(F,F.__value),a(R,"class","svelte-173uqxn"),e[5]===void 0&&ne(()=>e[14].call(R)),a(H,"class","svelte-173uqxn"),a(K,"class","svelte-173uqxn"),a(t,"class","svelte-173uqxn")},m(b,I){V(b,t,I),l(t,n),l(t,u),l(t,o),l(t,f),l(t,d),l(t,_),l(t,i),l(t,s),l(t,p),l(p,r),l(p,m),E(m,e[0]),l(t,A),l(t,v),l(v,N),l(v,O),l(O,S),l(O,h),l(v,q),l(v,y),E(y,e[1]),l(t,Z),l(t,k),l(k,ee),l(k,L),E(L,e[2]),l(t,ie),l(t,z),l(z,ae),l(z,P),E(P,e[3]),l(t,ce),l(t,j),l(j,fe),l(j,te),l(te,le),l(te,de),l(j,pe),l(j,C),E(C,e[4]),l(t,he),l(t,H),l(H,_e),l(H,R),l(R,D),l(R,F),ye(R,e[5],!0),l(t,me),l(t,K),l(t,ge),w&&w.m(t,null),ue||(be=[x(m,"input",e[9]),x(y,"change",e[10]),x(y,"input",e[10]),x(L,"input",e[11]),x(P,"input",e[12]),x(C,"change",e[13]),x(C,"input",e[13]),x(R,"change",e[14]),x(K,"click",e[7])],ue=!0)},p(b,[I]){I&1&&Y(m.value)!==b[0]&&E(m,b[0]),I&2&&B(S,b[1]),I&2&&E(y,b[1]),I&4&&Y(L.value)!==b[2]&&E(L,b[2]),I&8&&Y(P.value)!==b[3]&&E(P,b[3]),I&16&&B(le,b[4]),I&16&&E(C,b[4]),I&32&&ye(R,b[5]),b[6].length>0?w?w.p(b,I):(w=Ce(b),w.c(),w.m(t,null)):w&&(w.d(1),w=null)},i:Q,o:Q,d(b){b&&G(t),w&&w.d(),ue=!1,X(be)}}}function Xe(e,t,n){let u=5e7,o=10,f=40,d=12e5,_=4,i="INR",s=[];const p=()=>{n(6,s=[]);let h=u,q=d;for(let y=1;y<=f;y++){q*=1+_/100,h-=q;const Z=o/100,k=h*(1+Z)**1,ee=k-h;h=k,s.push({year:y,totalAmount:h,yearlyGains:ee,yearlyExpense:q})}};De(p);const r=h=>`${(h/1e7).toFixed(3)} crores`;function m(){u=Y(this.value),n(0,u)}function A(){o=Y(this.value),n(1,o)}function v(){f=Y(this.value),n(2,f)}function N(){d=Y(this.value),n(3,d)}function O(){_=Y(this.value),n(4,_)}function S(){i=Ye(this),n(5,i)}return[u,o,f,d,_,i,s,p,r,m,A,v,N,O,S]}class Ze extends Je{constructor(t){super(),Ve(this,t,Xe,We,Se,{})}}new Ze({target:document.getElementById("app")});
