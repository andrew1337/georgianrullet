(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7806:function(e,a,s){Promise.resolve().then(s.bind(s,6563))},6563:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return b}});var t=s(7437),n=s(2265),l=s(6691),i=s.n(l),r=e=>{let[a,s]=(0,n.useState)(null),[t,l]=(0,n.useState)(null);return(0,n.useEffect)(()=>{if(a)return;let t=!1,n=async()=>{if(!t)try{s(await navigator.mediaDevices.getUserMedia(e))}catch(e){l(e)}};return n(),()=>{t=!0,a&&((null==a?void 0:a.getVideoTracks)&&a.getVideoTracks().map(e=>e.stop()),(null==a?void 0:a.getAudioTracks)&&a.getAudioTracks().map(e=>e.stop()),(null==a?void 0:a.stop)&&a.stop())}},[e,a,t]),{stream:a,error:t}},c={src:"/georgianrullet//_next/static/media/frame.3e6f3d28.png",height:883,width:1815,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAS0lEQVR42mP4tDNc9f/XxZzfT+bxPt5fyvr3UCLrn6uVvP+fTed8sNJPleHRNGUOBhzgYJMCB2EFn3ZGgKzggltxMAFmBdeDlX6qABOfKlSuUTRrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4};s(3531);let A=()=>{let{stream:e,error:a}=r({audio:!1,video:!0});return(0,t.jsxs)("div",{className:"stream-box",id:"stream",children:[(0,t.jsx)(i(),{className:"frame",id:"frame-top",src:c,alt:"*"}),!a&&(0,t.jsx)("video",{className:"video",muted:!0,autoPlay:!0,ref:a=>{a&&(a.srcObject=e)}})]})};s(5309);var d={src:"/georgianrullet//_next/static/media/rulet.5e2969e3.png",height:1591,width:843,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAcElEQVR42g3Fuw3CQBAE0JnldEJ8XAR90AgNkFMQxSACeiCgDXzenbGDp8fv+3mdTucbe78j69cOx+nFaMh/wqpLkOGUPDKBlGMsSchkaUtsewC2YQkmEOitDDhtcBNZ2plki7ANxDzmh8b4FMCEtQILp0MudAc0iAAAAABJRU5ErkJggg==",blurWidth:4,blurHeight:8},u={src:"/georgianrullet//_next/static/media/gold.9cf00311.png",height:155,width:155,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42mOAAUt1jpL2RMWTbgY8x3pSlWsYkMGsMuO11dGq/1sTlf/XR8v/r42U++9rzr8GLJnoo5TWkKz7f3m9xe9FFYZ/Zxdq/u1IVPzVGCv/vylOIZthRavjliWN9v83dTv+Wdlo8X9eqf7/Wfkaf6rCZf+7G/JuZPC1kVw5p9rm/56pHn82djn8X9Fg/n9uie6fpliF/20JChsY1nY4hs+ptv6/vMXx3+7J7n/Wttr+WVBp/L80TOE/AwNDKNgd1joCHQsb7P5PK7P8v7jB9n9FtPr/Kfm6/QzIYEGdTYCHhfjsZc32C43U+X1h4gAP+GNuVVFZvwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},g={src:"/georgianrullet//_next/static/media/black.35700687.png",height:155,width:155,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2klEQVR42mOAgZ07dxYlJSUdBdLH3FxdyxiQQWxMzMp58+b9r6mp+d/c3Py/o6Pj/9atW1eDJVeuXJGydOnS/56enr+B3L8gnJGR8bu+vv5/ampKGkNiYuLG6urq/0CJP0xMTP+FhITAbJApmzdv3siwY8eOFX19fWBBIP4PwgoKCn9KSkr+BwYErGUAgpC2tjag/bVgRbq6un8cHR3/T58+/f+BA/tDGEBg+/Zt7VVVVf97e3v/Z2dn/583b+5/GxurHgZkoKIk7bt586bZfn6+89auWe0DEwcA9mZm7u8CLTUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},m={src:"/georgianrullet//_next/static/media/blue.00d311ef.png",height:155,width:155,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA80lEQVR42mOAgWfPX5bklPacvHvv0bGUnLYaBmRQWNG9dsWaHf8rG6b9b+yY879r4uL/t27fX8MAAtev30rbtG3/f3Gz1N98Bkl/Gbij/iZkt/+qb5/zv617djZDQVnHlvK6if/lzZL+SJsm/1e1Tv/PwB71p3fK0v+37tzfyPDg4eOV/VMW/2dgCPyjYJ70n1sv4b+2feafCqB1iVktGxgYGFzD+yYt+F9aM+EfSJGpa9YfBsO0/6vW7fz/4cO7UAYQePDgYUdj+7T/M+au+l9Y2fd/646D/4OiS/sZkIFfcHrAnbv3ZselVi28deumL0wcACM4eQTGsnaiAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},h={src:"/georgianrullet//_next/static/media/light.2d11cd90.png",height:155,width:155,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/ElEQVR42mOAgWdvP5Rkbzlx8u6rd8cSNx+uYUAGRWtPrF1x5s7/8p3n/tfvv/C/48il/zdfvFkDlrz+4Fna5gv3/8vO2f+bd87evwyzd/2N3XziV82B8/9b9p7MZihZfmxL1Yaz/9Wm7/sjP2vff5X5+/4zzNn1p/vIlf+3nr/ayPDw+ZuVk3Zd+c/Qu+uP2ox9//ln7v2vuWDfn/Ld5/7Hrzu0gYGhenX4xO2X/leuO/ePoW/XH8s5B/4wzjvwf+W5O/8/vH0dCnbHgyfPO1o3nP8/+8D1/yXrz/zfevH+/6B5O/sZkEFw59qAu4+ezU6as2fh7Vu3fWHiAGv6kMr3CtpIAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};let o={1:1.2,2:1.2,3:1.2,13:5,14:5,15:5,25:8.9,26:8.9,27:8.9,34:11.9,35:11.9,36:11.9};var f=e=>{let{usernames:a,boardState:s}=e,l=(0,n.useRef)(null),[r,c]=(0,n.useState)(0),[A,f]=(0,n.useState)([0,0,0]),v=e=>r?r/14*e:0;return(0,n.useEffect)(()=>{if(l.current){let{top:e,bottom:a}=l.current.getBoundingClientRect();c(a-e)}},[l.current]),(0,n.useEffect)(()=>{f(s.map((e,a)=>v(o[s[a]])))},[s]),(0,t.jsxs)("div",{className:"game-field",ref:l,children:[(0,t.jsx)(i(),{className:"rulet",src:d,alt:"*"}),(0,t.jsxs)("div",{className:"chip",style:{right:"11%"},children:[(0,t.jsx)(i(),{className:"chip-icon",src:u,alt:"*"}),(0,t.jsx)("span",{className:"chip-name",children:a[3]})]}),(0,t.jsxs)("div",{className:"chip",style:{left:"39%",transform:"translateY(".concat(A[0],"px)")},children:[(0,t.jsx)(i(),{className:"chip-icon",src:g,alt:"*"}),(0,t.jsx)("span",{className:"chip-name",children:a[0]})]}),(0,t.jsxs)("div",{className:"chip",style:{left:"59%",transform:"translateY(".concat(A[1],"px)")},children:[(0,t.jsx)(i(),{className:"chip-icon",src:m,alt:"*"}),(0,t.jsx)("span",{className:"chip-name",children:a[1]})]}),(0,t.jsxs)("div",{className:"chip",style:{left:"80%",transform:"translateY(".concat(A[2],"px)")},children:[(0,t.jsx)(i(),{className:"chip-icon",src:h,alt:"*"}),(0,t.jsx)("span",{className:"chip-name",children:a[2]})]})]})};s(3836);var v=e=>{let{usernames:a,balances:s,bank:n,boardState:l}=e;return(0,t.jsxs)("div",{className:"results",children:[(0,t.jsx)("div",{className:"table",children:[0,1,2,3].map(e=>(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"name",children:a[e]}),(0,t.jsx)("div",{className:"count",children:"2000"}),(0,t.jsx)("div",{className:"count",children:l[e]>=13?1e3:"\xa0"}),(0,t.jsx)("div",{className:"count",children:l[e]>=25?2e3:"\xa0"}),(0,t.jsx)("div",{className:"count",children:s[e]})]},e))}),(0,t.jsxs)("div",{className:"bank",children:[(0,t.jsxs)("div",{className:"bank-block",children:[(0,t.jsx)("div",{className:"title",children:"Prize pool"}),(0,t.jsxs)("div",{className:"sum",children:["20000 ",(0,t.jsx)("span",{className:"gel",children:"Gel"})]})]}),(0,t.jsxs)("div",{className:"bank-block",children:[(0,t.jsx)("div",{className:"title",children:"Balance"}),(0,t.jsxs)("div",{className:"sum",children:[n," ",(0,t.jsx)("span",{className:"gel",children:"Gel"})]})]})]})]})},x=s(3598),b=()=>{let[e]=(0,x.Z)("usernames",["","","",""]),[a]=(0,x.Z)("boardState",[1,2,3]),[s]=(0,x.Z)("bank",12e3),[n]=(0,x.Z)("balances",[2e3,2e3,2e3,2e3]);return(0,t.jsxs)("div",{className:"main",children:[(0,t.jsx)(f,{usernames:e,boardState:a}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)(v,{usernames:e,balances:n,bank:s,boardState:a}),(0,t.jsx)(A,{})]})]})}},3598:function(e,a,s){"use strict";s.d(a,{Z:function(){return n}});var t=s(2265);function n(e,a){let[s,n]=(0,t.useState)(a),[l,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{n((()=>{try{let s=window.localStorage.getItem(e);return s?JSON.parse(s):a}catch(e){return a}})()),i(!0)},[e]),(0,t.useEffect)(()=>{let a=a=>{a.key===e&&a.newValue&&n(JSON.parse(a.newValue))};return window.addEventListener("storage",a),()=>{window.removeEventListener("storage",a)}},[e]),[s,a=>{let t=a instanceof Function?a(s):a;(function(a){if(l)try{window.localStorage.setItem(e,JSON.stringify(a)),window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:JSON.stringify(a)}))}catch(e){}})(t),n(t)}]}},5309:function(){},3836:function(){},3531:function(){}},function(e){e.O(0,[986,971,472,744],function(){return e(e.s=7806)}),_N_E=e.O()}]);