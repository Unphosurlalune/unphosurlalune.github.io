import{M as S,S as O,i as Q,s as V,e as k,j as T,k as w,c as q,a as j,m as I,n as E,d as h,f as x,o as U,D as d,x as y,u as B,v as z,t as A,O as F,g as H,b as J,h as K,w as R,N as W,r as X}from"../../chunks/vendor-d06a5aec.js";import{B as Y}from"../../chunks/index-49c13d15.js";import{P as Z}from"../../chunks/pageTitle-5e6b7128.js";function G(i,s,n){const t=i.slice();return t[1]=s[n],t}function M(i){let s,n,t,o;return n=new Y({props:{post:i[1]}}),{c(){s=k("li"),T(n.$$.fragment),t=w()},l(c){s=q(c,"LI",{});var u=j(s);I(n.$$.fragment,u),t=E(u),u.forEach(h)},m(c,u){x(c,s,u),U(n,s,null),d(s,t),o=!0},p(c,u){const g={};u&1&&(g.post=c[1]),n.$set(g)},i(c){o||(y(n.$$.fragment,c),o=!0)},o(c){B(n.$$.fragment,c),o=!1},d(c){c&&h(s),z(n)}}}function ee(i){var C,D;let s,n,t,o,c,u,g=((C=i[0])==null?void 0:C.description)+"",b,P,p,_;document.title=s=i[0].name,o=new Z({props:{title:i[0].name}});let m=(D=i[0])==null?void 0:D.posts,a=[];for(let e=0;e<m.length;e+=1)a[e]=M(G(i,m,e));const N=e=>B(a[e],1,1,()=>{a[e]=null});return{c(){n=w(),t=k("div"),T(o.$$.fragment),c=w(),u=k("p"),b=A(g),P=w(),p=k("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){F('[data-svelte="svelte-af86ub"]',document.head).forEach(h),n=E(e),t=q(e,"DIV",{class:!0});var f=j(t);I(o.$$.fragment,f),c=E(f),u=q(f,"P",{});var $=j(u);b=H($,g),$.forEach(h),P=E(f),p=q(f,"UL",{});var v=j(p);for(let l=0;l<a.length;l+=1)a[l].l(v);v.forEach(h),f.forEach(h),this.h()},h(){J(t,"class","text-center w-full")},m(e,r){x(e,n,r),x(e,t,r),U(o,t,null),d(t,c),d(t,u),d(u,b),d(t,P),d(t,p);for(let f=0;f<a.length;f+=1)a[f].m(p,null);_=!0},p(e,[r]){var $,v;(!_||r&1)&&s!==(s=e[0].name)&&(document.title=s);const f={};if(r&1&&(f.title=e[0].name),o.$set(f),(!_||r&1)&&g!==(g=(($=e[0])==null?void 0:$.description)+"")&&K(b,g),r&1){m=(v=e[0])==null?void 0:v.posts;let l;for(l=0;l<m.length;l+=1){const L=G(e,m,l);a[l]?(a[l].p(L,r),y(a[l],1)):(a[l]=M(L),a[l].c(),y(a[l],1),a[l].m(p,null))}for(X(),l=m.length;l<a.length;l+=1)N(l);R()}},i(e){if(!_){y(o.$$.fragment,e);for(let r=0;r<m.length;r+=1)y(a[r]);_=!0}},o(e){B(o.$$.fragment,e),a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)B(a[r]);_=!1},d(e){e&&h(n),e&&h(t),z(o),W(a,e)}}}async function le(i){const s=new S.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckwjhq3s82koy01zed0peabn6/master",{headers:{}}),n=S.gql`
			query getCategory($slug: String!) {
				category(where: { slug: $slug }) {
					name
					description
					posts {
						... on Post {
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
				}
			}
		`,t={slug:i.page.params.slug},{category:o}=await s.request(n,t);return{props:{category:o}}}function te(i,s,n){let{category:t}=s;return i.$$set=o=>{"category"in o&&n(0,t=o.category)},[t]}class oe extends O{constructor(s){super();Q(this,s,te,ee,V,{category:0})}}export{oe as default,le as load};
