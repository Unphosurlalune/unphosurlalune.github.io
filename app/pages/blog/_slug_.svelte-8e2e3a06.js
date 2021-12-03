import{O as K,S as W,i as X,s as Y,k as b,e as P,t as G,R as Z,Q as x,d as u,n as k,c as y,a as H,g as T,T as tt,b as et,f as M,F as s,h as $,G as N}from"../../chunks/vendor-07b9be69.js";function at(l){var L,O,R,U,V,A;let n,i,t,o,h=l[0].title+"",Q,z,c,p=((O=(L=l[0])==null?void 0:L.author)==null?void 0:O.name)+"",S,B,d,m=((R=l[0])==null?void 0:R.date)+"",j,F,_,f=((U=l[0])==null?void 0:U.tags)+"",C,I,v,D=((A=(V=l[0])==null?void 0:V.content)==null?void 0:A.html)+"";return document.title=n=l[0].title,{c(){i=b(),t=P("div"),o=P("h1"),Q=G(h),z=b(),c=P("p"),S=G(p),B=b(),d=P("p"),j=G(m),F=b(),_=P("p"),C=G(f),I=b(),v=new Z,this.h()},l(e){x('[data-svelte="svelte-1vu1n7r"]',document.head).forEach(u),i=k(e),t=y(e,"DIV",{class:!0});var a=H(t);o=y(a,"H1",{});var g=H(o);Q=T(g,h),g.forEach(u),z=k(a),c=y(a,"P",{});var q=H(c);S=T(q,p),q.forEach(u),B=k(a),d=y(a,"P",{});var w=H(d);j=T(w,m),w.forEach(u),F=k(a),_=y(a,"P",{});var E=H(_);C=T(E,f),E.forEach(u),I=k(a),v=tt(a),a.forEach(u),this.h()},h(){v.a=null,et(t,"class","text-center w-full")},m(e,r){M(e,i,r),M(e,t,r),s(t,o),s(o,Q),s(t,z),s(t,c),s(c,S),s(t,B),s(t,d),s(d,j),s(t,F),s(t,_),s(_,C),s(t,I),v.m(D,t)},p(e,[r]){var a,g,q,w,E,J;r&1&&n!==(n=e[0].title)&&(document.title=n),r&1&&h!==(h=e[0].title+"")&&$(Q,h),r&1&&p!==(p=((g=(a=e[0])==null?void 0:a.author)==null?void 0:g.name)+"")&&$(S,p),r&1&&m!==(m=((q=e[0])==null?void 0:q.date)+"")&&$(j,m),r&1&&f!==(f=((w=e[0])==null?void 0:w.tags)+"")&&$(C,f),r&1&&D!==(D=((J=(E=e[0])==null?void 0:E.content)==null?void 0:J.html)+"")&&v.p(D)},i:N,o:N,d(e){e&&u(i),e&&u(t)}}}async function nt(l){const n=new K.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),i=K.gql`
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
      `,t={slug:l.page.params.slug},{post:o}=await n.request(i,t);return{props:{post:o}}}function st(l,n,i){let{post:t}=n;return l.$$set=o=>{"post"in o&&i(0,t=o.post)},[t]}class ot extends W{constructor(n){super();X(this,n,st,at,Y,{post:0})}}export{ot as default,nt as load};
