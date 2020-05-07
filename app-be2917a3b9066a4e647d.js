(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3re2":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"MAIN_ROUTE",(function(){return f})),n.d(r,"USERS_ROUTE",(function(){return p})),n.d(r,"USERS_POSTS_ROUTE",(function(){return y}));var o={};n.r(o),n.d(o,"API_BASE_URL",(function(){return d}));var a,c=n("mXGw"),i=n.n(c),u=n("xARA"),l=n("oNR1"),s=(n("xvge"),n("dZF8")),f="/",p="/users",y="/posts",d="https://gorest.co.in/public-api/",m=(n("5flk"),n("v5c9"));function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e){e.MAIN="main",e.USERS="users"}(a||(a={}));var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,n,r,o=v(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={selected:a.MAIN},t}return t=c,(n=[{key:"render",value:function(){var e=this,t=this.state.selected;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{style:{padding:"0 100px"},theme:"dark",mode:"horizontal",onClick:function(t){var n=t.key;return e.setState({selected:n})},selectedKeys:[t]},i.a.createElement(m.a.Item,{key:a.MAIN},"Main"),i.a.createElement(m.a.Item,{key:a.USERS},"Users")))}}])&&h(t.prototype,n),r&&h(t,r),c}(c.Component),S=(n("pJMU"),n("J+xt")),R=(n("83ui"),n("TYxb")),P=n("bb6g"),j=n("leJv"),U=n("D5b7"),_=n("cneo"),k=n("czhI"),C=n.n(k).a.create({timeout:1e4,baseURL:o.API_BASE_URL});C.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat("dEs6UaZ4O7vjCcypwn3hRO-P4PzfKV7RI4-O"),e}));var I=C,T=function(e){return e?I.get("users?".concat(function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")}(e))):I.get("users")};function x(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.users=[],this.isLoading=!1,this.page=1,this.selectedUserId="",this.paginationResponse={currentPage:1,perPage:20,pageCount:0,totalCount:0}}var t,n,r;return t=e,(n=[{key:"loadUsers",value:function(e){var t=this;this.isLoading=!0,T({page:e||this.page}).then((function(e){if(t.selectUser(""),!e.data.result||!e.data.result.length)throw new Error("System error. Data is unavailable");t.users=e.data.result;var n=e.data._meta;n&&(t.paginationResponse={currentPage:n.currentPage||t.page,perPage:n.perPage||20,pageCount:n.pageCount||0,totalCount:n.totalCount||0})})).catch((function(e){console.log(e)})).finally((function(){t.isLoading=!1}))}},{key:"loadUser",value:function(e){var t=this;this.isLoading=!0,function(e){return I.get("users/".concat(e))}(e).then((function(e){if(!e.data.result)throw new Error("System error. Data is unavailable");t.users=[].concat(x(t.users),[e.data.result])})).catch((function(e){console.log(e)})).finally((function(){t.isLoading=!1}))}},{key:"setPage",value:function(e){this.page=e}},{key:"selectUser",value:function(e){this.selectedUserId=e}},{key:"selectedUser",get:function(){var e=this;return this.users.find((function(t){return t.id===e.selectedUserId}))||null}}])&&L(t.prototype,n),r&&L(t,r),e}();Object(P.a)([_.n],N.prototype,"users",void 0),Object(P.a)([_.n],N.prototype,"isLoading",void 0),Object(P.a)([_.n],N.prototype,"page",void 0),Object(P.a)([_.n],N.prototype,"selectedUserId",void 0),Object(P.a)([_.n],N.prototype,"paginationResponse",void 0),Object(P.a)([_.f],N.prototype,"loadUsers",null),Object(P.a)([_.f],N.prototype,"loadUser",null),Object(P.a)([_.f],N.prototype,"setPage",null),Object(P.a)([_.f],N.prototype,"selectUser",null),Object(P.a)([_.g],N.prototype,"selectedUser",null);var D=new N,M=function(e){return I.get("posts?".concat(function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")}(e)))};function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.posts=[],this.isLoading=!1,this.selectedPost="",this.paginationResponse={currentPage:1,perPage:20,pageCount:0,totalCount:0}}var t,n,r;return t=e,(n=[{key:"loadUserPosts",value:function(e,t){var n=this;e&&(this.isLoading=!0,M({page:t||1,user_id:e}).then((function(e){if(n.selectPost(""),!e.data.result||!e.data.result.length)throw new Error("System error. Data is unavailable");n.posts=e.data.result,console.log(e.data.result);var t=e.data._meta;t&&(n.paginationResponse={currentPage:t.currentPage||1,perPage:t.perPage||20,pageCount:t.pageCount||0,totalCount:t.totalCount||0})})).catch((function(e){console.log(e)})).finally((function(){n.isLoading=!1})))}},{key:"selectPost",value:function(e){this.selectedPost=e}}])&&F(t.prototype,n),r&&F(t,r),e}();Object(P.a)([_.n],z.prototype,"posts",void 0),Object(P.a)([_.n],z.prototype,"isLoading",void 0),Object(P.a)([_.n],z.prototype,"selectedPost",void 0),Object(P.a)([_.n],z.prototype,"paginationResponse",void 0),Object(P.a)([_.f],z.prototype,"loadUserPosts",null),Object(P.a)([_.f],z.prototype,"selectPost",null);var K=new z,B=(n("4BqW"),n("H4M2")),H=(n("6OPI"),n("TZaN")),J=function(){var e=H.a.Title,t=Object(l.d)().push,n=D.selectedUserId;return i.a.createElement("div",{className:"main"},i.a.createElement("span",null,i.a.createElement(e,null,"Users list:")),i.a.createElement(B.a,{disabled:!n,size:"large",type:"link",onClick:function(){return t("".concat(r.USERS_POSTS_ROUTE,"/").concat(n))}},"Show comments"))};function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Y(e);if(t){var o=Y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?X(e):t}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(a,e);var t,n,r,o=V(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).selectRow=function(e){D.selectedUserId===e.id?D.selectUser(""):D.selectUser(e.id)},t.onSelectedRowChange=function(e){D.selectUser(String(e[0]))},t.onSelectedRowChange=t.onSelectedRowChange.bind(X(t)),t.selectRow=t.selectRow.bind(X(t)),t}return t=a,(n=[{key:"componentDidMount",value:function(){D.loadUsers()}},{key:"render",value:function(){var e=this,t=D.isLoading,n=D.users,r=D.paginationResponse,o=D.selectedUserId,a=[{title:"Фото",dataIndex:"_links",key:"_links",render:function(e){var t,n=null===(t=null==e?void 0:e.avatar)||void 0===t?void 0:t.href;return n?i.a.createElement(i.a.Fragment,null,i.a.createElement(R.a,{src:n,icon:i.a.createElement(U.a,null)})):i.a.createElement(i.a.Fragment,null,i.a.createElement(R.a,{icon:i.a.createElement(U.a,null)}))}},{title:"Имя",dataIndex:"first_name",key:"first_name"},{title:"Фамилия",dataIndex:"last_name",key:"last_name"},{title:"Пол",dataIndex:"gender",key:"gender"},{title:"Почта",dataIndex:"email",key:"email"},{title:"Телефон",dataIndex:"phone",key:"phone"},{title:"Статус",dataIndex:"status",key:"status"}],c={total:r.totalCount,current:r.currentPage,pageSize:r.perPage,onChange:function(e){return D.loadUsers(e)},hideOnSinglePage:!0,showSizeChanger:!1};return i.a.createElement(i.a.Fragment,null,i.a.createElement(S.a,{showHeader:!0,title:function(){return i.a.createElement(J,null)},rowSelection:{onChange:this.onSelectedRowChange,type:"radio",selectedRowKeys:[o]},loading:t,dataSource:n,columns:a,rowKey:"id",onRow:function(t){return{onClick:function(){return e.selectRow(t)}}},pagination:c}))}}])&&Z(t.prototype,n),r&&Z(t,r),a}(c.Component),Q=$=Object(P.a)([j.a],$),ee=function(e){var t=e.children;return i.a.createElement("div",{className:"paper"},t)},te=(n("e6mU"),n("kAeg")),ne=function(e){var t=e.data,n=t.title,r=t.body,o=H.a.Text;return i.a.createElement(te.a,{className:"post-card",title:n,bordered:!0},i.a.createElement(o,null,r))};function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=le(e);if(t){var o=le(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ue(this,n)}}function ue(e,t){return!t||"object"!==re(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var se=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(a,e);var t,n,r,o=ie(a);function a(){return oe(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this.props.match.params;e.id&&(K.loadUserPosts(e.id),!D.selectedUser&&D.loadUser(e.id))}},{key:"render",value:function(){var e=K.posts,t=D.selectedUser,n=H.a.Title,r=H.a.Text;return i.a.createElement(ee,null,i.a.createElement(n,null,"Posts "),t&&i.a.createElement(r,null," made by ","".concat(t.first_name," ").concat(t.last_name)),e&&i.a.createElement(i.a.Fragment,null,e.map((function(e){return i.a.createElement(ne,{key:e.id,data:e})}))))}}])&&ae(t.prototype,n),r&&ae(t,r),a}(c.PureComponent),fe=se=Object(P.a)([j.a],se),pe=s.a.Header,ye=s.a.Footer,de=s.a.Content,me=function(){return i.a.createElement(s.a,{className:"layout"},i.a.createElement(pe,{className:"header"},i.a.createElement(w,null)),i.a.createElement(de,{style:{padding:"0 100px"}},i.a.createElement(l.c,null,i.a.createElement(l.a,{exact:!0,path:r.MAIN_ROUTE,render:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Главная страница"))}}),i.a.createElement(l.a,{exact:!0,path:r.USERS_ROUTE,component:Q}),i.a.createElement(l.a,{exact:!0,path:"".concat(r.USERS_POSTS_ROUTE,"/:id"),component:fe}))),i.a.createElement(ye,{className:"footer"},"Тестовое задание выполнил Дмитрий Щукин"))},be=(n("KmqH"),n("ve3R")),he=Object(be.a)();he.listen((function(){return window.scrollTo(0,0)}));var ge=document.getElementById("app");u.render(c.createElement(l.b,{history:he},c.createElement(me,null)),ge)},KmqH:function(e,t,n){}},[["3re2",1,0]]]);