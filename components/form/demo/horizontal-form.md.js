webpackJsonp([265,366],{644:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(7),s(6)),o=t(p),e=(s(53),s(52)),c=t(e),l=(s(179),s(154)),u=t(l),k=(s(10),s(8)),i=t(k),r=(s(17),s(24)),m=t(r),d=(s(42),s(40)),g=t(d),f=(s(48),s(47)),y=t(f),h=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},b=s(1),v=t(b),F=s(2);t(F);n.exports={content:[["p","\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u4f7f\u7528 ",["code","Form.create"]," \u6765\u83b7\u53d6\u548c\u66f4\u65b0\u8868\u5355\u63d0\u4ea4\u7684\u6570\u503c\u3002"]],meta:{order:2,title:"\u5178\u578b\u8868\u5355",filename:"components/form/demo/horizontal-form.md",id:"components-form-demo-horizontal-form"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Form<span class="token punctuation" >,</span> Input<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Checkbox<span class="token punctuation" >,</span> Radio<span class="token punctuation" >,</span> Tooltip<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> FormItem <span class="token operator" >=</span> Form<span class="token punctuation" >.</span>Item<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> RadioGroup <span class="token operator" >=</span> Radio<span class="token punctuation" >.</span>Group<span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >handleSubmit</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    e<span class="token punctuation" >.</span><span class="token function" >preventDefault</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u6536\u5230\u8868\u5355\u503c\uff1a\'</span><span class="token punctuation" >,</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >.</span><span class="token function" >getFieldsValue</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> getFieldProps <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> formItemLayout <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      labelCol<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      wrapperCol<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Form</span> <span class="token attr-name" >horizontal</span> <span class="token attr-name" >onSubmit</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleSubmit<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token operator" >&lt;</span>FormItem\n          <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span>\n          label<span class="token operator" >=</span><span class="token string" >"\u7528\u6237\u540d"</span>\n        <span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-form-text<span class="token punctuation" >"</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>userName<span class="token punctuation" >"</span></span> <span class="token attr-name" >name</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>userName<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5927\u773c\u840c minion<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n        <span class="token operator" >&lt;</span>FormItem\n          <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span>\n          label<span class="token operator" >=</span><span class="token string" >"\u5bc6\u7801"</span>\n        <span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>password<span class="token punctuation" >"</span></span> <span class="token attr-name" >{...getFieldProps(\'pass\')}</span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165\u5bc6\u7801<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n        <span class="token operator" >&lt;</span>FormItem\n          <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span>\n          label<span class="token operator" >=</span><span class="token string" >"\u60a8\u7684\u6027\u522b"</span>\n        <span class="token operator" >></span>\n          <span class="token operator" >&lt;</span>RadioGroup <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'gender\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span> initialValue<span class="token punctuation" >:</span> <span class="token string" >\'female\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span><span class="token operator" >></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>male<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7537\u7684<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>female<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5973\u7684<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioGroup</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n        <span class="token operator" >&lt;</span>FormItem\n          <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span>\n          label<span class="token operator" >=</span><span class="token string" >"\u5907\u6ce8"</span>\n          help<span class="token operator" >=</span><span class="token string" >"\u968f\u4fbf\u5199\u70b9\u4ec0\u4e48"</span>\n        <span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>textarea<span class="token punctuation" >"</span></span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u968f\u4fbf\u5199<span class="token punctuation" >"</span></span> <span class="token attr-name" >{...getFieldProps(\'remark\')}</span> <span class="token punctuation" >/></span>\n        <span class="token attr-name" >&lt;</span>/<span class="token attr-name" >FormItem</span><span class="token punctuation" >></span>\n        <span class="token attr-name" >&lt;FormItem</span>\n          <span class="token attr-name" >{...formItemLayout}</span>\n          <span class="token attr-name" >label={&lt;span</span><span class="token punctuation" >></span><span class="token attr-name" >\u5356\u8eab\u534e\u5e9c</span> <span class="token attr-name" >&lt;Tooltip</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6211\u4e3a\u79cb\u9999<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>question-circle-o<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span>\n          <span class="token operator" >&lt;</span>Checkbox <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'agreement\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span><span class="token operator" >></span>\u540c\u610f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Checkbox</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span> <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >16</span><span class="token punctuation" >,</span> offset<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginTop<span class="token punctuation" >:</span> <span class="token number" >24</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >htmlType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u786e\u5b9a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Form</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nDemo <span class="token operator" >=</span> Form<span class="token punctuation" >.</span><span class="token function" >create</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >(</span>Demo<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=y["default"].Item,a=g["default"].Group,s=v["default"].createClass({displayName:"Demo",handleSubmit:function(n){n.preventDefault(),console.log("\u6536\u5230\u8868\u5355\u503c\uff1a",this.props.form.getFieldsValue())},render:function(){var s=this.props.form.getFieldProps,t={labelCol:{span:6},wrapperCol:{span:14}};return v["default"].createElement(y["default"],{horizontal:!0,onSubmit:this.handleSubmit},v["default"].createElement(n,h({},t,{label:"\u7528\u6237\u540d"}),v["default"].createElement("p",{className:"ant-form-text",id:"userName",name:"userName"},"\u5927\u773c\u840c minion")),v["default"].createElement(n,h({},t,{label:"\u5bc6\u7801"}),v["default"].createElement(m["default"],h({type:"password"},s("pass"),{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),v["default"].createElement(n,h({},t,{label:"\u60a8\u7684\u6027\u522b"}),v["default"].createElement(a,s("gender",{initialValue:"female"}),v["default"].createElement(g["default"],{value:"male"},"\u7537\u7684"),v["default"].createElement(g["default"],{value:"female"},"\u5973\u7684"))),v["default"].createElement(n,h({},t,{label:"\u5907\u6ce8",help:"\u968f\u4fbf\u5199\u70b9\u4ec0\u4e48"}),v["default"].createElement(m["default"],h({type:"textarea",placeholder:"\u968f\u4fbf\u5199"},s("remark")))),v["default"].createElement(n,h({},t,{label:v["default"].createElement("span",null,"\u5356\u8eab\u534e\u5e9c ",v["default"].createElement(u["default"],{title:"\u6211\u4e3a\u79cb\u9999"},v["default"].createElement(i["default"],{type:"question-circle-o"})))}),v["default"].createElement(c["default"],s("agreement"),"\u540c\u610f")),v["default"].createElement(n,{wrapperCol:{span:16,offset:6},style:{marginTop:24}},v["default"].createElement(o["default"],{type:"primary",htmlType:"submit"},"\u786e\u5b9a")))}});return s=y["default"].create()(s),v["default"].createElement(s,null)}}}});