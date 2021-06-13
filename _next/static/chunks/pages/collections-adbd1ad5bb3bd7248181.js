(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{9296:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(5893),s=r(18),c=r(6156),a=r(7294),l=r(7428),i=r(1021),o=r(5553),u=r(4708),d=r(3802),x=function(e){var t=e.title,r=e.cards,s=void 0===r?[]:r,c=e.deck;e.useFilter;return e.reversed&&s.reverse(),0==s.length?null:(0,n.jsxs)("main",{children:[(0,n.jsxs)("section",{className:" flex flex-row border-b border-t py-5 2xl:max-w-screen-2xl  2xl:mx-auto xl:max-w-screen-xl   xl:mx-auto lg:items-center  lg:mx-5 ",children:[(0,n.jsx)("div",{className:"flex flex-row mx-auto",children:(0,n.jsx)(d.YqE,{className:"w-8 m-auto"})}),(0,n.jsxs)("div",{className:"flex flex-row mx-auto font-cursive text-2xl",children:[" ",t," "]}),(0,n.jsx)("div",{className:"flex flex-row mx-auto",children:(0,n.jsx)(d.YqE,{className:"w-8 m-auto"})})]}),(0,n.jsx)("section",{className:"flex flex-row my-5 bg-white md:space-x-10 justify-between 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto lg:items-center font-cursive",children:(0,n.jsx)("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center gap-3 mx-auto relative",children:s.map((function(e){return(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("img",{className:"mx-auto w-1/2 lg:w-10/12 rounded",src:"./images/back0.svg"}),(0,n.jsx)("span",{className:"mx-auto font-cursive",children:e.name})]},"".concat(c.artistsDetail.name,"-").concat(c.name,"-").concat(e.id))}))})})]})},m=r(2076),f=r(8722),p=r(1873);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=(0,r(9429).V7)();function v(e,t){switch((t.type.match(/change:(.*)/)||[void 0,void 0])[1]){case"blockchain":return g(g({},e),{},{blockchain:t.data});case"suite":var r=e.suite,n=r.indexOf(t.data);return n>-1?r.splice(n,1):r=[].concat((0,s.Z)(r),[t.data]),g(g({},e),{},{suite:r});case"deck":var c=t.data||{value:null};return g(g({},e),{},{deck:c.value});case"artist":return g(g({},e),{},{artist:t.data});case"order":return g(g({},e),{},{order:t.data})}return e}var b=function(e){return(0,n.jsxs)("section",{className:"card-filter-region ml-10 mr-2 mt-2 lg:ml-0 lg:mt-0 lg:mr-0",children:[(0,n.jsx)("div",{className:"w-1/4 flex flex-row justify-around",children:(0,n.jsx)(m.Bi,{id:"suite-select",instanceid:"suite-select",opts:e.suiteOpts,state:e.suite,onChange:e.onSuiteSelect})}),(0,n.jsx)(m.Po,{id:"order-select",instanceId:"order-select",state:e.order,onChange:e.onOrderSelect})]})},w=function(e){return(0,n.jsxs)("section",{className:"flex justify-around lg:justify-start lg-section gap-1",children:[(0,n.jsx)(u.A,{id:"deck-select",instanceId:"deck-select",placeholder:"Select a deck",options:e.deckOpts,onChange:e.onDeckSelect,isClearable:!0}),(0,n.jsx)(u.A,{id:"artist-select",instanceId:"artist-select",isMulti:!0,placeholder:"Select artists",options:e.artistOpts,onChange:e.onArtistSelect})]})};function k(e){var t,r=e.blockchain,c=e.setBlockchain,u=p.a.map((function(e){var t=e.id;e.name;return{value:t,label:e.title}})),d=f.a.map((function(e){return{value:e.id,label:e.name}})),m=(0,a.useReducer)(v,{blockchain:"0",deck:null,artist:[],suite:[],order:0}),h=m[0],k=m[1],O=h.suite,y=h.deck,N=h.artist,S=h.order,_=(t=[function(e){return 0==O.length||O.includes(e.poker_suite)},function(e){return null==y||y==e.deck}],function(e){return[e].concat((0,s.Z)(t)).reduce((function(e,t){return e.filter(t)}))}||function(e){return e}),P=0,C=j.filter((function(e){return 0==N.length||N.map((function(e){return e.value})).includes(e.id)})).map((function(e,t){var r=_(e.cards);return P+=r.length,g(g({},e),{},{cards:r})}));return(0,n.jsxs)(l.Z,{pageTitle:"diva cards",children:[(0,n.jsx)(i.Z,{onBlockchainSelect:c,blockchain:r}),(0,n.jsxs)("main",{children:[(0,n.jsxs)("section",{className:" flex flex-row my-5 bg-white mx-auto justify-between  2xl:max-w-screen-2xl  2xl:px-0 xl:max-w-screen-xl  xl:px-0 lg:items-center  lg:px-5 md:space-x-10 ",children:[(0,n.jsx)(w,{deckOpts:u,onDeckSelect:function(e){return k({type:"change:deck",data:e})},artistOpts:d,onArtistSelect:function(e){return k({type:"change:artist",data:e})}}),(0,n.jsx)(b,{suite:O,order:S,suiteOpts:[{value:"s",label:"Spades"},{value:"h",label:"Hearts"},{value:"c",label:"Clubs"},{value:"d",label:"Diamonds"},{value:"j",label:"Jokers"}],onSuiteSelect:function(e){return k({type:"change:suite",data:e})},onOrderSelect:function(e){return k({type:"change:order",data:e})}})]}),(0,n.jsxs)("div",{className:" flex flex-row my-5 bg-white mx-auto justify-between  2xl:max-w-screen-2xl  2xl:px-0 xl:max-w-screen-xl  xl:px-0 lg:items-center  lg:px-5 md:space-x-10 font-cursive ",children:[P," Cards found"]}),function(e){return(0,n.jsx)(n.Fragment,{children:e.map((function(e,t){return(0,n.jsx)(x,{deck:e,title:e.title,cards:e.cards,reversed:1==S},"".concat(e.artistsDetail.name,"-").concat(e.id))}))})}(C)]}),(0,n.jsx)(o.Z,{})]})}},3892:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections",function(){return r(9296)}])}},function(e){e.O(0,[774,784,541,888,179],(function(){return t=3892,e(e.s=t);var t}));var t=e.O();_N_E=t}]);