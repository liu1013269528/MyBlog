(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{287:function(t,a,s){"use strict";s.r(a);var e=s(38),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"下安装-git-环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下安装-git-环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 下安装 Git 环境")]),t._v(" "),s("blockquote",[s("p",[t._v("由于 CentOS 并没有继承 Git 环境，需要自己下载源码然后编译安装。大家按照我所述的方法即可成功安装，系统版本 CentOS 7.2")])]),t._v(" "),s("h4",{attrs:{id:"一、下载-编译工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、下载-编译工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、下载 编译工具")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum groupinstall “Development Tools”\n")])])]),s("h4",{attrs:{id:"二、下载依赖包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、下载依赖包","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、下载依赖包")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum install zlib-devel perl-ExtUtils-MakeMaker asciidoc xmlto openssl-devel\n")])])]),s("h4",{attrs:{id:"删除-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除-git","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除 git")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum remove git\n")])])]),s("h4",{attrs:{id:"三、下载最新的-git-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、下载最新的-git-代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、下载最新的 Git 代码")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wget http://www.codemonkey.org.uk/projects/git-snapshots/git/git-latest.tar.xz\n")])])]),s("h4",{attrs:{id:"四、解压源文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、解压源文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、解压源文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 没有安装 xz 的需要安装一下\nyum -y install xz\n// 解压\nxz -d git-latest.tar.xz\ntar -xvf git-latest.tar\n")])])]),s("h4",{attrs:{id:"五、编译-git-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、编译-git-源码","aria-hidden":"true"}},[t._v("#")]),t._v(" 五、编译 Git 源码")]),t._v(" "),s("blockquote",[s("p",[t._v("编译之前，需要安装 autoconf,否则报错")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/bin/sh: autoreconf: command not found (centos 6.5 install qemu from source code)\n\nyum install install autoconf automake libtool\n")])])]),s("h4",{attrs:{id:"六、编译程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、编译程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 六、编译程序")]),t._v(" "),s("blockquote",[s("p",[t._v("这里还有一个坑，就是如果直接编译安装 Git 可能会出现 PATH 问题，即 "),s("code",[t._v("Unable to find remote helper for 'https'")]),t._v("，需要按照我如下操作方式。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" curl-devel\n//cd 到你的 Git 源码处，如果上面按照我的步骤，你可以 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" 一下 找到 当前目录下的 git-20**的日期文件夹，\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./git-2016-04-06 \nautoconf\n./configure\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h4",{attrs:{id:"七、添加-link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、添加-link","aria-hidden":"true"}},[t._v("#")]),t._v(" 七、添加 link")]),t._v(" "),s("blockquote",[s("p",[t._v("这一步对于原本系统中有旧版git的系统很重要，会报告Link已存在，此时要删除原来的Link即/usr/bin/git，再执行第六步。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ln -s /usr/local/bin/git /usr/bin/\n")])])]),s("h4",{attrs:{id:"八、测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 八、测试")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git --version \n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);