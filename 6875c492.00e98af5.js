(window.webpackJsonp=window.webpackJsonp||[]).push([[15,7,30,40,46],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),m=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=m(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,g=u["".concat(o,".").concat(d)]||u[d]||p[d]||l;return a?r.a.createElement(g,c(c({ref:t},i),{},{components:a})):r.a.createElement(g,c({ref:t},i))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},138:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(3),r=a(0),l=a.n(r),o=a(23),c=a(22),s=a(133),i=a(139),m=a(129),u=a(132),p=a(140),d=a.n(p);function g(e){const{siteConfig:t,i18n:{currentLocale:a}}=Object(c.default)(),{favicon:r,baseUrl:p,themeConfig:{image:g,metadatas:y},url:h}=t,{title:f,description:b,image:v,keywords:E,permalink:k,searchMetadatas:j}=e,O=d()(p,"blog"),N=Object(u.useLocation)().pathname.startsWith(O.toString())?(e=>{const{siteConfig:t={}}=Object(c.default)(),{customFields:a={},titleDelimiter:n="|"}=t,{blogTitle:r}=a;return e&&e.trim().length?`${e.trim()} ${n} ${r}`:r})(f):Object(m.useTitleFormatter)(f),w=v||g,T=Object(s.a)(w,{absolute:!0}),x=Object(s.a)(r),$=a.split("-")[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement("html",{lang:$}),N&&l.a.createElement("title",null,N),N&&l.a.createElement("meta",{property:"og:title",content:N}),r&&l.a.createElement("link",{rel:"shortcut icon",href:x}),b&&l.a.createElement("meta",{name:"description",content:b}),b&&l.a.createElement("meta",{property:"og:description",content:b}),E&&E.length&&l.a.createElement("meta",{name:"keywords",content:E.join(",")}),w&&l.a.createElement("meta",{property:"og:image",content:T}),w&&l.a.createElement("meta",{name:"twitter:image",content:T}),w&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${N}`}),k&&l.a.createElement("meta",{property:"og:url",content:h+k}),k&&l.a.createElement("link",{rel:"canonical",href:h+k}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),l.a.createElement(i.a,Object(n.a)({tag:m.DEFAULT_SEARCH_TAG,locale:a},j)),l.a.createElement(o.a,null,y.map(((e,t)=>l.a.createElement("meta",Object(n.a)({key:`metadata_${t}`},e))))))}},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),l=a(130),o=a(131),c=a(55),s=a.n(c);function i({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(l.a)(s.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:s.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:s.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},r.a.createElement(o.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))))))}},142:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(c){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},143:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},144:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),o=a(131),c=a(145),s=a(130),i=a(129),m=(a(57),a(58)),u=a.n(m);var p=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(i.useThemeConfig)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[u.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):l.a.createElement(e,a)},d=a(59),g=a.n(d);const y={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?l.a.createElement(c.a,e):l.a.createElement("code",e):t},a:e=>l.a.createElement(o.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:g.a.mdxCodeBlock},e)),h1:p("h1"),h2:p("h2"),h3:p("h3"),h4:p("h4"),h5:p("h5"),h6:p("h6")};t.a=y},145:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),o=a(130),c=a(147),s=a(142),i=a.n(s),m=a(143),u=a.n(m),p=a(146),d=a(56),g=a.n(d),y=a(129);class h extends Error{constructor(e){super(`status=${e.status} kind=${e.kind} text=${e.text}`),this.response=e}}var f=({schema:e,size:t,seed:a})=>{let[n,o]=Object(r.useState)({step:"querying"}),[c,s]=Object(r.useState)(null);return Object(r.useEffect)((()=>{if(c!=a&&(s(a),o({step:"querying"})),"querying"==n.step){(async function(e,t=null,a="https://dev.getsynth.com"){return fetch(`${a}/playground${null===t?"":`?size=${t}`}`,{method:"PUT",body:e,headers:{"Content-Type":"application/json"}}).then((e=>{if(200!=e.status){if("application/json"==e.headers.get("Content-Type"))return e.json().then((t=>{throw new h({status:e.status,kind:t.kind,text:t.text})}));throw new h({status:e.status})}return e.json()}))})(e,t,"https://dev.getsynth.com").then((e=>{o({step:"ok",generated:e})})).catch((e=>{o({step:"failed",response:e.response})}))}})),l.a.createElement(k,{className:"language-json",metastring:"",isResult:!0},("querying"==n.step?"Generating...":"ok"==n.step&&JSON.stringify(n.generated,null,2))||"failed"==n.step&&`Error with ${n.response.kind}: ${n.response.text}`)};const b=/{([\d,-]+)}/,v=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},E=/(?:title=")(.*)(?:")/;var k=t.a=({children:e,className:t,metastring:a,isResult:s=!1})=>{const{prism:m}=Object(y.useThemeConfig)(),[d,h]=Object(r.useState)(!1),[k,j]=Object(r.useState)(!1),[O,N]=Object(r.useState)(0);Object(r.useEffect)((()=>{j(!0)}),[]);const w=Object(r.useRef)(null),T=Object(r.useRef)(null);let x=[],$="";const P=Object(p.a)(),C={...P,plain:{...P.plain,backgroundColor:null}},S=s?C:P,_=Array.isArray(e)?e.join(""):e;if(a&&b.test(a)){const e=a.match(b)[1];x=u()(e).filter((e=>e>0))}a&&E.test(a)&&($=a.match(E)[1]);let B=t&&t.replace(/language-/,"");!B&&m.defaultLanguage&&(B=m.defaultLanguage);let D=_.replace(/\n$/,"");if(0===x.length&&void 0!==B){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"]);case"jsx":case"tsx":return v(["js","jsBlock","jsx"]);case"html":return v(["js","jsBlock","html"]);case"python":case"py":return v(["python"]);default:return v()}})(B),a=_.replace(/\n$/,"").split("\n");let n;for(let r=0;r<a.length;){const l=r+1,o=a[r].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":n=l;break;case"highlight-end":e+=`${n}-${l-1},`}a.splice(r,1)}else r+=1}x=u()(e),D=a.join("\n")}let L=D.replace(/\/\/.*/g,"");const R=()=>{i()(D),h(!0),setTimeout((()=>h(!1)),2e3)},I=()=>{N(O+1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,Object(n.a)({},c.b,{key:String(k),theme:S,code:D,language:B}),(({className:e,style:t,tokens:r,getLineProps:c,getTokenProps:i})=>l.a.createElement(l.a.Fragment,null,$&&l.a.createElement("div",{style:t,className:g.a.codeBlockTitle},$),l.a.createElement("div",{className:`${g.a.codeBlockContent} ${s?g.a.resultBlockContent:""}`},l.a.createElement("div",{tabIndex:0,className:Object(o.a)(e,g.a.codeBlock,"thin-scrollbar",{[g.a.codeBlockWithTitle]:$||s},{[g.a.codeBlockWithResult]:O})},l.a.createElement("div",{className:g.a.codeBlockLines,style:t},r.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=c({line:e,key:t});return x.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(n.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(n.a)({key:t},i({token:e,key:t}))))))})))),l.a.createElement("div",{className:Object(o.a)(g.a.buttonsBlock)},!s&&l.a.createElement("button",{ref:w,type:"button","aria-label":"Copy code to clipboard",className:`${Object(o.a)(g.a.codeButton)} ${Object(o.a)(g.a.copyButton)}`,onClick:R},d?"Copied":"Copy"),!s&&"synth"==a&&l.a.createElement("button",{ref:T,type:"button","aria-label":"Run code with Synth",className:`${Object(o.a)(g.a.codeButton)} ${Object(o.a)(g.a.runButton)}`,onClick:I},O?"Resample":"Run"),s&&l.a.createElement("span",{className:Object(o.a)(g.a.codeButton)},"Output")))))),0!=O&&l.a.createElement(f,{seed:O,schema:L}))}},146:function(e,t,a){"use strict";var n={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},r=a(148),l=a(129);t.a=()=>{const{prism:e}=Object(l.useThemeConfig)(),{isDarkTheme:t}=Object(r.a)(),a=e.theme||n,o=e.darkTheme||a;return t?o:a}},147:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(24),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l=a(0),o={Prism:n.a,theme:r};function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},p=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=s({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=s({},a,{backgroundColor:null}),r};function d(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var g=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?p(e.theme,e.language):void 0;return t.themeDict=a})),c(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=s({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?s({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),c(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},c=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),c(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=s({},d(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?s({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),c(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,c=[],s=[c];o>-1;){for(;(l=n[o]++)<r[o];){var p=void 0,d=t[o],g=a[o][l];if("string"==typeof g?(d=o>0?d:["plain"],p=g):(d=u(d,g.type),g.alias&&(d=u(d,g.alias)),p=g.content),"string"==typeof p){var y=p.split(i),h=y.length;c.push({types:d,content:y[0]});for(var f=1;f<h;f++)m(c),s.push(c=[]),c.push({types:d,content:y[f]})}else o++,t.push(d),a.push(p),n.push(0),r.push(p.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return m(c),s}(void 0!==o?this.tokenize(t,n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component);t.a=g},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(130),o=a(128),c=a(23),s=a(131),i=a(144),m=a(133),u=a(60),p=a.n(u);const d=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){const{children:t,frontMatter:a,metadata:n,truncated:u,isBlogPostPage:g=!1}=e,{date:y,permalink:h,tags:f,readingTime:b}=n,{author:v,title:E,image:k,keywords:j}=a,O=a.author_url||a.authorURL,N=a.author_title||a.authorTitle,w=a.author_image_url||a.authorImageURL,T=Object(m.a)(k,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,j&&j.length&&r.a.createElement("meta",{name:"keywords",content:j.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:T}),k&&r.a.createElement("meta",{name:"twitter:image",content:T}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`})),r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2",t=y.substring(0,10).split("-"),a=t[0],n=d[parseInt(t[1],10)-1],o=parseInt(t[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",p.a.blogPostTitle)},g?E:r.a.createElement(s.a,{to:h},E)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:y,className:p.a.blogPostDate},n," ",o,", ",a," ",b&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(b)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},w&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:O,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:w,alt:v})),r.a.createElement("div",{className:"avatar__intro"},v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},v)),r.a.createElement("small",{className:"avatar__subtitle"},N)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(o.a,{components:i.a},t)),(f.length>0||u)&&r.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),f.map((({label:e,permalink:t})=>r.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},e)))),u&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:n.permalink,"aria-label":`Read more about ${E}`},r.a.createElement("strong",null,"Read More"))))))}},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(136),o=a(153),c=a(131),s=a(141);t.default=function(e){const{metadata:t,items:a,sidebar:n}=e,{allTagsPath:i,name:m,count:u}=t;return r.a.createElement(l.a,{title:`Posts tagged "${m}"`,description:`Blog | Tagged "${m}"`,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,u," ",function(e,t){return e>1?`${t}s`:t}(u,"post"),' tagged with "',m,'"'),r.a.createElement(c.a,{href:i},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},a.map((({content:e})=>r.a.createElement(o.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null)))))))))}}}]);