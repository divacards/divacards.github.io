(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[645],{2076:function(e,t,n){"use strict";n.d(t,{c3:function(){return o},Bi:function(){return d}});var r=n(5893),l=(n(7294),n(4708)),i=n(2962),s=n(7248),c=n(6049),a=function(e){var t=e.value;e.label,e.state,e.onChange;switch(t){case"0":return(0,r.jsx)(s.Wb,{className:"w-8 m-auto",icon:i.R,color:"gray"});case"1":return(0,r.jsx)(c.kBi,{className:"w-8 m-auto"});default:return null}},o=function(e){var t=e.opts,n=e.onChange,i=e.state;return(0,r.jsx)("section",{className:"flex flex-row justify-end w-auto",children:(0,r.jsx)(l.x,{id:"blockchain-select",items:t,onChange:n,state:i,Child:a})})},u=function(e){var t=e.value,n=e.label;e.state,e.onChange;switch(t){case"s":case"h":case"c":case"d":case"j":return(0,r.jsx)("label",{children:n});default:return null}},d=function(e){var t=e.opts,n=e.state,i=e.onChange;return(0,r.jsx)(l.x,{id:"suite-select",instanceid:"suite-select",items:t,state:n,onChange:i,Child:u})}},4708:function(e,t,n){"use strict";n.d(t,{x:function(){return d},A:function(){return o}});var r=n(5893),l=n(6156),i=n(7294),s=n(7169);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=function(e){return(0,r.jsx)(s.ZP,{id:e.id,instanceId:e.instanceId,isMulti:e.isMulti,placeholder:e.placeholder,options:e.options,onChange:e.onChange,theme:function(e){return a(a({},e),{},{colors:a(a({},e.colors),{},{primary:"hotpink",neutral10:"lavender"})})},className:"p-1 w-12/12 lg:w-3/12"})},u=function(e){var t=e.value,n=e.label,l=e.state,i=e.onChange;return(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",className:"rounded text-pink-500",value:t,checked:t==l,onChange:i}),n]})},d=function(e){var t=e.items,n=e.state,l=e.onChange,s=e.Child,c=void 0===s?u:s;return(0,r.jsx)(i.Fragment,{children:t.map((function(e){var t=e.value,i=e.label;return(0,r.jsx)(c,{value:t,label:i,state:n,onChange:function(e){var t=e.target.value;return l(t)}},t)}))})}},5553:function(e,t,n){"use strict";var r=n(5893),l=(n(7294),function(e){var t=e.links.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-pink-500 font-semibold block text-sm py-2",href:e.link,children:e.title})},e.link)}));return(0,r.jsxs)("div",{className:"w-full my-8 lg:my-0 lg:w-4/12 px-4 ml-auto",children:[(0,r.jsx)("span",{className:"block uppercase text-gray-500 text-sm font-semibold mb-2",children:e.linkTitle}),(0,r.jsx)("ul",{className:"list-unstyled text-gray-500",children:t})]})});t.Z=function(){return(0,r.jsx)("footer",{className:"flex justify-center bg-gray-100 text-black py-4",children:(0,r.jsxs)("div",{className:"container max-w-screen-xl px-4",children:[(0,r.jsxs)("div",{className:"flex flex-wrap justify-around",children:[(0,r.jsxs)("div",{className:"w-full lg:w-6/12 px-4",children:[(0,r.jsx)("h3",{className:"text-3xl font-semibold mb-4 md:mb-0",children:"We are here to help"}),(0,r.jsx)("p",{className:"text-lg mt-0 mb-2 text-gray-500",children:"We look forward to having you be part of our community."})]}),(0,r.jsx)("div",{className:"w-full lg:w-6/12 lg:px-4",children:(0,r.jsxs)("div",{className:"flex flex-wrap items-top mb-6",children:[(0,r.jsx)(l,{linkTitle:"Useful Links",links:[{title:"About",link:"/about"},{title:"Pricing",link:"/pricing"},{title:"Solutions",link:"/solutions"}]}),(0,r.jsx)(l,{linkTitle:"Other Resources",links:[{title:"Press",link:"/press"},{title:"Terms of Services",link:"/tos"},{title:"Privacy",link:"/privacy"}]})]})})]}),(0,r.jsx)("div",{className:"flex flex-wrap place-content-center",children:(0,r.jsx)("div",{className:"text-sm text-lightgray font-semibold py-1",children:"Copyright \xa9 2021 diva.cards"})})]})})}},6150:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(5893),l=n(4699),i=n(6156),s=n(7294),c=n(1664),a=n(1163),o=n(914),u=n(7616),d=n(1330),f=n(6049),h=(n(7248),n(4184),n(8087)),x=new h._k({supportedChainIds:[1,3,4,5,42]});function m(e){return e instanceof h.A5?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof o.Uu?"You're connected to an unsupported network.":e instanceof h.ab?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}var p=function(e){return(0,r.jsx)("button",{className:"block py-4 no-underline mx-auto md:mt-0 font-medium p-4 text-pink-400 hover:text-pink-500 transition duration-150 ease-in-out focus:outline-none",children:e.children})},v=n(6932),j=function(e){var t=(0,v.KT)(e.value||"random-string",32);return(0,r.jsx)("img",{className:"inline",src:"data:image/svg+xml;utf8,".concat(encodeURIComponent(t))})},g=function(e){var t=e.text,n=e.href,l=e.selected;return(0,r.jsx)(p,{children:(0,r.jsx)(c.default,{href:n,children:(0,r.jsx)("span",{className:l?"font-bold":null,children:t})})},t)},b=function(){var e=(0,a.useRouter)();return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"hidden lg:flex",children:[{href:"/collections",text:"Collections"},{href:"/artists",text:"Artists"},{href:"/forge",text:"Forge"}].map((function(t){var n=t.text,l=t.href;return(0,r.jsx)(g,{text:n,href:l,selected:e.pathname===l},n)}))}),(0,r.jsx)("div",{className:"block lg:hidden",children:"here's mobile menu type"})]})},y=(n(2962),n(2076));function w(e){var t=e.length;return e.substring(0,8)+".."+e.substring(t-6,t)}var k=function(e){var t=e.label,n=e.value;return(0,r.jsxs)("div",{className:"flex px-3 py-1 text-md",children:[(0,r.jsx)("label",{children:t}),(0,r.jsx)("span",{className:"flex-grow"}),(0,r.jsx)("span",{className:"text-highlight",children:n})]})},N=function(e){var t=(0,o.Ge)(),n=t.deactivate,i=t.active,c=(0,o.Ge)(),a=c.library,h=c.chainId,x=c.account,m=s.useState(),p=(0,l.Z)(m,2),v=p[0],g=p[1];return(0,s.useEffect)((function(){if(x&&a){var e=!1;return a.getBalance(x).then((function(t){e||g(t)})).catch((function(){e||g(null)})),function(){e=!0,g(void 0)}}}),[x,a,h]),(0,r.jsx)(d.v2,{as:"div",className:"relative mx-auto inline-block py-4 text-left",children:function(t){var l=t.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.v2.Button,{className:"flex flex-row rounded-full border-2 ml-4 px-4 py-2 divide-x divide-pink-300 left-0",children:[(0,r.jsxs)("span",{className:"px-2 my-auto text-highlight",children:[v?(0,u.dF)(v):""," ETH"]}),(0,r.jsx)(j,{value:x})]}),(0,r.jsx)(d.uT,{show:l,as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,r.jsxs)(d.v2.Items,{className:"flex flex-col origin-top-right absolute right-0 mt-2 w-48 lg:w-auto rounded shadow-lg bg-white focus:outline-none divide-y divide-pink-300 z-10",children:[(0,r.jsx)("div",{className:"py-1",children:(0,r.jsx)(d.v2.Item,{children:(0,r.jsxs)("div",{className:"flex flex-row gap-1",children:[(0,r.jsx)("span",{className:"text-black font-semibold opacity-75 m-auto",children:null===x?"no account":w(x)}),(0,r.jsx)("button",{className:"inline my-auto w-4 h-4",children:(0,r.jsx)(f.dqY,{className:"text-gray-500 opacity-75",onClick:function(){navigator.clipboard.writeText(x)}})}),(0,r.jsx)(y.c3,{opts:e.blockchainOpts,onChange:e.onBlockchainSelect,state:e.state})]})})}),(0,r.jsxs)("div",{className:"py-1",children:[(0,r.jsx)(d.v2.Item,{children:(0,r.jsx)(k,{label:"Balance:",value:"".concat(v?(0,u.dF)(v):""," ETH")})}),(0,r.jsx)(d.v2.Item,{children:(0,r.jsx)(k,{label:"Items Count:",value:3})}),(0,r.jsx)(d.v2.Item,{children:(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)("button",{className:"px-4 py-2 text-sm bg-black text-white",onClick:function(){return i?n():null},children:"Disconnect"}),(0,r.jsx)("button",{className:"px-4 py-2 bg-pink-500 text-white",children:"View Items"})]})})]})]})})]})}})};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){return(0,r.jsx)("button",{className:"focus:outline-none p-4 lg:p-0",children:(0,r.jsx)("h1",{className:"flex items-center no-underline",children:(0,r.jsx)("span",{className:"text-4xl text-lightpink font-bold tracking-tight font-cursive",children:(0,r.jsx)(c.default,{href:"/",children:e.name})})})})},E=function(){var e=(0,o.Ge)(),t=e.activate,n=e.active;return(0,r.jsx)("button",{className:"block no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2 btn-pink text-white focus:outline-none",onClick:function(){n||t(x)},children:"Connect Wallet"})},I=function(e){var t=(0,o.Ge)().active;(0,a.useRouter)();return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,o.Ge)(),n=t.active,r=t.error,l=t.activate;(0,s.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!r&&!e){var i=function(){console.log("Handling 'connect' event"),l(x)},s=function(e){console.log("Handling 'chainChanged' event with payload",e),l(x)},c=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&l(x)};return t.on("connect",i),t.on("chainChanged",s),t.on("accountsChanged",c),function(){t.removeListener&&(t.removeListener("connect",i),t.removeListener("chainChanged",s),t.removeListener("accountsChanged",c))}}}),[n,r,e,l])}(!function(){console.log("connecting");var e=(0,o.Ge)(),t=e.activate,n=e.active,r=(0,s.useState)(!1),l=r[0],i=r[1];return(0,s.useEffect)((function(){x.isAuthorized().then((function(e){e?t(x,void 0,!0).catch((function(){i(!0)})):i(!0)}))}),[]),(0,s.useEffect)((function(){!l&&n&&i(!0)}),[l,n]),l}()),(0,r.jsx)("nav",{className:"flex flex-col lg:flex-row p-4 lg:p-0",children:t?(0,r.jsx)(N,O({},e)):(0,r.jsx)(E,{})})},L=function(){return(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,r.jsx)(P,{className:"justify-start",name:"diva.cards"}),(0,r.jsx)(b,{})]})},S=function(e){return(0,r.jsx)(I,O({className:"justify-start"},e))},T=function(e){var t=(0,o.Ge)(),n=t.library,i=t.chainId,c=t.account,a=t.error,d=s.useState(),f=(0,l.Z)(d,2),h=f[0],x=f[1],p=(0,s.useState)(),v=p[0],j=p[1];return s.useEffect((function(){if(n){var e=!1;n.getBlockNumber().then((function(t){e||j(t)})).catch((function(){e||j(null)}));var t=function(e){j(e)};return n.on("block",t),function(){e=!0,n.removeListener("block",t),j(void 0)}}}),[n,i]),s.useEffect((function(){if(c&&n){var e=!1;return n.getBalance(c).then((function(t){e||x(t)})).catch((function(){e||x(null)})),function(){e=!0,x(void 0)}}}),[c,n,i]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("header",{className:"flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8",children:[(0,r.jsx)(L,{}),(0,r.jsx)(S,O({},e))]}),(0,r.jsxs)("div",{className:"mx-auto text-center",children:[(0,r.jsxs)("p",{children:["Account: ",null===c?"no account":c]}),(0,r.jsxs)("p",{children:["Balance:"," ",null===h?"Not connected":h?(0,u.dF)(h):""]}),(0,r.jsxs)("p",{children:["Block number: ",null===v?"Error":null!==v&&void 0!==v?v:""]}),(0,r.jsxs)("p",{children:["Error: ",a?m(a):"No error"]})]})]})}},2962:function(e,t,n){"use strict";n.d(t,{R:function(){return r}});var r={body:'<g fill-rule="evenodd"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16zm7.994-15.781L16.498 4L9 16.22l7.498 4.353l7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z" fill="currentColor"/><g fill-rule="nonzero"><path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z" fill="currentColor"/><path fill-opacity=".801" d="M16.498 20.573l7.497-4.353l-7.497-3.348z" fill="currentColor"/><path fill-opacity=".298" d="M9 16.22l7.498 4.353v-7.701z" fill="currentColor"/></g></g>',width:32,height:32}},7428:function(e,t,n){"use strict";var r=n(5893),l=(n(7294),n(9008)),i=n(914),s=n(6492);function c(e){var t=new s.Q(e);return t.pollingInterval=12e3,t}t.Z=function(e){return(0,r.jsx)(i.Ht,{getLibrary:c,children:(0,r.jsxs)("main",{className:"bg-white",children:[(0,r.jsx)(l.default,{children:(0,r.jsx)("title",{children:e.pageTitle})}),e.children]})})}},6601:function(){}}]);