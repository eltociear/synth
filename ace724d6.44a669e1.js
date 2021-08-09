(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(128)),i=["components"],c={title:"unique"},u={unversionedId:"content/unique",id:"content/unique",isDocsHomePage:!1,title:"unique",description:"Synth's unique generator type generates values which are guaranteed to be unique from its child generator.",source:"@site/docs/content/unique.md",slug:"/content/unique",permalink:"/synth/content/unique",editUrl:"https://github.com/getsynth/synth/edit/master/docs/docs/content/unique.md",version:"current",sidebar:"docsSidebar",previous:{title:"same_as",permalink:"/synth/content/same-as"},next:{title:"series",permalink:"/synth/content/series"}},s=[],p={toc:s};function l(e){var n=e.components,t=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Synth's ",Object(o.b)("inlineCode",{parentName:"p"},"unique")," generator type generates values which are guaranteed to be unique from its child generator."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "constant": 10\n    },\n    "content": {\n        "type": "object",\n        "ticker": {\n            "type": "unique",\n            "content": {\n                "type": "number",\n                "range": {\n                    "low": 0,\n                    "high": 10,\n                    "step": 1\n                }\n            }\n        }\n    }\n}\n')),Object(o.b)("p",null,"The unique generator works by trying the inner generator repeatedly until it receives a value which it hasn't seen yet."),Object(o.b)("p",null,"By default, the unique generator will give up if it sees the same value more than 64 times but this value can be specified using the ",Object(o.b)("inlineCode",{parentName:"p"},"retries")," property."),Object(o.b)("p",null,"Below is an example of a generator which will fail since the inner generator cannot generate 20 distinct values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "constant": 20\n    },\n    "content": {\n        "type": "object",\n        "ticker": {\n            "type": "unique",\n            "content": {\n                "type": "number",\n                "range": {\n                    "low": 0,\n                    "high": 10,\n                    "step": 1\n                }\n            }\n        }\n    }\n}\n')))}l.isMDXComponent=!0},128:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},y=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),y=r,m=l["".concat(i,".").concat(y)]||l[y]||b[y]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);