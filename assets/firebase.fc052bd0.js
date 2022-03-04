/**
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
 */const Gu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zu=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(n[l],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ju=function(t){try{return Yu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Xu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function V(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Br(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(V())}function qr(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qu(){return V().indexOf("Electron/")>=0}function Hr(){const t=V();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zu(){return V().indexOf("MSAppHost/")>=0}/**
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
 */const el="FirebaseError";class ke extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=el,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dt.prototype.create)}}class Dt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?tl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ke(i,a,s)}}function tl(t,e){return t.replace(nl,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const nl=/\{\$([^}]+)}/g;function sl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function In(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Kr(r)&&Kr(o)){if(!In(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Kr(t){return t!==null&&typeof t=="object"}/**
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
 */function Ot(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function il(t,e){const n=new rl(t,e);return n.subscribe.bind(n)}class rl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ol(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=$s),i.error===void 0&&(i.error=$s),i.complete===void 0&&(i.complete=$s);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ol(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $s(){}/**
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
 */function se(t){return t&&t._delegate?t._delegate:t}class $e{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Be="[DEFAULT]";/**
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
 */class al{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ul(e))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Be){return this.instances.has(e)}getOptions(e=Be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cl(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Be){return this.component?this.component.multipleInstances?e:Be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cl(t){return t===Be?void 0:t}function ul(t){return t.instantiationMode==="EAGER"}/**
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
 */class ll{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new al(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const hl={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},dl=R.INFO,fl={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},pl=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=fl[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bs{constructor(e){this.name=e,this._logLevel=dl,this._logHandler=pl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}/**
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
 */class gl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ml(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ml(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qs="@firebase/app",Wr="0.7.13";/**
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
 */const js=new Bs("@firebase/app"),yl="@firebase/app-compat",vl="@firebase/analytics-compat",wl="@firebase/analytics",Tl="@firebase/app-check-compat",_l="@firebase/app-check",El="@firebase/auth",Il="@firebase/auth-compat",Sl="@firebase/database",Al="@firebase/database-compat",kl="@firebase/functions",bl="@firebase/functions-compat",Cl="@firebase/installations",Rl="@firebase/installations-compat",Nl="@firebase/messaging",Dl="@firebase/messaging-compat",Ol="@firebase/performance",Pl="@firebase/performance-compat",Ll="@firebase/remote-config",Ml="@firebase/remote-config-compat",Ul="@firebase/storage",xl="@firebase/storage-compat",Fl="@firebase/firestore",Vl="@firebase/firestore-compat",$l="firebase",Bl="9.6.3";/**
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
 */const Gr="[DEFAULT]",ql={[qs]:"fire-core",[yl]:"fire-core-compat",[wl]:"fire-analytics",[vl]:"fire-analytics-compat",[_l]:"fire-app-check",[Tl]:"fire-app-check-compat",[El]:"fire-auth",[Il]:"fire-auth-compat",[Sl]:"fire-rtdb",[Al]:"fire-rtdb-compat",[kl]:"fire-fn",[bl]:"fire-fn-compat",[Cl]:"fire-iid",[Rl]:"fire-iid-compat",[Nl]:"fire-fcm",[Dl]:"fire-fcm-compat",[Ol]:"fire-perf",[Pl]:"fire-perf-compat",[Ll]:"fire-rc",[Ml]:"fire-rc-compat",[Ul]:"fire-gcs",[xl]:"fire-gcs-compat",[Fl]:"fire-fst",[Vl]:"fire-fst-compat","fire-js":"fire-js",[$l]:"fire-js-all"};/**
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
 */const Sn=new Map,Hs=new Map;function jl(t,e){try{t.container.addComponent(e)}catch(n){js.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rt(t){const e=t.name;if(Hs.has(e))return js.debug(`There were multiple attempts to register component ${e}.`),!1;Hs.set(e,t);for(const n of Sn.values())jl(n,t);return!0}function An(t,e){return t.container.getProvider(e)}/**
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
 */const Hl={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},kn=new Dt("app","Firebase",Hl);/**
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
 */class Kl{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const ot=Bl;function Wl(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Gr,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw kn.create("bad-app-name",{appName:String(s)});const i=Sn.get(s);if(i){if(In(t,i.options)&&In(n,i.config))return i;throw kn.create("duplicate-app",{appName:s})}const r=new ll(s);for(const a of Hs.values())r.addComponent(a);const o=new Kl(t,n,r);return Sn.set(s,o),o}function Ks(t=Gr){const e=Sn.get(t);if(!e)throw kn.create("no-app",{appName:t});return e}function fe(t,e,n){var s;let i=(s=ql[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),js.warn(a.join(" "));return}rt(new $e(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */function Gl(t){rt(new $e("platform-logger",e=>new gl(e),"PRIVATE")),fe(qs,Wr,t),fe(qs,Wr,"esm2017"),fe("fire-js","")}Gl("");var zl="firebase",Yl="9.6.3";/**
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
 */fe(zl,Yl,"app");var Jl=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},m,Ws=Ws||{},T=Jl||self;function bn(){}function Gs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Pt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Xl(t){return Object.prototype.hasOwnProperty.call(t,zs)&&t[zs]||(t[zs]=++Ql)}var zs="closure_uid_"+(1e9*Math.random()>>>0),Ql=0;function Zl(t,e,n){return t.call.apply(t.bind,arguments)}function eh(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function j(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?j=Zl:j=eh,j.apply(null,arguments)}function Cn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function H(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function be(){this.s=this.s,this.o=this.o}var th=0,nh={};be.prototype.s=!1;be.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),th!=0)){var t=Xl(this);delete nh[t]}};be.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Yr=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function sh(t){e:{var e=zh;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Jr(t){return Array.prototype.concat.apply([],arguments)}function Ys(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Rn(t){return/^[\s\xa0]*$/.test(t)}var Xr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Z(t,e){return t.indexOf(e)!=-1}function Js(t,e){return t<e?-1:t>e?1:0}var ee;e:{var Qr=T.navigator;if(Qr){var Zr=Qr.userAgent;if(Zr){ee=Zr;break e}}ee=""}function Xs(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function eo(t){const e={};for(const n in t)e[n]=t[n];return e}var to="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function no(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<to.length;r++)n=to[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Qs(t){return Qs[" "](t),t}Qs[" "]=bn;function ih(t){var e=ah;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var rh=Z(ee,"Opera"),at=Z(ee,"Trident")||Z(ee,"MSIE"),so=Z(ee,"Edge"),Zs=so||at,io=Z(ee,"Gecko")&&!(Z(ee.toLowerCase(),"webkit")&&!Z(ee,"Edge"))&&!(Z(ee,"Trident")||Z(ee,"MSIE"))&&!Z(ee,"Edge"),oh=Z(ee.toLowerCase(),"webkit")&&!Z(ee,"Edge");function ro(){var t=T.document;return t?t.documentMode:void 0}var Nn;e:{var ei="",ti=function(){var t=ee;if(io)return/rv:([^\);]+)(\)|;)/.exec(t);if(so)return/Edge\/([\d\.]+)/.exec(t);if(at)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(oh)return/WebKit\/(\S+)/.exec(t);if(rh)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ti&&(ei=ti?ti[1]:""),at){var ni=ro();if(ni!=null&&ni>parseFloat(ei)){Nn=String(ni);break e}}Nn=ei}var ah={};function ch(){return ih(function(){let t=0;const e=Xr(String(Nn)).split("."),n=Xr("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Js(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Js(i[2].length==0,r[2].length==0)||Js(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var si;if(T.document&&at){var oo=ro();si=oo||parseInt(Nn,10)||void 0}else si=void 0;var uh=si,lh=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{T.addEventListener("test",bn,e),T.removeEventListener("test",bn,e)}catch{}return t}();function J(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};function Lt(t,e){if(J.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(io){e:{try{Qs(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hh[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lt.Z.h.call(this)}}H(Lt,J);var hh={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),dh=0;function fh(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++dh,this.ca=this.fa=!1}function Dn(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function On(t){this.src=t,this.g={},this.h=0}On.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ri(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new fh(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function ii(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=zr(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Dn(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ri(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var oi="closure_lm_"+(1e6*Math.random()|0),ai={};function ao(t,e,n,s,i){if(s&&s.once)return uo(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ao(t,e[r],n,s,i);return null}return n=hi(n),t&&t[Mt]?t.N(e,n,Pt(s)?!!s.capture:!!s,i):co(t,e,n,!1,s,i)}function co(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Pt(i)?!!i.capture:!!i,a=ui(t);if(a||(t[oi]=a=new On(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=ph(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)lh||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(ho(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ph(){function t(n){return e.call(t.src,t.listener,n)}var e=gh;return t}function uo(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)uo(t,e[r],n,s,i);return null}return n=hi(n),t&&t[Mt]?t.O(e,n,Pt(s)?!!s.capture:!!s,i):co(t,e,n,!0,s,i)}function lo(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)lo(t,e[r],n,s,i);else s=Pt(s)?!!s.capture:!!s,n=hi(n),t&&t[Mt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ri(r,n,s,i),-1<n&&(Dn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ui(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ri(e,n,s,i)),(n=-1<t?e[t]:null)&&ci(n))}function ci(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Mt])ii(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ho(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ui(e))?(ii(n,t),n.h==0&&(n.src=null,e[oi]=null)):Dn(t)}}}function ho(t){return t in ai?ai[t]:ai[t]="on"+t}function gh(t,e){if(t.ca)t=!0;else{e=new Lt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&ci(t),t=n.call(s,e)}return t}function ui(t){return t=t[oi],t instanceof On?t:null}var li="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(t){return typeof t=="function"?t:(t[li]||(t[li]=function(e){return t.handleEvent(e)}),t[li])}function $(){be.call(this),this.i=new On(this),this.P=this,this.I=null}H($,be);$.prototype[Mt]=!0;$.prototype.removeEventListener=function(t,e,n,s){lo(this,t,e,n,s)};function K(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new J(e,t);else if(e instanceof J)e.target=e.target||t;else{var i=e;e=new J(s,t),no(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Pn(o,s,!0,e)&&i}if(o=e.g=t,i=Pn(o,s,!0,e)&&i,i=Pn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Pn(o,s,!1,e)&&i}$.prototype.M=function(){if($.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Dn(n[s]);delete t.g[e],t.h--}}this.I=null};$.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Pn(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ii(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var di=T.JSON.stringify;function mh(){var t=po;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yh{constructor(){this.h=this.g=null}add(e,n){const s=fo.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var fo=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vh,t=>t.reset());class vh{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wh(t){T.setTimeout(()=>{throw t},0)}function fi(t,e){pi||Th(),gi||(pi(),gi=!0),po.add(t,e)}var pi;function Th(){var t=T.Promise.resolve(void 0);pi=function(){t.then(_h)}}var gi=!1,po=new yh;function _h(){for(var t;t=mh();){try{t.h.call(t.g)}catch(n){wh(n)}var e=fo;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gi=!1}function Ln(t,e){$.call(this),this.h=t||1,this.g=e||T,this.j=j(this.kb,this),this.l=Date.now()}H(Ln,$);m=Ln.prototype;m.da=!1;m.S=null;m.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),K(this,"tick"),this.da&&(mi(this),this.start()))}};m.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mi(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}m.M=function(){Ln.Z.M.call(this),mi(this),delete this.g};function yi(t,e,n){if(typeof t=="function")n&&(t=j(t,n));else if(t&&typeof t.handleEvent=="function")t=j(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:T.setTimeout(t,e||0)}function go(t){t.g=yi(()=>{t.g=null,t.i&&(t.i=!1,go(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Eh extends be{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:go(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ut(t){be.call(this),this.h=t,this.g={}}H(Ut,be);var mo=[];function yo(t,e,n,s){Array.isArray(n)||(n&&(mo[0]=n.toString()),n=mo);for(var i=0;i<n.length;i++){var r=ao(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function vo(t){Xs(t.g,function(e,n){this.g.hasOwnProperty(n)&&ci(e)},t),t.g={}}Ut.prototype.M=function(){Ut.Z.M.call(this),vo(this)};Ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mn(){this.g=!0}Mn.prototype.Aa=function(){this.g=!1};function Ih(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Sh(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ct(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+kh(t,n)+(s?" "+s:"")})}function Ah(t,e){t.info(function(){return"TIMEOUT: "+e})}Mn.prototype.info=function(){};function kh(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return di(n)}catch{return e}}var qe={},wo=null;function Un(){return wo=wo||new $}qe.Ma="serverreachability";function To(t){J.call(this,qe.Ma,t)}H(To,J);function xt(t){const e=Un();K(e,new To(e,t))}qe.STAT_EVENT="statevent";function _o(t,e){J.call(this,qe.STAT_EVENT,t),this.stat=e}H(_o,J);function te(t){const e=Un();K(e,new _o(e,t))}qe.Na="timingevent";function Eo(t,e){J.call(this,qe.Na,t),this.size=e}H(Eo,J);function Ft(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){t()},e)}var xn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Io={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vi(){}vi.prototype.h=null;function So(t){return t.h||(t.h=t.i())}function Ao(){}var Vt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function wi(){J.call(this,"d")}H(wi,J);function Ti(){J.call(this,"c")}H(Ti,J);var _i;function Fn(){}H(Fn,vi);Fn.prototype.g=function(){return new XMLHttpRequest};Fn.prototype.i=function(){return{}};_i=new Fn;function $t(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Ut(this),this.P=bh,t=Zs?125:void 0,this.W=new Ln(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ko}function ko(){this.i=null,this.g="",this.h=!1}var bh=45e3,Ei={},Vn={};m=$t.prototype;m.setTimeout=function(t){this.P=t};function Ii(t,e,n){t.K=1,t.v=Hn(we(e)),t.s=n,t.U=!0,bo(t,null)}function bo(t,e){t.F=Date.now(),Bt(t),t.A=we(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Uo(n.h,"t",s),t.C=0,n=t.l.H,t.h=new ko,t.g=ra(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Eh(j(t.Ia,t,t.g),t.O)),yo(t.V,t.g,"readystatechange",t.gb),e=t.H?eo(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),xt(1),Ih(t.j,t.u,t.A,t.m,t.X,t.s)}m.gb=function(t){t=t.target;const e=this.L;e&&Te(t)==3?e.l():this.Ia(t)};m.Ia=function(t){try{if(t==this.g)e:{const l=Te(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Zs||this.g&&(this.h.h||this.g.ga()||zo(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?xt(3):xt(2)),$n(this);var n=this.g.ba();this.N=n;t:if(Co(this)){var s=zo(this.g);t="";var i=s.length,r=Te(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){je(this),qt(this);var o="";break t}this.h.i=new T.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Sh(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rn(a)){var u=a;break t}}u=null}if(n=u)ct(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Si(this,n);else{this.i=!1,this.o=3,te(12),je(this),qt(this);break e}}this.U?(Ro(this,l,o),Zs&&this.i&&l==3&&(yo(this.V,this.W,"tick",this.fb),this.W.start())):(ct(this.j,this.m,o,null),Si(this,o)),l==4&&je(this),this.i&&!this.I&&(l==4?ta(this.l,this):(this.i=!1,Bt(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,te(12)):(this.o=0,te(13)),je(this),qt(this)}}}catch{}finally{}};function Co(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Ro(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Ch(t,n),i==Vn){e==4&&(t.o=4,te(14),s=!1),ct(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ei){t.o=4,te(15),ct(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ct(t.j,t.m,i,null),Si(t,i);Co(t)&&i!=Vn&&i!=Ei&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,te(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mi(e),e.L=!0,te(11))):(ct(t.j,t.m,n,"[Invalid Chunked Response]"),je(t),qt(t))}m.fb=function(){if(this.g){var t=Te(this.g),e=this.g.ga();this.C<e.length&&($n(this),Ro(this,t,e),this.i&&t!=4&&Bt(this))}};function Ch(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Vn:(n=Number(e.substring(n,s)),isNaN(n)?Ei:(s+=1,s+n>e.length?Vn:(e=e.substr(s,n),t.C=s+n,e)))}m.cancel=function(){this.I=!0,je(this)};function Bt(t){t.Y=Date.now()+t.P,No(t,t.P)}function No(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ft(j(t.eb,t),e)}function $n(t){t.B&&(T.clearTimeout(t.B),t.B=null)}m.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ah(this.j,this.A),this.K!=2&&(xt(3),te(17)),je(this),this.o=2,qt(this)):No(this,this.Y-t)};function qt(t){t.l.G==0||t.I||ta(t.l,t)}function je(t){$n(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,mi(t.W),vo(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Si(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bi(n.i,t))){if(n.I=t.N,!t.J&&bi(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Jn(n),zn(n);else break e;Li(n),te(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ft(j(n.ab,n),6e3));if(1>=Vo(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else We(n,11)}else if((t.J||n.g==t)&&Jn(n),!Rn(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.i;!r.g&&(Z(y,"spdy")||Z(y,"quic")||Z(y,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ci(r,r.h),r.h=null))}if(s.D){const A=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.sa=A,P(s.F,s.D,A))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=ia(s,s.H?s.la:null,s.W),o.J){$o(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&($n(a),Bt(a)),s.g=o}else Zo(s);0<n.l.length&&Yn(n)}else u[0]!="stop"&&u[0]!="close"||We(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?We(n,7):Oi(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}xt(4)}catch{}}function Rh(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Gs(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ai(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Gs(t)||typeof t=="string")Yr(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Gs(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Rh(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function ut(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof ut)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}m=ut.prototype;m.R=function(){ki(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};m.T=function(){return ki(this),this.g.concat()};function ki(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];He(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],He(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}m.get=function(t,e){return He(this.h,t)?this.h[t]:e};m.set=function(t,e){He(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};m.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function He(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Do=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Nh(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ke){this.g=e!==void 0?e:t.g,Bn(this,t.j),this.s=t.s,qn(this,t.i),jn(this,t.m),this.l=t.l,e=t.h;var n=new Kt;n.i=e.i,e.g&&(n.g=new ut(e.g),n.h=e.h),Oo(this,n),this.o=t.o}else t&&(n=String(t).match(Do))?(this.g=!!e,Bn(this,n[1]||"",!0),this.s=jt(n[2]||""),qn(this,n[3]||"",!0),jn(this,n[4]),this.l=jt(n[5]||"",!0),Oo(this,n[6]||"",!0),this.o=jt(n[7]||"")):(this.g=!!e,this.h=new Kt(null,this.g))}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ht(e,Po,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ht(e,Po,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ht(n,n.charAt(0)=="/"?Mh:Lh,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ht(n,xh)),t.join("")};function we(t){return new Ke(t)}function Bn(t,e,n){t.j=n?jt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qn(t,e,n){t.i=n?jt(e,!0):e}function jn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Oo(t,e,n){e instanceof Kt?(t.h=e,Fh(t.h,t.g)):(n||(e=Ht(e,Uh)),t.h=new Kt(e,t.g))}function P(t,e,n){t.h.set(e,n)}function Hn(t){return P(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Dh(t){return t instanceof Ke?we(t):new Ke(t,void 0)}function Oh(t,e,n,s){var i=new Ke(null,void 0);return t&&Bn(i,t),e&&qn(i,e),n&&jn(i,n),s&&(i.l=s),i}function jt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ht(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ph),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ph(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Po=/[#\/\?@]/g,Lh=/[#\?:]/g,Mh=/[#\?]/g,Uh=/[#\?@]/g,xh=/#/g;function Kt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ce(t){t.g||(t.g=new ut,t.h=0,t.i&&Nh(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}m=Kt.prototype;m.add=function(t,e){Ce(this),this.i=null,t=lt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Lo(t,e){Ce(t),e=lt(t,e),He(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,He(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ki(t)))}function Mo(t,e){return Ce(t),e=lt(t,e),He(t.g.h,e)}m.forEach=function(t,e){Ce(this),this.g.forEach(function(n,s){Yr(n,function(i){t.call(e,i,s,this)},this)},this)};m.T=function(){Ce(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};m.R=function(t){Ce(this);var e=[];if(typeof t=="string")Mo(this,t)&&(e=Jr(e,this.g.get(lt(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Jr(e,t[n])}return e};m.set=function(t,e){return Ce(this),this.i=null,t=lt(this,t),Mo(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};m.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Uo(t,e,n){Lo(t,e),0<n.length&&(t.i=null,t.g.set(lt(t,e),Ys(n)),t.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function lt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Fh(t,e){e&&!t.j&&(Ce(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Lo(this,s),Uo(this,i,n))},t)),t.j=e}var Vh=class{constructor(t,e){this.h=t,this.g=e}};function xo(t){this.l=t||$h,T.PerformanceNavigationTiming?(t=T.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $h=10;function Fo(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vo(t){return t.h?1:t.g?t.g.size:0}function bi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ci(t,e){t.g?t.g.add(e):t.h=e}function $o(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}xo.prototype.cancel=function(){if(this.i=Bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bo(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ys(t.i)}function Ri(){}Ri.prototype.stringify=function(t){return T.JSON.stringify(t,void 0)};Ri.prototype.parse=function(t){return T.JSON.parse(t,void 0)};function Bh(){this.g=new Ri}function qh(t,e,n){const s=n||"";try{Ai(t,function(i,r){let o=i;Pt(i)&&(o=di(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function jh(t,e){const n=new Mn;if(T.Image){const s=new Image;s.onload=Cn(Kn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Cn(Kn,n,s,"TestLoadImage: error",!1,e),s.onabort=Cn(Kn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Cn(Kn,n,s,"TestLoadImage: timeout",!1,e),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Kn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Wt(t){this.l=t.$b||null,this.j=t.ib||!1}H(Wt,vi);Wt.prototype.g=function(){return new Wn(this.l,this.j)};Wt.prototype.i=function(t){return function(){return t}}({});function Wn(t,e){$.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ni,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(Wn,$);var Ni=0;m=Wn.prototype;m.open=function(t,e){if(this.readyState!=Ni)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zt(this)};m.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||T).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gt(this)),this.readyState=Ni};m.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zt(this)),this.g&&(this.readyState=3,zt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qo(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function qo(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}m.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gt(this):zt(this),this.readyState==3&&qo(this)}};m.Ua=function(t){this.g&&(this.response=this.responseText=t,Gt(this))};m.Ta=function(t){this.g&&(this.response=t,Gt(this))};m.ha=function(){this.g&&Gt(this)};function Gt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zt(t)}m.setRequestHeader=function(t,e){this.v.append(t,e)};m.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Hh=T.JSON.parse;function U(t){$.call(this),this.headers=new ut,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jo,this.K=this.L=!1}H(U,$);var jo="",Kh=/^https?$/i,Wh=["POST","PUT"];m=U.prototype;m.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_i.g(),this.C=this.u?So(this.u):So(_i),this.g.onreadystatechange=j(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Ho(this,r);return}t=n||"";const i=new ut(this.headers);s&&Ai(s,function(r,o){i.set(o,r)}),s=sh(i.T()),n=T.FormData&&t instanceof T.FormData,!(0<=zr(Wh,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Go(this),0<this.B&&((this.K=Gh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=j(this.pa,this)):this.A=yi(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Ho(this,r)}};function Gh(t){return at&&ch()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function zh(t){return t.toLowerCase()=="content-type"}m.pa=function(){typeof Ws!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function Ho(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ko(t),Gn(t)}function Ko(t){t.D||(t.D=!0,K(t,"complete"),K(t,"error"))}m.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,K(this,"complete"),K(this,"abort"),Gn(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gn(this,!0)),U.Z.M.call(this)};m.Fa=function(){this.s||(this.F||this.v||this.l?Wo(this):this.cb())};m.cb=function(){Wo(this)};function Wo(t){if(t.h&&typeof Ws!="undefined"&&(!t.C[1]||Te(t)!=4||t.ba()!=2)){if(t.v&&Te(t)==4)yi(t.Fa,0,t);else if(K(t,"readystatechange"),Te(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Do)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!Kh.test(i?i.toLowerCase():"")}n=s}if(n)K(t,"complete"),K(t,"success");else{t.m=6;try{var o=2<Te(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Ko(t)}}finally{Gn(t)}}}}function Gn(t,e){if(t.g){Go(t);const n=t.g,s=t.C[0]?bn:null;t.g=null,t.C=null,e||K(t,"ready");try{n.onreadystatechange=s}catch{}}}function Go(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(T.clearTimeout(t.A),t.A=null)}function Te(t){return t.g?t.g.readyState:0}m.ba=function(){try{return 2<Te(this)?this.g.status:-1}catch{return-1}};m.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Hh(e)}};function zo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jo:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}m.Da=function(){return this.m};m.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Yh(t){let e="";return Xs(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Di(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Yh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):P(t,e,n))}function Yt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Yo(t){this.za=0,this.l=[],this.h=new Mn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yt("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yt("baseRetryDelayMs",5e3,t),this.$a=Yt("retryDelaySeedMs",1e4,t),this.Ya=Yt("forwardChannelMaxRetries",2,t),this.ra=Yt("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new xo(t&&t.concurrentRequestLimit),this.Ca=new Bh,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}m=Yo.prototype;m.ma=8;m.G=1;function Oi(t){if(Jo(t),t.G==3){var e=t.V++,n=we(t.F);P(n,"SID",t.J),P(n,"RID",e),P(n,"TYPE","terminate"),Jt(t,n),e=new $t(t,t.h,e,void 0),e.K=2,e.v=Hn(we(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(e.v.toString(),"")),!n&&T.Image&&(new Image().src=e.v,n=!0),n||(e.g=ra(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Bt(e)}sa(t)}m.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function zn(t){t.g&&(Mi(t),t.g.cancel(),t.g=null)}function Jo(t){zn(t),t.u&&(T.clearTimeout(t.u),t.u=null),Jn(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&T.clearTimeout(t.m),t.m=null)}function Pi(t,e){t.l.push(new Vh(t.Za++,e)),t.G==3&&Yn(t)}function Yn(t){Fo(t.i)||t.m||(t.m=!0,fi(t.Ha,t),t.C=0)}function Jh(t,e){return Vo(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ft(j(t.Ha,t,e),na(t,t.C)),t.C++,!0)}m.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new $t(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=eo(r),no(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qo(this,i,e),n=we(this.F),P(n,"RID",t),P(n,"CVER",22),this.D&&P(n,"X-HTTP-Session-Id",this.D),Jt(this,n),this.o&&r&&Di(n,this.o,r),Ci(this.i,i),this.Ra&&P(n,"TYPE","init"),this.ja?(P(n,"$req",e),P(n,"SID","null"),i.$=!0,Ii(i,n,null)):Ii(i,n,e),this.G=2}}else this.G==3&&(t?Xo(this,t):this.l.length==0||Fo(this.i)||Xo(this))};function Xo(t,e){var n;e?n=e.m:n=t.V++;const s=we(t.F);P(s,"SID",t.J),P(s,"RID",n),P(s,"AID",t.U),Jt(t,s),t.o&&t.s&&Di(s,t.o,t.s),n=new $t(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Qo(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ci(t.i,n),Ii(n,s,e)}function Jt(t,e){t.j&&Ai({},function(n,s){P(e,s,n)})}function Qo(t,e,n){n=Math.min(t.l.length,n);var s=t.j?j(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{qh(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Zo(t){t.g||t.u||(t.Y=1,fi(t.Ga,t),t.A=0)}function Li(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ft(j(t.Ga,t),na(t,t.A)),t.A++,!0)}m.Ga=function(){if(this.u=null,ea(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ft(j(this.bb,this),t)}};m.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,te(10),zn(this),ea(this))};function Mi(t){t.B!=null&&(T.clearTimeout(t.B),t.B=null)}function ea(t){t.g=new $t(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=we(t.oa);P(e,"RID","rpc"),P(e,"SID",t.J),P(e,"CI",t.N?"0":"1"),P(e,"AID",t.U),Jt(t,e),P(e,"TYPE","xmlhttp"),t.o&&t.s&&Di(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Hn(we(e)),n.s=null,n.U=!0,bo(n,t)}m.ab=function(){this.v!=null&&(this.v=null,zn(this),Li(this),te(19))};function Jn(t){t.v!=null&&(T.clearTimeout(t.v),t.v=null)}function ta(t,e){var n=null;if(t.g==e){Jn(t),Mi(t),t.g=null;var s=2}else if(bi(t.i,e))n=e.D,$o(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Un(),K(s,new Eo(s,n,e,i)),Yn(t)}else Zo(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&Jh(t,e)||s==2&&Li(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:We(t,5);break;case 4:We(t,10);break;case 3:We(t,6);break;default:We(t,2)}}}function na(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function We(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=j(t.jb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Bn(n,"https"),Hn(n)),jh(n.toString(),s)}else te(2);t.G=0,t.j&&t.j.va(e),sa(t),Jo(t)}m.jb=function(t){t?(this.h.info("Successfully pinged google.com"),te(2)):(this.h.info("Failed to ping google.com"),te(1))};function sa(t){t.G=0,t.I=-1,t.j&&((Bo(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Ys(t.l),t.l.length=0),t.j.ua())}function ia(t,e,n){let s=Dh(n);if(s.i!="")e&&qn(s,e+"."+s.i),jn(s,s.m);else{const i=T.location;s=Oh(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Xs(t.aa,function(i,r){P(s,r,i)}),e=t.D,n=t.sa,e&&n&&P(s,e,n),P(s,"VER",t.ma),Jt(t,s),s}function ra(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new U(new Wt({ib:!0})):new U(t.qa),e.L=t.H,e}function oa(){}m=oa.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Oa=function(){};function Xn(){if(at&&!(10<=Number(uh)))throw Error("Environmental error: no available transport.")}Xn.prototype.g=function(t,e){return new ae(t,e)};function ae(t,e){$.call(this),this.g=new Yo(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Rn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ht(this)}H(ae,$);ae.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),fi(j(t.hb,t,e))),te(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ia(t,null,t.W),Yn(t)};ae.prototype.close=function(){Oi(this.g)};ae.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Pi(this.g,e)}else this.v?(e={},e.__data__=di(t),Pi(this.g,e)):Pi(this.g,t)};ae.prototype.M=function(){this.g.j=null,delete this.j,Oi(this.g),delete this.g,ae.Z.M.call(this)};function aa(t){wi.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}H(aa,wi);function ca(){Ti.call(this),this.status=1}H(ca,Ti);function ht(t){this.g=t}H(ht,oa);ht.prototype.xa=function(){K(this.g,"a")};ht.prototype.wa=function(t){K(this.g,new aa(t))};ht.prototype.va=function(t){K(this.g,new ca(t))};ht.prototype.ua=function(){K(this.g,"b")};Xn.prototype.createWebChannel=Xn.prototype.g;ae.prototype.send=ae.prototype.u;ae.prototype.open=ae.prototype.m;ae.prototype.close=ae.prototype.close;xn.NO_ERROR=0;xn.TIMEOUT=8;xn.HTTP_ERROR=6;Io.COMPLETE="complete";Ao.EventType=Vt;Vt.OPEN="a";Vt.CLOSE="b";Vt.ERROR="c";Vt.MESSAGE="d";$.prototype.listen=$.prototype.N;U.prototype.listenOnce=U.prototype.O;U.prototype.getLastError=U.prototype.La;U.prototype.getLastErrorCode=U.prototype.Da;U.prototype.getStatus=U.prototype.ba;U.prototype.getResponseJson=U.prototype.Qa;U.prototype.getResponseText=U.prototype.ga;U.prototype.send=U.prototype.ea;var Xh=function(){return new Xn},Qh=function(){return Un()},Ui=xn,Zh=Io,ed=qe,ua={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},td=Wt,Qn=Ao,nd=U;const la="@firebase/firestore";/**
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
 */class ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ie.UNAUTHENTICATED=new ie(null),ie.GOOGLE_CREDENTIALS=new ie("google-credentials-uid"),ie.FIRST_PARTY=new ie("first-party-uid"),ie.MOCK_USER=new ie("mock-user");/**
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
 */let dt="9.6.3";/**
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
 */const Ge=new Bs("@firebase/firestore");function ha(){return Ge.logLevel}function v(t,...e){if(Ge.logLevel<=R.DEBUG){const n=e.map(xi);Ge.debug(`Firestore (${dt}): ${t}`,...n)}}function Re(t,...e){if(Ge.logLevel<=R.ERROR){const n=e.map(xi);Ge.error(`Firestore (${dt}): ${t}`,...n)}}function da(t,...e){if(Ge.logLevel<=R.WARN){const n=e.map(xi);Ge.warn(`Firestore (${dt}): ${t}`,...n)}}function xi(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function I(t="Unexpected state"){const e=`FIRESTORE (${dt}) INTERNAL ASSERTION FAILED: `+t;throw Re(e),new Error(e)}function D(t,e){t||I()}function S(t,e){return t}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends ke{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ze{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class sd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class id{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ie.UNAUTHENTICATED))}shutdown(){}}class rd{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ze,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ze)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(D(typeof s.accessToken=="string"),new sd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return D(e===null||typeof e=="string"),new ie(e)}}class od{constructor(e,n,s){this.type="FirstParty",this.user=ie.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class ad{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new od(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ud{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=i=>{e.enqueueRetryable(()=>(r=>(r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`),n(r.token)))(i))};const s=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(D(typeof n.token=="string"),new cd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Fi{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.p(s),this.T=s=>n.writeSequenceNumber(s))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function ld(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */Fi.I=-1;class fa{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=ld(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function N(t,e){return t<e?-1:t>e?1:0}function ft(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ce(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new ce(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function pa(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ye(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ga(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Xt{constructor(e,n,s){n===void 0?n=0:n>e.length&&I(),s===void 0?s=e.length-n:s>e.length-n&&I(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Xt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class L extends Xt{construct(e,n,s){return new L(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new L(n)}static emptyPath(){return new L([])}}const hd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends Xt{construct(e,n,s){return new re(e,n,s)}static isValidIdentifier(e){return hd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new re(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new re(n)}static emptyPath(){return new re([])}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(re.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ft(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class W{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new W(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new W(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}W.EMPTY_BYTE_STRING=new W("");const dd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ne(t){if(D(!!t),typeof t=="string"){let e=0;const n=dd.exec(t);if(D(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:x(t.seconds),nanos:x(t.nanos)}}function x(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pt(t){return typeof t=="string"?W.fromBase64String(t):W.fromUint8Array(t)}/**
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
 */function ma(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ya(t){const e=t.mapValue.fields.__previous_value__;return ma(e)?ya(e):e}function Zt(t){const e=Ne(t.mapValue.fields.__local_write_time__.timestampValue);return new ce(e.seconds,e.nanos)}/**
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
 */function gt(t){return t==null}function Zn(t){return t===0&&1/t==-1/0}function fd(t){return typeof t=="number"&&Number.isInteger(t)&&!Zn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class _{constructor(e){this.path=e}static fromPath(e){return new _(L.fromString(e))}static fromName(e){return new _(L.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&L.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return L.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _(new L(e.slice()))}}/**
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
 */function Je(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ma(t)?4:10:I()}function pe(t,e){if(t===e)return!0;const n=Je(t);if(n!==Je(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zt(t).isEqual(Zt(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ne(s.timestampValue),o=Ne(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return pt(s.bytesValue).isEqual(pt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return x(s.geoPointValue.latitude)===x(i.geoPointValue.latitude)&&x(s.geoPointValue.longitude)===x(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return x(s.integerValue)===x(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=x(s.doubleValue),o=x(i.doubleValue);return r===o?Zn(r)===Zn(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return ft(t.arrayValue.values||[],e.arrayValue.values||[],pe);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(pa(r)!==pa(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!pe(r[a],o[a])))return!1;return!0}(t,e);default:return I()}}function en(t,e){return(t.values||[]).find(n=>pe(n,e))!==void 0}function mt(t,e){if(t===e)return 0;const n=Je(t),s=Je(e);if(n!==s)return N(n,s);switch(n){case 0:return 0;case 1:return N(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=x(i.integerValue||i.doubleValue),a=x(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return va(t.timestampValue,e.timestampValue);case 4:return va(Zt(t),Zt(e));case 5:return N(t.stringValue,e.stringValue);case 6:return function(i,r){const o=pt(i),a=pt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=N(x(i.latitude),x(r.latitude));return o!==0?o:N(x(i.longitude),x(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=mt(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=N(a[l],u[l]);if(h!==0)return h;const d=mt(o[a[l]],c[u[l]]);if(d!==0)return d}return N(a.length,u.length)}(t.mapValue,e.mapValue);default:throw I()}}function va(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return N(t,e);const n=Ne(t),s=Ne(e),i=N(n.seconds,s.seconds);return i!==0?i:N(n.nanos,s.nanos)}function Vi(t){return $i(t)}function $i(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Ne(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?pt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,_.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=$i(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${$i(s.fields[a])}`;return r+"}"}(t.mapValue):I();var e,n}function Bi(t){return!!t&&"integerValue"in t}function qi(t){return!!t&&"arrayValue"in t}function wa(t){return!!t&&"nullValue"in t}function Ta(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function es(t){return!!t&&"mapValue"in t}function tn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ye(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=tn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tn(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class ue{constructor(e){this.value=e}static empty(){return new ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!es(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=tn(n)}setAll(e){let n=re.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=tn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());es(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];es(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ye(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new ue(tn(this.value))}}function _a(t){const e=[];return Ye(t.fields,(n,s)=>{const i=new re([n]);if(es(s)){const r=_a(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Qt(e)}/**
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
 */class X{constructor(e,n,s,i,r){this.key=e,this.documentType=n,this.version=s,this.data=i,this.documentState=r}static newInvalidDocument(e){return new X(e,0,C.min(),ue.empty(),0)}static newFoundDocument(e,n,s){return new X(e,1,n,s,0)}static newNoDocument(e,n){return new X(e,2,n,ue.empty(),0)}static newUnknownDocument(e,n){return new X(e,3,n,ue.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof X&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new X(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pd{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.R=null}}function Ea(t,e=null,n=[],s=[],i=null,r=null,o=null){return new pd(t,e,n,s,i,r,o)}function ji(t){const e=S(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>md(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),gt(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=ts(e.startAt)),e.endAt&&(n+="|ub:",n+=ts(e.endAt)),e.R=n}return e.R}function gd(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Vi(s.value)}`;var s}).join(", ")}]`),gt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+ts(t.startAt)),t.endAt&&(e+=", endAt: "+ts(t.endAt)),`Target(${e})`}function Hi(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Sd(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!pe(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Aa(t.startAt,e.startAt)&&Aa(t.endAt,e.endAt)}function Ki(t){return _.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class oe extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,s):new yd(e,n,s):n==="array-contains"?new Td(e,s):n==="in"?new _d(e,s):n==="not-in"?new Ed(e,s):n==="array-contains-any"?new Id(e,s):new oe(e,n,s)}static P(e,n,s){return n==="in"?new vd(e,s):new wd(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(mt(n,this.value)):n!==null&&Je(this.value)===Je(n)&&this.v(mt(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return I()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function md(t){return t.field.canonicalString()+t.op.toString()+Vi(t.value)}class yd extends oe{constructor(e,n,s){super(e,n,s),this.key=_.fromName(s.referenceValue)}matches(e){const n=_.comparator(e.key,this.key);return this.v(n)}}class vd extends oe{constructor(e,n){super(e,"in",n),this.keys=Ia("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wd extends oe{constructor(e,n){super(e,"not-in",n),this.keys=Ia("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ia(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_.fromName(s.referenceValue))}class Td extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qi(n)&&en(n.arrayValue,this.value)}}class _d extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&en(this.value.arrayValue,n)}}class Ed extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(en(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!en(this.value.arrayValue,n)}}class Id extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>en(this.value.arrayValue,s))}}class Wi{constructor(e,n){this.position=e,this.before=n}}function ts(t){return`${t.before?"b":"a"}:${t.position.map(e=>Vi(e)).join(",")}`}class yt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Sd(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Sa(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=_.comparator(_.fromName(o.referenceValue),n.key):s=mt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return t.before?s<=0:s<0}function Aa(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pe(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class nn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function Ad(t,e,n,s,i,r,o,a){return new nn(t,e,n,s,i,r,o,a)}function Gi(t){return new nn(t)}function ns(t){return!gt(t.limit)&&t.limitType==="F"}function ss(t){return!gt(t.limit)&&t.limitType==="L"}function ka(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ba(t){for(const e of t.filters)if(e.V())return e.field;return null}function kd(t){return t.collectionGroup!==null}function sn(t){const e=S(t);if(e.S===null){e.S=[];const n=ba(e),s=ka(e);if(n!==null&&s===null)n.isKeyField()||e.S.push(new yt(n)),e.S.push(new yt(re.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.S.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new yt(re.keyField(),r))}}}return e.S}function Xe(t){const e=S(t);if(!e.D)if(e.limitType==="F")e.D=Ea(e.path,e.collectionGroup,sn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of sn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new yt(r.field,o))}const s=e.endAt?new Wi(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Wi(e.startAt.position,!e.startAt.before):null;e.D=Ea(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.D}function bd(t,e,n){return new nn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function is(t,e){return Hi(Xe(t),Xe(e))&&t.limitType===e.limitType}function Ca(t){return`${ji(Xe(t))}|lt:${t.limitType}`}function zi(t){return`Query(target=${gd(Xe(t))}; limitType=${t.limitType})`}function rs(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):_.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!Sa(n.startAt,sn(n),s)||n.endAt&&Sa(n.endAt,sn(n),s))}(t,e)}function Ra(t){return(e,n)=>{let s=!1;for(const i of sn(t)){const r=Cd(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Cd(t,e,n){const s=t.field.isKeyField()?_.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?mt(a,c):I()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function Na(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zn(e)?"-0":e}}function Da(t){return{integerValue:""+t}}function Rd(t,e){return fd(e)?Da(e):Na(t,e)}/**
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
 */class os{constructor(){this._=void 0}}function Nd(t,e,n){return t instanceof rn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof on?Pa(t,e):t instanceof an?La(t,e):function(s,i){const r=Oa(s,i),o=Ma(r)+Ma(s.N);return Bi(r)&&Bi(s.N)?Da(o):Na(s.k,o)}(t,e)}function Dd(t,e,n){return t instanceof on?Pa(t,e):t instanceof an?La(t,e):n}function Oa(t,e){return t instanceof as?Bi(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class rn extends os{}class on extends os{constructor(e){super(),this.elements=e}}function Pa(t,e){const n=Ua(e);for(const s of t.elements)n.some(i=>pe(i,s))||n.push(s);return{arrayValue:{values:n}}}class an extends os{constructor(e){super(),this.elements=e}}function La(t,e){let n=Ua(e);for(const s of t.elements)n=n.filter(i=>!pe(i,s));return{arrayValue:{values:n}}}class as extends os{constructor(e,n){super(),this.k=e,this.N=n}}function Ma(t){return x(t.integerValue||t.doubleValue)}function Ua(t){return qi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Od{constructor(e,n){this.field=e,this.transform=n}}function Pd(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof on&&s instanceof on||n instanceof an&&s instanceof an?ft(n.elements,s.elements,pe):n instanceof as&&s instanceof as?pe(n.N,s.N):n instanceof rn&&s instanceof rn}(t.transform,e.transform)}class Ld{constructor(e,n){this.version=e,this.transformResults=n}}class De{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new De}static exists(e){return new De(void 0,e)}static updateTime(e){return new De(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class us{}function Md(t,e,n){t instanceof ls?function(s,i,r){const o=s.value.clone(),a=$a(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Qe?function(s,i,r){if(!cs(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=$a(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Va(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Yi(t,e,n){t instanceof ls?function(s,i,r){if(!cs(s.precondition,i))return;const o=s.value.clone(),a=Ba(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Fa(i),o).setHasLocalMutations()}(t,e,n):t instanceof Qe?function(s,i,r){if(!cs(s.precondition,i))return;const o=Ba(s.fieldTransforms,r,i),a=i.data;a.setAll(Va(s)),a.setAll(o),i.convertToFoundDocument(Fa(i),a).setHasLocalMutations()}(t,e,n):function(s,i){cs(s.precondition,i)&&i.convertToNoDocument(C.min())}(t,e)}function Ud(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Oa(s.transform,i||null);r!=null&&(n==null&&(n=ue.empty()),n.set(s.field,r))}return n||null}function xa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ft(n,s,(i,r)=>Pd(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Fa(t){return t.isFoundDocument()?t.version:C.min()}class ls extends us{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Qe extends us{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Va(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function $a(t,e,n){const s=new Map;D(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Dd(o,a,n[i]))}return s}function Ba(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Nd(r,o,e))}return s}class qa extends us{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class xd extends us{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class Fd{constructor(e){this.count=e}}/**
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
 */var F,b;function Vd(t){switch(t){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function ja(t){if(t===void 0)return Re("GRPC error has no .code"),f.UNKNOWN;switch(t){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(b=F||(F={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Q{constructor(e,n){this.comparator=e,this.root=n||G.EMPTY}insert(e,n){return new Q(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,G.BLACK,null,null))}remove(e){return new Q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,G.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hs(this.root,e,this.comparator,!0)}}class hs{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class G{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:G.RED,this.left=i!=null?i:G.EMPTY,this.right=r!=null?r:G.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new G(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return G.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,e,n,s,i){return this}insert(t,e,n){return new G(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class z{constructor(e){this.comparator=e,this.data=new Q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ha(this.data.getIterator())}getIteratorFrom(e){return new Ha(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof z)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new z(this.comparator);return n.data=e,n}}class Ha{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const $d=new Q(_.comparator);function Ze(){return $d}const Bd=new Q(_.comparator);function Ji(){return Bd}const qd=new Q(_.comparator);function jd(){return qd}const Hd=new z(_.comparator);function O(...t){let e=Hd;for(const n of t)e=e.add(n);return e}const Kd=new z(N);function Ka(){return Kd}/**
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
 */class ds{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,cn.createSynthesizedTargetChangeForCurrentChange(e,n)),new ds(C.min(),s,Ka(),Ze(),O())}}class cn{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new cn(W.EMPTY_BYTE_STRING,n,O(),O(),O())}}/**
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
 */class fs{constructor(e,n,s,i){this.$=e,this.removedTargetIds=n,this.key=s,this.O=i}}class Wa{constructor(e,n){this.targetId=e,this.M=n}}class Ga{constructor(e,n,s=W.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class za{constructor(){this.F=0,this.L=Ja(),this.B=W.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=O(),n=O(),s=O();return this.L.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new cn(this.B,this.U,e,n,s)}H(){this.q=!1,this.L=Ja()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class Wd{constructor(e){this.et=e,this.nt=new Map,this.st=Ze(),this.it=Ya(),this.rt=new z(N)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const s=this.ht(n);switch(e.state){case 0:this.lt(n)&&s.W(e.resumeToken);break;case 1:s.Z(),s.K||s.H(),s.W(e.resumeToken);break;case 2:s.Z(),s.K||this.removeTarget(n);break;case 3:this.lt(n)&&(s.tt(),s.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),s.W(e.resumeToken));break;default:I()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((s,i)=>{this.lt(i)&&n(i)})}dt(e){const n=e.targetId,s=e.M.count,i=this.wt(n);if(i){const r=i.target;if(Ki(r))if(s===0){const o=new _(r.path);this.at(n,o,X.newNoDocument(o,C.min()))}else D(s===1);else this._t(n)!==s&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&Ki(a.target)){const c=new _(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.at(o,c,X.newNoDocument(c,e))}r.j&&(n.set(o,r.G()),r.H())}});let s=O();this.it.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))});const i=new ds(e,n,this.rt,this.st,s);return this.st=Ze(),this.it=Ya(),this.rt=new z(N),i}ct(e,n){if(!this.lt(e))return;const s=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,s),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,s){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),s&&(this.st=this.st.insert(n,s))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new za,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new z(N),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||v("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new za),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function Ya(){return new Q(_.comparator)}function Ja(){return new Q(_.comparator)}/**
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
 */const Gd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Yd{constructor(e,n){this.databaseId=e,this.C=n}}function ps(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xa(t,e){return t.C?e.toBase64():e.toUint8Array()}function Jd(t,e){return ps(t,e.toTimestamp())}function _e(t){return D(!!t),C.fromTimestamp(function(e){const n=Ne(e);return new ce(n.seconds,n.nanos)}(t))}function Xi(t,e){return function(n){return new L(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Qa(t){const e=L.fromString(t);return D(ic(e)),e}function Qi(t,e){return Xi(t.databaseId,e.path)}function Zi(t,e){const n=Qa(e);if(n.get(1)!==t.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _(Za(n))}function er(t,e){return Xi(t.databaseId,e)}function Xd(t){const e=Qa(t);return e.length===4?L.emptyPath():Za(e)}function tr(t){return new L(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Za(t){return D(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ec(t,e,n){return{name:Qi(t,e),fields:n.value.mapValue.fields}}function Qd(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.C?(D(u===void 0||typeof u=="string"),W.fromBase64String(u||"")):(D(u===void 0||u instanceof Uint8Array),W.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:ja(c.code);return new w(u,c.message||"")}(o);n=new Ga(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Zi(t,s.document.name),r=_e(s.document.updateTime),o=new ue({mapValue:{fields:s.document.fields}}),a=X.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new fs(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Zi(t,s.document),r=s.readTime?_e(s.readTime):C.min(),o=X.newNoDocument(i,r),a=s.removedTargetIds||[];n=new fs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Zi(t,s.document),r=s.removedTargetIds||[];n=new fs([],r,i,null)}else{if(!("filter"in e))return I();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Fd(i),o=s.targetId;n=new Wa(o,r)}}return n}function Zd(t,e){let n;if(e instanceof ls)n={update:ec(t,e.key,e.value)};else if(e instanceof qa)n={delete:Qi(t,e.key)};else if(e instanceof Qe)n={update:ec(t,e.key,e.data),updateMask:lf(e.fieldMask)};else{if(!(e instanceof xd))return I();n={verify:Qi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof rn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof on)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof an)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof as)return{fieldPath:r.field.canonicalString(),increment:o.N};throw I()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Jd(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(t,e.precondition)),n}function ef(t,e){return t&&t.length>0?(D(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?_e(s.updateTime):_e(i);return r.isEqual(C.min())&&(r=_e(i)),new Ld(r,s.transformResults||[])}(n,e))):[]}function tf(t,e){return{documents:[er(t,e.path)]}}function nf(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=er(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=er(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(a){if(a.length===0)return;const c=a.map(u=>function(l){if(l.op==="=="){if(Ta(l.value))return{unaryFilter:{field:vt(l.field),op:"IS_NAN"}};if(wa(l.value))return{unaryFilter:{field:vt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Ta(l.value))return{unaryFilter:{field:vt(l.field),op:"IS_NOT_NAN"}};if(wa(l.value))return{unaryFilter:{field:vt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vt(l.field),op:af(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:vt(u.field),direction:of(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(a,c){return a.C||gt(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=nc(e.startAt)),e.endAt&&(n.structuredQuery.endAt=nc(e.endAt)),n}function sf(t){let e=Xd(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){D(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=tc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new yt(wt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,gt(h)?null:h}(n.limit));let c=null;n.startAt&&(c=sc(n.startAt));let u=null;return n.endAt&&(u=sc(n.endAt)),Ad(e,i,o,r,a,"F",c,u)}function rf(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function tc(t){return t?t.unaryFilter!==void 0?[uf(t)]:t.fieldFilter!==void 0?[cf(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>tc(e)).reduce((e,n)=>e.concat(n)):I():[]}function nc(t){return{before:t.before,values:t.position}}function sc(t){const e=!!t.before,n=t.values||[];return new Wi(n,e)}function of(t){return Gd[t]}function af(t){return zd[t]}function vt(t){return{fieldPath:t.canonicalString()}}function wt(t){return re.fromServerFormat(t.fieldPath)}function cf(t){return oe.create(wt(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value)}function uf(t){switch(t.unaryFilter.op){case"IS_NAN":const e=wt(t.unaryFilter.field);return oe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=wt(t.unaryFilter.field);return oe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wt(t.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=wt(t.unaryFilter.field);return oe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function lf(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ic(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const hf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class df{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):g.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):g.reject(n)}static resolve(e){return new g((n,s)=>{n(e)})}static reject(e){return new g((n,s)=>{s(e)})}static waitFor(e){return new g((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=g.resolve(!1);for(const s of e)n=n.next(i=>i?g.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function un(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ff{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Md(r,e,s[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Yi(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Yi(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(C.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),O())}isEqual(e){return this.batchId===e.batchId&&ft(this.mutations,e.mutations,(n,s)=>xa(n,s))&&ft(this.baseMutations,e.baseMutations,(n,s)=>xa(n,s))}}class nr{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){D(e.mutations.length===s.length);let i=jd();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new nr(e,n,s,i)}}/**
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
 */class et{constructor(e,n,s,i,r=C.min(),o=C.min(),a=W.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class pf{constructor(e){this.Gt=e}}function gf(t){const e=sf({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bd(e,e.limit,"L"):e}/**
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
 */class mf{constructor(){this.zt=new yf}addToCollectionParentIndex(e,n){return this.zt.add(n),g.resolve()}getCollectionParents(e,n){return g.resolve(this.zt.getEntries(n))}}class yf{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new z(L.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new z(L.comparator)).toArray()}}/**
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
 */class Tt{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Tt(0)}static re(){return new Tt(-1)}}/**
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
 */async function ln(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==hf)throw t;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class hn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i!==void 0){for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n])}else this.inner[s]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),!0;return!1}forEach(e){Ye(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return ga(this.inner)}}/**
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
 */class vf{constructor(){this.changes=new hn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:C.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:X.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class rc{constructor(e,n,s){this.Je=e,this.An=n,this.Jt=s}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.bn(e,n,s))}bn(e,n,s){return this.Je.getEntry(e,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}Pn(e,n){e.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}vn(e,n){return this.Je.getEntries(e,n).next(s=>this.Vn(e,s).next(()=>s))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Pn(n,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return _.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(e,n.path):kd(n)?this.Dn(e,n,s):this.Cn(e,n,s)}Sn(e,n){return this.Rn(e,new _(n)).next(s=>{let i=Ji();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Dn(e,n,s){const i=n.collectionGroup;let r=Ji();return this.Jt.getCollectionParents(e,i).next(o=>g.forEach(o,a=>{const c=function(u,l){return new nn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.Cn(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}Cn(e,n,s){let i,r;return this.Je.getDocumentsMatchingQuery(e,n,s).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(r=o,this.Nn(e,r,i).next(a=>{i=a;for(const c of r)for(const u of c.mutations){const l=u.key;let h=i.get(l);h==null&&(h=X.newInvalidDocument(l),i=i.insert(l,h)),Yi(u,h,c.localWriteTime),h.isFoundDocument()||(i=i.remove(l))}}))).next(()=>(i.forEach((o,a)=>{rs(n,a)||(i=i.remove(o))}),i))}Nn(e,n,s){let i=O();for(const o of n)for(const a of o.mutations)a instanceof Qe&&s.get(a.key)===null&&(i=i.add(a.key));let r=s;return this.Je.getEntries(e,i).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(r=r.insert(a,c))}),r))}}/**
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
 */class sr{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.kn=s,this.xn=i}static $n(e,n){let s=O(),i=O();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new sr(e,n.fromCache,s,i)}}/**
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
 */class wf{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(C.min())?this.Fn(e,n):this.Mn.vn(e,i).next(r=>{const o=this.Ln(n,r);return(ns(n)||ss(n))&&this.Bn(n.limitType,o,i,s)?this.Fn(e,n):(ha()<=R.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zi(n)),this.Mn.getDocumentsMatchingQuery(e,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(e,n){let s=new z(Ra(e));return n.forEach((i,r)=>{rs(e,r)&&(s=s.add(r))}),s}Bn(e,n,s,i){if(s.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fn(e,n){return ha()<=R.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",zi(n)),this.Mn.getDocumentsMatchingQuery(e,n,C.min())}}/**
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
 */class Tf{constructor(e,n,s,i){this.persistence=e,this.Un=n,this.k=i,this.qn=new Q(N),this.Kn=new hn(r=>ji(r),Hi),this.jn=C.min(),this.An=e.getMutationQueue(s),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new rc(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function _f(t,e,n,s){return new Tf(t,e,n,s)}async function oc(t,e){const n=S(t);let s=n.An,i=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,s=n.persistence.getMutationQueue(e),i=new rc(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(o))).next(c=>{const u=[],l=[];let h=O();for(const d of a){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of c){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return i.vn(o,h).next(d=>({Gn:d,removedBatchIds:u,addedBatchIds:l}))})});return n.An=s,n.Wn=i,n.Un.On(n.Wn),r}function Ef(t,e){const n=S(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=g.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(y=>{const A=c.docVersions.get(p);D(A!==null),y.version.compareTo(A)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&u.addEntry(y,c.commitVersion))})}),d.next(()=>o.An.removeMutationBatch(a,l))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.An.performConsistencyCheck(s)).next(()=>n.Wn.vn(s,i))})}function ac(t){const e=S(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function If(t,e){const n=S(t),s=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];e.targetChanges.forEach((u,l)=>{const h=i.get(l);if(!h)return;a.push(n.He.removeMatchingKeys(r,u.removedDocuments,l).next(()=>n.He.addMatchingKeys(r,u.addedDocuments,l)));let d=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(l)?d=d.withResumeToken(W.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),i=i.insert(l,d),function(p,y,A){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(h,d,u)&&a.push(n.He.updateTargetData(r,d))});let c=Ze();if(e.documentUpdates.forEach((u,l)=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Sf(r,o,e.documentUpdates,s,void 0).next(u=>{c=u})),!s.isEqual(C.min())){const u=n.He.getLastRemoteSnapshotVersion(r).next(l=>n.He.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>n.Wn.Vn(r,c)).next(()=>c)}).then(r=>(n.qn=i,r))}function Sf(t,e,n,s,i){let r=O();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let a=Ze();return n.forEach((c,u)=>{const l=o.get(c),h=(i==null?void 0:i.get(c))||s;u.isNoDocument()&&u.version.isEqual(C.min())?(e.removeEntry(c,h),a=a.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u,h),a=a.insert(c,u)):v("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),a})}function Af(t,e){const n=S(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(s,e)))}function kf(t,e){const n=S(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.He.getTargetData(s,e).next(r=>r?(i=r,g.resolve(i)):n.He.allocateTargetId(s).next(o=>(i=new et(e,o,0,s.currentSequenceNumber),n.He.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qn.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(s.targetId,s),n.Kn.set(e,s.targetId)),s})}async function ir(t,e,n){const s=S(t),i=s.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!un(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qn=s.qn.remove(e),s.Kn.delete(i.target)}function cc(t,e,n){const s=S(t);let i=C.min(),r=O();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=S(a),h=l.Kn.get(u);return h!==void 0?g.resolve(l.qn.get(h)):l.He.getTargetData(c,u)}(s,o,Xe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Un.getDocumentsMatchingQuery(o,e,n?i:C.min(),n?r:O())).next(a=>({documents:a,zn:r})))}/**
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
 */class bf{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return g.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var s;return this.Xn.set(n.id,{id:(s=n).id,version:s.version,createTime:_e(s.createTime)}),g.resolve()}getNamedQuery(e,n){return g.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(s){return{name:s.name,query:gf(s.bundledQuery),readTime:_e(s.readTime)}}(n)),g.resolve()}}/**
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
 */class rr{constructor(){this.ts=new z(B.es),this.ns=new z(B.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const s=new B(e,n);this.ts=this.ts.add(s),this.ns=this.ns.add(s)}rs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.os(new B(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new _(new L([])),s=new B(n,e),i=new B(n,e+1),r=[];return this.ns.forEachInRange([s,i],o=>{this.os(o),r.push(o.key)}),r}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new _(new L([])),s=new B(n,e),i=new B(n,e+1);let r=O();return this.ns.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new B(e,0),s=this.ts.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class B{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return _.comparator(e.key,n.key)||N(e.fs,n.fs)}static ss(e,n){return N(e.fs,n.fs)||_.comparator(e.key,n.key)}}/**
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
 */class Cf{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new z(B.es)}checkEmpty(e){return g.resolve(this.An.length===0)}addMutationBatch(e,n,s,i){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new ff(r,n,s,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new B(a.key,r)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,n){return g.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.gs(s),r=i<0?0:i;return g.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return g.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new B(n,0),i=new B(n,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([s,i],o=>{const a=this._s(o.fs);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new z(N);return n.forEach(i=>{const r=new B(i,0),o=new B(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([r,o],a=>{s=s.add(a.fs)})}),g.resolve(this.ys(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;_.isDocumentKey(r)||(r=r.child(""));const o=new B(new _(r),0);let a=new z(N);return this.ws.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.fs)),!0)},o),g.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){D(this.ps(n.batchId,"removed")===0),this.An.shift();let s=this.ws;return g.forEach(n.mutations,i=>{const r=new B(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=s})}ee(e){}containsKey(e,n){const s=new B(n,0),i=this.ws.firstAfterOrEqual(s);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,g.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
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
 */class Rf{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new Q(_.comparator),this.size=0}addEntry(e,n,s){const i=n.key,r=this.docs.get(i),o=r?r.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a,readTime:s}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():X.newInvalidDocument(n))}getEntries(e,n){let s=Ze();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():X.newInvalidDocument(i))}),g.resolve(s)}getDocumentsMatchingQuery(e,n,s){let i=Ze();const r=new _(n.path.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(s)<=0||rs(n,c)&&(i=i.insert(c.key,c.mutableCopy()))}return g.resolve(i)}Es(e,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Nf(this)}getSize(e){return g.resolve(this.size)}}class Nf extends vf{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(e,i.document,this.getReadTime(s))):this.De.removeEntry(s)}),g.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
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
 */class Df{constructor(e){this.persistence=e,this.Is=new hn(n=>ji(n),Hi),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.As=0,this.Rs=new rr,this.targetCount=0,this.bs=Tt.ie()}forEachTarget(e,n){return this.Is.forEach((s,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.As&&(this.As=n),g.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Tt(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,g.resolve()}updateTargetData(e,n){return this.ae(n),g.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Is.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,n){const s=this.Is.get(n)||null;return g.resolve(s)}addMatchingKeys(e,n,s){return this.Rs.rs(n,s),g.resolve()}removeMatchingKeys(e,n,s){this.Rs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),g.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Rs.ls(n);return g.resolve(s)}containsKey(e,n){return g.resolve(this.Rs.containsKey(n))}}/**
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
 */class Of{constructor(e,n){this.Ps={},this.Be=new Fi(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new Df(this),this.Jt=new mf,this.Je=function(s,i){return new Rf(s,i)}(this.Jt,s=>this.referenceDelegate.vs(s)),this.k=new pf(n),this.Ye=new bf(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new Cf(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,s){v("MemoryPersistence","Starting transaction:",e);const i=new Pf(this.Be.next());return this.referenceDelegate.Vs(),s(i).next(r=>this.referenceDelegate.Ss(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ds(e,n){return g.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class Pf extends df{constructor(e){super(),this.currentSequenceNumber=e}}class or{constructor(e){this.persistence=e,this.Cs=new rr,this.Ns=null}static ks(e){return new or(e)}get xs(){if(this.Ns)return this.Ns;throw I()}addReference(e,n,s){return this.Cs.addReference(s,n),this.xs.delete(s.toString()),g.resolve()}removeReference(e,n,s){return this.Cs.removeReference(s,n),this.xs.add(s.toString()),g.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),g.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.xs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.xs,s=>{const i=_.fromPath(s);return this.$s(e,i).next(r=>{r||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return g.or([()=>g.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class uc{constructor(){this.activeTargetIds=Ka()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lf{constructor(){this.pi=new uc,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,s){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new uc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class Mf{Ei(e){}shutdown(){}}/**
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
 */class lc{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Uf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class xf{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
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
 */class Ff extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,s,i,r){const o=this.Ui(e,n);v("RestConnection","Sending: ",o,s);const a={};return this.qi(a,i,r),this.Ki(e,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw da("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ji(e,n,s,i,r){return this.Bi(e,n,s,i,r)}qi(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+dt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}Ui(e,n){const s=Uf[e];return`${this.Fi}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,s,i){return new Promise((r,o)=>{const a=new nd;a.listenOnce(Zh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ui.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),r(u);break;case Ui.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case Ui.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const y=p.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(y)>=0?y:f.UNKNOWN}(h.status);o(new w(d,h.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}Qi(e,n,s){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Xh(),o=Qh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new td({})),this.qi(a.initMessageHeaders,n,s),Br()||jr()||Qu()||Hr()||Zu()||qr()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");v("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let l=!1,h=!1;const d=new xf({Vi:y=>{h?v("Connection","Not sending because WebChannel is closed:",y):(l||(v("Connection","Opening WebChannel transport."),u.open(),l=!0),v("Connection","WebChannel sending:",y),u.send(y))},Si:()=>u.close()}),p=(y,A,k)=>{y.listen(A,q=>{try{k(q)}catch(ne){setTimeout(()=>{throw ne},0)}})};return p(u,Qn.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),p(u,Qn.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.Oi())}),p(u,Qn.EventType.ERROR,y=>{h||(h=!0,da("Connection","WebChannel transport errored:",y),d.Oi(new w(f.UNAVAILABLE,"The operation could not be completed")))}),p(u,Qn.EventType.MESSAGE,y=>{var A;if(!h){const k=y.data[0];D(!!k);const q=k,ne=q.error||((A=q[0])===null||A===void 0?void 0:A.error);if(ne){v("Connection","WebChannel received error:",ne);const Y=ne.status;let M=function(ve){const Ve=F[ve];if(Ve!==void 0)return ja(Ve)}(Y),de=ne.message;M===void 0&&(M=f.INTERNAL,de="Unknown error status: "+Y+" with message "+ne.message),h=!0,d.Oi(new w(M,de)),u.close()}else v("Connection","WebChannel received:",k),d.Mi(k)}}),p(o,ed.STAT_EVENT,y=>{y.stat===ua.PROXY?v("Connection","Detected buffering proxy"):y.stat===ua.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.$i()},0),d}}function ar(){return typeof document!="undefined"?document:null}/**
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
 */function gs(t){return new Yd(t,!0)}class hc{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Me=e,this.timerId=n,this.Wi=s,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),s=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
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
 */class dc{constructor(e,n,s,i,r,o,a,c){this.Me=e,this.nr=s,this.sr=i,this.ir=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new hc(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Re(n.toString()),Re("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.rr===n&&this.Ir(s,i)},s=>{e(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ar(i)})})}Ir(e,n){const s=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{s(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{s(()=>this.Ar(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vf extends dc{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.k=r}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=Qd(this.k,e),s=function(i){if(!("targetChange"in i))return C.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?C.min():r.readTime?_e(r.readTime):C.min()}(e);return this.listener.br(n,s)}Pr(e){const n={};n.database=tr(this.k),n.addTarget=function(i,r){let o;const a=r.target;return o=Ki(a)?{documents:tf(i,a)}:{query:nf(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Xa(i,r.resumeToken):r.snapshotVersion.compareTo(C.min())>0&&(o.readTime=ps(i,r.snapshotVersion.toTimestamp())),o}(this.k,e);const s=rf(this.k,e);s&&(n.labels=s),this.gr(n)}vr(e){const n={};n.database=tr(this.k),n.removeTarget=e,this.gr(n)}}class $f extends dc{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(D(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=ef(e.writeResults,e.commitTime),s=_e(e.commitTime);return this.listener.Cr(s,n)}return D(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=tr(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Zd(this.k,s))};this.gr(n)}}/**
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
 */class Bf extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=s,this.k=i,this.$r=!1}Or(){if(this.$r)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.Bi(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}ji(e,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.ji(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class qf{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Re(n),this.Lr=!1):v("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class jf{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei(o=>{s.enqueueAndForget(async()=>{tt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c.Gr.add(4),await dn(c),c.Jr.set("Unknown"),c.Gr.delete(4),await ms(c)}(this))})}),this.Jr=new qf(s,i)}}async function ms(t){if(tt(t))for(const e of t.zr)await e(!0)}async function dn(t){for(const e of t.zr)await e(!1)}function fc(t,e){const n=S(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),lr(n)?ur(n):_t(n).lr()&&cr(n,e))}function pc(t,e){const n=S(t),s=_t(n);n.Wr.delete(e),s.lr()&&gc(n,e),n.Wr.size===0&&(s.lr()?s._r():tt(n)&&n.Jr.set("Unknown"))}function cr(t,e){t.Yr.X(e.targetId),_t(t).Pr(e)}function gc(t,e){t.Yr.X(e),_t(t).vr(e)}function ur(t){t.Yr=new Wd({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),_t(t).start(),t.Jr.Br()}function lr(t){return tt(t)&&!_t(t).hr()&&t.Wr.size>0}function tt(t){return S(t).Gr.size===0}function mc(t){t.Yr=void 0}async function Hf(t){t.Wr.forEach((e,n)=>{cr(t,e)})}async function Kf(t,e){mc(t),lr(t)?(t.Jr.Kr(e),ur(t)):t.Jr.set("Unknown")}async function Wf(t,e,n){if(t.Jr.set("Online"),e instanceof Ga&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Wr.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Wr.delete(o),s.Yr.removeTarget(o))}(t,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ys(t,s)}else if(e instanceof fs?t.Yr.ot(e):e instanceof Wa?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(C.min()))try{const s=await ac(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Yr.gt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Wr.get(c);u&&i.Wr.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.Wr.get(a);if(!c)return;i.Wr.set(a,c.withResumeToken(W.EMPTY_BYTE_STRING,c.snapshotVersion)),gc(i,a);const u=new et(c.target,a,1,c.sequenceNumber);cr(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await ys(t,s)}}async function ys(t,e,n){if(!un(e))throw e;t.Gr.add(1),await dn(t),t.Jr.set("Offline"),n||(n=()=>ac(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await ms(t)})}function yc(t,e){return e().catch(n=>ys(t,n,e))}async function vs(t){const e=S(t),n=Oe(e);let s=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;Gf(e);)try{const i=await Af(e.localStore,s);if(i===null){e.Qr.length===0&&n._r();break}s=i.batchId,zf(e,i)}catch(i){await ys(e,i)}vc(e)&&wc(e)}function Gf(t){return tt(t)&&t.Qr.length<10}function zf(t,e){t.Qr.push(e);const n=Oe(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function vc(t){return tt(t)&&!Oe(t).hr()&&t.Qr.length>0}function wc(t){Oe(t).start()}async function Yf(t){Oe(t).kr()}async function Jf(t){const e=Oe(t);for(const n of t.Qr)e.Dr(n.mutations)}async function Xf(t,e,n){const s=t.Qr.shift(),i=nr.from(s,e,n);await yc(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vs(t)}async function Qf(t,e){e&&Oe(t).Sr&&await async function(n,s){if(i=s.code,Vd(i)&&i!==f.ABORTED){const r=n.Qr.shift();Oe(n).wr(),await yc(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await vs(n)}var i}(t,e),vc(t)&&wc(t)}async function Zf(t,e){const n=S(t);e?(n.Gr.delete(2),await ms(n)):e||(n.Gr.add(2),await dn(n),n.Jr.set("Unknown"))}function _t(t){return t.Xr||(t.Xr=function(e,n,s){const i=S(e);return i.Or(),new Vf(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,s)}(t.datastore,t.asyncQueue,{Di:Hf.bind(null,t),Ni:Kf.bind(null,t),br:Wf.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),lr(t)?ur(t):t.Jr.set("Unknown")):(await t.Xr.stop(),mc(t))})),t.Xr}function Oe(t){return t.Zr||(t.Zr=function(e,n,s){const i=S(e);return i.Or(),new $f(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,s)}(t.datastore,t.asyncQueue,{Di:Yf.bind(null,t),Ni:Qf.bind(null,t),Nr:Jf.bind(null,t),Cr:Xf.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await vs(t)):(await t.Zr.stop(),t.Qr.length>0&&(v("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
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
 */class hr{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new hr(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dr(t,e){if(Re("AsyncQueue",`${e}: ${t}`),un(t))return new w(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Et{constructor(e){this.comparator=e?(n,s)=>e(n,s)||_.comparator(n.key,s.key):(n,s)=>_.comparator(n.key,s.key),this.keyedMap=Ji(),this.sortedSet=new Q(this.comparator)}static emptySet(e){return new Et(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Et;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Tc{constructor(){this.eo=new Q(_.comparator)}track(e){const n=e.doc.key,s=this.eo.get(n);s?e.type!==0&&s.type===3?this.eo=this.eo.insert(n,e):e.type===3&&s.type!==1?this.eo=this.eo.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.eo=this.eo.remove(n):e.type===1&&s.type===2?this.eo=this.eo.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):I():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,s)=>{e.push(s)}),e}}class It{constructor(e,n,s,i,r,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new It(e,n,Et.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&is(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class ep{constructor(){this.so=void 0,this.listeners=[]}}class tp{constructor(){this.queries=new hn(e=>Ca(e),is),this.onlineState="Unknown",this.io=new Set}}async function np(t,e){const n=S(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new ep),i)try{r.so=await n.onListen(s)}catch(o){const a=dr(o,`Initialization of query '${zi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.ro(n.onlineState),r.so&&e.oo(r.so)&&fr(n)}async function sp(t,e){const n=S(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function ip(t,e){const n=S(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.oo(i)&&(s=!0);o.so=i}}s&&fr(n)}function rp(t,e,n){const s=S(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function fr(t){t.io.forEach(e=>{e.next()})}class op{constructor(e,n,s){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=s||{}}oo(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new It(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.wo||!s)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=It.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
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
 */class _c{constructor(e){this.key=e}}class Ec{constructor(e){this.key=e}}class ap{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=O(),this.mutatedKeys=O(),this.Ao=Ra(e),this.Ro=new Et(this.Ao)}get bo(){return this.To}Po(e,n){const s=n?n.vo:new Tc,i=n?n.Ro:this.Ro;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=ns(this.query)&&i.size===this.query.limit?i.last():null,u=ss(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),p=rs(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),A=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let k=!1;d&&p?d.data.isEqual(p.data)?y!==A&&(s.track({type:3,doc:p}),k=!0):this.Vo(d,p)||(s.track({type:2,doc:p}),k=!0,(c&&this.Ao(p,c)>0||u&&this.Ao(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),k=!0):d&&!p&&(s.track({type:1,doc:d}),k=!0,(c||u)&&(a=!0)),k&&(p?(o=o.add(p),r=A?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),ns(this.query)||ss(this.query))for(;o.size>this.query.limit;){const l=ns(this.query)?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Ro:o,vo:s,Bn:a,mutatedKeys:r}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const r=e.vo.no();r.sort((u,l)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return p(h)-p(d)}(u.type,l.type)||this.Ao(u.doc,l.doc)),this.So(s);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,r.length!==0||c?{snapshot:new It(this.query,e.Ro,i,r,e.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Tc,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=O(),this.Ro.forEach(s=>{this.No(s.key)&&(this.Io=this.Io.add(s.key))});const n=[];return e.forEach(s=>{this.Io.has(s)||n.push(new Ec(s))}),this.Io.forEach(s=>{e.has(s)||n.push(new _c(s))}),n}ko(e){this.To=e.zn,this.Io=O();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return It.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class cp{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class up{constructor(e){this.key=e,this.$o=!1}}class lp{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new hn(a=>Ca(a),is),this.Fo=new Map,this.Lo=new Set,this.Bo=new Q(_.comparator),this.Uo=new Map,this.qo=new rr,this.Ko={},this.jo=new Map,this.Qo=Tt.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function hp(t,e){const n=_p(t);let s,i;const r=n.Mo.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const o=await kf(n.localStore,Xe(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await dp(n,e,s,a==="current"),n.isPrimaryClient&&fc(n.remoteStore,o)}return i}async function dp(t,e,n,s){t.Go=(l,h,d)=>async function(p,y,A,k){let q=y.view.Po(A);q.Bn&&(q=await cc(p.localStore,y.query,!1).then(({documents:M})=>y.view.Po(M,q)));const ne=k&&k.targetChanges.get(y.targetId),Y=y.view.applyChanges(q,p.isPrimaryClient,ne);return Cc(p,y.targetId,Y.Co),Y.snapshot}(t,l,h,d);const i=await cc(t.localStore,e,!0),r=new ap(e,i.zn),o=r.Po(i.documents),a=cn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=r.applyChanges(o,t.isPrimaryClient,a);Cc(t,n,c.Co);const u=new cp(e,n,r);return t.Mo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function fp(t,e){const n=S(t),s=n.Mo.get(e),i=n.Fo.get(s.targetId);if(i.length>1)return n.Fo.set(s.targetId,i.filter(r=>!is(r,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ir(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),pc(n.remoteStore,s.targetId),pr(n,s.targetId)}).catch(ln)):(pr(n,s.targetId),await ir(n.localStore,s.targetId,!0))}async function pp(t,e,n){const s=Ep(t);try{const i=await function(r,o){const a=S(r),c=ce.now(),u=o.reduce((h,d)=>h.add(d.key),O());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,u).next(d=>{l=d;const p=[];for(const y of o){const A=Ud(y,l.get(y.key));A!=null&&p.push(new Qe(y.key,A,_a(A.value.mapValue),De.exists(!0)))}return a.An.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.Ko[r.currentUser.toKey()];c||(c=new Q(N)),c=c.insert(o,a),r.Ko[r.currentUser.toKey()]=c}(s,i.batchId,n),await fn(s,i.changes),await vs(s.remoteStore)}catch(i){const r=dr(i,"Failed to persist write");n.reject(r)}}async function Ic(t,e){const n=S(t);try{const s=await If(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Uo.get(r);o&&(D(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?D(o.$o):i.removedDocuments.size>0&&(D(o.$o),o.$o=!1))}),await fn(n,s,e)}catch(s){await ln(s)}}function Sc(t,e,n){const s=S(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Mo.forEach((r,o)=>{const a=o.view.ro(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.ro(o)&&(c=!0)}),c&&fr(a)}(s.eventManager,e),i.length&&s.Oo.br(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gp(t,e,n){const s=S(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Uo.get(e),r=i&&i.key;if(r){let o=new Q(_.comparator);o=o.insert(r,X.newNoDocument(r,C.min()));const a=O().add(r),c=new ds(C.min(),new Map,new z(N),o,a);await Ic(s,c),s.Bo=s.Bo.remove(r),s.Uo.delete(e),gr(s)}else await ir(s.localStore,e,!1).then(()=>pr(s,e,n)).catch(ln)}async function mp(t,e){const n=S(t),s=e.batch.batchId;try{const i=await Ef(n.localStore,e);kc(n,s,null),Ac(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await fn(n,i)}catch(i){await ln(i)}}async function yp(t,e,n){const s=S(t);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.An.lookupMutationBatch(c,o).next(l=>(D(l!==null),u=l.keys(),a.An.removeMutationBatch(c,l))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,u))})}(s.localStore,e);kc(s,e,n),Ac(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await fn(s,i)}catch(i){await ln(i)}}function Ac(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function kc(t,e,n){const s=S(t);let i=s.Ko[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Ko[s.currentUser.toKey()]=i}}function pr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Fo.get(e))t.Mo.delete(s),n&&t.Oo.zo(s,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(s=>{t.qo.containsKey(s)||bc(t,s)})}function bc(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(pc(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),gr(t))}function Cc(t,e,n){for(const s of n)s instanceof _c?(t.qo.addReference(s.key,e),vp(t,s)):s instanceof Ec?(v("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||bc(t,s.key)):I()}function vp(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||(v("SyncEngine","New document in limbo: "+n),t.Lo.add(s),gr(t))}function gr(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new _(L.fromString(e)),s=t.Qo.next();t.Uo.set(s,new up(n)),t.Bo=t.Bo.insert(n,s),fc(t.remoteStore,new et(Xe(Gi(n.path)),s,2,Fi.I))}}async function fn(t,e,n){const s=S(t),i=[],r=[],o=[];s.Mo.isEmpty()||(s.Mo.forEach((a,c)=>{o.push(s.Go(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const l=sr.$n(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.Oo.br(i),await async function(a,c){const u=S(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,h=>g.forEach(h.kn,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>g.forEach(h.xn,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!un(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qn.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.qn=u.qn.insert(h,y)}}}(s.localStore,r))}async function wp(t,e){const n=S(t);if(!n.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await oc(n.localStore,e);n.currentUser=e,function(i,r){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await fn(n,s.Gn)}}function Tp(t,e){const n=S(t),s=n.Uo.get(e);if(s&&s.$o)return O().add(s.key);{let i=O();const r=n.Fo.get(e);if(!r)return i;for(const o of r){const a=n.Mo.get(o);i=i.unionWith(a.view.bo)}return i}}function _p(t){const e=S(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ic.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gp.bind(null,e),e.Oo.br=ip.bind(null,e.eventManager),e.Oo.zo=rp.bind(null,e.eventManager),e}function Ep(t){const e=S(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yp.bind(null,e),e}class Ip{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=gs(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return _f(this.persistence,new wf,e.initialUser,this.k)}Yo(e){return new Of(or.ks,this.k)}Jo(e){return new Lf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Sc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wp.bind(null,this.syncEngine),await Zf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tp}createDatastore(e){const n=gs(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Ff(i));var i;return function(r,o,a,c){return new Bf(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Sc(this.syncEngine,a,0),o=lc.Pt()?new lc:new Mf,new jf(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,u){const l=new lp(s,i,r,o,a,c);return u&&(l.Wo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=S(e);v("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await dn(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
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
 */class Ap{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class kp{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ie.UNAUTHENTICATED,this.clientId=fa.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=dr(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function bp(t,e){t.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await oc(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Cp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Rp(t);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>async function(r,o){const a=S(r);a.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const c=tt(a);a.Gr.add(3),await dn(a),c&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await ms(a)}(e.remoteStore,i)),t.onlineComponents=e}async function Rp(t){return t.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await bp(t,new Ip)),t.offlineComponents}async function Rc(t){return t.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Cp(t,new Sp)),t.onlineComponents}function Np(t){return Rc(t).then(e=>e.syncEngine)}async function Nc(t){const e=await Rc(t),n=e.eventManager;return n.onListen=hp.bind(null,e.syncEngine),n.onUnlisten=fp.bind(null,e.syncEngine),n}class Dp{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class pn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Dc=new Map;/**
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
 */function Oc(t,e,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Op(t,e,n,s){if(e===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pc(t){if(!_.isDocumentKey(t))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lc(t){if(_.isDocumentKey(t))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":I()}function nt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mr(t);throw new w(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Mc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Op("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class yr{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mc({}),this._settingsFrozen=!1,e instanceof pn?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pn(i.options.projectId)}(e))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new id;switch(n.type){case"gapi":const s=n.client;return D(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new ad(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Dc.get(e);n&&(v("ComponentProvider","Removing Datastore"),Dc.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class le{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}}class gn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gn(this.firestore,e,this._query)}}class Pe extends gn{constructor(e,n,s){super(e,n,Gi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new _(e))}withConverter(e){return new Pe(this.firestore,e,this._path)}}function dy(t,e,...n){if(t=se(t),Oc("collection","path",e),t instanceof yr){const s=L.fromString(e,...n);return Lc(s),new Pe(t,null,s)}{if(!(t instanceof le||t instanceof Pe))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(L.fromString(e,...n));return Lc(s),new Pe(t.firestore,null,s)}}function Pp(t,e,...n){if(t=se(t),arguments.length===1&&(e=fa.A()),Oc("doc","path",e),t instanceof yr){const s=L.fromString(e,...n);return Pc(s),new le(t,null,new _(s))}{if(!(t instanceof le||t instanceof Pe))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(L.fromString(e,...n));return Pc(s),new le(t.firestore,t instanceof Pe?t.converter:null,new _(s))}}/**
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
 */class Lp{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new hc(this,"async_queue_retry"),this.bc=()=>{const n=ar();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=ar();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=ar();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new ze;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!un(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(s=>{this.Ec=s,this.Ic=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Re("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ic=!1,s))));return this.mc=n,n}enqueueAfterDelay(e,n,s){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const i=hr.createAndSchedule(this,e,n,s,r=>this.Sc(r));return this.Tc.push(i),i}Pc(){this.Ec&&I()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}function Uc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class St extends yr{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new Lp,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Fc(this),this._firestoreClient.terminate()}}function Mp(t=Ks()){return An(t,"firestore").getImmediate()}function xc(t){return t._firestoreClient||Fc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fc(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Dp(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new kp(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class ws{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(W.fromBase64String(e))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new At(W.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ts{constructor(e){this._methodName=e}}/**
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
 */class vr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
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
 */const Up=/^__.*__$/;class xp{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Qe(e,this.data,this.fieldMask,n,this.fieldTransforms):new ls(e,this.data,n,this.fieldTransforms)}}class Vc{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Qe(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $c(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class wr{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.k=s,this.ignoreUndefinedProperties=i,r===void 0&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new wr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:s,Fc:!1});return i.Lc(e),i}Bc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:s,Fc:!1});return i.xc(),i}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return Is(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if($c(this.$c)&&Up.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class Fp{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=s||gs(e)}Qc(e,n,s,i=!1){return new wr({$c:e,methodName:n,jc:s,path:re.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Bc(t){const e=t._freezeSettings(),n=gs(t._databaseId);return new Fp(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vp(t,e,n,s,i,r={}){const o=t.Qc(r.merge||r.mergeFields?2:0,e,n,i);_r("Data must be an object, but it was:",o,s);const a=qc(s,o);let c,u;if(r.merge)c=new Qt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const d=Er(e,h,n);if(!o.contains(d))throw new w(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Hc(l,d)||l.push(d)}c=new Qt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new xp(new ue(a),c,u)}class _s extends Ts{_toFieldTransform(e){if(e.$c!==2)throw e.$c===1?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _s}}class Tr extends Ts{_toFieldTransform(e){return new Od(e.path,new rn)}isEqual(e){return e instanceof Tr}}function $p(t,e,n,s){const i=t.Qc(1,e,n);_r("Data must be an object, but it was:",i,s);const r=[],o=ue.empty();Ye(s,(c,u)=>{const l=Ir(e,c,n);u=se(u);const h=i.Bc(l);if(u instanceof _s)r.push(l);else{const d=Es(u,h);d!=null&&(r.push(l),o.set(l,d))}});const a=new Qt(r);return new Vc(o,a,i.fieldTransforms)}function Bp(t,e,n,s,i,r){const o=t.Qc(1,e,n),a=[Er(e,s,n)],c=[i];if(r.length%2!=0)throw new w(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Er(e,r[d])),c.push(r[d+1]);const u=[],l=ue.empty();for(let d=a.length-1;d>=0;--d)if(!Hc(u,a[d])){const p=a[d];let y=c[d];y=se(y);const A=o.Bc(p);if(y instanceof _s)u.push(p);else{const k=Es(y,A);k!=null&&(u.push(p),l.set(p,k))}}const h=new Qt(u);return new Vc(l,h,o.fieldTransforms)}function Es(t,e){if(jc(t=se(t)))return _r("Unsupported field value:",e,t),qc(t,e);if(t instanceof Ts)return function(n,s){if(!$c(s.$c))throw s.qc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Es(o,s.Uc(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=se(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Rd(s.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ce.fromDate(n);return{timestampValue:ps(s.k,i)}}if(n instanceof ce){const i=new ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ps(s.k,i)}}if(n instanceof vr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof At)return{bytesValue:Xa(s.k,n._byteString)};if(n instanceof le){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.qc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xi(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.qc(`Unsupported field value: ${mr(n)}`)}(t,e)}function qc(t,e){const n={};return ga(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ye(t,(s,i)=>{const r=Es(i,e.Mc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function jc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ce||t instanceof vr||t instanceof At||t instanceof le||t instanceof Ts)}function _r(t,e,n){if(!jc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=mr(n);throw s==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+s)}}function Er(t,e,n){if((e=se(e))instanceof ws)return e._internalPath;if(typeof e=="string")return Ir(t,e);throw Is("Field path arguments must be of type string or ",t,!1,void 0,n)}const qp=new RegExp("[~\\*/\\[\\]]");function Ir(t,e,n){if(e.search(qp)>=0)throw Is(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ws(...e.split("."))._internalPath}catch{throw Is(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Is(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new w(f.INVALID_ARGUMENT,a+t+c)}function Hc(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Kc{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jp extends Kc{data(){return super.data()}}function Sr(t,e){return typeof e=="string"?Ir(t,e):e instanceof ws?e._internalPath:e._delegate._internalPath}/**
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
 */class mn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wc extends Kc{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Sr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ss extends Wc{data(e={}){return super.data(e)}}class Hp{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ss(this._firestore,this._userDataWriter,s.key,s,new mn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ss(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ss(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Kp(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Kp(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function Wp(t){if(ss(t)&&t.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gp{}function fy(t,...e){for(const n of e)t=n._apply(t);return t}class zp extends Gp{constructor(e,n){super(),this.zc=e,this.Yc=n,this.type="orderBy"}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new w(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new w(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new yt(i,r);return function(a,c){if(ka(a)===null){const u=ba(a);u!==null&&Yp(a,u,c.field)}}(s,o),o}(e._query,this.zc,this.Yc);return new gn(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new nn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function py(t,e="asc"){const n=e,s=Sr("orderBy",t);return new zp(s,n)}function Yp(t,e,n){if(!n.isEqual(e))throw new w(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class Jp{convertValue(e,n="none"){switch(Je(e)){case 0:return null;case 1:return e.booleanValue;case 2:return x(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw I()}}convertObject(e,n){const s={};return Ye(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new vr(x(e.latitude),x(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ya(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Zt(e));default:return null}}convertTimestamp(e){const n=Ne(e);return new ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=L.fromString(e);D(ic(s));const i=new pn(s.get(1),s.get(3)),r=new _(s.popFirst(5));return i.isEqual(n)||Re(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Xp(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Gc extends Jp{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,n)}}function gy(t,e,n,...s){t=nt(t,le);const i=nt(t.firestore,St),r=Bc(i);let o;return o=typeof(e=se(e))=="string"||e instanceof ws?Bp(r,"updateDoc",t._key,e,n,s):$p(r,"updateDoc",t._key,e),Ar(i,[o.toMutation(t._key,De.exists(!0))])}function my(t){return Ar(nt(t.firestore,St),[new qa(t._key,De.none())])}function yy(t,e){const n=nt(t.firestore,St),s=Pp(t),i=Xp(t.converter,e);return Ar(n,[Vp(Bc(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,De.exists(!1))]).then(()=>s)}function vy(t,...e){var n,s,i;t=se(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Uc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Uc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof le)u=nt(t.firestore,St),l=Gi(t._key.path),c={next:h=>{e[o]&&e[o](Qp(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=nt(t,gn);u=nt(h.firestore,St),l=h._query;const d=new Gc(u);c={next:p=>{e[o]&&e[o](new Hp(u,d,h,p))},error:e[o+1],complete:e[o+2]},Wp(t._query)}return function(h,d,p,y){const A=new Ap(y),k=new op(d,A,p);return h.asyncQueue.enqueueAndForget(async()=>np(await Nc(h),k)),()=>{A.nc(),h.asyncQueue.enqueueAndForget(async()=>sp(await Nc(h),k))}}(xc(u),l,a,c)}function Ar(t,e){return function(n,s){const i=new ze;return n.asyncQueue.enqueueAndForget(async()=>pp(await Np(n),s,i)),i.promise}(xc(t),e)}function Qp(t,e,n){const s=n.docs.get(e._key),i=new Gc(t);return new Wc(t,i,e._key,s,new mn(n.hasPendingWrites,n.fromCache),e.converter)}function wy(){return new Tr("serverTimestamp")}(function(t,e=!0){(function(n){dt=n})(ot),rt(new $e("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new St(i,new rd(n.getProvider("auth-internal")),new ud(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),fe(la,"3.4.3",t),fe(la,"3.4.3","esm2017")})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function kr(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function zc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zp=zc,Yc=new Dt("auth","Firebase",zc());/**
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
 */const Jc=new Bs("@firebase/auth");function As(t,...e){Jc.logLevel<=R.ERROR&&Jc.error(`Auth (${ot}): ${t}`,...e)}/**
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
 */function Ee(t,...e){throw br(t,...e)}function ge(t,...e){return br(t,...e)}function eg(t,e,n){const s=Object.assign(Object.assign({},Zp()),{[e]:n});return new Dt("auth","Firebase",s).create(e,{appName:t.name})}function br(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Yc.create(t,...e)}function E(t,e,...n){if(!t)throw br(e,...n)}function Ie(t){const e="INTERNAL ASSERTION FAILED: "+t;throw As(e),new Error(e)}function Se(t,e){t||Ie(e)}/**
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
 */const Xc=new Map;function Ae(t){Se(t instanceof Function,"Expected a class definition");let e=Xc.get(t);return e?(Se(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xc.set(t,e),e)}/**
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
 */function tg(t,e){const n=An(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(In(r,e!=null?e:{}))return i;Ee(i,"already-initialized")}return n.initialize({options:e})}function ng(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ae);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Cr(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sg(){return Qc()==="http:"||Qc()==="https:"}function Qc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ig(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sg()||qr()||"connection"in navigator)?navigator.onLine:!0}function rg(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Se(n>e,"Short delay should be less than long delay!"),this.isMobile=Br()||jr()}get(){return ig()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rr(t,e){Se(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const og={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const ag=new yn(3e4,6e4);function cg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ks(t,e,n,s,i={}){return eu(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ot(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Zc.fetch()(tu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function eu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},og),e);try{const i=new lg(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Nr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Nr(t,"email-already-in-use",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eg(t,l,u);Ee(t,l)}}catch(i){if(i instanceof ke)throw i;Ee(t,"network-request-failed")}}async function ug(t,e,n,s,i={}){const r=await ks(t,e,n,s,i);return"mfaPendingCredential"in r&&Ee(t,"multi-factor-auth-required",{_serverResponse:r}),r}function tu(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Rr(t.config,i):`${t.config.apiScheme}://${i}`}class lg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ge(this.auth,"timeout")),ag.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=ge(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function hg(t,e){return ks(t,"POST","/v1/accounts:delete",e)}async function dg(t,e){return ks(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fg(t,e=!1){const n=se(t),s=await n.getIdToken(e),i=Or(s);E(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:vn(Dr(i.auth_time)),issuedAtTime:vn(Dr(i.iat)),expirationTime:vn(Dr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Dr(t){return Number(t)*1e3}function Or(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return As("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ju(n);return i?JSON.parse(i):(As("Failed to decode base64 JWT payload"),null)}catch(i){return As("Caught error parsing JWT payload as JSON",i),null}}function pg(t){const e=Or(t);return E(e,"internal-error"),E(typeof e.exp!="undefined","internal-error"),E(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ke&&gg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function gg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vn(this.lastLoginAt),this.creationTime=vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bs(t){var e;const n=t.auth,s=await t.getIdToken(),i=await wn(t,dg(n,{idToken:s}));E(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?wg(r.providerUserInfo):[],a=vg(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nu(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function yg(t){const e=se(t);await bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vg(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function wg(t){return t.map(e=>{var{providerId:n}=e,s=kr(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Tg(t,e){const n=await eu(t,{},async()=>{const s=Ot({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=tu(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken!="undefined","internal-error"),E(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):pg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Tg(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Tn;return s&&(E(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(E(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(E(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tn,this.toJSON())}_performRefresh(){return Ie("not implemented")}}/**
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
 */function Le(t,e){E(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class st{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=kr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new mg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new nu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await wn(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fg(this,e)}reload(){return yg(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await bs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wn(this,hg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(u=n.createdAt)!==null&&u!==void 0?u:void 0,ne=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:Y,emailVerified:M,isAnonymous:de,providerData:ve,stsTokenManager:Ve}=n;E(Y&&Ve,e,"internal-error");const Nt=Tn.fromJSON(this.name,Ve);E(typeof Y=="string",e,"internal-error"),Le(h,e.name),Le(d,e.name),E(typeof M=="boolean",e,"internal-error"),E(typeof de=="boolean",e,"internal-error"),Le(p,e.name),Le(y,e.name),Le(A,e.name),Le(k,e.name),Le(q,e.name),Le(ne,e.name);const Vs=new st({uid:Y,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:de,photoURL:y,phoneNumber:p,tenantId:A,stsTokenManager:Nt,createdAt:q,lastLoginAt:ne});return ve&&Array.isArray(ve)&&(Vs.providerData=ve.map(Wu=>Object.assign({},Wu))),k&&(Vs._redirectEventId=k),Vs}static async _fromIdTokenResponse(e,n,s=!1){const i=new Tn;i.updateFromServerResponse(n);const r=new st({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await bs(r),r}}/**
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
 */class su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}su.type="NONE";const iu=su;/**
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
 */function Cs(t,e,n){return`firebase:${t}:${e}:${n}`}class kt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Cs(this.userKey,i.apiKey,r),this.fullPersistenceKey=Cs("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new kt(Ae(iu),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Ae(iu);const o=Cs(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=st._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new kt(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new kt(r,e,s))}}/**
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
 */function ru(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ou(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lu(e))return"Blackberry";if(hu(e))return"Webos";if(Pr(e))return"Safari";if((e.includes("chrome/")||au(e))&&!e.includes("edge/"))return"Chrome";if(uu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ou(t=V()){return/firefox\//i.test(t)}function Pr(t=V()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function au(t=V()){return/crios\//i.test(t)}function cu(t=V()){return/iemobile/i.test(t)}function uu(t=V()){return/android/i.test(t)}function lu(t=V()){return/blackberry/i.test(t)}function hu(t=V()){return/webos/i.test(t)}function Rs(t=V()){return/iphone|ipad|ipod/i.test(t)}function _g(t=V()){var e;return Rs(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Eg(){return Hr()&&document.documentMode===10}function du(t=V()){return Rs(t)||uu(t)||hu(t)||lu(t)||/windows phone/i.test(t)||cu(t)}function Ig(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fu(t,e=[]){let n;switch(t){case"Browser":n=ru(V());break;case"Worker":n=`${ru(V())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ot}/${s}`}/**
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
 */class Sg{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gu(this),this.idTokenSubscription=new gu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ae(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await kt.create(this,e),!this._deleted)){if((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===r)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bs(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?se(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ae(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await kt.create(this,[Ae(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function pu(t){return se(t)}class gu{constructor(e){this.auth=e,this.observer=null,this.addObserver=il(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class mu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ie("not implemented")}_getIdTokenResponse(e){return Ie("not implemented")}_linkToIdToken(e,n){return Ie("not implemented")}_getReauthenticationResolver(e){return Ie("not implemented")}}/**
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
 */async function bt(t,e){return ug(t,"POST","/v1/accounts:signInWithIdp",cg(t,e))}/**
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
 */const Ag="http://localhost";class it extends mu{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new it(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ee("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=kr(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new it(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,bt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bt(e,n)}buildRequest(){const e={requestUri:Ag,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ot(n)}return e}}/**
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
 */class yu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _n extends yu{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Me extends _n{constructor(){super("facebook.com")}static credential(e){return it._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Me.credential(e.oauthAccessToken)}catch{return null}}}Me.FACEBOOK_SIGN_IN_METHOD="facebook.com";Me.PROVIDER_ID="facebook.com";/**
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
 */class Ue extends _n{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return it._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ue.credential(n,s)}catch{return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com";Ue.PROVIDER_ID="google.com";/**
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
 */class xe extends _n{constructor(){super("github.com")}static credential(e){return it._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xe.credential(e.oauthAccessToken)}catch{return null}}}xe.GITHUB_SIGN_IN_METHOD="github.com";xe.PROVIDER_ID="github.com";/**
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
 */class Fe extends _n{constructor(){super("twitter.com")}static credential(e,n){return it._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Fe.credential(n,s)}catch{return null}}}Fe.TWITTER_SIGN_IN_METHOD="twitter.com";Fe.PROVIDER_ID="twitter.com";/**
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
 */class Ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await st._fromIdTokenResponse(e,s,i),o=vu(s);return new Ct({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=vu(s);return new Ct({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function vu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ns extends ke{constructor(e,n,s,i){var r;super(n.code,n.message);this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ns(e,n,s,i)}}function wu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(t,r,e,s):r})}async function kg(t,e,n=!1){const s=await wn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ct._forOperation(t,"link",s)}/**
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
 */async function bg(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await wn(t,wu(s,i,e,t),n);E(r.idToken,s,"internal-error");const o=Or(r.idToken);E(o,s,"internal-error");const{sub:a}=o;return E(t.uid===a,s,"user-mismatch"),Ct._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ee(s,"user-mismatch"),r}}/**
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
 */async function Cg(t,e,n=!1){const s="signIn",i=await wu(t,s,e),r=await Ct._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}const Ds="__sak";/**
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
 */class Tu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ds,"1"),this.storage.removeItem(Ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Rg(){const t=V();return Pr(t)||Rs(t)}const Ng=1e3,Dg=10;class _u extends Tu{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rg()&&Ig(),this.fallbackToPolling=du(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Eg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dg):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Ng)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_u.type="LOCAL";const Og=_u;/**
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
 */class Eu extends Tu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Eu.type="SESSION";const Iu=Eu;/**
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
 */function Pg(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Os(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await Pg(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Os.receivers=[];/**
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
 */function Lr(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Lg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=Lr("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function me(){return window}function Mg(t){me().location.href=t}/**
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
 */function Su(){return typeof me().WorkerGlobalScope!="undefined"&&typeof me().importScripts=="function"}async function Ug(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fg(){return Su()?self:null}/**
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
 */const Au="firebaseLocalStorageDb",Vg=1,Ps="firebaseLocalStorage",ku="fbase_key";class En{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ls(t,e){return t.transaction([Ps],e?"readwrite":"readonly").objectStore(Ps)}function $g(){const t=indexedDB.deleteDatabase(Au);return new En(t).toPromise()}function Mr(){const t=indexedDB.open(Au,Vg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ps,{keyPath:ku})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ps)?e(s):(s.close(),await $g(),e(await Mr()))})})}async function bu(t,e,n){const s=Ls(t,!0).put({[ku]:e,value:n});return new En(s).toPromise()}async function Bg(t,e){const n=Ls(t,!1).get(e),s=await new En(n).toPromise();return s===void 0?null:s.value}function Cu(t,e){const n=Ls(t,!0).delete(e);return new En(n).toPromise()}const qg=800,jg=3;class Ru{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Su()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Os._getInstance(Fg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ug(),!this.activeServiceWorker)return;this.sender=new Lg(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mr();return await bu(e,Ds,"1"),await Cu(e,Ds),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>bu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Bg(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ls(i,!1).getAll();return new En(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ru.type="LOCAL";const Hg=Ru;/**
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
 */function Kg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Wg(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=ge("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Kg().appendChild(s)})}function Gg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new yn(3e4,6e4);/**
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
 */function zg(t,e){return e?Ae(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ur extends mu{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return bt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yg(t){return Cg(t.auth,new Ur(t),t.bypassAuthState)}function Jg(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),bg(n,new Ur(t),t.bypassAuthState)}async function Xg(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),kg(n,new Ur(t),t.bypassAuthState)}/**
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
 */class Nu{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yg;case"linkViaPopup":case"linkViaRedirect":return Xg;case"reauthViaPopup":case"reauthViaRedirect":return Jg;default:Ee(this.auth,"internal-error")}}resolve(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qg=new yn(2e3,1e4);class Rt extends Nu{constructor(e,n,s,i,r){super(e,n,i,r);this.provider=s,this.authWindow=null,this.pollId=null,Rt.currentPopupAction&&Rt.currentPopupAction.cancel(),Rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const e=Lr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Qg.get())};e()}}Rt.currentPopupAction=null;/**
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
 */const Zg="pendingRedirect",xr=new Map;class em extends Nu{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=xr.get(this.auth._key());if(!e){try{const s=await tm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}xr.set(this.auth._key(),e)}return this.bypassAuthState||xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tm(t,e){const n=sm(e),s=nm(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function nm(t){return Ae(t._redirectPersistence)}function sm(t){return Cs(Zg,t.config.apiKey,t.name)}async function im(t,e,n=!1){const s=pu(t),i=zg(s,e),o=await new em(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const rm=10*60*1e3;class om{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!am(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ou(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ge(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Du(e))}saveEventToCache(e){this.cachedEventUids.add(Du(e)),this.lastProcessedEventTime=Date.now()}}function Du(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ou({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function am(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ou(t);default:return!1}}/**
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
 */async function cm(t,e={}){return ks(t,"GET","/v1/projects",e)}/**
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
 */const um=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lm=/^https?/;async function hm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cm(t);for(const n of e)try{if(dm(n))return}catch{}Ee(t,"unauthorized-domain")}function dm(t){const e=Cr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!lm.test(n))return!1;if(um.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const fm=new yn(3e4,6e4);function Pu(){const t=me().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pm(t){return new Promise((e,n)=>{var s,i,r;function o(){Pu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pu(),n(ge(t,"network-request-failed"))},timeout:fm.get()})}if((i=(s=me().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((r=me().gapi)===null||r===void 0?void 0:r.load)o();else{const a=Gg("iframefcb");return me()[a]=()=>{gapi.load?o():n(ge(t,"network-request-failed"))},Wg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ms=null,e})}let Ms=null;function gm(t){return Ms=Ms||pm(t),Ms}/**
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
 */const mm=new yn(5e3,15e3),ym="__/auth/iframe",vm="emulator/auth/iframe",wm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _m(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rr(e,vm):`https://${t.config.authDomain}/${ym}`,s={apiKey:e.apiKey,appName:t.name,v:ot},i=Tm.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ot(s).slice(1)}`}async function Em(t){const e=await gm(t),n=me().gapi;return E(n,t,"internal-error"),e.open({where:document.body,url:_m(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wm,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=ge(t,"network-request-failed"),a=me().setTimeout(()=>{r(o)},mm.get());function c(){me().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Im={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sm=500,Am=600,km="_blank",bm="http://localhost";class Lu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cm(t,e,n,s=Sm,i=Am){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Im),{width:s.toString(),height:i.toString(),top:r,left:o}),u=V().toLowerCase();n&&(a=au(u)?km:n),ou(u)&&(e=e||bm,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(_g(u)&&a!=="_self")return Rm(e||"",a),new Lu(null);const h=window.open(e||"",a,l);E(h,t,"popup-blocked");try{h.focus()}catch{}return new Lu(h)}function Rm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Nm="__/auth/handler",Dm="emulator/auth/handler";function Mu(t,e,n,s,i,r){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ot,eventId:i};if(e instanceof yu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(r||{}))o[c]=u}if(e instanceof _n){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Om(t)}?${Ot(a).slice(1)}`}function Om({config:t}){return t.emulator?Rr(t,Dm):`https://${t.authDomain}/${Nm}`}/**
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
 */const Fr="webStorageSupport";class Pm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iu,this._completeRedirectFn=im}async _openPopup(e,n,s,i){var r;Se((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Mu(e,n,s,Cr(),i);return Cm(e,o,Lr())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Mg(Mu(e,n,s,Cr(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Se(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Em(e),s=new om(e);return n.register("authEvent",i=>(E(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fr,{type:Fr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Fr];o!==void 0&&n(!!o),Ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return du()||Pr()||Rs()}}const Lm=Pm;var Uu="@firebase/auth",xu="0.19.5";/**
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
 */class Mm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Um(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xm(t){rt(new $e("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=s.options;return(o=>{E(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),E(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fu(t)},c=new Sg(o,a);return ng(c,n),c})(s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),rt(new $e("auth-internal",e=>{const n=pu(e.getProvider("auth").getImmediate());return(s=>new Mm(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fe(Uu,xu,Um(t)),fe(Uu,xu,"esm2017")}/**
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
 */function Fm(t=Ks()){const e=An(t,"auth");return e.isInitialized()?e.getImmediate():tg(t,{popupRedirectResolver:Lm,persistence:[Hg,Og,Iu]})}xm("Browser");/**
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
 */const Fu="firebasestorage.googleapis.com",Vm="storageBucket",$m=2*60*1e3,Bm=10*60*1e3;/**
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
 */class ye extends ke{constructor(e,n){super(Vr(e),`Firebase Storage: ${n} (${Vr(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}_codeEquals(e){return Vr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Vr(t){return"storage/"+t}function qm(){const t="An unknown error occurred, please check the error payload for server response.";return new ye("unknown",t)}function jm(){return new ye("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Hm(){return new ye("canceled","User canceled the upload/download.")}function Km(t){return new ye("invalid-url","Invalid URL '"+t+"'.")}function Wm(t){return new ye("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Vu(t){return new ye("invalid-argument",t)}function $u(){return new ye("app-deleted","The Firebase app was deleted.")}function Gm(t){return new ye("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class he{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=he.makeFromUrl(e,n)}catch{return new he(e,"")}if(s.path==="")return s;throw Wm(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},A=n===Fu?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",q=new RegExp(`^https?://${A}/${i}/${k}`,"i"),Y=[{regex:a,indices:c,postModify:r},{regex:p,indices:y,postModify:u},{regex:q,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<Y.length;M++){const de=Y[M],ve=de.regex.exec(e);if(ve){const Ve=ve[de.indices.bucket];let Nt=ve[de.indices.path];Nt||(Nt=""),s=new he(Ve,Nt),de.postModify(s);break}}if(s==null)throw Km(e);return s}}class zm{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ym(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...k){u||(u=!0,e.apply(null,k))}function h(k){i=setTimeout(()=>{i=null,t(p,c())},k)}function d(){r&&clearTimeout(r)}function p(k,...q){if(u){d();return}if(k){d(),l.call(null,k,...q);return}if(c()||o){d(),l.call(null,k,...q);return}s<64&&(s*=2);let Y;a===1?(a=2,Y=0):Y=(s+Math.random())*1e3,h(Y)}let y=!1;function A(k){y||(y=!0,d(),!u&&(i!==null?(k||(a=2),clearTimeout(i),h(0)):k||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,A(!0)},n),A}function Jm(t){t(!1)}/**
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
 */function Xm(t){return t!==void 0}function Bu(t,e,n,s){if(s<e)throw Vu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Vu(`Invalid value for '${t}'. Expected ${n} or less.`)}function Qm(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Us;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Us||(Us={}));/**
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
 */class Zm{constructor(e,n,s,i,r,o,a,c,u,l,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new xs(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Us.NO_ERROR,c=r.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=r.getErrorCode()===Us.ABORT;s(!1,new xs(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new xs(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Xm(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=qm();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?$u():Hm();o(c)}else{const c=jm();o(c)}};this.canceled_?n(!1,new xs(!1,null,!0)):this.backoffId_=Ym(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,r=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||r}}class xs{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ey(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ty(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function ny(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sy(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iy(t,e,n,s,i,r){const o=Qm(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return ny(c,e),ey(c,n),ty(c,r),sy(c,s),new Zm(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function ry(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Fs{constructor(e,n){this._service=e,n instanceof he?this._location=n:this._location=he.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fs(e,n)}get root(){const e=new he(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return oy(this._location.path)}get storage(){return this._service}get parent(){const e=ry(this._location.path);if(e===null)return null;const n=new he(this._location.bucket,e);return new Fs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Gm(e)}}function qu(t,e){const n=e==null?void 0:e[Vm];return n==null?null:he.makeFromBucketSpec(n,t)}class ay{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Fu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$m,this._maxUploadRetryTime=Bm,this._requests=new Set,i!=null?this._bucket=he.makeFromBucketSpec(i,this._host):this._bucket=qu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=he.makeFromBucketSpec(this._url,e):this._bucket=qu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Bu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Bu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fs(this,e)}_makeRequest(e,n,s,i){if(this._deleted)return new zm($u());{const r=iy(e,this._appId,s,i,n,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const ju="@firebase/storage",Hu="0.9.1";/**
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
 */const Ku="storage";function cy(t=Ks(),e){return t=se(t),An(t,Ku).getImmediate({identifier:e})}function uy(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ay(n,s,i,e,ot)}function ly(){rt(new $e(Ku,uy,"PUBLIC").setMultipleInstances(!0)),fe(ju,Hu,""),fe(ju,Hu,"esm2017")}ly();const hy={apiKey:"AIzaSyDNn-jPrxQNMQLfIne_Wpr7Ev8Pagj32OU",authDomain:"project-vuejs-d5b77.firebaseapp.com",projectId:"project-vuejs-d5b77",storageBucket:"project-vuejs-d5b77.appspot.com",messagingSenderId:"895967814004",appId:"1:895967814004:web:39897281bdad3e9caacc21",measurementId:"G-VCPL78YCHT"},$r=Wl(hy),Ty=Mp($r);Fm($r);cy($r);export{Pp as C,yy as E,vy as I,dy as S,my as T,py as W,wy as a,Ty as d,gy as p,fy as q};
