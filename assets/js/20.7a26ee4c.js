(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{384:function(t,e,n){"use strict";var i=n(1),s=n(103),l=n(51),a=n(11),c=n(13),o=n(106),r=n(53),h=n(52),u=n(15),d=h("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,b=Math.min;i({target:"Array",proto:!0,forced:!d||!f},{splice:function(t,e){var n,i,h,u,d,f,x=c(this),v=a(x.length),g=s(t,v),m=arguments.length;if(0===m?n=i=0:1===m?(n=0,i=v-g):(n=m-2,i=b(p(l(e),0),v-g)),v+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=o(x,i),u=0;u<i;u++)(d=g+u)in x&&r(h,u,x[d]);if(h.length=i,n<i){for(u=g;u<v-i;u++)f=u+n,(d=u+i)in x?x[f]=x[d]:delete x[f];for(u=v;u>v-i+n;u--)delete x[u-1]}else if(n>i)for(u=v-i;u>g;u--)f=u+n-1,(d=u+i-1)in x?x[f]=x[d]:delete x[f];for(u=0;u<n;u++)x[u+g]=arguments[u+2];return x.length=v-i+n,h}})},472:function(t,e,n){"use strict";n.r(e);n(384);var i={data:function(){return{tabs:["Tab 1"],count:1,index:0}},methods:{push:function(){var t=this;this.tabs.push("Tab ".concat(++this.count)),this.$nextTick((function(){t.index=t.tabs.length-1}))},close:function(){this.tabs.splice(this.index,1),this.index===this.tabs.length&&this.index>0&&--this.index}}},s=n(48),l=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"uiv"},[n("tabs",{model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[t._l(t.tabs,(function(e){return n("tab",{key:e,attrs:{title:e}},[n("p",[t._v("Dynamic "+t._s(e))]),t._v(" "),n("btn",{on:{click:t.close}},[t._v("Close this tab")])],1)})),t._v(" "),n("template",{slot:"nav-right"},[n("btn",{attrs:{size:"sm"},on:{click:t.push}},[n("i",{staticClass:"glyphicon glyphicon-plus"}),t._v(" Add\n      ")])],1)],2)],1)}),[],!1,null,null,null);e.default=l.exports}}]);