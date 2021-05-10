(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{618:function(t,a,r){"use strict";r.r(a);var s=r(42),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"android开源库的制作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#android开源库的制作"}},[t._v("#")]),t._v(" Android开源库的制作")]),t._v(" "),r("p",[t._v("我们在写项目时经常用到开源库，特别是在android studio中，一句话引用就可以，比如compile 'com.android.support:appcompat-v7:25.3.1'，剩下的交给gradle依赖就可以了。但是如何制作开源库给别人使用呢？现在制作开源库一般是上传到jcenter或者maven中，但是这两个比较麻烦，我将介绍一个简单的给大家使用。这个开源库是放在GitHub中然后关联到JitPack上。所以前提是你要有一个GitHub账号。\n")]),t._v(" "),r("h3",{attrs:{id:"第一步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第一步"}},[t._v("#")]),t._v(" 第一步")]),t._v(" "),r("p",[t._v("首先，你需要在android studio中创建一个项目，在项目中新建一个module，然后选择Android Library点击完成。这个library就是你开源库的类库。\n"),r("img",{attrs:{src:"http://ww2.sinaimg.cn/large/006HJ39wgy1ff9hu69qbxj30mf0fl750.jpg",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"第二步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第二步"}},[t._v("#")]),t._v(" 第二步")]),t._v(" "),r("p",[t._v("然后，打开项目的build.gradle在classpath:中添加classpath 'com.github.dcendents:android-maven-gradle-plugin:1.5'这句话可以在jitpack官方文档中找到。\n"),r("img",{attrs:{src:"http://ww2.sinaimg.cn/large/006HJ39wgy1ff9hu5z6c9j30o104taa9.jpg",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"第三步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第三步"}},[t._v("#")]),t._v(" 第三步")]),t._v(" "),r("p",[t._v("然后，在library的build.gradle中添加apply plugin: 'com.github.dcendents.android-maven' group='com.github.YourUsername'这两句。\n"),r("img",{attrs:{src:"http://ww2.sinaimg.cn/large/006HJ39wgy1ff9hu61vh4j30g603at8q.jpg",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"第四步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第四步"}},[t._v("#")]),t._v(" 第四步")]),t._v(" "),r("p",[t._v("开源库编写完成后整个项目上传到github上，然后点击release创建一个版本。输入版本号点击Publish Release就完成。\n"),r("img",{attrs:{src:"http://ww3.sinaimg.cn/large/006HJ39wgy1ff9hu61m0cj30gn0cmq2z.jpg",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"第五步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第五步"}},[t._v("#")]),t._v(" 第五步")]),t._v(" "),r("p",[t._v("最后，将这个库例如：https://github.com/codeteenager/CalendarLib复制到jitpack上如下图所示的Git repo url，点击Look up，就可以看到下面的版本。\n"),r("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006HJ39wgy1ff9hu6849kj30hf09nt8t.jpg",alt:""}}),t._v("\n然后点击Get it就可以看到下面两个maven和compile，然后复制到你项目对应的位置就可以引用了。\n是不是很简单呢。\n"),r("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006HJ39wgy1ff9hu6e894j30jr0eqt9s.jpg",alt:""}}),t._v("\n参考文档："),r("strong",[t._v("https://jitpack.io/docs/#publishing-on-jitpack")])])])}),[],!1,null,null,null);a.default=i.exports}}]);