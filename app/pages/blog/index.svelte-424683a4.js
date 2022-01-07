import{M as k,S as L,i as S,s as T,e as $,j as q,k as v,c as b,a as x,m as w,n as y,d as p,f as h,o as B,F as j,x as g,u as d,v as E,t as I,g as z,b as D,w as F,N as G,r as M}from"../../chunks/vendor-6df676c9.js";import{P as N}from"../../chunks/pageTitle-8c39a98b.js";import{B as Q}from"../../chunks/index-3c2edbf7.js";function P(c,t,n){const r=c.slice();return r[1]=t[n],r}function A(c){let t,n,r,u;return n=new Q({props:{post:c[1]}}),{c(){t=$("li"),q(n.$$.fragment),r=v()},l(o){t=b(o,"LI",{});var i=x(t);w(n.$$.fragment,i),r=y(i),i.forEach(p)},m(o,i){h(o,t,i),B(n,t,null),j(t,r),u=!0},p(o,i){const f={};i&1&&(f.post=o[1]),n.$set(f)},i(o){u||(g(n.$$.fragment,o),u=!0)},o(o){d(n.$$.fragment,o),u=!1},d(o){o&&p(t),E(n)}}}function U(c){let t,n,r,u,o,i,f;t=new N({props:{title:"Blog"}});let m=c[0],s=[];for(let e=0;e<m.length;e+=1)s[e]=A(P(c,m,e));const C=e=>d(s[e],1,1,()=>{s[e]=null});return{c(){q(t.$$.fragment),n=v(),r=$("p"),u=I("Articles du plus recent au plus ancien..."),o=v(),i=$("ul");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){w(t.$$.fragment,e),n=y(e),r=b(e,"P",{});var a=x(r);u=z(a,"Articles du plus recent au plus ancien..."),a.forEach(p),o=y(e),i=b(e,"UL",{class:!0});var l=x(i);for(let _=0;_<s.length;_+=1)s[_].l(l);l.forEach(p),this.h()},h(){D(i,"class","svelte-dg6rvb")},m(e,a){B(t,e,a),h(e,n,a),h(e,r,a),j(r,u),h(e,o,a),h(e,i,a);for(let l=0;l<s.length;l+=1)s[l].m(i,null);f=!0},p(e,[a]){if(a&1){m=e[0];let l;for(l=0;l<m.length;l+=1){const _=P(e,m,l);s[l]?(s[l].p(_,a),g(s[l],1)):(s[l]=A(_),s[l].c(),g(s[l],1),s[l].m(i,null))}for(M(),l=m.length;l<s.length;l+=1)C(l);F()}},i(e){if(!f){g(t.$$.fragment,e);for(let a=0;a<m.length;a+=1)g(s[a]);f=!0}},o(e){d(t.$$.fragment,e),s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)d(s[a]);f=!1},d(e){E(t,e),e&&p(n),e&&p(r),e&&p(o),e&&p(i),G(s,e)}}}async function R(){const c=new k.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),t=k.gql`
        query PostsIndex {
          posts(orderBy: publishedAt_DESC) {
            id
            title
            slug
            date
            excerpt
            author {
              name
            }
          }
        }
      `,{posts:n}=await c.request(t);return{props:{posts:n}}}function H(c,t,n){let{posts:r}=t;return c.$$set=u=>{"posts"in u&&n(0,r=u.posts)},[r]}class V extends L{constructor(t){super();S(this,t,H,U,T,{posts:0})}}export{V as default,R as load};
