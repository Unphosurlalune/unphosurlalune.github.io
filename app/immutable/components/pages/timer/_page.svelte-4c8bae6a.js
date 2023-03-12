import{S as q,i as v,s as H,k as T,q as b,a as S,l as _,r as D,c as B,b as n,A as y,h as u}from"../../../chunks/index-fc2358f4.js";function k(i){let t,l,s,a,r,m,o,p,M,w,I;return{c(){t=T("br"),l=b(`
Il est `),s=b(i[0]),a=S(),r=T("br"),m=b(`
It will be 2:30 in: `),o=b(i[1]),p=S(),M=T("br"),w=b(`
It will be 6:00 in: `),I=b(i[2])},l(e){t=_(e,"BR",{}),l=D(e,`
Il est `),s=D(e,i[0]),a=B(e),r=_(e,"BR",{}),m=D(e,`
It will be 2:30 in: `),o=D(e,i[1]),p=B(e),M=_(e,"BR",{}),w=D(e,`
It will be 6:00 in: `),I=D(e,i[2])},m(e,f){n(e,t,f),n(e,l,f),n(e,s,f),n(e,a,f),n(e,r,f),n(e,m,f),n(e,o,f),n(e,p,f),n(e,M,f),n(e,w,f),n(e,I,f)},p:y,i:y,o:y,d(e){e&&u(t),e&&u(l),e&&u(s),e&&u(a),e&&u(r),e&&u(m),e&&u(o),e&&u(p),e&&u(M),e&&u(w),e&&u(I)}}}function $(i){return i.toString().padStart(2,"0")}function R(i){let t=Math.floor(i/1e3),l=Math.floor(t/60),s=Math.floor(l/60);return t=t%60,l=l%60,s=s%24,`${$(s)}:${$(l)}:${$(t)}`}function A(i){Date.prototype.addDays=function(p){return this.setDate(this.getDate()+parseInt(p)),this};let t=new Date,l=new Date;l.addDays(1),l.setHours(2),l.setMinutes(30),l.setMilliseconds(0);let s=new Date;s.addDays(1),s.setHours(6),s.setMinutes(0),s.setMilliseconds(0);let a=l.getTime()-t.getTime(),r=R(a),m=s.getTime()-t.getTime(),o=R(m);return[t,r,o]}class P extends q{constructor(t){super(),v(this,t,A,k,H,{})}}export{P as default};
