(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{83:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/items",function(){return a(7321)}])},7321:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var s=a(5893),i=a(7294),n=a(7039),l=a(913),r=a(9795),c=a(856),d=a(7431),o=a(3153),x=a(1163),u=a(6413),m=a(6976),h=a(6694);function b(e){var t=e.isBox,a=e.item_id,i=(0,r.Ge)(),n=i.library,l=i.account,x=i.chainId;return x?(0,c.MR)(x)?(0,s.jsxs)("div",{className:"flex flex-wrap space-around h-full content-between font-cursive",children:[(0,s.jsxs)("div",{className:"w-full",children:["Total Supply:",(0,s.jsx)(m.Ms,{className:"inline mx-2",method:"totalSupply",token_id:a,library:n,account:l,chainId:x,isBox:t})]}),(0,s.jsxs)("div",{className:"w-full mb-2",children:["Owns:",(0,s.jsx)(m.Ms,{className:"inline mx-2",method:"balanceOf",token_id:a,library:n,account:l,chainId:x,isBox:t})]}),(0,s.jsx)("div",{className:"w-full border-t-2 pt-2 border-razzmatazz",children:(0,s.jsx)(m.tQ,{method:"unpack",token_id:a,library:n,account:l,chainId:x,isBox:t})})]}):(0,s.jsx)(d.V9,{message:"Unsupported chain",Icon:ExclamationIcon}):(0,s.jsx)(d.V9,{message:"Please connect the wallet",Icon:o.oAu})}function f(){var e=(0,n.$G)().t,t=(0,i.useState)([]),a=t[0],r=t[1],c=(0,i.useState)(void 0),m=c[0],f=c[1],v=(0,i.useState)(!1),j=v[0],g=v[1],p=(0,i.useState)(void 0),w=p[0],N=p[1],y=(0,i.useState)(!1),k=y[0],_=y[1],B=(0,i.useState)(!1),S=B[0],P=B[1],I=(0,x.useRouter)();return(0,i.useEffect)((function(){var e=(0,u.B6)("id");f(e),(u.PZ.indexOf(parseInt(e))>-1||u.xn.indexOf(parseInt(e))>-1)&&P(!0);var t="box"==(0,u.B6)("asset_type")?"box":"items";"box"==t&&_(!0);var a=1!=window.history.length;fetch("https://diva.cards/api/".concat(t,"/").concat(e,"/")).then((function(e){return e.json()})).then((function(e){g(!1),r(e),N(a)}))}),[]),j||!a?(0,s.jsx)(d.wW,{}):(0,s.jsxs)(l.Z,{pageTitle:"tokyo.cards",children:[(0,s.jsx)("button",{className:"block h-14 w-14 bg-diablo-dark-gold rounded-full fixed z-40 bottom-5 right-5 drop-shadow-lg text-white",onClick:function(){var e=(0,u.B6)("lang")?(0,u.B6)("lang"):"en";w?I.push("/temple?lang=".concat(e,"&tab=2")):I.push("/?lang=".concat(e))},children:w?(0,s.jsx)(o.Y4O,{className:"h-8 w-8 m-auto"}):(0,s.jsx)(o.tvw,{className:"h-8 w-8 m-auto"})}),(0,s.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,s.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,s.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,s.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:(0,s.jsxs)("div",{className:"font-cursive text-diablo-dark-gold text-xl",children:[" ",e("items.detail")," "]})}),(0,s.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,s.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]}),(0,s.jsxs)("section",{className:"flex flex-wrap gap-5 m-3",children:[(0,s.jsx)("div",{className:"w-full h-96 relative border-diablo-dark-gold rounded-lg text-center lg:w-6/12",children:a.image?(0,s.jsx)(h.X,{fastSpin:!1,objScale:1,objPos:void 0,fogColor:["#0E93AD",0,1e3],pntLgtPos:[10,10,10],boxTexture:a.image,isSquareCard:S,isBox:k}):(0,s.jsx)(d.wW,{})}),(0,s.jsxs)("div",{className:"text-cinnabar w-full lg:w-5/12 flex flex-wrap gap-4",children:[(0,s.jsxs)("div",{className:"bg-obsidian-gray w-full p-4 rounded-lg",children:[a.attributes&&k&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-2xl font-cursive text-rarity-artifact",children:a&&a.name}),(0,s.jsx)("div",{className:"text-base font-cursive text-diablo-dark-gold",children:"Limited"}),(0,s.jsx)("div",{className:"text-sm font-cursive text-diablo-dark-gold",children:"Box"}),(0,s.jsxs)("div",{className:"text-xs font text-rarity-uncommon",children:[a.attributes[0].value," item inside"]})]}),a.attributes&&!k&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-2xl font-cursive text-".concat((0,u.kg)((0,u.PJ)("Rarity",a.attributes).value)),children:a&&a.name}),(0,s.jsx)("div",{className:"text-base font-cursive text-".concat((0,u.kg)((0,u.PJ)("Rarity",a.attributes).value)),children:(0,u.PJ)("Rarity",a.attributes).value}),(0,s.jsx)("div",{className:"text-sm font-cursive text-diablo-dark-gold",children:(0,u.PJ)("Card Type",a.attributes).value})]}),(0,s.jsx)("div",{className:"text-xs text-rarity-artifact",children:a&&a.description})]}),(0,s.jsx)("div",{className:"text-cinnabar p-4 rounded-lg w-full bg-obsidian-gray",children:(0,s.jsx)(b,{isBox:k,item_id:m})})]}),(0,s.jsx)("div",{className:"text-cinnabar flex flex-wrap gap-2 text-center justify-start place-content-center w-full",children:a.attributes&&!k&&a.attributes.map((function(e,t){return"Name"==e.trait_type?null:(0,s.jsxs)("div",{className:"text-sm rounded-lg h-24 w-24 p-2 bg-obsidian-gray relative",children:[(0,s.jsx)("div",{className:"absolute",children:e.trait_type},"title-".concat(t)),(0,s.jsx)("div",{className:"absolute top-10 w-20 text-".concat((0,u.kg)(e.value)),children:e.value},"value-".concat(t))]},"c-".concat(t))}))},"traits")]})]})}}},function(e){e.O(0,[774,523,112,737,943,769,552,650,888,179],(function(){return t=83,e(e.s=t);var t}));var t=e.O();_N_E=t}]);