"use strict";(self.webpackChunkjustpasteit=self.webpackChunkjustpasteit||[]).push([[5936],{65936:function(e,n,t){t.d(n,{ZP:function(){return ae}});var r=t(70655),o=t(25108),i="3.3.6";function a(e,n){return new Promise((function(t){return setTimeout(t,e,n)}))}function c(e){return e&&"function"==typeof e.then}function u(e,n){try{var t=e();c(t)?t.then((function(e){return n(!0,e)}),(function(e){return n(!1,e)})):n(!0,t)}catch(e){n(!1,e)}}function l(e,n,t){return void 0===t&&(t=16),(0,r.mG)(this,void 0,void 0,(function(){var o,i,c;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:o=Date.now(),i=0,r.label=1;case 1:return i<e.length?(n(e[i],i),(c=Date.now())>=o+t?(o=c,[4,a(0)]):[3,3]):[3,4];case 2:r.sent(),r.label=3;case 3:return++i,[3,1];case 4:return[2]}}))}))}function s(e){e.then(void 0,(function(){}))}function d(e,n){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],n=[n[0]>>>16,65535&n[0],n[1]>>>16,65535&n[1]];var t=[0,0,0,0];return t[3]+=e[3]+n[3],t[2]+=t[3]>>>16,t[3]&=65535,t[2]+=e[2]+n[2],t[1]+=t[2]>>>16,t[2]&=65535,t[1]+=e[1]+n[1],t[0]+=t[1]>>>16,t[1]&=65535,t[0]+=e[0]+n[0],t[0]&=65535,[t[0]<<16|t[1],t[2]<<16|t[3]]}function m(e,n){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],n=[n[0]>>>16,65535&n[0],n[1]>>>16,65535&n[1]];var t=[0,0,0,0];return t[3]+=e[3]*n[3],t[2]+=t[3]>>>16,t[3]&=65535,t[2]+=e[2]*n[3],t[1]+=t[2]>>>16,t[2]&=65535,t[2]+=e[3]*n[2],t[1]+=t[2]>>>16,t[2]&=65535,t[1]+=e[1]*n[3],t[0]+=t[1]>>>16,t[1]&=65535,t[1]+=e[2]*n[2],t[0]+=t[1]>>>16,t[1]&=65535,t[1]+=e[3]*n[1],t[0]+=t[1]>>>16,t[1]&=65535,t[0]+=e[0]*n[3]+e[1]*n[2]+e[2]*n[1]+e[3]*n[0],t[0]&=65535,[t[0]<<16|t[1],t[2]<<16|t[3]]}function f(e,n){return 32===(n%=64)?[e[1],e[0]]:n<32?[e[0]<<n|e[1]>>>32-n,e[1]<<n|e[0]>>>32-n]:(n-=32,[e[1]<<n|e[0]>>>32-n,e[0]<<n|e[1]>>>32-n])}function h(e,n){return 0===(n%=64)?e:n<32?[e[0]<<n|e[1]>>>32-n,e[1]<<n]:[e[1]<<n-32,0]}function v(e,n){return[e[0]^n[0],e[1]^n[1]]}function b(e){return e=v(e,[0,e[0]>>>1]),e=v(e=m(e,[4283543511,3981806797]),[0,e[0]>>>1]),e=v(e=m(e,[3301882366,444984403]),[0,e[0]>>>1])}function p(e,n){n=n||0;var t,r=(e=e||"").length%16,o=e.length-r,i=[0,n],a=[0,n],c=[0,0],u=[0,0],l=[2277735313,289559509],s=[1291169091,658871167];for(t=0;t<o;t+=16)c=[255&e.charCodeAt(t+4)|(255&e.charCodeAt(t+5))<<8|(255&e.charCodeAt(t+6))<<16|(255&e.charCodeAt(t+7))<<24,255&e.charCodeAt(t)|(255&e.charCodeAt(t+1))<<8|(255&e.charCodeAt(t+2))<<16|(255&e.charCodeAt(t+3))<<24],u=[255&e.charCodeAt(t+12)|(255&e.charCodeAt(t+13))<<8|(255&e.charCodeAt(t+14))<<16|(255&e.charCodeAt(t+15))<<24,255&e.charCodeAt(t+8)|(255&e.charCodeAt(t+9))<<8|(255&e.charCodeAt(t+10))<<16|(255&e.charCodeAt(t+11))<<24],c=f(c=m(c,l),31),i=d(i=f(i=v(i,c=m(c,s)),27),a),i=d(m(i,[0,5]),[0,1390208809]),u=f(u=m(u,s),33),a=d(a=f(a=v(a,u=m(u,l)),31),i),a=d(m(a,[0,5]),[0,944331445]);switch(c=[0,0],u=[0,0],r){case 15:u=v(u,h([0,e.charCodeAt(t+14)],48));case 14:u=v(u,h([0,e.charCodeAt(t+13)],40));case 13:u=v(u,h([0,e.charCodeAt(t+12)],32));case 12:u=v(u,h([0,e.charCodeAt(t+11)],24));case 11:u=v(u,h([0,e.charCodeAt(t+10)],16));case 10:u=v(u,h([0,e.charCodeAt(t+9)],8));case 9:u=m(u=v(u,[0,e.charCodeAt(t+8)]),s),a=v(a,u=m(u=f(u,33),l));case 8:c=v(c,h([0,e.charCodeAt(t+7)],56));case 7:c=v(c,h([0,e.charCodeAt(t+6)],48));case 6:c=v(c,h([0,e.charCodeAt(t+5)],40));case 5:c=v(c,h([0,e.charCodeAt(t+4)],32));case 4:c=v(c,h([0,e.charCodeAt(t+3)],24));case 3:c=v(c,h([0,e.charCodeAt(t+2)],16));case 2:c=v(c,h([0,e.charCodeAt(t+1)],8));case 1:c=m(c=v(c,[0,e.charCodeAt(t)]),l),i=v(i,c=m(c=f(c,31),s))}return i=d(i=v(i,[0,e.length]),a=v(a,[0,e.length])),a=d(a,i),i=d(i=b(i),a=b(a)),a=d(a,i),("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)+("00000000"+(a[0]>>>0).toString(16)).slice(-8)+("00000000"+(a[1]>>>0).toString(16)).slice(-8)}function y(e){return parseInt(e)}function g(e){return parseFloat(e)}function w(e,n){return"number"==typeof e&&isNaN(e)?n:e}function L(e){return e.reduce((function(e,n){return e+(n?1:0)}),0)}function k(e,n){if(void 0===n&&(n=1),Math.abs(n)>=1)return Math.round(e/n)*n;var t=1/n;return Math.round(e*t)/t}function V(e){return e&&"object"==typeof e&&"message"in e?e:{message:e}}function Z(e){return"function"!=typeof e}function W(e,n,t){var o=Object.keys(e).filter((function(e){return!function(e,n){for(var t=0,r=e.length;t<r;++t)if(e[t]===n)return!0;return!1}(t,e)})),i=Array(o.length);return l(o,(function(t,r){i[r]=function(e,n){var t=new Promise((function(t){var r=Date.now();u(e.bind(null,n),(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=Date.now()-r;if(!e[0])return t((function(){return{error:V(e[1]),duration:o}}));var i=e[1];if(Z(i))return t((function(){return{value:i,duration:o}}));t((function(){return new Promise((function(e){var n=Date.now();u(i,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=o+Date.now()-n;if(!t[0])return e({error:V(t[1]),duration:i});e({value:t[1],duration:i})}))}))}))}))}));return s(t),function(){return t.then((function(e){return e()}))}}(e[t],n)})),function(){return(0,r.mG)(this,void 0,void 0,(function(){var e,n,t,c,u,d;return(0,r.Jh)(this,(function(m){switch(m.label){case 0:for(e={},n=0,t=o;n<t.length;n++)c=t[n],e[c]=void 0;u=Array(o.length),d=function(){var n;return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return n=!0,[4,l(o,(function(t,r){if(!u[r])if(i[r]){var o=i[r]().then((function(n){return e[t]=n}));s(o),u[r]=o}else n=!1}))];case 1:return t.sent(),n?[2,"break"]:[4,a(1)];case 2:return t.sent(),[2]}}))},m.label=1;case 1:return[5,d()];case 2:if("break"===m.sent())return[3,4];m.label=3;case 3:return[3,1];case 4:return[4,Promise.all(u)];case 5:return m.sent(),[2,e]}}))}))}}function X(){var e=window,n=navigator;return L(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in n,"msPointerEnabled"in n])>=4}function S(){var e=window,n=navigator;return L(["webkitPersistentStorage"in n,"webkitTemporaryStorage"in n,0===n.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5}function G(){var e=window,n=navigator;return L(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,0===n.vendor.indexOf("Apple"),"getStorageUpdates"in n,"WebKitMediaKeys"in e])>=4}function F(){var e=window;return L(["safari"in e,!("DeviceMotionEvent"in e),!("ongestureend"in e),!("standalone"in navigator)])>=3}function Y(){var e=document;return(e.exitFullscreen||e.msExitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen).call(e)}function C(){var e=S(),n=function(){var e,n,t=window;return L(["buildID"in navigator,"MozAppearance"in(null!==(n=null===(e=document.documentElement)||void 0===e?void 0:e.style)&&void 0!==n?n:{}),"onmozfullscreenchange"in t,"mozInnerScreenX"in t,"CSSMozDocumentRule"in t,"CanvasCaptureMediaStream"in t])>=4}();if(!e&&!n)return!1;var t=window;return L(["onorientationchange"in t,"orientation"in t,e&&!("SharedWorker"in t),n&&/android/i.test(navigator.appVersion)])>=2}function x(e){var n=new Error(e);return n.name=e,n}function R(e,n,t){var o,i,c;return void 0===t&&(t=50),(0,r.mG)(this,void 0,void 0,(function(){var u,l;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:u=document,r.label=1;case 1:return u.body?[3,3]:[4,a(t)];case 2:return r.sent(),[3,1];case 3:l=u.createElement("iframe"),r.label=4;case 4:return r.trys.push([4,,10,11]),[4,new Promise((function(e,t){var r=!1,o=function(){r=!0,e()};l.onload=o,l.onerror=function(e){r=!0,t(e)};var i=l.style;i.setProperty("display","block","important"),i.position="absolute",i.top="0",i.left="0",i.visibility="hidden",n&&"srcdoc"in l?l.srcdoc=n:l.src="about:blank",u.body.appendChild(l);var a=function(){var e,n;r||("complete"===(null===(n=null===(e=l.contentWindow)||void 0===e?void 0:e.document)||void 0===n?void 0:n.readyState)?o():setTimeout(a,10))};a()}))];case 5:r.sent(),r.label=6;case 6:return(null===(i=null===(o=l.contentWindow)||void 0===o?void 0:o.document)||void 0===i?void 0:i.body)?[3,8]:[4,a(t)];case 7:return r.sent(),[3,6];case 8:return[4,e(l,l.contentWindow)];case 9:return[2,r.sent()];case 10:return null===(c=l.parentNode)||void 0===c||c.removeChild(l),[7];case 11:return[2]}}))}))}function j(e){for(var n=function(e){for(var n,t,r="Unexpected syntax '"+e+"'",o=/^\s*([a-z-]*)(.*)$/i.exec(e),i=o[1]||void 0,a={},c=/([.:#][\w-]+|\[.+?\])/gi,u=function(e,n){a[e]=a[e]||[],a[e].push(n)};;){var l=c.exec(o[2]);if(!l)break;var s=l[0];switch(s[0]){case".":u("class",s.slice(1));break;case"#":u("id",s.slice(1));break;case"[":var d=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);if(!d)throw new Error(r);u(d[1],null!==(t=null!==(n=d[4])&&void 0!==n?n:d[5])&&void 0!==t?t:"");break;default:throw new Error(r)}}return[i,a]}(e),t=n[0],r=n[1],o=document.createElement(null!=t?t:"div"),i=0,a=Object.keys(r);i<a.length;i++){var c=a[i],u=r[c].join(" ");"style"===c?M(o.style,u):o.setAttribute(c,u)}return o}function M(e,n){for(var t=0,r=n.split(";");t<r.length;t++){var o=r[t],i=/^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);if(i){var a=i[1],c=i[2],u=i[4];e.setProperty(a,c,u||"")}}}var I=["monospace","sans-serif","serif"],J=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function A(e){return e.toDataURL()}var H,P;function N(){var e=this;return function(){if(void 0===P){var e=function(){var n=z();D(n)?P=setTimeout(e,2500):(H=n,P=void 0)};e()}}(),function(){return(0,r.mG)(e,void 0,void 0,(function(){var e;return(0,r.Jh)(this,(function(n){switch(n.label){case 0:return D(e=z())?H?[2,(0,r.pr)(H)]:(t=document).fullscreenElement||t.msFullscreenElement||t.mozFullScreenElement||t.webkitFullscreenElement?[4,Y()]:[3,2]:[3,2];case 1:n.sent(),e=z(),n.label=2;case 2:return D(e)||(H=e),[2,e]}var t}))}))}}function z(){var e=screen;return[w(g(e.availTop),null),w(g(e.width)-g(e.availWidth)-w(g(e.availLeft),0),null),w(g(e.height)-g(e.availHeight)-w(g(e.availTop),0),null),w(g(e.availLeft),null)]}function D(e){for(var n=0;n<4;++n)if(e[n])return!1;return!0}function T(e){var n;return(0,r.mG)(this,void 0,void 0,(function(){var t,o,i,c,u,l,s;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:for(t=document,o=t.createElement("div"),i=new Array(e.length),c={},B(o),s=0;s<e.length;++s)u=j(e[s]),B(l=t.createElement("div")),l.appendChild(u),o.appendChild(l),i[s]=u;r.label=1;case 1:return t.body?[3,3]:[4,a(50)];case 2:return r.sent(),[3,1];case 3:t.body.appendChild(o);try{for(s=0;s<e.length;++s)i[s].offsetParent||(c[e[s]]=!0)}finally{null===(n=o.parentNode)||void 0===n||n.removeChild(o)}return[2,c]}}))}))}function B(e){e.style.setProperty("display","block","important")}function O(e){return matchMedia("(inverted-colors: "+e+")").matches}function E(e){return matchMedia("(forced-colors: "+e+")").matches}function Q(e){return matchMedia("(prefers-contrast: "+e+")").matches}function _(e){return matchMedia("(prefers-reduced-motion: "+e+")").matches}function U(e){return matchMedia("(dynamic-range: "+e+")").matches}var K=Math,q=function(){return 0};var $={default:[],apple:[{font:"-apple-system-body"}],serif:[{fontFamily:"serif"}],sans:[{fontFamily:"sans-serif"}],mono:[{fontFamily:"monospace"}],min:[{fontSize:"1px"}],system:[{fontFamily:"system-ui"}]};var ee={fonts:function(){return R((function(e,n){var t=n.document,r=t.body;r.style.fontSize="48px";var o=t.createElement("div"),i={},a={},c=function(e){var n=t.createElement("span"),r=n.style;return r.position="absolute",r.top="0",r.left="0",r.fontFamily=e,n.textContent="mmMwWLliI0O&1",o.appendChild(n),n},u=I.map(c),l=function(){for(var e={},n=function(n){e[n]=I.map((function(e){return function(e,n){return c("'"+e+"',"+n)}(n,e)}))},t=0,r=J;t<r.length;t++){n(r[t])}return e}();r.appendChild(o);for(var s=0;s<I.length;s++)i[I[s]]=u[s].offsetWidth,a[I[s]]=u[s].offsetHeight;return J.filter((function(e){return n=l[e],I.some((function(e,t){return n[t].offsetWidth!==i[e]||n[t].offsetHeight!==a[e]}));var n}))}))},domBlockers:function(e){var n=(void 0===e?{}:e).debug;return(0,r.mG)(this,void 0,void 0,(function(){var e,t,i,a,c;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return G()||C()?(u=atob,e={abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",u("YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld"),'[title="ALIENBOLA" i]'],abpvn:["#quangcaomb",u("Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ="),".quangcao",u("W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=="),u("W2hyZWZePSJodHRwczovL3piZXQudm4vIl0=")],adBlockFinland:[".mainostila",u("LnNwb25zb3JpdA=="),".ylamainos",u("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),u("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],adBlockPersian:["#navbar_notice_50",".kadr",'TABLE[width="140px"]',"#divAgahi",u("I2FkMl9pbmxpbmU=")],adBlockWarningRemoval:["#adblock-honeypot",".adblocker-root",".wp_adblock_detect",u("LmhlYWRlci1ibG9ja2VkLWFk"),u("I2FkX2Jsb2NrZXI=")],adGuardAnnoyances:['amp-embed[type="zen"]',".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil"],adGuardBase:[".BetterJsPopOverlay",u("I2FkXzMwMFgyNTA="),u("I2Jhbm5lcmZsb2F0MjI="),u("I2FkLWJhbm5lcg=="),u("I2NhbXBhaWduLWJhbm5lcg==")],adGuardChinese:[u("LlppX2FkX2FfSA=="),u("YVtocmVmKj0iL29kMDA1LmNvbSJd"),u("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),".qq_nr_lad","#widget-quan"],adGuardFrench:[u("I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr"),"#pavePub",u("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),".mobile_adhesion",".widgetadv"],adGuardGerman:[u("LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=="),u("LmJveHN0YXJ0d2VyYnVuZw=="),u("LndlcmJ1bmcz"),u("YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0="),u("YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0=")],adGuardJapanese:["#kauli_yad_1",u("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),u("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),u("LmFkZ29vZ2xl"),u("LmFkX3JlZ3VsYXIz")],adGuardMobile:[u("YW1wLWF1dG8tYWRz"),u("LmFtcF9hZA=="),'amp-embed[type="24smi"]',"#mgid_iframe1",u("I2FkX2ludmlld19hcmVh")],adGuardRussian:[u("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),u("LnJlY2xhbWE="),'div[id^="smi2adblock"]',u("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),u("I2FkX3NxdWFyZQ==")],adGuardSocial:[u("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),u("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),".etsy-tweet","#inlineShare",".popup-social"],adGuardSpanishPortuguese:["#barraPublicidade","#Publicidade","#publiEspecial","#queTooltip",u("W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0=")],adGuardTrackingProtection:["#qoo-counter",u("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),u("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),u("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),"#top100counter"],adGuardTurkish:["#backkapat",u("I3Jla2xhbWk="),u("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),u("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),u("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],bulgarian:[u("dGQjZnJlZW5ldF90YWJsZV9hZHM="),"#ea_intext_div",".lapni-pop-over","#xenium_hot_offers",u("I25ld0Fk")],easyList:[u("I0FEX0NPTlRST0xfMjg="),u("LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy"),".universalboxADVBOX03",u("LmFkdmVydGlzZW1lbnQtNzI4eDkw"),u("LnNxdWFyZV9hZHM=")],easyListChina:[u("YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0="),u("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),u("LmZyb250cGFnZUFkdk0="),"#taotaole","#aafoot.top_box"],easyListCookie:["#AdaCompliance.app-notice",".text-center.rgpd",".panel--cookie",".js-cookies-andromeda",".elxtr-consent"],easyListCzechSlovak:["#onlajny-stickers",u("I3Jla2xhbW5pLWJveA=="),u("LnJla2xhbWEtbWVnYWJvYXJk"),".sklik",u("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],easyListDutch:[u("I2FkdmVydGVudGll"),u("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),".adstekst",u("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),"#semilo-lrectangle"],easyListGermany:[u("I0FkX1dpbjJkYXk="),u("I3dlcmJ1bmdzYm94MzAw"),u("YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd"),u("I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu"),u("YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0=")],easyListItaly:[u("LmJveF9hZHZfYW5udW5jaQ=="),".sb-box-pubbliredazionale",u("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),u("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),u("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],easyListLithuania:[u("LnJla2xhbW9zX3RhcnBhcw=="),u("LnJla2xhbW9zX251b3JvZG9z"),u("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),u("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),u("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],estonian:[u("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],fanboyAnnoyances:["#feedback-tab","#taboola-below-article",".feedburnerFeedBlock",".widget-feedburner-counter",'[title="Subscribe to our blog"]'],fanboyAntiFacebook:[".util-bar-module-firefly-visible"],fanboyEnhancedTrackers:[".open.pushModal","#issuem-leaky-paywall-articles-zero-remaining-nag","#sovrn_container",'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',".BlockNag__Card"],fanboySocial:[".td-tags-and-social-wrapper-box",".twitterContainer",".youtube-social",'a[title^="Like us on Facebook"]','img[alt^="Share on Digg"]'],frellwitSwedish:[u("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),u("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),"article.category-samarbete",u("ZGl2LmhvbGlkQWRz"),"ul.adsmodern"],greekAdBlock:[u("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),u("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),u("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),"DIV.agores300","TABLE.advright"],hungarian:["#cemp_doboz",".optimonk-iframe-container",u("LmFkX19tYWlu"),u("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),"#hirdetesek_box"],iDontCareAboutCookies:['.alert-info[data-block-track*="CookieNotice"]',".ModuleTemplateCookieIndicator",".o--cookies--container",".cookie-msg-info-container","#cookies-policy-sticky"],icelandicAbp:[u("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],latvian:[u("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),u("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],listKr:[u("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),u("I2xpdmVyZUFkV3JhcHBlcg=="),u("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),u("aW5zLmZhc3R2aWV3LWFk"),".revenue_unit_item.dable"],listeAr:[u("LmdlbWluaUxCMUFk"),".right-and-left-sponsers",u("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),u("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),u("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],listeFr:[u("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),u("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),u("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),".site-pub-interstitiel",'div[id^="crt-"][data-criteo-id]'],officialPolish:["#ceneo-placeholder-ceneo-12",u("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),u("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),u("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),u("ZGl2I3NrYXBpZWNfYWQ=")],ro:[u("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),'a[href^="/magazin/"]',u("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),u("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),u("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd")],ruAd:[u("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),u("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),u("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),"#pgeldiz",".yandex-rtb-block"],thaiAds:["a[href*=macau-uta-popup]",u("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),u("LmFkczMwMHM="),".bumq",".img-kosana"],webAnnoyancesUltralist:["#mod-social-share-2","#social-tools",u("LmN0cGwtZnVsbGJhbm5lcg=="),".zergnet-recommend",".yt.btn-link.btn-md.btn"]},t=Object.keys(e),[4,T((c=[]).concat.apply(c,t.map((function(n){return e[n]}))))]):[2,void 0];case 1:return i=r.sent(),n&&function(e,n){for(var t="DOM blockers debug:\n```",r=0,i=Object.keys(e);r<i.length;r++){var a=i[r];t+="\n"+a+":";for(var c=0,u=e[a];c<u.length;c++){var l=u[c];t+="\n  "+(n[l]?"🚫":"➡️")+" "+l}}o.log(t+"\n```")}(e,i),(a=t.filter((function(n){var t=e[n];return L(t.map((function(e){return i[e]})))>.6*t.length}))).sort(),[2,a]}var u}))}))},fontPreferences:function(){return function(e,n){void 0===n&&(n=4e3);return R((function(t,o){var i=o.document,a=i.body,c=a.style;c.width=n+"px",c.webkitTextSizeAdjust=c.textSizeAdjust="none",S()?a.style.zoom=""+1/o.devicePixelRatio:G()&&(a.style.zoom="reset");var u=i.createElement("div");return u.textContent=(0,r.pr)(Array(n/20<<0)).map((function(){return"word"})).join(" "),a.appendChild(u),e(i,a)}),'<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')}((function(e,n){for(var t={},r={},o=0,i=Object.keys($);o<i.length;o++){var a=i[o],c=$[a],u=c[0],l=void 0===u?{}:u,s=c[1],d=void 0===s?"mmMwWLliI0fiflO&1":s,m=e.createElement("span");m.textContent=d,m.style.whiteSpace="nowrap";for(var f=0,h=Object.keys(l);f<h.length;f++){var v=h[f],b=l[v];void 0!==b&&(m.style[v]=b)}t[a]=m,n.appendChild(e.createElement("br")),n.appendChild(m)}for(var p=0,y=Object.keys($);p<y.length;p++){r[a=y[p]]=t[a].getBoundingClientRect().width}return r}))},audio:function(){var e=window,n=e.OfflineAudioContext||e.webkitOfflineAudioContext;if(!n)return-2;if(G()&&!F()&&!function(){var e=window;return L(["DOMRectList"in e,"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3}())return-1;var t=new n(1,5e3,44100),r=t.createOscillator();r.type="triangle",r.frequency.value=1e4;var o=t.createDynamicsCompressor();o.threshold.value=-50,o.knee.value=40,o.ratio.value=12,o.attack.value=0,o.release.value=.25,r.connect(o),o.connect(t.destination),r.start(0);var i=function(e){var n=3,t=500,r=500,o=5e3,i=function(){};return[new Promise((function(a,c){var u=!1,l=0,s=0;e.oncomplete=function(e){return a(e.renderedBuffer)};var d=function(){setTimeout((function(){return c(x("timeout"))}),Math.min(r,s+o-Date.now()))},m=function(){try{switch(e.startRendering(),e.state){case"running":s=Date.now(),u&&d();break;case"suspended":document.hidden||l++,u&&l>=n?c(x("suspended")):setTimeout(m,t)}}catch(e){c(e)}};m(),i=function(){u||(u=!0,s>0&&d())}})),i]}(t),a=i[0],c=i[1],u=a.then((function(e){return function(e){for(var n=0,t=0;t<e.length;++t)n+=Math.abs(e[t]);return n}(e.getChannelData(0).subarray(4500))}),(function(e){if("timeout"===e.name||"suspended"===e.name)return-3;throw e}));return s(u),function(){return c(),u}},screenFrame:function(){var e=this,n=N();return function(){return(0,r.mG)(e,void 0,void 0,(function(){var e,t;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return[4,n()];case 1:return e=r.sent(),[2,[(t=function(e){return null===e?null:k(e,10)})(e[0]),t(e[1]),t(e[2]),t(e[3])]]}}))}))}},osCpu:function(){return navigator.oscpu},languages:function(){var e,n=navigator,t=[],r=n.language||n.userLanguage||n.browserLanguage||n.systemLanguage;if(void 0!==r&&t.push([r]),Array.isArray(n.languages))S()&&L([!("MediaSettingsRange"in(e=window)),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3||t.push(n.languages);else if("string"==typeof n.languages){var o=n.languages;o&&t.push(o.split(","))}return t},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return w(g(navigator.deviceMemory),void 0)},screenResolution:function(){var e=screen,n=function(e){return w(y(e),null)},t=[n(e.width),n(e.height)];return t.sort().reverse(),t},hardwareConcurrency:function(){return w(y(navigator.hardwareConcurrency),void 0)},timezone:function(){var e,n=null===(e=window.Intl)||void 0===e?void 0:e.DateTimeFormat;if(n){var t=(new n).resolvedOptions().timeZone;if(t)return t}var r,o=(r=(new Date).getFullYear(),-Math.max(g(new Date(r,0,1).getTimezoneOffset()),g(new Date(r,6,1).getTimezoneOffset())));return"UTC"+(o>=0?"+":"")+Math.abs(o)},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){var e,n;if(!(X()||(e=window,n=navigator,L(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in n,"msSaveBlob"in n])>=3&&!X())))try{return!!window.indexedDB}catch(e){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){var e=navigator.platform;return"MacIntel"===e&&G()&&!F()?function(){if("iPad"===navigator.platform)return!0;var e=screen,n=e.width/e.height;return L(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,n>.65&&n<1.53])>=2}()?"iPad":"iPhone":e},plugins:function(){var e=navigator.plugins;if(e){for(var n=[],t=0;t<e.length;++t){var r=e[t];if(r){for(var o=[],i=0;i<r.length;++i){var a=r[i];o.push({type:a.type,suffixes:a.suffixes})}n.push({name:r.name,description:r.description,mimeTypes:o})}}return n}},canvas:function(){var e,n,t=!1,r=function(){var e=document.createElement("canvas");return e.width=1,e.height=1,[e,e.getContext("2d")]}(),o=r[0],i=r[1];if(function(e,n){return!(!n||!e.toDataURL)}(o,i)){t=function(e){return e.rect(0,0,10,10),e.rect(2,2,6,6),!e.isPointInPath(5,5,"evenodd")}(i),function(e,n){e.width=240,e.height=60,n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(100,1,62,20),n.fillStyle="#069",n.font='11pt "Times New Roman"';var t="Cwm fjordbank gly "+String.fromCharCode(55357,56835);n.fillText(t,2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText(t,4,45)}(o,i);var a=A(o);a!==A(o)?e=n="unstable":(n=a,function(e,n){e.width=122,e.height=110,n.globalCompositeOperation="multiply";for(var t=0,r=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];t<r.length;t++){var o=r[t],i=o[0],a=o[1],c=o[2];n.fillStyle=i,n.beginPath(),n.arc(a,c,40,0,2*Math.PI,!0),n.closePath(),n.fill()}n.fillStyle="#f9c",n.arc(60,60,60,0,2*Math.PI,!0),n.arc(60,60,20,0,2*Math.PI,!0),n.fill("evenodd")}(o,i),e=A(o))}else e=n="";return{winding:t,geometry:e,text:n}},touchSupport:function(){var e,n=navigator,t=0;void 0!==n.maxTouchPoints?t=y(n.maxTouchPoints):void 0!==n.msMaxTouchPoints&&(t=n.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(n){e=!1}return{maxTouchPoints:t,touchEvent:e,touchStart:"ontouchstart"in window}},vendor:function(){return navigator.vendor||""},vendorFlavors:function(){for(var e=[],n=0,t=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];n<t.length;n++){var r=t[n],o=window[r];o&&"object"==typeof o&&e.push(r)}return e.sort()},cookiesEnabled:function(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var n=-1!==e.cookie.indexOf("cookietest=");return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",n}catch(e){return!1}},colorGamut:function(){for(var e=0,n=["rec2020","p3","srgb"];e<n.length;e++){var t=n[e];if(matchMedia("(color-gamut: "+t+")").matches)return t}},invertedColors:function(){return!!O("inverted")||!O("none")&&void 0},forcedColors:function(){return!!E("active")||!E("none")&&void 0},monochrome:function(){if(matchMedia("(min-monochrome: 0)").matches){for(var e=0;e<=100;++e)if(matchMedia("(max-monochrome: "+e+")").matches)return e;throw new Error("Too high value")}},contrast:function(){return Q("no-preference")?0:Q("high")||Q("more")?1:Q("low")||Q("less")?-1:Q("forced")?10:void 0},reducedMotion:function(){return!!_("reduce")||!_("no-preference")&&void 0},hdr:function(){return!!U("high")||!U("standard")&&void 0},math:function(){var e,n=K.acos||q,t=K.acosh||q,r=K.asin||q,o=K.asinh||q,i=K.atanh||q,a=K.atan||q,c=K.sin||q,u=K.sinh||q,l=K.cos||q,s=K.cosh||q,d=K.tan||q,m=K.tanh||q,f=K.exp||q,h=K.expm1||q,v=K.log1p||q;return{acos:n(.12312423423423424),acosh:t(1e308),acoshPf:(e=1e154,K.log(e+K.sqrt(e*e-1))),asin:r(.12312423423423424),asinh:o(1),asinhPf:function(e){return K.log(e+K.sqrt(e*e+1))}(1),atanh:i(.5),atanhPf:function(e){return K.log((1+e)/(1-e))/2}(.5),atan:a(.5),sin:c(-1e300),sinh:u(1),sinhPf:function(e){return K.exp(e)-1/K.exp(e)/2}(1),cos:l(10.000000000123),cosh:s(1),coshPf:function(e){return(K.exp(e)+1/K.exp(e))/2}(1),tan:d(-1e300),tanh:m(1),tanhPf:function(e){return(K.exp(2*e)-1)/(K.exp(2*e)+1)}(1),exp:f(1),expm1:h(1),expm1Pf:function(e){return K.exp(e)-1}(1),log1p:v(10),log1pPf:function(e){return K.log(1+e)}(10),powPI:function(e){return K.pow(K.PI,e)}(-100)}}};function ne(e){var n=function(e){if(C())return.4;if(G())return F()?.5:.3;var n=e.platform.value||"";if(/^Win/.test(n))return.6;if(/^Mac/.test(n))return.5;return.7}(e),t=function(e){return k(.99+.01*e,1e-4)}(n);return{score:n,comment:"$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g,""+t)}}function te(e){return JSON.stringify(e,(function(e,n){return n instanceof Error?(t=n,(0,r.pi)({name:t.name,message:t.message,stack:null===(o=t.stack)||void 0===o?void 0:o.split("\n")},t)):n;var t,o}),2)}function re(e){return p(function(e){for(var n="",t=0,r=Object.keys(e).sort();t<r.length;t++){var o=r[t],i=e[o],a=i.error?"error":JSON.stringify(i.value);n+=(n?"|":"")+o.replace(/([:|\\])/g,"\\$1")+":"+a}return n}(e))}function oe(e){return void 0===e&&(e=50),function(e,n){void 0===n&&(n=1/0);var t=window.requestIdleCallback;return t?new Promise((function(e){return t.call(window,(function(){return e()}),{timeout:n})})):a(Math.min(e,n))}(e,2*e)}function ie(e,n){var t=Date.now();return{get:function(a){return(0,r.mG)(this,void 0,void 0,(function(){var c,u,l;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return c=Date.now(),[4,e()];case 1:return u=r.sent(),l=function(e){var n;return{get visitorId(){return void 0===n&&(n=re(this.components)),n},set visitorId(e){n=e},confidence:ne(e),components:e,version:i}}(u),(n||(null==a?void 0:a.debug))&&o.log("Copy the text below to get the debug data:\n\n```\nversion: "+l.version+"\nuserAgent: "+navigator.userAgent+"\ntimeBetweenLoadAndGet: "+(c-t)+"\nvisitorId: "+l.visitorId+"\ncomponents: "+te(u)+"\n```"),[2,l]}}))}))}}}var ae={load:function(e){var n=void 0===e?{}:e,t=n.delayFallback,i=n.debug,a=n.monitoring,c=void 0===a||a;return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return c&&function(){if(!(window.__fpjs_d_m||Math.random()>=.001))try{var e=new XMLHttpRequest;e.open("get","https://m1.openfpcdn.io/fingerprintjs/v3.3.6/npm-monitoring",!0),e.send()}catch(e){o.error(e)}}(),[4,oe(t)];case 1:return e.sent(),[2,ie(W(ee,{debug:i},[]),i)]}}))}))},hashComponents:re,componentsToDebugString:te}},70655:function(e,n,t){t.d(n,{CR:function(){return a},Jh:function(){return i},ev:function(){return u},mG:function(){return o},pi:function(){return r},pr:function(){return c}});var r=function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)};function o(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))}function i(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function a(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}function c(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var i=arguments[n],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}function u(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}Object.create}}]);