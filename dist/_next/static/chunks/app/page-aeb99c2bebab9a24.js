(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8497:function(e,s,r){Promise.resolve().then(r.bind(r,8525))},8525:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return u}});var n=r(7437),l=r(2265);r(5309);let t=Array.from({length:34},(e,s)=>s).slice(1),o=[1,2,0].reduce((e,s)=>(e.push(t.filter(e=>e%3===s)),e),[]),i=(e,s,r,l)=>e.includes(s)&&0!==s?(0,n.jsxs)("div",{children:[s," (",r[l],")"]},s):(0,n.jsx)("div",{children:s},s);var a=e=>{let{users:s,boardState:r}=e;return(0,n.jsxs)("div",{className:"game-field",children:[(0,n.jsx)("div",{className:"top-row flex justify-center items-center",children:(0,n.jsxs)("div",{className:"border px-4 py-2 gap-2 rounded-md",children:["0 (",s[3],")"]})}),(0,n.jsx)("div",{className:"grid grid-cols-3 gap-4 mt-4",children:o.map((e,l)=>(0,n.jsx)("div",{className:"column flex flex-col items-center gap-2",children:e.map(e=>i(r,e,s,l))},l))})]})};r(9205);var d=e=>{let{users:s,setUsers:r}=e,l=(e,n)=>{let l=[...s];l[n]=e.target.value,r(l)};return(0,n.jsxs)("div",{className:"container mx-auto p-4",children:[(0,n.jsxs)("table",{className:"w-full",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"border px-4 py-2",children:"Player 1"}),(0,n.jsx)("th",{className:"border px-4 py-2",children:"Player 2"}),(0,n.jsx)("th",{className:"border px-4 py-2",children:"Player 3"}),(0,n.jsx)("th",{className:"border px-4 py-2",children:"Player 0"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"border px-4 py-2",children:(0,n.jsx)("input",{type:"text",value:s[0],onChange:e=>l(e,0),className:"w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"})}),(0,n.jsx)("td",{className:"border px-4 py-2",children:(0,n.jsx)("input",{type:"text",value:s[1],onChange:e=>l(e,1),className:"w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"})}),(0,n.jsx)("td",{className:"border px-4 py-2",children:(0,n.jsx)("input",{type:"text",value:s[2],onChange:e=>l(e,2),className:"w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"})}),(0,n.jsx)("td",{className:"border px-4 py-2",children:(0,n.jsx)("input",{type:"text",value:s[3],onChange:e=>l(e,3),className:"w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"})})]})})]}),(0,n.jsx)("button",{onClick:()=>r(["","","",""]),className:"px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none",children:"Reset Players"})]})},c=e=>{let{boardState:s,onSubmit:r}=e,[t,o]=(0,l.useState)([]),[i,a]=(0,l.useState)(""),[d,c]=(0,l.useState)(!0),u=(e,s)=>{let n=s%3,l=NaN;0===n?l=3:1===n?l=0:2===n&&(l=1);let t=[...e];t[l]=t[l]+12,r(t)};return(0,n.jsxs)("div",{className:"p-6 bg-gray-100 rounded-md shadow-md justify-center",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Number History"}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("input",{type:"number",min:"0",max:"33",placeholder:"Enter number",value:i,disabled:!d,onChange:e=>{a(e.target.value)},className:"w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"})}),(0,n.jsxs)("div",{className:"flex gap-4 mb-6",children:[(0,n.jsx)("button",{onClick:()=>{let e=parseInt(i,10);return isNaN(e)||e<0||e>34?a(""):(o([...t,e]),a(""),0===e)?c(!1):void(u(s,e),(s.includes(25)||s.includes(26)||s.includes(27))&&c(!1))},disabled:!d,className:"px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none",children:"Move Users"}),(0,n.jsx)("button",{onClick:()=>{o([]),a(""),r([1,2,3]),c(!0)},className:"px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none",children:"Reset Game"})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Number History:"}),(0,n.jsx)("ul",{children:t.map((e,s)=>(0,n.jsxs)("li",{children:["Roll ",s+1," - ",e]},s))})]})]})},u=()=>{let[e,s]=(0,l.useState)(["","","",""]),[r,t]=(0,l.useState)([1,2,3]),o=(0,l.useCallback)(e=>t(e),[]);return console.log("boardState",r),(0,n.jsxs)("div",{children:[(0,n.jsx)(d,{users:e,setUsers:s}),(0,n.jsx)(a,{users:e,boardState:r}),(0,n.jsx)(c,{boardState:r,onSubmit:o})]})}},5309:function(){},9205:function(){},622:function(e,s,r){"use strict";var n=r(2265),l=Symbol.for("react.element"),t=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,r){var n,a={},d=null,c=null;for(n in void 0!==r&&(d=""+r),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)t.call(s,n)&&!i.hasOwnProperty(n)&&(a[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:l,type:e,key:d,ref:c,props:a,_owner:o.current}}s.jsx=a,s.jsxs=a},7437:function(e,s,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=8497)}),_N_E=e.O()}]);