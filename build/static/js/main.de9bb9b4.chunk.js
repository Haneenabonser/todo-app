(this["webpackJsonpdemo-context-api"]=this["webpackJsonpdemo-context-api"]||[]).push([[0],{31:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a(14),l=a(19),i=a(17),r=a(0),o=a.n(r),u=a(9),m=a.n(u),s=(a(22),a(30)),f=a(5),d=o.a.createContext();function p(e){var t=Object(r.useState)([{_id:1,complete:!1,text:"Do Homeworks",difficulty:4,assignee:"Haneen"},{_id:2,complete:!1,text:"study for mock intreview",difficulty:5,assignee:"Haneen"},{_id:3,complete:!1,text:"clean rooms",difficulty:3,assignee:"Areej"},{_id:4,complete:!1,text:"workout",difficulty:3,assignee:"Areej"},{_id:5,complete:!0,text:"clean the kitchen",difficulty:3,assignee:"Aya"},{_id:6,complete:!0,text:"fix the light",difficulty:2,assignee:"Nasser"}]),a=Object(f.a)(t,2),n=a[0],c=a[1];return o.a.createElement(d.Provider,{value:{list:n,add:function(e){e._id=Math.random(),e.complete=!1,c([].concat(Object(s.a)(n),[e]))},toggleComplete:function(e){var t=n.filter((function(t){return t._id===e}))[0]||{};if(t._id){t.complete=!t.complete;var a=n.map((function(e){return e._id===t._id?t:e}));c(a)}}}},e.children)}var b=o.a.createContext();var E=function(e){var t=Object(r.useState)(3),a=Object(f.a)(t,2),n=a[0],c=a[1],l=Object(r.useState)(!1),i=Object(f.a)(l,2),u=i[0],m=i[1],s=Object(r.useState)(0),d=Object(f.a)(s,2),p=d[0],E=d[1],v=Object(r.useState)(n-1),g=Object(f.a)(v,2),j=g[0],O=g[1];return o.a.createElement(b.Provider,{value:{numberOfItems:n,view:u,setSettings:function(e,t){e&&c(e),m(t)},start:p,end:j,nextpage:function(){E(p+n),O(j+n)},previouspage:function(){E(p-n),O(j-n)}}},e.children)},v=a(16),g=a(25),j=a(44),O=a(47);var y=function(e){var t=Object(r.useContext)(d),a=Object(r.useState)({item:{}}),n=Object(f.a)(a,2),c=n[0],l=n[1];function i(e){l({item:Object(g.a)(Object(g.a)({},c.item),{},Object(v.a)({},e.target.name,e.target.value))})}return o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a,{onSubmit:function(e){e.preventDefault(),e.target.reset(),t.add(c.item),l({item:{}})}},o.a.createElement(j.a.Group,null,o.a.createElement(j.a.Text,{className:"text-muted"},o.a.createElement("h2",null,"Add To Do Item"))),o.a.createElement(j.a.Group,{className:"mb-3",controlId:"formBasicEmail"},o.a.createElement(j.a.Label,null,"To Do Item"),o.a.createElement(j.a.Control,{placeholder:"Item Details",onChange:i})),o.a.createElement(j.a.Group,{className:"mb-3",controlId:"formBasicPassword"},o.a.createElement(j.a.Label,null,"Assigned To"),o.a.createElement(j.a.Control,{type:"text",name:"assignee",placeholder:"Assigned To",onChange:i})),o.a.createElement(j.a.Group,{className:"mb-3",controlId:"formBasicPassword"},o.a.createElement(j.a.Label,null,"Difficulty Rating"),o.a.createElement(j.a.Control,{defaultValue:"1",type:"range",min:"1",max:"5",name:"difficulty",onChange:i})),o.a.createElement(O.a,{variant:"primary",type:"submit"},"Add Item")))},x=a(45),h=a(46);var C=function(e){var t=Object(r.useContext)(d),a=Object(r.useContext)(b),n=Object(r.useState)(0),c=Object(f.a)(n,2),l=c[0],i=c[1],u=Object(r.useState)([]),m=Object(f.a)(u,2),s=m[0],p=m[1];return Object(r.useEffect)((function(){if(a.view)p(t.list);else{var e;e=t.list.filter((function(e){if(!e.complete)return e})),p(e)}}),[]),Object(r.useEffect)((function(){if(a.view)p(t.list);else{var e;e=t.list.filter((function(e){if(!e.complete)return e})),p(e)}}),[a.view]),o.a.createElement(x.a,{className:"list"},s.map((function(e,n){if(n>=a.start&&n<=a.end)return o.a.createElement(x.a.Item,{action:!0,variant:"primary",className:"complete-".concat(e.complete.toString()),key:e._id},o.a.createElement(h.a,{onClick:function(){return function(e){var n;t.toggleComplete(e),a.view?p(t.list):(n=t.list.filter((function(e){if(!e.complete)return e})),p(n))}(e._id)},className:"card"},o.a.createElement(h.a.Header,null,e.assignee),o.a.createElement(h.a.Body,null,o.a.createElement(h.a.Title,null,e.text),o.a.createElement(h.a.Text,null,"Difficulty: ",e.difficulty))))})),o.a.createElement("div",{className:"buttons"},l>0&&o.a.createElement(O.a,{onClick:function(){a.previouspage(),i(l-1)},variant:"outline-primary"},"Previous"),!(l==Math.ceil(t.list.length/a.numberOfItems)-1)&&o.a.createElement(O.a,{variant:"outline-primary",onClick:function(){a.nextpage(),i(l+1)}},"Next"),o.a.createElement(O.a,{variant:"outline-success",onClick:function(){a.setSettings(null,!a.view)}},"Completed Items")))},_=(a(39),a(43)),k=a(42);var w=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{bg:"primary",variant:"dark"},o.a.createElement(k.a,null,o.a.createElement(_.a.Brand,{href:"#home"},"Home"))))};var N=function(e){var t=Object(r.useContext)(d),a=Object(r.useState)([]),n=Object(f.a)(a,2),c=n[0],l=n[1];return Object(r.useEffect)((function(){l([{_id:1,complete:!1,text:"Do Homeworks",difficulty:4,assignee:"Haneen"},{_id:2,complete:!1,text:"study for mock intreview",difficulty:5,assignee:"Haneen"},{_id:3,complete:!1,text:"clean rooms",difficulty:3,assignee:"Areej"},{_id:4,complete:!1,text:"workout",difficulty:3,assignee:"Areej"},{_id:5,complete:!0,text:"clean the kitchen",difficulty:3,assignee:"Aya"},{_id:6,complete:!0,text:"fix the light",difficulty:2,assignee:"Nasser"}])}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null),o.a.createElement("h2",{className:"title"},"To Do List Manager (",t.list.filter((function(e){return!e.complete})).length,")"),o.a.createElement("section",{className:"todo"},o.a.createElement("div",null,o.a.createElement(y,null)),o.a.createElement("div",null,o.a.createElement(C,{list:c}))))},S=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null,o.a.createElement(p,null,o.a.createElement(N,null))))}}]),a}(o.a.Component),I=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(S,null)}}]),a}(o.a.Component),A=document.getElementById("root");m.a.render(o.a.createElement(I,null),A)}},[[31,1,2]]]);
//# sourceMappingURL=main.de9bb9b4.chunk.js.map