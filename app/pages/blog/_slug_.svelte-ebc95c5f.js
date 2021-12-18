import{M as H,S,i as B,s as C,k as $,e as P,j as z,t as G,P as I,O as L,d as h,n as w,c as D,a as E,m as M,g as O,Q as T,b as U,f as Q,o as V,D as f,h as A,x as F,u as J,v as K}from"../../chunks/vendor-d06a5aec.js";import N from"./blogHeading.svelte-60a83db2.js";function R(s){var b,q,y;let l,r,e,a,_,u,m=((b=s[0])==null?void 0:b.tags)+"",p,v,c,g=((y=(q=s[0])==null?void 0:q.content)==null?void 0:y.html)+"",i;return document.title=l=s[0].title,a=new N({props:{title:s[0].title,author:s[0].author.name,date:s[0].date}}),{c(){r=$(),e=P("div"),z(a.$$.fragment),_=$(),u=P("p"),p=G(m),v=$(),c=new I,this.h()},l(t){L('[data-svelte="svelte-1vu1n7r"]',document.head).forEach(h),r=w(t),e=D(t,"DIV",{class:!0});var n=E(e);M(a.$$.fragment,n),_=w(n),u=D(n,"P",{});var d=E(u);p=O(d,m),d.forEach(h),v=w(n),c=T(n),n.forEach(h),this.h()},h(){c.a=null,U(e,"class","text-center w-full")},m(t,o){Q(t,r,o),Q(t,e,o),V(a,e,null),f(e,_),f(e,u),f(u,p),f(e,v),c.m(g,e),i=!0},p(t,[o]){var d,j,k;(!i||o&1)&&l!==(l=t[0].title)&&(document.title=l);const n={};o&1&&(n.title=t[0].title),o&1&&(n.author=t[0].author.name),o&1&&(n.date=t[0].date),a.$set(n),(!i||o&1)&&m!==(m=((d=t[0])==null?void 0:d.tags)+"")&&A(p,m),(!i||o&1)&&g!==(g=((k=(j=t[0])==null?void 0:j.content)==null?void 0:k.html)+"")&&c.p(g)},i(t){i||(F(a.$$.fragment,t),i=!0)},o(t){J(a.$$.fragment,t),i=!1},d(t){t&&h(r),t&&h(e),K(a)}}}async function Z(s){const l=new H.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),r=H.gql`
        query PostPageQuery($slug: String!) {
          post(where: { slug: $slug }) {
            title
            date
            content {
              html
            }
            tags
            author {
              id
              name
            }
          }
        }
      `,e={slug:s.page.params.slug},{post:a}=await l.request(r,e);return{props:{post:a}}}function W(s,l,r){let{post:e}=l;return s.$$set=a=>{"post"in a&&r(0,e=a.post)},[e]}class x extends S{constructor(l){super();B(this,l,W,R,C,{post:0})}}export{x as default,Z as load};
