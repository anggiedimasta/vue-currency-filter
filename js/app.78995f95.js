(function(t){function e(e){for(var i,s,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},o=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"119b45bd"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=n[t]=[e,i]}));e.push(a[2]=i);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",c.name="ChunkLoadError",c.type=i,c.request=o,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-currency-filter/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"21bb":function(t,e,a){"use strict";var i=a("3aea"),n=a.n(i);n.a},"3aea":function(t,e,a){},"5a89":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var i=a("5a89"),n=a.n(i);n.a},cd49:function(t,e,a){"use strict";a.r(e);a("8f12"),a("883f"),a("a21a"),a("77a3");var i=a("1b84"),n=a("add9"),o=a.n(n),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],l=a("a784"),c=a("5fb7"),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(l["a"])(e,t),e}(c["a"]),d=u,f=d,m=(a("5c0b"),a("acc7")),p=Object(m["a"])(f,s,r,!1,null,null,null),v=p.exports,g=a("6715");Object(g["a"])("/vue-currency-filter/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("c0ba");var b=a("9618"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home VueCurrencyFilter"},[t._m(0),a("section",{staticClass:"ads"},[a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}})],1),a("section",{staticClass:"container configs"},[a("h2",{staticClass:"title"},[t._v(" ⚙️ Customize Config ")]),a("div",{staticClass:"field is-horizontal"},[t._m(1),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.configSymbol,expression:"configSymbol"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g. $"},domProps:{value:t.configSymbol},on:{input:function(e){e.target.composing||(t.configSymbol=e.target.value)}}})])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(2),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.configSeparator,expression:"configSeparator"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g. ."},domProps:{value:t.configSeparator},on:{input:function(e){e.target.composing||(t.configSeparator=e.target.value)}}})])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(3),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.configFractionCount,expression:"configFractionCount"}],staticClass:"input",attrs:{type:"tel",pattern:"[0-9]*",placeholder:"e.g. 2"},domProps:{value:t.configFractionCount},on:{input:function(e){e.target.composing||(t.configFractionCount=e.target.value)}}})])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(4),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.configFractionSeparator,expression:"configFractionSeparator"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g. ."},domProps:{value:t.configFractionSeparator},on:{input:function(e){e.target.composing||(t.configFractionSeparator=e.target.value)}}})])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(5),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field is-narrow"},[a("div",{staticClass:"control"},[a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.configSymbolPosition,expression:"configSymbolPosition"}],attrs:{id:"radio-form-1",type:"radio",name:"radio-symbol"},domProps:{value:"front",checked:t._q(t.configSymbolPosition,"front")},on:{change:function(e){t.configSymbolPosition="front"}}}),t._v(" Before Text ")]),a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.configSymbolPosition,expression:"configSymbolPosition"}],attrs:{id:"radio-form-2",type:"radio",name:"radio-symbol"},domProps:{value:"back",checked:t._q(t.configSymbolPosition,"back")},on:{change:function(e){t.configSymbolPosition="back"}}}),t._v(" After Text ")])])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(6),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field is-narrow"},[a("div",{staticClass:"control"},[a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.configSymbolSpacing,expression:"configSymbolSpacing"}],attrs:{id:"radio-form-3",type:"radio",name:"radio-spacing"},domProps:{value:!0,checked:t._q(t.configSymbolSpacing,!0)},on:{change:function(e){t.configSymbolSpacing=!0}}}),t._v(" Use Spacing ")]),a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.configSymbolSpacing,expression:"configSymbolSpacing"}],attrs:{id:"radio-form-4",type:"radio",name:"radio-spacing"},domProps:{value:!1,checked:t._q(t.configSymbolSpacing,!1)},on:{change:function(e){t.configSymbolSpacing=!1}}}),t._v(" Remove Spacing ")])])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(7),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.configUseAvoidEmptyDecimals,expression:"configUseAvoidEmptyDecimals"}],attrs:{id:"chk-form-5",type:"radio",name:"chk-avoidemptydecimals"},domProps:{value:!0,checked:t._q(t.configUseAvoidEmptyDecimals,!0)},on:{change:function(e){t.configUseAvoidEmptyDecimals=!0}}}),t._v(" Custom string instead of decimal zeros ")]),a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.configUseAvoidEmptyDecimals,expression:"configUseAvoidEmptyDecimals"}],attrs:{id:"chk-form-5",type:"radio",name:"chk-avoidemptydecimals"},domProps:{value:!1,checked:t._q(t.configUseAvoidEmptyDecimals,!1)},on:{change:function(e){t.configUseAvoidEmptyDecimals=!1}}}),t._v(" Display decimal zeros ")])])])])]),t.configUseAvoidEmptyDecimals?a("div",{staticClass:"field is-horizontal"},[t._m(8),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.configAvoidEmptyDecimals,expression:"configAvoidEmptyDecimals"}],staticClass:"input",attrs:{type:"text",placeholder:"empty decimals string"},domProps:{value:t.configAvoidEmptyDecimals},on:{input:function(e){e.target.composing||(t.configAvoidEmptyDecimals=e.target.value)}}})])])])])]):t._e(),a("div",{staticClass:"field is-horizontal"},[t._m(9),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textInput,expression:"textInput"}],staticClass:"input",attrs:{type:"tel",pattern:"[0-9]*",placeholder:"e.g. 123456789"},domProps:{value:t.textInput},on:{input:function(e){e.target.composing||(t.textInput=e.target.value)}}})])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(10),a("div",{staticClass:"field-body",staticStyle:{"align-items":"flex-end"}},[a("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[a("b",{staticClass:"subtitle result__filter--default"},[t._v(" "+t._s(t._f("currency")(t.textInput))+" ")])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(11),a("div",{staticClass:"field-body",staticStyle:{"align-items":"flex-end"}},[a("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[a("b",{staticClass:"subtitle result__filter"},[t._v(" "+t._s(t._f("currency")(t.textInput,t.configSymbol,t.configSeparator,t.configFractionCount,t.configFractionSeparator,t.configSymbolPosition,t.configSymbolSpacing,t.configUseAvoidEmptyDecimals?t.configAvoidEmptyDecimals:void 0))+" ")])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(12),a("div",{staticClass:"field-body",staticStyle:{"align-items":"flex-end"}},[a("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[a("b",{staticClass:"subtitle result__filter--object"},[t._v(" "+t._s(t._f("currency")(t.textInput,{fractionCount:2,symbol:"¥"}))+" ")])])])])]),a("section",{staticClass:"ads"},[a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}})],1),a("section",{staticClass:"container docs"},[a("h2",{staticClass:"title"},[t._v(" 🚀 Download ")]),a("prism",{attrs:{language:"javascript"}},[t._v(" "+t._s(t.templateDownload)+" ")])],1),a("section",{staticClass:"container docs"},[a("h2",{staticClass:"title"},[t._v(" ❓ Usage Guide ")]),a("br"),a("h3",{staticClass:"subtitle"},[t._v(" In main.js ")]),a("prism",{attrs:{language:"javascript"}},[t._v(" "+t._s(t.templateMainJS)+" ")]),a("h3",{staticClass:"subtitle"},[t._v(" In template ")]),a("prism",{attrs:{language:"html"}},[t._v(" "+t._s(t.templateHtml)+" "+t._s(t.templateHtmlCustom)+" ")])],1),a("section",{staticClass:"container docs"},[a("h2",{staticClass:"title"},[t._v(" 📟 For Nuxt.js Project ")]),a("br"),a("h3",{staticClass:"subtitle"},[t._v(" Create file `plugins/currency.js`, with code : ")]),a("prism",{attrs:{language:"javascript"}},[t._v(" "+t._s(t.templatePlugin)+" ")]),a("h3",{staticClass:"subtitle"},[t._v(" Then update your nuxt.config.js, with code : ")]),a("prism",{attrs:{language:"javascript"}},[t._v(" "+t._s(t.templateNuxtConfig)+" ")])],1),t._m(13)])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-primary is-medium"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("figure",{staticClass:"image is-128x128",staticStyle:{margin:"0 auto 2em"}},[a("img",{attrs:{src:"img/icons/VueJS-Currency-128px.png"}})]),a("h1",{staticClass:"title"},[t._v(" Vue Currency Filter ")]),a("h2",{staticClass:"subtitle"},[t._v(" Lightweight vue currency filter based ")]),a("a",{staticClass:"button is-primary is-inverted is-outlined",attrs:{href:"https://github.com/mazipan/vue-currency-filter"}},[t._v(" Fork in Github ")]),a("br"),a("br"),a("a",{attrs:{href:"https://www.npmjs.com/package/vue-currency-filter",target:"_blank",rel:"noopener noreferer"}},[a("img",{attrs:{alt:"NPM Version",src:"https://img.shields.io/npm/v/vue-currency-filter.svg"}})]),a("a",{attrs:{href:"https://github.com/mazipan/vue-currency-filter",target:"_blank",rel:"noopener noreferer"}},[a("img",{attrs:{alt:"GitHub Stars",src:"https://img.shields.io/github/stars/mazipan/vue-currency-filter.svg?style=social"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v(" Symbol: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v(" Separator: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v(" Fraction Count: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v(" Fraction Separator: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label"},[a("label",{staticClass:"label"},[t._v(" Symbol Position: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label"},[a("label",{staticClass:"label"},[t._v(" Symbol Spacing: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v(" Avoid empty decimals: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v(" Avoid empty decimals string: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v(" Currency: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v(" Result - Global Config: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v(" Result - Custom Config: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v(" Result - Static Config: ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("p",[t._v(" Built with ❤️ by "),a("a",{attrs:{href:"https://mazipan.space"}},[t._v("Irfan Maulana")])])])])}],C=(a("d25c"),a("007d"),a("3e7c"),a("dd8b"),a("388c"),a("c6ad")),_=a.n(C);function S(t){return"undefined"===typeof t||null===t}i["a"].component("prism",_.a);var x={name:"Home",data:function(){return{textInput:2e4,configSymbol:"$",configSeparator:".",configFractionCount:0,configFractionSeparator:",",configSymbolPosition:"front",configSymbolSpacing:!0,configUseAvoidEmptyDecimals:!1,configAvoidEmptyDecimals:"",templateDownload:"\n# NPM\nnpm install vue-currency-filter\n\n# Yarn\nyarn add vue-currency-filter\n",templateMainJS:"\nimport VueCurrencyFilter from 'vue-currency-filter'\nVue.use(VueCurrencyFilter)\n// or with custom config\nVue.use(VueCurrencyFilter, {\n  symbol : '$',\n  thousandsSeparator: '.',\n  fractionCount: 2,\n  fractionSeparator: ',',\n  symbolPosition: 'front',\n  symbolSpacing: true\n})\n      ",templatePlugin:"\nimport VueCurrencyFilter from 'vue-currency-filter'\n\nVue.use(VueCurrencyFilter)\n// or with custom config\nVue.use(VueCurrencyFilter, {\n  symbol : '$',\n  thousandsSeparator: '.',\n  fractionCount: 2,\n  fractionSeparator: ',',\n  symbolPosition: 'front',\n  symbolSpacing: true\n})\n      ",templateNuxtConfig:"\nmodule.exports = {\n  plugins: [\n    { src: '~/plugins/currency', ssr: false }\n  ]\n}\n      ",templateHtml:"\n<span>{{ 20000 | currency}}</span>\n\n",templateHtmlCustom:"\n\x3c!-- or with custom config --\x3e\n<span>\n{{ 20000 | currency(\n    configSymbol, configSeparator, configFractionCount,\n    configFractionSeparator, configSymbolPosition, configSymbolSpacing\n  )\n}}\n</span>"}},methods:{updateData:function(t){S(t.symbol)||(this.configSymbol=t.symbol),S(t.thousandsSeparator)||(this.configSeparator=t.thousandsSeparator),S(t.fractionCount)||(this.configFractionCount=t.fractionCount),S(t.fractionSeparator)||(this.configFractionSeparator=t.fractionSeparator),S(t.symbolPosition)||(this.configSymbolPosition=t.symbolPosition),S(t.symbolSpacing)||(this.configSymbolSpacing=t.symbolSpacing)}}},w=x,P=(a("21bb"),Object(m["a"])(w,y,h,!1,null,null,null)),E=P.exports;i["a"].use(b["a"]);var A=[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],j=new b["a"]({routes:A}),F=j,k=a("6db3");i["a"].use(k["a"]);var D=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),N=(a("c1bd"),a("bdef"),a("7853"),a("7362"),a("88cb"),a("3065"),a("45b9"),a("66bf"),a("8f50"),a("beb4"),a("115f"),a("d7ab"),a("96b6"),a("3aac"),a("f163"),a("ea1c"),a("a4ba")),$=Array.prototype.map,z=Array.isArray,O=Object.prototype.toString;function I(t){return!!(""===t||t&&t.charCodeAt&&t.substr)}function M(t){return z?z(t):"[object Array]"===O.call(t)}function V(t){return t&&"[object Object]"===O.call(t)}function U(t,e){var a;for(a in t=t||{},e=e||{})e.hasOwnProperty(a)&&null==t[a]&&(t[a]=e[a]);return t}function q(t,e,a){if(!t)return[];if($&&t.map===$)return t.map(e,a);var i,n=[],o=0;for(o=0,i=t.length;o<i;o++)n[o]=e.call(a,t[o],o,t);return n}var T={settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}};function H(t,e){return void 0===e&&(e=0),t=Math.round(Math.abs(t)),isNaN(t)?e:t}var J=function t(e,a){if(M(e))return q(e,(function(e){return t(e,a)}));if("number"==typeof(e=e||0))return e;a=a||T.settings.number.decimal;var i=new RegExp("[^0-9-"+a+"]",["g"]),n=parseFloat((""+e).replace(/\((?=\d+)(.*)\)/,"-$1").replace(i,"").replace(a,"."));return isNaN(n)?0:n},R=function(t,e){e=H(e,T.settings.number.precision);var a=Number(J(t)+"e"+e),i=Math.round(a);return Number(i+"e-"+e).toFixed(e)},G={name:"currency",symbol:"",thousandsSeparator:".",fractionCount:0,fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0,avoidEmptyDecimals:void 0},B={install:function(t,e){var a=function(e){null==e&&(e={});var a=U(e,G),i=a.name,n=function(t,e){if(null==t)return{};var a,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)e.indexOf(a=o[i])>=0||(n[a]=t[a]);return n}(a,["name"]),o=function(t,e,a,i,o,s,r,l){var c=U({symbol:e,thousandsSeparator:a,fractionCount:i,fractionSeparator:o,symbolPosition:s,symbolSpacing:r,avoidEmptyDecimals:l},n);"object"==Object(N["a"])(e)&&(c=U(e,n));var u=0,d="-"===String(t).charAt(0);d&&(t=String(t).slice(1));var f,m=parseFloat(t);return isNaN(m)||(u=m),f="front"===c.symbolPosition?c.symbolSpacing?"%s %v":"%s%v":c.symbolSpacing?"%v %s":"%v%s",c.fractionCount>0&&(t=R(t,c.fractionCount)),u=function t(e,a,i,n,o,s,r){if(M(e))return q(e,(function(e){return t(e,a,i,n,o,s,r)}));e=J(e);var l=U(V(a)?a:{symbol:a,precision:i,thousand:n,decimal:o,format:s,avoidEmptyDecimals:r},T.settings.currency),c=function(t){var e=T.settings.currency.format;return"function"==typeof t&&(t=t()),I(t)&&t.match("%v")?{pos:t,neg:t.replace("-","").replace("%v","-%v"),zero:t}:t&&t.pos&&t.pos.match("%v")?t:I(e)?T.settings.currency.format={pos:e,neg:e.replace("%v","-%v"),zero:e}:e}(l.format);return(e>0?c.pos:e<0?c.neg:c.zero).replace("%s",l.symbol).replace("%v",function t(e,a,i,n,o){if(M(e))return q(e,(function(e){return t(e,a,i,n,o)}));e=J(e);var s=U(V(a)?a:{precision:a,thousand:i,decimal:n},T.settings.number),r=H(s.precision),l=e<0?"-":"",c=parseInt(R(Math.abs(e||0),r),10)+"",u=c.length>3?c.length%3:0,d="";return r&&(d=s.decimal+R(Math.abs(e),r).split(".")[1],void 0!==o&&parseInt(R(Math.abs(e||0),1),10)==e&&(d=""===o?"":s.decimal+o)),l+(u?c.substr(0,u)+s.thousand:"")+c.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+s.thousand)+d}(Math.abs(e),H(l.precision),l.thousand,l.decimal,l.avoidEmptyDecimals))}(t,{format:f,symbol:c.symbol,precision:c.fractionCount,thousand:c.thousandsSeparator,decimal:c.fractionSeparator,avoidEmptyDecimals:c.avoidEmptyDecimals}),d&&(u="-"+u),u};t.filter(i,o),t.prototype["$"+i]={setConfig:function(t){n=U(t,G)},getConfig:function(){return n},format:o}};Array.isArray(e)?e.forEach((function(t){return a(t)})):a(e)}},L=B,Y=a("d7e4");i["a"].use(Y),i["a"].use(o.a.Adsense),i["a"].use(o.a.InArticleAdsense),i["a"].use(o.a.InFeedAdsense),i["a"].use(L,{symbol:"$"}),i["a"].config.productionTip=!1,new i["a"]({router:F,store:D,render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.78995f95.js.map