(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{EhCa:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("jemY"),i=n("qKvR"),l=(o.a.createElement,function(e){var t=e.email;return Object(i.d)("div",null,Object(i.d)(r.a,{as:"javascript:void(0);?redirect=/emails/".concat(t.slug),className:"w-full",href:"javascript:void(0);?redirect=/emails/".concat(t.slug),size:"sm",variant:"primary"},"Sign Up"))}),c=function(){return Object(i.d)("div",{className:"flex items-center justify-between mx-auto w-full"},Object(i.d)("div",{className:"border-0 border-b border-gray-200 border-solid mb-6 pb-6 w-1/3"}),Object(i.d)("span",{className:"text-gray-500 text-sm"},"Or"),Object(i.d)("div",{className:"border-0 border-b border-gray-200 border-solid mb-6 pb-6 w-1/3"}))},s=function(e){var t=e.email;return Object(i.d)("div",null,Object(i.d)(r.a,{as:"javascript:void(0);?redirect=/emails/".concat(t.slug),className:"border-solid border-gray-200 w-full",href:"javascript:void(0);?redirect=/emails/".concat(t.slug),size:"sm",variant:"outline"},"Sign In"))};t.a=function(e){var t=e.email;return Object(i.d)(o.a.Fragment,null,Object(i.d)("div",{className:"mb-3"},Object(i.d)("p",{className:"font-normal leading-normal m-0 text-gray-500 text-sm"},"Collect inspiration for your design, copy, and email strategy.")),Object(i.d)(l,{email:t}),Object(i.d)(c,null),Object(i.d)(s,{className:"mb-3",email:t}))}},Iwa7:function(e,t,n){"use strict";var a=n("vJKn"),o=n.n(a),r=n("HALo"),i=n("rg98"),l=n("dhJC"),c=n("LvDl"),s=n("q1tI"),d=n.n(s),u=n("kQFM"),m=n("Y0Sb"),f=(n("Fozs"),n("jemY")),b=n("qMRc"),g=n("OPUJ"),h=n("qKvR"),v=(d.a.createElement,function(e){return Object(h.d)("svg",e,Object(h.d)("g",{fill:"currentColor",fillRule:"evenodd"},Object(h.d)("path",{d:"M12 5a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z"}),Object(h.d)("path",{d:"M19 12a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1z"})))});v.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},t.a=function(e){for(var t=e.email,n=(e.postSlug,e.children),a=Object(l.a)(e,["email","postSlug","children"]),p=Object(u.f)(),w=p.state,j=(p.actions,Object(s.useState)(!1)),O=j[0],y=j[1],x=Object(s.useState)(!1),S=x[0],E=x[1],k=!1,C=0,R=Object.values(w.library.collections);C<R.length;C++){var I=R[C];k||(k=Object(c.has)(I.posts,t.slug))}function z(){return(z=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.trackEmailAttemptToCollect(t,!!w.auth.user),w.auth.user?y(!0):E(!0);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){}),[]),Object(h.d)(d.a.Fragment,null,Object(h.d)(f.a,Object(r.a)({disabled:w.auth.authenticating,variant:k?"outline":"primary",onClick:function(){return z.apply(this,arguments)}},a,{size:"xs",leadingIcon:Object(h.d)(v,null)}),n||Object(h.d)(d.a.Fragment,null,k?" Email Saved":" Save Email")),S?Object(h.d)(b.a,{email:t,onClose:function(){return E(!1)}}):null,O?Object(h.d)(g.a,{email:t,onClose:function(){return y(!1)}}):null)}},OPUJ:function(e,t,n){"use strict";var a=n("qKvR"),o=n("q1tI"),r=n.n(o);var i=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"}))})),l=n("x0D+"),c=n("YFqc"),s=n.n(c),d=n("obyI"),u=n.n(d),m=n("XCdf"),f=n("kQFM"),b=n("jemY"),g=n("3FTO"),h=n("m+39"),v=n("ppKi"),p=n("EhCa"),w=n("Fozs");r.a.createElement;function j(e){var t=e.email;return t.categories?Object(a.d)("div",{className:"flex flex-col flex-wrap items-start mb-6 pb-2 border-0 border-b border-solid border-gray-200 sm:flex-row"},t.categories.map((function(e){return Object(a.d)(s.a,{key:e.id||e.slug,href:"/categories/[slug]",as:"/categories/".concat(e.id||e.slug),passHref:!0},Object(a.d)("a",{className:"inline-flex items-center mb-4 px-4 py-2 text-gray-700 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded transition-colors sm:mr-4"},e.name))}))):null}var O={name:"cxmp86",styles:"background-color:white;"},y={name:"1pf0x3y",styles:"width:100%;display:block;"};t.a=function(e){var t=e.email,n=e.onClose,c=Object(f.f)().state,s=Object(o.useRef)();Object(o.useEffect)((function(){return Object(l.disableBodyScroll)(s.current),function(){return Object(l.enableBodyScroll)(s.current)}}),[]);var d=t||{},x=d.originalWidth,S=void 0===x?680:x,E=d.originalHeight,k=void 0===E?1e3:E;return Object(a.d)(g.a,{onClose:n,className:"rounded-md overflow-hidden",css:O},Object(a.d)(w.a,null,Object(a.d)("div",{css:Object(a.c)({display:"flex",alignItems:"stretch",height:240/S*k+60,minHeight:360,maxHeight:"80vh","@media (max-width: 600px)":{height:"100vh"}},"")},t&&Object(a.d)("div",{css:Object(a.c)({flexShrink:0,width:300,height:"100%",padding:12,display:"flex",alignItems:"flex-start",background:m.k,"@media (max-width: 600px)":{display:"none"},overflowY:"auto"},"")},Object(a.d)("img",{src:u.a.emailImageRootUrl+t.slug+".png",role:"presentation",css:y,alt:t.slug})),Object(a.d)("div",{className:"bg-white flex flex-col h-full overflow-x-hidden overflow-y-auto p-3 w-full"},c.auth.profile?Object(a.d)(r.a.Fragment,null,Object(a.d)("h1",{className:"font-bold my-4 text-xl"},"Save this email to a collection"),Object(a.d)(h.b,{email:t,postSlug:t&&t.slug})):Object(a.d)(p.a,{email:t,postSlug:t&&t.slug}),Object(a.d)("div",{className:"flex flex-1 flex-col justify-end"},Object(a.d)("div",{className:"border-0 border-t border-solid border-gray-200 mt-6 pt-6"},t&&t.categories&&t.categories.length>0&&Object(a.d)(j,{email:t})),Object(a.d)("div",{className:"items-center flex flex-row justify-between mb-3"},Object(a.d)("span",{className:"text-xs"},"Share this email with friends"),Object(a.d)(v.a,{email:t})),Object(a.d)(b.a,{leadingIcon:Object(a.d)(i,null),href:t&&t.href||"/emails/[slug]",as:t&&t.as||"/emails/".concat(t&&t.slug),variant:"secondary"},"View more"))))))}},lJPB:function(e,t,n){"use strict";var a=n("qKvR"),o=n("q1tI"),r=n.n(o),i=n("XCdf"),l=n("zRuE");r.a.createElement;var c={name:"1iafvsn",styles:"overflow:hidden;position:relative;height:0;width:100%;padding-top:50%;"};t.a=function(e){var t=e.collection,n=[t.firstPost,t.secondPost,t.thirdPost].filter((function(e){return e}));return Object(a.d)("div",{css:c},Object(a.d)("div",{css:Object(a.c)({position:"absolute",top:0,left:0,right:0,minHeight:"100%",paddingTop:"5%",overflow:"hidden",display:"flex",alignItems:"flex-end",justifyContent:"center",backgroundColor:i.k,borderRadius:3,"@media (hover: hover)":{":hover":{boxShadow:"0 0 0 2px ".concat(i.l)}}},"")},n.map((function(e){return Object(a.d)("div",{key:e.email.slug,css:Object(a.c)({width:"28%",margin:"0 2%",height:"auto",boxShadow:"0 1px 2px 1px ".concat(i.m)},"")},Object(a.d)(l.a,{email:e.email}))}))))}},ppKi:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),o=n.n(a),r=n("obyI"),i=n.n(r);function l(e){var t=new URLSearchParams;return t.append("u","https://reallygoodemails.com/emails/"+(e&&e.slug)),t.append("quote",e&&e.title),"https://www.facebook.com/sharer/sharer.php?"+t.toString()}function c(e){var t=new URLSearchParams;return t.append("url","https://reallygoodemails.com/emails/"+(e&&e.slug)),t.append("media",i.a.emailImageRootUrl+(e&&e.slug)+".png"),t.append("description",e&&e.title),"https://www.pinterest.com/pin/create/button/?"+t.toString()}function s(e){var t=new URLSearchParams;return t.append("url","https://reallygoodemails.com/emails/"+(e&&e.slug)),t.append("text",e&&e.title),"https://twitter.com/intent/tweet?"+t.toString()}var d=n("/VHz"),u=n("qKvR"),m=(o.a.createElement,function(e){var t=e.email;return Object(u.d)("div",{className:"flex p-2 space-x-4"},Object(u.d)(d.a,{social:"twitter",href:s(t),onClick:function(){return analytics.trackEmailShared(t,"twitter")}}),Object(u.d)(d.a,{social:"facebook",href:l(t),onClick:function(){return analytics.trackEmailShared(t,"facebook")}}),Object(u.d)(d.a,{social:"pinterest",href:c(t),onClick:function(){return analytics.trackEmailShared(t,"pinterest")}}))})},qMRc:function(e,t,n){"use strict";var a=n("qKvR"),o=n("x0D+"),r=n("YFqc"),i=n.n(r),l=n("q1tI"),c=n.n(l),s=n("obyI"),d=n.n(s),u=n("XCdf"),m=n("Y0Sb"),f=n("CIUX"),b=n("3FTO");c.a.createElement;var g=function(e){return Object(a.d)("svg",e,Object(a.d)("g",{fill:"none",fillRule:"evenodd"},Object(a.d)("path",{d:"M.125 24.373V45.91c0 2.23 1.788 4.039 3.995 4.039h40.43c2.207 0 3.995-1.808 3.995-4.039V24.373c0-1.19-.51-2.261-1.321-3l-20.609-19.6c-1.428-1.347-3.744-1.348-5.172 0L1.419 21.394a4.064 4.064 0 0 0-1.294 2.98z",fill:"#FFF"}),Object(a.d)("path",{d:"M.582 24.07c-.007.1-.01.201-.01.303V45.91c0 .872.272 1.678.736 2.338l21.398-11.973L.582 24.069zm.764-2.089c.154-.212.328-.41.519-.588l20.024-19.62c1.428-1.348 3.744-1.347 5.173 0l20.608 19.6c.206.187.392.396.556.622L24.964 35.011 1.346 21.981zm3.22 27.968c-.48 0-.94-.086-1.365-.242L48.982 24.09c.006.094.01.188.01.283V45.91c0 2.23-1.788 4.039-3.995 4.039H4.566zm20.397-38.424c6.819 0 12.347 5.588 12.347 12.481 0 1.616-.304 3.16-.856 4.576l-11.49 6.43-11.447-6.316a12.565 12.565 0 0 1-.901-4.69c0-6.893 5.528-12.481 12.347-12.481zm0 19.36c-3.096 0-5.608-2.393-5.627-5.353H30.59c-.019 2.96-2.53 5.354-5.627 5.354zM19.576 23.4c.502 0 .908-.41.908-.918a.913.913 0 0 0-.908-.917.913.913 0 0 0-.908.917c0 .507.407.918.908.918zm10.774 0c.501 0 .908-.41.908-.918a.913.913 0 0 0-.908-.917.913.913 0 0 0-.908.917c0 .507.406.918.908.918z",fill:"#FF4C44"}),Object(a.d)("path",{d:"M.582 24.505c-.007.1-.01.201-.01.303v21.441c0 .867.272 1.67.735 2.327l21.357-11.92L.582 24.507zm46.104 25.346a3.944 3.944 0 0 1-1.774.418H4.558a3.95 3.95 0 0 1-1.362-.24l21.74-12.135 21.75 11.957z",fill:"#FF6863"})))};g.defaultProps={viewBox:"0 0 49 51",xmlns:"http://www.w3.org/2000/svg"};var h={name:"wo08gy",styles:"max-width:650px;background-color:white;"},v={name:"19t2ho9",styles:"display:flex;align-items:stretch;"},p={name:"1pf0x3y",styles:"width:100%;display:block;"},w={name:"1q41hym",styles:"width:100%;text-align:center;padding:50px 10px;"},j={name:"zp0eic",styles:"height:auto;width:50px;"},O={name:"1r2f04i",styles:"margin-bottom:10px;"};t.a=function(e){var t=e.email,n=e.action,r=void 0===n?"collect":n,c=e.onClose,s=Object(l.useRef)();return Object(l.useEffect)((function(){return m.trackPromptedToJoin(),Object(o.disableBodyScroll)(s.current),function(){return Object(o.enableBodyScroll)(s.current)}}),[]),Object(a.d)(b.a,{onClose:c,className:"rounded-md overflow-hidden",css:h},Object(a.d)("div",{ref:s,css:v},t&&Object(a.d)("div",{css:Object(a.c)({overflow:"hidden",flexShrink:0,padding:20,width:240,height:"100%",maxHeight:380,display:"flex",alignItems:"flex-start",background:u.k,"@media (max-width: 600px)":{display:"none"}},"")},Object(a.d)("img",{src:d.a.emailImageRootUrl+t.slug+".png",role:"presentation",css:p,alt:t.slug})),Object(a.d)("div",{css:w},Object(a.d)(g,{css:j}),Object(a.d)("h5",null,t?"To ".concat(r," this email, please sign in."):"Please sign in."),Object(a.d)(i.a,{href:"javascript:void(0);"},Object(a.d)(f.a,{kind:"primary",size:"large"},"Sign in to Really Good Emails")),Object(a.d)("br",null),Object(a.d)("br",null),Object(a.d)("p",{css:O},"Don\u2019t have an account?"),Object(a.d)(i.a,{href:"javascript:void(0);"},Object(a.d)(f.a,{kind:"outline",size:"large"},"Create a new account")))))}},"x0D+":function(e,t,n){var a,o,r;o=[t],void 0===(r="function"===typeof(a=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var a={get passive(){n=!0}};window.addEventListener("testPassive",null,a),window.removeEventListener("testPassive",null,a)}function o(e){return c.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))}function r(e){var t=e||window.event;return!!o(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)}function i(){setTimeout((function(){void 0!==m&&(document.body.style.paddingRight=m,m=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)}))}var l="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),c=[],s=!1,d=-1,u=void 0,m=void 0;e.disableBodyScroll=function(e,a){if(l){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!c.some((function(t){return t.targetElement===e}))){var i={targetElement:e,options:a||{}};c=[].concat(t(c),[i]),e.ontouchstart=function(e){1===e.targetTouches.length&&(d=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var n,a,i,l;1===t.targetTouches.length&&(a=e,l=(n=t).targetTouches[0].clientY-d,o(n.target)||(a&&0===a.scrollTop&&0<l||(i=a)&&i.scrollHeight-i.scrollTop<=i.clientHeight&&l<0?r(n):n.stopPropagation()))},s||(document.addEventListener("touchmove",r,n?{passive:!1}:void 0),s=!0)}}else{b=a,setTimeout((function(){if(void 0===m){var e=!!b&&!0===b.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(m=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}));var f={targetElement:e,options:a||{}};c=[].concat(t(c),[f])}var b},e.clearAllBodyScrollLocks=function(){l?(c.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),s&&(document.removeEventListener("touchmove",r,n?{passive:!1}:void 0),s=!1),c=[],d=-1):(i(),c=[])},e.enableBodyScroll=function(e){if(l){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,c=c.filter((function(t){return t.targetElement!==e})),s&&0===c.length&&(document.removeEventListener("touchmove",r,n?{passive:!1}:void 0),s=!1)}else(c=c.filter((function(t){return t.targetElement!==e}))).length||i()}})?a.apply(t,o):a)||(e.exports=r)}}]);