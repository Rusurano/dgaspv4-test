(this["webpackJsonpgasp-v4"]=this["webpackJsonpgasp-v4"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(18),a=n.n(r),i=(n(77),n(78),n(7)),l=n(134),o=n(135),j=n(136),u=n(22),d=n(19),b=n.n(d),O=n(8),f=n(27),x=n(66),g=n.n(x),h=n(1),p="1Kh5Fd40b-dXtLtCPNTuLHd_fwVC8I9Dvl3fO5cWmogA",m="1KGAbuq5rwbSWSLmTOeL8ng8qrprK1KfdJu_Rf_loBS8",v={masterList:[m,"Master List","A2:F"],doNotPingList:[m,"Do not ping","A2:A"],rulesData:[p,"Gasp Translations","A:B"],keywordsData:[m,"Keywords","A2:A"],breedsData:[m,"Breed","A2:A"],siteStatus:[m,"Status","A1:A"],dynamicFields:[p,"App Content","B1:B"]},A=Object(c.createContext)(),B=function(e){var t=e.children,n=Object(c.useState)({status:0,content:[]}),s=Object(i.a)(n,2),r=s[0],a=s[1],l=Object(c.useState)({status:0,content:[]}),o=Object(i.a)(l,2),j=o[0],d=o[1],x=Object(c.useState)({status:0,content:[]}),p=Object(i.a)(x,2),m=p[0],B=p[1],w=Object(c.useState)({status:0,content:[]}),C=Object(i.a)(w,2),I=C[0],E=C[1],y=Object(c.useState)({status:0,content:[]}),G=Object(i.a)(y,2),M=G[0],k=G[1],D=Object(c.useState)({status:0,content:[]}),T=Object(i.a)(D,2),J=T[0],U=T[1],R=Object(c.useState)({status:0,content:[]}),P=Object(i.a)(R,2),F=P[0],S=P[1],L=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var c,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){var e=Object(f.a)(b.a.mark((function e(t,n,c,s){var i,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c?"'".concat(c,"'!").concat(s):s,"masterList"===t&&a(Object(O.a)(Object(O.a)({},r),{},{status:1})),"doNotPingList"===t&&d(Object(O.a)(Object(O.a)({},j),{},{status:1})),"rulesData"===t&&B(Object(O.a)(Object(O.a)({},m),{},{status:1})),"keywordsData"===t&&E(Object(O.a)(Object(O.a)({},I),{},{status:1})),"breedsData"===t&&k(Object(O.a)(Object(O.a)({},M),{},{status:1})),"siteStatus"===t&&U(Object(O.a)(Object(O.a)({},J),{},{status:1})),"dynamicFields"===t&&S(Object(O.a)(Object(O.a)({},F),{},{status:1})),e.next=10,g.a.get("https://sheets.googleapis.com/v4/spreadsheets/".concat(n,"/values/").concat(i),{params:{key:"AIzaSyDGLVvBm5uNAMlLEV1q-h9Gpu1misQg6I8"}});case 10:return l=e.sent,e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(t,n,c,s){return e.apply(this,arguments)}}(),s=function(e,t){var n=e.data;200!==e.status?("masterList"===t&&a(Object(O.a)(Object(O.a)({},r),{},{status:2})),"doNotPingList"===t&&d(Object(O.a)(Object(O.a)({},j),{},{status:2})),"rulesData"===t&&B(Object(O.a)(Object(O.a)({},m),{},{status:2})),"keywordsData"===t&&E(Object(O.a)(Object(O.a)({},I),{},{status:2})),"breedsData"===t&&k(Object(O.a)(Object(O.a)({},M),{},{status:2})),"siteStatus"===t&&U(Object(O.a)(Object(O.a)({},J),{},{status:2})),"dynamicFields"===t&&S(Object(O.a)(Object(O.a)({},F),{},{status:2}))):("masterList"===t&&a(Object(O.a)(Object(O.a)({},r),{},{status:3,content:n.values})),"doNotPingList"===t&&d(Object(O.a)(Object(O.a)({},j),{},{status:3,content:n.values})),"rulesData"===t&&B(Object(O.a)(Object(O.a)({},m),{},{status:3,content:n.values})),"keywordsData"===t&&E(Object(O.a)(Object(O.a)({},I),{},{status:3,content:n.values})),"breedsData"===t&&k(Object(O.a)(Object(O.a)({},M),{},{status:3,content:n.values})),"siteStatus"===t&&U(Object(O.a)(Object(O.a)({},J),{},{status:3,content:n.values})),"dynamicFields"===t&&S(Object(O.a)(Object(O.a)({},F),{},{status:3,content:n.values})))},e.prev=2,e.next=5,c.apply(void 0,[n].concat(Object(u.a)(t)));case 5:i=e.sent,s(i,n),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(h.jsx)(A.Provider,{value:{updateMasterList:function(){return L(v.masterList,"masterList")},updateSheet:L,updateSheets:function(){for(var e in v)L(v[e],e)},sheets:[r,j,m,I,M,J,F]},children:t})},w=n(67),C=n.n(w),I=function(e){var t=e.className,n=e.content;return n?Object(h.jsx)("span",{className:t||"",dangerouslySetInnerHTML:{__html:n}}):Object(h.jsx)("span",{children:"Error Fetching Content."})},E=function(e){var t=e.fieldId,n=e.placeholders,s=Object(c.useContext)(A).sheets,r=Object(c.useState)(""),a=Object(i.a)(r,2),l=a[0],o=a[1];return Object(c.useEffect)((function(){var e=s[6].content[t][0];n&&(e=C()({pattern:/\%.*?\%/gim,decorator:function(e){return(n.find((function(t){return t[0]==e}))||[])[1]},input:e})),o(e)}),[t]),Array.isArray(l)?l.map((function(e,t){return"string"===typeof e||e instanceof String?Object(h.jsx)(I,{content:e}):Object(h.jsx)(c.Fragment,{children:e},t)})):Object(h.jsx)(I,{content:l})},y=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"http://www1.flightrising.com/forums/skin/2480522",children:Object(h.jsx)("img",{alt:"General Accent & Skin Pinglists - Logo",src:"data:image/png;base64,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"})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:Object(h.jsx)(E,{fieldId:8})})]})},G=function(){var e=Object(c.useContext)(A);return Object(h.jsx)("ul",{children:e.sheets[2].content.map((function(e,t){return function(e,t){var n=e[1];return void 0!==n&&(n.startsWith("-")&&(n="<br/>"),e[0].startsWith("gasp_"))?(n.startsWith("\u2022 ")&&(n="<li>"+n.substring(2)+"</li>"),"-<br/>"!==n?Object(h.jsx)(I,{className:"rulePosition",content:n},t):Object(h.jsx)("span",{},t)):Object(h.jsx)("span",{},t)}(e,t)}))})},M=(n(98),Object(c.createContext)()),k=function(e){var t=e.children,n=Object(c.useState)(4),s=Object(i.a)(n,2),r=s[0],a=s[1];return Object(h.jsx)(M.Provider,{value:[r,a],children:t})},D=n(129),T=function(e){return Object(h.jsx)("div",{className:"loader w-100 d-flex align-items-center min-vh-100",children:Object(h.jsxs)("div",{className:"w-75 text-center mx-auto",children:[Object(h.jsxs)("div",{children:["Loading (",e.percentage,"%)"]}),Object(h.jsx)(D.a,{animated:!0,color:"info",value:e.percentage})]})})},J=n(130),U=n(145),R=n(131),P=n(132),F=function(){var e=Object(c.useContext)(M),t=Object(i.a)(e,2),n=(t[0],t[1]),s=Object(c.useState)(!1),r=Object(i.a)(s,2),a=r[0],l=r[1];return Object(h.jsxs)(J.a,{isOpen:a,toggle:function(){return l((function(e){return!e}))},children:[Object(h.jsx)(U.a,{caret:!0,children:Object(h.jsx)(E,{fieldId:53})}),Object(h.jsxs)(R.a,{children:[Object(h.jsx)(P.a,{header:!0,children:Object(h.jsx)(E,{fieldId:54})}),Object(h.jsx)(P.a,{onClick:function(){return n(1)},children:Object(h.jsx)(E,{fieldId:55})}),Object(h.jsx)(P.a,{onClick:function(){return n(3)},children:Object(h.jsx)(E,{fieldId:56})}),Object(h.jsx)(P.a,{onClick:function(){return n(4)},children:Object(h.jsx)(E,{fieldId:57})})]})]})},S=n(16),L=n(15),Q=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],r=function(){var e=window.scrollY;s(e>300)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",r,!0),function(){window.removeEventListener("scroll",r)}}),[]),Object(h.jsx)("button",{className:"backToTopButton".concat(n?" show":""),onClick:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];window.scrollTo({top:0,left:0,behavior:"smooth"}),e&&e.preventDefault()},children:Object(h.jsx)(S.a,{icon:L.a,size:"2x"})})},Y=n(34),N=n(33),Z=n(68),z=n(137),W=n(71),K=n(144),V=n(139),q=n(140),H=n(147),X=n(141),$=n(142),_=n(143),ee=n(133),te=n(138),ne=n(146),ce=function(e){var t=e.keyword,n=e.onToggle,s=Object(c.useState)(!1),r=Object(i.a)(s,2),a=r[0],l=r[1];Object(c.useEffect)((function(){n(t,a)}),[a]);return Object(h.jsx)(c.Fragment,{children:Object(h.jsx)(Z.a,{outline:!0,className:"keywordButton",color:"info",onClick:function(){return l((function(e){return!e}))},active:a,children:t})})},se=function(e){var t=e.id,n=e.breed,s=e.coverage,r=e.sellerType,a=e.keywords,u=e.setBreed,d=e.setCoverage,b=e.setSellerType,O=e.setKeywords,f=Object(c.useContext)(A).sheets,x=Object(c.useState)(!1),g=Object(i.a)(x,2),p=g[0],m=g[1];return Object(h.jsx)(ee.a,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsxs)(o.a,{className:"PinglistSelectors",children:[Object(h.jsx)(j.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:{size:4,offset:0},children:Object(h.jsxs)(z.a,{type:"select",name:"selectedBreed",value:n,defaultValue:0,onChange:function(e){return u(e.target.value)},children:[Object(h.jsx)("option",{disabled:!0,value:"0",children:f[6].content[24][0]}),f[4].content.map((function(e,t){return Object(h.jsx)("option",{value:e[0],children:e[0]},t)}))]})}),Object(h.jsx)(j.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:{size:4,offset:0},children:Object(h.jsxs)(z.a,{type:"select",name:"selectedCoverage",value:s,defaultValue:0,onChange:function(e){return d(e.target.value)},children:[Object(h.jsx)("option",{value:"0",disabled:!0,children:f[6].content[25][0]}),Object(h.jsx)("option",{value:"Accents",children:"Accent (up to 30%)"}),Object(h.jsx)("option",{value:"Skincents",children:"Skincent (31% to 99%)"}),Object(h.jsx)("option",{value:"Skins",children:"Skin (100%)"})]})}),Object(h.jsx)(j.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:{size:4,offset:0},children:Object(h.jsxs)(te.a,{children:[Object(h.jsxs)(ne.a,{addonType:"prepend",children:[Object(h.jsx)(Z.a,{className:"form-control PopoverResell",type:"button",color:"light",id:"PopoverResell".concat(t),children:Object(h.jsx)(S.a,{icon:L.f})}),Object(h.jsxs)(K.a,{trigger:"hover",placement:"bottom",isOpen:p,target:"PopoverResell".concat(t),toggle:function(){return m((function(e){return!e}))},children:[Object(h.jsx)(V.a,{children:Object(h.jsx)(E,{fieldId:11})}),Object(h.jsx)(q.a,{children:Object(h.jsx)(E,{fieldId:12})})]})]}),Object(h.jsxs)(z.a,{type:"select",name:"selectedResell",value:r,defaultValue:-1,onChange:function(e){return b(e.target.value)},children:[Object(h.jsx)("option",{value:"-1",disabled:!0,children:f[6].content[26][0]}),Object(h.jsx)("option",{value:"0",children:f[6].content[52][0]}),Object(h.jsx)("option",{value:"1",children:f[6].content[51][0]}),Object(h.jsx)("option",{value:"help1",style:{fontStyle:"italic"},disabled:!0,children:f[6].content[50][0]})]})]})})]}),Object(h.jsx)("h4",{children:"Keywords"}),Object(h.jsx)(o.a,{children:Object(h.jsx)(j.a,{children:Object(h.jsx)(l.a,{className:"keywordContainer",children:Object(h.jsx)(o.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"2",children:f[3].content.map((function(e,t){return Object(h.jsx)(j.a,{children:Object(h.jsx)(ce,{keyword:e,onToggle:function(e,t){return O(t?a.concat(e):a.filter((function(t){return"".concat(t)!=="".concat(e)})))}})},t)}))})})})})]})})},re=function(e){var t=e.targetId,n=Object(c.useState)(!1),s=Object(i.a)(n,2),r=s[0],a=s[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"iconEligible",id:"iconEligible".concat(t),children:Object(h.jsx)(S.a,{icon:L.d})}),Object(h.jsxs)(K.a,{trigger:"hover",placement:"bottom",isOpen:r,target:"iconEligible".concat(t),toggle:function(){return a((function(e){return!e}))},children:[Object(h.jsx)(V.a,{children:Object(h.jsx)(E,{fieldId:41})}),Object(h.jsx)(q.a,{children:Object(h.jsx)(E,{fieldId:42})})]})]})},ae=function(e){var t=e.targetId,n=e.breed,s=e.coverage,r=e.sellerType,a=e.keywords,l=Object(c.useState)(!1),o=Object(i.a)(l,2),j=o[0],u=o[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"iconIneligible",id:"iconIneligible".concat(t),children:Object(h.jsx)(S.a,{icon:L.e})}),Object(h.jsxs)(K.a,{trigger:"hover",placement:"bottom",isOpen:j,target:"iconIneligible".concat(t),toggle:function(){return u((function(e){return!e}))},children:[Object(h.jsx)(V.a,{children:Object(h.jsx)(E,{fieldId:34})}),Object(h.jsxs)(q.a,{children:[Object(h.jsx)(E,{fieldId:35}),Object(h.jsx)("br",{}),function(){var e=[];return n||e.push(36),s||e.push(37),r||e.push(38),0===a.length&&e.push(39),e}().map((function(e,t){return Object(h.jsxs)(c.Fragment,{children:["- ",Object(h.jsx)(E,{fieldId:e}),Object(h.jsx)("br",{})]},t)})),Object(h.jsx)("br",{}),Object(h.jsx)(E,{fieldId:40})]})]})]})},ie=function(e){var t=e.id,n=e.breed,s=e.coverage,r=e.sellerType,a=e.keywords,l=Object(c.useState)(!1),o=Object(i.a)(l,2),j=o[0],u=o[1];return Object(c.useEffect)((function(){u(n&&s&&r&&a.length>0)}),[n,s,r,a]),j?Object(h.jsx)(re,{targetId:t}):Object(h.jsx)(ae,{targetId:t,breed:n,coverage:s,sellerType:r,keywords:a})},le=function(e){var t=e.details,n=e.onConfirm,s=Object(c.useState)(!1),r=Object(i.a)(s,2),a=r[0],l=r[1],o=function(){return l((function(e){return!e}))};return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)(Z.a,{className:"pinglistFilterButton1",onClick:o,children:Object(h.jsx)(S.a,{icon:L.g})}),Object(h.jsxs)(H.a,{isOpen:a,toggle:o,className:"FilterDeletionModal",children:[Object(h.jsx)(X.a,{toggle:o,children:Object(h.jsx)(E,{fieldId:43})}),Object(h.jsx)($.a,{children:Object(h.jsx)(E,{fieldId:44,placeholders:[["%DATA%",t]]})}),Object(h.jsxs)(_.a,{children:[Object(h.jsx)(Z.a,{color:"primary",onClick:n,children:Object(h.jsx)(E,{fieldId:45})})," ",Object(h.jsx)(Z.a,{color:"secondary",onClick:o,children:Object(h.jsx)(E,{fieldId:46})})]})]})]})},oe=function(e){var t=e.onUpdate,n=e.onRemoval,s=e.id,r=e.index,a=e.expanded,d=Object(c.useState)(!0),b=Object(i.a)(d,2),O=b[0],f=b[1],x=Object(c.useState)(null),g=Object(i.a)(x,2),p=g[0],m=g[1],v=Object(c.useState)(null),A=Object(i.a)(v,2),B=A[0],w=A[1],C=Object(c.useState)(null),I=Object(i.a)(C,2),y=I[0],G=I[1],M=Object(c.useState)([]),k=Object(i.a)(M,2),D=k[0],T=k[1];Object(c.useEffect)((function(){f(a)}),[a]),Object(c.useEffect)((function(){t({expanded:O,eligible:!!(p&&B&&y&&D.length>0),filters:{breed:p,coverage:B,sellerType:y,keywords:Object(u.a)(D)}})}),[p,B,y,D,O]);var J=function(e){var t=[];return p&&t.push(p),B&&t.push(B.toLowerCase().slice(0,-1)),"1"===y&&t.push("resell"),t.push.apply(t,Object(u.a)(D)),p||B||y||D.length>0?Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)(E,{fieldId:e?47:19}),t.join(", ")]}):Object(h.jsx)(c.Fragment,{children:Object(h.jsx)(E,{fieldId:e?48:18})})};return Object(h.jsxs)(l.a,{fluid:!0,className:"pinglistFilterContainer",children:[Object(h.jsxs)(o.a,{className:"pinglistFilterHeader align-items-center",children:[Object(h.jsxs)(j.a,{className:"pinglistFilterTitle",xs:9,sm:9,md:9,lg:9,xl:9,children:[Object(h.jsx)(ie,{id:s,breed:p,coverage:B,sellerType:y,keywords:D}),"\xa0\xa0",Object(h.jsxs)("span",{className:"pinglistFilterTitleText",children:[Object(h.jsx)(E,{fieldId:20}),r+1]})]}),Object(h.jsxs)(j.a,{className:"pinglistFilterOptions",xs:3,sm:3,md:3,lg:3,xl:3,children:[Object(h.jsx)(le,{details:J(!0),onConfirm:n}),Object(h.jsx)(Z.a,{className:"pinglistFilterButton2",onClick:function(){return f((function(e){return!e}))},children:Object(h.jsx)(S.a,{icon:O?L.c:L.b,size:"2x"})})]})]}),Object(h.jsx)(o.a,{className:O?"pinglistFilterContentBox":"pinglistFilterContentBox collapsed",children:Object(h.jsx)(j.a,{children:Object(h.jsx)(se,{id:s,breed:p,coverage:B,sellerType:y,keywords:D,setBreed:m,setCoverage:w,setSellerType:G,setKeywords:T})})}),Object(h.jsx)(o.a,{className:"pinglistFilterFooter",children:Object(h.jsx)(j.a,{children:J(!1)})})]})},je=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),s=n[0],r=n[1];return Object(h.jsxs)(K.a,{trigger:"hover",placement:"bottom",isOpen:s,target:e.targetElementId,toggle:function(){return r((function(e){return!e}))},children:[Object(h.jsx)(V.a,{children:e.header}),Object(h.jsx)(q.a,{children:e.content})]})},ue=n(72),de=n(36),be=n.n(de),Oe=function(){var e=Object(c.useContext)(A),t=e.sheets,n=e.updateMasterList,s=Object(c.useState)([]),r=Object(i.a)(s,2),a=r[0],l=r[1],o=Object(c.useState)(!1),j=Object(i.a)(o,2),d=j[0],O=j[1],x=Object(c.useState)(!1),g=Object(i.a)(x,2),p=g[0],m=g[1],v=Object(c.useState)(""),B=Object(i.a)(v,2),w=B[0],C=B[1],y=Object(c.useState)(0),G=Object(i.a)(y,2),M=G[0],k=G[1],D=Object(c.useState)(""),T=Object(i.a)(D,2),J=T[0],U=T[1];Object(c.useEffect)((function(){C(t[6].content[""===J?21:22][0])}),[J]),Object(c.useEffect)((function(){var e=t[0].status;1===e?C(t[6].content[65][0]):2===e&&C(t[6].content[66][0])}),[t]);var R=function(e){var n,c=e.filters,s=t[6].content[1][0].split(", "),r=[],a=Object(N.a)(s);try{for(a.s();!(n=a.n()).done;){var i=n.value;"%BREED%"===i&&r.push(c.breed?c.breed:""),"%COVERAGE%"===i&&r.push(c.coverage?c.coverage.toLowerCase().slice(0,-1):""),"%RESELL%"===i&&r.push("1"===c.sellerType?"resell":""),"%OTHERS%"===i&&r.push(c.keywords.join(", "))}}catch(l){a.e(l)}finally{a.f()}return r},P=function(e,n){var c=e[0].trim(),s=e[1].split(", "),r=e[2].split(", "),a=e[3].split(", "),i=e.length>4?e[4].split(", "):[],l=n.keywords.filter((function(e){return!i.includes(e)})),o=Array.from(l).filter((function(e){return a.includes(e)}));return!function(e,t){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?e.flat(1/0).includes(t):e.includes(t)}(t[1].content,c,!0)&&(l.length===n.keywords.length&&(0!==l.length&&(("1"!==n.sellerType||!i.includes("resell"))&&(!!s.includes(n.breed)&&(!!r.includes(n.coverage)&&!(!a.includes("no preference")&&0===o.length))))))},F=function(){var e=Object(f.a)(b.a.mark((function e(){var c,s,r,i,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:if(3!==t[0].status){e.next=10;break}C(t[6].content[67][0]),c=[],s=t[6].content[5][0],r=Object(N.a)(a.filter((function(e){return e.eligible})));try{for(l=function(){var e,n=i.value,r=[],a=Object(N.a)(t[0].content.filter((function(e){return P(e,n.filters)})).map((function(e){return e[0].trim()})));try{for(a.s();!(e=a.n()).done;){var l=e.value;r.push(s.replace("%USER%",l))}}catch(o){a.e(o)}finally{a.f()}c=[].concat(Object(u.a)(c),r).filter((function(e,t,n){return n.indexOf(e)===t}))},r.s();!(i=r.n()).done;)l()}catch(o){r.e(o)}finally{r.f()}return e.abrupt("return",c.join(" "));case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:return e.abrupt("return","");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(f.a)(b.a.mark((function e(){var n,c,s,r,i,l,o,j,u,d,O;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,F();case 3:n=e.sent,c=a.filter((function(e){return e.eligible})).length,s=t[6].content[0][0],r=t[6].content[3][0],i=t[6].content[4][0],l="",o="",j=Object(N.a)(a.filter((function(e){return e.eligible})));try{for(j.s();!(u=j.n()).done;)d=u.value,O=R(d),o+=O.filter((function(e){return""!==e})).join(r)+i}catch(b){j.e(b)}finally{j.f()}0===c?l=t[6].content[7][0]:(o=o.substring(0,o.length-i.length),1===c&&(s=t[6].content[49][0]),l=(l=s.replace("%KEYWORDS%",o)).replace("%PINGLIST%",n)),U(l),m(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){U(""),O(a.some((function(e){return e.eligible})))}),[a]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:Object(h.jsx)(E,{fieldId:31})}),a.map((function(e,t){return Object(h.jsx)(c.Fragment,{children:Object(h.jsx)(oe,{onUpdate:function(t){return function(e,t,n,c){var s=Object(Y.a)({},a.findIndex((function(t){return t.id===e})),{expanded:{$set:t},eligible:{$set:n},filters:{$set:c}});a[a.findIndex((function(t){return t.id===e}))].expanded!==t&&t&&a.some((function(e){return e.expanded}))&&(s[a.findIndex((function(e){return e.expanded}))]={expanded:{$set:!1}}),l(be()(a,s))}(e.id,t.expanded,t.eligible,t.filters)},onRemoval:function(){return t=e.id,l(be()(a,{$splice:[[a.findIndex((function(e){return e.id===t})),1]]}));var t},id:e.id,index:t,expanded:e.expanded})},e.id)})),Object(h.jsx)(E,{fieldId:0===M?13:0===a.length?14:15}),Object(h.jsx)("br",{}),Object(h.jsx)(Z.a,{className:"NewPinglistButton",onClick:function(){var e={$push:[{id:Object(ue.a)(),expanded:!0,eligible:!1,filters:{}}]};a.some((function(e){return e.expanded}))&&(e[a.findIndex((function(e){return e.expanded}))]={expanded:{$set:!1}}),l(be()(a,e)),k((function(e){return e+1}))},children:Object(h.jsx)(E,{fieldId:0===M||0===a.length?16:17})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{id:"GenPinglistPopover",children:Object(h.jsx)(S.a,{icon:L.f})})," \xa0",Object(h.jsx)(je,{targetElementId:"GenPinglistPopover",header:Object(h.jsx)(E,{fieldId:9}),content:Object(h.jsx)(E,{fieldId:10})}),Object(h.jsx)(W.CopyToClipboard,{text:J,children:Object(h.jsx)(Z.a,{className:""===J?"GenerateButton":"CopyButton",disabled:!d||p,onClick:""===J?Q:function(){},children:Object(h.jsx)(I,{content:w})})}),Object(h.jsx)(z.a,{className:"ReadyPinglistServeContainer",type:"textarea",readOnly:!0,value:J})]})},fe=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(0),a=Object(i.a)(r,2),u=a[0],d=a[1],b=Object(c.useContext)(M),O=Object(i.a)(b,2),f=O[0],x=(O[1],Object(c.useContext)(A));return Object(c.useEffect)((function(){if(n){var e=x.sheets.length,t=x.sheets.map((function(e){return e.status})).filter((function(e){return 3===e})).length;d(Math.trunc(100*t/e)),t===e&&s(!1)}}),Object.values(x.sheets)),Object(c.useEffect)((function(){var e=function(e){"[object HTMLButtonElement]"===document.activeElement.toString()&&document.activeElement.blur()};return x.updateSheets(),document.addEventListener("click",e,!0),function(){document.removeEventListener("click",e)}}),[]),n?Object(h.jsx)(T,{percentage:u}):Object(h.jsxs)("div",{className:"App theme".concat(f),children:[Object(h.jsx)(l.a,{fluid:!0,className:"HeaderRow",children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(j.a,{className:"HeaderContent",children:[Object(h.jsx)(y,{}),Object(h.jsx)(F,{})]})})}),Object(h.jsx)(l.a,{fluid:!0,className:"ContentRow",children:Object(h.jsxs)(o.a,{xs:"1",sm:"1",md:"2",lg:"2",xl:"2",children:[Object(h.jsx)(j.a,{children:Object(h.jsx)("div",{className:"RulesCol",children:Object(h.jsx)(G,{})})}),Object(h.jsx)(j.a,{children:Object(h.jsx)("div",{className:"PinglistCol",children:Object(h.jsx)(Oe,{})})})]})}),Object(h.jsxs)(l.a,{fluid:!0,className:"FooterRow",children:[Object(h.jsx)(o.a,{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(E,{fieldId:32})," Coding by ",Object(h.jsx)("b",{children:"Duosora"}),"."]})}),Object(h.jsx)(o.a,{children:Object(h.jsx)(j.a,{children:Object(h.jsx)(E,{fieldId:33})})})]}),Object(h.jsx)(Q,{})]})};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(B,{children:Object(h.jsx)(k,{children:Object(h.jsx)(fe,{})})})}),document.getElementById("root"))},78:function(e,t,n){},98:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.fe72437b.chunk.js.map