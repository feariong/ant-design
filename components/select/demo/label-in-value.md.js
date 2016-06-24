webpackJsonp([153,366],{758:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(21),s(20)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u9ed8\u8ba4\u60c5\u51b5\u4e0b ",["code","onChange"]," \u91cc\u53ea\u80fd\u62ff\u5230 value\uff0c\u5982\u679c\u9700\u8981\u62ff\u5230\u9009\u4e2d\u7684\u8282\u70b9\u6587\u672c label\uff0c\u53ef\u4ee5\u4f7f\u7528 ",["code","labelInValue"]," \u5c5e\u6027\u3002"],["p","\u9009\u4e2d\u9879\u7684 label \u4f1a\u88ab\u5305\u88c5\u5230 value \u4e2d\u4f20\u9012\u7ed9 ",["code","onChange"]," \u7b49\u51fd\u6570\uff0c\u6b64\u65f6 value \u662f\u4e00\u4e2a\u5bf9\u8c61\u3002"]],meta:{order:10,title:"\u83b7\u5f97\u9009\u9879\u7684\u6587\u672c",filename:"components/select/demo/label-in-value.md",id:"components-select-demo-label-in-value"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Select <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> Select<span class="token punctuation" >.</span>Option<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >handleChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>  <span class="token comment" spellcheck="true">// { key: "lucy", label: "Lucy (101)" }</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Select</span> <span class="token attr-name" >labelInValue</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token string" >\'lucy\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >120</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>handleChange<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>jack<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Jack <span class="token punctuation" >(</span><span class="token number" >100</span><span class="token punctuation" >)</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lucy<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Lucy <span class="token punctuation" >(</span><span class="token number" >101</span><span class="token punctuation" >)</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Select</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log(n)}var a=e["default"].Option;return c["default"].createElement("div",null,c["default"].createElement(e["default"],{labelInValue:!0,defaultValue:{key:"lucy"},style:{width:120},onChange:n},c["default"].createElement(a,{value:"jack"},"Jack (100)"),c["default"].createElement(a,{value:"lucy"},"Lucy (101)")))}}}});