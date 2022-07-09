import{M as H,S as B,i as C,s as D,k as $,e as P,j as z,t as F,P as G,O as I,d as h,n as w,c as E,a as Q,m as L,g as M,Q as O,b as T,f as S,o as U,F as f,h as V,x as A,u as J,v as K}from"../../chunks/vendor-6df676c9.js";import N from"./blogHeading.svelte-ad83f183.js";function R(s){var q,b,y;let l,r,e,a,_,u,m=((q=s[0])==null?void 0:q.tags)+"",p,v,c,g=((y=(b=s[0])==null?void 0:b.content)==null?void 0:y.html)+"",i;return document.title=l=s[0].title,a=new N({props:{title:s[0].title,author:s[0].author.name,date:s[0].date}}),{c(){r=$(),e=P("div"),z(a.$$.fragment),_=$(),u=P("p"),p=F(m),v=$(),c=new G,this.h()},l(t){I('[data-svelte="svelte-1vu1n7r"]',document.head).forEach(h),r=w(t),e=E(t,"DIV",{class:!0});var n=Q(e);L(a.$$.fragment,n),_=w(n),u=E(n,"P",{});var d=Q(u);p=M(d,m),d.forEach(h),v=w(n),c=O(n),n.forEach(h),this.h()},h(){c.a=null,T(e,"class","text-center w-full")},m(t,o){S(t,r,o),S(t,e,o),U(a,e,null),f(e,_),f(e,u),f(u,p),f(e,v),c.m(g,e),i=!0},p(t,[o]){var d,j,k;(!i||o&1)&&l!==(l=t[0].title)&&(document.title=l);const n={};o&1&&(n.title=t[0].title),o&1&&(n.author=t[0].author.name),o&1&&(n.date=t[0].date),a.$set(n),(!i||o&1)&&m!==(m=((d=t[0])==null?void 0:d.tags)+"")&&V(p,m),(!i||o&1)&&g!==(g=((k=(j=t[0])==null?void 0:j.content)==null?void 0:k.html)+"")&&c.p(g)},i(t){i||(A(a.$$.fragment,t),i=!0)},o(t){J(a.$$.fragment,t),i=!1},d(t){t&&h(r),t&&h(e),K(a)}}}async function Z(s){const l=new H.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),r=H.gql`
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
      `,e={slug:s.page.params.slug},{post:a}=await l.request(r,e);return{props:{post:a}}}function W(s,l,r){let{post:e}=l;return s.$$set=a=>{"post"in a&&r(0,e=a.post)},[e]}class x extends B{constructor(l){super();C(this,l,W,R,D,{post:0})}}export{x as default,Z as load};
