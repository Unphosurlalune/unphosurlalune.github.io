import{O as H,S as F,i as G,s as O,e as d,j as Q,k as B,c as v,a as b,m as R,n as E,d as c,f as p,o as T,F as k,x as y,u as P,v as A,t as $,g as j,b as U,w as D,P as J,r as K}from"../chunks/vendor-07b9be69.js";import{B as M}from"../chunks/index-1b787112.js";function C(f,t,o){const a=f.slice();return a[1]=t[o],a}function I(f){let t,o,a,i;return o=new M({props:{post:f[1]}}),{c(){t=d("li"),Q(o.$$.fragment),a=B()},l(r){t=v(r,"LI",{});var u=b(t);R(o.$$.fragment,u),a=E(u),u.forEach(c)},m(r,u){p(r,t,u),T(o,t,null),k(t,a),i=!0},p(r,u){const h={};u&1&&(h.post=r[1]),o.$set(h)},i(r){i||(y(o.$$.fragment,r),i=!0)},o(r){P(o.$$.fragment,r),i=!1},d(r){r&&c(t),A(o)}}}function N(f){let t,o,a,i,r,u,h,L,m,q,x,_=f[0],s=[];for(let e=0;e<_.length;e+=1)s[e]=I(C(f,_,e));const z=e=>P(s[e],1,1,()=>{s[e]=null});return{c(){t=d("h1"),o=$("UnPhoSurLaLune"),a=$(`
  Bonjour et bienvenue sur notre blog.
  `),i=d("h2"),r=$("Les 2 derniers post"),u=B(),h=d("ul");for(let e=0;e<s.length;e+=1)s[e].c();L=B(),m=d("h2"),q=$("Les categories"),this.h()},l(e){t=v(e,"H1",{class:!0});var n=b(t);o=j(n,"UnPhoSurLaLune"),n.forEach(c),a=j(e,`
  Bonjour et bienvenue sur notre blog.
  `),i=v(e,"H2",{});var l=b(i);r=j(l,"Les 2 derniers post"),l.forEach(c),u=E(e),h=v(e,"UL",{class:!0});var g=b(h);for(let w=0;w<s.length;w+=1)s[w].l(g);g.forEach(c),L=E(e),m=v(e,"H2",{});var S=b(m);q=j(S,"Les categories"),S.forEach(c),this.h()},h(){U(t,"class","page-title "),U(h,"class","svelte-kerpa7")},m(e,n){p(e,t,n),k(t,o),p(e,a,n),p(e,i,n),k(i,r),p(e,u,n),p(e,h,n);for(let l=0;l<s.length;l+=1)s[l].m(h,null);p(e,L,n),p(e,m,n),k(m,q),x=!0},p(e,[n]){if(n&1){_=e[0];let l;for(l=0;l<_.length;l+=1){const g=C(e,_,l);s[l]?(s[l].p(g,n),y(s[l],1)):(s[l]=I(g),s[l].c(),y(s[l],1),s[l].m(h,null))}for(K(),l=_.length;l<s.length;l+=1)z(l);D()}},i(e){if(!x){for(let n=0;n<_.length;n+=1)y(s[n]);x=!0}},o(e){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)P(s[n]);x=!1},d(e){e&&c(t),e&&c(a),e&&c(i),e&&c(u),e&&c(h),J(s,e),e&&c(L),e&&c(m)}}}async function Y(){const f=new H.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),t=H.gql`
        query PostsIndex {
          posts(last: 2) {
            id
            title
            slug
            date
            excerpt
          }
        }
      `,{posts:o}=await f.request(t);return{props:{posts:o}}}function V(f,t,o){let{posts:a}=t;return f.$$set=i=>{"posts"in i&&o(0,a=i.posts)},[a]}class Z extends F{constructor(t){super();G(this,t,V,N,O,{posts:0})}}export{Z as default,Y as load};
