var IF=Object.defineProperty;var LF=(e,t,n)=>t in e?IF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var te=(e,t,n)=>(LF(e,typeof t!="symbol"?t+"":t,n),n);function RF(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gs={},BF={get exports(){return Gs},set exports(e){Gs=e}},Rd={},C={},zF={get exports(){return C},set exports(e){C=e}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ol=Symbol.for("react.element"),NF=Symbol.for("react.portal"),VF=Symbol.for("react.fragment"),jF=Symbol.for("react.strict_mode"),HF=Symbol.for("react.profiler"),UF=Symbol.for("react.provider"),WF=Symbol.for("react.context"),qF=Symbol.for("react.forward_ref"),ZF=Symbol.for("react.suspense"),JF=Symbol.for("react.memo"),YF=Symbol.for("react.lazy"),q1=Symbol.iterator;function GF(e){return e===null||typeof e!="object"?null:(e=q1&&e[q1]||e["@@iterator"],typeof e=="function"?e:null)}var Mw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iw=Object.assign,Lw={};function Fa(e,t,n){this.props=e,this.context=t,this.refs=Lw,this.updater=n||Mw}Fa.prototype.isReactComponent={};Fa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rw(){}Rw.prototype=Fa.prototype;function Lg(e,t,n){this.props=e,this.context=t,this.refs=Lw,this.updater=n||Mw}var Rg=Lg.prototype=new Rw;Rg.constructor=Lg;Iw(Rg,Fa.prototype);Rg.isPureReactComponent=!0;var Z1=Array.isArray,Bw=Object.prototype.hasOwnProperty,Bg={current:null},zw={key:!0,ref:!0,__self:!0,__source:!0};function Nw(e,t,n){var i,r={},o=null,a=null;if(t!=null)for(i in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Bw.call(t,i)&&!zw.hasOwnProperty(i)&&(r[i]=t[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:Ol,type:e,key:o,ref:a,props:r,_owner:Bg.current}}function KF(e,t){return{$$typeof:Ol,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zg(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ol}function XF(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var J1=/\/+/g;function mp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?XF(""+e.key):t.toString(36)}function eu(e,t,n,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ol:case NF:a=!0}}if(a)return a=e,r=r(a),e=i===""?"."+mp(a,0):i,Z1(r)?(n="",e!=null&&(n=e.replace(J1,"$&/")+"/"),eu(r,t,n,"",function(c){return c})):r!=null&&(zg(r)&&(r=KF(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(J1,"$&/")+"/")+e)),t.push(r)),1;if(a=0,i=i===""?".":i+":",Z1(e))for(var s=0;s<e.length;s++){o=e[s];var l=i+mp(o,s);a+=eu(o,t,n,l,r)}else if(l=GF(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=i+mp(o,s++),a+=eu(o,t,n,l,r);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function nc(e,t,n){if(e==null)return e;var i=[],r=0;return eu(e,i,"","",function(o){return t.call(n,o,r++)}),i}function QF(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ut={current:null},tu={transition:null},ek={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:tu,ReactCurrentOwner:Bg};Ce.Children={map:nc,forEach:function(e,t,n){nc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nc(e,function(){t++}),t},toArray:function(e){return nc(e,function(t){return t})||[]},only:function(e){if(!zg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ce.Component=Fa;Ce.Fragment=VF;Ce.Profiler=HF;Ce.PureComponent=Lg;Ce.StrictMode=jF;Ce.Suspense=ZF;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ek;Ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Iw({},e.props),r=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Bg.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Bw.call(t,l)&&!zw.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:Ol,type:e.type,key:r,ref:o,props:i,_owner:a}};Ce.createContext=function(e){return e={$$typeof:WF,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:UF,_context:e},e.Consumer=e};Ce.createElement=Nw;Ce.createFactory=function(e){var t=Nw.bind(null,e);return t.type=e,t};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(e){return{$$typeof:qF,render:e}};Ce.isValidElement=zg;Ce.lazy=function(e){return{$$typeof:YF,_payload:{_status:-1,_result:e},_init:QF}};Ce.memo=function(e,t){return{$$typeof:JF,type:e,compare:t===void 0?null:t}};Ce.startTransition=function(e){var t=tu.transition;tu.transition={};try{e()}finally{tu.transition=t}};Ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ce.useCallback=function(e,t){return Ut.current.useCallback(e,t)};Ce.useContext=function(e){return Ut.current.useContext(e)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(e){return Ut.current.useDeferredValue(e)};Ce.useEffect=function(e,t){return Ut.current.useEffect(e,t)};Ce.useId=function(){return Ut.current.useId()};Ce.useImperativeHandle=function(e,t,n){return Ut.current.useImperativeHandle(e,t,n)};Ce.useInsertionEffect=function(e,t){return Ut.current.useInsertionEffect(e,t)};Ce.useLayoutEffect=function(e,t){return Ut.current.useLayoutEffect(e,t)};Ce.useMemo=function(e,t){return Ut.current.useMemo(e,t)};Ce.useReducer=function(e,t,n){return Ut.current.useReducer(e,t,n)};Ce.useRef=function(e){return Ut.current.useRef(e)};Ce.useState=function(e){return Ut.current.useState(e)};Ce.useSyncExternalStore=function(e,t,n){return Ut.current.useSyncExternalStore(e,t,n)};Ce.useTransition=function(){return Ut.current.useTransition()};Ce.version="18.2.0";(function(e){e.exports=Ce})(zF);const A=Tw(C),Ks=RF({__proto__:null,default:A},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tk=C,nk=Symbol.for("react.element"),ik=Symbol.for("react.fragment"),rk=Object.prototype.hasOwnProperty,ok=tk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ak={key:!0,ref:!0,__self:!0,__source:!0};function Vw(e,t,n){var i,r={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(i in t)rk.call(t,i)&&!ak.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:nk,type:e,key:o,ref:a,props:r,_owner:ok.current}}Rd.Fragment=ik;Rd.jsx=Vw;Rd.jsxs=Vw;(function(e){e.exports=Rd})(BF);const ie=Gs.Fragment,d=Gs.jsx,w=Gs.jsxs;var Gh={},Xs={},sk={get exports(){return Xs},set exports(e){Xs=e}},gn={},Kh={},lk={get exports(){return Kh},set exports(e){Kh=e}},jw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,W){var X=N.length;N.push(W);e:for(;0<X;){var ue=X-1>>>1,U=N[ue];if(0<r(U,W))N[ue]=W,N[X]=U,X=ue;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var W=N[0],X=N.pop();if(X!==W){N[0]=X;e:for(var ue=0,U=N.length,Z=U>>>1;ue<Z;){var Q=2*(ue+1)-1,re=N[Q],M=Q+1,pe=N[M];if(0>r(re,X))M<U&&0>r(pe,re)?(N[ue]=pe,N[M]=X,ue=M):(N[ue]=re,N[Q]=X,ue=Q);else if(M<U&&0>r(pe,X))N[ue]=pe,N[M]=X,ue=M;else break e}}return W}function r(N,W){var X=N.sortIndex-W.sortIndex;return X!==0?X:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,f=null,p=3,m=!1,g=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(N){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=N)i(c),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(c)}}function S(N){if(x=!1,E(N),!g)if(n(l)!==null)g=!0,q(F);else{var W=n(c);W!==null&&G(S,W.startTime-N)}}function F(N,W){g=!1,x&&(x=!1,v(_),_=-1),m=!0;var X=p;try{for(E(W),f=n(l);f!==null&&(!(f.expirationTime>W)||N&&!R());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,p=f.priorityLevel;var U=ue(f.expirationTime<=W);W=e.unstable_now(),typeof U=="function"?f.callback=U:f===n(l)&&i(l),E(W)}else i(l);f=n(l)}if(f!==null)var Z=!0;else{var Q=n(c);Q!==null&&G(S,Q.startTime-W),Z=!1}return Z}finally{f=null,p=X,m=!1}}var P=!1,k=null,_=-1,D=5,T=-1;function R(){return!(e.unstable_now()-T<D)}function L(){if(k!==null){var N=e.unstable_now();T=N;var W=!0;try{W=k(!0,N)}finally{W?j():(P=!1,k=null)}}else P=!1}var j;if(typeof b=="function")j=function(){b(L)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,z=B.port2;B.port1.onmessage=L,j=function(){z.postMessage(null)}}else j=function(){y(L,0)};function q(N){k=N,P||(P=!0,j())}function G(N,W){_=y(function(){N(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,q(F))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var X=p;p=W;try{return N()}finally{p=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=p;p=N;try{return W()}finally{p=X}},e.unstable_scheduleCallback=function(N,W,X){var ue=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ue+X:ue):X=ue,N){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=X+U,N={id:u++,callback:W,priorityLevel:N,startTime:X,expirationTime:U,sortIndex:-1},X>ue?(N.sortIndex=X,t(c,N),n(l)===null&&N===n(c)&&(x?(v(_),_=-1):x=!0,G(S,X-ue))):(N.sortIndex=U,t(l,N),g||m||(g=!0,q(F))),N},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(N){var W=p;return function(){var X=p;p=W;try{return N.apply(this,arguments)}finally{p=X}}}})(jw);(function(e){e.exports=jw})(lk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hw=C,pn=Kh;function J(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uw=new Set,Qs={};function go(e,t){ua(e,t),ua(e+"Capture",t)}function ua(e,t){for(Qs[e]=t,e=0;e<t.length;e++)Uw.add(t[e])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xh=Object.prototype.hasOwnProperty,ck=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Y1={},G1={};function uk(e){return Xh.call(G1,e)?!0:Xh.call(Y1,e)?!1:ck.test(e)?G1[e]=!0:(Y1[e]=!0,!1)}function dk(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fk(e,t,n,i){if(t===null||typeof t>"u"||dk(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Wt(e,t,n,i,r,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$t[e]=new Wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$t[t]=new Wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$t[e]=new Wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$t[e]=new Wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$t[e]=new Wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$t[e]=new Wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$t[e]=new Wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$t[e]=new Wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$t[e]=new Wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ng=/[\-:]([a-z])/g;function Vg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ng,Vg);$t[t]=new Wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ng,Vg);$t[t]=new Wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ng,Vg);$t[t]=new Wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$t[e]=new Wt(e,1,!1,e.toLowerCase(),null,!1,!1)});$t.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$t[e]=new Wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function jg(e,t,n,i){var r=$t.hasOwnProperty(t)?$t[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fk(t,n,r,i)&&(n=null),i||r===null?uk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Mi=Hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ic=Symbol.for("react.element"),Bo=Symbol.for("react.portal"),zo=Symbol.for("react.fragment"),Hg=Symbol.for("react.strict_mode"),Qh=Symbol.for("react.profiler"),Ww=Symbol.for("react.provider"),qw=Symbol.for("react.context"),Ug=Symbol.for("react.forward_ref"),e0=Symbol.for("react.suspense"),t0=Symbol.for("react.suspense_list"),Wg=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),Zw=Symbol.for("react.offscreen"),K1=Symbol.iterator;function Va(e){return e===null||typeof e!="object"?null:(e=K1&&e[K1]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Object.assign,xp;function xs(e){if(xp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xp=t&&t[1]||""}return`
`+xp+e}var vp=!1;function bp(e,t){if(!e||vp)return"";vp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),a=r.length-1,s=o.length-1;1<=a&&0<=s&&r[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(r[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||r[a]!==o[s]){var l=`
`+r[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{vp=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xs(e):""}function pk(e){switch(e.tag){case 5:return xs(e.type);case 16:return xs("Lazy");case 13:return xs("Suspense");case 19:return xs("SuspenseList");case 0:case 2:case 15:return e=bp(e.type,!1),e;case 11:return e=bp(e.type.render,!1),e;case 1:return e=bp(e.type,!0),e;default:return""}}function n0(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zo:return"Fragment";case Bo:return"Portal";case Qh:return"Profiler";case Hg:return"StrictMode";case e0:return"Suspense";case t0:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qw:return(e.displayName||"Context")+".Consumer";case Ww:return(e._context.displayName||"Context")+".Provider";case Ug:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wg:return t=e.displayName||null,t!==null?t:n0(e.type)||"Memo";case Ui:t=e._payload,e=e._init;try{return n0(e(t))}catch{}}return null}function hk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return n0(t);case 8:return t===Hg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gk(e){var t=Jw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rc(e){e._valueTracker||(e._valueTracker=gk(e))}function Yw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Jw(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function $u(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function i0(e,t){var n=t.checked;return nt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function X1(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=gr(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gw(e,t){t=t.checked,t!=null&&jg(e,"checked",t,!1)}function r0(e,t){Gw(e,t);var n=gr(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?o0(e,t.type,n):t.hasOwnProperty("defaultValue")&&o0(e,t.type,gr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Q1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function o0(e,t,n){(t!=="number"||$u(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vs=Array.isArray;function Qo(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+gr(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function a0(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(J(91));return nt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ex(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(J(92));if(vs(n)){if(1<n.length)throw Error(J(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gr(n)}}function Kw(e,t){var n=gr(t.value),i=gr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function tx(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function s0(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oc,Qw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oc=oc||document.createElement("div"),oc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function el(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mk=["Webkit","ms","Moz","O"];Object.keys(Ds).forEach(function(e){mk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ds[t]=Ds[e]})});function eC(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ds.hasOwnProperty(e)&&Ds[e]?(""+t).trim():t+"px"}function tC(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=eC(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var xk=nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function l0(e,t){if(t){if(xk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(J(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(J(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(J(61))}if(t.style!=null&&typeof t.style!="object")throw Error(J(62))}}function c0(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u0=null;function qg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var d0=null,ea=null,ta=null;function nx(e){if(e=Il(e)){if(typeof d0!="function")throw Error(J(280));var t=e.stateNode;t&&(t=jd(t),d0(e.stateNode,e.type,t))}}function nC(e){ea?ta?ta.push(e):ta=[e]:ea=e}function iC(){if(ea){var e=ea,t=ta;if(ta=ea=null,nx(e),t)for(e=0;e<t.length;e++)nx(t[e])}}function rC(e,t){return e(t)}function oC(){}var yp=!1;function aC(e,t,n){if(yp)return e(t,n);yp=!0;try{return rC(e,t,n)}finally{yp=!1,(ea!==null||ta!==null)&&(oC(),iC())}}function tl(e,t){var n=e.stateNode;if(n===null)return null;var i=jd(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var f0=!1;if(Di)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){f0=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{f0=!1}function vk(e,t,n,i,r,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var $s=!1,Ou=null,Tu=!1,p0=null,bk={onError:function(e){$s=!0,Ou=e}};function yk(e,t,n,i,r,o,a,s,l){$s=!1,Ou=null,vk.apply(bk,arguments)}function wk(e,t,n,i,r,o,a,s,l){if(yk.apply(this,arguments),$s){if($s){var c=Ou;$s=!1,Ou=null}else throw Error(J(198));Tu||(Tu=!0,p0=c)}}function mo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sC(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ix(e){if(mo(e)!==e)throw Error(J(188))}function Ck(e){var t=e.alternate;if(!t){if(t=mo(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return ix(r),e;if(o===i)return ix(r),t;o=o.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=o;else{for(var a=!1,s=r.child;s;){if(s===n){a=!0,n=r,i=o;break}if(s===i){a=!0,i=r,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,i=r;break}if(s===i){a=!0,i=o,n=r;break}s=s.sibling}if(!a)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function lC(e){return e=Ck(e),e!==null?cC(e):null}function cC(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cC(e);if(t!==null)return t;e=e.sibling}return null}var uC=pn.unstable_scheduleCallback,rx=pn.unstable_cancelCallback,Ek=pn.unstable_shouldYield,Sk=pn.unstable_requestPaint,ct=pn.unstable_now,Fk=pn.unstable_getCurrentPriorityLevel,Zg=pn.unstable_ImmediatePriority,dC=pn.unstable_UserBlockingPriority,Mu=pn.unstable_NormalPriority,kk=pn.unstable_LowPriority,fC=pn.unstable_IdlePriority,Bd=null,ri=null;function _k(e){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Bd,e,void 0,(e.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Dk,Pk=Math.log,Ak=Math.LN2;function Dk(e){return e>>>=0,e===0?32:31-(Pk(e)/Ak|0)|0}var ac=64,sc=4194304;function bs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Iu(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~r;s!==0?i=bs(s):(o&=a,o!==0&&(i=bs(o)))}else a=n&~r,a!==0?i=bs(a):o!==0&&(i=bs(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,o=t&-t,r>=o||r===16&&(o&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-jn(t),r=1<<n,i|=e[n],t&=~r;return i}function $k(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ok(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-jn(o),s=1<<a,l=r[a];l===-1?(!(s&n)||s&i)&&(r[a]=$k(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function h0(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pC(){var e=ac;return ac<<=1,!(ac&4194240)&&(ac=64),e}function wp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jn(t),e[t]=n}function Tk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-jn(n),o=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~o}}function Jg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-jn(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var Re=0;function hC(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gC,Yg,mC,xC,vC,g0=!1,lc=[],rr=null,or=null,ar=null,nl=new Map,il=new Map,qi=[],Mk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ox(e,t){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":nl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(t.pointerId)}}function Ha(e,t,n,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Il(t),t!==null&&Yg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Ik(e,t,n,i,r){switch(t){case"focusin":return rr=Ha(rr,e,t,n,i,r),!0;case"dragenter":return or=Ha(or,e,t,n,i,r),!0;case"mouseover":return ar=Ha(ar,e,t,n,i,r),!0;case"pointerover":var o=r.pointerId;return nl.set(o,Ha(nl.get(o)||null,e,t,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,il.set(o,Ha(il.get(o)||null,e,t,n,i,r)),!0}return!1}function bC(e){var t=Vr(e.target);if(t!==null){var n=mo(t);if(n!==null){if(t=n.tag,t===13){if(t=sC(n),t!==null){e.blockedOn=t,vC(e.priority,function(){mC(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=m0(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);u0=i,n.target.dispatchEvent(i),u0=null}else return t=Il(n),t!==null&&Yg(t),e.blockedOn=n,!1;t.shift()}return!0}function ax(e,t,n){nu(e)&&n.delete(t)}function Lk(){g0=!1,rr!==null&&nu(rr)&&(rr=null),or!==null&&nu(or)&&(or=null),ar!==null&&nu(ar)&&(ar=null),nl.forEach(ax),il.forEach(ax)}function Ua(e,t){e.blockedOn===t&&(e.blockedOn=null,g0||(g0=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,Lk)))}function rl(e){function t(r){return Ua(r,e)}if(0<lc.length){Ua(lc[0],e);for(var n=1;n<lc.length;n++){var i=lc[n];i.blockedOn===e&&(i.blockedOn=null)}}for(rr!==null&&Ua(rr,e),or!==null&&Ua(or,e),ar!==null&&Ua(ar,e),nl.forEach(t),il.forEach(t),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)bC(n),n.blockedOn===null&&qi.shift()}var na=Mi.ReactCurrentBatchConfig,Lu=!0;function Rk(e,t,n,i){var r=Re,o=na.transition;na.transition=null;try{Re=1,Gg(e,t,n,i)}finally{Re=r,na.transition=o}}function Bk(e,t,n,i){var r=Re,o=na.transition;na.transition=null;try{Re=4,Gg(e,t,n,i)}finally{Re=r,na.transition=o}}function Gg(e,t,n,i){if(Lu){var r=m0(e,t,n,i);if(r===null)$p(e,t,i,Ru,n),ox(e,i);else if(Ik(r,e,t,n,i))i.stopPropagation();else if(ox(e,i),t&4&&-1<Mk.indexOf(e)){for(;r!==null;){var o=Il(r);if(o!==null&&gC(o),o=m0(e,t,n,i),o===null&&$p(e,t,i,Ru,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else $p(e,t,i,null,n)}}var Ru=null;function m0(e,t,n,i){if(Ru=null,e=qg(i),e=Vr(e),e!==null)if(t=mo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sC(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ru=e,null}function yC(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fk()){case Zg:return 1;case dC:return 4;case Mu:case kk:return 16;case fC:return 536870912;default:return 16}default:return 16}}var Ji=null,Kg=null,iu=null;function wC(){if(iu)return iu;var e,t=Kg,n=t.length,i,r="value"in Ji?Ji.value:Ji.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===r[o-i];i++);return iu=r.slice(e,1<i?1-i:void 0)}function ru(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cc(){return!0}function sx(){return!1}function mn(e){function t(n,i,r,o,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cc:sx,this.isPropagationStopped=sx,this}return nt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xg=mn(ka),Ml=nt({},ka,{view:0,detail:0}),zk=mn(Ml),Cp,Ep,Wa,zd=nt({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wa&&(Wa&&e.type==="mousemove"?(Cp=e.screenX-Wa.screenX,Ep=e.screenY-Wa.screenY):Ep=Cp=0,Wa=e),Cp)},movementY:function(e){return"movementY"in e?e.movementY:Ep}}),lx=mn(zd),Nk=nt({},zd,{dataTransfer:0}),Vk=mn(Nk),jk=nt({},Ml,{relatedTarget:0}),Sp=mn(jk),Hk=nt({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Uk=mn(Hk),Wk=nt({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qk=mn(Wk),Zk=nt({},ka,{data:0}),cx=mn(Zk),Jk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gk[e])?!!t[e]:!1}function Qg(){return Kk}var Xk=nt({},Ml,{key:function(e){if(e.key){var t=Jk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ru(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qg,charCode:function(e){return e.type==="keypress"?ru(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ru(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qk=mn(Xk),e6=nt({},zd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ux=mn(e6),t6=nt({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qg}),n6=mn(t6),i6=nt({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),r6=mn(i6),o6=nt({},zd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a6=mn(o6),s6=[9,13,27,32],em=Di&&"CompositionEvent"in window,Os=null;Di&&"documentMode"in document&&(Os=document.documentMode);var l6=Di&&"TextEvent"in window&&!Os,CC=Di&&(!em||Os&&8<Os&&11>=Os),dx=String.fromCharCode(32),fx=!1;function EC(e,t){switch(e){case"keyup":return s6.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function SC(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var No=!1;function c6(e,t){switch(e){case"compositionend":return SC(t);case"keypress":return t.which!==32?null:(fx=!0,dx);case"textInput":return e=t.data,e===dx&&fx?null:e;default:return null}}function u6(e,t){if(No)return e==="compositionend"||!em&&EC(e,t)?(e=wC(),iu=Kg=Ji=null,No=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return CC&&t.locale!=="ko"?null:t.data;default:return null}}var d6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function px(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!d6[e.type]:t==="textarea"}function FC(e,t,n,i){nC(i),t=Bu(t,"onChange"),0<t.length&&(n=new Xg("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ts=null,ol=null;function f6(e){LC(e,0)}function Nd(e){var t=Ho(e);if(Yw(t))return e}function p6(e,t){if(e==="change")return t}var kC=!1;if(Di){var Fp;if(Di){var kp="oninput"in document;if(!kp){var hx=document.createElement("div");hx.setAttribute("oninput","return;"),kp=typeof hx.oninput=="function"}Fp=kp}else Fp=!1;kC=Fp&&(!document.documentMode||9<document.documentMode)}function gx(){Ts&&(Ts.detachEvent("onpropertychange",_C),ol=Ts=null)}function _C(e){if(e.propertyName==="value"&&Nd(ol)){var t=[];FC(t,ol,e,qg(e)),aC(f6,t)}}function h6(e,t,n){e==="focusin"?(gx(),Ts=t,ol=n,Ts.attachEvent("onpropertychange",_C)):e==="focusout"&&gx()}function g6(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nd(ol)}function m6(e,t){if(e==="click")return Nd(t)}function x6(e,t){if(e==="input"||e==="change")return Nd(t)}function v6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wn=typeof Object.is=="function"?Object.is:v6;function al(e,t){if(Wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xh.call(t,r)||!Wn(e[r],t[r]))return!1}return!0}function mx(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xx(e,t){var n=mx(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mx(n)}}function PC(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?PC(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function AC(){for(var e=window,t=$u();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$u(e.document)}return t}function tm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function b6(e){var t=AC(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&PC(n.ownerDocument.documentElement,n)){if(i!==null&&tm(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=xx(n,o);var a=xx(n,i);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var y6=Di&&"documentMode"in document&&11>=document.documentMode,Vo=null,x0=null,Ms=null,v0=!1;function vx(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;v0||Vo==null||Vo!==$u(i)||(i=Vo,"selectionStart"in i&&tm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ms&&al(Ms,i)||(Ms=i,i=Bu(x0,"onSelect"),0<i.length&&(t=new Xg("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Vo)))}function uc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jo={animationend:uc("Animation","AnimationEnd"),animationiteration:uc("Animation","AnimationIteration"),animationstart:uc("Animation","AnimationStart"),transitionend:uc("Transition","TransitionEnd")},_p={},DC={};Di&&(DC=document.createElement("div").style,"AnimationEvent"in window||(delete jo.animationend.animation,delete jo.animationiteration.animation,delete jo.animationstart.animation),"TransitionEvent"in window||delete jo.transitionend.transition);function Vd(e){if(_p[e])return _p[e];if(!jo[e])return e;var t=jo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in DC)return _p[e]=t[n];return e}var $C=Vd("animationend"),OC=Vd("animationiteration"),TC=Vd("animationstart"),MC=Vd("transitionend"),IC=new Map,bx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(e,t){IC.set(e,t),go(t,[e])}for(var Pp=0;Pp<bx.length;Pp++){var Ap=bx[Pp],w6=Ap.toLowerCase(),C6=Ap[0].toUpperCase()+Ap.slice(1);br(w6,"on"+C6)}br($C,"onAnimationEnd");br(OC,"onAnimationIteration");br(TC,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(MC,"onTransitionEnd");ua("onMouseEnter",["mouseout","mouseover"]);ua("onMouseLeave",["mouseout","mouseover"]);ua("onPointerEnter",["pointerout","pointerover"]);ua("onPointerLeave",["pointerout","pointerover"]);go("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));go("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));go("onBeforeInput",["compositionend","keypress","textInput","paste"]);go("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));go("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));go("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E6=new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));function yx(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,wk(i,t,void 0,e),e.currentTarget=null}function LC(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var a=i.length-1;0<=a;a--){var s=i[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&r.isPropagationStopped())break e;yx(r,s,c),o=l}else for(a=0;a<i.length;a++){if(s=i[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&r.isPropagationStopped())break e;yx(r,s,c),o=l}}}if(Tu)throw e=p0,Tu=!1,p0=null,e}function We(e,t){var n=t[E0];n===void 0&&(n=t[E0]=new Set);var i=e+"__bubble";n.has(i)||(RC(t,e,2,!1),n.add(i))}function Dp(e,t,n){var i=0;t&&(i|=4),RC(n,e,i,t)}var dc="_reactListening"+Math.random().toString(36).slice(2);function sl(e){if(!e[dc]){e[dc]=!0,Uw.forEach(function(n){n!=="selectionchange"&&(E6.has(n)||Dp(n,!1,e),Dp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dc]||(t[dc]=!0,Dp("selectionchange",!1,t))}}function RC(e,t,n,i){switch(yC(t)){case 1:var r=Rk;break;case 4:r=Bk;break;default:r=Gg}n=r.bind(null,t,n,e),r=void 0,!f0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function $p(e,t,n,i,r){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;s!==null;){if(a=Vr(s),a===null)return;if(l=a.tag,l===5||l===6){i=o=a;continue e}s=s.parentNode}}i=i.return}aC(function(){var c=o,u=qg(n),f=[];e:{var p=IC.get(e);if(p!==void 0){var m=Xg,g=e;switch(e){case"keypress":if(ru(n)===0)break e;case"keydown":case"keyup":m=Qk;break;case"focusin":g="focus",m=Sp;break;case"focusout":g="blur",m=Sp;break;case"beforeblur":case"afterblur":m=Sp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=lx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Vk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=n6;break;case $C:case OC:case TC:m=Uk;break;case MC:m=r6;break;case"scroll":m=zk;break;case"wheel":m=a6;break;case"copy":case"cut":case"paste":m=qk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ux}var x=(t&4)!==0,y=!x&&e==="scroll",v=x?p!==null?p+"Capture":null:p;x=[];for(var b=c,E;b!==null;){E=b;var S=E.stateNode;if(E.tag===5&&S!==null&&(E=S,v!==null&&(S=tl(b,v),S!=null&&x.push(ll(b,S,E)))),y)break;b=b.return}0<x.length&&(p=new m(p,g,null,n,u),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==u0&&(g=n.relatedTarget||n.fromElement)&&(Vr(g)||g[$i]))break e;if((m||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?Vr(g):null,g!==null&&(y=mo(g),g!==y||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(x=lx,S="onMouseLeave",v="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(x=ux,S="onPointerLeave",v="onPointerEnter",b="pointer"),y=m==null?p:Ho(m),E=g==null?p:Ho(g),p=new x(S,b+"leave",m,n,u),p.target=y,p.relatedTarget=E,S=null,Vr(u)===c&&(x=new x(v,b+"enter",g,n,u),x.target=E,x.relatedTarget=y,S=x),y=S,m&&g)t:{for(x=m,v=g,b=0,E=x;E;E=Fo(E))b++;for(E=0,S=v;S;S=Fo(S))E++;for(;0<b-E;)x=Fo(x),b--;for(;0<E-b;)v=Fo(v),E--;for(;b--;){if(x===v||v!==null&&x===v.alternate)break t;x=Fo(x),v=Fo(v)}x=null}else x=null;m!==null&&wx(f,p,m,x,!1),g!==null&&y!==null&&wx(f,y,g,x,!0)}}e:{if(p=c?Ho(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var F=p6;else if(px(p))if(kC)F=x6;else{F=g6;var P=h6}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(F=m6);if(F&&(F=F(e,c))){FC(f,F,n,u);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&o0(p,"number",p.value)}switch(P=c?Ho(c):window,e){case"focusin":(px(P)||P.contentEditable==="true")&&(Vo=P,x0=c,Ms=null);break;case"focusout":Ms=x0=Vo=null;break;case"mousedown":v0=!0;break;case"contextmenu":case"mouseup":case"dragend":v0=!1,vx(f,n,u);break;case"selectionchange":if(y6)break;case"keydown":case"keyup":vx(f,n,u)}var k;if(em)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else No?EC(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(CC&&n.locale!=="ko"&&(No||_!=="onCompositionStart"?_==="onCompositionEnd"&&No&&(k=wC()):(Ji=u,Kg="value"in Ji?Ji.value:Ji.textContent,No=!0)),P=Bu(c,_),0<P.length&&(_=new cx(_,e,null,n,u),f.push({event:_,listeners:P}),k?_.data=k:(k=SC(n),k!==null&&(_.data=k)))),(k=l6?c6(e,n):u6(e,n))&&(c=Bu(c,"onBeforeInput"),0<c.length&&(u=new cx("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=k))}LC(f,t)})}function ll(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bu(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=tl(e,n),o!=null&&i.unshift(ll(e,o,r)),o=tl(e,t),o!=null&&i.push(ll(e,o,r))),e=e.return}return i}function Fo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wx(e,t,n,i,r){for(var o=t._reactName,a=[];n!==null&&n!==i;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&c!==null&&(s=c,r?(l=tl(n,o),l!=null&&a.unshift(ll(n,l,s))):r||(l=tl(n,o),l!=null&&a.push(ll(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var S6=/\r\n?/g,F6=/\u0000|\uFFFD/g;function Cx(e){return(typeof e=="string"?e:""+e).replace(S6,`
`).replace(F6,"")}function fc(e,t,n){if(t=Cx(t),Cx(e)!==t&&n)throw Error(J(425))}function zu(){}var b0=null,y0=null;function w0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var C0=typeof setTimeout=="function"?setTimeout:void 0,k6=typeof clearTimeout=="function"?clearTimeout:void 0,Ex=typeof Promise=="function"?Promise:void 0,_6=typeof queueMicrotask=="function"?queueMicrotask:typeof Ex<"u"?function(e){return Ex.resolve(null).then(e).catch(P6)}:C0;function P6(e){setTimeout(function(){throw e})}function Op(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),rl(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);rl(t)}function sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _a=Math.random().toString(36).slice(2),ei="__reactFiber$"+_a,cl="__reactProps$"+_a,$i="__reactContainer$"+_a,E0="__reactEvents$"+_a,A6="__reactListeners$"+_a,D6="__reactHandles$"+_a;function Vr(e){var t=e[ei];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$i]||n[ei]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sx(e);e!==null;){if(n=e[ei])return n;e=Sx(e)}return t}e=n,n=e.parentNode}return null}function Il(e){return e=e[ei]||e[$i],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ho(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(J(33))}function jd(e){return e[cl]||null}var S0=[],Uo=-1;function yr(e){return{current:e}}function Je(e){0>Uo||(e.current=S0[Uo],S0[Uo]=null,Uo--)}function Ue(e,t){Uo++,S0[Uo]=e.current,e.current=t}var mr={},Bt=yr(mr),en=yr(!1),Xr=mr;function da(e,t){var n=e.type.contextTypes;if(!n)return mr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function tn(e){return e=e.childContextTypes,e!=null}function Nu(){Je(en),Je(Bt)}function Fx(e,t,n){if(Bt.current!==mr)throw Error(J(168));Ue(Bt,t),Ue(en,n)}function BC(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(J(108,hk(e)||"Unknown",r));return nt({},n,i)}function Vu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mr,Xr=Bt.current,Ue(Bt,e),Ue(en,en.current),!0}function kx(e,t,n){var i=e.stateNode;if(!i)throw Error(J(169));n?(e=BC(e,t,Xr),i.__reactInternalMemoizedMergedChildContext=e,Je(en),Je(Bt),Ue(Bt,e)):Je(en),Ue(en,n)}var vi=null,Hd=!1,Tp=!1;function zC(e){vi===null?vi=[e]:vi.push(e)}function $6(e){Hd=!0,zC(e)}function wr(){if(!Tp&&vi!==null){Tp=!0;var e=0,t=Re;try{var n=vi;for(Re=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}vi=null,Hd=!1}catch(r){throw vi!==null&&(vi=vi.slice(e+1)),uC(Zg,wr),r}finally{Re=t,Tp=!1}}return null}var Wo=[],qo=0,ju=null,Hu=0,Sn=[],Fn=0,Qr=null,wi=1,Ci="";function Mr(e,t){Wo[qo++]=Hu,Wo[qo++]=ju,ju=e,Hu=t}function NC(e,t,n){Sn[Fn++]=wi,Sn[Fn++]=Ci,Sn[Fn++]=Qr,Qr=e;var i=wi;e=Ci;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var o=32-jn(t)+r;if(30<o){var a=r-r%5;o=(i&(1<<a)-1).toString(32),i>>=a,r-=a,wi=1<<32-jn(t)+r|n<<r|i,Ci=o+e}else wi=1<<o|n<<r|i,Ci=e}function nm(e){e.return!==null&&(Mr(e,1),NC(e,1,0))}function im(e){for(;e===ju;)ju=Wo[--qo],Wo[qo]=null,Hu=Wo[--qo],Wo[qo]=null;for(;e===Qr;)Qr=Sn[--Fn],Sn[Fn]=null,Ci=Sn[--Fn],Sn[Fn]=null,wi=Sn[--Fn],Sn[Fn]=null}var dn=null,un=null,Ke=!1,Bn=null;function VC(e,t){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _x(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dn=e,un=sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dn=e,un=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qr!==null?{id:wi,overflow:Ci}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dn=e,un=null,!0):!1;default:return!1}}function F0(e){return(e.mode&1)!==0&&(e.flags&128)===0}function k0(e){if(Ke){var t=un;if(t){var n=t;if(!_x(e,t)){if(F0(e))throw Error(J(418));t=sr(n.nextSibling);var i=dn;t&&_x(e,t)?VC(i,n):(e.flags=e.flags&-4097|2,Ke=!1,dn=e)}}else{if(F0(e))throw Error(J(418));e.flags=e.flags&-4097|2,Ke=!1,dn=e}}}function Px(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dn=e}function pc(e){if(e!==dn)return!1;if(!Ke)return Px(e),Ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!w0(e.type,e.memoizedProps)),t&&(t=un)){if(F0(e))throw jC(),Error(J(418));for(;t;)VC(e,t),t=sr(t.nextSibling)}if(Px(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){un=sr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}un=null}}else un=dn?sr(e.stateNode.nextSibling):null;return!0}function jC(){for(var e=un;e;)e=sr(e.nextSibling)}function fa(){un=dn=null,Ke=!1}function rm(e){Bn===null?Bn=[e]:Bn.push(e)}var O6=Mi.ReactCurrentBatchConfig;function Ln(e,t){if(e&&e.defaultProps){t=nt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Uu=yr(null),Wu=null,Zo=null,om=null;function am(){om=Zo=Wu=null}function sm(e){var t=Uu.current;Je(Uu),e._currentValue=t}function _0(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ia(e,t){Wu=e,om=Zo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Kt=!0),e.firstContext=null)}function An(e){var t=e._currentValue;if(om!==e)if(e={context:e,memoizedValue:t,next:null},Zo===null){if(Wu===null)throw Error(J(308));Zo=e,Wu.dependencies={lanes:0,firstContext:e}}else Zo=Zo.next=e;return t}var jr=null;function lm(e){jr===null?jr=[e]:jr.push(e)}function HC(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,lm(t)):(n.next=r.next,r.next=n),t.interleaved=n,Oi(e,i)}function Oi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wi=!1;function cm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function UC(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ki(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,De&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,Oi(e,n)}return r=i.interleaved,r===null?(t.next=t,lm(i)):(t.next=r.next,r.next=t),i.interleaved=t,Oi(e,n)}function ou(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Jg(e,n)}}function Ax(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qu(e,t,n,i){var r=e.updateQueue;Wi=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;a=0,u=c=l=null,s=o;do{var p=s.lane,m=s.eventTime;if((i&p)===p){u!==null&&(u=u.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,x=s;switch(p=t,m=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(m,f,p);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,p=typeof g=="function"?g.call(m,f,p):g,p==null)break e;f=nt({},f,p);break e;case 2:Wi=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[s]:p.push(s))}else m={eventTime:m,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,a|=p;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;p=s,s=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(1);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do a|=r.lane,r=r.next;while(r!==t)}else o===null&&(r.shared.lanes=0);to|=a,e.lanes=a,e.memoizedState=f}}function Dx(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var WC=new Hw.Component().refs;function P0(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:nt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ud={isMounted:function(e){return(e=e._reactInternals)?mo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ht(),r=ur(e),o=ki(i,r);o.payload=t,n!=null&&(o.callback=n),t=lr(e,o,r),t!==null&&(Hn(t,e,r,i),ou(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ht(),r=ur(e),o=ki(i,r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=lr(e,o,r),t!==null&&(Hn(t,e,r,i),ou(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),i=ur(e),r=ki(n,i);r.tag=2,t!=null&&(r.callback=t),t=lr(e,r,i),t!==null&&(Hn(t,e,i,n),ou(t,e,i))}};function $x(e,t,n,i,r,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,a):t.prototype&&t.prototype.isPureReactComponent?!al(n,i)||!al(r,o):!0}function qC(e,t,n){var i=!1,r=mr,o=t.contextType;return typeof o=="object"&&o!==null?o=An(o):(r=tn(t)?Xr:Bt.current,i=t.contextTypes,o=(i=i!=null)?da(e,r):mr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ud,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ox(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ud.enqueueReplaceState(t,t.state,null)}function A0(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs=WC,cm(e);var o=t.contextType;typeof o=="object"&&o!==null?r.context=An(o):(o=tn(t)?Xr:Bt.current,r.context=da(e,o)),r.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(P0(e,t,o,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Ud.enqueueReplaceState(r,r.state,null),qu(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function qa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,e));var r=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=r.refs;s===WC&&(s=r.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,e))}return e}function hc(e,t){throw e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tx(e){var t=e._init;return t(e._payload)}function ZC(e){function t(v,b){if(e){var E=v.deletions;E===null?(v.deletions=[b],v.flags|=16):E.push(b)}}function n(v,b){if(!e)return null;for(;b!==null;)t(v,b),b=b.sibling;return null}function i(v,b){for(v=new Map;b!==null;)b.key!==null?v.set(b.key,b):v.set(b.index,b),b=b.sibling;return v}function r(v,b){return v=dr(v,b),v.index=0,v.sibling=null,v}function o(v,b,E){return v.index=E,e?(E=v.alternate,E!==null?(E=E.index,E<b?(v.flags|=2,b):E):(v.flags|=2,b)):(v.flags|=1048576,b)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,b,E,S){return b===null||b.tag!==6?(b=Np(E,v.mode,S),b.return=v,b):(b=r(b,E),b.return=v,b)}function l(v,b,E,S){var F=E.type;return F===zo?u(v,b,E.props.children,S,E.key):b!==null&&(b.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ui&&Tx(F)===b.type)?(S=r(b,E.props),S.ref=qa(v,b,E),S.return=v,S):(S=du(E.type,E.key,E.props,null,v.mode,S),S.ref=qa(v,b,E),S.return=v,S)}function c(v,b,E,S){return b===null||b.tag!==4||b.stateNode.containerInfo!==E.containerInfo||b.stateNode.implementation!==E.implementation?(b=Vp(E,v.mode,S),b.return=v,b):(b=r(b,E.children||[]),b.return=v,b)}function u(v,b,E,S,F){return b===null||b.tag!==7?(b=Zr(E,v.mode,S,F),b.return=v,b):(b=r(b,E),b.return=v,b)}function f(v,b,E){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Np(""+b,v.mode,E),b.return=v,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ic:return E=du(b.type,b.key,b.props,null,v.mode,E),E.ref=qa(v,null,b),E.return=v,E;case Bo:return b=Vp(b,v.mode,E),b.return=v,b;case Ui:var S=b._init;return f(v,S(b._payload),E)}if(vs(b)||Va(b))return b=Zr(b,v.mode,E,null),b.return=v,b;hc(v,b)}return null}function p(v,b,E,S){var F=b!==null?b.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return F!==null?null:s(v,b,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ic:return E.key===F?l(v,b,E,S):null;case Bo:return E.key===F?c(v,b,E,S):null;case Ui:return F=E._init,p(v,b,F(E._payload),S)}if(vs(E)||Va(E))return F!==null?null:u(v,b,E,S,null);hc(v,E)}return null}function m(v,b,E,S,F){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(E)||null,s(b,v,""+S,F);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ic:return v=v.get(S.key===null?E:S.key)||null,l(b,v,S,F);case Bo:return v=v.get(S.key===null?E:S.key)||null,c(b,v,S,F);case Ui:var P=S._init;return m(v,b,E,P(S._payload),F)}if(vs(S)||Va(S))return v=v.get(E)||null,u(b,v,S,F,null);hc(b,S)}return null}function g(v,b,E,S){for(var F=null,P=null,k=b,_=b=0,D=null;k!==null&&_<E.length;_++){k.index>_?(D=k,k=null):D=k.sibling;var T=p(v,k,E[_],S);if(T===null){k===null&&(k=D);break}e&&k&&T.alternate===null&&t(v,k),b=o(T,b,_),P===null?F=T:P.sibling=T,P=T,k=D}if(_===E.length)return n(v,k),Ke&&Mr(v,_),F;if(k===null){for(;_<E.length;_++)k=f(v,E[_],S),k!==null&&(b=o(k,b,_),P===null?F=k:P.sibling=k,P=k);return Ke&&Mr(v,_),F}for(k=i(v,k);_<E.length;_++)D=m(k,v,_,E[_],S),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?_:D.key),b=o(D,b,_),P===null?F=D:P.sibling=D,P=D);return e&&k.forEach(function(R){return t(v,R)}),Ke&&Mr(v,_),F}function x(v,b,E,S){var F=Va(E);if(typeof F!="function")throw Error(J(150));if(E=F.call(E),E==null)throw Error(J(151));for(var P=F=null,k=b,_=b=0,D=null,T=E.next();k!==null&&!T.done;_++,T=E.next()){k.index>_?(D=k,k=null):D=k.sibling;var R=p(v,k,T.value,S);if(R===null){k===null&&(k=D);break}e&&k&&R.alternate===null&&t(v,k),b=o(R,b,_),P===null?F=R:P.sibling=R,P=R,k=D}if(T.done)return n(v,k),Ke&&Mr(v,_),F;if(k===null){for(;!T.done;_++,T=E.next())T=f(v,T.value,S),T!==null&&(b=o(T,b,_),P===null?F=T:P.sibling=T,P=T);return Ke&&Mr(v,_),F}for(k=i(v,k);!T.done;_++,T=E.next())T=m(k,v,_,T.value,S),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?_:T.key),b=o(T,b,_),P===null?F=T:P.sibling=T,P=T);return e&&k.forEach(function(L){return t(v,L)}),Ke&&Mr(v,_),F}function y(v,b,E,S){if(typeof E=="object"&&E!==null&&E.type===zo&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ic:e:{for(var F=E.key,P=b;P!==null;){if(P.key===F){if(F=E.type,F===zo){if(P.tag===7){n(v,P.sibling),b=r(P,E.props.children),b.return=v,v=b;break e}}else if(P.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ui&&Tx(F)===P.type){n(v,P.sibling),b=r(P,E.props),b.ref=qa(v,P,E),b.return=v,v=b;break e}n(v,P);break}else t(v,P);P=P.sibling}E.type===zo?(b=Zr(E.props.children,v.mode,S,E.key),b.return=v,v=b):(S=du(E.type,E.key,E.props,null,v.mode,S),S.ref=qa(v,b,E),S.return=v,v=S)}return a(v);case Bo:e:{for(P=E.key;b!==null;){if(b.key===P)if(b.tag===4&&b.stateNode.containerInfo===E.containerInfo&&b.stateNode.implementation===E.implementation){n(v,b.sibling),b=r(b,E.children||[]),b.return=v,v=b;break e}else{n(v,b);break}else t(v,b);b=b.sibling}b=Vp(E,v.mode,S),b.return=v,v=b}return a(v);case Ui:return P=E._init,y(v,b,P(E._payload),S)}if(vs(E))return g(v,b,E,S);if(Va(E))return x(v,b,E,S);hc(v,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,b!==null&&b.tag===6?(n(v,b.sibling),b=r(b,E),b.return=v,v=b):(n(v,b),b=Np(E,v.mode,S),b.return=v,v=b),a(v)):n(v,b)}return y}var pa=ZC(!0),JC=ZC(!1),Ll={},oi=yr(Ll),ul=yr(Ll),dl=yr(Ll);function Hr(e){if(e===Ll)throw Error(J(174));return e}function um(e,t){switch(Ue(dl,t),Ue(ul,e),Ue(oi,Ll),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:s0(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=s0(t,e)}Je(oi),Ue(oi,t)}function ha(){Je(oi),Je(ul),Je(dl)}function YC(e){Hr(dl.current);var t=Hr(oi.current),n=s0(t,e.type);t!==n&&(Ue(ul,e),Ue(oi,n))}function dm(e){ul.current===e&&(Je(oi),Je(ul))}var Qe=yr(0);function Zu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mp=[];function fm(){for(var e=0;e<Mp.length;e++)Mp[e]._workInProgressVersionPrimary=null;Mp.length=0}var au=Mi.ReactCurrentDispatcher,Ip=Mi.ReactCurrentBatchConfig,eo=0,tt=null,gt=null,Ct=null,Ju=!1,Is=!1,fl=0,T6=0;function Ot(){throw Error(J(321))}function pm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wn(e[n],t[n]))return!1;return!0}function hm(e,t,n,i,r,o){if(eo=o,tt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,au.current=e===null||e.memoizedState===null?R6:B6,e=n(i,r),Is){o=0;do{if(Is=!1,fl=0,25<=o)throw Error(J(301));o+=1,Ct=gt=null,t.updateQueue=null,au.current=z6,e=n(i,r)}while(Is)}if(au.current=Yu,t=gt!==null&&gt.next!==null,eo=0,Ct=gt=tt=null,Ju=!1,t)throw Error(J(300));return e}function gm(){var e=fl!==0;return fl=0,e}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?tt.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function Dn(){if(gt===null){var e=tt.alternate;e=e!==null?e.memoizedState:null}else e=gt.next;var t=Ct===null?tt.memoizedState:Ct.next;if(t!==null)Ct=t,gt=e;else{if(e===null)throw Error(J(310));gt=e,e={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Ct===null?tt.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function pl(e,t){return typeof t=="function"?t(e):t}function Lp(e){var t=Dn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=gt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var s=a=null,l=null,c=o;do{var u=c.lane;if((eo&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,a=i):l=l.next=f,tt.lanes|=u,to|=u}c=c.next}while(c!==null&&c!==o);l===null?a=i:l.next=s,Wn(i,t.memoizedState)||(Kt=!0),t.memoizedState=i,t.baseState=a,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do o=r.lane,tt.lanes|=o,to|=o,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rp(e){var t=Dn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do o=e(o,a.action),a=a.next;while(a!==r);Wn(o,t.memoizedState)||(Kt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function GC(){}function KC(e,t){var n=tt,i=Dn(),r=t(),o=!Wn(i.memoizedState,r);if(o&&(i.memoizedState=r,Kt=!0),i=i.queue,mm(eE.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,hl(9,QC.bind(null,n,i,r,t),void 0,null),St===null)throw Error(J(349));eo&30||XC(n,t,r)}return r}function XC(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=tt.updateQueue,t===null?(t={lastEffect:null,stores:null},tt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function QC(e,t,n,i){t.value=n,t.getSnapshot=i,tE(t)&&nE(e)}function eE(e,t,n){return n(function(){tE(t)&&nE(e)})}function tE(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wn(e,n)}catch{return!0}}function nE(e){var t=Oi(e,1);t!==null&&Hn(t,e,1,-1)}function Mx(e){var t=Gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:e},t.queue=e,e=e.dispatch=L6.bind(null,tt,e),[t.memoizedState,e]}function hl(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=tt.updateQueue,t===null?(t={lastEffect:null,stores:null},tt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function iE(){return Dn().memoizedState}function su(e,t,n,i){var r=Gn();tt.flags|=e,r.memoizedState=hl(1|t,n,void 0,i===void 0?null:i)}function Wd(e,t,n,i){var r=Dn();i=i===void 0?null:i;var o=void 0;if(gt!==null){var a=gt.memoizedState;if(o=a.destroy,i!==null&&pm(i,a.deps)){r.memoizedState=hl(t,n,o,i);return}}tt.flags|=e,r.memoizedState=hl(1|t,n,o,i)}function Ix(e,t){return su(8390656,8,e,t)}function mm(e,t){return Wd(2048,8,e,t)}function rE(e,t){return Wd(4,2,e,t)}function oE(e,t){return Wd(4,4,e,t)}function aE(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sE(e,t,n){return n=n!=null?n.concat([e]):null,Wd(4,4,aE.bind(null,t,e),n)}function xm(){}function lE(e,t){var n=Dn();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&pm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function cE(e,t){var n=Dn();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&pm(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function uE(e,t,n){return eo&21?(Wn(n,t)||(n=pC(),tt.lanes|=n,to|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Kt=!0),e.memoizedState=n)}function M6(e,t){var n=Re;Re=n!==0&&4>n?n:4,e(!0);var i=Ip.transition;Ip.transition={};try{e(!1),t()}finally{Re=n,Ip.transition=i}}function dE(){return Dn().memoizedState}function I6(e,t,n){var i=ur(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},fE(e))pE(t,n);else if(n=HC(e,t,n,i),n!==null){var r=Ht();Hn(n,e,i,r),hE(n,t,i)}}function L6(e,t,n){var i=ur(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(fE(e))pE(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(r.hasEagerState=!0,r.eagerState=s,Wn(s,a)){var l=t.interleaved;l===null?(r.next=r,lm(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=HC(e,t,r,i),n!==null&&(r=Ht(),Hn(n,e,i,r),hE(n,t,i))}}function fE(e){var t=e.alternate;return e===tt||t!==null&&t===tt}function pE(e,t){Is=Ju=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hE(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Jg(e,n)}}var Yu={readContext:An,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},R6={readContext:An,useCallback:function(e,t){return Gn().memoizedState=[e,t===void 0?null:t],e},useContext:An,useEffect:Ix,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,su(4194308,4,aE.bind(null,t,e),n)},useLayoutEffect:function(e,t){return su(4194308,4,e,t)},useInsertionEffect:function(e,t){return su(4,2,e,t)},useMemo:function(e,t){var n=Gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=Gn();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=I6.bind(null,tt,e),[i.memoizedState,e]},useRef:function(e){var t=Gn();return e={current:e},t.memoizedState=e},useState:Mx,useDebugValue:xm,useDeferredValue:function(e){return Gn().memoizedState=e},useTransition:function(){var e=Mx(!1),t=e[0];return e=M6.bind(null,e[1]),Gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=tt,r=Gn();if(Ke){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),St===null)throw Error(J(349));eo&30||XC(i,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,Ix(eE.bind(null,i,o,e),[e]),i.flags|=2048,hl(9,QC.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Gn(),t=St.identifierPrefix;if(Ke){var n=Ci,i=wi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=fl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=T6++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B6={readContext:An,useCallback:lE,useContext:An,useEffect:mm,useImperativeHandle:sE,useInsertionEffect:rE,useLayoutEffect:oE,useMemo:cE,useReducer:Lp,useRef:iE,useState:function(){return Lp(pl)},useDebugValue:xm,useDeferredValue:function(e){var t=Dn();return uE(t,gt.memoizedState,e)},useTransition:function(){var e=Lp(pl)[0],t=Dn().memoizedState;return[e,t]},useMutableSource:GC,useSyncExternalStore:KC,useId:dE,unstable_isNewReconciler:!1},z6={readContext:An,useCallback:lE,useContext:An,useEffect:mm,useImperativeHandle:sE,useInsertionEffect:rE,useLayoutEffect:oE,useMemo:cE,useReducer:Rp,useRef:iE,useState:function(){return Rp(pl)},useDebugValue:xm,useDeferredValue:function(e){var t=Dn();return gt===null?t.memoizedState=e:uE(t,gt.memoizedState,e)},useTransition:function(){var e=Rp(pl)[0],t=Dn().memoizedState;return[e,t]},useMutableSource:GC,useSyncExternalStore:KC,useId:dE,unstable_isNewReconciler:!1};function ga(e,t){try{var n="",i=t;do n+=pk(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:r,digest:null}}function Bp(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function D0(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var N6=typeof WeakMap=="function"?WeakMap:Map;function gE(e,t,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Ku||(Ku=!0,N0=i),D0(e,t)},n}function mE(e,t,n){n=ki(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){D0(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){D0(e,t),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Lx(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new N6;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=e3.bind(null,e,t,n),t.then(e,e))}function Rx(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bx(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ki(-1,1),t.tag=2,lr(n,t,1))),n.lanes|=1),e)}var V6=Mi.ReactCurrentOwner,Kt=!1;function Vt(e,t,n,i){t.child=e===null?JC(t,null,n,i):pa(t,e.child,n,i)}function zx(e,t,n,i,r){n=n.render;var o=t.ref;return ia(t,r),i=hm(e,t,n,i,o,r),n=gm(),e!==null&&!Kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ti(e,t,r)):(Ke&&n&&nm(t),t.flags|=1,Vt(e,t,i,r),t.child)}function Nx(e,t,n,i,r){if(e===null){var o=n.type;return typeof o=="function"&&!Fm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xE(e,t,o,i,r)):(e=du(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&r)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(a,i)&&e.ref===t.ref)return Ti(e,t,r)}return t.flags|=1,e=dr(o,i),e.ref=t.ref,e.return=t,t.child=e}function xE(e,t,n,i,r){if(e!==null){var o=e.memoizedProps;if(al(o,i)&&e.ref===t.ref)if(Kt=!1,t.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(Kt=!0);else return t.lanes=e.lanes,Ti(e,t,r)}return $0(e,t,n,i,r)}function vE(e,t,n){var i=t.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(Yo,an),an|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ue(Yo,an),an|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ue(Yo,an),an|=i}else o!==null?(i=o.baseLanes|n,t.memoizedState=null):i=n,Ue(Yo,an),an|=i;return Vt(e,t,r,n),t.child}function bE(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $0(e,t,n,i,r){var o=tn(n)?Xr:Bt.current;return o=da(t,o),ia(t,r),n=hm(e,t,n,i,o,r),i=gm(),e!==null&&!Kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ti(e,t,r)):(Ke&&i&&nm(t),t.flags|=1,Vt(e,t,n,r),t.child)}function Vx(e,t,n,i,r){if(tn(n)){var o=!0;Vu(t)}else o=!1;if(ia(t,r),t.stateNode===null)lu(e,t),qC(t,n,i),A0(t,n,i,r),i=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=tn(n)?Xr:Bt.current,c=da(t,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==i||l!==c)&&Ox(t,a,i,c),Wi=!1;var p=t.memoizedState;a.state=p,qu(t,i,a,r),l=t.memoizedState,s!==i||p!==l||en.current||Wi?(typeof u=="function"&&(P0(t,n,u,i),l=t.memoizedState),(s=Wi||$x(t,n,s,i,p,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),a.props=i,a.state=l,a.context=c,i=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,UC(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ln(t.type,s),a.props=c,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=tn(n)?Xr:Bt.current,l=da(t,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==l)&&Ox(t,a,i,l),Wi=!1,p=t.memoizedState,a.state=p,qu(t,i,a,r);var g=t.memoizedState;s!==f||p!==g||en.current||Wi?(typeof m=="function"&&(P0(t,n,m,i),g=t.memoizedState),(c=Wi||$x(t,n,c,i,p,g,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return O0(e,t,n,i,o,r)}function O0(e,t,n,i,r,o){bE(e,t);var a=(t.flags&128)!==0;if(!i&&!a)return r&&kx(t,n,!1),Ti(e,t,o);i=t.stateNode,V6.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&a?(t.child=pa(t,e.child,null,o),t.child=pa(t,null,s,o)):Vt(e,t,s,o),t.memoizedState=i.state,r&&kx(t,n,!0),t.child}function yE(e){var t=e.stateNode;t.pendingContext?Fx(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fx(e,t.context,!1),um(e,t.containerInfo)}function jx(e,t,n,i,r){return fa(),rm(r),t.flags|=256,Vt(e,t,n,i),t.child}var T0={dehydrated:null,treeContext:null,retryLane:0};function M0(e){return{baseLanes:e,cachePool:null,transitions:null}}function wE(e,t,n){var i=t.pendingProps,r=Qe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Ue(Qe,r&1),e===null)return k0(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Jd(a,i,0,null),e=Zr(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=M0(n),t.memoizedState=T0,e):vm(t,a));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return j6(e,t,a,i,s,r,n);if(o){o=i.fallback,a=t.mode,r=e.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?o=dr(s,o):(o=Zr(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,a=e.child.memoizedState,a=a===null?M0(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=T0,i}return o=e.child,e=o.sibling,i=dr(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function vm(e,t){return t=Jd({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gc(e,t,n,i){return i!==null&&rm(i),pa(t,e.child,null,n),e=vm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function j6(e,t,n,i,r,o,a){if(n)return t.flags&256?(t.flags&=-257,i=Bp(Error(J(422))),gc(e,t,a,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,r=t.mode,i=Jd({mode:"visible",children:i.children},r,0,null),o=Zr(o,r,a,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&pa(t,e.child,null,a),t.child.memoizedState=M0(a),t.memoizedState=T0,o);if(!(t.mode&1))return gc(e,t,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,o=Error(J(419)),i=Bp(o,i,void 0),gc(e,t,a,i)}if(s=(a&e.childLanes)!==0,Kt||s){if(i=St,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Oi(e,r),Hn(i,e,r,-1))}return Sm(),i=Bp(Error(J(421))),gc(e,t,a,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=t3.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,un=sr(r.nextSibling),dn=t,Ke=!0,Bn=null,e!==null&&(Sn[Fn++]=wi,Sn[Fn++]=Ci,Sn[Fn++]=Qr,wi=e.id,Ci=e.overflow,Qr=t),t=vm(t,i.children),t.flags|=4096,t)}function Hx(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),_0(e.return,t,n)}function zp(e,t,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function CE(e,t,n){var i=t.pendingProps,r=i.revealOrder,o=i.tail;if(Vt(e,t,i.children,n),i=Qe.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hx(e,n,t);else if(e.tag===19)Hx(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Ue(Qe,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Zu(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),zp(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Zu(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}zp(t,!0,n,null,o);break;case"together":zp(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function lu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ti(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),to|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=dr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function H6(e,t,n){switch(t.tag){case 3:yE(t),fa();break;case 5:YC(t);break;case 1:tn(t.type)&&Vu(t);break;case 4:um(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;Ue(Uu,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Ue(Qe,Qe.current&1),t.flags|=128,null):n&t.child.childLanes?wE(e,t,n):(Ue(Qe,Qe.current&1),e=Ti(e,t,n),e!==null?e.sibling:null);Ue(Qe,Qe.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return CE(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ue(Qe,Qe.current),i)break;return null;case 22:case 23:return t.lanes=0,vE(e,t,n)}return Ti(e,t,n)}var EE,I0,SE,FE;EE=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};I0=function(){};SE=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Hr(oi.current);var o=null;switch(n){case"input":r=i0(e,r),i=i0(e,i),o=[];break;case"select":r=nt({},r,{value:void 0}),i=nt({},i,{value:void 0}),o=[];break;case"textarea":r=a0(e,r),i=a0(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=zu)}l0(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var s=r[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(s=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&We("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};FE=function(e,t,n,i){n!==i&&(t.flags|=4)};function Za(e,t){if(!Ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function U6(e,t,n){var i=t.pendingProps;switch(im(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(t),null;case 1:return tn(t.type)&&Nu(),Tt(t),null;case 3:return i=t.stateNode,ha(),Je(en),Je(Bt),fm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(pc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bn!==null&&(H0(Bn),Bn=null))),I0(e,t),Tt(t),null;case 5:dm(t);var r=Hr(dl.current);if(n=t.type,e!==null&&t.stateNode!=null)SE(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Tt(t),null}if(e=Hr(oi.current),pc(t)){i=t.stateNode,n=t.type;var o=t.memoizedProps;switch(i[ei]=t,i[cl]=o,e=(t.mode&1)!==0,n){case"dialog":We("cancel",i),We("close",i);break;case"iframe":case"object":case"embed":We("load",i);break;case"video":case"audio":for(r=0;r<ys.length;r++)We(ys[r],i);break;case"source":We("error",i);break;case"img":case"image":case"link":We("error",i),We("load",i);break;case"details":We("toggle",i);break;case"input":X1(i,o),We("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},We("invalid",i);break;case"textarea":ex(i,o),We("invalid",i)}l0(n,o),r=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?i.textContent!==s&&(o.suppressHydrationWarning!==!0&&fc(i.textContent,s,e),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&fc(i.textContent,s,e),r=["children",""+s]):Qs.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&We("scroll",i)}switch(n){case"input":rc(i),Q1(i,o,!0);break;case"textarea":rc(i),tx(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=zu)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=a.createElement(n,{is:i.is}):(e=a.createElement(n),n==="select"&&(a=e,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):e=a.createElementNS(e,n),e[ei]=t,e[cl]=i,EE(e,t,!1,!1),t.stateNode=e;e:{switch(a=c0(n,i),n){case"dialog":We("cancel",e),We("close",e),r=i;break;case"iframe":case"object":case"embed":We("load",e),r=i;break;case"video":case"audio":for(r=0;r<ys.length;r++)We(ys[r],e);r=i;break;case"source":We("error",e),r=i;break;case"img":case"image":case"link":We("error",e),We("load",e),r=i;break;case"details":We("toggle",e),r=i;break;case"input":X1(e,i),r=i0(e,i),We("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=nt({},i,{value:void 0}),We("invalid",e);break;case"textarea":ex(e,i),r=a0(e,i),We("invalid",e);break;default:r=i}l0(n,r),s=r;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?tC(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qw(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&el(e,l):typeof l=="number"&&el(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&We("scroll",e):l!=null&&jg(e,o,l,a))}switch(n){case"input":rc(e),Q1(e,i,!1);break;case"textarea":rc(e),tx(e);break;case"option":i.value!=null&&e.setAttribute("value",""+gr(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?Qo(e,!!i.multiple,o,!1):i.defaultValue!=null&&Qo(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=zu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Tt(t),null;case 6:if(e&&t.stateNode!=null)FE(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(n=Hr(dl.current),Hr(oi.current),pc(t)){if(i=t.stateNode,n=t.memoizedProps,i[ei]=t,(o=i.nodeValue!==n)&&(e=dn,e!==null))switch(e.tag){case 3:fc(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fc(i.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=t,t.stateNode=i}return Tt(t),null;case 13:if(Je(Qe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ke&&un!==null&&t.mode&1&&!(t.flags&128))jC(),fa(),t.flags|=98560,o=!1;else if(o=pc(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(J(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(J(317));o[ei]=t}else fa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Tt(t),o=!1}else Bn!==null&&(H0(Bn),Bn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Qe.current&1?xt===0&&(xt=3):Sm())),t.updateQueue!==null&&(t.flags|=4),Tt(t),null);case 4:return ha(),I0(e,t),e===null&&sl(t.stateNode.containerInfo),Tt(t),null;case 10:return sm(t.type._context),Tt(t),null;case 17:return tn(t.type)&&Nu(),Tt(t),null;case 19:if(Je(Qe),o=t.memoizedState,o===null)return Tt(t),null;if(i=(t.flags&128)!==0,a=o.rendering,a===null)if(i)Za(o,!1);else{if(xt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Zu(e),a!==null){for(t.flags|=128,Za(o,!1),i=a.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)o=n,e=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ue(Qe,Qe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ct()>ma&&(t.flags|=128,i=!0,Za(o,!1),t.lanes=4194304)}else{if(!i)if(e=Zu(a),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Za(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ke)return Tt(t),null}else 2*ct()-o.renderingStartTime>ma&&n!==1073741824&&(t.flags|=128,i=!0,Za(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ct(),t.sibling=null,n=Qe.current,Ue(Qe,i?n&1|2:n&1),t):(Tt(t),null);case 22:case 23:return Em(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?an&1073741824&&(Tt(t),t.subtreeFlags&6&&(t.flags|=8192)):Tt(t),null;case 24:return null;case 25:return null}throw Error(J(156,t.tag))}function W6(e,t){switch(im(t),t.tag){case 1:return tn(t.type)&&Nu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ha(),Je(en),Je(Bt),fm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return dm(t),null;case 13:if(Je(Qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Je(Qe),null;case 4:return ha(),null;case 10:return sm(t.type._context),null;case 22:case 23:return Em(),null;case 24:return null;default:return null}}var mc=!1,Lt=!1,q6=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Jo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){it(e,t,i)}else n.current=null}function L0(e,t,n){try{n()}catch(i){it(e,t,i)}}var Ux=!1;function Z6(e,t){if(b0=Lu,e=AC(),tm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,u=0,f=e,p=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(s=a+r),f!==o||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++c===r&&(s=a),p===o&&++u===i&&(l=a),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(y0={focusedElem:e,selectionRange:n},Lu=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,y=g.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ln(t.type,x),y);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(S){it(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return g=Ux,Ux=!1,g}function Ls(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&L0(t,n,o)}r=r.next}while(r!==i)}}function qd(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function R0(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kE(e){var t=e.alternate;t!==null&&(e.alternate=null,kE(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ei],delete t[cl],delete t[E0],delete t[A6],delete t[D6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _E(e){return e.tag===5||e.tag===3||e.tag===4}function Wx(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_E(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function B0(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zu));else if(i!==4&&(e=e.child,e!==null))for(B0(e,t,n),e=e.sibling;e!==null;)B0(e,t,n),e=e.sibling}function z0(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(z0(e,t,n),e=e.sibling;e!==null;)z0(e,t,n),e=e.sibling}var Pt=null,Rn=!1;function Ii(e,t,n){for(n=n.child;n!==null;)PE(e,t,n),n=n.sibling}function PE(e,t,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Bd,n)}catch{}switch(n.tag){case 5:Lt||Jo(n,t);case 6:var i=Pt,r=Rn;Pt=null,Ii(e,t,n),Pt=i,Rn=r,Pt!==null&&(Rn?(e=Pt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Rn?(e=Pt,n=n.stateNode,e.nodeType===8?Op(e.parentNode,n):e.nodeType===1&&Op(e,n),rl(e)):Op(Pt,n.stateNode));break;case 4:i=Pt,r=Rn,Pt=n.stateNode.containerInfo,Rn=!0,Ii(e,t,n),Pt=i,Rn=r;break;case 0:case 11:case 14:case 15:if(!Lt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&L0(n,t,a),r=r.next}while(r!==i)}Ii(e,t,n);break;case 1:if(!Lt&&(Jo(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){it(n,t,s)}Ii(e,t,n);break;case 21:Ii(e,t,n);break;case 22:n.mode&1?(Lt=(i=Lt)||n.memoizedState!==null,Ii(e,t,n),Lt=i):Ii(e,t,n);break;default:Ii(e,t,n)}}function qx(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new q6),t.forEach(function(i){var r=n3.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Mn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Pt=s.stateNode,Rn=!1;break e;case 3:Pt=s.stateNode.containerInfo,Rn=!0;break e;case 4:Pt=s.stateNode.containerInfo,Rn=!0;break e}s=s.return}if(Pt===null)throw Error(J(160));PE(o,a,r),Pt=null,Rn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){it(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)AE(t,e),t=t.sibling}function AE(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mn(t,e),Zn(e),i&4){try{Ls(3,e,e.return),qd(3,e)}catch(x){it(e,e.return,x)}try{Ls(5,e,e.return)}catch(x){it(e,e.return,x)}}break;case 1:Mn(t,e),Zn(e),i&512&&n!==null&&Jo(n,n.return);break;case 5:if(Mn(t,e),Zn(e),i&512&&n!==null&&Jo(n,n.return),e.flags&32){var r=e.stateNode;try{el(r,"")}catch(x){it(e,e.return,x)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Gw(r,o),c0(s,a);var c=c0(s,o);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?tC(r,f):u==="dangerouslySetInnerHTML"?Qw(r,f):u==="children"?el(r,f):jg(r,u,f,c)}switch(s){case"input":r0(r,o);break;case"textarea":Kw(r,o);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Qo(r,!!o.multiple,m,!1):p!==!!o.multiple&&(o.defaultValue!=null?Qo(r,!!o.multiple,o.defaultValue,!0):Qo(r,!!o.multiple,o.multiple?[]:"",!1))}r[cl]=o}catch(x){it(e,e.return,x)}}break;case 6:if(Mn(t,e),Zn(e),i&4){if(e.stateNode===null)throw Error(J(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(x){it(e,e.return,x)}}break;case 3:if(Mn(t,e),Zn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{rl(t.containerInfo)}catch(x){it(e,e.return,x)}break;case 4:Mn(t,e),Zn(e);break;case 13:Mn(t,e),Zn(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(wm=ct())),i&4&&qx(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Lt=(c=Lt)||u,Mn(t,e),Lt=c):Mn(t,e),Zn(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(ae=e,u=e.child;u!==null;){for(f=ae=u;ae!==null;){switch(p=ae,m=p.child,p.tag){case 0:case 11:case 14:case 15:Ls(4,p,p.return);break;case 1:Jo(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){i=p,n=p.return;try{t=i,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){it(i,n,x)}}break;case 5:Jo(p,p.return);break;case 22:if(p.memoizedState!==null){Jx(f);continue}}m!==null?(m.return=p,ae=m):Jx(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=eC("display",a))}catch(x){it(e,e.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){it(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mn(t,e),Zn(e),i&4&&qx(e);break;case 21:break;default:Mn(t,e),Zn(e)}}function Zn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_E(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(el(r,""),i.flags&=-33);var o=Wx(e);z0(e,o,r);break;case 3:case 4:var a=i.stateNode.containerInfo,s=Wx(e);B0(e,s,a);break;default:throw Error(J(161))}}catch(l){it(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function J6(e,t,n){ae=e,DE(e)}function DE(e,t,n){for(var i=(e.mode&1)!==0;ae!==null;){var r=ae,o=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||mc;if(!a){var s=r.alternate,l=s!==null&&s.memoizedState!==null||Lt;s=mc;var c=Lt;if(mc=a,(Lt=l)&&!c)for(ae=r;ae!==null;)a=ae,l=a.child,a.tag===22&&a.memoizedState!==null?Yx(r):l!==null?(l.return=a,ae=l):Yx(r);for(;o!==null;)ae=o,DE(o),o=o.sibling;ae=r,mc=s,Lt=c}Zx(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,ae=o):Zx(e)}}function Zx(e){for(;ae!==null;){var t=ae;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Lt||qd(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Lt)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ln(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Dx(t,o,i);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dx(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&rl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Lt||t.flags&512&&R0(t)}catch(p){it(t,t.return,p)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function Jx(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function Yx(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qd(4,t)}catch(l){it(t,n,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(l){it(t,r,l)}}var o=t.return;try{R0(t)}catch(l){it(t,o,l)}break;case 5:var a=t.return;try{R0(t)}catch(l){it(t,a,l)}}}catch(l){it(t,t.return,l)}if(t===e){ae=null;break}var s=t.sibling;if(s!==null){s.return=t.return,ae=s;break}ae=t.return}}var Y6=Math.ceil,Gu=Mi.ReactCurrentDispatcher,bm=Mi.ReactCurrentOwner,_n=Mi.ReactCurrentBatchConfig,De=0,St=null,ht=null,Dt=0,an=0,Yo=yr(0),xt=0,gl=null,to=0,Zd=0,ym=0,Rs=null,Yt=null,wm=0,ma=1/0,mi=null,Ku=!1,N0=null,cr=null,xc=!1,Yi=null,Xu=0,Bs=0,V0=null,cu=-1,uu=0;function Ht(){return De&6?ct():cu!==-1?cu:cu=ct()}function ur(e){return e.mode&1?De&2&&Dt!==0?Dt&-Dt:O6.transition!==null?(uu===0&&(uu=pC()),uu):(e=Re,e!==0||(e=window.event,e=e===void 0?16:yC(e.type)),e):1}function Hn(e,t,n,i){if(50<Bs)throw Bs=0,V0=null,Error(J(185));Tl(e,n,i),(!(De&2)||e!==St)&&(e===St&&(!(De&2)&&(Zd|=n),xt===4&&Zi(e,Dt)),nn(e,i),n===1&&De===0&&!(t.mode&1)&&(ma=ct()+500,Hd&&wr()))}function nn(e,t){var n=e.callbackNode;Ok(e,t);var i=Iu(e,e===St?Dt:0);if(i===0)n!==null&&rx(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&rx(n),t===1)e.tag===0?$6(Gx.bind(null,e)):zC(Gx.bind(null,e)),_6(function(){!(De&6)&&wr()}),n=null;else{switch(hC(i)){case 1:n=Zg;break;case 4:n=dC;break;case 16:n=Mu;break;case 536870912:n=fC;break;default:n=Mu}n=BE(n,$E.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $E(e,t){if(cu=-1,uu=0,De&6)throw Error(J(327));var n=e.callbackNode;if(ra()&&e.callbackNode!==n)return null;var i=Iu(e,e===St?Dt:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Qu(e,i);else{t=i;var r=De;De|=2;var o=TE();(St!==e||Dt!==t)&&(mi=null,ma=ct()+500,qr(e,t));do try{X6();break}catch(s){OE(e,s)}while(1);am(),Gu.current=o,De=r,ht!==null?t=0:(St=null,Dt=0,t=xt)}if(t!==0){if(t===2&&(r=h0(e),r!==0&&(i=r,t=j0(e,r))),t===1)throw n=gl,qr(e,0),Zi(e,i),nn(e,ct()),n;if(t===6)Zi(e,i);else{if(r=e.current.alternate,!(i&30)&&!G6(r)&&(t=Qu(e,i),t===2&&(o=h0(e),o!==0&&(i=o,t=j0(e,o))),t===1))throw n=gl,qr(e,0),Zi(e,i),nn(e,ct()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(J(345));case 2:Ir(e,Yt,mi);break;case 3:if(Zi(e,i),(i&130023424)===i&&(t=wm+500-ct(),10<t)){if(Iu(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){Ht(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=C0(Ir.bind(null,e,Yt,mi),t);break}Ir(e,Yt,mi);break;case 4:if(Zi(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var a=31-jn(i);o=1<<a,a=t[a],a>r&&(r=a),i&=~o}if(i=r,i=ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Y6(i/1960))-i,10<i){e.timeoutHandle=C0(Ir.bind(null,e,Yt,mi),i);break}Ir(e,Yt,mi);break;case 5:Ir(e,Yt,mi);break;default:throw Error(J(329))}}}return nn(e,ct()),e.callbackNode===n?$E.bind(null,e):null}function j0(e,t){var n=Rs;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=Qu(e,t),e!==2&&(t=Yt,Yt=n,t!==null&&H0(t)),e}function H0(e){Yt===null?Yt=e:Yt.push.apply(Yt,e)}function G6(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Wn(o(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zi(e,t){for(t&=~ym,t&=~Zd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jn(t),i=1<<n;e[n]=-1,t&=~i}}function Gx(e){if(De&6)throw Error(J(327));ra();var t=Iu(e,0);if(!(t&1))return nn(e,ct()),null;var n=Qu(e,t);if(e.tag!==0&&n===2){var i=h0(e);i!==0&&(t=i,n=j0(e,i))}if(n===1)throw n=gl,qr(e,0),Zi(e,t),nn(e,ct()),n;if(n===6)throw Error(J(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,Yt,mi),nn(e,ct()),null}function Cm(e,t){var n=De;De|=1;try{return e(t)}finally{De=n,De===0&&(ma=ct()+500,Hd&&wr())}}function no(e){Yi!==null&&Yi.tag===0&&!(De&6)&&ra();var t=De;De|=1;var n=_n.transition,i=Re;try{if(_n.transition=null,Re=1,e)return e()}finally{Re=i,_n.transition=n,De=t,!(De&6)&&wr()}}function Em(){an=Yo.current,Je(Yo)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,k6(n)),ht!==null)for(n=ht.return;n!==null;){var i=n;switch(im(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nu();break;case 3:ha(),Je(en),Je(Bt),fm();break;case 5:dm(i);break;case 4:ha();break;case 13:Je(Qe);break;case 19:Je(Qe);break;case 10:sm(i.type._context);break;case 22:case 23:Em()}n=n.return}if(St=e,ht=e=dr(e.current,null),Dt=an=t,xt=0,gl=null,ym=Zd=to=0,Yt=Rs=null,jr!==null){for(t=0;t<jr.length;t++)if(n=jr[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var a=o.next;o.next=r,i.next=a}n.pending=i}jr=null}return e}function OE(e,t){do{var n=ht;try{if(am(),au.current=Yu,Ju){for(var i=tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ju=!1}if(eo=0,Ct=gt=tt=null,Is=!1,fl=0,bm.current=null,n===null||n.return===null){xt=1,gl=t,ht=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Dt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Rx(a);if(m!==null){m.flags&=-257,Bx(m,a,s,o,t),m.mode&1&&Lx(o,c,t),t=m,l=c;var g=t.updateQueue;if(g===null){var x=new Set;x.add(l),t.updateQueue=x}else g.add(l);break e}else{if(!(t&1)){Lx(o,c,t),Sm();break e}l=Error(J(426))}}else if(Ke&&s.mode&1){var y=Rx(a);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Bx(y,a,s,o,t),rm(ga(l,s));break e}}o=l=ga(l,s),xt!==4&&(xt=2),Rs===null?Rs=[o]:Rs.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=gE(o,l,t);Ax(o,v);break e;case 1:s=l;var b=o.type,E=o.stateNode;if(!(o.flags&128)&&(typeof b.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(cr===null||!cr.has(E)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=mE(o,s,t);Ax(o,S);break e}}o=o.return}while(o!==null)}IE(n)}catch(F){t=F,ht===n&&n!==null&&(ht=n=n.return);continue}break}while(1)}function TE(){var e=Gu.current;return Gu.current=Yu,e===null?Yu:e}function Sm(){(xt===0||xt===3||xt===2)&&(xt=4),St===null||!(to&268435455)&&!(Zd&268435455)||Zi(St,Dt)}function Qu(e,t){var n=De;De|=2;var i=TE();(St!==e||Dt!==t)&&(mi=null,qr(e,t));do try{K6();break}catch(r){OE(e,r)}while(1);if(am(),De=n,Gu.current=i,ht!==null)throw Error(J(261));return St=null,Dt=0,xt}function K6(){for(;ht!==null;)ME(ht)}function X6(){for(;ht!==null&&!Ek();)ME(ht)}function ME(e){var t=RE(e.alternate,e,an);e.memoizedProps=e.pendingProps,t===null?IE(e):ht=t,bm.current=null}function IE(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=W6(n,t),n!==null){n.flags&=32767,ht=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xt=6,ht=null;return}}else if(n=U6(n,t,an),n!==null){ht=n;return}if(t=t.sibling,t!==null){ht=t;return}ht=t=e}while(t!==null);xt===0&&(xt=5)}function Ir(e,t,n){var i=Re,r=_n.transition;try{_n.transition=null,Re=1,Q6(e,t,n,i)}finally{_n.transition=r,Re=i}return null}function Q6(e,t,n,i){do ra();while(Yi!==null);if(De&6)throw Error(J(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(J(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Tk(e,o),e===St&&(ht=St=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xc||(xc=!0,BE(Mu,function(){return ra(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=_n.transition,_n.transition=null;var a=Re;Re=1;var s=De;De|=4,bm.current=null,Z6(e,n),AE(n,e),b6(y0),Lu=!!b0,y0=b0=null,e.current=n,J6(n),Sk(),De=s,Re=a,_n.transition=o}else e.current=n;if(xc&&(xc=!1,Yi=e,Xu=r),o=e.pendingLanes,o===0&&(cr=null),_k(n.stateNode),nn(e,ct()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ku)throw Ku=!1,e=N0,N0=null,e;return Xu&1&&e.tag!==0&&ra(),o=e.pendingLanes,o&1?e===V0?Bs++:(Bs=0,V0=e):Bs=0,wr(),null}function ra(){if(Yi!==null){var e=hC(Xu),t=_n.transition,n=Re;try{if(_n.transition=null,Re=16>e?16:e,Yi===null)var i=!1;else{if(e=Yi,Yi=null,Xu=0,De&6)throw Error(J(331));var r=De;for(De|=4,ae=e.current;ae!==null;){var o=ae,a=o.child;if(ae.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(ae=c;ae!==null;){var u=ae;switch(u.tag){case 0:case 11:case 15:Ls(8,u,o)}var f=u.child;if(f!==null)f.return=u,ae=f;else for(;ae!==null;){u=ae;var p=u.sibling,m=u.return;if(kE(u),u===c){ae=null;break}if(p!==null){p.return=m,ae=p;break}ae=m}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var y=x.sibling;x.sibling=null,x=y}while(x!==null)}}ae=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ae=a;else e:for(;ae!==null;){if(o=ae,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ls(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,ae=v;break e}ae=o.return}}var b=e.current;for(ae=b;ae!==null;){a=ae;var E=a.child;if(a.subtreeFlags&2064&&E!==null)E.return=a,ae=E;else e:for(a=b;ae!==null;){if(s=ae,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:qd(9,s)}}catch(F){it(s,s.return,F)}if(s===a){ae=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,ae=S;break e}ae=s.return}}if(De=r,wr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Bd,e)}catch{}i=!0}return i}finally{Re=n,_n.transition=t}}return!1}function Kx(e,t,n){t=ga(n,t),t=gE(e,t,1),e=lr(e,t,1),t=Ht(),e!==null&&(Tl(e,1,t),nn(e,t))}function it(e,t,n){if(e.tag===3)Kx(e,e,n);else for(;t!==null;){if(t.tag===3){Kx(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){e=ga(n,e),e=mE(t,e,1),t=lr(t,e,1),e=Ht(),t!==null&&(Tl(t,1,e),nn(t,e));break}}t=t.return}}function e3(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Ht(),e.pingedLanes|=e.suspendedLanes&n,St===e&&(Dt&n)===n&&(xt===4||xt===3&&(Dt&130023424)===Dt&&500>ct()-wm?qr(e,0):ym|=n),nn(e,t)}function LE(e,t){t===0&&(e.mode&1?(t=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):t=1);var n=Ht();e=Oi(e,t),e!==null&&(Tl(e,t,n),nn(e,n))}function t3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),LE(e,n)}function n3(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(t),LE(e,n)}var RE;RE=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||en.current)Kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Kt=!1,H6(e,t,n);Kt=!!(e.flags&131072)}else Kt=!1,Ke&&t.flags&1048576&&NC(t,Hu,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;lu(e,t),e=t.pendingProps;var r=da(t,Bt.current);ia(t,n),r=hm(null,t,i,e,r,n);var o=gm();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tn(i)?(o=!0,Vu(t)):o=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cm(t),r.updater=Ud,t.stateNode=r,r._reactInternals=t,A0(t,i,e,n),t=O0(null,t,i,!0,o,n)):(t.tag=0,Ke&&o&&nm(t),Vt(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(lu(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=r3(i),e=Ln(i,e),r){case 0:t=$0(null,t,i,e,n);break e;case 1:t=Vx(null,t,i,e,n);break e;case 11:t=zx(null,t,i,e,n);break e;case 14:t=Nx(null,t,i,Ln(i.type,e),n);break e}throw Error(J(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ln(i,r),$0(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ln(i,r),Vx(e,t,i,r,n);case 3:e:{if(yE(t),e===null)throw Error(J(387));i=t.pendingProps,o=t.memoizedState,r=o.element,UC(e,t),qu(t,i,null,n);var a=t.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){r=ga(Error(J(423)),t),t=jx(e,t,i,n,r);break e}else if(i!==r){r=ga(Error(J(424)),t),t=jx(e,t,i,n,r);break e}else for(un=sr(t.stateNode.containerInfo.firstChild),dn=t,Ke=!0,Bn=null,n=JC(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fa(),i===r){t=Ti(e,t,n);break e}Vt(e,t,i,n)}t=t.child}return t;case 5:return YC(t),e===null&&k0(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,a=r.children,w0(i,r)?a=null:o!==null&&w0(i,o)&&(t.flags|=32),bE(e,t),Vt(e,t,a,n),t.child;case 6:return e===null&&k0(t),null;case 13:return wE(e,t,n);case 4:return um(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=pa(t,null,i,n):Vt(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ln(i,r),zx(e,t,i,r,n);case 7:return Vt(e,t,t.pendingProps,n),t.child;case 8:return Vt(e,t,t.pendingProps.children,n),t.child;case 12:return Vt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,o=t.memoizedProps,a=r.value,Ue(Uu,i._currentValue),i._currentValue=a,o!==null)if(Wn(o.value,a)){if(o.children===r.children&&!en.current){t=Ti(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=ki(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_0(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(J(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),_0(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Vt(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,ia(t,n),r=An(r),i=i(r),t.flags|=1,Vt(e,t,i,n),t.child;case 14:return i=t.type,r=Ln(i,t.pendingProps),r=Ln(i.type,r),Nx(e,t,i,r,n);case 15:return xE(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ln(i,r),lu(e,t),t.tag=1,tn(i)?(e=!0,Vu(t)):e=!1,ia(t,n),qC(t,i,r),A0(t,i,r,n),O0(null,t,i,!0,e,n);case 19:return CE(e,t,n);case 22:return vE(e,t,n)}throw Error(J(156,t.tag))};function BE(e,t){return uC(e,t)}function i3(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,t,n,i){return new i3(e,t,n,i)}function Fm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function r3(e){if(typeof e=="function")return Fm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ug)return 11;if(e===Wg)return 14}return 2}function dr(e,t){var n=e.alternate;return n===null?(n=kn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function du(e,t,n,i,r,o){var a=2;if(i=e,typeof e=="function")Fm(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case zo:return Zr(n.children,r,o,t);case Hg:a=8,r|=8;break;case Qh:return e=kn(12,n,t,r|2),e.elementType=Qh,e.lanes=o,e;case e0:return e=kn(13,n,t,r),e.elementType=e0,e.lanes=o,e;case t0:return e=kn(19,n,t,r),e.elementType=t0,e.lanes=o,e;case Zw:return Jd(n,r,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ww:a=10;break e;case qw:a=9;break e;case Ug:a=11;break e;case Wg:a=14;break e;case Ui:a=16,i=null;break e}throw Error(J(130,e==null?e:typeof e,""))}return t=kn(a,n,t,r),t.elementType=e,t.type=i,t.lanes=o,t}function Zr(e,t,n,i){return e=kn(7,e,i,t),e.lanes=n,e}function Jd(e,t,n,i){return e=kn(22,e,i,t),e.elementType=Zw,e.lanes=n,e.stateNode={isHidden:!1},e}function Np(e,t,n){return e=kn(6,e,null,t),e.lanes=n,e}function Vp(e,t,n){return t=kn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function o3(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wp(0),this.expirationTimes=wp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wp(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function km(e,t,n,i,r,o,a,s,l){return e=new o3(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=kn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cm(o),e}function a3(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bo,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function zE(e){if(!e)return mr;e=e._reactInternals;e:{if(mo(e)!==e||e.tag!==1)throw Error(J(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(J(171))}if(e.tag===1){var n=e.type;if(tn(n))return BC(e,n,t)}return t}function NE(e,t,n,i,r,o,a,s,l){return e=km(n,i,!0,e,r,o,a,s,l),e.context=zE(null),n=e.current,i=Ht(),r=ur(n),o=ki(i,r),o.callback=t??null,lr(n,o,r),e.current.lanes=r,Tl(e,r,i),nn(e,i),e}function Yd(e,t,n,i){var r=t.current,o=Ht(),a=ur(r);return n=zE(n),t.context===null?t.context=n:t.pendingContext=n,t=ki(o,a),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=lr(r,t,a),e!==null&&(Hn(e,r,a,o),ou(e,r,a)),a}function ed(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _m(e,t){Xx(e,t),(e=e.alternate)&&Xx(e,t)}function s3(){return null}var VE=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pm(e){this._internalRoot=e}Gd.prototype.render=Pm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));Yd(e,t,null,null)};Gd.prototype.unmount=Pm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;no(function(){Yd(null,e,null,null)}),t[$i]=null}};function Gd(e){this._internalRoot=e}Gd.prototype.unstable_scheduleHydration=function(e){if(e){var t=xC();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qi.length&&t!==0&&t<qi[n].priority;n++);qi.splice(n,0,e),n===0&&bC(e)}};function Am(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qx(){}function l3(e,t,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=ed(a);o.call(c)}}var a=NE(t,i,e,0,null,!1,!1,"",Qx);return e._reactRootContainer=a,e[$i]=a.current,sl(e.nodeType===8?e.parentNode:e),no(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var c=ed(l);s.call(c)}}var l=km(e,0,!1,null,null,!1,!1,"",Qx);return e._reactRootContainer=l,e[$i]=l.current,sl(e.nodeType===8?e.parentNode:e),no(function(){Yd(t,l,n,i)}),l}function Xd(e,t,n,i,r){var o=n._reactRootContainer;if(o){var a=o;if(typeof r=="function"){var s=r;r=function(){var l=ed(a);s.call(l)}}Yd(t,a,e,r)}else a=l3(n,t,e,r,i);return ed(a)}gC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bs(t.pendingLanes);n!==0&&(Jg(t,n|1),nn(t,ct()),!(De&6)&&(ma=ct()+500,wr()))}break;case 13:no(function(){var i=Oi(e,1);if(i!==null){var r=Ht();Hn(i,e,1,r)}}),_m(e,1)}};Yg=function(e){if(e.tag===13){var t=Oi(e,134217728);if(t!==null){var n=Ht();Hn(t,e,134217728,n)}_m(e,134217728)}};mC=function(e){if(e.tag===13){var t=ur(e),n=Oi(e,t);if(n!==null){var i=Ht();Hn(n,e,t,i)}_m(e,t)}};xC=function(){return Re};vC=function(e,t){var n=Re;try{return Re=e,t()}finally{Re=n}};d0=function(e,t,n){switch(t){case"input":if(r0(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=jd(i);if(!r)throw Error(J(90));Yw(i),r0(i,r)}}}break;case"textarea":Kw(e,n);break;case"select":t=n.value,t!=null&&Qo(e,!!n.multiple,t,!1)}};rC=Cm;oC=no;var c3={usingClientEntryPoint:!1,Events:[Il,Ho,jd,nC,iC,Cm]},Ja={findFiberByHostInstance:Vr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},u3={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lC(e),e===null?null:e.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||s3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Bd=vc.inject(u3),ri=vc}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c3;gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Am(t))throw Error(J(200));return a3(e,t,null,n)};gn.createRoot=function(e,t){if(!Am(e))throw Error(J(299));var n=!1,i="",r=VE;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=km(e,1,!1,null,null,n,!1,i,r),e[$i]=t.current,sl(e.nodeType===8?e.parentNode:e),new Pm(t)};gn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=lC(t),e=e===null?null:e.stateNode,e};gn.flushSync=function(e){return no(e)};gn.hydrate=function(e,t,n){if(!Kd(t))throw Error(J(200));return Xd(null,e,t,!0,n)};gn.hydrateRoot=function(e,t,n){if(!Am(e))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",a=VE;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=NE(t,null,e,1,n??null,r,!1,o,a),e[$i]=t.current,sl(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Gd(t)};gn.render=function(e,t,n){if(!Kd(t))throw Error(J(200));return Xd(null,e,t,!1,n)};gn.unmountComponentAtNode=function(e){if(!Kd(e))throw Error(J(40));return e._reactRootContainer?(no(function(){Xd(null,null,e,!1,function(){e._reactRootContainer=null,e[$i]=null})}),!0):!1};gn.unstable_batchedUpdates=Cm;gn.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Kd(n))throw Error(J(200));if(e==null||e._reactInternals===void 0)throw Error(J(38));return Xd(e,t,n,!1,i)};gn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=gn})(sk);var ev=Xs;Gh.createRoot=ev.createRoot,Gh.hydrateRoot=ev.hydrateRoot;var td={},d3={get exports(){return td},set exports(e){td=e}},Be={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm=Symbol.for("react.element"),$m=Symbol.for("react.portal"),Qd=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),nf=Symbol.for("react.provider"),rf=Symbol.for("react.context"),f3=Symbol.for("react.server_context"),of=Symbol.for("react.forward_ref"),af=Symbol.for("react.suspense"),sf=Symbol.for("react.suspense_list"),lf=Symbol.for("react.memo"),cf=Symbol.for("react.lazy"),p3=Symbol.for("react.offscreen"),jE;jE=Symbol.for("react.module.reference");function $n(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dm:switch(e=e.type,e){case Qd:case tf:case ef:case af:case sf:return e;default:switch(e=e&&e.$$typeof,e){case f3:case rf:case of:case cf:case lf:case nf:return e;default:return t}}case $m:return t}}}Be.ContextConsumer=rf;Be.ContextProvider=nf;Be.Element=Dm;Be.ForwardRef=of;Be.Fragment=Qd;Be.Lazy=cf;Be.Memo=lf;Be.Portal=$m;Be.Profiler=tf;Be.StrictMode=ef;Be.Suspense=af;Be.SuspenseList=sf;Be.isAsyncMode=function(){return!1};Be.isConcurrentMode=function(){return!1};Be.isContextConsumer=function(e){return $n(e)===rf};Be.isContextProvider=function(e){return $n(e)===nf};Be.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dm};Be.isForwardRef=function(e){return $n(e)===of};Be.isFragment=function(e){return $n(e)===Qd};Be.isLazy=function(e){return $n(e)===cf};Be.isMemo=function(e){return $n(e)===lf};Be.isPortal=function(e){return $n(e)===$m};Be.isProfiler=function(e){return $n(e)===tf};Be.isStrictMode=function(e){return $n(e)===ef};Be.isSuspense=function(e){return $n(e)===af};Be.isSuspenseList=function(e){return $n(e)===sf};Be.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Qd||e===tf||e===ef||e===af||e===sf||e===p3||typeof e=="object"&&e!==null&&(e.$$typeof===cf||e.$$typeof===lf||e.$$typeof===nf||e.$$typeof===rf||e.$$typeof===of||e.$$typeof===jE||e.getModuleId!==void 0)};Be.typeOf=$n;(function(e){e.exports=Be})(d3);function h3(e){function t(U,Z,Q,re,M){for(var pe=0,ee=0,Ie=0,ke=0,Ee,me,dt=0,wt=0,Se,O=Se=Ee=0,I=0,V=0,se=0,K=0,Y=Q.length,ce=Y-1,_e,oe="",Ne="",Na="",Fr="",yn;I<Y;){if(me=Q.charCodeAt(I),I===ce&&ee+ke+Ie+pe!==0&&(ee!==0&&(me=ee===47?10:47),ke=Ie=pe=0,Y++,ce++),ee+ke+Ie+pe===0){if(I===ce&&(0<V&&(oe=oe.replace(p,"")),0<oe.trim().length)){switch(me){case 32:case 9:case 59:case 13:case 10:break;default:oe+=Q.charAt(I)}me=59}switch(me){case 123:for(oe=oe.trim(),Ee=oe.charCodeAt(0),Se=1,K=++I;I<Y;){switch(me=Q.charCodeAt(I)){case 123:Se++;break;case 125:Se--;break;case 47:switch(me=Q.charCodeAt(I+1)){case 42:case 47:e:{for(O=I+1;O<ce;++O)switch(Q.charCodeAt(O)){case 47:if(me===42&&Q.charCodeAt(O-1)===42&&I+2!==O){I=O+1;break e}break;case 10:if(me===47){I=O+1;break e}}I=O}}break;case 91:me++;case 40:me++;case 34:case 39:for(;I++<ce&&Q.charCodeAt(I)!==me;);}if(Se===0)break;I++}switch(Se=Q.substring(K,I),Ee===0&&(Ee=(oe=oe.replace(f,"").trim()).charCodeAt(0)),Ee){case 64:switch(0<V&&(oe=oe.replace(p,"")),me=oe.charCodeAt(1),me){case 100:case 109:case 115:case 45:V=Z;break;default:V=q}if(Se=t(Z,V,Se,me,M+1),K=Se.length,0<N&&(V=n(q,oe,se),yn=s(3,Se,V,Z,j,L,K,me,M,re),oe=V.join(""),yn!==void 0&&(K=(Se=yn.trim()).length)===0&&(me=0,Se="")),0<K)switch(me){case 115:oe=oe.replace(P,a);case 100:case 109:case 45:Se=oe+"{"+Se+"}";break;case 107:oe=oe.replace(b,"$1 $2"),Se=oe+"{"+Se+"}",Se=z===1||z===2&&o("@"+Se,3)?"@-webkit-"+Se+"@"+Se:"@"+Se;break;default:Se=oe+Se,re===112&&(Se=(Ne+=Se,""))}else Se="";break;default:Se=t(Z,n(Z,oe,se),Se,re,M+1)}Na+=Se,Se=se=V=O=Ee=0,oe="",me=Q.charCodeAt(++I);break;case 125:case 59:if(oe=(0<V?oe.replace(p,""):oe).trim(),1<(K=oe.length))switch(O===0&&(Ee=oe.charCodeAt(0),Ee===45||96<Ee&&123>Ee)&&(K=(oe=oe.replace(" ",":")).length),0<N&&(yn=s(1,oe,Z,U,j,L,Ne.length,re,M,re))!==void 0&&(K=(oe=yn.trim()).length)===0&&(oe="\0\0"),Ee=oe.charCodeAt(0),me=oe.charCodeAt(1),Ee){case 0:break;case 64:if(me===105||me===99){Fr+=oe+Q.charAt(I);break}default:oe.charCodeAt(K-1)!==58&&(Ne+=r(oe,Ee,me,oe.charCodeAt(2)))}se=V=O=Ee=0,oe="",me=Q.charCodeAt(++I)}}switch(me){case 13:case 10:ee===47?ee=0:1+Ee===0&&re!==107&&0<oe.length&&(V=1,oe+="\0"),0<N*X&&s(0,oe,Z,U,j,L,Ne.length,re,M,re),L=1,j++;break;case 59:case 125:if(ee+ke+Ie+pe===0){L++;break}default:switch(L++,_e=Q.charAt(I),me){case 9:case 32:if(ke+pe+ee===0)switch(dt){case 44:case 58:case 9:case 32:_e="";break;default:me!==32&&(_e=" ")}break;case 0:_e="\\0";break;case 12:_e="\\f";break;case 11:_e="\\v";break;case 38:ke+ee+pe===0&&(V=se=1,_e="\f"+_e);break;case 108:if(ke+ee+pe+B===0&&0<O)switch(I-O){case 2:dt===112&&Q.charCodeAt(I-3)===58&&(B=dt);case 8:wt===111&&(B=wt)}break;case 58:ke+ee+pe===0&&(O=I);break;case 44:ee+Ie+ke+pe===0&&(V=1,_e+="\r");break;case 34:case 39:ee===0&&(ke=ke===me?0:ke===0?me:ke);break;case 91:ke+ee+Ie===0&&pe++;break;case 93:ke+ee+Ie===0&&pe--;break;case 41:ke+ee+pe===0&&Ie--;break;case 40:if(ke+ee+pe===0){if(Ee===0)switch(2*dt+3*wt){case 533:break;default:Ee=1}Ie++}break;case 64:ee+Ie+ke+pe+O+Se===0&&(Se=1);break;case 42:case 47:if(!(0<ke+pe+Ie))switch(ee){case 0:switch(2*me+3*Q.charCodeAt(I+1)){case 235:ee=47;break;case 220:K=I,ee=42}break;case 42:me===47&&dt===42&&K+2!==I&&(Q.charCodeAt(K+2)===33&&(Ne+=Q.substring(K,I+1)),_e="",ee=0)}}ee===0&&(oe+=_e)}wt=dt,dt=me,I++}if(K=Ne.length,0<K){if(V=Z,0<N&&(yn=s(2,Ne,V,U,j,L,K,re,M,re),yn!==void 0&&(Ne=yn).length===0))return Fr+Ne+Na;if(Ne=V.join(",")+"{"+Ne+"}",z*B!==0){switch(z!==2||o(Ne,2)||(B=0),B){case 111:Ne=Ne.replace(S,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(E,"::-webkit-input-$1")+Ne.replace(E,"::-moz-$1")+Ne.replace(E,":-ms-input-$1")+Ne}B=0}}return Fr+Ne+Na}function n(U,Z,Q){var re=Z.trim().split(y);Z=re;var M=re.length,pe=U.length;switch(pe){case 0:case 1:var ee=0;for(U=pe===0?"":U[0]+" ";ee<M;++ee)Z[ee]=i(U,Z[ee],Q).trim();break;default:var Ie=ee=0;for(Z=[];ee<M;++ee)for(var ke=0;ke<pe;++ke)Z[Ie++]=i(U[ke]+" ",re[ee],Q).trim()}return Z}function i(U,Z,Q){var re=Z.charCodeAt(0);switch(33>re&&(re=(Z=Z.trim()).charCodeAt(0)),re){case 38:return Z.replace(v,"$1"+U.trim());case 58:return U.trim()+Z.replace(v,"$1"+U.trim());default:if(0<1*Q&&0<Z.indexOf("\f"))return Z.replace(v,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+Z}function r(U,Z,Q,re){var M=U+";",pe=2*Z+3*Q+4*re;if(pe===944){U=M.indexOf(":",9)+1;var ee=M.substring(U,M.length-1).trim();return ee=M.substring(0,U).trim()+ee+";",z===1||z===2&&o(ee,1)?"-webkit-"+ee+ee:ee}if(z===0||z===2&&!o(M,1))return M;switch(pe){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(R,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return ee=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+ee+"-webkit-"+M+"-ms-flex-pack"+ee+M;case 1005:return g.test(M)?M.replace(m,":-webkit-")+M.replace(m,":-moz-")+M:M;case 1e3:switch(ee=M.substring(13).trim(),Z=ee.indexOf("-")+1,ee.charCodeAt(0)+ee.charCodeAt(Z)){case 226:ee=M.replace(F,"tb");break;case 232:ee=M.replace(F,"tb-rl");break;case 220:ee=M.replace(F,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+ee+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(Z=(M=U).length-10,ee=(M.charCodeAt(Z)===33?M.substring(0,Z):M).substring(U.indexOf(":",7)+1).trim(),pe=ee.charCodeAt(0)+(ee.charCodeAt(7)|0)){case 203:if(111>ee.charCodeAt(8))break;case 115:M=M.replace(ee,"-webkit-"+ee)+";"+M;break;case 207:case 102:M=M.replace(ee,"-webkit-"+(102<pe?"inline-":"")+"box")+";"+M.replace(ee,"-webkit-"+ee)+";"+M.replace(ee,"-ms-"+ee+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return ee=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+ee+"-ms-flex-"+ee+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(_,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(_,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if(T.test(U)===!0)return(ee=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?r(U.replace("stretch","fill-available"),Z,Q,re).replace(":fill-available",":stretch"):M.replace(ee,"-webkit-"+ee)+M.replace(ee,"-moz-"+ee.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,Q+re===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+M}return M}function o(U,Z){var Q=U.indexOf(Z===1?":":"{"),re=U.substring(0,Z!==3?Q:10);return Q=U.substring(Q+1,U.length-1),W(Z!==2?re:re.replace(D,"$1"),Q,Z)}function a(U,Z){var Q=r(Z,Z.charCodeAt(0),Z.charCodeAt(1),Z.charCodeAt(2));return Q!==Z+";"?Q.replace(k," or ($1)").substring(4):"("+Z+")"}function s(U,Z,Q,re,M,pe,ee,Ie,ke,Ee){for(var me=0,dt=Z,wt;me<N;++me)switch(wt=G[me].call(u,U,dt,Q,re,M,pe,ee,Ie,ke,Ee)){case void 0:case!1:case!0:case null:break;default:dt=wt}if(dt!==Z)return dt}function l(U){switch(U){case void 0:case null:N=G.length=0;break;default:if(typeof U=="function")G[N++]=U;else if(typeof U=="object")for(var Z=0,Q=U.length;Z<Q;++Z)l(U[Z]);else X=!!U|0}return l}function c(U){return U=U.prefix,U!==void 0&&(W=null,U?typeof U!="function"?z=1:(z=2,W=U):z=0),c}function u(U,Z){var Q=U;if(33>Q.charCodeAt(0)&&(Q=Q.trim()),ue=Q,Q=[ue],0<N){var re=s(-1,Z,Q,Q,j,L,0,0,0,0);re!==void 0&&typeof re=="string"&&(Z=re)}var M=t(q,Q,Z,0,0);return 0<N&&(re=s(-2,M,Q,Q,j,L,M.length,0,0,0),re!==void 0&&(M=re)),ue="",B=0,L=j=1,M}var f=/^\0+/g,p=/[\0\r\f]/g,m=/: */g,g=/zoo|gra/,x=/([,: ])(transform)/g,y=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,E=/::(place)/g,S=/:(read-only)/g,F=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,_=/-self|flex-/g,D=/[^]*?(:[rp][el]a[\w-]+)[^]*/,T=/stretch|:\s*\w+\-(?:conte|avail)/,R=/([^-])(image-set\()/,L=1,j=1,B=0,z=1,q=[],G=[],N=0,W=null,X=0,ue="";return u.use=l,u.set=c,e!==void 0&&c(e),u}var g3={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function HE(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var m3=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,tv=HE(function(e){return m3.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),U0={},x3={get exports(){return U0},set exports(e){U0=e}},ze={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kt=typeof Symbol=="function"&&Symbol.for,Om=kt?Symbol.for("react.element"):60103,Tm=kt?Symbol.for("react.portal"):60106,uf=kt?Symbol.for("react.fragment"):60107,df=kt?Symbol.for("react.strict_mode"):60108,ff=kt?Symbol.for("react.profiler"):60114,pf=kt?Symbol.for("react.provider"):60109,hf=kt?Symbol.for("react.context"):60110,Mm=kt?Symbol.for("react.async_mode"):60111,gf=kt?Symbol.for("react.concurrent_mode"):60111,mf=kt?Symbol.for("react.forward_ref"):60112,xf=kt?Symbol.for("react.suspense"):60113,v3=kt?Symbol.for("react.suspense_list"):60120,vf=kt?Symbol.for("react.memo"):60115,bf=kt?Symbol.for("react.lazy"):60116,b3=kt?Symbol.for("react.block"):60121,y3=kt?Symbol.for("react.fundamental"):60117,w3=kt?Symbol.for("react.responder"):60118,C3=kt?Symbol.for("react.scope"):60119;function xn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Om:switch(e=e.type,e){case Mm:case gf:case uf:case ff:case df:case xf:return e;default:switch(e=e&&e.$$typeof,e){case hf:case mf:case bf:case vf:case pf:return e;default:return t}}case Tm:return t}}}function UE(e){return xn(e)===gf}ze.AsyncMode=Mm;ze.ConcurrentMode=gf;ze.ContextConsumer=hf;ze.ContextProvider=pf;ze.Element=Om;ze.ForwardRef=mf;ze.Fragment=uf;ze.Lazy=bf;ze.Memo=vf;ze.Portal=Tm;ze.Profiler=ff;ze.StrictMode=df;ze.Suspense=xf;ze.isAsyncMode=function(e){return UE(e)||xn(e)===Mm};ze.isConcurrentMode=UE;ze.isContextConsumer=function(e){return xn(e)===hf};ze.isContextProvider=function(e){return xn(e)===pf};ze.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Om};ze.isForwardRef=function(e){return xn(e)===mf};ze.isFragment=function(e){return xn(e)===uf};ze.isLazy=function(e){return xn(e)===bf};ze.isMemo=function(e){return xn(e)===vf};ze.isPortal=function(e){return xn(e)===Tm};ze.isProfiler=function(e){return xn(e)===ff};ze.isStrictMode=function(e){return xn(e)===df};ze.isSuspense=function(e){return xn(e)===xf};ze.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===uf||e===gf||e===ff||e===df||e===xf||e===v3||typeof e=="object"&&e!==null&&(e.$$typeof===bf||e.$$typeof===vf||e.$$typeof===pf||e.$$typeof===hf||e.$$typeof===mf||e.$$typeof===y3||e.$$typeof===w3||e.$$typeof===C3||e.$$typeof===b3)};ze.typeOf=xn;(function(e){e.exports=ze})(x3);var Im=U0,E3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},S3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},WE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lm={};Lm[Im.ForwardRef]=F3;Lm[Im.Memo]=WE;function nv(e){return Im.isMemo(e)?WE:Lm[e.$$typeof]||E3}var k3=Object.defineProperty,_3=Object.getOwnPropertyNames,iv=Object.getOwnPropertySymbols,P3=Object.getOwnPropertyDescriptor,A3=Object.getPrototypeOf,rv=Object.prototype;function qE(e,t,n){if(typeof t!="string"){if(rv){var i=A3(t);i&&i!==rv&&qE(e,i,n)}var r=_3(t);iv&&(r=r.concat(iv(t)));for(var o=nv(e),a=nv(t),s=0;s<r.length;++s){var l=r[s];if(!S3[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var c=P3(t,l);try{k3(e,l,c)}catch{}}}}return e}var D3=qE;function Nn(){return(Nn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var ov=function(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n},W0=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!td.typeOf(e)},nd=Object.freeze([]),fr=Object.freeze({});function xa(e){return typeof e=="function"}function av(e){return e.displayName||e.name||"Component"}function Rm(e){return e&&typeof e.styledComponentId=="string"}var va=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Bm=typeof window<"u"&&"HTMLElement"in window,$3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),O3={};function io(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var T3=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var i=0,r=0;r<n;r++)i+=this.groupSizes[r];return i},t.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,a=o;n>=a;)(a<<=1)<0&&io(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),c=0,u=i.length;c<u;c++)this.tag.insertRule(l,i[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],r=this.indexOfGroup(n),o=r+i;this.groupSizes[n]=0;for(var a=r;a<o;a++)this.tag.deleteRule(r)}},t.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var r=this.groupSizes[n],o=this.indexOfGroup(n),a=o+r,s=o;s<a;s++)i+=this.tag.getRule(s)+`/*!sc*/
`;return i},e}(),fu=new Map,id=new Map,zs=1,bc=function(e){if(fu.has(e))return fu.get(e);for(;id.has(zs);)zs++;var t=zs++;return fu.set(e,t),id.set(t,e),t},M3=function(e){return id.get(e)},I3=function(e,t){t>=zs&&(zs=t+1),fu.set(e,t),id.set(t,e)},L3="style["+va+'][data-styled-version="5.3.9"]',R3=new RegExp("^"+va+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),B3=function(e,t,n){for(var i,r=n.split(","),o=0,a=r.length;o<a;o++)(i=r[o])&&e.registerName(t,i)},z3=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),i=[],r=0,o=n.length;r<o;r++){var a=n[r].trim();if(a){var s=a.match(R3);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(I3(c,l),B3(e,c,s[3]),e.getTag().insertRules(l,i)),i.length=0}else i.push(a)}}},N3=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},ZE=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(s){for(var l=s.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(va))return u}}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(va,"active"),i.setAttribute("data-styled-version","5.3.9");var a=N3();return a&&i.setAttribute("nonce",a),n.insertBefore(i,o),i},V3=function(){function e(n){var i=this.element=ZE(n);i.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===r)return l}io(17)}(i),this.length=0}var t=e.prototype;return t.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var i=this.sheet.cssRules[n];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),j3=function(){function e(n){var i=this.element=ZE(n);this.nodes=i.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,i){if(n<=this.length&&n>=0){var r=document.createTextNode(i),o=this.nodes[n];return this.element.insertBefore(r,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),H3=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),sv=Bm,U3={isServer:!Bm,useCSSOMInjection:!$3},rd=function(){function e(n,i,r){n===void 0&&(n=fr),i===void 0&&(i={}),this.options=Nn({},U3,{},n),this.gs=i,this.names=new Map(r),this.server=!!n.isServer,!this.server&&Bm&&sv&&(sv=!1,function(o){for(var a=document.querySelectorAll(L3),s=0,l=a.length;s<l;s++){var c=a[s];c&&c.getAttribute(va)!=="active"&&(z3(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return bc(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new e(Nn({},this.options,{},n),this.gs,i&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(i=this.options).isServer,o=i.useCSSOMInjection,a=i.target,n=r?new H3(a):o?new V3(a):new j3(a),new T3(n)));var n,i,r,o,a},t.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},t.registerName=function(n,i){if(bc(n),this.names.has(n))this.names.get(n).add(i);else{var r=new Set;r.add(i),this.names.set(n,r)}},t.insertRules=function(n,i,r){this.registerName(n,i),this.getTag().insertRules(bc(n),r)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(bc(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var i=n.getTag(),r=i.length,o="",a=0;a<r;a++){var s=M3(a);if(s!==void 0){var l=n.names.get(s),c=i.getGroup(a);if(l&&c&&l.size){var u=va+".g"+a+'[id="'+s+'"]',f="";l!==void 0&&l.forEach(function(p){p.length>0&&(f+=p+",")}),o+=""+c+u+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),W3=/(a)(d)/gi,lv=function(e){return String.fromCharCode(e+(e>25?39:97))};function q0(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=lv(t%52)+n;return(lv(t%52)+n).replace(W3,"$1-$2")}var Go=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},JE=function(e){return Go(5381,e)};function YE(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xa(n)&&!Rm(n))return!1}return!0}var q3=JE("5.3.9"),Z3=function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&YE(t),this.componentId=n,this.baseHash=Go(q3,n),this.baseStyle=i,rd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var a=ro(this.rules,t,n,i).join(""),s=q0(Go(this.baseHash,a)>>>0);if(!n.hasNameForId(r,s)){var l=i(a,"."+s,void 0,r);n.insertRules(r,s,l)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=Go(this.baseHash,i.hash),f="",p=0;p<c;p++){var m=this.rules[p];if(typeof m=="string")f+=m;else if(m){var g=ro(m,t,n,i),x=Array.isArray(g)?g.join(""):g;u=Go(u,x+p),f+=x}}if(f){var y=q0(u>>>0);if(!n.hasNameForId(r,y)){var v=i(f,"."+y,void 0,r);n.insertRules(r,y,v)}o.push(y)}}return o.join(" ")},e}(),J3=/^\s*\/\/.*$/gm,Y3=[":","[",".","#"];function G3(e){var t,n,i,r,o=e===void 0?fr:e,a=o.options,s=a===void 0?fr:a,l=o.plugins,c=l===void 0?nd:l,u=new h3(s),f=[],p=function(x){function y(v){if(v)try{x(v+"}")}catch{}}return function(v,b,E,S,F,P,k,_,D,T){switch(v){case 1:if(D===0&&b.charCodeAt(0)===64)return x(b+";"),"";break;case 2:if(_===0)return b+"/*|*/";break;case 3:switch(_){case 102:case 112:return x(E[0]+b),"";default:return b+(T===0?"/*|*/":"")}case-2:b.split("/*|*/}").forEach(y)}}}(function(x){f.push(x)}),m=function(x,y,v){return y===0&&Y3.indexOf(v[n.length])!==-1||v.match(r)?x:"."+t};function g(x,y,v,b){b===void 0&&(b="&");var E=x.replace(J3,""),S=y&&v?v+" "+y+" { "+E+" }":E;return t=b,n=y,i=new RegExp("\\"+n+"\\b","g"),r=new RegExp("(\\"+n+"\\b){2,}"),u(v||!y?"":y,S)}return u.use([].concat(c,[function(x,y,v){x===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(i,m))},p,function(x){if(x===-2){var y=f;return f=[],y}}])),g.hash=c.length?c.reduce(function(x,y){return y.name||io(15),Go(x,y.name)},5381).toString():"",g}var GE=A.createContext();GE.Consumer;var KE=A.createContext(),K3=(KE.Consumer,new rd),Z0=G3();function XE(){return C.useContext(GE)||K3}function QE(){return C.useContext(KE)||Z0}var X3=function(){function e(t,n){var i=this;this.inject=function(r,o){o===void 0&&(o=Z0);var a=i.name+o.hash;r.hasNameForId(i.id,a)||r.insertRules(i.id,a,o(i.rules,a,"@keyframes"))},this.toString=function(){return io(12,String(i.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Z0),this.name+t.hash},e}(),Q3=/([A-Z])/,e_=/([A-Z])/g,t_=/^ms-/,n_=function(e){return"-"+e.toLowerCase()};function cv(e){return Q3.test(e)?e.replace(e_,n_).replace(t_,"-ms-"):e}var uv=function(e){return e==null||e===!1||e===""};function ro(e,t,n,i){if(Array.isArray(e)){for(var r,o=[],a=0,s=e.length;a<s;a+=1)(r=ro(e[a],t,n,i))!==""&&(Array.isArray(r)?o.push.apply(o,r):o.push(r));return o}if(uv(e))return"";if(Rm(e))return"."+e.styledComponentId;if(xa(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return ro(l,t,n,i)}var c;return e instanceof X3?n?(e.inject(n,i),e.getName(i)):e:W0(e)?function u(f,p){var m,g,x=[];for(var y in f)f.hasOwnProperty(y)&&!uv(f[y])&&(Array.isArray(f[y])&&f[y].isCss||xa(f[y])?x.push(cv(y)+":",f[y],";"):W0(f[y])?x.push.apply(x,u(f[y],y)):x.push(cv(y)+": "+(m=y,(g=f[y])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||m in g3?String(g).trim():g+"px")+";"));return p?[p+" {"].concat(x,["}"]):x}(e):e.toString()}var dv=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function zm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return xa(e)||W0(e)?dv(ro(ov(nd,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:dv(ro(ov(e,n)))}var eS=function(e,t,n){return n===void 0&&(n=fr),e.theme!==n.theme&&e.theme||t||n.theme},i_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,r_=/(^-|-$)/g;function jp(e){return e.replace(i_,"-").replace(r_,"")}var tS=function(e){return q0(JE(e)>>>0)};function yc(e){return typeof e=="string"&&!0}var J0=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},o_=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function a_(e,t,n){var i=e[n];J0(t)&&J0(i)?nS(i,t):e[n]=t}function nS(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];for(var r=0,o=n;r<o.length;r++){var a=o[r];if(J0(a))for(var s in a)o_(s)&&a_(e,a[s],s)}return e}var ml=A.createContext();ml.Consumer;function s_(e){var t=C.useContext(ml),n=C.useMemo(function(){return function(i,r){if(!i)return io(14);if(xa(i)){var o=i(r);return o}return Array.isArray(i)||typeof i!="object"?io(8):r?Nn({},r,{},i):i}(e.theme,t)},[e.theme,t]);return e.children?A.createElement(ml.Provider,{value:n},e.children):null}var Hp={};function iS(e,t,n){var i=Rm(e),r=!yc(e),o=t.attrs,a=o===void 0?nd:o,s=t.componentId,l=s===void 0?function(b,E){var S=typeof b!="string"?"sc":jp(b);Hp[S]=(Hp[S]||0)+1;var F=S+"-"+tS("5.3.9"+S+Hp[S]);return E?E+"-"+F:F}(t.displayName,t.parentComponentId):s,c=t.displayName,u=c===void 0?function(b){return yc(b)?"styled."+b:"Styled("+av(b)+")"}(e):c,f=t.displayName&&t.componentId?jp(t.displayName)+"-"+t.componentId:t.componentId||l,p=i&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,m=t.shouldForwardProp;i&&e.shouldForwardProp&&(m=t.shouldForwardProp?function(b,E,S){return e.shouldForwardProp(b,E,S)&&t.shouldForwardProp(b,E,S)}:e.shouldForwardProp);var g,x=new Z3(n,f,i?e.componentStyle:void 0),y=x.isStatic&&a.length===0,v=function(b,E){return function(S,F,P,k){var _=S.attrs,D=S.componentStyle,T=S.defaultProps,R=S.foldedComponentIds,L=S.shouldForwardProp,j=S.styledComponentId,B=S.target,z=function(re,M,pe){re===void 0&&(re=fr);var ee=Nn({},M,{theme:re}),Ie={};return pe.forEach(function(ke){var Ee,me,dt,wt=ke;for(Ee in xa(wt)&&(wt=wt(ee)),wt)ee[Ee]=Ie[Ee]=Ee==="className"?(me=Ie[Ee],dt=wt[Ee],me&&dt?me+" "+dt:me||dt):wt[Ee]}),[ee,Ie]}(eS(F,C.useContext(ml),T)||fr,F,_),q=z[0],G=z[1],N=function(re,M,pe,ee){var Ie=XE(),ke=QE(),Ee=M?re.generateAndInjectStyles(fr,Ie,ke):re.generateAndInjectStyles(pe,Ie,ke);return Ee}(D,k,q),W=P,X=G.$as||F.$as||G.as||F.as||B,ue=yc(X),U=G!==F?Nn({},F,{},G):F,Z={};for(var Q in U)Q[0]!=="$"&&Q!=="as"&&(Q==="forwardedAs"?Z.as=U[Q]:(L?L(Q,tv,X):!ue||tv(Q))&&(Z[Q]=U[Q]));return F.style&&G.style!==F.style&&(Z.style=Nn({},F.style,{},G.style)),Z.className=Array.prototype.concat(R,j,N!==j?N:null,F.className,G.className).filter(Boolean).join(" "),Z.ref=W,C.createElement(X,Z)}(g,b,E,y)};return v.displayName=u,(g=A.forwardRef(v)).attrs=p,g.componentStyle=x,g.displayName=u,g.shouldForwardProp=m,g.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):nd,g.styledComponentId=f,g.target=i?e.target:e,g.withComponent=function(b){var E=t.componentId,S=function(P,k){if(P==null)return{};var _,D,T={},R=Object.keys(P);for(D=0;D<R.length;D++)_=R[D],k.indexOf(_)>=0||(T[_]=P[_]);return T}(t,["componentId"]),F=E&&E+"-"+(yc(b)?b:jp(av(b)));return iS(b,Nn({},S,{attrs:p,componentId:F}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=i?nS({},e.defaultProps,b):b}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),r&&D3(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Y0=function(e){return function t(n,i,r){if(r===void 0&&(r=fr),!td.isValidElementType(i))return io(1,String(i));var o=function(){return n(i,r,zm.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,i,Nn({},r,{},a))},o.attrs=function(a){return t(n,i,Nn({},r,{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},o}(iS,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Y0[e]=Y0(e)});var l_=function(){function e(n,i){this.rules=n,this.componentId=i,this.isStatic=YE(n),rd.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,i,r,o){var a=o(ro(this.rules,i,r,o).join(""),""),s=this.componentId+n;r.insertRules(s,s,a)},t.removeStyles=function(n,i){i.clearRules(this.componentId+n)},t.renderStyles=function(n,i,r,o){n>2&&rd.registerId(this.componentId+n),this.removeStyles(n,r),this.createStyles(n,i,r,o)},e}();function c_(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var r=zm.apply(void 0,[e].concat(n)),o="sc-global-"+tS(JSON.stringify(r)),a=new l_(r,o);function s(c){var u=XE(),f=QE(),p=C.useContext(ml),m=C.useRef(u.allocateGSInstance(o)).current;return u.server&&l(m,c,u,p,f),C.useLayoutEffect(function(){if(!u.server)return l(m,c,u,p,f),function(){return a.removeStyles(m,u)}},[m,c,u,p,f]),null}function l(c,u,f,p,m){if(a.isStatic)a.renderStyles(c,O3,f,m);else{var g=Nn({},u,{theme:eS(u,p,s.defaultProps)});a.renderStyles(c,g,f,m)}}return A.memo(s)}const h=Y0,u_=c_`

*{
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
}

body, input, button, textarea{
  outline: none;
}

img{
  max-width: 100%;
  display: block;
}

html{
  font-size: 62.5%;
}

button, a{
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover{
 filter: brightness(0.9);
}

a{
  text-decoration: none;
}
`,d_={green_sucess:"#48F041",yellow_alert:"#f9c716",orange_alert:"#FF7C33",red_error:"#e91414",purple_notification:"#AE39F6",blue_notification:"#008AEB",gray_sys1:"#BDBDBD",gray_sys2:"#A0A0A0",white_sys:"#FFFFFF",black_sys:"#000000",white_sys2:"#F5F8FB",neutral_light:"#f2f2f2",neutral_light_hover:"#ececec",neutral_Light_active:"#d7d7d7",neutral_normal:"#7D7D7D",neutral_normal_hover:"#717171",neutral_normal_active:"#646464",neutral_dark:"#5e5e5e",neutral_dark_hover:"#4b4b4b",neutral_dark_active:"#383838",neutral_darker:"#2c2c2c"};/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},xl.apply(this,arguments)}var Gi;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gi||(Gi={}));const fv="popstate";function f_(e){e===void 0&&(e={});function t(i,r){let{pathname:o,search:a,hash:s}=i.location;return G0("",{pathname:o,search:a,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:rS(r)}return h_(t,n,null,e)}function Ft(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Nm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function p_(){return Math.random().toString(36).substr(2,8)}function pv(e,t){return{usr:e.state,key:e.key,idx:t}}function G0(e,t,n,i){return n===void 0&&(n=null),xl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pa(t):t,{state:n,key:t&&t.key||i||p_()})}function rS(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Pa(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function h_(e,t,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,a=r.history,s=Gi.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(xl({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function f(){s=Gi.Pop;let y=u(),v=y==null?null:y-c;c=y,l&&l({action:s,location:x.location,delta:v})}function p(y,v){s=Gi.Push;let b=G0(x.location,y,v);n&&n(b,y),c=u()+1;let E=pv(b,c),S=x.createHref(b);try{a.pushState(E,"",S)}catch{r.location.assign(S)}o&&l&&l({action:s,location:x.location,delta:1})}function m(y,v){s=Gi.Replace;let b=G0(x.location,y,v);n&&n(b,y),c=u();let E=pv(b,c),S=x.createHref(b);a.replaceState(E,"",S),o&&l&&l({action:s,location:x.location,delta:0})}function g(y){let v=r.location.origin!=="null"?r.location.origin:r.location.href,b=typeof y=="string"?y:rS(y);return Ft(v,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,v)}let x={get action(){return s},get location(){return e(r,a)},listen(y){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(fv,f),l=y,()=>{r.removeEventListener(fv,f),l=null}},createHref(y){return t(r,y)},createURL:g,encodeLocation(y){let v=g(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:m,go(y){return a.go(y)}};return x}var hv;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hv||(hv={}));function g_(e,t,n){n===void 0&&(n="/");let i=typeof t=="string"?Pa(t):t,r=sS(i.pathname||"/",n);if(r==null)return null;let o=oS(e);m_(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=F_(o[s],P_(r));return a}function oS(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(Ft(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Jr([i,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(Ft(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),oS(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:E_(c,o.index),routesMeta:u})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))r(o,a);else for(let l of aS(o.path))r(o,a,l)}),t}function aS(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let a=aS(i.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),r&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function m_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:S_(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const x_=/^:\w+$/,v_=3,b_=2,y_=1,w_=10,C_=-2,gv=e=>e==="*";function E_(e,t){let n=e.split("/"),i=n.length;return n.some(gv)&&(i+=C_),t&&(i+=b_),n.filter(r=>!gv(r)).reduce((r,o)=>r+(x_.test(o)?v_:o===""?y_:w_),i)}function S_(e,t){return e.length===t.length&&e.slice(0,-1).every((i,r)=>i===t[r])?e[e.length-1]-t[t.length-1]:0}function F_(e,t){let{routesMeta:n}=e,i={},r="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,c=r==="/"?t:t.slice(r.length)||"/",u=k_({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!u)return null;Object.assign(i,u.params);let f=s.route;o.push({params:i,pathname:Jr([r,u.pathname]),pathnameBase:M_(Jr([r,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(r=Jr([r,u.pathnameBase]))}return o}function k_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=__(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],a=o.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:i.reduce((c,u,f)=>{if(u==="*"){let p=s[f]||"";a=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return c[u]=A_(s[f]||"",u),c},{}),pathname:o,pathnameBase:a,pattern:e}}function __(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Nm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(i.push(s),"/([^\\/]+)"));return e.endsWith("*")?(i.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),i]}function P_(e){try{return decodeURI(e)}catch(t){return Nm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function A_(e,t){try{return decodeURIComponent(e)}catch(n){return Nm(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function sS(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function D_(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:r=""}=typeof e=="string"?Pa(e):e;return{pathname:n?n.startsWith("/")?n:$_(n,t):t,search:I_(i),hash:L_(r)}}function $_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Up(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function O_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function T_(e,t,n,i){i===void 0&&(i=!1);let r;typeof e=="string"?r=Pa(e):(r=xl({},e),Ft(!r.pathname||!r.pathname.includes("?"),Up("?","pathname","search",r)),Ft(!r.pathname||!r.pathname.includes("#"),Up("#","pathname","hash",r)),Ft(!r.search||!r.search.includes("#"),Up("#","search","hash",r)));let o=e===""||r.pathname==="",a=o?"/":r.pathname,s;if(i||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=D_(r,s),c=a&&a!=="/"&&a.endsWith("/"),u=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Jr=e=>e.join("/").replace(/\/\/+/g,"/"),M_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,L_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function R_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const z_=typeof Object.is=="function"?Object.is:B_,{useState:N_,useEffect:V_,useLayoutEffect:j_,useDebugValue:H_}=Ks;function U_(e,t,n){const i=t(),[{inst:r},o]=N_({inst:{value:i,getSnapshot:t}});return j_(()=>{r.value=i,r.getSnapshot=t,Wp(r)&&o({inst:r})},[e,i,t]),V_(()=>(Wp(r)&&o({inst:r}),e(()=>{Wp(r)&&o({inst:r})})),[e]),H_(i),i}function Wp(e){const t=e.getSnapshot,n=e.value;try{const i=t();return!z_(n,i)}catch{return!0}}function W_(e,t,n){return t()}const q_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z_=!q_,J_=Z_?W_:U_;"useSyncExternalStore"in Ks&&(e=>e.useSyncExternalStore)(Ks);const lS=C.createContext(null),cS=C.createContext(null),Vm=C.createContext(null),yf=C.createContext(null),xo=C.createContext({outlet:null,matches:[]}),uS=C.createContext(null);function K0(){return K0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},K0.apply(this,arguments)}function wf(){return C.useContext(yf)!=null}function jm(){return wf()||Ft(!1),C.useContext(yf).location}function be(){wf()||Ft(!1);let{basename:e,navigator:t}=C.useContext(Vm),{matches:n}=C.useContext(xo),{pathname:i}=jm(),r=JSON.stringify(O_(n).map(s=>s.pathnameBase)),o=C.useRef(!1);return C.useEffect(()=>{o.current=!0}),C.useCallback(function(s,l){if(l===void 0&&(l={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let c=T_(s,JSON.parse(r),i,l.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Jr([e,c.pathname])),(l.replace?t.replace:t.push)(c,l.state,l)},[e,t,r,i])}const Y_=C.createContext(null);function G_(e){let t=C.useContext(xo).outlet;return t&&C.createElement(Y_.Provider,{value:e},t)}function K_(){let{matches:e}=C.useContext(xo),t=e[e.length-1];return t?t.params:{}}function X_(e,t){wf()||Ft(!1);let{navigator:n}=C.useContext(Vm),i=C.useContext(cS),{matches:r}=C.useContext(xo),o=r[r.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=jm(),c;if(t){var u;let x=typeof t=="string"?Pa(t):t;s==="/"||(u=x.pathname)!=null&&u.startsWith(s)||Ft(!1),c=x}else c=l;let f=c.pathname||"/",p=s==="/"?f:f.slice(s.length)||"/",m=g_(e,{pathname:p}),g=n8(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Jr([s,n.encodeLocation?n.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:Jr([s,n.encodeLocation?n.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),r,i||void 0);return t&&g?C.createElement(yf.Provider,{value:{location:K0({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Gi.Pop}},g):g}function Q_(){let e=a8(),t=R_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:r},n):null,o)}class e8 extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(xo.Provider,{value:this.props.routeContext},C.createElement(uS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function t8(e){let{routeContext:t,match:n,children:i}=e,r=C.useContext(lS);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(xo.Provider,{value:t},i)}function n8(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let i=e,r=n==null?void 0:n.errors;if(r!=null){let o=i.findIndex(a=>a.route.id&&(r==null?void 0:r[a.route.id]));o>=0||Ft(!1),i=i.slice(0,Math.min(i.length,o+1))}return i.reduceRight((o,a,s)=>{let l=a.route.id?r==null?void 0:r[a.route.id]:null,c=null;n&&(a.route.ErrorBoundary?c=C.createElement(a.route.ErrorBoundary,null):a.route.errorElement?c=a.route.errorElement:c=C.createElement(Q_,null));let u=t.concat(i.slice(0,s+1)),f=()=>{let p=o;return l?p=c:a.route.Component?p=C.createElement(a.route.Component,null):a.route.element&&(p=a.route.element),C.createElement(t8,{match:a,routeContext:{outlet:o,matches:u},children:p})};return n&&(a.route.ErrorBoundary||a.route.errorElement||s===0)?C.createElement(e8,{location:n.location,component:c,error:l,children:f(),routeContext:{outlet:null,matches:u}}):f()},null)}var mv;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(mv||(mv={}));var od;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(od||(od={}));function i8(e){let t=C.useContext(cS);return t||Ft(!1),t}function r8(e){let t=C.useContext(xo);return t||Ft(!1),t}function o8(e){let t=r8(),n=t.matches[t.matches.length-1];return n.route.id||Ft(!1),n.route.id}function a8(){var e;let t=C.useContext(uS),n=i8(od.UseRouteError),i=o8(od.UseRouteError);return t||((e=n.errors)==null?void 0:e[i])}function dS(e){return G_(e.context)}function je(e){Ft(!1)}function s8(e){let{basename:t="/",children:n=null,location:i,navigationType:r=Gi.Pop,navigator:o,static:a=!1}=e;wf()&&Ft(!1);let s=t.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof i=="string"&&(i=Pa(i));let{pathname:c="/",search:u="",hash:f="",state:p=null,key:m="default"}=i,g=C.useMemo(()=>{let x=sS(c,s);return x==null?null:{location:{pathname:x,search:u,hash:f,state:p,key:m},navigationType:r}},[s,c,u,f,p,m,r]);return g==null?null:C.createElement(Vm.Provider,{value:l},C.createElement(yf.Provider,{children:n,value:g}))}function l8(e){let{children:t,location:n}=e,i=C.useContext(lS),r=i&&!t?i.router.routes:X0(t);return X_(r,n)}var xv;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(xv||(xv={}));new Promise(()=>{});function X0(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(i,r)=>{if(!C.isValidElement(i))return;let o=[...t,r];if(i.type===C.Fragment){n.push.apply(n,X0(i.props.children,o));return}i.type!==je&&Ft(!1),!i.props.index||!i.props.children||Ft(!1);let a={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=X0(i.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function c8(e){let{basename:t,children:n,window:i}=e,r=C.useRef();r.current==null&&(r.current=f_({window:i,v5Compat:!0}));let o=r.current,[a,s]=C.useState({action:o.action,location:o.location});return C.useLayoutEffect(()=>o.listen(s),[o]),C.createElement(s8,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}var vv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(vv||(vv={}));var bv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bv||(bv={}));const u8="/assets/404-f13a7b33.svg",$={primaria:"#10104F",secundaria:"#08BBE9"},oo="https://api-pagueassim.stalopay.com.br/",d8=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;

`,f8=h.div`
 background: url(${u8}) no-repeat center center;
  background-size: cover;
  width: 554px;
height: 395px;
  margin-top: 50px;

  @media (max-width: 600px) {
    width: 454px;
    height: 305px;
}
`,p8=h.h2`
color:  ${$.primaria};
text-align: center;
text-shadow: 0px 15px 12px 0px rgba(0, 0, 0, 0.25);
font-family: DM Sans;
font-size: 288px;
font-weight: 700;
margin-top: 30px;

@media (max-width: 600px) {
  font-size: 188px;
margin-top: 30px;
}
`,h8=h.div`
  width: 100%;
  max-width: 43rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;

  > p {
    font-weight: 700;
    font-size: 30px;
    line-height: 3.9rem;
    color: ${({theme:e})=>e.neutral_normal};
  }

  > span {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: ${({theme:e})=>e.gray_sys2};
  }

  @media (max-width: 600px) {
    max-width: 360px;
    > p {
      font-size: 2.5rem;
    }
    > span {
      font-size: 1.6rem;
    }
  }
`,g8=h.button`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.1rem;

  color: ${e=>`${e.color}`};
  background-color: transparent;

  margin: 3.2rem 0 4rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`,m8=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  > svg {
    color: ${e=>`${e.color}`};
    font-size: 24px;
  }
`;var fS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yv=A.createContext&&A.createContext(fS),pr=globalThis&&globalThis.__assign||function(){return pr=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pr.apply(this,arguments)},x8=globalThis&&globalThis.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n};function pS(e){return e&&e.map(function(t,n){return A.createElement(t.tag,pr({key:n},t.attr),pS(t.child))})}function Aa(e){return function(t){return A.createElement(v8,pr({attr:pr({},e.attr)},t),pS(e.child))}}function v8(e){var t=function(n){var i=e.attr,r=e.size,o=e.title,a=x8(e,["attr","size","title"]),s=r||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),A.createElement("svg",pr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:l,style:pr(pr({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&A.createElement("title",null,o),e.children)};return yv!==void 0?A.createElement(yv.Consumer,null,function(n){return t(n)}):t(fS)}function Cf(e){return Aa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(e)}const b8=new Date().getFullYear(),hS={title:"Portal de Gestão",esqueceuSenha:"Esqueceu a senha?",direitosReservados:`© ${b8}. Todos os direitos reservados`},ao={placeholderEmail:"Insira seu e-mail aqui",placeholderSenha:"Insira sua senha aqui",placeholderRepita:"Repita a nova senha",placeholderNova:"Informe a nova senha"},Xt={emailInvalid:"E-mail inválido",emailRequired:"E-mail obrigatório",senhaRequired:"Senha obrigatória",senhaMin:"A senha deve ter pelo menos 6 caracteres",campoRequired:"Campo obrigatório",notMatch:"As senhas não são iguais",notMatchValue:"A senha deve ter pelo menos uma letra maiúscula, uma letra minúscula, um caractere especial e ter no mínimo 6 caracteres"},qp={paginaNaoEncontrada:"Página não encontrada",naoExiste:"A página que você está procurando não existe ou pode ter sido removida.",voltar:"Voltar"},wv={success:"Senha alterada com sucesso!",successText:"Sua senha foi alterada com sucesso, clique no botão abaixo para voltar a tela de login e acessar o portal."},Zp={alterar:"Alteração de senha",desejada:"Preencha os campos abaixo com a nova senha desejada para o usuário ",voltar:"Voltar"},Jp={voltar:"Voltar",recuperar:"Recuperação de senha",text:"Informe o e-mail cadastrado da sua conta para receber as intruções e o link para recuperar sua senha"},Yp={enviado:"E-mail enviado!",text:"O e-mail de recuperação foi enviado com sucesso para",completeText:"Em caso de não recebimento ou de continuar com problemas para efetuar o login, entre em contato com o suporte."},Gp={voltar:"Voltar",cadastrar:"Cadastar senha",text:"Preencha os campos abaixo com a senha desejada para a sua conta"},Cv={senha:"Senha cadastrada com sucesso!",text:"Sua senha foi cadastrada com sucesso, clique no botão abaixo para voltar a tela de login e acessar o portal."},vo={login:"Login",irLogin:"Ir para o Login",salvar:"Salvar",enviar:"Enviar e-mail"},Da=e=>{e("/"),localStorage.setItem("selectedItem","0")},y8=e=>{e("/recover")};function w8(){const e=be();return w(d8,{children:[d(f8,{children:d(p8,{children:"404"})}),w(h8,{children:[d("p",{children:qp.paginaNaoEncontrada}),d("span",{children:qp.naoExiste})]}),w(g8,{color:$.secundaria,onClick:()=>Da(e),children:[d(m8,{color:$.secundaria,children:d(Cf,{})}),qp.voltar]})]})}const C8=h.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`,E8=h.div`
  position: relative;
  width: 50%;
  height: 100vh;
  border-radius: 0rem 2rem 2rem 0rem;
  background-image: url(${e=>e.background});
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e=>e.colorOverlay};
    opacity: 0.9;
    z-index: 1;
    border-radius: 0rem 2rem 2rem 0rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 150px;
    border-radius: 0;

    &::after {
      border-radius: 0;
    }

    > img {
      width: 165px;
      height: 46.44px;
    }
  }
`,S8=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  margin: 0px 20px;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 0px;
    height: 100%;
    margin-top: 57px;
    gap: 60px;
  }

  > span {
    font-weight: 400;
font-size: 14px;
line-height: 24px;
color: ${({theme:e})=>e.black_sys};

  }

  @media (max-width: 600px) {
    > span {
      margin-bottom: 20px;
    }
  }
`,F8="/assets/deixanoazul-1fc35be9.png",k8="/assets/deixanoazul3-4d75e7d9.png",_8="/assets/deixanoAzulLogoAzul-70773839.png",P8="/assets/backgroundModal-96279121.png",so={backgroundLogin:F8,backModal:P8,backgroundLogo:k8,deixaNoAzul:_8};function A8(){return d(ie,{children:w(C8,{children:[d(E8,{colorOverlay:$.primaria,background:so.backgroundLogin,children:d("img",{style:{zIndex:100},src:so.backgroundLogo})}),w(S8,{children:[d(dS,{}),d("span",{children:hS.direitosReservados})]})]})})}var Rl=e=>e.type==="checkbox",Ko=e=>e instanceof Date,jt=e=>e==null;const gS=e=>typeof e=="object";var bt=e=>!jt(e)&&!Array.isArray(e)&&gS(e)&&!Ko(e),D8=e=>bt(e)&&e.target?Rl(e.target)?e.target.checked:e.target.value:e,$8=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,O8=(e,t)=>e.has($8(t)),T8=e=>{const t=e.constructor&&e.constructor.prototype;return bt(t)&&t.hasOwnProperty("isPrototypeOf")},Hm=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Lr(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Hm&&(e instanceof Blob||e instanceof FileList))&&(n||bt(e)))if(t=n?[]:{},!Array.isArray(e)&&!T8(e))t=e;else for(const i in e)t[i]=Lr(e[i]);else return e;return t}var Bl=e=>Array.isArray(e)?e.filter(Boolean):[],ft=e=>e===void 0,le=(e,t,n)=>{if(!t||!bt(e))return n;const i=Bl(t.split(/[,[\].]+?/)).reduce((r,o)=>jt(r)?r:r[o],e);return ft(i)||i===e?ft(e[t])?n:e[t]:i};const Ev={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},zn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},di={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},mS=A.createContext(null),st=()=>A.useContext(mS),$a=e=>{const{children:t,...n}=e;return A.createElement(mS.Provider,{value:n},t)};var M8=(e,t,n,i=!0)=>{const r={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(r,o,{get:()=>{const a=o;return t._proxyFormState[a]!==zn.all&&(t._proxyFormState[a]=!i||zn.all),n&&(n[a]=!0),e[a]}});return r},Cn=e=>bt(e)&&!Object.keys(e).length,I8=(e,t,n,i)=>{n(e);const{name:r,...o}=e;return Cn(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!i||zn.all))},Kp=e=>Array.isArray(e)?e:[e];function L8(e){const t=A.useRef(e);t.current=e,A.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var ni=e=>typeof e=="string",R8=(e,t,n,i,r)=>ni(e)?(i&&t.watch.add(e),le(n,e,r)):Array.isArray(e)?e.map(o=>(i&&t.watch.add(o),le(n,o))):(i&&(t.watchAll=!0),n),Um=e=>/^\w*$/.test(e),xS=e=>Bl(e.replace(/["|']|\]/g,"").split(/\.|\[/));function qe(e,t,n){let i=-1;const r=Um(t)?[t]:xS(t),o=r.length,a=o-1;for(;++i<o;){const s=r[i];let l=n;if(i!==a){const c=e[s];l=bt(c)||Array.isArray(c)?c:isNaN(+r[i+1])?{}:[]}e[s]=l,e=e[s]}return e}var vS=(e,t,n,i,r)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[i]:r||!0}}:{};const Q0=(e,t,n)=>{for(const i of n||Object.keys(e)){const r=le(e,i);if(r){const{_f:o,...a}=r;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else bt(a)&&Q0(a,t)}}};var Sv=e=>({isOnSubmit:!e||e===zn.onSubmit,isOnBlur:e===zn.onBlur,isOnChange:e===zn.onChange,isOnAll:e===zn.all,isOnTouch:e===zn.onTouched}),Fv=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length)))),B8=(e,t,n)=>{const i=Bl(le(e,n));return qe(i,"root",t[n]),qe(e,n,i),e},oa=e=>typeof e=="boolean",Wm=e=>e.type==="file",Ki=e=>typeof e=="function",ad=e=>{if(!Hm)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},pu=e=>ni(e),qm=e=>e.type==="radio",sd=e=>e instanceof RegExp;const kv={value:!1,isValid:!1},_v={value:!0,isValid:!0};var bS=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ft(e[0].attributes.value)?ft(e[0].value)||e[0].value===""?_v:{value:e[0].value,isValid:!0}:_v:kv}return kv};const Pv={isValid:!1,value:null};var yS=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Pv):Pv;function Av(e,t,n="validate"){if(pu(e)||Array.isArray(e)&&e.every(pu)||oa(e)&&!e)return{type:n,message:pu(e)?e:"",ref:t}}var ko=e=>bt(e)&&!sd(e)?e:{value:e,message:""},Dv=async(e,t,n,i,r)=>{const{ref:o,refs:a,required:s,maxLength:l,minLength:c,min:u,max:f,pattern:p,validate:m,name:g,valueAsNumber:x,mount:y,disabled:v}=e._f,b=le(t,g);if(!y||v)return{};const E=a?a[0]:o,S=L=>{i&&E.reportValidity&&(E.setCustomValidity(oa(L)?"":L||""),E.reportValidity())},F={},P=qm(o),k=Rl(o),_=P||k,D=(x||Wm(o))&&ft(o.value)&&ft(b)||ad(o)&&o.value===""||b===""||Array.isArray(b)&&!b.length,T=vS.bind(null,g,n,F),R=(L,j,B,z=di.maxLength,q=di.minLength)=>{const G=L?j:B;F[g]={type:L?z:q,message:G,ref:o,...T(L?z:q,G)}};if(r?!Array.isArray(b)||!b.length:s&&(!_&&(D||jt(b))||oa(b)&&!b||k&&!bS(a).isValid||P&&!yS(a).isValid)){const{value:L,message:j}=pu(s)?{value:!!s,message:s}:ko(s);if(L&&(F[g]={type:di.required,message:j,ref:E,...T(di.required,j)},!n))return S(j),F}if(!D&&(!jt(u)||!jt(f))){let L,j;const B=ko(f),z=ko(u);if(!jt(b)&&!isNaN(b)){const q=o.valueAsNumber||b&&+b;jt(B.value)||(L=q>B.value),jt(z.value)||(j=q<z.value)}else{const q=o.valueAsDate||new Date(b),G=X=>new Date(new Date().toDateString()+" "+X),N=o.type=="time",W=o.type=="week";ni(B.value)&&b&&(L=N?G(b)>G(B.value):W?b>B.value:q>new Date(B.value)),ni(z.value)&&b&&(j=N?G(b)<G(z.value):W?b<z.value:q<new Date(z.value))}if((L||j)&&(R(!!L,B.message,z.message,di.max,di.min),!n))return S(F[g].message),F}if((l||c)&&!D&&(ni(b)||r&&Array.isArray(b))){const L=ko(l),j=ko(c),B=!jt(L.value)&&b.length>+L.value,z=!jt(j.value)&&b.length<+j.value;if((B||z)&&(R(B,L.message,j.message),!n))return S(F[g].message),F}if(p&&!D&&ni(b)){const{value:L,message:j}=ko(p);if(sd(L)&&!b.match(L)&&(F[g]={type:di.pattern,message:j,ref:o,...T(di.pattern,j)},!n))return S(j),F}if(m){if(Ki(m)){const L=await m(b,t),j=Av(L,E);if(j&&(F[g]={...j,...T(di.validate,j.message)},!n))return S(j.message),F}else if(bt(m)){let L={};for(const j in m){if(!Cn(L)&&!n)break;const B=Av(await m[j](b,t),E,j);B&&(L={...B,...T(j,B.message)},S(B.message),n&&(F[g]=L))}if(!Cn(L)&&(F[g]={ref:E,...L},!n))return F}}return S(!0),F};function z8(e,t){const n=t.slice(0,-1).length;let i=0;for(;i<n;)e=ft(e)?i++:e[t[i++]];return e}function N8(e){for(const t in e)if(!ft(e[t]))return!1;return!0}function _t(e,t){const n=Array.isArray(t)?t:Um(t)?[t]:xS(t),i=n.length===1?e:z8(e,n),r=n.length-1,o=n[r];return i&&delete i[o],r!==0&&(bt(i)&&Cn(i)||Array.isArray(i)&&N8(i))&&_t(e,n.slice(0,-1)),e}function Xp(){let e=[];return{get observers(){return e},next:r=>{for(const o of e)o.next&&o.next(r)},subscribe:r=>(e.push(r),{unsubscribe:()=>{e=e.filter(o=>o!==r)}}),unsubscribe:()=>{e=[]}}}var ld=e=>jt(e)||!gS(e);function Ur(e,t){if(ld(e)||ld(t))return e===t;if(Ko(e)&&Ko(t))return e.getTime()===t.getTime();const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(const r of n){const o=e[r];if(!i.includes(r))return!1;if(r!=="ref"){const a=t[r];if(Ko(o)&&Ko(a)||bt(o)&&bt(a)||Array.isArray(o)&&Array.isArray(a)?!Ur(o,a):o!==a)return!1}}return!0}var wS=e=>e.type==="select-multiple",V8=e=>qm(e)||Rl(e),Qp=e=>ad(e)&&e.isConnected,CS=e=>{for(const t in e)if(Ki(e[t]))return!0;return!1};function cd(e,t={}){const n=Array.isArray(e);if(bt(e)||n)for(const i in e)Array.isArray(e[i])||bt(e[i])&&!CS(e[i])?(t[i]=Array.isArray(e[i])?[]:{},cd(e[i],t[i])):jt(e[i])||(t[i]=!0);return t}function ES(e,t,n){const i=Array.isArray(e);if(bt(e)||i)for(const r in e)Array.isArray(e[r])||bt(e[r])&&!CS(e[r])?ft(t)||ld(n[r])?n[r]=Array.isArray(e[r])?cd(e[r],[]):{...cd(e[r])}:ES(e[r],jt(t)?{}:t[r],n[r]):n[r]=!Ur(e[r],t[r]);return n}var eh=(e,t)=>ES(e,t,cd(t)),SS=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:i})=>ft(e)?e:t?e===""?NaN:e&&+e:n&&ni(e)?new Date(e):i?i(e):e;function th(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Wm(t)?t.files:qm(t)?yS(e.refs).value:wS(t)?[...t.selectedOptions].map(({value:n})=>n):Rl(t)?bS(e.refs).value:SS(ft(t.value)?e.ref.value:t.value,e)}var j8=(e,t,n,i)=>{const r={};for(const o of e){const a=le(t,o);a&&qe(r,o,a._f)}return{criteriaMode:n,names:[...e],fields:r,shouldUseNativeValidation:i}},Ya=e=>ft(e)?e:sd(e)?e.source:bt(e)?sd(e.value)?e.value.source:e.value:e,H8=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function $v(e,t,n){const i=le(e,n);if(i||Um(n))return{error:i,name:n};const r=n.split(".");for(;r.length;){const o=r.join("."),a=le(t,o),s=le(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(s&&s.type)return{name:o,error:s};r.pop()}return{name:n}}var U8=(e,t,n,i,r)=>r.isOnAll?!1:!n&&r.isOnTouch?!(t||e):(n?i.isOnBlur:r.isOnBlur)?!e:(n?i.isOnChange:r.isOnChange)?e:!0,W8=(e,t)=>!Bl(le(e,t)).length&&_t(e,t);const q8={mode:zn.onSubmit,reValidateMode:zn.onChange,shouldFocusError:!0};function Z8(e={},t){let n={...q8,...e},i={submitCount:0,isDirty:!1,isLoading:Ki(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},r={},o=bt(n.defaultValues)||bt(n.values)?Lr(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Lr(o),s={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,u=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:Xp(),array:Xp(),state:Xp()},m=e.resetOptions&&e.resetOptions.keepDirtyValues,g=Sv(n.mode),x=Sv(n.reValidateMode),y=n.criteriaMode===zn.all,v=O=>I=>{clearTimeout(u),u=setTimeout(O,I)},b=async O=>{if(f.isValid||O){const I=n.resolver?Cn((await D()).errors):await R(r,!0);I!==i.isValid&&p.state.next({isValid:I})}},E=O=>f.isValidating&&p.state.next({isValidating:O}),S=(O,I=[],V,se,K=!0,Y=!0)=>{if(se&&V){if(s.action=!0,Y&&Array.isArray(le(r,O))){const ce=V(le(r,O),se.argA,se.argB);K&&qe(r,O,ce)}if(Y&&Array.isArray(le(i.errors,O))){const ce=V(le(i.errors,O),se.argA,se.argB);K&&qe(i.errors,O,ce),W8(i.errors,O)}if(f.touchedFields&&Y&&Array.isArray(le(i.touchedFields,O))){const ce=V(le(i.touchedFields,O),se.argA,se.argB);K&&qe(i.touchedFields,O,ce)}f.dirtyFields&&(i.dirtyFields=eh(o,a)),p.state.next({name:O,isDirty:j(O,I),dirtyFields:i.dirtyFields,errors:i.errors,isValid:i.isValid})}else qe(a,O,I)},F=(O,I)=>{qe(i.errors,O,I),p.state.next({errors:i.errors})},P=(O,I,V,se)=>{const K=le(r,O);if(K){const Y=le(a,O,ft(V)?le(o,O):V);ft(Y)||se&&se.defaultChecked||I?qe(a,O,I?Y:th(K._f)):q(O,Y),s.mount&&b()}},k=(O,I,V,se,K)=>{let Y=!1,ce=!1;const _e={name:O};if(!V||se){f.isDirty&&(ce=i.isDirty,i.isDirty=_e.isDirty=j(),Y=ce!==_e.isDirty);const oe=Ur(le(o,O),I);ce=le(i.dirtyFields,O),oe?_t(i.dirtyFields,O):qe(i.dirtyFields,O,!0),_e.dirtyFields=i.dirtyFields,Y=Y||f.dirtyFields&&ce!==!oe}if(V){const oe=le(i.touchedFields,O);oe||(qe(i.touchedFields,O,V),_e.touchedFields=i.touchedFields,Y=Y||f.touchedFields&&oe!==V)}return Y&&K&&p.state.next(_e),Y?_e:{}},_=(O,I,V,se)=>{const K=le(i.errors,O),Y=f.isValid&&oa(I)&&i.isValid!==I;if(e.delayError&&V?(c=v(()=>F(O,V)),c(e.delayError)):(clearTimeout(u),c=null,V?qe(i.errors,O,V):_t(i.errors,O)),(V?!Ur(K,V):K)||!Cn(se)||Y){const ce={...se,...Y&&oa(I)?{isValid:I}:{},errors:i.errors,name:O};i={...i,...ce},p.state.next(ce)}E(!1)},D=async O=>n.resolver(a,n.context,j8(O||l.mount,r,n.criteriaMode,n.shouldUseNativeValidation)),T=async O=>{const{errors:I}=await D();if(O)for(const V of O){const se=le(I,V);se?qe(i.errors,V,se):_t(i.errors,V)}else i.errors=I;return I},R=async(O,I,V={valid:!0})=>{for(const se in O){const K=O[se];if(K){const{_f:Y,...ce}=K;if(Y){const _e=l.array.has(Y.name),oe=await Dv(K,a,y,n.shouldUseNativeValidation&&!I,_e);if(oe[Y.name]&&(V.valid=!1,I))break;!I&&(le(oe,Y.name)?_e?B8(i.errors,oe,Y.name):qe(i.errors,Y.name,oe[Y.name]):_t(i.errors,Y.name))}ce&&await R(ce,I,V)}}return V.valid},L=()=>{for(const O of l.unMount){const I=le(r,O);I&&(I._f.refs?I._f.refs.every(V=>!Qp(V)):!Qp(I._f.ref))&&M(O)}l.unMount=new Set},j=(O,I)=>(O&&I&&qe(a,O,I),!Ur(ue(),o)),B=(O,I,V)=>R8(O,l,{...s.mount?a:ft(I)?o:ni(O)?{[O]:I}:I},V,I),z=O=>Bl(le(s.mount?a:o,O,e.shouldUnregister?le(o,O,[]):[])),q=(O,I,V={})=>{const se=le(r,O);let K=I;if(se){const Y=se._f;Y&&(!Y.disabled&&qe(a,O,SS(I,Y)),K=ad(Y.ref)&&jt(I)?"":I,wS(Y.ref)?[...Y.ref.options].forEach(ce=>ce.selected=K.includes(ce.value)):Y.refs?Rl(Y.ref)?Y.refs.length>1?Y.refs.forEach(ce=>(!ce.defaultChecked||!ce.disabled)&&(ce.checked=Array.isArray(K)?!!K.find(_e=>_e===ce.value):K===ce.value)):Y.refs[0]&&(Y.refs[0].checked=!!K):Y.refs.forEach(ce=>ce.checked=ce.value===K):Wm(Y.ref)?Y.ref.value="":(Y.ref.value=K,Y.ref.type||p.values.next({name:O,values:{...a}})))}(V.shouldDirty||V.shouldTouch)&&k(O,K,V.shouldTouch,V.shouldDirty,!0),V.shouldValidate&&X(O)},G=(O,I,V)=>{for(const se in I){const K=I[se],Y=`${O}.${se}`,ce=le(r,Y);(l.array.has(O)||!ld(K)||ce&&!ce._f)&&!Ko(K)?G(Y,K,V):q(Y,K,V)}},N=(O,I,V={})=>{const se=le(r,O),K=l.array.has(O),Y=Lr(I);qe(a,O,Y),K?(p.array.next({name:O,values:{...a}}),(f.isDirty||f.dirtyFields)&&V.shouldDirty&&p.state.next({name:O,dirtyFields:eh(o,a),isDirty:j(O,Y)})):se&&!se._f&&!jt(Y)?G(O,Y,V):q(O,Y,V),Fv(O,l)&&p.state.next({...i}),p.values.next({name:O,values:{...a}}),!s.mount&&t()},W=async O=>{const I=O.target;let V=I.name,se=!0;const K=le(r,V),Y=()=>I.type?th(K._f):D8(O);if(K){let ce,_e;const oe=Y(),Ne=O.type===Ev.BLUR||O.type===Ev.FOCUS_OUT,Na=!H8(K._f)&&!n.resolver&&!le(i.errors,V)&&!K._f.deps||U8(Ne,le(i.touchedFields,V),i.isSubmitted,x,g),Fr=Fv(V,l,Ne);qe(a,V,oe),Ne?(K._f.onBlur&&K._f.onBlur(O),c&&c(0)):K._f.onChange&&K._f.onChange(O);const yn=k(V,oe,Ne,!1),TF=!Cn(yn)||Fr;if(!Ne&&p.values.next({name:V,type:O.type,values:{...a}}),Na)return f.isValid&&b(),TF&&p.state.next({name:V,...Fr?{}:yn});if(!Ne&&Fr&&p.state.next({...i}),E(!0),n.resolver){const{errors:U1}=await D([V]),MF=$v(i.errors,r,V),W1=$v(U1,r,MF.name||V);ce=W1.error,V=W1.name,_e=Cn(U1)}else ce=(await Dv(K,a,y,n.shouldUseNativeValidation))[V],se=isNaN(oe)||oe===le(a,V,oe),se&&(ce?_e=!1:f.isValid&&(_e=await R(r,!0)));se&&(K._f.deps&&X(K._f.deps),_(V,_e,ce,yn))}},X=async(O,I={})=>{let V,se;const K=Kp(O);if(E(!0),n.resolver){const Y=await T(ft(O)?O:K);V=Cn(Y),se=O?!K.some(ce=>le(Y,ce)):V}else O?(se=(await Promise.all(K.map(async Y=>{const ce=le(r,Y);return await R(ce&&ce._f?{[Y]:ce}:ce)}))).every(Boolean),!(!se&&!i.isValid)&&b()):se=V=await R(r);return p.state.next({...!ni(O)||f.isValid&&V!==i.isValid?{}:{name:O},...n.resolver||!O?{isValid:V}:{},errors:i.errors,isValidating:!1}),I.shouldFocus&&!se&&Q0(r,Y=>Y&&le(i.errors,Y),O?K:l.mount),se},ue=O=>{const I={...o,...s.mount?a:{}};return ft(O)?I:ni(O)?le(I,O):O.map(V=>le(I,V))},U=(O,I)=>({invalid:!!le((I||i).errors,O),isDirty:!!le((I||i).dirtyFields,O),isTouched:!!le((I||i).touchedFields,O),error:le((I||i).errors,O)}),Z=O=>{O&&Kp(O).forEach(I=>_t(i.errors,I)),p.state.next({errors:O?i.errors:{}})},Q=(O,I,V)=>{const se=(le(r,O,{_f:{}})._f||{}).ref;qe(i.errors,O,{...I,ref:se}),p.state.next({name:O,errors:i.errors,isValid:!1}),V&&V.shouldFocus&&se&&se.focus&&se.focus()},re=(O,I)=>Ki(O)?p.values.subscribe({next:V=>O(B(void 0,I),V)}):B(O,I,!0),M=(O,I={})=>{for(const V of O?Kp(O):l.mount)l.mount.delete(V),l.array.delete(V),I.keepValue||(_t(r,V),_t(a,V)),!I.keepError&&_t(i.errors,V),!I.keepDirty&&_t(i.dirtyFields,V),!I.keepTouched&&_t(i.touchedFields,V),!n.shouldUnregister&&!I.keepDefaultValue&&_t(o,V);p.values.next({values:{...a}}),p.state.next({...i,...I.keepDirty?{isDirty:j()}:{}}),!I.keepIsValid&&b()},pe=(O,I={})=>{let V=le(r,O);const se=oa(I.disabled);return qe(r,O,{...V||{},_f:{...V&&V._f?V._f:{ref:{name:O}},name:O,mount:!0,...I}}),l.mount.add(O),V?se&&qe(a,O,I.disabled?void 0:le(a,O,th(V._f))):P(O,!0,I.value),{...se?{disabled:I.disabled}:{},...n.shouldUseNativeValidation?{required:!!I.required,min:Ya(I.min),max:Ya(I.max),minLength:Ya(I.minLength),maxLength:Ya(I.maxLength),pattern:Ya(I.pattern)}:{},name:O,onChange:W,onBlur:W,ref:K=>{if(K){pe(O,I),V=le(r,O);const Y=ft(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,ce=V8(Y),_e=V._f.refs||[];if(ce?_e.find(oe=>oe===Y):Y===V._f.ref)return;qe(r,O,{_f:{...V._f,...ce?{refs:[..._e.filter(Qp),Y,...Array.isArray(le(o,O))?[{}]:[]],ref:{type:Y.type,name:O}}:{ref:Y}}}),P(O,!1,void 0,Y)}else V=le(r,O,{}),V._f&&(V._f.mount=!1),(n.shouldUnregister||I.shouldUnregister)&&!(O8(l.array,O)&&s.action)&&l.unMount.add(O)}}},ee=()=>n.shouldFocusError&&Q0(r,O=>O&&le(i.errors,O),l.mount),Ie=(O,I)=>async V=>{V&&(V.preventDefault&&V.preventDefault(),V.persist&&V.persist());let se=Lr(a);if(p.state.next({isSubmitting:!0}),n.resolver){const{errors:K,values:Y}=await D();i.errors=K,se=Y}else await R(r);_t(i.errors,"root"),Cn(i.errors)?(p.state.next({errors:{}}),await O(se,V)):(I&&await I({...i.errors},V),ee(),setTimeout(ee)),p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Cn(i.errors),submitCount:i.submitCount+1,errors:i.errors})},ke=(O,I={})=>{le(r,O)&&(ft(I.defaultValue)?N(O,le(o,O)):(N(O,I.defaultValue),qe(o,O,I.defaultValue)),I.keepTouched||_t(i.touchedFields,O),I.keepDirty||(_t(i.dirtyFields,O),i.isDirty=I.defaultValue?j(O,le(o,O)):j()),I.keepError||(_t(i.errors,O),f.isValid&&b()),p.state.next({...i}))},Ee=(O,I={})=>{const V=O||o,se=Lr(V),K=O&&!Cn(O)?se:o;if(I.keepDefaultValues||(o=V),!I.keepValues){if(I.keepDirtyValues||m)for(const Y of l.mount)le(i.dirtyFields,Y)?qe(K,Y,le(a,Y)):N(Y,le(K,Y));else{if(Hm&&ft(O))for(const Y of l.mount){const ce=le(r,Y);if(ce&&ce._f){const _e=Array.isArray(ce._f.refs)?ce._f.refs[0]:ce._f.ref;if(ad(_e)){const oe=_e.closest("form");if(oe){oe.reset();break}}}}r={}}a=e.shouldUnregister?I.keepDefaultValues?Lr(o):{}:se,p.array.next({values:{...K}}),p.values.next({values:{...K}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!s.mount&&t(),s.mount=!f.isValid||!!I.keepIsValid,s.watch=!!e.shouldUnregister,p.state.next({submitCount:I.keepSubmitCount?i.submitCount:0,isDirty:I.keepDirty?i.isDirty:!!(I.keepDefaultValues&&!Ur(O,o)),isSubmitted:I.keepIsSubmitted?i.isSubmitted:!1,dirtyFields:I.keepDirtyValues?i.dirtyFields:I.keepDefaultValues&&O?eh(o,O):{},touchedFields:I.keepTouched?i.touchedFields:{},errors:I.keepErrors?i.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},me=(O,I)=>Ee(Ki(O)?O(a):O,I);return{control:{register:pe,unregister:M,getFieldState:U,_executeSchema:D,_getWatch:B,_getDirty:j,_updateValid:b,_removeUnmounted:L,_updateFieldArray:S,_getFieldArray:z,_reset:Ee,_resetDefaultValues:()=>Ki(n.defaultValues)&&n.defaultValues().then(O=>{me(O,n.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:O=>{i={...i,...O}},_subjects:p,_proxyFormState:f,get _fields(){return r},get _formValues(){return a},get _state(){return s},set _state(O){s=O},get _defaultValues(){return o},get _names(){return l},set _names(O){l=O},get _formState(){return i},set _formState(O){i=O},get _options(){return n},set _options(O){n={...n,...O}}},trigger:X,register:pe,handleSubmit:Ie,watch:re,setValue:N,getValues:ue,reset:me,resetField:ke,clearErrors:Z,unregister:M,setError:Q,setFocus:(O,I={})=>{const V=le(r,O),se=V&&V._f;if(se){const K=se.refs?se.refs[0]:se.ref;K.focus&&(K.focus(),I.shouldSelect&&K.select())}},getFieldState:U}}function qt(e={}){const t=A.useRef(),[n,i]=A.useState({isDirty:!1,isValidating:!1,isLoading:Ki(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Ki(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Z8(e,()=>i(o=>({...o}))),formState:n});const r=t.current.control;return r._options=e,L8({subject:r._subjects.state,next:o=>{I8(o,r._proxyFormState,r._updateFormState,!0)&&i({...r._formState})}}),A.useEffect(()=>{e.values&&!Ur(e.values,r._defaultValues)?r._reset(e.values,r._options.resetOptions):r._resetDefaultValues()},[e.values,r]),A.useEffect(()=>{r._state.mount||(r._updateValid(),r._state.mount=!0),r._state.watch&&(r._state.watch=!1,r._subjects.state.next({...r._formState})),r._removeUnmounted()}),t.current.formState=M8(n,r),t.current}var Ov=function(e,t,n){if(e&&"reportValidity"in e){var i=le(n,t);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},FS=function(e,t){var n=function(r){var o=t.fields[r];o&&o.ref&&"reportValidity"in o.ref?Ov(o.ref,r,e):o.refs&&o.refs.forEach(function(a){return Ov(a,r,e)})};for(var i in t.fields)n(i)},J8=function(e,t){t.shouldUseNativeValidation&&FS(e,t);var n={};for(var i in e){var r=le(t.fields,i);qe(n,i,Object.assign(e[i]||{},{ref:r&&r.ref}))}return n};function Oa(e,t,n){return t===void 0&&(t={}),n===void 0&&(n={}),function(i,r,o){try{return Promise.resolve(function(a,s){try{var l=(t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](i,Object.assign({abortEarly:!1},t,{context:r}))).then(function(c){return o.shouldUseNativeValidation&&FS({},o),{values:n.raw?i:c,errors:{}}}))}catch(c){return s(c)}return l&&l.then?l.then(void 0,s):l}(0,function(a){if(!a.inner)throw a;return{values:{},errors:J8((s=a,l=!o.shouldUseNativeValidation&&o.criteriaMode==="all",(s.inner||[]).reduce(function(c,u){if(c[u.path]||(c[u.path]={message:u.message,type:u.type}),l){var f=c[u.path].types,p=f&&f[u.type];c[u.path]=vS(u.path,l,c,u.type,p?[].concat(p,u.message):u.message)}return c},{})),o)};var s,l}))}catch(a){return Promise.reject(a)}}}function bo(e){this._maxSize=e,this.clear()}bo.prototype.clear=function(){this._size=0,this._values=Object.create(null)};bo.prototype.get=function(e){return this._values[e]};bo.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var Y8=/[^.^\]^[]+|(?=\[\]|\.\.)/g,kS=/^\d+$/,G8=/^\d/,K8=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,X8=/^\s*(['"]?)(.*?)(\1)\s*$/,Zm=512,Tv=new bo(Zm),Mv=new bo(Zm),Iv=new bo(Zm),Yr={Cache:bo,split:eg,normalizePath:nh,setter:function(e){var t=nh(e);return Mv.get(e)||Mv.set(e,function(i,r){for(var o=0,a=t.length,s=i;o<a-1;){var l=t[o];if(l==="__proto__"||l==="constructor"||l==="prototype")return i;s=s[t[o++]]}s[t[o]]=r})},getter:function(e,t){var n=nh(e);return Iv.get(e)||Iv.set(e,function(r){for(var o=0,a=n.length;o<a;)if(r!=null||!t)r=r[n[o++]];else return;return r})},join:function(e){return e.reduce(function(t,n){return t+(Jm(n)||kS.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){Q8(Array.isArray(e)?e:eg(e),t,n)}};function nh(e){return Tv.get(e)||Tv.set(e,eg(e).map(function(t){return t.replace(X8,"$2")}))}function eg(e){return e.match(Y8)||[""]}function Q8(e,t,n){var i=e.length,r,o,a,s;for(o=0;o<i;o++)r=e[o],r&&(nP(r)&&(r='"'+r+'"'),s=Jm(r),a=!s&&/^\d+$/.test(r),t.call(n,r,s,a,o,e))}function Jm(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function eP(e){return e.match(G8)&&!e.match(kS)}function tP(e){return K8.test(e)}function nP(e){return!Jm(e)&&(eP(e)||tP(e))}const iP=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ef=e=>e.match(iP)||[],Sf=e=>e[0].toUpperCase()+e.slice(1),Ym=(e,t)=>Ef(e).join(t).toLowerCase(),_S=e=>Ef(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),rP=e=>Sf(_S(e)),oP=e=>Ym(e,"_"),aP=e=>Ym(e,"-"),sP=e=>Sf(Ym(e," ")),lP=e=>Ef(e).map(Sf).join(" ");var ih={words:Ef,upperFirst:Sf,camelCase:_S,pascalCase:rP,snakeCase:oP,kebabCase:aP,sentenceCase:sP,titleCase:lP},ud={},cP={get exports(){return ud},set exports(e){ud=e}};cP.exports=function(e){return PS(uP(e),e)};ud.array=PS;function PS(e,t){var n=e.length,i=new Array(n),r={},o=n,a=dP(t),s=fP(e);for(t.forEach(function(c){if(!s.has(c[0])||!s.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)r[o]||l(e[o],o,new Set);return i;function l(c,u,f){if(f.has(c)){var p;try{p=", node was:"+JSON.stringify(c)}catch{p=""}throw new Error("Cyclic dependency"+p)}if(!s.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!r[u]){r[u]=!0;var m=a.get(c)||new Set;if(m=Array.from(m),u=m.length){f.add(c);do{var g=m[--u];l(g,s.get(g),f)}while(u);f.delete(c)}i[--n]=c}}}function uP(e){for(var t=new Set,n=0,i=e.length;n<i;n++){var r=e[n];t.add(r[0]),t.add(r[1])}return Array.from(t)}function dP(e){for(var t=new Map,n=0,i=e.length;n<i;n++){var r=e[n];t.has(r[0])||t.set(r[0],new Set),t.has(r[1])||t.set(r[1],new Set),t.get(r[0]).add(r[1])}return t}function fP(e){for(var t=new Map,n=0,i=e.length;n<i;n++)t.set(e[n],n);return t}const pP=Object.prototype.toString,hP=Error.prototype.toString,gP=RegExp.prototype.toString,mP=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",xP=/^Symbol\((.*)\)(.*)$/;function vP(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Lv(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return vP(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return mP.call(e).replace(xP,"Symbol($1)");const i=pP.call(e).slice(8,-1);return i==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):i==="Error"||e instanceof Error?"["+hP.call(e)+"]":i==="RegExp"?gP.call(e):null}function aa(e,t){let n=Lv(e,t);return n!==null?n:JSON.stringify(e,function(i,r){let o=Lv(this[i],t);return o!==null?o:r},2)}function AS(e){return e==null?[]:[].concat(e)}let bP=/\$\{\s*(\w+)\s*\}/g;class ln extends Error{static formatError(t,n){const i=n.label||n.path||"this";return i!==n.path&&(n=Object.assign({},n,{path:i})),typeof t=="string"?t.replace(bP,(r,o)=>aa(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,i,r){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=i,this.type=r,this.errors=[],this.inner=[],AS(t).forEach(o=>{ln.isError(o)?(this.errors.push(...o.errors),this.inner=this.inner.concat(o.inner.length?o.inner:o)):this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,ln)}}let xi={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:i})=>{const r=i!=null&&i!==n?` (cast from the value \`${aa(i,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${aa(n,!0)}\``+r:`${e} must match the configured type. The validated value was: \`${aa(n,!0)}\``+r}},In={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},yP={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},tg={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},wP={isValue:"${path} field must be ${value}"},ng={noUnknown:"${path} field has unspecified keys: ${unknown}"},CP={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:xi,string:In,number:yP,date:tg,object:ng,array:CP,boolean:wP});const Gm=e=>e&&e.__isYupSchema__;class dd{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:i,then:r,otherwise:o}=n,a=typeof i=="function"?i:(...s)=>s.every(l=>l===i);return new dd(t,(s,l)=>{var c;let u=a(...s)?r:o;return(c=u==null?void 0:u(l))!=null?c:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let i=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),r=this.fn(i,t,n);if(r===void 0||r===t)return t;if(!Gm(r))throw new TypeError("conditions must return a schema object");return r.resolve(n)}}const wc={context:"$",value:"."};class yo{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===wc.context,this.isValue=this.key[0]===wc.value,this.isSibling=!this.isContext&&!this.isValue;let i=this.isContext?wc.context:this.isValue?wc.value:"";this.path=this.key.slice(i.length),this.getter=this.path&&Yr.getter(this.path,!0),this.map=n.map}getValue(t,n,i){let r=this.isContext?i:this.isValue?t:n;return this.getter&&(r=this.getter(r||{})),this.map&&(r=this.map(r)),r}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}yo.prototype.__isYupRef=!0;const Wr=e=>e==null;function _o(e){function t({value:n,path:i="",options:r,originalValue:o,schema:a},s,l){const{name:c,test:u,params:f,message:p,skipAbsent:m}=e;let{parent:g,context:x,abortEarly:y=a.spec.abortEarly}=r;function v(T){return yo.isRef(T)?T.getValue(n,g,x):T}function b(T={}){const R=Object.assign({value:n,originalValue:o,label:a.spec.label,path:T.path||i,spec:a.spec},f,T.params);for(const j of Object.keys(R))R[j]=v(R[j]);const L=new ln(ln.formatError(T.message||p,R),n,R.path,T.type||c);return L.params=R,L}const E=y?s:l;let S={path:i,parent:g,type:c,from:r.from,createError:b,resolve:v,options:r,originalValue:o,schema:a};const F=T=>{ln.isError(T)?E(T):T?l(null):E(b())},P=T=>{ln.isError(T)?E(T):s(T)},k=m&&Wr(n);if(!r.sync){try{Promise.resolve(k?!0:u.call(S,n,S)).then(F,P)}catch(T){P(T)}return}let _;try{var D;if(_=k?!0:u.call(S,n,S),typeof((D=_)==null?void 0:D.then)=="function")throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(T){P(T);return}F(_)}return t.OPTIONS=e,t}function EP(e,t,n,i=n){let r,o,a;return t?(Yr.forEach(t,(s,l,c)=>{let u=l?s.slice(1,s.length-1):s;e=e.resolve({context:i,parent:r,value:n});let f=e.type==="tuple",p=c?parseInt(u,10):0;if(e.innerType||f){if(f&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&p>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);r=n,n=n&&n[p],e=f?e.spec.types[p]:e.innerType}if(!c){if(!e.fields||!e.fields[u])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);r=n,n=n&&n[u],e=e.fields[u]}o=u,a=l?"["+s+"]":"."+s}),{schema:e,parent:r,parentPath:o}):{parent:r,parentPath:t,schema:e}}class fd extends Set{describe(){const t=[];for(const n of this.values())t.push(yo.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const i of this.values())n.push(t(i));return n}clone(){return new fd(this.values())}merge(t,n){const i=this.clone();return t.forEach(r=>i.add(r)),n.forEach(r=>i.delete(r)),i}}function Xo(e,t=new Map){if(Gm(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let i=0;i<e.length;i++)n[i]=Xo(e[i],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[i,r]of e.entries())n.set(i,Xo(r,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const i of e)n.add(Xo(i,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[i,r]of Object.entries(e))n[i]=Xo(r,t)}else throw Error(`Unable to clone ${e}`);return n}class ci{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new fd,this._blacklist=new fd,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(xi.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Xo(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let i=t(this);return this._mutate=n,i}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,i=t.clone();const r=Object.assign({},n.spec,i.spec);return i.spec=r,i.internalTests=Object.assign({},n.internalTests,i.internalTests),i._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),i._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),i.tests=n.tests,i.exclusiveTests=n.exclusiveTests,i.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),i.transforms=[...n.transforms,...i.transforms],i}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let i=n.conditions;n=n.clone(),n.conditions=[],n=i.reduce((r,o)=>o.resolve(r,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,i,r;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(i=t.abortEarly)!=null?i:this.spec.abortEarly,recursive:(r=t.recursive)!=null?r:this.spec.recursive})}cast(t,n={}){let i=this.resolve(Object.assign({value:t},n)),r=n.assert==="ignore-optionality",o=i._cast(t,n);if(n.assert!==!1&&!i.isType(o)){if(r&&Wr(o))return o;let a=aa(t),s=aa(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${i.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return o}_cast(t,n){let i=t===void 0?t:this.transforms.reduce((r,o)=>o.call(this,r,t,this),t);return i===void 0&&(i=this.getDefault(n)),i}_validate(t,n={},i,r){let{path:o,originalValue:a=t,strict:s=this.spec.strict}=n,l=t;s||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let u of Object.values(this.internalTests))u&&c.push(u);this.runTests({path:o,value:l,originalValue:a,options:n,tests:c},i,u=>{if(u.length)return r(u,l);this.runTests({path:o,value:l,originalValue:a,options:n,tests:this.tests},i,r)})}runTests(t,n,i){let r=!1,{tests:o,value:a,originalValue:s,path:l,options:c}=t,u=x=>{r||(r=!0,n(x,a))},f=x=>{r||(r=!0,i(x,a))},p=o.length,m=[];if(!p)return f([]);let g={value:a,originalValue:s,path:l,options:c,schema:this};for(let x=0;x<o.length;x++){const y=o[x];y(g,u,function(b){b&&(m=m.concat(b)),--p<=0&&f(m)})}}asNestedTest({key:t,index:n,parent:i,parentPath:r,originalParent:o,options:a}){const s=t??n;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof s=="number";let c=i[s];const u=Object.assign({},a,{strict:!0,parent:i,value:c,originalValue:o[s],key:void 0,[l?"index":"key"]:s,path:l||s.includes(".")?`${r||""}[${c?s:`"${s}"`}]`:(r?`${r}.`:"")+t});return(f,p,m)=>this.resolve(u)._validate(c,u,p,m)}validate(t,n){let i=this.resolve(Object.assign({},n,{value:t}));return new Promise((r,o)=>i._validate(t,n,(a,s)=>{ln.isError(a)&&(a.value=s),o(a)},(a,s)=>{a.length?o(new ln(a,s)):r(s)}))}validateSync(t,n){let i=this.resolve(Object.assign({},n,{value:t})),r;return i._validate(t,Object.assign({},n,{sync:!0}),(o,a)=>{throw ln.isError(o)&&(o.value=a),o},(o,a)=>{if(o.length)throw new ln(o,t);r=a}),r}isValid(t,n){return this.validate(t,n).then(()=>!0,i=>{if(ln.isError(i))return!1;throw i})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(i){if(ln.isError(i))return!1;throw i}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Xo(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const i=this.clone({nullable:t});return i.internalTests.nullable=_o({message:n,name:"nullable",test(r){return r===null?this.schema.spec.nullable:!0}}),i}optionality(t,n){const i=this.clone({optional:t});return i.internalTests.optionality=_o({message:n,name:"optionality",test(r){return r===void 0?this.schema.spec.optional:!0}}),i}optional(){return this.optionality(!0)}defined(t=xi.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=xi.notNull){return this.nullability(!1,t)}required(t=xi.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=xi.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let i=this.clone(),r=_o(n),o=n.exclusive||n.name&&i.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(i.exclusiveTests[n.name]=!!n.exclusive),i.tests=i.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===r.OPTIONS.test))),i.tests.push(r),i}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let i=this.clone(),r=AS(t).map(o=>new yo(o));return r.forEach(o=>{o.isSibling&&i.deps.push(o.key)}),i.conditions.push(typeof n=="function"?new dd(r,n):dd.fromOptions(r,n)),i}typeError(t){let n=this.clone();return n.internalTests.typeError=_o({message:t,name:"typeError",skipAbsent:!0,test(i){return this.schema._typeCheck(i)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=xi.oneOf){let i=this.clone();return t.forEach(r=>{i._whitelist.add(r),i._blacklist.delete(r)}),i.internalTests.whiteList=_o({message:n,name:"oneOf",skipAbsent:!0,test(r){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(r)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),i}notOneOf(t,n=xi.notOneOf){let i=this.clone();return t.forEach(r=>{i._blacklist.add(r),i._whitelist.delete(r)}),i.internalTests.blacklist=_o({message:n,name:"notOneOf",test(r){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(r)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),i}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:i,meta:r,optional:o,nullable:a}=n.spec;return{meta:r,label:i,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,u)=>u.findIndex(f=>f.name===l.name)===c)}}}ci.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])ci.prototype[`${e}At`]=function(t,n,i={}){const{parent:r,parentPath:o,schema:a}=EP(this,t,n,i.context);return a[e](r&&r[o],Object.assign({},i,{parent:r,path:t}))};for(const e of["equals","is"])ci.prototype[e]=ci.prototype.oneOf;for(const e of["not","nope"])ci.prototype[e]=ci.prototype.notOneOf;let SP=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,FP=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,kP=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,_P=e=>Wr(e)||e===e.trim(),PP={}.toString();function et(){return new DS}class DS extends ci{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,i)=>{if(!i.spec.coerce||i.isType(t)||Array.isArray(t))return t;const r=t!=null&&t.toString?t.toString():t;return r===PP?t:r})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||xi.required,name:"required",skipAbsent:!0,test:i=>!!i.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=In.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(i){return i.length===this.resolve(t)}})}min(t,n=In.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i.length>=this.resolve(t)}})}max(t,n=In.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(i){return i.length<=this.resolve(t)}})}matches(t,n){let i=!1,r,o;return n&&(typeof n=="object"?{excludeEmptyString:i=!1,message:r,name:o}=n:r=n),this.test({name:o||"matches",message:r||In.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&i||a.search(t)!==-1})}email(t=In.email){return this.matches(SP,{name:"email",message:t,excludeEmptyString:!0})}url(t=In.url){return this.matches(FP,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=In.uuid){return this.matches(kP,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=In.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:_P})}lowercase(t=In.lowercase){return this.transform(n=>Wr(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Wr(n)||n===n.toLowerCase()})}uppercase(t=In.uppercase){return this.transform(n=>Wr(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Wr(n)||n===n.toUpperCase()})}}et.prototype=DS.prototype;var AP=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function DP(e){var t=[1,4,5,6,7,10,11],n=0,i,r;if(r=AP.exec(e)){for(var o=0,a;a=t[o];++o)r[a]=+r[a]||0;r[2]=(+r[2]||1)-1,r[3]=+r[3]||1,r[7]=r[7]?String(r[7]).substr(0,3):0,(r[8]===void 0||r[8]==="")&&(r[9]===void 0||r[9]==="")?i=+new Date(r[1],r[2],r[3],r[4],r[5],r[6],r[7]):(r[8]!=="Z"&&r[9]!==void 0&&(n=r[10]*60+r[11],r[9]==="+"&&(n=0-n)),i=Date.UTC(r[1],r[2],r[3],r[4],r[5]+n,r[6],r[7]))}else i=Date.parse?Date.parse(e):NaN;return i}let $P=new Date(""),OP=e=>Object.prototype.toString.call(e)==="[object Date]";class Ff extends ci{constructor(){super({type:"date",check(t){return OP(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,i)=>!i.spec.coerce||i.isType(t)||t===null?t:(t=DP(t),isNaN(t)?Ff.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let i;if(yo.isRef(t))i=t;else{let r=this.cast(t);if(!this._typeCheck(r))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);i=r}return i}min(t,n=tg.min){let i=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r>=this.resolve(i)}})}max(t,n=tg.max){let i=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(r){return r<=this.resolve(i)}})}}Ff.INVALID_DATE=$P;Ff.prototype;function TP(e,t=[]){let n=[],i=new Set,r=new Set(t.map(([a,s])=>`${a}-${s}`));function o(a,s){let l=Yr.split(a)[0];i.add(l),r.has(`${s}-${l}`)||n.push([s,l])}for(const a of Object.keys(e)){let s=e[a];i.add(a),yo.isRef(s)&&s.isSibling?o(s.path,a):Gm(s)&&"deps"in s&&s.deps.forEach(l=>o(l,a))}return ud.array(Array.from(i),n).reverse()}function Rv(e,t){let n=1/0;return e.some((i,r)=>{var o;if((o=t.path)!=null&&o.includes(i))return n=r,!0}),n}function $S(e){return(t,n)=>Rv(e,t)-Rv(e,n)}const MP=(e,t,n)=>{if(typeof e!="string")return e;let i=e;try{i=JSON.parse(e)}catch{}return n.isType(i)?i:e};function hu(e){if("fields"in e){const t={};for(const[n,i]of Object.entries(e.fields))t[n]=hu(i);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=hu(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(hu)}):"optional"in e?e.optional():e}const IP=(e,t)=>{const n=[...Yr.normalizePath(t)];if(n.length===1)return n[0]in e;let i=n.pop(),r=Yr.getter(Yr.join(n),!0)(e);return!!(r&&i in r)};let Bv=e=>Object.prototype.toString.call(e)==="[object Object]";function LP(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(i=>n.indexOf(i)===-1)}const RP=$S([]);function _i(e){return new OS(e)}class OS extends ci{constructor(t){super({type:"object",check(n){return Bv(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=RP,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var i;let r=super._cast(t,n);if(r===void 0)return this.getDefault(n);if(!this._typeCheck(r))return r;let o=this.fields,a=(i=n.stripUnknown)!=null?i:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(r).filter(f=>!this._nodes.includes(f))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),u=!1;for(const f of s){let p=o[f],m=f in r;if(p){let g,x=r[f];c.path=(n.path?`${n.path}.`:"")+f,p=p.resolve({value:x,context:n.context,parent:l});let y=p instanceof ci?p.spec:void 0,v=y==null?void 0:y.strict;if(y!=null&&y.strip){u=u||f in r;continue}g=!n.__validating||!v?p.cast(r[f],c):r[f],g!==void 0&&(l[f]=g)}else m&&!a&&(l[f]=r[f]);(m!==f in l||l[f]!==r[f])&&(u=!0)}return u?l:r}_validate(t,n={},i,r){let{from:o=[],originalValue:a=t,recursive:s=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,i,(l,c)=>{if(!s||!Bv(c)){r(l,c);return}a=a||c;let u=[];for(let f of this._nodes){let p=this.fields[f];!p||yo.isRef(p)||u.push(p.asNestedTest({options:n,key:f,parent:c,parentPath:n.path,originalParent:a}))}this.runTests({tests:u,value:c,originalValue:a,options:n},i,f=>{r(f.sort(this._sortErrors).concat(l),c)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),i=n.fields;for(let[r,o]of Object.entries(this.fields)){const a=i[r];i[r]=a===void 0?o:a}return n.withMutation(r=>r.setFields(i,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(i=>{var r;const o=this.fields[i];let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),n[i]=o&&"getDefault"in o?o.getDefault(a):void 0}),n}setFields(t,n){let i=this.clone();return i.fields=t,i._nodes=TP(t,n),i._sortErrors=$S(Object.keys(t)),n&&(i._excludedEdges=n),i}shape(t,n=[]){return this.clone().withMutation(i=>{let r=i._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),r=[...i._excludedEdges,...n]),i.setFields(Object.assign(i.fields,t),r)})}partial(){const t={};for(const[n,i]of Object.entries(this.fields))t[n]="optional"in i&&i.optional instanceof Function?i.optional():i;return this.setFields(t)}deepPartial(){return hu(this)}pick(t){const n={};for(const i of t)this.fields[i]&&(n[i]=this.fields[i]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const i of t)delete n[i];return this.setFields(n)}from(t,n,i){let r=Yr.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return IP(o,t)&&(a=Object.assign({},o),i||delete a[t],a[n]=r(o)),a})}json(){return this.transform(MP)}noUnknown(t=!0,n=ng.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let i=this.test({name:"noUnknown",exclusive:!0,message:n,test(r){if(r==null)return!0;const o=LP(this.schema,r);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return i.spec.noUnknown=t,i}unknown(t=!0,n=ng.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const i={};for(const r of Object.keys(n))i[t(r)]=n[r];return i})}camelCase(){return this.transformKeys(ih.camelCase)}snakeCase(){return this.transformKeys(ih.snakeCase)}constantCase(){return this.transformKeys(t=>ih.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[r,o]of Object.entries(this.fields)){var i;let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),n.fields[r]=o.describe(a)}return n}}_i.prototype=OS.prototype;function TS(e,t){return function(){return e.apply(t,arguments)}}const{toString:BP}=Object.prototype,{getPrototypeOf:Km}=Object,kf=(e=>t=>{const n=BP.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ui=e=>(e=e.toLowerCase(),t=>kf(t)===e),_f=e=>t=>typeof t===e,{isArray:Ta}=Array,vl=_f("undefined");function zP(e){return e!==null&&!vl(e)&&e.constructor!==null&&!vl(e.constructor)&&Pn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const MS=ui("ArrayBuffer");function NP(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&MS(e.buffer),t}const VP=_f("string"),Pn=_f("function"),IS=_f("number"),Pf=e=>e!==null&&typeof e=="object",jP=e=>e===!0||e===!1,gu=e=>{if(kf(e)!=="object")return!1;const t=Km(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},HP=ui("Date"),UP=ui("File"),WP=ui("Blob"),qP=ui("FileList"),ZP=e=>Pf(e)&&Pn(e.pipe),JP=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Pn(e.append)&&((t=kf(e))==="formdata"||t==="object"&&Pn(e.toString)&&e.toString()==="[object FormData]"))},YP=ui("URLSearchParams"),GP=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let i,r;if(typeof e!="object"&&(e=[e]),Ta(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(i=0;i<a;i++)s=o[i],t.call(null,e[s],s,e)}}function LS(e,t){t=t.toLowerCase();const n=Object.keys(e);let i=n.length,r;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const RS=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),BS=e=>!vl(e)&&e!==RS;function ig(){const{caseless:e}=BS(this)&&this||{},t={},n=(i,r)=>{const o=e&&LS(t,r)||r;gu(t[o])&&gu(i)?t[o]=ig(t[o],i):gu(i)?t[o]=ig({},i):Ta(i)?t[o]=i.slice():t[o]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&zl(arguments[i],n);return t}const KP=(e,t,n,{allOwnKeys:i}={})=>(zl(t,(r,o)=>{n&&Pn(r)?e[o]=TS(r,n):e[o]=r},{allOwnKeys:i}),e),XP=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),QP=(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},eA=(e,t,n,i)=>{let r,o,a;const s={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)a=r[o],(!i||i(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Km(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},tA=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return i!==-1&&i===n},nA=e=>{if(!e)return null;if(Ta(e))return e;let t=e.length;if(!IS(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},iA=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Km(Uint8Array)),rA=(e,t)=>{const i=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=i.next())&&!r.done;){const o=r.value;t.call(e,o[0],o[1])}},oA=(e,t)=>{let n;const i=[];for(;(n=e.exec(t))!==null;)i.push(n);return i},aA=ui("HTMLFormElement"),sA=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),zv=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),lA=ui("RegExp"),zS=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};zl(n,(r,o)=>{t(r,o,e)!==!1&&(i[o]=r)}),Object.defineProperties(e,i)},cA=e=>{zS(e,(t,n)=>{if(Pn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=e[n];if(Pn(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},uA=(e,t)=>{const n={},i=r=>{r.forEach(o=>{n[o]=!0})};return Ta(e)?i(e):i(String(e).split(t)),n},dA=()=>{},fA=(e,t)=>(e=+e,Number.isFinite(e)?e:t),rh="abcdefghijklmnopqrstuvwxyz",Nv="0123456789",NS={DIGIT:Nv,ALPHA:rh,ALPHA_DIGIT:rh+rh.toUpperCase()+Nv},pA=(e=16,t=NS.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n};function hA(e){return!!(e&&Pn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const gA=e=>{const t=new Array(10),n=(i,r)=>{if(Pf(i)){if(t.indexOf(i)>=0)return;if(!("toJSON"in i)){t[r]=i;const o=Ta(i)?[]:{};return zl(i,(a,s)=>{const l=n(a,r+1);!vl(l)&&(o[s]=l)}),t[r]=void 0,o}}return i};return n(e,0)},mA=ui("AsyncFunction"),xA=e=>e&&(Pf(e)||Pn(e))&&Pn(e.then)&&Pn(e.catch),H={isArray:Ta,isArrayBuffer:MS,isBuffer:zP,isFormData:JP,isArrayBufferView:NP,isString:VP,isNumber:IS,isBoolean:jP,isObject:Pf,isPlainObject:gu,isUndefined:vl,isDate:HP,isFile:UP,isBlob:WP,isRegExp:lA,isFunction:Pn,isStream:ZP,isURLSearchParams:YP,isTypedArray:iA,isFileList:qP,forEach:zl,merge:ig,extend:KP,trim:GP,stripBOM:XP,inherits:QP,toFlatObject:eA,kindOf:kf,kindOfTest:ui,endsWith:tA,toArray:nA,forEachEntry:rA,matchAll:oA,isHTMLForm:aA,hasOwnProperty:zv,hasOwnProp:zv,reduceDescriptors:zS,freezeMethods:cA,toObjectSet:uA,toCamelCase:sA,noop:dA,toFiniteNumber:fA,findKey:LS,global:RS,isContextDefined:BS,ALPHABET:NS,generateString:pA,isSpecCompliantForm:hA,toJSONObject:gA,isAsyncFn:mA,isThenable:xA};function Ae(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}H.inherits(Ae,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const VS=Ae.prototype,jS={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{jS[e]={value:e}});Object.defineProperties(Ae,jS);Object.defineProperty(VS,"isAxiosError",{value:!0});Ae.from=(e,t,n,i,r,o)=>{const a=Object.create(VS);return H.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),Ae.call(a,e.message,t,n,i,r),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const vA=null;function rg(e){return H.isPlainObject(e)||H.isArray(e)}function HS(e){return H.endsWith(e,"[]")?e.slice(0,-2):e}function Vv(e,t,n){return e?e.concat(t).map(function(r,o){return r=HS(r),!n&&o?"["+r+"]":r}).join(n?".":""):t}function bA(e){return H.isArray(e)&&!e.some(rg)}const yA=H.toFlatObject(H,{},null,function(t){return/^is[A-Z]/.test(t)});function Af(e,t,n){if(!H.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=H.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,y){return!H.isUndefined(y[x])});const i=n.metaTokens,r=n.visitor||u,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(t);if(!H.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(H.isDate(g))return g.toISOString();if(!l&&H.isBlob(g))throw new Ae("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(g)||H.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,x,y){let v=g;if(g&&!y&&typeof g=="object"){if(H.endsWith(x,"{}"))x=i?x:x.slice(0,-2),g=JSON.stringify(g);else if(H.isArray(g)&&bA(g)||(H.isFileList(g)||H.endsWith(x,"[]"))&&(v=H.toArray(g)))return x=HS(x),v.forEach(function(E,S){!(H.isUndefined(E)||E===null)&&t.append(a===!0?Vv([x],S,o):a===null?x:x+"[]",c(E))}),!1}return rg(g)?!0:(t.append(Vv(y,x,o),c(g)),!1)}const f=[],p=Object.assign(yA,{defaultVisitor:u,convertValue:c,isVisitable:rg});function m(g,x){if(!H.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(g),H.forEach(g,function(v,b){(!(H.isUndefined(v)||v===null)&&r.call(t,v,H.isString(b)?b.trim():b,x,p))===!0&&m(v,x?x.concat(b):[b])}),f.pop()}}if(!H.isObject(e))throw new TypeError("data must be an object");return m(e),t}function jv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return t[i]})}function Xm(e,t){this._pairs=[],e&&Af(e,this,t)}const US=Xm.prototype;US.append=function(t,n){this._pairs.push([t,n])};US.toString=function(t){const n=t?function(i){return t.call(this,i,jv)}:jv;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function wA(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function WS(e,t,n){if(!t)return e;const i=n&&n.encode||wA,r=n&&n.serialize;let o;if(r?o=r(t,n):o=H.isURLSearchParams(t)?t.toString():new Xm(t,n).toString(i),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class CA{constructor(){this.handlers=[]}use(t,n,i){return this.handlers.push({fulfilled:t,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){H.forEach(this.handlers,function(i){i!==null&&t(i)})}}const Hv=CA,qS={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},EA=typeof URLSearchParams<"u"?URLSearchParams:Xm,SA=typeof FormData<"u"?FormData:null,FA=typeof Blob<"u"?Blob:null,kA=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),_A=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ii={isBrowser:!0,classes:{URLSearchParams:EA,FormData:SA,Blob:FA},isStandardBrowserEnv:kA,isStandardBrowserWebWorkerEnv:_A,protocols:["http","https","file","blob","url","data"]};function PA(e,t){return Af(e,new ii.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,o){return ii.isNode&&H.isBuffer(n)?(this.append(i,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function AA(e){return H.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function DA(e){const t={},n=Object.keys(e);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],t[o]=e[o];return t}function ZS(e){function t(n,i,r,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&H.isArray(r)?r.length:a,l?(H.hasOwnProp(r,a)?r[a]=[r[a],i]:r[a]=i,!s):((!r[a]||!H.isObject(r[a]))&&(r[a]=[]),t(n,i,r[a],o)&&H.isArray(r[a])&&(r[a]=DA(r[a])),!s)}if(H.isFormData(e)&&H.isFunction(e.entries)){const n={};return H.forEachEntry(e,(i,r)=>{t(AA(i),r,n,0)}),n}return null}const $A={"Content-Type":void 0};function OA(e,t,n){if(H.isString(e))try{return(t||JSON.parse)(e),H.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(e)}const Df={transitional:qS,adapter:["xhr","http"],transformRequest:[function(t,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,o=H.isObject(t);if(o&&H.isHTMLForm(t)&&(t=new FormData(t)),H.isFormData(t))return r&&r?JSON.stringify(ZS(t)):t;if(H.isArrayBuffer(t)||H.isBuffer(t)||H.isStream(t)||H.isFile(t)||H.isBlob(t))return t;if(H.isArrayBufferView(t))return t.buffer;if(H.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return PA(t,this.formSerializer).toString();if((s=H.isFileList(t))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Af(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||r?(n.setContentType("application/json",!1),OA(t)):t}],transformResponse:[function(t){const n=this.transitional||Df.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(t&&H.isString(t)&&(i&&!this.responseType||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?Ae.from(s,Ae.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ii.classes.FormData,Blob:ii.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};H.forEach(["delete","get","head"],function(t){Df.headers[t]={}});H.forEach(["post","put","patch"],function(t){Df.headers[t]=H.merge($A)});const Qm=Df,TA=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),MA=e=>{const t={};let n,i,r;return e&&e.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim(),!(!n||t[n]&&TA[n])&&(n==="set-cookie"?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)}),t},Uv=Symbol("internals");function Ga(e){return e&&String(e).trim().toLowerCase()}function mu(e){return e===!1||e==null?e:H.isArray(e)?e.map(mu):String(e)}function IA(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}const LA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oh(e,t,n,i,r){if(H.isFunction(i))return i.call(this,t,n);if(r&&(t=n),!!H.isString(t)){if(H.isString(i))return t.indexOf(i)!==-1;if(H.isRegExp(i))return i.test(t)}}function RA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,i)=>n.toUpperCase()+i)}function BA(e,t){const n=H.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+n,{value:function(r,o,a){return this[i].call(this,t,r,o,a)},configurable:!0})})}class $f{constructor(t){t&&this.set(t)}set(t,n,i){const r=this;function o(s,l,c){const u=Ga(l);if(!u)throw new Error("header name must be a non-empty string");const f=H.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=mu(s))}const a=(s,l)=>H.forEach(s,(c,u)=>o(c,u,l));return H.isPlainObject(t)||t instanceof this.constructor?a(t,n):H.isString(t)&&(t=t.trim())&&!LA(t)?a(MA(t),n):t!=null&&o(n,t,i),this}get(t,n){if(t=Ga(t),t){const i=H.findKey(this,t);if(i){const r=this[i];if(!n)return r;if(n===!0)return IA(r);if(H.isFunction(n))return n.call(this,r,i);if(H.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ga(t),t){const i=H.findKey(this,t);return!!(i&&this[i]!==void 0&&(!n||oh(this,this[i],i,n)))}return!1}delete(t,n){const i=this;let r=!1;function o(a){if(a=Ga(a),a){const s=H.findKey(i,a);s&&(!n||oh(i,i[s],s,n))&&(delete i[s],r=!0)}}return H.isArray(t)?t.forEach(o):o(t),r}clear(t){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const o=n[i];(!t||oh(this,this[o],o,t,!0))&&(delete this[o],r=!0)}return r}normalize(t){const n=this,i={};return H.forEach(this,(r,o)=>{const a=H.findKey(i,o);if(a){n[a]=mu(r),delete n[o];return}const s=t?RA(o):String(o).trim();s!==o&&delete n[o],n[s]=mu(r),i[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return H.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=t&&H.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const i=new this(t);return n.forEach(r=>i.set(r)),i}static accessor(t){const i=(this[Uv]=this[Uv]={accessors:{}}).accessors,r=this.prototype;function o(a){const s=Ga(a);i[s]||(BA(r,a),i[s]=!0)}return H.isArray(t)?t.forEach(o):o(t),this}}$f.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.freezeMethods($f.prototype);H.freezeMethods($f);const Pi=$f;function ah(e,t){const n=this||Qm,i=t||n,r=Pi.from(i.headers);let o=i.data;return H.forEach(e,function(s){o=s.call(n,o,r.normalize(),t?t.status:void 0)}),r.normalize(),o}function JS(e){return!!(e&&e.__CANCEL__)}function Nl(e,t,n){Ae.call(this,e??"canceled",Ae.ERR_CANCELED,t,n),this.name="CanceledError"}H.inherits(Nl,Ae,{__CANCEL__:!0});function zA(e,t,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):t(new Ae("Request failed with status code "+n.status,[Ae.ERR_BAD_REQUEST,Ae.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const NA=ii.isStandardBrowserEnv?function(){return{write:function(n,i,r,o,a,s){const l=[];l.push(n+"="+encodeURIComponent(i)),H.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),H.isString(o)&&l.push("path="+o),H.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const i=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function VA(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jA(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function YS(e,t){return e&&!VA(t)?jA(e,t):t}const HA=ii.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(a){const s=H.isString(a)?r(a):a;return s.protocol===i.protocol&&s.host===i.host}}():function(){return function(){return!0}}();function UA(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function WA(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=i[o];a||(a=c),n[r]=l,i[r]=c;let f=o,p=0;for(;f!==r;)p+=n[f++],f=f%e;if(r=(r+1)%e,r===o&&(o=(o+1)%e),c-a<t)return;const m=u&&c-u;return m?Math.round(p*1e3/m):void 0}}function Wv(e,t){let n=0;const i=WA(50,250);return r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,s=o-n,l=i(s),c=o<=a;n=o;const u={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&c?(a-o)/l:void 0,event:r};u[t?"download":"upload"]=!0,e(u)}}const qA=typeof XMLHttpRequest<"u",ZA=qA&&function(e){return new Promise(function(n,i){let r=e.data;const o=Pi.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}H.isFormData(r)&&(ii.isStandardBrowserEnv||ii.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+g))}const u=YS(e.baseURL,e.url);c.open(e.method.toUpperCase(),WS(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function f(){if(!c)return;const m=Pi.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),x={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};zA(function(v){n(v),l()},function(v){i(v),l()},x),c=null}if("onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(i(new Ae("Request aborted",Ae.ECONNABORTED,e,c)),c=null)},c.onerror=function(){i(new Ae("Network Error",Ae.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||qS;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),i(new Ae(g,x.clarifyTimeoutError?Ae.ETIMEDOUT:Ae.ECONNABORTED,e,c)),c=null},ii.isStandardBrowserEnv){const m=(e.withCredentials||HA(u))&&e.xsrfCookieName&&NA.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}r===void 0&&o.setContentType(null),"setRequestHeader"in c&&H.forEach(o.toJSON(),function(g,x){c.setRequestHeader(x,g)}),H.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Wv(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Wv(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=m=>{c&&(i(!m||m.type?new Nl(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=UA(u);if(p&&ii.protocols.indexOf(p)===-1){i(new Ae("Unsupported protocol "+p+":",Ae.ERR_BAD_REQUEST,e));return}c.send(r||null)})},xu={http:vA,xhr:ZA};H.forEach(xu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const JA={getAdapter:e=>{e=H.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=H.isString(n)?xu[n.toLowerCase()]:n));r++);if(!i)throw i===!1?new Ae(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(H.hasOwnProp(xu,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!H.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:xu};function sh(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Nl(null,e)}function qv(e){return sh(e),e.headers=Pi.from(e.headers),e.data=ah.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),JA.getAdapter(e.adapter||Qm.adapter)(e).then(function(i){return sh(e),i.data=ah.call(e,e.transformResponse,i),i.headers=Pi.from(i.headers),i},function(i){return JS(i)||(sh(e),i&&i.response&&(i.response.data=ah.call(e,e.transformResponse,i.response),i.response.headers=Pi.from(i.response.headers))),Promise.reject(i)})}const Zv=e=>e instanceof Pi?e.toJSON():e;function ba(e,t){t=t||{};const n={};function i(c,u,f){return H.isPlainObject(c)&&H.isPlainObject(u)?H.merge.call({caseless:f},c,u):H.isPlainObject(u)?H.merge({},u):H.isArray(u)?u.slice():u}function r(c,u,f){if(H.isUndefined(u)){if(!H.isUndefined(c))return i(void 0,c,f)}else return i(c,u,f)}function o(c,u){if(!H.isUndefined(u))return i(void 0,u)}function a(c,u){if(H.isUndefined(u)){if(!H.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function s(c,u,f){if(f in t)return i(c,u);if(f in e)return i(void 0,c)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(c,u)=>r(Zv(c),Zv(u),!0)};return H.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=l[u]||r,p=f(e[u],t[u],u);H.isUndefined(p)&&f!==s||(n[u]=p)}),n}const GS="1.4.0",e1={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{e1[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const Jv={};e1.transitional=function(t,n,i){function r(o,a){return"[Axios v"+GS+"] Transitional option '"+o+"'"+a+(i?". "+i:"")}return(o,a,s)=>{if(t===!1)throw new Ae(r(a," has been removed"+(n?" in "+n:"")),Ae.ERR_DEPRECATED);return n&&!Jv[a]&&(Jv[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function YA(e,t,n){if(typeof e!="object")throw new Ae("options must be an object",Ae.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const o=i[r],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new Ae("option "+o+" must be "+l,Ae.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ae("Unknown option "+o,Ae.ERR_BAD_OPTION)}}const og={assertOptions:YA,validators:e1},Li=og.validators;class pd{constructor(t){this.defaults=t,this.interceptors={request:new Hv,response:new Hv}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ba(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:o}=n;i!==void 0&&og.assertOptions(i,{silentJSONParsing:Li.transitional(Li.boolean),forcedJSONParsing:Li.transitional(Li.boolean),clarifyTimeoutError:Li.transitional(Li.boolean)},!1),r!=null&&(H.isFunction(r)?n.paramsSerializer={serialize:r}:og.assertOptions(r,{encode:Li.function,serialize:Li.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&H.merge(o.common,o[n.method]),a&&H.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=Pi.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(l=l&&x.synchronous,s.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let u,f=0,p;if(!l){const g=[qv.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,c),p=g.length,u=Promise.resolve(n);f<p;)u=u.then(g[f++],g[f++]);return u}p=s.length;let m=n;for(f=0;f<p;){const g=s[f++],x=s[f++];try{m=g(m)}catch(y){x.call(this,y);break}}try{u=qv.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,p=c.length;f<p;)u=u.then(c[f++],c[f++]);return u}getUri(t){t=ba(this.defaults,t);const n=YS(t.baseURL,t.url);return WS(n,t.params,t.paramsSerializer)}}H.forEach(["delete","get","head","options"],function(t){pd.prototype[t]=function(n,i){return this.request(ba(i||{},{method:t,url:n,data:(i||{}).data}))}});H.forEach(["post","put","patch"],function(t){function n(i){return function(o,a,s){return this.request(ba(s||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}pd.prototype[t]=n(),pd.prototype[t+"Form"]=n(!0)});const vu=pd;class t1{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const i=this;this.promise.then(r=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](r);i._listeners=null}),this.promise.then=r=>{let o;const a=new Promise(s=>{i.subscribe(s),o=s}).then(r);return a.cancel=function(){i.unsubscribe(o)},a},t(function(o,a,s){i.reason||(i.reason=new Nl(o,a,s),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new t1(function(r){t=r}),cancel:t}}}const GA=t1;function KA(e){return function(n){return e.apply(null,n)}}function XA(e){return H.isObject(e)&&e.isAxiosError===!0}const ag={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ag).forEach(([e,t])=>{ag[t]=e});const QA=ag;function KS(e){const t=new vu(e),n=TS(vu.prototype.request,t);return H.extend(n,vu.prototype,t,{allOwnKeys:!0}),H.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return KS(ba(e,r))},n}const yt=KS(Qm);yt.Axios=vu;yt.CanceledError=Nl;yt.CancelToken=GA;yt.isCancel=JS;yt.VERSION=GS;yt.toFormData=Af;yt.AxiosError=Ae;yt.Cancel=yt.CanceledError;yt.all=function(t){return Promise.all(t)};yt.spread=KA;yt.isAxiosError=XA;yt.mergeConfig=ba;yt.AxiosHeaders=Pi;yt.formToJSON=e=>ZS(H.isHTMLForm(e)?new FormData(e):e);yt.HttpStatusCode=QA;yt.default=yt;const Oe=yt,eD=h.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 426px;

  > button {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    background-color: transparent;

    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    margin-left: 24px;

    color: ${({theme:e})=>e.neutral_normal};
  }
`,tD=h.div`
  width: 426px;
  display: flex;
  flex-direction: column;
align-items: center;
  gap: 32px;


  @media (max-width: 600px) {
    width: 326px;
  }
`,nD=h.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  .containerSubmit{
    margin-bottom: 90px;
  }
  @media (max-width: 600px) {
    .containerSubmit{
    margin-bottom: 0px;
  }
  }
`,iD=h.div`
  width: 365px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 600px) {
    width: 326px;
  }
`,rD=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

`,oD=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  > svg {
    color: ${({theme:e})=>e.neutral_normal};
    font-size: 2.4rem;
  }
`,aD=_i().shape({email:et().trim().email(Xt.emailInvalid).required(Xt.emailRequired)}),sD=h.button`
  border-radius: 0.6rem;
  width: 100%;
  height: 6rem;

  font-weight: 500;
font-size: 1.5rem;
line-height: 2rem;
letter-spacing: 0.05rem;
  color: ${({success:e,theme:t})=>e?`${t.white_sys}`:`${t.neutral_dark}`};

  background: ${({success:e,colorBackground:t,theme:n})=>e?`${t}`:`${n.gray_sys1}`};
  cursor: ${({success:e})=>e?"grab":"not-allowed"};

  :disabled{
    cursor: "not-allowed";
    background: ${({theme:e})=>e.gray_sys1};
    color: ${({theme:e})=>e.neutral_dark};
  }
`;function wo({label:e,success:t,colorBackground:n,...i}){return d(sD,{...i,colorBackground:n,success:t,children:e})}const lD=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  width: 100%;
  max-width: 426px;

  .containerSubmit{
    margin-bottom: 90px;
  }
  @media (max-width: 600px) {
    .containerSubmit{
    margin-bottom: 0px;
    }
  }

  @media (max-width: 600px) {
    width: 326px;
  }
`,cD=h.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    color: ${e=>`${e.colorTitle}`};
  }

  > p {
    font-size: 18px;
    line-height: 28px;
    color: ${({theme:e})=>e.gray_sys2};
  }
`,Co=h.div`
  width: 350px;

  @media (max-width: 600px) {
    width: 300px;
  }
`,n1=h.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 366px;

  > h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    color: ${({theme:e})=>e.neutral_normal};
  }

  > p {
    font-size: 14px;
    line-height: 18px;
    color: ${({theme:e})=>e.gray_sys2};
  }

  @media (max-width: 600px) {
    width: 266px;
  }
`;function uD({email:e}){const t=be(),n=()=>{t("/")};return w(lD,{children:[w(cD,{colorTitle:$.secundaria,children:[d("h2",{children:Yp.enviado}),w("p",{children:[Yp.text," ",e,"."," ",Yp.completeText]})]}),d(Co,{className:"containerSubmit",children:d(wo,{type:"button",onClick:n,colorBackground:$.secundaria,success:!0,label:vo.irLogin})})]})}const dD=h.input`
  border: 1px solid
    ${({hasError:e,hasSuccess:t,colorInputSuccess:n,theme:i})=>e?`${i.red_error}`:t?`${n}`:`${i.neutral_Light_active}`};

  color: ${({hasError:e,hasSuccess:t,colorInputSuccess:n,theme:i})=>e?`${i.red_error}`:t?`${n}`:`${i.gray_sys2}`};
  outline: none;
  width: 100%;
  border-radius: 4px;

  padding: 0 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  height: 44px;

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({hasError:e,theme:t})=>e?`${t.red_error}`:`${t.gray_sys2}`};
  }
`,XS=h.p`
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: ${({theme:e})=>e.neutral_darker};
margin-bottom: 4px;
`,ne=A.forwardRef(({label:e,...t},n)=>w("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[e&&d(XS,{children:e}),d(dD,{...t,ref:n})]}));ne.displayName="CustomInput";const fD=h.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.red_error};
`;function lo({children:e}){return d(fD,{children:e})}var pD={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function hD(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var i=(e.match(/[^0-9]*$/)||"").toString();return pD[i]?{value:t,unit:i}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function lh(e){var t=hD(e);return"".concat(t.value).concat(t.unit)}var gD=function(e,t,n){var i="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return i;var r=document.createElement("style");document.head.appendChild(r);var o=r.sheet,a=`
    @keyframes `.concat(i,` {
      `).concat(t,`
    }
  `);return o&&o.insertRule(a,0),i},hd=globalThis&&globalThis.__assign||function(){return hd=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},hd.apply(this,arguments)},mD=globalThis&&globalThis.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n},xD=gD("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function QS(e){var t=e.loading,n=t===void 0?!0:t,i=e.color,r=i===void 0?"#000000":i,o=e.speedMultiplier,a=o===void 0?1:o,s=e.cssOverride,l=s===void 0?{}:s,c=e.size,u=c===void 0?15:c,f=e.margin,p=f===void 0?2:f,m=mD(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),g=hd({display:"inherit"},l),x=function(y){return{display:"inline-block",backgroundColor:r,width:lh(u),height:lh(u),margin:lh(p),borderRadius:"100%",animation:"".concat(xD," ").concat(.7/a,"s ").concat(y%2?"0s":"".concat(.35/a,"s")," infinite linear"),animationFillMode:"both"}};return n?C.createElement("span",hd({style:g},m),C.createElement("span",{style:x(1)}),C.createElement("span",{style:x(2)}),C.createElement("span",{style:x(3)})):null}function e5(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=e5(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function Xi(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=e5(e))&&(i&&(i+=" "),i+=t);return i}const Ns=e=>typeof e=="number"&&!isNaN(e),co=e=>typeof e=="string",Qt=e=>typeof e=="function",bu=e=>co(e)||Qt(e)?e:null,ch=e=>C.isValidElement(e)||co(e)||Qt(e)||Ns(e);function vD(e,t,n){n===void 0&&(n=300);const{scrollHeight:i,style:r}=e;requestAnimationFrame(()=>{r.minHeight="initial",r.height=i+"px",r.transition=`all ${n}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)})})}function Of(e){let{enter:t,exit:n,appendPosition:i=!1,collapse:r=!0,collapseDuration:o=300}=e;return function(a){let{children:s,position:l,preventExitTransition:c,done:u,nodeRef:f,isIn:p}=a;const m=i?`${t}--${l}`:t,g=i?`${n}--${l}`:n,x=C.useRef(0);return C.useLayoutEffect(()=>{const y=f.current,v=m.split(" "),b=E=>{E.target===f.current&&(y.dispatchEvent(new Event("d")),y.removeEventListener("animationend",b),y.removeEventListener("animationcancel",b),x.current===0&&E.type!=="animationcancel"&&y.classList.remove(...v))};y.classList.add(...v),y.addEventListener("animationend",b),y.addEventListener("animationcancel",b)},[]),C.useEffect(()=>{const y=f.current,v=()=>{y.removeEventListener("animationend",v),r?vD(y,u,o):u()};p||(c?v():(x.current=1,y.className+=` ${g}`,y.addEventListener("animationend",v)))},[p]),A.createElement(A.Fragment,null,s)}}function Yv(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const En={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(i=>i!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Cc=e=>{let{theme:t,type:n,...i}=e;return A.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},uh={info:function(e){return A.createElement(Cc,{...e},A.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return A.createElement(Cc,{...e},A.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return A.createElement(Cc,{...e},A.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return A.createElement(Cc,{...e},A.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return A.createElement("div",{className:"Toastify__spinner"})}};function bD(e){const[,t]=C.useReducer(m=>m+1,0),[n,i]=C.useState([]),r=C.useRef(null),o=C.useRef(new Map).current,a=m=>n.indexOf(m)!==-1,s=C.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:m=>o.get(m)}).current;function l(m){let{containerId:g}=m;const{limit:x}=s.props;!x||g&&s.containerId!==g||(s.count-=s.queue.length,s.queue=[])}function c(m){i(g=>m==null?[]:g.filter(x=>x!==m))}function u(){const{toastContent:m,toastProps:g,staleId:x}=s.queue.shift();p(m,g,x)}function f(m,g){let{delay:x,staleId:y,...v}=g;if(!ch(m)||function(L){return!r.current||s.props.enableMultiContainer&&L.containerId!==s.props.containerId||o.has(L.toastId)&&L.updateId==null}(v))return;const{toastId:b,updateId:E,data:S}=v,{props:F}=s,P=()=>c(b),k=E==null;k&&s.count++;const _={...F,style:F.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(v).filter(L=>{let[j,B]=L;return B!=null})),toastId:b,updateId:E,data:S,closeToast:P,isIn:!1,className:bu(v.className||F.toastClassName),bodyClassName:bu(v.bodyClassName||F.bodyClassName),progressClassName:bu(v.progressClassName||F.progressClassName),autoClose:!v.isLoading&&(D=v.autoClose,T=F.autoClose,D===!1||Ns(D)&&D>0?D:T),deleteToast(){const L=Yv(o.get(b),"removed");o.delete(b),En.emit(4,L);const j=s.queue.length;if(s.count=b==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),j>0){const B=b==null?s.props.limit:1;if(j===1||B===1)s.displayedToast++,u();else{const z=B>j?j:B;s.displayedToast=z;for(let q=0;q<z;q++)u()}}else t()}};var D,T;_.iconOut=function(L){let{theme:j,type:B,isLoading:z,icon:q}=L,G=null;const N={theme:j,type:B};return q===!1||(Qt(q)?G=q(N):C.isValidElement(q)?G=C.cloneElement(q,N):co(q)||Ns(q)?G=q:z?G=uh.spinner():(W=>W in uh)(B)&&(G=uh[B](N))),G}(_),Qt(v.onOpen)&&(_.onOpen=v.onOpen),Qt(v.onClose)&&(_.onClose=v.onClose),_.closeButton=F.closeButton,v.closeButton===!1||ch(v.closeButton)?_.closeButton=v.closeButton:v.closeButton===!0&&(_.closeButton=!ch(F.closeButton)||F.closeButton);let R=m;C.isValidElement(m)&&!co(m.type)?R=C.cloneElement(m,{closeToast:P,toastProps:_,data:S}):Qt(m)&&(R=m({closeToast:P,toastProps:_,data:S})),F.limit&&F.limit>0&&s.count>F.limit&&k?s.queue.push({toastContent:R,toastProps:_,staleId:y}):Ns(x)?setTimeout(()=>{p(R,_,y)},x):p(R,_,y)}function p(m,g,x){const{toastId:y}=g;x&&o.delete(x);const v={content:m,props:g};o.set(y,v),i(b=>[...b,y].filter(E=>E!==x)),En.emit(4,Yv(v,v.props.updateId==null?"added":"updated"))}return C.useEffect(()=>(s.containerId=e.containerId,En.cancelEmit(3).on(0,f).on(1,m=>r.current&&c(m)).on(5,l).emit(2,s),()=>{o.clear(),En.emit(3,s)}),[]),C.useEffect(()=>{s.props=e,s.isToastActive=a,s.displayedToast=n.length}),{getToastToRender:function(m){const g=new Map,x=Array.from(o.values());return e.newestOnTop&&x.reverse(),x.forEach(y=>{const{position:v}=y.props;g.has(v)||g.set(v,[]),g.get(v).push(y)}),Array.from(g,y=>m(y[0],y[1]))},containerRef:r,isToastActive:a}}function Gv(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Kv(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function yD(e){const[t,n]=C.useState(!1),[i,r]=C.useState(!1),o=C.useRef(null),a=C.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=C.useRef(e),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:f,closeOnClick:p}=e;function m(S){if(e.draggable){S.nativeEvent.type==="touchstart"&&S.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",b),document.addEventListener("touchmove",v),document.addEventListener("touchend",b);const F=o.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=F.getBoundingClientRect(),F.style.transition="",a.x=Gv(S.nativeEvent),a.y=Kv(S.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=F.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=F.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function g(S){if(a.boundingRect){const{top:F,bottom:P,left:k,right:_}=a.boundingRect;S.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=k&&a.x<=_&&a.y>=F&&a.y<=P?y():x()}}function x(){n(!0)}function y(){n(!1)}function v(S){const F=o.current;a.canDrag&&F&&(a.didMove=!0,t&&y(),a.x=Gv(S),a.y=Kv(S),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),F.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,F.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function b(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",b);const S=o.current;if(a.canDrag&&a.didMove&&S){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return r(!0),void e.closeToast();S.style.transition="transform 0.2s, opacity 0.2s",S.style.transform=`translate${e.draggableDirection}(0)`,S.style.opacity="1"}}C.useEffect(()=>{s.current=e}),C.useEffect(()=>(o.current&&o.current.addEventListener("d",x,{once:!0}),Qt(e.onOpen)&&e.onOpen(C.isValidElement(e.children)&&e.children.props),()=>{const S=s.current;Qt(S.onClose)&&S.onClose(C.isValidElement(S.children)&&S.children.props)}),[]),C.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||y(),window.addEventListener("focus",x),window.addEventListener("blur",y)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",y))}),[e.pauseOnFocusLoss]);const E={onMouseDown:m,onTouchStart:m,onMouseUp:g,onTouchEnd:g};return l&&c&&(E.onMouseEnter=y,E.onMouseLeave=x),p&&(E.onClick=S=>{f&&f(S),a.canCloseOnClick&&u()}),{playToast:x,pauseToast:y,isRunning:t,preventExitTransition:i,toastRef:o,eventHandlers:E}}function t5(e){let{closeToast:t,theme:n,ariaLabel:i="close"}=e;return A.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:r=>{r.stopPropagation(),t(r)},"aria-label":i},A.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},A.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function wD(e){let{delay:t,isRunning:n,closeToast:i,type:r="default",hide:o,className:a,style:s,controlledProgress:l,progress:c,rtl:u,isIn:f,theme:p}=e;const m=o||l&&c===0,g={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:m?0:1};l&&(g.transform=`scaleX(${c})`);const x=Xi("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":u}),y=Qt(a)?a({rtl:u,type:r,defaultClassName:x}):Xi(x,a);return A.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:y,style:g,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{f&&i()}})}const CD=e=>{const{isRunning:t,preventExitTransition:n,toastRef:i,eventHandlers:r}=yD(e),{closeButton:o,children:a,autoClose:s,onClick:l,type:c,hideProgressBar:u,closeToast:f,transition:p,position:m,className:g,style:x,bodyClassName:y,bodyStyle:v,progressClassName:b,progressStyle:E,updateId:S,role:F,progress:P,rtl:k,toastId:_,deleteToast:D,isIn:T,isLoading:R,iconOut:L,closeOnClick:j,theme:B}=e,z=Xi("Toastify__toast",`Toastify__toast-theme--${B}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":j}),q=Qt(g)?g({rtl:k,position:m,type:c,defaultClassName:z}):Xi(z,g),G=!!P||!s,N={closeToast:f,type:c,theme:B};let W=null;return o===!1||(W=Qt(o)?o(N):C.isValidElement(o)?C.cloneElement(o,N):t5(N)),A.createElement(p,{isIn:T,done:D,position:m,preventExitTransition:n,nodeRef:i},A.createElement("div",{id:_,onClick:l,className:q,...r,style:x,ref:i},A.createElement("div",{...T&&{role:F},className:Qt(y)?y({type:c}):Xi("Toastify__toast-body",y),style:v},L!=null&&A.createElement("div",{className:Xi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},L),A.createElement("div",null,a)),W,A.createElement(wD,{...S&&!G?{key:`pb-${S}`}:{},rtl:k,theme:B,delay:s,isRunning:t,isIn:T,closeToast:f,hide:u,type:c,style:E,className:b,controlledProgress:G,progress:P||0})))},Tf=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},ED=Of(Tf("bounce",!0));Of(Tf("slide",!0));Of(Tf("zoom"));Of(Tf("flip"));const sg=C.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:i,isToastActive:r}=bD(e),{className:o,style:a,rtl:s,containerId:l}=e;function c(u){const f=Xi("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":s});return Qt(o)?o({position:u,rtl:s,defaultClassName:f}):Xi(f,bu(o))}return C.useEffect(()=>{t&&(t.current=i.current)},[]),A.createElement("div",{ref:i,className:"Toastify",id:l},n((u,f)=>{const p=f.length?{...a}:{...a,pointerEvents:"none"};return A.createElement("div",{className:c(u),style:p,key:`container-${u}`},f.map((m,g)=>{let{content:x,props:y}=m;return A.createElement(CD,{...y,isIn:r(y.toastId),style:{...y.style,"--nth":g+1,"--len":f.length},key:`toast-${y.key}`},x)}))}))});sg.displayName="ToastContainer",sg.defaultProps={position:"top-right",transition:ED,autoClose:5e3,closeButton:t5,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let dh,Rr=new Map,ws=[],SD=1;function n5(){return""+SD++}function FD(e){return e&&(co(e.toastId)||Ns(e.toastId))?e.toastId:n5()}function Vs(e,t){return Rr.size>0?En.emit(0,e,t):ws.push({content:e,options:t}),t.toastId}function gd(e,t){return{...t,type:t&&t.type||e,toastId:FD(t)}}function Ec(e){return(t,n)=>Vs(t,gd(e,n))}function Pe(e,t){return Vs(e,gd("default",t))}Pe.loading=(e,t)=>Vs(e,gd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Pe.promise=function(e,t,n){let i,{pending:r,error:o,success:a}=t;r&&(i=co(r)?Pe.loading(r,n):Pe.loading(r.render,{...n,...r}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,f,p)=>{if(f==null)return void Pe.dismiss(i);const m={type:u,...s,...n,data:p},g=co(f)?{render:f}:f;return i?Pe.update(i,{...m,...g}):Pe(g.render,{...m,...g}),p},c=Qt(e)?e():e;return c.then(u=>l("success",a,u)).catch(u=>l("error",o,u)),c},Pe.success=Ec("success"),Pe.info=Ec("info"),Pe.error=Ec("error"),Pe.warning=Ec("warning"),Pe.warn=Pe.warning,Pe.dark=(e,t)=>Vs(e,gd("default",{theme:"dark",...t})),Pe.dismiss=e=>{Rr.size>0?En.emit(1,e):ws=ws.filter(t=>e!=null&&t.options.toastId!==e)},Pe.clearWaitingQueue=function(e){return e===void 0&&(e={}),En.emit(5,e)},Pe.isActive=e=>{let t=!1;return Rr.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},Pe.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(i,r){let{containerId:o}=r;const a=Rr.get(o||dh);return a&&a.getToast(i)}(e,t);if(n){const{props:i,content:r}=n,o={delay:100,...i,...t,toastId:t.toastId||e,updateId:n5()};o.toastId!==e&&(o.staleId=e);const a=o.render||r;delete o.render,Vs(a,o)}},0)},Pe.done=e=>{Pe.update(e,{progress:1})},Pe.onChange=e=>(En.on(4,e),()=>{En.off(4,e)}),Pe.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Pe.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},En.on(2,e=>{dh=e.containerId||e,Rr.set(dh,e),ws.forEach(t=>{En.emit(0,t.content,t.options)}),ws=[]}).on(3,e=>{Rr.delete(e.containerId||e),Rr.size===0&&En.off(0).off(1).off(5)});const kD=h.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;var i5={},uo={};Object.defineProperty(uo,"__esModule",{value:!0});uo.cssValue=uo.parseLengthAndUnit=void 0;var _D={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r5(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var i=(e.match(/[^0-9]*$/)||"").toString();return _D[i]?{value:t,unit:i}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}uo.parseLengthAndUnit=r5;function PD(e){var t=r5(e);return"".concat(t.value).concat(t.unit)}uo.cssValue=PD;var Vl={};Object.defineProperty(Vl,"__esModule",{value:!0});Vl.createAnimation=void 0;var AD=function(e,t,n){var i="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return i;var r=document.createElement("style");document.head.appendChild(r);var o=r.sheet,a=`
    @keyframes `.concat(i,` {
      `).concat(t,`
    }
  `);return o&&o.insertRule(a,0),i};Vl.createAnimation=AD;var md=Xe&&Xe.__assign||function(){return md=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},md.apply(this,arguments)},DD=Xe&&Xe.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),$D=Xe&&Xe.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),OD=Xe&&Xe.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&DD(t,e,n);return $D(t,e),t},TD=Xe&&Xe.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n};Object.defineProperty(i5,"__esModule",{value:!0});var Jn=OD(C),Ka=uo,MD=Vl,ID=(0,MD.createAnimation)("GridLoader","0% {transform: scale(1)} 50% {transform: scale(0.5); opacity: 0.7} 100% {transform: scale(1); opacity: 1}","grid"),fi=function(e){return Math.random()*e};function LD(e){var t=e.loading,n=t===void 0?!0:t,i=e.color,r=i===void 0?"#000000":i,o=e.speedMultiplier,a=o===void 0?1:o,s=e.cssOverride,l=s===void 0?{}:s,c=e.size,u=c===void 0?15:c,f=e.margin,p=f===void 0?2:f,m=TD(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),g=(0,Ka.parseLengthAndUnit)(u),x=(0,Ka.parseLengthAndUnit)(p),y=parseFloat(g.value.toString())*3+parseFloat(x.value.toString())*6,v=md({width:"".concat(y).concat(g.unit),fontSize:0,display:"inline-block"},l),b=function(E){return{display:"inline-block",backgroundColor:r,width:"".concat((0,Ka.cssValue)(u)),height:"".concat((0,Ka.cssValue)(u)),margin:(0,Ka.cssValue)(p),borderRadius:"100%",animationFillMode:"both",animation:"".concat(ID," ").concat((E/100+.6)/a,"s ").concat(E/100-.2,"s infinite ease")}};return n?Jn.createElement("span",md({style:v},m,{ref:function(E){E&&E.style.setProperty("width","".concat(y).concat(g.unit),"important")}}),Jn.createElement("span",{style:b(fi(100))}),Jn.createElement("span",{style:b(fi(100))}),Jn.createElement("span",{style:b(fi(100))}),Jn.createElement("span",{style:b(fi(100))}),Jn.createElement("span",{style:b(fi(100))}),Jn.createElement("span",{style:b(fi(100))}),Jn.createElement("span",{style:b(fi(100))}),Jn.createElement("span",{style:b(fi(100))}),Jn.createElement("span",{style:b(fi(100))})):null}var RD=i5.default=LD;function Ve(){return d(kD,{children:d(RD,{color:"white"})})}function BD(){const e=be(),[t,n]=C.useState(""),[i,r]=C.useState(!1),[o,a]=C.useState(!1),[s,l]=C.useState(!1),{register:c,handleSubmit:u,formState:{errors:f},setError:p,clearErrors:m}=qt({resolver:Oa(aD)}),g=async y=>{a(!0);try{(await Oe.post("https://api-pagueassim.stalopay.com.br/forgot-password",y)).status===200&&r(!0)}catch{p("email",{type:"manual",message:"E-mail não localizado no nosso banco de dados."}),Pe.error("E-mail não encontrado")}finally{a(!1)}},x=y=>{const v=y.target.value;n(v),m("email"),l(v!==""&&et().trim().email().isValidSync(v))};return d(ie,{children:i?d(uD,{email:t}):w(ie,{children:[o&&d(Ve,{}),w(eD,{children:[w("button",{type:"button",onClick:()=>Da(e),children:[d(oD,{children:d(Cf,{})}),Jp.voltar]}),d(tD,{children:w(n1,{children:[d("h2",{children:Jp.recuperar}),d("p",{children:Jp.text})]})}),w(nD,{onSubmit:u(g),children:[d(iD,{children:w(rD,{children:[d(ne,{label:"E-mail",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,placeholder:ao.placeholderEmail,...c("email"),hasError:!!f.email,hasSuccess:s,value:t,onChange:x}),f.email&&d(lo,{children:f.email.message})]})}),d(Co,{className:"containerSubmit",children:d(wo,{type:"submit",colorBackground:$.secundaria,success:s&&!o,disabled:o,label:o?d(QS,{size:10,color:"#ffffff"}):vo.salvar})})]})]})]})})}function zD(){return d(ie,{children:d(BD,{})})}var o5={},xd=Xe&&Xe.__assign||function(){return xd=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xd.apply(this,arguments)},ND=Xe&&Xe.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),VD=Xe&&Xe.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),jD=Xe&&Xe.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&ND(t,e,n);return VD(t,e),t},HD=Xe&&Xe.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n};Object.defineProperty(o5,"__esModule",{value:!0});var UD=jD(C),Xv=uo,WD=Vl,qD=(0,WD.createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function ZD(e){var t=e.loading,n=t===void 0?!0:t,i=e.color,r=i===void 0?"#000000":i,o=e.speedMultiplier,a=o===void 0?1:o,s=e.cssOverride,l=s===void 0?{}:s,c=e.size,u=c===void 0?35:c,f=HD(e,["loading","color","speedMultiplier","cssOverride","size"]),p=xd({background:"transparent !important",width:(0,Xv.cssValue)(u),height:(0,Xv.cssValue)(u),borderRadius:"100%",border:"2px solid",borderTopColor:r,borderBottomColor:"transparent",borderLeftColor:r,borderRightColor:r,display:"inline-block",animation:"".concat(qD," ").concat(.75/a,"s 0s infinite linear"),animationFillMode:"both"},l);return n?UD.createElement("span",xd({style:p},f)):null}var JD=o5.default=ZD;const YD=h.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 426px;

  > button {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    background-color: transparent;

    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    margin-left: 24px;

    color: ${({theme:e})=>e.neutral_normal};
  }
`,GD=h.div`
  width: 426px;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (max-width: 600px) {
    width: 326px;
  }
`,KD=h.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;

  .containerSubmit{
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    .containerSubmit{
    margin-bottom: 0px;
  }
  }
`,Qv=h.div`
  width: 365px;

  display: flex;
  flex-direction: column;
  /* gap: 18px; */

  @media (max-width: 600px) {
    width: 326px;
  }
`,eb=h.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.2rem; */
`,XD=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  > svg {
    color: ${({theme:e})=>e.neutral_normal};
    font-size: 2.4rem;
  }
`,QD=h.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  width: 100%;

  > ul {
    margin-left: 20px;
  }
`,e9=_i().shape({password:et().required(Xt.campoRequired).min(6,Xt.senhaMin).matches(/(?=.*[0-9])/,"As diretrizes abaixo são obrigatória").matches(/(?=.*[a-z])/,"As diretrizes abaixo são obrigatória").matches(/(?=.*[A-Z])/,"As diretrizes abaixo são obrigatória").matches(/[^a-zA-Z0-9]/,"As diretrizes abaixo são obrigatória"),passwordConfirm:et().required(Xt.campoRequired).test("password-match",Xt.notMatch,function(e){return this.parent.password===e})}),t9=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  width: 100%;
  max-width: 426px;

  .containerSubmit{
    margin-bottom: 90px;
  }
  @media (max-width: 600px) {
    .containerSubmit{
    margin-bottom: 0px;
    }
  }

  @media (max-width: 600px) {
    width: 326px;
  }
`,n9=h.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    color: ${e=>`${e.colorTitle}`};
  }

  > p {
    font-size: 18px;
    line-height: 28px;
    color: ${({theme:e})=>e.gray_sys2};
  }
`;function i9(){const e=be();return w(t9,{children:[w(n9,{colorTitle:$.secundaria,children:[d("h2",{children:wv.success}),d("p",{children:wv.successText})]}),d(Co,{className:"containerSubmit",children:d(wo,{type:"button",onClick:()=>Da(e),colorBackground:$.secundaria,success:!0,label:vo.irLogin})})]})}const r9=h.div`
  display: flex;
  align-items: center;

  border: 1px solid
    ${({hasError:e,hasSuccess:t,colorInputSuccess:n,theme:i})=>e?`${i.red_error}`:t?`${n}`:`${i.neutral_Light_active}`};
  outline: none;
  width: 100%;
  border-radius: 4px;
  height: 44px;
  padding: 0 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  > input {
    flex: 1;
    border: none;
    outline: none;


    font-size: 1.6rem;
    margin-right: 0.8rem;
    color: ${({hasError:e,hasSuccess:t,colorInputSuccess:n,theme:i})=>e?`${i.red_error}`:t?`${n}`:`${i.neutral_Light_active}`};
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: ${({hasError:e,hasSuccess:t,colorInputSuccess:n,theme:i})=>e?`${i.red_error}`:t?`${n}`:`${i.gray_sys2}`};
    }
  }
`,o9=h.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({theme:e})=>`${e.neutral_normal}`};
  font-size: 2rem;
`,a5=h.p`
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: ${({theme:e})=>e.neutral_darker};
margin-bottom: 4px;
`;function a9(e){return Aa({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}},{tag:"path",attr:{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}}]})(e)}function s9(e){return Aa({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"}}]})(e)}const ya=A.forwardRef(({hasError:e,label:t=!1,hasSuccess:n,colorInputSuccess:i,colorInputDefault:r,...o},a)=>{const[s,l]=C.useState(!1),c=()=>l(u=>!u);return w("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[t&&d(a5,{children:t}),w(r9,{hasError:e,hasSuccess:n,colorInputSuccess:i,children:[d("input",{type:s?"text":"password",...o,ref:a}),(e||n)&&d(o9,{onClick:c,children:s?d(a9,{size:18}):d(s9,{size:18})})]})]})});ya.displayName="InputMask";const l9=h.li`
  font-size: 14px;
  font-weight: bold;
  list-style-type: disc;
  color: ${({theme:e,success:t})=>t?`${$.secundaria}`:`${e.neutral_normal}`};
`,s5=h.p`
font-size: 16px;
font-weight: bold;
margin-bottom: 16px;
color: ${({success:e,theme:t})=>e?`${$.secundaria}`:`${t.neutral_normal}`};
`;function ti({children:e,success:t}){return d(l9,{success:t,children:e})}function c9({email:e,token:t}){const[n,i]=C.useState(!1),[r,o]=C.useState(!1),a=be(),{register:s,handleSubmit:l,formState:{errors:c,isValid:u},watch:f,setError:p}=qt({resolver:Oa(e9)}),m=f("password"),g=f("passwordConfirm"),x=/[a-z]/.test(m||""),y=/[A-Z]/.test(m||""),v=/[0-9]/.test(m||""),b=/\W/.test(m||""),E=(m||"").length>=6,S=async F=>{o(!0);try{(await Oe.post("https://api-pagueassim.stalopay.com.br/reset-password",{token:t,email:e,password:F.password,password_confirmation:F.passwordConfirm})).status===200&&i(!0)}catch{Pe.error("Token invalido")}finally{o(!1)}};return d(ie,{children:n?d(i9,{}):w(YD,{children:[r&&d(Ve,{}),w("button",{type:"button",onClick:()=>Da(a),children:[d(XD,{children:d(Cf,{})}),Zp.voltar]}),d(GD,{children:w(n1,{children:[d("h2",{children:Zp.alterar}),w("p",{children:[Zp.desejada,e]})]})}),w(KD,{onSubmit:l(S),children:[d(Qv,{children:w(eb,{children:[d(ya,{label:"Nova Senha",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,placeholder:ao.placeholderNova,...s("password"),hasError:!!c.password||m&&(!x||!y||!v||!b||!E)||!1,hasSuccess:!c.password&&x&&y&&v&&b&&E}),c.password&&d(lo,{children:c.password.message})]})}),d(Qv,{children:w(eb,{children:[d(ya,{label:"Repetir Nova Senha",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,placeholder:ao.placeholderRepita,...s("passwordConfirm"),hasError:!!c.passwordConfirm&&c.passwordConfirm.type==="required"||g&&m!==g||g&&g.length<6||void 0,hasSuccess:!c.passwordConfirm&&m===g&&(g==null?void 0:g.length)>=6}),c.passwordConfirm&&d(lo,{children:c.passwordConfirm.message})]})}),w(QD,{children:[w(s5,{success:x&&y&&v&&b&&E,children:[" ","A senha deve conter pelo menos:"," "]}),w("ul",{children:[d(ti,{success:x,children:"Uma letra minúscula"}),d(ti,{success:y,children:"Uma letra maiúscula"}),d(ti,{success:v,children:"Um número"}),d(ti,{success:b,children:"Um caractere especial"}),d(ti,{success:E,children:"Pelo menos 6 caracteres"})]})]}),d(Co,{className:"containerSubmit",children:d(wo,{type:"submit",colorBackground:$.secundaria,success:u,disabled:r,label:r?d(JD,{size:20,color:"#ffffff"}):vo.salvar})})]})]})})}function u9(){const e=jm(),t=new URLSearchParams(e.search),n=t.get("token"),i=t.get("email");return C.useEffect(()=>{},[n,i]),d(ie,{children:d(c9,{token:n||"",email:i||""})})}const d9=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 426px;
`,f9=h.div`
  width: 366px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  > button {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    background-color: transparent;

    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    color: ${({theme:e})=>e.neutral_normal};
  }

  @media (max-width: 600px) {
    width: 326px;
  }
`,p9=h.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  .containerSubmit{
    margin-bottom: 50px;
  }

  @media (max-width: 600px) {
    .containerSubmit{
    margin-bottom: 0px;
  }
  }
`,tb=h.div`
  width: 366px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 600px) {
    width: 326px;
  }
`,nb=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,h9=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  > svg {
    color: ${({theme:e})=>e.neutral_normal};
    font-size: 2.4rem;
  }
`,g9=h.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;

  > ul {
    margin-left: 20px;
  }
`,m9=_i().shape({password:et().required(Xt.campoRequired).min(6,Xt.senhaMin).matches(/(?=.*[0-9])/,"As diretrizes abaixo são obrigatória").matches(/(?=.*[a-z])/,"As diretrizes abaixo são obrigatória").matches(/(?=.*[A-Z])/,"As diretrizes abaixo são obrigatória").matches(/[^a-zA-Z0-9]/,"As diretrizes abaixo são obrigatória"),passwordConfirm:et().required(Xt.campoRequired).test("password-match",Xt.notMatch,function(e){return this.parent.password===e})}),x9=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  width: 100%;
  max-width: 426px;

  .containerSubmit{
    margin-bottom: 90px;
  }
  @media (max-width: 600px) {
    .containerSubmit{
    margin-bottom: 0px;
    }
  }

  @media (max-width: 600px) {
    width: 326px;
  }
`,v9=h.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    color: ${e=>`${e.colorTitle}`};
  }

  > p {
    font-size: 18px;
    line-height: 28px;
    color: ${({theme:e})=>e.gray_sys2};
  }
`;function b9(){const e=be(),t=()=>{e("/")};return w(x9,{children:[w(v9,{colorTitle:$.secundaria,children:[d("h2",{children:Cv.senha}),d("p",{children:Cv.text})]}),d(Co,{className:"containerSubmit",children:d(wo,{type:"button",onClick:t,colorBackground:$.secundaria,success:!0,label:vo.irLogin})})]})}function y9(){const[e,t]=C.useState(!1),n=be(),{register:i,handleSubmit:r,formState:{errors:o,isValid:a},watch:s}=qt({resolver:Oa(m9)}),l=s("password"),c=s("passwordConfirm"),u=/[a-z]/.test(l||""),f=/[A-Z]/.test(l||""),p=/[0-9]/.test(l||""),m=/\W/.test(l||""),g=(l||"").length>=6,x=y=>{console.log(y),t(!0)};return d(ie,{children:e?d(b9,{}):w(d9,{children:[w(f9,{children:[w("button",{type:"button",onClick:()=>Da(n),children:[d(h9,{children:d(Cf,{})}),Gp.voltar]}),w(n1,{children:[d("h2",{children:Gp.cadastrar}),d("p",{children:Gp.text})]})]}),w(p9,{onSubmit:r(x),children:[d(tb,{children:w(nb,{children:[d(ya,{colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,placeholder:ao.placeholderNova,...i("password"),hasError:!!o.password||l&&(!u||!f||!p||!m||!g)||!1,hasSuccess:!o.password&&u&&f&&p&&m&&g}),o.password&&d(lo,{children:o.password.message})]})}),d(tb,{children:w(nb,{children:[d(ya,{colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,placeholder:ao.placeholderRepita,...i("passwordConfirm"),hasError:!!o.passwordConfirm&&o.passwordConfirm.type==="required"||c&&l!==c||c&&c.length<6||void 0,hasSuccess:!o.passwordConfirm&&l===c&&(c==null?void 0:c.length)>=6}),o.passwordConfirm&&d(lo,{children:o.passwordConfirm.message})]})}),w(g9,{children:[d(s5,{success:u&&f&&p&&m&&g,children:" A senha deve conter pelo menos: "}),w("ul",{children:[d(ti,{success:u,children:"Uma letra minúscula"}),d(ti,{success:f,children:"Uma letra maiúscula"}),d(ti,{success:p,children:"Um número"}),d(ti,{success:m,children:"Um caractere especial"}),d(ti,{success:g,children:"Pelo menos 6 caracteres"})]})]}),d(Co,{className:"containerSubmit",children:d(wo,{type:"submit",colorBackground:$.secundaria,success:a,label:vo.salvar})})]})]})})}function w9(){const{tokenId:e}=K_(),t=be();return C.useEffect(()=>{e!=="123"&&t("/token-invalido")},[e,t]),d(y9,{})}const C9=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 426px;
`,E9=h.div`
  color: ${e=>`${e.colorTitle}`};
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
`,S9=h.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  .containerSubmit{
    margin-bottom: 90px;
  }

  @media (max-width: 600px) {
    .containerSubmit{
    margin-bottom: 0px;
  }
  }
`,ib=h.div`
  width: 365px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 600px) {
    width: 326px;
  }
`,rb=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,F9=h.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 0.5px;
  color: #5e5e5e;

  > button {
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;
    letter-spacing: 0.5px;
    background-color: transparent;
    color: #08bbe9;
    margin-left: 6px;
  }
`,k9=_i().shape({email:et().trim().email(Xt.emailInvalid).required(Xt.emailRequired),device_name:et(),password:et().trim().required(Xt.senhaRequired).min(6,Xt.senhaMin)}),l5=C.createContext({}),_9=({children:e})=>{const t=JSON.parse(localStorage.getItem("@App:user")||"null"),n=JSON.parse(localStorage.getItem("@App:isLogin")||"false"),[i,r]=C.useState(t),[o,a]=C.useState(n);C.useEffect(()=>{localStorage.setItem("@App:isLogin",JSON.stringify(o))},[o]);const s=C.useCallback(async c=>{var u;try{const f=await Oe.post(`${oo}login`,c),p={name:f.data.user.name,email:f.data.user.email,token:f.data.access_token,seller_id:((u=f.data.sellers[0])==null?void 0:u.seller_id)||null};localStorage.setItem("@App:user",JSON.stringify(p));const m=localStorage.getItem("@App:user");m&&r(JSON.parse(m)),a(!0)}catch(f){throw f}},[]),l=C.useCallback(async()=>{try{await Oe.post(`${oo}logout`,{},{headers:{Authorization:`Bearer ${i==null?void 0:i.token}`}}),localStorage.removeItem("@App:isLogin"),localStorage.removeItem("@App:user"),localStorage.removeItem("selectedItem"),r(null),a(!1)}catch(c){throw console.error(c),c}},[i]);return C.useEffect(()=>{const c=localStorage.getItem("@App:user");c&&r(JSON.parse(c))},[]),C.useEffect(()=>{const u=setInterval(async()=>{try{await Oe.get("https://api-pagueassim.stalopay.com.br/validatetoken",{headers:{Authorization:`Bearer ${i==null?void 0:i.token}`}})}catch{localStorage.removeItem("@App:isLogin"),localStorage.removeItem("@App:user"),localStorage.removeItem("selectedItem"),r(null),a(!1)}},2e4);return()=>{clearInterval(u)}},[i]),d(l5.Provider,{value:{dataUser:i,setDataUser:r,isLogin:o,setIsLogin:a,login:s,logout:l},children:e})};function lt(){const e=C.useContext(l5);if(!e)throw new Error("error");return e}function P9(){const e=be(),{login:t,isLogin:n}=lt(),[i,r]=C.useState(!1),{register:o,handleSubmit:a,setError:s,formState:{errors:l,isValid:c},watch:u}=qt({resolver:Oa(k9),defaultValues:{email:"",password:"",device_name:"API"}}),f=u("email"),p=u("password"),m=async g=>{r(!0);try{await t(g)}catch{r(!1),s("email",{type:"manual",message:"Confira se digitou o e-mail e senha corretamente"}),s("password",{type:"manual"}),Pe.error("Usuário ou senha inválidas")}finally{r(!1)}};return C.useEffect(()=>{n&&e("/home")}),w(C9,{children:[i&&d(Ve,{}),d(E9,{colorTitle:$.primaria,children:hS.title}),w(S9,{onSubmit:a(m),children:[d(ib,{children:w(rb,{children:[d(ne,{label:"Login",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,placeholder:ao.placeholderEmail,...o("email"),hasError:!!l.email,hasSuccess:!!f&&!l.email&&et().trim().email().isValidSync(f)}),l.email&&d(lo,{children:l.email.message})]})}),w(ib,{children:[w(rb,{children:[d(ya,{label:"Senha",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,placeholder:ao.placeholderSenha,...o("password"),hasError:!!l.password||(p?p.length<6:void 0),hasSuccess:!l.password&&(p==null?void 0:p.length)>=6&&et().trim().min(6).max(20).isValidSync(p)}),l.password&&d(lo,{children:l.password.message})]}),w(F9,{children:["Esqueceu a senha?",d("button",{onClick:()=>y8(e),type:"button",children:"Clique aqui"})]})]}),d(Co,{className:"containerSubmit",children:d(wo,{type:"submit",colorBackground:$.secundaria,success:c,disabled:i,label:i?d(QS,{size:10,color:"#ffffff"}):vo.login})})]})]})}const A9=h.div`
  background: ${e=>`${e.color}`};
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 38px;
`,D9=h.img`
  width: 100px;
  height: 28.14px;
  margin-bottom: 40px;
`,$9=h.div`
  width: 100%;
  padding: 0px 14px 0 14px;
  height: 75%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${e=>`${e.colorSec}`};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${e=>`${e.colorSec}`};
    border-radius: 4px;
  }
`,Ri=h.button`
  background-color: transparent;
         padding-left: 20px;
  width: 100%;
  max-width: 238px;
  height: 51px;

  display: flex;
  text-align: center;
  align-items: center;
  gap: 12px;

  font-weight: 700;
font-size: 12px;
line-height: 12px;
letter-spacing: 0.5px;
color: #FDFDFD;


  ${({selected:e,colorSec:t})=>e&&zm`
         color: #FDFDFD ;
       background: #08BBE9;
       border-radius: 5px;
    `}

  > svg {
    font-size: 23px;
  }
`;function O9(e){return Aa({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"}}]})(e)}const T9=C.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var M9=Object.defineProperty,vd=Object.getOwnPropertySymbols,c5=Object.prototype.hasOwnProperty,u5=Object.prototype.propertyIsEnumerable,ob=(e,t,n)=>t in e?M9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ab=(e,t)=>{for(var n in t||(t={}))c5.call(t,n)&&ob(e,n,t[n]);if(vd)for(var n of vd(t))u5.call(t,n)&&ob(e,n,t[n]);return e},sb=(e,t)=>{var n={};for(var i in e)c5.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&vd)for(var i of vd(e))t.indexOf(i)<0&&u5.call(e,i)&&(n[i]=e[i]);return n};const vn=C.forwardRef((e,t)=>{const n=e,{alt:i,color:r,size:o,weight:a,mirrored:s,children:l,weights:c}=n,u=sb(n,["alt","color","size","weight","mirrored","children","weights"]),f=C.useContext(T9),{color:p="currentColor",size:m,weight:g="regular",mirrored:x=!1}=f,y=sb(f,["color","size","weight","mirrored"]);return A.createElement("svg",ab(ab({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??m,height:o??m,fill:r??p,viewBox:"0 0 256 256",transform:s||x?"scale(-1, 1)":void 0},y),u),!!i&&A.createElement("title",null,i),l,c.get(a??g))});vn.displayName="IconBase";var I9=Object.defineProperty,L9=Object.defineProperties,R9=Object.getOwnPropertyDescriptors,lb=Object.getOwnPropertySymbols,B9=Object.prototype.hasOwnProperty,z9=Object.prototype.propertyIsEnumerable,cb=(e,t,n)=>t in e?I9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N9=(e,t)=>{for(var n in t||(t={}))B9.call(t,n)&&cb(e,n,t[n]);if(lb)for(var n of lb(t))z9.call(t,n)&&cb(e,n,t[n]);return e},V9=(e,t)=>L9(e,R9(t));const j9=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M208,20H72A36,36,0,0,0,36,56V224a12,12,0,0,0,12,12H192a12,12,0,0,0,0-24H60v-4a12,12,0,0,1,12-12H208a12,12,0,0,0,12-12V32A12,12,0,0,0,208,20ZM196,172H72a35.59,35.59,0,0,0-12,2.06V56A12,12,0,0,1,72,44H196Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32Z",opacity:"0.2"}),A.createElement("path",{d:"M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M216,32V192a8,8,0,0,1-8,8H72a16,16,0,0,0-16,16H192a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V56A32,32,0,0,1,72,24H208A8,8,0,0,1,216,32Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M208,26H72A30,30,0,0,0,42,56V224a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12H54v-2a18,18,0,0,1,18-18H208a6,6,0,0,0,6-6V32A6,6,0,0,0,208,26Zm-6,160H72a29.87,29.87,0,0,0-18,6V56A18,18,0,0,1,72,38H202Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M208,28H72A28,28,0,0,0,44,56V224a4,4,0,0,0,4,4H192a4,4,0,0,0,0-8H52v-4a20,20,0,0,1,20-20H208a4,4,0,0,0,4-4V32A4,4,0,0,0,208,28Zm-4,160H72a27.94,27.94,0,0,0-20,8.42V56A20,20,0,0,1,72,36H204Z"}))]]),d5=C.forwardRef((e,t)=>A.createElement(vn,V9(N9({ref:t},e),{weights:j9})));d5.displayName="Book";var H9=Object.defineProperty,U9=Object.defineProperties,W9=Object.getOwnPropertyDescriptors,ub=Object.getOwnPropertySymbols,q9=Object.prototype.hasOwnProperty,Z9=Object.prototype.propertyIsEnumerable,db=(e,t,n)=>t in e?H9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J9=(e,t)=>{for(var n in t||(t={}))q9.call(t,n)&&db(e,n,t[n]);if(ub)for(var n of ub(t))Z9.call(t,n)&&db(e,n,t[n]);return e},Y9=(e,t)=>U9(e,W9(t));const G9=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),A.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),f5=C.forwardRef((e,t)=>A.createElement(vn,Y9(J9({ref:t},e),{weights:G9})));f5.displayName="CaretDown";var K9=Object.defineProperty,X9=Object.defineProperties,Q9=Object.getOwnPropertyDescriptors,fb=Object.getOwnPropertySymbols,e$=Object.prototype.hasOwnProperty,t$=Object.prototype.propertyIsEnumerable,pb=(e,t,n)=>t in e?K9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,n$=(e,t)=>{for(var n in t||(t={}))e$.call(t,n)&&pb(e,n,t[n]);if(fb)for(var n of fb(t))t$.call(t,n)&&pb(e,n,t[n]);return e},i$=(e,t)=>X9(e,Q9(t));const r$=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M160,48V208L80,128Z",opacity:"0.2"}),A.createElement("path",{d:"M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z"}))]]),Cr=C.forwardRef((e,t)=>A.createElement(vn,i$(n$({ref:t},e),{weights:r$})));Cr.displayName="CaretLeft";var o$=Object.defineProperty,a$=Object.defineProperties,s$=Object.getOwnPropertyDescriptors,hb=Object.getOwnPropertySymbols,l$=Object.prototype.hasOwnProperty,c$=Object.prototype.propertyIsEnumerable,gb=(e,t,n)=>t in e?o$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u$=(e,t)=>{for(var n in t||(t={}))l$.call(t,n)&&gb(e,n,t[n]);if(hb)for(var n of hb(t))c$.call(t,n)&&gb(e,n,t[n]);return e},d$=(e,t)=>a$(e,s$(t));const f$=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M176,128,96,208V48Z",opacity:"0.2"}),A.createElement("path",{d:"M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"}))]]),p5=C.forwardRef((e,t)=>A.createElement(vn,d$(u$({ref:t},e),{weights:f$})));p5.displayName="CaretRight";var p$=Object.defineProperty,h$=Object.defineProperties,g$=Object.getOwnPropertyDescriptors,mb=Object.getOwnPropertySymbols,m$=Object.prototype.hasOwnProperty,x$=Object.prototype.propertyIsEnumerable,xb=(e,t,n)=>t in e?p$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v$=(e,t)=>{for(var n in t||(t={}))m$.call(t,n)&&xb(e,n,t[n]);if(mb)for(var n of mb(t))x$.call(t,n)&&xb(e,n,t[n]);return e},b$=(e,t)=>h$(e,g$(t));const y$=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M208,160H48l80-80Z",opacity:"0.2"}),A.createElement("path",{d:"M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z"}))]]),h5=C.forwardRef((e,t)=>A.createElement(vn,b$(v$({ref:t},e),{weights:y$})));h5.displayName="CaretUp";var w$=Object.defineProperty,C$=Object.defineProperties,E$=Object.getOwnPropertyDescriptors,vb=Object.getOwnPropertySymbols,S$=Object.prototype.hasOwnProperty,F$=Object.prototype.propertyIsEnumerable,bb=(e,t,n)=>t in e?w$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k$=(e,t)=>{for(var n in t||(t={}))S$.call(t,n)&&bb(e,n,t[n]);if(vb)for(var n of vb(t))F$.call(t,n)&&bb(e,n,t[n]);return e},_$=(e,t)=>C$(e,E$(t));const P$=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),A.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),g5=C.forwardRef((e,t)=>A.createElement(vn,_$(k$({ref:t},e),{weights:P$})));g5.displayName="Clipboard";var A$=Object.defineProperty,D$=Object.defineProperties,$$=Object.getOwnPropertyDescriptors,yb=Object.getOwnPropertySymbols,O$=Object.prototype.hasOwnProperty,T$=Object.prototype.propertyIsEnumerable,wb=(e,t,n)=>t in e?A$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M$=(e,t)=>{for(var n in t||(t={}))O$.call(t,n)&&wb(e,n,t[n]);if(yb)for(var n of yb(t))T$.call(t,n)&&wb(e,n,t[n]);return e},I$=(e,t)=>D$(e,$$(t));const L$=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M204,128a12,12,0,0,1-12,12H64a12,12,0,0,1,0-24H192A12,12,0,0,1,204,128Zm28-60H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Zm-80,96H104a12,12,0,0,0,0,24h48a12,12,0,0,0,0-24Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),A.createElement("path",{d:"M200,128a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,128Zm32-56H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-80,96H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM144,176H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm32-40H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm32-40H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M198,128a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H192A6,6,0,0,1,198,128Zm34-54H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm-80,96H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M200,128a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,128Zm32-56H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-80,96H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M196,128a4,4,0,0,1-4,4H64a4,4,0,0,1,0-8H192A4,4,0,0,1,196,128Zm36-52H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm-80,96H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Z"}))]]),Ma=C.forwardRef((e,t)=>A.createElement(vn,I$(M$({ref:t},e),{weights:L$})));Ma.displayName="FunnelSimple";var R$=Object.defineProperty,B$=Object.defineProperties,z$=Object.getOwnPropertyDescriptors,Cb=Object.getOwnPropertySymbols,N$=Object.prototype.hasOwnProperty,V$=Object.prototype.propertyIsEnumerable,Eb=(e,t,n)=>t in e?R$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j$=(e,t)=>{for(var n in t||(t={}))N$.call(t,n)&&Eb(e,n,t[n]);if(Cb)for(var n of Cb(t))V$.call(t,n)&&Eb(e,n,t[n]);return e},H$=(e,t)=>B$(e,z$(t));const U$=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),A.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),Eo=C.forwardRef((e,t)=>A.createElement(vn,H$(j$({ref:t},e),{weights:U$})));Eo.displayName="MagnifyingGlass";var W$=Object.defineProperty,q$=Object.defineProperties,Z$=Object.getOwnPropertyDescriptors,Sb=Object.getOwnPropertySymbols,J$=Object.prototype.hasOwnProperty,Y$=Object.prototype.propertyIsEnumerable,Fb=(e,t,n)=>t in e?W$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G$=(e,t)=>{for(var n in t||(t={}))J$.call(t,n)&&Fb(e,n,t[n]);if(Sb)for(var n of Sb(t))Y$.call(t,n)&&Fb(e,n,t[n]);return e},K$=(e,t)=>q$(e,Z$(t));const X$=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M220,96A92,92,0,1,0,68,165.69V240a12,12,0,0,0,17.37,10.73L128,229.42l42.64,21.31A12,12,0,0,0,188,240V165.69A91.86,91.86,0,0,0,220,96ZM60,96a68,68,0,1,1,68,68A68.07,68.07,0,0,1,60,96ZM164,220.59l-30.64-15.32a12,12,0,0,0-10.74,0L92,220.58V180.66a92,92,0,0,0,72,0ZM128,148A52,52,0,1,0,76,96,52.06,52.06,0,0,0,128,148Zm0-80a28,28,0,1,1-28,28A28,28,0,0,1,128,68Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M176,96a48,48,0,1,1-48-48A48,48,0,0,1,176,96Z",opacity:"0.2"}),A.createElement("path",{d:"M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96ZM168,227.06l-36.43-18.21a8,8,0,0,0-7.16,0L88,227.06V174.37a87.89,87.89,0,0,0,80,0ZM128,152A56,56,0,1,0,72,96,56.06,56.06,0,0,0,128,152Zm0-96A40,40,0,1,1,88,96,40,40,0,0,1,128,56Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96Zm16,0a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M214,96A86,86,0,1,0,74,162.87V240a6,6,0,0,0,2.85,5.1A5.93,5.93,0,0,0,80,246a6,6,0,0,0,2.68-.63L128,222.71l45.33,22.66A6,6,0,0,0,182,240V162.87A85.87,85.87,0,0,0,214,96ZM54,96a74,74,0,1,1,74,74A74.09,74.09,0,0,1,54,96ZM170,230.29l-39.33-19.66a6,6,0,0,0-5.36,0L86,230.29V171a85.75,85.75,0,0,0,84,0ZM128,150A54,54,0,1,0,74,96,54.06,54.06,0,0,0,128,150Zm0-96A42,42,0,1,1,86,96,42,42,0,0,1,128,54Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96ZM168,227.06l-36.43-18.21a8,8,0,0,0-7.16,0L88,227.06V174.37a87.89,87.89,0,0,0,80,0ZM128,152A56,56,0,1,0,72,96,56.06,56.06,0,0,0,128,152Zm0-96A40,40,0,1,1,88,96,40,40,0,0,1,128,56Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M212,96A84,84,0,1,0,76,161.9V240a4,4,0,0,0,4,4,4.05,4.05,0,0,0,1.79-.42L128,220.47l46.22,23.11A4,4,0,0,0,180,240V161.9A83.89,83.89,0,0,0,212,96ZM172,233.53l-42.22-21.11a4,4,0,0,0-3.58,0L84,233.53v-66a83.8,83.8,0,0,0,88,0ZM128,172a76,76,0,1,1,76-76A76.08,76.08,0,0,1,128,172Zm0-128a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,44Zm0,96a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,140Z"}))]]),m5=C.forwardRef((e,t)=>A.createElement(vn,K$(G$({ref:t},e),{weights:X$})));m5.displayName="Medal";var Q$=Object.defineProperty,eO=Object.defineProperties,tO=Object.getOwnPropertyDescriptors,kb=Object.getOwnPropertySymbols,nO=Object.prototype.hasOwnProperty,iO=Object.prototype.propertyIsEnumerable,_b=(e,t,n)=>t in e?Q$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rO=(e,t)=>{for(var n in t||(t={}))nO.call(t,n)&&_b(e,n,t[n]);if(kb)for(var n of kb(t))iO.call(t,n)&&_b(e,n,t[n]);return e},oO=(e,t)=>eO(e,tO(t));const aO=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M236,96a12,12,0,0,0-.44-3.3L221.2,42.51A20.08,20.08,0,0,0,202,28H54A20.08,20.08,0,0,0,34.8,42.51L20.46,92.7A12,12,0,0,0,20,96l0,16a43.94,43.94,0,0,0,16,33.92V208a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V145.92A43.94,43.94,0,0,0,236,112Zm-24,16a20,20,0,0,1-40,0v-4h40ZM44,112v-4H84v4a20,20,0,0,1-40,0Zm64-4h40v4a20,20,0,0,1-40,0ZM57.05,52H199l9.14,32H47.91ZM196,204H60V155.81c1.32.12,2.65.19,4,.19a43.86,43.86,0,0,0,32-13.85,43.89,43.89,0,0,0,64,0A43.86,43.86,0,0,0,192,156c1.35,0,2.68-.07,4-.19Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M224,96v16a32,32,0,0,1-64,0V96H96v16a32,32,0,0,1-64,0V96L46.34,45.8A8,8,0,0,1,54,40H202a8,8,0,0,1,7.69,5.8Z",opacity:"0.2"}),A.createElement("path",{d:"M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96v16a40,40,0,0,0,16,32v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V144a40,40,0,0,0,16-32ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-48,0v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm-8-72a24,24,0,0,1-24-24v-8h48v8A24,24,0,0,1,192,136Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96h0v16a40,40,0,0,0,16,32v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V144a40,40,0,0,0,16-32V96ZM88,112a24,24,0,0,1-35.12,21.26,7.88,7.88,0,0,0-1.82-1.06A24,24,0,0,1,40,112v-8H88Zm64,0a24,24,0,0,1-48,0v-8h48Zm64,0a24,24,0,0,1-11.07,20.2,8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M230,96a6.19,6.19,0,0,0-.22-1.65l-14.34-50.2A14.07,14.07,0,0,0,202,34H54A14.07,14.07,0,0,0,40.57,44.15L26.23,94.35A6.19,6.19,0,0,0,26,96v16A38,38,0,0,0,42,143V208a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V143A38,38,0,0,0,230,112ZM52.11,47.45A2,2,0,0,1,54,46H202a2,2,0,0,1,1.92,1.45L216.05,90H40ZM102,102h52v10a26,26,0,0,1-52,0Zm-64,0H90v10a26,26,0,0,1-52,0ZM202,208a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V148.66a38,38,0,0,0,42-16.21,37.95,37.95,0,0,0,64,0,38,38,0,0,0,42,16.21Zm-10-70a26,26,0,0,1-26-26V102h52v10A26,26,0,0,1,192,138Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96v16a40,40,0,0,0,16,32v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V144a40,40,0,0,0,16-32ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-48,0v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm-8-72a24,24,0,0,1-24-24v-8h48v8A24,24,0,0,1,192,136Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M28,112a36,36,0,0,0,16,29.92V208a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V141.92A36,36,0,0,0,228,112l0-16a4.09,4.09,0,0,0-.13-1.1L213.5,44.7A12,12,0,0,0,202,36H54A12,12,0,0,0,42.5,44.7L28.15,94.9A4.09,4.09,0,0,0,28,96ZM50.19,46.9A4,4,0,0,1,54,44H202a4,4,0,0,1,3.84,2.9L218.7,92H37.3ZM100,100h56v12a28,28,0,0,1-56,0ZM36,112V100H92v12a28,28,0,0,1-56,0Zm168,96a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V145.94a36,36,0,0,0,44-17.48,36,36,0,0,0,64,0,36,36,0,0,0,44,17.48Zm-12-68a28,28,0,0,1-28-28V100h56v12A28,28,0,0,1,192,140Z"}))]]),x5=C.forwardRef((e,t)=>A.createElement(vn,oO(rO({ref:t},e),{weights:aO})));x5.displayName="Storefront";var sO=Object.defineProperty,lO=Object.defineProperties,cO=Object.getOwnPropertyDescriptors,Pb=Object.getOwnPropertySymbols,uO=Object.prototype.hasOwnProperty,dO=Object.prototype.propertyIsEnumerable,Ab=(e,t,n)=>t in e?sO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fO=(e,t)=>{for(var n in t||(t={}))uO.call(t,n)&&Ab(e,n,t[n]);if(Pb)for(var n of Pb(t))dO.call(t,n)&&Ab(e,n,t[n]);return e},pO=(e,t)=>lO(e,cO(t));const hO=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M246.15,133.18,146.83,33.86A19.85,19.85,0,0,0,132.69,28H40A12,12,0,0,0,28,40v92.69a19.85,19.85,0,0,0,5.86,14.14l99.32,99.32a20,20,0,0,0,28.28,0l84.69-84.69A20,20,0,0,0,246.15,133.18Zm-98.83,93.17L52,131V52h79l95.32,95.32ZM100,84A16,16,0,1,1,84,68,16,16,0,0,1,100,84Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M237.66,153,153,237.66a8,8,0,0,1-11.31,0L42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32A8,8,0,0,1,237.66,153Z",opacity:"0.2"}),A.createElement("path",{d:"M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M241.91,137.42,142.59,38.1a13.94,13.94,0,0,0-9.9-4.1H40a6,6,0,0,0-6,6v92.69a13.94,13.94,0,0,0,4.1,9.9l99.32,99.32a14,14,0,0,0,19.8,0l84.69-84.69A14,14,0,0,0,241.91,137.42Zm-8.49,11.31-84.69,84.69a2,2,0,0,1-2.83,0L46.59,134.1a2,2,0,0,1-.59-1.41V46h86.69a2,2,0,0,1,1.41.59l99.32,99.31A2,2,0,0,1,233.42,148.73ZM94,84A10,10,0,1,1,84,74,10,10,0,0,1,94,84Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M240.49,138.83,141.17,39.51A11.93,11.93,0,0,0,132.69,36H40a4,4,0,0,0-4,4v92.69a11.93,11.93,0,0,0,3.51,8.48l99.32,99.32a12,12,0,0,0,17,0l84.69-84.69a12,12,0,0,0,0-17Zm-5.66,11.31-84.69,84.69a4,4,0,0,1-5.65,0L45.17,135.51A4,4,0,0,1,44,132.69V44h88.69a4,4,0,0,1,2.82,1.17l99.32,99.32A4,4,0,0,1,234.83,150.14ZM92,84a8,8,0,1,1-8-8A8,8,0,0,1,92,84Z"}))]]),v5=C.forwardRef((e,t)=>A.createElement(vn,pO(fO({ref:t},e),{weights:hO})));v5.displayName="Tag";var gO=Object.defineProperty,mO=Object.defineProperties,xO=Object.getOwnPropertyDescriptors,Db=Object.getOwnPropertySymbols,vO=Object.prototype.hasOwnProperty,bO=Object.prototype.propertyIsEnumerable,$b=(e,t,n)=>t in e?gO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yO=(e,t)=>{for(var n in t||(t={}))vO.call(t,n)&&$b(e,n,t[n]);if(Db)for(var n of Db(t))bO.call(t,n)&&$b(e,n,t[n]);return e},wO=(e,t)=>mO(e,xO(t));const CO=new Map([["bold",A.createElement(A.Fragment,null,A.createElement("path",{d:"M228,152v56a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V152a12,12,0,0,1,24,0v52H204V152a12,12,0,0,1,24,0ZM96.49,88.49,116,69v83a12,12,0,0,0,24,0V69l19.51,19.52a12,12,0,0,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,0,0,17,17Z"}))],["duotone",A.createElement(A.Fragment,null,A.createElement("path",{d:"M168,80H88l40-40Z",opacity:"0.2"}),A.createElement("path",{d:"M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM80.61,83.06a8,8,0,0,1,1.73-8.72l40-40a8,8,0,0,1,11.32,0l40,40A8,8,0,0,1,168,88H136v64a8,8,0,0,1-16,0V88H88A8,8,0,0,1,80.61,83.06ZM107.31,72h41.38L128,51.31Z"}))],["fill",A.createElement(A.Fragment,null,A.createElement("path",{d:"M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM88,88h32v64a8,8,0,0,0,16,0V88h32a8,8,0,0,0,5.66-13.66l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,88,88Z"}))],["light",A.createElement(A.Fragment,null,A.createElement("path",{d:"M222,152v56a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V152a6,6,0,0,1,12,0v56a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2V152a6,6,0,0,1,12,0ZM92.24,84.24,122,54.49V152a6,6,0,0,0,12,0V54.49l29.76,29.75a6,6,0,0,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,8.48,8.48Z"}))],["regular",A.createElement(A.Fragment,null,A.createElement("path",{d:"M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM93.66,85.66,120,59.31V152a8,8,0,0,0,16,0V59.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,85.66Z"}))],["thin",A.createElement(A.Fragment,null,A.createElement("path",{d:"M220,152v56a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V152a4,4,0,0,1,8,0v56a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4V152a4,4,0,0,1,8,0ZM90.83,82.83,124,49.66V152a4,4,0,0,0,8,0V49.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"}))]]),i1=C.forwardRef((e,t)=>A.createElement(vn,wO(yO({ref:t},e),{weights:CO})));i1.displayName="UploadSimple";function EO(e){return Aa({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]})(e)}function SO(e){return Aa({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M855.7 210.8l-42.4-42.4a8.03 8.03 0 0 0-11.3 0L168.3 801.9a8.03 8.03 0 0 0 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144zm0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zm416 344c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144zm0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z"}}]})(e)}const Bi={home:"Inicio",vendas:"Vendas",estabelecimentos:"Estabelecimentos",licenciados:"Licenciados",plano:"Plano e Divisões",extrato:"Extrato",compliance:"Compliance",solicitacoes:"Solicitações"};function FO(){const e=be(),[t,n]=C.useState(()=>{const r=localStorage.getItem("selectedItem");return r?Number(r):0});C.useEffect(()=>{localStorage.setItem("selectedItem",t.toString())},[t]);const i=(r,o)=>{n(r),e(o)};return w(A9,{color:$.primaria,children:[d(D9,{src:so.backgroundLogo}),w($9,{colorSec:$.secundaria,children:[w(Ri,{colorSec:$.secundaria,selected:t===0,onClick:()=>i(0,"/home"),children:[d(O9,{})," ",Bi.home]}),w(Ri,{colorSec:$.secundaria,selected:t===1,onClick:()=>i(1,"/vendas"),children:[d(v5,{})," ",Bi.vendas]}),w(Ri,{colorSec:$.secundaria,selected:t===2,onClick:()=>i(2,"/estabelecimentos"),children:[d(x5,{})," ",Bi.estabelecimentos]}),w(Ri,{colorSec:$.secundaria,selected:t===3,onClick:()=>i(3,"/licenciados"),children:[d(m5,{})," ",Bi.licenciados]}),w(Ri,{colorSec:$.secundaria,selected:t===4,onClick:()=>i(4,"/plans"),children:[d(SO,{})," ",Bi.plano]}),w(Ri,{colorSec:$.secundaria,selected:t===5,onClick:()=>i(5,"/commission/daily"),children:[d(EO,{})," ",Bi.extrato]}),w(Ri,{colorSec:$.secundaria,selected:t===6,onClick:()=>i(6,"/compliance"),children:[d(d5,{})," ",Bi.compliance]}),w(Ri,{colorSec:$.secundaria,selected:t===7,onClick:()=>i(7,"/solicitacoes"),children:[d(g5,{})," ",Bi.solicitacoes]})]})]})}const kO=h.div`
  display: flex;
`,_O=h.div`
 position: fixed;
  width: 100%;
  max-width: 240px;
  height: 100vh;
`,PO=h.div`
 width: 100%;
  padding-left: 240px;
`,AO=h.div`
  width: 100%;
  background-color: ${({theme:e})=>e.white_sys};
  /* height: 100%; */
`,DO=h.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #C8CBD9;
`,$O=h.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 32px;
`,Ob=h.p`
 color: #1F384C;
font-size: 12px;
line-height: 13px;
letter-spacing: 0.5px;
`,OO=h.div`
  position: fixed;
  top: 78px;
  z-index: 500;
`,Tb=h.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 12px;
  color: #B0C3CC;

  > svg {
    font-size: 18px;
  }
`,Mb=h.img`
  border-radius: 50%;
  width: 35px;
height: 35px;
`;h.p`
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: ${({theme:e})=>e.neutral_darker};
`;const TO=h.button`
  background: transparent;
  margin-right: 10px;
`,MO=h.div`
  width: 183px;
  height: 157px;

  background: ${({theme:e})=>e.white_sys};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19px;
`,Ib=h.button`
  background-color: transparent;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:e})=>e.neutral_normal};
`,IO=h.button`
  background-color: transparent;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:e})=>e.red_error};
`,LO=h.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Lb=h.div`
  width: 160px;
  height: 0px;
  border: 1px solid rgba(125, 125, 125, 0.15);
`;function RO({closeModal:e}){const{logout:t}=lt(),n=be();return w(MO,{children:[d(Ib,{onClick:e,children:"Meus Dados"}),w(LO,{children:[d(Lb,{}),d(Ib,{onClick:()=>{console.log("handleUserListClick chamado"),n("/userlist"),e(),localStorage.setItem("selectedItem","0"),console.log(localStorage.getItem("selectedItem"))},children:"Usuários"}),d(Lb,{})]}),d(IO,{onClick:()=>{t(),e()},children:"Sair"})]})}const bl="/assets/perfil-c7b18c8c.svg",BO="/assets/Notif-ff49eebb.svg";function zO(){const{dataUser:e}=lt(),[t,n]=C.useState(!1),i=()=>{n(!1)};return C.useEffect(()=>{const r=()=>{t&&i()};return t&&window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[t]),w(DO,{children:[d("p",{}),w($O,{children:[t?w(Tb,{color:$.secundaria,onClick:i,children:[d(Mb,{color:$.secundaria,src:bl}),d(Ob,{children:e==null?void 0:e.name}),d(h5,{})]}):w(Tb,{color:$.secundaria,onClick:()=>n(!0),children:[d(Mb,{color:$.secundaria,src:bl}),d(Ob,{children:e==null?void 0:e.name}),d(f5,{})]}),w(TO,{children:[" ",d("img",{src:BO,alt:""})]}),d(OO,{children:t&&d(RO,{closeModal:i})})]})]})}function NO(){const{isLogin:e}=lt(),t=be();return C.useEffect(()=>{e||t("/")}),w(kO,{children:[d(_O,{children:d(FO,{})}),w(PO,{children:[d(zO,{}),d(AO,{children:d(dS,{})})]})]})}const VO=h.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(0.2813rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 80px 120px;

  @media (max-width: 900px) {
    padding: 60px;
  }
`,jO=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;

  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }

`,HO=h.div`
  position: relative;
  width: 50%;
  height: 100%;
  border-radius: 0rem 2rem 2rem 0rem;
  background-image: url(${so.backModal});
  background-size: cover;
  background-position: center;


  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${$.secundaria};
    opacity: 0.6;
    z-index: 1;
    border-radius: 0rem 2rem 2rem 0rem;
    background-blend-mode: multiply, normal;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 120px;
    border-radius: 0;

    &::after {
      border-radius: 0;
    }
  }
`,UO=h.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 60px;
    gap: 60px;
  }

`,WO=h.div`
  width: 349px;

  p {
    font-weight: 700;
    font-size: 38px;
    line-height: 52px;
    color: ${$.secundaria};

    span {
      font-weight: 700;
      font-size: 38px;
      line-height: 52px;
      color: ${$.primaria};
    }
  }

  @media (max-width: 900px) {
    width: 240px;
    p  {
      font-size: 28px;
      line-height: 32px;
      span{
      font-size: 28px;
      line-height: 32px;
    }
    }

  }
`,qO=h.button`
  background: ${$.secundaria};
  border: 0.5px solid ${$.primaria};
  border-radius: 5px;

  width: 213px;
  height: 35px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #ffffff;
`,ZO=h.img`
 width: 196px;

 @media (max-width: 900px){
  width: 156px;
 }
`;function Mf({onClose:e,visible:t,text:n}){return C.useEffect(()=>{function i(r){r.key==="Escape"&&e()}return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[e]),t?d(ie,{children:d(VO,{children:w(jO,{children:[d(HO,{}),w(UO,{children:[w("div",{children:[d(ZO,{src:so.deixaNoAzul,alt:""}),d(WO,{children:w("p",{children:[n," ",d("span",{children:"com sucesso!"})]})})]}),d(qO,{onClick:()=>e(),children:"Concluir"})]})]})})}):null}const JO=h.div`
   display: flex;
    flex-direction: column;
    align-items: center;

`,YO=h.div`
  width: 100%;
  max-width: 920px;
  margin-top: 50px;
`,GO=h.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`,KO=h.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`,XO=h.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`,QO=h.div`
  width: ${({isActive:e,isCurrent:t})=>e&&t?"40px":"25px"};
  height: ${({isActive:e,isCurrent:t})=>e&&t?"40px":"25px"};
  border-radius: 50%;
  background-color: ${({isActive:e,isCurrent:t})=>e&&t?"#F7F7F7":e?"#08BBE9":"#F7F7F7"};
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`,eT=h.span`
  font-size: ${({isActive:e})=>e?"16px":"14px"};
  color: ${({labelStatus:e})=>e==="active"?"#FDFDFD":e==="current"||e==="upcoming"?"#000000":"#FDFDFD"};
`,tT=h.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 7px;
  background: #F7F7F7;
  width: 100%;
  transform: translateY(-50%);
  border-radius: 3.5px;
  z-index: 0;
`,nT=h.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 7px;
  background: ${({isActive:e})=>e?"#08BBE9":"transparent"};
  width: ${({width:e})=>e};
  transform: translateY(-50%);
  z-index: 1;
  transition: width 0.4s ease;
  border-radius: 3.5px;
`,iT=h.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
`;function rT({steps:e,currentStep:t,setCurrentStep:n,startProgress:i,endProgress:r,canAdvance:o,canGoBack:a,stepLabels:s}){const[l,c]=C.useState(null),u=`${(t-i)/(r-i)*100}%`,f=g=>g<t?"active":g===t?"current":g>t?"upcoming":"disabled",p=g=>{(g<t&&a||o&&g>=i&&g<=r)&&n(g)};return d(GO,{children:w(KO,{children:[d(tT,{onClick:()=>{o&&n(5)}}),d(nT,{isActive:t>=i,width:u}),[d("div",{}),...e,d("div",{})].map((g,x)=>d(XO,{onClick:()=>p(x),onMouseEnter:()=>c(x),onMouseLeave:()=>c(null),children:x===0||x===e.length+1?null:w(ie,{children:[l===x&&d(iT,{children:s?s[x-1]:`Step ${x}`}),d(QO,{isActive:x<=t,isCurrent:x===t,children:d(eT,{isActive:x===t,labelStatus:f(x),isCurrent:x===t,children:x})})]})},x))]})})}var Fe={},jl={};Object.defineProperty(jl,"__esModule",{value:!0});jl.validatePhone=void 0;function oT(e){var t=e.replace(/\D/g,""),n=/^(.)\1*$/;if(!(t.length>=8&&t.length<=11)||n.test(t)||t.length>9&&[0,1].indexOf(t.indexOf("0"))!==-1)return!1;var i=t.length>9?t.substring(2):t;return i.length===8?[2,3,4,5,7].indexOf(+i[0])!==-1:i[0]==="9"}jl.validatePhone=oT;var Hl={};Object.defineProperty(Hl,"__esModule",{value:!0});Hl.validateEmail=void 0;function aT(e){var t=/^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,10}$/i,n=e;return t.test(n)?!!n:!1}Hl.validateEmail=aT;var Ul={};Object.defineProperty(Ul,"__esModule",{value:!0});Ul.validateCep=void 0;Ul.validateCep=function(){var e=/^([\d]{8}|[\d]{5}-[\d]{3})$/;return function(t){return typeof t=="string"&&e.test(t)}}();var Wl={};Object.defineProperty(Wl,"__esModule",{value:!0});Wl.validateUF=void 0;Wl.validateUF=function(){var e=/^(?:ac|al|ap|am|ba|ce|df|es|go|ma|mt|ms|mg|pa|pb|pr|pe|pi|rj|rn|rs|ro|rr|sc|sp|se|to)$/i;return function(t){return typeof t=="string"&&e.test(t)}}();var ql={},Zl={};Object.defineProperty(Zl,"__esModule",{value:!0});Zl.mod11=void 0;var sT=function(e,t){for(var n=String(e).replace(/\D/g,""),i=0,r=2,o=n.length-1;o>=0;o--)i+=r*+n[o],++r>t&&(r=2);var a=i*10%11%10;return a};Zl.mod11=sT;Object.defineProperty(ql,"__esModule",{value:!0});ql.validateCNPJ=void 0;var Rb=Zl;function lT(e){var t=String(e).replace(/[^\d]+/g,"");if(t===""||t.length!==14||t==="00000000000000"||t==="11111111111111"||t==="22222222222222"||t==="33333333333333"||t==="44444444444444"||t==="55555555555555"||t==="66666666666666"||t==="77777777777777"||t==="88888888888888"||t==="99999999999999")return!1;var n=t.substring(0,t.length-2),i=(0,Rb.mod11)(n,9),r=(0,Rb.mod11)(n+i,9);return n+i+r===t}ql.validateCNPJ=lT;var Jl={};Object.defineProperty(Jl,"__esModule",{value:!0});Jl.validateCPF=void 0;var Bb=Zl,cT=function(e){var t=e.replace(new RegExp(e[0],"g"),"").trim().length===0;return t};function uT(e){var t=String(e).replace(/\D/g,"");if(t.length!==11)return!1;var n=t.substring(0,t.length-2);if(!t||cT(t))return!1;var i=(0,Bb.mod11)(n,12),r=(0,Bb.mod11)(n+i,12);return n+i+r===t}Jl.validateCPF=uT;var If={},b5={},Lf={};Object.defineProperty(Lf,"__esModule",{value:!0});Lf.validateAC=void 0;function zb(e){var t=e.length-7,n=0;e.split("").forEach(function(a){n+=+a*t,t--,t===1&&(t=9)});var i=11,r=n%i,o=i-r;return o>=10&&(o=0),o}function dT(e){var t=String(e).replace(/\D/g,"");if(t.length!==13||t.substr(0,2)!=="01")return!1;var n=t.length,i=t.substr(0,n-2),r=zb(i),o=zb(i+r.toString()),a=t.length-1,s=t.length-2;return+t[s]===r&&+t[a]===o}Lf.validateAC=dT;var Rf={};Object.defineProperty(Rf,"__esModule",{value:!0});Rf.validateAL=void 0;function fT(e){var t=String(e).replace(/\D/g,"");if(t.length!==9)return!1;for(var n=9,i=8,r=0,o=0;o<i;o++)r+=+t.charAt(o)*n,n--;var a=r*10,s=a-Math.floor(a/11)*11;return s>=10&&(s=0),s===+t.charAt(i)}Rf.validateAL=fT;var Bf={};Object.defineProperty(Bf,"__esModule",{value:!0});Bf.validateAM=void 0;function pT(e){var t=String(e).replace(/\D/g,"");if(t.length!==9)return!1;var n=t.length,i=n-1,r=n,o=t.substr(0,i),a=0,s=0;if(o.split("").forEach(function(c){a+=+c*r,r--}),a<11)s=11-a;else{var l=a%11;s=11-l,s>=10&&(s=0)}return s===+t.charAt(i)}Bf.validateAM=pT;var zf={};Object.defineProperty(zf,"__esModule",{value:!0});zf.validateAP=void 0;function hT(e){var t=String(e).replace(/\D/g,"");if(t.length!==9||t.substr(0,2)!=="03")return!1;var n=t.length,i=n-1,r=n,o=t.substr(0,i),a=+o,s=0,l=0;a>=3000001&&a<=3017e3?(s=5,l=0):a>=3017001&&a<=3019022&&(s=9,l=1);var c=s;o.split("").forEach(function(f){c+=+f*r,r--});var u=11-c%11;return u===10&&(u=0),u===11&&(u=l),u===+t.charAt(i)}zf.validateAP=hT;var Nf={};Object.defineProperty(Nf,"__esModule",{value:!0});Nf.validateBA=void 0;function gT(e){var t=0;e.length===9&&(t=1);var n=+e.substr(t,1),i=[0,1,2,3,4,5,8];return i.indexOf(n)>=0?10:11}function Nb(e,t){var n=e.length+1,i=0;e.split("").forEach(function(a){i+=+a*n,n--});var r=i%t,o=t-r;return o>=10&&(o=0),o}function mT(e){var t=String(e).replace(/\D/g,""),n=t.length;if(![8,9].includes(n))return!1;var i=t.substr(0,n-2),r=gT(t),o=Nb(i,r),a=Nb(i+o,r),s=n-1,l=n-2,c=+t.charAt(l),u=+t.charAt(s);return c===a&&u===o}Nf.validateBA=mT;var On={};Object.defineProperty(On,"__esModule",{value:!0});On.validateCE=void 0;function xT(e){var t=String(e).replace(/\D/g,""),n=t.length;if(n!==9)return!1;var i=n-1,r=n,o=t.substr(0,i),a=0;o.split("").forEach(function(c){a+=+c*r,r--});var s=a%11,l=11-s;return l>=10&&(l=0),l===+t.charAt(i)}On.validateCE=xT;var Vf={};Object.defineProperty(Vf,"__esModule",{value:!0});Vf.validateDF=void 0;function Vb(e){var t=e.length-7,n=0;e.split("").forEach(function(a){n+=+a*t,t--,t===1&&(t=9)});var i=11,r=n%i,o=i-r;return o>=10&&(o=0),o}function vT(e){var t=String(e).replace(/\D/g,""),n=t.length;if(n!==13||t.substr(0,2)!=="07"&&t.substr(0,2)!=="08")return!1;var i=t.substr(0,n-2),r=Vb(i),o=Vb(i+r),a=n-1,s=n-2,l=+t.charAt(s),c=+t.charAt(a);return l===r&&c===o}Vf.validateDF=vT;var y5={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateES=void 0;var t=On;Object.defineProperty(e,"validateES",{enumerable:!0,get:function(){return t.validateCE}})})(y5);var jf={};Object.defineProperty(jf,"__esModule",{value:!0});jf.validateGO=void 0;function bT(e){var t=String(e).replace(/\D/g,""),n=t.length;if(n!==9)return!1;var i=["10","11","15"],r=t.substr(0,2);if(!(i.indexOf(r)>=0))return!1;var o=n-1,a=n,s=t.substr(0,o),l=+s,c=0;s.split("").forEach(function(p){c+=+p*a,a--});var u=c%11,f=11-u;return f>=10&&(f===11&&l>=10103105&&l<=10119997?f=1:f=0),f===+t.charAt(o)}jf.validateGO=bT;var Hf={};Object.defineProperty(Hf,"__esModule",{value:!0});Hf.validateMA=void 0;var yT=On;function wT(e){var t=String(e).replace(/\D/g,"");return t.substr(0,2)!=="12"?!1:(0,yT.validateCE)(t)}Hf.validateMA=wT;var Uf={};Object.defineProperty(Uf,"__esModule",{value:!0});Uf.validateMG=void 0;function CT(e){var t=e.slice(0,3)+0+e.slice(3),n="";t.split("").forEach(function(l,c){var u=(c+3)%2===0?2:1;n+=+l*u});var i=0;n.split("").forEach(function(l){i+=+l});var r=i.toString(),o=r.length,a=r.substr(o-1,1),s=+a;return s===0?0:10-s}function ET(e){var t=3,n=0;e.split("").forEach(function(o){n+=+o*t,t--,t===1&&(t=11)});var i=n%11,r=11-i;return r>=10&&(r=0),r}function ST(e){var t=String(e).replace(/\D/g,""),n=t.length;if(n!==13)return!1;var i=n-2,r=n-1,o=t.substring(0,11),a=CT(o),s=ET(o+a),l=+t.charAt(i),c=+t.charAt(r);return a===l&&s===c}Uf.validateMG=ST;var Wf={};Object.defineProperty(Wf,"__esModule",{value:!0});Wf.validateMS=void 0;var FT=On;function kT(e){var t=String(e).replace(/\D/g,"");return t.substr(0,2)!=="28"?!1:(0,FT.validateCE)(t)}Wf.validateMS=kT;var qf={};Object.defineProperty(qf,"__esModule",{value:!0});qf.validateMT=void 0;function _T(e){var t=String(e).replace(/\D/g,""),n=t.length;if(n!==11)return!1;var i=n-1,r=3,o=t.substr(0,i),a=0;o.split("").forEach(function(c){a+=+c*r,r--,r===1&&(r=9)});var s=a%11,l=11-s;return l>=10&&(l=0),l===+t.charAt(i)}qf.validateMT=_T;var Zf={};Object.defineProperty(Zf,"__esModule",{value:!0});Zf.validatePA=void 0;var PT=On;function AT(e){var t=String(e).replace(/\D/g,"");return t.substr(0,2)!=="15"?!1:(0,PT.validateCE)(t)}Zf.validatePA=AT;var w5={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validatePB=void 0;var t=On;Object.defineProperty(e,"validatePB",{enumerable:!0,get:function(){return t.validateCE}})})(w5);var Jf={};Object.defineProperty(Jf,"__esModule",{value:!0});Jf.validatePE=void 0;function jb(e){var t=e.length+1,n=0;e.split("").forEach(function(a){n+=+a*t,t--});var i=11,r=n%i,o=i-r;return o>=10&&(o=0),o}function DT(e){var t=String(e).replace(/\D/g,""),n=t.length;if(n!==9)return!1;var i=e.substr(0,n-2),r=jb(i),o=jb(i+r),a=n-1,s=n-2,l=+t.charAt(s),c=+t.charAt(a);return l===r&&c===o}Jf.validatePE=DT;var C5={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validatePI=void 0;var t=On;Object.defineProperty(e,"validatePI",{enumerable:!0,get:function(){return t.validateCE}})})(C5);var Yf={};Object.defineProperty(Yf,"__esModule",{value:!0});Yf.validatePR=void 0;function Hb(e){var t=e.length-5,n=0;e.split("").forEach(function(a){n+=+a*t,t--,t===1&&(t=7)});var i=11,r=n%i,o=i-r;return o>=10&&(o=0),o}function $T(e){var t=String(e).replace(/\D/g,""),n=t.length;if(n!==10)return!1;var i=t.substr(0,n-2),r=Hb(i),o=Hb(i+r),a=n-1,s=n-2,l=+t.charAt(s),c=+t.charAt(a);return l===r&&c===o}Yf.validatePR=$T;var Gf={};Object.defineProperty(Gf,"__esModule",{value:!0});Gf.validateRJ=void 0;function OT(e){var t=String(e).replace(/\D/g,""),n=t.length;if(n!==8)return!1;var i=n-1,r=2,o=t.substr(0,i),a=0;o.split("").forEach(function(c){a+=+c*r,r--,r===1&&(r=7)});var s=a%11,l=11-s;return l>=10&&(l=0),l===+t.charAt(i)}Gf.validateRJ=OT;var Kf={};Object.defineProperty(Kf,"__esModule",{value:!0});Kf.validateRN=void 0;function TT(e){var t=String(e).replace(/\D/g,""),n=t.length;if(![9,10].includes(n)||t.substr(0,2)!=="20")return!1;var i=n-1,r=n,o=t.substr(0,i),a=0;o.split("").forEach(function(c){a+=+c*r,r--});var s=a%11,l=11-s;return l>=10&&(l=0),l===+t.charAt(i)}Kf.validateRN=TT;var Xf={};Object.defineProperty(Xf,"__esModule",{value:!0});Xf.validateRO=void 0;function MT(e){var t=String(e).replace(/\D/g,""),n=t.length;if(n!==14)return!1;var i=n-1,r=6,o=t.substr(0,i),a=0;o.split("").forEach(function(c){a+=+c*r,r--,r===1&&(r=9)});var s=a%11,l=11-s;return l>=10&&(l-=10),l===+t.charAt(i)}Xf.validateRO=MT;var Qf={};Object.defineProperty(Qf,"__esModule",{value:!0});Qf.validateRR=void 0;function IT(e){var t=String(e).replace(/\D/g,""),n=t.length;if(n!==9||t.substr(0,2)!=="24")return!1;var i=n-1,r=1,o=t.substr(0,i),a=0;o.split("").forEach(function(l){a+=+l*r,r++});var s=a%9;return s===+t.charAt(i)}Qf.validateRR=IT;var ep={};Object.defineProperty(ep,"__esModule",{value:!0});ep.validateRS=void 0;function LT(e){var t=String(e).replace(/\D/g,""),n=t.length;if(n!==10)return!1;var i=n-1,r=2,o=t.substr(0,i),a=0;o.split("").forEach(function(c){a+=+c*r,r--,r===1&&(r=9)});var s=a%11,l=11-s;return l>=10&&(l=0),l===+t.charAt(i)}ep.validateRS=LT;var E5={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSC=void 0;var t=On;Object.defineProperty(e,"validateSC",{enumerable:!0,get:function(){return t.validateCE}})})(E5);var S5={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSE=void 0;var t=On;Object.defineProperty(e,"validateSE",{enumerable:!0,get:function(){return t.validateCE}})})(S5);var tp={};Object.defineProperty(tp,"__esModule",{value:!0});tp.validateSP=void 0;function RT(e){var t=e.substr(0,8),n=[1,3,4,5,6,7,8,10],i=0;t.split("").forEach(function(a,s){i+=+a*n[s]});var r=i%11,o=r.toString();return+o.substr(o.length-1,1)}function BT(e){var t=e.substr(0,11),n=3,i=0;t.split("").forEach(function(a){i+=+a*n,n--,n===1&&(n=10)});var r=i%11,o=r.toString();return+o.substr(o.length-1,1)}function zT(e){var t=String(e).replace(/\D/g,"");if(t.length!==12)return!1;var n=t.length,i=n-4,r=n-1,o=RT(t),a=BT(t),s=+t.charAt(i),l=+t.charAt(r);return o===s&&a===l}tp.validateSP=zT;var np={};Object.defineProperty(np,"__esModule",{value:!0});np.validateTO=void 0;function NT(e){var t=e.length,n=t-1,i=t,r=e.substr(0,n),o=0;r.split("").forEach(function(l){o+=+l*i,i--});var a=o%11,s=11-a;return s>=10&&(s=0),s===+e.charAt(n)}function VT(e){var t=["01","02","03","99"],n=e.substr(2,2);return t.indexOf(n)>=0}function jT(e){return NT(e)}function HT(e){var t=e.slice(0,2)+e.slice(4);return VT(e)&&jT(t)}function UT(e){var t=e.length,n=t-1,i=9,r=e.substr(0,n),o=0;r.split("").forEach(function(l){o+=+l*i,i--});var a=o%11,s=11-a;return a<2&&(s=0),s===+e.charAt(n)}function WT(e){return UT(e)}function qT(e){var t=String(e).replace(/\D/g,"");if(![9,11].includes(t.length))return!1;var n=HT(t),i=WT(t);return n||i}np.validateTO=qT;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateTO=e.validateSP=e.validateSE=e.validateSC=e.validateRS=e.validateRR=e.validateRO=e.validateRN=e.validateRJ=e.validatePR=e.validatePI=e.validatePE=e.validatePB=e.validatePA=e.validateMT=e.validateMS=e.validateMG=e.validateMA=e.validateGO=e.validateES=e.validateDF=e.validateCE=e.validateBA=e.validateAP=e.validateAM=e.validateAL=e.validateAC=void 0;var t=Lf;Object.defineProperty(e,"validateAC",{enumerable:!0,get:function(){return t.validateAC}});var n=Rf;Object.defineProperty(e,"validateAL",{enumerable:!0,get:function(){return n.validateAL}});var i=Bf;Object.defineProperty(e,"validateAM",{enumerable:!0,get:function(){return i.validateAM}});var r=zf;Object.defineProperty(e,"validateAP",{enumerable:!0,get:function(){return r.validateAP}});var o=Nf;Object.defineProperty(e,"validateBA",{enumerable:!0,get:function(){return o.validateBA}});var a=On;Object.defineProperty(e,"validateCE",{enumerable:!0,get:function(){return a.validateCE}});var s=Vf;Object.defineProperty(e,"validateDF",{enumerable:!0,get:function(){return s.validateDF}});var l=y5;Object.defineProperty(e,"validateES",{enumerable:!0,get:function(){return l.validateES}});var c=jf;Object.defineProperty(e,"validateGO",{enumerable:!0,get:function(){return c.validateGO}});var u=Hf;Object.defineProperty(e,"validateMA",{enumerable:!0,get:function(){return u.validateMA}});var f=Uf;Object.defineProperty(e,"validateMG",{enumerable:!0,get:function(){return f.validateMG}});var p=Wf;Object.defineProperty(e,"validateMS",{enumerable:!0,get:function(){return p.validateMS}});var m=qf;Object.defineProperty(e,"validateMT",{enumerable:!0,get:function(){return m.validateMT}});var g=Zf;Object.defineProperty(e,"validatePA",{enumerable:!0,get:function(){return g.validatePA}});var x=w5;Object.defineProperty(e,"validatePB",{enumerable:!0,get:function(){return x.validatePB}});var y=Jf;Object.defineProperty(e,"validatePE",{enumerable:!0,get:function(){return y.validatePE}});var v=C5;Object.defineProperty(e,"validatePI",{enumerable:!0,get:function(){return v.validatePI}});var b=Yf;Object.defineProperty(e,"validatePR",{enumerable:!0,get:function(){return b.validatePR}});var E=Gf;Object.defineProperty(e,"validateRJ",{enumerable:!0,get:function(){return E.validateRJ}});var S=Kf;Object.defineProperty(e,"validateRN",{enumerable:!0,get:function(){return S.validateRN}});var F=Xf;Object.defineProperty(e,"validateRO",{enumerable:!0,get:function(){return F.validateRO}});var P=Qf;Object.defineProperty(e,"validateRR",{enumerable:!0,get:function(){return P.validateRR}});var k=ep;Object.defineProperty(e,"validateRS",{enumerable:!0,get:function(){return k.validateRS}});var _=E5;Object.defineProperty(e,"validateSC",{enumerable:!0,get:function(){return _.validateSC}});var D=S5;Object.defineProperty(e,"validateSE",{enumerable:!0,get:function(){return D.validateSE}});var T=tp;Object.defineProperty(e,"validateSP",{enumerable:!0,get:function(){return T.validateSP}});var R=np;Object.defineProperty(e,"validateTO",{enumerable:!0,get:function(){return R.validateTO}})})(b5);Object.defineProperty(If,"__esModule",{value:!0});If.validateIE=void 0;var de=b5;If.validateIE=function(){var e={AC:de.validateAC,AL:de.validateAL,AP:de.validateAP,AM:de.validateAM,BA:de.validateBA,CE:de.validateCE,DF:de.validateDF,ES:de.validateES,GO:de.validateGO,MA:de.validateMA,MT:de.validateMT,MS:de.validateMS,MG:de.validateMG,PA:de.validatePA,PB:de.validatePB,PR:de.validatePR,PE:de.validatePE,PI:de.validatePI,RJ:de.validateRJ,RN:de.validateRN,RS:de.validateRS,RO:de.validateRO,RR:de.validateRR,SC:de.validateSC,SP:de.validateSP,SE:de.validateSE,TO:de.validateTO,ac:de.validateAC,al:de.validateAL,ap:de.validateAP,am:de.validateAM,ba:de.validateBA,ce:de.validateCE,df:de.validateDF,es:de.validateES,go:de.validateGO,ma:de.validateMA,mt:de.validateMT,ms:de.validateMS,mg:de.validateMG,pa:de.validatePA,pb:de.validatePB,pr:de.validatePR,pe:de.validatePE,pi:de.validatePI,rj:de.validateRJ,rn:de.validateRN,rs:de.validateRS,ro:de.validateRO,rr:de.validateRR,sc:de.validateSC,sp:de.validateSP,se:de.validateSE,to:de.validateTO},t=Object.keys(e);return function(n,i){return typeof i=="string"&&t.includes(i)&&e[i](n)}}();var Yl={};Object.defineProperty(Yl,"__esModule",{value:!0});Yl.validatePIS=void 0;function ZT(e,t){var n=String(e).replace(/[^\d]/g,"");return n.split("").reduce(function(i,r,o){return i+ +r*t[o]},0)}var JT=[3,2,9,8,7,6,5,4,3,2],YT=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999"];function GT(e){var t=String(e).replace(/\D/g,""),n=t.replace(/[ ().,*-]/g,"");if(t.length!==11||YT.indexOf(t)>=0||!/^[0-9]+$/.test(t))return!1;var i=ZT(n.substr(0,n.length-1),JT),r=+n.charAt(n.length-1),o=11-i%11;return o===r||o===10&&r===0||o===11&&r===0}Yl.validatePIS=GT;var Gl={};Object.defineProperty(Gl,"__esModule",{value:!0});Gl.validateCNH=void 0;function KT(e){var t=String(e).replace(/\D/g,"");if(!t||t.replace(new RegExp(t[0],"g"),"").trim().length===0)return!1;for(var n=0,i=0,r=9;i<9;++i,--r)n+=Number(e.charAt(i))*r;var o=0,a=n%11;a>=10&&(a=0,o=2),n=0;for(var i=0,r=1;i<9;++i,++r)n+=Number(e.charAt(i))*r;var s=n%11,l=s>=10?0:s-o;return"".concat(a).concat(l)===e.substring(e.length-2)}Gl.validateCNH=KT;var ip={};Object.defineProperty(ip,"__esModule",{value:!0});ip.useValidationsBR=void 0;var XT=jl,QT=Hl,eM=Ul,tM=Wl,nM=ql,iM=Jl,rM=Yl,oM=Gl,aM=function(e,t){var n=!1;switch(e){case"cnpj":n=(0,nM.validateCNPJ)(t);break;case"cpf":n=(0,iM.validateCPF)(t);break;case"cep":n=(0,eM.validateCep)(t);break;case"email":n=(0,QT.validateEmail)(t);break;case"pis":n=(0,rM.validatePIS)(t);break;case"cnh":n=(0,oM.validateCNH)(t);break;case"phone":n=(0,XT.validatePhone)(t);break;case"uf":n=(0,tM.validateUF)(t);break}return n};ip.useValidationsBR=aM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.useValidationsBR=e.validateCNH=e.validatePIS=e.validateIE=e.validateCPF=e.validateCNPJ=e.validateUF=e.validateCep=e.validateEmail=e.validatePhone=void 0;var t=jl;Object.defineProperty(e,"validatePhone",{enumerable:!0,get:function(){return t.validatePhone}});var n=Hl;Object.defineProperty(e,"validateEmail",{enumerable:!0,get:function(){return n.validateEmail}});var i=Ul;Object.defineProperty(e,"validateCep",{enumerable:!0,get:function(){return i.validateCep}});var r=Wl;Object.defineProperty(e,"validateUF",{enumerable:!0,get:function(){return r.validateUF}});var o=ql;Object.defineProperty(e,"validateCNPJ",{enumerable:!0,get:function(){return o.validateCNPJ}});var a=Jl;Object.defineProperty(e,"validateCPF",{enumerable:!0,get:function(){return a.validateCPF}});var s=If;Object.defineProperty(e,"validateIE",{enumerable:!0,get:function(){return s.validateIE}});var l=Yl;Object.defineProperty(e,"validatePIS",{enumerable:!0,get:function(){return l.validatePIS}});var c=Gl;Object.defineProperty(e,"validateCNH",{enumerable:!0,get:function(){return c.validateCNH}});var u=ip;Object.defineProperty(e,"useValidationsBR",{enumerable:!0,get:function(){return u.useValidationsBR}})})(Fe);function Tn(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function zt(e){if(typeof e!="string")return!1;const t=e.split("/");if(t.length!==3)return!1;const n=parseInt(t[0]),i=parseInt(t[1]),r=parseInt(t[2]);return!isNaN(n)&&!isNaN(i)&&!isNaN(r)&&n>=1&&n<=31&&i>=1&&i<=12&&r>=1900&&r<=new Date().getFullYear()}function bn(e){if(!e||(e=e.replace(/\D/g,""),!(e.length>=10&&e.length<=11))||e.length===11&&parseInt(e.substring(2,3))!==9)return!1;for(let n=0;n<10;n++)if(e===new Array(11).join(String(n))||e===new Array(12).join(String(n)))return!1;return[11,12,13,14,15,16,17,18,19,21,22,24,27,28,31,32,33,34,35,37,38,41,42,43,44,45,46,47,48,49,51,53,54,55,61,62,64,63,65,66,67,68,69,71,73,74,75,77,79,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98,99].indexOf(parseInt(e.substring(0,2)))===-1?!1:new Date().getFullYear()<2017?!0:!(e.length===10&&![2,3,4,5,7].includes(parseInt(e.substring(2,3))))}const sM=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,lM=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,cM=h.div`
  width: 215px;
`,uM=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;
width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,dM=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,fM=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,pM=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-right: 50px;


`,hM=h.section`
    display: flex;
gap: 50px;

`;h.button`
 font-weight: 500;
font-size: 12px;
line-height: 20px;
background: transparent;
letter-spacing: 0.5px;
width: 50px;
margin-top: 30px;
color: #5A6ACF;
white-space: nowrap;
  text-align: center;

`;h.button`

  font-weight: 500;
font-size: 12px;
line-height: 20px;
background: transparent;
letter-spacing: 0.5px;
width: 50px;
margin-top: 30px;
color: #E91414;
white-space: nowrap;
  text-align: center;

`;const gM=h.section`
width: 365px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`,mM=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,xM=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,vM=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`;function fo(e){return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(e)}function bM(e,t){if(fo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(fo(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function F5(e){var t=bM(e,"string");return fo(t)==="symbol"?t:String(t)}function Cs(e,t,n){return t=F5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ub(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ub(Object(n),!0).forEach(function(i){Cs(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ub(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function yM(e){if(Array.isArray(e))return e}function wM(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function lg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function k5(e,t){if(e){if(typeof e=="string")return lg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lg(e,t)}}function CM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ai(e,t){return yM(e)||wM(e,t)||k5(e,t)||CM()}function EM(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,o;for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Ia(e,t){if(e==null)return{};var n=EM(e,t),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var SM=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function FM(e){var t=e.defaultInputValue,n=t===void 0?"":t,i=e.defaultMenuIsOpen,r=i===void 0?!1:i,o=e.defaultValue,a=o===void 0?null:o,s=e.inputValue,l=e.menuIsOpen,c=e.onChange,u=e.onInputChange,f=e.onMenuClose,p=e.onMenuOpen,m=e.value,g=Ia(e,SM),x=C.useState(s!==void 0?s:n),y=Ai(x,2),v=y[0],b=y[1],E=C.useState(l!==void 0?l:r),S=Ai(E,2),F=S[0],P=S[1],k=C.useState(m!==void 0?m:a),_=Ai(k,2),D=_[0],T=_[1],R=C.useCallback(function(N,W){typeof c=="function"&&c(N,W),T(N)},[c]),L=C.useCallback(function(N,W){var X;typeof u=="function"&&(X=u(N,W)),b(X!==void 0?X:N)},[u]),j=C.useCallback(function(){typeof p=="function"&&p(),P(!0)},[p]),B=C.useCallback(function(){typeof f=="function"&&f(),P(!1)},[f]),z=s!==void 0?s:v,q=l!==void 0?l:F,G=m!==void 0?m:D;return xe(xe({},g),{},{inputValue:z,menuIsOpen:q,onChange:R,onInputChange:L,onMenuClose:B,onMenuOpen:j,value:G})}function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},he.apply(this,arguments)}function kM(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wb(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,F5(i.key),i)}}function _M(e,t,n){return t&&Wb(e.prototype,t),n&&Wb(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function cg(e,t){return cg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},cg(e,t)}function PM(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&cg(e,t)}function bd(e){return bd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},bd(e)}function AM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function DM(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $M(e,t){if(t&&(fo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return DM(e)}function OM(e){var t=AM();return function(){var i=bd(e),r;if(t){var o=bd(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return $M(this,r)}}function TM(e){if(Array.isArray(e))return lg(e)}function MM(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function IM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _5(e){return TM(e)||MM(e)||k5(e)||IM()}function LM(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function RM(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var BM=function(){function e(n){var i=this;this._insertTag=function(r){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,o),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(RM(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=LM(r);try{o.insertRule(i,o.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),Mt="-ms-",yd="-moz-",Te="-webkit-",P5="comm",r1="rule",o1="decl",zM="@import",A5="@keyframes",NM="@layer",VM=Math.abs,rp=String.fromCharCode,jM=Object.assign;function HM(e,t){return At(e,0)^45?(((t<<2^At(e,0))<<2^At(e,1))<<2^At(e,2))<<2^At(e,3):0}function D5(e){return e.trim()}function UM(e,t){return(e=t.exec(e))?e[0]:e}function Me(e,t,n){return e.replace(t,n)}function ug(e,t){return e.indexOf(t)}function At(e,t){return e.charCodeAt(t)|0}function yl(e,t,n){return e.slice(t,n)}function Xn(e){return e.length}function a1(e){return e.length}function Sc(e,t){return t.push(e),e}function WM(e,t){return e.map(t).join("")}var op=1,wa=1,$5=0,rn=0,pt=0,La="";function ap(e,t,n,i,r,o,a){return{value:e,root:t,parent:n,type:i,props:r,children:o,line:op,column:wa,length:a,return:""}}function Xa(e,t){return jM(ap("",null,null,"",null,null,0),e,{length:-e.length},t)}function qM(){return pt}function ZM(){return pt=rn>0?At(La,--rn):0,wa--,pt===10&&(wa=1,op--),pt}function fn(){return pt=rn<$5?At(La,rn++):0,wa++,pt===10&&(wa=1,op++),pt}function ai(){return At(La,rn)}function yu(){return rn}function Kl(e,t){return yl(La,e,t)}function wl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O5(e){return op=wa=1,$5=Xn(La=e),rn=0,[]}function T5(e){return La="",e}function wu(e){return D5(Kl(rn-1,dg(e===91?e+2:e===40?e+1:e)))}function JM(e){for(;(pt=ai())&&pt<33;)fn();return wl(e)>2||wl(pt)>3?"":" "}function YM(e,t){for(;--t&&fn()&&!(pt<48||pt>102||pt>57&&pt<65||pt>70&&pt<97););return Kl(e,yu()+(t<6&&ai()==32&&fn()==32))}function dg(e){for(;fn();)switch(pt){case e:return rn;case 34:case 39:e!==34&&e!==39&&dg(pt);break;case 40:e===41&&dg(e);break;case 92:fn();break}return rn}function GM(e,t){for(;fn()&&e+pt!==47+10;)if(e+pt===42+42&&ai()===47)break;return"/*"+Kl(t,rn-1)+"*"+rp(e===47?e:fn())}function KM(e){for(;!wl(ai());)fn();return Kl(e,rn)}function XM(e){return T5(Cu("",null,null,null,[""],e=O5(e),0,[0],e))}function Cu(e,t,n,i,r,o,a,s,l){for(var c=0,u=0,f=a,p=0,m=0,g=0,x=1,y=1,v=1,b=0,E="",S=r,F=o,P=i,k=E;y;)switch(g=b,b=fn()){case 40:if(g!=108&&At(k,f-1)==58){ug(k+=Me(wu(b),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:k+=wu(b);break;case 9:case 10:case 13:case 32:k+=JM(g);break;case 92:k+=YM(yu()-1,7);continue;case 47:switch(ai()){case 42:case 47:Sc(QM(GM(fn(),yu()),t,n),l);break;default:k+="/"}break;case 123*x:s[c++]=Xn(k)*v;case 125*x:case 59:case 0:switch(b){case 0:case 125:y=0;case 59+u:v==-1&&(k=Me(k,/\f/g,"")),m>0&&Xn(k)-f&&Sc(m>32?Zb(k+";",i,n,f-1):Zb(Me(k," ","")+";",i,n,f-2),l);break;case 59:k+=";";default:if(Sc(P=qb(k,t,n,c,u,r,s,E,S=[],F=[],f),o),b===123)if(u===0)Cu(k,t,P,P,S,o,f,s,F);else switch(p===99&&At(k,3)===110?100:p){case 100:case 108:case 109:case 115:Cu(e,P,P,i&&Sc(qb(e,P,P,0,0,r,s,E,r,S=[],f),F),r,F,f,s,i?S:F);break;default:Cu(k,P,P,P,[""],F,0,s,F)}}c=u=m=0,x=v=1,E=k="",f=a;break;case 58:f=1+Xn(k),m=g;default:if(x<1){if(b==123)--x;else if(b==125&&x++==0&&ZM()==125)continue}switch(k+=rp(b),b*x){case 38:v=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(Xn(k)-1)*v,v=1;break;case 64:ai()===45&&(k+=wu(fn())),p=ai(),u=f=Xn(E=k+=KM(yu())),b++;break;case 45:g===45&&Xn(k)==2&&(x=0)}}return o}function qb(e,t,n,i,r,o,a,s,l,c,u){for(var f=r-1,p=r===0?o:[""],m=a1(p),g=0,x=0,y=0;g<i;++g)for(var v=0,b=yl(e,f+1,f=VM(x=a[g])),E=e;v<m;++v)(E=D5(x>0?p[v]+" "+b:Me(b,/&\f/g,p[v])))&&(l[y++]=E);return ap(e,t,n,r===0?r1:s,l,c,u)}function QM(e,t,n){return ap(e,t,n,P5,rp(qM()),yl(e,2,-2),0)}function Zb(e,t,n,i){return ap(e,t,n,o1,yl(e,0,i),yl(e,i+1,-1),i)}function sa(e,t){for(var n="",i=a1(e),r=0;r<i;r++)n+=t(e[r],r,e,t)||"";return n}function e7(e,t,n,i){switch(e.type){case NM:if(e.children.length)break;case zM:case o1:return e.return=e.return||e.value;case P5:return"";case A5:return e.return=e.value+"{"+sa(e.children,i)+"}";case r1:e.value=e.props.join(",")}return Xn(n=sa(e.children,i))?e.return=e.value+"{"+n+"}":""}function t7(e){var t=a1(e);return function(n,i,r,o){for(var a="",s=0;s<t;s++)a+=e[s](n,i,r,o)||"";return a}}function n7(e){return function(t){t.root||(t=t.return)&&e(t)}}var i7=function(t,n,i){for(var r=0,o=0;r=o,o=ai(),r===38&&o===12&&(n[i]=1),!wl(o);)fn();return Kl(t,rn)},r7=function(t,n){var i=-1,r=44;do switch(wl(r)){case 0:r===38&&ai()===12&&(n[i]=1),t[i]+=i7(rn-1,n,i);break;case 2:t[i]+=wu(r);break;case 4:if(r===44){t[++i]=ai()===58?"&\f":"",n[i]=t[i].length;break}default:t[i]+=rp(r)}while(r=fn());return t},o7=function(t,n){return T5(r7(O5(t),n))},Jb=new WeakMap,a7=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,i=t.parent,r=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Jb.get(i))&&!r){Jb.set(t,!0);for(var o=[],a=o7(n,o),s=i.props,l=0,c=0;l<a.length;l++)for(var u=0;u<s.length;u++,c++)t.props[c]=o[l]?a[l].replace(/&\f/g,s[u]):s[u]+" "+a[l]}}},s7=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function M5(e,t){switch(HM(e,t)){case 5103:return Te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+e+yd+e+Mt+e+e;case 6828:case 4268:return Te+e+Mt+e+e;case 6165:return Te+e+Mt+"flex-"+e+e;case 5187:return Te+e+Me(e,/(\w+).+(:[^]+)/,Te+"box-$1$2"+Mt+"flex-$1$2")+e;case 5443:return Te+e+Mt+"flex-item-"+Me(e,/flex-|-self/,"")+e;case 4675:return Te+e+Mt+"flex-line-pack"+Me(e,/align-content|flex-|-self/,"")+e;case 5548:return Te+e+Mt+Me(e,"shrink","negative")+e;case 5292:return Te+e+Mt+Me(e,"basis","preferred-size")+e;case 6060:return Te+"box-"+Me(e,"-grow","")+Te+e+Mt+Me(e,"grow","positive")+e;case 4554:return Te+Me(e,/([^-])(transform)/g,"$1"+Te+"$2")+e;case 6187:return Me(Me(Me(e,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),e,"")+e;case 5495:case 3959:return Me(e,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return Me(Me(e,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+Mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+e+e;case 4095:case 3583:case 4068:case 2532:return Me(e,/(.+)-inline(.+)/,Te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xn(e)-1-t>6)switch(At(e,t+1)){case 109:if(At(e,t+4)!==45)break;case 102:return Me(e,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+yd+(At(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ug(e,"stretch")?M5(Me(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(At(e,t+1)!==115)break;case 6444:switch(At(e,Xn(e)-3-(~ug(e,"!important")&&10))){case 107:return Me(e,":",":"+Te)+e;case 101:return Me(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Te+(At(e,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+Mt+"$2box$3")+e}break;case 5936:switch(At(e,t+11)){case 114:return Te+e+Mt+Me(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Te+e+Mt+Me(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Te+e+Mt+Me(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Te+e+Mt+e+e}return e}var l7=function(t,n,i,r){if(t.length>-1&&!t.return)switch(t.type){case o1:t.return=M5(t.value,t.length);break;case A5:return sa([Xa(t,{value:Me(t.value,"@","@"+Te)})],r);case r1:if(t.length)return WM(t.props,function(o){switch(UM(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return sa([Xa(t,{props:[Me(o,/:(read-\w+)/,":"+yd+"$1")]})],r);case"::placeholder":return sa([Xa(t,{props:[Me(o,/:(plac\w+)/,":"+Te+"input-$1")]}),Xa(t,{props:[Me(o,/:(plac\w+)/,":"+yd+"$1")]}),Xa(t,{props:[Me(o,/:(plac\w+)/,Mt+"input-$1")]})],r)}return""})}},c7=[l7],u7=function(t){var n=t.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(x){var y=x.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var r=t.stylisPlugins||c7,o={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var y=x.getAttribute("data-emotion").split(" "),v=1;v<y.length;v++)o[y[v]]=!0;s.push(x)});var l,c=[a7,s7];{var u,f=[e7,n7(function(x){u.insert(x)})],p=t7(c.concat(r,f)),m=function(y){return sa(XM(y),p)};l=function(y,v,b,E){u=b,m(y?y+"{"+v.styles+"}":v.styles),E&&(g.inserted[v.name]=!0)}}var g={key:n,sheet:new BM({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(s),g},d7=!0;function f7(e,t,n){var i="";return n.split(" ").forEach(function(r){e[r]!==void 0?t.push(e[r]+";"):i+=r+" "}),i}var I5=function(t,n,i){var r=t.key+"-"+n.name;(i===!1||d7===!1)&&t.registered[r]===void 0&&(t.registered[r]=n.styles)},p7=function(t,n,i){I5(t,n,i);var r=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+r:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function h7(e){for(var t=0,n,i=0,r=e.length;r>=4;++i,r-=4)n=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(r){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var g7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},m7=/[A-Z]|^ms/g,x7=/_EMO_([^_]+?)_([^]*?)_EMO_/g,L5=function(t){return t.charCodeAt(1)===45},Yb=function(t){return t!=null&&typeof t!="boolean"},fh=HE(function(e){return L5(e)?e:e.replace(m7,"-$&").toLowerCase()}),Gb=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(x7,function(i,r,o){return Qn={name:r,styles:o,next:Qn},r})}return g7[t]!==1&&!L5(t)&&typeof n=="number"&&n!==0?n+"px":n};function Cl(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Qn={name:n.name,styles:n.styles,next:Qn},n.name;if(n.styles!==void 0){var i=n.next;if(i!==void 0)for(;i!==void 0;)Qn={name:i.name,styles:i.styles,next:Qn},i=i.next;var r=n.styles+";";return r}return v7(e,t,n)}case"function":{if(e!==void 0){var o=Qn,a=n(e);return Qn=o,Cl(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function v7(e,t,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=Cl(e,t,n[r])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?i+=o+"{"+t[a]+"}":Yb(a)&&(i+=fh(o)+":"+Gb(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Yb(a[s])&&(i+=fh(o)+":"+Gb(o,a[s])+";");else{var l=Cl(e,t,a);switch(o){case"animation":case"animationName":{i+=fh(o)+":"+l+";";break}default:i+=o+"{"+l+"}"}}}return i}var Kb=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Qn,R5=function(t,n,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,o="";Qn=void 0;var a=t[0];a==null||a.raw===void 0?(r=!1,o+=Cl(i,n,a)):o+=a[0];for(var s=1;s<t.length;s++)o+=Cl(i,n,t[s]),r&&(o+=a[s]);Kb.lastIndex=0;for(var l="",c;(c=Kb.exec(o))!==null;)l+="-"+c[1];var u=h7(o)+l;return{name:u,styles:o,next:Qn}},b7=function(t){return t()},y7=Ks["useInsertionEffect"]?Ks["useInsertionEffect"]:!1,w7=y7||b7,s1={}.hasOwnProperty,B5=C.createContext(typeof HTMLElement<"u"?u7({key:"css"}):null);B5.Provider;var C7=function(t){return C.forwardRef(function(n,i){var r=C.useContext(B5);return t(n,r,i)})},E7=C.createContext({}),fg="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",S7=function(t,n){var i={};for(var r in n)s1.call(n,r)&&(i[r]=n[r]);return i[fg]=t,i},F7=function(t){var n=t.cache,i=t.serialized,r=t.isStringTag;return I5(n,i,r),w7(function(){return p7(n,i,r)}),null},k7=C7(function(e,t,n){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var r=e[fg],o=[i],a="";typeof e.className=="string"?a=f7(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var s=R5(o,void 0,C.useContext(E7));a+=t.key+"-"+s.name;var l={};for(var c in e)s1.call(e,c)&&c!=="css"&&c!==fg&&(l[c]=e[c]);return l.ref=n,l.className=a,C.createElement(C.Fragment,null,C.createElement(F7,{cache:t,serialized:s,isStringTag:typeof r=="string"}),C.createElement(r,l))}),_7=k7,fe=function(t,n){var i=arguments;if(n==null||!s1.call(n,"css"))return C.createElement.apply(void 0,i);var r=i.length,o=new Array(r);o[0]=_7,o[1]=S7(t,n);for(var a=2;a<r;a++)o[a]=i[a];return C.createElement.apply(null,o)};function l1(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return R5(t)}var P7=function(){var t=l1.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function A7(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function D7(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}const $7=["top","right","bottom","left"];$7.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);function si(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function z5(e){return si(e).getComputedStyle(e)}function N5(e){return e instanceof si(e).Node}function V5(e){return N5(e)?(e.nodeName||"").toLowerCase():"#document"}function c1(e){return e instanceof si(e).HTMLElement}function pg(e){return e instanceof si(e).Element}function Xb(e){return typeof ShadowRoot<"u"&&(e instanceof si(e).ShadowRoot||e instanceof ShadowRoot)}function j5(e){const{overflow:t,overflowX:n,overflowY:i,display:r}=z5(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(r)}function O7(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function T7(e){return["html","body","#document"].includes(V5(e))}const M7=Math.min,I7=Math.max,wd=Math.round,Fc=Math.floor,u1=e=>({x:e,y:e});function L7(e){const t=z5(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=c1(e),o=r?e.offsetWidth:n,a=r?e.offsetHeight:i,s=wd(n)!==o||wd(i)!==a;return s&&(n=o,i=a),{width:n,height:i,$:s}}function d1(e){return pg(e)?e:e.contextElement}function ph(e){const t=d1(e);if(!c1(t))return u1(1);const n=t.getBoundingClientRect(),{width:i,height:r,$:o}=L7(t);let a=(o?wd(n.width):n.width)/i,s=(o?wd(n.height):n.height)/r;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const Qb=u1(0);function R7(e,t,n){var i,r;if(t===void 0&&(t=!0),!O7())return Qb;const o=e?si(e):window;return!n||t&&n!==o?Qb:{x:((i=o.visualViewport)==null?void 0:i.offsetLeft)||0,y:((r=o.visualViewport)==null?void 0:r.offsetTop)||0}}function ey(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=d1(e);let a=u1(1);t&&(i?pg(i)&&(a=ph(i)):a=ph(e));const s=R7(o,n,i);let l=(r.left+s.x)/a.x,c=(r.top+s.y)/a.y,u=r.width/a.x,f=r.height/a.y;if(o){const p=si(o),m=i&&pg(i)?si(i):i;let g=p.frameElement;for(;g&&i&&m!==p;){const x=ph(g),y=g.getBoundingClientRect(),v=getComputedStyle(g),b=y.left+(g.clientLeft+parseFloat(v.paddingLeft))*x.x,E=y.top+(g.clientTop+parseFloat(v.paddingTop))*x.y;l*=x.x,c*=x.y,u*=x.x,f*=x.y,l+=b,c+=E,g=si(g).frameElement}}return D7({width:u,height:f,x:l,y:c})}function H5(e){return((N5(e)?e.ownerDocument:e.document)||window.document).documentElement}function B7(e){if(V5(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Xb(e)&&e.host||H5(e);return Xb(t)?t.host:t}function U5(e){const t=B7(e);return T7(t)?e.ownerDocument?e.ownerDocument.body:e.body:c1(t)&&j5(t)?t:U5(t)}function hg(e,t){var n;t===void 0&&(t=[]);const i=U5(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),o=si(i);return r?t.concat(o,o.visualViewport||[],j5(i)?i:[]):t.concat(i,hg(i))}function z7(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=d1(e),u=r||o?[...c?hg(c):[],...hg(t)]:[];u.forEach(y=>{r&&y.addEventListener("scroll",n,{passive:!0}),o&&y.addEventListener("resize",n)});const f=c&&s?function(y,v){let b,E=null;const S=H5(y);function F(){clearTimeout(b),E&&E.disconnect(),E=null}return function P(k,_){k===void 0&&(k=!1),_===void 0&&(_=1),F();const{left:D,top:T,width:R,height:L}=y.getBoundingClientRect();if(k||v(),!R||!L)return;const j={rootMargin:-Fc(T)+"px "+-Fc(S.clientWidth-(D+R))+"px "+-Fc(S.clientHeight-(T+L))+"px "+-Fc(D)+"px",threshold:I7(0,M7(1,_))||1};let B=!0;function z(q){const G=q[0].intersectionRatio;if(G!==_){if(!B)return P();G?P(!1,G):b=setTimeout(()=>{P(!1,1e-7)},100)}B=!1}try{E=new IntersectionObserver(z,{...j,root:S.ownerDocument})}catch{E=new IntersectionObserver(z,j)}E.observe(y)}(!0),F}(c,n):null;let p,m=-1,g=null;a&&(g=new ResizeObserver(y=>{let[v]=y;v&&v.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{g&&g.observe(t)})),n()}),c&&!l&&g.observe(c),g.observe(t));let x=l?ey(e):null;return l&&function y(){const v=ey(e);!x||v.x===x.x&&v.y===x.y&&v.width===x.width&&v.height===x.height||n(),x=v,p=requestAnimationFrame(y)}(),n(),()=>{u.forEach(y=>{r&&y.removeEventListener("scroll",n),o&&y.removeEventListener("resize",n)}),f&&f(),g&&g.disconnect(),g=null,l&&cancelAnimationFrame(p)}}var gg=C.useLayoutEffect,N7=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Cd=function(){};function V7(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function j7(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var o=[].concat(i);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(V7(e,a)));return o.filter(function(s){return s}).map(function(s){return String(s).trim()}).join(" ")}var ty=function(t){return K7(t)?t.filter(Boolean):fo(t)==="object"&&t!==null?[t]:[]},W5=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Ia(t,N7);return xe({},n)},at=function(t,n,i){var r=t.cx,o=t.getStyles,a=t.getClassNames,s=t.className;return{css:o(n,t),className:r(i??{},a(n,t),s)}};function sp(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function H7(e){return sp(e)?window.innerHeight:e.clientHeight}function q5(e){return sp(e)?window.pageYOffset:e.scrollTop}function Ed(e,t){if(sp(e)){window.scrollTo(0,t);return}e.scrollTop=t}function U7(e){var t=getComputedStyle(e),n=t.position==="absolute",i=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var r=e;r=r.parentElement;)if(t=getComputedStyle(r),!(n&&t.position==="static")&&i.test(t.overflow+t.overflowY+t.overflowX))return r;return document.documentElement}function W7(e,t,n,i){return n*((e=e/i-1)*e*e+1)+t}function kc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Cd,r=q5(e),o=t-r,a=10,s=0;function l(){s+=a;var c=W7(s,r,o,n);Ed(e,c),s<n?window.requestAnimationFrame(l):i(e)}l()}function ny(e,t){var n=e.getBoundingClientRect(),i=t.getBoundingClientRect(),r=t.offsetHeight/3;i.bottom+r>n.bottom?Ed(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+r,e.scrollHeight)):i.top-r<n.top&&Ed(e,Math.max(t.offsetTop-r,0))}function q7(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function iy(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Z7(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Z5=!1,J7={get passive(){return Z5=!0}},_c=typeof window<"u"?window:{};_c.addEventListener&&_c.removeEventListener&&(_c.addEventListener("p",Cd,J7),_c.removeEventListener("p",Cd,!1));var Y7=Z5;function G7(e){return e!=null}function K7(e){return Array.isArray(e)}function Pc(e,t,n){return e?t:n}var X7=function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var o=Object.entries(t).filter(function(a){var s=Ai(a,1),l=s[0];return!i.includes(l)});return o.reduce(function(a,s){var l=Ai(s,2),c=l[0],u=l[1];return a[c]=u,a},{})};function Q7(e){var t=e.maxHeight,n=e.menuEl,i=e.minHeight,r=e.placement,o=e.shouldScroll,a=e.isFixedPosition,s=e.controlHeight,l=U7(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var u=l.getBoundingClientRect(),f=u.height,p=n.getBoundingClientRect(),m=p.bottom,g=p.height,x=p.top,y=n.offsetParent.getBoundingClientRect(),v=y.top,b=a?window.innerHeight:H7(l),E=q5(l),S=parseInt(getComputedStyle(n).marginBottom,10),F=parseInt(getComputedStyle(n).marginTop,10),P=v-F,k=b-x,_=P+E,D=f-E-x,T=m-b+E+S,R=E+x-F,L=160;switch(r){case"auto":case"bottom":if(k>=g)return{placement:"bottom",maxHeight:t};if(D>=g&&!a)return o&&kc(l,T,L),{placement:"bottom",maxHeight:t};if(!a&&D>=i||a&&k>=i){o&&kc(l,T,L);var j=a?k-S:D-S;return{placement:"bottom",maxHeight:j}}if(r==="auto"||a){var B=t,z=a?P:_;return z>=i&&(B=Math.min(z-S-s,t)),{placement:"top",maxHeight:B}}if(r==="bottom")return o&&Ed(l,T),{placement:"bottom",maxHeight:t};break;case"top":if(P>=g)return{placement:"top",maxHeight:t};if(_>=g&&!a)return o&&kc(l,R,L),{placement:"top",maxHeight:t};if(!a&&_>=i||a&&P>=i){var q=t;return(!a&&_>=i||a&&P>=i)&&(q=a?P-F:_-F),o&&kc(l,R,L),{placement:"top",maxHeight:q}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(r,'".'))}return c}function eI(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var J5=function(t){return t==="auto"?"bottom":t},tI=function(t,n){var i,r=t.placement,o=t.theme,a=o.borderRadius,s=o.spacing,l=o.colors;return xe((i={label:"menu"},Cs(i,eI(r),"100%"),Cs(i,"position","absolute"),Cs(i,"width","100%"),Cs(i,"zIndex",1),i),n?{}:{backgroundColor:l.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:s.menuGutter,marginTop:s.menuGutter})},Y5=C.createContext(null),nI=function(t){var n=t.children,i=t.minMenuHeight,r=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,s=t.menuShouldScrollIntoView,l=t.theme,c=C.useContext(Y5)||{},u=c.setPortalPlacement,f=C.useRef(null),p=C.useState(r),m=Ai(p,2),g=m[0],x=m[1],y=C.useState(null),v=Ai(y,2),b=v[0],E=v[1],S=l.spacing.controlHeight;return gg(function(){var F=f.current;if(F){var P=a==="fixed",k=s&&!P,_=Q7({maxHeight:r,menuEl:F,minHeight:i,placement:o,shouldScroll:k,isFixedPosition:P,controlHeight:S});x(_.maxHeight),E(_.placement),u==null||u(_.placement)}},[r,o,a,s,i,u,S]),n({ref:f,placerProps:xe(xe({},t),{},{placement:b||J5(o),maxHeight:g})})},iI=function(t){var n=t.children,i=t.innerRef,r=t.innerProps;return fe("div",he({},at(t,"menu",{menu:!0}),{ref:i},r),n)},rI=iI,oI=function(t,n){var i=t.maxHeight,r=t.theme.spacing.baseUnit;return xe({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:r,paddingTop:r})},aI=function(t){var n=t.children,i=t.innerProps,r=t.innerRef,o=t.isMulti;return fe("div",he({},at(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:r},i),n)},G5=function(t,n){var i=t.theme,r=i.spacing.baseUnit,o=i.colors;return xe({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(r*2,"px ").concat(r*3,"px")})},sI=G5,lI=G5,K5=function(t){var n=t.children,i=t.innerProps;return fe("div",he({},at(t,"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),n)};K5.defaultProps={children:"No options"};var X5=function(t){var n=t.children,i=t.innerProps;return fe("div",he({},at(t,"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),n)};X5.defaultProps={children:"Loading..."};var cI=function(t){var n=t.rect,i=t.offset,r=t.position;return{left:n.left,position:r,top:i,width:n.width,zIndex:1}},uI=function(t){var n=t.appendTo,i=t.children,r=t.controlElement,o=t.innerProps,a=t.menuPlacement,s=t.menuPosition,l=C.useRef(null),c=C.useRef(null),u=C.useState(J5(a)),f=Ai(u,2),p=f[0],m=f[1],g=C.useMemo(function(){return{setPortalPlacement:m}},[]),x=C.useState(null),y=Ai(x,2),v=y[0],b=y[1],E=C.useCallback(function(){if(r){var k=q7(r),_=s==="fixed"?0:window.pageYOffset,D=k[p]+_;(D!==(v==null?void 0:v.offset)||k.left!==(v==null?void 0:v.rect.left)||k.width!==(v==null?void 0:v.rect.width))&&b({offset:D,rect:k})}},[r,s,p,v==null?void 0:v.offset,v==null?void 0:v.rect.left,v==null?void 0:v.rect.width]);gg(function(){E()},[E]);var S=C.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),r&&l.current&&(c.current=z7(r,l.current,E,{elementResize:"ResizeObserver"in window}))},[r,E]);gg(function(){S()},[S]);var F=C.useCallback(function(k){l.current=k,S()},[S]);if(!n&&s!=="fixed"||!v)return null;var P=fe("div",he({ref:F},at(xe(xe({},t),{},{offset:v.offset,position:s,rect:v.rect}),"menuPortal",{"menu-portal":!0}),o),i);return fe(Y5.Provider,{value:g},n?Xs.createPortal(P,n):P)},dI=function(t){var n=t.isDisabled,i=t.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},fI=function(t){var n=t.children,i=t.innerProps,r=t.isDisabled,o=t.isRtl;return fe("div",he({},at(t,"container",{"--is-disabled":r,"--is-rtl":o}),i),n)},pI=function(t,n){var i=t.theme.spacing,r=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return xe({alignItems:"center",display:r&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},hI=function(t){var n=t.children,i=t.innerProps,r=t.isMulti,o=t.hasValue;return fe("div",he({},at(t,"valueContainer",{"value-container":!0,"value-container--is-multi":r,"value-container--has-value":o}),i),n)},gI=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},mI=function(t){var n=t.children,i=t.innerProps;return fe("div",he({},at(t,"indicatorsContainer",{indicators:!0}),i),n)},ry,xI=["size"],vI={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Q5=function(t){var n=t.size,i=Ia(t,xI);return fe("svg",he({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:vI},i))},f1=function(t){return fe(Q5,he({size:20},t),fe("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},e4=function(t){return fe(Q5,he({size:20},t),fe("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},t4=function(t,n){var i=t.isFocused,r=t.theme,o=r.spacing.baseUnit,a=r.colors;return xe({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:i?a.neutral60:a.neutral20,padding:o*2,":hover":{color:i?a.neutral80:a.neutral40}})},bI=t4,yI=function(t){var n=t.children,i=t.innerProps;return fe("div",he({},at(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),n||fe(e4,null))},wI=t4,CI=function(t){var n=t.children,i=t.innerProps;return fe("div",he({},at(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),n||fe(f1,null))},EI=function(t,n){var i=t.isDisabled,r=t.theme,o=r.spacing.baseUnit,a=r.colors;return xe({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:i?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},SI=function(t){var n=t.innerProps;return fe("span",he({},n,at(t,"indicatorSeparator",{"indicator-separator":!0})))},FI=P7(ry||(ry=A7([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),kI=function(t,n){var i=t.isFocused,r=t.size,o=t.theme,a=o.colors,s=o.spacing.baseUnit;return xe({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:r,lineHeight:1,marginRight:r,textAlign:"center",verticalAlign:"middle"},n?{}:{color:i?a.neutral60:a.neutral20,padding:s*2})},hh=function(t){var n=t.delay,i=t.offset;return fe("span",{css:l1({animation:"".concat(FI," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},n4=function(t){var n=t.innerProps,i=t.isRtl;return fe("div",he({},at(t,"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),fe(hh,{delay:0,offset:i}),fe(hh,{delay:160,offset:!0}),fe(hh,{delay:320,offset:!i}))};n4.defaultProps={size:4};var _I=function(t,n){var i=t.isDisabled,r=t.isFocused,o=t.theme,a=o.colors,s=o.borderRadius,l=o.spacing;return xe({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:l.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:i?a.neutral5:a.neutral0,borderColor:i?a.neutral10:r?a.primary:a.neutral20,borderRadius:s,borderStyle:"solid",borderWidth:1,boxShadow:r?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:r?a.primary:a.neutral30}})},PI=function(t){var n=t.children,i=t.isDisabled,r=t.isFocused,o=t.innerRef,a=t.innerProps,s=t.menuIsOpen;return fe("div",he({ref:o},at(t,"control",{control:!0,"control--is-disabled":i,"control--is-focused":r,"control--menu-is-open":s}),a),n)},AI=PI,DI=["data"],$I=function(t,n){var i=t.theme.spacing;return n?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},OI=function(t){var n=t.children,i=t.cx,r=t.getStyles,o=t.getClassNames,a=t.Heading,s=t.headingProps,l=t.innerProps,c=t.label,u=t.theme,f=t.selectProps;return fe("div",he({},at(t,"group",{group:!0}),l),fe(a,he({},s,{selectProps:f,theme:u,getStyles:r,getClassNames:o,cx:i}),c),fe("div",null,n))},TI=function(t,n){var i=t.theme,r=i.colors,o=i.spacing;return xe({label:"group",cursor:"default",display:"block"},n?{}:{color:r.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},MI=function(t){var n=W5(t);n.data;var i=Ia(n,DI);return fe("div",he({},at(t,"groupHeading",{"group-heading":!0}),i))},II=OI,LI=["innerRef","isDisabled","isHidden","inputClassName"],RI=function(t,n){var i=t.isDisabled,r=t.value,o=t.theme,a=o.spacing,s=o.colors;return xe(xe({visibility:i?"hidden":"visible",transform:r?"translateZ(0)":""},BI),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:s.neutral80})},i4={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},BI={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":xe({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},i4)},zI=function(t){return xe({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},i4)},NI=function(t){var n=t.cx,i=t.value,r=W5(t),o=r.innerRef,a=r.isDisabled,s=r.isHidden,l=r.inputClassName,c=Ia(r,LI);return fe("div",he({},at(t,"input",{"input-container":!0}),{"data-value":i||""}),fe("input",he({className:n({input:!0},l),ref:o,style:zI(s),disabled:a},c)))},VI=NI,jI=function(t,n){var i=t.theme,r=i.spacing,o=i.borderRadius,a=i.colors;return xe({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:r.baseUnit/2})},HI=function(t,n){var i=t.theme,r=i.borderRadius,o=i.colors,a=t.cropWithEllipsis;return xe({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:r/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},UI=function(t,n){var i=t.theme,r=i.spacing,o=i.borderRadius,a=i.colors,s=t.isFocused;return xe({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:s?a.dangerLight:void 0,paddingLeft:r.baseUnit,paddingRight:r.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},r4=function(t){var n=t.children,i=t.innerProps;return fe("div",i,n)},WI=r4,qI=r4;function ZI(e){var t=e.children,n=e.innerProps;return fe("div",he({role:"button"},n),t||fe(f1,{size:14}))}var JI=function(t){var n=t.children,i=t.components,r=t.data,o=t.innerProps,a=t.isDisabled,s=t.removeProps,l=t.selectProps,c=i.Container,u=i.Label,f=i.Remove;return fe(c,{data:r,innerProps:xe(xe({},at(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:l},fe(u,{data:r,innerProps:xe({},at(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:l},n),fe(f,{data:r,innerProps:xe(xe({},at(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},s),selectProps:l}))},YI=JI,GI=function(t,n){var i=t.isDisabled,r=t.isFocused,o=t.isSelected,a=t.theme,s=a.spacing,l=a.colors;return xe({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?l.primary:r?l.primary25:"transparent",color:i?l.neutral20:o?l.neutral0:"inherit",padding:"".concat(s.baseUnit*2,"px ").concat(s.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:o?l.primary:l.primary50}})},KI=function(t){var n=t.children,i=t.isDisabled,r=t.isFocused,o=t.isSelected,a=t.innerRef,s=t.innerProps;return fe("div",he({},at(t,"option",{option:!0,"option--is-disabled":i,"option--is-focused":r,"option--is-selected":o}),{ref:a,"aria-disabled":i},s),n)},XI=KI,QI=function(t,n){var i=t.theme,r=i.spacing,o=i.colors;return xe({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:r.baseUnit/2,marginRight:r.baseUnit/2})},eL=function(t){var n=t.children,i=t.innerProps;return fe("div",he({},at(t,"placeholder",{placeholder:!0}),i),n)},tL=eL,nL=function(t,n){var i=t.isDisabled,r=t.theme,o=r.spacing,a=r.colors;return xe({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:i?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},iL=function(t){var n=t.children,i=t.isDisabled,r=t.innerProps;return fe("div",he({},at(t,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),r),n)},rL=iL,oL={ClearIndicator:CI,Control:AI,DropdownIndicator:yI,DownChevron:e4,CrossIcon:f1,Group:II,GroupHeading:MI,IndicatorsContainer:mI,IndicatorSeparator:SI,Input:VI,LoadingIndicator:n4,Menu:rI,MenuList:aI,MenuPortal:uI,LoadingMessage:X5,NoOptionsMessage:K5,MultiValue:YI,MultiValueContainer:WI,MultiValueLabel:qI,MultiValueRemove:ZI,Option:XI,Placeholder:tL,SelectContainer:fI,SingleValue:rL,ValueContainer:hI},aL=function(t){return xe(xe({},oL),t.components)},oy=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function sL(e,t){return!!(e===t||oy(e)&&oy(t))}function lL(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!sL(e[n],t[n]))return!1;return!0}function cL(e,t){t===void 0&&(t=lL);var n=null;function i(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(n&&n.lastThis===this&&t(r,n.lastArgs))return n.lastResult;var a=e.apply(this,r);return n={lastResult:a,lastArgs:r,lastThis:this},a}return i.clear=function(){n=null},i}var uL={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},dL=function(t){return fe("span",he({css:uL},t))},ay=dL,fL={guidance:function(t){var n=t.isSearchable,i=t.isMulti,r=t.isDisabled,o=t.tabSelectsValue,a=t.context;switch(a){case"menu":return"Use Up and Down to choose options".concat(r?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(o?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,i=t.label,r=i===void 0?"":i,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(r,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(r," is disabled. Select another option."):"option ".concat(r,", selected.");default:return""}},onFocus:function(t){var n=t.context,i=t.focused,r=t.options,o=t.label,a=o===void 0?"":o,s=t.selectValue,l=t.isDisabled,c=t.isSelected,u=function(g,x){return g&&g.length?"".concat(g.indexOf(x)+1," of ").concat(g.length):""};if(n==="value"&&s)return"value ".concat(a," focused, ").concat(u(s,i),".");if(n==="menu"){var f=l?" disabled":"",p="".concat(c?"selected":"focused").concat(f);return"option ".concat(a," ").concat(p,", ").concat(u(r,i),".")}return""},onFilter:function(t){var n=t.inputValue,i=t.resultsMessage;return"".concat(i).concat(n?" for search term "+n:"",".")}},pL=function(t){var n=t.ariaSelection,i=t.focusedOption,r=t.focusedValue,o=t.focusableOptions,a=t.isFocused,s=t.selectValue,l=t.selectProps,c=t.id,u=l.ariaLiveMessages,f=l.getOptionLabel,p=l.inputValue,m=l.isMulti,g=l.isOptionDisabled,x=l.isSearchable,y=l.menuIsOpen,v=l.options,b=l.screenReaderStatus,E=l.tabSelectsValue,S=l["aria-label"],F=l["aria-live"],P=C.useMemo(function(){return xe(xe({},fL),u||{})},[u]),k=C.useMemo(function(){var B="";if(n&&P.onChange){var z=n.option,q=n.options,G=n.removedValue,N=n.removedValues,W=n.value,X=function(pe){return Array.isArray(pe)?null:pe},ue=G||z||X(W),U=ue?f(ue):"",Z=q||N||void 0,Q=Z?Z.map(f):[],re=xe({isDisabled:ue&&g(ue,s),label:U,labels:Q},n);B=P.onChange(re)}return B},[n,P,g,s,f]),_=C.useMemo(function(){var B="",z=i||r,q=!!(i&&s&&s.includes(i));if(z&&P.onFocus){var G={focused:z,label:f(z),isDisabled:g(z,s),isSelected:q,options:o,context:z===i?"menu":"value",selectValue:s};B=P.onFocus(G)}return B},[i,r,f,g,P,o,s]),D=C.useMemo(function(){var B="";if(y&&v.length&&P.onFilter){var z=b({count:o.length});B=P.onFilter({inputValue:p,resultsMessage:z})}return B},[o,p,y,P,v,b]),T=C.useMemo(function(){var B="";if(P.guidance){var z=r?"value":y?"menu":"input";B=P.guidance({"aria-label":S,context:z,isDisabled:i&&g(i,s),isMulti:m,isSearchable:x,tabSelectsValue:E})}return B},[S,i,r,m,g,x,y,P,s,E]),R="".concat(_," ").concat(D," ").concat(T),L=fe(C.Fragment,null,fe("span",{id:"aria-selection"},k),fe("span",{id:"aria-context"},R)),j=(n==null?void 0:n.action)==="initial-input-focus";return fe(C.Fragment,null,fe(ay,{id:c},j&&L),fe(ay,{"aria-live":F,"aria-atomic":"false","aria-relevant":"additions text"},a&&!j&&L))},hL=pL,mg=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],gL=new RegExp("["+mg.map(function(e){return e.letters}).join("")+"]","g"),o4={};for(var gh=0;gh<mg.length;gh++)for(var mh=mg[gh],xh=0;xh<mh.letters.length;xh++)o4[mh.letters[xh]]=mh.base;var a4=function(t){return t.replace(gL,function(n){return o4[n]})},mL=cL(a4),sy=function(t){return t.replace(/^\s+|\s+$/g,"")},xL=function(t){return"".concat(t.label," ").concat(t.value)},vL=function(t){return function(n,i){if(n.data.__isNew__)return!0;var r=xe({ignoreCase:!0,ignoreAccents:!0,stringify:xL,trim:!0,matchFrom:"any"},t),o=r.ignoreCase,a=r.ignoreAccents,s=r.stringify,l=r.trim,c=r.matchFrom,u=l?sy(i):i,f=l?sy(s(n)):s(n);return o&&(u=u.toLowerCase(),f=f.toLowerCase()),a&&(u=mL(u),f=a4(f)),c==="start"?f.substr(0,u.length)===u:f.indexOf(u)>-1}},bL=["innerRef"];function yL(e){var t=e.innerRef,n=Ia(e,bL),i=X7(n,"onExited","in","enter","exit","appear");return fe("input",he({ref:t},i,{css:l1({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var wL=function(t){t.preventDefault(),t.stopPropagation()};function CL(e){var t=e.isEnabled,n=e.onBottomArrive,i=e.onBottomLeave,r=e.onTopArrive,o=e.onTopLeave,a=C.useRef(!1),s=C.useRef(!1),l=C.useRef(0),c=C.useRef(null),u=C.useCallback(function(y,v){if(c.current!==null){var b=c.current,E=b.scrollTop,S=b.scrollHeight,F=b.clientHeight,P=c.current,k=v>0,_=S-F-E,D=!1;_>v&&a.current&&(i&&i(y),a.current=!1),k&&s.current&&(o&&o(y),s.current=!1),k&&v>_?(n&&!a.current&&n(y),P.scrollTop=S,D=!0,a.current=!0):!k&&-v>E&&(r&&!s.current&&r(y),P.scrollTop=0,D=!0,s.current=!0),D&&wL(y)}},[n,i,r,o]),f=C.useCallback(function(y){u(y,y.deltaY)},[u]),p=C.useCallback(function(y){l.current=y.changedTouches[0].clientY},[]),m=C.useCallback(function(y){var v=l.current-y.changedTouches[0].clientY;u(y,v)},[u]),g=C.useCallback(function(y){if(y){var v=Y7?{passive:!1}:!1;y.addEventListener("wheel",f,v),y.addEventListener("touchstart",p,v),y.addEventListener("touchmove",m,v)}},[m,p,f]),x=C.useCallback(function(y){y&&(y.removeEventListener("wheel",f,!1),y.removeEventListener("touchstart",p,!1),y.removeEventListener("touchmove",m,!1))},[m,p,f]);return C.useEffect(function(){if(t){var y=c.current;return g(y),function(){x(y)}}},[t,g,x]),function(y){c.current=y}}var ly=["boxSizing","height","overflow","paddingRight","position"],cy={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function uy(e){e.preventDefault()}function dy(e){e.stopPropagation()}function fy(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function py(){return"ontouchstart"in window||navigator.maxTouchPoints}var hy=!!(typeof window<"u"&&window.document&&window.document.createElement),Qa=0,Po={capture:!1,passive:!1};function EL(e){var t=e.isEnabled,n=e.accountForScrollbars,i=n===void 0?!0:n,r=C.useRef({}),o=C.useRef(null),a=C.useCallback(function(l){if(hy){var c=document.body,u=c&&c.style;if(i&&ly.forEach(function(g){var x=u&&u[g];r.current[g]=x}),i&&Qa<1){var f=parseInt(r.current.paddingRight,10)||0,p=document.body?document.body.clientWidth:0,m=window.innerWidth-p+f||0;Object.keys(cy).forEach(function(g){var x=cy[g];u&&(u[g]=x)}),u&&(u.paddingRight="".concat(m,"px"))}c&&py()&&(c.addEventListener("touchmove",uy,Po),l&&(l.addEventListener("touchstart",fy,Po),l.addEventListener("touchmove",dy,Po))),Qa+=1}},[i]),s=C.useCallback(function(l){if(hy){var c=document.body,u=c&&c.style;Qa=Math.max(Qa-1,0),i&&Qa<1&&ly.forEach(function(f){var p=r.current[f];u&&(u[f]=p)}),c&&py()&&(c.removeEventListener("touchmove",uy,Po),l&&(l.removeEventListener("touchstart",fy,Po),l.removeEventListener("touchmove",dy,Po)))}},[i]);return C.useEffect(function(){if(t){var l=o.current;return a(l),function(){s(l)}}},[t,a,s]),function(l){o.current=l}}var SL=function(){return document.activeElement&&document.activeElement.blur()},FL={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function kL(e){var t=e.children,n=e.lockEnabled,i=e.captureEnabled,r=i===void 0?!0:i,o=e.onBottomArrive,a=e.onBottomLeave,s=e.onTopArrive,l=e.onTopLeave,c=CL({isEnabled:r,onBottomArrive:o,onBottomLeave:a,onTopArrive:s,onTopLeave:l}),u=EL({isEnabled:n}),f=function(m){c(m),u(m)};return fe(C.Fragment,null,n&&fe("div",{onClick:SL,css:FL}),t(f))}var _L={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},PL=function(t){var n=t.name,i=t.onFocus;return fe("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:_L,value:"",onChange:function(){}})},AL=PL,DL=function(t){return t.label},$L=function(t){return t.label},OL=function(t){return t.value},TL=function(t){return!!t.isDisabled},ML={clearIndicator:wI,container:dI,control:_I,dropdownIndicator:bI,group:$I,groupHeading:TI,indicatorsContainer:gI,indicatorSeparator:EI,input:RI,loadingIndicator:kI,loadingMessage:lI,menu:tI,menuList:oI,menuPortal:cI,multiValue:jI,multiValueLabel:HI,multiValueRemove:UI,noOptionsMessage:sI,option:GI,placeholder:QI,singleValue:nL,valueContainer:pI},IL={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},LL=4,s4=4,RL=38,BL=s4*2,zL={baseUnit:s4,controlHeight:RL,menuGutter:BL},vh={borderRadius:LL,colors:IL,spacing:zL},NL={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:iy(),captureMenuScroll:!iy(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:vL(),formatGroupLabel:DL,getOptionLabel:$L,getOptionValue:OL,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:TL,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Z7(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function gy(e,t,n,i){var r=d4(e,t,n),o=f4(e,t,n),a=u4(e,t),s=Sd(e,t);return{type:"option",data:t,isDisabled:r,isSelected:o,label:a,value:s,index:i}}function l4(e,t){return e.options.map(function(n,i){if("options"in n){var r=n.options.map(function(a,s){return gy(e,a,t,s)}).filter(function(a){return my(e,a)});return r.length>0?{type:"group",data:n,options:r,index:i}:void 0}var o=gy(e,n,t,i);return my(e,o)?o:void 0}).filter(G7)}function c4(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,_5(n.options.map(function(i){return i.data}))):t.push(n.data),t},[])}function VL(e,t){return c4(l4(e,t))}function my(e,t){var n=e.inputValue,i=n===void 0?"":n,r=t.data,o=t.isSelected,a=t.label,s=t.value;return(!h4(e)||!o)&&p4(e,{label:a,value:s,data:r},i)}function jL(e,t){var n=e.focusedValue,i=e.selectValue,r=i.indexOf(n);if(r>-1){var o=t.indexOf(n);if(o>-1)return n;if(r<t.length)return t[r]}return null}function HL(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var u4=function(t,n){return t.getOptionLabel(n)},Sd=function(t,n){return t.getOptionValue(n)};function d4(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function f4(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var i=Sd(e,t);return n.some(function(r){return Sd(e,r)===i})}function p4(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var h4=function(t){var n=t.hideSelectedOptions,i=t.isMulti;return n===void 0?i:n},UL=1,g4=function(e){PM(n,e);var t=OM(n);function n(i){var r;if(kM(this,n),r=t.call(this,i),r.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},r.blockOptionHover=!1,r.isComposing=!1,r.commonProps=void 0,r.initialTouchX=0,r.initialTouchY=0,r.instancePrefix="",r.openAfterFocus=!1,r.scrollToFocusedOptionOnUpdate=!1,r.userIsDragging=void 0,r.controlRef=null,r.getControlRef=function(s){r.controlRef=s},r.focusedOptionRef=null,r.getFocusedOptionRef=function(s){r.focusedOptionRef=s},r.menuListRef=null,r.getMenuListRef=function(s){r.menuListRef=s},r.inputRef=null,r.getInputRef=function(s){r.inputRef=s},r.focus=r.focusInput,r.blur=r.blurInput,r.onChange=function(s,l){var c=r.props,u=c.onChange,f=c.name;l.name=f,r.ariaOnChange(s,l),u(s,l)},r.setValue=function(s,l,c){var u=r.props,f=u.closeMenuOnSelect,p=u.isMulti,m=u.inputValue;r.onInputChange("",{action:"set-value",prevInputValue:m}),f&&(r.setState({inputIsHiddenAfterUpdate:!p}),r.onMenuClose()),r.setState({clearFocusValueOnUpdate:!0}),r.onChange(s,{action:l,option:c})},r.selectOption=function(s){var l=r.props,c=l.blurInputOnSelect,u=l.isMulti,f=l.name,p=r.state.selectValue,m=u&&r.isOptionSelected(s,p),g=r.isOptionDisabled(s,p);if(m){var x=r.getOptionValue(s);r.setValue(p.filter(function(y){return r.getOptionValue(y)!==x}),"deselect-option",s)}else if(!g)u?r.setValue([].concat(_5(p),[s]),"select-option",s):r.setValue(s,"select-option");else{r.ariaOnChange(s,{action:"select-option",option:s,name:f});return}c&&r.blurInput()},r.removeValue=function(s){var l=r.props.isMulti,c=r.state.selectValue,u=r.getOptionValue(s),f=c.filter(function(m){return r.getOptionValue(m)!==u}),p=Pc(l,f,f[0]||null);r.onChange(p,{action:"remove-value",removedValue:s}),r.focusInput()},r.clearValue=function(){var s=r.state.selectValue;r.onChange(Pc(r.props.isMulti,[],null),{action:"clear",removedValues:s})},r.popValue=function(){var s=r.props.isMulti,l=r.state.selectValue,c=l[l.length-1],u=l.slice(0,l.length-1),f=Pc(s,u,u[0]||null);r.onChange(f,{action:"pop-value",removedValue:c})},r.getValue=function(){return r.state.selectValue},r.cx=function(){for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return j7.apply(void 0,[r.props.classNamePrefix].concat(l))},r.getOptionLabel=function(s){return u4(r.props,s)},r.getOptionValue=function(s){return Sd(r.props,s)},r.getStyles=function(s,l){var c=r.props.unstyled,u=ML[s](l,c);u.boxSizing="border-box";var f=r.props.styles[s];return f?f(u,l):u},r.getClassNames=function(s,l){var c,u;return(c=(u=r.props.classNames)[s])===null||c===void 0?void 0:c.call(u,l)},r.getElementId=function(s){return"".concat(r.instancePrefix,"-").concat(s)},r.getComponents=function(){return aL(r.props)},r.buildCategorizedOptions=function(){return l4(r.props,r.state.selectValue)},r.getCategorizedOptions=function(){return r.props.menuIsOpen?r.buildCategorizedOptions():[]},r.buildFocusableOptions=function(){return c4(r.buildCategorizedOptions())},r.getFocusableOptions=function(){return r.props.menuIsOpen?r.buildFocusableOptions():[]},r.ariaOnChange=function(s,l){r.setState({ariaSelection:xe({value:s},l)})},r.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),r.focusInput())},r.onMenuMouseMove=function(s){r.blockOptionHover=!1},r.onControlMouseDown=function(s){if(!s.defaultPrevented){var l=r.props.openMenuOnClick;r.state.isFocused?r.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&r.onMenuClose():l&&r.openMenu("first"):(l&&(r.openAfterFocus=!0),r.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},r.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!r.props.isDisabled){var l=r.props,c=l.isMulti,u=l.menuIsOpen;r.focusInput(),u?(r.setState({inputIsHiddenAfterUpdate:!c}),r.onMenuClose()):r.openMenu("first"),s.preventDefault()}},r.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(r.clearValue(),s.preventDefault(),r.openAfterFocus=!1,s.type==="touchend"?r.focusInput():setTimeout(function(){return r.focusInput()}))},r.onScroll=function(s){typeof r.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&sp(s.target)&&r.props.onMenuClose():typeof r.props.closeMenuOnScroll=="function"&&r.props.closeMenuOnScroll(s)&&r.props.onMenuClose()},r.onCompositionStart=function(){r.isComposing=!0},r.onCompositionEnd=function(){r.isComposing=!1},r.onTouchStart=function(s){var l=s.touches,c=l&&l.item(0);c&&(r.initialTouchX=c.clientX,r.initialTouchY=c.clientY,r.userIsDragging=!1)},r.onTouchMove=function(s){var l=s.touches,c=l&&l.item(0);if(c){var u=Math.abs(c.clientX-r.initialTouchX),f=Math.abs(c.clientY-r.initialTouchY),p=5;r.userIsDragging=u>p||f>p}},r.onTouchEnd=function(s){r.userIsDragging||(r.controlRef&&!r.controlRef.contains(s.target)&&r.menuListRef&&!r.menuListRef.contains(s.target)&&r.blurInput(),r.initialTouchX=0,r.initialTouchY=0)},r.onControlTouchEnd=function(s){r.userIsDragging||r.onControlMouseDown(s)},r.onClearIndicatorTouchEnd=function(s){r.userIsDragging||r.onClearIndicatorMouseDown(s)},r.onDropdownIndicatorTouchEnd=function(s){r.userIsDragging||r.onDropdownIndicatorMouseDown(s)},r.handleInputChange=function(s){var l=r.props.inputValue,c=s.currentTarget.value;r.setState({inputIsHiddenAfterUpdate:!1}),r.onInputChange(c,{action:"input-change",prevInputValue:l}),r.props.menuIsOpen||r.onMenuOpen()},r.onInputFocus=function(s){r.props.onFocus&&r.props.onFocus(s),r.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(r.openAfterFocus||r.props.openMenuOnFocus)&&r.openMenu("first"),r.openAfterFocus=!1},r.onInputBlur=function(s){var l=r.props.inputValue;if(r.menuListRef&&r.menuListRef.contains(document.activeElement)){r.inputRef.focus();return}r.props.onBlur&&r.props.onBlur(s),r.onInputChange("",{action:"input-blur",prevInputValue:l}),r.onMenuClose(),r.setState({focusedValue:null,isFocused:!1})},r.onOptionHover=function(s){r.blockOptionHover||r.state.focusedOption===s||r.setState({focusedOption:s})},r.shouldHideSelectedOptions=function(){return h4(r.props)},r.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),r.focus()},r.onKeyDown=function(s){var l=r.props,c=l.isMulti,u=l.backspaceRemovesValue,f=l.escapeClearsValue,p=l.inputValue,m=l.isClearable,g=l.isDisabled,x=l.menuIsOpen,y=l.onKeyDown,v=l.tabSelectsValue,b=l.openMenuOnFocus,E=r.state,S=E.focusedOption,F=E.focusedValue,P=E.selectValue;if(!g&&!(typeof y=="function"&&(y(s),s.defaultPrevented))){switch(r.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||p)return;r.focusValue("previous");break;case"ArrowRight":if(!c||p)return;r.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(F)r.removeValue(F);else{if(!u)return;c?r.popValue():m&&r.clearValue()}break;case"Tab":if(r.isComposing||s.shiftKey||!x||!v||!S||b&&r.isOptionSelected(S,P))return;r.selectOption(S);break;case"Enter":if(s.keyCode===229)break;if(x){if(!S||r.isComposing)return;r.selectOption(S);break}return;case"Escape":x?(r.setState({inputIsHiddenAfterUpdate:!1}),r.onInputChange("",{action:"menu-close",prevInputValue:p}),r.onMenuClose()):m&&f&&r.clearValue();break;case" ":if(p)return;if(!x){r.openMenu("first");break}if(!S)return;r.selectOption(S);break;case"ArrowUp":x?r.focusOption("up"):r.openMenu("last");break;case"ArrowDown":x?r.focusOption("down"):r.openMenu("first");break;case"PageUp":if(!x)return;r.focusOption("pageup");break;case"PageDown":if(!x)return;r.focusOption("pagedown");break;case"Home":if(!x)return;r.focusOption("first");break;case"End":if(!x)return;r.focusOption("last");break;default:return}s.preventDefault()}},r.instancePrefix="react-select-"+(r.props.instanceId||++UL),r.state.selectValue=ty(i.value),i.menuIsOpen&&r.state.selectValue.length){var o=r.buildFocusableOptions(),a=o.indexOf(r.state.selectValue[0]);r.state.focusedOption=o[a]}return r}return _M(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&ny(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(r){var o=this.props,a=o.isDisabled,s=o.menuIsOpen,l=this.state.isFocused;(l&&!a&&r.isDisabled||l&&s&&!r.menuIsOpen)&&this.focusInput(),l&&a&&!r.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!l&&!a&&r.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(ny(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(r,o){this.props.onInputChange(r,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(r){var o=this,a=this.state,s=a.selectValue,l=a.isFocused,c=this.buildFocusableOptions(),u=r==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(s[0]);f>-1&&(u=f)}this.scrollToFocusedOptionOnUpdate=!(l&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[u]},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(r){var o=this.state,a=o.selectValue,s=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var l=a.indexOf(s);s||(l=-1);var c=a.length-1,u=-1;if(a.length){switch(r){case"previous":l===0?u=0:l===-1?u=c:u=l-1;break;case"next":l>-1&&l<c&&(u=l+1);break}this.setState({inputIsHidden:u!==-1,focusedValue:a[u]})}}}},{key:"focusOption",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,s=this.getFocusableOptions();if(s.length){var l=0,c=s.indexOf(a);a||(c=-1),r==="up"?l=c>0?c-1:s.length-1:r==="down"?l=(c+1)%s.length:r==="pageup"?(l=c-o,l<0&&(l=0)):r==="pagedown"?(l=c+o,l>s.length-1&&(l=s.length-1)):r==="last"&&(l=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[l],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(vh):xe(xe({},vh),this.props.theme):vh}},{key:"getCommonProps",value:function(){var r=this.clearValue,o=this.cx,a=this.getStyles,s=this.getClassNames,l=this.getValue,c=this.selectOption,u=this.setValue,f=this.props,p=f.isMulti,m=f.isRtl,g=f.options,x=this.hasValue();return{clearValue:r,cx:o,getStyles:a,getClassNames:s,getValue:l,hasValue:x,isMulti:p,isRtl:m,options:g,selectOption:c,selectProps:f,setValue:u,theme:this.getTheme()}}},{key:"hasValue",value:function(){var r=this.state.selectValue;return r.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var r=this.props,o=r.isClearable,a=r.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(r,o){return d4(this.props,r,o)}},{key:"isOptionSelected",value:function(r,o){return f4(this.props,r,o)}},{key:"filterOption",value:function(r,o){return p4(this.props,r,o)}},{key:"formatOptionLabel",value:function(r,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(r,{context:o,inputValue:a,selectValue:s})}else return this.getOptionLabel(r)}},{key:"formatGroupLabel",value:function(r){return this.props.formatGroupLabel(r)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var r=this.props,o=r.isDisabled,a=r.isSearchable,s=r.inputId,l=r.inputValue,c=r.tabIndex,u=r.form,f=r.menuIsOpen,p=r.required,m=this.getComponents(),g=m.Input,x=this.state,y=x.inputIsHidden,v=x.ariaSelection,b=this.commonProps,E=s||this.getElementId("input"),S=xe(xe(xe({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":p,role:"combobox"},f&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(v==null?void 0:v.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?C.createElement(g,he({},b,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:E,innerRef:this.getInputRef,isDisabled:o,isHidden:y,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:u,type:"text",value:l},S)):C.createElement(yL,he({id:E,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Cd,onFocus:this.onInputFocus,disabled:o,tabIndex:c,inputMode:"none",form:u,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var r=this,o=this.getComponents(),a=o.MultiValue,s=o.MultiValueContainer,l=o.MultiValueLabel,c=o.MultiValueRemove,u=o.SingleValue,f=o.Placeholder,p=this.commonProps,m=this.props,g=m.controlShouldRenderValue,x=m.isDisabled,y=m.isMulti,v=m.inputValue,b=m.placeholder,E=this.state,S=E.selectValue,F=E.focusedValue,P=E.isFocused;if(!this.hasValue()||!g)return v?null:C.createElement(f,he({},p,{key:"placeholder",isDisabled:x,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),b);if(y)return S.map(function(_,D){var T=_===F,R="".concat(r.getOptionLabel(_),"-").concat(r.getOptionValue(_));return C.createElement(a,he({},p,{components:{Container:s,Label:l,Remove:c},isFocused:T,isDisabled:x,key:R,index:D,removeProps:{onClick:function(){return r.removeValue(_)},onTouchEnd:function(){return r.removeValue(_)},onMouseDown:function(j){j.preventDefault()}},data:_}),r.formatOptionLabel(_,"value"))});if(v)return null;var k=S[0];return C.createElement(u,he({},p,{data:k,isDisabled:x}),this.formatOptionLabel(k,"value"))}},{key:"renderClearIndicator",value:function(){var r=this.getComponents(),o=r.ClearIndicator,a=this.commonProps,s=this.props,l=s.isDisabled,c=s.isLoading,u=this.state.isFocused;if(!this.isClearable()||!o||l||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return C.createElement(o,he({},a,{innerProps:f,isFocused:u}))}},{key:"renderLoadingIndicator",value:function(){var r=this.getComponents(),o=r.LoadingIndicator,a=this.commonProps,s=this.props,l=s.isDisabled,c=s.isLoading,u=this.state.isFocused;if(!o||!c)return null;var f={"aria-hidden":"true"};return C.createElement(o,he({},a,{innerProps:f,isDisabled:l,isFocused:u}))}},{key:"renderIndicatorSeparator",value:function(){var r=this.getComponents(),o=r.DropdownIndicator,a=r.IndicatorSeparator;if(!o||!a)return null;var s=this.commonProps,l=this.props.isDisabled,c=this.state.isFocused;return C.createElement(a,he({},s,{isDisabled:l,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var r=this.getComponents(),o=r.DropdownIndicator;if(!o)return null;var a=this.commonProps,s=this.props.isDisabled,l=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return C.createElement(o,he({},a,{innerProps:c,isDisabled:s,isFocused:l}))}},{key:"renderMenu",value:function(){var r=this,o=this.getComponents(),a=o.Group,s=o.GroupHeading,l=o.Menu,c=o.MenuList,u=o.MenuPortal,f=o.LoadingMessage,p=o.NoOptionsMessage,m=o.Option,g=this.commonProps,x=this.state.focusedOption,y=this.props,v=y.captureMenuScroll,b=y.inputValue,E=y.isLoading,S=y.loadingMessage,F=y.minMenuHeight,P=y.maxMenuHeight,k=y.menuIsOpen,_=y.menuPlacement,D=y.menuPosition,T=y.menuPortalTarget,R=y.menuShouldBlockScroll,L=y.menuShouldScrollIntoView,j=y.noOptionsMessage,B=y.onMenuScrollToTop,z=y.onMenuScrollToBottom;if(!k)return null;var q=function(Z,Q){var re=Z.type,M=Z.data,pe=Z.isDisabled,ee=Z.isSelected,Ie=Z.label,ke=Z.value,Ee=x===M,me=pe?void 0:function(){return r.onOptionHover(M)},dt=pe?void 0:function(){return r.selectOption(M)},wt="".concat(r.getElementId("option"),"-").concat(Q),Se={id:wt,onClick:dt,onMouseMove:me,onMouseOver:me,tabIndex:-1};return C.createElement(m,he({},g,{innerProps:Se,data:M,isDisabled:pe,isSelected:ee,key:wt,label:Ie,type:re,value:ke,isFocused:Ee,innerRef:Ee?r.getFocusedOptionRef:void 0}),r.formatOptionLabel(Z.data,"menu"))},G;if(this.hasOptions())G=this.getCategorizedOptions().map(function(U){if(U.type==="group"){var Z=U.data,Q=U.options,re=U.index,M="".concat(r.getElementId("group"),"-").concat(re),pe="".concat(M,"-heading");return C.createElement(a,he({},g,{key:M,data:Z,options:Q,Heading:s,headingProps:{id:pe,data:U.data},label:r.formatGroupLabel(U.data)}),U.options.map(function(ee){return q(ee,"".concat(re,"-").concat(ee.index))}))}else if(U.type==="option")return q(U,"".concat(U.index))});else if(E){var N=S({inputValue:b});if(N===null)return null;G=C.createElement(f,g,N)}else{var W=j({inputValue:b});if(W===null)return null;G=C.createElement(p,g,W)}var X={minMenuHeight:F,maxMenuHeight:P,menuPlacement:_,menuPosition:D,menuShouldScrollIntoView:L},ue=C.createElement(nI,he({},g,X),function(U){var Z=U.ref,Q=U.placerProps,re=Q.placement,M=Q.maxHeight;return C.createElement(l,he({},g,X,{innerRef:Z,innerProps:{onMouseDown:r.onMenuMouseDown,onMouseMove:r.onMenuMouseMove,id:r.getElementId("listbox")},isLoading:E,placement:re}),C.createElement(kL,{captureEnabled:v,onTopArrive:B,onBottomArrive:z,lockEnabled:R},function(pe){return C.createElement(c,he({},g,{innerRef:function(Ie){r.getMenuListRef(Ie),pe(Ie)},isLoading:E,maxHeight:M,focusedOption:x}),G)}))});return T||D==="fixed"?C.createElement(u,he({},g,{appendTo:T,controlElement:this.controlRef,menuPlacement:_,menuPosition:D}),ue):ue}},{key:"renderFormField",value:function(){var r=this,o=this.props,a=o.delimiter,s=o.isDisabled,l=o.isMulti,c=o.name,u=o.required,f=this.state.selectValue;if(u&&!this.hasValue()&&!s)return C.createElement(AL,{name:c,onFocus:this.onValueInputFocus});if(!(!c||s))if(l)if(a){var p=f.map(function(x){return r.getOptionValue(x)}).join(a);return C.createElement("input",{name:c,type:"hidden",value:p})}else{var m=f.length>0?f.map(function(x,y){return C.createElement("input",{key:"i-".concat(y),name:c,type:"hidden",value:r.getOptionValue(x)})}):C.createElement("input",{name:c,type:"hidden",value:""});return C.createElement("div",null,m)}else{var g=f[0]?this.getOptionValue(f[0]):"";return C.createElement("input",{name:c,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var r=this.commonProps,o=this.state,a=o.ariaSelection,s=o.focusedOption,l=o.focusedValue,c=o.isFocused,u=o.selectValue,f=this.getFocusableOptions();return C.createElement(hL,he({},r,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:s,focusedValue:l,isFocused:c,selectValue:u,focusableOptions:f}))}},{key:"render",value:function(){var r=this.getComponents(),o=r.Control,a=r.IndicatorsContainer,s=r.SelectContainer,l=r.ValueContainer,c=this.props,u=c.className,f=c.id,p=c.isDisabled,m=c.menuIsOpen,g=this.state.isFocused,x=this.commonProps=this.getCommonProps();return C.createElement(s,he({},x,{className:u,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:p,isFocused:g}),this.renderLiveRegion(),C.createElement(o,he({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:p,isFocused:g,menuIsOpen:m}),C.createElement(l,he({},x,{isDisabled:p}),this.renderPlaceholderOrValue(),this.renderInput()),C.createElement(a,he({},x,{isDisabled:p}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(r,o){var a=o.prevProps,s=o.clearFocusValueOnUpdate,l=o.inputIsHiddenAfterUpdate,c=o.ariaSelection,u=o.isFocused,f=o.prevWasFocused,p=r.options,m=r.value,g=r.menuIsOpen,x=r.inputValue,y=r.isMulti,v=ty(m),b={};if(a&&(m!==a.value||p!==a.options||g!==a.menuIsOpen||x!==a.inputValue)){var E=g?VL(r,v):[],S=s?jL(o,v):null,F=HL(o,E);b={selectValue:v,focusedOption:F,focusedValue:S,clearFocusValueOnUpdate:!1}}var P=l!=null&&r!==a?{inputIsHidden:l,inputIsHiddenAfterUpdate:void 0}:{},k=c,_=u&&f;return u&&!_&&(k={value:Pc(y,v,v[0]||null),options:v,action:"initial-input-focus"},_=!f),(c==null?void 0:c.action)==="initial-input-focus"&&(k=null),xe(xe(xe({},b),P),{},{prevProps:r,ariaSelection:k,prevWasFocused:_})}}]),n}(C.Component);g4.defaultProps=NL;var WL=C.forwardRef(function(e,t){var n=FM(e);return C.createElement(g4,he({ref:t},n))}),qL=WL;const ZL=e=>({control:(t,n)=>({...t,border:e?"2px solid red":"1px solid #E2E2E2",boxShadow:"none","&:hover":{border:"1px solid #E2E2E2",boxShadow:"none"},borderRadius:"4px",width:"100%",height:"45px",padding:"10px 4px 10px 20px",transition:"none"}),singleValue:(t,n)=>({...t,display:"flex",alignItems:"center",transform:"translateY(-20%)",color:"#A0A0A0"}),input:(t,n)=>({...t,display:"flex",alignItems:"center",transform:"translateY(-20%)",boxShadow:"none",outline:"none"}),placeholder:(t,n)=>({...t,display:"flex",alignItems:"center",transform:"translateY(-20%)",color:e?"red":"#A0A0A0"}),dropdownIndicator:(t,n)=>({...t,display:"flex",alignItems:"center",transform:"translateY(-16%)"}),indicatorSeparator:(t,n)=>({...t,display:"none"}),option:(t,{isFocused:n,isSelected:i})=>({...t,backgroundColor:null,color:null,cursor:"",boxShadow:"none"})}),ge=({hasError:e,value:t,onChange:n,placeholder:i,label:r,optionsData:o})=>{const a=o.options.map(s=>({value:s.value,label:s.label}));return w("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[d(XS,{children:r}),d(qL,{className:e?"error":"",options:a,value:t,onChange:n,styles:ZL(e||!1),placeholder:i,noOptionsMessage:()=>"operação não encontrada"})]})};ge.displayName="CustomSelect";function JL({Avançar:e,Voltar:t}){const[n,i]=C.useState(!1),[r,o]=C.useState([]),{dataUser:a}=lt(),{register:s,setValue:l,formState:{errors:c},watch:u}=st(),f=!!u("licenciado");return C.useEffect(()=>{i(!0),Oe.get("https://api-pagueassim.stalopay.com.br/seller/indexla",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${a==null?void 0:a.token}`}}).then(p=>{const m=p.data;if(m&&m.sellers){console.log(m.sellers.trading_name);const g=m.sellers.map((x,y)=>({value:x.id,label:`${x.trading_name}-${x.type}-${x.cnpj_cpf}`}));o(g)}i(!1)}).catch(p=>{console.error("Houve um erro ao buscar os dados:",p)})},[]),w(ie,{children:[n&&d(Ve,{}),d(sM,{children:w(lM,{children:[w(uM,{children:[d(dM,{children:"Comercial"}),d(fM,{}),w(pM,{children:[w(gM,{children:[d(ge,{placeholder:"-",...s("licenciado"),label:"Licenciado Autorizado",optionsData:{options:r},hasError:!!c.licenciado,onChange:p=>{l("licenciado",p.value)}}),d("button",{children:"Pesquise pelo nome do Licenciado"})]}),d(hM,{children:d(cM,{children:d(ne,{...s("RegraMarkup"),label:"Regra Markup",placeholder:"Regra Markup %",hasError:!!c.Fornecedor,colorInputDefault:$.primaria,colorInputSuccess:$.secundaria})})})]})]}),w(vM,{children:[d(xM,{onClick:t,children:"Voltar"}),d(mM,{disabled:!f,onClick:e,children:"Avançar"})]})]})})]})}const YL=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,GL=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,KL=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,XL=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,QL=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,eR=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 140px;
  margin-right: 50px;


`,bh=h.section`
    display: flex;
gap: 40px;

`;h.section`
   width: 365px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`;const tR=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,nR=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,iR=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;


`;h.div`
  width: 215px;

`;h.div`
 width: 365px;

`;const rR=h.div`
  width: 215px;

`,oR=h.div`
  width: 215px;

`,xy={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]};function aR({Avançar:e,Voltar:t,isLoading:n}){const{register:i,setValue:r,formState:{errors:o},getValues:a,watch:s}=st(),l=()=>!!(s("Banco")&&s("TipoDeConta")&&s("Agência")&&s("Conta")&&s("CpfCnpj")&&s("pix")),c=m=>{const g=m.replace(/\D/g,"");return g.length>11?g.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,"$1.$2.$3/$4-$5"):g.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/,"$1.$2.$3-$4")},u=m=>{const g=c(m.target.value);r("CpfCnpj",g)},f=s("CpfCnpj"),p=f&&f.length>14?"99.999.999/9999-99":"999.999.999-99";return Object.keys(a()).filter(m=>m.startsWith("Fornecedor")).length,w(ie,{children:[n&&d(Ve,{}),d(YL,{children:w(GL,{children:[w(KL,{children:[d(XL,{children:"Dados Bancários"}),d(QL,{}),w(eR,{children:[w(bh,{children:[d(ge,{...i("Banco",{required:!0}),label:"Banco",optionsData:xy,placeholder:"Clique para ver a lista",hasError:!!o.Banco,onChange:m=>{r("Banco",m.value)}}),d(ge,{...i("TipoDeConta",{required:!0}),label:"Tipo de Conta",placeholder:"",optionsData:xy,hasError:!!o["Tipo de Conta"],onChange:m=>{r("TipoDeConta",m.value)}})]}),w(bh,{children:[d(ne,{colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,...i("CpfCnpj",{required:!0}),label:"CPF ou CNPJ",placeholder:"--.---.---/---.--",hasError:!!o.CpfCnpj,onChange:u},p),d(ne,{...i("pix",{required:!0}),label:"Chave PIX",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.Agência,hasSuccess:!1})]}),w(bh,{children:[d(rR,{children:d(ne,{...i("Agência",{required:!0}),label:"Agência",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.Agência,hasSuccess:!1})}),d(oR,{children:d(ne,{...i("Conta",{required:!0}),label:"Conta",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.Conta,hasSuccess:!1})})]})]})]}),w(iR,{children:[d(nR,{onClick:t,children:"Voltar"}),d(tR,{disabled:!l(),onClick:e,children:"Finalizar"})]})]})})]})}const sR=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,lR=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,cR=h.div`
  display: flex;
  justify-content: space-between;

`,uR=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin-top: 30px;
  margin-bottom: 32px;

  width: 900px;
  padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,dR=h.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #7d7d7d;
`,fR=h.div`
  border: 1px solid #a0a0a0;
  margin-top: 15px;
`,pR=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;
`,yh=h.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;h.section`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > button {
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;

    letter-spacing: 0.5px;

    color: #665b6d;
  }
`;const hR=h.button`
  width: 109px;
  height: 35px;

  background: #00a3d7;
  border: 0.5px solid #0086ed;
  border-radius: 5px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;

  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 100px;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`,gR=h.div`

`,mR=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};

  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"8px 1px 1px 8px"} ;

  position: ${({active:e})=>e?"relative":""};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,xR=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};
  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"1px 8px 8px 1px"} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,vR=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,bR=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`;var xg={},yR={get exports(){return xg},set exports(e){xg=e}};function wR(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var wh=wR(C),CR=Xs;function ER(e,t){for(var n=Object.getOwnPropertyNames(t),i=0;i<n.length;i++){var r=n[i],o=Object.getOwnPropertyDescriptor(t,r);o&&o.configurable&&e[r]===void 0&&Object.defineProperty(e,r,o)}return e}function vg(){return(vg=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function SR(e,t){e.prototype=Object.create(t.prototype),ER(e.prototype.constructor=e,t)}function FR(e,t){if(e==null)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],0<=t.indexOf(n)||(r[n]=e[n]);return r}function Ao(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var kR=function(e,t,n,i,r,o,a,s){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,i,r,o,a,s],u=0;(l=new Error(t.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}},vy=kR;function by(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var i=e.createTextRange();i.collapse(!0),i.moveStart("character",t),i.moveEnd("character",n-t),i.select()}}function _R(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var i=document.selection.createRange();i.parentElement()===e&&(t=-i.moveStart("character",-e.value.length),n=-i.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var PR={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},AR="_";function yy(e,t,n){var i="",r="",o=null,a=[];if(t===void 0&&(t=AR),n==null&&(n=PR),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach(function(l){s=!s&&l==="\\"||(s||!n[l]?(a.push(i.length),i.length===a.length-1&&(r+=l)):o=i.length+1,i+=l,!1)}),{maskChar:t,formatChars:n,prefix:r,mask:i,lastEditablePosition:o,permanents:a}}function hn(e,t){return e.permanents.indexOf(t)!==-1}function lp(e,t,n){var i=e.mask,r=e.formatChars;if(!n)return!1;if(hn(e,t))return i[t]===n;var o=r[i[t]];return new RegExp(o).test(n)}function wy(e,t){return t.split("").every(function(n,i){return hn(e,i)||!lp(e,i,n)})}function Es(e,t){var n=e.maskChar,i=e.prefix;if(!n){for(;t.length>i.length&&hn(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var r=i.length,o=t.length;o>=i.length;o--){var a=t[o];if(!hn(e,o)&&lp(e,o,a)){r=o+1;break}}return r}function m4(e,t){return Es(e,t)===e.mask.length}function yi(e,t){var n=e.maskChar,i=e.mask,r=e.prefix;if(!n){for((t=bg(e,"",t,0)).length<r.length&&(t=r);t.length<i.length&&hn(e,t.length);)t+=i[t.length];return t}if(t)return bg(e,yi(e,""),t,0);for(var o=0;o<i.length;o++)hn(e,o)?t+=i[o]:t+=n;return t}function DR(e,t,n,i){var r=n+i,o=e.maskChar,a=e.mask,s=e.prefix,l=t.split("");if(o)return l.map(function(u,f){return f<n||r<=f?u:hn(e,f)?a[f]:o}).join("");for(var c=r;c<l.length;c++)hn(e,c)&&(l[c]="");return n=Math.max(s.length,n),l.splice(n,r-n),t=l.join(""),yi(e,t)}function bg(e,t,n,i){var r=e.mask,o=e.maskChar,a=e.prefix,s=n.split(""),l=m4(e,t);return!o&&i>t.length&&(t+=r.slice(t.length,i)),s.every(function(c){for(;m=c,hn(e,p=i)&&m!==r[p];){if(i>=t.length&&(t+=r[i]),u=c,f=i,o&&hn(e,f)&&u===o)return!0;if(++i>=r.length)return!1}var u,f,p,m;return!lp(e,i,c)&&c!==o||(i<t.length?t=o||l||i<a.length?t.slice(0,i)+c+t.slice(i+1):(t=t.slice(0,i)+c+t.slice(i),yi(e,t)):o||(t+=c),++i<r.length)}),t}function $R(e,t,n,i){var r=e.mask,o=e.maskChar,a=n.split(""),s=i;return a.every(function(l){for(;u=l,hn(e,c=i)&&u!==r[c];)if(++i>=r.length)return!1;var c,u;return(lp(e,i,l)||l===o)&&i++,i<r.length}),i-s}function OR(e,t){for(var n=t;0<=n;--n)if(!hn(e,n))return n;return null}function js(e,t){for(var n=e.mask,i=t;i<n.length;++i)if(!hn(e,i))return i;return null}function Ch(e){return e||e===0?e+"":""}function TR(e,t,n,i,r){var o=e.mask,a=e.prefix,s=e.lastEditablePosition,l=t,c="",u=0,f=0,p=Math.min(r.start,n.start);return n.end>r.start?f=(u=$R(e,i,c=l.slice(r.start,n.end),p))?r.length:0:l.length<i.length&&(f=i.length-l.length),l=i,f&&(f===1&&!r.length&&(p=r.start===n.start?js(e,n.start):OR(e,n.start)),l=DR(e,l,p,f)),l=bg(e,l,c,p),(p+=u)>=o.length?p=o.length:p<a.length&&!u?p=a.length:p>=a.length&&p<s&&u&&(p=js(e,p)),c||(c=null),{value:l=yi(e,l),enteredString:c,selection:{start:p,end:p}}}function MR(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function Zt(e){return typeof e=="function"}function IR(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function x4(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Cy(e){return(x4()?IR():function(){return setTimeout(e,1e3/60)})(e)}function Eh(e){(x4()||clearTimeout)(e)}var LR=function(e){function t(i){var r=e.call(this,i)||this;r.focused=!1,r.mounted=!1,r.previousSelection=null,r.selectionDeferId=null,r.saveSelectionLoopDeferId=null,r.saveSelectionLoop=function(){r.previousSelection=r.getSelection(),r.saveSelectionLoopDeferId=Cy(r.saveSelectionLoop)},r.runSaveSelectionLoop=function(){r.saveSelectionLoopDeferId===null&&r.saveSelectionLoop()},r.stopSaveSelectionLoop=function(){r.saveSelectionLoopDeferId!==null&&(Eh(r.saveSelectionLoopDeferId),r.saveSelectionLoopDeferId=null,r.previousSelection=null)},r.getInputDOMNode=function(){if(!r.mounted)return null;var g=CR.findDOMNode(Ao(Ao(r))),x=typeof window<"u"&&g instanceof window.Element;if(g&&!x)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},r.getInputValue=function(){var g=r.getInputDOMNode();return g?g.value:null},r.setInputValue=function(g){var x=r.getInputDOMNode();x&&(r.value=g,x.value=g)},r.setCursorToEnd=function(){var g=Es(r.maskOptions,r.value),x=js(r.maskOptions,g);x!==null&&r.setCursorPosition(x)},r.setSelection=function(g,x,y){y===void 0&&(y={});var v=r.getInputDOMNode(),b=r.isFocused();v&&b&&(y.deferred||by(v,g,x),r.selectionDeferId!==null&&Eh(r.selectionDeferId),r.selectionDeferId=Cy(function(){r.selectionDeferId=null,by(v,g,x)}),r.previousSelection={start:g,end:x,length:Math.abs(x-g)})},r.getSelection=function(){return _R(r.getInputDOMNode())},r.getCursorPosition=function(){return r.getSelection().start},r.setCursorPosition=function(g){r.setSelection(g,g)},r.isFocused=function(){return r.focused},r.getBeforeMaskedValueChangeConfig=function(){var g=r.maskOptions,x=g.mask,y=g.maskChar,v=g.permanents,b=g.formatChars;return{mask:x,maskChar:y,permanents:v,alwaysShowMask:!!r.props.alwaysShowMask,formatChars:b}},r.isInputAutofilled=function(g,x,y,v){var b=r.getInputDOMNode();try{if(b.matches(":-webkit-autofill"))return!0}catch{}return!r.focused||v.end<y.length&&x.end===g.length},r.onChange=function(g){var x=Ao(Ao(r)).beforePasteState,y=Ao(Ao(r)).previousSelection,v=r.props.beforeMaskedValueChange,b=r.getInputValue(),E=r.value,S=r.getSelection();r.isInputAutofilled(b,S,E,y)&&(E=yi(r.maskOptions,""),y={start:0,end:0,length:0}),x&&(y=x.selection,E=x.value,S={start:y.start+b.length,end:y.start+b.length,length:0},b=E.slice(0,y.start)+b+E.slice(y.end),r.beforePasteState=null);var F=TR(r.maskOptions,b,S,E,y),P=F.enteredString,k=F.selection,_=F.value;if(Zt(v)){var D=v({value:_,selection:k},{value:E,selection:y},P,r.getBeforeMaskedValueChangeConfig());_=D.value,k=D.selection}r.setInputValue(_),Zt(r.props.onChange)&&r.props.onChange(g),r.isWindowsPhoneBrowser?r.setSelection(k.start,k.end,{deferred:!0}):r.setSelection(k.start,k.end)},r.onFocus=function(g){var x=r.props.beforeMaskedValueChange,y=r.maskOptions,v=y.mask,b=y.prefix;if(r.focused=!0,r.mounted=!0,v){if(r.value)Es(r.maskOptions,r.value)<r.maskOptions.mask.length&&r.setCursorToEnd();else{var E=yi(r.maskOptions,b),S=yi(r.maskOptions,E),F=Es(r.maskOptions,S),P=js(r.maskOptions,F),k={start:P,end:P};if(Zt(x)){var _=x({value:S,selection:k},{value:r.value,selection:null},null,r.getBeforeMaskedValueChangeConfig());S=_.value,k=_.selection}var D=S!==r.getInputValue();D&&r.setInputValue(S),D&&Zt(r.props.onChange)&&r.props.onChange(g),r.setSelection(k.start,k.end)}r.runSaveSelectionLoop()}Zt(r.props.onFocus)&&r.props.onFocus(g)},r.onBlur=function(g){var x=r.props.beforeMaskedValueChange,y=r.maskOptions.mask;if(r.stopSaveSelectionLoop(),r.focused=!1,y&&!r.props.alwaysShowMask&&wy(r.maskOptions,r.value)){var v="";Zt(x)&&(v=x({value:v,selection:null},{value:r.value,selection:r.previousSelection},null,r.getBeforeMaskedValueChangeConfig()).value);var b=v!==r.getInputValue();b&&r.setInputValue(v),b&&Zt(r.props.onChange)&&r.props.onChange(g)}Zt(r.props.onBlur)&&r.props.onBlur(g)},r.onMouseDown=function(g){if(!r.focused&&document.addEventListener){r.mouseDownX=g.clientX,r.mouseDownY=g.clientY,r.mouseDownTime=new Date().getTime();var x=function y(v){if(document.removeEventListener("mouseup",y),r.focused){var b=Math.abs(v.clientX-r.mouseDownX),E=Math.abs(v.clientY-r.mouseDownY),S=Math.max(b,E),F=new Date().getTime()-r.mouseDownTime;(S<=10&&F<=200||S<=5&&F<=300)&&r.setCursorToEnd()}};document.addEventListener("mouseup",x)}Zt(r.props.onMouseDown)&&r.props.onMouseDown(g)},r.onPaste=function(g){Zt(r.props.onPaste)&&r.props.onPaste(g),g.defaultPrevented||(r.beforePasteState={value:r.getInputValue(),selection:r.getSelection()},r.setInputValue(""))},r.handleRef=function(g){r.props.children==null&&Zt(r.props.inputRef)&&r.props.inputRef(g)};var o=i.mask,a=i.maskChar,s=i.formatChars,l=i.alwaysShowMask,c=i.beforeMaskedValueChange,u=i.defaultValue,f=i.value;r.maskOptions=yy(o,a,s),u==null&&(u=""),f==null&&(f=u);var p=Ch(f);if(r.maskOptions.mask&&(l||p)&&(p=yi(r.maskOptions,p),Zt(c))){var m=i.value;i.value==null&&(m=u),p=c({value:p,selection:null},{value:m=Ch(m),selection:null},null,r.getBeforeMaskedValueChangeConfig()).value}return r.value=p,r}SR(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=MR(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var i=this.previousSelection,r=this.props,o=r.beforeMaskedValueChange,a=r.alwaysShowMask,s=r.mask,l=r.maskChar,c=r.formatChars,u=this.maskOptions,f=a||this.isFocused(),p=this.props.value!=null,m=p?Ch(this.props.value):this.value,g=i?i.start:null;if(this.maskOptions=yy(s,l,c),this.maskOptions.mask){!u.mask&&this.isFocused()&&this.runSaveSelectionLoop();var x=this.maskOptions.mask&&this.maskOptions.mask!==u.mask;if(u.mask||p||(m=this.getInputValue()),(x||this.maskOptions.mask&&(m||f))&&(m=yi(this.maskOptions,m)),x){var y=Es(this.maskOptions,m);(g===null||y<g)&&(g=m4(this.maskOptions,m)?y:js(this.maskOptions,y))}!this.maskOptions.mask||!wy(this.maskOptions,m)||f||p&&this.props.value||(m="");var v={start:g,end:g};if(Zt(o)){var b=o({value:m,selection:v},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());m=b.value,v=b.selection}this.value=m;var E=this.getInputValue()!==this.value;E?(this.setInputValue(this.value),this.forceUpdate()):x&&this.forceUpdate();var S=!1;v.start!=null&&v.end!=null&&(S=!i||i.start!==v.start||i.end!==v.end),(S||E)&&this.setSelection(v.start,v.end)}else u.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Eh(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var i,r=this.props,o=(r.mask,r.alwaysShowMask,r.maskChar,r.formatChars,r.inputRef,r.beforeMaskedValueChange,r.children),a=FR(r,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){Zt(o)||vy(!1);var s=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],l=vg({},a);s.forEach(function(u){return delete l[u]}),i=o(l),s.filter(function(u){return i.props[u]!=null&&i.props[u]!==a[u]}).length&&vy(!1)}else i=wh.createElement("input",vg({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),a.value!=null&&(c.value=this.value)),i=wh.cloneElement(i,c)},t}(wh.Component),RR=LR;(function(e){e.exports=RR})(yR);const yg=Tw(xg),BR=h(yg).attrs(e=>({...e}))`
  border: 1px solid
    ${({hasError:e,hasSuccess:t,colorInputSuccess:n,theme:i})=>e?`${i.red_error}`:t?`${n}`:`${i.neutral_Light_active}`};

  color: ${({hasError:e,hasSuccess:t,colorInputSuccess:n,theme:i})=>e?`${i.red_error}`:t?`${n}`:`${i.gray_sys2}`};
  outline: none;
  width: 100%;
  border-radius: 4px;

  padding: 0 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  height: 44px;

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({hasError:e,theme:t})=>e?`${t.red_error}`:`${t.gray_sys2}`};
  }
`;h.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${({theme:e})=>e.neutral_darker};
  margin-bottom: 4px;
`;const ye=A.forwardRef(({label:e,mask:t,placeholder:n,maxLength:i,...r},o)=>w("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[d(a5,{children:e}),d(BR,{maxLength:i,mask:t,ref:o,...r,placeholder:n})]}));ye.displayName="LabelCustomInputMask";function zR({Avançar:e,BPF:t,BPJ:n}){const{register:i,setValue:r,formState:{errors:o,isValid:a},watch:s}=st(),[l,c]=C.useState(!1),u=!!s("NascimentoSocio")&&!!s("CPFEstabelecimento")&&!!s("NomeSocioEstabelecimento")&&!!s("EmailEstabelecimento")&&!!s("TelefoneEstabelecimento"),f=be(),p=()=>{f("/licenciados")},m=s("CPFEstabelecimento"),g=async x=>{try{c(!0);const y=await Oe.get(`https://ws.hubdodesenvolvedor.com.br/v2/cpf/?cpf=${x}&token=119905575VQLhxBIJgu216485880`),{result:v}=y.data,{nome_da_pf:b,data_nascimento:E}=v;console.log(b,E),r("NomeSocioEstabelecimento",b),r("NascimentoSocio",E)}catch(y){console.error("Error fetching person data by CPF:",y)}finally{c(!1)}};return C.useEffect(()=>{Fe.validateCPF(m)&&g(m.replace(/\D/g,""))},[m]),w(ie,{children:[l&&d(Ve,{}),d(sR,{children:w(lR,{children:[w(uR,{children:[w(cR,{children:[d(dR,{children:"Dados do Licenciado"}),w(gR,{children:[d(mR,{active:!1,onClick:n,children:"PJ"}),d(xR,{active:!0,onClick:t,children:"PF"})]})]}),d(fR,{}),w(pR,{children:[w(yh,{children:[d(ye,{...i("CPFEstabelecimento",{validate:Fe.validateCPF}),label:"CPF",mask:"999.999.999-99",placeholder:"---.---.---.--",hasError:!!o.CPFEstabelecimento}),d(ye,{...i("NascimentoSocio",{validate:zt}),label:"Data de Nascimento",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.NascimentoSocio})]}),w(yh,{children:[d(ne,{...i("NomeSocioEstabelecimento"),label:"Nome Completo",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeSocioEstabelecimento}),d(ye,{...i("TelefoneEstabelecimento",{validate:bn}),label:"Telefone/Celular",mask:"(99) 99999-9999",placeholder:"(--) ----.----",hasError:!!o.TelefoneEstabelecimento})]}),d(yh,{children:d(ne,{...i("EmailEstabelecimento",{validate:Tn}),label:"E-mail",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.EmailEstabelecimento})})]})]}),w(bR,{children:[d(vR,{onClick:p,children:"Cancelar"}),d(hR,{disabled:!u,onClick:e,children:"Avançar"})]})]})})]})}const NR=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,VR=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,jR=h.div`
  display: flex;
  justify-content: space-between;

`,HR=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin-top: 30px;
  margin-bottom: 32px;

  width: 900px;
  padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,UR=h.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #7d7d7d;
`,WR=h.div`
  border: 1px solid #a0a0a0;
  margin-top: 15px;
`,qR=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;
`,Ac=h.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`,ZR=h.section`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > button {
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;

    letter-spacing: 0.5px;

    color: #665b6d;
  }
`,JR=h.button`
  width: 109px;
  height: 35px;

  background: #00a3d7;
  border: 0.5px solid #0086ed;
  border-radius: 5px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;

  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 100px;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`,YR=h.div`

`,GR=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};

  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"8px 1px 1px 8px"} ;

  position: ${({active:e})=>e?"relative":""};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,KR=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};
  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"1px 8px 8px 1px"} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,XR=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,QR=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`,eB={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]};function tB({Avançar:e,BPF:t,BPJ:n}){const{register:i,setValue:r,formState:{errors:o,isValid:a},trigger:s,watch:l}=st(),[c,u]=C.useState(!1),f=!!l("CNPJEstabelecimento")&&!!l("RazaoSocialEstabelecimento")&&!!l("NomeFantasiaEstabelecimento")&&!!l("DataCriacaoEstabelecimento")&&!!l("NascimentoSocio")&&!!l("CPFEstabelecimento")&&!!l("NomeSocioEstabelecimento")&&!!l("EmailEstabelecimento")&&!!l("AreaAtuacaoEstabelecimento")&&!!l("TelefoneEstabelecimento"),p=async()=>{await s()&&!o.CNPJEstabelecimento&&!o.CPFEstabelecimento&&f&&a&&e()},m=be(),g=()=>{m("/licenciados")},x=l("CNPJEstabelecimento"),y=l("CPFEstabelecimento"),v=async E=>{try{u(!0);const S=await Oe.get(`https://ws.hubdodesenvolvedor.com.br/v2/cnpj/?cnpj=${E}&token=YOUR_TOKEN`),{result:F}=S.data,{abertura:P,nome:k,fantasia:_}=F;r("DataCriacaoEstabelecimento",P),r("RazaoSocialEstabelecimento",k),r("NomeFantasiaEstabelecimento",_)}catch(S){console.error("Error fetching company data by CNPJ:",S)}finally{u(!1)}},b=async E=>{try{u(!0);const S=await Oe.get(`https://ws.hubdodesenvolvedor.com.br/v2/cpf/?cpf=${E}&token=119905575VQLhxBIJgu216485880`),{result:F}=S.data,{nome_da_pf:P,data_nascimento:k}=F;console.log(P,k),r("NomeSocioEstabelecimento",P),r("NascimentoSocio",k)}catch(S){console.error("Error fetching person data by CPF:",S)}finally{u(!1)}};return C.useEffect(()=>{Fe.validateCNPJ(x)&&v(x)},[x]),C.useEffect(()=>{Fe.validateCPF(y)&&b(y.replace(/\D/g,""))},[y]),w(ie,{children:[c&&d(Ve,{}),d(NR,{children:w(VR,{children:[w(HR,{children:[w(jR,{children:[d(UR,{children:"Dados do Licenciado"}),w(YR,{children:[d(GR,{active:!0,onClick:n,children:"PJ"}),d(KR,{active:!1,onClick:t,children:"PF"})]})]}),d(WR,{}),w(qR,{children:[w(Ac,{children:[d(ye,{...i("CNPJEstabelecimento",{validate:Fe.validateCNPJ}),mask:"99.999.999/9999-99",placeholder:"--.---.---/---.--",hasError:!!o.CNPJEstabelecimento,label:"CNPJ"}),d(ne,{...i("RazaoSocialEstabelecimento"),label:"Razão Social",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.RazaoSocialEstabelecimento})]}),w(Ac,{children:[d(ne,{...i("NomeFantasiaEstabelecimento"),label:"Nome Fantasia",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeFantasiaEstabelecimento}),d(ye,{...i("DataCriacaoEstabelecimento",{validate:zt}),label:"Data de Criação",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.DataCriacaoEstabelecimento})]}),w(Ac,{children:[d(ye,{...i("CPFEstabelecimento",{validate:Fe.validateCPF}),label:"CPF do Sócio",mask:"999.999.999-99",placeholder:"---.---.---.--",hasError:!!o.CPFEstabelecimento}),d(ne,{...i("NomeSocioEstabelecimento"),label:"Nome Completo do Sócio",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeSocioEstabelecimento})]}),w(Ac,{children:[d(ye,{...i("NascimentoSocio",{validate:zt}),label:"Nascimento Sócio",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.NascimentoSocio}),d(ye,{...i("TelefoneEstabelecimento",{validate:bn}),label:"Telefone/Celular",mask:"(99) 99999-9999",placeholder:"(--) ----.----",hasError:!!o.TelefoneEstabelecimento}),d(ne,{...i("EmailEstabelecimento",{validate:Tn}),label:"E-mail",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.EmailEstabelecimento})]}),w(ZR,{children:[d(ge,{optionsData:eB,...i("AreaAtuacaoEstabelecimento"),placeholder:"Digite aqui ou clique para ver a lista",label:"Área de Atuação",onChange:E=>{r("AreaAtuacaoEstabelecimento",E.value)},hasError:!!o.AreaAtuacaoEstabelecimento}),d("button",{children:"Pesquise pelo CNAE ou Nome"})]})]})]}),w(QR,{children:[d(XR,{onClick:g,children:"Cancelar"}),d(JR,{disabled:!f,onClick:p,children:"Avançar"})]})]})})]})}const v4=C.createContext({}),nB=({children:e})=>{const[t,n]=C.useState("CNPJ"),i=C.useCallback(()=>{n("CNPJ")},[]),r=C.useCallback(()=>{n("CPF")},[]);return d(v4.Provider,{value:{documentTypeLA:t,setDocumentTypeLA:n,updateToCNPJLA:i,updateToCPFLA:r},children:e})};function cp(){const e=C.useContext(v4);if(!e)throw new Error("");return e}function iB({Avançar:e}){const{documentTypeLA:t,updateToCNPJLA:n,updateToCPFLA:i}=cp();return console.log(t),d(ie,{children:t==="CNPJ"?d(tB,{Avançar:e,BPJ:n,BPF:i}):d(zR,{Avançar:e,BPJ:n,BPF:i})})}const rB=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,oB=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,aB=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,sB=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,lB=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,cB=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;


`,Sh=h.section`
    display: flex;
justify-content: space-between;
gap: 50px;

`,uB=h.section`
    width: 215px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`,dB=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,fB=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,pB=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`;function hB({Avançar:e,Voltar:t}){const{register:n,formState:{errors:i},setValue:r,watch:o}=st(),[a,s]=C.useState(!1),l=!!o("CEP")&&!!o("Endereco")&&!!o("Numero")&&!!o("Bairro")&&!!o("Cidade")&&!!o("Estado"),c=async u=>{s(!0);try{const f=await Oe.get(`https://viacep.com.br/ws/${u}/json/`);if(f.data){const{logradouro:p,complemento:m,bairro:g,localidade:x,uf:y}=f.data;r("Endereco",p||""),r("Complemento",m||""),r("Bairro",g||""),r("Cidade",x||""),r("Estado",y||"")}}catch(f){console.error("Erro ao buscar endereço:",f)}finally{s(!1)}};return C.useEffect(()=>{s(!1),n("CEP");const u=p=>{const m=p.target.value.replace(/\D/g,"");m.length===8&&c(m)},f=document.getElementById("cep");return f.addEventListener("change",u),()=>{f.removeEventListener("change",u)}},[n,r]),w(ie,{children:[a&&d(Ve,{}),d(rB,{children:w(oB,{children:[w(aB,{children:[d(sB,{children:"Endereço"}),d(lB,{}),w(cB,{children:[w(Sh,{children:[d(ye,{id:"cep",...n("CEP"),label:"CEP",mask:"99999-999",placeholder:"--.---.---",hasError:!!i.CEP}),d(ne,{...n("Endereco"),label:"Endereço",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Endereco})]}),w(Sh,{children:[d(ne,{...n("Numero"),label:"Número",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Numero}),d(ne,{...n("Complemento"),label:"Complemento",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Complemento})]}),w(Sh,{children:[d(ne,{...n("Bairro"),label:"Bairro",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Bairro}),d(ne,{...n("Cidade"),label:"Cidade",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,disabled:!0,hasError:!!i.Cidade})]}),d(uB,{children:d(ne,{...n("Estado"),label:"Estado",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,disabled:!0,hasError:!!i.Estado})})]})]}),w(pB,{children:[d(fB,{onClick:t,children:"Voltar"}),d(dB,{disabled:!l,onClick:e,children:"Avançar"})]})]})})]})}const cn=e=>e.replace(/\D+/g,""),Fd=e=>{const t=e.split("/");if(t.length!==3)throw new Error("Invalid");const[n,i,r]=t;return`${r}-${i.padStart(2,"0")}-${n.padStart(2,"0")}`},gB=()=>{const[e,t]=C.useState(1),n=be(),[i,r]=C.useState(!0),{dataUser:o}=lt(),{documentTypeLA:a}=cp(),[s,l]=C.useState(!1),c=()=>{n("/licenciados"),r(!1)},u=qt(),{getValues:f}=u,p=async()=>{if(e===4&&b())try{l(!0);const F=f(),P={seller:[{trading_name:F.NomeFantasiaEstabelecimento,document:cn(a==="CPF"?F.CPFEstabelecimento:F.CNPJEstabelecimento),type_document:a,type:"LA",email:F.EmailEstabelecimento,status:"ativo",company_name:F.RazaoSocialEstabelecimento,opening_date:a==="CPF"?null:Fd(F.DataCriacaoEstabelecimento),mcc:"5678",phone:cn(F.TelefoneEstabelecimento),owner_name:F.NomeSocioEstabelecimento,owner_birthday:Fd(F.NascimentoSocio),owner_cpf:cn(F.CPFEstabelecimento),address_cep:F.CEP,address_street:F.Endereco,address_number:Number(F.Numero),address_complement:F.Complemento,address_neighborhood:F.Bairro,address_city:F.Cidade,address_state:F.Estado,tpv_goal:1e4}],users:[{document_id:cn(F.CPFEstabelecimento),name:F.NomeSocioEstabelecimento,email:F.EmailEstabelecimento,phone_number:cn(F.TelefoneEstabelecimento),status:"ATIVO",profile_id:2}],bank:[{agency:F.Agência,account:F.Conta,type_account:F.TipoDeConta,document:F.CpfCnpj,document_type:F.CpfCnpj.length===18?"CNPJ":"CPF",code:F.Banco}],markup_seller_destiny:F.RegraMarkup,id_licensed_origin:String(F.licenciado)},k=await Oe.post("https://api-pagueassim.stalopay.com.br/create/sellerla",P,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${o==null?void 0:o.token}`}});console.log("oi LA"),k.status===201?(console.log("Requisição bem-sucedida:",k.data),l(!1),t(5)):console.error("Requisição falhou:",k.statusText)}catch(F){F.response&&F.response.status===409&&(console.error("Erro 409:",F.response.data),Pe.error("Já existe vendedor com o mesmo documento e tipo.")),l(!1)}e<4&&b()&&t(F=>F+1)},m=()=>{e>1&&t(F=>F-1)},g=()=>{const F=f(),P=Tn(F.EmailEstabelecimento),k=a!=="CPF"?zt(F.DataCriacaoEstabelecimento):!0,_=bn(F.TelefoneEstabelecimento);return(Fe.validateCNPJ(F.CNPJEstabelecimento)||a==="CPF")&&(F.RazaoSocialEstabelecimento||a==="CPF")&&(F.NomeFantasiaEstabelecimento||a==="CPF")&&F.NascimentoSocio&&Fe.validateCPF(F.CPFEstabelecimento)&&F.NomeSocioEstabelecimento&&P&&_&&(F.AreaAtuacaoEstabelecimento||a==="CPF")&&k},x=()=>{const F=f();return F.CEP&&F.Endereco&&F.Numero&&F.Bairro&&F.Cidade&&F.Estado},y=()=>{const F=f(),P=Object.keys(F).filter(k=>k.startsWith("Fornecedor")).length;return!!F.licenciado&&Array.from({length:P}).every((k,_)=>!!F[`Fornecedor${_}`]&&!!F[`PlanoComercial${_}`])},v=()=>{const F=f(),P=F.CpfCnpj?F.CpfCnpj.replace(/\D/g,""):"";let k=!1;return P.length<=11?k=Fe.validateCPF(P):k=Fe.validateCNPJ(P),F.Banco&&F.TipoDeConta&&F.Agência&&F.Conta&&k},b=()=>{switch(e){case 1:return g();case 2:return x();case 3:return y();case 4:return v();default:return!0}},E=[1,2,3,4],S="Licenciado Credenciado";return console.log("oiiss",f()),d(ie,{children:w(JO,{children:[d(YO,{children:d(rT,{stepLabels:["Dados do Licenciado","Endereço","Comercial","Dados Bancários"],startProgress:0,endProgress:E.length+1,currentStep:e,setCurrentStep:t,steps:E,canAdvance:b(),canGoBack:e>1})}),w($a,{...u,children:[e===1&&d(iB,{Avançar:p}),e===2&&d(hB,{Avançar:p,Voltar:m}),e===3&&d(JL,{Avançar:p,Voltar:m}),e===4&&d(aR,{isLoading:s,Avançar:p,Voltar:m}),e===5&&d(Mf,{text:S,visible:i,onClose:c})]})]})})},mB=h.span`
 color: #6C757D;
font-size: 10.768px;
line-height: 16.922px;
`;function Ra({totalItens:e}){return d(ie,{children:w(mB,{children:["Mostrando de 1 a ",e]})})}const xB=h.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: center;
`,kr=h.th`
  color: #343A40;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
`,_r=h.td`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
`,vB=h.button`
  color: #5A6ACF;
  font-size: 8.477px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
  margin-left: 20px;

`;h.tr`
  height: 35.377px;
  &.highlighted {
    background-color: #F5F4F4;
  }
`;const bB=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,yB=h.p`
  width: 23px;
  height: 26px;
  font-size: 10px;
  font-weight: 700;
  line-height: 24px;
  margin-right: 5px;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  background-color: ${({fornecedor:e})=>e==="F1"?"#7D7D7D":e==="F2"?"#F9C716":e==="F3"?"#48F041":"transparent"};
`,wB=h.div`
  display: inline-block;
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  margin-left: 8px;
`,Ey=h.span`
  display: block;
  color: ${e=>e.isActive?"black":"#08BBE9"};
  opacity: ${e=>e.isActive?.5:1};
  font-size: 9px;
`;function p1(e=0){const[t,n]=C.useState(()=>{const r=localStorage.getItem("@EstablishmentDetail:number");return r?JSON.parse(r):e});return C.useEffect(()=>{const r=o=>{n(o.detail)};return window.addEventListener("@EstablishmentDetail:change",r),()=>{window.removeEventListener("@EstablishmentDetail:change",r)}},[]),C.useEffect(()=>{localStorage.setItem("@EstablishmentDetail:number",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("@EstablishmentDetail:change",{detail:t}))},[t]),{detailNumber:t,setDetailNumber:r=>{n(r)}}}function CB({rows:e}){const[t,n]=C.useState("id"),[i,r]=C.useState("asc"),o=be(),{setDetailNumber:a}=p1(),s=m=>{m===t?r(i==="asc"?"desc":"asc"):(n(m),r("asc"))},l=[...e].sort((m,g)=>{let x=0;return t==="id"?x=m.id-g.id:t==="trading_name"?x=m.trading_name.localeCompare(g.trading_name):t==="tpv"&&(x=m.tpv-g.tpv),i==="asc"?x:-x});function c({direction:m}){return w(wB,{children:[d(Ey,{isActive:m!=="asc",children:"▲"}),d(Ey,{isActive:m!=="desc",children:"▼"})]})}const u=m=>t===m?i:void 0,f=async m=>{a(Number(m)),await new Promise(g=>setTimeout(g,20)),o("/establishmentdetail")};function p(m){const g=new Date(m),x=String(g.getDate()).padStart(2,"0"),y=String(g.getMonth()+1).padStart(2,"0"),v=g.getFullYear();return`${x}/${y}/${v}`}return w(xB,{children:[d("thead",{children:w("tr",{children:[w(kr,{style:{cursor:"pointer"},onClick:()=>s("id"),children:["Id",d(c,{direction:u("id")})]}),d(kr,{children:"CNPJ/CPF"}),w(kr,{style:{cursor:"pointer"},onClick:()=>s("trading_name"),children:["Estabelecimento",d(c,{direction:u("trading_name")})]}),d(kr,{children:"Data de Registro"}),w(kr,{style:{cursor:"pointer"},onClick:()=>s("tpv"),children:["TPV",d(c,{direction:u("tpv")})]}),d(kr,{children:"Fornecedor"}),d(kr,{style:{paddingLeft:"28px"},children:"Ver mais"})]})}),d("tbody",{children:l.map((m,g)=>w("tr",{children:[d(_r,{children:m.id}),d(_r,{children:m.cnpj_cpf}),d(_r,{children:m.trading_name}),d(_r,{children:p(m.registration_date)}),w(_r,{children:["R$ ",m.tpv.toLocaleString("pt-BR",{minimumFractionDigits:2})]}),d(_r,{children:d(bB,{children:m.acquires.map((x,y)=>d(yB,{fornecedor:x,children:x},y))})}),d(_r,{children:d(vB,{onClick:()=>f(m.id.toString()),children:"Visão Geral"})})]},g))})]})}const EB=h.div`
  display: flex;
  margin-top: 35px;
`,SB=h.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`,FB=h.div`
  margin-top: 45px;
`,kB=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
`,_B=h.div`
  display: flex;
  flex-direction: row;
`,PB=h.button`
  width: 118px;
height: 35px;


border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
font-size: 9.906px;
font-style: normal;
font-weight: 500;
`,AB=h.button`
color: #676767;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

width: 76px;
height: 35px;

border-radius: 6px 6px 0px 0px;
border: 0.5px solid #F7F7F7;
opacity: 0.5;
background:  #F7F7F7;



display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;h.button`
  color: #5A6ACF;
  font-size: 8.477px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
`;const DB=h.div`
  display: flex;
  align-items: center;
  gap: 9px;
`,$B=h.span`
color:  #6C757D;
font-size: 10.768px;
line-height: 16.922px;
`,OB=h.input`
    width: 39.228px;
height: 23.075px;
flex-shrink: 0;

border-radius: 3.077px;
border: 0.769px solid #DFDFDF;
background:  #FFF;


color:  #343A40;
font-size: 10.768px;
line-height: 16.922px;
text-align: center;
appearance: textfield;
`;function Ba({itensPorPage:e,setItensPorPage:t}){return w(DB,{children:[d($B,{children:"Estabelecimentos por página"}),d(OB,{type:"number",value:e===""?"":e,min:"1",onChange:i=>{const{value:r}=i.target,o=r===""?"":Number(r);t(o)}})]})}const TB=h.div`
  display: flex;
  align-items: center;
`,b4=h.span`
  cursor: pointer;
border-radius: 3.077px;
background-color: #FFF;

width: 23.075px;
height: 23.075px;
font-size: 10.768px;

display: flex;
  justify-content: center;
  align-items: center;
`,MB=h(b4)`
  font-weight: bold;
  border-radius: 1.538px;
  background: #0086ED;

  font-weight: 400;
color: #FFF;
font-size: 10.768px
`,Sy=h.button`
  background-color: #DFDFDF;
  width: 23.075px;
  height: 23.075px;
  border-radius: 1.538px;


  svg {
    font-size: 12px;

  }

  &:disabled {
    background-color: #FBFBFB;
  }
`;function Er({totalPages:e,currentPage:t,onNextPage:n,onPrevPage:i,onPageClick:r}){const o=()=>{const c=Math.min(t+1,e);n(c)},a=()=>{const c=Math.max(t-1,1);i(c)},s=()=>{const c=Math.max(1,t-2),u=Math.min(e,c+3);return Array.from({length:u-c+1},(f,p)=>c+p)},l=c=>{r(c)};return w(TB,{children:[d(Sy,{onClick:a,disabled:t===1,children:d(Cr,{})}),s().map(c=>d(b4,{onClick:()=>l(c),children:c===t?d(MB,{children:c}):c},c)),d(Sy,{onClick:o,disabled:t===e,children:d(p5,{})})]})}function h1(e=!1){const[t,n]=C.useState(()=>{const o=localStorage.getItem("@FilterStateEstablishment:state");return o?JSON.parse(o):e});return C.useEffect(()=>{const o=a=>{n(a.detail)};return window.addEventListener("@FilterStateEstablishment:change",o),()=>{window.removeEventListener("@FilterStateEstablishment:change",o)}},[]),C.useEffect(()=>{localStorage.setItem("@FilterStateEstablishment:state",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("@FilterStateEstablishment:change",{detail:t}))},[t]),{state:t,setTrue:()=>{n(!0)},setFalse:()=>{n(!1)}}}const IB=h.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(16, 16, 79, 0.65);
  backdrop-filter: blur(0.1rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`,LB=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 919px;
height: 416px;
position: relative;

`,RB=h.div`

    display: flex;
    padding: 27px 0 0 36px;
    display: flex;
    align-items: center;
    gap: 12px;

  > p {
    color: #00A3D7;
font-size: 24px;
font-weight: 700;
  }

  > span {
    color:  #9B959F;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`,BB=h.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`,zB=h.div`

  > div {
    display: flex;
    padding: 27px 56px 27px 56px;
    gap: 56px;
  }
`,NB=h.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  gap: 21px;

  position: absolute;
  right: 0;
  bottom: 40px;
`,VB=h.button`
border-radius: 5px;
border: 0.5px solid #0086ED;
background: #00A3D7;

width: 109px;
height: 35px;

color: #FFF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
`,jB=h.button`
  border-radius: 5px;
border: 0.5px solid #F5F4F4;
background: #FFF;

width: 109px;
height: 35px;


color: #5A6ACF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

`,mt={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]};function HB({onClose:e,visible:t}){const{register:n,handleSubmit:i,setValue:r,formState:{errors:o}}=qt(),{setTrue:a}=h1(),s=l=>{localStorage.setItem("@licenciadoAutorizadoEstablishment",l.licenciadoAutorizado||""),localStorage.setItem("@fornecedorEstablishment",l.fornecedor||""),localStorage.setItem("@statusNoSistemaEstablishment",l.statusNoSistema||""),localStorage.setItem("@statusEmFornecedorEstablishment",l.statusEmFornecedor||""),a(),e()};return C.useEffect(()=>{function l(c){c.key==="Escape"&&e()}return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[e]),t?d(IB,{children:w(LB,{children:[w(RB,{children:[d("p",{children:"Adicionar Filtros"}),d("span",{children:"Preencha os campos que deseja filtrar"})]}),d(BB,{}),w("form",{onSubmit:i(s),children:[w(zB,{children:[w("div",{children:[d(ge,{...n("licenciadoAutorizado"),optionsData:mt,placeholder:"Digite aqui ou clique para ver a lista",label:"Licenciado Autorizado",onChange:l=>{r("licenciadoAutorizado",l.value)}}),d(ge,{...n("fornecedor"),optionsData:mt,placeholder:"Digite aqui ou clique para ver a lista",label:"Fornecedor",onChange:l=>{r("fornecedor",l.value)}})]}),w("div",{children:[d(ge,{...n("statusNoSistema"),optionsData:mt,placeholder:"Digite aqui ou clique para ver a lista",label:"Status no sistema",onChange:l=>{r("statusNoSistema",l.value)}}),d(ge,{...n("statusEmFornecedor"),optionsData:mt,placeholder:"Digite aqui ou clique para ver a lista",label:"Status em Fornecedor",onChange:l=>{r("statusEmFornecedor",l.value)}})]})]}),w(NB,{children:[d(jB,{onClick:e,children:"Cancelar"}),d(VB,{type:"submit",children:"Salvar"})]})]})]})}):null}const UB=h.button`
  border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

width: 118px;
height: 35px;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

align-items: center;
text-align: center;

`,WB=h.input`
  border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

width: 118px;
height: 35px;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

align-items: center;
text-align: center;

`,qB=h.button`
  background-color: transparent;
  margin-left: 13px ;


  > img {
    width: 8px;
    height: 8px;
  }

`,Xl="/assets/X-42504108.svg";function ZB(e="Filtragem 01"){const[t,n]=C.useState(()=>{const r=localStorage.getItem("@EditableButtonEstablishment:label");return r?JSON.parse(r):e});return C.useEffect(()=>{localStorage.setItem("@EditableButtonEstablishment:label",JSON.stringify(t))},[t]),{label:t,setLabel:r=>{n(r),localStorage.setItem("@EditableButtonEstablishment:label",JSON.stringify(r))}}}function JB(){const{label:e,setLabel:t}=ZB(),[n,i]=C.useState(!1),{setFalse:r}=h1(),o=C.useRef(null),a=()=>{i(!n)},s=u=>{t(u.target.value)},l=u=>{u.key==="Enter"&&i(!1)},c=u=>{u.stopPropagation(),localStorage.removeItem("@licenciadoAutorizadoEstablishment"),localStorage.removeItem("@fornecedorEstablishment"),localStorage.removeItem("@statusNoSistemaEstablishment"),localStorage.removeItem("@statusEmFornecedorEstablishment"),r()};return C.useEffect(()=>{const u=f=>{n&&o.current&&!o.current.contains(f.target)&&i(!1)};return n?document.addEventListener("mousedown",u):document.removeEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[n]),n?d(WB,{ref:o,type:"text",onChange:s,onKeyDown:l,value:e,maxLength:12,autoFocus:!0}):d(ie,{children:w(UB,{onClick:a,children:[e,d(qB,{onClick:c,children:d("img",{src:Xl,alt:""})})]})})}const YB=h.div`
    margin-left: 44px;
    margin-top: 30px;
    margin-right: 52px;
  `,GB=h.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    justify-content: space-between;
  `,KB=h.button`
    display: flex;
    width: 213px;
    height: 35px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0.5px solid #0086ED;
    background: #00A3D7;
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.5px;
  `,XB=h.h2`
    color: #00A3D7;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  `,QB=h.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 525px;
    height: 44px;
    border-radius: 4px;
    border: 1px solid #E2E2E2;
    background: #FFF;
    padding: 10px 16px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #9B959F;
    padding-right: 15px;

    > input {
          width: 100%;
          padding-right: 40px;

          color:  #9B959F;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
    }

    .search-icon {
      position: absolute;
      right: 20px;
      color: #000;
    }
  `,ez=h.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9B959F;
    font-size: 21px;
    cursor: pointer;
    svg {
    width: 21.429px;
  height: 21.429px;
  }
  `;function tz(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var y4=tz,nz=typeof Xe=="object"&&Xe&&Xe.Object===Object&&Xe,iz=nz,rz=iz,oz=typeof self=="object"&&self&&self.Object===Object&&self,az=rz||oz||Function("return this")(),w4=az,sz=w4,lz=function(){return sz.Date.now()},cz=lz,uz=/\s/;function dz(e){for(var t=e.length;t--&&uz.test(e.charAt(t)););return t}var fz=dz,pz=fz,hz=/^\s+/;function gz(e){return e&&e.slice(0,pz(e)+1).replace(hz,"")}var mz=gz,xz=w4,vz=xz.Symbol,C4=vz,Fy=C4,E4=Object.prototype,bz=E4.hasOwnProperty,yz=E4.toString,es=Fy?Fy.toStringTag:void 0;function wz(e){var t=bz.call(e,es),n=e[es];try{e[es]=void 0;var i=!0}catch{}var r=yz.call(e);return i&&(t?e[es]=n:delete e[es]),r}var Cz=wz,Ez=Object.prototype,Sz=Ez.toString;function Fz(e){return Sz.call(e)}var kz=Fz,ky=C4,_z=Cz,Pz=kz,Az="[object Null]",Dz="[object Undefined]",_y=ky?ky.toStringTag:void 0;function $z(e){return e==null?e===void 0?Dz:Az:_y&&_y in Object(e)?_z(e):Pz(e)}var Oz=$z;function Tz(e){return e!=null&&typeof e=="object"}var Mz=Tz,Iz=Oz,Lz=Mz,Rz="[object Symbol]";function Bz(e){return typeof e=="symbol"||Lz(e)&&Iz(e)==Rz}var zz=Bz,Nz=mz,Py=y4,Vz=zz,Ay=0/0,jz=/^[-+]0x[0-9a-f]+$/i,Hz=/^0b[01]+$/i,Uz=/^0o[0-7]+$/i,Wz=parseInt;function qz(e){if(typeof e=="number")return e;if(Vz(e))return Ay;if(Py(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Py(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Nz(e);var n=Hz.test(e);return n||Uz.test(e)?Wz(e.slice(2),n?2:8):jz.test(e)?Ay:+e}var Zz=qz,Jz=y4,Fh=cz,Dy=Zz,Yz="Expected a function",Gz=Math.max,Kz=Math.min;function Xz(e,t,n){var i,r,o,a,s,l,c=0,u=!1,f=!1,p=!0;if(typeof e!="function")throw new TypeError(Yz);t=Dy(t)||0,Jz(n)&&(u=!!n.leading,f="maxWait"in n,o=f?Gz(Dy(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p);function m(P){var k=i,_=r;return i=r=void 0,c=P,a=e.apply(_,k),a}function g(P){return c=P,s=setTimeout(v,t),u?m(P):a}function x(P){var k=P-l,_=P-c,D=t-k;return f?Kz(D,o-_):D}function y(P){var k=P-l,_=P-c;return l===void 0||k>=t||k<0||f&&_>=o}function v(){var P=Fh();if(y(P))return b(P);s=setTimeout(v,x(P))}function b(P){return s=void 0,p&&i?m(P):(i=r=void 0,a)}function E(){s!==void 0&&clearTimeout(s),c=0,i=l=r=s=void 0}function S(){return s===void 0?a:b(Fh())}function F(){var P=Fh(),k=y(P);if(i=arguments,r=this,l=P,k){if(s===void 0)return g(l);if(f)return clearTimeout(s),s=setTimeout(v,t),m(l)}return s===void 0&&(s=setTimeout(v,t)),a}return F.cancel=E,F.flush=S,F}var g1=Xz;function Qz({onSearch:e,searchValue:t,setSearchValue:n}){const i=be(),[r,o]=C.useState(!1),a=c=>{c.target.value.trim(),n(c.target.value),o(!0)},s=()=>{o(!1)},l=()=>{i("/eccadastro")};return C.useEffect(()=>{let c=null;return r&&(c=g1(u=>{e(u)},1e3),c(t.trim())),()=>{c&&c.cancel()}},[e,t,r]),w(YB,{children:[d(XB,{children:"Estabelecimentos"}),w(GB,{children:[w(QB,{children:[d("input",{type:"text",placeholder:"Pesquise por nome do estabelecimento ou CNPJ",value:t,onChange:a,onBlur:s}),d(ez,{className:"search-icon",onClick:()=>e(t.trim()),children:d(Eo,{})})]}),d(KB,{onClick:l,children:"Adicionar Estabelecimento"})]})]})}function eN(){const[e,t]=C.useState(10),[n,i]=C.useState(!1),{state:r}=h1(),{dataUser:o}=lt(),[a,s]=C.useState(0),[l,c]=C.useState(1),[u,f]=C.useState([]),[p,m]=C.useState(!1),[g,x]=C.useState(""),y=async(k=l)=>{m(!0);let _=`https://api-pagueassim.stalopay.com.br/seller/indexec?perpage=${String(e)}&page=${k}`;g&&(_+=`&trading_name=${g}`);const D=await Oe.get(_,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${o==null?void 0:o.token}`}});f(D.data.sellers),s(D.data.total_sellers),c(D.data.current_page),m(!1)},v=k=>{x(k),k.trim()===""&&x(""),y()},b=()=>{c(k=>k+1)},E=()=>{l>1&&c(k=>k-1)},S=()=>{i(!0)},F=()=>{i(!1)},P=Math.ceil(a/(e||1));return C.useEffect(()=>{},[o,e,l]),C.useEffect(()=>{g.trim()===""&&y()},[g]),w(ie,{children:[d(HB,{onClose:F,visible:n}),p?d(Ve,{}):w(ie,{children:[d(Qz,{onSearch:v,searchValue:g,setSearchValue:x}),w(EB,{children:[w(PB,{children:["Todos (",a,")"]}),r?d(JB,{}):"",w(AB,{onClick:S,children:[d(Ma,{}),"Filtrar"]})]}),d(CB,{rows:u}),w(FB,{children:[d(SB,{}),w(kB,{children:[d(Ra,{totalItens:e}),w(_B,{children:[d(Ba,{itensPorPage:e,setItensPorPage:t}),d(Er,{currentPage:l,onPageClick:y,totalPages:P,onNextPage:b,onPrevPage:E})]})]})]})]})]})}const tN=h.div`
   display: flex;
    flex-direction: column;
    align-items: center;

`,nN=h.div`
  width: 100%;
  max-width: 920px;
  margin-top: 50px;
`,iN=h.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`,rN=h.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`,oN=h.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`,aN=h.div`
  width: ${({isActive:e,isCurrent:t})=>e&&t?"40px":"25px"};
  height: ${({isActive:e,isCurrent:t})=>e&&t?"40px":"25px"};
  border-radius: 50%;
  background-color: ${({isActive:e,isCurrent:t})=>e&&t?"#F7F7F7":e?"#08BBE9":"#F7F7F7"};
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`,sN=h.span`
  font-size: ${({isActive:e})=>e?"16px":"14px"};
  color: ${({labelStatus:e})=>e==="active"?"#FDFDFD":e==="current"||e==="upcoming"?"#000000":"#FDFDFD"};
`,lN=h.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 7px;
  background: #F7F7F7;
  width: 100%;
  transform: translateY(-50%);
  border-radius: 3.5px;
  z-index: 0;
`,cN=h.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 7px;
  background: ${({isActive:e})=>e?"#08BBE9":"transparent"};
  width: ${({width:e})=>e};
  transform: translateY(-50%);
  z-index: 1;
  transition: width 0.4s ease;
  border-radius: 3.5px;
`,uN=h.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
`;function dN({steps:e,currentStep:t,setCurrentStep:n,startProgress:i,endProgress:r,canAdvance:o,canGoBack:a,stepLabels:s}){const[l,c]=C.useState(null),u=`${(t-i)/(r-i)*100}%`,f=g=>g<t?"active":g===t?"current":g>t?"upcoming":"disabled",p=g=>{(g<t&&a||o&&g>=i&&g<=r)&&n(g)};return d(iN,{children:w(rN,{children:[d(lN,{onClick:()=>{o&&n(5)}}),d(cN,{isActive:t>=i,width:u}),[d("div",{}),...e,d("div",{})].map((g,x)=>d(oN,{onClick:()=>p(x),onMouseEnter:()=>c(x),onMouseLeave:()=>c(null),children:x===0||x===e.length+1?null:w(ie,{children:[l===x&&d(uN,{children:s?s[x-1]:`Step ${x}`}),d(aN,{isActive:x<=t,isCurrent:x===t,children:d(sN,{isActive:x===t,labelStatus:f(x),isCurrent:x===t,children:x})})]})},x))]})})}const fN=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,pN=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,$y=h.div`
  width: 215px;
`,hN=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;
width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,gN=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,mN=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,xN=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-right: 50px;


`,vN=h.section`
    display: flex;
gap: 50px;

`,bN=h.button`
 font-weight: 500;
font-size: 12px;
line-height: 20px;
background: transparent;
letter-spacing: 0.5px;
width: 50px;
margin-top: 30px;
color: #5A6ACF;
white-space: nowrap;
  text-align: center;

`,yN=h.button`

  font-weight: 500;
font-size: 12px;
line-height: 20px;
background: transparent;
letter-spacing: 0.5px;
width: 50px;
margin-top: 30px;
color: #E91414;
white-space: nowrap;
  text-align: center;

`,wN=h.section`
width: 365px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`,CN=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,EN=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,SN=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`,FN={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]};function kN({Avançar:e,Voltar:t}){const[n,i]=C.useState(!1),[r,o]=C.useState([]),[a,s]=C.useState([]),[l,c]=C.useState([{}]),[u,f]=C.useState([]),{dataUser:p}=lt(),{register:m,setValue:g,unregister:x,formState:{errors:y},watch:v}=st(),b=!!v("licenciado")&&l.every((k,_)=>!!v(`Fornecedor${_}`)&&!!v(`PlanoComercial${_}`)),E=(k,_)=>{g(`Fornecedor${_}`,k.value);const D=[...u];D[_]=k.value,f(D)},S=()=>{if(l.length<a.length){const k=l.length;c(_=>[..._,{}]),g(`Fornecedor${k}`,void 0),g(`PlanoComercial${k}`,void 0)}},F=k=>{c(_=>{const D=[..._];D.splice(k,1);const T=[...u];return T.splice(k,1),f(T),[`Fornecedor${k}`,`PlanoComercial${k}`].forEach(L=>{x(L)}),D})},P=()=>l.map((k,_)=>{const D=a.filter(j=>!u.includes(j.value)),T=_!==0&&d(yN,{onClick:()=>F(_),children:"Remover"}),L=_===l.length-1&&l.length!==a.length&&d(bN,{onClick:S,children:"Adicionar outro"});return w(vN,{children:[d($y,{children:d(ge,{...m(`Fornecedor${_}`),label:"Fornecedor",placeholder:"",hasError:!!y[`Fornecedor${_}`],optionsData:{options:D},onChange:j=>E(j,_)})}),d($y,{children:d(ge,{...m(`PlanoComercial${_}`),label:"Plano Comercial",optionsData:FN,placeholder:"",hasError:!!y[`PlanoComercial${_}`],onChange:j=>{g(`PlanoComercial${_}`,j.value)}})}),T,L]},_)});return C.useEffect(()=>{i(!0),Oe.get("https://api-pagueassim.stalopay.com.br/acquire/index",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${p==null?void 0:p.token}`}}).then(k=>{console.log("hello",k);const _=Object.keys(v()).filter(T=>T.startsWith("Fornecedor")).length;_>0&&c(new Array(_).fill({}));const D=k.data;if(D&&D.acquires){const T=D.acquires.map(R=>({value:R.id,label:R.acquire_label}));s(T)}i(!1)}).catch(k=>{console.error("Houve um erro ao buscar os dados:",k),i(!1)})},[]),C.useEffect(()=>{i(!0),Oe.get("https://api-pagueassim.stalopay.com.br/seller/indexla",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${p==null?void 0:p.token}`}}).then(k=>{const _=k.data;if(_&&_.sellers){console.log(_.sellers.trading_name);const D=_.sellers.map((T,R)=>({value:T.id,label:`${T.trading_name}-${T.type}-${T.cnpj_cpf}`}));o(D)}i(!1)}).catch(k=>{console.error("Houve um erro ao buscar os dados:",k)})},[]),w(ie,{children:[n&&d(Ve,{}),d(fN,{children:w(pN,{children:[w(hN,{children:[d(gN,{children:"Comercial"}),d(mN,{}),w(xN,{children:[w(wN,{children:[d(ge,{...m("licenciado"),label:"Licenciado Autorizado",optionsData:{options:r},hasError:!!y.licenciado,onChange:k=>{g("licenciado",k.value)}}),d("button",{children:"Pesquise pelo nome do Licenciado"})]}),P()]})]}),w(SN,{children:[d(EN,{onClick:t,children:"Voltar"}),d(CN,{disabled:!b,onClick:e,children:"Avançar"})]})]})})]})}const _N=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,PN=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,AN=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,DN=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,$N=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,ON=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 140px;
  margin-right: 50px;


`,Oy=h.section`
    display: flex;
gap: 40px;

`,TN=h.section`
   width: 365px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`,MN=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,IN=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,LN=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;


`,RN=h.div`
  width: 215px;

`,BN=h.div`
 width: 365px;

`,zN=h.div`
  width: 215px;

`,NN=h.div`
  width: 215px;

`,VN=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,jN=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,HN=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;


margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,UN=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,WN=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
  margin-bottom: 36px;
`,qN=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 140px;
  margin-right: 50px;


`,Ty=h.section`
    display: flex;
gap: 40px;

`,ZN=h.section`
   width: 365px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`;h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

`;h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`;h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`;const JN=h.div`
  width: 215px;

`,YN=h.div`
 width: 365px;

`,GN=h.div`
  width: 215px;

`,KN=h.div`
  width: 215px;

`,XN=h.div`
  display: flex;
  justify-content: space-between;



  > div {
    display: flex;
    gap: 14px;

    > p {
    font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #676767;
  }
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #676767;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  position: relative;
  background: white;
}

input[type="checkbox"]:checked {
  border: 1px solid #676767;
  border-radius: 5px;
}

input[type="checkbox"]:checked::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  border: 1px solid white;
  border-radius: 3px;
  background: #08BBE9;
}

  }
`;function QN({stepName:e}){const{register:t,getValues:n,setValue:i}=st(),[r,o]=C.useState(!0),a=f=>{const p=f.replace(/\D/g,"");return p.length>11?p.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,"$1.$2.$3/$4-$5"):p.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/,"$1.$2.$3-$4")},s=f=>{const p=a(f.target.value);i("CpfCnpj",p)},l=()=>{o(!r)},c=e.toLowerCase(),u=JSON.stringify({Banco:n().Banco,TipoDeConta:n().TipoDeConta,Agência:n().Agência,Conta:n().Conta,CpfCnpj:n().CpfCnpj});return C.useEffect(()=>{const f=n();r?(i(`Banco${c}`,f.Banco),i(`TipoDeConta${c}`,f.TipoDeConta),i(`Agência${c}`,f.Agência),i(`Conta${c}`,f.Conta),i(`CpfCnpj${c}`,f.CpfCnpj)):(i(`Banco${c}`,""),i(`TipoDeConta${c}`,""),i(`Agência${c}`,""),i(`Conta${c}`,""),i(`CpfCnpj${c}`,""))},[i,c,r,u]),d(ie,{children:d(VN,{children:d(jN,{children:w(HN,{children:[w(XN,{children:[w(UN,{children:["Dados Bancários - ",e]}),w("div",{children:[d("input",{type:"checkbox",checked:r,onChange:l}),d("p",{children:"Utilizar dados do F1"})]})]}),d(WN,{}),!r&&w(qN,{children:[w(Ty,{children:[d(YN,{children:d(ge,{...t(`Banco${c}`),label:"Banco",optionsData:mt,placeholder:"Clique para ver a lista",onChange:f=>{i(`Banco${c}`,f.value)}})}),d(JN,{children:d(ge,{...t(`TipoDeConta${c}`),label:"Tipo de Conta",placeholder:"",optionsData:mt,onChange:f=>{i(`TipoDeConta${c}`,f.value)}})})]}),w(Ty,{children:[d(GN,{children:d(ne,{...t(`Agência${c}`),label:"Agência",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasSuccess:!1})}),d(KN,{children:d(ne,{...t(`Conta${c}`),label:"Conta",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasSuccess:!1})})]}),d(ZN,{children:d(ne,{colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,...t(`CpfCnpj${c}`),label:"CPF ou CNPJ",placeholder:"--.---.---/---.--",onChange:s})})]})]})})})})}function eV({Avançar:e,Voltar:t,isLoading:n}){const{register:i,setValue:r,formState:{errors:o},getValues:a,watch:s}=st(),l=y=>[`Bancof${y}`,`TipoDeContaf${y}`,`Agênciaf${y}`,`Contaf${y}`,`CpfCnpjf${y}`].every(b=>!!a(b)),c=()=>{if(!(s("Banco")&&s("TipoDeConta")&&s("Agência")&&s("Conta")&&s("CpfCnpj")))return!1;for(let y=2;y<=g;y++)if(!l(y))return!1;return!0},u=y=>{const v=y.replace(/\D/g,"");return v.length>11?v.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,"$1.$2.$3/$4-$5"):v.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/,"$1.$2.$3-$4")},f=y=>{const v=u(y.target.value);r("CpfCnpj",v)},p=s("CpfCnpj"),m=p&&p.length>14?"99.999.999/9999-99":"999.999.999-99",g=Object.keys(a()).filter(y=>y.startsWith("Fornecedor")).length,x=()=>{const y=[];for(let v=2;v<=g;v++)y.push(d(QN,{stepName:`F${v}`},v));return y};return w(ie,{children:[n&&d(Ve,{}),d(_N,{children:w(PN,{children:[w(AN,{children:[d(DN,{children:"Dados Bancários - F1"}),d($N,{}),w(ON,{children:[w(Oy,{children:[d(BN,{children:d(ge,{...i("Banco",{required:!0}),label:"Banco",optionsData:mt,placeholder:"Clique para ver a lista",hasError:!!o.Banco,onChange:y=>{r("Banco",y.value)}})}),d(RN,{children:d(ge,{...i("TipoDeConta",{required:!0}),label:"Tipo de Conta",placeholder:"",optionsData:mt,hasError:!!o["Tipo de Conta"],onChange:y=>{r("TipoDeConta",y.value)}})})]}),w(Oy,{children:[d(zN,{children:d(ne,{...i("Agência",{required:!0}),label:"Agência",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.Agência,hasSuccess:!1})}),d(NN,{children:d(ne,{...i("Conta",{required:!0}),label:"Conta",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.Conta,hasSuccess:!1})})]}),d(TN,{children:d(ne,{colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,...i("CpfCnpj",{required:!0}),label:"CPF ou CNPJ",placeholder:"--.---.---/---.--",hasError:!!o.CpfCnpj,onChange:f},m)})]})]}),x(),w(LN,{children:[d(IN,{onClick:t,children:"Voltar"}),d(MN,{disabled:!c(),onClick:e,children:"Finalizar"})]})]})})]})}const tV=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,nV=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,iV=h.div`
  display: flex;
  justify-content: space-between;

`,rV=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin-top: 30px;
  margin-bottom: 32px;

  width: 900px;
  padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,oV=h.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #7d7d7d;
`,aV=h.div`
  border: 1px solid #a0a0a0;
  margin-top: 15px;
`,sV=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;
`,kh=h.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`,lV=h.section`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > button {
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;

    letter-spacing: 0.5px;

    color: #665b6d;
  }
`,cV=h.button`
  width: 109px;
  height: 35px;

  background: #00a3d7;
  border: 0.5px solid #0086ed;
  border-radius: 5px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;

  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 100px;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`,uV=h.div`

`,dV=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};

  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"8px 1px 1px 8px"} ;

  position: ${({active:e})=>e?"relative":""};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,fV=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};
  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"1px 8px 8px 1px"} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,pV=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,hV=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`,gV={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]};function mV({Avançar:e,BPF:t,BPJ:n}){const{register:i,setValue:r,formState:{errors:o,isValid:a},trigger:s,watch:l}=st(),[c,u]=C.useState(!1),f=!!l("NomeFantasiaEstabelecimento")&&!!l("NascimentoSocio")&&!!l("CPFEstabelecimento")&&!!l("NomeSocioEstabelecimento")&&!!l("EmailEstabelecimento")&&!!l("AreaAtuacaoEstabelecimento")&&!!l("TelefoneEstabelecimento"),p=be(),m=()=>{p("/estabelecimentos")},g=l("CPFEstabelecimento"),x=async y=>{try{u(!0);const v=await Oe.get(`https://ws.hubdodesenvolvedor.com.br/v2/cpf/?cpf=${y}&token=119905575VQLhxBIJgu216485880`),{result:b}=v.data,{nome_da_pf:E,data_nascimento:S}=b;console.log(E,S),r("NomeSocioEstabelecimento",E),r("NascimentoSocio",S)}catch(v){console.error("Error fetching person data by CPF:",v)}finally{u(!1)}};return C.useEffect(()=>{Fe.validateCPF(g)&&x(g.replace(/\D/g,""))},[g]),w(ie,{children:[c&&d(Ve,{}),d(tV,{children:w(nV,{children:[w(rV,{children:[w(iV,{children:[d(oV,{children:"Dados do Estabelecimento"}),w(uV,{children:[d(dV,{active:!1,onClick:n,children:"PJ"}),d(fV,{active:!0,onClick:t,children:"PF"})]})]}),d(aV,{}),w(sV,{children:[w(kh,{children:[d(ye,{...i("CPFEstabelecimento",{validate:Fe.validateCPF}),label:"CPF",mask:"999.999.999-99",placeholder:"---.---.---.--",hasError:!!o.CPFEstabelecimento}),d(ye,{...i("NascimentoSocio",{validate:zt}),label:"Data de Nascimento",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.NascimentoSocio})]}),w(kh,{children:[d(ne,{...i("NomeFantasiaEstabelecimento"),label:"Nome Fantasia",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeFantasiaEstabelecimento}),d(ne,{...i("NomeSocioEstabelecimento"),label:"Nome Completo",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeSocioEstabelecimento})]}),w(kh,{children:[d(ne,{...i("EmailEstabelecimento",{validate:Tn}),label:"E-mail",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.EmailEstabelecimento}),d(ye,{...i("TelefoneEstabelecimento",{validate:bn}),label:"Telefone/Celular",mask:"(99) 99999-9999",placeholder:"(--) ----.----",hasError:!!o.TelefoneEstabelecimento})]}),w(lV,{children:[d(ge,{optionsData:gV,...i("AreaAtuacaoEstabelecimento"),placeholder:"Digite aqui ou clique para ver a lista",label:"Área de Atuação",onChange:y=>{r("AreaAtuacaoEstabelecimento",y.value)},hasError:!!o.AreaAtuacaoEstabelecimento}),d("button",{children:"Pesquise pelo CNAE ou Nome"})]})]})]}),w(hV,{children:[d(pV,{onClick:m,children:"Cancelar"}),d(cV,{disabled:!f,onClick:e,children:"Avançar"})]})]})})]})}const xV=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,vV=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,bV=h.div`
  display: flex;
  justify-content: space-between;

`,yV=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin-top: 30px;
  margin-bottom: 32px;

  width: 900px;
  padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,wV=h.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #7d7d7d;
`,CV=h.div`
  border: 1px solid #a0a0a0;
  margin-top: 15px;
`,EV=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;
`,Dc=h.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`,SV=h.section`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > button {
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;

    letter-spacing: 0.5px;

    color: #665b6d;
  }
`,FV=h.button`
  width: 109px;
  height: 35px;

  background: #00a3d7;
  border: 0.5px solid #0086ed;
  border-radius: 5px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;

  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 100px;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`,kV=h.div`

`,_V=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};

  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"8px 1px 1px 8px"} ;

  position: ${({active:e})=>e?"relative":""};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,PV=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};
  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"1px 8px 8px 1px"} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,AV=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,DV=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`,$V={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]};function OV({Avançar:e,BPF:t,BPJ:n}){const{register:i,setValue:r,formState:{errors:o,isValid:a},trigger:s,watch:l}=st(),[c,u]=C.useState(!1),f=!!l("CNPJEstabelecimento")&&!!l("RazaoSocialEstabelecimento")&&!!l("NomeFantasiaEstabelecimento")&&!!l("DataCriacaoEstabelecimento")&&!!l("NascimentoSocio")&&!!l("CPFEstabelecimento")&&!!l("NomeSocioEstabelecimento")&&!!l("EmailEstabelecimento")&&!!l("AreaAtuacaoEstabelecimento")&&!!l("TelefoneEstabelecimento"),p=be(),m=()=>{p("/estabelecimentos")},g=l("CNPJEstabelecimento"),x=l("CPFEstabelecimento"),y=async b=>{try{u(!0);const E=await Oe.get(`https://ws.hubdodesenvolvedor.com.br/v2/cnpj/?cnpj=${b}&token=YOUR_TOKEN`),{result:S}=E.data,{abertura:F,nome:P,fantasia:k}=S;r("DataCriacaoEstabelecimento",F),r("RazaoSocialEstabelecimento",P),r("NomeFantasiaEstabelecimento",k)}catch(E){console.error("Error fetching company data by CNPJ:",E)}finally{u(!1)}},v=async b=>{try{u(!0);const E=await Oe.get(`https://ws.hubdodesenvolvedor.com.br/v2/cpf/?cpf=${b}&token=119905575VQLhxBIJgu216485880`),{result:S}=E.data,{nome_da_pf:F,data_nascimento:P}=S;console.log(F,P),r("NomeSocioEstabelecimento",F),r("NascimentoSocio",P)}catch(E){console.error("Error fetching person data by CPF:",E)}finally{u(!1)}};return C.useEffect(()=>{Fe.validateCNPJ(g)&&y(g)},[g]),C.useEffect(()=>{Fe.validateCPF(x)&&v(x.replace(/\D/g,""))},[x]),w(ie,{children:[c&&d(Ve,{}),d(xV,{children:w(vV,{children:[w(yV,{children:[w(bV,{children:[d(wV,{children:"Dados do Estabelecimento"}),w(kV,{children:[d(_V,{active:!0,onClick:n,children:"PJ"}),d(PV,{active:!1,onClick:t,children:"PF"})]})]}),d(CV,{}),w(EV,{children:[w(Dc,{children:[d(ye,{...i("CNPJEstabelecimento",{validate:Fe.validateCNPJ}),mask:"99.999.999/9999-99",placeholder:"--.---.---/---.--",hasError:!!o.CNPJEstabelecimento,label:"CNPJ"}),d(ne,{...i("RazaoSocialEstabelecimento"),label:"Razão Social",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.RazaoSocialEstabelecimento})]}),w(Dc,{children:[d(ne,{...i("NomeFantasiaEstabelecimento"),label:"Nome Fantasia",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeFantasiaEstabelecimento}),d(ye,{...i("DataCriacaoEstabelecimento",{validate:zt}),label:"Data de Criação",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.DataCriacaoEstabelecimento})]}),w(Dc,{children:[d(ye,{...i("CPFEstabelecimento",{validate:Fe.validateCPF}),label:"CPF",mask:"999.999.999-99",placeholder:"---.---.---.--",hasError:!!o.CPFEstabelecimento}),d(ne,{...i("NomeSocioEstabelecimento"),label:"Nome Completo do Sócio",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeSocioEstabelecimento})]}),w(Dc,{children:[d(ye,{...i("NascimentoSocio",{validate:zt}),label:"Nascimento Sócio",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.NascimentoSocio}),d(ye,{...i("TelefoneEstabelecimento",{validate:bn}),label:"Telefone/Celular",mask:"(99) 99999-9999",placeholder:"(--) ----.----",hasError:!!o.TelefoneEstabelecimento}),d(ne,{...i("EmailEstabelecimento",{validate:Tn}),label:"E-mail",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.EmailEstabelecimento})]}),w(SV,{children:[d(ge,{optionsData:$V,...i("AreaAtuacaoEstabelecimento"),placeholder:"Digite aqui ou clique para ver a lista",label:"Área de Atuação",onChange:b=>{r("AreaAtuacaoEstabelecimento",b.value)},hasError:!!o.AreaAtuacaoEstabelecimento}),d("button",{children:"Pesquise pelo CNAE ou Nome"})]})]})]}),w(DV,{children:[d(AV,{onClick:m,children:"Cancelar"}),d(FV,{disabled:!f,onClick:e,children:"Avançar"})]})]})})]})}const S4=C.createContext({}),TV=({children:e})=>{const[t,n]=C.useState("CNPJ"),i=C.useCallback(()=>{n("CNPJ")},[]),r=C.useCallback(()=>{n("CPF")},[]);return d(S4.Provider,{value:{documentTypeEC:t,setDocumentTypeEC:n,updateToCNPJEC:i,updateToCPFEC:r},children:e})};function up(){const e=C.useContext(S4);if(!e)throw new Error("");return e}function MV({Avançar:e}){const{documentTypeEC:t,updateToCNPJEC:n,updateToCPFEC:i}=up();return d(ie,{children:t==="CNPJ"?d(OV,{Avançar:e,BPJ:n,BPF:i}):d(mV,{Avançar:e,BPJ:n,BPF:i})})}const IV=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,LV=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,RV=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,BV=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,zV=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,NV=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;


`,_h=h.section`
    display: flex;
justify-content: space-between;
gap: 50px;

`,VV=h.section`
    width: 215px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`,jV=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,HV=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,UV=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`;function WV({Avançar:e,Voltar:t}){const{register:n,formState:{errors:i},setValue:r,watch:o}=st(),[a,s]=C.useState(!1),l=!!o("CEP")&&!!o("Endereco")&&!!o("Numero")&&!!o("Bairro")&&!!o("Cidade")&&!!o("Estado"),c=async u=>{s(!0);try{const f=await Oe.get(`https://viacep.com.br/ws/${u}/json/`);if(f.data){const{logradouro:p,complemento:m,bairro:g,localidade:x,uf:y}=f.data;r("Endereco",p||""),r("Complemento",m||""),r("Bairro",g||""),r("Cidade",x||""),r("Estado",y||"")}}catch(f){console.error("Erro ao buscar endereço:",f)}finally{s(!1)}};return C.useEffect(()=>{s(!1),n("CEP");const u=p=>{const m=p.target.value.replace(/\D/g,"");m.length===8&&c(m)},f=document.getElementById("cep");return f.addEventListener("change",u),()=>{f.removeEventListener("change",u)}},[n,r]),w(ie,{children:[a&&d(Ve,{}),d(IV,{children:w(LV,{children:[w(RV,{children:[d(BV,{children:"Endereço"}),d(zV,{}),w(NV,{children:[w(_h,{children:[d(ye,{id:"cep",...n("CEP"),label:"CEP",mask:"99999-999",placeholder:"--.---.---",hasError:!!i.CEP}),d(ne,{...n("Endereco"),label:"Endereço",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Endereco})]}),w(_h,{children:[d(ne,{...n("Numero"),label:"Número",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Numero}),d(ne,{...n("Complemento"),label:"Complemento",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Complemento})]}),w(_h,{children:[d(ne,{...n("Bairro"),label:"Bairro",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Bairro}),d(ne,{...n("Cidade"),label:"Cidade",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,disabled:!0,hasError:!!i.Cidade})]}),d(VV,{children:d(ne,{...n("Estado"),label:"Estado",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,disabled:!0,hasError:!!i.Estado})})]})]}),w(UV,{children:[d(HV,{onClick:t,children:"Voltar"}),d(jV,{disabled:!l,onClick:e,children:"Avançar"})]})]})})]})}const qV=()=>{const[e,t]=C.useState(1),n=be(),[i,r]=C.useState(!0),{dataUser:o}=lt(),{documentTypeEC:a}=up(),[s,l]=C.useState(!1),c=()=>{n("/estabelecimentos"),r(!1)},u=qt(),{getValues:f}=u,p=k=>{if(k===0)return{banco:"Banco",tipoDeConta:"TipoDeConta",agencia:"Agência",conta:"Conta",cpfCnpj:"CpfCnpj"};{const _=k+1;return{banco:`Bancof${_}`,tipoDeConta:`TipoDeContaf${_}`,agencia:`Agênciaf${_}`,conta:`Contaf${_}`,cpfCnpj:`CpfCnpjf${_}`}}},m=k=>{const _=[];let D=0;for(;k[`Fornecedor${D}`];){const T=p(D);_.push({acquire_id:k[`Fornecedor${D}`],plan_id:k[`PlanoComercial${D}`],bank:{agency:k[T.agencia],account:k[T.conta],type_account:k[T.tipoDeConta],document:k[T.cpfCnpj],document_type:"CPF",code:k[T.banco]}}),D++}return _},g=async()=>{if(e===4&&S())try{l(!0);const k=f(),_={seller:[{trading_name:k.NomeFantasiaEstabelecimento,document:cn(a==="CPF"?k.CPFEstabelecimento:k.CNPJEstabelecimento),type_document:a,type:"EC",email:k.EmailEstabelecimento,status:"ativo",company_name:k.RazaoSocialEstabelecimento,opening_date:a==="CPF"?null:Fd(k.DataCriacaoEstabelecimento),mcc:"5678",phone:cn(k.TelefoneEstabelecimento),owner_name:k.NomeSocioEstabelecimento,owner_birthday:Fd(k.NascimentoSocio),owner_cpf:cn(k.CPFEstabelecimento),address_cep:k.CEP,address_street:k.Endereco,address_number:Number(k.Numero),address_complement:k.Complemento,address_neighborhood:k.Bairro,address_city:k.Cidade,address_state:k.Estado,tpv_goal:1e4}],users:[{document_id:cn(k.CPFEstabelecimento),name:k.NomeSocioEstabelecimento,email:k.EmailEstabelecimento,phone_number:cn(k.TelefoneEstabelecimento),status:"ATIVO",profile_id:2}],acquires:m(k),id_licensed_origin:String(k.licenciado)};l(!0);const D=await Oe.post("https://api-pagueassim.stalopay.com.br/create/sellerec",_,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${o==null?void 0:o.token}`}});D.status===201?(console.log("Requisição bem-sucedida:",D.data),l(!1),t(5)):console.error("Requisição falhou:",D.statusText)}catch(k){k.response&&k.response.status===409&&Pe.error("Já existe vendedor com o mesmo documento e tipo."),l(!1)}e<4&&S()&&t(k=>k+1)},x=()=>{e>1&&t(k=>k-1)},y=()=>{const k=f(),_=Tn(k.EmailEstabelecimento),D=a!=="CPF"?zt(k.DataCriacaoEstabelecimento):!0,T=bn(k.TelefoneEstabelecimento);return(Fe.validateCNPJ(k.CNPJEstabelecimento)||a==="CPF")&&(k.RazaoSocialEstabelecimento||a==="CPF")&&k.NomeFantasiaEstabelecimento&&k.NascimentoSocio&&Fe.validateCPF(k.CPFEstabelecimento)&&k.NomeSocioEstabelecimento&&_&&T&&k.AreaAtuacaoEstabelecimento&&D},v=()=>{const k=f();return k.CEP&&k.Endereco&&k.Numero&&k.Bairro&&k.Cidade&&k.Estado},b=()=>{const k=f(),_=Object.keys(k).filter(D=>D.startsWith("Fornecedor")).length;return!!k.licenciado&&Array.from({length:_}).every((D,T)=>!!k[`Fornecedor${T}`]&&!!k[`PlanoComercial${T}`])},E=()=>{const k=f(),_=k.CpfCnpj?k.CpfCnpj.replace(/\D/g,""):"";let D=!1;return _.length<=11?D=Fe.validateCPF(_):D=Fe.validateCNPJ(_),k.Banco&&k.TipoDeConta&&k.Agência&&k.Conta&&D},S=()=>{switch(e){case 1:return y();case 2:return v();case 3:return b();case 4:return E();default:return!0}},F=[1,2,3,4],P="Estabelecimento Credenciado";return console.log("oii",f()),d(ie,{children:w(tN,{children:[d(nN,{children:d(dN,{stepLabels:["Dados do Estabelecimento","Endereço","Comercial","Dados Bancários"],startProgress:0,endProgress:F.length+1,currentStep:e,setCurrentStep:t,steps:F,canAdvance:S(),canGoBack:e>1})}),w($a,{...u,children:[e===1&&d(MV,{Avançar:g}),e===2&&d(WV,{Avançar:g,Voltar:x}),e===3&&d(kN,{Avançar:g,Voltar:x}),e===4&&d(eV,{isLoading:s,Avançar:g,Voltar:x}),e===5&&d(Mf,{text:P,visible:i,onClose:c})]})]})})},ZV=h.div`
  border-radius: 12px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 100%;
  max-width: 260px;
  padding:  25px 0;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 11px;

  > p{
    color:  #383838;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 14.576px;
font-weight: 500;
line-height: 26.723px;
  }

  > span{
    color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 24.293px;
font-weight: 700;
line-height: 26.723px;
  }
`;function $c({label:e,label2:t}){return w(ZV,{children:[d("p",{children:e})," ",d("span",{children:t})]})}const JV=h.div`
  width: 95%;
  margin: 0 auto;
  display: block;
`,YV=h.div`
  display: flex;
  gap: 20px;
  margin: 45px 0 45px 0;

`,GV=h.div`
  color: #00A3D7;
font-size: 24px;
font-weight: 700;
margin-top: 30px;
`,KV=h.div`
position: relative;
display: flex;
align-items: center;
width: 525px;
height: 44px;
border-radius: 4px;
border: 1px solid #E2E2E2;
background: #FFF;
padding: 10px 16px;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: #9B959F;
padding-right: 15px;

> input {
      width: 100%;
      padding-right: 40px;

      color:  #9B959F;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
}

.search-icon {
  position: absolute;
  right: 20px;
  color: #000;
}
`,XV=h.span`
display: flex;
align-items: center;
justify-content: center;
color: #9B959F;
font-size: 21px;
cursor: pointer;
svg {
width: 21.429px;
height: 21.429px;
}
`,QV=h.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`,ej=h.div`

`,tj=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
`,nj=h.div`
  display: flex;
  flex-direction: row;
`,ij=h.div`
  display: flex;
  margin-top: 35px;
`,rj=h.button`
  width: 118px;
height: 35px;


border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-style: normal;
font-weight: 500;
`,oj=h.button`
color: #676767;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

width: 76px;
height: 35px;

border-radius: 6px 6px 0px 0px;
border: 0.5px solid #F7F7F7;
opacity: 0.5;
background:  #F7F7F7;



display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,aj=h.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(16, 16, 79, 0.65);
  backdrop-filter: blur(0.1rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`,sj=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 919px;
height: 416px;
position: relative;

`,lj=h.div`

    display: flex;
    padding: 27px 0 0 36px;
    display: flex;
    align-items: center;
    gap: 12px;

  > p {
    color: #00A3D7;
font-size: 24px;
font-weight: 700;
  }

  > span {
    color:  #9B959F;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`,cj=h.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`,uj=h.div`

  > div {
    display: flex;
    padding: 27px 56px 27px 56px;
    gap: 56px;
  }

  > section{
    display: flex;
    padding: 27px 56px 27px 56px;
    gap: 116px;
  }
`,dj=h.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  gap: 21px;

  position: absolute;
  right: 0;
  bottom: 40px;
`,fj=h.button`
border-radius: 5px;
border: 0.5px solid #0086ED;
background: #00A3D7;

width: 109px;
height: 35px;

color: #FFF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
`,pj=h.button`
  border-radius: 5px;
border: 0.5px solid #F5F4F4;
background: #FFF;

width: 109px;
height: 35px;


color: #5A6ACF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

`,hj=h.div`
display: flex;
flex-direction: column;

> h2{
  font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: rgb(44, 44, 44);
    margin-bottom: 4px;
}
`,gj=h.div`
display: flex;
align-items: center;
    gap: 20px;

`,mj={options:[{value:"succeeded",label:"SUCESSO"},{value:"failure",label:"FALHA"}]},xj={options:[{value:"debit",label:"Débito"},{value:"credit",label:"Crédito"},{value:"pix",label:"Pix"}]};function m1(e=!1){const[t,n]=C.useState(()=>{const o=localStorage.getItem("@FilterStateSales:state");return o?JSON.parse(o):e});return C.useEffect(()=>{const o=a=>{n(a.detail)};return window.addEventListener("@FilterStateSales:change",o),()=>{window.removeEventListener("@FilterStateSales:change",o)}},[]),C.useEffect(()=>{localStorage.setItem("@FilterStateSales:state",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("@FilterStateSales:change",{detail:t}))},[t]),{state:t,setTrue:()=>{n(!0)},setFalse:()=>{n(!1)}}}function vj({onClose:e,visible:t}){const{register:n,handleSubmit:i,setValue:r,formState:{errors:o}}=qt(),{setTrue:a}=m1(),s=l=>{console.log(l),localStorage.setItem("@bandeira",l.bandeira),localStorage.setItem("@statusPagamento",l.statusEmFornecedor),localStorage.setItem("@formaDePagamento",l.formaDePagamento),localStorage.setItem("@captured_in_start",l.captured_in_start),localStorage.setItem("@captured_in_end",l.captured_in_end),a(),e()};return C.useEffect(()=>{function l(c){c.key==="Escape"&&e()}return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[e]),t?d(aj,{children:w(sj,{children:[w(lj,{children:[d("p",{children:"Adicionar Filtros"}),d("span",{children:"Preencha os campos que deseja filtrar"})]}),d(cj,{}),w("form",{onSubmit:i(s),children:[w(uj,{children:[w("div",{children:[w(hj,{children:[d("h2",{children:"Período"}),w(gj,{children:[d(ne,{...n("captured_in_start"),colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeFantasiaEstabelecimento,label:"",type:"date"}),d("span",{children:"até"}),d(ne,{...n("captured_in_end"),colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeFantasiaEstabelecimento,label:"",type:"date"})]})]}),d(ge,{...n("formaDePagamento"),optionsData:xj,placeholder:"Clique para ver a lista",label:"Forma de Pagamento",onChange:l=>{r("formaDePagamento",l.value)}})]}),w("section",{children:[d(ge,{...n("bandeira"),optionsData:mt,placeholder:"Clique para ver a lista",label:"Bandeira",onChange:l=>{r("bandeira",l.value)}}),d(ge,{...n("statusEmFornecedor"),optionsData:mj,placeholder:"Clique para ver a lista",label:"Status do pagamento",onChange:l=>{r("statusEmFornecedor",l.value)}})]})]}),w(dj,{children:[d(pj,{onClick:e,children:"Cancelar"}),d(fj,{type:"submit",children:"Salvar"})]})]})]})}):null}const bj=h.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`,zi=h.th`
  color: #343A40;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`,Do=h.td`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`,yj=h.button`
  color: #5A6ACF;
  font-size: 8.477px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
`;h.tr`
  height: 35.377px;
  &.highlighted {
    background-color: #F5F4F4;
  }
`;h.div`
  display: flex;
`;const wj=h.div`
 display: flex;
  align-items: center;
  justify-content: center;

  > p {
    color: #343A40;
    font-size: 9.906px;
    line-height: 15.566px;
    padding: 8px;
  }
`,Cj=h.td`
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`,Ej=h.span`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  background-color: #E6E6E6;
  border-radius: 4px;
  padding: 1px 8px;
`,Sj=h.td`
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`,Fj=h.span`
  color: #E6F8FD;
  font-size: 9.906px;
  line-height: 15.566px;
  background-color: ${e=>e.status==="succeeded"?"#48F041":"#EC5252"};
  border-radius: 4px;
  padding: 1px 8px;
`,My=h.div`
    display: inline-block;
    text-align: center;
    line-height: 1;
    vertical-align: middle;
    margin-left: 8px;
`,Oc=h.span`
  display: block;
  color: ${e=>e.isActive?"#08BBE9":"black"};
  opacity: ${e=>e.isActive?1:.5};
  font-size: 9px;
`,El="/assets/pix-d9bdb324.svg",x1="/assets/elo-e03b0e87.svg",v1="/assets/maestro-e87d1d9e.svg",b1="/assets/visa-cbf038d1.svg",y1="/assets/master-17e26544.svg",F4=C.createContext(void 0);function kj({children:e}){const t=localStorage.getItem("selectedTransactionId"),[n,i]=C.useState(t);return C.useEffect(()=>{n?localStorage.setItem("selectedTransactionId",n):localStorage.removeItem("selectedTransactionId")},[n]),d(F4.Provider,{value:{selectedTransactionId:n,setSelectedTransactionId:i},children:e})}function k4(){const e=C.useContext(F4);if(e===void 0)throw new Error("");return e}function _j({rows:e}){const[t,n]=C.useState("captured_in"),[i,r]=C.useState("asc"),o=be(),{setSelectedTransactionId:a}=k4(),s=u=>{u===t?r(i==="asc"?"desc":"asc"):(n(u),r("asc"))},l=[...e].sort((u,f)=>{let p=0;switch(t){case"captured_in":const m=new Date(u.captured_in),g=new Date(f.captured_in);p=m.getTime()-g.getTime();break;case"amount":const x=parseFloat(u.amount.replace(",",".")),y=parseFloat(f.amount.replace(",","."));p=x-y;break}return i==="asc"?p:-p}),c=u=>{a(u),o("/detalhe")};return C.useEffect(()=>{s("captured_in")},[]),w(bj,{children:[d("thead",{children:w("tr",{children:[w(zi,{style:{cursor:"pointer"},onClick:()=>s("captured_in"),children:["Data",w(My,{children:[d(Oc,{isActive:t==="captured_in"&&i==="asc",children:"▲"}),d(Oc,{isActive:t==="captured_in"&&i==="desc",children:"▼"})]})]}),d(zi,{children:"NSU"}),d(zi,{children:"Estabelecimento"}),d(zi,{children:"Forma de Pagamento"}),d(zi,{children:"Bandeira"}),w(zi,{style:{cursor:"pointer"},onClick:()=>s("amount"),children:["Valor",w(My,{children:[d(Oc,{isActive:t==="amount"&&i==="asc",children:"▲"}),d(Oc,{isActive:t==="amount"&&i==="desc",children:"▼"})]})]}),d(zi,{children:"Status"}),d(zi,{})]})}),d("tbody",{children:l.map((u,f)=>{const p=u.amount.replace(".",","),m=new Date(u.captured_in),g=m.toLocaleDateString("pt-BR"),x=m.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});return w("tr",{children:[w(Do,{children:[g," ",d("br",{}),x]}),d(Do,{children:u.nsu_external}),d(Do,{children:u.company_name}),d(Cj,{children:d(Ej,{children:u.payment_type})}),d(Do,{children:w(wj,{children:[d("img",{src:u.brand===null&&u.payment_type==="Pix"?El:u.brand==="Visa"?b1:u.brand==="Elo"?x1:u.brand==="MasterCard"?y1:u.brand==="Maestro"?v1:u.brand==="Pix"?El:void 0,alt:u.brand}),u.brand===null&&u.payment_type==="Pix"?d("p",{children:"Pix"}):d("p",{children:u.brand})]})}),w(Do,{children:["R$ ",p]}),d(Sj,{children:d(Fj,{status:u.status,children:u.status==="succeeded"?"SUCESSO":"FALHA"})}),d(Do,{children:d(yj,{onClick:()=>c(u.id),children:"Visão Geral"})})]},f)})})]})}function la(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e||0)}function w1(e){return(Math.round(e*100)/100).toFixed(2).replace(".",",")}const Pj=h.button`
  border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

width: 118px;
height: 35px;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

align-items: center;
text-align: center;

`,Aj=h.input`
  border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

width: 118px;
height: 35px;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

align-items: center;
text-align: center;

`,Dj=h.button`
  background-color: transparent;
  margin-left: 13px ;


  > img {
    width: 8px;
    height: 8px;
  }

`;function $j(e="Filtragem 01"){const[t,n]=C.useState(()=>{const r=localStorage.getItem("@EditableButtonSales:label");return r?JSON.parse(r):e});return C.useEffect(()=>{localStorage.setItem("@EditableButtonSales:label",JSON.stringify(t))},[t]),{label:t,setLabel:r=>{n(r),localStorage.setItem("@EditableButtonSales:label",JSON.stringify(r))}}}function Oj(){const{label:e,setLabel:t}=$j(),[n,i]=C.useState(!1),{setFalse:r}=m1(),o=C.useRef(null),a=()=>{i(!n)},s=u=>{t(u.target.value)},l=u=>{u.key==="Enter"&&i(!1)},c=u=>{u.stopPropagation(),localStorage.removeItem("@statusPagamento"),localStorage.removeItem("@EditableButtonSales:label"),localStorage.removeItem("@bandeira"),localStorage.removeItem("@formaDePagamento"),localStorage.removeItem("@captured_in_start"),localStorage.removeItem("@captured_in_end"),r()};return C.useEffect(()=>{const u=f=>{n&&o.current&&!o.current.contains(f.target)&&i(!1)};return n?document.addEventListener("mousedown",u):document.removeEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[n]),n?d(Aj,{ref:o,type:"text",onChange:s,onKeyDown:l,value:e,maxLength:12,autoFocus:!0}):d(ie,{children:w(Pj,{onClick:a,children:[e,d(Dj,{onClick:c,children:d("img",{src:Xl,alt:""})})]})})}function Tj(){const[e,t]=C.useState(""),[n,i]=C.useState(10),[r,o]=C.useState(!1),[a,s]=C.useState(!1),[l,c]=C.useState([]),[u,f]=C.useState(0),[p,m]=C.useState("0.00"),[g,x]=C.useState("0.000"),[y,v]=C.useState("0"),[b,E]=C.useState(1),{state:S}=m1(),{dataUser:F}=lt(),P=async q=>{s(!0);let G=`${oo}transactions?perpage=${String(n)}&page=${b}`;const N=localStorage.getItem("@statusPagamento");N&&(G+=`&status=${N}`);const W=localStorage.getItem("@captured_in_start");W&&(G+=`&captured_in_start=${W}`);const X=localStorage.getItem("@captured_in_end");X&&(G+=`&captured_in_end=${X}`),q&&(G+=`&nsu_external=${q}`);const ue=`${oo}transactions`,U={headers:{"Content-Type":"application/json",Authorization:`Bearer ${F==null?void 0:F.token}`}},[Z,Q]=await Promise.all([Oe.get(G,U),Oe.get(ue,U)]),{data:re}=Z,M=Q.data;c(re.transactions),f(re.total_transactions),v(M.total_amountTPV),E(re.current_page),m(M.net_value),x(M.average_taxApplied),s(!1)},k=C.useRef(g1(P,1e3)).current,_=q=>{t(q.target.value),q.target.value.trim()!==""?k(q.target.value.trim()):(k.cancel(),P())},D=()=>{o(!0)},T=()=>{o(!1)},R=async q=>{E(q)},L=()=>{E(q=>q+1)},j=()=>{b>1&&E(q=>q-1)},B=()=>{e.trim()!==""?P(e):P()},z=Math.ceil(u/(n||1));return C.useEffect(()=>{P()},[n,b,S,r]),w(ie,{children:[d(vj,{onClose:T,visible:r}),a?d(Ve,{}):w(ie,{children:[w(JV,{children:[d(GV,{children:"Vendas"}),w(YV,{children:[d($c,{label:"Qtd de Vendas",label2:u.toString()}),d($c,{label:"TPV",label2:`${la(parseFloat(y))}`}),d($c,{label:"Valor Liq.",label2:la(parseFloat(p))}),d($c,{label:"Taxa Média apl.",label2:`${w1(parseFloat(g))}%`})]}),w(KV,{children:[d("input",{type:"text",placeholder:"Pesquise por nome do estabelecimento ou NSU",value:e,onChange:_}),d(XV,{onClick:B,children:d(Eo,{})})]})]}),w(ij,{children:[w(rj,{children:["Todos (",u,")"]}),S?d(Oj,{}):null,w(oj,{onClick:D,children:[d(Ma,{}),"Filtrar"]})]}),d(_j,{rows:l}),w(ej,{children:[d(QV,{}),w(tj,{children:[d(Ra,{totalItens:n}),w(nj,{children:[d(Ba,{itensPorPage:n,setItensPorPage:i}),d(Er,{currentPage:b,onPageClick:R,totalPages:z,onNextPage:L,onPrevPage:j})]})]})]})]})]})}const Mj=h.div`
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 30px 0 44px 0;
`,Ij=h.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 27px;
  gap: 15px;

  > img {
    width: 100%;
    max-width: 54px;
    height: 33px;
  }

  > h3 {
    color: #08bbe9;
    font-size: 36px;
    font-weight: 700;
  }

  > span {
    color: #a0a0a0;
    font-size: 18px;
    font-weight: 700;
  }
`,Lj=h.p`
  border-radius: 4px;
  background: ${e=>e.label==="succeeded"?"#48F041":"red"};
  padding: 0 8px 0 8px;

  color: #e6f8fd;
  font-size: 12px;
  font-weight: 600;
`,Rj=h.div`
  margin-left: 100px;
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`,Bj=h.div`
  display: flex;
  flex-direction: row;
  gap: 77px;

  > div {
    h2 {
      color: #10104f;
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #a0a0a0;
      font-size: 16px;
      font-weight: 500;
    }
  }
`,zj=h.div`
  display: flex;
  flex-direction: row;
  gap: 82px;

  > div {
    h2 {
      color: #10104f;
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #a0a0a0;
      font-size: 16px;
      font-weight: 500;
    }
  }
`,Nj=h.div`
  display: flex;
  flex-direction: row;
  gap: 94px;

  > div {
    h2 {
      color: #10104f;
      font-size: 16px;
      font-weight: 700;
    }

    span {
      color: #a0a0a0;
      font-size: 16px;
      font-weight: 500;
    }
  }
`,Vj=h.div`
  margin-right: 118px;

  h2 {
    color: #10104f;
    font-size: 16px;
    font-weight: 700;
  }

  span {
    color: #a0a0a0;
    font-size: 16px;
    font-weight: 500;
  }
`;function jj({seller_company_name:e,payment_type:t,comment:n,brand:i,card_number:r,number_installments:o,nsu_external:a,status:s,amount:l,acquire:c,id_acquire:u,equipment_sn:f,tax_applied:p,captured_in_date:m,captured_in_time:g}){return w(Mj,{children:[w(Ij,{children:[d("img",{src:i===null&&t==="Pix"?El:i==="Visa"?b1:i==="Elo"?x1:i==="MasterCard"?y1:i==="Maestro"?v1:i==="Pix"?El:void 0,alt:""}),d("h3",{children:l}),w("span",{children:[c,"-",u]}),d(Lj,{label:s,children:"SUCESSO"})]}),w(Rj,{children:[w(Bj,{children:[w("div",{children:[d("h2",{children:"Estabelecimento"}),d("span",{children:e})]}),w("div",{children:[d("h2",{children:"Data"}),d("span",{children:m})]}),w("div",{children:[d("h2",{children:"Horário"}),d("span",{children:g})]}),w("div",{children:[d("h2",{children:"Titular"}),d("span",{children:n})]})]}),w(zj,{children:[w("div",{children:[d("h2",{children:"Forma de pagamento"}),d("span",{children:t})]}),w("div",{children:[d("h2",{children:"Bandeira"}),d("span",{children:i})]}),w("div",{children:[d("h2",{children:"Cartão"}),d("span",{children:r})]}),w("div",{children:[d("h2",{children:"Parcelas"}),w("span",{children:[o,"x"]})]})]}),w(Nj,{children:[w(Vj,{children:[d("h2",{children:"Taxas"}),w("span",{children:[p,"%"]})]}),w("div",{children:[d("h2",{children:"SN"}),d("span",{children:f})]}),w("div",{children:[d("h2",{children:"NSU"}),d("span",{children:a})]})]})]})]})}const Hj=h.div`
  width: 100%;
  max-width: 170px;
height: 75px;
border-radius: 8px;
background:  #10104F;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> section{
  > p {
  color:  #FFF;
font-size: 16px;
font-weight: 700;
}

> span {
  color:  #08BBE9;
font-size: 16px;
font-weight: 500;
}
}
`;function Uj({net_amount:e}){return d(Hj,{children:w("section",{children:[d("p",{children:"Valor Líquido"}),d("span",{children:e})]})})}const Wj=h.div`
  width: 100%;
  max-width: 170px;
height: 75px;
border-radius: 8px;
background:  #FDFDFD;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> section{
  > p {
    color:  #ADADAD;
font-size: 16px;
font-weight: 700;
}

> span {
  color:  #08BBE9;
font-size: 16px;
font-weight: 500;
}
}
`;function qj({spread:e}){return d(Wj,{children:w("section",{children:[d("p",{children:"Spread da Rede"}),d("span",{children:e})]})})}const Zj=h.div`
  display: flex;
  flex-direction: column;

`,Jj=h.h1`
  background: #10104F;
  width: 595px;
  height: 35px;
  color: #FDFDFD;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`,Yj=h.table`
  width: 595px;
  border-collapse: collapse;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  th, td {
    text-align: center;
    padding: 8px;
  }
`,Nr=h.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  padding: 8px;


  color:  #6C757D;
font-size: 9.906px;
line-height: 15.566px;
`,ts=h(Nr).attrs({as:"th"})`
  color:  #343A40;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;
text-align: center;
`,ns=h(Nr).attrs({as:"th"})`
  color:  #FDFDFD;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;
text-align: center;
`,Gj=h.tr`
  background: #10104F;
`,Kj=h.span`
  background: ${e=>e.label==="ADQ"?"#E6E6E6":"#10104F"};
  border-radius: 4px;
  color:${e=>e.label==="ADQ"?"#4B4B4B":"#FDFDFD"}  ;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 2px 8px 2px 8px;
`,Ph=[{label:"Padaria Trevo 4 Folhas",papel:"ADQ",taxa:"1,75",markup:"80",valor:"3,50"},{label:"Padaria Trevo 4 Folhas",papel:"ADM",taxa:"1,75",markup:"80",valor:"3,50"},{label:"Padaria Trevo 4 Folhas",papel:"WTL",taxa:"1,75",markup:"80",valor:"3,50"},{label:"Padaria Trevo 4 Folhas",papel:"LA01",taxa:"1,75",markup:"80",valor:"3,50"}];function Xj(){const e=Ph.reduce((n,i)=>n+parseFloat(i.taxa.replace(",",".")),0),t=Ph.reduce((n,i)=>n+parseFloat(i.valor.replace(",",".")),0);return w(Zj,{children:[d(Jj,{children:"Comissões Geradas"}),w(Yj,{children:[d("thead",{children:w("tr",{children:[d(ts,{}),d(ts,{children:"Papel"}),d(ts,{children:"Taxa"}),d(ts,{children:"Markup"}),d(ts,{children:"Valor"})]})}),w("tbody",{children:[Ph.map((n,i)=>w("tr",{children:[d(Nr,{children:n.label}),w(Nr,{children:[" ",d(Kj,{label:n.papel,children:n.papel})]}),w(Nr,{children:[n.taxa,"%"]}),w(Nr,{children:[n.markup,"%"]}),w(Nr,{children:["R$ ",n.valor]})]},i)),w(Gj,{children:[d(ns,{children:"Total"}),d(ns,{}),w(ns,{children:[e.toFixed(2).replace(".",","),"%"]}),d(ns,{}),w(ns,{children:["R$ ",t.toFixed(2).replace(".",",")]})]})]})]})]})}const Qj=h.div`
  display: flex;
  flex-direction: column;

`,eH=h.h1`
  background: #10104F;
  width: 430px;
  height: 35px;
  color: #FDFDFD;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`,tH=h.table`
  width: 430px;
  border-collapse: collapse;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  th, td {
    text-align: center;
    padding: 8px;
  }
`,Eu=h.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  padding: 8px;


  color:  #6C757D;
font-size: 9.906px;
line-height: 15.566px;
`,Ah=h(Eu).attrs({as:"th"})`
  color:  #343A40;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;
text-align: center;
`,nH=[{data:"01/01/2023",valor:"0,45",status:"Programada para pagamneto"}];function iH(){return w(Qj,{children:[d(eH,{children:"Histórico de conciliações"}),w(tH,{children:[d("thead",{children:w("tr",{children:[d(Ah,{children:"Data"}),d(Ah,{children:"Valor"}),d(Ah,{children:"Status"})]})}),d("tbody",{children:nH.map((e,t)=>w("tr",{children:[d(Eu,{children:e.data}),d(Eu,{children:e.valor}),d(Eu,{children:e.status})]},t))})]})]})}const rH=h.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
`,oH=h.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 37px;
`,aH=h.section`
  display: flex;
  gap: 21px;
`,sH=h.section`
  display: flex;
  gap: 23px;
`,lH=h.button`
  color: var(--foundation-brand-01-normal, #10104F);
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
background-color: transparent;

display: flex;
margin: 40px 0 0 100px;
`;async function cH(e,t){try{const n={"Content-Type":"application/json",Authorization:`Bearer ${t==null?void 0:t.token}`},i=await fetch(`https://api-pagueassim.stalopay.com.br/transactions/${e}`,{headers:n});if(!i.ok)throw new Error("Erro ao buscar os detalhes da transação");return await i.json()}catch(n){return console.error("Erro:",n),null}}function uH(){const{selectedTransactionId:e}=k4(),[t,n]=C.useState(!1),{dataUser:i}=lt(),[r,o]=C.useState(null);function a(u){const f={year:"numeric",month:"2-digit",day:"2-digit"};return new Intl.DateTimeFormat("pt-BR",f).format(new Date(u))}function s(u){const f=new Date(u);return`${String(f.getHours()).padStart(2,"0")}:${String(f.getMinutes()).padStart(2,"0")}`}C.useEffect(()=>{async function u(){if(e)try{n(!0);const f=await cH(e,i);f&&o(f.transaction)}catch{Pe.error("Erro ao buscar os detalhes da transação")}finally{n(!1)}}u()},[e]);const l=be();return d(ie,{children:t?d(Ve,{}):w(ie,{children:[w(lH,{onClick:()=>{l("/vendas")},children:[d(Cr,{size:18}),"Voltar"]}),d(rH,{children:w(oH,{children:[d(jj,{captured_in_date:r?a(r.captured_in):void 0,captured_in_time:r?s(r.captured_in):void 0,tax_applied:r?w1(parseFloat(r.tax_applied)):void 0,equipment_sn:r==null?void 0:r.equipment_sn,acquire:r==null?void 0:r.acquire,id_acquire:r==null?void 0:r.id_acquire,amount:la(r!=null&&r.amount?parseFloat(r==null?void 0:r.amount):void 0),status:r==null?void 0:r.status,nsu_external:r==null?void 0:r.nsu_external,number_installments:r==null?void 0:r.number_installments,card_number:r==null?void 0:r.card_number,brand:r==null?void 0:r.brand,comment:r==null?void 0:r.comment,payment_type:r==null?void 0:r.payment_type,seller_company_name:r==null?void 0:r.seller_company_name}),w(aH,{children:[d(Uj,{net_amount:la(r!=null&&r.spread?parseFloat(r==null?void 0:r.net_amount):void 0)}),d(qj,{spread:la(r!=null&&r.spread?parseFloat(r.spread):void 0)})]}),w(sH,{children:[d(Xj,{}),d(iH,{})]})]})})]})})}const dH=h.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`,Ni=h.th`
  color: #343A40;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  vertical-align: middle;
`,Vi=h.td`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  vertical-align: middle;
`,fH=h.button`
  color: #5A6ACF;
  font-size: 8.477px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; 
`;h.tr`
  height: 35.377px;
  &.highlighted {
    background-color: #F5F4F4;
  }
`;const pH=h.div`
  display: inline-block;
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  margin-left: 8px;
`,Iy=h.span`
  display: block;
  color: ${e=>e.isActive?"black":"#08BBE9"};
  opacity: ${e=>e.isActive?.5:1};
  font-size: 8px;
`;function C1(e=0){const[t,n]=C.useState(()=>{const r=localStorage.getItem("@DetailLicensed:number");return r?JSON.parse(r):e});return C.useEffect(()=>{const r=o=>{n(o.detail)};return window.addEventListener("@DetailLicensed:change",r),()=>{window.removeEventListener("@DetailLicensed:change",r)}},[]),C.useEffect(()=>{localStorage.setItem("@DetailLicensed:number",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("@DetailLicensed:change",{detail:t}))},[t]),{licensedNumber:t,setLicensedNumber:r=>{n(r)}}}function hH({rows:e}){const[t,n]=C.useState("id"),[i,r]=C.useState("asc"),{setLicensedNumber:o}=C1(),a=be(),s=m=>{m===t?r(i==="asc"?"desc":"asc"):(n(m),r("asc"))},l=[...e].sort((m,g)=>{let x=0;switch(t){case"id":x=m.id-g.id;break;case"trading_name":x=m.trading_name.localeCompare(g.trading_name);break;case"tpv":x=m.tpv-g.tpv;break;case"type":const y=m.type+m.network_index,v=g.type+g.network_index;x=y.localeCompare(v);break;case"ec_count":case"commission":const b=parseFloat(m[t].toString().replace(",",".")),E=parseFloat(g[t].toString().replace(",","."));x=b-E;break;default:return 0}return i==="asc"?-x:x});function c({direction:m}){return w(pH,{children:[d(Iy,{isActive:m!=="desc",children:"▲"}),d(Iy,{isActive:m!=="asc",children:"▼"})]})}const u=m=>t===m?i:void 0,f=async m=>{o(Number(m)),await new Promise(g=>setTimeout(g,20)),a("/licenseddetail")};function p(m){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(m)}return C.useEffect(()=>{s("id")},[]),w(dH,{children:[d("thead",{children:w("tr",{children:[w(Ni,{style:{cursor:"pointer"},onClick:()=>s("id"),children:["Id",d(c,{direction:u("id")})]}),d(Ni,{children:"CPF/CNPJ"}),w(Ni,{style:{cursor:"pointer"},onClick:()=>s("trading_name"),children:["Nome",d(c,{direction:u("trading_name")})]}),w(Ni,{style:{cursor:"pointer"},onClick:()=>s("type"),children:["Nível",d(c,{direction:u("type")})]}),w(Ni,{style:{cursor:"pointer"},onClick:()=>s("ec_count"),children:["Estabelecimentos",d(c,{direction:u("ec_count")})]}),w(Ni,{style:{cursor:"pointer"},onClick:()=>s("commission"),children:["Comissão",d(c,{direction:u("commission")})]}),w(Ni,{style:{cursor:"pointer"},onClick:()=>s("tpv"),children:["TPV",d(c,{direction:u("tpv")})]}),d(Ni,{children:"Ver mais"})]})}),d("tbody",{children:l.map((m,g)=>w("tr",{children:[d(Vi,{children:m.id}),d(Vi,{children:m.cnpj_cpf}),d(Vi,{children:m.trading_name}),w(Vi,{children:[m.type," ",m.network_index]}),d(Vi,{children:m.ec_count}),d(Vi,{children:p(parseFloat(m.commission.replace(",",".")))}),d(Vi,{children:p(m.tpv)}),d(Vi,{children:d(fH,{onClick:()=>f(m.id.toString()),children:"Dados"})})]},g))})]})}const gH=h.div`
  display: flex;
  margin-top: 35px;
`,mH=h.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`,xH=h.div`
  margin-top: 45px;
`,vH=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
`,bH=h.div`
  display: flex;
  flex-direction: row;
`,yH=h.button`
  width: 118px;
height: 35px;


border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
font-size: 9.906px;
font-style: normal;
font-weight: 500;
`,wH=h.button`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

width: 76px;
height: 35px;

border-radius: 6px 6px 0px 0px;
border: 0.5px solid #F7F7F7;
opacity: 0.5;
background:  #F7F7F7;



display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;h.button`
  color: #5A6ACF;
  font-size: 8.477px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
`;const CH=h.div`
    margin-left: 44px;
    margin-top: 30px;
    margin-right: 52px;
  `,EH=h.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    justify-content: space-between;
  `,SH=h.button`
    display: flex;
    width: 213px;
    height: 35px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0.5px solid #0086ED;
    background: #00A3D7;
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.5px;
  `,FH=h.h2`
    color: #00A3D7;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  `,kH=h.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 525px;
    height: 44px;
    border-radius: 4px;
    border: 1px solid #E2E2E2;
    background: #FFF;
    padding: 10px 16px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #9B959F;
    padding-right: 15px;

    > input {
          width: 100%;
          padding-right: 40px;

          color:  #9B959F;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
    }

    .search-icon {
      position: absolute;
      right: 20px;
      color: #000;
    }
  `,_H=h.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9B959F;
    font-size: 21px;
    cursor: pointer;
    svg {
    width: 21.429px;
  height: 21.429px;
  }
  `;function PH({onSearch:e,searchValue:t,setSearchValue:n}){const i=be(),[r,o]=C.useState(!1),a=c=>{c.target.value.trim(),n(c.target.value),o(!0)},s=()=>{o(!1)},l=()=>{i("/lacadastro")};return C.useEffect(()=>{let c=null;return r&&(c=g1(u=>{e(u)},1e3),c(t.trim())),()=>{c&&c.cancel()}},[e,t,r]),w(CH,{children:[d(FH,{children:"Licenciados"}),w(EH,{children:[w(kH,{children:[d("input",{type:"text",placeholder:"Pesquise por nome do licenciado, CPF ou CNPJ",value:t,onChange:a,onBlur:s}),d(_H,{className:"search-icon",onClick:()=>e(t.trim()),children:d(Eo,{})})]}),d(SH,{onClick:l,children:"Adicionar Licenciado"})]})]})}function E1(e=!1){const[t,n]=C.useState(()=>{const o=localStorage.getItem("@FilterStateLicensed:state");return o?JSON.parse(o):e});return C.useEffect(()=>{const o=a=>{n(a.detail)};return window.addEventListener("@FilterStateLicensed:change",o),()=>{window.removeEventListener("@FilterStateLicensed:change",o)}},[]),C.useEffect(()=>{localStorage.setItem("@FilterStateLicensed:state",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("@FilterStateLicensed:change",{detail:t}))},[t]),{state:t,setTrue:()=>{n(!0)},setFalse:()=>{n(!1)}}}const AH=h.button`
  border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

width: 118px;
height: 35px;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

align-items: center;
text-align: center;

`,DH=h.input`
  border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

width: 118px;
height: 35px;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

align-items: center;
text-align: center;

`,$H=h.button`
  background-color: transparent;
  margin-left: 13px ;


  > img {
    width: 8px;
    height: 8px;
  }

`;function OH(e="Filtragem 01"){const[t,n]=C.useState(()=>{const r=localStorage.getItem("@EditableButtonLicensed:label");return r?JSON.parse(r):e});return C.useEffect(()=>{localStorage.setItem("@EditableButtonLicensed:label",JSON.stringify(t))},[t]),{label:t,setLabel:r=>{n(r),localStorage.setItem("@EditableButtonLicensed:label",JSON.stringify(r))}}}function TH(){const{label:e,setLabel:t}=OH(),[n,i]=C.useState(!1),{setFalse:r}=E1(),o=C.useRef(null),a=()=>{i(!n)},s=u=>{t(u.target.value)},l=u=>{u.key==="Enter"&&i(!1)},c=u=>{u.stopPropagation(),localStorage.removeItem("@licenciadoAutorizadoLicensed"),r()};return C.useEffect(()=>{const u=f=>{n&&o.current&&!o.current.contains(f.target)&&i(!1)};return n?document.addEventListener("mousedown",u):document.removeEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[n]),n?d(DH,{ref:o,type:"text",onChange:s,onKeyDown:l,value:e,maxLength:12,autoFocus:!0}):d(ie,{children:w(AH,{onClick:a,children:[e,d($H,{onClick:c,children:d("img",{src:Xl,alt:""})})]})})}const MH=h.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(16, 16, 79, 0.65);
  backdrop-filter: blur(0.1rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`,IH=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 919px;
height: 416px;
position: relative;

`,LH=h.div`

    display: flex;
    padding: 27px 0 0 36px;
    display: flex;
    align-items: center;
    gap: 12px;

  > p {
    color: #00A3D7;
font-size: 24px;
font-weight: 700;
  }

  > span {
    color:  #9B959F;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`,RH=h.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`,BH=h.div`

    width: 100%;
    max-width: 500px;
    display: flex;
    padding: 22px 40px;
  
`,zH=h.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  gap: 21px;
  position: absolute;
  right: 0;
  bottom: 40px;
`,NH=h.button`
border-radius: 5px;
border: 0.5px solid #0086ED;
background: #00A3D7;

width: 109px;
height: 35px;

color: #FFF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
`,VH=h.button`
  border-radius: 5px;
border: 0.5px solid #F5F4F4;
background: #FFF;

width: 109px;
height: 35px;


color: #5A6ACF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

`;function jH({onClose:e,visible:t}){const{register:n,handleSubmit:i,setValue:r,formState:{errors:o}}=qt(),{setTrue:a}=E1(),{dataUser:s}=lt(),[l,c]=C.useState([]),u=f=>{localStorage.setItem("@licenciadoAutorizadoLicensed",f.licenciadoAutorizado||""),a(),e()};return C.useEffect(()=>{function f(p){p.key==="Escape"&&e()}return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f)}},[e]),C.useEffect(()=>{(async()=>{try{const m=(await Oe.get("https://api-pagueassim.stalopay.com.br/seller/indexla",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s==null?void 0:s.token}`}})).data;if(m&&m.sellers){console.log(m.sellers.trading_name);const g=m.sellers.map((x,y)=>({value:x.id,label:`${x.trading_name}-${x.type}-${x.cnpj_cpf}`}));c(g)}}catch(p){console.error("Houve um erro ao buscar os dados:",p)}})()},[]),t?d(MH,{children:w(IH,{children:[w(LH,{children:[d("p",{children:"Adicionar Filtros"}),d("span",{children:"Preencha os campos que deseja filtrar"})]}),d(RH,{}),w("form",{onSubmit:i(u),children:[d(BH,{children:d(ge,{...n("licenciadoAutorizado"),optionsData:{options:l},placeholder:"Digite aqui ou clique para ver a lista",label:"Licenciado Autorizado",onChange:f=>{r("licenciadoAutorizado",f.value)}})}),w(zH,{children:[d(VH,{onClick:e,children:"Cancelar"}),d(NH,{type:"submit",children:"Salvar"})]})]})]})}):null}function HH(){const[e,t]=C.useState(10),[n,i]=C.useState(!1),[r,o]=C.useState(""),{state:a}=E1(),{dataUser:s}=lt(),[l,c]=C.useState(0),[u,f]=C.useState(1),[p,m]=C.useState([]),[g,x]=C.useState(!1),y=async(k=u)=>{x(!0);let _=`https://api-pagueassim.stalopay.com.br/seller/indexla?perpage=${String(e)}&page=${k}`;r&&(_+=`&trading_name=${r}`);const D=await Oe.get(_,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s==null?void 0:s.token}`}});m(D.data.sellers),c(D.data.total_sellers),f(D.data.current_page),x(!1)},v=()=>{f(k=>k+1)},b=()=>{u>1&&f(k=>k-1)},E=()=>{i(!0)},S=()=>{i(!1)},F=Math.ceil(l/(e||1));return C.useEffect(()=>{},[s,e,u]),C.useEffect(()=>{r.trim()===""&&y()},[r]),w(ie,{children:[d(jH,{onClose:S,visible:n}),g?d(Ve,{}):w(ie,{children:[d(PH,{onSearch:k=>{o(k),k.trim()===""&&o(""),y()},searchValue:r,setSearchValue:o}),w(gH,{children:[w(yH,{children:["Todos (",l,")"]}),a?d(TH,{}):"",w(wH,{onClick:E,children:[" ",d(Ma,{}),"Filtrar"]})]}),d(hH,{rows:p}),w(xH,{children:[d(mH,{}),w(vH,{children:[d(Ra,{totalItens:e}),w(bH,{children:[d(Ba,{itensPorPage:e,setItensPorPage:t}),d(Er,{currentPage:u,onPageClick:y,totalPages:F,onNextPage:v,onPrevPage:b})]})]})]})]})]})}const UH=h.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  border-radius: 8px;
  background: var(--Sys---Neutral-04, #FFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  thead {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 1px;
      background-color: #E9ECEF;
      box-shadow: 0px 1px 0px 0px #E9ECEF;
    }
  }
`,$o=h.th`
  color: var(--light-dark, #343A40);
  font-size: 13.252px;
  font-style: normal;
  font-weight: 500;
  line-height: 20.824px;
`,Oo=h.td`
  color: var(--light-secondary, #6C757D);
  font-size: 13.252px;
  line-height: 20.824px;
  padding: 8px;
  text-align: center;
  vertical-align: middle;



`,WH=h.img`

  display: block;
  margin-left: auto;
  margin-right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`,_4=h.button`
  color: #5A6ACF;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  background: transparent;
  letter-spacing: 0.353px;
`,qH=h(_4)`
  color: #EB001B;
`,ZH=h.tr`
  height: 35.377px;

  &:hover {
    background-color: #F5F4F4;
  }
`,JH=h.span`
  border-radius: 4px;
background: #00A3D7;
padding: 1px 8px;

color: var(--foundation-brand-02-light, #E6F8FD);
text-align: center;
font-size: 12px;
font-weight: 600;



`;function YH({data:e,handlePasswordRetrieve:t,handleRemove:n}){return w(UH,{children:[d("thead",{children:w("tr",{children:[d($o,{}),d($o,{children:"Name"}),d($o,{children:"Função"}),d($o,{children:"E-mail"}),d($o,{}),d($o,{})]})}),d("tbody",{children:e.map((i,r)=>w(ZH,{children:[d(Oo,{children:d(WH,{src:bl,alt:"Profile"})}),w(Oo,{children:[i.name,r===0&&w(ie,{children:[" ",d(JH,{children:"você"})]})]}),d(Oo,{children:i.profile_id}),d(Oo,{children:i.email}),d(Oo,{children:d(_4,{onClick:()=>t(i.email),children:"Recuperar senha"})}),d(Oo,{children:r!==0&&d(qH,{onClick:()=>n(i.id),children:"Remove"})})]},r))})]})}const GH=h.div`
    margin-left: 44px;
    margin-top: 45px;
    margin-right: 52px;
`,KH=h.div`
    margin-left: 44px;
    margin-top: 30px;
    margin-right: 52px;

    display: flex;
    justify-content: space-between;
  `,XH=h.button`
    display: flex;
    width: 213px;
    height: 35px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0.5px solid #0086ED;
    background: #00A3D7;
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.5px;
  `,QH=h.h2`
    color: #00A3D7;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  `;function eU(){const e=be();return w(KH,{children:[d(QH,{children:"Lista de Usuários"}),d(XH,{onClick:()=>{e("/userCreation")},children:"Adicionar Usuário"})]})}function tU(){const{dataUser:e}=lt(),[t,n]=C.useState(null),[i,r]=C.useState([]),[o,a]=C.useState(!1),s=async()=>{try{a(!0);const f=await Oe.get(`${oo}getuserandrelatedusers`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e==null?void 0:e.token}`}});console.log(f),f.data.success&&(n(f.data.user_online),r(f.data.related_users))}catch(f){console.error("Error fetching data:",f)}finally{a(!1)}},l=async f=>{try{a(!0);const p=await Oe.post("https://api-pagueassim.stalopay.com.br/forgot-password",{email:f},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e==null?void 0:e.token}`}});Pe.success("verifique a caixa de e-mail")}catch{Pe.error("algo deu errado")}finally{a(!1)}},c=async f=>{try{a(!0);const p=await Oe.delete(`${oo}user/delete/${f}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e==null?void 0:e.token}`}});Pe.success("usuário removido")}catch{Pe.error("algo deu errado")}finally{a(!1),s()}};C.useEffect(()=>{s()},[]);const u=t?[t,...i]:[...i];return d(ie,{children:o?d(Ve,{}):w(ie,{children:[d(eU,{}),d(GH,{children:d(YH,{data:u,handlePasswordRetrieve:l,handleRemove:c})})]})})}const nU=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,iU=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,rU=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,oU=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,aU=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,sU=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;


`,Ly=h.section`
    display: flex;
justify-content: space-between;
gap: 50px;

`;h.section`
    width: 215px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`;const lU=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,cU=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,uU=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`,dU=h.input.attrs({type:"file"})`
  display: none;
`,fU=h.label`
  display: flex;
  align-items: center;
  gap: 18px;

  padding: 12px 23px;
  border-radius: 4px;
  background: #E6F8FD;
  cursor: pointer;

  color: var(--foundation-brand-02-normal-hover, #07A8D2);

font-size: 14px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.5px;

  &:hover {
    background: #d1eaf3;
  }
`,pU=h(i1)`
  color: #07A8D2;
  width: 30px;
  height: 30px;

`,hU=h.div`
  display: flex;
  align-items: center;
  gap: 50px;

`,gU={options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]},mU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACaCAYAAADB7CjYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAy/SURBVHgB7Z1fcFTVGcDP/bN3/2SzuzE1gGGTIBE02VL/BGMyjaIdhzRjrYOGtDq0/mmefIBpePLNvnVGFB86PDhSO461sNJxfLAwUGWamURrFJwmFBQrJGhLYkh2N5vdvX97v8DGEAKE3b177z3n+71AJtnMnr2/fN/5vnvuORxZBt1N3ZJUKfl0vy4l0gnR5/NxBEGWIJvNGhInKRVchSKn5Gz8RFy+3muuKVN3W7df5dRKTuAEgiAFYGiGJhpiKj4Yz1ztZ5aUsJt0C+ImsSqn5TwEQUrAnIwD4mScxLXF37siwj3yyCMBOSzfhNEPKSUcz/FKo+Jvq2/Tjp85rl72vYVfPL3paV9SS1YRBLEQQRWmF6ZnPv8fSMHj6fEIQRCLyflzIfAt//W8hGq7Wo1VL1IOREXkoebIfz1nI1TBhmgECIKUCbNOEWK1Me3EuRPqXCSENgxBkDKT946DRrRWrVUTBLEBYVKYFGcqZ3x+4ifI0ozGWkNn18diuWBlsyb5m3RRiBocHzUICZt9h9D8Dxp60pxQJzhDHxNkdYRXs+e8idRIx7uvDxDkqsCdOO6xex+r5r28RJB5QLwv7mnrUQLBzTrHxy6TrQB4XR3wzqT215z9cjD2j/fHCDKPPCsrXNfGrpVYFV+k//Hn2mdqVv1W58V2YhGinNsXmBiPY4S8iOpRdW5Lx5ZVhHHKId9izLQ9HJiaeHnT23sOEsZhWsLh+7uiY813v1JO+RYDkbH21Ocvs5ymhTvq72CyPXNk247eyeiaPQYvNBIb0QUxllhR23s21kLWHh8YJAzCnIQQ/T7t6tmr+gK/IhznJQ5B80jtX7X8uC0XCA6aBUySMARTEg519TR/u+5Hb5nRL0YcCLR+kjW3dOb8FYdYEpEnjAACnm9Yf8DguChxMPD+zNR8eKjryWbCCExIePSXz3eeX3PH4WL7fWXDfJ/n16w73P/k85sJA1AvIUTAdFX1buJCkpHqV1mIiFRLCEXIeMPte10TARcDEbGh8QCMg1AMtRLCrbfR2MZ3nD4HvC6miDAOGA+hFGolPNn6YJ/rBbwEjONk6wN9hFKolPCDbdu3Kj5fL6EIxRfoHdzybBuhEColzFZGqIwaUyuju2lMy9RJePiZndSk4cXAuE5t7KAqwgNUSQhVpOwPUHeRFgLjoy0aUiXht7dt+I1r2zHLxRwfbdGQKglVr7eTMABt0ZAaCaEipnUueAVmNITHDwglUCNhLlC5lTAEPP9CKIEKCaEg0UX7VkfbAawGpyUlUyHheP1tVDZxr8fpu+6jYg5MhYSK189UFMxj3kWh4o+PCgk1SWoiDAKPBBAKoEJCAx5QZxDoBtAwL3S9hCwtg1+K8bq1rm9LuV7CdKRqNWGYTDCMEtqNJvBhwjCKV8J0bDea6GXjLslV0EQPRkIEKRaUELEdlBCxHddLKKg5pjedFFTF9eN3v4SaniAM48nJrt+zxvUSVkxPnSMM459JYCS0m5rRr5hOxy3v/3mEuBzXS1g3/HGS0zUmo6E5btcLCFBRHQuKwuQm5Oa4UUKn4MmlmZTQm8lQMW4qJGw89k8md8D/wdiXVOxxTYWEMC/kVZWpaMhrCjUH81Bzx8QzO3OIMIQ/NbOPUAI1Eq47NrgPzpcjDMAZxtimt17dTyiBGgkhJUuZ2dcIA4jZWaqiPlULGNZ/0v8a9dHQHN8tp0eo+mOjSkIWoqHPHB9tR5BRt5QLoiGcOUwoBOaCP/njS7sIZVAnIUTDqv+d20EoJJCYpk5AgMpFrW1/3TvoyWapSsuSOR6aKuKFULuy+vaPP9xFS1qGNLzeHA+hFGolhLRcNzz0hNurZRCwbviTJ2A8hFKofsYEqsgVZ0497loRzfddc+bks7QfyE39g04t7+8bCV2Y3E5cSOi7iR3w/gnlMPG0Xcdf/nBoxdf/ftg1EdF8n/B+O/bvYWJ1EDOPfEJEqR8eetjpxQrMAWEKwUIEzMPUye9wmjqcqp6qXtFs8Lzjts/gFWWw7sSnz9555N3ThCG4LR1bVhEG+fszO/uygaAzjh8z068/ndz10J92M7EAYzFMRcKF3Hp8YFD2B/anI9VhXRRt2+PwYvT77KnW9978kDAKs5FwIf2/eH5zKnLTTkMQyiYjyBf57r8vwd0dwjgo4QLgKNfkTTU9qtdn2ZkoKN+VoIRLAOeifBdd25apCPXoHk9xO+Sb8z1e1Ua8mfTBxmOD+2i+81EoKOEygAhpChlTJd9qTRBihsBHDY4LXXaYoymb2V5Jcpo+xuvamCeXHTGLjeHaL0ZGULxrgxIitoP7EyK2gxIitoMSIraDEiK2gxIitoMSIraDEiK2gxIitoMSIraDEiK2gxIitoMSIraDEiK2gxIitiMSZJ5j9z8aTdRGm1XJE9VF32qD50K6KEQN7uKTefl/F5N/jBT+5XQtyavGGK9mz4myMuZLT43d9577T12yEmbXE4JwU/Vr2lTJ36x6pTaDkLrLFqmWGF5XBwRZHRHlzEggMTGCYn4PMxKOxlpD//lhS3suGNqseTztV4tq5QIechcUecA7kzx067+GBlhefU21hCDe6bvu68wFK7fqHB+zMtIVi6DmDkqzswcbj310kDUhqZSw//Hn2jORmzcrXqnHyeItiaEnRUX5W2BiPN7x7utMHBBElYQfbNu+dS7q8WI7oQBI2b7U9K6H3qRzh9Y8rpcQUu6pjR29sj/Q67qot0xol9HVEh7ZtqM3Vxnqo1W+xdAqoyslhDlfasXqVwyOc9zOWuWANhldtSES7IzwaVfP3mxllRn9uDBhFXPsqtff+fWdbauzwdAJ2PKOuBjXSAipdzK6Zo/BC40EmUMXxFhiRW3v2VgLWXt8wLV72zg+HUP0G2u++xVaKl6ryO/y78ZN1h0dCTH63QBmik7UrOoZbbord+vnH31GXIQjJYS2y8c/2/aCXBGEuZ+XIMvD/Kw0yffgmQ33hjyK+ll4/JsccQGOkxDS75cbH3jLvL/7U4IUhC567pmob/w57M/thqLFUesJh7p6mkdjG98xWy8xghQFtK/gsxzqetK2rZCXi2Mk/OCp7VvPN6w/wGrvzwrgszzf0HjgqPnZEgfjiHQMBUg2XPV7nP9ZgPmZKj5/52jTnUmnFiy2S3j4mZ19cjD0AkEsBQoWp/YTbZVwTkCnnCXCAJpHaneiiLbNCSEFo4DlBz7zI7/e0UschC0SQhGSC0VeJIgt5IKRF51UrJRdQmjDZMLh3xHEVtLmNXBK+6asEkIjerzh9r2srP9zNOY1GG+4bS9cE2IzZZMQbsVdakRjH9AhXGxot7wO14bYSNkkPNn6YB8K6DwMjo+dbH3A1gKxLBJCJaz4fI6qyJDvUXyBXjsrZsslhDnH3HMgiKPJVYT67JofWi4hzAOxEHEB5jWCxcPEBiyVEO6I4DzQPcDqdTvSsmUSQmjHOyLuw460bJmE36zbgAK6ERvSsiUSwnYcVp6ejlgLpGU445mUCUskzFZGMAq6nKmV0d2kTJRcQoiCWIy4H7iG5SpSSi4hRkF6gCKlHLf0SiohRkHKMIsU2PGMWExJJcQoSB9zW+5ZTMkkxChIKWY0hGtLLKRkEmIUpBfY/ZZYSEkk7H/suXaMgvRidd+wJBLO/uBmbExTTqqqppNYRNESQgmvSpJlbxBxBnASglXtmqIlhHNCcKkWA5jXeO5aW0DREsr+IEZBRrCqQClKQgjPmseDEjICnIplRUouSsKvN7SUbaUF4gDMlHy26e6Sb9tclITZQCVuZMkYs+HIZlJiipJQk7wYCRkDNlUiJaZgCWELCWxQswdc8+H7Hy3pdS9YwmT1zY7fhhaxhvH6NSXNgAVLCCemE4RJSn3t+Ww2a5AC0EQRJWQUVfKUbF6oelSdN1RDIwWgi3jCEquUshbwZrwKTyRywweuuOFYAsRCzH5hqYoTSZdUPpgKZskNko5UrSYI00ytrC1JIJJTcpaPn4jLhnZjKVkRPHUEYZqc31t0JATvwL+56lg0xNSNvFiXfBgJGUcXi3cg792chPHBeCYzk1GX+2JdELBJzTgGzxW1kGEuCprewf/n+4TBxuCF5bZrzOoI1w8yji7wBU/JwDOxVpzMfz0vYTwe1yrEisRyfon5V4BzQsYxeLHgdFxTUTMNvuW/vuyOCYTHC2MXpgptYCPItQCvhJXC9BtH37isI3PFbbujZ45mKxoqJq5VMRu8gIUJ49xow9oreBXwyoyAmcXfE5d6waVQOd7d1u1XObWSEziBIEgBQDCDKvjt/rczV/sZ8Vq/4FL1kulu6pakesknT8tiWk1LBEGuAqRcXufVcE1Yls/KWegDXu81/wc3oOrdIulM+wAAAABJRU5ErkJggg==",xU=_i().shape({Nome:et().required("Nome é obrigatório"),Email:et().email("E-mail inválido").required("E-mail é obrigatório"),Telefone:et().test("valid-phone","Telefone inválido",e=>bn(e||"")).required("Telefone é obrigatório"),Função:et().required("Função é obrigatória")});function vU({Voltar:e,onSubmitData:t}){const n=qt({resolver:Oa(xU)}),{register:i,handleSubmit:r,setValue:o,watch:a,formState:{errors:s}}=n,l=a("Nome"),c=a("Email"),u=a("Telefone"),f=a("Função"),p=l&&c&&u&&f;return d($a,{...n,children:d("form",{onSubmit:r(g=>{t(g)}),children:d(nU,{children:w(iU,{children:[w(rU,{children:[d(oU,{children:"Dados do Usuário"}),d(aU,{}),w(sU,{children:[w(hU,{children:[d("img",{src:mU,alt:""}),d(dU,{id:"fileInput"}),w(fU,{htmlFor:"fileInput",children:[d(pU,{})," Enviar foto"]})]}),w(Ly,{children:[d(ne,{label:"Nome",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,...i("Nome"),hasError:!!s.Nome}),d(ne,{label:"E-mail",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,...i("Email"),hasError:!!s.Email})]}),w(Ly,{children:[d(ye,{...i("Telefone"),label:"Telefone",mask:"(99) 99999-9999",placeholder:"(--) ----.----",hasError:!!s.Telefone}),d(ge,{label:"Função",optionsData:gU,...i("Função"),onChange:g=>{o("Função",g.value)}})]})]})]}),w(uU,{children:[d(cU,{onClick:e,children:"Cancelar"}),d(lU,{type:"submit",disabled:!p,children:"Salvar"})]})]})})})})}const bU=h.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(0.2813rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 80px 120px;

  @media (max-width: 900px) {
    padding: 60px;
  }
`,yU=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;

  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }

`,wU=h.div`
  position: relative;
  width: 50%;
  height: 100%;
  border-radius: 0rem 2rem 2rem 0rem;
  background-image: url(${so.backModal});
  background-size: cover;
  background-position: center;


  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${$.secundaria};
    opacity: 0.6;
    z-index: 1;
    border-radius: 0rem 2rem 2rem 0rem;
    background-blend-mode: multiply, normal;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 120px;
    border-radius: 0;

    &::after {
      border-radius: 0;
    }
  }
`,CU=h.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 60px;
    gap: 60px;
  }

`,EU=h.div`
    width: 404px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;

 > p {
    font-weight: 700;
    font-size: 38px;
    line-height: 52px;
    color: ${$.secundaria};
  }


  span {
    font-size: 32px;
font-style: normal;
font-weight: 500;
      color: ${$.primaria};
    }

  @media (max-width: 900px) {
    width: 240px;
    p  {
      font-size: 28px;
      line-height: 32px;
      span{
      font-size: 28px;
      line-height: 32px;
    }
    }

  }
`,SU=h.button`
  background: ${$.secundaria};
  border: 0.5px solid ${$.primaria};
  border-radius: 5px;

  width: 213px;
  height: 35px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #ffffff;
`,FU=h.img`
 width: 196px;

 @media (max-width: 900px){
  width: 156px;
 }
`;function kU({onClose:e,visible:t}){return C.useEffect(()=>{function n(i){i.key==="Escape"&&e()}return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e]),t?d(ie,{children:d(bU,{children:w(yU,{children:[d(wU,{}),w(CU,{children:[w("div",{children:[d(FU,{src:so.deixaNoAzul,alt:""}),w(EU,{children:[d("p",{children:"Usuário cadastrado!"}),d("span",{children:"Um e-mail de criação de senha foi enviado para o novo usuário."})]})]}),d(SU,{onClick:()=>e(),children:"Concluir"})]})]})})}):null}function _U(){const{dataUser:e}=lt(),[t,n]=C.useState(!1),[i,r]=C.useState(!1),o=be();return d(ie,{children:t?d(Ve,{}):d(ie,{children:i?d(kU,{onClose:()=>Da(o),visible:!0}):d(vU,{Voltar:()=>{o("/userlist"),localStorage.setItem("selectedItem","0")},onSubmitData:async l=>{const c=window.location.origin,u={name:l.Nome,email:l.Email,profile_id:Number(l.Função),seller_id:e==null?void 0:e.seller_id,document_id:"123456789",phone_number:cn(`${l.Telefone}`),status:"ativo",link:`${c}/reset-password`},f={"Content-Type":"application/json",Authorization:`Bearer ${e==null?void 0:e.token}`};try{n(!0),(await Oe.post(`${oo}user/store`,u,{headers:f})).status===201&&r(!0)}catch(p){p.response&&p.response.status===400&&Pe.error("O e-mail já foi recebido.")}finally{n(!1)}}})})})}const PU=h.div`
  border-radius: 12px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 100%;
  max-width: 260px;
  padding:  25px 0;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 11px;

  > p{
    color:  #383838;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 14.576px;
font-weight: 500;
line-height: 26.723px;
  }

  > span{
    color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 24.293px;
font-weight: 700;
line-height: 26.723px;
  }
`;function Dh({label:e,label2:t}){return w(PU,{children:[d("p",{children:e})," ",d("span",{children:t})]})}const AU=h.div`
  width: 95%;
  margin: 0 auto;
  display: block;
`,DU=h.div`
  display: flex;
  gap: 20px;
  margin: 45px 0 45px 0;

`;h.div`
  color: #00A3D7;
font-size: 24px;
font-weight: 700;
margin-top: 30px;
`;const $U=h.div`
position: relative;
display: flex;
align-items: center;
width: 525px;
height: 44px;
border-radius: 4px;
border: 1px solid #E2E2E2;
background: #FFF;
padding: 10px 16px;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: #9B959F;
padding-right: 15px;

> input {
      width: 100%;
      padding-right: 40px;

      color:  #9B959F;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
}

.search-icon {
  position: absolute;
  right: 20px;
  color: #000;
}
`,OU=h.span`
display: flex;
align-items: center;
justify-content: center;
color: #9B959F;
font-size: 21px;
cursor: pointer;
svg {
width: 21.429px;
height: 21.429px;
}
`,TU=h.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`,MU=h.div`

`,IU=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
`,LU=h.div`
  display: flex;
  flex-direction: row;
`,RU=h.div`
  display: flex;
  margin-top: 35px;
`,BU=h.button`
  width: 118px;
height: 35px;


border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-style: normal;
font-weight: 500;
`,zU=h.button`
color: #676767;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

width: 76px;
height: 35px;

border-radius: 6px 6px 0px 0px;
border: 0.5px solid #F7F7F7;
opacity: 0.5;
background:  #F7F7F7;



display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,NU=h.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(0.1rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`,VU=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 919px;
height: 416px;


`,jU=h.div`

    display: flex;
    padding: 27px 0 0 36px;
    display: flex;
    align-items: center;
    gap: 12px;

  > p {
    color: #00A3D7;
font-size: 24px;
font-weight: 700;
  }

  > span {
    color:  #9B959F;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`,HU=h.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`,UU=h.div`

  > div {
    display: flex;
    padding: 27px 56px 27px 56px;
    gap: 56px;
  }
`,WU=h.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  gap: 21px;
`,qU=h.button`
border-radius: 5px;
border: 0.5px solid #0086ED;
background: #00A3D7;

width: 109px;
height: 35px;

color: #FFF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
`,ZU=h.button`
  border-radius: 5px;
border: 0.5px solid #F5F4F4;
background: #FFF;

width: 109px;
height: 35px;


color: #5A6ACF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

`,JU=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
`;function S1(e=!1){const[t,n]=C.useState(()=>{const o=localStorage.getItem("@FilterDailyCommission:state");return o?JSON.parse(o):e});return C.useEffect(()=>{const o=a=>{n(a.detail)};return window.addEventListener("@FilterDailyCommission:change",o),()=>{window.removeEventListener("@FilterDailyCommission:change",o)}},[]),C.useEffect(()=>{localStorage.setItem("@FilterDailyCommission:state",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("@FilterDailyCommission:change",{detail:t}))},[t]),{state:t,setTrue:()=>{n(!0)},setFalse:()=>{n(!1)}}}function YU({onClose:e,visible:t}){const{register:n,handleSubmit:i,setValue:r,formState:{errors:o}}=qt(),{setTrue:a}=S1(),s=l=>{console.log(l),a(),e()};return C.useEffect(()=>{function l(c){c.key==="Escape"&&e()}return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[e]),t?d(NU,{children:w(VU,{children:[w(jU,{children:[d("p",{children:"Adicionar Filtros"}),d("span",{children:"Preencha os campos que deseja filtrar"})]}),d(HU,{}),w("form",{onSubmit:i(s),children:[w(UU,{children:[w("div",{children:[w(JU,{children:[d(ge,{...n("licenciadoAutorizado"),optionsData:mt,placeholder:"",label:"Período",onChange:l=>{r("licenciadoAutorizado",l.value)}}),d("span",{children:"até"}),d(ge,{...n("licenciadoAutorizado"),optionsData:mt,placeholder:"",label:".",onChange:l=>{r("licenciadoAutorizado",l.value)}})]}),d(ge,{...n("fornecedor"),optionsData:mt,placeholder:"Digite aqui ou clique para ver a lista",label:"Forma de Pagamento",onChange:l=>{r("fornecedor",l.value)}})]}),w("div",{children:[d(ge,{...n("statusNoSistema"),optionsData:mt,placeholder:"Digite aqui ou clique para ver a lista",label:"Bandeira",onChange:l=>{r("statusNoSistema",l.value)}}),d(ge,{...n("statusEmFornecedor"),optionsData:mt,placeholder:"Digite aqui ou clique para ver a lista",label:"Status do pagamento",onChange:l=>{r("statusEmFornecedor",l.value)}})]})]}),w(WU,{children:[d(ZU,{onClick:e,children:"Cancelar"}),d(qU,{type:"submit",children:"Salvar"})]})]})]})}):null}const GU=[{id:1,data:"2023-09-19T13:54:41.000000Z",nsu:"NSU001",nome:"John Doe",papel:"LA1",valor_da_venda:1000.5,comissao:100.05,fornecedor:"F1"},{id:2,data:"2023-09-21",nsu:"NSU002",nome:"Jane Smith",papel:"EC",valor_da_venda:2e3,comissao:150.5,fornecedor:"F2"},{id:3,data:"2023-09-22",nsu:"NSU003",nome:"Alice Johnson",papel:"LA1",valor_da_venda:1500.75,comissao:125.6,fornecedor:"F1"},{id:4,data:"2023-09-23",nsu:"NSU004",nome:"Bob White",papel:"LA1",valor_da_venda:1750.3,comissao:140.25,fornecedor:"F2"}],KU=h.div`
    margin-top: 30px;

    display: flex;
    justify-content: space-between;
  `;h.button`
    display: flex;
    width: 213px;
    height: 35px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0.5px solid #0086ED;
    background: #00A3D7;
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.5px;
  `;const XU=h.h2`
    color: #00A3D7;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  `,QU=h.div`

`,eW=h.button`
padding: 7px 18px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};

  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"8px 1px 1px 8px"} ;

  position: ${({active:e})=>e?"relative":""};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,tW=h.button`
padding: 7px 18px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};
  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"1px 8px 8px 1px"} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`;function nW(){const e=be();return w(KU,{children:[d(XU,{children:"Comissões"}),w(QU,{children:[d(eW,{active:!0,children:"DIÁRIA"}),d(tW,{onClick:()=>{e("/commission/ranking")},active:!1,children:"RANKING"})]})]})}const iW=h.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`,ji=h.th`
  color: #343A40;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
  vertical-align: middle;
`,Pr=h.td`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  vertical-align: middle;
`,rW=h.button`
  color: #5A6ACF;
  font-size: 8.477px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;h.tr`
  height: 35.377px;
  &.highlighted {
    background-color: #F5F4F4;
  }
`;const oW=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,aW=h.p`
  width: 23px;
  height: 26px;
  font-size: 10px;
  font-weight: 700;
  line-height: 24px;
  margin-right: 5px;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  background-color: ${({fornecedor:e})=>e==="F1"?"#7D7D7D":e==="F2"?"#F9C716":e==="F3"?"#48F041":"transparent"};
`,sW=h.div`
  display: inline-block;
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  margin-left: 8px;
`,Ry=h.span`
  display: block;
  color: ${e=>e.isActive?"black":"#08BBE9"};
  opacity: ${e=>e.isActive?.5:1};
  font-size: 8px;
`,lW=h.td`
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`,cW=h.span`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  background-color: #E6E6E6;
  border-radius: 4px;
  padding: 1px 8px;
`;function uW(e){const t=new Date(e),n=String(t.getDate()).padStart(2,"0"),i=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return`${n}/${i}/${r}`}function dW(e){const t=new Date(e),n=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return`${n}:${i}`}function fW({rows:e}){const[t,n]=C.useState("data"),[i,r]=C.useState("asc"),o=f=>{f===t?r(i==="asc"?"desc":"asc"):(n(f),r("asc"))},a=[...e].sort((f,p)=>{let m=0;switch(t){case"data":m=new Date(f.data).getTime()-new Date(p.data).getTime();break;case"nome":m=f[t].localeCompare(p[t]);break;case"valor_da_venda":case"comissao":m=f[t]-p[t];break;default:return 0}return i==="asc"?m:-m});function s({direction:f}){return w(sW,{children:[d(Ry,{isActive:f!=="asc",children:"▲"}),d(Ry,{isActive:f!=="desc",children:"▼"})]})}function l(f){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(f)}const c=f=>t===f?i:void 0,u=f=>{console.log(`View more for ID: ${f}`)};return w(iW,{children:[d("thead",{children:w("tr",{children:[w(ji,{onClick:()=>o("data"),children:["Data",d(s,{direction:c("data")})]}),d(ji,{children:"NSU"}),w(ji,{onClick:()=>o("nome"),children:["Nome",d(s,{direction:c("nome")})]}),d(ji,{children:"Papel"}),w(ji,{onClick:()=>o("valor_da_venda"),children:["Valor da Venda",d(s,{direction:c("valor_da_venda")})]}),w(ji,{onClick:()=>o("comissao"),children:["Comissão",d(s,{direction:c("comissao")})]}),d(ji,{children:"Fornecedor"}),d(ji,{})]})}),d("tbody",{children:a.map((f,p)=>w("tr",{children:[w(Pr,{children:[uW(f.data),d("br",{}),dW(f.data)]}),d(Pr,{children:f.nsu}),d(Pr,{children:f.nome}),d(lW,{children:d(cW,{children:f.papel})}),d(Pr,{children:l(f.valor_da_venda)}),d(Pr,{children:l(f.comissao)}),d(Pr,{children:d(oW,{children:d(aW,{fornecedor:f.fornecedor,children:f.fornecedor})})}),d(Pr,{children:d(rW,{onClick:()=>u(f.id.toString()),children:"Ver Venda"})})]},p))})]})}const pW=h.button`
  border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

width: 118px;
height: 35px;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

align-items: center;
text-align: center;

`,hW=h.input`
  border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

width: 118px;
height: 35px;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

align-items: center;
text-align: center;

`,gW=h.button`
  background-color: transparent;
  margin-left: 13px ;


  > img {
    width: 8px;
    height: 8px;
  }

`;function mW(e="Filtragem 01"){const[t,n]=C.useState(()=>{const r=localStorage.getItem("@EditableButtonDailyCommission:label");return r?JSON.parse(r):e});return C.useEffect(()=>{localStorage.setItem("@EditableButtonDailyCommission:label",JSON.stringify(t))},[t]),{label:t,setLabel:r=>{n(r),localStorage.setItem("@EditableButtonDailyCommission:label",JSON.stringify(r))}}}function xW(){const{label:e,setLabel:t}=mW(),[n,i]=C.useState(!1),{setFalse:r}=S1(),o=C.useRef(null),a=()=>{i(!n)},s=u=>{t(u.target.value)},l=u=>{u.key==="Enter"&&i(!1)},c=u=>{u.stopPropagation(),localStorage.removeItem("@statusPagamento"),localStorage.removeItem("@EditableButtonSales:label"),localStorage.removeItem("@bandeira"),localStorage.removeItem("@formaDePagamento"),localStorage.removeItem("@captured_in_start"),localStorage.removeItem("@captured_in_end"),r()};return C.useEffect(()=>{const u=f=>{n&&o.current&&!o.current.contains(f.target)&&i(!1)};return n?document.addEventListener("mousedown",u):document.removeEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[n]),n?d(hW,{ref:o,type:"text",onChange:s,onKeyDown:l,value:e,maxLength:12,autoFocus:!0}):d(ie,{children:w(pW,{onClick:a,children:[e,d(gW,{onClick:c,children:d("img",{src:Xl,alt:""})})]})})}function vW(){const[e,t]=C.useState(""),[n,i]=C.useState(10),[r,o]=C.useState(!1),[a,s]=C.useState(!1),[l,c]=C.useState([]),[u,f]=C.useState(0),[p,m]=C.useState("0.00"),[g,x]=C.useState("0.000"),[y,v]=C.useState("0"),[b,E]=C.useState(1),{state:S}=S1(),{dataUser:F}=lt(),P=z=>{t(z.target.value)},k=()=>{o(!0)},_=()=>{o(!1)},D=async z=>{E(z)},T=()=>{E(z=>z+1)},R=()=>{b>1&&E(z=>z-1)},L=async z=>{s(!0);let q=`https://api-pagueassim.stalopay.com.br/transactions?perpage=${String(n)}&page=${b}`;z&&(q+=`&nsu_external=${z}`);const G="https://api-pagueassim.stalopay.com.br/transactions";try{const[N,W]=await Promise.all([fetch(q,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${F==null?void 0:F.token}`}}),fetch(G,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${F==null?void 0:F.token}`}})]);if(N.ok&&W.ok){const X=await N.json(),ue=await W.json();c(X.transactions),f(X.total_transactions),v(ue.total_amountTPV),E(X.current_page),m(ue.net_value),x(ue.average_taxApplied)}else console.error(`Error fetching paginated data: ${N.statusText}`),console.error(`Error fetching total data: ${W.statusText}`)}catch(N){console.error("Error fetching data:",N)}finally{s(!1)}};C.useEffect(()=>{e.trim()===""&&L()},[e]);const j=()=>{e.trim()!==""?L(e):L()},B=Math.ceil(u/(n||1));return C.useEffect(()=>{L()},[n,b]),console.log("totalpage",B),w(ie,{children:[d(YU,{onClose:_,visible:r}),a?d(Ve,{}):w(ie,{children:[w(AU,{children:[d(nW,{}),w(DU,{children:[d(Dh,{label:"Qtd de Vendas",label2:u.toString()}),d(Dh,{label:"Total Dia",label2:la(parseFloat(p))}),d(Dh,{label:"Total Mês",label2:`${w1(parseFloat(g))}%`})]}),w($U,{children:[d("input",{type:"text",placeholder:"Pesquise por NSU",value:e,onChange:P}),d(OU,{className:"search-icon",onClick:j,children:d(Eo,{})})]})]}),w(RU,{children:[w(BU,{children:["Todos (",u,")"]}),S?d(xW,{}):"",w(zU,{onClick:k,children:[" ",d(Ma,{}),"Filtrar"]})]}),d(fW,{rows:GU}),w(MU,{children:[d(TU,{}),w(IU,{children:[d(Ra,{totalItens:n}),w(LU,{children:[d(Ba,{itensPorPage:n,setItensPorPage:i}),d(Er,{currentPage:b,onPageClick:D,totalPages:B,onNextPage:T,onPrevPage:R})]})]})]})]})]})}const bW=h.div`
  width: 95%;
  margin: 0 auto;
  display: block;
`;h.div`
  display: flex;
  gap: 20px;
  margin: 45px 0 45px 0;

`;h.div`
  color: #00A3D7;
font-size: 24px;
font-weight: 700;
margin-top: 30px;
`;const yW=h.div`
position: relative;
display: flex;
align-items: center;
width: 525px;
height: 44px;
border-radius: 4px;
border: 1px solid #E2E2E2;
background: #FFF;
padding: 10px 16px;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: #9B959F;
padding-right: 15px;

> input {
      width: 100%;
      padding-right: 40px;

      color:  #9B959F;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
}

.search-icon {
  position: absolute;
  right: 20px;
  color: #000;
}
`,wW=h.span`
display: flex;
align-items: center;
justify-content: center;
color: #9B959F;
font-size: 21px;
cursor: pointer;
svg {
width: 21.429px;
height: 21.429px;
}
`,CW=h.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`,EW=h.div`

`,SW=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
`,FW=h.div`
  display: flex;
  flex-direction: row;
`,kW=h.div`
  display: flex;
  margin-top: 35px;
`,_W=h.button`
  width: 118px;
height: 35px;


border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-style: normal;
font-weight: 500;
`,PW=h.button`
color: #676767;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

width: 76px;
height: 35px;

border-radius: 6px 6px 0px 0px;
border: 0.5px solid #F7F7F7;
opacity: 0.5;
background:  #F7F7F7;



display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,AW=h.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(0.1rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`,DW=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 919px;
height: 416px;


`,$W=h.div`

    display: flex;
    padding: 27px 0 0 36px;
    display: flex;
    align-items: center;
    gap: 12px;

  > p {
    color: #00A3D7;
font-size: 24px;
font-weight: 700;
  }

  > span {
    color:  #9B959F;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`,OW=h.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`,TW=h.div`

  > div {
    display: flex;
    padding: 27px 56px 27px 56px;
    gap: 56px;
  }
`,MW=h.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  gap: 21px;
`,IW=h.button`
border-radius: 5px;
border: 0.5px solid #0086ED;
background: #00A3D7;

width: 109px;
height: 35px;

color: #FFF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
`,LW=h.button`
  border-radius: 5px;
border: 0.5px solid #F5F4F4;
background: #FFF;

width: 109px;
height: 35px;


color: #5A6ACF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

`,RW=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
`;function F1(e=!1){const[t,n]=C.useState(()=>{const o=localStorage.getItem("@FilterRankingCommission:state");return o?JSON.parse(o):e});return C.useEffect(()=>{const o=a=>{n(a.detail)};return window.addEventListener("@FilterRankingCommission:change",o),()=>{window.removeEventListener("@FilterRankingCommission:change",o)}},[]),C.useEffect(()=>{localStorage.setItem("@FilterRankingCommission:state",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("@FilterRankingCommission:change",{detail:t}))},[t]),{state:t,setTrue:()=>{n(!0)},setFalse:()=>{n(!1)}}}function BW({onClose:e,visible:t}){const{register:n,handleSubmit:i,setValue:r,formState:{errors:o}}=qt(),{setTrue:a}=F1(),s=l=>{console.log(l),a(),e()};return C.useEffect(()=>{function l(c){c.key==="Escape"&&e()}return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[e]),t?d(AW,{children:w(DW,{children:[w($W,{children:[d("p",{children:"Adicionar Filtros"}),d("span",{children:"Preencha os campos que deseja filtrar"})]}),d(OW,{}),w("form",{onSubmit:i(s),children:[w(TW,{children:[w("div",{children:[w(RW,{children:[d(ge,{...n("licenciadoAutorizado"),optionsData:mt,placeholder:"",label:"Período",onChange:l=>{r("licenciadoAutorizado",l.value)}}),d("span",{children:"até"}),d(ge,{...n("licenciadoAutorizado"),optionsData:mt,placeholder:"",label:".",onChange:l=>{r("licenciadoAutorizado",l.value)}})]}),d(ge,{...n("fornecedor"),optionsData:mt,placeholder:"Digite aqui ou clique para ver a lista",label:"Forma de Pagamento",onChange:l=>{r("fornecedor",l.value)}})]}),w("div",{children:[d(ge,{...n("statusNoSistema"),optionsData:mt,placeholder:"Digite aqui ou clique para ver a lista",label:"Bandeira",onChange:l=>{r("statusNoSistema",l.value)}}),d(ge,{...n("statusEmFornecedor"),optionsData:mt,placeholder:"Digite aqui ou clique para ver a lista",label:"Status do pagamento",onChange:l=>{r("statusEmFornecedor",l.value)}})]})]}),w(MW,{children:[d(LW,{onClick:e,children:"Cancelar"}),d(IW,{type:"submit",children:"Salvar"})]})]})]})}):null}const zW=[{id:1,posicao:"1",nome:"John Doe",papel:"LA1",comissao_total:100.05,tpv_total:1000.5,fornecedor:["F1"]},{id:2,posicao:"2",nome:"Jane Smith",papel:"EC",comissao_total:150.5,tpv_total:2e3,fornecedor:["F2","F3"]},{id:3,posicao:"3",nome:"Alice Johnson",papel:"LA1",comissao_total:125.6,tpv_total:1500.75,fornecedor:["F1","F3"]},{id:4,posicao:"4",nome:"Bob White",papel:"LA1",comissao_total:140.25,tpv_total:1750.3,fornecedor:["F2"]}],NW=h.div`
    margin-top: 30px;

    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
  `;h.button`
    display: flex;
    width: 213px;
    height: 35px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0.5px solid #0086ED;
    background: #00A3D7;
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.5px;
  `;const VW=h.h2`
    color: #00A3D7;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  `,jW=h.div`

`,HW=h.button`
padding: 7px 18px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};

  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"8px 1px 1px 8px"} ;

  position: ${({active:e})=>e?"relative":""};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,UW=h.button`
padding: 7px 18px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};
  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"1px 8px 8px 1px"} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`;function WW(){const e=be();return w(NW,{children:[d(VW,{children:"Comissões"}),w(jW,{children:[d(HW,{onClick:()=>{e("/commission/daily")},active:!1,children:"DIÁRIA"}),d(UW,{active:!0,children:"RANKING"})]})]})}const qW=h.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`,Ar=h.th`
  color: #343A40;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
  vertical-align: middle;
`,To=h.td`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
  text-align: center;
  vertical-align: middle;
`,ZW=h.button`
  color: #5A6ACF;
  font-size: 8.477px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;h.tr`
  height: 35.377px;
  &.highlighted {
    background-color: #F5F4F4;
  }
`;const JW=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,YW=h.p`
  width: 23px;
  height: 26px;
  font-size: 10px;
  font-weight: 700;
  line-height: 24px;
  margin-right: 5px;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  background-color: ${({fornecedor:e})=>e==="F1"?"#7D7D7D":e==="F2"?"#F9C716":e==="F3"?"#48F041":"transparent"};
`,GW=h.div`
  display: inline-block;
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  margin-left: 8px;
`,By=h.span`
  display: block;
  color: ${e=>e.isActive?"black":"#08BBE9"};
  opacity: ${e=>e.isActive?.5:1};
  font-size: 8px;
`,KW=h.td`
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`,XW=h.span`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  background-color: #E6E6E6;
  border-radius: 4px;
  padding: 1px 8px;
`;function QW({rows:e}){const[t,n]=C.useState("posicao"),[i,r]=C.useState("asc"),o=u=>{u===t?r(i==="asc"?"desc":"asc"):(n(u),r("asc"))},a=[...e].sort((u,f)=>{let p=0;switch(t){case"comissao_total":case"tpv_total":p=u[t]-f[t];break;case"posicao":p=u[t].localeCompare(f[t]);break;default:return 0}return i==="asc"?p:-p});function s({direction:u}){return w(GW,{children:[d(By,{isActive:u!=="asc",children:"▲"}),d(By,{isActive:u!=="desc",children:"▼"})]})}const l=u=>t===u?i:void 0,c=u=>{console.log(`View more for ID: ${u}`)};return w(qW,{children:[d("thead",{children:w("tr",{children:[w(Ar,{onClick:()=>o("posicao"),children:["Posição",d(s,{direction:l("posicao")})]}),d(Ar,{children:"Nome"}),d(Ar,{children:"Papel"}),w(Ar,{onClick:()=>o("comissao_total"),children:["Comissão Total",d(s,{direction:l("comissao_total")})]}),w(Ar,{onClick:()=>o("tpv_total"),children:["TPV Total",d(s,{direction:l("tpv_total")})]}),d(Ar,{children:"Fornecedor"}),d(Ar,{children:"Ver dados"})]})}),d("tbody",{children:a.map((u,f)=>w("tr",{children:[w(To,{children:[u.posicao," °"]}),d(To,{children:u.nome}),d(KW,{children:d(XW,{children:u.papel})}),w(To,{children:["R$ ",u.comissao_total]}),w(To,{children:["R$ ",u.tpv_total]}),d(To,{children:d(JW,{children:u.fornecedor.map((p,m)=>d(YW,{fornecedor:p,children:p},m))})}),d(To,{children:d(ZW,{onClick:()=>c(u.id.toString()),children:"Ver Venda"})})]},f))})]})}const eq=h.button`
  border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

width: 118px;
height: 35px;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

align-items: center;
text-align: center;

`,tq=h.input`
  border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

width: 118px;
height: 35px;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

align-items: center;
text-align: center;

`,nq=h.button`
  background-color: transparent;
  margin-left: 13px ;


  > img {
    width: 8px;
    height: 8px;
  }

`;function iq(e="Filtragem 01"){const[t,n]=C.useState(()=>{const r=localStorage.getItem("@EditableButtonRankingCommission:label");return r?JSON.parse(r):e});return C.useEffect(()=>{localStorage.setItem("@EditableButtonRankingCommission:label",JSON.stringify(t))},[t]),{label:t,setLabel:r=>{n(r),localStorage.setItem("@EditableButtonRankingCommission:label",JSON.stringify(r))}}}function rq(){const{label:e,setLabel:t}=iq(),[n,i]=C.useState(!1),{setFalse:r}=F1(),o=C.useRef(null),a=()=>{i(!n)},s=u=>{t(u.target.value)},l=u=>{u.key==="Enter"&&i(!1)},c=u=>{u.stopPropagation(),localStorage.removeItem("@statusPagamento"),localStorage.removeItem("@EditableButtonSales:label"),localStorage.removeItem("@bandeira"),localStorage.removeItem("@formaDePagamento"),localStorage.removeItem("@captured_in_start"),localStorage.removeItem("@captured_in_end"),r()};return C.useEffect(()=>{const u=f=>{n&&o.current&&!o.current.contains(f.target)&&i(!1)};return n?document.addEventListener("mousedown",u):document.removeEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[n]),n?d(tq,{ref:o,type:"text",onChange:s,onKeyDown:l,value:e,maxLength:12,autoFocus:!0}):d(ie,{children:w(eq,{onClick:a,children:[e,d(nq,{onClick:c,children:d("img",{src:Xl,alt:""})})]})})}function oq(){const[e,t]=C.useState(""),[n,i]=C.useState(10),[r,o]=C.useState(!1),[a,s]=C.useState(!1),[l,c]=C.useState([]),[u,f]=C.useState(0),[p,m]=C.useState("0.00"),[g,x]=C.useState("0.000"),[y,v]=C.useState("0"),[b,E]=C.useState(1),{state:S}=F1(),{dataUser:F}=lt(),P=z=>{t(z.target.value)},k=()=>{o(!0)},_=()=>{o(!1)},D=async z=>{E(z)},T=()=>{E(z=>z+1)},R=()=>{b>1&&E(z=>z-1)},L=async z=>{s(!0);let q=`https://api-pagueassim.stalopay.com.br/transactions?perpage=${String(n)}&page=${b}`;z&&(q+=`&nsu_external=${z}`);const G="https://api-pagueassim.stalopay.com.br/transactions";try{const[N,W]=await Promise.all([fetch(q,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${F==null?void 0:F.token}`}}),fetch(G,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${F==null?void 0:F.token}`}})]);if(N.ok&&W.ok){const X=await N.json(),ue=await W.json();c(X.transactions),f(X.total_transactions),v(ue.total_amountTPV),E(X.current_page),m(ue.net_value),x(ue.average_taxApplied)}else console.error(`Error fetching paginated data: ${N.statusText}`),console.error(`Error fetching total data: ${W.statusText}`)}catch(N){console.error("Error fetching data:",N)}finally{s(!1)}};C.useEffect(()=>{e.trim()===""&&L()},[e]);const j=()=>{e.trim()!==""?L(e):L()},B=Math.ceil(u/(n||1));return C.useEffect(()=>{L()},[n,b]),console.log("totalpage",B),w(ie,{children:[d(BW,{onClose:_,visible:r}),a?d(Ve,{}):w(ie,{children:[w(bW,{children:[d(WW,{}),w(yW,{children:[d("input",{type:"text",placeholder:"Pesquise por NSU",value:e,onChange:P}),d(wW,{className:"search-icon",onClick:j,children:d(Eo,{})})]})]}),w(kW,{children:[w(_W,{children:["Todos (",u,")"]}),S?d(rq,{}):"",w(PW,{onClick:k,children:[" ",d(Ma,{}),"Filtrar"]})]}),d(QW,{rows:zW}),w(EW,{children:[d(CW,{}),w(SW,{children:[d(Ra,{totalItens:n}),w(FW,{children:[d(Ba,{itensPorPage:n,setItensPorPage:i}),d(Er,{currentPage:b,onPageClick:D,totalPages:B,onNextPage:T,onPrevPage:R})]})]})]})]})]})}const aq=h.div`
  width: 95%;
  display: block;
`;h.div`
  display: flex;
  gap: 20px;
  margin: 45px 0 45px 0;

`;h.div`
  color: #00A3D7;
font-size: 24px;
font-weight: 700;
margin-top: 30px;
`;h.div`
position: relative;
display: flex;
align-items: center;
width: 525px;
height: 44px;
border-radius: 4px;
border: 1px solid #E2E2E2;
background: #FFF;
padding: 10px 16px;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: #9B959F;
padding-right: 15px;

> input {
      width: 100%;
      padding-right: 40px;

      color:  #9B959F;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
}

.search-icon {
  position: absolute;
  right: 20px;
  color: #000;
}
`;h.span`
display: flex;
align-items: center;
justify-content: center;
color: #9B959F;
font-size: 21px;
cursor: pointer;
svg {
width: 21.429px;
height: 21.429px;
}
`;const sq=h.div`
  border: 1px solid #DFDFDF;
  margin-top: 15px;
  width: 100%;
`,lq=h.div`

`,cq=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
`,uq=h.div`
  display: flex;
  flex-direction: row;
`;h.div`
  display: flex;
  margin-top: 35px;
`;h.button`
  width: 118px;
height: 35px;


border-radius: 6px 6px 0px 0px;
background: #DAF5FC;

color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-style: normal;
font-weight: 500;
`;h.button`
color: #676767;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

width: 76px;
height: 35px;

border-radius: 6px 6px 0px 0px;
border: 0.5px solid #F7F7F7;
opacity: 0.5;
background:  #F7F7F7;



display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;const dq=[{id:1,nome:"Produto A",descricao:"Descrição do Produto A",tipo:"Base"},{id:2,nome:"Produto B",descricao:"Descrição do Produto B",tipo:"Base+Base"},{id:3,nome:"Produto C",descricao:"Descrição do Produto C",tipo:"Comercial"}],fq=h.div`
  margin-left: 44px;
  margin-top: 30px;
`,pq=h.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: space-between;
`,hq=h.button`
  display: flex;
  width: 213px;
  height: 35px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0.5px solid #0086ED;
  background: #00A3D7;
  color: #FFF;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
`,gq=h.h2`
  color: #00A3D7;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
`,mq=h.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 525px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid #E2E2E2;
  background: #FFF;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #9B959F;
  padding-right: 15px;

  > input {
        width: 100%;
        padding-right: 40px;

        color:  #9B959F;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
  }

  .search-icon {
    position: absolute;
    right: 20px;
    color: #000;
  }
`,xq=h.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9B959F;
  font-size: 21px;
  cursor: pointer;
  svg {
  width: 21.429px;
height: 21.429px;
}
`;function vq(){const[e,t]=C.useState(""),n=be();return w(fq,{children:[d(gq,{children:"Planos"}),w(pq,{children:[w(mq,{children:[d("input",{type:"text",placeholder:"Pesquise por nome do plano",value:e,onChange:a=>{t(a.target.value)}}),d(xq,{className:"search-icon",onClick:()=>{e.trim()!==""&&console.log("Realizando busca:",e)},children:d(Eo,{})})]}),d(hq,{onClick:()=>{n("/addplans")},children:"Adicionar Plano"})]})]})}const bq=h.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 49px;
`,is=h.th`
  color: #343A40;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  text-align: start;
  padding: 8px 8px 8px 20px;
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
  vertical-align: middle;
`,Tc=h.td`
  color: #343A40;
  font-size: 9.906px;
  line-height: 15.566px;
  padding: 8px 8px 8px 20px;
  border-bottom: 1px solid #E9ECEF;
  text-align: start;
  vertical-align: middle;
`,P4=h.button`
  color: #08BBE9;
  font-size: 9.906px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  letter-spacing: 0.353px;
  width: 77px;
  height: 24.725px;
  border-radius: 3.532px;
  border: 0.353px solid #F5F4F4;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,yq=h(P4)`
  color: #E91414;
`;h.tr`
  height: 35.377px;
  &.highlighted {
    background-color: #F5F4F4;
  }
`;h.div`
  display: inline-block;
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  margin-left: 8px;
`;h.span`
  display: block;
  color: ${e=>e.isActive?"black":"#08BBE9"};
  opacity: ${e=>e.isActive?.5:1};
  font-size: 8px;
`;const wq=h.td`
  text-align: start;
  padding: 8px;
  border-bottom: 1px solid #E9ECEF;
`,Cq=h.span`
  color: #F2F2F2;
  font-size: 9.906px;
  line-height: 15.566px;
  background-color: ${({type:e})=>{switch(e){case"Base":return"#068CAF";case"Base+Base":return"#0C0C3B";case"Comercial":return"#AE39F6";default:return"#068CAF"}}};
  border-radius: 4px;
  padding: 1px 8px;
`;function Eq({rows:e}){const[t,n]=C.useState("nome"),[i,r]=C.useState("asc"),o=l=>{l===t?r(i==="asc"?"desc":"asc"):(n(l),r("asc"))},a=[...e].sort((l,c)=>{let u=0;switch(t){case"nome":case"descricao":case"tipo":u=l[t].localeCompare(c[t]);break;default:return 0}return i==="asc"?u:-u}),s=l=>{console.log(`View more for ID: ${l}`)};return w(bq,{children:[d("thead",{children:w("tr",{children:[d(is,{onClick:()=>o("nome"),children:"Nome"}),d(is,{onClick:()=>o("descricao"),children:"Descrição"}),d(is,{onClick:()=>o("tipo"),children:"Tipo"}),d(is,{}),d(is,{})]})}),d("tbody",{children:a.map((l,c)=>w("tr",{children:[d(Tc,{children:l.nome}),d(Tc,{children:l.descricao}),d(wq,{children:d(Cq,{type:l.tipo,children:l.tipo})}),d(Tc,{children:d(P4,{onClick:()=>s(l.id.toString()),children:"Editar"})}),d(Tc,{children:d(yq,{onClick:()=>s(l.id.toString()),children:"Remover"})})]},c))})]})}function Sq(e=!1){const[t,n]=C.useState(()=>{const o=localStorage.getItem("@FilterPlans:state");return o?JSON.parse(o):e});return C.useEffect(()=>{const o=a=>{n(a.detail)};return window.addEventListener("@FilterPlans:change",o),()=>{window.removeEventListener("@FilterPlans:change",o)}},[]),C.useEffect(()=>{localStorage.setItem("@FilterPlans:state",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("@FilterPlans:change",{detail:t}))},[t]),{state:t,setTrue:()=>{n(!0)},setFalse:()=>{n(!1)}}}function Fq(){const[e,t]=C.useState(""),[n,i]=C.useState(10);C.useState(!1);const[r,o]=C.useState(!1),[a,s]=C.useState([]),[l,c]=C.useState(0),[u,f]=C.useState("0.00"),[p,m]=C.useState("0.000"),[g,x]=C.useState("0"),[y,v]=C.useState(1);Sq();const{dataUser:b}=lt(),E=async _=>{v(_)},S=()=>{v(_=>_+1)},F=()=>{y>1&&v(_=>_-1)},P=async _=>{o(!0);let D=`https://api-pagueassim.stalopay.com.br/transactions?perpage=${String(n)}&page=${y}`;_&&(D+=`&nsu_external=${_}`);const T="https://api-pagueassim.stalopay.com.br/transactions";try{const[R,L]=await Promise.all([fetch(D,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${b==null?void 0:b.token}`}}),fetch(T,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${b==null?void 0:b.token}`}})]);if(R.ok&&L.ok){const j=await R.json(),B=await L.json();s(j.transactions),c(j.total_transactions),x(B.total_amountTPV),v(j.current_page),f(B.net_value),m(B.average_taxApplied)}else console.error(`Error fetching paginated data: ${R.statusText}`),console.error(`Error fetching total data: ${L.statusText}`)}catch(R){console.error("Error fetching data:",R)}finally{o(!1)}};C.useEffect(()=>{e.trim()===""&&P()},[e]);const k=Math.ceil(l/(n||1));return C.useEffect(()=>{P()},[n,y]),console.log("totalpage",k),d(ie,{children:r?d(Ve,{}):w(ie,{children:[d(aq,{children:d(vq,{})}),d(Eq,{rows:dq}),w(lq,{children:[d(sq,{}),w(cq,{children:[d(Ra,{totalItens:n}),w(uq,{children:[d(Ba,{itensPorPage:n,setItensPorPage:i}),d(Er,{currentPage:y,onPageClick:E,totalPages:k,onNextPage:S,onPrevPage:F})]})]})]})]})})}const kq={options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]},_q={options:[{value:"1",label:"Sim"},{value:"2",label:"Não"}]},Pq=_i().shape({Titulo:et().required("Título é obrigatório"),Descricao:et().required("Breve Descrição é obrigatória"),TipoDePlano:_i({value:et().required(),label:et()}).required("Tipo de Plano é obrigatório"),Antecipacao:_i({value:et().required(),label:et()}).required("Informação sobre antecipação é obrigatória"),TaxaAntecipacao:et().required("Taxa de antecipação é obrigatória")}),Aq="/assets/master-dde6d826.svg",Dq="/assets/elo-bfa06e4b.svg",$q="/assets/visa-ced72b2c.svg",Oq="/assets/diners-14506d89.svg",Tq="/assets/hyper-725347ee.svg",zy=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Ny=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,Vy=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,jy=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,Hy=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,Uy=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;


`,Wy=h.section`
    display: flex;
justify-content: space-between;
gap: 50px;

`;h.section`
    width: 215px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`;const Mq=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,Iq=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,Lq=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`;h.input.attrs({type:"file"})`
  display: none;
`;h.label`
  display: flex;
  align-items: center;
  gap: 18px;

  padding: 12px 23px;
  border-radius: 4px;
  background: #E6F8FD;
  cursor: pointer;

  color: var(--foundation-brand-02-normal-hover, #07A8D2);

font-size: 14px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.5px;

  &:hover {
    background: #d1eaf3;
  }
`;h(i1)`
  color: #07A8D2;
  width: 30px;
  height: 30px;

`;h.div`
  display: flex;
  align-items: center;
  gap: 50px;

`;const Rq=h.table`
    width: 100%;
    border-collapse: collapse;

    thead {
        tr {
            background: var(--foundation-brand-01-normal, #10104F);

            th {
                padding: 8px 12px;
                color: var(--foundation-white-light, #FDFDFD);
                text-align: center;
                border-bottom: 2px solid #fff;
                font-feature-settings: 'clig' off, 'liga' off;
                font-family: Poppins, sans-serif;
                font-size: 10.99px;
                font-style: normal;
                font-weight: 700;
                line-height: 17.27px;
            }
        }
    }

    tbody {
        tr {
            td {
                padding: 8px 12px;
                color: var(--light-secondary, #6C757D);
                border-bottom: 1px solid #ddd;
                text-align: center;
                vertical-align: middle;
                font-feature-settings: 'clig' off, 'liga' off;
                font-family: Poppins, sans-serif;
                font-size: 12.204px;
                font-style: normal;
                font-weight: 400;
                line-height: 24.408px;

                input {
                    width: 86px;
                    height: 26px;
                    padding: 8px;
                    border-radius: 2.371px;
                    border: 0.593px solid var(--foundation-neutral-light-active, #D7D7D7);
                    background: var(--foundation-white-light, #FDFDFD);
                    color: var(--foundation-neutral-light-active, #5E5E5E);
                    font-family: Poppins, sans-serif;
                    font-size: 9.298px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 14.226px;
                    letter-spacing: 0.296px;
                    text-align: center;
                    -moz-appearance: textfield;


                    &::placeholder {
        text-align: right;
    }

                    &::-webkit-inner-spin-button,
                    &::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                }
            }
        }
    }
`,Bq=h.div`
  display: flex;
  align-items: flex-start;
`,zq=h.div`
  display: flex;
  flex-direction: column;

  > button {
    width: 118px; // Set a specific width
    height: 55px; // Set a specific height
    padding: 6px 38px; // You can keep this if you want internal spacing, but it might interfere with the width/height settings
    background: var(--foundation-brand-02-light-hover, #DAF5FC);
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--foundation-brand-02-normal, #08BBE9);
    font-size: 12px;
    font-weight: 700;
    line-height: 15.566px;

    img {
      width: 42.131px;
      height: 42.131px;
      margin: auto; // Centers the image if there's space around it
    }
  }

  button.not-selected {
    mix-blend-mode: luminosity;
    background: #F7F7F7;
  }
`,Nq=h.button`
  color: var(--foundation-brand-01-normal, #10104F);
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
background-color: transparent;

display: flex;
margin: 40px 0 0 180px;
`;function Vq({Voltar:e,onSubmitData:t}){const n=qt({resolver:Oa(Pq)}),{register:i,handleSubmit:r,setValue:o,watch:a,formState:{errors:s}}=n,[l,c]=C.useState(!1),u=a("Titulo"),f=a("Descricao"),p=a("TipoDePlano"),m=a("Antecipacao"),g=a("TaxaAntecipacao"),x={Master:Aq,Visa:$q,Elo:Dq,Diners:Oq,Hyper:Tq},y=B=>{if(!D){alert("Preencha todos os valores da tabela antes de enviar o formulário.");return}const z={...B,tableValues:F};t(z)},[v,b]=C.useState("Padrão"),E=["Padrão","Master","Visa","Elo","Hyper","Diners"],S={};E.forEach(B=>{S[B]={},["Débito","Crédito à vista","Parcelado 2x","Parcelado 3x","Parcelado 4x","Parcelado 5x","Parcelado 6x","Parcelado 7x","Parcelado 8x","Parcelado 9x","Parcelado 10x"].forEach(z=>{S[B][z]={MDR:"",Total:""}})});const[F,P]=C.useState(S),k=B=>{const z=parseFloat(String(B));return z>=0&&z<=100?`${z.toFixed(2)}%`:""},_=(B,z,q,G)=>{var X;const N=k(G),W={...F,[B]:{...F[B],[z]:{...(X=F[B])==null?void 0:X[z],[q]:N}}};B==="Padrão"&&E.forEach(ue=>{var U;W[ue]={...W[ue],[z]:{...(U=W[ue])==null?void 0:U[z],[q]:N}}}),P(W)},D=Object.keys(F).every(B=>Object.keys(F[B]).every(z=>F[B][z].MDR&&F[B][z].Total)),T=u&&f&&p&&m&&g&&D,R=be(),L=()=>{R("/plans")},j=B=>w(Rq,{children:[d("thead",{children:w("tr",{children:[d("th",{children:"Forma de Pagamento"}),d("th",{children:"MDR"}),d("th",{children:"Total"})]})}),d("tbody",{children:["Débito","Crédito à vista","Parcelado 2x","Parcelado 3x","Parcelado 4x","Parcelado 5x","Parcelado 6x","Parcelado 7x","Parcelado 8x","Parcelado 9x","Parcelado 10x"].map(z=>{var q,G,N,W;return w("tr",{children:[d("td",{children:z}),d("td",{children:d(yg,{mask:"99,99 %",placeholder:"%",value:((G=(q=F[B])==null?void 0:q[z])==null?void 0:G.MDR)||"",onChange:X=>_(B,z,"MDR",X.target.value)})}),d("td",{children:d(yg,{mask:"99,99 %",placeholder:"%",value:((W=(N=F[B])==null?void 0:N[z])==null?void 0:W.Total)||"",onChange:X=>_(B,z,"Total",X.target.value)})})]},z)})})]});return d($a,{...n,children:w("form",{onSubmit:r(y),children:[w(Nq,{onClick:L,children:[d(Cr,{size:18}),"Voltar"]}),d(zy,{children:d(Ny,{children:w(Vy,{children:[d(jy,{children:"Dados do Plano"}),d(Hy,{}),w(Uy,{children:[w(Wy,{children:[d(ne,{label:"Título",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,...i("Titulo"),hasError:!!s.Titulo}),d(ne,{label:"Breve Descrição",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,...i("Descricao"),hasError:!!s.Descricao})]}),w(Wy,{children:[d(ge,{label:"Tipo de Plano",optionsData:kq,...i("TipoDePlano"),onChange:B=>{o("TipoDePlano",B)}}),d(ge,{label:"Com antecipação?",placeholder:"",optionsData:_q,...i("Antecipacao"),onChange:B=>{o("Antecipacao",B),c(B.value==="1")}}),l&&d(ye,{placeholder:"",label:"Taxa antecipação",mask:"99,99 %",...i("TaxaAntecipacao"),hasError:!!s.TaxaAntecipacao})]})]})]})})}),d(zy,{children:w(Ny,{children:[w(Vy,{children:[d(jy,{children:"Taxas do Plano"}),d(Hy,{}),d(Uy,{children:w(Bq,{children:[d(zq,{children:E.map(B=>d("button",{type:"button",onClick:()=>b(B),className:v===B?"selected":"not-selected",children:x[B]?d("img",{src:x[B],alt:B}):B},B))}),j(v)]})})]}),w(Lq,{children:[d(Iq,{onClick:e,children:"Cancelar"}),d(Mq,{type:"submit",disabled:!T,children:"Salvar"})]})]})})]})})}function jq(){return d(ie,{children:d(Vq,{Voltar:()=>{console.log("Voltar foi clicado")},onSubmitData:n=>{console.log("Dados do formulário enviados:",n)}})})}const Hq=h.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  border-radius: 8px;
  background: var(--Sys---Neutral-04, #FFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  thead {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 1px;
      background-color: #E9ECEF;
      box-shadow: 0px 1px 0px 0px #E9ECEF;
    }
  }
`,rs=h.th`
  color: var(--light-dark, #343A40);
  font-size: 13.252px;
  font-style: normal;
  font-weight: 500;
  line-height: 20.824px;
`,os=h.td`
  color: var(--light-secondary, #6C757D);
  font-size: 13.252px;
  line-height: 20.824px;
  padding: 8px;
  text-align: center;
  vertical-align: middle;



`,Uq=h.img`

  display: block;
  margin-left: auto;
  margin-right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`,Wq=h.button`
  color: #5A6ACF;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  background: transparent;
  letter-spacing: 0.353px;
`;h(Wq)`
  color: #EB001B;
`;const qq=h.tr`
  height: 35.377px;

  &:hover {
    background-color: #F5F4F4;
  }
`;h.span`
  border-radius: 4px;
background: #00A3D7;
padding: 1px 8px;

color: var(--foundation-brand-02-light, #E6F8FD);
text-align: center;
font-size: 12px;
font-weight: 600;



`;function Zq({data:e}){return w(Hq,{children:[d("thead",{children:w("tr",{children:[d(rs,{}),d(rs,{children:"Name"}),d(rs,{children:"Função"}),d(rs,{children:"E-mail"}),d(rs,{})]})}),d("tbody",{children:e.map((t,n)=>w(qq,{children:[d(os,{children:d(Uq,{src:bl,alt:"Profile"})}),d(os,{children:t.name}),d(os,{children:t.profile_id}),d(os,{children:t.email}),d(os,{})]},n))})]})}const Jq=h.div`
      margin-left: 44px;
    margin-top: 45px;
    margin-right: 52px;

`,Yq=h.button`
  color: var(--foundation-brand-01-normal, #10104F);
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
background-color: transparent;

display: flex;
margin-bottom: 40px;
`;function Gq(){C1();const e=be();return d(ie,{children:w(Jq,{children:[w(Yq,{onClick:()=>{e("/licenseddetail")},children:[d(Cr,{size:18}),"Voltar"]}),d(Zq,{data:[{id:1,name:"John Doe",profile_id:"Administrador",email:"john.doe@example.com"}]})]})})}/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Ql(e){return e+.5|0}const Qi=(e,t,n)=>Math.max(Math.min(e,n),t);function Ss(e){return Qi(Ql(e*2.55),0,255)}function hr(e){return Qi(Ql(e*255),0,255)}function bi(e){return Qi(Ql(e/2.55)/100,0,1)}function qy(e){return Qi(Ql(e*100),0,100)}const wn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},wg=[..."0123456789ABCDEF"],Kq=e=>wg[e&15],Xq=e=>wg[(e&240)>>4]+wg[e&15],Mc=e=>(e&240)>>4===(e&15),Qq=e=>Mc(e.r)&&Mc(e.g)&&Mc(e.b)&&Mc(e.a);function eZ(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&wn[e[1]]*17,g:255&wn[e[2]]*17,b:255&wn[e[3]]*17,a:t===5?wn[e[4]]*17:255}:(t===7||t===9)&&(n={r:wn[e[1]]<<4|wn[e[2]],g:wn[e[3]]<<4|wn[e[4]],b:wn[e[5]]<<4|wn[e[6]],a:t===9?wn[e[7]]<<4|wn[e[8]]:255})),n}const tZ=(e,t)=>e<255?t(e):"";function nZ(e){var t=Qq(e)?Kq:Xq;return e?"#"+t(e.r)+t(e.g)+t(e.b)+tZ(e.a,t):void 0}const iZ=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function A4(e,t,n){const i=t*Math.min(n,1-n),r=(o,a=(o+e/30)%12)=>n-i*Math.max(Math.min(a-3,9-a,1),-1);return[r(0),r(8),r(4)]}function rZ(e,t,n){const i=(r,o=(r+e/60)%6)=>n-n*t*Math.max(Math.min(o,4-o,1),0);return[i(5),i(3),i(1)]}function oZ(e,t,n){const i=A4(e,1,.5);let r;for(t+n>1&&(r=1/(t+n),t*=r,n*=r),r=0;r<3;r++)i[r]*=1-t-n,i[r]+=t;return i}function aZ(e,t,n,i,r){return e===r?(t-n)/i+(t<n?6:0):t===r?(n-e)/i+2:(e-t)/i+4}function k1(e){const n=e.r/255,i=e.g/255,r=e.b/255,o=Math.max(n,i,r),a=Math.min(n,i,r),s=(o+a)/2;let l,c,u;return o!==a&&(u=o-a,c=s>.5?u/(2-o-a):u/(o+a),l=aZ(n,i,r,u,o),l=l*60+.5),[l|0,c||0,s]}function _1(e,t,n,i){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,i)).map(hr)}function P1(e,t,n){return _1(A4,e,t,n)}function sZ(e,t,n){return _1(oZ,e,t,n)}function lZ(e,t,n){return _1(rZ,e,t,n)}function D4(e){return(e%360+360)%360}function cZ(e){const t=iZ.exec(e);let n=255,i;if(!t)return;t[5]!==i&&(n=t[6]?Ss(+t[5]):hr(+t[5]));const r=D4(+t[2]),o=+t[3]/100,a=+t[4]/100;return t[1]==="hwb"?i=sZ(r,o,a):t[1]==="hsv"?i=lZ(r,o,a):i=P1(r,o,a),{r:i[0],g:i[1],b:i[2],a:n}}function uZ(e,t){var n=k1(e);n[0]=D4(n[0]+t),n=P1(n),e.r=n[0],e.g=n[1],e.b=n[2]}function dZ(e){if(!e)return;const t=k1(e),n=t[0],i=qy(t[1]),r=qy(t[2]);return e.a<255?`hsla(${n}, ${i}%, ${r}%, ${bi(e.a)})`:`hsl(${n}, ${i}%, ${r}%)`}const Zy={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Jy={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function fZ(){const e={},t=Object.keys(Jy),n=Object.keys(Zy);let i,r,o,a,s;for(i=0;i<t.length;i++){for(a=s=t[i],r=0;r<n.length;r++)o=n[r],s=s.replace(o,Zy[o]);o=parseInt(Jy[a],16),e[s]=[o>>16&255,o>>8&255,o&255]}return e}let Ic;function pZ(e){Ic||(Ic=fZ(),Ic.transparent=[0,0,0,0]);const t=Ic[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const hZ=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function gZ(e){const t=hZ.exec(e);let n=255,i,r,o;if(t){if(t[7]!==i){const a=+t[7];n=t[8]?Ss(a):Qi(a*255,0,255)}return i=+t[1],r=+t[3],o=+t[5],i=255&(t[2]?Ss(i):Qi(i,0,255)),r=255&(t[4]?Ss(r):Qi(r,0,255)),o=255&(t[6]?Ss(o):Qi(o,0,255)),{r:i,g:r,b:o,a:n}}}function mZ(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${bi(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const $h=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Mo=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function xZ(e,t,n){const i=Mo(bi(e.r)),r=Mo(bi(e.g)),o=Mo(bi(e.b));return{r:hr($h(i+n*(Mo(bi(t.r))-i))),g:hr($h(r+n*(Mo(bi(t.g))-r))),b:hr($h(o+n*(Mo(bi(t.b))-o))),a:e.a+n*(t.a-e.a)}}function Lc(e,t,n){if(e){let i=k1(e);i[t]=Math.max(0,Math.min(i[t]+i[t]*n,t===0?360:1)),i=P1(i),e.r=i[0],e.g=i[1],e.b=i[2]}}function $4(e,t){return e&&Object.assign(t||{},e)}function Yy(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=hr(e[3]))):(t=$4(e,{r:0,g:0,b:0,a:1}),t.a=hr(t.a)),t}function vZ(e){return e.charAt(0)==="r"?gZ(e):cZ(e)}class Sl{constructor(t){if(t instanceof Sl)return t;const n=typeof t;let i;n==="object"?i=Yy(t):n==="string"&&(i=eZ(t)||pZ(t)||vZ(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=$4(this._rgb);return t&&(t.a=bi(t.a)),t}set rgb(t){this._rgb=Yy(t)}rgbString(){return this._valid?mZ(this._rgb):void 0}hexString(){return this._valid?nZ(this._rgb):void 0}hslString(){return this._valid?dZ(this._rgb):void 0}mix(t,n){if(t){const i=this.rgb,r=t.rgb;let o;const a=n===o?.5:n,s=2*a-1,l=i.a-r.a,c=((s*l===-1?s:(s+l)/(1+s*l))+1)/2;o=1-c,i.r=255&c*i.r+o*r.r+.5,i.g=255&c*i.g+o*r.g+.5,i.b=255&c*i.b+o*r.b+.5,i.a=a*i.a+(1-a)*r.a,this.rgb=i}return this}interpolate(t,n){return t&&(this._rgb=xZ(this._rgb,t._rgb,n)),this}clone(){return new Sl(this.rgb)}alpha(t){return this._rgb.a=hr(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=Ql(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Lc(this._rgb,2,t),this}darken(t){return Lc(this._rgb,2,-t),this}saturate(t){return Lc(this._rgb,1,t),this}desaturate(t){return Lc(this._rgb,1,-t),this}rotate(t){return uZ(this._rgb,t),this}}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function pi(){}const bZ=(()=>{let e=0;return()=>e++})();function $e(e){return e===null||typeof e>"u"}function Ze(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function we(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function rt(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function on(e,t){return rt(e)?e:t}function ve(e,t){return typeof e>"u"?t:e}const yZ=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,O4=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function He(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function Le(e,t,n,i){let r,o,a;if(Ze(e))if(o=e.length,i)for(r=o-1;r>=0;r--)t.call(n,e[r],r);else for(r=0;r<o;r++)t.call(n,e[r],r);else if(we(e))for(a=Object.keys(e),o=a.length,r=0;r<o;r++)t.call(n,e[a[r]],a[r])}function kd(e,t){let n,i,r,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,i=e.length;n<i;++n)if(r=e[n],o=t[n],r.datasetIndex!==o.datasetIndex||r.index!==o.index)return!1;return!0}function _d(e){if(Ze(e))return e.map(_d);if(we(e)){const t=Object.create(null),n=Object.keys(e),i=n.length;let r=0;for(;r<i;++r)t[n[r]]=_d(e[n[r]]);return t}return e}function T4(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function wZ(e,t,n,i){if(!T4(e))return;const r=t[e],o=n[e];we(r)&&we(o)?Fl(r,o,i):t[e]=_d(o)}function Fl(e,t,n){const i=Ze(t)?t:[t],r=i.length;if(!we(e))return e;n=n||{};const o=n.merger||wZ;let a;for(let s=0;s<r;++s){if(a=i[s],!we(a))continue;const l=Object.keys(a);for(let c=0,u=l.length;c<u;++c)o(l[c],e,a,n)}return e}function Hs(e,t){return Fl(e,t,{merger:CZ})}function CZ(e,t,n){if(!T4(e))return;const i=t[e],r=n[e];we(i)&&we(r)?Hs(i,r):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=_d(r))}const Gy={"":e=>e,x:e=>e.x,y:e=>e.y};function EZ(e){const t=e.split("."),n=[];let i="";for(const r of t)i+=r,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function SZ(e){const t=EZ(e);return n=>{for(const i of t){if(i==="")break;n=n&&n[i]}return n}}function xr(e,t){return(Gy[t]||(Gy[t]=SZ(t)))(e)}function A1(e){return e.charAt(0).toUpperCase()+e.slice(1)}const kl=e=>typeof e<"u",vr=e=>typeof e=="function",Ky=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function FZ(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const Ge=Math.PI,Ye=2*Ge,kZ=Ye+Ge,Pd=Number.POSITIVE_INFINITY,_Z=Ge/180,ut=Ge/2,Dr=Ge/4,Xy=Ge*2/3,er=Math.log10,li=Math.sign;function Us(e,t,n){return Math.abs(e-t)<n}function Qy(e){const t=Math.round(e);e=Us(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(er(e))),i=e/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function PZ(e){const t=[],n=Math.sqrt(e);let i;for(i=1;i<n;i++)e%i===0&&(t.push(i),t.push(e/i));return n===(n|0)&&t.push(n),t.sort((r,o)=>r-o).pop(),t}function Ca(e){return!isNaN(parseFloat(e))&&isFinite(e)}function AZ(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function M4(e,t,n){let i,r,o;for(i=0,r=e.length;i<r;i++)o=e[i][n],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function Vn(e){return e*(Ge/180)}function D1(e){return e*(180/Ge)}function e2(e){if(!rt(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function I4(e,t){const n=t.x-e.x,i=t.y-e.y,r=Math.sqrt(n*n+i*i);let o=Math.atan2(i,n);return o<-.5*Ge&&(o+=Ye),{angle:o,distance:r}}function Cg(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function DZ(e,t){return(e-t+kZ)%Ye-Ge}function sn(e){return(e%Ye+Ye)%Ye}function _l(e,t,n,i){const r=sn(e),o=sn(t),a=sn(n),s=sn(o-r),l=sn(a-r),c=sn(r-o),u=sn(r-a);return r===o||r===a||i&&o===a||s>l&&c<u}function Et(e,t,n){return Math.max(t,Math.min(n,e))}function $Z(e){return Et(e,-32768,32767)}function Ei(e,t,n,i=1e-6){return e>=Math.min(t,n)-i&&e<=Math.max(t,n)+i}function $1(e,t,n){n=n||(a=>e[a]<t);let i=e.length-1,r=0,o;for(;i-r>1;)o=r+i>>1,n(o)?r=o:i=o;return{lo:r,hi:i}}const Si=(e,t,n,i)=>$1(e,n,i?r=>{const o=e[r][t];return o<n||o===n&&e[r+1][t]===n}:r=>e[r][t]<n),OZ=(e,t,n)=>$1(e,n,i=>e[i][t]>=n);function TZ(e,t,n){let i=0,r=e.length;for(;i<r&&e[i]<t;)i++;for(;r>i&&e[r-1]>n;)r--;return i>0||r<e.length?e.slice(i,r):e}const L4=["push","pop","shift","splice","unshift"];function MZ(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),L4.forEach(n=>{const i="_onData"+A1(n),r=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...o){const a=r.apply(this,o);return e._chartjs.listeners.forEach(s=>{typeof s[i]=="function"&&s[i](...o)}),a}})})}function t2(e,t){const n=e._chartjs;if(!n)return;const i=n.listeners,r=i.indexOf(t);r!==-1&&i.splice(r,1),!(i.length>0)&&(L4.forEach(o=>{delete e[o]}),delete e._chartjs)}function R4(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const B4=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function z4(e,t){let n=[],i=!1;return function(...r){n=r,i||(i=!0,B4.call(window,()=>{i=!1,e.apply(t,n)}))}}function IZ(e,t){let n;return function(...i){return t?(clearTimeout(n),n=setTimeout(e,t,i)):e.apply(this,i),t}}const O1=e=>e==="start"?"left":e==="end"?"right":"center",It=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,LZ=(e,t,n,i)=>e===(i?"left":"right")?n:e==="center"?(t+n)/2:t;function N4(e,t,n){const i=t.length;let r=0,o=i;if(e._sorted){const{iScale:a,_parsed:s}=e,l=a.axis,{min:c,max:u,minDefined:f,maxDefined:p}=a.getUserBounds();f&&(r=Et(Math.min(Si(s,l,c).lo,n?i:Si(t,l,a.getPixelForValue(c)).lo),0,i-1)),p?o=Et(Math.max(Si(s,a.axis,u,!0).hi+1,n?0:Si(t,l,a.getPixelForValue(u),!0).hi+1),r,i)-r:o=i-r}return{start:r,count:o}}function V4(e){const{xScale:t,yScale:n,_scaleRanges:i}=e,r={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!i)return e._scaleRanges=r,!0;const o=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,r),o}const Rc=e=>e===0||e===1,n2=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Ye/n)),i2=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*Ye/n)+1,Ws={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*ut)+1,easeOutSine:e=>Math.sin(e*ut),easeInOutSine:e=>-.5*(Math.cos(Ge*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Rc(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Rc(e)?e:n2(e,.075,.3),easeOutElastic:e=>Rc(e)?e:i2(e,.075,.3),easeInOutElastic(e){return Rc(e)?e:e<.5?.5*n2(e*2,.1125,.45):.5+.5*i2(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Ws.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Ws.easeInBounce(e*2)*.5:Ws.easeOutBounce(e*2-1)*.5+.5};function T1(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function r2(e){return T1(e)?e:new Sl(e)}function Oh(e){return T1(e)?e:new Sl(e).saturate(.5).darken(.1).hexString()}const RZ=["x","y","borderWidth","radius","tension"],BZ=["color","borderColor","backgroundColor"];function zZ(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:BZ},numbers:{type:"number",properties:RZ}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function NZ(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const o2=new Map;function VZ(e,t){t=t||{};const n=e+JSON.stringify(t);let i=o2.get(n);return i||(i=new Intl.NumberFormat(e,t),o2.set(n,i)),i}function ec(e,t,n){return VZ(t,n).format(e)}const j4={values(e){return Ze(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const i=this.chart.options.locale;let r,o=e;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(r="scientific"),o=jZ(e,n)}const a=er(Math.abs(o)),s=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:r,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(l,this.options.ticks.format),ec(e,i,l)},logarithmic(e,t,n){if(e===0)return"0";const i=n[t].significand||e/Math.pow(10,Math.floor(er(e)));return[1,2,3,5,10,15].includes(i)||t>.8*n.length?j4.numeric.call(this,e,t,n):""}};function jZ(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var dp={formatters:j4};function HZ(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:dp.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const po=Object.create(null),Eg=Object.create(null);function qs(e,t){if(!t)return e;const n=t.split(".");for(let i=0,r=n.length;i<r;++i){const o=n[i];e=e[o]||(e[o]=Object.create(null))}return e}function Th(e,t,n){return typeof t=="string"?Fl(qs(e,t),n):Fl(qs(e,""),t)}class UZ{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,r)=>Oh(r.backgroundColor),this.hoverBorderColor=(i,r)=>Oh(r.borderColor),this.hoverColor=(i,r)=>Oh(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Th(this,t,n)}get(t){return qs(this,t)}describe(t,n){return Th(Eg,t,n)}override(t,n){return Th(po,t,n)}route(t,n,i,r){const o=qs(this,t),a=qs(this,i),s="_"+n;Object.defineProperties(o,{[s]:{value:o[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[s],c=a[r];return we(l)?Object.assign({},c,l):ve(l,c)},set(l){this[s]=l}}})}apply(t){t.forEach(n=>n(this))}}var ot=new UZ({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[zZ,NZ,HZ]);function WZ(e){return!e||$e(e.size)||$e(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Ad(e,t,n,i,r){let o=t[r];return o||(o=t[r]=e.measureText(r).width,n.push(r)),o>i&&(i=o),i}function qZ(e,t,n,i){i=i||{};let r=i.data=i.data||{},o=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(r=i.data={},o=i.garbageCollect=[],i.font=t),e.save(),e.font=t;let a=0;const s=n.length;let l,c,u,f,p;for(l=0;l<s;l++)if(f=n[l],f!=null&&!Ze(f))a=Ad(e,r,o,a,f);else if(Ze(f))for(c=0,u=f.length;c<u;c++)p=f[c],p!=null&&!Ze(p)&&(a=Ad(e,r,o,a,p));e.restore();const m=o.length/2;if(m>n.length){for(l=0;l<m;l++)delete r[o[l]];o.splice(0,m)}return a}function $r(e,t,n){const i=e.currentDevicePixelRatio,r=n!==0?Math.max(n/2,.5):0;return Math.round((t-r)*i)/i+r}function a2(e,t){t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore()}function Sg(e,t,n,i){H4(e,t,n,i,null)}function H4(e,t,n,i,r){let o,a,s,l,c,u,f,p;const m=t.pointStyle,g=t.rotation,x=t.radius;let y=(g||0)*_Z;if(m&&typeof m=="object"&&(o=m.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){e.save(),e.translate(n,i),e.rotate(y),e.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),e.restore();return}if(!(isNaN(x)||x<=0)){switch(e.beginPath(),m){default:r?e.ellipse(n,i,r/2,x,0,0,Ye):e.arc(n,i,x,0,Ye),e.closePath();break;case"triangle":u=r?r/2:x,e.moveTo(n+Math.sin(y)*u,i-Math.cos(y)*x),y+=Xy,e.lineTo(n+Math.sin(y)*u,i-Math.cos(y)*x),y+=Xy,e.lineTo(n+Math.sin(y)*u,i-Math.cos(y)*x),e.closePath();break;case"rectRounded":c=x*.516,l=x-c,a=Math.cos(y+Dr)*l,f=Math.cos(y+Dr)*(r?r/2-c:l),s=Math.sin(y+Dr)*l,p=Math.sin(y+Dr)*(r?r/2-c:l),e.arc(n-f,i-s,c,y-Ge,y-ut),e.arc(n+p,i-a,c,y-ut,y),e.arc(n+f,i+s,c,y,y+ut),e.arc(n-p,i+a,c,y+ut,y+Ge),e.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*x,u=r?r/2:l,e.rect(n-u,i-l,2*u,2*l);break}y+=Dr;case"rectRot":f=Math.cos(y)*(r?r/2:x),a=Math.cos(y)*x,s=Math.sin(y)*x,p=Math.sin(y)*(r?r/2:x),e.moveTo(n-f,i-s),e.lineTo(n+p,i-a),e.lineTo(n+f,i+s),e.lineTo(n-p,i+a),e.closePath();break;case"crossRot":y+=Dr;case"cross":f=Math.cos(y)*(r?r/2:x),a=Math.cos(y)*x,s=Math.sin(y)*x,p=Math.sin(y)*(r?r/2:x),e.moveTo(n-f,i-s),e.lineTo(n+f,i+s),e.moveTo(n+p,i-a),e.lineTo(n-p,i+a);break;case"star":f=Math.cos(y)*(r?r/2:x),a=Math.cos(y)*x,s=Math.sin(y)*x,p=Math.sin(y)*(r?r/2:x),e.moveTo(n-f,i-s),e.lineTo(n+f,i+s),e.moveTo(n+p,i-a),e.lineTo(n-p,i+a),y+=Dr,f=Math.cos(y)*(r?r/2:x),a=Math.cos(y)*x,s=Math.sin(y)*x,p=Math.sin(y)*(r?r/2:x),e.moveTo(n-f,i-s),e.lineTo(n+f,i+s),e.moveTo(n+p,i-a),e.lineTo(n-p,i+a);break;case"line":a=r?r/2:Math.cos(y)*x,s=Math.sin(y)*x,e.moveTo(n-a,i-s),e.lineTo(n+a,i+s);break;case"dash":e.moveTo(n,i),e.lineTo(n+Math.cos(y)*(r?r/2:x),i+Math.sin(y)*x);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function Fi(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function fp(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function pp(e){e.restore()}function ZZ(e,t,n,i,r){if(!t)return e.lineTo(n.x,n.y);if(r==="middle"){const o=(t.x+n.x)/2;e.lineTo(o,t.y),e.lineTo(o,n.y)}else r==="after"!=!!i?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function JZ(e,t,n,i){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function YZ(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),$e(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function GZ(e,t,n,i,r){if(r.strikethrough||r.underline){const o=e.measureText(i),a=t-o.actualBoundingBoxLeft,s=t+o.actualBoundingBoxRight,l=n-o.actualBoundingBoxAscent,c=n+o.actualBoundingBoxDescent,u=r.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=r.decorationWidth||2,e.moveTo(a,u),e.lineTo(s,u),e.stroke()}}function KZ(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function ho(e,t,n,i,r,o={}){const a=Ze(t)?t:[t],s=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(e.save(),e.font=r.string,YZ(e,o),l=0;l<a.length;++l)c=a[l],o.backdrop&&KZ(e,o.backdrop),s&&(o.strokeColor&&(e.strokeStyle=o.strokeColor),$e(o.strokeWidth)||(e.lineWidth=o.strokeWidth),e.strokeText(c,n,i,o.maxWidth)),e.fillText(c,n,i,o.maxWidth),GZ(e,n,i,c,o),i+=Number(r.lineHeight);e.restore()}function Pl(e,t){const{x:n,y:i,w:r,h:o,radius:a}=t;e.arc(n+a.topLeft,i+a.topLeft,a.topLeft,1.5*Ge,Ge,!0),e.lineTo(n,i+o-a.bottomLeft),e.arc(n+a.bottomLeft,i+o-a.bottomLeft,a.bottomLeft,Ge,ut,!0),e.lineTo(n+r-a.bottomRight,i+o),e.arc(n+r-a.bottomRight,i+o-a.bottomRight,a.bottomRight,ut,0,!0),e.lineTo(n+r,i+a.topRight),e.arc(n+r-a.topRight,i+a.topRight,a.topRight,0,-ut,!0),e.lineTo(n+a.topLeft,i)}const XZ=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,QZ=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function eJ(e,t){const n=(""+e).match(XZ);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const tJ=e=>+e||0;function M1(e,t){const n={},i=we(t),r=i?Object.keys(t):t,o=we(e)?i?a=>ve(e[a],e[t[a]]):a=>e[a]:()=>e;for(const a of r)n[a]=tJ(o(a));return n}function U4(e){return M1(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Gr(e){return M1(e,["topLeft","topRight","bottomLeft","bottomRight"])}function Nt(e){const t=U4(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function vt(e,t){e=e||{},t=t||ot.font;let n=ve(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let i=ve(e.style,t.style);i&&!(""+i).match(QZ)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const r={family:ve(e.family,t.family),lineHeight:eJ(ve(e.lineHeight,t.lineHeight),n),size:n,style:i,weight:ve(e.weight,t.weight),string:""};return r.string=WZ(r),r}function Fs(e,t,n,i){let r=!0,o,a,s;for(o=0,a=e.length;o<a;++o)if(s=e[o],s!==void 0&&(t!==void 0&&typeof s=="function"&&(s=s(t),r=!1),n!==void 0&&Ze(s)&&(s=s[n%s.length],r=!1),s!==void 0))return i&&!r&&(i.cacheable=!1),s}function nJ(e,t,n){const{min:i,max:r}=e,o=O4(t,(r-i)/2),a=(s,l)=>n&&s===0?0:s+l;return{min:a(i,-Math.abs(o)),max:a(r,o)}}function Sr(e,t){return Object.assign(Object.create(e),t)}function I1(e,t=[""],n,i,r=()=>e[0]){const o=n||e;typeof i>"u"&&(i=J4("_fallback",e));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:o,_fallback:i,_getTarget:r,override:s=>I1([s,...e],t,o,i)};return new Proxy(a,{deleteProperty(s,l){return delete s[l],delete s._keys,delete e[0][l],!0},get(s,l){return q4(s,l,()=>uJ(l,t,e,s))},getOwnPropertyDescriptor(s,l){return Reflect.getOwnPropertyDescriptor(s._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(s,l){return l2(s).includes(l)},ownKeys(s){return l2(s)},set(s,l,c){const u=s._storage||(s._storage=r());return s[l]=u[l]=c,delete s._keys,!0}})}function Ea(e,t,n,i){const r={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:W4(e,i),setContext:o=>Ea(e,o,n,i),override:o=>Ea(e.override(o),t,n,i)};return new Proxy(r,{deleteProperty(o,a){return delete o[a],delete e[a],!0},get(o,a,s){return q4(o,a,()=>rJ(o,a,s))},getOwnPropertyDescriptor(o,a){return o._descriptors.allKeys?Reflect.has(e,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,a)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(o,a){return Reflect.has(e,a)},ownKeys(){return Reflect.ownKeys(e)},set(o,a,s){return e[a]=s,delete o[a],!0}})}function W4(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:i=t.indexable,_allKeys:r=t.allKeys}=e;return{allKeys:r,scriptable:n,indexable:i,isScriptable:vr(n)?n:()=>n,isIndexable:vr(i)?i:()=>i}}const iJ=(e,t)=>e?e+A1(t):t,L1=(e,t)=>we(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function q4(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];const i=n();return e[t]=i,i}function rJ(e,t,n){const{_proxy:i,_context:r,_subProxy:o,_descriptors:a}=e;let s=i[t];return vr(s)&&a.isScriptable(t)&&(s=oJ(t,s,e,n)),Ze(s)&&s.length&&(s=aJ(t,s,e,a.isIndexable)),L1(t,s)&&(s=Ea(s,r,o&&o[t],a)),s}function oJ(e,t,n,i){const{_proxy:r,_context:o,_subProxy:a,_stack:s}=n;if(s.has(e))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+e);s.add(e);let l=t(o,a||i);return s.delete(e),L1(e,l)&&(l=R1(r._scopes,r,e,l)),l}function aJ(e,t,n,i){const{_proxy:r,_context:o,_subProxy:a,_descriptors:s}=n;if(typeof o.index<"u"&&i(e))return t[o.index%t.length];if(we(t[0])){const l=t,c=r._scopes.filter(u=>u!==l);t=[];for(const u of l){const f=R1(c,r,e,u);t.push(Ea(f,o,a&&a[e],s))}}return t}function Z4(e,t,n){return vr(e)?e(t,n):e}const sJ=(e,t)=>e===!0?t:typeof e=="string"?xr(t,e):void 0;function lJ(e,t,n,i,r){for(const o of t){const a=sJ(n,o);if(a){e.add(a);const s=Z4(a._fallback,n,r);if(typeof s<"u"&&s!==n&&s!==i)return s}else if(a===!1&&typeof i<"u"&&n!==i)return null}return!1}function R1(e,t,n,i){const r=t._rootScopes,o=Z4(t._fallback,n,i),a=[...e,...r],s=new Set;s.add(i);let l=s2(s,a,n,o||n,i);return l===null||typeof o<"u"&&o!==n&&(l=s2(s,a,o,l,i),l===null)?!1:I1(Array.from(s),[""],r,o,()=>cJ(t,n,i))}function s2(e,t,n,i,r){for(;n;)n=lJ(e,t,n,i,r);return n}function cJ(e,t,n){const i=e._getTarget();t in i||(i[t]={});const r=i[t];return Ze(r)&&we(n)?n:r||{}}function uJ(e,t,n,i){let r;for(const o of t)if(r=J4(iJ(o,e),n),typeof r<"u")return L1(e,r)?R1(n,i,e,r):r}function J4(e,t){for(const n of t){if(!n)continue;const i=n[e];if(typeof i<"u")return i}}function l2(e){let t=e._keys;return t||(t=e._keys=dJ(e._scopes)),t}function dJ(e){const t=new Set;for(const n of e)for(const i of Object.keys(n).filter(r=>!r.startsWith("_")))t.add(i);return Array.from(t)}function Y4(e,t,n,i){const{iScale:r}=e,{key:o="r"}=this._parsing,a=new Array(i);let s,l,c,u;for(s=0,l=i;s<l;++s)c=s+n,u=t[c],a[s]={r:r.parse(xr(u,o),c)};return a}const fJ=Number.EPSILON||1e-14,Sa=(e,t)=>t<e.length&&!e[t].skip&&e[t],G4=e=>e==="x"?"y":"x";function pJ(e,t,n,i){const r=e.skip?t:e,o=t,a=n.skip?t:n,s=Cg(o,r),l=Cg(a,o);let c=s/(s+l),u=l/(s+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const f=i*c,p=i*u;return{previous:{x:o.x-f*(a.x-r.x),y:o.y-f*(a.y-r.y)},next:{x:o.x+p*(a.x-r.x),y:o.y+p*(a.y-r.y)}}}function hJ(e,t,n){const i=e.length;let r,o,a,s,l,c=Sa(e,0);for(let u=0;u<i-1;++u)if(l=c,c=Sa(e,u+1),!(!l||!c)){if(Us(t[u],0,fJ)){n[u]=n[u+1]=0;continue}r=n[u]/t[u],o=n[u+1]/t[u],s=Math.pow(r,2)+Math.pow(o,2),!(s<=9)&&(a=3/Math.sqrt(s),n[u]=r*a*t[u],n[u+1]=o*a*t[u])}}function gJ(e,t,n="x"){const i=G4(n),r=e.length;let o,a,s,l=Sa(e,0);for(let c=0;c<r;++c){if(a=s,s=l,l=Sa(e,c+1),!s)continue;const u=s[n],f=s[i];a&&(o=(u-a[n])/3,s[`cp1${n}`]=u-o,s[`cp1${i}`]=f-o*t[c]),l&&(o=(l[n]-u)/3,s[`cp2${n}`]=u+o,s[`cp2${i}`]=f+o*t[c])}}function mJ(e,t="x"){const n=G4(t),i=e.length,r=Array(i).fill(0),o=Array(i);let a,s,l,c=Sa(e,0);for(a=0;a<i;++a)if(s=l,l=c,c=Sa(e,a+1),!!l){if(c){const u=c[t]-l[t];r[a]=u!==0?(c[n]-l[n])/u:0}o[a]=s?c?li(r[a-1])!==li(r[a])?0:(r[a-1]+r[a])/2:r[a-1]:r[a]}hJ(e,r,o),gJ(e,o,t)}function Bc(e,t,n){return Math.max(Math.min(e,n),t)}function xJ(e,t){let n,i,r,o,a,s=Fi(e[0],t);for(n=0,i=e.length;n<i;++n)a=o,o=s,s=n<i-1&&Fi(e[n+1],t),o&&(r=e[n],a&&(r.cp1x=Bc(r.cp1x,t.left,t.right),r.cp1y=Bc(r.cp1y,t.top,t.bottom)),s&&(r.cp2x=Bc(r.cp2x,t.left,t.right),r.cp2y=Bc(r.cp2y,t.top,t.bottom)))}function vJ(e,t,n,i,r){let o,a,s,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")mJ(e,r);else{let c=i?e[e.length-1]:e[0];for(o=0,a=e.length;o<a;++o)s=e[o],l=pJ(c,s,e[Math.min(o+1,a-(i?0:1))%a],t.tension),s.cp1x=l.previous.x,s.cp1y=l.previous.y,s.cp2x=l.next.x,s.cp2y=l.next.y,c=s}t.capBezierPoints&&xJ(e,n)}function K4(){return typeof window<"u"&&typeof document<"u"}function B1(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Dd(e,t,n){let i;return typeof e=="string"?(i=parseInt(e,10),e.indexOf("%")!==-1&&(i=i/100*t.parentNode[n])):i=e,i}const hp=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function bJ(e,t){return hp(e).getPropertyValue(t)}const yJ=["top","right","bottom","left"];function Kr(e,t,n){const i={};n=n?"-"+n:"";for(let r=0;r<4;r++){const o=yJ[r];i[o]=parseFloat(e[t+"-"+o+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const wJ=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function CJ(e,t){const n=e.touches,i=n&&n.length?n[0]:e,{offsetX:r,offsetY:o}=i;let a=!1,s,l;if(wJ(r,o,e.target))s=r,l=o;else{const c=t.getBoundingClientRect();s=i.clientX-c.left,l=i.clientY-c.top,a=!0}return{x:s,y:l,box:a}}function Br(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:i}=t,r=hp(n),o=r.boxSizing==="border-box",a=Kr(r,"padding"),s=Kr(r,"border","width"),{x:l,y:c,box:u}=CJ(e,n),f=a.left+(u&&s.left),p=a.top+(u&&s.top);let{width:m,height:g}=t;return o&&(m-=a.width+s.width,g-=a.height+s.height),{x:Math.round((l-f)/m*n.width/i),y:Math.round((c-p)/g*n.height/i)}}function EJ(e,t,n){let i,r;if(t===void 0||n===void 0){const o=B1(e);if(!o)t=e.clientWidth,n=e.clientHeight;else{const a=o.getBoundingClientRect(),s=hp(o),l=Kr(s,"border","width"),c=Kr(s,"padding");t=a.width-c.width-l.width,n=a.height-c.height-l.height,i=Dd(s.maxWidth,o,"clientWidth"),r=Dd(s.maxHeight,o,"clientHeight")}}return{width:t,height:n,maxWidth:i||Pd,maxHeight:r||Pd}}const zc=e=>Math.round(e*10)/10;function SJ(e,t,n,i){const r=hp(e),o=Kr(r,"margin"),a=Dd(r.maxWidth,e,"clientWidth")||Pd,s=Dd(r.maxHeight,e,"clientHeight")||Pd,l=EJ(e,t,n);let{width:c,height:u}=l;if(r.boxSizing==="content-box"){const p=Kr(r,"border","width"),m=Kr(r,"padding");c-=m.width+p.width,u-=m.height+p.height}return c=Math.max(0,c-o.width),u=Math.max(0,i?c/i:u-o.height),c=zc(Math.min(c,a,l.maxWidth)),u=zc(Math.min(u,s,l.maxHeight)),c&&!u&&(u=zc(c/2)),(t!==void 0||n!==void 0)&&i&&l.height&&u>l.height&&(u=l.height,c=zc(Math.floor(u*i))),{width:c,height:u}}function c2(e,t,n){const i=t||1,r=Math.floor(e.height*i),o=Math.floor(e.width*i);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const a=e.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${e.height}px`,a.style.width=`${e.width}px`),e.currentDevicePixelRatio!==i||a.height!==r||a.width!==o?(e.currentDevicePixelRatio=i,a.height=r,a.width=o,e.ctx.setTransform(i,0,0,i,0,0),!0):!1}const FJ=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e}();function u2(e,t){const n=bJ(e,t),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function zr(e,t,n,i){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function kJ(e,t,n,i){return{x:e.x+n*(t.x-e.x),y:i==="middle"?n<.5?e.y:t.y:i==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function _J(e,t,n,i){const r={x:e.cp2x,y:e.cp2y},o={x:t.cp1x,y:t.cp1y},a=zr(e,r,n),s=zr(r,o,n),l=zr(o,t,n),c=zr(a,s,n),u=zr(s,l,n);return zr(c,u,n)}const PJ=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},AJ=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function ca(e,t,n){return e?PJ(t,n):AJ()}function X4(e,t){let n,i;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=i)}function Q4(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function eF(e){return e==="angle"?{between:_l,compare:DZ,normalize:sn}:{between:Ei,compare:(t,n)=>t-n,normalize:t=>t}}function d2({start:e,end:t,count:n,loop:i,style:r}){return{start:e%n,end:t%n,loop:i&&(t-e+1)%n===0,style:r}}function DJ(e,t,n){const{property:i,start:r,end:o}=n,{between:a,normalize:s}=eF(i),l=t.length;let{start:c,end:u,loop:f}=e,p,m;if(f){for(c+=l,u+=l,p=0,m=l;p<m&&a(s(t[c%l][i]),r,o);++p)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:f,style:e.style}}function tF(e,t,n){if(!n)return[e];const{property:i,start:r,end:o}=n,a=t.length,{compare:s,between:l,normalize:c}=eF(i),{start:u,end:f,loop:p,style:m}=DJ(e,t,n),g=[];let x=!1,y=null,v,b,E;const S=()=>l(r,E,v)&&s(r,E)!==0,F=()=>s(o,v)===0||l(o,E,v),P=()=>x||S(),k=()=>!x||F();for(let _=u,D=u;_<=f;++_)b=t[_%a],!b.skip&&(v=c(b[i]),v!==E&&(x=l(v,r,o),y===null&&P()&&(y=s(v,r)===0?_:D),y!==null&&k()&&(g.push(d2({start:y,end:_,loop:p,count:a,style:m})),y=null),D=_,E=v));return y!==null&&g.push(d2({start:y,end:f,loop:p,count:a,style:m})),g}function nF(e,t){const n=[],i=e.segments;for(let r=0;r<i.length;r++){const o=tF(i[r],e.points,t);o.length&&n.push(...o)}return n}function $J(e,t,n,i){let r=0,o=t-1;if(n&&!i)for(;r<t&&!e[r].skip;)r++;for(;r<t&&e[r].skip;)r++;for(r%=t,n&&(o+=r);o>r&&e[o%t].skip;)o--;return o%=t,{start:r,end:o}}function OJ(e,t,n,i){const r=e.length,o=[];let a=t,s=e[t],l;for(l=t+1;l<=n;++l){const c=e[l%r];c.skip||c.stop?s.skip||(i=!1,o.push({start:t%r,end:(l-1)%r,loop:i}),t=a=c.stop?l:null):(a=l,s.skip&&(t=l)),s=c}return a!==null&&o.push({start:t%r,end:a%r,loop:i}),o}function TJ(e,t){const n=e.points,i=e.options.spanGaps,r=n.length;if(!r)return[];const o=!!e._loop,{start:a,end:s}=$J(n,r,o,i);if(i===!0)return f2(e,[{start:a,end:s,loop:o}],n,t);const l=s<a?s+r:s,c=!!e._fullLoop&&a===0&&s===r-1;return f2(e,OJ(n,a,l,c),n,t)}function f2(e,t,n,i){return!i||!i.setContext||!n?t:MJ(e,t,n,i)}function MJ(e,t,n,i){const r=e._chart.getContext(),o=p2(e.options),{_datasetIndex:a,options:{spanGaps:s}}=e,l=n.length,c=[];let u=o,f=t[0].start,p=f;function m(g,x,y,v){const b=s?-1:1;if(g!==x){for(g+=l;n[g%l].skip;)g-=b;for(;n[x%l].skip;)x+=b;g%l!==x%l&&(c.push({start:g%l,end:x%l,loop:y,style:v}),u=v,f=x%l)}}for(const g of t){f=s?f:g.start;let x=n[f%l],y;for(p=f+1;p<=g.end;p++){const v=n[p%l];y=p2(i.setContext(Sr(r,{type:"segment",p0:x,p1:v,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:a}))),IJ(y,u)&&m(f,p-1,g.loop,u),x=v,u=y}f<p-1&&m(f,p-1,g.loop,u)}return c}function p2(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function IJ(e,t){if(!t)return!1;const n=[],i=function(r,o){return T1(o)?(n.includes(o)||n.push(o),n.indexOf(o)):o};return JSON.stringify(e,i)!==JSON.stringify(t,i)}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class LJ{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,i,r){const o=n.listeners[r],a=n.duration;o.forEach(s=>s({chart:t,initial:n.initial,numSteps:a,currentStep:Math.min(i-n.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=B4.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((i,r)=>{if(!i.running||!i.items.length)return;const o=i.items;let a=o.length-1,s=!1,l;for(;a>=0;--a)l=o[a],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(t),s=!0):(o[a]=o[o.length-1],o.pop());s&&(r.draw(),this._notify(r,i,t,"progress")),o.length||(i.running=!1,this._notify(r,i,t,"complete"),i.initial=!1),n+=o.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let i=n.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,i)),i}listen(t,n,i){this._getAnims(t).listeners[n].push(i)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,r)=>Math.max(i,r._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const i=n.items;let r=i.length-1;for(;r>=0;--r)i[r].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var hi=new LJ;const h2="transparent",RJ={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const i=r2(e||h2),r=i.valid&&r2(t||h2);return r&&r.valid?r.mix(i,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class BJ{constructor(t,n,i,r){const o=n[i];r=Fs([t.to,r,o,t.from]);const a=Fs([t.from,o,r]);this._active=!0,this._fn=t.fn||RJ[t.type||typeof a],this._easing=Ws[t.easing]||Ws.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=i,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(t,n,i){if(this._active){this._notify(!1);const r=this._target[this._prop],o=i-this._start,a=this._duration-o;this._start=i,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Fs([t.to,n,r,t.from]),this._from=Fs([t.from,r,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,i=this._duration,r=this._prop,o=this._from,a=this._loop,s=this._to;let l;if(this._active=o!==s&&(a||n<i),!this._active){this._target[r]=s,this._notify(!0);return}if(n<0){this._target[r]=o;return}l=n/i%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[r]=this._fn(o,s,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,i)=>{t.push({res:n,rej:i})})}_notify(t){const n=t?"res":"rej",i=this._promises||[];for(let r=0;r<i.length;r++)i[r][n]()}}class iF{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!we(t))return;const n=Object.keys(ot.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(r=>{const o=t[r];if(!we(o))return;const a={};for(const s of n)a[s]=o[s];(Ze(o.properties)&&o.properties||[r]).forEach(s=>{(s===r||!i.has(s))&&i.set(s,a)})})}_animateOptions(t,n){const i=n.options,r=NJ(t,i);if(!r)return[];const o=this._createAnimations(r,i);return i.$shared&&zJ(t.options.$animations,i).then(()=>{t.options=i},()=>{}),o}_createAnimations(t,n){const i=this._properties,r=[],o=t.$animations||(t.$animations={}),a=Object.keys(n),s=Date.now();let l;for(l=a.length-1;l>=0;--l){const c=a[l];if(c.charAt(0)==="$")continue;if(c==="options"){r.push(...this._animateOptions(t,n));continue}const u=n[c];let f=o[c];const p=i.get(c);if(f)if(p&&f.active()){f.update(p,u,s);continue}else f.cancel();if(!p||!p.duration){t[c]=u;continue}o[c]=f=new BJ(p,t,c,u),r.push(f)}return r}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const i=this._createAnimations(t,n);if(i.length)return hi.add(this._chart,i),!0}}function zJ(e,t){const n=[],i=Object.keys(t);for(let r=0;r<i.length;r++){const o=e[i[r]];o&&o.active()&&n.push(o.wait())}return Promise.all(n)}function NJ(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function g2(e,t){const n=e&&e.options||{},i=n.reverse,r=n.min===void 0?t:0,o=n.max===void 0?t:0;return{start:i?o:r,end:i?r:o}}function VJ(e,t,n){if(n===!1)return!1;const i=g2(e,n),r=g2(t,n);return{top:r.end,right:i.end,bottom:r.start,left:i.start}}function jJ(e){let t,n,i,r;return we(e)?(t=e.top,n=e.right,i=e.bottom,r=e.left):t=n=i=r=e,{top:t,right:n,bottom:i,left:r,disabled:e===!1}}function rF(e,t){const n=[],i=e._getSortedDatasetMetas(t);let r,o;for(r=0,o=i.length;r<o;++r)n.push(i[r].index);return n}function m2(e,t,n,i={}){const r=e.keys,o=i.mode==="single";let a,s,l,c;if(t!==null){for(a=0,s=r.length;a<s;++a){if(l=+r[a],l===n){if(i.all)continue;break}c=e.values[l],rt(c)&&(o||t===0||li(t)===li(c))&&(t+=c)}return t}}function HJ(e){const t=Object.keys(e),n=new Array(t.length);let i,r,o;for(i=0,r=t.length;i<r;++i)o=t[i],n[i]={x:o,y:e[o]};return n}function x2(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function UJ(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function WJ(e){const{min:t,max:n,minDefined:i,maxDefined:r}=e.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}function qJ(e,t,n){const i=e[t]||(e[t]={});return i[n]||(i[n]={})}function v2(e,t,n,i){for(const r of t.getMatchingVisibleMetas(i).reverse()){const o=e[r.index];if(n&&o>0||!n&&o<0)return r.index}return null}function b2(e,t){const{chart:n,_cachedMeta:i}=e,r=n._stacks||(n._stacks={}),{iScale:o,vScale:a,index:s}=i,l=o.axis,c=a.axis,u=UJ(o,a,i),f=t.length;let p;for(let m=0;m<f;++m){const g=t[m],{[l]:x,[c]:y}=g,v=g._stacks||(g._stacks={});p=v[c]=qJ(r,u,x),p[s]=y,p._top=v2(p,a,!0,i.type),p._bottom=v2(p,a,!1,i.type);const b=p._visualValues||(p._visualValues={});b[s]=y}}function Mh(e,t){const n=e.scales;return Object.keys(n).filter(i=>n[i].axis===t).shift()}function ZJ(e,t){return Sr(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function JJ(e,t,n){return Sr(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function as(e,t){const n=e.controller.index,i=e.vScale&&e.vScale.axis;if(i){t=t||e._parsed;for(const r of t){const o=r._stacks;if(!o||o[i]===void 0||o[i][n]===void 0)return;delete o[i][n],o[i]._visualValues!==void 0&&o[i]._visualValues[n]!==void 0&&delete o[i]._visualValues[n]}}}const Ih=e=>e==="reset"||e==="none",y2=(e,t)=>t?e:Object.assign({},e),YJ=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:rF(n,!0),values:null};class Un{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=x2(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&as(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,i=this.getDataset(),r=(f,p,m,g)=>f==="x"?p:f==="r"?g:m,o=n.xAxisID=ve(i.xAxisID,Mh(t,"x")),a=n.yAxisID=ve(i.yAxisID,Mh(t,"y")),s=n.rAxisID=ve(i.rAxisID,Mh(t,"r")),l=n.indexAxis,c=n.iAxisID=r(l,o,a,s),u=n.vAxisID=r(l,a,o,s);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(a),n.rScale=this.getScaleForId(s),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&t2(this._data,this),t._stacked&&as(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),i=this._data;if(we(n))this._data=HJ(n);else if(i!==n){if(i){t2(i,this);const r=this._cachedMeta;as(r),r._parsed=[]}n&&Object.isExtensible(n)&&MZ(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,i=this.getDataset();let r=!1;this._dataCheck();const o=n._stacked;n._stacked=x2(n.vScale,n),n.stack!==i.stack&&(r=!0,as(n),n.stack=i.stack),this._resyncElements(t),(r||o!==n._stacked)&&b2(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:i,_data:r}=this,{iScale:o,_stacked:a}=i,s=o.axis;let l=t===0&&n===r.length?!0:i._sorted,c=t>0&&i._parsed[t-1],u,f,p;if(this._parsing===!1)i._parsed=r,i._sorted=!0,p=r;else{Ze(r[t])?p=this.parseArrayData(i,r,t,n):we(r[t])?p=this.parseObjectData(i,r,t,n):p=this.parsePrimitiveData(i,r,t,n);const m=()=>f[s]===null||c&&f[s]<c[s];for(u=0;u<n;++u)i._parsed[u+t]=f=p[u],l&&(m()&&(l=!1),c=f);i._sorted=l}a&&b2(this,p)}parsePrimitiveData(t,n,i,r){const{iScale:o,vScale:a}=t,s=o.axis,l=a.axis,c=o.getLabels(),u=o===a,f=new Array(r);let p,m,g;for(p=0,m=r;p<m;++p)g=p+i,f[p]={[s]:u||o.parse(c[g],g),[l]:a.parse(n[g],g)};return f}parseArrayData(t,n,i,r){const{xScale:o,yScale:a}=t,s=new Array(r);let l,c,u,f;for(l=0,c=r;l<c;++l)u=l+i,f=n[u],s[l]={x:o.parse(f[0],u),y:a.parse(f[1],u)};return s}parseObjectData(t,n,i,r){const{xScale:o,yScale:a}=t,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,c=new Array(r);let u,f,p,m;for(u=0,f=r;u<f;++u)p=u+i,m=n[p],c[u]={x:o.parse(xr(m,s),p),y:a.parse(xr(m,l),p)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,i){const r=this.chart,o=this._cachedMeta,a=n[t.axis],s={keys:rF(r,!0),values:n._stacks[t.axis]._visualValues};return m2(s,a,o.index,{mode:i})}updateRangeFromParsed(t,n,i,r){const o=i[n.axis];let a=o===null?NaN:o;const s=r&&i._stacks[n.axis];r&&s&&(r.values=s,a=m2(r,o,this._cachedMeta.index)),t.min=Math.min(t.min,a),t.max=Math.max(t.max,a)}getMinMax(t,n){const i=this._cachedMeta,r=i._parsed,o=i._sorted&&t===i.iScale,a=r.length,s=this._getOtherScale(t),l=YJ(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:f}=WJ(s);let p,m;function g(){m=r[p];const x=m[s.axis];return!rt(m[t.axis])||u>x||f<x}for(p=0;p<a&&!(!g()&&(this.updateRangeFromParsed(c,t,m,l),o));++p);if(o){for(p=a-1;p>=0;--p)if(!g()){this.updateRangeFromParsed(c,t,m,l);break}}return c}getAllParsedValues(t){const n=this._cachedMeta._parsed,i=[];let r,o,a;for(r=0,o=n.length;r<o;++r)a=n[r][t.axis],rt(a)&&i.push(a);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,i=n.iScale,r=n.vScale,o=this.getParsed(t);return{label:i?""+i.getLabelForValue(o[i.axis]):"",value:r?""+r.getLabelForValue(o[r.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=jJ(ve(this.options.clip,VJ(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,i=this._cachedMeta,r=i.data||[],o=n.chartArea,a=[],s=this._drawStart||0,l=this._drawCount||r.length-s,c=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(t,o,s,l),u=s;u<s+l;++u){const f=r[u];f.hidden||(f.active&&c?a.push(f):f.draw(t,o))}for(u=0;u<a.length;++u)a[u].draw(t,o)}getStyle(t,n){const i=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,n,i){const r=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const a=this._cachedMeta.data[t];o=a.$context||(a.$context=JJ(this.getContext(),t,a)),o.parsed=this.getParsed(t),o.raw=r.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=ZJ(this.chart.getContext(),this.index)),o.dataset=r,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=i,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",i){const r=n==="active",o=this._cachedDataOpts,a=t+"-"+n,s=o[a],l=this.enableOptionSharing&&kl(i);if(s)return y2(s,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),f=r?[`${t}Hover`,"hover",t,""]:[t,""],p=c.getOptionScopes(this.getDataset(),u),m=Object.keys(ot.elements[t]),g=()=>this.getContext(i,r,n),x=c.resolveNamedOptions(p,m,g,f);return x.$shared&&(x.$shared=l,o[a]=Object.freeze(y2(x,l))),x}_resolveAnimations(t,n,i){const r=this.chart,o=this._cachedDataOpts,a=`animation-${n}`,s=o[a];if(s)return s;let l;if(r.options.animation!==!1){const u=this.chart.config,f=u.datasetAnimationScopeKeys(this._type,n),p=u.getOptionScopes(this.getDataset(),f);l=u.createResolver(p,this.getContext(t,i,n))}const c=new iF(r,l&&l.animations);return l&&l._cacheable&&(o[a]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Ih(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const i=this.resolveDataElementOptions(t,n),r=this._sharedOptions,o=this.getSharedOptions(i),a=this.includeOptions(n,o)||o!==r;return this.updateSharedOptions(o,n,i),{sharedOptions:o,includeOptions:a}}updateElement(t,n,i,r){Ih(r)?Object.assign(t,i):this._resolveAnimations(n,r).update(t,i)}updateSharedOptions(t,n,i){t&&!Ih(n)&&this._resolveAnimations(void 0,n).update(t,i)}_setStyle(t,n,i,r){t.active=r;const o=this.getStyle(n,r);this._resolveAnimations(n,i,r).update(t,{options:!r&&this.getSharedOptions(o)||o})}removeHoverStyle(t,n,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,n,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,i=this._cachedMeta.data;for(const[s,l,c]of this._syncList)this[s](l,c);this._syncList=[];const r=i.length,o=n.length,a=Math.min(o,r);a&&this.parse(0,a),o>r?this._insertElements(r,o-r,t):o<r&&this._removeElements(o,r-o)}_insertElements(t,n,i=!0){const r=this._cachedMeta,o=r.data,a=t+n;let s;const l=c=>{for(c.length+=n,s=c.length-1;s>=a;s--)c[s]=c[s-n]};for(l(o),s=t;s<a;++s)o[s]=new this.dataElementType;this._parsing&&l(r._parsed),this.parse(t,n),i&&this.updateElements(o,t,n,"reset")}updateElements(t,n,i,r){}_removeElements(t,n){const i=this._cachedMeta;if(this._parsing){const r=i._parsed.splice(t,n);i._stacked&&as(i,r)}i.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,i,r]=t;this[n](i,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}te(Un,"defaults",{}),te(Un,"datasetElementType",null),te(Un,"dataElementType",null);function GJ(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let i=[];for(let r=0,o=n.length;r<o;r++)i=i.concat(n[r].controller.getAllParsedValues(e));e._cache.$bar=R4(i.sort((r,o)=>r-o))}return e._cache.$bar}function KJ(e){const t=e.iScale,n=GJ(t,e.type);let i=t._length,r,o,a,s;const l=()=>{a===32767||a===-32768||(kl(s)&&(i=Math.min(i,Math.abs(a-s)||i)),s=a)};for(r=0,o=n.length;r<o;++r)a=t.getPixelForValue(n[r]),l();for(s=void 0,r=0,o=t.ticks.length;r<o;++r)a=t.getPixelForTick(r),l();return i}function XJ(e,t,n,i){const r=n.barThickness;let o,a;return $e(r)?(o=t.min*n.categoryPercentage,a=n.barPercentage):(o=r*i,a=1),{chunk:o/i,ratio:a,start:t.pixels[e]-o/2}}function QJ(e,t,n,i){const r=t.pixels,o=r[e];let a=e>0?r[e-1]:null,s=e<r.length-1?r[e+1]:null;const l=n.categoryPercentage;a===null&&(a=o-(s===null?t.end-t.start:s-o)),s===null&&(s=o+o-a);const c=o-(o-Math.min(a,s))/2*l;return{chunk:Math.abs(s-a)/2*l/i,ratio:n.barPercentage,start:c}}function eY(e,t,n,i){const r=n.parse(e[0],i),o=n.parse(e[1],i),a=Math.min(r,o),s=Math.max(r,o);let l=a,c=s;Math.abs(a)>Math.abs(s)&&(l=s,c=a),t[n.axis]=c,t._custom={barStart:l,barEnd:c,start:r,end:o,min:a,max:s}}function oF(e,t,n,i){return Ze(e)?eY(e,t,n,i):t[n.axis]=n.parse(e,i),t}function w2(e,t,n,i){const r=e.iScale,o=e.vScale,a=r.getLabels(),s=r===o,l=[];let c,u,f,p;for(c=n,u=n+i;c<u;++c)p=t[c],f={},f[r.axis]=s||r.parse(a[c],c),l.push(oF(p,f,o,c));return l}function Lh(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function tY(e,t,n){return e!==0?li(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function nY(e){let t,n,i,r,o;return e.horizontal?(t=e.base>e.x,n="left",i="right"):(t=e.base<e.y,n="bottom",i="top"),t?(r="end",o="start"):(r="start",o="end"),{start:n,end:i,reverse:t,top:r,bottom:o}}function iY(e,t,n,i){let r=t.borderSkipped;const o={};if(!r){e.borderSkipped=o;return}if(r===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:a,end:s,reverse:l,top:c,bottom:u}=nY(e);r==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===i?r=c:(n._bottom||0)===i?r=u:(o[C2(u,a,s,l)]=!0,r=c)),o[C2(r,a,s,l)]=!0,e.borderSkipped=o}function C2(e,t,n,i){return i?(e=rY(e,t,n),e=E2(e,n,t)):e=E2(e,t,n),e}function rY(e,t,n){return e===t?n:e===n?t:e}function E2(e,t,n){return e==="start"?t:e==="end"?n:e}function oY(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class Zs extends Un{parsePrimitiveData(t,n,i,r){return w2(t,n,i,r)}parseArrayData(t,n,i,r){return w2(t,n,i,r)}parseObjectData(t,n,i,r){const{iScale:o,vScale:a}=t,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,c=o.axis==="x"?s:l,u=a.axis==="x"?s:l,f=[];let p,m,g,x;for(p=i,m=i+r;p<m;++p)x=n[p],g={},g[o.axis]=o.parse(xr(x,c),p),f.push(oF(xr(x,u),g,a,p));return f}updateRangeFromParsed(t,n,i,r){super.updateRangeFromParsed(t,n,i,r);const o=i._custom;o&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:i,vScale:r}=n,o=this.getParsed(t),a=o._custom,s=Lh(a)?"["+a.start+", "+a.end+"]":""+r.getLabelForValue(o[r.axis]);return{label:""+i.getLabelForValue(o[i.axis]),value:s}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,i,r){const o=r==="reset",{index:a,_cachedMeta:{vScale:s}}=this,l=s.getBasePixel(),c=s.isHorizontal(),u=this._getRuler(),{sharedOptions:f,includeOptions:p}=this._getSharedOptions(n,r);for(let m=n;m<n+i;m++){const g=this.getParsed(m),x=o||$e(g[s.axis])?{base:l,head:l}:this._calculateBarValuePixels(m),y=this._calculateBarIndexPixels(m,u),v=(g._stacks||{})[s.axis],b={horizontal:c,base:x.base,enableBorderRadius:!v||Lh(g._custom)||a===v._top||a===v._bottom,x:c?x.head:y.center,y:c?y.center:x.head,height:c?y.size:Math.abs(x.size),width:c?Math.abs(x.size):y.size};p&&(b.options=f||this.resolveDataElementOptions(m,t[m].active?"active":r));const E=b.options||t[m].options;iY(b,E,v,a),oY(b,E,u.ratio),this.updateElement(t[m],m,b,r)}}_getStacks(t,n){const{iScale:i}=this._cachedMeta,r=i.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),o=i.options.stacked,a=[],s=l=>{const c=l.controller.getParsed(n),u=c&&c[l.vScale.axis];if($e(u)||isNaN(u))return!0};for(const l of r)if(!(n!==void 0&&s(l))&&((o===!1||a.indexOf(l.stack)===-1||o===void 0&&l.stack===void 0)&&a.push(l.stack),l.index===t))break;return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,n,i){const r=this._getStacks(t,i),o=n!==void 0?r.indexOf(n):-1;return o===-1?r.length-1:o}_getRuler(){const t=this.options,n=this._cachedMeta,i=n.iScale,r=[];let o,a;for(o=0,a=n.data.length;o<a;++o)r.push(i.getPixelForValue(this.getParsed(o)[i.axis],o));const s=t.barThickness;return{min:s||KJ(n),pixels:r,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:s?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:i,index:r},options:{base:o,minBarLength:a}}=this,s=o||0,l=this.getParsed(t),c=l._custom,u=Lh(c);let f=l[n.axis],p=0,m=i?this.applyStack(n,l,i):f,g,x;m!==f&&(p=m-f,m=f),u&&(f=c.barStart,m=c.barEnd-c.barStart,f!==0&&li(f)!==li(c.barEnd)&&(p=0),p+=f);const y=!$e(o)&&!u?o:p;let v=n.getPixelForValue(y);if(this.chart.getDataVisibility(t)?g=n.getPixelForValue(p+m):g=v,x=g-v,Math.abs(x)<a){x=tY(x,n,s)*a,f===s&&(v-=x/2);const b=n.getPixelForDecimal(0),E=n.getPixelForDecimal(1),S=Math.min(b,E),F=Math.max(b,E);v=Math.max(Math.min(v,F),S),g=v+x,i&&!u&&(l._stacks[n.axis]._visualValues[r]=n.getValueForPixel(g)-n.getValueForPixel(v))}if(v===n.getPixelForValue(s)){const b=li(x)*n.getLineWidthForValue(s)/2;v+=b,x-=b}return{size:x,base:v,head:g,center:g+x/2}}_calculateBarIndexPixels(t,n){const i=n.scale,r=this.options,o=r.skipNull,a=ve(r.maxBarThickness,1/0);let s,l;if(n.grouped){const c=o?this._getStackCount(t):n.stackCount,u=r.barThickness==="flex"?QJ(t,n,r,c):XJ(t,n,r,c),f=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0);s=u.start+u.chunk*f+u.chunk/2,l=Math.min(a,u.chunk*u.ratio)}else s=i.getPixelForValue(this.getParsed(t)[i.axis],t),l=Math.min(a,n.min*n.ratio);return{base:s-l/2,head:s+l/2,center:s,size:l}}draw(){const t=this._cachedMeta,n=t.vScale,i=t.data,r=i.length;let o=0;for(;o<r;++o)this.getParsed(o)[n.axis]!==null&&i[o].draw(this._ctx)}}te(Zs,"id","bar"),te(Zs,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),te(Zs,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Su extends Un{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,n,i,r){const o=super.parsePrimitiveData(t,n,i,r);for(let a=0;a<o.length;a++)o[a]._custom=this.resolveDataElementOptions(a+i).radius;return o}parseArrayData(t,n,i,r){const o=super.parseArrayData(t,n,i,r);for(let a=0;a<o.length;a++){const s=n[i+a];o[a]._custom=ve(s[2],this.resolveDataElementOptions(a+i).radius)}return o}parseObjectData(t,n,i,r){const o=super.parseObjectData(t,n,i,r);for(let a=0;a<o.length;a++){const s=n[i+a];o[a]._custom=ve(s&&s.r&&+s.r,this.resolveDataElementOptions(a+i).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let n=0;for(let i=t.length-1;i>=0;--i)n=Math.max(n,t[i].size(this.resolveDataElementOptions(i))/2);return n>0&&n}getLabelAndValue(t){const n=this._cachedMeta,i=this.chart.data.labels||[],{xScale:r,yScale:o}=n,a=this.getParsed(t),s=r.getLabelForValue(a.x),l=o.getLabelForValue(a.y),c=a._custom;return{label:i[t]||"",value:"("+s+", "+l+(c?", "+c:"")+")"}}update(t){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,t)}updateElements(t,n,i,r){const o=r==="reset",{iScale:a,vScale:s}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(n,r),u=a.axis,f=s.axis;for(let p=n;p<n+i;p++){const m=t[p],g=!o&&this.getParsed(p),x={},y=x[u]=o?a.getPixelForDecimal(.5):a.getPixelForValue(g[u]),v=x[f]=o?s.getBasePixel():s.getPixelForValue(g[f]);x.skip=isNaN(y)||isNaN(v),c&&(x.options=l||this.resolveDataElementOptions(p,m.active?"active":r),o&&(x.options.radius=0)),this.updateElement(m,p,x,r)}}resolveDataElementOptions(t,n){const i=this.getParsed(t);let r=super.resolveDataElementOptions(t,n);r.$shared&&(r=Object.assign({},r,{$shared:!1}));const o=r.radius;return n!=="active"&&(r.radius=0),r.radius+=ve(i&&i._custom,o),r}}te(Su,"id","bubble"),te(Su,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),te(Su,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function aY(e,t,n){let i=1,r=1,o=0,a=0;if(t<Ye){const s=e,l=s+t,c=Math.cos(s),u=Math.sin(s),f=Math.cos(l),p=Math.sin(l),m=(E,S,F)=>_l(E,s,l,!0)?1:Math.max(S,S*n,F,F*n),g=(E,S,F)=>_l(E,s,l,!0)?-1:Math.min(S,S*n,F,F*n),x=m(0,c,f),y=m(ut,u,p),v=g(Ge,c,f),b=g(Ge+ut,u,p);i=(x-v)/2,r=(y-b)/2,o=-(x+v)/2,a=-(y+b)/2}return{ratioX:i,ratioY:r,offsetX:o,offsetY:a}}class tr extends Un{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const i=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=i;else{let o=l=>+i[l];if(we(i[t])){const{key:l="value"}=this._parsing;o=c=>+xr(i[c],l)}let a,s;for(a=t,s=t+n;a<s;++a)r._parsed[a]=o(a)}}_getRotation(){return Vn(this.options.rotation-90)}_getCircumference(){return Vn(this.options.circumference)}_getRotationExtents(){let t=Ye,n=-Ye;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const r=this.chart.getDatasetMeta(i).controller,o=r._getRotation(),a=r._getCircumference();t=Math.min(t,o),n=Math.max(n,o+a)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:i}=n,r=this._cachedMeta,o=r.data,a=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,s=Math.max((Math.min(i.width,i.height)-a)/2,0),l=Math.min(yZ(this.options.cutout,s),1),c=this._getRingWeight(this.index),{circumference:u,rotation:f}=this._getRotationExtents(),{ratioX:p,ratioY:m,offsetX:g,offsetY:x}=aY(f,u,l),y=(i.width-a)/p,v=(i.height-a)/m,b=Math.max(Math.min(y,v)/2,0),E=O4(this.options.radius,b),S=Math.max(E*l,0),F=(E-S)/this._getVisibleDatasetWeightTotal();this.offsetX=g*E,this.offsetY=x*E,r.total=this.calculateTotal(),this.outerRadius=E-F*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-F*c,0),this.updateElements(o,0,o.length,t)}_circumference(t,n){const i=this.options,r=this._cachedMeta,o=this._getCircumference();return n&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||r._parsed[t]===null||r.data[t].hidden?0:this.calculateCircumference(r._parsed[t]*o/Ye)}updateElements(t,n,i,r){const o=r==="reset",a=this.chart,s=a.chartArea,c=a.options.animation,u=(s.left+s.right)/2,f=(s.top+s.bottom)/2,p=o&&c.animateScale,m=p?0:this.innerRadius,g=p?0:this.outerRadius,{sharedOptions:x,includeOptions:y}=this._getSharedOptions(n,r);let v=this._getRotation(),b;for(b=0;b<n;++b)v+=this._circumference(b,o);for(b=n;b<n+i;++b){const E=this._circumference(b,o),S=t[b],F={x:u+this.offsetX,y:f+this.offsetY,startAngle:v,endAngle:v+E,circumference:E,outerRadius:g,innerRadius:m};y&&(F.options=x||this.resolveDataElementOptions(b,S.active?"active":r)),v+=E,this.updateElement(S,b,F,r)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let i=0,r;for(r=0;r<n.length;r++){const o=t._parsed[r];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(r)&&!n[r].hidden&&(i+=Math.abs(o))}return i}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?Ye*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,i=this.chart,r=i.data.labels||[],o=ec(n._parsed[t],i.options.locale);return{label:r[t]||"",value:o}}getMaxBorderWidth(t){let n=0;const i=this.chart;let r,o,a,s,l;if(!t){for(r=0,o=i.data.datasets.length;r<o;++r)if(i.isDatasetVisible(r)){a=i.getDatasetMeta(r),t=a.data,s=a.controller;break}}if(!t)return 0;for(r=0,o=t.length;r<o;++r)l=s.resolveDataElementOptions(r),l.borderAlign!=="inner"&&(n=Math.max(n,l.borderWidth||0,l.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let i=0,r=t.length;i<r;++i){const o=this.resolveDataElementOptions(i);n=Math.max(n,o.offset||0,o.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(n+=this._getRingWeight(i));return n}_getRingWeight(t){return Math.max(ve(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}te(tr,"id","doughnut"),te(tr,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),te(tr,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),te(tr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:i,color:r}}=t.legend.options;return n.labels.map((o,a)=>{const l=t.getDatasetMeta(0).controller.getStyle(a);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:r,lineWidth:l.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(a),index:a}})}return[]}},onClick(t,n,i){i.chart.toggleDataVisibility(n.index),i.chart.update()}}}});class Fu extends Un{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:i,data:r=[],_dataset:o}=n,a=this.chart._animationsDisabled;let{start:s,count:l}=N4(n,r,a);this._drawStart=s,this._drawCount=l,V4(n)&&(s=0,l=r.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!o._decimated,i.points=r;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!a,options:c},t),this.updateElements(r,s,l,t)}updateElements(t,n,i,r){const o=r==="reset",{iScale:a,vScale:s,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:f}=this._getSharedOptions(n,r),p=a.axis,m=s.axis,{spanGaps:g,segment:x}=this.options,y=Ca(g)?g:Number.POSITIVE_INFINITY,v=this.chart._animationsDisabled||o||r==="none",b=n+i,E=t.length;let S=n>0&&this.getParsed(n-1);for(let F=0;F<E;++F){const P=t[F],k=v?P:{};if(F<n||F>=b){k.skip=!0;continue}const _=this.getParsed(F),D=$e(_[m]),T=k[p]=a.getPixelForValue(_[p],F),R=k[m]=o||D?s.getBasePixel():s.getPixelForValue(l?this.applyStack(s,_,l):_[m],F);k.skip=isNaN(T)||isNaN(R)||D,k.stop=F>0&&Math.abs(_[p]-S[p])>y,x&&(k.parsed=_,k.raw=c.data[F]),f&&(k.options=u||this.resolveDataElementOptions(F,P.active?"active":r)),v||this.updateElement(P,F,k,r),S=_}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,i=n.options&&n.options.borderWidth||0,r=t.data||[];if(!r.length)return i;const o=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(i,o,a)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}te(Fu,"id","line"),te(Fu,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),te(Fu,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Js extends Un{constructor(t,n){super(t,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const n=this._cachedMeta,i=this.chart,r=i.data.labels||[],o=ec(n._parsed[t].r,i.options.locale);return{label:r[t]||"",value:o}}parseObjectData(t,n,i,r){return Y4.bind(this)(t,n,i,r)}update(t){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,t)}getMinMax(){const t=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,r)=>{const o=this.getParsed(r).r;!isNaN(o)&&this.chart.getDataVisibility(r)&&(o<n.min&&(n.min=o),o>n.max&&(n.max=o))}),n}_updateRadius(){const t=this.chart,n=t.chartArea,i=t.options,r=Math.min(n.right-n.left,n.bottom-n.top),o=Math.max(r/2,0),a=Math.max(i.cutoutPercentage?o/100*i.cutoutPercentage:1,0),s=(o-a)/t.getVisibleDatasetCount();this.outerRadius=o-s*this.index,this.innerRadius=this.outerRadius-s}updateElements(t,n,i,r){const o=r==="reset",a=this.chart,l=a.options.animation,c=this._cachedMeta.rScale,u=c.xCenter,f=c.yCenter,p=c.getIndexAngle(0)-.5*Ge;let m=p,g;const x=360/this.countVisibleElements();for(g=0;g<n;++g)m+=this._computeAngle(g,r,x);for(g=n;g<n+i;g++){const y=t[g];let v=m,b=m+this._computeAngle(g,r,x),E=a.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;m=b,o&&(l.animateScale&&(E=0),l.animateRotate&&(v=b=p));const S={x:u,y:f,innerRadius:0,outerRadius:E,startAngle:v,endAngle:b,options:this.resolveDataElementOptions(g,y.active?"active":r)};this.updateElement(y,g,S,r)}}countVisibleElements(){const t=this._cachedMeta;let n=0;return t.data.forEach((i,r)=>{!isNaN(this.getParsed(r).r)&&this.chart.getDataVisibility(r)&&n++}),n}_computeAngle(t,n,i){return this.chart.getDataVisibility(t)?Vn(this.resolveDataElementOptions(t,n).angle||i):0}}te(Js,"id","polarArea"),te(Js,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),te(Js,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:i,color:r}}=t.legend.options;return n.labels.map((o,a)=>{const l=t.getDatasetMeta(0).controller.getStyle(a);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:r,lineWidth:l.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(a),index:a}})}return[]}},onClick(t,n,i){i.chart.toggleDataVisibility(n.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Fg extends tr{}te(Fg,"id","pie"),te(Fg,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class ku extends Un{getLabelAndValue(t){const n=this._cachedMeta.vScale,i=this.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(i[n.axis])}}parseObjectData(t,n,i,r){return Y4.bind(this)(t,n,i,r)}update(t){const n=this._cachedMeta,i=n.dataset,r=n.data||[],o=n.iScale.getLabels();if(i.points=r,t!=="resize"){const a=this.resolveDatasetElementOptions(t);this.options.showLine||(a.borderWidth=0);const s={_loop:!0,_fullLoop:o.length===r.length,options:a};this.updateElement(i,void 0,s,t)}this.updateElements(r,0,r.length,t)}updateElements(t,n,i,r){const o=this._cachedMeta.rScale,a=r==="reset";for(let s=n;s<n+i;s++){const l=t[s],c=this.resolveDataElementOptions(s,l.active?"active":r),u=o.getPointPositionForValue(s,this.getParsed(s).r),f=a?o.xCenter:u.x,p=a?o.yCenter:u.y,m={x:f,y:p,angle:u.angle,skip:isNaN(f)||isNaN(p),options:c};this.updateElement(l,s,m,r)}}}te(ku,"id","radar"),te(ku,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),te(ku,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class _u extends Un{getLabelAndValue(t){const n=this._cachedMeta,i=this.chart.data.labels||[],{xScale:r,yScale:o}=n,a=this.getParsed(t),s=r.getLabelForValue(a.x),l=o.getLabelForValue(a.y);return{label:i[t]||"",value:"("+s+", "+l+")"}}update(t){const n=this._cachedMeta,{data:i=[]}=n,r=this.chart._animationsDisabled;let{start:o,count:a}=N4(n,i,r);if(this._drawStart=o,this._drawCount=a,V4(n)&&(o=0,a=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:s,_dataset:l}=n;s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!l._decimated,s.points=i;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(s,void 0,{animated:!r,options:c},t)}else this.datasetElementType&&(delete n.dataset,this.datasetElementType=!1);this.updateElements(i,o,a,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,n,i,r){const o=r==="reset",{iScale:a,vScale:s,_stacked:l,_dataset:c}=this._cachedMeta,u=this.resolveDataElementOptions(n,r),f=this.getSharedOptions(u),p=this.includeOptions(r,f),m=a.axis,g=s.axis,{spanGaps:x,segment:y}=this.options,v=Ca(x)?x:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||o||r==="none";let E=n>0&&this.getParsed(n-1);for(let S=n;S<n+i;++S){const F=t[S],P=this.getParsed(S),k=b?F:{},_=$e(P[g]),D=k[m]=a.getPixelForValue(P[m],S),T=k[g]=o||_?s.getBasePixel():s.getPixelForValue(l?this.applyStack(s,P,l):P[g],S);k.skip=isNaN(D)||isNaN(T)||_,k.stop=S>0&&Math.abs(P[m]-E[m])>v,y&&(k.parsed=P,k.raw=c.data[S]),p&&(k.options=f||this.resolveDataElementOptions(S,F.active?"active":r)),b||this.updateElement(F,S,k,r),E=P}this.updateSharedOptions(f,r,u)}getMaxOverflow(){const t=this._cachedMeta,n=t.data||[];if(!this.options.showLine){let s=0;for(let l=n.length-1;l>=0;--l)s=Math.max(s,n[l].size(this.resolveDataElementOptions(l))/2);return s>0&&s}const i=t.dataset,r=i.options&&i.options.borderWidth||0;if(!n.length)return r;const o=n[0].size(this.resolveDataElementOptions(0)),a=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(r,o,a)/2}}te(_u,"id","scatter"),te(_u,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),te(_u,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var sY=Object.freeze({__proto__:null,BarController:Zs,BubbleController:Su,DoughnutController:tr,LineController:Fu,PieController:Fg,PolarAreaController:Js,RadarController:ku,ScatterController:_u});function Or(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class z1{constructor(t){te(this,"options");this.options=t||{}}static override(t){Object.assign(z1.prototype,t)}init(){}formats(){return Or()}parse(){return Or()}format(){return Or()}add(){return Or()}diff(){return Or()}startOf(){return Or()}endOf(){return Or()}}var lY={_date:z1};function cY(e,t,n,i){const{controller:r,data:o,_sorted:a}=e,s=r._cachedMeta.iScale;if(s&&t===s.axis&&t!=="r"&&a&&o.length){const l=s._reversePixels?OZ:Si;if(i){if(r._sharedOptions){const c=o[0],u=typeof c.getRange=="function"&&c.getRange(t);if(u){const f=l(o,t,n-u),p=l(o,t,n+u);return{lo:f.lo,hi:p.hi}}}}else return l(o,t,n)}return{lo:0,hi:o.length-1}}function tc(e,t,n,i,r){const o=e.getSortedVisibleDatasetMetas(),a=n[t];for(let s=0,l=o.length;s<l;++s){const{index:c,data:u}=o[s],{lo:f,hi:p}=cY(o[s],t,a,r);for(let m=f;m<=p;++m){const g=u[m];g.skip||i(g,c,m)}}}function uY(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(i,r){const o=t?Math.abs(i.x-r.x):0,a=n?Math.abs(i.y-r.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(a,2))}}function Rh(e,t,n,i,r){const o=[];return!r&&!e.isPointInArea(t)||tc(e,n,t,function(s,l,c){!r&&!Fi(s,e.chartArea,0)||s.inRange(t.x,t.y,i)&&o.push({element:s,datasetIndex:l,index:c})},!0),o}function dY(e,t,n,i){let r=[];function o(a,s,l){const{startAngle:c,endAngle:u}=a.getProps(["startAngle","endAngle"],i),{angle:f}=I4(a,{x:t.x,y:t.y});_l(f,c,u)&&r.push({element:a,datasetIndex:s,index:l})}return tc(e,n,t,o),r}function fY(e,t,n,i,r,o){let a=[];const s=uY(n);let l=Number.POSITIVE_INFINITY;function c(u,f,p){const m=u.inRange(t.x,t.y,r);if(i&&!m)return;const g=u.getCenterPoint(r);if(!(!!o||e.isPointInArea(g))&&!m)return;const y=s(t,g);y<l?(a=[{element:u,datasetIndex:f,index:p}],l=y):y===l&&a.push({element:u,datasetIndex:f,index:p})}return tc(e,n,t,c),a}function Bh(e,t,n,i,r,o){return!o&&!e.isPointInArea(t)?[]:n==="r"&&!i?dY(e,t,n,r):fY(e,t,n,i,r,o)}function S2(e,t,n,i,r){const o=[],a=n==="x"?"inXRange":"inYRange";let s=!1;return tc(e,n,t,(l,c,u)=>{l[a](t[n],r)&&(o.push({element:l,datasetIndex:c,index:u}),s=s||l.inRange(t.x,t.y,r))}),i&&!s?[]:o}var pY={evaluateInteractionItems:tc,modes:{index(e,t,n,i){const r=Br(t,e),o=n.axis||"x",a=n.includeInvisible||!1,s=n.intersect?Rh(e,r,o,i,a):Bh(e,r,o,!1,i,a),l=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const u=s[0].index,f=c.data[u];f&&!f.skip&&l.push({element:f,datasetIndex:c.index,index:u})}),l):[]},dataset(e,t,n,i){const r=Br(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;let s=n.intersect?Rh(e,r,o,i,a):Bh(e,r,o,!1,i,a);if(s.length>0){const l=s[0].datasetIndex,c=e.getDatasetMeta(l).data;s=[];for(let u=0;u<c.length;++u)s.push({element:c[u],datasetIndex:l,index:u})}return s},point(e,t,n,i){const r=Br(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;return Rh(e,r,o,i,a)},nearest(e,t,n,i){const r=Br(t,e),o=n.axis||"xy",a=n.includeInvisible||!1;return Bh(e,r,o,n.intersect,i,a)},x(e,t,n,i){const r=Br(t,e);return S2(e,r,"x",n.intersect,i)},y(e,t,n,i){const r=Br(t,e);return S2(e,r,"y",n.intersect,i)}}};const aF=["left","top","right","bottom"];function ss(e,t){return e.filter(n=>n.pos===t)}function F2(e,t){return e.filter(n=>aF.indexOf(n.pos)===-1&&n.box.axis===t)}function ls(e,t){return e.sort((n,i)=>{const r=t?i:n,o=t?n:i;return r.weight===o.weight?r.index-o.index:r.weight-o.weight})}function hY(e){const t=[];let n,i,r,o,a,s;for(n=0,i=(e||[]).length;n<i;++n)r=e[n],{position:o,options:{stack:a,stackWeight:s=1}}=r,t.push({index:n,box:r,pos:o,horizontal:r.isHorizontal(),weight:r.weight,stack:a&&o+a,stackWeight:s});return t}function gY(e){const t={};for(const n of e){const{stack:i,pos:r,stackWeight:o}=n;if(!i||!aF.includes(r))continue;const a=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=o}return t}function mY(e,t){const n=gY(e),{vBoxMaxWidth:i,hBoxMaxHeight:r}=t;let o,a,s;for(o=0,a=e.length;o<a;++o){s=e[o];const{fullSize:l}=s.box,c=n[s.stack],u=c&&s.stackWeight/c.weight;s.horizontal?(s.width=u?u*i:l&&t.availableWidth,s.height=r):(s.width=i,s.height=u?u*r:l&&t.availableHeight)}return n}function xY(e){const t=hY(e),n=ls(t.filter(c=>c.box.fullSize),!0),i=ls(ss(t,"left"),!0),r=ls(ss(t,"right")),o=ls(ss(t,"top"),!0),a=ls(ss(t,"bottom")),s=F2(t,"x"),l=F2(t,"y");return{fullSize:n,leftAndTop:i.concat(o),rightAndBottom:r.concat(l).concat(a).concat(s),chartArea:ss(t,"chartArea"),vertical:i.concat(r).concat(l),horizontal:o.concat(a).concat(s)}}function k2(e,t,n,i){return Math.max(e[n],t[n])+Math.max(e[i],t[i])}function sF(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function vY(e,t,n,i){const{pos:r,box:o}=n,a=e.maxPadding;if(!we(r)){n.size&&(e[r]-=n.size);const f=i[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?o.height:o.width),n.size=f.size/f.count,e[r]+=n.size}o.getPadding&&sF(a,o.getPadding());const s=Math.max(0,t.outerWidth-k2(a,e,"left","right")),l=Math.max(0,t.outerHeight-k2(a,e,"top","bottom")),c=s!==e.w,u=l!==e.h;return e.w=s,e.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function bY(e){const t=e.maxPadding;function n(i){const r=Math.max(t[i]-e[i],0);return e[i]+=r,r}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function yY(e,t){const n=t.maxPadding;function i(r){const o={left:0,top:0,right:0,bottom:0};return r.forEach(a=>{o[a]=Math.max(t[a],n[a])}),o}return i(e?["left","right"]:["top","bottom"])}function ks(e,t,n,i){const r=[];let o,a,s,l,c,u;for(o=0,a=e.length,c=0;o<a;++o){s=e[o],l=s.box,l.update(s.width||t.w,s.height||t.h,yY(s.horizontal,t));const{same:f,other:p}=vY(t,n,s,i);c|=f&&r.length,u=u||p,l.fullSize||r.push(s)}return c&&ks(r,t,n,i)||u}function Nc(e,t,n,i,r){e.top=n,e.left=t,e.right=t+i,e.bottom=n+r,e.width=i,e.height=r}function _2(e,t,n,i){const r=n.padding;let{x:o,y:a}=t;for(const s of e){const l=s.box,c=i[s.stack]||{count:1,placed:0,weight:1},u=s.stackWeight/c.weight||1;if(s.horizontal){const f=t.w*u,p=c.size||l.height;kl(c.start)&&(a=c.start),l.fullSize?Nc(l,r.left,a,n.outerWidth-r.right-r.left,p):Nc(l,t.left+c.placed,a,f,p),c.start=a,c.placed+=f,a=l.bottom}else{const f=t.h*u,p=c.size||l.width;kl(c.start)&&(o=c.start),l.fullSize?Nc(l,o,r.top,p,n.outerHeight-r.bottom-r.top):Nc(l,o,t.top+c.placed,p,f),c.start=o,c.placed+=f,o=l.right}}t.x=o,t.y=a}var Rt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,i){if(!e)return;const r=Nt(e.options.layout.padding),o=Math.max(t-r.width,0),a=Math.max(n-r.height,0),s=xY(e.boxes),l=s.vertical,c=s.horizontal;Le(e.boxes,x=>{typeof x.beforeLayout=="function"&&x.beforeLayout()});const u=l.reduce((x,y)=>y.box.options&&y.box.options.display===!1?x:x+1,0)||1,f=Object.freeze({outerWidth:t,outerHeight:n,padding:r,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/u,hBoxMaxHeight:a/2}),p=Object.assign({},r);sF(p,Nt(i));const m=Object.assign({maxPadding:p,w:o,h:a,x:r.left,y:r.top},r),g=mY(l.concat(c),f);ks(s.fullSize,m,f,g),ks(l,m,f,g),ks(c,m,f,g)&&ks(l,m,f,g),bY(m),_2(s.leftAndTop,m,f,g),m.x+=m.w,m.y+=m.h,_2(s.rightAndBottom,m,f,g),e.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},Le(s.chartArea,x=>{const y=x.box;Object.assign(y,e.chartArea),y.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class lF{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,i){}removeEventListener(t,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,i,r){return n=Math.max(0,n||t.width),i=i||t.height,{width:n,height:Math.max(0,r?Math.floor(n/r):i)}}isAttached(t){return!0}updateConfig(t){}}class wY extends lF{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Pu="$chartjs",CY={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},P2=e=>e===null||e==="";function EY(e,t){const n=e.style,i=e.getAttribute("height"),r=e.getAttribute("width");if(e[Pu]={initial:{height:i,width:r,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",P2(r)){const o=u2(e,"width");o!==void 0&&(e.width=o)}if(P2(i))if(e.style.height==="")e.height=e.width/(t||2);else{const o=u2(e,"height");o!==void 0&&(e.height=o)}return e}const cF=FJ?{passive:!0}:!1;function SY(e,t,n){e.addEventListener(t,n,cF)}function FY(e,t,n){e.canvas.removeEventListener(t,n,cF)}function kY(e,t){const n=CY[e.type]||e.type,{x:i,y:r}=Br(e,t);return{type:n,chart:t,native:e,x:i!==void 0?i:null,y:r!==void 0?r:null}}function $d(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function _Y(e,t,n){const i=e.canvas,r=new MutationObserver(o=>{let a=!1;for(const s of o)a=a||$d(s.addedNodes,i),a=a&&!$d(s.removedNodes,i);a&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}function PY(e,t,n){const i=e.canvas,r=new MutationObserver(o=>{let a=!1;for(const s of o)a=a||$d(s.removedNodes,i),a=a&&!$d(s.addedNodes,i);a&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}const Al=new Map;let A2=0;function uF(){const e=window.devicePixelRatio;e!==A2&&(A2=e,Al.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function AY(e,t){Al.size||window.addEventListener("resize",uF),Al.set(e,t)}function DY(e){Al.delete(e),Al.size||window.removeEventListener("resize",uF)}function $Y(e,t,n){const i=e.canvas,r=i&&B1(i);if(!r)return;const o=z4((s,l)=>{const c=r.clientWidth;n(s,l),c<r.clientWidth&&n()},window),a=new ResizeObserver(s=>{const l=s[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||o(c,u)});return a.observe(r),AY(e,o),a}function zh(e,t,n){n&&n.disconnect(),t==="resize"&&DY(e)}function OY(e,t,n){const i=e.canvas,r=z4(o=>{e.ctx!==null&&n(kY(o,e))},e);return SY(i,t,r),r}class TY extends lF{acquireContext(t,n){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(EY(t,n),i):null}releaseContext(t){const n=t.canvas;if(!n[Pu])return!1;const i=n[Pu].initial;["height","width"].forEach(o=>{const a=i[o];$e(a)?n.removeAttribute(o):n.setAttribute(o,a)});const r=i.style||{};return Object.keys(r).forEach(o=>{n.style[o]=r[o]}),n.width=n.width,delete n[Pu],!0}addEventListener(t,n,i){this.removeEventListener(t,n);const r=t.$proxies||(t.$proxies={}),a={attach:_Y,detach:PY,resize:$Y}[n]||OY;r[n]=a(t,n,i)}removeEventListener(t,n){const i=t.$proxies||(t.$proxies={}),r=i[n];if(!r)return;({attach:zh,detach:zh,resize:zh}[n]||FY)(t,n,r),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,i,r){return SJ(t,n,i,r)}isAttached(t){const n=B1(t);return!!(n&&n.isConnected)}}function MY(e){return!K4()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?wY:TY}class qn{constructor(){te(this,"x");te(this,"y");te(this,"active",!1);te(this,"options");te(this,"$animations")}tooltipPosition(t){const{x:n,y:i}=this.getProps(["x","y"],t);return{x:n,y:i}}hasValue(){return Ca(this.x)&&Ca(this.y)}getProps(t,n){const i=this.$animations;if(!n||!i)return this;const r={};return t.forEach(o=>{r[o]=i[o]&&i[o].active()?i[o]._to:this[o]}),r}}te(qn,"defaults",{}),te(qn,"defaultRoutes");function IY(e,t){const n=e.options.ticks,i=LY(e),r=Math.min(n.maxTicksLimit||i,i),o=n.major.enabled?BY(t):[],a=o.length,s=o[0],l=o[a-1],c=[];if(a>r)return zY(t,c,o,a/r),c;const u=RY(o,t,r);if(a>0){let f,p;const m=a>1?Math.round((l-s)/(a-1)):null;for(Vc(t,c,u,$e(m)?0:s-m,s),f=0,p=a-1;f<p;f++)Vc(t,c,u,o[f],o[f+1]);return Vc(t,c,u,l,$e(m)?t.length:l+m),c}return Vc(t,c,u),c}function LY(e){const t=e.options.offset,n=e._tickSize(),i=e._length/n+(t?0:1),r=e._maxLength/n;return Math.floor(Math.min(i,r))}function RY(e,t,n){const i=NY(e),r=t.length/n;if(!i)return Math.max(r,1);const o=PZ(i);for(let a=0,s=o.length-1;a<s;a++){const l=o[a];if(l>r)return l}return Math.max(r,1)}function BY(e){const t=[];let n,i;for(n=0,i=e.length;n<i;n++)e[n].major&&t.push(n);return t}function zY(e,t,n,i){let r=0,o=n[0],a;for(i=Math.ceil(i),a=0;a<e.length;a++)a===o&&(t.push(e[a]),r++,o=n[r*i])}function Vc(e,t,n,i,r){const o=ve(i,0),a=Math.min(ve(r,e.length),e.length);let s=0,l,c,u;for(n=Math.ceil(n),r&&(l=r-i,n=l/Math.floor(l/n)),u=o;u<0;)s++,u=Math.round(o+s*n);for(c=Math.max(o,0);c<a;c++)c===u&&(t.push(e[c]),s++,u=Math.round(o+s*n))}function NY(e){const t=e.length;let n,i;if(t<2)return!1;for(i=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==i)return!1;return i}const VY=e=>e==="left"?"right":e==="right"?"left":e,D2=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,$2=(e,t)=>Math.min(t||e,e);function O2(e,t){const n=[],i=e.length/t,r=e.length;let o=0;for(;o<r;o+=i)n.push(e[Math.floor(o)]);return n}function jY(e,t,n){const i=e.ticks.length,r=Math.min(t,i-1),o=e._startPixel,a=e._endPixel,s=1e-6;let l=e.getPixelForTick(r),c;if(!(n&&(i===1?c=Math.max(l-o,a-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(r-1))/2,l+=r<t?c:-c,l<o-s||l>a+s)))return l}function HY(e,t){Le(e,n=>{const i=n.gc,r=i.length/2;let o;if(r>t){for(o=0;o<r;++o)delete n.data[i[o]];i.splice(0,r)}})}function cs(e){return e.drawTicks?e.tickLength:0}function T2(e,t){if(!e.display)return 0;const n=vt(e.font,t),i=Nt(e.padding);return(Ze(e.text)?e.text.length:1)*n.lineHeight+i.height}function UY(e,t){return Sr(e,{scale:t,type:"scale"})}function WY(e,t,n){return Sr(e,{tick:n,index:t,type:"tick"})}function qY(e,t,n){let i=O1(e);return(n&&t!=="right"||!n&&t==="right")&&(i=VY(i)),i}function ZY(e,t,n,i){const{top:r,left:o,bottom:a,right:s,chart:l}=e,{chartArea:c,scales:u}=l;let f=0,p,m,g;const x=a-r,y=s-o;if(e.isHorizontal()){if(m=It(i,o,s),we(n)){const v=Object.keys(n)[0],b=n[v];g=u[v].getPixelForValue(b)+x-t}else n==="center"?g=(c.bottom+c.top)/2+x-t:g=D2(e,n,t);p=s-o}else{if(we(n)){const v=Object.keys(n)[0],b=n[v];m=u[v].getPixelForValue(b)-y+t}else n==="center"?m=(c.left+c.right)/2-y+t:m=D2(e,n,t);g=It(i,a,r),f=n==="left"?-ut:ut}return{titleX:m,titleY:g,maxWidth:p,rotation:f}}class So extends qn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:i,_suggestedMax:r}=this;return t=on(t,Number.POSITIVE_INFINITY),n=on(n,Number.NEGATIVE_INFINITY),i=on(i,Number.POSITIVE_INFINITY),r=on(r,Number.NEGATIVE_INFINITY),{min:on(t,i),max:on(n,r),minDefined:rt(t),maxDefined:rt(n)}}getMinMax(t){let{min:n,max:i,minDefined:r,maxDefined:o}=this.getUserBounds(),a;if(r&&o)return{min:n,max:i};const s=this.getMatchingVisibleMetas();for(let l=0,c=s.length;l<c;++l)a=s[l].controller.getMinMax(this,t),r||(n=Math.min(n,a.min)),o||(i=Math.max(i,a.max));return n=o&&n>i?i:n,i=r&&n>i?n:i,{min:on(n,on(i,n)),max:on(i,on(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){He(this.options.beforeUpdate,[this])}update(t,n,i){const{beginAtZero:r,grace:o,ticks:a}=this.options,s=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=nJ(this,o,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=s<this.ticks.length;this._convertTicksToLabels(l?O2(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=IY(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,t=!t),this._startPixel=n,this._endPixel=i,this._reversePixels=t,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){He(this.options.afterUpdate,[this])}beforeSetDimensions(){He(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){He(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),He(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){He(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let i,r,o;for(i=0,r=t.length;i<r;i++)o=t[i],o.label=He(n.callback,[o.value,i,t],this)}afterTickToLabelConversion(){He(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){He(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,i=$2(this.ticks.length,t.ticks.maxTicksLimit),r=n.minRotation||0,o=n.maxRotation;let a=r,s,l,c;if(!this._isVisible()||!n.display||r>=o||i<=1||!this.isHorizontal()){this.labelRotation=r;return}const u=this._getLabelSizes(),f=u.widest.width,p=u.highest.height,m=Et(this.chart.width-f,0,this.maxWidth);s=t.offset?this.maxWidth/i:m/(i-1),f+6>s&&(s=m/(i-(t.offset?.5:1)),l=this.maxHeight-cs(t.grid)-n.padding-T2(t.title,this.chart.options.font),c=Math.sqrt(f*f+p*p),a=D1(Math.min(Math.asin(Et((u.highest.height+6)/s,-1,1)),Math.asin(Et(l/c,-1,1))-Math.asin(Et(p/c,-1,1)))),a=Math.max(r,Math.min(o,a))),this.labelRotation=a}afterCalculateLabelRotation(){He(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){He(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:i,title:r,grid:o}}=this,a=this._isVisible(),s=this.isHorizontal();if(a){const l=T2(r,n.options.font);if(s?(t.width=this.maxWidth,t.height=cs(o)+l):(t.height=this.maxHeight,t.width=cs(o)+l),i.display&&this.ticks.length){const{first:c,last:u,widest:f,highest:p}=this._getLabelSizes(),m=i.padding*2,g=Vn(this.labelRotation),x=Math.cos(g),y=Math.sin(g);if(s){const v=i.mirror?0:y*f.width+x*p.height;t.height=Math.min(this.maxHeight,t.height+v+m)}else{const v=i.mirror?0:x*f.width+y*p.height;t.width=Math.min(this.maxWidth,t.width+v+m)}this._calculatePadding(c,u,y,x)}}this._handleMargins(),s?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,i,r){const{ticks:{align:o,padding:a},position:s}=this.options,l=this.labelRotation!==0,c=s!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,m=0;l?c?(p=r*t.width,m=i*n.height):(p=i*t.height,m=r*n.width):o==="start"?m=n.width:o==="end"?p=t.width:o!=="inner"&&(p=t.width/2,m=n.width/2),this.paddingLeft=Math.max((p-u+a)*this.width/(this.width-u),0),this.paddingRight=Math.max((m-f+a)*this.width/(this.width-f),0)}else{let u=n.height/2,f=t.height/2;o==="start"?(u=0,f=t.height):o==="end"&&(u=n.height,f=0),this.paddingTop=u+a,this.paddingBottom=f+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){He(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,i;for(n=0,i=t.length;n<i;n++)$e(t[n].label)&&(t.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=O2(i,n)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,i){const{ctx:r,_longestTextCache:o}=this,a=[],s=[],l=Math.floor(n/$2(n,i));let c=0,u=0,f,p,m,g,x,y,v,b,E,S,F;for(f=0;f<n;f+=l){if(g=t[f].label,x=this._resolveTickFontOptions(f),r.font=y=x.string,v=o[y]=o[y]||{data:{},gc:[]},b=x.lineHeight,E=S=0,!$e(g)&&!Ze(g))E=Ad(r,v.data,v.gc,E,g),S=b;else if(Ze(g))for(p=0,m=g.length;p<m;++p)F=g[p],!$e(F)&&!Ze(F)&&(E=Ad(r,v.data,v.gc,E,F),S+=b);a.push(E),s.push(S),c=Math.max(E,c),u=Math.max(S,u)}HY(o,n);const P=a.indexOf(c),k=s.indexOf(u),_=D=>({width:a[D]||0,height:s[D]||0});return{first:_(0),last:_(n-1),widest:_(P),highest:_(k),widths:a,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return $Z(this._alignToPixels?$r(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const i=n[t];return i.$context||(i.$context=WY(this.getContext(),t,i))}return this.$context||(this.$context=UY(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=Vn(this.labelRotation),i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n)),o=this._getLabelSizes(),a=t.autoSkipPadding||0,s=o?o.widest.width+a:0,l=o?o.highest.height+a:0;return this.isHorizontal()?l*i>s*r?s/i:l/r:l*r<s*i?l/i:s/r}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,i=this.chart,r=this.options,{grid:o,position:a,border:s}=r,l=o.offset,c=this.isHorizontal(),f=this.ticks.length+(l?1:0),p=cs(o),m=[],g=s.setContext(this.getContext()),x=g.display?g.width:0,y=x/2,v=function(q){return $r(i,q,x)};let b,E,S,F,P,k,_,D,T,R,L,j;if(a==="top")b=v(this.bottom),k=this.bottom-p,D=b-y,R=v(t.top)+y,j=t.bottom;else if(a==="bottom")b=v(this.top),R=t.top,j=v(t.bottom)-y,k=b+y,D=this.top+p;else if(a==="left")b=v(this.right),P=this.right-p,_=b-y,T=v(t.left)+y,L=t.right;else if(a==="right")b=v(this.left),T=t.left,L=v(t.right)-y,P=b+y,_=this.left+p;else if(n==="x"){if(a==="center")b=v((t.top+t.bottom)/2+.5);else if(we(a)){const q=Object.keys(a)[0],G=a[q];b=v(this.chart.scales[q].getPixelForValue(G))}R=t.top,j=t.bottom,k=b+y,D=k+p}else if(n==="y"){if(a==="center")b=v((t.left+t.right)/2);else if(we(a)){const q=Object.keys(a)[0],G=a[q];b=v(this.chart.scales[q].getPixelForValue(G))}P=b-y,_=P-p,T=t.left,L=t.right}const B=ve(r.ticks.maxTicksLimit,f),z=Math.max(1,Math.ceil(f/B));for(E=0;E<f;E+=z){const q=this.getContext(E),G=o.setContext(q),N=s.setContext(q),W=G.lineWidth,X=G.color,ue=N.dash||[],U=N.dashOffset,Z=G.tickWidth,Q=G.tickColor,re=G.tickBorderDash||[],M=G.tickBorderDashOffset;S=jY(this,E,l),S!==void 0&&(F=$r(i,S,W),c?P=_=T=L=F:k=D=R=j=F,m.push({tx1:P,ty1:k,tx2:_,ty2:D,x1:T,y1:R,x2:L,y2:j,width:W,color:X,borderDash:ue,borderDashOffset:U,tickWidth:Z,tickColor:Q,tickBorderDash:re,tickBorderDashOffset:M}))}return this._ticksLength=f,this._borderValue=b,m}_computeLabelItems(t){const n=this.axis,i=this.options,{position:r,ticks:o}=i,a=this.isHorizontal(),s=this.ticks,{align:l,crossAlign:c,padding:u,mirror:f}=o,p=cs(i.grid),m=p+u,g=f?-u:m,x=-Vn(this.labelRotation),y=[];let v,b,E,S,F,P,k,_,D,T,R,L,j="middle";if(r==="top")P=this.bottom-g,k=this._getXAxisLabelAlignment();else if(r==="bottom")P=this.top+g,k=this._getXAxisLabelAlignment();else if(r==="left"){const z=this._getYAxisLabelAlignment(p);k=z.textAlign,F=z.x}else if(r==="right"){const z=this._getYAxisLabelAlignment(p);k=z.textAlign,F=z.x}else if(n==="x"){if(r==="center")P=(t.top+t.bottom)/2+m;else if(we(r)){const z=Object.keys(r)[0],q=r[z];P=this.chart.scales[z].getPixelForValue(q)+m}k=this._getXAxisLabelAlignment()}else if(n==="y"){if(r==="center")F=(t.left+t.right)/2-m;else if(we(r)){const z=Object.keys(r)[0],q=r[z];F=this.chart.scales[z].getPixelForValue(q)}k=this._getYAxisLabelAlignment(p).textAlign}n==="y"&&(l==="start"?j="top":l==="end"&&(j="bottom"));const B=this._getLabelSizes();for(v=0,b=s.length;v<b;++v){E=s[v],S=E.label;const z=o.setContext(this.getContext(v));_=this.getPixelForTick(v)+o.labelOffset,D=this._resolveTickFontOptions(v),T=D.lineHeight,R=Ze(S)?S.length:1;const q=R/2,G=z.color,N=z.textStrokeColor,W=z.textStrokeWidth;let X=k;a?(F=_,k==="inner"&&(v===b-1?X=this.options.reverse?"left":"right":v===0?X=this.options.reverse?"right":"left":X="center"),r==="top"?c==="near"||x!==0?L=-R*T+T/2:c==="center"?L=-B.highest.height/2-q*T+T:L=-B.highest.height+T/2:c==="near"||x!==0?L=T/2:c==="center"?L=B.highest.height/2-q*T:L=B.highest.height-R*T,f&&(L*=-1),x!==0&&!z.showLabelBackdrop&&(F+=T/2*Math.sin(x))):(P=_,L=(1-R)*T/2);let ue;if(z.showLabelBackdrop){const U=Nt(z.backdropPadding),Z=B.heights[v],Q=B.widths[v];let re=L-U.top,M=0-U.left;switch(j){case"middle":re-=Z/2;break;case"bottom":re-=Z;break}switch(k){case"center":M-=Q/2;break;case"right":M-=Q;break}ue={left:M,top:re,width:Q+U.width,height:Z+U.height,color:z.backdropColor}}y.push({label:S,font:D,textOffset:L,options:{rotation:x,color:G,strokeColor:N,strokeWidth:W,textAlign:X,textBaseline:j,translation:[F,P],backdrop:ue}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-Vn(this.labelRotation))return t==="top"?"left":"right";let r="center";return n.align==="start"?r="left":n.align==="end"?r="right":n.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:i,mirror:r,padding:o}}=this.options,a=this._getLabelSizes(),s=t+o,l=a.widest.width;let c,u;return n==="left"?r?(u=this.right+o,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-s,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?r?(u=this.left+o,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+s,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:i,top:r,width:o,height:a}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(i,r,o,a),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const r=this.ticks.findIndex(o=>o.value===t);return r>=0?n.setContext(this.getContext(r)).lineWidth:0}drawGrid(t){const n=this.options.grid,i=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,a;const s=(l,c,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(o=0,a=r.length;o<a;++o){const l=r[o];n.drawOnChartArea&&s({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&s({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:i,grid:r}}=this,o=i.setContext(this.getContext()),a=i.display?o.width:0;if(!a)return;const s=r.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,f,p;this.isHorizontal()?(c=$r(t,this.left,a)-a/2,u=$r(t,this.right,s)+s/2,f=p=l):(f=$r(t,this.top,a)-a/2,p=$r(t,this.bottom,s)+s/2,c=u=l),n.save(),n.lineWidth=o.width,n.strokeStyle=o.color,n.beginPath(),n.moveTo(c,f),n.lineTo(u,p),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,r=this._computeLabelArea();r&&fp(i,r);const o=this.getLabelItems(t);for(const a of o){const s=a.options,l=a.font,c=a.label,u=a.textOffset;ho(i,c,0,u,l,s)}r&&pp(i)}drawTitle(){const{ctx:t,options:{position:n,title:i,reverse:r}}=this;if(!i.display)return;const o=vt(i.font),a=Nt(i.padding),s=i.align;let l=o.lineHeight/2;n==="bottom"||n==="center"||we(n)?(l+=a.bottom,Ze(i.text)&&(l+=o.lineHeight*(i.text.length-1))):l+=a.top;const{titleX:c,titleY:u,maxWidth:f,rotation:p}=ZY(this,l,n,s);ho(t,i.text,0,0,o,{color:i.color,maxWidth:f,rotation:p,textAlign:qY(s,n,r),textBaseline:"middle",translation:[c,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,i=ve(t.grid&&t.grid.z,-1),r=ve(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==So.prototype.draw?[{z:n,draw:o=>{this.draw(o)}}]:[{z:i,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:n,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",r=[];let o,a;for(o=0,a=n.length;o<a;++o){const s=n[o];s[i]===this.id&&(!t||s.type===t)&&r.push(s)}return r}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return vt(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class jc{constructor(t,n,i){this.type=t,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let i;GY(n)&&(i=this.register(n));const r=this.items,o=t.id,a=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in r||(r[o]=t,JY(t,a,i),this.override&&ot.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){const n=this.items,i=t.id,r=this.scope;i in n&&delete n[i],r&&i in ot[r]&&(delete ot[r][i],this.override&&delete po[i])}}function JY(e,t,n){const i=Fl(Object.create(null),[n?ot.get(n):{},ot.get(t),e.defaults]);ot.set(t,i),e.defaultRoutes&&YY(t,e.defaultRoutes),e.descriptors&&ot.describe(t,e.descriptors)}function YY(e,t){Object.keys(t).forEach(n=>{const i=n.split("."),r=i.pop(),o=[e].concat(i).join("."),a=t[n].split("."),s=a.pop(),l=a.join(".");ot.route(o,r,l,s)})}function GY(e){return"id"in e&&"defaults"in e}class KY{constructor(){this.controllers=new jc(Un,"datasets",!0),this.elements=new jc(qn,"elements"),this.plugins=new jc(Object,"plugins"),this.scales=new jc(So,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,i){[...n].forEach(r=>{const o=i||this._getRegistryForType(r);i||o.isForType(r)||o===this.plugins&&r.id?this._exec(t,o,r):Le(r,a=>{const s=i||this._getRegistryForType(a);this._exec(t,s,a)})})}_exec(t,n,i){const r=A1(t);He(i["before"+r],[],i),n[t](i),He(i["after"+r],[],i)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(t))return i}return this.plugins}_get(t,n,i){const r=n.get(t);if(r===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return r}}var Kn=new KY;class XY{constructor(){this._init=[]}notify(t,n,i,r){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=r?this._descriptors(t).filter(r):this._descriptors(t),a=this._notify(o,t,n,i);return n==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),a}_notify(t,n,i,r){r=r||{};for(const o of t){const a=o.plugin,s=a[i],l=[n,r,o.options];if(He(s,l,a)===!1&&r.cancelable)return!1}return!0}invalidate(){$e(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const i=t&&t.config,r=ve(i.options&&i.options.plugins,{}),o=QY(i);return r===!1&&!n?[]:tG(t,o,r,n)}_notifyStateChanges(t){const n=this._oldCache||[],i=this._cache,r=(o,a)=>o.filter(s=>!a.some(l=>s.plugin.id===l.plugin.id));this._notify(r(n,i),t,"stop"),this._notify(r(i,n),t,"start")}}function QY(e){const t={},n=[],i=Object.keys(Kn.plugins.items);for(let o=0;o<i.length;o++)n.push(Kn.getPlugin(i[o]));const r=e.plugins||[];for(let o=0;o<r.length;o++){const a=r[o];n.indexOf(a)===-1&&(n.push(a),t[a.id]=!0)}return{plugins:n,localIds:t}}function eG(e,t){return!t&&e===!1?null:e===!0?{}:e}function tG(e,{plugins:t,localIds:n},i,r){const o=[],a=e.getContext();for(const s of t){const l=s.id,c=eG(i[l],r);c!==null&&o.push({plugin:s,options:nG(e.config,{plugin:s,local:n[l]},c,a)})}return o}function nG(e,{plugin:t,local:n},i,r){const o=e.pluginScopeKeys(t),a=e.getOptionScopes(i,o);return n&&t.defaults&&a.push(t.defaults),e.createResolver(a,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function kg(e,t){const n=ot.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function iG(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function rG(e,t){return e===t?"_index_":"_value_"}function M2(e){if(e==="x"||e==="y"||e==="r")return e}function oG(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function _g(e,...t){if(M2(e))return e;for(const n of t){const i=n.axis||oG(n.position)||e.length>1&&M2(e[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function I2(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function aG(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(i=>i.xAxisID===e||i.yAxisID===e);if(n.length)return I2(e,"x",n[0])||I2(e,"y",n[0])}return{}}function sG(e,t){const n=po[e.type]||{scales:{}},i=t.scales||{},r=kg(e.type,t),o=Object.create(null);return Object.keys(i).forEach(a=>{const s=i[a];if(!we(s))return console.error(`Invalid scale configuration for scale: ${a}`);if(s._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const l=_g(a,s,aG(a,e),ot.scales[s.type]),c=rG(l,r),u=n.scales||{};o[a]=Hs(Object.create(null),[{axis:l},s,u[l],u[c]])}),e.data.datasets.forEach(a=>{const s=a.type||e.type,l=a.indexAxis||kg(s,t),u=(po[s]||{}).scales||{};Object.keys(u).forEach(f=>{const p=iG(f,l),m=a[p+"AxisID"]||p;o[m]=o[m]||Object.create(null),Hs(o[m],[{axis:p},i[m],u[f]])})}),Object.keys(o).forEach(a=>{const s=o[a];Hs(s,[ot.scales[s.type],ot.scale])}),o}function dF(e){const t=e.options||(e.options={});t.plugins=ve(t.plugins,{}),t.scales=sG(e,t)}function fF(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function lG(e){return e=e||{},e.data=fF(e.data),dF(e),e}const L2=new Map,pF=new Set;function Hc(e,t){let n=L2.get(e);return n||(n=t(),L2.set(e,n),pF.add(n)),n}const us=(e,t,n)=>{const i=xr(t,n);i!==void 0&&e.add(i)};class cG{constructor(t){this._config=lG(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=fF(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),dF(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Hc(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return Hc(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return Hc(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,i=this.type;return Hc(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const i=this._scopeCache;let r=i.get(t);return(!r||n)&&(r=new Map,i.set(t,r)),r}getOptionScopes(t,n,i){const{options:r,type:o}=this,a=this._cachedScopes(t,i),s=a.get(n);if(s)return s;const l=new Set;n.forEach(u=>{t&&(l.add(t),u.forEach(f=>us(l,t,f))),u.forEach(f=>us(l,r,f)),u.forEach(f=>us(l,po[o]||{},f)),u.forEach(f=>us(l,ot,f)),u.forEach(f=>us(l,Eg,f))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),pF.has(n)&&a.set(n,c),c}chartOptionScopes(){const{options:t,type:n}=this;return[t,po[n]||{},ot.datasets[n]||{},{type:n},ot,Eg]}resolveNamedOptions(t,n,i,r=[""]){const o={$shared:!0},{resolver:a,subPrefixes:s}=R2(this._resolverCache,t,r);let l=a;if(dG(a,n)){o.$shared=!1,i=vr(i)?i():i;const c=this.createResolver(t,i,s);l=Ea(a,i,c)}for(const c of n)o[c]=l[c];return o}createResolver(t,n,i=[""],r){const{resolver:o}=R2(this._resolverCache,t,i);return we(n)?Ea(o,n,void 0,r):o}}function R2(e,t,n){let i=e.get(t);i||(i=new Map,e.set(t,i));const r=n.join();let o=i.get(r);return o||(o={resolver:I1(t,n),subPrefixes:n.filter(s=>!s.toLowerCase().includes("hover"))},i.set(r,o)),o}const uG=e=>we(e)&&Object.getOwnPropertyNames(e).reduce((t,n)=>t||vr(e[n]),!1);function dG(e,t){const{isScriptable:n,isIndexable:i}=W4(e);for(const r of t){const o=n(r),a=i(r),s=(a||o)&&e[r];if(o&&(vr(s)||uG(s))||a&&Ze(s))return!0}return!1}var fG="4.4.0";const pG=["top","bottom","left","right","chartArea"];function B2(e,t){return e==="top"||e==="bottom"||pG.indexOf(e)===-1&&t==="x"}function z2(e,t){return function(n,i){return n[e]===i[e]?n[t]-i[t]:n[e]-i[e]}}function N2(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),He(n&&n.onComplete,[e],t)}function hG(e){const t=e.chart,n=t.options.animation;He(n&&n.onProgress,[e],t)}function hF(e){return K4()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Au={},V2=e=>{const t=hF(e);return Object.values(Au).filter(n=>n.canvas===t).pop()};function gG(e,t,n){const i=Object.keys(e);for(const r of i){const o=+r;if(o>=t){const a=e[r];delete e[r],(n>0||o>t)&&(e[o+n]=a)}}}function mG(e,t,n,i){return!n||e.type==="mouseout"?null:i?t:e}function Uc(e,t,n){return e.options.clip?e[n]:t[n]}function xG(e,t){const{xScale:n,yScale:i}=e;return n&&i?{left:Uc(n,t,"left"),right:Uc(n,t,"right"),top:Uc(i,t,"top"),bottom:Uc(i,t,"bottom")}:t}var Hi;let za=(Hi=class{static register(...t){Kn.add(...t),j2()}static unregister(...t){Kn.remove(...t),j2()}constructor(t,n){const i=this.config=new cG(n),r=hF(t),o=V2(r);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const a=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||MY(r)),this.platform.updateConfig(i);const s=this.platform.acquireContext(r,a.aspectRatio),l=s&&s.canvas,c=l&&l.height,u=l&&l.width;if(this.id=bZ(),this.ctx=s,this.canvas=l,this.width=u,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new XY,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=IZ(f=>this.update(f),a.resizeDelay||0),this._dataChanges=[],Au[this.id]=this,!s||!l){console.error("Failed to create chart: can't acquire context from the given item");return}hi.listen(this,"complete",N2),hi.listen(this,"progress",hG),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:i,height:r,_aspectRatio:o}=this;return $e(t)?n&&o?o:r?i/r:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Kn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():c2(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return a2(this.canvas,this.ctx),this}stop(){return hi.stop(this),this}resize(t,n){hi.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const i=this.options,r=this.canvas,o=i.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,t,n,o),s=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,c2(this,s,!0)&&(this.notifyPlugins("resize",{size:a}),He(i.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Le(n,(i,r)=>{i.id=r})}buildOrUpdateScales(){const t=this.options,n=t.scales,i=this.scales,r=Object.keys(i).reduce((a,s)=>(a[s]=!1,a),{});let o=[];n&&(o=o.concat(Object.keys(n).map(a=>{const s=n[a],l=_g(a,s),c=l==="r",u=l==="x";return{options:s,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),Le(o,a=>{const s=a.options,l=s.id,c=_g(l,s),u=ve(s.type,a.dtype);(s.position===void 0||B2(s.position,c)!==B2(a.dposition))&&(s.position=a.dposition),r[l]=!0;let f=null;if(l in i&&i[l].type===u)f=i[l];else{const p=Kn.getScale(u);f=new p({id:l,type:u,ctx:this.ctx,chart:this}),i[f.id]=f}f.init(s,t)}),Le(r,(a,s)=>{a||delete i[s]}),Le(i,a=>{Rt.configure(this,a,a.options),Rt.addBox(this,a)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,i=t.length;if(t.sort((r,o)=>r.index-o.index),i>n){for(let r=n;r<i;++r)this._destroyDatasetMeta(r);t.splice(n,i-n)}this._sortedMetasets=t.slice(0).sort(z2("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((i,r)=>{n.filter(o=>o===i._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let i,r;for(this._removeUnreferencedMetasets(),i=0,r=n.length;i<r;i++){const o=n[i];let a=this.getDatasetMeta(i);const s=o.type||this.config.type;if(a.type&&a.type!==s&&(this._destroyDatasetMeta(i),a=this.getDatasetMeta(i)),a.type=s,a.indexAxis=o.indexAxis||kg(s,this.options),a.order=o.order||0,a.index=i,a.label=""+o.label,a.visible=this.isDatasetVisible(i),a.controller)a.controller.updateIndex(i),a.controller.linkScales();else{const l=Kn.getController(s),{datasetElementType:c,dataElementType:u}=ot.datasets[s];Object.assign(l,{dataElementType:Kn.getElement(u),datasetElementType:c&&Kn.getElement(c)}),a.controller=new l(this,i),t.push(a.controller)}}return this._updateMetasets(),t}_resetElements(){Le(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:f}=this.getDatasetMeta(c),p=!r&&o.indexOf(f)===-1;f.buildOrUpdateElements(p),a=Math.max(+f.getMaxOverflow(),a)}a=this._minPadding=i.layout.autoPadding?a:0,this._updateLayout(a),r||Le(o,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(z2("z","_idx"));const{_active:s,_lastEvent:l}=this;l?this._eventHandler(l,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){Le(this.scales,t=>{Rt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Ky(n,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:r,count:o}of n){const a=i==="_removeElements"?-o:o;gG(t,r,a)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=o=>new Set(t.filter(a=>a[0]===o).map((a,s)=>s+","+a.splice(1).join(","))),r=i(0);for(let o=1;o<n;o++)if(!Ky(r,i(o)))return;return Array.from(r).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Rt.update(this,this.width,this.height,t);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],Le(this.boxes,r=>{i&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,o)=>{r._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,vr(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const i=this.getDatasetMeta(t),r={meta:i,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(i.controller._update(n),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(hi.has(this)?this.attached&&!hi.running(this)&&hi.start(this):(this.draw(),N2({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:r}=this._resizeBeforeDraw;this._resize(i,r),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,i=[];let r,o;for(r=0,o=n.length;r<o;++r){const a=n[r];(!t||a.visible)&&i.push(a)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,i=t._clip,r=!i.disabled,o=xG(t,this.chartArea),a={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",a)!==!1&&(r&&fp(n,{left:i.left===!1?0:o.left-i.left,right:i.right===!1?this.width:o.right+i.right,top:i.top===!1?0:o.top-i.top,bottom:i.bottom===!1?this.height:o.bottom+i.bottom}),t.controller.draw(),r&&pp(n),a.cancelable=!1,this.notifyPlugins("afterDatasetDraw",a))}isPointInArea(t){return Fi(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,i,r){const o=pY.modes[n];return typeof o=="function"?o(this,t,i,r):[]}getDatasetMeta(t){const n=this.data.datasets[t],i=this._metasets;let r=i.filter(o=>o&&o._dataset===n).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},i.push(r)),r}getContext(){return this.$context||(this.$context=Sr(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(t,n){const i=this.getDatasetMeta(t);i.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,i){const r=i?"show":"hide",o=this.getDatasetMeta(t),a=o.controller._resolveAnimations(void 0,r);kl(n)?(o.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),a.update(o,{visible:i}),this.update(s=>s.datasetIndex===t?r:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),hi.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),a2(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Au[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,i=(o,a)=>{n.addEventListener(this,o,a),t[o]=a},r=(o,a,s)=>{o.offsetX=a,o.offsetY=s,this._eventHandler(o)};Le(this.options.events,o=>i(o,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),t[l]=c},r=(l,c)=>{t[l]&&(n.removeEventListener(this,l,c),delete t[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let a;const s=()=>{r("attach",s),this.attached=!0,this.resize(),i("resize",o),i("detach",a)};a=()=>{this.attached=!1,r("resize",o),this._stop(),this._resize(0,0),i("attach",s)},n.isAttached(this.canvas)?s():a()}unbindEvents(){Le(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},Le(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,i){const r=i?"set":"remove";let o,a,s,l;for(n==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+r+"DatasetHoverStyle"]()),s=0,l=t.length;s<l;++s){a=t[s];const c=a&&this.getDatasetMeta(a.datasetIndex).controller;c&&c[r+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],i=t.map(({datasetIndex:o,index:a})=>{const s=this.getDatasetMeta(o);if(!s)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:s.data[a],index:a}});!kd(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(t,n,i){return this._plugins.notify(this,t,n,i)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,i){const r=this.options.hover,o=(l,c)=>l.filter(u=>!c.some(f=>u.datasetIndex===f.datasetIndex&&u.index===f.index)),a=o(n,t),s=i?t:o(t,n);a.length&&this.updateHoverStyle(a,r.mode,!1),s.length&&r.mode&&this.updateHoverStyle(s,r.mode,!0)}_eventHandler(t,n){const i={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},r=a=>(a.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,r)===!1)return;const o=this._handleEvent(t,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,r),(o||i.changed)&&this.render(),this}_handleEvent(t,n,i){const{_active:r=[],options:o}=this,a=n,s=this._getActiveElements(t,r,i,a),l=FZ(t),c=mG(t,this._lastEvent,i,l);i&&(this._lastEvent=null,He(o.onHover,[t,s,this],this),l&&He(o.onClick,[t,s,this],this));const u=!kd(s,r);return(u||n)&&(this._active=s,this._updateHoverStyles(s,r,n)),this._lastEvent=c,u}_getActiveElements(t,n,i,r){if(t.type==="mouseout")return[];if(!i)return n;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,r)}},te(Hi,"defaults",ot),te(Hi,"instances",Au),te(Hi,"overrides",po),te(Hi,"registry",Kn),te(Hi,"version",fG),te(Hi,"getChart",V2),Hi);function j2(){return Le(za.instances,e=>e._plugins.invalidate())}function vG(e,t,n){const{startAngle:i,pixelMargin:r,x:o,y:a,outerRadius:s,innerRadius:l}=t;let c=r/s;e.beginPath(),e.arc(o,a,s,i-c,n+c),l>r?(c=r/l,e.arc(o,a,l,n+c,i-c,!0)):e.arc(o,a,r,n+ut,i-ut),e.closePath(),e.clip()}function bG(e){return M1(e,["outerStart","outerEnd","innerStart","innerEnd"])}function yG(e,t,n,i){const r=bG(e.options.borderRadius),o=(n-t)/2,a=Math.min(o,i*t/2),s=l=>{const c=(n-Math.min(o,l))*i/2;return Et(l,0,Math.min(o,c))};return{outerStart:s(r.outerStart),outerEnd:s(r.outerEnd),innerStart:Et(r.innerStart,0,a),innerEnd:Et(r.innerEnd,0,a)}}function Io(e,t,n,i){return{x:n+e*Math.cos(t),y:i+e*Math.sin(t)}}function Od(e,t,n,i,r,o){const{x:a,y:s,startAngle:l,pixelMargin:c,innerRadius:u}=t,f=Math.max(t.outerRadius+i+n-c,0),p=u>0?u+i+n+c:0;let m=0;const g=r-l;if(i){const z=u>0?u-i:0,q=f>0?f-i:0,G=(z+q)/2,N=G!==0?g*G/(G+i):g;m=(g-N)/2}const x=Math.max(.001,g*f-n/Ge)/f,y=(g-x)/2,v=l+y+m,b=r-y-m,{outerStart:E,outerEnd:S,innerStart:F,innerEnd:P}=yG(t,p,f,b-v),k=f-E,_=f-S,D=v+E/k,T=b-S/_,R=p+F,L=p+P,j=v+F/R,B=b-P/L;if(e.beginPath(),o){const z=(D+T)/2;if(e.arc(a,s,f,D,z),e.arc(a,s,f,z,T),S>0){const W=Io(_,T,a,s);e.arc(W.x,W.y,S,T,b+ut)}const q=Io(L,b,a,s);if(e.lineTo(q.x,q.y),P>0){const W=Io(L,B,a,s);e.arc(W.x,W.y,P,b+ut,B+Math.PI)}const G=(b-P/p+(v+F/p))/2;if(e.arc(a,s,p,b-P/p,G,!0),e.arc(a,s,p,G,v+F/p,!0),F>0){const W=Io(R,j,a,s);e.arc(W.x,W.y,F,j+Math.PI,v-ut)}const N=Io(k,v,a,s);if(e.lineTo(N.x,N.y),E>0){const W=Io(k,D,a,s);e.arc(W.x,W.y,E,v-ut,D)}}else{e.moveTo(a,s);const z=Math.cos(D)*f+a,q=Math.sin(D)*f+s;e.lineTo(z,q);const G=Math.cos(T)*f+a,N=Math.sin(T)*f+s;e.lineTo(G,N)}e.closePath()}function wG(e,t,n,i,r){const{fullCircles:o,startAngle:a,circumference:s}=t;let l=t.endAngle;if(o){Od(e,t,n,i,l,r);for(let c=0;c<o;++c)e.fill();isNaN(s)||(l=a+(s%Ye||Ye))}return Od(e,t,n,i,l,r),e.fill(),l}function CG(e,t,n,i,r){const{fullCircles:o,startAngle:a,circumference:s,options:l}=t,{borderWidth:c,borderJoinStyle:u,borderDash:f,borderDashOffset:p}=l,m=l.borderAlign==="inner";if(!c)return;e.setLineDash(f||[]),e.lineDashOffset=p,m?(e.lineWidth=c*2,e.lineJoin=u||"round"):(e.lineWidth=c,e.lineJoin=u||"bevel");let g=t.endAngle;if(o){Od(e,t,n,i,g,r);for(let x=0;x<o;++x)e.stroke();isNaN(s)||(g=a+(s%Ye||Ye))}m&&vG(e,t,g),o||(Od(e,t,n,i,g,r),e.stroke())}class _s extends qn{constructor(n){super();te(this,"circumference");te(this,"endAngle");te(this,"fullCircles");te(this,"innerRadius");te(this,"outerRadius");te(this,"pixelMargin");te(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,i,r){const o=this.getProps(["x","y"],r),{angle:a,distance:s}=I4(o,{x:n,y:i}),{startAngle:l,endAngle:c,innerRadius:u,outerRadius:f,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],r),m=(this.options.spacing+this.options.borderWidth)/2,x=ve(p,c-l)>=Ye||_l(a,l,c),y=Ei(s,u+m,f+m);return x&&y}getCenterPoint(n){const{x:i,y:r,startAngle:o,endAngle:a,innerRadius:s,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:c,spacing:u}=this.options,f=(o+a)/2,p=(s+l+u+c)/2;return{x:i+Math.cos(f)*p,y:r+Math.sin(f)*p}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:i,circumference:r}=this,o=(i.offset||0)/4,a=(i.spacing||0)/2,s=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=r>Ye?Math.floor(r/Ye):0,r===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const l=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(l)*o,Math.sin(l)*o);const c=1-Math.sin(Math.min(Ge,r||0)),u=o*c;n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,wG(n,this,u,a,s),CG(n,this,u,a,s),n.restore()}}te(_s,"id","arc"),te(_s,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),te(_s,"defaultRoutes",{backgroundColor:"backgroundColor"}),te(_s,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function gF(e,t,n=t){e.lineCap=ve(n.borderCapStyle,t.borderCapStyle),e.setLineDash(ve(n.borderDash,t.borderDash)),e.lineDashOffset=ve(n.borderDashOffset,t.borderDashOffset),e.lineJoin=ve(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=ve(n.borderWidth,t.borderWidth),e.strokeStyle=ve(n.borderColor,t.borderColor)}function EG(e,t,n){e.lineTo(n.x,n.y)}function SG(e){return e.stepped?ZZ:e.tension||e.cubicInterpolationMode==="monotone"?JZ:EG}function mF(e,t,n={}){const i=e.length,{start:r=0,end:o=i-1}=n,{start:a,end:s}=t,l=Math.max(r,a),c=Math.min(o,s),u=r<a&&o<a||r>s&&o>s;return{count:i,start:l,loop:t.loop,ilen:c<l&&!u?i+c-l:c-l}}function FG(e,t,n,i){const{points:r,options:o}=t,{count:a,start:s,loop:l,ilen:c}=mF(r,n,i),u=SG(o);let{move:f=!0,reverse:p}=i||{},m,g,x;for(m=0;m<=c;++m)g=r[(s+(p?c-m:m))%a],!g.skip&&(f?(e.moveTo(g.x,g.y),f=!1):u(e,x,g,p,o.stepped),x=g);return l&&(g=r[(s+(p?c:0))%a],u(e,x,g,p,o.stepped)),!!l}function kG(e,t,n,i){const r=t.points,{count:o,start:a,ilen:s}=mF(r,n,i),{move:l=!0,reverse:c}=i||{};let u=0,f=0,p,m,g,x,y,v;const b=S=>(a+(c?s-S:S))%o,E=()=>{x!==y&&(e.lineTo(u,y),e.lineTo(u,x),e.lineTo(u,v))};for(l&&(m=r[b(0)],e.moveTo(m.x,m.y)),p=0;p<=s;++p){if(m=r[b(p)],m.skip)continue;const S=m.x,F=m.y,P=S|0;P===g?(F<x?x=F:F>y&&(y=F),u=(f*u+S)/++f):(E(),e.lineTo(S,F),g=P,f=0,x=y=F),v=F}E()}function Pg(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?kG:FG}function _G(e){return e.stepped?kJ:e.tension||e.cubicInterpolationMode==="monotone"?_J:zr}function PG(e,t,n,i){let r=t._path;r||(r=t._path=new Path2D,t.path(r,n,i)&&r.closePath()),gF(e,t.options),e.stroke(r)}function AG(e,t,n,i){const{segments:r,options:o}=t,a=Pg(t);for(const s of r)gF(e,o,s.style),e.beginPath(),a(e,t,s,{start:n,end:n+i-1})&&e.closePath(),e.stroke()}const DG=typeof Path2D=="function";function $G(e,t,n,i){DG&&!t.options.segment?PG(e,t,n,i):AG(e,t,n,i)}class nr extends qn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const r=i.spanGaps?this._loop:this._fullLoop;vJ(this._points,i,t,r,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=TJ(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,i=t.length;return i&&n[t[i-1].end]}interpolate(t,n){const i=this.options,r=t[n],o=this.points,a=nF(this,{property:n,start:r,end:r});if(!a.length)return;const s=[],l=_G(i);let c,u;for(c=0,u=a.length;c<u;++c){const{start:f,end:p}=a[c],m=o[f],g=o[p];if(m===g){s.push(m);continue}const x=Math.abs((r-m[n])/(g[n]-m[n])),y=l(m,g,x,i.stepped);y[n]=t[n],s.push(y)}return s.length===1?s[0]:s}pathSegment(t,n,i){return Pg(this)(t,this,n,i)}path(t,n,i){const r=this.segments,o=Pg(this);let a=this._loop;n=n||0,i=i||this.points.length-n;for(const s of r)a&=o(t,this,s,{start:n,end:n+i-1});return!!a}draw(t,n,i,r){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),$G(t,this,i,r),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}te(nr,"id","line"),te(nr,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),te(nr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),te(nr,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function H2(e,t,n,i){const r=e.options,{[n]:o}=e.getProps([n],i);return Math.abs(t-o)<r.radius+r.hitRadius}class Du extends qn{constructor(n){super();te(this,"parsed");te(this,"skip");te(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,r){const o=this.options,{x:a,y:s}=this.getProps(["x","y"],r);return Math.pow(n-a,2)+Math.pow(i-s,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(n,i){return H2(this,n,"x",i)}inYRange(n,i){return H2(this,n,"y",i)}getCenterPoint(n){const{x:i,y:r}=this.getProps(["x","y"],n);return{x:i,y:r}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const r=i&&n.borderWidth||0;return(i+r)*2}draw(n,i){const r=this.options;this.skip||r.radius<.1||!Fi(this,i,this.size(r)/2)||(n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.fillStyle=r.backgroundColor,Sg(n,r,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}te(Du,"id","point"),te(Du,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),te(Du,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function xF(e,t){const{x:n,y:i,base:r,width:o,height:a}=e.getProps(["x","y","base","width","height"],t);let s,l,c,u,f;return e.horizontal?(f=a/2,s=Math.min(n,r),l=Math.max(n,r),c=i-f,u=i+f):(f=o/2,s=n-f,l=n+f,c=Math.min(i,r),u=Math.max(i,r)),{left:s,top:c,right:l,bottom:u}}function ir(e,t,n,i){return e?0:Et(t,n,i)}function OG(e,t,n){const i=e.options.borderWidth,r=e.borderSkipped,o=U4(i);return{t:ir(r.top,o.top,0,n),r:ir(r.right,o.right,0,t),b:ir(r.bottom,o.bottom,0,n),l:ir(r.left,o.left,0,t)}}function TG(e,t,n){const{enableBorderRadius:i}=e.getProps(["enableBorderRadius"]),r=e.options.borderRadius,o=Gr(r),a=Math.min(t,n),s=e.borderSkipped,l=i||we(r);return{topLeft:ir(!l||s.top||s.left,o.topLeft,0,a),topRight:ir(!l||s.top||s.right,o.topRight,0,a),bottomLeft:ir(!l||s.bottom||s.left,o.bottomLeft,0,a),bottomRight:ir(!l||s.bottom||s.right,o.bottomRight,0,a)}}function MG(e){const t=xF(e),n=t.right-t.left,i=t.bottom-t.top,r=OG(e,n/2,i/2),o=TG(e,n/2,i/2);return{outer:{x:t.left,y:t.top,w:n,h:i,radius:o},inner:{x:t.left+r.l,y:t.top+r.t,w:n-r.l-r.r,h:i-r.t-r.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,o.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(r.b,r.r))}}}}function Nh(e,t,n,i){const r=t===null,o=n===null,s=e&&!(r&&o)&&xF(e,i);return s&&(r||Ei(t,s.left,s.right))&&(o||Ei(n,s.top,s.bottom))}function IG(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function LG(e,t){e.rect(t.x,t.y,t.w,t.h)}function Vh(e,t,n={}){const i=e.x!==n.x?-t:0,r=e.y!==n.y?-t:0,o=(e.x+e.w!==n.x+n.w?t:0)-i,a=(e.y+e.h!==n.y+n.h?t:0)-r;return{x:e.x+i,y:e.y+r,w:e.w+o,h:e.h+a,radius:e.radius}}class Ys extends qn{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:i,backgroundColor:r}}=this,{inner:o,outer:a}=MG(this),s=IG(a.radius)?Pl:LG;t.save(),(a.w!==o.w||a.h!==o.h)&&(t.beginPath(),s(t,Vh(a,n,o)),t.clip(),s(t,Vh(o,-n,a)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),s(t,Vh(o,n)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,n,i){return Nh(this,t,n,i)}inXRange(t,n){return Nh(this,t,null,n)}inYRange(t,n){return Nh(this,null,t,n)}getCenterPoint(t){const{x:n,y:i,base:r,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(n+r)/2:n,y:o?i:(i+r)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}te(Ys,"id","bar"),te(Ys,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),te(Ys,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var RG=Object.freeze({__proto__:null,ArcElement:_s,BarElement:Ys,LineElement:nr,PointElement:Du});const Ag=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],U2=Ag.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function vF(e){return Ag[e%Ag.length]}function bF(e){return U2[e%U2.length]}function BG(e,t){return e.borderColor=vF(t),e.backgroundColor=bF(t),++t}function zG(e,t){return e.backgroundColor=e.data.map(()=>vF(t++)),t}function NG(e,t){return e.backgroundColor=e.data.map(()=>bF(t++)),t}function VG(e){let t=0;return(n,i)=>{const r=e.getDatasetMeta(i).controller;r instanceof tr?t=zG(n,t):r instanceof Js?t=NG(n,t):r&&(t=BG(n,t))}}function W2(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function jG(e){return e&&(e.borderColor||e.backgroundColor)}var HG={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;const{data:{datasets:i},options:r}=e.config,{elements:o}=r;if(!n.forceOverride&&(W2(i)||jG(r)||o&&W2(o)))return;const a=VG(e);i.forEach(a)}};function UG(e,t,n,i,r){const o=r.samples||i;if(o>=n)return e.slice(t,t+n);const a=[],s=(n-2)/(o-2);let l=0;const c=t+n-1;let u=t,f,p,m,g,x;for(a[l++]=e[u],f=0;f<o-2;f++){let y=0,v=0,b;const E=Math.floor((f+1)*s)+1+t,S=Math.min(Math.floor((f+2)*s)+1,n)+t,F=S-E;for(b=E;b<S;b++)y+=e[b].x,v+=e[b].y;y/=F,v/=F;const P=Math.floor(f*s)+1+t,k=Math.min(Math.floor((f+1)*s)+1,n)+t,{x:_,y:D}=e[u];for(m=g=-1,b=P;b<k;b++)g=.5*Math.abs((_-y)*(e[b].y-D)-(_-e[b].x)*(v-D)),g>m&&(m=g,p=e[b],x=b);a[l++]=p,u=x}return a[l++]=e[c],a}function WG(e,t,n,i){let r=0,o=0,a,s,l,c,u,f,p,m,g,x;const y=[],v=t+n-1,b=e[t].x,S=e[v].x-b;for(a=t;a<t+n;++a){s=e[a],l=(s.x-b)/S*i,c=s.y;const F=l|0;if(F===u)c<g?(g=c,f=a):c>x&&(x=c,p=a),r=(o*r+s.x)/++o;else{const P=a-1;if(!$e(f)&&!$e(p)){const k=Math.min(f,p),_=Math.max(f,p);k!==m&&k!==P&&y.push({...e[k],x:r}),_!==m&&_!==P&&y.push({...e[_],x:r})}a>0&&P!==m&&y.push(e[P]),y.push(s),u=F,o=0,g=x=c,f=p=m=a}}return y}function yF(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function q2(e){e.data.datasets.forEach(t=>{yF(t)})}function qG(e,t){const n=t.length;let i=0,r;const{iScale:o}=e,{min:a,max:s,minDefined:l,maxDefined:c}=o.getUserBounds();return l&&(i=Et(Si(t,o.axis,a).lo,0,n-1)),c?r=Et(Si(t,o.axis,s).hi+1,i,n)-i:r=n-i,{start:i,count:r}}var ZG={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled){q2(e);return}const i=e.width;e.data.datasets.forEach((r,o)=>{const{_data:a,indexAxis:s}=r,l=e.getDatasetMeta(o),c=a||r.data;if(Fs([s,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const u=e.scales[l.xAxisID];if(u.type!=="linear"&&u.type!=="time"||e.options.parsing)return;let{start:f,count:p}=qG(l,c);const m=n.threshold||4*i;if(p<=m){yF(r);return}$e(a)&&(r._data=c,delete r.data,Object.defineProperty(r,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(x){this._data=x}}));let g;switch(n.algorithm){case"lttb":g=UG(c,f,p,i,n);break;case"min-max":g=WG(c,f,p,i);break;default:throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)}r._decimated=g})},destroy(e){q2(e)}};function JG(e,t,n){const i=e.segments,r=e.points,o=t.points,a=[];for(const s of i){let{start:l,end:c}=s;c=N1(l,c,r);const u=Dg(n,r[l],r[c],s.loop);if(!t.segments){a.push({source:s,target:u,start:r[l],end:r[c]});continue}const f=nF(t,u);for(const p of f){const m=Dg(n,o[p.start],o[p.end],p.loop),g=tF(s,r,m);for(const x of g)a.push({source:x,target:p,start:{[n]:Z2(u,m,"start",Math.max)},end:{[n]:Z2(u,m,"end",Math.min)}})}}return a}function Dg(e,t,n,i){if(i)return;let r=t[e],o=n[e];return e==="angle"&&(r=sn(r),o=sn(o)),{property:e,start:r,end:o}}function YG(e,t){const{x:n=null,y:i=null}=e||{},r=t.points,o=[];return t.segments.forEach(({start:a,end:s})=>{s=N1(a,s,r);const l=r[a],c=r[s];i!==null?(o.push({x:l.x,y:i}),o.push({x:c.x,y:i})):n!==null&&(o.push({x:n,y:l.y}),o.push({x:n,y:c.y}))}),o}function N1(e,t,n){for(;t>e;t--){const i=n[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Z2(e,t,n,i){return e&&t?i(e[n],t[n]):e?e[n]:t?t[n]:0}function wF(e,t){let n=[],i=!1;return Ze(e)?(i=!0,n=e):n=YG(e,t),n.length?new nr({points:n,options:{tension:0},_loop:i,_fullLoop:i}):null}function J2(e){return e&&e.fill!==!1}function GG(e,t,n){let r=e[t].fill;const o=[t];let a;if(!n)return r;for(;r!==!1&&o.indexOf(r)===-1;){if(!rt(r))return r;if(a=e[r],!a)return!1;if(a.visible)return r;o.push(r),r=a.fill}return!1}function KG(e,t,n){const i=tK(e);if(we(i))return isNaN(i.value)?!1:i;let r=parseFloat(i);return rt(r)&&Math.floor(r)===r?XG(i[0],t,r,n):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function XG(e,t,n,i){return(e==="-"||e==="+")&&(n=t+n),n===t||n<0||n>=i?!1:n}function QG(e,t){let n=null;return e==="start"?n=t.bottom:e==="end"?n=t.top:we(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function eK(e,t,n){let i;return e==="start"?i=n:e==="end"?i=t.options.reverse?t.min:t.max:we(e)?i=e.value:i=t.getBaseValue(),i}function tK(e){const t=e.options,n=t.fill;let i=ve(n&&n.target,n);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function nK(e){const{scale:t,index:n,line:i}=e,r=[],o=i.segments,a=i.points,s=iK(t,n);s.push(wF({x:null,y:t.bottom},i));for(let l=0;l<o.length;l++){const c=o[l];for(let u=c.start;u<=c.end;u++)rK(r,a[u],s)}return new nr({points:r,options:{}})}function iK(e,t){const n=[],i=e.getMatchingVisibleMetas("line");for(let r=0;r<i.length;r++){const o=i[r];if(o.index===t)break;o.hidden||n.unshift(o.dataset)}return n}function rK(e,t,n){const i=[];for(let r=0;r<n.length;r++){const o=n[r],{first:a,last:s,point:l}=oK(o,t,"x");if(!(!l||a&&s)){if(a)i.unshift(l);else if(e.push(l),!s)break}}e.push(...i)}function oK(e,t,n){const i=e.interpolate(t,n);if(!i)return{};const r=i[n],o=e.segments,a=e.points;let s=!1,l=!1;for(let c=0;c<o.length;c++){const u=o[c],f=a[u.start][n],p=a[u.end][n];if(Ei(r,f,p)){s=r===f,l=r===p;break}}return{first:s,last:l,point:i}}class CF{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,n,i){const{x:r,y:o,radius:a}=this;return n=n||{start:0,end:Ye},t.arc(r,o,a,n.end,n.start,!0),!i.bounds}interpolate(t){const{x:n,y:i,radius:r}=this,o=t.angle;return{x:n+Math.cos(o)*r,y:i+Math.sin(o)*r,angle:o}}}function aK(e){const{chart:t,fill:n,line:i}=e;if(rt(n))return sK(t,n);if(n==="stack")return nK(e);if(n==="shape")return!0;const r=lK(e);return r instanceof CF?r:wF(r,i)}function sK(e,t){const n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function lK(e){return(e.scale||{}).getPointPositionForValue?uK(e):cK(e)}function cK(e){const{scale:t={},fill:n}=e,i=QG(n,t);if(rt(i)){const r=t.isHorizontal();return{x:r?i:null,y:r?null:i}}return null}function uK(e){const{scale:t,fill:n}=e,i=t.options,r=t.getLabels().length,o=i.reverse?t.max:t.min,a=eK(n,t,o),s=[];if(i.grid.circular){const l=t.getPointPositionForValue(0,o);return new CF({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(a)})}for(let l=0;l<r;++l)s.push(t.getPointPositionForValue(l,a));return s}function jh(e,t,n){const i=aK(t),{line:r,scale:o,axis:a}=t,s=r.options,l=s.fill,c=s.backgroundColor,{above:u=c,below:f=c}=l||{};i&&r.points.length&&(fp(e,n),dK(e,{line:r,target:i,above:u,below:f,area:n,scale:o,axis:a}),pp(e))}function dK(e,t){const{line:n,target:i,above:r,below:o,area:a,scale:s}=t,l=n._loop?"angle":t.axis;e.save(),l==="x"&&o!==r&&(Y2(e,i,a.top),G2(e,{line:n,target:i,color:r,scale:s,property:l}),e.restore(),e.save(),Y2(e,i,a.bottom)),G2(e,{line:n,target:i,color:o,scale:s,property:l}),e.restore()}function Y2(e,t,n){const{segments:i,points:r}=t;let o=!0,a=!1;e.beginPath();for(const s of i){const{start:l,end:c}=s,u=r[l],f=r[N1(l,c,r)];o?(e.moveTo(u.x,u.y),o=!1):(e.lineTo(u.x,n),e.lineTo(u.x,u.y)),a=!!t.pathSegment(e,s,{move:a}),a?e.closePath():e.lineTo(f.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function G2(e,t){const{line:n,target:i,property:r,color:o,scale:a}=t,s=JG(n,i,r);for(const{source:l,target:c,start:u,end:f}of s){const{style:{backgroundColor:p=o}={}}=l,m=i!==!0;e.save(),e.fillStyle=p,fK(e,a,m&&Dg(r,u,f)),e.beginPath();const g=!!n.pathSegment(e,l);let x;if(m){g?e.closePath():K2(e,i,f,r);const y=!!i.pathSegment(e,c,{move:g,reverse:!0});x=g&&y,x||K2(e,i,u,r)}e.closePath(),e.fill(x?"evenodd":"nonzero"),e.restore()}}function fK(e,t,n){const{top:i,bottom:r}=t.chart.chartArea,{property:o,start:a,end:s}=n||{};o==="x"&&(e.beginPath(),e.rect(a,i,s-a,r-i),e.clip())}function K2(e,t,n,i){const r=t.interpolate(n,i);r&&e.lineTo(r.x,r.y)}var pK={id:"filler",afterDatasetsUpdate(e,t,n){const i=(e.data.datasets||[]).length,r=[];let o,a,s,l;for(a=0;a<i;++a)o=e.getDatasetMeta(a),s=o.dataset,l=null,s&&s.options&&s instanceof nr&&(l={visible:e.isDatasetVisible(a),index:a,fill:KG(s,a,i),chart:e,axis:o.controller.options.indexAxis,scale:o.vScale,line:s}),o.$filler=l,r.push(l);for(a=0;a<i;++a)l=r[a],!(!l||l.fill===!1)&&(l.fill=GG(r,a,n.propagate))},beforeDraw(e,t,n){const i=n.drawTime==="beforeDraw",r=e.getSortedVisibleDatasetMetas(),o=e.chartArea;for(let a=r.length-1;a>=0;--a){const s=r[a].$filler;s&&(s.line.updateControlPoints(o,s.axis),i&&s.fill&&jh(e.ctx,s,o))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!=="beforeDatasetsDraw")return;const i=e.getSortedVisibleDatasetMetas();for(let r=i.length-1;r>=0;--r){const o=i[r].$filler;J2(o)&&jh(e.ctx,o,e.chartArea)}},beforeDatasetDraw(e,t,n){const i=t.meta.$filler;!J2(i)||n.drawTime!=="beforeDatasetDraw"||jh(e.ctx,i,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const X2=(e,t)=>{let{boxHeight:n=t,boxWidth:i=t}=e;return e.usePointStyle&&(n=Math.min(n,t),i=e.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(t,n)}},hK=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Q2 extends qn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,i){this.maxWidth=t,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=He(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(i=>t.filter(i,this.chart.data))),t.sort&&(n=n.sort((i,r)=>t.sort(i,r,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,r=vt(i.font),o=r.size,a=this._computeTitleHeight(),{boxWidth:s,itemHeight:l}=X2(i,o);let c,u;n.font=r.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(a,o,s,l)+10):(u=this.maxHeight,c=this._fitCols(a,r,s,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,n,i,r){const{ctx:o,maxWidth:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=r+s;let f=t;o.textAlign="left",o.textBaseline="middle";let p=-1,m=-u;return this.legendItems.forEach((g,x)=>{const y=i+n/2+o.measureText(g.text).width;(x===0||c[c.length-1]+y+2*s>a)&&(f+=u,c[c.length-(x>0?0:1)]=0,m+=u,p++),l[x]={left:0,top:m,row:p,width:y,height:r},c[c.length-1]+=y+s}),f}_fitCols(t,n,i,r){const{ctx:o,maxHeight:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=a-t;let f=s,p=0,m=0,g=0,x=0;return this.legendItems.forEach((y,v)=>{const{itemWidth:b,itemHeight:E}=gK(i,n,o,y,r);v>0&&m+E+2*s>u&&(f+=p+s,c.push({width:p,height:m}),g+=p+s,x++,p=m=0),l[v]={left:g,top:m,col:x,width:b,height:E},p=Math.max(p,b),m+=E+s}),f+=p,c.push({width:p,height:m}),f}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:r},rtl:o}}=this,a=ca(o,this.left,this.width);if(this.isHorizontal()){let s=0,l=It(i,this.left+r,this.right-this.lineWidths[s]);for(const c of n)s!==c.row&&(s=c.row,l=It(i,this.left+r,this.right-this.lineWidths[s])),c.top+=this.top+t+r,c.left=a.leftForLtr(a.x(l),c.width),l+=c.width+r}else{let s=0,l=It(i,this.top+t+r,this.bottom-this.columnSizes[s].height);for(const c of n)c.col!==s&&(s=c.col,l=It(i,this.top+t+r,this.bottom-this.columnSizes[s].height)),c.top=l,c.left+=this.left+r,c.left=a.leftForLtr(a.x(c.left),c.width),l+=c.height+r}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;fp(t,this),this._draw(),pp(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:i,ctx:r}=this,{align:o,labels:a}=t,s=ot.color,l=ca(t.rtl,this.left,this.width),c=vt(a.font),{padding:u}=a,f=c.size,p=f/2;let m;this.drawTitle(),r.textAlign=l.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=c.string;const{boxWidth:g,boxHeight:x,itemHeight:y}=X2(a,f),v=function(P,k,_){if(isNaN(g)||g<=0||isNaN(x)||x<0)return;r.save();const D=ve(_.lineWidth,1);if(r.fillStyle=ve(_.fillStyle,s),r.lineCap=ve(_.lineCap,"butt"),r.lineDashOffset=ve(_.lineDashOffset,0),r.lineJoin=ve(_.lineJoin,"miter"),r.lineWidth=D,r.strokeStyle=ve(_.strokeStyle,s),r.setLineDash(ve(_.lineDash,[])),a.usePointStyle){const T={radius:x*Math.SQRT2/2,pointStyle:_.pointStyle,rotation:_.rotation,borderWidth:D},R=l.xPlus(P,g/2),L=k+p;H4(r,T,R,L,a.pointStyleWidth&&g)}else{const T=k+Math.max((f-x)/2,0),R=l.leftForLtr(P,g),L=Gr(_.borderRadius);r.beginPath(),Object.values(L).some(j=>j!==0)?Pl(r,{x:R,y:T,w:g,h:x,radius:L}):r.rect(R,T,g,x),r.fill(),D!==0&&r.stroke()}r.restore()},b=function(P,k,_){ho(r,_.text,P,k+y/2,c,{strikethrough:_.hidden,textAlign:l.textAlign(_.textAlign)})},E=this.isHorizontal(),S=this._computeTitleHeight();E?m={x:It(o,this.left+u,this.right-i[0]),y:this.top+u+S,line:0}:m={x:this.left+u,y:It(o,this.top+S+u,this.bottom-n[0].height),line:0},X4(this.ctx,t.textDirection);const F=y+u;this.legendItems.forEach((P,k)=>{r.strokeStyle=P.fontColor,r.fillStyle=P.fontColor;const _=r.measureText(P.text).width,D=l.textAlign(P.textAlign||(P.textAlign=a.textAlign)),T=g+p+_;let R=m.x,L=m.y;l.setWidth(this.width),E?k>0&&R+T+u>this.right&&(L=m.y+=F,m.line++,R=m.x=It(o,this.left+u,this.right-i[m.line])):k>0&&L+F>this.bottom&&(R=m.x=R+n[m.line].width+u,m.line++,L=m.y=It(o,this.top+S+u,this.bottom-n[m.line].height));const j=l.x(R);if(v(j,L,P),R=LZ(D,R+g+p,E?R+T:this.right,t.rtl),b(l.x(R),L,P),E)m.x+=T+u;else if(typeof P.text!="string"){const B=c.lineHeight;m.y+=EF(P,B)+u}else m.y+=F}),Q4(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,i=vt(n.font),r=Nt(n.padding);if(!n.display)return;const o=ca(t.rtl,this.left,this.width),a=this.ctx,s=n.position,l=i.size/2,c=r.top+l;let u,f=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),u=this.top+c,f=It(t.align,f,this.right-p);else{const g=this.columnSizes.reduce((x,y)=>Math.max(x,y.height),0);u=c+It(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const m=It(s,f,f+p);a.textAlign=o.textAlign(O1(s)),a.textBaseline="middle",a.strokeStyle=n.color,a.fillStyle=n.color,a.font=i.string,ho(a,n.text,m,u,i)}_computeTitleHeight(){const t=this.options.title,n=vt(t.font),i=Nt(t.padding);return t.display?n.lineHeight+i.height:0}_getLegendItemAt(t,n){let i,r,o;if(Ei(t,this.left,this.right)&&Ei(n,this.top,this.bottom)){for(o=this.legendHitBoxes,i=0;i<o.length;++i)if(r=o[i],Ei(t,r.left,r.left+r.width)&&Ei(n,r.top,r.top+r.height))return this.legendItems[i]}return null}handleEvent(t){const n=this.options;if(!vK(t.type,n))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const r=this._hoveredItem,o=hK(r,i);r&&!o&&He(n.onLeave,[t,r,this],this),this._hoveredItem=i,i&&!o&&He(n.onHover,[t,i,this],this)}else i&&He(n.onClick,[t,i,this],this)}}function gK(e,t,n,i,r){const o=mK(i,e,t,n),a=xK(r,i,t.lineHeight);return{itemWidth:o,itemHeight:a}}function mK(e,t,n,i){let r=e.text;return r&&typeof r!="string"&&(r=r.reduce((o,a)=>o.length>a.length?o:a)),t+n.size/2+i.measureText(r).width}function xK(e,t,n){let i=e;return typeof t.text!="string"&&(i=EF(t,n)),i}function EF(e,t){const n=e.text?e.text.length:0;return t*n}function vK(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var SF={id:"legend",_element:Q2,start(e,t,n){const i=e.legend=new Q2({ctx:e.ctx,options:n,chart:e});Rt.configure(e,i,n),Rt.addBox(e,i)},stop(e){Rt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const i=e.legend;Rt.configure(e,i,n),i.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const i=t.datasetIndex,r=n.chart;r.isDatasetVisible(i)?(r.hide(i),t.hidden=!0):(r.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:r,color:o,useBorderRadius:a,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=Nt(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:r||c.textAlign,borderRadius:a&&(s||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};let V1=class extends qn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const r=Ze(i.text)?i.text.length:1;this._padding=Nt(i.padding);const o=r*vt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:i,bottom:r,right:o,options:a}=this,s=a.align;let l=0,c,u,f;return this.isHorizontal()?(u=It(s,i,o),f=n+t,c=o-i):(a.position==="left"?(u=i+t,f=It(s,r,n),l=Ge*-.5):(u=o-t,f=It(s,n,r),l=Ge*.5),c=r-n),{titleX:u,titleY:f,maxWidth:c,rotation:l}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const i=vt(n.font),o=i.lineHeight/2+this._padding.top,{titleX:a,titleY:s,maxWidth:l,rotation:c}=this._drawArgs(o);ho(t,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:c,textAlign:O1(n.align),textBaseline:"middle",translation:[a,s]})}};function bK(e,t){const n=new V1({ctx:e.ctx,options:t,chart:e});Rt.configure(e,n,t),Rt.addBox(e,n),e.titleBlock=n}var FF={id:"title",_element:V1,start(e,t,n){bK(e,n)},stop(e){const t=e.titleBlock;Rt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const i=e.titleBlock;Rt.configure(e,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Wc=new WeakMap;var yK={id:"subtitle",start(e,t,n){const i=new V1({ctx:e.ctx,options:n,chart:e});Rt.configure(e,i,n),Rt.addBox(e,i),Wc.set(e,i)},stop(e){Rt.removeBox(e,Wc.get(e)),Wc.delete(e)},beforeUpdate(e,t,n){const i=Wc.get(e);Rt.configure(e,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ps={average(e){if(!e.length)return!1;let t,n,i=0,r=0,o=0;for(t=0,n=e.length;t<n;++t){const a=e[t].element;if(a&&a.hasValue()){const s=a.tooltipPosition();i+=s.x,r+=s.y,++o}}return{x:i/o,y:r/o}},nearest(e,t){if(!e.length)return!1;let n=t.x,i=t.y,r=Number.POSITIVE_INFINITY,o,a,s;for(o=0,a=e.length;o<a;++o){const l=e[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Cg(t,c);u<r&&(r=u,s=l)}}if(s){const l=s.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function Yn(e,t){return t&&(Ze(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function gi(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function wK(e,t){const{element:n,datasetIndex:i,index:r}=t,o=e.getDatasetMeta(i).controller,{label:a,value:s}=o.getLabelAndValue(r);return{chart:e,label:a,parsed:o.getParsed(r),raw:e.data.datasets[i].data[r],formattedValue:s,dataset:o.getDataset(),dataIndex:r,datasetIndex:i,element:n}}function ew(e,t){const n=e.chart.ctx,{body:i,footer:r,title:o}=e,{boxWidth:a,boxHeight:s}=t,l=vt(t.bodyFont),c=vt(t.titleFont),u=vt(t.footerFont),f=o.length,p=r.length,m=i.length,g=Nt(t.padding);let x=g.height,y=0,v=i.reduce((S,F)=>S+F.before.length+F.lines.length+F.after.length,0);if(v+=e.beforeBody.length+e.afterBody.length,f&&(x+=f*c.lineHeight+(f-1)*t.titleSpacing+t.titleMarginBottom),v){const S=t.displayColors?Math.max(s,l.lineHeight):l.lineHeight;x+=m*S+(v-m)*l.lineHeight+(v-1)*t.bodySpacing}p&&(x+=t.footerMarginTop+p*u.lineHeight+(p-1)*t.footerSpacing);let b=0;const E=function(S){y=Math.max(y,n.measureText(S).width+b)};return n.save(),n.font=c.string,Le(e.title,E),n.font=l.string,Le(e.beforeBody.concat(e.afterBody),E),b=t.displayColors?a+2+t.boxPadding:0,Le(i,S=>{Le(S.before,E),Le(S.lines,E),Le(S.after,E)}),b=0,n.font=u.string,Le(e.footer,E),n.restore(),y+=g.width,{width:y,height:x}}function CK(e,t){const{y:n,height:i}=t;return n<i/2?"top":n>e.height-i/2?"bottom":"center"}function EK(e,t,n,i){const{x:r,width:o}=i,a=n.caretSize+n.caretPadding;if(e==="left"&&r+o+a>t.width||e==="right"&&r-o-a<0)return!0}function SK(e,t,n,i){const{x:r,width:o}=n,{width:a,chartArea:{left:s,right:l}}=e;let c="center";return i==="center"?c=r<=(s+l)/2?"left":"right":r<=o/2?c="left":r>=a-o/2&&(c="right"),EK(c,e,t,n)&&(c="center"),c}function tw(e,t,n){const i=n.yAlign||t.yAlign||CK(e,n);return{xAlign:n.xAlign||t.xAlign||SK(e,t,n,i),yAlign:i}}function FK(e,t){let{x:n,width:i}=e;return t==="right"?n-=i:t==="center"&&(n-=i/2),n}function kK(e,t,n){let{y:i,height:r}=e;return t==="top"?i+=n:t==="bottom"?i-=r+n:i-=r/2,i}function nw(e,t,n,i){const{caretSize:r,caretPadding:o,cornerRadius:a}=e,{xAlign:s,yAlign:l}=n,c=r+o,{topLeft:u,topRight:f,bottomLeft:p,bottomRight:m}=Gr(a);let g=FK(t,s);const x=kK(t,l,c);return l==="center"?s==="left"?g+=c:s==="right"&&(g-=c):s==="left"?g-=Math.max(u,p)+r:s==="right"&&(g+=Math.max(f,m)+r),{x:Et(g,0,i.width-t.width),y:Et(x,0,i.height-t.height)}}function qc(e,t,n){const i=Nt(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-i.right:e.x+i.left}function iw(e){return Yn([],gi(e))}function _K(e,t,n){return Sr(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function rw(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const kF={beforeTitle:pi,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return n[t.dataIndex]}return""},afterTitle:pi,beforeBody:pi,beforeLabel:pi,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return $e(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:pi,afterBody:pi,beforeFooter:pi,footer:pi,afterFooter:pi};function Jt(e,t,n,i){const r=e[t].call(n,i);return typeof r>"u"?kF[t].call(n,i):r}var Yh;let ow=(Yh=class extends qn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,i=this.options.setContext(this.getContext()),r=i.enabled&&n.options.animation&&i.animations,o=new iF(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=_K(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:i}=n,r=Jt(i,"beforeTitle",this,t),o=Jt(i,"title",this,t),a=Jt(i,"afterTitle",this,t);let s=[];return s=Yn(s,gi(r)),s=Yn(s,gi(o)),s=Yn(s,gi(a)),s}getBeforeBody(t,n){return iw(Jt(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:i}=n,r=[];return Le(t,o=>{const a={before:[],lines:[],after:[]},s=rw(i,o);Yn(a.before,gi(Jt(s,"beforeLabel",this,o))),Yn(a.lines,Jt(s,"label",this,o)),Yn(a.after,gi(Jt(s,"afterLabel",this,o))),r.push(a)}),r}getAfterBody(t,n){return iw(Jt(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:i}=n,r=Jt(i,"beforeFooter",this,t),o=Jt(i,"footer",this,t),a=Jt(i,"afterFooter",this,t);let s=[];return s=Yn(s,gi(r)),s=Yn(s,gi(o)),s=Yn(s,gi(a)),s}_createItems(t){const n=this._active,i=this.chart.data,r=[],o=[],a=[];let s=[],l,c;for(l=0,c=n.length;l<c;++l)s.push(wK(this.chart,n[l]));return t.filter&&(s=s.filter((u,f,p)=>t.filter(u,f,p,i))),t.itemSort&&(s=s.sort((u,f)=>t.itemSort(u,f,i))),Le(s,u=>{const f=rw(t.callbacks,u);r.push(Jt(f,"labelColor",this,u)),o.push(Jt(f,"labelPointStyle",this,u)),a.push(Jt(f,"labelTextColor",this,u))}),this.labelColors=r,this.labelPointStyles=o,this.labelTextColors=a,this.dataPoints=s,s}update(t,n){const i=this.options.setContext(this.getContext()),r=this._active;let o,a=[];if(!r.length)this.opacity!==0&&(o={opacity:0});else{const s=Ps[i.position].call(this,r,this._eventPosition);a=this._createItems(i),this.title=this.getTitle(a,i),this.beforeBody=this.getBeforeBody(a,i),this.body=this.getBody(a,i),this.afterBody=this.getAfterBody(a,i),this.footer=this.getFooter(a,i);const l=this._size=ew(this,i),c=Object.assign({},s,l),u=tw(this.chart,i,c),f=nw(i,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,o={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:s.x,caretY:s.y}}this._tooltipItems=a,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,i,r){const o=this.getCaretPosition(t,i,r);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(t,n,i){const{xAlign:r,yAlign:o}=this,{caretSize:a,cornerRadius:s}=i,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:f}=Gr(s),{x:p,y:m}=t,{width:g,height:x}=n;let y,v,b,E,S,F;return o==="center"?(S=m+x/2,r==="left"?(y=p,v=y-a,E=S+a,F=S-a):(y=p+g,v=y+a,E=S-a,F=S+a),b=y):(r==="left"?v=p+Math.max(l,u)+a:r==="right"?v=p+g-Math.max(c,f)-a:v=this.caretX,o==="top"?(E=m,S=E-a,y=v-a,b=v+a):(E=m+x,S=E+a,y=v+a,b=v-a),F=E),{x1:y,x2:v,x3:b,y1:E,y2:S,y3:F}}drawTitle(t,n,i){const r=this.title,o=r.length;let a,s,l;if(o){const c=ca(i.rtl,this.x,this.width);for(t.x=qc(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",a=vt(i.titleFont),s=i.titleSpacing,n.fillStyle=i.titleColor,n.font=a.string,l=0;l<o;++l)n.fillText(r[l],c.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+s,l+1===o&&(t.y+=i.titleMarginBottom-s)}}_drawColorBox(t,n,i,r,o){const a=this.labelColors[i],s=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=o,u=vt(o.bodyFont),f=qc(this,"left",o),p=r.x(f),m=l<u.lineHeight?(u.lineHeight-l)/2:0,g=n.y+m;if(o.usePointStyle){const x={radius:Math.min(c,l)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},y=r.leftForLtr(p,c)+c/2,v=g+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Sg(t,x,y,v),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,Sg(t,x,y,v)}else{t.lineWidth=we(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const x=r.leftForLtr(p,c),y=r.leftForLtr(r.xPlus(p,1),c-2),v=Gr(a.borderRadius);Object.values(v).some(b=>b!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,Pl(t,{x,y:g,w:c,h:l,radius:v}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),Pl(t,{x:y,y:g+1,w:c-2,h:l-2,radius:v}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(x,g,c,l),t.strokeRect(x,g,c,l),t.fillStyle=a.backgroundColor,t.fillRect(y,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,n,i){const{body:r}=this,{bodySpacing:o,bodyAlign:a,displayColors:s,boxHeight:l,boxWidth:c,boxPadding:u}=i,f=vt(i.bodyFont);let p=f.lineHeight,m=0;const g=ca(i.rtl,this.x,this.width),x=function(_){n.fillText(_,g.x(t.x+m),t.y+p/2),t.y+=p+o},y=g.textAlign(a);let v,b,E,S,F,P,k;for(n.textAlign=a,n.textBaseline="middle",n.font=f.string,t.x=qc(this,y,i),n.fillStyle=i.bodyColor,Le(this.beforeBody,x),m=s&&y!=="right"?a==="center"?c/2+u:c+2+u:0,S=0,P=r.length;S<P;++S){for(v=r[S],b=this.labelTextColors[S],n.fillStyle=b,Le(v.before,x),E=v.lines,s&&E.length&&(this._drawColorBox(n,t,S,g,i),p=Math.max(f.lineHeight,l)),F=0,k=E.length;F<k;++F)x(E[F]),p=f.lineHeight;Le(v.after,x)}m=0,p=f.lineHeight,Le(this.afterBody,x),t.y-=o}drawFooter(t,n,i){const r=this.footer,o=r.length;let a,s;if(o){const l=ca(i.rtl,this.x,this.width);for(t.x=qc(this,i.footerAlign,i),t.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",a=vt(i.footerFont),n.fillStyle=i.footerColor,n.font=a.string,s=0;s<o;++s)n.fillText(r[s],l.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+i.footerSpacing}}drawBackground(t,n,i,r){const{xAlign:o,yAlign:a}=this,{x:s,y:l}=t,{width:c,height:u}=i,{topLeft:f,topRight:p,bottomLeft:m,bottomRight:g}=Gr(r.cornerRadius);n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.beginPath(),n.moveTo(s+f,l),a==="top"&&this.drawCaret(t,n,i,r),n.lineTo(s+c-p,l),n.quadraticCurveTo(s+c,l,s+c,l+p),a==="center"&&o==="right"&&this.drawCaret(t,n,i,r),n.lineTo(s+c,l+u-g),n.quadraticCurveTo(s+c,l+u,s+c-g,l+u),a==="bottom"&&this.drawCaret(t,n,i,r),n.lineTo(s+m,l+u),n.quadraticCurveTo(s,l+u,s,l+u-m),a==="center"&&o==="left"&&this.drawCaret(t,n,i,r),n.lineTo(s,l+f),n.quadraticCurveTo(s,l,s+f,l),n.closePath(),n.fill(),r.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,i=this.$animations,r=i&&i.x,o=i&&i.y;if(r||o){const a=Ps[t.position].call(this,this._active,this._eventPosition);if(!a)return;const s=this._size=ew(this,t),l=Object.assign({},a,this._size),c=tw(n,t,l),u=nw(t,l,c,n);(r._to!==u.x||o._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=s.width,this.height=s.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const r={width:this.width,height:this.height},o={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const a=Nt(n.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&s&&(t.save(),t.globalAlpha=i,this.drawBackground(o,t,r,n),X4(t,n.textDirection),o.y+=a.top,this.drawTitle(o,t,n),this.drawBody(o,t,n),this.drawFooter(o,t,n),Q4(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const i=this._active,r=t.map(({datasetIndex:s,index:l})=>{const c=this.chart.getDatasetMeta(s);if(!c)throw new Error("Cannot find a dataset at index "+s);return{datasetIndex:s,element:c.data[l],index:l}}),o=!kd(i,r),a=this._positionChanged(r,n);(o||a)&&(this._active=r,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,o=this._active||[],a=this._getActiveElements(t,o,n,i),s=this._positionChanged(a,t),l=n||!kd(a,o)||s;return l&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,i,r){const o=this.options;if(t.type==="mouseout")return[];if(!r)return n;const a=this.chart.getElementsAtEventForMode(t,o.mode,o,i);return o.reverse&&a.reverse(),a}_positionChanged(t,n){const{caretX:i,caretY:r,options:o}=this,a=Ps[o.position].call(this,t,n);return a!==!1&&(i!==a.x||r!==a.y)}},te(Yh,"positioners",Ps),Yh);var _F={id:"tooltip",_element:ow,positioners:Ps,afterInit(e,t,n){n&&(e.tooltip=new ow({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:kF},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},PK=Object.freeze({__proto__:null,Colors:HG,Decimation:ZG,Filler:pK,Legend:SF,SubTitle:yK,Title:FF,Tooltip:_F});const AK=(e,t,n,i)=>(typeof t=="string"?(n=e.push(t)-1,i.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function DK(e,t,n,i){const r=e.indexOf(t);if(r===-1)return AK(e,t,n,i);const o=e.lastIndexOf(t);return r!==o?n:r}const $K=(e,t)=>e===null?null:Et(Math.round(e),0,t);function aw(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class Td extends So{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:r,label:o}of n)i[r]===o&&i.splice(r,1);this._addedLabels=[]}super.init(t)}parse(t,n){if($e(t))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===t?n:DK(i,t,ve(n,t),this._addedLabels),$K(n,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:i,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),n||(r=this.getLabels().length-1)),this.min=i,this.max=r}buildTicks(){const t=this.min,n=this.max,i=this.options.offset,r=[];let o=this.getLabels();o=t===0&&n===o.length-1?o:o.slice(t,n+1),this._valueRange=Math.max(o.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let a=t;a<=n;a++)r.push({value:a});return r}getLabelForValue(t){return aw.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}te(Td,"id","category"),te(Td,"defaults",{ticks:{callback:aw}});function OK(e,t){const n=[],{bounds:r,step:o,min:a,max:s,precision:l,count:c,maxTicks:u,maxDigits:f,includeBounds:p}=e,m=o||1,g=u-1,{min:x,max:y}=t,v=!$e(a),b=!$e(s),E=!$e(c),S=(y-x)/(f+1);let F=Qy((y-x)/g/m)*m,P,k,_,D;if(F<1e-14&&!v&&!b)return[{value:x},{value:y}];D=Math.ceil(y/F)-Math.floor(x/F),D>g&&(F=Qy(D*F/g/m)*m),$e(l)||(P=Math.pow(10,l),F=Math.ceil(F*P)/P),r==="ticks"?(k=Math.floor(x/F)*F,_=Math.ceil(y/F)*F):(k=x,_=y),v&&b&&o&&AZ((s-a)/o,F/1e3)?(D=Math.round(Math.min((s-a)/F,u)),F=(s-a)/D,k=a,_=s):E?(k=v?a:k,_=b?s:_,D=c-1,F=(_-k)/D):(D=(_-k)/F,Us(D,Math.round(D),F/1e3)?D=Math.round(D):D=Math.ceil(D));const T=Math.max(e2(F),e2(k));P=Math.pow(10,$e(l)?T:l),k=Math.round(k*P)/P,_=Math.round(_*P)/P;let R=0;for(v&&(p&&k!==a?(n.push({value:a}),k<a&&R++,Us(Math.round((k+R*F)*P)/P,a,sw(a,S,e))&&R++):k<a&&R++);R<D;++R){const L=Math.round((k+R*F)*P)/P;if(b&&L>s)break;n.push({value:L})}return b&&p&&_!==s?n.length&&Us(n[n.length-1].value,s,sw(s,S,e))?n[n.length-1].value=s:n.push({value:s}):(!b||_===s)&&n.push({value:_}),n}function sw(e,t,{horizontal:n,minRotation:i}){const r=Vn(i),o=(n?Math.sin(r):Math.cos(r))||.001,a=.75*t*(""+e).length;return Math.min(t/o,a)}class Md extends So{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return $e(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:r,max:o}=this;const a=l=>r=n?r:l,s=l=>o=i?o:l;if(t){const l=li(r),c=li(o);l<0&&c<0?s(0):l>0&&c>0&&a(0)}if(r===o){let l=o===0?1:Math.abs(o*.05);s(o+l),t||a(r-l)}this.min=r,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=t,r;return i?(r=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),n=n||11),n&&(r=Math.min(n,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const r={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},o=this._range||this,a=OK(r,o);return t.bounds==="ticks"&&M4(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const t=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const r=(i-n)/Math.max(t.length-1,1)/2;n-=r,i+=r}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(t){return ec(t,this.chart.options.locale,this.options.ticks.format)}}class Id extends Md{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=rt(t)?t:0,this.max=rt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,i=Vn(this.options.ticks.minRotation),r=(t?Math.sin(i):Math.cos(i))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,o.lineHeight/r))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}te(Id,"id","linear"),te(Id,"defaults",{ticks:{callback:dp.formatters.numeric}});const Dl=e=>Math.floor(er(e)),Tr=(e,t)=>Math.pow(10,Dl(e)+t);function lw(e){return e/Math.pow(10,Dl(e))===1}function cw(e,t,n){const i=Math.pow(10,n),r=Math.floor(e/i);return Math.ceil(t/i)-r}function TK(e,t){const n=t-e;let i=Dl(n);for(;cw(e,t,i)>10;)i++;for(;cw(e,t,i)<10;)i--;return Math.min(i,Dl(e))}function MK(e,{min:t,max:n}){t=on(e.min,t);const i=[],r=Dl(t);let o=TK(t,n),a=o<0?Math.pow(10,Math.abs(o)):1;const s=Math.pow(10,o),l=r>o?Math.pow(10,r):0,c=Math.round((t-l)*a)/a,u=Math.floor((t-l)/s/10)*s*10;let f=Math.floor((c-u)/Math.pow(10,o)),p=on(e.min,Math.round((l+u+f*Math.pow(10,o))*a)/a);for(;p<n;)i.push({value:p,major:lw(p),significand:f}),f>=10?f=f<15?15:20:f++,f>=20&&(o++,f=2,a=o>=0?1:a),p=Math.round((l+u+f*Math.pow(10,o))*a)/a;const m=on(e.max,p);return i.push({value:m,major:lw(m),significand:f}),i}class $g extends So{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const i=Md.prototype.parse.apply(this,[t,n]);if(i===0){this._zero=!0;return}return rt(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=rt(t)?Math.max(0,t):null,this.max=rt(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!rt(this._userMin)&&(this.min=t===Tr(this.min,0)?Tr(this.min,-1):Tr(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let i=this.min,r=this.max;const o=s=>i=t?i:s,a=s=>r=n?r:s;i===r&&(i<=0?(o(1),a(10)):(o(Tr(i,-1)),a(Tr(r,1)))),i<=0&&o(Tr(r,-1)),r<=0&&a(Tr(i,1)),this.min=i,this.max=r}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},i=MK(n,this);return t.bounds==="ticks"&&M4(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":ec(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=er(t),this._valueRange=er(this.max)-er(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(er(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}te($g,"id","logarithmic"),te($g,"defaults",{ticks:{callback:dp.formatters.logarithmic,major:{enabled:!0}}});function Og(e){const t=e.ticks;if(t.display&&e.display){const n=Nt(t.backdropPadding);return ve(t.font&&t.font.size,ot.font.size)+n.height}return 0}function IK(e,t,n){return n=Ze(n)?n:[n],{w:qZ(e,t.string,n),h:n.length*t.lineHeight}}function uw(e,t,n,i,r){return e===i||e===r?{start:t-n/2,end:t+n/2}:e<i||e>r?{start:t-n,end:t}:{start:t,end:t+n}}function LK(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),i=[],r=[],o=e._pointLabels.length,a=e.options.pointLabels,s=a.centerPointLabels?Ge/o:0;for(let l=0;l<o;l++){const c=a.setContext(e.getPointLabelContext(l));r[l]=c.padding;const u=e.getPointPosition(l,e.drawingArea+r[l],s),f=vt(c.font),p=IK(e.ctx,f,e._pointLabels[l]);i[l]=p;const m=sn(e.getIndexAngle(l)+s),g=Math.round(D1(m)),x=uw(g,u.x,p.w,0,180),y=uw(g,u.y,p.h,90,270);RK(n,t,m,x,y)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=NK(e,i,r)}function RK(e,t,n,i,r){const o=Math.abs(Math.sin(n)),a=Math.abs(Math.cos(n));let s=0,l=0;i.start<t.l?(s=(t.l-i.start)/o,e.l=Math.min(e.l,t.l-s)):i.end>t.r&&(s=(i.end-t.r)/o,e.r=Math.max(e.r,t.r+s)),r.start<t.t?(l=(t.t-r.start)/a,e.t=Math.min(e.t,t.t-l)):r.end>t.b&&(l=(r.end-t.b)/a,e.b=Math.max(e.b,t.b+l))}function BK(e,t,n){const i=e.drawingArea,{extra:r,additionalAngle:o,padding:a,size:s}=n,l=e.getPointPosition(t,i+r+a,o),c=Math.round(D1(sn(l.angle+ut))),u=HK(l.y,s.h,c),f=VK(c),p=jK(l.x,s.w,f);return{visible:!0,x:l.x,y:u,textAlign:f,left:p,top:u,right:p+s.w,bottom:u+s.h}}function zK(e,t){if(!t)return!0;const{left:n,top:i,right:r,bottom:o}=e;return!(Fi({x:n,y:i},t)||Fi({x:n,y:o},t)||Fi({x:r,y:i},t)||Fi({x:r,y:o},t))}function NK(e,t,n){const i=[],r=e._pointLabels.length,o=e.options,{centerPointLabels:a,display:s}=o.pointLabels,l={extra:Og(o)/2,additionalAngle:a?Ge/r:0};let c;for(let u=0;u<r;u++){l.padding=n[u],l.size=t[u];const f=BK(e,u,l);i.push(f),s==="auto"&&(f.visible=zK(f,c),f.visible&&(c=f))}return i}function VK(e){return e===0||e===180?"center":e<180?"left":"right"}function jK(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function HK(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function UK(e,t,n){const{left:i,top:r,right:o,bottom:a}=n,{backdropColor:s}=t;if(!$e(s)){const l=Gr(t.borderRadius),c=Nt(t.backdropPadding);e.fillStyle=s;const u=i-c.left,f=r-c.top,p=o-i+c.width,m=a-r+c.height;Object.values(l).some(g=>g!==0)?(e.beginPath(),Pl(e,{x:u,y:f,w:p,h:m,radius:l}),e.fill()):e.fillRect(u,f,p,m)}}function WK(e,t){const{ctx:n,options:{pointLabels:i}}=e;for(let r=t-1;r>=0;r--){const o=e._pointLabelItems[r];if(!o.visible)continue;const a=i.setContext(e.getPointLabelContext(r));UK(n,a,o);const s=vt(a.font),{x:l,y:c,textAlign:u}=o;ho(n,e._pointLabels[r],l,c+s.lineHeight/2,s,{color:a.color,textAlign:u,textBaseline:"middle"})}}function PF(e,t,n,i){const{ctx:r}=e;if(n)r.arc(e.xCenter,e.yCenter,t,0,Ye);else{let o=e.getPointPosition(0,t);r.moveTo(o.x,o.y);for(let a=1;a<i;a++)o=e.getPointPosition(a,t),r.lineTo(o.x,o.y)}}function qK(e,t,n,i,r){const o=e.ctx,a=t.circular,{color:s,lineWidth:l}=t;!a&&!i||!s||!l||n<0||(o.save(),o.strokeStyle=s,o.lineWidth=l,o.setLineDash(r.dash),o.lineDashOffset=r.dashOffset,o.beginPath(),PF(e,n,a,i),o.closePath(),o.stroke(),o.restore())}function ZK(e,t,n){return Sr(e,{label:n,index:t,type:"pointLabel"})}class As extends Md{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Nt(Og(this.options)/2),n=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=rt(t)&&!isNaN(t)?t:0,this.max=rt(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Og(this.options))}generateTickLabels(t){Md.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,i)=>{const r=He(this.options.pointLabels.callback,[n,i],this);return r||r===0?r:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?LK(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,i,r){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((i-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,i,r))}getIndexAngle(t){const n=Ye/(this._pointLabels.length||1),i=this.options.startAngle||0;return sn(t*n+Vn(i))}getDistanceFromCenterForValue(t){if($e(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if($e(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const i=n[t];return ZK(this.getContext(),t,i)}}getPointPosition(t,n,i=0){const r=this.getIndexAngle(t)-ut+i;return{x:Math.cos(r)*n+this.xCenter,y:Math.sin(r)*n+this.yCenter,angle:r}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:i,right:r,bottom:o}=this._pointLabelItems[t];return{left:n,top:i,right:r,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),PF(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:i,grid:r,border:o}=n,a=this._pointLabels.length;let s,l,c;if(n.pointLabels.display&&WK(this,a),r.display&&this.ticks.forEach((u,f)=>{if(f!==0){l=this.getDistanceFromCenterForValue(u.value);const p=this.getContext(f),m=r.setContext(p),g=o.setContext(p);qK(this,m,l,a,g)}}),i.display){for(t.save(),s=a-1;s>=0;s--){const u=i.setContext(this.getPointLabelContext(s)),{color:f,lineWidth:p}=u;!p||!f||(t.lineWidth=p,t.strokeStyle=f,t.setLineDash(u.borderDash),t.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(s,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const r=this.getIndexAngle(0);let o,a;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(r),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((s,l)=>{if(l===0&&!n.reverse)return;const c=i.setContext(this.getContext(l)),u=vt(c.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=u.string,a=t.measureText(s.label).width,t.fillStyle=c.backdropColor;const f=Nt(c.backdropPadding);t.fillRect(-a/2-f.left,-o-u.size/2-f.top,a+f.width,u.size+f.height)}ho(t,s.label,0,-o,u,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}te(As,"id","radialLinear"),te(As,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:dp.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),te(As,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),te(As,"descriptors",{angleLines:{_fallback:"grid"}});const gp={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Gt=Object.keys(gp);function dw(e,t){return e-t}function fw(e,t){if($e(t))return null;const n=e._adapter,{parser:i,round:r,isoWeekday:o}=e._parseOpts;let a=t;return typeof i=="function"&&(a=i(a)),rt(a)||(a=typeof i=="string"?n.parse(a,i):n.parse(a)),a===null?null:(r&&(a=r==="week"&&(Ca(o)||o===!0)?n.startOf(a,"isoWeek",o):n.startOf(a,r)),+a)}function pw(e,t,n,i){const r=Gt.length;for(let o=Gt.indexOf(e);o<r-1;++o){const a=gp[Gt[o]],s=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((n-t)/(s*a.size))<=i)return Gt[o]}return Gt[r-1]}function JK(e,t,n,i,r){for(let o=Gt.length-1;o>=Gt.indexOf(n);o--){const a=Gt[o];if(gp[a].common&&e._adapter.diff(r,i,a)>=t-1)return a}return Gt[n?Gt.indexOf(n):0]}function YK(e){for(let t=Gt.indexOf(e)+1,n=Gt.length;t<n;++t)if(gp[Gt[t]].common)return Gt[t]}function hw(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:i,hi:r}=$1(n,t),o=n[i]>=t?n[i]:n[r];e[o]=!0}}function GK(e,t,n,i){const r=e._adapter,o=+r.startOf(t[0].value,i),a=t[t.length-1].value;let s,l;for(s=o;s<=a;s=+r.add(s,1,i))l=n[s],l>=0&&(t[l].major=!0);return t}function gw(e,t,n){const i=[],r={},o=t.length;let a,s;for(a=0;a<o;++a)s=t[a],r[s]=a,i.push({value:s,major:!1});return o===0||!n?i:GK(e,i,r,n)}class $l extends So{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const i=t.time||(t.time={}),r=this._adapter=new lY._date(t.adapters.date);r.init(n),Hs(i.displayFormats,r.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:fw(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,i=t.time.unit||"day";let{min:r,max:o,minDefined:a,maxDefined:s}=this.getUserBounds();function l(c){!a&&!isNaN(c.min)&&(r=Math.min(r,c.min)),!s&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!a||!s)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),r=rt(r)&&!isNaN(r)?r:+n.startOf(Date.now(),i),o=rt(o)&&!isNaN(o)?o:+n.endOf(Date.now(),i)+1,this.min=Math.min(r,o-1),this.max=Math.max(r+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],i=t[t.length-1]),{min:n,max:i}}buildTicks(){const t=this.options,n=t.time,i=t.ticks,r=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const o=this.min,a=this.max,s=TZ(r,o,a);return this._unit=n.unit||(i.autoSkip?pw(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):JK(this,s.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:YK(this._unit),this.initOffsets(r),t.reverse&&s.reverse(),gw(this,s,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,i=0,r,o;this.options.offset&&t.length&&(r=this.getDecimalForValue(t[0]),t.length===1?n=1-r:n=(this.getDecimalForValue(t[1])-r)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?i=o:i=(o-this.getDecimalForValue(t[t.length-2]))/2);const a=t.length<3?.5:.25;n=Et(n,0,a),i=Et(i,0,a),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const t=this._adapter,n=this.min,i=this.max,r=this.options,o=r.time,a=o.unit||pw(o.minUnit,n,i,this._getLabelCapacity(n)),s=ve(r.ticks.stepSize,1),l=a==="week"?o.isoWeekday:!1,c=Ca(l)||l===!0,u={};let f=n,p,m;if(c&&(f=+t.startOf(f,"isoWeek",l)),f=+t.startOf(f,c?"day":a),t.diff(i,n,a)>1e5*s)throw new Error(n+" and "+i+" are too far apart with stepSize of "+s+" "+a);const g=r.ticks.source==="data"&&this.getDataTimestamps();for(p=f,m=0;p<i;p=+t.add(p,s,a),m++)hw(u,p,g);return(p===i||r.bounds==="ticks"||m===1)&&hw(u,p,g),Object.keys(u).sort(dw).map(x=>+x)}getLabelForValue(t){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(t,i.tooltipFormat):n.format(t,i.displayFormats.datetime)}format(t,n){const r=this.options.time.displayFormats,o=this._unit,a=n||r[o];return this._adapter.format(t,a)}_tickFormatFunction(t,n,i,r){const o=this.options,a=o.ticks.callback;if(a)return He(a,[t,n,i],this);const s=o.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&s[l],f=c&&s[c],p=i[n],m=c&&f&&p&&p.major;return this._adapter.format(t,r||(m?f:u))}generateTickLabels(t){let n,i,r;for(n=0,i=t.length;n<i;++n)r=t[n],r.label=this._tickFormatFunction(r.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(t){const n=this._offsets,i=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,i=this.ctx.measureText(t).width,r=Vn(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(r),a=Math.sin(r),s=this._resolveTickFontOptions(0).size;return{w:i*o+s*a,h:i*a+s*o}}_getLabelCapacity(t){const n=this.options.time,i=n.displayFormats,r=i[n.unit]||i.millisecond,o=this._tickFormatFunction(t,0,gw(this,[t],this._majorUnit),r),a=this._getLabelSize(o),s=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return s>0?s:1}getDataTimestamps(){let t=this._cache.data||[],n,i;if(t.length)return t;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(n=0,i=r.length;n<i;++n)t=t.concat(r[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,i;if(t.length)return t;const r=this.getLabels();for(n=0,i=r.length;n<i;++n)t.push(fw(this,r[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return R4(t.sort(dw))}}te($l,"id","time"),te($l,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Zc(e,t,n){let i=0,r=e.length-1,o,a,s,l;n?(t>=e[i].pos&&t<=e[r].pos&&({lo:i,hi:r}=Si(e,"pos",t)),{pos:o,time:s}=e[i],{pos:a,time:l}=e[r]):(t>=e[i].time&&t<=e[r].time&&({lo:i,hi:r}=Si(e,"time",t)),{time:o,pos:s}=e[i],{time:a,pos:l}=e[r]);const c=a-o;return c?s+(l-s)*(t-o)/c:s}class Tg extends $l{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=Zc(n,this.min),this._tableRange=Zc(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:i}=this,r=[],o=[];let a,s,l,c,u;for(a=0,s=t.length;a<s;++a)c=t[a],c>=n&&c<=i&&r.push(c);if(r.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(a=0,s=r.length;a<s;++a)u=r[a+1],l=r[a-1],c=r[a],Math.round((u+l)/2)!==c&&o.push({time:c,pos:a/(s-1)});return o}_generate(){const t=this.min,n=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(n)||i.length===1)&&i.push(n),i.sort((r,o)=>r-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?t=this.normalize(n.concat(i)):t=n.length?n:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Zc(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,i=this.getDecimalForPixel(t)/n.factor-n.end;return Zc(this._table,i*this._tableRange+this._minPos,!0)}}te(Tg,"id","timeseries"),te(Tg,"defaults",$l.defaults);var KK=Object.freeze({__proto__:null,CategoryScale:Td,LinearScale:Id,LogarithmicScale:$g,RadialLinearScale:As,TimeScale:$l,TimeSeriesScale:Tg});const XK=[sY,RG,PK,KK],AF="label";function mw(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function QK(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function DF(e,t){e.labels=t}function $F(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:AF;const i=[];e.datasets=t.map(r=>{const o=e.datasets.find(a=>a[n]===r[n]);return!o||!r.data||i.includes(o)?{...r}:(i.push(o),Object.assign(o,r),o)})}function eX(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:AF;const n={labels:[],datasets:[]};return DF(n,e.labels),$F(n,e.datasets,t),n}function tX(e,t){const{height:n=150,width:i=300,redraw:r=!1,datasetIdKey:o,type:a,data:s,options:l,plugins:c=[],fallbackContent:u,updateMode:f,...p}=e,m=C.useRef(null),g=C.useRef(),x=()=>{m.current&&(g.current=new za(m.current,{type:a,data:eX(s,o),options:l&&{...l},plugins:c}),mw(t,g.current))},y=()=>{mw(t,null),g.current&&(g.current.destroy(),g.current=null)};return C.useEffect(()=>{!r&&g.current&&l&&QK(g.current,l)},[r,l]),C.useEffect(()=>{!r&&g.current&&DF(g.current.config.data,s.labels)},[r,s.labels]),C.useEffect(()=>{!r&&g.current&&s.datasets&&$F(g.current.config.data,s.datasets,o)},[r,s.datasets]),C.useEffect(()=>{g.current&&(r?(y(),setTimeout(x)):g.current.update(f))},[r,l,s.labels,s.datasets,f]),C.useEffect(()=>{g.current&&(y(),setTimeout(x))},[a]),C.useEffect(()=>(x(),()=>y()),[]),A.createElement("canvas",Object.assign({ref:m,role:"img",height:n,width:i},p),u)}const nX=C.forwardRef(tX);function OF(e,t){return za.register(t),C.forwardRef((n,i)=>A.createElement(nX,Object.assign({},n,{ref:i,type:e})))}const iX=OF("bar",Zs),rX=OF("doughnut",tr);za.register(...XK);const oX=h.div`
  width: 289px;
height: 288px;
border-radius: 12px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding: 15px;
`,aX={id:"custom_center_text_plugin",beforeDraw:e=>{if(e.config.options.centerText&&e.config.options.centerValue){const t=e.width,n=e.height,i=e.ctx;i.restore();let r=24.293;i.font=`700 ${r}px sans-serif`,i.fillStyle="#383838",i.textBaseline="middle";let o="R$ "+e.config.options.centerValue,a=Math.round((t-i.measureText(o).width)/2),s=n/2-10;i.fillText(o,a,s),r=14,i.font=`700 ${r}px sans-serif`,i.fillStyle="#383838",o=e.config.options.centerText,a=Math.round((t-i.measureText(o).width)/2),s=n/2+20,i.fillText(o,a,s),i.save()}}};za.register(aX);function j1({debit:e,credit:t,pix:n}){const r=(parseFloat(e.replace(".","").replace(",","."))+parseFloat(t.replace(".","").replace(",","."))+parseFloat(n.replace(".","").replace(",","."))).toLocaleString("pt-BR",{minimumFractionDigits:2}),o={labels:[],datasets:[{label:"",data:[parseFloat(e.replace(".","").replace(",",".")),parseFloat(t.replace(".","").replace(",",".")),parseFloat(n.replace(".","").replace(",","."))],backgroundColor:["#10104F","#08BBE9","#045469"],borderColor:["#10104F","#08BBE9","#045469"],borderWidth:1,borderRadius:100,spacing:5}]};return d(oX,{children:d(rX,{data:o,options:{cutout:"80%",centerText:"TPV TOTAL",centerValue:r,onHover:(s,l,c)=>{if(l.length>0){const u=l[0].index,f=o.datasets[0].backgroundColor[u];f==="#10104F"?(c.options.centerText="TPV DEBITO",c.options.centerValue=e):f==="#08BBE9"?(c.options.centerText="TPV CREDITO",c.options.centerValue=t):f==="#045469"&&(c.options.centerText="TPV PIX",c.options.centerValue=n)}else c.options.centerText="TPV TOTAL",c.options.centerValue=r;c.update()}}})})}const xw=[{nome:"F1",pos:100,transacoes:2e4,tpv:5e4,comissao:5e3},{nome:"F2",pos:200,transacoes:4e4,tpv:1e5,comissao:1e4},{nome:"F2",pos:150,transacoes:3e4,tpv:75e3,comissao:7500}],sX=h.div`
  display: flex;
  flex-direction: column;

`,lX=h.table`
  width: 515px; // 615
  height: 212px;
    border-right:1px solid #E9ECEF ;
    border-collapse: collapse;
  th, td {
    border-bottom: 1px solid #E9ECEF;
    text-align: left;
    padding: 8px;
  }

`,cX=h.h1`
  background: #08BBE9;
  width: 515px; // 615
height: 35px;

color:#FDFDFD;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

display: flex;
  align-items: center;
  padding-left: 12px;
`,Lo=h.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: left;
  padding: 8px;

  color:  #6C757D;
font-size: 14px;
line-height: 22px;
`,ds=h.td`
  text-align: left;
  padding: 8px;

  color:  #FDFDFD;
font-size: 9.906px;
font-weight: 700;
line-height: 15.566px;

`,fs=h(Lo).attrs({as:"th"})`
  color: #343A40;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

`,uX=h.tr`
  background: #08BBE9;
`;function dX(){const e=xw.reduce((t,n)=>({pos:t.pos+n.pos,transacoes:t.transacoes+n.transacoes,tpv:t.tpv+n.tpv,comissao:t.comissao+n.comissao}),{pos:0,transacoes:0,tpv:0,comissao:0});return w(sX,{children:[d(cX,{children:"Detalhes"}),w(lX,{children:[d("thead",{children:w("tr",{children:[d(fs,{children:"Fornecedor"}),d(fs,{children:"Quant. de POS"}),d(fs,{children:"Transações"}),d(fs,{children:"TPV"}),d(fs,{children:"Comissão"})]})}),w("tbody",{children:[xw.map(t=>w("tr",{children:[d(Lo,{children:t.nome}),d(Lo,{children:t.pos}),d(Lo,{children:t.transacoes}),w(Lo,{children:["R$ ",t.tpv]}),w(Lo,{children:["R$ ",t.comissao]})]},t.nome)),w(uX,{children:[d(ds,{children:"Totais"}),d(ds,{children:e.pos}),d(ds,{children:e.transacoes}),w(ds,{children:["R$ ",e.tpv]}),w(ds,{children:["R$ ",e.comissao]})]})]})]})]})}const fX=h.div`
  display: flex;
  flex-direction: column;

`,pX=h.h1`
  background: #10104F;
  width: 382px;
  height: 35px;
  color: #FDFDFD;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`,hX=h.table`
  width: 382px;
  border-collapse: collapse;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  th, td {
    border-bottom: 1px solid #E9ECEF;
    border-right: 1px solid #E9ECEF;
    border-left: 1px solid #E9ECEF;
    text-align: left;
    padding: 8px;
  }
`,Mg=h.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: left;
  padding: 8px;


  color:  #6C757D;
font-size: 9.906px;
line-height: 15.566px;
`,vw=h(Mg).attrs({as:"th"})`

  color:  #343A40;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;
`,gX=[{data:"01/01/2023",descricao:"Compra de POS"},{data:"02/02/2023",descricao:"Venda de POS"},{data:"01/01/2023",descricao:"Compra de POS"},{data:"02/02/2023",descricao:"Venda de POS"},{data:"01/01/2023",descricao:"Compra de POS"},{data:"02/02/2023",descricao:"Venda de POS"}];function mX(){return w(fX,{children:[d(pX,{children:"Histórico de Ações"}),w(hX,{children:[d("thead",{children:w("tr",{children:[d(vw,{children:"Data"}),d(vw,{children:"Descrição"})]})}),d("tbody",{children:gX.map((e,t)=>w("tr",{children:[d(Mg,{children:e.data}),d(Mg,{children:e.descricao})]},t))})]})]})}const xX=h.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 44px 0 44px;
`,vX=h.p`
  color: #00a3d7;
  font-size: 24px;
  font-weight: 700;

  > span {
    color: #b5b5c8;
  }
`,bX=h.div`
  display: flex;
  gap: 25px;

`,yX=h.button`
width: 129px;
height: 35px;

border-radius: 5px;
border: 0.5px solid  #0E0E47;
background:  #10104F;

color:  #FDFDFD;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
`,wX=h.button`
  width: 213px;
height: 35px;

border-radius: 5px;
border: 0.5px solid #0086ED;
background: #00A3D7;

color: #FFF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

`,CX=h.div`
  display: flex;
  justify-content: space-between;
  padding: 54px 72px 0 72px;
`,EX=h.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 70px 0 70px ;
`,SX=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 17px;

  padding: 0  0 50px 72px;
`,FX=h.button`
color: var(--foundation-brand-02-normal, #08BBE9);
text-align: center;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

border-radius: 5px;
background: var(--foundation-white-light-hover, #FBFBFB);
box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

padding: 7.5px 16px;
`,kX=h.button`
  color: var(--foundation-brand-01-normal, #10104F);
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
background-color: transparent;

display: flex;
margin: 40px;
`,_X=h.div`
  width: 100%;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 15px;
  display: flex;
  flex-direction: column;
`,PX=h.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 20px;


> p {
  color: #2C2C2C;
font-family: Poppins;
font-size: 14px;
line-height: 20px;
}
`,AX=h.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #10104F;
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
`;za.register(Td,Id,Ys,FF,_F,SF);const DX={responsive:!0,scales:{x:{grid:{display:!1,drawBorder:!1,drawOnChartArea:!1,drawTicks:!1,borderColor:"transparent"},borderColor:"transparent",ticks:{display:!0}},y:{grid:{display:!1,drawBorder:!1},borderColor:"transparent",ticks:{display:!0,stepSize:25,drawBorder:!1,callback:e=>e===0?e:"R$ "+e},offset:!0,beginAtZero:!1,padding:{top:5,bottom:20},max:100}},plugins:{legend:{display:!1}},elements:{bar:{borderWidth:1,borderRadius:{topLeft:100,topRight:100,bottomLeft:0,bottomRight:0},borderSkipped:!1}}},$X=["08h","09h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h"];function H1({dataArray:e}){const t={labels:$X,datasets:[{label:"R$",data:e.map(Number),backgroundColor:"#10104F",barThickness:15,borderRadius:100}]};return d(ie,{children:w(_X,{children:[w(PX,{children:[d(AX,{}),d("p",{children:"Comissões"})]}),d(iX,{options:DX,data:t})]})})}function OX(){const e=be(),{licensedNumber:t}=C1(),n=()=>{e("/manageAccessLicensed")},i=()=>{e("/editRegistrationLA")};console.log(t);const r=async l=>{console.log(`Fetching data for page ${l}`)};return w(ie,{children:[w(kX,{onClick:()=>{e("/licenciados")},children:[d(Cr,{size:18}),"Voltar"]}),w(xX,{children:[w(vX,{children:["Padaria Trevo 4 Folhas ",d("span",{children:"| 03.458.698/0001-96"})]}),w(bX,{children:[d(yX,{children:"Visualizar como"}),d(wX,{onClick:i,children:"Editar cadastro"})]})]}),w(CX,{children:[d(j1,{pix:"5.000,0",credit:"6.000,20",debit:"2.000,20"}),d("div",{style:{width:"510px",height:"20px"},children:d(H1,{dataArray:["15","19","30","50","20","30","70","80","50","10","20","15"]})})]}),w(EX,{children:[d(dX,{}),w("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:[d(mX,{}),d(Er,{currentPage:1,onPageClick:r,totalPages:10,onNextPage:l=>{r(l)},onPrevPage:l=>{r(l)}})]})]}),d(SX,{children:d(FX,{onClick:n,children:"Gerenciar acessos"})})]})}const TX=h.div`
   display: flex;
    flex-direction: column;
    align-items: center;

`,MX=h.div`
  width: 100%;
  max-width: 920px;
  margin-top: 50px;
`,IX=h.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`,LX=h.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`,RX=h.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`,BX=h.div`
  width: ${({isActive:e,isCurrent:t})=>e&&t?"40px":"25px"};
  height: ${({isActive:e,isCurrent:t})=>e&&t?"40px":"25px"};
  border-radius: 50%;
  background-color: ${({isActive:e,isCurrent:t})=>e&&t?"#F7F7F7":e?"#08BBE9":"#F7F7F7"};
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`,zX=h.span`
  font-size: ${({isActive:e})=>e?"16px":"14px"};
  color: ${({labelStatus:e})=>e==="active"?"#FDFDFD":e==="current"||e==="upcoming"?"#000000":"#FDFDFD"};
`,NX=h.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 7px;
  background: #F7F7F7;
  width: 100%;
  transform: translateY(-50%);
  border-radius: 3.5px;
  z-index: 0;
`,VX=h.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 7px;
  background: ${({isActive:e})=>e?"#08BBE9":"transparent"};
  width: ${({width:e})=>e};
  transform: translateY(-50%);
  z-index: 1;
  transition: width 0.4s ease;
  border-radius: 3.5px;
`,jX=h.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
`;function HX({steps:e,currentStep:t,setCurrentStep:n,startProgress:i,endProgress:r,canAdvance:o,canGoBack:a,stepLabels:s}){const[l,c]=C.useState(null),u=`${(t-i)/(r-i)*100}%`,f=g=>g<t?"active":g===t?"current":g>t?"upcoming":"disabled",p=g=>{(g<t&&a||o&&g>=i&&g<=r)&&n(g)};return d(IX,{children:w(LX,{children:[d(NX,{onClick:()=>{o&&n(5)}}),d(VX,{isActive:t>=i,width:u}),[d("div",{}),...e,d("div",{})].map((g,x)=>d(RX,{onClick:()=>p(x),onMouseEnter:()=>c(x),onMouseLeave:()=>c(null),children:x===0||x===e.length+1?null:w(ie,{children:[l===x&&d(jX,{children:s?s[x-1]:`Step ${x}`}),d(BX,{isActive:x<=t,isCurrent:x===t,children:d(zX,{isActive:x===t,labelStatus:f(x),isCurrent:x===t,children:x})})]})},x))]})})}const UX=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,WX=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,qX=h.div`
  width: 215px;
`,ZX=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;
width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,JX=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,YX=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,GX=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-right: 50px;


`,KX=h.section`
    display: flex;
gap: 50px;

`;h.button`
 font-weight: 500;
font-size: 12px;
line-height: 20px;
background: transparent;
letter-spacing: 0.5px;
width: 50px;
margin-top: 30px;
color: #5A6ACF;
white-space: nowrap;
  text-align: center;

`;h.button`

  font-weight: 500;
font-size: 12px;
line-height: 20px;
background: transparent;
letter-spacing: 0.5px;
width: 50px;
margin-top: 30px;
color: #E91414;
white-space: nowrap;
  text-align: center;

`;const XX=h.section`
width: 365px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`,bw=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,QX=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,eQ=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`;function tQ({Avançar:e,Voltar:t}){const[n,i]=C.useState(!1),[r,o]=C.useState([]),{dataUser:a}=lt(),{register:s,setValue:l,formState:{errors:c},watch:u}=st(),f=!!u("licenciado");C.useEffect(()=>{i(!0),Oe.get("https://api-pagueassim.stalopay.com.br/seller/indexla",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${a==null?void 0:a.token}`}}).then(m=>{const g=m.data;if(g&&g.sellers){console.log(g.sellers.trading_name);const x=g.sellers.map((y,v)=>({value:y.id,label:`${y.trading_name}-${y.type}-${y.cnpj_cpf}`}));o(x)}i(!1)}).catch(m=>{console.error("Houve um erro ao buscar os dados:",m)})},[]);const p=()=>{l("licenciado","someLicenciadoValue"),l("RegraMarkup","20")};return C.useEffect(()=>{p()},[]),w(ie,{children:[n&&d(Ve,{}),d(UX,{children:w(WX,{children:[w(ZX,{children:[d(JX,{children:"Comercial"}),d(YX,{}),w(GX,{children:[w(XX,{children:[d(ge,{placeholder:"-",...s("licenciado"),label:"Licenciado Autorizado",optionsData:{options:r},hasError:!!c.licenciado,onChange:m=>{l("licenciado",m.value)}}),d("button",{children:"Pesquise pelo nome do Licenciado"})]}),d(KX,{children:d(qX,{children:d(ne,{...s("RegraMarkup"),label:"Regra Markup",placeholder:"Regra Markup %",hasError:!!c.Fornecedor,colorInputDefault:$.primaria,colorInputSuccess:$.secundaria})})})]})]}),w(eQ,{children:[d(QX,{onClick:t,children:"Voltar"}),d(bw,{disabled:!f,onClick:e,children:"Salvar"}),d(bw,{disabled:!f,onClick:e,children:"Avançar"})]})]})})]})}const nQ=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,iQ=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,rQ=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,oQ=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,aQ=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,sQ=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 140px;
  margin-right: 50px;


`,Hh=h.section`
    display: flex;
gap: 40px;

`;h.section`
   width: 365px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`;const lQ=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,cQ=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,uQ=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;


`;h.div`
  width: 215px;

`;h.div`
 width: 365px;

`;const dQ=h.div`
  width: 215px;

`,fQ=h.div`
  width: 215px;

`,yw={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]};function pQ({Avançar:e,Voltar:t,isLoading:n}){const{register:i,setValue:r,formState:{errors:o},getValues:a,watch:s}=st(),l=()=>!!(s("Banco")&&s("TipoDeConta")&&s("Agência")&&s("Conta")&&s("CpfCnpj")&&s("pix")),c=g=>{const x=g.replace(/\D/g,"");return x.length>11?x.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,"$1.$2.$3/$4-$5"):x.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/,"$1.$2.$3-$4")},u=()=>{r("Banco","Banco do Brasil"),r("TipoDeConta","Conta Corrente"),r("Agência","1234-5"),r("Conta","12345-6"),r("CpfCnpj","123.456.789-10"),r("pix","mock.pix@email.com")};C.useEffect(()=>{u()},[]);const f=g=>{const x=c(g.target.value);r("CpfCnpj",x)},p=s("CpfCnpj"),m=p&&p.length>14?"99.999.999/9999-99":"999.999.999-99";return Object.keys(a()).filter(g=>g.startsWith("Fornecedor")).length,w(ie,{children:[n&&d(Ve,{}),d(nQ,{children:w(iQ,{children:[w(rQ,{children:[d(oQ,{children:"Dados Bancários"}),d(aQ,{}),w(sQ,{children:[w(Hh,{children:[d(ge,{...i("Banco",{required:!0}),label:"Banco",optionsData:yw,placeholder:"Clique para ver a lista",hasError:!!o.Banco,onChange:g=>{r("Banco",g.value)}}),d(ge,{...i("TipoDeConta",{required:!0}),label:"Tipo de Conta",placeholder:"",optionsData:yw,hasError:!!o["Tipo de Conta"],onChange:g=>{r("TipoDeConta",g.value)}})]}),w(Hh,{children:[d(ne,{colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,...i("CpfCnpj",{required:!0}),label:"CPF ou CNPJ",placeholder:"--.---.---/---.--",hasError:!!o.CpfCnpj,onChange:f},m),d(ne,{...i("pix",{required:!0}),label:"Chave PIX",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.Agência,hasSuccess:!1})]}),w(Hh,{children:[d(dQ,{children:d(ne,{...i("Agência",{required:!0}),label:"Agência",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.Agência,hasSuccess:!1})}),d(fQ,{children:d(ne,{...i("Conta",{required:!0}),label:"Conta",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.Conta,hasSuccess:!1})})]})]})]}),w(uQ,{children:[d(cQ,{onClick:t,children:"Voltar"}),d(lQ,{disabled:!l(),onClick:e,children:"Salvar"})]})]})})]})}const hQ=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,gQ=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,mQ=h.div`
  display: flex;
  justify-content: space-between;

`,xQ=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin-top: 30px;
  margin-bottom: 32px;

  width: 900px;
  padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,vQ=h.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #7d7d7d;
`,bQ=h.div`
  border: 1px solid #a0a0a0;
  margin-top: 15px;
`,yQ=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;
`,Uh=h.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;h.section`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > button {
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;

    letter-spacing: 0.5px;

    color: #665b6d;
  }
`;const ww=h.button`
  width: 109px;
  height: 35px;

  background: #00a3d7;
  border: 0.5px solid #0086ed;
  border-radius: 5px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;

  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 100px;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`,wQ=h.div`

`,CQ=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};

  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"8px 1px 1px 8px"} ;

  position: ${({active:e})=>e?"relative":""};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,EQ=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};
  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"1px 8px 8px 1px"} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,SQ=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,FQ=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`;function kQ({Avançar:e,BPF:t,BPJ:n}){be();const{register:i,setValue:r,formState:{errors:o,isValid:a},trigger:s,watch:l}=st(),c=!!l("NomeFantasiaEstabelecimento")&&!!l("NascimentoSocio")&&!!l("CPFEstabelecimento")&&!!l("NomeSocioEstabelecimento")&&!!l("EmailEstabelecimento")&&!!l("AreaAtuacaoEstabelecimento")&&!!l("TelefoneEstabelecimento"),u=async()=>{await s()&&!o.CNPJEstabelecimento&&!o.CPFEstabelecimento&&c&&a&&e()},f=()=>{r("CNPJEstabelecimento","23.699.017/0001-84"),r("RazaoSocialEstabelecimento","Mocked Company Ltd."),r("NomeFantasiaEstabelecimento","Mocked Company"),r("DataCriacaoEstabelecimento","01/01/2000"),r("NascimentoSocio","15/05/1985"),r("CPFEstabelecimento","913.482.830-33"),r("NomeSocioEstabelecimento","Mocked Partner Name"),r("EmailEstabelecimento","mocked.email@example.com"),r("TelefoneEstabelecimento","(81) 991431834"),r("AreaAtuacaoEstabelecimento","option1")};return C.useEffect(()=>{f()},[]),d(hQ,{children:w(gQ,{children:[w(xQ,{children:[w(mQ,{children:[d(vQ,{children:"Dados do Licenciado"}),w(wQ,{children:[d(CQ,{active:!1,onClick:n,children:"PJ"}),d(EQ,{active:!0,onClick:t,children:"PF"})]})]}),d(bQ,{}),w(yQ,{children:[w(Uh,{children:[d(ye,{...i("CPFEstabelecimento",{validate:Fe.validateCPF}),label:"CPF",mask:"999.999.999-99",placeholder:"---.---.---.--",hasError:!!o.CPFEstabelecimento}),d(ye,{...i("NascimentoSocio",{validate:zt}),label:"Data de Nascimento",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.NascimentoSocio})]}),w(Uh,{children:[d(ne,{...i("NomeSocioEstabelecimento"),label:"Nome Completo",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeSocioEstabelecimento}),d(ye,{...i("TelefoneEstabelecimento",{validate:bn}),label:"Telefone/Celular",mask:"(99) 99999-9999",placeholder:"(--) ----.----",hasError:!!o.TelefoneEstabelecimento})]}),d(Uh,{children:d(ne,{...i("EmailEstabelecimento",{validate:Tn}),label:"E-mail",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.EmailEstabelecimento})})]})]}),w(FQ,{children:[d(SQ,{children:"Cancelar"}),d(ww,{disabled:!c,onClick:e,children:"Salvar"}),d(ww,{disabled:!c,onClick:u,children:"Avançar"})]})]})})}const _Q=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,PQ=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,AQ=h.div`
  display: flex;
  justify-content: space-between;

`,DQ=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin-top: 30px;
  margin-bottom: 32px;

  width: 900px;
  padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,$Q=h.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #7d7d7d;
`,OQ=h.div`
  border: 1px solid #a0a0a0;
  margin-top: 15px;
`,TQ=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;
`,Jc=h.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`,MQ=h.section`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > button {
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;

    letter-spacing: 0.5px;

    color: #665b6d;
  }
`,Cw=h.button`
  width: 109px;
  height: 35px;

  background: #00a3d7;
  border: 0.5px solid #0086ed;
  border-radius: 5px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;

  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 100px;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`,IQ=h.div`

`,LQ=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};

  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"8px 1px 1px 8px"} ;

  position: ${({active:e})=>e?"relative":""};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,RQ=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};
  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"1px 8px 8px 1px"} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,BQ=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,zQ=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`,NQ={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]};function VQ({Avançar:e,BPF:t,BPJ:n}){const{register:i,setValue:r,formState:{errors:o,isValid:a},trigger:s,watch:l}=st(),c=be(),u=!!l("CNPJEstabelecimento")&&!!l("RazaoSocialEstabelecimento")&&!!l("NomeFantasiaEstabelecimento")&&!!l("DataCriacaoEstabelecimento")&&!!l("NascimentoSocio")&&!!l("CPFEstabelecimento")&&!!l("NomeSocioEstabelecimento")&&!!l("EmailEstabelecimento")&&!!l("AreaAtuacaoEstabelecimento")&&!!l("TelefoneEstabelecimento"),f=async()=>{await s()&&!o.CNPJEstabelecimento&&!o.CPFEstabelecimento&&u&&a&&e()},p=()=>{c("/licenseddetail")},m=()=>{r("CNPJEstabelecimento","23.699.017/0001-84"),r("RazaoSocialEstabelecimento","Mocked Company Ltd."),r("NomeFantasiaEstabelecimento","Mocked Company"),r("DataCriacaoEstabelecimento","01/01/2000"),r("NascimentoSocio","15/05/1985"),r("CPFEstabelecimento","913.482.830-33"),r("NomeSocioEstabelecimento","Mocked Partner Name"),r("EmailEstabelecimento","mocked.email@example.com"),r("TelefoneEstabelecimento","(81) 991431834"),r("AreaAtuacaoEstabelecimento","option1")};return C.useEffect(()=>{m()},[]),d(_Q,{children:w(PQ,{children:[w(DQ,{children:[w(AQ,{children:[d($Q,{children:"Dados do Licenciado"}),w(IQ,{children:[d(LQ,{active:!0,onClick:n,children:"PJ"}),d(RQ,{active:!1,onClick:t,children:"PF"})]})]}),d(OQ,{}),w(TQ,{children:[w(Jc,{children:[d(ye,{...i("CNPJEstabelecimento",{validate:Fe.validateCNPJ}),mask:"99.999.999/9999-99",placeholder:"--.---.---/---.--",hasError:!!o.CNPJEstabelecimento,label:"CNPJ"}),d(ne,{...i("RazaoSocialEstabelecimento"),label:"Razão Social",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.RazaoSocialEstabelecimento})]}),w(Jc,{children:[d(ne,{...i("NomeFantasiaEstabelecimento"),label:"Nome Fantasia",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeFantasiaEstabelecimento}),d(ye,{...i("DataCriacaoEstabelecimento",{validate:zt}),label:"Data de Criação",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.DataCriacaoEstabelecimento})]}),w(Jc,{children:[d(ye,{...i("CPFEstabelecimento",{validate:Fe.validateCPF}),label:"CPF do Sócio",mask:"999.999.999-99",placeholder:"---.---.---.--",hasError:!!o.CPFEstabelecimento}),d(ne,{...i("NomeSocioEstabelecimento"),label:"Nome Completo do Sócio",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeSocioEstabelecimento})]}),w(Jc,{children:[d(ye,{...i("NascimentoSocio",{validate:zt}),label:"Nascimento Sócio",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.NascimentoSocio}),d(ye,{...i("TelefoneEstabelecimento",{validate:bn}),label:"Telefone/Celular",mask:"(99) 99999-9999",placeholder:"(--) ----.----",hasError:!!o.TelefoneEstabelecimento}),d(ne,{...i("EmailEstabelecimento",{validate:Tn}),label:"E-mail",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.EmailEstabelecimento})]}),w(MQ,{children:[d(ge,{optionsData:NQ,...i("AreaAtuacaoEstabelecimento"),placeholder:"Digite aqui ou clique para ver a lista",label:"Área de Atuação",onChange:g=>{r("AreaAtuacaoEstabelecimento",g.value)},hasError:!!o.AreaAtuacaoEstabelecimento}),d("button",{children:"Pesquise pelo CNAE ou Nome"})]})]})]}),w(zQ,{children:[d(BQ,{onClick:p,children:"Cancelar"}),d(Cw,{disabled:!u,onClick:e,children:"Salvar"}),d(Cw,{disabled:!u,onClick:f,children:"Avançar"})]})]})})}function jQ({Avançar:e}){const{documentTypeLA:t,updateToCNPJLA:n,updateToCPFLA:i}=cp();return console.log(t),d(ie,{children:t==="CNPJ"?d(VQ,{Avançar:e,BPJ:n,BPF:i}):d(kQ,{Avançar:e,BPJ:n,BPF:i})})}const HQ=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,UQ=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,WQ=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,qQ=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,ZQ=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,JQ=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;


`,Wh=h.section`
    display: flex;
justify-content: space-between;
gap: 50px;

`,YQ=h.section`
    width: 215px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`,Ew=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,GQ=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,KQ=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`;function XQ({Avançar:e,Voltar:t}){const{register:n,formState:{errors:i},setValue:r,watch:o}=st(),[a,s]=C.useState(!1),l=!!o("CEP")&&!!o("Endereco")&&!!o("Numero")&&!!o("Bairro")&&!!o("Cidade")&&!!o("Estado"),c=async f=>{s(!0);try{const p=await Oe.get(`https://viacep.com.br/ws/${f}/json/`);if(p.data){const{logradouro:m,complemento:g,bairro:x,localidade:y,uf:v}=p.data;r("Endereco",m||""),r("Complemento",g||""),r("Bairro",x||""),r("Cidade",y||""),r("Estado",v||"")}}catch(p){console.error("Erro ao buscar endereço:",p)}finally{s(!1)}},u=()=>{r("CEP","12345-678"),r("Endereco","Rua Exemplo Mocked"),r("Numero","123"),r("Complemento","Apto 1"),r("Bairro","Bairro Mocked"),r("Cidade","Cidade Mocked"),r("Estado","SP")};return C.useEffect(()=>{s(!1),n("CEP");const f=m=>{const g=m.target.value.replace(/\D/g,"");g.length===8&&c(g)},p=document.getElementById("cep");return p.addEventListener("change",f),u(),()=>{p.removeEventListener("change",f)}},[n,r]),w(ie,{children:[a&&d(Ve,{}),d(HQ,{children:w(UQ,{children:[w(WQ,{children:[d(qQ,{children:"Endereço"}),d(ZQ,{}),w(JQ,{children:[w(Wh,{children:[d(ye,{id:"cep",...n("CEP"),label:"CEP",mask:"99999-999",placeholder:"--.---.---",hasError:!!i.CEP}),d(ne,{...n("Endereco"),label:"Endereço",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Endereco})]}),w(Wh,{children:[d(ne,{...n("Numero"),label:"Número",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Numero}),d(ne,{...n("Complemento"),label:"Complemento",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Complemento})]}),w(Wh,{children:[d(ne,{...n("Bairro"),label:"Bairro",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Bairro}),d(ne,{...n("Cidade"),label:"Cidade",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,disabled:!0,hasError:!!i.Cidade})]}),d(YQ,{children:d(ne,{...n("Estado"),label:"Estado",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,disabled:!0,hasError:!!i.Estado})})]})]}),w(KQ,{children:[d(GQ,{onClick:t,children:"Voltar"}),d(Ew,{disabled:!l,onClick:e,children:"Salvar"}),d(Ew,{disabled:!l,onClick:e,children:"Avançar"})]})]})})]})}const QQ=()=>{const[e,t]=C.useState(1),n=be(),[i,r]=C.useState(!0);lt();const{documentTypeLA:o}=cp(),[a,s]=C.useState(!1),l=()=>{n("/licenseddetail"),localStorage.setItem("selectedItem","0"),r(!1)},c=qt(),{getValues:u}=c,f=()=>{e<4?t(S=>S+1):t(5)},p=()=>{e>1&&t(S=>S-1)},m=()=>{const S=u(),F=Tn(S.EmailEstabelecimento),P=o!=="CPF"?zt(S.DataCriacaoEstabelecimento):!0,k=bn(S.TelefoneEstabelecimento);return(Fe.validateCNPJ(S.CNPJEstabelecimento)||o==="CPF")&&(S.RazaoSocialEstabelecimento||o==="CPF")&&S.NomeFantasiaEstabelecimento&&S.NascimentoSocio&&Fe.validateCPF(S.CPFEstabelecimento)&&S.NomeSocioEstabelecimento&&F&&k&&S.AreaAtuacaoEstabelecimento&&P},g=()=>{const S=u();return S.CEP&&S.Endereco&&S.Numero&&S.Bairro&&S.Cidade&&S.Estado},x=()=>{const S=u(),F=Object.keys(S).filter(P=>P.startsWith("Fornecedor")).length;return!!S.licenciado&&Array.from({length:F}).every((P,k)=>!!S[`Fornecedor${k}`]&&!!S[`PlanoComercial${k}`])},y=()=>{const S=u(),F=S.CpfCnpj?S.CpfCnpj.replace(/\D/g,""):"";let P=!1;return F.length<=11?P=Fe.validateCPF(F):P=Fe.validateCNPJ(F),S.Banco&&S.TipoDeConta&&S.Agência&&S.Conta&&P},v=()=>{switch(e){case 1:return m();case 2:return g();case 3:return x();case 4:return y();default:return!0}},b=[1,2,3,4],E="Licenciado Atualizado";return console.log("oiiss",u()),d(ie,{children:w(TX,{children:[d(MX,{children:d(HX,{stepLabels:["Dados do Licenciado","Endereço","Comercial","Dados Bancários"],startProgress:0,endProgress:b.length+1,currentStep:e,setCurrentStep:t,steps:b,canAdvance:v(),canGoBack:e>1})}),w($a,{...c,children:[e===1&&d(jQ,{Avançar:f}),e===2&&d(XQ,{Avançar:f,Voltar:p}),e===3&&d(tQ,{Avançar:f,Voltar:p}),e===4&&d(pQ,{isLoading:a,Avançar:f,Voltar:p}),e===5&&d(Mf,{text:E,visible:i,onClose:l})]})]})})},Sw=[{nome:"F1",pos:100,transacoes:2e4,tpv:5e4,comissao:5e3},{nome:"F2",pos:200,transacoes:4e4,tpv:1e5,comissao:1e4},{nome:"F2",pos:150,transacoes:3e4,tpv:75e3,comissao:7500}],eee=h.div`
  display: flex;
  flex-direction: column;

`,tee=h.table`
  width: 515px; // 615
  height: 212px;
    border-right:1px solid #E9ECEF ;
    border-collapse: collapse;
  th, td {
    border-bottom: 1px solid #E9ECEF;
    text-align: left;
    padding: 8px;
  }

`,nee=h.h1`
  background: #08BBE9;
  width: 515px; // 615
height: 35px;

color:#FDFDFD;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

display: flex;
  align-items: center;
  padding-left: 12px;
`,Ro=h.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: left;
  padding: 8px;

  color:  #6C757D;
font-size: 14px;
line-height: 22px;
`,ps=h.td`
  text-align: left;
  padding: 8px;

  color:  #FDFDFD;
font-size: 9.906px;
font-weight: 700;
line-height: 15.566px;

`,hs=h(Ro).attrs({as:"th"})`
  color: #343A40;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;

`,iee=h.tr`
  background: #08BBE9;
`;function ree(){const e=Sw.reduce((t,n)=>({pos:t.pos+n.pos,transacoes:t.transacoes+n.transacoes,tpv:t.tpv+n.tpv,comissao:t.comissao+n.comissao}),{pos:0,transacoes:0,tpv:0,comissao:0});return w(eee,{children:[d(nee,{children:"Detalhes"}),w(tee,{children:[d("thead",{children:w("tr",{children:[d(hs,{children:"Fornecedor"}),d(hs,{children:"Quant. de POS"}),d(hs,{children:"Transações"}),d(hs,{children:"TPV"}),d(hs,{children:"Comissão"})]})}),w("tbody",{children:[Sw.map(t=>w("tr",{children:[d(Ro,{children:t.nome}),d(Ro,{children:t.pos}),d(Ro,{children:t.transacoes}),w(Ro,{children:["R$ ",t.tpv]}),w(Ro,{children:["R$ ",t.comissao]})]},t.nome)),w(iee,{children:[d(ps,{children:"Totais"}),d(ps,{children:e.pos}),d(ps,{children:e.transacoes}),w(ps,{children:["R$ ",e.tpv]}),w(ps,{children:["R$ ",e.comissao]})]})]})]})]})}const oee=h.div`
  display: flex;
  flex-direction: column;

`,aee=h.h1`
  background: #10104F;
  width: 382px;
  height: 35px;
  color: #FDFDFD;
  font-size: 9.906px;
  font-weight: 500;
  line-height: 15.566px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`,see=h.table`
  width: 382px;
  border-collapse: collapse;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

  th, td {
    border-bottom: 1px solid #E9ECEF;
    border-right: 1px solid #E9ECEF;
    border-left: 1px solid #E9ECEF;
    text-align: left;
    padding: 8px;
  }
`,Ig=h.td`
  border-bottom: 1px solid #E9ECEF;
  text-align: left;
  padding: 8px;


  color:  #6C757D;
font-size: 9.906px;
line-height: 15.566px;
`,Fw=h(Ig).attrs({as:"th"})`

  color:  #343A40;
font-size: 9.906px;
font-weight: 500;
line-height: 15.566px;
`,lee=[{data:"01/01/2023",descricao:"Compra de POS"},{data:"02/02/2023",descricao:"Venda de POS"},{data:"01/01/2023",descricao:"Compra de POS"},{data:"02/02/2023",descricao:"Venda de POS"},{data:"01/01/2023",descricao:"Compra de POS"},{data:"02/02/2023",descricao:"Venda de POS"}];function cee(){return w(oee,{children:[d(aee,{children:"Histórico de Ações"}),w(see,{children:[d("thead",{children:w("tr",{children:[d(Fw,{children:"Data"}),d(Fw,{children:"Descrição"})]})}),d("tbody",{children:lee.map((e,t)=>w("tr",{children:[d(Ig,{children:e.data}),d(Ig,{children:e.descricao})]},t))})]})]})}const uee=h.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 44px 0 44px;
`,dee=h.p`
  color: #00a3d7;
  font-size: 24px;
  font-weight: 700;

  > span {
    color: #b5b5c8;
  }
`,fee=h.div`
  display: flex;
  gap: 25px;

`,pee=h.button`
width: 129px;
height: 35px;

border-radius: 5px;
border: 0.5px solid  #0E0E47;
background:  #10104F;

color:  #FDFDFD;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
`,hee=h.button`
  width: 213px;
height: 35px;

border-radius: 5px;
border: 0.5px solid #0086ED;
background: #00A3D7;

color: #FFF;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

`,gee=h.div`
  display: flex;
  justify-content: space-between;
  padding: 54px 72px 0 72px;
`,mee=h.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 70px 0 70px ;
`,xee=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 17px;

  padding: 0  0 50px 72px;
`,vee=h.button`
color: var(--foundation-brand-02-normal, #08BBE9);
text-align: center;
font-size: 12px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;

border-radius: 5px;
background: var(--foundation-white-light-hover, #FBFBFB);
box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

padding: 7.5px 16px;
`,bee=h.button`
  color: var(--foundation-brand-01-normal, #10104F);
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
background-color: transparent;

display: flex;
margin: 40px;
`;function yee(){const e=be(),{detailNumber:t}=p1(),n=()=>{e("/manageAccessEstablishment")},i=()=>{e("/editRegistrationEC")};console.log("oii",t);const r=async l=>{console.log(`Fetching data for page ${l}`)};return w(ie,{children:[w(bee,{onClick:()=>{e("/estabelecimentos")},children:[d(Cr,{size:18}),"Voltar"]}),w(uee,{children:[w(dee,{children:["Padaria Trevo 4 Folhas ",d("span",{children:"| 03.458.698/0001-96"})]}),w(fee,{children:[d(pee,{children:"Visualizar como"}),d(hee,{onClick:i,children:"Editar cadastro"})]})]}),w(gee,{children:[d(j1,{pix:"5.000,00",credit:"6.000,20",debit:"2.000,20"}),d("div",{style:{width:"510px",height:"20px"},children:d(H1,{dataArray:["15","19","30","50","20","30","70","80","50","10","20","15"]})})]}),w(mee,{children:[d(ree,{}),w("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:[d(cee,{}),d(Er,{currentPage:1,onPageClick:r,totalPages:10,onNextPage:l=>{r(l)},onPrevPage:l=>{r(l)}})]})]}),d(xee,{children:d(vee,{onClick:n,children:"Gerenciar acessos"})})]})}const wee=h.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  border-radius: 8px;
  background: var(--Sys---Neutral-04, #FFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  thead {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 1px;
      background-color: #E9ECEF;
      box-shadow: 0px 1px 0px 0px #E9ECEF;
    }
  }
`,gs=h.th`
  color: var(--light-dark, #343A40);
  font-size: 13.252px;
  font-style: normal;
  font-weight: 500;
  line-height: 20.824px;
`,ms=h.td`
  color: var(--light-secondary, #6C757D);
  font-size: 13.252px;
  line-height: 20.824px;
  padding: 8px;
  text-align: center;
  vertical-align: middle;



`,Cee=h.img`

  display: block;
  margin-left: auto;
  margin-right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`,Eee=h.button`
  color: #5A6ACF;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  background: transparent;
  letter-spacing: 0.353px;
`;h(Eee)`
  color: #EB001B;
`;const See=h.tr`
  height: 35.377px;

  &:hover {
    background-color: #F5F4F4;
  }
`;h.span`
  border-radius: 4px;
background: #00A3D7;
padding: 1px 8px;

color: var(--foundation-brand-02-light, #E6F8FD);
text-align: center;
font-size: 12px;
font-weight: 600;



`;function Fee({data:e}){return w(wee,{children:[d("thead",{children:w("tr",{children:[d(gs,{}),d(gs,{children:"Name"}),d(gs,{children:"Função"}),d(gs,{children:"E-mail"}),d(gs,{})]})}),d("tbody",{children:e.map((t,n)=>w(See,{children:[d(ms,{children:d(Cee,{src:bl,alt:"Profile"})}),d(ms,{children:t.name}),d(ms,{children:t.profile_id}),d(ms,{children:t.email}),d(ms,{})]},n))})]})}const kee=h.div`
      margin-left: 44px;
    margin-top: 45px;
    margin-right: 52px;

`,_ee=h.button`
  color: var(--foundation-brand-01-normal, #10104F);
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
background-color: transparent;

display: flex;
margin-bottom: 40px;
`;function Pee(){p1();const e=be();return d(ie,{children:w(kee,{children:[w(_ee,{onClick:()=>{e("/establishmentdetail")},children:[d(Cr,{size:18}),"Voltar"]}),d(Fee,{data:[{id:1,name:"John Doe",profile_id:"Administrador",email:"john.doe@example.com"}]})]})})}const Aee=h.div`
   display: flex;
    flex-direction: column;
    align-items: center;

`,Dee=h.div`
  width: 100%;
  max-width: 920px;
  margin-top: 50px;
`,$ee=h.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`,Oee=h.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`,Tee=h.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Mee=h.div`
  width: ${({isActive:e,isCurrent:t})=>e&&t?"40px":"25px"};
  height: ${({isActive:e,isCurrent:t})=>e&&t?"40px":"25px"};
  border-radius: 50%;
  background-color: ${({isActive:e,isCurrent:t})=>e&&t?"#F7F7F7":e?"#08BBE9":"#F7F7F7"};
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`,Iee=h.span`
  font-size: ${({isActive:e})=>e?"16px":"14px"};
  color: ${({labelStatus:e})=>e==="active"?"#FDFDFD":e==="current"||e==="upcoming"?"#000000":"#FDFDFD"};
`,Lee=h.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 7px;
  background: #F7F7F7;
  width: 100%;
  transform: translateY(-50%);
  border-radius: 3.5px;
  z-index: 0;
`,Ree=h.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 7px;
  background: ${({isActive:e})=>e?"#08BBE9":"transparent"};
  width: ${({width:e})=>e};
  transform: translateY(-50%);
  z-index: 1;
  transition: width 0.4s ease;
  border-radius: 3.5px;
`,Bee=h.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
`;function zee({steps:e,currentStep:t,setCurrentStep:n,startProgress:i,endProgress:r,canAdvance:o,canGoBack:a,stepLabels:s}){const[l,c]=C.useState(null),u=`${(t-i)/(r-i)*100}%`,f=g=>g<t?"active":g===t?"current":g>t?"upcoming":"disabled",p=g=>{(g<t&&a||o&&g>=i&&g<=r)&&n(g)};return d($ee,{children:w(Oee,{children:[d(Lee,{onClick:()=>{o&&n(5)}}),d(Ree,{isActive:t>=i,width:u}),[d("div",{}),...e,d("div",{})].map((g,x)=>d(Tee,{onClick:()=>p(x),onMouseEnter:()=>c(x),onMouseLeave:()=>c(null),children:x===0||x===e.length+1?null:w(ie,{children:[l===x&&d(Bee,{children:s?s[x-1]:`Step ${x}`}),d(Mee,{isActive:x<=t,isCurrent:x===t,children:d(Iee,{isActive:x===t,labelStatus:f(x),isCurrent:x===t,children:x})})]})},x))]})})}const Nee=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Vee=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,kw=h.div`
  width: 215px;
`,jee=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;
width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,Hee=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,Uee=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,Wee=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-right: 50px;


`,qee=h.section`
    display: flex;
gap: 50px;

`,Zee=h.button`
 font-weight: 500;
font-size: 12px;
line-height: 20px;
background: transparent;
letter-spacing: 0.5px;
width: 50px;
margin-top: 30px;
color: #5A6ACF;
white-space: nowrap;
  text-align: center;

`,Jee=h.button`

  font-weight: 500;
font-size: 12px;
line-height: 20px;
background: transparent;
letter-spacing: 0.5px;
width: 50px;
margin-top: 30px;
color: #E91414;
white-space: nowrap;
  text-align: center;

`,Yee=h.section`
width: 365px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`,_w=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,Gee=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,Kee=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`,Xee={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]};function Qee({Avançar:e,Voltar:t}){const[n,i]=C.useState(!1),[r,o]=C.useState([]),[a,s]=C.useState([]),[l,c]=C.useState([{}]),[u,f]=C.useState([]),{dataUser:p}=lt(),{register:m,setValue:g,unregister:x,formState:{errors:y},watch:v}=st(),b=!!v("licenciado")&&l.every((_,D)=>!!v(`Fornecedor${D}`)&&!!v(`PlanoComercial${D}`)),E=(_,D)=>{g(`Fornecedor${D}`,_.value);const T=[...u];T[D]=_.value,f(T)},S=()=>{if(l.length<a.length){const _=l.length;c(D=>[...D,{}]),g(`Fornecedor${_}`,void 0),g(`PlanoComercial${_}`,void 0)}},F=_=>{c(D=>{const T=[...D];T.splice(_,1);const R=[...u];return R.splice(_,1),f(R),[`Fornecedor${_}`,`PlanoComercial${_}`].forEach(j=>{x(j)}),T})},P=()=>l.map((_,D)=>{const T=a.filter(B=>!u.includes(B.value)),R=D!==0&&d(Jee,{onClick:()=>F(D),children:"Remover"}),j=D===l.length-1&&l.length!==a.length&&d(Zee,{onClick:S,children:"Adicionar outro"});return w(qee,{children:[d(kw,{children:d(ge,{...m(`Fornecedor${D}`),label:"Fornecedor",placeholder:"",hasError:!!y[`Fornecedor${D}`],optionsData:{options:T},onChange:B=>E(B,D)})}),d(kw,{children:d(ge,{...m(`PlanoComercial${D}`),label:"Plano Comercial",optionsData:Xee,placeholder:"",hasError:!!y[`PlanoComercial${D}`],onChange:B=>{g(`PlanoComercial${D}`,B.value)}})}),R,j]},D)});C.useEffect(()=>{i(!0),Oe.get("https://api-pagueassim.stalopay.com.br/acquire/index",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${p==null?void 0:p.token}`}}).then(_=>{console.log("hello",_);const D=Object.keys(v()).filter(R=>R.startsWith("Fornecedor")).length;D>0&&c(new Array(D).fill({}));const T=_.data;if(T&&T.acquires){const R=T.acquires.map(L=>({value:L.id,label:L.acquire_label}));s(R)}i(!1)}).catch(_=>{console.error("Houve um erro ao buscar os dados:",_),i(!1)})},[]),C.useEffect(()=>{i(!0),Oe.get("https://api-pagueassim.stalopay.com.br/seller/indexla",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${p==null?void 0:p.token}`}}).then(_=>{const D=_.data;if(D&&D.sellers){console.log(D.sellers.trading_name);const T=D.sellers.map((R,L)=>({value:R.id,label:`${R.trading_name}-${R.type}-${R.cnpj_cpf}`}));o(T)}i(!1)}).catch(_=>{console.error("Houve um erro ao buscar os dados:",_)})},[]);const k=()=>{g("licenciado","101");const _=["1","2"],D=["planOption1","planOption2"];_.forEach((T,R)=>{g(`Fornecedor${R}`,T),g(`PlanoComercial${R}`,D[R])})};return C.useEffect(()=>{k()},[]),w(ie,{children:[n&&d(Ve,{}),d(Nee,{children:w(Vee,{children:[w(jee,{children:[d(Hee,{children:"Comercial"}),d(Uee,{}),w(Wee,{children:[w(Yee,{children:[d(ge,{...m("licenciado"),label:"Licenciado Autorizado",optionsData:{options:r},hasError:!!y.licenciado,onChange:_=>{g("licenciado",_.value)}}),d("button",{children:"Pesquise pelo nome do Licenciado"})]}),P()]})]}),w(Kee,{children:[d(Gee,{onClick:t,children:"Voltar"}),d(_w,{disabled:!b,onClick:e,children:"Salvar"}),d(_w,{disabled:!b,onClick:e,children:"Avançar"})]})]})})]})}const ete=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,tte=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,nte=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,ite=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,rte=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,ote=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 140px;
  margin-right: 50px;


`,Pw=h.section`
    display: flex;
gap: 40px;

`,ate=h.section`
   width: 365px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`,ste=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,lte=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,cte=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;


`,ute=h.div`
  width: 215px;

`,dte=h.div`
 width: 365px;

`,fte=h.div`
  width: 215px;

`,pte=h.div`
  width: 215px;

`,Ld={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]},hte=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,gte=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,mte=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;


margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,xte=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,vte=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
  margin-bottom: 36px;
`,bte=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 140px;
  margin-right: 50px;


`,Aw=h.section`
    display: flex;
gap: 40px;

`,yte=h.section`
   width: 365px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`;h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

`;h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`;h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`;const wte=h.div`
  width: 215px;

`,Cte=h.div`
 width: 365px;

`,Ete=h.div`
  width: 215px;

`,Ste=h.div`
  width: 215px;

`,Fte=h.div`
  display: flex;
  justify-content: space-between;



  > div {
    display: flex;
    gap: 14px;

    > p {
    font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #676767;
  }
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #676767;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  position: relative;
  background: white;
}

input[type="checkbox"]:checked {
  border: 1px solid #676767;
  border-radius: 5px;
}

input[type="checkbox"]:checked::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  border: 1px solid white;
  border-radius: 3px;
  background: #08BBE9;
}

  }
`;function kte({stepName:e}){const{register:t,getValues:n,setValue:i}=st(),[r,o]=C.useState(!0),a=f=>{const p=f.replace(/\D/g,"");return p.length>11?p.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,"$1.$2.$3/$4-$5"):p.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/,"$1.$2.$3-$4")},s=f=>{const p=a(f.target.value);i("CpfCnpj",p)},l=()=>{o(!r)},c=e.toLowerCase(),u=JSON.stringify({Banco:n().Banco,TipoDeConta:n().TipoDeConta,Agência:n().Agência,Conta:n().Conta,CpfCnpj:n().CpfCnpj});return C.useEffect(()=>{const f=n();r?(i(`Banco${c}`,f.Banco),i(`TipoDeConta${c}`,f.TipoDeConta),i(`Agência${c}`,f.Agência),i(`Conta${c}`,f.Conta),i(`CpfCnpj${c}`,f.CpfCnpj)):(i(`Banco${c}`,""),i(`TipoDeConta${c}`,""),i(`Agência${c}`,""),i(`Conta${c}`,""),i(`CpfCnpj${c}`,""))},[i,c,r,u]),d(ie,{children:d(hte,{children:d(gte,{children:w(mte,{children:[w(Fte,{children:[w(xte,{children:["Dados Bancários - ",e]}),w("div",{children:[d("input",{type:"checkbox",checked:r,onChange:l}),d("p",{children:"Utilizar dados do F1"})]})]}),d(vte,{}),!r&&w(bte,{children:[w(Aw,{children:[d(Cte,{children:d(ge,{...t(`Banco${c}`),label:"Banco",optionsData:Ld,placeholder:"Clique para ver a lista",onChange:f=>{i(`Banco${c}`,f.value)}})}),d(wte,{children:d(ge,{...t(`TipoDeConta${c}`),label:"Tipo de Conta",placeholder:"",optionsData:Ld,onChange:f=>{i(`TipoDeConta${c}`,f.value)}})})]}),w(Aw,{children:[d(Ete,{children:d(ne,{...t(`Agência${c}`),label:"Agência",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasSuccess:!1})}),d(Ste,{children:d(ne,{...t(`Conta${c}`),label:"Conta",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasSuccess:!1})})]}),d(yte,{children:d(ne,{colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,...t(`CpfCnpj${c}`),label:"CPF ou CNPJ",placeholder:"--.---.---/---.--",onChange:s})})]})]})})})})}function _te({Avançar:e,Voltar:t,isLoading:n}){const{register:i,setValue:r,formState:{errors:o},getValues:a,watch:s}=st(),l=v=>[`Bancof${v}`,`TipoDeContaf${v}`,`Agênciaf${v}`,`Contaf${v}`,`CpfCnpjf${v}`].every(E=>!!a(E)),c=()=>{if(!(s("Banco")&&s("TipoDeConta")&&s("Agência")&&s("Conta")&&s("CpfCnpj")))return!1;for(let v=2;v<=g;v++)if(!l(v))return!1;return!0},u=v=>{const b=v.replace(/\D/g,"");return b.length>11?b.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,"$1.$2.$3/$4-$5"):b.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/,"$1.$2.$3-$4")},f=v=>{const b=u(v.target.value);r("CpfCnpj",b)},p=s("CpfCnpj"),m=p&&p.length>14?"99.999.999/9999-99":"999.999.999-99",g=Object.keys(a()).filter(v=>v.startsWith("Fornecedor")).length,x=()=>{const v=[];for(let b=2;b<=g;b++)v.push(d(kte,{stepName:`F${b}`},b));return v},y=()=>{r("Banco","001"),r("TipoDeConta","Corrente"),r("Agência","1234-5"),r("Conta","67890-1"),r("CpfCnpj",u("12345678909")),[{banco:"341",tipoConta:"Poupança",agencia:"9876-5",conta:"43210-0",cpfCnpj:"98765432109"}].forEach((b,E)=>{r(`Bancof${E+2}`,b.banco),r(`TipoDeContaf${E+2}`,b.tipoConta),r(`Agênciaf${E+2}`,b.agencia),r(`Contaf${E+2}`,b.conta),r(`CpfCnpjf${E+2}`,u(b.cpfCnpj))})};return C.useEffect(()=>{y()},[]),w(ie,{children:[n&&d(Ve,{}),d(ete,{children:w(tte,{children:[w(nte,{children:[d(ite,{children:"Dados Bancários - F1"}),d(rte,{}),w(ote,{children:[w(Pw,{children:[d(dte,{children:d(ge,{...i("Banco",{required:!0}),label:"Banco",optionsData:Ld,placeholder:"Clique para ver a lista",hasError:!!o.Banco,onChange:v=>{r("Banco",v.value)}})}),d(ute,{children:d(ge,{...i("TipoDeConta",{required:!0}),label:"Tipo de Conta",placeholder:"",optionsData:Ld,hasError:!!o["Tipo de Conta"],onChange:v=>{r("TipoDeConta",v.value)}})})]}),w(Pw,{children:[d(fte,{children:d(ne,{...i("Agência",{required:!0}),label:"Agência",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.Agência,hasSuccess:!1})}),d(pte,{children:d(ne,{...i("Conta",{required:!0}),label:"Conta",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.Conta,hasSuccess:!1})})]}),d(ate,{children:d(ne,{colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,...i("CpfCnpj",{required:!0}),label:"CPF ou CNPJ",placeholder:"--.---.---/---.--",hasError:!!o.CpfCnpj,onChange:f},m)})]})]}),x(),w(cte,{children:[d(lte,{onClick:t,children:"Voltar"}),d(ste,{disabled:!c(),onClick:e,children:"Salvar"})]})]})})]})}const Pte=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Ate=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Dte=h.div`
  display: flex;
  justify-content: space-between;

`,$te=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin-top: 30px;
  margin-bottom: 32px;

  width: 900px;
  padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,Ote=h.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #7d7d7d;
`,Tte=h.div`
  border: 1px solid #a0a0a0;
  margin-top: 15px;
`,Mte=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;
`,qh=h.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`,Ite=h.section`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > button {
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;

    letter-spacing: 0.5px;

    color: #665b6d;
  }
`,Dw=h.button`
  width: 109px;
  height: 35px;

  background: #00a3d7;
  border: 0.5px solid #0086ed;
  border-radius: 5px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;

  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 100px;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`,Lte=h.div`

`,Rte=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};

  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"8px 1px 1px 8px"} ;

  position: ${({active:e})=>e?"relative":""};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,Bte=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};
  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"1px 8px 8px 1px"} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,zte=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,Nte=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`,Vte={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]};function jte({Avançar:e,BPF:t,BPJ:n}){const{register:i,setValue:r,formState:{errors:o,isValid:a},trigger:s,watch:l}=st(),c=!!l("NomeFantasiaEstabelecimento")&&!!l("NascimentoSocio")&&!!l("CPFEstabelecimento")&&!!l("NomeSocioEstabelecimento")&&!!l("EmailEstabelecimento")&&!!l("AreaAtuacaoEstabelecimento")&&!!l("TelefoneEstabelecimento"),u=async()=>{await s()&&!o.CNPJEstabelecimento&&!o.CPFEstabelecimento&&c&&a&&e()},f=()=>{r("CNPJEstabelecimento","23.699.017/0001-84"),r("RazaoSocialEstabelecimento","Mocked Company Ltd."),r("NomeFantasiaEstabelecimento","Mocked Company"),r("DataCriacaoEstabelecimento","01/01/2000"),r("NascimentoSocio","15/05/1985"),r("CPFEstabelecimento","913.482.830-33"),r("NomeSocioEstabelecimento","Mocked Partner Name"),r("EmailEstabelecimento","mocked.email@example.com"),r("TelefoneEstabelecimento","(81) 991431834"),r("AreaAtuacaoEstabelecimento","option1")};return C.useEffect(()=>{f()},[]),d(Pte,{children:w(Ate,{children:[w($te,{children:[w(Dte,{children:[d(Ote,{children:"Dados do Estabelecimento"}),w(Lte,{children:[d(Rte,{active:!1,onClick:n,children:"PJ"}),d(Bte,{active:!0,onClick:t,children:"PF"})]})]}),d(Tte,{}),w(Mte,{children:[w(qh,{children:[d(ne,{...i("NomeFantasiaEstabelecimento"),label:"Nome Fantasia",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeFantasiaEstabelecimento}),d(ye,{...i("NascimentoSocio",{validate:zt}),label:"Data de Nascimento",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.NascimentoSocio})]}),w(qh,{children:[d(ye,{...i("CPFEstabelecimento",{validate:Fe.validateCPF}),label:"CPF",mask:"999.999.999-99",placeholder:"---.---.---.--",hasError:!!o.CPFEstabelecimento}),d(ne,{...i("NomeSocioEstabelecimento"),label:"Nome Completo",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeSocioEstabelecimento})]}),w(qh,{children:[d(ne,{...i("EmailEstabelecimento",{validate:Tn}),label:"E-mail",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.EmailEstabelecimento}),d(ye,{...i("TelefoneEstabelecimento",{validate:bn}),label:"Telefone/Celular",mask:"(99) 99999-9999",placeholder:"(--) ----.----",hasError:!!o.TelefoneEstabelecimento})]}),w(Ite,{children:[d(ge,{optionsData:Vte,...i("AreaAtuacaoEstabelecimento"),placeholder:"Digite aqui ou clique para ver a lista",label:"Área de Atuação",onChange:p=>{r("AreaAtuacaoEstabelecimento",p.value)},hasError:!!o.AreaAtuacaoEstabelecimento}),d("button",{children:"Pesquise pelo CNAE ou Nome"})]})]})]}),w(Nte,{children:[d(zte,{children:"Cancelar"}),d(Dw,{disabled:!c,onClick:e,children:"Salvar"}),d(Dw,{disabled:!c,onClick:u,children:"Avançar"})]})]})})}const Hte=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Ute=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Wte=h.div`
  display: flex;
  justify-content: space-between;

`,qte=h.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  margin-top: 30px;
  margin-bottom: 32px;

  width: 900px;
  padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,Zte=h.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #7d7d7d;
`,Jte=h.div`
  border: 1px solid #a0a0a0;
  margin-top: 15px;
`,Yte=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;
`,Yc=h.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`,Gte=h.section`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > button {
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;

    letter-spacing: 0.5px;

    color: #665b6d;
  }
`,$w=h.button`
  width: 109px;
  height: 35px;

  background: #00a3d7;
  border: 0.5px solid #0086ed;
  border-radius: 5px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;

  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 100px;

  :disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }
`,Kte=h.div`

`,Xte=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};

  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"8px 1px 1px 8px"} ;

  position: ${({active:e})=>e?"relative":""};
  margin-right: -5px;

  font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,Qte=h.button`
  width: 50px;
  height: 34px;
  background-color: ${({active:e})=>e?"#08BBE9":"#E6E6E6"};
  color: ${({active:e})=>e?"white":"black"};


  border-radius: ${({active:e})=>e?"8px":"1px 8px 8px 1px"} ;


font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
`,ene=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,tne=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`,nne={options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]};function ine({Avançar:e,BPF:t,BPJ:n}){const{register:i,setValue:r,formState:{errors:o,isValid:a},trigger:s,watch:l}=st(),c=!!l("CNPJEstabelecimento")&&!!l("RazaoSocialEstabelecimento")&&!!l("NomeFantasiaEstabelecimento")&&!!l("DataCriacaoEstabelecimento")&&!!l("NascimentoSocio")&&!!l("CPFEstabelecimento")&&!!l("NomeSocioEstabelecimento")&&!!l("EmailEstabelecimento")&&!!l("AreaAtuacaoEstabelecimento")&&!!l("TelefoneEstabelecimento"),u=async()=>{await s()&&!o.CNPJEstabelecimento&&!o.CPFEstabelecimento&&c&&a&&e()},f=()=>{r("CNPJEstabelecimento","23.699.017/0001-84"),r("RazaoSocialEstabelecimento","Mocked Company Ltd."),r("NomeFantasiaEstabelecimento","Mocked Company"),r("DataCriacaoEstabelecimento","01/01/2000"),r("NascimentoSocio","15/05/1985"),r("CPFEstabelecimento","913.482.830-33"),r("NomeSocioEstabelecimento","Mocked Partner Name"),r("EmailEstabelecimento","mocked.email@example.com"),r("TelefoneEstabelecimento","(81) 991431834"),r("AreaAtuacaoEstabelecimento","option1")};return C.useEffect(()=>{f()},[]),d(Hte,{children:w(Ute,{children:[w(qte,{children:[w(Wte,{children:[d(Zte,{children:"Dados do Estabelecimento"}),w(Kte,{children:[d(Xte,{active:!0,onClick:n,children:"PJ"}),d(Qte,{active:!1,onClick:t,children:"PF"})]})]}),d(Jte,{}),w(Yte,{children:[w(Yc,{children:[d(ye,{...i("CNPJEstabelecimento",{validate:Fe.validateCNPJ}),mask:"99.999.999/9999-99",placeholder:"--.---.---/---.--",hasError:!!o.CNPJEstabelecimento,label:"CNPJ"}),d(ne,{...i("RazaoSocialEstabelecimento"),label:"Razão Social",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.RazaoSocialEstabelecimento})]}),w(Yc,{children:[d(ne,{...i("NomeFantasiaEstabelecimento"),label:"Nome Fantasia",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeFantasiaEstabelecimento}),d(ye,{...i("DataCriacaoEstabelecimento",{validate:zt}),label:"Data de Criação",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.DataCriacaoEstabelecimento})]}),w(Yc,{children:[d(ye,{...i("CPFEstabelecimento",{validate:Fe.validateCPF}),label:"CPF",mask:"999.999.999-99",placeholder:"---.---.---.--",hasError:!!o.CPFEstabelecimento}),d(ne,{...i("NomeSocioEstabelecimento"),label:"Nome Completo do Sócio",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.NomeSocioEstabelecimento})]}),w(Yc,{children:[d(ye,{...i("NascimentoSocio",{validate:zt}),label:"Nascimento Sócio",mask:"99/99/9999",placeholder:"dd/mm/aaaa",hasError:!!o.NascimentoSocio}),d(ye,{...i("TelefoneEstabelecimento",{validate:bn}),label:"Telefone/Celular",mask:"(99) 99999-9999",placeholder:"(--) ----.----",hasError:!!o.TelefoneEstabelecimento}),d(ne,{...i("EmailEstabelecimento",{validate:Tn}),label:"E-mail",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!o.EmailEstabelecimento})]}),w(Gte,{children:[d(ge,{optionsData:nne,...i("AreaAtuacaoEstabelecimento"),placeholder:"Digite aqui ou clique para ver a lista",label:"Área de Atuação",onChange:p=>{r("AreaAtuacaoEstabelecimento",p.value)},hasError:!!o.AreaAtuacaoEstabelecimento}),d("button",{children:"Pesquise pelo CNAE ou Nome"})]})]})]}),w(tne,{children:[d(ene,{children:"Cancelar"}),d($w,{disabled:!c,onClick:e,children:"Salvar"}),d($w,{disabled:!c,onClick:u,children:"Avançar"})]})]})})}function rne({Avançar:e}){const{documentTypeEC:t,updateToCNPJEC:n,updateToCPFEC:i}=up();return d(ie,{children:t==="CNPJ"?d(ine,{Avançar:e,BPJ:n,BPF:i}):d(jte,{Avançar:e,BPJ:n,BPF:i})})}const one=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,ane=h.div`
 display: flex;
  flex-direction: column;
align-items: center;

`,sne=h.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`,lne=h.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`,cne=h.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`,une=h.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;


`,Zh=h.section`
    display: flex;
justify-content: space-between;
gap: 50px;

`,dne=h.section`
    width: 215px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`,Ow=h.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`,fne=h.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`,pne=h.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`;function hne({Avançar:e,Voltar:t}){const{register:n,formState:{errors:i},setValue:r,watch:o}=st(),[a,s]=C.useState(!1),l=!!o("CEP")&&!!o("Endereco")&&!!o("Numero")&&!!o("Bairro")&&!!o("Cidade")&&!!o("Estado"),c=async f=>{s(!0);try{const p=await Oe.get(`https://viacep.com.br/ws/${f}/json/`);if(p.data){const{logradouro:m,complemento:g,bairro:x,localidade:y,uf:v}=p.data;r("Endereco",m||""),r("Complemento",g||""),r("Bairro",x||""),r("Cidade",y||""),r("Estado",v||"")}}catch(p){console.error("Erro ao buscar endereço:",p)}finally{s(!1)}},u=()=>{r("CEP","12345-678"),r("Endereco","Rua Exemplo Mocked"),r("Numero","123"),r("Complemento","Apto 1"),r("Bairro","Bairro Mocked"),r("Cidade","Cidade Mocked"),r("Estado","SP")};return C.useEffect(()=>{s(!1),n("CEP");const f=m=>{const g=m.target.value.replace(/\D/g,"");g.length===8&&c(g)},p=document.getElementById("cep");return p.addEventListener("change",f),u(),()=>{p.removeEventListener("change",f)}},[n,r]),w(ie,{children:[a&&d(Ve,{}),d(one,{children:w(ane,{children:[w(sne,{children:[d(lne,{children:"Endereço"}),d(cne,{}),w(une,{children:[w(Zh,{children:[d(ye,{id:"cep",...n("CEP"),label:"CEP",mask:"99999-999",placeholder:"--.---.---",hasError:!!i.CEP}),d(ne,{...n("Endereco"),label:"Endereço",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Endereco})]}),w(Zh,{children:[d(ne,{...n("Numero"),label:"Número",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Numero}),d(ne,{...n("Complemento"),label:"Complemento",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Complemento})]}),w(Zh,{children:[d(ne,{...n("Bairro"),label:"Bairro",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,hasError:!!i.Bairro}),d(ne,{...n("Cidade"),label:"Cidade",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,disabled:!0,hasError:!!i.Cidade})]}),d(dne,{children:d(ne,{...n("Estado"),label:"Estado",colorInputDefault:$.primaria,colorInputSuccess:$.secundaria,disabled:!0,hasError:!!i.Estado})})]})]}),w(pne,{children:[d(fne,{onClick:t,children:"Voltar"}),d(Ow,{disabled:!l,onClick:e,children:"Salvar"}),d(Ow,{disabled:!l,onClick:e,children:"Avançar"})]})]})})]})}const gne=()=>{const[e,t]=C.useState(1),n=be(),[i,r]=C.useState(!0);lt();const{documentTypeEC:o}=up(),[a,s]=C.useState(!1),l=()=>{n("/establishmentdetail"),localStorage.setItem("selectedItem","0"),r(!1)},c=qt(),{getValues:u}=c,f=()=>{e===4&&v()&&t(5),e<4&&v()&&t(S=>S+1)},p=()=>{e>1&&t(S=>S-1)},m=()=>{const S=u(),F=Tn(S.EmailEstabelecimento),P=o!=="CPF"?zt(S.DataCriacaoEstabelecimento):!0,k=bn(S.TelefoneEstabelecimento);return(Fe.validateCNPJ(S.CNPJEstabelecimento)||o==="CPF")&&(S.RazaoSocialEstabelecimento||o==="CPF")&&S.NomeFantasiaEstabelecimento&&S.NascimentoSocio&&Fe.validateCPF(S.CPFEstabelecimento)&&S.NomeSocioEstabelecimento&&F&&k&&S.AreaAtuacaoEstabelecimento&&P},g=()=>{const S=u();return S.CEP&&S.Endereco&&S.Numero&&S.Bairro&&S.Cidade&&S.Estado},x=()=>{const S=u(),F=Object.keys(S).filter(P=>P.startsWith("Fornecedor")).length;return!!S.licenciado&&Array.from({length:F}).every((P,k)=>!!S[`Fornecedor${k}`]&&!!S[`PlanoComercial${k}`])},y=()=>{const S=u(),F=S.CpfCnpj?S.CpfCnpj.replace(/\D/g,""):"";let P=!1;return F.length<=11?P=Fe.validateCPF(F):P=Fe.validateCNPJ(F),S.Banco&&S.TipoDeConta&&S.Agência&&S.Conta&&P},v=()=>{switch(e){case 1:return m();case 2:return g();case 3:return x();case 4:return y();default:return!0}},b=[1,2,3,4],E="Estabelecimento Atualizado";return w(Aee,{children:[d(Dee,{children:d(zee,{stepLabels:["Dados do Estabelecimento","Endereço","Comercial","Dados Bancários"],startProgress:0,endProgress:b.length+1,currentStep:e,setCurrentStep:t,steps:b,canAdvance:v(),canGoBack:e>1})}),w($a,{...c,children:[e===1&&d(rne,{Avançar:f}),e===2&&d(hne,{Avançar:f,Voltar:p}),e===3&&d(Qee,{Avançar:f,Voltar:p}),e===4&&d(_te,{isLoading:a,Avançar:f,Voltar:p}),e===5&&d(Mf,{text:E,visible:i,onClose:l})]})]})},mne=h.div`
  border-radius: 12px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 100%;
  max-width: 260px;
  padding:  25px 0;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 11px;

  > p{
    color:  #383838;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 14.576px;
font-weight: 500;
line-height: 26.723px;
  }

  > span{
    color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 24.293px;
font-weight: 700;
line-height: 26.723px;
  }
`;function Gc({label:e,label2:t}){return w(mne,{children:[d("p",{children:e})," ",d("span",{children:t})]})}const xne=h.div`
  display: flex;
  flex-direction: column;
  padding: 0 44px;
`,vne=h.div`
  display: flex;
  gap: 65px;
justify-content: center;
  margin-top: 43px;

`,bne=h.div`
  display: flex;
  gap: 63px;
  margin-top: 43px;
  margin-bottom: 88px;
`,yne=h.div`
  display: flex;
  gap: 19px;

`,wne=h.h2`
margin-top: 28px;
margin-bottom: 28px;
color: #00A3D7;
font-size: 24px;
font-weight: 700;
`,Cne=h.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 492px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`,Ene=h.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 11px;
    background: var(--foundation-brand-01-normal, #10104F);

    >button{
      border-radius: 3.532px;
      border: 0.353px solid #F5F4F4;
      background: #FFF;
      color: var(--foundation-brand-01-normal, #10104F);
      font-family: Poppins;
      font-size: 9.477px;
      padding: 5px 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 14.128px; 
      letter-spacing: 0.353px;
    }

    > h2{
      color: var(--foundation-white-light, #FDFDFD);
      font-family: Poppins;
      font-size: 12.906px;
      font-weight: 700;
      line-height: 15.566px; 
    }
`,Sne=h.table`
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    border-left: 1px solid #E0E0E0;
    border-right: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
`,Kc=h.td`
    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    padding: 8px 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
    color: var(--light-secondary, #6C757D);
    font-family: Poppins;
    font-size: 11px;
    line-height: 22px;
    text-align: center;
`,Xc=h.th`
    padding: 8px 16px;
    color: var(--light-secondary, #6C757D);
    font-family: Poppins;
    font-size: 11px;
    line-height: 22px;
    text-align: center;
`;function Fne(){const e=be(),t=[{ranking:"1º",nome:"Padaria Trevo de Longo Nome",comissao:340,qtdPos:"02"},{ranking:"2º",nome:"Padaria Trevo de Longo Nome",comissao:340,qtdPos:"02"},{ranking:"3º",nome:"Padaria Trevo de Longo Nome",comissao:340,qtdPos:"02"}];function n(r){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(r)}function i(){e("/commission/ranking")}return w(Cne,{children:[w(Ene,{children:[d("h2",{children:"TOP Estabelecimentos"}),d("button",{onClick:i,children:"Ver todos"})]}),w(Sne,{children:[d("thead",{children:w("tr",{children:[d(Xc,{children:"Ranking"}),d(Xc,{children:"Nome"}),d(Xc,{children:"Comissão"}),d(Xc,{children:"Qtd. POS"})]})}),d("tbody",{children:t.map((r,o)=>w("tr",{children:[d(Kc,{children:r.ranking}),d(Kc,{children:r.nome}),d(Kc,{children:n(r.comissao)}),d(Kc,{children:r.qtdPos})]},o))})]})]})}const kne=h.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 492px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`,_ne=h.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 11px;
    background: var(--foundation-brand-02-normal, #08BBE9);

    > button {
        border-radius: 3.532px;
        border: 0.353px solid #F5F4F4;
        background: #FFF;
        color: var(--foundation-brand-02-normal, #08BBE9);
        font-family: Poppins;
        font-size: 9.477px;
        padding: 5px 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 14.128px;
        letter-spacing: 0.353px;
    }

    > h2 {
        color: var(--foundation-white-light, #FDFDFD);
        font-family: Poppins;
        font-size: 12.906px;
        font-weight: 700;
        line-height: 15.566px;
    }
`,Pne=h.table`
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    border-left: 1px solid #E0E0E0;
    border-right: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
`,Jh=h.td`
    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    padding: 8px 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
    color: var(--light-secondary, #6C757D);
    font-family: Poppins;
    font-size: 11px;
    line-height: 22px;
    text-align: center;
`,Qc=h.th`
    padding: 8px 16px;
    color: var(--light-secondary, #6C757D);
    font-family: Poppins;
    font-size: 11px;
    line-height: 22px;
    text-align: center;
`,Ane=h.td`

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
    color: var(--light-secondary, #6C757D);
    font-family: Poppins;
    font-size: 11px;
    line-height: 22px;
    text-align: center;


`,Dne=h.div`
    display: flex;
    gap: 2.5px;
    justify-content: center;
    align-items: center;

    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    padding: 8px 16px;
`;function $ne(){const e=be(),t=[{data:"25/10/2023 08:45",form:"Crédito",bandeira:"Visa",valor:320},{data:"24/10/2023 14:30",form:"Débito",bandeira:"Mastercard",valor:150.5},{data:"24/10/2023 14:30",form:"Débito",bandeira:"Mastercard",valor:150.5}];function n(r){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(r)}async function i(){await localStorage.setItem("selectedItem","4"),e("/vendas")}return w(kne,{children:[w(_ne,{children:[d("h2",{children:"Últimas vendas"}),d("button",{onClick:i,children:"Ver todos"})]}),w(Pne,{children:[d("thead",{children:w("tr",{children:[d(Qc,{children:"Data"}),d(Qc,{children:"Forma"}),d(Qc,{children:"Bandeira"}),d(Qc,{children:"Valor"})]})}),d("tbody",{children:t.map((r,o)=>w("tr",{children:[d(Jh,{children:r.data}),d(Jh,{children:r.form}),w(Dne,{children:[d("img",{src:r.bandeira==="Visa"?b1:r.bandeira==="Elo"?x1:r.bandeira==="Mastercard"?y1:r.bandeira==="Maestro"?v1:r.bandeira==="Pix"?El:void 0,alt:r.bandeira}),d(Ane,{children:r.bandeira})]}),d(Jh,{children:n(r.valor)})]},o))})]})]})}function One(){return d(ie,{children:w(xne,{children:[d(wne,{children:"Hoje"}),w(yne,{children:[d(Gc,{label:"Comissão",label2:"R$ 435,00"}),d(Gc,{label:"Recebível",label2:"R$ 216,50"}),d(Gc,{label:"Qtd de ECs",label2:"15"}),d(Gc,{label:"Qtd de POs",label2:"15"})]}),w(vne,{children:[d(j1,{pix:"5.000,00",credit:"6.000,20",debit:"2.000,20"}),d("div",{style:{width:"510px",height:"10px"},children:d(H1,{dataArray:["15","19","30","50","20","30","70","80","50","10","20","15"]})})]}),w(bne,{children:[d(Fne,{}),d($ne,{})]})]})})}function Tne(){return d(c8,{children:w(l8,{children:[w(je,{path:"/",element:d(A8,{}),children:[d(je,{path:"/",element:d(P9,{})}),d(je,{path:"/recover",element:d(zD,{})}),d(je,{path:"/reset-password",element:d(u9,{})}),d(je,{path:"/registerpassword/:tokenId",element:d(w9,{})})]}),w(je,{path:"/",element:d(NO,{}),children:[d(je,{path:"/home",element:d(One,{})}),d(je,{path:"/userlist",element:d(tU,{})}),d(je,{path:"/vendas",element:d(Tj,{})}),d(je,{path:"/detalhe",element:d(uH,{})}),d(je,{path:"/estabelecimentos",element:d(eN,{})}),d(je,{path:"/eccadastro",element:d(qV,{})}),d(je,{path:"/establishmentdetail",element:d(yee,{})}),d(je,{path:"/manageAccessEstablishment",element:d(Pee,{})}),d(je,{path:"/editRegistrationEC",element:d(gne,{})}),d(je,{path:"/licenciados",element:d(HH,{})}),d(je,{path:"/lacadastro",element:d(gB,{})}),d(je,{path:"/licenseddetail",element:d(OX,{})}),d(je,{path:"/manageAccessLicensed",element:d(Gq,{})}),d(je,{path:"/editRegistrationLA",element:d(QQ,{})}),d(je,{path:"/userCreation",element:d(_U,{})}),d(je,{path:"/commission/daily",element:d(vW,{})}),d(je,{path:"/commission/ranking",element:d(oq,{})}),d(je,{path:"/plans",element:d(Fq,{})}),d(je,{path:"/addplans",element:d(jq,{})})]}),d(je,{path:"*",element:d(w8,{})})]})})}function Mne({children:e}){return d(_9,{children:d(kj,{children:d(nB,{children:d(TV,{children:e})})})})}function Ine(){return d(Mne,{children:w(s_,{theme:d_,children:[d(sg,{position:"top-right"}),d(Tne,{}),d(u_,{})]})})}Gh.createRoot(document.getElementById("root")).render(d(A.StrictMode,{children:d(Ine,{})}));
