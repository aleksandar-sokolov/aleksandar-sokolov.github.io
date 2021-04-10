(this["webpackJsonpmade-for-you"]=this["webpackJsonpmade-for-you"]||[]).push([[0],{19:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){},29:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(20),a=r.n(s),o=r(3),i=(r(26),r(2)),u=(r(27),r(6)),l=r(0),j=Object(n.createContext)(),d=function(e){var t=Object(n.useState)(localStorage.username||null),r=Object(u.a)(t,2),c=r[0],s=r[1],a=Object(n.useState)(localStorage.userId||null),o=Object(u.a)(a,2),i=o[0],d=o[1],p=Object(n.useState)(localStorage.userToken||null),b=Object(u.a)(p,2),h=b[0],O=b[1];return Object(l.jsx)(j.Provider,{value:{username:c,userId:i,userToken:h,fillUserData:function(e){s(e.username),d(e.objectId),O(e["user-token"]),localStorage.setItem("username",e.username),localStorage.setItem("userId",e.objectId),localStorage.setItem("userToken",e["user-token"])},clearUserData:function(){s(null),d(null),O(null),localStorage.removeItem("username"),localStorage.removeItem("userId"),localStorage.removeItem("userToken")}},children:e.children})},p=(r(29),function(){var e=Object(n.useContext)(j),t=e.username,r=e.clearUserData;return Object(l.jsxs)("div",{className:"NavBar",children:[Object(l.jsx)(o.c,{to:"/",exact:!0,children:Object(l.jsx)("img",{src:"/logo.png",alt:"Made 4 You"})}),t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:r,children:"Logout"}),Object(l.jsxs)(o.c,{to:"/user/".concat(t),children:["Hello, ",t]}),Object(l.jsx)(o.c,{to:"/product/add",children:"Add Product"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.c,{to:"/register",children:"Register"}),Object(l.jsx)(o.c,{to:"/login",children:"Login"})]}),Object(l.jsx)(o.c,{to:"/about",children:"About"}),Object(l.jsx)(o.c,{to:"/contacts",children:"Contacts"}),Object(l.jsx)(o.c,{to:"/",exact:!0,children:"Home"})]})}),b=function(){return Object(l.jsx)("div",{style:{marginTop:"15px",textAlign:"center"},children:Object(l.jsx)("span",{children:"\xa9 Made 4 You"})})},h=r(11),O=Object(n.createContext)(),m=function(e){var t=Object(n.useState)(""),r=Object(u.a)(t,2),c=r[0],s=r[1];return Object(l.jsx)(O.Provider,{value:{errorMessage:c,displayError:function(e){s(e)},clearError:function(){s("")}},children:e.children})},x=r(4),f=r.n(x),g=r(10),v="https://eu-api.backendless.com/".concat("9124D76F-5773-F2D9-FF0B-269195E51100","/").concat("D1D60868-564F-4965-9973-8A5984F82174","/"),y="users/login",w="users/register",E="data/".concat("products");function S(){return(S=Object(g.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+E,{method:"POST",headers:{"Content-Type":"application/json","user-token":r},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(g.a)(f.a.mark((function e(t,r,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+E+"/"+n,{method:"PUT",headers:{"Content-Type":"application/json","user-token":r},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(g.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+E+"/"+r,{method:"GET",headers:{}});case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+E,{method:"GET",headers:{}});case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(g.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+E+"/"+r,{method:"DELETE",headers:{"user-token":t}});case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(g.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+E+"?where=ownerId%20%3D%20%27".concat(r,"%27"),{method:"GET",headers:{}});case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U={getAll:function(e){return k.apply(this,arguments)},getOne:function(e,t){return N.apply(this,arguments)},deleteOne:function(e,t){return C.apply(this,arguments)},update:function(e,t,r){return F.apply(this,arguments)},add:function(e,t){return S.apply(this,arguments)},getAllFromUser:function(e,t){return P.apply(this,arguments)}},D=(r(36),function(e){var t=e.imgUrl,r=e.name,n=e.description,c=e.price,s=(e.owner,e.objectId);return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:t,alt:r,style:{width:"100%"}}),Object(l.jsx)("h1",{children:r}),Object(l.jsxs)("p",{className:"price",children:["$",c]}),Object(l.jsx)("p",{children:n}),Object(l.jsx)("p",{children:Object(l.jsx)(o.b,{to:"/product/".concat(s),children:"Details"})})]})}),I=(r(37),function(){var e=Object(n.useContext)(O).displayError,t=Object(n.useState)(),r=Object(u.a)(t,2),c=r[0],s=r[1],a=Object(n.useState)(!0),i=Object(u.a)(a,2),j=i[0],d=i[1];return Object(n.useEffect)((function(){U.getAll().then((function(e){if(e.hasOwnProperty("errorData"))throw new Error(e.message);s(e),d(!1)})).catch((function(t){e(t.message),d(!1)}))}),[]),Object(l.jsxs)("div",{className:"HomePage",children:[Object(l.jsx)("h1",{children:"Made 4 You"}),Object(l.jsx)("h2",{children:"Search, sell or buy handmade products"}),Object(l.jsx)("p",{children:"Made 4 You is a platform where you can find the perfect handmade gift or add products you make.After registration you can see the contacts of the sellers or add products that other people can see. "}),j&&Object(l.jsx)("p",{children:"Loading..."}),!c&&!j&&Object(l.jsxs)("p",{children:["No offers available . ",Object(l.jsx)(o.b,{to:"/product/add",children:"Add first ?"})," "]}),null===c||void 0===c?void 0:c.sort((function(e,t){return e.price-t.price})).map((function(e){return Object(l.jsx)(D,Object(h.a)({},e),e.objectId)}))]})}),T=function(){return Object(l.jsxs)("div",{className:"Contacts",style:{textAlign:"center"},children:[Object(l.jsx)("h1",{children:"Contacts"}),Object(l.jsx)("p",{children:"Address: Sofia, 1000"}),Object(l.jsx)("p",{children:"Phone: +359 888 888 888"})]})},A=(r(19),function(e){var t=e.history,r=Object(n.useContext)(O).displayError,c=Object(n.useContext)(j).userToken;return Object(l.jsxs)("div",{className:"ProductForm",children:[Object(l.jsx)("h1",{children:"Add product form"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:e.target.name.value,price:e.target.price.value,imgUrl:e.target.imgUrl.value,description:e.target.description.value,contacts:e.target.contacts.value};Object.values(n).some((function(e){return""===e}))?r("All fields are required!"):(console.log(n),U.add(n,c).then((function(e){if(e.hasOwnProperty("errorData"))throw new Error(e.message);console.log(e),t.push("/")})).catch((function(e){r(e.message)})))},children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Enter product name ..."}),Object(l.jsx)("label",{htmlFor:"price",children:"Price"}),Object(l.jsx)("input",{type:"number",id:"price",name:"price",placeholder:"Enter product price ..."}),Object(l.jsx)("label",{htmlFor:"imgUrl",children:"image URL"}),Object(l.jsx)("input",{type:"text",id:"imgUrl",name:"imgUrl",placeholder:"Enter product image URL ..."}),Object(l.jsx)("label",{htmlFor:"description",children:"Description"}),Object(l.jsx)("textarea",{name:"description",id:"description",cols:"30",rows:"10",placeholder:"Enter product description ..."}),Object(l.jsx)("label",{htmlFor:"contacts",children:"Contacts"}),Object(l.jsx)("input",{type:"text",id:"contacts",name:"contacts",placeholder:"Enter your contacts ..."}),Object(l.jsx)("input",{type:"submit",value:"Submit"})]})]})}),L=(r(38),function(e){var t=e.match.params.id,r=Object(n.useState)(),c=Object(u.a)(r,2),s=c[0],a=c[1],i=Object(n.useState)(!0),d=Object(u.a)(i,2),p=d[0],b=d[1],O=Object(n.useState)(!1),m=Object(u.a)(O,2),x=m[0],f=m[1],g=Object(n.useContext)(j),v=g.username,y=g.userId,w=g.userToken;Object(n.useEffect)((function(){U.getOne(w,t).then((function(e){a(Object(h.a)({},e)),b(!1),y===e.ownerId&&f(!0)}))}),[]);return Object(l.jsxs)("div",{className:"ProductDetails",children:[p&&Object(l.jsx)("div",{children:"Loading..."}),s&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"details img",children:Object(l.jsx)("img",{src:s.imgUrl,alt:s.name})}),Object(l.jsxs)("div",{className:"details data",children:[Object(l.jsx)("h1",{children:s.name}),Object(l.jsxs)("p",{className:"price",children:["$",s.price]}),Object(l.jsx)("p",{children:s.description}),x&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:function(){U.deleteOne(w,s.objectId).then((function(t){console.log(t),e.history.push("/")}))},children:"Delete"}),Object(l.jsx)(o.b,{to:"/edit/".concat(s.objectId),children:"Edit"})]}),!x&&v&&Object(l.jsxs)("p",{children:["Seller contacts: ",s.contacts]}),!v&&Object(l.jsxs)("p",{children:[Object(l.jsx)(o.b,{to:"/login",children:"Login"})," to see seller contacts!"]})]})]})]})}),R=function(e){var t=e.match,r=e.history,c=t.params.id,s=Object(n.useContext)(j).userToken,a=Object(n.useContext)(O).displayError,o=Object(n.useState)(),i=Object(u.a)(o,2),d=i[0],p=i[1],b=Object(n.useState)(!0),m=Object(u.a)(b,2),x=m[0],f=m[1];Object(n.useEffect)((function(){U.getOne("",c).then((function(e){p(Object(h.a)({},e)),f(!1),console.log(e)}))}),[c]);return Object(l.jsxs)("div",{className:"EditForm",children:[Object(l.jsx)("h1",{children:"Edit Form"}),x&&Object(l.jsx)("div",{children:"Loading ..."}),d&&Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:e.target.name.value,price:e.target.price.value,imgUrl:e.target.imgUrl.value,description:e.target.description.value};Object.values(t).some((function(e){return""===e}))?a("All fields are required!"):U.update(t,s,c).then((function(e){if(e.hasOwnProperty("errorData"))throw new Error(e.message);r.push("/product/"+c)})).catch((function(e){return a(e.message)}))},children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{type:"text",id:"name",name:"name",defaultValue:d.name}),Object(l.jsx)("label",{htmlFor:"price",children:"Price"}),Object(l.jsx)("input",{type:"number",id:"price",name:"price",defaultValue:d.price}),Object(l.jsx)("label",{htmlFor:"imgUrl",children:"image URL"}),Object(l.jsx)("input",{type:"text",id:"imgUrl",name:"imgUrl",defaultValue:d.imgUrl}),Object(l.jsx)("label",{htmlFor:"description",children:"Description"}),Object(l.jsx)("input",{type:"text",id:"description",name:"description",defaultValue:d.description}),Object(l.jsx)("input",{type:"submit",value:"Submit"})]})]})};function M(){return(M=Object(g.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:r})});case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(g.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:t,password:r})});case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(){var e=Object(i.f)(),t=Object(n.useContext)(j).fillUserData,r=Object(n.useContext)(O).displayError;return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("h2",{children:"Login Form"}),Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault(),function(e,t){return H.apply(this,arguments)}(n.target.username.value,n.target.password.value).then((function(r){if(r.hasOwnProperty("errorData"))throw new Error(r.message);console.log("successful login"),t(r),e.push("/")})).catch((function(e){r(e.message)}))},children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username"}),Object(l.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Enter username ... "}),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Enter your password ..."}),Object(l.jsx)("input",{type:"submit",value:"Login"})]})]})},V=function(e){var t=e.history,r=Object(n.useContext)(O).displayError;return Object(l.jsxs)("div",{className:"register",children:[Object(l.jsx)("h2",{children:"Register Form"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.username.value,c=e.target.password.value;c===e.target["re-password"].value?n.length<4?r("Username should be at least four(4) characters long!"):c.length<4?r("Password should be at least four(4) characters long!"):n&&c?function(e,t){return M.apply(this,arguments)}(n,c).then((function(e){if(console.log(e),e.hasOwnProperty("errorData"))throw new Error(e.message);t.push("/login")})).catch((function(e){r(e.message),console.log(e)})):r("All fields are required"):r("Passwords mismatch!")},children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username"}),Object(l.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Enter username ... "}),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Enter your password ..."}),Object(l.jsx)("label",{htmlFor:"re-password",children:"Password"}),Object(l.jsx)("input",{type:"password",name:"re-password",id:"re-password",placeholder:"Repeat your password ..."}),Object(l.jsx)("input",{type:"submit",value:"Register"})]})]})},Y=function(){return Object(l.jsxs)("div",{className:"page-not-found",children:[Object(l.jsx)("img",{src:"/Page404.png",alt:"Page404"}),Object(l.jsx)("h2",{children:"Page Not Found"}),Object(l.jsxs)("p",{children:["Return to ",Object(l.jsx)(o.b,{to:"/",children:"Home"})," Page?"]})]})},q=function(){return Object(l.jsxs)("div",{className:"under-construction",children:[Object(l.jsx)("img",{src:"/Under-construction.png",alt:"Under Construction Logo"}),Object(l.jsx)("h3",{children:"This page is under construction ..."})]})},B=(r(39),function(e){var t=Object(n.useContext)(O).clearError;return Object(l.jsxs)("div",{className:"error-window",children:[Object(l.jsx)("p",{className:"error-message",children:e.children}),Object(l.jsx)("button",{className:"error-button",onClick:t,children:"Close"})]})}),G=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),r=t[0],c=t[1],s=Object(n.useContext)(j),a=s.username,o=s.userId,i=s.userToken;return Object(n.useEffect)((function(){U.getAllFromUser(i,o).then((function(e){if(e.hasOwnProperty("errorData"))throw new Error(e.message);c(e)}))}),[]),Object(l.jsxs)("div",{className:"user-profile",children:[Object(l.jsxs)("h2",{children:["Hello, ",a,"!"]}),Object(l.jsx)("h4",{children:"Here you can find all your products."}),r&&r.map((function(e){return Object(l.jsx)(D,Object(h.a)({},e),e.objectId)}))]})};var $=function(){var e=Object(n.useContext)(O).errorMessage;return Object(l.jsxs)("div",{className:"site-container",children:[Object(l.jsxs)(d,{children:[Object(l.jsx)(p,{}),e&&Object(l.jsx)(B,{children:e}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",exact:!0,component:I}),Object(l.jsx)(i.a,{path:"/contacts",exact:!0,component:T}),Object(l.jsx)(i.a,{path:"/about",exact:!0,component:q}),Object(l.jsx)(i.a,{path:"/product/add",exact:!0,component:A}),Object(l.jsx)(i.a,{path:"/product/:id",exact:!0,component:L}),Object(l.jsx)(i.a,{path:"/edit/:id",exact:!0,component:R}),Object(l.jsx)(i.a,{path:"/login",exact:!0,children:Object(l.jsx)(J,{})}),Object(l.jsx)(i.a,{path:"/register",exact:!0,component:V}),Object(l.jsx)(i.a,{path:"/user/:username",component:G}),Object(l.jsx)(i.a,{path:"*",children:Object(l.jsx)(Y,{})})]})]}),Object(l.jsx)(b,{})]})};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(m,{children:Object(l.jsx)($,{})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d52bfa37.chunk.js.map