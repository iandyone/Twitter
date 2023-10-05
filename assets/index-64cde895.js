function My(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function jy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kp={exports:{}},la={},Ip={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),Uy=Symbol.for("react.portal"),zy=Symbol.for("react.fragment"),Fy=Symbol.for("react.strict_mode"),By=Symbol.for("react.profiler"),Hy=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),Wy=Symbol.for("react.forward_ref"),Gy=Symbol.for("react.suspense"),Ky=Symbol.for("react.memo"),Yy=Symbol.for("react.lazy"),Zd=Symbol.iterator;function qy(e){return e===null||typeof e!="object"?null:(e=Zd&&e[Zd]||e["@@iterator"],typeof e=="function"?e:null)}var xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cp=Object.assign,Pp={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=Pp,this.updater=n||xp}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tp(){}Tp.prototype=Jr.prototype;function yc(e,t,n){this.props=e,this.context=t,this.refs=Pp,this.updater=n||xp}var wc=yc.prototype=new Tp;wc.constructor=yc;Cp(wc,Jr.prototype);wc.isPureReactComponent=!0;var ef=Array.isArray,Rp=Object.prototype.hasOwnProperty,Ec={current:null},Op={key:!0,ref:!0,__self:!0,__source:!0};function bp(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Rp.call(t,r)&&!Op.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:mo,type:e,key:o,ref:s,props:i,_owner:Ec.current}}function Qy(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sc(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function Xy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tf=/\/+/g;function ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xy(""+e.key):t.toString(36)}function Qo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case mo:case Uy:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ol(s,0):r,ef(i)?(n="",e!=null&&(n=e.replace(tf,"$&/")+"/"),Qo(i,t,n,"",function(u){return u})):i!=null&&(Sc(i)&&(i=Qy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(tf,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ef(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ol(o,a);s+=Qo(o,t,n,l,i)}else if(l=qy(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ol(o,a++),s+=Qo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function To(e,t,n){if(e==null)return e;var r=[],i=0;return Qo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Jy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Xo={transition:null},Zy={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:Ec};z.Children={map:To,forEach:function(e,t,n){To(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return To(e,function(){t++}),t},toArray:function(e){return To(e,function(t){return t})||[]},only:function(e){if(!Sc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Jr;z.Fragment=zy;z.Profiler=By;z.PureComponent=yc;z.StrictMode=Fy;z.Suspense=Gy;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ec.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Rp.call(t,l)&&!Op.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:mo,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:Vy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hy,_context:e},e.Consumer=e};z.createElement=bp;z.createFactory=function(e){var t=bp.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Wy,render:e}};z.isValidElement=Sc;z.lazy=function(e){return{$$typeof:Yy,_payload:{_status:-1,_result:e},_init:Jy}};z.memo=function(e,t){return{$$typeof:Ky,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Xo.transition;Xo.transition={};try{e()}finally{Xo.transition=t}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,t){return $e.current.useCallback(e,t)};z.useContext=function(e){return $e.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};z.useEffect=function(e,t){return $e.current.useEffect(e,t)};z.useId=function(){return $e.current.useId()};z.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return $e.current.useMemo(e,t)};z.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};z.useRef=function(e){return $e.current.useRef(e)};z.useState=function(e){return $e.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return $e.current.useTransition()};z.version="18.2.0";Ip.exports=z;var _=Ip.exports;const ze=jy(_),e0=My({__proto__:null,default:ze},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=_,n0=Symbol.for("react.element"),r0=Symbol.for("react.fragment"),i0=Object.prototype.hasOwnProperty,o0=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s0={key:!0,ref:!0,__self:!0,__source:!0};function Ap(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)i0.call(t,r)&&!s0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:n0,type:e,key:o,ref:s,props:i,_owner:o0.current}}la.Fragment=r0;la.jsx=Ap;la.jsxs=Ap;kp.exports=la;var C=kp.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},a0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Np(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new l0;const h=o<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class l0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u0=function(e){const t=Np(e);return Lp.encodeByteArray(t,!0)},Dp=function(e){return u0(e).replace(/\./g,"")},$p=function(e){try{return Lp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=()=>c0().__FIREBASE_DEFAULTS__,f0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},h0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$p(e[1]);return t&&JSON.parse(t)},_c=()=>{try{return d0()||f0()||h0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},p0=e=>{var t,n;return(n=(t=_c())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Mp=()=>{var e;return(e=_c())===null||e===void 0?void 0:e.config},jp=e=>{var t;return(t=_c())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function v0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function y0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function w0(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function E0(){try{return typeof indexedDB=="object"}catch{return!1}}function S0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="FirebaseError";class Tn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_0,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,go.prototype.create)}}class go{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?k0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Tn(i,a,r)}}function k0(e,t){return e.replace(I0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const I0=/\{\$([^}]+)}/g;function x0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function vs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(nf(o)&&nf(s)){if(!vs(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function nf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function yi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function wi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function C0(e,t){const n=new P0(e,t);return n.subscribe.bind(n)}class P0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");T0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=sl),i.error===void 0&&(i.error=sl),i.complete===void 0&&(i.complete=sl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function sl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){return e&&e._delegate?e._delegate:e}class jr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R0=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new m0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(b0(t))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Dn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Dn){return this.instances.has(t)}getOptions(t=Dn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:O0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Dn){return this.component?this.component.multipleInstances?t:Dn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function O0(e){return e===Dn?void 0:e}function b0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new R0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const N0={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},L0=K.INFO,D0={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},$0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=D0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Up{constructor(t){this.name=t,this._logLevel=L0,this._logHandler=$0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?N0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const M0=(e,t)=>t.some(n=>e instanceof n);let rf,of;function j0(){return rf||(rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function U0(){return of||(of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zp=new WeakMap,tu=new WeakMap,Fp=new WeakMap,al=new WeakMap,kc=new WeakMap;function z0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(cn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&zp.set(n,e)}).catch(()=>{}),kc.set(t,e),t}function F0(e){if(tu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});tu.set(e,t)}let nu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return tu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function B0(e){nu=e(nu)}function H0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ll(this),t,...n);return Fp.set(r,t.sort?t.sort():[t]),cn(r)}:U0().includes(e)?function(...t){return e.apply(ll(this),t),cn(zp.get(this))}:function(...t){return cn(e.apply(ll(this),t))}}function V0(e){return typeof e=="function"?H0(e):(e instanceof IDBTransaction&&F0(e),M0(e,j0())?new Proxy(e,nu):e)}function cn(e){if(e instanceof IDBRequest)return z0(e);if(al.has(e))return al.get(e);const t=V0(e);return t!==e&&(al.set(e,t),kc.set(t,e)),t}const ll=e=>kc.get(e);function W0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=cn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(cn(s.result),l.oldVersion,l.newVersion,cn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const G0=["get","getKey","getAll","getAllKeys","count"],K0=["put","add","delete","clear"],ul=new Map;function sf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ul.get(t))return ul.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=K0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||G0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ul.set(t,o),o}B0(e=>({...e,get:(t,n,r)=>sf(t,n)||e.get(t,n,r),has:(t,n)=>!!sf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(q0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function q0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ru="@firebase/app",af="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Up("@firebase/app"),Q0="@firebase/app-compat",X0="@firebase/analytics-compat",J0="@firebase/analytics",Z0="@firebase/app-check-compat",ew="@firebase/app-check",tw="@firebase/auth",nw="@firebase/auth-compat",rw="@firebase/database",iw="@firebase/database-compat",ow="@firebase/functions",sw="@firebase/functions-compat",aw="@firebase/installations",lw="@firebase/installations-compat",uw="@firebase/messaging",cw="@firebase/messaging-compat",dw="@firebase/performance",fw="@firebase/performance-compat",hw="@firebase/remote-config",pw="@firebase/remote-config-compat",mw="@firebase/storage",gw="@firebase/storage-compat",vw="@firebase/firestore",yw="@firebase/firestore-compat",ww="firebase",Ew="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="[DEFAULT]",Sw={[ru]:"fire-core",[Q0]:"fire-core-compat",[J0]:"fire-analytics",[X0]:"fire-analytics-compat",[ew]:"fire-app-check",[Z0]:"fire-app-check-compat",[tw]:"fire-auth",[nw]:"fire-auth-compat",[rw]:"fire-rtdb",[iw]:"fire-rtdb-compat",[ow]:"fire-fn",[sw]:"fire-fn-compat",[aw]:"fire-iid",[lw]:"fire-iid-compat",[uw]:"fire-fcm",[cw]:"fire-fcm-compat",[dw]:"fire-perf",[fw]:"fire-perf-compat",[hw]:"fire-rc",[pw]:"fire-rc-compat",[mw]:"fire-gcs",[gw]:"fire-gcs-compat",[vw]:"fire-fst",[yw]:"fire-fst-compat","fire-js":"fire-js",[ww]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Map,ou=new Map;function _w(e,t){try{e.container.addComponent(t)}catch(n){Yn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ji(e){const t=e.name;if(ou.has(t))return Yn.debug(`There were multiple attempts to register component ${t}.`),!1;ou.set(t,e);for(const n of ys.values())_w(n,e);return!0}function Bp(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dn=new go("app","Firebase",kw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=Ew;function Hp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:iu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw dn.create("bad-app-name",{appName:String(i)});if(n||(n=Mp()),!n)throw dn.create("no-options");const o=ys.get(i);if(o){if(vs(n,o.options)&&vs(r,o.config))return o;throw dn.create("duplicate-app",{appName:i})}const s=new A0(i);for(const l of ou.values())s.addComponent(l);const a=new Iw(n,r,s);return ys.set(i,a),a}function xw(e=iu){const t=ys.get(e);if(!t&&e===iu&&Mp())return Hp();if(!t)throw dn.create("no-app",{appName:e});return t}function Pr(e,t,n){var r;let i=(r=Sw[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yn.warn(a.join(" "));return}ji(new jr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="firebase-heartbeat-database",Pw=1,Ui="firebase-heartbeat-store";let cl=null;function Vp(){return cl||(cl=W0(Cw,Pw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ui)}}}).catch(e=>{throw dn.create("idb-open",{originalErrorMessage:e.message})})),cl}async function Tw(e){try{return await(await Vp()).transaction(Ui).objectStore(Ui).get(Wp(e))}catch(t){if(t instanceof Tn)Yn.warn(t.message);else{const n=dn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yn.warn(n.message)}}}async function lf(e,t){try{const r=(await Vp()).transaction(Ui,"readwrite");await r.objectStore(Ui).put(t,Wp(e)),await r.done}catch(n){if(n instanceof Tn)Yn.warn(n.message);else{const r=dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yn.warn(r.message)}}}function Wp(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=1024,Ow=30*24*60*60*1e3;class bw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=uf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Ow}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=uf(),{heartbeatsToSend:n,unsentEntries:r}=Aw(this._heartbeatsCache.heartbeats),i=Dp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function uf(){return new Date().toISOString().substring(0,10)}function Aw(e,t=Rw){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),cf(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return E0()?S0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Tw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function cf(e){return Dp(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(e){ji(new jr("platform-logger",t=>new Y0(t),"PRIVATE")),ji(new jr("heartbeat",t=>new bw(t),"PRIVATE")),Pr(ru,af,e),Pr(ru,af,"esm2017"),Pr("fire-js","")}Lw("");var Dw="firebase",$w="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr(Dw,$w,"app");var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ye.apply(this,arguments)};function Ic(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function zi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function df(e){return e!==void 0&&e.enterprise!==void 0}class Mw{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Gp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jw=Gp,Kp=new go("auth","Firebase",Gp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Up("@firebase/auth");function Uw(e,...t){ws.logLevel<=K.WARN&&ws.warn(`Auth (${yo}): ${e}`,...t)}function Jo(e,...t){ws.logLevel<=K.ERROR&&ws.error(`Auth (${yo}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e,...t){throw xc(e,...t)}function Tt(e,...t){return xc(e,...t)}function Yp(e,t,n){const r=Object.assign(Object.assign({},jw()),{[t]:n});return new go("auth","Firebase",r).create(t,{appName:e.name})}function zw(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&ot(e,"argument-error"),Yp(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Kp.create(e,...t)}function L(e,t,...n){if(!e)throw xc(t,...n)}function $t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Jo(t),new Error(t)}function Ft(e,t){e||$t(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Fw(){return ff()==="http:"||ff()==="https:"}function ff(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fw()||v0()||"connection"in navigator)?navigator.onLine:!0}function Hw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ft(n>t,"Short delay should be less than long delay!"),this.isMobile=g0()||y0()}get(){return Bw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(e,t){Ft(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new wo(3e4,6e4);function ar(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function lr(e,t,n,r,i={}){return Qp(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=vo(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),qp.fetch()(Xp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Qp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vw),t);try{const i=new Gw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ro(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ro(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ro(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yp(e,c,u);ot(e,c)}}catch(i){if(i instanceof Tn)throw i;ot(e,"network-request-failed",{message:String(i)})}}async function Eo(e,t,n,r,i={}){const o=await lr(e,t,n,r,i);return"mfaPendingCredential"in o&&ot(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Xp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Cc(e.config,i):`${e.config.apiScheme}://${i}`}class Gw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),Ww.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ro(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(e,t,r);return i.customData._tokenResponse=n,i}async function Kw(e,t){return lr(e,"GET","/v2/recaptchaConfig",ar(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(e,t){return lr(e,"POST","/v1/accounts:delete",t)}async function qw(e,t){return lr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Qw(e,t=!1){const n=sr(e),r=await n.getIdToken(t),i=Pc(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ci(dl(i.auth_time)),issuedAtTime:Ci(dl(i.iat)),expirationTime:Ci(dl(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function dl(e){return Number(e)*1e3}function Pc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const i=$p(n);return i?JSON.parse(i):(Jo("Failed to decode base64 JWT payload"),null)}catch(i){return Jo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xw(e){const t=Pc(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Tn&&Jw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Jw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Fi(e,qw(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?n1(o.providerUserInfo):[],a=t1(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Jp(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function e1(e){const t=sr(e);await Es(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function t1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function n1(e){return e.map(t=>{var{providerId:n}=t,r=Ic(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(e,t){const n=await Qp(e,{},async()=>{const r=vo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Xp(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Xw(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return L(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await r1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Bi;return r&&(L(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Vn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Ic(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Jp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Qw(this,t)}reload(){return e1(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Vn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Fi(this,Yw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:E,providerData:I,stsTokenManager:k}=n;L(m&&k,t,"internal-error");const T=Bi.fromJSON(this.name,k);L(typeof m=="string",t,"internal-error"),qt(f,t.name),qt(h,t.name),L(typeof w=="boolean",t,"internal-error"),L(typeof E=="boolean",t,"internal-error"),qt(g,t.name),qt(v,t.name),qt(y,t.name),qt(S,t.name),qt(p,t.name),qt(d,t.name);const j=new Vn({uid:m,auth:t,email:h,emailVerified:w,displayName:f,isAnonymous:E,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:T,createdAt:p,lastLoginAt:d});return I&&Array.isArray(I)&&(j.providerData=I.map(O=>Object.assign({},O))),S&&(j._redirectEventId=S),j}static async _fromIdTokenResponse(t,n,r=!1){const i=new Bi;i.updateFromServerResponse(n);const o=new Vn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Es(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;function Mt(e){Ft(e instanceof Function,"Expected a class definition");let t=hf.get(e);return t?(Ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,hf.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Zp.type="NONE";const pf=Zp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(e,t,n){return`firebase:${e}:${t}:${n}`}class Tr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Zo(this.userKey,i.apiKey,o),this.fullPersistenceKey=Zo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Vn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Tr(Mt(pf),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Mt(pf);const s=Zo(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=Vn._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Tr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Tr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(em(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(im(t))return"Blackberry";if(om(t))return"Webos";if(Tc(t))return"Safari";if((t.includes("chrome/")||tm(t))&&!t.includes("edge/"))return"Chrome";if(rm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function em(e=Re()){return/firefox\//i.test(e)}function Tc(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tm(e=Re()){return/crios\//i.test(e)}function nm(e=Re()){return/iemobile/i.test(e)}function rm(e=Re()){return/android/i.test(e)}function im(e=Re()){return/blackberry/i.test(e)}function om(e=Re()){return/webos/i.test(e)}function ua(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function i1(e=Re()){var t;return ua(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function o1(){return w0()&&document.documentMode===10}function sm(e=Re()){return ua(e)||rm(e)||om(e)||im(e)||/windows phone/i.test(e)||nm(e)}function s1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(e,t=[]){let n;switch(e){case"Browser":n=mf(Re());break;case"Worker":n=`${mf(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${yo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(e,t={}){return lr(e,"GET","/v2/passwordPolicy",ar(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=6;class c1{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:u1,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new a1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Tr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Es(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Hw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?sr(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await l1(this),n=new c1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new go("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Mt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Tr.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=am(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Uw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rn(e){return sr(e)}class gf{constructor(t){this.auth=t,this.observer=null,this.addObserver=C0(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function lm(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Tt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",f1().appendChild(r)})}function h1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const p1="https://www.google.com/recaptcha/enterprise.js?render=",m1="recaptcha-enterprise",g1="NO_RECAPTCHA";class v1{constructor(t){this.type=m1,this.auth=Rn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{Kw(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Mw(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;df(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(g1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&df(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}lm(p1+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function Ss(e,t,n,r=!1){const i=new v1(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(e,t){const n=Bp(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(vs(o,t??{}))return i;ot(i,"already-initialized")}return n.initialize({options:t})}function w1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function E1(e,t,n){const r=Rn(e);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=um(t),{host:s,port:a}=S1(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_1()}function um(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function S1(e){const t=um(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:vf(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:vf(s)}}}function vf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function _1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(t){return $t("not implemented")}_linkToIdToken(t,n){return $t("not implemented")}_getReauthenticationResolver(t){return $t("not implemented")}}async function k1(e,t){return lr(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(e,t){return Eo(e,"POST","/v1/accounts:signInWithPassword",ar(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(e,t){return Eo(e,"POST","/v1/accounts:signInWithEmailLink",ar(e,t))}async function x1(e,t){return Eo(e,"POST","/v1/accounts:signInWithEmailLink",ar(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Rc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Hi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Hi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ss(t,r,"signInWithPassword");return fl(t,i)}else return fl(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await Ss(t,r,"signInWithPassword");return fl(t,o)}else return Promise.reject(i)});case"emailLink":return I1(t,{email:this._email,oobCode:this._password});default:ot(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return k1(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return x1(t,{idToken:n,email:this._email,oobCode:this._password});default:ot(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(e,t){return Eo(e,"POST","/v1/accounts:signInWithIdp",ar(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="http://localhost";class qn extends Rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new qn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Ic(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new qn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Rr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Rr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Rr(t,n)}buildRequest(){const t={requestUri:C1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=vo(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T1(e){const t=yi(wi(e)).link,n=t?yi(wi(t)).deep_link_id:null,r=yi(wi(e)).deep_link_id;return(r?yi(wi(r)).link:null)||r||n||t||e}class Oc{constructor(t){var n,r,i,o,s,a;const l=yi(wi(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=P1((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=T1(t);try{return new Oc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.providerId=Zr.PROVIDER_ID}static credential(t,n){return Hi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Oc.parseLink(n);return L(r,"argument-error"),Hi._fromEmailAndCode(t,r.code,r.tenantId)}}Zr.PROVIDER_ID="password";Zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends bc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends So{constructor(){super("facebook.com")}static credential(t){return qn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return en.credential(t.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return qn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends So{constructor(){super("github.com")}static credential(t){return qn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends So{constructor(){super("twitter.com")}static credential(t,n){return qn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(e,t){return Eo(e,"POST","/v1/accounts:signUp",ar(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Vn._fromIdTokenResponse(t,r,i),s=yf(r);return new Qn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=yf(r);return new Qn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function yf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Tn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_s.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new _s(t,n,r,i)}}function cm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?_s._fromErrorAndOperation(e,o,t,r):o})}async function R1(e,t,n=!1){const r=await Fi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Fi(e,cm(r,i,t,e),n);L(o.idToken,r,"internal-error");const s=Pc(o.idToken);L(s,r,"internal-error");const{sub:a}=s;return L(e.uid===a,r,"user-mismatch"),Qn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(e,t,n=!1){const r="signIn",i=await cm(e,r,t),o=await Qn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function b1(e,t){return dm(Rn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(e){const t=Rn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function A1(e,t,n){var r;const i=Rn(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Ss(i,o,"signUpPassword");s=hl(i,u)}else s=hl(i,o).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Ss(i,o,"signUpPassword");return hl(i,c)}throw u});const a=await s.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&fm(e),u}),l=await Qn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function N1(e,t,n){return b1(sr(e),Zr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fm(e),r})}function L1(e,t,n,r){return sr(e).onIdTokenChanged(t,n,r)}function D1(e,t,n){return sr(e).beforeAuthStateChanged(t,n)}const ks="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ks,"1"),this.storage.removeItem(ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(){const e=Re();return Tc(e)||ua(e)}const M1=1e3,j1=10;class pm extends hm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$1()&&s1(),this.fallbackToPolling=sm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);o1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,j1):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},M1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}pm.type="LOCAL";const U1=pm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm extends hm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}mm.type="SESSION";const gm=mm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ca(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await z1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Ac("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function B1(e){Rt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function H1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function W1(){return vm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="firebaseLocalStorageDb",G1=1,Is="firebaseLocalStorage",wm="fbase_key";class _o{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function da(e,t){return e.transaction([Is],t?"readwrite":"readonly").objectStore(Is)}function K1(){const e=indexedDB.deleteDatabase(ym);return new _o(e).toPromise()}function au(){const e=indexedDB.open(ym,G1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Is,{keyPath:wm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Is)?t(r):(r.close(),await K1(),t(await au()))})})}async function wf(e,t,n){const r=da(e,!0).put({[wm]:t,value:n});return new _o(r).toPromise()}async function Y1(e,t){const n=da(e,!1).get(t),r=await new _o(n).toPromise();return r===void 0?null:r.value}function Ef(e,t){const n=da(e,!0).delete(t);return new _o(n).toPromise()}const q1=800,Q1=3;class Em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await au(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Q1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ca._getInstance(W1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await H1(),!this.activeServiceWorker)return;this.sender=new F1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||V1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await au();return await wf(t,ks,"1"),await Ef(t,ks),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Y1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ef(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=da(i,!1).getAll();return new _o(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Em.type="LOCAL";const X1=Em;new wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(e,t){return t?Mt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends Rc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Rr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Rr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function J1(e){return dm(e.auth,new Nc(e),e.bypassAuthState)}function Z1(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),O1(n,new Nc(e),e.bypassAuthState)}async function eE(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),R1(n,new Nc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return J1;case"linkViaPopup":case"linkViaRedirect":return eE;case"reauthViaPopup":case"reauthViaRedirect":return Z1;default:ot(this.auth,"internal-error")}}resolve(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=new wo(2e3,1e4);async function nE(e,t,n){const r=Rn(e);zw(e,t,bc);const i=Sm(r,n);return new Un(r,"signInViaPopup",t,i).executeNotNull()}class Un extends _m{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const t=Ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,tE.get())};t()}}Un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="pendingRedirect",es=new Map;class iE extends _m{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=es.get(this.auth._key());if(!t){try{const r=await oE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}es.set(this.auth._key(),t)}return this.bypassAuthState||es.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oE(e,t){const n=lE(t),r=aE(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sE(e,t){es.set(e._key(),t)}function aE(e){return Mt(e._redirectPersistence)}function lE(e){return Zo(rE,e.config.apiKey,e.name)}async function uE(e,t,n=!1){const r=Rn(e),i=Sm(r,t),s=await new iE(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=10*60*1e3;class dE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!fE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!km(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=cE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sf(t))}saveEventToCache(t){this.cachedEventUids.add(Sf(t)),this.lastProcessedEventTime=Date.now()}}function Sf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function km({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function fE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return km(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(e,t={}){return lr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mE=/^https?/;async function gE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await hE(e);for(const n of t)try{if(vE(n))return}catch{}ot(e,"unauthorized-domain")}function vE(e){const t=su(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!mE.test(n))return!1;if(pE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=new wo(3e4,6e4);function _f(){const e=Rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function wE(e){return new Promise((t,n)=>{var r,i,o;function s(){_f(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_f(),n(Tt(e,"network-request-failed"))},timeout:yE.get()})}if(!((i=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Rt().gapi)===null||o===void 0)&&o.load)s();else{const a=h1("iframefcb");return Rt()[a]=()=>{gapi.load?s():n(Tt(e,"network-request-failed"))},lm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw ts=null,t})}let ts=null;function EE(e){return ts=ts||wE(e),ts}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new wo(5e3,15e3),_E="__/auth/iframe",kE="emulator/auth/iframe",IE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CE(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Cc(t,kE):`https://${e.config.authDomain}/${_E}`,r={apiKey:t.apiKey,appName:e.name,v:yo},i=xE.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${vo(r).slice(1)}`}async function PE(e){const t=await EE(e),n=Rt().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:CE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Tt(e,"network-request-failed"),a=Rt().setTimeout(()=>{o(s)},SE.get());function l(){Rt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RE=500,OE=600,bE="_blank",AE="http://localhost";class kf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NE(e,t,n,r=RE,i=OE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TE),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Re().toLowerCase();n&&(a=tm(u)?bE:n),em(u)&&(t=t||AE,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(i1(u)&&a!=="_self")return LE(t||"",a),new kf(null);const f=window.open(t||"",a,c);L(f,e,"popup-blocked");try{f.focus()}catch{}return new kf(f)}function LE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="__/auth/handler",$E="emulator/auth/handler",ME=encodeURIComponent("fac");async function If(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:yo,eventId:i};if(t instanceof bc){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",x0(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(t instanceof So){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${ME}=${encodeURIComponent(l)}`:"";return`${jE(e)}?${vo(a).slice(1)}${u}`}function jE({config:e}){return e.emulator?Cc(e,$E):`https://${e.authDomain}/${DE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="webStorageSupport";class UE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gm,this._completeRedirectFn=uE,this._overrideRedirectResult=sE}async _openPopup(t,n,r,i){var o;Ft((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await If(t,n,r,su(),i);return NE(t,s,Ac())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await If(t,n,r,su(),i);return B1(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await PE(t),r=new dE(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(pl,{type:pl},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[pl];s!==void 0&&n(!!s),ot(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return sm()||Tc()||ua()}}const zE=UE;var xf="@firebase/auth",Cf="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function HE(e){ji(new jr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;L(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:am(e)},u=new d1(r,i,o,l);return w1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ji(new jr("auth-internal",t=>{const n=Rn(t.getProvider("auth").getImmediate());return(r=>new FE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(xf,Cf,BE(e)),Pr(xf,Cf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=5*60,WE=jp("authIdTokenMaxAge")||VE;let Pf=null;const GE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WE)return;const i=n==null?void 0:n.token;Pf!==i&&(Pf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fa(e=xw()){const t=Bp(e,"auth");if(t.isInitialized())return t.getImmediate();const n=y1(e,{popupRedirectResolver:zE,persistence:[X1,U1,gm]}),r=jp("authTokenSyncURL");if(r){const o=GE(r);D1(n,o,()=>o(n.currentUser)),L1(n,s=>o(s))}const i=p0("auth");return i&&E1(n,`http://${i}`),n}HE("Browser");const KE={apiKey:"AIzaSyArQhAdJduOYJuCF81EKDS55669Klgcz8Y",authDomain:"twitter--app.firebaseapp.com",projectId:"twitter--app",storageBucket:"twitter--app.appspot.com",messagingSenderId:"1097747632508",appId:"1:1097747632508:web:ecc45f2478bb08fdc394f9"},YE=Hp(KE);fa(YE);var ns=(e=>(e[e.JANUARY=0]="JANUARY",e[e.FEBRUARY=1]="FEBRUARY",e[e.MARCH=2]="MARCH",e[e.APRIL=3]="APRIL",e[e.MAY=4]="MAY",e[e.JUNE=5]="JUNE",e[e.JULY=6]="JULY",e[e.AUGUST=7]="AUGUST",e[e.SEPTEMBER=8]="SEPTEMBER",e[e.OCTOBER=9]="OCTOBER",e[e.NOVEMBER=10]="NOVEMBER",e[e.DECEMBER=11]="DECEMBER",e))(ns||{}),M=(e=>(e.HOME="/",e.LOGIN="/login",e.REGISTRATION="/registration",e.FEED="/feed",e.PROFILE="/profile",e))(M||{}),Im={exports:{}},xm={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=_;function qE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var QE=typeof Object.is=="function"?Object.is:qE,XE=Ur.useState,JE=Ur.useEffect,ZE=Ur.useLayoutEffect,eS=Ur.useDebugValue;function tS(e,t){var n=t(),r=XE({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return ZE(function(){i.value=n,i.getSnapshot=t,ml(i)&&o({inst:i})},[e,n,t]),JE(function(){return ml(i)&&o({inst:i}),e(function(){ml(i)&&o({inst:i})})},[e]),eS(n),n}function ml(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!QE(e,n)}catch{return!0}}function nS(e,t){return t()}var rS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?nS:tS;xm.useSyncExternalStore=Ur.useSyncExternalStore!==void 0?Ur.useSyncExternalStore:rS;Im.exports=xm;var iS=Im.exports,Cm={exports:{}},Pm={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=_,oS=iS;function sS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var aS=typeof Object.is=="function"?Object.is:sS,lS=oS.useSyncExternalStore,uS=ha.useRef,cS=ha.useEffect,dS=ha.useMemo,fS=ha.useDebugValue;Pm.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=uS(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=dS(function(){function l(g){if(!u){if(u=!0,c=g,g=r(g),i!==void 0&&s.hasValue){var v=s.value;if(i(v,g))return f=v}return f=g}if(v=f,aS(c,g))return v;var y=r(g);return i!==void 0&&i(v,y)?v:(c=g,f=y)}var u=!1,c,f,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,i]);var a=lS(e,o[0],o[1]);return cS(function(){s.hasValue=!0,s.value=a},[a]),fS(a),a};Cm.exports=Pm;var hS=Cm.exports,Tm={exports:{}},Je={},Rm={exports:{}},Om={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var N=P.length;P.push(A);e:for(;0<N;){var Y=N-1>>>1,ee=P[Y];if(0<i(ee,A))P[Y]=A,P[N]=ee,N=Y;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],N=P.pop();if(N!==A){P[0]=N;e:for(var Y=0,ee=P.length,ct=ee>>>1;Y<ct;){var Ae=2*(Y+1)-1,St=P[Ae],Ne=Ae+1,je=P[Ne];if(0>i(St,N))Ne<ee&&0>i(je,St)?(P[Y]=je,P[Ne]=N,Y=Ne):(P[Y]=St,P[Ae]=N,Y=Ae);else if(Ne<ee&&0>i(je,N))P[Y]=je,P[Ne]=N,Y=Ne;else break e}}return A}function i(P,A){var N=P.sortIndex-A.sortIndex;return N!==0?N:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,g=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=P)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function w(P){if(y=!1,m(P),!v)if(n(l)!==null)v=!0,We(E);else{var A=n(u);A!==null&&me(w,A.startTime-P)}}function E(P,A){v=!1,y&&(y=!1,p(T),T=-1),g=!0;var N=h;try{for(m(A),f=n(l);f!==null&&(!(f.expirationTime>A)||P&&!U());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,h=f.priorityLevel;var ee=Y(f.expirationTime<=A);A=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&r(l),m(A)}else r(l);f=n(l)}if(f!==null)var ct=!0;else{var Ae=n(u);Ae!==null&&me(w,Ae.startTime-A),ct=!1}return ct}finally{f=null,h=N,g=!1}}var I=!1,k=null,T=-1,j=5,O=-1;function U(){return!(e.unstable_now()-O<j)}function re(){if(k!==null){var P=e.unstable_now();O=P;var A=!0;try{A=k(!0,P)}finally{A?fe():(I=!1,k=null)}}else I=!1}var fe;if(typeof d=="function")fe=function(){d(re)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Se=be.port2;be.port1.onmessage=re,fe=function(){Se.postMessage(null)}}else fe=function(){S(re,0)};function We(P){k=P,I||(I=!0,fe())}function me(P,A){T=S(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,We(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var N=h;h=A;try{return P()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var N=h;h=P;try{return A()}finally{h=N}},e.unstable_scheduleCallback=function(P,A,N){var Y=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?Y+N:Y):N=Y,P){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=N+ee,P={id:c++,callback:A,priorityLevel:P,startTime:N,expirationTime:ee,sortIndex:-1},N>Y?(P.sortIndex=N,t(u,P),n(l)===null&&P===n(u)&&(y?(p(T),T=-1):y=!0,me(w,N-Y))):(P.sortIndex=ee,t(l,P),v||g||(v=!0,We(E))),P},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(P){var A=h;return function(){var N=h;h=A;try{return P.apply(this,arguments)}finally{h=N}}}})(Om);Rm.exports=Om;var pS=Rm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=_,Qe=pS;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Am=new Set,Vi={};function ur(e,t){zr(e,t),zr(e+"Capture",t)}function zr(e,t){for(Vi[e]=t,e=0;e<t.length;e++)Am.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=Object.prototype.hasOwnProperty,mS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tf={},Rf={};function gS(e){return lu.call(Rf,e)?!0:lu.call(Tf,e)?!1:mS.test(e)?Rf[e]=!0:(Tf[e]=!0,!1)}function vS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yS(e,t,n,r){if(t===null||typeof t>"u"||vS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lc=/[\-:]([a-z])/g;function Dc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Lc,Dc);Ie[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Lc,Dc);Ie[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Lc,Dc);Ie[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function $c(e,t,n,r){var i=Ie.hasOwnProperty(t)?Ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yS(t,n,i,r)&&(n=null),r||i===null?gS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),pr=Symbol.for("react.portal"),mr=Symbol.for("react.fragment"),Mc=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Lm=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),du=Symbol.for("react.suspense_list"),Uc=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),Dm=Symbol.for("react.offscreen"),Of=Symbol.iterator;function ci(e){return e===null||typeof e!="object"?null:(e=Of&&e[Of]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,gl;function Ei(e){if(gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gl=t&&t[1]||""}return`
`+gl+e}var vl=!1;function yl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ei(e):""}function wS(e){switch(e.tag){case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 2:case 15:return e=yl(e.type,!1),e;case 11:return e=yl(e.type.render,!1),e;case 1:return e=yl(e.type,!0),e;default:return""}}function fu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mr:return"Fragment";case pr:return"Portal";case uu:return"Profiler";case Mc:return"StrictMode";case cu:return"Suspense";case du:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lm:return(e.displayName||"Context")+".Consumer";case Nm:return(e._context.displayName||"Context")+".Provider";case jc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uc:return t=e.displayName||null,t!==null?t:fu(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return fu(e(t))}catch{}}return null}function ES(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fu(t);case 8:return t===Mc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $m(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function SS(e){var t=$m(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bo(e){e._valueTracker||(e._valueTracker=SS(e))}function Mm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$m(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hu(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=In(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jm(e,t){t=t.checked,t!=null&&$c(e,"checked",t,!1)}function pu(e,t){jm(e,t);var n=In(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mu(e,t.type,n):t.hasOwnProperty("defaultValue")&&mu(e,t.type,In(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Af(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mu(e,t,n){(t!=="number"||xs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Si=Array.isArray;function Or(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+In(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Si(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:In(n)}}function Um(e,t){var n=In(t.value),r=In(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ao,Fm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_S=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(e){_S.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pi[t]=Pi[e]})});function Bm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pi.hasOwnProperty(e)&&Pi[e]?(""+t).trim():t+"px"}function Hm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kS=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(e,t){if(t){if(kS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function wu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Su=null,br=null,Ar=null;function Df(e){if(e=xo(e)){if(typeof Su!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ya(t),Su(e.stateNode,e.type,t))}}function Vm(e){br?Ar?Ar.push(e):Ar=[e]:br=e}function Wm(){if(br){var e=br,t=Ar;if(Ar=br=null,Df(e),t)for(e=0;e<t.length;e++)Df(t[e])}}function Gm(e,t){return e(t)}function Km(){}var wl=!1;function Ym(e,t,n){if(wl)return e(t,n);wl=!0;try{return Gm(e,t,n)}finally{wl=!1,(br!==null||Ar!==null)&&(Km(),Wm())}}function Gi(e,t){var n=e.stateNode;if(n===null)return null;var r=ya(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var _u=!1;if(Bt)try{var di={};Object.defineProperty(di,"passive",{get:function(){_u=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{_u=!1}function IS(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ti=!1,Cs=null,Ps=!1,ku=null,xS={onError:function(e){Ti=!0,Cs=e}};function CS(e,t,n,r,i,o,s,a,l){Ti=!1,Cs=null,IS.apply(xS,arguments)}function PS(e,t,n,r,i,o,s,a,l){if(CS.apply(this,arguments),Ti){if(Ti){var u=Cs;Ti=!1,Cs=null}else throw Error(x(198));Ps||(Ps=!0,ku=u)}}function cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $f(e){if(cr(e)!==e)throw Error(x(188))}function TS(e){var t=e.alternate;if(!t){if(t=cr(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $f(i),e;if(o===r)return $f(i),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Qm(e){return e=TS(e),e!==null?Xm(e):null}function Xm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xm(e);if(t!==null)return t;e=e.sibling}return null}var Jm=Qe.unstable_scheduleCallback,Mf=Qe.unstable_cancelCallback,RS=Qe.unstable_shouldYield,OS=Qe.unstable_requestPaint,le=Qe.unstable_now,bS=Qe.unstable_getCurrentPriorityLevel,Fc=Qe.unstable_ImmediatePriority,Zm=Qe.unstable_UserBlockingPriority,Ts=Qe.unstable_NormalPriority,AS=Qe.unstable_LowPriority,eg=Qe.unstable_IdlePriority,pa=null,Ot=null;function NS(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(pa,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:$S,LS=Math.log,DS=Math.LN2;function $S(e){return e>>>=0,e===0?32:31-(LS(e)/DS|0)|0}var No=64,Lo=4194304;function _i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=_i(a):(o&=s,o!==0&&(r=_i(o)))}else s=n&~i,s!==0?r=_i(s):o!==0&&(r=_i(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),i=1<<n,r|=e[n],t&=~i;return r}function MS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-vt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=MS(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Iu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tg(){var e=No;return No<<=1,!(No&4194240)&&(No=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ko(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function US(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-vt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function ng(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rg,Hc,ig,og,sg,xu=!1,Do=[],fn=null,hn=null,pn=null,Ki=new Map,Yi=new Map,rn=[],zS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(t.pointerId)}}function fi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xo(t),t!==null&&Hc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function FS(e,t,n,r,i){switch(t){case"focusin":return fn=fi(fn,e,t,n,r,i),!0;case"dragenter":return hn=fi(hn,e,t,n,r,i),!0;case"mouseover":return pn=fi(pn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ki.set(o,fi(Ki.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Yi.set(o,fi(Yi.get(o)||null,e,t,n,r,i)),!0}return!1}function ag(e){var t=zn(e.target);if(t!==null){var n=cr(t);if(n!==null){if(t=n.tag,t===13){if(t=qm(n),t!==null){e.blockedOn=t,sg(e.priority,function(){ig(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Eu=r,n.target.dispatchEvent(r),Eu=null}else return t=xo(n),t!==null&&Hc(t),e.blockedOn=n,!1;t.shift()}return!0}function Uf(e,t,n){rs(e)&&n.delete(t)}function BS(){xu=!1,fn!==null&&rs(fn)&&(fn=null),hn!==null&&rs(hn)&&(hn=null),pn!==null&&rs(pn)&&(pn=null),Ki.forEach(Uf),Yi.forEach(Uf)}function hi(e,t){e.blockedOn===t&&(e.blockedOn=null,xu||(xu=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,BS)))}function qi(e){function t(i){return hi(i,e)}if(0<Do.length){hi(Do[0],e);for(var n=1;n<Do.length;n++){var r=Do[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&hi(fn,e),hn!==null&&hi(hn,e),pn!==null&&hi(pn,e),Ki.forEach(t),Yi.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)ag(n),n.blockedOn===null&&rn.shift()}var Nr=Kt.ReactCurrentBatchConfig,Os=!0;function HS(e,t,n,r){var i=V,o=Nr.transition;Nr.transition=null;try{V=1,Vc(e,t,n,r)}finally{V=i,Nr.transition=o}}function VS(e,t,n,r){var i=V,o=Nr.transition;Nr.transition=null;try{V=4,Vc(e,t,n,r)}finally{V=i,Nr.transition=o}}function Vc(e,t,n,r){if(Os){var i=Cu(e,t,n,r);if(i===null)Ol(e,t,r,bs,n),jf(e,r);else if(FS(i,e,t,n,r))r.stopPropagation();else if(jf(e,r),t&4&&-1<zS.indexOf(e)){for(;i!==null;){var o=xo(i);if(o!==null&&rg(o),o=Cu(e,t,n,r),o===null&&Ol(e,t,r,bs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var bs=null;function Cu(e,t,n,r){if(bs=null,e=zc(r),e=zn(e),e!==null)if(t=cr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bs=e,null}function lg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bS()){case Fc:return 1;case Zm:return 4;case Ts:case AS:return 16;case eg:return 536870912;default:return 16}default:return 16}}var an=null,Wc=null,is=null;function ug(){if(is)return is;var e,t=Wc,n=t.length,r,i="value"in an?an.value:an.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return is=i.slice(e,1<r?1-r:void 0)}function os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function zf(){return!1}function Ze(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$o:zf,this.isPropagationStopped=zf,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),t}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gc=Ze(ei),Io=se({},ei,{view:0,detail:0}),WS=Ze(Io),Sl,_l,pi,ma=se({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pi&&(pi&&e.type==="mousemove"?(Sl=e.screenX-pi.screenX,_l=e.screenY-pi.screenY):_l=Sl=0,pi=e),Sl)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),Ff=Ze(ma),GS=se({},ma,{dataTransfer:0}),KS=Ze(GS),YS=se({},Io,{relatedTarget:0}),kl=Ze(YS),qS=se({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),QS=Ze(qS),XS=se({},ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),JS=Ze(XS),ZS=se({},ei,{data:0}),Bf=Ze(ZS),e_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=n_[e])?!!t[e]:!1}function Kc(){return r_}var i_=se({},Io,{key:function(e){if(e.key){var t=e_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(e){return e.type==="keypress"?os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),o_=Ze(i_),s_=se({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=Ze(s_),a_=se({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),l_=Ze(a_),u_=se({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),c_=Ze(u_),d_=se({},ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=Ze(d_),h_=[9,13,27,32],Yc=Bt&&"CompositionEvent"in window,Ri=null;Bt&&"documentMode"in document&&(Ri=document.documentMode);var p_=Bt&&"TextEvent"in window&&!Ri,cg=Bt&&(!Yc||Ri&&8<Ri&&11>=Ri),Vf=String.fromCharCode(32),Wf=!1;function dg(e,t){switch(e){case"keyup":return h_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function m_(e,t){switch(e){case"compositionend":return fg(t);case"keypress":return t.which!==32?null:(Wf=!0,Vf);case"textInput":return e=t.data,e===Vf&&Wf?null:e;default:return null}}function g_(e,t){if(gr)return e==="compositionend"||!Yc&&dg(e,t)?(e=ug(),is=Wc=an=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cg&&t.locale!=="ko"?null:t.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!v_[e.type]:t==="textarea"}function hg(e,t,n,r){Vm(r),t=As(t,"onChange"),0<t.length&&(n=new Gc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Oi=null,Qi=null;function y_(e){Ig(e,0)}function ga(e){var t=wr(e);if(Mm(t))return e}function w_(e,t){if(e==="change")return t}var pg=!1;if(Bt){var Il;if(Bt){var xl="oninput"in document;if(!xl){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),xl=typeof Kf.oninput=="function"}Il=xl}else Il=!1;pg=Il&&(!document.documentMode||9<document.documentMode)}function Yf(){Oi&&(Oi.detachEvent("onpropertychange",mg),Qi=Oi=null)}function mg(e){if(e.propertyName==="value"&&ga(Qi)){var t=[];hg(t,Qi,e,zc(e)),Ym(y_,t)}}function E_(e,t,n){e==="focusin"?(Yf(),Oi=t,Qi=n,Oi.attachEvent("onpropertychange",mg)):e==="focusout"&&Yf()}function S_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga(Qi)}function __(e,t){if(e==="click")return ga(t)}function k_(e,t){if(e==="input"||e==="change")return ga(t)}function I_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:I_;function Xi(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lu.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function qf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qf(e,t){var n=qf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qf(n)}}function gg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vg(){for(var e=window,t=xs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xs(e.document)}return t}function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function x_(e){var t=vg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gg(n.ownerDocument.documentElement,n)){if(r!==null&&qc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qf(n,o);var s=Qf(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C_=Bt&&"documentMode"in document&&11>=document.documentMode,vr=null,Pu=null,bi=null,Tu=!1;function Xf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tu||vr==null||vr!==xs(r)||(r=vr,"selectionStart"in r&&qc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&Xi(bi,r)||(bi=r,r=As(Pu,"onSelect"),0<r.length&&(t=new Gc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vr)))}function Mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yr={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Cl={},yg={};Bt&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function va(e){if(Cl[e])return Cl[e];if(!yr[e])return e;var t=yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yg)return Cl[e]=t[n];return e}var wg=va("animationend"),Eg=va("animationiteration"),Sg=va("animationstart"),_g=va("transitionend"),kg=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){kg.set(e,t),ur(t,[e])}for(var Pl=0;Pl<Jf.length;Pl++){var Tl=Jf[Pl],P_=Tl.toLowerCase(),T_=Tl[0].toUpperCase()+Tl.slice(1);On(P_,"on"+T_)}On(wg,"onAnimationEnd");On(Eg,"onAnimationIteration");On(Sg,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(_g,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function Zf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,PS(r,t,void 0,e),e.currentTarget=null}function Ig(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Zf(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Zf(i,a,u),o=l}}}if(Ps)throw e=ku,Ps=!1,ku=null,e}function Q(e,t){var n=t[Nu];n===void 0&&(n=t[Nu]=new Set);var r=e+"__bubble";n.has(r)||(xg(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),xg(n,e,r,t)}var jo="_reactListening"+Math.random().toString(36).slice(2);function Ji(e){if(!e[jo]){e[jo]=!0,Am.forEach(function(n){n!=="selectionchange"&&(R_.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jo]||(t[jo]=!0,Rl("selectionchange",!1,t))}}function xg(e,t,n,r){switch(lg(t)){case 1:var i=HS;break;case 4:i=VS;break;default:i=Vc}n=i.bind(null,t,n,e),i=void 0,!_u||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=zn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ym(function(){var u=o,c=zc(n),f=[];e:{var h=kg.get(e);if(h!==void 0){var g=Gc,v=e;switch(e){case"keypress":if(os(n)===0)break e;case"keydown":case"keyup":g=o_;break;case"focusin":v="focus",g=kl;break;case"focusout":v="blur",g=kl;break;case"beforeblur":case"afterblur":g=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=KS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=l_;break;case wg:case Eg:case Sg:g=QS;break;case _g:g=c_;break;case"scroll":g=WS;break;case"wheel":g=f_;break;case"copy":case"cut":case"paste":g=JS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hf}var y=(t&4)!==0,S=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Gi(d,p),w!=null&&y.push(Zi(d,w,m)))),S)break;d=d.return}0<y.length&&(h=new g(h,v,null,n,c),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Eu&&(v=n.relatedTarget||n.fromElement)&&(zn(v)||v[Ht]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?zn(v):null,v!==null&&(S=cr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Ff,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Hf,w="onPointerLeave",p="onPointerEnter",d="pointer"),S=g==null?h:wr(g),m=v==null?h:wr(v),h=new y(w,d+"leave",g,n,c),h.target=S,h.relatedTarget=m,w=null,zn(c)===u&&(y=new y(p,d+"enter",v,n,c),y.target=m,y.relatedTarget=S,w=y),S=w,g&&v)t:{for(y=g,p=v,d=0,m=y;m;m=fr(m))d++;for(m=0,w=p;w;w=fr(w))m++;for(;0<d-m;)y=fr(y),d--;for(;0<m-d;)p=fr(p),m--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=fr(y),p=fr(p)}y=null}else y=null;g!==null&&eh(f,h,g,y,!1),v!==null&&S!==null&&eh(f,S,v,y,!0)}}e:{if(h=u?wr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=w_;else if(Gf(h))if(pg)E=k_;else{E=S_;var I=E_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=__);if(E&&(E=E(e,u))){hg(f,E,n,c);break e}I&&I(e,h,u),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&mu(h,"number",h.value)}switch(I=u?wr(u):window,e){case"focusin":(Gf(I)||I.contentEditable==="true")&&(vr=I,Pu=u,bi=null);break;case"focusout":bi=Pu=vr=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Xf(f,n,c);break;case"selectionchange":if(C_)break;case"keydown":case"keyup":Xf(f,n,c)}var k;if(Yc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else gr?dg(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(cg&&n.locale!=="ko"&&(gr||T!=="onCompositionStart"?T==="onCompositionEnd"&&gr&&(k=ug()):(an=c,Wc="value"in an?an.value:an.textContent,gr=!0)),I=As(u,T),0<I.length&&(T=new Bf(T,e,null,n,c),f.push({event:T,listeners:I}),k?T.data=k:(k=fg(n),k!==null&&(T.data=k)))),(k=p_?m_(e,n):g_(e,n))&&(u=As(u,"onBeforeInput"),0<u.length&&(c=new Bf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=k))}Ig(f,t)})}function Zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function As(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gi(e,n),o!=null&&r.unshift(Zi(e,o,i)),o=Gi(e,t),o!=null&&r.push(Zi(e,o,i))),e=e.return}return r}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Gi(n,o),l!=null&&s.unshift(Zi(n,l,a))):i||(l=Gi(n,o),l!=null&&s.push(Zi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var O_=/\r\n?/g,b_=/\u0000|\uFFFD/g;function th(e){return(typeof e=="string"?e:""+e).replace(O_,`
`).replace(b_,"")}function Uo(e,t,n){if(t=th(t),th(e)!==t&&n)throw Error(x(425))}function Ns(){}var Ru=null,Ou=null;function bu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Au=typeof setTimeout=="function"?setTimeout:void 0,A_=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,N_=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(e){return nh.resolve(null).then(e).catch(L_)}:Au;function L_(e){setTimeout(function(){throw e})}function bl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qi(t)}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ti=Math.random().toString(36).slice(2),Pt="__reactFiber$"+ti,eo="__reactProps$"+ti,Ht="__reactContainer$"+ti,Nu="__reactEvents$"+ti,D_="__reactListeners$"+ti,$_="__reactHandles$"+ti;function zn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rh(e);e!==null;){if(n=e[Pt])return n;e=rh(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[Pt]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ya(e){return e[eo]||null}var Lu=[],Er=-1;function bn(e){return{current:e}}function Z(e){0>Er||(e.current=Lu[Er],Lu[Er]=null,Er--)}function q(e,t){Er++,Lu[Er]=e.current,e.current=t}var xn={},Oe=bn(xn),Be=bn(!1),Xn=xn;function Fr(e,t){var n=e.type.contextTypes;if(!n)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function Ls(){Z(Be),Z(Oe)}function ih(e,t,n){if(Oe.current!==xn)throw Error(x(168));q(Oe,t),q(Be,n)}function Cg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,ES(e)||"Unknown",i));return se({},n,r)}function Ds(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Xn=Oe.current,q(Oe,e),q(Be,Be.current),!0}function oh(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Cg(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,Z(Be),Z(Oe),q(Oe,e)):Z(Be),q(Be,n)}var Dt=null,wa=!1,Al=!1;function Pg(e){Dt===null?Dt=[e]:Dt.push(e)}function M_(e){wa=!0,Pg(e)}function An(){if(!Al&&Dt!==null){Al=!0;var e=0,t=V;try{var n=Dt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,wa=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(e+1)),Jm(Fc,An),i}finally{V=t,Al=!1}}return null}var Sr=[],_r=0,$s=null,Ms=0,tt=[],nt=0,Jn=null,jt=1,Ut="";function $n(e,t){Sr[_r++]=Ms,Sr[_r++]=$s,$s=e,Ms=t}function Tg(e,t,n){tt[nt++]=jt,tt[nt++]=Ut,tt[nt++]=Jn,Jn=e;var r=jt;e=Ut;var i=32-vt(r)-1;r&=~(1<<i),n+=1;var o=32-vt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,jt=1<<32-vt(t)+i|n<<i|r,Ut=o+e}else jt=1<<o|n<<i|r,Ut=e}function Qc(e){e.return!==null&&($n(e,1),Tg(e,1,0))}function Xc(e){for(;e===$s;)$s=Sr[--_r],Sr[_r]=null,Ms=Sr[--_r],Sr[_r]=null;for(;e===Jn;)Jn=tt[--nt],tt[nt]=null,Ut=tt[--nt],tt[nt]=null,jt=tt[--nt],tt[nt]=null}var qe=null,Ye=null,ne=!1,mt=null;function Rg(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ye=mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:jt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ye=null,!0):!1;default:return!1}}function Du(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $u(e){if(ne){var t=Ye;if(t){var n=t;if(!sh(e,t)){if(Du(e))throw Error(x(418));t=mn(n.nextSibling);var r=qe;t&&sh(e,t)?Rg(r,n):(e.flags=e.flags&-4097|2,ne=!1,qe=e)}}else{if(Du(e))throw Error(x(418));e.flags=e.flags&-4097|2,ne=!1,qe=e}}}function ah(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function zo(e){if(e!==qe)return!1;if(!ne)return ah(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bu(e.type,e.memoizedProps)),t&&(t=Ye)){if(Du(e))throw Og(),Error(x(418));for(;t;)Rg(e,t),t=mn(t.nextSibling)}if(ah(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=qe?mn(e.stateNode.nextSibling):null;return!0}function Og(){for(var e=Ye;e;)e=mn(e.nextSibling)}function Br(){Ye=qe=null,ne=!1}function Jc(e){mt===null?mt=[e]:mt.push(e)}var j_=Kt.ReactCurrentBatchConfig;function ht(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var js=bn(null),Us=null,kr=null,Zc=null;function ed(){Zc=kr=Us=null}function td(e){var t=js.current;Z(js),e._currentValue=t}function Mu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){Us=e,Zc=kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Zc!==e)if(e={context:e,memoizedValue:t,next:null},kr===null){if(Us===null)throw Error(x(308));kr=e,Us.dependencies={lanes:0,firstContext:e}}else kr=kr.next=e;return t}var Fn=null;function nd(e){Fn===null?Fn=[e]:Fn.push(e)}function bg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,nd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function rd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ag(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vt(e,n)}return i=r.interleaved,i===null?(t.next=t,nd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vt(e,n)}function ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}function lh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zs(e,t,n,r){var i=e.updateQueue;Zt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(h=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=se({},f,h);break e;case 2:Zt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);er|=s,e.lanes=s,e.memoizedState=f}}function uh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Ng=new bm.Component().refs;function ju(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ea={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),i=yn(e),o=zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,i),t!==null&&(yt(t,e,i,r),ss(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),i=yn(e),o=zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,i),t!==null&&(yt(t,e,i,r),ss(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=yn(e),i=zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=gn(e,i,r),t!==null&&(yt(t,e,r,n),ss(t,e,r))}};function ch(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Xi(n,r)||!Xi(i,o):!0}function Lg(e,t,n){var r=!1,i=xn,o=t.contextType;return typeof o=="object"&&o!==null?o=st(o):(i=He(t)?Xn:Oe.current,r=t.contextTypes,o=(r=r!=null)?Fr(e,i):xn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ea,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function dh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ea.enqueueReplaceState(t,t.state,null)}function Uu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ng,rd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=st(o):(o=He(t)?Xn:Oe.current,i.context=Fr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ju(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ea.enqueueReplaceState(i,i.state,null),zs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Ng&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Fo(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fh(e){var t=e._init;return t(e._payload)}function Dg(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=wn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,w){return d===null||d.tag!==6?(d=Ul(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,w){var E=m.type;return E===mr?c(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&fh(E)===d.type)?(w=i(d,m.props),w.ref=mi(p,d,m),w.return=p,w):(w=fs(m.type,m.key,m.props,null,p.mode,w),w.ref=mi(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=zl(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,w,E){return d===null||d.tag!==7?(d=Gn(m,p.mode,w,E),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ul(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Oo:return m=fs(d.type,d.key,d.props,null,p.mode,m),m.ref=mi(p,null,d),m.return=p,m;case pr:return d=zl(d,p.mode,m),d.return=p,d;case Jt:var w=d._init;return f(p,w(d._payload),m)}if(Si(d)||ci(d))return d=Gn(d,p.mode,m,null),d.return=p,d;Fo(p,d)}return null}function h(p,d,m,w){var E=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oo:return m.key===E?l(p,d,m,w):null;case pr:return m.key===E?u(p,d,m,w):null;case Jt:return E=m._init,h(p,d,E(m._payload),w)}if(Si(m)||ci(m))return E!==null?null:c(p,d,m,w,null);Fo(p,m)}return null}function g(p,d,m,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(d,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Oo:return p=p.get(w.key===null?m:w.key)||null,l(d,p,w,E);case pr:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,E);case Jt:var I=w._init;return g(p,d,m,I(w._payload),E)}if(Si(w)||ci(w))return p=p.get(m)||null,c(d,p,w,E,null);Fo(d,w)}return null}function v(p,d,m,w){for(var E=null,I=null,k=d,T=d=0,j=null;k!==null&&T<m.length;T++){k.index>T?(j=k,k=null):j=k.sibling;var O=h(p,k,m[T],w);if(O===null){k===null&&(k=j);break}e&&k&&O.alternate===null&&t(p,k),d=o(O,d,T),I===null?E=O:I.sibling=O,I=O,k=j}if(T===m.length)return n(p,k),ne&&$n(p,T),E;if(k===null){for(;T<m.length;T++)k=f(p,m[T],w),k!==null&&(d=o(k,d,T),I===null?E=k:I.sibling=k,I=k);return ne&&$n(p,T),E}for(k=r(p,k);T<m.length;T++)j=g(k,p,T,m[T],w),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?T:j.key),d=o(j,d,T),I===null?E=j:I.sibling=j,I=j);return e&&k.forEach(function(U){return t(p,U)}),ne&&$n(p,T),E}function y(p,d,m,w){var E=ci(m);if(typeof E!="function")throw Error(x(150));if(m=E.call(m),m==null)throw Error(x(151));for(var I=E=null,k=d,T=d=0,j=null,O=m.next();k!==null&&!O.done;T++,O=m.next()){k.index>T?(j=k,k=null):j=k.sibling;var U=h(p,k,O.value,w);if(U===null){k===null&&(k=j);break}e&&k&&U.alternate===null&&t(p,k),d=o(U,d,T),I===null?E=U:I.sibling=U,I=U,k=j}if(O.done)return n(p,k),ne&&$n(p,T),E;if(k===null){for(;!O.done;T++,O=m.next())O=f(p,O.value,w),O!==null&&(d=o(O,d,T),I===null?E=O:I.sibling=O,I=O);return ne&&$n(p,T),E}for(k=r(p,k);!O.done;T++,O=m.next())O=g(k,p,T,O.value,w),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?T:O.key),d=o(O,d,T),I===null?E=O:I.sibling=O,I=O);return e&&k.forEach(function(re){return t(p,re)}),ne&&$n(p,T),E}function S(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===mr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Oo:e:{for(var E=m.key,I=d;I!==null;){if(I.key===E){if(E=m.type,E===mr){if(I.tag===7){n(p,I.sibling),d=i(I,m.props.children),d.return=p,p=d;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&fh(E)===I.type){n(p,I.sibling),d=i(I,m.props),d.ref=mi(p,I,m),d.return=p,p=d;break e}n(p,I);break}else t(p,I);I=I.sibling}m.type===mr?(d=Gn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=fs(m.type,m.key,m.props,null,p.mode,w),w.ref=mi(p,d,m),w.return=p,p=w)}return s(p);case pr:e:{for(I=m.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=zl(m,p.mode,w),d.return=p,p=d}return s(p);case Jt:return I=m._init,S(p,d,I(m._payload),w)}if(Si(m))return v(p,d,m,w);if(ci(m))return y(p,d,m,w);Fo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Ul(m,p.mode,w),d.return=p,p=d),s(p)):n(p,d)}return S}var Hr=Dg(!0),$g=Dg(!1),Co={},bt=bn(Co),to=bn(Co),no=bn(Co);function Bn(e){if(e===Co)throw Error(x(174));return e}function id(e,t){switch(q(no,t),q(to,e),q(bt,Co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vu(t,e)}Z(bt),q(bt,t)}function Vr(){Z(bt),Z(to),Z(no)}function Mg(e){Bn(no.current);var t=Bn(bt.current),n=vu(t,e.type);t!==n&&(q(to,e),q(bt,n))}function od(e){to.current===e&&(Z(bt),Z(to))}var ie=bn(0);function Fs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function sd(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var as=Kt.ReactCurrentDispatcher,Ll=Kt.ReactCurrentBatchConfig,Zn=0,oe=null,he=null,ge=null,Bs=!1,Ai=!1,ro=0,U_=0;function xe(){throw Error(x(321))}function ad(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function ld(e,t,n,r,i,o){if(Zn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,as.current=e===null||e.memoizedState===null?H_:V_,e=n(r,i),Ai){o=0;do{if(Ai=!1,ro=0,25<=o)throw Error(x(301));o+=1,ge=he=null,t.updateQueue=null,as.current=W_,e=n(r,i)}while(Ai)}if(as.current=Hs,t=he!==null&&he.next!==null,Zn=0,ge=he=oe=null,Bs=!1,t)throw Error(x(300));return e}function ud(){var e=ro!==0;return ro=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?oe.memoizedState=ge=e:ge=ge.next=e,ge}function at(){if(he===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ge===null?oe.memoizedState:ge.next;if(t!==null)ge=t,he=e;else{if(e===null)throw Error(x(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ge===null?oe.memoizedState=ge=e:ge=ge.next=e}return ge}function io(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=at(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Zn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,oe.lanes|=c,er|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Et(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,er|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=at(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Et(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function jg(){}function Ug(e,t){var n=oe,r=at(),i=t(),o=!Et(r.memoizedState,i);if(o&&(r.memoizedState=i,Fe=!0),r=r.queue,cd(Bg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,oo(9,Fg.bind(null,n,r,i,t),void 0,null),we===null)throw Error(x(349));Zn&30||zg(n,t,i)}return i}function zg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fg(e,t,n,r){t.value=n,t.getSnapshot=r,Hg(t)&&Vg(e)}function Bg(e,t,n){return n(function(){Hg(t)&&Vg(e)})}function Hg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function Vg(e){var t=Vt(e,1);t!==null&&yt(t,e,1,-1)}function hh(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:e},t.queue=e,e=e.dispatch=B_.bind(null,oe,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wg(){return at().memoizedState}function ls(e,t,n,r){var i=It();oe.flags|=e,i.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function Sa(e,t,n,r){var i=at();r=r===void 0?null:r;var o=void 0;if(he!==null){var s=he.memoizedState;if(o=s.destroy,r!==null&&ad(r,s.deps)){i.memoizedState=oo(t,n,o,r);return}}oe.flags|=e,i.memoizedState=oo(1|t,n,o,r)}function ph(e,t){return ls(8390656,8,e,t)}function cd(e,t){return Sa(2048,8,e,t)}function Gg(e,t){return Sa(4,2,e,t)}function Kg(e,t){return Sa(4,4,e,t)}function Yg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qg(e,t,n){return n=n!=null?n.concat([e]):null,Sa(4,4,Yg.bind(null,t,e),n)}function dd(){}function Qg(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ad(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xg(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ad(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jg(e,t,n){return Zn&21?(Et(n,t)||(n=tg(),oe.lanes|=n,er|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function z_(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Ll.transition;Ll.transition={};try{e(!1),t()}finally{V=n,Ll.transition=r}}function Zg(){return at().memoizedState}function F_(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ev(e))tv(t,n);else if(n=bg(e,t,n,r),n!==null){var i=De();yt(n,e,r,i),nv(n,t,r)}}function B_(e,t,n){var r=yn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ev(e))tv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Et(a,s)){var l=t.interleaved;l===null?(i.next=i,nd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=bg(e,t,i,r),n!==null&&(i=De(),yt(n,e,r,i),nv(n,t,r))}}function ev(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function tv(e,t){Ai=Bs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}var Hs={readContext:st,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},H_={readContext:st,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:ph,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ls(4194308,4,Yg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return ls(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=It();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F_.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:hh,useDebugValue:dd,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=hh(!1),t=e[0];return e=z_.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=It();if(ne){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),we===null)throw Error(x(349));Zn&30||zg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ph(Bg.bind(null,r,o,e),[e]),r.flags|=2048,oo(9,Fg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=It(),t=we.identifierPrefix;if(ne){var n=Ut,r=jt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ro++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=U_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},V_={readContext:st,useCallback:Qg,useContext:st,useEffect:cd,useImperativeHandle:qg,useInsertionEffect:Gg,useLayoutEffect:Kg,useMemo:Xg,useReducer:Dl,useRef:Wg,useState:function(){return Dl(io)},useDebugValue:dd,useDeferredValue:function(e){var t=at();return Jg(t,he.memoizedState,e)},useTransition:function(){var e=Dl(io)[0],t=at().memoizedState;return[e,t]},useMutableSource:jg,useSyncExternalStore:Ug,useId:Zg,unstable_isNewReconciler:!1},W_={readContext:st,useCallback:Qg,useContext:st,useEffect:cd,useImperativeHandle:qg,useInsertionEffect:Gg,useLayoutEffect:Kg,useMemo:Xg,useReducer:$l,useRef:Wg,useState:function(){return $l(io)},useDebugValue:dd,useDeferredValue:function(e){var t=at();return he===null?t.memoizedState=e:Jg(t,he.memoizedState,e)},useTransition:function(){var e=$l(io)[0],t=at().memoizedState;return[e,t]},useMutableSource:jg,useSyncExternalStore:Ug,useId:Zg,unstable_isNewReconciler:!1};function Wr(e,t){try{var n="",r=t;do n+=wS(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ml(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var G_=typeof WeakMap=="function"?WeakMap:Map;function rv(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,Qu=r),zu(e,t)},n}function iv(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zu(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function mh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new G_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sk.bind(null,e,t,n),t.then(e,e))}function gh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var K_=Kt.ReactCurrentOwner,Fe=!1;function Le(e,t,n,r){t.child=e===null?$g(t,null,n,r):Hr(t,e.child,n,r)}function yh(e,t,n,r,i){n=n.render;var o=t.ref;return Lr(t,i),r=ld(e,t,n,r,o,i),n=ud(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(ne&&n&&Qc(t),t.flags|=1,Le(e,t,r,i),t.child)}function wh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!wd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ov(e,t,o,r,i)):(e=fs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xi,n(s,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=wn(o,r),e.ref=t.ref,e.return=t,t.child=e}function ov(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Xi(o,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return Fu(e,t,n,r,i)}function sv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(xr,Ke),Ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(xr,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,q(xr,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,q(xr,Ke),Ke|=r;return Le(e,t,i,n),t.child}function av(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fu(e,t,n,r,i){var o=He(n)?Xn:Oe.current;return o=Fr(t,o),Lr(t,i),n=ld(e,t,n,r,o,i),r=ud(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(ne&&r&&Qc(t),t.flags|=1,Le(e,t,n,i),t.child)}function Eh(e,t,n,r,i){if(He(n)){var o=!0;Ds(t)}else o=!1;if(Lr(t,i),t.stateNode===null)us(e,t),Lg(t,n,r),Uu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=He(n)?Xn:Oe.current,u=Fr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&dh(t,s,r,u),Zt=!1;var h=t.memoizedState;s.state=h,zs(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Be.current||Zt?(typeof c=="function"&&(ju(t,n,c,r),l=t.memoizedState),(a=Zt||ch(t,n,a,r,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Ag(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ht(t.type,a),s.props=u,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=st(l):(l=He(n)?Xn:Oe.current,l=Fr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&dh(t,s,r,l),Zt=!1,h=t.memoizedState,s.state=h,zs(t,r,s,i);var v=t.memoizedState;a!==f||h!==v||Be.current||Zt?(typeof g=="function"&&(ju(t,n,g,r),v=t.memoizedState),(u=Zt||ch(t,n,u,r,h,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Bu(e,t,n,r,o,i)}function Bu(e,t,n,r,i,o){av(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&oh(t,n,!1),Wt(e,t,o);r=t.stateNode,K_.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Hr(t,e.child,null,o),t.child=Hr(t,null,a,o)):Le(e,t,a,o),t.memoizedState=r.state,i&&oh(t,n,!0),t.child}function lv(e){var t=e.stateNode;t.pendingContext?ih(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ih(e,t.context,!1),id(e,t.containerInfo)}function Sh(e,t,n,r,i){return Br(),Jc(i),t.flags|=256,Le(e,t,n,r),t.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Vu(e){return{baseLanes:e,cachePool:null,transitions:null}}function uv(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(ie,i&1),e===null)return $u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ia(s,r,0,null),e=Gn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vu(n),t.memoizedState=Hu,e):fd(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Y_(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=wn(a,o):(o=Gn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Vu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Hu,r}return o=e.child,e=o.sibling,r=wn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fd(e,t){return t=Ia({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bo(e,t,n,r){return r!==null&&Jc(r),Hr(t,e.child,null,n),e=fd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Y_(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ml(Error(x(422))),Bo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ia({mode:"visible",children:r.children},i,0,null),o=Gn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hr(t,e.child,null,s),t.child.memoizedState=Vu(s),t.memoizedState=Hu,o);if(!(t.mode&1))return Bo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(x(419)),r=Ml(o,r,void 0),Bo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Fe||a){if(r=we,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Vt(e,i),yt(r,e,i,-1))}return yd(),r=Ml(Error(x(421))),Bo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ak.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ye=mn(i.nextSibling),qe=t,ne=!0,mt=null,e!==null&&(tt[nt++]=jt,tt[nt++]=Ut,tt[nt++]=Jn,jt=e.id,Ut=e.overflow,Jn=t),t=fd(t,r.children),t.flags|=4096,t)}function _h(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mu(e.return,t,n)}function jl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function cv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Le(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_h(e,n,t);else if(e.tag===19)_h(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Fs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jl(t,!0,n,null,o);break;case"together":jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function us(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),er|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function q_(e,t,n){switch(t.tag){case 3:lv(t),Br();break;case 5:Mg(t);break;case 1:He(t.type)&&Ds(t);break;case 4:id(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(js,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?uv(e,t,n):(q(ie,ie.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);q(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,sv(e,t,n)}return Wt(e,t,n)}var dv,Wu,fv,hv;dv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wu=function(){};fv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Bn(bt.current);var o=null;switch(n){case"input":i=hu(e,i),r=hu(e,r),o=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),o=[];break;case"textarea":i=gu(e,i),r=gu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ns)}yu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Q("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};hv=function(e,t,n,r){n!==r&&(t.flags|=4)};function gi(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Q_(e,t,n){var r=t.pendingProps;switch(Xc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return He(t.type)&&Ls(),Ce(t),null;case 3:return r=t.stateNode,Vr(),Z(Be),Z(Oe),sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(Zu(mt),mt=null))),Wu(e,t),Ce(t),null;case 5:od(t);var i=Bn(no.current);if(n=t.type,e!==null&&t.stateNode!=null)fv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return Ce(t),null}if(e=Bn(bt.current),zo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[eo]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)Q(ki[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":bf(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":Nf(r,o),Q("invalid",r)}yu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Uo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Uo(r.textContent,a,e),i=["children",""+a]):Vi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Q("scroll",r)}switch(n){case"input":bo(r),Af(r,o,!0);break;case"textarea":bo(r),Lf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ns)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Pt]=t,e[eo]=r,dv(e,t,!1,!1),t.stateNode=e;e:{switch(s=wu(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)Q(ki[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":bf(e,r),i=hu(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Nf(e,r),i=gu(e,r),Q("invalid",e);break;default:i=r}yu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Hm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wi(e,l):typeof l=="number"&&Wi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Q("scroll",e):l!=null&&$c(e,o,l,s))}switch(n){case"input":bo(e),Af(e,r,!1);break;case"textarea":bo(e),Lf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Or(e,!!r.multiple,o,!1):r.defaultValue!=null&&Or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ns)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)hv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Bn(no.current),Bn(bt.current),zo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Uo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Ce(t),null;case 13:if(Z(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ye!==null&&t.mode&1&&!(t.flags&128))Og(),Br(),t.flags|=98560,o=!1;else if(o=zo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[Pt]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else mt!==null&&(Zu(mt),mt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?pe===0&&(pe=3):yd())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Vr(),Wu(e,t),e===null&&Ji(t.stateNode.containerInfo),Ce(t),null;case 10:return td(t.type._context),Ce(t),null;case 17:return He(t.type)&&Ls(),Ce(t),null;case 19:if(Z(ie),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)gi(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Fs(e),s!==null){for(t.flags|=128,gi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Gr&&(t.flags|=128,r=!0,gi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Fs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ne)return Ce(t),null}else 2*le()-o.renderingStartTime>Gr&&n!==1073741824&&(t.flags|=128,r=!0,gi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,n=ie.current,q(ie,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return vd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function X_(e,t){switch(Xc(t),t.tag){case 1:return He(t.type)&&Ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vr(),Z(Be),Z(Oe),sd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return od(t),null;case 13:if(Z(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ie),null;case 4:return Vr(),null;case 10:return td(t.type._context),null;case 22:case 23:return vd(),null;case 24:return null;default:return null}}var Ho=!1,Te=!1,J_=typeof WeakSet=="function"?WeakSet:Set,R=null;function Ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function Gu(e,t,n){try{n()}catch(r){ae(e,t,r)}}var kh=!1;function Z_(e,t){if(Ru=Os,e=vg(),qc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:e,selectionRange:n},Os=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:ht(t.type,y),S);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return v=kh,kh=!1,v}function Ni(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Gu(t,n,o)}i=i.next}while(i!==r)}}function _a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ku(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pv(e){var t=e.alternate;t!==null&&(e.alternate=null,pv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[eo],delete t[Nu],delete t[D_],delete t[$_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mv(e){return e.tag===5||e.tag===3||e.tag===4}function Ih(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ns));else if(r!==4&&(e=e.child,e!==null))for(Yu(e,t,n),e=e.sibling;e!==null;)Yu(e,t,n),e=e.sibling}function qu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qu(e,t,n),e=e.sibling;e!==null;)qu(e,t,n),e=e.sibling}var _e=null,pt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)gv(e,t,n),n=n.sibling}function gv(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(pa,n)}catch{}switch(n.tag){case 5:Te||Ir(n,t);case 6:var r=_e,i=pt;_e=null,Qt(e,t,n),_e=r,pt=i,_e!==null&&(pt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(pt?(e=_e,n=n.stateNode,e.nodeType===8?bl(e.parentNode,n):e.nodeType===1&&bl(e,n),qi(e)):bl(_e,n.stateNode));break;case 4:r=_e,i=pt,_e=n.stateNode.containerInfo,pt=!0,Qt(e,t,n),_e=r,pt=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Gu(n,t,s),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!Te&&(Ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Qt(e,t,n),Te=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function xh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new J_),t.forEach(function(r){var i=lk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:_e=a.stateNode,pt=!1;break e;case 3:_e=a.stateNode.containerInfo,pt=!0;break e;case 4:_e=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(_e===null)throw Error(x(160));gv(o,s,i),_e=null,pt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ae(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vv(t,e),t=t.sibling}function vv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),kt(e),r&4){try{Ni(3,e,e.return),_a(3,e)}catch(y){ae(e,e.return,y)}try{Ni(5,e,e.return)}catch(y){ae(e,e.return,y)}}break;case 1:dt(t,e),kt(e),r&512&&n!==null&&Ir(n,n.return);break;case 5:if(dt(t,e),kt(e),r&512&&n!==null&&Ir(n,n.return),e.flags&32){var i=e.stateNode;try{Wi(i,"")}catch(y){ae(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&jm(i,o),wu(a,s);var u=wu(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Hm(i,f):c==="dangerouslySetInnerHTML"?Fm(i,f):c==="children"?Wi(i,f):$c(i,c,f,u)}switch(a){case"input":pu(i,o);break;case"textarea":Um(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Or(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Or(i,!!o.multiple,o.defaultValue,!0):Or(i,!!o.multiple,o.multiple?[]:"",!1))}i[eo]=o}catch(y){ae(e,e.return,y)}}break;case 6:if(dt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ae(e,e.return,y)}}break;case 3:if(dt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(t.containerInfo)}catch(y){ae(e,e.return,y)}break;case 4:dt(t,e),kt(e);break;case 13:dt(t,e),kt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(md=le())),r&4&&xh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||c,dt(t,e),Te=u):dt(t,e),kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(f=R=c;R!==null;){switch(h=R,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ni(4,h,h.return);break;case 1:Ir(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){ae(r,n,y)}}break;case 5:Ir(h,h.return);break;case 22:if(h.memoizedState!==null){Ph(f);continue}}g!==null?(g.return=h,R=g):Ph(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bm("display",s))}catch(y){ae(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ae(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:dt(t,e),kt(e),r&4&&xh(e);break;case 21:break;default:dt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mv(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wi(i,""),r.flags&=-33);var o=Ih(e);qu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ih(e);Yu(e,a,s);break;default:throw Error(x(161))}}catch(l){ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ek(e,t,n){R=e,yv(e)}function yv(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ho;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Te;a=Ho;var u=Te;if(Ho=s,(Te=l)&&!u)for(R=i;R!==null;)s=R,l=s.child,s.tag===22&&s.memoizedState!==null?Th(i):l!==null?(l.return=s,R=l):Th(i);for(;o!==null;)R=o,yv(o),o=o.sibling;R=i,Ho=a,Te=u}Ch(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Ch(e)}}function Ch(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||_a(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&qi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Te||t.flags&512&&Ku(t)}catch(h){ae(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Ph(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Th(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_a(4,t)}catch(l){ae(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ae(t,i,l)}}var o=t.return;try{Ku(t)}catch(l){ae(t,o,l)}break;case 5:var s=t.return;try{Ku(t)}catch(l){ae(t,s,l)}}}catch(l){ae(t,t.return,l)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var tk=Math.ceil,Vs=Kt.ReactCurrentDispatcher,hd=Kt.ReactCurrentOwner,it=Kt.ReactCurrentBatchConfig,B=0,we=null,ce=null,ke=0,Ke=0,xr=bn(0),pe=0,so=null,er=0,ka=0,pd=0,Li=null,Ue=null,md=0,Gr=1/0,Nt=null,Ws=!1,Qu=null,vn=null,Vo=!1,ln=null,Gs=0,Di=0,Xu=null,cs=-1,ds=0;function De(){return B&6?le():cs!==-1?cs:cs=le()}function yn(e){return e.mode&1?B&2&&ke!==0?ke&-ke:j_.transition!==null?(ds===0&&(ds=tg()),ds):(e=V,e!==0||(e=window.event,e=e===void 0?16:lg(e.type)),e):1}function yt(e,t,n,r){if(50<Di)throw Di=0,Xu=null,Error(x(185));ko(e,n,r),(!(B&2)||e!==we)&&(e===we&&(!(B&2)&&(ka|=n),pe===4&&on(e,ke)),Ve(e,r),n===1&&B===0&&!(t.mode&1)&&(Gr=le()+500,wa&&An()))}function Ve(e,t){var n=e.callbackNode;jS(e,t);var r=Rs(e,e===we?ke:0);if(r===0)n!==null&&Mf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mf(n),t===1)e.tag===0?M_(Rh.bind(null,e)):Pg(Rh.bind(null,e)),N_(function(){!(B&6)&&An()}),n=null;else{switch(ng(r)){case 1:n=Fc;break;case 4:n=Zm;break;case 16:n=Ts;break;case 536870912:n=eg;break;default:n=Ts}n=Cv(n,wv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wv(e,t){if(cs=-1,ds=0,B&6)throw Error(x(327));var n=e.callbackNode;if(Dr()&&e.callbackNode!==n)return null;var r=Rs(e,e===we?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ks(e,r);else{t=r;var i=B;B|=2;var o=Sv();(we!==e||ke!==t)&&(Nt=null,Gr=le()+500,Wn(e,t));do try{ik();break}catch(a){Ev(e,a)}while(1);ed(),Vs.current=o,B=i,ce!==null?t=0:(we=null,ke=0,t=pe)}if(t!==0){if(t===2&&(i=Iu(e),i!==0&&(r=i,t=Ju(e,i))),t===1)throw n=so,Wn(e,0),on(e,r),Ve(e,le()),n;if(t===6)on(e,r);else{if(i=e.current.alternate,!(r&30)&&!nk(i)&&(t=Ks(e,r),t===2&&(o=Iu(e),o!==0&&(r=o,t=Ju(e,o))),t===1))throw n=so,Wn(e,0),on(e,r),Ve(e,le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Mn(e,Ue,Nt);break;case 3:if(on(e,r),(r&130023424)===r&&(t=md+500-le(),10<t)){if(Rs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Au(Mn.bind(null,e,Ue,Nt),t);break}Mn(e,Ue,Nt);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-vt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tk(r/1960))-r,10<r){e.timeoutHandle=Au(Mn.bind(null,e,Ue,Nt),r);break}Mn(e,Ue,Nt);break;case 5:Mn(e,Ue,Nt);break;default:throw Error(x(329))}}}return Ve(e,le()),e.callbackNode===n?wv.bind(null,e):null}function Ju(e,t){var n=Li;return e.current.memoizedState.isDehydrated&&(Wn(e,t).flags|=256),e=Ks(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&Zu(t)),e}function Zu(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function nk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Et(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~pd,t&=~ka,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Rh(e){if(B&6)throw Error(x(327));Dr();var t=Rs(e,0);if(!(t&1))return Ve(e,le()),null;var n=Ks(e,t);if(e.tag!==0&&n===2){var r=Iu(e);r!==0&&(t=r,n=Ju(e,r))}if(n===1)throw n=so,Wn(e,0),on(e,t),Ve(e,le()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,Ue,Nt),Ve(e,le()),null}function gd(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Gr=le()+500,wa&&An())}}function tr(e){ln!==null&&ln.tag===0&&!(B&6)&&Dr();var t=B;B|=1;var n=it.transition,r=V;try{if(it.transition=null,V=1,e)return e()}finally{V=r,it.transition=n,B=t,!(B&6)&&An()}}function vd(){Ke=xr.current,Z(xr)}function Wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,A_(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ls();break;case 3:Vr(),Z(Be),Z(Oe),sd();break;case 5:od(r);break;case 4:Vr();break;case 13:Z(ie);break;case 19:Z(ie);break;case 10:td(r.type._context);break;case 22:case 23:vd()}n=n.return}if(we=e,ce=e=wn(e.current,null),ke=Ke=t,pe=0,so=null,pd=ka=er=0,Ue=Li=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Fn=null}return e}function Ev(e,t){do{var n=ce;try{if(ed(),as.current=Hs,Bs){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bs=!1}if(Zn=0,ge=he=oe=null,Ai=!1,ro=0,hd.current=null,n===null||n.return===null){pe=1,so=t,ce=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=gh(s);if(g!==null){g.flags&=-257,vh(g,s,a,o,t),g.mode&1&&mh(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){mh(o,u,t),yd();break e}l=Error(x(426))}}else if(ne&&a.mode&1){var S=gh(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),vh(S,s,a,o,t),Jc(Wr(l,a));break e}}o=l=Wr(l,a),pe!==4&&(pe=2),Li===null?Li=[o]:Li.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=rv(o,l,t);lh(o,p);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(vn===null||!vn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=iv(o,a,t);lh(o,w);break e}}o=o.return}while(o!==null)}kv(n)}catch(E){t=E,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function Sv(){var e=Vs.current;return Vs.current=Hs,e===null?Hs:e}function yd(){(pe===0||pe===3||pe===2)&&(pe=4),we===null||!(er&268435455)&&!(ka&268435455)||on(we,ke)}function Ks(e,t){var n=B;B|=2;var r=Sv();(we!==e||ke!==t)&&(Nt=null,Wn(e,t));do try{rk();break}catch(i){Ev(e,i)}while(1);if(ed(),B=n,Vs.current=r,ce!==null)throw Error(x(261));return we=null,ke=0,pe}function rk(){for(;ce!==null;)_v(ce)}function ik(){for(;ce!==null&&!RS();)_v(ce)}function _v(e){var t=xv(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?kv(e):ce=t,hd.current=null}function kv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=X_(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(n=Q_(n,t,Ke),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function Mn(e,t,n){var r=V,i=it.transition;try{it.transition=null,V=1,ok(e,t,n,r)}finally{it.transition=i,V=r}return null}function ok(e,t,n,r){do Dr();while(ln!==null);if(B&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(US(e,o),e===we&&(ce=we=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,Cv(Ts,function(){return Dr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=it.transition,it.transition=null;var s=V;V=1;var a=B;B|=4,hd.current=null,Z_(e,n),vv(n,e),x_(Ou),Os=!!Ru,Ou=Ru=null,e.current=n,ek(n),OS(),B=a,V=s,it.transition=o}else e.current=n;if(Vo&&(Vo=!1,ln=e,Gs=i),o=e.pendingLanes,o===0&&(vn=null),NS(n.stateNode),Ve(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ws)throw Ws=!1,e=Qu,Qu=null,e;return Gs&1&&e.tag!==0&&Dr(),o=e.pendingLanes,o&1?e===Xu?Di++:(Di=0,Xu=e):Di=0,An(),null}function Dr(){if(ln!==null){var e=ng(Gs),t=it.transition,n=V;try{if(it.transition=null,V=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Gs=0,B&6)throw Error(x(331));var i=B;for(B|=4,R=e.current;R!==null;){var o=R,s=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Ni(8,c,o)}var f=c.child;if(f!==null)f.return=c,R=f;else for(;R!==null;){c=R;var h=c.sibling,g=c.return;if(pv(c),c===u){R=null;break}if(h!==null){h.return=g,R=h;break}R=g}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}R=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,R=s;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ni(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,R=p;break e}R=o.return}}var d=e.current;for(R=d;R!==null;){s=R;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,R=m;else e:for(s=d;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_a(9,a)}}catch(E){ae(a,a.return,E)}if(a===s){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(B=i,An(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(pa,e)}catch{}r=!0}return r}finally{V=n,it.transition=t}}return!1}function Oh(e,t,n){t=Wr(n,t),t=rv(e,t,1),e=gn(e,t,1),t=De(),e!==null&&(ko(e,1,t),Ve(e,t))}function ae(e,t,n){if(e.tag===3)Oh(e,e,n);else for(;t!==null;){if(t.tag===3){Oh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=Wr(n,e),e=iv(t,e,1),t=gn(t,e,1),e=De(),t!==null&&(ko(t,1,e),Ve(t,e));break}}t=t.return}}function sk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(ke&n)===n&&(pe===4||pe===3&&(ke&130023424)===ke&&500>le()-md?Wn(e,0):pd|=n),Ve(e,t)}function Iv(e,t){t===0&&(e.mode&1?(t=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):t=1);var n=De();e=Vt(e,t),e!==null&&(ko(e,t,n),Ve(e,n))}function ak(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Iv(e,n)}function lk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Iv(e,n)}var xv;xv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,q_(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,ne&&t.flags&1048576&&Tg(t,Ms,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;us(e,t),e=t.pendingProps;var i=Fr(t,Oe.current);Lr(t,n),i=ld(null,t,r,e,i,n);var o=ud();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(o=!0,Ds(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rd(t),i.updater=Ea,t.stateNode=i,i._reactInternals=t,Uu(t,r,e,n),t=Bu(null,t,r,!0,o,n)):(t.tag=0,ne&&o&&Qc(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(us(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ck(r),e=ht(r,e),i){case 0:t=Fu(null,t,r,e,n);break e;case 1:t=Eh(null,t,r,e,n);break e;case 11:t=yh(null,t,r,e,n);break e;case 14:t=wh(null,t,r,ht(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Fu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Eh(e,t,r,i,n);case 3:e:{if(lv(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ag(e,t),zs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wr(Error(x(423)),t),t=Sh(e,t,r,n,i);break e}else if(r!==i){i=Wr(Error(x(424)),t),t=Sh(e,t,r,n,i);break e}else for(Ye=mn(t.stateNode.containerInfo.firstChild),qe=t,ne=!0,mt=null,n=$g(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),r===i){t=Wt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return Mg(t),e===null&&$u(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,bu(r,i)?s=null:o!==null&&bu(r,o)&&(t.flags|=32),av(e,t),Le(e,t,s,n),t.child;case 6:return e===null&&$u(t),null;case 13:return uv(e,t,n);case 4:return id(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hr(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),yh(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,q(js,r._currentValue),r._currentValue=s,o!==null)if(Et(o.value,s)){if(o.children===i.children&&!Be.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=zt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Mu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(x(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Mu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Lr(t,n),i=st(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),wh(e,t,r,i,n);case 15:return ov(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),us(e,t),t.tag=1,He(r)?(e=!0,Ds(t)):e=!1,Lr(t,n),Lg(t,r,i),Uu(t,r,i,n),Bu(null,t,r,!0,e,n);case 19:return cv(e,t,n);case 22:return sv(e,t,n)}throw Error(x(156,t.tag))};function Cv(e,t){return Jm(e,t)}function uk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new uk(e,t,n,r)}function wd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ck(e){if(typeof e=="function")return wd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jc)return 11;if(e===Uc)return 14}return 2}function wn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")wd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case mr:return Gn(n.children,i,o,t);case Mc:s=8,i|=8;break;case uu:return e=rt(12,n,t,i|2),e.elementType=uu,e.lanes=o,e;case cu:return e=rt(13,n,t,i),e.elementType=cu,e.lanes=o,e;case du:return e=rt(19,n,t,i),e.elementType=du,e.lanes=o,e;case Dm:return Ia(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nm:s=10;break e;case Lm:s=9;break e;case jc:s=11;break e;case Uc:s=14;break e;case Jt:s=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=rt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Gn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Ia(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Dm,e.lanes=n,e.stateNode={isHidden:!1},e}function Ul(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function zl(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ed(e,t,n,r,i,o,s,a,l){return e=new dk(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=rt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(o),e}function fk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pv(e){if(!e)return xn;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(He(n))return Cg(e,n,t)}return t}function Tv(e,t,n,r,i,o,s,a,l){return e=Ed(n,r,!0,e,i,o,s,a,l),e.context=Pv(null),n=e.current,r=De(),i=yn(n),o=zt(r,i),o.callback=t??null,gn(n,o,i),e.current.lanes=i,ko(e,i,r),Ve(e,r),e}function xa(e,t,n,r){var i=t.current,o=De(),s=yn(i);return n=Pv(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(i,t,s),e!==null&&(yt(e,i,s,o),ss(e,i,s)),s}function Ys(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sd(e,t){bh(e,t),(e=e.alternate)&&bh(e,t)}function hk(){return null}var Rv=typeof reportError=="function"?reportError:function(e){console.error(e)};function _d(e){this._internalRoot=e}Ca.prototype.render=_d.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));xa(e,t,null,null)};Ca.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tr(function(){xa(null,e,null,null)}),t[Ht]=null}};function Ca(e){this._internalRoot=e}Ca.prototype.unstable_scheduleHydration=function(e){if(e){var t=og();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&ag(e)}};function kd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ah(){}function pk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ys(s);o.call(u)}}var s=Tv(t,r,e,0,null,!1,!1,"",Ah);return e._reactRootContainer=s,e[Ht]=s.current,Ji(e.nodeType===8?e.parentNode:e),tr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ys(l);a.call(u)}}var l=Ed(e,0,!1,null,null,!1,!1,"",Ah);return e._reactRootContainer=l,e[Ht]=l.current,Ji(e.nodeType===8?e.parentNode:e),tr(function(){xa(t,l,n,r)}),l}function Ta(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ys(s);a.call(l)}}xa(t,s,e,i)}else s=pk(n,t,e,i,r);return Ys(s)}rg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_i(t.pendingLanes);n!==0&&(Bc(t,n|1),Ve(t,le()),!(B&6)&&(Gr=le()+500,An()))}break;case 13:tr(function(){var r=Vt(e,1);if(r!==null){var i=De();yt(r,e,1,i)}}),Sd(e,1)}};Hc=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=De();yt(t,e,134217728,n)}Sd(e,134217728)}};ig=function(e){if(e.tag===13){var t=yn(e),n=Vt(e,t);if(n!==null){var r=De();yt(n,e,t,r)}Sd(e,t)}};og=function(){return V};sg=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Su=function(e,t,n){switch(t){case"input":if(pu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ya(r);if(!i)throw Error(x(90));Mm(r),pu(r,i)}}}break;case"textarea":Um(e,n);break;case"select":t=n.value,t!=null&&Or(e,!!n.multiple,t,!1)}};Gm=gd;Km=tr;var mk={usingClientEntryPoint:!1,Events:[xo,wr,ya,Vm,Wm,gd]},vi={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gk={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qm(e),e===null?null:e.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance||hk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{pa=Wo.inject(gk),Ot=Wo}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mk;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(t))throw Error(x(200));return fk(e,t,null,n)};Je.createRoot=function(e,t){if(!kd(e))throw Error(x(299));var n=!1,r="",i=Rv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ed(e,1,!1,null,null,n,!1,r,i),e[Ht]=t.current,Ji(e.nodeType===8?e.parentNode:e),new _d(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Qm(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return tr(e)};Je.hydrate=function(e,t,n){if(!Pa(t))throw Error(x(200));return Ta(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!kd(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Rv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Tv(t,null,e,1,n??null,i,!1,o,s),e[Ht]=t.current,Ji(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ca(t)};Je.render=function(e,t,n){if(!Pa(t))throw Error(x(200));return Ta(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!Pa(e))throw Error(x(40));return e._reactRootContainer?(tr(function(){Ta(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};Je.unstable_batchedUpdates=gd;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pa(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Ta(e,t,n,!1,r)};Je.version="18.2.0-next-9e3b772b8-20220608";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(e){console.error(e)}}Ov(),Tm.exports=Je;var bv=Tm.exports;function vk(e){e()}let Av=vk;const yk=e=>Av=e,wk=()=>Av,Nh=Symbol.for("react-redux-context"),Lh=typeof globalThis<"u"?globalThis:{};function Ek(){var e;if(!_.createContext)return{};const t=(e=Lh[Nh])!=null?e:Lh[Nh]=new Map;let n=t.get(_.createContext);return n||(n=_.createContext(null),t.set(_.createContext,n)),n}const Cn=Ek();function Id(e=Cn){return function(){return _.useContext(e)}}const Nv=Id(),Sk=()=>{throw new Error("uSES not initialized!")};let Lv=Sk;const _k=e=>{Lv=e},kk=(e,t)=>e===t;function Ik(e=Cn){const t=e===Cn?Nv:Id(e);return function(r,i={}){const{equalityFn:o=kk,stabilityCheck:s=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:f,noopCheck:h}=t();_.useRef(!0);const g=_.useCallback({[r.name](y){return r(y)}}[r.name],[r,f,s]),v=Lv(u.addNestedSub,l.getState,c||l.getState,g,o);return _.useDebugValue(v),v}}const xk=Ik();var Dv={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee=typeof Symbol=="function"&&Symbol.for,xd=Ee?Symbol.for("react.element"):60103,Cd=Ee?Symbol.for("react.portal"):60106,Ra=Ee?Symbol.for("react.fragment"):60107,Oa=Ee?Symbol.for("react.strict_mode"):60108,ba=Ee?Symbol.for("react.profiler"):60114,Aa=Ee?Symbol.for("react.provider"):60109,Na=Ee?Symbol.for("react.context"):60110,Pd=Ee?Symbol.for("react.async_mode"):60111,La=Ee?Symbol.for("react.concurrent_mode"):60111,Da=Ee?Symbol.for("react.forward_ref"):60112,$a=Ee?Symbol.for("react.suspense"):60113,Ck=Ee?Symbol.for("react.suspense_list"):60120,Ma=Ee?Symbol.for("react.memo"):60115,ja=Ee?Symbol.for("react.lazy"):60116,Pk=Ee?Symbol.for("react.block"):60121,Tk=Ee?Symbol.for("react.fundamental"):60117,Rk=Ee?Symbol.for("react.responder"):60118,Ok=Ee?Symbol.for("react.scope"):60119;function et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xd:switch(e=e.type,e){case Pd:case La:case Ra:case ba:case Oa:case $a:return e;default:switch(e=e&&e.$$typeof,e){case Na:case Da:case ja:case Ma:case Aa:return e;default:return t}}case Cd:return t}}}function $v(e){return et(e)===La}W.AsyncMode=Pd;W.ConcurrentMode=La;W.ContextConsumer=Na;W.ContextProvider=Aa;W.Element=xd;W.ForwardRef=Da;W.Fragment=Ra;W.Lazy=ja;W.Memo=Ma;W.Portal=Cd;W.Profiler=ba;W.StrictMode=Oa;W.Suspense=$a;W.isAsyncMode=function(e){return $v(e)||et(e)===Pd};W.isConcurrentMode=$v;W.isContextConsumer=function(e){return et(e)===Na};W.isContextProvider=function(e){return et(e)===Aa};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xd};W.isForwardRef=function(e){return et(e)===Da};W.isFragment=function(e){return et(e)===Ra};W.isLazy=function(e){return et(e)===ja};W.isMemo=function(e){return et(e)===Ma};W.isPortal=function(e){return et(e)===Cd};W.isProfiler=function(e){return et(e)===ba};W.isStrictMode=function(e){return et(e)===Oa};W.isSuspense=function(e){return et(e)===$a};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ra||e===La||e===ba||e===Oa||e===$a||e===Ck||typeof e=="object"&&e!==null&&(e.$$typeof===ja||e.$$typeof===Ma||e.$$typeof===Aa||e.$$typeof===Na||e.$$typeof===Da||e.$$typeof===Tk||e.$$typeof===Rk||e.$$typeof===Ok||e.$$typeof===Pk)};W.typeOf=et;Dv.exports=W;var bk=Dv.exports,Mv=bk,Ak={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jv={};jv[Mv.ForwardRef]=Ak;jv[Mv.Memo]=Nk;var G={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=Symbol.for("react.element"),Rd=Symbol.for("react.portal"),Ua=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Fa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ha=Symbol.for("react.context"),Lk=Symbol.for("react.server_context"),Va=Symbol.for("react.forward_ref"),Wa=Symbol.for("react.suspense"),Ga=Symbol.for("react.suspense_list"),Ka=Symbol.for("react.memo"),Ya=Symbol.for("react.lazy"),Dk=Symbol.for("react.offscreen"),Uv;Uv=Symbol.for("react.module.reference");function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Td:switch(e=e.type,e){case Ua:case Fa:case za:case Wa:case Ga:return e;default:switch(e=e&&e.$$typeof,e){case Lk:case Ha:case Va:case Ya:case Ka:case Ba:return e;default:return t}}case Rd:return t}}}G.ContextConsumer=Ha;G.ContextProvider=Ba;G.Element=Td;G.ForwardRef=Va;G.Fragment=Ua;G.Lazy=Ya;G.Memo=Ka;G.Portal=Rd;G.Profiler=Fa;G.StrictMode=za;G.Suspense=Wa;G.SuspenseList=Ga;G.isAsyncMode=function(){return!1};G.isConcurrentMode=function(){return!1};G.isContextConsumer=function(e){return ut(e)===Ha};G.isContextProvider=function(e){return ut(e)===Ba};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Td};G.isForwardRef=function(e){return ut(e)===Va};G.isFragment=function(e){return ut(e)===Ua};G.isLazy=function(e){return ut(e)===Ya};G.isMemo=function(e){return ut(e)===Ka};G.isPortal=function(e){return ut(e)===Rd};G.isProfiler=function(e){return ut(e)===Fa};G.isStrictMode=function(e){return ut(e)===za};G.isSuspense=function(e){return ut(e)===Wa};G.isSuspenseList=function(e){return ut(e)===Ga};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ua||e===Fa||e===za||e===Wa||e===Ga||e===Dk||typeof e=="object"&&e!==null&&(e.$$typeof===Ya||e.$$typeof===Ka||e.$$typeof===Ba||e.$$typeof===Ha||e.$$typeof===Va||e.$$typeof===Uv||e.getModuleId!==void 0)};G.typeOf=ut;function $k(){const e=wk();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Dh={notify(){},get:()=>[]};function Mk(e,t){let n,r=Dh,i=0,o=!1;function s(y){c();const S=r.subscribe(y);let p=!1;return()=>{p||(p=!0,S(),f())}}function a(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=$k())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Dh)}function h(){o||(o=!0,c())}function g(){o&&(o=!1,f())}const v={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:h,tryUnsubscribe:g,getListeners:()=>r};return v}const jk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uk=jk?_.useLayoutEffect:_.useEffect;function zk({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const s=_.useMemo(()=>{const u=Mk(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),a=_.useMemo(()=>e.getState(),[e]);Uk(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const l=t||Cn;return _.createElement(l.Provider,{value:s},n)}function zv(e=Cn){const t=e===Cn?Nv:Id(e);return function(){const{store:r}=t();return r}}const Fk=zv();function Bk(e=Cn){const t=e===Cn?Fk:zv(e);return function(){return t().dispatch}}const Hk=Bk();_k(hS.useSyncExternalStoreWithSelector);yk(bv.unstable_batchedUpdates);const Od=Hk,Fv=xk;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ao.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const $h="popstate";function Vk(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return ec("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qs(i)}return Gk(t,n,null,e)}function de(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wk(){return Math.random().toString(36).substr(2,8)}function Mh(e,t){return{usr:e.state,key:e.key,idx:t}}function ec(e,t,n,r){return n===void 0&&(n=null),ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ni(t):t,{state:n,key:t&&t.key||r||Wk()})}function qs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ni(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Gk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=un.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(ao({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=un.Pop;let S=c(),p=S==null?null:S-u;u=S,l&&l({action:a,location:y.location,delta:p})}function h(S,p){a=un.Push;let d=ec(y.location,S,p);n&&n(d,S),u=c()+1;let m=Mh(d,u),w=y.createHref(d);try{s.pushState(m,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(w)}o&&l&&l({action:a,location:y.location,delta:1})}function g(S,p){a=un.Replace;let d=ec(y.location,S,p);n&&n(d,S),u=c();let m=Mh(d,u),w=y.createHref(d);s.replaceState(m,"",w),o&&l&&l({action:a,location:y.location,delta:0})}function v(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof S=="string"?S:qs(S);return de(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let y={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener($h,f),l=S,()=>{i.removeEventListener($h,f),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let p=v(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(S){return s.go(S)}};return y}var jh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jh||(jh={}));function Kk(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ni(t):t,i=Ad(r.pathname||"/",n);if(i==null)return null;let o=Bv(e);Yk(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=rI(o[a],sI(i));return s}function Bv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(de(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=En([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(de(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bv(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:tI(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Hv(o.path))i(o,s,l)}),t}function Hv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Hv(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Yk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nI(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qk=/^:\w+$/,Qk=3,Xk=2,Jk=1,Zk=10,eI=-2,Uh=e=>e==="*";function tI(e,t){let n=e.split("/"),r=n.length;return n.some(Uh)&&(r+=eI),t&&(r+=Xk),n.filter(i=>!Uh(i)).reduce((i,o)=>i+(qk.test(o)?Qk:o===""?Jk:Zk),r)}function nI(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function rI(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=iI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:En([i,c.pathname]),pathnameBase:cI(En([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=En([i,c.pathnameBase]))}return o}function iI(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=oI(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=aI(a[f]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:e}}function oI(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function sI(e){try{return decodeURI(e)}catch(t){return bd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function aI(e,t){try{return decodeURIComponent(e)}catch(n){return bd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ad(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lI(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ni(e):e;return{pathname:n?n.startsWith("/")?n:uI(n,t):t,search:dI(r),hash:fI(i)}}function uI(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Wv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ni(e):(i=ao({},e),de(!i.pathname||!i.pathname.includes("?"),Fl("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),Fl("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),Fl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=t.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=lI(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const En=e=>e.join("/").replace(/\/\/+/g,"/"),cI=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dI=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fI=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hI(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gv=["post","put","patch","delete"];new Set(Gv);const pI=["get",...Gv];new Set(pI);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qs(){return Qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qs.apply(this,arguments)}const Nd=_.createContext(null),mI=_.createContext(null),ri=_.createContext(null),qa=_.createContext(null),dr=_.createContext({outlet:null,matches:[],isDataRoute:!1}),Kv=_.createContext(null);function gI(e,t){let{relative:n}=t===void 0?{}:t;Po()||de(!1);let{basename:r,navigator:i}=_.useContext(ri),{hash:o,pathname:s,search:a}=qv(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:En([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Po(){return _.useContext(qa)!=null}function Qa(){return Po()||de(!1),_.useContext(qa).location}function Yv(e){_.useContext(ri).static||_.useLayoutEffect(e)}function ii(){let{isDataRoute:e}=_.useContext(dr);return e?RI():vI()}function vI(){Po()||de(!1);let e=_.useContext(Nd),{basename:t,navigator:n}=_.useContext(ri),{matches:r}=_.useContext(dr),{pathname:i}=Qa(),o=JSON.stringify(Vv(r).map(l=>l.pathnameBase)),s=_.useRef(!1);return Yv(()=>{s.current=!0}),_.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=Wv(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:En([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}function qv(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=_.useContext(dr),{pathname:i}=Qa(),o=JSON.stringify(Vv(r).map(s=>s.pathnameBase));return _.useMemo(()=>Wv(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function yI(e,t){return wI(e,t)}function wI(e,t,n){Po()||de(!1);let{navigator:r}=_.useContext(ri),{matches:i}=_.useContext(dr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Qa(),u;if(t){var c;let y=typeof t=="string"?ni(t):t;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||de(!1),u=y}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",g=Kk(e,{pathname:h}),v=II(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:En([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:En([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&v?_.createElement(qa.Provider,{value:{location:Qs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:un.Pop}},v):v}function EI(){let e=TI(),t=hI(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,o)}const SI=_.createElement(EI,null);class _I extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_.createElement(dr.Provider,{value:this.props.routeContext},_.createElement(Kv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kI(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(Nd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(dr.Provider,{value:t},r)}function II(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||de(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||SI);let h=t.concat(o.slice(0,u+1)),g=()=>{let v;return c?v=f:l.route.Component?v=_.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,_.createElement(kI,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?_.createElement(_I,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var Qv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qv||{}),Xs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Xs||{});function xI(e){let t=_.useContext(Nd);return t||de(!1),t}function CI(e){let t=_.useContext(mI);return t||de(!1),t}function PI(e){let t=_.useContext(dr);return t||de(!1),t}function Xv(e){let t=PI(),n=t.matches[t.matches.length-1];return n.route.id||de(!1),n.route.id}function TI(){var e;let t=_.useContext(Kv),n=CI(Xs.UseRouteError),r=Xv(Xs.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function RI(){let{router:e}=xI(Qv.UseNavigateStable),t=Xv(Xs.UseNavigateStable),n=_.useRef(!1);return Yv(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Qs({fromRouteId:t},o)))},[e,t])}function Jv(e){de(!1)}function OI(e){let{basename:t="/",children:n=null,location:r,navigationType:i=un.Pop,navigator:o,static:s=!1}=e;Po()&&de(!1);let a=t.replace(/^\/*/,"/"),l=_.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=ni(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:g="default"}=r,v=_.useMemo(()=>{let y=Ad(u,a);return y==null?null:{location:{pathname:y,search:c,hash:f,state:h,key:g},navigationType:i}},[a,u,c,f,h,g,i]);return v==null?null:_.createElement(ri.Provider,{value:l},_.createElement(qa.Provider,{children:n,value:v}))}function bI(e){let{children:t,location:n}=e;return yI(tc(t),n)}new Promise(()=>{});function tc(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,tc(r.props.children,o));return}r.type!==Jv&&de(!1),!r.props.index||!r.props.children||de(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=tc(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nc(){return nc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nc.apply(this,arguments)}function AI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function NI(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function LI(e,t){return e.button===0&&(!t||t==="_self")&&!NI(e)}const DI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],$I="startTransition",zh=e0[$I];function MI(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=Vk({window:i,v5Compat:!0}));let s=o.current,[a,l]=_.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=_.useCallback(f=>{u&&zh?zh(()=>l(f)):l(f)},[l,u]);return _.useLayoutEffect(()=>s.listen(c),[s,c]),_.createElement(OI,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}const jI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nr=_.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=t,f=AI(t,DI),{basename:h}=_.useContext(ri),g,v=!1;if(typeof u=="string"&&UI.test(u)&&(g=u,jI))try{let d=new URL(window.location.href),m=u.startsWith("//")?new URL(d.protocol+u):new URL(u),w=Ad(m.pathname,h);m.origin===d.origin&&w!=null?u=w+m.search+m.hash:v=!0}catch{}let y=gI(u,{relative:i}),S=zI(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function p(d){r&&r(d),d.defaultPrevented||S(d)}return _.createElement("a",nc({},f,{href:g||y,onClick:v||o?r:p,ref:n,target:l}))});var Fh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Fh||(Fh={}));var Bh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bh||(Bh={}));function zI(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=ii(),l=Qa(),u=qv(e,{relative:s});return _.useCallback(c=>{if(LI(c,n)){c.preventDefault();let f=r!==void 0?r:qs(l)===qs(u);a(e,{replace:f,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}const FI=()=>{const{isAuthorized:e}=Fv(n=>n.user),t=ii();return _.useEffect(()=>{e||(alert("Not Authorized"),t(M.HOME))}),C.jsxs(C.Fragment,{children:[C.jsx("div",{children:"Feed Page"}),C.jsx(nr,{to:M.HOME,children:"Home"}),C.jsx(nr,{to:M.PROFILE,children:"Profile"})]})},Ld="/assets/twitter-c73f725f.svg",BI="/assets/Roboto-Black-5ace0d08.ttf",HI="/assets/Roboto-Bold-ec685a46.ttf",VI="/assets/Roboto-Light-c576c506.ttf",WI="/assets/Roboto-Medium-9d0d55a3.ttf",GI="/assets/Roboto-Regular-4e147ab6.ttf";var X="-ms-",$i="-moz-",H="-webkit-",Zv="comm",Xa="rule",Dd="decl",KI="@import",ey="@keyframes",YI="@layer",qI=Math.abs,$d=String.fromCharCode,rc=Object.assign;function QI(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function ty(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function hs(e,t){return e.indexOf(t)}function ve(e,t){return e.charCodeAt(t)|0}function Kr(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function ny(e){return e.length}function Ii(e,t){return t.push(e),e}function XI(e,t){return e.map(t).join("")}function Hh(e,t){return e.filter(function(n){return!Lt(n,t)})}var Ja=1,Yr=1,ry=0,lt=0,ue=0,oi="";function Za(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ja,column:Yr,length:s,return:"",siblings:a}}function Xt(e,t){return rc(Za("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function hr(e){for(;e.root;)e=Xt(e.root,{children:[e]});Ii(e,e.siblings)}function JI(){return ue}function ZI(){return ue=lt>0?ve(oi,--lt):0,Yr--,ue===10&&(Yr=1,Ja--),ue}function wt(){return ue=lt<ry?ve(oi,lt++):0,Yr++,ue===10&&(Yr=1,Ja++),ue}function Kn(){return ve(oi,lt)}function ps(){return lt}function el(e,t){return Kr(oi,e,t)}function ic(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ex(e){return Ja=Yr=1,ry=xt(oi=e),lt=0,[]}function tx(e){return oi="",e}function Bl(e){return ty(el(lt-1,oc(e===91?e+2:e===40?e+1:e)))}function nx(e){for(;(ue=Kn())&&ue<33;)wt();return ic(e)>2||ic(ue)>3?"":" "}function rx(e,t){for(;--t&&wt()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return el(e,ps()+(t<6&&Kn()==32&&wt()==32))}function oc(e){for(;wt();)switch(ue){case e:return lt;case 34:case 39:e!==34&&e!==39&&oc(ue);break;case 40:e===41&&oc(e);break;case 92:wt();break}return lt}function ix(e,t){for(;wt()&&e+ue!==47+10;)if(e+ue===42+42&&Kn()===47)break;return"/*"+el(t,lt-1)+"*"+$d(e===47?e:wt())}function ox(e){for(;!ic(Kn());)wt();return el(e,lt)}function sx(e){return tx(ms("",null,null,null,[""],e=ex(e),0,[0],e))}function ms(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,h=0,g=0,v=0,y=1,S=1,p=1,d=0,m="",w=i,E=o,I=r,k=m;S;)switch(v=d,d=wt()){case 40:if(v!=108&&ve(k,f-1)==58){hs(k+=$(Bl(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:k+=Bl(d);break;case 9:case 10:case 13:case 32:k+=nx(v);break;case 92:k+=rx(ps()-1,7);continue;case 47:switch(Kn()){case 42:case 47:Ii(ax(ix(wt(),ps()),t,n,l),l);break;default:k+="/"}break;case 123*y:a[u++]=xt(k)*p;case 125*y:case 59:case 0:switch(d){case 0:case 125:S=0;case 59+c:p==-1&&(k=$(k,/\f/g,"")),g>0&&xt(k)-f&&Ii(g>32?Wh(k+";",r,n,f-1,l):Wh($(k," ","")+";",r,n,f-2,l),l);break;case 59:k+=";";default:if(Ii(I=Vh(k,t,n,u,c,i,a,m,w=[],E=[],f,o),o),d===123)if(c===0)ms(k,t,I,I,w,o,f,a,E);else switch(h===99&&ve(k,3)===110?100:h){case 100:case 108:case 109:case 115:ms(e,I,I,r&&Ii(Vh(e,I,I,0,0,i,a,m,i,w=[],f,E),E),i,E,f,a,r?w:E);break;default:ms(k,I,I,I,[""],E,0,a,E)}}u=c=g=0,y=p=1,m=k="",f=s;break;case 58:f=1+xt(k),g=v;default:if(y<1){if(d==123)--y;else if(d==125&&y++==0&&ZI()==125)continue}switch(k+=$d(d),d*y){case 38:p=c>0?1:(k+="\f",-1);break;case 44:a[u++]=(xt(k)-1)*p,p=1;break;case 64:Kn()===45&&(k+=Bl(wt())),h=Kn(),c=f=xt(m=k+=ox(ps())),d++;break;case 45:v===45&&xt(k)==2&&(y=0)}}return o}function Vh(e,t,n,r,i,o,s,a,l,u,c,f){for(var h=i-1,g=i===0?o:[""],v=ny(g),y=0,S=0,p=0;y<r;++y)for(var d=0,m=Kr(e,h+1,h=qI(S=s[y])),w=e;d<v;++d)(w=ty(S>0?g[d]+" "+m:$(m,/&\f/g,g[d])))&&(l[p++]=w);return Za(e,t,n,i===0?Xa:a,l,u,c,f)}function ax(e,t,n,r){return Za(e,t,n,Zv,$d(JI()),Kr(e,2,-2),0,r)}function Wh(e,t,n,r,i){return Za(e,t,n,Dd,Kr(e,0,r),Kr(e,r+1,-1),r,i)}function iy(e,t,n){switch(QI(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return $i+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+$i+e+X+e+e;case 5936:switch(ve(e,t+11)){case 114:return H+e+X+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+X+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+X+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+X+e+e;case 6165:return H+e+X+"flex-"+e+e;case 5187:return H+e+$(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return H+e+X+"flex-item-"+$(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":X+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return H+e+X+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+X+$(e,"shrink","negative")+e;case 5292:return H+e+X+$(e,"basis","preferred-size")+e;case 6060:return H+"box-"+$(e,"-grow","")+H+e+X+$(e,"grow","positive")+e;case 4554:return H+$(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return X+"grid-column-align"+Kr(e,t)+e;break;case 2592:case 3360:return X+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Lt(r.props,/grid-\w+-end/)})?~hs(e+(n=n[t].value),"span")?e:X+$(e,"-start","")+e+X+"grid-row-span:"+(~hs(n,"span")?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":X+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:X+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+$i+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~hs(e,"stretch")?iy($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return X+i+":"+o+u+(s?X+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(ve(e,t+6)===121)return $(e,":",":"+H)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(ve(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+X+"$2box$3")+e;case 100:return $(e,":",":"+X)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function Js(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function lx(e,t,n,r){switch(e.type){case YI:if(e.children.length)break;case KI:case Dd:return e.return=e.return||e.value;case Zv:return"";case ey:return e.return=e.value+"{"+Js(e.children,r)+"}";case Xa:if(!xt(e.value=e.props.join(",")))return""}return xt(n=Js(e.children,r))?e.return=e.value+"{"+n+"}":""}function ux(e){var t=ny(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function cx(e){return function(t){t.root||(t=t.return)&&e(t)}}function dx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Dd:e.return=iy(e.value,e.length,n);return;case ey:return Js([Xt(e,{value:$(e.value,"@","@"+H)})],r);case Xa:if(e.length)return XI(n=e.props,function(i){switch(Lt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hr(Xt(e,{props:[$(i,/:(read-\w+)/,":"+$i+"$1")]})),hr(Xt(e,{props:[i]})),rc(e,{props:Hh(n,r)});break;case"::placeholder":hr(Xt(e,{props:[$(i,/:(plac\w+)/,":"+H+"input-$1")]})),hr(Xt(e,{props:[$(i,/:(plac\w+)/,":"+$i+"$1")]})),hr(Xt(e,{props:[$(i,/:(plac\w+)/,X+"input-$1")]})),hr(Xt(e,{props:[i]})),rc(e,{props:Hh(n,r)});break}return""})}}var fx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Md=typeof window<"u"&&"HTMLElement"in window,hx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),px={},tl=Object.freeze([]),Qr=Object.freeze({});function oy(e,t,n){return n===void 0&&(n=Qr),e.theme!==n.theme&&e.theme||t||n.theme}var sy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gx=/(^-|-$)/g;function Gh(e){return e.replace(mx,"-").replace(gx,"")}var vx=/(a)(d)/gi,Kh=function(e){return String.fromCharCode(e+(e>25?39:97))};function sc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kh(t%52)+n;return(Kh(t%52)+n).replace(vx,"$1-$2")}var Hl,Cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ay=function(e){return Cr(5381,e)};function ly(e){return sc(ay(e)>>>0)}function yx(e){return e.displayName||e.name||"Component"}function Vl(e){return typeof e=="string"&&!0}var uy=typeof Symbol=="function"&&Symbol.for,cy=uy?Symbol.for("react.memo"):60115,wx=uy?Symbol.for("react.forward_ref"):60112,Ex={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_x=((Hl={})[wx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hl[cy]=dy,Hl);function Yh(e){return("type"in(t=e)&&t.type.$$typeof)===cy?dy:"$$typeof"in e?_x[e.$$typeof]:Ex;var t}var kx=Object.defineProperty,Ix=Object.getOwnPropertyNames,qh=Object.getOwnPropertySymbols,xx=Object.getOwnPropertyDescriptor,Cx=Object.getPrototypeOf,Qh=Object.prototype;function fy(e,t,n){if(typeof t!="string"){if(Qh){var r=Cx(t);r&&r!==Qh&&fy(e,r,n)}var i=Ix(t);qh&&(i=i.concat(qh(t)));for(var o=Yh(e),s=Yh(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Sx||n&&n[l]||s&&l in s||o&&l in o)){var u=xx(t,l);try{kx(e,l,u)}catch{}}}}return e}function rr(e){return typeof e=="function"}function jd(e){return typeof e=="object"&&"styledComponentId"in e}function Hn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ac(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function lo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function lc(e,t,n){if(n===void 0&&(n=!1),!n&&!lo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=lc(e[r],t[r]);else if(lo(t))for(var r in t)e[r]=lc(e[r],t[r]);return e}function Ud(e,t){Object.defineProperty(e,"toString",{value:t})}function ir(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Px=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ir(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),gs=new Map,Zs=new Map,Wl=1,Go=function(e){if(gs.has(e))return gs.get(e);for(;Zs.has(Wl);)Wl++;var t=Wl++;return gs.set(e,t),Zs.set(t,e),t},Tx=function(e,t){gs.set(e,t),Zs.set(t,e)},Rx="style[".concat(qr,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),Ox=new RegExp("^".concat(qr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bx=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Ax=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(Ox);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Tx(c,u),bx(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Nx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var hy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(qr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(qr,"active"),r.setAttribute("data-styled-version","6.0.8");var s=Nx();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Lx=function(){function e(t){this.element=hy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw ir(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Dx=function(){function e(t){this.element=hy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),$x=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xh=Md,Mx={isServer:!Md,useCSSOMInjection:!hx},ea=function(){function e(t,n,r){t===void 0&&(t=Qr),n===void 0&&(n={});var i=this;this.options=ye(ye({},Mx),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Md&&Xh&&(Xh=!1,function(o){for(var s=document.querySelectorAll(Rx),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(qr)!=="active"&&(Ax(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ud(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var h=function(p){return Zs.get(p)}(f);if(h===void 0)return"continue";var g=o.names.get(h),v=s.getGroup(f);if(g===void 0||v.length===0)return"continue";var y="".concat(qr,".g").concat(f,'[id="').concat(h,'"]'),S="";g!==void 0&&g.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),l+="".concat(v).concat(y,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Go(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ye(ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new $x(i):r?new Lx(i):new Dx(i)}(this.options),new Px(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Go(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Go(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Go(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jx=/&/g,Ux=/^\s*\/\/.*$/gm;function py(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=py(n.children,t)),n})}function zx(e){var t,n,r,i=e===void 0?Qr:e,o=i.options,s=o===void 0?Qr:o,a=i.plugins,l=a===void 0?tl:a,u=function(h,g,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===Xa&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(jx,n).replace(r,u))}),s.prefix&&c.push(dx),c.push(lx);var f=function(h,g,v,y){g===void 0&&(g=""),v===void 0&&(v=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(Ux,""),p=sx(v||g?"".concat(v," ").concat(g," { ").concat(S," }"):S);s.namespace&&(p=py(p,s.namespace));var d=[];return Js(p,ux(c.concat(cx(function(m){return d.push(m)})))),d};return f.hash=l.length?l.reduce(function(h,g){return g.name||ir(15),Cr(h,g.name)},5381).toString():"",f}var Fx=new ea,uc=zx(),my=ze.createContext({shouldForwardProp:void 0,styleSheet:Fx,stylis:uc});my.Consumer;ze.createContext(void 0);function cc(){return _.useContext(my)}var Bx=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=uc);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ud(this,function(){throw ir(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=uc),this.name+t.hash},e}(),Hx=function(e){return e>="A"&&e<="Z"};function Jh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Hx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var gy=function(e){return e==null||e===!1||e===""},vy=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!gy(o)&&(Array.isArray(o)&&o.isCss||rr(o)?r.push("".concat(Jh(i),":"),o,";"):lo(o)?r.push.apply(r,zi(zi(["".concat(i," {")],vy(o),!1),["}"],!1)):r.push("".concat(Jh(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in fx||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Sn(e,t,n,r){if(gy(e))return[];if(jd(e))return[".".concat(e.styledComponentId)];if(rr(e)){if(!rr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Sn(i,t,n,r)}var o;return e instanceof Bx?n?(e.inject(n,r),[e.getName(r)]):[e]:lo(e)?vy(e):Array.isArray(e)?Array.prototype.concat.apply(tl,e.map(function(s){return Sn(s,t,n,r)})):[e.toString()]}function yy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(rr(n)&&!jd(n))return!1}return!0}var Vx=ay("6.0.8"),Wx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&yy(t),this.componentId=n,this.baseHash=Cr(Vx,n),this.baseStyle=r,ea.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Hn(i,this.staticRulesId);else{var o=ac(Sn(this.rules,t,n,r)),s=sc(Cr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Hn(i,s),this.staticRulesId=s}else{for(var l=Cr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var h=ac(Sn(f,t,n,r));l=Cr(l,h+c),u+=h}}if(u){var g=sc(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Hn(i,g)}}return i},e}(),uo=ze.createContext(void 0);uo.Consumer;function Gx(e){var t=ze.useContext(uo),n=_.useMemo(function(){return function(r,i){if(!r)throw ir(14);if(rr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw ir(8);return i?ye(ye({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ze.createElement(uo.Provider,{value:n},e.children):null}var Gl={};function Kx(e,t,n){var r=jd(e),i=e,o=!Vl(e),s=t.attrs,a=s===void 0?tl:s,l=t.componentId,u=l===void 0?function(m,w){var E=typeof m!="string"?"sc":Gh(m);Gl[E]=(Gl[E]||0)+1;var I="".concat(E,"-").concat(ly("6.0.8"+E+Gl[E]));return w?"".concat(w,"-").concat(I):I}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(m){return Vl(m)?"styled.".concat(m):"Styled(".concat(yx(m),")")}(e);var f=t.displayName&&t.componentId?"".concat(Gh(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(m,w){return v(m,w)&&y(m,w)}}else g=v}var S=new Wx(n,f,r?i.componentStyle:void 0);function p(m,w){return function(E,I,k){var T=E.attrs,j=E.componentStyle,O=E.defaultProps,U=E.foldedComponentIds,re=E.styledComponentId,fe=E.target,be=ze.useContext(uo),Se=cc(),We=E.shouldForwardProp||Se.shouldForwardProp,me=function(ct,Ae,St){for(var Ne,je=ye(ye({},Ae),{className:void 0,theme:St}),ai=0;ai<ct.length;ai+=1){var Nn=rr(Ne=ct[ai])?Ne(je):Ne;for(var _t in Nn)je[_t]=_t==="className"?Hn(je[_t],Nn[_t]):_t==="style"?ye(ye({},je[_t]),Nn[_t]):Nn[_t]}return Ae.className&&(je.className=Hn(je.className,Ae.className)),je}(T,I,oy(I,be,O)||Qr),P=me.as||fe,A={};for(var N in me)me[N]===void 0||N[0]==="$"||N==="as"||N==="theme"||(N==="forwardedAs"?A.as=me.forwardedAs:We&&!We(N,P)||(A[N]=me[N]));var Y=function(ct,Ae){var St=cc(),Ne=ct.generateAndInjectStyles(Ae,St.styleSheet,St.stylis);return Ne}(j,me),ee=Hn(U,re);return Y&&(ee+=" "+Y),me.className&&(ee+=" "+me.className),A[Vl(P)&&!sy.has(P)?"class":"className"]=ee,A.ref=k,_.createElement(P,A)}(d,m,w)}var d=ze.forwardRef(p);return d.attrs=h,d.componentStyle=S,d.shouldForwardProp=g,d.foldedComponentIds=r?Hn(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=f,d.target=r?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?function(w){for(var E=[],I=1;I<arguments.length;I++)E[I-1]=arguments[I];for(var k=0,T=E;k<T.length;k++)lc(w,T[k],!0);return w}({},i.defaultProps,m):m}}),Ud(d,function(){return".".concat(d.styledComponentId)}),o&&fy(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function Zh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ep=function(e){return Object.assign(e,{isCss:!0})};function co(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(rr(e)||lo(e)){var r=e;return ep(Sn(Zh(tl,zi([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Sn(i):ep(Sn(Zh(i,t)))}function dc(e,t,n){if(n===void 0&&(n=Qr),!t)throw ir(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,co.apply(void 0,zi([i],o,!1)))};return r.attrs=function(i){return dc(e,t,ye(ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return dc(e,t,ye(ye({},n),i))},r}var wy=function(e){return dc(Kx,e)},b=wy;sy.forEach(function(e){b[e]=wy(e)});var Yx=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=yy(t),ea.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ac(Sn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ea.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function qx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=co.apply(void 0,zi([e],t,!1)),i="sc-global-".concat(ly(JSON.stringify(r))),o=new Yx(r,i),s=function(l){var u=cc(),c=ze.useContext(uo),f=ze.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,c,u.stylis),ze.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,f,h){if(o.isStatic)o.renderStyles(l,px,c,h);else{var g=ye(ye({},u),{theme:oy(u,f,s.defaultProps)});o.renderStyles(l,g,c,h)}}return ze.memo(s)}const Qx=qx`
* {
  padding: 0;
  margin: 0;
  border: 0;

  &,
  &::before,
  &::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}

:focus,
:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  line-height: 1;
  font-weight:  ${({theme:e})=>e.font.regular};
  font-family: ${({theme:e})=>e.font.family};
  font-size: ${({theme:e})=>e.font.size};
  color: ${({theme:e})=>e.colors.text};
  background-color: white;
  scroll-behavior: smooth;
}

input,
button,
textarea {
  font-family: ${({theme:e})=>e.font.family};
}

button {
  cursor: pointer;

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
}

a {
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &:visited {
    text-decoration: none;
  }
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight:  ${({theme:e})=>e.font.regular};
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
}

@font-face {
  font-family: 'Roboto Black';
  src: url(${BI}) format('truetype');
  font-weight: ${({theme:e})=>e.font.regular};
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Roboto';
  src: url(${HI}) format('truetype');
  font-weight: ${({theme:e})=>e.font.bold};
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Roboto';
  src: url(${VI}) format('truetype');
  font-weight: ${({theme:e})=>e.font.light};
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Roboto';
  src: url(${WI}) format('truetype');
  font-weight: ${({theme:e})=>e.font.medium};
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Roboto';
  src: url(${GI}) format('truetype');
  font-weight: ${({theme:e})=>e.font.regular};
  font-style: normal;
  font-display: auto;
}
`,Ey=b.div`
  max-width: 1920px;
  margin: 0 auto;
  box-sizing: content-box;
  padding: 0 20px;
  overflow-x: hidden;
`,zd=b.div`
  min-height: 100vh;
`,Fd=b.img`
  @media (max-width: 1400px) {
    margin-bottom: 0px;
  }

  @media (max-width: 992px) {
    align-self: center;
  }
`,Bd=b.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
`,Hd=b.h1`
  color: ${({theme:e})=>e.colors.text};
  font-family: ${({theme:e})=>e.font.family};
  font-weight: ${({theme:e})=>e.font.bold};
`,Xx=b.h2`
  color: ${({theme:e})=>e.colors.text};
  font-family: ${({theme:e})=>e.font.family};
  font-weight: ${({theme:e})=>e.font.bold};
`,Sy=b.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 76px;
  width: 100%;
  color: ${({theme:e})=>e.colors.buttonText};
  font-size: ${({theme:e})=>e.font.size};
  background: ${({theme:e})=>e.colors.buttonBg};

  &:hover {
    cursor: pointer;
    transition: ${({theme:e})=>e.animation.transition};
    border-color: ${({theme:e})=>e.colors.link};
  }

  &:active {
    transition: ${({theme:e})=>e.animation.transition};
    transform: ${({theme:e})=>e.animation.transformActive};
  }
`,Vd=b(nr)`
  color: ${({theme:e})=>e.colors.link};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`,_y=b.input`
  border-radius: 6px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.font.size};
  transition: ${({theme:e})=>e.animation.transition};

  &:focus {
    border-color: ${({theme:e})=>e.colors.inputFocus};
  }

  &:hover {
    transition: ${({theme:e})=>e.animation.transition};
    border-color: ${({theme:e})=>e.colors.inputHover};
  }

  ${({$error:e,$isNotEmpty:t})=>e&&t&&co`
      border-color: ${({theme:n})=>n.colors.error};
    `}

  ${({$error:e,$isNotEmpty:t})=>!e&&t&&co`
      border-color: ${({theme:n})=>n.colors.inputValid};
    `}
`,ky=b.form`
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  width: 100%;
}
`,Jx=b.label`
  color: ${({theme:e})=>e.colors.error};
  font-size: 14px;
  line-height: 120%;
  height: 14px;
`,Zx=b.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`,eC=b(_y).attrs(({type:e})=>({type:e}))`
  width: 100%;
  padding: 24px 20px;

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`,Mi=_.forwardRef(({type:e,value:t,label:n,placeholder:r,onBlur:i,onChange:o,$error:s,$isNotEmpty:a,required:l},u)=>C.jsxs(Zx,{children:[C.jsx(Jx,{children:n}),C.jsx(eC,{type:e,value:t,placeholder:r,onChange:o,onBlur:i,$error:s,$isNotEmpty:a,ref:u,required:l})]}));function gt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Pn(e){return!!e&&!!e[te]}function Gt(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===uC}(e)||Array.isArray(e)||!!e[ap]||!!(!((t=e.constructor)===null||t===void 0)&&t[ap])||Wd(e)||Gd(e))}function or(e,t,n){n===void 0&&(n=!1),si(e)===0?(n?Object.keys:Mr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function si(e){var t=e[te];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Wd(e)?2:Gd(e)?3:0}function $r(e,t){return si(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function tC(e,t){return si(e)===2?e.get(t):e[t]}function Iy(e,t,n){var r=si(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function xy(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Wd(e){return aC&&e instanceof Map}function Gd(e){return lC&&e instanceof Set}function jn(e){return e.o||e.t}function Kd(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Py(e);delete t[te];for(var n=Mr(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Yd(e,t){return t===void 0&&(t=!1),qd(e)||Pn(e)||!Gt(e)||(si(e)>1&&(e.set=e.add=e.clear=e.delete=nC),Object.freeze(e),t&&or(e,function(n,r){return Yd(r,!0)},!0)),e}function nC(){gt(2)}function qd(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function At(e){var t=mc[e];return t||gt(18,e),t}function rC(e,t){mc[e]||(mc[e]=t)}function fc(){return fo}function Kl(e,t){t&&(At("Patches"),e.u=[],e.s=[],e.v=t)}function ta(e){hc(e),e.p.forEach(iC),e.p=null}function hc(e){e===fo&&(fo=e.l)}function tp(e){return fo={p:[],l:fo,h:e,m:!0,_:0}}function iC(e){var t=e[te];t.i===0||t.i===1?t.j():t.g=!0}function Yl(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||At("ES5").S(t,e,r),r?(n[te].P&&(ta(t),gt(4)),Gt(e)&&(e=na(t,e),t.l||ra(t,e)),t.u&&At("Patches").M(n[te].t,e,t.u,t.s)):e=na(t,n,[]),ta(t),t.u&&t.v(t.u,t.s),e!==Cy?e:void 0}function na(e,t,n){if(qd(t))return t;var r=t[te];if(!r)return or(t,function(a,l){return np(e,r,t,a,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return ra(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Kd(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),or(o,function(a,l){return np(e,r,i,a,l,n,s)}),ra(e,i,!1),n&&e.u&&At("Patches").N(r,n,e.u,e.s)}return r.o}function np(e,t,n,r,i,o,s){if(Pn(i)){var a=na(e,i,o&&t&&t.i!==3&&!$r(t.R,r)?o.concat(r):void 0);if(Iy(n,r,a),!Pn(a))return;e.m=!1}else s&&n.add(i);if(Gt(i)&&!qd(i)){if(!e.h.D&&e._<1)return;na(e,i),t&&t.A.l||ra(e,i)}}function ra(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Yd(t,n)}function ql(e,t){var n=e[te];return(n?jn(n):e)[t]}function rp(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function sn(e){e.P||(e.P=!0,e.l&&sn(e.l))}function Ql(e){e.o||(e.o=Kd(e.t))}function pc(e,t,n){var r=Wd(t)?At("MapSet").F(t,n):Gd(t)?At("MapSet").T(t,n):e.O?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:fc(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=a,u=ho;s&&(l=[a],u=xi);var c=Proxy.revocable(l,u),f=c.revoke,h=c.proxy;return a.k=h,a.j=f,h}(t,n):At("ES5").J(t,n);return(n?n.A:fc()).p.push(r),r}function oC(e){return Pn(e)||gt(22,e),function t(n){if(!Gt(n))return n;var r,i=n[te],o=si(n);if(i){if(!i.P&&(i.i<4||!At("ES5").K(i)))return i.t;i.I=!0,r=ip(n,o),i.I=!1}else r=ip(n,o);return or(r,function(s,a){i&&tC(i.t,s)===a||Iy(r,s,t(a))}),o===3?new Set(r):r}(e)}function ip(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Kd(e)}function sC(){function e(o,s){var a=i[o];return a?a.enumerable=s:i[o]=a={configurable:!0,enumerable:s,get:function(){var l=this[te];return ho.get(l,o)},set:function(l){var u=this[te];ho.set(u,o,l)}},a}function t(o){for(var s=o.length-1;s>=0;s--){var a=o[s][te];if(!a.P)switch(a.i){case 5:r(a)&&sn(a);break;case 4:n(a)&&sn(a)}}}function n(o){for(var s=o.t,a=o.k,l=Mr(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==te){var f=s[c];if(f===void 0&&!$r(s,c))return!0;var h=a[c],g=h&&h[te];if(g?g.t!==f:!xy(h,f))return!0}}var v=!!s[te];return l.length!==Mr(s).length+(v?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var l=0;l<s.length;l++)if(!s.hasOwnProperty(l))return!0;return!1}var i={};rC("ES5",{J:function(o,s){var a=Array.isArray(o),l=function(c,f){if(c){for(var h=Array(f.length),g=0;g<f.length;g++)Object.defineProperty(h,""+g,e(g,!0));return h}var v=Py(f);delete v[te];for(var y=Mr(v),S=0;S<y.length;S++){var p=y[S];v[p]=e(p,c||!!v[p].enumerable)}return Object.create(Object.getPrototypeOf(f),v)}(a,o),u={i:a?5:4,A:s?s.A:fc(),P:!1,I:!1,R:{},l:s,t:o,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,te,{value:u,writable:!0}),l},S:function(o,s,a){a?Pn(s)&&s[te].A===o&&t(o.p):(o.u&&function l(u){if(u&&typeof u=="object"){var c=u[te];if(c){var f=c.t,h=c.k,g=c.R,v=c.i;if(v===4)or(h,function(m){m!==te&&(f[m]!==void 0||$r(f,m)?g[m]||l(h[m]):(g[m]=!0,sn(c)))}),or(f,function(m){h[m]!==void 0||$r(h,m)||(g[m]=!1,sn(c))});else if(v===5){if(r(c)&&(sn(c),g.length=!0),h.length<f.length)for(var y=h.length;y<f.length;y++)g[y]=!1;else for(var S=f.length;S<h.length;S++)g[S]=!0;for(var p=Math.min(h.length,f.length),d=0;d<p;d++)h.hasOwnProperty(d)||(g[d]=!0),g[d]===void 0&&l(h[d])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var op,fo,Qd=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",aC=typeof Map<"u",lC=typeof Set<"u",sp=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Cy=Qd?Symbol.for("immer-nothing"):((op={})["immer-nothing"]=!0,op),ap=Qd?Symbol.for("immer-draftable"):"__$immer_draftable",te=Qd?Symbol.for("immer-state"):"__$immer_state",uC=""+Object.prototype.constructor,Mr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Py=Object.getOwnPropertyDescriptors||function(e){var t={};return Mr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},mc={},ho={get:function(e,t){if(t===te)return e;var n=jn(e);if(!$r(n,t))return function(i,o,s){var a,l=rp(o,s);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Gt(r)?r:r===ql(e.t,t)?(Ql(e),e.o[t]=pc(e.A.h,r,e)):r},has:function(e,t){return t in jn(e)},ownKeys:function(e){return Reflect.ownKeys(jn(e))},set:function(e,t,n){var r=rp(jn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=ql(jn(e),t),o=i==null?void 0:i[te];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(xy(n,i)&&(n!==void 0||$r(e.t,t)))return!0;Ql(e),sn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return ql(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Ql(e),sn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=jn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){gt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){gt(12)}},xi={};or(ho,function(e,t){xi[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),xi.deleteProperty=function(e,t){return xi.set.call(this,e,t,void 0)},xi.set=function(e,t,n){return ho.set.call(this,e[0],t,n,e[0])};var cC=function(){function e(n){var r=this;this.O=sp,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var l=r;return function(y){var S=this;y===void 0&&(y=a);for(var p=arguments.length,d=Array(p>1?p-1:0),m=1;m<p;m++)d[m-1]=arguments[m];return l.produce(y,function(w){var E;return(E=o).call.apply(E,[S,w].concat(d))})}}var u;if(typeof o!="function"&&gt(6),s!==void 0&&typeof s!="function"&&gt(7),Gt(i)){var c=tp(r),f=pc(r,i,void 0),h=!0;try{u=o(f),h=!1}finally{h?ta(c):hc(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return Kl(c,s),Yl(y,c)},function(y){throw ta(c),y}):(Kl(c,s),Yl(u,c))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===Cy&&(u=void 0),r.D&&Yd(u,!0),s){var g=[],v=[];At("Patches").M(i,u,g,v),s(g,v)}return u}gt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),h=1;h<c;h++)f[h-1]=arguments[h];return r.produceWithPatches(u,function(g){return i.apply(void 0,[g].concat(f))})};var s,a,l=r.produce(i,o,function(u,c){s=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,s,a]}):[l,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Gt(n)||gt(8),Pn(n)&&(n=oC(n));var r=tp(this),i=pc(this,n,void 0);return i[te].C=!0,hc(r),i},t.finishDraft=function(n,r){var i=n&&n[te],o=i.A;return Kl(o,r),Yl(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!sp&&gt(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=At("Patches").$;return Pn(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},e}(),Xe=new cC,Ty=Xe.produce;Xe.produceWithPatches.bind(Xe);Xe.setAutoFreeze.bind(Xe);Xe.setUseProxies.bind(Xe);Xe.applyPatches.bind(Xe);Xe.createDraft.bind(Xe);Xe.finishDraft.bind(Xe);function po(e){"@babel/helpers - typeof";return po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},po(e)}function dC(e,t){if(po(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(po(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fC(e){var t=dC(e,"string");return po(t)==="symbol"?t:String(t)}function hC(e,t,n){return t=fC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function up(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lp(Object(n),!0).forEach(function(r){hC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pe(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var cp=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Xl=function(){return Math.random().toString(36).substring(7).split("").join(".")},ia={INIT:"@@redux/INIT"+Xl(),REPLACE:"@@redux/REPLACE"+Xl(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Xl()}};function pC(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Ry(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Pe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Pe(1));return n(Ry)(e,t)}if(typeof e!="function")throw new Error(Pe(2));var i=e,o=t,s=[],a=s,l=!1;function u(){a===s&&(a=s.slice())}function c(){if(l)throw new Error(Pe(3));return o}function f(y){if(typeof y!="function")throw new Error(Pe(4));if(l)throw new Error(Pe(5));var S=!0;return u(),a.push(y),function(){if(S){if(l)throw new Error(Pe(6));S=!1,u();var d=a.indexOf(y);a.splice(d,1),s=null}}}function h(y){if(!pC(y))throw new Error(Pe(7));if(typeof y.type>"u")throw new Error(Pe(8));if(l)throw new Error(Pe(9));try{l=!0,o=i(o,y)}finally{l=!1}for(var S=s=a,p=0;p<S.length;p++){var d=S[p];d()}return y}function g(y){if(typeof y!="function")throw new Error(Pe(10));i=y,h({type:ia.REPLACE})}function v(){var y,S=f;return y={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(Pe(11));function m(){d.next&&d.next(c())}m();var w=S(m);return{unsubscribe:w}}},y[cp]=function(){return this},y}return h({type:ia.INIT}),r={dispatch:h,subscribe:f,getState:c,replaceReducer:g},r[cp]=v,r}function mC(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:ia.INIT});if(typeof r>"u")throw new Error(Pe(12));if(typeof n(void 0,{type:ia.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Pe(13))})}function gC(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{mC(n)}catch(a){s=a}return function(l,u){if(l===void 0&&(l={}),s)throw s;for(var c=!1,f={},h=0;h<o.length;h++){var g=o[h],v=n[g],y=l[g],S=v(y,u);if(typeof S>"u")throw u&&u.type,new Error(Pe(14));f[g]=S,c=c||S!==y}return c=c||o.length!==Object.keys(l).length,c?f:l}}function oa(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function vC(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Pe(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(l){return l(s)});return o=oa.apply(void 0,a)(i.dispatch),up(up({},i),{},{dispatch:o})}}}function Oy(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(s){return function(a){return typeof a=="function"?a(i,o,e):s(a)}}};return t}var by=Oy();by.withExtraArgument=Oy;const dp=by;var Ay=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),yC=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Xr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},wC=Object.defineProperty,EC=Object.defineProperties,SC=Object.getOwnPropertyDescriptors,fp=Object.getOwnPropertySymbols,_C=Object.prototype.hasOwnProperty,kC=Object.prototype.propertyIsEnumerable,hp=function(e,t,n){return t in e?wC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},_n=function(e,t){for(var n in t||(t={}))_C.call(t,n)&&hp(e,n,t[n]);if(fp)for(var r=0,i=fp(t);r<i.length;r++){var n=i[r];kC.call(t,n)&&hp(e,n,t[n])}return e},Jl=function(e,t){return EC(e,SC(t))},IC=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{a(n.next(l))}catch(u){i(u)}},s=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,s)};a((n=n.apply(e,t)).next())})},xC=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?oa:oa.apply(null,arguments)};function CC(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function kn(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return _n(_n({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var PC=function(e){Ay(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Xr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Xr([void 0],n.concat(this))))},t}(Array),TC=function(e){Ay(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Xr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Xr([void 0],n.concat(this))))},t}(Array);function gc(e){return Gt(e)?Ty(e,function(){}):e}function RC(e){return typeof e=="boolean"}function OC(){return function(t){return bC(t)}}function bC(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new PC;return n&&(RC(n)?r.push(dp):r.push(dp.withExtraArgument(n.extraArgument))),r}var AC=!0;function NC(e){var t=OC(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,s=o===void 0?t():o,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,f=n.enhancers,h=f===void 0?void 0:f,g;if(typeof i=="function")g=i;else if(CC(i))g=gC(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=s;typeof v=="function"&&(v=v(t));var y=vC.apply(void 0,v),S=oa;l&&(S=xC(_n({trace:!AC},typeof l=="object"&&l)));var p=new TC(y),d=p;Array.isArray(h)?d=Xr([y],h):typeof h=="function"&&(d=h(p));var m=S.apply(void 0,d);return Ry(g,c,m)}function Ny(e){var t={},n=[],r,i={addCase:function(o,s){var a=typeof o=="string"?o:o.type;if(!a)throw new Error("`builder.addCase` cannot be called with an empty action type");if(a in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[a]=s,i},addMatcher:function(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function LC(e){return typeof e=="function"}function DC(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Ny(t):[t,n,r],o=i[0],s=i[1],a=i[2],l;if(LC(e))l=function(){return gc(e())};else{var u=gc(e);l=function(){return u}}function c(f,h){f===void 0&&(f=l());var g=Xr([o[h.type]],s.filter(function(v){var y=v.matcher;return y(h)}).map(function(v){var y=v.reducer;return y}));return g.filter(function(v){return!!v}).length===0&&(g=[a]),g.reduce(function(v,y){if(y)if(Pn(v)){var S=v,p=y(S,h);return p===void 0?v:p}else{if(Gt(v))return Ty(v,function(d){return y(d,h)});var p=y(v,h);if(p===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return v},f)}return c.getInitialState=l,c}function $C(e,t){return e+"/"+t}function MC(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:gc(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},s={},a={};i.forEach(function(c){var f=r[c],h=$C(t,c),g,v;"reducer"in f?(g=f.reducer,v=f.prepare):g=f,o[c]=g,s[h]=g,a[c]=v?kn(h,v):kn(h)});function l(){var c=typeof e.extraReducers=="function"?Ny(e.extraReducers):[e.extraReducers],f=c[0],h=f===void 0?{}:f,g=c[1],v=g===void 0?[]:g,y=c[2],S=y===void 0?void 0:y,p=_n(_n({},h),s);return DC(n,function(d){for(var m in p)d.addCase(m,p[m]);for(var w=0,E=v;w<E.length;w++){var I=E[w];d.addMatcher(I.matcher,I.reducer)}S&&d.addDefaultCase(S)})}var u;return{name:t,reducer:function(c,f){return u||(u=l()),u(c,f)},actions:a,caseReducers:o,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var jC="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",UC=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=jC[Math.random()*64|0];return t},zC=["name","message","stack","code"],Zl=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),pp=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),FC=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=zC;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=kn(t+"/fulfilled",function(u,c,f,h){return{payload:u,meta:Jl(_n({},h||{}),{arg:f,requestId:c,requestStatus:"fulfilled"})}}),o=kn(t+"/pending",function(u,c,f){return{payload:void 0,meta:Jl(_n({},f||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),s=kn(t+"/rejected",function(u,c,f,h,g){return{payload:h,error:(r&&r.serializeError||FC)(u||"Rejected"),meta:Jl(_n({},g||{}),{arg:f,requestId:c,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,f,h){var g=r!=null&&r.idGenerator?r.idGenerator(u):UC(),v=new a,y;function S(d){y=d,v.abort()}var p=function(){return IC(this,null,function(){var d,m,w,E,I,k,T;return yC(this,function(j){switch(j.label){case 0:return j.trys.push([0,4,,5]),E=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,u,{getState:f,extra:h}),HC(E)?[4,E]:[3,2];case 1:E=j.sent(),j.label=2;case 2:if(E===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return I=new Promise(function(O,U){return v.signal.addEventListener("abort",function(){return U({name:"AbortError",message:y||"Aborted"})})}),c(o(g,u,(m=r==null?void 0:r.getPendingMeta)==null?void 0:m.call(r,{requestId:g,arg:u},{getState:f,extra:h}))),[4,Promise.race([I,Promise.resolve(n(u,{dispatch:c,getState:f,extra:h,requestId:g,signal:v.signal,abort:S,rejectWithValue:function(O,U){return new Zl(O,U)},fulfillWithValue:function(O,U){return new pp(O,U)}})).then(function(O){if(O instanceof Zl)throw O;return O instanceof pp?i(O.payload,g,u,O.meta):i(O,g,u)})])];case 3:return w=j.sent(),[3,5];case 4:return k=j.sent(),w=k instanceof Zl?s(null,g,u,k.payload,k.meta):s(k,g,u),[3,5];case 5:return T=r&&!r.dispatchConditionRejection&&s.match(w)&&w.meta.condition,T||c(w),[2,w]}})})}();return Object.assign(p,{abort:S,requestId:g,arg:u,unwrap:function(){return p.then(BC)}})}}return Object.assign(l,{pending:o,rejected:s,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function BC(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function HC(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Xd="listenerMiddleware";kn(Xd+"/add");kn(Xd+"/removeAll");kn(Xd+"/remove");var mp;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);sC();const VC={uid:null,email:null,accessToken:null,isAuthorized:!1},Ly=MC({name:"userReducer",initialState:VC,reducers:{setUser(e,t){const{uid:n,email:r,accessToken:i}=t.payload;e.uid=n,e.email=r,e.accessToken=i,e.isAuthorized=!0},logoutUser(e){e.uid=null,e.email=null,e.accessToken=null,e.isAuthorized=!1}}}),{setUser:Jd,logoutUser:Dy}=Ly.actions,WC=Ly.reducer;function sa(e){return/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(e)}function aa(e){return/(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(e)}function gp(e){return/^\+375\d{2}\d{3}\d{2}\d{2}$/.test(e)}const GC={title:"Log in to Twitter",button:"Log In",link:"Sign up to Twitter",emailErrorMessage:"Wrong email",passwordErrorMessage:"The password must be at least 6 characters long and contain a digit",emailPlaceholder:"Email address",passwordPlaceholder:"Password"},KC=b(Bd)`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 480px;

  @media (max-width: 480px) {
    row-gap: 28px;
  }
`,YC=b(Hd)`
  font-size: 42px;
  margin-bottom: 36px;

  @media (max-width: 480px) {
    font-size: 36px;
    margin-bottom: 0px;
  }
`,qC=b(Fd)`
  white-space: nowrap;
  width: 50px;
  height: 40px;
  margin-bottom: 36px;

  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
`,QC=b(ky)`
  margin-bottom: 24px;

  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
}
`;b.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;b(_y).attrs(({type:e})=>({type:e}))`
  width: 100%;
  padding: 24px 20px;

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`;const XC=b(Sy)`
  min-height: 60px;
  margin-bottom: 40px;
  transition: ${({theme:e})=>e.animation.transition};

  &:hover {
    opacity: 0.7;
    transition: ${({theme:e})=>e.animation.transition};
  }

  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
`,JC=b(Vd)`
  align-self: flex-end;
`;b.label`
  color: ${({theme:e})=>e.colors.error};
  font-size: 14px;
  line-height: 120%;
  height: 14px;
`;const ZC=()=>{const[e,t]=_.useState(""),[n,r]=_.useState(""),[i,o]=_.useState(null),[s,a]=_.useState(null),l=Od(),u=ii(),c=_.useRef(null),f=_.useRef(null),h=_.useRef(null),{title:g,button:v,link:y,emailErrorMessage:S,passwordErrorMessage:p,emailPlaceholder:d,passwordPlaceholder:m}=_.useMemo(w,[]);_.useEffect(()=>{c&&(c.current.disabled=!1),f&&(f.current.disabled=!1),h&&(h.current.disabled=!1)},[c,f,h]);function w(){const{title:U,button:re,link:fe,emailErrorMessage:be,passwordErrorMessage:Se,emailPlaceholder:We,passwordPlaceholder:me}=GC;return{title:U,button:re,link:fe,emailErrorMessage:be,passwordErrorMessage:Se,emailPlaceholder:We,passwordPlaceholder:me}}function E(U){const re=U.target.value;t(re),o(null)}function I(U){const re=U.target.value;r(re),a(null)}function k(){const U=sa(e);o(e&&!U?S:null)}function T(){const U=aa(n);a(n&&!U?p:null)}function j(U=!0){c.current.disabled=U,f.current.disabled=U,h.current.disabled=U}function O(U){const re=sa(e),fe=aa(n);if(re||o(S),fe||a(p),re&&fe){j();const be=fa();N1(be,e,n).then(Se=>{const We=Se.user,{uid:me,email:P,accessToken:A}=We;l(Jd({uid:me,email:P,accessToken:A})),u(M.FEED)}).catch(Se=>{o(Se.message),a(Se.message),j(!1)})}U.preventDefault()}return C.jsx(zd,{children:C.jsx(Ey,{children:C.jsxs(KC,{children:[C.jsx(qC,{src:Ld}),C.jsx(YC,{children:g}),C.jsxs(QC,{onSubmit:O,children:[C.jsx(Mi,{type:"text",value:e,placeholder:d,onChange:E,onBlur:k,$error:!!i,$isNotEmpty:!!e,required:!0,label:i,ref:c}),C.jsx(Mi,{type:"password",value:n,placeholder:m,onChange:I,onBlur:T,$error:!!s,$isNotEmpty:!!n,required:!0,label:s,ref:f}),C.jsx(XC,{ref:h,children:v})]}),C.jsx(JC,{to:M.REGISTRATION,children:y})]})})})},eP=()=>C.jsx(ZC,{}),tP=()=>{const{isAuthorized:e}=Fv(n=>n.user),t=ii();return _.useEffect(()=>{e||(alert("Not Authorized"),t(M.HOME))}),C.jsxs(C.Fragment,{children:[C.jsx("div",{children:"Profile"}),C.jsx(nr,{to:M.HOME,children:"Home"}),C.jsx(nr,{to:M.FEED,children:"Feed"})]})},nP="/assets/google-09a9f585.svg",rP="/assets/preview-a3f8e15c.png",iP={title:"Happening now",subtitle:"Join Twitter today",withGoogleButton:"Sign up with Google",withEmailButton:"Sign up with email"},oP=[{text:"About",to:M.HOME},{text:"Help Center",to:M.HOME},{text:"Terms of Service",to:M.HOME},{text:"Privacy Policy",to:M.HOME},{text:"Cookie Policy",to:M.HOME},{text:"Ads info",to:M.HOME},{text:"Blog",to:M.HOME},{text:"Status",to:M.HOME},{text:"Carrres",to:M.HOME},{text:"Brand Resources",to:M.HOME},{text:"Advertsing",to:M.HOME},{text:"Marketing",to:M.HOME},{text:"Twitter for Business",to:M.HOME},{text:"Developers",to:M.HOME},{text:"Directory",to:M.HOME},{text:"Settings",to:M.HOME},{text:"© 2021 Twitter, Inc.",to:M.HOME}];b.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
`;const sP=b.main`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
`,aP=b.div`
  flex: 0 1 60%;

  @media (max-width: 992px) {
    position: absolute;
    opacity: 0.25;
    width: 100%;
    user-event: none;
  }

  @media (max-width: 500px) {
    display: none;
  }
`,lP=b.img`
  width: 100%;
  max-height: calc(100vh - 100px);
  object-fit: cover;
`,uP=b.div`
  flex: 0 1 40%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding-top: 12vh;

  @media (max-width: 1400px) {
    padding-top: 5%;
  }
  @media (max-width: 992px) {
    flex: 1 1 auto;
    padding: 20px;
  }
  @media (max-width: 500px) {
    justify-content: center;
    padding: 20px 10px;
  }
`,cP=b(Fd)`
  white-space: nowrap;
  width: 50px;
  height: 40px;
  margin-bottom: 58px;
`,dP=b(Hd)`
  color: ${({theme:e})=>e.colors.text};
  font-family: ${({theme:e})=>e.font.family};
  font-weight: ${({theme:e})=>e.font.bold};
  font-size: 84px;

  @media (max-width: 1400px) {
    font-size: 40px;
  }
  @media (max-width: 992px) {
    font-size: 60px;
    text-align: center;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
`,fP=b.p`
  color: ${({theme:e})=>e.colors.text};
  font-weight: ${({theme:e})=>e.font.bold};
  font-size: 42px;

  @media (max-width: 1400px) {
    font-size: 30px;
  }
  @media (max-width: 992px) {
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
    text-align: center;
    margin-bottom: 0px;
  }
`,hP=b.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`,vp=b(nr)`
  border-radius: 42px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  opacity: 0.8;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  color: ${({theme:e})=>e.colors.text};
  font-weight: ${({theme:e})=>e.font.medium};
  font-size: 20px;
  display: flex;
  column-gap: 5px;
  transition: ${({theme:e})=>e.animation.transition};

  &:hover {
    cursor: pointer;
    transition: ${({theme:e})=>e.animation.transition};
    border-color: ${({theme:e})=>e.colors.link};
  }

  &:active {
    transition: ${({theme:e})=>e.animation.transition};
    transform: ${({theme:e})=>e.animation.transformActive};
  }

  @media (max-width: 1400px) {
    font-size: 16px;
    height: 40px;
  }

  @media (max-width: 992px) {
    flex: 1 1 auto;
    border-color: ${({theme:e})=>e.colors.text};
  }

  @media (max-width: 500px) {
    flex: 1 1 auto;
    border-color: ${({theme:e})=>e.colors.border};
  }
`,pP=b.img``,mP=b.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`,Ko=b(Vd)`
  color: ${({theme:e})=>e.colors.link};

  &:hover {
    text-decoration: underline;
  }
`,yp=b.p`
  line-height: 140%;
`,gP=b.footer`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media (max-width: 500px) {
    padding: 20px 10px;
  }
`,vP=b(nr)`
  color: ${({theme:e})=>e.colors.text};

  &:hover {
    text-decoration: underline;
  }
`,yP=()=>{const{title:e,subtitle:t,withEmailButton:n,withGoogleButton:r}=_.useMemo(s,[]),i=Od(),o=ii();function s(){const{title:l,subtitle:u,withEmailButton:c,withGoogleButton:f}=iP;return{title:l,subtitle:u,withEmailButton:c,withGoogleButton:f}}async function a(l){l.preventDefault();const u=fa(),c=new Ct;nE(u,c).then(f=>{const h=Ct.credentialFromResult(f),{uid:g,email:v}=f.user,y={uid:g,email:v,accessToken:h.accessToken};i(Jd(y)),o(M.FEED)}).catch(()=>{i(Dy())})}return C.jsx(zd,{children:C.jsxs(Bd,{children:[C.jsxs(sP,{children:[C.jsx(aP,{children:C.jsx(lP,{src:rP})}),C.jsxs(uP,{children:[C.jsx(cP,{src:Ld}),C.jsx(dP,{children:e}),C.jsx(fP,{children:t}),C.jsxs(hP,{children:[C.jsxs(vp,{to:M.REGISTRATION,onClick:a,children:[C.jsx(pP,{src:nP}),r]}),C.jsx(vp,{to:M.REGISTRATION,children:n})]}),C.jsxs(mP,{children:[C.jsxs(yp,{children:["By singing up you agree to the ",C.jsx(Ko,{to:M.HOME,children:"Terms of Service"})," and",C.jsx(Ko,{to:M.HOME,children:" Privacy Policy"}),", including",C.jsx(Ko,{to:M.HOME,children:"Cookie Use"}),"."]}),C.jsxs(yp,{children:["Already have an account? ",C.jsx(Ko,{to:M.LOGIN,children:"Log in"})]})]})]})]}),C.jsx(gP,{children:oP.map(({to:l,text:u})=>C.jsx(vP,{to:l,children:u},u))})]})})},wP=()=>C.jsx(yP,{}),EP=b.li`
  padding: 16px 20px;
  width: 100%;
  background: ${({theme:e})=>e.colors.bgApp};
  border: 1px solid ${({theme:e})=>e.colors.border};
  transition: ${({theme:e})=>e.animation.transition};
  border-top: none;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: ${({theme:e})=>e.animation.transition};
    color: ${({theme:e})=>e.colors.borderHover};
  }

  &:not(last-child) {
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  }
`,SP=({option:e,handler:t})=>{function n(){t(e)}return C.jsx(EP,{onClick:n,children:e})},_P=_.memo(SP),kP="/assets/arrow-5b09d097.svg",IP=b.div`
  position: relative;
  flex: 1 1 auto;
  z-index: 10;
`,xP=b.h3`
  width: 100%;
  padding: 24px 20px;
  border-radius: 6px;
  position: relative;
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.font.size};
  border: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.font.size};
  transition: ${({theme:e})=>e.animation.transition};

  &:hover {
    cursor: pointer;
    transition: ${({theme:e})=>e.animation.transition};
    border-color: ${({theme:e})=>e.colors.link};
  }

  &:before {
    content: '';
    position: absolute;
    right: 20px;
    top: 30%;
    width: 28px;
    height: 28px;
    background: url('${kP}') center no-repeat;
    transition: ${({theme:e})=>e.animation.transition};

    ${({$isActive:e})=>e&&co`
        transform: rotate(180deg);
        transition: ${({theme:t})=>t.animation.transition};
      `}
  }
`,CP=b.ul`
  width: 100%;
  background: ${({theme:e})=>e.colors.bgApp};
  max-height: 250px;
  overflow-y: auto;
  position: absolute;

  @media (max-width: 768px) {
    position: static;
  }
`,eu=({title:e,data:t,handler:n})=>{const[r,i]=_.useState(!1);function o(){i(!r)}function s(a){n(a),i(!1)}return C.jsxs(IP,{children:[C.jsx(xP,{$isActive:r,onClick:o,children:e}),r&&C.jsx(CP,{children:t.map(a=>C.jsx(_P,{option:a,handler:s},a))})]})};function PP(e){const{month:t,year:n}=TP(e),r=new Date(n,t+1);return r.setMinutes(-1),r.getDate()}function TP(e){const t=e.getDay(),n=e.getMonth(),r=e.getFullYear(),i=e.getDate();return{day:t,month:n,year:r,date:i}}const RP={title:"Create an account",subtitle:"Date of birth",link:"Use email",phonePlaceholder:"Phone number",phoneErrorMessage:"Invalid phone number",passwordPlaceholder:"Password",passwordErrorMessage:"The password must be at least 6 characters long and contain a digit",emailPlaceholder:"Email address",emailErrorMessage:"Wrong email",button:"Next",description:"Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus  metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper  blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue."},OP=b(Bd)`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 680px;

  @media (max-width: 480px) {
    row-gap: 28px;
  }
`,bP=b(Fd)`
  white-space: nowrap;
  width: 50px;
  height: 40px;
  margin-bottom: 42px;

  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
`,AP=b(Hd)`
  font-size: 30px;
  align-self: flex-start;
`,NP=b(ky)`
  margin-bottom: 24px;
`,LP=b(Vd)`
  align-self: flex-start;
  margin-bottom: 18px;
`,DP=b(Xx)`
  font-size: ${({theme:e})=>e.font.size};
  align-self: flex-start;
  margin-bottom: 32px;
`,$P=b.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  opacity: 0.6;
  margin-bottom: 32px;
`,MP=b.div`
  width: 100%;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 22px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
`,jP=b(Sy)`
  min-height: 60px;
  margin-bottom: 40px;
  transition: ${({theme:e})=>e.animation.transition};

  &:hover {
    opacity: 0.7;
    transition: ${({theme:e})=>e.animation.transition};
  }

  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
`;var J=(e=>(e.SET_EMAIL="SET_EMAIL",e.SET_PASSWORD="SET_PASSWORD",e.SET_PHONE="SET_PHONE",e.SET_EMAIL_ERROR="SET_EMAIL_ERROR",e.SET_PASSWORD_ERROR="SET_PASSWORD_ERROR",e.SET_PHONE_ERROR="SET_PHONE_ERROR",e.SET_DAY="SET_DAY",e.SET_MONTH="SET_MONTH",e.SET_YEAR="SET_YEAR",e))(J||{});const UP=()=>{const{title:e,subtitle:t,link:n,button:r,description:i,emailPlaceholder:o,phonePlaceholder:s,passwordPlaceholder:a,emailErrorMessage:l,phoneErrorMessage:u,passwordErrorMessage:c}=_.useMemo(A,[]),f=_.useMemo(me,[]),[h,g]=_.useReducer(P,f),{day:v,month:y,year:S,email:p,emailError:d,password:m,passwordError:w,phone:E,phoneError:I}=h,{daysList:k,monthList:T,yearList:j}=_.useMemo(We,[y]),O=Od(),U=ii(),re=_.useRef(null),fe=_.useRef(null),be=_.useRef(null),Se=_.useRef(null);_.useEffect(()=>{re&&(re.current.disabled=!1),fe&&(fe.current.disabled=!1),Se&&(Se.current.disabled=!1),be&&(be.current.disabled=!1)},[re,fe,Se,be]);function We(){const F=new Date().getFullYear(),Yt=[],Ln=[],li=Object.keys(ns).filter(Ge=>Ge.length>2),ui=PP(new Date(F,ns[y]));for(let Ge=1;Ge<=ui;++Ge)Yt.push(String(Ge));for(let Ge=F-18;Ge>=1950;--Ge)Ln.push(String(Ge));return{daysList:Yt,monthList:li,yearList:Ln}}function me(){const D=new Date,F=D.getFullYear()-18;return{day:"1",year:String(F),month:String(ns[D.getMonth()]),email:"",password:"",phone:"",emailError:null,passwordError:null,phoneError:null}}function P(D=f,F){switch(F.type){case J.SET_DAY:return{...D,day:F.payload};case J.SET_MONTH:return{...D,month:F.payload};case J.SET_YEAR:return{...D,year:F.payload};case J.SET_EMAIL:return{...D,email:F.payload};case J.SET_PASSWORD:return{...D,password:F.payload};case J.SET_PHONE:return{...D,phone:F.payload};case J.SET_EMAIL_ERROR:return{...D,emailError:F.payload};case J.SET_PASSWORD_ERROR:return{...D,passwordError:F.payload};case J.SET_PHONE_ERROR:return{...D,phoneError:F.payload};default:return D}}function A(){const{title:D,subtitle:F,link:Yt,button:Ln,description:li,emailPlaceholder:ui,phonePlaceholder:Ge,passwordPlaceholder:nl,emailErrorMessage:rl,phoneErrorMessage:il,passwordErrorMessage:$y}=RP;return{title:D,subtitle:F,link:Yt,button:Ln,description:li,emailPlaceholder:ui,phonePlaceholder:Ge,passwordPlaceholder:nl,emailErrorMessage:rl,phoneErrorMessage:il,passwordErrorMessage:$y}}function N(D){const F=D.target.value;g({type:J.SET_EMAIL,payload:F}),g({type:J.SET_EMAIL_ERROR,payload:null})}function Y(D){const F=D.target.value;F.length<=13&&(g({type:J.SET_PHONE,payload:F}),g({type:J.SET_PHONE_ERROR,payload:null}))}function ee(D){const F=D.target.value;g({type:J.SET_PASSWORD,payload:F}),g({type:J.SET_PASSWORD_ERROR,payload:null})}function ct(){const D=sa(p),F=p&&!D?l:null;g({type:J.SET_EMAIL_ERROR,payload:F})}function Ae(){const D=gp(E),F=E&&!D?u:null;g({type:J.SET_PHONE_ERROR,payload:F})}function St(){const D=aa(m),F=m&&!D?c:null;g({type:J.SET_PASSWORD_ERROR,payload:F})}function Ne(D){g({type:J.SET_MONTH,payload:D})}function je(D){g({type:J.SET_DAY,payload:D})}function ai(D){g({type:J.SET_YEAR,payload:D})}function Nn(D=!0){re&&(re.current.disabled=D),fe&&(fe.current.disabled=D),Se&&(Se.current.disabled=D),be&&(be.current.disabled=D)}function _t(D){const F=sa(p),Yt=gp(E),Ln=aa(m);if(F||g({type:J.SET_EMAIL_ERROR,payload:l}),Yt||g({type:J.SET_PHONE_ERROR,payload:u}),Ln||g({type:J.SET_PASSWORD_ERROR,payload:c}),F&&Ln&&Yt){const li=fa();Nn(),A1(li,p,m).then(ui=>{const Ge=ui.user,{uid:nl,email:rl,accessToken:il}=Ge;O(Jd({uid:nl,email:rl,accessToken:il})),U(M.FEED)}).catch(()=>{Nn(!1),O(Dy())})}D.preventDefault()}return C.jsx(zd,{children:C.jsx(Ey,{children:C.jsxs(OP,{children:[C.jsx(bP,{src:Ld}),C.jsx(AP,{children:e}),C.jsxs(NP,{onSubmit:_t,children:[C.jsx(Mi,{type:"email",value:p,label:d,placeholder:o,onChange:N,onBlur:ct,$error:!!d,$isNotEmpty:!!p,required:!0,ref:re}),C.jsx(Mi,{type:"tel",value:E,label:I,placeholder:s,onChange:Y,onBlur:Ae,$error:!!I,$isNotEmpty:!!E,required:!0,ref:be}),C.jsx(Mi,{type:"password",value:m,label:w,placeholder:a,onChange:ee,onBlur:St,$error:!!w,$isNotEmpty:!!m,required:!0,ref:fe}),C.jsx(LP,{to:M.HOME,children:n}),C.jsx(DP,{children:t}),C.jsx($P,{children:i}),C.jsxs(MP,{children:[C.jsx(eu,{title:y,data:T,handler:Ne}),C.jsx(eu,{title:v,data:k,handler:je}),C.jsx(eu,{title:S,data:j,handler:ai})]}),C.jsx(jP,{type:"submit",ref:Se,children:r})]})]})})})},zP=()=>C.jsx(UP,{}),FP={black:"#000",white:"#fff",blue:"#1da1f2",gray:"#e4eaed",red:"red",green:"green"},{black:BP,blue:ft,gray:wp,white:Yo,red:qo,green:Ep}=FP,Sp={bold:700,medium:500,regular:400,light:300,family:"Roboto",size:"18px"},HP={light:{font:Sp,colors:{text:BP,link:ft,bgApp:Yo,border:wp,borderHover:ft,buttonBg:ft,buttonText:Yo,error:qo,inputFocus:ft,inputError:qo,inputHover:ft,inputValid:Ep},animation:{transformActive:"scale(0.95)",transition:"all .3s ease"}},dark:{font:Sp,colors:{text:ft,link:ft,bgApp:Yo,border:wp,borderHover:ft,buttonBg:ft,buttonText:Yo,error:qo,inputFocus:ft,inputError:qo,inputHover:ft,inputValid:Ep}}},VP=()=>{const e=_.useMemo(t,[]);function t(){return[{path:M.HOME,element:wP},{path:M.LOGIN,element:eP},{path:M.REGISTRATION,element:zP},{path:M.FEED,element:FI},{path:M.PROFILE,element:tP}]}return C.jsxs(Gx,{theme:HP.light,children:[C.jsx(Qx,{}),C.jsx(bI,{children:e.map(({path:n,element:r})=>C.jsx(Jv,{path:n,element:C.jsx(r,{})},n))})]})},WP=b.div`
  border: 4px solid ${({theme:e})=>e.colors.active};
  border-bottom: 4px solid transparent;
  border-radius: 50%;
  width: ${({theme:e})=>e.spaces.loaderSize};
  height: ${({theme:e})=>e.spaces.loaderSize};
  align-self: center;
  animation: spinAnimation 1s linear infinite;
`,GP=b.p`
  font-size: 22px;
`;class KP extends ze.Component{constructor(t){super(t),this.state={error:!1}}static getDerivedStateFromError(t){return{error:t.message}}render(){const{error:t}=this.state;return t?C.jsx(_.Suspense,{fallback:C.jsx(WP,{}),children:C.jsx(GP,{children:t})}):this.props.children}}var vc={},_p=bv;vc.createRoot=_p.createRoot,vc.hydrateRoot=_p.hydrateRoot;const YP=NC({reducer:{user:WC}});vc.createRoot(document.getElementById("root")).render(C.jsx(ze.StrictMode,{children:C.jsx(KP,{children:C.jsx(zk,{store:YP,children:C.jsx(MI,{children:C.jsx(VP,{})})})})}));
