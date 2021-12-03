import{O as w,S as Q,i as $,s as x,k,e as g,t as E,Q as z,d as c,n as C,c as _,a as v,g as S,b as B,f as j,F as h,h as D,G}from"../../chunks/vendor-07b9be69.js";function F(n){var y;let a,r,e,s,i=n[0].name+"",p,f,u,d=((y=n[0])==null?void 0:y.description)+"",m;return document.title=a=n[0].name,{c(){r=k(),e=g("div"),s=g("h1"),p=E(i),f=k(),u=g("p"),m=E(d),this.h()},l(t){z('[data-svelte="svelte-y2a7n4"]',document.head).forEach(c),r=C(t),e=_(t,"DIV",{class:!0});var o=v(e);s=_(o,"H1",{});var q=v(s);p=S(q,i),q.forEach(c),f=C(o),u=_(o,"P",{});var b=v(u);m=S(b,d),b.forEach(c),o.forEach(c),this.h()},h(){B(e,"class","text-center w-full")},m(t,l){j(t,r,l),j(t,e,l),h(e,s),h(s,p),h(e,f),h(e,u),h(u,m)},p(t,[l]){var o;l&1&&a!==(a=t[0].name)&&(document.title=a),l&1&&i!==(i=t[0].name+"")&&D(p,i),l&1&&d!==(d=((o=t[0])==null?void 0:o.description)+"")&&D(m,d)},i:G,o:G,d(t){t&&c(r),t&&c(e)}}}async function L(n){const a=new w.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),r=w.gql`
        query getCategory($slug: String!) {
          category(where: { slug: $slug }) {
            name,
            description
          }
        }
      `,e={slug:n.page.params.slug},{category:s}=await a.request(r,e);return{props:{category:s}}}function H(n,a,r){let{category:e}=a;return n.$$set=s=>{"category"in s&&r(0,e=s.category)},[e]}class O extends Q{constructor(a){super();$(this,a,H,F,x,{category:0})}}export{O as default,L as load};
