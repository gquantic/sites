(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3742],{97518:function(e,t,n){"use strict";var i=n(27458);t.Z=(0,i.Z)({})},90977:function(e,t,n){"use strict";var i=n(92777),a=n(82262),r=n(81531),l=n(63553),s=n(37247),o=n(59499),d=n(17253),c=n(67294),u=n(96486),m=n(94184),k=n.n(m),g=n(85893);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,s.Z)(e);if(t){var a=(0,s.Z)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,l.Z)(this,n)}}var p=function(e){(0,r.Z)(n,e);var t=v(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.props.title;(0,u.isString)(this.props.title)&&(e=(0,g.jsx)(d.ZT,{variant:"h5",component:"h3",className:"empty-state-header",children:this.props.title}));var t=k()("empty-state-container text-center",this.props.className||"");return(0,g.jsxs)("div",{className:t,children:[e,(0,g.jsx)("div",{children:this.props.message})]})}}]),n}(c.Component);(0,o.Z)(p,"defaultProps",{className:"",title:"",message:""}),t.Z=p},75809:function(e,t,n){"use strict";n.d(t,{X:function(){return j}});var i=n(59499),a=n(17674),r=n(4730),l=n(67294),s=n(43393),o=n(11214),d=n(96486),c=n(12273),u=n(90555),m=n(60926),k=n(37230),g=n(97518),v=n(96745),p=n(85893),f=["currentRoute"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AddGQLPaginationQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"client"},arguments:[]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"serializedParams"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:75,source:{body:"query AddGQLPaginationQuery {\n\tpagination @client {\n\t\tserializedParams\n\t}\n}",name:"GraphQL request",locationOffset:{line:1,column:1}}}},h={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateGQLPagination"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"payload"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"JSON"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updatePagination"},arguments:[{kind:"Argument",name:{kind:"Name",value:"payload"},value:{kind:"Variable",name:{kind:"Name",value:"payload"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"client"},arguments:[]}]}]}}],loc:{start:0,end:95,source:{body:"mutation UpdateGQLPagination($payload: JSON!) {\n\tupdatePagination(payload: $payload) @client\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},b={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"ClearGQLPagination"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"clearPagination"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"client"},arguments:[]}]}]}}],loc:{start:0,end:57,source:{body:"mutation ClearGQLPagination {\n\tclearPagination @client\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function j(e){var t={};if(!e||!e.length)return t;try{t=JSON.parse(e)}catch(n){return v.rs.handleError(n),t}return!t.search||t.search.searchString&&t.search.searchString.length||delete t.search,t}t.Z=function(e){return function(t){return(0,o.qC)(m.Z,(0,k.Z)((function(e){var t=e.currentRoute.toJS();return{currentRouteObj:t,routeQuery:(null===t||void 0===t?void 0:t.query)||{},baseUrl:u.Z.stripQueryParams(null===t||void 0===t?void 0:t.url)}})),(0,c.Z)(N,{dataMap:function(e,t,n){var i=e.pagination,a=n.defaultFilter,r=(n.currentRoute,(i||(0,s.Map)()).get("serializedParams","{}")),l={};try{l=JSON.parse(r)}catch(o){console.error("Malformed gql pagination params:",r)}return["sort","filter"].forEach((function(e){var t=l[e];if("string"===typeof t)try{l[e]=JSON.parse(t)}catch(o){console.error("Malformed query param: ".concat(e),t)}})),l.filter||(l.filter=a||{}),(0,d.omit)(l,["event","league","subleague","tournament"])}}),(0,c.Z)(h,{props:function(e){var t=e.mutate,n=e.ownProps;return{updateGQLPagination:function(e){return t({variables:{payload:S(S({},e),{},{routeQuery:n.routeQuery,baseUrl:n.baseUrl})}})}}}}),(0,c.Z)(b,{props:function(e){var t=e.mutate;return{clearGQLPagination:function(){return t()}}}}),function(e){var t=e.useLocalPagination;return function(e){return function(n){var i=n.currentRoute,o=(0,r.Z)(n,f);(0,l.useEffect)((function(){var e,t=null===(e=o.routeQuery)||void 0===e?void 0:e.filter;return t&&o.updateGQLPagination({filter:j(t)}),o.clearGQLPagination}),[o.baseUrl]),(0,l.useEffect)((function(){o.updateGQLPagination({page:i.getIn(["query","page"]),fromUrlChange:!0})}),[i.get("url")]);var d=o.pageInfo||(0,s.Map)(),c=d.get("page"),u=d.get("total"),m=d.get("totalPages");(0,l.useEffect)((function(){c&&c>1&&0===m&&0===u&&o.updateGQLPagination({baseUrl:o.baseUrl,page:1})}),[c,m,u]);var k=l.useState({page:1,filter:{}}),v=(0,a.Z)(k,2),y=v[0],N=v[1],h=t;return"function"===typeof t&&(h=t(o)),h?(0,p.jsx)(g.Z.Provider,{value:{localState:y,setLocalState:N},children:(0,p.jsx)(e,S(S(S({},o),y),{},{updateGQLPagination:N}))}):(0,p.jsx)(e,S({},o))}}}({useLocalPagination:e&&e.useLocalPagination}))(t)}}},3372:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var i=n(4730),a=n(59499),r=n(43393),l=n.n(r),s=n(67294),o=n(96486),d=n(97518),c=n(81448),u=n(75809),m=n(26002),k=n(11214),g=n(12315),v=n(12273),p=n(41074),f=n(92777),y=n(82262),S=n(10748),N=n(81531),h=n(63553),b=n(37247),j=n(34174),O=n(17253),P=n(41148),x=n.n(P),F=n(85893);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,b.Z)(e);if(t){var a=(0,b.Z)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,h.Z)(this,n)}}var R=function(e){(0,N.Z)(n,e);var t=D(n);function n(){var e;(0,f.Z)(this,n);for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return e=t.call.apply(t,[this].concat(l)),(0,a.Z)((0,S.Z)(e),"state",{errorMessage:null,keyProcessing:null,lastClicked:{id:null,selected:null}}),(0,a.Z)((0,S.Z)(e),"isBetween",(function(e,t,n){return(e-t)*(e-n)<=0})),(0,a.Z)((0,S.Z)(e),"toggleState",(function(t){return function(n){var i=(0,r.List)([t]),a=t.get("id"),l=e.props.isSelectedById,s=e.props.data;if(n.shiftKey){var d=s.findKey((function(t){return t.get("id")===e.state.lastClicked.id})),c=(0,o.isNumber)(d),u=s.findKey((function(e){return e.get("id")===a}));if(c&&l){var m=!l.get(a),k=s.filter((function(t,n){var i=e.props.getIsLocked(t),a=t.get("id"),r=(l.get(a)||!1)!==m,s=e.isBetween(n,u,d);return!i&&r&&s}));i=(0,r.List)(k)}}e.props.toggleSelections(e.props.multiSelectKey,i),e.setState({lastClicked:{id:a,selected:!l.get(a)}})}})),(0,a.Z)((0,S.Z)(e),"clearSelections",(function(){e.props.clearSelections(e.props.multiSelectKey),e.setState({lastClicked:{id:null,selected:null}})})),(0,a.Z)((0,S.Z)(e),"clearErrorMessage",(function(){e.setState({errorMessage:null})})),(0,a.Z)((0,S.Z)(e),"actionButtonClickHandler",(function(t){return function(){var n=t.onClick();n&&(e.setState({keyProcessing:t.key||"unspecified-key"}),n.then((function(t){e.setState({keyProcessing:null,errorMessage:(0,o.get)(t,["errors",0,"message"])||null})})))}})),e}return(0,y.Z)(n,[{key:"addSelectColumn",value:function(e){var t=this;return(e||(0,r.List)()).unshift((0,r.Map)({cell:function(e){var n=e.get("id");if(t.props.getIsLocked(e))return(0,F.jsx)("td",{className:x()["check-cell"],children:(0,F.jsx)(j.xu,{className:"fa fa-lock fa-2x"})},"check-".concat(n));var i=t.props.isSelectedById.get(n)?"fa-check-square-o":"fa-square-o";return(0,F.jsx)("td",{className:x()["check-cell"],children:(0,F.jsx)(j.Dr,{className:x()["check-button"],onClick:t.toggleState(e),children:(0,F.jsx)(j.xu,{className:"fa ".concat(i," fa-2x")})})},"check-".concat(n))}}))}},{key:"renderErrorState",value:function(){return(0,F.jsxs)("div",{className:x()["error-message-bar"],children:[(0,F.jsx)(j.xu,{className:"fa fa-2x fa-warning"}),(0,F.jsx)("div",{children:this.state.errorMessage}),(0,F.jsx)(j.zx,{className:"".concat(x()["clear-error-button"]," colorOverride"),size:"md",label:"Clear","aria-label":"Clear",onClick:this.clearErrorMessage,type:"custom"})]})}},{key:"renderActionBar",value:function(){var e=this;if(this.state.errorMessage)return this.renderErrorState();var t=this.props.isSelectedById.count();if(!t)return null;var n=!!this.state.keyProcessing,i=(this.props.actions||(0,r.List)()).map((function(t){var i=e.state.keyProcessing===t.key,a=!t.children&&i;return(0,F.jsx)(j.zx,I(I({},t),{},{onClick:e.actionButtonClickHandler(t),disabled:n,icon:a?(0,F.jsx)(j.xu,{className:"fa fa-circle-o-notch fa-spin"}):t.icon}))})).toArray(),a=this.props.translate("SelectableTable.numSelected--m^",{smart_count:t}),l=n?"outline":"inverted";return(0,F.jsxs)("div",{className:x()["action-bar"],children:[(0,F.jsx)(O.hE,{type:l,size:"md",children:i}),(0,F.jsx)("div",{className:x()["selection-text"],children:a}),(0,F.jsx)(j.zx,{className:x()["cancel-button"],size:"md",label:"Cancel",disabled:n,onClick:this.clearSelections,type:l})]})}},{key:"render",value:function(){var e=I(I({},this.props),{},{columnMeta:this.addSelectColumn(this.props.columnMeta)});return(0,F.jsxs)("div",{children:[this.renderActionBar(),(0,F.jsx)(j.iA,I({},e))]})}}]),n}(s.Component);(0,a.Z)(R,"defaultProps",{actions:(0,r.List)(),getIsLocked:function(){return!1},errorMessage:null,clearError:function(){},isSelectedById:(0,r.Map)()});var w=R,L=(0,k.qC)((0,v.Z)({kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SelectableTableComponent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"key"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"multiSelectState"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"key"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"client"},arguments:[]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"selections"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:121,source:{body:"query SelectableTableComponent($key: String!) {\n\tmultiSelectState(id: $key) @client {\n\t\tid\n\t\tselections {\n\t\t\tid\n\t\t}\n\t}\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},{options:function(e){return{variables:{key:e.multiSelectKey}}},dataMap:function(e){var t=e.multiSelectState,n=(void 0===t?(0,r.Map)():t).get("selections")||(0,r.List)();return{isSelectedById:g.Z.indexBy(n,"id").map((function(){return!0}))}}}),(0,v.Z)({kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"toggleSelections"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"key"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"items"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"JSON"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"toggleSelections"},arguments:[{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"key"}}},{kind:"Argument",name:{kind:"Name",value:"items"},value:{kind:"Variable",name:{kind:"Name",value:"items"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"client"},arguments:[]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:124,source:{body:"mutation toggleSelections($key: String!, $items: [JSON!]) {\n\ttoggleSelections(key: $key, items: $items) @client {\n\t\tid\n\t}\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},{props:function(e){var t=e.mutate;return{toggleSelections:function(e,n){return t({variables:{key:e,items:n}})}}}}),(0,v.Z)({kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"clearSelections"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"key"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"clearSelections"},arguments:[{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"key"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"client"},arguments:[]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:90,source:{body:"mutation clearSelections($key: String!) {\n\tclearSelections(key: $key) @client {\n\t\tid\n\t}\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},{props:function(e){var t=e.mutate;return{clearSelections:function(e){return t({variables:{key:e}})}}}}),(0,p.Z)())(w),C=n(8129),M=["children"],T=["useLocalPagination"];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(e){return(0,F.jsx)(d.Z.Consumer,{children:function(t){var n=t.localState,i=t.setLocalState;return(0,F.jsx)(B,A(A(A({},e),n),{},{updateGQLPagination:i}))}})},B=function(e){var t,n,a=e.pageInfo,r=e.data,d=e.columnMeta,u=e.isLoading,k=e.hasHeader,g=e.updateGQLPagination,v=e.onClickRow,p=e.emptyState,f=e.entityType,y=e.hidePaginationControl,S=void 0!==y&&y,N=e.isSelectable,h=void 0!==N&&N,b=e.actions,O=e.multiSelectKey,P=e.getIsLocked,x=a||l().Map(),Z=x.get("sortBy");if(Z){var I=Z.split(" ");t=I[0],n=I[1]}var D=function(e){return g({sortBy:e})},R={columnMeta:d.map((function(e){var i=e;if(e.has("canSort")){var a=e.get("sortDirection")||"DESC",r=e.get("sortField");r===t&&(a="ASC"!==n?"ASC":"DESC");var l="".concat(r," ").concat(a);i=(i=(i=i.set("onSort",(0,o.partial)(D,l))).set("sortDirection",a)).set("isSortedOn",r===t)}return i})),data:r,hasHeader:k,isLoading:u,rowRenderer:(0,m.Z)(v,!v),emptyState:p,actions:b,multiSelectKey:O,getIsLocked:P},w=R.columnMeta.map((function(e,t){return{Header:e.get("heading")||"",Cell:function(t){var n=e.get("cell")(l().fromJS(t.row.original));if("td"===n.type){var a=n.props,r=a.children,o=(0,i.Z)(a,M);return(0,F.jsx)("div",A(A({},o),{},{children:s.Children.toArray(r)}))}return n},accessor:e.get("sortField")||"".concat(t),sortField:e.get("sortField"),defaultCanSort:e.get("canSort"),disableSortBy:!e.get("canSort"),justifyHeader:e.get("justifyHeader")}})).toJS(),T={columns:w,data:(r||l().List()).toJS(),emptyState:R.emptyState,loading:R.isLoading};v&&(T.onRowClicked=function(e){v({},l().fromJS(e))});return h?(0,F.jsxs)(j.pN,{children:[(0,F.jsx)(L,A({},R)),S?null:(0,F.jsx)(c.Z,{entityType:f,pageInfo:x,updateGQLPagination:g})]}):(0,F.jsx)(C.by,A(A({},T),{},{onSort:function(e){return D(e)},pageInfo:x.toJS(),onChangePage:function(e){return g({page:e})}}))},q=(0,u.Z)()(B),E=function(e){var t=e.useLocalPagination,n=(0,i.Z)(e,T);return t?(0,F.jsx)(Q,A({},n)):(0,F.jsx)(q,A({},n))}},81448:function(e,t,n){"use strict";n(67294);var i=n(41074),a=n(34174),r=n(85428),l=n(85893),s=(0,i.Z)()((function(e){var t=e.pageInfo,n=e.translate,i=e.updateGQLPagination,s=e.entityType,o=t.get("page"),d=t.get("totalPages"),c=t.get("perPage"),u=t.get("total"),m=(0,l.jsx)(r.b,{translate:n,total:u,perPage:c,page:o,entityType:s});return(0,l.jsx)(a.GO,{currentPage:o,totalPages:d,label:m,onClick:function(e){return i({page:e})}})}));t.Z=s},85428:function(e,t,n){"use strict";n.d(t,{a:function(){return o},b:function(){return d}});n(67294);var i=n(26635),a=n(17253),r=n(27458),l=n(85893),s=(0,r.Z)(null),o=function(e){var t=e.message,n=e.children;return(0,l.jsx)(s.Provider,{value:t,children:n})},d=function(e){var t=e.translate,n=e.total,r=e.perPage,o=e.page,d=e.entityType;return(0,l.jsx)(s.Consumer,{children:function(e){var s=(0,i.Z)(t,n,r,o,d);return e?(0,l.jsx)(a.MZ,{message:e,placement:"top",children:(0,l.jsxs)("span",{children:[s,"*"]})}):s}})}},26635:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(82337);function a(e,t,n,a,r){if(t>0){var l=i.Z.withCommas,s=t<n?1:(a-1)*n+1,o=Math.min(s+n-1,t);return e("PaginationControl.label",{total:l(t),displayBegin:l(s),displayEnd:l(o),entityType:r})}return e("PaginationControl.noResults")}},18407:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return ee},default:function(){return te}});var i=n(59499),a=n(74896),r=n(92777),l=n(82262),s=n(10748),o=n(81531),d=n(63553),c=n(37247),u=n(67294),m=n(81020),k=n.n(m),g=n(43393),v=n(96486),p=n(34174),f=n(90773),y=n(48206),S=n(17253),N=n(12273),h=n(11668),b=n(53339),j=n(79538),O=n(64625),P=n(99428),x=n(54730),F=n(85893),Z={showing:!1,playerRank:(0,g.Map)(),onClose:function(){}};function I(e){var t=e.showing,n=e.onClose,i=e.playerRank,a=void 0===i?(0,g.Map)():i,r=e.playerRankId,l=e.fullSeriesSlug,s="/rankings/".concat(l,"/playerRank/").concat(r),o=a.get("videogameId"),d=(a.get("player")||(0,g.Map)()).get("id");return r&&d?(0,F.jsx)(x.Z,{id:"player-rank-modal",path:s,show:t,size:"",closeModal:n,modal:(0,F.jsxs)(p.u_,{children:[(0,F.jsx)(p.xB,{isFull:!0,children:(0,F.jsx)(j.Z,{playerId:d})}),(0,F.jsx)(p.hz,{isFull:!1,children:(0,F.jsxs)(p.pN,{useLegacyStyles:!0,size:"lg",className:"AttendeeDetail",children:[(0,F.jsx)(h.Z,{playerRankId:r,slug:l,onClickRow:n}),(0,F.jsx)(P.Z,{playerId:d,videogameId:o}),(0,F.jsx)(b.Z,{playerId:d}),(0,F.jsx)(O.Z,{playerId:d,playerRankId:r})]})})]})}):(0,F.jsx)("div",{})}I.defaultProps=Z;var D=(0,N.Z)({kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PlayerRankModal"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"playerRankId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playerRank"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"playerRankId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"videogameId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"player"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:122,source:{body:"query PlayerRankModal($playerRankId: ID!) {\n\tplayerRank(id: $playerRankId) {\n\t\tid\n\t\tvideogameId\n\t\tplayer {\n\t\t\tid\n\t\t}\n\t}\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},{options:function(e){return{variables:{playerRankId:e.playerRankId}}}})(I),R=n(11214),w=n(3372),L=n(83934),C=n(75809),M=n(41074),T=n(59040),V=n(26635),A={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"RankingIterationTable"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"iterationId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NamedType",name:{kind:"Name",value:"PlayerRankPageFilter"}},defaultValue:{kind:"ObjectValue",fields:[]},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"page"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"1"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sortBy"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},defaultValue:{kind:"StringValue",value:"rank ASC",block:!1},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"iteration"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"iterationId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"playerRanks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"query"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"page"},value:{kind:"Variable",name:{kind:"Name",value:"page"}}},{kind:"ObjectField",name:{kind:"Name",value:"perPage"},value:{kind:"IntValue",value:"50"}},{kind:"ObjectField",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}},{kind:"ObjectField",name:{kind:"Name",value:"sortBy"},value:{kind:"Variable",name:{kind:"Name",value:"sortBy"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalPages"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"page"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"perPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sortBy"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filter"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"rank"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"previousRank"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"player"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"playerAvatar"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"characterMains"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ratio"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isOriginal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"entityId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uploadedBy"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"playerAvatar"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Player"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gamerTag"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"twitchStream"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"twitterHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"profileAuthorization"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"MIXER"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalUsername"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"image"},directives:[]}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"image"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Image"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isOriginal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]}]}}],loc:{start:0,end:711,source:{body:'#import "gg-common/gql/fragments/domain/Player/playerAvatar.gql"\n\nquery RankingIterationTable(\n\t$iterationId: ID!\n\t$filter: PlayerRankPageFilter = {}\n\t$page: Int = 1\n\t$sortBy: String = "rank ASC"\n) {\n\titeration(id: $iterationId) {\n\t\tid\n\t\ttitle\n\t\tplayerRanks(\n\t\t\tquery: {\n\t\t\t\tpage: $page\n\t\t\t\tperPage: 50\n\t\t\t\tfilter: $filter\n\t\t\t\tsortBy: $sortBy\n\t\t\t}\n\t\t) {\n\t\t\tpageInfo {\n\t\t\t\ttotal\n\t\t\t\ttotalPages\n\t\t\t\tpage\n\t\t\t\tperPage\n\t\t\t\tsortBy\n\t\t\t\tfilter\n\t\t\t}\n\t\t\tnodes {\n\t\t\t\tid\n\t\t\t\trank\n\t\t\t\tpreviousRank\n\t\t\t\tplayer {\n\t\t\t\t\t...playerAvatar\n\t\t\t\t}\n\t\t\t\tcharacterMains {\n\t\t\t\t\tid\n\t\t\t\t\timages {\n\t\t\t\t\t\tid\n\t\t\t\t\t\twidth\n\t\t\t\t\t\theight\n\t\t\t\t\t\tratio\n\t\t\t\t\t\ttype\n\t\t\t\t\t\turl\n\t\t\t\t\t\tisOriginal\n\t\t\t\t\t\tentityId\n\t\t\t\t\t\tuploadedBy\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}}}},Q={onClickRow:v.noop,iteration:(0,g.Map)(),translate:v.noop};function B(e){var t,n,i=e.iteration,a=void 0===i?(0,g.Map)():i,r=e.onClickRow,l=e.translate,s=e.routeQuery,o=e.seriesSlug,d=e.apollo,c=e.gameSlug,u=a&&a.get("playerRanks")||(0,g.Map)(),m=u.get("nodes")||(0,g.List)(),k=u.get("pageInfo"),v=null===d||void 0===d||null===(t=d.forOperation)||void 0===t||null===(n=t.call(d,A))||void 0===n?void 0:n.loading,f=(0,F.jsx)("div",{children:l("RankingIterationTable.emptyState")});var y=(0,g.List)([(0,g.Map)({heading:l("RankingIterationTable.headings.ranking"),cell:function(e){return(0,F.jsx)("td",{children:(0,F.jsx)(S.ZT,{variant:"h5",component:"h3",children:e.get("rank")})},"rank-".concat(e.get("id")))}}),(0,g.Map)({heading:l("RankingIterationTable.headings.player"),cell:T.I$}),(0,g.Map)({heading:l("RankingIterationTable.headings.character"),cell:function(e){var t=(e.get("characterMains")||(0,g.Map)()).filter((function(e){return Boolean(e)})).map((function(e){var t=L.Z.getStockImageUrl(e)||L.Z.getImageUrl(e);return(0,F.jsx)("li",{children:(0,F.jsx)("img",{style:{width:"auto",height:"18px"},alt:e.get("name"),title:e.get("name"),src:t})},"character-".concat(e.get("id")))})).toArray();return(0,F.jsx)("td",{children:(0,F.jsx)("ul",{className:"list-inline-wrap list-unstyled no-margin",children:t})},"character-".concat(e.get("id")))}}),(0,g.Map)({heading:l("RankingIterationTable.headings.previousRank"),cell:function(e){var t=e.get("previousRank")||"-";return(0,F.jsx)("td",{children:(0,F.jsx)("p",{className:"small no-margin",children:t})},"previous-rank-".concat(e.get("id")))}}),(0,g.Map)({heading:l("RankingIterationTable.headings.movement"),cell:T.bu})]),N=k?(0,V.Z)(l,k.get("total"),k.get("perPage"),k.get("page"),l("entityType.players")):"",h="/rankings/".concat(c,"/series/").concat(o);return(0,F.jsxs)(p.pN,{useLegacyStyles:!0,size:"sm",children:[(0,F.jsx)("div",{children:(0,F.jsx)("span",{className:"gg-color-slate",children:N})}),(0,F.jsx)(w.Z,{entityType:l("entityType.players"),baseUrl:h,pageInfo:k,columnMeta:y,data:m,isLoading:v,routeQuery:s,onClickRow:r,emptyState:f})]})}B.defaultProps=Q;var q=(0,R.qC)((0,C.Z)(),(0,N.Z)(A,{options:function(e){return{variables:{iterationId:e.iterationId,page:e.page,filter:e.filter,sortBy:e.sortBy||"rank ASC"}}}}))(B),E=(0,M.Z)()(q),G=n(82774),$=n(18819),z=n(90977);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,d.Z)(this,n)}}var U={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"RankingSeriesPage"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"series"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"videogameId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"iterations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"publishedAt"},arguments:[],directives:[]}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"image"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Image"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isOriginal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]}]}}],loc:{start:0,end:245,source:{body:'#import "gg-common/gql/fragments/domain/Image/image.gql"\n\nquery RankingSeriesPage($slug: String!) {\n\tseries(slug: $slug) {\n\t\tid\n\t\tname\n\t\tslug\n\t\tvideogameId\n\t\timages {\n\t\t\t...image\n\t\t}\n\t\titerations {\n\t\t\tid\n\t\t\ttitle\n\t\t\tslug\n\t\t\tpublishedAt\n\t\t}\n\t}\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}}}},J=function(e){return e.replace(/.*iteration\//,"")},H=function(e){(0,o.Z)(n,e);var t=_(n);function n(e){var a;return(0,r.Z)(this,n),a=t.call(this,e),(0,i.Z)((0,s.Z)(a),"showModal",(function(e){a.setState({showModal:!0,playerRank:e})})),(0,i.Z)((0,s.Z)(a),"onIterationLinkClick",(function(e){var t=a.getFullSlug(e);a.props.navigate(t)})),(0,i.Z)((0,s.Z)(a),"getFullSlug",(function(e){var t=a.props,n=t.gameSlug,i=t.seriesSlug,r="/rankings/".concat(n,"/series/").concat(i);if(!e)return r;var l=J(e.get("slug"));return"".concat(r,"/").concat(l)})),(0,i.Z)((0,s.Z)(a),"toIterationLink",(function(e){return(0,F.jsx)(p.rU,{onClick:(0,v.partial)(a.onIterationLinkClick,e),type:"primary",children:e.get("title")})})),(0,i.Z)((0,s.Z)(a),"toPreviewLink",(function(e){var t=a.getActiveIteration().get("id");return(0,g.Map)({active:t===e.get("id"),onClick:(0,v.partial)(a.onIterationLinkClick,e),content:(0,F.jsx)("span",{children:e.get("title")})})})),a.state={showModal:!1},a}return(0,l.Z)(n,[{key:"getActiveIteration",value:function(){var e=this.props,t=e.series,n=e.iterationSlug,i=t.get("iterations")||(0,g.List)(),a=i.find((function(e){return J(e.get("slug"))===decodeURI(n)})),r=i.last()||(0,g.Map)();return a||r}},{key:"renderIterations",value:function(e){var t=this.props.maxIterations,n=e.size>t,i=e.sortBy((function(e){return-1*e.get("startAt")||-1*e.get("publishedAt")})),a=i.skip(n?t:0).map(this.toIterationLink,this),r=i.take(t).map(this.toPreviewLink,this);return n&&(r=r.insert(t,(0,g.Map)({content:(0,F.jsx)(S.J2,{placement:"bottom",id:"filter-bar-options",content:(0,F.jsx)(p.GV,{items:a}),className:" ",hidePopover:!1,children:(0,F.jsxs)("span",{children:["Past Iterations ",(0,F.jsx)(p.xu,{className:"fa fa-fw fa-angle-down"})]})},"filter-bar-options")}))),(0,F.jsx)(p.td,{tabs:r})}},{key:"render",value:function(){var e,t,n=this,i=this.props,a=i.apollo,r=i.series,l=i.seriesSlug,s=i.gameSlug,o=i.routeQuery,d=this.state,c=d.showModal,u=d.playerRank;if(null===r)return(0,F.jsx)($.Z,{});var m,k=this.getActiveIteration().get("id"),v="".concat(s,"/series/").concat(l),f=null===a||void 0===a||null===(e=a.forOperation)||void 0===e||null===(t=e.call(a,U))||void 0===t?void 0:t.loading,S=r&&r.get("iterations")||(0,g.List)();if(c&&u){var N=u.get("id");m=(0,F.jsx)(D,{playerRankId:N,showing:!0,fullSeriesSlug:v,onClose:function(){return n.setState({showModal:!1})}})}var h=this.renderIterations(S),b=k?(0,F.jsx)(E,{seriesSlug:l,gameSlug:s,iterations:S,iterationId:k,onClickRow:function(e,t){return n.showModal(t)},routeQuery:o}):(0,F.jsx)(z.Z,{title:"No iterations found.",message:"This series has no iterations that are active or published."});return(0,F.jsxs)("div",{className:"ranking-page affix-page",children:[(0,F.jsx)(G.Z,{slug:v}),m,(0,F.jsx)("div",{className:"ranking-page-content",children:(0,F.jsx)("div",{className:"page-section page-section-grey  ",children:(0,F.jsx)(y.Z,{className:"AttendeePage",size:"large",children:(0,F.jsx)("div",{className:"AttendeesTable",children:(0,F.jsxs)(p.pN,{children:[(0,F.jsx)(y.Z,{children:h}),!f&&b]})})})})})]})}}]),n}(u.Component);(0,i.Z)(H,"defaultProps",{series:(0,g.Map)(),maxIterations:3,routeQuery:{}}),(0,i.Z)(H,"contextTypes",{executeAction:k().func});var K=(0,f.Z)((0,N.Z)(U,{options:function(e){return{variables:{slug:"".concat(e.gameSlug,"/series/").concat(e.seriesSlug)}}}})(H));function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var W=function(e){return(0,F.jsx)(K,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))},Y={titleKey:"ranking_series",pageTelemetry:{name:"Series",content:{subcategory:"ranking"}}};W.routeMeta=Y,W.getLayout=(0,a.G)(Y);var ee=!0,te=W},70747:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rankings/[gameSlug]/series/[seriesSlug]/[[...optionalParams]]",function(){return n(18407)}])},41148:function(e){e.exports={"action-bar":"action-bar-sggG8LI6","error-message-bar":"error-message-bar-sgg2s2IL","selection-text":"selection-text-sggBMlI9","cancel-button":"cancel-button-sggVz7eR","clear-error-button":"clear-error-button-sggHQQUc","check-cell":"check-cell-sggSuN1z","check-button":"check-button-sggjVLtr"}}},function(e){e.O(0,[3742],(function(){e.E(9135),e.E(5720)}),5);e.O(0,[9729,2110,9135,5499,4202,7958,2162,9774,2888,179],(function(){return t=70747,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=[[...optionalParams]]-2deec1dc87cbbcc3.js.map