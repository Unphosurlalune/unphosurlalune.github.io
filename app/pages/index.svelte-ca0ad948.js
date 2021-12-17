import{M as E,S as H,i as M,s as N,e as v,j as S,k as d,c as b,a as L,m as T,n as x,d as i,f as p,o as C,D as P,x as k,u as q,v as I,t as R,g as U,b as Q,w as A,N as F,r as J}from"../chunks/vendor-d06a5aec.js";import{P as K}from"../chunks/pageTitle-5e6b7128.js";import{B as O}from"../chunks/index-49c13d15.js";function z(c,t,r){const o=c.slice();return o[1]=t[r],o}function D(c){let t,r,o,f;return r=new O({props:{post:c[1]}}),{c(){t=v("li"),S(r.$$.fragment),o=d()},l(a){t=b(a,"LI",{});var u=L(t);T(r.$$.fragment,u),o=x(u),u.forEach(i)},m(a,u){p(a,t,u),C(r,t,null),P(t,o),f=!0},p(a,u){const _={};u&1&&(_.post=a[1]),r.$set(_)},i(a){f||(k(r.$$.fragment,a),f=!0)},o(a){q(r.$$.fragment,a),f=!1},d(a){a&&i(t),I(r)}}}function V(c){let t,r,o,f,a,u,_,g,w,y,m,j;t=new K({props:{title:"UnPhoSurLaLune"}});let h=c[0],s=[];for(let e=0;e<h.length;e+=1)s[e]=D(z(c,h,e));const G=e=>q(s[e],1,1,()=>{s[e]=null});return{c(){S(t.$$.fragment),r=d(),o=v("p"),f=R("Bonjour et bienvenue sur notre blog."),a=d(),u=v("br"),_=d(),g=v("h2"),w=R("Les 3 derniers post"),y=d(),m=v("ul");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){T(t.$$.fragment,e),r=x(e),o=b(e,"P",{});var l=L(o);f=U(l,"Bonjour et bienvenue sur notre blog."),l.forEach(i),a=x(e),u=b(e,"BR",{}),_=x(e),g=b(e,"H2",{});var n=L(g);w=U(n,"Les 3 derniers post"),n.forEach(i),y=x(e),m=b(e,"UL",{class:!0});var $=L(m);for(let B=0;B<s.length;B+=1)s[B].l($);$.forEach(i),this.h()},h(){Q(m,"class","svelte-rx19t9")},m(e,l){C(t,e,l),p(e,r,l),p(e,o,l),P(o,f),p(e,a,l),p(e,u,l),p(e,_,l),p(e,g,l),P(g,w),p(e,y,l),p(e,m,l);for(let n=0;n<s.length;n+=1)s[n].m(m,null);j=!0},p(e,[l]){if(l&1){h=e[0];let n;for(n=0;n<h.length;n+=1){const $=z(e,h,n);s[n]?(s[n].p($,l),k(s[n],1)):(s[n]=D($),s[n].c(),k(s[n],1),s[n].m(m,null))}for(J(),n=h.length;n<s.length;n+=1)G(n);A()}},i(e){if(!j){k(t.$$.fragment,e);for(let l=0;l<h.length;l+=1)k(s[l]);j=!0}},o(e){q(t.$$.fragment,e),s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)q(s[l]);j=!1},d(e){I(t,e),e&&i(r),e&&i(o),e&&i(a),e&&i(u),e&&i(_),e&&i(g),e&&i(y),e&&i(m),F(s,e)}}}async function ee(){const c=new E.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),t=E.gql`
        query PostsIndex {
          posts(last: 3) {
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
      `,{posts:r}=await c.request(t);return{props:{posts:r}}}function W(c,t,r){let{posts:o}=t;return c.$$set=f=>{"posts"in f&&r(0,o=f.posts)},[o]}class te extends H{constructor(t){super();M(this,t,W,V,N,{posts:0})}}export{te as default,ee as load};
