import{r as bn,j as W}from"./index-c0bf5e9f.js";import Ar from"./StageInfo-1f188629.js";/**
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
 */const yo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},uh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],h=n[e++],c=n[e++],d=((i&7)<<18|(o&63)<<12|(h&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],h=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|h&63)}}return t.join("")},Eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],h=i+1<n.length,c=h?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,_=o>>2,A=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,V=f&63;d||(V=64,h||(R=64)),r.push(e[_],e[A],e[R],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(yo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):uh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||f==null||A==null)throw new ch;const R=o<<2|c>>4;if(r.push(R),f!==64){const V=c<<4&240|f>>2;if(r.push(V),A!==64){const k=f<<6&192|A;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ch extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lh=function(n){const t=yo(n);return Eo.encodeByteArray(t,!0)},Mn=function(n){return lh(n).replace(/\./g,"")},dh=function(n){try{return Eo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function fh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ph=()=>fh().__FIREBASE_DEFAULTS__,mh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&dh(n[1]);return t&&JSON.parse(t)},es=()=>{try{return ph()||mh()||gh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_h=n=>{var t,e;return(e=(t=es())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},yh=n=>{const t=_h(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},vo=()=>{var n;return(n=es())===null||n===void 0?void 0:n.config};/**
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
 */class Eh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function vh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[Mn(JSON.stringify(e)),Mn(JSON.stringify(h)),c].join(".")}/**
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
 */function Th(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ih(){var n;const t=(n=es())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wh(){return!Ih()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ah(){try{return typeof indexedDB=="object"}catch{return!1}}function Rh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Ch="FirebaseError";class Ee extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ch,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],h=o?Sh(o,r):"Error",c=`${this.serviceName}: ${h} (${i}).`;return new Ee(i,c,r)}}function Sh(n,t){return n.replace(Ph,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ph=/\{\$([^}]+)}/g;function xr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],h=t[i];if(Ci(o)&&Ci(h)){if(!xr(o,h))return!1}else if(o!==h)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ci(n){return n!==null&&typeof n=="object"}/**
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
 */function Vh(n){return n&&n._delegate?n._delegate:n}class Ye{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class bh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Eh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Nh(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,h]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&h.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const h=this.instances.get(i);return h&&t(h,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dh(n){return n===Gt?void 0:n}function Nh(n){return n.instantiationMode==="EAGER"}/**
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
 */class kh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new bh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const xh={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Mh=U.INFO,Oh={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Lh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Oh[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Io{constructor(t){this.name=t,this._logLevel=Mh,this._logHandler=Lh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Fh=(n,t)=>t.some(e=>n instanceof e);let Si,Pi;function Uh(){return Si||(Si=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bh(){return Pi||(Pi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wo=new WeakMap,Mr=new WeakMap,Ao=new WeakMap,Rr=new WeakMap,ns=new WeakMap;function jh(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",h)},o=()=>{e(Ft(n.result)),i()},h=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",h)});return t.then(e=>{e instanceof IDBCursor&&wo.set(e,n)}).catch(()=>{}),ns.set(t,n),t}function qh(n){if(Mr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",h),n.removeEventListener("abort",h)},o=()=>{e(),i()},h=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",h),n.addEventListener("abort",h)});Mr.set(n,t)}let Or={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Mr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ao.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ft(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function $h(n){Or=n(Or)}function zh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Cr(this),t,...e);return Ao.set(r,t.sort?t.sort():[t]),Ft(r)}:Bh().includes(n)?function(...t){return n.apply(Cr(this),t),Ft(wo.get(this))}:function(...t){return Ft(n.apply(Cr(this),t))}}function Hh(n){return typeof n=="function"?zh(n):(n instanceof IDBTransaction&&qh(n),Fh(n,Uh())?new Proxy(n,Or):n)}function Ft(n){if(n instanceof IDBRequest)return jh(n);if(Rr.has(n))return Rr.get(n);const t=Hh(n);return t!==n&&(Rr.set(n,t),ns.set(t,n)),t}const Cr=n=>ns.get(n);function Kh(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const h=indexedDB.open(n,t),c=Ft(h);return r&&h.addEventListener("upgradeneeded",d=>{r(Ft(h.result),d.oldVersion,d.newVersion,Ft(h.transaction),d)}),e&&h.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Gh=["get","getKey","getAll","getAllKeys","count"],Qh=["put","add","delete","clear"],Sr=new Map;function Vi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Sr.get(t))return Sr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Qh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gh.includes(e)))return;const o=async function(h,...c){const d=this.transaction(h,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&d.done]))[0]};return Sr.set(t,o),o}$h(n=>({...n,get:(t,e,r)=>Vi(t,e)||n.get(t,e,r),has:(t,e)=>!!Vi(t,e)||n.has(t,e)}));/**
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
 */class Wh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Xh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Xh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Lr="@firebase/app",bi="0.10.5";/**
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
 */const Jt=new Io("@firebase/app"),Yh="@firebase/app-compat",Jh="@firebase/analytics-compat",Zh="@firebase/analytics",tu="@firebase/app-check-compat",eu="@firebase/app-check",nu="@firebase/auth",ru="@firebase/auth-compat",su="@firebase/database",iu="@firebase/database-compat",ou="@firebase/functions",au="@firebase/functions-compat",hu="@firebase/installations",uu="@firebase/installations-compat",cu="@firebase/messaging",lu="@firebase/messaging-compat",du="@firebase/performance",fu="@firebase/performance-compat",pu="@firebase/remote-config",mu="@firebase/remote-config-compat",gu="@firebase/storage",_u="@firebase/storage-compat",yu="@firebase/firestore",Eu="@firebase/vertexai-preview",vu="@firebase/firestore-compat",Tu="firebase",Iu="10.12.2";/**
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
 */const Fr="[DEFAULT]",wu={[Lr]:"fire-core",[Yh]:"fire-core-compat",[Zh]:"fire-analytics",[Jh]:"fire-analytics-compat",[eu]:"fire-app-check",[tu]:"fire-app-check-compat",[nu]:"fire-auth",[ru]:"fire-auth-compat",[su]:"fire-rtdb",[iu]:"fire-rtdb-compat",[ou]:"fire-fn",[au]:"fire-fn-compat",[hu]:"fire-iid",[uu]:"fire-iid-compat",[cu]:"fire-fcm",[lu]:"fire-fcm-compat",[du]:"fire-perf",[fu]:"fire-perf-compat",[pu]:"fire-rc",[mu]:"fire-rc-compat",[gu]:"fire-gcs",[_u]:"fire-gcs-compat",[yu]:"fire-fst",[vu]:"fire-fst-compat",[Eu]:"fire-vertex","fire-js":"fire-js",[Tu]:"fire-js-all"};/**
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
 */const On=new Map,Au=new Map,Ur=new Map;function Di(n,t){try{n.container.addComponent(t)}catch(e){Jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ln(n){const t=n.name;if(Ur.has(t))return Jt.debug(`There were multiple attempts to register component ${t}.`),!1;Ur.set(t,n);for(const e of On.values())Di(e,n);for(const e of Au.values())Di(e,n);return!0}function Ru(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Cu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new To("app","Firebase",Cu);/**
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
 */class Su{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const Pu=Iu;function Ro(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Fr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(e||(e=vo()),!e)throw Ut.create("no-options");const o=On.get(i);if(o){if(xr(e,o.options)&&xr(r,o.config))return o;throw Ut.create("duplicate-app",{appName:i})}const h=new kh(i);for(const d of Ur.values())h.addComponent(d);const c=new Su(e,r,h);return On.set(i,c),c}function Vu(n=Fr){const t=On.get(n);if(!t&&n===Fr&&vo())return Ro();if(!t)throw Ut.create("no-app",{appName:n});return t}function ue(n,t,e){var r;let i=(r=wu[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),h=t.match(/\s|\//);if(o||h){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&h&&c.push("and"),h&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Jt.warn(c.join(" "));return}Ln(new Ye(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const bu="firebase-heartbeat-database",Du=1,Je="firebase-heartbeat-store";let Pr=null;function Co(){return Pr||(Pr=Kh(bu,Du,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Je)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ut.create("idb-open",{originalErrorMessage:n.message})})),Pr}async function Nu(n){try{const e=(await Co()).transaction(Je),r=await e.objectStore(Je).get(So(n));return await e.done,r}catch(t){if(t instanceof Ee)Jt.warn(t.message);else{const e=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(e.message)}}}async function Ni(n,t){try{const r=(await Co()).transaction(Je,"readwrite");await r.objectStore(Je).put(t,So(n)),await r.done}catch(e){if(e instanceof Ee)Jt.warn(e.message);else{const r=Ut.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(r.message)}}}function So(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ku=1024,xu=30*24*60*60*1e3;class Mu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lu(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ki();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(h=>h.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const c=new Date(h.date).valueOf();return Date.now()-c<=xu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ki(),{heartbeatsToSend:r,unsentEntries:i}=Ou(this._heartbeatsCache.heartbeats),o=Mn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function ki(){return new Date().toISOString().substring(0,10)}function Ou(n,t=ku){const e=[];let r=n.slice();for(const i of n){const o=e.find(h=>h.agent===i.agent);if(o){if(o.dates.push(i.date),xi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),xi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Lu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ah()?Rh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Nu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ni(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ni(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function xi(n){return Mn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Fu(n){Ln(new Ye("platform-logger",t=>new Wh(t),"PRIVATE")),Ln(new Ye("heartbeat",t=>new Mu(t),"PRIVATE")),ue(Lr,bi,n),ue(Lr,bi,"esm2017"),ue("fire-js","")}Fu("");var Uu="firebase",Bu="10.12.2";/**
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
 */ue(Uu,Bu,"app");var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,Po;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,I){for(var m=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)m[Pt-2]=arguments[Pt];return p.prototype[E].apply(y,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],E=v.g[2];var I=v.g[3],m=p+(I^g&(E^I))+y[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[2]+606105819&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[3]+3250441966&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[6]+2821735955&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[7]+4249261313&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[10]+4294925233&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[11]+2304563134&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[14]+2792965006&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[15]+1236535329&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(E^I&(g^E))+y[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[11]+643717713&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[0]+3921069994&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[15]+3634488961&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[4]+3889429448&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[3]+4107603335&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[8]+1163531501&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[7]+1735328473&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[12]+2368359562&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(g^E^I)+y[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[11]+1839030562&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[14]+4259657740&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[7]+4139469664&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[10]+3200236656&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[3]+3572445317&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[6]+76029189&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[15]+530742520&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[2]+3299628645&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(E^(g|~I))+y[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[14]+2878612391&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[5]+4237533241&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[10]+4293915773&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[1]+2240044497&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[6]+2734768916&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[13]+1309151649&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[2]+718787259&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=g;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)v[g++]=this.g[p]>>>y&255;return v};function o(v,p){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function h(v,p){this.h=p;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(g[E]=I,y=!1)}this.g=g}var c={};function d(v){return-128<=v&&128>v?o(v,function(p){return new h([p|0],0>p?-1:0)}):new h([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return D(f(-v));for(var p=[],g=1,y=0;v>=g;y++)p[y]=v/g|0,g*=4294967296;return new h(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=A,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),m=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(m))):(y=y.j(g),y=y.add(f(m)))}return y}var A=d(0),R=d(1),V=d(16777216);n=h.prototype,n.m=function(){if(L(this))return-D(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(L(this))return"-"+D(this).toString(v);for(var p=f(Math.pow(v,6)),g=this,y="";;){var E=rt(g,p).g;g=Y(g,E.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,k(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function L(v){return v.h==-1}n.l=function(v){return v=Y(this,v),L(v)?-1:k(v)?0:1};function D(v){for(var p=v.g.length,g=[],y=0;y<p;y++)g[y]=~v.g[y];return new h(g,~v.h).add(R)}n.abs=function(){return L(this)?D(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),m=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=m>>>16,I&=65535,m&=65535,g[E]=m<<16|I}return new h(g,g[g.length-1]&-2147483648?-1:0)};function Y(v,p){return v.add(D(p))}n.j=function(v){if(k(this)||k(v))return A;if(L(this))return L(v)?D(this).j(D(v)):D(D(this).j(v));if(L(v))return D(this.j(D(v)));if(0>this.l(V)&&0>v.l(V))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,m=this.i(y)&65535,Pt=v.i(E)>>>16,Ae=v.i(E)&65535;g[2*y+2*E]+=m*Ae,K(g,2*y+2*E),g[2*y+2*E+1]+=I*Ae,K(g,2*y+2*E+1),g[2*y+2*E+1]+=m*Pt,K(g,2*y+2*E+1),g[2*y+2*E+2]+=I*Pt,K(g,2*y+2*E+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new h(g,0)};function K(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function G(v,p){this.g=v,this.h=p}function rt(v,p){if(k(p))throw Error("division by zero");if(k(v))return new G(A,A);if(L(v))return p=rt(D(v),p),new G(D(p.g),D(p.h));if(L(p))return p=rt(v,D(p)),new G(D(p.g),p.h);if(30<v.g.length){if(L(v)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=p;0>=y.l(v);)g=St(g),y=St(y);var E=it(g,1),I=it(y,1);for(y=it(y,2),g=it(g,2);!k(y);){var m=I.add(y);0>=m.l(v)&&(E=E.add(g),I=m),y=it(y,1),g=it(g,1)}return p=Y(v,E.j(p)),new G(E,p)}for(E=A;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),m=I.j(p);L(m)||0<m.l(v);)g-=y,I=f(g),m=I.j(p);k(I)&&(I=R),E=E.add(I),v=Y(v,m)}return new G(E,v)}n.A=function(v){return rt(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&v.i(y);return new h(g,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|v.i(y);return new h(g,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^v.i(y);return new h(g,this.h^v.h)};function St(v){for(var p=v.g.length+1,g=[],y=0;y<p;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new h(g,v.h)}function it(v,p){var g=p>>5;p%=32;for(var y=v.g.length-g,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+g)>>>p|v.i(I+g+1)<<32-p:v.i(I+g);return new h(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Po=r,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=f,h.fromString=_,Wt=h}).apply(typeof Mi<"u"?Mi:typeof self<"u"?self:typeof window<"u"?window:{});var Rn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vo,bo,ze,Do,Dn,Br,No,ko,xo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,u){return s==Array.prototype||s==Object.prototype||(s[a]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rn=="object"&&Rn];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var u=r;s=s.split(".");for(var l=0;l<s.length-1;l++){var T=s[l];if(!(T in u))break t;u=u[T]}s=s[s.length-1],l=u[s],a=a(l),a!=l&&a!=null&&t(u,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var u=0,l=!1,T={next:function(){if(!l&&u<s.length){var w=u++;return{value:a(w,s[w]),done:!1}}return l=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},c=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,u){return s.call.apply(s.bind,arguments)}function A(s,a,u){if(!s)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,l),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function R(s,a,u){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,R.apply(null,arguments)}function V(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var l=u.slice();return l.push.apply(l,arguments),s.apply(this,l)}}function k(s,a){function u(){}u.prototype=a.prototype,s.aa=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(l,T,w){for(var S=Array(arguments.length-2),z=2;z<arguments.length;z++)S[z-2]=arguments[z];return a.prototype[T].apply(l,S)}}function L(s){const a=s.length;if(0<a){const u=Array(a);for(let l=0;l<a;l++)u[l]=s[l];return u}return[]}function D(s,a){for(let u=1;u<arguments.length;u++){const l=arguments[u];if(d(l)){const T=s.length||0,w=l.length||0;s.length=T+w;for(let S=0;S<w;S++)s[T+S]=l[S]}else s.push(l)}}class Y{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var St=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function it(s,a,u){for(const l in s)a.call(u,s[l],l,s)}function v(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function p(s){const a={};for(const u in s)a[u]=s[u];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let u,l;for(let T=1;T<arguments.length;T++){l=arguments[T];for(u in l)s[u]=l[u];for(let w=0;w<g.length;w++)u=g[w],Object.prototype.hasOwnProperty.call(l,u)&&(s[u]=l[u])}}function E(s){var a=1;s=s.split(":");const u=[];for(;0<a&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function I(s){c.setTimeout(()=>{throw s},0)}function m(){var s=Zn;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Pt{constructor(){this.h=this.g=null}add(a,u){const l=Ae.get();l.set(a,u),this.h?this.h.next=l:this.g=l,this.h=l}}var Ae=new Y(()=>new Va,s=>s.reset());class Va{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Ce=!1,Zn=new Pt,Rs=()=>{const s=c.Promise.resolve(void 0);Re=()=>{s.then(ba)}};var ba=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(u){I(u)}var a=Ae;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Ce=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ut(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var Da=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return s}();function Se(s,a){if(ut.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,l=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(St){t:{try{rt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement);this.relatedTarget=a,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Na[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Se.aa.h.call(this)}}k(Se,ut);var Na={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Pe="closure_listenable_"+(1e6*Math.random()|0),ka=0;function xa(s,a,u,l,T){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!l,this.ha=T,this.key=++ka,this.da=this.fa=!1}function hn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function un(s){this.src=s,this.g={},this.h=0}un.prototype.add=function(s,a,u,l,T){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var S=er(s,a,l,T);return-1<S?(a=s[S],u||(a.fa=!1)):(a=new xa(a,this.src,w,!!l,T),a.fa=u,s.push(a)),a};function tr(s,a){var u=a.type;if(u in s.g){var l=s.g[u],T=Array.prototype.indexOf.call(l,a,void 0),w;(w=0<=T)&&Array.prototype.splice.call(l,T,1),w&&(hn(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function er(s,a,u,l){for(var T=0;T<s.length;++T){var w=s[T];if(!w.da&&w.listener==a&&w.capture==!!u&&w.ha==l)return T}return-1}var nr="closure_lm_"+(1e6*Math.random()|0),rr={};function Cs(s,a,u,l,T){if(l&&l.once)return Ps(s,a,u,l,T);if(Array.isArray(a)){for(var w=0;w<a.length;w++)Cs(s,a[w],u,l,T);return null}return u=ar(u),s&&s[Pe]?s.K(a,u,f(l)?!!l.capture:!!l,T):Ss(s,a,u,!1,l,T)}function Ss(s,a,u,l,T,w){if(!a)throw Error("Invalid event type");var S=f(T)?!!T.capture:!!T,z=ir(s);if(z||(s[nr]=z=new un(s)),u=z.add(a,u,l,S,w),u.proxy)return u;if(l=Ma(),u.proxy=l,l.src=s,l.listener=u,s.addEventListener)Da||(T=S),T===void 0&&(T=!1),s.addEventListener(a.toString(),l,T);else if(s.attachEvent)s.attachEvent(bs(a.toString()),l);else if(s.addListener&&s.removeListener)s.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ma(){function s(u){return a.call(s.src,s.listener,u)}const a=Oa;return s}function Ps(s,a,u,l,T){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Ps(s,a[w],u,l,T);return null}return u=ar(u),s&&s[Pe]?s.L(a,u,f(l)?!!l.capture:!!l,T):Ss(s,a,u,!0,l,T)}function Vs(s,a,u,l,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)Vs(s,a[w],u,l,T);else l=f(l)?!!l.capture:!!l,u=ar(u),s&&s[Pe]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],u=er(w,u,l,T),-1<u&&(hn(w[u]),Array.prototype.splice.call(w,u,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=ir(s))&&(a=s.g[a.toString()],s=-1,a&&(s=er(a,u,l,T)),(u=-1<s?a[s]:null)&&sr(u))}function sr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Pe])tr(a.i,s);else{var u=s.type,l=s.proxy;a.removeEventListener?a.removeEventListener(u,l,s.capture):a.detachEvent?a.detachEvent(bs(u),l):a.addListener&&a.removeListener&&a.removeListener(l),(u=ir(a))?(tr(u,s),u.h==0&&(u.src=null,a[nr]=null)):hn(s)}}}function bs(s){return s in rr?rr[s]:rr[s]="on"+s}function Oa(s,a){if(s.da)s=!0;else{a=new Se(a,this);var u=s.listener,l=s.ha||s.src;s.fa&&sr(s),s=u.call(l,a)}return s}function ir(s){return s=s[nr],s instanceof un?s:null}var or="__closure_events_fn_"+(1e9*Math.random()>>>0);function ar(s){return typeof s=="function"?s:(s[or]||(s[or]=function(a){return s.handleEvent(a)}),s[or])}function ct(){Nt.call(this),this.i=new un(this),this.M=this,this.F=null}k(ct,Nt),ct.prototype[Pe]=!0,ct.prototype.removeEventListener=function(s,a,u,l){Vs(this,s,a,u,l)};function _t(s,a){var u,l=s.F;if(l)for(u=[];l;l=l.F)u.push(l);if(s=s.M,l=a.type||a,typeof a=="string")a=new ut(a,s);else if(a instanceof ut)a.target=a.target||s;else{var T=a;a=new ut(l,s),y(a,T)}if(T=!0,u)for(var w=u.length-1;0<=w;w--){var S=a.g=u[w];T=cn(S,l,!0,a)&&T}if(S=a.g=s,T=cn(S,l,!0,a)&&T,T=cn(S,l,!1,a)&&T,u)for(w=0;w<u.length;w++)S=a.g=u[w],T=cn(S,l,!1,a)&&T}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var u=s.g[a],l=0;l<u.length;l++)hn(u[l]);delete s.g[a],s.h--}}this.F=null},ct.prototype.K=function(s,a,u,l){return this.i.add(String(s),a,!1,u,l)},ct.prototype.L=function(s,a,u,l){return this.i.add(String(s),a,!0,u,l)};function cn(s,a,u,l){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==u){var z=S.listener,ot=S.ha||S.src;S.fa&&tr(s.i,S),T=z.call(ot,l)!==!1&&T}}return T&&!l.defaultPrevented}function Ds(s,a,u){if(typeof s=="function")u&&(s=R(s,u));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function Ns(s){s.g=Ds(()=>{s.g=null,s.i&&(s.i=!1,Ns(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class La extends Nt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ns(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ve(s){Nt.call(this),this.h=s,this.g={}}k(Ve,Nt);var ks=[];function xs(s){it(s.g,function(a,u){this.g.hasOwnProperty(u)&&sr(a)},s),s.g={}}Ve.prototype.N=function(){Ve.aa.N.call(this),xs(this)},Ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hr=c.JSON.stringify,Fa=c.JSON.parse,Ua=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function ur(){}ur.prototype.h=null;function Ms(s){return s.h||(s.h=s.i())}function Os(){}var be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cr(){ut.call(this,"d")}k(cr,ut);function lr(){ut.call(this,"c")}k(lr,ut);var $t={},Ls=null;function ln(){return Ls=Ls||new ct}$t.La="serverreachability";function Fs(s){ut.call(this,$t.La,s)}k(Fs,ut);function De(s){const a=ln();_t(a,new Fs(a))}$t.STAT_EVENT="statevent";function Us(s,a){ut.call(this,$t.STAT_EVENT,s),this.stat=a}k(Us,ut);function yt(s){const a=ln();_t(a,new Us(a,s))}$t.Ma="timingevent";function Bs(s,a){ut.call(this,$t.Ma,s),this.size=a}k(Bs,ut);function Ne(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function ke(){this.g=!0}ke.prototype.xa=function(){this.g=!1};function Ba(s,a,u,l,T,w){s.info(function(){if(s.g)if(w)for(var S="",z=w.split("&"),ot=0;ot<z.length;ot++){var q=z[ot].split("=");if(1<q.length){var lt=q[0];q=q[1];var dt=lt.split("_");S=2<=dt.length&&dt[1]=="type"?S+(lt+"="+q+"&"):S+(lt+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+l+") [attempt "+T+"]: "+a+`
`+u+`
`+S})}function ja(s,a,u,l,T,w,S){s.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+T+"]: "+a+`
`+u+`
`+w+" "+S})}function ne(s,a,u,l){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+$a(s,u)+(l?" "+l:"")})}function qa(s,a){s.info(function(){return"TIMEOUT: "+a})}ke.prototype.info=function(){};function $a(s,a){if(!s.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var l=u[s];if(!(2>l.length)){var T=l[1];if(Array.isArray(T)&&!(1>T.length)){var w=T[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<T.length;S++)T[S]=""}}}}return hr(u)}catch{return a}}var dn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},js={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dr;function fn(){}k(fn,ur),fn.prototype.g=function(){return new XMLHttpRequest},fn.prototype.i=function(){return{}},dr=new fn;function kt(s,a,u,l){this.j=s,this.i=a,this.l=u,this.R=l||1,this.U=new Ve(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qs}function qs(){this.i=null,this.g="",this.h=!1}var $s={},fr={};function pr(s,a,u){s.L=1,s.v=_n(Vt(a)),s.m=u,s.P=!0,zs(s,null)}function zs(s,a){s.F=Date.now(),pn(s),s.A=Vt(s.v);var u=s.A,l=s.R;Array.isArray(l)||(l=[String(l)]),si(u.i,"t",l),s.C=0,u=s.j.J,s.h=new qs,s.g=Ii(s.j,u?a:null,!s.m),0<s.O&&(s.M=new La(R(s.Y,s,s.g),s.O)),a=s.U,u=s.g,l=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(ks[0]=T.toString()),T=ks);for(var w=0;w<T.length;w++){var S=Cs(u,T[w],l||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),De(),Ba(s.i,s.u,s.A,s.l,s.R,s.m)}kt.prototype.ca=function(s){s=s.target;const a=this.M;a&&bt(s)==3?a.j():this.Y(s)},kt.prototype.Y=function(s){try{if(s==this.g)t:{const dt=bt(this.g);var a=this.g.Ba();const ie=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||li(this.g)))){this.J||dt!=4||a==7||(a==8||0>=ie?De(3):De(2)),mr(this);var u=this.g.Z();this.X=u;e:if(Hs(this)){var l=li(this.g);s="";var T=l.length,w=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zt(this),xe(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(l[a],{stream:!(w&&a==T-1)});l.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=u==200,ja(this.i,this.u,this.A,this.l,this.R,dt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var z,ot=this.g;if((z=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(z)){var q=z;break e}}q=null}if(u=q)ne(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gr(this,u);else{this.o=!1,this.s=3,yt(12),zt(this),xe(this);break t}}if(this.P){u=!0;let It;for(;!this.J&&this.C<S.length;)if(It=za(this,S),It==fr){dt==4&&(this.s=4,yt(14),u=!1),ne(this.i,this.l,null,"[Incomplete Response]");break}else if(It==$s){this.s=4,yt(15),ne(this.i,this.l,S,"[Invalid Chunk]"),u=!1;break}else ne(this.i,this.l,It,null),gr(this,It);if(Hs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||S.length!=0||this.h.h||(this.s=1,yt(16),u=!1),this.o=this.o&&u,!u)ne(this.i,this.l,S,"[Invalid Chunked Response]"),zt(this),xe(this);else if(0<S.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Ir(lt),lt.M=!0,yt(11))}}else ne(this.i,this.l,S,null),gr(this,S);dt==4&&zt(this),this.o&&!this.J&&(dt==4?yi(this.j,this):(this.o=!1,pn(this)))}else ah(this.g),u==400&&0<S.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),zt(this),xe(this)}}}catch{}finally{}};function Hs(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function za(s,a){var u=s.C,l=a.indexOf(`
`,u);return l==-1?fr:(u=Number(a.substring(u,l)),isNaN(u)?$s:(l+=1,l+u>a.length?fr:(a=a.slice(l,l+u),s.C=l+u,a)))}kt.prototype.cancel=function(){this.J=!0,zt(this)};function pn(s){s.S=Date.now()+s.I,Ks(s,s.I)}function Ks(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ne(R(s.ba,s),a)}function mr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}kt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(qa(this.i,this.A),this.L!=2&&(De(),yt(17)),zt(this),this.s=2,xe(this)):Ks(this,this.S-s)};function xe(s){s.j.G==0||s.J||yi(s.j,s)}function zt(s){mr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,xs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function gr(s,a){try{var u=s.j;if(u.G!=0&&(u.g==s||_r(u.h,s))){if(!s.K&&_r(u.h,s)&&u.G==3){try{var l=u.Da.g.parse(a)}catch{l=null}if(Array.isArray(l)&&l.length==3){var T=l;if(T[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)In(u),vn(u);else break t;Tr(u),yt(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ne(R(u.Za,u),6e3));if(1>=Ws(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Kt(u,11)}else if((s.K||u.g==s)&&In(u),!K(a))for(T=u.Da.g.parse(a),a=0;a<T.length;a++){let q=T[a];if(u.T=q[0],q=q[1],u.G==2)if(q[0]=="c"){u.K=q[1],u.ia=q[2];const lt=q[3];lt!=null&&(u.la=lt,u.j.info("VER="+u.la));const dt=q[4];dt!=null&&(u.Aa=dt,u.j.info("SVER="+u.Aa));const ie=q[5];ie!=null&&typeof ie=="number"&&0<ie&&(l=1.5*ie,u.L=l,u.j.info("backChannelRequestTimeoutMs_="+l)),l=u;const It=s.g;if(It){const An=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(An){var w=l.h;w.g||An.indexOf("spdy")==-1&&An.indexOf("quic")==-1&&An.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(yr(w,w.h),w.h=null))}if(l.D){const wr=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;wr&&(l.ya=wr,H(l.I,l.D,wr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),l=u;var S=s;if(l.qa=Ti(l,l.J?l.ia:null,l.W),S.K){Xs(l.h,S);var z=S,ot=l.L;ot&&(z.I=ot),z.B&&(mr(z),pn(z)),l.g=S}else gi(l);0<u.i.length&&Tn(u)}else q[0]!="stop"&&q[0]!="close"||Kt(u,7);else u.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?Kt(u,7):vr(u):q[0]!="noop"&&u.l&&u.l.ta(q),u.v=0)}}De(4)}catch{}}var Ha=class{constructor(s,a){this.g=s,this.map=a}};function Gs(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qs(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ws(s){return s.h?1:s.g?s.g.size:0}function _r(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function yr(s,a){s.g?s.g.add(a):s.h=a}function Xs(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Gs.prototype.cancel=function(){if(this.i=Ys(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ys(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.D);return a}return L(s.i)}function Ka(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],u=s.length,l=0;l<u;l++)a.push(s[l]);return a}a=[],u=0;for(l in s)a[u++]=s[l];return a}function Ga(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var u=0;u<s;u++)a.push(u);return a}a=[],u=0;for(const l in s)a[u++]=l;return a}}}function Js(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var u=Ga(s),l=Ka(s),T=l.length,w=0;w<T;w++)a.call(void 0,l[w],u&&u[w],s)}var Zs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qa(s,a){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var l=s[u].indexOf("="),T=null;if(0<=l){var w=s[u].substring(0,l);T=s[u].substring(l+1)}else w=s[u];a(w,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Ht(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Ht){this.h=s.h,mn(this,s.j),this.o=s.o,this.g=s.g,gn(this,s.s),this.l=s.l;var a=s.i,u=new Le;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),ti(this,u),this.m=s.m}else s&&(a=String(s).match(Zs))?(this.h=!1,mn(this,a[1]||"",!0),this.o=Me(a[2]||""),this.g=Me(a[3]||"",!0),gn(this,a[4]),this.l=Me(a[5]||"",!0),ti(this,a[6]||"",!0),this.m=Me(a[7]||"")):(this.h=!1,this.i=new Le(null,this.h))}Ht.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Oe(a,ei,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Oe(a,ei,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Oe(u,u.charAt(0)=="/"?Ya:Xa,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Oe(u,Za)),s.join("")};function Vt(s){return new Ht(s)}function mn(s,a,u){s.j=u?Me(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function gn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ti(s,a,u){a instanceof Le?(s.i=a,th(s.i,s.h)):(u||(a=Oe(a,Ja)),s.i=new Le(a,s.h))}function H(s,a,u){s.i.set(a,u)}function _n(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Me(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Oe(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,Wa),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Wa(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ei=/[#\/\?@]/g,Xa=/[#\?:]/g,Ya=/[#\?]/g,Ja=/[#\?@]/g,Za=/#/g;function Le(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function xt(s){s.g||(s.g=new Map,s.h=0,s.i&&Qa(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Le.prototype,n.add=function(s,a){xt(this),this.i=null,s=re(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function ni(s,a){xt(s),a=re(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ri(s,a){return xt(s),a=re(s,a),s.g.has(a)}n.forEach=function(s,a){xt(this),this.g.forEach(function(u,l){u.forEach(function(T){s.call(a,T,l,this)},this)},this)},n.na=function(){xt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let l=0;l<a.length;l++){const T=s[l];for(let w=0;w<T.length;w++)u.push(a[l])}return u},n.V=function(s){xt(this);let a=[];if(typeof s=="string")ri(this,s)&&(a=a.concat(this.g.get(re(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)a=a.concat(s[u])}return a},n.set=function(s,a){return xt(this),this.i=null,s=re(this,s),ri(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function si(s,a,u){ni(s,a),0<u.length&&(s.i=null,s.g.set(re(s,a),L(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var l=a[u];const w=encodeURIComponent(String(l)),S=this.V(l);for(l=0;l<S.length;l++){var T=w;S[l]!==""&&(T+="="+encodeURIComponent(String(S[l]))),s.push(T)}}return this.i=s.join("&")};function re(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function th(s,a){a&&!s.j&&(xt(s),s.i=null,s.g.forEach(function(u,l){var T=l.toLowerCase();l!=T&&(ni(this,l),si(this,T,u))},s)),s.j=a}function eh(s,a){const u=new ke;if(c.Image){const l=new Image;l.onload=V(Mt,u,"TestLoadImage: loaded",!0,a,l),l.onerror=V(Mt,u,"TestLoadImage: error",!1,a,l),l.onabort=V(Mt,u,"TestLoadImage: abort",!1,a,l),l.ontimeout=V(Mt,u,"TestLoadImage: timeout",!1,a,l),c.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=s}else a(!1)}function nh(s,a){const u=new ke,l=new AbortController,T=setTimeout(()=>{l.abort(),Mt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:l.signal}).then(w=>{clearTimeout(T),w.ok?Mt(u,"TestPingServer: ok",!0,a):Mt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Mt(u,"TestPingServer: error",!1,a)})}function Mt(s,a,u,l,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),l(u)}catch{}}function rh(){this.g=new Ua}function sh(s,a,u){const l=u||"";try{Js(s,function(T,w){let S=T;f(T)&&(S=hr(T)),a.push(l+w+"="+encodeURIComponent(S))})}catch(T){throw a.push(l+"type="+encodeURIComponent("_badmap")),T}}function Fe(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Fe,ur),Fe.prototype.g=function(){return new yn(this.l,this.j)},Fe.prototype.i=function(s){return function(){return s}}({});function yn(s,a){ct.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(yn,ct),n=yn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Be(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ue(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ii(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ii(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ue(this):Be(this),this.readyState==3&&ii(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ue(this))},n.Qa=function(s){this.g&&(this.response=s,Ue(this))},n.ga=function(){this.g&&Ue(this)};function Ue(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Be(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function Be(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(yn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function oi(s){let a="";return it(s,function(u,l){a+=l,a+=":",a+=u,a+=`\r
`}),a}function Er(s,a,u){t:{for(l in u){var l=!1;break t}l=!0}l||(u=oi(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):H(s,a,u))}function Q(s){ct.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Q,ct);var ih=/^https?$/i,oh=["POST","PUT"];n=Q.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,u,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dr.g(),this.v=this.o?Ms(this.o):Ms(dr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){ai(this,w);return}if(s=u||"",u=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var T in l)u.set(T,l[T]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const w of l.keys())u.set(w,l.get(w));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(u.keys()).find(w=>w.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(oh,a,void 0))||l||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of u)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ci(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){ai(this,w)}};function ai(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,hi(s),En(s)}function hi(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),En(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),En(this,!0)),Q.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ui(this):this.bb())},n.bb=function(){ui(this)};function ui(s){if(s.h&&typeof h<"u"&&(!s.v[1]||bt(s)!=4||s.Z()!=2)){if(s.u&&bt(s)==4)Ds(s.Ea,0,s);else if(_t(s,"readystatechange"),bt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var l;if(l=S===0){var T=String(s.D).match(Zs)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),l=!ih.test(T?T.toLowerCase():"")}u=l}if(u)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var w=2<bt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",hi(s)}}finally{En(s)}}}}function En(s,a){if(s.g){ci(s);const u=s.g,l=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_t(s,"ready");try{u.onreadystatechange=l}catch{}}}function ci(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function bt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Fa(a)}};function li(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function ah(s){const a={};s=(s.g&&2<=bt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<s.length;l++){if(K(s[l]))continue;var u=E(s[l]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const w=a[T]||[];a[T]=w,w.push(u)}v(a,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function je(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function di(s){this.Aa=0,this.i=[],this.j=new ke,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=je("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=je("baseRetryDelayMs",5e3,s),this.cb=je("retryDelaySeedMs",1e4,s),this.Wa=je("forwardChannelMaxRetries",2,s),this.wa=je("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Gs(s&&s.concurrentRequestLimit),this.Da=new rh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=di.prototype,n.la=8,n.G=1,n.connect=function(s,a,u,l){yt(0),this.W=s,this.H=a||{},u&&l!==void 0&&(this.H.OSID=u,this.H.OAID=l),this.F=this.X,this.I=Ti(this,null,this.W),Tn(this)};function vr(s){if(fi(s),s.G==3){var a=s.U++,u=Vt(s.I);if(H(u,"SID",s.K),H(u,"RID",a),H(u,"TYPE","terminate"),qe(s,u),a=new kt(s,s.j,a),a.L=2,a.v=_n(Vt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=Ii(a.j,null),a.g.ea(a.v)),a.F=Date.now(),pn(a)}vi(s)}function vn(s){s.g&&(Ir(s),s.g.cancel(),s.g=null)}function fi(s){vn(s),s.u&&(c.clearTimeout(s.u),s.u=null),In(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Tn(s){if(!Qs(s.h)&&!s.s){s.s=!0;var a=s.Ga;Re||Rs(),Ce||(Re(),Ce=!0),Zn.add(a,s),s.B=0}}function hh(s,a){return Ws(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ne(R(s.Ga,s,a),Ei(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new kt(this,this.j,s);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(T.H=w,w=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var l=this.i[u];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(a+=l,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=mi(this,T,a),u=Vt(this.I),H(u,"RID",s),H(u,"CVER",22),this.D&&H(u,"X-HTTP-Session-Id",this.D),qe(this,u),w&&(this.O?a="headers="+encodeURIComponent(String(oi(w)))+"&"+a:this.m&&Er(u,this.m,w)),yr(this.h,T),this.Ua&&H(u,"TYPE","init"),this.P?(H(u,"$req",a),H(u,"SID","null"),T.T=!0,pr(T,u,null)):pr(T,u,a),this.G=2}}else this.G==3&&(s?pi(this,s):this.i.length==0||Qs(this.h)||pi(this))};function pi(s,a){var u;a?u=a.l:u=s.U++;const l=Vt(s.I);H(l,"SID",s.K),H(l,"RID",u),H(l,"AID",s.T),qe(s,l),s.m&&s.o&&Er(l,s.m,s.o),u=new kt(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),a&&(s.i=a.D.concat(s.i)),a=mi(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),yr(s.h,u),pr(u,l,a)}function qe(s,a){s.H&&it(s.H,function(u,l){H(a,l,u)}),s.l&&Js({},function(u,l){H(a,l,u)})}function mi(s,a,u){u=Math.min(s.i.length,u);var l=s.l?R(s.l.Na,s.l,s):null;t:{var T=s.i;let w=-1;for(;;){const S=["count="+u];w==-1?0<u?(w=T[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let z=!0;for(let ot=0;ot<u;ot++){let q=T[ot].g;const lt=T[ot].map;if(q-=w,0>q)w=Math.max(0,T[ot].g-100),z=!1;else try{sh(lt,S,"req"+q+"_")}catch{l&&l(lt)}}if(z){l=S.join("&");break t}}}return s=s.i.splice(0,u),a.D=s,l}function gi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Re||Rs(),Ce||(Re(),Ce=!0),Zn.add(a,s),s.v=0}}function Tr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ne(R(s.Fa,s),Ei(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,_i(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ne(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),vn(this),_i(this))};function Ir(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function _i(s){s.g=new kt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Vt(s.qa);H(a,"RID","rpc"),H(a,"SID",s.K),H(a,"AID",s.T),H(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(a,"TO",s.ja),H(a,"TYPE","xmlhttp"),qe(s,a),s.m&&s.o&&Er(a,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=_n(Vt(a)),u.m=null,u.P=!0,zs(u,s)}n.Za=function(){this.C!=null&&(this.C=null,vn(this),Tr(this),yt(19))};function In(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function yi(s,a){var u=null;if(s.g==a){In(s),Ir(s),s.g=null;var l=2}else if(_r(s.h,a))u=a.D,Xs(s.h,a),l=1;else return;if(s.G!=0){if(a.o)if(l==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;l=ln(),_t(l,new Bs(l,u)),Tn(s)}else gi(s);else if(T=a.s,T==3||T==0&&0<a.X||!(l==1&&hh(s,a)||l==2&&Tr(s)))switch(u&&0<u.length&&(a=s.h,a.i=a.i.concat(u)),T){case 1:Kt(s,5);break;case 4:Kt(s,10);break;case 3:Kt(s,6);break;default:Kt(s,2)}}}function Ei(s,a){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*a}function Kt(s,a){if(s.j.info("Error code "+a),a==2){var u=R(s.fb,s),l=s.Xa;const T=!l;l=new Ht(l||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||mn(l,"https"),_n(l),T?eh(l.toString(),u):nh(l.toString(),u)}else yt(2);s.G=0,s.l&&s.l.sa(a),vi(s),fi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function vi(s){if(s.G=0,s.ka=[],s.l){const a=Ys(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,L(s.i),s.i.length=0),s.l.ra()}}function Ti(s,a,u){var l=u instanceof Ht?Vt(u):new Ht(u);if(l.g!="")a&&(l.g=a+"."+l.g),gn(l,l.s);else{var T=c.location;l=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var w=new Ht(null);l&&mn(w,l),a&&(w.g=a),T&&gn(w,T),u&&(w.l=u),l=w}return u=s.D,a=s.ya,u&&a&&H(l,u,a),H(l,"VER",s.la),qe(s,l),l}function Ii(s,a,u){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Q(new Fe({eb:u})):new Q(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wi(){}n=wi.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function wn(){}wn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){ct.call(this),this.g=new di(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!K(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new se(this)}k(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){vr(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=hr(s),s=u);a.i.push(new Ha(a.Ya++,s)),a.G==3&&Tn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,vr(this.g),delete this.g,Tt.aa.N.call(this)};function Ai(s){cr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const u in a){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Ai,cr);function Ri(){lr.call(this),this.status=1}k(Ri,lr);function se(s){this.g=s}k(se,wi),se.prototype.ua=function(){_t(this.g,"a")},se.prototype.ta=function(s){_t(this.g,new Ai(s))},se.prototype.sa=function(s){_t(this.g,new Ri)},se.prototype.ra=function(){_t(this.g,"b")},wn.prototype.createWebChannel=wn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,xo=function(){return new wn},ko=function(){return ln()},No=$t,Br={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},dn.NO_ERROR=0,dn.TIMEOUT=8,dn.HTTP_ERROR=6,Dn=dn,js.COMPLETE="complete",Do=js,Os.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",ct.prototype.listen=ct.prototype.K,ze=Os,bo=Fe,Q.prototype.listenOnce=Q.prototype.L,Q.prototype.getLastError=Q.prototype.Ka,Q.prototype.getLastErrorCode=Q.prototype.Ba,Q.prototype.getStatus=Q.prototype.Z,Q.prototype.getResponseJson=Q.prototype.Oa,Q.prototype.getResponseText=Q.prototype.oa,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Ha,Vo=Q}).apply(typeof Rn<"u"?Rn:typeof self<"u"?self:typeof window<"u"?window:{});const Oi="@firebase/firestore";/**
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
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let ve="10.12.1";/**
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
 */const Zt=new Io("@firebase/firestore");function $e(){return Zt.logLevel}function b(n,...t){if(Zt.logLevel<=U.DEBUG){const e=t.map(rs);Zt.debug(`Firestore (${ve}): ${n}`,...e)}}function Dt(n,...t){if(Zt.logLevel<=U.ERROR){const e=t.map(rs);Zt.error(`Firestore (${ve}): ${n}`,...e)}}function fe(n,...t){if(Zt.logLevel<=U.WARN){const e=t.map(rs);Zt.warn(`Firestore (${ve}): ${n}`,...e)}}function rs(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function O(n="Unexpected state"){const t=`FIRESTORE (${ve}) INTERNAL ASSERTION FAILED: `+n;throw Dt(t),new Error(t)}function et(n,t){n||O()}function j(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ee{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Mo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ju{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class qu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class $u{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xt,t.enqueueRetryable(()=>i(this.currentUser))};const h=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),h()};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xt)}},0),h()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string"),new Mo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new pt(t)}}class zu{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Hu{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new zu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ku{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const h=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(et(typeof e.token=="string"),this.R=e.token,new Ku(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Qu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Wu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Qu(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function pe(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class vt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new vt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new vt(0,0))}static max(){return new M(new vt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ze{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(),r===void 0?r=t.length-e:r>t.length-e&&O(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ze.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ze?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),h=e.get(i);if(o<h)return-1;if(o>h)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends Ze{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Xu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Ze{construct(t,e,r){return new Et(t,e,r)}static isValidIdentifier(t){return Xu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let h=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else c==="`"?(h=!h,i++):c!=="."||h?(r+=c,i++):(o(),i++)}if(o(),h)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(X.fromString(t))}static fromName(t){return new x(X.fromString(t).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new X(t.slice()))}}function Yu(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=M.fromTimestamp(r===1e9?new vt(e+1,0):new vt(e,r));return new Bt(i,x.empty(),t)}function Ju(n){return new Bt(n.readTime,n.key,-1)}class Bt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Bt(M.min(),x.empty(),-1)}static max(){return new Bt(M.max(),x.empty(),-1)}}function Zu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
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
 */const tc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ec{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ss(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==tc)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,h=!1;t.forEach(c=>{++i,c.next(()=>{++o,h&&o===i&&e()},d=>r(d))}),h=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,h=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{h[f]=_,++c,c===o&&r(h)},_=>i(_))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function nc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function rn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class is{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}is.oe=-1;function $n(n){return n==null}function jr(n){return n===0&&1/n==-1/0}/**
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
 */function Li(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function zn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function rc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class J{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cn(this.root,t,this.comparator,!0)}}class Cn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new at(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,r,i,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fi(this.data.getIterator())}getIteratorFrom(t){return new Fi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class Fi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(t){this.fields=t,t.sort(Et.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new ht(Et.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return pe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Oo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Oo("Invalid base64 string: "+o):o}}(t);return new gt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let h=0;h<i.length;++h)o+=String.fromCharCode(i[h]);return o}(t);return new gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const sc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(et(!!n),typeof n=="string"){let t=0;const e=sc.exec(n);if(et(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function te(n){return typeof n=="string"?gt.fromBase64String(n):gt.fromUint8Array(n)}/**
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
 */function os(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function as(n){const t=n.mapValue.fields.__previous_value__;return os(t)?as(t):t}function tn(n){const t=jt(n.mapValue.fields.__local_write_time__.timestampValue);return new vt(t.seconds,t.nanos)}/**
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
 */class ic{constructor(t,e,r,i,o,h,c,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=h,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}}class en{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new en("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof en&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Sn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ee(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?os(n)?4:oc(n)?9007199254740991:10:O()}function Rt(n,t){if(n===t)return!0;const e=ee(n);if(e!==ee(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return tn(n).isEqual(tn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const h=jt(i.timestampValue),c=jt(o.timestampValue);return h.seconds===c.seconds&&h.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return te(i.bytesValue).isEqual(te(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const h=tt(i.doubleValue),c=tt(o.doubleValue);return h===c?jr(h)===jr(c):isNaN(h)&&isNaN(c)}return!1}(n,t);case 9:return pe(n.arrayValue.values||[],t.arrayValue.values||[],Rt);case 10:return function(i,o){const h=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Li(h)!==Li(c))return!1;for(const d in h)if(h.hasOwnProperty(d)&&(c[d]===void 0||!Rt(h[d],c[d])))return!1;return!0}(n,t);default:return O()}}function nn(n,t){return(n.values||[]).find(e=>Rt(e,t))!==void 0}function me(n,t){if(n===t)return 0;const e=ee(n),r=ee(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,h){const c=tt(o.integerValue||o.doubleValue),d=tt(h.integerValue||h.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,t);case 3:return Ui(n.timestampValue,t.timestampValue);case 4:return Ui(tn(n),tn(t));case 5:return $(n.stringValue,t.stringValue);case 6:return function(o,h){const c=te(o),d=te(h);return c.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,h){const c=o.split("/"),d=h.split("/");for(let f=0;f<c.length&&f<d.length;f++){const _=$(c[f],d[f]);if(_!==0)return _}return $(c.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,h){const c=$(tt(o.latitude),tt(h.latitude));return c!==0?c:$(tt(o.longitude),tt(h.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,h){const c=o.values||[],d=h.values||[];for(let f=0;f<c.length&&f<d.length;++f){const _=me(c[f],d[f]);if(_)return _}return $(c.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,h){if(o===Sn.mapValue&&h===Sn.mapValue)return 0;if(o===Sn.mapValue)return 1;if(h===Sn.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=h.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let A=0;A<d.length&&A<_.length;++A){const R=$(d[A],_[A]);if(R!==0)return R;const V=me(c[d[A]],f[_[A]]);if(V!==0)return V}return $(d.length,_.length)}(n.mapValue,t.mapValue);default:throw O()}}function Ui(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=jt(n),r=jt(t),i=$(e.seconds,r.seconds);return i!==0?i:$(e.nanos,r.nanos)}function ge(n){return qr(n)}function qr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=jt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return te(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=qr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const h of r)o?o=!1:i+=",",i+=`${h}:${qr(e.fields[h])}`;return i+"}"}(n.mapValue):O()}function $r(n){return!!n&&"integerValue"in n}function hs(n){return!!n&&"arrayValue"in n}function Bi(n){return!!n&&"nullValue"in n}function ji(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vr(n){return!!n&&"mapValue"in n}function Ge(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return zn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ge(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ge(n.arrayValue.values[e]);return t}return Object.assign({},n)}function oc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Vr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ge(e)}setAll(t){let e=Et.emptyPath(),r={},i=[];t.forEach((h,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=c.popLast()}h?r[c.lastSegment()]=Ge(h):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Vr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Rt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Vr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){zn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new wt(Ge(this.value))}}/**
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
 */class mt{constructor(t,e,r,i,o,h,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=h,this.documentState=c}static newInvalidDocument(t){return new mt(t,0,M.min(),M.min(),M.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new mt(t,1,e,M.min(),r,i,0)}static newNoDocument(t,e){return new mt(t,2,e,M.min(),M.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new mt(t,3,e,M.min(),M.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof mt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fn{constructor(t,e){this.position=t,this.inclusive=e}}function qi(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],h=n.position[i];if(o.field.isKeyField()?r=x.comparator(x.fromName(h.referenceValue),e.key):r=me(h,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function $i(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Rt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Un{constructor(t,e="asc"){this.field=t,this.dir=e}}function ac(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Lo{}class nt extends Lo{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new uc(t,e,r):e==="array-contains"?new dc(t,r):e==="in"?new fc(t,r):e==="not-in"?new pc(t,r):e==="array-contains-any"?new mc(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new cc(t,r):new lc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(me(e,this.value)):e!==null&&ee(this.value)===ee(e)&&this.matchesComparison(me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Lo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ct(t,e)}matches(t){return Fo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Fo(n){return n.op==="and"}function Uo(n){return hc(n)&&Fo(n)}function hc(n){for(const t of n.filters)if(t instanceof Ct)return!1;return!0}function zr(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+ge(n.value);if(Uo(n))return n.filters.map(t=>zr(t)).join(",");{const t=n.filters.map(e=>zr(e)).join(",");return`${n.op}(${t})`}}function Bo(n,t){return n instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&Rt(r.value,i.value)}(n,t):n instanceof Ct?function(r,i){return i instanceof Ct&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,h,c)=>o&&Bo(h,i.filters[c]),!0):!1}(n,t):void O()}function jo(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${ge(e.value)}`}(n):n instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(jo).join(" ,")+"}"}(n):"Filter"}class uc extends nt{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class cc extends nt{constructor(t,e){super(t,"in",e),this.keys=qo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class lc extends nt{constructor(t,e){super(t,"not-in",e),this.keys=qo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function qo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class dc extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hs(e)&&nn(e.arrayValue,this.value)}}class fc extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nn(this.value.arrayValue,e)}}class pc extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!nn(this.value.arrayValue,e)}}class mc extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>nn(this.value.arrayValue,r))}}/**
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
 */class gc{constructor(t,e=null,r=[],i=[],o=null,h=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=h,this.endAt=c,this.ue=null}}function zi(n,t=null,e=[],r=[],i=null,o=null,h=null){return new gc(n,t,e,r,i,o,h)}function us(n){const t=j(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>zr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),$n(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ge(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ge(r)).join(",")),t.ue=e}return t.ue}function cs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ac(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Bo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!$i(n.startAt,t.startAt)&&$i(n.endAt,t.endAt)}function Hr(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Hn{constructor(t,e=null,r=[],i=[],o=null,h="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=h,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _c(n,t,e,r,i,o,h,c){return new Hn(n,t,e,r,i,o,h,c)}function $o(n){return new Hn(n)}function Hi(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yc(n){return n.collectionGroup!==null}function Qe(n){const t=j(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(h){let c=new ht(Et.comparator);return h.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Un(o,r))}),e.has(Et.keyField().canonicalString())||t.ce.push(new Un(Et.keyField(),r))}return t.ce}function At(n){const t=j(n);return t.le||(t.le=Ec(t,Qe(n))),t.le}function Ec(n,t){if(n.limitType==="F")return zi(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Un(i.field,o)});const e=n.endAt?new Fn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fn(n.startAt.position,n.startAt.inclusive):null;return zi(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Kr(n,t,e){return new Hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Kn(n,t){return cs(At(n),At(t))&&n.limitType===t.limitType}function zo(n){return`${us(At(n))}|lt:${n.limitType}`}function oe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>jo(i)).join(", ")}]`),$n(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>ge(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>ge(i)).join(",")),`Target(${r})`}(At(n))}; limitType=${n.limitType})`}function Gn(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Qe(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(h,c,d){const f=qi(h,c,d);return h.inclusive?f<=0:f<0}(r.startAt,Qe(r),i)||r.endAt&&!function(h,c,d){const f=qi(h,c,d);return h.inclusive?f>=0:f>0}(r.endAt,Qe(r),i))}(n,t)}function vc(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ho(n){return(t,e)=>{let r=!1;for(const i of Qe(n)){const o=Tc(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Tc(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,h,c){const d=h.data.field(o),f=c.data.field(o);return d!==null&&f!==null?me(d,f):O()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
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
 */class Te{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){zn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return rc(this.inner)}size(){return this.innerSize}}/**
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
 */const Ic=new J(x.comparator);function qt(){return Ic}const Ko=new J(x.comparator);function He(...n){let t=Ko;for(const e of n)t=t.insert(e.key,e);return t}function wc(n){let t=Ko;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Qt(){return We()}function Go(){return We()}function We(){return new Te(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ac=new ht(x.comparator);function B(...n){let t=Ac;for(const e of n)t=t.add(e);return t}const Rc=new ht($);function Cc(){return Rc}/**
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
 */function Sc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(t)?"-0":t}}function Pc(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Qn{constructor(){this._=void 0}}function Vc(n,t,e){return n instanceof Gr?function(i,o){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&os(o)&&(o=as(o)),o&&(h.fields.__previous_value__=o),{mapValue:h}}(e,t):n instanceof Bn?Qo(n,t):n instanceof jn?Wo(n,t):function(i,o){const h=Dc(i,o),c=Ki(h)+Ki(i.Pe);return $r(h)&&$r(i.Pe)?Pc(c):Sc(i.serializer,c)}(n,t)}function bc(n,t,e){return n instanceof Bn?Qo(n,t):n instanceof jn?Wo(n,t):e}function Dc(n,t){return n instanceof Qr?function(r){return $r(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Gr extends Qn{}class Bn extends Qn{constructor(t){super(),this.elements=t}}function Qo(n,t){const e=Xo(t);for(const r of n.elements)e.some(i=>Rt(i,r))||e.push(r);return{arrayValue:{values:e}}}class jn extends Qn{constructor(t){super(),this.elements=t}}function Wo(n,t){let e=Xo(t);for(const r of n.elements)e=e.filter(i=>!Rt(i,r));return{arrayValue:{values:e}}}class Qr extends Qn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ki(n){return tt(n.integerValue||n.doubleValue)}function Xo(n){return hs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Nc(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Bn&&i instanceof Bn||r instanceof jn&&i instanceof jn?pe(r.elements,i.elements,Rt):r instanceof Qr&&i instanceof Qr?Rt(r.Pe,i.Pe):r instanceof Gr&&i instanceof Gr}(n.transform,t.transform)}class Yt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Yt}static exists(t){return new Yt(void 0,t)}static updateTime(t){return new Yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ls{}function Yo(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new xc(n.key,Yt.none()):new ds(n.key,n.data,Yt.none());{const e=n.data,r=wt.empty();let i=new ht(Et.comparator);for(let o of t.fields)if(!i.has(o)){let h=e.field(o);h===null&&o.length>1&&(o=o.popLast(),h=e.field(o)),h===null?r.delete(o):r.set(o,h),i=i.add(o)}return new Wn(n.key,r,new Ot(i.toArray()),Yt.none())}}function kc(n,t,e){n instanceof ds?function(i,o,h){const c=i.value.clone(),d=Qi(i.fieldTransforms,o,h.transformResults);c.setAll(d),o.convertToFoundDocument(h.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Wn?function(i,o,h){if(!Nn(i.precondition,o))return void o.convertToUnknownDocument(h.version);const c=Qi(i.fieldTransforms,o,h.transformResults),d=o.data;d.setAll(Jo(i)),d.setAll(c),o.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(n,t,e):function(i,o,h){o.convertToNoDocument(h.version).setHasCommittedMutations()}(0,t,e)}function Xe(n,t,e,r){return n instanceof ds?function(o,h,c,d){if(!Nn(o.precondition,h))return c;const f=o.value.clone(),_=Wi(o.fieldTransforms,d,h);return f.setAll(_),h.convertToFoundDocument(h.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Wn?function(o,h,c,d){if(!Nn(o.precondition,h))return c;const f=Wi(o.fieldTransforms,d,h),_=h.data;return _.setAll(Jo(o)),_.setAll(f),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,h,c){return Nn(o.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):c}(n,t,e)}function Gi(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pe(r,i,(o,h)=>Nc(o,h))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ds extends ls{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wn extends ls{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Jo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Qi(n,t,e){const r=new Map;et(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],h=o.transform,c=t.data.field(o.field);r.set(o.field,bc(h,c,e[i]))}return r}function Wi(n,t,e){const r=new Map;for(const i of n){const o=i.transform,h=e.data.field(i.field);r.set(i.field,Vc(o,h,t))}return r}class xc extends ls{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Mc{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&kc(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Go();return this.mutations.forEach(i=>{const o=t.get(i.key),h=o.overlayedDocument;let c=this.applyToLocalView(h,o.mutatedFields);c=e.has(i.key)?null:c;const d=Yo(h,c);d!==null&&r.set(i.key,d),h.isValidDocument()||h.convertToNoDocument(M.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&pe(this.mutations,t.mutations,(e,r)=>Gi(e,r))&&pe(this.baseMutations,t.baseMutations,(e,r)=>Gi(e,r))}}/**
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
 */class Oc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Lc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Z,F;function Zo(n){if(n===void 0)return Dt("GRPC error has no .code"),P.UNKNOWN;switch(n){case Z.OK:return P.OK;case Z.CANCELLED:return P.CANCELLED;case Z.UNKNOWN:return P.UNKNOWN;case Z.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Z.INTERNAL:return P.INTERNAL;case Z.UNAVAILABLE:return P.UNAVAILABLE;case Z.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Z.NOT_FOUND:return P.NOT_FOUND;case Z.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Z.ABORTED:return P.ABORTED;case Z.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Z.DATA_LOSS:return P.DATA_LOSS;default:return O()}}(F=Z||(Z={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Fc(){return new TextEncoder}/**
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
 */const Uc=new Wt([4294967295,4294967295],0);function Xi(n){const t=Fc().encode(n),e=new Po;return e.update(t),new Uint8Array(e.digest())}function Yi(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Wt([e,r],0),new Wt([i,o],0)]}class fs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ke(`Invalid padding: ${e}`);if(r<0)throw new Ke(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ke(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ke(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Wt.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Wt.fromNumber(r)));return i.compare(Uc)===1&&(i=new Wt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Xi(t),[r,i]=Yi(e);for(let o=0;o<this.hashCount;o++){const h=this.Ee(r,i,o);if(!this.de(h))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),h=new fs(o,i,e);return r.forEach(c=>h.insert(c)),h}insert(t){if(this.Ie===0)return;const e=Xi(t),[r,i]=Yi(e);for(let o=0;o<this.hashCount;o++){const h=this.Ee(r,i,o);this.Ae(h)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ke extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xn{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,sn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Xn(M.min(),i,new J($),qt(),B())}}class sn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new sn(r,e,B(),B(),B())}}/**
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
 */class kn{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class ta{constructor(t,e){this.targetId=t,this.me=e}}class ea{constructor(t,e,r=gt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Ji{constructor(){this.fe=0,this.ge=to(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=B(),e=B(),r=B();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:O()}}),new sn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=to()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,et(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Bc{constructor(t){this.Le=t,this.Be=new Map,this.ke=qt(),this.qe=Zi(),this.Qe=new J($)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Hr(o))if(r===0){const h=new x(o.path);this.Ue(e,h,mt.newNoDocument(h,M.min()))}else et(r===1);else{const h=this.Ye(e);if(h!==r){const c=this.Ze(t),d=c?this.Xe(c,t,h):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let h,c;try{h=te(r).toUint8Array()}catch(d){if(d instanceof Oo)return fe("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new fs(h,i,o)}catch(d){return fe(d instanceof Ke?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const h=this.Le.tt(),c=`projects/${h.projectId}/databases/${h.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,h)=>{const c=this.Je(h);if(c){if(o.current&&Hr(c.target)){const d=new x(c.target.path);this.ke.get(d)!==null||this.it(h,d)||this.Ue(h,d,mt.newNoDocument(d,t))}o.be&&(e.set(h,o.Ce()),o.ve())}});let r=B();this.qe.forEach((o,h)=>{let c=!0;h.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,h)=>h.setReadTime(t));const i=new Xn(t,e,this.Qe,this.ke,r);return this.ke=qt(),this.qe=Zi(),this.Qe=new J($),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ji,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht($),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ji),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Zi(){return new J(x.comparator)}function to(){return new J(x.comparator)}const jc=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qc=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$c=(()=>({and:"AND",or:"OR"}))();class zc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Wr(n,t){return n.useProto3Json||$n(t)?t:{value:t}}function Hc(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Kc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ce(n){return et(!!n),M.fromTimestamp(function(e){const r=jt(e);return new vt(r.seconds,r.nanos)}(n))}function Gc(n,t){return Xr(n,t).canonicalString()}function Xr(n,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function na(n){const t=X.fromString(n);return et(aa(t)),t}function br(n,t){const e=na(t);if(e.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(sa(e))}function ra(n,t){return Gc(n.databaseId,t)}function Qc(n){const t=na(n);return t.length===4?X.emptyPath():sa(t)}function eo(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sa(n){return et(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Wc(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(et(_===void 0||typeof _=="string"),gt.fromBase64String(_||"")):(et(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),gt.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),h=t.targetChange.cause,c=h&&function(f){const _=f.code===void 0?P.UNKNOWN:Zo(f.code);return new N(_,f.message||"")}(h);e=new ea(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=br(n,r.document.name),o=ce(r.document.updateTime),h=r.document.createTime?ce(r.document.createTime):M.min(),c=new wt({mapValue:{fields:r.document.fields}}),d=mt.newFoundDocument(i,o,h,c),f=r.targetIds||[],_=r.removedTargetIds||[];e=new kn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=br(n,r.document),o=r.readTime?ce(r.readTime):M.min(),h=mt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new kn([],c,h.key,h)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=br(n,r.document),o=r.removedTargetIds||[];e=new kn([],o,i,null)}else{if(!("filter"in t))return O();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,h=new Lc(i,o),c=r.targetId;e=new ta(c,h)}}return e}function Xc(n,t){return{documents:[ra(n,t.path)]}}function Yc(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ra(n,i);const o=function(f){if(f.length!==0)return oa(Ct.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const h=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:ae(R.field),direction:tl(R.dir)}}(_))}(t.orderBy);h&&(e.structuredQuery.orderBy=h);const c=Wr(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function Jc(n){let t=Qc(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){et(r===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const R=ia(A);return R instanceof Ct&&Uo(R)?R.getFilters():[R]}(e.where));let h=[];e.orderBy&&(h=function(A){return A.map(R=>function(k){return new Un(he(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,$n(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(A){const R=!!A.before,V=A.values||[];return new Fn(V,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,V=A.values||[];return new Fn(V,R)}(e.endAt)),_c(t,i,h,o,c,"F",d,f)}function Zc(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ia(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=he(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=he(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=he(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=he(e.unaryFilter.field);return nt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return nt.create(he(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(r=>ia(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function tl(n){return jc[n]}function el(n){return qc[n]}function nl(n){return $c[n]}function ae(n){return{fieldPath:n.canonicalString()}}function he(n){return Et.fromServerFormat(n.fieldPath)}function oa(n){return n instanceof nt?function(e){if(e.op==="=="){if(ji(e.value))return{unaryFilter:{field:ae(e.field),op:"IS_NAN"}};if(Bi(e.value))return{unaryFilter:{field:ae(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ji(e.value))return{unaryFilter:{field:ae(e.field),op:"IS_NOT_NAN"}};if(Bi(e.value))return{unaryFilter:{field:ae(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ae(e.field),op:el(e.op),value:e.value}}}(n):n instanceof Ct?function(e){const r=e.getFilters().map(i=>oa(i));return r.length===1?r[0]:{compositeFilter:{op:nl(e.op),filters:r}}}(n):O()}function aa(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Lt{constructor(t,e,r,i,o=M.min(),h=M.min(),c=gt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(t){return new Lt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class rl{constructor(t){this.ct=t}}function sl(n){const t=Jc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Kr(t,t.limit,"L"):t}/**
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
 */class il{constructor(){this._n=new ol}addToCollectionParentIndex(t,e){return this._n.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Bt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Bt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class ol{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ht(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ht(X.comparator)).toArray()}}/**
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
 */class _e{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new _e(0)}static Ln(){return new _e(-1)}}/**
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
 */class al{constructor(){this.changes=new Te(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,mt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class hl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class ul{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Xe(r.mutation,i,Ot.empty(),vt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,B()).next(()=>r))}getLocalViewOfDocuments(t,e,r=B()){const i=Qt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let h=He();return o.forEach((c,d)=>{h=h.insert(c,d.overlayedDocument)}),h}))}getOverlayedDocuments(t,e){const r=Qt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,B()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((h,c)=>{e.set(h,c)})})}computeViews(t,e,r,i){let o=qt();const h=We(),c=function(){return We()}();return e.forEach((d,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof Wn)?o=o.insert(f.key,f):_!==void 0?(h.set(f.key,_.mutation.getFieldMask()),Xe(_.mutation,f,_.mutation.getFieldMask(),vt.now())):h.set(f.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>h.set(f,_)),e.forEach((f,_)=>{var A;return c.set(f,new hl(_,(A=h.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const r=We();let i=new J((h,c)=>h-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(h=>{for(const c of h)c.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||Ot.empty();_=c.applyToLocalView(f,_),r.set(d,_);const A=(i.get(c.batchId)||B()).add(d);i=i.insert(c.batchId,A)})}).next(()=>{const h=[],c=i.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,_=d.value,A=Go();_.forEach(R=>{if(!o.has(R)){const V=Yo(e.get(R),r.get(R));V!==null&&A.set(R,V),o=o.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(t,f,A))}return C.waitFor(h)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(h){return x.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):yc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const h=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(Qt());let c=-1,d=o;return h.next(f=>C.forEach(f,(_,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(_)?C.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,B())).next(_=>({batchId:c,changes:wc(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let i=He();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let h=He();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,d=>{const f=function(A,R){return new Hn(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(_=>{_.forEach((A,R)=>{h=h.insert(A,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(h=>(o=h,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(h=>{o.forEach((d,f)=>{const _=f.getKey();h.get(_)===null&&(h=h.insert(_,mt.newInvalidDocument(_)))});let c=He();return h.forEach((d,f)=>{const _=o.get(d);_!==void 0&&Xe(_.mutation,f,Ot.empty(),vt.now()),Gn(e,f)&&(c=c.insert(d,f))}),c})}}/**
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
 */class cl{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return C.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ce(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:sl(i.bundledQuery),readTime:ce(i.readTime)}}(e)),C.resolve()}}/**
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
 */class ll{constructor(){this.overlays=new J(x.comparator),this.hr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Qt();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=Qt(),o=e.length+1,h=new x(e.child("")),c=this.overlays.getIteratorFrom(h);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new J((f,_)=>f-_);const h=this.overlays.getIterator();for(;h.hasNext();){const f=h.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Qt(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=Qt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=i)););return C.resolve(c)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const h=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,h)}this.overlays=this.overlays.insert(r.key,new Oc(e,r));let o=this.hr.get(e);o===void 0&&(o=B(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
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
 */class ps{constructor(){this.Pr=new ht(st.Ir),this.Tr=new ht(st.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new st(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new st(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new x(new X([])),r=new st(e,t),i=new st(e,t+1),o=[];return this.Tr.forEachInRange([r,i],h=>{this.Ar(h),o.push(h.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new x(new X([])),r=new st(e,t),i=new st(e,t+1);let o=B();return this.Tr.forEachInRange([r,i],h=>{o=o.add(h.key)}),o}containsKey(t){const e=new st(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class st{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return x.comparator(t.key,e.key)||$(t.pr,e.pr)}static Er(t,e){return $(t.pr,e.pr)||x.comparator(t.key,e.key)}}/**
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
 */class dl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new ht(st.Ir)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new Mc(o,e,r,i);this.mutationQueue.push(h);for(const c of i)this.wr=this.wr.add(new st(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(h)}lookupMutationBatch(t,e){return C.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],h=>{const c=this.Sr(h.pr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht($);return e.forEach(i=>{const o=new st(i,0),h=new st(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,h],c=>{r=r.add(c.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const h=new st(new x(o),0);let c=new ht($);return this.wr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(d.pr)),!0)},h),C.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){et(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new st(e,0),i=this.wr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class fl{constructor(t){this.vr=t,this.docs=function(){return new J(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,h=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:h}),this.size+=h-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():mt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=qt();const h=e.path,c=new x(h.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!h.isPrefixOf(f.path))break;f.path.length>h.length+1||Zu(Ju(_),r)<=0||(i.has(_.key)||Gn(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){O()}Fr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new pl(this)}getSize(t){return C.resolve(this.size)}}class pl extends al{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class ml{constructor(t){this.persistence=t,this.Mr=new Te(e=>us(e),cs),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ps,this.targetCount=0,this.Lr=_e.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),C.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new _e(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.qn(e),C.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((h,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Mr.delete(h),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(h=>{o.push(i.markPotentiallyOrphaned(t,h))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Nr.containsKey(e))}}/**
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
 */class gl{constructor(t,e){this.Br={},this.overlays={},this.kr=new is(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new ml(this),this.indexManager=new il,this.remoteDocumentCache=function(i){return new fl(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new rl(e),this.$r=new cl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ll,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new dl(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){b("MemoryPersistence","Starting transaction:",t);const i=new _l(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class _l extends ec{constructor(t){super(),this.currentSequenceNumber=t}}class ms{constructor(t){this.persistence=t,this.zr=new ps,this.jr=null}static Hr(t){return new ms(t)}get Jr(){if(this.jr)return this.jr;throw O()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),C.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{const i=x.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,M.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return C.or([()=>C.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class gs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=B(),i=B();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new gs(t,e.fromCache,r,i)}}/**
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
 */class yl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class El{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return wh()?8:nc(Th())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(h=>{o.result=h}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(h=>{o.result=h})}).next(()=>{if(o.result)return;const h=new yl;return this.Ji(t,e,h).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,h,c.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?($e()<=U.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",oe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):($e()<=U.DEBUG&&b("QueryEngine","Query:",oe(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?($e()<=U.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",oe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,At(e))):C.resolve())}ji(t,e){if(Hi(e))return C.resolve(null);let r=At(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Kr(e,null,"F"),r=At(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const h=B(...o);return this.zi.getDocuments(t,h).next(c=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.Zi(e,c);return this.Xi(e,f,h,d.readTime)?this.ji(t,Kr(e,null,"F")):this.es(t,f,e,d)}))})))}Hi(t,e,r,i){return Hi(e)||i.isEqual(M.min())?C.resolve(null):this.zi.getDocuments(t,r).next(o=>{const h=this.Zi(e,o);return this.Xi(e,h,r,i)?C.resolve(null):($e()<=U.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),oe(e)),this.es(t,h,e,Yu(i,-1)).next(c=>c))})}Zi(t,e){let r=new ht(Ho(t));return e.forEach((i,o)=>{Gn(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return $e()<=U.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",oe(e)),this.zi.getDocumentsMatchingQuery(t,e,Bt.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(h=>{o=o.insert(h.key,h)}),o))}}/**
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
 */class vl{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new J($),this.rs=new Te(o=>us(o),cs),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ul(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Tl(n,t,e,r){return new vl(n,t,e,r)}async function ha(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const h=[],c=[];let d=B();for(const f of i){h.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next(f=>({us:f,removedBatchIds:h,addedBatchIds:c}))})})}function ua(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Il(n,t){const e=j(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const h=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const c=[];t.targetChanges.forEach((_,A)=>{const R=i.get(A);if(!R)return;c.push(e.Qr.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Qr.addMatchingKeys(o,_.addedDocuments,A)));let V=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?V=V.withResumeToken(gt.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):_.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(_.resumeToken,r)),i=i.insert(A,V),function(L,D,Y){return L.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(R,V,_)&&c.push(e.Qr.updateTargetData(o,V))});let d=qt(),f=B();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(wl(o,h,t.documentUpdates).next(_=>{d=_.cs,f=_.ls})),!r.isEqual(M.min())){const _=e.Qr.getLastRemoteSnapshotVersion(o).next(A=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(_)}return C.waitFor(c).next(()=>h.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.ns=i,o))}function wl(n,t,e){let r=B(),i=B();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let h=qt();return e.forEach((c,d)=>{const f=o.get(c);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),d.isNoDocument()&&d.version.isEqual(M.min())?(t.removeEntry(c,d.readTime),h=h.insert(c,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),h=h.insert(c,d)):b("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",d.version)}),{cs:h,ls:i}})}function Al(n,t){const e=j(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(o=>o?(i=o,C.resolve(i)):e.Qr.allocateTargetId(r).next(h=>(i=new Lt(t,h,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Yr(n,t,e){const r=j(n),i=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,h=>r.persistence.referenceDelegate.removeTarget(h,i))}catch(h){if(!rn(h))throw h;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${h}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function no(n,t,e){const r=j(n);let i=M.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",h=>function(d,f,_){const A=j(d),R=A.rs.get(_);return R!==void 0?C.resolve(A.ns.get(R)):A.Qr.getTargetData(f,_)}(r,h,At(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(h,c.targetId).next(d=>{o=d})}).next(()=>r.ts.getDocumentsMatchingQuery(h,t,e?i:M.min(),e?o:B())).next(c=>(Rl(r,vc(t),c),{documents:c,hs:o})))}function Rl(n,t,e){let r=n.ss.get(t)||M.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class ro{constructor(){this.activeTargetIds=Cc()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cl{constructor(){this.no=new ro,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ro,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Sl{io(t){}shutdown(){}}/**
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
 */class so{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pn=null;function Dr(){return Pn===null?Pn=function(){return 268435456+Math.round(2147483648*Math.random())}():Pn++,"0x"+Pn.toString(16)}/**
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
 */const Pl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Vl{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const ft="WebChannelConnection";class bl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,h){const c=Dr(),d=this.vo(e,r.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${c}:`,d,i);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,h),this.Mo(e,d,f,i).then(_=>(b("RestConnection",`Received RPC '${e}' ${c}: `,_),_),_=>{throw fe("RestConnection",`RPC '${e}' ${c} failed with error: `,_,"url: ",d,"request:",i),_})}xo(e,r,i,o,h,c){return this.Co(e,r,i,o,h)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ve}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,h)=>e[h]=o),i&&i.headers.forEach((o,h)=>e[h]=o)}vo(e,r){const i=Pl[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=Dr();return new Promise((h,c)=>{const d=new Vo;d.setWithCredentials(!0),d.listenOnce(Do.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Dn.NO_ERROR:const _=d.getResponseJson();b(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),h(_);break;case Dn.TIMEOUT:b(ft,`RPC '${t}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Dn.HTTP_ERROR:const A=d.getStatus();if(b(ft,`RPC '${t}' ${o} failed with status:`,A,"response text:",d.getResponseText()),A>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const k=function(D){const Y=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(Y)>=0?Y:P.UNKNOWN}(V.status);c(new N(k,V.message))}else c(new N(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{b(ft,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);b(ft,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",f,r,15)})}Oo(t,e,r){const i=Dr(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],h=xo(),c=ko(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new bo({})),this.Fo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");b(ft,`Creating RPC '${t}' stream ${i}: ${_}`,d);const A=h.createWebChannel(_,d);let R=!1,V=!1;const k=new Vl({lo:D=>{V?b(ft,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(b(ft,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),b(ft,`RPC '${t}' stream ${i} sending:`,D),A.send(D))},ho:()=>A.close()}),L=(D,Y,K)=>{D.listen(Y,G=>{try{K(G)}catch(rt){setTimeout(()=>{throw rt},0)}})};return L(A,ze.EventType.OPEN,()=>{V||(b(ft,`RPC '${t}' stream ${i} transport opened.`),k.mo())}),L(A,ze.EventType.CLOSE,()=>{V||(V=!0,b(ft,`RPC '${t}' stream ${i} transport closed`),k.po())}),L(A,ze.EventType.ERROR,D=>{V||(V=!0,fe(ft,`RPC '${t}' stream ${i} transport errored:`,D),k.po(new N(P.UNAVAILABLE,"The operation could not be completed")))}),L(A,ze.EventType.MESSAGE,D=>{var Y;if(!V){const K=D.data[0];et(!!K);const G=K,rt=G.error||((Y=G[0])===null||Y===void 0?void 0:Y.error);if(rt){b(ft,`RPC '${t}' stream ${i} received error:`,rt);const St=rt.status;let it=function(g){const y=Z[g];if(y!==void 0)return Zo(y)}(St),v=rt.message;it===void 0&&(it=P.INTERNAL,v="Unknown error status: "+St+" with message "+rt.message),V=!0,k.po(new N(it,v)),A.close()}else b(ft,`RPC '${t}' stream ${i} received:`,K),k.yo(K)}}),L(c,No.STAT_EVENT,D=>{D.stat===Br.PROXY?b(ft,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===Br.NOPROXY&&b(ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function Nr(){return typeof document<"u"?document:null}/**
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
 */function ca(n){return new zc(n,!0)}/**
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
 */class la{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Dl{constructor(t,e,r,i,o,h,c,d){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new la(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Dt(e.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nl extends Dl{constructor(t,e,r,i,o,h){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,h),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=Wc(this.serializer,t),r=function(o){if(!("targetChange"in o))return M.min();const h=o.targetChange;return h.targetIds&&h.targetIds.length?M.min():h.readTime?ce(h.readTime):M.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=eo(this.serializer),e.addTarget=function(o,h){let c;const d=h.target;if(c=Hr(d)?{documents:Xc(o,d)}:{query:Yc(o,d)._t},c.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){c.resumeToken=Kc(o,h.resumeToken);const f=Wr(o,h.expectedCount);f!==null&&(c.expectedCount=f)}else if(h.snapshotVersion.compareTo(M.min())>0){c.readTime=Hc(o,h.snapshotVersion.toTimestamp());const f=Wr(o,h.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=Zc(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=eo(this.serializer),e.removeTarget=t,this.i_(e)}}/**
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
 */class kl extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,h])=>this.connection.Co(t,Xr(e,r),i,o,h)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,c])=>this.connection.xo(t,Xr(e,r),i,h,c,o)).catch(h=>{throw h.name==="FirebaseError"?(h.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new N(P.UNKNOWN,h.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class xl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Dt(e),this.y_=!1):b("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Ml{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(h=>{r.enqueueAndForget(async()=>{an(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=j(d);f.M_.add(4),await on(f),f.N_.set("Unknown"),f.M_.delete(4),await Yn(f)}(this))})}),this.N_=new xl(r,i)}}async function Yn(n){if(an(n))for(const t of n.x_)await t(!0)}async function on(n){for(const t of n.x_)await t(!1)}function da(n,t){const e=j(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),vs(e)?Es(e):Ie(e).Xo()&&ys(e,t))}function _s(n,t){const e=j(n),r=Ie(e);e.F_.delete(t),r.Xo()&&fa(e,t),e.F_.size===0&&(r.Xo()?r.n_():an(e)&&e.N_.set("Unknown"))}function ys(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ie(n).P_(t)}function fa(n,t){n.L_.xe(t),Ie(n).I_(t)}function Es(n){n.L_=new Bc({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ie(n).start(),n.N_.w_()}function vs(n){return an(n)&&!Ie(n).Zo()&&n.F_.size>0}function an(n){return j(n).M_.size===0}function pa(n){n.L_=void 0}async function Ol(n){n.N_.set("Online")}async function Ll(n){n.F_.forEach((t,e)=>{ys(n,t)})}async function Fl(n,t){pa(n),vs(n)?(n.N_.D_(t),Es(n)):n.N_.set("Unknown")}async function Ul(n,t,e){if(n.N_.set("Online"),t instanceof ea&&t.state===2&&t.cause)try{await async function(i,o){const h=o.cause;for(const c of o.targetIds)i.F_.has(c)&&(await i.remoteSyncer.rejectListen(c,h),i.F_.delete(c),i.L_.removeTarget(c))}(n,t)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await io(n,r)}else if(t instanceof kn?n.L_.Ke(t):t instanceof ta?n.L_.He(t):n.L_.We(t),!e.isEqual(M.min()))try{const r=await ua(n.localStore);e.compareTo(r)>=0&&await function(o,h){const c=o.L_.rt(h);return c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.F_.get(f);_&&o.F_.set(f,_.withResumeToken(d.resumeToken,h))}}),c.targetMismatches.forEach((d,f)=>{const _=o.F_.get(d);if(!_)return;o.F_.set(d,_.withResumeToken(gt.EMPTY_BYTE_STRING,_.snapshotVersion)),fa(o,d);const A=new Lt(_.target,d,f,_.sequenceNumber);ys(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await io(n,r)}}async function io(n,t,e){if(!rn(t))throw t;n.M_.add(1),await on(n),n.N_.set("Offline"),e||(e=()=>ua(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Yn(n)})}async function oo(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=an(e);e.M_.add(3),await on(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Yn(e)}async function Bl(n,t){const e=j(n);t?(e.M_.delete(2),await Yn(e)):t||(e.M_.add(2),await on(e),e.N_.set("Unknown"))}function Ie(n){return n.B_||(n.B_=function(e,r,i){const o=j(e);return o.f_(),new Nl(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:Ol.bind(null,n),To:Ll.bind(null,n),Ao:Fl.bind(null,n),h_:Ul.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),vs(n)?Es(n):n.N_.set("Unknown")):(await n.B_.stop(),pa(n))})),n.B_}/**
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
 */class Ts{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const h=Date.now()+r,c=new Ts(t,e,h,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ma(n,t){if(Dt("AsyncQueue",`${t}: ${n}`),rn(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class le{constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=He(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new le(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof le)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new le;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ao{constructor(){this.q_=new J(x.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):O():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ye{constructor(t,e,r,i,o,h,c,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=h,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const h=[];return e.forEach(c=>{h.push({type:0,doc:c})}),new ye(t,e,le.emptySet(e),h,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Kn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class jl{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class ql{constructor(){this.queries=new Te(t=>zo(t),Kn),this.onlineState="Unknown",this.z_=new Set}}async function $l(n,t){const e=j(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(r=2):(o=new jl,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(h){const c=ma(h,`Initialization of query '${oe(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Is(e)}async function zl(n,t){const e=j(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const h=o.U_.indexOf(t);h>=0&&(o.U_.splice(h,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Hl(n,t){const e=j(n);let r=!1;for(const i of t){const o=i.query,h=e.queries.get(o);if(h){for(const c of h.U_)c.H_(i)&&(r=!0);h.K_=i}}r&&Is(e)}function Kl(n,t,e){const r=j(n),i=r.queries.get(t);if(i)for(const o of i.U_)o.onError(e);r.queries.delete(t)}function Is(n){n.z_.forEach(t=>{t.next()})}var Jr,ho;(ho=Jr||(Jr={})).J_="default",ho.Cache="cache";class Gl{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ye(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=ye.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Jr.Cache}}/**
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
 */class ga{constructor(t){this.key=t}}class _a{constructor(t){this.key=t}}class Ql{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=B(),this.mutatedKeys=B(),this.Ia=Ho(t),this.Ta=new le(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new ao,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,h=i,c=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,A)=>{const R=i.get(_),V=Gn(this.query,A)?A:null,k=!!R&&this.mutatedKeys.has(R.key),L=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let D=!1;R&&V?R.data.isEqual(V.data)?k!==L&&(r.track({type:3,doc:V}),D=!0):this.Ra(R,V)||(r.track({type:2,doc:V}),D=!0,(d&&this.Ia(V,d)>0||f&&this.Ia(V,f)<0)&&(c=!0)):!R&&V?(r.track({type:0,doc:V}),D=!0):R&&!V&&(r.track({type:1,doc:R}),D=!0,(d||f)&&(c=!0)),D&&(V?(h=h.add(V),o=L?o.add(_):o.delete(_)):(h=h.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const _=this.query.limitType==="F"?h.last():h.first();h=h.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Ta:h,Aa:r,Xi:c,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const h=t.Aa.Q_();h.sort((_,A)=>function(V,k){const L=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return L(V)-L(k)}(_.type,A.type)||this.Ia(_.doc,A.doc)),this.Va(r),i=i!=null&&i;const c=e&&!i?this.ma():[],d=this.Pa.size===0&&this.current&&!i?1:0,f=d!==this.ha;return this.ha=d,h.length!==0||f?{snapshot:new ye(this.query,t.Ta,o,h,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ao,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=B(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new _a(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new ga(r))}),e}pa(t){this.la=t.hs,this.Pa=B();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return ye.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Wl{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Xl{constructor(t){this.key=t,this.wa=!1}}class Yl{constructor(t,e,r,i,o,h){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=h,this.Sa={},this.ba=new Te(c=>zo(c),Kn),this.Da=new Map,this.Ca=new Set,this.va=new J(x.comparator),this.Fa=new Map,this.Ma=new ps,this.xa={},this.Oa=new Map,this.Na=_e.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Jl(n,t,e=!0){const r=Ia(n);let i;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await ya(r,t,e,!0),i}async function Zl(n,t){const e=Ia(n);await ya(e,t,!0,!1)}async function ya(n,t,e,r){const i=await Al(n.localStore,At(t)),o=i.targetId,h=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return r&&(c=await td(n,t,o,h==="current",i.resumeToken)),n.isPrimaryClient&&e&&da(n.remoteStore,i),c}async function td(n,t,e,r,i){n.Ba=(A,R,V)=>async function(L,D,Y,K){let G=D.view.da(Y);G.Xi&&(G=await no(L.localStore,D.query,!1).then(({documents:v})=>D.view.da(v,G)));const rt=K&&K.targetChanges.get(D.targetId),St=K&&K.targetMismatches.get(D.targetId)!=null,it=D.view.applyChanges(G,L.isPrimaryClient,rt,St);return co(L,D.targetId,it.fa),it.snapshot}(n,A,R,V);const o=await no(n.localStore,t,!0),h=new Ql(t,o.hs),c=h.da(o.documents),d=sn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=h.applyChanges(c,n.isPrimaryClient,d);co(n,e,f.fa);const _=new Wl(t,e,h);return n.ba.set(t,_),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),f.snapshot}async function ed(n,t,e){const r=j(n),i=r.ba.get(t),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(h=>!Kn(h,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Yr(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&_s(r.remoteStore,i.targetId),Zr(r,i.targetId)}).catch(ss)):(Zr(r,i.targetId),await Yr(r.localStore,i.targetId,!0))}async function nd(n,t){const e=j(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),_s(e.remoteStore,r.targetId))}async function Ea(n,t){const e=j(n);try{const r=await Il(e.localStore,t);t.targetChanges.forEach((i,o)=>{const h=e.Fa.get(o);h&&(et(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?h.wa=!0:i.modifiedDocuments.size>0?et(h.wa):i.removedDocuments.size>0&&(et(h.wa),h.wa=!1))}),await Ta(e,r,t)}catch(r){await ss(r)}}function uo(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,h)=>{const c=h.view.j_(t);c.snapshot&&i.push(c.snapshot)}),function(h,c){const d=j(h);d.onlineState=c;let f=!1;d.queries.forEach((_,A)=>{for(const R of A.U_)R.j_(c)&&(f=!0)}),f&&Is(d)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function rd(n,t,e){const r=j(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),o=i&&i.key;if(o){let h=new J(x.comparator);h=h.insert(o,mt.newNoDocument(o,M.min()));const c=B().add(o),d=new Xn(M.min(),new Map,new J($),h,c);await Ea(r,d),r.va=r.va.remove(o),r.Fa.delete(t),ws(r)}else await Yr(r.localStore,t,!1).then(()=>Zr(r,t,e)).catch(ss)}function Zr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||va(n,r)})}function va(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(_s(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),ws(n))}function co(n,t,e){for(const r of e)r instanceof ga?(n.Ma.addReference(r.key,t),sd(n,r)):r instanceof _a?(b("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||va(n,r.key)):O()}function sd(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(b("SyncEngine","New document in limbo: "+e),n.Ca.add(r),ws(n))}function ws(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new x(X.fromString(t)),r=n.Na.next();n.Fa.set(r,new Xl(e)),n.va=n.va.insert(e,r),da(n.remoteStore,new Lt(At($o(e.path)),r,"TargetPurposeLimboResolution",is.oe))}}async function Ta(n,t,e){const r=j(n),i=[],o=[],h=[];r.ba.isEmpty()||(r.ba.forEach((c,d)=>{h.push(r.Ba(d,t,e).then(f=>{if((f||e)&&r.isPrimaryClient){const _=f&&!f.fromCache;r.sharedClientState.updateQueryState(d.targetId,_?"current":"not-current")}if(f){i.push(f);const _=gs.Ki(d.targetId,f);o.push(_)}}))}),await Promise.all(h),r.Sa.h_(i),await async function(d,f){const _=j(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>C.forEach(f,R=>C.forEach(R.qi,V=>_.persistence.referenceDelegate.addReference(A,R.targetId,V)).next(()=>C.forEach(R.Qi,V=>_.persistence.referenceDelegate.removeReference(A,R.targetId,V)))))}catch(A){if(!rn(A))throw A;b("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const V=_.ns.get(R),k=V.snapshotVersion,L=V.withLastLimboFreeSnapshotVersion(k);_.ns=_.ns.insert(R,L)}}}(r.localStore,o))}async function id(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const r=await ha(e.localStore,t);e.currentUser=t,function(o,h){o.Oa.forEach(c=>{c.forEach(d=>{d.reject(new N(P.CANCELLED,h))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ta(e,r.us)}}function od(n,t){const e=j(n),r=e.Fa.get(t);if(r&&r.wa)return B().add(r.key);{let i=B();const o=e.Da.get(t);if(!o)return i;for(const h of o){const c=e.ba.get(h);i=i.unionWith(c.view.Ea)}return i}}function Ia(n){const t=j(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ea.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=od.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rd.bind(null,t),t.Sa.h_=Hl.bind(null,t.eventManager),t.Sa.ka=Kl.bind(null,t.eventManager),t}class lo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ca(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Tl(this.persistence,new El,t.initialUser,this.serializer)}createPersistence(t){return new gl(ms.Hr,this.serializer)}createSharedClientState(t){return new Cl}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ad{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=id.bind(null,this.syncEngine),await Bl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ql}()}createDatastore(t){const e=ca(t.databaseInfo.databaseId),r=function(o){return new bl(o)}(t.databaseInfo);return function(o,h,c,d){return new kl(o,h,c,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,h,c){return new Ml(r,i,o,h,c)}(this.localStore,this.datastore,t.asyncQueue,e=>uo(this.syncEngine,e,0),function(){return so.D()?new so:new Sl}())}createSyncEngine(t,e){return function(i,o,h,c,d,f,_){const A=new Yl(i,o,h,c,d,f);return _&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=j(r);b("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await on(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class hd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Dt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class ud{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=Wu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{b("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(b("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ma(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function kr(n,t){n.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ha(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function fo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await ld(n);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>oo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>oo(t.remoteStore,i)),n._onlineComponents=t}function cd(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ld(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await kr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!cd(e))throw e;fe("Error using user provided cache. Falling back to memory cache: "+e),await kr(n,new lo)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await kr(n,new lo);return n._offlineComponents}async function dd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await fo(n,n._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await fo(n,new ad))),n._onlineComponents}async function fd(n){const t=await dd(n),e=t.eventManager;return e.onListen=Jl.bind(null,t.syncEngine),e.onUnlisten=ed.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Zl.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=nd.bind(null,t.syncEngine),e}function pd(n,t,e={}){const r=new Xt;return n.asyncQueue.enqueueAndForget(async()=>function(o,h,c,d,f){const _=new hd({next:R=>{h.enqueueAndForget(()=>zl(o,A)),R.fromCache&&d.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new Gl(c,_,{includeMetadataChanges:!0,ra:!0});return $l(o,A)}(await fd(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function wa(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const po=new Map;/**
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
 */function md(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function gd(n,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function mo(n){if(x.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _d(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O()}function ts(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=_d(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class go{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}gd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wa((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class As{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new go({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new go(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ju;switch(r.type){case"firstParty":return new Hu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=po.get(e);r&&(b("ComponentProvider","Removing Datastore"),po.delete(e),r.terminate())}(this),Promise.resolve()}}function yd(n,t,e,r={}){var i;const o=(n=ts(n,As))._getSettings(),h=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==h&&fe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:h,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=pt.MOCK_USER;else{c=vh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new pt(f)}n._authCredentials=new qu(new Mo(c,d))}}/**
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
 */class Jn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Jn(this.firestore,t,this._query)}}class we{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new de(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new we(this.firestore,t,this._key)}}class de extends Jn{constructor(t,e,r){super(t,e,$o(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new we(this.firestore,null,new x(t))}withConverter(t){return new de(this.firestore,t,this._path)}}function Ed(n,t,...e){if(n=Vh(n),md("collection","path",t),n instanceof As){const r=X.fromString(t,...e);return mo(r),new de(n,null,r)}{if(!(n instanceof we||n instanceof de))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return mo(r),new de(n.firestore,null,r)}}/**
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
 */class vd{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new la(this,"async_queue_retry"),this.hu=()=>{const e=Nr();e&&b("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Nr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Nr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Xt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!rn(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(h){let c=h.message||"";return h.stack&&(c=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),c}(r);throw Dt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=Ts.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&O()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Aa extends As{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new vd}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ra(this),this._firestoreClient.terminate()}}function Td(n,t){const e=typeof n=="object"?n:Vu(),r=typeof n=="string"?n:t||"(default)",i=Ru(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=yh("firestore");o&&yd(i,...o)}return i}function Id(n){return n._firestoreClient||Ra(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ra(n){var t,e,r;const i=n._freezeSettings(),o=function(c,d,f,_){return new ic(c,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,wa(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new ud(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class qn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qn(gt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new qn(gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ca{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class wd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}const Ad=new RegExp("[~\\*/\\[\\]]");function Rd(n,t,e){if(t.search(Ad)>=0)throw _o(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ca(...t.split("."))._internalPath}catch{throw _o(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function _o(n,t,e,r,i){const o=r&&!r.isEmpty(),h=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(o||h)&&(d+=" (found",o&&(d+=` in field ${r}`),h&&(d+=` in document ${i}`),d+=")"),new N(P.INVALID_ARGUMENT,c+n+d)}/**
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
 */class Sa{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Cd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pa("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Cd extends Sa{data(){return super.data()}}function Pa(n,t){return typeof t=="string"?Rd(n,t):t instanceof Ca?t._internalPath:t._delegate._internalPath}/**
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
 */function Sd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pd{convertValue(t,e="none"){switch(ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(te(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return zn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new wd(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=as(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(tn(t));default:return null}}convertTimestamp(t){const e=jt(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);et(aa(r));const i=new en(r.get(1),r.get(3)),o=new x(r.popFirst(5));return i.isEqual(e)||Dt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class Vn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vd extends Sa{constructor(t,e,r,i,o,h){super(t,e,r,i,h),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new xn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Pa("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class xn extends Vd{data(t={}){return super.data(t)}}class bd{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Vn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new xn(this._firestore,this._userDataWriter,r.key,r,new Vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let h=0;return i._snapshot.docChanges.map(c=>{const d=new xn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Vn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:h++}})}{let h=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const d=new xn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Vn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return c.type!==0&&(f=h.indexOf(c.doc.key),h=h.delete(c.doc.key)),c.type!==1&&(h=h.add(c.doc),_=h.indexOf(c.doc.key)),{type:Dd(c.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Dd(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Nd extends Pd{constructor(t){super(),this.firestore=t}convertBytes(t){return new qn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new we(this.firestore,null,e)}}function kd(n){n=ts(n,Jn);const t=ts(n.firestore,Aa),e=Id(t),r=new Nd(t);return Sd(n._query),pd(e,n._query).then(i=>new bd(t,r,n,i))}(function(t,e=!0){(function(i){ve=i})(Pu),Ln(new Ye("firestore",(r,{instanceIdentifier:i,options:o})=>{const h=r.getProvider("app").getImmediate(),c=new Aa(new $u(r.getProvider("auth-internal")),new Gu(r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new en(f.options.projectId,_)}(h,i),h);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ue(Oi,"4.6.3",t),ue(Oi,"4.6.3","esm2017")})();const xd={apiKey:"AIzaSyBIZanYfhnUbm8BTgfHJbYd-CMWLa-lWWk",authDomain:"deep-dives-weekly.firebaseapp.com",projectId:"deep-dives-weekly",storageBucket:"deep-dives-weekly.appspot.com",messagingSenderId:"872280320528",appId:"1:872280320528:web:bdcdbd1dcbd305e2f5f895"},Md=Ro(xd),Od=Td(Md);function Ld({record:n}){const[t,e]=bn.useState(!0),r=o=>{const h=o.toDate();return h.getDate()+"/"+h.getMonth()+"/"+h.getFullYear()},i=(o,h)=>({id:h,primary:o[0],secondary:o[1],warning:o[2],anomaly:o[3],hazard:o[4]});return W.jsxs("div",{className:"record",children:[W.jsx("h1",{children:n.Title}),n["Completion Time"]&&W.jsxs(W.Fragment,{children:[W.jsxs("h2",{style:{color:"yellow"},children:["Completed in: ",n["Completion Time"]]}),t?W.jsx("button",{onClick:()=>e(!1),className:"record-btn",children:"Show More +"}):W.jsxs("div",{className:"record-expand",children:[W.jsxs("div",{className:"record-details",children:["Biome: ",n.Biome,W.jsx("b",{}),"Type: ",n.Type,W.jsx("b",{}),"Date: ",r(n.Date)]}),W.jsxs("div",{className:"player-list",children:[W.jsx("p",{children:"Players:"}),n.Team.map(o=>W.jsx("p",{children:o}))]}),W.jsxs("div",{className:"stage-container",children:[W.jsx(Ar,{stage:i(n["Stage 1"],1)}),W.jsx(Ar,{stage:i(n["Stage 2"],2)}),W.jsx(Ar,{stage:i(n["Stage 3"],3)})]}),W.jsx("br",{}),W.jsx("button",{onClick:()=>e(!0),className:"record-btn",children:"Show Less -"})]})]})]})}function $d(){const[n,t]=bn.useState([{Title:"Loading Records..."}]);bn.useEffect(()=>{e()},[]);const e=bn.useCallback(async()=>{try{let r=await kd(Ed(Od,"Dive Records"));t(r.docs.map(i=>({...i.data(),id:i.id})))}catch(r){console.error(r)}});return W.jsxs("div",{className:"record-list",children:[n.map(r=>W.jsx(Ld,{record:r})),W.jsx("button",{onClick:()=>console.log("add record"),className:"record-btn",style:{width:"100%"},children:"Add Record"})]})}export{$d as default};
