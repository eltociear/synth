(window.webpackJsonp=window.webpackJsonp||[]).push([[2,46],{138:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(3),r=a(0),l=a.n(r),c=a(23),m=a(22),i=a(133),s=a(139),o=a(129),u=a(132),E=a(140),d=a.n(E);function g(e){const{siteConfig:t,i18n:{currentLocale:a}}=Object(m.default)(),{favicon:r,baseUrl:E,themeConfig:{image:g,metadatas:p},url:b}=t,{title:f,description:h,image:k,keywords:v,permalink:w,searchMetadatas:N}=e,j=d()(E,"blog"),y=Object(u.useLocation)().pathname.startsWith(j.toString())?(e=>{const{siteConfig:t={}}=Object(m.default)(),{customFields:a={},titleDelimiter:n="|"}=t,{blogTitle:r}=a;return e&&e.trim().length?`${e.trim()} ${n} ${r}`:r})(f):Object(o.useTitleFormatter)(f),O=k||g,T=Object(i.a)(O,{absolute:!0}),C=Object(i.a)(r),L=a.split("-")[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement("html",{lang:L}),y&&l.a.createElement("title",null,y),y&&l.a.createElement("meta",{property:"og:title",content:y}),r&&l.a.createElement("link",{rel:"shortcut icon",href:C}),h&&l.a.createElement("meta",{name:"description",content:h}),h&&l.a.createElement("meta",{property:"og:description",content:h}),v&&v.length&&l.a.createElement("meta",{name:"keywords",content:v.join(",")}),O&&l.a.createElement("meta",{property:"og:image",content:T}),O&&l.a.createElement("meta",{name:"twitter:image",content:T}),O&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${y}`}),w&&l.a.createElement("meta",{property:"og:url",content:b+w}),w&&l.a.createElement("link",{rel:"canonical",href:b+w}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),l.a.createElement(s.a,Object(n.a)({tag:o.DEFAULT_SEARCH_TAG,locale:a},N)),l.a.createElement(c.a,null,p.map(((e,t)=>l.a.createElement("meta",Object(n.a)({key:`metadata_${t}`},e))))))}},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),l=a(130),c=a(131),m=a(55),i=a.n(m);function s({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:i.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:i.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},r.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))))))}},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(136),c=a(131),m=a(141);t.default=function(e){const{tags:t,sidebar:a}=e,n={};Object.keys(t).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e);n[t]=n[t]||[],n[t].push(e)}));const i=Object.entries(n).sort((([e],[t])=>e===t?0:e>t?1:-1)).map((([e,a])=>r.a.createElement("div",{key:e},r.a.createElement("h3",null,e),a.map((e=>r.a.createElement(c.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")"))),r.a.createElement("hr",null)))).filter((e=>null!=e));return r.a.createElement(l.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{sidebar:a})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},i)))))}}}]);