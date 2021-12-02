import{N as K,S as W,i as X,s as Y,k as P,e as k,t as G,P as Z,M as x,d as u,n as y,c as b,a as H,g as $,Q as tt,b as et,f as O,F as s,h as z,G as R}from"../../chunks/vendor-60471919.js";function at(l){var M,N,T,U,V,A;let n,i,t,o,h=l[0].title+"",Q,B,c,p=((N=(M=l[0])==null?void 0:M.author)==null?void 0:N.name)+"",S,F,d,m=((T=l[0])==null?void 0:T.date)+"",j,I,_,f=((U=l[0])==null?void 0:U.tags)+"",C,L,v,D=((A=(V=l[0])==null?void 0:V.content)==null?void 0:A.html)+"";return document.title=n=l[0].title,{c(){i=P(),t=k("div"),o=k("h1"),Q=G(h),B=P(),c=k("p"),S=G(p),F=P(),d=k("p"),j=G(m),I=P(),_=k("p"),C=G(f),L=P(),v=new Z,this.h()},l(e){x('[data-svelte="svelte-1vu1n7r"]',document.head).forEach(u),i=y(e),t=b(e,"DIV",{class:!0});var a=H(t);o=b(a,"H1",{});var g=H(o);Q=$(g,h),g.forEach(u),B=y(a),c=b(a,"P",{});var q=H(c);S=$(q,p),q.forEach(u),F=y(a),d=b(a,"P",{});var w=H(d);j=$(w,m),w.forEach(u),I=y(a),_=b(a,"P",{});var E=H(_);C=$(E,f),E.forEach(u),L=y(a),v=tt(a),a.forEach(u),this.h()},h(){v.a=null,et(t,"class","text-center w-full")},m(e,r){O(e,i,r),O(e,t,r),s(t,o),s(o,Q),s(t,B),s(t,c),s(c,S),s(t,F),s(t,d),s(d,j),s(t,I),s(t,_),s(_,C),s(t,L),v.m(D,t)},p(e,[r]){var a,g,q,w,E,J;r&1&&n!==(n=e[0].title)&&(document.title=n),r&1&&h!==(h=e[0].title+"")&&z(Q,h),r&1&&p!==(p=((g=(a=e[0])==null?void 0:a.author)==null?void 0:g.name)+"")&&z(S,p),r&1&&m!==(m=((q=e[0])==null?void 0:q.date)+"")&&z(j,m),r&1&&f!==(f=((w=e[0])==null?void 0:w.tags)+"")&&z(C,f),r&1&&D!==(D=((J=(E=e[0])==null?void 0:E.content)==null?void 0:J.html)+"")&&v.p(D)},i:R,o:R,d(e){e&&u(i),e&&u(t)}}}async function nt(l){const n=new K.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),i=K.gql`
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
