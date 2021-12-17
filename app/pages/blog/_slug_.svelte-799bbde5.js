import{M as K,S as W,i as X,s as Y,k as P,e as k,t as $,P as Z,O as x,d as u,n as y,c as b,a as D,g as z,Q as tt,b as et,f as N,D as s,h as B,E as R}from"../../chunks/vendor-d06a5aec.js";function at(l){var O,T,U,V,A,F;let n,i,t,o,h=l[0].title+"",H,G,c,p=((T=(O=l[0])==null?void 0:O.author)==null?void 0:T.name)+"",Q,I,d,m=((U=l[0])==null?void 0:U.date)+"",S,L,_,f=((V=l[0])==null?void 0:V.tags)+"",j,M,v,C=((F=(A=l[0])==null?void 0:A.content)==null?void 0:F.html)+"";return document.title=n=l[0].title,{c(){i=P(),t=k("div"),o=k("h1"),H=$(h),G=P(),c=k("p"),Q=$(p),I=P(),d=k("p"),S=$(m),L=P(),_=k("p"),j=$(f),M=P(),v=new Z,this.h()},l(e){x('[data-svelte="svelte-1vu1n7r"]',document.head).forEach(u),i=y(e),t=b(e,"DIV",{class:!0});var a=D(t);o=b(a,"H1",{});var g=D(o);H=z(g,h),g.forEach(u),G=y(a),c=b(a,"P",{});var q=D(c);Q=z(q,p),q.forEach(u),I=y(a),d=b(a,"P",{});var w=D(d);S=z(w,m),w.forEach(u),L=y(a),_=b(a,"P",{});var E=D(_);j=z(E,f),E.forEach(u),M=y(a),v=tt(a),a.forEach(u),this.h()},h(){v.a=null,et(t,"class","text-center w-full")},m(e,r){N(e,i,r),N(e,t,r),s(t,o),s(o,H),s(t,G),s(t,c),s(c,Q),s(t,I),s(t,d),s(d,S),s(t,L),s(t,_),s(_,j),s(t,M),v.m(C,t)},p(e,[r]){var a,g,q,w,E,J;r&1&&n!==(n=e[0].title)&&(document.title=n),r&1&&h!==(h=e[0].title+"")&&B(H,h),r&1&&p!==(p=((g=(a=e[0])==null?void 0:a.author)==null?void 0:g.name)+"")&&B(Q,p),r&1&&m!==(m=((q=e[0])==null?void 0:q.date)+"")&&B(S,m),r&1&&f!==(f=((w=e[0])==null?void 0:w.tags)+"")&&B(j,f),r&1&&C!==(C=((J=(E=e[0])==null?void 0:E.content)==null?void 0:J.html)+"")&&v.p(C)},i:R,o:R,d(e){e&&u(i),e&&u(t)}}}async function nt(l){const n=new K.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),i=K.gql`
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
