import{S,i as T,s as C,v as P,a as d,k as v,q as I,w,c as b,l as x,m as y,r as O,h as u,n as U,x as E,b as h,B as q,f as g,d as j,t as $,y as A,O as z,g as D}from"../../../chunks/index-fc2358f4.js";import{B as F}from"../../../chunks/index-be19d959.js";import{P as G}from"../../../chunks/pageTitle-8202dd7c.js";function k(f,a,n){const r=f.slice();return r[1]=a[n],r}function B(f){let a,n,r,c;return n=new F({props:{post:f[1]}}),{c(){a=v("li"),P(n.$$.fragment),r=d()},l(o){a=x(o,"LI",{});var i=y(a);w(n.$$.fragment,i),r=b(i),i.forEach(u)},m(o,i){h(o,a,i),E(n,a,null),q(a,r),c=!0},p(o,i){const _={};i&1&&(_.post=o[1]),n.$set(_)},i(o){c||(g(n.$$.fragment,o),c=!0)},o(o){$(n.$$.fragment,o),c=!1},d(o){o&&u(a),A(n)}}}function H(f){let a,n,r,c,o,i,_;a=new G({props:{title:"Blog"}});let p=f[0].posts,e=[];for(let t=0;t<p.length;t+=1)e[t]=B(k(f,p,t));const L=t=>$(e[t],1,1,()=>{e[t]=null});return{c(){P(a.$$.fragment),n=d(),r=v("p"),c=I("Articles du plus r\xE9cent au plus ancien..."),o=d(),i=v("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){w(a.$$.fragment,t),n=b(t),r=x(t,"P",{});var s=y(r);c=O(s,"Articles du plus r\xE9cent au plus ancien..."),s.forEach(u),o=b(t),i=x(t,"UL",{class:!0});var l=y(i);for(let m=0;m<e.length;m+=1)e[m].l(l);l.forEach(u),this.h()},h(){U(i,"class","svelte-7k4bc8")},m(t,s){E(a,t,s),h(t,n,s),h(t,r,s),q(r,c),h(t,o,s),h(t,i,s);for(let l=0;l<e.length;l+=1)e[l].m(i,null);_=!0},p(t,[s]){if(s&1){p=t[0].posts;let l;for(l=0;l<p.length;l+=1){const m=k(t,p,l);e[l]?(e[l].p(m,s),g(e[l],1)):(e[l]=B(m),e[l].c(),g(e[l],1),e[l].m(i,null))}for(D(),l=p.length;l<e.length;l+=1)L(l);j()}},i(t){if(!_){g(a.$$.fragment,t);for(let s=0;s<p.length;s+=1)g(e[s]);_=!0}},o(t){$(a.$$.fragment,t),e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)$(e[s]);_=!1},d(t){A(a,t),t&&u(n),t&&u(r),t&&u(o),t&&u(i),z(e,t)}}}function J(f,a,n){let{data:r}=a;return f.$$set=c=>{"data"in c&&n(0,r=c.data)},[r]}class Q extends S{constructor(a){super(),T(this,a,J,H,C,{data:0})}}export{Q as default};
