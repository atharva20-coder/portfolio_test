(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{287:function(t,e,r){"use strict";r.r(e);r(39),r(51);var n={props:{links:{type:Array,default:[]}},methods:{isRouteActive:function(t){return this.$route.path.includes(t)}}},l=r(16),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.links&&t.links.length>0?r("ul",{staticClass:"m-0 flex flex-wrap"},t._l(t.links,(function(link,e){return r("li",{key:e,staticClass:"relative mr-2"},[r("a",{staticClass:"text-gray-500 text-sm last:text-gray-900 last:font-medium",attrs:{href:link.to,title:link.title}},[r("span",[t._v(t._s(link.title))])]),t._v(" "),e<t.links.length-1?r("span",{staticClass:"text-gray-500 ml-2"},[t._v("/")]):t._e()])})),0):t._e()}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,r){"use strict";r.r(e);var n=r(6),l=(r(38),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("php",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.article.title," - afgprogrammer"),meta:[{name:"author",content:"Mohammad Rahmani - afgprogrammer"},{name:"description",content:this.article.summery},{key:"og:title",property:"og:title",content:"".concat(this.article.title)},{key:"og:image",property:"og:image",content:"https://afgprogrammer.com".concat(this.article.image)},{key:"og:description",property:"og:description",content:this.article.summery},{key:"og:url",property:"og:url",content:"https://afgprogrammer.com".concat(this.article.path)},{key:"twitter:title",name:"twitter:title",content:"".concat(this.article.title)},{key:"twitter:description",name:"twitter:description",content:this.article.summery},{key:"twitter:creator",name:"twitter:creator",content:"@afgprogrammer"},{key:"twitter:card",name:"twitter:card",content:"summary"},{key:"twitter:image",name:"twitter:image",content:"https://afgprogrammer.com".concat(this.article.image)}]}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},breadcrumbLinks:function(){return[{title:"Home",to:"/"},{title:"PHP",to:"/php"},{title:this.article.title,to:this.article.slug}]}}}),c=r(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"mx-auto max-w-7xl px-6 xl:px-0"},[r("div",{staticClass:"flex py-6"},[r("breadcrumb",{attrs:{links:t.breadcrumbLinks()}})],1),t._v(" "),r("div",{staticClass:"h-4"}),t._v(" "),r("div",{staticClass:"grid grid-cols-1 lg:grid-cols-2 gap-8"},[r("div",[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"rounded-t-lg",attrs:{"data-src":t.article.image,alt:t.article.title}})]),t._v(" "),r("div",{staticClass:"grid"},[r("div",[r("h1",{staticClass:"text-4xl font-bold tracking-wide"},[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"mt-8 text-lg text-gray-700 font-light",domProps:{innerHTML:t._s(t.article.description)}})]),t._v(" "),r("div",{staticClass:"self-end grid grid-cols-2 mt-9 lg:mt-0"},[r("div",[r("span",{staticClass:"text-xs text-gray-600"},[t._v(t._s(t.formatDate(t.article.date)))]),t._v(" "),r("div",t._l(t.article.tags,(function(e,n){return r("span",{key:n,staticClass:"mr-5 text-blue-900"},[t._v(t._s(e))])})),0)]),t._v(" "),r("div",{staticClass:"self-end justify-self-end"},[r("a",{staticClass:"text-sm text-blue-900",attrs:{href:t.article.instagram,target:"_blank",title:"language.php - Instagram"}},[t._v("Instagram")])])])])]),t._v(" "),r("div",{staticClass:"h-4"}),t._v(" "),r("adsbygoogle",{attrs:{"ad-slot":"4018468658","ad-format":"auto","ad-label":"php-ads"}}),t._v(" "),r("div",{staticClass:"h-4"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumb:r(287).default})}}]);