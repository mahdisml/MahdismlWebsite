var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function l(){return t=" ",document.createTextNode(t);var t}function u(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}let d;function f(t){d=t}const p=[],m=[],h=[],g=[],$=Promise.resolve();let v=!1;function y(t){h.push(t)}function b(){const t=new Set;do{for(;p.length;){const t=p.shift();f(t),x(t.$$)}for(;m.length;)m.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];t.has(n)||(n(),t.add(n))}h.length=0}while(p.length);for(;g.length;)g.pop()();v=!1}function x(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(y))}const _=new Set;function w(t,e){t.$$.dirty||(p.push(t),v||(v=!0,$.then(b)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function k(a,c,i,s,l,u){const p=d;f(a);const m=c.props||{},h=a.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:null};let g=!1;var $,v,x;h.ctx=i?i(a,m,(t,e,n=e)=>(h.ctx&&l(h.ctx[t],h.ctx[t]=n)&&(h.bound[t]&&h.bound[t](n),g&&w(a,t)),e)):m,h.update(),g=!0,o(h.before_update),h.fragment=s(h.ctx),c.target&&(c.hydrate?h.fragment.l((x=c.target,Array.from(x.childNodes))):h.fragment.c(),c.intro&&(($=a.$$.fragment)&&$.i&&(_.delete($),$.i(v))),function(t,n,a){const{fragment:c,on_mount:i,on_destroy:s,after_update:l}=t.$$;c.m(n,a),y(()=>{const n=i.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(y)}(a,c.target,c.anchor),b()),f(p)}class M{$destroy(){var e,n;n=1,(e=this).$$.fragment&&(o(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function E(e){var n,o,r;return{c(){(n=s("div")).innerHTML='<img src="/images/logo.png" class="logo svelte-geah2a" alt="MahdiSml Logo">',o=l(),(r=s("div")).innerHTML='<div class="texts svelte-geah2a"><p>I\'m an (App,Game) Developer and Designer</p> <p>if you want see a professional and most advanced website , you must see <a href="./old/index.html" target="_blank">my old website</a></p> <p>new projects coming soon ...</p> <p align="center">email : mahdisml98@gmail.com</p> <p align="center"><a href="https://www.linkedin.com/in/mahdisml/" target="_blank">linkedin</a> - <a href="https://twitter.com/Mahdisml" target="_blank">twitter</a></p> <p align="center">© 2020 Mahdi Safarmohammadloo</p></div>',u(n,"class","logoDiv svelte-geah2a"),u(r,"class","mainDiv svelte-geah2a")},m(t,e){c(t,n,e),c(t,o,e),c(t,r,e)},p:t,i:t,o:t,d(t){t&&(i(n),i(o),i(r))}}}function S(t){var e=10;var n=setInterval(function(){e<1e3?(e++,document.documentElement.style.setProperty("--textsMaxWidth",e+"px")):clearInterval(n)},1);return{}}return new class extends M{constructor(t){super(),k(this,t,S,E,a,[])}}({target:document.body,props:{name:"MahdiSml"}})}();
//# sourceMappingURL=bundle.js.map
