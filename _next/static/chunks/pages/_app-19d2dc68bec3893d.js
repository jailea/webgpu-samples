(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var a,r;e.exports=(null==(a=n.g.process)?void 0:a.env)&&"object"==typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6505)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,a){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(2648).Z,r=n(7273).Z,l=a(n(7294)),o=n(1003),i=n(4465),s=n(2692),u=n(8245),d=n(9246),c=n(227),f=n(3468);let p={};function h(e,t,n,a){if(!e||!o.isLocalURL(t))return;Promise.resolve(e.prefetch(t,n,a)).catch(e=>{});let r=a&&void 0!==a.locale?a.locale:e&&e.locale;p[t+"%"+n+(r?"%"+r:"")]=!0}let b=l.default.forwardRef(function(e,t){let n,a;let{href:b,as:m,children:_,prefetch:y,passHref:v,replace:g,shallow:x,scroll:w,locale:k,onClick:P,onMouseEnter:j,onTouchStart:C,legacyBehavior:L=!0!==Boolean(!0)}=e,T=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,L&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let G=!1!==y,M=l.default.useContext(s.RouterContext),O=l.default.useContext(u.AppRouterContext);O&&(M=O);let{href:E,as:R}=l.default.useMemo(()=>{let[e,t]=o.resolveHref(M,b,!0);return{href:e,as:m?o.resolveHref(M,m):t||e}},[M,b,m]),S=l.default.useRef(E),A=l.default.useRef(R);L&&(a=l.default.Children.only(n));let N=L?a&&"object"==typeof a&&a.ref:t,[D,I,U]=d.useIntersection({rootMargin:"200px"}),B=l.default.useCallback(e=>{(A.current!==R||S.current!==E)&&(U(),A.current=R,S.current=E),D(e),N&&("function"==typeof N?N(e):"object"==typeof N&&(N.current=e))},[R,N,E,U,D]);l.default.useEffect(()=>{let e=I&&G&&o.isLocalURL(E),t=void 0!==k?k:M&&M.locale,n=p[E+"%"+R+(t?"%"+t:"")];e&&!n&&h(M,E,R,{locale:t})},[R,E,I,k,G,M]);let W={ref:B,onClick(e){L||"function"!=typeof P||P(e),L&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,i,s,u,d,c){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!o.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,a,{shallow:i,locale:u,scroll:s}):t[r?"replace":"push"](a||n,{forceOptimisticNavigation:!c})};d?l.default.startTransition(h):h()}(e,M,E,R,g,x,w,k,Boolean(O),G)},onMouseEnter(e){L||"function"!=typeof j||j(e),L&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),!(!G&&O)&&o.isLocalURL(E)&&h(M,E,R,{priority:!0})},onTouchStart(e){L||"function"!=typeof C||C(e),L&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),!(!G&&O)&&o.isLocalURL(E)&&h(M,E,R,{priority:!0})}};if(!L||v||"a"===a.type&&!("href"in a.props)){let Z=void 0!==k?k:M&&M.locale,z=M&&M.isLocaleDomain&&c.getDomainLocale(R,Z,M.locales,M.domainLocales);W.href=z||f.addBasePath(i.addLocale(R,Z,M&&M.defaultLocale))}return L?l.default.cloneElement(a,W):l.default.createElement("a",Object.assign({},T,W),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,u=s||!l,[d,c]=a.useState(!1),[f,p]=a.useState(null);a.useEffect(()=>{if(l){if(!u&&!d&&f&&f.tagName){let e=function(e,t,n){let{id:a,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},a=i.find(e=>e.root===n.root&&e.margin===n.margin);if(a&&(t=o.get(a)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},i.push(n),o.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),o.delete(a);let t=i.findIndex(e=>e.root===a.root&&e.margin===a.margin);t>-1&&i.splice(t,1)}}}(f,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){let a=r.requestIdleCallback(()=>c(!0));return()=>r.cancelIdleCallback(a)}},[f,u,n,t,d]);let h=a.useCallback(()=>{c(!1)},[]);return[p,d,h]};var a=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,o=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var a=(0,n(2648).Z)(n(7294));let r=a.default.createContext(null);t.AppRouterContext=r;let l=a.default.createContext(null);t.LayoutRouterContext=l;let o=a.default.createContext(null);t.GlobalLayoutRouterContext=o;let i=a.default.createContext(null);t.TemplateContext=i},7645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=l.default,r=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:n,pastDelay:a}=e;return null}};if(e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=a({},r,e)),(r=a({},r,t)).suspense&&(delete r.ssr,delete r.loading),r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated,"boolean"==typeof r.ssr&&!r.suspense){if(!r.ssr)return delete r.ssr,o(n,r);delete r.ssr}return n(r)},t.noSSR=o;var a=n(6495).Z,r=n(2648).Z,l=(r(n(7294)),r(n(4588)));function o(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=(0,n(2648).Z)(n(7294));let r=a.default.createContext(null);t.LoadableContext=r},4588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,r=(0,n(2648).Z)(n(7294)),l=n(3644);let{useSyncExternalStore:o}=n(7294),i=[],s=[],u=!1;function d(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function f(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=r.default.lazy(n.loader));let i=null;function d(){if(!i){let t=new c(e,n);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!u){let f=n.webpack?n.webpack():n.modules;f&&s.push(e=>{for(let t of f)if(-1!==e.indexOf(t))return d()})}function p(){d();let e=r.default.useContext(l.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}let h=n.suspense?function(e,t){return p(),r.default.createElement(n.lazy,a({},e,{ref:t}))}:function(e,t){p();let a=o(i.subscribe,i.getCurrentValue,i.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),r.default.useMemo(()=>{var t;return a.loading||a.error?r.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:i.retry}):a.loaded?r.default.createElement((t=a.loaded)&&t.__esModule?t.default:t,e):null},[e,a])};return h.preload=()=>d(),h.displayName="LoadableComponent",r.default.forwardRef(h)}(d,e)}function p(e,t){let n=[];for(;e.length;){let a=e.pop();n.push(a(t))}return Promise.all(n).then(()=>{if(e.length)return p(e,t)})}f.preloadAll=()=>new Promise((e,t)=>{p(i).then(e,t)}),f.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(u=!0,t());p(s,e).then(n,n)})},window.__NEXT_PRELOADREADY=f.preloadReady,t.default=f},6505:function(e,t,n){"use strict";n.r(t);var a=n(5893),r=n(9008),l=n.n(r),o=n(1664),i=n.n(o),s=n(1163),u=n(7294);n(4112);var d=n(6988),c=n.n(d),f=n(1958),p=n(3454);let h="WebGPU Samples",b=e=>{let{Component:t,pageProps:n}=e,r=(0,s.useRouter)(),o=Object.keys(f.pages),[d,b]=(0,u.useState)(!1),m=r.asPath.match(/(\?wgsl=[01])#(\S+)/);if(m){let _=m[2];return r.replace("/samples/".concat(_)),(0,a.jsx)(a.Fragment,{})}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:h}),(0,a.jsx)("meta",{name:"description",content:"The WebGPU Samples are a set of samples demonstrating the use of the WebGPU API."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})]}),(0,a.jsxs)("div",{className:c().wrapper,children:[(0,a.jsxs)("nav",{className:"".concat(c().panel," ").concat(c().container),"data-expanded":d,children:[(0,a.jsxs)("h1",{children:[(0,a.jsx)(i(),{href:"/",children:h}),(0,a.jsx)("div",{className:c().expand,onClick(){b(!d)}})]}),(0,a.jsxs)("div",{className:c().panelContents,children:[(0,a.jsx)("a",{href:"https://github.com/".concat("Cryszzz/webgpu-samples"),children:"Github"}),(0,a.jsx)("hr",{}),(0,a.jsx)("ul",{className:c().exampleList,children:o.map(e=>{let t="/samples/[slug]"===r.pathname&&r.query.slug===e?c().selected:void 0;return(0,a.jsx)("li",{className:t,onMouseOver(){f.pages[e].render.preload()},children:(0,a.jsx)(i(),{href:"/samples/".concat(e),onClick(){b(!1)},children:e})},e)})}),(0,a.jsx)("hr",{}),(0,a.jsx)("h3",{children:"Other Pages"}),(0,a.jsx)("ul",{className:c().exampleList,children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"".concat(p.env.BASE_PATH||"","/workload-simulator.html"),children:"Workload Simulator ↗️"})})})]})]}),(0,a.jsx)(t,{...n})]})]})};t.default=b},1958:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return o},pages:function(){return i}});var a=n(5893),r=n(5152),l=n.n(r),o=!0;let i={helloTriangle:l()(()=>Promise.all([n.e(126),n.e(82),n.e(607)]).then(n.bind(n,6607)),{loadableGenerated:{webpack:()=>[6607]}}),helloTriangleMSAA:l()(()=>Promise.all([n.e(126),n.e(82),n.e(198)]).then(n.bind(n,1198)),{loadableGenerated:{webpack:()=>[1198]}}),resizeCanvas:l()(()=>Promise.all([n.e(126),n.e(82),n.e(565)]).then(n.bind(n,8565)),{loadableGenerated:{webpack:()=>[8565]}}),rotatingCube:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(15)]).then(n.bind(n,9015)),{loadableGenerated:{webpack:()=>[9015]}}),twoCubes:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(710)]).then(n.bind(n,5710)),{loadableGenerated:{webpack:()=>[5710]}}),texturedCube:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(613)]).then(n.bind(n,613)),{loadableGenerated:{webpack:()=>[613]}}),instancedCube:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(621)]).then(n.bind(n,8621)),{loadableGenerated:{webpack:()=>[8621]}}),fractalCube:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(103)]).then(n.bind(n,5103)),{loadableGenerated:{webpack:()=>[5103]}}),cameras:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(878)]).then(n.bind(n,3878)),{loadableGenerated:{webpack:()=>[3878]}}),cubemap:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(432)]).then(n.bind(n,1432)),{loadableGenerated:{webpack:()=>[1432]}}),computeBoids:l()(()=>Promise.all([n.e(126),n.e(82),n.e(752)]).then(n.bind(n,2752)),{loadableGenerated:{webpack:()=>[2752]}}),animometer:l()(()=>Promise.all([n.e(126),n.e(82),n.e(841)]).then(n.bind(n,841)),{loadableGenerated:{webpack:()=>[841]}}),videoUploading:l()(()=>Promise.all([n.e(126),n.e(82),n.e(677)]).then(n.bind(n,6677)),{loadableGenerated:{webpack:()=>[6677]}}),videoUploadingWebCodecs:l()(()=>Promise.all([n.e(126),n.e(82),n.e(31)]).then(n.bind(n,7031)),{loadableGenerated:{webpack:()=>[7031]}}),samplerParameters:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(624)]).then(n.bind(n,8624)),{loadableGenerated:{webpack:()=>[8624]}}),imageBlur:l()(()=>Promise.all([n.e(126),n.e(82),n.e(770)]).then(n.bind(n,1770)),{loadableGenerated:{webpack:()=>[1770]}}),shadowMapping:l()(()=>Promise.all([n.e(126),n.e(746),n.e(667),n.e(82),n.e(342)]).then(n.bind(n,2342)),{loadableGenerated:{webpack:()=>[2342]}}),reversedZ:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(588)]).then(n.bind(n,7502)),{loadableGenerated:{webpack:()=>[7502]}}),deferredRendering:l()(()=>Promise.all([n.e(126),n.e(746),n.e(667),n.e(82),n.e(704)]).then(n.bind(n,9704)),{loadableGenerated:{webpack:()=>[9704]}}),particles:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(167)]).then(n.bind(n,6167)),{loadableGenerated:{webpack:()=>[6167]}}),cornell:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(874)]).then(n.bind(n,6874)),{loadableGenerated:{webpack:()=>[6874]}}),gameOfLife:l()(()=>Promise.all([n.e(126),n.e(82),n.e(391)]).then(n.bind(n,7391)),{loadableGenerated:{webpack:()=>[7391]}}),renderBundles:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(428)]).then(n.bind(n,3428)),{loadableGenerated:{webpack:()=>[3428]}}),worker:l()(()=>Promise.all([n.e(126),n.e(82),n.e(78)]).then(n.bind(n,6078)),{loadableGenerated:{webpack:()=>[6078]}}),"A-buffer":l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(73)]).then(n.bind(n,3073)),{loadableGenerated:{webpack:()=>[3073]}}),bitonicSort:l()(()=>Promise.all([n.e(126),n.e(82),n.e(880)]).then(n.bind(n,9880)),{loadableGenerated:{webpack:()=>[9880]}}),normalMap:l()(()=>Promise.all([n.e(126),n.e(746),n.e(82),n.e(118)]).then(n.bind(n,7118)),{loadableGenerated:{webpack:()=>[7118]}})};t.default=function(e){let{slug:t}=e,n=i[t];return(0,a.jsx)(n,{})}},6988:function(e){e.exports={container:"MainLayout_container__l_Vkn",wrapper:"MainLayout_wrapper__eI_HE",panel:"MainLayout_panel__GdjKj",exampleList:"MainLayout_exampleList__FHCmd",selected:"MainLayout_selected__Yjoh0",expand:"MainLayout_expand__FEWWW",exampleLink:"MainLayout_exampleLink__qX1DA",panelContents:"MainLayout_panelContents__w1BWs"}},4112:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,a,r=e.exports={};function l(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===l||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(a){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:l}catch(e){t=l}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(a){n=o}}();var s=[],u=!1,d=-1;function c(){u&&a&&(u=!1,a.length?s=a.concat(s):d=-1,s.length&&f())}function f(){if(!u){var e=i(c);u=!0;for(var t=s.length;t;){for(a=s,s=[];++d<t;)a&&a[d].run();d=-1,t=s.length}a=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(a){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||u||i(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}},o=!0;try{t[e](l,l.exports,a),o=!1}finally{o&&delete n[e]}return l.exports}a.ab="node_modules/next/dist/compiled/process/";var r=a(229);e.exports=r}()},5152:function(e,t,n){e.exports=n(7645)},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);