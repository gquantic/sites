(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7533],{47121:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});n(67294);var i=n(40707),r=n(68915),s=n(11403),a=n.n(s),o=n(85893);var l=function(e){var t=e.show,n=e.children,s=(0,r.G)(),l=s.currentBreakpoint;return s.isInitialRender?(0,o.jsx)(o.Fragment,{children:t.map((function(e,t){return(0,o.jsx)("div",{className:a()[i.u[e]],children:n},t)}))}):null!==l&&t.includes(l)?n:null},d=l},30325:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(59499),r=(n(67294),n(86010)),s=n(86939),a=n.n(s),o=n(18377),l=n(85893);var d=function(e){var t=e.bordered,n=void 0===t||t,s=e.children,d=e.className,c=e.padding;return(0,l.jsx)(o.Z,{className:(0,r.Z)(a().footer,d,(0,i.Z)({},a().border,n)),sx:{padding:null!==c&&void 0!==c?c:"0px"},children:s})}},80525:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});n(67294);var i=n(14),r=n.n(i),s=n(99226),a=n(85893),o=function(e){var t=e.text,n=e.textColor,i=e.backgroundColor,r=e.padding,o=e.borderRadius;return(0,a.jsx)(s.Z,{component:"span",sx:{color:n,backgroundColor:i,padding:r,borderRadius:o,fontWeight:"700"},children:t})},l=n(86010);var d=function(e){var t=e.children,n=e.tiles,i=e.className,s=void 0===i?"":i,d=(0,l.Z)(r().cardImageContainer,s),c={bottomLeft:[],bottomRight:[],topLeft:[],topRight:[]};return n.forEach((function(e){c[e.position].push(e)})),(0,a.jsxs)("div",{className:d,children:[t,c.bottomLeft&&(0,a.jsx)("div",{className:r().bottomLeftContainer,children:c.bottomLeft.map((function(e){return(0,a.jsx)(o,{text:e.text,backgroundColor:e.backgroundColor,textColor:e.textColor,padding:e.padding,borderRadius:e.borderRadius},e.text)}))}),c.bottomRight&&(0,a.jsx)("div",{className:r().bottomRightContainer,children:c.bottomRight.map((function(e){return(0,a.jsx)(o,{text:e.text,backgroundColor:e.backgroundColor,textColor:e.textColor,padding:e.padding,borderRadius:e.borderRadius},e.text)}))}),c.topLeft&&(0,a.jsx)("div",{className:r().topLeftContainer,children:c.topLeft.map((function(e){return(0,a.jsx)(o,{text:e.text,backgroundColor:e.backgroundColor,textColor:e.textColor,padding:e.padding,borderRadius:e.borderRadius},e.text)}))}),c.topRight&&(0,a.jsx)("div",{className:r().topRightContainer,children:c.topRight.map((function(e){return(0,a.jsx)(o,{text:e.text,backgroundColor:e.backgroundColor,textColor:e.textColor,padding:e.padding,borderRadius:e.borderRadius},e.text)}))})]})}},50973:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(67294);var i=n(51123),r=n(71427),s=n(99226),a=n(85893);var o=function(e){var t=e.imageSrc,n=e.imageSrcDimensions,o=e.width,l=e.height,d=e.alt,c=e.fallbackSrc,u=e.className;return(0,a.jsx)(s.Z,{sx:{width:o,height:l,position:"relative"},className:u,children:(0,a.jsx)(i.E,{src:t,imageSrcDimensions:n,fallbackSrc:null!==c&&void 0!==c?c:r.Gv,layout:"fill",objectFit:"cover",alt:d})})}},21662:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(67294);var i=n(96339),r=n.n(i),s=n(86010),a=n(85893);var o=function(e){var t=e.children,n=e.className,i=(0,s.Z)([n,r().card]);return(0,a.jsx)("div",{className:i,children:t})}},24223:function(e,t,n){"use strict";var i=n(86010),r=n(84737),s=n.n(r),a=n(21662),o=n(85893);t.Z=function(e){var t=e.imageLoaderClassName,n=e.hasInfoLine;return(0,o.jsxs)(a.Z,{className:s().container,children:[(0,o.jsx)("div",{className:(0,i.Z)(s().imageLoader,t)}),(0,o.jsxs)("div",{className:(0,i.Z)(s().textContainer,s().loadWidth),children:[(0,o.jsx)("div",{className:(0,i.Z)(s().skeletonLine,s().medium)}),n&&(0,o.jsx)("div",{className:(0,i.Z)(s().skeletonLine,s().long)})]})]})}},4185:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var i=n(59499),r=n(4730),s=n(86010),a=n(84737),o=n.n(a),l=n(21662),d=n(64892),c=n(80525),u=n(50973),m=n(35523),v=n(85893),g=function(e){var t=e.imageHeight,n=e.imageWidth,i=e.imageSrc,r=e.tiles,a=e.statusLine,l=e.statusComponent,g=e.titleLine,p=e.infoLine,h=e.url,f=e.tComponent;return(0,v.jsxs)(d.Z,{className:o().link,tComponent:f,href:h,children:[r?(0,v.jsx)(c.Z,{tiles:r,children:(0,v.jsx)(u.Z,{imageSrc:i,width:n,height:t,alt:g,className:o().imageContainer})}):(0,v.jsx)(u.Z,{imageSrc:i,width:n,height:t,alt:g,className:o().imageContainer}),(0,v.jsxs)("div",{className:o().textContainer,children:[a&&(0,v.jsx)(m.Z,{size:"14px",weight:"medium",lineClamp:1,className:(0,s.Z)(a.className,o().marginBottom4),children:a.text}),l,(0,v.jsx)(m.Z,{size:"18px",weight:"bold",lineClamp:1,className:(0,s.Z)(o().title,o().marginBottom4),children:g}),p&&(0,v.jsx)(m.Z,{size:"14px",lineClamp:1,color:"darkgray",className:o().info,children:p})]})]})},p=["className","displayInCard"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var f=function(e){var t=e.className,n=e.displayInCard,a=void 0===n||n,d=(0,r.Z)(e,p),c=(0,v.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d));return a?(0,v.jsx)(l.Z,{className:(0,s.Z)(o().container,t),children:c}):c},_=f},17683:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=n(86010),r=n(35523),s=n(71007),a=n(53213),o=(JSON.parse('{"u":"RegistrationStatus"}').u,"RegistrationStatus.RegistrationClosingSoon"),l="RegistrationStatus.RegistrationOpen",d=n(74464),c=n.n(d),u=n(85893),m=function(e){var t=function(e,t){var n=e.isRegistrationOpen,r=e.registrationClosesAt,s=e.className,d=r&&a.Z.isWithinXHours(r,168);return n&&d?{text:t(o),containerClassName:(0,i.Z)(c().chip,c().regClosingSoon,s)}:n?{text:t(l),containerClassName:(0,i.Z)(c().chip,c().regOpen,s)}:null}(e,(0,s._)().t),n=e.fontSize,d=void 0===n?"14px":n;return t?(0,u.jsx)("div",{className:t.containerClassName,children:(0,u.jsx)(r.Z,{size:d,color:"white",weight:"bold",lineClamp:1,children:t.text})}):null}},42385:function(e,t,n){"use strict";var i=n(86010),r=n(82434),s=n.n(r),a=n(21662),o=n(30325),l=n(85893);t.Z=function(){return(0,l.jsxs)(a.Z,{className:s().cardLoader,children:[(0,l.jsxs)("div",{className:s().main,children:[(0,l.jsx)("div",{className:s().imageContainer,children:(0,l.jsx)("div",{className:s().imageLoader})}),(0,l.jsxs)("div",{className:s().info,children:[(0,l.jsx)("div",{className:(0,i.Z)(s().skeletonLine,s().reg)}),(0,l.jsx)("div",{className:(0,i.Z)(s().skeletonLine,s().short)}),(0,l.jsx)("div",{className:(0,i.Z)(s().skeletonLine,s().medium)}),(0,l.jsx)("div",{className:(0,i.Z)(s().skeletonLine,s().medium)})]})]}),(0,l.jsxs)(o.Z,{className:s().footerList,padding:"16px",children:[(0,l.jsx)("div",{className:s().eventRegion,children:(0,l.jsx)("div",{className:(0,i.Z)(s().skeletonLine,s().medium)})}),(0,l.jsx)("div",{className:s().eventList,children:(0,l.jsxs)("div",{className:(0,i.Z)(s().event,s().main),children:[(0,l.jsx)("div",{className:s().eventImageLoader}),(0,l.jsxs)("div",{className:s().eventTextLoaderContainer,children:[(0,l.jsx)("div",{className:(0,i.Z)(s().skeletonLine,s().short)}),(0,l.jsx)("div",{className:(0,i.Z)(s().skeletonLine,s().medium)})]})]})})]})]})}},67533:function(e,t,n){"use strict";n.d(t,{Z:function(){return Y}});var i=n(59499),r=n(4730),s=n(24762),a=n(42385),o=n(24223),l=n(67294),d=n(96486),c=n(86010),u=n(21662),m=n(50973),v=n(30325),g=n(64892),p=n(8129),h=p.Ki,f=n(35523),_=n(85302),x=n(20071),j=n(17683),y=n(691),b=n(71007),N=n(82876),L=(JSON.parse('{"u":"DistanceBetween"}').u,"DistanceBetween.distanceInKm"),O="DistanceBetween.distanceInMiles",C=n(21193),k=n(85893),Z=function(e){var t=e.fromLat,n=e.fromLng,i=e.toLat,r=e.toLng,s=e.className,a=(0,b._)().t,o=(0,C.b)(),c=(0,N.QQ)(o),u=(0,l.useMemo)((function(){return(0,d.isNil)(t)||(0,d.isNil)(n)||(0,d.isNil)(i)||(0,d.isNil)(r)?null:(0,y.Z)({latitude:t,longitude:n},{latitude:i,longitude:r})}),[t,n,i,r]);if(null===u)return null;var m=c?O:L,v=c?Math.ceil(u/1609.334):Math.ceil(u/1e3);return(0,k.jsx)(f.Z,{size:"18px",color:"darkgray",weight:"medium",fade:!0,className:s,children:a(m,{distance:v})})},S=(0,n(71773).Z)({displayName:"WidgetWithAroundLatLng",getProvidedProps:function(e,t,n){var i,r,s,a,o=null===(i=t.configure)||void 0===i?void 0:i.aroundLatLng;if(o)return{aroundLatLng:o};if(o=null===n||void 0===n||null===(r=n.results)||void 0===r?void 0:r.aroundLatLng)return{aroundLatLng:o};var l=null===(s=e.indexContextValue)||void 0===s?void 0:s.targetedIndex;return{aroundLatLng:o=null===n||void 0===n||null===(a=n.results[l])||void 0===a?void 0:a.aroundLatLng}}}),w=["aroundLatLng","indexName","onShow"];function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var D,R=S((function(e){var t=e.aroundLatLng,n=(e.indexName,e.onShow),s=(0,r.Z)(e,w);if((0,l.useEffect)((function(){n&&t&&n()}),[t,n]),!t)return null;var a=t.split(",").map((function(e){return parseFloat(e)}));return(0,k.jsx)(Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({fromLat:a[0],fromLng:a[1]},s))})),I=n(47121),E=n(74610),A=n(78004),F=n(3321),M=n(68915),T=n(40707),z=n(4185),W=n(82434),H=n.n(W),G=(JSON.parse('{"u":"TournamentListCard"}').u,"TournamentListCard.numAttendees"),q="TournamentListCard.moreEvents",B="TournamentListCard.numEvents",V="TournamentListCard.online",X=(D={},(0,i.Z)(D,T.u.SM,1),(0,i.Z)(D,T.u.MD,2),(0,i.Z)(D,T.u.LG,3),(0,i.Z)(D,T.u.XL,3),D),J=function(e){var t=e.tournament,n=e.variant,r=void 0===n?"lg":n,s=e.shouldShowDistanceNode,a=void 0===s||s,o=e.displayInCard,y=void 0===o||o,N=e.statusNode,L=(0,M.G)().currentBreakpoint,O=(0,b._)().t,C=(0,l.useState)(!1),Z=C[0],S=C[1];if(!t)return null;var w=t.name,P=t.url,D=t.locationDisplayName,W=t.isOnline,J=t.numAttendees,K=void 0===J?0:J,Q=t.registrationClosesAt,U=t.isRegistrationOpen,Y=t.events,$=void 0===Y?[]:Y,ee=t.images,te=void 0===ee?[]:ee,ne=t.lat,ie=t.lng,re=new _.Z(t).getDurationDateStr(),se=te.length>0?te[0].url:"",ae=W?O(V):D,oe=(0,d.get)(X,L,4),le=null===$||void 0===$?void 0:$.length,de=$?O(B,{numEvents:(null===$||void 0===$?void 0:$.length)||0}):"",ce=Math.max(0,le-oe),ue=A.NR.TournamentListCardLink;if("sm"===r){var me=(0,k.jsx)("span",{children:(0,k.jsxs)(p.tX,{children:[(0,k.jsx)("span",{children:re}),(0,k.jsx)("span",{children:ae}),(0,k.jsx)("span",{children:de})]})}),ve=a?(0,k.jsx)(R,{toLat:ne,toLng:ie,className:H().smallCardDistance,onShow:function(){return S(!0)}}):null;return(0,k.jsx)(z.Z,{className:(0,c.Z)((0,i.Z)({},H().smallCardHeight,Z)),imageHeight:"72px",imageWidth:"72px",imageSrc:se,titleLine:w,url:P,infoLine:me,tComponent:ue,statusComponent:(0,k.jsxs)(k.Fragment,{children:[ve,null!==N&&void 0!==N?N:(0,k.jsx)(j.Z,{fontSize:"12px",isRegistrationOpen:U,registrationClosesAt:Q,className:H().smRegStatus})]}),displayInCard:y})}var ge=a?(0,k.jsx)(R,{toLat:ne,toLng:ie}):null;return(0,k.jsx)(u.Z,{children:(0,k.jsxs)(g.Z,{href:P,underline:!1,tComponent:ue,children:[(0,k.jsxs)("div",{className:H().main,children:[(0,k.jsx)("div",{className:H().imageContainer,children:(0,k.jsx)(m.Z,{width:"124px",height:"124px",imageSrc:se,alt:w,className:H().image})}),(0,k.jsx)("div",{className:H().info,children:(0,k.jsxs)(h,{spacing:2,children:[(0,k.jsxs)(h,{spacing:.5,children:[(0,k.jsx)(I.Z,{show:[T.u.SM,T.u.MD],children:ge}),(0,k.jsx)(j.Z,{isRegistrationOpen:U,registrationClosesAt:Q}),(0,k.jsx)(f.Z,{size:"18px",weight:"bold",children:w})]}),(0,k.jsx)("div",{className:H().additionalInfo,children:(0,k.jsxs)(h,{children:[re&&(0,k.jsx)(x.Z,{icon:(0,k.jsx)(E.M6,{}),size:"14px",text:re}),ae&&(0,k.jsx)(x.Z,{icon:(0,k.jsx)(E.N2,{}),size:"14px",text:ae}),K>0&&(0,k.jsx)(x.Z,{icon:(0,k.jsx)(E.SS,{}),size:"14px",text:O(G,{numAttendees:K})})]})})]})}),(0,k.jsx)(I.Z,{show:[T.u.LG,T.u.XL],children:ge&&(0,k.jsx)("div",{className:H().distanceSection,children:ge})})]}),$&&(0,k.jsxs)(v.Z,{className:H().footerList,padding:"16px",children:[(0,k.jsx)("div",{className:H().eventRegion,children:(0,k.jsx)(x.Z,{icon:(0,k.jsx)(E.zq,{}),size:"14px",text:de})}),(0,k.jsxs)("div",{className:H().eventList,children:[$.map((function(e,t){return t<oe&&(0,k.jsx)("div",{className:H().event,children:(0,k.jsx)(F.ZP,{event:e,showEntityName:!1})},"event_".concat(t))})),ce>0&&(0,k.jsx)("div",{className:H().event,children:O(q,{numAdditionalEvents:ce})})]})]})]})})},K=["tournamentId","tournament","variant"];function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var U=function(e){var t=e.tournamentId,n=e.tournament,l=e.variant,d=(0,r.Z)(e,K),c=(0,s.rH)({variables:{tournamentId:t},skip:!!n}),u=c.loading,m=c.data;return u?"sm"===l?(0,k.jsx)(o.Z,{imageLoaderClassName:H().smImageLoader,hasInfoLine:!0}):(0,k.jsx)(a.Z,{}):(0,k.jsx)(J,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({tournament:null!==n&&void 0!==n?n:null===m||void 0===m?void 0:m.tournament,variant:l},d))},Y=U},15368:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var i=n(59499),r=(n(67294),n(41640)),s=n(81020),a=n.n(s),o=n(94184),l=n.n(o),d=n(17253),c=n(89574),u=n(85893);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=(0,c.ZL)()((function(e,t){var n=t.bordered,i={backgroundColor:e.palette.common.grey.dark};return n&&(i.border="".concat(2,"px solid ").concat(e.palette.common.grey.veryLight),i.borderRadius=e.shape.borderRadius+4),{root:i}})),p=(a().object.isRequired,a().string,{className:null}),h=function(e){var t=e.event,n=e.className,i=(t||{}).videogame,r=void 0===i?{}:i,s=r.name,a=r.images,o=g(e).classes,c=a&&a.find((function(e){return"primary"===e.type}));return(0,u.jsx)(d.qE,v(v({},e),{},{className:l()(o.root,n),variant:"rounded",src:c&&c.url,alt:s}))};h.defaultProps=p;var f=h;function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"EventAvatar"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"eventId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"event"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"eventId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"eventAvatar"},directives:[]}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"eventAvatar"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Event"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"videogame"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"StringValue",value:"primary",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:118,source:{body:'#import "./EventAvatar.fragment.gql"\n\nquery EventAvatar($eventId: ID!) {\n\tevent(id: $eventId) {\n\t\t...eventAvatar\n\t}\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}}}},y=x({},p);function b(e){var t=e.eventId,n=e.event,i=(0,r.Z)(j,{variables:{eventId:t},skip:!!n}),s=i.loading,a=(i.error,i.data);return s?null:(0,u.jsx)(f,x({event:n||a.event},e))}b.defaultProps=y;var N=b;N.pres=f;var L=N},3321:function(e,t,n){"use strict";n.d(t,{lG:function(){return g}});var i=n(81020),r=n.n(i),s=(n(67294),n(94184)),a=n.n(s),o=n(45042),l=n(15368),d=n(8129),c=n(17253),u=n(79845),m=n(89574),v=n(85893),g=(r().object.isRequired,r().string,r().bool,{avatarClassName:null,showEntityName:!0}),p=(0,m.ZL)()((function(e){return{avatar:{alignSelf:"center"},title:{color:e.palette.common.grey.midnight},details:{color:e.palette.common.grey.dark}}})),h=function(e){var t=p().classes,n=(0,u.Z)().translate,i=e.event,r=e.avatarClassName,s=e.showEntityName,m=void 0===s||s,g=i.name,h=i.type,f=i.videogame.name;return(0,v.jsxs)(o.V_,{contentLayout:"right",children:[(0,v.jsx)(o.pW,{className:a()(t.avatar,r),children:(0,v.jsx)(l.Z.pres,{event:i,height:"4rem",width:"3rem"})}),(0,v.jsx)(o.h8,{children:(0,v.jsx)(d.x$,{maxLines:1,children:(0,v.jsx)(c.ZT,{variant:"body16",className:t.title,children:g})})}),(0,v.jsx)(o.h8,{children:(0,v.jsx)(d.x$,{maxLines:1,children:(0,v.jsx)(c.ZT,{variant:"body2",className:t.details,children:(0,v.jsxs)(d.tX,{children:[m&&(0,v.jsx)("span",{children:n("EventType.displayName.".concat(h))}),(0,v.jsx)("span",{children:f})]})})})})]})};h.defaultProps=g,t.ZP=h},11403:function(e){e.exports={MD:"styles_MD__2wrpO",LG:"styles_LG__SF6I9",XL:"styles_XL__ZE3nO",SM:"styles_SM__FhGWA"}},86939:function(e){e.exports={footer:"style_footer__Corj4",border:"style_border__vevga"}},14:function(e){e.exports={cardImageContainer:"style_cardImageContainer__r5oLH",bottomLeftContainer:"style_bottomLeftContainer__JDGuL",bottomRightContainer:"style_bottomRightContainer__WCAwL",topLeftContainer:"style_topLeftContainer__Dtv5z",topRightContainer:"style_topRightContainer__prHqH"}},96339:function(e){e.exports={card:"style_card__r9Yn7"}},74464:function(e){e.exports={chip:"styles_chip__yPSlx",regClosingSoon:"styles_regClosingSoon__STAt_",regOpen:"styles_regOpen__yR3XL"}},84737:function(e){e.exports={container:"styles_container__jZu_j",textContainer:"styles_textContainer__4WyeP",imageLoader:"styles_imageLoader__Rz9OY",skeletonLine:"styles_skeletonLine__fRyqF","shine-lines-long":"styles_shine-lines-long__I3ltM",short:"styles_short__17dIH",long:"styles_long__wibl3",medium:"styles_medium__5UWis",storybookImageLoader:"styles_storybookImageLoader__oNnhS",storybookClosedColor:"styles_storybookClosedColor__SuCs_",link:"styles_link__KRXQ5",marginBottom4:"styles_marginBottom4__UCcoL",title:"styles_title__GretL",info:"styles_info__cxPRV",imageContainer:"styles_imageContainer__ivthn","shine-avatar":"styles_shine-avatar__mD0ZR","shine-lines":"styles_shine-lines__8wp8N","shine-lines-full-length":"styles_shine-lines-full-length__SBAhJ"}},82434:function(e){e.exports={additionalInfo:"styles_additionalInfo__fdNNk",imageContainer:"styles_imageContainer__EwtQL",main:"styles_main__kmjAO",info:"styles_info__m_tKe",smallCardHeight:"styles_smallCardHeight__225L7",smallCardDistance:"styles_smallCardDistance__sPggF",image:"styles_image__D9gSo",distanceSection:"styles_distanceSection__fJiMe",footerList:"styles_footerList__oDqu_",eventRegion:"styles_eventRegion___HwtO",eventList:"styles_eventList__U85s1",event:"styles_event__E8SIu",smImageLoader:"styles_smImageLoader__LDgXO",smRegStatus:"styles_smRegStatus__Ws6Ph",cardLoader:"styles_cardLoader___NYVe",imageLoader:"styles_imageLoader__hayZd",eventImageLoader:"styles_eventImageLoader__2N96u",eventTextLoaderContainer:"styles_eventTextLoaderContainer__jktDO",skeletonLine:"styles_skeletonLine__kdxxN","shine-lines-long":"styles_shine-lines-long__PjHjs",short:"styles_short__JhVFs",long:"styles_long__8EdmU",medium:"styles_medium__cCrSV",reg:"styles_reg__W_YWi","shine-avatar":"styles_shine-avatar__CvKu_","shine-lines":"styles_shine-lines__4937M","shine-lines-full-length":"styles_shine-lines-full-length__b8mee"}}}]);
//# sourceMappingURL=7533-9afc58dc8e7f57ef.js.map