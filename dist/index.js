module.exports=function(e){function t(u){if(r[u])return r[u].exports;var n=r[u]={exports:{},id:u,loaded:!1};return e[u].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/build/",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=u(n),o=r(3),l=u(o),i=r(36),d=u(i),f=r(30),s=u(f),c=new a.default;c.env="production",(0,l.default)(c);var p=d.default.createServer(c.callback());p.listen(s.default.port,function(){console.log("App started, bind port %d, CTRL + C to terminate",s.default.port)}),t.default=p,e.exports=t.default},function(e,t){e.exports=require("koa")},function(e,t,r){(function(u){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(4),o=n(a),l=r(5),i=n(l),d=r(6),f=n(d),s=r(7),c=n(s),p=r(8),m=n(p),v=r(9),x=n(v),h=r(10),_=n(h),b=r(11),y=n(b),E=r(12),k=n(E),q=r(13),w=n(q),j=r(14),g=n(j),M=r(30),P=n(M),O=(0,w.default)(),C=f.default.join(u,"./views");t.default=function(e){e.use((0,k.default)(O)),e.use((0,k.default)((0,m.default)())),e.use((0,k.default)((0,x.default)())),e.use((0,k.default)((0,_.default)(P.default.rootPath+P.default.publicPath))),e.use((0,c.default)(C,{extension:"ejs"})),e.use(g.default),(0,y.default)(e,{template:C+"/500.ejs"}),"development"===e.env&&e.use(function(){var e=(0,i.default)(o.default.mark(function e(t,r){var u,n;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u=new Date,e.next=3,r();case 3:n=new Date-u,console.log(t.method+" "+t.url+" - "+n+"ms");case 5:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}()),e.use(function(){var e=(0,i.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.status=404,e.next=3,t.render("404");case 3:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}())},e.exports=t.default}).call(t,"platforms/server")},function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("koa-views")},function(e,t){e.exports=require("koa-json")},function(e,t){e.exports=require("koa-logger")},function(e,t){e.exports=require("koa-static-plus")},function(e,t){e.exports=require("koa-onerror")},function(e,t){e.exports=require("koa-convert")},function(e,t){e.exports=require("koa-bodyparser")},function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),a=u(n),o=r(5),l=u(o);t.default=function(){var e=(0,l.default)(a.default.mark(function e(t,u){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(15)(t,u);case 2:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}(),e.exports=t.default},function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),a=u(n),o=r(5),l=u(o),i=r(16),d=u(i),f=r(17),s=r(18),c=r(19);t.default=function(){var e=(0,l.default)(a.default.mark(function e(t,u){var n;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=void 0,(0,s.match)({routes:r(20),location:t.url},function(e,t,r){n=r}),!n){e.next=7;break}return e.next=5,t.render("index",{app:(0,f.renderToString)(d.default.createElement(c.Provider,null,d.default.createElement(s.RouterContext,n))),dev:"development"===t.app.env});case 5:e.next=9;break;case 7:return e.next=9,u();case 9:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}(),e.exports=t.default},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-redux")},function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(18),a=r(16),o=u(a),l=r(21),i=u(l),d=r(28),f=u(d),s=r(29),c=u(s);t.default=o.default.createElement(n.Router,{history:n.browserHistory},o.default.createElement(n.Route,{path:"/",component:i.default},o.default.createElement(n.IndexRoute,{component:c.default}),o.default.createElement(n.Route,{path:"news",component:f.default}))),e.exports=t.default},function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(22),a=u(n),o=r(23),l=u(o),i=r(24),d=u(i),f=r(25),s=u(f),c=r(26),p=u(c),m=r(27),v=u(m),x=r(16),h=u(x),_=r(18),b=(r(19),function(e){function t(){return(0,d.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props.location.pathname.replace("/","")||"home";return h.default.createElement("div",null,h.default.createElement("div",{className:"ant-layout-top"},h.default.createElement("div",{className:"ant-layout-header"},h.default.createElement("div",{className:"ant-layout-wrapper"},h.default.createElement("div",{className:"ant-layout-logo"},h.default.createElement("img",{src:"//7xi480.com1.z0.glb.clouddn.com/avatar100.jpg",width:"50"})),h.default.createElement(a.default,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"},selectedKeys:[e]},h.default.createElement(a.default.Item,{key:"home"},h.default.createElement(_.Link,{to:"/"},"Home")),h.default.createElement(a.default.Item,{key:"news"},h.default.createElement(_.Link,{to:"/news"},"News")),h.default.createElement(a.default.Item,{key:"about"},h.default.createElement(_.Link,{to:"/about"},"About")),h.default.createElement(a.default.Item,{key:"test"},h.default.createElement(_.Link,{to:"/test"},"Testpage"))))),h.default.createElement("div",{className:"ant-layout-wrapper"},h.default.createElement("div",{className:"ant-layout-container"},h.default.createElement("div",{style:{minHeight:900}},this.props.children))),h.default.createElement("div",{className:"ant-layout-footer"},"Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持")))}}]),t}(x.Component));t.default=b,e.exports=t.default},function(e,t){e.exports=require("antd/lib/menu")},function(e,t){e.exports=require("babel-runtime/core-js/object/get-prototype-of")},function(e,t){e.exports=require("babel-runtime/helpers/classCallCheck")},function(e,t){e.exports=require("babel-runtime/helpers/createClass")},function(e,t){e.exports=require("babel-runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("babel-runtime/helpers/inherits")},function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(23),a=u(n),o=r(24),l=u(o),i=r(25),d=u(i),f=r(26),s=u(f),c=r(27),p=u(c),m=r(16),v=u(m),x=function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return v.default.createElement("div",null,"News")}}]),t}(m.Component);t.default=x,e.exports=t.default},function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(23),a=u(n),o=r(24),l=u(o),i=r(25),d=u(i),f=r(26),s=u(f),c=r(27),p=u(c),m=r(16),v=u(m),x=(r(19),function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.serverConfig||{},t=e.id,r=void 0===t?"":t,u=e.username,n=void 0===u?"":u,a=e.mobile,o=void 0===a?"":a,l=e.email,i=void 0===l?"":l,d=e.county,f=void 0===d?"":d;return v.default.createElement("div",null,v.default.createElement("h3",null,"首页"),v.default.createElement("div",null,"ID：",r),v.default.createElement("div",null,"名称：",n),v.default.createElement("div",null,"手机：",o),v.default.createElement("div",null,"邮箱：",i),v.default.createElement("div",null,"居住地：",f))}}]),t}(m.Component));t.default=x,e.exports=t.default},function(e,t,r){(function(u){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(31),o=n(a),l=r(32),i=n(l),d=r(33),f=n(d),s=r(34)("config"),c=[];o.default.readdirSync(u).map(function(e){if(["index.js","default.js"].indexOf(e)>-1||"."===e[0])return!1;try{var t=r(35)("./"+e);(0,l.isPlainObject)(t)&&c.push(t)}catch(e){}}),c.push(f.default);var p=l.defaultsDeep.apply(i.default,c);s(p),t.default=p,e.exports=t.default}).call(t,"platforms/common/config")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("lodash")},function(e,t,r){(function(u){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(6),o=n(a),l=o.default.join(u,"../../..");t.default={rootPath:l,publicPath:"/public",staticPath:"/public/static",port:3099,db:{dialect:"sqlite",username:"",password:"",database:"main",storage:"path/to/db.sqlite"}},e.exports=t.default}).call(t,"platforms/common/config")},function(e,t){e.exports=require("debug")},function(e,t,r){function u(e){return r(n(e))}function n(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./default":33,"./default.js":33,"./index":30,"./index.js":30};u.keys=function(){return Object.keys(a)},u.resolve=n,e.exports=u,u.id=35},function(e,t){e.exports=require("http")}]);
//# sourceMappingURL=index.js.map