(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(s,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(6216)}])},6216:function(s,e,a){"use strict";a.r(e),a.d(e,{default:function(){return B}});var i=a(5893),t=a(4032),n=a(7294),l=a(1163),c=a(1217),r=a(5769),o=a(1133),d=a(254),x=a(3328),m=a(8626),j=a(3857),v=a(4232),u=a(9521),w=a(7854),N=a(2849),h=a(5960);function f(s,e,a){return e in s?Object.defineProperty(s,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[e]=a,s}function p(s){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter((function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable})))),i.forEach((function(e){f(s,e,a[e])}))}return s}function g(s,e){return function(s){if(Array.isArray(s))return s}(s)||function(s,e){var a=[],i=!0,t=!1,n=void 0;try{for(var l,c=s[Symbol.iterator]();!(i=(l=c.next()).done)&&(a.push(l.value),!e||a.length!==e);i=!0);}catch(r){t=!0,n=r}finally{try{i||null==c.return||c.return()}finally{if(t)throw n}}return a}(s,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(){var s=(0,u.S)().progress;return(0,i.jsx)(w.V,{center:!0,children:(0,i.jsxs)("div",{className:"text-diablo-dark-gold",children:[s.toFixed(),"%"]})})}function y(s){var e=g((0,r.m)(["/three_d/girl/textures/floor/Marble006_1K_Roughness.jpg","/images/logo.png"]),2),a=e[0],t=e[1];return(0,i.jsxs)("mesh",p({rotation:[-Math.PI/2,0,1.5*Math.PI]},s,{children:[(0,i.jsx)("planeGeometry",{args:[20,5]}),(0,i.jsx)(d.Q,{resolution:1024,mirror:.75,mixBlur:10,mixStrength:2,minDepthThreshold:.8,maxDepthThreshold:1.2,depthToBlurRatioBias:.2,color:"gold",metalness:.5,roughnessMap:a,roughness:1,normalMap:t,normalScale:[4,4]})]}))}function k(s){var e=(0,r.m)(s.boxTexture),a=(0,n.useRef)(),t=(0,n.useState)(!1),l=t[0],c=t[1],o=(0,n.useState)(!1),d=o[0],x=o[1],m=(0,n.useState)(!1),j=m[0],u=m[1],w=[3,6,9,10,18,22,23];return(0,v.xQ)((function(e,i){var t=e.clock.getElapsedTime();if(t.toFixed()%17===0&&!j){var n=Math.floor(Math.random()*w.length);s.setAction(w[n]),u(!0)}t.toFixed()%31===0&&j&&(s.setAction(18),u(!1)),s.setElapsed(t.toFixed()),a.current.rotation.x=a.current.rotation.y+=.5*i})),(0,i.jsxs)("mesh",p({},s,{ref:a,scale:d?.2:.25,onClick:function(e){var a;d||(x(!0),s.setAction(20),(a=3e3,new Promise((function(s){return setTimeout(s,a)}))).then((function(){s.setAction(18),x(!1)})))},onPointerOver:function(s){return c(!0)},onPointerOut:function(s){return c(!1)},children:[(0,i.jsx)("boxGeometry",{args:[1,1,1]}),(0,i.jsx)("meshStandardMaterial",{map:e,color:l?"hotpink":"white"})]}))}var S=[{up:"\u6771 \u4eac",down:function(){return"\u30ab\u30fc\u30ba"}},{up:"3D NFT",down:function(){return"\u767a\u58f2\u4e2d"}},{up:"TOKYO",down:function(){return"CARDS"}},{up:"3D NFT",down:function(){return"On Sale"}},{up:"\u73fe\u5728\u6642\u523b",down:function(){return(new Date).toLocaleTimeString("it-IT")}},{up:"NOW",down:function(){return(new Date).toLocaleTimeString("it-IT")}}];function T(s){var e=s%60;return e>=0&&e<10?S[0]:e>=10&&e<20?S[1]:e>=20&&e<30?S[2]:e>=30&&e<40?S[3]:e>=40&&e<50?S[4]:e>=50&&e<60?S[5]:void 0}function O(s){var e="/three_d/asian_girl/scene.gltf",a=(0,v.U2)(c.E,e),t=(0,m.L)(e).animations,l=(0,j.v)(t),r=l.ref,o=l.actions,d=Object.keys(o),u=(0,n.useState)(18),w=u[0],h=u[1],f=(0,n.useState)(0),g=f[0],b=f[1],S={font:"/fonts/DotGothic16-Regular.ttf",fontSize:3,letterSpacing:0,lineHeight:1,"material-toneMapped":!1};return(0,n.useEffect)((function(){var s;return null===(s=o[d[w]])||void 0===s||s.reset().fadeIn(2).play(),function(){var s;null===(s=o[d[w]])||void 0===s||s.fadeOut(2)}}),[o,w,2]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("directionalLight",{position:[2.5,8,5],intensity:1.5}),(0,i.jsx)(k,{boxTexture:"/images/card_set/tokyo.jpg",position:[.7,-.3,4],setAction:h,setElapsed:b,totalActions:d.length}),(0,i.jsx)("primitive",p({},s,{receiveShadow:!0,ref:r,scale:1,rotation:[0,0,0],object:a.scene})),(0,i.jsx)(y,{position:[0,-2.5,-1],"rotation-x":-Math.PI/2}),(0,i.jsx)(x.i,{yawFrequency:.1,pitchFrequency:.1,rollFrequency:.1}),(0,i.jsxs)(N.x,p({position:[-2,5,-7]},S,{color:"red",children:[" ",T(g).up," "]}),"word-2"),(0,i.jsxs)(N.x,p({position:[-2,2,-7]},S,{color:"white",children:[" ",T(g).down()," "]}),"word-3")]})}function _(){return(0,i.jsx)(v.Xz,{children:(0,i.jsx)(n.Suspense,{fallback:(0,i.jsx)(b,{}),children:(0,i.jsxs)(o.wI,{children:[(0,i.jsx)("pointLight",{position:[10,50,50],color:"gold"}),(0,i.jsx)("pointLight",{position:[0,-10,0],color:"gold"}),(0,i.jsx)(O,{position:[0,-2.5,0]}),(0,i.jsx)(h.xC,{multisampling:8,children:(0,i.jsx)(h.dp,{kernelSize:1,luminanceThreshold:0,luminanceSmoothing:.4,intensity:.2})})]})})})}var I=function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"w-0%"}),(0,i.jsx)("div",{className:"w-1%"}),(0,i.jsx)("div",{className:"w-2%"}),(0,i.jsx)("div",{className:"w-3%"}),(0,i.jsx)("div",{className:"w-4%"}),(0,i.jsx)("div",{className:"w-5%"}),(0,i.jsx)("div",{className:"w-6%"}),(0,i.jsx)("div",{className:"w-7%"}),(0,i.jsx)("div",{className:"w-8%"}),(0,i.jsx)("div",{className:"w-9%"}),(0,i.jsx)("div",{className:"w-10%"}),(0,i.jsx)("div",{className:"w-11%"}),(0,i.jsx)("div",{className:"w-12%"}),(0,i.jsx)("div",{className:"w-13%"}),(0,i.jsx)("div",{className:"w-14%"}),(0,i.jsx)("div",{className:"w-15%"}),(0,i.jsx)("div",{className:"w-16%"}),(0,i.jsx)("div",{className:"w-17%"}),(0,i.jsx)("div",{className:"w-18%"}),(0,i.jsx)("div",{className:"w-19%"}),(0,i.jsx)("div",{className:"w-20%"}),(0,i.jsx)("div",{className:"w-21%"}),(0,i.jsx)("div",{className:"w-22%"}),(0,i.jsx)("div",{className:"w-23%"}),(0,i.jsx)("div",{className:"w-24%"}),(0,i.jsx)("div",{className:"w-25%"}),(0,i.jsx)("div",{className:"w-26%"}),(0,i.jsx)("div",{className:"w-27%"}),(0,i.jsx)("div",{className:"w-28%"}),(0,i.jsx)("div",{className:"w-29%"}),(0,i.jsx)("div",{className:"w-30%"}),(0,i.jsx)("div",{className:"w-31%"}),(0,i.jsx)("div",{className:"w-32%"}),(0,i.jsx)("div",{className:"w-33%"}),(0,i.jsx)("div",{className:"w-34%"}),(0,i.jsx)("div",{className:"w-35%"}),(0,i.jsx)("div",{className:"w-36%"}),(0,i.jsx)("div",{className:"w-37%"}),(0,i.jsx)("div",{className:"w-38%"}),(0,i.jsx)("div",{className:"w-39%"}),(0,i.jsx)("div",{className:"w-40%"}),(0,i.jsx)("div",{className:"w-41%"}),(0,i.jsx)("div",{className:"w-42%"}),(0,i.jsx)("div",{className:"w-43%"}),(0,i.jsx)("div",{className:"w-44%"}),(0,i.jsx)("div",{className:"w-45%"}),(0,i.jsx)("div",{className:"w-46%"}),(0,i.jsx)("div",{className:"w-47%"}),(0,i.jsx)("div",{className:"w-48%"}),(0,i.jsx)("div",{className:"w-49%"}),(0,i.jsx)("div",{className:"w-50%"}),(0,i.jsx)("div",{className:"w-51%"}),(0,i.jsx)("div",{className:"w-52%"}),(0,i.jsx)("div",{className:"w-53%"}),(0,i.jsx)("div",{className:"w-54%"}),(0,i.jsx)("div",{className:"w-55%"}),(0,i.jsx)("div",{className:"w-56%"}),(0,i.jsx)("div",{className:"w-57%"}),(0,i.jsx)("div",{className:"w-58%"}),(0,i.jsx)("div",{className:"w-59%"}),(0,i.jsx)("div",{className:"w-60%"}),(0,i.jsx)("div",{className:"w-61%"}),(0,i.jsx)("div",{className:"w-62%"}),(0,i.jsx)("div",{className:"w-63%"}),(0,i.jsx)("div",{className:"w-64%"}),(0,i.jsx)("div",{className:"w-65%"}),(0,i.jsx)("div",{className:"w-66%"}),(0,i.jsx)("div",{className:"w-67%"}),(0,i.jsx)("div",{className:"w-68%"}),(0,i.jsx)("div",{className:"w-69%"}),(0,i.jsx)("div",{className:"w-70%"}),(0,i.jsx)("div",{className:"w-71%"}),(0,i.jsx)("div",{className:"w-72%"}),(0,i.jsx)("div",{className:"w-73%"}),(0,i.jsx)("div",{className:"w-74%"}),(0,i.jsx)("div",{className:"w-75%"}),(0,i.jsx)("div",{className:"w-76%"}),(0,i.jsx)("div",{className:"w-77%"}),(0,i.jsx)("div",{className:"w-78%"}),(0,i.jsx)("div",{className:"w-79%"}),(0,i.jsx)("div",{className:"w-80%"}),(0,i.jsx)("div",{className:"w-81%"}),(0,i.jsx)("div",{className:"w-82%"}),(0,i.jsx)("div",{className:"w-83%"}),(0,i.jsx)("div",{className:"w-84%"}),(0,i.jsx)("div",{className:"w-85%"}),(0,i.jsx)("div",{className:"w-86%"}),(0,i.jsx)("div",{className:"w-87%"}),(0,i.jsx)("div",{className:"w-88%"}),(0,i.jsx)("div",{className:"w-89%"}),(0,i.jsx)("div",{className:"w-90%"}),(0,i.jsx)("div",{className:"w-91%"}),(0,i.jsx)("div",{className:"w-92%"}),(0,i.jsx)("div",{className:"w-93%"}),(0,i.jsx)("div",{className:"w-94%"}),(0,i.jsx)("div",{className:"w-95%"}),(0,i.jsx)("div",{className:"w-96%"}),(0,i.jsx)("div",{className:"w-97%"}),(0,i.jsx)("div",{className:"w-98%"}),(0,i.jsx)("div",{className:"w-99%"}),(0,i.jsx)("div",{className:"w-100%"})]})},E=a(7039),P=a(1436),F=a(2814),D=a(6413),M=function(){var s=(0,E.$G)("home").t,e=(0,l.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:"flex flex-col lg:flex-row items-center lg:justify-around home-section",children:[(0,i.jsx)("div",{className:"mx-auto w-full lg:w-1/2 h-72 text-center",children:(0,i.jsx)(_,{})}),(0,i.jsxs)("div",{className:"text-left w-10/12 lg:w-1/2 mx-auto py-4",children:[(0,i.jsxs)("h2",{className:"leading-tight font-extrabold text-themecolor-bright text-4xl md:text-6xl",children:[(0,i.jsx)("span",{className:"break-words block my-3",children:s("hero.header-simple")}),(0,i.jsx)("span",{className:"text-themecolor break-words block",children:s("hero.header-collectables")})]}),(0,i.jsx)("p",{className:"mt-5 font-body text-description text-base sm:text-lg md:text-xl",children:s("hero.catch-phrase")}),(0,i.jsxs)("div",{className:"mt-5 flex flex-row justify-start flex-wrap gap-3",children:[(0,i.jsxs)("button",{className:"my-2 border-2 border-cinnabar text-diablo-dark-gold py-4 px-8 rounded-lg text-xl hover:border-obsidian-gold",onClick:function(){var s=(0,D.B6)("lang")?(0,D.B6)("lang"):"en";e.push("/temple?lang=".concat(s,"&tab=1"))},children:[(0,i.jsx)(F.G,{icon:P.X5K,className:"mr-3"}),s("button-buy-cards")]}),(0,i.jsxs)("button",{className:"my-2 border-2 border-diablo-dark-gold text-diablo-dark-gold py-4 px-8 text-xl rounded-lg hover:border-obsidian-gold",onClick:function(){var s=(0,D.B6)("lang")?(0,D.B6)("lang"):"en";e.push("/temple?lang=".concat(s,"&tab=0"))},children:[(0,i.jsx)(F.G,{icon:P.Cly,className:"mr-3"}),s("button-ny-sales")]})]}),(0,i.jsx)("div",{className:"text-diablo-dark-gold mt-2",children:" "})]}),(0,i.jsxs)("div",{className:"hidden",children:[" ",(0,i.jsx)(I,{})," "]})]}),(0,i.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,i.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,i.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,i.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:(0,i.jsx)("div",{className:"text-2xl h-20 w-20 inline p-5",children:"T"})}),(0,i.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,i.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]})]})},A=a(3153),C=function(s){var e=s.icon,a=s.title,t=s.description;return(0,i.jsxs)("div",{className:"flex space-x-4 auto-padding",children:[(0,i.jsx)("div",{children:e}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("h3",{className:"mb-2 font-semibold text-description text-2xl lg:text-3xl",children:a}),(0,i.jsx)("p",{className:"leading-normal text-themecolor-bright text-lg",children:t})]})]})},G=function(){var s=(0,E.$G)().t,e=[{Icon:A.Q73,title:s("service.trading-title"),description:s("service.trading-description")},{Icon:A.uOV,title:s("service.crafting-title"),description:s("service.crafting-description")},{Icon:A.YGl,title:s("service.enchanting-title"),description:s("service.enchanting-description")},{Icon:A.DuK,title:s("service.recycling-title"),description:s("service.recycling-description")}];return(0,i.jsx)("section",{id:"service",className:"home-section",children:(0,i.jsx)("div",{className:"service-grid-top relative mx-auto service-grid",children:e.map((function(s,e){var a=s.Icon,t=s.title,n=s.description,l=(0,i.jsx)(a,{height:50,width:50,className:"text-diablo-dark-gold border-2 p-2 border-obsidian-gold rounded-full"});return(0,i.jsx)(C,{icon:l,title:t,description:n},"service-".concat(e))}))})})};function B(){return(0,i.jsxs)(t.Z,{pageTitle:"tokyo.cards",children:[(0,i.jsx)(M,{}),(0,i.jsx)(G,{})]})}}},function(s){s.O(0,[774,523,112,737,444,623,493,403,408,483,343,386,888,179],(function(){return e=5301,s(s.s=e);var e}));var e=s.O();_N_E=e}]);