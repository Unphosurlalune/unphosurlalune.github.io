import{O as b,S as j,i as E,s as C,e as m,j as L,k as x,c as g,a as d,m as S,n as y,d as f,f as p,o as I,F as $,x as _,u as v,v as P,t as z,g as A,b as k,w as D,P as F,r as G}from"../../chunks/vendor-07b9be69.js";import{B as H}from"../../chunks/index-1b787112.js";function B(u,s,n){const i=u.slice();return i[1]=s[n],i}function q(u){let s,n,i,a;return n=new H({props:{post:u[1]}}),{c(){s=m("li"),L(n.$$.fragment),i=x()},l(r){s=g(r,"LI",{});var c=d(s);S(n.$$.fragment,c),i=y(c),c.forEach(f)},m(r,c){p(r,s,c),I(n,s,null),$(s,i),a=!0},p(r,c){const t={};c&1&&(t.post=r[1]),n.$set(t)},i(r){a||(_(n.$$.fragment,r),a=!0)},o(r){v(n.$$.fragment,r),a=!1},d(r){r&&f(s),P(n)}}}function O(u){let s,n,i,a,r,c=u[0],t=[];for(let e=0;e<c.length;e+=1)t[e]=q(B(u,c,e));const w=e=>v(t[e],1,1,()=>{t[e]=null});return{c(){s=m("h1"),n=z("Blog"),i=x(),a=m("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){s=g(e,"H1",{class:!0});var o=d(s);n=A(o,"Blog"),o.forEach(f),i=y(e),a=g(e,"UL",{class:!0});var l=d(a);for(let h=0;h<t.length;h+=1)t[h].l(l);l.forEach(f),this.h()},h(){k(s,"class","page-title"),k(a,"class","svelte-2pfwuc")},m(e,o){p(e,s,o),$(s,n),p(e,i,o),p(e,a,o);for(let l=0;l<t.length;l+=1)t[l].m(a,null);r=!0},p(e,[o]){if(o&1){c=e[0];let l;for(l=0;l<c.length;l+=1){const h=B(e,c,l);t[l]?(t[l].p(h,o),_(t[l],1)):(t[l]=q(h),t[l].c(),_(t[l],1),t[l].m(a,null))}for(G(),l=c.length;l<t.length;l+=1)w(l);D()}},i(e){if(!r){for(let o=0;o<c.length;o+=1)_(t[o]);r=!0}},o(e){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)v(t[o]);r=!1},d(e){e&&f(s),e&&f(i),e&&f(a),F(t,e)}}}async function J(){const u=new b.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),s=b.gql`
        query PostsIndex {
          posts(orderBy: publishedAt_DESC) {
            id
            title
            slug
            date
            excerpt
          }
        }
      `,{posts:n}=await u.request(s);return{props:{posts:n}}}function Q(u,s,n){let{posts:i}=s;return u.$$set=a=>{"posts"in a&&n(0,i=a.posts)},[i]}class K extends j{constructor(s){super();E(this,s,Q,O,C,{posts:0})}}export{K as default,J as load};
