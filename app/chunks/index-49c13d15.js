import{S as J,i as K,s as L,e as u,t as k,k as w,c as h,a as v,g as B,d as f,n as P,b as n,f as M,D as t,h as S,E as G}from"./vendor-d06a5aec.js";function N(i){let a,e,r,o,m=i[0].title+"",y,q,_,p=i[0].excerpt+"",b,A,g,C,c,x=i[0].author.name+"",D,H,E=i[0].date+"",I,V;return{c(){a=u("a"),e=u("div"),r=u("div"),o=u("h2"),y=k(m),q=w(),_=u("p"),b=k(p),A=w(),g=u("p"),C=w(),c=u("div"),D=k(x),H=w(),I=k(E),this.h()},l(s){a=h(s,"A",{href:!0,class:!0});var l=v(a);e=h(l,"DIV",{class:!0});var d=v(e);r=h(d,"DIV",{class:!0});var T=v(r);o=h(T,"H2",{class:!0});var z=v(o);y=B(z,m),z.forEach(f),T.forEach(f),q=P(d),_=h(d,"P",{class:!0});var F=v(_);b=B(F,p),F.forEach(f),A=P(d),g=h(d,"P",{class:!0}),v(g).forEach(f),C=P(d),c=h(d,"DIV",{class:!0});var j=v(c);D=B(j,x),H=P(j),I=B(j,E),j.forEach(f),d.forEach(f),l.forEach(f),this.h()},h(){n(o,"class","text-xl text-gray-800 font-medium mr-auto svelte-1xt5o4d"),n(r,"class","flex items-center"),n(_,"class","text-sm text-gray-700 mt-4"),n(g,"class","text-gray-600 font-semibold tracking-tighter"),n(c,"class","flex items-center justify-end mt-1 top-auto"),n(e,"class","w-full md:w-2/3 px-5 py-2 my-5 bg-gray-200 rounded-lg"),n(a,"href",V="/blog/"+i[0].slug),n(a,"class","svelte-1xt5o4d")},m(s,l){M(s,a,l),t(a,e),t(e,r),t(r,o),t(o,y),t(e,q),t(e,_),t(_,b),t(e,A),t(e,g),t(e,C),t(e,c),t(c,D),t(c,H),t(c,I)},p(s,[l]){l&1&&m!==(m=s[0].title+"")&&S(y,m),l&1&&p!==(p=s[0].excerpt+"")&&S(b,p),l&1&&x!==(x=s[0].author.name+"")&&S(D,x),l&1&&E!==(E=s[0].date+"")&&S(I,E),l&1&&V!==(V="/blog/"+s[0].slug)&&n(a,"href",V)},i:G,o:G,d(s){s&&f(a)}}}function O(i,a,e){let{post:r}=a;return i.$$set=o=>{"post"in o&&e(0,r=o.post)},[r]}class R extends J{constructor(a){super();K(this,a,O,N,L,{post:0})}}export{R as B};
