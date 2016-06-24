webpackJsonp([5,366],{92:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},o=s(163),p=t(o),c=s(188),l=t(c),u=s(99),r=t(u),i=e({},p["default"]);i.lang=e({placeholder:"Select date",rangePlaceholder:["Start date","End date"]},l["default"]),i.timePickerLocale=e({},r["default"]),a["default"]=i,n.exports=a["default"]},99:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},o=s(191),p=t(o),c=e({placeholder:"Select a time"},p["default"]);a["default"]=c,n.exports=a["default"]},623:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(36),s(35)),o=t(e),p=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},c=s(1),l=t(c),u=s(2),r=(t(u),s(92)),i=t(r);n.exports={content:{"zh-CN":[["p","\u901a\u8fc7 ",["code","locale"]," \u914d\u7f6e\u65f6\u533a\u3001\u8bed\u8a00\u7b49, \u9ed8\u8ba4\u652f\u6301 ",["code","en_US"],"\uff0c",["code","zh_CN"],"\u3002"]],"en-US":[["p","Use locale to set the properties like time zone, language and etc. en_US, zh_CN are supported by default."]]},meta:{order:10,title:{"zh-CN":"\u56fd\u9645\u5316","en-US":"Locale"},filename:"components/date-picker/demo/locale.md",id:"components-date-picker-demo-locale"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> DatePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> enUS <span class="token keyword" >from</span> <span class="token string" >\'antd/lib/date-picker/locale/en_US\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> customLocale <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  timezoneOffset<span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token operator" >*</span> <span class="token number" >60</span><span class="token punctuation" >,</span>\n  firstDayOfWeek<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n  minimalDaysInFirstWeek<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token attr-name" >locale</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> <span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>enUS<span class="token punctuation" >,</span> <span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>customLocale <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n={timezoneOffset:0,firstDayOfWeek:0,minimalDaysInFirstWeek:1};return l["default"].createElement(o["default"],{locale:p({},i["default"],n)})}}}});