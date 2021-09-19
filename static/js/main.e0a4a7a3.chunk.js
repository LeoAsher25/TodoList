(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{21:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(15),a=n.n(s),r=n(7),l=n(6),i=n(37),d=n(8),j=n(2),u=(n(21),n(36)),b=n(0),h=o.a.createContext(),m=function(e){var t=Object(c.useState)({isLightTheme:!0,ligthTheme:{bgColor:"#fefefe",color:"#111"},darkTheme:{bgColor:"#333",color:"#eee"}}),n=Object(l.a)(t,2),o=n[0],s=n[1];Object(c.useEffect)((function(){var e=localStorage.getItem("Theme");e&&s(JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("Theme",JSON.stringify(o))}),[o]);var a={theme:o,toggleTheme:function(){var e=Object(j.a)({},o);e.isLightTheme=!e.isLightTheme,s(e)}};return Object(b.jsx)(h.Provider,{value:a,children:e.children})},O=function(e){var t=e.newTodo,n=e.isEditting,o=e.setIsEditting,s=e.optionLevels,a=e.setNewTodo,r=e.setAddBoxIsOpen,i=e.handleAddTodoBoxSubmit,m=Object(c.useContext)(h).theme,O=m.isLightTheme,f=m.ligthTheme,v=m.darkTheme,x=O?f:v,g=Object(c.useState)(!1),p=Object(l.a)(g,2),C=p[0],N=p[1],L=function(e){var n=e.target,c=n.name,o=n.value;N(!1),a(Object(j.a)(Object(j.a)({},t),{},Object(d.a)({},c,"name"===c?o:JSON.parse(o))))},T=function(e){e.preventDefault(),r(!1),o(!1),a({id:0,name:"",level:s[0]})};return Object(b.jsxs)("div",{className:"add-todo-wrap",children:[Object(b.jsx)("div",{className:"overlay",onClick:function(){return r(!1)}}),Object(b.jsx)("div",{className:"add-todo-box",style:{backgroundColor:x.bgColor,color:x.color},children:Object(b.jsxs)(u.a,{className:"form-wrap",children:[Object(b.jsx)("span",{className:"close-box",onClick:function(e){return T(e)},children:"\xd7"}),Object(b.jsxs)("h3",{className:"heading",children:[n?"Edit c\xf4ng vi\u1ec7c":"Th\xeam c\xf4ng vi\u1ec7c m\u1edbi: "," "]}),Object(b.jsxs)(u.a.Group,{md:"4",className:"form-gr",children:[Object(b.jsx)(u.a.Label,{htmlFor:"todoName",children:"T\xean c\xf4ng vi\u1ec7c"}),Object(b.jsx)(u.a.Control,{required:!0,type:"text",id:"todoName",name:"name",value:t.name,onChange:function(e){return L(e)},placeholder:"Nh\u1eadp c\xf4ng vi\u1ec7c",autoComplete:"off",style:{backgroundColor:x.bgColor,color:x.color}}),C?Object(b.jsx)("div",{className:"input-empty-alert",children:"Looks good!"}):""]}),Object(b.jsxs)(u.a.Group,{className:"form-gr",children:[Object(b.jsx)(u.a.Label,{htmlFor:"todoLevel",children:"M\u1ee9c \u0111\u1ed9"}),Object(b.jsx)(u.a.Select,{"aria-label":"Default select example",id:"todoLevel",name:"level",value:JSON.stringify(t.level),onChange:function(e){return L(e)},style:{backgroundColor:x.bgColor,color:x.color},children:s.map((function(e,t){return Object(b.jsxs)("option",{value:JSON.stringify(e),children:[e.titleLevel," "]},t)}))})]}),Object(b.jsxs)("div",{className:"btn-wrap",children:[Object(b.jsx)("button",{type:"submit",onClick:function(e){return function(e){e.preventDefault(),""!==t.name.trim()?(i(),r(!1),N(!1)):N(!0)}(e)},children:n?"Save":"Th\xeam"}),Object(b.jsx)("button",{onClick:function(e){return T(e)},children:"H\u1ee7y b\u1ecf"})]})]})})]})},f=n(32),v=function(e){var t=e.todo,n=e.indexOfTodo,o=e.optionLevels,s=e.handleRemoveTodo,a=e.handleSetIsEditting,r=e.handleChangeLevel,i=Object(c.useState)(.8),d=Object(l.a)(i,2),j=d[0],u=d[1],h=Object(c.useState)(.8),m=Object(l.a)(h,2),O=m[0],v=m[1];return Object(c.useEffect)((function(){var e=o.findIndex((function(e){return e.titleLevel===t.level.titleLevel}));u(e===o.length-1?.2:.8),v(0===e?.2:.8)}),[]),Object(b.jsxs)("tr",{className:"todo-item",children:[Object(b.jsx)("td",{children:Object(b.jsx)("span",{children:n+1})}),Object(b.jsx)("td",{children:Object(b.jsx)("span",{children:t.name})}),Object(b.jsxs)("td",{className:"level-box",children:[Object(b.jsx)(f.a,{bg:t.level.bgColor,children:t.level.titleLevel}),Object(b.jsxs)("div",{className:"change-level",children:[Object(b.jsx)("span",{style:{opacity:j},onClick:function(){return r("Increase",t,u,v)},children:Object(b.jsx)("i",{className:"fas fa-chevron-up"})}),Object(b.jsx)("span",{style:{opacity:O},onClick:function(){return r("Decrease",t,u,v)},children:Object(b.jsx)("i",{className:"fas fa-chevron-down"})})]})]}),Object(b.jsxs)("td",{className:"action-wrap ",children:[Object(b.jsx)("button",{className:"edit-todo",onClick:function(){return a(t)},children:Object(b.jsx)("span",{children:"S\u1eeda"})}),Object(b.jsx)("button",{className:"remove-todo",onClick:function(){return s(t.id)},children:Object(b.jsx)("span",{children:"X\xf3a"})})]})]})},x=(n(25),n(33)),g=function(e){var t=e.processedTodos,n=e.optionLevels,o=e.handleRemoveTodo,s=e.handleSetIsEditting,a=e.handleChangeLevel,r=Object(c.useContext)(h).theme,l=r.isLightTheme,i=r.ligthTheme,d=r.darkTheme,j=l?i:d;return Object(b.jsx)("div",{className:"todo-list",children:Object(b.jsxs)(x.a,{bordered:!0,style:{backgroundColor:j.bgColor,color:j.color,borderColor:"#aaa"},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"table-header",children:[Object(b.jsx)("th",{width:"20",children:"STT"}),Object(b.jsx)("th",{width:"250",children:"T\xean c\xf4ng vi\u1ec7c"}),Object(b.jsx)("th",{width:"250",children:"M\u1ee9c \u0111\u1ed9"}),Object(b.jsx)("th",{width:"200",children:"H\xe0nh \u0111\u1ed9ng"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e,t){return Object(b.jsx)(v,{todo:e,indexOfTodo:t,optionLevels:n,handleRemoveTodo:o,handleSetIsEditting:s,handleChangeLevel:a},e.id)}))})]})})},p=(n(26),n(34)),C=n(16),N=n(38),L=(n(27),function(e){var t=e.toggleTheme,n=e.isLightTheme,o=e.bgColorBtn,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){n||s.current.classList.add("active")}),[n]),Object(b.jsxs)("div",{ref:s,htmlFor:"dn",className:"toggle",onClick:function(){return s.current.classList.toggle("active"),void t()},style:{backgroundColor:o},children:[Object(b.jsxs)("div",{className:"toggle__handler",children:[Object(b.jsx)("span",{className:"crater crater--1"}),Object(b.jsx)("span",{className:"crater crater--2"}),Object(b.jsx)("span",{className:"crater crater--3"})]}),Object(b.jsx)("span",{className:"star star--1"}),Object(b.jsx)("span",{className:"star star--2"}),Object(b.jsx)("span",{className:"star star--3"}),Object(b.jsx)("span",{className:"star star--4"}),Object(b.jsx)("span",{className:"star star--5"}),Object(b.jsx)("span",{className:"star star--6"})]})}),T=function(e){var t=e.sortTypesList,n=e.optionLevels,o=e.setAddBoxIsOpen,s=e.handleSortFormOnSubmit,a=e.handleFilterFormOnSubmit,r=e.handleSearchFormOnSubmit,l=Object(c.useContext)(h),i=l.theme,d=l.toggleTheme,j=i.isLightTheme,m=i.ligthTheme,O=i.darkTheme,f=j?m:O,v=j?"#83D8FF":"#749DD6",x=Object(c.useRef)(null),g=Object(c.useRef)(null),T=Object(c.useRef)(null);return Object(b.jsxs)("div",{className:"function-btn-wrap",children:[Object(b.jsxs)(p.a,{className:"",children:[Object(b.jsx)(C.a,{xs:"12",sm:"6",className:"col",children:Object(b.jsxs)("div",{className:"button-wrap",children:[Object(b.jsxs)(N.a,{className:"add-new-todo-btn",onClick:function(){return o(!0)},children:[Object(b.jsx)("i",{className:"fas fa-plus"}),"Th\xeam c\xf4ng vi\u1ec7c m\u1edbi"]}),Object(b.jsx)(L,{toggleTheme:d,isLightTheme:j,bgColorBtn:v})]})}),Object(b.jsx)(C.a,{xs:"12",sm:"6",className:"col",children:Object(b.jsxs)(u.a,{className:"search-form",onSubmit:function(e){return function(e){e.preventDefault(),r(T.current.value),T.current.value=""}(e)},children:[Object(b.jsx)(N.a,{style:{backgroundColor:v},type:"submit",children:Object(b.jsx)("i",{className:"fas fa-search"})}),Object(b.jsx)(u.a.Control,{style:{backgroundColor:f.bgColor,color:f.color},ref:T,type:"text",name:"search",placeholder:"Search level",autoComplete:"off"})]})})]}),Object(b.jsxs)(p.a,{children:[Object(b.jsx)(C.a,{xs:"12",sm:"6",className:"col",children:Object(b.jsxs)(u.a,{action:"",className:"sort-todos-form",onSubmit:function(e){return s(e,x.current.value)},children:[Object(b.jsx)(N.a,{style:{backgroundColor:v},variant:"info",type:"submit",children:"Sort"}),Object(b.jsxs)(u.a.Select,{style:{backgroundColor:f.bgColor,color:f.color},ref:x,name:"sortTodos",id:"sortTodos",className:"sort-todos-wrap",children:[Object(b.jsx)("option",{default:!0,children:"Sort type"}),t.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))]})]})}),Object(b.jsx)(C.a,{xs:"12",sm:"6",className:"col",children:Object(b.jsxs)(u.a,{action:"",className:"filter-todos-form",onSubmit:function(e){return a(e,g.current.value)},children:[Object(b.jsx)(N.a,{style:{backgroundColor:v},variant:"info",type:"submit",children:"Filter"}),Object(b.jsxs)(u.a.Select,{style:{backgroundColor:f.bgColor,color:f.color},ref:g,name:"sortTodos",id:"sortTodos",className:"filter-todos-wrap",children:[Object(b.jsx)("option",{default:!0,children:"Filter level"}),Object(b.jsx)("option",{value:"all",children:"All"}),n.map((function(e,t){return Object(b.jsx)("option",{value:e.titleLevel,children:e.titleLevel},t)}))]})]})})]})]})},S=(n(28),n(35));var k=function(){var e=Object(c.useContext)(h).theme,t=e.isLightTheme,n=e.ligthTheme,o=e.darkTheme,s=t?n:o,a=Object(c.useState)(""),d=Object(l.a)(a,2),j=d[0],u=d[1],m=Object(c.useState)(""),f=Object(l.a)(m,2),v=f[0],x=f[1],p=[{titleLevel:"Kh\xf4ng l\xe0m kh\xf4ng sao",orderLevel:3,bgColor:"success"},{titleLevel:"Ph\u1ea3i l\xe0m",orderLevel:2,bgColor:"warning"},{titleLevel:"L\xe0m ngay",orderLevel:1,bgColor:"danger"}],C=Object(c.useState)([]),N=Object(l.a)(C,2),L=N[0],k=N[1],y=Object(c.useState)(L),w=Object(l.a)(y,2),I=w[0],E=w[1];Object(c.useEffect)((function(){var e=localStorage.getItem("todos");e&&k(JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(L))}),[L]);var F=Object(c.useState)({id:0,name:"",level:p[0]}),D=Object(l.a)(F,2),B=D[0],J=D[1],A=Object(c.useState)(!1),R=Object(l.a)(A,2),M=R[0],z=R[1],G=Object(c.useState)(!1),P=Object(l.a)(G,2),H=P[0],_=P[1];function q(e){var t=Object(r.a)(e);switch(j){case"T\xean: a-z":t.sort((function(e,t){var n=e.name.toLowerCase(),c=t.name.toLowerCase();return n<c?-1:n>c?1:0}));break;case"T\xean: z-a":t.sort((function(e,t){var n=e.name.toLowerCase(),c=t.name.toLowerCase();return n>c?-1:n<c?1:0}));break;case"M\u1ee9c \u0111\u1ed9: T\u0103ng d\u1ea7n":t.sort((function(e,t){return t.level.orderLevel-e.level.orderLevel}));break;case"M\u1ee9c \u0111\u1ed9: Gi\u1ea3m d\u1ea7n":t.sort((function(e,t){return e.level.orderLevel-t.level.orderLevel}))}return t}function K(e){return-1!==p.findIndex((function(e){return e.titleLevel===v}))?e.filter((function(e){return e.level.titleLevel===v})):Object(r.a)(e)}return Object(c.useEffect)((function(){E(Object(r.a)(K(L)))}),[L.length,v]),Object(c.useEffect)((function(){E(q(L))}),[L.length,j]),Object(b.jsx)("div",{className:"app",style:{backgroundColor:s.bgColor,color:s.color},children:Object(b.jsxs)(S.a,{className:"app",children:[Object(b.jsx)("h3",{className:"app-title",children:"LA's Task"}),Object(b.jsxs)("div",{className:"app-content",children:[H?Object(b.jsx)(O,{hidden:!H,newTodo:B,isEditting:M,setIsEditting:z,optionLevels:p,setNewTodo:J,setAddBoxIsOpen:_,handleAddTodoBoxSubmit:function(){if(M){var e=Object(r.a)(L),t=L.findIndex((function(e){return e.id===B.id}));e.splice(t,1,B),k(q(K(e))),E(Object(r.a)(e)),z(!1)}else B.id=Object(i.a)(),k([].concat(Object(r.a)(L),[B])),E([].concat(Object(r.a)(L),[B]));J({id:0,name:"",level:p[0]})}}):"",Object(b.jsxs)("div",{className:"todo-wrap",children:[Object(b.jsx)(T,{sortTypesList:["T\xean: a-z","T\xean: z-a","M\u1ee9c \u0111\u1ed9: T\u0103ng d\u1ea7n","M\u1ee9c \u0111\u1ed9: Gi\u1ea3m d\u1ea7n"],optionLevels:p,setAddBoxIsOpen:_,handleSortFormOnSubmit:function(e,t){e.preventDefault(),u(t)},handleFilterFormOnSubmit:function(e,t){e.preventDefault(),x(t)},handleSearchFormOnSubmit:function(e){var t=[];e=e.toLowerCase().trim(),L.forEach((function(n){(n.id.toString().includes(e)||n.name.toLowerCase().includes(e)||n.level.titleLevel.toLowerCase().includes(e))&&t.push(n)})),E(q(K(t)))}}),Object(b.jsx)(g,{processedTodos:I,optionLevels:p,handleRemoveTodo:function(e){var t=L.filter((function(t){return t.id!==e}));k(Object(r.a)(t))},handleSetIsEditting:function(e){J({id:e.id,name:e.name,level:e.level}),z(!0),_(!0)},handleChangeLevel:function(e,t,n,c){var o=p.findIndex((function(e){return e.titleLevel===t.level.titleLevel}));switch(e){case"Decrease":n(.8),0===o?c(.2):1===o?(c(.2),o-=1):o-=1;break;case"Increase":c(.8),o===p.length-1?n(.2):o===p.length-2?(n(.2),o+=1):o+=1}t.level=p[o];var s=Object(r.a)(L),a=L.findIndex((function(e){return e.id===t.id}));s.splice(a,1,t),E(q(K(s)))}})]})]})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};n(29);a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(m,{children:Object(b.jsx)(k,{})})}),document.getElementById("root")),y()}},[[30,1,2]]]);
//# sourceMappingURL=main.e0a4a7a3.chunk.js.map