(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{641:function(t,i,a){"use strict";a.r(i);var r=a(42),e=Object(r.a)({},(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"android插件化学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android插件化学习"}},[t._v("#")]),t._v(" Android插件化学习")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://weishu.me/archives/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VirtualXposed的作者的博客"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gtoad.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Native Hook"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/006tNbRwly1fxtci8b1efj30k00ist9n.jpg",alt:""}})]),t._v(" "),a("p",[t._v("想要实现插件化，主要是解决下面三个问题：")]),t._v(" "),a("ul",[a("li",[t._v("插件中代码的加载和与主工程的互相调用")]),t._v(" "),a("li",[t._v("插件中资源的加载和与主工程的互相访问")]),t._v(" "),a("li",[t._v("四大组件生命周期的管理")])]),t._v(" "),a("p",[t._v("根据上图所知，根据插件化的发展历史将插件化分为三代：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第一代：dynamic-load-apk最早使用ProxyActivity这种静态代理技术，由ProxyActivity去控制插件中PluginActivity的生命周期。该种方式缺点明显，插件中的activity必须继承PluginActivity，开发时要小心处理context。而DroidPlugin通过Hook系统服务的方式启动插件中的Activity，使得开发插件的过程和开发普通的app没有什么区别，但是由于hook过多系统服务，异常复杂且不够稳定。")])]),t._v(" "),a("li",[a("p",[t._v("第二代：为了同时达到插件开发的低侵入性（像开发普通app一样开发插件）和框架的稳定性，在实现原理上都是趋近于选择尽量少的hook，并通过在manifest中预埋一些组件实现对四大组件的插件化。另外各个框架根据其设计思想都做了不同程度的扩展，其中Small更是做成了一个跨平台，组件化的开发框架。")])]),t._v(" "),a("li",[a("p",[t._v("第三代：VirtualApp比较厉害，能够完全模拟app的运行环境，能够实现app的免安装运行和双开技术。Atlas是阿里今年开源出来的一个结合组件化和热修复技术的一个app基础框架，其广泛的应用与阿里系的各个app，其号称是一个容器化框架。")])])])])}),[],!1,null,null,null);i.default=e.exports}}]);