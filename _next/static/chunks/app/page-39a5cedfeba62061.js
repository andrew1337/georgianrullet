(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2755:function(e,s,r){Promise.resolve().then(r.bind(r,8525))},8525:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return u}});var n=r(7437),t=r(2265);r(5309);let l=Array.from({length:37},(e,s)=>s).slice(1),a=[1,2,0].reduce((e,s)=>(e.push(l.filter(e=>e%3===s)),e),[]),o=(e,s,r,t)=>e.includes(s)&&0!==s?(0,n.jsxs)("div",{children:[s," (",r[t],")"]},s):(0,n.jsx)("div",{children:s},s);var i=e=>{let{users:s,boardState:r}=e;return(0,n.jsxs)("div",{className:"game-field",children:[(0,n.jsx)("div",{className:"top-row flex justify-center items-center",children:(0,n.jsxs)("div",{className:"border px-4 py-2 gap-2 rounded-md",children:["0 (",s[3],")"]})}),(0,n.jsx)("div",{className:"grid grid-cols-3 gap-4 mt-4",children:a.map((e,t)=>(0,n.jsx)("div",{className:"column flex flex-col items-center gap-2",children:e.map(e=>o(r,e,s,t))},t))})]})};r(9205);var d=e=>{let{users:s,setUsers:r}=e,t=(e,n)=>{let t=[...s];t[n]=e.target.value,r(t)};return(0,n.jsxs)("div",{className:"container mx-auto p-4",children:[(0,n.jsxs)("table",{className:"w-full",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"border px-4 py-2",children:"Player 1"}),(0,n.jsx)("th",{className:"border px-4 py-2",children:"Player 2"}),(0,n.jsx)("th",{className:"border px-4 py-2",children:"Player 3"}),(0,n.jsx)("th",{className:"border px-4 py-2",children:"Player 0"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"border px-4 py-2",children:(0,n.jsx)("input",{type:"text",value:s[0],onChange:e=>t(e,0),className:"w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"})}),(0,n.jsx)("td",{className:"border px-4 py-2",children:(0,n.jsx)("input",{type:"text",value:s[1],onChange:e=>t(e,1),className:"w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"})}),(0,n.jsx)("td",{className:"border px-4 py-2",children:(0,n.jsx)("input",{type:"text",value:s[2],onChange:e=>t(e,2),className:"w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"})}),(0,n.jsx)("td",{className:"border px-4 py-2",children:(0,n.jsx)("input",{type:"text",value:s[3],onChange:e=>t(e,3),className:"w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"})})]})})]}),(0,n.jsx)("button",{onClick:()=>r(["","","",""]),className:"px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none",children:"Reset Players"})]})},c=e=>{let{boardState:s,onSubmit:r}=e,[l,a]=(0,t.useState)([]),[o,i]=(0,t.useState)(""),[d,c]=(0,t.useState)(!0),u=(e,s)=>{let n;switch(s%3){case 0:n=2;break;case 1:n=0;break;case 2:n=1}let t=[...e],l=25===t[n]||26===t[n]||27===t[n];return t[n]+=l?9:12,r(t),l};return(0,n.jsxs)("div",{className:"p-6 bg-gray-100 rounded-md shadow-md justify-center",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Number History"}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("input",{type:"number",min:"0",max:"33",placeholder:"Enter number",value:o,disabled:!d,onChange:e=>{i(e.target.value)},className:"w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"})}),(0,n.jsxs)("div",{className:"flex gap-4 mb-6",children:[(0,n.jsx)("button",{onClick:()=>{let e=parseInt(o,10);return isNaN(e)||e<0||e>37?i(""):(a([...l,e]),i(""),0===e||u(s,e))?c(!1):void 0},disabled:!d,className:"px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none",children:"Move Users"}),(0,n.jsx)("button",{onClick:()=>{a([]),i(""),r([1,2,3]),c(!0)},className:"px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none",children:"Reset Game"})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Number History:"}),(0,n.jsx)("ul",{children:l.map((e,s)=>(0,n.jsxs)("li",{children:["Spin  ",s+1,", value: ",e]},s))})]})]})},u=()=>{let[e,s]=(0,t.useState)(["","","",""]),[r,l]=(0,t.useState)([1,2,3]),a=(0,t.useCallback)(e=>s(e),[]),o=(0,t.useCallback)(e=>l(e),[]);return console.log("boardState",r),(0,n.jsxs)("div",{children:[(0,n.jsx)(d,{users:e,setUsers:a}),(0,n.jsx)(i,{users:e,boardState:r}),(0,n.jsx)(c,{boardState:r,onSubmit:o})]})}},5309:function(){},9205:function(){},622:function(e,s,r){"use strict";var n=r(2265),t=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,r){var n,i={},d=null,c=null;for(n in void 0!==r&&(d=""+r),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)l.call(s,n)&&!o.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:t,type:e,key:d,ref:c,props:i,_owner:a.current}}s.jsx=i,s.jsxs=i},7437:function(e,s,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=2755)}),_N_E=e.O()}]);