webpackJsonp([148,366],{764:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(21),a(20)),o=t(p),e=a(1),c=t(e),u=a(2);t(u);n.exports={content:[["p","tags select\uff0c\u968f\u610f\u8f93\u5165\u7684\u5185\u5bb9\uff08scroll the menu\uff09"]],meta:{order:3,title:"\u6807\u7b7e",filename:"components/select/demo/tags.md",id:"components-select-demo-tags"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Select <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> Select<span class="token punctuation" >.</span>Option<span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> children <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> <span class="token number" >10</span><span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> <span class="token number" >36</span><span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  children<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>i<span class="token punctuation" >.</span><span class="token function" >toString</span><span class="token punctuation" >(</span><span class="token number" >36</span><span class="token punctuation" >)</span> <span class="token operator" >+</span> i<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>i<span class="token punctuation" >.</span><span class="token function" >toString</span><span class="token punctuation" >(</span><span class="token number" >36</span><span class="token punctuation" >)</span> <span class="token operator" >+</span> i<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >handleChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`selected </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>value<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Select</span> <span class="token attr-name" >tags</span>\n    <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token string" >\'100%\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >searchPlaceholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6807\u7b7e\u6a21\u5f0f<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>handleChange<span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >></span></span>\n    <span class="token punctuation" >{</span>children<span class="token punctuation" >}</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Select</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("selected "+n)}for(var s=o["default"].Option,a=[],t=10;t<36;t++)a.push(c["default"].createElement(s,{key:t.toString(36)+t},t.toString(36)+t));return c["default"].createElement(o["default"],{tags:!0,style:{width:"100%"},searchPlaceholder:"\u6807\u7b7e\u6a21\u5f0f",onChange:n},a)}}}});