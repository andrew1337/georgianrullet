(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2755:function(e,s,a){Promise.resolve().then(a.bind(a,3703))},3703:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return N}});var l=a(7437),t=a(2265);a(5309);var n=a(6691),c=a.n(n),r={src:"/georgianrullet//_next/static/media/chip.262f3a4a.svg",height:800,width:800,blurWidth:0,blurHeight:0};let i=[[1,!0],[2,!1],[3,!0],[4,!1],[5,!0],[6,!1],[7,!0],[8,!1],[9,!0],[10,!1],[11,!1],[12,!0],[13,!1],[14,!0],[15,!1],[16,!0],[17,!1],[18,!0],[19,!0],[20,!1],[21,!0],[22,!1],[23,!0],[24,!1],[25,!0],[26,!1],[27,!0],[28,!1],[29,!1],[30,!0],[31,!1],[32,!0],[33,!1],[34,!0],[35,!1],[36,!0]],d=[1,2,0].reduce((e,s)=>(e.push(i.filter(e=>e[0]%3===s)),e),[]),u=(e,s,a,t)=>{let[n,i]=s;return e.includes(n)&&0!==n?(0,l.jsx)("div",{className:i?"cell red":"cell",children:(0,l.jsxs)("div",{className:"chip",children:[(0,l.jsx)(c(),{className:"chip-icon",src:r,alt:"*"}),(0,l.jsx)("span",{className:"chip-name",children:a[t]})]})},n):(0,l.jsx)("div",{className:i?"cell red":"cell",children:n},n)};var h=e=>{let{users:s,boardState:a}=e;return(0,l.jsxs)("div",{className:"game-field",children:[(0,l.jsx)("div",{className:"top",children:"0"}),(0,l.jsx)("div",{className:"table",children:d.map((e,t)=>(0,l.jsx)("div",{className:"column",children:e.map(e=>u(a,e,s,t))},t))})]})};a(9205);let m=e=>{let{users:s,setUsers:a}=e,t=(e,l)=>{let t=[...s];t[l]=e.target.value,a(t)};return(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("table",{className:"",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"",children:"Player 1"}),(0,l.jsx)("th",{className:"",children:"Player 2"}),(0,l.jsx)("th",{className:"",children:"Player 3"}),(0,l.jsx)("th",{className:"",children:"Player 0"})]})}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"",children:(0,l.jsx)("input",{type:"text",value:s[0],onChange:e=>t(e,0),className:""})}),(0,l.jsx)("td",{className:"",children:(0,l.jsx)("input",{type:"text",value:s[1],onChange:e=>t(e,1),className:""})}),(0,l.jsx)("td",{className:"",children:(0,l.jsx)("input",{type:"text",value:s[2],onChange:e=>t(e,2),className:""})}),(0,l.jsx)("td",{className:"",children:(0,l.jsx)("input",{type:"text",value:s[3],onChange:e=>t(e,3),className:""})})]})})]}),(0,l.jsx)("button",{onClick:()=>a(["","","",""]),className:"",children:"Reset Players"})]})};var x=e=>{let{boardState:s,onSubmit:a,bank:n,onChangeBank:c,balances:r,onChangeUserBalance:i}=e,[d,u]=(0,t.useState)([]),[h,m]=(0,t.useState)(""),[x,j]=(0,t.useState)(!0),o=(e,s)=>{let a;[1,2,3].includes(e)?a=1e3:[13,14,15].includes(e)?a=2e3:[0,25,26,27].includes(e)&&(a=n);let l=[...r];l[s]+=a,i(l),c(n-a)},N=e=>0===e?3:({0:2,1:0,2:1})[e%3],v=(e,s)=>{let l=N(s),t=e[l],n=[...e],c=[25,26,27].includes(n[l]);return n[l]+=c?9:12,o(t,l),a(n),c};return(0,l.jsxs)("div",{className:"control-panel",children:[(0,l.jsx)("h2",{className:"",children:"Number History"}),(0,l.jsx)("div",{className:"",children:(0,l.jsx)("input",{type:"number",min:"0",max:"33",placeholder:"Enter number",value:h,disabled:!x,onChange:e=>{m(e.target.value)},className:""})}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("button",{onClick:()=>{let e=parseInt(h,10);return isNaN(e)||e<0||e>37?m(""):(u([...d,e]),m(""),0===e)?(o(0,3),j(!1)):v(s,e)?j(!1):void 0},disabled:!x,className:"",children:"Move Users"}),(0,l.jsx)("button",{onClick:()=>{u([]),m(""),a([1,2,3]),j(!0),c(12e3),i([2e3,2e3,2e3,2e3])},className:"",children:"Reset Game"})]}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("h3",{className:"",children:"Number History:"}),(0,l.jsx)("ul",{children:d.map((e,s)=>(0,l.jsxs)("li",{children:["Spin  ",s+1,", value: ",e]},s))})]})]})};a(3836);let j=e=>{let{users:s,balances:a,bank:t}=e;return(0,l.jsxs)("table",{className:"results",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[s.map((e,s)=>(0,l.jsx)("th",{className:"user-name",children:e},s)),(0,l.jsx)("th",{className:"user-name",children:"Bank"})]})}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[a.map((e,s)=>(0,l.jsx)("td",{className:"user-balance",children:e},s)),(0,l.jsx)("td",{className:"user-balance bank",children:t})]})})]})},o=e=>{let[s,a]=(0,t.useState)(null),[l,n]=(0,t.useState)(null);return(0,t.useEffect)(()=>{if(s)return;let l=!1,t=async()=>{if(!l)try{a(await navigator.mediaDevices.getUserMedia(e))}catch(e){n(e)}};return t(),()=>{l=!0,s&&((null==s?void 0:s.getVideoTracks)&&s.getVideoTracks().map(e=>e.stop()),(null==s?void 0:s.getAudioTracks)&&s.getAudioTracks().map(e=>e.stop()),(null==s?void 0:s.stop)&&s.stop())}},[e,s,l]),{stream:s,error:l}};var N=()=>{let[e,s]=(0,t.useState)(["","","",""]),[a,n]=(0,t.useState)(12e3),[c,r]=(0,t.useState)([2e3,2e3,2e3,2e3]),[i,d]=(0,t.useState)([1,2,3]),u=(0,t.useCallback)(e=>s(e),[]),N=(0,t.useCallback)(e=>d(e),[]),v=(0,t.useCallback)(e=>r(e),[]),p=(0,t.useCallback)(e=>n(e),[]),{stream:b,error:g}=o({audio:!1,video:!0});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"main",children:[(0,l.jsxs)("div",{className:"desc",children:[(0,l.jsx)("div",{}),(0,l.jsx)(h,{users:e,boardState:i})]}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("div",{id:"stream",children:g?(0,l.jsx)("p",{children:"error running vudeo"}):(0,l.jsx)("video",{className:"video",muted:!0,autoPlay:!0,ref:e=>{e&&(e.srcObject=b)}})}),(0,l.jsx)(j,{users:e,balances:c,bank:a})]})]}),(0,l.jsxs)("div",{className:"control-panel",children:[(0,l.jsx)(m,{users:e,setUsers:u}),(0,l.jsx)(x,{boardState:i,onSubmit:N,bank:a,onChangeBank:p,balances:c,onChangeUserBalance:v})]})]})}},5309:function(){},3836:function(){},9205:function(){}},function(e){e.O(0,[986,971,472,744],function(){return e(e.s=2755)}),_N_E=e.O()}]);