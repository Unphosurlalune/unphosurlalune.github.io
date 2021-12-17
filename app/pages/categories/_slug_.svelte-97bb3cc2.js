import{M as E,S as x,i as z,s as B,k,e as g,t as b,O as G,d as c,n as C,c as _,a as v,g as D,b as H,f as S,D as h,h as j,E as $}from"../../chunks/vendor-d06a5aec.js";function I(n){var y;let a,r,e,s,i=n[0].name+"",p,f,u,d=((y=n[0])==null?void 0:y.description)+"",m;return document.title=a=n[0].name,{c(){r=k(),e=g("div"),s=g("h1"),p=b(i),f=k(),u=g("p"),m=b(d),this.h()},l(t){G('[data-svelte="svelte-y2a7n4"]',document.head).forEach(c),r=C(t),e=_(t,"DIV",{class:!0});var o=v(e);s=_(o,"H1",{});var q=v(s);p=D(q,i),q.forEach(c),f=C(o),u=_(o,"P",{});var w=v(u);m=D(w,d),w.forEach(c),o.forEach(c),this.h()},h(){H(e,"class","text-center w-full")},m(t,l){S(t,r,l),S(t,e,l),h(e,s),h(s,p),h(e,f),h(e,u),h(u,m)},p(t,[l]){var o;l&1&&a!==(a=t[0].name)&&(document.title=a),l&1&&i!==(i=t[0].name+"")&&j(p,i),l&1&&d!==(d=((o=t[0])==null?void 0:o.description)+"")&&j(m,d)},i:$,o:$,d(t){t&&c(r),t&&c(e)}}}async function O(n){const a=new E.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),r=E.gql`
        query getCategory($slug: String!) {
          category(where: { slug: $slug }) {
            name,
            description
          }
        }
      `,e={slug:n.page.params.slug},{category:s}=await a.request(r,e);return{props:{category:s}}}function L(n,a,r){let{category:e}=a;return n.$$set=s=>{"category"in s&&r(0,e=s.category)},[e]}class P extends x{constructor(a){super();z(this,a,L,I,B,{category:0})}}export{P as default,O as load};
