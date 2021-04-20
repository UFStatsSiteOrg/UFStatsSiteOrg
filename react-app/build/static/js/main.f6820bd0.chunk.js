(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{104:function(e,t,s){},107:function(e,t,s){},108:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(15),r=s.n(n),l=(s(36),s(27)),i=s(28),o=s(32),d=s(31),j=s(113),u=s(114),x=(s(67),s(1)),b=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(x.jsxs)(j.a,{bg:"custom",variant:"white",children:[Object(x.jsx)(j.a.Brand,{href:"/"}),Object(x.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(u.a,{className:"mr-auto ml-auto",children:[Object(x.jsx)(u.a.Link,{href:"/",children:"Home"}),Object(x.jsx)(u.a.Link,{href:"/officers",children:"Officers"}),Object(x.jsx)(u.a.Link,{href:"/polls",children:"Polls"}),Object(x.jsx)(u.a.Link,{href:"/r",children:"Use R"}),Object(x.jsx)(u.a.Link,{href:"/internships",children:"Internships"}),Object(x.jsx)(u.a.Link,{href:"/contact",children:"Contact Us"})]})})]})}}]),s}(a.Component),h=s(22),m=s(16),f=s(17),p=(s(44),a.Component,s(76),s(8)),O=s(10),g=s(58),v=s.n(g),w=s(115),y=(s(81),s(82));function N(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(JSON.parse(localStorage.getItem("items"))||[]),r=Object(O.a)(n,2),l=r[0],i=r[1],o=function(){if(""!==s.trim()){var e={id:Object(w.a)(),item:s,color:y({luminosity:"light"}),defaultPos:{x:100,y:0}};i((function(t){return[].concat(Object(p.a)(t),[e])})),c("")}else alert("Enter a item"),c("")};Object(a.useEffect)((function(){localStorage.setItem("items",JSON.stringify(l))}),[l]);return Object(x.jsxs)("div",{className:"Bulletin",children:[Object(x.jsxs)("div",{id:"new-item",children:[Object(x.jsx)("input",{value:s,onChange:function(e){return c(e.target.value)},placeholder:"Enter something...",onKeyPress:function(e){var t;13===((t=e).keyCode||t.which)&&o()}}),Object(x.jsx)("button",{onClick:o,children:"ENTER"})]}),l.map((function(e,t){return Object(x.jsx)(v.a,{defaultPosition:e.defaultPos,onStop:function(e,s){!function(e,t){var s=Object(p.a)(l);s[t].defaultPos={x:e.x,y:e.y},i(s)}(s,t)},children:Object(x.jsxs)("div",{style:{backgroundColor:e.color},className:"box",children:["".concat(e.item),Object(x.jsx)("button",{id:"delete",onClick:function(t){return s=e.id,void i(l.filter((function(e){return e.id!==s})));var s},children:"X"})]})},e.id)}))]})}s.p;var k=s(5),C=s.n(k),S=s(11);s(85);var E=s(111),L=s(112);var P=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(b,{}),Object(x.jsxs)("div",{className:"containers",children:[Object(x.jsx)("a",{href:"https://www.linkedin.com/company/university-of-florida-statistics-club/about/",className:"linkedin social",children:Object(x.jsx)(m.a,{icon:f.a,size:"2x"})}),Object(x.jsx)("a",{href:"https://www.instagram.com/ufstatsclub/?hl=en",className:"fb social",children:Object(x.jsx)(m.a,{icon:f.b,size:"2x"})}),Object(x.jsxs)("a",{href:"https://www.linkedin.com/company/university-of-florida-statistics-club/about/",className:"insta social",children:[Object(x.jsx)(m.a,{icon:f.c,size:"2x"})," "]}),Object(x.jsx)("a",{href:"https://twitter.com/uf_stats_club?lang=en",className:"twit social",children:Object(x.jsx)(m.a,{icon:f.d,size:"2x"})})]}),Object(x.jsx)(h.a,{className:"cover"}),Object(x.jsx)(E.a,{children:Object(x.jsx)(L.a,{children:Object(x.jsx)(N,{})})})]})};s(86);var z=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(b,{}),Object(x.jsx)(h.a,{className:"b py-16",children:Object(x.jsx)("h1",{className:"home-header font-semibold text-3xl",children:"Statistics Club Officers"})}),Object(x.jsxs)("div",{class:"grid gap-x-48 mx-auto flex space-x-4 gap-y-32 grid-cols-2 w-2/3",children:[Object(x.jsx)("div",{className:"mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow",children:Object(x.jsx)("h1",{className:"text-black",children:"President: Hunter Tomich"})}),Object(x.jsx)("div",{className:"mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow",children:Object(x.jsx)("h1",{className:"text-black",children:"Vice President: Kevin Kapadia"})}),Object(x.jsx)("div",{className:"mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow",children:Object(x.jsx)("h1",{className:"text-black",children:"Treasurer: Hannah McDonald"})}),Object(x.jsx)("div",{className:"mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow",children:Object(x.jsx)("h1",{className:"text-black",children:"Workshops Chair: Emily Zhang"})}),Object(x.jsx)("div",{className:"mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow",children:Object(x.jsx)("h1",{className:"text-black",children:"Social Chair: Lily Hernandez"})}),Object(x.jsx)("div",{className:"mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow",children:Object(x.jsx)("h1",{className:"text-black",children:"Tutoring Chairs: Jenn Dorrian and Kathy Kong"})}),Object(x.jsx)("div",{className:"mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow",children:Object(x.jsx)("h1",{className:"text-black",children:"Fundraising Chairs: Jake Shannin and Jordan Sutherland"})}),Object(x.jsx)("div",{className:"mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow",children:Object(x.jsx)("h1",{className:"text-black",children:"Workshops Chair: Emily Zhang"})}),Object(x.jsx)("div",{className:"mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow",children:Object(x.jsx)("h1",{className:"text-black",children:"Social Media Committee: Sam Anderman, Seth Lewertow, and Daniel Hopkins"})})]})]})};var F=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(b,{}),Object(x.jsx)("div",{className:"mt-8",children:Object(x.jsxs)("div",{align:"center",children:[" ",Object(x.jsx)("iframe",{src:"https://docs.google.com/spreadsheets/d/1y1xt7KoZI1-CAaIIDLihsZHNNUWpL1XXKql-vnaTnNw/edit#gid=0/pubhtml?widget=true&headers=false",width:"80%",height:"850"})," "]})})]})};var I=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(b,{}),Object(x.jsxs)("div",{align:"center",children:[Object(x.jsx)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSe080nWjRpZ5i9t44Nbkhp3LBJRKvPs17svGkE0npidPNP2ww/viewform?embedded=true",width:"640",height:"749",frameborder:"0",marginheight:"0",marginwidth:"0",children:"Loading\u2026"})," "]})]})},J=s(29),K=s.n(J);s(38);var T=function(e){var t=e.setOutput,s=Object(a.useState)(""),c=Object(O.a)(s,2),n=c[0],r=c[1],l=function(){var e=Object(S.a)(C.a.mark((function e(){var s,a,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n.split("\n")),s=n.split("\n"),a={method:"post",url:"http://localhost:8080/api/submit",headers:{"Content-Type":"application/json"},data:{code:s}},e.prev=3,console.log("Submitting..."),e.next=7,K()(a);case 7:c=e.sent,console.log(c),r(""),t(c.data.stdout),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{class:"items-center justify-between flex flex-row box__title bg-grey-lighter px-3 py-2 border-b",children:[Object(x.jsx)("h3",{class:"text-sm text-grey-darker font-medium",children:"Code"}),Object(x.jsx)("button",{class:"w-1/4 rounded-sm text-sm text-grey-darker font-medium p-1",onClick:function(e){return l()},children:"Execute"})]}),Object(x.jsx)("textarea",{placeholder:"Enter R Code",class:"font-mono text-sm h-full resize-none focus:outline-none text-grey-darkest flex-1 p-2 m-1 bg-transparent",value:n,onChange:function(e){return r(e.target.value)}})]})};var Z=function(e){var t=e.output;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{class:"box__title bg-grey-lighter px-3 py-2 border-b",children:Object(x.jsx)("h3",{class:"text-sm text-grey-darker font-medium my-1",children:"Output"})}),Object(x.jsx)("div",{class:"font-mono text-sm h-full resize-none focus:outline-none text-grey-darkest flex-1 p-2 m-1 bg-transparent",children:t})]})};var _=function(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),s=t[0],c=t[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b,{}),Object(x.jsxs)("div",{class:"h-screen container mx-auto flex flex-row",children:[Object(x.jsx)("div",{class:"h-5/6 rounded-lg bg-gray-500 bg-opacity-40 container flex flex-col py-4 px-6 m-4",children:Object(x.jsx)(T,{setOutput:c})}),Object(x.jsx)("div",{class:"h-5/6 rounded-lg bg-gray-500 bg-opacity-40 container flex flex-col py-4 px-6 m-4",children:Object(x.jsx)(Z,{output:s})})]})]})},A=s(61);s(104);function H(){var e,t,s,a=Object(A.a)(),c=a.register,n=a.handleSubmit,r=a.errors;a.reset;function l(){return(l=Object(S.a)(C.a.mark((function e(t){var s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),s={method:"post",url:"http://localhost:8081/api/contact",headers:{"Content-Type":"application/json"},data:t},e.prev=2,e.next=5,K()(s);case 5:200===e.sent.data.status&&console.log("Success"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return console.log(r),Object(x.jsxs)("div",{children:[Object(x.jsx)(b,{}),Object(x.jsx)(h.a,{className:"b py-16",children:Object(x.jsx)("h1",{className:"home-header font-semibold text-3xl",children:"Contact us!"})}),Object(x.jsx)("div",{className:"b py-16 color:#282c34 px-4 sm:px-6 h-screen w-screen flex justify-center items-center",children:Object(x.jsx)("div",{className:"mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow",children:Object(x.jsxs)("form",{onSubmit:n((function(e){return l.apply(this,arguments)})),className:"grid grid-cols-1 gap-y-6",children:[Object(x.jsxs)("div",{className:"text-gray-600",children:[Object(x.jsx)("label",{htmlFor:"Full Name",children:" Name:"}),Object(x.jsx)("input",{type:"text",name:"name",ref:c({required:{value:!0,message:"You must enter your name"}}),className:"block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 \n                        border-gray-300 rounded-md focus:outline-none focus:ring-2",placeholder:"Full name"}),Object(x.jsx)("span",{className:"text-red-300 text -sm py-2",children:null===r||void 0===r||null===(e=r.name)||void 0===e?void 0:e.message})]}),Object(x.jsxs)("div",{className:"text-gray-600",children:[Object(x.jsx)("label",{htmlFor:"Email",children:"Email:"}),Object(x.jsx)("input",{type:"text",name:"email",ref:c({required:{value:!0,message:"You must enter your Email"},pattern:{value:"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",message:"Invalid email address"}}),className:"block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 \n                        border-gray-300 rounded-md focus:outline-none focus:ring-2",placeholder:"Email"}),Object(x.jsx)("span",{className:"text-red-300 text -sm py-2",children:null===r||void 0===r||null===(t=r.email)||void 0===t?void 0:t.message})]}),Object(x.jsxs)("div",{className:"text-gray-600",children:[Object(x.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(x.jsx)("textarea",{rows:"4",name:"message",ref:c({required:{value:!0,message:"Please enter a message to submit"}}),className:"w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none inline-block align-top focus:ring-blue-500 \n                    focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2",placeholder:"Please enter a message.."}),Object(x.jsxs)("span",{className:"text-red-300 text -sm py-2",children:[null===r||void 0===r||null===(s=r.message)||void 0===s?void 0:s.message," "]})]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{type:"submit",className:"inline-flex justify-center py-3 px-9 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Submit"})})]})})})]})}var R=s(60),q=s(9);var B=function(){return Object(x.jsx)(R.a,{children:Object(x.jsxs)(q.c,{children:[Object(x.jsx)(q.a,{path:"/officers",children:Object(x.jsx)(z,{})}),Object(x.jsx)(q.a,{path:"/internships",children:Object(x.jsx)(F,{})}),Object(x.jsx)(q.a,{path:"/polls",children:Object(x.jsx)(I,{})}),Object(x.jsx)(q.a,{path:"/r",children:Object(x.jsx)(_,{})}),Object(x.jsx)(q.a,{path:"/contact",children:Object(x.jsx)(H,{})}),Object(x.jsx)(q.a,{path:"/",children:Object(x.jsx)(P,{})})]})})};s(107);r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root"))},44:function(e,t,s){},67:function(e,t,s){},76:function(e,t,s){},81:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){}},[[108,1,2]]]);
//# sourceMappingURL=main.f6820bd0.chunk.js.map