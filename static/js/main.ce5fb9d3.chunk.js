(this["webpackJsonpdnd-board"]=this["webpackJsonpdnd-board"]||[]).push([[0],{36:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(1),i=t.n(r),o=t(18),l=t.n(o),s=t(22),a=t(7),d=t(4),u=(t(36),t(52)),j=t(53),b=t(19),m=t.n(b);m.a.setAppElement("#root");var O=function(e){var n=e.show,t=e.onClose,r=e.item;return Object(c.jsxs)(m.a,{isOpen:n,onRequestClose:t,className:"modal",overlayClassName:"overlay",children:[Object(c.jsxs)("div",{className:"close-btn-ctn",children:[Object(c.jsx)("h1",{style:{flex:"1 90%"},children:r.title}),Object(c.jsx)("button",{className:"close-btn",onClick:t,children:"X"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435"}),Object(c.jsx)("p",{children:r.content})]})]})},f="ITEM",h=function(e){var n=e.item,t=e.index,i=e.moveItem,o=e.column,l=Object(r.useRef)(null),s=Object(u.a)({accept:f,hover:function(e,n){if(l.current){var c=e.index,r=t;if(c!==r){var o=l.current.getBoundingClientRect(),s=(o.bottom-o.top)/2,a=n.getClientOffset().y-o.top;c<r&&a<s||c>r&&a>s||(i(c,r),e.index=r)}}}}),b=Object(d.a)(s,2)[1],m=Object(j.a)({item:Object(a.a)(Object(a.a)({type:f},n),{},{index:t}),collect:function(e){return{isDragging:e.isDragging()}}}),h=Object(d.a)(m,2),v=h[0].isDragging,x=h[1],p=Object(r.useState)(!1),g=Object(d.a)(p,2),I=g[0],N=g[1];return x(b(l)),Object(c.jsxs)(r.Fragment,{children:[Object(c.jsxs)("div",{ref:l,style:{opacity:v?0:1},className:"item",onClick:function(){return N(!0)},children:[Object(c.jsx)("div",{className:"color-bar",style:{backgroundColor:o.color}}),Object(c.jsx)("p",{className:"item-title",children:n.title})]}),Object(c.jsx)(O,{item:n,onClose:function(){return N(!1)},show:I})]})},v=[{id:1,columnId:"order",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0438\u0442 \u043f\u043e\u0434 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442 3",content:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"},{id:2,columnId:"order",title:"\u0417\u0435\u043c\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438 1",content:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 "},{id:4,columnId:"progress",title:"\u0417\u0435\u043c\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438 3",content:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 "},{id:5,columnId:"review",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0438\u0442 \u043f\u043e\u0434 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442 1",content:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"},{id:6,columnId:"done",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0438\u0442 \u043f\u043e\u0434 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442 2",content:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"}],x=[{id:"order",name:"\u041d\u0430\u0440\u044f\u0434\u044b",icon:"\u2b55\ufe0f",color:"#EB5A46"},{id:"progress",name:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",icon:"\ud83d\udd06\ufe0f",color:"#00C2E0"},{id:"review",name:"\u041f\u0440\u0438\u0451\u043c\u043a\u0430",icon:"\ud83d\udcdd",color:"#C377E0"},{id:"done",name:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e",icon:"\u2705",color:"#3981DE"}],p=function(e){var n=e.onDrop,t=e.children,r=e.id,o=Object(u.a)({accept:f,canDrop:function(e,n){var t=x.findIndex((function(n){return n.id===e.columnId})),c=x.findIndex((function(e){return e.id===r}));return[t+1,t-1,t].includes(c)},drop:function(e,t){n(e,t,r)},collect:function(e){return{isOver:e.isOver()}}}),l=Object(d.a)(o,2),s=l[0].isOver,a=l[1];return Object(c.jsx)("div",{ref:a,className:"drop-wrapper",children:i.a.cloneElement(t,{isOver:s})})},g=function(e){var n=e.isOver,t=e.children,r=n?" highlight-region":"";return Object(c.jsx)("div",{className:"col".concat(r),children:t})},I=function(){var e=Object(r.useState)(v),n=Object(d.a)(e,2),t=n[0],i=n[1],o=function(e,n,t){i((function(n){var c=n.filter((function(n){return n.id!==e.id})).concat(Object(a.a)(Object(a.a)({},e),{},{columnId:t}));return Object(s.a)(c)}))},l=function(e,n){var c=t[e];i((function(t){var r=t.filter((function(n,t){return t!==e}));return r.splice(n,0,c),Object(s.a)(r)}))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"row",children:x.map((function(e){return Object(c.jsxs)("div",{className:"col-wrapper",children:[Object(c.jsx)("h2",{className:"col-header",children:e.name}),Object(c.jsx)(p,{onDrop:o,id:e.id,children:Object(c.jsx)(g,{children:t.filter((function(n){return n.columnId===e.id})).map((function(n,t){return Object(c.jsx)(h,{item:n,index:t,moveItem:l,column:e},n.id)}))})})]},e.id)}))})})},N=t(51),C=t(29);l.a.render(Object(c.jsx)(N.a,{backend:C.a,children:Object(c.jsx)(I,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.ce5fb9d3.chunk.js.map