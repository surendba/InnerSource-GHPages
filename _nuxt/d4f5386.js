(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{423:function(t,e,n){"use strict";n(37),n(24),n(105),n(83),n(259),n(13),n(54),n(18),n(20),n(68),n(59),n(48),n(58),n(88);var r=n(1),o=(n(260),n(2)),c=n(30),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],y=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),O=d.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),j=d.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(y),offset:Object.keys(O),order:Object.keys(j)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var _=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var v=_.get(l);return v||function(){var t,e;for(e in v=[],w)w[e].forEach((function(t){var r=n[t],o=h(e,t,r);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),_.set(l,v)}(),t(n.tag,Object(c.a)(data,{class:v}),o)}})},424:function(t,e,n){"use strict";n(15),n(37),n(24),n(105),n(259),n(54),n(18),n(20),n(47),n(68),n(59),n(58),n(88);var r=n(1),o=(n(260),n(2)),c=n(30),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],y=["start","end","center"];function O(t,e){return d.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var j=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},w=O("align",(function(){return{type:String,default:null,validator:j}})),h=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},_=O("justify",(function(){return{type:String,default:null,validator:h}})),m=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},S=O("alignContent",(function(){return{type:String,default:null,validator:m}})),k={align:Object.keys(w),justify:Object.keys(_),alignContent:Object.keys(S)},P={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=P[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var D=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},w),{},{justify:{type:String,default:null,validator:h}},_),{},{alignContent:{type:String,default:null,validator:m}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var v=D.get(l);return v||function(){var t,e;for(e in v=[],k)k[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&v.push(o)}));v.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),D.set(l,v)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},444:function(t,e,n){"use strict";n.r(e);var r=n(89),o=n(127),c=n.n(o),l=n(423),f=n(424),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{staticClass:"text-center"},[n("img",{staticClass:"mb-5",staticStyle:{"margin-left":"25px"},attrs:{src:"GitHub-Mark-Light-120px-plus.png",alt:"GitHub"}}),t._v(" "),n("blockquote",{staticClass:"blockquote"},[n("ul",{staticStyle:{"list-style":"none"}},[n("li",[t._v("Responsive is better than fast")]),t._v(" "),n("li",[t._v("It’s not fully shipped until it’s fast")]),t._v(" "),n("li",[t._v("Anything added dilutes everything else")]),t._v(" "),n("li",[t._v("Practicality beats purity")]),t._v(" "),n("li",[t._v("Approachable is better than simple")]),t._v(" "),n("li",[t._v("Mind your words, they are important")]),t._v(" "),n("li",[t._v("Speak like a human")]),t._v(" "),n("li",[t._v("Half measures are as bad as nothing at all")]),t._v(" "),n("li",[t._v("Encourage flow")]),t._v(" "),n("li",[t._v("Non-blocking is better than blocking")]),t._v(" "),n("li",[t._v("Favor focus over features")]),t._v(" "),n("li",[t._v("Avoid administrative distraction")]),t._v(" "),n("li",[t._v("Design for failure")]),t._v(" "),n("li",[t._v("Keep it logically awesome")])]),t._v(" "),n("footer",[n("small",[n("em",[t._v("—The Zen of GitHub")])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:l.a,VRow:f.a})}}]);