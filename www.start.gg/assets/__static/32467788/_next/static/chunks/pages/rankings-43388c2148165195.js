(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1004],{75003:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var a=r(17253),i=(r(67294),r(72555)),n=r.n(i),s=r(43393),o=r.n(s),l=r(27414),c=r(50337),p=r(70689),g=r(3248),d=r(78147),u=r(64598),h=r(85893),f=n()({displayName:"PlayerList",getDefaultProps:function(){return{className:""}},render:function(){var e=this.props.players.map((function(e,t){var r;if(this.props.numbered&&(r=(0,h.jsx)("div",{className:"gg-player-list-item-prefix",children:(0,h.jsx)(a.ZT,{variant:"h5",component:"h3",className:"heading-margin-small",children:t+1})})),e)return(0,h.jsxs)("div",{className:"gg-player-list-item",children:[r,(0,h.jsx)("div",{children:(0,h.jsx)(u.Z,{playerId:e.get("id"),showAvatar:!1,width:120,showFlag:!0})})]},e.get("id"))}),this).toArray();this.props.finalItem&&e.push((0,h.jsx)("div",{className:"gg-player-list-item",children:this.props.finalItem},"final"));var t="gg-player-list ".concat(this.props.className);return(0,h.jsx)("div",{className:t,children:e})}}),m=(0,d.Z)(f),y=r(34174),v=n()({displayName:"RankingIterationCard",getDefaultProps:function(){return{rankingSeries:o().Map(),seriesIteration:o().Map(),players:o().List(),regions:o().Map(),videogame:o().Map(),seriesUrl:"",iterationUrl:"",listLink:!1,footer:!1,emptyState:!1,numPlayers:15,hideSeriesLinks:!1,hideIterationLinks:!1}},render:function(){var e,t,r,i,n,s,o=this.props.seriesIteration,g=this.props.rankingSeries,d=this.props.videogame,u=new c.Z(o),f=this.props.iterationUrl||u.getUrl(g,d),v=new l.Z(g),b=this.props.seriesUrl||v.getUrl(d),j=v.getLocationName(this.props.regions),x=g.get("locationType")===p.Z.GLOBAL_RANKING,N=g.get("locationType")===p.Z.MULTI_COUNTRY,k=g.get("locationType")===p.Z.COUNTRY,S=o.get("numPlayers"),Z=u.getImage("banner",400);Z||(Z=x?"https://images.start.gg/images/site-images/g9HcRIR.png":"https://images.start.gg/images/site-images/MEuWeoY.png");var P="gg-card-banner",R={showCountryFlag:x||N,showRegion:x||N||k},I={backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(".concat(Z,")")};this.props.videogame&&(i=this.props.videogame.get("shortName")),j&&(e=(0,h.jsxs)("span",{children:[" ",(0,h.jsx)("span",{className:"fa fa-map-marker"}),"\xa0",j," "]}));var w=(0,h.jsxs)("div",{className:"gg-card-banner-content",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(a.ZT,{variant:"h6",component:"h4",className:"text-inherit",children:g.get("name")}),(0,h.jsx)(a.ZT,{variant:"h6",component:"h4",className:"text-inherit heading-margin-small",children:i})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:o.get("title")}),"\xa0\xa0\xa0",e]})]});r=this.props.hideSeriesLinks?(0,h.jsx)("span",{children:(0,h.jsx)("div",{className:P,style:I,children:w})}):(0,h.jsx)("a",{href:b,className:"link-inherit",children:(0,h.jsx)("div",{className:P,style:I,children:w})}),t=this.props.listLink?this.props.listLink:(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"heading text-lg",children:(0,h.jsxs)(y.rU,{url:f,type:"primary",children:["View All\xa0",(0,h.jsx)("i",{className:"fa fa-long-arrow-right"})]})}),(0,h.jsx)("div",{className:"text-muted",children:(0,h.jsxs)("em",{children:[S," players"]})})]}),this.props.footer&&(n=this.props.footer);var L=this.props.players.slice(0,this.props.numPlayers);return s=0===L.size&&this.props.emptyState?this.props.emptyState:(0,h.jsx)("div",{className:"gg-card-body",children:(0,h.jsx)(m,{players:L,numbered:!0,finalItem:t,avatarProps:R})}),(0,h.jsxs)("div",{className:"gg-card gg-series-card rounded-corners gg-regional-series-card has-image shadow-image  ",children:[r,s,n]})}});v=(0,g.Z)(v,["PlayerStore","RankingPlayerStore","VideogameStore"],(function(e,t){var r=e.RankingPlayerStore.getByIterationId(t.seriesIteration.get("id")).toList().sortBy((function(e){return e.get("rank")})),a=r.map((function(e){return e.get("playerId")})),i=e.PlayerStore.getByIds(a),n=o().List().asMutable();return r.forEach((function(e){n.push(i.get(e.get("playerId")))})),{playerRanks:r,players:n,videogame:e.VideogameStore.getById(t.rankingSeries.get("videogameId"))}}));var b=(0,d.Z)(v)},13713:function(e,t,r){"use strict";var a=r(81645).Z.extend({BASE_URL:"/ranking/series/",getPage:function(e,t){var r=this,a=this.context.getStore("RankingSeriesListStore").getUrl(e.params);this.request("read",a,e,(function(a,i,n){var s=r.normalizePaginatedData(a,n,e.schema,i);t(s,i)}))},getRankingsPage:function(e,t){var r=this;this.request("read","/rankings",e,(function(a,i,n){var s=r.normalizePaginatedData(a,n,e.schema,i);t(s,i)}))},save:function(e){var t=e.id,r=this.BASE_URL,a="create";t&&(r+=t,a="update"),this.request(a,r,e)},delete:function(e,t){var r=e.id,a=this.BASE_URL+r;this.request("delete",a,e,t)}});t.Z=a},18275:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return q},default:function(){return G}});var a=r(74896),i=r(67294),n=r(23672),s=r(92777),o=r(82262),l=r(10748),c=r(81531),p=r(63553),g=r(37247),d=r(59499),u=r(43393),h=r.n(u),f=r(90977),m=r(48206),y=r(97115),v=r(21108),b=r(3248),j=r(94248),x=r(74469),N=r(75003),k={location:[[{label:"All Rankings",fieldName:"allRankings",type:"bool"},{label:"Global",fieldName:"global",type:"bool"},{label:"Regional",fieldName:"regional",type:"select",options:[{label:"Multi-Country",fieldName:"multiCountry",value:"multiCountry"},{label:"Country",fieldName:"country",value:"country"},{label:"State/Province",fieldName:"state",value:"state"},{label:"Sub-State",fieldName:"subState",value:"subState"},{label:"City",fieldName:"city",value:"city"}],placeholder:"Select Region"},{label:"School/University",fieldName:"school",type:"bool"}]],filters:[[{label:"Past Year",fieldName:"year",type:"bool",clearFields:["threeMonths","specificYear"]},{label:"Past Three Months",fieldName:"threeMonths",type:"bool",clearFields:["year","specificYear"]},{label:"Specific Year",fieldName:"specificYear",type:"select",options:[{label:2015,value:2015},{label:2016,value:2016},{label:2017,value:2017}],placeholder:"Select Year"}]],search:{placeholder:"Enter Ranking Name"}},S=r(94116),Z=r(37975),P=r(85893);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,g.Z)(e);if(t){var i=(0,g.Z)(this).constructor;r=Reflect.construct(a,arguments,i)}else r=a.apply(this,arguments);return(0,p.Z)(this,r)}}var L=function(e){(0,c.Z)(r,e);var t=w(r);function r(){var e;(0,s.Z)(this,r);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i)),(0,d.Z)((0,l.Z)(e),"canGoToPage",(function(t){var r=Math.ceil(e.props.total/e.props.perPage);return!(0===t||t===e.props.page||r<t)})),(0,d.Z)((0,l.Z)(e),"paginationClicked",(function(t){e.canGoToPage(t)&&e.props.goToPage&&e.props.goToPage(t)})),(0,d.Z)((0,l.Z)(e),"renderHeader",(function(){return(0,P.jsx)("div",{className:"TopLevelFilterBackground TopLevelFilterBackground--rankings",children:(0,P.jsx)(Z.Z,{query:h().fromJS(e.props.query),containerClass:"container",titleKey:"rankings"})})})),(0,d.Z)((0,l.Z)(e),"renderIterationCards",(function(t){return t.map((function(e){if(e.get("seriesId")){var t=this.props.paginationData.get(e.get("seriesId"));if(t){var r=x.Z.get(t.get("videogameId"));return(0,P.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6",children:(0,P.jsx)(N.Z,{regions:this.props.regions,rankingSeries:t,seriesIteration:e,numPlayers:7,videogame:r})},t.get("id"))}}}),(0,l.Z)(e)).toArray()})),e}return(0,o.Z)(r,[{key:"render",value:function(){var e,t=this.renderHeader(),r=this.renderIterationCards(this.props.iterations),a=Math.ceil(this.props.total/this.props.perPage);if(this.props.total)e=(0,P.jsxs)("div",{children:[(0,P.jsx)("div",{className:"row",children:r}),(0,P.jsx)(j.Z,I(I({},this.props),{},{numPages:a,currentPage:this.props.page,canGoToPage:this.canGoToPage,paginationClicked:this.paginationClicked}))]});else{var i=(0,P.jsx)("a",{href:"/rankings",children:"Clear filters"});e=(0,P.jsx)(f.Z,{title:"No results found",message:i})}return(0,P.jsxs)("div",{children:[t,(0,P.jsx)("div",{className:"top-spacer bottom-spacer",children:(0,P.jsx)(m.Z,{children:(0,P.jsx)(S.Z,{baseUrl:this.props.baseUrl,query:this.props.query,filterConfig:k,filterTabs:{location:{label:"Location",rightIcon:"fa-caret-down"},filters:{label:"Filters",leftIcon:"fa-plus"},search:{label:"Search",leftIcon:"fa-search",collapsible:!0}}})})}),(0,P.jsx)(m.Z,{children:e})]})}}]),r}(i.Component);(0,d.Z)(L,"defaultProps",{baseUrl:"/rankings"}),L=(0,b.Z)(L,["RankingSeriesListStore","RankingSeriesStore","RankingIterationStore","RegionStore"],(function(e,t){var r=h().Map();return t.paginationData&&(r=t.paginationData.map((function(t){return e.RankingIterationStore.getActiveBySeries(t.get("id"))||h().Map()}))),{regions:e.RegionStore.getAll(),iterations:r}}));var O=(0,v.Z)((0,y.Z)(L,"RankingSeriesListStore","RankingSeriesStore")),T=r(96486),C=r(9301),_=r(13713),U=r(18285);var E=r(28968),M="rankings-page",A=(0,n.Z)((function(){return(0,P.jsx)(O,{paginationKey:M,currentRoute:(0,E.N0)()})}),(function(e,t,r){var a=new _.Z(e),i=C.Z.RANKING.SERIES,n=(0,T.extend)({},t.query);n.page=t.page||1,a.getRankingsPage({params:n,schema:U.Z.paginatedSchema,validationKey:t.validationKey},(function(t,a){a||e.dispatch(i,t),r(a,t)}))}),M),B=function(){return(0,P.jsx)(A,{})},D={titleKey:"rankings",pageTelemetry:{name:"Rankings"}};B.routeMeta=D,B.getLayout=(0,a.G)(D);var q=!0,G=B},33618:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rankings",function(){return r(18275)}])}},function(e){e.O(0,[1004],(function(){e.E(9135),e.E(5720)}),5);e.O(0,[9729,9741,2110,9135,5499,7958,6845,9643,6291,9774,2888,179],(function(){return t=33618,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=rankings-43388c2148165195.js.map