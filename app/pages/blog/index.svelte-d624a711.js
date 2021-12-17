import{M as g,S as C,i as E,s as L,e as d,j as $,k as v,c as y,a as b,m as k,n as x,d as u,f as m,o as q,D as P,x as f,u as h,v as w,b as S,w as T,N as D,r as I}from"../../chunks/vendor-d06a5aec.js";import{P as z}from"../../chunks/pageTitle-5e6b7128.js";import{B as A}from"../../chunks/index-49c13d15.js";function B(c,s,l){const o=c.slice();return o[1]=s[l],o}function j(c){let s,l,o,i;return l=new A({props:{post:c[1]}}),{c(){s=d("li"),$(l.$$.fragment),o=v()},l(a){s=y(a,"LI",{});var e=b(s);k(l.$$.fragment,e),o=x(e),e.forEach(u)},m(a,e){m(a,s,e),q(l,s,null),P(s,o),i=!0},p(a,e){const p={};e&1&&(p.post=a[1]),l.$set(p)},i(a){i||(f(l.$$.fragment,a),i=!0)},o(a){h(l.$$.fragment,a),i=!1},d(a){a&&u(s),w(l)}}}function G(c){let s,l,o,i;s=new z({props:{title:"Blog"}});let a=c[0],e=[];for(let t=0;t<a.length;t+=1)e[t]=j(B(c,a,t));const p=t=>h(e[t],1,1,()=>{e[t]=null});return{c(){$(s.$$.fragment),l=v(),o=d("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){k(s.$$.fragment,t),l=x(t),o=y(t,"UL",{class:!0});var r=b(o);for(let n=0;n<e.length;n+=1)e[n].l(r);r.forEach(u),this.h()},h(){S(o,"class","svelte-dg6rvb")},m(t,r){q(s,t,r),m(t,l,r),m(t,o,r);for(let n=0;n<e.length;n+=1)e[n].m(o,null);i=!0},p(t,[r]){if(r&1){a=t[0];let n;for(n=0;n<a.length;n+=1){const _=B(t,a,n);e[n]?(e[n].p(_,r),f(e[n],1)):(e[n]=j(_),e[n].c(),f(e[n],1),e[n].m(o,null))}for(I(),n=a.length;n<e.length;n+=1)p(n);T()}},i(t){if(!i){f(s.$$.fragment,t);for(let r=0;r<a.length;r+=1)f(e[r]);i=!0}},o(t){h(s.$$.fragment,t),e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)h(e[r]);i=!1},d(t){w(s,t),t&&u(l),t&&u(o),D(e,t)}}}async function F(){const c=new g.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),s=g.gql`
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
      `,{posts:l}=await c.request(s);return{props:{posts:l}}}function M(c,s,l){let{posts:o}=s;return c.$$set=i=>{"posts"in i&&l(0,o=i.posts)},[o]}class H extends C{constructor(s){super();E(this,s,M,G,L,{posts:0})}}export{H as default,F as load};
