import{O as v,S as P,i as S,s as w,e as f,t as b,k as L,c as p,a as _,g as k,d as h,n as q,b as g,f as d,F as m,h as U,G as x,P as j}from"../chunks/vendor-b2379085.js";function y(c,t,n){const o=c.slice();return o[1]=t[n],o}function E(c){let t,n,o=c[1].title+"",r,i,l;return{c(){t=f("li"),n=f("a"),r=b(o),l=L(),this.h()},l(e){t=p(e,"LI",{});var a=_(t);n=p(a,"A",{href:!0});var s=_(n);r=k(s,o),s.forEach(h),l=q(a),a.forEach(h),this.h()},h(){g(n,"href",i="/blog/"+c[1].slug)},m(e,a){d(e,t,a),m(t,n),m(n,r),m(t,l)},p(e,a){a&1&&o!==(o=e[1].title+"")&&U(r,o),a&1&&i!==(i="/blog/"+e[1].slug)&&g(n,"href",i)},d(e){e&&h(t)}}}function C(c){let t,n,o,r,i=c[0],l=[];for(let e=0;e<i.length;e+=1)l[e]=E(y(c,i,e));return{c(){t=f("h1"),n=b("# UnPhoSurLaLune"),o=L(),r=f("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=p(e,"H1",{class:!0});var a=_(t);n=k(a,"# UnPhoSurLaLune"),a.forEach(h),o=q(e),r=p(e,"UL",{});var s=_(r);for(let u=0;u<l.length;u+=1)l[u].l(s);s.forEach(h),this.h()},h(){g(t,"class","text-center")},m(e,a){d(e,t,a),m(t,n),d(e,o,a),d(e,r,a);for(let s=0;s<l.length;s+=1)l[s].m(r,null)},p(e,[a]){if(a&1){i=e[0];let s;for(s=0;s<i.length;s+=1){const u=y(e,i,s);l[s]?l[s].p(u,a):(l[s]=E(u),l[s].c(),l[s].m(r,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=i.length}},i:x,o:x,d(e){e&&h(t),e&&h(o),e&&h(r),j(l,e)}}}async function z(){const c=new v.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),t=v.gql`
        query PostsIndex {
          posts {
            id
            title
            slug
            date
            excerpt
          }
        }
      `,{posts:n}=await c.request(t);return{props:{posts:n}}}function G(c,t,n){let{posts:o}=t;return c.$$set=r=>{"posts"in r&&n(0,o=r.posts)},[o]}class A extends P{constructor(t){super();S(this,t,G,C,w,{posts:0})}}export{A as default,z as load};
