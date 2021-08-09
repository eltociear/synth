(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return g})),n.d(t,"toc",(function(){return y})),n.d(t,"default",(function(){return j}));var a=n(3),o=n(7),r=n(0),i=n.n(r),c=n(128),l=n(155),s=n(130),b=n(119),p=n.n(b);const d=37,m=39;var u=function(e){const{lazy:t,block:n,defaultValue:a,values:o,groupId:c,className:b}=e,{tabGroupChoices:u,setTabGroupChoices:h}=Object(l.a)(),[v,O]=Object(r.useState)(a),g=r.Children.toArray(e.children);if(null!=c){const e=u[c];null!=e&&e!==v&&o.some((t=>t.value===e))&&O(e)}const y=e=>{O(e),null!=c&&h(c,e)},f=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},b)},o.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(s.a)("tabs__item",p.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case m:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case d:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},t)))),t?Object(r.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))};var h=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)},v=["components"],O={title:"Installation"},g={unversionedId:"getting_started/installation",id:"getting_started/installation",isDocsHomePage:!1,title:"Installation",description:'<Tabs defaultValue="linux"',source:"@site/docs/getting_started/installation.md",slug:"/getting_started/installation",permalink:"/synth/getting_started/installation",editUrl:"https://github.com/getsynth/synth/edit/master/docs/docs/getting_started/installation.md",version:"current",sidebar:"docsSidebar",previous:{title:"What is Synth?",permalink:"/synth/getting_started/synth"},next:{title:"Hello world",permalink:"/synth/getting_started/hello-world"}},y=[],f={toc:y};function j(e){var t=e.components,n=Object(o.a)(e,v);return Object(c.b)("wrapper",Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(u,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"},{label:"Nix",value:"nix"},{label:"Compile from source",value:"cargo"}],mdxType:"Tabs"},Object(c.b)(h,{value:"linux",mdxType:"TabItem"},Object(c.b)("p",null,"Run the following command to install the ",Object(c.b)("inlineCode",{parentName:"p"},"synth")," binary:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSL https://sh.getsynth.com | sh\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"To skip the telemetry prompt (if you are installing Synth in CI for example) you can use the ",Object(c.b)("inlineCode",{parentName:"p"},"--ci")," flag.")))),Object(c.b)(h,{value:"windows",mdxType:"TabItem"},Object(c.b)("p",null,"To install on Windows, ",Object(c.b)("a",{parentName:"p",href:"https://github.com/getsynth/synth/releases/latest/download/synth-windows-latest-x86_64.exe"},"download")," the ",Object(c.b)("inlineCode",{parentName:"p"},"synth")," executable and run it from your ",Object(c.b)("inlineCode",{parentName:"p"},"cmd")," or ",Object(c.b)("inlineCode",{parentName:"p"},"Git BASH")," or ",Object(c.b)("inlineCode",{parentName:"p"},"Windows PowerShell"),"."),Object(c.b)("p",null,"Then copy the downloaded executable to a suitable folder (e.g. ",Object(c.b)("inlineCode",{parentName:"p"},"C:\\synth\\synth.exe"),")."),Object(c.b)("p",null,"Finally ",Object(c.b)("a",{parentName:"p",href:"https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/"},"add ",Object(c.b)("inlineCode",{parentName:"a"},"synth")," to your PATH")," via your environment variables."),Object(c.b)("p",null,"You should now be able to use ",Object(c.b)("inlineCode",{parentName:"p"},"synth"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"PS C:\\Users\\user\\workspace> synth --version\n"))),Object(c.b)(h,{value:"nix",mdxType:"TabItem"},Object(c.b)("p",null,"If you happen to be running the ",Object(c.b)("a",{parentName:"p",href:"https://nixos.org/download.html#nix-quick-install"},"Nix")," package manager or if you're on ",Object(c.b)("a",{parentName:"p",href:"https://nixos.org/"},"NixOS"),", you can use our automated Nix packaging that will set everything up for you."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"We recommend you add ",Object(c.b)("a",{parentName:"p",href:"https://app.cachix.org/cache/getsynth"},"getsynth.cachix.org")," to your list of binary caches. This will speed up your installation considerably by downloading ",Object(c.b)("a",{parentName:"p",href:"https://github.com/getsynth/synth/actions/workflows/cachix.yml"},"GitHub Actions build artifacts")," instead of compiling everything locally."))),Object(c.b)("p",null,"To install the latest released version of ",Object(c.b)("inlineCode",{parentName:"p"},"synth")," with ",Object(c.b)("inlineCode",{parentName:"p"},"nix >= 2.4"),", run:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"nix-env -i -f https://github.com/getsynth/synth/releases/latest/download/install-nix\n")),Object(c.b)("p",null,"For versions of ",Object(c.b)("inlineCode",{parentName:"p"},"nix < 2.4"),", run:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"SYNTH_TMP=$(mktemp); \\\n    curl -L --output - https://github.com/getsynth/synth/releases/latest/download/install-nix |\\\n    tar -xO > $SYNTH_TMP; \\\n    nix-env -i -f $SYNTH_TMP\n"))),Object(c.b)(h,{value:"cargo",mdxType:"TabItem"},Object(c.b)("p",null,"To get started, make sure you have a recent version of the ",Object(c.b)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust nightly toolchain"),". Then run:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cargo +nightly install --locked --git https://github.com/getsynth/synth.git synth\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"If compilation fails, it may be because some required dependencies are not installed. On Ubuntu, you can try:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",{parentName:"pre"},"sudo apt-get install libssl-dev libsqlite3-dev\n"))))),Object(c.b)(h,{value:"mac",mdxType:"TabItem"},Object(c.b)("p",null,"Run the following command to install the ",Object(c.b)("inlineCode",{parentName:"p"},"synth")," binary:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSL https://sh.getsynth.com | sh\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"To skip the telemetry prompt (if you are installing Synth in CI for example) you can use the ",Object(c.b)("inlineCode",{parentName:"p"},"--ci")," flag."))))))}j.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?o.a.createElement(u,c(c({ref:t},s),{},{components:n})):o.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},130:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},155:function(e,t,n){"use strict";var a=n(0),o=n(156);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},156:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o}}]);