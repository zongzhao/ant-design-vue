webpackJsonp([58],{1574:function(s,t,a){s.exports=a(3407)},3407:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(3408),n=a(67),r=n(null,e.a,!1,null,null,null);t.default=r.exports},3408:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h1",[s._v("Getting Started")]),s._v(" "),a("p",[s._v("Ant Design Vue is dedicated to providing a "),a("strong",[s._v("good development experience")]),s._v(" for programmers. Make sure that you had installed "),a("a",{attrs:{href:"https://nodejs.org/"}},[s._v("Node.js")]),s._v("(> v6.5) correctly.")]),s._v(" "),a("blockquote",[a("p",[s._v("Before delving into Ant Design Vue, a good knowledge base of "),a("a",{attrs:{href:"https://cn.vuejs.org/"}},[s._v("Vue")]),s._v(" and "),a("a",{attrs:{href:"http://babeljs.io/docs/learn-es2015/"}},[s._v("JavaScript ES2015")]),s._v(" is needed.")])]),s._v(" "),a("h2",{attrs:{id:"Playground"}},[s._v("Playground "),a("a",{staticClass:"anchor",attrs:{href:"#Playground","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("The following CodeSandbox demo is the simplest use case, and it's also a good habit to fork this demo to provide a re-producible demo while reporting a bug.")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://codesandbox.io/s/2wpk21kzvr"}},[a("img",{attrs:{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Vue Antd Template"}})])])]),s._v(" "),a("h2",{attrs:{id:"Import-ant-design-vue"}},[s._v("Import ant-design-vue "),a("a",{staticClass:"anchor",attrs:{href:"#Import-ant-design-vue","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("h3",{attrs:{id:"1.-Installation"}},[s._v("1. Installation "),a("a",{staticClass:"anchor",attrs:{href:"#1.-Installation","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli"}},[s._v("vue-cli")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ npm install vue-cli -g\n")])]),s._v(" "),a("h3",{attrs:{id:"2.-Create-a-New-Project"}},[s._v("2. Create a New Project "),a("a",{staticClass:"anchor",attrs:{href:"#2.-Create-a-New-Project","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("A new project can be created using CLI tools.")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ vue init webpack antd-demo\n")])]),s._v(" "),a("h3",{attrs:{id:"3.-Use-antd's-Components"}},[s._v("3. Use antd's Components "),a("a",{staticClass:"anchor",attrs:{href:"#3.-Use-antd's-Components","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ npm i --save ant-design-vue\n")])]),s._v(" "),a("p",[a("strong",[s._v("Fully import")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Antd "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'ant-design-vue'")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" App "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'./App'")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'ant-design-vue/dist/antd.css'")]),s._v("\nVue.config.productionTip = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n\nVue.use(Antd)\n\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* eslint-disable no-new */")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": { App },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'<App/>'")]),s._v("\n})\n")])]),s._v(" "),a("p",[s._v("The above imports Antd entirely. Note that CSS file needs to be imported separately.")]),s._v(" "),a("p",[a("strong",[s._v("Only import the components you need")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button, message } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'ant-design-vue'")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" App "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'./App'")]),s._v("\n\nVue.config.productionTip = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n\nVue.component(Button.name, Button)\nVue.prototype.$message = message\n\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* eslint-disable no-new */")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": { App },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'<App/>'")]),s._v("\n})\n")])]),s._v(" "),a("blockquote",[a("p",[s._v("All the components in antd are listed in the sidebar.")])]),s._v(" "),a("h3",{attrs:{id:"4.-Component-list"}},[s._v("4. Component list "),a("a",{staticClass:"anchor",attrs:{href:"#4.-Component-list","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vueComponent/ant-design-vue/blob/master/site/components.js"}},[s._v("Component list")])]),s._v(" "),a("h2",{attrs:{id:"Compatibility"}},[s._v("Compatibility "),a("a",{staticClass:"anchor",attrs:{href:"#Compatibility","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Ant Design Vue supports all the modern browsers and IE9+.")]),s._v(" "),a("p",[s._v("You need to provide "),a("a",{attrs:{href:"https://github.com/es-shims/es5-shim"}},[s._v("es5-shim")]),s._v(" and "),a("a",{attrs:{href:"https://github.com/paulmillr/es6-shim"}},[s._v("es6-shim")]),s._v(" and other polyfills for IE browsers.")]),s._v(" "),a("p",[s._v("If you are using babel, we strongly recommend using "),a("a",{attrs:{href:"https://babeljs.io/docs/usage/polyfill/"}},[s._v("babel-polyfill")]),s._v(" and "),a("a",{attrs:{href:"https://babeljs.io/docs/plugins/transform-runtime/"}},[s._v("babel-plugin-transform-runtime")]),s._v(" instead of those two shims.")]),s._v(" "),a("blockquote",[a("p",[s._v("Please avoid using both the babel and shim methods at the same time.")])]),s._v(" "),a("h2",{attrs:{id:"Import-on-Demand"}},[s._v("Import on Demand "),a("a",{staticClass:"anchor",attrs:{href:"#Import-on-Demand","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("If you see logs like below screenshot, you might be importing all components by writing "),a("code",{pre:!0},[s._v("import { Button } from 'ant-design-vue';")]),s._v(". This will affect your app's network performance.")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[s._v("You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.\n")])]),s._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",alt:""}})])]),s._v(" "),a("p",[s._v("However, we can import individual components on demand:")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Button "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'ant-design-vue/lib/button'")]),s._v(";\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'ant-design-vue/lib/button/style'")]),s._v("; "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// or ant-design-vue/lib/button/style/css for css format file")]),s._v("\n")])]),s._v(" "),a("p",[s._v("We strongly recommend using "),a("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[s._v("babel-plugin-import")]),s._v(", which can convert the following code to the 'antd/lib/xxx' way:")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'ant-design-vue'")]),s._v(";\n")])]),s._v(" "),a("p",[s._v("And this plugin can load styles too, read "),a("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import#usage"}},[s._v("usage")]),s._v(" for more details.")]),s._v(" "),a("blockquote",[a("p",[s._v("FYI, babel-plugin-import's "),a("code",{pre:!0},[s._v("style")]),s._v(" option will importing some global reset styles, don't use it if you don't need those styles. You can import styles manually via "),a("code",{pre:!0},[s._v("import 'ant-design-vue/dist/antd.css'")]),s._v(" and override the global reset styles.")])]),s._v(" "),a("h2",{attrs:{id:"Customization"}},[s._v("Customization "),a("a",{staticClass:"anchor",attrs:{href:"#Customization","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/ant-design-vue/docs/vue/customize-theme"}},[s._v("Customize Theme")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"}},[s._v("Local Iconfont")])])]),s._v(" "),a("h2",{attrs:{id:"Tips"}},[s._v("Tips "),a("a",{staticClass:"anchor",attrs:{href:"#Tips","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("ul",[a("li",[s._v("You can use any "),a("code",{pre:!0},[s._v("npm")]),s._v(" modules.")]),s._v(" "),a("li",[s._v("Although Vue's official recommended template to write components, JSX is a better choice for complex components.")])])])}],r={render:e,staticRenderFns:n};t.a=r}});