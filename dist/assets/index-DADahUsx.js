var ZE=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var sz=ZE((dz,Pi)=>{function JE(e,r){for(var i=0;i<r.length;i++){const a=r[i];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in e)){const s=Object.getOwnPropertyDescriptor(a,l);s&&Object.defineProperty(e,l,s.get?s:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(l){if(l.ep)return;l.ep=!0;const s=i(l);fetch(l.href,s)}})();var vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ks(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Zw(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var r=e.default;if(typeof r=="function"){var i=function a(){return this instanceof a?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};i.prototype=r.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach(function(a){var l=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:function(){return e[a]}})}),i}var Lf={exports:{}},Pa={},Nf={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function eR(){if(c0)return Me;c0=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.iterator;function h(_){return _===null||typeof _!="object"?null:(_=g&&_[g]||_["@@iterator"],typeof _=="function"?_:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,S={};function M(_,I,G){this.props=_,this.context=I,this.refs=S,this.updater=G||w}M.prototype.isReactComponent={},M.prototype.setState=function(_,I){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,I,"setState")},M.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function O(){}O.prototype=M.prototype;function A(_,I,G){this.props=_,this.context=I,this.refs=S,this.updater=G||w}var z=A.prototype=new O;z.constructor=A,k(z,M.prototype),z.isPureReactComponent=!0;var B=Array.isArray,j=Object.prototype.hasOwnProperty,C={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function L(_,I,G){var Z,ne={},re=null,ae=null;if(I!=null)for(Z in I.ref!==void 0&&(ae=I.ref),I.key!==void 0&&(re=""+I.key),I)j.call(I,Z)&&!P.hasOwnProperty(Z)&&(ne[Z]=I[Z]);var me=arguments.length-2;if(me===1)ne.children=G;else if(1<me){for(var V=Array(me),oe=0;oe<me;oe++)V[oe]=arguments[oe+2];ne.children=V}if(_&&_.defaultProps)for(Z in me=_.defaultProps,me)ne[Z]===void 0&&(ne[Z]=me[Z]);return{$$typeof:e,type:_,key:re,ref:ae,props:ne,_owner:C.current}}function q(_,I){return{$$typeof:e,type:_.type,key:I,ref:_.ref,props:_.props,_owner:_._owner}}function b(_){return typeof _=="object"&&_!==null&&_.$$typeof===e}function W(_){var I={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(G){return I[G]})}var Y=/\/+/g;function N(_,I){return typeof _=="object"&&_!==null&&_.key!=null?W(""+_.key):I.toString(36)}function F(_,I,G,Z,ne){var re=typeof _;(re==="undefined"||re==="boolean")&&(_=null);var ae=!1;if(_===null)ae=!0;else switch(re){case"string":case"number":ae=!0;break;case"object":switch(_.$$typeof){case e:case r:ae=!0}}if(ae)return ae=_,ne=ne(ae),_=Z===""?"."+N(ae,0):Z,B(ne)?(G="",_!=null&&(G=_.replace(Y,"$&/")+"/"),F(ne,I,G,"",function(oe){return oe})):ne!=null&&(b(ne)&&(ne=q(ne,G+(!ne.key||ae&&ae.key===ne.key?"":(""+ne.key).replace(Y,"$&/")+"/")+_)),I.push(ne)),1;if(ae=0,Z=Z===""?".":Z+":",B(_))for(var me=0;me<_.length;me++){re=_[me];var V=Z+N(re,me);ae+=F(re,I,G,V,ne)}else if(V=h(_),typeof V=="function")for(_=V.call(_),me=0;!(re=_.next()).done;)re=re.value,V=Z+N(re,me++),ae+=F(re,I,G,V,ne);else if(re==="object")throw I=String(_),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return ae}function ie(_,I,G){if(_==null)return _;var Z=[],ne=0;return F(_,Z,"","",function(re){return I.call(G,re,ne++)}),Z}function ee(_){if(_._status===-1){var I=_._result;I=I(),I.then(function(G){(_._status===0||_._status===-1)&&(_._status=1,_._result=G)},function(G){(_._status===0||_._status===-1)&&(_._status=2,_._result=G)}),_._status===-1&&(_._status=0,_._result=I)}if(_._status===1)return _._result.default;throw _._result}var R={current:null},te={transition:null},D={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:te,ReactCurrentOwner:C};function E(){throw Error("act(...) is not supported in production builds of React.")}return Me.Children={map:ie,forEach:function(_,I,G){ie(_,function(){I.apply(this,arguments)},G)},count:function(_){var I=0;return ie(_,function(){I++}),I},toArray:function(_){return ie(_,function(I){return I})||[]},only:function(_){if(!b(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},Me.Component=M,Me.Fragment=i,Me.Profiler=l,Me.PureComponent=A,Me.StrictMode=a,Me.Suspense=p,Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,Me.act=E,Me.cloneElement=function(_,I,G){if(_==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+_+".");var Z=k({},_.props),ne=_.key,re=_.ref,ae=_._owner;if(I!=null){if(I.ref!==void 0&&(re=I.ref,ae=C.current),I.key!==void 0&&(ne=""+I.key),_.type&&_.type.defaultProps)var me=_.type.defaultProps;for(V in I)j.call(I,V)&&!P.hasOwnProperty(V)&&(Z[V]=I[V]===void 0&&me!==void 0?me[V]:I[V])}var V=arguments.length-2;if(V===1)Z.children=G;else if(1<V){me=Array(V);for(var oe=0;oe<V;oe++)me[oe]=arguments[oe+2];Z.children=me}return{$$typeof:e,type:_.type,key:ne,ref:re,props:Z,_owner:ae}},Me.createContext=function(_){return _={$$typeof:u,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},_.Provider={$$typeof:s,_context:_},_.Consumer=_},Me.createElement=L,Me.createFactory=function(_){var I=L.bind(null,_);return I.type=_,I},Me.createRef=function(){return{current:null}},Me.forwardRef=function(_){return{$$typeof:c,render:_}},Me.isValidElement=b,Me.lazy=function(_){return{$$typeof:x,_payload:{_status:-1,_result:_},_init:ee}},Me.memo=function(_,I){return{$$typeof:m,type:_,compare:I===void 0?null:I}},Me.startTransition=function(_){var I=te.transition;te.transition={};try{_()}finally{te.transition=I}},Me.unstable_act=E,Me.useCallback=function(_,I){return R.current.useCallback(_,I)},Me.useContext=function(_){return R.current.useContext(_)},Me.useDebugValue=function(){},Me.useDeferredValue=function(_){return R.current.useDeferredValue(_)},Me.useEffect=function(_,I){return R.current.useEffect(_,I)},Me.useId=function(){return R.current.useId()},Me.useImperativeHandle=function(_,I,G){return R.current.useImperativeHandle(_,I,G)},Me.useInsertionEffect=function(_,I){return R.current.useInsertionEffect(_,I)},Me.useLayoutEffect=function(_,I){return R.current.useLayoutEffect(_,I)},Me.useMemo=function(_,I){return R.current.useMemo(_,I)},Me.useReducer=function(_,I,G){return R.current.useReducer(_,I,G)},Me.useRef=function(_){return R.current.useRef(_)},Me.useState=function(_){return R.current.useState(_)},Me.useSyncExternalStore=function(_,I,G){return R.current.useSyncExternalStore(_,I,G)},Me.useTransition=function(){return R.current.useTransition()},Me.version="18.3.1",Me}var p0;function cr(){return p0||(p0=1,Nf.exports=eR()),Nf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function tR(){if(f0)return Pa;f0=1;var e=cr(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(c,p,m){var x,g={},h=null,w=null;m!==void 0&&(h=""+m),p.key!==void 0&&(h=""+p.key),p.ref!==void 0&&(w=p.ref);for(x in p)a.call(p,x)&&!s.hasOwnProperty(x)&&(g[x]=p[x]);if(c&&c.defaultProps)for(x in p=c.defaultProps,p)g[x]===void 0&&(g[x]=p[x]);return{$$typeof:r,type:c,key:h,ref:w,props:g,_owner:l.current}}return Pa.Fragment=i,Pa.jsx=u,Pa.jsxs=u,Pa}var m0;function rR(){return m0||(m0=1,Lf.exports=tR()),Lf.exports}var y=rR(),de=cr();const it=Ks(de);var bd={},zf={exports:{}},Mt={},If={exports:{}},Df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function nR(){return h0||(h0=1,(function(e){function r(te,D){var E=te.length;te.push(D);e:for(;0<E;){var _=E-1>>>1,I=te[_];if(0<l(I,D))te[_]=D,te[E]=I,E=_;else break e}}function i(te){return te.length===0?null:te[0]}function a(te){if(te.length===0)return null;var D=te[0],E=te.pop();if(E!==D){te[0]=E;e:for(var _=0,I=te.length,G=I>>>1;_<G;){var Z=2*(_+1)-1,ne=te[Z],re=Z+1,ae=te[re];if(0>l(ne,E))re<I&&0>l(ae,ne)?(te[_]=ae,te[re]=E,_=re):(te[_]=ne,te[Z]=E,_=Z);else if(re<I&&0>l(ae,E))te[_]=ae,te[re]=E,_=re;else break e}}return D}function l(te,D){var E=te.sortIndex-D.sortIndex;return E!==0?E:te.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var u=Date,c=u.now();e.unstable_now=function(){return u.now()-c}}var p=[],m=[],x=1,g=null,h=3,w=!1,k=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(te){for(var D=i(m);D!==null;){if(D.callback===null)a(m);else if(D.startTime<=te)a(m),D.sortIndex=D.expirationTime,r(p,D);else break;D=i(m)}}function B(te){if(S=!1,z(te),!k)if(i(p)!==null)k=!0,ee(j);else{var D=i(m);D!==null&&R(B,D.startTime-te)}}function j(te,D){k=!1,S&&(S=!1,O(L),L=-1),w=!0;var E=h;try{for(z(D),g=i(p);g!==null&&(!(g.expirationTime>D)||te&&!W());){var _=g.callback;if(typeof _=="function"){g.callback=null,h=g.priorityLevel;var I=_(g.expirationTime<=D);D=e.unstable_now(),typeof I=="function"?g.callback=I:g===i(p)&&a(p),z(D)}else a(p);g=i(p)}if(g!==null)var G=!0;else{var Z=i(m);Z!==null&&R(B,Z.startTime-D),G=!1}return G}finally{g=null,h=E,w=!1}}var C=!1,P=null,L=-1,q=5,b=-1;function W(){return!(e.unstable_now()-b<q)}function Y(){if(P!==null){var te=e.unstable_now();b=te;var D=!0;try{D=P(!0,te)}finally{D?N():(C=!1,P=null)}}else C=!1}var N;if(typeof A=="function")N=function(){A(Y)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,ie=F.port2;F.port1.onmessage=Y,N=function(){ie.postMessage(null)}}else N=function(){M(Y,0)};function ee(te){P=te,C||(C=!0,N())}function R(te,D){L=M(function(){te(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(te){te.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,ee(j))},e.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<te?Math.floor(1e3/te):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return i(p)},e.unstable_next=function(te){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var E=h;h=D;try{return te()}finally{h=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(te,D){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var E=h;h=te;try{return D()}finally{h=E}},e.unstable_scheduleCallback=function(te,D,E){var _=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?_+E:_):E=_,te){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=E+I,te={id:x++,callback:D,priorityLevel:te,startTime:E,expirationTime:I,sortIndex:-1},E>_?(te.sortIndex=E,r(m,te),i(p)===null&&te===i(m)&&(S?(O(L),L=-1):S=!0,R(B,E-_))):(te.sortIndex=I,r(p,te),k||w||(k=!0,ee(j))),te},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(te){var D=h;return function(){var E=h;h=D;try{return te.apply(this,arguments)}finally{h=E}}}})(Df)),Df}var g0;function iR(){return g0||(g0=1,If.exports=nR()),If.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function aR(){if(x0)return Mt;x0=1;var e=cr(),r=iR();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(t,n){u(t,n),u(t+"Capture",n)}function u(t,n){for(l[t]=n,t=0;t<n.length;t++)a.add(n[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},g={};function h(t){return p.call(g,t)?!0:p.call(x,t)?!1:m.test(t)?g[t]=!0:(x[t]=!0,!1)}function w(t,n,o,d){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return d?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k(t,n,o,d){if(n===null||typeof n>"u"||w(t,n,o,d))return!0;if(d)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function S(t,n,o,d,f,v,T){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=n,this.sanitizeURL=v,this.removeEmptyString=T}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){M[t]=new S(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];M[n]=new S(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){M[t]=new S(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){M[t]=new S(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){M[t]=new S(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){M[t]=new S(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){M[t]=new S(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){M[t]=new S(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){M[t]=new S(t,5,!1,t.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function A(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(O,A);M[n]=new S(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(O,A);M[n]=new S(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(O,A);M[n]=new S(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){M[t]=new S(t,1,!1,t.toLowerCase(),null,!1,!1)}),M.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){M[t]=new S(t,1,!1,t.toLowerCase(),null,!0,!0)});function z(t,n,o,d){var f=M.hasOwnProperty(n)?M[n]:null;(f!==null?f.type!==0:d||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(k(n,o,f,d)&&(o=null),d||f===null?h(n)&&(o===null?t.removeAttribute(n):t.setAttribute(n,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(n=f.attributeName,d=f.attributeNamespace,o===null?t.removeAttribute(n):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,d?t.setAttributeNS(d,n,o):t.setAttribute(n,o))))}var B=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),C=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),W=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),R=Symbol.for("react.offscreen"),te=Symbol.iterator;function D(t){return t===null||typeof t!="object"?null:(t=te&&t[te]||t["@@iterator"],typeof t=="function"?t:null)}var E=Object.assign,_;function I(t){if(_===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);_=n&&n[1]||""}return`
`+_+t}var G=!1;function Z(t,n){if(!t||G)return"";G=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(J){var d=J}Reflect.construct(t,[],n)}else{try{n.call()}catch(J){d=J}t.call(n.prototype)}else{try{throw Error()}catch(J){d=J}t()}}catch(J){if(J&&d&&typeof J.stack=="string"){for(var f=J.stack.split(`
`),v=d.stack.split(`
`),T=f.length-1,$=v.length-1;1<=T&&0<=$&&f[T]!==v[$];)$--;for(;1<=T&&0<=$;T--,$--)if(f[T]!==v[$]){if(T!==1||$!==1)do if(T--,$--,0>$||f[T]!==v[$]){var H=`
`+f[T].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=T&&0<=$);break}}}finally{G=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?I(t):""}function ne(t){switch(t.tag){case 5:return I(t.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case C:return"Portal";case q:return"Profiler";case L:return"StrictMode";case N:return"Suspense";case F:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W:return(t.displayName||"Context")+".Consumer";case b:return(t._context.displayName||"Context")+".Provider";case Y:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ie:return n=t.displayName||null,n!==null?n:re(t.type)||"Memo";case ee:n=t._payload,t=t._init;try{return re(t(n))}catch{}}return null}function ae(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(n);case 8:return n===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function me(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function V(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function oe(t){var n=V(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),d=""+t[n];if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,v=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(T){d=""+T,v.call(this,T)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function fe(t){t._valueTracker||(t._valueTracker=oe(t))}function ge(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var o=n.getValue(),d="";return t&&(d=V(t)?t.checked?"true":"false":t.value),t=d,t!==o?(n.setValue(t),!0):!1}function ve(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Se(t,n){var o=n.checked;return E({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Pe(t,n){var o=n.defaultValue==null?"":n.defaultValue,d=n.checked!=null?n.checked:n.defaultChecked;o=me(n.value!=null?n.value:o),t._wrapperState={initialChecked:d,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Te(t,n){n=n.checked,n!=null&&z(t,"checked",n,!1)}function Ce(t,n){Te(t,n);var o=me(n.value),d=n.type;if(o!=null)d==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(d==="submit"||d==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Ue(t,n.type,o):n.hasOwnProperty("defaultValue")&&Ue(t,n.type,me(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function $e(t,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var d=n.type;if(!(d!=="submit"&&d!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,o||n===t.value||(t.value=n),t.defaultValue=n}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ue(t,n,o){(n!=="number"||ve(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Fe=Array.isArray;function Ze(t,n,o,d){if(t=t.options,n){n={};for(var f=0;f<o.length;f++)n["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=n.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&d&&(t[o].defaultSelected=!0)}else{for(o=""+me(o),n=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,d&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function zt(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return E({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sr(t,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(Fe(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}t._wrapperState={initialValue:me(o)}}function Sn(t,n){var o=me(n.value),d=me(n.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),n.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),d!=null&&(t.defaultValue=""+d)}function pr(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function Zn(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ct(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?Zn(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ht,nu=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,d,f){MSApp.execUnsafeLocalFunction(function(){return t(n,o,d,f)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Ht=Ht||document.createElement("div"),Ht.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ht.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function En(t,n){if(n){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=n;return}}t.textContent=n}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xc=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(t){Xc.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Rn[n]=Rn[t]})});function iu(t,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Rn.hasOwnProperty(t)&&Rn[t]?(""+n).trim():n+"px"}function au(t,n){t=t.style;for(var o in n)if(n.hasOwnProperty(o)){var d=o.indexOf("--")===0,f=iu(o,n[o],d);o==="float"&&(o="cssFloat"),d?t.setProperty(o,f):t[o]=f}}var Qc=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bi(t,n){if(n){if(Qc[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function $i(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=null;function Vi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hi=null,Ur=null,Kr=null;function ou(t){if(t=pa(t)){if(typeof Hi!="function")throw Error(i(280));var n=t.stateNode;n&&(n=qu(n),Hi(t.stateNode,t.type,n))}}function lu(t){Ur?Kr?Kr.push(t):Kr=[t]:Ur=t}function su(){if(Ur){var t=Ur,n=Kr;if(Kr=Ur=null,ou(t),n)for(t=0;t<n.length;t++)ou(n[t])}}function uu(t,n){return t(n)}function pe(){}var Wi=!1;function du(t,n,o){if(Wi)return t(n,o);Wi=!0;try{return uu(t,n,o)}finally{Wi=!1,(Ur!==null||Kr!==null)&&(pe(),su())}}function fr(t,n){var o=t.stateNode;if(o===null)return null;var d=qu(o);if(d===null)return null;o=d[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(t=t.type,d=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!d;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var Zc=!1;if(c)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{Zc=!1}function iS(t,n,o,d,f,v,T,$,H){var J=Array.prototype.slice.call(arguments,3);try{n.apply(o,J)}catch(se){this.onError(se)}}var Ki=!1,cu=null,pu=!1,Jc=null,aS={onError:function(t){Ki=!0,cu=t}};function oS(t,n,o,d,f,v,T,$,H){Ki=!1,cu=null,iS.apply(aS,arguments)}function lS(t,n,o,d,f,v,T,$,H){if(oS.apply(this,arguments),Ki){if(Ki){var J=cu;Ki=!1,cu=null}else throw Error(i(198));pu||(pu=!0,Jc=J)}}function Cn(t){var n=t,o=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(o=n.return),t=n.return;while(t)}return n.tag===3?o:null}function Ah(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Lh(t){if(Cn(t)!==t)throw Error(i(188))}function sS(t){var n=t.alternate;if(!n){if(n=Cn(t),n===null)throw Error(i(188));return n!==t?null:t}for(var o=t,d=n;;){var f=o.return;if(f===null)break;var v=f.alternate;if(v===null){if(d=f.return,d!==null){o=d;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===o)return Lh(f),t;if(v===d)return Lh(f),n;v=v.sibling}throw Error(i(188))}if(o.return!==d.return)o=f,d=v;else{for(var T=!1,$=f.child;$;){if($===o){T=!0,o=f,d=v;break}if($===d){T=!0,d=f,o=v;break}$=$.sibling}if(!T){for($=v.child;$;){if($===o){T=!0,o=v,d=f;break}if($===d){T=!0,d=v,o=f;break}$=$.sibling}if(!T)throw Error(i(189))}}if(o.alternate!==d)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:n}function Nh(t){return t=sS(t),t!==null?zh(t):null}function zh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=zh(t);if(n!==null)return n;t=t.sibling}return null}var Ih=r.unstable_scheduleCallback,Dh=r.unstable_cancelCallback,uS=r.unstable_shouldYield,dS=r.unstable_requestPaint,et=r.unstable_now,cS=r.unstable_getCurrentPriorityLevel,ep=r.unstable_ImmediatePriority,Bh=r.unstable_UserBlockingPriority,fu=r.unstable_NormalPriority,pS=r.unstable_LowPriority,$h=r.unstable_IdlePriority,mu=null,mr=null;function fS(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}}var tr=Math.clz32?Math.clz32:gS,mS=Math.log,hS=Math.LN2;function gS(t){return t>>>=0,t===0?32:31-(mS(t)/hS|0)|0}var hu=64,gu=4194304;function Yi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xu(t,n){var o=t.pendingLanes;if(o===0)return 0;var d=0,f=t.suspendedLanes,v=t.pingedLanes,T=o&268435455;if(T!==0){var $=T&~f;$!==0?d=Yi($):(v&=T,v!==0&&(d=Yi(v)))}else T=o&~f,T!==0?d=Yi(T):v!==0&&(d=Yi(v));if(d===0)return 0;if(n!==0&&n!==d&&(n&f)===0&&(f=d&-d,v=n&-n,f>=v||f===16&&(v&4194240)!==0))return n;if((d&4)!==0&&(d|=o&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=d;0<n;)o=31-tr(n),f=1<<o,d|=t[o],n&=~f;return d}function xS(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vS(t,n){for(var o=t.suspendedLanes,d=t.pingedLanes,f=t.expirationTimes,v=t.pendingLanes;0<v;){var T=31-tr(v),$=1<<T,H=f[T];H===-1?(($&o)===0||($&d)!==0)&&(f[T]=xS($,n)):H<=n&&(t.expiredLanes|=$),v&=~$}}function tp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fh(){var t=hu;return hu<<=1,(hu&4194240)===0&&(hu=64),t}function rp(t){for(var n=[],o=0;31>o;o++)n.push(t);return n}function Gi(t,n,o){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-tr(n),t[n]=o}function bS(t,n){var o=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var d=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-tr(o),v=1<<f;n[f]=0,d[f]=-1,t[f]=-1,o&=~v}}function np(t,n){var o=t.entangledLanes|=n;for(t=t.entanglements;o;){var d=31-tr(o),f=1<<d;f&n|t[d]&n&&(t[d]|=n),o&=~f}}var Ne=0;function Vh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Hh,ip,Wh,Uh,Kh,ap=!1,vu=[],Yr=null,Gr=null,Xr=null,Xi=new Map,Qi=new Map,Qr=[],yS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yh(t,n){switch(t){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":Xi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(n.pointerId)}}function Zi(t,n,o,d,f,v){return t===null||t.nativeEvent!==v?(t={blockedOn:n,domEventName:o,eventSystemFlags:d,nativeEvent:v,targetContainers:[f]},n!==null&&(n=pa(n),n!==null&&ip(n)),t):(t.eventSystemFlags|=d,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function wS(t,n,o,d,f){switch(n){case"focusin":return Yr=Zi(Yr,t,n,o,d,f),!0;case"dragenter":return Gr=Zi(Gr,t,n,o,d,f),!0;case"mouseover":return Xr=Zi(Xr,t,n,o,d,f),!0;case"pointerover":var v=f.pointerId;return Xi.set(v,Zi(Xi.get(v)||null,t,n,o,d,f)),!0;case"gotpointercapture":return v=f.pointerId,Qi.set(v,Zi(Qi.get(v)||null,t,n,o,d,f)),!0}return!1}function Gh(t){var n=Pn(t.target);if(n!==null){var o=Cn(n);if(o!==null){if(n=o.tag,n===13){if(n=Ah(o),n!==null){t.blockedOn=n,Kh(t.priority,function(){Wh(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var o=lp(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var d=new o.constructor(o.type,o);Fi=d,o.target.dispatchEvent(d),Fi=null}else return n=pa(o),n!==null&&ip(n),t.blockedOn=o,!1;n.shift()}return!0}function Xh(t,n,o){bu(t)&&o.delete(n)}function kS(){ap=!1,Yr!==null&&bu(Yr)&&(Yr=null),Gr!==null&&bu(Gr)&&(Gr=null),Xr!==null&&bu(Xr)&&(Xr=null),Xi.forEach(Xh),Qi.forEach(Xh)}function Ji(t,n){t.blockedOn===n&&(t.blockedOn=null,ap||(ap=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,kS)))}function ea(t){function n(f){return Ji(f,t)}if(0<vu.length){Ji(vu[0],t);for(var o=1;o<vu.length;o++){var d=vu[o];d.blockedOn===t&&(d.blockedOn=null)}}for(Yr!==null&&Ji(Yr,t),Gr!==null&&Ji(Gr,t),Xr!==null&&Ji(Xr,t),Xi.forEach(n),Qi.forEach(n),o=0;o<Qr.length;o++)d=Qr[o],d.blockedOn===t&&(d.blockedOn=null);for(;0<Qr.length&&(o=Qr[0],o.blockedOn===null);)Gh(o),o.blockedOn===null&&Qr.shift()}var Jn=B.ReactCurrentBatchConfig,yu=!0;function SS(t,n,o,d){var f=Ne,v=Jn.transition;Jn.transition=null;try{Ne=1,op(t,n,o,d)}finally{Ne=f,Jn.transition=v}}function ES(t,n,o,d){var f=Ne,v=Jn.transition;Jn.transition=null;try{Ne=4,op(t,n,o,d)}finally{Ne=f,Jn.transition=v}}function op(t,n,o,d){if(yu){var f=lp(t,n,o,d);if(f===null)Ep(t,n,d,wu,o),Yh(t,d);else if(wS(f,t,n,o,d))d.stopPropagation();else if(Yh(t,d),n&4&&-1<yS.indexOf(t)){for(;f!==null;){var v=pa(f);if(v!==null&&Hh(v),v=lp(t,n,o,d),v===null&&Ep(t,n,d,wu,o),v===f)break;f=v}f!==null&&d.stopPropagation()}else Ep(t,n,d,null,o)}}var wu=null;function lp(t,n,o,d){if(wu=null,t=Vi(d),t=Pn(t),t!==null)if(n=Cn(t),n===null)t=null;else if(o=n.tag,o===13){if(t=Ah(n),t!==null)return t;t=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return wu=t,null}function Qh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cS()){case ep:return 1;case Bh:return 4;case fu:case pS:return 16;case $h:return 536870912;default:return 16}default:return 16}}var Zr=null,sp=null,ku=null;function Zh(){if(ku)return ku;var t,n=sp,o=n.length,d,f="value"in Zr?Zr.value:Zr.textContent,v=f.length;for(t=0;t<o&&n[t]===f[t];t++);var T=o-t;for(d=1;d<=T&&n[o-d]===f[v-d];d++);return ku=f.slice(t,1<d?1-d:void 0)}function Su(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Eu(){return!0}function Jh(){return!1}function It(t){function n(o,d,f,v,T){this._reactName=o,this._targetInst=f,this.type=d,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var $ in t)t.hasOwnProperty($)&&(o=t[$],this[$]=o?o(v):v[$]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Eu:Jh,this.isPropagationStopped=Jh,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Eu)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Eu)},persist:function(){},isPersistent:Eu}),n}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},up=It(ei),ta=E({},ei,{view:0,detail:0}),RS=It(ta),dp,cp,ra,Ru=E({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(dp=t.screenX-ra.screenX,cp=t.screenY-ra.screenY):cp=dp=0,ra=t),dp)},movementY:function(t){return"movementY"in t?t.movementY:cp}}),eg=It(Ru),CS=E({},Ru,{dataTransfer:0}),PS=It(CS),OS=E({},ta,{relatedTarget:0}),pp=It(OS),_S=E({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),jS=It(_S),TS=E({},ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MS=It(TS),qS=E({},ei,{data:0}),tg=It(qS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=NS[t])?!!n[t]:!1}function fp(){return zS}var IS=E({},ta,{key:function(t){if(t.key){var n=AS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Su(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fp,charCode:function(t){return t.type==="keypress"?Su(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Su(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DS=It(IS),BS=E({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rg=It(BS),$S=E({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fp}),FS=It($S),VS=E({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),HS=It(VS),WS=E({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),US=It(WS),KS=[9,13,27,32],mp=c&&"CompositionEvent"in window,na=null;c&&"documentMode"in document&&(na=document.documentMode);var YS=c&&"TextEvent"in window&&!na,ng=c&&(!mp||na&&8<na&&11>=na),ig=" ",ag=!1;function og(t,n){switch(t){case"keyup":return KS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function GS(t,n){switch(t){case"compositionend":return lg(n);case"keypress":return n.which!==32?null:(ag=!0,ig);case"textInput":return t=n.data,t===ig&&ag?null:t;default:return null}}function XS(t,n){if(ti)return t==="compositionend"||!mp&&og(t,n)?(t=Zh(),ku=sp=Zr=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ng&&n.locale!=="ko"?null:n.data;default:return null}}var QS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!QS[t.type]:n==="textarea"}function ug(t,n,o,d){lu(d),n=ju(n,"onChange"),0<n.length&&(o=new up("onChange","change",null,o,d),t.push({event:o,listeners:n}))}var ia=null,aa=null;function ZS(t){Pg(t,0)}function Cu(t){var n=oi(t);if(ge(n))return t}function JS(t,n){if(t==="change")return n}var dg=!1;if(c){var hp;if(c){var gp="oninput"in document;if(!gp){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),gp=typeof cg.oninput=="function"}hp=gp}else hp=!1;dg=hp&&(!document.documentMode||9<document.documentMode)}function pg(){ia&&(ia.detachEvent("onpropertychange",fg),aa=ia=null)}function fg(t){if(t.propertyName==="value"&&Cu(aa)){var n=[];ug(n,aa,t,Vi(t)),du(ZS,n)}}function eE(t,n,o){t==="focusin"?(pg(),ia=n,aa=o,ia.attachEvent("onpropertychange",fg)):t==="focusout"&&pg()}function tE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cu(aa)}function rE(t,n){if(t==="click")return Cu(n)}function nE(t,n){if(t==="input"||t==="change")return Cu(n)}function iE(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var rr=typeof Object.is=="function"?Object.is:iE;function oa(t,n){if(rr(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var o=Object.keys(t),d=Object.keys(n);if(o.length!==d.length)return!1;for(d=0;d<o.length;d++){var f=o[d];if(!p.call(n,f)||!rr(t[f],n[f]))return!1}return!0}function mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hg(t,n){var o=mg(t);t=0;for(var d;o;){if(o.nodeType===3){if(d=t+o.textContent.length,t<=n&&d>=n)return{node:o,offset:n-t};t=d}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=mg(o)}}function gg(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?gg(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function xg(){for(var t=window,n=ve();n instanceof t.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)t=n.contentWindow;else break;n=ve(t.document)}return n}function xp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function aE(t){var n=xg(),o=t.focusedElem,d=t.selectionRange;if(n!==o&&o&&o.ownerDocument&&gg(o.ownerDocument.documentElement,o)){if(d!==null&&xp(o)){if(n=d.start,t=d.end,t===void 0&&(t=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(t,o.value.length);else if(t=(n=o.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,v=Math.min(d.start,f);d=d.end===void 0?v:Math.min(d.end,f),!t.extend&&v>d&&(f=d,d=v,v=f),f=hg(o,v);var T=hg(o,d);f&&T&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(n=n.createRange(),n.setStart(f.node,f.offset),t.removeAllRanges(),v>d?(t.addRange(n),t.extend(T.node,T.offset)):(n.setEnd(T.node,T.offset),t.addRange(n)))}}for(n=[],t=o;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)t=n[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oE=c&&"documentMode"in document&&11>=document.documentMode,ri=null,vp=null,la=null,bp=!1;function vg(t,n,o){var d=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;bp||ri==null||ri!==ve(d)||(d=ri,"selectionStart"in d&&xp(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),la&&oa(la,d)||(la=d,d=ju(vp,"onSelect"),0<d.length&&(n=new up("onSelect","select",null,n,o),t.push({event:n,listeners:d}),n.target=ri)))}function Pu(t,n){var o={};return o[t.toLowerCase()]=n.toLowerCase(),o["Webkit"+t]="webkit"+n,o["Moz"+t]="moz"+n,o}var ni={animationend:Pu("Animation","AnimationEnd"),animationiteration:Pu("Animation","AnimationIteration"),animationstart:Pu("Animation","AnimationStart"),transitionend:Pu("Transition","TransitionEnd")},yp={},bg={};c&&(bg=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function Ou(t){if(yp[t])return yp[t];if(!ni[t])return t;var n=ni[t],o;for(o in n)if(n.hasOwnProperty(o)&&o in bg)return yp[t]=n[o];return t}var yg=Ou("animationend"),wg=Ou("animationiteration"),kg=Ou("animationstart"),Sg=Ou("transitionend"),Eg=new Map,Rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(t,n){Eg.set(t,n),s(n,[t])}for(var wp=0;wp<Rg.length;wp++){var kp=Rg[wp],lE=kp.toLowerCase(),sE=kp[0].toUpperCase()+kp.slice(1);Jr(lE,"on"+sE)}Jr(yg,"onAnimationEnd"),Jr(wg,"onAnimationIteration"),Jr(kg,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(Sg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uE=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Cg(t,n,o){var d=t.type||"unknown-event";t.currentTarget=o,lS(d,n,void 0,t),t.currentTarget=null}function Pg(t,n){n=(n&4)!==0;for(var o=0;o<t.length;o++){var d=t[o],f=d.event;d=d.listeners;e:{var v=void 0;if(n)for(var T=d.length-1;0<=T;T--){var $=d[T],H=$.instance,J=$.currentTarget;if($=$.listener,H!==v&&f.isPropagationStopped())break e;Cg(f,$,J),v=H}else for(T=0;T<d.length;T++){if($=d[T],H=$.instance,J=$.currentTarget,$=$.listener,H!==v&&f.isPropagationStopped())break e;Cg(f,$,J),v=H}}}if(pu)throw t=Jc,pu=!1,Jc=null,t}function Ve(t,n){var o=n[jp];o===void 0&&(o=n[jp]=new Set);var d=t+"__bubble";o.has(d)||(Og(n,t,2,!1),o.add(d))}function Sp(t,n,o){var d=0;n&&(d|=4),Og(o,t,d,n)}var _u="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[_u]){t[_u]=!0,a.forEach(function(o){o!=="selectionchange"&&(uE.has(o)||Sp(o,!1,t),Sp(o,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[_u]||(n[_u]=!0,Sp("selectionchange",!1,n))}}function Og(t,n,o,d){switch(Qh(n)){case 1:var f=SS;break;case 4:f=ES;break;default:f=op}o=f.bind(null,n,o,t),f=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),d?f!==void 0?t.addEventListener(n,o,{capture:!0,passive:f}):t.addEventListener(n,o,!0):f!==void 0?t.addEventListener(n,o,{passive:f}):t.addEventListener(n,o,!1)}function Ep(t,n,o,d,f){var v=d;if((n&1)===0&&(n&2)===0&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var $=d.stateNode.containerInfo;if($===f||$.nodeType===8&&$.parentNode===f)break;if(T===4)for(T=d.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;T=T.return}for(;$!==null;){if(T=Pn($),T===null)return;if(H=T.tag,H===5||H===6){d=v=T;continue e}$=$.parentNode}}d=d.return}du(function(){var J=v,se=Vi(o),ue=[];e:{var le=Eg.get(t);if(le!==void 0){var xe=up,ye=t;switch(t){case"keypress":if(Su(o)===0)break e;case"keydown":case"keyup":xe=DS;break;case"focusin":ye="focus",xe=pp;break;case"focusout":ye="blur",xe=pp;break;case"beforeblur":case"afterblur":xe=pp;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xe=eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xe=PS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xe=FS;break;case yg:case wg:case kg:xe=jS;break;case Sg:xe=HS;break;case"scroll":xe=RS;break;case"wheel":xe=US;break;case"copy":case"cut":case"paste":xe=MS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xe=rg}var we=(n&4)!==0,tt=!we&&t==="scroll",X=we?le!==null?le+"Capture":null:le;we=[];for(var K=J,Q;K!==null;){Q=K;var ce=Q.stateNode;if(Q.tag===5&&ce!==null&&(Q=ce,X!==null&&(ce=fr(K,X),ce!=null&&we.push(da(K,ce,Q)))),tt)break;K=K.return}0<we.length&&(le=new xe(le,ye,null,o,se),ue.push({event:le,listeners:we}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",xe=t==="mouseout"||t==="pointerout",le&&o!==Fi&&(ye=o.relatedTarget||o.fromElement)&&(Pn(ye)||ye[Er]))break e;if((xe||le)&&(le=se.window===se?se:(le=se.ownerDocument)?le.defaultView||le.parentWindow:window,xe?(ye=o.relatedTarget||o.toElement,xe=J,ye=ye?Pn(ye):null,ye!==null&&(tt=Cn(ye),ye!==tt||ye.tag!==5&&ye.tag!==6)&&(ye=null)):(xe=null,ye=J),xe!==ye)){if(we=eg,ce="onMouseLeave",X="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(we=rg,ce="onPointerLeave",X="onPointerEnter",K="pointer"),tt=xe==null?le:oi(xe),Q=ye==null?le:oi(ye),le=new we(ce,K+"leave",xe,o,se),le.target=tt,le.relatedTarget=Q,ce=null,Pn(se)===J&&(we=new we(X,K+"enter",ye,o,se),we.target=Q,we.relatedTarget=tt,ce=we),tt=ce,xe&&ye)t:{for(we=xe,X=ye,K=0,Q=we;Q;Q=ii(Q))K++;for(Q=0,ce=X;ce;ce=ii(ce))Q++;for(;0<K-Q;)we=ii(we),K--;for(;0<Q-K;)X=ii(X),Q--;for(;K--;){if(we===X||X!==null&&we===X.alternate)break t;we=ii(we),X=ii(X)}we=null}else we=null;xe!==null&&_g(ue,le,xe,we,!1),ye!==null&&tt!==null&&_g(ue,tt,ye,we,!0)}}e:{if(le=J?oi(J):window,xe=le.nodeName&&le.nodeName.toLowerCase(),xe==="select"||xe==="input"&&le.type==="file")var ke=JS;else if(sg(le))if(dg)ke=nE;else{ke=tE;var Ee=eE}else(xe=le.nodeName)&&xe.toLowerCase()==="input"&&(le.type==="checkbox"||le.type==="radio")&&(ke=rE);if(ke&&(ke=ke(t,J))){ug(ue,ke,o,se);break e}Ee&&Ee(t,le,J),t==="focusout"&&(Ee=le._wrapperState)&&Ee.controlled&&le.type==="number"&&Ue(le,"number",le.value)}switch(Ee=J?oi(J):window,t){case"focusin":(sg(Ee)||Ee.contentEditable==="true")&&(ri=Ee,vp=J,la=null);break;case"focusout":la=vp=ri=null;break;case"mousedown":bp=!0;break;case"contextmenu":case"mouseup":case"dragend":bp=!1,vg(ue,o,se);break;case"selectionchange":if(oE)break;case"keydown":case"keyup":vg(ue,o,se)}var Re;if(mp)e:{switch(t){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else ti?og(t,o)&&(Oe="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Oe="onCompositionStart");Oe&&(ng&&o.locale!=="ko"&&(ti||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&ti&&(Re=Zh()):(Zr=se,sp="value"in Zr?Zr.value:Zr.textContent,ti=!0)),Ee=ju(J,Oe),0<Ee.length&&(Oe=new tg(Oe,t,null,o,se),ue.push({event:Oe,listeners:Ee}),Re?Oe.data=Re:(Re=lg(o),Re!==null&&(Oe.data=Re)))),(Re=YS?GS(t,o):XS(t,o))&&(J=ju(J,"onBeforeInput"),0<J.length&&(se=new tg("onBeforeInput","beforeinput",null,o,se),ue.push({event:se,listeners:J}),se.data=Re))}Pg(ue,n)})}function da(t,n,o){return{instance:t,listener:n,currentTarget:o}}function ju(t,n){for(var o=n+"Capture",d=[];t!==null;){var f=t,v=f.stateNode;f.tag===5&&v!==null&&(f=v,v=fr(t,o),v!=null&&d.unshift(da(t,v,f)),v=fr(t,n),v!=null&&d.push(da(t,v,f))),t=t.return}return d}function ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _g(t,n,o,d,f){for(var v=n._reactName,T=[];o!==null&&o!==d;){var $=o,H=$.alternate,J=$.stateNode;if(H!==null&&H===d)break;$.tag===5&&J!==null&&($=J,f?(H=fr(o,v),H!=null&&T.unshift(da(o,H,$))):f||(H=fr(o,v),H!=null&&T.push(da(o,H,$)))),o=o.return}T.length!==0&&t.push({event:n,listeners:T})}var dE=/\r\n?/g,cE=/\u0000|\uFFFD/g;function jg(t){return(typeof t=="string"?t:""+t).replace(dE,`
`).replace(cE,"")}function Tu(t,n,o){if(n=jg(n),jg(t)!==n&&o)throw Error(i(425))}function Mu(){}var Rp=null,Cp=null;function Pp(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Op=typeof setTimeout=="function"?setTimeout:void 0,pE=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,fE=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(t){return Tg.resolve(null).then(t).catch(mE)}:Op;function mE(t){setTimeout(function(){throw t})}function _p(t,n){var o=n,d=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(d===0){t.removeChild(f),ea(n);return}d--}else o!=="$"&&o!=="$?"&&o!=="$!"||d++;o=f}while(o);ea(n)}function en(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Mg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return t;n--}else o==="/$"&&n++}t=t.previousSibling}return null}var ai=Math.random().toString(36).slice(2),hr="__reactFiber$"+ai,ca="__reactProps$"+ai,Er="__reactContainer$"+ai,jp="__reactEvents$"+ai,hE="__reactListeners$"+ai,gE="__reactHandles$"+ai;function Pn(t){var n=t[hr];if(n)return n;for(var o=t.parentNode;o;){if(n=o[Er]||o[hr]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(t=Mg(t);t!==null;){if(o=t[hr])return o;t=Mg(t)}return n}t=o,o=t.parentNode}return null}function pa(t){return t=t[hr]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function qu(t){return t[ca]||null}var Tp=[],li=-1;function tn(t){return{current:t}}function He(t){0>li||(t.current=Tp[li],Tp[li]=null,li--)}function De(t,n){li++,Tp[li]=t.current,t.current=n}var rn={},gt=tn(rn),Pt=tn(!1),On=rn;function si(t,n){var o=t.type.contextTypes;if(!o)return rn;var d=t.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===n)return d.__reactInternalMemoizedMaskedChildContext;var f={},v;for(v in o)f[v]=n[v];return d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=f),f}function Ot(t){return t=t.childContextTypes,t!=null}function Au(){He(Pt),He(gt)}function qg(t,n,o){if(gt.current!==rn)throw Error(i(168));De(gt,n),De(Pt,o)}function Ag(t,n,o){var d=t.stateNode;if(n=n.childContextTypes,typeof d.getChildContext!="function")return o;d=d.getChildContext();for(var f in d)if(!(f in n))throw Error(i(108,ae(t)||"Unknown",f));return E({},o,d)}function Lu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rn,On=gt.current,De(gt,t),De(Pt,Pt.current),!0}function Lg(t,n,o){var d=t.stateNode;if(!d)throw Error(i(169));o?(t=Ag(t,n,On),d.__reactInternalMemoizedMergedChildContext=t,He(Pt),He(gt),De(gt,t)):He(Pt),De(Pt,o)}var Rr=null,Nu=!1,Mp=!1;function Ng(t){Rr===null?Rr=[t]:Rr.push(t)}function xE(t){Nu=!0,Ng(t)}function nn(){if(!Mp&&Rr!==null){Mp=!0;var t=0,n=Ne;try{var o=Rr;for(Ne=1;t<o.length;t++){var d=o[t];do d=d(!0);while(d!==null)}Rr=null,Nu=!1}catch(f){throw Rr!==null&&(Rr=Rr.slice(t+1)),Ih(ep,nn),f}finally{Ne=n,Mp=!1}}return null}var ui=[],di=0,zu=null,Iu=0,Wt=[],Ut=0,_n=null,Cr=1,Pr="";function jn(t,n){ui[di++]=Iu,ui[di++]=zu,zu=t,Iu=n}function zg(t,n,o){Wt[Ut++]=Cr,Wt[Ut++]=Pr,Wt[Ut++]=_n,_n=t;var d=Cr;t=Pr;var f=32-tr(d)-1;d&=~(1<<f),o+=1;var v=32-tr(n)+f;if(30<v){var T=f-f%5;v=(d&(1<<T)-1).toString(32),d>>=T,f-=T,Cr=1<<32-tr(n)+f|o<<f|d,Pr=v+t}else Cr=1<<v|o<<f|d,Pr=t}function qp(t){t.return!==null&&(jn(t,1),zg(t,1,0))}function Ap(t){for(;t===zu;)zu=ui[--di],ui[di]=null,Iu=ui[--di],ui[di]=null;for(;t===_n;)_n=Wt[--Ut],Wt[Ut]=null,Pr=Wt[--Ut],Wt[Ut]=null,Cr=Wt[--Ut],Wt[Ut]=null}var Dt=null,Bt=null,Ke=!1,nr=null;function Ig(t,n){var o=Xt(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=t,n=t.deletions,n===null?(t.deletions=[o],t.flags|=16):n.push(o)}function Dg(t,n){switch(t.tag){case 5:var o=t.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Dt=t,Bt=en(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Dt=t,Bt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=_n!==null?{id:Cr,overflow:Pr}:null,t.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=Xt(18,null,null,0),o.stateNode=n,o.return=t,t.child=o,Dt=t,Bt=null,!0):!1;default:return!1}}function Lp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Np(t){if(Ke){var n=Bt;if(n){var o=n;if(!Dg(t,n)){if(Lp(t))throw Error(i(418));n=en(o.nextSibling);var d=Dt;n&&Dg(t,n)?Ig(d,o):(t.flags=t.flags&-4097|2,Ke=!1,Dt=t)}}else{if(Lp(t))throw Error(i(418));t.flags=t.flags&-4097|2,Ke=!1,Dt=t}}}function Bg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function Du(t){if(t!==Dt)return!1;if(!Ke)return Bg(t),Ke=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Pp(t.type,t.memoizedProps)),n&&(n=Bt)){if(Lp(t))throw $g(),Error(i(418));for(;n;)Ig(t,n),n=en(n.nextSibling)}if(Bg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(n===0){Bt=en(t.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}t=t.nextSibling}Bt=null}}else Bt=Dt?en(t.stateNode.nextSibling):null;return!0}function $g(){for(var t=Bt;t;)t=en(t.nextSibling)}function ci(){Bt=Dt=null,Ke=!1}function zp(t){nr===null?nr=[t]:nr.push(t)}var vE=B.ReactCurrentBatchConfig;function fa(t,n,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var d=o.stateNode}if(!d)throw Error(i(147,t));var f=d,v=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===v?n.ref:(n=function(T){var $=f.refs;T===null?delete $[v]:$[v]=T},n._stringRef=v,n)}if(typeof t!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,t))}return t}function Bu(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Fg(t){var n=t._init;return n(t._payload)}function Vg(t){function n(X,K){if(t){var Q=X.deletions;Q===null?(X.deletions=[K],X.flags|=16):Q.push(K)}}function o(X,K){if(!t)return null;for(;K!==null;)n(X,K),K=K.sibling;return null}function d(X,K){for(X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function f(X,K){return X=pn(X,K),X.index=0,X.sibling=null,X}function v(X,K,Q){return X.index=Q,t?(Q=X.alternate,Q!==null?(Q=Q.index,Q<K?(X.flags|=2,K):Q):(X.flags|=2,K)):(X.flags|=1048576,K)}function T(X){return t&&X.alternate===null&&(X.flags|=2),X}function $(X,K,Q,ce){return K===null||K.tag!==6?(K=_f(Q,X.mode,ce),K.return=X,K):(K=f(K,Q),K.return=X,K)}function H(X,K,Q,ce){var ke=Q.type;return ke===P?se(X,K,Q.props.children,ce,Q.key):K!==null&&(K.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===ee&&Fg(ke)===K.type)?(ce=f(K,Q.props),ce.ref=fa(X,K,Q),ce.return=X,ce):(ce=dd(Q.type,Q.key,Q.props,null,X.mode,ce),ce.ref=fa(X,K,Q),ce.return=X,ce)}function J(X,K,Q,ce){return K===null||K.tag!==4||K.stateNode.containerInfo!==Q.containerInfo||K.stateNode.implementation!==Q.implementation?(K=jf(Q,X.mode,ce),K.return=X,K):(K=f(K,Q.children||[]),K.return=X,K)}function se(X,K,Q,ce,ke){return K===null||K.tag!==7?(K=In(Q,X.mode,ce,ke),K.return=X,K):(K=f(K,Q),K.return=X,K)}function ue(X,K,Q){if(typeof K=="string"&&K!==""||typeof K=="number")return K=_f(""+K,X.mode,Q),K.return=X,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case j:return Q=dd(K.type,K.key,K.props,null,X.mode,Q),Q.ref=fa(X,null,K),Q.return=X,Q;case C:return K=jf(K,X.mode,Q),K.return=X,K;case ee:var ce=K._init;return ue(X,ce(K._payload),Q)}if(Fe(K)||D(K))return K=In(K,X.mode,Q,null),K.return=X,K;Bu(X,K)}return null}function le(X,K,Q,ce){var ke=K!==null?K.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return ke!==null?null:$(X,K,""+Q,ce);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case j:return Q.key===ke?H(X,K,Q,ce):null;case C:return Q.key===ke?J(X,K,Q,ce):null;case ee:return ke=Q._init,le(X,K,ke(Q._payload),ce)}if(Fe(Q)||D(Q))return ke!==null?null:se(X,K,Q,ce,null);Bu(X,Q)}return null}function xe(X,K,Q,ce,ke){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return X=X.get(Q)||null,$(K,X,""+ce,ke);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case j:return X=X.get(ce.key===null?Q:ce.key)||null,H(K,X,ce,ke);case C:return X=X.get(ce.key===null?Q:ce.key)||null,J(K,X,ce,ke);case ee:var Ee=ce._init;return xe(X,K,Q,Ee(ce._payload),ke)}if(Fe(ce)||D(ce))return X=X.get(Q)||null,se(K,X,ce,ke,null);Bu(K,ce)}return null}function ye(X,K,Q,ce){for(var ke=null,Ee=null,Re=K,Oe=K=0,dt=null;Re!==null&&Oe<Q.length;Oe++){Re.index>Oe?(dt=Re,Re=null):dt=Re.sibling;var Ae=le(X,Re,Q[Oe],ce);if(Ae===null){Re===null&&(Re=dt);break}t&&Re&&Ae.alternate===null&&n(X,Re),K=v(Ae,K,Oe),Ee===null?ke=Ae:Ee.sibling=Ae,Ee=Ae,Re=dt}if(Oe===Q.length)return o(X,Re),Ke&&jn(X,Oe),ke;if(Re===null){for(;Oe<Q.length;Oe++)Re=ue(X,Q[Oe],ce),Re!==null&&(K=v(Re,K,Oe),Ee===null?ke=Re:Ee.sibling=Re,Ee=Re);return Ke&&jn(X,Oe),ke}for(Re=d(X,Re);Oe<Q.length;Oe++)dt=xe(Re,X,Oe,Q[Oe],ce),dt!==null&&(t&&dt.alternate!==null&&Re.delete(dt.key===null?Oe:dt.key),K=v(dt,K,Oe),Ee===null?ke=dt:Ee.sibling=dt,Ee=dt);return t&&Re.forEach(function(fn){return n(X,fn)}),Ke&&jn(X,Oe),ke}function we(X,K,Q,ce){var ke=D(Q);if(typeof ke!="function")throw Error(i(150));if(Q=ke.call(Q),Q==null)throw Error(i(151));for(var Ee=ke=null,Re=K,Oe=K=0,dt=null,Ae=Q.next();Re!==null&&!Ae.done;Oe++,Ae=Q.next()){Re.index>Oe?(dt=Re,Re=null):dt=Re.sibling;var fn=le(X,Re,Ae.value,ce);if(fn===null){Re===null&&(Re=dt);break}t&&Re&&fn.alternate===null&&n(X,Re),K=v(fn,K,Oe),Ee===null?ke=fn:Ee.sibling=fn,Ee=fn,Re=dt}if(Ae.done)return o(X,Re),Ke&&jn(X,Oe),ke;if(Re===null){for(;!Ae.done;Oe++,Ae=Q.next())Ae=ue(X,Ae.value,ce),Ae!==null&&(K=v(Ae,K,Oe),Ee===null?ke=Ae:Ee.sibling=Ae,Ee=Ae);return Ke&&jn(X,Oe),ke}for(Re=d(X,Re);!Ae.done;Oe++,Ae=Q.next())Ae=xe(Re,X,Oe,Ae.value,ce),Ae!==null&&(t&&Ae.alternate!==null&&Re.delete(Ae.key===null?Oe:Ae.key),K=v(Ae,K,Oe),Ee===null?ke=Ae:Ee.sibling=Ae,Ee=Ae);return t&&Re.forEach(function(QE){return n(X,QE)}),Ke&&jn(X,Oe),ke}function tt(X,K,Q,ce){if(typeof Q=="object"&&Q!==null&&Q.type===P&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case j:e:{for(var ke=Q.key,Ee=K;Ee!==null;){if(Ee.key===ke){if(ke=Q.type,ke===P){if(Ee.tag===7){o(X,Ee.sibling),K=f(Ee,Q.props.children),K.return=X,X=K;break e}}else if(Ee.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===ee&&Fg(ke)===Ee.type){o(X,Ee.sibling),K=f(Ee,Q.props),K.ref=fa(X,Ee,Q),K.return=X,X=K;break e}o(X,Ee);break}else n(X,Ee);Ee=Ee.sibling}Q.type===P?(K=In(Q.props.children,X.mode,ce,Q.key),K.return=X,X=K):(ce=dd(Q.type,Q.key,Q.props,null,X.mode,ce),ce.ref=fa(X,K,Q),ce.return=X,X=ce)}return T(X);case C:e:{for(Ee=Q.key;K!==null;){if(K.key===Ee)if(K.tag===4&&K.stateNode.containerInfo===Q.containerInfo&&K.stateNode.implementation===Q.implementation){o(X,K.sibling),K=f(K,Q.children||[]),K.return=X,X=K;break e}else{o(X,K);break}else n(X,K);K=K.sibling}K=jf(Q,X.mode,ce),K.return=X,X=K}return T(X);case ee:return Ee=Q._init,tt(X,K,Ee(Q._payload),ce)}if(Fe(Q))return ye(X,K,Q,ce);if(D(Q))return we(X,K,Q,ce);Bu(X,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,K!==null&&K.tag===6?(o(X,K.sibling),K=f(K,Q),K.return=X,X=K):(o(X,K),K=_f(Q,X.mode,ce),K.return=X,X=K),T(X)):o(X,K)}return tt}var pi=Vg(!0),Hg=Vg(!1),$u=tn(null),Fu=null,fi=null,Ip=null;function Dp(){Ip=fi=Fu=null}function Bp(t){var n=$u.current;He($u),t._currentValue=n}function $p(t,n,o){for(;t!==null;){var d=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,d!==null&&(d.childLanes|=n)):d!==null&&(d.childLanes&n)!==n&&(d.childLanes|=n),t===o)break;t=t.return}}function mi(t,n){Fu=t,Ip=fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(_t=!0),t.firstContext=null)}function Kt(t){var n=t._currentValue;if(Ip!==t)if(t={context:t,memoizedValue:n,next:null},fi===null){if(Fu===null)throw Error(i(308));fi=t,Fu.dependencies={lanes:0,firstContext:t}}else fi=fi.next=t;return n}var Tn=null;function Fp(t){Tn===null?Tn=[t]:Tn.push(t)}function Wg(t,n,o,d){var f=n.interleaved;return f===null?(o.next=o,Fp(n)):(o.next=f.next,f.next=o),n.interleaved=o,Or(t,d)}function Or(t,n){t.lanes|=n;var o=t.alternate;for(o!==null&&(o.lanes|=n),o=t,t=t.return;t!==null;)t.childLanes|=n,o=t.alternate,o!==null&&(o.childLanes|=n),o=t,t=t.return;return o.tag===3?o.stateNode:null}var an=!1;function Vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _r(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function on(t,n,o){var d=t.updateQueue;if(d===null)return null;if(d=d.shared,(qe&2)!==0){var f=d.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),d.pending=n,Or(t,o)}return f=d.interleaved,f===null?(n.next=n,Fp(d)):(n.next=f.next,f.next=n),d.interleaved=n,Or(t,o)}function Vu(t,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var d=n.lanes;d&=t.pendingLanes,o|=d,n.lanes=o,np(t,o)}}function Kg(t,n){var o=t.updateQueue,d=t.alternate;if(d!==null&&(d=d.updateQueue,o===d)){var f=null,v=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};v===null?f=v=T:v=v.next=T,o=o.next}while(o!==null);v===null?f=v=n:v=v.next=n}else f=v=n;o={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:d.shared,effects:d.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=n:t.next=n,o.lastBaseUpdate=n}function Hu(t,n,o,d){var f=t.updateQueue;an=!1;var v=f.firstBaseUpdate,T=f.lastBaseUpdate,$=f.shared.pending;if($!==null){f.shared.pending=null;var H=$,J=H.next;H.next=null,T===null?v=J:T.next=J,T=H;var se=t.alternate;se!==null&&(se=se.updateQueue,$=se.lastBaseUpdate,$!==T&&($===null?se.firstBaseUpdate=J:$.next=J,se.lastBaseUpdate=H))}if(v!==null){var ue=f.baseState;T=0,se=J=H=null,$=v;do{var le=$.lane,xe=$.eventTime;if((d&le)===le){se!==null&&(se=se.next={eventTime:xe,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var ye=t,we=$;switch(le=n,xe=o,we.tag){case 1:if(ye=we.payload,typeof ye=="function"){ue=ye.call(xe,ue,le);break e}ue=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=we.payload,le=typeof ye=="function"?ye.call(xe,ue,le):ye,le==null)break e;ue=E({},ue,le);break e;case 2:an=!0}}$.callback!==null&&$.lane!==0&&(t.flags|=64,le=f.effects,le===null?f.effects=[$]:le.push($))}else xe={eventTime:xe,lane:le,tag:$.tag,payload:$.payload,callback:$.callback,next:null},se===null?(J=se=xe,H=ue):se=se.next=xe,T|=le;if($=$.next,$===null){if($=f.shared.pending,$===null)break;le=$,$=le.next,le.next=null,f.lastBaseUpdate=le,f.shared.pending=null}}while(!0);if(se===null&&(H=ue),f.baseState=H,f.firstBaseUpdate=J,f.lastBaseUpdate=se,n=f.shared.interleaved,n!==null){f=n;do T|=f.lane,f=f.next;while(f!==n)}else v===null&&(f.shared.lanes=0);An|=T,t.lanes=T,t.memoizedState=ue}}function Yg(t,n,o){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var d=t[n],f=d.callback;if(f!==null){if(d.callback=null,d=o,typeof f!="function")throw Error(i(191,f));f.call(d)}}}var ma={},gr=tn(ma),ha=tn(ma),ga=tn(ma);function Mn(t){if(t===ma)throw Error(i(174));return t}function Hp(t,n){switch(De(ga,n),De(ha,t),De(gr,ma),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ct(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=Ct(n,t)}He(gr),De(gr,n)}function hi(){He(gr),He(ha),He(ga)}function Gg(t){Mn(ga.current);var n=Mn(gr.current),o=Ct(n,t.type);n!==o&&(De(ha,t),De(gr,o))}function Wp(t){ha.current===t&&(He(gr),He(ha))}var Xe=tn(0);function Wu(t){for(var n=t;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Up=[];function Kp(){for(var t=0;t<Up.length;t++)Up[t]._workInProgressVersionPrimary=null;Up.length=0}var Uu=B.ReactCurrentDispatcher,Yp=B.ReactCurrentBatchConfig,qn=0,Qe=null,at=null,st=null,Ku=!1,xa=!1,va=0,bE=0;function xt(){throw Error(i(321))}function Gp(t,n){if(n===null)return!1;for(var o=0;o<n.length&&o<t.length;o++)if(!rr(t[o],n[o]))return!1;return!0}function Xp(t,n,o,d,f,v){if(qn=v,Qe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Uu.current=t===null||t.memoizedState===null?SE:EE,t=o(d,f),xa){v=0;do{if(xa=!1,va=0,25<=v)throw Error(i(301));v+=1,st=at=null,n.updateQueue=null,Uu.current=RE,t=o(d,f)}while(xa)}if(Uu.current=Xu,n=at!==null&&at.next!==null,qn=0,st=at=Qe=null,Ku=!1,n)throw Error(i(300));return t}function Qp(){var t=va!==0;return va=0,t}function xr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Qe.memoizedState=st=t:st=st.next=t,st}function Yt(){if(at===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var n=st===null?Qe.memoizedState:st.next;if(n!==null)st=n,at=t;else{if(t===null)throw Error(i(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},st===null?Qe.memoizedState=st=t:st=st.next=t}return st}function ba(t,n){return typeof n=="function"?n(t):n}function Zp(t){var n=Yt(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var d=at,f=d.baseQueue,v=o.pending;if(v!==null){if(f!==null){var T=f.next;f.next=v.next,v.next=T}d.baseQueue=f=v,o.pending=null}if(f!==null){v=f.next,d=d.baseState;var $=T=null,H=null,J=v;do{var se=J.lane;if((qn&se)===se)H!==null&&(H=H.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),d=J.hasEagerState?J.eagerState:t(d,J.action);else{var ue={lane:se,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};H===null?($=H=ue,T=d):H=H.next=ue,Qe.lanes|=se,An|=se}J=J.next}while(J!==null&&J!==v);H===null?T=d:H.next=$,rr(d,n.memoizedState)||(_t=!0),n.memoizedState=d,n.baseState=T,n.baseQueue=H,o.lastRenderedState=d}if(t=o.interleaved,t!==null){f=t;do v=f.lane,Qe.lanes|=v,An|=v,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Jp(t){var n=Yt(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var d=o.dispatch,f=o.pending,v=n.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do v=t(v,T.action),T=T.next;while(T!==f);rr(v,n.memoizedState)||(_t=!0),n.memoizedState=v,n.baseQueue===null&&(n.baseState=v),o.lastRenderedState=v}return[v,d]}function Xg(){}function Qg(t,n){var o=Qe,d=Yt(),f=n(),v=!rr(d.memoizedState,f);if(v&&(d.memoizedState=f,_t=!0),d=d.queue,ef(ex.bind(null,o,d,t),[t]),d.getSnapshot!==n||v||st!==null&&st.memoizedState.tag&1){if(o.flags|=2048,ya(9,Jg.bind(null,o,d,f,n),void 0,null),ut===null)throw Error(i(349));(qn&30)!==0||Zg(o,n,f)}return f}function Zg(t,n,o){t.flags|=16384,t={getSnapshot:n,value:o},n=Qe.updateQueue,n===null?(n={lastEffect:null,stores:null},Qe.updateQueue=n,n.stores=[t]):(o=n.stores,o===null?n.stores=[t]:o.push(t))}function Jg(t,n,o,d){n.value=o,n.getSnapshot=d,tx(n)&&rx(t)}function ex(t,n,o){return o(function(){tx(n)&&rx(t)})}function tx(t){var n=t.getSnapshot;t=t.value;try{var o=n();return!rr(t,o)}catch{return!0}}function rx(t){var n=Or(t,1);n!==null&&lr(n,t,1,-1)}function nx(t){var n=xr();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},n.queue=t,t=t.dispatch=kE.bind(null,Qe,t),[n.memoizedState,t]}function ya(t,n,o,d){return t={tag:t,create:n,destroy:o,deps:d,next:null},n=Qe.updateQueue,n===null?(n={lastEffect:null,stores:null},Qe.updateQueue=n,n.lastEffect=t.next=t):(o=n.lastEffect,o===null?n.lastEffect=t.next=t:(d=o.next,o.next=t,t.next=d,n.lastEffect=t)),t}function ix(){return Yt().memoizedState}function Yu(t,n,o,d){var f=xr();Qe.flags|=t,f.memoizedState=ya(1|n,o,void 0,d===void 0?null:d)}function Gu(t,n,o,d){var f=Yt();d=d===void 0?null:d;var v=void 0;if(at!==null){var T=at.memoizedState;if(v=T.destroy,d!==null&&Gp(d,T.deps)){f.memoizedState=ya(n,o,v,d);return}}Qe.flags|=t,f.memoizedState=ya(1|n,o,v,d)}function ax(t,n){return Yu(8390656,8,t,n)}function ef(t,n){return Gu(2048,8,t,n)}function ox(t,n){return Gu(4,2,t,n)}function lx(t,n){return Gu(4,4,t,n)}function sx(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ux(t,n,o){return o=o!=null?o.concat([t]):null,Gu(4,4,sx.bind(null,n,t),o)}function tf(){}function dx(t,n){var o=Yt();n=n===void 0?null:n;var d=o.memoizedState;return d!==null&&n!==null&&Gp(n,d[1])?d[0]:(o.memoizedState=[t,n],t)}function cx(t,n){var o=Yt();n=n===void 0?null:n;var d=o.memoizedState;return d!==null&&n!==null&&Gp(n,d[1])?d[0]:(t=t(),o.memoizedState=[t,n],t)}function px(t,n,o){return(qn&21)===0?(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=o):(rr(o,n)||(o=Fh(),Qe.lanes|=o,An|=o,t.baseState=!0),n)}function yE(t,n){var o=Ne;Ne=o!==0&&4>o?o:4,t(!0);var d=Yp.transition;Yp.transition={};try{t(!1),n()}finally{Ne=o,Yp.transition=d}}function fx(){return Yt().memoizedState}function wE(t,n,o){var d=dn(t);if(o={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null},mx(t))hx(n,o);else if(o=Wg(t,n,o,d),o!==null){var f=kt();lr(o,t,d,f),gx(o,n,d)}}function kE(t,n,o){var d=dn(t),f={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null};if(mx(t))hx(n,f);else{var v=t.alternate;if(t.lanes===0&&(v===null||v.lanes===0)&&(v=n.lastRenderedReducer,v!==null))try{var T=n.lastRenderedState,$=v(T,o);if(f.hasEagerState=!0,f.eagerState=$,rr($,T)){var H=n.interleaved;H===null?(f.next=f,Fp(n)):(f.next=H.next,H.next=f),n.interleaved=f;return}}catch{}finally{}o=Wg(t,n,f,d),o!==null&&(f=kt(),lr(o,t,d,f),gx(o,n,d))}}function mx(t){var n=t.alternate;return t===Qe||n!==null&&n===Qe}function hx(t,n){xa=Ku=!0;var o=t.pending;o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n}function gx(t,n,o){if((o&4194240)!==0){var d=n.lanes;d&=t.pendingLanes,o|=d,n.lanes=o,np(t,o)}}var Xu={readContext:Kt,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},SE={readContext:Kt,useCallback:function(t,n){return xr().memoizedState=[t,n===void 0?null:n],t},useContext:Kt,useEffect:ax,useImperativeHandle:function(t,n,o){return o=o!=null?o.concat([t]):null,Yu(4194308,4,sx.bind(null,n,t),o)},useLayoutEffect:function(t,n){return Yu(4194308,4,t,n)},useInsertionEffect:function(t,n){return Yu(4,2,t,n)},useMemo:function(t,n){var o=xr();return n=n===void 0?null:n,t=t(),o.memoizedState=[t,n],t},useReducer:function(t,n,o){var d=xr();return n=o!==void 0?o(n):n,d.memoizedState=d.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},d.queue=t,t=t.dispatch=wE.bind(null,Qe,t),[d.memoizedState,t]},useRef:function(t){var n=xr();return t={current:t},n.memoizedState=t},useState:nx,useDebugValue:tf,useDeferredValue:function(t){return xr().memoizedState=t},useTransition:function(){var t=nx(!1),n=t[0];return t=yE.bind(null,t[1]),xr().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,o){var d=Qe,f=xr();if(Ke){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),ut===null)throw Error(i(349));(qn&30)!==0||Zg(d,n,o)}f.memoizedState=o;var v={value:o,getSnapshot:n};return f.queue=v,ax(ex.bind(null,d,v,t),[t]),d.flags|=2048,ya(9,Jg.bind(null,d,v,o,n),void 0,null),o},useId:function(){var t=xr(),n=ut.identifierPrefix;if(Ke){var o=Pr,d=Cr;o=(d&~(1<<32-tr(d)-1)).toString(32)+o,n=":"+n+"R"+o,o=va++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=bE++,n=":"+n+"r"+o.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},EE={readContext:Kt,useCallback:dx,useContext:Kt,useEffect:ef,useImperativeHandle:ux,useInsertionEffect:ox,useLayoutEffect:lx,useMemo:cx,useReducer:Zp,useRef:ix,useState:function(){return Zp(ba)},useDebugValue:tf,useDeferredValue:function(t){var n=Yt();return px(n,at.memoizedState,t)},useTransition:function(){var t=Zp(ba)[0],n=Yt().memoizedState;return[t,n]},useMutableSource:Xg,useSyncExternalStore:Qg,useId:fx,unstable_isNewReconciler:!1},RE={readContext:Kt,useCallback:dx,useContext:Kt,useEffect:ef,useImperativeHandle:ux,useInsertionEffect:ox,useLayoutEffect:lx,useMemo:cx,useReducer:Jp,useRef:ix,useState:function(){return Jp(ba)},useDebugValue:tf,useDeferredValue:function(t){var n=Yt();return at===null?n.memoizedState=t:px(n,at.memoizedState,t)},useTransition:function(){var t=Jp(ba)[0],n=Yt().memoizedState;return[t,n]},useMutableSource:Xg,useSyncExternalStore:Qg,useId:fx,unstable_isNewReconciler:!1};function ir(t,n){if(t&&t.defaultProps){n=E({},n),t=t.defaultProps;for(var o in t)n[o]===void 0&&(n[o]=t[o]);return n}return n}function rf(t,n,o,d){n=t.memoizedState,o=o(d,n),o=o==null?n:E({},n,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Qu={isMounted:function(t){return(t=t._reactInternals)?Cn(t)===t:!1},enqueueSetState:function(t,n,o){t=t._reactInternals;var d=kt(),f=dn(t),v=_r(d,f);v.payload=n,o!=null&&(v.callback=o),n=on(t,v,f),n!==null&&(lr(n,t,f,d),Vu(n,t,f))},enqueueReplaceState:function(t,n,o){t=t._reactInternals;var d=kt(),f=dn(t),v=_r(d,f);v.tag=1,v.payload=n,o!=null&&(v.callback=o),n=on(t,v,f),n!==null&&(lr(n,t,f,d),Vu(n,t,f))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var o=kt(),d=dn(t),f=_r(o,d);f.tag=2,n!=null&&(f.callback=n),n=on(t,f,d),n!==null&&(lr(n,t,d,o),Vu(n,t,d))}};function xx(t,n,o,d,f,v,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(d,v,T):n.prototype&&n.prototype.isPureReactComponent?!oa(o,d)||!oa(f,v):!0}function vx(t,n,o){var d=!1,f=rn,v=n.contextType;return typeof v=="object"&&v!==null?v=Kt(v):(f=Ot(n)?On:gt.current,d=n.contextTypes,v=(d=d!=null)?si(t,f):rn),n=new n(o,v),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Qu,t.stateNode=n,n._reactInternals=t,d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=v),n}function bx(t,n,o,d){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,d),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,d),n.state!==t&&Qu.enqueueReplaceState(n,n.state,null)}function nf(t,n,o,d){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Vp(t);var v=n.contextType;typeof v=="object"&&v!==null?f.context=Kt(v):(v=Ot(n)?On:gt.current,f.context=si(t,v)),f.state=t.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(rf(t,n,v,o),f.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(n=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),n!==f.state&&Qu.enqueueReplaceState(f,f.state,null),Hu(t,o,f,d),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function gi(t,n){try{var o="",d=n;do o+=ne(d),d=d.return;while(d);var f=o}catch(v){f=`
Error generating stack: `+v.message+`
`+v.stack}return{value:t,source:n,stack:f,digest:null}}function af(t,n,o){return{value:t,source:null,stack:o??null,digest:n??null}}function of(t,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var CE=typeof WeakMap=="function"?WeakMap:Map;function yx(t,n,o){o=_r(-1,o),o.tag=3,o.payload={element:null};var d=n.value;return o.callback=function(){id||(id=!0,wf=d),of(t,n)},o}function wx(t,n,o){o=_r(-1,o),o.tag=3;var d=t.type.getDerivedStateFromError;if(typeof d=="function"){var f=n.value;o.payload=function(){return d(f)},o.callback=function(){of(t,n)}}var v=t.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(o.callback=function(){of(t,n),typeof d!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var T=n.stack;this.componentDidCatch(n.value,{componentStack:T!==null?T:""})}),o}function kx(t,n,o){var d=t.pingCache;if(d===null){d=t.pingCache=new CE;var f=new Set;d.set(n,f)}else f=d.get(n),f===void 0&&(f=new Set,d.set(n,f));f.has(o)||(f.add(o),t=BE.bind(null,t,n,o),n.then(t,t))}function Sx(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function Ex(t,n,o,d,f){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=_r(-1,1),n.tag=2,on(o,n,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var PE=B.ReactCurrentOwner,_t=!1;function wt(t,n,o,d){n.child=t===null?Hg(n,null,o,d):pi(n,t.child,o,d)}function Rx(t,n,o,d,f){o=o.render;var v=n.ref;return mi(n,f),d=Xp(t,n,o,d,v,f),o=Qp(),t!==null&&!_t?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~f,jr(t,n,f)):(Ke&&o&&qp(n),n.flags|=1,wt(t,n,d,f),n.child)}function Cx(t,n,o,d,f){if(t===null){var v=o.type;return typeof v=="function"&&!Of(v)&&v.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=v,Px(t,n,v,d,f)):(t=dd(o.type,null,d,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(v=t.child,(t.lanes&f)===0){var T=v.memoizedProps;if(o=o.compare,o=o!==null?o:oa,o(T,d)&&t.ref===n.ref)return jr(t,n,f)}return n.flags|=1,t=pn(v,d),t.ref=n.ref,t.return=n,n.child=t}function Px(t,n,o,d,f){if(t!==null){var v=t.memoizedProps;if(oa(v,d)&&t.ref===n.ref)if(_t=!1,n.pendingProps=d=v,(t.lanes&f)!==0)(t.flags&131072)!==0&&(_t=!0);else return n.lanes=t.lanes,jr(t,n,f)}return lf(t,n,o,d,f)}function Ox(t,n,o){var d=n.pendingProps,f=d.children,v=t!==null?t.memoizedState:null;if(d.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(vi,$t),$t|=o;else{if((o&1073741824)===0)return t=v!==null?v.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,De(vi,$t),$t|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:o,De(vi,$t),$t|=d}else v!==null?(d=v.baseLanes|o,n.memoizedState=null):d=o,De(vi,$t),$t|=d;return wt(t,n,f,o),n.child}function _x(t,n){var o=n.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function lf(t,n,o,d,f){var v=Ot(o)?On:gt.current;return v=si(n,v),mi(n,f),o=Xp(t,n,o,d,v,f),d=Qp(),t!==null&&!_t?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~f,jr(t,n,f)):(Ke&&d&&qp(n),n.flags|=1,wt(t,n,o,f),n.child)}function jx(t,n,o,d,f){if(Ot(o)){var v=!0;Lu(n)}else v=!1;if(mi(n,f),n.stateNode===null)Ju(t,n),vx(n,o,d),nf(n,o,d,f),d=!0;else if(t===null){var T=n.stateNode,$=n.memoizedProps;T.props=$;var H=T.context,J=o.contextType;typeof J=="object"&&J!==null?J=Kt(J):(J=Ot(o)?On:gt.current,J=si(n,J));var se=o.getDerivedStateFromProps,ue=typeof se=="function"||typeof T.getSnapshotBeforeUpdate=="function";ue||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||($!==d||H!==J)&&bx(n,T,d,J),an=!1;var le=n.memoizedState;T.state=le,Hu(n,d,T,f),H=n.memoizedState,$!==d||le!==H||Pt.current||an?(typeof se=="function"&&(rf(n,o,se,d),H=n.memoizedState),($=an||xx(n,o,$,d,le,H,J))?(ue||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(n.flags|=4194308)):(typeof T.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=d,n.memoizedState=H),T.props=d,T.state=H,T.context=J,d=$):(typeof T.componentDidMount=="function"&&(n.flags|=4194308),d=!1)}else{T=n.stateNode,Ug(t,n),$=n.memoizedProps,J=n.type===n.elementType?$:ir(n.type,$),T.props=J,ue=n.pendingProps,le=T.context,H=o.contextType,typeof H=="object"&&H!==null?H=Kt(H):(H=Ot(o)?On:gt.current,H=si(n,H));var xe=o.getDerivedStateFromProps;(se=typeof xe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||($!==ue||le!==H)&&bx(n,T,d,H),an=!1,le=n.memoizedState,T.state=le,Hu(n,d,T,f);var ye=n.memoizedState;$!==ue||le!==ye||Pt.current||an?(typeof xe=="function"&&(rf(n,o,xe,d),ye=n.memoizedState),(J=an||xx(n,o,J,d,le,ye,H)||!1)?(se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,ye,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,ye,H)),typeof T.componentDidUpdate=="function"&&(n.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof T.componentDidUpdate!="function"||$===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=d,n.memoizedState=ye),T.props=d,T.state=ye,T.context=H,d=J):(typeof T.componentDidUpdate!="function"||$===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),d=!1)}return sf(t,n,o,d,v,f)}function sf(t,n,o,d,f,v){_x(t,n);var T=(n.flags&128)!==0;if(!d&&!T)return f&&Lg(n,o,!1),jr(t,n,v);d=n.stateNode,PE.current=n;var $=T&&typeof o.getDerivedStateFromError!="function"?null:d.render();return n.flags|=1,t!==null&&T?(n.child=pi(n,t.child,null,v),n.child=pi(n,null,$,v)):wt(t,n,$,v),n.memoizedState=d.state,f&&Lg(n,o,!0),n.child}function Tx(t){var n=t.stateNode;n.pendingContext?qg(t,n.pendingContext,n.pendingContext!==n.context):n.context&&qg(t,n.context,!1),Hp(t,n.containerInfo)}function Mx(t,n,o,d,f){return ci(),zp(f),n.flags|=256,wt(t,n,o,d),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function df(t){return{baseLanes:t,cachePool:null,transitions:null}}function qx(t,n,o){var d=n.pendingProps,f=Xe.current,v=!1,T=(n.flags&128)!==0,$;if(($=T)||($=t!==null&&t.memoizedState===null?!1:(f&2)!==0),$?(v=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),De(Xe,f&1),t===null)return Np(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(T=d.children,t=d.fallback,v?(d=n.mode,v=n.child,T={mode:"hidden",children:T},(d&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=cd(T,d,0,null),t=In(t,d,o,null),v.return=n,t.return=n,v.sibling=t,n.child=v,n.child.memoizedState=df(o),n.memoizedState=uf,t):cf(n,T));if(f=t.memoizedState,f!==null&&($=f.dehydrated,$!==null))return OE(t,n,T,d,$,f,o);if(v){v=d.fallback,T=n.mode,f=t.child,$=f.sibling;var H={mode:"hidden",children:d.children};return(T&1)===0&&n.child!==f?(d=n.child,d.childLanes=0,d.pendingProps=H,n.deletions=null):(d=pn(f,H),d.subtreeFlags=f.subtreeFlags&14680064),$!==null?v=pn($,v):(v=In(v,T,o,null),v.flags|=2),v.return=n,d.return=n,d.sibling=v,n.child=d,d=v,v=n.child,T=t.child.memoizedState,T=T===null?df(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=t.childLanes&~o,n.memoizedState=uf,d}return v=t.child,t=v.sibling,d=pn(v,{mode:"visible",children:d.children}),(n.mode&1)===0&&(d.lanes=o),d.return=n,d.sibling=null,t!==null&&(o=n.deletions,o===null?(n.deletions=[t],n.flags|=16):o.push(t)),n.child=d,n.memoizedState=null,d}function cf(t,n){return n=cd({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function Zu(t,n,o,d){return d!==null&&zp(d),pi(n,t.child,null,o),t=cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function OE(t,n,o,d,f,v,T){if(o)return n.flags&256?(n.flags&=-257,d=af(Error(i(422))),Zu(t,n,T,d)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(v=d.fallback,f=n.mode,d=cd({mode:"visible",children:d.children},f,0,null),v=In(v,f,T,null),v.flags|=2,d.return=n,v.return=n,d.sibling=v,n.child=d,(n.mode&1)!==0&&pi(n,t.child,null,T),n.child.memoizedState=df(T),n.memoizedState=uf,v);if((n.mode&1)===0)return Zu(t,n,T,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var $=d.dgst;return d=$,v=Error(i(419)),d=af(v,d,void 0),Zu(t,n,T,d)}if($=(T&t.childLanes)!==0,_t||$){if(d=ut,d!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|T))!==0?0:f,f!==0&&f!==v.retryLane&&(v.retryLane=f,Or(t,f),lr(d,t,f,-1))}return Pf(),d=af(Error(i(421))),Zu(t,n,T,d)}return f.data==="$?"?(n.flags|=128,n.child=t.child,n=$E.bind(null,t),f._reactRetry=n,null):(t=v.treeContext,Bt=en(f.nextSibling),Dt=n,Ke=!0,nr=null,t!==null&&(Wt[Ut++]=Cr,Wt[Ut++]=Pr,Wt[Ut++]=_n,Cr=t.id,Pr=t.overflow,_n=n),n=cf(n,d.children),n.flags|=4096,n)}function Ax(t,n,o){t.lanes|=n;var d=t.alternate;d!==null&&(d.lanes|=n),$p(t.return,n,o)}function pf(t,n,o,d,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:d,tail:o,tailMode:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=o,v.tailMode=f)}function Lx(t,n,o){var d=n.pendingProps,f=d.revealOrder,v=d.tail;if(wt(t,n,d.children,o),d=Xe.current,(d&2)!==0)d=d&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ax(t,o,n);else if(t.tag===19)Ax(t,o,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}d&=1}if(De(Xe,d),(n.mode&1)===0)n.memoizedState=null;else switch(f){case"forwards":for(o=n.child,f=null;o!==null;)t=o.alternate,t!==null&&Wu(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=n.child,n.child=null):(f=o.sibling,o.sibling=null),pf(n,!1,f,o,v);break;case"backwards":for(o=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&Wu(t)===null){n.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}pf(n,!0,o,null,v);break;case"together":pf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ju(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function jr(t,n,o){if(t!==null&&(n.dependencies=t.dependencies),An|=n.lanes,(o&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,o=pn(t,t.pendingProps),n.child=o,o.return=n;t.sibling!==null;)t=t.sibling,o=o.sibling=pn(t,t.pendingProps),o.return=n;o.sibling=null}return n.child}function _E(t,n,o){switch(n.tag){case 3:Tx(n),ci();break;case 5:Gg(n);break;case 1:Ot(n.type)&&Lu(n);break;case 4:Hp(n,n.stateNode.containerInfo);break;case 10:var d=n.type._context,f=n.memoizedProps.value;De($u,d._currentValue),d._currentValue=f;break;case 13:if(d=n.memoizedState,d!==null)return d.dehydrated!==null?(De(Xe,Xe.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?qx(t,n,o):(De(Xe,Xe.current&1),t=jr(t,n,o),t!==null?t.sibling:null);De(Xe,Xe.current&1);break;case 19:if(d=(o&n.childLanes)!==0,(t.flags&128)!==0){if(d)return Lx(t,n,o);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),De(Xe,Xe.current),d)break;return null;case 22:case 23:return n.lanes=0,Ox(t,n,o)}return jr(t,n,o)}var Nx,ff,zx,Ix;Nx=function(t,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ff=function(){},zx=function(t,n,o,d){var f=t.memoizedProps;if(f!==d){t=n.stateNode,Mn(gr.current);var v=null;switch(o){case"input":f=Se(t,f),d=Se(t,d),v=[];break;case"select":f=E({},f,{value:void 0}),d=E({},d,{value:void 0}),v=[];break;case"textarea":f=zt(t,f),d=zt(t,d),v=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(t.onclick=Mu)}Bi(o,d);var T;o=null;for(J in f)if(!d.hasOwnProperty(J)&&f.hasOwnProperty(J)&&f[J]!=null)if(J==="style"){var $=f[J];for(T in $)$.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(l.hasOwnProperty(J)?v||(v=[]):(v=v||[]).push(J,null));for(J in d){var H=d[J];if($=f!=null?f[J]:void 0,d.hasOwnProperty(J)&&H!==$&&(H!=null||$!=null))if(J==="style")if($){for(T in $)!$.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in H)H.hasOwnProperty(T)&&$[T]!==H[T]&&(o||(o={}),o[T]=H[T])}else o||(v||(v=[]),v.push(J,o)),o=H;else J==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,$=$?$.__html:void 0,H!=null&&$!==H&&(v=v||[]).push(J,H)):J==="children"?typeof H!="string"&&typeof H!="number"||(v=v||[]).push(J,""+H):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(l.hasOwnProperty(J)?(H!=null&&J==="onScroll"&&Ve("scroll",t),v||$===H||(v=[])):(v=v||[]).push(J,H))}o&&(v=v||[]).push("style",o);var J=v;(n.updateQueue=J)&&(n.flags|=4)}},Ix=function(t,n,o,d){o!==d&&(n.flags|=4)};function wa(t,n){if(!Ke)switch(t.tailMode){case"hidden":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var d=null;o!==null;)o.alternate!==null&&(d=o),o=o.sibling;d===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:d.sibling=null}}function vt(t){var n=t.alternate!==null&&t.alternate.child===t.child,o=0,d=0;if(n)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=d,t.childLanes=o,n}function jE(t,n,o){var d=n.pendingProps;switch(Ap(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(n),null;case 1:return Ot(n.type)&&Au(),vt(n),null;case 3:return d=n.stateNode,hi(),He(Pt),He(gt),Kp(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(t===null||t.child===null)&&(Du(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,nr!==null&&(Ef(nr),nr=null))),ff(t,n),vt(n),null;case 5:Wp(n);var f=Mn(ga.current);if(o=n.type,t!==null&&n.stateNode!=null)zx(t,n,o,d,f),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!d){if(n.stateNode===null)throw Error(i(166));return vt(n),null}if(t=Mn(gr.current),Du(n)){d=n.stateNode,o=n.type;var v=n.memoizedProps;switch(d[hr]=n,d[ca]=v,t=(n.mode&1)!==0,o){case"dialog":Ve("cancel",d),Ve("close",d);break;case"iframe":case"object":case"embed":Ve("load",d);break;case"video":case"audio":for(f=0;f<sa.length;f++)Ve(sa[f],d);break;case"source":Ve("error",d);break;case"img":case"image":case"link":Ve("error",d),Ve("load",d);break;case"details":Ve("toggle",d);break;case"input":Pe(d,v),Ve("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},Ve("invalid",d);break;case"textarea":Sr(d,v),Ve("invalid",d)}Bi(o,v),f=null;for(var T in v)if(v.hasOwnProperty(T)){var $=v[T];T==="children"?typeof $=="string"?d.textContent!==$&&(v.suppressHydrationWarning!==!0&&Tu(d.textContent,$,t),f=["children",$]):typeof $=="number"&&d.textContent!==""+$&&(v.suppressHydrationWarning!==!0&&Tu(d.textContent,$,t),f=["children",""+$]):l.hasOwnProperty(T)&&$!=null&&T==="onScroll"&&Ve("scroll",d)}switch(o){case"input":fe(d),$e(d,v,!0);break;case"textarea":fe(d),pr(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=Mu)}d=f,n.updateQueue=d,d!==null&&(n.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zn(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof d.is=="string"?t=T.createElement(o,{is:d.is}):(t=T.createElement(o),o==="select"&&(T=t,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):t=T.createElementNS(t,o),t[hr]=n,t[ca]=d,Nx(t,n,!1,!1),n.stateNode=t;e:{switch(T=$i(o,d),o){case"dialog":Ve("cancel",t),Ve("close",t),f=d;break;case"iframe":case"object":case"embed":Ve("load",t),f=d;break;case"video":case"audio":for(f=0;f<sa.length;f++)Ve(sa[f],t);f=d;break;case"source":Ve("error",t),f=d;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),f=d;break;case"details":Ve("toggle",t),f=d;break;case"input":Pe(t,d),f=Se(t,d),Ve("invalid",t);break;case"option":f=d;break;case"select":t._wrapperState={wasMultiple:!!d.multiple},f=E({},d,{value:void 0}),Ve("invalid",t);break;case"textarea":Sr(t,d),f=zt(t,d),Ve("invalid",t);break;default:f=d}Bi(o,f),$=f;for(v in $)if($.hasOwnProperty(v)){var H=$[v];v==="style"?au(t,H):v==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&nu(t,H)):v==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&En(t,H):typeof H=="number"&&En(t,""+H):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(l.hasOwnProperty(v)?H!=null&&v==="onScroll"&&Ve("scroll",t):H!=null&&z(t,v,H,T))}switch(o){case"input":fe(t),$e(t,d,!1);break;case"textarea":fe(t),pr(t);break;case"option":d.value!=null&&t.setAttribute("value",""+me(d.value));break;case"select":t.multiple=!!d.multiple,v=d.value,v!=null?Ze(t,!!d.multiple,v,!1):d.defaultValue!=null&&Ze(t,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Mu)}switch(o){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return vt(n),null;case 6:if(t&&n.stateNode!=null)Ix(t,n,t.memoizedProps,d);else{if(typeof d!="string"&&n.stateNode===null)throw Error(i(166));if(o=Mn(ga.current),Mn(gr.current),Du(n)){if(d=n.stateNode,o=n.memoizedProps,d[hr]=n,(v=d.nodeValue!==o)&&(t=Dt,t!==null))switch(t.tag){case 3:Tu(d.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tu(d.nodeValue,o,(t.mode&1)!==0)}v&&(n.flags|=4)}else d=(o.nodeType===9?o:o.ownerDocument).createTextNode(d),d[hr]=n,n.stateNode=d}return vt(n),null;case 13:if(He(Xe),d=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ke&&Bt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)$g(),ci(),n.flags|=98560,v=!1;else if(v=Du(n),d!==null&&d.dehydrated!==null){if(t===null){if(!v)throw Error(i(318));if(v=n.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(i(317));v[hr]=n}else ci(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vt(n),v=!1}else nr!==null&&(Ef(nr),nr=null),v=!0;if(!v)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(d=d!==null,d!==(t!==null&&t.memoizedState!==null)&&d&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(Xe.current&1)!==0?ot===0&&(ot=3):Pf())),n.updateQueue!==null&&(n.flags|=4),vt(n),null);case 4:return hi(),ff(t,n),t===null&&ua(n.stateNode.containerInfo),vt(n),null;case 10:return Bp(n.type._context),vt(n),null;case 17:return Ot(n.type)&&Au(),vt(n),null;case 19:if(He(Xe),v=n.memoizedState,v===null)return vt(n),null;if(d=(n.flags&128)!==0,T=v.rendering,T===null)if(d)wa(v,!1);else{if(ot!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(T=Wu(t),T!==null){for(n.flags|=128,wa(v,!1),d=T.updateQueue,d!==null&&(n.updateQueue=d,n.flags|=4),n.subtreeFlags=0,d=o,o=n.child;o!==null;)v=o,t=d,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=t,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,t=T.dependencies,v.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return De(Xe,Xe.current&1|2),n.child}t=t.sibling}v.tail!==null&&et()>bi&&(n.flags|=128,d=!0,wa(v,!1),n.lanes=4194304)}else{if(!d)if(t=Wu(T),t!==null){if(n.flags|=128,d=!0,o=t.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),wa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Ke)return vt(n),null}else 2*et()-v.renderingStartTime>bi&&o!==1073741824&&(n.flags|=128,d=!0,wa(v,!1),n.lanes=4194304);v.isBackwards?(T.sibling=n.child,n.child=T):(o=v.last,o!==null?o.sibling=T:n.child=T,v.last=T)}return v.tail!==null?(n=v.tail,v.rendering=n,v.tail=n.sibling,v.renderingStartTime=et(),n.sibling=null,o=Xe.current,De(Xe,d?o&1|2:o&1),n):(vt(n),null);case 22:case 23:return Cf(),d=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==d&&(n.flags|=8192),d&&(n.mode&1)!==0?($t&1073741824)!==0&&(vt(n),n.subtreeFlags&6&&(n.flags|=8192)):vt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function TE(t,n){switch(Ap(n),n.tag){case 1:return Ot(n.type)&&Au(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return hi(),He(Pt),He(gt),Kp(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Wp(n),null;case 13:if(He(Xe),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));ci()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return He(Xe),null;case 4:return hi(),null;case 10:return Bp(n.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var ed=!1,bt=!1,ME=typeof WeakSet=="function"?WeakSet:Set,be=null;function xi(t,n){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(d){Je(t,n,d)}else o.current=null}function mf(t,n,o){try{o()}catch(d){Je(t,n,d)}}var Dx=!1;function qE(t,n){if(Rp=yu,t=xg(),xp(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var d=o.getSelection&&o.getSelection();if(d&&d.rangeCount!==0){o=d.anchorNode;var f=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{o.nodeType,v.nodeType}catch{o=null;break e}var T=0,$=-1,H=-1,J=0,se=0,ue=t,le=null;t:for(;;){for(var xe;ue!==o||f!==0&&ue.nodeType!==3||($=T+f),ue!==v||d!==0&&ue.nodeType!==3||(H=T+d),ue.nodeType===3&&(T+=ue.nodeValue.length),(xe=ue.firstChild)!==null;)le=ue,ue=xe;for(;;){if(ue===t)break t;if(le===o&&++J===f&&($=T),le===v&&++se===d&&(H=T),(xe=ue.nextSibling)!==null)break;ue=le,le=ue.parentNode}ue=xe}o=$===-1||H===-1?null:{start:$,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cp={focusedElem:t,selectionRange:o},yu=!1,be=n;be!==null;)if(n=be,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,be=t;else for(;be!==null;){n=be;try{var ye=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ye!==null){var we=ye.memoizedProps,tt=ye.memoizedState,X=n.stateNode,K=X.getSnapshotBeforeUpdate(n.elementType===n.type?we:ir(n.type,we),tt);X.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var Q=n.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ce){Je(n,n.return,ce)}if(t=n.sibling,t!==null){t.return=n.return,be=t;break}be=n.return}return ye=Dx,Dx=!1,ye}function ka(t,n,o){var d=n.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&t)===t){var v=f.destroy;f.destroy=void 0,v!==void 0&&mf(n,o,v)}f=f.next}while(f!==d)}}function td(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var d=o.create;o.destroy=d()}o=o.next}while(o!==n)}}function hf(t){var n=t.ref;if(n!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof n=="function"?n(t):n.current=t}}function Bx(t){var n=t.alternate;n!==null&&(t.alternate=null,Bx(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[hr],delete n[ca],delete n[jp],delete n[hE],delete n[gE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $x(t){return t.tag===5||t.tag===3||t.tag===4}function Fx(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$x(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,n,o){var d=t.tag;if(d===5||d===6)t=t.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(t,n):o.insertBefore(t,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(t,o)):(n=o,n.appendChild(t)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Mu));else if(d!==4&&(t=t.child,t!==null))for(gf(t,n,o),t=t.sibling;t!==null;)gf(t,n,o),t=t.sibling}function xf(t,n,o){var d=t.tag;if(d===5||d===6)t=t.stateNode,n?o.insertBefore(t,n):o.appendChild(t);else if(d!==4&&(t=t.child,t!==null))for(xf(t,n,o),t=t.sibling;t!==null;)xf(t,n,o),t=t.sibling}var pt=null,ar=!1;function ln(t,n,o){for(o=o.child;o!==null;)Vx(t,n,o),o=o.sibling}function Vx(t,n,o){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(mu,o)}catch{}switch(o.tag){case 5:bt||xi(o,n);case 6:var d=pt,f=ar;pt=null,ln(t,n,o),pt=d,ar=f,pt!==null&&(ar?(t=pt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):pt.removeChild(o.stateNode));break;case 18:pt!==null&&(ar?(t=pt,o=o.stateNode,t.nodeType===8?_p(t.parentNode,o):t.nodeType===1&&_p(t,o),ea(t)):_p(pt,o.stateNode));break;case 4:d=pt,f=ar,pt=o.stateNode.containerInfo,ar=!0,ln(t,n,o),pt=d,ar=f;break;case 0:case 11:case 14:case 15:if(!bt&&(d=o.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var v=f,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&mf(o,n,T),f=f.next}while(f!==d)}ln(t,n,o);break;case 1:if(!bt&&(xi(o,n),d=o.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=o.memoizedProps,d.state=o.memoizedState,d.componentWillUnmount()}catch($){Je(o,n,$)}ln(t,n,o);break;case 21:ln(t,n,o);break;case 22:o.mode&1?(bt=(d=bt)||o.memoizedState!==null,ln(t,n,o),bt=d):ln(t,n,o);break;default:ln(t,n,o)}}function Hx(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new ME),n.forEach(function(d){var f=FE.bind(null,t,d);o.has(d)||(o.add(d),d.then(f,f))})}}function or(t,n){var o=n.deletions;if(o!==null)for(var d=0;d<o.length;d++){var f=o[d];try{var v=t,T=n,$=T;e:for(;$!==null;){switch($.tag){case 5:pt=$.stateNode,ar=!1;break e;case 3:pt=$.stateNode.containerInfo,ar=!0;break e;case 4:pt=$.stateNode.containerInfo,ar=!0;break e}$=$.return}if(pt===null)throw Error(i(160));Vx(v,T,f),pt=null,ar=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(J){Je(f,n,J)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wx(n,t),n=n.sibling}function Wx(t,n){var o=t.alternate,d=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(or(n,t),vr(t),d&4){try{ka(3,t,t.return),td(3,t)}catch(we){Je(t,t.return,we)}try{ka(5,t,t.return)}catch(we){Je(t,t.return,we)}}break;case 1:or(n,t),vr(t),d&512&&o!==null&&xi(o,o.return);break;case 5:if(or(n,t),vr(t),d&512&&o!==null&&xi(o,o.return),t.flags&32){var f=t.stateNode;try{En(f,"")}catch(we){Je(t,t.return,we)}}if(d&4&&(f=t.stateNode,f!=null)){var v=t.memoizedProps,T=o!==null?o.memoizedProps:v,$=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{$==="input"&&v.type==="radio"&&v.name!=null&&Te(f,v),$i($,T);var J=$i($,v);for(T=0;T<H.length;T+=2){var se=H[T],ue=H[T+1];se==="style"?au(f,ue):se==="dangerouslySetInnerHTML"?nu(f,ue):se==="children"?En(f,ue):z(f,se,ue,J)}switch($){case"input":Ce(f,v);break;case"textarea":Sn(f,v);break;case"select":var le=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!v.multiple;var xe=v.value;xe!=null?Ze(f,!!v.multiple,xe,!1):le!==!!v.multiple&&(v.defaultValue!=null?Ze(f,!!v.multiple,v.defaultValue,!0):Ze(f,!!v.multiple,v.multiple?[]:"",!1))}f[ca]=v}catch(we){Je(t,t.return,we)}}break;case 6:if(or(n,t),vr(t),d&4){if(t.stateNode===null)throw Error(i(162));f=t.stateNode,v=t.memoizedProps;try{f.nodeValue=v}catch(we){Je(t,t.return,we)}}break;case 3:if(or(n,t),vr(t),d&4&&o!==null&&o.memoizedState.isDehydrated)try{ea(n.containerInfo)}catch(we){Je(t,t.return,we)}break;case 4:or(n,t),vr(t);break;case 13:or(n,t),vr(t),f=t.child,f.flags&8192&&(v=f.memoizedState!==null,f.stateNode.isHidden=v,!v||f.alternate!==null&&f.alternate.memoizedState!==null||(yf=et())),d&4&&Hx(t);break;case 22:if(se=o!==null&&o.memoizedState!==null,t.mode&1?(bt=(J=bt)||se,or(n,t),bt=J):or(n,t),vr(t),d&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!se&&(t.mode&1)!==0)for(be=t,se=t.child;se!==null;){for(ue=be=se;be!==null;){switch(le=be,xe=le.child,le.tag){case 0:case 11:case 14:case 15:ka(4,le,le.return);break;case 1:xi(le,le.return);var ye=le.stateNode;if(typeof ye.componentWillUnmount=="function"){d=le,o=le.return;try{n=d,ye.props=n.memoizedProps,ye.state=n.memoizedState,ye.componentWillUnmount()}catch(we){Je(d,o,we)}}break;case 5:xi(le,le.return);break;case 22:if(le.memoizedState!==null){Yx(ue);continue}}xe!==null?(xe.return=le,be=xe):Yx(ue)}se=se.sibling}e:for(se=null,ue=t;;){if(ue.tag===5){if(se===null){se=ue;try{f=ue.stateNode,J?(v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):($=ue.stateNode,H=ue.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,$.style.display=iu("display",T))}catch(we){Je(t,t.return,we)}}}else if(ue.tag===6){if(se===null)try{ue.stateNode.nodeValue=J?"":ue.memoizedProps}catch(we){Je(t,t.return,we)}}else if((ue.tag!==22&&ue.tag!==23||ue.memoizedState===null||ue===t)&&ue.child!==null){ue.child.return=ue,ue=ue.child;continue}if(ue===t)break e;for(;ue.sibling===null;){if(ue.return===null||ue.return===t)break e;se===ue&&(se=null),ue=ue.return}se===ue&&(se=null),ue.sibling.return=ue.return,ue=ue.sibling}}break;case 19:or(n,t),vr(t),d&4&&Hx(t);break;case 21:break;default:or(n,t),vr(t)}}function vr(t){var n=t.flags;if(n&2){try{e:{for(var o=t.return;o!==null;){if($x(o)){var d=o;break e}o=o.return}throw Error(i(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(En(f,""),d.flags&=-33);var v=Fx(t);xf(t,v,f);break;case 3:case 4:var T=d.stateNode.containerInfo,$=Fx(t);gf(t,$,T);break;default:throw Error(i(161))}}catch(H){Je(t,t.return,H)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function AE(t,n,o){be=t,Ux(t)}function Ux(t,n,o){for(var d=(t.mode&1)!==0;be!==null;){var f=be,v=f.child;if(f.tag===22&&d){var T=f.memoizedState!==null||ed;if(!T){var $=f.alternate,H=$!==null&&$.memoizedState!==null||bt;$=ed;var J=bt;if(ed=T,(bt=H)&&!J)for(be=f;be!==null;)T=be,H=T.child,T.tag===22&&T.memoizedState!==null?Gx(f):H!==null?(H.return=T,be=H):Gx(f);for(;v!==null;)be=v,Ux(v),v=v.sibling;be=f,ed=$,bt=J}Kx(t)}else(f.subtreeFlags&8772)!==0&&v!==null?(v.return=f,be=v):Kx(t)}}function Kx(t){for(;be!==null;){var n=be;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:bt||td(5,n);break;case 1:var d=n.stateNode;if(n.flags&4&&!bt)if(o===null)d.componentDidMount();else{var f=n.elementType===n.type?o.memoizedProps:ir(n.type,o.memoizedProps);d.componentDidUpdate(f,o.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=n.updateQueue;v!==null&&Yg(n,v,d);break;case 3:var T=n.updateQueue;if(T!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}Yg(n,T,o)}break;case 5:var $=n.stateNode;if(o===null&&n.flags&4){o=$;var H=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var J=n.alternate;if(J!==null){var se=J.memoizedState;if(se!==null){var ue=se.dehydrated;ue!==null&&ea(ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}bt||n.flags&512&&hf(n)}catch(le){Je(n,n.return,le)}}if(n===t){be=null;break}if(o=n.sibling,o!==null){o.return=n.return,be=o;break}be=n.return}}function Yx(t){for(;be!==null;){var n=be;if(n===t){be=null;break}var o=n.sibling;if(o!==null){o.return=n.return,be=o;break}be=n.return}}function Gx(t){for(;be!==null;){var n=be;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{td(4,n)}catch(H){Je(n,o,H)}break;case 1:var d=n.stateNode;if(typeof d.componentDidMount=="function"){var f=n.return;try{d.componentDidMount()}catch(H){Je(n,f,H)}}var v=n.return;try{hf(n)}catch(H){Je(n,v,H)}break;case 5:var T=n.return;try{hf(n)}catch(H){Je(n,T,H)}}}catch(H){Je(n,n.return,H)}if(n===t){be=null;break}var $=n.sibling;if($!==null){$.return=n.return,be=$;break}be=n.return}}var LE=Math.ceil,rd=B.ReactCurrentDispatcher,vf=B.ReactCurrentOwner,Gt=B.ReactCurrentBatchConfig,qe=0,ut=null,rt=null,ft=0,$t=0,vi=tn(0),ot=0,Sa=null,An=0,nd=0,bf=0,Ea=null,jt=null,yf=0,bi=1/0,Tr=null,id=!1,wf=null,sn=null,ad=!1,un=null,od=0,Ra=0,kf=null,ld=-1,sd=0;function kt(){return(qe&6)!==0?et():ld!==-1?ld:ld=et()}function dn(t){return(t.mode&1)===0?1:(qe&2)!==0&&ft!==0?ft&-ft:vE.transition!==null?(sd===0&&(sd=Fh()),sd):(t=Ne,t!==0||(t=window.event,t=t===void 0?16:Qh(t.type)),t)}function lr(t,n,o,d){if(50<Ra)throw Ra=0,kf=null,Error(i(185));Gi(t,o,d),((qe&2)===0||t!==ut)&&(t===ut&&((qe&2)===0&&(nd|=o),ot===4&&cn(t,ft)),Tt(t,d),o===1&&qe===0&&(n.mode&1)===0&&(bi=et()+500,Nu&&nn()))}function Tt(t,n){var o=t.callbackNode;vS(t,n);var d=xu(t,t===ut?ft:0);if(d===0)o!==null&&Dh(o),t.callbackNode=null,t.callbackPriority=0;else if(n=d&-d,t.callbackPriority!==n){if(o!=null&&Dh(o),n===1)t.tag===0?xE(Qx.bind(null,t)):Ng(Qx.bind(null,t)),fE(function(){(qe&6)===0&&nn()}),o=null;else{switch(Vh(d)){case 1:o=ep;break;case 4:o=Bh;break;case 16:o=fu;break;case 536870912:o=$h;break;default:o=fu}o=a0(o,Xx.bind(null,t))}t.callbackPriority=n,t.callbackNode=o}}function Xx(t,n){if(ld=-1,sd=0,(qe&6)!==0)throw Error(i(327));var o=t.callbackNode;if(yi()&&t.callbackNode!==o)return null;var d=xu(t,t===ut?ft:0);if(d===0)return null;if((d&30)!==0||(d&t.expiredLanes)!==0||n)n=ud(t,d);else{n=d;var f=qe;qe|=2;var v=Jx();(ut!==t||ft!==n)&&(Tr=null,bi=et()+500,Nn(t,n));do try{IE();break}catch($){Zx(t,$)}while(!0);Dp(),rd.current=v,qe=f,rt!==null?n=0:(ut=null,ft=0,n=ot)}if(n!==0){if(n===2&&(f=tp(t),f!==0&&(d=f,n=Sf(t,f))),n===1)throw o=Sa,Nn(t,0),cn(t,d),Tt(t,et()),o;if(n===6)cn(t,d);else{if(f=t.current.alternate,(d&30)===0&&!NE(f)&&(n=ud(t,d),n===2&&(v=tp(t),v!==0&&(d=v,n=Sf(t,v))),n===1))throw o=Sa,Nn(t,0),cn(t,d),Tt(t,et()),o;switch(t.finishedWork=f,t.finishedLanes=d,n){case 0:case 1:throw Error(i(345));case 2:zn(t,jt,Tr);break;case 3:if(cn(t,d),(d&130023424)===d&&(n=yf+500-et(),10<n)){if(xu(t,0)!==0)break;if(f=t.suspendedLanes,(f&d)!==d){kt(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Op(zn.bind(null,t,jt,Tr),n);break}zn(t,jt,Tr);break;case 4:if(cn(t,d),(d&4194240)===d)break;for(n=t.eventTimes,f=-1;0<d;){var T=31-tr(d);v=1<<T,T=n[T],T>f&&(f=T),d&=~v}if(d=f,d=et()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*LE(d/1960))-d,10<d){t.timeoutHandle=Op(zn.bind(null,t,jt,Tr),d);break}zn(t,jt,Tr);break;case 5:zn(t,jt,Tr);break;default:throw Error(i(329))}}}return Tt(t,et()),t.callbackNode===o?Xx.bind(null,t):null}function Sf(t,n){var o=Ea;return t.current.memoizedState.isDehydrated&&(Nn(t,n).flags|=256),t=ud(t,n),t!==2&&(n=jt,jt=o,n!==null&&Ef(n)),t}function Ef(t){jt===null?jt=t:jt.push.apply(jt,t)}function NE(t){for(var n=t;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var d=0;d<o.length;d++){var f=o[d],v=f.getSnapshot;f=f.value;try{if(!rr(v(),f))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function cn(t,n){for(n&=~bf,n&=~nd,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var o=31-tr(n),d=1<<o;t[o]=-1,n&=~d}}function Qx(t){if((qe&6)!==0)throw Error(i(327));yi();var n=xu(t,0);if((n&1)===0)return Tt(t,et()),null;var o=ud(t,n);if(t.tag!==0&&o===2){var d=tp(t);d!==0&&(n=d,o=Sf(t,d))}if(o===1)throw o=Sa,Nn(t,0),cn(t,n),Tt(t,et()),o;if(o===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,zn(t,jt,Tr),Tt(t,et()),null}function Rf(t,n){var o=qe;qe|=1;try{return t(n)}finally{qe=o,qe===0&&(bi=et()+500,Nu&&nn())}}function Ln(t){un!==null&&un.tag===0&&(qe&6)===0&&yi();var n=qe;qe|=1;var o=Gt.transition,d=Ne;try{if(Gt.transition=null,Ne=1,t)return t()}finally{Ne=d,Gt.transition=o,qe=n,(qe&6)===0&&nn()}}function Cf(){$t=vi.current,He(vi)}function Nn(t,n){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,pE(o)),rt!==null)for(o=rt.return;o!==null;){var d=o;switch(Ap(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Au();break;case 3:hi(),He(Pt),He(gt),Kp();break;case 5:Wp(d);break;case 4:hi();break;case 13:He(Xe);break;case 19:He(Xe);break;case 10:Bp(d.type._context);break;case 22:case 23:Cf()}o=o.return}if(ut=t,rt=t=pn(t.current,null),ft=$t=n,ot=0,Sa=null,bf=nd=An=0,jt=Ea=null,Tn!==null){for(n=0;n<Tn.length;n++)if(o=Tn[n],d=o.interleaved,d!==null){o.interleaved=null;var f=d.next,v=o.pending;if(v!==null){var T=v.next;v.next=f,d.next=T}o.pending=d}Tn=null}return t}function Zx(t,n){do{var o=rt;try{if(Dp(),Uu.current=Xu,Ku){for(var d=Qe.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}Ku=!1}if(qn=0,st=at=Qe=null,xa=!1,va=0,vf.current=null,o===null||o.return===null){ot=1,Sa=n,rt=null;break}e:{var v=t,T=o.return,$=o,H=n;if(n=ft,$.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var J=H,se=$,ue=se.tag;if((se.mode&1)===0&&(ue===0||ue===11||ue===15)){var le=se.alternate;le?(se.updateQueue=le.updateQueue,se.memoizedState=le.memoizedState,se.lanes=le.lanes):(se.updateQueue=null,se.memoizedState=null)}var xe=Sx(T);if(xe!==null){xe.flags&=-257,Ex(xe,T,$,v,n),xe.mode&1&&kx(v,J,n),n=xe,H=J;var ye=n.updateQueue;if(ye===null){var we=new Set;we.add(H),n.updateQueue=we}else ye.add(H);break e}else{if((n&1)===0){kx(v,J,n),Pf();break e}H=Error(i(426))}}else if(Ke&&$.mode&1){var tt=Sx(T);if(tt!==null){(tt.flags&65536)===0&&(tt.flags|=256),Ex(tt,T,$,v,n),zp(gi(H,$));break e}}v=H=gi(H,$),ot!==4&&(ot=2),Ea===null?Ea=[v]:Ea.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,n&=-n,v.lanes|=n;var X=yx(v,H,n);Kg(v,X);break e;case 1:$=H;var K=v.type,Q=v.stateNode;if((v.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(sn===null||!sn.has(Q)))){v.flags|=65536,n&=-n,v.lanes|=n;var ce=wx(v,$,n);Kg(v,ce);break e}}v=v.return}while(v!==null)}t0(o)}catch(ke){n=ke,rt===o&&o!==null&&(rt=o=o.return);continue}break}while(!0)}function Jx(){var t=rd.current;return rd.current=Xu,t===null?Xu:t}function Pf(){(ot===0||ot===3||ot===2)&&(ot=4),ut===null||(An&268435455)===0&&(nd&268435455)===0||cn(ut,ft)}function ud(t,n){var o=qe;qe|=2;var d=Jx();(ut!==t||ft!==n)&&(Tr=null,Nn(t,n));do try{zE();break}catch(f){Zx(t,f)}while(!0);if(Dp(),qe=o,rd.current=d,rt!==null)throw Error(i(261));return ut=null,ft=0,ot}function zE(){for(;rt!==null;)e0(rt)}function IE(){for(;rt!==null&&!uS();)e0(rt)}function e0(t){var n=i0(t.alternate,t,$t);t.memoizedProps=t.pendingProps,n===null?t0(t):rt=n,vf.current=null}function t0(t){var n=t;do{var o=n.alternate;if(t=n.return,(n.flags&32768)===0){if(o=jE(o,n,$t),o!==null){rt=o;return}}else{if(o=TE(o,n),o!==null){o.flags&=32767,rt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,rt=null;return}}if(n=n.sibling,n!==null){rt=n;return}rt=n=t}while(n!==null);ot===0&&(ot=5)}function zn(t,n,o){var d=Ne,f=Gt.transition;try{Gt.transition=null,Ne=1,DE(t,n,o,d)}finally{Gt.transition=f,Ne=d}return null}function DE(t,n,o,d){do yi();while(un!==null);if((qe&6)!==0)throw Error(i(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var v=o.lanes|o.childLanes;if(bS(t,v),t===ut&&(rt=ut=null,ft=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ad||(ad=!0,a0(fu,function(){return yi(),null})),v=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||v){v=Gt.transition,Gt.transition=null;var T=Ne;Ne=1;var $=qe;qe|=4,vf.current=null,qE(t,o),Wx(o,t),aE(Cp),yu=!!Rp,Cp=Rp=null,t.current=o,AE(o),dS(),qe=$,Ne=T,Gt.transition=v}else t.current=o;if(ad&&(ad=!1,un=t,od=f),v=t.pendingLanes,v===0&&(sn=null),fS(o.stateNode),Tt(t,et()),n!==null)for(d=t.onRecoverableError,o=0;o<n.length;o++)f=n[o],d(f.value,{componentStack:f.stack,digest:f.digest});if(id)throw id=!1,t=wf,wf=null,t;return(od&1)!==0&&t.tag!==0&&yi(),v=t.pendingLanes,(v&1)!==0?t===kf?Ra++:(Ra=0,kf=t):Ra=0,nn(),null}function yi(){if(un!==null){var t=Vh(od),n=Gt.transition,o=Ne;try{if(Gt.transition=null,Ne=16>t?16:t,un===null)var d=!1;else{if(t=un,un=null,od=0,(qe&6)!==0)throw Error(i(331));var f=qe;for(qe|=4,be=t.current;be!==null;){var v=be,T=v.child;if((be.flags&16)!==0){var $=v.deletions;if($!==null){for(var H=0;H<$.length;H++){var J=$[H];for(be=J;be!==null;){var se=be;switch(se.tag){case 0:case 11:case 15:ka(8,se,v)}var ue=se.child;if(ue!==null)ue.return=se,be=ue;else for(;be!==null;){se=be;var le=se.sibling,xe=se.return;if(Bx(se),se===J){be=null;break}if(le!==null){le.return=xe,be=le;break}be=xe}}}var ye=v.alternate;if(ye!==null){var we=ye.child;if(we!==null){ye.child=null;do{var tt=we.sibling;we.sibling=null,we=tt}while(we!==null)}}be=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,be=T;else e:for(;be!==null;){if(v=be,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ka(9,v,v.return)}var X=v.sibling;if(X!==null){X.return=v.return,be=X;break e}be=v.return}}var K=t.current;for(be=K;be!==null;){T=be;var Q=T.child;if((T.subtreeFlags&2064)!==0&&Q!==null)Q.return=T,be=Q;else e:for(T=K;be!==null;){if($=be,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:td(9,$)}}catch(ke){Je($,$.return,ke)}if($===T){be=null;break e}var ce=$.sibling;if(ce!==null){ce.return=$.return,be=ce;break e}be=$.return}}if(qe=f,nn(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(mu,t)}catch{}d=!0}return d}finally{Ne=o,Gt.transition=n}}return!1}function r0(t,n,o){n=gi(o,n),n=yx(t,n,1),t=on(t,n,1),n=kt(),t!==null&&(Gi(t,1,n),Tt(t,n))}function Je(t,n,o){if(t.tag===3)r0(t,t,o);else for(;n!==null;){if(n.tag===3){r0(n,t,o);break}else if(n.tag===1){var d=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(sn===null||!sn.has(d))){t=gi(o,t),t=wx(n,t,1),n=on(n,t,1),t=kt(),n!==null&&(Gi(n,1,t),Tt(n,t));break}}n=n.return}}function BE(t,n,o){var d=t.pingCache;d!==null&&d.delete(n),n=kt(),t.pingedLanes|=t.suspendedLanes&o,ut===t&&(ft&o)===o&&(ot===4||ot===3&&(ft&130023424)===ft&&500>et()-yf?Nn(t,0):bf|=o),Tt(t,n)}function n0(t,n){n===0&&((t.mode&1)===0?n=1:(n=gu,gu<<=1,(gu&130023424)===0&&(gu=4194304)));var o=kt();t=Or(t,n),t!==null&&(Gi(t,n,o),Tt(t,o))}function $E(t){var n=t.memoizedState,o=0;n!==null&&(o=n.retryLane),n0(t,o)}function FE(t,n){var o=0;switch(t.tag){case 13:var d=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:d=t.stateNode;break;default:throw Error(i(314))}d!==null&&d.delete(n),n0(t,o)}var i0;i0=function(t,n,o){if(t!==null)if(t.memoizedProps!==n.pendingProps||Pt.current)_t=!0;else{if((t.lanes&o)===0&&(n.flags&128)===0)return _t=!1,_E(t,n,o);_t=(t.flags&131072)!==0}else _t=!1,Ke&&(n.flags&1048576)!==0&&zg(n,Iu,n.index);switch(n.lanes=0,n.tag){case 2:var d=n.type;Ju(t,n),t=n.pendingProps;var f=si(n,gt.current);mi(n,o),f=Xp(null,n,d,t,f,o);var v=Qp();return n.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ot(d)?(v=!0,Lu(n)):v=!1,n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Vp(n),f.updater=Qu,n.stateNode=f,f._reactInternals=n,nf(n,d,t,o),n=sf(null,n,d,!0,v,o)):(n.tag=0,Ke&&v&&qp(n),wt(null,n,f,o),n=n.child),n;case 16:d=n.elementType;e:{switch(Ju(t,n),t=n.pendingProps,f=d._init,d=f(d._payload),n.type=d,f=n.tag=HE(d),t=ir(d,t),f){case 0:n=lf(null,n,d,t,o);break e;case 1:n=jx(null,n,d,t,o);break e;case 11:n=Rx(null,n,d,t,o);break e;case 14:n=Cx(null,n,d,ir(d.type,t),o);break e}throw Error(i(306,d,""))}return n;case 0:return d=n.type,f=n.pendingProps,f=n.elementType===d?f:ir(d,f),lf(t,n,d,f,o);case 1:return d=n.type,f=n.pendingProps,f=n.elementType===d?f:ir(d,f),jx(t,n,d,f,o);case 3:e:{if(Tx(n),t===null)throw Error(i(387));d=n.pendingProps,v=n.memoizedState,f=v.element,Ug(t,n),Hu(n,d,null,o);var T=n.memoizedState;if(d=T.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},n.updateQueue.baseState=v,n.memoizedState=v,n.flags&256){f=gi(Error(i(423)),n),n=Mx(t,n,d,o,f);break e}else if(d!==f){f=gi(Error(i(424)),n),n=Mx(t,n,d,o,f);break e}else for(Bt=en(n.stateNode.containerInfo.firstChild),Dt=n,Ke=!0,nr=null,o=Hg(n,null,d,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ci(),d===f){n=jr(t,n,o);break e}wt(t,n,d,o)}n=n.child}return n;case 5:return Gg(n),t===null&&Np(n),d=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,T=f.children,Pp(d,f)?T=null:v!==null&&Pp(d,v)&&(n.flags|=32),_x(t,n),wt(t,n,T,o),n.child;case 6:return t===null&&Np(n),null;case 13:return qx(t,n,o);case 4:return Hp(n,n.stateNode.containerInfo),d=n.pendingProps,t===null?n.child=pi(n,null,d,o):wt(t,n,d,o),n.child;case 11:return d=n.type,f=n.pendingProps,f=n.elementType===d?f:ir(d,f),Rx(t,n,d,f,o);case 7:return wt(t,n,n.pendingProps,o),n.child;case 8:return wt(t,n,n.pendingProps.children,o),n.child;case 12:return wt(t,n,n.pendingProps.children,o),n.child;case 10:e:{if(d=n.type._context,f=n.pendingProps,v=n.memoizedProps,T=f.value,De($u,d._currentValue),d._currentValue=T,v!==null)if(rr(v.value,T)){if(v.children===f.children&&!Pt.current){n=jr(t,n,o);break e}}else for(v=n.child,v!==null&&(v.return=n);v!==null;){var $=v.dependencies;if($!==null){T=v.child;for(var H=$.firstContext;H!==null;){if(H.context===d){if(v.tag===1){H=_r(-1,o&-o),H.tag=2;var J=v.updateQueue;if(J!==null){J=J.shared;var se=J.pending;se===null?H.next=H:(H.next=se.next,se.next=H),J.pending=H}}v.lanes|=o,H=v.alternate,H!==null&&(H.lanes|=o),$p(v.return,o,n),$.lanes|=o;break}H=H.next}}else if(v.tag===10)T=v.type===n.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(i(341));T.lanes|=o,$=T.alternate,$!==null&&($.lanes|=o),$p(T,o,n),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===n){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}wt(t,n,f.children,o),n=n.child}return n;case 9:return f=n.type,d=n.pendingProps.children,mi(n,o),f=Kt(f),d=d(f),n.flags|=1,wt(t,n,d,o),n.child;case 14:return d=n.type,f=ir(d,n.pendingProps),f=ir(d.type,f),Cx(t,n,d,f,o);case 15:return Px(t,n,n.type,n.pendingProps,o);case 17:return d=n.type,f=n.pendingProps,f=n.elementType===d?f:ir(d,f),Ju(t,n),n.tag=1,Ot(d)?(t=!0,Lu(n)):t=!1,mi(n,o),vx(n,d,f),nf(n,d,f,o),sf(null,n,d,!0,t,o);case 19:return Lx(t,n,o);case 22:return Ox(t,n,o)}throw Error(i(156,n.tag))};function a0(t,n){return Ih(t,n)}function VE(t,n,o,d){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,n,o,d){return new VE(t,n,o,d)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HE(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Y)return 11;if(t===ie)return 14}return 2}function pn(t,n){var o=t.alternate;return o===null?(o=Xt(t.tag,n,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=n,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,n=t.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function dd(t,n,o,d,f,v){var T=2;if(d=t,typeof t=="function")Of(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case P:return In(o.children,f,v,n);case L:T=8,f|=8;break;case q:return t=Xt(12,o,n,f|2),t.elementType=q,t.lanes=v,t;case N:return t=Xt(13,o,n,f),t.elementType=N,t.lanes=v,t;case F:return t=Xt(19,o,n,f),t.elementType=F,t.lanes=v,t;case R:return cd(o,f,v,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:T=10;break e;case W:T=9;break e;case Y:T=11;break e;case ie:T=14;break e;case ee:T=16,d=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=Xt(T,o,n,f),n.elementType=t,n.type=d,n.lanes=v,n}function In(t,n,o,d){return t=Xt(7,t,d,n),t.lanes=o,t}function cd(t,n,o,d){return t=Xt(22,t,d,n),t.elementType=R,t.lanes=o,t.stateNode={isHidden:!1},t}function _f(t,n,o){return t=Xt(6,t,null,n),t.lanes=o,t}function jf(t,n,o){return n=Xt(4,t.children!==null?t.children:[],t.key,n),n.lanes=o,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function WE(t,n,o,d,f){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rp(0),this.expirationTimes=rp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rp(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Tf(t,n,o,d,f,v,T,$,H){return t=new WE(t,n,o,$,H),n===1?(n=1,v===!0&&(n|=8)):n=0,v=Xt(3,null,null,n),t.current=v,v.stateNode=t,v.memoizedState={element:d,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(v),t}function UE(t,n,o){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:d==null?null:""+d,children:t,containerInfo:n,implementation:o}}function o0(t){if(!t)return rn;t=t._reactInternals;e:{if(Cn(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ot(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var o=t.type;if(Ot(o))return Ag(t,o,n)}return n}function l0(t,n,o,d,f,v,T,$,H){return t=Tf(o,d,!0,t,f,v,T,$,H),t.context=o0(null),o=t.current,d=kt(),f=dn(o),v=_r(d,f),v.callback=n??null,on(o,v,f),t.current.lanes=f,Gi(t,f,d),Tt(t,d),t}function pd(t,n,o,d){var f=n.current,v=kt(),T=dn(f);return o=o0(o),n.context===null?n.context=o:n.pendingContext=o,n=_r(v,T),n.payload={element:t},d=d===void 0?null:d,d!==null&&(n.callback=d),t=on(f,n,T),t!==null&&(lr(t,f,T,v),Vu(t,f,T)),T}function fd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function s0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<n?o:n}}function Mf(t,n){s0(t,n),(t=t.alternate)&&s0(t,n)}function KE(){return null}var u0=typeof reportError=="function"?reportError:function(t){console.error(t)};function qf(t){this._internalRoot=t}md.prototype.render=qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));pd(t,n,null,null)},md.prototype.unmount=qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ln(function(){pd(null,t,null,null)}),n[Er]=null}};function md(t){this._internalRoot=t}md.prototype.unstable_scheduleHydration=function(t){if(t){var n=Uh();t={blockedOn:null,target:t,priority:n};for(var o=0;o<Qr.length&&n!==0&&n<Qr[o].priority;o++);Qr.splice(o,0,t),o===0&&Gh(t)}};function Af(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function d0(){}function YE(t,n,o,d,f){if(f){if(typeof d=="function"){var v=d;d=function(){var J=fd(T);v.call(J)}}var T=l0(n,d,t,0,null,!1,!1,"",d0);return t._reactRootContainer=T,t[Er]=T.current,ua(t.nodeType===8?t.parentNode:t),Ln(),T}for(;f=t.lastChild;)t.removeChild(f);if(typeof d=="function"){var $=d;d=function(){var J=fd(H);$.call(J)}}var H=Tf(t,0,!1,null,null,!1,!1,"",d0);return t._reactRootContainer=H,t[Er]=H.current,ua(t.nodeType===8?t.parentNode:t),Ln(function(){pd(n,H,o,d)}),H}function gd(t,n,o,d,f){var v=o._reactRootContainer;if(v){var T=v;if(typeof f=="function"){var $=f;f=function(){var H=fd(T);$.call(H)}}pd(n,T,t,f)}else T=YE(o,n,t,f,d);return fd(T)}Hh=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var o=Yi(n.pendingLanes);o!==0&&(np(n,o|1),Tt(n,et()),(qe&6)===0&&(bi=et()+500,nn()))}break;case 13:Ln(function(){var d=Or(t,1);if(d!==null){var f=kt();lr(d,t,1,f)}}),Mf(t,1)}},ip=function(t){if(t.tag===13){var n=Or(t,134217728);if(n!==null){var o=kt();lr(n,t,134217728,o)}Mf(t,134217728)}},Wh=function(t){if(t.tag===13){var n=dn(t),o=Or(t,n);if(o!==null){var d=kt();lr(o,t,n,d)}Mf(t,n)}},Uh=function(){return Ne},Kh=function(t,n){var o=Ne;try{return Ne=t,n()}finally{Ne=o}},Hi=function(t,n,o){switch(n){case"input":if(Ce(t,o),n=o.name,o.type==="radio"&&n!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var d=o[n];if(d!==t&&d.form===t.form){var f=qu(d);if(!f)throw Error(i(90));ge(d),Ce(d,f)}}}break;case"textarea":Sn(t,o);break;case"select":n=o.value,n!=null&&Ze(t,!!o.multiple,n,!1)}},uu=Rf,pe=Ln;var GE={usingClientEntryPoint:!1,Events:[pa,oi,qu,lu,su,Rf]},Ca={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XE={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nh(t),t===null?null:t.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||KE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xd.isDisabled&&xd.supportsFiber)try{mu=xd.inject(XE),mr=xd}catch{}}return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GE,Mt.createPortal=function(t,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Af(n))throw Error(i(200));return UE(t,n,null,o)},Mt.createRoot=function(t,n){if(!Af(t))throw Error(i(299));var o=!1,d="",f=u0;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onRecoverableError!==void 0&&(f=n.onRecoverableError)),n=Tf(t,1,!1,null,null,o,!1,d,f),t[Er]=n.current,ua(t.nodeType===8?t.parentNode:t),new qf(n)},Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Nh(n),t=t===null?null:t.stateNode,t},Mt.flushSync=function(t){return Ln(t)},Mt.hydrate=function(t,n,o){if(!hd(n))throw Error(i(200));return gd(null,t,n,!0,o)},Mt.hydrateRoot=function(t,n,o){if(!Af(t))throw Error(i(405));var d=o!=null&&o.hydratedSources||null,f=!1,v="",T=u0;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(v=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),n=l0(n,null,t,1,o??null,f,!1,v,T),t[Er]=n.current,ua(t),d)for(t=0;t<d.length;t++)o=d[t],f=o._getVersion,f=f(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,f]:n.mutableSourceEagerHydrationData.push(o,f);return new md(n)},Mt.render=function(t,n,o){if(!hd(n))throw Error(i(200));return gd(null,t,n,!1,o)},Mt.unmountComponentAtNode=function(t){if(!hd(t))throw Error(i(40));return t._reactRootContainer?(Ln(function(){gd(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1},Mt.unstable_batchedUpdates=Rf,Mt.unstable_renderSubtreeIntoContainer=function(t,n,o,d){if(!hd(o))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return gd(t,n,o,!1,d)},Mt.version="18.3.1-next-f1338f8080-20240426",Mt}var v0;function oR(){if(v0)return zf.exports;v0=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),zf.exports=aR(),zf.exports}var b0;function lR(){if(b0)return bd;b0=1;var e=oR();return bd.createRoot=e.createRoot,bd.hydrateRoot=e.hydrateRoot,bd}var sR=lR();const uR=Ks(sR);var qt=function(){return qt=Object.assign||function(r){for(var i,a=1,l=arguments.length;a<l;a++){i=arguments[a];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},qt.apply(this,arguments)};function Ds(e,r,i){if(i||arguments.length===2)for(var a=0,l=r.length,s;a<l;a++)(s||!(a in r))&&(s||(s=Array.prototype.slice.call(r,0,a)),s[a]=r[a]);return e.concat(s||Array.prototype.slice.call(r))}var We="-ms-",Ns="-moz-",Le="-webkit-",Jw="comm",qc="rule",nh="decl",dR="@import",e2="@keyframes",cR="@layer",t2=Math.abs,ih=String.fromCharCode,Rm=Object.assign;function pR(e,r){return ct(e,0)^45?(((r<<2^ct(e,0))<<2^ct(e,1))<<2^ct(e,2))<<2^ct(e,3):0}function r2(e){return e.trim()}function Br(e,r){return(e=r.exec(e))?e[0]:e}function je(e,r,i){return e.replace(r,i)}function oc(e,r,i){return e.indexOf(r,i)}function ct(e,r){return e.charCodeAt(r)|0}function _i(e,r,i){return e.slice(r,i)}function yr(e){return e.length}function n2(e){return e.length}function Ls(e,r){return r.push(e),e}function fR(e,r){return e.map(r).join("")}function y0(e,r){return e.filter(function(i){return!Br(i,r)})}var Ac=1,ji=1,i2=0,er=0,nt=0,zi="";function Lc(e,r,i,a,l,s,u,c){return{value:e,root:r,parent:i,type:a,props:l,children:s,line:Ac,column:ji,length:u,return:"",siblings:c}}function xn(e,r){return Rm(Lc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function wi(e){for(;e.root;)e=xn(e.root,{children:[e]});Ls(e,e.siblings)}function mR(){return nt}function hR(){return nt=er>0?ct(zi,--er):0,ji--,nt===10&&(ji=1,Ac--),nt}function dr(){return nt=er<i2?ct(zi,er++):0,ji++,nt===10&&(ji=1,Ac++),nt}function Vn(){return ct(zi,er)}function lc(){return er}function Nc(e,r){return _i(zi,e,r)}function Cm(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gR(e){return Ac=ji=1,i2=yr(zi=e),er=0,[]}function xR(e){return zi="",e}function Bf(e){return r2(Nc(er-1,Pm(e===91?e+2:e===40?e+1:e)))}function vR(e){for(;(nt=Vn())&&nt<33;)dr();return Cm(e)>2||Cm(nt)>3?"":" "}function bR(e,r){for(;--r&&dr()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return Nc(e,lc()+(r<6&&Vn()==32&&dr()==32))}function Pm(e){for(;dr();)switch(nt){case e:return er;case 34:case 39:e!==34&&e!==39&&Pm(nt);break;case 40:e===41&&Pm(e);break;case 92:dr();break}return er}function yR(e,r){for(;dr()&&e+nt!==57;)if(e+nt===84&&Vn()===47)break;return"/*"+Nc(r,er-1)+"*"+ih(e===47?e:dr())}function wR(e){for(;!Cm(Vn());)dr();return Nc(e,er)}function kR(e){return xR(sc("",null,null,null,[""],e=gR(e),0,[0],e))}function sc(e,r,i,a,l,s,u,c,p){for(var m=0,x=0,g=u,h=0,w=0,k=0,S=1,M=1,O=1,A=0,z="",B=l,j=s,C=a,P=z;M;)switch(k=A,A=dr()){case 40:if(k!=108&&ct(P,g-1)==58){oc(P+=je(Bf(A),"&","&\f"),"&\f",t2(m?c[m-1]:0))!=-1&&(O=-1);break}case 34:case 39:case 91:P+=Bf(A);break;case 9:case 10:case 13:case 32:P+=vR(k);break;case 92:P+=bR(lc()-1,7);continue;case 47:switch(Vn()){case 42:case 47:Ls(SR(yR(dr(),lc()),r,i,p),p);break;default:P+="/"}break;case 123*S:c[m++]=yr(P)*O;case 125*S:case 59:case 0:switch(A){case 0:case 125:M=0;case 59+x:O==-1&&(P=je(P,/\f/g,"")),w>0&&yr(P)-g&&Ls(w>32?k0(P+";",a,i,g-1,p):k0(je(P," ","")+";",a,i,g-2,p),p);break;case 59:P+=";";default:if(Ls(C=w0(P,r,i,m,x,l,c,z,B=[],j=[],g,s),s),A===123)if(x===0)sc(P,r,C,C,B,s,g,c,j);else switch(h===99&&ct(P,3)===110?100:h){case 100:case 108:case 109:case 115:sc(e,C,C,a&&Ls(w0(e,C,C,0,0,l,c,z,l,B=[],g,j),j),l,j,g,c,a?B:j);break;default:sc(P,C,C,C,[""],j,0,c,j)}}m=x=w=0,S=O=1,z=P="",g=u;break;case 58:g=1+yr(P),w=k;default:if(S<1){if(A==123)--S;else if(A==125&&S++==0&&hR()==125)continue}switch(P+=ih(A),A*S){case 38:O=x>0?1:(P+="\f",-1);break;case 44:c[m++]=(yr(P)-1)*O,O=1;break;case 64:Vn()===45&&(P+=Bf(dr())),h=Vn(),x=g=yr(z=P+=wR(lc())),A++;break;case 45:k===45&&yr(P)==2&&(S=0)}}return s}function w0(e,r,i,a,l,s,u,c,p,m,x,g){for(var h=l-1,w=l===0?s:[""],k=n2(w),S=0,M=0,O=0;S<a;++S)for(var A=0,z=_i(e,h+1,h=t2(M=u[S])),B=e;A<k;++A)(B=r2(M>0?w[A]+" "+z:je(z,/&\f/g,w[A])))&&(p[O++]=B);return Lc(e,r,i,l===0?qc:c,p,m,x,g)}function SR(e,r,i,a){return Lc(e,r,i,Jw,ih(mR()),_i(e,2,-2),0,a)}function k0(e,r,i,a,l){return Lc(e,r,i,nh,_i(e,0,a),_i(e,a+1,-1),a,l)}function a2(e,r,i){switch(pR(e,r)){case 5103:return Le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Le+e+e;case 4789:return Ns+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Le+e+Ns+e+We+e+e;case 5936:switch(ct(e,r+11)){case 114:return Le+e+We+je(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Le+e+We+je(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Le+e+We+je(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Le+e+We+e+e;case 6165:return Le+e+We+"flex-"+e+e;case 5187:return Le+e+je(e,/(\w+).+(:[^]+)/,Le+"box-$1$2"+We+"flex-$1$2")+e;case 5443:return Le+e+We+"flex-item-"+je(e,/flex-|-self/g,"")+(Br(e,/flex-|baseline/)?"":We+"grid-row-"+je(e,/flex-|-self/g,""))+e;case 4675:return Le+e+We+"flex-line-pack"+je(e,/align-content|flex-|-self/g,"")+e;case 5548:return Le+e+We+je(e,"shrink","negative")+e;case 5292:return Le+e+We+je(e,"basis","preferred-size")+e;case 6060:return Le+"box-"+je(e,"-grow","")+Le+e+We+je(e,"grow","positive")+e;case 4554:return Le+je(e,/([^-])(transform)/g,"$1"+Le+"$2")+e;case 6187:return je(je(je(e,/(zoom-|grab)/,Le+"$1"),/(image-set)/,Le+"$1"),e,"")+e;case 5495:case 3959:return je(e,/(image-set\([^]*)/,Le+"$1$`$1");case 4968:return je(je(e,/(.+:)(flex-)?(.*)/,Le+"box-pack:$3"+We+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Le+e+e;case 4200:if(!Br(e,/flex-|baseline/))return We+"grid-column-align"+_i(e,r)+e;break;case 2592:case 3360:return We+je(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,l){return r=l,Br(a.props,/grid-\w+-end/)})?~oc(e+(i=i[r].value),"span",0)?e:We+je(e,"-start","")+e+We+"grid-row-span:"+(~oc(i,"span",0)?Br(i,/\d+/):+Br(i,/\d+/)-+Br(e,/\d+/))+";":We+je(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return Br(a.props,/grid-\w+-start/)})?e:We+je(je(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return je(e,/(.+)-inline(.+)/,Le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yr(e)-1-r>6)switch(ct(e,r+1)){case 109:if(ct(e,r+4)!==45)break;case 102:return je(e,/(.+:)(.+)-([^]+)/,"$1"+Le+"$2-$3$1"+Ns+(ct(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~oc(e,"stretch",0)?a2(je(e,"stretch","fill-available"),r,i)+e:e}break;case 5152:case 5920:return je(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,l,s,u,c,p,m){return We+l+":"+s+m+(u?We+l+"-span:"+(c?p:+p-+s)+m:"")+e});case 4949:if(ct(e,r+6)===121)return je(e,":",":"+Le)+e;break;case 6444:switch(ct(e,ct(e,14)===45?18:11)){case 120:return je(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Le+(ct(e,14)===45?"inline-":"")+"box$3$1"+Le+"$2$3$1"+We+"$2box$3")+e;case 100:return je(e,":",":"+We)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return je(e,"scroll-","scroll-snap-")+e}return e}function xc(e,r){for(var i="",a=0;a<e.length;a++)i+=r(e[a],a,e,r)||"";return i}function ER(e,r,i,a){switch(e.type){case cR:if(e.children.length)break;case dR:case nh:return e.return=e.return||e.value;case Jw:return"";case e2:return e.return=e.value+"{"+xc(e.children,a)+"}";case qc:if(!yr(e.value=e.props.join(",")))return""}return yr(i=xc(e.children,a))?e.return=e.value+"{"+i+"}":""}function RR(e){var r=n2(e);return function(i,a,l,s){for(var u="",c=0;c<r;c++)u+=e[c](i,a,l,s)||"";return u}}function CR(e){return function(r){r.root||(r=r.return)&&e(r)}}function PR(e,r,i,a){if(e.length>-1&&!e.return)switch(e.type){case nh:e.return=a2(e.value,e.length,i);return;case e2:return xc([xn(e,{value:je(e.value,"@","@"+Le)})],a);case qc:if(e.length)return fR(i=e.props,function(l){switch(Br(l,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wi(xn(e,{props:[je(l,/:(read-\w+)/,":"+Ns+"$1")]})),wi(xn(e,{props:[l]})),Rm(e,{props:y0(i,a)});break;case"::placeholder":wi(xn(e,{props:[je(l,/:(plac\w+)/,":"+Le+"input-$1")]})),wi(xn(e,{props:[je(l,/:(plac\w+)/,":"+Ns+"$1")]})),wi(xn(e,{props:[je(l,/:(plac\w+)/,We+"input-$1")]})),wi(xn(e,{props:[l]})),Rm(e,{props:y0(i,a)});break}return""})}}var OR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vt={},Ti=typeof process<"u"&&Vt!==void 0&&(Vt.REACT_APP_SC_ATTR||Vt.SC_ATTR)||"data-styled",o2="active",l2="data-styled-version",zc="6.1.19",ah=`/*!sc*/
`,vc=typeof window<"u"&&typeof document<"u",_R=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==""?Vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.SC_DISABLE_SPEEDY!==void 0&&Vt.SC_DISABLE_SPEEDY!==""&&Vt.SC_DISABLE_SPEEDY!=="false"&&Vt.SC_DISABLE_SPEEDY),Ic=Object.freeze([]),Mi=Object.freeze({});function jR(e,r,i){return i===void 0&&(i=Mi),e.theme!==i.theme&&e.theme||r||i.theme}var s2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),TR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,MR=/(^-|-$)/g;function S0(e){return e.replace(TR,"-").replace(MR,"")}var qR=/(a)(d)/gi,yd=52,E0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Om(e){var r,i="";for(r=Math.abs(e);r>yd;r=r/yd|0)i=E0(r%yd)+i;return(E0(r%yd)+i).replace(qR,"$1-$2")}var $f,u2=5381,Oi=function(e,r){for(var i=r.length;i;)e=33*e^r.charCodeAt(--i);return e},d2=function(e){return Oi(u2,e)};function c2(e){return Om(d2(e)>>>0)}function AR(e){return e.displayName||e.name||"Component"}function Ff(e){return typeof e=="string"&&!0}var p2=typeof Symbol=="function"&&Symbol.for,f2=p2?Symbol.for("react.memo"):60115,LR=p2?Symbol.for("react.forward_ref"):60112,NR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},IR=(($f={})[LR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$f[f2]=m2,$f);function R0(e){return("type"in(r=e)&&r.type.$$typeof)===f2?m2:"$$typeof"in e?IR[e.$$typeof]:NR;var r}var DR=Object.defineProperty,BR=Object.getOwnPropertyNames,C0=Object.getOwnPropertySymbols,$R=Object.getOwnPropertyDescriptor,FR=Object.getPrototypeOf,P0=Object.prototype;function h2(e,r,i){if(typeof r!="string"){if(P0){var a=FR(r);a&&a!==P0&&h2(e,a,i)}var l=BR(r);C0&&(l=l.concat(C0(r)));for(var s=R0(e),u=R0(r),c=0;c<l.length;++c){var p=l[c];if(!(p in zR||i&&i[p]||u&&p in u||s&&p in s)){var m=$R(r,p);try{DR(e,p,m)}catch{}}}}return e}function qi(e){return typeof e=="function"}function oh(e){return typeof e=="object"&&"styledComponentId"in e}function Fn(e,r){return e&&r?"".concat(e," ").concat(r):e||r||""}function _m(e,r){if(e.length===0)return"";for(var i=e[0],a=1;a<e.length;a++)i+=e[a];return i}function Bs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function jm(e,r,i){if(i===void 0&&(i=!1),!i&&!Bs(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(var a=0;a<r.length;a++)e[a]=jm(e[a],r[a]);else if(Bs(r))for(var a in r)e[a]=jm(e[a],r[a]);return e}function lh(e,r){Object.defineProperty(e,"toString",{value:r})}function Ys(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var VR=(function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return e.prototype.indexOfGroup=function(r){for(var i=0,a=0;a<r;a++)i+=this.groupSizes[a];return i},e.prototype.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var a=this.groupSizes,l=a.length,s=l;r>=s;)if((s<<=1)<0)throw Ys(16,"".concat(r));this.groupSizes=new Uint32Array(s),this.groupSizes.set(a),this.length=s;for(var u=l;u<s;u++)this.groupSizes[u]=0}for(var c=this.indexOfGroup(r+1),p=(u=0,i.length);u<p;u++)this.tag.insertRule(c,i[u])&&(this.groupSizes[r]++,c++)},e.prototype.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],a=this.indexOfGroup(r),l=a+i;this.groupSizes[r]=0;for(var s=a;s<l;s++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var a=this.groupSizes[r],l=this.indexOfGroup(r),s=l+a,u=l;u<s;u++)i+="".concat(this.tag.getRule(u)).concat(ah);return i},e})(),uc=new Map,bc=new Map,dc=1,wd=function(e){if(uc.has(e))return uc.get(e);for(;bc.has(dc);)dc++;var r=dc++;return uc.set(e,r),bc.set(r,e),r},HR=function(e,r){dc=r+1,uc.set(e,r),bc.set(r,e)},WR="style[".concat(Ti,"][").concat(l2,'="').concat(zc,'"]'),UR=new RegExp("^".concat(Ti,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),KR=function(e,r,i){for(var a,l=i.split(","),s=0,u=l.length;s<u;s++)(a=l[s])&&e.registerName(r,a)},YR=function(e,r){for(var i,a=((i=r.textContent)!==null&&i!==void 0?i:"").split(ah),l=[],s=0,u=a.length;s<u;s++){var c=a[s].trim();if(c){var p=c.match(UR);if(p){var m=0|parseInt(p[1],10),x=p[2];m!==0&&(HR(x,m),KR(e,x,p[3]),e.getTag().insertRules(m,l)),l.length=0}else l.push(c)}}},O0=function(e){for(var r=document.querySelectorAll(WR),i=0,a=r.length;i<a;i++){var l=r[i];l&&l.getAttribute(Ti)!==o2&&(YR(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function GR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var g2=function(e){var r=document.head,i=e||r,a=document.createElement("style"),l=(function(c){var p=Array.from(c.querySelectorAll("style[".concat(Ti,"]")));return p[p.length-1]})(i),s=l!==void 0?l.nextSibling:null;a.setAttribute(Ti,o2),a.setAttribute(l2,zc);var u=GR();return u&&a.setAttribute("nonce",u),i.insertBefore(a,s),a},XR=(function(){function e(r){this.element=g2(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,l=0,s=a.length;l<s;l++){var u=a[l];if(u.ownerNode===i)return u}throw Ys(17)})(this.element),this.length=0}return e.prototype.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.prototype.getRule=function(r){var i=this.sheet.cssRules[r];return i&&i.cssText?i.cssText:""},e})(),QR=(function(){function e(r){this.element=g2(r),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(r,i){if(r<=this.length&&r>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[r]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e})(),ZR=(function(){function e(r){this.rules=[],this.length=0}return e.prototype.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},e.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},e})(),_0=vc,JR={isServer:!vc,useCSSOMInjection:!_R},x2=(function(){function e(r,i,a){r===void 0&&(r=Mi),i===void 0&&(i={});var l=this;this.options=qt(qt({},JR),r),this.gs=i,this.names=new Map(a),this.server=!!r.isServer,!this.server&&vc&&_0&&(_0=!1,O0(this)),lh(this,function(){return(function(s){for(var u=s.getTag(),c=u.length,p="",m=function(g){var h=(function(O){return bc.get(O)})(g);if(h===void 0)return"continue";var w=s.names.get(h),k=u.getGroup(g);if(w===void 0||!w.size||k.length===0)return"continue";var S="".concat(Ti,".g").concat(g,'[id="').concat(h,'"]'),M="";w!==void 0&&w.forEach(function(O){O.length>0&&(M+="".concat(O,","))}),p+="".concat(k).concat(S,'{content:"').concat(M,'"}').concat(ah)},x=0;x<c;x++)m(x);return p})(l)})}return e.registerId=function(r){return wd(r)},e.prototype.rehydrate=function(){!this.server&&vc&&O0(this)},e.prototype.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new e(qt(qt({},this.options),r),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(i){var a=i.useCSSOMInjection,l=i.target;return i.isServer?new ZR(l):a?new XR(l):new QR(l)})(this.options),new VR(r)));var r},e.prototype.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},e.prototype.registerName=function(r,i){if(wd(r),this.names.has(r))this.names.get(r).add(i);else{var a=new Set;a.add(i),this.names.set(r,a)}},e.prototype.insertRules=function(r,i,a){this.registerName(r,i),this.getTag().insertRules(wd(r),a)},e.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.prototype.clearRules=function(r){this.getTag().clearGroup(wd(r)),this.clearNames(r)},e.prototype.clearTag=function(){this.tag=void 0},e})(),e3=/&/g,t3=/^\s*\/\/.*$/gm;function v2(e,r){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(r," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(r," ")),i.props=i.props.map(function(a){return"".concat(r," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=v2(i.children,r)),i})}function r3(e){var r,i,a,l=Mi,s=l.options,u=s===void 0?Mi:s,c=l.plugins,p=c===void 0?Ic:c,m=function(h,w,k){return k.startsWith(i)&&k.endsWith(i)&&k.replaceAll(i,"").length>0?".".concat(r):h},x=p.slice();x.push(function(h){h.type===qc&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(e3,i).replace(a,m))}),u.prefix&&x.push(PR),x.push(ER);var g=function(h,w,k,S){w===void 0&&(w=""),k===void 0&&(k=""),S===void 0&&(S="&"),r=S,i=w,a=new RegExp("\\".concat(i,"\\b"),"g");var M=h.replace(t3,""),O=kR(k||w?"".concat(k," ").concat(w," { ").concat(M," }"):M);u.namespace&&(O=v2(O,u.namespace));var A=[];return xc(O,RR(x.concat(CR(function(z){return A.push(z)})))),A};return g.hash=p.length?p.reduce(function(h,w){return w.name||Ys(15),Oi(h,w.name)},u2).toString():"",g}var n3=new x2,Tm=r3(),b2=it.createContext({shouldForwardProp:void 0,styleSheet:n3,stylis:Tm});b2.Consumer;it.createContext(void 0);function j0(){return de.useContext(b2)}var y2=(function(){function e(r,i){var a=this;this.inject=function(l,s){s===void 0&&(s=Tm);var u=a.name+s.hash;l.hasNameForId(a.id,u)||l.insertRules(a.id,u,s(a.rules,u,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=i,lh(this,function(){throw Ys(12,String(a.name))})}return e.prototype.getName=function(r){return r===void 0&&(r=Tm),this.name+r.hash},e})(),i3=function(e){return e>="A"&&e<="Z"};function T0(e){for(var r="",i=0;i<e.length;i++){var a=e[i];if(i===1&&a==="-"&&e[0]==="-")return e;i3(a)?r+="-"+a.toLowerCase():r+=a}return r.startsWith("ms-")?"-"+r:r}var w2=function(e){return e==null||e===!1||e===""},k2=function(e){var r,i,a=[];for(var l in e){var s=e[l];e.hasOwnProperty(l)&&!w2(s)&&(Array.isArray(s)&&s.isCss||qi(s)?a.push("".concat(T0(l),":"),s,";"):Bs(s)?a.push.apply(a,Ds(Ds(["".concat(l," {")],k2(s),!1),["}"],!1)):a.push("".concat(T0(l),": ").concat((r=l,(i=s)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||r in OR||r.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Hn(e,r,i,a){if(w2(e))return[];if(oh(e))return[".".concat(e.styledComponentId)];if(qi(e)){if(!qi(s=e)||s.prototype&&s.prototype.isReactComponent||!r)return[e];var l=e(r);return Hn(l,r,i,a)}var s;return e instanceof y2?i?(e.inject(i,a),[e.getName(a)]):[e]:Bs(e)?k2(e):Array.isArray(e)?Array.prototype.concat.apply(Ic,e.map(function(u){return Hn(u,r,i,a)})):[e.toString()]}function a3(e){for(var r=0;r<e.length;r+=1){var i=e[r];if(qi(i)&&!oh(i))return!1}return!0}var o3=d2(zc),l3=(function(){function e(r,i,a){this.rules=r,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&a3(r),this.componentId=i,this.baseHash=Oi(o3,i),this.baseStyle=a,x2.registerId(i)}return e.prototype.generateAndInjectStyles=function(r,i,a){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))l=Fn(l,this.staticRulesId);else{var s=_m(Hn(this.rules,r,i,a)),u=Om(Oi(this.baseHash,s)>>>0);if(!i.hasNameForId(this.componentId,u)){var c=a(s,".".concat(u),void 0,this.componentId);i.insertRules(this.componentId,u,c)}l=Fn(l,u),this.staticRulesId=u}else{for(var p=Oi(this.baseHash,a.hash),m="",x=0;x<this.rules.length;x++){var g=this.rules[x];if(typeof g=="string")m+=g;else if(g){var h=_m(Hn(g,r,i,a));p=Oi(p,h+x),m+=h}}if(m){var w=Om(p>>>0);i.hasNameForId(this.componentId,w)||i.insertRules(this.componentId,w,a(m,".".concat(w),void 0,this.componentId)),l=Fn(l,w)}}return l},e})(),S2=it.createContext(void 0);S2.Consumer;var Vf={};function s3(e,r,i){var a=oh(e),l=e,s=!Ff(e),u=r.attrs,c=u===void 0?Ic:u,p=r.componentId,m=p===void 0?(function(B,j){var C=typeof B!="string"?"sc":S0(B);Vf[C]=(Vf[C]||0)+1;var P="".concat(C,"-").concat(c2(zc+C+Vf[C]));return j?"".concat(j,"-").concat(P):P})(r.displayName,r.parentComponentId):p,x=r.displayName,g=x===void 0?(function(B){return Ff(B)?"styled.".concat(B):"Styled(".concat(AR(B),")")})(e):x,h=r.displayName&&r.componentId?"".concat(S0(r.displayName),"-").concat(r.componentId):r.componentId||m,w=a&&l.attrs?l.attrs.concat(c).filter(Boolean):c,k=r.shouldForwardProp;if(a&&l.shouldForwardProp){var S=l.shouldForwardProp;if(r.shouldForwardProp){var M=r.shouldForwardProp;k=function(B,j){return S(B,j)&&M(B,j)}}else k=S}var O=new l3(i,h,a?l.componentStyle:void 0);function A(B,j){return(function(C,P,L){var q=C.attrs,b=C.componentStyle,W=C.defaultProps,Y=C.foldedComponentIds,N=C.styledComponentId,F=C.target,ie=it.useContext(S2),ee=j0(),R=C.shouldForwardProp||ee.shouldForwardProp,te=jR(P,ie,W)||Mi,D=(function(ne,re,ae){for(var me,V=qt(qt({},re),{className:void 0,theme:ae}),oe=0;oe<ne.length;oe+=1){var fe=qi(me=ne[oe])?me(V):me;for(var ge in fe)V[ge]=ge==="className"?Fn(V[ge],fe[ge]):ge==="style"?qt(qt({},V[ge]),fe[ge]):fe[ge]}return re.className&&(V.className=Fn(V.className,re.className)),V})(q,P,te),E=D.as||F,_={};for(var I in D)D[I]===void 0||I[0]==="$"||I==="as"||I==="theme"&&D.theme===te||(I==="forwardedAs"?_.as=D.forwardedAs:R&&!R(I,E)||(_[I]=D[I]));var G=(function(ne,re){var ae=j0(),me=ne.generateAndInjectStyles(re,ae.styleSheet,ae.stylis);return me})(b,D),Z=Fn(Y,N);return G&&(Z+=" "+G),D.className&&(Z+=" "+D.className),_[Ff(E)&&!s2.has(E)?"class":"className"]=Z,L&&(_.ref=L),de.createElement(E,_)})(z,B,j)}A.displayName=g;var z=it.forwardRef(A);return z.attrs=w,z.componentStyle=O,z.displayName=g,z.shouldForwardProp=k,z.foldedComponentIds=a?Fn(l.foldedComponentIds,l.styledComponentId):"",z.styledComponentId=h,z.target=a?l.target:e,Object.defineProperty(z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(B){this._foldedDefaultProps=a?(function(j){for(var C=[],P=1;P<arguments.length;P++)C[P-1]=arguments[P];for(var L=0,q=C;L<q.length;L++)jm(j,q[L],!0);return j})({},l.defaultProps,B):B}}),lh(z,function(){return".".concat(z.styledComponentId)}),s&&h2(z,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),z}function M0(e,r){for(var i=[e[0]],a=0,l=r.length;a<l;a+=1)i.push(r[a],e[a+1]);return i}var q0=function(e){return Object.assign(e,{isCss:!0})};function E2(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(qi(e)||Bs(e))return q0(Hn(M0(Ic,Ds([e],r,!0))));var a=e;return r.length===0&&a.length===1&&typeof a[0]=="string"?Hn(a):q0(Hn(M0(a,r)))}function Mm(e,r,i){if(i===void 0&&(i=Mi),!r)throw Ys(1,r);var a=function(l){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];return e(r,i,E2.apply(void 0,Ds([l],s,!1)))};return a.attrs=function(l){return Mm(e,r,qt(qt({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},a.withConfig=function(l){return Mm(e,r,qt(qt({},i),l))},a}var R2=function(e){return Mm(s3,e)},U=R2;s2.forEach(function(e){U[e]=R2(e)});function Vr(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var a=_m(E2.apply(void 0,Ds([e],r,!1))),l=c2(a);return new y2(l,a)}const _e=e=>typeof e=="string",Oa=()=>{let e,r;const i=new Promise((a,l)=>{e=a,r=l});return i.resolve=e,i.reject=r,i},A0=e=>e==null?"":""+e,u3=(e,r,i)=>{e.forEach(a=>{r[a]&&(i[a]=r[a])})},d3=/###/g,L0=e=>e&&e.indexOf("###")>-1?e.replace(d3,"."):e,N0=e=>!e||_e(e),zs=(e,r,i)=>{const a=_e(r)?r.split("."):r;let l=0;for(;l<a.length-1;){if(N0(e))return{};const s=L0(a[l]);!e[s]&&i&&(e[s]=new i),Object.prototype.hasOwnProperty.call(e,s)?e=e[s]:e={},++l}return N0(e)?{}:{obj:e,k:L0(a[l])}},z0=(e,r,i)=>{const{obj:a,k:l}=zs(e,r,Object);if(a!==void 0||r.length===1){a[l]=i;return}let s=r[r.length-1],u=r.slice(0,r.length-1),c=zs(e,u,Object);for(;c.obj===void 0&&u.length;)s=`${u[u.length-1]}.${s}`,u=u.slice(0,u.length-1),c=zs(e,u,Object),c!=null&&c.obj&&typeof c.obj[`${c.k}.${s}`]<"u"&&(c.obj=void 0);c.obj[`${c.k}.${s}`]=i},c3=(e,r,i,a)=>{const{obj:l,k:s}=zs(e,r,Object);l[s]=l[s]||[],l[s].push(i)},yc=(e,r)=>{const{obj:i,k:a}=zs(e,r);if(i&&Object.prototype.hasOwnProperty.call(i,a))return i[a]},p3=(e,r,i)=>{const a=yc(e,i);return a!==void 0?a:yc(r,i)},C2=(e,r,i)=>{for(const a in r)a!=="__proto__"&&a!=="constructor"&&(a in e?_e(e[a])||e[a]instanceof String||_e(r[a])||r[a]instanceof String?i&&(e[a]=r[a]):C2(e[a],r[a],i):e[a]=r[a]);return e},ki=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var f3={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const m3=e=>_e(e)?e.replace(/[&<>"'\/]/g,r=>f3[r]):e;class h3{constructor(r){this.capacity=r,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(r){const i=this.regExpMap.get(r);if(i!==void 0)return i;const a=new RegExp(r);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(r,a),this.regExpQueue.push(r),a}}const g3=[" ",",","?","!",";"],x3=new h3(20),v3=(e,r,i)=>{r=r||"",i=i||"";const a=g3.filter(u=>r.indexOf(u)<0&&i.indexOf(u)<0);if(a.length===0)return!0;const l=x3.getRegExp(`(${a.map(u=>u==="?"?"\\?":u).join("|")})`);let s=!l.test(e);if(!s){const u=e.indexOf(i);u>0&&!l.test(e.substring(0,u))&&(s=!0)}return s},qm=(e,r,i=".")=>{if(!e)return;if(e[r])return Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;const a=r.split(i);let l=e;for(let s=0;s<a.length;){if(!l||typeof l!="object")return;let u,c="";for(let p=s;p<a.length;++p)if(p!==s&&(c+=i),c+=a[p],u=l[c],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&p<a.length-1)continue;s+=p-s+1;break}l=u}return l},$s=e=>e==null?void 0:e.replace("_","-"),b3={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,r){var i,a;(a=(i=console==null?void 0:console[e])==null?void 0:i.apply)==null||a.call(i,console,r)}};class wc{constructor(r,i={}){this.init(r,i)}init(r,i={}){this.prefix=i.prefix||"i18next:",this.logger=r||b3,this.options=i,this.debug=i.debug}log(...r){return this.forward(r,"log","",!0)}warn(...r){return this.forward(r,"warn","",!0)}error(...r){return this.forward(r,"error","")}deprecate(...r){return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}forward(r,i,a,l){return l&&!this.debug?null:(_e(r[0])&&(r[0]=`${a}${this.prefix} ${r[0]}`),this.logger[i](r))}create(r){return new wc(this.logger,{prefix:`${this.prefix}:${r}:`,...this.options})}clone(r){return r=r||this.options,r.prefix=r.prefix||this.prefix,new wc(this.logger,r)}}var wr=new wc;class Dc{constructor(){this.observers={}}on(r,i){return r.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const l=this.observers[a].get(i)||0;this.observers[a].set(i,l+1)}),this}off(r,i){if(this.observers[r]){if(!i){delete this.observers[r];return}this.observers[r].delete(i)}}emit(r,...i){this.observers[r]&&Array.from(this.observers[r].entries()).forEach(([l,s])=>{for(let u=0;u<s;u++)l(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([l,s])=>{for(let u=0;u<s;u++)l.apply(l,[r,...i])})}}class I0 extends Dc{constructor(r,i={ns:["translation"],defaultNS:"translation"}){super(),this.data=r||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(r){this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}removeNamespaces(r){const i=this.options.ns.indexOf(r);i>-1&&this.options.ns.splice(i,1)}getResource(r,i,a,l={}){var m,x;const s=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,u=l.ignoreJSONStructure!==void 0?l.ignoreJSONStructure:this.options.ignoreJSONStructure;let c;r.indexOf(".")>-1?c=r.split("."):(c=[r,i],a&&(Array.isArray(a)?c.push(...a):_e(a)&&s?c.push(...a.split(s)):c.push(a)));const p=yc(this.data,c);return!p&&!i&&!a&&r.indexOf(".")>-1&&(r=c[0],i=c[1],a=c.slice(2).join(".")),p||!u||!_e(a)?p:qm((x=(m=this.data)==null?void 0:m[r])==null?void 0:x[i],a,s)}addResource(r,i,a,l,s={silent:!1}){const u=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let c=[r,i];a&&(c=c.concat(u?a.split(u):a)),r.indexOf(".")>-1&&(c=r.split("."),l=i,i=c[1]),this.addNamespaces(i),z0(this.data,c,l),s.silent||this.emit("added",r,i,a,l)}addResources(r,i,a,l={silent:!1}){for(const s in a)(_e(a[s])||Array.isArray(a[s]))&&this.addResource(r,i,s,a[s],{silent:!0});l.silent||this.emit("added",r,i,a)}addResourceBundle(r,i,a,l,s,u={silent:!1,skipCopy:!1}){let c=[r,i];r.indexOf(".")>-1&&(c=r.split("."),l=a,a=i,i=c[1]),this.addNamespaces(i);let p=yc(this.data,c)||{};u.skipCopy||(a=JSON.parse(JSON.stringify(a))),l?C2(p,a,s):p={...p,...a},z0(this.data,c,p),u.silent||this.emit("added",r,i,a)}removeResourceBundle(r,i){this.hasResourceBundle(r,i)&&delete this.data[r][i],this.removeNamespaces(i),this.emit("removed",r,i)}hasResourceBundle(r,i){return this.getResource(r,i)!==void 0}getResourceBundle(r,i){return i||(i=this.options.defaultNS),this.getResource(r,i)}getDataByLanguage(r){return this.data[r]}hasLanguageSomeTranslations(r){const i=this.getDataByLanguage(r);return!!(i&&Object.keys(i)||[]).find(l=>i[l]&&Object.keys(i[l]).length>0)}toJSON(){return this.data}}var P2={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,r,i,a,l){return e.forEach(s=>{var u;r=((u=this.processors[s])==null?void 0:u.process(r,i,a,l))??r}),r}};const O2=Symbol("i18next/PATH_KEY");function y3(){const e=[],r=Object.create(null);let i;return r.get=(a,l)=>{var s;return(s=i==null?void 0:i.revoke)==null||s.call(i),l===O2?e:(e.push(l),i=Proxy.revocable(a,r),i.proxy)},Proxy.revocable(Object.create(null),r).proxy}function Am(e,r){const{[O2]:i}=e(y3());return i.join((r==null?void 0:r.keySeparator)??".")}const D0={},Hf=e=>!_e(e)&&typeof e!="boolean"&&typeof e!="number";class kc extends Dc{constructor(r,i={}){super(),u3(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=wr.create("translator")}changeLanguage(r){r&&(this.language=r)}exists(r,i={interpolation:{}}){const a={...i};if(r==null)return!1;const l=this.resolve(r,a);if((l==null?void 0:l.res)===void 0)return!1;const s=Hf(l.res);return!(a.returnObjects===!1&&s)}extractFromKey(r,i){let a=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let s=i.ns||this.options.defaultNS||[];const u=a&&r.indexOf(a)>-1,c=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!v3(r,a,l);if(u&&!c){const p=r.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:r,namespaces:_e(s)?[s]:s};const m=r.split(a);(a!==l||a===l&&this.options.ns.indexOf(m[0])>-1)&&(s=m.shift()),r=m.join(l)}return{key:r,namespaces:_e(s)?[s]:s}}translate(r,i,a){let l=typeof i=="object"?{...i}:i;if(typeof l!="object"&&this.options.overloadTranslationOptionHandler&&(l=this.options.overloadTranslationOptionHandler(arguments)),typeof l=="object"&&(l={...l}),l||(l={}),r==null)return"";typeof r=="function"&&(r=Am(r,{...this.options,...l})),Array.isArray(r)||(r=[String(r)]);const s=l.returnDetails!==void 0?l.returnDetails:this.options.returnDetails,u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,{key:c,namespaces:p}=this.extractFromKey(r[r.length-1],l),m=p[p.length-1];let x=l.nsSeparator!==void 0?l.nsSeparator:this.options.nsSeparator;x===void 0&&(x=":");const g=l.lng||this.language,h=l.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((g==null?void 0:g.toLowerCase())==="cimode")return h?s?{res:`${m}${x}${c}`,usedKey:c,exactUsedKey:c,usedLng:g,usedNS:m,usedParams:this.getUsedParamsDetails(l)}:`${m}${x}${c}`:s?{res:c,usedKey:c,exactUsedKey:c,usedLng:g,usedNS:m,usedParams:this.getUsedParamsDetails(l)}:c;const w=this.resolve(r,l);let k=w==null?void 0:w.res;const S=(w==null?void 0:w.usedKey)||c,M=(w==null?void 0:w.exactUsedKey)||c,O=["[object Number]","[object Function]","[object RegExp]"],A=l.joinArrays!==void 0?l.joinArrays:this.options.joinArrays,z=!this.i18nFormat||this.i18nFormat.handleAsObject,B=l.count!==void 0&&!_e(l.count),j=kc.hasDefaultValue(l),C=B?this.pluralResolver.getSuffix(g,l.count,l):"",P=l.ordinal&&B?this.pluralResolver.getSuffix(g,l.count,{ordinal:!1}):"",L=B&&!l.ordinal&&l.count===0,q=L&&l[`defaultValue${this.options.pluralSeparator}zero`]||l[`defaultValue${C}`]||l[`defaultValue${P}`]||l.defaultValue;let b=k;z&&!k&&j&&(b=q);const W=Hf(b),Y=Object.prototype.toString.apply(b);if(z&&b&&W&&O.indexOf(Y)<0&&!(_e(A)&&Array.isArray(b))){if(!l.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const N=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,b,{...l,ns:p}):`key '${c} (${this.language})' returned an object instead of string.`;return s?(w.res=N,w.usedParams=this.getUsedParamsDetails(l),w):N}if(u){const N=Array.isArray(b),F=N?[]:{},ie=N?M:S;for(const ee in b)if(Object.prototype.hasOwnProperty.call(b,ee)){const R=`${ie}${u}${ee}`;j&&!k?F[ee]=this.translate(R,{...l,defaultValue:Hf(q)?q[ee]:void 0,joinArrays:!1,ns:p}):F[ee]=this.translate(R,{...l,joinArrays:!1,ns:p}),F[ee]===R&&(F[ee]=b[ee])}k=F}}else if(z&&_e(A)&&Array.isArray(k))k=k.join(A),k&&(k=this.extendTranslation(k,r,l,a));else{let N=!1,F=!1;!this.isValidLookup(k)&&j&&(N=!0,k=q),this.isValidLookup(k)||(F=!0,k=c);const ee=(l.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&F?void 0:k,R=j&&q!==k&&this.options.updateMissing;if(F||N||R){if(this.logger.log(R?"updateKey":"missingKey",g,m,c,R?q:k),u){const _=this.resolve(c,{...l,keySeparator:!1});_&&_.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let te=[];const D=this.languageUtils.getFallbackCodes(this.options.fallbackLng,l.lng||this.language);if(this.options.saveMissingTo==="fallback"&&D&&D[0])for(let _=0;_<D.length;_++)te.push(D[_]);else this.options.saveMissingTo==="all"?te=this.languageUtils.toResolveHierarchy(l.lng||this.language):te.push(l.lng||this.language);const E=(_,I,G)=>{var ne;const Z=j&&G!==k?G:ee;this.options.missingKeyHandler?this.options.missingKeyHandler(_,m,I,Z,R,l):(ne=this.backendConnector)!=null&&ne.saveMissing&&this.backendConnector.saveMissing(_,m,I,Z,R,l),this.emit("missingKey",_,m,I,k)};this.options.saveMissing&&(this.options.saveMissingPlurals&&B?te.forEach(_=>{const I=this.pluralResolver.getSuffixes(_,l);L&&l[`defaultValue${this.options.pluralSeparator}zero`]&&I.indexOf(`${this.options.pluralSeparator}zero`)<0&&I.push(`${this.options.pluralSeparator}zero`),I.forEach(G=>{E([_],c+G,l[`defaultValue${G}`]||q)})}):E(te,c,q))}k=this.extendTranslation(k,r,l,w,a),F&&k===c&&this.options.appendNamespaceToMissingKey&&(k=`${m}${x}${c}`),(F||N)&&this.options.parseMissingKeyHandler&&(k=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${m}${x}${c}`:c,N?k:void 0,l))}return s?(w.res=k,w.usedParams=this.getUsedParamsDetails(l),w):k}extendTranslation(r,i,a,l,s){var p,m;if((p=this.i18nFormat)!=null&&p.parse)r=this.i18nFormat.parse(r,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||l.usedLng,l.usedNS,l.usedKey,{resolved:l});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const x=_e(r)&&(((m=a==null?void 0:a.interpolation)==null?void 0:m.skipOnVariables)!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let g;if(x){const w=r.match(this.interpolator.nestingRegexp);g=w&&w.length}let h=a.replace&&!_e(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),r=this.interpolator.interpolate(r,h,a.lng||this.language||l.usedLng,a),x){const w=r.match(this.interpolator.nestingRegexp),k=w&&w.length;g<k&&(a.nest=!1)}!a.lng&&l&&l.res&&(a.lng=this.language||l.usedLng),a.nest!==!1&&(r=this.interpolator.nest(r,(...w)=>(s==null?void 0:s[0])===w[0]&&!a.context?(this.logger.warn(`It seems you are nesting recursively key: ${w[0]} in key: ${i[0]}`),null):this.translate(...w,i),a)),a.interpolation&&this.interpolator.reset()}const u=a.postProcess||this.options.postProcess,c=_e(u)?[u]:u;return r!=null&&(c!=null&&c.length)&&a.applyPostProcessor!==!1&&(r=P2.handle(c,r,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...l,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),r}resolve(r,i={}){let a,l,s,u,c;return _e(r)&&(r=[r]),r.forEach(p=>{if(this.isValidLookup(a))return;const m=this.extractFromKey(p,i),x=m.key;l=x;let g=m.namespaces;this.options.fallbackNS&&(g=g.concat(this.options.fallbackNS));const h=i.count!==void 0&&!_e(i.count),w=h&&!i.ordinal&&i.count===0,k=i.context!==void 0&&(_e(i.context)||typeof i.context=="number")&&i.context!=="",S=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);g.forEach(M=>{var O,A;this.isValidLookup(a)||(c=M,!D0[`${S[0]}-${M}`]&&((O=this.utils)!=null&&O.hasLoadedNamespace)&&!((A=this.utils)!=null&&A.hasLoadedNamespace(c))&&(D0[`${S[0]}-${M}`]=!0,this.logger.warn(`key "${l}" for languages "${S.join(", ")}" won't get resolved as namespace "${c}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(z=>{var C;if(this.isValidLookup(a))return;u=z;const B=[x];if((C=this.i18nFormat)!=null&&C.addLookupKeys)this.i18nFormat.addLookupKeys(B,x,z,M,i);else{let P;h&&(P=this.pluralResolver.getSuffix(z,i.count,i));const L=`${this.options.pluralSeparator}zero`,q=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(i.ordinal&&P.indexOf(q)===0&&B.push(x+P.replace(q,this.options.pluralSeparator)),B.push(x+P),w&&B.push(x+L)),k){const b=`${x}${this.options.contextSeparator||"_"}${i.context}`;B.push(b),h&&(i.ordinal&&P.indexOf(q)===0&&B.push(b+P.replace(q,this.options.pluralSeparator)),B.push(b+P),w&&B.push(b+L))}}let j;for(;j=B.pop();)this.isValidLookup(a)||(s=j,a=this.getResource(z,M,j,i))}))})}),{res:a,usedKey:l,exactUsedKey:s,usedLng:u,usedNS:c}}isValidLookup(r){return r!==void 0&&!(!this.options.returnNull&&r===null)&&!(!this.options.returnEmptyString&&r==="")}getResource(r,i,a,l={}){var s;return(s=this.i18nFormat)!=null&&s.getResource?this.i18nFormat.getResource(r,i,a,l):this.resourceStore.getResource(r,i,a,l)}getUsedParamsDetails(r={}){const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=r.replace&&!_e(r.replace);let l=a?r.replace:r;if(a&&typeof r.count<"u"&&(l.count=r.count),this.options.interpolation.defaultVariables&&(l={...this.options.interpolation.defaultVariables,...l}),!a){l={...l};for(const s of i)delete l[s]}return l}static hasDefaultValue(r){const i="defaultValue";for(const a in r)if(Object.prototype.hasOwnProperty.call(r,a)&&i===a.substring(0,i.length)&&r[a]!==void 0)return!0;return!1}}class B0{constructor(r){this.options=r,this.supportedLngs=this.options.supportedLngs||!1,this.logger=wr.create("languageUtils")}getScriptPartFromCode(r){if(r=$s(r),!r||r.indexOf("-")<0)return null;const i=r.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(r){if(r=$s(r),!r||r.indexOf("-")<0)return r;const i=r.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(r){if(_e(r)&&r.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(r)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?r.toLowerCase():r)}return this.options.cleanCode||this.options.lowerCaseLng?r.toLowerCase():r}isSupportedCode(r){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(r=this.getLanguagePartFromCode(r)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(r)>-1}getBestMatchFromCodes(r){if(!r)return null;let i;return r.forEach(a=>{if(i)return;const l=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(l))&&(i=l)}),!i&&this.options.supportedLngs&&r.forEach(a=>{if(i)return;const l=this.getScriptPartFromCode(a);if(this.isSupportedCode(l))return i=l;const s=this.getLanguagePartFromCode(a);if(this.isSupportedCode(s))return i=s;i=this.options.supportedLngs.find(u=>{if(u===s)return u;if(!(u.indexOf("-")<0&&s.indexOf("-")<0)&&(u.indexOf("-")>0&&s.indexOf("-")<0&&u.substring(0,u.indexOf("-"))===s||u.indexOf(s)===0&&s.length>1))return u})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(r,i){if(!r)return[];if(typeof r=="function"&&(r=r(i)),_e(r)&&(r=[r]),Array.isArray(r))return r;if(!i)return r.default||[];let a=r[i];return a||(a=r[this.getScriptPartFromCode(i)]),a||(a=r[this.formatLanguageCode(i)]),a||(a=r[this.getLanguagePartFromCode(i)]),a||(a=r.default),a||[]}toResolveHierarchy(r,i){const a=this.getFallbackCodes((i===!1?[]:i)||this.options.fallbackLng||[],r),l=[],s=u=>{u&&(this.isSupportedCode(u)?l.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return _e(r)&&(r.indexOf("-")>-1||r.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(r)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(r)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(r))):_e(r)&&s(this.formatLanguageCode(r)),a.forEach(u=>{l.indexOf(u)<0&&s(this.formatLanguageCode(u))}),l}}const $0={zero:0,one:1,two:2,few:3,many:4,other:5},F0={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class w3{constructor(r,i={}){this.languageUtils=r,this.options=i,this.logger=wr.create("pluralResolver"),this.pluralRulesCache={}}addRule(r,i){this.rules[r]=i}clearCache(){this.pluralRulesCache={}}getRule(r,i={}){const a=$s(r==="dev"?"en":r),l=i.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:a,type:l});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let u;try{u=new Intl.PluralRules(a,{type:l})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),F0;if(!r.match(/-|_/))return F0;const p=this.languageUtils.getLanguagePartFromCode(r);u=this.getRule(p,i)}return this.pluralRulesCache[s]=u,u}needsPlural(r,i={}){let a=this.getRule(r,i);return a||(a=this.getRule("dev",i)),(a==null?void 0:a.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(r,i,a={}){return this.getSuffixes(r,a).map(l=>`${i}${l}`)}getSuffixes(r,i={}){let a=this.getRule(r,i);return a||(a=this.getRule("dev",i)),a?a.resolvedOptions().pluralCategories.sort((l,s)=>$0[l]-$0[s]).map(l=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${l}`):[]}getSuffix(r,i,a={}){const l=this.getRule(r,a);return l?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${l.select(i)}`:(this.logger.warn(`no plural rule found for: ${r}`),this.getSuffix("dev",i,a))}}const V0=(e,r,i,a=".",l=!0)=>{let s=p3(e,r,i);return!s&&l&&_e(i)&&(s=qm(e,i,a),s===void 0&&(s=qm(r,i,a))),s},Wf=e=>e.replace(/\$/g,"$$$$");class k3{constructor(r={}){var i;this.logger=wr.create("interpolator"),this.options=r,this.format=((i=r==null?void 0:r.interpolation)==null?void 0:i.format)||(a=>a),this.init(r)}init(r={}){r.interpolation||(r.interpolation={escapeValue:!0});const{escape:i,escapeValue:a,useRawValueToEscape:l,prefix:s,prefixEscaped:u,suffix:c,suffixEscaped:p,formatSeparator:m,unescapeSuffix:x,unescapePrefix:g,nestingPrefix:h,nestingPrefixEscaped:w,nestingSuffix:k,nestingSuffixEscaped:S,nestingOptionsSeparator:M,maxReplaces:O,alwaysFormat:A}=r.interpolation;this.escape=i!==void 0?i:m3,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=l!==void 0?l:!1,this.prefix=s?ki(s):u||"{{",this.suffix=c?ki(c):p||"}}",this.formatSeparator=m||",",this.unescapePrefix=x?"":g||"-",this.unescapeSuffix=this.unescapePrefix?"":x||"",this.nestingPrefix=h?ki(h):w||ki("$t("),this.nestingSuffix=k?ki(k):S||ki(")"),this.nestingOptionsSeparator=M||",",this.maxReplaces=O||1e3,this.alwaysFormat=A!==void 0?A:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const r=(i,a)=>(i==null?void 0:i.source)===a?(i.lastIndex=0,i):new RegExp(a,"g");this.regexp=r(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=r(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=r(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(r,i,a,l){var w;let s,u,c;const p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=k=>{if(k.indexOf(this.formatSeparator)<0){const A=V0(i,p,k,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(A,void 0,a,{...l,...i,interpolationkey:k}):A}const S=k.split(this.formatSeparator),M=S.shift().trim(),O=S.join(this.formatSeparator).trim();return this.format(V0(i,p,M,this.options.keySeparator,this.options.ignoreJSONStructure),O,a,{...l,...i,interpolationkey:M})};this.resetRegExp();const x=(l==null?void 0:l.missingInterpolationHandler)||this.options.missingInterpolationHandler,g=((w=l==null?void 0:l.interpolation)==null?void 0:w.skipOnVariables)!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:k=>Wf(k)},{regex:this.regexp,safeValue:k=>this.escapeValue?Wf(this.escape(k)):Wf(k)}].forEach(k=>{for(c=0;s=k.regex.exec(r);){const S=s[1].trim();if(u=m(S),u===void 0)if(typeof x=="function"){const O=x(r,s,l);u=_e(O)?O:""}else if(l&&Object.prototype.hasOwnProperty.call(l,S))u="";else if(g){u=s[0];continue}else this.logger.warn(`missed to pass in variable ${S} for interpolating ${r}`),u="";else!_e(u)&&!this.useRawValueToEscape&&(u=A0(u));const M=k.safeValue(u);if(r=r.replace(s[0],M),g?(k.regex.lastIndex+=u.length,k.regex.lastIndex-=s[0].length):k.regex.lastIndex=0,c++,c>=this.maxReplaces)break}}),r}nest(r,i,a={}){let l,s,u;const c=(p,m)=>{const x=this.nestingOptionsSeparator;if(p.indexOf(x)<0)return p;const g=p.split(new RegExp(`${x}[ ]*{`));let h=`{${g[1]}`;p=g[0],h=this.interpolate(h,u);const w=h.match(/'/g),k=h.match(/"/g);(((w==null?void 0:w.length)??0)%2===0&&!k||k.length%2!==0)&&(h=h.replace(/'/g,'"'));try{u=JSON.parse(h),m&&(u={...m,...u})}catch(S){return this.logger.warn(`failed parsing options string in nesting for key ${p}`,S),`${p}${x}${h}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,p};for(;l=this.nestingRegexp.exec(r);){let p=[];u={...a},u=u.replace&&!_e(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;const m=/{.*}/.test(l[1])?l[1].lastIndexOf("}")+1:l[1].indexOf(this.formatSeparator);if(m!==-1&&(p=l[1].slice(m).split(this.formatSeparator).map(x=>x.trim()).filter(Boolean),l[1]=l[1].slice(0,m)),s=i(c.call(this,l[1].trim(),u),u),s&&l[0]===r&&!_e(s))return s;_e(s)||(s=A0(s)),s||(this.logger.warn(`missed to resolve ${l[1]} for nesting ${r}`),s=""),p.length&&(s=p.reduce((x,g)=>this.format(x,g,a.lng,{...a,interpolationkey:l[1].trim()}),s.trim())),r=r.replace(l[0],s),this.regexp.lastIndex=0}return r}}const S3=e=>{let r=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const a=e.split("(");r=a[0].toLowerCase().trim();const l=a[1].substring(0,a[1].length-1);r==="currency"&&l.indexOf(":")<0?i.currency||(i.currency=l.trim()):r==="relativetime"&&l.indexOf(":")<0?i.range||(i.range=l.trim()):l.split(";").forEach(u=>{if(u){const[c,...p]=u.split(":"),m=p.join(":").trim().replace(/^'+|'+$/g,""),x=c.trim();i[x]||(i[x]=m),m==="false"&&(i[x]=!1),m==="true"&&(i[x]=!0),isNaN(m)||(i[x]=parseInt(m,10))}})}return{formatName:r,formatOptions:i}},H0=e=>{const r={};return(i,a,l)=>{let s=l;l&&l.interpolationkey&&l.formatParams&&l.formatParams[l.interpolationkey]&&l[l.interpolationkey]&&(s={...s,[l.interpolationkey]:void 0});const u=a+JSON.stringify(s);let c=r[u];return c||(c=e($s(a),l),r[u]=c),c(i)}},E3=e=>(r,i,a)=>e($s(i),a)(r);class R3{constructor(r={}){this.logger=wr.create("formatter"),this.options=r,this.init(r)}init(r,i={interpolation:{}}){this.formatSeparator=i.interpolation.formatSeparator||",";const a=i.cacheInBuiltFormats?H0:E3;this.formats={number:a((l,s)=>{const u=new Intl.NumberFormat(l,{...s});return c=>u.format(c)}),currency:a((l,s)=>{const u=new Intl.NumberFormat(l,{...s,style:"currency"});return c=>u.format(c)}),datetime:a((l,s)=>{const u=new Intl.DateTimeFormat(l,{...s});return c=>u.format(c)}),relativetime:a((l,s)=>{const u=new Intl.RelativeTimeFormat(l,{...s});return c=>u.format(c,s.range||"day")}),list:a((l,s)=>{const u=new Intl.ListFormat(l,{...s});return c=>u.format(c)})}}add(r,i){this.formats[r.toLowerCase().trim()]=i}addCached(r,i){this.formats[r.toLowerCase().trim()]=H0(i)}format(r,i,a,l={}){const s=i.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(c=>c.indexOf(")")>-1)){const c=s.findIndex(p=>p.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,c)].join(this.formatSeparator)}return s.reduce((c,p)=>{var g;const{formatName:m,formatOptions:x}=S3(p);if(this.formats[m]){let h=c;try{const w=((g=l==null?void 0:l.formatParams)==null?void 0:g[l.interpolationkey])||{},k=w.locale||w.lng||l.locale||l.lng||a;h=this.formats[m](c,k,{...x,...l,...w})}catch(w){this.logger.warn(w)}return h}else this.logger.warn(`there was no format function for ${m}`);return c},r)}}const C3=(e,r)=>{e.pending[r]!==void 0&&(delete e.pending[r],e.pendingCount--)};class P3 extends Dc{constructor(r,i,a,l={}){var s,u;super(),this.backend=r,this.store=i,this.services=a,this.languageUtils=a.languageUtils,this.options=l,this.logger=wr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=l.maxParallelReads||10,this.readingCalls=0,this.maxRetries=l.maxRetries>=0?l.maxRetries:5,this.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,this.state={},this.queue=[],(u=(s=this.backend)==null?void 0:s.init)==null||u.call(s,a,l.backend,l)}queueLoad(r,i,a,l){const s={},u={},c={},p={};return r.forEach(m=>{let x=!0;i.forEach(g=>{const h=`${m}|${g}`;!a.reload&&this.store.hasResourceBundle(m,g)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?u[h]===void 0&&(u[h]=!0):(this.state[h]=1,x=!1,u[h]===void 0&&(u[h]=!0),s[h]===void 0&&(s[h]=!0),p[g]===void 0&&(p[g]=!0)))}),x||(c[m]=!0)}),(Object.keys(s).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:l}),{toLoad:Object.keys(s),pending:Object.keys(u),toLoadLanguages:Object.keys(c),toLoadNamespaces:Object.keys(p)}}loaded(r,i,a){const l=r.split("|"),s=l[0],u=l[1];i&&this.emit("failedLoading",s,u,i),!i&&a&&this.store.addResourceBundle(s,u,a,void 0,void 0,{skipCopy:!0}),this.state[r]=i?-1:2,i&&a&&(this.state[r]=0);const c={};this.queue.forEach(p=>{c3(p.loaded,[s],u),C3(p,r),i&&p.errors.push(i),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(m=>{c[m]||(c[m]={});const x=p.loaded[m];x.length&&x.forEach(g=>{c[m][g]===void 0&&(c[m][g]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",c),this.queue=this.queue.filter(p=>!p.done)}read(r,i,a,l=0,s=this.retryTimeout,u){if(!r.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:r,ns:i,fcName:a,tried:l,wait:s,callback:u});return}this.readingCalls++;const c=(m,x)=>{if(this.readingCalls--,this.waitingReads.length>0){const g=this.waitingReads.shift();this.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(m&&x&&l<this.maxRetries){setTimeout(()=>{this.read.call(this,r,i,a,l+1,s*2,u)},s);return}u(m,x)},p=this.backend[a].bind(this.backend);if(p.length===2){try{const m=p(r,i);m&&typeof m.then=="function"?m.then(x=>c(null,x)).catch(c):c(null,m)}catch(m){c(m)}return}return p(r,i,c)}prepareLoading(r,i,a={},l){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),l&&l();_e(r)&&(r=this.languageUtils.toResolveHierarchy(r)),_e(i)&&(i=[i]);const s=this.queueLoad(r,i,a,l);if(!s.toLoad.length)return s.pending.length||l(),null;s.toLoad.forEach(u=>{this.loadOne(u)})}load(r,i,a){this.prepareLoading(r,i,{},a)}reload(r,i,a){this.prepareLoading(r,i,{reload:!0},a)}loadOne(r,i=""){const a=r.split("|"),l=a[0],s=a[1];this.read(l,s,"read",void 0,void 0,(u,c)=>{u&&this.logger.warn(`${i}loading namespace ${s} for language ${l} failed`,u),!u&&c&&this.logger.log(`${i}loaded namespace ${s} for language ${l}`,c),this.loaded(r,u,c)})}saveMissing(r,i,a,l,s,u={},c=()=>{}){var p,m,x,g,h;if((m=(p=this.services)==null?void 0:p.utils)!=null&&m.hasLoadedNamespace&&!((g=(x=this.services)==null?void 0:x.utils)!=null&&g.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${a}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if((h=this.backend)!=null&&h.create){const w={...u,isUpdate:s},k=this.backend.create.bind(this.backend);if(k.length<6)try{let S;k.length===5?S=k(r,i,a,l,w):S=k(r,i,a,l),S&&typeof S.then=="function"?S.then(M=>c(null,M)).catch(c):c(null,S)}catch(S){c(S)}else k(r,i,a,l,c,w)}!r||!r[0]||this.store.addResource(r[0],i,a,l)}}}const W0=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let r={};if(typeof e[1]=="object"&&(r=e[1]),_e(e[1])&&(r.defaultValue=e[1]),_e(e[2])&&(r.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const i=e[3]||e[2];Object.keys(i).forEach(a=>{r[a]=i[a]})}return r},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),U0=e=>{var r,i;return _e(e.ns)&&(e.ns=[e.ns]),_e(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),_e(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((i=(r=e.supportedLngs)==null?void 0:r.indexOf)==null?void 0:i.call(r,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},kd=()=>{},O3=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(i=>{typeof e[i]=="function"&&(e[i]=e[i].bind(e))})};class Is extends Dc{constructor(r={},i){if(super(),this.options=U0(r),this.services={},this.logger=wr,this.modules={external:[]},O3(this),i&&!this.isInitialized&&!r.isClone){if(!this.options.initAsync)return this.init(r,i),this;setTimeout(()=>{this.init(r,i)},0)}}init(r={},i){this.isInitializing=!0,typeof r=="function"&&(i=r,r={}),r.defaultNS==null&&r.ns&&(_e(r.ns)?r.defaultNS=r.ns:r.ns.indexOf("translation")<0&&(r.defaultNS=r.ns[0]));const a=W0();this.options={...a,...this.options,...U0(r)},this.options.interpolation={...a.interpolation,...this.options.interpolation},r.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=r.keySeparator),r.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=r.nsSeparator);const l=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?wr.init(l(this.modules.logger),this.options):wr.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=R3;const x=new B0(this.options);this.store=new I0(this.options.resources,this.options);const g=this.services;g.logger=wr,g.resourceStore=this.store,g.languageUtils=x,g.pluralResolver=new w3(x,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==a.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),m&&(!this.options.interpolation.format||this.options.interpolation.format===a.interpolation.format)&&(g.formatter=l(m),g.formatter.init&&g.formatter.init(g,this.options),this.options.interpolation.format=g.formatter.format.bind(g.formatter)),g.interpolator=new k3(this.options),g.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},g.backendConnector=new P3(l(this.modules.backend),g.resourceStore,g,this.options),g.backendConnector.on("*",(w,...k)=>{this.emit(w,...k)}),this.modules.languageDetector&&(g.languageDetector=l(this.modules.languageDetector),g.languageDetector.init&&g.languageDetector.init(g,this.options.detection,this.options)),this.modules.i18nFormat&&(g.i18nFormat=l(this.modules.i18nFormat),g.i18nFormat.init&&g.i18nFormat.init(this)),this.translator=new kc(this.services,this.options),this.translator.on("*",(w,...k)=>{this.emit(w,...k)}),this.modules.external.forEach(w=>{w.init&&w.init(this)})}if(this.format=this.options.interpolation.format,i||(i=kd),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=(...x)=>this.store[m](...x)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=(...x)=>(this.store[m](...x),this)});const c=Oa(),p=()=>{const m=(x,g)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),c.resolve(g),i(x,g)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?p():setTimeout(p,0),c}loadResources(r,i=kd){var s,u;let a=i;const l=_e(r)?r:this.language;if(typeof r=="function"&&(a=r),!this.options.resources||this.options.partialBundledLanguages){if((l==null?void 0:l.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const c=[],p=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(g=>{g!=="cimode"&&c.indexOf(g)<0&&c.push(g)})};l?p(l):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(x=>p(x)),(u=(s=this.options.preload)==null?void 0:s.forEach)==null||u.call(s,m=>p(m)),this.services.backendConnector.load(c,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(m)})}else a(null)}reloadResources(r,i,a){const l=Oa();return typeof r=="function"&&(a=r,r=void 0),typeof i=="function"&&(a=i,i=void 0),r||(r=this.languages),i||(i=this.options.ns),a||(a=kd),this.services.backendConnector.reload(r,i,s=>{l.resolve(),a(s)}),l}use(r){if(!r)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!r.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return r.type==="backend"&&(this.modules.backend=r),(r.type==="logger"||r.log&&r.warn&&r.error)&&(this.modules.logger=r),r.type==="languageDetector"&&(this.modules.languageDetector=r),r.type==="i18nFormat"&&(this.modules.i18nFormat=r),r.type==="postProcessor"&&P2.addPostProcessor(r),r.type==="formatter"&&(this.modules.formatter=r),r.type==="3rdParty"&&this.modules.external.push(r),this}setResolvedLanguage(r){if(!(!r||!this.languages)&&!(["cimode","dev"].indexOf(r)>-1)){for(let i=0;i<this.languages.length;i++){const a=this.languages[i];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}!this.resolvedLanguage&&this.languages.indexOf(r)<0&&this.store.hasLanguageSomeTranslations(r)&&(this.resolvedLanguage=r,this.languages.unshift(r))}}changeLanguage(r,i){this.isLanguageChangingTo=r;const a=Oa();this.emit("languageChanging",r);const l=c=>{this.language=c,this.languages=this.services.languageUtils.toResolveHierarchy(c),this.resolvedLanguage=void 0,this.setResolvedLanguage(c)},s=(c,p)=>{p?this.isLanguageChangingTo===r&&(l(p),this.translator.changeLanguage(p),this.isLanguageChangingTo=void 0,this.emit("languageChanged",p),this.logger.log("languageChanged",p)):this.isLanguageChangingTo=void 0,a.resolve((...m)=>this.t(...m)),i&&i(c,(...m)=>this.t(...m))},u=c=>{var x,g;!r&&!c&&this.services.languageDetector&&(c=[]);const p=_e(c)?c:c&&c[0],m=this.store.hasLanguageSomeTranslations(p)?p:this.services.languageUtils.getBestMatchFromCodes(_e(c)?[c]:c);m&&(this.language||l(m),this.translator.language||this.translator.changeLanguage(m),(g=(x=this.services.languageDetector)==null?void 0:x.cacheUserLanguage)==null||g.call(x,m)),this.loadResources(m,h=>{s(h,m)})};return!r&&this.services.languageDetector&&!this.services.languageDetector.async?u(this.services.languageDetector.detect()):!r&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(u):this.services.languageDetector.detect(u):u(r),a}getFixedT(r,i,a){const l=(s,u,...c)=>{let p;typeof u!="object"?p=this.options.overloadTranslationOptionHandler([s,u].concat(c)):p={...u},p.lng=p.lng||l.lng,p.lngs=p.lngs||l.lngs,p.ns=p.ns||l.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||a||l.keyPrefix);const m=this.options.keySeparator||".";let x;return p.keyPrefix&&Array.isArray(s)?x=s.map(g=>(typeof g=="function"&&(g=Am(g,{...this.options,...u})),`${p.keyPrefix}${m}${g}`)):(typeof s=="function"&&(s=Am(s,{...this.options,...u})),x=p.keyPrefix?`${p.keyPrefix}${m}${s}`:s),this.t(x,p)};return _e(r)?l.lng=r:l.lngs=r,l.ns=i,l.keyPrefix=a,l}t(...r){var i;return(i=this.translator)==null?void 0:i.translate(...r)}exists(...r){var i;return(i=this.translator)==null?void 0:i.exists(...r)}setDefaultNamespace(r){this.options.defaultNS=r}hasLoadedNamespace(r,i={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=i.lng||this.resolvedLanguage||this.languages[0],l=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const u=(c,p)=>{const m=this.services.backendConnector.state[`${c}|${p}`];return m===-1||m===0||m===2};if(i.precheck){const c=i.precheck(this,u);if(c!==void 0)return c}return!!(this.hasResourceBundle(a,r)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(a,r)&&(!l||u(s,r)))}loadNamespaces(r,i){const a=Oa();return this.options.ns?(_e(r)&&(r=[r]),r.forEach(l=>{this.options.ns.indexOf(l)<0&&this.options.ns.push(l)}),this.loadResources(l=>{a.resolve(),i&&i(l)}),a):(i&&i(),Promise.resolve())}loadLanguages(r,i){const a=Oa();_e(r)&&(r=[r]);const l=this.options.preload||[],s=r.filter(u=>l.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return s.length?(this.options.preload=l.concat(s),this.loadResources(u=>{a.resolve(),i&&i(u)}),a):(i&&i(),Promise.resolve())}dir(r){var l,s;if(r||(r=this.resolvedLanguage||(((l=this.languages)==null?void 0:l.length)>0?this.languages[0]:this.language)),!r)return"rtl";try{const u=new Intl.Locale(r);if(u&&u.getTextInfo){const c=u.getTextInfo();if(c&&c.direction)return c.direction}}catch{}const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=((s=this.services)==null?void 0:s.languageUtils)||new B0(W0());return r.toLowerCase().indexOf("-latn")>1?"ltr":i.indexOf(a.getLanguagePartFromCode(r))>-1||r.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(r={},i){const a=new Is(r,i);return a.createInstance=Is.createInstance,a}cloneInstance(r={},i=kd){const a=r.forkResourceStore;a&&delete r.forkResourceStore;const l={...this.options,...r,isClone:!0},s=new Is(l);if((r.debug!==void 0||r.prefix!==void 0)&&(s.logger=s.logger.clone(r)),["store","services","language"].forEach(c=>{s[c]=this[c]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},a){const c=Object.keys(this.store.data).reduce((p,m)=>(p[m]={...this.store.data[m]},p[m]=Object.keys(p[m]).reduce((x,g)=>(x[g]={...p[m][g]},x),p[m]),p),{});s.store=new I0(c,l),s.services.resourceStore=s.store}return s.translator=new kc(s.services,l),s.translator.on("*",(c,...p)=>{s.emit(c,...p)}),s.init(l,i),s.translator.options=l,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Rt=Is.createInstance();Rt.createInstance;Rt.dir;Rt.init;Rt.loadResources;Rt.reloadResources;Rt.use;Rt.changeLanguage;Rt.getFixedT;Rt.t;Rt.exists;Rt.setDefaultNamespace;Rt.hasLoadedNamespace;Rt.loadNamespaces;Rt.loadLanguages;const _3=(e,r,i,a)=>{var s,u,c,p;const l=[i,{code:r,...a||{}}];if((u=(s=e==null?void 0:e.services)==null?void 0:s.logger)!=null&&u.forward)return e.services.logger.forward(l,"warn","react-i18next::",!0);Kn(l[0])&&(l[0]=`react-i18next:: ${l[0]}`),(p=(c=e==null?void 0:e.services)==null?void 0:c.logger)!=null&&p.warn?e.services.logger.warn(...l):console!=null&&console.warn&&console.warn(...l)},K0={},_2=(e,r,i,a)=>{Kn(i)&&K0[i]||(Kn(i)&&(K0[i]=new Date),_3(e,r,i,a))},j2=(e,r)=>()=>{if(e.isInitialized)r();else{const i=()=>{setTimeout(()=>{e.off("initialized",i)},0),r()};e.on("initialized",i)}},Lm=(e,r,i)=>{e.loadNamespaces(r,j2(e,i))},Y0=(e,r,i,a)=>{if(Kn(i)&&(i=[i]),e.options.preload&&e.options.preload.indexOf(r)>-1)return Lm(e,i,a);i.forEach(l=>{e.options.ns.indexOf(l)<0&&e.options.ns.push(l)}),e.loadLanguages(r,j2(e,a))},j3=(e,r,i={})=>!r.languages||!r.languages.length?(_2(r,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:r.languages}),!0):r.hasLoadedNamespace(e,{lng:i.lng,precheck:(a,l)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}),Kn=e=>typeof e=="string",T3=e=>typeof e=="object"&&e!==null,M3=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,q3={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},A3=e=>q3[e],L3=e=>e.replace(M3,A3);let Nm={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:L3};const N3=(e={})=>{Nm={...Nm,...e}},z3=()=>Nm;let T2;const I3=e=>{T2=e},D3=()=>T2,B3={type:"3rdParty",init(e){N3(e.options.react),I3(e)}},$3=de.createContext();class F3{constructor(){this.usedNamespaces={}}addUsedNamespaces(r){r.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var Uf={exports:{}},Kf={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function V3(){if(G0)return Kf;G0=1;var e=cr();function r(g,h){return g===h&&(g!==0||1/g===1/h)||g!==g&&h!==h}var i=typeof Object.is=="function"?Object.is:r,a=e.useState,l=e.useEffect,s=e.useLayoutEffect,u=e.useDebugValue;function c(g,h){var w=h(),k=a({inst:{value:w,getSnapshot:h}}),S=k[0].inst,M=k[1];return s(function(){S.value=w,S.getSnapshot=h,p(S)&&M({inst:S})},[g,w,h]),l(function(){return p(S)&&M({inst:S}),g(function(){p(S)&&M({inst:S})})},[g]),u(w),w}function p(g){var h=g.getSnapshot;g=g.value;try{var w=h();return!i(g,w)}catch{return!0}}function m(g,h){return h()}var x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:c;return Kf.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:x,Kf}var X0;function H3(){return X0||(X0=1,Uf.exports=V3()),Uf.exports}var W3=H3();const U3=(e,r)=>Kn(r)?r:T3(r)&&Kn(r.defaultValue)?r.defaultValue:Array.isArray(e)?e[e.length-1]:e,K3={t:U3,ready:!1},Y3=()=>()=>{},lt=(e,r={})=>{var B,j;const{i18n:i}=r,{i18n:a,defaultNS:l}=de.useContext($3)||{},s=i||a||D3();s&&!s.reportNamespaces&&(s.reportNamespaces=new F3),s||_2(s,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const u=de.useMemo(()=>{var C;return{...z3(),...(C=s==null?void 0:s.options)==null?void 0:C.react,...r}},[s,r]),{useSuspense:c,keyPrefix:p}=u,m=de.useMemo(()=>{var P;const C=l||((P=s==null?void 0:s.options)==null?void 0:P.defaultNS);return Kn(C)?[C]:C||["translation"]},[e,l,s]);(j=(B=s==null?void 0:s.reportNamespaces)==null?void 0:B.addUsedNamespaces)==null||j.call(B,m);const x=de.useRef(0),g=de.useCallback(C=>{if(!s)return Y3;const{bindI18n:P,bindI18nStore:L}=u,q=()=>{x.current+=1,C()};return P&&s.on(P,q),L&&s.store.on(L,q),()=>{P&&P.split(" ").forEach(b=>s.off(b,q)),L&&L.split(" ").forEach(b=>s.store.off(b,q))}},[s,u]),h=de.useRef(),w=de.useCallback(()=>{if(!s)return K3;const C=!!(s.isInitialized||s.initializedStoreOnce)&&m.every(Y=>j3(Y,s,u)),P=r.lng||s.language,L=x.current,q=h.current;if(q&&q.ready===C&&q.lng===P&&q.keyPrefix===p&&q.revision===L)return q;const W={t:s.getFixedT(P,u.nsMode==="fallback"?m:m[0],p),ready:C,lng:P,keyPrefix:p,revision:L};return h.current=W,W},[s,m,p,u,r.lng]),[k,S]=de.useState(0),{t:M,ready:O}=W3.useSyncExternalStore(g,w,w);de.useEffect(()=>{if(s&&!O&&!c){const C=()=>S(P=>P+1);r.lng?Y0(s,r.lng,m,C):Lm(s,m,C)}},[s,r.lng,m,O,c,k]);const A=s||{},z=de.useMemo(()=>{const C=[M,A,O];return C.t=M,C.i18n=A,C.ready=O,C},[M,A,O]);if(s&&c&&!O)throw new Promise(C=>{const P=()=>C();r.lng?Y0(s,r.lng,m,P):Lm(s,m,P)});return z},{slice:G3,forEach:X3}=[];function Q3(e){return X3.call(G3.call(arguments,1),r=>{if(r)for(const i in r)e[i]===void 0&&(e[i]=r[i])}),e}function Z3(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(e))}const Q0=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,J3=function(e,r){const a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},l=encodeURIComponent(r);let s=`${e}=${l}`;if(a.maxAge>0){const u=a.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");s+=`; Max-Age=${Math.floor(u)}`}if(a.domain){if(!Q0.test(a.domain))throw new TypeError("option domain is invalid");s+=`; Domain=${a.domain}`}if(a.path){if(!Q0.test(a.path))throw new TypeError("option path is invalid");s+=`; Path=${a.path}`}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+=`; Expires=${a.expires.toUTCString()}`}if(a.httpOnly&&(s+="; HttpOnly"),a.secure&&(s+="; Secure"),a.sameSite)switch(typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a.partitioned&&(s+="; Partitioned"),s},Z0={create(e,r,i,a){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(l.expires=new Date,l.expires.setTime(l.expires.getTime()+i*60*1e3)),a&&(l.domain=a),document.cookie=J3(e,r,l)},read(e){const r=`${e}=`,i=document.cookie.split(";");for(let a=0;a<i.length;a++){let l=i[a];for(;l.charAt(0)===" ";)l=l.substring(1,l.length);if(l.indexOf(r)===0)return l.substring(r.length,l.length)}return null},remove(e,r){this.create(e,"",-1,r)}};var eC={name:"cookie",lookup(e){let{lookupCookie:r}=e;if(r&&typeof document<"u")return Z0.read(r)||void 0},cacheUserLanguage(e,r){let{lookupCookie:i,cookieMinutes:a,cookieDomain:l,cookieOptions:s}=r;i&&typeof document<"u"&&Z0.create(i,e,a,l,s)}},tC={name:"querystring",lookup(e){var a;let{lookupQuerystring:r}=e,i;if(typeof window<"u"){let{search:l}=window.location;!window.location.search&&((a=window.location.hash)==null?void 0:a.indexOf("?"))>-1&&(l=window.location.hash.substring(window.location.hash.indexOf("?")));const u=l.substring(1).split("&");for(let c=0;c<u.length;c++){const p=u[c].indexOf("=");p>0&&u[c].substring(0,p)===r&&(i=u[c].substring(p+1))}}return i}},rC={name:"hash",lookup(e){var l;let{lookupHash:r,lookupFromHashIndex:i}=e,a;if(typeof window<"u"){const{hash:s}=window.location;if(s&&s.length>2){const u=s.substring(1);if(r){const c=u.split("&");for(let p=0;p<c.length;p++){const m=c[p].indexOf("=");m>0&&c[p].substring(0,m)===r&&(a=c[p].substring(m+1))}}if(a)return a;if(!a&&i>-1){const c=s.match(/\/([a-zA-Z-]*)/g);return Array.isArray(c)?(l=c[typeof i=="number"?i:0])==null?void 0:l.replace("/",""):void 0}}}return a}};let Si=null;const J0=()=>{if(Si!==null)return Si;try{if(Si=typeof window<"u"&&window.localStorage!==null,!Si)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Si=!1}return Si};var nC={name:"localStorage",lookup(e){let{lookupLocalStorage:r}=e;if(r&&J0())return window.localStorage.getItem(r)||void 0},cacheUserLanguage(e,r){let{lookupLocalStorage:i}=r;i&&J0()&&window.localStorage.setItem(i,e)}};let Ei=null;const ev=()=>{if(Ei!==null)return Ei;try{if(Ei=typeof window<"u"&&window.sessionStorage!==null,!Ei)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Ei=!1}return Ei};var iC={name:"sessionStorage",lookup(e){let{lookupSessionStorage:r}=e;if(r&&ev())return window.sessionStorage.getItem(r)||void 0},cacheUserLanguage(e,r){let{lookupSessionStorage:i}=r;i&&ev()&&window.sessionStorage.setItem(i,e)}},aC={name:"navigator",lookup(e){const r=[];if(typeof navigator<"u"){const{languages:i,userLanguage:a,language:l}=navigator;if(i)for(let s=0;s<i.length;s++)r.push(i[s]);a&&r.push(a),l&&r.push(l)}return r.length>0?r:void 0}},oC={name:"htmlTag",lookup(e){let{htmlTag:r}=e,i;const a=r||(typeof document<"u"?document.documentElement:null);return a&&typeof a.getAttribute=="function"&&(i=a.getAttribute("lang")),i}},lC={name:"path",lookup(e){var l;let{lookupFromPathIndex:r}=e;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(l=i[typeof r=="number"?r:0])==null?void 0:l.replace("/",""):void 0}},sC={name:"subdomain",lookup(e){var l,s;let{lookupFromSubdomainIndex:r}=e;const i=typeof r=="number"?r+1:1,a=typeof window<"u"&&((s=(l=window.location)==null?void 0:l.hostname)==null?void 0:s.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(a)return a[i]}};let M2=!1;try{document.cookie,M2=!0}catch{}const q2=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];M2||q2.splice(1,1);const uC=()=>({order:q2,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class A2{constructor(r){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(r,i)}init(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=r,this.options=Q3(i,this.options||{},uC()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=l=>l.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=a,this.addDetector(eC),this.addDetector(tC),this.addDetector(nC),this.addDetector(iC),this.addDetector(aC),this.addDetector(oC),this.addDetector(lC),this.addDetector(sC),this.addDetector(rC)}addDetector(r){return this.detectors[r.name]=r,this}detect(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return r.forEach(a=>{if(this.detectors[a]){let l=this.detectors[a].lookup(this.options);l&&typeof l=="string"&&(l=[l]),l&&(i=i.concat(l))}}),i=i.filter(a=>a!=null&&!Z3(a)).map(a=>this.options.convertDetectedLanguage(a)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(r){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(r)>-1||i.forEach(a=>{this.detectors[a]&&this.detectors[a].cacheUserLanguage(r,this.options)}))}}A2.type="languageDetector";const dC="Welcome To My Portfolio",cC={home:"Home",resume:"Resume",pengalaman:"Experience",skill:"Skills",project:"Projects",training:"Training",sertifikat:"Certificate"},pC="Welcome to my portfolio",fC={general:"I am a disciplined and responsible person with a strong work ethic. I am used to working both in a team and independently, and I always strive to give my best in every task. I am hardworking, detail-oriented, and able to perform well under pressure. I always maintain the quality of my work and complete tasks on time with the best results. I have good communication skills and can easily adapt to new environments. I enjoy collaborating with others and always aim to create a positive work atmosphere. I believe that hard work and honesty are the keys to success. I continuously seek to learn new things to improve my abilities and contribute my best to the company.",it:"I have skills in building web-based applications based on UI/UX design. Through my experience attending a coding bootcamp, I have learned how to create websites that match the intended design. I am a person who loves learning new things, works hard, and can work both in a team and independently. For me, sharpening skills is essential to be useful to myself, others, and the company. By showcasing my portfolio, I am confident that I can contribute effectively to the company and clients.",greeting:"Hello",me:"I'm",name:"Latif Budi Pamungkas",mottoTitle:"My Motto:",motto:`"I'm not smart, but I'm just a man who understands process and works hard. Ever tried, ever failed — no matter. Try again, fail again, fail better. Allah always listens and is always beside me. Treat everyone kindly and light up the night."`,social:"Check out my social media"},mC={title1:"My",title2:"Resume",title:"Resume"},hC={profile:"Personal Profile",education:"Education",skill:"Skills",interest:"Interests"},gC={"profile title":"Personal Profile",province:"EAST JAVA PROVINCE",kabupaten:"MADIUN REGENCY"},xC={nama:"NAME",tempatTanggalLahir:"PLACE/DATE OF BIRTH",pendidikanTerakhir:"LAST EDUCATION",jenisKelamin:"GENDER",alamat:"ADDRESS",agama:"RELIGION",status:"MARITAL STATUS",nomorTelepon:"PHONE NUMBER",email:"EMAIL"},vC={nama:"LATIF BUDI PAMUNGKAS",tempatTanggalLahir:"MADIUN, APRIL 24, 1996",pendidikanTerakhir:"Senior High School",jenisKelamin:"MALE",alamat:"DUSUN 02, JATIREJO VILLAGE, RT 12/RW 02, WONOASRI DISTRICT, MADIUN REGENCY",agama:"ISLAM",status:"SINGLE",nomorTelepon:"+62 857-8224-4135",email:"pamungkaslatifbudi@gmail.com"},bC={educationTitle:"Education",education1:"JATIREJO ELEMENTARY SCHOOL",education2:"WONOASRI 1 JUNIOR HIGH SCHOOL",education3:"MEJAYAN 1 SENIOR HIGH SCHOOL",jurusan:"Major",namajurusan:"Social Studies"},yC={skillTitle:"Skills",softSkill:"Soft Skills",hardSkill:"Hard Skills",disiplin:"Discipline",jujur:"Honesty",mampuBekerja:"Able to work in a team or individually",komunikasi:"Good communication skills",komitmen:"Commitment",pekerjaKeras:"Hard-working",bawahTekanan:"Able to work under pressure",las:"Welding",komputer:"Computer",inggris:"English",indonesia:"Indonesian",korea:"Korean"},wC={title:"Interests",futsal:"Futsal",game:"Gaming",musik:"Music",belajar:"Learning New Things",coding:"Coding"},kC={title:"Skill",IT:"Information Technology",LAS:"Welding"},SC={type:"Website",title1:"Portfolio",title2:"Wedspot Client",title3:"Wedspot Vendor",title4:"My Detail Project",title5:"Wedspot",title6:"Musicon",title7:"Musicon Website",desc1:"Wedspot is an application that helps users find trusted wedding planners and organizers (WO) according to their needs and budget.",desc2:"Wedspot Vendor is an application that helps users promote their Wedding Organizer (WO) services, wedding planning, or wedding venue business more easily through a broader network.",detail_description1:`- users are immediately presented with the main homepage that contains packages or services from various WO vendors or venues, allowing them to choose and determine the package according to their preferred wedding theme.

- users can also explore more packages on the next page at https://wedspot.vercel.app/package, which helps them choose based on their preferences, package type, budget, location, and total number of invited guests.

- when a user selects one of the packages, they are directed to the page https://wedspot.vercel.app/vendor/6612bd8d8c8140912cdf439f, which displays detailed data about the vendor and the packages offered. Users can view information such as price, location, package rating, and the number of guests included in the package.

- when a user selects one of the vendor’s packages, they are redirected again to https://wedspot.vercel.app/package/661392be94f3b21e8dff62d9, where they can see detailed information about the chosen package, including photos, reviews, and details of the services provided.

- if a user is interested in the selected package, they can submit a quotation request by clicking the “Ask for Quotation” button, which opens a form containing details such as the names of the bride and groom, residence, wedding location, wedding date, budget according to the package, and the number of guests. Users are required to log in before submitting a quotation request. If not logged in, they will be redirected to the login or register page.

- after the user fills in all the required information completely and correctly, they can send a request to the vendor. The data will be received by the vendor, and the user will wait for the vendor’s response for the next process.

- users can view their quotation request data on the profile page at https://wedspot.vercel.app/profile, where they will receive notifications confirming that their request has been sent and responded to by the vendor.

- on the profile page, users can see their personal data, quotation requests and vendor responses, as well as sent and received quotation messages.
  note: (the profile page can only be accessed if the user is logged in)`,detail_description2:`- On the Wedspot vendor website, users will be directly directed to the main page, which is the login and register page. For users who have not registered, it is recommended to register first, while registered users can directly fill out the login form to proceed to the next page.

 - After the user logs in successfully, they will be redirected to the My Store page, where the user is required to complete information about the store name and the type of vendor, either Wedding Organizer (WO) or Venue. The user must fill out the Store Header, Store Avatar, Store Name, Contact Number, Email, Website, etc.

 - After completing all the required data, the user can access the package creation page. In this section, users can upload package images suitable for marketing, set the package price, determine the maximum and minimum number of guests, specify the location, and provide a detailed description of the services offered based on the package name.
 Note: (Users can access the package page only if they have completed all personal and store information such as store name or vendor name.)

 - Once all vendor personal information and package details are filled out, all data will be saved and displayed on the Wedspot client website so that clients or customers can see and order the packages that have been created by the vendor.

 - A notification will appear when there is an order or request from a client or customer, and the order or request data will be stored on the quotations page.

 - On the quotations page, the vendor can respond by uploading a PDF file containing detailed quotation information that will be sent back to the client or customer.

 - The package page and My Store page can be edited according to needs.`},EC={title:"Training or Course",foo:"FOO (Flight Operation Officer)",glints:"Glints Academy Bootcamp",las:"BLK Mojokerto"},RC={foo:"I participated in aviation training that started in mid-2018 and ended in 2020. In this training, I took the FOO (Flight Operation Officer) program for approximately one year, which consisted of 3 months of theory classes, 3 months of simulation classes, and 3 months of on-the-job training at PT Sriwijaya Airline.",glints:"Glints Academy Bootcamp is a coding training program completed in just 3 months. I joined in mid-2021 and took the Frontend Developer program. During this training, I learned how to create web-based applications. The subjects I studied included ReactJS, Bootstrap, CSS, HTML, and Redux Saga. The learning process was intensive, conducted via Zoom or online every day, attending morning classes and continuing with evening review sessions. Every week, we were given assignments, and after one and a half months, when all materials had been covered, we moved on to a mini project to create a movie website. In the final month, we fully focused on building the final project — a website or web application called Wedspot. All the project work was done as a team and based on a UI/UX design.",las:"I attended training at BLK Mojokerto, taking the 3G plate welding training program. I started in late 2023. The training lasted for one and a half months. 3G welding is a vertical welding position used to join two plates by creating a penetration or groove. The welding process used an electric welding machine and welding rods — LB52U for penetration and RD60 for filler and capping. The polarity used for the root pass or penetration process was DCEN (Direct Current Electrode Negative), while for the filler and capping process, DCEP (Direct Current Electrode Positive) was used."},CC="Certificate",PC="My Partner",OC="Contact",_C="Submit",jC={"Nama Lengkap":"Full Name...",Email:"Email...",Pesan:"Message..."},TC={title:dC,navbar:cC,welcome:pC,profile:fC,resume:mC,menu:hC,profileTitle:gC,profileMenu:xC,profileContent:vC,education:bC,skill:yC,tertarik:wC,"Pengalaman Kerja":{title:"Work Experience",detail:"See Detail",catering:"Catering",type1:"Lion Boga",foo:"FOO Internship",type2:"Sriwijaya Air",grab:"Grab",type3:"Motorbike Driver","id express":"ID Express",type4:"Delivery Courier",shopee:"Shopee Express",type5:"Package Courier"},"detail menu":{title:"My Detailed Work Experience",perusahaan:"Company",posisi:"Position","lama bekerja":"Working Period",deskripsi:"Description"},"detail pekerjaan":{pt1:"PT Angkasa Aviasi Servis",catering:"Catering Service Staff",lama1:"January 2015 - January 2018","dekripsi kerja1":`- As an airline catering service staff, the first thing I did was check the flight schedule to find out how many aircraft and which routes were operating.
- Check the completeness of goods and food ready to be loaded into the aircraft cabin according to the flight route.
- The items in question include tissues, napkins, plastic tea spoons, paper cups, plastic cups, roll tissue, and bottled water, while the food consists of snacks and frozen meals that will be placed into the galley trolley. The quantity of these goods and foods depends on how many landings the aircraft will operate.
- After all goods and foods were checked and complete according to the flight route, my team and I prepared to go to the field to uplift or load all items in the galley trolley into the aircraft using an HTC truck. The food and drinks inside the trolley would later be used by flight attendants to serve passengers during the flight.
- Once everything had been loaded into the aircraft, my team and I monitored and checked other aircraft to ensure the remaining stock of goods on board was sufficient for the next flight. If something was lacking, it would be reloaded; if sufficient, no replacement was needed.`,pt2:"PT Sriwijaya Air",siswa:"Flight Operation Officer Intern",lama2:"September 2019 - January 2020","dekripsi kerja2":`- As a Flight Operation Officer (FOO) trainee conducting On-the-Job Training (OJT) at Sriwijaya Air, I was required to follow company regulations just like full-time employees working as FOOs, working 8 hours per day and following the company’s work shifts.
- I learned and followed the guidance of employees and seniors who had already been working there.
- The first task I performed was preparing flight documents such as NOTAM, flight plan, SIGMET, and windtemp, which were then handed over to the captain or pilot before departure.
- After that, I monitored departing and arriving aircraft at the airport through flight radar.
- Created flight plans and calculated loadsheets for the next flights.
- Briefed pilots about weather, NOTAM, flight details, and loadsheets before departure.
- The flight plan contained fuel calculations based on flight route distance and aircraft weight.
- The loadsheet contained calculations of aircraft balance based on the number of passengers and the amount of baggage in the compartments.
- Communicated with pilots via radio communication.
- Created flight schedules based on route operations.
- Submitted slot time requests to the ATC for communication services and takeoff queue scheduling.`,pt3:"PT Grab Indonesia",driver:"Online Motorcycle Driver",lama3:"August 2018 - January 2021","dekripsi kerja3":`- I registered at Grab as an online motorcycle taxi driver starting in 2018, since I was a student at the Merpati Training Center, until 2021. During my internship at Sriwijaya Air, I worked as a Grab online motorcycle taxi driver in the Surabaya area, including Juanda, Sedati Agung, Sidoarjo, and Surabaya city area as a side job.
- Responsible for delivering passengers and food according to requests made through the application.`,pt4:"PT ID Express Logistics Indonesia","kurir id":"Event Courier",lama4:"2021 - 2022","dekripsi kerja4":"- I worked as a courier at ID Express starting in 2021 at the Mulyosari Surabaya TH office. I delivered packages in the areas around Kenjeran Beach and the ITS (Institut Teknologi Sepuluh Nopember) area. Then, I moved to the Sukodono TH office and delivered packages in the Sidoarjo regency area, specifically in Buduran District, including Valencia housing complex, Permata Alam Permai housing complex, and Gemurung village. An event courier is a courier who only works when there are events from Shopee, Lazada, or Tokopedia.",pt5:"PT Shopee Express Indonesia","kurir shopee":"Partner Courier",lama5:"2022 - 2023","dekripsi kerja5":"- I worked as a courier at Shopee Express starting in 2022 at the TH office in Wonoasri District, Caruban, Madiun Regency. I delivered packages in the Saradan District area, including Bener, Tulung, Klumutan, Sumbersari, Sumberbendo, Klangon, and Pajaran villages. A Regular or Partner Courier is not a permanent courier and is not targeted by the company, and works only when the number of packages surges."},skilled:kC,portofolio:SC,"porto menu":{portofolio:"MY Portfolio",design:"Design",detail:"See Detail",type:"type",desc:"Description",web:"Website","Detail Figma":"Figma Detail",tool:"Tools/Library/Framework",link:"Link To Show Case"},trainning:EC,deskripsi:RC,sertifikat:CC,partner:PC,kontak:OC,"lokasi menu":{alamat:"Address",telepon:"Phone",email:"Email"},"detail lokasi":{alamat:"Jatirejo Village, Rt. 12/Rw. 02, Wonoasri District, Madiun Regency",telepon:"+62 857-8224-4135",email:"pamungkaslatifbudi@gmail.com"},"Media Sosial":"Social Media",kirim:_C,Umpan:jC},MC="Selamat datang di portofolio saya",qC={home:"Beranda",resume:"Riwayat",pengalaman:"Pengalaman",skill:"Keahlian",project:"Proyek",training:"Pelatihan",sertifikat:"Sertifikat"},AC="Selamat datang di portofolio saya",LC={general:"Saya adalah pribadi yang disiplin, bertanggung jawab, dan memiliki semangat kerja tinggi. Terbiasa bekerja dalam tim maupun secara mandiri serta selalu berusaha memberikan hasil terbaik dalam setiap tugas yang diberikan. Saya orang yang pekerja keras, teliti, dan mampu bekerja di bawah tekanan. Saya selalu berusaha menjaga kualitas pekerjaan dan menyelesaikan tugas tepat waktu dengan hasil yang maksimal. Saya memiliki kemampuan komunikasi yang baik dan mudah beradaptasi dengan lingkungan baru. Saya senang bekerja sama dengan orang lain dan selalu berusaha menciptakan suasana kerja yang positif. Saya percaya bahwa kerja keras dan kejujuran adalah kunci kesuksesan. Saya selalu berusaha belajar hal baru untuk meningkatkan kemampuan dan memberikan kontribusi terbaik bagi perusahaan.",it:"Saya memiliki keterampilan dalam membangun aplikasi berupa website berdasarkan design UI/UX. Dengan pengalaman mengikuti Bootcamp coding, saya mengetahui bagaimana proses membuat website yang sesuai dengan design UI/UX. Saya adalah pribadi yang suka belajar hal baru, pekerja keras, mampu bekerja dengan tim maupun individu. Mengasah keterampilan bagi saya adalah hal yang penting agar dapat berguna bagi diri sendiri, orang lain, dan perusahaan. Dengan menunjukkan hasil portofolio saya, saya yakin dapat memberikan kontribusi untuk perusahaan dan client.",greeting:"Halo",me:"Saya",name:"Latif Budi Pamungkas",mottoTitle:"Motto Saya:",motto:'"Saya bukan orang yang pintar, tapi saya adalah seseorang yang memahami proses dan bekerja keras. Pernah mencoba, pernah gagal — tidak masalah. Coba lagi, gagal lagi, gagal dengan lebih baik. Allah selalu mendengar dan selalu ada di sampingku. Perlakukan semua orang dengan baik dan terangi malam dengan kebaikan."',social:"Lihat media sosial saya"},NC={title1:"My",title2:"Resume",title:"Resume"},zC={profile:"Profil Pribadi",education:"Pendidikan",skill:"Keahlian",interest:"Minat"},IC={"profile title":"Profil Pribadi",province:"PROVINSI JAWA TIMUR",kabupaten:"KABUPATEN MADIUN"},DC={nama:"NAMA",tempatTanggalLahir:"TEMPAT/TANGGAL LAHIR",pendidikanTerakhir:"PENDIDIKAN TERAKHIR",jenisKelamin:"JENIS KELAMIN",alamat:"ALAMAT",agama:"AGAMA",status:"STATUS PERKAWINAN",nomorTelepon:"NOMOR TELEPON",email:"EMAIL"},BC={nama:"LATIF BUDI PAMUNGKAS",tempatTanggalLahir:"MADIUN, 24 APRIL 1996",pendidikanTerakhir:"SMA",jenisKelamin:"LAKI - LAKI",alamat:"DUSUN 02,DS. JATIREJO, RT. 12/RW. 02, KEC. WONOASRI, KAB. MADIUN",agama:"ISLAM",status:"BELUM KAWIN",nomorTelepon:"085782244135",email:"pamungkaslatifbudi@gmail.com"},$C={educationTitle:"Pendidikan",education1:"SDN JATIREJO",education2:"SMPN 1 WONOASRI",education3:"SMAN 1 MEJAYAN",jurusan:"Jurusan",namajurusan:"IPS"},FC={skillTitle:"Keahlian",softSkill:"Soft Skill",hardSkill:"Hard Skill",disiplin:"Disiplin",jujur:"Jujur",mampuBekerja:"Mampu bekerja dengan tim maupun individu",komunikasi:"Mampu berkomunikasi dengan baik",komitmen:"Memiliki komitmen",pekerjaKeras:"Pekerja keras",bawahTekanan:"Mampu bekerja di bawah tekanan",las:"Las",komputer:"Komputer",inggris:"Bahasa Inggris",indonesia:"Bahasa Indonesia",korea:"Bahasa Korea"},VC={title:"Minat",futsal:"Futsal",game:"Game",musik:"Musik",belajar:"Belajar Hal Baru",coding:"Coding"},HC={title:"Keahlian",IT:"Teknologi Informasi",LAS:"Pengelasan"},WC={title1:"Portofolio",title2:"Wedspot Client",title3:"Wedspot Vendor",title4:"Proyek Detail Saya",title5:"Wedspot",title6:"Musicon",title7:"Situs Musicon",desc1:"Wedspot adalah aplikasi yang membantu pengguna untuk mendapatkan perencana pernikahan dan WO yang terpercaya sesuai dengan kebutuhan dan budget dari pengguna.",desc2:"Wedspot Vendor adalah aplikasi yang membantu pengguna mempromosikan layanan Wedding Organizer (WO), perencanaan pernikahan, atau usaha venue pernikahan dengan lebih mudah melalui jaringan yang lebih luas.",detail_description1:`- user akan langsung di suguhi dengan tampilan halaman utama yang berisi dengan paket atau jasa dari beberapa vendor WO atau Venue sehingga user dapat memilih dan menentukan paket sesuai dengan tema pernikahan yang di inginkan

- user juga dapat melihat lebih banyak lagi paket di halaman berikutnya yaitu https://wedspot.vercel.app/package sehingga dapat membantu user untuk memilih sesuai keinginan sesuai dengan ketentuan mereka berdasarkan paket, budget, lokasi, dan total tamu undangan

- ketika user memilih salah satu paket maka user akan di arahkan ke halaman https://wedspot.vercel.app/vendor/6612bd8d8c8140912cdf439f halaman ini menyuguhkan atau menampilkan detail data mengenai vendor dan paket apa saja yang di miliki vendor tersebut, user dapat melihat paket yang berisi harga, lokasi, rating paket dan jumlah pax atau undangan sesuai dengan nama paket tersebut.

- ketika user memilih salah satu paket yang di miliki oleh vendor tersebut maka user akan di arahkan lagi ke halaman https://wedspot.vercel.app/package/661392be94f3b21e8dff62d9 user akan di suguhkan detail dari paket yang di pilih berisi foto atau gambar review paket serta pelayanan apa saja yang di dapatkan jika memilih paket tersebut.

- jika user tertarik dengan detail paket yang di pilih, user dapat mengajukan permintaan quotation dengan menekan tombol ask for quotation dan akan menampilkan form berisi nama pengantin pria dan wanita, tempat tinggal, memilih lokasi pernikahan, memilih tanggal pernikahan yang akan di selenggarakan, budget atau anggaran yang sesuai dengan paket, dan berapa banyak jumlah tamu undangan yang ingin di undang, di harapkan user login terlebih dahulu jika ingin mengajukan request quotation karena jika user belum login dan menekan tombol request quotation user akan di arahkan ke halaman login dan register terlebih dahulu.

- setelah user mengisi semua data dengan lengkap dan sesuai dengan keinginan user, user dapat mengirim request ke vendor lalu data akan di terima oleh vendor lalu user akan menunggu response balasan dari vendor untuk proses selanjutnya.

- user dapat melihat data request quotation di halaman profile https://wedspot.vercel.app/profile dan user akan mendapatkan notifikasi yang berisi request sudah dikirim dan request di response oleh vendor.

- di halaman profile user akan melihat data pribadi, notifikasi request quotation dan response vendor, dan data quotation yang di kirim ke vendor dan data inbox quotation yang berisi quotation balasan dari vendor.
  note: (halaman profile dapat di akses jika user sudah login)`,detail_description2:`- di vendor website wedspot user akan langsung di arahkan ke halaman utama yaitu login dan register bagi user yang belum terdaftar di sarankan untuk register terlebih dahulu dan bagi user yang sudah terdaftar bisa langsung mengisi form login untuk masuk ke halaman berikutnya.

 - setelah user masuk atau sudah login user akan di arahkan ke halaman My Store yang mana user di minta untuk melengkapi data informasi mengenai nama toko dan jenis vendor WO atau venue, user wajib mengisi Store Header, Store Avatar, Store_name Contact number, Email, Website, dst.

 - setelah user selesai melengkapi semua data, user dapat mengakses ke halaman membuat paket di bagaian halaman, membuat paket user dapat mengupload gambar paket yang sesuai untuk di pasarkan, menentukan nominal harga paket, menentukan jumlah maksimal dan minilmal tamu undangan, menentukan lokasi, serta memberikan deskripsi mengenai detail pelayanan berdasarkan nama paketnya.
 note: (user dapat mengakses halaman paket jika user sudah melengkapi semua data diri nama toko atau nama vendor)

 - setelah semua data sudah terisi baik data diri vendor dan data detail paket yang sudah di buat maka semua data di simpan dan akan tampil di web wedspot client sehingga datanya dapat di lihat oleh client atau customer yang akan memesan paket yang sudah di buat oleh vendor sebelumnya.

 - akan muncul notifikasi ketika terdapat pesanan dari client atau customer dan data pesanan atau request akan tersimpan  di halaman quotations.

 - di halaman quotation, vendor akan merespon dengan mengupload file pdf yang berisi tentang detail quotation yang akan di kirim kembali ke client atau customer.

 - halaman paket dan halaman my store dapat di edit sesuai kebutuhan`},UC={title:"Pelatihan atau Kursus",foo:"FOO (Petugas Operasi Penerbangan)",glints:"Glints Academy Bootcamp",las:"BLK Mojokerto"},KC={foo:"Saya mengikuti training atau pelatihan penerbangan dimulai pada pertengahan tahun 2018 hingga berakhir di tahun 2020.Dalam pelatihan tersebut saya mengambil program FOO (Flight Operation Officer) kurang lebih selama 1 tahun, 3 bulan kelas teori, 3 bulan kelas simulasi, dan 3 bulan on job training di PT Sriwijaya Airline.",glints:"Glints Academy Bootcamp adalah pelatihan atau training coding yang ditempuh hanya dalam waktu 3 bulan. Saya masuk di pertengahan tahun 2021 dan mengambil program Frontend Developer. Dalam pelatihan ini saya belajar membuat aplikasi berbasis web. Materi yang saya pelajari selama mengikuti bootcamp adalah ReactJS, Bootstrap, CSS, HTML, dan Redux Saga. Proses pembelajaran dilakukan secara intensif melalui Zoom atau online setiap hari dengan mengikuti kelas pagi dan dilanjutkan dengan review kelas malam. Setiap minggu kami diberi tugas, dan setelah 1 bulan setengah semua materi telah disampaikan, kami melanjutkan ke mini project membuat web movie. Pada bulan terakhir kami fokus mengerjakan final project berupa website atau aplikasi bernama Wedspot. Seluruh proses pengerjaan dilakukan secara tim dan berdasarkan desain UI/UX.",las:"Saya mengikuti pelatihan di BLK Mojokerto dengan mengambil program pelatihan pengelasan plat 3G. Saya mulai pada akhir tahun 2023. Pelatihan dilaksanakan selama 1 bulan setengah. Pengelasan 3G adalah posisi pengelasan secara vertikal untuk menyambung dua plat dengan cara membuat tembusan atau groove. Proses pengelasan menggunakan mesin las listrik dan stik las LB52U untuk tembusan dan RD60 untuk filler serta caping. Polaritas yang digunakan untuk proses kampuh atau tembusan adalah DCEN (Direct Current Electrode Negative), sedangkan polaritas yang digunakan untuk filler dan caping adalah DCEP (Direct Current Electrode Positive)."},YC="Sertifikat",GC="Partner Saya",XC="Kontak",QC="Kirim",ZC={"Nama Lengkap":"Nama Lengkap...",Email:"Email...",Pesan:"Pesan..."},JC={title:MC,navbar:qC,welcome:AC,profile:LC,resume:NC,menu:zC,profileTitle:IC,profileMenu:DC,profileContent:BC,education:$C,skill:FC,tertarik:VC,"Pengalaman Kerja":{title:"Pengalaman Kerja",detail:"Lihat Detail",catering:"Katering",type1:"Lion Boga",foo:"Magang di FOO",type2:"Sriwijaya Air",grab:"Grab",type3:"Pengemudi Ojek Online","id express":"ID Express",type4:"Kurir Pengiriman",shopee:"Shopee Express",type5:"Kurir Paket"},"detail menu":{title:"Detail Pengalaman Kerja Saya",perusahaan:"Perusahaan",posisi:"Posisi","lama bekerja":"Lama Bekerja",deskripsi:"Deskripsi"},"detail pekerjaan":{pt1:"PT Angkasa Aviasi Servis",catering:"Staf Layanan Katering",lama1:"Januari 2015 - Januari 2018","dekripsi kerja1":`- sebagai petugas catering service di maskapai hal pertama yang saya lakukan adalah memeriksa jadwal penerbangan sehingga dapat mengetahui jumlah pesawat dan rute mana saja yang beroperasi.
- memeriksa kelengkapan barang dan makanan yang siap di muat ke cabin pesawat berdasarkan route penerbangan.
- barang yang di maksud adalah tisu, napkin, plastik tea spon, paper cup, plastik cup, roll tissue, dan air mineral sedangkan untuk yang makanan berupa snack dan makanan frozen yang nantinya akan di massukkan ke dalam trolley galley, lalu jumlah barang dan makanan tersebut di tentukan dengan berapa landing pesawat tersebut beroperasi.
- ketika barang dan makanan sudah di periksa semua dan lengkap sesuai dengan rute penerbangan, saya bersama petugas yang lain bersiap menuju ke lapangan untuk menguplift atau memuat semua barang yang ada di dalam trolley galley ke dalam pesawat dengan menggunakan truk HTC yang nantinya makanan dan minuman yang ada di dalam trolley tersebut akan di gunakan untuk pelayanan oleh pramugari kepada penumpang selama pesawat mengudara.
- setelah semua sudah selesai termuat ke dalam pesawat selanjutnya saya bersama tim yang lain memonitor dan memeriksa pesawat yang lain mengenai kelengkapan stok barang yang tersisa di dalam pesawat apakah masih cukup atau kurang untuk penerbangan berikutya jika kurang maka akan dimuat jika masih cukup tidak perlu di tambah atau di ganti.`,pt2:"PT Sriwijaya Air",siswa:"Siswa Magang Flight Operation Officer",lama2:"September 2019 - Januari 2020","dekripsi kerja2":`- Sebagai siswa Flight Operation Officer (FOO) yang melaksanakan OJT atau magang di perusahaan Sriwijaya Air, saya diwajibkan untuk mengikuti peraturan perusahaan selayaknya seperti karyawan yang bekerja sebagai FOO di sana, bekerja selama 8 jam dan mengikuti shift kerja di perusahaan tersebut.
- Saya belajar dan mengikuti arahan karyawan atau senior saya yang sudah bekerja di perusahaan tersebut.
- Hal pertama yang saya lakukan adalah mempersiapkan dokumen penerbangan seperti NOTAM, flight plan, SIGMET, dan windtemp yang nantinya akan diserahkan kepada kapten atau pilot sebelum terbang.
- Setelah itu, saya melanjutkan untuk memonitor pesawat yang berangkat dan tiba di bandara melalui flight radar.
- Membuat flight plan dan menghitung loadsheet untuk penerbangan selanjutnya.
- Melakukan briefing kepada pilot mengenai cuaca, NOTAM, flight, dan loadsheet sebelum keberangkatan.
- Flight plan berisi tentang perhitungan bahan bakar berdasarkan jarak rute penerbangan dan berat pesawat.
- Loadsheet berisi tentang perhitungan keseimbangan pesawat berdasarkan jumlah penumpang dan jumlah bagasi di dalam kompartemen.
- Berkomunikasi dengan pilot melalui radio komunikasi.
- Membuat jadwal penerbangan berdasarkan rute penerbangan.
- Mengajukan slot time ke pihak ATC untuk pelayanan komunikasi dan permintaan jadwal antre keberangkatan pesawat.`,pt3:"PT Grab Indonesia",driver:"Driver Ojek Online",lama3:"Agustus 2018 - Januari 2021","dekripsi kerja3":`- Saya mendaftar di Grab sebagai driver ojek online mulai tahun 2018 semenjak saya menjadi siswa FOO di Merpati Training Center sampai 2021, selama saya magang di Sriwijaya Air saya menjadi driver ojek online Grab di wilayah Surabaya, area Juanda Sedati Agung Sidoarjo dan wilayah Surabaya kota sebagai pekerjaan sampingan.
- Bertugas untuk mengantarkan penumpang dan makanan sesuai dengan permintaan di aplikasi.`,pt4:"PT ID Express Logistik Indonesia","kurir id":"Kurir Event",lama4:"2021 - 2022","dekripsi kerja4":"- Saya bekerja sebagai kurir di ID Express mulai masuk tahun 2021 di TH kantor Mulyosari Surabaya, saya mengantar paket di wilayah atau area sekitar pantai Kenjeran dan area ITS (Institut Teknologi Sepuluh Nopember), selanjutnya saya pindah di TH Sukodono dan mengirim paket di wilayah kabupaten Sidoarjo area Kec. Buduran yaitu perumahan Valencia, perumahan Permata Alam Permai, dan desa Gemurung. Kurir event adalah kurir yang hanya bekerja jika ada event Shopee, Lazada, atau Tokopedia.",pt5:"PT Shopee Express Indonesia","kurir shopee":"Kurir Mitra",lama5:"2022 - 2023","dekripsi kerja5":"- Saya bekerja sebagai kurir di Shopee Express mulai masuk tahun 2022 di TH kantor Kec. Wonoasri Caruban Kab. Madiun, saya mengantar paket di wilayah atau area Kec. Saradan desa Bener, Tulung, Klumutan, Sumbersari, Sumberbendo, Klangon, Pajaran. Kurir Reguler atau Mitra adalah bukan kurir tetap yang tidak di target oleh perusahaan dan kurir yang bekerja jika jumlah paket membludak."},skilled:HC,portofolio:WC,"porto menu":{portofolio:"Portofolio Saya",design:"Desain",detail:"Lihat Detail",type:"tipe",desc:"Deskripsi",web:"Situs Web","Detail Figma":"Detail Figma",tool:"Alat/Perpustakaan/Kerangka Kerja",link:"Tautan ke Tampilan Proyek"},trainning:UC,deskripsi:KC,sertifikat:YC,partner:GC,kontak:XC,"lokasi menu":{alamat:"Alamat",telepon:"No. Telp",email:"Email"},"detail lokasi":{alamat:"Ds. Jatirejo Rt. 12/Rw. 02 Kec. Wonoasri Kab. Madiun",telepon:"085782244135",email:"pamungkaslatifbudi@gmail.com"},"Media Sosial":"Media Sosial",kirim:QC,Umpan:ZC},eP="제 포트폴리오에 오신 것을 환영합니다",tP={home:"홈",resume:"이력서",pengalaman:"경험",skill:"기술",project:"프로젝트",training:"훈련",sertifikat:"자격증"},rP="제 포트폴리오에 오신 것을 환영합니다",nP={general:"저는 성실하고 책임감이 강한 사람입니다. 팀과 함께 또는 혼자서도 일할 수 있으며, 맡은 일에는 항상 최선을 다합니다. 저는 근면하고 세심하며, 압박 속에서도 잘 일할 수 있습니다. 업무의 품질을 유지하고 정해진 시간 안에 마무리하려고 항상 노력합니다. 또한 의사소통 능력이 좋고 새로운 환경에 잘 적응합니다. 다른 사람과 협력하는 것을 좋아하며 긍정적인 근무 분위기를 만드는 것을 중요하게 생각합니다. 저는 근면함과 정직함이 성공의 열쇠라고 믿습니다. 항상 새로운 것을 배우며 제 능력을 발전시키고 회사에 최선을 다해 기여하려고 합니다.",it:"저는 UI/UX 디자인을 기반으로 한 웹사이트 제작 능력을 가지고 있습니다. 코딩 부트캠프에 참여한 경험을 통해 디자인에 맞는 웹사이트 제작 과정을 배웠습니다. 저는 새로운 것을 배우는 것을 좋아하고, 근면하며, 팀과 개인 모두로서 잘 일할 수 있는 사람입니다. 제 실력을 향상시키는 것은 저 자신과 타인, 그리고 회사에 도움이 되기 때문에 매우 중요하다고 생각합니다. 포트폴리오를 통해 제 역량을 보여드릴 수 있으며, 회사와 고객에게 기여할 수 있다고 확신합니다.",greeting:"안녕하세요",me:"저는",name:"라티프 부디 파문카스입니다",mottoTitle:"저의 좌우명:",motto:'"저는 똑똑한 사람은 아니지만, 과정과 노력의 가치를 아는 사람입니다. 시도하고, 실패하고 — 상관없습니다. 다시 시도하고, 다시 실패하고, 더 나아집니다. 알라는 언제나 제 곁에 있으며 제 말을 들어주십니다. 모든 사람에게 친절하게 대하고 밤을 밝히세요."',social:"제 소셜 미디어를 확인해 보세요"},iP={title1:"제",title2:"이력서",title:"이력서"},aP={profile:"개인 프로필",education:"학력",skill:"기술",interest:"관심사"},oP={"profile title":"개인 프로필",province:"자바 주",kabupaten:"마디운 군"},lP={nama:"이름",tempatTanggalLahir:"출생지/생년월일",pendidikanTerakhir:"최종 학력",jenisKelamin:"성별",alamat:"주소",agama:"종교",status:"결혼 여부",nomorTelepon:"전화번호",email:"이메일"},sP={nama:"라티프 부디 파뭉까스",tempatTanggalLahir:"마디운, 1996년 4월 24일",pendidikanTerakhir:"고등학교 졸업",jenisKelamin:"남성",alamat:"두순 02, 자티레조 마을, RT 12/RW 02, 워노아스리 구, 마디운 군",agama:"이슬람",status:"미혼",nomorTelepon:"085782244135",email:"pamungkaslatifbudi@gmail.com"},uP={educationTitle:"학력",education1:"자티레조 초등학교",education2:"워노아스리 제1 중학교",education3:"메자얀 제1 고등학교",jurusan:"전공",namajurusan:"사회과"},dP={skillTitle:"기술",softSkill:"소프트 스킬",hardSkill:"하드 스킬",disiplin:"규율",jujur:"정직",mampuBekerja:"팀과 개인 모두에서 일할 수 있음",komunikasi:"의사소통 능력 우수",komitmen:"헌신적임",pekerjaKeras:"성실한 근로자",bawahTekanan:"압박 속에서도 일할 수 있음",las:"용접",komputer:"컴퓨터",inggris:"영어",indonesia:"인도네시아어",korea:"한국어"},cP={title:"관심사",futsal:"풋살",game:"게임",musik:"음악",belajar:"새로운 것을 배우기",coding:"코딩"},pP={title:"기술",IT:"정보 기술",LAS:"용접"},fP={title1:"포트폴리오",title2:"웨드스팟 클라이언트",title3:"웨드스팟 벤더",title4:"제 상세 프로젝트",title5:"웨드스팟",title6:"뮤지콘",title7:"뮤지콘 웹사이트",desc1:"웨드스팟은 사용자가 자신의 필요와 예산에 맞는 신뢰할 수 있는 웨딩 플래너와 웨딩 오거나이저(WO)를 찾을 수 있도록 도와주는 애플리케이션입니다.",desc2:"웨드스팟 벤더는 사용자가 웨딩 오거나이저(WO) 서비스와 웨딩 플래닝 또는 예식장(베뉴) 사업을 더 넓은 네트워크를 통해 쉽게 홍보할 수 있도록 도와주는 애플리케이션입니다",detail_description1:`- 사용자는 메인 페이지 화면에서 여러 웨딩 플래너(WO) 또는 베뉴(Venue) 업체의 패키지나 서비스를 바로 볼 수 있으며, 원하는 결혼식 테마에 따라 패키지를 선택하고 결정할 수 있습니다.

- 사용자는 다음 페이지 https://wedspot.vercel.app/package 에서 더 많은 패키지를 볼 수 있으며, 이를 통해 패키지, 예산, 위치 및 초대 손님 수를 기준으로 자신의 취향과 조건에 맞게 선택할 수 있습니다.

- 사용자가 패키지 중 하나를 선택하면, https://wedspot.vercel.app/vendor/6612bd8d8c8140912cdf439f 페이지로 이동하게 됩니다. 이 페이지는 해당 벤더와 그 벤더가 보유한 패키지의 세부 정보를 보여줍니다. 사용자는 패키지 이름에 따라 가격, 위치, 패키지 평점 및 초대 인원 수가 포함된 패키지를 확인할 수 있습니다.

- 사용자가 벤더가 보유한 패키지 중 하나를 선택하면, 다시 https://wedspot.vercel.app/package/661392be94f3b21e8dff62d9 페이지로 이동하게 되며, 선택한 패키지의 세부 정보, 사진 또는 패키지 리뷰 이미지 및 해당 패키지를 선택할 경우 받을 수 있는 서비스 내용이 표시됩니다.

- 사용자가 선택한 패키지의 세부 정보에 관심이 있는 경우, 'Ask for Quotation' 버튼을 클릭하여 견적 요청 양식을 제출할 수 있습니다. 양식에는 신랑과 신부의 이름, 거주지, 결혼식 장소, 예정 결혼식 날짜, 패키지에 맞는 예산, 초대 인원 수 등의 항목이 포함됩니다. 견적 요청을 제출하려면 먼저 로그인해야 하며, 로그인하지 않은 상태에서 버튼을 누르면 로그인 및 회원가입 페이지로 리디렉션됩니다.

- 사용자가 모든 데이터를 완전히 입력하고 자신의 의도에 맞게 작성한 후, 벤더에게 요청을 보낼 수 있습니다. 데이터는 벤더에게 전달되며, 사용자는 이후 벤더의 응답을 기다립니다.

- 사용자는 프로필 페이지 https://wedspot.vercel.app/profile 에서 자신이 제출한 견적 요청 데이터를 볼 수 있으며, 요청이 전송되고 벤더가 응답했다는 알림을 받게 됩니다.

- 프로필 페이지에서 사용자는 개인 정보, 견적 요청 및 벤더의 응답 알림, 벤더에게 보낸 견적 데이터 및 벤더의 견적 회신이 포함된 인박스 견적 데이터를 볼 수 있습니다.
비고: 프로필 페이지는 사용자가 로그인한 경우에만 접근할 수 있습니다.`,detail_description2:`- Wedspot 벤더 웹사이트에서 사용자는 로그인 및 회원가입 페이지로 바로 이동합니다. 아직 등록하지 않은 사용자는 먼저 회원가입하는 것이 권장되며, 이미 등록한 사용자는 로그인 양식을 작성하여 다음 페이지로 이동할 수 있습니다.

- 사용자가 로그인에 성공하면, 'My Store(내 상점)' 페이지로 이동하게 되며, 이곳에서 사용자는 자신의 상점 이름과 웨딩 플래너(WO) 또는 베뉴(Venue) 공급업체 유형에 대한 정보를 완성해야 합니다. 사용자는 스토어 헤더(Store Header), 스토어 아바타(Store Avatar), 상점 이름(Store Name), 연락처(Contact Number), 이메일(Email), 웹사이트(Website) 등을 반드시 입력해야 합니다.

- 모든 정보를 입력한 후, 사용자는 패키지 생성 페이지에 접근할 수 있습니다. 패키지 생성 페이지에서 사용자는 마케팅용으로 적합한 패키지 이미지를 업로드하고, 패키지의 가격을 설정하며, 초대 가능한 최대 및 최소 인원수를 지정하고, 위치를 설정한 뒤, 패키지 이름에 따라 제공되는 서비스의 세부 설명을 작성해야 합니다.
참고: 사용자는 상점 이름 또는 벤더 이름과 같은 개인 정보가 모두 완성된 경우에만 패키지 페이지에 접근할 수 있습니다.

- 모든 데이터가 입력되면, 벤더의 개인 정보와 작성된 패키지 세부 정보는 저장되며, Wedspot 클라이언트 웹사이트에 표시됩니다. 이렇게 하면 클라이언트나 고객이 벤더가 생성한 패키지를 볼 수 있고, 그 패키지를 주문할 수 있습니다.

- 클라이언트나 고객으로부터 주문이나 요청이 있을 경우, 알림이 표시되며 해당 주문 또는 요청 데이터는 ‘Quotations(견적)’ 페이지에 저장됩니다.

- ‘Quotations’ 페이지에서 벤더는 견적 세부 정보가 포함된 PDF 파일을 업로드하여 클라이언트나 고객에게 다시 보낼 수 있습니다.

- 패키지 페이지와 My Store(내 상점) 페이지는 필요에 따라 수정할 수 있습니다.`},mP={title:"훈련 또는 과정",foo:"FOO (항공 운항 관리자)",glints:"Glints Academy 부트캠프",las:"모조케르토 직업훈련소 (BLK Mojokerto)"},hP={foo:"저는 2018년 중반부터 2020년까지 항공 교육을 받았습니다. 그 교육에서 저는 약 1년 동안 FOO(항공 운항 관리자) 과정을 이수했습니다. 이 과정은 3개월 이론 수업, 3개월 시뮬레이션 수업, 그리고 3개월 동안 PT 스리위자야 항공사에서의 현장 실습으로 구성되어 있었습니다.",glints:"Glints Academy 부트캠프는 단 3개월 만에 이수할 수 있는 코딩 교육 과정입니다. 저는 2021년 중반에 입학하여 프론트엔드 개발자 과정을 수강했습니다. 이 교육에서 저는 웹 기반 애플리케이션을 만드는 방법을 배웠습니다. 배운 내용에는 ReactJS, Bootstrap, CSS, HTML, Redux Saga가 포함되어 있습니다. 학습 과정은 매일 아침 수업과 저녁 리뷰 수업을 포함한 Zoom 온라인 수업으로 집중적으로 진행되었습니다. 매주 과제가 주어졌으며, 한달반 후 모든 이론이 끝난 뒤에는 미니 프로젝트로 영화 웹사이트를 만들었습니다. 마지막 달에는 Wedspot이라는 최종 프로젝트 웹사이트/웹 애플리케이션 개발에 전념했습니다. 모든 프로젝트 작업은 팀으로 진행되었으며 UI/UX 디자인을 기반으로 수행되었습니다.",las:"저는 2023년 말에 모조케르토 직업훈련소(BLK Mojokerto)에서 3G 판금 용접 교육 과정을 수강했습니다. 교육은 약 한 달 반 동안 진행되었습니다. 3G 용접은 두 금속판을 수직 방향으로 용접하여 관통부(groove)를 만드는 용접 자세입니다. 용접 과정에는 전기 용접기와 용접봉을 사용했으며, 관통부에는 LB52U 용접봉을, 필러 및 캡핑에는 RD60 용접봉을 사용했습니다. 관통부(루트 패스) 과정에는 DCEN(직류 전극 음극)을 사용하고, 필러 및 캡핑 과정에는 DCEP(직류 전극 양극)을 사용했습니다."},gP="자격증",xP="제 파트너",vP="연락처",bP="제출",yP={"Nama Lengkap":"성명...",Email:"이메일...",Pesan:"메시지..."},wP={title:eP,navbar:tP,welcome:rP,profile:nP,resume:iP,menu:aP,profileTitle:oP,profileMenu:lP,profileContent:sP,education:uP,skill:dP,tertarik:cP,"Pengalaman Kerja":{title:"경력 사항",detail:"자세히 보기",catering:"케이터링",type1:"라이온 보가",foo:"FOO 현장 실습",type2:"스리위자야 에어",grab:"그랩 ",type3:"오토바이 기사","id express":"ID 익스프레스",type4:"택배 기사",shopee:"쇼피 익스프레스 택배 기사",type5:"택배 기사"},"detail menu":{title:"제 경력 세부 사항",perusahaan:"회사명",posisi:"직위","lama bekerja":"근무 기간",deskripsi:"업무 내용"},"detail pekerjaan":{pt1:"PT Angkasa Aviasi Servis",catering:"기내식 서비스 직원",lama1:"2015년 1월 - 2018년 1월","dekripsi kerja1":`- 항공사 케이터링 서비스 직원으로서 제가 가장 먼저 하는 일은 비행 
일정을 확인하여 운항 중인 항공기의 수와 노선을 파악하는 것이었습니다.
- 비행 노선에 따라 항공기 객실에 적재할 준비가 된 물품과 음식의 완비 상태를 점검했습니다.
- 여기서 말하는 물품은 티슈, 냅킨, 플라스틱 티스푼, 종이컵, 플라스틱 컵, 롤 티슈, 생수 등이었으며, 음식은 스낵과 냉동식품으로, 나중에 갤리 트롤리에 적재됩니다. 이러한 물품과 음식의 수량은 해당 항공기의 착륙 횟수에 따라 결정되었습니다.
- 모든 물품과 음식이 비행 노선에 맞게 점검되고 완비된 후, 저는 다른 직원들과 함께 HTC 트럭을 이용해 갤리 트롤리에 담긴 모든 물품을 항공기에 적재하기 위해 현장으로 이동했습니다. 트롤리에 담긴 음식과 음료는 비행 중 승무원이 승객에게 서비스를 제공할 때 사용됩니다.
- 모든 적재 작업이 완료된 후, 저는 팀원들과 함께 다른 항공기의 물품 재고 상태를 점검하여 다음 비행을 위한 물품이 충분한지 확인했습니다. 부족한 경우에는 다시 적재하고, 충분한 경우에는 추가하거나 교체하지 않았습니다.`,pt2:"PT Sriwijaya Air",siswa:"항공 운항 담당자 실습생",lama2:"2019년 9월 - 2020년 1월","dekripsi kerja2":`- 스리위자야항공에서 현장실습(OJT)을 수행하는 비행운항관제사(FOO) 실습생으로서, 저는 회사의 규정을 정식 직원들과 동일하게 준수해야 했습니다. 하루 8시간 근무하며 회사의 교대 근무제에 참여했습니다.
- 저는 회사에서 근무하는 선배들과 직원들의 지도를 받으며 배우고 따랐습니다.
- 제가 처음으로 수행한 일은 비행 전 선장(기장)에게 전달할 NOTAM, 비행계획서(flight plan), SIGMET, windtemp 등의 비행 관련 문서를 준비하는 일이었습니다.
- 이후 공항의 항공기 출발 및 도착 상황을 항공기 레이더(flight radar)를 통해 모니터링했습니다.
- 다음 비행을 위해 비행계획서와 중량균형표(loadsheet)를 작성했습니다.
- 출발 전 조종사에게 기상, NOTAM, 비행 정보 및 중량균형표 내용을 브리핑했습니다.
- 비행계획서에는 항공기의 연료 소모량이 비행 거리와 기체 중량을 기준으로 계산되어 있습니다.
- 중량균형표(loadsheet)는 승객 수와 수하물 중량을 기준으로 항공기의 균형을 계산하는 문서입니다.
- 조종사와 무전기를 통해 통신했습니다.
- 비행 노선에 따라 비행 일정을 작성했습니다.
- ATC(항공교통관제)에 슬롯타임(slot time)을 요청하여 통신 서비스 및 이륙 대기 순서를 조정했습니다.`,pt3:"PT Grab Indonesia",driver:"오토바이 기사",lama3:"2018년 8월 - 2021년 1월","dekripsi kerja3":`- 저는 2018년 머르파티 트레이닝 센터에서 FOO 교육생으로 있던 시절부터 2021년까지 그랩(Grab) 오토바이 기사로 등록하여 근무했습니다. 스리위자야항공에서 실습(OJT)을 하는 동안 부업으로 수라바야 지역, 주안다(Juanda), 세다티 아궁(Sedati Agung) 시도아르조(Sidoarjo) 및 수라바야 시내 지역에서 그랩 오토바이 기사로 일했습니다.
- 애플리케이션에서 요청된 대로 승객과 음식을 운송하는 업무를 담당했습니다.`,pt4:"PT ID Express Logistik Indonesia","kurir id":"이벤트 택배 기사",lama4:"2021년 - 2022년","dekripsi kerja4":"- 저는 2021년 수라바야 물리오사리(Mulyosari) 지점(ID 익스프레스)에서 택배 기사로 근무를 시작했습니다. 켄제로안 해변(Pantai Kenjeran)과 인도네시아 제10공과대학교(ITS) 주변 지역에 소포를 배송했습니다. 이후 저는 수코도노(Sukodono) 지점으로 옮겨 시도아르조(Sidoarjo) 군 부두란(Buduran) 지역의 발렌시아(Valencia) 주택단지, 퍼르마타 알람 퍼르마이(Permata Alam Permai) 주택단지, 그리고 게무룽(Gemurung) 마을에 소포를 배달했습니다. 이벤트 택배 기사는 쇼피(Shopee), 라자다(Lazada), 또는 토코피디아(Tokopedia)의 이벤트가 있을 때만 일하는 택배 기사입니다.",pt5:"PT Shopee Express Indonesia","kurir shopee":"파트너 택배 기사",lama5:"2022년 - 2023년","dekripsi kerja5":"- 저는 2022년 마디운(Madiun) 주 카루반(Caruban) 우노아스리(Wonoasri) 지역 사무소(Shopee 익스프레스)에서 택배 기사로 근무를 시작했습니다. 사라단(Saradan) 지역의 베너(Bener), 툴룽(Tulung), 클루무탄(Klumutan), 숨버사리(Sumbersari), 숨버벤도(Sumberbendo), 클랑곤(Klangon), 파자란(Pajaran) 마을에 소포를 배송했습니다. 정규 또는 파트너 택배 기사는 정규직이 아니며 회사의 목표 물량에 포함되지 않고, 소포 물량이 급증할 때만 근무합니다."},skilled:pP,portofolio:fP,"porto menu":{portofolio:"제 포트폴리오",design:"디자인",detail:"자세히 보기",type:"유형",desc:"설명",web:"웹사이트","Detail Figma":"피그마 상세정보",tool:"도구/라이브러리/프레임워크",link:"프로젝트 보기 링크"},trainning:mP,deskripsi:hP,sertifikat:gP,partner:xP,kontak:vP,"lokasi menu":{alamat:"주소",telepon:"전화번호",email:"이메일"},"detail lokasi":{alamat:"자티레조 마을 Rt. 12/Rw. 02, 워노아스리 구, 마디운 군",telepon:"+62 857-8224-4135",email:"pamungkaslatifbudi@gmail.com"},"Media Sosial":"소셜 미디어",kirim:bP,Umpan:yP};Rt.use(A2).use(B3).init({resources:{en:{translation:TC},id:{translation:JC},ko:{translation:wP}},fallbackLng:"en",interpolation:{escapeValue:!1}});const kP=()=>{const[e,r]=de.useState(!1),[i,a]=de.useState(!1),[l,s]=de.useState("home"),[u,c]=de.useState("id"),{t:p,i18n:m}=lt(),[x,g]=de.useState(!1),h=["home","resume","pengalaman","skill","project","training","sertifikat"],w=()=>{window.scrollY>=80?a(!0):a(!1)};de.useEffect(()=>(window.addEventListener("scroll",w),()=>{window.removeEventListener("scroll",w)}),[]);const k=M=>{const O=document.getElementById(M);O&&O.scrollIntoView({behavior:"smooth"}),r(!1),s(M)};de.useEffect(()=>{const M=new IntersectionObserver(O=>{O.forEach(A=>{console.log("Intersecting:",A.target.id,A.isIntersecting),A.isIntersecting&&s(A.target.id)})},{threshold:.1});return h.forEach(O=>{const A=document.getElementById(O);A&&M.observe(A)}),()=>{h.forEach(O=>{const A=document.getElementById(O);A&&M.unobserve(A)})}},[]);const S=M=>{c(M),m.changeLanguage(M),localStorage.setItem("selectedLang",M),g(!1)};return de.useEffect(()=>{const M=localStorage.getItem("selectedLang")||"id";c(M),m.changeLanguage(M)},[]),y.jsxs(SP,{navbar:i,children:[y.jsxs(CP,{children:[y.jsx(EP,{}),y.jsx(RP,{children:p("title")})]}),y.jsxs(PP,{bar:e,children:[h.map(M=>y.jsx(OP,{active:l===M,children:y.jsx("span",{onClick:()=>k(M),children:p(`navbar.${M}`)})},M)),y.jsx(_P,{children:y.jsxs(jP,{children:[y.jsxs(TP,{onClick:()=>g(!x),children:[u==="id"&&"Indonesia",u==="en"&&"English",u==="ko"&&"한국어"]}),x&&y.jsxs(MP,{children:[y.jsx(Yf,{onClick:()=>S("id"),active:u==="id",children:"🇮🇩 Indonesia"}),y.jsx(Yf,{onClick:()=>S("en"),active:u==="en",children:"🇺🇸 English"}),y.jsx(Yf,{onClick:()=>S("ko"),active:u==="ko",children:"🇰🇷 한국어"})]})]})})]}),y.jsx(qP,{className:"bars",onClick:()=>r(!e),children:y.jsx(AP,{bar:e})})]})},SP=U.div`
  @media (max-width: 1920px) {
    position: fixed;
    width: ${({navbar:e})=>"100%"};
    display: flex;
    z-index: 150;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* padding-left: 9rem; */
    padding-right: 1rem;
    transition: 0.6s;
    align-items: center;
    background: ${({navbar:e})=>e?"black":"linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)"};
    justify-content: space-between;
  }

  /* paling aman untuk semua HP */
  @media (max-width: 320px) {
    position: fixed;
    width: ${({navbar:e})=>"100%"};
    display: flex;
    z-index: 150;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* padding-left: 9rem; */
    padding-right: 1rem;
    transition: 0.6s;
    align-items: center;
    background: ${({navbar:e})=>e?"black":"linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)"};
    justify-content: space-between;
  }
`,EP=U.div`
  /* span {
    font-family: PimpawCat;
  }
  color: white;
  font-size: 25px;
  border-radius: 50%;
  padding: 1rem;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(3, 77, 166, 1) 100%
  ); */
  @media (max-width: 640px) {
    font-size: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    background-image: url(${"/images/foto.jpg"});
    background-size: cover;
  }

  span {
    @media (max-width: 640px) {
      display: none;
    }
  }
  /* @media (max-width: 700px) {
    font-size: 10rem;
    padding: 10px;
  } */
`,RP=U.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: white;
  /* font-size: 50px; */
  font-size: clamp(1.2rem, 2vw, 2rem);
  /* font-size: clamp(1rem, 1.5vw, 1.6rem); */
  /* font-size: clamp(0.9rem, 1.3vw, 1.4rem); */

  @media (max-width: 1120px) {
    font-size: 20px;
    /* padding: 2px 6px; */
  }

  @media (max-width: 884px) {
    font-size: 12px;
  }

  @media (max-width: 800px) {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    /* padding-left: 1rem; */
    /* padding-right: 1rem; */
    /* width:"100%" */
    /* font-size: clamp(0.9rem, 1.3vw, 1.4rem); */
    font-size: 14px;
  }

  /* HP kecil (iPhone SE) */
  @media (max-width: 480px) {
    padding-left: 0rem;
    /* margin-right: 1.5rem; */
    font-size: 13px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }
`,CP=U.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media (max-width: 640px) {
    gap: 10px;
  }
  @media (max-width: 700px) {
    gap: 10px;
  }
`,PP=U.div`
  display: flex;
  /* gap: 25px; */
  align-items: center;

  /* === FIX POSISI NAVBAR AGAR TIDAK GESER === */
  /* min-width: 750px;      samakan dengan tampilan saat bahasa Indonesia */
  justify-content: space-between;

  /* Tablet */
  @media (max-width: 768px) {
    /* padding-left: 1rem; */
    /* padding-right: 1rem; */
    /* width:"10px" */
    /* min-width: 100px; */
  }

  @media (max-width: 640px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #01be96;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${e=>e.bar?"100vh":0};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 99;
    /* margin-left: 2rem; */
    /* width: auto; */
  }

  @media (max-width: 700px) {
    font-size: 10px;
  }
  span {
    margin-left: 8px;
    margin-right: 8px;
    a {
      text-decoration: none;
      color: white;
    }
  }
`,OP=U.a`
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  position: relative;
  cursor: pointer;
  /* padding: 0.5rem; */
  /* min-width: 90px; */
  width: auto;
  text-align: center;
  white-space: nowrap;
  /* teks tidak turun ke bawah */

  :before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 2px;
    background-color: white;
    width: ${e=>e.active?"100%":"0"};
    transition: width 0.3s ease;
  }

  :hover:before {
    width: 100%;
  }

  /* Desktop besar */
  @media (max-width: 1920px) {
    /* padding-left: 7rem; */
    min-width: 90px;
    margin-left: 1rem;
  }

  /* Laptop besar */
  @media (max-width: 1280px) {
    /* padding-left: 4rem; */
    min-width: 90px;
    margin-left: 0%;
  }

  /* Laptop kecil / Tablet Landscape */
  @media (max-width: 1024px) {
    /* padding-left: 2rem; */
    /* padding-right: 1rem; */
    /* min-width: 90px; */
  }

  /* HP kecil (iPhone SE) */
  @media (max-width: 480px) {
    /* margin-right: 1.8rem; */
  }

  /* @media (max-width: 768px) {
    font-size: 10px;
  } */

  @media (min-width: 768px) and (max-width: 1024px) {
    /* warna berubah kalau active */
    color: ${e=>e.active?"#00e0ff":"#fff"};
    font-size: 10px;
    min-width: 40px;
    margin-left: 0%;
    /* hilangkan underline */
    :before {
      display: none;
    }

    :hover:before {
      display: none;
    }
  }
`,_P=U.div`
  position: relative;
  margin-left: 1rem;
  user-select: none;
  /* hp kecil */
  @media (max-width: 480px) {
    /* padding-left: 0.5rem; */
    /* padding-right: 0.5rem; */
    font-size: 6px;
  }
`,jP=U.div`
  position: relative;
  display: inline-block;
`,TP=U.div`
  background: transparent;
  border: 1px solid white;
  color: white;
  /* padding: 6px 12px; */
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1920px) {
    font-size: 15px;
    padding: 2px 6px;
  }

  @media (max-width: 1120px) {
    font-size: 15px;
    padding: 2px 6px;
  }

  @media (max-width: 843px) {
    font-size: 10px;
    padding: 2px 6px;
  }

  @media (max-width: 820px) {
    font-size: 10px;
    padding: 2px 6px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 2px 6px;
    margin-bottom: 4px;
  }

  /* HP kecil (iPhone SE) */
  @media (max-width: 480px) {
    font-size: 10px;
    margin-right: 1rem;
  }
`,MP=U.div`
  position: absolute;
  right: 0;
  top: 110%;
  background: #222;
  border: 1px solid #555;
  border-radius: 8px;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  /* align-items: center; */
  z-index: 999;
  min-width: 130px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  @media (max-width: 480px) {
    /* position: fixed; */
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    right: auto;
    background: #111;
    min-width: 200px;
    padding: 1rem;
  }
`,Yf=U.div`
  padding: 1px 10px;
  border-radius: 5px;
  color: ${e=>e.active?"#01be96":"white"};
  background: ${e=>e.active?"rgba(1,190,150,0.1)":"transparent"};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
  @media (max-width: 480px) {
    /* padding-left: 0rem; */
    /* padding-right: 0.5rem; */
    /* width:375px */
    font-size: 15px;
  }
`,qP=U.div`
  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
  }
`,AP=U.div`
  @media (max-width: 640px) {
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 2px;
    background-color: ${e=>e.bar?"transparent":"#fff"};
    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #fff;
      position: absolute;
    }

    &::before {
      transform: ${e=>e.bar?"rotate(45deg)":"translateY(10px)"};
      transition: all 400ms ease-in-out;
    }

    &::after {
      transform: ${e=>e.bar?"rotate(-45deg)":"translateY(-10px)"};
      transition: all 400ms ease-in-out;
    }
  }
`;var L2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},tv=it.createContext&&it.createContext(L2),LP=["attr","size","title"];function NP(e,r){if(e==null)return{};var i=zP(e,r),a,l;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)a=s[l],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function zP(e,r){if(e==null)return{};var i={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(r.indexOf(a)>=0)continue;i[a]=e[a]}return i}function Sc(){return Sc=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Sc.apply(this,arguments)}function rv(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),i.push.apply(i,a)}return i}function Ec(e){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?rv(Object(i),!0).forEach(function(a){IP(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):rv(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function IP(e,r,i){return r=DP(r),r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function DP(e){var r=BP(e,"string");return typeof r=="symbol"?r:r+""}function BP(e,r){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,r);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function N2(e){return e&&e.map((r,i)=>it.createElement(r.tag,Ec({key:i},r.attr),N2(r.child)))}function Lt(e){return r=>it.createElement($P,Sc({attr:Ec({},e.attr)},r),N2(e.child))}function $P(e){var r=i=>{var{attr:a,size:l,title:s}=e,u=NP(e,LP),c=l||i.size||"1em",p;return i.className&&(p=i.className),e.className&&(p=(p?p+" ":"")+e.className),it.createElement("svg",Sc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,a,u,{className:p,style:Ec(Ec({color:e.color||i.color},i.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&it.createElement("title",null,s),e.children)};return tv!==void 0?it.createElement(tv.Consumer,null,i=>r(i)):r(L2)}function z2(e){return Lt({attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.435 12.973c.269 0 .492.133.686.396.192.265.294.588.294.975 0 .385-.102.711-.294.973-.193.265-.417.396-.686.396-.278 0-.522-.131-.715-.396-.192-.262-.294-.588-.294-.973 0-.387.102-.71.294-.975.192-.264.436-.396.715-.396m3.44-3.559c.746.811 1.125 1.795 1.125 2.953 0 .748-.086 1.423-.259 2.023-.175.597-.394 1.084-.654 1.459-.264.376-.588.705-.974.989-.386.286-.741.492-1.065.623-.325.132-.695.233-1.111.306-.417.071-.726.111-.943.123l-.685.014-.547.015c-.301.013-.56.016-.762.016s-.461-.003-.762-.016l-.547-.015-.685-.014c-.218-.012-.526-.052-.943-.123-.423-.072-.786-.174-1.111-.306-.324-.131-.68-.337-1.064-.623-.387-.284-.711-.613-.975-.989-.261-.375-.479-.862-.654-1.459-.173-.6-.259-1.275-.259-2.023 0-1.158.379-2.143 1.125-2.953-.082-.041-.085-.447-.008-1.217.063-.771.227-1.482.495-2.132.934.099 2.09.629 3.471 1.581.466-.119 1.101-.183 1.917-.183.852 0 1.491.064 1.918.184.629-.425 1.23-.771 1.805-1.034.584-.261 1.005-.416 1.269-.457l.396-.09c.27.649.434 1.36.496 2.132.076.769.073 1.175-.009 1.216m-5.845 7.82c1.688 0 2.954-.202 3.821-.607.855-.404 1.292-1.238 1.292-2.496 0-.73-.273-1.34-.822-1.828-.278-.263-.613-.425-.989-.486-.375-.061-.949-.061-1.72 0-.769.062-1.298.09-1.582.09-.385 0-.8-.018-1.319-.059-.52-.04-.928-.065-1.223-.078-.294-.009-.609.027-.958.108-.345.082-.629.224-.853.425-.521.469-.79 1.077-.79 1.828 0 1.258.426 2.092 1.28 2.496.85.405 2.113.607 3.802.607h.061m-2.434-4.261c.268 0 .492.133.685.396.192.265.294.588.294.975 0 .385-.102.711-.294.973-.192.265-.417.396-.685.396-.279 0-.522-.131-.716-.396-.192-.262-.294-.588-.294-.973 0-.387.102-.71.294-.975.193-.264.436-.396.716-.396"},child:[]}]})(e)}function I2(e){return Lt({attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 3h-12c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zm-6 6c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm3.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2zm2.2 12h-12c-.6 0-1-.4-1-1v-6h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2v6c0 .6-.4 1-1 1z"},child:[]}]})(e)}function D2(e){return Lt({attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z"},child:[]},{tag:"ellipse",attr:{cx:"6.5",cy:"6.5",rx:"1.55",ry:"1.5"},child:[]}]})(e)}const FP="/assets/foto-ZxiwLVbK.jpg";var Gf={},Xf={},_a={},Qf={},nv;function VP(){return nv||(nv=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.default=r})(Qf)),Qf}var Zf,iv;function HP(){if(iv)return Zf;iv=1;var e="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,p=typeof vd=="object"&&vd&&vd.Object===Object&&vd,m=typeof self=="object"&&self&&self.Object===Object&&self,x=p||m||Function("return this")(),g=Object.prototype,h=g.toString,w=Math.max,k=Math.min,S=function(){return x.Date.now()};function M(j,C,P){var L,q,b,W,Y,N,F=0,ie=!1,ee=!1,R=!0;if(typeof j!="function")throw new TypeError(e);C=B(C)||0,O(P)&&(ie=!!P.leading,ee="maxWait"in P,b=ee?w(B(P.maxWait)||0,C):b,R="trailing"in P?!!P.trailing:R);function te(ae){var me=L,V=q;return L=q=void 0,F=ae,W=j.apply(V,me),W}function D(ae){return F=ae,Y=setTimeout(I,C),ie?te(ae):W}function E(ae){var me=ae-N,V=ae-F,oe=C-me;return ee?k(oe,b-V):oe}function _(ae){var me=ae-N,V=ae-F;return N===void 0||me>=C||me<0||ee&&V>=b}function I(){var ae=S();if(_(ae))return G(ae);Y=setTimeout(I,E(ae))}function G(ae){return Y=void 0,R&&L?te(ae):(L=q=void 0,W)}function Z(){Y!==void 0&&clearTimeout(Y),F=0,L=N=q=Y=void 0}function ne(){return Y===void 0?W:G(S())}function re(){var ae=S(),me=_(ae);if(L=arguments,q=this,N=ae,me){if(Y===void 0)return D(N);if(ee)return Y=setTimeout(I,C),te(N)}return Y===void 0&&(Y=setTimeout(I,C)),W}return re.cancel=Z,re.flush=ne,re}function O(j){var C=typeof j;return!!j&&(C=="object"||C=="function")}function A(j){return!!j&&typeof j=="object"}function z(j){return typeof j=="symbol"||A(j)&&h.call(j)==i}function B(j){if(typeof j=="number")return j;if(z(j))return r;if(O(j)){var C=typeof j.valueOf=="function"?j.valueOf():j;j=O(C)?C+"":C}if(typeof j!="string")return j===0?j:+j;j=j.replace(a,"");var P=s.test(j);return P||u.test(j)?c(j.slice(2),P?2:8):l.test(j)?r:+j}return Zf=M,Zf}var Jf={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var av;function Bc(){return av||(av=1,(function(e){(function(){var r={}.hasOwnProperty;function i(){for(var s="",u=0;u<arguments.length;u++){var c=arguments[u];c&&(s=l(s,a(c)))}return s}function a(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return i.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var u="";for(var c in s)r.call(s,c)&&s[c]&&(u=l(u,c));return u}function l(s,u){return u?s?s+" "+u:s+u:s}e.exports?(i.default=i,e.exports=i):window.classNames=i})()})(Jf)),Jf.exports}var he={},em={},ov;function B2(){return ov||(ov=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(cr());function i(l){return l&&l.__esModule?l:{default:l}}var a={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return r.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return r.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};e.default=a})(em)),em}var lv;function Gs(){if(lv)return he;lv=1,Object.defineProperty(he,"__esModule",{value:!0}),he.checkSpecKeys=he.checkNavigable=he.changeSlide=he.canUseDOM=he.canGoNext=void 0,he.clamp=m,he.extractObject=void 0,he.filterSettings=te,he.validSettings=he.swipeStart=he.swipeMove=he.swipeEnd=he.slidesOnRight=he.slidesOnLeft=he.slideHandler=he.siblingDirection=he.safePreventDefault=he.lazyStartIndex=he.lazySlidesOnRight=he.lazySlidesOnLeft=he.lazyEndIndex=he.keyHandler=he.initializedState=he.getWidth=he.getTrackLeft=he.getTrackCSS=he.getTrackAnimateCSS=he.getTotalSlides=he.getSwipeDirection=he.getSlideCount=he.getRequiredLazySlides=he.getPreClones=he.getPostClones=he.getOnDemandLazySlides=he.getNavigableIndexes=he.getHeight=void 0;var e=i(cr()),r=i(B2());function i(D){return D&&D.__esModule?D:{default:D}}function a(D){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},a(D)}function l(D,E){var _=Object.keys(D);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(D);E&&(I=I.filter(function(G){return Object.getOwnPropertyDescriptor(D,G).enumerable})),_.push.apply(_,I)}return _}function s(D){for(var E=1;E<arguments.length;E++){var _=arguments[E]!=null?arguments[E]:{};E%2?l(Object(_),!0).forEach(function(I){u(D,I,_[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(_)):l(Object(_)).forEach(function(I){Object.defineProperty(D,I,Object.getOwnPropertyDescriptor(_,I))})}return D}function u(D,E,_){return E=c(E),E in D?Object.defineProperty(D,E,{value:_,enumerable:!0,configurable:!0,writable:!0}):D[E]=_,D}function c(D){var E=p(D,"string");return a(E)=="symbol"?E:String(E)}function p(D,E){if(a(D)!="object"||!D)return D;var _=D[Symbol.toPrimitive];if(_!==void 0){var I=_.call(D,E);if(a(I)!="object")return I;throw new TypeError("@@toPrimitive must return a primitive value.")}return(E==="string"?String:Number)(D)}function m(D,E,_){return Math.max(E,Math.min(D,_))}var x=he.safePreventDefault=function(E){var _=["onTouchStart","onTouchMove","onWheel"];_.includes(E._reactName)||E.preventDefault()},g=he.getOnDemandLazySlides=function(E){for(var _=[],I=h(E),G=w(E),Z=I;Z<G;Z++)E.lazyLoadedList.indexOf(Z)<0&&_.push(Z);return _};he.getRequiredLazySlides=function(E){for(var _=[],I=h(E),G=w(E),Z=I;Z<G;Z++)_.push(Z);return _};var h=he.lazyStartIndex=function(E){return E.currentSlide-k(E)},w=he.lazyEndIndex=function(E){return E.currentSlide+S(E)},k=he.lazySlidesOnLeft=function(E){return E.centerMode?Math.floor(E.slidesToShow/2)+(parseInt(E.centerPadding)>0?1:0):0},S=he.lazySlidesOnRight=function(E){return E.centerMode?Math.floor((E.slidesToShow-1)/2)+1+(parseInt(E.centerPadding)>0?1:0):E.slidesToShow},M=he.getWidth=function(E){return E&&E.offsetWidth||0},O=he.getHeight=function(E){return E&&E.offsetHeight||0},A=he.getSwipeDirection=function(E){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,I,G,Z,ne;return I=E.startX-E.curX,G=E.startY-E.curY,Z=Math.atan2(G,I),ne=Math.round(Z*180/Math.PI),ne<0&&(ne=360-Math.abs(ne)),ne<=45&&ne>=0||ne<=360&&ne>=315?"left":ne>=135&&ne<=225?"right":_===!0?ne>=35&&ne<=135?"up":"down":"vertical"},z=he.canGoNext=function(E){var _=!0;return E.infinite||(E.centerMode&&E.currentSlide>=E.slideCount-1||E.slideCount<=E.slidesToShow||E.currentSlide>=E.slideCount-E.slidesToShow)&&(_=!1),_};he.extractObject=function(E,_){var I={};return _.forEach(function(G){return I[G]=E[G]}),I},he.initializedState=function(E){var _=e.default.Children.count(E.children),I=E.listRef,G=Math.ceil(M(I)),Z=E.trackRef&&E.trackRef.node,ne=Math.ceil(M(Z)),re;if(E.vertical)re=G;else{var ae=E.centerMode&&parseInt(E.centerPadding)*2;typeof E.centerPadding=="string"&&E.centerPadding.slice(-1)==="%"&&(ae*=G/100),re=Math.ceil((G-ae)/E.slidesToShow)}var me=I&&O(I.querySelector('[data-index="0"]')),V=me*E.slidesToShow,oe=E.currentSlide===void 0?E.initialSlide:E.currentSlide;E.rtl&&E.currentSlide===void 0&&(oe=_-1-E.initialSlide);var fe=E.lazyLoadedList||[],ge=g(s(s({},E),{},{currentSlide:oe,lazyLoadedList:fe}));fe=fe.concat(ge);var ve={slideCount:_,slideWidth:re,listWidth:G,trackWidth:ne,currentSlide:oe,slideHeight:me,listHeight:V,lazyLoadedList:fe};return E.autoplaying===null&&E.autoplay&&(ve.autoplaying="playing"),ve},he.slideHandler=function(E){var _=E.waitForAnimate,I=E.animating,G=E.fade,Z=E.infinite,ne=E.index,re=E.slideCount,ae=E.lazyLoad,me=E.currentSlide,V=E.centerMode,oe=E.slidesToScroll,fe=E.slidesToShow,ge=E.useCSS,ve=E.lazyLoadedList;if(_&&I)return{};var Se=ne,Pe,Te,Ce,$e={},Ue={},Fe=Z?ne:m(ne,0,re-1);if(G){if(!Z&&(ne<0||ne>=re))return{};ne<0?Se=ne+re:ne>=re&&(Se=ne-re),ae&&ve.indexOf(Se)<0&&(ve=ve.concat(Se)),$e={animating:!0,currentSlide:Se,lazyLoadedList:ve,targetSlide:Se},Ue={animating:!1,targetSlide:Se}}else Pe=Se,Se<0?(Pe=Se+re,Z?re%oe!==0&&(Pe=re-re%oe):Pe=0):!z(E)&&Se>me?Se=Pe=me:V&&Se>=re?(Se=Z?re:re-1,Pe=Z?0:re-1):Se>=re&&(Pe=Se-re,Z?re%oe!==0&&(Pe=0):Pe=re-fe),!Z&&Se+fe>=re&&(Pe=re-fe),Te=b(s(s({},E),{},{slideIndex:Se})),Ce=b(s(s({},E),{},{slideIndex:Pe})),Z||(Te===Ce&&(Se=Pe),Te=Ce),ae&&(ve=ve.concat(g(s(s({},E),{},{currentSlide:Se})))),ge?($e={animating:!0,currentSlide:Pe,trackStyle:q(s(s({},E),{},{left:Te})),lazyLoadedList:ve,targetSlide:Fe},Ue={animating:!1,currentSlide:Pe,trackStyle:L(s(s({},E),{},{left:Ce})),swipeLeft:null,targetSlide:Fe}):$e={currentSlide:Pe,trackStyle:L(s(s({},E),{},{left:Ce})),lazyLoadedList:ve,targetSlide:Fe};return{state:$e,nextState:Ue}},he.changeSlide=function(E,_){var I,G,Z,ne,re,ae=E.slidesToScroll,me=E.slidesToShow,V=E.slideCount,oe=E.currentSlide,fe=E.targetSlide,ge=E.lazyLoad,ve=E.infinite;if(ne=V%ae!==0,I=ne?0:(V-oe)%ae,_.message==="previous")Z=I===0?ae:me-I,re=oe-Z,ge&&!ve&&(G=oe-Z,re=G===-1?V-1:G),ve||(re=fe-ae);else if(_.message==="next")Z=I===0?ae:I,re=oe+Z,ge&&!ve&&(re=(oe+ae)%V+I),ve||(re=fe+ae);else if(_.message==="dots")re=_.index*_.slidesToScroll;else if(_.message==="children"){if(re=_.index,ve){var Se=F(s(s({},E),{},{targetSlide:re}));re>_.currentSlide&&Se==="left"?re=re-V:re<_.currentSlide&&Se==="right"&&(re=re+V)}}else _.message==="index"&&(re=Number(_.index));return re},he.keyHandler=function(E,_,I){return E.target.tagName.match("TEXTAREA|INPUT|SELECT")||!_?"":E.keyCode===37?I?"next":"previous":E.keyCode===39?I?"previous":"next":""},he.swipeStart=function(E,_,I){return E.target.tagName==="IMG"&&x(E),!_||!I&&E.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:E.touches?E.touches[0].pageX:E.clientX,startY:E.touches?E.touches[0].pageY:E.clientY,curX:E.touches?E.touches[0].pageX:E.clientX,curY:E.touches?E.touches[0].pageY:E.clientY}}},he.swipeMove=function(E,_){var I=_.scrolling,G=_.animating,Z=_.vertical,ne=_.swipeToSlide,re=_.verticalSwiping,ae=_.rtl,me=_.currentSlide,V=_.edgeFriction,oe=_.edgeDragged,fe=_.onEdge,ge=_.swiped,ve=_.swiping,Se=_.slideCount,Pe=_.slidesToScroll,Te=_.infinite,Ce=_.touchObject,$e=_.swipeEvent,Ue=_.listHeight,Fe=_.listWidth;if(!I){if(G)return x(E);Z&&ne&&re&&x(E);var Ze,zt={},Sr=b(_);Ce.curX=E.touches?E.touches[0].pageX:E.clientX,Ce.curY=E.touches?E.touches[0].pageY:E.clientY,Ce.swipeLength=Math.round(Math.sqrt(Math.pow(Ce.curX-Ce.startX,2)));var Sn=Math.round(Math.sqrt(Math.pow(Ce.curY-Ce.startY,2)));if(!re&&!ve&&Sn>10)return{scrolling:!0};re&&(Ce.swipeLength=Sn);var pr=(ae?-1:1)*(Ce.curX>Ce.startX?1:-1);re&&(pr=Ce.curY>Ce.startY?1:-1);var Zn=Math.ceil(Se/Pe),Ct=A(_.touchObject,re),Ht=Ce.swipeLength;return Te||(me===0&&(Ct==="right"||Ct==="down")||me+1>=Zn&&(Ct==="left"||Ct==="up")||!z(_)&&(Ct==="left"||Ct==="up"))&&(Ht=Ce.swipeLength*V,oe===!1&&fe&&(fe(Ct),zt.edgeDragged=!0)),!ge&&$e&&($e(Ct),zt.swiped=!0),Z?Ze=Sr+Ht*(Ue/Fe)*pr:ae?Ze=Sr-Ht*pr:Ze=Sr+Ht*pr,re&&(Ze=Sr+Ht*pr),zt=s(s({},zt),{},{touchObject:Ce,swipeLeft:Ze,trackStyle:L(s(s({},_),{},{left:Ze}))}),Math.abs(Ce.curX-Ce.startX)<Math.abs(Ce.curY-Ce.startY)*.8||Ce.swipeLength>10&&(zt.swiping=!0,x(E)),zt}},he.swipeEnd=function(E,_){var I=_.dragging,G=_.swipe,Z=_.touchObject,ne=_.listWidth,re=_.touchThreshold,ae=_.verticalSwiping,me=_.listHeight,V=_.swipeToSlide,oe=_.scrolling,fe=_.onSwipe,ge=_.targetSlide,ve=_.currentSlide,Se=_.infinite;if(!I)return G&&x(E),{};var Pe=ae?me/re:ne/re,Te=A(Z,ae),Ce={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(oe||!Z.swipeLength)return Ce;if(Z.swipeLength>Pe){x(E),fe&&fe(Te);var $e,Ue,Fe=Se?ve:ge;switch(Te){case"left":case"up":Ue=Fe+C(_),$e=V?j(_,Ue):Ue,Ce.currentDirection=0;break;case"right":case"down":Ue=Fe-C(_),$e=V?j(_,Ue):Ue,Ce.currentDirection=1;break;default:$e=Fe}Ce.triggerSlideHandler=$e}else{var Ze=b(_);Ce.trackStyle=q(s(s({},_),{},{left:Ze}))}return Ce};var B=he.getNavigableIndexes=function(E){for(var _=E.infinite?E.slideCount*2:E.slideCount,I=E.infinite?E.slidesToShow*-1:0,G=E.infinite?E.slidesToShow*-1:0,Z=[];I<_;)Z.push(I),I=G+E.slidesToScroll,G+=Math.min(E.slidesToScroll,E.slidesToShow);return Z},j=he.checkNavigable=function(E,_){var I=B(E),G=0;if(_>I[I.length-1])_=I[I.length-1];else for(var Z in I){if(_<I[Z]){_=G;break}G=I[Z]}return _},C=he.getSlideCount=function(E){var _=E.centerMode?E.slideWidth*Math.floor(E.slidesToShow/2):0;if(E.swipeToSlide){var I,G=E.listRef,Z=G.querySelectorAll&&G.querySelectorAll(".slick-slide")||[];if(Array.from(Z).every(function(ae){if(E.vertical){if(ae.offsetTop+O(ae)/2>E.swipeLeft*-1)return I=ae,!1}else if(ae.offsetLeft-_+M(ae)/2>E.swipeLeft*-1)return I=ae,!1;return!0}),!I)return 0;var ne=E.rtl===!0?E.slideCount-E.currentSlide:E.currentSlide,re=Math.abs(I.dataset.index-ne)||1;return re}else return E.slidesToScroll},P=he.checkSpecKeys=function(E,_){return _.reduce(function(I,G){return I&&E.hasOwnProperty(G)},!0)?null:console.error("Keys Missing:",E)},L=he.getTrackCSS=function(E){P(E,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var _,I,G=E.slideCount+2*E.slidesToShow;E.vertical?I=G*E.slideHeight:_=N(E)*E.slideWidth;var Z={opacity:1,transition:"",WebkitTransition:""};if(E.useTransform){var ne=E.vertical?"translate3d(0px, "+E.left+"px, 0px)":"translate3d("+E.left+"px, 0px, 0px)",re=E.vertical?"translate3d(0px, "+E.left+"px, 0px)":"translate3d("+E.left+"px, 0px, 0px)",ae=E.vertical?"translateY("+E.left+"px)":"translateX("+E.left+"px)";Z=s(s({},Z),{},{WebkitTransform:ne,transform:re,msTransform:ae})}else E.vertical?Z.top=E.left:Z.left=E.left;return E.fade&&(Z={opacity:1}),_&&(Z.width=_),I&&(Z.height=I),window&&!window.addEventListener&&window.attachEvent&&(E.vertical?Z.marginTop=E.left+"px":Z.marginLeft=E.left+"px"),Z},q=he.getTrackAnimateCSS=function(E){P(E,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var _=L(E);return E.useTransform?(_.WebkitTransition="-webkit-transform "+E.speed+"ms "+E.cssEase,_.transition="transform "+E.speed+"ms "+E.cssEase):E.vertical?_.transition="top "+E.speed+"ms "+E.cssEase:_.transition="left "+E.speed+"ms "+E.cssEase,_},b=he.getTrackLeft=function(E){if(E.unslick)return 0;P(E,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var _=E.slideIndex,I=E.trackRef,G=E.infinite,Z=E.centerMode,ne=E.slideCount,re=E.slidesToShow,ae=E.slidesToScroll,me=E.slideWidth,V=E.listWidth,oe=E.variableWidth,fe=E.slideHeight,ge=E.fade,ve=E.vertical,Se=0,Pe,Te,Ce=0;if(ge||E.slideCount===1)return 0;var $e=0;if(G?($e=-W(E),ne%ae!==0&&_+ae>ne&&($e=-(_>ne?re-(_-ne):ne%ae)),Z&&($e+=parseInt(re/2))):(ne%ae!==0&&_+ae>ne&&($e=re-ne%ae),Z&&($e=parseInt(re/2))),Se=$e*me,Ce=$e*fe,ve?Pe=_*fe*-1+Ce:Pe=_*me*-1+Se,oe===!0){var Ue,Fe=I&&I.node;if(Ue=_+W(E),Te=Fe&&Fe.childNodes[Ue],Pe=Te?Te.offsetLeft*-1:0,Z===!0){Ue=G?_+W(E):_,Te=Fe&&Fe.children[Ue],Pe=0;for(var Ze=0;Ze<Ue;Ze++)Pe-=Fe&&Fe.children[Ze]&&Fe.children[Ze].offsetWidth;Pe-=parseInt(E.centerPadding),Pe+=Te&&(V-Te.offsetWidth)/2}}return Pe},W=he.getPreClones=function(E){return E.unslick||!E.infinite?0:E.variableWidth?E.slideCount:E.slidesToShow+(E.centerMode?1:0)},Y=he.getPostClones=function(E){return E.unslick||!E.infinite?0:E.slideCount},N=he.getTotalSlides=function(E){return E.slideCount===1?1:W(E)+E.slideCount+Y(E)},F=he.siblingDirection=function(E){return E.targetSlide>E.currentSlide?E.targetSlide>E.currentSlide+ie(E)?"left":"right":E.targetSlide<E.currentSlide-ee(E)?"right":"left"},ie=he.slidesOnRight=function(E){var _=E.slidesToShow,I=E.centerMode,G=E.rtl,Z=E.centerPadding;if(I){var ne=(_-1)/2+1;return parseInt(Z)>0&&(ne+=1),G&&_%2===0&&(ne+=1),ne}return G?0:_-1},ee=he.slidesOnLeft=function(E){var _=E.slidesToShow,I=E.centerMode,G=E.rtl,Z=E.centerPadding;if(I){var ne=(_-1)/2+1;return parseInt(Z)>0&&(ne+=1),!G&&_%2===0&&(ne+=1),ne}return G?_-1:0};he.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var R=he.validSettings=Object.keys(r.default);function te(D){return R.reduce(function(E,_){return D.hasOwnProperty(_)&&(E[_]=D[_]),E},{})}return he}var ja={},sv;function WP(){if(sv)return ja;sv=1,Object.defineProperty(ja,"__esModule",{value:!0}),ja.Track=void 0;var e=a(cr()),r=a(Bc()),i=Gs();function a(q){return q&&q.__esModule?q:{default:q}}function l(q){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},l(q)}function s(){return s=Object.assign?Object.assign.bind():function(q){for(var b=1;b<arguments.length;b++){var W=arguments[b];for(var Y in W)Object.prototype.hasOwnProperty.call(W,Y)&&(q[Y]=W[Y])}return q},s.apply(this,arguments)}function u(q,b){if(!(q instanceof b))throw new TypeError("Cannot call a class as a function")}function c(q,b){for(var W=0;W<b.length;W++){var Y=b[W];Y.enumerable=Y.enumerable||!1,Y.configurable=!0,"value"in Y&&(Y.writable=!0),Object.defineProperty(q,z(Y.key),Y)}}function p(q,b,W){return b&&c(q.prototype,b),Object.defineProperty(q,"prototype",{writable:!1}),q}function m(q,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(b&&b.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),b&&x(q,b)}function x(q,b){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(Y,N){return Y.__proto__=N,Y},x(q,b)}function g(q){var b=k();return function(){var Y=S(q),N;if(b){var F=S(this).constructor;N=Reflect.construct(Y,arguments,F)}else N=Y.apply(this,arguments);return h(this,N)}}function h(q,b){if(b&&(l(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return w(q)}function w(q){if(q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return q}function k(){try{var q=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(k=function(){return!!q})()}function S(q){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(W){return W.__proto__||Object.getPrototypeOf(W)},S(q)}function M(q,b){var W=Object.keys(q);if(Object.getOwnPropertySymbols){var Y=Object.getOwnPropertySymbols(q);b&&(Y=Y.filter(function(N){return Object.getOwnPropertyDescriptor(q,N).enumerable})),W.push.apply(W,Y)}return W}function O(q){for(var b=1;b<arguments.length;b++){var W=arguments[b]!=null?arguments[b]:{};b%2?M(Object(W),!0).forEach(function(Y){A(q,Y,W[Y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(q,Object.getOwnPropertyDescriptors(W)):M(Object(W)).forEach(function(Y){Object.defineProperty(q,Y,Object.getOwnPropertyDescriptor(W,Y))})}return q}function A(q,b,W){return b=z(b),b in q?Object.defineProperty(q,b,{value:W,enumerable:!0,configurable:!0,writable:!0}):q[b]=W,q}function z(q){var b=B(q,"string");return l(b)=="symbol"?b:String(b)}function B(q,b){if(l(q)!="object"||!q)return q;var W=q[Symbol.toPrimitive];if(W!==void 0){var Y=W.call(q,b);if(l(Y)!="object")return Y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(b==="string"?String:Number)(q)}var j=function(b){var W,Y,N,F,ie;b.rtl?ie=b.slideCount-1-b.index:ie=b.index,N=ie<0||ie>=b.slideCount,b.centerMode?(F=Math.floor(b.slidesToShow/2),Y=(ie-b.currentSlide)%b.slideCount===0,ie>b.currentSlide-F-1&&ie<=b.currentSlide+F&&(W=!0)):W=b.currentSlide<=ie&&ie<b.currentSlide+b.slidesToShow;var ee;b.targetSlide<0?ee=b.targetSlide+b.slideCount:b.targetSlide>=b.slideCount?ee=b.targetSlide-b.slideCount:ee=b.targetSlide;var R=ie===ee;return{"slick-slide":!0,"slick-active":W,"slick-center":Y,"slick-cloned":N,"slick-current":R}},C=function(b){var W={};return(b.variableWidth===void 0||b.variableWidth===!1)&&(W.width=b.slideWidth),b.fade&&(W.position="relative",b.vertical?W.top=-b.index*parseInt(b.slideHeight):W.left=-b.index*parseInt(b.slideWidth),W.opacity=b.currentSlide===b.index?1:0,W.zIndex=b.currentSlide===b.index?999:998,b.useCSS&&(W.transition="opacity "+b.speed+"ms "+b.cssEase+", visibility "+b.speed+"ms "+b.cssEase)),W},P=function(b,W){return b.key||W},L=function(b){var W,Y=[],N=[],F=[],ie=e.default.Children.count(b.children),ee=(0,i.lazyStartIndex)(b),R=(0,i.lazyEndIndex)(b);return e.default.Children.forEach(b.children,function(te,D){var E,_={message:"children",index:D,slidesToScroll:b.slidesToScroll,currentSlide:b.currentSlide};!b.lazyLoad||b.lazyLoad&&b.lazyLoadedList.indexOf(D)>=0?E=te:E=e.default.createElement("div",null);var I=C(O(O({},b),{},{index:D})),G=E.props.className||"",Z=j(O(O({},b),{},{index:D}));if(Y.push(e.default.cloneElement(E,{key:"original"+P(E,D),"data-index":D,className:(0,r.default)(Z,G),tabIndex:"-1","aria-hidden":!Z["slick-active"],style:O(O({outline:"none"},E.props.style||{}),I),onClick:function(ae){E.props&&E.props.onClick&&E.props.onClick(ae),b.focusOnSelect&&b.focusOnSelect(_)}})),b.infinite&&b.fade===!1){var ne=ie-D;ne<=(0,i.getPreClones)(b)&&(W=-ne,W>=ee&&(E=te),Z=j(O(O({},b),{},{index:W})),N.push(e.default.cloneElement(E,{key:"precloned"+P(E,W),"data-index":W,tabIndex:"-1",className:(0,r.default)(Z,G),"aria-hidden":!Z["slick-active"],style:O(O({},E.props.style||{}),I),onClick:function(ae){E.props&&E.props.onClick&&E.props.onClick(ae),b.focusOnSelect&&b.focusOnSelect(_)}}))),W=ie+D,W<R&&(E=te),Z=j(O(O({},b),{},{index:W})),F.push(e.default.cloneElement(E,{key:"postcloned"+P(E,W),"data-index":W,tabIndex:"-1",className:(0,r.default)(Z,G),"aria-hidden":!Z["slick-active"],style:O(O({},E.props.style||{}),I),onClick:function(ae){E.props&&E.props.onClick&&E.props.onClick(ae),b.focusOnSelect&&b.focusOnSelect(_)}}))}}),b.rtl?N.concat(Y,F).reverse():N.concat(Y,F)};return ja.Track=(function(q){m(W,q);var b=g(W);function W(){var Y;u(this,W);for(var N=arguments.length,F=new Array(N),ie=0;ie<N;ie++)F[ie]=arguments[ie];return Y=b.call.apply(b,[this].concat(F)),A(w(Y),"node",null),A(w(Y),"handleRef",function(ee){Y.node=ee}),Y}return p(W,[{key:"render",value:function(){var N=L(this.props),F=this.props,ie=F.onMouseEnter,ee=F.onMouseOver,R=F.onMouseLeave,te={onMouseEnter:ie,onMouseOver:ee,onMouseLeave:R};return e.default.createElement("div",s({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},te),N)}}]),W})(e.default.PureComponent),ja}var Ta={},uv;function UP(){if(uv)return Ta;uv=1;function e(j){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},e(j)}Object.defineProperty(Ta,"__esModule",{value:!0}),Ta.Dots=void 0;var r=l(cr()),i=l(Bc()),a=Gs();function l(j){return j&&j.__esModule?j:{default:j}}function s(j,C){var P=Object.keys(j);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(j);C&&(L=L.filter(function(q){return Object.getOwnPropertyDescriptor(j,q).enumerable})),P.push.apply(P,L)}return P}function u(j){for(var C=1;C<arguments.length;C++){var P=arguments[C]!=null?arguments[C]:{};C%2?s(Object(P),!0).forEach(function(L){c(j,L,P[L])}):Object.getOwnPropertyDescriptors?Object.defineProperties(j,Object.getOwnPropertyDescriptors(P)):s(Object(P)).forEach(function(L){Object.defineProperty(j,L,Object.getOwnPropertyDescriptor(P,L))})}return j}function c(j,C,P){return C=g(C),C in j?Object.defineProperty(j,C,{value:P,enumerable:!0,configurable:!0,writable:!0}):j[C]=P,j}function p(j,C){if(!(j instanceof C))throw new TypeError("Cannot call a class as a function")}function m(j,C){for(var P=0;P<C.length;P++){var L=C[P];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(j,g(L.key),L)}}function x(j,C,P){return C&&m(j.prototype,C),Object.defineProperty(j,"prototype",{writable:!1}),j}function g(j){var C=h(j,"string");return e(C)=="symbol"?C:String(C)}function h(j,C){if(e(j)!="object"||!j)return j;var P=j[Symbol.toPrimitive];if(P!==void 0){var L=P.call(j,C);if(e(L)!="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(j)}function w(j,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");j.prototype=Object.create(C&&C.prototype,{constructor:{value:j,writable:!0,configurable:!0}}),Object.defineProperty(j,"prototype",{writable:!1}),C&&k(j,C)}function k(j,C){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(L,q){return L.__proto__=q,L},k(j,C)}function S(j){var C=A();return function(){var L=z(j),q;if(C){var b=z(this).constructor;q=Reflect.construct(L,arguments,b)}else q=L.apply(this,arguments);return M(this,q)}}function M(j,C){if(C&&(e(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(j)}function O(j){if(j===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return j}function A(){try{var j=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(A=function(){return!!j})()}function z(j){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(P){return P.__proto__||Object.getPrototypeOf(P)},z(j)}var B=function(C){var P;return C.infinite?P=Math.ceil(C.slideCount/C.slidesToScroll):P=Math.ceil((C.slideCount-C.slidesToShow)/C.slidesToScroll)+1,P};return Ta.Dots=(function(j){w(P,j);var C=S(P);function P(){return p(this,P),C.apply(this,arguments)}return x(P,[{key:"clickHandler",value:function(q,b){b.preventDefault(),this.props.clickHandler(q)}},{key:"render",value:function(){for(var q=this.props,b=q.onMouseEnter,W=q.onMouseOver,Y=q.onMouseLeave,N=q.infinite,F=q.slidesToScroll,ie=q.slidesToShow,ee=q.slideCount,R=q.currentSlide,te=B({slideCount:ee,slidesToScroll:F,slidesToShow:ie,infinite:N}),D={onMouseEnter:b,onMouseOver:W,onMouseLeave:Y},E=[],_=0;_<te;_++){var I=(_+1)*F-1,G=N?I:(0,a.clamp)(I,0,ee-1),Z=G-(F-1),ne=N?Z:(0,a.clamp)(Z,0,ee-1),re=(0,i.default)({"slick-active":N?R>=ne&&R<=G:R===ne}),ae={message:"dots",index:_,slidesToScroll:F,currentSlide:R},me=this.clickHandler.bind(this,ae);E=E.concat(r.default.createElement("li",{key:_,className:re},r.default.cloneElement(this.props.customPaging(_),{onClick:me})))}return r.default.cloneElement(this.props.appendDots(E),u({className:this.props.dotsClass},D))}}]),P})(r.default.PureComponent),Ta}var Dn={},dv;function KP(){if(dv)return Dn;dv=1;function e(j){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},e(j)}Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.PrevArrow=Dn.NextArrow=void 0;var r=l(cr()),i=l(Bc()),a=Gs();function l(j){return j&&j.__esModule?j:{default:j}}function s(){return s=Object.assign?Object.assign.bind():function(j){for(var C=1;C<arguments.length;C++){var P=arguments[C];for(var L in P)Object.prototype.hasOwnProperty.call(P,L)&&(j[L]=P[L])}return j},s.apply(this,arguments)}function u(j,C){var P=Object.keys(j);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(j);C&&(L=L.filter(function(q){return Object.getOwnPropertyDescriptor(j,q).enumerable})),P.push.apply(P,L)}return P}function c(j){for(var C=1;C<arguments.length;C++){var P=arguments[C]!=null?arguments[C]:{};C%2?u(Object(P),!0).forEach(function(L){p(j,L,P[L])}):Object.getOwnPropertyDescriptors?Object.defineProperties(j,Object.getOwnPropertyDescriptors(P)):u(Object(P)).forEach(function(L){Object.defineProperty(j,L,Object.getOwnPropertyDescriptor(P,L))})}return j}function p(j,C,P){return C=h(C),C in j?Object.defineProperty(j,C,{value:P,enumerable:!0,configurable:!0,writable:!0}):j[C]=P,j}function m(j,C){if(!(j instanceof C))throw new TypeError("Cannot call a class as a function")}function x(j,C){for(var P=0;P<C.length;P++){var L=C[P];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(j,h(L.key),L)}}function g(j,C,P){return C&&x(j.prototype,C),Object.defineProperty(j,"prototype",{writable:!1}),j}function h(j){var C=w(j,"string");return e(C)=="symbol"?C:String(C)}function w(j,C){if(e(j)!="object"||!j)return j;var P=j[Symbol.toPrimitive];if(P!==void 0){var L=P.call(j,C);if(e(L)!="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(j)}function k(j,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");j.prototype=Object.create(C&&C.prototype,{constructor:{value:j,writable:!0,configurable:!0}}),Object.defineProperty(j,"prototype",{writable:!1}),C&&S(j,C)}function S(j,C){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(L,q){return L.__proto__=q,L},S(j,C)}function M(j){var C=z();return function(){var L=B(j),q;if(C){var b=B(this).constructor;q=Reflect.construct(L,arguments,b)}else q=L.apply(this,arguments);return O(this,q)}}function O(j,C){if(C&&(e(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return A(j)}function A(j){if(j===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return j}function z(){try{var j=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(z=function(){return!!j})()}function B(j){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(P){return P.__proto__||Object.getPrototypeOf(P)},B(j)}return Dn.PrevArrow=(function(j){k(P,j);var C=M(P);function P(){return m(this,P),C.apply(this,arguments)}return g(P,[{key:"clickHandler",value:function(q,b){b&&b.preventDefault(),this.props.clickHandler(q,b)}},{key:"render",value:function(){var q={"slick-arrow":!0,"slick-prev":!0},b=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(q["slick-disabled"]=!0,b=null);var W={key:"0","data-role":"none",className:(0,i.default)(q),style:{display:"block"},onClick:b},Y={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},N;return this.props.prevArrow?N=r.default.cloneElement(this.props.prevArrow,c(c({},W),Y)):N=r.default.createElement("button",s({key:"0",type:"button"},W)," ","Previous"),N}}]),P})(r.default.PureComponent),Dn.NextArrow=(function(j){k(P,j);var C=M(P);function P(){return m(this,P),C.apply(this,arguments)}return g(P,[{key:"clickHandler",value:function(q,b){b&&b.preventDefault(),this.props.clickHandler(q,b)}},{key:"render",value:function(){var q={"slick-arrow":!0,"slick-next":!0},b=this.clickHandler.bind(this,{message:"next"});(0,a.canGoNext)(this.props)||(q["slick-disabled"]=!0,b=null);var W={key:"1","data-role":"none",className:(0,i.default)(q),style:{display:"block"},onClick:b},Y={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},N;return this.props.nextArrow?N=r.default.cloneElement(this.props.nextArrow,c(c({},W),Y)):N=r.default.createElement("button",s({key:"1",type:"button"},W)," ","Next"),N}}]),P})(r.default.PureComponent),Dn}var $2=(function(){if(typeof Map<"u")return Map;function e(r,i){var a=-1;return r.some(function(l,s){return l[0]===i?(a=s,!0):!1}),a}return(function(){function r(){this.__entries__=[]}return Object.defineProperty(r.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),r.prototype.get=function(i){var a=e(this.__entries__,i),l=this.__entries__[a];return l&&l[1]},r.prototype.set=function(i,a){var l=e(this.__entries__,i);~l?this.__entries__[l][1]=a:this.__entries__.push([i,a])},r.prototype.delete=function(i){var a=this.__entries__,l=e(a,i);~l&&a.splice(l,1)},r.prototype.has=function(i){return!!~e(this.__entries__,i)},r.prototype.clear=function(){this.__entries__.splice(0)},r.prototype.forEach=function(i,a){a===void 0&&(a=null);for(var l=0,s=this.__entries__;l<s.length;l++){var u=s[l];i.call(a,u[1],u[0])}},r})()})(),zm=typeof window<"u"&&typeof document<"u"&&window.document===document,Rc=(function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),YP=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Rc):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}})(),GP=2;function XP(e,r){var i=!1,a=!1,l=0;function s(){i&&(i=!1,e()),a&&c()}function u(){YP(s)}function c(){var p=Date.now();if(i){if(p-l<GP)return;a=!0}else i=!0,a=!1,setTimeout(u,r);l=p}return c}var QP=20,ZP=["top","right","bottom","left","width","height","size","weight"],JP=typeof MutationObserver<"u",e4=(function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=XP(this.refresh.bind(this),QP)}return e.prototype.addObserver=function(r){~this.observers_.indexOf(r)||this.observers_.push(r),this.connected_||this.connect_()},e.prototype.removeObserver=function(r){var i=this.observers_,a=i.indexOf(r);~a&&i.splice(a,1),!i.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var r=this.updateObservers_();r&&this.refresh()},e.prototype.updateObservers_=function(){var r=this.observers_.filter(function(i){return i.gatherActive(),i.hasActive()});return r.forEach(function(i){return i.broadcastActive()}),r.length>0},e.prototype.connect_=function(){!zm||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),JP?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!zm||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(r){var i=r.propertyName,a=i===void 0?"":i,l=ZP.some(function(s){return!!~a.indexOf(s)});l&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e})(),F2=(function(e,r){for(var i=0,a=Object.keys(r);i<a.length;i++){var l=a[i];Object.defineProperty(e,l,{value:r[l],enumerable:!1,writable:!1,configurable:!0})}return e}),Ai=(function(e){var r=e&&e.ownerDocument&&e.ownerDocument.defaultView;return r||Rc}),V2=$c(0,0,0,0);function Cc(e){return parseFloat(e)||0}function cv(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return r.reduce(function(a,l){var s=e["border-"+l+"-width"];return a+Cc(s)},0)}function t4(e){for(var r=["top","right","bottom","left"],i={},a=0,l=r;a<l.length;a++){var s=l[a],u=e["padding-"+s];i[s]=Cc(u)}return i}function r4(e){var r=e.getBBox();return $c(0,0,r.width,r.height)}function n4(e){var r=e.clientWidth,i=e.clientHeight;if(!r&&!i)return V2;var a=Ai(e).getComputedStyle(e),l=t4(a),s=l.left+l.right,u=l.top+l.bottom,c=Cc(a.width),p=Cc(a.height);if(a.boxSizing==="border-box"&&(Math.round(c+s)!==r&&(c-=cv(a,"left","right")+s),Math.round(p+u)!==i&&(p-=cv(a,"top","bottom")+u)),!a4(e)){var m=Math.round(c+s)-r,x=Math.round(p+u)-i;Math.abs(m)!==1&&(c-=m),Math.abs(x)!==1&&(p-=x)}return $c(l.left,l.top,c,p)}var i4=(function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Ai(e).SVGGraphicsElement}:function(e){return e instanceof Ai(e).SVGElement&&typeof e.getBBox=="function"}})();function a4(e){return e===Ai(e).document.documentElement}function o4(e){return zm?i4(e)?r4(e):n4(e):V2}function l4(e){var r=e.x,i=e.y,a=e.width,l=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,u=Object.create(s.prototype);return F2(u,{x:r,y:i,width:a,height:l,top:i,right:r+a,bottom:l+i,left:r}),u}function $c(e,r,i,a){return{x:e,y:r,width:i,height:a}}var s4=(function(){function e(r){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=$c(0,0,0,0),this.target=r}return e.prototype.isActive=function(){var r=o4(this.target);return this.contentRect_=r,r.width!==this.broadcastWidth||r.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var r=this.contentRect_;return this.broadcastWidth=r.width,this.broadcastHeight=r.height,r},e})(),u4=(function(){function e(r,i){var a=l4(i);F2(this,{target:r,contentRect:a})}return e})(),d4=(function(){function e(r,i,a){if(this.activeObservations_=[],this.observations_=new $2,typeof r!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=r,this.controller_=i,this.callbackCtx_=a}return e.prototype.observe=function(r){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(r instanceof Ai(r).Element))throw new TypeError('parameter 1 is not of type "Element".');var i=this.observations_;i.has(r)||(i.set(r,new s4(r)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(r){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(r instanceof Ai(r).Element))throw new TypeError('parameter 1 is not of type "Element".');var i=this.observations_;i.has(r)&&(i.delete(r),i.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var r=this;this.clearActive(),this.observations_.forEach(function(i){i.isActive()&&r.activeObservations_.push(i)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var r=this.callbackCtx_,i=this.activeObservations_.map(function(a){return new u4(a.target,a.broadcastRect())});this.callback_.call(r,i,r),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e})(),H2=typeof WeakMap<"u"?new WeakMap:new $2,W2=(function(){function e(r){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=e4.getInstance(),a=new d4(r,i,this);H2.set(this,a)}return e})();["observe","unobserve","disconnect"].forEach(function(e){W2.prototype[e]=function(){var r;return(r=H2.get(this))[e].apply(r,arguments)}});var c4=(function(){return typeof Rc.ResizeObserver<"u"?Rc.ResizeObserver:W2})();const p4=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),f4=Zw(p4);var pv;function m4(){if(pv)return _a;pv=1,Object.defineProperty(_a,"__esModule",{value:!0}),_a.InnerSlider=void 0;var e=m(cr()),r=m(VP()),i=m(HP()),a=m(Bc()),l=Gs(),s=WP(),u=UP(),c=KP(),p=m(f4);function m(N){return N&&N.__esModule?N:{default:N}}function x(N){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},x(N)}function g(){return g=Object.assign?Object.assign.bind():function(N){for(var F=1;F<arguments.length;F++){var ie=arguments[F];for(var ee in ie)Object.prototype.hasOwnProperty.call(ie,ee)&&(N[ee]=ie[ee])}return N},g.apply(this,arguments)}function h(N,F){if(N==null)return{};var ie=w(N,F),ee,R;if(Object.getOwnPropertySymbols){var te=Object.getOwnPropertySymbols(N);for(R=0;R<te.length;R++)ee=te[R],!(F.indexOf(ee)>=0)&&Object.prototype.propertyIsEnumerable.call(N,ee)&&(ie[ee]=N[ee])}return ie}function w(N,F){if(N==null)return{};var ie={},ee=Object.keys(N),R,te;for(te=0;te<ee.length;te++)R=ee[te],!(F.indexOf(R)>=0)&&(ie[R]=N[R]);return ie}function k(N,F){var ie=Object.keys(N);if(Object.getOwnPropertySymbols){var ee=Object.getOwnPropertySymbols(N);F&&(ee=ee.filter(function(R){return Object.getOwnPropertyDescriptor(N,R).enumerable})),ie.push.apply(ie,ee)}return ie}function S(N){for(var F=1;F<arguments.length;F++){var ie=arguments[F]!=null?arguments[F]:{};F%2?k(Object(ie),!0).forEach(function(ee){b(N,ee,ie[ee])}):Object.getOwnPropertyDescriptors?Object.defineProperties(N,Object.getOwnPropertyDescriptors(ie)):k(Object(ie)).forEach(function(ee){Object.defineProperty(N,ee,Object.getOwnPropertyDescriptor(ie,ee))})}return N}function M(N,F){if(!(N instanceof F))throw new TypeError("Cannot call a class as a function")}function O(N,F){for(var ie=0;ie<F.length;ie++){var ee=F[ie];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(N,W(ee.key),ee)}}function A(N,F,ie){return F&&O(N.prototype,F),Object.defineProperty(N,"prototype",{writable:!1}),N}function z(N,F){if(typeof F!="function"&&F!==null)throw new TypeError("Super expression must either be null or a function");N.prototype=Object.create(F&&F.prototype,{constructor:{value:N,writable:!0,configurable:!0}}),Object.defineProperty(N,"prototype",{writable:!1}),F&&B(N,F)}function B(N,F){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ee,R){return ee.__proto__=R,ee},B(N,F)}function j(N){var F=L();return function(){var ee=q(N),R;if(F){var te=q(this).constructor;R=Reflect.construct(ee,arguments,te)}else R=ee.apply(this,arguments);return C(this,R)}}function C(N,F){if(F&&(x(F)==="object"||typeof F=="function"))return F;if(F!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(N)}function P(N){if(N===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return N}function L(){try{var N=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(L=function(){return!!N})()}function q(N){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(ie){return ie.__proto__||Object.getPrototypeOf(ie)},q(N)}function b(N,F,ie){return F=W(F),F in N?Object.defineProperty(N,F,{value:ie,enumerable:!0,configurable:!0,writable:!0}):N[F]=ie,N}function W(N){var F=Y(N,"string");return x(F)=="symbol"?F:String(F)}function Y(N,F){if(x(N)!="object"||!N)return N;var ie=N[Symbol.toPrimitive];if(ie!==void 0){var ee=ie.call(N,F);if(x(ee)!="object")return ee;throw new TypeError("@@toPrimitive must return a primitive value.")}return(F==="string"?String:Number)(N)}return _a.InnerSlider=(function(N){z(ie,N);var F=j(ie);function ie(ee){var R;M(this,ie),R=F.call(this,ee),b(P(R),"listRefHandler",function(D){return R.list=D}),b(P(R),"trackRefHandler",function(D){return R.track=D}),b(P(R),"adaptHeight",function(){if(R.props.adaptiveHeight&&R.list){var D=R.list.querySelector('[data-index="'.concat(R.state.currentSlide,'"]'));R.list.style.height=(0,l.getHeight)(D)+"px"}}),b(P(R),"componentDidMount",function(){if(R.props.onInit&&R.props.onInit(),R.props.lazyLoad){var D=(0,l.getOnDemandLazySlides)(S(S({},R.props),R.state));D.length>0&&(R.setState(function(_){return{lazyLoadedList:_.lazyLoadedList.concat(D)}}),R.props.onLazyLoad&&R.props.onLazyLoad(D))}var E=S({listRef:R.list,trackRef:R.track},R.props);R.updateState(E,!0,function(){R.adaptHeight(),R.props.autoplay&&R.autoPlay("update")}),R.props.lazyLoad==="progressive"&&(R.lazyLoadTimer=setInterval(R.progressiveLazyLoad,1e3)),R.ro=new p.default(function(){R.state.animating?(R.onWindowResized(!1),R.callbackTimers.push(setTimeout(function(){return R.onWindowResized()},R.props.speed))):R.onWindowResized()}),R.ro.observe(R.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(_){_.onfocus=R.props.pauseOnFocus?R.onSlideFocus:null,_.onblur=R.props.pauseOnFocus?R.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",R.onWindowResized):window.attachEvent("onresize",R.onWindowResized)}),b(P(R),"componentWillUnmount",function(){R.animationEndCallback&&clearTimeout(R.animationEndCallback),R.lazyLoadTimer&&clearInterval(R.lazyLoadTimer),R.callbackTimers.length&&(R.callbackTimers.forEach(function(D){return clearTimeout(D)}),R.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",R.onWindowResized):window.detachEvent("onresize",R.onWindowResized),R.autoplayTimer&&clearInterval(R.autoplayTimer),R.ro.disconnect()}),b(P(R),"componentDidUpdate",function(D){if(R.checkImagesLoad(),R.props.onReInit&&R.props.onReInit(),R.props.lazyLoad){var E=(0,l.getOnDemandLazySlides)(S(S({},R.props),R.state));E.length>0&&(R.setState(function(G){return{lazyLoadedList:G.lazyLoadedList.concat(E)}}),R.props.onLazyLoad&&R.props.onLazyLoad(E))}R.adaptHeight();var _=S(S({listRef:R.list,trackRef:R.track},R.props),R.state),I=R.didPropsChange(D);I&&R.updateState(_,I,function(){R.state.currentSlide>=e.default.Children.count(R.props.children)&&R.changeSlide({message:"index",index:e.default.Children.count(R.props.children)-R.props.slidesToShow,currentSlide:R.state.currentSlide}),R.props.autoplay?R.autoPlay("update"):R.pause("paused")})}),b(P(R),"onWindowResized",function(D){R.debouncedResize&&R.debouncedResize.cancel(),R.debouncedResize=(0,i.default)(function(){return R.resizeWindow(D)},50),R.debouncedResize()}),b(P(R),"resizeWindow",function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,E=!!(R.track&&R.track.node);if(E){var _=S(S({listRef:R.list,trackRef:R.track},R.props),R.state);R.updateState(_,D,function(){R.props.autoplay?R.autoPlay("update"):R.pause("paused")}),R.setState({animating:!1}),clearTimeout(R.animationEndCallback),delete R.animationEndCallback}}),b(P(R),"updateState",function(D,E,_){var I=(0,l.initializedState)(D);D=S(S(S({},D),I),{},{slideIndex:I.currentSlide});var G=(0,l.getTrackLeft)(D);D=S(S({},D),{},{left:G});var Z=(0,l.getTrackCSS)(D);(E||e.default.Children.count(R.props.children)!==e.default.Children.count(D.children))&&(I.trackStyle=Z),R.setState(I,_)}),b(P(R),"ssrInit",function(){if(R.props.variableWidth){var D=0,E=0,_=[],I=(0,l.getPreClones)(S(S(S({},R.props),R.state),{},{slideCount:R.props.children.length})),G=(0,l.getPostClones)(S(S(S({},R.props),R.state),{},{slideCount:R.props.children.length}));R.props.children.forEach(function(Te){_.push(Te.props.style.width),D+=Te.props.style.width});for(var Z=0;Z<I;Z++)E+=_[_.length-1-Z],D+=_[_.length-1-Z];for(var ne=0;ne<G;ne++)D+=_[ne];for(var re=0;re<R.state.currentSlide;re++)E+=_[re];var ae={width:D+"px",left:-E+"px"};if(R.props.centerMode){var me="".concat(_[R.state.currentSlide],"px");ae.left="calc(".concat(ae.left," + (100% - ").concat(me,") / 2 ) ")}return{trackStyle:ae}}var V=e.default.Children.count(R.props.children),oe=S(S(S({},R.props),R.state),{},{slideCount:V}),fe=(0,l.getPreClones)(oe)+(0,l.getPostClones)(oe)+V,ge=100/R.props.slidesToShow*fe,ve=100/fe,Se=-ve*((0,l.getPreClones)(oe)+R.state.currentSlide)*ge/100;R.props.centerMode&&(Se+=(100-ve*ge/100)/2);var Pe={width:ge+"%",left:Se+"%"};return{slideWidth:ve+"%",trackStyle:Pe}}),b(P(R),"checkImagesLoad",function(){var D=R.list&&R.list.querySelectorAll&&R.list.querySelectorAll(".slick-slide img")||[],E=D.length,_=0;Array.prototype.forEach.call(D,function(I){var G=function(){return++_&&_>=E&&R.onWindowResized()};if(!I.onclick)I.onclick=function(){return I.parentNode.focus()};else{var Z=I.onclick;I.onclick=function(ne){Z(ne),I.parentNode.focus()}}I.onload||(R.props.lazyLoad?I.onload=function(){R.adaptHeight(),R.callbackTimers.push(setTimeout(R.onWindowResized,R.props.speed))}:(I.onload=G,I.onerror=function(){G(),R.props.onLazyLoadError&&R.props.onLazyLoadError()}))})}),b(P(R),"progressiveLazyLoad",function(){for(var D=[],E=S(S({},R.props),R.state),_=R.state.currentSlide;_<R.state.slideCount+(0,l.getPostClones)(E);_++)if(R.state.lazyLoadedList.indexOf(_)<0){D.push(_);break}for(var I=R.state.currentSlide-1;I>=-(0,l.getPreClones)(E);I--)if(R.state.lazyLoadedList.indexOf(I)<0){D.push(I);break}D.length>0?(R.setState(function(G){return{lazyLoadedList:G.lazyLoadedList.concat(D)}}),R.props.onLazyLoad&&R.props.onLazyLoad(D)):R.lazyLoadTimer&&(clearInterval(R.lazyLoadTimer),delete R.lazyLoadTimer)}),b(P(R),"slideHandler",function(D){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,_=R.props,I=_.asNavFor,G=_.beforeChange,Z=_.onLazyLoad,ne=_.speed,re=_.afterChange,ae=R.state.currentSlide,me=(0,l.slideHandler)(S(S(S({index:D},R.props),R.state),{},{trackRef:R.track,useCSS:R.props.useCSS&&!E})),V=me.state,oe=me.nextState;if(V){G&&G(ae,V.currentSlide);var fe=V.lazyLoadedList.filter(function(ge){return R.state.lazyLoadedList.indexOf(ge)<0});Z&&fe.length>0&&Z(fe),!R.props.waitForAnimate&&R.animationEndCallback&&(clearTimeout(R.animationEndCallback),re&&re(ae),delete R.animationEndCallback),R.setState(V,function(){I&&R.asNavForIndex!==D&&(R.asNavForIndex=D,I.innerSlider.slideHandler(D)),oe&&(R.animationEndCallback=setTimeout(function(){var ge=oe.animating,ve=h(oe,["animating"]);R.setState(ve,function(){R.callbackTimers.push(setTimeout(function(){return R.setState({animating:ge})},10)),re&&re(V.currentSlide),delete R.animationEndCallback})},ne))})}}),b(P(R),"changeSlide",function(D){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,_=S(S({},R.props),R.state),I=(0,l.changeSlide)(_,D);if(!(I!==0&&!I)&&(E===!0?R.slideHandler(I,E):R.slideHandler(I),R.props.autoplay&&R.autoPlay("update"),R.props.focusOnSelect)){var G=R.list.querySelectorAll(".slick-current");G[0]&&G[0].focus()}}),b(P(R),"clickHandler",function(D){R.clickable===!1&&(D.stopPropagation(),D.preventDefault()),R.clickable=!0}),b(P(R),"keyHandler",function(D){var E=(0,l.keyHandler)(D,R.props.accessibility,R.props.rtl);E!==""&&R.changeSlide({message:E})}),b(P(R),"selectHandler",function(D){R.changeSlide(D)}),b(P(R),"disableBodyScroll",function(){var D=function(_){_=_||window.event,_.preventDefault&&_.preventDefault(),_.returnValue=!1};window.ontouchmove=D}),b(P(R),"enableBodyScroll",function(){window.ontouchmove=null}),b(P(R),"swipeStart",function(D){R.props.verticalSwiping&&R.disableBodyScroll();var E=(0,l.swipeStart)(D,R.props.swipe,R.props.draggable);E!==""&&R.setState(E)}),b(P(R),"swipeMove",function(D){var E=(0,l.swipeMove)(D,S(S(S({},R.props),R.state),{},{trackRef:R.track,listRef:R.list,slideIndex:R.state.currentSlide}));E&&(E.swiping&&(R.clickable=!1),R.setState(E))}),b(P(R),"swipeEnd",function(D){var E=(0,l.swipeEnd)(D,S(S(S({},R.props),R.state),{},{trackRef:R.track,listRef:R.list,slideIndex:R.state.currentSlide}));if(E){var _=E.triggerSlideHandler;delete E.triggerSlideHandler,R.setState(E),_!==void 0&&(R.slideHandler(_),R.props.verticalSwiping&&R.enableBodyScroll())}}),b(P(R),"touchEnd",function(D){R.swipeEnd(D),R.clickable=!0}),b(P(R),"slickPrev",function(){R.callbackTimers.push(setTimeout(function(){return R.changeSlide({message:"previous"})},0))}),b(P(R),"slickNext",function(){R.callbackTimers.push(setTimeout(function(){return R.changeSlide({message:"next"})},0))}),b(P(R),"slickGoTo",function(D){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(D=Number(D),isNaN(D))return"";R.callbackTimers.push(setTimeout(function(){return R.changeSlide({message:"index",index:D,currentSlide:R.state.currentSlide},E)},0))}),b(P(R),"play",function(){var D;if(R.props.rtl)D=R.state.currentSlide-R.props.slidesToScroll;else if((0,l.canGoNext)(S(S({},R.props),R.state)))D=R.state.currentSlide+R.props.slidesToScroll;else return!1;R.slideHandler(D)}),b(P(R),"autoPlay",function(D){R.autoplayTimer&&clearInterval(R.autoplayTimer);var E=R.state.autoplaying;if(D==="update"){if(E==="hovered"||E==="focused"||E==="paused")return}else if(D==="leave"){if(E==="paused"||E==="focused")return}else if(D==="blur"&&(E==="paused"||E==="hovered"))return;R.autoplayTimer=setInterval(R.play,R.props.autoplaySpeed+50),R.setState({autoplaying:"playing"})}),b(P(R),"pause",function(D){R.autoplayTimer&&(clearInterval(R.autoplayTimer),R.autoplayTimer=null);var E=R.state.autoplaying;D==="paused"?R.setState({autoplaying:"paused"}):D==="focused"?(E==="hovered"||E==="playing")&&R.setState({autoplaying:"focused"}):E==="playing"&&R.setState({autoplaying:"hovered"})}),b(P(R),"onDotsOver",function(){return R.props.autoplay&&R.pause("hovered")}),b(P(R),"onDotsLeave",function(){return R.props.autoplay&&R.state.autoplaying==="hovered"&&R.autoPlay("leave")}),b(P(R),"onTrackOver",function(){return R.props.autoplay&&R.pause("hovered")}),b(P(R),"onTrackLeave",function(){return R.props.autoplay&&R.state.autoplaying==="hovered"&&R.autoPlay("leave")}),b(P(R),"onSlideFocus",function(){return R.props.autoplay&&R.pause("focused")}),b(P(R),"onSlideBlur",function(){return R.props.autoplay&&R.state.autoplaying==="focused"&&R.autoPlay("blur")}),b(P(R),"render",function(){var D=(0,a.default)("slick-slider",R.props.className,{"slick-vertical":R.props.vertical,"slick-initialized":!0}),E=S(S({},R.props),R.state),_=(0,l.extractObject)(E,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),I=R.props.pauseOnHover;_=S(S({},_),{},{onMouseEnter:I?R.onTrackOver:null,onMouseLeave:I?R.onTrackLeave:null,onMouseOver:I?R.onTrackOver:null,focusOnSelect:R.props.focusOnSelect&&R.clickable?R.selectHandler:null});var G;if(R.props.dots===!0&&R.state.slideCount>=R.props.slidesToShow){var Z=(0,l.extractObject)(E,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),ne=R.props.pauseOnDotsHover;Z=S(S({},Z),{},{clickHandler:R.changeSlide,onMouseEnter:ne?R.onDotsLeave:null,onMouseOver:ne?R.onDotsOver:null,onMouseLeave:ne?R.onDotsLeave:null}),G=e.default.createElement(u.Dots,Z)}var re,ae,me=(0,l.extractObject)(E,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);me.clickHandler=R.changeSlide,R.props.arrows&&(re=e.default.createElement(c.PrevArrow,me),ae=e.default.createElement(c.NextArrow,me));var V=null;R.props.vertical&&(V={height:R.state.listHeight});var oe=null;R.props.vertical===!1?R.props.centerMode===!0&&(oe={padding:"0px "+R.props.centerPadding}):R.props.centerMode===!0&&(oe={padding:R.props.centerPadding+" 0px"});var fe=S(S({},V),oe),ge=R.props.touchMove,ve={className:"slick-list",style:fe,onClick:R.clickHandler,onMouseDown:ge?R.swipeStart:null,onMouseMove:R.state.dragging&&ge?R.swipeMove:null,onMouseUp:ge?R.swipeEnd:null,onMouseLeave:R.state.dragging&&ge?R.swipeEnd:null,onTouchStart:ge?R.swipeStart:null,onTouchMove:R.state.dragging&&ge?R.swipeMove:null,onTouchEnd:ge?R.touchEnd:null,onTouchCancel:R.state.dragging&&ge?R.swipeEnd:null,onKeyDown:R.props.accessibility?R.keyHandler:null},Se={className:D,dir:"ltr",style:R.props.style};return R.props.unslick&&(ve={className:"slick-list"},Se={className:D}),e.default.createElement("div",Se,R.props.unslick?"":re,e.default.createElement("div",g({ref:R.listRefHandler},ve),e.default.createElement(s.Track,g({ref:R.trackRefHandler},_),R.props.children)),R.props.unslick?"":ae,R.props.unslick?"":G)}),R.list=null,R.track=null,R.state=S(S({},r.default),{},{currentSlide:R.props.initialSlide,targetSlide:R.props.initialSlide?R.props.initialSlide:0,slideCount:e.default.Children.count(R.props.children)}),R.callbackTimers=[],R.clickable=!0,R.debouncedResize=null;var te=R.ssrInit();return R.state=S(S({},R.state),te),R}return A(ie,[{key:"didPropsChange",value:function(R){for(var te=!1,D=0,E=Object.keys(this.props);D<E.length;D++){var _=E[D];if(!R.hasOwnProperty(_)){te=!0;break}if(!(x(R[_])==="object"||typeof R[_]=="function"||isNaN(R[_]))&&R[_]!==this.props[_]){te=!0;break}}return te||e.default.Children.count(this.props.children)!==e.default.Children.count(R.children)}}]),ie})(e.default.Component),_a}var tm,fv;function h4(){if(fv)return tm;fv=1;var e=function(r){return r.replace(/[A-Z]/g,function(i){return"-"+i.toLowerCase()}).toLowerCase()};return tm=e,tm}var rm,mv;function g4(){if(mv)return rm;mv=1;var e=h4(),r=function(l){var s=/[height|width]$/;return s.test(l)},i=function(l){var s="",u=Object.keys(l);return u.forEach(function(c,p){var m=l[c];c=e(c),r(c)&&typeof m=="number"&&(m=m+"px"),m===!0?s+=c:m===!1?s+="not "+c:s+="("+c+": "+m+")",p<u.length-1&&(s+=" and ")}),s},a=function(l){var s="";return typeof l=="string"?l:l instanceof Array?(l.forEach(function(u,c){s+=i(u),c<l.length-1&&(s+=", ")}),s):i(l)};return rm=a,rm}var nm,hv;function x4(){if(hv)return nm;hv=1;function e(r){this.options=r,!r.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(r){return this.options===r||this.options.match===r}},nm=e,nm}var im,gv;function U2(){if(gv)return im;gv=1;function e(a,l){var s=0,u=a.length,c;for(s;s<u&&(c=l(a[s],s),c!==!1);s++);}function r(a){return Object.prototype.toString.apply(a)==="[object Array]"}function i(a){return typeof a=="function"}return im={isFunction:i,isArray:r,each:e},im}var am,xv;function v4(){if(xv)return am;xv=1;var e=x4(),r=U2().each;function i(a,l){this.query=a,this.isUnconditional=l,this.handlers=[],this.mql=window.matchMedia(a);var s=this;this.listener=function(u){s.mql=u.currentTarget||u,s.assess()},this.mql.addListener(this.listener)}return i.prototype={constuctor:i,addHandler:function(a){var l=new e(a);this.handlers.push(l),this.matches()&&l.on()},removeHandler:function(a){var l=this.handlers;r(l,function(s,u){if(s.equals(a))return s.destroy(),!l.splice(u,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){r(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";r(this.handlers,function(l){l[a]()})}},am=i,am}var om,vv;function b4(){if(vv)return om;vv=1;var e=v4(),r=U2(),i=r.each,a=r.isFunction,l=r.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(u,c,p){var m=this.queries,x=p&&this.browserIsIncapable;return m[u]||(m[u]=new e(u,x)),a(c)&&(c={match:c}),l(c)||(c=[c]),i(c,function(g){a(g)&&(g={match:g}),m[u].addHandler(g)}),this},unregister:function(u,c){var p=this.queries[u];return p&&(c?p.removeHandler(c):(p.clear(),delete this.queries[u])),this}},om=s,om}var lm,bv;function y4(){if(bv)return lm;bv=1;var e=b4();return lm=new e,lm}var yv;function w4(){return yv||(yv=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(cr()),i=m4(),a=u(g4()),l=u(B2()),s=Gs();function u(q){return q&&q.__esModule?q:{default:q}}function c(q){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},c(q)}function p(){return p=Object.assign?Object.assign.bind():function(q){for(var b=1;b<arguments.length;b++){var W=arguments[b];for(var Y in W)Object.prototype.hasOwnProperty.call(W,Y)&&(q[Y]=W[Y])}return q},p.apply(this,arguments)}function m(q,b){var W=Object.keys(q);if(Object.getOwnPropertySymbols){var Y=Object.getOwnPropertySymbols(q);b&&(Y=Y.filter(function(N){return Object.getOwnPropertyDescriptor(q,N).enumerable})),W.push.apply(W,Y)}return W}function x(q){for(var b=1;b<arguments.length;b++){var W=arguments[b]!=null?arguments[b]:{};b%2?m(Object(W),!0).forEach(function(Y){j(q,Y,W[Y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(q,Object.getOwnPropertyDescriptors(W)):m(Object(W)).forEach(function(Y){Object.defineProperty(q,Y,Object.getOwnPropertyDescriptor(W,Y))})}return q}function g(q,b){if(!(q instanceof b))throw new TypeError("Cannot call a class as a function")}function h(q,b){for(var W=0;W<b.length;W++){var Y=b[W];Y.enumerable=Y.enumerable||!1,Y.configurable=!0,"value"in Y&&(Y.writable=!0),Object.defineProperty(q,C(Y.key),Y)}}function w(q,b,W){return b&&h(q.prototype,b),Object.defineProperty(q,"prototype",{writable:!1}),q}function k(q,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(b&&b.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),b&&S(q,b)}function S(q,b){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(Y,N){return Y.__proto__=N,Y},S(q,b)}function M(q){var b=z();return function(){var Y=B(q),N;if(b){var F=B(this).constructor;N=Reflect.construct(Y,arguments,F)}else N=Y.apply(this,arguments);return O(this,N)}}function O(q,b){if(b&&(c(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return A(q)}function A(q){if(q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return q}function z(){try{var q=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(z=function(){return!!q})()}function B(q){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(W){return W.__proto__||Object.getPrototypeOf(W)},B(q)}function j(q,b,W){return b=C(b),b in q?Object.defineProperty(q,b,{value:W,enumerable:!0,configurable:!0,writable:!0}):q[b]=W,q}function C(q){var b=P(q,"string");return c(b)=="symbol"?b:String(b)}function P(q,b){if(c(q)!="object"||!q)return q;var W=q[Symbol.toPrimitive];if(W!==void 0){var Y=W.call(q,b);if(c(Y)!="object")return Y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(b==="string"?String:Number)(q)}var L=(0,s.canUseDOM)()&&y4();e.default=(function(q){k(W,q);var b=M(W);function W(Y){var N;return g(this,W),N=b.call(this,Y),j(A(N),"innerSliderRefHandler",function(F){return N.innerSlider=F}),j(A(N),"slickPrev",function(){return N.innerSlider.slickPrev()}),j(A(N),"slickNext",function(){return N.innerSlider.slickNext()}),j(A(N),"slickGoTo",function(F){var ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return N.innerSlider.slickGoTo(F,ie)}),j(A(N),"slickPause",function(){return N.innerSlider.pause("paused")}),j(A(N),"slickPlay",function(){return N.innerSlider.autoPlay("play")}),N.state={breakpoint:null},N._responsiveMediaHandlers=[],N}return w(W,[{key:"media",value:function(N,F){L.register(N,F),this._responsiveMediaHandlers.push({query:N,handler:F})}},{key:"componentDidMount",value:function(){var N=this;if(this.props.responsive){var F=this.props.responsive.map(function(ee){return ee.breakpoint});F.sort(function(ee,R){return ee-R}),F.forEach(function(ee,R){var te;R===0?te=(0,a.default)({minWidth:0,maxWidth:ee}):te=(0,a.default)({minWidth:F[R-1]+1,maxWidth:ee}),(0,s.canUseDOM)()&&N.media(te,function(){N.setState({breakpoint:ee})})});var ie=(0,a.default)({minWidth:F.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(ie,function(){N.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(N){L.unregister(N.query,N.handler)})}},{key:"render",value:function(){var N=this,F,ie;this.state.breakpoint?(ie=this.props.responsive.filter(function(ne){return ne.breakpoint===N.state.breakpoint}),F=ie[0].settings==="unslick"?"unslick":x(x(x({},l.default),this.props),ie[0].settings)):F=x(x({},l.default),this.props),F.centerMode&&(F.slidesToScroll>1,F.slidesToScroll=1),F.fade&&(F.slidesToShow>1,F.slidesToScroll>1,F.slidesToShow=1,F.slidesToScroll=1);var ee=r.default.Children.toArray(this.props.children);ee=ee.filter(function(ne){return typeof ne=="string"?!!ne.trim():!!ne}),F.variableWidth&&(F.rows>1||F.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),F.variableWidth=!1);for(var R=[],te=null,D=0;D<ee.length;D+=F.rows*F.slidesPerRow){for(var E=[],_=D;_<D+F.rows*F.slidesPerRow;_+=F.slidesPerRow){for(var I=[],G=_;G<_+F.slidesPerRow&&(F.variableWidth&&ee[G].props.style&&(te=ee[G].props.style.width),!(G>=ee.length));G+=1)I.push(r.default.cloneElement(ee[G],{key:100*D+10*_+G,tabIndex:-1,style:{width:"".concat(100/F.slidesPerRow,"%"),display:"inline-block"}}));E.push(r.default.createElement("div",{key:10*D+_},I))}F.variableWidth?R.push(r.default.createElement("div",{key:D,style:{width:te}},E)):R.push(r.default.createElement("div",{key:D},E))}if(F==="unslick"){var Z="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:Z},ee)}else R.length<=F.slidesToShow&&!F.infinite&&(F.unslick=!0);return r.default.createElement(i.InnerSlider,p({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(F)),R)}}]),W})(r.default.Component)})(Xf)),Xf}var wv;function k4(){return wv||(wv=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(w4());function i(a){return a&&a.__esModule?a:{default:a}}e.default=r.default})(Gf)),Gf}var S4=k4();const Ii=Ks(S4),E4=({t:e,i18n:r})=>{const i={dots:!0,fade:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,waitForAnimate:!1};return y.jsx(R4,{children:y.jsxs(Ii,{...i,children:[y.jsx("div",{children:y.jsx("p",{style:{whiteSpace:"pre-wrap"},children:e("profile.general")})}),y.jsx("div",{children:y.jsx("p",{style:{whiteSpace:"pre-wrap"},children:e("profile.it")})})]})})},R4=U.div`
  /* laptop */
  @media (max-width: 1920px) {
    /* border: red 1px solid; */
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 45rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 40px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 24px;
    }
  }

  /* tablet */
  @media (max-width: 835px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 49rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 25px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 26px;
    }
    /* p {
      font-size: 16px;
    } */
  }
  /* tablet */
  @media (max-width: 820px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 49rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 25px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 26px;
    }
    /* p {
      font-size: 16px;
    } */
  }

  /* tablet */
  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 46rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 25px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 26px;
    }
    /* p {
      font-size: 16px;
    } */
  }

  /* mobile */
  @media (max-width: 428px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 25.5rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 20px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 26px;
    }
    p {
      font-size: 13px;
    }
  }

  /* mobile */
  @media (max-width: 415px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 25.3rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 20px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 26px;
    }
    p {
      font-size: 13px;
    }
  }

  /* mobile */
  @media (max-width: 412px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 24rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 20px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 26px;
    }
    p {
      font-size: 13px;
    }
  }

  /* mobile */
  @media (max-width: 395px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 24rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 20px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 26px;
    }
    p {
      font-size: 13px;
    }
  }

  /* mobile */
  @media (max-width: 391px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 23.5rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 20px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 26px;
    }
    p {
      font-size: 13px;
    }
  }

  /* mobile */
  @media (max-width: 376px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 22.4rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 20px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 26px;
    }
    p {
      font-size: 13px;
    }
  }

  /* mobile */
  @media (max-width: 360px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 20.8rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 16px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 24px;
    }
    p {
      font-size: 12px;
      text-align: center;
    }
  }

  /* mobile */
  @media (max-width: 320px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
    width: 18.9rem;
    .slick-slide {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 20px;
    }
    .slick-dots li button:before {
      color: white;
      font-size: 12px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: white;
      font-size: 24px;
    }
    p {
      font-size: 10px;
      text-align: center;
    }
  }
`,C4=()=>{const{t:e,i18n:r}=lt();return y.jsxs(P4,{id:"home",children:[y.jsxs(O4,{children:[y.jsxs("h4",{children:[e("profile.greeting")," ",y.jsx("span",{className:"green",children:e("profile.me")})]}),y.jsx("h1",{children:e("profile.name")}),y.jsx(E4,{t:e,i18n:r}),y.jsx("p",{style:{paddingTop:"2rem",color:"white",fontWeight:"bold"},className:"motto-title",children:e("profile.mottoTitle")}),y.jsx("p",{style:{fontWeight:"bold",color:"white"},className:"motto",children:e("profile.motto")}),y.jsxs(_4,{children:[y.jsxs("p",{children:[e("profile.social")," :"]}),y.jsxs("div",{className:"social-icons",children:[y.jsx("span",{children:y.jsx("a",{href:"#",children:y.jsx(I2,{className:"ig"})})}),y.jsx("span",{children:y.jsx("a",{href:"#",children:y.jsx(D2,{className:"linkedin"})})}),y.jsx("span",{children:y.jsx("a",{href:"#",children:y.jsx(z2,{className:"github"})})})]})]})]}),y.jsx(j4,{children:y.jsx("img",{src:`${FP}`,alt:""})})]})},P4=U.div`
  /* laptop */
  @media (max-width: 1920px) {
    display: flex;
    padding-top: 8rem;
    padding-bottom: 5rem;
    /* align-items: center; */
    gap: 2rem;
    z-index: 0;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
  }
  /* tablet */
  @media (max-width: 835px) {
    padding-top: 6rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  /* tablet */
  @media (max-width: 820px) {
    padding-top: 6rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* tablet */
  @media (max-width: 768px) {
    padding-top: 6rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 428px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 415px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 412px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 395px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 391px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 376px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    /* ini akan AKTIF di iPhone X */
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 360px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 320px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`,O4=U.div`
  flex: 1;
  /* laptop */
  @media (max-width: 1920px) {
    h4 {
      padding: 1rem 0;
      font-weight: 500;
      color: white;
      .green {
        color: green;
      }
    }

    h1 {
      font-size: 2rem;
      font-family: "Secular One", sans-serif;
      letter-spacing: 2px;
      color: white;
    }

    h3 {
      font-weight: 500;
      font-size: 1.2rem;
      padding-bottom: 1.2rem;
      color: white;
      text-transform: capitalize;
    }
    p {
      font-weight: 300;
      color: white;
    }
  }

  /* tablet */
  @media (max-width: 835px) {
    h4 {
      text-align: center;
      font-size: 22px;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
    }
    .motto-title {
      text-align: center;
      /* font-size: 20px; */
    }
    .motto {
      text-align: center;
      /* font-size: 16px; */
      width: 49rem;
    }
  }

  /* tablet */
  @media (max-width: 820px) {
    h4 {
      text-align: center;
      font-size: 22px;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
    }
    .motto-title {
      text-align: center;
      /* font-size: 20px; */
    }
    .motto {
      text-align: center;
      /* font-size: 16px; */
      width: 49rem;
    }
  }

  /* tablet */
  @media (max-width: 768px) {
    h4 {
      text-align: center;
      font-size: 22px;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
    }
    .motto-title {
      text-align: center;
      /* font-size: 20px; */
    }
    .motto {
      text-align: center;
      /* font-size: 16px; */
      width: 46rem;
    }
  }

  /* mobile */
  @media (max-width: 428px) {
    h4 {
      text-align: center;
      font-size: 21px;
    }
    h1 {
      text-align: center;
      font-size: 21px;
    }
    .motto-title {
      text-align: center;
      font-size: 20px;
    }
    .motto {
      text-align: center;
      font-size: 16px;
      width: 25.5rem;
    }
  }

  /* mobile */
  @media (max-width: 415px) {
    h4 {
      text-align: center;
      font-size: 20px;
    }
    h1 {
      text-align: center;
      font-size: 20px;
    }
    .motto-title {
      text-align: center;
      font-size: 19px;
    }
    .motto {
      text-align: center;
      font-size: 15px;
      width: 25.3rem;
    }
  }

  /* mobile */
  @media (max-width: 412px) {
    h4 {
      text-align: center;
      font-size: 19px;
    }
    h1 {
      text-align: center;
      font-size: 19px;
    }
    .motto-title {
      text-align: center;
      font-size: 18px;
    }
    .motto {
      text-align: center;
      font-size: 14px;
      width: 24rem;
    }
  }

  /* mobile */
  @media (max-width: 395px) {
    h4 {
      text-align: center;
      font-size: 18px;
    }
    h1 {
      text-align: center;
      font-size: 18px;
    }
    .motto-title {
      text-align: center;
      font-size: 17px;
    }
    .motto {
      text-align: center;
      font-size: 14px;
      width: 24rem;
    }
  }

  /* mobile */
  @media (max-width: 391px) {
    h4 {
      text-align: center;
      font-size: 18px;
    }
    h1 {
      text-align: center;
      font-size: 18px;
    }
    .motto-title {
      text-align: center;
      font-size: 17px;
    }
    .motto {
      text-align: center;
      font-size: 14px;
      width: 23.5rem;
    }
  }

  /* mobile */
  @media (max-width: 376px) {
    h4 {
      text-align: center;
      font-size: 17px;
    }
    h1 {
      text-align: center;
      font-size: 17px;
    }
    .motto-title {
      text-align: center;
      font-size: 16px;
    }
    .motto {
      text-align: center;
      font-size: 13px;
      width: 22rem;
    }
  }

  /* mobile */
  @media (max-width: 360px) {
    h4 {
      text-align: center;
      font-size: 16px;
    }
    h1 {
      text-align: center;
      font-size: 16px;
    }
    .motto-title {
      text-align: center;
      font-size: 15px;
    }
    .motto {
      text-align: center;
      font-size: 12px;
      width: 20.7rem;
    }
  }

  /* mobile */
  @media (max-width: 320px) {
    h4 {
      text-align: center;
      font-size: 15px;
    }
    h1 {
      text-align: center;
      font-size: 15px;
    }
    .motto-title {
      text-align: center;
      font-size: 13px;
    }
    .motto {
      text-align: center;
      font-size: 10px;
      width: 19rem;
    }
  }
`,_4=U.div`
  /* laptop */
  @media (max-width: 1920px) {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      font-size: 0.9rem;
    }
    .social-icons {
      display: flex;
      gap: 2rem;
      span {
        width: 3rem;
        height: 3rem;
        clip-path: polygon(
          50% 0%,
          100% 25%,
          100% 75%,
          50% 100%,
          0% 75%,
          0% 25%
        );
        background-color: #01be96;
        position: relative;
        transition: transform 400ms ease;
        &:hover {
          transform: rotate(360deg);
        }
        .ig {
          font-size: 25px;
        }
        .linkedin {
          font-size: 25px;
        }
        .github {
          font-size: 25px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-50%, -50%);
      }
    }
  }

  /* tablet */
  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 15px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 6.4rem;
      span {
        width: 45px;
        height: 45px;
        .ig {
          font-size: 23px;
        }
        .linkedin {
          font-size: 23px;
        }
        .github {
          font-size: 23px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }
  /* tablet */
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 15px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 6.4rem;
      span {
        width: 45px;
        height: 45px;
        .ig {
          font-size: 23px;
        }
        .linkedin {
          font-size: 23px;
        }
        .github {
          font-size: 23px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 15px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 6.4rem;
      span {
        width: 45px;
        height: 45px;
        .ig {
          font-size: 23px;
        }
        .linkedin {
          font-size: 23px;
        }
        .github {
          font-size: 23px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 14px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 6.1rem;
      span {
        width: 43px;
        height: 43px;
        .ig {
          font-size: 22px;
        }
        .linkedin {
          font-size: 22px;
        }
        .github {
          font-size: 22px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 13px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 6rem;
      span {
        width: 41px;
        height: 41px;
        .ig {
          font-size: 21px;
        }
        .linkedin {
          font-size: 21px;
        }
        .github {
          font-size: 21px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 12px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 5.6rem;
      span {
        width: 38px;
        height: 38px;
        .ig {
          font-size: 20px;
        }
        .linkedin {
          font-size: 20px;
        }
        .github {
          font-size: 20px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }
  /* mobile */
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 11px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 5.6rem;
      span {
        width: 36px;
        height: 36px;
        .ig {
          font-size: 19px;
        }
        .linkedin {
          font-size: 19px;
        }
        .github {
          font-size: 19px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 10px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 5.6rem;
      span {
        width: 34px;
        height: 34px;
        .ig {
          font-size: 17px;
        }
        .linkedin {
          font-size: 17px;
        }
        .github {
          font-size: 17px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 9px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 52rem; */
      /* right: 190px; */
      margin-right: 5rem;
      span {
        width: 30px;
        height: 30px;
        .ig {
          font-size: 15px;
        }
        .linkedin {
          font-size: 15px;
        }
        .github {
          font-size: 15px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }
`,j4=U.div`
  img {
    /* laptop */
    @media (max-width: 1920px) {
      margin-top: 3rem;
      width: 15rem;
      border-radius: 50%;
      filter: drop-shadow(0px 0px 10px #f04242);
      transition: 400ms;
      /* position:absolute; */
      /* z-index: -2; */
    }
    /* tablet */
    @media (max-width: 768px) {
      width: 240px;
    }

    /* mobile */
    @media (max-width: 428px) {
      width: 230px;
    }

    /* mobile */
    @media (max-width: 415px) {
      width: 220px;
    }

    /* mobile */
    @media (max-width: 412px) {
      width: 210px;
    }

    /* mobile */
    @media (max-width: 391px) {
      width: 200px;
    }

    /* mobile */
    @media (max-width: 376px) {
      width: 190px;
    }

    /* mobile */
    @media (max-width: 360px) {
      width: 180px;
    }

    /* mobile */
    @media (max-width: 320px) {
      width: 170px;
    }
  }

  :hover {
    transform: translateY(-10px);
  }
`;function T4(e){return Lt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"},child:[]}]})(e)}function K2(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(e)}function Y2(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function M4(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"},child:[]}]})(e)}const q4="/assets/ktppolos-B_0ilDzP.jpg",A4="/assets/belajarhalbaru-DgzONSg6.mp4",L4="/assets/futsal-ChAWRctq.mp4",N4="/assets/coding-NRHHv1Sz.mp4",z4="/assets/game-Umon9Bmf.mp4",I4="/assets/musik-emE8-QH3.mp4",D4=({t:e,i18n:r})=>y.jsxs(B4,{children:[y.jsxs(sm,{children:[y.jsxs(Ma,{children:[y.jsx(qa,{width:"400",controls:!0,autoPlay:!0,muted:!0,playsInline:!0,loop:!0,children:y.jsx("source",{src:`${L4}`,type:"video/mp4"})}),y.jsx("h1",{className:"video-title",children:e("tertarik.futsal")})]}),y.jsxs(Ma,{children:[y.jsx(qa,{width:"400",controls:!0,autoPlay:!0,muted:!0,playsInline:!0,loop:!0,children:y.jsx("source",{src:`${z4}`,type:"video/mp4"})}),y.jsx("h1",{className:"video-title",children:e("tertarik.game")})]})]}),y.jsxs(sm,{children:[y.jsxs(Ma,{children:[y.jsx(qa,{controls:!0,autoPlay:!0,muted:!0,playsInline:!0,loop:!0,children:y.jsx("source",{src:`${I4}`,type:"video/mp4"})}),y.jsx("h1",{className:"video-title",children:e("tertarik.musik")})]}),y.jsxs(Ma,{children:[y.jsx(qa,{width:"400",controls:!0,autoPlay:!0,muted:!0,playsInline:!0,loop:!0,children:y.jsx("source",{src:`${A4}`,type:"video/mp4"})}),y.jsx("h1",{className:"video-title",children:e("tertarik.belajar")})]})]}),y.jsx(sm,{children:y.jsxs(Ma,{children:[y.jsx(qa,{width:"400",controls:!0,autoPlay:!0,muted:!0,playsInline:!0,loop:!0,children:y.jsx("source",{src:`${N4}`,type:"video/mp4"})}),y.jsx("h1",{className:"video-title",children:e("tertarik.coding")})]})})]}),B4=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
  }
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px){
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
  }
  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
`,sm=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    gap: 0.5rem;
  }
  
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px){
    display: flex;
    gap: 0.5rem;
  }
  @media (max-width: 835px) {
    display: flex;
    gap: 0.5rem;
  }
  @media (max-width: 820px) {
    display: flex;
    gap: 0.5rem;
  }
  @media (max-width: 768px) {
    display: flex;
    gap: 0.5rem;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`,Ma=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
    }
  }

  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px){
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 15px;
    }
  }
  @media (max-width: 835px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 14px;
    }
  }
  @media (max-width: 820px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 13px;
    }
  }
  @media (max-width: 768px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 12px;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 17px;
    }
  }
  @media (max-width: 415px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 16px;
    }
  }
  @media (max-width: 412px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 15px;
    }
  }
  @media (max-width: 395px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 14px;
    }
  }
  @media (max-width: 391px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 13px;
    }
  }
  @media (max-width: 376px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 12px;
    }
  }
  @media (max-width: 360px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 11px;
    }
  }
  @media (max-width: 320px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 10px;
    }
  }
`,qa=U.video`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    width: 400px;
    height: auto;
    display: block;
    border-radius: 5px;
  }

  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    width: 275px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 835px) {
    width: 245px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 820px) {
    width: 245px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 800px) {
    width: 235.4px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    width: 222px;
    height: auto;
    display: block;
    border-radius: 5px;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 379.5px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 415px) {
    width: 364.5px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 412px) {
    width: 361.5px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 395px) {
    width: 340px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 391px) {
    width: 340px;
    height: auto;
    display: block;
    border-radius: 5px;
  }

  @media (max-width: 376px) {
    width: 325px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 360px) {
    width: 312px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 320px) {
    width: 270px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
`;function $4(e){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"},child:[]},{tag:"path",attr:{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"},child:[]},{tag:"path",attr:{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"},child:[]},{tag:"path",attr:{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"},child:[]},{tag:"path",attr:{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"},child:[]},{tag:"path",attr:{d:"M3.477 10.896a4 4 0 0 1 .585-.396"},child:[]},{tag:"path",attr:{d:"M19.938 10.5a4 4 0 0 1 .585.396"},child:[]},{tag:"path",attr:{d:"M6 18a4 4 0 0 1-1.967-.516"},child:[]},{tag:"path",attr:{d:"M19.967 17.484A4 4 0 0 1 18 18"},child:[]}]})(e)}const G2=e=>de.createElement("svg",{id:"svg1",width:773.33331,height:516,viewBox:"0 0 773.33331 516",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg",...e},de.createElement("defs",{id:"defs1"}),de.createElement("g",{id:"g1"},de.createElement("path",{style:{fill:"#000000"},d:"m 319.09517,460.02771 c -3.11215,-2.74633 -3.56686,-4.57839 -5.37759,-21.66667 -5.86885,-55.3856 -7.91139,-60.06087 -48.04912,-109.98223 -22.39253,-27.85072 -27.32237,-34.73002 -27.32237,-38.12668 0,-5.11235 3.98618,-9.0022 9.22513,-9.0022 3.93732,0 3.53621,-0.33214 61.32216,50.77884 23.20926,20.52831 20.14674,19.58631 65.26879,20.07604 32.76548,0.35561 38.78639,0.10523 45.08114,-1.87471 6.335,-1.9926 11.9913,-6.45531 44.18391,-34.86027 20.30537,-17.91632 38.26886,-33.10785 39.91886,-33.75896 5.86463,-2.31423 12.33333,2.57503 12.33333,9.32194 0,1.5756 -11.63346,17.25843 -27.2799,36.77547 -15.00395,18.71561 -29.41536,37.84694 -32.02536,42.51406 -5.68232,10.16093 -10.61749,23.86112 -12.53782,34.80537 -1.29644,7.38862 -5.49025,45.25057 -5.49025,49.56633 0,1.03852 -1.47273,3.36094 -3.27273,5.16094 l -3.27272,3.27273 h -54.65292 -54.65292 z m 47.72432,-119.71932 c -14.13296,-2.79715 -28.63892,-14.30005 -34.91316,-27.68535 -3.15268,-6.72584 -3.55917,-9.198 -3.55089,-21.59533 0.008,-12.67246 0.35592,-14.6591 3.66419,-20.95078 7.18472,-13.66394 17.64662,-22.2456 32.23016,-26.43766 19.38663,-5.57272 41.6449,2.70329 53.23651,19.79426 19.85443,29.27386 3.70257,69.4348 -30.87251,76.76324 -7.92203,1.67913 -11.76481,1.7008 -19.7943,0.11162 z m -171.1809,-80.58368 c -3.32245,-1.06725 -8.51971,-4.06227 -11.54945,-6.65562 -7.99995,-6.84766 -11.08704,-14.19969 -12.02199,-28.63087 l -0.78245,-12.07718 h 34.37904 34.37903 l -0.64549,12.34061 c -0.70644,13.50574 -2.62582,18.76224 -9.5338,26.10957 -8.68714,9.23964 -22.2296,12.76663 -34.22489,8.91349 z m 316.37416,-0.0638 c -2.89664,-2.0448 -3,-2.84855 -3,-23.32858 0,-19.6059 0.19514,-21.31525 2.57901,-22.59106 1.61873,-0.86632 17.97377,-1.38025 43.92439,-1.38025 41.21366,0 41.352,0.009 43.42099,2.96334 2.87843,4.10954 3.02865,39.22267 0.18446,43.11516 -1.79045,2.45035 -4.08014,2.60816 -43,2.96366 -35.8125,0.32711 -41.49537,0.10264 -44.10885,-1.74227 z m 53.7401,-19.91131 c 5.06037,-2.11435 5.83221,-3.94551 2.25989,-5.36147 -12.8516,-5.09399 -27.51054,-9.86895 -28.47237,-9.27451 -1.29178,0.79836 -1.68711,22.31014 -0.43305,23.5642 0.69555,0.69555 15.42395,-4.23954 26.64553,-8.92822 z m -23.40677,-3.22189 c 0,-3.75833 0.3884,-6.83333 0.8631,-6.83333 2.37488,0 16.47023,5.84296 16.47023,6.82742 0,1.30839 -8.26237,4.99164 -13.66666,6.0924 -3.62019,0.73738 -3.66667,0.66022 -3.66667,-6.08649 z M 244.1328,232.17902 c 0.46395,-1.73322 0.85173,-5.40131 0.86175,-8.15131 0.0175,-4.82193 0.1844,-5 4.68487,-5 3.55745,0 4.66548,0.55461 4.66168,2.33333 -0.007,3.39011 -4.71275,10.57672 -8.11874,12.39956 -2.70213,1.44613 -2.86667,1.32159 -2.08956,-1.58158 z m -64.5401,-39.93976 c -1.61423,-2.26698 -3.23555,-6.78853 -3.60292,-10.04789 -0.64116,-5.68832 -0.41356,-6.15968 5.67205,-11.74687 6.75121,-6.19829 6.86351,-6.72858 3.93017,-18.55861 -0.63316,-2.55353 -0.37483,-4.16047 0.78396,-4.87664 2.81528,-1.73994 4.96532,-0.103 7.19986,5.48167 4.01144,10.02557 2.08868,18.01376 -5.45867,22.67828 -5.28426,3.26585 -5.80852,7.52176 -1.64657,13.36668 1.53514,2.1559 2.45397,4.79852 2.04185,5.87249 -1.26147,3.28733 -5.82454,2.17768 -8.91973,-2.16911 z m 20.03948,-0.21155 c -5.76375,-9.33792 -5.04816,-15.0148 2.77831,-22.04076 5.72896,-5.143 6.32161,-7.80299 3.69315,-16.57602 -1.27456,-4.25408 -1.23395,-5.47076 0.21242,-6.36466 2.82147,-1.74376 5.30197,-0.0799 7.41304,4.97265 3.97043,9.5026 1.786,18.37679 -5.91972,24.04871 -4.84011,3.56263 -5.11637,5.99241 -1.37843,12.12366 1.50786,2.4733 2.42445,5.3233 2.03686,6.33333 -1.28765,3.35559 -6.05475,2.00842 -8.83563,-2.49691 z m 20.25992,0 c -5.90843,-9.58391 -4.81013,-17.43184 3.12596,-22.33661 5.551,-3.43071 6.33776,-6.62827 3.66619,-14.90028 -1.8048,-5.58824 -1.85477,-6.8258 -0.31407,-7.778 4.71601,-2.91465 9.30924,4.86104 9.30924,15.75924 0,5.42164 -0.59016,6.55491 -6,11.52168 -3.3,3.02973 -6,6.31349 -6,7.29724 0,0.98375 1.25835,3.82469 2.79633,6.3132 1.53798,2.4885 2.45681,5.40932 2.04185,6.49071 -1.31291,3.42138 -5.81932,2.18465 -8.6255,-2.36718 z m 228.2253,-40.19182 c -2.93666,-2.52601 -3.71071,-4.33247 -3.71071,-8.65994 0,-7.01523 3.9071,-11.23471 10.5364,-11.3788 l 4.72848,-0.10277 0.004,-25.50491 0.004,-25.504905 3.66667,-1.44697 c 2.01667,-0.79583 20.14372,-6.33542 40.28233,-12.31018 26.30475,-7.80414 37.19323,-10.49835 38.66667,-9.56752 1.75484,1.10859 2.051,6.01954 2.051,34.01037 0,30.839875 -0.15282,32.884175 -2.66667,35.672415 -4.1022,4.54995 -8.11691,5.58385 -13.28978,3.42249 -12.38273,-5.17384 -8.28306,-22.10413 5.35252,-22.10413 2.97637,0 3.2706,-0.52778 3.2706,-5.86675 v -5.866755 l -15.66667,4.700675 c -8.61667,2.58537 -24.06667,7.21257 -34.33333,10.28267 l -18.66667,5.58201 -0.66667,15.70452 c -0.64471,15.18748 -0.78983,15.8103 -4.40768,18.91741 -4.77081,4.09731 -10.40631,4.10514 -15.15433,0.0211 z M 329.01275,118.86995 c -10.73024,-9.31091 -28.08588,-15.79936 -42.33333,-15.82641 l -8.33333,-0.0158 V 80.516585 c 0,-25.5547 -0.72906,-24.09897 12.08845,-24.1373 14.8313,-0.0444 31.34779,5.38957 40.31636,13.26407 l 4.92852,4.3273 v 24.52855 c 0,13.490695 -0.45,24.504155 -1,24.474345 -0.55,-0.0298 -3.1,-1.87641 -5.66667,-4.10357 z m 12,-20.390375 v -24.54814 l 4.33333,-3.66472 c 10.88463,-9.20519 34.80456,-15.8796 48,-13.39352 l 5,0.94202 v 22.60625 22.606245 h -7.71987 c -14.20861,0 -29.23491,5.44485 -42.07537,15.24619 -3.42531,2.6146 -6.52264,4.75381 -6.88296,4.75381 -0.36032,0 -0.65513,-11.04666 -0.65513,-24.548135 z",id:"path1"})));Vr`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;const F4=()=>{const[e,r]=de.useState(1),{t:i,i18n:a}=lt();return y.jsxs(V4,{id:"resume",children:[y.jsx(H4,{children:y.jsx("h1",{children:i("resume.title")})}),y.jsxs(W4,{children:[y.jsx(U4,{children:y.jsxs(K4,{children:[y.jsxs(G4,{children:[y.jsx(Ed,{active:e===1,onClick:()=>r(1),style:{cursor:"pointer"},children:y.jsx(M4,{})}),y.jsx(Rd,{active:e===1,onClick:()=>r(1),style:{cursor:"pointer"},children:y.jsx(Sd,{children:i("menu.profile")})})]}),y.jsxs(X4,{children:[y.jsx(Ed,{active:e===2,onClick:()=>r(2),style:{cursor:"pointer"},children:y.jsx(T4,{})}),y.jsx(Rd,{active:e===2,onClick:()=>r(2),style:{cursor:"pointer"},children:y.jsx(Sd,{children:i("menu.education")})})]}),y.jsxs(Q4,{children:[y.jsx(Ed,{active:e===3,onClick:()=>r(3),style:{cursor:"pointer"},children:y.jsx($4,{})}),y.jsx(Rd,{active:e===3,onClick:()=>r(3),style:{cursor:"pointer"},children:y.jsx(Sd,{children:i("menu.skill")})})]}),y.jsxs(Z4,{children:[y.jsx(Ed,{active:e===4,onClick:()=>r(4),style:{cursor:"pointer"},children:y.jsx(Y4,{children:y.jsx(G2,{})})}),y.jsx(Rd,{active:e===4,onClick:()=>r(4),style:{cursor:"pointer"},children:y.jsx(Sd,{children:i("menu.interest")})})]})]})}),y.jsxs(J4,{children:[e===1&&y.jsxs(eO,{children:[y.jsx("h3",{className:"main-title",children:i("profileTitle.profile title")}),y.jsxs(tO,{backgroundImage:`${q4}`,children:[y.jsxs("h3",{className:"second-title",children:[i("profileTitle.province"),y.jsx("br",{}),i("profileTitle.kabupaten")]}),y.jsx(rO,{children:[["profileMenu.nama","profileContent.nama"],["profileMenu.tempatTanggalLahir","profileContent.tempatTanggalLahir"],["profileMenu.pendidikanTerakhir","profileContent.pendidikanTerakhir"],["profileMenu.jenisKelamin","profileContent.jenisKelamin"],["profileMenu.alamat","profileContent.alamat"],["profileMenu.agama","profileContent.agama"],["profileMenu.status","profileContent.status"],["profileMenu.nomorTelepon","profileContent.nomorTelepon"],["profileMenu.email","profileContent.email"]].map(([l,s],u)=>y.jsxs(nO,{children:[y.jsxs(iO,{children:[y.jsx("h4",{style:{color:"black"},children:i(l)}),y.jsx("span",{children:":"})]}),y.jsx("h4",{children:i(s)})]}))})]})]}),e===2&&y.jsxs(aO,{children:[y.jsx("h3",{children:i("education.educationTitle")}),y.jsx(oO,{children:y.jsxs(lO,{children:[y.jsxs(um,{children:[y.jsxs(dm,{children:[y.jsx(cm,{}),y.jsx(pm,{children:y.jsx("h4",{children:i("education.education1")})})]}),y.jsx(sO,{children:y.jsx("p",{children:"2002 - 2008"})})]}),y.jsxs(um,{children:[y.jsxs(dm,{children:[y.jsx(cm,{}),y.jsx(pm,{children:y.jsx("h4",{children:i("education.education2")})})]}),y.jsx(uO,{children:y.jsx("p",{children:"2008 - 2011"})})]}),y.jsxs(um,{children:[y.jsxs(dm,{children:[y.jsx(cm,{}),y.jsxs(pm,{children:[y.jsx("h4",{children:i("education.education3")}),y.jsxs("p",{className:"jurusan",children:[i("education.jurusan")," :"," ",i("education.namajurusan")]})]})]}),y.jsx(dO,{children:y.jsx("p",{children:"2011 - 2014"})})]})]})})]}),e===3&&y.jsxs(cO,{children:[y.jsx("h3",{className:"skill-title",children:i("skill.skillTitle")}),y.jsx(pO,{children:y.jsxs(fO,{children:[y.jsxs(mO,{children:[y.jsx("h4",{children:i("skill.softSkill")}),y.jsxs(Bn,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.disiplin")})]}),y.jsxs(Bn,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.jujur")})]}),y.jsxs(Bn,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.mampuBekerja")})]}),y.jsxs(Bn,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.komunikasi")})]}),y.jsxs(Bn,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.komitmen")})]}),y.jsxs(Bn,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.bawahTekanan")})]}),y.jsxs(Bn,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.pekerjaKeras")})]})]}),y.jsxs(hO,{children:[y.jsx("h4",{children:i("skill.hardSkill")}),y.jsxs(Aa,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.las")})]}),y.jsxs(Aa,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.komputer")})]}),y.jsxs(Aa,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.inggris")})]}),y.jsxs(Aa,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.korea")})]}),y.jsxs(Aa,{children:[y.jsx(Qt,{}),y.jsx("p",{children:i("skill.korea")})]})]})]})})]}),e===4&&y.jsxs(gO,{children:[y.jsx(xO,{children:y.jsx("h3",{className:"minat-title",children:i("tertarik.title")})}),y.jsx(D4,{t:i,i18n:a})]})]})]})]})},V4=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    padding-top: 6rem;
    gap: 2rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    padding-top: 6rem;
    gap: 2rem;
    width: 93%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    padding-top: 6rem;
    gap: 2rem;
    width: 93%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    padding-top: 6rem;
    gap: 2rem;
    width: 93%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 415px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 412px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 395px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 391px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 376px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 360px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 320px) {
    width: 100%;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
`,H4=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 415px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 412px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 395px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 391px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 376px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 20px;
    }
  }
`,W4=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
  }
  @media (max-width: 820px) {
    display: flex;
  }
  @media (max-width: 768px) {
    display: flex;
  }

  /* MOBILE RESPONSIVE DSKTOP */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`,U4=U.div`
  /* WEB RESPONSIVE DSKTOP */
  @media (max-width: 1920px) {
    display: flex;
    padding: 2rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    flex: 1;
    align-items: center;
    height: 20rem;
    flex-shrink: 0;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
    padding-left: 10px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* padding-right: 1rem; */
    width: 100%;
    /* margin-left: 0.5rem; */
    // margin-right: 2rem;
    border-radius: 10px;
  }
  @media (max-width: 820px) {
    display: flex;
    padding-left: 10px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* padding-right: 1rem; */
    width: 100%;
    /* margin-left: 0.5rem; */
    // margin-right: 2rem;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    display: flex;
    padding-left: 10px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* padding-right: 1rem; */
    width: 100%;
    /* margin-left: 0.5rem; */
    // margin-right: 2rem;
    border-radius: 10px;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) and (min-width: 415px) {
    display: flex;
    padding-left: 10px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* padding-right: 1rem; */
    width: 99.9%;
    /* margin-left: 0.5rem; */
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 415px) and (min-width: 413px) {
    display: flex;
    padding-left: 7px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* padding-right: 1rem; */
    width: 99.9%;
    /* margin-left: 0.5rem; */
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 412px) and (min-width: 396px) {
    display: flex;
    padding-left: 9px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* padding-right: 1rem; */
    width: 99.7%;
    /* margin-left: 0.5rem; */
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 395px) and (min-width: 392px) {
    display: flex;
    padding-left: 7px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* padding-right: 1rem; */
    width: 99.7%;
    /* margin-left: 0; */
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 391px) and (min-width: 377px) {
    display: flex;
    padding-left: 10.5px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* padding-right: 10rem; */
    width: 99.5%;
    margin-left: 0.5px;
    /* margin-right: 10rem; */
    border-radius: 10px;
  }

  @media (max-width: 376px) and (min-width: 361px) {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 99.5%;
    margin-left: 0.1px;
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 360px) and (min-width: 321px) {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 95.5%;
    margin-left: 0.5rem;
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 320px) {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 100%;
    border-radius: 10px;
    // margin-left: 1rem;
    margin-right: 1rem;
  }
`,K4=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 415px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 412px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 395px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 391px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 376px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 360px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 320px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // margin-right: 2rem;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }
`,Sd=U.p`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    min-width: 80px;
    white-space: nowrap;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    min-width: 80px;
    white-space: nowrap;
    font-size: 16px;
  }
  @media (max-width: 820px) {
    min-width: 80px;
    white-space: nowrap;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    min-width: 80px;
    white-space: nowrap;
    font-size: 16px;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    min-width: 69px;
    font-size: 15.8px;
  }

  @media (max-width: 415px) {
    min-width: 67px;
    font-size: 15.5px;
  }

  @media (max-width: 412px) {
    min-width: 65px;
    font-size: 15.2px;
  }

  @media (max-width: 395px) {
    min-width: 63px;
    font-size: 14.5px;
  }

  @media (max-width: 391px) {
    min-width: 61px;
    font-size: 14px;
  }

  @media (max-width: 376px) {
    min-width: 59px;
    font-size: 13px;
  }

  @media (max-width: 360px) {
    min-width: 57px;
    font-size: 11px;
  }

  @media (max-width: 320px) {
    min-width: 55px;
    font-size: 9px;
  }
`,Y4=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    svg {
      width: 40px;
      height: 40px;
    }

    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    svg {
      width: 40px;
      height: 40px;
    }

    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
  }
  @media (max-width: 820px) {
    svg {
      width: 40px;
      height: 40px;
    }

    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
  }
  @media (max-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }

    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    svg {
      width: 60px;
      height: 60px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 415px) {
    svg {
      width: 60px;
      height: 60px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 412px) {
    svg {
      width: 60px;
      height: 60px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 395px) {
    svg {
      width: 60px;
      height: 60px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 391px) {
    svg {
      width: 50px;
      height: 50px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 376px) {
    svg {
      width: 40px;
      height: 40px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 360px) {
    svg {
      width: 35px;
      height: 35px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 320px) {
    svg {
      width: 30px;
      height: 30px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${e=>e.active?"#00e0ff":"#fff"};
  }
`,Ed=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    width: 35px;
    height: 35px;
    font-size: 20px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }
  @media (max-width: 820px) {
    width: 35px;
    height: 35px;
    font-size: 20px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 20px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  /* MOBILE RESPONSIVE  */
  @media (max-width: 428px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 415px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 412px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 395px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 391px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 376px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 360px) {
    width: 25px;
    height: 25px;
    font-size: 15px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }

  @media (max-width: 320px) {
    width: 25px;
    height: 25px;
    font-size: 12px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }
`,G4=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  @media (max-width: 820px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
`;U.div`
  @media (max-width: 1920px) {
    margin-right: 1rem;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }
  @media (max-width: 320px) {
    margin-right: 5px;
    color: ${e=>e.active?"#00e0ff":"#fff"};
    font-size: 10px;
  }
`;const X4=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  @media (max-width: 820px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 415px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 412px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 395px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 391px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }

  @media (max-width: 376px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 360px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 320px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
`;U.div`
  @media (max-width: 1920px) {
    margin-right: 1rem;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }
  @media (max-width: 320px) {
    color: ${e=>e.active?"#00e0ff":"#fff"};
    margin-right: 5px;
    font-size: 10px;
  }
`;const Q4=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  @media (max-width: 820px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
`;U.div`
  @media (max-width: 1920px) {
    color: ${e=>e.active?"#00e0ff":"#fff"};
    margin-right: 1rem;
  }
  @media (max-width: 320px) {
    color: ${e=>e.active?"#00e0ff":"#fff"};
    margin-right: 5px;
    font-size: 10px;
  }
`;const Z4=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
  @media (max-width: 820px) {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
`;U.div`
  @media (max-width: 1920px) {
    color: ${e=>e.active?"#00e0ff":"#fff"};
    img {
      color: ${e=>e.active?"#00e0ff":"#fff"};
      width: 45px;
      height: 30px;
    }
  }
  @media (max-width: 320px) {
    color: ${e=>e.active?"#00e0ff":"#fff"};
    margin-bottom: 3px;
    img {
      color: ${e=>e.active?"#00e0ff":"#fff"};
      width: 20px;
      height: 15px;
    }
  }
`;const J4=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 2rem;
    width: 70%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.5rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1.5rem;
    width: 80%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.5rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 820px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1.5rem;
    width: 80%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.5rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  @media (max-width: 768px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1.5rem;
    width: 80%;
    height: 20rem;
    overflow-y: auto;
    overflow-x: auto;
    margin-left: 0.5rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  /* MOBILE RESPONSIVE  */
  @media (max-width: 428px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1rem;
    width: 99%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.1rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  @media (max-width: 415px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1rem;
    width: 99%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.1rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  @media (max-width: 412px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1rem;
    width: 99%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.1rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  @media (max-width: 395px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1rem;
    width: 99%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.1rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  @media (max-width: 391px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1rem;
    width: 99%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.1rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  @media (max-width: 376px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1rem;
    width: 99%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.1rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  @media (max-width: 360px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1rem;
    width: 99%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.1rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  @media (max-width: 320px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1rem;
    width: 99%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.1rem;
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
`,eO=U.div`
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    .main-title {
      font-size: 22px;
      text-align: center;
    }
  }
  @media (max-width: 835px) {
    .main-title {
      font-size: 21px;
      text-align: center;
    }
  }
  @media (max-width: 820px) {
    .main-title {
      font-size: 21px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    .main-title {
      font-size: 21px;
      text-align: center;
    }
  }
  /* MOBILE RESPONSIVE */

  @media (max-width: 428px) {
    .main-title {
      font-size: 20px;
      text-align: center;
    }
  }
  @media (max-width: 415px) {
    .main-title {
      font-size: 19px;
      text-align: center;
    }
  }
  @media (max-width: 412px) {
    .main-title {
      font-size: 18px;
      text-align: center;
    }
  }

  @media (max-width: 395px) {
    .main-title {
      font-size: 17px;
      text-align: center;
    }
  }

  @media (max-width: 391px) {
    .main-title {
      font-size: 16px;
      text-align: center;
    }
  }

  @media (max-width: 376px) {
    .main-title {
      font-size: 15px;
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    .main-title {
      font-size: 14px;
      text-align: center;
    }
  }

  @media (max-width: 320px) {
    .main-title {
      font-size: 13px;
      text-align: center;
    }
  }
`,tO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 600px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
    h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
      line-height: 2;
    }
  }

  /* TABLET RESPONSIVE */

  @media (min-width: 1114px) and (max-width: 1152px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 440px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 20px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }
  @media (max-width: 835px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 420px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 18px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }
  @media (max-width: 820px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 420px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 18px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }
  @media (max-width: 768px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 420px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 18px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 390px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 17px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }

  @media (max-width: 415px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 360px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 16px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }

  @media (max-width: 412px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 350px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 15px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }

  @media (max-width: 395px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 340px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 14px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }

  @media (max-width: 391px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 330px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 13px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }

  @media (max-width: 376px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 320px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 12px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }

  @media (max-width: 360px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 310px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 11px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }

  @media (max-width: 320px) {
    background-image: url(${e=>e.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${e=>e.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 300px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 10px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }
`,rO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    max-width: 700px;
    margin: 0 auto;
  }

  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }
  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }

  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }

  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }

  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }

  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }
`,nO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.3rem 0.5rem;
    border-radius: 8px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: right;
      flex: 1;
      word-break: break-word;
    }
  }

  /* TABLET RESPONSIVE */

  @media (min-width: 1114px) and (max-width: 1152px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 14px;
    }
  }
  @media (max-width: 835px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 14px;
    }
  }
  @media (max-width: 820px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 14px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 13.4px;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 14px;
    }
  }

  @media (max-width: 415px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 13px;
    }
  }

  @media (max-width: 412px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 12px;
    }
  }

  @media (max-width: 395px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 11px;
    }
  }

  @media (max-width: 391px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 10px;
    }
  }

  @media (max-width: 376px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 9px;
    }
  }

  @media (max-width: 360px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 8px;
    }
  }

  @media (max-width: 320px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${e=>e?"rgba(255,255,255,0.2)":"transparent"};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 7px;
    }
  }
`,iO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 180px;
    span {
      color: black;
      font-weight: bold;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 100px;
    span {
      color: black;
      font-weight: bold;
      font-size: 12px;
    }
  }

  @media (max-width: 415px) {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 100px;
    span {
      color: black;
      font-weight: bold;
      font-size: 11px;
    }
  }

  @media (max-width: 412px) {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 100px;
    span {
      color: black;
      font-weight: bold;
      font-size: 10px;
    }
  }

  @media (max-width: 395px) {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 100px;
    span {
      color: black;
      font-weight: bold;
      font-size: 9px;
    }
  }

  @media (max-width: 391px) {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 100px;
    span {
      color: black;
      font-weight: bold;
      font-size: 8px;
    }
  }

  @media (max-width: 376px) {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 100px;
    span {
      color: black;
      font-weight: bold;
      font-size: 7px;
    }
  }

  @media (max-width: 360px) {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 100px;
    span {
      color: black;
      font-weight: bold;
      font-size: 6px;
    }
  }

  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 100px;
    span {
      color: black;
      font-weight: bold;
      font-size: 5px;
    }
  }
`,aO=U.div`
  /* MOBILE RESPONSIVE DESKTOP */
  @media (max-width: 835px) {
    max-width: 100%;
    h3 {
      font-size: 23px;
      text-align: center;
    }
  }
  @media (max-width: 820px) {
    max-width: 100%;
    h3 {
      font-size: 22px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    max-width: 100%;
    h3 {
      font-size: 21px;
      text-align: center;
    }
  }

  @media (max-width: 428px) {
    max-width: 100%;
    h3 {
      font-size: 20px;
      text-align: center;
    }
  }
  @media (max-width: 415px) {
    max-width: 100%;
    h3 {
      font-size: 19px;
      text-align: center;
    }
  }
  @media (max-width: 412px) {
    max-width: 100%;
    h3 {
      font-size: 18px;
      text-align: center;
    }
  }
  @media (max-width: 395px) {
    max-width: 100%;
    h3 {
      font-size: 17px;
      text-align: center;
    }
  }

  @media (max-width: 391px) {
    max-width: 100%;
    h3 {
      font-size: 15px;
      text-align: center;
    }
  }
  @media (max-width: 376px) {
    max-width: 100%;
    h3 {
      font-size: 15px;
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    max-width: 100%;
    h3 {
      font-size: 14px;
      text-align: center;
    }
  }

  @media (max-width: 320px) {
    max-width: 100%;
    h3 {
      font-size: 13px;
      text-align: center;
    }
  }
`,oO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    padding: 1px;
  }
  @media (max-width: 835px) {
    padding: 1px;
  }
  @media (max-width: 820px) {
    padding: 1px;
  }
  @media (max-width: 768px) {
    padding: 1px;
  }
  /* MOBILE RESPONSIVE DESKTOP */
  @media (max-width: 428px) {
    padding: 1px;
  }

  @media (max-width: 415px) {
    padding: 1px;
  }

  @media (max-width: 412px) {
    padding: 1px;
  }

  @media (max-width: 395px) {
    padding: 1px;
  }

  @media (max-width: 391px) {
    padding: 1px;
  }

  @media (max-width: 376px) {
    padding: 1px;
  }

  @media (max-width: 360px) {
    padding: 1px;
  }

  @media (max-width: 320px) {
    padding: 1px;
  }
`,lO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  /* MOBILE RESPONSIVE DESKTOP */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`,um=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }

  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
  @media (max-width: 835px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
  @media (max-width: 820px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }

  /* MOBILE RESPONSIVE DESKTOP */
  @media (max-width: 428px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
  @media (max-width: 415px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
  @media (max-width: 412px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
  @media (max-width: 395px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
  @media (max-width: 391px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
  @media (max-width: 376px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
  @media (max-width: 360px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
`,dm=U.div`
  /* WEB RESPONSIVE DSKTOP */
  @media (max-width: 1920px) {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  /* TABLET RESPONSIVE   */
  @media (min-width: 1114px) and (max-width: 1152px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 835px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 820px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 415px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 412px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 395px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 391px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 376px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 360px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,cm=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 20px;
  }

  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }
  @media (max-width: 835px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }
  @media (max-width: 820px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }

  @media (max-width: 415px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }

  @media (max-width: 412px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }

  @media (max-width: 395px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }
  @media (max-width: 391px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }
  @media (max-width: 376px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }

  @media (max-width: 360px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }

  @media (max-width: 320px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }
`,pm=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
  }
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 14px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 13px;
    }
  }
  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 14px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 13px;
    }
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 14px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 13px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 14px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 13px;
    }
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 13.5px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 12.5px;
    }
  }

  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 13px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 12px;
    }
  }

  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 12.5px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 11.5px;
    }
  }

  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 12px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 11px;
    }
  }

  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 12px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 11px;
    }
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 11px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 10px;
    }
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 10px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 9px;
    }
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 9px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 8px;
    }
  }
`,sO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    padding-left: 17rem;
    p {
      background-color: red;
      padding: 10px;
      border-radius: 20px;
    }
  }

  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 10px;
      border-radius: 15px;
      font-size: 12px;
    }
  }
  @media (max-width: 835px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 10px;
      border-radius: 15px;
      font-size: 12px;
    }
  }
  @media (max-width: 820px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 10px;
      border-radius: 15px;
      font-size: 12px;
    }
  }
  @media (max-width: 768px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 10px;
      border-radius: 15px;
      font-size: 12px;
    }
  }
  /* MOBILE RESPONSIVE  */
  @media (max-width: 428px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 10px;
      border-radius: 15px;
      font-size: 10.5px;
    }
  }

  @media (max-width: 415px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 8.5px;
      border-radius: 10px;
      font-size: 10px;
    }
  }

  @media (max-width: 412px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 8.5px;
      border-radius: 10px;
      font-size: 10px;
    }
  }

  @media (max-width: 395px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 7.5px;
      border-radius: 10px;
      font-size: 10px;
    }
  }
  @media (max-width: 391px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 7.5px;
      border-radius: 10px;
      font-size: 10px;
    }
  }
  @media (max-width: 376px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 7px;
      border-radius: 10px;
      font-size: 9.5px;
    }
  }
  @media (max-width: 360px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 6.5px;
      border-radius: 10px;
      font-size: 9px;
    }
  }
  @media (max-width: 320px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 6px;
      border-radius: 10px;
      font-size: 8.5px;
    }
  }
`,uO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    padding-left: 15.2rem;
    p {
      background-color: red;
      padding-top: 10px;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 10px;
      border-radius: 20px;
    }
  }
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8.5px;
      padding-bottom: 8.5px;
      padding-left: 10.5px;
      padding-right: 12.5px;
      border-radius: 12.5px;
      font-size: 12px;
    }
  }
  @media (max-width: 835px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8.5px;
      padding-bottom: 8.5px;
      padding-left: 10.5px;
      padding-right: 12.5px;
      border-radius: 12.5px;
      font-size: 12px;
    }
  }
  @media (max-width: 820px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8.5px;
      padding-bottom: 8.5px;
      padding-left: 10.5px;
      padding-right: 12.5px;
      border-radius: 12.5px;
      font-size: 12px;
    }
  }
  @media (max-width: 768px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8.5px;
      padding-bottom: 8.5px;
      padding-left: 10.5px;
      padding-right: 12.5px;
      border-radius: 12.5px;
      font-size: 12px;
    }
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8.5px;
      padding-bottom: 8.5px;
      padding-left: 10.5px;
      padding-right: 12.5px;
      border-radius: 12.5px;
      font-size: 11px;
    }
  }

  @media (max-width: 415px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 10px;
      padding-right: 12px;
      border-radius: 12px;
      font-size: 10.5px;
    }
  }

  @media (max-width: 412px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 10px;
      padding-right: 12px;
      border-radius: 12px;
      font-size: 10.5px;
    }
  }

  @media (max-width: 395px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 7.5px;
      padding-bottom: 7.5px;
      padding-left: 9.5px;
      padding-right: 11.5px;
      border-radius: 11.5px;
      font-size: 10px;
    }
  }

  @media (max-width: 391px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 7.5px;
      padding-bottom: 7.5px;
      padding-left: 9.5px;
      padding-right: 11.5px;
      border-radius: 11.5px;
      font-size: 10px;
    }
  }

  @media (max-width: 376px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 7px;
      padding-bottom: 7px;
      padding-left: 9px;
      padding-right: 11px;
      border-radius: 11px;
      font-size: 9.5px;
    }
  }

  @media (max-width: 360px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 6.5px;
      padding-bottom: 6.5px;
      padding-left: 8.5px;
      padding-right: 10.5px;
      border-radius: 10.5px;
      font-size: 9px;
    }
  }

  @media (max-width: 320px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 8px;
      padding-right: 10px;
      border-radius: 10px;
      font-size: 8.5px;
    }
  }
`,dO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    padding-left: 16.2rem;
    p {
      background-color: red;
      padding-top: 10px;
      padding-left: 18px;
      padding-right: 18px;
      padding-bottom: 10px;
      border-radius: 20px;
    }
  }
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8.5px;
      padding-bottom: 8.5px;
      padding-left: 12.5px;
      padding-right: 12.5px;
      border-radius: 12.5px;
      font-size: 12px;
    }
  }
  @media (max-width: 835px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8.5px;
      padding-bottom: 8.5px;
      padding-left: 12.5px;
      padding-right: 12.5px;
      border-radius: 12.5px;
      font-size: 12px;
    }
  }
  @media (max-width: 820px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8.5px;
      padding-bottom: 8.5px;
      padding-left: 12.5px;
      padding-right: 12.5px;
      border-radius: 12.5px;
      font-size: 12px;
    }
  }
  @media (max-width: 768px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8.5px;
      padding-bottom: 8.5px;
      padding-left: 12.5px;
      padding-right: 12.5px;
      border-radius: 12.5px;
      font-size: 12px;
    }
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8.5px;
      padding-bottom: 8.5px;
      padding-left: 12.5px;
      padding-right: 12.5px;
      border-radius: 12.5px;
      font-size: 11.5px;
    }
  }
  @media (max-width: 415px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 12px;
      padding-right: 12px;
      border-radius: 12px;
      font-size: 11px;
    }
  }
  @media (max-width: 412px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 12px;
      padding-right: 12px;
      border-radius: 12px;
      font-size: 11px;
    }
  }
  @media (max-width: 395px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 7.5px;
      padding-bottom: 7.5px;
      padding-left: 11.5px;
      padding-right: 11.5px;
      border-radius: 11.5px;
      font-size: 10px;
    }
  }
  @media (max-width: 391px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 7.5px;
      padding-bottom: 7.5px;
      padding-left: 11.5px;
      padding-right: 11.5px;
      border-radius: 11.5px;
      font-size: 10px;
    }
  }
  @media (max-width: 376px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 7px;
      padding-bottom: 7px;
      padding-left: 11px;
      padding-right: 11px;
      border-radius: 11px;
      font-size: 9.5px;
    }
  }

  @media (max-width: 360px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 6.5px;
      padding-bottom: 6.5px;
      padding-left: 10.5px;
      padding-right: 10.5px;
      border-radius: 10.5px;
      font-size: 9px;
    }
  }

  @media (max-width: 320px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 10px;
      font-size: 8.5px;
    }
  }
`,cO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    color: white;
  }
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    .skill-title {
      font-size: 21px;
      text-align: center;
    }
  }
  @media (max-width: 835px) {
    .skill-title {
      font-size: 21px;
      text-align: center;
    }
  }
  @media (max-width: 820px) {
    .skill-title {
      font-size: 21px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    .skill-title {
      font-size: 21px;
      text-align: center;
    }
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    .skill-title {
      font-size: 20px;
      text-align: center;
    }
  }

  @media (max-width: 415px) {
    .skill-title {
      font-size: 19px;
      text-align: center;
    }
  }

  @media (max-width: 412px) {
    .skill-title {
      font-size: 18px;
      text-align: center;
    }
  }

  @media (max-width: 395px) {
    .skill-title {
      font-size: 17px;
      text-align: center;
    }
  }

  @media (max-width: 391px) {
    .skill-title {
      font-size: 16px;
      text-align: center;
    }
  }

  @media (max-width: 376px) {
    .skill-title {
      font-size: 15px;
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    .skill-title {
      font-size: 14px;
      text-align: center;
    }
  }

  @media (max-width: 320px) {
    .skill-title {
      font-size: 13px;
      text-align: center;
    }
  }
`,pO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    position: relative;
    margin-top: 1rem;
  }
  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    position: relative;
    margin-top: 1rem;
    width: 100%;
  }
  @media (max-width: 820px) {
    position: relative;
    margin-top: 1rem;
    width: 100%;
  }
  @media (max-width: 768px) {
    position: relative;
    margin-top: 1rem;
    width: 100%;
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: relative;
    margin-top: 1rem;
  }
  @media (max-width: 415px) {
    position: relative;
    margin-top: 1rem;
  }
  @media (max-width: 412px) {
    position: relative;
    margin-top: 1rem;
  }
  @media (max-width: 395px) {
    position: relative;
    margin-top: 1rem;
  }
  @media (max-width: 391px) {
    position: relative;
    margin-top: 1rem;
  }
  @media (max-width: 376px) {
    position: relative;
    margin-top: 1rem;
  }

  @media (max-width: 360px) {
    position: relative;
    margin-top: 1rem;
  }
  @media (max-width: 320px) {
    position: relative;
    margin-top: 1rem;
  }
`,fO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    margin: 2rem 0;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }
  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }
  @media (max-width: 415px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }
  @media (max-width: 412px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }
  @media (max-width: 395px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }
  @media (max-width: 391px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }

  @media (max-width: 376px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }

  @media (max-width: 360px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }
`,mO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    flex: 1;
    text-align: left;
    padding: 1rem;
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 24rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }

  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    width: 360px;
    h4 {
      /* border-bottom: none;
      border-right: none;
      border-left: none;
      border-top: none; */
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 300px;
      /* text-align: center; */
    }
  }
  @media (max-width: 835px) {
    flex: 1;
    text-align: left;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 28rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 20px;
    }
  }
  @media (max-width: 820px) {
    flex: 1;
    text-align: left;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 28rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 20px;
    }
  }
  @media (max-width: 800px) {
    flex: 1;
    text-align: left;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 27rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 20px;
    }
  }
  @media (max-width: 768px) {
    flex: 1;
    text-align: left;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 24.9rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      /* font-size: 20px; */
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    flex: 1;
    text-align: left;
    padding: 1rem;
    width: 99%;
    /* margin-left: 10rem; */
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 20px;
    }
  }

  @media (max-width: 415px) {
    flex: 1;
    text-align: left;
    padding: 1rem;
    width: 99%;
    /* margin-left: 10rem; */
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 19px;
    }
  }
  @media (max-width: 412px) {
    flex: 1;
    text-align: left;
    padding: 1rem;
    width: 99%;
    /* margin-left: 10rem; */
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 18px;
    }
  }

  @media (max-width: 395px) {
    flex: 1;
    text-align: left;
    padding: 1rem;
    width: 99%;
    /* margin-left: 10rem; */
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 17px;
    }
  }

  @media (max-width: 391px) {
    flex: 1;
    text-align: left;
    padding: 1rem;
    width: 99%;
    /* margin-left: 10rem; */
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 16px;
    }
  }

  @media (max-width: 376px) {
    flex: 1;
    text-align: left;
    padding: 1rem;
    width: 99%;
    /* margin-left: 10rem; */
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 15px;
    }
  }

  @media (max-width: 360px) {
    flex: 1;
    text-align: left;
    padding: 1rem;
    width: 99%;
    /* margin-left: 10rem; */
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 14px;
    }
  }

  @media (max-width: 320px) {
    flex: 1;
    text-align: left;
    padding: 1rem;
    width: 99%;
    /* margin-left: 10rem; */
    border-left: white 1px solid;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 12px;
    }
  }
`,Bn=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
  }

  @media (max-width: 835px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 21px;
    }
  }
  @media (max-width: 820px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 20px;
    }
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 415px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 17px;
    }
  }
  @media (max-width: 412px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 395px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 15px;
    }
  }

  @media (max-width: 391px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 376px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 360px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 10px;
    }
  }
`,Aa=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
  }
  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 21px;
    }
  }
  @media (max-width: 820px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 20px;
    }
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 415px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 17px;
    }
  }

  @media (max-width: 412px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 395px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 15px;
    }
  }

  @media (max-width: 391px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 376px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 360px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 10px;
    }
  }
`,Qt=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    width: 7px;
    height: 7px;
    background-color: white;
    border-radius: 10px;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 7px;
    height: 7px;
    background-color: white;
    border-radius: 13px;
  }
  @media (max-width: 415px) {
    width: 7px;
    height: 7px;
    background-color: white;
    border-radius: 12.5px;
  }
  @media (max-width: 412px) {
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 12px;
  }
  @media (max-width: 395px) {
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 11.5px;
  }

  @media (max-width: 391px) {
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 11.5px;
  }

  @media (max-width: 376px) {
    width: 4px;
    height: 4px;
    background-color: white;
    border-radius: 11px;
  }

  @media (max-width: 360px) {
    width: 3.5px;
    height: 3.5px;
    background-color: white;
    border-radius: 10.5px;
  }

  @media (max-width: 320px) {
    width: 3px;
    height: 3px;
    background-color: white;
    border-radius: 10px;
  }
`,hO=U.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 19.78rem;
    padding: 1rem;
    border-right: white 1px solid;
    border-top: white 1px solid;
    /* border-left: white 1px solid; */
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 24rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }

  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    width: 1px;
    h4{
      width: 194px;
    }
  }
  @media (max-width: 835px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 20.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-left: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 28rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      /* padding-right: 10rem; */
    }
  }
  @media (max-width: 820px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 20.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-left: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 28rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      /* padding-right: 10rem; */
    }
  }
  @media (max-width: 800px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 20.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-left: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 27rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      /* padding-right: 10rem; */
    }
  }
  @media (max-width: 768px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 20.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-right: white 1px solid;
    border-top: white 1px solid;
    border-left: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 24.9rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      /* padding-right: 10rem; */
    }
  }

  /* MOBILE RESPONSIVE  */
  @media (max-width: 428px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 21rem;
    padding: 1rem;
    width: 99%;
    border-right: white 1px solid;
    border-left: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 19px;
    }
  }

  @media (max-width: 415px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 21rem;
    padding: 1rem;
    width: 99%;
    border-right: white 1px solid;
    border-left: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 18px;
    }
  }

  @media (max-width: 412px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 21rem;
    padding: 1rem;
    width: 99%;
    border-right: white 1px solid;
    border-left: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 18px;
    }
  }

  @media (max-width: 395px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 21rem;
    padding: 1rem;
    width: 99%;
    border-right: white 1px solid;
    border-left: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 17px;
    }
  }

  @media (max-width: 391px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 21rem;
    padding: 1rem;
    width: 99%;
    border-right: white 1px solid;
    border-left: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 16px;
    }
  }

  @media (max-width: 376px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 21rem;
    padding: 1rem;
    width: 99%;
    border-right: white 1px solid;
    border-left: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 15px;
    }
  }

  @media (max-width: 360px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 21rem;
    padding: 1rem;
    width: 99%;
    border-right: white 1px solid;
    border-left: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 14px;
    }
  }

  @media (max-width: 320px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 21rem;
    padding: 1rem;
    width: 99%;
    border-right: white 1px solid;
    border-left: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 12px;
    }
  }
`,gO=U.div`
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px){
    width: 100%;
  }
  @media (max-width: 835px) {
    width: 100%;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 100%;
  }

  @media (max-width: 415px) {
    width: 100%;
  }
  @media (max-width: 412px) {
    width: 100%;
  }
  @media (max-width: 395px) {
    width: 100%;
  }
  @media (max-width: 391px) {
    width: 100%;
  }

  @media (max-width: 376px) {
    width: 100%;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`,xO=U.div`
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px){
    .minat-title {
      font-size: 22px;
      text-align: center;
    }
  }
  @media (max-width: 835px) {
  }
  @media (max-width: 820px) {
    .minat-title {
      font-size: 21px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    .minat-title {
      font-size: 21px;
      text-align: center;
    }
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    .minat-title {
      font-size: 20px;
      text-align: center;
    }
  }
  @media (max-width: 415px) {
    .minat-title {
      font-size: 19px;
      text-align: center;
    }
  }
  @media (max-width: 412px) {
    .minat-title {
      font-size: 18px;
      text-align: center;
    }
  }
  @media (max-width: 395px) {
    .minat-title {
      font-size: 17px;
      text-align: center;
    }
  }
  @media (max-width: 391px) {
    .minat-title {
      font-size: 16px;
      text-align: center;
    }
  }
  @media (max-width: 376px) {
    .minat-title {
      font-size: 15px;
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    .minat-title {
      font-size: 14px;
      text-align: center;
    }
  }

  @media (max-width: 320px) {
    .minat-title {
      font-size: 13px;
      text-align: center;
    }
  }
`,Rd=U.div`
  @media (max-width: 1920px) {
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }
  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: ${e=>e.active?"#00e0ff":"#fff"};
  }
`;U(G2)`
  @media (max-width: 1920px) {
    width: 40px;
    height: 40px;

    /* membuat icon mengikuti warna active */
    path {
      fill: currentColor;
      stroke: currentColor;
    }
  }

  @media (max-width: 391px) {
    width: 40px;
    height: 40px;

    path {
      fill: currentColor;
      stroke: currentColor;
    }
  }

  @media (max-width: 376px) {
    width: 10px;
    height: 20px;

    path {
      fill: currentColor;
      stroke: currentColor;
    }
  }

  @media (max-width: 360px) {
    width: 15px;
    height: 25px;

    path {
      fill: currentColor;
      stroke: currentColor;
    }
  }

  @media (max-width: 320px) {
    width: 10px;
    height: 20px;

    path {
      fill: currentColor;
      stroke: currentColor;
    }
  }
`;function Xs(e){return Lt({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor"},child:[]}]})(e)}var Jt=function(e,r){return Number(e.toFixed(r))},vO=function(e,r){return r},Ye=function(e,r,i){i&&typeof i=="function"&&i(e,r)},bO=function(e){return-Math.cos(e*Math.PI)/2+.5},yO=function(e){return e},wO=function(e){return e*e},kO=function(e){return e*(2-e)},SO=function(e){return e<.5?2*e*e:-1+(4-2*e)*e},EO=function(e){return e*e*e},RO=function(e){return--e*e*e+1},CO=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},PO=function(e){return e*e*e*e},OO=function(e){return 1- --e*e*e*e},_O=function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},jO=function(e){return e*e*e*e*e},TO=function(e){return 1+--e*e*e*e*e},MO=function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},X2={easeOut:bO,linear:yO,easeInQuad:wO,easeOutQuad:kO,easeInOutQuad:SO,easeInCubic:EO,easeOutCubic:RO,easeInOutCubic:CO,easeInQuart:PO,easeOutQuart:OO,easeInOutQuart:_O,easeInQuint:jO,easeOutQuint:TO,easeInOutQuint:MO},Q2=function(e){typeof e=="number"&&cancelAnimationFrame(e)},sr=function(e){e.mounted&&(Q2(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function Z2(e,r,i,a){if(e.mounted){var l=new Date().getTime(),s=1;sr(e),e.animation=function(){if(!e.mounted)return Q2(e.animation);var u=new Date().getTime()-l,c=u/i,p=X2[r],m=p(c);u>=i?(a(s),e.animation=null):e.animation&&(a(m),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function qO(e){var r=e.scale,i=e.positionX,a=e.positionY;return!(Number.isNaN(r)||Number.isNaN(i)||Number.isNaN(a))}function kn(e,r,i,a){var l=qO(r);if(!(!e.mounted||!l)){var s=e.setTransformState,u=e.transformState,c=u.scale,p=u.positionX,m=u.positionY,x=r.scale-c,g=r.positionX-p,h=r.positionY-m;i===0?s(r.scale,r.positionX,r.positionY):Z2(e,a,i,function(w){var k=c+x*w,S=p+g*w,M=m+h*w;s(k,S,M)})}}function AO(e,r,i){var a=e.offsetWidth,l=e.offsetHeight,s=r.offsetWidth,u=r.offsetHeight,c=s*i,p=u*i,m=a-c,x=l-p;return{wrapperWidth:a,wrapperHeight:l,newContentWidth:c,newDiffWidth:m,newContentHeight:p,newDiffHeight:x}}var LO=function(e,r,i,a,l,s,u){var c=e>r?i*(u?1:.5):0,p=a>l?s*(u?1:.5):0,m=e-r-c,x=c,g=a-l-p,h=p;return{minPositionX:m,maxPositionX:x,minPositionY:g,maxPositionY:h}},sh=function(e,r){var i=e.wrapperComponent,a=e.contentComponent,l=e.setup.centerZoomedOut;if(!i||!a)throw new Error("Components are not mounted");var s=AO(i,a,r),u=s.wrapperWidth,c=s.wrapperHeight,p=s.newContentWidth,m=s.newDiffWidth,x=s.newContentHeight,g=s.newDiffHeight,h=LO(u,p,m,c,x,g,!!l);return h},Im=function(e,r,i,a){return a?e<r?Jt(r,2):e>i?Jt(i,2):Jt(e,2):Jt(e,2)},Wn=function(e,r){var i=sh(e,r);return e.bounds=i,i};function Qs(e,r,i,a,l,s,u){var c=i.minPositionX,p=i.minPositionY,m=i.maxPositionX,x=i.maxPositionY,g=0,h=0;u&&(g=l,h=s);var w=Im(e,c-g,m+g,a),k=Im(r,p-h,x+h,a);return{x:w,y:k}}function Fc(e,r,i,a,l,s){var u=e.transformState,c=u.scale,p=u.positionX,m=u.positionY,x=a-c;if(typeof r!="number"||typeof i!="number")return console.error("Mouse X and Y position were not provided!"),{x:p,y:m};var g=p-r*x,h=m-i*x,w=Qs(g,h,l,s,0,0,null);return w}function Zs(e,r,i,a,l){var s=l?a:0,u=r-s;return!Number.isNaN(i)&&e>=i?i:!Number.isNaN(r)&&e<=u?u:e}var kv=function(e,r){var i=e.setup.panning.excluded,a=e.isInitialized,l=e.wrapperComponent,s=r.target,u="shadowRoot"in s&&"composedPath"in r,c=u?r.composedPath().some(function(x){return x instanceof Element?l==null?void 0:l.contains(x):!1}):l==null?void 0:l.contains(s),p=a&&s&&c;if(!p)return!1;var m=Vc(s,i);return!m},Sv=function(e){var r=e.isInitialized,i=e.isPanning,a=e.setup,l=a.panning.disabled,s=r&&i&&!l;return!!s},NO=function(e,r){var i=e.transformState,a=i.positionX,l=i.positionY;e.isPanning=!0;var s=r.clientX,u=r.clientY;e.startCoords={x:s-a,y:u-l}},zO=function(e,r){var i=r.touches,a=e.transformState,l=a.positionX,s=a.positionY;e.isPanning=!0;var u=i.length===1;if(u){var c=i[0].clientX,p=i[0].clientY;e.startCoords={x:c-l,y:p-s}}};function IO(e){var r=e.transformState,i=r.positionX,a=r.positionY,l=r.scale,s=e.setup,u=s.disabled,c=s.limitToBounds,p=s.centerZoomedOut,m=e.wrapperComponent;if(!(u||!m||!e.bounds)){var x=e.bounds,g=x.maxPositionX,h=x.minPositionX,w=x.maxPositionY,k=x.minPositionY,S=i>g||i<h,M=a>w||a<k,O=i>g?m.offsetWidth:e.setup.minPositionX||0,A=a>w?m.offsetHeight:e.setup.minPositionY||0,z=Fc(e,O,A,l,e.bounds,c||p),B=z.x,j=z.y;return{scale:l,positionX:S?B:i,positionY:M?j:a}}}function J2(e,r,i,a,l){var s=e.setup.limitToBounds,u=e.wrapperComponent,c=e.bounds,p=e.transformState,m=p.scale,x=p.positionX,g=p.positionY;if(!(u===null||c===null||r===x&&i===g)){var h=Qs(r,i,c,s,a,l,u),w=h.x,k=h.y;e.setTransformState(m,w,k)}}var DO=function(e,r,i){var a=e.startCoords,l=e.transformState,s=e.setup.panning,u=s.lockAxisX,c=s.lockAxisY,p=l.positionX,m=l.positionY;if(!a)return{x:p,y:m};var x=r-a.x,g=i-a.y,h=u?p:x,w=c?m:g;return{x:h,y:w}},wn=function(e,r){var i=e.setup,a=e.transformState,l=a.scale,s=i.minScale,u=i.disablePadding;return r>0&&l>=s&&!u?r:0},BO=function(e){var r=e.mounted,i=e.setup,a=i.disabled,l=i.velocityAnimation,s=e.transformState.scale,u=l.disabled,c=!u||s>1||!a||r;return!!c},$O=function(e){var r=e.mounted,i=e.velocity,a=e.bounds,l=e.setup,s=l.disabled,u=l.velocityAnimation,c=e.transformState.scale,p=u.disabled,m=!p||c>1||!s||r;return!(!m||!i||!a)};function FO(e,r){var i=e.setup.velocityAnimation,a=i.equalToMove,l=i.animationTime,s=i.sensitivity;return a?l*r*s:l}function Ev(e,r,i,a,l,s,u,c,p,m){if(l){if(r>u&&i>u){var x=u+(e-u)*m;return x>p?p:x<u?u:x}if(r<s&&i<s){var x=s+(e-s)*m;return x<c?c:x>s?s:x}}return a?r:Im(e,s,u,l)}function VO(e,r){var i=1;return r?Math.min(i,e.offsetWidth/window.innerWidth):i}function HO(e,r){var i=BO(e);if(i){var a=e.lastMousePosition,l=e.velocityTime,s=e.setup,u=e.wrapperComponent,c=s.velocityAnimation.equalToMove,p=Date.now();if(a&&l&&u){var m=VO(u,c),x=r.x-a.x,g=r.y-a.y,h=x/m,w=g/m,k=p-l,S=x*x+g*g,M=Math.sqrt(S)/k;e.velocity={velocityX:h,velocityY:w,total:M}}e.lastMousePosition=r,e.velocityTime=p}}function WO(e){var r=e.velocity,i=e.bounds,a=e.setup,l=e.wrapperComponent,s=$O(e);if(!(!s||!r||!i||!l)){var u=r.velocityX,c=r.velocityY,p=r.total,m=i.maxPositionX,x=i.minPositionX,g=i.maxPositionY,h=i.minPositionY,w=a.limitToBounds,k=a.alignmentAnimation,S=a.zoomAnimation,M=a.panning,O=M.lockAxisY,A=M.lockAxisX,z=S.animationType,B=k.sizeX,j=k.sizeY,C=k.velocityAlignmentTime,P=C,L=FO(e,p),q=Math.max(L,P),b=wn(e,B),W=wn(e,j),Y=b*l.offsetWidth/100,N=W*l.offsetHeight/100,F=m+Y,ie=x-Y,ee=g+N,R=h-N,te=e.transformState,D=new Date().getTime();Z2(e,z,q,function(E){var _=e.transformState,I=_.scale,G=_.positionX,Z=_.positionY,ne=new Date().getTime()-D,re=ne/P,ae=X2[k.animationType],me=1-ae(Math.min(1,re)),V=1-E,oe=G+u*V,fe=Z+c*V,ge=Ev(oe,te.positionX,G,A,w,x,m,ie,F,me),ve=Ev(fe,te.positionY,Z,O,w,h,g,R,ee,me);(G!==oe||Z!==fe)&&e.setTransformState(I,ge,ve)})}}function Rv(e,r){var i=e.transformState.scale;sr(e),Wn(e,i),window.TouchEvent!==void 0&&r instanceof TouchEvent?zO(e,r):NO(e,r)}function uh(e,r){var i=e.transformState.scale,a=e.setup,l=a.minScale,s=a.alignmentAnimation,u=s.disabled,c=s.sizeX,p=s.sizeY,m=s.animationTime,x=s.animationType,g=u||i<l||!c&&!p;if(!g){var h=IO(e);h&&kn(e,h,r??m,x)}}function Cv(e,r,i){var a=e.startCoords,l=e.setup,s=l.alignmentAnimation,u=s.sizeX,c=s.sizeY;if(a){var p=DO(e,r,i),m=p.x,x=p.y,g=wn(e,u),h=wn(e,c);HO(e,{x:m,y:x}),J2(e,m,x,g,h)}}function UO(e){if(e.isPanning){var r=e.setup.panning.velocityDisabled,i=e.velocity,a=e.wrapperComponent,l=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var s=a==null?void 0:a.getBoundingClientRect(),u=l==null?void 0:l.getBoundingClientRect(),c=(s==null?void 0:s.width)||0,p=(s==null?void 0:s.height)||0,m=(u==null?void 0:u.width)||0,x=(u==null?void 0:u.height)||0,g=c<m||p<x,h=!r&&i&&(i==null?void 0:i.total)>.1&&g;h?WO(e):uh(e)}}function dh(e,r,i,a){var l=e.setup,s=l.minScale,u=l.maxScale,c=l.limitToBounds,p=Zs(Jt(r,2),s,u,0,!1),m=Wn(e,p),x=Fc(e,i,a,p,m,c),g=x.x,h=x.y;return{scale:p,positionX:g,positionY:h}}function e5(e,r,i){var a=e.transformState.scale,l=e.wrapperComponent,s=e.setup,u=s.minScale,c=s.limitToBounds,p=s.zoomAnimation,m=p.disabled,x=p.animationTime,g=p.animationType,h=m||a>=u;if((a>=1||c)&&uh(e),!(h||!l||!e.mounted)){var w=r||l.offsetWidth/2,k=i||l.offsetHeight/2,S=dh(e,u,w,k);S&&kn(e,S,x,g)}}var bn=function(){return bn=Object.assign||function(r){for(var i,a=1,l=arguments.length;a<l;a++){i=arguments[a];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},bn.apply(this,arguments)};function Pv(e,r,i){for(var a=0,l=r.length,s;a<l;a++)(s||!(a in r))&&(s||(s=Array.prototype.slice.call(r,0,a)),s[a]=r[a]);return e.concat(s||Array.prototype.slice.call(r))}var Cd={scale:1,positionX:0,positionY:0},La={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},Dm={wrapperClass:"react-transform-wrapper",contentClass:"react-transform-component"},t5=function(e){var r,i,a,l;return{previousScale:(r=e.initialScale)!==null&&r!==void 0?r:Cd.scale,scale:(i=e.initialScale)!==null&&i!==void 0?i:Cd.scale,positionX:(a=e.initialPositionX)!==null&&a!==void 0?a:Cd.positionX,positionY:(l=e.initialPositionY)!==null&&l!==void 0?l:Cd.positionY}},Ov=function(e){var r=bn({},La);return Object.keys(e).forEach(function(i){var a=typeof e[i]<"u",l=typeof La[i]<"u";if(l&&a){var s=Object.prototype.toString.call(La[i]),u=s==="[object Object]",c=s==="[object Array]";u?r[i]=bn(bn({},La[i]),e[i]):c?r[i]=Pv(Pv([],La[i],!0),e[i]):r[i]=e[i]}}),r},r5=function(e,r,i){var a=e.transformState.scale,l=e.wrapperComponent,s=e.setup,u=s.maxScale,c=s.minScale,p=s.zoomAnimation,m=s.smooth,x=p.size;if(!l)throw new Error("Wrapper is not mounted");var g=m?a*Math.exp(r*i):a+r*i,h=Zs(Jt(g,3),c,u,x,!1);return h};function n5(e,r,i,a,l){var s=e.wrapperComponent,u=e.transformState,c=u.scale,p=u.positionX,m=u.positionY;if(!s)return console.error("No WrapperComponent found");var x=s.offsetWidth,g=s.offsetHeight,h=(x/2-p)/c,w=(g/2-m)/c,k=r5(e,r,i),S=dh(e,k,h,w);if(!S)return console.error("Error during zoom event. New transformation state was not calculated.");kn(e,S,a,l)}function i5(e,r,i,a){var l=e.setup,s=e.wrapperComponent,u=l.limitToBounds,c=t5(e.props),p=e.transformState,m=p.scale,x=p.positionX,g=p.positionY;if(s){var h=sh(e,c.scale),w=Qs(c.positionX,c.positionY,h,u,0,0,s),k={scale:c.scale,positionX:w.x,positionY:w.y};m===c.scale&&x===c.positionX&&g===c.positionY||(a==null||a(),kn(e,k,r,i))}}function KO(e,r,i,a){var l=e.getBoundingClientRect(),s=r.getBoundingClientRect(),u=i.getBoundingClientRect(),c=s.x*a.scale,p=s.y*a.scale;return{x:(l.x-u.x+c)/a.scale,y:(l.y-u.y+p)/a.scale}}function YO(e,r,i){var a=e.wrapperComponent,l=e.contentComponent,s=e.transformState,u=e.setup,c=u.limitToBounds,p=u.minScale,m=u.maxScale;if(!a||!l)return s;var x=a.getBoundingClientRect(),g=r.getBoundingClientRect(),h=KO(r,a,l,s),w=h.x,k=h.y,S=g.width/s.scale,M=g.height/s.scale,O=a.offsetWidth/S,A=a.offsetHeight/M,z=Zs(i||Math.min(O,A),p,m,0,!1),B=(x.width-S*z)/2,j=(x.height-M*z)/2,C=(x.left-w)*z+B,P=(x.top-k)*z+j,L=sh(e,z),q=Qs(C,P,L,c,0,0,a),b=q.x,W=q.y;return{positionX:b,positionY:W,scale:z}}var GO=function(e){return function(r,i,a){r===void 0&&(r=.5),i===void 0&&(i=300),a===void 0&&(a="easeOut"),n5(e,1,r,i,a)}},XO=function(e){return function(r,i,a){r===void 0&&(r=.5),i===void 0&&(i=300),a===void 0&&(a="easeOut"),n5(e,-1,r,i,a)}},QO=function(e){return function(r,i,a,l,s){l===void 0&&(l=300),s===void 0&&(s="easeOut");var u=e.transformState,c=u.positionX,p=u.positionY,m=u.scale,x=e.wrapperComponent,g=e.contentComponent,h=e.setup.disabled;if(!(h||!x||!g)){var w={positionX:Number.isNaN(r)?c:r,positionY:Number.isNaN(i)?p:i,scale:Number.isNaN(a)?m:a};kn(e,w,l,s)}}},ZO=function(e){return function(r,i){r===void 0&&(r=200),i===void 0&&(i="easeOut"),i5(e,r,i)}},JO=function(e){return function(r,i,a){i===void 0&&(i=200),a===void 0&&(a="easeOut");var l=e.transformState,s=e.wrapperComponent,u=e.contentComponent;if(s&&u){var c=a5(r||l.scale,s,u);kn(e,c,i,a)}}},e_=function(e){return function(r,i,a,l){a===void 0&&(a=600),l===void 0&&(l="easeOut"),sr(e);var s=e.wrapperComponent,u=typeof r=="string"?document.getElementById(r):r;if(s&&u&&s.contains(u)){var c=YO(e,u,i);kn(e,c,a,l)}}},Bm=function(e){return{instance:e,zoomIn:GO(e),zoomOut:XO(e),setTransform:QO(e),resetTransform:ZO(e),centerView:JO(e),zoomToElement:e_(e)}},t_=function(e){return{instance:e,state:e.transformState}},Be=function(e){var r={};return Object.assign(r,t_(e)),Object.assign(r,Bm(e)),r},fm=!1;function mm(){try{var e={get passive(){return fm=!0,!1}};return e}catch{return fm=!1,fm}}var Pd=".".concat(Dm.wrapperClass),Vc=function(e,r){return r.some(function(i){return e.matches("".concat(Pd," ").concat(i,", ").concat(Pd," .").concat(i,", ").concat(Pd," ").concat(i," *, ").concat(Pd," .").concat(i," *"))})},$m=function(e){e&&clearTimeout(e)},r_=function(e,r,i){return"translate(".concat(e,"px, ").concat(r,"px) scale(").concat(i,")")},a5=function(e,r,i){var a=i.offsetWidth*e,l=i.offsetHeight*e,s=(r.offsetWidth-a)/2,u=(r.offsetHeight-l)/2;return{scale:e,positionX:s,positionY:u}};function n_(e){return function(r){e.forEach(function(i){typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var i_=function(e,r){var i=e.setup.wheel,a=i.disabled,l=i.wheelDisabled,s=i.touchPadDisabled,u=i.excluded,c=e.isInitialized,p=e.isPanning,m=r.target,x=c&&!p&&!a&&m;if(!x||l&&!r.ctrlKey||s&&r.ctrlKey)return!1;var g=Vc(m,u);return!g},a_=function(e){return e?e.deltaY<0?1:-1:0};function o_(e,r){var i=a_(e),a=vO(r,i);return a}function o5(e,r,i){var a=r.getBoundingClientRect(),l=0,s=0;if("clientX"in e)l=(e.clientX-a.left)/i,s=(e.clientY-a.top)/i;else{var u=e.touches[0];l=(u.clientX-a.left)/i,s=(u.clientY-a.top)/i}return(Number.isNaN(l)||Number.isNaN(s))&&console.error("No mouse or touch offset found"),{x:l,y:s}}var l_=function(e,r,i,a,l){var s=e.transformState.scale,u=e.wrapperComponent,c=e.setup,p=c.maxScale,m=c.minScale,x=c.zoomAnimation,g=c.disablePadding,h=x.size,w=x.disabled;if(!u)throw new Error("Wrapper is not mounted");var k=s+r*i,S=a?!1:!w,M=Zs(Jt(k,3),m,p,h,S&&!g);return M},s_=function(e,r){var i=e.previousWheelEvent,a=e.transformState.scale,l=e.setup,s=l.maxScale,u=l.minScale;return i?a<s||a>u||Math.sign(i.deltaY)!==Math.sign(r.deltaY)||i.deltaY>0&&i.deltaY<r.deltaY||i.deltaY<0&&i.deltaY>r.deltaY||Math.sign(i.deltaY)!==Math.sign(r.deltaY):!1},u_=function(e,r){var i=e.setup.pinch,a=i.disabled,l=i.excluded,s=e.isInitialized,u=r.target,c=s&&!a&&u;if(!c)return!1;var p=Vc(u,l);return!p},d_=function(e){var r=e.setup.pinch.disabled,i=e.isInitialized,a=e.pinchStartDistance,l=i&&!r&&a;return!!l},c_=function(e,r,i){var a=i.getBoundingClientRect(),l=e.touches,s=Jt(l[0].clientX-a.left,5),u=Jt(l[0].clientY-a.top,5),c=Jt(l[1].clientX-a.left,5),p=Jt(l[1].clientY-a.top,5);return{x:(s+c)/2/r,y:(u+p)/2/r}},l5=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},p_=function(e,r){var i=e.pinchStartScale,a=e.pinchStartDistance,l=e.setup,s=l.maxScale,u=l.minScale,c=l.zoomAnimation,p=l.disablePadding,m=c.size,x=c.disabled;if(!i||a===null||!r)throw new Error("Pinch touches distance was not provided");if(r<0)return e.transformState.scale;var g=r/a,h=g*i;return Zs(Jt(h,2),u,s,m,!x&&!p)},f_=160,m_=100,h_=function(e,r){var i=e.props,a=i.onWheelStart,l=i.onZoomStart;e.wheelStopEventTimer||(sr(e),Ye(Be(e),r,a),Ye(Be(e),r,l))},g_=function(e,r){var i=e.props,a=i.onWheel,l=i.onZoom,s=e.contentComponent,u=e.setup,c=e.transformState,p=c.scale,m=u.limitToBounds,x=u.centerZoomedOut,g=u.zoomAnimation,h=u.wheel,w=u.disablePadding,k=u.smooth,S=g.size,M=g.disabled,O=h.step,A=h.smoothStep;if(!s)throw new Error("Component not mounted");r.preventDefault(),r.stopPropagation();var z=o_(r,null),B=k?A*Math.abs(r.deltaY):O,j=l_(e,z,B,!r.ctrlKey);if(p!==j){var C=Wn(e,j),P=o5(r,s,p),L=M||S===0||x||w,q=m&&L,b=Fc(e,P.x,P.y,j,C,q),W=b.x,Y=b.y;e.previousWheelEvent=r,e.setTransformState(j,W,Y),Ye(Be(e),r,a),Ye(Be(e),r,l)}},x_=function(e,r){var i=e.props,a=i.onWheelStop,l=i.onZoomStop;$m(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout(function(){e.mounted&&(e5(e,r.x,r.y),e.wheelAnimationTimer=null)},m_);var s=s_(e,r);s&&($m(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout(function(){e.mounted&&(e.wheelStopEventTimer=null,Ye(Be(e),r,a),Ye(Be(e),r,l))},f_))},s5=function(e){for(var r=0,i=0,a=0;a<2;a+=1)r+=e.touches[a].clientX,i+=e.touches[a].clientY;var l=r/2,s=i/2;return{x:l,y:s}},v_=function(e,r){var i=l5(r);e.pinchStartDistance=i,e.lastDistance=i,e.pinchStartScale=e.transformState.scale,e.isPanning=!1;var a=s5(r);e.pinchLastCenterX=a.x,e.pinchLastCenterY=a.y,sr(e)},b_=function(e,r){var i=e.contentComponent,a=e.pinchStartDistance,l=e.wrapperComponent,s=e.transformState.scale,u=e.setup,c=u.limitToBounds,p=u.centerZoomedOut,m=u.zoomAnimation,x=u.alignmentAnimation,g=m.disabled,h=m.size;if(!(a===null||!i)){var w=c_(r,s,i);if(!(!Number.isFinite(w.x)||!Number.isFinite(w.y))){var k=l5(r),S=p_(e,k),M=s5(r),O=M.x-(e.pinchLastCenterX||0),A=M.y-(e.pinchLastCenterY||0);if(!(S===s&&O===0&&A===0)){e.pinchLastCenterX=M.x,e.pinchLastCenterY=M.y;var z=Wn(e,S),B=g||h===0||p,j=c&&B,C=Fc(e,w.x,w.y,S,z,j),P=C.x,L=C.y;e.pinchMidpoint=w,e.lastDistance=k;var q=x.sizeX,b=x.sizeY,W=wn(e,q),Y=wn(e,b),N=P+O,F=L+A,ie=Qs(N,F,z,c,W,Y,l),ee=ie.x,R=ie.y;e.setTransformState(S,ee,R)}}}},y_=function(e){var r=e.pinchMidpoint;e.velocity=null,e.lastDistance=null,e.pinchMidpoint=null,e.pinchStartScale=null,e.pinchStartDistance=null,e5(e,r==null?void 0:r.x,r==null?void 0:r.y)},u5=function(e,r){var i=e.props.onZoomStop,a=e.setup.doubleClick.animationTime;$m(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout(function(){e.doubleClickStopEventTimer=null,Ye(Be(e),r,i)},a)},w_=function(e,r){var i=e.props,a=i.onZoomStart,l=i.onZoom,s=e.setup.doubleClick,u=s.animationTime,c=s.animationType;Ye(Be(e),r,a),i5(e,u,c,function(){return Ye(Be(e),r,l)}),u5(e,r)};function k_(e,r){return e==="toggle"?r===1?1:-1:e==="zoomOut"?-1:1}function S_(e,r){var i=e.setup,a=e.doubleClickStopEventTimer,l=e.transformState,s=e.contentComponent,u=l.scale,c=e.props,p=c.onZoomStart,m=c.onZoom,x=i.doubleClick,g=x.disabled,h=x.mode,w=x.step,k=x.animationTime,S=x.animationType;if(!g&&!a){if(h==="reset")return w_(e,r);if(!s)return console.error("No ContentComponent found");var M=k_(h,e.transformState.scale),O=r5(e,M,w);if(u!==O){Ye(Be(e),r,p);var A=o5(r,s,u),z=dh(e,O,A.x,A.y);if(!z)return console.error("Error during zoom event. New transformation state was not calculated.");Ye(Be(e),r,m),kn(e,z,k,S),u5(e,r)}}}var E_=function(e,r){var i=e.isInitialized,a=e.setup,l=e.wrapperComponent,s=a.doubleClick,u=s.disabled,c=s.excluded,p=r.target,m=l==null?void 0:l.contains(p),x=i&&p&&m&&!u;if(!x)return!1;var g=Vc(p,c);return!g},R_=(function(){function e(r){var i=this;this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){i.initializeWindowEvents()},this.unmount=function(){i.cleanupWindowEvents()},this.update=function(a){i.props=a,Wn(i,i.transformState.scale),i.setup=Ov(a)},this.initializeWindowEvents=function(){var a,l,s=mm(),u=(a=i.wrapperComponent)===null||a===void 0?void 0:a.ownerDocument,c=u==null?void 0:u.defaultView;(l=i.wrapperComponent)===null||l===void 0||l.addEventListener("wheel",i.onWheelPanning,s),c==null||c.addEventListener("mousedown",i.onPanningStart,s),c==null||c.addEventListener("mousemove",i.onPanning,s),c==null||c.addEventListener("mouseup",i.onPanningStop,s),u==null||u.addEventListener("mouseleave",i.clearPanning,s),c==null||c.addEventListener("keyup",i.setKeyUnPressed,s),c==null||c.addEventListener("keydown",i.setKeyPressed,s)},this.cleanupWindowEvents=function(){var a,l,s=mm(),u=(a=i.wrapperComponent)===null||a===void 0?void 0:a.ownerDocument,c=u==null?void 0:u.defaultView;c==null||c.removeEventListener("mousedown",i.onPanningStart,s),c==null||c.removeEventListener("mousemove",i.onPanning,s),c==null||c.removeEventListener("mouseup",i.onPanningStop,s),u==null||u.removeEventListener("mouseleave",i.clearPanning,s),c==null||c.removeEventListener("keyup",i.setKeyUnPressed,s),c==null||c.removeEventListener("keydown",i.setKeyPressed,s),document.removeEventListener("mouseleave",i.clearPanning,s),sr(i),(l=i.observer)===null||l===void 0||l.disconnect()},this.handleInitializeWrapperEvents=function(a){var l=mm();a.addEventListener("wheel",i.onWheelZoom,l),a.addEventListener("dblclick",i.onDoubleClick,l),a.addEventListener("touchstart",i.onTouchPanningStart,l),a.addEventListener("touchmove",i.onTouchPanning,l),a.addEventListener("touchend",i.onTouchPanningStop,l)},this.handleInitialize=function(a,l){var s=!1,u=i.setup.centerOnInit,c=function(p,m){for(var x=0,g=p;x<g.length;x++){var h=g[x];if(h.target===m)return!0}return!1};i.applyTransformation(),i.onInitCallbacks.forEach(function(p){p(Be(i))}),i.observer=new ResizeObserver(function(p){if(c(p,a)||c(p,l))if(u&&!s){var m=l.offsetWidth,x=l.offsetHeight;(m>0||x>0)&&(s=!0,i.setCenter())}else sr(i),Wn(i,i.transformState.scale),uh(i,0)}),i.observer.observe(a),i.observer.observe(l)},this.onWheelZoom=function(a){var l=i.setup.disabled;if(!l){var s=i_(i,a);if(s){var u=i.isPressingKeys(i.setup.wheel.activationKeys);u&&(h_(i,a),g_(i,a),x_(i,a))}}},this.onWheelPanning=function(a){var l=i.setup,s=l.disabled,u=l.wheel,c=l.panning;if(!(!i.wrapperComponent||!i.contentComponent||s||!u.wheelDisabled||c.disabled||!c.wheelPanning||a.ctrlKey)){a.preventDefault(),a.stopPropagation();var p=i.transformState,m=p.positionX,x=p.positionY,g=m-a.deltaX,h=x-a.deltaY,w=c.lockAxisX?m:g,k=c.lockAxisY?x:h,S=i.setup.alignmentAnimation,M=S.sizeX,O=S.sizeY,A=wn(i,M),z=wn(i,O);w===m&&k===x||J2(i,w,k,A,z)}},this.onPanningStart=function(a){var l=i.setup.disabled,s=i.props.onPanningStart;if(!l){var u=kv(i,a);if(u){var c=i.isPressingKeys(i.setup.panning.activationKeys);c&&(a.button===0&&!i.setup.panning.allowLeftClickPan||a.button===1&&!i.setup.panning.allowMiddleClickPan||a.button===2&&!i.setup.panning.allowRightClickPan||(a.preventDefault(),a.stopPropagation(),sr(i),Rv(i,a),Ye(Be(i),a,s)))}}},this.onPanning=function(a){var l=i.setup.disabled,s=i.props.onPanning;if(!l){var u=Sv(i);if(u){var c=i.isPressingKeys(i.setup.panning.activationKeys);c&&(a.preventDefault(),a.stopPropagation(),Cv(i,a.clientX,a.clientY),Ye(Be(i),a,s))}}},this.onPanningStop=function(a){var l=i.props.onPanningStop;i.isPanning&&(UO(i),Ye(Be(i),a,l))},this.onPinchStart=function(a){var l=i.setup.disabled,s=i.props,u=s.onPinchingStart,c=s.onZoomStart;if(!l){var p=u_(i,a);p&&(v_(i,a),sr(i),Ye(Be(i),a,u),Ye(Be(i),a,c))}},this.onPinch=function(a){var l=i.setup.disabled,s=i.props,u=s.onPinching,c=s.onZoom;if(!l){var p=d_(i);p&&(a.preventDefault(),a.stopPropagation(),b_(i,a),Ye(Be(i),a,u),Ye(Be(i),a,c))}},this.onPinchStop=function(a){var l=i.props,s=l.onPinchingStop,u=l.onZoomStop;i.pinchStartScale&&(y_(i),Ye(Be(i),a,s),Ye(Be(i),a,u))},this.onTouchPanningStart=function(a){var l=i.setup.disabled,s=i.props.onPanningStart;if(!l){var u=kv(i,a);if(u){var c=i.lastTouch&&+new Date-i.lastTouch<200&&a.touches.length===1;if(!c){i.lastTouch=+new Date,sr(i);var p=a.touches,m=p.length===1,x=p.length===2;m&&(sr(i),Rv(i,a),Ye(Be(i),a,s)),x&&i.onPinchStart(a)}}}},this.onTouchPanning=function(a){var l=i.setup.disabled,s=i.props.onPanning;if(i.isPanning&&a.touches.length===1){if(l)return;var u=Sv(i);if(!u)return;a.preventDefault(),a.stopPropagation();var c=a.touches[0];Cv(i,c.clientX,c.clientY),Ye(Be(i),a,s)}else a.touches.length>1&&i.onPinch(a)},this.onTouchPanningStop=function(a){i.onPanningStop(a),i.onPinchStop(a)},this.onDoubleClick=function(a){var l=i.setup.disabled;if(!l){var s=E_(i,a);s&&S_(i,a)}},this.clearPanning=function(a){i.isPanning&&i.onPanningStop(a)},this.setKeyPressed=function(a){i.pressedKeys[a.key]=!0},this.setKeyUnPressed=function(a){i.pressedKeys[a.key]=!1},this.isPressingKeys=function(a){return a.length?!!a.find(function(l){return i.pressedKeys[l]}):!0},this.setTransformState=function(a,l,s){var u=i.props.onTransformed;if(!Number.isNaN(a)&&!Number.isNaN(l)&&!Number.isNaN(s)){a!==i.transformState.scale&&(i.transformState.previousScale=i.transformState.scale,i.transformState.scale=a),i.transformState.positionX=l,i.transformState.positionY=s,i.applyTransformation();var c=Be(i);i.onChangeCallbacks.forEach(function(p){return p(c)}),Ye(c,{scale:a,positionX:l,positionY:s},u)}else console.error("Detected NaN set state values")},this.setCenter=function(){if(i.wrapperComponent&&i.contentComponent){var a=a5(i.transformState.scale,i.wrapperComponent,i.contentComponent);i.setTransformState(a.scale,a.positionX,a.positionY)}},this.handleTransformStyles=function(a,l,s){return i.props.customTransform?i.props.customTransform(a,l,s):r_(a,l,s)},this.applyTransformation=function(){if(!(!i.mounted||!i.contentComponent)){var a=i.transformState,l=a.scale,s=a.positionX,u=a.positionY,c=i.handleTransformStyles(s,u,l);i.contentComponent.style.transform=c}},this.getContext=function(){return Be(i)},this.onChange=function(a){return i.onChangeCallbacks.has(a)||i.onChangeCallbacks.add(a),function(){i.onChangeCallbacks.delete(a)}},this.onInit=function(a){return i.onInitCallbacks.has(a)||i.onInitCallbacks.add(a),function(){i.onInitCallbacks.delete(a)}},this.init=function(a,l){i.cleanupWindowEvents(),i.wrapperComponent=a,i.contentComponent=l,Wn(i,i.transformState.scale),i.handleInitializeWrapperEvents(a),i.handleInitialize(a,l),i.initializeWindowEvents(),i.isInitialized=!0;var s=Be(i);Ye(s,void 0,i.props.onInit)},this.props=r,this.setup=Ov(this.props),this.transformState=t5(this.props)}return e})(),ch=it.createContext(null),C_=function(e,r){return typeof e=="function"?e(r):e},ph=it.forwardRef(function(e,r){var i=de.useRef(new R_(e)).current,a=C_(e.children,Bm(i));return de.useImperativeHandle(r,function(){return Bm(i)},[i]),de.useEffect(function(){i.update(e)},[i,e]),it.createElement(ch.Provider,{value:i},a)});it.forwardRef(function(e,r){var i=de.useRef(null),a=de.useContext(ch);return de.useEffect(function(){return a.onChange(function(l){if(i.current){var s=0,u=0;i.current.style.transform=a.handleTransformStyles(s,u,1/l.instance.transformState.scale)}})},[a]),it.createElement("div",bn({},e,{ref:n_([i,r])}))});function P_(e,r){r===void 0&&(r={});var i=r.insertAt;if(!(typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",i==="top"&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var O_=`.transform-component-module_wrapper__SPB86 {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
  transform: translate3d(0, 0, 0);
}
.transform-component-module_content__FBWxo {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}
.transform-component-module_content__FBWxo img {
  pointer-events: none;
}
`,_v={wrapper:"transform-component-module_wrapper__SPB86",content:"transform-component-module_content__FBWxo"};P_(O_);var fh=function(e){var r=e.children,i=e.wrapperClass,a=i===void 0?"":i,l=e.contentClass,s=l===void 0?"":l,u=e.wrapperStyle,c=e.contentStyle,p=e.wrapperProps,m=p===void 0?{}:p,x=e.contentProps,g=x===void 0?{}:x,h=de.useContext(ch),w=h.init,k=h.cleanupWindowEvents,S=de.useRef(null),M=de.useRef(null);return de.useEffect(function(){var O=S.current,A=M.current;return O!==null&&A!==null&&w&&(w==null||w(O,A)),function(){k==null||k()}},[]),it.createElement("div",bn({},m,{ref:S,className:"".concat(Dm.wrapperClass," ").concat(_v.wrapper," ").concat(a),style:u}),it.createElement("div",bn({},g,{ref:M,className:"".concat(Dm.contentClass," ").concat(_v.content," ").concat(s),style:c}),r))};const __=({setOpenDetail:e,detail:r,t:i})=>{const a=()=>{e(!1)};return y.jsx(j_,{children:y.jsxs(T_,{children:[y.jsx(q_,{onClick:a,children:y.jsx(Xs,{color:"white"})}),y.jsx(A_,{children:y.jsx("h1",{style:{color:"white",textAlign:"center"},children:i("detail menu.title")})}),y.jsxs(M_,{children:[y.jsxs("div",{className:"sidebar",children:[y.jsx("div",{children:y.jsx("h4",{children:i("detail menu.perusahaan")})}),y.jsx("div",{children:y.jsx("h4",{children:i("detail menu.posisi")})}),y.jsx("div",{children:y.jsx("h4",{children:i("detail menu.lama bekerja")})}),y.jsx("div",{children:y.jsx("h4",{children:i("detail menu.deskripsi")})})]}),y.jsxs("div",{className:"isi",children:[y.jsxs("div",{children:[y.jsx("h4",{children:i("detail menu.perusahaan")}),y.jsx("p",{children:r.perusahaan})]}),y.jsxs("div",{children:[y.jsx("h4",{children:i("detail menu.posisi")}),y.jsx("p",{children:r.posisi})]}),y.jsxs("div",{children:[y.jsx("h4",{children:i("detail menu.lama bekerja")}),y.jsx("p",{children:r.durasi})]}),y.jsxs("div",{style:{whiteSpace:"pre-wrap"},children:[y.jsx("h4",{children:i("detail menu.deskripsi")}),y.jsx("p",{children:r.description})]})]})]}),y.jsx(L_,{children:y.jsx(ph,{children:y.jsx(fh,{children:y.jsx("img",{src:r.img,alt:""})})})})]})})},j_=U.div`
  @media (max-width: 1920px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  @media (max-width: 428px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  @media (max-width: 412px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  @media (max-width: 395px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  @media (max-width: 391px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  @media (max-width: 376px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  @media (max-width: 360px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  @media (max-width: 320px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
`,T_=U.div`
  @media (max-width: 1920px) {
    width: 90%;
    max-width: 850px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }


  @media (max-width: 428px) {
    width: 90%;
    max-width: 865px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }

  @media (max-width: 412px) {
    width: 90%;
    max-width: 865px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }

  @media (max-width: 395px) {
    width: 90%;
    max-width: 865px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }
  @media (max-width: 391px) {
    width: 90%;
    max-width: 865px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }
  @media (max-width: 376px) {
    width: 90%;
    max-width: 860px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }
  @media (max-width: 360px) {
    width: 90%;
    max-width: 855px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }
  @media (max-width: 320px) {
    width: 90%;
    max-width: 850px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }
`,M_=U.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar,
    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
    }
  }


  @media (max-width: 428px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 16px;
    }
  }

  @media (max-width: 412px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 15px;
    }
  }

  @media (max-width: 395px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 14px;
    }
  }

  @media (max-width: 391px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 13px;
    }
  }
  @media (max-width: 376px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 12px;
    }
  }
  @media (max-width: 360px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 11px;
    }
  }
  @media (max-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 10px;
    }
  }
`,q_=U.div`
  @media (max-width: 1920px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }

  @media (max-width: 428px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }

  @media (max-width: 412px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }

  @media (max-width: 395px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 391px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
  @media (max-width: 376px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
  @media (max-width: 360px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
`,A_=U.div`
  @media (max-width: 1920px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 428px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 412px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 395px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 391px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 376px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 360px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 320px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
`,L_=U.div`
  @media (max-width: 1920px) {
    display: flex;
    justify-content: center;
    img {
      width: 750px;
    }
  }
  @media (max-width: 428px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 350px;
    }
  }
  @media (max-width: 412px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 350px;
    }
  }
  @media (max-width: 395px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 350px;
    }
  }
  @media (max-width: 391px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 350px;
    }
  }
  @media (max-width: 376px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 290px;
    }
  }
  @media (max-width: 360px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 200px;
    }
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 150px;
    }
  }
`,N_="/assets/catering-hfHv0oWp.mp4",z_="/assets/foo-NVYO2A8n.mp4",I_="/assets/grab-D5ZAKPvh.mp4",D_="/assets/idexpress-HOhqgAGc.mp4",B_="/assets/shopee-B9968pf7.mp4",$_="/assets/cateringService-CDabgnC2.jpg",F_="/assets/sriwijaya-BaeU_uJ6.png",V_="/assets/grab-C4EdFWCI.jpg",H_="/assets/idexpress-BKaei44x.png",W_="/assets/shopeegambar-BhCXgnyl.jpg",U_="/assets/ojt-xr46b2rp.png",K_="/assets/lion-1-3jNOwePk.png",Y_="/assets/grabaccount-BYxzP_hO.jpg",G_=()=>{const{t:e}=lt();return[{id:1,video:`${N_}`,thumbnail:`${$_}`,title:e("Pengalaman Kerja.catering"),type:e("Pengalaman Kerja.type1"),posisi:e("detail pekerjaan.catering"),perusahaan:e("detail pekerjaan.pt1"),durasi:e("detail pekerjaan.lama1"),img:`${K_}`,description:e("detail pekerjaan.dekripsi kerja1")},{id:2,video:`${z_}`,thumbnail:`${F_}`,title:e("Pengalaman Kerja.foo"),type:e("Pengalaman Kerja.type2"),posisi:e("detail pekerjaan.siswa"),perusahaan:e("detail pekerjaan.pt2"),durasi:e("detail pekerjaan.lama2"),img:`${U_}`,description:e("detail pekerjaan.dekripsi kerja2")},{id:3,video:`${I_}`,thumbnail:`${V_}`,title:e("Pengalaman Kerja.grab"),type:e("Pengalaman Kerja.type3"),posisi:e("detail pekerjaan.driver"),perusahaan:e("detail pekerjaan.pt3"),img:`${Y_}`,durasi:e("detail pekerjaan.lama3"),description:e("detail pekerjaan.dekripsi kerja3")},{id:4,video:`${D_}`,thumbnail:`${H_}`,title:e("Pengalaman Kerja.id express"),type:e("Pengalaman Kerja.type4"),perusahaan:e("detail pekerjaan.pt4"),posisi:e("detail pekerjaan.kurir id"),durasi:e("detail pekerjaan.lama4"),description:e("detail pekerjaan.dekripsi kerja4")},{id:5,video:`${B_}`,thumbnail:`${W_}`,title:e("Pengalaman Kerja.shopee"),type:e("Pengalaman Kerja.type5"),posisi:e("detail pekerjaan.kurir shopee"),durasi:e("detail pekerjaan.lama5"),perusahaan:e("detail pekerjaan.pt5"),description:e("detail pekerjaan.dekripsi kerja5")}]},X_=()=>{const[e,r]=de.useState(0),[i,a]=de.useState(!1),{t:l,i18n:s}=lt(),u=G_(),[c,p]=de.useState(null);console.log("selectedDetail",c);const m=()=>{r(w=>(w+1)%u.length)},x=w=>{const k=u.find(S=>S.id===w);p(k),a(!0)},g=()=>{r(w=>(w-1+u.length)%u.length)},h=w=>u[(e+w)%u.length].thumbnail;return y.jsxs(Q_,{id:"pengalaman",children:[y.jsx(Z_,{children:y.jsx("h1",{children:l("Pengalaman Kerja.title")})}),y.jsxs(J_,{children:[y.jsx(ej,{children:u.map((w,k)=>y.jsxs(tj,{className:k===e?"active":"",children:[y.jsxs(rj,{className:k===e?"active":"",children:[y.jsx("video",{controls:!0,autoPlay:!0,muted:!0,playsInline:!0,loop:!0,className:"video",children:y.jsx("source",{src:w.video,type:"video/mp4"})}),y.jsx(nj,{})]}),y.jsxs(ij,{className:k===e?"active":"",children:[y.jsx(oj,{className:k===e?"active":"",children:w.title}),y.jsx(aj,{className:k===e?"active":"",children:w.type}),y.jsx("button",{className:k===e?"active":"",onClick:()=>x(w.id),children:l("Pengalaman Kerja.detail")})]})]},w.id))}),y.jsx(lj,{children:u.map((w,k)=>y.jsx(sj,{hidden:k===0,src:h(k),alt:`Thumbnail ${k}`},k))}),y.jsxs(uj,{children:[y.jsx("button",{className:"prev",onClick:g,children:y.jsx(K2,{})}),y.jsx("button",{className:"next",onClick:m,children:y.jsx(Y2,{})})]})]}),i&&y.jsx(__,{setOpenDetail:a,detail:c,t:l})]})},Q_=U.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    gap: 1rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 0;
    color: white;
  }

  
  /* TABLET RESPONSIVE */

  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    gap: 1rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 0;
    color: white;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    gap: 1rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 0;
    color: white;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    gap: 1rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 0;
    color: white;
  }



  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }

  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }

  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }
`,Z_=U.div`
  @media (max-width: 1920px) {
    padding-bottom: 5rem;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    padding-bottom: 5rem;
  }
  @media (max-width: 820px) {
    padding-bottom: 5rem;
  }
  @media (max-width: 768px) {
    padding-bottom: 5rem;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    h1 {
      font-size: 19px;
      text-align: center;
    }
  }

  @media (max-width: 412px) {
    h1 {
      font-size: 19px;
      text-align: center;
    }
  }

  @media (max-width: 395px) {
    h1 {
      font-size: 19px;
      text-align: center;
    }
  }
  @media (max-width: 391px) {
    h1 {
      font-size: 19px;
      text-align: center;
    }
  }
  @media (max-width: 376px) {
    h1 {
      font-size: 19px;
      text-align: center;
    }
  }
  @media (max-width: 360px) {
    h1 {
      font-size: 17px;
      text-align: center;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 15px;
      text-align: center;
    }
  }
`,J_=U.div`
  @media (max-width: 1920px) {
    height: 80vh;
    margin-top: -50px;
    width: 80vw;
    overflow: hidden;
    position: relative;
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    height: 80vh;
    margin-top: -50px;
    width: 80vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 820px) {
    height: 80vh;
    margin-top: -50px;
    width: 80vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 768px) {
    height: 80vh;
    margin-top: -50px;
    width: 80vw;
    overflow: hidden;
    position: relative;
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    height: 80vh;
    margin-top: -50px;
    width: 94.5vw;
    overflow: hidden;
    position: relative;
  }

  @media (max-width: 412px) {
    height: 80vh;
    margin-top: -50px;
    width: 94.5vw;
    overflow: hidden;
    position: relative;
  }

  @media (max-width: 395px) {
    height: 80vh;
    margin-top: -50px;
    width: 94.5vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 391px) {
    height: 80vh;
    margin-top: -50px;
    width: 94.5vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 376px) {
    height: 80vh;
    margin-top: -50px;
    width: 94.5vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 360px) {
    height: 80vh;
    margin-top: -50px;
    width: 93.5vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 320px) {
    height: 80vh;
    margin-top: -50px;
    width: 93.5vw;
    overflow: hidden;
    position: relative;
  }
`,ej=U.div`
  @media (max-width: 1920px) {
    position: relative;
    height: 100%;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 820px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 768px) {
    position: relative;
    height: 100%;
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: relative;
    height: 100%;
  }

  @media (max-width: 412px) {
    position: relative;
    height: 100%;
  }
  
  @media (max-width: 395px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 391px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 376px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 360px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 320px) {
    position: relative;
    height: 100%;
  }
`,tj=U.div`
  @media (max-width: 1920px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 820px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 412px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 395px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 391px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 376px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 360px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 320px) {
    width: 100%;
    height: 120%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
`,rj=U.div`
  @media (max-width: 1920px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 820px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 412px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 395px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 391px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 376px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 360px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 320px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
`,nj=U.div`
  @media (max-width: 1920px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 820px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }

  @media (max-width: 412px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }

  @media (max-width: 395px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 391px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 376px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 360px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 320px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
`,ij=U.div`
  @media (max-width: 1920px) {
    position: absolute;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 50%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 2px;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  /* TABLET RESPONSIVE */

  
  @media (min-width: 1114px) and (max-width: 1152px) {
    position: absolute;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 67%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 2px;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  
  @media (max-width: 835px) {
    position: absolute;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 87%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 2px;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 820px) {
    position: absolute;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 90%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 2px;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 95%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 2px;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 150%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }

  @media (max-width: 412px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 150%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }

  @media (max-width: 395px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 160%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 391px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 160%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 376px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 165%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 360px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 175%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 320px) {
    position: absolute;
    font-size: 7px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 194%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
`,aj=U.div`
  @media (max-width: 1920px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 820px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  @media (max-width: 768px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }

  @media (max-width: 412px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }

  @media (max-width: 395px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  @media (max-width: 391px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  @media (max-width: 376px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  @media (max-width: 360px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  @media (max-width: 320px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
`;U.div`
  &.active {
    transform: translateY(50px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent 0.5s 1s linear 1 forwards;

    @keyframes showContent {
      to {
        transform: translateY(0px);
        filter: blur(0px);
        opacity: 1;
      }
    }
    animation-delay: 0.8s !important;
  }
`;const oj=U.div`
  @media (max-width: 1920px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  /* TABLET RESPONSIVE */
  @media (max-width: 820px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  @media (max-width: 768px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }

  @media (max-width: 412px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }

  @media (max-width: 395px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  @media (max-width: 391px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  @media (max-width: 376px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  @media (max-width: 360px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  @media (max-width: 320px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
`,lj=U.div`
  @media (max-width: 1920px) {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 820px) {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  @media (max-width: 768px) {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }

  @media (max-width: 412px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }

  @media (max-width: 395px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  
  @media (max-width: 391px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  @media (max-width: 376px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  @media (max-width: 360px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  @media (max-width: 320px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
`;Vr`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;Vr`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
`;const sj=U.img`
  @media (max-width: 1920px) {
    width: 200px;
    height: 200px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 820px) {
    width: 200px;
    height: 200px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 145px;
    height: 145px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }

  @media (max-width: 412px) {
    width: 145px;
    height: 145px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }

  @media (max-width: 395px) {
    width: 130px;
    height: 130px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  
  @media (max-width: 391px) {
    width: 130px;
    height: 130px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  @media (max-width: 376px) {
    width: 125px;
    height: 125px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  @media (max-width: 360px) {
    width: 125px;
    height: 125px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  @media (max-width: 320px) {
    width: 100px;
    height: 100px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
`,uj=U.div`
  @media (max-width: 1920px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }

  @media (max-width: 428px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }

  @media (max-width: 412px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
  
  @media (max-width: 395px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
  @media (max-width: 391px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
  @media (max-width: 376px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
  @media (max-width: 360px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
  @media (max-width: 320px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
`,cc=70,pc=40,dj=e=>{const r=2*Math.PI*cc;return r-e/100*r},cj=e=>{const r=2*Math.PI*pc;return r-e/100*r},pj=e=>Vr`
  100% { stroke-dashoffset: ${dj(e)}; }
`,fj=e=>Vr`
  100% { stroke-dashoffset: ${cj(e)}; }
`;U.div`
  width: 160px;
  height: 160px;
  position: relative;

  circle {
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;

    /* DEFAULT (DESKTOP) */
    stroke-dasharray: ${2*Math.PI*cc};
    stroke-dashoffset: ${2*Math.PI*cc};
    animation: ${({percent:e,isVisible:r})=>r?pj(e):"none"} 2s linear forwards;

    r: ${cc};
    cx: 80;
    cy: 80;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 160px;
    width: 160px;
  }

  /* =============================
     MOBILE MODE (MAX 320PX)
  ============================== */
  @media (max-width: 320px) {
    width: 120px;
    height: 120px;

    circle {
      stroke-dasharray: ${2*Math.PI*pc};
      stroke-dashoffset: ${2*Math.PI*pc};
      animation: ${({percent:e,isVisible:r})=>r?fj(e):"none"} 2s linear forwards;

      r: ${pc};
      cx: 60;
      cy: 60;
    }

    svg {
      width: 120px;
      height: 120px;
    }
  }
`;U.div`
  height: 160px;
  width: 160px;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);

  @media (max-width: 320px) {
    height: 120px;
    width: 120px;
  }
`;U.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7);

  img {
    height: 70px;
    width: 70px;
  }

  @media (max-width: 320px) {
    height: 80px;
    width: 80px;

    img {
      height: 40px;
      width: 40px;
    }
  }
`;U.div`
  @media (max-width: 1920px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    /* margin */
    border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2);
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 20rem;
    height: 20rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 320px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
`;U.div``;U.div``;U.div`
@media (max-width:1920px) {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
@media (max-width:320px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
`;const mj="/assets/wedspotclient-ByWdUOVH.png",hj="/assets/wedspotvendor-F6de0oOC.png",gj="/assets/wedspotfigma-DGyLOlwZ.png",xj="/assets/musiconfigma-CoGtVEE6.png",Fm="/assets/reactjs-DXE1gZJf.png",vj="/assets/reactbootstrap-biXxx0Nt.png",jv="/assets/axios-CbBG_muH.jpg",Tv="/assets/reactimagegalery-BspHGExY.png",Mv="/assets/reacttoastify-ri6FrWZK.png",qv="/assets/reactrouter-o1vM8nKp.png",Av="/assets/sass-JnFuEx0a.png",Lv="/assets/slick-Xmv3w_dR.png",Vm="/assets/css-BfJi4hgw.png",Nv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAflBMVEX///8AAAA+Pj78/Px7e3uSkpIEBASfn5/Nzc3n5+e3t7fu7u7z8/P39/ezs7Py8vLf39+np6dcXFzV1dVVVVVwcHCMjIxhYWHBwcEvLy8mJiZQUFDj4+MYGBiFhYVDQ0MQEBCXl5fGxsZKSkqgoKBBQUEfHx92dnY1NTVsbGxsG+2xAAAGkUlEQVR4nO2aDXeiOhCGiaGAXyiirbZWq+5a+///4IVMEgJk6nY3trc973P27LIkhOTNZDIZjCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgz5+Kt78OVMRfzVXfhy7oSYX60kP6EjX4WMhkKIJ7b4mCmGXDkVH7c36l4Hetv1GfsYMlqIJBFrrvxVKM5McUHF4pM8Cr3sPnSzmR4jY+wzIZL6T+GpICtXQhShe8VAb7sL3eyG2j34S6Wd6YmvMKayzWe5i9toYIZYWTMzjguV7zxFc1WSiCxwp1huoYE0xpyIV06DTFfxeKInKlkE7dN73MQO4nq1EyVX54HqnHoFa3IVgts0/gFmPm6hwVw0DLjuDLWlrDs9k490//7zgodbaPDkaCBG/jqyCqLUfHf3x1Tb0FRqDbbHPC1G2fSPXz8+5r9+5UffxirLUZEW684CvIEGa1cC8WIH0+2P8O0dY303j5TplrFtaF9MG9PIl4uKZVS3PS9el9p/VrHZ3aN5YHMYRvbd1YXMm8lZZU3RLTR4diV4x6hzXaU1Ya/uEhouVAuWJmBI6UbV9EjtMDoam8bCPlH/vXP0z59tW/U/p8YYQmsgo4PowDg3Ge31nFiRZOVKqJtlfW/UbUmczIqwGizogjSYv3QfOM91w/Kt19gv897AGkhrzA0PXNVSVyibW79Jg5UbR7lsJm0N9lozpUHZq57Um6+sV8LJ05gZdXANVq7xdsbYqVrVVeztvVyba708svrE0WPf0qAwdWoNZp5hJiJRS+3N21h+Ew28c8EGvY0DpApS2/LBuRbn+2OZ5Q9mMaeOBs/W/63pmCbUUON1WY5iJUBCoahdVcsiK4+HjWlsfBMNBp7J4A8/KYn0opa53i6rUdeeLG2NudoiBzp2mjQaEC/7fb0DZ/ocFmufMVUeYHOsr89Uc2Ms0rjj1/AayKpxj8lVmz33xNl5vzRmoRb3S9tEquKBI2hqbEys5vV6n9bmrnCOwJUpFOppvVs/Nyc0E6rPgmtgT71tEj6tZmIJtXc80LVKvZTuRBEUWdK2mRoJbIpChxsX5wG509prv+P6pTsjcRRag3uvBhVsRmhJS/Ohmu7WMepA18ehZTvWGk2jZi00kbYWbdT2PRQfkNsYjIdb29jc0TioBkNOAj6tNld+Sx2ULzS1dNSM2aaURloD52ypl/jM8w6yTu8iPQXXYMF3nEmryWhH/dtEZp8j+11Sv30dzxoNjk1LB7rje4meGl9jm9AaZP13WB4j5thgXEiqe6j3kCXflKOBk4a6u6qBj+AabPz2VpNUexwTJBS6gtOpyPpHH2WjgdNM/47FFzxpLoE18MW2Dr6VqrhYARJhE2g7ujPosxl6RzyiBlznK03oRZWf9/3GAvtE/77YsOIezBzzWRhr0ZEdF131NZibkTjmZi71mZlLyoTSQLoJND9MWk26dm/OmHKil8e2qebisXzdgnMS35oETm8XaTcWzA7cBJqf35xHaHyWE+S9aUnn1OM6nyJ2Novi0UA7xcvE1B9XYcGgFt4GoG8yolNkXbvZqYJp0Eqg+Ui4tFoTWiVOTG01vSfbGNaVEn3S82kw1m95GSmdZE674WrovOCRyqKs7u3SZFGCaFAJ206gMXALks6IiXM4iNS86sX1uNqtzAlxkKk91rcLHOxiXOx2zd6qcnVnW/YUxzaMiYOeG+X5TzRgPunJygPWXRy4MYT0bo+JeIv8GkgmRCMnsG3HiYn+6xhSg9Tzdg/+tJrUR+6u03zrBriJPUR5NJDR9GTG1+QNT/oNc+GJljOyuzAavBOFtGDSanTi6W+e/YjjHX9Qy9A+ZSTut7xpL/L8bWYkjAb9hCUD+w3xtdrV+u5i3B7UbmYcxsGjQb2QytZIl6WTro2OrZziZWS3SLrxj9/e+wk0DjatNmO+UU9GK/qGvYnXzumgHNXknta2By3DIu19y5yn2mUs75p1V3kjBftV8E+w2eDr+H9xoCh89/W96WTq/jdyZ7f7hLo1m3mKdeA8m3We4hv7APn1wTewx4Zvjbw+cAffLw6+P2wCzU/o3z79H3gnQ+EhEU8/8Bd5D/6MFw/7a7Vvy3sJND+PP84Onq8Pugvza7VvioyyVfxh2IzS9+TvzPpHLYa/GgyTZAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4D8/LD13aWpluwAAAABJRU5ErkJggg==",Hm="/assets/materialui-CfCZKesG.png",zv="/assets/git-BxxsCqvH.png",Iv="/assets/reacticons-C41QbdFE.png",Dv="/assets/npm-COAi5tqX.png",Bv="/assets/redux-C9tFvlcA.png",$v="/assets/momentjs-CBx991rB.png",mh=()=>{const{t:e}=lt();return[{id:"1",img:`${mj}`,title:e("portofolio.title2"),type:e("porto menu.web"),video:"",desc:e("portofolio.desc1"),detail_description:e("portofolio.detail_description1"),tools:[{item:`${Fm}`},{item:`${vj}`},{item:`${jv}`},{item:`${Tv}`},{item:`${Mv}`},{item:`${qv}`},{item:`${Av}`},{item:`${Lv}`},{item:`${Vm}`},{item:`${Nv}`},{item:`${Hm}`},{item:`${zv}`},{item:`${Dv}`},{item:`${Iv}`},{item:`${Bv}`},{item:`${$v}`}],link:"https://wedspot.vercel.app/"},{id:"2",img:`${hj}`,title:e("portofolio.title3"),type:e("porto menu.web"),desc:e("portofolio.desc2"),detail_description:e("portofolio.detail_description2"),tools:[{item:`${Fm}`},{item:`${Iv}`},{item:`${jv}`},{item:`${Tv}`},{item:`${Mv}`},{item:`${qv}`},{item:`${Av}`},{item:`${Lv}`},{item:`${Vm}`},{item:`${Nv}`},{item:`${Hm}`},{item:`${Dv}`},{item:`${zv}`},{item:`${Bv}`},{item:`${$v}`}],link:"https://wedspot-vendor.vercel.app/"}]},bj=({setOpenPortoDetail:e})=>{const[r,i]=de.useState([]),{t:a}=lt(),l=mh();return de.useEffect(()=>{i(l)},[]),y.jsx(yj,{children:y.jsx(wj,{children:r==null?void 0:r.map(s=>y.jsxs(kj,{children:[y.jsx("img",{src:s.img,alt:s.title}),y.jsxs(d5,{children:[y.jsx("h3",{children:s.title}),y.jsx("p",{children:s.desc}),y.jsx("button",{onClick:()=>e(s.id),children:a("porto menu.detail")})]})]},s.id))})})},yj=U.div`
  /* padding: 10px 10%; */
`,wj=U.div`
  @media (max-width: 1920px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    /* justify-content: center; */
    /* justify-content: space-between; */
  }
`,d5=U.div`
  @media (max-width: 1920px) {
    height: 0;
    width: 100%;
    background: linear-gradient(transparent, #1c1c1c 58%);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
    text-align: center;
    font-size: 14px;
    transition: height 1s;

    h3 {
      color: white;
      font-weight: 500;
      margin-top: 20%;
      font-size: 1.25rem;
      letter-spacing: 2px;
    }

    p {
      color: white;
      margin: 10px 0;
    }

    button {
      margin-top: 10px;
      color: black;
      width: 90px;
      height: 40px;
      font-size: 14px;
      background: #fff;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
    }
  }
`,kj=U.div`
  @media (max-width: 1920px) {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 49%;
    /* Mengurangi jarak agar dua item per baris */
    /* width: calc(50% - 0.5rem);  */
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;

    img {
      width: 100%;
      border-radius: 10px;
      display: block;
      transition: transform 0.5s;
    }

    &:hover img {
      transform: scale(1.2);
    }

    &:hover ${d5} {
      height: 100%;
    }
  }
`,Sj=({setOpenPortoDetail:e})=>{const[r,i]=de.useState([]),{t:a}=lt(),l=mh(),s={dots:!0,fade:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,waitForAnimate:!1};return de.useEffect(()=>{i(l)},[]),y.jsx(Rj,{children:y.jsx(Ii,{...s,children:r==null?void 0:r.map(u=>y.jsxs(Ej,{children:[y.jsx("img",{src:u.img,alt:u.title}),y.jsxs(c5,{children:[y.jsx("h3",{children:u.title}),y.jsx("p",{children:u.desc}),y.jsx("button",{onClick:()=>e(u.id),children:a("porto menu.detail")})]})]},u.id))})})};U.div`
  /* padding: 10px 10%; */
`;const c5=U.div`
  @media (max-width: 320px) {
    height: 0;
    width: 100%;
    background: linear-gradient(transparent, #1c1c1c 58%);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
    text-align: center;
    font-size: 14px;
    transition: height 1s;

    h3 {
      color: white;
      font-weight: 500;
      margin-top: 20%;
      font-size: 1.25rem;
      letter-spacing: 2px;
    }

    p {
      color: white;
      margin: 10px 0;
    }

    button {
      margin-top: 10px;
      color: black;
      width: 90px;
      height: 40px;
      font-size: 14px;
      background: #fff;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
    }
  }
`,Ej=U.div`
  @media (max-width: 320px) {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 49%;
    /* Mengurangi jarak agar dua item per baris */
    /* width: calc(50% - 0.5rem);  */
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;

    img {
      width: 100%;
      border-radius: 10px;
      display: block;
      transition: transform 0.5s;
    }

    &:hover img {
      transform: scale(1.2);
    }

    &:hover ${c5} {
      height: 100%;
    }
  }
`,Rj=U.div``,Cj=({setOpenPortoDetail:e})=>y.jsxs(y.Fragment,{children:[y.jsx(Pj,{children:y.jsx(bj,{setOpenPortoDetail:e})}),y.jsx(_j,{children:y.jsx(Sj,{setOpenPortoDetail:e})}),y.jsx(Oj,{})]}),Pj=U.div`
  /* Desktop & Large Screen */
  @media (min-width: 1025px) {
    display: block;
  }

  /* Hide on tablet & mobile */
  @media (max-width: 1024px) {
    display: none;
  }
`,Oj=U.div`
  /* Tablet only */
  @media (min-width: 601px) and (max-width: 1024px) {
    display: block;
  }

  @media (min-width: 1025px), (max-width: 600px) {
    display: none;
  }
`,_j=U.div`
  /* Mobile only */
  @media (min-width: 320px) and (max-width: 599px) {
    display: block;
  }

  @media (min-width: 601px) {
    display: none;
  }
`,jj="/assets/wedspotfigmadesign-DzhwLVKr.png",Tj="/assets/musicon-B474gmP2.png",Mj="/assets/figmavendor-DpFz7LyD.png",p5=()=>{const{t:e}=lt();return[{id:"1",titleHeader:e("portofolio.title5"),imageUrl:`${gj}`,imageData:[{id:"1",title:e("portofolio.title2"),img:`${jj}`},{id:"2",title:e("portofolio.title3"),img:`${Mj}`}]},{id:"2",titleHeader:e("portofolio.title6"),imageUrl:`${xj}`,imageData:[{id:"1",title:e("portofolio.title7"),img:`${Tj}`}]}]},qj=({setOpenFigmaDetail:e})=>{const[r,i]=de.useState([]);console.log("figmaData",r);const{t:a}=lt(),l=p5();return de.useEffect(()=>{i(l)},[]),y.jsx(Aj,{children:y.jsx(Lj,{children:r.map(s=>y.jsxs(Nj,{children:[y.jsx("img",{src:s.imageUrl,alt:s.titleHeader}),y.jsxs(f5,{children:[y.jsx("h3",{children:s.titleHeader}),y.jsx("p",{children:s.desc}),y.jsx("button",{onClick:()=>e(s.id),children:a("porto menu.detail")})]})]},s.id))})})},Aj=U.div`
  @media (max-width: 1920px) {
    padding: 10px 10%;
    /* height: 200%; */
  }
`,Lj=U.div`
  @media (max-width: 1920px) {
    display: flex;
    gap: 1rem;
  }
`,f5=U.div`
  @media (max-width: 1920px) {
    height: 0px;
    width: 100%;
    background: linear-gradient(transparent, #1c1c1c 58%);
    border-radius: 10px;
    position: absolute;
    /* top: 0; */
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    align-items: center;
    text-align: center;
    font-size: 14px;
    transition: height 1s;
    h3 {
      color: white;
      font-weight: 500;
      margin-top: 20%;
      font-size: 30px;
      letter-spacing: 2px;
    }
    p {
      color: white;
    }
    button {
      margin-top: 10px;
      color: black;
      width: 90px;
      height: 40px;
      font-size: 14px;
      background: #fff;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
      /* padding: 5px; */
    }
  }
`,Nj=U.div`
  @media (max-width: 1920px) {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    /* height: 10%; */
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    img {
      width: 100%;
      /* height: 20rem; */
      border-radius: 10px;
      display: block;
      transition: transform 0.5s;
    }
    &:hover img {
      transform: scale(1.2);
    }
    &:hover ${f5} {
      height: 100%;
    }
  }
`,zj=({setOpenFigmaDetail:e,selectedFigmaDetail:r})=>{const[i,a]=de.useState(r.imageData[0]),{t:l}=lt(),s=()=>{e(!1)};return y.jsx(Ij,{children:y.jsxs(Dj,{children:[y.jsx(Vj,{onClick:s,children:y.jsx(Xs,{color:"white"})}),y.jsx($j,{children:y.jsx("h1",{style:{color:"white"},children:l("porto menu.Detail Figma")})}),y.jsxs(Fj,{children:[y.jsx(Bj,{children:y.jsx("h2",{children:r.titleHeader})}),y.jsx(Hj,{children:r.imageData.map(u=>y.jsx(Wj,{onClick:()=>a(u),children:u.title},u.id))}),y.jsx(ph,{initialScale:1,initialPositionX:200,initialPositionY:100,children:y.jsx(fh,{children:y.jsx("img",{src:i.img,alt:i.title,width:"750px"})})})]})]})})},Ij=U.div`
@media (max-width:1920px) {
  position: fixed;
  top: 0;
  left: 0;
  width: 1550px;
  height: 1024px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  // gap:"2rem",
  padding-left: 20rem;
  padding-top: 2rem;
  // justifyContent: "center",
  // alignItems: "center",
  // paddingTop: "3rem",
  z-index: 999;
  // position:"relative"
}
`,Dj=U.div`
@media (max-width:1920px) {
  width: 900px;
  height: 650px;
  background-color: #191923;
  padding: 3rem;
  border-radius: 2%;
  overflow-y: auto;
  box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
  &::-webkit-scrollbar {
    width: 8px; /* Lebar scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
    border-radius: 4px; /* Radius sudut */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
  }
}
`;U.div``;const Bj=U.div`
@media (max-width:1920px) {
  text-align: center;
}
`,$j=U.div``,Fj=U.div`
@media (max-width:1920px) {
  padding: 2rem;
}
`;U.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
`;const Vj=U.div`
@media (max-width:1920px) {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
}
`;U.div`
  display: flex;
  justify-content: center;
`;const Hj=U.div`
@media (max-width:1920px) {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
`,Wj=U.button`
@media (max-width:1920px) {
  background-color: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #555;
  }
}
`,Uj=({setOpenPortoDetail:e,selectedPortoDetail:r})=>{const i=()=>{e(!1)},{t:a}=lt();return y.jsx(Kj,{children:y.jsxs(Yj,{children:[y.jsx(Jj,{onClick:i,children:y.jsx(Xs,{color:"white"})}),y.jsx(Xj,{children:y.jsx("h1",{style:{color:"white"},children:a("portofolio.title4")})}),y.jsxs(Qj,{children:[y.jsx(Gj,{children:y.jsx("h2",{children:r.title})}),y.jsxs(Zj,{children:[y.jsxs("h4",{children:[a("porto menu.type")," : ",r.type]}),y.jsxs("div",{children:[y.jsxs("h4",{children:[a("porto menu.desc")," :"]}),y.jsx("p",{style:{whiteSpace:"pre-wrap"},children:r.detail_description})]}),y.jsxs("div",{style:{width:"100%"},children:[y.jsxs("h4",{children:[a("porto menu.tool"),":"]}),y.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",paddingTop:"2rem",alignItems:"center"},children:r.tools.map((l,s)=>y.jsx("img",{src:l.item,alt:"",width:"100px"},s))})]}),y.jsxs("div",{children:[y.jsx("div",{children:y.jsxs("h4",{children:[a("porto menu.link"),":"]})}),y.jsx("a",{href:r.link,style:{textDecoration:"none",color:"white"},children:r.link})]})]})]})]})})},Kj=U.div`
@media (max-width:1920px) {
  position: fixed;
  top: 0;
  left: 0;
  width: 1550px;
  height: 1024px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  // gap:"2rem",
  padding-left: 20rem;
  padding-top: 2rem;
  // justifyContent: "center",
  // alignItems: "center",
  // paddingTop: "3rem",
  z-index: 999;
  // position:"relative"
}
`,Yj=U.div`
@media (max-width:1920px) {
  width: 900px;
  height: 650px;
  background-color: #191923;
  padding: 3rem;
  border-radius: 2%;
  overflow-y: auto;
  box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
  &::-webkit-scrollbar {
    width: 8px; /* Lebar scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
    border-radius: 4px; /* Radius sudut */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
  }
}
`;U.div``;const Gj=U.div`
@media (max-width:1920px) {
  text-align: center;
}
`,Xj=U.div``,Qj=U.div`
@media (max-width:1920px) {
  padding: 2rem;
}
`,Zj=U.div`
@media (max-width:1920px) {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
}
`,Jj=U.div`
@media (max-width:1920px) {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
}
`;U.div`
  display: flex;
  justify-content: center;
`;const eT=()=>{const[e,r]=de.useState(1),[i,a]=de.useState(!1),[l,s]=de.useState(null),[u,c]=de.useState(null),[p,m]=de.useState(!1),{t:x,i18n:g}=lt(),h=mh();console.log(h);const w=p5(),k=M=>{const O=h.find(A=>A.id===M);s(O),a(!0)},S=M=>{const O=w.find(A=>A.id===M);c(O),m(!0)};return y.jsxs(tT,{id:"project",children:[y.jsx("h1",{children:x("portofolio.title1")}),y.jsxs(rT,{children:[y.jsx(nT,{onClick:()=>r(1),active:e===1,children:y.jsx("h5",{children:x("porto menu.portofolio")})}),y.jsx(iT,{onClick:()=>r(2),active:e===2,children:y.jsx("h5",{children:x("porto menu.design")})})]}),e===1&&y.jsx(aT,{children:y.jsx(Cj,{setOpenPortoDetail:k})}),e===2&&y.jsx(oT,{children:y.jsx(qj,{setOpenFigmaDetail:S})}),i&&y.jsx(y.Fragment,{children:y.jsx(Uj,{setOpenPortoDetail:a,selectedPortoDetail:l})}),p&&y.jsx(y.Fragment,{children:y.jsx(zj,{setOpenFigmaDetail:m,selectedFigmaDetail:u})})]})},tT=U.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    padding-top: 6rem;
    gap: 2rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
`,rT=U.div`
  @media (max-width: 1920px) {
    display: flex;
    justify-content: center;
    gap: 10rem;
    padding-top: 2rem;
    /* padding: 10px 40rem 10px 40rem;  */
    /* justify-content: space-around; */
  }
`,nT=U.div`
  @media (max-width: 1920px) {
    cursor: pointer !important;
    position: relative; /* Add position relative */
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px; /* Adjust bottom position */
      height: 2px;
      background-color: white;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    :hover:before {
      transform: scaleX(1);
    }
    ${e=>e.active&&`
          :before{
          transform: scaleX(1);
          }
        `}
  }
`,iT=U.div`
  @media (max-width: 1920px) {
    cursor: pointer !important;
    position: relative; /* Add position relative */
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px; /* Adjust bottom position */
      height: 2px;
      background-color: white;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    :hover:before {
      transform: scaleX(1);
    }
    ${e=>e.active&&`
          :before{
          transform: scaleX(1);
          }
        `}
  }
`,aT=U.div`
  @media (max-width: 1902px) {
    width: 100%;
  }
`,oT=U.div`
  @media (max-width: 1920px) {
    width: 100%;
  }
`;var Wm=new Map,Od=new WeakMap,Fv=0,lT=void 0;function sT(e){return e?(Od.has(e)||(Fv+=1,Od.set(e,Fv.toString())),Od.get(e)):"0"}function uT(e){return Object.keys(e).sort().filter(r=>e[r]!==void 0).map(r=>`${r}_${r==="root"?sT(e.root):e[r]}`).toString()}function dT(e){const r=uT(e);let i=Wm.get(r);if(!i){const a=new Map;let l;const s=new IntersectionObserver(u=>{u.forEach(c=>{var p;const m=c.isIntersecting&&l.some(x=>c.intersectionRatio>=x);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=m),(p=a.get(c.target))==null||p.forEach(x=>{x(m,c)})})},e);l=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:r,observer:s,elements:a},Wm.set(r,i)}return i}function cT(e,r,i={},a=lT){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const p=e.getBoundingClientRect();return r(a,{isIntersecting:a,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:l,observer:s,elements:u}=dT(i),c=u.get(e)||[];return u.has(e)||u.set(e,c),c.push(r),s.observe(e),function(){c.splice(c.indexOf(r),1),c.length===0&&(u.delete(e),s.unobserve(e)),u.size===0&&(s.disconnect(),Wm.delete(l))}}function m5({threshold:e,delay:r,trackVisibility:i,rootMargin:a,root:l,triggerOnce:s,skip:u,initialInView:c,fallbackInView:p,onChange:m}={}){var x;const[g,h]=de.useState(null),w=de.useRef(m),[k,S]=de.useState({inView:!!c,entry:void 0});w.current=m,de.useEffect(()=>{if(u||!g)return;let z;return z=cT(g,(B,j)=>{S({inView:B,entry:j}),w.current&&w.current(B,j),j.isIntersecting&&s&&z&&(z(),z=void 0)},{root:l,rootMargin:a,threshold:e,trackVisibility:i,delay:r},p),()=>{z&&z()}},[Array.isArray(e)?e.toString():e,g,l,a,s,u,i,p,r]);const M=(x=k.entry)==null?void 0:x.target,O=de.useRef(void 0);!g&&M&&!s&&!u&&O.current!==M&&(O.current=M,S({inView:!!c,entry:void 0}));const A=[h,k.inView,k.entry];return A.ref=A[0],A.inView=A[1],A.entry=A[2],A}const pT="/assets/foo-Bl9sujpm.jpg",fT="/assets/glints-TDwMwSid.jpg",mT="/assets/welder-DQEYkdls.jpeg",hT=()=>{const{t:e}=lt();return[{title:e("trainning.foo"),description:e("deskripsi.foo"),img:pT},{title:e("trainning.glints"),description:e("deskripsi.glints"),img:fT},{title:e("trainning.las"),description:e("deskripsi.las"),img:mT}]},gT=()=>{const[e,r]=de.useState(0),{t:i}=lt(),a=hT();return de.useEffect(()=>{},[e]),y.jsxs(xT,{id:"training",children:[y.jsx("h1",{children:i("trainning.title")}),y.jsxs(vT,{children:[y.jsx(bT,{children:a.map((l,s)=>y.jsx(wT,{title:l.title,description:l.description,index:s,setActiveIndex:r},s))}),y.jsx(yT,{children:a.map((l,s)=>y.jsx(RT,{img:l.img,index:s,activeIndex:e},s))})]})]})},xT=U.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 100px;
`,vT=U.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 2rem;
  position: relative;
  /* z-index: 999; */
`,bT=U.div`
  flex-basis: 50%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 10;
`,yT=U.div`
  position: sticky;
  top: 0;
  right: 0;
  height: 100vh;
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,wT=({title:e,description:r,index:i,setActiveIndex:a})=>{const{ref:l,inView:s}=m5({triggerOnce:!1,threshold:.5,onChange:u=>{u&&a(i)}});return y.jsxs(kT,{ref:l,inView:s,children:[y.jsx(ST,{children:e}),y.jsx(ET,{children:r})]})},kT=U.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  opacity: ${e=>e.inView?1:0};
  transform: ${e=>e.inView?"none":"translateY(50px)"};
  transition: opacity 0.6s, transform 0.6s;
`,ST=U.div`
  font-size: 100px;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  color: white;
`,ET=U.div`
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: 300;
  color: white;
`,RT=({img:e,index:r,activeIndex:i})=>{const{ref:a,inView:l}=m5({triggerOnce:!1,threshold:.5});return y.jsx(CT,{ref:a,active:r===i,inView:l,children:y.jsx("img",{src:e,alt:`active-${r}`})})},CT=U.div`
  width: 100%;
  height: auto;
  display: ${e=>e.active?"block":"none"};
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
    transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
    transform: ${e=>e.inView?"scale(1.1)":"scale(0.8)"};
    opacity: ${e=>e.inView?1:0};
  }
`,PT=({selectedDetail:e,openDetail:r,item:i})=>y.jsx(OT,{className:"project",onClick:()=>r(i.id),children:y.jsx("img",{src:i.img,alt:"project"})}),OT=U.div`
  /* padding-top: 20rem; */
  height: 15rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  &:hover > img {
    transform: scale(1.3);
  }

  &:hover > .disc {
    bottom: 0;
  }
`,_T="/assets/glints-CG-0M7in.png",jT="/assets/bnsp-BsDBOPx5.png",TT="/assets/ef-DZomjilc.png",MT="/assets/foosertifikat-Gv2nU5Sr.jpg",qT=[{id:"1",img:`${_T}`},{id:"2",img:`${jT}`},{id:"3",img:`${TT}`},{id:"4",img:`${MT}`}],AT=({selectedDetail:e,setOpenDetail:r})=>{const i=()=>{r(!1)};return y.jsx(LT,{children:y.jsxs(NT,{children:[y.jsx(DT,{onClick:i,children:y.jsx(Xs,{color:"white"})}),y.jsx(zT,{children:y.jsx("h1",{style:{color:"white"},children:"My Detail Certificate"})}),y.jsx(IT,{children:y.jsx(ph,{children:y.jsx(fh,{children:y.jsx("img",{src:e.img,alt:"",style:{width:"750px"}})})})})]})})},LT=U.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1550px;
  height: 1024px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  // gap:"2rem",
  padding-left: 20rem;
  padding-top: 2rem;
  // justifyContent: "center",
  // alignItems: "center",
  // paddingTop: "3rem",
  z-index: 999;
  // position:"relative"
`,NT=U.div`
  width: 900px;
  height: 650px;
  background-color: #191923;
  padding: 3rem;
  border-radius: 2%;
  overflow-y: auto;
  box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
  &::-webkit-scrollbar {
    width: 8px; /* Lebar scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
    border-radius: 4px; /* Radius sudut */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
  }
`;U.div``;U.div`
  text-align: center;
`;const zT=U.div``,IT=U.div`
  padding: 2rem;
`;U.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
`;const DT=U.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;U.div`
  display: flex;
  justify-content: center;
`;var BT={className:"center",centerMode:!0,dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,arrows:!1,responsive:[{breakpoint:990,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!1,centerMode:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2,centerMode:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!1}}]};const $T=()=>{const[e,r]=de.useState(),{t:i}=lt(),[a,l]=de.useState(!1),[s,u]=de.useState(null),c=x=>{const g=e.find(h=>h.id===x);l(!0),u(g)};de.useEffect(()=>{r(qT)},[]);const p=de.useRef(null);let m="";return m=e==null?void 0:e.map(x=>y.jsx(PT,{item:x,openDetail:c,selectedDetail:s},x.id)),y.jsxs(HT,{id:"sertifikat",children:[y.jsx("h1",{children:i("sertifikat")}),y.jsxs(FT,{children:[y.jsx(Ii,{ref:p,...BT,children:m}),y.jsxs(VT,{children:[y.jsx("button",{onClick:()=>p.current.slickPrev(),className:"back",children:y.jsx(K2,{})}),y.jsx("button",{onClick:()=>p.current.slickNext(),className:"next",children:y.jsx(Y2,{})})]})]}),a&&y.jsx(y.Fragment,{children:y.jsx(AT,{selectedDetail:s,setOpenDetail:l})})]})},FT=U.div`
  position: relative;
  margin-top: 5rem;
  /* padding-top: 3rem; */
`,VT=U.div`
  button{
    width: 3rem;
    /* size: 20rem; */
    height: 3rem;
    font-size: 20px;

    /* background-color: rgba(255, 255, 255, 0.100); */
    cursor: pointer;
    color: black;
    border: 1px solid white;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`,HT=U.div`
    display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 100px;
`,WT="/assets/google-DRtbtVZY.png",UT="/assets/chatgpt-CD0diBWs.png",KT="/assets/Youtube_logo-D5vWFoLj.png",YT="/assets/stackoverflow-Lv9DHqTe.png",GT="/assets/githubforum-D07mhokl.png",XT="/assets/codepen-BxH6Fo5z.png",QT="/assets/codesandbox-CJXI4vYZ.png",ZT="/assets/mdn-BhgkKjRu.png",JT="/assets/w3school-DrgZ9TN-.png",e6="/assets/medium-8d5jpF3r.png",t6="/assets/freecodecamp-uy20HLXP.png",r6=()=>{const{t:e}=lt();return y.jsxs(n6,{children:[y.jsx("h1",{children:e("partner")}),y.jsxs(i6,{style:{display:"flex",gap:"1rem",alignItems:"center",paddingTop:"3rem"},children:[y.jsxs("div",{children:[y.jsx("div",{children:y.jsx("img",{src:e6,alt:"",style:{width:"250px"}})}),y.jsx("div",{children:y.jsx("img",{src:JT,alt:"",style:{width:"250px"}})})]}),y.jsxs("div",{children:[y.jsx("div",{style:{borderRadius:"2%"},children:y.jsx("img",{src:ZT,alt:"",style:{width:"250px"}})}),y.jsx("div",{children:y.jsx("img",{src:YT,alt:"",style:{width:"250px"}})}),y.jsx("div",{children:y.jsx("img",{src:QT,alt:"",style:{width:"250px"}})})]}),y.jsx("div",{children:y.jsx("img",{src:WT,alt:"",style:{width:"350px"}})}),y.jsxs("div",{children:[y.jsx("div",{children:y.jsx("img",{src:GT,alt:"",style:{width:"250px"}})}),y.jsx("div",{children:y.jsx("img",{src:t6,alt:"",style:{width:"250px"}})}),y.jsx("div",{children:y.jsx("img",{src:UT,alt:"",style:{width:"250px"}})})]}),y.jsxs("div",{children:[y.jsx("div",{children:y.jsx("img",{src:KT,alt:"",style:{width:"250px"}})}),y.jsx("div",{children:y.jsx("img",{src:XT,alt:"",style:{width:"250px"}})})]})]})]})},n6=U.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  color: white;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 100px;
`,i6=U.div``;function a6(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"},child:[]}]})(e)}function hh(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"},child:[]}]})(e)}function gh(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"},child:[]}]})(e)}function o6(e){return Lt({attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z",fill:"currentColor"},child:[]}]})(e)}function l6(e){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}class Js{constructor(r=0,i="Network Error"){this.status=r,this.text=i}}const s6=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,r)=>Promise.resolve(localStorage.setItem(e,r)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},ht={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:s6()},xh=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},u6=(e,r="https://api.emailjs.com")=>{if(!e)return;const i=xh(e);ht.publicKey=i.publicKey,ht.blockHeadless=i.blockHeadless,ht.storageProvider=i.storageProvider,ht.blockList=i.blockList,ht.limitRate=i.limitRate,ht.origin=i.origin||r},h5=async(e,r,i={})=>{const a=await fetch(ht.origin+e,{method:"POST",headers:i,body:r}),l=await a.text(),s=new Js(a.status,l);if(a.ok)return s;throw s},g5=(e,r,i)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||typeof r!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||typeof i!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},d6=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},x5=e=>e.webdriver||!e.languages||e.languages.length===0,v5=()=>new Js(451,"Unavailable For Headless Browser"),c6=(e,r)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof r!="string")throw"The BlockList watchVariable has to be a string"},p6=e=>{var r;return!((r=e.list)!=null&&r.length)||!e.watchVariable},f6=(e,r)=>e instanceof FormData?e.get(r):e[r],b5=(e,r)=>{if(p6(e))return!1;c6(e.list,e.watchVariable);const i=f6(r,e.watchVariable);return typeof i!="string"?!1:e.list.includes(i)},y5=()=>new Js(403,"Forbidden"),m6=(e,r)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(r&&typeof r!="string")throw"The LimitRate ID has to be a non-empty string"},h6=async(e,r,i)=>{const a=Number(await i.get(e)||0);return r-Date.now()+a},w5=async(e,r,i)=>{if(!r.throttle||!i)return!1;m6(r.throttle,r.id);const a=r.id||e;return await h6(a,r.throttle,i)>0?!0:(await i.set(a,Date.now().toString()),!1)},k5=()=>new Js(429,"Too Many Requests"),g6=async(e,r,i,a)=>{const l=xh(a),s=l.publicKey||ht.publicKey,u=l.blockHeadless||ht.blockHeadless,c=l.storageProvider||ht.storageProvider,p={...ht.blockList,...l.blockList},m={...ht.limitRate,...l.limitRate};return u&&x5(navigator)?Promise.reject(v5()):(g5(s,e,r),d6(i),i&&b5(p,i)?Promise.reject(y5()):await w5(location.pathname,m,c)?Promise.reject(k5()):h5("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:e,template_id:r,template_params:i}),{"Content-type":"application/json"}))},x6=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},v6=e=>typeof e=="string"?document.querySelector(e):e,b6=async(e,r,i,a)=>{const l=xh(a),s=l.publicKey||ht.publicKey,u=l.blockHeadless||ht.blockHeadless,c=ht.storageProvider||l.storageProvider,p={...ht.blockList,...l.blockList},m={...ht.limitRate,...l.limitRate};if(u&&x5(navigator))return Promise.reject(v5());const x=v6(i);g5(s,e,r),x6(x);const g=new FormData(x);return b5(p,g)?Promise.reject(y5()):await w5(location.pathname,m,c)?Promise.reject(k5()):(g.append("lib_version","4.4.1"),g.append("service_id",e),g.append("template_id",r),g.append("user_id",s),h5("/api/v1.0/email/send-form",g))},y6={init:u6,send:g6,sendForm:b6,EmailJSResponseStatus:Js},w6=()=>{const e=de.useRef(),{t:r}=lt(),i=a=>{a.preventDefault(),y6.sendForm("service_q8jaors","template_h36besp",e.current,{publicKey:"8XQKncXT0Yo_961pD"}).then(()=>{console.log("SUCCESS!")},l=>{console.log("FAILED...",l.text)}),a.target.reset()};return y.jsxs(k6,{children:[y.jsxs(S6,{children:[y.jsx("h1",{children:r("kontak")}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",paddingTop:"2rem"},children:[y.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[y.jsxs("span",{children:[r("lokasi menu.alamat")," :"]}),y.jsx("p",{children:r("detail lokasi.alamat")})]}),y.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[y.jsxs("span",{children:[r("lokasi menu.telepon")," :"]}),y.jsx("p",{children:r("detail lokasi.telepon")})]}),y.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[y.jsxs("span",{children:[r("lokasi menu.email")," :"]}),y.jsx("p",{children:r("detail lokasi.email")})]})]}),y.jsx("div",{style:{paddingTop:"2rem"},children:y.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.3677474913964!2d111.6159355483724!3d-7.581294926404177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79b9002d70be67%3A0xd403f77394fbacf7!2sAisah!5e0!3m2!1sen!2sid!4v1717997432419!5m2!1sen!2sid",width:"600",height:"450",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})})]}),y.jsxs(E6,{children:[y.jsx(R6,{children:y.jsxs("form",{ref:e,onSubmit:i,children:[y.jsxs("div",{className:"name",children:[y.jsx("span",{children:y.jsx(o6,{})}),y.jsx("input",{type:"text",placeholder:r("Umpan.Nama Lengkap"),name:"user_name",required:!0})]}),y.jsxs("div",{className:"email",children:[y.jsx("span",{children:y.jsx(a6,{})}),y.jsx("input",{type:"email",placeholder:r("Umpan.Email"),name:"user_email",required:!0})]}),y.jsxs("div",{className:"message",children:[y.jsx("span",{className:"messageIcon",children:y.jsx(l6,{})}),y.jsx("textarea",{cols:"30",rows:"10",placeholder:r("Umpan.Pesan"),name:"message"})]}),y.jsx("button",{type:"submit",children:r("kirim")})]})}),y.jsxs(C6,{children:[y.jsx("p",{children:r("Media Sosial")}),y.jsxs("div",{className:"social-icons",children:[y.jsx("span",{children:y.jsx("a",{href:"#",children:y.jsx(I2,{className:"ig"})})}),y.jsx("span",{children:y.jsx("a",{href:"#",children:y.jsx(D2,{className:"linkedin"})})}),y.jsx("span",{children:y.jsx("a",{href:"#",children:y.jsx(z2,{className:"github"})})})]})]})]})]})},k6=U.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap:2rem;
  justify-content: space-between;
  color: white;
`;U.div``;U.div``;const S6=U.div`
  /* border: 1px solid red; */
  width: 50rem;
  height: 100%;
`;U.div`
  /* border: 1px solid red; */
  width: 20rem;
  height: 20rem;
  h1 {
    text-align: center;
  }
`;const E6=U.div`
  /* border: 1px solid red; */
  width: 50rem;
  height: 100%;
`;U.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 4rem;
  .miditem {
    display: flex;
    gap: 1rem;
  }
`;const R6=U.div`
  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .subject,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }

`,C6=U.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    @media(max-width: 640px){
            /* width: 50rem; */
            /* font-size: 1px; */
            /* display: none; */
            /* width:100px; */
            padding-right: 130px;
        }
    p{
        font-size: 0.9rem;
        @media(max-width:690px){
            width: 20rem;
        }
        @media(max-width: 640px){
            /* width: 50rem; */
            /* font-size: 1px; */
            display: none;
            /* width:100px; */
        }

    }
    .social-icons{
        display: flex;
        gap: 2rem;
        @media(max-width: 640px){
            /* width: 50rem; */
            /* font-size: 1px; */
            /* gap: 0; */
            padding-left: 23px;
            /* width:100px; */
        }
        span{
            width: 3rem;
            height: 3rem;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background-color: #01be96;
            position: relative;
            transition: transform 400ms ease;
            &:hover{
                transform: rotate(360deg);
            }
            .ig{
                font-size: 25px;
            }
            .linkedin{
                font-size: 25px;   
            }
            .github{
                font-size: 25px;
            }
        }
        *{
            color: #fff;
            position: absolute;
            top: 25%;
            left: 25%;
            transform: translateY(-50%, -50%);
        }
    }
`,P6=({data:e,isVisible:r})=>y.jsxs(M6,{percent:e.percent,isVisible:r,children:[y.jsx(q6,{children:y.jsx(A6,{children:y.jsx("img",{src:e.img,alt:""})})}),y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("defs",{children:y.jsxs("linearGradient",{id:"GradientColorWeb",children:[y.jsx("stop",{offset:"0%",stopColor:"#DA22FF"}),y.jsx("stop",{offset:"100%",stopColor:"#9733EE"})]})}),y.jsx("circle",{className:"web-circle",strokeLinecap:"round"})]})]}),S5=70,Pc=2*Math.PI*S5,E5=60,Oc=2*Math.PI*E5,O6=e=>Pc-e/100*Pc,_6=e=>Oc-e/100*Oc,j6=e=>Vr`
  100% { stroke-dashoffset: ${O6(e)}; }
`,T6=e=>Vr`
  100% { stroke-dashoffset: ${_6(e)}; }
`,M6=U.div`
@media (max-width:1920px) {
  width: 160px;
  height: 160px;
  position: relative;

  circle.web-circle {
    fill: none;
    stroke: url(#GradientColorWeb);
    stroke-width: 20px;

    stroke-dasharray: ${Pc};
    stroke-dashoffset: ${Pc};

    animation: ${({percent:e,isVisible:r})=>r?j6(e):"none"} 2s linear forwards;

    r: ${S5};
    cx: 80;
    cy: 80;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 160px;
  }
}
@media (max-width:1115px) {
  width: 140px;
  height: 140px;
  position: relative;

  circle.web-circle {
    fill: none;
    stroke: url(#GradientColorWeb);
    stroke-width: 20px;

    stroke-dasharray: ${Oc};
    stroke-dashoffset: ${Oc};

    animation: ${({percent:e,isVisible:r})=>r?T6(e):"none"} 2s linear forwards;

    r: ${E5};
    cx: 70;
    cy: 70;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
  }
}
`,q6=U.div`
@media (max-width:1920px) {
  height: 160px;
  width: 160px;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
}
@media (max-width:1115px) {
  height: 140px;
  width: 140px;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
}
`,A6=U.div`
@media (max-width:1920px) {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7);

  img {
    height: 70px;
    width: 70px;
  }
}
@media (max-width:1115px) {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7);

  img {
    height: 50px;
    width: 50px;
  }
}
`,L6=({data:e,isVisible:r})=>{const[i,a]=de.useState(0);return de.useEffect(()=>{if(r){let l=0;const s=e.percent;if(l===s)return;const u=2/s,c=setInterval(()=>{l+=1,a(l),l===s&&clearInterval(c)},u);return()=>clearInterval(c)}},[e.percent,r]),y.jsxs(N6,{children:[y.jsx(P6,{data:e,isVisible:r}),y.jsxs(D6,{children:[y.jsx(I6,{children:y.jsxs("h4",{children:[i," %"]})}),y.jsx(z6,{children:y.jsx("h5",{children:e.title})})]})]})},N6=U.div`
  @media (max-width: 1920px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    /* margin */
    border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2);
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 20rem;
    height: 20rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 1115px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    /* margin */
    border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2);
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height: 15rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
`,z6=U.div``,I6=U.div``,D6=U.div`
@media (max-width:1920px) {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
@media (max-width:1115px) {
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
  font-size: 15px
}
`,B6="/assets/html-Bd6EuC2j.png",$6="/assets/js-D0Lhpf5V.png",F6="/assets/nodejs-CgiEvXSY.png",V6="/assets/expressjs-Bh8ByC9p.png",H6="/assets/mongodb-WClydO29.png",vh=[{id:1,img:`${B6}`,percent:100,title:"HTML"},{id:2,img:`${Vm}`,percent:80,title:"CSS"},{id:3,img:`${$6}`,percent:70,title:"JAVASCRIPT"},{id:4,img:`${Fm}`,percent:75,title:"REACT JS"},{id:5,img:`${Hm}`,percent:70,title:"MATERIAL UI"},{id:6,img:`${F6}`,percent:75,title:"NODE JS"},{id:7,img:`${V6}`,percent:75,title:"EXPRESS JS"},{id:8,img:`${H6}`,percent:75,title:"MONGODB"}],W6=()=>{const[e,r]=de.useState([]),[i,a]=de.useState([]),l=de.useRef([]);de.useEffect(()=>{const m=new IntersectionObserver(x=>{x.forEach(g=>{a(h=>{const w=[...h],k=l.current.indexOf(g.target);return w[k]=g.isIntersecting,w})})});return l.current.forEach(x=>{x&&m.observe(x)}),()=>{l.current&&l.current.forEach(x=>{x&&m.unobserve(x)})}},[e]),de.useEffect(()=>{r(vh)},[]);const s=1.5,u=m=>{const{className:x,onClick:g,currentSlide:h}=m;return y.jsx(y.Fragment,{children:h!==0&&y.jsx("div",{className:`${x} custom-prev`,onClick:g,children:y.jsx(hh,{})})})},c=m=>{const{className:x,onClick:g,slideCount:h,currentSlide:w}=m;return y.jsx(y.Fragment,{children:w!==h-s&&y.jsx("div",{className:`${x} custom-next`,onClick:g,children:y.jsx(gh,{})})})},p={className:"center",prevArrow:y.jsx(u,{}),nextArrow:y.jsx(c,{}),infinite:!1,speed:500,centerMode:!0,slidesToShow:1.5,slidesToScroll:1,centerPadding:"70px",rows:2,slidesPerRow:2,responsive:[{breakpoint:480,settings:{rows:2,slidesToShow:1,slidesToScroll:1,slidesPerRow:1,centerMode:!0,centerPadding:"60px"}},{breakpoint:414,settings:{rows:2,slidesToShow:1,slidesToScroll:1,slidesPerRow:1,centerMode:!0,centerPadding:"50px"}},{breakpoint:375,settings:{rows:2,slidesToShow:1,slidesToScroll:1,slidesPerRow:1,centerMode:!0,centerPadding:"40px"}},{breakpoint:320,settings:{rows:1,slidesToShow:1,slidesToScroll:1,slidesPerRow:1,centerMode:!1,centerPadding:"0px"}}]};return y.jsx(y.Fragment,{children:y.jsx("div",{className:"slider-container",children:y.jsx(Ii,{...p,children:e==null?void 0:e.map((m,x)=>y.jsx("div",{ref:g=>{l.current[x]=g},className:`skill-card ${i[x]?"visible":""}`,children:y.jsx(L6,{data:m,isVisible:i[x]})},x))})})})},U6=({data:e,isVisible:r})=>y.jsxs(G6,{percent:e.percent,isVisible:r,children:[y.jsx(X6,{children:y.jsx(Q6,{children:y.jsx("img",{src:e.img,alt:""})})}),y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("defs",{children:y.jsxs("linearGradient",{id:"GradientColorMobile",children:[y.jsx("stop",{offset:"0%",stopColor:"#DA22FF"}),y.jsx("stop",{offset:"100%",stopColor:"#9733EE"})]})}),y.jsx("circle",{className:"mobile-circle",strokeLinecap:"round"})]})]}),R5=55,_c=2*Math.PI*R5,K6=e=>_c-e/100*_c,Y6=e=>Vr`
  100% { stroke-dashoffset: ${K6(e)}; }
`,G6=U.div`
  width: 120px;
  height: 120px;
  position: relative;

  circle.mobile-circle {
    fill: none;
    stroke: url(#GradientColorMobile);
    stroke-width: 16px;

    stroke-dasharray: ${_c};
    stroke-dashoffset: ${_c};

    animation: ${({percent:e,isVisible:r})=>r?Y6(e):"none"} 2s linear forwards;

    r: ${R5};
    cx: 60;
    cy: 60;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 123px;
    height: 123px;
  }
`,X6=U.div`
  height: 120px;
  width: 120px;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.15),
    -5px -5px 8px -1px rgba(255, 255, 255, 0.7);
`,Q6=U.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7);

  img {
    height: 50px;
    width: 50px;
  }
`,Z6=({data:e,isVisible:r})=>{const[i,a]=de.useState(0);return de.useEffect(()=>{if(r){let l=0;const s=e.percent;if(l===s)return;const u=2/s,c=setInterval(()=>{l+=1,a(l),l===s&&clearInterval(c)},u);return()=>clearInterval(c)}},[e.percent,r]),y.jsxs(J6,{children:[y.jsx(U6,{data:e,isVisible:r}),y.jsxs(r8,{children:[y.jsx(t8,{children:y.jsxs("h4",{children:[i," %"]})}),y.jsx(e8,{children:y.jsx("h5",{children:e.title})})]})]})},J6=U.div`
  @media (max-width: 428px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 415px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 412px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 395px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 391px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 376px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 360px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 320px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
`,e8=U.div``,t8=U.div``,r8=U.div`
@media (max-width:428px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:415px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:412px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:395px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:391px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:376px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:360px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:320px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
`,n8=()=>{const[e,r]=de.useState([]),[i,a]=de.useState([]),l=de.useRef([]);de.useEffect(()=>{const m=new IntersectionObserver(x=>{x.forEach(g=>{a(h=>{const w=[...h],k=l.current.indexOf(g.target);return w[k]=g.isIntersecting,w})})});return l.current.forEach(x=>{x&&m.observe(x)}),()=>{l.current&&l.current.forEach(x=>{x&&m.unobserve(x)})}},[e]),de.useEffect(()=>{r(vh)},[]);const s=1.5,u=m=>{const{className:x,onClick:g,currentSlide:h}=m;return y.jsx(y.Fragment,{children:h!==0&&y.jsx("div",{className:`${x} custom-prev`,onClick:g,children:y.jsx(hh,{})})})},c=m=>{const{className:x,onClick:g,slideCount:h,currentSlide:w}=m;return y.jsx(y.Fragment,{children:w!==h-s&&y.jsx("div",{className:`${x} custom-next`,onClick:g,children:y.jsx(gh,{})})})},p={infinite:!1,speed:500,className:"center",rows:2,slidesPerRow:1,slidesToShow:1,slidesToScroll:1,centerMode:!1,centerPadding:"70px",prevArrow:y.jsx(u,{}),nextArrow:y.jsx(c,{})};return y.jsx(y.Fragment,{children:y.jsx("div",{className:"slider-container",children:y.jsx(Ii,{...p,children:e==null?void 0:e.map((m,x)=>y.jsx("div",{ref:g=>{l.current[x]=g},className:`skill-card ${i[x]?"visible":""}`,children:y.jsx(Z6,{data:m,isVisible:i[x]})},x))})})})},i8=({data:e,isVisible:r})=>y.jsxs(o8,{percent:e.percent,isVisible:r,children:[y.jsx(l8,{children:y.jsx(s8,{children:y.jsx("img",{src:e.img,alt:""})})}),y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("defs",{children:y.jsxs("linearGradient",{id:"GradientColorTablet",children:[y.jsx("stop",{offset:"0%",stopColor:"#DA22FF"}),y.jsx("stop",{offset:"100%",stopColor:"#9733EE"})]})}),y.jsx("circle",{className:"tablet-circle",strokeLinecap:"round"})]})]}),fc=60,vn=2*Math.PI*fc,a8=e=>vn-e/100*vn,hm=e=>Vr`
  100% { stroke-dashoffset: ${a8(e)}; }
`,o8=U.div`
@media (max-width:835px) and (min-width:821px) {
    width: 140px;
    height: 140px;
    position: relative;
  
    circle.tablet-circle {
      fill: none;
      stroke: url(#GradientColorTablet);
      stroke-width: 16px;
  
      stroke-dasharray: ${vn};
      stroke-dashoffset: ${vn};
  
      animation: ${({percent:e,isVisible:r})=>r?hm(e):"none"} 2s linear forwards;
  
      r: ${fc};
      cx: 70;
      cy: 70;
    }
  
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 140px;
    }
}
@media (max-width:820px) and (min-width:769px) {
    width: 140px;
    height: 140px;
    position: relative;
  
    circle.tablet-circle {
      fill: none;
      stroke: url(#GradientColorTablet);
      stroke-width: 16px;
  
      stroke-dasharray: ${vn};
      stroke-dashoffset: ${vn};
  
      animation: ${({percent:e,isVisible:r})=>r?hm(e):"none"} 2s linear forwards;
  
      r: ${fc};
      cx: 70;
      cy: 70;
    }
  
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 140px;
    }
}
@media (max-width:768px) {
    width: 140px;
    height: 140px;
    position: relative;
  
    circle.tablet-circle {
      fill: none;
      stroke: url(#GradientColorTablet);
      stroke-width: 16px;
  
      stroke-dasharray: ${vn};
      stroke-dashoffset: ${vn};
  
      animation: ${({percent:e,isVisible:r})=>r?hm(e):"none"} 2s linear forwards;
  
      r: ${fc};
      cx: 70;
      cy: 70;
    }
  
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 140px;
    }
}
`,l8=U.div`
@media (max-width:835px) and (min-width:821px) {
    height: 140px;
    width: 140px;
    padding: 21px;
    border-radius: 50%;
    box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.15),
      -5px -5px 8px -1px rgba(255, 255, 255, 0.7);
}
@media (max-width:820px) and (min-width:769px) {
    height: 140px;
    width: 140px;
    padding: 21px;
    border-radius: 50%;
    box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.15),
      -5px -5px 8px -1px rgba(255, 255, 255, 0.7);
}
@media (max-width:768px) {
    height: 140px;
    width: 140px;
    padding: 21px;
    border-radius: 50%;
    box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.15),
      -5px -5px 8px -1px rgba(255, 255, 255, 0.7);
}
`,s8=U.div`
@media (max-width:835px) and (min-width: 821px) {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    position: relative;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
      inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7);
  
    img {
      height: 50px;
      width: 50px;
    }
}
@media (max-width:820px) and (min-width: 769px) {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    position: relative;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
      inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7);
  
    img {
      height: 50px;
      width: 50px;
    }
}
@media (max-width:768px) {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    position: relative;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
      inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7);
  
    img {
      height:40px;
      width: 40px;
    }
}
`,u8=({data:e,isVisible:r})=>{const[i,a]=de.useState(0);return de.useEffect(()=>{if(r){let l=0;const s=e.percent;if(l===s)return;const u=2/s,c=setInterval(()=>{l+=1,a(l),l===s&&clearInterval(c)},u);return()=>clearInterval(c)}},[e.percent,r]),y.jsxs(d8,{children:[y.jsx(i8,{data:e,isVisible:r}),y.jsxs(f8,{children:[y.jsx(p8,{children:y.jsxs("h4",{children:[i," %"]})}),y.jsx(c8,{children:y.jsx("h5",{children:e.title})})]})]})},d8=U.div`
  /* overflow: visible !important;; */
  @media (max-width: 835px) and (min-width:821px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2);
    width: 20rem;
    height: 20rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 820px) and (min-width:769px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2);
    width: 20rem;
    height: 20rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2);
    width: 20rem;
    height: 20rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
`,c8=U.div``,p8=U.div``,f8=U.div`
  /* @media (max-width: 1114px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    display: none;
  } */
  @media (max-width: 835px) and (min-width:821px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    /* display: none; */
  }
  @media (max-width: 820px) and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    /* display: none; */
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    
    /* display: none; */
  }
`,m8=()=>{const[e,r]=de.useState([]),[i,a]=de.useState([]),l=de.useRef([]);de.useEffect(()=>{const m=new IntersectionObserver(x=>{x.forEach(g=>{a(h=>{const w=[...h],k=l.current.indexOf(g.target);return w[k]=g.isIntersecting,w})})});return l.current.forEach(x=>{x&&m.observe(x)}),()=>{l.current&&l.current.forEach(x=>{x&&m.unobserve(x)})}},[e]),de.useEffect(()=>{r(vh)},[]);const s=1.5,u=m=>{const{className:x,onClick:g,currentSlide:h}=m;return y.jsx(y.Fragment,{children:h!==0&&y.jsx("div",{className:`${x} custom-prev`,onClick:g,children:y.jsx(hh,{})})})},c=m=>{const{className:x,onClick:g,slideCount:h,currentSlide:w}=m;return y.jsx(y.Fragment,{children:w!==h-s&&y.jsx("div",{className:`${x} custom-next`,onClick:g,children:y.jsx(gh,{})})})},p={infinite:!1,speed:500,className:"center",rows:2,slidesPerRow:1,slidesToShow:1.8,slidesToScroll:1,centerMode:!1,centerPadding:"40px",prevArrow:y.jsx(u,{}),nextArrow:y.jsx(c,{})};return y.jsx(y.Fragment,{children:y.jsx("div",{className:"slider-container",children:y.jsx(Ii,{...p,children:e==null?void 0:e.map((m,x)=>y.jsx("div",{ref:g=>{l.current[x]=g},className:`skill-card ${i[x]?"visible":""}`,children:y.jsx(u8,{data:m,isVisible:i[x]})},x))})})})},h8=()=>y.jsxs("div",{children:[y.jsx(g8,{children:y.jsx(W6,{})}),y.jsx(x8,{children:y.jsx(n8,{})}),y.jsx(v8,{children:y.jsx(m8,{})})]}),g8=U.div`
  display: block;
  /* TABLET RESPONSIVE */
  @media (max-width:1114px) {
    display: none;
  }
  @media (max-width:835px) {
    display: none;
  }
  @media (max-width:820px) {
    display: none;
  }
  @media (max-width:768px) {
    display: none;
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: none;
  }
  @media (max-width: 415px) {
    display: none;
  }
  @media (max-width: 412px) {
    display: none;
  }
  @media (max-width: 395px) {
    display: none;
  }
  @media (max-width: 391px) {
    display: none;
  }
  @media (max-width: 376px) {
    display: none;
  }
  @media (max-width: 360px) {
    display: none;
  }
  @media (max-width:320px) {
    display: none;
  }
  `,x8=U.div`
  display: none;

  @media (max-width: 428px) {
    display: block;
  }

  @media (max-width: 415px) {
    display: block;
  }

  @media (max-width: 412px) {
    display: block;
  }
  @media (max-width: 395px) {
    display: block;
  }

  @media (max-width: 391px) {
    display: block;
  }
  @media (max-width: 376px) {
    display: block;
  }
  @media (max-width: 360px) {
    display: block;
  }
  @media (max-width: 320px) {
    display: block;
  }
`,v8=U.div`
  display: none;
  @media (max-width:1114px) {
    display: block;
  }
  @media (max-width:835px) {
    display: block;
  }
  @media (max-width:820px) {
    display: block;
  }
  @media (max-width:768px) {
    display: block;
  }

  /* MOBILE DISPLAY */
   @media (max-width: 428px) {
    display: none;
  }
  @media (max-width: 415px) {
    display: none;
  }
  @media (max-width: 412px) {
    display: none;
  }
  @media (max-width: 395px) {
    display: none;
  }
  @media (max-width: 391px) {
    display: none;
  }
  @media (max-width: 376px) {
    display: none;
  }
  @media (max-width: 360px) {
    display: none;
  }
  @media (max-width:320px) {
    display: none;
  }
`,b8="/assets/image1-CI3KRseI.jpg",y8="/assets/image2-uxWYrICq.jpg",w8="/assets/image3-WSoNiOXE.jpg",k8="/assets/image4-Arp843cl.jpg",S8="/assets/image5-D669y8FY.jpeg",E8="/assets/image6--VRbevRL.jpg",R8="/assets/image7-iu0N2pYG.jpg",C8="/assets/image8-DFmFIDny.jpeg",P8="/assets/image9-DCRnkF8G.jpeg",O8="/assets/image10-CM9awJ-u.jpg",_8="/assets/image11-jT9iRUiJ.jpg",j8="/assets/image12-DlATXjlv.jpg",T8="/assets/image13-B53AQmy3.jpg",M8="/assets/image14-CyGDJvhl.jpg",q8="/assets/image15-DjeLvG65.jpg",A8="/assets/image16-DzuJhidb.jpg",L8="/assets/image17-56TJvUDE.jpg",N8="/assets/image18-C35FCknJ.jpg",z8="/assets/image19-CIy_IkQ-.jpg",I8="/assets/image20-DPETbqYL.jpg",D8="/assets/image21-B6D2MVJ1.jpg",B8="/assets/image22-_xsR3Wxu.jpg",$8="/assets/image23-BPGYw3Jo.jpg",F8="/assets/image24-CMXlqonw.jpg",V8="/assets/image25-CYS_XFY3.jpg",H8="/assets/image26-9otTzYNk.jpg",W8="/assets/image27-CSKGsbsd.jpg",U8="/assets/image28-g5mH7Vhb.jpg",K8="/assets/image29-CENUgY4M.jpg",Y8="/assets/image30-ivfcNq5j.jpg",G8="/assets/image31-B9oBV2Dq.jpg",X8="/assets/image32-BN4T_R5D.jpg",Q8="/assets/image33-DGdF2iNE.jpg",Z8="/assets/video1-GK9inK4W.mp4",J8="/assets/video2-CFRSlNUd.mp4",e9="/assets/video3-CH-bIfyd.mp4",t9="/assets/video4-C67Mnr5Z.mp4",r9="/assets/video5-8QH0QZrB.mp4",n9="/assets/video6-D0NM0gVt.mp4",i9="/assets/video7-B5EmduCY.mp4",a9="/assets/video8-Dks0fzc-.mp4";var _d={},br={},mc={exports:{}};mc.exports;var Vv;function C5(){return Vv||(Vv=1,(function(e){const i=(s=0)=>u=>`\x1B[${38+s};5;${u}m`,a=(s=0)=>(u,c,p)=>`\x1B[${38+s};2;${u};${c};${p}m`;function l(){const s=new Map,u={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};u.color.gray=u.color.blackBright,u.bgColor.bgGray=u.bgColor.bgBlackBright,u.color.grey=u.color.blackBright,u.bgColor.bgGrey=u.bgColor.bgBlackBright;for(const[c,p]of Object.entries(u)){for(const[m,x]of Object.entries(p))u[m]={open:`\x1B[${x[0]}m`,close:`\x1B[${x[1]}m`},p[m]=u[m],s.set(x[0],x[1]);Object.defineProperty(u,c,{value:p,enumerable:!1})}return Object.defineProperty(u,"codes",{value:s,enumerable:!1}),u.color.close="\x1B[39m",u.bgColor.close="\x1B[49m",u.color.ansi256=i(),u.color.ansi16m=a(),u.bgColor.ansi256=i(10),u.bgColor.ansi16m=a(10),Object.defineProperties(u,{rgbToAnsi256:{value:(c,p,m)=>c===p&&p===m?c<8?16:c>248?231:Math.round((c-8)/247*24)+232:16+36*Math.round(c/255*5)+6*Math.round(p/255*5)+Math.round(m/255*5),enumerable:!1},hexToRgb:{value:c=>{const p=/(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(c.toString(16));if(!p)return[0,0,0];let{colorString:m}=p.groups;m.length===3&&(m=m.split("").map(g=>g+g).join(""));const x=Number.parseInt(m,16);return[x>>16&255,x>>8&255,x&255]},enumerable:!1},hexToAnsi256:{value:c=>u.rgbToAnsi256(...u.hexToRgb(c)),enumerable:!1}}),u}Object.defineProperty(e,"exports",{enumerable:!0,get:l})})(mc)),mc.exports}var $n={},Hv;function Hc(){if(Hv)return $n;Hv=1,Object.defineProperty($n,"__esModule",{value:!0}),$n.printIteratorEntries=r,$n.printIteratorValues=i,$n.printListItems=a,$n.printObjectProperties=l;const e=(s,u)=>{const c=Object.keys(s).sort(u);return Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(s).forEach(p=>{Object.getOwnPropertyDescriptor(s,p).enumerable&&c.push(p)}),c};function r(s,u,c,p,m,x,g=": "){let h="",w=s.next();if(!w.done){h+=u.spacingOuter;const k=c+u.indent;for(;!w.done;){const S=x(w.value[0],u,k,p,m),M=x(w.value[1],u,k,p,m);h+=k+S+g+M,w=s.next(),w.done?u.min||(h+=","):h+=","+u.spacingInner}h+=u.spacingOuter+c}return h}function i(s,u,c,p,m,x){let g="",h=s.next();if(!h.done){g+=u.spacingOuter;const w=c+u.indent;for(;!h.done;)g+=w+x(h.value,u,w,p,m),h=s.next(),h.done?u.min||(g+=","):g+=","+u.spacingInner;g+=u.spacingOuter+c}return g}function a(s,u,c,p,m,x){let g="";if(s.length){g+=u.spacingOuter;const h=c+u.indent;for(let w=0;w<s.length;w++)g+=h,w in s&&(g+=x(s[w],u,h,p,m)),w<s.length-1?g+=","+u.spacingInner:u.min||(g+=",");g+=u.spacingOuter+c}return g}function l(s,u,c,p,m,x){let g="";const h=e(s,u.compareKeys);if(h.length){g+=u.spacingOuter;const w=c+u.indent;for(let k=0;k<h.length;k++){const S=h[k],M=x(S,u,w,p,m),O=x(s[S],u,w,p,m);g+=w+M+": "+O,k<h.length-1?g+=","+u.spacingInner:u.min||(g+=",")}g+=u.spacingOuter+c}return g}return $n}var Mr={},Wv;function o9(){if(Wv)return Mr;Wv=1,Object.defineProperty(Mr,"__esModule",{value:!0}),Mr.test=Mr.serialize=Mr.default=void 0;var e=Hc(),r=(function(){return typeof globalThis<"u"?globalThis:typeof r<"u"?r:typeof self<"u"?self:typeof window<"u"?window:Function("return this")()})(),i=r["jest-symbol-do-not-touch"]||r.Symbol;const a=typeof i=="function"&&i.for?i.for("jest.asymmetricMatcher"):1267621,l=" ",s=(m,x,g,h,w,k)=>{const S=m.toString();return S==="ArrayContaining"||S==="ArrayNotContaining"?++h>x.maxDepth?"["+S+"]":S+l+"["+(0,e.printListItems)(m.sample,x,g,h,w,k)+"]":S==="ObjectContaining"||S==="ObjectNotContaining"?++h>x.maxDepth?"["+S+"]":S+l+"{"+(0,e.printObjectProperties)(m.sample,x,g,h,w,k)+"}":S==="StringMatching"||S==="StringNotMatching"||S==="StringContaining"||S==="StringNotContaining"?S+l+k(m.sample,x,g,h,w):m.toAsymmetricMatcher()};Mr.serialize=s;const u=m=>m&&m.$$typeof===a;Mr.test=u;var p={serialize:s,test:u};return Mr.default=p,Mr}var qr={},gm,Uv;function l9(){return Uv||(Uv=1,gm=({onlyFirst:e=!1}={})=>{const r=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(r,e?void 0:"g")}),gm}var Kv;function s9(){if(Kv)return qr;Kv=1,Object.defineProperty(qr,"__esModule",{value:!0}),qr.test=qr.serialize=qr.default=void 0;var e=i(l9()),r=i(C5());function i(p){return p&&p.__esModule?p:{default:p}}const a=p=>p.replace((0,e.default)(),m=>{switch(m){case r.default.red.close:case r.default.green.close:case r.default.cyan.close:case r.default.gray.close:case r.default.white.close:case r.default.yellow.close:case r.default.bgRed.close:case r.default.bgGreen.close:case r.default.bgYellow.close:case r.default.inverse.close:case r.default.dim.close:case r.default.bold.close:case r.default.reset.open:case r.default.reset.close:return"</>";case r.default.red.open:return"<red>";case r.default.green.open:return"<green>";case r.default.cyan.open:return"<cyan>";case r.default.gray.open:return"<gray>";case r.default.white.open:return"<white>";case r.default.yellow.open:return"<yellow>";case r.default.bgRed.open:return"<bgRed>";case r.default.bgGreen.open:return"<bgGreen>";case r.default.bgYellow.open:return"<bgYellow>";case r.default.inverse.open:return"<inverse>";case r.default.dim.open:return"<dim>";case r.default.bold.open:return"<bold>";default:return""}}),l=p=>typeof p=="string"&&!!p.match((0,e.default)());qr.test=l;const s=(p,m,x,g,h,w)=>w(a(p),m,x,g,h);qr.serialize=s;var c={serialize:s,test:l};return qr.default=c,qr}var Ar={},Yv;function u9(){if(Yv)return Ar;Yv=1,Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.test=Ar.serialize=Ar.default=void 0;var e=Hc();const r=" ",i=["DOMStringMap","NamedNodeMap"],a=/^(HTML\w*Collection|NodeList)$/,l=x=>i.indexOf(x)!==-1||a.test(x),s=x=>x&&x.constructor&&!!x.constructor.name&&l(x.constructor.name);Ar.test=s;const u=x=>x.constructor.name==="NamedNodeMap",c=(x,g,h,w,k,S)=>{const M=x.constructor.name;return++w>g.maxDepth?"["+M+"]":(g.min?"":M+r)+(i.indexOf(M)!==-1?"{"+(0,e.printObjectProperties)(u(x)?Array.from(x).reduce((O,A)=>(O[A.name]=A.value,O),{}):{...x},g,h,w,k,S)+"}":"["+(0,e.printListItems)(Array.from(x),g,h,w,k,S)+"]")};Ar.serialize=c;var m={serialize:c,test:s};return Ar.default=m,Ar}var Lr={},St={},jd={},Gv;function d9(){if(Gv)return jd;Gv=1,Object.defineProperty(jd,"__esModule",{value:!0}),jd.default=e;function e(r){return r.replace(/</g,"&lt;").replace(/>/g,"&gt;")}return jd}var Xv;function bh(){if(Xv)return St;Xv=1,Object.defineProperty(St,"__esModule",{value:!0}),St.printText=St.printProps=St.printElementAsLeaf=St.printElement=St.printComment=St.printChildren=void 0;var e=r(d9());function r(p){return p&&p.__esModule?p:{default:p}}const i=(p,m,x,g,h,w,k)=>{const S=g+x.indent,M=x.colors;return p.map(O=>{const A=m[O];let z=k(A,x,S,h,w);return typeof A!="string"&&(z.indexOf(`
`)!==-1&&(z=x.spacingOuter+S+z+x.spacingOuter+g),z="{"+z+"}"),x.spacingInner+g+M.prop.open+O+M.prop.close+"="+M.value.open+z+M.value.close}).join("")};St.printProps=i;const a=(p,m,x,g,h,w)=>p.map(k=>m.spacingOuter+x+(typeof k=="string"?l(k,m):w(k,m,x,g,h))).join("");St.printChildren=a;const l=(p,m)=>{const x=m.colors.content;return x.open+(0,e.default)(p)+x.close};St.printText=l;const s=(p,m)=>{const x=m.colors.comment;return x.open+"<!--"+(0,e.default)(p)+"-->"+x.close};St.printComment=s;const u=(p,m,x,g,h)=>{const w=g.colors.tag;return w.open+"<"+p+(m&&w.close+m+g.spacingOuter+h+w.open)+(x?">"+w.close+x+g.spacingOuter+h+w.open+"</"+p:(m&&!g.min?"":" ")+"/")+">"+w.close};St.printElement=u;const c=(p,m)=>{const x=m.colors.tag;return x.open+"<"+p+x.close+" …"+x.open+" />"+x.close};return St.printElementAsLeaf=c,St}var Qv;function c9(){if(Qv)return Lr;Qv=1,Object.defineProperty(Lr,"__esModule",{value:!0}),Lr.test=Lr.serialize=Lr.default=void 0;var e=bh();const r=1,i=3,a=8,l=11,s=/^((HTML|SVG)\w*)?Element$/,u=S=>{try{return typeof S.hasAttribute=="function"&&S.hasAttribute("is")}catch{return!1}},c=S=>{const M=S.constructor.name,{nodeType:O,tagName:A}=S,z=typeof A=="string"&&A.includes("-")||u(S);return O===r&&(s.test(M)||z)||O===i&&M==="Text"||O===a&&M==="Comment"||O===l&&M==="DocumentFragment"},p=S=>{var M;return(S==null||(M=S.constructor)===null||M===void 0?void 0:M.name)&&c(S)};Lr.test=p;function m(S){return S.nodeType===i}function x(S){return S.nodeType===a}function g(S){return S.nodeType===l}const h=(S,M,O,A,z,B)=>{if(m(S))return(0,e.printText)(S.data,M);if(x(S))return(0,e.printComment)(S.data,M);const j=g(S)?"DocumentFragment":S.tagName.toLowerCase();return++A>M.maxDepth?(0,e.printElementAsLeaf)(j,M):(0,e.printElement)(j,(0,e.printProps)(g(S)?[]:Array.from(S.attributes).map(C=>C.name).sort(),g(S)?{}:Array.from(S.attributes).reduce((C,P)=>(C[P.name]=P.value,C),{}),M,O+M.indent,A,z,B),(0,e.printChildren)(Array.prototype.slice.call(S.childNodes||S.children),M,O+M.indent,A,z,B),M,O)};Lr.serialize=h;var k={serialize:h,test:p};return Lr.default=k,Lr}var Nr={},Zv;function p9(){if(Zv)return Nr;Zv=1,Object.defineProperty(Nr,"__esModule",{value:!0}),Nr.test=Nr.serialize=Nr.default=void 0;var e=Hc();const r="@@__IMMUTABLE_ITERABLE__@@",i="@@__IMMUTABLE_LIST__@@",a="@@__IMMUTABLE_KEYED__@@",l="@@__IMMUTABLE_MAP__@@",s="@@__IMMUTABLE_ORDERED__@@",u="@@__IMMUTABLE_RECORD__@@",c="@@__IMMUTABLE_SEQ__@@",p="@@__IMMUTABLE_SET__@@",m="@@__IMMUTABLE_STACK__@@",x=P=>"Immutable."+P,g=P=>"["+P+"]",h=" ",w="…",k=(P,L,q,b,W,Y,N)=>++b>L.maxDepth?g(x(N)):x(N)+h+"{"+(0,e.printIteratorEntries)(P.entries(),L,q,b,W,Y)+"}";function S(P){let L=0;return{next(){if(L<P._keys.length){const q=P._keys[L++];return{done:!1,value:[q,P.get(q)]}}return{done:!0,value:void 0}}}}const M=(P,L,q,b,W,Y)=>{const N=x(P._name||"Record");return++b>L.maxDepth?g(N):N+h+"{"+(0,e.printIteratorEntries)(S(P),L,q,b,W,Y)+"}"},O=(P,L,q,b,W,Y)=>{const N=x("Seq");return++b>L.maxDepth?g(N):P[a]?N+h+"{"+(P._iter||P._object?(0,e.printIteratorEntries)(P.entries(),L,q,b,W,Y):w)+"}":N+h+"["+(P._iter||P._array||P._collection||P._iterable?(0,e.printIteratorValues)(P.values(),L,q,b,W,Y):w)+"]"},A=(P,L,q,b,W,Y,N)=>++b>L.maxDepth?g(x(N)):x(N)+h+"["+(0,e.printIteratorValues)(P.values(),L,q,b,W,Y)+"]",z=(P,L,q,b,W,Y)=>P[l]?k(P,L,q,b,W,Y,P[s]?"OrderedMap":"Map"):P[i]?A(P,L,q,b,W,Y,"List"):P[p]?A(P,L,q,b,W,Y,P[s]?"OrderedSet":"Set"):P[m]?A(P,L,q,b,W,Y,"Stack"):P[c]?O(P,L,q,b,W,Y):M(P,L,q,b,W,Y);Nr.serialize=z;const B=P=>P&&(P[r]===!0||P[u]===!0);Nr.test=B;var C={serialize:z,test:B};return Nr.default=C,Nr}var zr={},xm={exports:{}},ze={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function f9(){if(Jv)return ze;Jv=1;var e=60103,r=60106,i=60107,a=60108,l=60114,s=60109,u=60110,c=60112,p=60113,m=60120,x=60115,g=60116,h=60121,w=60122,k=60117,S=60129,M=60131;if(typeof Symbol=="function"&&Symbol.for){var O=Symbol.for;e=O("react.element"),r=O("react.portal"),i=O("react.fragment"),a=O("react.strict_mode"),l=O("react.profiler"),s=O("react.provider"),u=O("react.context"),c=O("react.forward_ref"),p=O("react.suspense"),m=O("react.suspense_list"),x=O("react.memo"),g=O("react.lazy"),h=O("react.block"),w=O("react.server.block"),k=O("react.fundamental"),S=O("react.debug_trace_mode"),M=O("react.legacy_hidden")}function A(N){if(typeof N=="object"&&N!==null){var F=N.$$typeof;switch(F){case e:switch(N=N.type,N){case i:case l:case a:case p:case m:return N;default:switch(N=N&&N.$$typeof,N){case u:case c:case g:case x:case s:return N;default:return F}}case r:return F}}}var z=s,B=e,j=c,C=i,P=g,L=x,q=r,b=l,W=a,Y=p;return ze.ContextConsumer=u,ze.ContextProvider=z,ze.Element=B,ze.ForwardRef=j,ze.Fragment=C,ze.Lazy=P,ze.Memo=L,ze.Portal=q,ze.Profiler=b,ze.StrictMode=W,ze.Suspense=Y,ze.isAsyncMode=function(){return!1},ze.isConcurrentMode=function(){return!1},ze.isContextConsumer=function(N){return A(N)===u},ze.isContextProvider=function(N){return A(N)===s},ze.isElement=function(N){return typeof N=="object"&&N!==null&&N.$$typeof===e},ze.isForwardRef=function(N){return A(N)===c},ze.isFragment=function(N){return A(N)===i},ze.isLazy=function(N){return A(N)===g},ze.isMemo=function(N){return A(N)===x},ze.isPortal=function(N){return A(N)===r},ze.isProfiler=function(N){return A(N)===l},ze.isStrictMode=function(N){return A(N)===a},ze.isSuspense=function(N){return A(N)===p},ze.isValidElementType=function(N){return typeof N=="string"||typeof N=="function"||N===i||N===l||N===S||N===a||N===p||N===m||N===M||typeof N=="object"&&N!==null&&(N.$$typeof===g||N.$$typeof===x||N.$$typeof===s||N.$$typeof===u||N.$$typeof===c||N.$$typeof===k||N.$$typeof===h||N[0]===w)},ze.typeOf=A,ze}var e1;function m9(){return e1||(e1=1,xm.exports=f9()),xm.exports}var t1;function h9(){if(t1)return zr;t1=1,Object.defineProperty(zr,"__esModule",{value:!0}),zr.test=zr.serialize=zr.default=void 0;var e=a(m9()),r=bh();function i(g){if(typeof WeakMap!="function")return null;var h=new WeakMap,w=new WeakMap;return(i=function(k){return k?w:h})(g)}function a(g,h){if(g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var w=i(h);if(w&&w.has(g))return w.get(g);var k={},S=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in g)if(M!=="default"&&Object.prototype.hasOwnProperty.call(g,M)){var O=S?Object.getOwnPropertyDescriptor(g,M):null;O&&(O.get||O.set)?Object.defineProperty(k,M,O):k[M]=g[M]}return k.default=g,w&&w.set(g,k),k}const l=(g,h=[])=>(Array.isArray(g)?g.forEach(w=>{l(w,h)}):g!=null&&g!==!1&&h.push(g),h),s=g=>{const h=g.type;if(typeof h=="string")return h;if(typeof h=="function")return h.displayName||h.name||"Unknown";if(e.isFragment(g))return"React.Fragment";if(e.isSuspense(g))return"React.Suspense";if(typeof h=="object"&&h!==null){if(e.isContextProvider(g))return"Context.Provider";if(e.isContextConsumer(g))return"Context.Consumer";if(e.isForwardRef(g)){if(h.displayName)return h.displayName;const w=h.render.displayName||h.render.name||"";return w!==""?"ForwardRef("+w+")":"ForwardRef"}if(e.isMemo(g)){const w=h.displayName||h.type.displayName||h.type.name||"";return w!==""?"Memo("+w+")":"Memo"}}return"UNDEFINED"},u=g=>{const{props:h}=g;return Object.keys(h).filter(w=>w!=="children"&&h[w]!==void 0).sort()},c=(g,h,w,k,S,M)=>++k>h.maxDepth?(0,r.printElementAsLeaf)(s(g),h):(0,r.printElement)(s(g),(0,r.printProps)(u(g),g.props,h,w+h.indent,k,S,M),(0,r.printChildren)(l(g.props.children),h,w+h.indent,k,S,M),h,w);zr.serialize=c;const p=g=>g!=null&&e.isElement(g);zr.test=p;var x={serialize:c,test:p};return zr.default=x,zr}var Ir={},r1;function g9(){if(r1)return Ir;r1=1,Object.defineProperty(Ir,"__esModule",{value:!0}),Ir.test=Ir.serialize=Ir.default=void 0;var e=bh(),r=(function(){return typeof globalThis<"u"?globalThis:typeof r<"u"?r:typeof self<"u"?self:typeof window<"u"?window:Function("return this")()})(),i=r["jest-symbol-do-not-touch"]||r.Symbol;const a=typeof i=="function"&&i.for?i.for("react.test.json"):245830487,l=m=>{const{props:x}=m;return x?Object.keys(x).filter(g=>x[g]!==void 0).sort():[]},s=(m,x,g,h,w,k)=>++h>x.maxDepth?(0,e.printElementAsLeaf)(m.type,x):(0,e.printElement)(m.type,m.props?(0,e.printProps)(l(m),m.props,x,g+x.indent,h,w,k):"",m.children?(0,e.printChildren)(m.children,x,g+x.indent,h,w,k):"",x,g);Ir.serialize=s;const u=m=>m&&m.$$typeof===a;Ir.test=u;var p={serialize:s,test:u};return Ir.default=p,Ir}var n1;function x9(){if(n1)return br;n1=1,Object.defineProperty(br,"__esModule",{value:!0}),br.default=br.DEFAULT_OPTIONS=void 0,br.format=re,br.plugins=void 0;var e=m(C5()),r=Hc(),i=m(o9()),a=m(s9()),l=m(u9()),s=m(c9()),u=m(p9()),c=m(h9()),p=m(g9());function m(V){return V&&V.__esModule?V:{default:V}}const x=Object.prototype.toString,g=Date.prototype.toISOString,h=Error.prototype.toString,w=RegExp.prototype.toString,k=V=>typeof V.constructor=="function"&&V.constructor.name||"Object",S=V=>typeof window<"u"&&V===window,M=/^Symbol\((.*)\)(.*)$/,O=/\n/gi;class A extends Error{constructor(oe,fe){super(oe),this.stack=fe,this.name=this.constructor.name}}function z(V){return V==="[object Array]"||V==="[object ArrayBuffer]"||V==="[object DataView]"||V==="[object Float32Array]"||V==="[object Float64Array]"||V==="[object Int8Array]"||V==="[object Int16Array]"||V==="[object Int32Array]"||V==="[object Uint8Array]"||V==="[object Uint8ClampedArray]"||V==="[object Uint16Array]"||V==="[object Uint32Array]"}function B(V){return Object.is(V,-0)?"-0":String(V)}function j(V){return`${V}n`}function C(V,oe){return oe?"[Function "+(V.name||"anonymous")+"]":"[Function]"}function P(V){return String(V).replace(M,"Symbol($1)")}function L(V){return"["+h.call(V)+"]"}function q(V,oe,fe,ge){if(V===!0||V===!1)return""+V;if(V===void 0)return"undefined";if(V===null)return"null";const ve=typeof V;if(ve==="number")return B(V);if(ve==="bigint")return j(V);if(ve==="string")return ge?'"'+V.replace(/"|\\/g,"\\$&")+'"':'"'+V+'"';if(ve==="function")return C(V,oe);if(ve==="symbol")return P(V);const Se=x.call(V);return Se==="[object WeakMap]"?"WeakMap {}":Se==="[object WeakSet]"?"WeakSet {}":Se==="[object Function]"||Se==="[object GeneratorFunction]"?C(V,oe):Se==="[object Symbol]"?P(V):Se==="[object Date]"?isNaN(+V)?"Date { NaN }":g.call(V):Se==="[object Error]"?L(V):Se==="[object RegExp]"?fe?w.call(V).replace(/[\\^$*+?.()|[\]{}]/g,"\\$&"):w.call(V):V instanceof Error?L(V):null}function b(V,oe,fe,ge,ve,Se){if(ve.indexOf(V)!==-1)return"[Circular]";ve=ve.slice(),ve.push(V);const Pe=++ge>oe.maxDepth,Te=oe.min;if(oe.callToJSON&&!Pe&&V.toJSON&&typeof V.toJSON=="function"&&!Se)return F(V.toJSON(),oe,fe,ge,ve,!0);const Ce=x.call(V);return Ce==="[object Arguments]"?Pe?"[Arguments]":(Te?"":"Arguments ")+"["+(0,r.printListItems)(V,oe,fe,ge,ve,F)+"]":z(Ce)?Pe?"["+V.constructor.name+"]":(Te||!oe.printBasicPrototype&&V.constructor.name==="Array"?"":V.constructor.name+" ")+"["+(0,r.printListItems)(V,oe,fe,ge,ve,F)+"]":Ce==="[object Map]"?Pe?"[Map]":"Map {"+(0,r.printIteratorEntries)(V.entries(),oe,fe,ge,ve,F," => ")+"}":Ce==="[object Set]"?Pe?"[Set]":"Set {"+(0,r.printIteratorValues)(V.values(),oe,fe,ge,ve,F)+"}":Pe||S(V)?"["+k(V)+"]":(Te||!oe.printBasicPrototype&&k(V)==="Object"?"":k(V)+" ")+"{"+(0,r.printObjectProperties)(V,oe,fe,ge,ve,F)+"}"}function W(V){return V.serialize!=null}function Y(V,oe,fe,ge,ve,Se){let Pe;try{Pe=W(V)?V.serialize(oe,fe,ge,ve,Se,F):V.print(oe,Te=>F(Te,fe,ge,ve,Se),Te=>{const Ce=ge+fe.indent;return Ce+Te.replace(O,`
`+Ce)},{edgeSpacing:fe.spacingOuter,min:fe.min,spacing:fe.spacingInner},fe.colors)}catch(Te){throw new A(Te.message,Te.stack)}if(typeof Pe!="string")throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof Pe}".`);return Pe}function N(V,oe){for(let fe=0;fe<V.length;fe++)try{if(V[fe].test(oe))return V[fe]}catch(ge){throw new A(ge.message,ge.stack)}return null}function F(V,oe,fe,ge,ve,Se){const Pe=N(oe.plugins,V);if(Pe!==null)return Y(Pe,V,oe,fe,ge,ve);const Te=q(V,oe.printFunctionName,oe.escapeRegex,oe.escapeString);return Te!==null?Te:b(V,oe,fe,ge,ve,Se)}const ie={comment:"gray",content:"reset",prop:"yellow",tag:"cyan",value:"green"},ee=Object.keys(ie),R={callToJSON:!0,compareKeys:void 0,escapeRegex:!1,escapeString:!0,highlight:!1,indent:2,maxDepth:1/0,min:!1,plugins:[],printBasicPrototype:!0,printFunctionName:!0,theme:ie};br.DEFAULT_OPTIONS=R;function te(V){if(Object.keys(V).forEach(oe=>{if(!R.hasOwnProperty(oe))throw new Error(`pretty-format: Unknown option "${oe}".`)}),V.min&&V.indent!==void 0&&V.indent!==0)throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');if(V.theme!==void 0){if(V.theme===null)throw new Error('pretty-format: Option "theme" must not be null.');if(typeof V.theme!="object")throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof V.theme}".`)}}const D=V=>ee.reduce((oe,fe)=>{const ge=V.theme&&V.theme[fe]!==void 0?V.theme[fe]:ie[fe],ve=ge&&e.default[ge];if(ve&&typeof ve.close=="string"&&typeof ve.open=="string")oe[fe]=ve;else throw new Error(`pretty-format: Option "theme" has a key "${fe}" whose value "${ge}" is undefined in ansi-styles.`);return oe},Object.create(null)),E=()=>ee.reduce((V,oe)=>(V[oe]={close:"",open:""},V),Object.create(null)),_=V=>V&&V.printFunctionName!==void 0?V.printFunctionName:R.printFunctionName,I=V=>V&&V.escapeRegex!==void 0?V.escapeRegex:R.escapeRegex,G=V=>V&&V.escapeString!==void 0?V.escapeString:R.escapeString,Z=V=>{var oe;return{callToJSON:V&&V.callToJSON!==void 0?V.callToJSON:R.callToJSON,colors:V&&V.highlight?D(V):E(),compareKeys:V&&typeof V.compareKeys=="function"?V.compareKeys:R.compareKeys,escapeRegex:I(V),escapeString:G(V),indent:V&&V.min?"":ne(V&&V.indent!==void 0?V.indent:R.indent),maxDepth:V&&V.maxDepth!==void 0?V.maxDepth:R.maxDepth,min:V&&V.min!==void 0?V.min:R.min,plugins:V&&V.plugins!==void 0?V.plugins:R.plugins,printBasicPrototype:(oe=V==null?void 0:V.printBasicPrototype)!==null&&oe!==void 0?oe:!0,printFunctionName:_(V),spacingInner:V&&V.min?" ":`
`,spacingOuter:V&&V.min?"":`
`}};function ne(V){return new Array(V+1).join(" ")}function re(V,oe){if(oe&&(te(oe),oe.plugins)){const ge=N(oe.plugins,V);if(ge!==null)return Y(ge,V,Z(oe),"",0,[])}const fe=q(V,_(oe),I(oe),G(oe));return fe!==null?fe:b(V,Z(oe),"",0,[])}const ae={AsymmetricMatcher:i.default,ConvertAnsi:a.default,DOMCollection:l.default,DOMElement:s.default,Immutable:u.default,ReactElement:c.default,ReactTestComponent:p.default};br.plugins=ae;var me=re;return br.default=me,br}var Wc=x9();const v9=Ks(Wc),b9=JE({__proto__:null,default:v9},[Wc]);var y9=Object.prototype.toString;function w9(e){return typeof e=="function"||y9.call(e)==="[object Function]"}function k9(e){var r=Number(e);return isNaN(r)?0:r===0||!isFinite(r)?r:(r>0?1:-1)*Math.floor(Math.abs(r))}var S9=Math.pow(2,53)-1;function E9(e){var r=k9(e);return Math.min(Math.max(r,0),S9)}function ur(e,r){var i=Array,a=Object(e);if(e==null)throw new TypeError("Array.from requires an array-like object - not null or undefined");for(var l=E9(a.length),s=w9(i)?Object(new i(l)):new Array(l),u=0,c;u<l;)c=a[u],s[u]=c,u+=1;return s.length=l,s}function Fs(e){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Fs(e)}function R9(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function C9(e,r){for(var i=0;i<r.length;i++){var a=r[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,P5(a.key),a)}}function P9(e,r,i){return r&&C9(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function O9(e,r,i){return r=P5(r),r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function P5(e){var r=_9(e,"string");return Fs(r)==="symbol"?r:String(r)}function _9(e,r){if(Fs(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,r);if(Fs(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var j9=(function(){function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];R9(this,e),O9(this,"items",void 0),this.items=r}return P9(e,[{key:"add",value:function(i){return this.has(i)===!1&&this.items.push(i),this}},{key:"clear",value:function(){this.items=[]}},{key:"delete",value:function(i){var a=this.items.length;return this.items=this.items.filter(function(l){return l!==i}),a!==this.items.length}},{key:"forEach",value:function(i){var a=this;this.items.forEach(function(l){i(l,l,a)})}},{key:"has",value:function(i){return this.items.indexOf(i)!==-1}},{key:"size",get:function(){return this.items.length}}]),e})();const T9=typeof Set>"u"?Set:j9;function yt(e){var r;return(r=e.localName)!==null&&r!==void 0?r:e.tagName.toLowerCase()}var M9={article:"article",aside:"complementary",button:"button",datalist:"listbox",dd:"definition",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",form:"form",footer:"contentinfo",h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:"banner",hr:"separator",html:"document",legend:"legend",li:"listitem",math:"math",main:"main",menu:"list",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",section:"region",summary:"button",table:"table",tbody:"rowgroup",textarea:"textbox",tfoot:"rowgroup",td:"cell",th:"columnheader",thead:"rowgroup",tr:"row",ul:"list"},q9={caption:new Set(["aria-label","aria-labelledby"]),code:new Set(["aria-label","aria-labelledby"]),deletion:new Set(["aria-label","aria-labelledby"]),emphasis:new Set(["aria-label","aria-labelledby"]),generic:new Set(["aria-label","aria-labelledby","aria-roledescription"]),insertion:new Set(["aria-label","aria-labelledby"]),paragraph:new Set(["aria-label","aria-labelledby"]),presentation:new Set(["aria-label","aria-labelledby"]),strong:new Set(["aria-label","aria-labelledby"]),subscript:new Set(["aria-label","aria-labelledby"]),superscript:new Set(["aria-label","aria-labelledby"])};function A9(e,r){return["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-dropeffect","aria-flowto","aria-grabbed","aria-hidden","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"].some(function(i){var a;return e.hasAttribute(i)&&!((a=q9[r])!==null&&a!==void 0&&a.has(i))})}function O5(e,r){return A9(e,r)}function L9(e){var r=z9(e);if(r===null||r==="presentation"){var i=N9(e);if(r!=="presentation"||O5(e,i||""))return i}return r}function N9(e){var r=M9[yt(e)];if(r!==void 0)return r;switch(yt(e)){case"a":case"area":case"link":if(e.hasAttribute("href"))return"link";break;case"img":return e.getAttribute("alt")===""&&!O5(e,"img")?"presentation":"img";case"input":{var i=e,a=i.type;switch(a){case"button":case"image":case"reset":case"submit":return"button";case"checkbox":case"radio":return a;case"range":return"slider";case"email":case"tel":case"text":case"url":return e.hasAttribute("list")?"combobox":"textbox";case"search":return e.hasAttribute("list")?"combobox":"searchbox";case"number":return"spinbutton";default:return null}}case"select":return e.hasAttribute("multiple")||e.size>1?"listbox":"combobox"}return null}function z9(e){var r=e.getAttribute("role");if(r!==null){var i=r.trim().split(" ")[0];if(i.length>0)return i}return null}function Ge(e){return e!==null&&e.nodeType===e.ELEMENT_NODE}function _5(e){return Ge(e)&&yt(e)==="caption"}function hc(e){return Ge(e)&&yt(e)==="input"}function I9(e){return Ge(e)&&yt(e)==="optgroup"}function D9(e){return Ge(e)&&yt(e)==="select"}function B9(e){return Ge(e)&&yt(e)==="table"}function $9(e){return Ge(e)&&yt(e)==="textarea"}function F9(e){var r=e.ownerDocument===null?e:e.ownerDocument,i=r.defaultView;if(i===null)throw new TypeError("no window available");return i}function V9(e){return Ge(e)&&yt(e)==="fieldset"}function H9(e){return Ge(e)&&yt(e)==="legend"}function W9(e){return Ge(e)&&yt(e)==="slot"}function U9(e){return Ge(e)&&e.ownerSVGElement!==void 0}function K9(e){return Ge(e)&&yt(e)==="svg"}function Y9(e){return U9(e)&&yt(e)==="title"}function jc(e,r){if(Ge(e)&&e.hasAttribute(r)){var i=e.getAttribute(r).split(" "),a=e.getRootNode?e.getRootNode():e.ownerDocument;return i.map(function(l){return a.getElementById(l)}).filter(function(l){return l!==null})}return[]}function $r(e,r){return Ge(e)?r.indexOf(L9(e))!==-1:!1}function G9(e){return e.trim().replace(/\s\s+/g," ")}function X9(e,r){if(!Ge(e))return!1;if(e.hasAttribute("hidden")||e.getAttribute("aria-hidden")==="true")return!0;var i=r(e);return i.getPropertyValue("display")==="none"||i.getPropertyValue("visibility")==="hidden"}function Q9(e){return $r(e,["button","combobox","listbox","textbox"])||j5(e,"range")}function j5(e,r){if(!Ge(e))return!1;switch(r){case"range":return $r(e,["meter","progressbar","scrollbar","slider","spinbutton"]);default:throw new TypeError("No knowledge about abstract role '".concat(r,"'. This is likely a bug :("))}}function i1(e,r){var i=ur(e.querySelectorAll(r));return jc(e,"aria-owns").forEach(function(a){i.push.apply(i,ur(a.querySelectorAll(r)))}),i}function Z9(e){return D9(e)?e.selectedOptions||i1(e,"[selected]"):i1(e,'[aria-selected="true"]')}function J9(e){return $r(e,["none","presentation"])}function eM(e){return _5(e)}function tM(e){return $r(e,["button","cell","checkbox","columnheader","gridcell","heading","label","legend","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowheader","switch","tab","tooltip","treeitem"])}function rM(e){return!1}function nM(e){return hc(e)||$9(e)?e.value:e.textContent||""}function a1(e){var r=e.getPropertyValue("content");return/^["'].*["']$/.test(r)?r.slice(1,-1):""}function T5(e){var r=yt(e);return r==="button"||r==="input"&&e.getAttribute("type")!=="hidden"||r==="meter"||r==="output"||r==="progress"||r==="select"||r==="textarea"}function M5(e){if(T5(e))return e;var r=null;return e.childNodes.forEach(function(i){if(r===null&&Ge(i)){var a=M5(i);a!==null&&(r=a)}}),r}function iM(e){if(e.control!==void 0)return e.control;var r=e.getAttribute("for");return r!==null?e.ownerDocument.getElementById(r):M5(e)}function aM(e){var r=e.labels;if(r===null)return r;if(r!==void 0)return ur(r);if(!T5(e))return null;var i=e.ownerDocument;return ur(i.querySelectorAll("label")).filter(function(a){return iM(a)===e})}function oM(e){var r=e.assignedNodes();return r.length===0?ur(e.childNodes):r}function q5(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=new T9,a=F9(e),l=r.compute,s=l===void 0?"name":l,u=r.computedStyleSupportsPseudoElements,c=u===void 0?r.getComputedStyle!==void 0:u,p=r.getComputedStyle,m=p===void 0?a.getComputedStyle.bind(a):p,x=r.hidden,g=x===void 0?!1:x;function h(O,A){var z="";if(Ge(O)&&c){var B=m(O,"::before"),j=a1(B);z="".concat(j," ").concat(z)}var C=W9(O)?oM(O):ur(O.childNodes).concat(jc(O,"aria-owns"));if(C.forEach(function(q){var b=M(q,{isEmbeddedInLabel:A.isEmbeddedInLabel,isReferenced:!1,recursion:!0}),W=Ge(q)?m(q).getPropertyValue("display"):"inline",Y=W!=="inline"?" ":"";z+="".concat(Y).concat(b).concat(Y)}),Ge(O)&&c){var P=m(O,"::after"),L=a1(P);z="".concat(z," ").concat(L)}return z.trim()}function w(O,A){var z=O.getAttributeNode(A);return z!==null&&!i.has(z)&&z.value.trim()!==""?(i.add(z),z.value):null}function k(O){return Ge(O)?w(O,"title"):null}function S(O){if(!Ge(O))return null;if(V9(O)){i.add(O);for(var A=ur(O.childNodes),z=0;z<A.length;z+=1){var B=A[z];if(H9(B))return M(B,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(B9(O)){i.add(O);for(var j=ur(O.childNodes),C=0;C<j.length;C+=1){var P=j[C];if(_5(P))return M(P,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(K9(O)){i.add(O);for(var L=ur(O.childNodes),q=0;q<L.length;q+=1){var b=L[q];if(Y9(b))return b.textContent}return null}else if(yt(O)==="img"||yt(O)==="area"){var W=w(O,"alt");if(W!==null)return W}else if(I9(O)){var Y=w(O,"label");if(Y!==null)return Y}if(hc(O)&&(O.type==="button"||O.type==="submit"||O.type==="reset")){var N=w(O,"value");if(N!==null)return N;if(O.type==="submit")return"Submit";if(O.type==="reset")return"Reset"}var F=aM(O);if(F!==null&&F.length!==0)return i.add(O),ur(F).map(function(te){return M(te,{isEmbeddedInLabel:!0,isReferenced:!1,recursion:!0})}).filter(function(te){return te.length>0}).join(" ");if(hc(O)&&O.type==="image"){var ie=w(O,"alt");if(ie!==null)return ie;var ee=w(O,"title");return ee!==null?ee:"Submit Query"}if($r(O,["button"])){var R=h(O,{isEmbeddedInLabel:!1});if(R!=="")return R}return null}function M(O,A){if(i.has(O))return"";if(!g&&X9(O,m)&&!A.isReferenced)return i.add(O),"";var z=Ge(O)?O.getAttributeNode("aria-labelledby"):null,B=z!==null&&!i.has(z)?jc(O,"aria-labelledby"):[];if(s==="name"&&!A.isReferenced&&B.length>0)return i.add(z),B.map(function(W){return M(W,{isEmbeddedInLabel:A.isEmbeddedInLabel,isReferenced:!0,recursion:!1})}).join(" ");var j=A.recursion&&Q9(O)&&s==="name";if(!j){var C=(Ge(O)&&O.getAttribute("aria-label")||"").trim();if(C!==""&&s==="name")return i.add(O),C;if(!J9(O)){var P=S(O);if(P!==null)return i.add(O),P}}if($r(O,["menu"]))return i.add(O),"";if(j||A.isEmbeddedInLabel||A.isReferenced){if($r(O,["combobox","listbox"])){i.add(O);var L=Z9(O);return L.length===0?hc(O)?O.value:"":ur(L).map(function(W){return M(W,{isEmbeddedInLabel:A.isEmbeddedInLabel,isReferenced:!1,recursion:!0})}).join(" ")}if(j5(O,"range"))return i.add(O),O.hasAttribute("aria-valuetext")?O.getAttribute("aria-valuetext"):O.hasAttribute("aria-valuenow")?O.getAttribute("aria-valuenow"):O.getAttribute("value")||"";if($r(O,["textbox"]))return i.add(O),nM(O)}if(tM(O)||Ge(O)&&A.isReferenced||eM(O)||rM()){var q=h(O,{isEmbeddedInLabel:A.isEmbeddedInLabel});if(q!=="")return i.add(O),q}if(O.nodeType===O.TEXT_NODE)return i.add(O),O.textContent||"";if(A.recursion)return i.add(O),h(O,{isEmbeddedInLabel:A.isEmbeddedInLabel});var b=k(O);return b!==null?(i.add(O),b):(i.add(O),"")}return G9(M(e,{isEmbeddedInLabel:!1,isReferenced:s==="description",recursion:!1}))}function Vs(e){"@babel/helpers - typeof";return Vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Vs(e)}function o1(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),i.push.apply(i,a)}return i}function l1(e){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?o1(Object(i),!0).forEach(function(a){lM(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o1(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function lM(e,r,i){return r=sM(r),r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function sM(e){var r=uM(e,"string");return Vs(r)==="symbol"?r:String(r)}function uM(e,r){if(Vs(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,r);if(Vs(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function A5(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=jc(e,"aria-describedby").map(function(l){return q5(l,l1(l1({},r),{},{compute:"description"}))}).join(" ");if(i===""){var a=e.getAttribute("title");i=a===null?"":a}return i}function dM(e){return $r(e,["caption","code","deletion","emphasis","generic","insertion","paragraph","presentation","strong","subscript","superscript"])}function yh(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return dM(e)?"":q5(e,r)}var Ft={},Na={},Td={},za={},s1;function cM(){if(s1)return za;s1=1,Object.defineProperty(za,"__esModule",{value:!0}),za.default=void 0;function e(){var i=this,a=0,l={"@@iterator":function(){return l},next:function(){if(a<i.length){var u=i[a];return a=a+1,{done:!1,value:u}}else return{done:!0}}};return l}var r=e;return za.default=r,za}var u1;function eu(){if(u1)return Td;u1=1,Object.defineProperty(Td,"__esModule",{value:!0}),Td.default=a;var e=r(cM());function r(l){return l&&l.__esModule?l:{default:l}}function i(l){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},i(l)}function a(l,s){return typeof Symbol=="function"&&i(Symbol.iterator)==="symbol"&&Object.defineProperty(l,Symbol.iterator,{value:e.default.bind(s)}),l}return Td}var d1;function pM(){if(d1)return Na;d1=1,Object.defineProperty(Na,"__esModule",{value:!0}),Na.default=void 0;var e=r(eu());function r(h){return h&&h.__esModule?h:{default:h}}function i(h,w){return s(h)||l(h,w)||c(h,w)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(h,w){var k=h==null?null:typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(k!=null){var S=[],M=!0,O=!1,A,z;try{for(k=k.call(h);!(M=(A=k.next()).done)&&(S.push(A.value),!(w&&S.length===w));M=!0);}catch(B){O=!0,z=B}finally{try{!M&&k.return!=null&&k.return()}finally{if(O)throw z}}return S}}function s(h){if(Array.isArray(h))return h}function u(h,w){var k=typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(!k){if(Array.isArray(h)||(k=c(h))||w){k&&(h=k);var S=0,M=function(){};return{s:M,n:function(){return S>=h.length?{done:!0}:{done:!1,value:h[S++]}},e:function(j){throw j},f:M}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O=!0,A=!1,z;return{s:function(){k=k.call(h)},n:function(){var j=k.next();return O=j.done,j},e:function(j){A=!0,z=j},f:function(){try{!O&&k.return!=null&&k.return()}finally{if(A)throw z}}}}function c(h,w){if(h){if(typeof h=="string")return p(h,w);var k=Object.prototype.toString.call(h).slice(8,-1);if(k==="Object"&&h.constructor&&(k=h.constructor.name),k==="Map"||k==="Set")return Array.from(h);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return p(h,w)}}function p(h,w){(w==null||w>h.length)&&(w=h.length);for(var k=0,S=new Array(w);k<w;k++)S[k]=h[k];return S}var m=[["aria-activedescendant",{type:"id"}],["aria-atomic",{type:"boolean"}],["aria-autocomplete",{type:"token",values:["inline","list","both","none"]}],["aria-braillelabel",{type:"string"}],["aria-brailleroledescription",{type:"string"}],["aria-busy",{type:"boolean"}],["aria-checked",{type:"tristate"}],["aria-colcount",{type:"integer"}],["aria-colindex",{type:"integer"}],["aria-colspan",{type:"integer"}],["aria-controls",{type:"idlist"}],["aria-current",{type:"token",values:["page","step","location","date","time",!0,!1]}],["aria-describedby",{type:"idlist"}],["aria-description",{type:"string"}],["aria-details",{type:"id"}],["aria-disabled",{type:"boolean"}],["aria-dropeffect",{type:"tokenlist",values:["copy","execute","link","move","none","popup"]}],["aria-errormessage",{type:"id"}],["aria-expanded",{type:"boolean",allowundefined:!0}],["aria-flowto",{type:"idlist"}],["aria-grabbed",{type:"boolean",allowundefined:!0}],["aria-haspopup",{type:"token",values:[!1,!0,"menu","listbox","tree","grid","dialog"]}],["aria-hidden",{type:"boolean",allowundefined:!0}],["aria-invalid",{type:"token",values:["grammar",!1,"spelling",!0]}],["aria-keyshortcuts",{type:"string"}],["aria-label",{type:"string"}],["aria-labelledby",{type:"idlist"}],["aria-level",{type:"integer"}],["aria-live",{type:"token",values:["assertive","off","polite"]}],["aria-modal",{type:"boolean"}],["aria-multiline",{type:"boolean"}],["aria-multiselectable",{type:"boolean"}],["aria-orientation",{type:"token",values:["vertical","undefined","horizontal"]}],["aria-owns",{type:"idlist"}],["aria-placeholder",{type:"string"}],["aria-posinset",{type:"integer"}],["aria-pressed",{type:"tristate"}],["aria-readonly",{type:"boolean"}],["aria-relevant",{type:"tokenlist",values:["additions","all","removals","text"]}],["aria-required",{type:"boolean"}],["aria-roledescription",{type:"string"}],["aria-rowcount",{type:"integer"}],["aria-rowindex",{type:"integer"}],["aria-rowspan",{type:"integer"}],["aria-selected",{type:"boolean",allowundefined:!0}],["aria-setsize",{type:"integer"}],["aria-sort",{type:"token",values:["ascending","descending","none","other"]}],["aria-valuemax",{type:"number"}],["aria-valuemin",{type:"number"}],["aria-valuenow",{type:"number"}],["aria-valuetext",{type:"string"}]],x={entries:function(){return m},forEach:function(w){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,S=u(m),M;try{for(S.s();!(M=S.n()).done;){var O=i(M.value,2),A=O[0],z=O[1];w.call(k,z,A,m)}}catch(B){S.e(B)}finally{S.f()}},get:function(w){var k=m.find(function(S){return S[0]===w});return k&&k[1]},has:function(w){return!!x.get(w)},keys:function(){return m.map(function(w){var k=i(w,1),S=k[0];return S})},values:function(){return m.map(function(w){var k=i(w,2),S=k[1];return S})}},g=(0,e.default)(x,x.entries());return Na.default=g,Na}var Ia={},c1;function fM(){if(c1)return Ia;c1=1,Object.defineProperty(Ia,"__esModule",{value:!0}),Ia.default=void 0;var e=r(eu());function r(h){return h&&h.__esModule?h:{default:h}}function i(h,w){return s(h)||l(h,w)||c(h,w)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(h,w){var k=h==null?null:typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(k!=null){var S=[],M=!0,O=!1,A,z;try{for(k=k.call(h);!(M=(A=k.next()).done)&&(S.push(A.value),!(w&&S.length===w));M=!0);}catch(B){O=!0,z=B}finally{try{!M&&k.return!=null&&k.return()}finally{if(O)throw z}}return S}}function s(h){if(Array.isArray(h))return h}function u(h,w){var k=typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(!k){if(Array.isArray(h)||(k=c(h))||w){k&&(h=k);var S=0,M=function(){};return{s:M,n:function(){return S>=h.length?{done:!0}:{done:!1,value:h[S++]}},e:function(j){throw j},f:M}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O=!0,A=!1,z;return{s:function(){k=k.call(h)},n:function(){var j=k.next();return O=j.done,j},e:function(j){A=!0,z=j},f:function(){try{!O&&k.return!=null&&k.return()}finally{if(A)throw z}}}}function c(h,w){if(h){if(typeof h=="string")return p(h,w);var k=Object.prototype.toString.call(h).slice(8,-1);if(k==="Object"&&h.constructor&&(k=h.constructor.name),k==="Map"||k==="Set")return Array.from(h);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return p(h,w)}}function p(h,w){(w==null||w>h.length)&&(w=h.length);for(var k=0,S=new Array(w);k<w;k++)S[k]=h[k];return S}var m=[["a",{reserved:!1}],["abbr",{reserved:!1}],["acronym",{reserved:!1}],["address",{reserved:!1}],["applet",{reserved:!1}],["area",{reserved:!1}],["article",{reserved:!1}],["aside",{reserved:!1}],["audio",{reserved:!1}],["b",{reserved:!1}],["base",{reserved:!0}],["bdi",{reserved:!1}],["bdo",{reserved:!1}],["big",{reserved:!1}],["blink",{reserved:!1}],["blockquote",{reserved:!1}],["body",{reserved:!1}],["br",{reserved:!1}],["button",{reserved:!1}],["canvas",{reserved:!1}],["caption",{reserved:!1}],["center",{reserved:!1}],["cite",{reserved:!1}],["code",{reserved:!1}],["col",{reserved:!0}],["colgroup",{reserved:!0}],["content",{reserved:!1}],["data",{reserved:!1}],["datalist",{reserved:!1}],["dd",{reserved:!1}],["del",{reserved:!1}],["details",{reserved:!1}],["dfn",{reserved:!1}],["dialog",{reserved:!1}],["dir",{reserved:!1}],["div",{reserved:!1}],["dl",{reserved:!1}],["dt",{reserved:!1}],["em",{reserved:!1}],["embed",{reserved:!1}],["fieldset",{reserved:!1}],["figcaption",{reserved:!1}],["figure",{reserved:!1}],["font",{reserved:!1}],["footer",{reserved:!1}],["form",{reserved:!1}],["frame",{reserved:!1}],["frameset",{reserved:!1}],["h1",{reserved:!1}],["h2",{reserved:!1}],["h3",{reserved:!1}],["h4",{reserved:!1}],["h5",{reserved:!1}],["h6",{reserved:!1}],["head",{reserved:!0}],["header",{reserved:!1}],["hgroup",{reserved:!1}],["hr",{reserved:!1}],["html",{reserved:!0}],["i",{reserved:!1}],["iframe",{reserved:!1}],["img",{reserved:!1}],["input",{reserved:!1}],["ins",{reserved:!1}],["kbd",{reserved:!1}],["keygen",{reserved:!1}],["label",{reserved:!1}],["legend",{reserved:!1}],["li",{reserved:!1}],["link",{reserved:!0}],["main",{reserved:!1}],["map",{reserved:!1}],["mark",{reserved:!1}],["marquee",{reserved:!1}],["menu",{reserved:!1}],["menuitem",{reserved:!1}],["meta",{reserved:!0}],["meter",{reserved:!1}],["nav",{reserved:!1}],["noembed",{reserved:!0}],["noscript",{reserved:!0}],["object",{reserved:!1}],["ol",{reserved:!1}],["optgroup",{reserved:!1}],["option",{reserved:!1}],["output",{reserved:!1}],["p",{reserved:!1}],["param",{reserved:!0}],["picture",{reserved:!0}],["pre",{reserved:!1}],["progress",{reserved:!1}],["q",{reserved:!1}],["rp",{reserved:!1}],["rt",{reserved:!1}],["rtc",{reserved:!1}],["ruby",{reserved:!1}],["s",{reserved:!1}],["samp",{reserved:!1}],["script",{reserved:!0}],["section",{reserved:!1}],["select",{reserved:!1}],["small",{reserved:!1}],["source",{reserved:!0}],["spacer",{reserved:!1}],["span",{reserved:!1}],["strike",{reserved:!1}],["strong",{reserved:!1}],["style",{reserved:!0}],["sub",{reserved:!1}],["summary",{reserved:!1}],["sup",{reserved:!1}],["table",{reserved:!1}],["tbody",{reserved:!1}],["td",{reserved:!1}],["textarea",{reserved:!1}],["tfoot",{reserved:!1}],["th",{reserved:!1}],["thead",{reserved:!1}],["time",{reserved:!1}],["title",{reserved:!0}],["tr",{reserved:!1}],["track",{reserved:!0}],["tt",{reserved:!1}],["u",{reserved:!1}],["ul",{reserved:!1}],["var",{reserved:!1}],["video",{reserved:!1}],["wbr",{reserved:!1}],["xmp",{reserved:!1}]],x={entries:function(){return m},forEach:function(w){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,S=u(m),M;try{for(S.s();!(M=S.n()).done;){var O=i(M.value,2),A=O[0],z=O[1];w.call(k,z,A,m)}}catch(B){S.e(B)}finally{S.f()}},get:function(w){var k=m.find(function(S){return S[0]===w});return k&&k[1]},has:function(w){return!!x.get(w)},keys:function(){return m.map(function(w){var k=i(w,1),S=k[0];return S})},values:function(){return m.map(function(w){var k=i(w,2),S=k[1];return S})}},g=(0,e.default)(x,x.entries());return Ia.default=g,Ia}var Da={},Ba={},$a={},p1;function mM(){if(p1)return $a;p1=1,Object.defineProperty($a,"__esModule",{value:!0}),$a.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget"]]},r=e;return $a.default=r,$a}var Fa={},f1;function hM(){if(f1)return Fa;f1=1,Object.defineProperty(Fa,"__esModule",{value:!0}),Fa.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-activedescendant":null,"aria-disabled":null},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget"]]},r=e;return Fa.default=r,Fa}var Va={},m1;function gM(){if(m1)return Va;m1=1,Object.defineProperty(Va,"__esModule",{value:!0}),Va.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null},relatedConcepts:[{concept:{name:"input"},module:"XForms"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget"]]},r=e;return Va.default=r,Va}var Ha={},h1;function xM(){if(h1)return Ha;h1=1,Object.defineProperty(Ha,"__esModule",{value:!0}),Ha.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Ha.default=r,Ha}var Wa={},g1;function vM(){if(g1)return Wa;g1=1,Object.defineProperty(Wa,"__esModule",{value:!0}),Wa.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure"]]},r=e;return Wa.default=r,Wa}var Ua={},x1;function bM(){if(x1)return Ua;x1=1,Object.defineProperty(Ua,"__esModule",{value:!0}),Ua.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:[],prohibitedProps:[],props:{"aria-atomic":null,"aria-busy":null,"aria-controls":null,"aria-current":null,"aria-describedby":null,"aria-details":null,"aria-dropeffect":null,"aria-flowto":null,"aria-grabbed":null,"aria-hidden":null,"aria-keyshortcuts":null,"aria-label":null,"aria-labelledby":null,"aria-live":null,"aria-owns":null,"aria-relevant":null,"aria-roledescription":null},relatedConcepts:[{concept:{name:"role"},module:"XHTML"},{concept:{name:"type"},module:"Dublin Core"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[]},r=e;return Ua.default=r,Ua}var Ka={},v1;function yM(){if(v1)return Ka;v1=1,Object.defineProperty(Ka,"__esModule",{value:!0}),Ka.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:[],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"frontmatter"},module:"DTB"},{concept:{name:"level"},module:"DTB"},{concept:{name:"level"},module:"SMIL"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure"]]},r=e;return Ka.default=r,Ka}var Ya={},b1;function wM(){if(b1)return Ya;b1=1,Object.defineProperty(Ya,"__esModule",{value:!0}),Ya.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure"]]},r=e;return Ya.default=r,Ya}var Ga={},y1;function kM(){if(y1)return Ga;y1=1,Object.defineProperty(Ga,"__esModule",{value:!0}),Ga.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-orientation":null},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget","composite"],["roletype","structure","section","group"]]},r=e;return Ga.default=r,Ga}var Xa={},w1;function SM(){if(w1)return Xa;w1=1,Object.defineProperty(Xa,"__esModule",{value:!0}),Xa.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:[],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype"]]},r=e;return Xa.default=r,Xa}var Qa={},k1;function EM(){if(k1)return Qa;k1=1,Object.defineProperty(Qa,"__esModule",{value:!0}),Qa.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:[],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype"]]},r=e;return Qa.default=r,Qa}var Za={},S1;function RM(){if(S1)return Za;S1=1,Object.defineProperty(Za,"__esModule",{value:!0}),Za.default=void 0;var e={abstract:!0,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-modal":null},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype"]]},r=e;return Za.default=r,Za}var E1;function CM(){if(E1)return Ba;E1=1,Object.defineProperty(Ba,"__esModule",{value:!0}),Ba.default=void 0;var e=h(mM()),r=h(hM()),i=h(gM()),a=h(xM()),l=h(vM()),s=h(bM()),u=h(yM()),c=h(wM()),p=h(kM()),m=h(SM()),x=h(EM()),g=h(RM());function h(S){return S&&S.__esModule?S:{default:S}}var w=[["command",e.default],["composite",r.default],["input",i.default],["landmark",a.default],["range",l.default],["roletype",s.default],["section",u.default],["sectionhead",c.default],["select",p.default],["structure",m.default],["widget",x.default],["window",g.default]],k=w;return Ba.default=k,Ba}var Ja={},eo={},R1;function PM(){if(R1)return eo;R1=1,Object.defineProperty(eo,"__esModule",{value:!0}),eo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-atomic":"true","aria-live":"assertive"},relatedConcepts:[{concept:{name:"alert"},module:"XForms"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return eo.default=r,eo}var to={},C1;function OM(){if(C1)return to;C1=1,Object.defineProperty(to,"__esModule",{value:!0}),to.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"alert"},module:"XForms"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","alert"],["roletype","window","dialog"]]},r=e;return to.default=r,to}var ro={},P1;function _M(){if(P1)return ro;P1=1,Object.defineProperty(ro,"__esModule",{value:!0}),ro.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-activedescendant":null,"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"Device Independence Delivery Unit"}}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure"]]},r=e;return ro.default=r,ro}var no={},O1;function jM(){if(O1)return no;O1=1,Object.defineProperty(no,"__esModule",{value:!0}),no.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-posinset":null,"aria-setsize":null},relatedConcepts:[{concept:{name:"article"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","document"]]},r=e;return no.default=r,no}var io={},_1;function TM(){if(_1)return io;_1=1,Object.defineProperty(io,"__esModule",{value:!0}),io.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{constraints:["scoped to the body element"],name:"header"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return io.default=r,io}var ao={},j1;function MM(){if(j1)return ao;j1=1,Object.defineProperty(ao,"__esModule",{value:!0}),ao.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"blockquote"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return ao.default=r,ao}var oo={},T1;function qM(){if(T1)return oo;T1=1,Object.defineProperty(oo,"__esModule",{value:!0}),oo.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-disabled":null,"aria-expanded":null,"aria-haspopup":null,"aria-pressed":null},relatedConcepts:[{concept:{attributes:[{name:"type",value:"button"}],name:"input"},module:"HTML"},{concept:{attributes:[{name:"type",value:"image"}],name:"input"},module:"HTML"},{concept:{attributes:[{name:"type",value:"reset"}],name:"input"},module:"HTML"},{concept:{attributes:[{name:"type",value:"submit"}],name:"input"},module:"HTML"},{concept:{name:"button"},module:"HTML"},{concept:{name:"trigger"},module:"XForms"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget","command"]]},r=e;return oo.default=r,oo}var lo={},M1;function AM(){if(M1)return lo;M1=1,Object.defineProperty(lo,"__esModule",{value:!0}),lo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:["aria-label","aria-labelledby"],props:{},relatedConcepts:[{concept:{name:"caption"},module:"HTML"}],requireContextRole:["figure","grid","table"],requiredContextRole:["figure","grid","table"],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return lo.default=r,lo}var so={},q1;function LM(){if(q1)return so;q1=1,Object.defineProperty(so,"__esModule",{value:!0}),so.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-colindex":null,"aria-colspan":null,"aria-rowindex":null,"aria-rowspan":null},relatedConcepts:[{concept:{constraints:["ancestor table element has table role"],name:"td"},module:"HTML"}],requireContextRole:["row"],requiredContextRole:["row"],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return so.default=r,so}var uo={},A1;function NM(){if(A1)return uo;A1=1,Object.defineProperty(uo,"__esModule",{value:!0}),uo.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-checked":null,"aria-errormessage":null,"aria-expanded":null,"aria-invalid":null,"aria-readonly":null,"aria-required":null},relatedConcepts:[{concept:{attributes:[{name:"type",value:"checkbox"}],name:"input"},module:"HTML"},{concept:{name:"option"},module:"ARIA"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{"aria-checked":null},superClass:[["roletype","widget","input"]]},r=e;return uo.default=r,uo}var co={},L1;function zM(){if(L1)return co;L1=1,Object.defineProperty(co,"__esModule",{value:!0}),co.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:["aria-label","aria-labelledby"],props:{},relatedConcepts:[{concept:{name:"code"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return co.default=r,co}var po={},N1;function IM(){if(N1)return po;N1=1,Object.defineProperty(po,"__esModule",{value:!0}),po.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-sort":null},relatedConcepts:[{concept:{name:"th"},module:"HTML"},{concept:{attributes:[{name:"scope",value:"col"}],name:"th"},module:"HTML"},{concept:{attributes:[{name:"scope",value:"colgroup"}],name:"th"},module:"HTML"}],requireContextRole:["row"],requiredContextRole:["row"],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","cell"],["roletype","structure","section","cell","gridcell"],["roletype","widget","gridcell"],["roletype","structure","sectionhead"]]},r=e;return po.default=r,po}var fo={},z1;function DM(){if(z1)return fo;z1=1,Object.defineProperty(fo,"__esModule",{value:!0}),fo.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-activedescendant":null,"aria-autocomplete":null,"aria-errormessage":null,"aria-invalid":null,"aria-readonly":null,"aria-required":null,"aria-expanded":"false","aria-haspopup":"listbox"},relatedConcepts:[{concept:{attributes:[{constraints:["set"],name:"list"},{name:"type",value:"email"}],name:"input"},module:"HTML"},{concept:{attributes:[{constraints:["set"],name:"list"},{name:"type",value:"search"}],name:"input"},module:"HTML"},{concept:{attributes:[{constraints:["set"],name:"list"},{name:"type",value:"tel"}],name:"input"},module:"HTML"},{concept:{attributes:[{constraints:["set"],name:"list"},{name:"type",value:"text"}],name:"input"},module:"HTML"},{concept:{attributes:[{constraints:["set"],name:"list"},{name:"type",value:"url"}],name:"input"},module:"HTML"},{concept:{attributes:[{constraints:["set"],name:"list"},{name:"type",value:"url"}],name:"input"},module:"HTML"},{concept:{attributes:[{constraints:["undefined"],name:"multiple"},{constraints:["undefined"],name:"size"}],constraints:["the multiple attribute is not set and the size attribute does not have a value greater than 1"],name:"select"},module:"HTML"},{concept:{name:"select"},module:"XForms"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{"aria-controls":null,"aria-expanded":"false"},superClass:[["roletype","widget","input"]]},r=e;return fo.default=r,fo}var mo={},I1;function BM(){if(I1)return mo;I1=1,Object.defineProperty(mo,"__esModule",{value:!0}),mo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"aside"},module:"HTML"},{concept:{attributes:[{constraints:["set"],name:"aria-label"}],constraints:["scoped to a sectioning content element","scoped to a sectioning root element other than body"],name:"aside"},module:"HTML"},{concept:{attributes:[{constraints:["set"],name:"aria-labelledby"}],constraints:["scoped to a sectioning content element","scoped to a sectioning root element other than body"],name:"aside"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return mo.default=r,mo}var ho={},D1;function $M(){if(D1)return ho;D1=1,Object.defineProperty(ho,"__esModule",{value:!0}),ho.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{constraints:["scoped to the body element"],name:"footer"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return ho.default=r,ho}var go={},B1;function FM(){if(B1)return go;B1=1,Object.defineProperty(go,"__esModule",{value:!0}),go.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"dd"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return go.default=r,go}var xo={},$1;function VM(){if($1)return xo;$1=1,Object.defineProperty(xo,"__esModule",{value:!0}),xo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:["aria-label","aria-labelledby"],props:{},relatedConcepts:[{concept:{name:"del"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return xo.default=r,xo}var vo={},F1;function HM(){if(F1)return vo;F1=1,Object.defineProperty(vo,"__esModule",{value:!0}),vo.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"dialog"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","window"]]},r=e;return vo.default=r,vo}var bo={},V1;function WM(){if(V1)return bo;V1=1,Object.defineProperty(bo,"__esModule",{value:!0}),bo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{module:"DAISY Guide"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","list"]]},r=e;return bo.default=r,bo}var yo={},H1;function UM(){if(H1)return yo;H1=1,Object.defineProperty(yo,"__esModule",{value:!0}),yo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"Device Independence Delivery Unit"}},{concept:{name:"html"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure"]]},r=e;return yo.default=r,yo}var wo={},W1;function KM(){if(W1)return wo;W1=1,Object.defineProperty(wo,"__esModule",{value:!0}),wo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:["aria-label","aria-labelledby"],props:{},relatedConcepts:[{concept:{name:"em"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return wo.default=r,wo}var ko={},U1;function YM(){if(U1)return ko;U1=1,Object.defineProperty(ko,"__esModule",{value:!0}),ko.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["article"]],requiredProps:{},superClass:[["roletype","structure","section","list"]]},r=e;return ko.default=r,ko}var So={},K1;function GM(){if(K1)return So;K1=1,Object.defineProperty(So,"__esModule",{value:!0}),So.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"figure"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return So.default=r,So}var Eo={},Y1;function XM(){if(Y1)return Eo;Y1=1,Object.defineProperty(Eo,"__esModule",{value:!0}),Eo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{attributes:[{constraints:["set"],name:"aria-label"}],name:"form"},module:"HTML"},{concept:{attributes:[{constraints:["set"],name:"aria-labelledby"}],name:"form"},module:"HTML"},{concept:{attributes:[{constraints:["set"],name:"name"}],name:"form"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return Eo.default=r,Eo}var Ro={},G1;function QM(){if(G1)return Ro;G1=1,Object.defineProperty(Ro,"__esModule",{value:!0}),Ro.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:["aria-label","aria-labelledby"],props:{},relatedConcepts:[{concept:{name:"a"},module:"HTML"},{concept:{name:"area"},module:"HTML"},{concept:{name:"aside"},module:"HTML"},{concept:{name:"b"},module:"HTML"},{concept:{name:"bdo"},module:"HTML"},{concept:{name:"body"},module:"HTML"},{concept:{name:"data"},module:"HTML"},{concept:{name:"div"},module:"HTML"},{concept:{constraints:["scoped to the main element","scoped to a sectioning content element","scoped to a sectioning root element other than body"],name:"footer"},module:"HTML"},{concept:{constraints:["scoped to the main element","scoped to a sectioning content element","scoped to a sectioning root element other than body"],name:"header"},module:"HTML"},{concept:{name:"hgroup"},module:"HTML"},{concept:{name:"i"},module:"HTML"},{concept:{name:"pre"},module:"HTML"},{concept:{name:"q"},module:"HTML"},{concept:{name:"samp"},module:"HTML"},{concept:{name:"section"},module:"HTML"},{concept:{name:"small"},module:"HTML"},{concept:{name:"span"},module:"HTML"},{concept:{name:"u"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure"]]},r=e;return Ro.default=r,Ro}var Co={},X1;function ZM(){if(X1)return Co;X1=1,Object.defineProperty(Co,"__esModule",{value:!0}),Co.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-multiselectable":null,"aria-readonly":null},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["row"],["row","rowgroup"]],requiredProps:{},superClass:[["roletype","widget","composite"],["roletype","structure","section","table"]]},r=e;return Co.default=r,Co}var Po={},Q1;function JM(){if(Q1)return Po;Q1=1,Object.defineProperty(Po,"__esModule",{value:!0}),Po.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null,"aria-readonly":null,"aria-required":null,"aria-selected":null},relatedConcepts:[{concept:{constraints:["ancestor table element has grid role","ancestor table element has treegrid role"],name:"td"},module:"HTML"}],requireContextRole:["row"],requiredContextRole:["row"],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","cell"],["roletype","widget"]]},r=e;return Po.default=r,Po}var Oo={},Z1;function eq(){if(Z1)return Oo;Z1=1,Object.defineProperty(Oo,"__esModule",{value:!0}),Oo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-activedescendant":null,"aria-disabled":null},relatedConcepts:[{concept:{name:"details"},module:"HTML"},{concept:{name:"fieldset"},module:"HTML"},{concept:{name:"optgroup"},module:"HTML"},{concept:{name:"address"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Oo.default=r,Oo}var _o={},J1;function tq(){if(J1)return _o;J1=1,Object.defineProperty(_o,"__esModule",{value:!0}),_o.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-level":"2"},relatedConcepts:[{concept:{name:"h1"},module:"HTML"},{concept:{name:"h2"},module:"HTML"},{concept:{name:"h3"},module:"HTML"},{concept:{name:"h4"},module:"HTML"},{concept:{name:"h5"},module:"HTML"},{concept:{name:"h6"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{"aria-level":"2"},superClass:[["roletype","structure","sectionhead"]]},r=e;return _o.default=r,_o}var jo={},eb;function rq(){if(eb)return jo;eb=1,Object.defineProperty(jo,"__esModule",{value:!0}),jo.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{attributes:[{constraints:["set"],name:"alt"}],name:"img"},module:"HTML"},{concept:{attributes:[{constraints:["undefined"],name:"alt"}],name:"img"},module:"HTML"},{concept:{name:"imggroup"},module:"DTB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return jo.default=r,jo}var To={},tb;function nq(){if(tb)return To;tb=1,Object.defineProperty(To,"__esModule",{value:!0}),To.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:["aria-label","aria-labelledby"],props:{},relatedConcepts:[{concept:{name:"ins"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return To.default=r,To}var Mo={},rb;function iq(){if(rb)return Mo;rb=1,Object.defineProperty(Mo,"__esModule",{value:!0}),Mo.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-disabled":null,"aria-expanded":null,"aria-haspopup":null},relatedConcepts:[{concept:{attributes:[{constraints:["set"],name:"href"}],name:"a"},module:"HTML"},{concept:{attributes:[{constraints:["set"],name:"href"}],name:"area"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget","command"]]},r=e;return Mo.default=r,Mo}var qo={},nb;function aq(){if(nb)return qo;nb=1,Object.defineProperty(qo,"__esModule",{value:!0}),qo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"menu"},module:"HTML"},{concept:{name:"ol"},module:"HTML"},{concept:{name:"ul"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["listitem"]],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return qo.default=r,qo}var Ao={},ib;function oq(){if(ib)return Ao;ib=1,Object.defineProperty(Ao,"__esModule",{value:!0}),Ao.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-errormessage":null,"aria-expanded":null,"aria-invalid":null,"aria-multiselectable":null,"aria-readonly":null,"aria-required":null,"aria-orientation":"vertical"},relatedConcepts:[{concept:{attributes:[{constraints:[">1"],name:"size"}],constraints:["the size attribute value is greater than 1"],name:"select"},module:"HTML"},{concept:{attributes:[{name:"multiple"}],name:"select"},module:"HTML"},{concept:{name:"datalist"},module:"HTML"},{concept:{name:"list"},module:"ARIA"},{concept:{name:"select"},module:"XForms"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["option","group"],["option"]],requiredProps:{},superClass:[["roletype","widget","composite","select"],["roletype","structure","section","group","select"]]},r=e;return Ao.default=r,Ao}var Lo={},ab;function lq(){if(ab)return Lo;ab=1,Object.defineProperty(Lo,"__esModule",{value:!0}),Lo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-level":null,"aria-posinset":null,"aria-setsize":null},relatedConcepts:[{concept:{constraints:["direct descendant of ol","direct descendant of ul","direct descendant of menu"],name:"li"},module:"HTML"},{concept:{name:"item"},module:"XForms"}],requireContextRole:["directory","list"],requiredContextRole:["directory","list"],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Lo.default=r,Lo}var No={},ob;function sq(){if(ob)return No;ob=1,Object.defineProperty(No,"__esModule",{value:!0}),No.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-live":"polite"},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return No.default=r,No}var zo={},lb;function uq(){if(lb)return zo;lb=1,Object.defineProperty(zo,"__esModule",{value:!0}),zo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"main"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return zo.default=r,zo}var Io={},sb;function dq(){if(sb)return Io;sb=1,Object.defineProperty(Io,"__esModule",{value:!0}),Io.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:[],props:{"aria-braillelabel":null,"aria-brailleroledescription":null,"aria-description":null},relatedConcepts:[{concept:{name:"mark"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Io.default=r,Io}var Do={},ub;function cq(){if(ub)return Do;ub=1,Object.defineProperty(Do,"__esModule",{value:!0}),Do.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Do.default=r,Do}var Bo={},db;function pq(){if(db)return Bo;db=1,Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"math"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Bo.default=r,Bo}var $o={},cb;function fq(){if(cb)return $o;cb=1,Object.defineProperty($o,"__esModule",{value:!0}),$o.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-orientation":"vertical"},relatedConcepts:[{concept:{name:"MENU"},module:"JAPI"},{concept:{name:"list"},module:"ARIA"},{concept:{name:"select"},module:"XForms"},{concept:{name:"sidebar"},module:"DTB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["menuitem","group"],["menuitemradio","group"],["menuitemcheckbox","group"],["menuitem"],["menuitemcheckbox"],["menuitemradio"]],requiredProps:{},superClass:[["roletype","widget","composite","select"],["roletype","structure","section","group","select"]]},r=e;return $o.default=r,$o}var Fo={},pb;function mq(){if(pb)return Fo;pb=1,Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-orientation":"horizontal"},relatedConcepts:[{concept:{name:"toolbar"},module:"ARIA"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["menuitem","group"],["menuitemradio","group"],["menuitemcheckbox","group"],["menuitem"],["menuitemcheckbox"],["menuitemradio"]],requiredProps:{},superClass:[["roletype","widget","composite","select","menu"],["roletype","structure","section","group","select","menu"]]},r=e;return Fo.default=r,Fo}var Vo={},fb;function hq(){if(fb)return Vo;fb=1,Object.defineProperty(Vo,"__esModule",{value:!0}),Vo.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-disabled":null,"aria-expanded":null,"aria-haspopup":null,"aria-posinset":null,"aria-setsize":null},relatedConcepts:[{concept:{name:"MENU_ITEM"},module:"JAPI"},{concept:{name:"listitem"},module:"ARIA"},{concept:{name:"option"},module:"ARIA"}],requireContextRole:["group","menu","menubar"],requiredContextRole:["group","menu","menubar"],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget","command"]]},r=e;return Vo.default=r,Vo}var Ho={},mb;function gq(){if(mb)return Ho;mb=1,Object.defineProperty(Ho,"__esModule",{value:!0}),Ho.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author","contents"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"menuitem"},module:"ARIA"}],requireContextRole:["group","menu","menubar"],requiredContextRole:["group","menu","menubar"],requiredOwnedElements:[],requiredProps:{"aria-checked":null},superClass:[["roletype","widget","input","checkbox"],["roletype","widget","command","menuitem"]]},r=e;return Ho.default=r,Ho}var Wo={},hb;function xq(){if(hb)return Wo;hb=1,Object.defineProperty(Wo,"__esModule",{value:!0}),Wo.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author","contents"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"menuitem"},module:"ARIA"}],requireContextRole:["group","menu","menubar"],requiredContextRole:["group","menu","menubar"],requiredOwnedElements:[],requiredProps:{"aria-checked":null},superClass:[["roletype","widget","input","checkbox","menuitemcheckbox"],["roletype","widget","command","menuitem","menuitemcheckbox"],["roletype","widget","input","radio"]]},r=e;return Wo.default=r,Wo}var Uo={},gb;function vq(){if(gb)return Uo;gb=1,Object.defineProperty(Uo,"__esModule",{value:!0}),Uo.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author"],prohibitedProps:[],props:{"aria-valuetext":null,"aria-valuemax":"100","aria-valuemin":"0"},relatedConcepts:[{concept:{name:"meter"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{"aria-valuenow":null},superClass:[["roletype","structure","range"]]},r=e;return Uo.default=r,Uo}var Ko={},xb;function bq(){if(xb)return Ko;xb=1,Object.defineProperty(Ko,"__esModule",{value:!0}),Ko.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"nav"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return Ko.default=r,Ko}var Yo={},vb;function yq(){if(vb)return Yo;vb=1,Object.defineProperty(Yo,"__esModule",{value:!0}),Yo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:[],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[]},r=e;return Yo.default=r,Yo}var Go={},bb;function wq(){if(bb)return Go;bb=1,Object.defineProperty(Go,"__esModule",{value:!0}),Go.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Go.default=r,Go}var Xo={},yb;function kq(){if(yb)return Xo;yb=1,Object.defineProperty(Xo,"__esModule",{value:!0}),Xo.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-checked":null,"aria-posinset":null,"aria-setsize":null,"aria-selected":"false"},relatedConcepts:[{concept:{name:"item"},module:"XForms"},{concept:{name:"listitem"},module:"ARIA"},{concept:{name:"option"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{"aria-selected":"false"},superClass:[["roletype","widget","input"]]},r=e;return Xo.default=r,Xo}var Qo={},wb;function Sq(){if(wb)return Qo;wb=1,Object.defineProperty(Qo,"__esModule",{value:!0}),Qo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:["aria-label","aria-labelledby"],props:{},relatedConcepts:[{concept:{name:"p"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Qo.default=r,Qo}var Zo={},kb;function Eq(){if(kb)return Zo;kb=1,Object.defineProperty(Zo,"__esModule",{value:!0}),Zo.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:["aria-label","aria-labelledby"],props:{},relatedConcepts:[{concept:{attributes:[{name:"alt",value:""}],name:"img"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure"]]},r=e;return Zo.default=r,Zo}var Jo={},Sb;function Rq(){if(Sb)return Jo;Sb=1,Object.defineProperty(Jo,"__esModule",{value:!0}),Jo.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author"],prohibitedProps:[],props:{"aria-valuetext":null},relatedConcepts:[{concept:{name:"progress"},module:"HTML"},{concept:{name:"status"},module:"ARIA"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","range"],["roletype","widget"]]},r=e;return Jo.default=r,Jo}var el={},Eb;function Cq(){if(Eb)return el;Eb=1,Object.defineProperty(el,"__esModule",{value:!0}),el.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-checked":null,"aria-posinset":null,"aria-setsize":null},relatedConcepts:[{concept:{attributes:[{name:"type",value:"radio"}],name:"input"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{"aria-checked":null},superClass:[["roletype","widget","input"]]},r=e;return el.default=r,el}var tl={},Rb;function Pq(){if(Rb)return tl;Rb=1,Object.defineProperty(tl,"__esModule",{value:!0}),tl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-errormessage":null,"aria-invalid":null,"aria-readonly":null,"aria-required":null},relatedConcepts:[{concept:{name:"list"},module:"ARIA"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["radio"]],requiredProps:{},superClass:[["roletype","widget","composite","select"],["roletype","structure","section","group","select"]]},r=e;return tl.default=r,tl}var rl={},Cb;function Oq(){if(Cb)return rl;Cb=1,Object.defineProperty(rl,"__esModule",{value:!0}),rl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{attributes:[{constraints:["set"],name:"aria-label"}],name:"section"},module:"HTML"},{concept:{attributes:[{constraints:["set"],name:"aria-labelledby"}],name:"section"},module:"HTML"},{concept:{name:"Device Independence Glossart perceivable unit"}}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return rl.default=r,rl}var nl={},Pb;function _q(){if(Pb)return nl;Pb=1,Object.defineProperty(nl,"__esModule",{value:!0}),nl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-colindex":null,"aria-expanded":null,"aria-level":null,"aria-posinset":null,"aria-rowindex":null,"aria-selected":null,"aria-setsize":null},relatedConcepts:[{concept:{name:"tr"},module:"HTML"}],requireContextRole:["grid","rowgroup","table","treegrid"],requiredContextRole:["grid","rowgroup","table","treegrid"],requiredOwnedElements:[["cell"],["columnheader"],["gridcell"],["rowheader"]],requiredProps:{},superClass:[["roletype","structure","section","group"],["roletype","widget"]]},r=e;return nl.default=r,nl}var il={},Ob;function jq(){if(Ob)return il;Ob=1,Object.defineProperty(il,"__esModule",{value:!0}),il.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"tbody"},module:"HTML"},{concept:{name:"tfoot"},module:"HTML"},{concept:{name:"thead"},module:"HTML"}],requireContextRole:["grid","table","treegrid"],requiredContextRole:["grid","table","treegrid"],requiredOwnedElements:[["row"]],requiredProps:{},superClass:[["roletype","structure"]]},r=e;return il.default=r,il}var al={},_b;function Tq(){if(_b)return al;_b=1,Object.defineProperty(al,"__esModule",{value:!0}),al.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-sort":null},relatedConcepts:[{concept:{attributes:[{name:"scope",value:"row"}],name:"th"},module:"HTML"},{concept:{attributes:[{name:"scope",value:"rowgroup"}],name:"th"},module:"HTML"}],requireContextRole:["row","rowgroup"],requiredContextRole:["row","rowgroup"],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","cell"],["roletype","structure","section","cell","gridcell"],["roletype","widget","gridcell"],["roletype","structure","sectionhead"]]},r=e;return al.default=r,al}var ol={},jb;function Mq(){if(jb)return ol;jb=1,Object.defineProperty(ol,"__esModule",{value:!0}),ol.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!0,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-valuetext":null,"aria-orientation":"vertical","aria-valuemax":"100","aria-valuemin":"0"},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{"aria-controls":null,"aria-valuenow":null},superClass:[["roletype","structure","range"],["roletype","widget"]]},r=e;return ol.default=r,ol}var ll={},Tb;function qq(){if(Tb)return ll;Tb=1,Object.defineProperty(ll,"__esModule",{value:!0}),ll.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return ll.default=r,ll}var sl={},Mb;function Aq(){if(Mb)return sl;Mb=1,Object.defineProperty(sl,"__esModule",{value:!0}),sl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{attributes:[{constraints:["undefined"],name:"list"},{name:"type",value:"search"}],constraints:["the list attribute is not set"],name:"input"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget","input","textbox"]]},r=e;return sl.default=r,sl}var ul={},qb;function Lq(){if(qb)return ul;qb=1,Object.defineProperty(ul,"__esModule",{value:!0}),ul.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!0,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-orientation":"horizontal","aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":null,"aria-valuetext":null},relatedConcepts:[{concept:{name:"hr"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure"]]},r=e;return ul.default=r,ul}var dl={},Ab;function Nq(){if(Ab)return dl;Ab=1,Object.defineProperty(dl,"__esModule",{value:!0}),dl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author"],prohibitedProps:[],props:{"aria-errormessage":null,"aria-haspopup":null,"aria-invalid":null,"aria-readonly":null,"aria-valuetext":null,"aria-orientation":"horizontal","aria-valuemax":"100","aria-valuemin":"0"},relatedConcepts:[{concept:{attributes:[{name:"type",value:"range"}],name:"input"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{"aria-valuenow":null},superClass:[["roletype","widget","input"],["roletype","structure","range"]]},r=e;return dl.default=r,dl}var cl={},Lb;function zq(){if(Lb)return cl;Lb=1,Object.defineProperty(cl,"__esModule",{value:!0}),cl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-errormessage":null,"aria-invalid":null,"aria-readonly":null,"aria-required":null,"aria-valuetext":null,"aria-valuenow":"0"},relatedConcepts:[{concept:{attributes:[{name:"type",value:"number"}],name:"input"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget","composite"],["roletype","widget","input"],["roletype","structure","range"]]},r=e;return cl.default=r,cl}var pl={},Nb;function Iq(){if(Nb)return pl;Nb=1,Object.defineProperty(pl,"__esModule",{value:!0}),pl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-atomic":"true","aria-live":"polite"},relatedConcepts:[{concept:{name:"output"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return pl.default=r,pl}var fl={},zb;function Dq(){if(zb)return fl;zb=1,Object.defineProperty(fl,"__esModule",{value:!0}),fl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:["aria-label","aria-labelledby"],props:{},relatedConcepts:[{concept:{name:"strong"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return fl.default=r,fl}var ml={},Ib;function Bq(){if(Ib)return ml;Ib=1,Object.defineProperty(ml,"__esModule",{value:!0}),ml.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:["aria-label","aria-labelledby"],props:{},relatedConcepts:[{concept:{name:"sub"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return ml.default=r,ml}var hl={},Db;function $q(){if(Db)return hl;Db=1,Object.defineProperty(hl,"__esModule",{value:!0}),hl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["prohibited"],prohibitedProps:["aria-label","aria-labelledby"],props:{},relatedConcepts:[{concept:{name:"sup"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return hl.default=r,hl}var gl={},Bb;function Fq(){if(Bb)return gl;Bb=1,Object.defineProperty(gl,"__esModule",{value:!0}),gl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author","contents"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"button"},module:"ARIA"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{"aria-checked":null},superClass:[["roletype","widget","input","checkbox"]]},r=e;return gl.default=r,gl}var xl={},$b;function Vq(){if($b)return xl;$b=1,Object.defineProperty(xl,"__esModule",{value:!0}),xl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!0,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-disabled":null,"aria-expanded":null,"aria-haspopup":null,"aria-posinset":null,"aria-setsize":null,"aria-selected":"false"},relatedConcepts:[],requireContextRole:["tablist"],requiredContextRole:["tablist"],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","sectionhead"],["roletype","widget"]]},r=e;return xl.default=r,xl}var vl={},Fb;function Hq(){if(Fb)return vl;Fb=1,Object.defineProperty(vl,"__esModule",{value:!0}),vl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-colcount":null,"aria-rowcount":null},relatedConcepts:[{concept:{name:"table"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["row"],["row","rowgroup"]],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return vl.default=r,vl}var bl={},Vb;function Wq(){if(Vb)return bl;Vb=1,Object.defineProperty(bl,"__esModule",{value:!0}),bl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-level":null,"aria-multiselectable":null,"aria-orientation":"horizontal"},relatedConcepts:[{module:"DAISY",concept:{name:"guide"}}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["tab"]],requiredProps:{},superClass:[["roletype","widget","composite"]]},r=e;return bl.default=r,bl}var yl={},Hb;function Uq(){if(Hb)return yl;Hb=1,Object.defineProperty(yl,"__esModule",{value:!0}),yl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return yl.default=r,yl}var wl={},Wb;function Kq(){if(Wb)return wl;Wb=1,Object.defineProperty(wl,"__esModule",{value:!0}),wl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"dfn"},module:"HTML"},{concept:{name:"dt"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return wl.default=r,wl}var kl={},Ub;function Yq(){if(Ub)return kl;Ub=1,Object.defineProperty(kl,"__esModule",{value:!0}),kl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-activedescendant":null,"aria-autocomplete":null,"aria-errormessage":null,"aria-haspopup":null,"aria-invalid":null,"aria-multiline":null,"aria-placeholder":null,"aria-readonly":null,"aria-required":null},relatedConcepts:[{concept:{attributes:[{constraints:["undefined"],name:"type"},{constraints:["undefined"],name:"list"}],constraints:["the list attribute is not set"],name:"input"},module:"HTML"},{concept:{attributes:[{constraints:["undefined"],name:"list"},{name:"type",value:"email"}],constraints:["the list attribute is not set"],name:"input"},module:"HTML"},{concept:{attributes:[{constraints:["undefined"],name:"list"},{name:"type",value:"tel"}],constraints:["the list attribute is not set"],name:"input"},module:"HTML"},{concept:{attributes:[{constraints:["undefined"],name:"list"},{name:"type",value:"text"}],constraints:["the list attribute is not set"],name:"input"},module:"HTML"},{concept:{attributes:[{constraints:["undefined"],name:"list"},{name:"type",value:"url"}],constraints:["the list attribute is not set"],name:"input"},module:"HTML"},{concept:{name:"input"},module:"XForms"},{concept:{name:"textarea"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget","input"]]},r=e;return kl.default=r,kl}var Sl={},Kb;function Gq(){if(Kb)return Sl;Kb=1,Object.defineProperty(Sl,"__esModule",{value:!0}),Sl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"time"},module:"HTML"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Sl.default=r,Sl}var El={},Yb;function Xq(){if(Yb)return El;Yb=1,Object.defineProperty(El,"__esModule",{value:!0}),El.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","status"]]},r=e;return El.default=r,El}var Rl={},Gb;function Qq(){if(Gb)return Rl;Gb=1,Object.defineProperty(Rl,"__esModule",{value:!0}),Rl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-orientation":"horizontal"},relatedConcepts:[{concept:{name:"menubar"},module:"ARIA"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","group"]]},r=e;return Rl.default=r,Rl}var Cl={},Xb;function Zq(){if(Xb)return Cl;Xb=1,Object.defineProperty(Cl,"__esModule",{value:!0}),Cl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Cl.default=r,Cl}var Pl={},Qb;function Jq(){if(Qb)return Pl;Qb=1,Object.defineProperty(Pl,"__esModule",{value:!0}),Pl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-errormessage":null,"aria-invalid":null,"aria-multiselectable":null,"aria-required":null,"aria-orientation":"vertical"},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["treeitem","group"],["treeitem"]],requiredProps:{},superClass:[["roletype","widget","composite","select"],["roletype","structure","section","group","select"]]},r=e;return Pl.default=r,Pl}var Ol={},Zb;function eA(){if(Zb)return Ol;Zb=1,Object.defineProperty(Ol,"__esModule",{value:!0}),Ol.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["row"],["row","rowgroup"]],requiredProps:{},superClass:[["roletype","widget","composite","grid"],["roletype","structure","section","table","grid"],["roletype","widget","composite","select","tree"],["roletype","structure","section","group","select","tree"]]},r=e;return Ol.default=r,Ol}var _l={},Jb;function tA(){if(Jb)return _l;Jb=1,Object.defineProperty(_l,"__esModule",{value:!0}),_l.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-expanded":null,"aria-haspopup":null},relatedConcepts:[],requireContextRole:["group","tree"],requiredContextRole:["group","tree"],requiredOwnedElements:[],requiredProps:{"aria-selected":null},superClass:[["roletype","structure","section","listitem"],["roletype","widget","input","option"]]},r=e;return _l.default=r,_l}var ey;function rA(){if(ey)return Ja;ey=1,Object.defineProperty(Ja,"__esModule",{value:!0}),Ja.default=void 0;var e=pe(PM()),r=pe(OM()),i=pe(_M()),a=pe(jM()),l=pe(TM()),s=pe(MM()),u=pe(qM()),c=pe(AM()),p=pe(LM()),m=pe(NM()),x=pe(zM()),g=pe(IM()),h=pe(DM()),w=pe(BM()),k=pe($M()),S=pe(FM()),M=pe(VM()),O=pe(HM()),A=pe(WM()),z=pe(UM()),B=pe(KM()),j=pe(YM()),C=pe(GM()),P=pe(XM()),L=pe(QM()),q=pe(ZM()),b=pe(JM()),W=pe(eq()),Y=pe(tq()),N=pe(rq()),F=pe(nq()),ie=pe(iq()),ee=pe(aq()),R=pe(oq()),te=pe(lq()),D=pe(sq()),E=pe(uq()),_=pe(dq()),I=pe(cq()),G=pe(pq()),Z=pe(fq()),ne=pe(mq()),re=pe(hq()),ae=pe(gq()),me=pe(xq()),V=pe(vq()),oe=pe(bq()),fe=pe(yq()),ge=pe(wq()),ve=pe(kq()),Se=pe(Sq()),Pe=pe(Eq()),Te=pe(Rq()),Ce=pe(Cq()),$e=pe(Pq()),Ue=pe(Oq()),Fe=pe(_q()),Ze=pe(jq()),zt=pe(Tq()),Sr=pe(Mq()),Sn=pe(qq()),pr=pe(Aq()),Zn=pe(Lq()),Ct=pe(Nq()),Ht=pe(zq()),nu=pe(Iq()),En=pe(Dq()),Rn=pe(Bq()),Xc=pe($q()),iu=pe(Fq()),au=pe(Vq()),Qc=pe(Hq()),Bi=pe(Wq()),$i=pe(Uq()),Fi=pe(Kq()),Vi=pe(Yq()),Hi=pe(Gq()),Ur=pe(Xq()),Kr=pe(Qq()),ou=pe(Zq()),lu=pe(Jq()),su=pe(eA()),uu=pe(tA());function pe(fr){return fr&&fr.__esModule?fr:{default:fr}}var Wi=[["alert",e.default],["alertdialog",r.default],["application",i.default],["article",a.default],["banner",l.default],["blockquote",s.default],["button",u.default],["caption",c.default],["cell",p.default],["checkbox",m.default],["code",x.default],["columnheader",g.default],["combobox",h.default],["complementary",w.default],["contentinfo",k.default],["definition",S.default],["deletion",M.default],["dialog",O.default],["directory",A.default],["document",z.default],["emphasis",B.default],["feed",j.default],["figure",C.default],["form",P.default],["generic",L.default],["grid",q.default],["gridcell",b.default],["group",W.default],["heading",Y.default],["img",N.default],["insertion",F.default],["link",ie.default],["list",ee.default],["listbox",R.default],["listitem",te.default],["log",D.default],["main",E.default],["mark",_.default],["marquee",I.default],["math",G.default],["menu",Z.default],["menubar",ne.default],["menuitem",re.default],["menuitemcheckbox",ae.default],["menuitemradio",me.default],["meter",V.default],["navigation",oe.default],["none",fe.default],["note",ge.default],["option",ve.default],["paragraph",Se.default],["presentation",Pe.default],["progressbar",Te.default],["radio",Ce.default],["radiogroup",$e.default],["region",Ue.default],["row",Fe.default],["rowgroup",Ze.default],["rowheader",zt.default],["scrollbar",Sr.default],["search",Sn.default],["searchbox",pr.default],["separator",Zn.default],["slider",Ct.default],["spinbutton",Ht.default],["status",nu.default],["strong",En.default],["subscript",Rn.default],["superscript",Xc.default],["switch",iu.default],["tab",au.default],["table",Qc.default],["tablist",Bi.default],["tabpanel",$i.default],["term",Fi.default],["textbox",Vi.default],["time",Hi.default],["timer",Ur.default],["toolbar",Kr.default],["tooltip",ou.default],["tree",lu.default],["treegrid",su.default],["treeitem",uu.default]],du=Wi;return Ja.default=du,Ja}var jl={},Tl={},ty;function nA(){if(ty)return Tl;ty=1,Object.defineProperty(Tl,"__esModule",{value:!0}),Tl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"abstract [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Tl.default=r,Tl}var Ml={},ry;function iA(){if(ry)return Ml;ry=1,Object.defineProperty(Ml,"__esModule",{value:!0}),Ml.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"acknowledgments [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return Ml.default=r,Ml}var ql={},ny;function aA(){if(ny)return ql;ny=1,Object.defineProperty(ql,"__esModule",{value:!0}),ql.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"afterword [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return ql.default=r,ql}var Al={},iy;function oA(){if(iy)return Al;iy=1,Object.defineProperty(Al,"__esModule",{value:!0}),Al.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"appendix [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return Al.default=r,Al}var Ll={},ay;function lA(){if(ay)return Ll;ay=1,Object.defineProperty(Ll,"__esModule",{value:!0}),Ll.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-errormessage":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"referrer [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget","command","link"]]},r=e;return Ll.default=r,Ll}var Nl={},oy;function sA(){if(oy)return Nl;oy=1,Object.defineProperty(Nl,"__esModule",{value:!0}),Nl.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"EPUB biblioentry [EPUB-SSV]"},module:"EPUB"}],requireContextRole:["doc-bibliography"],requiredContextRole:["doc-bibliography"],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","listitem"]]},r=e;return Nl.default=r,Nl}var zl={},ly;function uA(){if(ly)return zl;ly=1,Object.defineProperty(zl,"__esModule",{value:!0}),zl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"bibliography [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["doc-biblioentry"]],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return zl.default=r,zl}var Il={},sy;function dA(){if(sy)return Il;sy=1,Object.defineProperty(Il,"__esModule",{value:!0}),Il.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-errormessage":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"biblioref [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget","command","link"]]},r=e;return Il.default=r,Il}var Dl={},uy;function cA(){if(uy)return Dl;uy=1,Object.defineProperty(Dl,"__esModule",{value:!0}),Dl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"chapter [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return Dl.default=r,Dl}var Bl={},dy;function pA(){if(dy)return Bl;dy=1,Object.defineProperty(Bl,"__esModule",{value:!0}),Bl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"colophon [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Bl.default=r,Bl}var $l={},cy;function fA(){if(cy)return $l;cy=1,Object.defineProperty($l,"__esModule",{value:!0}),$l.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"conclusion [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return $l.default=r,$l}var Fl={},py;function mA(){if(py)return Fl;py=1,Object.defineProperty(Fl,"__esModule",{value:!0}),Fl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"cover [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","img"]]},r=e;return Fl.default=r,Fl}var Vl={},fy;function hA(){if(fy)return Vl;fy=1,Object.defineProperty(Vl,"__esModule",{value:!0}),Vl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"credit [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Vl.default=r,Vl}var Hl={},my;function gA(){if(my)return Hl;my=1,Object.defineProperty(Hl,"__esModule",{value:!0}),Hl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"credits [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return Hl.default=r,Hl}var Wl={},hy;function xA(){if(hy)return Wl;hy=1,Object.defineProperty(Wl,"__esModule",{value:!0}),Wl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"dedication [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Wl.default=r,Wl}var Ul={},gy;function vA(){if(gy)return Ul;gy=1,Object.defineProperty(Ul,"__esModule",{value:!0}),Ul.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"rearnote [EPUB-SSV]"},module:"EPUB"}],requireContextRole:["doc-endnotes"],requiredContextRole:["doc-endnotes"],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","listitem"]]},r=e;return Ul.default=r,Ul}var Kl={},xy;function bA(){if(xy)return Kl;xy=1,Object.defineProperty(Kl,"__esModule",{value:!0}),Kl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"rearnotes [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["doc-endnote"]],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return Kl.default=r,Kl}var Yl={},vy;function yA(){if(vy)return Yl;vy=1,Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"epigraph [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Yl.default=r,Yl}var Gl={},by;function wA(){if(by)return Gl;by=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"epilogue [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return Gl.default=r,Gl}var Xl={},yy;function kA(){if(yy)return Xl;yy=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"errata [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return Xl.default=r,Xl}var Ql={},wy;function SA(){if(wy)return Ql;wy=1,Object.defineProperty(Ql,"__esModule",{value:!0}),Ql.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Ql.default=r,Ql}var Zl={},ky;function EA(){if(ky)return Zl;ky=1,Object.defineProperty(Zl,"__esModule",{value:!0}),Zl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"footnote [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return Zl.default=r,Zl}var Jl={},Sy;function RA(){if(Sy)return Jl;Sy=1,Object.defineProperty(Jl,"__esModule",{value:!0}),Jl.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"foreword [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return Jl.default=r,Jl}var es={},Ey;function CA(){if(Ey)return es;Ey=1,Object.defineProperty(es,"__esModule",{value:!0}),es.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"glossary [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[["definition"],["term"]],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return es.default=r,es}var ts={},Ry;function PA(){if(Ry)return ts;Ry=1,Object.defineProperty(ts,"__esModule",{value:!0}),ts.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-errormessage":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"glossref [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget","command","link"]]},r=e;return ts.default=r,ts}var rs={},Cy;function OA(){if(Cy)return rs;Cy=1,Object.defineProperty(rs,"__esModule",{value:!0}),rs.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"index [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark","navigation"]]},r=e;return rs.default=r,rs}var ns={},Py;function _A(){if(Py)return ns;Py=1,Object.defineProperty(ns,"__esModule",{value:!0}),ns.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"introduction [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return ns.default=r,ns}var is={},Oy;function jA(){if(Oy)return is;Oy=1,Object.defineProperty(is,"__esModule",{value:!0}),is.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-errormessage":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"noteref [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","widget","command","link"]]},r=e;return is.default=r,is}var as={},_y;function TA(){if(_y)return as;_y=1,Object.defineProperty(as,"__esModule",{value:!0}),as.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"notice [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","note"]]},r=e;return as.default=r,as}var os={},jy;function MA(){if(jy)return os;jy=1,Object.defineProperty(os,"__esModule",{value:!0}),os.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author"],prohibitedProps:[],props:{"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"pagebreak [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","separator"]]},r=e;return os.default=r,os}var ls={},Ty;function qA(){if(Ty)return ls;Ty=1,Object.defineProperty(ls,"__esModule",{value:!0}),ls.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"page-list [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark","navigation"]]},r=e;return ls.default=r,ls}var ss={},My;function AA(){if(My)return ss;My=1,Object.defineProperty(ss,"__esModule",{value:!0}),ss.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"part [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return ss.default=r,ss}var us={},qy;function LA(){if(qy)return us;qy=1,Object.defineProperty(us,"__esModule",{value:!0}),us.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"preface [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return us.default=r,us}var ds={},Ay;function NA(){if(Ay)return ds;Ay=1,Object.defineProperty(ds,"__esModule",{value:!0}),ds.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"prologue [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark"]]},r=e;return ds.default=r,ds}var cs={},Ly;function zA(){if(Ly)return cs;Ly=1,Object.defineProperty(cs,"__esModule",{value:!0}),cs.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{},relatedConcepts:[{concept:{name:"pullquote [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["none"]]},r=e;return cs.default=r,cs}var ps={},Ny;function IA(){if(Ny)return ps;Ny=1,Object.defineProperty(ps,"__esModule",{value:!0}),ps.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"qna [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section"]]},r=e;return ps.default=r,ps}var fs={},zy;function DA(){if(zy)return fs;zy=1,Object.defineProperty(fs,"__esModule",{value:!0}),fs.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"subtitle [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","sectionhead"]]},r=e;return fs.default=r,fs}var ms={},Iy;function BA(){if(Iy)return ms;Iy=1,Object.defineProperty(ms,"__esModule",{value:!0}),ms.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"help [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","note"]]},r=e;return ms.default=r,ms}var hs={},Dy;function $A(){if(Dy)return hs;Dy=1,Object.defineProperty(hs,"__esModule",{value:!0}),hs.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{concept:{name:"toc [EPUB-SSV]"},module:"EPUB"}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","landmark","navigation"]]},r=e;return hs.default=r,hs}var By;function FA(){if(By)return jl;By=1,Object.defineProperty(jl,"__esModule",{value:!0}),jl.default=void 0;var e=G(nA()),r=G(iA()),i=G(aA()),a=G(oA()),l=G(lA()),s=G(sA()),u=G(uA()),c=G(dA()),p=G(cA()),m=G(pA()),x=G(fA()),g=G(mA()),h=G(hA()),w=G(gA()),k=G(xA()),S=G(vA()),M=G(bA()),O=G(yA()),A=G(wA()),z=G(kA()),B=G(SA()),j=G(EA()),C=G(RA()),P=G(CA()),L=G(PA()),q=G(OA()),b=G(_A()),W=G(jA()),Y=G(TA()),N=G(MA()),F=G(qA()),ie=G(AA()),ee=G(LA()),R=G(NA()),te=G(zA()),D=G(IA()),E=G(DA()),_=G(BA()),I=G($A());function G(re){return re&&re.__esModule?re:{default:re}}var Z=[["doc-abstract",e.default],["doc-acknowledgments",r.default],["doc-afterword",i.default],["doc-appendix",a.default],["doc-backlink",l.default],["doc-biblioentry",s.default],["doc-bibliography",u.default],["doc-biblioref",c.default],["doc-chapter",p.default],["doc-colophon",m.default],["doc-conclusion",x.default],["doc-cover",g.default],["doc-credit",h.default],["doc-credits",w.default],["doc-dedication",k.default],["doc-endnote",S.default],["doc-endnotes",M.default],["doc-epigraph",O.default],["doc-epilogue",A.default],["doc-errata",z.default],["doc-example",B.default],["doc-footnote",j.default],["doc-foreword",C.default],["doc-glossary",P.default],["doc-glossref",L.default],["doc-index",q.default],["doc-introduction",b.default],["doc-noteref",W.default],["doc-notice",Y.default],["doc-pagebreak",N.default],["doc-pagelist",F.default],["doc-part",ie.default],["doc-preface",ee.default],["doc-prologue",R.default],["doc-pullquote",te.default],["doc-qna",D.default],["doc-subtitle",E.default],["doc-tip",_.default],["doc-toc",I.default]],ne=Z;return jl.default=ne,jl}var gs={},xs={},$y;function VA(){if($y)return xs;$y=1,Object.defineProperty(xs,"__esModule",{value:!0}),xs.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!1,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{module:"GRAPHICS",concept:{name:"graphics-object"}},{module:"ARIA",concept:{name:"img"}},{module:"ARIA",concept:{name:"article"}}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","document"]]},r=e;return xs.default=r,xs}var vs={},Fy;function HA(){if(Fy)return vs;Fy=1,Object.defineProperty(vs,"__esModule",{value:!0}),vs.default=void 0;var e={abstract:!1,accessibleNameRequired:!1,baseConcepts:[],childrenPresentational:!1,nameFrom:["author","contents"],prohibitedProps:[],props:{"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[{module:"GRAPHICS",concept:{name:"graphics-document"}},{module:"ARIA",concept:{name:"group"}},{module:"ARIA",concept:{name:"img"}},{module:"GRAPHICS",concept:{name:"graphics-symbol"}}],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","group"]]},r=e;return vs.default=r,vs}var bs={},Vy;function WA(){if(Vy)return bs;Vy=1,Object.defineProperty(bs,"__esModule",{value:!0}),bs.default=void 0;var e={abstract:!1,accessibleNameRequired:!0,baseConcepts:[],childrenPresentational:!0,nameFrom:["author"],prohibitedProps:[],props:{"aria-disabled":null,"aria-errormessage":null,"aria-expanded":null,"aria-haspopup":null,"aria-invalid":null},relatedConcepts:[],requireContextRole:[],requiredContextRole:[],requiredOwnedElements:[],requiredProps:{},superClass:[["roletype","structure","section","img"]]},r=e;return bs.default=r,bs}var Hy;function UA(){if(Hy)return gs;Hy=1,Object.defineProperty(gs,"__esModule",{value:!0}),gs.default=void 0;var e=a(VA()),r=a(HA()),i=a(WA());function a(u){return u&&u.__esModule?u:{default:u}}var l=[["graphics-document",e.default],["graphics-object",r.default],["graphics-symbol",i.default]],s=l;return gs.default=s,gs}var Wy;function wh(){if(Wy)return Da;Wy=1,Object.defineProperty(Da,"__esModule",{value:!0}),Da.default=void 0;var e=s(CM()),r=s(rA()),i=s(FA()),a=s(UA()),l=s(eu());function s(O){return O&&O.__esModule?O:{default:O}}function u(O,A,z){return A in O?Object.defineProperty(O,A,{value:z,enumerable:!0,configurable:!0,writable:!0}):O[A]=z,O}function c(O,A){var z=typeof Symbol<"u"&&O[Symbol.iterator]||O["@@iterator"];if(!z){if(Array.isArray(O)||(z=x(O))||A){z&&(O=z);var B=0,j=function(){};return{s:j,n:function(){return B>=O.length?{done:!0}:{done:!1,value:O[B++]}},e:function(b){throw b},f:j}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var C=!0,P=!1,L;return{s:function(){z=z.call(O)},n:function(){var b=z.next();return C=b.done,b},e:function(b){P=!0,L=b},f:function(){try{!C&&z.return!=null&&z.return()}finally{if(P)throw L}}}}function p(O,A){return w(O)||h(O,A)||x(O,A)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(O,A){if(O){if(typeof O=="string")return g(O,A);var z=Object.prototype.toString.call(O).slice(8,-1);if(z==="Object"&&O.constructor&&(z=O.constructor.name),z==="Map"||z==="Set")return Array.from(O);if(z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z))return g(O,A)}}function g(O,A){(A==null||A>O.length)&&(A=O.length);for(var z=0,B=new Array(A);z<A;z++)B[z]=O[z];return B}function h(O,A){var z=O==null?null:typeof Symbol<"u"&&O[Symbol.iterator]||O["@@iterator"];if(z!=null){var B=[],j=!0,C=!1,P,L;try{for(z=z.call(O);!(j=(P=z.next()).done)&&(B.push(P.value),!(A&&B.length===A));j=!0);}catch(q){C=!0,L=q}finally{try{!j&&z.return!=null&&z.return()}finally{if(C)throw L}}return B}}function w(O){if(Array.isArray(O))return O}var k=[].concat(e.default,r.default,i.default,a.default);k.forEach(function(O){var A=p(O,2),z=A[1],B=c(z.superClass),j;try{for(B.s();!(j=B.n()).done;){var C=j.value,P=c(C),L;try{var q=function(){var W=L.value,Y=k.find(function(R){var te=p(R,1),D=te[0];return D===W});if(Y)for(var N=Y[1],F=0,ie=Object.keys(N.props);F<ie.length;F++){var ee=ie[F];Object.prototype.hasOwnProperty.call(z.props,ee)||Object.assign(z.props,u({},ee,N.props[ee]))}};for(P.s();!(L=P.n()).done;)q()}catch(b){P.e(b)}finally{P.f()}}}catch(b){B.e(b)}finally{B.f()}});var S={entries:function(){return k},forEach:function(A){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,B=c(k),j;try{for(B.s();!(j=B.n()).done;){var C=p(j.value,2),P=C[0],L=C[1];A.call(z,L,P,k)}}catch(q){B.e(q)}finally{B.f()}},get:function(A){var z=k.find(function(B){return B[0]===A});return z&&z[1]},has:function(A){return!!S.get(A)},keys:function(){return k.map(function(A){var z=p(A,1),B=z[0];return B})},values:function(){return k.map(function(A){var z=p(A,2),B=z[1];return B})}},M=(0,l.default)(S,S.entries());return Da.default=M,Da}var ys={},vm={},Uy;function KA(){if(Uy)return vm;Uy=1;var e=Object.prototype.hasOwnProperty;function r(i,a){var l,s;if(i===a)return!0;if(i&&a&&(l=i.constructor)===a.constructor){if(l===Date)return i.getTime()===a.getTime();if(l===RegExp)return i.toString()===a.toString();if(l===Array){if((s=i.length)===a.length)for(;s--&&r(i[s],a[s]););return s===-1}if(!l||typeof i=="object"){s=0;for(l in i)if(e.call(i,l)&&++s&&!e.call(a,l)||!(l in a)||!r(i[l],a[l]))return!1;return Object.keys(a).length===s}}return i!==i&&a!==a}return vm.dequal=r,vm}var Ky;function YA(){if(Ky)return ys;Ky=1,Object.defineProperty(ys,"__esModule",{value:!0}),ys.default=void 0;var e=KA(),r=a(eu()),i=a(wh());function a(j){return j&&j.__esModule?j:{default:j}}function l(j,C){return c(j)||u(j,C)||m(j,C)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(j,C){var P=j==null?null:typeof Symbol<"u"&&j[Symbol.iterator]||j["@@iterator"];if(P!=null){var L=[],q=!0,b=!1,W,Y;try{for(P=P.call(j);!(q=(W=P.next()).done)&&(L.push(W.value),!(C&&L.length===C));q=!0);}catch(N){b=!0,Y=N}finally{try{!q&&P.return!=null&&P.return()}finally{if(b)throw Y}}return L}}function c(j){if(Array.isArray(j))return j}function p(j,C){var P=typeof Symbol<"u"&&j[Symbol.iterator]||j["@@iterator"];if(!P){if(Array.isArray(j)||(P=m(j))||C){P&&(j=P);var L=0,q=function(){};return{s:q,n:function(){return L>=j.length?{done:!0}:{done:!1,value:j[L++]}},e:function(F){throw F},f:q}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var b=!0,W=!1,Y;return{s:function(){P=P.call(j)},n:function(){var F=P.next();return b=F.done,F},e:function(F){W=!0,Y=F},f:function(){try{!b&&P.return!=null&&P.return()}finally{if(W)throw Y}}}}function m(j,C){if(j){if(typeof j=="string")return x(j,C);var P=Object.prototype.toString.call(j).slice(8,-1);if(P==="Object"&&j.constructor&&(P=j.constructor.name),P==="Map"||P==="Set")return Array.from(j);if(P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))return x(j,C)}}function x(j,C){(C==null||C>j.length)&&(C=j.length);for(var P=0,L=new Array(C);P<C;P++)L[P]=j[P];return L}for(var g=[],h=i.default.keys(),w=0;w<h.length;w++){var k=h[w],S=i.default.get(k);if(S)for(var M=[].concat(S.baseConcepts,S.relatedConcepts),O=0;O<M.length;O++){var A=M[O];A.module==="HTML"&&(function(){var j=A.concept;if(j){var C=g.find(function(b){return(0,e.dequal)(b,j)}),P;C?P=C[1]:P=[];for(var L=!0,q=0;q<P.length;q++)if(P[q]===k){L=!1;break}L&&P.push(k),g.push([j,P])}})()}}var z={entries:function(){return g},forEach:function(C){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,L=p(g),q;try{for(L.s();!(q=L.n()).done;){var b=l(q.value,2),W=b[0],Y=b[1];C.call(P,Y,W,g)}}catch(N){L.e(N)}finally{L.f()}},get:function(C){var P=g.find(function(L){return C.name===L[0].name&&(0,e.dequal)(C.attributes,L[0].attributes)});return P&&P[1]},has:function(C){return!!z.get(C)},keys:function(){return g.map(function(C){var P=l(C,1),L=P[0];return L})},values:function(){return g.map(function(C){var P=l(C,2),L=P[1];return L})}},B=(0,r.default)(z,z.entries());return ys.default=B,ys}var ws={},Yy;function GA(){if(Yy)return ws;Yy=1,Object.defineProperty(ws,"__esModule",{value:!0}),ws.default=void 0;var e=i(eu()),r=i(wh());function i(C){return C&&C.__esModule?C:{default:C}}function a(C,P){return u(C)||s(C,P)||p(C,P)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(C,P){var L=C==null?null:typeof Symbol<"u"&&C[Symbol.iterator]||C["@@iterator"];if(L!=null){var q=[],b=!0,W=!1,Y,N;try{for(L=L.call(C);!(b=(Y=L.next()).done)&&(q.push(Y.value),!(P&&q.length===P));b=!0);}catch(F){W=!0,N=F}finally{try{!b&&L.return!=null&&L.return()}finally{if(W)throw N}}return q}}function u(C){if(Array.isArray(C))return C}function c(C,P){var L=typeof Symbol<"u"&&C[Symbol.iterator]||C["@@iterator"];if(!L){if(Array.isArray(C)||(L=p(C))||P){L&&(C=L);var q=0,b=function(){};return{s:b,n:function(){return q>=C.length?{done:!0}:{done:!1,value:C[q++]}},e:function(ie){throw ie},f:b}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var W=!0,Y=!1,N;return{s:function(){L=L.call(C)},n:function(){var ie=L.next();return W=ie.done,ie},e:function(ie){Y=!0,N=ie},f:function(){try{!W&&L.return!=null&&L.return()}finally{if(Y)throw N}}}}function p(C,P){if(C){if(typeof C=="string")return m(C,P);var L=Object.prototype.toString.call(C).slice(8,-1);if(L==="Object"&&C.constructor&&(L=C.constructor.name),L==="Map"||L==="Set")return Array.from(C);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return m(C,P)}}function m(C,P){(P==null||P>C.length)&&(P=C.length);for(var L=0,q=new Array(P);L<P;L++)q[L]=C[L];return q}for(var x=[],g=r.default.keys(),h=0;h<g.length;h++){var w=g[h],k=r.default.get(w),S=[];if(k){for(var M=[].concat(k.baseConcepts,k.relatedConcepts),O=0;O<M.length;O++){var A=M[O];if(A.module==="HTML"){var z=A.concept;z!=null&&S.push(z)}}S.length>0&&x.push([w,S])}}var B={entries:function(){return x},forEach:function(P){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,q=c(x),b;try{for(q.s();!(b=q.n()).done;){var W=a(b.value,2),Y=W[0],N=W[1];P.call(L,N,Y,x)}}catch(F){q.e(F)}finally{q.f()}},get:function(P){var L=x.find(function(q){return q[0]===P});return L&&L[1]},has:function(P){return!!B.get(P)},keys:function(){return x.map(function(P){var L=a(P,1),q=L[0];return q})},values:function(){return x.map(function(P){var L=a(P,2),q=L[1];return q})}},j=(0,e.default)(B,B.entries());return ws.default=j,ws}var Gy;function XA(){if(Gy)return Ft;Gy=1,Object.defineProperty(Ft,"__esModule",{value:!0}),Ft.roles=Ft.roleElements=Ft.elementRoles=Ft.dom=Ft.aria=void 0;var e=s(pM()),r=s(fM()),i=s(wh()),a=s(YA()),l=s(GA());function s(g){return g&&g.__esModule?g:{default:g}}var u=e.default;Ft.aria=u;var c=r.default;Ft.dom=c;var p=i.default;Ft.roles=p;var m=a.default;Ft.elementRoles=m;var x=l.default;return Ft.roleElements=x,Ft}var Zt=XA(),bm={exports:{}},Xy;function QA(){return Xy||(Xy=1,(function(e){var r=(function(){var i=String.fromCharCode,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",s={};function u(p,m){if(!s[p]){s[p]={};for(var x=0;x<p.length;x++)s[p][p.charAt(x)]=x}return s[p][m]}var c={compressToBase64:function(p){if(p==null)return"";var m=c._compress(p,6,function(x){return a.charAt(x)});switch(m.length%4){default:case 0:return m;case 1:return m+"===";case 2:return m+"==";case 3:return m+"="}},decompressFromBase64:function(p){return p==null?"":p==""?null:c._decompress(p.length,32,function(m){return u(a,p.charAt(m))})},compressToUTF16:function(p){return p==null?"":c._compress(p,15,function(m){return i(m+32)})+" "},decompressFromUTF16:function(p){return p==null?"":p==""?null:c._decompress(p.length,16384,function(m){return p.charCodeAt(m)-32})},compressToUint8Array:function(p){for(var m=c.compress(p),x=new Uint8Array(m.length*2),g=0,h=m.length;g<h;g++){var w=m.charCodeAt(g);x[g*2]=w>>>8,x[g*2+1]=w%256}return x},decompressFromUint8Array:function(p){if(p==null)return c.decompress(p);for(var m=new Array(p.length/2),x=0,g=m.length;x<g;x++)m[x]=p[x*2]*256+p[x*2+1];var h=[];return m.forEach(function(w){h.push(i(w))}),c.decompress(h.join(""))},compressToEncodedURIComponent:function(p){return p==null?"":c._compress(p,6,function(m){return l.charAt(m)})},decompressFromEncodedURIComponent:function(p){return p==null?"":p==""?null:(p=p.replace(/ /g,"+"),c._decompress(p.length,32,function(m){return u(l,p.charAt(m))}))},compress:function(p){return c._compress(p,16,function(m){return i(m)})},_compress:function(p,m,x){if(p==null)return"";var g,h,w={},k={},S="",M="",O="",A=2,z=3,B=2,j=[],C=0,P=0,L;for(L=0;L<p.length;L+=1)if(S=p.charAt(L),Object.prototype.hasOwnProperty.call(w,S)||(w[S]=z++,k[S]=!0),M=O+S,Object.prototype.hasOwnProperty.call(w,M))O=M;else{if(Object.prototype.hasOwnProperty.call(k,O)){if(O.charCodeAt(0)<256){for(g=0;g<B;g++)C=C<<1,P==m-1?(P=0,j.push(x(C)),C=0):P++;for(h=O.charCodeAt(0),g=0;g<8;g++)C=C<<1|h&1,P==m-1?(P=0,j.push(x(C)),C=0):P++,h=h>>1}else{for(h=1,g=0;g<B;g++)C=C<<1|h,P==m-1?(P=0,j.push(x(C)),C=0):P++,h=0;for(h=O.charCodeAt(0),g=0;g<16;g++)C=C<<1|h&1,P==m-1?(P=0,j.push(x(C)),C=0):P++,h=h>>1}A--,A==0&&(A=Math.pow(2,B),B++),delete k[O]}else for(h=w[O],g=0;g<B;g++)C=C<<1|h&1,P==m-1?(P=0,j.push(x(C)),C=0):P++,h=h>>1;A--,A==0&&(A=Math.pow(2,B),B++),w[M]=z++,O=String(S)}if(O!==""){if(Object.prototype.hasOwnProperty.call(k,O)){if(O.charCodeAt(0)<256){for(g=0;g<B;g++)C=C<<1,P==m-1?(P=0,j.push(x(C)),C=0):P++;for(h=O.charCodeAt(0),g=0;g<8;g++)C=C<<1|h&1,P==m-1?(P=0,j.push(x(C)),C=0):P++,h=h>>1}else{for(h=1,g=0;g<B;g++)C=C<<1|h,P==m-1?(P=0,j.push(x(C)),C=0):P++,h=0;for(h=O.charCodeAt(0),g=0;g<16;g++)C=C<<1|h&1,P==m-1?(P=0,j.push(x(C)),C=0):P++,h=h>>1}A--,A==0&&(A=Math.pow(2,B),B++),delete k[O]}else for(h=w[O],g=0;g<B;g++)C=C<<1|h&1,P==m-1?(P=0,j.push(x(C)),C=0):P++,h=h>>1;A--,A==0&&(A=Math.pow(2,B),B++)}for(h=2,g=0;g<B;g++)C=C<<1|h&1,P==m-1?(P=0,j.push(x(C)),C=0):P++,h=h>>1;for(;;)if(C=C<<1,P==m-1){j.push(x(C));break}else P++;return j.join("")},decompress:function(p){return p==null?"":p==""?null:c._decompress(p.length,32768,function(m){return p.charCodeAt(m)})},_decompress:function(p,m,x){var g=[],h=4,w=4,k=3,S="",M=[],O,A,z,B,j,C,P,L={val:x(0),position:m,index:1};for(O=0;O<3;O+=1)g[O]=O;for(z=0,j=Math.pow(2,2),C=1;C!=j;)B=L.val&L.position,L.position>>=1,L.position==0&&(L.position=m,L.val=x(L.index++)),z|=(B>0?1:0)*C,C<<=1;switch(z){case 0:for(z=0,j=Math.pow(2,8),C=1;C!=j;)B=L.val&L.position,L.position>>=1,L.position==0&&(L.position=m,L.val=x(L.index++)),z|=(B>0?1:0)*C,C<<=1;P=i(z);break;case 1:for(z=0,j=Math.pow(2,16),C=1;C!=j;)B=L.val&L.position,L.position>>=1,L.position==0&&(L.position=m,L.val=x(L.index++)),z|=(B>0?1:0)*C,C<<=1;P=i(z);break;case 2:return""}for(g[3]=P,A=P,M.push(P);;){if(L.index>p)return"";for(z=0,j=Math.pow(2,k),C=1;C!=j;)B=L.val&L.position,L.position>>=1,L.position==0&&(L.position=m,L.val=x(L.index++)),z|=(B>0?1:0)*C,C<<=1;switch(P=z){case 0:for(z=0,j=Math.pow(2,8),C=1;C!=j;)B=L.val&L.position,L.position>>=1,L.position==0&&(L.position=m,L.val=x(L.index++)),z|=(B>0?1:0)*C,C<<=1;g[w++]=i(z),P=w-1,h--;break;case 1:for(z=0,j=Math.pow(2,16),C=1;C!=j;)B=L.val&L.position,L.position>>=1,L.position==0&&(L.position=m,L.val=x(L.index++)),z|=(B>0?1:0)*C,C<<=1;g[w++]=i(z),P=w-1,h--;break;case 2:return M.join("")}if(h==0&&(h=Math.pow(2,k),k++),g[P])S=g[P];else if(P===w)S=A+A.charAt(0);else return null;M.push(S),g[w++]=A+S.charAt(0),h--,A=S,h==0&&(h=Math.pow(2,k),k++)}}};return c})();e!=null?e.exports=r:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return r})})(bm)),bm.exports}var ZA=QA();const JA=Ks(ZA);var Um={};function L5(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}const eL=(e,r,i,a,l,s,u)=>{const c=a+i.indent,p=i.colors;return e.map(m=>{const x=r[m];let g=u(x,i,c,l,s);return typeof x!="string"&&(g.indexOf(`
`)!==-1&&(g=i.spacingOuter+c+g+i.spacingOuter+a),g="{"+g+"}"),i.spacingInner+a+p.prop.open+m+p.prop.close+"="+p.value.open+g+p.value.close}).join("")},tL=3,rL=(e,r,i,a,l,s)=>e.map(u=>{const c=typeof u=="string"?N5(u,r):s(u,r,i,a,l);return c===""&&typeof u=="object"&&u!==null&&u.nodeType!==tL?"":r.spacingOuter+i+c}).join(""),N5=(e,r)=>{const i=r.colors.content;return i.open+L5(e)+i.close},nL=(e,r)=>{const i=r.colors.comment;return i.open+"<!--"+L5(e)+"-->"+i.close},iL=(e,r,i,a,l)=>{const s=a.colors.tag;return s.open+"<"+e+(r&&s.close+r+a.spacingOuter+l+s.open)+(i?">"+s.close+i+a.spacingOuter+l+s.open+"</"+e:(r&&!a.min?"":" ")+"/")+">"+s.close},aL=(e,r)=>{const i=r.colors.tag;return i.open+"<"+e+i.close+" …"+i.open+" />"+i.close},oL=1,z5=3,I5=8,D5=11,lL=/^((HTML|SVG)\w*)?Element$/,B5=e=>{const{tagName:r}=e;return!!(typeof r=="string"&&r.includes("-")||typeof e.hasAttribute=="function"&&e.hasAttribute("is"))},sL=e=>{const r=e.constructor.name,{nodeType:i}=e;return i===oL&&(lL.test(r)||B5(e))||i===z5&&r==="Text"||i===I5&&r==="Comment"||i===D5&&r==="DocumentFragment"};function uL(e){return e.nodeType===z5}function dL(e){return e.nodeType===I5}function ym(e){return e.nodeType===D5}function cL(e){return{test:r=>{var i;return((r==null||(i=r.constructor)==null?void 0:i.name)||B5(r))&&sL(r)},serialize:(r,i,a,l,s,u)=>{if(uL(r))return N5(r.data,i);if(dL(r))return nL(r.data,i);const c=ym(r)?"DocumentFragment":r.tagName.toLowerCase();return++l>i.maxDepth?aL(c,i):iL(c,eL(ym(r)?[]:Array.from(r.attributes).map(p=>p.name).sort(),ym(r)?{}:Array.from(r.attributes).reduce((p,m)=>(p[m.name]=m.value,p),{}),i,a+i.indent,l,s,u),rL(Array.prototype.slice.call(r.childNodes||r.children).filter(e),i,a+i.indent,l,s,u),i,a)}}}let $5=null,kh=null,Sh=null;try{const e=Pi&&Pi.require;kh=e.call(Pi,"fs").readFileSync,Sh=e.call(Pi,"@babel/code-frame").codeFrameColumns,$5=e.call(Pi,"picocolors")}catch{}function pL(e){const r=e.indexOf("(")+1,i=e.indexOf(")"),a=e.slice(r,i),l=a.split(":"),[s,u,c]=[l[0],parseInt(l[1],10),parseInt(l[2],10)];let p="";try{p=kh(s,"utf-8")}catch{return""}const m=Sh(p,{start:{line:u,column:c}},{highlightCode:!0,linesBelow:0});return $5.dim(a)+`
`+m+`
`}function fL(){if(!kh||!Sh)return"";const r=new Error().stack.split(`
`).slice(1).find(i=>!i.includes("node_modules/"));return pL(r)}const F5=3;function wm(){return typeof jest<"u"&&jest!==null?setTimeout._isMockFunction===!0||Object.prototype.hasOwnProperty.call(setTimeout,"clock"):!1}function Eh(){if(typeof window>"u")throw new Error("Could not find default container");return window.document}function V5(e){if(e.defaultView)return e.defaultView;if(e.ownerDocument&&e.ownerDocument.defaultView)return e.ownerDocument.defaultView;if(e.window)return e.window;throw e.ownerDocument&&e.ownerDocument.defaultView===null?new Error("It looks like the window object is not available for the provided node."):e.then instanceof Function?new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?"):Array.isArray(e)?new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?"):typeof e.debug=="function"&&typeof e.logTestingPlaygroundURL=="function"?new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?"):new Error("The given node is not an Element, the node type is: "+typeof e+".")}function Hr(e){if(!e||typeof e.querySelector!="function"||typeof e.querySelectorAll!="function")throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got "+r(e)+".");function r(i){return typeof i=="object"?i===null?"null":i.constructor.name:typeof i}}const mL=()=>{if(typeof process>"u")return!1;let e;try{var r;const i=(r=Um)==null?void 0:r.COLORS;i&&(e=JSON.parse(i))}catch{}return typeof e=="boolean"?e:process.versions!==void 0&&process.versions.node!==void 0},{DOMCollection:hL}=Wc.plugins,gL=1,xL=8;function vL(e){return e.nodeType!==xL&&(e.nodeType!==gL||!e.matches(Ie().defaultIgnore))}function Hs(e,r,i){if(i===void 0&&(i={}),e||(e=Eh().body),typeof r!="number"&&(r=typeof process<"u"&&typeof Um<"u"&&Um.DEBUG_PRINT_LIMIT||7e3),r===0)return"";e.documentElement&&(e=e.documentElement);let a=typeof e;if(a==="object"?a=e.constructor.name:e={},!("outerHTML"in e))throw new TypeError("Expected an element or document but got "+a);const{filterNode:l=vL,...s}=i,u=Wc.format(e,{plugins:[cL(l),hL],printFunctionName:!1,highlight:mL(),...s});return r!==void 0&&e.outerHTML.length>r?u.slice(0,r)+"...":u}const Km=function(){const e=fL();console.log(e?Hs(...arguments)+`

`+e:Hs(...arguments))};let Un={testIdAttribute:"data-testid",asyncUtilTimeout:1e3,asyncWrapper:e=>e(),unstable_advanceTimersWrapper:e=>e(),eventWrapper:e=>e(),defaultHidden:!1,defaultIgnore:"script, style",showOriginalStackTrace:!1,throwSuggestions:!1,getElementError(e,r){const i=Hs(r),a=new Error([e,"Ignored nodes: comments, "+Un.defaultIgnore+`
`+i].filter(Boolean).join(`

`));return a.name="TestingLibraryElementError",a},_disableExpensiveErrorDiagnostics:!1,computedStyleSupportsPseudoElements:!1};function bL(e){try{return Un._disableExpensiveErrorDiagnostics=!0,e()}finally{Un._disableExpensiveErrorDiagnostics=!1}}function yL(e){typeof e=="function"&&(e=e(Un)),Un={...Un,...e}}function Ie(){return Un}const wL=["button","meter","output","progress","select","textarea","input"];function H5(e){return wL.includes(e.nodeName.toLowerCase())?"":e.nodeType===F5?e.textContent:Array.from(e.childNodes).map(r=>H5(r)).join("")}function Ym(e){let r;return e.tagName.toLowerCase()==="label"?r=H5(e):r=e.value||e.textContent,r}function W5(e){if(e.labels!==void 0){var r;return(r=e.labels)!=null?r:[]}if(!kL(e))return[];const i=e.ownerDocument.querySelectorAll("label");return Array.from(i).filter(a=>a.control===e)}function kL(e){return/BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName)||e.tagName==="INPUT"&&e.getAttribute("type")!=="hidden"}function U5(e,r,i){let{selector:a="*"}=i===void 0?{}:i;const l=r.getAttribute("aria-labelledby"),s=l?l.split(" "):[];return s.length?s.map(u=>{const c=e.querySelector('[id="'+u+'"]');return c?{content:Ym(c),formControl:null}:{content:"",formControl:null}}):Array.from(W5(r)).map(u=>{const c=Ym(u),m=Array.from(u.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter(x=>x.matches(a))[0];return{content:c,formControl:m}})}function K5(e){if(e==null)throw new Error("It looks like "+e+" was passed instead of a matcher. Did you do something like getByText("+e+")?")}function Di(e,r,i,a){if(typeof e!="string")return!1;K5(i);const l=a(e);return typeof i=="string"||typeof i=="number"?l.toLowerCase().includes(i.toString().toLowerCase()):typeof i=="function"?i(l,r):Y5(i,l)}function Fr(e,r,i,a){if(typeof e!="string")return!1;K5(i);const l=a(e);return i instanceof Function?i(l,r):i instanceof RegExp?Y5(i,l):l===String(i)}function Rh(e){let{trim:r=!0,collapseWhitespace:i=!0}=e===void 0?{}:e;return a=>{let l=a;return l=r?l.trim():l,l=i?l.replace(/\s+/g," "):l,l}}function Gn(e){let{trim:r,collapseWhitespace:i,normalizer:a}=e;if(!a)return Rh({trim:r,collapseWhitespace:i});if(typeof r<"u"||typeof i<"u")throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');return a}function Y5(e,r){const i=e.test(r);return e.global&&e.lastIndex!==0&&(console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."),e.lastIndex=0),i}function tu(e){return e.matches("input[type=submit], input[type=button], input[type=reset]")?e.value:Array.from(e.childNodes).filter(r=>r.nodeType===F5&&!!r.textContent).map(r=>r.textContent).join("")}const SL=EL(Zt.elementRoles);function G5(e){return e.hidden===!0||e.getAttribute("aria-hidden")==="true"||e.ownerDocument.defaultView.getComputedStyle(e).display==="none"}function Uc(e,r){r===void 0&&(r={});const{isSubtreeInaccessible:i=G5}=r;if(e.ownerDocument.defaultView.getComputedStyle(e).visibility==="hidden")return!0;let l=e;for(;l;){if(i(l))return!0;l=l.parentElement}return!1}function Ch(e){for(const{match:r,roles:i}of SL)if(r(e))return[...i];return[]}function EL(e){function r(u){let{name:c,attributes:p}=u;return""+c+p.map(m=>{let{name:x,value:g,constraints:h=[]}=m;const w=h.indexOf("undefined")!==-1,k=h.indexOf("set")!==-1;return typeof g<"u"?"["+x+'="'+g+'"]':w?":not(["+x+"])":k?"["+x+"]:not(["+x+'=""])':"["+x+"]"}).join("")}function i(u){let{attributes:c=[]}=u;return c.length}function a(u,c){let{specificity:p}=u,{specificity:m}=c;return m-p}function l(u){let{attributes:c=[]}=u;const p=c.findIndex(x=>x.value&&x.name==="type"&&x.value==="text");p>=0&&(c=[...c.slice(0,p),...c.slice(p+1)]);const m=r({...u,attributes:c});return x=>p>=0&&x.type!=="text"?!1:x.matches(m)}let s=[];for(const[u,c]of e.entries())s=[...s,{match:l(u),roles:Array.from(c),specificity:i(u)}];return s.sort(a)}function X5(e,r){let{hidden:i=!1}=r===void 0?{}:r;function a(l){return[l,...Array.from(l.children).reduce((s,u)=>[...s,...a(u)],[])]}return a(e).filter(l=>i===!1?Uc(l)===!1:!0).reduce((l,s)=>{let u=[];return s.hasAttribute("role")?u=s.getAttribute("role").split(" ").slice(0,1):u=Ch(s),u.reduce((c,p)=>Array.isArray(c[p])?{...c,[p]:[...c[p],s]}:{...c,[p]:[s]},l)},{})}function Q5(e,r){let{hidden:i,includeDescription:a}=r;const l=X5(e,{hidden:i});return Object.entries(l).filter(s=>{let[u]=s;return u!=="generic"}).map(s=>{let[u,c]=s;const p="-".repeat(50),m=c.map(x=>{const g='Name "'+yh(x,{computedStyleSupportsPseudoElements:Ie().computedStyleSupportsPseudoElements})+`":
`,h=Hs(x.cloneNode(!1));if(a){const w='Description "'+A5(x,{computedStyleSupportsPseudoElements:Ie().computedStyleSupportsPseudoElements})+`":
`;return""+g+w+h}return""+g+h}).join(`

`);return u+`:

`+m+`

`+p}).join(`
`)}const RL=function(e,r){let{hidden:i=!1}=r===void 0?{}:r;return console.log(Q5(e,{hidden:i}))};function CL(e){return e.tagName==="OPTION"?e.selected:ru(e,"aria-selected")}function PL(e){return e.getAttribute("aria-busy")==="true"}function OL(e){if(!("indeterminate"in e&&e.indeterminate))return"checked"in e?e.checked:ru(e,"aria-checked")}function _L(e){return ru(e,"aria-pressed")}function jL(e){var r,i;return(r=(i=ru(e,"aria-current"))!=null?i:e.getAttribute("aria-current"))!=null?r:!1}function TL(e){return ru(e,"aria-expanded")}function ru(e,r){const i=e.getAttribute(r);if(i==="true")return!0;if(i==="false")return!1}function ML(e){const r={H1:1,H2:2,H3:3,H4:4,H5:5,H6:6};return e.getAttribute("aria-level")&&Number(e.getAttribute("aria-level"))||r[e.tagName]}function qL(e){const r=e.getAttribute("aria-valuenow");return r===null?void 0:+r}function AL(e){const r=e.getAttribute("aria-valuemax");return r===null?void 0:+r}function LL(e){const r=e.getAttribute("aria-valuemin");return r===null?void 0:+r}function NL(e){const r=e.getAttribute("aria-valuetext");return r===null?void 0:r}const Qy=Rh();function zL(e){return e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function Zy(e){return new RegExp(zL(e.toLowerCase()),"i")}function mn(e,r,i,a){let{variant:l,name:s}=a,u="";const c={},p=[["Role","TestId"].includes(e)?i:Zy(i)];s&&(c.name=Zy(s)),e==="Role"&&Uc(r)&&(c.hidden=!0,u=`Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `),Object.keys(c).length>0&&p.push(c);const m=l+"By"+e;return{queryName:e,queryMethod:m,queryArgs:p,variant:l,warning:u,toString(){u&&console.warn(u);let[x,g]=p;return x=typeof x=="string"?"'"+x+"'":x,g=g?", { "+Object.entries(g).map(h=>{let[w,k]=h;return w+": "+k}).join(", ")+" }":"",m+"("+x+g+")"}}}function hn(e,r,i){return i&&(!r||r.toLowerCase()===e.toLowerCase())}function Tc(e,r,i){var a,l;if(r===void 0&&(r="get"),e.matches(Ie().defaultIgnore))return;const s=(a=e.getAttribute("role"))!=null?a:(l=Ch(e))==null?void 0:l[0];if(s!=="generic"&&hn("Role",i,s))return mn("Role",e,s,{variant:r,name:yh(e,{computedStyleSupportsPseudoElements:Ie().computedStyleSupportsPseudoElements})});const u=U5(document,e).map(h=>h.content).join(" ");if(hn("LabelText",i,u))return mn("LabelText",e,u,{variant:r});const c=e.getAttribute("placeholder");if(hn("PlaceholderText",i,c))return mn("PlaceholderText",e,c,{variant:r});const p=Qy(tu(e));if(hn("Text",i,p))return mn("Text",e,p,{variant:r});if(hn("DisplayValue",i,e.value))return mn("DisplayValue",e,Qy(e.value),{variant:r});const m=e.getAttribute("alt");if(hn("AltText",i,m))return mn("AltText",e,m,{variant:r});const x=e.getAttribute("title");if(hn("Title",i,x))return mn("Title",e,x,{variant:r});const g=e.getAttribute(Ie().testIdAttribute);if(hn("TestId",i,g))return mn("TestId",e,g,{variant:r})}function Md(e,r){e.stack=r.stack.replace(r.message,e.message)}function IL(e,r){let{container:i=Eh(),timeout:a=Ie().asyncUtilTimeout,showOriginalStackTrace:l=Ie().showOriginalStackTrace,stackTraceError:s,interval:u=50,onTimeout:c=m=>(Object.defineProperty(m,"message",{value:Ie().getElementError(m.message,i).message}),m),mutationObserverOptions:p={subtree:!0,childList:!0,attributes:!0,characterData:!0}}=r;if(typeof e!="function")throw new TypeError("Received `callback` arg must be a function");return new Promise(async(m,x)=>{let g,h,w,k=!1,S="idle";const M=setTimeout(j,a),O=wm();if(O){const{unstable_advanceTimersWrapper:C}=Ie();for(B();!k;){if(!wm()){const P=new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");l||Md(P,s),x(P);return}if(await C(async()=>{jest.advanceTimersByTime(u)}),k)break;B()}}else{try{Hr(i)}catch(P){x(P);return}h=setInterval(z,u);const{MutationObserver:C}=V5(i);w=new C(z),w.observe(i,p),B()}function A(C,P){k=!0,clearTimeout(M),O||(clearInterval(h),w.disconnect()),C?x(C):m(P)}function z(){if(wm()){const C=new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");return l||Md(C,s),x(C)}else return B()}function B(){if(S!=="pending")try{const C=bL(e);typeof(C==null?void 0:C.then)=="function"?(S="pending",C.then(P=>{S="resolved",A(null,P)},P=>{S="rejected",g=P})):A(null,C)}catch(C){g=C}}function j(){let C;g?(C=g,!l&&C.name==="TestingLibraryElementError"&&Md(C,s)):(C=new Error("Timed out in waitFor."),l||Md(C,s)),A(c(C),null)}})}function Ph(e,r){const i=new Error("STACK_TRACE_MESSAGE");return Ie().asyncWrapper(()=>IL(e,{stackTraceError:i,...r}))}function Kc(e,r){return Ie().getElementError(e,r)}function Yc(e,r){return Kc(e+"\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).",r)}function Xn(e,r,i,a){let{exact:l=!0,collapseWhitespace:s,trim:u,normalizer:c}=a===void 0?{}:a;const p=l?Fr:Di,m=Gn({collapseWhitespace:s,trim:u,normalizer:c});return Array.from(r.querySelectorAll("["+e+"]")).filter(x=>p(x.getAttribute(e),x,i,m))}function Z5(e,r,i,a){const l=Xn(e,r,i,a);if(l.length>1)throw Yc("Found multiple elements by ["+e+"="+i+"]",r);return l[0]||null}function Li(e,r){return function(i){for(var a=arguments.length,l=new Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];const u=e(i,...l);if(u.length>1){const c=u.map(p=>Kc(null,p).message).join(`

`);throw Yc(r(i,...l)+`

Here are the matching elements:

`+c,i)}return u[0]||null}}function J5(e,r){return Ie().getElementError(`A better query is available, try this:
`+e.toString()+`
`,r)}function Oh(e,r){return function(i){for(var a=arguments.length,l=new Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];const u=e(i,...l);if(!u.length)throw Ie().getElementError(r(i,...l),i);return u}}function Ni(e){return(r,i,a,l)=>Ph(()=>e(r,i,a),{container:r,...l})}const yn=(e,r,i)=>function(a){for(var l=arguments.length,s=new Array(l>1?l-1:0),u=1;u<l;u++)s[u-1]=arguments[u];const c=e(a,...s),[{suggest:p=Ie().throwSuggestions}={}]=s.slice(-1);if(c&&p){const m=Tc(c,i);if(m&&!r.endsWith(m.queryName))throw J5(m.toString(),a)}return c},At=(e,r,i)=>function(a){for(var l=arguments.length,s=new Array(l>1?l-1:0),u=1;u<l;u++)s[u-1]=arguments[u];const c=e(a,...s),[{suggest:p=Ie().throwSuggestions}={}]=s.slice(-1);if(c.length&&p){const m=[...new Set(c.map(x=>{var g;return(g=Tc(x,i))==null?void 0:g.toString()}))];if(m.length===1&&!r.endsWith(Tc(c[0],i).queryName))throw J5(m[0],a)}return c};function Wr(e,r,i){const a=yn(Li(e,r),e.name,"query"),l=Oh(e,i),s=Li(l,r),u=yn(s,e.name,"get"),c=At(l,e.name.replace("query","get"),"getAll"),p=Ni(At(l,e.name,"findAll")),m=Ni(yn(s,e.name,"find"));return[a,c,u,p,m]}var DL=Object.freeze({__proto__:null,getElementError:Kc,wrapAllByQueryWithSuggestion:At,wrapSingleQueryWithSuggestion:yn,getMultipleElementsFoundError:Yc,queryAllByAttribute:Xn,queryByAttribute:Z5,makeSingleQuery:Li,makeGetAllQuery:Oh,makeFindQuery:Ni,buildQueries:Wr});function BL(e){return Array.from(e.querySelectorAll("label,input")).map(r=>({node:r,textToMatch:Ym(r)})).filter(r=>{let{textToMatch:i}=r;return i!==null})}const $L=function(e,r,i){let{exact:a=!0,trim:l,collapseWhitespace:s,normalizer:u}=i===void 0?{}:i;const c=a?Fr:Di,p=Gn({collapseWhitespace:s,trim:l,normalizer:u});return BL(e).filter(x=>{let{node:g,textToMatch:h}=x;return c(h,g,r,p)}).map(x=>{let{node:g}=x;return g})},Ws=function(e,r,i){let{selector:a="*",exact:l=!0,collapseWhitespace:s,trim:u,normalizer:c}=i===void 0?{}:i;Hr(e);const p=l?Fr:Di,m=Gn({collapseWhitespace:s,trim:u,normalizer:c}),x=Array.from(e.querySelectorAll("*")).filter(g=>W5(g).length||g.hasAttribute("aria-labelledby")).reduce((g,h)=>{const w=U5(e,h,{selector:a});w.filter(S=>!!S.formControl).forEach(S=>{p(S.content,S.formControl,r,m)&&S.formControl&&g.push(S.formControl)});const k=w.filter(S=>!!S.content).map(S=>S.content);return p(k.join(" "),h,r,m)&&g.push(h),k.length>1&&k.forEach((S,M)=>{p(S,h,r,m)&&g.push(h);const O=[...k];O.splice(M,1),O.length>1&&p(O.join(" "),h,r,m)&&g.push(h)}),g},[]).concat(Xn("aria-label",e,r,{exact:l,normalizer:m}));return Array.from(new Set(x)).filter(g=>g.matches(a))},Yn=function(e,r){for(var i=arguments.length,a=new Array(i>2?i-2:0),l=2;l<i;l++)a[l-2]=arguments[l];const s=Ws(e,r,...a);if(!s.length){const u=$L(e,r,...a);if(u.length){const c=u.map(p=>FL(e,p)).filter(p=>!!p);throw c.length?Ie().getElementError(c.map(p=>"Found a label with the text of: "+r+", however the element associated with this label (<"+p+" />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <"+p+" />, you can use aria-label or aria-labelledby instead.").join(`

`),e):Ie().getElementError("Found a label with the text of: "+r+`, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,e)}else throw Ie().getElementError("Unable to find a label with the text of: "+r,e)}return s};function FL(e,r){const i=r.getAttribute("for");if(!i)return null;const a=e.querySelector('[id="'+i+'"]');return a?a.tagName.toLowerCase():null}const ek=(e,r)=>"Found multiple elements with the text of: "+r,tk=yn(Li(Ws,ek),Ws.name,"query"),rk=Li(Yn,ek),nk=Ni(At(Yn,Yn.name,"findAll")),ik=Ni(yn(rk,Yn.name,"find")),ak=At(Yn,Yn.name,"getAll"),ok=yn(rk,Yn.name,"get"),lk=At(Ws,Ws.name,"queryAll"),Gm=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return Hr(r[0]),Xn("placeholder",...r)},VL=(e,r)=>"Found multiple elements with the placeholder text of: "+r,HL=(e,r)=>"Unable to find an element with the placeholder text of: "+r,sk=At(Gm,Gm.name,"queryAll"),[uk,dk,ck,pk,fk]=Wr(Gm,VL,HL),Xm=function(e,r,i){let{selector:a="*",exact:l=!0,collapseWhitespace:s,trim:u,ignore:c=Ie().defaultIgnore,normalizer:p}=i===void 0?{}:i;Hr(e);const m=l?Fr:Di,x=Gn({collapseWhitespace:s,trim:u,normalizer:p});let g=[];return typeof e.matches=="function"&&e.matches(a)&&(g=[e]),[...g,...Array.from(e.querySelectorAll(a))].filter(h=>!c||!h.matches(c)).filter(h=>m(tu(h),h,r,x))},WL=(e,r)=>"Found multiple elements with the text: "+r,UL=function(e,r,i){i===void 0&&(i={});const{collapseWhitespace:a,trim:l,normalizer:s,selector:u}=i,p=Gn({collapseWhitespace:a,trim:l,normalizer:s})(r.toString()),m=p!==r.toString(),x=(u??"*")!=="*";return"Unable to find an element with the text: "+(m?p+" (normalized from '"+r+"')":r)+(x?", which matches selector '"+u+"'":"")+". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible."},mk=At(Xm,Xm.name,"queryAll"),[hk,gk,xk,vk,bk]=Wr(Xm,WL,UL),Qm=function(e,r,i){let{exact:a=!0,collapseWhitespace:l,trim:s,normalizer:u}=i===void 0?{}:i;Hr(e);const c=a?Fr:Di,p=Gn({collapseWhitespace:l,trim:s,normalizer:u});return Array.from(e.querySelectorAll("input,textarea,select")).filter(m=>m.tagName==="SELECT"?Array.from(m.options).filter(g=>g.selected).some(g=>c(tu(g),g,r,p)):c(m.value,m,r,p))},KL=(e,r)=>"Found multiple elements with the display value: "+r+".",YL=(e,r)=>"Unable to find an element with the display value: "+r+".",yk=At(Qm,Qm.name,"queryAll"),[wk,kk,Sk,Ek,Rk]=Wr(Qm,KL,YL),GL=/^(img|input|area|.+-.+)$/i,Zm=function(e,r,i){return i===void 0&&(i={}),Hr(e),Xn("alt",e,r,i).filter(a=>GL.test(a.tagName))},XL=(e,r)=>"Found multiple elements with the alt text: "+r,QL=(e,r)=>"Unable to find an element with the alt text: "+r,Ck=At(Zm,Zm.name,"queryAll"),[Pk,Ok,_k,jk,Tk]=Wr(Zm,XL,QL),ZL=e=>{var r;return e.tagName.toLowerCase()==="title"&&((r=e.parentElement)==null?void 0:r.tagName.toLowerCase())==="svg"},Jm=function(e,r,i){let{exact:a=!0,collapseWhitespace:l,trim:s,normalizer:u}=i===void 0?{}:i;Hr(e);const c=a?Fr:Di,p=Gn({collapseWhitespace:l,trim:s,normalizer:u});return Array.from(e.querySelectorAll("[title], svg > title")).filter(m=>c(m.getAttribute("title"),m,r,p)||ZL(m)&&c(tu(m),m,r,p))},JL=(e,r)=>"Found multiple elements with the title: "+r+".",eN=(e,r)=>"Unable to find an element with the title: "+r+".",Mk=At(Jm,Jm.name,"queryAll"),[qk,Ak,Lk,Nk,zk]=Wr(Jm,JL,eN),eh=function(e,r,i){let{hidden:a=Ie().defaultHidden,name:l,description:s,queryFallbacks:u=!1,selected:c,busy:p,checked:m,pressed:x,current:g,level:h,expanded:w,value:{now:k,min:S,max:M,text:O}={}}=i===void 0?{}:i;if(Hr(e),c!==void 0){var A;if(((A=Zt.roles.get(r))==null?void 0:A.props["aria-selected"])===void 0)throw new Error('"aria-selected" is not supported on role "'+r+'".')}if(p!==void 0){var z;if(((z=Zt.roles.get(r))==null?void 0:z.props["aria-busy"])===void 0)throw new Error('"aria-busy" is not supported on role "'+r+'".')}if(m!==void 0){var B;if(((B=Zt.roles.get(r))==null?void 0:B.props["aria-checked"])===void 0)throw new Error('"aria-checked" is not supported on role "'+r+'".')}if(x!==void 0){var j;if(((j=Zt.roles.get(r))==null?void 0:j.props["aria-pressed"])===void 0)throw new Error('"aria-pressed" is not supported on role "'+r+'".')}if(g!==void 0){var C;if(((C=Zt.roles.get(r))==null?void 0:C.props["aria-current"])===void 0)throw new Error('"aria-current" is not supported on role "'+r+'".')}if(h!==void 0&&r!=="heading")throw new Error('Role "'+r+'" cannot have "level" property.');if(k!==void 0){var P;if(((P=Zt.roles.get(r))==null?void 0:P.props["aria-valuenow"])===void 0)throw new Error('"aria-valuenow" is not supported on role "'+r+'".')}if(M!==void 0){var L;if(((L=Zt.roles.get(r))==null?void 0:L.props["aria-valuemax"])===void 0)throw new Error('"aria-valuemax" is not supported on role "'+r+'".')}if(S!==void 0){var q;if(((q=Zt.roles.get(r))==null?void 0:q.props["aria-valuemin"])===void 0)throw new Error('"aria-valuemin" is not supported on role "'+r+'".')}if(O!==void 0){var b;if(((b=Zt.roles.get(r))==null?void 0:b.props["aria-valuetext"])===void 0)throw new Error('"aria-valuetext" is not supported on role "'+r+'".')}if(w!==void 0){var W;if(((W=Zt.roles.get(r))==null?void 0:W.props["aria-expanded"])===void 0)throw new Error('"aria-expanded" is not supported on role "'+r+'".')}const Y=new WeakMap;function N(F){return Y.has(F)||Y.set(F,G5(F)),Y.get(F)}return Array.from(e.querySelectorAll(tN(r))).filter(F=>{if(F.hasAttribute("role")){const R=F.getAttribute("role");if(u)return R.split(" ").filter(Boolean).some(D=>D===r);const[te]=R.split(" ");return te===r}return Ch(F).some(R=>R===r)}).filter(F=>{if(c!==void 0)return c===CL(F);if(p!==void 0)return p===PL(F);if(m!==void 0)return m===OL(F);if(x!==void 0)return x===_L(F);if(g!==void 0)return g===jL(F);if(w!==void 0)return w===TL(F);if(h!==void 0)return h===ML(F);if(k!==void 0||M!==void 0||S!==void 0||O!==void 0){let ee=!0;if(k!==void 0&&ee&&(ee=k===qL(F)),M!==void 0&&ee&&(ee=M===AL(F)),S!==void 0&&ee&&(ee=S===LL(F)),O!==void 0){var ie;ee&&(ee=Fr((ie=NL(F))!=null?ie:null,F,O,R=>R))}return ee}return!0}).filter(F=>l===void 0?!0:Fr(yh(F,{computedStyleSupportsPseudoElements:Ie().computedStyleSupportsPseudoElements}),F,l,ie=>ie)).filter(F=>s===void 0?!0:Fr(A5(F,{computedStyleSupportsPseudoElements:Ie().computedStyleSupportsPseudoElements}),F,s,ie=>ie)).filter(F=>a===!1?Uc(F,{isSubtreeInaccessible:N})===!1:!0)};function tN(e){var r;const i='*[role~="'+e+'"]',a=(r=Zt.roleElements.get(e))!=null?r:new Set,l=new Set(Array.from(a).map(s=>{let{name:u}=s;return u}));return[i].concat(Array.from(l)).join(",")}const Ik=e=>{let r="";return e===void 0?r="":typeof e=="string"?r=' and name "'+e+'"':r=" and name `"+e+"`",r},rN=function(e,r,i){let{name:a}=i===void 0?{}:i;return'Found multiple elements with the role "'+r+'"'+Ik(a)},nN=function(e,r,i){let{hidden:a=Ie().defaultHidden,name:l,description:s}=i===void 0?{}:i;if(Ie()._disableExpensiveErrorDiagnostics)return'Unable to find role="'+r+'"'+Ik(l);let u="";Array.from(e.children).forEach(x=>{u+=Q5(x,{hidden:a,includeDescription:s!==void 0})});let c;u.length===0?a===!1?c="There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole":c="There are no available roles.":c=(`
Here are the `+(a===!1?"accessible":"available")+` roles:

  `+u.replace(/\n/g,`
  `).replace(/\n\s\s\n/g,`

`)+`
`).trim();let p="";l===void 0?p="":typeof l=="string"?p=' and name "'+l+'"':p=" and name `"+l+"`";let m="";return s===void 0?m="":typeof s=="string"?m=' and description "'+s+'"':m=" and description `"+s+"`",(`
Unable to find an `+(a===!1?"accessible ":"")+'element with the role "'+r+'"'+p+m+`

`+c).trim()},Dk=At(eh,eh.name,"queryAll"),[Bk,$k,Fk,Vk,Hk]=Wr(eh,rN,nN),_h=()=>Ie().testIdAttribute,th=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return Hr(r[0]),Xn(_h(),...r)},iN=(e,r)=>"Found multiple elements by: ["+_h()+'="'+r+'"]',aN=(e,r)=>"Unable to find an element by: ["+_h()+'="'+r+'"]',Wk=At(th,th.name,"queryAll"),[Uk,Kk,Yk,Gk,Xk]=Wr(th,iN,aN);var Mc=Object.freeze({__proto__:null,queryAllByLabelText:lk,queryByLabelText:tk,getAllByLabelText:ak,getByLabelText:ok,findAllByLabelText:nk,findByLabelText:ik,queryByPlaceholderText:uk,queryAllByPlaceholderText:sk,getByPlaceholderText:ck,getAllByPlaceholderText:dk,findAllByPlaceholderText:pk,findByPlaceholderText:fk,queryByText:hk,queryAllByText:mk,getByText:xk,getAllByText:gk,findAllByText:vk,findByText:bk,queryByDisplayValue:wk,queryAllByDisplayValue:yk,getByDisplayValue:Sk,getAllByDisplayValue:kk,findAllByDisplayValue:Ek,findByDisplayValue:Rk,queryByAltText:Pk,queryAllByAltText:Ck,getByAltText:_k,getAllByAltText:Ok,findAllByAltText:jk,findByAltText:Tk,queryByTitle:qk,queryAllByTitle:Mk,getByTitle:Lk,getAllByTitle:Ak,findAllByTitle:Nk,findByTitle:zk,queryByRole:Bk,queryAllByRole:Dk,getAllByRole:$k,getByRole:Fk,findAllByRole:Vk,findByRole:Hk,queryByTestId:Uk,queryAllByTestId:Wk,getByTestId:Yk,getAllByTestId:Kk,findAllByTestId:Gk,findByTestId:Xk});function rh(e,r,i){return r===void 0&&(r=Mc),i===void 0&&(i={}),Object.keys(r).reduce((a,l)=>{const s=r[l];return a[l]=s.bind(null,e),a},i)}const Qk=e=>!e||Array.isArray(e)&&!e.length;function Jy(e){if(Qk(e))throw new Error("The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.")}async function oN(e,r){const i=new Error("Timed out in waitForElementToBeRemoved.");if(typeof e!="function"){Jy(e);const l=(Array.isArray(e)?e:[e]).map(s=>{let u=s.parentElement;if(u===null)return()=>null;for(;u.parentElement;)u=u.parentElement;return()=>u.contains(s)?s:null});e=()=>l.map(s=>s()).filter(Boolean)}return Jy(e()),Ph(()=>{let a;try{a=e()}catch(l){if(l.name==="TestingLibraryElementError")return;throw l}if(!Qk(a))throw i},r)}const ew={copy:{EventType:"ClipboardEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},cut:{EventType:"ClipboardEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},paste:{EventType:"ClipboardEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},compositionEnd:{EventType:"CompositionEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},compositionStart:{EventType:"CompositionEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},compositionUpdate:{EventType:"CompositionEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},keyDown:{EventType:"KeyboardEvent",defaultInit:{bubbles:!0,cancelable:!0,charCode:0,composed:!0}},keyPress:{EventType:"KeyboardEvent",defaultInit:{bubbles:!0,cancelable:!0,charCode:0,composed:!0}},keyUp:{EventType:"KeyboardEvent",defaultInit:{bubbles:!0,cancelable:!0,charCode:0,composed:!0}},focus:{EventType:"FocusEvent",defaultInit:{bubbles:!1,cancelable:!1,composed:!0}},blur:{EventType:"FocusEvent",defaultInit:{bubbles:!1,cancelable:!1,composed:!0}},focusIn:{EventType:"FocusEvent",defaultInit:{bubbles:!0,cancelable:!1,composed:!0}},focusOut:{EventType:"FocusEvent",defaultInit:{bubbles:!0,cancelable:!1,composed:!0}},change:{EventType:"Event",defaultInit:{bubbles:!0,cancelable:!1}},input:{EventType:"InputEvent",defaultInit:{bubbles:!0,cancelable:!1,composed:!0}},invalid:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!0}},submit:{EventType:"Event",defaultInit:{bubbles:!0,cancelable:!0}},reset:{EventType:"Event",defaultInit:{bubbles:!0,cancelable:!0}},click:{EventType:"MouseEvent",defaultInit:{bubbles:!0,cancelable:!0,button:0,composed:!0}},contextMenu:{EventType:"MouseEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},dblClick:{EventType:"MouseEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},drag:{EventType:"DragEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},dragEnd:{EventType:"DragEvent",defaultInit:{bubbles:!0,cancelable:!1,composed:!0}},dragEnter:{EventType:"DragEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},dragExit:{EventType:"DragEvent",defaultInit:{bubbles:!0,cancelable:!1,composed:!0}},dragLeave:{EventType:"DragEvent",defaultInit:{bubbles:!0,cancelable:!1,composed:!0}},dragOver:{EventType:"DragEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},dragStart:{EventType:"DragEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},drop:{EventType:"DragEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},mouseDown:{EventType:"MouseEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},mouseEnter:{EventType:"MouseEvent",defaultInit:{bubbles:!1,cancelable:!1,composed:!0}},mouseLeave:{EventType:"MouseEvent",defaultInit:{bubbles:!1,cancelable:!1,composed:!0}},mouseMove:{EventType:"MouseEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},mouseOut:{EventType:"MouseEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},mouseOver:{EventType:"MouseEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},mouseUp:{EventType:"MouseEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},select:{EventType:"Event",defaultInit:{bubbles:!0,cancelable:!1}},touchCancel:{EventType:"TouchEvent",defaultInit:{bubbles:!0,cancelable:!1,composed:!0}},touchEnd:{EventType:"TouchEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},touchMove:{EventType:"TouchEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},touchStart:{EventType:"TouchEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},resize:{EventType:"UIEvent",defaultInit:{bubbles:!1,cancelable:!1}},scroll:{EventType:"UIEvent",defaultInit:{bubbles:!1,cancelable:!1}},wheel:{EventType:"WheelEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},abort:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},canPlay:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},canPlayThrough:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},durationChange:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},emptied:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},encrypted:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},ended:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},loadedData:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},loadedMetadata:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},loadStart:{EventType:"ProgressEvent",defaultInit:{bubbles:!1,cancelable:!1}},pause:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},play:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},playing:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},progress:{EventType:"ProgressEvent",defaultInit:{bubbles:!1,cancelable:!1}},rateChange:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},seeked:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},seeking:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},stalled:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},suspend:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},timeUpdate:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},volumeChange:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},waiting:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},load:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},error:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},animationStart:{EventType:"AnimationEvent",defaultInit:{bubbles:!0,cancelable:!1}},animationEnd:{EventType:"AnimationEvent",defaultInit:{bubbles:!0,cancelable:!1}},animationIteration:{EventType:"AnimationEvent",defaultInit:{bubbles:!0,cancelable:!1}},transitionCancel:{EventType:"TransitionEvent",defaultInit:{bubbles:!0,cancelable:!1}},transitionEnd:{EventType:"TransitionEvent",defaultInit:{bubbles:!0,cancelable:!0}},transitionRun:{EventType:"TransitionEvent",defaultInit:{bubbles:!0,cancelable:!1}},transitionStart:{EventType:"TransitionEvent",defaultInit:{bubbles:!0,cancelable:!1}},pointerOver:{EventType:"PointerEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},pointerEnter:{EventType:"PointerEvent",defaultInit:{bubbles:!1,cancelable:!1}},pointerDown:{EventType:"PointerEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},pointerMove:{EventType:"PointerEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},pointerUp:{EventType:"PointerEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},pointerCancel:{EventType:"PointerEvent",defaultInit:{bubbles:!0,cancelable:!1,composed:!0}},pointerOut:{EventType:"PointerEvent",defaultInit:{bubbles:!0,cancelable:!0,composed:!0}},pointerLeave:{EventType:"PointerEvent",defaultInit:{bubbles:!1,cancelable:!1}},gotPointerCapture:{EventType:"PointerEvent",defaultInit:{bubbles:!0,cancelable:!1,composed:!0}},lostPointerCapture:{EventType:"PointerEvent",defaultInit:{bubbles:!0,cancelable:!1,composed:!0}},popState:{EventType:"PopStateEvent",defaultInit:{bubbles:!0,cancelable:!1}},offline:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},online:{EventType:"Event",defaultInit:{bubbles:!1,cancelable:!1}},pageHide:{EventType:"PageTransitionEvent",defaultInit:{bubbles:!0,cancelable:!0}},pageShow:{EventType:"PageTransitionEvent",defaultInit:{bubbles:!0,cancelable:!0}}},tw={doubleClick:"dblClick"};function Us(e,r){return Ie().eventWrapper(()=>{if(!r)throw new Error("Unable to fire an event - please provide an event object.");if(!e)throw new Error('Unable to fire a "'+r.type+'" event - please provide a DOM element.');return e.dispatchEvent(r)})}function gc(e,r,i,a){let{EventType:l="Event",defaultInit:s={}}=a===void 0?{}:a;if(!r)throw new Error('Unable to fire a "'+e+'" event - please provide a DOM element.');const u={...s,...i},{target:{value:c,files:p,...m}={}}=u;c!==void 0&&lN(r,c),p!==void 0&&Object.defineProperty(r,"files",{configurable:!0,enumerable:!0,writable:!0,value:p}),Object.assign(r,m);const x=V5(r),g=x[l]||x.Event;let h;if(typeof g=="function")h=new g(e,u);else{h=x.document.createEvent(l);const{bubbles:k,cancelable:S,detail:M,...O}=u;h.initEvent(e,k,S,M),Object.keys(O).forEach(A=>{h[A]=O[A]})}return["dataTransfer","clipboardData"].forEach(k=>{const S=u[k];typeof S=="object"&&(typeof x.DataTransfer=="function"?Object.defineProperty(h,k,{value:Object.getOwnPropertyNames(S).reduce((M,O)=>(Object.defineProperty(M,O,{value:S[O]}),M),new x.DataTransfer)}):Object.defineProperty(h,k,{value:S}))}),h}Object.keys(ew).forEach(e=>{const{EventType:r,defaultInit:i}=ew[e],a=e.toLowerCase();gc[e]=(l,s)=>gc(a,l,s,{EventType:r,defaultInit:i}),Us[e]=(l,s)=>Us(l,gc[e](l,s))});function lN(e,r){const{set:i}=Object.getOwnPropertyDescriptor(e,"value")||{},a=Object.getPrototypeOf(e),{set:l}=Object.getOwnPropertyDescriptor(a,"value")||{};if(l&&i!==l)l.call(e,r);else if(i)i.call(e,r);else throw new Error("The given element does not have a value setter")}Object.keys(tw).forEach(e=>{const r=tw[e];Us[e]=function(){return Us[r](...arguments)}});function sN(e){return e.replace(/[ \t]*[\n][ \t]*/g,`
`)}function uN(e){return JA.compressToEncodedURIComponent(sN(e))}function dN(e){return"https://testing-playground.com/#markup="+uN(e)}const cN=(e,r,i)=>Array.isArray(e)?e.forEach(a=>Km(a,r,i)):Km(e,r,i),pN=function(e){if(e===void 0&&(e=Eh().body),!e||!("innerHTML"in e)){console.log("The element you're providing isn't a valid DOM element.");return}if(!e.innerHTML){console.log("The provided element doesn't have any children.");return}const r=dN(e.innerHTML);return console.log(`Open this URL in your browser

`+r),r},rw={debug:cN,logTestingPlaygroundURL:pN},fN=typeof document<"u"&&document.body?rh(document.body,Mc,rw):Object.keys(Mc).reduce((e,r)=>(e[r]=()=>{throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error")},e),rw),mN=Object.freeze(Object.defineProperty({__proto__:null,buildQueries:Wr,configure:yL,createEvent:gc,findAllByAltText:jk,findAllByDisplayValue:Ek,findAllByLabelText:nk,findAllByPlaceholderText:pk,findAllByRole:Vk,findAllByTestId:Gk,findAllByText:vk,findAllByTitle:Nk,findByAltText:Tk,findByDisplayValue:Rk,findByLabelText:ik,findByPlaceholderText:fk,findByRole:Hk,findByTestId:Xk,findByText:bk,findByTitle:zk,fireEvent:Us,getAllByAltText:Ok,getAllByDisplayValue:kk,getAllByLabelText:ak,getAllByPlaceholderText:dk,getAllByRole:$k,getAllByTestId:Kk,getAllByText:gk,getAllByTitle:Ak,getByAltText:_k,getByDisplayValue:Sk,getByLabelText:ok,getByPlaceholderText:ck,getByRole:Fk,getByTestId:Yk,getByText:xk,getByTitle:Lk,getConfig:Ie,getDefaultNormalizer:Rh,getElementError:Kc,getMultipleElementsFoundError:Yc,getNodeText:tu,getQueriesForElement:rh,getRoles:X5,getSuggestedQuery:Tc,isInaccessible:Uc,logDOM:Km,logRoles:RL,makeFindQuery:Ni,makeGetAllQuery:Oh,makeSingleQuery:Li,prettyDOM:Hs,prettyFormat:b9,queries:Mc,queryAllByAltText:Ck,queryAllByAttribute:Xn,queryAllByDisplayValue:yk,queryAllByLabelText:lk,queryAllByPlaceholderText:sk,queryAllByRole:Dk,queryAllByTestId:Wk,queryAllByText:mk,queryAllByTitle:Mk,queryByAltText:Pk,queryByAttribute:Z5,queryByDisplayValue:wk,queryByLabelText:tk,queryByPlaceholderText:uk,queryByRole:Bk,queryByTestId:Uk,queryByText:hk,queryByTitle:qk,queryHelpers:DL,screen:fN,waitFor:Ph,waitForElementToBeRemoved:oN,within:rh,wrapAllByQueryWithSuggestion:At,wrapSingleQueryWithSuggestion:yn},Symbol.toStringTag,{value:"Module"})),kr=Zw(mN);var qd={},km={},Ad={},nw;function hN(){if(nw)return Ad;nw=1,Object.defineProperty(Ad,"__esModule",{value:!0}),Ad.getMouseEventOptions=s;function e(u){return u==="mousedown"||u==="mouseup"||u==="click"||u==="dblclick"}const r={none:0,primary:1,secondary:2,auxiliary:4},i={primary:0,auxiliary:1,secondary:2};function a(u,c){var p;const[m,x]=c==="button"?[i,r]:[r,i],g=(p=Object.entries(m).find(([,h])=>h===u))==null?void 0:p[0];return g&&Object.prototype.hasOwnProperty.call(x,g)?x[g]:0}function l(u,c,p){return e(u)?typeof c[p]=="number"?c[p]:p==="button"&&typeof c.buttons=="number"?a(c.buttons,"buttons"):p==="buttons"&&typeof c.button=="number"?a(c.button,"button"):p!="button"&&e(u)?1:0:0}function s(u,c,p=0){var m;return c=(m=c)!=null?m:{},{...c,detail:u==="mousedown"||u==="mouseup"||u==="click"?1+p:p,buttons:l(u,c,"buttons"),button:l(u,c,"button")}}return Ad}var Ld={},Nd={},iw;function Qn(){if(iw)return Nd;iw=1,Object.defineProperty(Nd,"__esModule",{value:!0}),Nd.isElementType=e;function e(r,i,a){return r.namespaceURI&&r.namespaceURI!=="http://www.w3.org/1999/xhtml"||(i=Array.isArray(i)?i:[i],!i.includes(r.tagName.toLowerCase()))?!1:a?Object.entries(a).every(([l,s])=>r[l]===s):!0}return Nd}var aw;function gN(){if(aw)return Ld;aw=1,Object.defineProperty(Ld,"__esModule",{value:!0}),Ld.isClickableInput=i;var e=Qn();const r=["button","color","file","image","reset","submit","checkbox","radio"];function i(a){return(0,e.isElementType)(a,"button")||(0,e.isElementType)(a,"input")&&r.includes(a.type)}return Ld}var zd={},ow;function xN(){if(ow)return zd;ow=1,Object.defineProperty(zd,"__esModule",{value:!0}),zd.buildTimeValue=e;function e(i){const a=i.replace(/\D/g,"");if(a.length<2)return i;const l=parseInt(a[0],10),s=parseInt(a[1],10);if(l>=3||l===2&&s>=4){let u;return l>=3?u=1:u=2,r(a,u)}return i.length===2?i:r(a,2)}function r(i,a){const l=i.slice(0,a),s=Math.min(parseInt(l,10),23),u=i.slice(a),c=parseInt(u,10),p=Math.min(c,59);return`${s.toString().padStart(2,"0")}:${p.toString().padStart(2,"0")}`}return zd}var Id={},Ri={},lw;function jh(){if(lw)return Ri;lw=1,Object.defineProperty(Ri,"__esModule",{value:!0}),Ri.getSelectionRange=l,Ri.hasSelectionSupport=a,Ri.setSelectionRange=s;var e=Qn(),r;(function(u){u.text="text",u.search="search",u.url="url",u.tel="tel",u.password="password"})(r||(r={}));const i=Symbol("inputSelection");function a(u){return(0,e.isElementType)(u,"textarea")||(0,e.isElementType)(u,"input")&&!!r[u.type]}function l(u){if(a(u))return{selectionStart:u.selectionStart,selectionEnd:u.selectionEnd};if((0,e.isElementType)(u,"input")){var c;return(c=u[i])!=null?c:{selectionStart:null,selectionEnd:null}}const p=u.ownerDocument.getSelection();if(p!=null&&p.rangeCount&&u.contains(p.focusNode)){const m=p.getRangeAt(0);return{selectionStart:m.startOffset,selectionEnd:m.endOffset}}else return{selectionStart:null,selectionEnd:null}}function s(u,c,p){const{selectionStart:m,selectionEnd:x}=l(u);if(m===c&&x===p||(a(u)&&u.setSelectionRange(c,p),(0,e.isElementType)(u,"input")&&(u[i]={selectionStart:c,selectionEnd:p}),(0,e.isElementType)(u,"input")||(0,e.isElementType)(u,"textarea")))return;const g=u.ownerDocument.createRange();g.selectNodeContents(u),u.firstChild&&(g.setStart(u.firstChild,c),g.setEnd(u.firstChild,p));const h=u.ownerDocument.getSelection();h&&(h.removeAllRanges(),h.addRange(g))}return Ri}var Dd={},Bd={},sw;function Th(){if(sw)return Bd;sw=1,Object.defineProperty(Bd,"__esModule",{value:!0}),Bd.isContentEditable=e;function e(r){return r.hasAttribute("contenteditable")&&(r.getAttribute("contenteditable")=="true"||r.getAttribute("contenteditable")=="")}return Bd}var uw;function Gc(){if(uw)return Dd;uw=1,Object.defineProperty(Dd,"__esModule",{value:!0}),Dd.getValue=r;var e=Th();function r(i){return i?(0,e.isContentEditable)(i)?i.textContent:i.value:null}return Dd}var $d={},dw;function Zk(){if(dw)return $d;dw=1,Object.defineProperty($d,"__esModule",{value:!0}),$d.isValidDateValue=e;function e(r,i){const a=r.cloneNode();return a.value=i,a.value===i}return $d}var Fd={},cw;function Jk(){if(cw)return Fd;cw=1,Object.defineProperty(Fd,"__esModule",{value:!0}),Fd.isValidInputTimeValue=e;function e(r,i){const a=r.cloneNode();return a.value=i,a.value===i}return Fd}var pw;function vN(){if(pw)return Id;pw=1,Object.defineProperty(Id,"__esModule",{value:!0}),Id.calculateNewValue=l;var e=jh(),r=Gc(),i=Zk(),a=Jk();function l(s,u,c=(()=>{var x;return(x=(0,r.getValue)(u))!=null?x:""})(),p=(0,e.getSelectionRange)(u),m){const x=p.selectionStart===null?c.length:p.selectionStart,g=p.selectionEnd===null?c.length:p.selectionEnd,h=Math.max(0,x===g&&m==="backward"?x-1:x),w=c.substring(0,h),k=Math.min(c.length,x===g&&m==="forward"?g+1:g),S=c.substring(k,c.length);let M=`${w}${s}${S}`;const O=h+s.length;return u.type==="date"&&!(0,i.isValidDateValue)(u,M)&&(M=c),u.type==="time"&&!(0,a.isValidInputTimeValue)(u,M)&&((0,a.isValidInputTimeValue)(u,s)?M=s:M=c),{newValue:M,newSelectionStart:O}}return Id}var ks={},fw;function bN(){if(fw)return ks;fw=1,Object.defineProperty(ks,"__esModule",{value:!0}),ks.isCursorAtEnd=i,ks.isCursorAtStart=a;var e=jh(),r=Gc();function i(l){var s;const{selectionStart:u,selectionEnd:c}=(0,e.getSelectionRange)(l);return u===c&&(u??0)===((s=(0,r.getValue)(l))!=null?s:"").length}function a(l){const{selectionStart:s,selectionEnd:u}=(0,e.getSelectionRange)(l);return s===u&&(s??0)===0}return ks}var Vd={},mw;function yN(){if(mw)return Vd;mw=1,Object.defineProperty(Vd,"__esModule",{value:!0}),Vd.hasUnreliableEmptyValue=i;var e=Qn(),r;(function(a){a.number="number"})(r||(r={}));function i(a){return(0,e.isElementType)(a,"input")&&!!r[a.type]}return Vd}var gn={},hw;function wN(){if(hw)return gn;hw=1,Object.defineProperty(gn,"__esModule",{value:!0}),gn.editableInputTypes=void 0,gn.isEditable=i,gn.isEditableInput=l;var e=Qn(),r=Th();function i(s){return l(s)||(0,e.isElementType)(s,"textarea",{readOnly:!1})||(0,r.isContentEditable)(s)}let a;gn.editableInputTypes=a,(function(s){s.text="text",s.date="date",s["datetime-local"]="datetime-local",s.email="email",s.month="month",s.number="number",s.password="password",s.search="search",s.tel="tel",s.time="time",s.url="url",s.week="week"})(a||(gn.editableInputTypes=a={}));function l(s){return(0,e.isElementType)(s,"input",{readOnly:!1})&&!!a[s.type]}return gn}var Hd={},gw;function kN(){if(gw)return Hd;gw=1,Object.defineProperty(Hd,"__esModule",{value:!0}),Hd.getSpaceUntilMaxLength=a;var e=Qn(),r=Gc(),i;(function(u){u.email="email",u.password="password",u.search="search",u.telephone="telephone",u.text="text",u.url="url"})(i||(i={}));function a(u){const c=(0,r.getValue)(u);if(c===null)return;const p=l(u);return p?p-c.length:void 0}function l(u){var c;if(!s(u))return;const p=(c=u.getAttribute("maxlength"))!=null?c:"";return/^\d+$/.test(p)&&Number(p)>=0?Number(p):void 0}function s(u){return(0,e.isElementType)(u,"textarea")||(0,e.isElementType)(u,"input")&&!!i[u.type]}return Hd}var Wd={},Ud={},xw;function Mh(){if(xw)return Ud;xw=1,Object.defineProperty(Ud,"__esModule",{value:!0}),Ud.isDisabled=e;function e(r){return!!(r&&r.disabled)}return Ud}var vw;function SN(){if(vw)return Wd;vw=1,Object.defineProperty(Wd,"__esModule",{value:!0}),Wd.getActiveElement=r;var e=Mh();function r(i){const a=i.activeElement;return a!=null&&a.shadowRoot?r(a.shadowRoot):(0,e.isDisabled)(a)?i.ownerDocument?i.ownerDocument.body:i.body:a}return Wd}var Kd={},Yd={},bw;function eS(){if(bw)return Yd;bw=1,Object.defineProperty(Yd,"__esModule",{value:!0}),Yd.isLabelWithInternallyDisabledControl=i;var e=Mh(),r=Qn();function i(a){if(!(0,r.isElementType)(a,"label"))return!1;const l=a.control;return!!(l&&a.contains(l)&&(0,e.isDisabled)(l))}return Yd}var Ss={},yw;function tS(){if(yw)return Ss;yw=1,Object.defineProperty(Ss,"__esModule",{value:!0}),Ss.FOCUSABLE_SELECTOR=void 0;const e=["input:not([type=hidden]):not([disabled])","button:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable=""]','[contenteditable="true"]',"a[href]","[tabindex]:not([disabled])"].join(", ");return Ss.FOCUSABLE_SELECTOR=e,Ss}var ww;function EN(){if(ww)return Kd;ww=1,Object.defineProperty(Kd,"__esModule",{value:!0}),Kd.isFocusable=i;var e=eS(),r=tS();function i(a){return!(0,e.isLabelWithInternallyDisabledControl)(a)&&a.matches(r.FOCUSABLE_SELECTOR)}return Kd}var Gd={},kw;function RN(){if(kw)return Gd;kw=1,Object.defineProperty(Gd,"__esModule",{value:!0}),Gd.eventWrapper=r;var e=kr;function r(i){let a;return(0,e.getConfig)().eventWrapper(()=>{a=i()}),a}return Gd}var Xd={},Dr={},Sw;function rS(){if(Sw)return Dr;Sw=1,Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.TEXT_NODE=void 0,Dr.checkContainerType=a,Dr.getDocument=r,Dr.getWindowFromNode=i,Dr.jestFakeTimersAreEnabled=e,Dr.TEXT_NODE=3;function e(){return typeof jest<"u"&&jest!==null?setTimeout._isMockFunction===!0||Object.prototype.hasOwnProperty.call(setTimeout,"clock"):!1}function r(){if(typeof window>"u")throw new Error("Could not find default container");return window.document}function i(l){if(l.defaultView)return l.defaultView;if(l.ownerDocument&&l.ownerDocument.defaultView)return l.ownerDocument.defaultView;if(l.window)return l.window;throw l.ownerDocument&&l.ownerDocument.defaultView===null?new Error("It looks like the window object is not available for the provided node."):l.then instanceof Function?new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?"):Array.isArray(l)?new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?"):typeof l.debug=="function"&&typeof l.logTestingPlaygroundURL=="function"?new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?"):new Error(`The given node is not an Element, the node type is: ${typeof l}.`)}function a(l){if(!l||typeof l.querySelector!="function"||typeof l.querySelectorAll!="function")throw new TypeError(`Expected container to be an Element, a Document or a DocumentFragment but got ${s(l)}.`);function s(u){return typeof u=="object"?u===null?"null":u.constructor.name:typeof u}}return Dr}var Ew;function CN(){if(Ew)return Xd;Ew=1,Object.defineProperty(Xd,"__esModule",{value:!0}),Xd.isVisible=r;var e=rS();function r(i){const a=(0,e.getWindowFromNode)(i);for(let s=i;(l=s)!=null&&l.ownerDocument;s=s.parentElement){var l;if(a.getComputedStyle(s).display==="none")return!1}return!0}return Xd}var Qd={},Rw;function PN(){if(Rw)return Qd;Rw=1,Object.defineProperty(Qd,"__esModule",{value:!0}),Qd.isDocument=e;function e(r){return r.nodeType===r.DOCUMENT_NODE}return Qd}var Zd={},Cw;function ON(){if(Cw)return Zd;Cw=1,Object.defineProperty(Zd,"__esModule",{value:!0}),Zd.wait=e;function e(r){return new Promise(i=>setTimeout(()=>i(),r))}return Zd}var Jd={},Pw;function _N(){if(Pw)return Jd;Pw=1,Object.defineProperty(Jd,"__esModule",{value:!0}),Jd.hasPointerEvents=r;var e=rS();function r(i){const a=(0,e.getWindowFromNode)(i);for(let s=i;(l=s)!=null&&l.ownerDocument;s=s.parentElement){var l;const u=a.getComputedStyle(s).pointerEvents;if(u&&!["inherit","unset"].includes(u))return u!=="none"}return!0}return Jd}var Es={},Ow;function jN(){if(Ow)return Es;Ow=1,Object.defineProperty(Es,"__esModule",{value:!0}),Es.hasFormSubmit=void 0;const e=r=>!!(r&&(r.querySelector('input[type="submit"]')||r.querySelector('button[type="submit"]')));return Es.hasFormSubmit=e,Es}var _w;function Nt(){return _w||(_w=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0});var r=hN();Object.keys(r).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===r[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return r[b]}})});var i=gN();Object.keys(i).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===i[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return i[b]}})});var a=xN();Object.keys(a).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===a[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return a[b]}})});var l=vN();Object.keys(l).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===l[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return l[b]}})});var s=bN();Object.keys(s).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===s[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return s[b]}})});var u=Gc();Object.keys(u).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===u[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return u[b]}})});var c=yN();Object.keys(c).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===c[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return c[b]}})});var p=Th();Object.keys(p).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===p[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return p[b]}})});var m=wN();Object.keys(m).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===m[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return m[b]}})});var x=Zk();Object.keys(x).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===x[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return x[b]}})});var g=Jk();Object.keys(g).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===g[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return g[b]}})});var h=kN();Object.keys(h).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===h[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return h[b]}})});var w=jh();Object.keys(w).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===w[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return w[b]}})});var k=SN();Object.keys(k).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===k[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return k[b]}})});var S=EN();Object.keys(S).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===S[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return S[b]}})});var M=tS();Object.keys(M).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===M[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return M[b]}})});var O=RN();Object.keys(O).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===O[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return O[b]}})});var A=Qn();Object.keys(A).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===A[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return A[b]}})});var z=eS();Object.keys(z).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===z[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return z[b]}})});var B=CN();Object.keys(B).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===B[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return B[b]}})});var j=Mh();Object.keys(j).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===j[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return j[b]}})});var C=PN();Object.keys(C).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===C[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return C[b]}})});var P=ON();Object.keys(P).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===P[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return P[b]}})});var L=_N();Object.keys(L).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===L[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return L[b]}})});var q=jN();Object.keys(q).forEach(function(b){b==="default"||b==="__esModule"||b in e&&e[b]===q[b]||Object.defineProperty(e,b,{enumerable:!0,get:function(){return q[b]}})})})(km)),km}var Rs={},Cs={},jw;function TN(){if(jw)return Cs;jw=1,Object.defineProperty(Cs,"__esModule",{value:!0}),Cs.hover=a,Cs.unhover=l;var e=kr,r=Nt();function i(s){const u=[s];let c=s;for(;(c=c.parentElement)!=null;)u.push(c);return u}function a(s,u,{skipPointerEventsCheck:c=!1}={}){if(!c&&!(0,r.hasPointerEvents)(s))throw new Error('unable to hover element as it has or inherits pointer-events set to "none".');if((0,r.isLabelWithInternallyDisabledControl)(s))return;const p=i(s).reverse();e.fireEvent.pointerOver(s,u);for(const m of p)e.fireEvent.pointerEnter(m,u);if(!(0,r.isDisabled)(s)){e.fireEvent.mouseOver(s,(0,r.getMouseEventOptions)("mouseover",u));for(const m of p)e.fireEvent.mouseEnter(m,(0,r.getMouseEventOptions)("mouseenter",u))}e.fireEvent.pointerMove(s,u),(0,r.isDisabled)(s)||e.fireEvent.mouseMove(s,(0,r.getMouseEventOptions)("mousemove",u))}function l(s,u,{skipPointerEventsCheck:c=!1}={}){if(!c&&!(0,r.hasPointerEvents)(s))throw new Error('unable to unhover element as it has or inherits pointer-events set to "none".');if((0,r.isLabelWithInternallyDisabledControl)(s))return;const p=i(s);e.fireEvent.pointerMove(s,u),(0,r.isDisabled)(s)||e.fireEvent.mouseMove(s,(0,r.getMouseEventOptions)("mousemove",u)),e.fireEvent.pointerOut(s,u);for(const m of p)e.fireEvent.pointerLeave(m,u);if(!(0,r.isDisabled)(s)){e.fireEvent.mouseOut(s,(0,r.getMouseEventOptions)("mouseout",u));for(const m of p)e.fireEvent.mouseLeave(m,(0,r.getMouseEventOptions)("mouseleave",u))}}return Cs}var ec={},Tw;function MN(){if(Tw)return ec;Tw=1,Object.defineProperty(ec,"__esModule",{value:!0}),ec.blur=r;var e=Nt();function r(i){!(0,e.isFocusable)(i)||!((0,e.getActiveElement)(i.ownerDocument)===i)||(0,e.eventWrapper)(()=>i.blur())}return ec}var tc={},Mw;function qN(){if(Mw)return tc;Mw=1,Object.defineProperty(tc,"__esModule",{value:!0}),tc.focus=r;var e=Nt();function r(i){!(0,e.isFocusable)(i)||(0,e.getActiveElement)(i.ownerDocument)===i||(0,e.eventWrapper)(()=>i.focus())}return tc}var qw;function AN(){if(qw)return Rs;qw=1,Object.defineProperty(Rs,"__esModule",{value:!0}),Rs.click=x,Rs.dblClick=h;var e=kr,r=Nt(),i=TN(),a=MN(),l=qN();function s(w){const k=w.ownerDocument.activeElement;return k&&k!==w.ownerDocument.body&&k!==w?k:null}function u(w,k,{clickCount:S}){(0,r.isLabelWithInternallyDisabledControl)(w)||(e.fireEvent.pointerDown(w,k),e.fireEvent.mouseDown(w,(0,r.getMouseEventOptions)("mousedown",k,S)),e.fireEvent.pointerUp(w,k),e.fireEvent.mouseUp(w,(0,r.getMouseEventOptions)("mouseup",k,S)),g(w,(0,r.getMouseEventOptions)("click",k,S)),w.control&&(0,l.focus)(w.control))}function c(w,k,{clickCount:S}){e.fireEvent.pointerDown(w,k),w.disabled||e.fireEvent.mouseDown(w,(0,r.getMouseEventOptions)("mousedown",k,S)),(0,l.focus)(w),e.fireEvent.pointerUp(w,k),w.disabled||(e.fireEvent.mouseUp(w,(0,r.getMouseEventOptions)("mouseup",k,S)),g(w,(0,r.getMouseEventOptions)("click",k,S)))}function p(w,k,{clickCount:S}){const M=s(w);if(e.fireEvent.pointerDown(w,k),!(0,r.isDisabled)(w)&&e.fireEvent.mouseDown(w,(0,r.getMouseEventOptions)("mousedown",k,S))){const A=m(w,r.isFocusable);M&&!A?(0,a.blur)(M):A&&(0,l.focus)(A)}if(e.fireEvent.pointerUp(w,k),!(0,r.isDisabled)(w)){e.fireEvent.mouseUp(w,(0,r.getMouseEventOptions)("mouseup",k,S)),g(w,(0,r.getMouseEventOptions)("click",k,S));const O=w.closest("label");O!=null&&O.control&&(0,l.focus)(O.control)}}function m(w,k){let S=w;do{if(k(S))return S;S=S.parentElement}while(S&&S!==w.ownerDocument.body)}function x(w,k,{skipHover:S=!1,clickCount:M=0,skipPointerEventsCheck:O=!1}={}){if(!O&&!(0,r.hasPointerEvents)(w))throw new Error('unable to click element as it has or inherits pointer-events set to "none".');S||(0,i.hover)(w,k,{skipPointerEventsCheck:!0}),(0,r.isElementType)(w,"label")?u(w,k,{clickCount:M}):(0,r.isElementType)(w,"input")?w.type==="checkbox"||w.type==="radio"?c(w,k,{clickCount:M}):p(w,k,{clickCount:M}):p(w,k,{clickCount:M})}function g(w,k){k.button===2?e.fireEvent.contextMenu(w,k):e.fireEvent.click(w,k)}function h(w,k,{skipPointerEventsCheck:S=!1}={}){if(!S&&!(0,r.hasPointerEvents)(w))throw new Error('unable to double-click element as it has or inherits pointer-events set to "none".');(0,i.hover)(w,k,{skipPointerEventsCheck:S}),x(w,k,{skipHover:!0,clickCount:0,skipPointerEventsCheck:S}),x(w,k,{skipHover:!0,clickCount:1,skipPointerEventsCheck:S}),e.fireEvent.dblClick(w,(0,r.getMouseEventOptions)("dblclick",k,2))}return Rs}var Sm={},Ps={},rc={},Aw;function LN(){if(Aw)return rc;Aw=1,Object.defineProperty(rc,"__esModule",{value:!0}),rc.getNextKeyDef=a;var e;(function(h){h["{"]="}",h["["]="]"})(e||(e={}));var r;(function(h){h.alt="alt",h.ctrl="ctrl",h.meta="meta",h.shift="shift"})(r||(r={}));var i;(function(h){h.ctrl="Control",h.del="Delete",h.esc="Escape",h.space=" "})(i||(i={}));function a(h,w){var k;const{type:S,descriptor:M,consumedLength:O,releasePrevious:A,releaseSelf:z,repeat:B}=l(h);return{keyDef:(k=w.keyboardMap.find(C=>{if(S==="["){var P;return((P=C.code)==null?void 0:P.toLowerCase())===M.toLowerCase()}else if(S==="{"){var L;const q=x(M);return((L=C.key)==null?void 0:L.toLowerCase())===q.toLowerCase()}return C.key===M}))!=null?k:{key:"Unknown",code:"Unknown",[S==="["?"code":"key"]:M},consumedLength:O,releasePrevious:A,releaseSelf:z,repeat:B}}function l(h){let w=0;const k=h[w]in e?h[w]:"";w+=k.length;const S=k?h.match(new RegExp(`^\\${k}+`))[0].length:0,O=S===2||k==="{"&&S>3?"":k;return{type:O,...O===""?s(h,w):u(h,w,O)}}function s(h,w){const k=h[w];return c(k,h,w),w+=k.length,{consumedLength:w,descriptor:k,releasePrevious:!1,releaseSelf:!0,repeat:1}}function u(h,w,k){var S,M,O;const A=h[w]==="/"?"/":"";w+=A.length;const z=(S=h.slice(w).match(/^\w+/))==null?void 0:S[0];c(z,h,w),w+=z.length;const B=(M=(O=h.slice(w).match(/^>\d+/))==null?void 0:O[0])!=null?M:"";w+=B.length;const j=h[w]==="/"||!B&&h[w]===">"?h[w]:"";w+=j.length;const C=e[k],P=h[w]===C?C:"";if(!P)throw new Error(g([!B&&"repeat modifier",!j&&"release modifier",`"${C}"`].filter(Boolean).join(" or "),h[w],h));return w+=P.length,{consumedLength:w,descriptor:z,releasePrevious:!!A,repeat:B?Math.max(Number(B.substr(1)),1):1,releaseSelf:m(k,z,j,B)}}function c(h,w,k){if(!h)throw new Error(g("key descriptor",w[k],w))}function p(h,w){return h[w]}function m(h,w,k,S){return k?k==="/":!(S||h==="{"&&p(r,w.toLowerCase()))}function x(h){var w;return(w=p(i,h))!=null?w:h}function g(h,w,k){return`Expected ${h} but found "${w??""}" in "${k}"
    See https://github.com/testing-library/user-event/blob/main/README.md#keyboardtext-options
    for more information about how userEvent parses your input.`}return rc}var mt={},Os={},Lw;function NN(){if(Lw)return Os;Lw=1,Object.defineProperty(Os,"__esModule",{value:!0}),Os.keydownBehavior=void 0;var e=Nt();const r=[{matches:(i,a)=>(i.key==="ArrowLeft"||i.key==="ArrowRight")&&(0,e.isElementType)(a,["input","textarea"]),handle:(i,a)=>{var l;const{selectionStart:s,selectionEnd:u}=(0,e.getSelectionRange)(a),c=i.key==="ArrowLeft"?-1:1,p=(l=s===u?(s??0)+c:c<0?s:u)!=null?l:0;(0,e.setSelectionRange)(a,p,p)}}];return Os.keydownBehavior=r,Os}var _s={},Em={},nc={},Nw;function zN(){if(Nw)return nc;Nw=1,Object.defineProperty(nc,"__esModule",{value:!0}),nc.carryValue=r;var e=Nt();function r(i,a,l){const s=(0,e.getValue)(i);a.carryValue=s!==l&&s===""&&(0,e.hasUnreliableEmptyValue)(i)?l:void 0}return nc}var ic={},zw;function IN(){if(zw)return ic;zw=1,Object.defineProperty(ic,"__esModule",{value:!0}),ic.fireChangeForInputTimeIfValid=i;var e=kr,r=Nt();function i(a,l,s){(0,r.isValidInputTimeValue)(a,s)&&l!==s&&e.fireEvent.change(a,{target:{value:s}})}return ic}var ac={},Iw;function DN(){if(Iw)return ac;Iw=1,Object.defineProperty(ac,"__esModule",{value:!0}),ac.fireInputEvent=i;var e=kr,r=Nt();function i(p,{newValue:m,newSelectionStart:x,eventOverrides:g}){if((0,r.isContentEditable)(p))c(p,"textContent",m);else if((0,r.isElementType)(p,["input","textarea"]))c(p,"value",m);else throw new Error("Invalid Element");a(p,x),e.fireEvent.input(p,{...g}),l(p,m,x)}function a(p,m){(0,r.setSelectionRange)(p,m,m)}function l(p,m,x){const g=(0,r.getValue)(p);if(!(g===""&&(0,r.hasUnreliableEmptyValue)(p))&&g===m){const{selectionStart:w}=(0,r.getSelectionRange)(p);w===g.length&&(0,r.setSelectionRange)(p,x,x)}}const s=Symbol("initial input value/textContent"),u=Symbol("onBlur");function c(p,m,x){const g=Object.getOwnPropertyDescriptor(p,m),h=Object.getOwnPropertyDescriptor(p.constructor.prototype,m);if(g&&h&&Object.defineProperty(p,m,h),p[s]===void 0&&(p[s]=String(p[m])),p[m]=x,!p[u]){var w;(w=p.ownerDocument.defaultView)==null||w.addEventListener("blur",p[u]=()=>{const k=p[s];delete p[u],delete p[s],String(p[m])!==k&&e.fireEvent.change(p)},{capture:!0,once:!0})}g&&Object.defineProperty(p,m,g)}return ac}var Dw;function qh(){return Dw||(Dw=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0});var r=zN();Object.keys(r).forEach(function(l){l==="default"||l==="__esModule"||l in e&&e[l]===r[l]||Object.defineProperty(e,l,{enumerable:!0,get:function(){return r[l]}})});var i=IN();Object.keys(i).forEach(function(l){l==="default"||l==="__esModule"||l in e&&e[l]===i[l]||Object.defineProperty(e,l,{enumerable:!0,get:function(){return i[l]}})});var a=DN();Object.keys(a).forEach(function(l){l==="default"||l==="__esModule"||l in e&&e[l]===a[l]||Object.defineProperty(e,l,{enumerable:!0,get:function(){return a[l]}})})})(Em)),Em}var Bw;function BN(){if(Bw)return _s;Bw=1,Object.defineProperty(_s,"__esModule",{value:!0}),_s.keydownBehavior=void 0;var e=Nt(),r=qh();const i=[{matches:(a,l)=>(a.key==="Home"||a.key==="End")&&((0,e.isElementType)(l,["input","textarea"])||(0,e.isContentEditable)(l)),handle:(a,l)=>{if(a.key==="Home")(0,e.setSelectionRange)(l,0,0);else{var s,u;const c=(s=(u=(0,e.getValue)(l))==null?void 0:u.length)!=null?s:0;(0,e.setSelectionRange)(l,c,c)}}},{matches:(a,l)=>(a.key==="PageUp"||a.key==="PageDown")&&(0,e.isElementType)(l,["input"]),handle:(a,l)=>{if(a.key==="PageUp")(0,e.setSelectionRange)(l,0,0);else{var s,u;const c=(s=(u=(0,e.getValue)(l))==null?void 0:u.length)!=null?s:0;(0,e.setSelectionRange)(l,c,c)}}},{matches:(a,l)=>a.key==="Delete"&&(0,e.isEditable)(l)&&!(0,e.isCursorAtEnd)(l),handle:(a,l,s,u)=>{const{newValue:c,newSelectionStart:p}=(0,e.calculateNewValue)("",l,u.carryValue,void 0,"forward");(0,r.fireInputEvent)(l,{newValue:c,newSelectionStart:p,eventOverrides:{inputType:"deleteContentForward"}}),(0,r.carryValue)(l,u,c)}}];return _s.keydownBehavior=i,_s}var js={},$w;function $N(){if($w)return js;$w=1,Object.defineProperty(js,"__esModule",{value:!0}),js.keypressBehavior=void 0;var e=kr,r=qh(),i=Nt();const a=[{matches:(l,s)=>{var u;return((u=l.key)==null?void 0:u.length)===1&&(0,i.isElementType)(s,"input",{type:"time",readOnly:!1})},handle:(l,s,u,c)=>{var p;let m=l.key;const x=((p=c.carryValue)!=null?p:"")+m,g=(0,i.buildTimeValue)(x);(0,i.isValidInputTimeValue)(s,g)&&(m=g);const{newValue:h,newSelectionStart:w}=(0,i.calculateNewValue)(m,s),k=(0,i.getValue)(s);k!==h&&(0,r.fireInputEvent)(s,{newValue:h,newSelectionStart:w,eventOverrides:{data:l.key,inputType:"insertText"}}),(0,r.fireChangeForInputTimeIfValid)(s,k,g),c.carryValue=x}},{matches:(l,s)=>{var u;return((u=l.key)==null?void 0:u.length)===1&&(0,i.isElementType)(s,"input",{type:"date",readOnly:!1})},handle:(l,s,u,c)=>{var p;let m=l.key;const x=((p=c.carryValue)!=null?p:"")+m,g=(0,i.isValidDateValue)(s,x);g&&(m=x);const{newValue:h,newSelectionStart:w}=(0,i.calculateNewValue)(m,s);(0,i.getValue)(s)!==h&&(0,r.fireInputEvent)(s,{newValue:h,newSelectionStart:w,eventOverrides:{data:l.key,inputType:"insertText"}}),g&&e.fireEvent.change(s,{target:{value:x}}),c.carryValue=x}},{matches:(l,s)=>{var u;return((u=l.key)==null?void 0:u.length)===1&&(0,i.isElementType)(s,"input",{type:"number",readOnly:!1})},handle:(l,s,u,c)=>{var p,m,x,g;if(!/[\d.\-e]/.test(l.key))return;const h=(p=(m=c.carryValue)!=null?m:(0,i.getValue)(s))!=null?p:"",{newValue:w,newSelectionStart:k}=(0,i.calculateNewValue)(l.key,s,h),S=w.split("e",2);if(Number((x=w.match(/-/g))==null?void 0:x.length)>2||Number((g=w.match(/\./g))==null?void 0:g.length)>1||S[1]&&!/^-?\d*$/.test(S[1]))return;(0,r.fireInputEvent)(s,{newValue:w,newSelectionStart:k,eventOverrides:{data:l.key,inputType:"insertText"}}),(0,i.getValue)(s)===w?c.carryValue=void 0:c.carryValue=w}},{matches:(l,s)=>{var u;return((u=l.key)==null?void 0:u.length)===1&&((0,i.isElementType)(s,["input","textarea"],{readOnly:!1})&&!(0,i.isClickableInput)(s)||(0,i.isContentEditable)(s))&&(0,i.getSpaceUntilMaxLength)(s)!==0},handle:(l,s)=>{const{newValue:u,newSelectionStart:c}=(0,i.calculateNewValue)(l.key,s);(0,r.fireInputEvent)(s,{newValue:u,newSelectionStart:c,eventOverrides:{data:l.key,inputType:"insertText"}})}},{matches:(l,s)=>l.key==="Enter"&&((0,i.isElementType)(s,"textarea",{readOnly:!1})||(0,i.isContentEditable)(s))&&(0,i.getSpaceUntilMaxLength)(s)!==0,handle:(l,s,u,c)=>{const{newValue:p,newSelectionStart:m}=(0,i.calculateNewValue)(`
`,s),x=(0,i.isContentEditable)(s)&&!c.modifiers.shift?"insertParagraph":"insertLineBreak";(0,r.fireInputEvent)(s,{newValue:p,newSelectionStart:m,eventOverrides:{inputType:x}})}}];return js.keypressBehavior=a,js}var Et={},Ts={},Fw;function nS(){if(Fw)return Ts;Fw=1,Object.defineProperty(Ts,"__esModule",{value:!0}),Ts.getKeyEventProps=e,Ts.getMouseEventProps=r;function e(i,a){var l,s;return{key:i.key,code:i.code,altKey:a.modifiers.alt,ctrlKey:a.modifiers.ctrl,metaKey:a.modifiers.meta,shiftKey:a.modifiers.shift,keyCode:(l=i.keyCode)!=null?l:((s=i.key)==null?void 0:s.length)===1?i.key.charCodeAt(0):void 0}}function r(i){return{altKey:i.modifiers.alt,ctrlKey:i.modifiers.ctrl,metaKey:i.modifiers.meta,shiftKey:i.modifiers.shift}}return Ts}var Vw;function FN(){if(Vw)return Et;Vw=1,Object.defineProperty(Et,"__esModule",{value:!0}),Et.preKeyupBehavior=Et.preKeydownBehavior=Et.postKeyupBehavior=Et.keyupBehavior=Et.keypressBehavior=Et.keydownBehavior=void 0;var e=kr,r=Nt(),i=nS(),a=qh();const l={Alt:"alt",Control:"ctrl",Shift:"shift",Meta:"meta"},s=[...Object.entries(l).map(([g,h])=>({matches:w=>w.key===g,handle:(w,k,S,M)=>{M.modifiers[h]=!0}})),{matches:g=>g.key==="AltGraph",handle:(g,h,w,k)=>{var S;const M=(S=w.keyboardMap.find(O=>O.key==="Control"))!=null?S:{key:"Control",code:"Control"};e.fireEvent.keyDown(h,(0,i.getKeyEventProps)(M,k))}}];Et.preKeydownBehavior=s;const u=[{matches:g=>g.key==="CapsLock",handle:(g,h,w,k)=>{k.modifiers.caps=!k.modifiers.caps}},{matches:(g,h)=>g.key==="Backspace"&&(0,r.isEditable)(h)&&!(0,r.isCursorAtStart)(h),handle:(g,h,w,k)=>{const{newValue:S,newSelectionStart:M}=(0,r.calculateNewValue)("",h,k.carryValue,void 0,"backward");(0,a.fireInputEvent)(h,{newValue:S,newSelectionStart:M,eventOverrides:{inputType:"deleteContentBackward"}}),(0,a.carryValue)(h,k,S)}}];Et.keydownBehavior=u;const c=[{matches:(g,h)=>g.key==="Enter"&&(0,r.isElementType)(h,"input")&&["checkbox","radio"].includes(h.type),handle:(g,h)=>{const w=h.form;(0,r.hasFormSubmit)(w)&&e.fireEvent.submit(w)}},{matches:(g,h)=>g.key==="Enter"&&((0,r.isClickableInput)(h)||(0,r.isElementType)(h,"a")&&!!h.href),handle:(g,h,w,k)=>{e.fireEvent.click(h,(0,i.getMouseEventProps)(k))}},{matches:(g,h)=>g.key==="Enter"&&(0,r.isElementType)(h,"input"),handle:(g,h)=>{const w=h.form;w&&(w.querySelectorAll("input").length===1||(0,r.hasFormSubmit)(w))&&e.fireEvent.submit(w)}}];Et.keypressBehavior=c;const p=[...Object.entries(l).map(([g,h])=>({matches:w=>w.key===g,handle:(w,k,S,M)=>{M.modifiers[h]=!1}}))];Et.preKeyupBehavior=p;const m=[{matches:(g,h)=>g.key===" "&&(0,r.isClickableInput)(h),handle:(g,h,w,k)=>{e.fireEvent.click(h,(0,i.getMouseEventProps)(k))}}];Et.keyupBehavior=m;const x=[{matches:g=>g.key==="AltGraph",handle:(g,h,w,k)=>{var S;const M=(S=w.keyboardMap.find(O=>O.key==="Control"))!=null?S:{key:"Control",code:"Control"};e.fireEvent.keyUp(h,(0,i.getKeyEventProps)(M,k))}}];return Et.postKeyupBehavior=x,Et}var Hw;function VN(){if(Hw)return mt;Hw=1,Object.defineProperty(mt,"__esModule",{value:!0}),mt.replaceBehavior=mt.preKeyupBehavior=mt.preKeydownBehavior=mt.postKeyupBehavior=mt.keyupBehavior=mt.keypressBehavior=mt.keydownBehavior=void 0;var e=Nt(),r=u(NN()),i=u(BN()),a=u($N()),l=u(FN());function s(k){if(typeof WeakMap!="function")return null;var S=new WeakMap,M=new WeakMap;return(s=function(O){return O?M:S})(k)}function u(k,S){if(k&&k.__esModule)return k;if(k===null||typeof k!="object"&&typeof k!="function")return{default:k};var M=s(S);if(M&&M.has(k))return M.get(k);var O={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var z in k)if(z!=="default"&&Object.prototype.hasOwnProperty.call(k,z)){var B=A?Object.getOwnPropertyDescriptor(k,z):null;B&&(B.get||B.set)?Object.defineProperty(O,z,B):O[z]=k[z]}return O.default=k,M&&M.set(k,O),O}const c=[{matches:(k,S)=>k.key==="selectall"&&(0,e.isElementType)(S,["input","textarea"]),handle:(k,S,M,O)=>{var A;(0,e.setSelectionRange)(S,0,((A=O.carryValue)!=null?A:S.value).length)}}];mt.replaceBehavior=c;const p=[...l.preKeydownBehavior];mt.preKeydownBehavior=p;const m=[...r.keydownBehavior,...i.keydownBehavior,...l.keydownBehavior];mt.keydownBehavior=m;const x=[...l.keypressBehavior,...a.keypressBehavior];mt.keypressBehavior=x;const g=[...l.preKeyupBehavior];mt.preKeyupBehavior=g;const h=[...l.keyupBehavior];mt.keyupBehavior=h;const w=[...l.postKeyupBehavior];return mt.postKeyupBehavior=w,mt}var Ww;function HN(){if(Ww)return Ps;Ww=1,Object.defineProperty(Ps,"__esModule",{value:!0}),Ps.keyboardImplementation=c,Ps.releaseAllKeys=m;var e=kr,r=Nt(),i=LN(),a=u(VN()),l=nS();function s(S){if(typeof WeakMap!="function")return null;var M=new WeakMap,O=new WeakMap;return(s=function(A){return A?O:M})(S)}function u(S,M){if(S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var O=s(M);if(O&&O.has(S))return O.get(S);var A={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in S)if(B!=="default"&&Object.prototype.hasOwnProperty.call(S,B)){var j=z?Object.getOwnPropertyDescriptor(S,B):null;j&&(j.get||j.set)?Object.defineProperty(A,B,j):A[B]=S[B]}return A.default=S,O&&O.set(S,A),A}async function c(S,M,O){var A;const{document:z}=M,B=()=>p(z),{keyDef:j,consumedLength:C,releasePrevious:P,releaseSelf:L,repeat:q}=(A=O.repeatKey)!=null?A:(0,i.getNextKeyDef)(S,M);if(!w(a.replaceBehavior,j,B(),M,O)){const W=O.pressed.find(Y=>Y.keyDef===j);if(W&&!O.repeatKey&&h(j,B,M,O,W.unpreventedDefault),!P){const Y=x(j,B,M,O);Y&&k(j,O)&&g(j,B,M,O),L&&q<=1&&h(j,B,M,O,Y)}}if(q>1?O.repeatKey={consumedLength:0,keyDef:j,releasePrevious:P,releaseSelf:L,repeat:q-1}:delete O.repeatKey,S.length>C||q>1)return M.delay>0&&await(0,r.wait)(M.delay),c(S.slice(C),M,O)}function p(S){var M;return(M=(0,r.getActiveElement)(S))!=null?M:S.body}function m(S,M){const O=()=>p(S.document);for(const A of M.pressed)h(A.keyDef,O,S,M,A.unpreventedDefault)}function x(S,M,O,A){const z=M();z!==A.activeElement&&(A.carryValue=void 0,A.carryChar=""),A.activeElement=z,w(a.preKeydownBehavior,S,z,O,A);const B=e.fireEvent.keyDown(z,(0,l.getKeyEventProps)(S,A));return A.pressed.push({keyDef:S,unpreventedDefault:B}),B&&w(a.keydownBehavior,S,M(),O,A),B}function g(S,M,O,A){const z=M();e.fireEvent.keyPress(z,(0,l.getKeyEventProps)(S,A))&&w(a.keypressBehavior,S,M(),O,A)}function h(S,M,O,A,z){const B=M();w(a.preKeyupBehavior,S,B,O,A);const j=e.fireEvent.keyUp(B,(0,l.getKeyEventProps)(S,A));z&&j&&w(a.keyupBehavior,S,M(),O,A),A.pressed=A.pressed.filter(C=>C.keyDef!==S),w(a.postKeyupBehavior,S,B,O,A)}function w(S,M,O,A,z){const B=S.find(j=>j.matches(M,O,A,z));return B&&B.handle(M,O,A,z),!!B}function k(S,M){var O;return(((O=S.key)==null?void 0:O.length)===1||S.key==="Enter")&&!M.modifiers.ctrl&&!M.modifiers.alt}return Ps}var Ms={},Ci={},Uw;function WN(){if(Uw)return Ci;Uw=1,Object.defineProperty(Ci,"__esModule",{value:!0}),Ci.DOM_KEY_LOCATION=void 0;let e;return Ci.DOM_KEY_LOCATION=e,(function(r){r[r.STANDARD=0]="STANDARD",r[r.LEFT=1]="LEFT",r[r.RIGHT=2]="RIGHT",r[r.NUMPAD=3]="NUMPAD"})(e||(Ci.DOM_KEY_LOCATION=e={})),Ci}var Kw;function UN(){if(Kw)return Ms;Kw=1,Object.defineProperty(Ms,"__esModule",{value:!0}),Ms.defaultKeyMap=void 0;var e=WN();const r=[..."0123456789".split("").map(i=>({code:`Digit${i}`,key:i})),...")!@#$%^&*(".split("").map((i,a)=>({code:`Digit${a}`,key:i,shiftKey:!0})),..."abcdefghijklmnopqrstuvwxyz".split("").map(i=>({code:`Key${i.toUpperCase()}`,key:i})),..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(i=>({code:`Key${i}`,key:i,shiftKey:!0})),{code:"Space",key:" "},{code:"AltLeft",key:"Alt",location:e.DOM_KEY_LOCATION.LEFT,keyCode:18},{code:"AltRight",key:"Alt",location:e.DOM_KEY_LOCATION.RIGHT,keyCode:18},{code:"ShiftLeft",key:"Shift",location:e.DOM_KEY_LOCATION.LEFT,keyCode:16},{code:"ShiftRight",key:"Shift",location:e.DOM_KEY_LOCATION.RIGHT,keyCode:16},{code:"ControlLeft",key:"Control",location:e.DOM_KEY_LOCATION.LEFT,keyCode:17},{code:"ControlRight",key:"Control",location:e.DOM_KEY_LOCATION.RIGHT,keyCode:17},{code:"MetaLeft",key:"Meta",location:e.DOM_KEY_LOCATION.LEFT,keyCode:93},{code:"MetaRight",key:"Meta",location:e.DOM_KEY_LOCATION.RIGHT,keyCode:93},{code:"OSLeft",key:"OS",location:e.DOM_KEY_LOCATION.LEFT,keyCode:91},{code:"OSRight",key:"OS",location:e.DOM_KEY_LOCATION.RIGHT,keyCode:91},{code:"CapsLock",key:"CapsLock",keyCode:20},{code:"Backspace",key:"Backspace",keyCode:8},{code:"Enter",key:"Enter",keyCode:13},{code:"Escape",key:"Escape",keyCode:27},{code:"ArrowUp",key:"ArrowUp",keyCode:38},{code:"ArrowDown",key:"ArrowDown",keyCode:40},{code:"ArrowLeft",key:"ArrowLeft",keyCode:37},{code:"ArrowRight",key:"ArrowRight",keyCode:39},{code:"Home",key:"Home",keyCode:36},{code:"End",key:"End",keyCode:35},{code:"Delete",key:"Delete",keyCode:46},{code:"PageUp",key:"PageUp",keyCode:33},{code:"PageDown",key:"PageDown",keyCode:34}];return Ms.defaultKeyMap=r,Ms}var qs={},Yw;function KN(){if(Yw)return qs;Yw=1,Object.defineProperty(qs,"__esModule",{value:!0}),qs.specialCharMap=void 0;const e={arrowLeft:"{arrowleft}",arrowRight:"{arrowright}",arrowDown:"{arrowdown}",arrowUp:"{arrowup}",enter:"{enter}",escape:"{esc}",delete:"{del}",backspace:"{backspace}",home:"{home}",end:"{end}",selectAll:"{selectall}",space:"{space}",whitespace:" ",pageUp:"{pageUp}",pageDown:"{pageDown}"};return qs.specialCharMap=e,qs}var Gw;function YN(){return Gw||(Gw=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.keyboard=s,e.keyboardImplementationWrapper=u,Object.defineProperty(e,"specialCharMap",{enumerable:!0,get:function(){return l.specialCharMap}});var r=kr,i=HN(),a=UN(),l=KN();function s(p,m){var x;const{promise:g,state:h}=u(p,m);return((x=m==null?void 0:m.delay)!=null?x:0)>0?(0,r.getConfig)().asyncWrapper(()=>g.then(()=>h)):(g.catch(console.error),h)}function u(p,m={}){const{keyboardState:x=c(),delay:g=0,document:h=document,autoModify:w=!1,keyboardMap:k=a.defaultKeyMap}=m,S={delay:g,document:h,autoModify:w,keyboardMap:k};return{promise:(0,i.keyboardImplementation)(p,S,x),state:x,releaseAllKeys:()=>(0,i.releaseAllKeys)(S,x)}}function c(){return{activeElement:null,pressed:[],carryChar:"",modifiers:{alt:!1,caps:!1,ctrl:!1,meta:!1,shift:!1}}}})(Sm)),Sm}var Xw;function GN(){if(Xw)return qd;Xw=1,Object.defineProperty(qd,"__esModule",{value:!0}),qd.typeImplementation=a;var e=Nt(),r=AN(),i=YN();async function a(l,s,{delay:u,skipClick:c=!1,skipAutoClose:p=!1,initialSelectionStart:m=void 0,initialSelectionEnd:x=void 0}){if(l.disabled)return;c||(0,r.click)(l);const g=()=>(0,e.getActiveElement)(l.ownerDocument),h=(0,e.getValue)(g()),{selectionStart:w,selectionEnd:k}=(0,e.getSelectionRange)(l);h!=null&&(w===null||w===0)&&(k===null||k===0)&&(0,e.setSelectionRange)(g(),m??h.length,x??h.length);const{promise:S,releaseAllKeys:M}=(0,i.keyboardImplementationWrapper)(s,{delay:u,document:l.ownerDocument});return u>0&&await S,p||M(),S}return qd}var Qw;function XN(){if(Qw)return _d;Qw=1,Object.defineProperty(_d,"__esModule",{value:!0}),_d.type=i;var e=kr,r=GN();function i(a,l,{delay:s=0,...u}={}){return s>0?(0,e.getConfig)().asyncWrapper(()=>(0,r.typeImplementation)(a,l,{delay:s,...u})):void(0,r.typeImplementation)(a,l,{delay:s,...u}).catch(console.error)}return _d}XN();const QN=()=>[{id:1,type:"image",imgSrc:b8},{id:2,type:"image",imgSrc:y8},{id:3,type:"image",imgSrc:w8},{id:4,type:"image",imgSrc:k8},{id:5,type:"image",imgSrc:S8},{id:6,type:"image",imgSrc:E8},{id:7,type:"image",imgSrc:R8},{id:8,type:"image",imgSrc:C8},{id:9,type:"image",imgSrc:P8},{id:10,type:"image",imgSrc:O8},{id:11,type:"image",imgSrc:_8},{id:12,type:"image",imgSrc:j8},{id:13,type:"image",imgSrc:T8},{id:14,type:"image",imgSrc:M8},{id:15,type:"image",imgSrc:q8},{id:16,type:"image",imgSrc:A8},{id:17,type:"image",imgSrc:L8},{id:18,type:"image",imgSrc:N8},{id:19,type:"image",imgSrc:z8},{id:20,type:"image",imgSrc:I8},{id:21,type:"image",imgSrc:D8},{id:22,type:"image",imgSrc:B8},{id:23,type:"image",imgSrc:$8},{id:24,type:"image",imgSrc:F8},{id:25,type:"image",imgSrc:V8},{id:26,type:"image",imgSrc:H8},{id:27,type:"image",imgSrc:W8},{id:28,type:"image",imgSrc:U8},{id:29,type:"image",imgSrc:K8},{id:30,type:"image",imgSrc:Y8},{id:31,type:"image",imgSrc:G8},{id:32,type:"image",imgSrc:X8},{id:33,type:"image",imgSrc:Q8},{id:34,type:"video",vidSrc:Z8},{id:35,type:"video",vidSrc:J8},{id:36,type:"video",vidSrc:e9},{id:37,type:"video",vidSrc:t9},{id:38,type:"video",vidSrc:r9},{id:39,type:"video",vidSrc:n9},{id:40,type:"video",vidSrc:i9},{id:41,type:"video",vidSrc:a9}],ZN=()=>{const e=QN(),[r,i]=de.useState(""),[a,l]=de.useState(!1),[s,u]=de.useState(""),c=p=>{i(p.type),u(p.type==="image"?p.imgSrc:p.vidSrc),l(!0)};return y.jsxs(JN,{children:[y.jsxs("div",{className:a?"model open":"model",children:[r==="image"&&y.jsx("img",{src:s,alt:""}),r==="video"&&y.jsx("video",{src:s,controls:!0,autoPlay:!0,style:{maxHeight:"90vh",maxWidth:"90vw",borderRadius:"10px"}}),y.jsx(Xs,{color:"white",onClick:()=>l(!1)})]}),y.jsx(ez,{children:e.map((p,m)=>y.jsx("div",{className:"pics",onClick:()=>c(p),children:p.type==="image"?y.jsx("img",{src:p.imgSrc,alt:"",style:{width:"100%"}}):y.jsx("div",{className:"video-thumb",children:y.jsx("video",{src:p.vidSrc,style:{width:"100%"},controls:!0,autoPlay:!0,muted:!0,playsInline:!0,loop:!0})})},m))})]})},JN=U.div`
  @media (max-width: 1920px) {
    .model {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000000;
      transition: opacity 0.4s ease, visibility 0.4s ease,
        transform 0.5s ease-in-out;
      visibility: hidden;
      opacity: 0;
      transform: scale(0);
      overflow: hidden;
      z-index: 999;
    }

    .model.open {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }

    .model img {
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 100%;
      display: block;
      line-height: 0;
      box-sizing: border-box;
      padding: 20px 0 20px;
      margin: 0 auto;
    }

    .model.open svg {
      position: fixed;
      top: 10px;
      right: 10px;
      width: 2rem;
      height: 2rem;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #ffffff;
      cursor: pointer;
    }
  }
  @media (max-width: 320px) {
    .model {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000000;
      transition: opacity 0.4s ease, visibility 0.4s ease,
        transform 0.5s ease-in-out;
      visibility: hidden;
      opacity: 0;
      transform: scale(0);
      overflow: hidden;
      z-index: 999;
    }

    .model.open {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }

    .model img {
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 100%;
      display: block;
      line-height: 0;
      box-sizing: border-box;
      padding: 20px 0 20px;
      margin: 0 auto;
    }

    .model.open svg {
      position: fixed;
      top: 10px;
      right: 10px;
      width: 2rem;
      height: 2rem;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #ffffff;
      cursor: pointer;
    }
  }
`,ez=U.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;
  .pics {
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;
  }

  .pics:hover {
    filter: opacity(0.8);
  }

  @media (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
  @media (max-width: 480px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
`,tz=()=>{const[e,r]=de.useState("IT"),[i,a]=de.useState(!0),{t:l}=lt();de.useEffect(()=>{const u=localStorage.getItem("activeSkill"),c=localStorage.getItem("open")===!0;u&&c&&(r(u),a(!0))}),de.useEffect(()=>{e!==null&&(localStorage.setItem("activeSkill",e),localStorage.setItem("open",i))},[e,i]);const s=u=>{e===u&&i?(a(!1),localStorage.setItem("open",!1)):(r(u),a(!0),localStorage.setItem("activeSkill",u),localStorage.setItem("open",i))};return y.jsxs(rz,{id:"skill",children:[y.jsx(nz,{children:y.jsx("h1",{children:l("skilled.title")})}),y.jsxs(iz,{children:[y.jsx("button",{className:e==="IT"&&i?"active":"",onClick:()=>s("IT"),children:l("skilled.IT")}),y.jsx("button",{className:e==="LAS"&&i?"active":"",onClick:()=>s("LAS"),children:l("skilled.LAS")})]}),i&&e==="IT"&&y.jsx(h8,{}),i&&e==="LAS"&&y.jsx(ZN,{})]})},rz=U.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 100px;
    gap: 1rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    color: white;
  }

  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 100px;
    gap: 1rem;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    color: white;
  }

  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 100px;
    gap: 1rem;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    color: white;
  }

  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 100px;
    gap: 1rem;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    color: white;
  }

  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 100px;
    gap: 1rem;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    color: white;
  }

  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 100px;
    gap: 1rem;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    color: white;
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 100px;
    gap: 1rem;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    color: white;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 100px;
    gap: 1rem;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    color: white;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 100px;
    gap: 1rem;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    color: white;
  }
`,nz=U.div`
  @media (max-width: 1920px) {
    padding-bottom: 5rem;
  }
  @media (max-width: 428px) {
    padding-bottom: 5rem;
    text-align: center;
  }
  @media (max-width: 415px) {
    padding-bottom: 5rem;
    text-align: center;
  }
  @media (max-width: 412px) {
    padding-bottom: 5rem;
    text-align: center;
  }
  @media (max-width: 395px) {
    padding-bottom: 5rem;
    text-align: center;
  }
  @media (max-width: 391px) {
    padding-bottom: 5rem;
    text-align: center;
  }
  @media (max-width: 376px) {
    padding-bottom: 5rem;
    text-align: center;
  }
  @media (max-width: 360px) {
    padding-bottom: 5rem;
    text-align: center;
  }
  @media (max-width: 320px) {
    padding-bottom: 5rem;
    text-align: center;
  }
`,iz=U.div`
  @media (max-width: 1920px) {
    display: flex;
    justify-content: center;
    gap: 10rem;
    margin-bottom: 5rem;

    button {
      margin-top: 1rem;
      width: 200px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s, transform 0.3s;

      &:hover {
        background-color: white;
        color: black;
      }

      &.active {
        background-color: white;
        color: black;
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 428px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 5rem;

    button {
      font-size: 12px;
      margin-top: 1rem;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s, transform 0.3s;

      &:hover {
        background-color: white;
        color: black;
      }

      &.active {
        background-color: white;
        color: black;
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 415px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 5rem;

    button {
      font-size: 12px;
      margin-top: 1rem;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s, transform 0.3s;

      &:hover {
        background-color: white;
        color: black;
      }

      &.active {
        background-color: white;
        color: black;
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 412px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 5rem;

    button {
      font-size: 12px;
      margin-top: 1rem;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s, transform 0.3s;

      &:hover {
        background-color: white;
        color: black;
      }

      &.active {
        background-color: white;
        color: black;
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 395px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 5rem;

    button {
      font-size: 12px;
      margin-top: 1rem;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s, transform 0.3s;

      &:hover {
        background-color: white;
        color: black;
      }

      &.active {
        background-color: white;
        color: black;
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 391px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 5rem;

    button {
      font-size: 12px;
      margin-top: 1rem;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s, transform 0.3s;

      &:hover {
        background-color: white;
        color: black;
      }

      &.active {
        background-color: white;
        color: black;
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 376px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 5rem;

    button {
      font-size: 12px;
      margin-top: 1rem;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s, transform 0.3s;

      &:hover {
        background-color: white;
        color: black;
      }

      &.active {
        background-color: white;
        color: black;
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 360px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 5rem;

    button {
      font-size: 12px;
      margin-top: 1rem;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s, transform 0.3s;

      &:hover {
        background-color: white;
        color: black;
      }

      &.active {
        background-color: white;
        color: black;
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 5rem;

    button {
      font-size: 12px;
      margin-top: 1rem;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s, transform 0.3s;

      &:hover {
        background-color: white;
        color: black;
      }

      &.active {
        background-color: white;
        color: black;
        transform: scale(1.1);
      }
    }
  }
`;function az(){return y.jsxs("div",{children:[y.jsx(oz,{children:y.jsx(kP,{})}),y.jsx(As,{children:y.jsx(C4,{})}),y.jsx(F4,{}),y.jsx(As,{children:y.jsx(X_,{})}),y.jsx(tz,{}),y.jsx(As,{children:y.jsx(eT,{})}),y.jsx(gT,{}),y.jsx(As,{children:y.jsx($T,{})}),y.jsx(r6,{}),y.jsx(As,{children:y.jsx(w6,{})})]})}const As=U.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  min-height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`,oz=U.div`
  z-index: 100;
`,lz=uR.createRoot(document.getElementById("root"));lz.render(y.jsx(it.StrictMode,{children:y.jsx(az,{})}))});export default sz();
