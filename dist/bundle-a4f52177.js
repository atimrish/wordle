/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(540),ca=__webpack_require__(982);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Sg(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a)}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh);G(uh,b)}function zh(){E(uh);E(vh);E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e)}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else{if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a}return O}
function Vh(a,b){return"function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1)}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return[b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d)}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d)}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return[d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b)};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d)}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo)}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c)}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a;ik(a,b,c)}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f,b,c),f=f.sibling;V=e;Jj=h;U=l}kk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a,b,c)}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg())}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h)}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a)}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d))}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg())}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg()}}function Hj(){fj=ej.current;E(ej)}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}fh=null}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ih=!1}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(null!==f)}Sk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e)}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y)}function Lk(){for(;null!==Y&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else{c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K=h;C=g;ok.transition=f}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else{a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b))}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b)}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c)}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c)}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Xi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)});b[uf]=null}};function ml(a){this._internalRoot=a}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function nl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a)}}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d)});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c)}}),il(a,1)}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};exports.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Rk(a)};exports.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Qk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};exports.version="18.3.1-next-f1338f8080-20240426";


/***/ }),

/***/ 338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(961);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(551);
} else {}


/***/ }),

/***/ 20:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 287:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(287);
} else {}


/***/ }),

/***/ 848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(20);
} else {}


/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(463);
} else {}


/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g=__webpack_require__(540);function n(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var p="function"===typeof Object.is?Object.is:n,q=g.useSyncExternalStore,r=g.useRef,t=g.useEffect,u=g.useMemo,v=g.useDebugValue;
exports.useSyncExternalStoreWithSelector=function(a,b,e,l,h){var c=r(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=u(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==h&&f.hasValue){var b=f.value;if(h(b,a))return k=b}return k=a}b=k;if(p(d,a))return b;var e=l(a);if(void 0!==h&&h(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,h]);var d=q(a,c[0],c[1]);
t(function(){f.hasValue=!0;f.value=d},[d]);v(d);return d};


/***/ }),

/***/ 418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(154);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
;// ./src/pages/game/ui/GameContainer/GameContainer.module.css
// extracted by mini-css-extract-plugin
var _1 = "o0UbpQOOz2RXpT9XICXp";


;// ./src/pages/game/ui/WordInput/WordInput.module.css
// extracted by mini-css-extract-plugin
var WordInput_module_1 = "CZEjb0qp4BqwGt7Fre7h";
var _2 = "ALNWBe28VGSlaGoe2cQc";
var _3 = "buS3T0F7Kj97b6lsoMz8";
var _4 = "u6ylFloBiz3yOzOWey7v";
var _5 = "P5jY6RriJXHCkWhUj1mQ";
var _6 = "T40UMF1MAAOUFy3c0rI1";
var _7 = "QfvE9MQbdp7cxJq5NVrw";
var _8 = "mAohk5HM4KDFY6RQVoTk";


;// ./node_modules/redux/dist/redux.mjs
// src/utils/formatProdErrorMessage.ts
function formatProdErrorMessage(code) {
  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}

// src/utils/symbol-observable.ts
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;

// src/utils/actionTypes.ts
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;

// src/utils/isPlainObject.ts
function redux_isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}

// src/utils/kindOf.ts
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  const type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  const constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  let typeOfVal = typeof val;
  if (false) {}
  return typeOfVal;
}

// src/createStore.ts
function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!redux_isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }
    if (typeof action.type === "undefined") {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }
    if (typeof action.type !== "string") {
      throw new Error( true ? formatProdErrorMessage(17) : 0);
    }
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener) => {
      listener();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable
  };
  return store;
}
function legacy_createStore(reducer, preloadedState, enhancer) {
  return createStore(reducer, preloadedState, enhancer);
}

// src/utils/warning.ts
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}

// src/combineReducers.ts
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  const reducerKeys = Object.keys(reducers);
  const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }
  if (!redux_isPlainObject(inputState)) {
    return `The ${argumentName} has unexpected type of "${kindOf(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join('", "')}"`;
  }
  const unexpectedKeys = Object.keys(inputState).filter((key) => !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
  unexpectedKeys.forEach((key) => {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === actionTypes_default.REPLACE)
    return;
  if (unexpectedKeys.length > 0) {
    return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join('", "')}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join('", "')}". Unexpected keys will be ignored.`;
  }
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach((key) => {
    const reducer = reducers[key];
    const initialState = reducer(void 0, {
      type: actionTypes_default.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }
    if (typeof reducer(void 0, {
      type: actionTypes_default.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (false) {}
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  let unexpectedKeyCache;
  if (false) {}
  let shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    if (false) {}
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        const actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

// src/bindActionCreators.ts
function bindActionCreator(actionCreator, dispatch) {
  return function(...args) {
    return dispatch(actionCreator.apply(this, args));
  };
}
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

// src/compose.ts
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// src/applyMiddleware.ts
function applyMiddleware(...middlewares) {
  return (createStore2) => (reducer, preloadedState) => {
    const store = createStore2(reducer, preloadedState);
    let dispatch = () => {
      throw new Error( true ? formatProdErrorMessage(15) : 0);
    };
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}

// src/utils/isAction.ts
function redux_isAction(action) {
  return redux_isPlainObject(action) && "type" in action && typeof action.type === "string";
}

//# sourceMappingURL=redux.mjs.map
;// ./node_modules/redux-thunk/dist/redux-thunk.mjs
// src/index.ts
function createThunkMiddleware(extraArgument) {
  const middleware = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
  return middleware;
}
var redux_thunk_thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;


;// ./node_modules/immer/dist/immer.mjs
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  false ? 0 : [];
function die(error, ...args) {
  if (false) {}
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function immer_isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return immer_isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function immer_isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!immer_isDraft(value))
    die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0 /* Object */) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */)
    thing.set(propOrOldValue, value);
  else if (t === 3 /* Set */) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = immer_isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || immer_isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
    state.revoke_();
  else
    state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (false)
    {}
  if (immer_isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (immer_isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if (false)
    {}
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if (false)
    {}
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (immer_isDraft(base))
      base = immer_current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (immer_isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function immer_current(value) {
  if (!immer_isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (false) {}
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(
          state,
          basePath,
          patches,
          inversePatches
        );
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(
          state,
          basePath,
          patches,
          inversePatches
        );
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let { base_, assigned_ } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const { base_, copy_ } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE)
        return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? { op, path } : { op, path, value });
      inversePatches.push(
        op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
      );
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let { base_, copy_ } = state;
    let i = 0;
    base_.forEach((value) => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach((value) => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach((patch) => {
      const { path, op } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor"))
          die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype")
          die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object")
          die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj))
      return obj;
    if (Array.isArray(obj))
      return obj.map(deepClonePatchValue);
    if (isMap(obj))
      return new Map(
        Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
      );
    if (isSet(obj))
      return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj)
      cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE))
      cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (immer_isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else
      return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}

//# sourceMappingURL=immer.mjs.map
;// ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs
// src/index.ts




// src/createDraftSafeSelector.ts


var createDraftSafeSelectorCreator = (...args) => {
  const createSelector2 = createSelectorCreator(...args);
  const createDraftSafeSelector2 = Object.assign((...args2) => {
    const selector = createSelector2(...args2);
    const wrappedSelector = (value, ...rest) => selector(isDraft(value) ? current(value) : value, ...rest);
    Object.assign(wrappedSelector, selector);
    return wrappedSelector;
  }, {
    withTypes: () => createDraftSafeSelector2
  });
  return createDraftSafeSelector2;
};
var createDraftSafeSelector = /* @__PURE__ */ (/* unused pure expression or super */ null && (createDraftSafeSelectorCreator(weakMapMemoize)));

// src/configureStore.ts


// src/devtoolsExtension.ts

var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0) return void 0;
  if (typeof arguments[0] === "object") return compose;
  return compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
  return function(noop3) {
    return noop3;
  };
};

// src/getDefaultMiddleware.ts


// src/createAction.ts


// src/tsHelpers.ts
var hasMatchFunction = (v) => {
  return v && typeof v.match === "function";
};

// src/createAction.ts
function createAction(type, prepareAction) {
  function actionCreator(...args) {
    if (prepareAction) {
      let prepared = prepareAction(...args);
      if (!prepared) {
        throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(0) : 0);
      }
      return {
        type,
        payload: prepared.payload,
        ..."meta" in prepared && {
          meta: prepared.meta
        },
        ..."error" in prepared && {
          error: prepared.error
        }
      };
    }
    return {
      type,
      payload: args[0]
    };
  }
  actionCreator.toString = () => `${type}`;
  actionCreator.type = type;
  actionCreator.match = (action) => redux_isAction(action) && action.type === type;
  return actionCreator;
}
function isActionCreator(action) {
  return typeof action === "function" && "type" in action && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  hasMatchFunction(action);
}
function isFSA(action) {
  return isAction(action) && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
  return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}

// src/actionCreatorInvariantMiddleware.ts
function getMessage(type) {
  const splitType = type ? `${type}`.split("/") : [];
  const actionName = splitType[splitType.length - 1] || "actionCreator";
  return `Detected an action creator with type "${type || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${actionName}())\` instead of \`dispatch(${actionName})\`. This is necessary even if the action has no payload.`;
}
function createActionCreatorInvariantMiddleware(options = {}) {
  if (true) {
    return () => (next) => (action) => next(action);
  }
  const {
    isActionCreator: isActionCreator2 = isActionCreator
  } = options;
  return () => (next) => (action) => {
    if (isActionCreator2(action)) {
      console.warn(getMessage(action.type));
    }
    return next(action);
  };
}

// src/utils.ts

function getTimeMeasureUtils(maxDelay, fnName) {
  let elapsed = 0;
  return {
    measureTime(fn) {
      const started = Date.now();
      try {
        return fn();
      } finally {
        const finished = Date.now();
        elapsed += finished - started;
      }
    },
    warnIfExceeded() {
      if (elapsed > maxDelay) {
        console.warn(`${fnName} took ${elapsed}ms, which is more than the warning threshold of ${maxDelay}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
      }
    }
  };
}
function find(iterable, comparator) {
  for (const entry of iterable) {
    if (comparator(entry)) {
      return entry;
    }
  }
  return void 0;
}
var Tuple = class _Tuple extends Array {
  constructor(...items) {
    super(...items);
    Object.setPrototypeOf(this, _Tuple.prototype);
  }
  static get [Symbol.species]() {
    return _Tuple;
  }
  concat(...arr) {
    return super.concat.apply(this, arr);
  }
  prepend(...arr) {
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new _Tuple(...arr[0].concat(this));
    }
    return new _Tuple(...arr.concat(this));
  }
};
function freezeDraftable(val) {
  return isDraftable(val) ? produce(val, () => {
  }) : val;
}
function emplace(map, key, handler) {
  if (map.has(key)) {
    let value = map.get(key);
    if (handler.update) {
      value = handler.update(value, key, map);
      map.set(key, value);
    }
    return value;
  }
  if (!handler.insert) throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(10) : 0);
  const inserted = handler.insert(key, map);
  map.set(key, inserted);
  return inserted;
}

// src/immutableStateInvariantMiddleware.ts
function isImmutableDefault(value) {
  return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
  const trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
  return {
    detectMutations() {
      return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
    }
  };
}
function trackProperties(isImmutable, ignorePaths = [], obj, path = "", checkedObjects = /* @__PURE__ */ new Set()) {
  const tracked = {
    value: obj
  };
  if (!isImmutable(obj) && !checkedObjects.has(obj)) {
    checkedObjects.add(obj);
    tracked.children = {};
    for (const key in obj) {
      const childPath = path ? path + "." + key : key;
      if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
        continue;
      }
      tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
    }
  }
  return tracked;
}
function detectMutations(isImmutable, ignoredPaths = [], trackedProperty, obj, sameParentRef = false, path = "") {
  const prevObj = trackedProperty ? trackedProperty.value : void 0;
  const sameRef = prevObj === obj;
  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return {
      wasMutated: true,
      path
    };
  }
  if (isImmutable(prevObj) || isImmutable(obj)) {
    return {
      wasMutated: false
    };
  }
  const keysToDetect = {};
  for (let key in trackedProperty.children) {
    keysToDetect[key] = true;
  }
  for (let key in obj) {
    keysToDetect[key] = true;
  }
  const hasIgnoredPaths = ignoredPaths.length > 0;
  for (let key in keysToDetect) {
    const nestedPath = path ? path + "." + key : key;
    if (hasIgnoredPaths) {
      const hasMatches = ignoredPaths.some((ignored) => {
        if (ignored instanceof RegExp) {
          return ignored.test(nestedPath);
        }
        return nestedPath === ignored;
      });
      if (hasMatches) {
        continue;
      }
    }
    const result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
    if (result.wasMutated) {
      return result;
    }
  }
  return {
    wasMutated: false
  };
}
function createImmutableStateInvariantMiddleware(options = {}) {
  if (true) {
    return () => (next) => (action) => next(action);
  } else { var stringify, getSerialize; }
}

// src/serializableStateInvariantMiddleware.ts

function isPlain(val) {
  const type = typeof val;
  return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}
function findNonSerializableValue(value, path = "", isSerializable = isPlain, getEntries, ignoredPaths = [], cache) {
  let foundNestedSerializable;
  if (!isSerializable(value)) {
    return {
      keyPath: path || "<root>",
      value
    };
  }
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (cache?.has(value)) return false;
  const entries = getEntries != null ? getEntries(value) : Object.entries(value);
  const hasIgnoredPaths = ignoredPaths.length > 0;
  for (const [key, nestedValue] of entries) {
    const nestedPath = path ? path + "." + key : key;
    if (hasIgnoredPaths) {
      const hasMatches = ignoredPaths.some((ignored) => {
        if (ignored instanceof RegExp) {
          return ignored.test(nestedPath);
        }
        return nestedPath === ignored;
      });
      if (hasMatches) {
        continue;
      }
    }
    if (!isSerializable(nestedValue)) {
      return {
        keyPath: nestedPath,
        value: nestedValue
      };
    }
    if (typeof nestedValue === "object") {
      foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
      if (foundNestedSerializable) {
        return foundNestedSerializable;
      }
    }
  }
  if (cache && isNestedFrozen(value)) cache.add(value);
  return false;
}
function isNestedFrozen(value) {
  if (!Object.isFrozen(value)) return false;
  for (const nestedValue of Object.values(value)) {
    if (typeof nestedValue !== "object" || nestedValue === null) continue;
    if (!isNestedFrozen(nestedValue)) return false;
  }
  return true;
}
function createSerializableStateInvariantMiddleware(options = {}) {
  if (true) {
    return () => (next) => (action) => next(action);
  } else {}
}

// src/getDefaultMiddleware.ts
function isBoolean(x) {
  return typeof x === "boolean";
}
var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
  const {
    thunk = true,
    immutableCheck = true,
    serializableCheck = true,
    actionCreatorCheck = true
  } = options ?? {};
  let middlewareArray = new Tuple();
  if (thunk) {
    if (isBoolean(thunk)) {
      middlewareArray.push(redux_thunk_thunk);
    } else {
      middlewareArray.push(withExtraArgument(thunk.extraArgument));
    }
  }
  if (false) {}
  return middlewareArray;
};

// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = () => (payload) => ({
  payload,
  meta: {
    [SHOULD_AUTOBATCH]: true
  }
});
var createQueueWithTimer = (timeout) => {
  return (notify) => {
    setTimeout(notify, timeout);
  };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
var autoBatchEnhancer = (options = {
  type: "raf"
}) => (next) => (...args) => {
  const store = next(...args);
  let notifying = true;
  let shouldNotifyAtEndOfTick = false;
  let notificationQueued = false;
  const listeners = /* @__PURE__ */ new Set();
  const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
  const notifyListeners = () => {
    notificationQueued = false;
    if (shouldNotifyAtEndOfTick) {
      shouldNotifyAtEndOfTick = false;
      listeners.forEach((l) => l());
    }
  };
  return Object.assign({}, store, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(listener2) {
      const wrappedListener = () => notifying && listener2();
      const unsubscribe = store.subscribe(wrappedListener);
      listeners.add(listener2);
      return () => {
        unsubscribe();
        listeners.delete(listener2);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(action) {
      try {
        notifying = !action?.meta?.[SHOULD_AUTOBATCH];
        shouldNotifyAtEndOfTick = !notifying;
        if (shouldNotifyAtEndOfTick) {
          if (!notificationQueued) {
            notificationQueued = true;
            queueCallback(notifyListeners);
          }
        }
        return store.dispatch(action);
      } finally {
        notifying = true;
      }
    }
  });
};

// src/getDefaultEnhancers.ts
var buildGetDefaultEnhancers = (middlewareEnhancer) => function getDefaultEnhancers(options) {
  const {
    autoBatch = true
  } = options ?? {};
  let enhancerArray = new Tuple(middlewareEnhancer);
  if (autoBatch) {
    enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
  }
  return enhancerArray;
};

// src/configureStore.ts
function configureStore(options) {
  const getDefaultMiddleware = buildGetDefaultMiddleware();
  const {
    reducer = void 0,
    middleware,
    devTools = true,
    preloadedState = void 0,
    enhancers = void 0
  } = options || {};
  let rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (redux_isPlainObject(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(1) : 0);
  }
  if (false) {}
  let finalMiddleware;
  if (typeof middleware === "function") {
    finalMiddleware = middleware(getDefaultMiddleware);
    if (false) {}
  } else {
    finalMiddleware = getDefaultMiddleware();
  }
  if (false) {}
  let finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools({
      // Enable capture of stack traces for dispatched Redux actions
      trace: "production" !== "production",
      ...typeof devTools === "object" && devTools
    });
  }
  const middlewareEnhancer = applyMiddleware(...finalMiddleware);
  const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
  if (false) {}
  let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
  if (false) {}
  if (false) {}
  if (false) {}
  const composedEnhancer = finalCompose(...storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}

// src/createReducer.ts


// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
  const actionsMap = {};
  const actionMatchers = [];
  let defaultCaseReducer;
  const builder = {
    addCase(typeOrActionCreator, reducer) {
      if (false) {}
      const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (!type) {
        throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(28) : 0);
      }
      if (type in actionsMap) {
        throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(29) : 0);
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher(matcher, reducer) {
      if (false) {}
      actionMatchers.push({
        matcher,
        reducer
      });
      return builder;
    },
    addDefaultCase(reducer) {
      if (false) {}
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}

// src/createReducer.ts
function isStateFunction(x) {
  return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
  if (false) {}
  let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
  let getInitialState;
  if (isStateFunction(initialState)) {
    getInitialState = () => freezeDraftable(initialState());
  } else {
    const frozenInitialState = freezeDraftable(initialState);
    getInitialState = () => frozenInitialState;
  }
  function reducer(state = getInitialState(), action) {
    let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({
      matcher
    }) => matcher(action)).map(({
      reducer: reducer2
    }) => reducer2)];
    if (caseReducers.filter((cr) => !!cr).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce((previousState, caseReducer) => {
      if (caseReducer) {
        if (immer_isDraft(previousState)) {
          const draft = previousState;
          const result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!isDraftable(previousState)) {
          const result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return produce(previousState, (draft) => {
            return caseReducer(draft, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}

// src/matchers.ts
var matches = (matcher, action) => {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};
function isAnyOf(...matchers) {
  return (action) => {
    return matchers.some((matcher) => matches(matcher, action));
  };
}
function isAllOf(...matchers) {
  return (action) => {
    return matchers.every((matcher) => matches(matcher, action));
  };
}
function hasExpectedRequestMetadata(action, validStatus) {
  if (!action || !action.meta) return false;
  const hasValidRequestId = typeof action.meta.requestId === "string";
  const hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
  return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
  return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["pending"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.pending));
}
function isRejected(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["rejected"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.rejected));
}
function isRejectedWithValue(...asyncThunks) {
  const hasFlag = (action) => {
    return action && action.meta && action.meta.rejectedWithValue;
  };
  if (asyncThunks.length === 0) {
    return isAllOf(isRejected(...asyncThunks), hasFlag);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0]);
  }
  return isAllOf(isRejected(...asyncThunks), hasFlag);
}
function isFulfilled(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["fulfilled"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.fulfilled));
}
function isAsyncThunkAction(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.flatMap((asyncThunk) => [asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled]));
}

// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};

// src/createAsyncThunk.ts
var commonProperties = ["name", "message", "stack", "code"];
var RejectWithValue = class {
  constructor(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
};
var FulfillWithMeta = class {
  constructor(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
};
var miniSerializeError = (value) => {
  if (typeof value === "object" && value !== null) {
    const simpleError = {};
    for (const property of commonProperties) {
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return {
    message: String(value)
  };
};
var createAsyncThunk = /* @__PURE__ */ (() => {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta) => ({
      payload,
      meta: {
        ...meta || {},
        arg,
        requestId,
        requestStatus: "fulfilled"
      }
    }));
    const pending = createAction(typePrefix + "/pending", (requestId, arg, meta) => ({
      payload: void 0,
      meta: {
        ...meta || {},
        arg,
        requestId,
        requestStatus: "pending"
      }
    }));
    const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta) => ({
      payload,
      error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
      meta: {
        ...meta || {},
        arg,
        requestId,
        rejectedWithValue: !!payload,
        requestStatus: "rejected",
        aborted: error?.name === "AbortError",
        condition: error?.name === "ConditionError"
      }
    }));
    function actionCreator(arg) {
      return (dispatch, getState, extra) => {
        const requestId = options?.idGenerator ? options.idGenerator(arg) : nanoid();
        const abortController = new AbortController();
        let abortHandler;
        let abortReason;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        const promise = async function() {
          let finalAction;
          try {
            let conditionResult = options?.condition?.(arg, {
              getState,
              extra
            });
            if (isThenable(conditionResult)) {
              conditionResult = await conditionResult;
            }
            if (conditionResult === false || abortController.signal.aborted) {
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            }
            const abortedPromise = new Promise((_, reject) => {
              abortHandler = () => {
                reject({
                  name: "AbortError",
                  message: abortReason || "Aborted"
                });
              };
              abortController.signal.addEventListener("abort", abortHandler);
            });
            dispatch(pending(requestId, arg, options?.getPendingMeta?.({
              requestId,
              arg
            }, {
              getState,
              extra
            })));
            finalAction = await Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
              dispatch,
              getState,
              extra,
              requestId,
              signal: abortController.signal,
              abort,
              rejectWithValue: (value, meta) => {
                return new RejectWithValue(value, meta);
              },
              fulfillWithValue: (value, meta) => {
                return new FulfillWithMeta(value, meta);
              }
            })).then((result) => {
              if (result instanceof RejectWithValue) {
                throw result;
              }
              if (result instanceof FulfillWithMeta) {
                return fulfilled(result.payload, requestId, arg, result.meta);
              }
              return fulfilled(result, requestId, arg);
            })]);
          } catch (err) {
            finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
          } finally {
            if (abortHandler) {
              abortController.signal.removeEventListener("abort", abortHandler);
            }
          }
          const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
          if (!skipDispatch) {
            dispatch(finalAction);
          }
          return finalAction;
        }();
        return Object.assign(promise, {
          abort,
          requestId,
          arg,
          unwrap() {
            return promise.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      settled: isAnyOf(rejected, fulfilled),
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = () => createAsyncThunk2;
  return createAsyncThunk2;
})();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}

// src/createSlice.ts
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
var asyncThunkCreator = {
  [asyncThunkSymbol]: createAsyncThunk
};
var ReducerType = /* @__PURE__ */ ((ReducerType2) => {
  ReducerType2["reducer"] = "reducer";
  ReducerType2["reducerWithPrepare"] = "reducerWithPrepare";
  ReducerType2["asyncThunk"] = "asyncThunk";
  return ReducerType2;
})(ReducerType || {});
function getType(slice, actionKey) {
  return `${slice}/${actionKey}`;
}
function buildCreateSlice({
  creators
} = {}) {
  const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
  return function createSlice2(options) {
    const {
      name,
      reducerPath = name
    } = options;
    if (!name) {
      throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(11) : 0);
    }
    if (typeof process !== "undefined" && "production" === "development") {}
    const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
    const reducerNames = Object.keys(reducers);
    const context = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    };
    const contextMethods = {
      addCase(typeOrActionCreator, reducer2) {
        const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
        if (!type) {
          throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(12) : 0);
        }
        if (type in context.sliceCaseReducersByType) {
          throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(13) : 0);
        }
        context.sliceCaseReducersByType[type] = reducer2;
        return contextMethods;
      },
      addMatcher(matcher, reducer2) {
        context.sliceMatchers.push({
          matcher,
          reducer: reducer2
        });
        return contextMethods;
      },
      exposeAction(name2, actionCreator) {
        context.actionCreators[name2] = actionCreator;
        return contextMethods;
      },
      exposeCaseReducer(name2, reducer2) {
        context.sliceCaseReducersByName[name2] = reducer2;
        return contextMethods;
      }
    };
    reducerNames.forEach((reducerName) => {
      const reducerDefinition = reducers[reducerName];
      const reducerDetails = {
        reducerName,
        type: getType(name, reducerName),
        createNotation: typeof options.reducers === "function"
      };
      if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) {
        handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
      } else {
        handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
      }
    });
    function buildReducer() {
      if (false) {}
      const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
      const finalCaseReducers = {
        ...extraReducers,
        ...context.sliceCaseReducersByType
      };
      return createReducer(options.initialState, (builder) => {
        for (let key in finalCaseReducers) {
          builder.addCase(key, finalCaseReducers[key]);
        }
        for (let sM of context.sliceMatchers) {
          builder.addMatcher(sM.matcher, sM.reducer);
        }
        for (let m of actionMatchers) {
          builder.addMatcher(m.matcher, m.reducer);
        }
        if (defaultCaseReducer) {
          builder.addDefaultCase(defaultCaseReducer);
        }
      });
    }
    const selectSelf = (state) => state;
    const injectedSelectorCache = /* @__PURE__ */ new Map();
    let _reducer;
    function reducer(state, action) {
      if (!_reducer) _reducer = buildReducer();
      return _reducer(state, action);
    }
    function getInitialState() {
      if (!_reducer) _reducer = buildReducer();
      return _reducer.getInitialState();
    }
    function makeSelectorProps(reducerPath2, injected = false) {
      function selectSlice(state) {
        let sliceState = state[reducerPath2];
        if (typeof sliceState === "undefined") {
          if (injected) {
            sliceState = getInitialState();
          } else if (false) {}
        }
        return sliceState;
      }
      function getSelectors(selectState = selectSelf) {
        const selectorCache = emplace(injectedSelectorCache, injected, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return emplace(selectorCache, selectState, {
          insert: () => {
            const map = {};
            for (const [name2, selector] of Object.entries(options.selectors ?? {})) {
              map[name2] = wrapSelector(selector, selectState, getInitialState, injected);
            }
            return map;
          }
        });
      }
      return {
        reducerPath: reducerPath2,
        getSelectors,
        get selectors() {
          return getSelectors(selectSlice);
        },
        selectSlice
      };
    }
    const slice = {
      name,
      reducer,
      actions: context.actionCreators,
      caseReducers: context.sliceCaseReducersByName,
      getInitialState,
      ...makeSelectorProps(reducerPath),
      injectInto(injectable, {
        reducerPath: pathOpt,
        ...config
      } = {}) {
        const newReducerPath = pathOpt ?? reducerPath;
        injectable.inject({
          reducerPath: newReducerPath,
          reducer
        }, config);
        return {
          ...slice,
          ...makeSelectorProps(newReducerPath, true)
        };
      }
    };
    return slice;
  };
}
function wrapSelector(selector, selectState, getInitialState, injected) {
  function wrapper(rootState, ...args) {
    let sliceState = selectState(rootState);
    if (typeof sliceState === "undefined") {
      if (injected) {
        sliceState = getInitialState();
      } else if (false) {}
    }
    return selector(sliceState, ...args);
  }
  wrapper.unwrapped = selector;
  return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
  function asyncThunk(payloadCreator, config) {
    return {
      _reducerDefinitionType: "asyncThunk" /* asyncThunk */,
      payloadCreator,
      ...config
    };
  }
  asyncThunk.withTypes = () => asyncThunk;
  return {
    reducer(caseReducer) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [caseReducer.name](...args) {
          return caseReducer(...args);
        }
      }[caseReducer.name], {
        _reducerDefinitionType: "reducer" /* reducer */
      });
    },
    preparedReducer(prepare, reducer) {
      return {
        _reducerDefinitionType: "reducerWithPrepare" /* reducerWithPrepare */,
        prepare,
        reducer
      };
    },
    asyncThunk
  };
}
function handleNormalReducerDefinition({
  type,
  reducerName,
  createNotation
}, maybeReducerWithPrepare, context) {
  let caseReducer;
  let prepareCallback;
  if ("reducer" in maybeReducerWithPrepare) {
    if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) {
      throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(17) : 0);
    }
    caseReducer = maybeReducerWithPrepare.reducer;
    prepareCallback = maybeReducerWithPrepare.prepare;
  } else {
    caseReducer = maybeReducerWithPrepare;
  }
  context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
  return reducerDefinition._reducerDefinitionType === "asyncThunk" /* asyncThunk */;
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
  return reducerDefinition._reducerDefinitionType === "reducerWithPrepare" /* reducerWithPrepare */;
}
function handleThunkCaseReducerDefinition({
  type,
  reducerName
}, reducerDefinition, context, cAT) {
  if (!cAT) {
    throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(18) : 0);
  }
  const {
    payloadCreator,
    fulfilled,
    pending,
    rejected,
    settled,
    options
  } = reducerDefinition;
  const thunk = cAT(type, payloadCreator, options);
  context.exposeAction(reducerName, thunk);
  if (fulfilled) {
    context.addCase(thunk.fulfilled, fulfilled);
  }
  if (pending) {
    context.addCase(thunk.pending, pending);
  }
  if (rejected) {
    context.addCase(thunk.rejected, rejected);
  }
  if (settled) {
    context.addMatcher(thunk.settled, settled);
  }
  context.exposeCaseReducer(reducerName, {
    fulfilled: fulfilled || noop,
    pending: pending || noop,
    rejected: rejected || noop,
    settled: settled || noop
  });
}
function noop() {
}

// src/entities/entity_state.ts
function getInitialEntityState() {
  return {
    ids: [],
    entities: {}
  };
}
function createInitialStateFactory(stateAdapter) {
  function getInitialState(additionalState = {}, entities) {
    const state = Object.assign(getInitialEntityState(), additionalState);
    return entities ? stateAdapter.setAll(state, entities) : state;
  }
  return {
    getInitialState
  };
}

// src/entities/state_selectors.ts
function createSelectorsFactory() {
  function getSelectors(selectState, options = {}) {
    const {
      createSelector: createSelector2 = createDraftSafeSelector
    } = options;
    const selectIds = (state) => state.ids;
    const selectEntities = (state) => state.entities;
    const selectAll = createSelector2(selectIds, selectEntities, (ids, entities) => ids.map((id) => entities[id]));
    const selectId = (_, id) => id;
    const selectById = (entities, id) => entities[id];
    const selectTotal = createSelector2(selectIds, (ids) => ids.length);
    if (!selectState) {
      return {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
        selectById: createSelector2(selectEntities, selectId, selectById)
      };
    }
    const selectGlobalizedEntities = createSelector2(selectState, selectEntities);
    return {
      selectIds: createSelector2(selectState, selectIds),
      selectEntities: selectGlobalizedEntities,
      selectAll: createSelector2(selectState, selectAll),
      selectTotal: createSelector2(selectState, selectTotal),
      selectById: createSelector2(selectGlobalizedEntities, selectId, selectById)
    };
  }
  return {
    getSelectors
  };
}

// src/entities/state_adapter.ts

var isDraftTyped = (/* unused pure expression or super */ null && (isDraft3));
function createSingleArgumentStateOperator(mutator) {
  const operator = createStateOperator((_, state) => mutator(state));
  return function operation(state) {
    return operator(state, void 0);
  };
}
function createStateOperator(mutator) {
  return function operation(state, arg) {
    function isPayloadActionArgument(arg2) {
      return isFSA(arg2);
    }
    const runMutator = (draft) => {
      if (isPayloadActionArgument(arg)) {
        mutator(arg.payload, draft);
      } else {
        mutator(arg, draft);
      }
    };
    if (isDraftTyped(state)) {
      runMutator(state);
      return state;
    }
    return createNextState3(state, runMutator);
  };
}

// src/entities/utils.ts

function selectIdValue(entity, selectId) {
  const key = selectId(entity);
  if (false) {}
  return key;
}
function ensureEntitiesArray(entities) {
  if (!Array.isArray(entities)) {
    entities = Object.values(entities);
  }
  return entities;
}
function getCurrent(value) {
  return isDraft4(value) ? current2(value) : value;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
  newEntities = ensureEntitiesArray(newEntities);
  const existingIdsArray = getCurrent(state.ids);
  const existingIds = new Set(existingIdsArray);
  const added = [];
  const updated = [];
  for (const entity of newEntities) {
    const id = selectIdValue(entity, selectId);
    if (existingIds.has(id)) {
      updated.push({
        id,
        changes: entity
      });
    } else {
      added.push(entity);
    }
  }
  return [added, updated, existingIdsArray];
}

// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
  function addOneMutably(entity, state) {
    const key = selectIdValue(entity, selectId);
    if (key in state.entities) {
      return;
    }
    state.ids.push(key);
    state.entities[key] = entity;
  }
  function addManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    for (const entity of newEntities) {
      addOneMutably(entity, state);
    }
  }
  function setOneMutably(entity, state) {
    const key = selectIdValue(entity, selectId);
    if (!(key in state.entities)) {
      state.ids.push(key);
    }
    ;
    state.entities[key] = entity;
  }
  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    for (const entity of newEntities) {
      setOneMutably(entity, state);
    }
  }
  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.ids = [];
    state.entities = {};
    addManyMutably(newEntities, state);
  }
  function removeOneMutably(key, state) {
    return removeManyMutably([key], state);
  }
  function removeManyMutably(keys, state) {
    let didMutate = false;
    keys.forEach((key) => {
      if (key in state.entities) {
        delete state.entities[key];
        didMutate = true;
      }
    });
    if (didMutate) {
      state.ids = state.ids.filter((id) => id in state.entities);
    }
  }
  function removeAllMutably(state) {
    Object.assign(state, {
      ids: [],
      entities: {}
    });
  }
  function takeNewKey(keys, update, state) {
    const original3 = state.entities[update.id];
    if (original3 === void 0) {
      return false;
    }
    const updated = Object.assign({}, original3, update.changes);
    const newKey = selectIdValue(updated, selectId);
    const hasNewKey = newKey !== update.id;
    if (hasNewKey) {
      keys[update.id] = newKey;
      delete state.entities[update.id];
    }
    ;
    state.entities[newKey] = updated;
    return hasNewKey;
  }
  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }
  function updateManyMutably(updates, state) {
    const newKeys = {};
    const updatesPerEntity = {};
    updates.forEach((update) => {
      if (update.id in state.entities) {
        updatesPerEntity[update.id] = {
          id: update.id,
          // Spreads ignore falsy values, so this works even if there isn't
          // an existing update already at this key
          changes: {
            ...updatesPerEntity[update.id]?.changes,
            ...update.changes
          }
        };
      }
    });
    updates = Object.values(updatesPerEntity);
    const didMutateEntities = updates.length > 0;
    if (didMutateEntities) {
      const didMutateIds = updates.filter((update) => takeNewKey(newKeys, update, state)).length > 0;
      if (didMutateIds) {
        state.ids = Object.values(state.entities).map((e) => selectIdValue(e, selectId));
      }
    }
  }
  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }
  function upsertManyMutably(newEntities, state) {
    const [added, updated] = splitAddedUpdatedEntities(newEntities, selectId, state);
    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }
  return {
    removeAll: createSingleArgumentStateOperator(removeAllMutably),
    addOne: createStateOperator(addOneMutably),
    addMany: createStateOperator(addManyMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    updateOne: createStateOperator(updateOneMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    upsertMany: createStateOperator(upsertManyMutably),
    removeOne: createStateOperator(removeOneMutably),
    removeMany: createStateOperator(removeManyMutably)
  };
}

// src/entities/sorted_state_adapter.ts
function findInsertIndex(sortedItems, item, comparisonFunction) {
  let lowIndex = 0;
  let highIndex = sortedItems.length;
  while (lowIndex < highIndex) {
    let middleIndex = lowIndex + highIndex >>> 1;
    const currentItem = sortedItems[middleIndex];
    const res = comparisonFunction(item, currentItem);
    if (res >= 0) {
      lowIndex = middleIndex + 1;
    } else {
      highIndex = middleIndex;
    }
  }
  return lowIndex;
}
function insert(sortedItems, item, comparisonFunction) {
  const insertAtIndex = findInsertIndex(sortedItems, item, comparisonFunction);
  sortedItems.splice(insertAtIndex, 0, item);
  return sortedItems;
}
function createSortedStateAdapter(selectId, comparer) {
  const {
    removeOne,
    removeMany,
    removeAll
  } = createUnsortedStateAdapter(selectId);
  function addOneMutably(entity, state) {
    return addManyMutably([entity], state);
  }
  function addManyMutably(newEntities, state, existingIds) {
    newEntities = ensureEntitiesArray(newEntities);
    const existingKeys = new Set(existingIds ?? getCurrent(state.ids));
    const models = newEntities.filter((model) => !existingKeys.has(selectIdValue(model, selectId)));
    if (models.length !== 0) {
      mergeFunction(state, models);
    }
  }
  function setOneMutably(entity, state) {
    return setManyMutably([entity], state);
  }
  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    if (newEntities.length !== 0) {
      for (const item of newEntities) {
        delete state.entities[selectId(item)];
      }
      mergeFunction(state, newEntities);
    }
  }
  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.entities = {};
    state.ids = [];
    addManyMutably(newEntities, state, []);
  }
  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }
  function updateManyMutably(updates, state) {
    let appliedUpdates = false;
    let replacedIds = false;
    for (let update of updates) {
      const entity = state.entities[update.id];
      if (!entity) {
        continue;
      }
      appliedUpdates = true;
      Object.assign(entity, update.changes);
      const newId = selectId(entity);
      if (update.id !== newId) {
        replacedIds = true;
        delete state.entities[update.id];
        const oldIndex = state.ids.indexOf(update.id);
        state.ids[oldIndex] = newId;
        state.entities[newId] = entity;
      }
    }
    if (appliedUpdates) {
      mergeFunction(state, [], appliedUpdates, replacedIds);
    }
  }
  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }
  function upsertManyMutably(newEntities, state) {
    const [added, updated, existingIdsArray] = splitAddedUpdatedEntities(newEntities, selectId, state);
    if (updated.length) {
      updateManyMutably(updated, state);
    }
    if (added.length) {
      addManyMutably(added, state, existingIdsArray);
    }
  }
  function areArraysEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        continue;
      }
      return false;
    }
    return true;
  }
  const mergeFunction = (state, addedItems, appliedUpdates, replacedIds) => {
    const currentEntities = getCurrent(state.entities);
    const currentIds = getCurrent(state.ids);
    const stateEntities = state.entities;
    let ids = currentIds;
    if (replacedIds) {
      ids = new Set(currentIds);
    }
    let sortedEntities = [];
    for (const id of ids) {
      const entity = currentEntities[id];
      if (entity) {
        sortedEntities.push(entity);
      }
    }
    const wasPreviouslyEmpty = sortedEntities.length === 0;
    for (const item of addedItems) {
      stateEntities[selectId(item)] = item;
      if (!wasPreviouslyEmpty) {
        insert(sortedEntities, item, comparer);
      }
    }
    if (wasPreviouslyEmpty) {
      sortedEntities = addedItems.slice().sort(comparer);
    } else if (appliedUpdates) {
      sortedEntities.sort(comparer);
    }
    const newSortedIds = sortedEntities.map(selectId);
    if (!areArraysEqual(currentIds, newSortedIds)) {
      state.ids = newSortedIds;
    }
  };
  return {
    removeOne,
    removeMany,
    removeAll,
    addOne: createStateOperator(addOneMutably),
    updateOne: createStateOperator(updateOneMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    addMany: createStateOperator(addManyMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertMany: createStateOperator(upsertManyMutably)
  };
}

// src/entities/create_adapter.ts
function createEntityAdapter(options = {}) {
  const {
    selectId,
    sortComparer
  } = {
    sortComparer: false,
    selectId: (instance) => instance.id,
    ...options
  };
  const stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
  const stateFactory = createInitialStateFactory(stateAdapter);
  const selectorsFactory = createSelectorsFactory();
  return {
    selectId,
    sortComparer,
    ...stateFactory,
    ...selectorsFactory,
    ...stateAdapter
  };
}

// src/listenerMiddleware/index.ts


// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = (/* unused pure expression or super */ null && (`task-${cancelled}`));
var taskCompleted = (/* unused pure expression or super */ null && (`task-${completed}`));
var listenerCancelled = (/* unused pure expression or super */ null && (`${listener}-${cancelled}`));
var listenerCompleted = (/* unused pure expression or super */ null && (`${listener}-${completed}`));
var TaskAbortError = class {
  constructor(code) {
    this.code = code;
    this.message = `${task} ${cancelled} (reason: ${code})`;
  }
  name = "TaskAbortError";
  message;
};

// src/listenerMiddleware/utils.ts
var assertFunction = (func, expected) => {
  if (typeof func !== "function") {
    throw new TypeError( true ? redux_toolkit_modern_formatProdErrorMessage(32) : 0);
  }
};
var noop2 = () => {
};
var catchRejection = (promise, onError = noop2) => {
  promise.catch(onError);
  return promise;
};
var addAbortSignalListener = (abortSignal, callback) => {
  abortSignal.addEventListener("abort", callback, {
    once: true
  });
  return () => abortSignal.removeEventListener("abort", callback);
};
var abortControllerWithReason = (abortController, reason) => {
  const signal = abortController.signal;
  if (signal.aborted) {
    return;
  }
  if (!("reason" in signal)) {
    Object.defineProperty(signal, "reason", {
      enumerable: true,
      value: reason,
      configurable: true,
      writable: true
    });
  }
  ;
  abortController.abort(reason);
};

// src/listenerMiddleware/task.ts
var validateActive = (signal) => {
  if (signal.aborted) {
    const {
      reason
    } = signal;
    throw new TaskAbortError(reason);
  }
};
function raceWithSignal(signal, promise) {
  let cleanup = noop2;
  return new Promise((resolve, reject) => {
    const notifyRejection = () => reject(new TaskAbortError(signal.reason));
    if (signal.aborted) {
      notifyRejection();
      return;
    }
    cleanup = addAbortSignalListener(signal, notifyRejection);
    promise.finally(() => cleanup()).then(resolve, reject);
  }).finally(() => {
    cleanup = noop2;
  });
}
var runTask = async (task2, cleanUp) => {
  try {
    await Promise.resolve();
    const value = await task2();
    return {
      status: "ok",
      value
    };
  } catch (error) {
    return {
      status: error instanceof TaskAbortError ? "cancelled" : "rejected",
      error
    };
  } finally {
    cleanUp?.();
  }
};
var createPause = (signal) => {
  return (promise) => {
    return catchRejection(raceWithSignal(signal, promise).then((output) => {
      validateActive(signal);
      return output;
    }));
  };
};
var createDelay = (signal) => {
  const pause = createPause(signal);
  return (timeoutMs) => {
    return pause(new Promise((resolve) => setTimeout(resolve, timeoutMs)));
  };
};

// src/listenerMiddleware/index.ts
var {
  assign: redux_toolkit_modern_assign
} = Object;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = (parentAbortSignal, parentBlockingPromises) => {
  const linkControllers = (controller) => addAbortSignalListener(parentAbortSignal, () => abortControllerWithReason(controller, parentAbortSignal.reason));
  return (taskExecutor, opts) => {
    assertFunction(taskExecutor, "taskExecutor");
    const childAbortController = new AbortController();
    linkControllers(childAbortController);
    const result = runTask(async () => {
      validateActive(parentAbortSignal);
      validateActive(childAbortController.signal);
      const result2 = await taskExecutor({
        pause: createPause(childAbortController.signal),
        delay: createDelay(childAbortController.signal),
        signal: childAbortController.signal
      });
      validateActive(childAbortController.signal);
      return result2;
    }, () => abortControllerWithReason(childAbortController, taskCompleted));
    if (opts?.autoJoin) {
      parentBlockingPromises.push(result.catch(noop2));
    }
    return {
      result: createPause(parentAbortSignal)(result),
      cancel() {
        abortControllerWithReason(childAbortController, taskCancelled);
      }
    };
  };
};
var createTakePattern = (startListening, signal) => {
  const take = async (predicate, timeout) => {
    validateActive(signal);
    let unsubscribe = () => {
    };
    const tuplePromise = new Promise((resolve, reject) => {
      let stopListening = startListening({
        predicate,
        effect: (action, listenerApi) => {
          listenerApi.unsubscribe();
          resolve([action, listenerApi.getState(), listenerApi.getOriginalState()]);
        }
      });
      unsubscribe = () => {
        stopListening();
        reject();
      };
    });
    const promises = [tuplePromise];
    if (timeout != null) {
      promises.push(new Promise((resolve) => setTimeout(resolve, timeout, null)));
    }
    try {
      const output = await raceWithSignal(signal, Promise.race(promises));
      validateActive(signal);
      return output;
    } finally {
      unsubscribe();
    }
  };
  return (predicate, timeout) => catchRejection(take(predicate, timeout));
};
var getListenerEntryPropsFrom = (options) => {
  let {
    type,
    actionCreator,
    matcher,
    predicate,
    effect
  } = options;
  if (type) {
    predicate = createAction(type).match;
  } else if (actionCreator) {
    type = actionCreator.type;
    predicate = actionCreator.match;
  } else if (matcher) {
    predicate = matcher;
  } else if (predicate) {
  } else {
    throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(21) : 0);
  }
  assertFunction(effect, "options.listener");
  return {
    predicate,
    type,
    effect
  };
};
var createListenerEntry = /* @__PURE__ */ redux_toolkit_modern_assign((options) => {
  const {
    type,
    predicate,
    effect
  } = getListenerEntryPropsFrom(options);
  const id = nanoid();
  const entry = {
    id,
    effect,
    type,
    predicate,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(22) : 0);
    }
  };
  return entry;
}, {
  withTypes: () => createListenerEntry
});
var cancelActiveListeners = (entry) => {
  entry.pending.forEach((controller) => {
    abortControllerWithReason(controller, listenerCancelled);
  });
};
var createClearListenerMiddleware = (listenerMap) => {
  return () => {
    listenerMap.forEach(cancelActiveListeners);
    listenerMap.clear();
  };
};
var safelyNotifyError = (errorHandler, errorToNotify, errorInfo) => {
  try {
    errorHandler(errorToNotify, errorInfo);
  } catch (errorHandlerError) {
    setTimeout(() => {
      throw errorHandlerError;
    }, 0);
  }
};
var addListener = /* @__PURE__ */ redux_toolkit_modern_assign(/* @__PURE__ */ createAction(`${alm}/add`), {
  withTypes: () => addListener
});
var clearAllListeners = /* @__PURE__ */ (/* unused pure expression or super */ null && (createAction(`${alm}/removeAll`)));
var removeListener = /* @__PURE__ */ redux_toolkit_modern_assign(/* @__PURE__ */ createAction(`${alm}/remove`), {
  withTypes: () => removeListener
});
var defaultErrorHandler = (...args) => {
  console.error(`${alm}/error`, ...args);
};
var createListenerMiddleware = (middlewareOptions = {}) => {
  const listenerMap = /* @__PURE__ */ new Map();
  const {
    extra,
    onError = defaultErrorHandler
  } = middlewareOptions;
  assertFunction(onError, "onError");
  const insertEntry = (entry) => {
    entry.unsubscribe = () => listenerMap.delete(entry.id);
    listenerMap.set(entry.id, entry);
    return (cancelOptions) => {
      entry.unsubscribe();
      if (cancelOptions?.cancelActive) {
        cancelActiveListeners(entry);
      }
    };
  };
  const startListening = (options) => {
    let entry = find(Array.from(listenerMap.values()), (existingEntry) => existingEntry.effect === options.effect);
    if (!entry) {
      entry = createListenerEntry(options);
    }
    return insertEntry(entry);
  };
  redux_toolkit_modern_assign(startListening, {
    withTypes: () => startListening
  });
  const stopListening = (options) => {
    const {
      type,
      effect,
      predicate
    } = getListenerEntryPropsFrom(options);
    const entry = find(Array.from(listenerMap.values()), (entry2) => {
      const matchPredicateOrType = typeof type === "string" ? entry2.type === type : entry2.predicate === predicate;
      return matchPredicateOrType && entry2.effect === effect;
    });
    if (entry) {
      entry.unsubscribe();
      if (options.cancelActive) {
        cancelActiveListeners(entry);
      }
    }
    return !!entry;
  };
  redux_toolkit_modern_assign(stopListening, {
    withTypes: () => stopListening
  });
  const notifyListener = async (entry, action, api, getOriginalState) => {
    const internalTaskController = new AbortController();
    const take = createTakePattern(startListening, internalTaskController.signal);
    const autoJoinPromises = [];
    try {
      entry.pending.add(internalTaskController);
      await Promise.resolve(entry.effect(
        action,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        redux_toolkit_modern_assign({}, api, {
          getOriginalState,
          condition: (predicate, timeout) => take(predicate, timeout).then(Boolean),
          take,
          delay: createDelay(internalTaskController.signal),
          pause: createPause(internalTaskController.signal),
          extra,
          signal: internalTaskController.signal,
          fork: createFork(internalTaskController.signal, autoJoinPromises),
          unsubscribe: entry.unsubscribe,
          subscribe: () => {
            listenerMap.set(entry.id, entry);
          },
          cancelActiveListeners: () => {
            entry.pending.forEach((controller, _, set) => {
              if (controller !== internalTaskController) {
                abortControllerWithReason(controller, listenerCancelled);
                set.delete(controller);
              }
            });
          },
          cancel: () => {
            abortControllerWithReason(internalTaskController, listenerCancelled);
            entry.pending.delete(internalTaskController);
          },
          throwIfCancelled: () => {
            validateActive(internalTaskController.signal);
          }
        })
      ));
    } catch (listenerError) {
      if (!(listenerError instanceof TaskAbortError)) {
        safelyNotifyError(onError, listenerError, {
          raisedBy: "effect"
        });
      }
    } finally {
      await Promise.all(autoJoinPromises);
      abortControllerWithReason(internalTaskController, listenerCompleted);
      entry.pending.delete(internalTaskController);
    }
  };
  const clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
  const middleware = (api) => (next) => (action) => {
    if (!isAction3(action)) {
      return next(action);
    }
    if (addListener.match(action)) {
      return startListening(action.payload);
    }
    if (clearAllListeners.match(action)) {
      clearListenerMiddleware();
      return;
    }
    if (removeListener.match(action)) {
      return stopListening(action.payload);
    }
    let originalState = api.getState();
    const getOriginalState = () => {
      if (originalState === INTERNAL_NIL_TOKEN) {
        throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(23) : 0);
      }
      return originalState;
    };
    let result;
    try {
      result = next(action);
      if (listenerMap.size > 0) {
        const currentState = api.getState();
        const listenerEntries = Array.from(listenerMap.values());
        for (const entry of listenerEntries) {
          let runListener = false;
          try {
            runListener = entry.predicate(action, currentState, originalState);
          } catch (predicateError) {
            runListener = false;
            safelyNotifyError(onError, predicateError, {
              raisedBy: "predicate"
            });
          }
          if (!runListener) {
            continue;
          }
          notifyListener(entry, action, api, getOriginalState);
        }
      }
    } finally {
      originalState = INTERNAL_NIL_TOKEN;
    }
    return result;
  };
  return {
    middleware,
    startListening,
    stopListening,
    clearListeners: clearListenerMiddleware
  };
};

// src/dynamicMiddleware/index.ts

var createMiddlewareEntry = (middleware) => ({
  id: nanoid(),
  middleware,
  applied: /* @__PURE__ */ new Map()
});
var matchInstance = (instanceId) => (action) => action?.meta?.instanceId === instanceId;
var createDynamicMiddleware = () => {
  const instanceId = nanoid();
  const middlewareMap = /* @__PURE__ */ new Map();
  const withMiddleware = Object.assign(createAction("dynamicMiddleware/add", (...middlewares) => ({
    payload: middlewares,
    meta: {
      instanceId
    }
  })), {
    withTypes: () => withMiddleware
  });
  const addMiddleware = Object.assign(function addMiddleware2(...middlewares) {
    middlewares.forEach((middleware2) => {
      let entry = find(Array.from(middlewareMap.values()), (entry2) => entry2.middleware === middleware2);
      if (!entry) {
        entry = createMiddlewareEntry(middleware2);
      }
      middlewareMap.set(entry.id, entry);
    });
  }, {
    withTypes: () => addMiddleware
  });
  const getFinalMiddleware = (api) => {
    const appliedMiddleware = Array.from(middlewareMap.values()).map((entry) => emplace(entry.applied, api, {
      insert: () => entry.middleware(api)
    }));
    return compose3(...appliedMiddleware);
  };
  const isWithMiddleware = isAllOf(withMiddleware, matchInstance(instanceId));
  const middleware = (api) => (next) => (action) => {
    if (isWithMiddleware(action)) {
      addMiddleware(...action.payload);
      return api.dispatch;
    }
    return getFinalMiddleware(api)(next)(action);
  };
  return {
    middleware,
    addMiddleware,
    withMiddleware,
    instanceId
  };
};

// src/combineSlices.ts

var isSliceLike = (maybeSliceLike) => "reducerPath" in maybeSliceLike && typeof maybeSliceLike.reducerPath === "string";
var getReducers = (slices) => slices.flatMap((sliceOrMap) => isSliceLike(sliceOrMap) ? [[sliceOrMap.reducerPath, sliceOrMap.reducer]] : Object.entries(sliceOrMap));
var ORIGINAL_STATE = Symbol.for("rtk-state-proxy-original");
var isStateProxy = (value) => !!value && !!value[ORIGINAL_STATE];
var stateProxyMap = /* @__PURE__ */ new WeakMap();
var createStateProxy = (state, reducerMap) => emplace(stateProxyMap, state, {
  insert: () => new Proxy(state, {
    get: (target, prop, receiver) => {
      if (prop === ORIGINAL_STATE) return target;
      const result = Reflect.get(target, prop, receiver);
      if (typeof result === "undefined") {
        const reducer = reducerMap[prop.toString()];
        if (reducer) {
          const reducerResult = reducer(void 0, {
            type: nanoid()
          });
          if (typeof reducerResult === "undefined") {
            throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(24) : 0);
          }
          return reducerResult;
        }
      }
      return result;
    }
  })
});
var redux_toolkit_modern_original = (state) => {
  if (!isStateProxy(state)) {
    throw new Error( true ? redux_toolkit_modern_formatProdErrorMessage(25) : 0);
  }
  return state[ORIGINAL_STATE];
};
var noopReducer = (state = {}) => state;
function combineSlices(...slices) {
  const reducerMap = Object.fromEntries(getReducers(slices));
  const getReducer = () => Object.keys(reducerMap).length ? combineReducers2(reducerMap) : noopReducer;
  let reducer = getReducer();
  function combinedReducer(state, action) {
    return reducer(state, action);
  }
  combinedReducer.withLazyLoadedSlices = () => combinedReducer;
  const inject = (slice, config = {}) => {
    const {
      reducerPath,
      reducer: reducerToInject
    } = slice;
    const currentReducer = reducerMap[reducerPath];
    if (!config.overrideExisting && currentReducer && currentReducer !== reducerToInject) {
      if (typeof process !== "undefined" && "production" === "development") {}
      return combinedReducer;
    }
    reducerMap[reducerPath] = reducerToInject;
    reducer = getReducer();
    return combinedReducer;
  };
  const selector = Object.assign(function makeSelector(selectorFn, selectState) {
    return function selector2(state, ...args) {
      return selectorFn(createStateProxy(selectState ? selectState(state, ...args) : state, reducerMap), ...args);
    };
  }, {
    original: redux_toolkit_modern_original
  });
  return Object.assign(combinedReducer, {
    inject,
    selector
  });
}

// src/formatProdErrorMessage.ts
function redux_toolkit_modern_formatProdErrorMessage(code) {
  return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}

//# sourceMappingURL=redux-toolkit.modern.mjs.map
;// ./src/entities/game/lib/words.json
const words_namespaceObject = /*#__PURE__*/JSON.parse('["абаза","абака","аббат","абвер","абзац","аборт","абрек","абрис","абхаз","абцуг","абшид","аваль","аванс","авары","авгит","авгур","авдот","авель","авеля","авеню","аверс","авизо","авист","авлос","авось","авраа","аврал","авран","автол","автор","агава","агама","агари","агарь","агата","агато","агафь","агаша","аггел","агент","аглае","аглаи","аглаю","аглая","агнат","агнец","агора","аграф","агути","адама","адель","адепт","адлер","адлец","адова","адыге","ажгон","ажура","азама","азами","азарт","азбук","азиат","азида","азола","азхар","аймак","айран","айрол","айсор","акаде","акант","аканф","акбар","акима","аккур","акмит","акрид","акрил","аксен","аксон","актам","актах","актер","актив","актин","актов","актом","актри","акула","акция","акына","алгол","алеем","алеет","алеко","алекс","алеть","алеут","алиби","алкан","алкаш","алкен","алкид","алкил","аллах","аллея","аллил","аллод","аллюр","алмаз","алтын","алунд","алчба","алыча","альба","альма","альпы","альта","альфа","амаль","амбал","амбар","амбра","амвон","амеба","амида","амила","амиле","амилу","амилы","амина","амине","амину","аминь","амиям","амиях","аммос","аможе","амоса","ампер","ампир","ампул","амура","амфор","анапе","анапу","анапы","анаша","анаше","анаши","анашу","анбар","ангар","ангел","ангин","англ.","англи","англо","ангоб","андри","анекд","анели","анеля","анжел","аники","аниме","анион","аниса","анисе","анису","анкер","анкет","анной","аннот","анода","анонс","антиг","антик","антип","антич","антон","антре","ануса","анусе","анусу","анфас","анфил","анфим","анфис","анчар","аншеф","анюта","аорта","аорте","аорту","аорты","апекс","аписа","аписе","апису","аписы","аплит","аплод","апноэ","апорт","апрел","апрош","апсид","аптек","апфан","апчхи","апшин","араба","арабе","арабо","арабу","арабы","арака","араке","аракс","араку","арами","арапа","арапе","арапу","арапы","арбам","арбат","арбах","арбой","арбуз","аргал","аргон","аргус","ардал","ареал","арена","арене","арену","арены","арест","арефа","ариан","ариек","ариец","арина","арине","арину","арист","арифм","ариям","ариях","аркад","аркан","аркой","арлем","армад","арман","армий","армию","армия","армюр","армяк","армян","арома","арсин","артем","артил","артис","артос","артур","арфой","архар","архее","архея","архив","архип","арчой","аршин","арыка","арыке","арыки","арыку","асами","аскер","аскет","асмус","аспид","ассиг","астат","астаф","астле","астма","астме","астму","астмы","астра","астре","астру","астры","асцит","атака","атаке","атаки","атако","атаку","атлас","атлет","атмос","атого","атолл","атома","атоме","атому","атомы","атрий","атрию","атрия","аттес","аттик","аться","аудио","аудит","аукай","аукаю","аукая","аукни","аукну","аулам","аулах","аулов","аулом","аурат","аурой","аусте","аутам","аутах","аутов","аутом","афект","афера","афере","аферу","аферы","афиша","афише","афиши","афишу","афоне","африк","ахает","ахала","ахали","ахало","ахами","ахеец","ахилл","ахнем","ахнет","ахнув","ахнул","ахнут","ацтек","аэроб","аэрон","бабам","бабах","бабий","бабищ","бабка","бабке","бабки","бабку","бабой","бабок","бабус","бабуш","бабье","бабьи","бабью","бабья","багаж","багги","багер","багет","багор","багра","багре","багру","багры","багрю","багря","бадаб","бадан","баден","бадье","бадьи","бадью","бадья","базой","базук","байка","байту","байты","бакан","бакен","баком","бакса","баксе","баксу","баксы","балал","балам","балах","балда","балде","балду","балды","балет","балка","балке","балки","балку","балла","балле","баллу","баллы","балов","балок","балом","балта","балте","балту","балты","балуй","балую","балуя","балык","банан","банда","банде","банду","банды","банек","банит","банка","банке","банки","банко","банку","банно","банок","банта","банте","банту","банты","баням","банях","барак","баран","барда","барде","бареж","баржа","барже","баржи","барий","барин","барит","барич","барию","бария","барка","барке","барки","баркл","барку","бармы","барна","барне","барну","барны","баров","барок","баром","барон","барро","барса","барсе","барск","барсу","барсы","барха","барчо","барыг","барын","барыш","басам","басах","басен","басим","басме","басму","басмы","басне","басни","баснь","басню","басня","басов","басок","басом","басон","бассо","баста","бастр","басят","батал","батан","батат","батек","батик","батог","батон","батуд","батум","батун","батут","батые","батый","батыр","батыя","батюш","баула","бауле","баулу","баулы","бахал","бахаю","бахая","бахил","бахну","бахро","бахус","бахча","бахче","бахчи","бахчу","бацай","бацал","бацаю","бацая","бацну","бачил","бачиш","бачка","бачки","бачку","бачок","башек","башен","башка","башке","башки","башку","башма","башне","башни","башню","башня","башта","баяли","баями","баяна","баяне","баяну","баяны","баять","бдела","бдели","бдело","бдени","бдеть","бдишь","бебут","бегай","бегал","бегам","бегат","бегах","бегаю","бегая","бегла","бегло","бегов","бегом","бегун","бегут","бегуш","бедам","бедах","беден","бедер","бедна","бедно","бедны","бедой","бедра","бедро","бедст","бедую","бедуя","бежав","бежал","бежат","бежим","бежит","безбо","безве","безде","бездн","бездо","безлю","безме","безна","безоб","безос","безот","безош","безру","безум","безус","бейка","бейся","бейте","бекар","бекас","бекеш","беком","бекон","белая","белев","белее","белек","белел","белен","белец","белея","белил","белим","белит","белиц","белка","белке","белки","белку","белог","белое","белой","белок","белом","белуг","белух","белую","белые","белый","белын","белых","белье","бельм","белью","белья","беляк","белям","белят","белях","беляш","бемит","бенди","беник","бенку","бердо","берег","береж","берез","берем","берет","берли","берма","берте","берус","берут","берцо","бесам","бесах","бесед","бесен","бесил","бесим","бесит","беско","бесов","бесом","беспа","беспо","беспр","бессв","бессл","бессм","бессп","бесче","бесчу","бесят","бетиз","бетой","бетон","бетхо","бешен","бзика","бзике","бзики","бзику","бивак","бивал","бивне","бивню","бивня","бигус","бидон","бизон","биксе","билас","билет","билле","билли","билль","биллю","билля","билон","бился","билый","бимса","бимсе","бимсу","бимсы","бинок","бином","бинта","бинте","бинту","бинты","биогр","биол.","бионт","биота","биоте","биоту","биоты","биржа","бирже","биржи","бирка","бирке","бирки","бирку","бирок","бирюз","бирюк","бирюч","бисер","бистр","битам","битах","битая","битва","битве","битву","битвы","битки","битла","битле","битлу","битлы","битов","битое","битой","биток","битом","битум","битую","битые","битый","битых","битье","битью","битья","битюг","бифшт","бичам","бичах","бичом","бичуй","бичую","бичуя","биясь","блага","благи","благо","благу","блаже","блажи","блажь","бланк","бланш","блата","блате","блату","бледн","блеем","блеет","бленд","блеск","блесн","блефа","блефе","блефу","блеял","ближе","ближн","близк","близо","близь","блика","блике","блики","блику","блина","блине","блинт","блину","блица","блице","блицу","блицы","блога","блоге","блоги","блогу","блока","блоке","блоки","блоку","блонд","блоха","блохе","блохи","блоху","блуда","блуде","блуди","блудн","блуду","блудя","блуза","блузе","блузу","блузы","блюда","блюде","блюди","блюдо","блюду","блюем","блюет","блюза","блюзе","блюзу","блюзы","блюла","блюли","блюло","блюма","блюме","блюмс","блюму","блюмы","бляди","блядь","блямб","бляха","бляхе","бляхи","бляху","бобам","бобах","бобби","бобер","бобик","бобин","бобка","бобке","бобки","бобку","бобов","бобок","бобом","бобон","бобра","бобре","бобру","бобры","бобчи","богам","богат","богах","богач","богин","богов","богоз","богом","богос","бодал","бодам","бодах","бодаю","бодая","бодни","бодну","бодов","бодом","бодра","бодро","бодры","бодрю","бодун","бодяк","боево","божба","божбе","божбу","божбы","божес","божие","божий","божию","божия","божка","божке","божки","божку","божой","божок","бозон","боимс","боинг","боитс","бойка","бойня","бойсь","бойте","бойца","бойце","бойцу","бойцы","бойче","бокаж","бокан","бокль","бокля","боком","бокса","боксе","боксу","боксы","болва","болез","болел","болен","болея","болид","болит","болот","болта","болте","болту","болты","больн","больш","болью","болюс","болям","болят","болях","бомба","бомбе","бомби","бомбу","бомбы","бомбя","бомжа","бомже","бомжи","бонах","бонбы","бонза","бонзе","бонзу","бонзы","бонмо","бонна","бонне","бонте","бонус","бопре","борат","бордо","борее","бореи","борет","борец","борея","борзо","борид","борис","борме","бормо","боров","бород","борой","борок","бором","борон","борта","борте","борту","борты","борть","борца","борщи","босом","босса","боссе","боссу","боссы","босую","босые","босых","босяк","ботал","ботам","ботах","ботая","ботва","ботве","ботву","ботвы","ботик","ботов","боток","ботом","бочаг","бочар","бочек","бочит","бочка","бочки","бочко","бочку","бочок","бочут","бошам","бошах","боюсь","бояли","боялс","боями","бояре","бояры","боясь","боять","брава","брави","браво","брага","браги","брагу","брада","браду","брака","браке","браки","брако","браку","брала","брали","брало","брама","брамы","брани","брань","браню","браня","браса","брасе","брасл","брасс","брасу","брасы","брата","брате","брати","брато","брату","братц","бреве","бреда","бреду","бредя","бреем","бреет","брейк","брела","брели","брело","брема","бремя","бренд","брест","брета","бреха","брехе","бреху","бреше","брешь","брибр","брига","бриге","бриги","бригу","бридж","бриза","бризу","бризы","брика","брики","брику","брила","брили","брило","брита","бритв","брито","бритт","бричк","брови","бровь","брода","броди","бродь","бродя","брома","броме","брому","броне","бронз","брони","бронх","бронь","броню","броня","броса","броси","брось","броше","броши","брошу","брошь","бруса","брусе","брусу","брута","брыжи","брызг","брыла","брылы","брысь","брюзг","брюкв","брюки","брюле","брюне","брюта","брюте","брюту","брюха","брюхе","брюхо","брюху","брякн","буало","бубен","бубли","бубна","бубне","бубни","бубну","бубны","бубню","бубня","бубон","бугае","бугаи","бугай","бугаю","бугая","бугор","бугра","бугре","бугру","бугры","бугря","будег","будем","буден","будет","будеш","будил","будим","будит","будка","будке","будни","будок","будра","будто","будут","будуч","будущ","будьт","будят","буера","буере","буеру","буеры","бужам","бужах","бузил","бузим","бузит","бузой","бузун","бузыг","бузят","буйво","буйка","буйки","буйку","буйна","буйно","буйны","букан","буква","букве","букву","буквы","букет","букле","букли","буклю","букля","букой","буком","букса","буксе","буксу","буксы","булав","булат","булга","булев","булка","булке","булки","булку","булла","булле","буллу","буллы","булок","булоч","бульк","бумаг","бумаж","бумом","бунам","бунах","бунда","бунде","бунду","бунин","буной","бунта","бунте","бунту","бунты","бурав","бурак","буран","бурат","бурая","бурда","бурде","бурдо","бурел","бурен","бурея","бурже","бурил","бурим","бурит","бурка","бурке","бурки","бурку","бурли","бурлю","бурля","бурна","бурно","бурны","буров","бурое","бурой","бурок","буром","бурре","бурса","бурсе","бурсу","бурсы","бурта","бурте","бурту","бурты","бурум","бурун","бурую","бурча","бурчи","бурчу","бурша","бурые","бурый","бурых","буряк","бурям","бурят","бурях","бусам","бусах","бусин","бутан","бутен","бутик","бутил","бутим","бутит","бутон","бутса","бутсе","бутсу","бутсы","бутуз","бутят","буфер","буфет","бухай","бухал","бухаю","бухая","бухни","бухну","бухта","бухте","бухту","бухты","бучат","бучил","бучим","бучит","бушка","бушуй","бушую","бушуя","буями","буяна","буяне","буяну","буяны","буянь","буяню","буяня","бывае","бывай","бывал","быват","бываю","бывша","бывше","бывши","быдла","быдле","быдло","быдлу","быдто","быком","былая","былем","былин","былое","былой","былом","былую","былые","былых","былье","былью","былья","былям","бымши","быстр","бысть","бытие","бытию","бытия","бытов","бытом","бытую","бытуя","бытье","бытью","бытья","бычий","бычка","бычки","бычку","бычок","бычье","бычьи","бычью","бычья","бьефа","бьефе","бьефу","бьефы","бьешь","бьиги","бьюик","бьюсь","бьютс","бэров","бэром","бювар","бювет","бюкса","бюксе","бюксу","бюксы","бюрта","бюста","бязью","бякой","бяшка","ваала","ваалу","вааль","вабик","вагам","вагах","вагой","вагон","важен","важна","важно","важны","вайся","вакан","вакса","ваксе","вакшу","валам","валах","валек","валер","валет","валец","валик","валил","валим","валин","валит","валищ","валка","валке","валки","валко","валку","валов","валок","валом","валуе","валуи","валуй","валун","валух","валую","валуя","вальс","валяй","валял","валян","валят","валяю","валяя","ванек","ванин","ванна","ванне","ванну","ванны","ванта","ванте","ванту","ванты","ваньк","вапор","варан","варва","варен","варил","варим","варит","варка","варке","варки","варко","варку","варом","варух","варьк","варяг","варят","васил","васин","васюк","ватаг","ватер","ватин","ватка","ватке","ватки","ватку","ватой","ваток","ватта","ватте","ватту","ватты","вафле","вафли","вафлю","вафля","вахня","вахта","вахте","вахту","вахты","вашег","вашем","вашим","ваших","ваяем","ваяет","ваяла","ваяли","ваяло","ваять","вбеги","вбегу","вберу","вбива","вбила","вбили","вбило","вбита","вбито","вброд","ввали","ввалю","введу","введя","ввези","ввезу","ввезя","ввела","ввели","ввело","вверг","вверх","вверь","вверю","ввест","ввиду","ввода","вводи","вводя","ввоза","ввозе","ввози","ввозу","ввозя","вволю","ввысь","вгиба","вгибе","вгибу","вгибы","вгоню","вдави","вдали","вдаль","вдарь","вдарю","вдвое","вдела","вдели","вдело","вдену","вдень","вдета","вдето","вдеты","вдеть","вдоба","вдова","вдове","вдову","вдовы","вдоль","вдоха","вдохе","вдохи","вдохн","вдоху","вдруг","вдуем","вдует","вдула","вдули","вдуло","вдуть","вебер","ведал","ведам","ведах","ведаю","ведая","ведем","веден","ведер","ведет","ведой","ведра","ведро","ведун","ведут","ведущ","ведьм","веера","веере","вееру","вееры","вежам","вежах","вежда","вежде","вежду","вежды","вежли","везде","везем","везен","везир","везла","везли","везло","везуч","вейка","вейсе","вейся","вейте","веком","вексе","векую","векуя","векша","векше","векши","векшу","велев","велел","велик","велим","велит","велич","велся","вельч","велюр","велят","венам","венгр","венда","венде","венду","венды","венед","венер","венет","венец","веник","венка","венке","венки","венку","веной","венок","веноч","вента","венца","венце","венцу","венцы","вепре","вепри","вепрь","вепрю","вепря","верба","вербе","верби","вербу","вербы","вервь","веред","верее","верен","верес","верея","верже","вериг","верил","верим","верит","верки","верна","верне","верни","верно","верну","верны","верой","верол","вероя","верст","верте","верти","верть","вертя","веруй","верую","веруя","верфи","верфь","верха","верхе","верхи","верхо","верху","верчу","верша","верши","вершу","верят","весам","весах","весел","весен","весил","весла","весле","весло","веслу","весна","весне","весну","весны","весов","весок","весом","вести","весты","весть","весьм","весью","весям","весят","весях","ветве","ветви","ветвь","ветел","ветер","ветка","ветке","ветки","ветку","ветла","ветле","ветлу","ветлы","веток","ветра","ветре","ветро","ветру","ветры","ветха","ветхи","ветхо","ветше","вехам","вехах","вехой","вечен","вечер","вечна","вечно","вечны","вечор","вешай","вешал","вешаю","вешая","вешек","вешка","вешке","вешки","вешку","вещай","вещал","вещам","вещах","вещаю","вещая","вещее","вещем","вещие","вещий","вещим","вещих","вещиц","вещун","вещую","вещью","веяла","веяли","веяло","веять","вжала","вжали","вжало","вжата","вжато","вживе","вживи","взаим","взбес","взбив","взбил","взбит","взбух","взвар","взвел","взвеш","взвив","взвиз","взвил","взвод","взвоз","взвой","взвол","взвыв","взвыл","взгля","вздев","вздел","вздер","вздор","вздох","вздра","вздро","вздув","вздуй","вздул","вздум","вздую","вздых","взлез","взлет","взлом","взмах","взмет","взмой","взмок","взмыв","взмыл","взнес","взнос","взогр","взора","взоре","взоше","взошл","взрез","взрос","взрыв","взыск","взыщи","взыщу","взявш","взяла","взяли","взяло","взята","взято","взяты","взять","виват","вивер","вивьр","видал","видам","видан","видат","видах","видаю","видел","виден","видео","видет","видех","видик","видим","видит","видиш","видло","видна","видно","видны","видов","видок","видом","видоп","видыв","видят","вижду","визги","визгл","визгу","визжа","вийди","викой","вилам","вилах","вилка","вилке","вилки","вилку","вилла","вилле","виллу","виллы","вилой","вилок","вился","вилье","вильм","виляй","вилял","виляю","виляя","винам","винах","винил","виним","винит","винно","виной","вином","винта","винте","винти","винту","винты","винтя","винца","винце","винцо","винцу","винчи","винчу","винье","винят","виола","виоле","виолу","виолы","вираж","вирус","вирши","висим","висле","висли","висло","вислы","висни","висну","висок","виста","витай","витал","витая","витик","витин","вития","витка","витке","витки","витку","витое","витой","виток","витом","витую","витые","витый","витых","витье","вихор","вихра","вихре","вихри","вихры","вихрь","вихрю","вихря","вицам","вишен","вишне","вишни","вишню","вишня","вкати","вкачу","вкини","вкину","вклад","вклеп","включ","вколи","вколю","вкопы","вкось","вкруг","вкупе","вкуса","вкусе","вкуси","вкусо","вкусу","вкусы","вкушу","влага","влаги","влагу","владе","влады","влазь","влазя","власа","власт","власы","влачу","влево","влезу","влезь","влеки","влеку","влепи","влета","влети","влечь","влива","влила","влили","влило","влита","влито","влияй","влиял","влиян","влияю","влияя","вложи","влюбе","влюби","влюбл","вмажь","вмале","вмени","вменю","вмерз","вмест","вмеша","вмяла","вмяли","вмяло","вмята","вмято","вмяты","вмять","внеза","внеси","внесу","внеся","внешн","вниду","внизу","вникн","внима","внове","внову","вновь","вноса","вносе","вноси","внося","вношу","внука","внуке","внуки","внуку","внутр","внуша","внуши","внушу","вняла","вняли","вняло","внять","вобла","вобле","воблу","воблы","вобью","вовек","вовне","вовсе","вовсю","вогна","вогни","вогну","вогул","водам","водах","водил","водим","водит","водка","водке","водно","водой","водок","водол","водят","военн","вожак","вожде","вождь","вождю","вождя","вожжа","вожже","вожжи","вожму","возвр","возвы","возгл","воздв","возил","возим","возит","возка","возке","возки","возку","возла","возле","возмо","возму","возна","возне","возни","возно","возню","возня","возов","возок","возом","возра","возьм","возяс","возят","воина","воине","воину","война","войну","войны","войск","войте","войяж","волам","волан","волах","волга","волге","волги","волго","волгу","волен","волка","волке","волку","волна","волне","волно","волну","волны","волок","волом","волос","волох","волхв","волше","вольн","вольт","вольф","волью","волюм","вомни","вонах","вонзи","воной","вонью","вонюч","воняй","вонял","воняю","вообр","вообщ","вопил","вопим","вопит","вопию","вопия","вопки","вопле","вопли","вопль","воплю","вопля","вопро","вопру","вопят","ворва","воров","ворог","вором","ворон","ворот","ворох","вороч","ворса","ворсе","ворсу","ворся","воруй","ворую","воруя","ворча","ворчи","ворчу","воршу","ворье","ворью","ворья","ворюг","восем","воска","воске","воскл","воско","воскр","воску","воспи","воспо","восст","восто","восхи","восьм","вотку","вотру","вотум","вотще","вотяк","вохлы","вохра","вохры","вошед","вошек","вошел","вошка","вошке","вошки","вошку","вошла","вошли","вошло","вошью","вощат","вощил","вощим","вощит","воюем","воюет","вояжа","вояже","вояжи","вояка","вояке","вояки","вояку","впада","впаду","впала","впали","впало","впаяв","впаяй","впаял","впаян","впаяю","вперв","впере","впери","вперт","вперь","вперю","впеча","впечь","впилс","впиши","впишу","вплел","вплот","вплыв","вплыл","вполз","вполн","впосл","вправ","впред","впрок","впроч","впряг","впрял","впряч","впуск","впущу","врага","враги","враго","врагу","вражд","враже","враки","врала","врале","врали","врало","враль","вралю","врата","враче","врачу","вреда","вредн","вреду","вредя","врежь","време","время","врешь","вриси","вроем","вроет","врозь","вруби","врубл","вруна","вруне","вручу","вруша","вруше","вруши","врушу","врыла","врыли","врыло","врыта","врыто","врыты","врыть","всади","всево","всегд","всего","всели","вселю","вселя","всеми","всему","всемя","всеоб","всепо","всече","вскак","вскин","вскип","вскок","вскор","вскоц","вскоч","вскри","вслас","вслед","вслух","всоси","вспле","всплы","вспом","вспух","вспых","встав","встал","встан","встре","вступ","встык","всунь","всучу","всхли","всход","всыпь","всюду","всяка","всяки","всяко","всяку","втайн","втащи","втащу","втерт","втечь","втора","вторг","втори","второ","вторя","вточь","втрое","втуза","втузе","втузу","втузы","втуне","втяни","втяну","вуали","вуаль","вувер","вуича","вукол","вурме","входа","входя","вхожа","вхоже","вхожи","вцепи","вчера","вчетв","вчина","вчини","вчиню","вчуже","вшами","вшива","вшиво","вшивы","вшила","вшили","вшило","вширь","вшита","вшито","въеду","въезд","въеха","въяве","въявь","выбег","выбеж","выбив","выбил","выбит","выбор","выбра","выбро","выбыв","выбыл","выбью","вывал","вывед","вывез","вывел","вывес","вывих","вывод","вывоз","выгар","выгиб","выгля","выгни","выгну","выгов","выгод","выгон","выгул","выдае","выдал","выдам","выдан","выдаю","выдел","выдер","выдет","выдох","выдра","выдры","выдув","выдуй","выдул","выдум","выдут","выдую","выеду","выезд","выела","выели","выело","выемк","выест","выеха","выешь","выжав","выжал","выжат","выжги","выжди","выжду","выжив","выжиг","выжил","выжим","выжит","выжми","выжму","выжри","выжру","вызва","выздо","вызов","вызол","вызыв","выигр","выйде","выйди","выйду","выйдя","выйти","выказ","выкай","выкат","выкаю","выкая","выкос","выкри","выкуй","выкуп","выкус","выкую","вылаз","вылез","вылет","вылеч","вылив","вылил","вылит","вылов","вылом","вылью","вымел","вымер","вымой","вымок","вымол","вымыв","вымыл","вымыт","вынем","вынес","вынет","выним","вынос","вынув","вынуд","вынул","вынут","выпав","выпад","выпал","выпас","выпек","выпер","выпив","выпил","выпис","выпит","выплы","выпор","выпот","выпра","выпри","выпру","выпря","выпуч","выпъю","выпью","выпям","выпят","выпях","вырав","выраж","выраз","вырва","вырви","вырву","вырез","вырин","вырой","вырос","выруб","выруч","вырыв","вырыл","вырыт","высво","высев","высек","высел","высеч","высиж","выска","высмо","высов","высок","высот","высох","высоч","выста","высчи","высше","высши","высып","высью","высям","высях","вытас","вытащ","вытек","вытер","вытку","вытол","вытри","вытру","вытье","вытью","вытья","вытян","выуди","выучу","выход","выхож","вычел","вычер","вычет","вычит","вычла","вычли","вычло","вычти","вычту","вычтя","вышаг","вышед","вышек","вышел","вышес","вышиб","вышив","вышил","вышин","вышит","вышка","вышке","вышки","вышку","вышла","вышли","вышло","вышлю","вышью","выяви","вьешь","вьюга","вьюге","вьюги","вьюгу","вьюка","вьюке","вьюки","вьюку","вьюна","вьюне","вьюну","вьюны","вьюня","вьюсь","вьючу","вьюще","вьющи","вяжем","вяжет","вяжут","вязал","вязки","вязко","вязку","вязла","вязов","вязок","вязом","вязче","вязьм","вязью","вякай","вякаю","вякая","вякни","вякну","вялая","вялил","вялим","вялит","вялое","вялой","вялом","вялую","вялые","вялый","вялых","вялят","вянем","вянет","вянул","вянут","вятич","вятка","вяток","вятск","вящая","вящее","вящем","вящие","вящий","вящим","вящих","вящую","гаван","гавот","гаври","гагам","гагар","гагат","гагах","гагой","гагры","гадал","гадам","гадах","гадаю","гадая","гадил","гадим","гадин","гадит","гадка","гадов","гадок","гадом","гадью","гадюк","гадят","гадяч","гаера","гаере","гаеру","гаеры","газов","газом","газон","газуй","гайка","гайки","гайку","гайне","гайну","гаком","галди","галдя","галек","галер","галет","галил","галит","галич","галка","галке","галки","галку","галла","галле","галлу","галлы","галок","галоп","галош","галса","галсе","галсу","галун","гамак","гаман","гамаш","гамба","гамбе","гамбр","гамбу","гамбы","гамет","гамле","гамма","гамме","гамму","гаммы","гамом","ганау","ганаш","ганец","ганза","ганзе","ганзу","ганзы","ганна","ганне","ганну","ганны","ганса","гапка","гапке","гапки","гараж","гарда","гарем","гариб","гария","гармо","гарни","гарри","гарун","гарус","гарью","гасил","гасим","гасит","гасла","гасли","гасло","гасну","гасят","гатью","гатям","гатях","гаусс","гаучо","гачек","гашиш","гвалт","гвида","гвозд","гдето","гевея","гедим","гейне","гейша","гейше","гейши","гейшу","гелий","гелию","гелия","гельд","гелям","гелях","гемма","гемме","гемму","геммы","генам","генез","генер","гензи","гений","гению","гения","геном","генри","генту","генуе","генуи","геогр","геоид","геол.","геом.","герба","гербе","гербу","гербы","герва","герма","герое","герои","герой","героя","герца","гетер","гетит","гетра","гетре","гетру","гетры","гетто","гетьм","геями","гжати","гжели","гжель","гибел","гибка","гибки","гибко","гибла","гибли","гибло","гибне","гибни","гибну","гибок","гибче","гидам","гидах","гидов","гидом","гидра","гидры","гиена","гиене","гиену","гиены","гикай","гикаю","гикая","гикну","гиком","гилее","гилеи","гилея","гильз","гиляк","гимна","гимне","гимну","гимны","гинее","гинеи","гинем","гинет","гинея","гинув","гинул","гинут","гинце","гипса","гипсе","гипсу","гирек","гирло","гирям","гирях","гисар","гитар","гитов","гитом","гичек","гичка","гички","гичку","глава","главе","главк","главн","главу","глада","глади","гладк","гладь","гладя","глаже","глаза","глазе","глазк","глазо","гланд","гласа","гласе","гласу","гласы","глася","глаша","глеем","глень","глета","глина","глине","глину","глиня","глипт","глист","глифа","глифе","глифу","глифы","глотк","глото","глубж","глуби","глубо","глубь","глупа","глупе","глупи","глупо","глупу","глупы","глупя","глуха","глухи","глухо","глуша","глуше","глуши","глушу","глушь","глыба","глыбе","глыбу","глыбы","глюка","глюке","глюки","глюку","глюон","гляде","гляди","глядь","глядя","гляже","гляну","глянь","глясе","гмина","гнала","гнали","гнало","гнева","гневе","гневи","гнево","гневу","гневя","гнезд","гнейс","гнело","гнета","гнешь","гнида","гниде","гниду","гниды","гнием","гниет","гнила","гнили","гнило","гнилы","гниль","гноем","гноил","гноим","гноит","гнома","гноме","гному","гномы","гноят","гнула","гнули","гнуло","гнуса","гнусе","гнусу","гнусь","гнута","гнуто","гнуты","гнуть","гобое","гобои","гобой","гобоя","говел","говет","говея","говна","говне","говно","говор","гогол","гогот","годам","годах","годен","годик","годит","годка","годке","годна","годно","годны","годов","годок","годом","гожий","гокко","голам","голах","голая","голец","голик","голод","голое","голой","голом","голос","голуб","голую","голые","голый","голых","голыш","гольд","голье","гольф","голью","голья","голяд","голяк","гомер","гомец","гомон","гонад","гонга","гонге","гонги","гонгу","гонец","гоним","гонит","гонка","гонке","гонки","гонко","гонку","гонта","гонту","гонца","гонце","гонцу","гонцы","гоняй","гонял","гонят","гоняю","гопак","гопля","гоппе","гораз","горал","горба","горбе","горби","горбу","горбы","горбя","горда","гордо","горек","горел","горем","горец","горим","горит","горка","горке","горки","горку","горла","горле","горло","горлу","горна","горне","горно","горну","горны","город","горой","горок","горох","горст","горца","горча","горче","горше","горшк","горьк","горюй","горюн","горюч","горюю","горюя","горят","горяч","госпи","госпо","госте","гости","гость","гостю","гостя","госуд","готам","готах","готов","готув","гофра","гофре","гофру","гофры","гоффа","граба","грабе","граби","грабу","грабы","грабь","грабя","граве","града","граде","граду","гражд","грамм","грамо","грана","гранд","гране","грани","грант","грань","граню","граня","грата","графа","графе","графи","графс","графу","графы","граци","граче","грачу","греба","греби","гребу","гребя","греем","греет","греза","грезе","грези","грезу","грезы","грезь","грезя","грека","греке","греки","греко","греку","грела","грели","грело","греме","греми","гремя","грена","греть","греха","грехе","грехи","грехо","греху","греча","грече","гречи","греша","грешн","грзая","гриба","грибе","грибк","грибу","грибы","грива","гриве","гривн","гривы","григо","гридь","гриле","гриль","грилю","гриля","грима","гриме","гриму","гримы","грипа","грипп","грипы","грифа","грифе","грифу","грифы","гриша","гришк","гроба","гробь","гробя","грога","гроге","грогу","гроза","грозд","грозе","грози","грозн","грозу","грозы","грозя","грома","громе","громи","громк","грому","громч","громы","громя","гросс","грота","гроте","гроту","гроты","гроша","гроше","гроши","грошу","груба","груби","грубо","грубу","грубы","грубя","груда","груде","груди","грудк","груду","груды","грудь","груза","грузе","грузи","грузу","грузы","грузя","грума","груме","груму","грумы","груне","грунт","групп","груст","груша","груше","груши","грушу","грущу","грыжа","грыже","грыжи","грызи","грызу","грызя","грымз","гряда","гряде","гряду","гряды","грязи","грязн","грязь","гряну","грянь","гуава","гуано","гуаши","гуашь","губам","губан","губах","губер","губил","губим","губит","губка","губке","губки","губку","гублю","губно","губой","губок","губят","гувер","гугня","гудел","гудет","гудим","гудит","гудка","гудке","гудок","гудом","гудят","гужам","гужах","гужик","гужом","гузка","гузке","гузки","гузку","гузно","гукай","гукаю","гукая","гукни","гукну","гулак","гулен","гулка","гулки","гулко","гулок","гулом","гульд","гуляй","гуляк","гулял","гулям","гулят","гулях","гуляш","гуляю","гуляя","гумен","гумит","гумма","гумме","гумми","гумму","гуммы","гумна","гумне","гумно","гумну","гумны","гумус","гунна","гунне","гунну","гунны","гуппи","гуран","гурго","гурда","гурий","гурию","гурия","гурта","гурте","гурту","гурты","гусак","гусар","гусек","гусем","гусит","гуска","гуске","гусли","густа","густи","густо","густы","гусям","гусят","гусях","гуцев","гуцул","гущам","гущах","гюрги","гюрза","гюрзе","гюрзу","гюрзы","да-да","давав","давай","давал","дават","давеч","давеш","давид","давил","давим","давит","давка","давно","давок","давши","давят","дадим","дадут","даешь","дайка","дайки","дайку","дайна","дайра","дайре","дайру","дайры","дайся","дайте","далай","далее","далек","далия","дался","дальн","дальш","далью","далям","далях","дамам","дамах","дамба","дамбе","дамбу","дамбы","дамка","дамке","дамки","дамку","дамно","дамой","дамок","дампа","дампе","дампу","дампы","дамск","дамся","данно","данта","данте","данью","даням","данях","дарда","дарен","дарий","дарил","дарим","дарит","дарию","дария","дарма","даров","даром","даруй","дарую","даруя","дарье","дарьи","дарью","дарья","дарят","датам","датах","датой","дафан","дацан","дацит","дачам","дачах","дачек","дачка","дачки","дачку","дачно","дашка","дашку","даюсь","двадц","дважд","двена","двере","двери","дверц","дверь","дверя","двест","движе","двину","двинь","двоек","двоен","двоим","двоих","двойн","двома","двора","дворе","дворн","дворя","двоюр","двугр","двумя","двух-","дебае","дебай","дебаю","дебая","дебет","дебил","дебит","дебош","дебри","дебрь","девай","девал","девам","девах","деваю","девиз","девиц","девич","девка","девок","девон","девоч","девти","девуш","девян","девят","дегте","дегти","дегтю","дегтя","дедам","дедах","дедка","дедов","дедом","дежка","деизм","деист","дейст","декад","декан","декой","декор","делае","делай","делал","делам","делан","делат","делах","делаю","делая","дележ","делен","делец","делик","делил","делим","делит","делля","делов","делом","делся","дельт","дельц","деляг","делят","демен","демид","демка","демон","демос","денди","денег","денеж","денек","денем","денет","денеш","денис","дения","денно","денут","денщи","деньг","депар","депеш","дерба","дерби","дерем","дерен","дерет","держа","держи","дерзи","дерзк","дерзя","дерма","дерме","дерму","дермы","дерна","дерне","дерни","дерну","дерть","дерут","дерха","дерюг","десен","деска","десна","десне","десну","десны","дести","десть","десят","детва","детве","детву","детвы","детин","детищ","детка","детке","детки","детку","деток","детск","детст","детьм","детям","детях","дефис","децим","дешев","деяте","джаза","джазе","джема","джеме","джему","джемы","джент","джига","джигу","джина","джине","джинн","джину","джипа","джипе","джипу","джипы","джута","джуте","джуту","дзета","дзеты","дзинь","дзота","дзоте","дзоту","дзоты","дзюдо","диале","диана","диане","дибич","дивам","диван","дивах","дивен","дивил","дивим","дивит","дивлю","дивна","дивно","дивом","дивча","дивят","дидро","диего","диеза","диезе","диезу","диезы","диена","диене","диену","диены","диета","диеты","дикая","дикие","дикий","диким","диких","дикое","дикой","диком","дикую","дилер","димер","динам","динар","динас","динах","динго","динод","диной","диода","диола","диоле","диолы","диста","дисци","дихта","дичал","дичаю","дичая","дичка","дички","дичку","дичок","дичью","диэту","длани","длань","длила","длили","длило","длиля","длина","длине","длинн","длину","длишь","длясь","дмитр","днепр","днесь","днища","днюем","днюет","днями","добив","добил","добит","добор","добра","добре","добри","добро","добру","добры","добыв","добыл","добыт","добью","довед","довез","довел","довер","довод","довол","догад","догам","догах","догма","догме","догов","догом","догон","додал","додан","доеду","доела","доели","доело","доена","доено","доеха","дожав","дожам","дожат","дожах","дожда","дожде","дождь","дождю","дождя","дожем","дожив","дожид","дожил","дожми","дожму","дожуй","дожую","дозор","доила","доили","доило","дойка","дойна","дойра","доказ","докер","докла","доком","докра","докто","докум","долам","долах","долби","долбя","долга","долге","долги","долго","долгу","долез","долек","долже","должн","долив","долил","долин","долит","долл.","долог","долож","долой","долом","долот","долью","долям","долях","домах","домаш","домен","домик","домин","домка","домна","домне","домны","домов","домок","домра","домре","домру","домры","домчи","домчу","домыв","домыл","домыт","донах","донга","донге","донги","донгу","донес","донец","донка","донке","донки","донку","донна","донне","донос","донца","донце","донцу","донцы","донын","донье","доньи","донью","донья","донял","донят","допев","допек","допел","допер","допив","допил","допит","допод","допой","допри","допру","допус","допыт","допью","дорог","дорож","дорой","дорос","дорош","дорыв","досад","досол","досох","доста","дости","досье","дотам","дотах","дотек","дотер","дотла","дотов","дотом","дотри","дотро","дотру","доучу","дофин","дохам","дохах","дохла","дохли","дохло","дохни","дохну","доход","дохой","дохту","дочек","дочел","дочер","дочка","дочки","дочку","дочла","дошед","дошел","дошил","дошла","дошли","дошло","дошлю","дошью","дощан","дощат","дояра","дояре","дояру","дояры","драга","драги","драгу","драже","драил","драим","драит","драйв","драка","драке","драки","драку","драла","драли","драло","дралс","драма","драмы","драни","дрань","драпа","драпе","драпу","драпы","драхм","драят","древа","древе","древн","древо","древу","дрейф","дрели","дрель","дрема","дреме","дрему","дремы","дрена","дриад","дрибу","дроби","дробь","дробя","дрова","дрога","дроге","дроги","дрогн","дрогу","дрожа","дрожи","дрожк","дрожь","дрозд","дрока","дроке","дроку","дрона","дроня","дросс","дроту","дрофа","дрофе","дрофу","дрофы","дрочи","дрочу","друга","друге","други","друго","другу","дружа","дружб","друже","дружи","друза","друзе","друзу","друзы","друзь","друид","друцу","друцы","дрына","дрыне","дрыну","дрыны","дрюча","дрючу","дрязг","дряни","дрянь","дряхл","дубам","дубах","дубил","дубим","дубин","дубит","дубка","дубке","дубки","дубку","дубле","дубли","дубль","дублю","дубля","дубне","дубно","дубов","дубок","дубом","дубье","дубью","дубья","дубят","дуван","дугам","дугах","дугой","дудак","дудел","дудит","дудка","дудке","дудой","дудок","дудят","дуешь","дужек","дужка","дужке","дужки","дужку","дуйся","дуйте","дукат","дулам","дулах","дулеб","дулом","дулся","дулям","дулях","думае","думай","думал","думам","думат","думах","думаю","думая","думец","думка","думке","думки","думку","думой","думок","думца","думце","думцу","думцы","дунем","дунет","дунеч","дунит","дунст","дунув","дунул","дунут","дуоли","дуоль","дупел","дупла","дупле","дупли","дупло","дуплу","дурак","дурел","дурен","дурех","дурея","дурий","дурил","дурим","дурит","дурна","дурне","дурни","дурно","дурны","дурню","дурня","дурой","дурра","дурро","дурье","дурьи","дурью","дурья","дурят","дуста","дутая","дутик","дутое","дутой","дутом","дутую","дутые","дутый","дутых","дутыш","дутье","дутью","дутья","духам","духан","духах","духов","духом","душам","душат","душах","душев","душем","душен","душил","душим","душит","душка","душке","душки","душко","душку","душна","душно","душны","душой","душок","дуэле","дуэли","дуэль","дуэта","дуэте","дуэту","дуэты","дуюсь","дуясь","дщери","дщерь","дыбой","дыбом","дылда","дылде","дылду","дылды","дымам","дымах","дымил","дымим","дымит","дымка","дымке","дымки","дымку","дымлю","дымно","дымов","дымок","дымом","дымят","дынек","дыням","дынях","дырищ","дырка","дырке","дырки","дырку","дырой","дырок","дыхан","дыхни","дыхну","дышал","дышат","дышащ","дышим","дышит","дышла","дышле","дышло","дышлу","дьюар","дьяво","дьяка","дьяке","дьяки","дьяку","дюбар","дюжая","дюжее","дюжем","дюжие","дюжий","дюжим","дюжин","дюжих","дюжую","дюйме","дюйму","дюймы","дюкер","дюссо","дюшес","дядек","дядин","дядям","дядях","дятел","дятла","дятле","дятлу","дятлы","евген","евина","евнух","еврее","евреи","еврей","еврея","европ","евсее","евсея","евфия","евшая","евшее","евшем","евшие","евший","евшим","евших","евшую","егере","егери","егерс","егерь","егерю","егеря","египе","егоза","егозе","егози","егозу","егозы","егозя","егора","егоро","едала","едали","едало","едешь","едина","едине","едино","единс","едину","едкая","едкие","едкий","едким","едких","едкое","едкой","едком","едкую","едока","едоке","едоки","едоку","ежами","ежась","ежата","ежедн","ежели","ежеми","ежика","ежике","ежики","ежику","ежила","ежили","ежило","ежиха","ежихе","ежихи","ежиху","ежишь","ежусь","ежься","ежьте","ездил","ездим","ездит","ездка","ездке","ездой","ездок","ездры","ездят","езжай","езжал","езопа","езопу","ейная","ейчан","екает","екала","екали","екало","екате","еккле","екнем","екнет","екнув","екнул","екнут","елеем","елена","елене","елену","елены","елико","елицы","елкой","елозь","елозя","елями","емеле","емель","емелю","емеля","емкая","емкие","емкий","емким","емких","емкое","емкой","емком","емкую","емшан","ендит","енигм","енола","еноле","енолу","енолы","енота","еноте","еноту","еноты","еноха","епанч","ерала","ерами","ерани","ерань","ервые","ерему","ереси","ересь","ерзай","ерзал","ерзаю","ерзая","ермак","ерник","ероты","ероша","ерошу","ерошь","ершам","ершах","ершик","ершом","есаул","еслиб","еспер","естем","естес","ефесе","ефима","ефимо","ефиму","ефиоп","ефрат","ефрем","ефтом","ехала","ехали","ехало","ехида","ехидн","ечную","ешьте","жабам","жабах","жабий","жабка","жабки","жабой","жабра","жабре","жабру","жабры","жабье","жабьи","жабью","жабья","жаден","жадин","жадна","жадно","жадну","жадны","жадом","жадюг","жажда","жажде","жажди","жажду","жажды","жайте","жакан","жакет","жакоб","жалам","жалах","жалел","жалет","жалея","жалил","жалим","жалит","жалка","жалки","жалко","жалоб","жалов","жалок","жалом","жалос","жался","жалуе","жалуй","жалую","жалуя","жалче","жалят","жамка","жанра","жанре","жанру","жанры","жарил","жарим","жарит","жарка","жарке","жарки","жарко","жарку","жарни","жаров","жарой","жарок","жаром","жарче","жарят","жасно","жатая","жатва","жатве","жатву","жатвы","жатка","жатке","жатки","жатку","жатое","жатой","жаток","жатом","жатую","жатые","жатый","жатых","жахни","жахну","жбана","жбане","жвала","жгута","жгуте","жгуту","жгуты","жгуча","жгуче","ждала","ждали","ждало","ждешь","жевал","жеват","жевок","жегся","жезла","жезле","жезлу","жезлы","желае","желай","желал","желан","желаю","желая","желез","желна","желоб","желта","желти","желтк","желто","желты","желть","желуд","желчи","желчу","желчь","женам","женат","жение","женил","женим","женин","женит","жених","женка","женке","женки","женку","женни","женой","женок","женск","женщи","женят","жеода","жерди","жердь","жердя","жерех","жерла","жерле","жерло","жерлу","жертв","жеста","жесте","жести","жесть","жестя","жесче","жетон","жжешь","живал","живее","живем","живет","живец","живил","живим","живит","живлю","живог","живое","живом","живоп","живос","живот","живут","живуч","живую","живца","живце","живцу","живцы","живые","живых","живят","жигам","жиган","жигах","жигой","жидам","жидах","жидка","жидов","жидок","жидом","жидче","жизни","жизнь","жилам","жилах","жилая","жилет","жилец","жилиц","жилищ","жилка","жилке","жилки","жилку","жилое","жилой","жилок","жилом","жилую","жилые","жилых","жилье","жильц","жилью","жилья","жинка","жинке","жинки","жинко","жинку","жинок","жираф","жирел","жирен","жирея","жирка","жирке","жирки","жирко","жирку","жирна","жирно","жирны","жиров","жирок","жиром","жиряк","жисть","жител","житие","житию","жития","житом","житье","житью","житья","жлоба","жмене","жмени","жмень","жменю","жменя","жмешь","жмота","жмоте","жмоту","жмоты","жмудь","жмурь","жмуря","жмусь","жмыха","жмыхе","жмыхи","жмыху","жнеца","жнеце","жнецу","жнецы","жнешь","жнеям","жнеях","жнива","жниво","жница","жнице","жницу","жницы","жодин","жозеф","жокее","жокеи","жокея","жолчь","жомин","жопам","жопах","жопой","жоржа","жором","жохом","жрала","жрали","жрало","жреца","жреце","жрецу","жрецы","жрешь","жрица","жрице","жрицу","жрицы","жуана","жубер","жуешь","жужжа","жужжи","жуира","жуире","жуиру","жуиры","жуйте","жуком","жулан","жулик","жулье","жулью","жулья","жупан","жупел","журил","журим","журит","журна","журча","журчи","журчу","журят","жутка","жутки","жутко","жуток","жутче","жутью","жухла","жухли","жухло","жучат","жучил","жучим","жучит","жучка","жучки","жучку","жучок","жуясь","жцань","забав","забве","забег","забеж","забер","забес","забив","забил","забит","забла","заблу","забог","забое","забои","забой","забол","забор","забот","забоя","забуд","забыв","забыл","забыт","забью","завал","завам","завах","завед","завез","завел","завес","завет","завещ","завив","завид","завиз","завил","завис","завит","завов","завод","завоз","завом","завоп","завтр","завуч","завыв","завыл","завью","завяз","завял","загад","загал","загар","загиб","загни","загну","загов","загон","загор","загре","загса","загсе","загсу","загсы","загул","задал","задам","задан","задах","задач","задаю","задев","задел","задер","задет","задик","задир","задка","задке","задов","задок","задол","задом","задор","задро","задув","задуй","задул","задум","задут","задую","задых","заеду","заезд","заезж","заела","заели","заело","заест","заешь","зажав","зажал","зажат","зажги","зажгл","зажеч","зажив","зажил","зажим","зажин","зажми","зажму","зажор","зажую","зазор","зазря","зазыв","заигр","заика","заике","заики","заику","заинт","зайде","зайди","зайду","зайдя","зайка","зайки","зайку","займа","займе","займи","займу","займы","зайти","зайца","зайце","зайцу","зайцы","заказ","закат","закип","закис","закла","заклю","закол","закон","закос","закра","закри","закры","закуд","закуй","закуп","закур","закут","закую","залай","залам","залах","залаю","залег","залез","залет","залец","залив","зализ","залил","залип","залит","залов","залог","залой","залом","залпа","залпе","залпу","залпы","залью","заляг","замай","замам","заман","замах","замед","замел","замен","замер","замес","замет","замеч","замеш","замир","замка","замке","замки","замку","замну","замов","замок","замол","замом","замор","замоч","замри","замру","замуж","замша","замше","замши","замшу","замыв","замыл","замыш","замяв","замял","замят","занав","занды","занес","заним","заноз","заной","занос","заноч","зануд","заныв","заныл","заняв","занял","занят","заодн","заори","заост","запав","запад","запал","запам","запас","запах","запач","запев","запек","запел","запер","запив","запил","запир","запис","запит","запла","запле","запое","запои","запой","запор","запоя","запра","запре","запри","запро","запру","запут","запью","зараз","заран","зарез","зарин","зарит","зарод","зарож","зарой","зарок","зарос","заруб","зарыв","зарыд","зарыл","зарыт","заряд","заряж","засад","засал","засве","засев","засед","засек","засел","засим","заслу","засме","засни","засну","засов","засол","засор","засос","засох","заста","засто","засун","засух","засып","затаи","затво","затее","затеи","затек","затем","затер","затес","затея","затих","затку","затми","заток","затон","затор","затра","затри","затру","затря","затух","затыл","затяг","зауми","заумь","заучу","захар","захва","захле","захло","захны","заход","захож","захот","захоч","зацве","зацеп","зачав","зачал","зачат","зачах","зачел","зачем","зачес","зачет","зачин","зачла","зачли","зачло","зачну","зачом","зачти","зачту","зачтя","зашаг","зашед","зашел","зашиб","зашив","зашил","зашит","зашла","зашли","зашло","зашлю","зашью","защип","защит","заюлю","заяви","звала","звали","звало","зваль","звана","звани","звезд","звена","звене","звени","звено","звену","звеню","звеня","звере","звери","зверк","зверь","зверю","зверя","зволь","звона","звоне","звони","звонк","звону","звоны","звоню","звоня","звука","звуке","звуки","звуко","звуку","звуча","звучн","здали","здани","здесь","здеся","здешн","здоро","здрав","здужа","здэсь","зебра","зебре","зебру","зебры","зевай","зевак","зевал","зевам","зевах","зеваю","зевес","зевка","зевов","зевок","зевом","зевса","зелен","зелие","зелий","зелот","зелье","зельм","зельц","зелью","зелья","земец","земле","земли","землю","земля","земно","земны","земск","зенит","зениц","зенки","зенок","зерен","зерка","зерна","зерне","зерно","зерну","зернь","зерца","зетом","зефир","ззаду","зигза","зигот","зижде","зилам","зилах","зилов","зилом","зимам","зимах","зимне","зимов","зимой","зимуй","зимуя","зиной","зипун","зисты","зияем","зияет","зияла","зияли","зияло","зиять","злака","злаке","злаки","злаку","злата","злате","злато","злату","злеть","злила","злили","злило","злишь","злоба","злобн","зловр","злого","злому","злост","злота","злото","злыми","злюка","злюке","злюки","злюку","злюсь","злясь","змеев","змеем","змеям","змеят","змеях","змием","знавш","знает","знаеш","знайт","знака","знаке","знаки","знако","знаку","знала","знали","знало","зналь","знамя","знате","знати","знато","значе","значу","значь","знашь","знову","зноем","зноен","зобам","зобах","зобов","зобом","зовем","зовет","зовом","зовут","зойка","золка","золой","золот","золям","золях","зоман","зомби","зонах","зонда","зонде","зонте","зонти","зонту","зонты","зорек","зорка","зорки","зорко","зорок","зорче","зорям","зорях","зосим","зраза","зразе","зрачк","зреем","зреет","зрела","зрели","зрело","зрени","зреть","зрима","зримо","зримы","зришь","зряча","зряче","зрячи","зуава","зуаве","зуаву","зубам","зубах","зубец","зубик","зубил","зубка","зубке","зубки","зубку","зубов","зубок","зубом","зубра","зубре","зубри","зубру","зубры","зубрю","зубря","зубца","зубце","зубцу","зубцы","зубья","зудел","зудим","зудит","зудом","зудят","зуйка","зуйки","зуйку","зулус","зумпф","зурка","зурна","зурне","зурну","зурны","зыбка","зыбки","зыбко","зыбку","зыбок","зыбом","зыбун","зыбуч","зыбче","зыбью","зыкаю","зыкая","зыкну","зыком","зырян","зычен","зычна","зычно","зычны","зэком","зюзям","зюзях","зюйда","зюйде","зюйду","зябка","зябки","зябко","зябла","зябли","зябло","зябни","зябну","зябок","зябью","зяйка","зятев","зятек","зятем","зятья","иберы","ибиса","ибисе","ибису","ибисы","ивами","ивана","иване","ивано","иваси","ивась","ивасю","ивася","ивина","ивняк","иволг","иврит","иглам","иглах","иглой","игнат","играв","играй","играл","игран","играю","играя","игрек","игрец","игрив","игрой","игрок","игрун","игуан","игуме","идеал","идеен","идешь","идеям","идеях","идиом","идиот","идиша","идише","идишу","идола","идоле","идолу","идолы","идуще","иезуи","иенам","иеной","иерее","иереи","иерея","иером","иесея","ижица","ижице","ижицу","ижицы","ижора","ижоре","из-за","изана","избав","избам","избах","избач","избег","избеж","избив","избил","избит","избищ","избой","избра","избуш","извел","извер","извес","извет","извив","извил","извин","извит","извне","извод","извоз","извол","изгиб","изгна","изгое","изгои","изгой","изгол","изгон","изгоя","издал","издам","издан","издаю","издел","издер","издох","изжив","изжил","изжит","изжуй","изжую","иззяб","изиде","изиды","излаг","излер","излет","излив","излил","излит","излиш","излом","измен","измер","измок","измор","измуч","измяв","измял","измят","изнан","износ","изнут","изныл","изоби","изобр","изобь","изойд","израи","изред","изрез","изрек","изреч","изрещ","изрыт","изуми","изумр","изуча","изучу","изшед","изъев","изъел","изъяв","изъял","изъян","изъят","изыди","изыду","изыми","изыму","изыск","изыщу","изюбр","изюма","изюме","изюмо","изюму","иисус","икает","икала","икали","икало","икара","икему","икнем","икнет","икнув","икнул","икнут","икона","иконе","икону","иконы","икота","икоте","икоту","икоты","икрой","иксам","иксах","иксия","иксов","иксом","иксор","иктус","илеус","илист","иллюз","иллюс","илька","ильма","ильме","ильму","ильмы","илюша","илюше","илюши","илюшу","имаго","имама","имамы","имаши","имеем","имеет","имела","имели","имело","имена","имене","имени","именн","иметь","имеющ","имида","имиде","имидж","имиду","имиды","иначе","инвар","ингуш","индан","индау","инден","индий","индию","индия","индол","индус","индюк","индюх","инеем","инжир","иници","инког","инкой","инкор","иногд","иного","инока","иноке","иноки","иноку","иному","инсти","интер","интим","иными","иоанн","иоган","иодат","иоиля","иолит","иомен","ионах","ионий","ионит","иорик","иосиф","иохим","иппол","иприт","ирана","ирбис","иргой","ирина","ириса","ирисе","ирису","ирисы","ирмос","ирный","ирода","иррна","иртыш","исаия","исайя","искаж","искат","исклю","иском","искра","искри","искро","искры","искря","искуп","искус","искуш","ислам","испек","испив","испил","испис","испит","испов","испод","испол","испор","испра","испуг","испыт","иссек","иссоп","истая","истек","истер","истец","истин","истиц","истов","истод","истое","истой","исток","истол","истом","истор","истую","истца","истце","истцу","истцы","истые","истый","истых","истяз","исусе","исход","исчах","исчез","исьць","итал.","итала","итало","итога","итоге","итоги","итого","итогу","итожа","итожь","иудам","иудах","иудее","иудеи","иудея","иудин","иудой","ихнее","ихнем","ихние","ихний","ихним","ихних","ихнюю","ихняя","ичиги","ишака","ишаке","ишаки","ишаку","ишачу","ишачь","ишиас","ишиме","ищешь","ищусь","июлем","июлям","июлях","июнем","июням","июнях","йенец","йенца","йенце","йенцу","йенцы","йогам","йогах","йогов","йогой","йогом","йодид","йодле","йодль","йодлю","йодля","йодом","йомен","йорке","йотой","йсики","кааба","кабак","кабан","кабач","кабил","кабин","каблу","кабул","кавал","кавун","кагал","каган","кагат","кагор","кадет","кадий","кадил","кадим","кадит","кадка","кадке","кадок","кадра","кадры","кадык","кадят","кажда","каждо","кажду","кажды","кажем","кажет","кажис","кажут","кажын","казак","казал","казан","казах","казац","казач","казен","казна","казне","казни","казны","казнь","казню","казня","казус","каика","каике","каики","каику","каина","каине","каину","каира","каире","кайла","кайле","кайло","кайлу","кайлы","кайма","кайме","кайму","каймы","кайра","кайре","кайру","кайры","кайса","кайсе","кайсу","кайсы","кайся","кайта","кайте","кайту","кайты","кайфа","какай","какао","какаю","какая","какие","каким","каких","каког","какое","какой","каком","както","какую","калам","калан","калач","калга","калеб","калек","кален","калий","калил","калим","калин","калит","калиф","калию","калия","калла","калле","каллу","каллы","калом","калош","калят","камее","камеи","камен","камер","камеш","камея","камин","камка","камке","камки","камку","камне","камни","камню","камня","камор","камса","камсе","камсу","камча","камыш","канав","канал","канат","канва","канве","канву","канвы","канд.","канда","канев","канем","канет","канна","канон","каноэ","канта","канте","канту","канты","канув","канул","канун","канут","канце","канюк","капай","капал","капам","капах","капаю","капая","капел","капер","капит","капищ","капле","капли","каплю","капля","капни","капну","капов","капок","капом","капор","капот","каппа","каппе","каппу","каппы","капри","капус","капут","карай","карал","карат","караш","караю","карая","карга","карге","карги","карго","карда","карел","карем","карет","карие","карий","карим","карих","карла","карле","карло","карлу","карль","карма","карме","карму","кармы","карно","карой","карош","карпа","карпе","карпо","карпу","карпы","карры","карса","карст","карта","карте","карти","карту","карты","карча","касал","касок","касса","кассе","кассу","кассы","каста","касте","катай","катал","катар","катас","катая","катер","катет","катил","катим","катит","катка","катке","катки","катку","катод","каток","катол","катом","катор","катыш","катюш","катят","каури","кафта","кацап","качай","качал","качаю","качая","качек","качес","качка","качки","качку","качни","качну","качча","качче","каччи","каччу","кашам","кашах","кашек","кашел","кашка","кашке","кашки","кашку","кашле","кашлю","кашля","кашне","кашпо","кашуб","каюсь","каюта","каюте","каюту","каюты","кающе","каясь","кбайт","квагг","квадр","квакш","квант","кварк","кварт","кварц","кваса","квасе","квасу","квася","квашу","квело","квинт","квота","квоте","квоту","квоты","кебаб","кебам","кебах","кебла","кебов","кебом","кегле","кегли","кегль","кеглю","кегля","кедам","кедах","кедов","кедом","кедра","кедры","кейса","кейсе","кейсу","кейсы","кейфа","кекса","кексе","кексу","кексы","кекур","келес","келий","келих","келия","келье","кельи","кельн","кельт","келью","келья","кенар","кенаф","кепка","кепке","кепки","кепку","кепок","керак","керна","керне","керну","керны","керчи","керчь","кетен","кетоз","кетой","кетон","кефир","кечуа","кешью","кеятр","кзади","кибер","кибуц","кивай","кивал","киваю","кивер","кивка","кивок","кивот","кидал","кидар","кидас","кидаю","кидая","киева","киеве","киеву","кизил","кизяк","килек","килем","килим","килой","килям","килях","кинем","кинет","кинза","кинзе","кинзу","кинзы","киник","кинин","кино-","кинув","кинул","кинут","киоск","киота","кипам","кипах","кипел","кипим","кипит","киплю","кипой","кипре","кипуч","кипят","кирас","кирза","кирил","кирка","кирке","кирки","кирку","кирок","кирха","кирхе","кирхи","кирху","кисам","кисах","кисее","кисет","кисли","кисло","кисни","кисну","кисой","кисок","киста","кисте","кисть","китай","китам","китах","китая","кител","китов","китом","китят","кифоз","кихот","кичка","кишат","кишек","кишел","кишит","кишка","кишке","кишки","кишку","кишмя","кишок","киями","клавд","клада","кладб","кладе","клади","кладн","кладу","клады","кладь","кладя","клака","клаке","клаки","клаку","клала","клали","клало","клана","клане","кланя","клара","кларе","кларк","клару","клары","класс","клева","клеве","клеву","клеем","клеил","клеим","клеит","клейм","клемм","клена","клене","клену","клены","клерк","клест","клети","клеть","клешн","клеща","клеще","клещи","клеят","клизм","клика","клике","клики","кликн","клико","клику","клима","клина","клине","клину","клинч","клипа","клипе","клипс","клипу","клипы","клира","клире","клиру","клита","клича","кличе","кличи","кличу","кличь","клише","клоак","клодт","клока","клоке","клоки","клоку","клона","клоне","клони","клону","клоны","клоню","клоня","клопа","клопе","клопу","клопы","клоун","клуба","клубе","клубу","клубы","клумб","клуня","клупп","клуша","клуше","клуши","клушу","клыка","клыке","клыки","клыку","клюва","клюве","клюву","клювы","клюем","клюет","клюза","клюзе","клюзу","клюзы","клюка","клюке","клюки","клюку","клюну","клюнь","клюфт","ключа","ключе","ключи","ключу","клякс","кляла","кляли","кляло","кляни","кляну","кляня","кляпа","кляпе","кляпу","кляпы","клятв","кляуз","кляча","кляче","клячи","клячо","клячу","кмоль","кнели","кнель","кнехт","книга","книге","книги","книго","книгу","книжк","книжн","книзу","кница","книша","книшу","кнопа","кнопе","кнопу","кнопы","кнута","кнуте","кнуто","кнуту","кнуты","княги","княжн","князе","князь","князю","князя","коайт","коала","коати","кобел","кобза","кобзе","кобзу","кобзы","кобол","кобра","кобре","кобру","кобры","кобур","кобыл","ковал","кован","ковар","ковач","ковер","ковка","ковна","ковок","ковра","ковре","ковру","ковры","ковша","ковше","ковши","ковшу","ковыл","когда","когте","когти","когтю","когтя","когут","кодак","кодам","кодах","кодек","кодов","кодой","кодом","кодон","коего","коему","кожам","кожан","кожах","кожиц","кожно","кожух","козак","козел","козий","козла","козой","козон","козье","козьи","козью","козья","коими","койка","койот","кокер","кокет","кокка","кокке","кокки","кокку","кокну","кокон","кокор","кокос","кокош","кокса","коксе","коксу","колам","колах","колба","колбе","колен","колер","колес","колет","колец","колея","колик","колит","колич","колка","колке","колку","колле","колли","колоб","колод","колой","колок","колол","колом","колон","колос","колот","колош","колум","колун","колчи","колыб","колье","кольт","кольц","колью","колья","колюр","колюч","коляд","коляс","коман","комар","комет","комех","комик","комис","комка","комке","комма","комме","комми","комму","коммы","комна","комод","комок","комор","компа","компе","компу","компы","комуз","комья","конах","конве","конго","конде","конди","кондр","конев","конек","конец","конеч","коник","конка","конке","конки","конку","конпа","консе","конто","контр","конур","конус","конфи","конца","конце","концо","концу","концы","конча","конче","кончи","кончу","конюх","коняг","коням","конях","копай","копал","копам","копах","копач","копаю","копая","копен","копер","копие","копий","копил","копим","копир","копит","копию","копия","копка","копке","копки","копку","коплю","копна","копне","копни","копну","копны","копов","копом","копра","копре","копру","копры","копти","копты","коптя","копун","копуш","копчу","копыл","копыс","копыт","копье","копью","копья","копям","копят","копях","кораб","коран","корда","корде","корен","корец","кореш","коржа","корже","коржи","корзи","корил","корим","корит","корка","корке","корки","корку","корма","корме","корми","корму","кормы","кормя","корне","корни","корню","корня","короб","коров","корой","корок","корон","корот","корпу","корр.","корре","корта","корте","корту","корты","корфа","корча","корчи","корчм","корчу","корчь","корыс","корыт","корье","корью","корья","коряв","коряг","коряк","корят","косам","косар","косах","косач","косая","косве","косец","косил","косим","косит","косиц","косищ","космы","косно","косну","косое","косой","косок","косом","косте","кости","кость","костю","костя","косую","косца","косце","косцу","косцы","косые","косых","косяк","косят","котам","котах","котел","котик","котла","котле","котлу","котлы","котов","котом","котон","котор","котяр","котят","коуша","коуше","коушу","кофеи","кофий","кофию","кофра","кофре","кофру","кофры","кофта","кофте","кофту","кофты","кохия","кохом","кочан","кочек","кочет","кочка","кочки","кочку","кочна","кочни","кочуй","кочую","кочуя","кошам","кошах","кошек","кошем","кошен","кошер","кошка","кошке","кошки","кошку","кошма","кошме","кошму","кошмы","кошон","кощее","кощея","коэфф","краба","крабе","крабу","крабы","крага","краги","крагу","кради","краду","крадя","краев","кража","краже","кражи","крайн","крала","крале","крали","крало","кралю","краля","крана","кране","крапа","крапе","крапп","крапу","краса","красе","краси","краск","красн","красо","красу","красы","крась","крася","краул","краха","крахе","крахи","краху","краше","крашу","краюх","краюш","краям","краях","кредо","креза","крезе","крезу","крезы","крема","креме","крему","кремы","крена","крене","крену","креню","креня","креол","крепа","крепе","крепи","крепк","крепо","крепс","крепу","крепч","крепы","крепь","крепя","кресе","кресл","кресс","крест","креще","крива","криви","криво","кривы","кривя","кригс","криза","кризу","кризы","крика","крике","крики","крикн","крико","крику","криле","криль","крилю","криля","крина","крине","крину","крипа","крипе","крипу","криса","крисе","крист","крису","крисы","крица","крице","крицу","крицы","крича","кричи","кричу","крова","крове","крови","кровн","крову","кровь","кроем","кроен","кроет","кроил","кроим","кроит","кроки","кроле","кроль","кролю","кроля","кроме","кромы","кромя","крона","кроне","крону","кроны","кропи","кропя","кросс","крота","кроте","кротк","крото","кроту","кроты","кроха","крохе","крохи","кроху","кроша","кроше","кроши","крошу","кроят","круга","круге","круги","кругл","круго","кругу","кружа","кружи","кружк","круиз","крупа","крупе","крупн","крупу","крупы","крута","крути","круто","круты","круть","крутя","круча","круче","кручу","круша","круши","крушу","крыга","крыги","крыгу","крыла","крыле","крыли","крыло","крылу","крыль","крыма","крыму","крыса","крысе","крысу","крысы","крыта","крыто","крыты","крыть","крыша","крыше","крыши","крышу","крюка","крюке","крюки","крюку","крючк","крючо","кряду","кряжа","кряже","кряжи","крякв","кряки","кряче","ксеня","ксерь","ксерю","ксива","ксиве","ксивы","кстат","ктото","ктура","ктыре","ктырь","ктырю","ктыря","ку-ку","кубам","кубах","кубик","кубка","кубке","кубки","кубку","кубла","кубов","кубок","кубом","кугой","кудея","кудри","куешь","кузек","кузен","кузин","кузне","кузни","кузню","кузня","кузов","куйте","кукан","кукиш","кукла","кукле","куклу","куклы","кукой","кукол","кукуб","кукуй","кукую","кукуя","кулаж","кулак","кулан","кулек","кулем","кулеш","кулик","кулис","кулич","кулиш","кулон","культ","кулям","кулях","кумач","кумжа","кумин","кумир","кумов","кумой","кумол","кумом","кумык","кумыс","кунак","куний","куниц","кунту","кунье","куньи","кунью","кунья","купав","купаж","купай","купал","купам","купах","купаю","купая","купен","купец","купив","купил","купим","купит","купка","купле","купли","куплю","купля","купно","купой","купол","купон","купца","купце","купцу","купцы","купчи","купчу","купят","кураж","курва","курве","курву","курвы","курда","курде","курен","курий","курил","курим","курит","куриц","курия","курка","курке","курки","курку","курно","курну","курой","курок","курса","курсе","курсу","курсы","куртк","курье","курьи","курью","курья","курян","курят","кусай","кусак","кусал","кусам","кусан","кусаю","кусов","кусок","кусом","куста","кутай","кутал","кутас","кутая","кутеж","кутил","кутим","кутит","кутну","кутня","куток","кутум","кутъю","кутье","кутьи","кутью","кутья","кутюр","кутят","кухар","кухва","кухне","кухни","кухню","кухня","куцая","куцее","куцем","куцую","куцые","куцый","куцых","кучам","кучах","кучек","кучер","кучка","кучки","кучку","кучно","кучум","кушае","кушай","кушак","кушал","кушам","кушан","кушах","кушаю","кушая","кушем","кушет","кущам","кущах","кхмер","кювет","кюрий","кюрин","кюрию","кюрия","кяриз","лабаз","лабух","лавам","лавах","лаваш","лавин","лавка","лавок","лавоч","лавра","лавре","лавру","лавры","лагам","лагах","лагов","лагом","лагун","ладам","ладан","ладах","ладен","ладил","ладим","ладит","ладка","ладке","ладна","ладно","ладны","ладов","ладок","ладом","ладон","ладош","ладье","ладьи","ладью","ладья","ладят","лаешь","лажде","лазай","лазал","лазая","лазер","лазий","лазил","лазом","лазят","лайба","лайбе","лайбу","лайбы","лайда","лайка","лайки","лайку","лайся","лайте","лакай","лакаю","лакая","лакее","лакеи","лакея","лакир","лаком","лакун","ламам","ламах","ламой","лампа","лампе","лампу","лампы","ламут","ландо","ланды","ланит","ланка","ланна","ланок","ланпы","ланью","ланям","ланях","лапай","лапал","лапам","лапах","лапаю","лапая","лапищ","лапка","лапке","лапки","лапку","лапой","лапок","лапта","лапте","лапти","лапту","лапты","лаптю","лаптя","лапша","лапше","лапши","лапшу","ларго","ларек","ларем","ларец","ларца","ларям","ласок","ласпи","лассо","ласта","ласте","латай","латал","латам","латан","латах","латая","латка","латке","латки","латку","латок","латук","латыш","лафет","лафит","лачка","лачку","лачок","лачуг","лаюсь","лаяка","лаяла","лаяли","лаяло","лаясь","лаять","лбами","лбина","лбова","лбову","лгала","лгали","лгало","лгуна","лгуне","лебед","лебяд","левак","левам","левах","левее","левит","левка","левко","левку","левов","левое","левом","левую","левша","левше","левши","левшу","левые","левый","левых","легат","легаш","леген","легка","легки","легко","легла","легли","легло","легок","легро","легче","легши","ледащ","ледве","леден","ледка","ледке","ледок","ледрю","ледян","леера","леере","лееру","лееры","лежав","лежак","лежал","лежат","лежим","лежит","лежка","лежке","лежки","лежку","лежмя","лежне","лежни","лежню","лежня","лезем","лезли","лезло","лезть","лейка","лейки","лейку","лейте","лекаж","лекан","лекко","лекто","лелее","лелея","лембк","лемех","лемиш","лемма","лемме","лемму","леммы","лемур","ленам","ленил","ленин","ленка","ленке","ленку","ленно","ленок","леном","леноч","лента","ленте","ленто","ленту","ленты","ленца","ленча","ленче","ленчи","ленчу","ленью","леона","лепет","лепех","лепил","лепим","лепит","лепка","лепке","лепки","лепку","леплю","лепно","лепра","лепре","лепру","лепры","лепта","лепте","лепту","лепты","лепят","лерка","лерке","лерки","лерку","лерок","лесам","лесах","лесен","лесна","лесни","лесов","лесой","лесок","лесом","лесса","лессе","лессу","лести","лестн","лесть","летай","летал","летам","летах","летая","летел","летет","летим","летит","летка","летке","летки","летку","летни","летно","леток","летом","летоп","летун","летуч","летье","летят","лечат","лечен","лечил","лечим","лечит","лешак","лешая","лешее","лешем","лешие","леший","лешим","леших","лешка","лешую","лещам","лещах","лещик","лещом","леэть","леями","лжеца","лжеце","лжецу","лжецы","лжешь","лжива","лживо","лживы","лиана","лиане","ливан","ливер","ливмя","ливне","ливню","ливня","ливре","лигам","лигах","лигой","лидар","лидер","лидин","лидию","лидия","лижем","лижет","лижут","лизал","лизан","лизин","лизис","лизни","лизой","лизол","лизун","ликер","ликом","ликуй","ликую","ликуя","лилеи","лилий","лилию","лилия","лилов","лился","лиман","лимба","лимбе","лимбу","лимбы","лимит","лимов","лимой","лимон","лимфа","лимфе","лимфу","лимфы","лингв","линек","линем","линза","линзе","линзу","линзы","линий","линию","линия","линка","линке","линки","линку","линуй","линую","линуя","линце","линча","линяй","линял","линям","линях","линяю","линяя","лионе","липаз","липам","липах","липец","липид","липка","липке","липки","липко","липку","липла","липли","липло","липну","липой","липок","липом","липси","липут","липче","лирик","лирой","лиром","лисам","лисах","лисий","лисил","лисиц","лисов","лисой","лисом","листа","листе","лисье","лисьи","лисью","лисья","лисят","литав","литам","литах","литая","литве","литву","литвы","литер","литий","литию","лития","литка","литов","литое","литой","литом","литра","литре","литру","литры","литую","литые","литый","литых","литье","литью","литья","лифом","лифта","лифте","лифту","лифты","лихач","лихая","лихва","лихие","лихим","лихих","лихое","лихой","лихом","лихор","лихую","лицам","лицах","лицее","лицеи","лицем","лицея","лицом","лицую","лицуя","личек","личик","лично","личну","личны","лишае","лишаи","лишай","лишал","лишар","лишат","лишаю","лишая","лишек","лишен","лишив","лишил","лишим","лишит","лишка","лишку","лишне","лишни","лннию","лобан","лобби","лобик","лобио","лобия","лобка","лобке","лобки","лобку","лобно","лобов","лобок","лобыз","ловец","ловил","ловим","ловит","ловка","ловки","ловко","ловле","ловли","ловлю","ловля","ловок","ловом","ловца","ловце","ловцу","ловцы","ловча","ловче","ловчи","ловчу","ловят","ловящ","логам","логах","логик","логин","логов","логом","логос","лодзи","лодка","лодке","лодок","лодыж","ложам","ложах","ложек","ложем","ложен","ложис","ложка","ложке","ложки","ложку","ложна","ложно","ложны","ложок","ложью","лозой","локва","локон","локте","локус","ломай","ломак","ломал","ломах","ломаю","ломая","ломик","ломил","ломим","ломит","ломка","ломке","ломко","ломлю","ломов","ломок","ломот","ломте","ломти","ломтю","ломтя","ломче","ломят","лондо","лопал","лопат","лопаю","лопая","лопни","лопну","лопух","лорда","лорде","лорет","лорис","лорне","лоров","лором","лосем","лосих","лоска","лоске","лоску","лосям","лосят","лосях","лотам","лотах","лотка","лотке","лотки","лотку","лотов","лоток","лотом","лотос","лохам","лохах","лохмы","лохов","лохом","лоций","лоцию","лоция","лошад","лошак","лощат","лощен","лощил","лощим","лощин","лощит","лубка","лубке","лубки","лубку","лубок","лубом","лубье","лугам","лугах","лугов","лугом","лудил","лудим","лудит","лудой","лудят","лужам","лужах","лужен","лужин","лужиц","лужка","лужке","лужки","лужку","лужок","лузги","лузгу","лузой","лузях","луком","лукум","лунам","лунах","лунем","лунка","лунке","лунки","лунку","лунно","луной","лунок","луням","лунях","лупам","лупах","лупил","лупим","лупит","лупка","луплю","лупой","лупят","лурой","луром","лутка","луцка","лучам","лучан","лучат","лучах","лучем","лучик","лучил","лучим","лучин","лучит","лучка","лучку","лучок","лучом","лучше","лучши","лущат","лущен","лущил","лущим","лущит","лыжам","лыжах","лыжен","лыжне","лыжни","лыжню","лыжня","лыком","лысая","лысел","лысея","лысин","лысое","лысой","лысом","лысун","лысух","лысую","лысые","лысый","лысых","лычек","лычка","лычки","лычко","лычку","львам","львах","львиц","львов","львом","львят","льгот","льдам","льдах","льдин","льдов","льдом","льешь","льнем","льнет","льном","льнул","льнут","льсти","льстя","льшая","льшим","льших","льшую","льюсь","льяло","любая","любви","любец","любил","любим","любит","любиш","любия","люблю","любов","любое","любой","любом","любоп","любос","любуе","любую","любые","любый","любых","любят","людев","люден","людие","людна","людно","людны","людом","людск","людьм","людям","людях","люком","люкса","люксе","люксу","люксы","люлек","люмен","люнет","люпин","люпус","люстр","лютая","лютее","лютен","лютер","лютик","лютич","лютне","лютни","лютню","лютня","лютое","лютой","лютом","лютуй","лютую","лютуя","лютые","лютый","лютых","люфта","люфте","люфту","люций","лючка","лючки","лючку","лючок","люэса","люэсе","люэсу","лягай","лягал","лягаю","лягая","лягни","лягну","лягте","лягут","лягуш","лядам","лядом","ляжек","ляжем","ляжет","ляжка","ляжке","ляжки","ляжку","лязга","лязге","лязгу","лямка","лямке","лямки","лямку","лямок","лямши","ляпай","ляпал","ляпам","ляпах","ляпаю","ляпая","ляпис","ляпни","ляпну","ляпов","ляпом","лярва","лярда","лярде","ляссе","ляхам","ляхов","ляхом","ляшка","ляюсь","маана","мабиш","мавра","мавре","мавру","мавры","магам","магах","магий","магию","магия","магма","магме","магов","магом","магот","мадам","мадия","маета","маеты","маешь","мажем","мажет","мажор","мажут","мазал","мазан","мазар","мазер","мазик","мазил","мазка","мазке","мазки","мазко","мазку","мазло","мазне","мазни","мазню","мазня","мазок","мазур","мазут","мазью","мазям","мазях","маиор","маиса","маисе","маису","маисы","майка","майки","майку","майна","майор","майся","макай","макак","макао","макар","макаю","макая","макет","макни","макну","маком","макса","макси","малая","малек","мален","малец","малик","малин","малка","малке","малки","малку","малое","малой","малок","малом","малос","малоя","малую","малые","малый","малых","малыш","малье","мальц","мальч","малюй","малюю","малюя","маляр","мамам","маман","мамах","мамаш","мамба","мамбе","мамбо","мамбу","мамбы","мамен","мамин","мамка","мамке","мамки","мамку","мамой","мамок","мамон","манат","манга","манге","манги","манго","мангу","манев","манеж","манер","мание","маний","манил","маним","манир","манит","маниф","манию","мания","манка","манке","манки","манко","манку","манна","манне","манно","манну","манны","манок","манон","манси","манти","манто","манул","манчи","манят","маори","марай","марал","маран","мараю","марая","марго","маржа","марже","маржи","марин","марию","мария","марка","марке","марки","марко","маркс","марку","марле","марли","марлю","марля","марме","марой","марок","мароя","марса","марсе","марта","марте","марту","марфа","марфе","марфо","марфу","марфы","марша","марше","марши","маршу","марье","марьи","марью","масаи","масле","масли","масло","маслу","маслю","масля","масок","масон","масса","массе","массу","массы","маста","масте","масти","масть","матам","матах","матве","матем","матер","матка","матке","матки","матку","матов","маток","матом","маточ","матуш","матча","матче","матчи","матчу","мафий","мафию","мафия","махай","махал","махам","махах","махаю","махая","махин","махни","махну","махов","махом","махра","махре","махру","махры","мацой","мачех","мачок","мачта","мачте","мачту","мачты","машем","машет","машин","машка","машки","машут","маюсь","маяка","маяке","маяки","маяку","маясь","маятн","маять","маяча","маячу","маячь","мбайт","мглис","мглой","мегер","мегом","медам","медее","медеи","медея","меджи","медик","медка","медке","медле","медли","медлю","медля","медно","медну","медны","медок","медом","медуз","медью","медяк","межам","межах","между","межой","мезга","мезге","мезги","мезгу","мезон","мейер","мейоз","мекки","мекку","мелел","мелен","мелет","мелея","мелис","мелка","мелке","мелки","мелко","мелку","мелок","мелом","мелос","мелоч","мельк","мелью","мелям","мелях","менад","менее","менно","меной","мента","менте","менту","менты","меняй","менял","меняю","меняя","мереж","мерен","мерещ","мерея","мерзл","мерил","мерим","мерин","мерит","мерич","мерка","мерке","мерки","мерку","мерла","мерли","мерло","мерно","мерой","мерок","мерси","мертв","меряй","мерял","мерят","меряю","меряя","месил","месим","месит","месса","мессе","мессу","мессы","места","месте","мести","месье","месят","месяц","метал","метан","метек","метел","метем","метет","метил","метим","метис","метит","метка","метке","метки","метко","метку","метла","метле","метлу","метлы","метни","метну","метод","меток","метол","метоп","метра","метре","метро","метру","метры","метут","метче","метят","мехам","мехах","мехов","мехом","меццо","мечам","мечах","мечем","мечен","мечет","мечом","мечта","мечте","мечту","мечты","мечут","мешае","мешай","мешал","мешат","мешаю","мешая","мешен","мешка","мешке","мешки","мешку","мешок","мешоч","мещан","мздой","миазм","мигай","мигал","мигам","мигах","мигач","мигаю","мигая","мигли","мигни","мигну","мигов","мигом","мидас","мидий","мидию","мидия","мизер","микоз","микро","микст","милан","милая","милее","милен","милий","милка","милке","милки","милку","милле","милое","милой","милок","милом","милос","милуй","милую","милуя","милые","милый","милых","мильх","милям","милях","мимам","мимах","мимов","мимоз","мимом","минам","минах","минаю","минга","минеи","минем","минер","минет","минея","минна","минне","минны","миног","миной","минор","минск","минув","минуй","минул","минус","минут","миную","минуя","минья","миняй","миома","миоме","миому","миомы","мираж","мирбо","мирго","мирен","мирза","мирзу","мирил","мирим","мирит","мирка","мирке","мирки","мирку","мирна","мирно","мирну","мирны","миров","мирок","миром","мирон","мирра","мирре","мирру","мирры","мирта","мирте","мирту","мирян","миссы","митоз","митра","митре","митро","митру","митры","митяй","митяя","мифим","мифов","мифом","михаи","михай","михея","михин","мишек","мишка","мишке","мишки","мишку","мишур","младо","младш","млеем","млеет","млеко","млела","млели","млело","млеть","млина","млине","млрд.","млына","ммоль","мнени","мнешь","мнила","мнили","мнило","мнимо","мнишь","многа","многи","много","множа","множе","множь","мнози","мнусь","моава","моаве","мобил","мовчи","могар","моген","могил","могла","могли","могло","могол","могут","могуч","могущ","могши","модам","модах","модем","моден","модна","модно","модны","модой","модус","моего","моему","можем","может","мозги","мозгл","мозем","моими","мойва","мойве","мойву","мойвы","мойка","мойра","мойте","мокий","мокка","мокко","мокла","мокли","мокло","мокну","мокор","мокра","мокро","мокры","мокша","молам","молах","молва","молве","молви","молву","молвы","молвь","молдо","молил","молим","молит","молни","молод","молож","молок","молол","молом","молот","молох","молоч","молча","молчи","молчу","мольб","молье","молью","молюс","молям","моляр","молят","молях","монад","монас","монах","монаш","монба","монте","мопед","мопса","мопсе","мопсу","мопсы","морга","морге","морги","морда","морде","морем","морен","моржа","морже","моржи","морзе","мориа","морил","морим","морит","мороз","морок","мором","морса","морсе","морск","морсу","морсы","морус","морфа","морфе","морфу","морфы","морцо","морщи","морщу","морщь","моряк","морям","морят","морях","мосек","мосий","мосия","москв","моско","мосол","моста","мосте","мосье","мотае","мотай","мотал","мотам","мотах","мотая","мотет","мотив","мотиш","мотка","мотке","мотки","мотку","мотни","мотну","мотню","мотня","мотов","моток","мотом","мотор","мотру","мотто","мотыг","мохер","мохна","мохны","мохом","моцио","мочат","мочек","мочен","мочил","мочим","мочит","мочка","мочки","мочку","мочой","мошек","мошен","мошка","мошке","мошки","мошку","мошна","мошне","мошну","мошны","мощам","мощах","мощен","мощна","мощно","мощны","мощью","моюсь","моясь","мрази","мразь","мрака","мраке","мраку","мрамо","мраче","мрачн","мрежа","мстил","мстим","мстис","мстит","мстят","муара","муаре","муару","мувен","мудра","мудри","мудро","мудры","мудрю","мудря","мужал","мужам","мужах","мужаю","мужая","мужем","мужес","мужик","мужич","мужчи","мужья","музея","музой","мукой","мулла","мулле","муллу","муллы","мулов","мулом","муляж","мулят","мумер","мумие","мумий","мумию","мумия","мумму","мунда","мунди","мураш","мурда","мурен","мурза","мурзе","мурзу","мурзы","мурин","мурка","мурке","мурки","мурку","мурла","мурле","мурло","мурлу","мурой","мурок","муром","муруй","мурую","муруя","мурья","мусор","мусса","муссе","муссу","мусье","мусью","мутен","мутил","мутим","мутит","мутна","мутно","мутны","мутон","мутью","мутят","муфта","муфте","муфту","муфты","мухам","мухах","мухой","муцин","мучай","мучат","мучаю","мучая","мучил","мучим","мучит","мучка","мушек","мушка","мушке","мушки","мушку","мхами","мцыри","мчала","мчали","мчало","мчась","мчишь","мчусь","мшист","мывши","мыкаю","мыкол","мылил","мылим","мылит","мылка","мылки","мылко","мылок","мылом","мылся","мылят","мымра","мымре","мымру","мымры","мысах","мысли","мысль","мыслю","мысля","мысов","мысок","мысом","мытая","мытое","мытой","мытом","мытую","мытые","мытый","мытых","мытье","мытью","мытья","мычал","мычат","мычим","мычит","мычки","мышам","мышат","мышах","мышек","мыший","мышка","мышке","мышки","мышко","мышку","мышца","мышце","мышцу","мышцы","мышью","мэлан","мэрий","мэрию","мэрия","мэров","мэром","мэрон","мэтра","мэтре","мэтру","мэтры","мюона","мюоне","мюону","мюоны","мягко","мягок","мягча","мягче","мягчу","мякиш","мякла","мякли","мякло","мякну","мялка","мялке","мялки","мялку","мялок","мялся","мямле","мямли","мямлю","мямля","мяска","мяске","мяско","мяску","мясов","мясом","мяста","мясца","мясце","мясцо","мясцу","мятая","мятеж","мятие","мятно","мятое","мятой","мятом","мятую","мятые","мятый","мятых","мятье","мячам","мячах","мячем","мячик","мячом","на-ка","набат","набег","набер","набив","набил","набит","набла","набле","наблу","наблы","набоб","набок","набор","набра","набре","набро","набух","набью","навал","навар","навез","навек","навел","навер","навес","навет","навзр","навий","навин","навис","навит","навод","навоз","навра","наври","навру","навсе","навст","навыв","навыд","навык","навью","навья","навяз","нагай","наган","нагар","нагая","нагиб","нагие","нагим","нагих","нагла","нагле","нагло","наглы","нагля","нагна","нагни","нагну","нагов","нагое","нагой","нагом","нагон","награ","нагул","нагую","надаю","надев","надее","надеж","надел","наден","надет","надея","надзо","надир","надме","надоб","надое","надои","надой","надол","надор","надоя","надпи","надса","надтр","надув","надуе","надуй","надул","надум","надут","надую","наеду","наезд","наела","наели","наело","наест","наешь","нажав","нажал","нажат","нажив","нажил","нажим","нажин","нажит","нажми","нажму","нажри","нажру","назад","назар","назва","назем","назло","назна","назыв","наибл","наибо","наивн","найде","найди","найду","найдя","найма","найме","найми","найму","найти","наказ","накан","накат","накип","накло","накол","након","накоп","накос","налег","налез","налет","налив","налил","налим","налип","налит","налиц","налог","налож","налой","налоя","налью","наляг","намаз","намек","намел","намер","намес","намет","намеч","намин","намну","намой","намок","намол","намыв","намыл","намяв","намяк","намял","нанду","нанес","наниз","наним","нанка","нанке","нанки","нанко","нанку","нанос","наняв","нанял","нанят","наори","наотр","напав","напак","напал","напас","напев","напек","напел","напер","напет","напеч","напив","напил","напис","напит","напич","напои","напой","напол","напом","напор","напр.","напра","напри","напро","напру","напря","нарас","нарве","нарви","нарву","нарвы","нарда","нарде","нарез","нарек","народ","нарой","нарос","нароч","нарта","нарте","нарту","нарты","наруж","наруш","нарыв","нарыл","нарыт","наряд","насад","насаж","насев","насек","насел","насий","насил","наска","наско","насла","насле","насме","насос","наспл","наста","насте","насти","насто","настя","насуп","насущ","насую","насче","насып","натал","наташ","натек","натер","натра","натре","натри","натру","натур","натяг","натян","наудя","наук.","наука","науке","науки","науку","научу","науще","нафта","нафте","нафту","нафты","нахал","нахло","нахму","наход","нацел","наций","нацио","нацию","нация","начав","начал","начат","начел","начес","начет","начин","начит","начне","начни","начну","нашег","нашед","нашел","нашем","нашив","нашил","нашим","нашит","наших","нашла","нашли","нашло","нашлю","нашью","нащеп","наяву","наяда","наяде","наяду","наяды","ндарь","небес","небол","небом","небре","небыт","невда","невеж","невер","невес","невзр","невид","невин","невод","невоз","невол","невск","негаа","негде","негод","негож","негой","негус","недал","недар","недел","недет","недоб","недов","недол","недор","недоу","недра","недры","недуг","недур","нежат","нежба","нежел","нежен","нежил","нежим","нежин","нежит","нежна","нежно","нежну","нежны","незав","незад","нездо","незна","неизв","неизм","неист","нейди","нейти","некай","некаю","некая","некем","некие","некий","неким","неких","неког","некое","некой","неком","некот","некто","некую","нелеп","нелли","нелов","нельз","нелюб","немаз","немал","немая","немед","немел","немец","немея","немил","немка","немке","немки","немку","немно","немое","немой","немок","немца","немце","немцу","немцы","немые","немых","ненав","ненад","ненас","ненец","нения","ненка","ненуж","ненца","ненце","ненцу","ненцы","необх","необъ","неожи","неона","неоне","неону","неопи","неопр","непир","непог","непод","непон","непор","непос","непра","непре","непри","непро","нераз","нерал","нерва","нерве","нервн","нерву","нервы","неред","нерка","нерке","нерки","нерку","нерол","нерон","нерпа","нерпе","нерпу","нерпы","нерях","несем","несет","неско","несла","несли","несло","несме","несмо","несно","несог","несом","несоо","неспо","неспр","несся","несте","нести","несть","несун","несут","несча","несче","несыт","нетер","нетто","нетяг","нетях","неуда","неуде","неудо","неуду","неуды","неуже","неужт","неуме","неуча","неуче","неучу","нефед","нефов","нефом","нефти","нефть","нехай","нехор","нехри","нечая","нечег","нечем","нечет","нечто","нечуй","нешто","ни-ни","нибуд","нивам","нивах","нивка","нивоз","нивух","нивха","нивхе","нивху","нигде","нигил","нижем","нижет","нижни","нижут","нижче","низал","низка","низке","низки","низко","никем","никит","никиф","никла","никли","никло","никни","никну","никог","никой","никол","ником","никон","никто","никуд","нилом","нилот","нилус","нилыч","нильс","нимба","нимбе","нимбу","нимбы","нимфа","нимфе","нимфу","нимфы","ниной","нипоч","нисан","нитам","нитах","нитка","нитке","нитки","нитку","нитов","ниток","нитом","нитон","нитью","нитям","нитях","ницца","ницце","ниццу","ниццы","ничег","ничем","ничто","ничье","ничьи","ничью","ничья","нишам","нишах","нищал","нищаю","нищая","нищее","нищем","нищет","нищие","нищий","нищим","нищих","нищую","нница","новее","новен","новик","новоб","новог","новое","новои","новом","новос","новую","новые","новый","новых","новью","ногам","ногах","ногой","ногте","ногти","ногтю","ногтя","ножам","ножах","ножек","ножем","ножен","ножик","ножич","ножищ","ножка","ножке","ножки","ножку","ножни","ножны","нойон","нойте","нолик","нолям","нолях","номад","номах","номер","номов","нонах","нонет","ноной","нонче","норда","норде","норий","норию","нория","норка","норке","норки","норку","норма","норме","норму","нормы","норов","норой","норок","носам","носат","носах","носач","носик","носим","носов","носои","носок","носом","ности","носух","носью","носят","нотам","нотах","нотис","нотка","нотке","нотки","нотку","нотой","ноток","ночам","ночах","ночва","ночек","ночка","ночки","ночку","ночно","ночуй","ночую","ночуя","ночью","ношам","ношах","ношен","ношпа","нощно","нрава","нраве","нрави","нраво","нравс","нраву","нравя","ну-ка","ну-ну","нугой","нуден","нудил","нудим","нудит","нудна","нудно","нудны","нудью","нудят","нужда","нужде","нужду","нужды","нужен","нужна","нужно","нужны","нукай","нукаю","нукая","нукер","нулем","нулик","нулям","нулях","нумер","нутка","нутом","нутра","нутре","нутро","нутру","нынеш","нынче","нырка","нырке","нырки","нырку","нырни","нырну","нырок","ныряй","нырял","ныряю","ныряя","нытик","нытье","нытью","нытья","нэпом","нюанс","нюням","нюнях","нюхай","нюхал","нюхаю","нюхая","нюхни","нюхну","нюхом","нянек","нянин","нянча","нянчи","нянчу","няньк","няням","нянях","оазис","обаче","обаял","обаян","оббив","оббил","оббит","обвал","обвел","обвес","обвив","обвил","обвин","обвис","обвит","обвод","обвоз","обвор","обгон","обдал","обдам","обдан","обдаю","обдир","обдув","обдуй","обдул","обдум","обдут","обдую","обеги","обегу","обеда","обедн","обедо","обеду","обеды","обезо","обеим","обеих","обелю","оберн","оберт","оберу","обесп","обета","обеты","обеща","обжат","обжив","обжиг","обжил","обжим","обжин","обжит","обжог","обжор","обзол","обзор","обида","обиде","обидн","обиду","обидч","обиды","обидь","обижа","обила","обили","обило","обиня","обита","обито","обкат","обком","обкос","облав","облай","облак","облас","облач","облаю","облая","облез","облек","облет","облив","облик","облил","облит","облов","облог","облое","облож","облой","облок","облом","облоя","облую","облые","облый","облых","облюю","обмак","обман","обмен","обмер","обмет","обмин","обмой","обмол","обмор","обмоч","обмыв","обмыл","обмяв","обмяк","обмял","обмят","обнаж","обнар","обнес","обним","обнос","обняв","обнял","обогн","обода","ободр","обоев","обоек","обожа","обоза","обозе","обозн","обозо","обозу","обозы","обоим","обоих","обойм","обокр","обола","оболе","оболу","оболы","оболь","обора","оборв","оборо","оботр","обочь","обошл","обоюд","обоям","обоях","обрад","образ","обрат","обращ","обрез","обрек","обрел","обрет","обрив","обрил","обрит","оброк","оброн","оброс","оброч","обруб","обруч","обрыв","обряд","обсев","обсох","обста","обсто","обсуж","обтек","обтер","обтян","обуви","обувь","обуем","обует","обуза","обузе","обузу","обузы","обула","обули","обуло","обута","обуто","обуты","обуть","обуха","обухе","обухи","обуху","обучу","обуял","обуян","обхаю","обхва","обход","обчел","обшил","обшит","обшла","общая","общег","общее","общем","общес","общеч","общие","общий","общим","общин","общих","общую","объев","объел","объем","объяв","объял","объяс","объят","обыкн","обыск","обыча","обычн","обыщи","обыщу","обяза","оваго","овала","овале","овалу","овалы","овамо","овеем","овеет","овечк","овеяв","овеял","овеян","овила","овили","овило","овина","овине","овину","овита","овито","овлад","овода","овоща","овоще","овощи","овощу","овраг","овров","овсец","овсов","овсом","овсюг","овцам","овцах","овцой","овчар","овчин","овьем","овьет","огаре","огарь","огарю","огаря","оглох","оглуш","огляд","оглян","огнев","огнем","огнен","огням","огнях","оголи","оголю","огонь","огоро","огорч","ограб","оград","огрел","огрех","огром","одари","одарю","одева","одежа","одежд","одеже","одежи","одела","одели","одело","оделс","оделю","одену","одень","одеон","одерж","одест","одета","одето","одетт","одеты","одеть","одеял","одина","одине","одинн","одино","одича","однаж","однак","одная","однех","одним","одних","одно-","одног","одной","одном","одную","одобр","одоле","одров","одром","одури","одурь","одуше","ожгла","ожгли","ожгло","ожгут","ожеро","ожечь","ожжем","ожжет","оживи","ожида","ожила","ожили","ожило","ожога","ожоге","ожоги","ожогу","озабо","озада","озами","озари","озарю","озаря","оземь","озера","озере","озеро","озеру","озими","озимь","озлен","озлив","озлил","озлим","озлит","озлоб","озлят","означ","озноб","озона","озоне","озону","ой-ой","ойкай","ойкаю","ойкая","ойкну","ойрот","окает","окажи","оказа","окала","окали","окало","окапи","окати","окачу","океан","окину","окинь","окиси","оклад","оклик","окнам","окнах","окном","оковы","окоем","окола","около","оконч","окопа","окопе","окопу","окопы","окорм","окота","окоте","окоту","окошк","окраи","окрас","окраш","окреп","окрес","окрик","окрол","округ","окруж","оксид","оксим","октав","октан","октет","октод","окуем","окует","окуне","окуни","окунь","окуню","окуня","окупи","олеат","олега","олеин","олене","олени","олень","оленю","оленя","олесе","олеси","олесю","олеся","олеум","олива","оливе","оливы","олимп","олифа","олифе","олифу","олифы","олифя","олова","олове","олово","олову","олуха","олухе","олухи","олуху","олуши","ольга","ольге","ольги","ольго","ольгу","ольха","ольхе","ольхи","ольху","омами","омара","омаре","омару","омары","омега","омеге","омеги","омегу","омела","омеле","омелу","омелы","омерз","ометы","омлет","омоем","омоет","омочи","омочу","омрак","омуле","омули","омуль","омулю","омуля","омута","омуте","омуту","омуты","омыла","омыли","омыло","омыта","омыто","омыты","омыть","онагр","оникс","оного","оному","оноре","онуфр","онуча","онуче","онучу","оными","оолит","опала","опале","опали","опало","опалу","опалы","опалю","опана","опара","опаре","опару","опары","опаса","опасн","опека","опеке","опеки","опеку","опеле","опели","опель","опелю","опеля","опера","опере","оперу","оперш","оперы","опеча","опием","опила","опили","опило","опилю","описа","описи","опиум","опиши","опишу","оплел","оплеу","оплот","оплыв","оплыл","оплюй","оплюю","опоек","опоен","опоив","опоил","опоим","опоит","опока","опоке","опоки","опоку","ополз","опомн","опора","опоре","опоят","оправ","опред","опрок","опрос","опрят","оптик","оптим","оптом","опубл","опуса","опусе","опуст","опусу","опусы","опушу","опущу","опций","опцию","опция","опыта","опыте","опытн","опыту","опыты","опята","опять","орава","ораве","ораву","орала","орали","орало","орарь","орато","орбит","орган","оргий","оргию","оргия","ордам","ордах","орден","ордер","ордой","ордын","ореол","орест","ореха","орехе","орехи","ореху","орешь","ориги","орион","оркан","оркес","орлам","орлан","орлах","орлец","орлий","орлик","орлиц","орлов","орлом","орляк","орлят","ороки","ороси","орочи","орошу","оррьр","ортам","ортах","ортит","ортов","ортом","оруди","орхит","орчан","оршад","осада","осаде","осади","осаду","осады","осами","освед","освет","освещ","освоб","освящ","осела","оселе","осели","осело","осени","осень","осеню","осерд","осетр","осечь","осиль","осилю","осина","осине","осину","осипа","осипу","осиян","оскол","оскор","ослаб","ослам","ослах","ослеп","ослиз","ослий","ослик","ослих","ослиц","ослов","ослом","ослоп","ослыш","осляк","ослят","осман","осмат","осмел","осмий","осмию","осмия","осмол","осмос","осмот","осмыс","оснуй","осную","особа","особи","особл","особо","особь","осоед","осока","осоке","осоки","осоку","оспин","оспой","остав","остае","остал","остан","остап","остат","остаф","остер","остит","остов","остом","остор","остра","остри","остро","остры","острю","остыв","остыл","остью","остяк","остям","остях","осуди","осужд","осуши","осушу","осыпи","осыпь","осяду","осядь","осяза","осями","отава","отаве","отаву","отара","отаре","отару","отары","отбив","отбил","отбит","отбое","отбой","отбор","отбоя","отбро","отбыв","отбыл","отбыт","отваж","отвал","отвар","отвед","отвез","отвел","отвер","отвес","ответ","отвеч","отвис","отвле","отвод","отвоз","отвор","отвра","отвык","отгад","отгиб","отгон","отгул","отдае","отдал","отдам","отдан","отдач","отдаю","отдел","отдух","отдых","отдыш","отека","отеке","отеки","отеку","отела","отеле","отели","отелу","отель","отелю","отеля","отерт","отечь","отжав","отжал","отжат","отжив","отжиг","отжил","отжим","отжит","отжог","отжуй","отжую","отзол","отзыв","отира","отита","откаж","отказ","откат","откло","откол","откос","откро","откры","откуд","откуй","откуп","откус","откую","отлаю","отлег","отлет","отлив","отлил","отлип","отлит","отлич","отлов","отлог","отлож","отлуп","отмах","отмел","отмер","отмой","отмст","отмщу","отмыв","отмыл","отмыт","отмяк","отнес","отним","относ","отнош","отнын","отняв","отнял","отнят","отозв","отопи","оторв","отпав","отпад","отпал","отпев","отпел","отпер","отпет","отпив","отпил","отпор","отпра","отпус","отпущ","отрав","отраж","отраз","отреб","отрез","отрем","отрет","отрог","отрок","отрос","отруб","отрут","отрыв","отрыж","отрыл","отрыт","отряд","отряс","отрях","отсев","отсек","отсел","отсос","отсох","оттал","оттек","оттен","оттер","оттог","отток","оттуд","отума","отуча","отучу","отход","отцам","отцах","отцеп","отцов","отцом","отчаи","отчал","отчас","отчая","отчег","отчее","отчем","отчет","отчие","отчий","отчим","отчих","отчую","отшат","отшел","отшиб","отшив","отшил","отщеп","отъев","отъез","отъел","отъем","отъяв","отъял","отъят","отыде","отыск","отыщи","отыщу","офене","офени","офень","офеню","офеня","оферт","офиса","офисе","офису","офисы","офита","офице","офици","офорт","офсет","офшор","охает","охала","охали","охало","охами","охань","охаяв","охаял","охаян","охват","охнем","охнет","охнув","охнул","охнут","охота","охоте","охоту","охоты","охочи","охран","охрил","охрим","охрип","охрит","охрой","охрят","оцени","оценю","оцепе","оцепи","очага","очаги","очагу","очами","очаро","очеви","очень","очере","очерк","очерт","очеса","очесе","очесу","очеяь","очини","очиню","очист","очища","очком","очкур","очная","очник","очное","очной","очном","очнул","очнут","очную","очные","очный","очных","ошень","ошиба","ошибк","ошибл","ошибо","ошуюю","ощерю","ощупа","ощупи","ощупь","ощути","ощуща","ощуще","ощущу","пабам","пабах","пабов","пабом","павам","павах","павел","павий","павла","павле","павло","павлу","павлы","павье","павьи","павью","павья","паган","пагод","падал","падам","падат","падаю","падая","падеж","падем","паден","падет","падка","падла","падле","падло","падлу","падок","падуб","падун","падут","падши","пажам","пажах","пажом","пазки","пазку","пазов","пазок","пайки","пайку","пакет","пакле","пакли","паклю","пакля","паком","пакта","пакте","пакту","пакты","пакуй","пакую","пакуя","палам","палас","палат","палах","палац","палач","палаш","палая","пален","палец","палея","палий","палил","палим","палис","палит","палиц","палия","палка","палке","палки","палко","палку","палов","палое","палой","палок","палом","палуб","палую","палые","палый","палых","палыч","пальм","пальт","пальц","палят","памба","памбу","памбы","памва","памве","памву","памвы","пампа","пампе","пампу","пампы","памят","панам","панас","панах","панаш","панда","панде","панду","панды","паниб","паник","паних","панич","панка","панке","панки","панку","панна","панне","панно","панну","панны","панок","панси","панта","панты","паную","паныч","панье","папам","папах","папаш","папен","папин","папка","папке","папки","папку","папой","папок","папуа","папул","папхе","папыч","папье","парад","параф","пардо","парез","парен","париж","парий","парик","парил","парим","парит","парию","пария","парка","парке","парки","парко","парку","парле","парль","парне","парни","парно","парню","парня","паров","парод","парой","парок","паром","парт-","парта","парте","парти","парту","парты","парус","парфе","парча","парче","парчи","парчу","парша","парше","парши","паршу","парят","пасаж","пасам","пасах","пасек","пасем","пасет","пасла","пасли","пасло","пасма","пасме","пасмо","пасни","пасну","пасов","пасом","пасса","пассе","пасси","пассу","пассы","пасся","паста","пасте","пасть","пасуй","пасут","пасую","пасуя","пасха","пасхе","пасхи","пасху","пасюк","патан","патер","патио","патла","патле","патлу","патлы","патом","патуа","пауза","паузе","паузу","паузы","паука","пауке","пауки","пауко","пауку","пафос","пахал","пахан","пахви","пахит","пахла","пахли","пахло","пахне","пахни","пахну","пахом","пахре","пахта","пахте","пахту","пахты","пахуч","пацан","пацие","пацюк","пачек","пачка","пачки","пачку","пашам","пашах","пашем","пашен","пашет","пашки","пашко","пашне","пашни","пашню","пашня","пашой","пашут","паюса","паюсе","паюсу","паяем","паяет","паяла","паяли","паяло","паями","паяна","паяно","паяны","паять","паяца","паяце","паяцу","паяцы","пеана","пеане","пеану","певал","певец","певиц","певун","певуч","певца","певце","певцу","певцы","пегас","пегаш","пегая","пегие","пегий","пегим","пегих","пегог","пегое","пегой","пегом","пегую","педра","педро","пейса","пейсе","пейсу","пейсы","пейте","пекан","пекла","пекле","пекли","пекло","пеклу","пеком","пекся","пекто","пекут","пелен","пелит","пелся","пемза","пемзе","пемзу","пемзы","пенал","пенек","пенеч","пензе","пензу","пензы","пение","пенил","пеним","пенис","пенит","пению","пения","пенка","пенке","пенки","пенку","пенни","пенно","пеной","пенок","пенса","пенсе","пенсу","пенсы","пенье","пенью","пенья","пеняй","пенял","пенят","пеняю","пеняя","пепел","пепла","пепле","пеплу","пеплы","пепси","перва","перво","перву","первы","перга","переб","перег","перед","перее","перек","перел","перем","перен","переп","перер","перес","перет","перех","перец","переш","перил","перин","перка","перла","перле","перли","перло","перлу","перлы","перми","пермь","перов","пером","перса","персе","перси","перст","персу","персы","перся","перун","перца","перча","перчу","перья","песен","песет","песец","песий","песик","песне","песни","песнь","песню","песня","песок","пестр","песца","песце","песцу","песцы","песье","песьи","песью","песья","петая","петел","петен","петер","петит","петле","петли","петлю","петля","петра","петре","петри","петро","петру","петух","петый","пехом","печал","печам","печат","печах","печек","печем","печен","печет","печка","печки","печку","печны","печью","пешая","пешее","пешек","пешем","пешие","пеший","пешим","пеших","пешка","пешке","пешки","пешко","пешку","пешни","пешня","пешую","пещер","пещур","пиала","пиале","пиалу","пиалы","пиано","пиара","пиаре","пиару","пивал","пивка","пивца","пивце","пивцо","пивцу","пивши","пигус","пиесе","пиесу","пижам","пижма","пижме","пижму","пижмы","пижон","пиита","пикай","пикан","пикап","пикаю","пикая","пикет","пикни","пикну","пикой","пиком","пикон","пикша","пикше","пикши","пикшу","пикюр","пилав","пилад","пилам","пилах","пилен","пилил","пилим","пилит","пилка","пилке","пилки","пилку","пилой","пилок","пилон","пилот","пился","пилят","пимам","пимах","пимен","пинай","пинал","пинаю","пиная","пинде","пинен","пиний","пинию","пиния","пинка","пинке","пинки","пинку","пинок","пинта","пинте","пинту","пинты","пиона","пионе","пиону","пионы","пипка","пират","пирее","пирен","пирит","пирке","пиров","пирог","пирож","пиром","пирон","пироп","пирса","пирсе","пирсу","пирсы","пируй","пирую","пируя","писак","писал","писан","писар","писат","писаю","писем","писун","писца","писце","писцу","писцы","письм","питай","питал","питая","питер","питие","питию","пития","питой","питон","питух","питый","питье","питью","питья","пифий","пифию","пифия","пифос","пихай","пихал","пихаю","пихая","пихни","пихну","пихта","пихте","пихту","пихты","пицца","пицце","пиццу","пиццы","пичуг","пичук","пишем","пишет","пишут","пищал","пищат","пищик","пищим","пищит","пищух","плави","плавн","плавт","плаву","плавь","плавя","плака","плаке","плакс","пламя","плана","плане","пласт","плата","плате","плати","платк","плато","плату","платя","плаун","плаха","плахе","плахи","плахт","плаху","плаца","плаце","плацу","плацы","плаче","плачу","плачь","плаща","плаще","плащи","плащу","плебс","плева","плеве","плево","плеву","плевы","пледа","пледу","пледы","плеер","плела","плели","плело","племя","плена","плене","плени","пленн","плену","пленю","плеса","плесе","плеск","плесу","плесы","плети","плеть","плетя","плеча","плече","плечи","плечо","плешь","плещи","плинт","плинф","плиса","плисе","плису","плита","плица","плице","плицу","плицы","плова","плове","плову","плода","плоди","плодя","пломб","плоск","плота","плоте","плоти","плотн","плоту","плоты","плоть","плоха","плохи","плохо","плоше","плошк","площа","площе","плуга","плуге","плуги","плугу","плута","плуте","плуту","плуты","плыви","плыву","плывя","плыла","плыли","плыло","плыть","плюем","плюет","плюну","плюнь","плюса","плюсе","плюсу","плюсы","плюха","плюхе","плюхи","плюху","плюша","плюше","плюшу","плюща","плюще","плющи","плющу","пляжа","пляже","пляжи","пляса","плясе","плясу","пляши","пляшу","пнешь","пнула","пнули","пнуло","пнуть","пнями","по-ее","по-за","по-их","побаг","побег","побед","побеж","побер","побив","побил","побит","побла","побле","побои","побой","побор","побра","побыв","побыл","побыт","побью","повал","повар","повед","повеж","повез","повел","повем","повен","повер","повес","повет","повея","повид","повис","повод","повоз","повор","повре","повто","повык","повыш","повял","поган","погас","погиб","погло","погля","погни","погну","погов","погод","погон","погре","погро","погру","погуб","подад","подал","подам","подан","подар","подат","подах","подач","подаю","подби","подбо","подва","подве","подви","подвы","подго","подде","подел","подер","подий","подин","подия","подкр","подла","подле","подли","подло","подлы","подме","подмо","подмы","подне","подни","подно","подня","подоб","подов","подог","подож","подоз","подои","подол","подом","подох","подош","подпи","подро","подря","подсл","подсм","подст","подта","подтв","подув","подуй","подул","подум","подую","подхв","подхо","подче","подчи","поеду","поезд","поезж","поела","поели","поело","поена","поено","пожав","пожар","пожат","пожел","пожив","пожил","пожим","пожир","пожми","пожму","пожну","пожня","пожог","пожру","пожуй","пожух","пожую","позаб","позав","позад","позем","позер","позна","позов","позой","позол","позор","позыв","поила","поили","поило","поиск","пойде","пойка","пойла","пойле","пойло","пойлу","пойма","пойме","пойми","поймы","пойте","покаж","показ","покат","покач","покер","покид","покло","покое","покои","покой","покол","покон","покор","покос","покоя","покра","покри","покры","покуп","покус","полаг","полай","полам","полах","полаю","полая","полба","полбе","полго","полег","полез","полек","полен","полет","ползи","ползу","ползш","ползя","полив","полик","полил","полин","полип","полир","полис","полит","полиц","полка","полке","полку","полна","полне","полни","полно","полну","полны","полог","полое","полож","полоз","полой","полок","полол","полом","полон","полос","полот","полто","полть","полуг","полуз","полук","полун","полус","получ","полуш","полую","полча","полые","полый","полых","польз","польш","полью","полюб","полюс","поляк","полям","полян","полях","помад","помал","помел","помер","помес","помет","помех","помеш","помещ","помил","помин","помир","помни","помож","помои","помол","помор","помоч","помощ","помпа","помпе","помпу","помпы","помре","помри","помру","помуч","помчу","помыв","помыл","помыт","помыш","помыю","помяв","помял","помян","помят","понад","понга","понге","понгу","понев","понед","понес","поник","поним","понос","понош","понра","понур","пончо","понюх","поняв","понял","понят","пооди","поори","поощр","попав","попад","попал","попам","попас","попах","попев","попел","попер","попеч","попив","попик","попил","попит","попка","попке","попки","попку","попла","попов","попод","попои","попой","попок","попом","попон","попро","попру","попса","попул","попью","пораж","пораз","порви","порву","порее","порез","порем","порет","пореч","пореш","порея","порка","порке","порки","порку","порог","пород","пороз","порой","порок","порол","порос","порот","порох","пороч","порск","порта","порте","порти","портн","порто","портр","порту","порты","порть","портя","поруч","порфи","порхн","порци","порча","порче","порчи","порчу","порыв","порыл","посад","посвя","посев","посек","посел","посет","посещ","посея","посид","поска","поско","посла","после","посло","послу","послы","посля","посме","посмо","посов","посол","посох","поспе","поспи","посре","поссо","поста","посте","посто","посул","посыл","посяг","потам","потас","потах","поташ","потво","потек","потел","потер","потех","потея","потир","потов","поток","потол","потом","потон","потоп","потор","потре","потри","потро","потру","потря","потуг","потуп","потух","потяг","потян","поуже","поучу","похва","поход","похож","похор","похул","поцел","почал","почат","почва","почве","почву","почвы","почек","почел","почем","почер","почет","почив","почий","почил","почин","почию","почка","почки","почку","почла","почли","почло","почта","почте","почти","почтм","почто","почту","почты","почтя","почув","почуй","почую","почуя","пошат","пошел","пошиб","пошив","пошил","пошит","пошла","пошли","пошло","пошлы","пошлю","пошто","пошты","пошью","пощад","пощеч","пощуп","поэма","поэме","поэму","поэмы","поэта","поэте","поэту","поэты","появл","пояса","поясе","поясн","поясу","пояти","права","правд","праве","прави","право","праву","правь","правя","прага","праги","прагу","празд","прайд","прайс","праха","прахе","прахи","праху","праща","праще","пращи","пращу","пребл","пребы","прево","преда","предв","предз","предл","предм","предо","предп","предс","преду","предч","преем","преет","прежд","прежн","прези","презр","преим","прейс","прекр","прела","преле","прели","прело","прель","прелю","прене","преос","препо","препр","препя","прерв","пресл","пресп","пресс","прест","претр","преть","преув","преуд","прешь","приба","прибе","прибл","прибо","прибу","прибы","прибь","прива","приве","привл","привс","привы","привя","пригл","пригн","приго","прида","придв","приде","приди","придт","приду","придя","приед","приез","прием","приех","прижа","приза","призм","призн","призу","призы","приид","приис","прика","прики","прикл","прико","прикр","приле","прили","прило","приль","приля","прима","приме","прими","приму","примы","прина","прине","прини","прино","прину","принц","приня","приоб","приор","приос","припа","припо","приро","присе","приск","присл","присм","присн","прист","прису","присы","прися","притв","прито","притч","притя","приуз","прихо","прице","прича","приче","причи","причт","прише","пришл","прият","проба","пробо","прова","прове","прови","прово","прогл","прогн","прого","прогр","прогу","прода","продо","проев","проел","проем","проеш","прожи","проза","прозе","прозр","прозу","прозы","проиг","произ","проис","пройд","прока","проке","прокл","проко","прокр","проку","проле","проло","промо","промы","проне","прони","пропа","пропе","пропи","пропо","пропс","пропу","проро","проса","просв","просе","проси","просм","просн","просо","просп","прост","прось","просю","прося","проте","проти","прото","протя","проул","проф.","профи","прохл","прохо","проце","проча","проче","прочи","прочт","прочу","прочь","проше","прошл","прошу","проща","проще","прощу","прояв","пруда","пруде","пруди","пруду","пруды","прудя","пруса","прусе","прусс","прусу","прусь","прута","пруте","пруту","пруты","пруша","прыга","прыгн","прыти","прыть","прыща","прыще","прыщи","прыщу","пряди","пряду","прядь","пряжа","пряже","пряжи","пряла","пряли","пряло","пряма","пряме","прямо","прямы","пряно","пряну","прята","пряха","пряхе","пряхи","пряху","пряча","прячу","прячь","псами","псаре","псари","псарь","псарю","псаря","псина","псине","псину","психа","психе","психи","психу","псица","птаха","птахе","птахи","птаху","птенц","птица","птице","птицу","птицы","птичк","птичь","пуаза","пуазе","пуант","публи","пугае","пугай","пугал","пуган","пугач","пугаю","пугая","пугли","пугни","пугну","пугов","пудам","пудах","пудел","пудик","пудов","пудом","пудра","пудри","пудры","пудрю","пудря","пузан","пузат","пузач","пузом","пукля","пукну","пуком","пулам","пулах","пулек","пулов","пулом","пульс","пульт","пулям","пулях","пумам","пумах","пумой","пункт","пунша","пунше","пуншу","пуньк","пупка","пупке","пупки","пупку","пупок","пупом","пупса","пупсе","пупсу","пупсы","пурга","пурге","пурги","пурин","пурка","пурке","пурку","пусто","пусты","пусть","пустя","путай","путал","путам","путан","путах","путая","путем","путец","путло","путля","путно","путрю","путти","путча","путче","путчи","путчу","путям","путях","пуфик","пуфов","пуфом","пухла","пухли","пухло","пухни","пухну","пухом","пучат","пучил","пучим","пучит","пучка","пучки","пучко","пучку","пучок","пушат","пушек","пушил","пушим","пушит","пушка","пушке","пушки","пушку","пушок","пушту","пущай","пущам","пущах","пущаю","пущая","пущее","пущем","пущен","пущие","пущий","пущим","пущих","пущую","пхнем","пхнет","пхнув","пхнул","пхнут","пчела","пчеле","пчелу","пчелы","пшена","пшене","пшени","пшено","пшену","пшика","пшике","пшику","пыжам","пыжах","пыжик","пыжом","пылав","пылай","пылал","пылаю","пылая","пыле-","пылен","пылил","пылим","пылин","пылит","пылка","пылки","пылко","пылок","пылом","пылче","пыльн","пылью","пылят","пырее","пырея","пырни","пырну","пытае","пытай","пытал","пытан","пытая","пытка","пытке","пытки","пытку","пытли","пыток","пыхал","пыхну","пыхти","пыхтя","пыхчу","пышат","пышек","пышем","пышен","пышет","пышка","пышке","пышки","пышку","пышна","пышно","пышны","пышут","пьеза","пьеро","пьеру","пьеса","пьесе","пьесу","пьесы","пьешь","пьюсь","пьяна","пьяни","пьяно","пьяну","пьянч","пьяны","пэров","пэром","пядью","пядям","пядях","пялец","пялил","пялим","пялит","пялка","пялке","пялки","пялку","пялок","пялят","пясть","пятак","пятам","пятах","пятач","пятая","пятен","пятид","пятил","пятим","пятин","пятип","пятит","пятка","пятке","пятки","пятку","пятна","пятне","пятно","пятну","пятог","пятое","пятой","пяток","пятом","пятую","пятые","пятый","пятых","пятьд","пятью","пятят","рабам","рабат","рабах","рабий","рабин","рабов","рабой","рабом","работ","рабоч","рабье","рабьи","рабью","рабья","равен","равна","равно","радар","радел","радея","раджа","радий","радио","радию","радия","радон","радос","радуг","радуе","радуй","радуш","радую","радуя","ражая","ражее","ражем","ражие","ражий","ражим","ражих","ражую","разбо","разбу","разве","разви","разго","разда","разде","разди","раздо","раздр","разду","разжа","разик","разил","разим","разин","разит","разка","разке","разки","разку","разли","разлу","разма","разме","размы","размя","разни","разно","разны","разоб","разов","разой","разок","разом","разор","разоч","разош","разра","разре","разру","разры","разув","разул","разум","разую","разъе","разъя","разыс","разят","раина","раиса","раисы","райка","райку","район","райте","райяк","ракет","ракит","ракля","ракой","раком","ракун","ракша","ракше","ракши","ракшу","ралли","рамам","рамах","рамир","рамка","рамке","рамки","рамку","рамлэ","рамно","рамой","рамок","рампа","рампе","рампу","рампы","ранам","ранах","ранга","ранге","ранги","рангу","ранее","ранен","ранет","ранец","ранив","ранил","раним","ранит","ранка","ранке","ранки","ранку","ранне","ранни","раной","ранок","ранта","ранте","ранту","ранты","ранца","ранце","ранцу","ранцы","ранчо","раньш","ранью","ранят","рапид","рапир","рапой","рапса","рапсе","рапсу","расам","расах","расее","расин","раска","раско","раскр","расой","распа","распи","распл","распо","распр","распу","расса","рассв","рассе","расск","рассм","рассп","расст","рассу","рассч","рассы","расте","расто","расхо","расче","ратаз","ратай","ратин","ратуй","ратуш","ратую","ратуя","ратью","ратям","ратях","раунд","раута","рауте","рауту","рауты","рахат","рахис","рахит","рахум","рацея","раций","рацию","рация","рачий","рачка","рачки","рачку","рачок","рачье","рачьи","рачью","рачья","рвала","рвали","рвало","рвами","рвани","рвану","рвань","рваче","рвачу","рвени","рвешь","рвота","рвоте","рвоту","рвоты","рвусь","рдеет","рдела","рдели","рдело","рдест","рдеть","реакц","реала","реале","реалу","реалы","ребен","ребер","ребра","ребре","ребро","ребру","ребус","ребят","ревел","ревем","ревет","ревеш","ревиз","ревма","ревмя","ревне","ревно","ревну","револ","ревом","ревун","ревут","регат","регби","регги","регия","регул","редак","редан","редек","редел","редея","редис","редка","редок","редут","реешь","режем","режет","режим","режут","резак","резал","резвы","резец","резит","резка","резне","резни","резню","резня","резов","резок","резол","резом","резон","резул","резус","резца","резце","резцу","резцы","резче","резьб","резью","резям","резях","рейда","рейде","рейду","рейды","рейка","рейки","рейку","рейне","рейса","рейсе","рейсу","рейсы","рейха","рейхе","рейху","рекой","реком","рекут","религ","релиз","релит","рельс","ремез","ремиз","ремне","ремни","ремню","ремня","ренет","рений","ренин","рению","рения","рента","ренте","ренту","ренты","ренца","ренье","репам","репах","репер","репет","репка","репке","репки","репку","репой","репок","репор","репут","репье","репьи","репью","репья","ресно","ресто","ретив","ретро","ретуз","речам","речах","речек","речка","речки","речку","речью","решай","решал","решат","решаю","решая","решен","решет","решив","решил","решим","решит","решка","решке","решки","решку","реяла","реяли","реяло","реями","реять","ржаво","ржавь","ржала","ржали","ржало","ржами","ржешь","риала","риале","риалу","риалы","ригам","ригах","ригой","рижан","рикша","рикше","рикши","рикшу","рингу","ринит","ринка","рипса","рисом","рисуй","рисую","рисуя","ритма","ритме","ритму","ритмы","ритор","рифее","рифея","рифли","рифма","рифме","рифму","рифмы","рифов","рифом","рифта","рифте","рифту","рифты","рихой","рицин","ришар","ришта","рлица","роали","робам","робах","робел","робея","робил","робка","робки","робко","робой","робок","робос","робот","робче","робят","ровен","ровик","ровна","ровне","ровно","ровню","ровня","рогам","роган","рогат","рогах","рогач","рогов","рогож","рогоз","рогом","родам","родан","родах","родео","родив","родий","родил","родим","родин","родит","родич","родию","родия","родна","родне","родни","родно","родны","родню","родня","родов","родом","родон","родст","родьк","родят","рожам","рожах","рожаю","рожая","рожек","рожиц","рожка","рожке","рожки","рожку","рожна","рожок","рожон","рожью","розги","розни","розог","розой","розыс","роила","роили","роило","ройба","ройте","рокер","роком","рокот","ролик","ролла","ролью","ролям","ролях","роман","ромаш","ромба","ромбе","ромбу","ромбы","ромео","рондо","ронжа","роняй","ронял","роняю","ропак","ропот","ропща","ропщи","ропщу","росам","росах","росин","роско","росла","росли","росло","рослы","росно","росой","росси","россо","роста","росте","росто","росче","ротам","ротах","ротик","ротна","ротны","ротой","роток","ротон","ротор","ротши","рохле","рохли","рохлю","рохля","рошую","рощам","рощах","рощиц","роюсь","рояле","рояли","рояль","роялю","рояля","роями","роясь","ртами","ртути","ртуть","рубаи","рубай","рубак","рубал","рубах","рубаш","рубаю","рубая","рубеж","рубец","рубил","рубим","рубин","рубит","рубищ","рубка","рубке","рубки","рубку","рубле","рубли","рубль","рублю","рубля","рубок","рубца","рубце","рубцу","рубцы","рубят","ругае","ругай","ругал","ругат","ругаю","ругая","ругмя","ругне","ругни","ругну","ругню","ругня","рудам","рудах","рудни","рудню","рудой","рудом","рудый","рудяк","ружан","ружом","ружье","ружью","ружья","руина","руине","руину","рукав","рукой","рукоп","рулад","рулек","рулем","рулет","рулил","рулим","рулит","рулон","рулям","рулят","рулях","румба","румбе","румбу","румбы","румын","румян","рунам","рунах","рунет","рунец","руном","рунца","рунце","рунцу","рунцы","рупий","рупию","рупия","рупор","русак","русая","русел","русин","русла","русле","русло","руслу","русое","русой","русом","русск","руссо","руста","русую","русые","русый","русых","русью","рутам","рутах","рутил","рутин","рутой","руффо","рухни","рухну","ручек","ручищ","ручка","ручки","ручку","ручни","ручье","ручьи","ручью","ручья","рушат","рушил","рушим","рушит","рушни","рыбак","рыбам","рыбах","рыбец","рыбий","рыбин","рыбиц","рыбищ","рыбка","рыбке","рыбки","рыбку","рыбно","рыбой","рыбок","рыбол","рыбье","рыбьи","рыбью","рыбья","рывка","рыгай","рыгал","рыгаю","рыгая","рыгну","рыдал","рыдан","рыдаю","рыдая","рыжая","рыжее","рыжем","рыжен","рыжие","рыжий","рыжик","рыжим","рыжих","рыжую","рыкай","рыкаю","рыкая","рыкни","рыкну","рыком","рылам","рылах","рылец","рылом","рылся","рымом","рында","рынде","рынду","рынды","рынка","рынке","рынки","рынку","рынок","рыноч","рысак","рысий","рысих","рыска","рыске","рыску","рысца","рысье","рысьи","рысью","рысья","рысям","рысят","рысях","рытая","рытое","рытой","рытом","рытую","рытые","рытый","рытых","рытье","рытью","рытья","рыхла","рыхли","рыхло","рыхлы","рыхлю","рыхля","рыцар","рычаг","рычал","рычат","рычим","рычит","рыщем","рыщет","рыщут","рьяна","рьяно","рьяны","рэкет","рэлее","рэлея","рюмка","рюмке","рюмки","рюмку","рюмок","рюхам","рюхах","рюхой","рюшам","рюшах","рюшем","рюшка","рябая","рябил","рябим","рябин","рябит","рябки","ряблю","рябое","рябой","рябок","рябом","рябух","рябую","рябые","рябый","рябых","рябью","рябят","рядам","рядах","ряден","рядил","рядим","рядит","рядка","рядке","рядно","рядов","рядок","рядом","рядят","рясам","рясой","ряшка","ряшке","ряшки","ряшку","с.-х.","саади","саами","сабан","сабза","сабле","сабли","саблю","сабля","сабур","саван","савва","савву","савел","савич","савка","савки","савла","сагам","саган","сагах","сагиб","сагой","садам","садах","саджа","садик","садил","садим","садис","садит","садка","садке","садня","садов","садок","садом","садче","садят","сажай","сажал","сажаю","сажая","сажен","сазан","саиса","сайга","сайге","сайги","сайгу","сайда","сайде","сайду","сайды","сайка","сайки","сайку","сайра","сайре","сайру","сайры","сайта","сайте","сайту","сайты","саква","сакле","сакли","саклю","сакля","саком","саксы","салаг","салак","салат","сален","салка","салки","салок","салол","салом","салон","салоп","салун","салфе","саман","самая","самба","самбе","самбо","самбу","самбы","самец","самим","самих","самка","самке","самки","самку","самог","самое","самой","самок","самол","самом","самон","самсо","самум","самца","самце","самцу","самцы","самые","самый","самых","санам","санах","санда","санки","санкт","санно","санок","санта","саням","санях","сапер","сапка","сапог","сапой","сапом","сапун","сарае","сараи","сарай","саран","сараю","сарая","сарда","сарде","саржа","сарже","саржи","сарос","сарра","сарре","сарыч","сатин","сатир","сауна","сауне","сахар","сахиб","сачка","сачки","сачку","сачок","сашка","сашке","сашки","сашку","сбавк","сбавь","сбеги","сбегу","сбежа","сбере","сбива","сбила","сбили","сбило","сбита","сбито","сбоев","сбоем","сбоил","сбоим","сбоит","сбоку","сбора","сборе","сбоям","сбоят","сбоях","сбрас","сбред","сбрив","сбрил","сбрит","сброд","сброс","сбруе","сбруи","сбруй","сбрую","сбруя","сбуде","сбуду","сбыла","сбыли","сбыло","сбыта","сбыте","сбыто","сбыту","сбыты","сбыть","свадь","свази","свали","свалю","свана","сване","свара","сваре","свари","свару","свары","сварю","свата","свате","свато","свату","сваха","свахе","свахи","сваху","сваям","сваях","сведу","сведя","свеем","свежа","свеже","свежи","свежо","свези","свезт","свезу","свезя","свекл","свекр","свела","свели","свело","сверг","сверк","сверл","сверн","сверх","сверь","сверю","свест","свесь","света","свети","светл","свето","светс","светя","свеча","свече","свечи","свечк","свечо","свещи","свида","свиде","свидр","свила","свили","свило","свиль","свинг","свини","свинь","свист","свита","свито","свичи","свища","свобо","свово","свода","своди","сводя","своег","своем","своея","свози","своим","своих","свойс","свора","своре","свояк","свыше","свяжи","связа","связе","связи","связь","свята","святе","святи","свято","святы","свячу","свяще","сгиба","сгибе","сгибу","сгибы","сгину","сгинь","сглаз","сгнив","сгнил","сгнию","сгнои","сгона","сгоне","сгони","сгону","сгоню","сгори","сгреб","сгруб","сгрыз","сгуби","сгущу","сдави","сдает","сдала","сдали","сдало","сдана","сдаст","сдаче","сдачу","сдашь","сдвиг","сдела","сдерж","сдерн","сдеру","сдоба","сдобн","сдоен","сдуем","сдует","сдула","сдули","сдуло","сдуру","сдута","сдуто","сдуты","сдуть","сеанс","севак","севас","север","севец","севка","севом","севши","сегод","сегюр","седал","седан","седая","седел","седея","седин","седла","седле","седло","седлу","седми","седмь","седое","седой","седок","седом","седую","седые","седых","седьм","сеешь","сейму","сейте","сейфа","секач","секир","секла","секли","секло","секса","сексе","секст","сексу","секта","секте","секту","секты","секун","секут","селам","селах","селен","селил","селим","селит","селиф","селом","селям","селян","селят","семга","семге","семги","семгу","семен","семид","семик","семин","семит","семна","семой","семья","семян","сенаж","сенат","сенец","сенна","сенне","сенну","сенны","сеном","сент.","сенца","сенцо","сенцы","сенью","сеням","сенях","сепий","сепию","сепия","серая","серба","сербе","сербу","сербы","серге","серде","серди","сердц","сердя","сереб","серег","серед","серее","серел","серея","серий","серин","серию","серия","серка","серко","серна","серне","серну","серны","серое","серой","сером","серпа","серпе","серпу","серпы","серсо","серум","серую","серые","серый","серых","серьг","серье","серяк","сестр","сесть","сетам","сетах","сетка","сетке","сетки","сетку","сетов","сеток","сетом","сетуй","сетую","сетуя","сетью","сетям","сетях","сечем","сечен","сечет","сечка","сечки","сечку","сечью","сеяла","сеяли","сеяло","сеяна","сеяно","сеяны","сеять","сжала","сжали","сжало","сжарю","сжата","сжато","сжечь","сжила","сжили","сжило","сжима","сжуем","сжует","сзади","сзаду","сибир","сиваш","сивер","сивка","сивое","сивок","сивом","сивуч","сивую","сивые","сивый","сивых","сигай","сигал","сигам","сигар","сигах","сигаю","сигая","сигма","сигме","сигов","сигом","сидев","сидел","сидет","сидим","сидит","сидка","сидмя","сидок","сидон","сидор","сидра","сидры","сидят","сидящ","сиена","сижок","сизая","сизиф","сизоб","сизое","сизой","сизом","сизую","сизые","сизый","сизых","сизяк","сийес","сикоз","сикха","сикхе","сикху","силам","силан","силах","силач","силен","силил","силин","силка","силке","силки","силку","силой","силок","силом","силон","силос","силур","сильн","сильф","симка","симке","симки","симку","симок","симон","симпа","синае","синап","сингл","синдх","синдя","синее","синек","синел","синем","синен","синец","синея","синие","синий","синил","синим","синит","синих","синиц","синод","синус","синью","синюю","синяк","синят","синяя","сионе","сипае","сипаи","сипай","сипаю","сипая","сипел","сипим","сипит","сипла","сипли","сипло","сиплы","сиплю","сипну","сипят","сирая","сирен","сирин","сирию","сирия","сирое","сирой","сиром","сироп","сирот","сирую","сирые","сирый","сирых","сисек","систр","сисям","сисях","ситам","ситар","ситах","ситец","ситом","ситро","ситху","ситца","ситце","ситцу","ситцы","сифон","сичас","сияем","сияет","сияла","сияли","сияло","сияте","сиять","сияющ","скаже","скажи","сказа","сказе","сказк","скаку","скала","скале","скали","скало","скалу","скалы","скаль","скалю","скаля","скань","скарб","скарн","ската","скате","скати","скату","скаут","скаче","скачк","скачу","сквер","сквид","сквоз","скеба","скебе","скебу","скебы","скейт","скетч","скибы","скида","скиде","скиду","скина","скине","скину","скинь","скипа","скипе","скипу","скипы","скирд","скита","скифа","скифе","скифу","скифы","склад","склеп","склиз","склок","склон","склюю","склян","скоба","ского","скоки","скола","сколе","сколу","сколы","сколь","сколю","сконф","скопа","скопе","скопи","скопо","скопу","скора","скоре","скорм","скоро","скорч","скоса","скосе","скоси","скосы","скота","скоте","скотт","скоту","скотч","скоты","скошу","скощу","скрап","скреб","скреп","скрес","скрип","скрои","скрой","скром","скрыв","скрыл","скрып","скрыт","скряг","скудо","скуем","скует","скука","скуке","скуки","скуку","скула","скуле","скули","скулу","скулы","скулю","скуля","скунс","скупа","скупи","скупо","скупы","скури","скучн","скушу","слаба","слабо","слабы","слава","славе","славн","славу","славь","славя","слага","слада","сладк","сладо","сладу","сладь","слазь","слазя","слайд","слала","слали","слало","слань","слаще","слева","слега","слеге","слеги","слегк","слегу","следа","следо","следс","следу","следы","следя","слеза","слезе","слези","слезу","слезы","слезь","сленг","слепа","слепи","слепо","слепы","слепя","слета","слети","слеты","слечь","слива","сливе","сливы","сливя","слизь","слила","слили","слило","слита","слито","сличи","сличу","слишк","слова","слове","слови","словн","слово","слову","слога","слоге","слоги","слогу","слоев","слоек","слоем","слоен","сложа","сложи","сложн","слома","сломе","сломи","слому","сломя","слона","слоне","слону","слоны","слота","слоте","слоту","слоты","слоям","слоях","слуга","слуге","слуги","слугу","служа","служб","служе","служи","слупи","слуха","слухе","слухи","слуху","случа","случу","слуша","слыву","слыла","слыли","слыло","слыть","слыха","слыша","слыши","слышн","слышу","слышь","слюда","слюде","слюду","слюды","слюна","слюне","слюни","слюнк","слюно","слюну","слюны","слюню","слюня","сляба","слябе","слябу","слягу","смажь","смазн","смазь","смайл","смака","смаке","смаку","смалу","смани","сманю","смеем","смеет","смекн","смела","смели","смело","смелы","смель","смелю","смена","смене","смени","смену","смены","сменю","смерд","смерк","смерт","смерч","смерь","смерю","смеси","смесь","смета","смети","сметы","сметь","смеха","смехе","смехи","смеху","смеша","смешн","смеюс","смеял","смеяс","смеят","смире","смири","смирн","смирю","смита","смога","смоге","смогу","смоем","смоет","смокв","смола","смоле","смоли","смолк","смолу","смолы","смоль","смолю","смоля","смори","сморщ","смотр","смоче","смочи","смочу","смочь","смрад","смугл","смуро","смута","смуте","смути","смутн","смуту","смуты","смуща","смуще","смущу","смште","смыва","смыве","смыву","смывы","смыла","смыли","смыло","смысл","смыта","смыто","смыты","смыть","смычо","смягч","смяла","смяли","смяло","смята","смяте","смято","смяты","смять","снадо","снами","снаст","снега","снеге","снеги","снего","снегу","снедь","снеси","снесл","снесу","снеся","снизу","снизь","снили","снима","сними","сниму","сноба","снова","снопа","снопе","снопу","снопы","сноса","сносе","сноси","сносы","сноха","снохе","снохи","сноху","сношу","снуем","снует","снуть","сныть","снюсь","сняла","сняли","сняло","снясь","снята","снято","сняту","сняты","снять","собак","собер","собес","собир","соблю","собой","собол","собор","собра","собст","событ","собью","совал","совам","соват","совах","совел","совер","совес","совет","совея","совий","совик","совка","совок","совре","соври","совру","совсе","совью","совят","согды","согла","согни","согну","содер","содит","содой","содом","сожже","сожми","сожму","сожра","сожри","сожру","созда","созер","созид","созна","созыв","сойга","сойде","сойка","сойма","сойот","сокол","соком","сокра","сокро","солга","солгу","солда","солен","солея","солил","солим","солит","солка","солке","солку","солне","солнц","солод","солом","солон","солью","солям","соляр","солят","солях","сомах","сомне","сомни","сомов","сомон","сомры","сомят","сонар","сонат","сонет","сонеч","сонин","сонма","сонме","сонму","соням","сонях","сообр","сообщ","соотв","сопел","сопер","сопим","сопит","сопка","сопке","сопки","сопку","сопла","сопле","сопли","сопло","соплу","соплю","сопля","сопок","сопор","сопро","сопру","сопун","сопят","сорва","сорви","сорву","сорго","сорил","сорим","сорит","сорно","сорок","сором","сорта","сорте","сорто","сорту","сортэ","сорус","сорят","сосав","сосал","сосед","сосем","сосен","сосне","сосну","сосны","сосок","соста","состо","сосуд","сосун","сосут","сосца","сосце","сосцу","сосцы","сосчи","сотам","сотах","сотая","сотен","сотка","сотке","сотки","сотку","сотне","сотни","сотню","сотня","сотов","сотое","сотой","соток","сотом","сотри","сотру","сотря","сотую","сотые","сотый","сотых","соуса","соусе","соусо","соусу","соусы","софит","софию","софия","софой","софта","софте","софту","софты","софье","софьи","софью","софья","сохам","сохах","сохла","сохли","сохло","сохне","сохни","сохну","сохой","сохра","социа","сочен","сочла","сочли","сочло","сочна","сочне","сочни","сочно","сочны","сочню","сочня","сочок","сочти","сочту","сочтя","сошек","сошел","сошка","сошке","сошки","сошку","сошла","сошли","сошло","сошлю","сошье","сошью","союза","союзе","союзу","союзы","спада","спаде","спади","спаду","спады","спаев","спазм","спала","спали","спало","спалю","спама","спаса","спасе","спаси","спасо","спаст","спасу","спати","спаяв","спаяй","спаял","спаям","спаян","спаях","спаяю","спеет","спеки","спеку","спела","спели","спело","сперв","сперт","спеси","спесь","спета","спето","спеты","спеть","спеху","спец.","спеца","спеце","специ","спецу","спецы","спечь","спеша","спили","спилю","спина","спине","спину","спира","спири","спиро","спирт","спирю","спиря","списа","списк","спица","спице","спицу","спицы","спича","спиче","спичи","спичк","спичу","спиши","спишу","спишь","сплав","сплел","сплес","сплин","сплит","сплош","сплыл","сплят","споем","споен","споет","споив","споил","споим","споит","споко","сполз","спора","споре","спори","споро","спорт","спорь","споря","спосо","спочи","споят","справ","спраш","спрос","спрош","спрут","спрял","спрят","спуда","спуде","спуду","спурт","спуск","спуст","спуща","спущу","спышь","спяти","спять","спячу","спящи","сравн","сраже","срази","срама","сраму","срамя","сраск","сращу","среда","средн","средс","среду","среды","средь","срежь","среза","срезе","срезу","срезы","сроем","сроет","срока","сроке","сроки","сроко","сроку","срост","сруба","срубе","сруби","срубу","срубы","срыва","срыве","срыву","срывы","срыла","срыли","срыло","срыта","срыто","срыты","срыть","сряду","ссади","ссебя","ссечь","ссора","ссоре","ссори","ссорь","ссоря","ссуда","ссуде","ссуди","ссуду","ссуды","ссыла","ссыпь","става","стави","ставр","ставш","ставь","ставя","стада","стаде","стадо","стаду","стает","стажа","стаже","стажи","стаза","стазе","стака","стала","стали","стало","сталы","сталь","сталя","стамб","стами","стана","стане","стани","стано","станс","стану","стань","стара","старе","стари","старо","старт","стару","старц","старч","старш","стары","старь","старю","старя","стати","статс","стащи","стащу","стаяв","стаял","стаям","стаях","ствол","створ","стега","стезе","стези","стезю","стезя","стека","стеке","стеки","стекл","стеку","стела","стеле","стели","стелу","стелы","стель","стелю","стеля","стема","стеме","стему","стемы","стена","стенд","стене","стено","стену","стены","степа","степе","степи","степс","степу","степы","степь","степя","стерв","стерт","стесн","стечь","стигм","стило","стиль","стилю","стиля","стирк","стиха","стихе","стихи","стихо","стиху","стлал","стога","стоге","стоги","стогн","стогу","стоек","стоик","стоил","стоим","стоит","стойл","стойт","стока","стоке","стоки","стокс","стоку","стола","столб","столе","столи","столо","столп","столу","столы","столь","стона","стоне","стони","стону","стоны","стопа","стопе","стопу","стопы","сторе","сторо","стоты","сточи","сточу","стояв","стояк","стоял","стоян","стоят","стоящ","страд","страж","страз","стран","страс","страш","стрек","стрел","стриг","стриж","стрий","строб","строг","строе","строж","строи","строй","строк","строп","строф","строя","струг","струе","струи","струй","струм","струн","струп","струс","струю","струя","стряс","студе","студи","студя","стужа","стуже","стужи","стука","стуке","стуки","стукн","стуку","стула","стуле","стулу","стуль","ступа","ступе","ступи","ступу","ступы","стуса","стуча","стучу","стыда","стыде","стыди","стыдл","стыдн","стыду","стыдя","стыка","стыке","стыки","стыку","стыла","стыли","стыло","стыну","стынь","стырь","стырю","стыть","стяга","стяге","стягу","стяни","стяну","суаре","субал","суббо","сувой","сугуб","судак","судам","судар","судах","судеб","судил","судим","судит","судию","судия","судка","судке","судна","судне","судно","судну","судов","судок","судом","судор","судьб","судье","судьи","судью","судья","судят","суета","суеты","суешь","сужай","сужал","сужаю","сужая","сужде","сужен","сузив","сузил","сузим","сузит","сузят","суйся","суйте","сукин","сукна","сукне","сукно","сукну","сукню","сукой","суком","сукон","сулеи","сулен","сулея","сулил","сулим","сулит","сулое","сулой","сулоя","сулье","сулят","сумас","сумат","сумах","сумев","сумел","сумер","сумет","сумка","сумке","сумки","сумку","сумма","сумме","сумму","суммы","сумни","сумой","сумок","сумра","сунду","сунем","сунет","сунна","сунув","сунул","сунут","суоми","супам","супах","супер","супец","супин","супов","супом","супос","супру","суржа","сурик","сурка","сурке","сурки","сурко","сурку","сурна","суров","сурой","сурок","суроп","сусак","сусек","сусла","сусле","сусло","суслу","сутаж","сутан","сутки","суток","сутра","сутре","сутру","сутры","сутью","сутяг","суфий","суфле","сухая","сухие","сухим","сухих","сухое","сухой","сухом","сухум","сухую","сучат","сучек","сучен","сучий","сучил","сучим","сучит","сучка","сучки","сучку","сучок","сучье","сучьи","сучью","сучья","сушам","сушат","сушах","сушек","сушен","сушил","сушим","сушит","сушка","сушке","сушки","сушку","сушью","сущая","сущее","сущем","сущес","сущие","сущий","сущик","сущим","сущих","сущно","сущую","суюсь","суясь","сфена","сфене","сфену","сфера","сфере","сферу","сферы","схват","схема","схеме","схему","схемы","схима","схиме","схимн","схиму","схимы","схитр","схода","сходи","сходя","схожа","схоже","схожи","схоро","сцена","сцене","сцену","сцены","сцепи","сцепу","сцепы","сцинк","счаст","счеса","счесе","счесу","счета","счеты","счита","сшибл","сшибу","сшила","сшили","сшило","сшита","сшито","съеда","съеду","съезд","съела","съели","съело","съема","съеме","съему","съест","съеха","съешь","сынам","сынах","сынка","сынке","сынки","сынку","сынок","сыном","сыпал","сыпет","сыпец","сыплю","сыпля","сыпуч","сыпью","сыпям","сыпят","сыпях","сырая","сырее","сырел","сырец","сырка","сырке","сырки","сырку","сыров","сырое","сырой","сырок","сыром","сырть","сырую","сырца","сырые","сырых","сырье","сырью","сырья","сыска","сыске","сыску","сысой","сытая","сытен","сытна","сытно","сытны","сытог","сытое","сытой","сытом","сытую","сытые","сытый","сытых","сытью","сычам","сычах","сычом","сычуг","сыщем","сыщет","сыщик","сыщиц","сыщут","сэров","сэром","сюжет","сюита","сюрпр","сюрту","сядем","сядет","сядут","сядьт","сяжки","сяжок","сякая","сякие","сяким","сяких","сякое","сякой","сяком","сякую","табак","табес","табл.","табло","табор","табун","табха","табхе","табхи","тавот","тавра","тавре","таври","тавро","тавру","тавры","тагал","таган","таешь","тазом","таила","таили","таило","тайга","тайге","тайги","тайгу","тайко","тайма","тайме","тайму","таймы","тайна","тайне","тайни","тайно","тайну","тайны","тайте","так-с","такая","также","такие","такий","таким","таких","таког","такое","такой","таком","такса","таксе","такси","таксу","таксы","такта","такте","такту","такты","такую","такыр","талан","талая","талер","талес","талие","талий","талик","талиф","талию","талия","талое","талой","талом","талон","талую","талые","талый","талых","талыш","талье","тальи","тальк","талью","талья","талям","талях","тамга","тамге","тамги","тамгу","тамер","тамил","тамто","танго","танец","танин","танка","танке","танки","танку","танта","танти","танто","танца","танце","танцу","танцы","тапер","тапир","тапка","тапке","тапки","тапку","тапок","таран","тарас","тариф","тасуя","татам","татар","татах","татем","татка","татов","татом","татям","татях","тафта","тафте","тафту","тафты","тафья","тахин","тахта","тахте","тахту","тахты","тацет","тацит","тачал","тачаю","тачая","тачек","тачка","тачки","тачку","ташка","ташке","ташки","тащат","тащил","тащим","тащит","таюсь","таяла","таяли","таяло","таясь","таяся","таять","твари","тварь","тваря","тверд","тверж","твери","тверь","твида","твиде","твиду","твина","твине","твину","твист","твиши","твово","твоег","твоем","твоея","твоим","твоих","творе","твори","творя","театр","тевкр","тегам","тегах","тегов","тегом","тезке","тезки","тезок","теизм","теина","теине","теину","теист","текла","текли","текло","текст","текут","текуч","текущ","телам","телах","телег","тележ","телес","телеф","телец","телик","телка","телке","телки","телку","телль","телля","телок","телом","телят","темам","темах","тембр","темен","темна","темне","темни","темно","темну","темны","темню","темня","темой","темпа","темпе","темпу","темпы","темью","тенге","тенек","тенет","тению","тенор","тента","тенте","тенту","тенты","тенью","теням","тенях","тепел","тепер","тепла","тепле","тепло","теплу","теплы","тепля","тереб","терем","терец","терза","терка","терке","терки","терку","терла","терли","терло","терма","терме","терму","термы","терна","терне","терну","терок","терпе","терпи","терпл","терпя","терра","терся","терта","терто","терты","теряй","терял","терят","теряю","теряя","тесак","тесал","тесан","тесен","теска","тесла","тесло","тесна","тесни","тесно","тесны","тесню","тесня","тесок","тесом","теста","тесте","тесть","тестю","тестя","тетив","тетин","тетка","тетке","тетки","тетку","теток","тетра","тетям","тетях","теург","техн.","техно","техпд","течам","течах","течен","течет","течка","течки","течку","течью","тешат","тешем","тешет","тешил","тешим","тешит","тешка","тешут","тещам","тещах","тещин","тиара","тиаре","тиару","тиары","тигле","тигли","тиглю","тигля","тигра","тигре","тигру","тигры","тикай","тикаю","тикая","тиком","тильд","тимин","тимол","тимоф","тимус","тиной","типаж","типам","типах","типец","типик","типич","типов","типом","типун","тирад","тираж","тиран","тиров","тиром","тирса","тирсе","тирсы","тисов","тисом","титан","титек","титла","титле","титло","титлу","титов","титом","титор","титра","титре","титру","титры","титул","тифом","тифон","тихая","тихие","тихий","тихим","тихих","тихое","тихой","тихом","тихон","тихую","тишин","тишью","ткала","ткали","ткало","ткана","ткани","ткань","ткаче","ткачу","ткешь","ткнем","ткнет","ткнув","ткнул","ткнут","тлеем","тлеет","тлела","тлели","тлело","тлена","тлене","тлену","тлеть","тлями","тмина","тмине","тмину","то-се","то-то","тобой","товар","товсь","тогам","тогах","тогда","тогой","тожде","тойон","тойот","токае","токай","токаю","токая","токма","токмо","токмя","током","токуй","токую","токуя","толка","толке","толкн","толку","толок","толом","толоп","толпа","толпе","толпи","толпу","толпы","толст","толче","толчк","толща","толще","толщи","толщу","толщь","тольк","томас","томат","томах","томен","томик","томил","томим","томит","томлю","томна","томно","томны","томов","томят","тонах","тондо","тонее","тонен","тонер","тонет","тоник","тонка","тонки","тонко","тонна","тонне","тонус","тонут","топаз","топай","топал","топаю","топая","топик","топил","топим","топит","топка","топке","топки","топко","топку","топлю","топни","топну","топок","топом","топор","топот","топча","топче","топчи","топчу","топью","топям","топят","топях","торба","торбе","торбу","торбы","торга","торге","торги","торго","торен","торец","торже","торий","торит","торию","тория","торов","тором","торон","тороп","торос","торра","торре","торру","торры","торса","торсе","торсу","торсы","торта","торте","торту","торты","торфа","торфе","торфу","торца","торча","тоста","тосте","тотем","тотча","тохар","точат","точек","точен","точил","точим","точит","точию","точка","точки","точку","точна","точно","точны","точок","тошен","тошна","тошни","тошно","тошны","тощая","тощее","тощем","тощие","тощий","тощим","тощих","тощую","трабы","трава","траве","трави","травк","травм","траво","траву","травя","траги","тради","тракт","трала","трале","тралу","тралы","траль","тралю","траля","трама","транс","транш","трапа","трапе","трапп","трапу","трапы","трасс","траст","трата","трате","трати","трату","тратя","траур","трачу","треба","требе","требо","требу","требы","трево","трезв","трезо","трека","треке","треки","треку","трели","трель","трема","тремя","тренд","трень","трепа","трепе","трепу","треск","трест","тресь","трети","треть","треух","трефа","трефе","трефу","трефы","трешь","треща","трещи","триад","триас","триба","трибе","трибу","трибы","тридц","триер","триех","тризм","трико","трина","триод","трипс","трога","троек","троен","трожь","троил","троим","троит","троих","тройк","троки","тромб","тромп","трона","троне","трону","троны","тронь","тропа","тропе","тропу","тропы","троса","тросе","трост","тросы","трота","троте","троту","трофи","трохи","трояк","троят","труба","трубе","труби","трубк","трубу","трубы","трубя","труда","труде","труди","трудн","трудо","труду","труды","труню","труня","трупа","трупе","трупп","трупу","трупы","труса","трусе","трусу","трусы","трусь","труся","трута","труте","труту","труха","трухе","трухи","труху","трушу","трюка","трюке","трюки","трюку","трюма","трюме","трюмо","трюму","трюмы","трюши","трясе","тряси","трясу","тряся","тубам","тубах","тубой","тубус","тугае","тугаи","тугай","тугаю","тугая","тугие","тугим","тугих","тугое","тугой","тугом","тугун","тугую","тужат","тужил","тужим","тужит","тузим","тузит","тузов","тузом","тукая","туком","тулий","тулию","тулия","тулон","тулуз","тулук","тулуп","тулье","тульи","тулью","тулья","туляк","тумак","туман","тумба","тумбе","тумбу","тумбы","тумор","тунбе","тунга","тунге","тунгу","тунец","туник","тунца","тунце","тунцу","тунцы","тупая","тупее","тупел","тупец","тупея","тупик","тупил","тупим","тупит","тупиц","туплю","тупое","тупой","тупом","тупую","тупые","тупых","тупыш","тупят","турий","турка","турке","турки","турку","турне","турни","турну","туров","турок","туром","туррр","турье","турьи","турью","турья","турят","тускл","тутор","тутти","туфле","туфли","туфлю","туфля","туфов","туфом","туфта","туфте","туфту","туфты","тухла","тухли","тухло","тухну","тучам","тучах","тучек","тучен","тучка","тучки","тучку","тучна","тучно","тучны","тушам","тушат","тушах","тушек","тушем","тушен","тушил","тушим","тушин","тушит","тушка","тушке","тушки","тушку","тушью","туями","тщась","тщесл","тщета","тщеты","тщусь","тыкай","тыкаю","тыкая","тыква","тыкве","тыкву","тыквы","тыком","тылам","тылах","тылов","тылом","тымиш","тынка","тынке","тынки","тынку","тынок","тыном","тырил","тырим","тырит","тырла","тырле","тырло","тырлу","тырса","тырсу","тырят","тысяч","тычем","тычет","тычка","тычки","тычку","тычок","тычут","тьера","тьмой","тьпфу","тэгам","тэгах","тэгов","тэгом","тэкое","тэкой","тэуле","тю-тю","тюбик","тюкаю","тюкая","тюкни","тюкну","тюком","тюлек","тюлем","тюнен","тюнер","тюник","тюрби","тюрем","тюрка","тюрке","тюрки","тюрку","тюрок","тюрьм","тюрюк","тютюн","тютям","тютях","тюфяк","тюхам","тюхах","тюхой","тючка","тючки","тючку","тючок","тябла","тябло","тяблы","тягай","тягал","тягач","тягаю","тягая","тягла","тягло","тягой","тягот","тягуч","тяжам","тяжах","тяжба","тяжбе","тяжбу","тяжбы","тяжек","тяжел","тяжка","тяжки","тяжко","тяжом","тяжче","тямлю","тянем","тянет","тянул","тянут","тяпка","тяпке","тяпки","тяпку","тяпни","тяпну","тяпок","тятек","тятям","тятях","уазик","убавь","убега","убеги","убегу","убежа","убежд","убери","уберу","убива","убийс","убийц","убила","убили","убило","убира","убита","убито","убога","убоги","убого","убоев","убоем","убора","уборе","убоям","убоях","убрав","убрал","убран","убрат","убрел","убрус","убуду","убыла","убыли","убыло","убыль","убыто","убыть","убьем","убьет","уважа","уваже","уважь","увала","увари","уварю","уведу","уведя","увези","увезл","увезт","увезу","увезя","увела","увели","увело","увере","увери","уверо","уверт","уверх","уверь","уверю","уверя","увесь","увеча","увечь","увеша","увида","увиде","увиди","увидя","увила","увили","увило","увита","увито","увлек","увлеч","увода","уводи","уводя","увоза","увозе","увози","увозу","увозя","уволь","уволю","увраж","увьем","увьет","увяла","увяли","увяло","увяну","увянь","угада","угара","угаре","угару","угаси","угашу","углам","углах","углем","углов","углом","углуб","углям","углях","угнав","угнал","угнан","угнах","угова","угово","угода","угоди","угодн","угодь","уголк","уголо","уголь","угона","угоне","угони","угону","угоны","угоню","угори","угорь","угощу","угрем","угрож","угроз","угрюм","угрям","угрят","угрях","удава","удаве","удави","удавл","удаву","удала","удали","удало","удалы","удаль","удалю","удаля","удара","ударе","удари","удару","удары","ударь","ударю","удаче","удачу","удвое","удвой","удела","уделе","удели","уделу","уделы","уделю","удерж","удеру","удиви","удивл","удила","удили","удило","удина","удине","удино","удину","удишь","удобн","удовл","удово","удода","удоев","удоем","удоен","удоям","удоях","удрав","удрал","удруг","удуши","удушу","удэге","уедем","уедет","уедим","уедин","уедут","уедят","уезда","уезде","уезду","уезды","уезжа","уесть","уехав","уехал","ужала","ужали","ужало","ужаль","ужалю","ужами","ужарю","ужаса","ужасе","ужасн","ужасо","ужасу","ужасы","ужата","ужели","ужель","уживч","ужина","ужине","ужину","ужмем","ужмет","ужмут","узами","узбек","узвар","уздам","уздах","уздой","уздцы","узень","узина","узине","узину","узкая","узкие","узкий","узким","узких","узко-","узкое","узкой","узком","узкую","узлам","узлах","узлов","узлом","узнав","узнае","узнай","узнал","узнан","узнат","узнаю","узник","узниц","узора","узоре","узрел","узрет","узрим","узрит","узрят","уйгур","уйдем","уйдет","уйдеш","уйдут","уймем","уймет","уймой","уймут","укает","укаже","укажи","указа","указе","укала","укали","укало","укати","укачу","уклад","уклон","укола","уколе","уколи","уколу","уколы","уколю","укора","укоре","укори","укоро","укоря","укоса","укосе","укосы","украв","украд","украл","украш","укрой","укроп","укрут","укрыв","укрый","укрыл","укрыт","укрюк","уксус","укуса","укусе","укуси","укусу","укусы","укушу","улади","уладь","улана","улане","улара","уларе","улару","улары","улащу","улепе","улета","улизн","улика","улике","улики","улику","улисс","улита","улица","улице","улицу","улицы","уличи","уличу","улова","улове","улови","улову","уловы","уложе","уложи","улуса","улусе","улусу","улуча","улучу","улыба","ульем","ульям","ульях","улюлю","умает","умали","умалю","умами","умани","умащу","умаяв","умаял","умбра","умбре","умбру","умбры","умеем","умеет","умейн","умела","умели","умело","умелы","умень","умере","умерш","умерь","умерю","умета","уметь","умиле","умили","умилю","умира","умная","умнее","умнел","умнем","умнет","умнея","умник","умниц","умное","умнож","умной","умном","умнут","умную","умные","умный","умных","умоем","умоет","умоли","умолк","умолю","умоля","умора","уморе","умори","умрем","умрет","умрут","умчав","умчал","умчат","умчим","умчит","умыла","умыли","умыло","умыта","умыто","умыты","умыть","умяла","умяли","умяло","умята","умято","умяты","умять","унаби","ундер","унеси","унесу","унеся","унзер","униат","униве","униже","унизь","унион","уничт","униям","униях","уноса","уносе","уноси","унося","уношу","унтам","унтах","унтер","унтов","унтом","унций","унцию","унция","уныла","уныло","унылы","уныни","уняла","уняли","уняло","унять","упада","упаде","упади","упаду","упала","упали","упало","упарь","упарю","упаси","упаст","упасу","упеки","упеку","уперт","упечь","упира","уплел","уплыв","уплыл","упоен","упоит","упоко","уполз","уполн","упоми","упора","упоре","упорн","упорс","употр","управ","упраз","упрек","упрем","упрет","упрос","упрот","упруг","упрут","упрям","упущу","упыре","упыри","упырь","упырю","упыря","урале","урана","уране","урвав","урвал","урвем","урвет","урвут","урежь","уреза","урезе","урезу","урема","уреус","урина","урине","урину","уркой","урман","урнам","урнах","урной","урода","урожа","урока","уроке","уроки","уроко","уроку","урона","уроне","урони","урону","уроны","уроню","урчал","урчат","урчим","урчит","урюка","урюке","урюку","усади","усадь","усаже","усажи","усами","усата","усато","усаче","усачу","усвой","усевш","усеем","усеет","усеку","усечь","усеяв","усеял","усеян","усиди","усика","усике","усики","усику","усиле","усили","усиль","усилю","усища","услав","услал","услан","услов","услуг","услыш","усмех","усмеш","усмот","уснем","уснет","уснув","уснул","уснут","успев","успел","успех","успок","устав","устал","устам","устар","устах","устий","устно","устое","устои","устой","устоя","устра","устре","устро","уступ","устье","устью","устья","усыпи","усыпь","утаен","утаив","утаил","утаим","утаит","утаще","утащи","утащу","утаят","утвер","утеку","утере","утери","утерт","утерю","утеря","утеса","утесе","утесу","утесы","утеха","утехе","утехи","утеху","утечь","утеше","утешь","утилю","утиля","утица","утиши","утишу","уткан","уткни","уткну","уткой","утлая","утлое","утлой","утлом","утлую","утлые","утлый","утлых","утоли","утолю","утоми","утони","утону","утопи","утрат","утрем","утрен","утрет","утрой","утром","утрут","утряс","утюга","утюге","утюги","утюгу","утюжа","утюжь","утяни","утяну","утята","ухаба","ухабе","ухабу","ухабы","ухает","ухала","ухали","ухало","ухарь","ухват","ухнем","ухнет","ухнув","ухнул","ухнут","ухода","уходи","уходя","ухожь","уценю","уцепи","участ","учась","учащу","учеба","учебе","учебу","учебы","учена","учено","учену","учены","учеса","учесе","учесу","учета","учила","учили","учило","учини","учиню","учишь","учреж","учтем","учтен","учтет","учтив","учтут","учуем","учует","учусь","учуяв","учуял","учуян","учхоз","ушами","ушаст","ушата","ушате","ушату","ушиба","ушибе","ушибу","ушибы","ушила","ушили","ушило","уширю","ушица","ушице","ушицу","ушицы","ушкан","ушком","ушкуе","ушкуи","ушкуй","ушкую","ушкуя","ушлая","ушлем","ушлет","ушлое","ушлой","ушлом","ушлую","ушлые","ушлый","ушлых","ушная","ушник","ушное","ушной","ушном","ушную","ушные","ушных","ушьем","ушьет","ущеми","ущерб","уютен","уютна","уютно","уютны","уютом","уязви","уязвл","уясни","уясню","фабра","фабрю","фабря","фабул","фавна","фавне","фавну","фавор","фавус","фагам","фагах","фагов","фагом","фагот","фазой","файла","файле","файлу","факсе","факсу","факсы","факта","факте","факти","факто","факту","факты","фалал","фалам","фалах","фалда","фалде","фалду","фалды","фалов","фалом","фальс","фальц","фальш","фамил","фанат","фанга","фанге","фангу","фанер","фанза","фанзе","фанзу","фанзы","фанта","фанте","фанту","фанты","фарад","фарой","фарса","фарсе","фарси","фарсу","фарсы","фарта","фарте","фарту","фарты","фарша","фарше","фасад","фасом","фасон","фасуй","фасую","фасуя","фатам","фатах","фатер","фатой","фатом","фатум","фатюй","фауна","фауне","фауст","фацет","фаций","фацию","фация","фаянс","федор","федос","федот","федра","федьк","фекла","фелон","фельд","фелюг","фенам","фений","фенил","фению","фения","фенол","феном","феням","фенях","ферзе","ферзи","ферзь","ферзю","ферзя","ферма","ферме","ферми","ферму","фермы","ферте","фетва","фетве","фетву","фетвы","фетиш","фетра","фетре","фетру","фетюк","фефер","феями","фиакр","фиата","фиате","фиату","фибра","фибре","фибру","фибры","фигам","фигах","фигли","фигне","фигни","фигню","фигня","фигой","фигур","фидер","фидий","фиест","фижмы","физий","физик","физич","физию","физия","фикса","фиксе","фиксу","фиксы","фикус","филат","филее","филер","филея","филин","филип","филия","филол","филос","фильм","филях","фимоз","финал","финик","финиш","финка","финке","финки","финку","финна","финне","финну","финны","финок","финта","финте","финти","финту","финты","финтя","финчу","фиорд","фирма","фирме","фирму","фирмы","фирна","фирне","фирну","фиска","фиске","фиску","фитам","фитах","фитин","фитой","фифой","фишек","фишка","фишке","фишки","фишку","флага","флаги","флагу","фланг","флане","фланк","флегм","флейт","флейц","флера","флере","флеру","флешь","флиге","флика","флике","флику","флинт","флирт","флокс","флора","флоре","флота","флоте","флотс","флоту","флоты","флюид","флюса","флюсе","флюсу","флюсы","фляга","фляге","фляги","флягу","фобий","фобию","фобия","фойны","фокин","фоком","фокус","фолио","фольг","фомин","фомич","фомка","фомке","фомок","фонар","фонах","фонда","фонде","фонил","фонит","фонят","форда","форде","форел","форма","форме","форму","формы","форой","форос","форса","форсе","форсо","форсу","форта","форте","форто","форту","форты","форум","форшу","фоска","фотам","фотах","фотия","фотка","фотке","фотки","фотку","фото-","фотов","фотог","фоток","фотом","фотон","фофан","фохта","фраер","фраза","фразе","фрака","фраке","фраки","фраку","франк","франт","франц","фрахт","фреза","фрезе","фрезу","фрезы","фрейм","френч","фреон","фридр","фриза","фризу","фризы","фрица","фрице","фрицу","фрицы","фрола","фронт","фрукт","фрунт","фтора","фторе","фу-ты","фугам","фугас","фугах","фугой","фужер","фузеи","фузея","фузию","фузия","фукай","фукаю","фукая","фукни","фукну","фукса","фуксе","фуксу","фукус","фуляр","фунта","фунте","фунту","фунты","фураж","фуран","фурий","фурию","фурия","фурма","фурме","фурму","фурмы","фурой","фурор","фурье","футам","футах","футер","футов","футом","футор","фуфла","фуфле","фуфло","фуфлу","фуэте","фыркн","фыров","фырок","фырча","фырчу","фьорд","фьють","фюйть","фюрер","ха-ха","хабар","хаджа","хадже","хаджи","хаешь","хайла","хайле","хайло","халам","халат","халах","халва","халве","халву","халвы","халда","халет","халиф","халой","халуп","хамам","хамах","хамил","хамим","хамит","хамка","хамке","хамки","хамку","хамлю","хамов","хамок","хамом","хамса","хамсе","хамсу","хамсы","хамье","хамью","хамья","хамят","ханам","ханах","ханжа","ханже","ханжи","ханты","ханум","ханша","хаоса","хаосе","хапай","хапал","хапан","хапаю","хапая","хапни","хапну","хапуг","хапун","харак","харда","харде","харит","харуф","харча","харче","харчи","харчо","харчу","харям","харях","хасид","хатам","хатах","хатка","хатке","хатки","хатку","хатой","хаток","хауса","хаусе","хаусу","хаусы","хафиз","хаяла","хаяли","хаяло","хаять","хвала","хвале","хвали","хвалу","хвалы","хвалю","хваля","хвата","хвате","хвати","хвату","хвачу","хвора","хвори","хворо","хворь","хвост","хвоща","хвоще","хвощи","хвощу","хе-хе","хедер","хедив","хеком","херес","херик","херил","херим","херит","хером","херуг","херят","хетты","хи-хи","хиазм","хибар","хиврю","хивря","хижин","хилая","хилее","хилич","хилое","хилой","хилом","хилус","хилую","хилые","хилый","хилых","хиляк","химер","химик","химию","химия","химус","хинди","хинин","хиной","хинон","хиппи","хирел","хирея","хитам","хитах","хитер","хитин","хитов","хитом","хитон","хитра","хитри","хитро","хитры","хитрю","хитря","хищен","хищна","хищно","хищны","хлада","хладе","хладу","хлама","хламу","хлеба","хлебе","хлебн","хлебо","хлебу","хлебы","хлева","хлеве","хлеву","хлест","хлеще","хлещи","хлопо","хлора","хлоре","хлупь","хлыст","хлыща","хлыще","хлыщи","хлыщу","хльст","хлюст","хляби","хлябь","хмара","хмарь","хмеле","хмель","хмелю","хмеля","хмура","хмурь","хмуря","хмыре","хмыри","хмырь","хмырю","хмыря","хныча","хнычу","хнычь","хо-хо","хоана","хобар","хобби","хобот","ходам","ходах","ходжа","ходик","ходил","ходим","ходит","ходка","ходня","ходов","ходок","ходом","ходун","ходче","ходят","ходяч","хозар","хозяи","хозяй","хокку","холен","холил","холим","холин","холит","холка","холке","холку","холла","холле","холлу","холлы","холма","холме","холму","холмы","холод","холоп","холос","холст","холуе","холуи","холуй","холую","холуя","холят","хомут","хомяк","хорал","хорда","хорде","хорее","хорек","хорем","хорея","хоров","хором","хорон","хорош","хорти","хорям","хорях","хотам","хотах","хотел","хотим","хотит","хотой","хотяй","хотят","хохла","хохле","хохлу","хохлы","хохма","хохме","хохми","хохму","хохмы","хохмя","хохол","хохот","хочем","хочет","хочеш","хощет","хощут","храбр","храма","храмы","храни","хранц","храню","храня","храпа","храпе","храпи","храпу","храпя","хрена","хрене","хрену","хрест","хрипа","хрипе","хрипи","хрипл","хрипу","хрипы","хрипя","христ","хрома","хроме","хромо","хрому","хромы","хрони","хруст","хруща","хруще","хрущи","хрущу","хрыча","хрыче","хрычи","хрычу","хряка","хряке","хряки","хряку","хряпа","хряск","хряст","хрясь","хряща","хряще","хрящи","хрящу","хтось","худая","худее","худел","худен","худея","худое","худож","худой","худом","худую","худые","худых","хуком","хулен","хулил","хулим","хулит","хулой","хулят","хумай","хунта","хунте","хунту","хунты","хурал","хурда","хурма","хурме","хурму","хурмы","хутор","хцешь","хыбыз","цадик","цанга","цанге","цанги","цангу","цапай","цапал","цапаю","цапая","цапка","цапле","цапли","цаплю","цапля","цапни","цапну","цапок","цапун","цапфа","цапфе","цапфу","цапфы","царап","царек","царем","царил","царим","царит","цариц","царст","царям","царят","царях","цахур","цацам","цацах","цацек","цацка","цацке","цацки","цацку","цвела","цвели","цвело","цвель","цвета","цвето","цветы","цгали","цевка","цевье","цевью","цевья","цедил","цедим","цедит","цедра","цедры","цедят","цежен","цезий","цезию","цезия","цезур","целая","целеб","целее","целен","целик","целил","целим","целит","целию","целко","целов","целог","целое","целой","целом","целуй","целую","целуя","целые","целый","целых","целыя","целью","целям","целят","целях","цемен","ценам","ценен","ценза","цензе","цензу","цензы","ценил","ценим","ценит","ценна","ценно","ценны","ценоз","ценой","цента","центе","центр","центу","центы","ценур","ценят","цепам","цепах","цепка","цепке","цепки","цепко","цепку","цепне","цепни","цепню","цепня","цепов","цепок","цепом","цепче","цепью","цепям","цепях","церем","церий","церию","церия","церкв","церко","цетан","цехам","цехах","цехин","цехов","цехом","циана","циане","цибик","цикад","цикла","цикле","цикли","циклу","циклы","циклю","цикля","цилин","цимол","цинаш","цинга","цинге","цинги","цингу","циник","цинич","цинка","цинке","цинку","цирка","цирке","цирки","цирку","циста","цитат","цитир","цитра","цифра","цифре","цифро","цифру","цифры","цокай","цокаю","цокая","цокну","цокот","цугам","цугах","цугов","цугом","цукат","цурки","цуцик","цыган","цыкай","цыкаю","цыкая","цыкни","цыкну","цыпка","цыпке","цыпки","цыпку","цыпля","цыпок","цыпоч","цюрих","чабан","чабер","чагой","чадам","чадах","чадил","чадим","чадит","чадно","чадом","чадра","чадры","чадят","чаешь","чайка","чайки","чайку","чайни","чайно","чакан","чакон","чакра","чакры","чалам","чалах","чалая","чалил","чалим","чалит","чалка","чалке","чалки","чалку","чалма","чалме","чалму","чалмы","чалов","чалое","чалой","чалом","чалую","чалые","чалый","чалых","чалят","чанам","чанах","чапли","чарка","чарке","чарки","чарку","чарок","чарта","чарте","чарту","чарты","чаруй","чарую","чаруя","чарши","часах","часок","часом","часта","часте","части","часто","часты","часть","частя","чатал","чатом","чахла","чахли","чахло","чахну","чахот","чашам","чашах","чашек","чашка","чашке","чашки","чашку","чащам","чащах","чаяла","чаяли","чаяло","чаями","чаяти","чаять","чвани","чебак","чебот","чекан","чекой","чеком","челам","челах","челка","челке","челки","челку","челна","челне","челну","челны","челов","челок","челом","чемер","чемод","чемто","чения","чепан","чепец","чепух","чепца","чепце","чепцу","чепцы","чепчи","черва","черве","черви","черво","черву","червы","червь","червю","червя","черед","через","черен","череп","черна","черне","черни","черно","черны","чернь","черню","черня","черта","черте","черти","черто","черту","черты","чертя","черчу","чесал","чесан","ческа","чесом","чести","честн","често","честь","четве","четен","четий","четка","четки","четко","четку","четна","четно","четны","четой","четок","четче","четъи","четыр","четьи","чехам","чехах","чехия","чехла","чехле","чехлу","чехлы","чехов","чехол","чехом","чечен","чечет","чечне","чечни","чешек","чешем","чешет","чешка","чешке","чешки","чешку","чешуе","чешуи","чешут","чешую","чешуя","чибис","чижам","чижах","чижик","чижов","чижом","чикаю","чикая","чилим","чинам","чинар","чинах","чинен","чинил","чиним","чинит","чинка","чинке","чинки","чинку","чинна","чинно","чинны","чином","чинуш","чинят","чипам","чипах","чипов","чипом","чипсы","чирик","чирка","чирке","чирки","чирку","чирок","чирье","чирьи","чирью","чирья","чисел","числа","числе","числи","число","числу","числю","числя","чиста","чисти","чисто","чисты","чистя","читав","читае","читай","читал","читан","читат","читая","читка","читке","читки","читку","чихай","чихал","чихаю","чихая","чихни","чихну","чихом","чичаг","чичас","чичер","чичик","чищен","члена","члене","члено","члену","члены","чомга","чомге","чомги","чомгу","чорта","чорту","чохом","чрева","чреве","чрево","чреву","чреда","чреду","чреды","чрезв","чрезм","чресл","чтени","чтеца","чтеце","чтецу","чтецы","чтешь","чтива","чтиве","чтиво","чтили","чтило","чтица","чтице","чтицу","чтицы","чтишь","чтоба","чтото","чубам","чубат","чубах","чубов","чубом","чубук","чувак","чувал","чуваш","чувих","чувст","чувяк","чугун","чудак","чуден","чудес","чудик","чудил","чудим","чудит","чудищ","чудна","чудно","чудны","чудов","чудом","чудью","чудят","чуешь","чужак","чужан","чужая","чужда","чуждо","чужды","чужие","чужим","чужих","чужое","чужой","чужом","чужую","чуйка","чуйку","чуйте","чукча","чукче","чукчи","чукчу","чулан","чулка","чулке","чулки","чулку","чулок","чумаз","чумак","чумка","чумке","чумки","чумку","чумой","чуням","чунях","чупри","чурек","чурка","чурке","чурки","чурку","чурок","чутка","чутки","чутко","чуток","чутче","чутье","чутью","чутья","чухна","чухны","чухон","чучел","чучхе","чушек","чушка","чушке","чушки","чушку","чушью","чуяла","чуяли","чуяло","чуять","чхнет","чьего","чьему","чьето","чьими","шабаш","шабер","шабли","шабот","шавка","шагай","шагал","шагам","шагах","шагаю","шагая","шагни","шагну","шагов","шагом","шажка","шажке","шажки","шажку","шажок","шайба","шайбе","шайбу","шайбы","шайка","шайки","шайку","шалав","шалаш","шалая","шалел","шалея","шалил","шалим","шалит","шалое","шалой","шалом","шалос","шался","шалун","шалую","шалые","шалый","шалых","шалью","шалям","шалят","шалях","шаман","шамбр","шамот","шампа","шанец","шанкр","шанса","шансе","шансу","шансы","шануй","шапка","шапке","шапки","шапку","шапок","шарад","шарап","шаржа","шарже","шаржи","шарик","шарил","шарим","шарит","шарко","шарма","шарме","шарму","шармы","шаров","шарок","шаром","шарфа","шарфе","шарфу","шарфы","шарый","шарят","шассе","шасси","шасть","шатав","шатай","шатал","шатан","шатая","шатен","шатер","шатию","шатия","шатка","шатки","шатко","шатку","шатни","шатну","шатов","шаток","шатра","шатре","шатру","шатры","шатун","шаурм","шафер","шахам","шахах","шахер","шахид","шахов","шахом","шахта","шахте","шахту","шахты","шашек","шашка","шашке","шашки","шашку","шашни","шваба","швабе","швабр","швабу","швабы","швали","шваль","швами","шванк","швара","шварк","шварт","шведа","шведу","шведы","швейц","шверт","швеца","швеце","швецу","швеям","швеях","швырк","швырн","шевер","шевич","шевро","шедши","шеина","шеину","шеища","шейка","шейки","шейку","шейте","шейха","шейхе","шейхи","шейху","шелеп","шелес","шелка","шелке","шелки","шелку","шелом","шельм","шельф","шемая","шемес","шенно","шенье","шеола","шепни","шепну","шепот","шепта","шепча","шепчи","шепчу","шериф","шерла","шерле","шерлу","шерпы","шерри","шерст","шеста","шесте","шести","шесть","шефов","шефом","шеяку","шеями","шибал","шибаю","шибая","шибер","шибка","шибки","шибко","шибок","шибче","шигал","шизик","шиизм","шиита","шикай","шикаю","шикая","шикну","шиком","шикуй","шикую","шикуя","шилом","шился","шилья","шимми","шинам","шинах","шинел","шинка","шинке","шинки","шинку","шиной","шинок","шипам","шипах","шипел","шипен","шипим","шипит","шипке","шиплю","шипов","шипом","шипун","шипуч","шипят","ширил","ширим","ширит","ширма","ширме","ширму","ширмы","широк","широт","широч","ширью","ширят","шитая","шитво","шитик","шитое","шитой","шитом","шитую","шитые","шитый","шитых","шитье","шитью","шитья","шифер","шифон","шифра","шифре","шифру","шифры","шихан","шихта","шихте","шихту","шихты","шишак","шишам","шишах","шишек","шишка","шишке","шишки","шишку","шишом","шкала","шкале","шкалу","шкалы","шкапа","шкапе","шкапы","шкаре","шкафа","шкафе","шкафу","шкафы","шквал","шкерт","шкета","шкеты","шкива","шкиве","шкивы","шклов","шкода","шкодя","школа","школе","школо","школу","школы","школь","шкота","шкоту","шкоты","шкура","шкуря","шлага","шлагу","шлака","шлаке","шлаки","шлаку","шлама","шланг","шлейф","шлема","шлеме","шлему","шлемы","шлешь","шлифа","шлифе","шлифу","шлифы","шлиха","шлихе","шлиху","шлица","шлице","шлицу","шлицы","шлыка","шлыке","шлюза","шлюзе","шлюзу","шлюзы","шлюпа","шлюпе","шлюпу","шлюпы","шлюха","шлюхе","шлюхи","шлюху","шляпа","шляпе","шляпу","шляпы","шляха","шляхе","шляхи","шляху","шмата","шмате","шмату","шмеле","шмели","шмель","шмелю","шмеля","шмецк","шмигу","шмона","шмоне","шмону","шмуль","шнапс","шнека","шнеке","шнеки","шнеку","шнитт","шнура","шоком","шопен","шопот","шорец","шорка","шорня","шорой","шорох","шорты","шоссе","шофер","шпага","шпаги","шпагу","шпаки","шпала","шпале","шпалу","шпалы","шпана","шпане","шпанс","шпарь","шпарю","шпаря","шпата","шпате","шпату","шпень","шпика","шпике","шпики","шпику","шпиле","шпили","шпиль","шпилю","шпиля","шпинь","шпион","шпису","шпица","шпице","шпицу","шпицы","шпона","шпоне","шпону","шпоны","шпора","шпоре","шприц","шпрот","шпуля","шпунт","шпура","шпынь","шрама","шрамы","шримс","шрифт","штаба","штабе","штабс","штабу","штабы","штамб","штамм","штамп","штата","штате","штату","штейн","штиль","штилю","штиля","штифт","штока","штоке","штоки","штоку","штоль","штора","шторе","шторм","штосе","штосс","штофа","штофе","штофу","штраф","штрек","штрих","штука","штуке","штуки","штуку","штурм","штуфа","штуфе","штуфу","штучк","штыка","штыке","штыки","штыку","штыль","штыре","штыри","штырь","штырю","штыря","шуана","шуане","шубам","шубах","шубка","шубке","шубки","шубку","шубой","шубок","шугае","шугай","шугал","шугаю","шугая","шугой","шудра","шуйца","шулер","шульг","шульц","шумам","шумах","шумел","шумен","шумер","шумим","шумит","шумка","шумке","шумки","шумко","шумку","шумлю","шумна","шумно","шумны","шумов","шумок","шумом","шумск","шумят","шунта","шунте","шунту","шунты","шурин","шурле","шуроч","шурпа","шурпе","шурпу","шурпы","шуруй","шуруп","шурую","шуруя","шурфа","шурфе","шурфу","шурфы","шурша","шурши","шуршу","шурья","шутам","шутах","шутил","шутим","шутит","шутих","шутка","шутке","шутки","шутко","шутку","шутли","шутов","шуток","шутом","шутят","шушва","шушун","шхеры","шхуна","шхуне","шьешь","щавин","щадил","щадим","щадит","щадят","щаной","щебет","щебне","щебни","щебню","щебня","щегла","щегле","щеглу","щеглы","щегол","щедра","щедро","щедры","щекий","щекой","щекот","щелка","щелке","щелки","щелку","щелок","щелчк","щелью","щелям","щелях","щемил","щемит","щенка","щенке","щенки","щенку","щенок","щенят","щепам","щепах","щепет","щепка","щепке","щепки","щепку","щепой","щепок","щерил","щерим","щерит","щерят","щетка","щетке","щетки","щетку","щеток","щечек","щечка","щечки","щечко","щечку","щипай","щипал","щипан","щипач","щипаю","щипая","щипет","щипец","щипка","щипке","щипки","щипку","щипли","щиплю","щипля","щипни","щипну","щипок","щипца","щипцы","щипят","щитам","щитах","щитик","щитка","щитке","щитки","щитку","щитов","щиток","щитом","щукин","щукой","щупай","щупал","щупам","щупах","щупаю","щупая","щупик","щупов","щупом","щурил","щурим","щурит","щурка","щуров","щурок","щуром","щурят","щучат","щучек","щучий","щучил","щучим","щучит","щучка","щучки","щучку","щучье","щучьи","щучью","щучья","ылдыз","эачем","эвбея","эвенк","эверс","эвона","эвося","эврик","эгида","эгиде","эгиду","эгиды","эгину","эгрет","эдаки","эдако","эдаку","эдема","эдеме","эдему","эдемы","эдесь","эдикт","эдипа","эдипе","эзопу","эйкем","эйлау","эквив","экера","экере","экеру","экзек","экзот","экими","экипа","эккер","эклер","эклог","экого","экому","эконо","экося","экран","экспе","экспо","экста","эксце","элеат","элита","эллин","эльбе","эльфа","эльфе","эльфу","эльфы","элями","эмали","эмаль","эмира","эмире","эмиру","эмиры","эммер","эндем","эндом","энерг","энзим","энная","энное","энной","энном","энную","энные","энный","энных","эозин","эолит","эоцен","эпика","эпике","эпики","эпику","эпода","эпонж","эпоса","эпосе","эпоха","эпохе","эпохи","эпоху","эпузы","эпюра","эпюре","эпюру","эпюры","эразм","эрами","эрара","эраст","эрбий","эрбию","эрбия","эргам","эргах","эргов","эргом","эрзац","эрзян","эркел","эркер","эроса","эросе","эсдек","эсера","эсере","эсеру","эсеры","эскиз","эспад","эспер","эспри","эссен","эстам","эстет","эстов","эстра","этажа","этаже","этажи","этака","этаки","этако","этаку","этана","этане","этану","этапа","этапе","этапу","этапы","этика","этике","этики","этику","этилы","этими","этнос","этово","этого","этому","этюда","этюде","этюду","этюды","эфами","эфеса","эфесе","эфесу","эфесы","эфика","эфиоп","эфира","эфире","эфирн","эфиру","эфиры","эфтом","эффек","эчень","юанем","юаням","юанях","юбкой","юбовь","юдоли","юдоль","южане","южная","южнее","южное","южной","южном","южную","южные","южный","южных","юзами","юзист","юзыся","юккой","юкола","юлами","юлиан","юлила","юлили","юлило","юлишь","юлька","юмизм","юмора","юморе","юнгам","юнгах","юнгой","юнеть","юнион","юниор","юница","юнице","юницу","юницы","юнкер","юнкор","юннат","юного","юному","юност","юноша","юноше","юноши","юношу","юнцам","юнцах","юнцов","юнцом","юными","юриди","юрист","юркай","юркаю","юркая","юркие","юркий","юрким","юрких","юркни","юркну","юркое","юркой","юрком","юркую","юрово","юрода","юртам","юртах","юртой","юрфак","юсуфа","ютами","ютясь","юферс","юфтью","ючусь","юшкой","ююбой","ябеда","ябеду","ябеды","яблок","яблон","явила","явили","явило","явилс","явися","явишь","явкой","явлен","являе","являй","являл","являю","являя","явная","явное","явной","явном","явную","явные","явный","явных","явств","явтух","явясь","ягами","ягеле","ягель","ягелю","ягеля","ягнят","ягода","ягуар","ядами","ядови","ядоша","ядрен","ядром","ядяше","язвам","язвах","язвил","язвим","язвит","язвлю","язвой","язвят","языка","языке","языки","языко","языку","язями","яичек","яичка","яички","яичко","яичку","яично","яйлой","яйцам","яйцах","яйцом","якает","якала","якали","якало","яками","якоря","якута","якуте","якуту","якуты","ялами","ялбот","ялика","ялике","ялики","ялику","ялтой","ямаец","ямами","ямбов","ямбом","ямина","ямине","ямину","ямища","ямкой","ямная","ямное","ямной","ямном","ямную","ямные","ямный","ямных","ямсом","ямщик","январ","яранг","ярдам","ярдах","ярдов","ярдом","ярица","яркая","яркие","яркий","ярким","ярких","яркое","яркой","ярком","яркос","яркую","ярлык","ярмол","ярмом","яровы","ярого","ярому","яросл","ярост","яруга","яруса","ярусе","ярусу","ярусы","ярцев","ярыга","ярыми","ярюсь","ярясь","ясака","ясаке","ясаку","ясене","ясени","ясень","ясеню","ясеня","яслям","яслях","ясмин","ясная","яснее","яснел","яснея","ясное","ясной","ясном","ясную","ясные","ясный","ясных","яспис","яссах","яства","ястве","яство","яству","ястык","ясырь","ятвяг","яткой","ятных","ятовь","яться","ятями","яффой","яхонт","яхтам","яхтах","яхтой","ячеям","ячеях","ячная","ячное","ячной","ячном","ячную","ячные","ячный","ячных","ячьем","ячьим","ячьих","яшмой","ящера","ящере","ящеру","ящеры","ящика","ящике","ящики","ящику","ящура","гарде","дедок","зубищ","ифрит","княжа","княжь"]');
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/with-selector.js
var with_selector = __webpack_require__(418);
;// ./node_modules/react-redux/dist/react-redux.mjs
// src/index.ts



// src/utils/react.ts

var React = (
  // prettier-ignore
  // @ts-ignore
   true ? react : react_namespaceObject
);

// src/components/Context.ts
var ContextKey = Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  if (!React.createContext)
    return {};
  const contextMap = gT[ContextKey] ?? (gT[ContextKey] = /* @__PURE__ */ new Map());
  let realContext = contextMap.get(React.createContext);
  if (!realContext) {
    realContext = React.createContext(
      null
    );
    if (false) {}
    contextMap.set(React.createContext, realContext);
  }
  return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();

// src/utils/useSyncExternalStore.ts
var notInitialized = () => {
  throw new Error("uSES not initialized!");
};

// src/hooks/useReduxContext.ts
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = React.useContext(context);
    if (false) {}
    return contextValue;
  };
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();

// src/hooks/useSelector.ts
var useSyncExternalStoreWithSelector = notInitialized;
var initializeUseSelector = (fn) => {
  useSyncExternalStoreWithSelector = fn;
};
var refEquality = (a, b) => a === b;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  const useSelector2 = (selector, equalityFnOrOptions = {}) => {
    const { equalityFn = refEquality, devModeChecks = {} } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
    if (false) {}
    const {
      store,
      subscription,
      getServerState,
      stabilityCheck,
      identityFunctionCheck
    } = useReduxContext2();
    const firstRun = React.useRef(true);
    const wrappedSelector = React.useCallback(
      {
        [selector.name](state) {
          const selected = selector(state);
          if (false) {}
          return selected;
        }
      }[selector.name],
      [selector, stabilityCheck, devModeChecks.stabilityCheck]
    );
    const selectedState = useSyncExternalStoreWithSelector(
      subscription.addNestedSub,
      store.getState,
      getServerState || store.getState,
      wrappedSelector,
      equalityFn
    );
    React.useDebugValue(selectedState);
    return selectedState;
  };
  Object.assign(useSelector2, {
    withTypes: () => useSelector2
  });
  return useSelector2;
}
var useSelector = /* @__PURE__ */ createSelectorHook();

// src/utils/react-is.ts
var REACT_ELEMENT_TYPE = Symbol.for("react.element");
var REACT_PORTAL_TYPE = Symbol.for("react.portal");
var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
var REACT_CONTEXT_TYPE = Symbol.for("react.context");
var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
var REACT_MEMO_TYPE = Symbol.for("react.memo");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;
function isValidElementType(type) {
  if (typeof type === "string" || typeof type === "function") {
    return true;
  }
  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE) {
    return true;
  }
  if (typeof type === "object" && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_CLIENT_REFERENCE || type.getModuleId !== void 0) {
      return true;
    }
  }
  return false;
}
function typeOf(object) {
  if (typeof object === "object" && object !== null) {
    const $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE: {
        const type = object.type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;
          default: {
            const $$typeofType = type && type.$$typeof;
            switch ($$typeofType) {
              case REACT_SERVER_CONTEXT_TYPE:
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
          }
        }
      }
      case REACT_PORTAL_TYPE: {
        return $$typeof;
      }
    }
  }
  return void 0;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}

// src/utils/warning.ts
function react_redux_warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}

// src/connect/verifySubselectors.ts
function verify(selector, methodName) {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`);
  } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
    if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) {
      react_redux_warning(
        `The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`
      );
    }
  }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
  verify(mapStateToProps, "mapStateToProps");
  verify(mapDispatchToProps, "mapDispatchToProps");
  verify(mergeProps, "mergeProps");
}

// src/connect/selectorFactory.ts
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(
      nextState,
      state,
      nextOwnProps,
      ownProps
    );
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged)
      return handleNewPropsAndNewState();
    if (propsChanged)
      return handleNewProps();
    if (stateChanged)
      return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, {
  initMapStateToProps,
  initMapDispatchToProps,
  initMergeProps,
  ...options
}) {
  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);
  if (false) {}
  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

// src/utils/bindActionCreators.ts
function react_redux_bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }
  return boundActionCreators;
}

// src/utils/isPlainObject.ts
function react_redux_isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  const proto = Object.getPrototypeOf(obj);
  if (proto === null)
    return true;
  let baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}

// src/utils/verifyPlainObject.ts
function verifyPlainObject(value, displayName, methodName) {
  if (!react_redux_isPlainObject(value)) {
    react_redux_warning(
      `${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`
    );
  }
}

// src/connect/wrapMapToProps.ts
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, { displayName }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      if (false)
        {}
      return props;
    };
    return proxy;
  };
}

// src/connect/invalidArgFactory.ts
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(
      `Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`
    );
  };
}

// src/connect/mapDispatchToProps.ts
function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant(
    (dispatch) => (
      // @ts-ignore
      react_redux_bindActionCreators(mapDispatchToProps, dispatch)
    )
  ) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch) => ({
    dispatch
  })) : typeof mapDispatchToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapDispatchToProps, "mapDispatchToProps")
  ) : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
}

// src/connect/mapStateToProps.ts
function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapStateToProps, "mapStateToProps")
  ) : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
}

// src/connect/mergeProps.ts
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false)
          {}
      }
      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
}

// src/utils/batch.ts
function defaultNoopBatch(callback) {
  callback();
}

// src/utils/Subscription.ts
function createListenerCollection() {
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      defaultNoopBatch(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      const listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      const listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}

// src/utils/useIsomorphicLayoutEffect.ts
var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isReactNative = typeof navigator !== "undefined" && navigator.product === "ReactNative";
var useIsomorphicLayoutEffect = canUseDOM || isReactNative ? React.useLayoutEffect : React.useEffect;

// src/utils/shallowEqual.ts
function react_redux_is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function shallowEqual(objA, objB) {
  if (react_redux_is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !react_redux_is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// src/utils/hoistStatics.ts
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {
  [ForwardRef]: FORWARD_REF_STATICS,
  [Memo]: MEMO_STATICS
};
function getStatics(component) {
  if (isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var react_redux_getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      const inheritedComponent = react_redux_getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent);
      }
    }
    let keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    const targetStatics = getStatics(targetComponent);
    const sourceStatics = getStatics(sourceComponent);
    for (let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      if (!KNOWN_STATICS[key] && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {
        }
      }
    }
  }
  return targetComponent;
}

// src/components/connect.tsx
var useSyncExternalStore = (/* unused pure expression or super */ null && (notInitialized));
var initializeConnect = (fn) => {
  useSyncExternalStore = fn;
};
var NO_SUBSCRIPTION_ARRAY = (/* unused pure expression or super */ null && ([null, null]));
var stringifyComponent = (Comp) => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(() => effectFunc(...effectArgs), dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
  if (!shouldHandleStateChanges)
    return () => {
    };
  let didUnsubscribe = false;
  let lastThrownError = null;
  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      return;
    }
    const latestStoreState = store.getState();
    let newChildProps, error;
    try {
      newChildProps = childPropsSelector(
        latestStoreState,
        lastWrapperProps.current
      );
    } catch (e) {
      error = e;
      lastThrownError = e;
    }
    if (!error) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      additionalSubscribeListener();
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
function strictEqual(a, b) {
  return a === b;
}
var hasWarnedAboutDeprecatedPureOption = false;
function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = shallowEqual,
  areStatePropsEqual = shallowEqual,
  areMergedPropsEqual = shallowEqual,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = ReactReduxContext
} = {}) {
  if (false) {}
  const Context = context;
  const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
  const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
  const initMergeProps = mergePropsFactory(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);
  const wrapWithConnect = (WrappedComponent) => {
    if (false) {}
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };
    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = React.useMemo(() => {
        const { reactReduxForwardedRef: reactReduxForwardedRef2, ...wrapperProps2 } = props;
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]);
      const ContextToUse = React.useMemo(() => {
        let ResultContext = Context;
        if (propsContext?.Consumer) {
          if (false) {}
        }
        return ResultContext;
      }, [propsContext, Context]);
      const contextValue = React.useContext(ContextToUse);
      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      if (false) {}
      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = React.useMemo(() => {
        return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = React.useMemo(() => {
        if (!shouldHandleStateChanges)
          return NO_SUBSCRIPTION_ARRAY;
        const subscription2 = createSubscription(
          store,
          didStoreComeFromProps ? void 0 : contextValue.subscription
        );
        const notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]);
      const overriddenContextValue = React.useMemo(() => {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return {
          ...contextValue,
          subscription
        };
      }, [didStoreComeFromProps, contextValue, subscription]);
      const lastChildProps = React.useRef(void 0);
      const lastWrapperProps = React.useRef(wrapperProps);
      const childPropsFromStoreUpdate = React.useRef(void 0);
      const renderIsScheduled = React.useRef(false);
      const isMounted = React.useRef(false);
      const latestSubscriptionCallbackError = React.useRef(
        void 0
      );
      useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = React.useMemo(() => {
        const selector = () => {
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          }
          return childPropsSelector(store.getState(), wrapperProps);
        };
        return selector;
      }, [store, wrapperProps]);
      const subscribeForReact = React.useMemo(() => {
        const subscribe = (reactListener) => {
          if (!subscription) {
            return () => {
            };
          }
          return subscribeUpdates(
            shouldHandleStateChanges,
            store,
            subscription,
            // @ts-ignore
            childPropsSelector,
            lastWrapperProps,
            lastChildProps,
            renderIsScheduled,
            isMounted,
            childPropsFromStoreUpdate,
            notifyNestedSubs,
            reactListener
          );
        };
        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
        lastWrapperProps,
        lastChildProps,
        renderIsScheduled,
        wrapperProps,
        childPropsFromStoreUpdate,
        notifyNestedSubs
      ]);
      let actualChildProps;
      try {
        actualChildProps = useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          subscribeForReact,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          actualChildPropsSelector,
          getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector
        );
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `
The error may be correlated with this previous error:
${latestSubscriptionCallbackError.current.stack}

`;
        }
        throw err;
      }
      useIsomorphicLayoutEffect(() => {
        latestSubscriptionCallbackError.current = void 0;
        childPropsFromStoreUpdate.current = void 0;
        lastChildProps.current = actualChildProps;
      });
      const renderedWrappedComponent = React.useMemo(() => {
        return (
          // @ts-ignore
          /* @__PURE__ */ React.createElement(
            WrappedComponent,
            {
              ...actualChildProps,
              ref: reactReduxForwardedRef
            }
          )
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      const renderedChild = React.useMemo(() => {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ React.createElement(ContextToUse.Provider, { value: overriddenContextValue }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    const _Connect = React.memo(ConnectFunction);
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      const _forwarded = React.forwardRef(
        function forwardConnectRef(props, ref) {
          return /* @__PURE__ */ React.createElement(Connect, { ...props, reactReduxForwardedRef: ref });
        }
      );
      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return /* @__PURE__ */ hoistNonReactStatics(forwarded, WrappedComponent);
    }
    return /* @__PURE__ */ hoistNonReactStatics(Connect, WrappedComponent);
  };
  return wrapWithConnect;
}
var connect_default = (/* unused pure expression or super */ null && (connect));

// src/components/Provider.tsx
function Provider({
  store,
  context,
  children,
  serverState,
  stabilityCheck = "once",
  identityFunctionCheck = "once"
}) {
  const contextValue = React.useMemo(() => {
    const subscription = createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : void 0,
      stabilityCheck,
      identityFunctionCheck
    };
  }, [store, serverState, stabilityCheck, identityFunctionCheck]);
  const previousState = React.useMemo(() => store.getState(), [store]);
  useIsomorphicLayoutEffect(() => {
    const { subscription } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ React.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;

// src/hooks/useStore.ts
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : (
    // @ts-ignore
    createReduxContextHook(context)
  );
  const useStore2 = () => {
    const { store } = useReduxContext2();
    return store;
  };
  Object.assign(useStore2, {
    withTypes: () => useStore2
  });
  return useStore2;
}
var useStore = /* @__PURE__ */ createStoreHook();

// src/hooks/useDispatch.ts
function createDispatchHook(context = ReactReduxContext) {
  const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
  const useDispatch2 = () => {
    const store = useStore2();
    return store.dispatch;
  };
  Object.assign(useDispatch2, {
    withTypes: () => useDispatch2
  });
  return useDispatch2;
}
var useDispatch = /* @__PURE__ */ createDispatchHook();

// src/exports.ts
var batch = (/* unused pure expression or super */ null && (defaultNoopBatch));

// src/index.ts
initializeUseSelector(with_selector.useSyncExternalStoreWithSelector);
initializeConnect(react.useSyncExternalStore);

//# sourceMappingURL=react-redux.mjs.map
;// ./src/shared/lib/useAppSelector.ts

const useAppSelector = useSelector.withTypes();

;// ./src/shared/lib/useRandom.ts
const useRandom = (from = 0, to) => {
    const r = Math.trunc(Math.random() * Math.pow(10, 15));
    return from + r % (to + 1);
};

;// ./src/shared/lib/index.ts



;// ./src/entities/game/lib/getWords.ts


const getWords = () => {
    return words_namespaceObject;
};
const getRandomWord = () => {
    const randomIndex = useRandom(0, words_namespaceObject.length - 1);
    return words_namespaceObject[randomIndex];
};

;// ./src/entities/game/lib/index.ts


;// ./src/entities/game/model/game.slice.ts


const initialState = {
    words: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: ''
    },
    wordMatches: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
    },
    usedChars: {},
    pointer: 1,
    currentWord: 'blank_word',
    gameOver: false,
    gameWin: false,
    unknownIndex: undefined
};
const gameSlice = createSlice({
    name: 'game',
    initialState,
    selectors: {
        getPointer: (state) => state.pointer,
        getWordById: (state, wordId) => state.words[wordId],
        getCurrentWord: (state) => state.currentWord,
        getMatchById: (state, wordId) => state.wordMatches[wordId],
        getUsedChars: (state) => state.usedChars,
        getGameOver: (state) => state.gameOver,
        getGameWin: (state) => state.gameWin,
        getUnknownIndex: (state) => state.unknownIndex,
    },
    reducers: {
        setWordById: (state, { payload }) => {
            state.words[payload.wordId] = payload.value;
        },
        setPointer: (state, { payload }) => {
            state.pointer = payload;
        },
        pushPointedChar: (state, { payload }) => {
            if (state.words[state.pointer].length < 5) {
                state.words[state.pointer] += payload;
            }
        },
        popPointedChar: (state) => {
            const currentWord = state.words[state.pointer];
            state.words[state.pointer] = currentWord.slice(0, currentWord.length - 1);
        },
        enterPointedWord: (state) => {
            //проверка, состоит ли слово из 5 букв
            if (state.words[state.pointer].length === 5) {
                if (state.words[state.pointer] === state.currentWord) {
                    state.wordMatches[state.pointer] = new Array(5).fill('matched');
                    state.gameWin = true;
                }
                else if (getWords().includes(state.words[state.pointer].toLowerCase())) {
                    if (state.pointer < 6) {
                        state.words[state.pointer]
                            .split('')
                            .forEach((char, index) => {
                            if (state.currentWord.includes(char)) {
                                const charStatus = state.currentWord[index] === char ? 'matched' : 'included';
                                state.usedChars[char] = charStatus;
                                state.wordMatches[state.pointer].push(charStatus);
                            }
                            else {
                                state.usedChars[char] = 'wrong';
                                state.wordMatches[state.pointer].push('wrong');
                            }
                        });
                        state.pointer++;
                    }
                    else {
                        state.gameOver = true;
                        state.pointer++; //это нужно для сняния возможности редактирования
                    }
                }
                else {
                    state.unknownIndex = state.pointer;
                }
            }
        },
        setCurrentWord: (state, { payload }) => {
            state.currentWord = payload;
        },
        setGameOver: (state, { payload }) => {
            state.gameOver = payload;
        },
        setNewGame: (state => {
            state.pointer = 1;
            state.currentWord = getRandomWord();
            state.gameOver = initialState.gameOver;
            state.gameWin = initialState.gameWin;
            state.words = initialState.words;
            state.usedChars = {};
            state.wordMatches = initialState.wordMatches;
            state.unknownIndex = initialState.unknownIndex;
        }),
        removeUnknownIndex: (state) => {
            state.unknownIndex = undefined;
        }
    }
});
const { setWordById, setPointer, setCurrentWord, pushPointedChar, popPointedChar, enterPointedWord, setGameOver, setNewGame, removeUnknownIndex } = gameSlice.actions;
const { getPointer, getWordById, getCurrentWord, getMatchById, getUsedChars, getGameOver, getGameWin, getUnknownIndex } = gameSlice.getSelectors();

;// ./src/entities/game/model/index.ts



;// ./src/pages/game/ui/WordInput/WordInput.tsx





const WordInput = (0,react.memo)((p) => {
    const dispatch = useDispatch();
    const wordRef = (0,react.useRef)(null);
    const letters = p.value.padEnd(5, ' ');
    const containerClasses = [_7];
    if (p.unknown) {
        containerClasses.push(_5);
        setTimeout(() => {
            dispatch(removeUnknownIndex());
        }, 500);
    }
    return ((0,jsx_runtime.jsx)("div", { className: containerClasses.join(' '), ref: wordRef, children: letters.split('')
            .map((letter, index) => {
            const classes = [_2];
            if (p.matches[index]) {
                const status = {
                    'wrong': _8,
                    'matched': _3,
                    'included': WordInput_module_1
                };
                classes.push(status[p.matches[index]]);
            }
            return (0,jsx_runtime.jsx)("div", { className: classes.join(' '), children: letter }, index);
        }) }));
});


;// ./src/pages/game/ui/WordInput/index.ts


;// ./src/pages/game/ui/Keyboard/Keyboard.module.css
// extracted by mini-css-extract-plugin
var Keyboard_module_1 = "ctdnuPwFtb49f7stvbtO";
var Keyboard_module_2 = "Ou76IpXKE7WmAsLID4fZ";
var Keyboard_module_3 = "yN5E3T49qQ5BG3zDRdIO";
var Keyboard_module_4 = "zXoKEd14UFn1TeNDirIt";
var Keyboard_module_5 = "D5ETjHCN0ofw4ECGX1ht";


;// ./src/pages/game/ui/Keyboard/Keyboard.tsx






const Keyboard = () => {
    const usedChars = useAppSelector(state => getUsedChars(state.game));
    const rows = [
        ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
        ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
        ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю']
    ];
    const dispatch = useDispatch();
    const handleKeyUp = (e) => {
        if (e.key === 'Backspace') {
            dispatch(popPointedChar());
            return;
        }
        if (e.key === 'Enter') {
            dispatch(enterPointedWord());
            return;
        }
        const regex = /[А-Яа-я]/i;
        if (regex.test(e.key)) {
            dispatch(pushPointedChar(e.key.toLowerCase()));
        }
    };
    (0,react.useEffect)(() => {
        window.addEventListener("keyup", handleKeyUp);
        return () => window.removeEventListener("keyup", handleKeyUp);
    }, []);
    const pushChar = (i) => {
        dispatch(pushPointedChar(i));
    };
    const statuses = {
        'wrong': Keyboard_module_5,
        'matched': Keyboard_module_4,
        'included': Keyboard_module_1,
    };
    const getClass = (char) => usedChars[char] ? statuses[usedChars[char]] : '';
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsxs)("div", { className: Keyboard_module_2, children: [(0,jsx_runtime.jsx)("div", { className: Keyboard_module_3, children: rows[0].map(i => (0,jsx_runtime.jsx)("div", { className: getClass(i), onClick: () => pushChar(i), children: i })) }), (0,jsx_runtime.jsx)("div", { className: Keyboard_module_3, children: rows[1].map(i => (0,jsx_runtime.jsx)("div", { className: getClass(i), onClick: () => pushChar(i), children: i })) }), (0,jsx_runtime.jsxs)("div", { className: Keyboard_module_3, children: [(0,jsx_runtime.jsx)("div", { onClick: () => dispatch(popPointedChar()), children: "backspace" }), rows[2].map(i => (0,jsx_runtime.jsx)("div", { className: getClass(i), onClick: () => pushChar(i), children: i })), (0,jsx_runtime.jsx)("div", { onClick: () => dispatch(enterPointedWord()), children: "Enter" })] })] }) }));
};

;// ./src/pages/game/ui/Keyboard/index.ts


;// ./src/pages/game/ui/GameOverModal/GameModal.module.css
// extracted by mini-css-extract-plugin
var GameModal_module_1 = "eJfphcKfGAJ1R0NralLB";
var GameModal_module_2 = "Bzl2W3vwzbV32koxV0Eq";
var GameModal_module_3 = "QyCvTMi0CRIHHTElb5BD";
var GameModal_module_4 = "baB0bPlBClcfBa3PgELp";
var GameModal_module_5 = "xY7Uaq2DlseZtiCrNsgk";


;// ./src/shared/ui/Modal/Modal.module.css
// extracted by mini-css-extract-plugin
var Modal_module_1 = "qMUyStUvYaUWOjxNdOf3";
var Modal_module_2 = "h6Y67fTEpvfAmTzveHK8";
var Modal_module_3 = "bKa_w15VeUP2M5BiXohK";


// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(961);
;// ./src/shared/ui/Modal/Modal.tsx



const Modal = (p) => {
    return p.open && (0,react_dom.createPortal)(((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("div", { className: Modal_module_2, children: (0,jsx_runtime.jsx)("div", { className: Modal_module_1, children: p.children }) }) })), document.getElementById('modal-portal'));
};

;// ./src/shared/ui/Modal/index.ts


;// ./src/pages/game/ui/GameOverModal/GameOverModal.tsx






const GameOverModal = () => {
    const dispatch = useDispatch();
    const isGameOver = useAppSelector(state => getGameOver(state.game));
    const currentWord = useAppSelector(state => getCurrentWord(state.game));
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)(Modal, { open: isGameOver, children: (0,jsx_runtime.jsxs)("div", { className: GameModal_module_2, children: [(0,jsx_runtime.jsx)("h2", { className: GameModal_module_5, children: "\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430" }), (0,jsx_runtime.jsxs)("div", { className: GameModal_module_4, children: ["\u0417\u0430\u0433\u0430\u0434\u0430\u043D\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E: ", (0,jsx_runtime.jsx)("span", { className: GameModal_module_3, children: currentWord })] }), (0,jsx_runtime.jsx)("button", { className: GameModal_module_1, onClick: () => dispatch(setNewGame()), children: "\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430" })] }) }) }));
};

;// ./src/pages/game/ui/GameOverModal/index.ts


;// ./src/pages/game/ui/GameWinModal/GameWinModal.module.css
// extracted by mini-css-extract-plugin
var GameWinModal_module_1 = "llioce47XRcc5seQPNAQ";
var GameWinModal_module_2 = "_24kmjQqRTk3SmUneCGAw";
var GameWinModal_module_3 = "H_MuF_Q5Uvn5MddXKvqA";


;// ./src/pages/game/ui/GameWinModal/GameWinModal.tsx






const GameWinModal = () => {
    const dispatch = useDispatch();
    const gameWin = useAppSelector(state => getGameWin(state.game));
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)(Modal, { open: gameWin, children: (0,jsx_runtime.jsxs)("div", { className: GameWinModal_module_2, children: [(0,jsx_runtime.jsx)("h2", { className: GameWinModal_module_3, children: "\u0412\u044B \u043E\u0442\u0433\u0430\u0434\u0430\u043B\u0438 \u0441\u043B\u043E\u0432\u043E!" }), (0,jsx_runtime.jsx)("button", { className: GameWinModal_module_1, onClick: () => dispatch(setNewGame()), children: "\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430" })] }) }) }));
};

;// ./src/pages/game/ui/GameWinModal/index.ts


;// ./src/pages/game/ui/GameContainer/GameContainer.tsx











const GameContainer = () => {
    const dispatch = useDispatch();
    const unknownIndex = useAppSelector(state => getUnknownIndex(state.game));
    const words = (() => {
        const stack = [];
        for (let i = 1; i <= 6; i++) {
            const word = useAppSelector(state => getWordById(state.game, i));
            const match = useAppSelector(state => getMatchById(state.game, i));
            stack.push({ word, match });
        }
        return stack;
    })();
    (0,react.useEffect)(() => {
        dispatch(setCurrentWord(getRandomWord()));
    }, []);
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsxs)("div", { className: _1, children: [(0,jsx_runtime.jsx)("div", { children: words.map(({ word, match }, index) => (0,jsx_runtime.jsx)(WordInput, { value: word, matches: match, unknown: unknownIndex ? unknownIndex - 1 === index : false }, index)) }), (0,jsx_runtime.jsx)(Keyboard, {})] }), (0,jsx_runtime.jsx)(GameOverModal, {}), (0,jsx_runtime.jsx)(GameWinModal, {})] }));
};


;// ./src/pages/game/ui/GameContainer/index.ts


;// ./src/pages/game/ui/GamePage.tsx


const GamePage = () => {
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)(GameContainer, {}) }));
};


;// ./src/pages/game/ui/index.ts


;// ./src/pages/game/index.ts


;// ./src/app/stores/mainStore.ts


const mainStore = configureStore({
    reducer: {
        [gameSlice.name]: gameSlice.reducer
    }
});

;// ./src/app/stores/index.ts


;// ./src/app/providers/MainProvider.tsx



const MainProvider = ({ children }) => {
    return ((0,jsx_runtime.jsx)(Provider_default, { store: mainStore, children: children }));
};

;// ./src/app/providers/index.ts


;// ./src/app/App.tsx




const App = () => {
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)(MainProvider, { children: (0,jsx_runtime.jsx)(GamePage, {}) }) }));
};


;// ./src/index.tsx



const rootElement = document.getElementById('root');
if (rootElement) {
    const root = client.createRoot(rootElement);
    root.render((0,jsx_runtime.jsx)(App, {}));
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixhQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxhQUFPO0FBQ2Y7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsbUJBQW1CO0FBQ3BCO0FBQ0EsWUFBWSxNQUFNLEdBQUcsVUFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUk7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLEtBQXFDLEdBQUcsMkNBQXNCLE9BQU8sQ0FBNkM7QUFDeEk7QUFDQSwwQ0FBMEMsWUFBb0Isb0JBQW9CLEVBSTdFO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEtBQXFDLEdBQUcsMkNBQXNCLE9BQU8sQ0FBOEQ7QUFDN0o7QUFDQTtBQUNBLDBCQUEwQixLQUFxQyxHQUFHLDJDQUFzQixPQUFPLENBQXdGO0FBQ3ZMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsVUFBVSxLQUFxQyxFQUFFLEVBSTFDO0FBQ1AsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTLEtBQXFDLEVBQUUsRUFFakQ7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsU0FBUyxLQUFxQyxFQUFFLEVBRWpEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUMsR0FBRywyQ0FBc0IsT0FBTyxDQUEyRztBQUN0TTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQkFBb0IsS0FBcUMsR0FBRywyQ0FBc0IsT0FBTyxDQUF3TDtBQUNqUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUN5RTtBQUN6RSxtQkFBbUIsd0RBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNpRTtBQUNqRTtBQUNBO0FBQ0EsTUFBTSxLQUF1RCxFQUFFLEVBRTVEO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUM4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3REFBUSxVQUFVLENBQUM7QUFDdkMsb0JBQW9CLHdEQUFRLFVBQVUsQ0FBQztBQUN2Qyx3QkFBd0IsbURBQUcsU0FBUyxHQUFHLFVBQVUsQ0FBQztBQUNsRCx3QkFBd0IsbURBQUcsU0FBUyxHQUFHLFVBQVUsQ0FBQztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTSxFQUFFLFdBQVcsV0FBVyxLQUFLO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixLQUFxQyxHQUFHLDJDQUFzQixPQUFPLENBQStCO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSixvQkFBb0IsS0FBcUMsR0FBRywyQ0FBc0IsT0FBTyxDQUF5RjtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDJCQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUMsR0FBRywyQ0FBc0IsT0FBTyxDQUE2QjtBQUN4SDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQywyQkFBTSxpQ0FBaUMsSUFBSTtBQUM3RTtBQUNBLENBQUM7QUFDRCx3Q0FBd0MsZ0VBQWdCLElBQUksWUFBWTtBQUN4RSxxQ0FBcUMsMkJBQU0saUNBQWlDLElBQUk7QUFDaEY7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxtQkFBbUIsSUFBSTtBQUN2QjtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJCQUFNO0FBQ1I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkJBQU07QUFDUjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJCQUFNLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsS0FBcUMsR0FBRywyQ0FBc0IsT0FBTyxDQUEyRDtBQUN4SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUM0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQzREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLDRCQUE0QixLQUFxQyxHQUFHLDJDQUFzQixPQUFPLENBQWdVO0FBQ2phO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0QsSUFBSSw2QkFBUTtBQUNaO0FBQ0Esb0JBQW9CLEtBQXFDLEdBQUcsMkNBQXNCLE9BQU8sQ0FBc0M7QUFDL0g7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBb0Isb0JBQW9CLEVBRTdFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsWUFBWTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxTQUFTLDJDQUFzQjtBQUMvQiwwQ0FBMEMsT0FBTyxpREFBaUQsTUFBTTtBQUN4RztBQW9ERTtBQUNGOzs7Ozs7Ozs7QUMxdUVBO0FBQ2dDO0FBQ2lHOztBQUVqSTtBQUN1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLEdBQUcsS0FBd0IsR0FBRyxxQkFBYTtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDLEVBQUUsRUFFMUM7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFzRCxFQUFFLEVBSTNEO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRCxZQUFZLCtDQUErQyxnREFBZ0Qsa0NBQWtDO0FBQzdJLFFBQVEsS0FBcUMsRUFBRSxFQVkxQztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUFxQyxFQUFFLEVBK0MxQztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxtQkFBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQsSUFBSTtBQUNKO0FBQ0EsTUFBTSxtQkFBTztBQUNiLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLFNBQVMsOEJBQWtCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMseUJBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx5QkFBYTtBQUNwQixJQUFJLG1CQUFPO0FBQ1gsU0FBUyxXQUFXLFFBQVEsYUFBYSwrQ0FBK0MsTUFBTTtBQUM5RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGFBQWE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DLFFBQVEsRUFBa0Q7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZLE1BQU0sTUFBTSxxQ0FBcUMsNkJBQTZCO0FBQ3pIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4QkFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0Esa0RBQWtELGtDQUFrQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsWUFBWSxLQUFxQztBQUNqRCxVQUFVLEVBQTBEO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsY0FBRTtBQUNYO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGNBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQyxrRUFBa0UsY0FBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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L25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2NsaWVudC5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIiwid2VicGFjazovL3dvcmRsZS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwid2VicGFjazovL3dvcmRsZS8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2luZGV4LmpzIiwid2VicGFjazovL3dvcmRsZS8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93b3JkbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29yZGxlL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmRsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29yZGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29yZGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvR2FtZUNvbnRhaW5lci9HYW1lQ29udGFpbmVyLm1vZHVsZS5jc3M/M2I5YyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvcGFnZXMvZ2FtZS91aS9Xb3JkSW5wdXQvV29yZElucHV0Lm1vZHVsZS5jc3M/NDQ3OCIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvcmVkdXgvZGlzdC9yZWR1eC5tanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2Rpc3QvcmVkdXgtdGh1bmsubWpzIiwid2VicGFjazovL3dvcmRsZS8uL25vZGVfbW9kdWxlcy9pbW1lci9kaXN0L2ltbWVyLm1qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvQHJlZHV4anMvdG9vbGtpdC9kaXN0L3JlZHV4LXRvb2xraXQubW9kZXJuLm1qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZGlzdC9yZWFjdC1yZWR1eC5tanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3NoYXJlZC9saWIvdXNlQXBwU2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3NoYXJlZC9saWIvdXNlUmFuZG9tLnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9zaGFyZWQvbGliL2luZGV4LnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9lbnRpdGllcy9nYW1lL2xpYi9nZXRXb3Jkcy50cyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvZW50aXRpZXMvZ2FtZS9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL2VudGl0aWVzL2dhbWUvbW9kZWwvZ2FtZS5zbGljZS50cyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvZW50aXRpZXMvZ2FtZS9tb2RlbC9pbmRleC50cyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvcGFnZXMvZ2FtZS91aS9Xb3JkSW5wdXQvV29yZElucHV0LnRzeCIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvcGFnZXMvZ2FtZS91aS9Xb3JkSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvS2V5Ym9hcmQvS2V5Ym9hcmQubW9kdWxlLmNzcz9hZWMwIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9wYWdlcy9nYW1lL3VpL0tleWJvYXJkL0tleWJvYXJkLnRzeCIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvcGFnZXMvZ2FtZS91aS9LZXlib2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvcGFnZXMvZ2FtZS91aS9HYW1lT3Zlck1vZGFsL0dhbWVNb2RhbC5tb2R1bGUuY3NzPzE3YTEiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3NoYXJlZC91aS9Nb2RhbC9Nb2RhbC5tb2R1bGUuY3NzPzFmY2MiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3NoYXJlZC91aS9Nb2RhbC9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3NoYXJlZC91aS9Nb2RhbC9pbmRleC50cyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvcGFnZXMvZ2FtZS91aS9HYW1lT3Zlck1vZGFsL0dhbWVPdmVyTW9kYWwudHN4Iiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9wYWdlcy9nYW1lL3VpL0dhbWVPdmVyTW9kYWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvR2FtZVdpbk1vZGFsL0dhbWVXaW5Nb2RhbC5tb2R1bGUuY3NzPzdmYTEiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvR2FtZVdpbk1vZGFsL0dhbWVXaW5Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvR2FtZVdpbk1vZGFsL2luZGV4LnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9wYWdlcy9nYW1lL3VpL0dhbWVDb250YWluZXIvR2FtZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvR2FtZUNvbnRhaW5lci9pbmRleC50cyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvcGFnZXMvZ2FtZS91aS9HYW1lUGFnZS50c3giLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL2FwcC9zdG9yZXMvbWFpblN0b3JlLnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9hcHAvc3RvcmVzL2luZGV4LnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9hcHAvcHJvdmlkZXJzL01haW5Qcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL2FwcC9wcm92aWRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL2FwcC9BcHAudHN4Iiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbi8qXG4gTW9kZXJuaXpyIDMuMC4wcHJlIChDdXN0b20gQnVpbGQpIHwgTUlUXG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciBhYT1yZXF1aXJlKFwicmVhY3RcIiksY2E9cmVxdWlyZShcInNjaGVkdWxlclwiKTtmdW5jdGlvbiBwKGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifXZhciBkYT1uZXcgU2V0LGVhPXt9O2Z1bmN0aW9uIGZhKGEsYil7aGEoYSxiKTtoYShhK1wiQ2FwdHVyZVwiLGIpfVxuZnVuY3Rpb24gaGEoYSxiKXtlYVthXT1iO2ZvcihhPTA7YTxiLmxlbmd0aDthKyspZGEuYWRkKGJbYV0pfVxudmFyIGlhPSEoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KSxqYT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LGthPS9eWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXVs6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcLS4wLTlcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwXSokLyxsYT1cbnt9LG1hPXt9O2Z1bmN0aW9uIG9hKGEpe2lmKGphLmNhbGwobWEsYSkpcmV0dXJuITA7aWYoamEuY2FsbChsYSxhKSlyZXR1cm4hMTtpZihrYS50ZXN0KGEpKXJldHVybiBtYVthXT0hMDtsYVthXT0hMDtyZXR1cm4hMX1mdW5jdGlvbiBwYShhLGIsYyxkKXtpZihudWxsIT09YyYmMD09PWMudHlwZSlyZXR1cm4hMTtzd2l0Y2godHlwZW9mIGIpe2Nhc2UgXCJmdW5jdGlvblwiOmNhc2UgXCJzeW1ib2xcIjpyZXR1cm4hMDtjYXNlIFwiYm9vbGVhblwiOmlmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpcmV0dXJuIWMuYWNjZXB0c0Jvb2xlYW5zO2E9YS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsNSk7cmV0dXJuXCJkYXRhLVwiIT09YSYmXCJhcmlhLVwiIT09YTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIHFhKGEsYixjLGQpe2lmKG51bGw9PT1ifHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIGJ8fHBhKGEsYixjLGQpKXJldHVybiEwO2lmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpc3dpdGNoKGMudHlwZSl7Y2FzZSAzOnJldHVybiFiO2Nhc2UgNDpyZXR1cm4hMT09PWI7Y2FzZSA1OnJldHVybiBpc05hTihiKTtjYXNlIDY6cmV0dXJuIGlzTmFOKGIpfHwxPmJ9cmV0dXJuITF9ZnVuY3Rpb24gdihhLGIsYyxkLGUsZixnKXt0aGlzLmFjY2VwdHNCb29sZWFucz0yPT09Ynx8Mz09PWJ8fDQ9PT1iO3RoaXMuYXR0cmlidXRlTmFtZT1kO3RoaXMuYXR0cmlidXRlTmFtZXNwYWNlPWU7dGhpcy5tdXN0VXNlUHJvcGVydHk9Yzt0aGlzLnByb3BlcnR5TmFtZT1hO3RoaXMudHlwZT1iO3RoaXMuc2FuaXRpemVVUkw9Zjt0aGlzLnJlbW92ZUVtcHR5U3RyaW5nPWd9dmFyIHo9e307XG5cImNoaWxkcmVuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIGRlZmF1bHRWYWx1ZSBkZWZhdWx0Q2hlY2tlZCBpbm5lckhUTUwgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZyBzdHlsZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3pbYV09bmV3IHYoYSwwLCExLGEsbnVsbCwhMSwhMSl9KTtbW1wiYWNjZXB0Q2hhcnNldFwiLFwiYWNjZXB0LWNoYXJzZXRcIl0sW1wiY2xhc3NOYW1lXCIsXCJjbGFzc1wiXSxbXCJodG1sRm9yXCIsXCJmb3JcIl0sW1wiaHR0cEVxdWl2XCIsXCJodHRwLWVxdWl2XCJdXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWFbMF07eltiXT1uZXcgdihiLDEsITEsYVsxXSxudWxsLCExLCExKX0pO1tcImNvbnRlbnRFZGl0YWJsZVwiLFwiZHJhZ2dhYmxlXCIsXCJzcGVsbENoZWNrXCIsXCJ2YWx1ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3pbYV09bmV3IHYoYSwyLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuW1wiYXV0b1JldmVyc2VcIixcImV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWRcIixcImZvY3VzYWJsZVwiLFwicHJlc2VydmVBbHBoYVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3pbYV09bmV3IHYoYSwyLCExLGEsbnVsbCwhMSwhMSl9KTtcImFsbG93RnVsbFNjcmVlbiBhc3luYyBhdXRvRm9jdXMgYXV0b1BsYXkgY29udHJvbHMgZGVmYXVsdCBkZWZlciBkaXNhYmxlZCBkaXNhYmxlUGljdHVyZUluUGljdHVyZSBkaXNhYmxlUmVtb3RlUGxheWJhY2sgZm9ybU5vVmFsaWRhdGUgaGlkZGVuIGxvb3Agbm9Nb2R1bGUgbm9WYWxpZGF0ZSBvcGVuIHBsYXlzSW5saW5lIHJlYWRPbmx5IHJlcXVpcmVkIHJldmVyc2VkIHNjb3BlZCBzZWFtbGVzcyBpdGVtU2NvcGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMywhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbltcImNoZWNrZWRcIixcIm11bHRpcGxlXCIsXCJtdXRlZFwiLFwic2VsZWN0ZWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMywhMCxhLG51bGwsITEsITEpfSk7W1wiY2FwdHVyZVwiLFwiZG93bmxvYWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsNCwhMSxhLG51bGwsITEsITEpfSk7W1wiY29sc1wiLFwicm93c1wiLFwic2l6ZVwiLFwic3BhblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3pbYV09bmV3IHYoYSw2LCExLGEsbnVsbCwhMSwhMSl9KTtbXCJyb3dTcGFuXCIsXCJzdGFydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3pbYV09bmV3IHYoYSw1LCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO3ZhciByYT0vW1xcLTpdKFthLXpdKS9nO2Z1bmN0aW9uIHNhKGEpe3JldHVybiBhWzFdLnRvVXBwZXJDYXNlKCl9XG5cImFjY2VudC1oZWlnaHQgYWxpZ25tZW50LWJhc2VsaW5lIGFyYWJpYy1mb3JtIGJhc2VsaW5lLXNoaWZ0IGNhcC1oZWlnaHQgY2xpcC1wYXRoIGNsaXAtcnVsZSBjb2xvci1pbnRlcnBvbGF0aW9uIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBjb2xvci1wcm9maWxlIGNvbG9yLXJlbmRlcmluZyBkb21pbmFudC1iYXNlbGluZSBlbmFibGUtYmFja2dyb3VuZCBmaWxsLW9wYWNpdHkgZmlsbC1ydWxlIGZsb29kLWNvbG9yIGZsb29kLW9wYWNpdHkgZm9udC1mYW1pbHkgZm9udC1zaXplIGZvbnQtc2l6ZS1hZGp1c3QgZm9udC1zdHJldGNoIGZvbnQtc3R5bGUgZm9udC12YXJpYW50IGZvbnQtd2VpZ2h0IGdseXBoLW5hbWUgZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCBnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCBob3Jpei1hZHYteCBob3Jpei1vcmlnaW4teCBpbWFnZS1yZW5kZXJpbmcgbGV0dGVyLXNwYWNpbmcgbGlnaHRpbmctY29sb3IgbWFya2VyLWVuZCBtYXJrZXItbWlkIG1hcmtlci1zdGFydCBvdmVybGluZS1wb3NpdGlvbiBvdmVybGluZS10aGlja25lc3MgcGFpbnQtb3JkZXIgcGFub3NlLTEgcG9pbnRlci1ldmVudHMgcmVuZGVyaW5nLWludGVudCBzaGFwZS1yZW5kZXJpbmcgc3RvcC1jb2xvciBzdG9wLW9wYWNpdHkgc3RyaWtldGhyb3VnaC1wb3NpdGlvbiBzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcyBzdHJva2UtZGFzaGFycmF5IHN0cm9rZS1kYXNob2Zmc2V0IHN0cm9rZS1saW5lY2FwIHN0cm9rZS1saW5lam9pbiBzdHJva2UtbWl0ZXJsaW1pdCBzdHJva2Utb3BhY2l0eSBzdHJva2Utd2lkdGggdGV4dC1hbmNob3IgdGV4dC1kZWNvcmF0aW9uIHRleHQtcmVuZGVyaW5nIHVuZGVybGluZS1wb3NpdGlvbiB1bmRlcmxpbmUtdGhpY2tuZXNzIHVuaWNvZGUtYmlkaSB1bmljb2RlLXJhbmdlIHVuaXRzLXBlci1lbSB2LWFscGhhYmV0aWMgdi1oYW5naW5nIHYtaWRlb2dyYXBoaWMgdi1tYXRoZW1hdGljYWwgdmVjdG9yLWVmZmVjdCB2ZXJ0LWFkdi15IHZlcnQtb3JpZ2luLXggdmVydC1vcmlnaW4teSB3b3JkLXNwYWNpbmcgd3JpdGluZy1tb2RlIHhtbG5zOnhsaW5rIHgtaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHJhLFxuc2EpO3pbYl09bmV3IHYoYiwxLCExLGEsbnVsbCwhMSwhMSl9KTtcInhsaW5rOmFjdHVhdGUgeGxpbms6YXJjcm9sZSB4bGluazpyb2xlIHhsaW5rOnNob3cgeGxpbms6dGl0bGUgeGxpbms6dHlwZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShyYSxzYSk7eltiXT1uZXcgdihiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMSwhMSl9KTtbXCJ4bWw6YmFzZVwiLFwieG1sOmxhbmdcIixcInhtbDpzcGFjZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShyYSxzYSk7eltiXT1uZXcgdihiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLCExLCExKX0pO1tcInRhYkluZGV4XCIsXCJjcm9zc09yaWdpblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3pbYV09bmV3IHYoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuei54bGlua0hyZWY9bmV3IHYoXCJ4bGlua0hyZWZcIiwxLCExLFwieGxpbms6aHJlZlwiLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCEwLCExKTtbXCJzcmNcIixcImhyZWZcIixcImFjdGlvblwiLFwiZm9ybUFjdGlvblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3pbYV09bmV3IHYoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCEwLCEwKX0pO1xuZnVuY3Rpb24gdGEoYSxiLGMsZCl7dmFyIGU9ei5oYXNPd25Qcm9wZXJ0eShiKT96W2JdOm51bGw7aWYobnVsbCE9PWU/MCE9PWUudHlwZTpkfHwhKDI8Yi5sZW5ndGgpfHxcIm9cIiE9PWJbMF0mJlwiT1wiIT09YlswXXx8XCJuXCIhPT1iWzFdJiZcIk5cIiE9PWJbMV0pcWEoYixjLGUsZCkmJihjPW51bGwpLGR8fG51bGw9PT1lP29hKGIpJiYobnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6YS5zZXRBdHRyaWJ1dGUoYixcIlwiK2MpKTplLm11c3RVc2VQcm9wZXJ0eT9hW2UucHJvcGVydHlOYW1lXT1udWxsPT09Yz8zPT09ZS50eXBlPyExOlwiXCI6YzooYj1lLmF0dHJpYnV0ZU5hbWUsZD1lLmF0dHJpYnV0ZU5hbWVzcGFjZSxudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTooZT1lLnR5cGUsYz0zPT09ZXx8ND09PWUmJiEwPT09Yz9cIlwiOlwiXCIrYyxkP2Euc2V0QXR0cmlidXRlTlMoZCxiLGMpOmEuc2V0QXR0cmlidXRlKGIsYykpKX1cbnZhciB1YT1hYS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCx2YT1TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSx3YT1TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpLHlhPVN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKSx6YT1TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIiksQWE9U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpLEJhPVN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKSxDYT1TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKSxEYT1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksRWE9U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpLEZhPVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpLEdhPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLEhhPVN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpO1N5bWJvbC5mb3IoXCJyZWFjdC5zY29wZVwiKTtTeW1ib2wuZm9yKFwicmVhY3QuZGVidWdfdHJhY2VfbW9kZVwiKTtcbnZhciBJYT1TeW1ib2wuZm9yKFwicmVhY3Qub2Zmc2NyZWVuXCIpO1N5bWJvbC5mb3IoXCJyZWFjdC5sZWdhY3lfaGlkZGVuXCIpO1N5bWJvbC5mb3IoXCJyZWFjdC5jYWNoZVwiKTtTeW1ib2wuZm9yKFwicmVhY3QudHJhY2luZ19tYXJrZXJcIik7dmFyIEphPVN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBLYShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9SmEmJmFbSmFdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9dmFyIEE9T2JqZWN0LmFzc2lnbixMYTtmdW5jdGlvbiBNYShhKXtpZih2b2lkIDA9PT1MYSl0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2goYyl7dmFyIGI9Yy5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtMYT1iJiZiWzFdfHxcIlwifXJldHVyblwiXFxuXCIrTGErYX12YXIgTmE9ITE7XG5mdW5jdGlvbiBPYShhLGIpe2lmKCFhfHxOYSlyZXR1cm5cIlwiO05hPSEwO3ZhciBjPUVycm9yLnByZXBhcmVTdGFja1RyYWNlO0Vycm9yLnByZXBhcmVTdGFja1RyYWNlPXZvaWQgMDt0cnl7aWYoYilpZihiPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoKTt9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLnByb3RvdHlwZSxcInByb3BzXCIse3NldDpmdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fX0pLFwib2JqZWN0XCI9PT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5jb25zdHJ1Y3Qpe3RyeXtSZWZsZWN0LmNvbnN0cnVjdChiLFtdKX1jYXRjaChsKXt2YXIgZD1sfVJlZmxlY3QuY29uc3RydWN0KGEsW10sYil9ZWxzZXt0cnl7Yi5jYWxsKCl9Y2F0Y2gobCl7ZD1sfWEuY2FsbChiLnByb3RvdHlwZSl9ZWxzZXt0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2gobCl7ZD1sfWEoKX19Y2F0Y2gobCl7aWYobCYmZCYmXCJzdHJpbmdcIj09PXR5cGVvZiBsLnN0YWNrKXtmb3IodmFyIGU9bC5zdGFjay5zcGxpdChcIlxcblwiKSxcbmY9ZC5zdGFjay5zcGxpdChcIlxcblwiKSxnPWUubGVuZ3RoLTEsaD1mLmxlbmd0aC0xOzE8PWcmJjA8PWgmJmVbZ10hPT1mW2hdOyloLS07Zm9yKDsxPD1nJiYwPD1oO2ctLSxoLS0paWYoZVtnXSE9PWZbaF0pe2lmKDEhPT1nfHwxIT09aCl7ZG8gaWYoZy0tLGgtLSwwPmh8fGVbZ10hPT1mW2hdKXt2YXIgaz1cIlxcblwiK2VbZ10ucmVwbGFjZShcIiBhdCBuZXcgXCIsXCIgYXQgXCIpO2EuZGlzcGxheU5hbWUmJmsuaW5jbHVkZXMoXCI8YW5vbnltb3VzPlwiKSYmKGs9ay5yZXBsYWNlKFwiPGFub255bW91cz5cIixhLmRpc3BsYXlOYW1lKSk7cmV0dXJuIGt9d2hpbGUoMTw9ZyYmMDw9aCl9YnJlYWt9fX1maW5hbGx5e05hPSExLEVycm9yLnByZXBhcmVTdGFja1RyYWNlPWN9cmV0dXJuKGE9YT9hLmRpc3BsYXlOYW1lfHxhLm5hbWU6XCJcIik/TWEoYSk6XCJcIn1cbmZ1bmN0aW9uIFBhKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnJldHVybiBNYShhLnR5cGUpO2Nhc2UgMTY6cmV0dXJuIE1hKFwiTGF6eVwiKTtjYXNlIDEzOnJldHVybiBNYShcIlN1c3BlbnNlXCIpO2Nhc2UgMTk6cmV0dXJuIE1hKFwiU3VzcGVuc2VMaXN0XCIpO2Nhc2UgMDpjYXNlIDI6Y2FzZSAxNTpyZXR1cm4gYT1PYShhLnR5cGUsITEpLGE7Y2FzZSAxMTpyZXR1cm4gYT1PYShhLnR5cGUucmVuZGVyLCExKSxhO2Nhc2UgMTpyZXR1cm4gYT1PYShhLnR5cGUsITApLGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1cbmZ1bmN0aW9uIFFhKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGEuZGlzcGxheU5hbWV8fGEubmFtZXx8bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpcmV0dXJuIGE7c3dpdGNoKGEpe2Nhc2UgeWE6cmV0dXJuXCJGcmFnbWVudFwiO2Nhc2Ugd2E6cmV0dXJuXCJQb3J0YWxcIjtjYXNlIEFhOnJldHVyblwiUHJvZmlsZXJcIjtjYXNlIHphOnJldHVyblwiU3RyaWN0TW9kZVwiO2Nhc2UgRWE6cmV0dXJuXCJTdXNwZW5zZVwiO2Nhc2UgRmE6cmV0dXJuXCJTdXNwZW5zZUxpc3RcIn1pZihcIm9iamVjdFwiPT09dHlwZW9mIGEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgQ2E6cmV0dXJuKGEuZGlzcGxheU5hbWV8fFwiQ29udGV4dFwiKStcIi5Db25zdW1lclwiO2Nhc2UgQmE6cmV0dXJuKGEuX2NvbnRleHQuZGlzcGxheU5hbWV8fFwiQ29udGV4dFwiKStcIi5Qcm92aWRlclwiO2Nhc2UgRGE6dmFyIGI9YS5yZW5kZXI7YT1hLmRpc3BsYXlOYW1lO2F8fChhPWIuZGlzcGxheU5hbWV8fFxuYi5uYW1lfHxcIlwiLGE9XCJcIiE9PWE/XCJGb3J3YXJkUmVmKFwiK2ErXCIpXCI6XCJGb3J3YXJkUmVmXCIpO3JldHVybiBhO2Nhc2UgR2E6cmV0dXJuIGI9YS5kaXNwbGF5TmFtZXx8bnVsbCxudWxsIT09Yj9iOlFhKGEudHlwZSl8fFwiTWVtb1wiO2Nhc2UgSGE6Yj1hLl9wYXlsb2FkO2E9YS5faW5pdDt0cnl7cmV0dXJuIFFhKGEoYikpfWNhdGNoKGMpe319cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBSYShhKXt2YXIgYj1hLnR5cGU7c3dpdGNoKGEudGFnKXtjYXNlIDI0OnJldHVyblwiQ2FjaGVcIjtjYXNlIDk6cmV0dXJuKGIuZGlzcGxheU5hbWV8fFwiQ29udGV4dFwiKStcIi5Db25zdW1lclwiO2Nhc2UgMTA6cmV0dXJuKGIuX2NvbnRleHQuZGlzcGxheU5hbWV8fFwiQ29udGV4dFwiKStcIi5Qcm92aWRlclwiO2Nhc2UgMTg6cmV0dXJuXCJEZWh5ZHJhdGVkRnJhZ21lbnRcIjtjYXNlIDExOnJldHVybiBhPWIucmVuZGVyLGE9YS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxcIlwiLGIuZGlzcGxheU5hbWV8fChcIlwiIT09YT9cIkZvcndhcmRSZWYoXCIrYStcIilcIjpcIkZvcndhcmRSZWZcIik7Y2FzZSA3OnJldHVyblwiRnJhZ21lbnRcIjtjYXNlIDU6cmV0dXJuIGI7Y2FzZSA0OnJldHVyblwiUG9ydGFsXCI7Y2FzZSAzOnJldHVyblwiUm9vdFwiO2Nhc2UgNjpyZXR1cm5cIlRleHRcIjtjYXNlIDE2OnJldHVybiBRYShiKTtjYXNlIDg6cmV0dXJuIGI9PT16YT9cIlN0cmljdE1vZGVcIjpcIk1vZGVcIjtjYXNlIDIyOnJldHVyblwiT2Zmc2NyZWVuXCI7XG5jYXNlIDEyOnJldHVyblwiUHJvZmlsZXJcIjtjYXNlIDIxOnJldHVyblwiU2NvcGVcIjtjYXNlIDEzOnJldHVyblwiU3VzcGVuc2VcIjtjYXNlIDE5OnJldHVyblwiU3VzcGVuc2VMaXN0XCI7Y2FzZSAyNTpyZXR1cm5cIlRyYWNpbmdNYXJrZXJcIjtjYXNlIDE6Y2FzZSAwOmNhc2UgMTc6Y2FzZSAyOmNhc2UgMTQ6Y2FzZSAxNTppZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYilyZXR1cm4gYi5kaXNwbGF5TmFtZXx8Yi5uYW1lfHxudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYilyZXR1cm4gYn1yZXR1cm4gbnVsbH1mdW5jdGlvbiBTYShhKXtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwidW5kZWZpbmVkXCI6cmV0dXJuIGE7Y2FzZSBcIm9iamVjdFwiOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuXCJcIn19XG5mdW5jdGlvbiBUYShhKXt2YXIgYj1hLnR5cGU7cmV0dXJuKGE9YS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWEudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWJ8fFwicmFkaW9cIj09PWIpfVxuZnVuY3Rpb24gVWEoYSl7dmFyIGI9VGEoYSk/XCJjaGVja2VkXCI6XCJ2YWx1ZVwiLGM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxiKSxkPVwiXCIrYVtiXTtpZighYS5oYXNPd25Qcm9wZXJ0eShiKSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5nZXQmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnNldCl7dmFyIGU9Yy5nZXQsZj1jLnNldDtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sc2V0OmZ1bmN0aW9uKGEpe2Q9XCJcIithO2YuY2FsbCh0aGlzLGEpfX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlfSk7cmV0dXJue2dldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGR9LHNldFZhbHVlOmZ1bmN0aW9uKGEpe2Q9XCJcIithfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXthLl92YWx1ZVRyYWNrZXI9XG5udWxsO2RlbGV0ZSBhW2JdfX19fWZ1bmN0aW9uIFZhKGEpe2EuX3ZhbHVlVHJhY2tlcnx8KGEuX3ZhbHVlVHJhY2tlcj1VYShhKSl9ZnVuY3Rpb24gV2EoYSl7aWYoIWEpcmV0dXJuITE7dmFyIGI9YS5fdmFsdWVUcmFja2VyO2lmKCFiKXJldHVybiEwO3ZhciBjPWIuZ2V0VmFsdWUoKTt2YXIgZD1cIlwiO2EmJihkPVRhKGEpP2EuY2hlY2tlZD9cInRydWVcIjpcImZhbHNlXCI6YS52YWx1ZSk7YT1kO3JldHVybiBhIT09Yz8oYi5zZXRWYWx1ZShhKSwhMCk6ITF9ZnVuY3Rpb24gWGEoYSl7YT1hfHwoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudD9kb2N1bWVudDp2b2lkIDApO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIGEuYWN0aXZlRWxlbWVudHx8YS5ib2R5fWNhdGNoKGIpe3JldHVybiBhLmJvZHl9fVxuZnVuY3Rpb24gWWEoYSxiKXt2YXIgYz1iLmNoZWNrZWQ7cmV0dXJuIEEoe30sYix7ZGVmYXVsdENoZWNrZWQ6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsdmFsdWU6dm9pZCAwLGNoZWNrZWQ6bnVsbCE9Yz9jOmEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZH0pfWZ1bmN0aW9uIFphKGEsYil7dmFyIGM9bnVsbD09Yi5kZWZhdWx0VmFsdWU/XCJcIjpiLmRlZmF1bHRWYWx1ZSxkPW51bGwhPWIuY2hlY2tlZD9iLmNoZWNrZWQ6Yi5kZWZhdWx0Q2hlY2tlZDtjPVNhKG51bGwhPWIudmFsdWU/Yi52YWx1ZTpjKTthLl93cmFwcGVyU3RhdGU9e2luaXRpYWxDaGVja2VkOmQsaW5pdGlhbFZhbHVlOmMsY29udHJvbGxlZDpcImNoZWNrYm94XCI9PT1iLnR5cGV8fFwicmFkaW9cIj09PWIudHlwZT9udWxsIT1iLmNoZWNrZWQ6bnVsbCE9Yi52YWx1ZX19ZnVuY3Rpb24gYWIoYSxiKXtiPWIuY2hlY2tlZDtudWxsIT1iJiZ0YShhLFwiY2hlY2tlZFwiLGIsITEpfVxuZnVuY3Rpb24gYmIoYSxiKXthYihhLGIpO3ZhciBjPVNhKGIudmFsdWUpLGQ9Yi50eXBlO2lmKG51bGwhPWMpaWYoXCJudW1iZXJcIj09PWQpe2lmKDA9PT1jJiZcIlwiPT09YS52YWx1ZXx8YS52YWx1ZSE9YylhLnZhbHVlPVwiXCIrY31lbHNlIGEudmFsdWUhPT1cIlwiK2MmJihhLnZhbHVlPVwiXCIrYyk7ZWxzZSBpZihcInN1Ym1pdFwiPT09ZHx8XCJyZXNldFwiPT09ZCl7YS5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtyZXR1cm59Yi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpP2NiKGEsYi50eXBlLGMpOmIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikmJmNiKGEsYi50eXBlLFNhKGIuZGVmYXVsdFZhbHVlKSk7bnVsbD09Yi5jaGVja2VkJiZudWxsIT1iLmRlZmF1bHRDaGVja2VkJiYoYS5kZWZhdWx0Q2hlY2tlZD0hIWIuZGVmYXVsdENoZWNrZWQpfVxuZnVuY3Rpb24gZGIoYSxiLGMpe2lmKGIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKXx8Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSl7dmFyIGQ9Yi50eXBlO2lmKCEoXCJzdWJtaXRcIiE9PWQmJlwicmVzZXRcIiE9PWR8fHZvaWQgMCE9PWIudmFsdWUmJm51bGwhPT1iLnZhbHVlKSlyZXR1cm47Yj1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU7Y3x8Yj09PWEudmFsdWV8fChhLnZhbHVlPWIpO2EuZGVmYXVsdFZhbHVlPWJ9Yz1hLm5hbWU7XCJcIiE9PWMmJihhLm5hbWU9XCJcIik7YS5kZWZhdWx0Q2hlY2tlZD0hIWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZDtcIlwiIT09YyYmKGEubmFtZT1jKX1cbmZ1bmN0aW9uIGNiKGEsYixjKXtpZihcIm51bWJlclwiIT09Ynx8WGEoYS5vd25lckRvY3VtZW50KSE9PWEpbnVsbD09Yz9hLmRlZmF1bHRWYWx1ZT1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU6YS5kZWZhdWx0VmFsdWUhPT1cIlwiK2MmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2MpfXZhciBlYj1BcnJheS5pc0FycmF5O1xuZnVuY3Rpb24gZmIoYSxiLGMsZCl7YT1hLm9wdGlvbnM7aWYoYil7Yj17fTtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyliW1wiJFwiK2NbZV1dPSEwO2ZvcihjPTA7YzxhLmxlbmd0aDtjKyspZT1iLmhhc093blByb3BlcnR5KFwiJFwiK2FbY10udmFsdWUpLGFbY10uc2VsZWN0ZWQhPT1lJiYoYVtjXS5zZWxlY3RlZD1lKSxlJiZkJiYoYVtjXS5kZWZhdWx0U2VsZWN0ZWQ9ITApfWVsc2V7Yz1cIlwiK1NhKGMpO2I9bnVsbDtmb3IoZT0wO2U8YS5sZW5ndGg7ZSsrKXtpZihhW2VdLnZhbHVlPT09Yyl7YVtlXS5zZWxlY3RlZD0hMDtkJiYoYVtlXS5kZWZhdWx0U2VsZWN0ZWQ9ITApO3JldHVybn1udWxsIT09Ynx8YVtlXS5kaXNhYmxlZHx8KGI9YVtlXSl9bnVsbCE9PWImJihiLnNlbGVjdGVkPSEwKX19XG5mdW5jdGlvbiBnYihhLGIpe2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpdGhyb3cgRXJyb3IocCg5MSkpO3JldHVybiBBKHt9LGIse3ZhbHVlOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLGNoaWxkcmVuOlwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZX0pfWZ1bmN0aW9uIGhiKGEsYil7dmFyIGM9Yi52YWx1ZTtpZihudWxsPT1jKXtjPWIuY2hpbGRyZW47Yj1iLmRlZmF1bHRWYWx1ZTtpZihudWxsIT1jKXtpZihudWxsIT1iKXRocm93IEVycm9yKHAoOTIpKTtpZihlYihjKSl7aWYoMTxjLmxlbmd0aCl0aHJvdyBFcnJvcihwKDkzKSk7Yz1jWzBdfWI9Y31udWxsPT1iJiYoYj1cIlwiKTtjPWJ9YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsVmFsdWU6U2EoYyl9fVxuZnVuY3Rpb24gaWIoYSxiKXt2YXIgYz1TYShiLnZhbHVlKSxkPVNhKGIuZGVmYXVsdFZhbHVlKTtudWxsIT1jJiYoYz1cIlwiK2MsYyE9PWEudmFsdWUmJihhLnZhbHVlPWMpLG51bGw9PWIuZGVmYXVsdFZhbHVlJiZhLmRlZmF1bHRWYWx1ZSE9PWMmJihhLmRlZmF1bHRWYWx1ZT1jKSk7bnVsbCE9ZCYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrZCl9ZnVuY3Rpb24gamIoYSl7dmFyIGI9YS50ZXh0Q29udGVudDtiPT09YS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZSYmXCJcIiE9PWImJm51bGwhPT1iJiYoYS52YWx1ZT1iKX1mdW5jdGlvbiBrYihhKXtzd2l0Y2goYSl7Y2FzZSBcInN2Z1wiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtjYXNlIFwibWF0aFwiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiO2RlZmF1bHQ6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJ9fVxuZnVuY3Rpb24gbGIoYSxiKXtyZXR1cm4gbnVsbD09YXx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1hP2tiKGIpOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09PWEmJlwiZm9yZWlnbk9iamVjdFwiPT09Yj9cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjphfVxudmFyIG1iLG5iPWZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgTVNBcHAmJk1TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uP2Z1bmN0aW9uKGIsYyxkLGUpe01TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uKGZ1bmN0aW9uKCl7cmV0dXJuIGEoYixjLGQsZSl9KX06YX0oZnVuY3Rpb24oYSxiKXtpZihcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIhPT1hLm5hbWVzcGFjZVVSSXx8XCJpbm5lckhUTUxcImluIGEpYS5pbm5lckhUTUw9YjtlbHNle21iPW1ifHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO21iLmlubmVySFRNTD1cIjxzdmc+XCIrYi52YWx1ZU9mKCkudG9TdHJpbmcoKStcIjwvc3ZnPlwiO2ZvcihiPW1iLmZpcnN0Q2hpbGQ7YS5maXJzdENoaWxkOylhLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEuYXBwZW5kQ2hpbGQoYi5maXJzdENoaWxkKX19KTtcbmZ1bmN0aW9uIG9iKGEsYil7aWYoYil7dmFyIGM9YS5maXJzdENoaWxkO2lmKGMmJmM9PT1hLmxhc3RDaGlsZCYmMz09PWMubm9kZVR5cGUpe2Mubm9kZVZhbHVlPWI7cmV0dXJufX1hLnRleHRDb250ZW50PWJ9XG52YXIgcGI9e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGFzcGVjdFJhdGlvOiEwLGJvcmRlckltYWdlT3V0c2V0OiEwLGJvcmRlckltYWdlU2xpY2U6ITAsYm9yZGVySW1hZ2VXaWR0aDohMCxib3hGbGV4OiEwLGJveEZsZXhHcm91cDohMCxib3hPcmRpbmFsR3JvdXA6ITAsY29sdW1uQ291bnQ6ITAsY29sdW1uczohMCxmbGV4OiEwLGZsZXhHcm93OiEwLGZsZXhQb3NpdGl2ZTohMCxmbGV4U2hyaW5rOiEwLGZsZXhOZWdhdGl2ZTohMCxmbGV4T3JkZXI6ITAsZ3JpZEFyZWE6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTcGFuOiEwLGdyaWRSb3dTdGFydDohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblNwYW46ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGZvbnRXZWlnaHQ6ITAsbGluZUNsYW1wOiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHRhYlNpemU6ITAsd2lkb3dzOiEwLHpJbmRleDohMCxcbnpvb206ITAsZmlsbE9wYWNpdHk6ITAsZmxvb2RPcGFjaXR5OiEwLHN0b3BPcGFjaXR5OiEwLHN0cm9rZURhc2hhcnJheTohMCxzdHJva2VEYXNob2Zmc2V0OiEwLHN0cm9rZU1pdGVybGltaXQ6ITAsc3Ryb2tlT3BhY2l0eTohMCxzdHJva2VXaWR0aDohMH0scWI9W1wiV2Via2l0XCIsXCJtc1wiLFwiTW96XCIsXCJPXCJdO09iamVjdC5rZXlzKHBiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3FiLmZvckVhY2goZnVuY3Rpb24oYil7Yj1iK2EuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zdWJzdHJpbmcoMSk7cGJbYl09cGJbYV19KX0pO2Z1bmN0aW9uIHJiKGEsYixjKXtyZXR1cm4gbnVsbD09Ynx8XCJib29sZWFuXCI9PT10eXBlb2YgYnx8XCJcIj09PWI/XCJcIjpjfHxcIm51bWJlclwiIT09dHlwZW9mIGJ8fDA9PT1ifHxwYi5oYXNPd25Qcm9wZXJ0eShhKSYmcGJbYV0/KFwiXCIrYikudHJpbSgpOmIrXCJweFwifVxuZnVuY3Rpb24gc2IoYSxiKXthPWEuc3R5bGU7Zm9yKHZhciBjIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShjKSl7dmFyIGQ9MD09PWMuaW5kZXhPZihcIi0tXCIpLGU9cmIoYyxiW2NdLGQpO1wiZmxvYXRcIj09PWMmJihjPVwiY3NzRmxvYXRcIik7ZD9hLnNldFByb3BlcnR5KGMsZSk6YVtjXT1lfX12YXIgdGI9QSh7bWVudWl0ZW06ITB9LHthcmVhOiEwLGJhc2U6ITAsYnI6ITAsY29sOiEwLGVtYmVkOiEwLGhyOiEwLGltZzohMCxpbnB1dDohMCxrZXlnZW46ITAsbGluazohMCxtZXRhOiEwLHBhcmFtOiEwLHNvdXJjZTohMCx0cmFjazohMCx3YnI6ITB9KTtcbmZ1bmN0aW9uIHViKGEsYil7aWYoYil7aWYodGJbYV0mJihudWxsIT1iLmNoaWxkcmVufHxudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSl0aHJvdyBFcnJvcihwKDEzNyxhKSk7aWYobnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCl7aWYobnVsbCE9Yi5jaGlsZHJlbil0aHJvdyBFcnJvcihwKDYwKSk7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfHwhKFwiX19odG1sXCJpbiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSl0aHJvdyBFcnJvcihwKDYxKSk7fWlmKG51bGwhPWIuc3R5bGUmJlwib2JqZWN0XCIhPT10eXBlb2YgYi5zdHlsZSl0aHJvdyBFcnJvcihwKDYyKSk7fX1cbmZ1bmN0aW9uIHZiKGEsYil7aWYoLTE9PT1hLmluZGV4T2YoXCItXCIpKXJldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYi5pcztzd2l0Y2goYSl7Y2FzZSBcImFubm90YXRpb24teG1sXCI6Y2FzZSBcImNvbG9yLXByb2ZpbGVcIjpjYXNlIFwiZm9udC1mYWNlXCI6Y2FzZSBcImZvbnQtZmFjZS1zcmNcIjpjYXNlIFwiZm9udC1mYWNlLXVyaVwiOmNhc2UgXCJmb250LWZhY2UtZm9ybWF0XCI6Y2FzZSBcImZvbnQtZmFjZS1uYW1lXCI6Y2FzZSBcIm1pc3NpbmctZ2x5cGhcIjpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiEwfX12YXIgd2I9bnVsbDtmdW5jdGlvbiB4YihhKXthPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnR8fHdpbmRvdzthLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50JiYoYT1hLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50KTtyZXR1cm4gMz09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmF9dmFyIHliPW51bGwsemI9bnVsbCxBYj1udWxsO1xuZnVuY3Rpb24gQmIoYSl7aWYoYT1DYihhKSl7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHliKXRocm93IEVycm9yKHAoMjgwKSk7dmFyIGI9YS5zdGF0ZU5vZGU7YiYmKGI9RGIoYikseWIoYS5zdGF0ZU5vZGUsYS50eXBlLGIpKX19ZnVuY3Rpb24gRWIoYSl7emI/QWI/QWIucHVzaChhKTpBYj1bYV06emI9YX1mdW5jdGlvbiBGYigpe2lmKHpiKXt2YXIgYT16YixiPUFiO0FiPXpiPW51bGw7QmIoYSk7aWYoYilmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKUJiKGJbYV0pfX1mdW5jdGlvbiBHYihhLGIpe3JldHVybiBhKGIpfWZ1bmN0aW9uIEhiKCl7fXZhciBJYj0hMTtmdW5jdGlvbiBKYihhLGIsYyl7aWYoSWIpcmV0dXJuIGEoYixjKTtJYj0hMDt0cnl7cmV0dXJuIEdiKGEsYixjKX1maW5hbGx5e2lmKEliPSExLG51bGwhPT16Ynx8bnVsbCE9PUFiKUhiKCksRmIoKX19XG5mdW5jdGlvbiBLYihhLGIpe3ZhciBjPWEuc3RhdGVOb2RlO2lmKG51bGw9PT1jKXJldHVybiBudWxsO3ZhciBkPURiKGMpO2lmKG51bGw9PT1kKXJldHVybiBudWxsO2M9ZFtiXTthOnN3aXRjaChiKXtjYXNlIFwib25DbGlja1wiOmNhc2UgXCJvbkNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbkRvdWJsZUNsaWNrXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VEb3duXCI6Y2FzZSBcIm9uTW91c2VEb3duQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlTW92ZVwiOmNhc2UgXCJvbk1vdXNlTW92ZUNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZVVwXCI6Y2FzZSBcIm9uTW91c2VVcENhcHR1cmVcIjpjYXNlIFwib25Nb3VzZUVudGVyXCI6KGQ9IWQuZGlzYWJsZWQpfHwoYT1hLnR5cGUsZD0hKFwiYnV0dG9uXCI9PT1hfHxcImlucHV0XCI9PT1hfHxcInNlbGVjdFwiPT09YXx8XCJ0ZXh0YXJlYVwiPT09YSkpO2E9IWQ7YnJlYWsgYTtkZWZhdWx0OmE9ITF9aWYoYSlyZXR1cm4gbnVsbDtpZihjJiZcImZ1bmN0aW9uXCIhPT1cbnR5cGVvZiBjKXRocm93IEVycm9yKHAoMjMxLGIsdHlwZW9mIGMpKTtyZXR1cm4gY312YXIgTGI9ITE7aWYoaWEpdHJ5e3ZhciBNYj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoTWIsXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe0xiPSEwfX0pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLE1iLE1iKTt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RcIixNYixNYil9Y2F0Y2goYSl7TGI9ITF9ZnVuY3Rpb24gTmIoYSxiLGMsZCxlLGYsZyxoLGspe3ZhciBsPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywzKTt0cnl7Yi5hcHBseShjLGwpfWNhdGNoKG0pe3RoaXMub25FcnJvcihtKX19dmFyIE9iPSExLFBiPW51bGwsUWI9ITEsUmI9bnVsbCxTYj17b25FcnJvcjpmdW5jdGlvbihhKXtPYj0hMDtQYj1hfX07ZnVuY3Rpb24gVGIoYSxiLGMsZCxlLGYsZyxoLGspe09iPSExO1BiPW51bGw7TmIuYXBwbHkoU2IsYXJndW1lbnRzKX1cbmZ1bmN0aW9uIFViKGEsYixjLGQsZSxmLGcsaCxrKXtUYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7aWYoT2Ipe2lmKE9iKXt2YXIgbD1QYjtPYj0hMTtQYj1udWxsfWVsc2UgdGhyb3cgRXJyb3IocCgxOTgpKTtRYnx8KFFiPSEwLFJiPWwpfX1mdW5jdGlvbiBWYihhKXt2YXIgYj1hLGM9YTtpZihhLmFsdGVybmF0ZSlmb3IoO2IucmV0dXJuOyliPWIucmV0dXJuO2Vsc2V7YT1iO2RvIGI9YSwwIT09KGIuZmxhZ3MmNDA5OCkmJihjPWIucmV0dXJuKSxhPWIucmV0dXJuO3doaWxlKGEpfXJldHVybiAzPT09Yi50YWc/YzpudWxsfWZ1bmN0aW9uIFdiKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPWEubWVtb2l6ZWRTdGF0ZTtudWxsPT09YiYmKGE9YS5hbHRlcm5hdGUsbnVsbCE9PWEmJihiPWEubWVtb2l6ZWRTdGF0ZSkpO2lmKG51bGwhPT1iKXJldHVybiBiLmRlaHlkcmF0ZWR9cmV0dXJuIG51bGx9ZnVuY3Rpb24gWGIoYSl7aWYoVmIoYSkhPT1hKXRocm93IEVycm9yKHAoMTg4KSk7fVxuZnVuY3Rpb24gWWIoYSl7dmFyIGI9YS5hbHRlcm5hdGU7aWYoIWIpe2I9VmIoYSk7aWYobnVsbD09PWIpdGhyb3cgRXJyb3IocCgxODgpKTtyZXR1cm4gYiE9PWE/bnVsbDphfWZvcih2YXIgYz1hLGQ9Yjs7KXt2YXIgZT1jLnJldHVybjtpZihudWxsPT09ZSlicmVhazt2YXIgZj1lLmFsdGVybmF0ZTtpZihudWxsPT09Zil7ZD1lLnJldHVybjtpZihudWxsIT09ZCl7Yz1kO2NvbnRpbnVlfWJyZWFrfWlmKGUuY2hpbGQ9PT1mLmNoaWxkKXtmb3IoZj1lLmNoaWxkO2Y7KXtpZihmPT09YylyZXR1cm4gWGIoZSksYTtpZihmPT09ZClyZXR1cm4gWGIoZSksYjtmPWYuc2libGluZ310aHJvdyBFcnJvcihwKDE4OCkpO31pZihjLnJldHVybiE9PWQucmV0dXJuKWM9ZSxkPWY7ZWxzZXtmb3IodmFyIGc9ITEsaD1lLmNoaWxkO2g7KXtpZihoPT09Yyl7Zz0hMDtjPWU7ZD1mO2JyZWFrfWlmKGg9PT1kKXtnPSEwO2Q9ZTtjPWY7YnJlYWt9aD1oLnNpYmxpbmd9aWYoIWcpe2ZvcihoPWYuY2hpbGQ7aDspe2lmKGg9PT1cbmMpe2c9ITA7Yz1mO2Q9ZTticmVha31pZihoPT09ZCl7Zz0hMDtkPWY7Yz1lO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXRocm93IEVycm9yKHAoMTg5KSk7fX1pZihjLmFsdGVybmF0ZSE9PWQpdGhyb3cgRXJyb3IocCgxOTApKTt9aWYoMyE9PWMudGFnKXRocm93IEVycm9yKHAoMTg4KSk7cmV0dXJuIGMuc3RhdGVOb2RlLmN1cnJlbnQ9PT1jP2E6Yn1mdW5jdGlvbiBaYihhKXthPVliKGEpO3JldHVybiBudWxsIT09YT8kYihhKTpudWxsfWZ1bmN0aW9uICRiKGEpe2lmKDU9PT1hLnRhZ3x8Nj09PWEudGFnKXJldHVybiBhO2ZvcihhPWEuY2hpbGQ7bnVsbCE9PWE7KXt2YXIgYj0kYihhKTtpZihudWxsIT09YilyZXR1cm4gYjthPWEuc2libGluZ31yZXR1cm4gbnVsbH1cbnZhciBhYz1jYS51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrLGJjPWNhLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrLGNjPWNhLnVuc3RhYmxlX3Nob3VsZFlpZWxkLGRjPWNhLnVuc3RhYmxlX3JlcXVlc3RQYWludCxCPWNhLnVuc3RhYmxlX25vdyxlYz1jYS51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCxmYz1jYS51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSxnYz1jYS51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSxoYz1jYS51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxpYz1jYS51bnN0YWJsZV9Mb3dQcmlvcml0eSxqYz1jYS51bnN0YWJsZV9JZGxlUHJpb3JpdHksa2M9bnVsbCxsYz1udWxsO2Z1bmN0aW9uIG1jKGEpe2lmKGxjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgbGMub25Db21taXRGaWJlclJvb3QpdHJ5e2xjLm9uQ29tbWl0RmliZXJSb290KGtjLGEsdm9pZCAwLDEyOD09PShhLmN1cnJlbnQuZmxhZ3MmMTI4KSl9Y2F0Y2goYil7fX1cbnZhciBvYz1NYXRoLmNsejMyP01hdGguY2x6MzI6bmMscGM9TWF0aC5sb2cscWM9TWF0aC5MTjI7ZnVuY3Rpb24gbmMoYSl7YT4+Pj0wO3JldHVybiAwPT09YT8zMjozMS0ocGMoYSkvcWN8MCl8MH12YXIgcmM9NjQsc2M9NDE5NDMwNDtcbmZ1bmN0aW9uIHRjKGEpe3N3aXRjaChhJi1hKXtjYXNlIDE6cmV0dXJuIDE7Y2FzZSAyOnJldHVybiAyO2Nhc2UgNDpyZXR1cm4gNDtjYXNlIDg6cmV0dXJuIDg7Y2FzZSAxNjpyZXR1cm4gMTY7Y2FzZSAzMjpyZXR1cm4gMzI7Y2FzZSA2NDpjYXNlIDEyODpjYXNlIDI1NjpjYXNlIDUxMjpjYXNlIDEwMjQ6Y2FzZSAyMDQ4OmNhc2UgNDA5NjpjYXNlIDgxOTI6Y2FzZSAxNjM4NDpjYXNlIDMyNzY4OmNhc2UgNjU1MzY6Y2FzZSAxMzEwNzI6Y2FzZSAyNjIxNDQ6Y2FzZSA1MjQyODg6Y2FzZSAxMDQ4NTc2OmNhc2UgMjA5NzE1MjpyZXR1cm4gYSY0MTk0MjQwO2Nhc2UgNDE5NDMwNDpjYXNlIDgzODg2MDg6Y2FzZSAxNjc3NzIxNjpjYXNlIDMzNTU0NDMyOmNhc2UgNjcxMDg4NjQ6cmV0dXJuIGEmMTMwMDIzNDI0O2Nhc2UgMTM0MjE3NzI4OnJldHVybiAxMzQyMTc3Mjg7Y2FzZSAyNjg0MzU0NTY6cmV0dXJuIDI2ODQzNTQ1NjtjYXNlIDUzNjg3MDkxMjpyZXR1cm4gNTM2ODcwOTEyO2Nhc2UgMTA3Mzc0MTgyNDpyZXR1cm4gMTA3Mzc0MTgyNDtcbmRlZmF1bHQ6cmV0dXJuIGF9fWZ1bmN0aW9uIHVjKGEsYil7dmFyIGM9YS5wZW5kaW5nTGFuZXM7aWYoMD09PWMpcmV0dXJuIDA7dmFyIGQ9MCxlPWEuc3VzcGVuZGVkTGFuZXMsZj1hLnBpbmdlZExhbmVzLGc9YyYyNjg0MzU0NTU7aWYoMCE9PWcpe3ZhciBoPWcmfmU7MCE9PWg/ZD10YyhoKTooZiY9ZywwIT09ZiYmKGQ9dGMoZikpKX1lbHNlIGc9YyZ+ZSwwIT09Zz9kPXRjKGcpOjAhPT1mJiYoZD10YyhmKSk7aWYoMD09PWQpcmV0dXJuIDA7aWYoMCE9PWImJmIhPT1kJiYwPT09KGImZSkmJihlPWQmLWQsZj1iJi1iLGU+PWZ8fDE2PT09ZSYmMCE9PShmJjQxOTQyNDApKSlyZXR1cm4gYjswIT09KGQmNCkmJihkfD1jJjE2KTtiPWEuZW50YW5nbGVkTGFuZXM7aWYoMCE9PWIpZm9yKGE9YS5lbnRhbmdsZW1lbnRzLGImPWQ7MDxiOyljPTMxLW9jKGIpLGU9MTw8YyxkfD1hW2NdLGImPX5lO3JldHVybiBkfVxuZnVuY3Rpb24gdmMoYSxiKXtzd2l0Y2goYSl7Y2FzZSAxOmNhc2UgMjpjYXNlIDQ6cmV0dXJuIGIrMjUwO2Nhc2UgODpjYXNlIDE2OmNhc2UgMzI6Y2FzZSA2NDpjYXNlIDEyODpjYXNlIDI1NjpjYXNlIDUxMjpjYXNlIDEwMjQ6Y2FzZSAyMDQ4OmNhc2UgNDA5NjpjYXNlIDgxOTI6Y2FzZSAxNjM4NDpjYXNlIDMyNzY4OmNhc2UgNjU1MzY6Y2FzZSAxMzEwNzI6Y2FzZSAyNjIxNDQ6Y2FzZSA1MjQyODg6Y2FzZSAxMDQ4NTc2OmNhc2UgMjA5NzE1MjpyZXR1cm4gYis1RTM7Y2FzZSA0MTk0MzA0OmNhc2UgODM4ODYwODpjYXNlIDE2Nzc3MjE2OmNhc2UgMzM1NTQ0MzI6Y2FzZSA2NzEwODg2NDpyZXR1cm4tMTtjYXNlIDEzNDIxNzcyODpjYXNlIDI2ODQzNTQ1NjpjYXNlIDUzNjg3MDkxMjpjYXNlIDEwNzM3NDE4MjQ6cmV0dXJuLTE7ZGVmYXVsdDpyZXR1cm4tMX19XG5mdW5jdGlvbiB3YyhhLGIpe2Zvcih2YXIgYz1hLnN1c3BlbmRlZExhbmVzLGQ9YS5waW5nZWRMYW5lcyxlPWEuZXhwaXJhdGlvblRpbWVzLGY9YS5wZW5kaW5nTGFuZXM7MDxmOyl7dmFyIGc9MzEtb2MoZiksaD0xPDxnLGs9ZVtnXTtpZigtMT09PWspe2lmKDA9PT0oaCZjKXx8MCE9PShoJmQpKWVbZ109dmMoaCxiKX1lbHNlIGs8PWImJihhLmV4cGlyZWRMYW5lc3w9aCk7ZiY9fmh9fWZ1bmN0aW9uIHhjKGEpe2E9YS5wZW5kaW5nTGFuZXMmLTEwNzM3NDE4MjU7cmV0dXJuIDAhPT1hP2E6YSYxMDczNzQxODI0PzEwNzM3NDE4MjQ6MH1mdW5jdGlvbiB5Yygpe3ZhciBhPXJjO3JjPDw9MTswPT09KHJjJjQxOTQyNDApJiYocmM9NjQpO3JldHVybiBhfWZ1bmN0aW9uIHpjKGEpe2Zvcih2YXIgYj1bXSxjPTA7MzE+YztjKyspYi5wdXNoKGEpO3JldHVybiBifVxuZnVuY3Rpb24gQWMoYSxiLGMpe2EucGVuZGluZ0xhbmVzfD1iOzUzNjg3MDkxMiE9PWImJihhLnN1c3BlbmRlZExhbmVzPTAsYS5waW5nZWRMYW5lcz0wKTthPWEuZXZlbnRUaW1lcztiPTMxLW9jKGIpO2FbYl09Y31mdW5jdGlvbiBCYyhhLGIpe3ZhciBjPWEucGVuZGluZ0xhbmVzJn5iO2EucGVuZGluZ0xhbmVzPWI7YS5zdXNwZW5kZWRMYW5lcz0wO2EucGluZ2VkTGFuZXM9MDthLmV4cGlyZWRMYW5lcyY9YjthLm11dGFibGVSZWFkTGFuZXMmPWI7YS5lbnRhbmdsZWRMYW5lcyY9YjtiPWEuZW50YW5nbGVtZW50czt2YXIgZD1hLmV2ZW50VGltZXM7Zm9yKGE9YS5leHBpcmF0aW9uVGltZXM7MDxjOyl7dmFyIGU9MzEtb2MoYyksZj0xPDxlO2JbZV09MDtkW2VdPS0xO2FbZV09LTE7YyY9fmZ9fVxuZnVuY3Rpb24gQ2MoYSxiKXt2YXIgYz1hLmVudGFuZ2xlZExhbmVzfD1iO2ZvcihhPWEuZW50YW5nbGVtZW50cztjOyl7dmFyIGQ9MzEtb2MoYyksZT0xPDxkO2UmYnxhW2RdJmImJihhW2RdfD1iKTtjJj1+ZX19dmFyIEM9MDtmdW5jdGlvbiBEYyhhKXthJj0tYTtyZXR1cm4gMTxhPzQ8YT8wIT09KGEmMjY4NDM1NDU1KT8xNjo1MzY4NzA5MTI6NDoxfXZhciBFYyxGYyxHYyxIYyxJYyxKYz0hMSxLYz1bXSxMYz1udWxsLE1jPW51bGwsTmM9bnVsbCxPYz1uZXcgTWFwLFBjPW5ldyBNYXAsUWM9W10sUmM9XCJtb3VzZWRvd24gbW91c2V1cCB0b3VjaGNhbmNlbCB0b3VjaGVuZCB0b3VjaHN0YXJ0IGF1eGNsaWNrIGRibGNsaWNrIHBvaW50ZXJjYW5jZWwgcG9pbnRlcmRvd24gcG9pbnRlcnVwIGRyYWdlbmQgZHJhZ3N0YXJ0IGRyb3AgY29tcG9zaXRpb25lbmQgY29tcG9zaXRpb25zdGFydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGlucHV0IHRleHRJbnB1dCBjb3B5IGN1dCBwYXN0ZSBjbGljayBjaGFuZ2UgY29udGV4dG1lbnUgcmVzZXQgc3VibWl0XCIuc3BsaXQoXCIgXCIpO1xuZnVuY3Rpb24gU2MoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjpjYXNlIFwiZm9jdXNvdXRcIjpMYz1udWxsO2JyZWFrO2Nhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6TWM9bnVsbDticmVhaztjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcIm1vdXNlb3V0XCI6TmM9bnVsbDticmVhaztjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcm91dFwiOk9jLmRlbGV0ZShiLnBvaW50ZXJJZCk7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOlBjLmRlbGV0ZShiLnBvaW50ZXJJZCl9fVxuZnVuY3Rpb24gVGMoYSxiLGMsZCxlLGYpe2lmKG51bGw9PT1hfHxhLm5hdGl2ZUV2ZW50IT09ZilyZXR1cm4gYT17YmxvY2tlZE9uOmIsZG9tRXZlbnROYW1lOmMsZXZlbnRTeXN0ZW1GbGFnczpkLG5hdGl2ZUV2ZW50OmYsdGFyZ2V0Q29udGFpbmVyczpbZV19LG51bGwhPT1iJiYoYj1DYihiKSxudWxsIT09YiYmRmMoYikpLGE7YS5ldmVudFN5c3RlbUZsYWdzfD1kO2I9YS50YXJnZXRDb250YWluZXJzO251bGwhPT1lJiYtMT09PWIuaW5kZXhPZihlKSYmYi5wdXNoKGUpO3JldHVybiBhfVxuZnVuY3Rpb24gVWMoYSxiLGMsZCxlKXtzd2l0Y2goYil7Y2FzZSBcImZvY3VzaW5cIjpyZXR1cm4gTGM9VGMoTGMsYSxiLGMsZCxlKSwhMDtjYXNlIFwiZHJhZ2VudGVyXCI6cmV0dXJuIE1jPVRjKE1jLGEsYixjLGQsZSksITA7Y2FzZSBcIm1vdXNlb3ZlclwiOnJldHVybiBOYz1UYyhOYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJwb2ludGVyb3ZlclwiOnZhciBmPWUucG9pbnRlcklkO09jLnNldChmLFRjKE9jLmdldChmKXx8bnVsbCxhLGIsYyxkLGUpKTtyZXR1cm4hMDtjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpyZXR1cm4gZj1lLnBvaW50ZXJJZCxQYy5zZXQoZixUYyhQYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSksITB9cmV0dXJuITF9XG5mdW5jdGlvbiBWYyhhKXt2YXIgYj1XYyhhLnRhcmdldCk7aWYobnVsbCE9PWIpe3ZhciBjPVZiKGIpO2lmKG51bGwhPT1jKWlmKGI9Yy50YWcsMTM9PT1iKXtpZihiPVdiKGMpLG51bGwhPT1iKXthLmJsb2NrZWRPbj1iO0ljKGEucHJpb3JpdHksZnVuY3Rpb24oKXtHYyhjKX0pO3JldHVybn19ZWxzZSBpZigzPT09YiYmYy5zdGF0ZU5vZGUuY3VycmVudC5tZW1vaXplZFN0YXRlLmlzRGVoeWRyYXRlZCl7YS5ibG9ja2VkT249Mz09PWMudGFnP2Muc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDtyZXR1cm59fWEuYmxvY2tlZE9uPW51bGx9XG5mdW5jdGlvbiBYYyhhKXtpZihudWxsIT09YS5ibG9ja2VkT24pcmV0dXJuITE7Zm9yKHZhciBiPWEudGFyZ2V0Q29udGFpbmVyczswPGIubGVuZ3RoOyl7dmFyIGM9WWMoYS5kb21FdmVudE5hbWUsYS5ldmVudFN5c3RlbUZsYWdzLGJbMF0sYS5uYXRpdmVFdmVudCk7aWYobnVsbD09PWMpe2M9YS5uYXRpdmVFdmVudDt2YXIgZD1uZXcgYy5jb25zdHJ1Y3RvcihjLnR5cGUsYyk7d2I9ZDtjLnRhcmdldC5kaXNwYXRjaEV2ZW50KGQpO3diPW51bGx9ZWxzZSByZXR1cm4gYj1DYihjKSxudWxsIT09YiYmRmMoYiksYS5ibG9ja2VkT249YywhMTtiLnNoaWZ0KCl9cmV0dXJuITB9ZnVuY3Rpb24gWmMoYSxiLGMpe1hjKGEpJiZjLmRlbGV0ZShiKX1mdW5jdGlvbiAkYygpe0pjPSExO251bGwhPT1MYyYmWGMoTGMpJiYoTGM9bnVsbCk7bnVsbCE9PU1jJiZYYyhNYykmJihNYz1udWxsKTtudWxsIT09TmMmJlhjKE5jKSYmKE5jPW51bGwpO09jLmZvckVhY2goWmMpO1BjLmZvckVhY2goWmMpfVxuZnVuY3Rpb24gYWQoYSxiKXthLmJsb2NrZWRPbj09PWImJihhLmJsb2NrZWRPbj1udWxsLEpjfHwoSmM9ITAsY2EudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayhjYS51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSwkYykpKX1cbmZ1bmN0aW9uIGJkKGEpe2Z1bmN0aW9uIGIoYil7cmV0dXJuIGFkKGIsYSl9aWYoMDxLYy5sZW5ndGgpe2FkKEtjWzBdLGEpO2Zvcih2YXIgYz0xO2M8S2MubGVuZ3RoO2MrKyl7dmFyIGQ9S2NbY107ZC5ibG9ja2VkT249PT1hJiYoZC5ibG9ja2VkT249bnVsbCl9fW51bGwhPT1MYyYmYWQoTGMsYSk7bnVsbCE9PU1jJiZhZChNYyxhKTtudWxsIT09TmMmJmFkKE5jLGEpO09jLmZvckVhY2goYik7UGMuZm9yRWFjaChiKTtmb3IoYz0wO2M8UWMubGVuZ3RoO2MrKylkPVFjW2NdLGQuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpO2Zvcig7MDxRYy5sZW5ndGgmJihjPVFjWzBdLG51bGw9PT1jLmJsb2NrZWRPbik7KVZjKGMpLG51bGw9PT1jLmJsb2NrZWRPbiYmUWMuc2hpZnQoKX12YXIgY2Q9dWEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsZGQ9ITA7XG5mdW5jdGlvbiBlZChhLGIsYyxkKXt2YXIgZT1DLGY9Y2QudHJhbnNpdGlvbjtjZC50cmFuc2l0aW9uPW51bGw7dHJ5e0M9MSxmZChhLGIsYyxkKX1maW5hbGx5e0M9ZSxjZC50cmFuc2l0aW9uPWZ9fWZ1bmN0aW9uIGdkKGEsYixjLGQpe3ZhciBlPUMsZj1jZC50cmFuc2l0aW9uO2NkLnRyYW5zaXRpb249bnVsbDt0cnl7Qz00LGZkKGEsYixjLGQpfWZpbmFsbHl7Qz1lLGNkLnRyYW5zaXRpb249Zn19XG5mdW5jdGlvbiBmZChhLGIsYyxkKXtpZihkZCl7dmFyIGU9WWMoYSxiLGMsZCk7aWYobnVsbD09PWUpaGQoYSxiLGQsaWQsYyksU2MoYSxkKTtlbHNlIGlmKFVjKGUsYSxiLGMsZCkpZC5zdG9wUHJvcGFnYXRpb24oKTtlbHNlIGlmKFNjKGEsZCksYiY0JiYtMTxSYy5pbmRleE9mKGEpKXtmb3IoO251bGwhPT1lOyl7dmFyIGY9Q2IoZSk7bnVsbCE9PWYmJkVjKGYpO2Y9WWMoYSxiLGMsZCk7bnVsbD09PWYmJmhkKGEsYixkLGlkLGMpO2lmKGY9PT1lKWJyZWFrO2U9Zn1udWxsIT09ZSYmZC5zdG9wUHJvcGFnYXRpb24oKX1lbHNlIGhkKGEsYixkLG51bGwsYyl9fXZhciBpZD1udWxsO1xuZnVuY3Rpb24gWWMoYSxiLGMsZCl7aWQ9bnVsbDthPXhiKGQpO2E9V2MoYSk7aWYobnVsbCE9PWEpaWYoYj1WYihhKSxudWxsPT09YilhPW51bGw7ZWxzZSBpZihjPWIudGFnLDEzPT09Yyl7YT1XYihiKTtpZihudWxsIT09YSlyZXR1cm4gYTthPW51bGx9ZWxzZSBpZigzPT09Yyl7aWYoYi5zdGF0ZU5vZGUuY3VycmVudC5tZW1vaXplZFN0YXRlLmlzRGVoeWRyYXRlZClyZXR1cm4gMz09PWIudGFnP2Iuc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDthPW51bGx9ZWxzZSBiIT09YSYmKGE9bnVsbCk7aWQ9YTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGpkKGEpe3N3aXRjaChhKXtjYXNlIFwiY2FuY2VsXCI6Y2FzZSBcImNsaWNrXCI6Y2FzZSBcImNsb3NlXCI6Y2FzZSBcImNvbnRleHRtZW51XCI6Y2FzZSBcImNvcHlcIjpjYXNlIFwiY3V0XCI6Y2FzZSBcImF1eGNsaWNrXCI6Y2FzZSBcImRibGNsaWNrXCI6Y2FzZSBcImRyYWdlbmRcIjpjYXNlIFwiZHJhZ3N0YXJ0XCI6Y2FzZSBcImRyb3BcIjpjYXNlIFwiZm9jdXNpblwiOmNhc2UgXCJmb2N1c291dFwiOmNhc2UgXCJpbnB1dFwiOmNhc2UgXCJpbnZhbGlkXCI6Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5cHJlc3NcIjpjYXNlIFwia2V5dXBcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwicGFzdGVcIjpjYXNlIFwicGF1c2VcIjpjYXNlIFwicGxheVwiOmNhc2UgXCJwb2ludGVyY2FuY2VsXCI6Y2FzZSBcInBvaW50ZXJkb3duXCI6Y2FzZSBcInBvaW50ZXJ1cFwiOmNhc2UgXCJyYXRlY2hhbmdlXCI6Y2FzZSBcInJlc2V0XCI6Y2FzZSBcInJlc2l6ZVwiOmNhc2UgXCJzZWVrZWRcIjpjYXNlIFwic3VibWl0XCI6Y2FzZSBcInRvdWNoY2FuY2VsXCI6Y2FzZSBcInRvdWNoZW5kXCI6Y2FzZSBcInRvdWNoc3RhcnRcIjpjYXNlIFwidm9sdW1lY2hhbmdlXCI6Y2FzZSBcImNoYW5nZVwiOmNhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjpjYXNlIFwidGV4dElucHV0XCI6Y2FzZSBcImNvbXBvc2l0aW9uc3RhcnRcIjpjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpjYXNlIFwiY29tcG9zaXRpb251cGRhdGVcIjpjYXNlIFwiYmVmb3JlYmx1clwiOmNhc2UgXCJhZnRlcmJsdXJcIjpjYXNlIFwiYmVmb3JlaW5wdXRcIjpjYXNlIFwiYmx1clwiOmNhc2UgXCJmdWxsc2NyZWVuY2hhbmdlXCI6Y2FzZSBcImZvY3VzXCI6Y2FzZSBcImhhc2hjaGFuZ2VcIjpjYXNlIFwicG9wc3RhdGVcIjpjYXNlIFwic2VsZWN0XCI6Y2FzZSBcInNlbGVjdHN0YXJ0XCI6cmV0dXJuIDE7Y2FzZSBcImRyYWdcIjpjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdleGl0XCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmNhc2UgXCJkcmFnb3ZlclwiOmNhc2UgXCJtb3VzZW1vdmVcIjpjYXNlIFwibW91c2VvdXRcIjpjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcInBvaW50ZXJtb3ZlXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwic2Nyb2xsXCI6Y2FzZSBcInRvZ2dsZVwiOmNhc2UgXCJ0b3VjaG1vdmVcIjpjYXNlIFwid2hlZWxcIjpjYXNlIFwibW91c2VlbnRlclwiOmNhc2UgXCJtb3VzZWxlYXZlXCI6Y2FzZSBcInBvaW50ZXJlbnRlclwiOmNhc2UgXCJwb2ludGVybGVhdmVcIjpyZXR1cm4gNDtcbmNhc2UgXCJtZXNzYWdlXCI6c3dpdGNoKGVjKCkpe2Nhc2UgZmM6cmV0dXJuIDE7Y2FzZSBnYzpyZXR1cm4gNDtjYXNlIGhjOmNhc2UgaWM6cmV0dXJuIDE2O2Nhc2UgamM6cmV0dXJuIDUzNjg3MDkxMjtkZWZhdWx0OnJldHVybiAxNn1kZWZhdWx0OnJldHVybiAxNn19dmFyIGtkPW51bGwsbGQ9bnVsbCxtZD1udWxsO2Z1bmN0aW9uIG5kKCl7aWYobWQpcmV0dXJuIG1kO3ZhciBhLGI9bGQsYz1iLmxlbmd0aCxkLGU9XCJ2YWx1ZVwiaW4ga2Q/a2QudmFsdWU6a2QudGV4dENvbnRlbnQsZj1lLmxlbmd0aDtmb3IoYT0wO2E8YyYmYlthXT09PWVbYV07YSsrKTt2YXIgZz1jLWE7Zm9yKGQ9MTtkPD1nJiZiW2MtZF09PT1lW2YtZF07ZCsrKTtyZXR1cm4gbWQ9ZS5zbGljZShhLDE8ZD8xLWQ6dm9pZCAwKX1cbmZ1bmN0aW9uIG9kKGEpe3ZhciBiPWEua2V5Q29kZTtcImNoYXJDb2RlXCJpbiBhPyhhPWEuY2hhckNvZGUsMD09PWEmJjEzPT09YiYmKGE9MTMpKTphPWI7MTA9PT1hJiYoYT0xMyk7cmV0dXJuIDMyPD1hfHwxMz09PWE/YTowfWZ1bmN0aW9uIHBkKCl7cmV0dXJuITB9ZnVuY3Rpb24gcWQoKXtyZXR1cm4hMX1cbmZ1bmN0aW9uIHJkKGEpe2Z1bmN0aW9uIGIoYixkLGUsZixnKXt0aGlzLl9yZWFjdE5hbWU9Yjt0aGlzLl90YXJnZXRJbnN0PWU7dGhpcy50eXBlPWQ7dGhpcy5uYXRpdmVFdmVudD1mO3RoaXMudGFyZ2V0PWc7dGhpcy5jdXJyZW50VGFyZ2V0PW51bGw7Zm9yKHZhciBjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmKGI9YVtjXSx0aGlzW2NdPWI/YihmKTpmW2NdKTt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0obnVsbCE9Zi5kZWZhdWx0UHJldmVudGVkP2YuZGVmYXVsdFByZXZlbnRlZDohMT09PWYucmV0dXJuVmFsdWUpP3BkOnFkO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cWQ7cmV0dXJuIHRoaXN9QShiLnByb3RvdHlwZSx7cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5yZXR1cm5WYWx1ZSYmXG4oYS5yZXR1cm5WYWx1ZT0hMSksdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9cGQpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnN0b3BQcm9wYWdhdGlvbj9hLnN0b3BQcm9wYWdhdGlvbigpOlwidW5rbm93blwiIT09dHlwZW9mIGEuY2FuY2VsQnViYmxlJiYoYS5jYW5jZWxCdWJibGU9ITApLHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cGQpfSxwZXJzaXN0OmZ1bmN0aW9uKCl7fSxpc1BlcnNpc3RlbnQ6cGR9KTtyZXR1cm4gYn1cbnZhciBzZD17ZXZlbnRQaGFzZTowLGJ1YmJsZXM6MCxjYW5jZWxhYmxlOjAsdGltZVN0YW1wOmZ1bmN0aW9uKGEpe3JldHVybiBhLnRpbWVTdGFtcHx8RGF0ZS5ub3coKX0sZGVmYXVsdFByZXZlbnRlZDowLGlzVHJ1c3RlZDowfSx0ZD1yZChzZCksdWQ9QSh7fSxzZCx7dmlldzowLGRldGFpbDowfSksdmQ9cmQodWQpLHdkLHhkLHlkLEFkPUEoe30sdWQse3NjcmVlblg6MCxzY3JlZW5ZOjAsY2xpZW50WDowLGNsaWVudFk6MCxwYWdlWDowLHBhZ2VZOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLGdldE1vZGlmaWVyU3RhdGU6emQsYnV0dG9uOjAsYnV0dG9uczowLHJlbGF0ZWRUYXJnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWEucmVsYXRlZFRhcmdldD9hLmZyb21FbGVtZW50PT09YS5zcmNFbGVtZW50P2EudG9FbGVtZW50OmEuZnJvbUVsZW1lbnQ6YS5yZWxhdGVkVGFyZ2V0fSxtb3ZlbWVudFg6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFhcImluXG5hKXJldHVybiBhLm1vdmVtZW50WDthIT09eWQmJih5ZCYmXCJtb3VzZW1vdmVcIj09PWEudHlwZT8od2Q9YS5zY3JlZW5YLXlkLnNjcmVlblgseGQ9YS5zY3JlZW5ZLXlkLnNjcmVlblkpOnhkPXdkPTAseWQ9YSk7cmV0dXJuIHdkfSxtb3ZlbWVudFk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJtb3ZlbWVudFlcImluIGE/YS5tb3ZlbWVudFk6eGR9fSksQmQ9cmQoQWQpLENkPUEoe30sQWQse2RhdGFUcmFuc2ZlcjowfSksRGQ9cmQoQ2QpLEVkPUEoe30sdWQse3JlbGF0ZWRUYXJnZXQ6MH0pLEZkPXJkKEVkKSxHZD1BKHt9LHNkLHthbmltYXRpb25OYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxIZD1yZChHZCksSWQ9QSh7fSxzZCx7Y2xpcGJvYXJkRGF0YTpmdW5jdGlvbihhKXtyZXR1cm5cImNsaXBib2FyZERhdGFcImluIGE/YS5jbGlwYm9hcmREYXRhOndpbmRvdy5jbGlwYm9hcmREYXRhfX0pLEpkPXJkKElkKSxLZD1BKHt9LHNkLHtkYXRhOjB9KSxMZD1yZChLZCksTWQ9e0VzYzpcIkVzY2FwZVwiLFxuU3BhY2ViYXI6XCIgXCIsTGVmdDpcIkFycm93TGVmdFwiLFVwOlwiQXJyb3dVcFwiLFJpZ2h0OlwiQXJyb3dSaWdodFwiLERvd246XCJBcnJvd0Rvd25cIixEZWw6XCJEZWxldGVcIixXaW46XCJPU1wiLE1lbnU6XCJDb250ZXh0TWVudVwiLEFwcHM6XCJDb250ZXh0TWVudVwiLFNjcm9sbDpcIlNjcm9sbExvY2tcIixNb3pQcmludGFibGVLZXk6XCJVbmlkZW50aWZpZWRcIn0sTmQ9ezg6XCJCYWNrc3BhY2VcIiw5OlwiVGFiXCIsMTI6XCJDbGVhclwiLDEzOlwiRW50ZXJcIiwxNjpcIlNoaWZ0XCIsMTc6XCJDb250cm9sXCIsMTg6XCJBbHRcIiwxOTpcIlBhdXNlXCIsMjA6XCJDYXBzTG9ja1wiLDI3OlwiRXNjYXBlXCIsMzI6XCIgXCIsMzM6XCJQYWdlVXBcIiwzNDpcIlBhZ2VEb3duXCIsMzU6XCJFbmRcIiwzNjpcIkhvbWVcIiwzNzpcIkFycm93TGVmdFwiLDM4OlwiQXJyb3dVcFwiLDM5OlwiQXJyb3dSaWdodFwiLDQwOlwiQXJyb3dEb3duXCIsNDU6XCJJbnNlcnRcIiw0NjpcIkRlbGV0ZVwiLDExMjpcIkYxXCIsMTEzOlwiRjJcIiwxMTQ6XCJGM1wiLDExNTpcIkY0XCIsMTE2OlwiRjVcIiwxMTc6XCJGNlwiLDExODpcIkY3XCIsXG4xMTk6XCJGOFwiLDEyMDpcIkY5XCIsMTIxOlwiRjEwXCIsMTIyOlwiRjExXCIsMTIzOlwiRjEyXCIsMTQ0OlwiTnVtTG9ja1wiLDE0NTpcIlNjcm9sbExvY2tcIiwyMjQ6XCJNZXRhXCJ9LE9kPXtBbHQ6XCJhbHRLZXlcIixDb250cm9sOlwiY3RybEtleVwiLE1ldGE6XCJtZXRhS2V5XCIsU2hpZnQ6XCJzaGlmdEtleVwifTtmdW5jdGlvbiBQZChhKXt2YXIgYj10aGlzLm5hdGl2ZUV2ZW50O3JldHVybiBiLmdldE1vZGlmaWVyU3RhdGU/Yi5nZXRNb2RpZmllclN0YXRlKGEpOihhPU9kW2FdKT8hIWJbYV06ITF9ZnVuY3Rpb24gemQoKXtyZXR1cm4gUGR9XG52YXIgUWQ9QSh7fSx1ZCx7a2V5OmZ1bmN0aW9uKGEpe2lmKGEua2V5KXt2YXIgYj1NZFthLmtleV18fGEua2V5O2lmKFwiVW5pZGVudGlmaWVkXCIhPT1iKXJldHVybiBifXJldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT8oYT1vZChhKSwxMz09PWE/XCJFbnRlclwiOlN0cmluZy5mcm9tQ2hhckNvZGUoYSkpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/TmRbYS5rZXlDb2RlXXx8XCJVbmlkZW50aWZpZWRcIjpcIlwifSxjb2RlOjAsbG9jYXRpb246MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxhbHRLZXk6MCxtZXRhS2V5OjAscmVwZWF0OjAsbG9jYWxlOjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZCxjaGFyQ29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/b2QoYSk6MH0sa2V5Q29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfSx3aGljaDpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1cbmEudHlwZT9vZChhKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfX0pLFJkPXJkKFFkKSxTZD1BKHt9LEFkLHtwb2ludGVySWQ6MCx3aWR0aDowLGhlaWdodDowLHByZXNzdXJlOjAsdGFuZ2VudGlhbFByZXNzdXJlOjAsdGlsdFg6MCx0aWx0WTowLHR3aXN0OjAscG9pbnRlclR5cGU6MCxpc1ByaW1hcnk6MH0pLFRkPXJkKFNkKSxVZD1BKHt9LHVkLHt0b3VjaGVzOjAsdGFyZ2V0VG91Y2hlczowLGNoYW5nZWRUb3VjaGVzOjAsYWx0S2V5OjAsbWV0YUtleTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGdldE1vZGlmaWVyU3RhdGU6emR9KSxWZD1yZChVZCksV2Q9QSh7fSxzZCx7cHJvcGVydHlOYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxYZD1yZChXZCksWWQ9QSh7fSxBZCx7ZGVsdGFYOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFYXCJpbiBhP2EuZGVsdGFYOlwid2hlZWxEZWx0YVhcImluIGE/LWEud2hlZWxEZWx0YVg6MH0sXG5kZWx0YVk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVlcImluIGE/YS5kZWx0YVk6XCJ3aGVlbERlbHRhWVwiaW4gYT8tYS53aGVlbERlbHRhWTpcIndoZWVsRGVsdGFcImluIGE/LWEud2hlZWxEZWx0YTowfSxkZWx0YVo6MCxkZWx0YU1vZGU6MH0pLFpkPXJkKFlkKSwkZD1bOSwxMywyNywzMl0sYWU9aWEmJlwiQ29tcG9zaXRpb25FdmVudFwiaW4gd2luZG93LGJlPW51bGw7aWEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmKGJlPWRvY3VtZW50LmRvY3VtZW50TW9kZSk7dmFyIGNlPWlhJiZcIlRleHRFdmVudFwiaW4gd2luZG93JiYhYmUsZGU9aWEmJighYWV8fGJlJiY4PGJlJiYxMT49YmUpLGVlPVN0cmluZy5mcm9tQ2hhckNvZGUoMzIpLGZlPSExO1xuZnVuY3Rpb24gZ2UoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImtleXVwXCI6cmV0dXJuLTEhPT0kZC5pbmRleE9mKGIua2V5Q29kZSk7Y2FzZSBcImtleWRvd25cIjpyZXR1cm4gMjI5IT09Yi5rZXlDb2RlO2Nhc2UgXCJrZXlwcmVzc1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwiZm9jdXNvdXRcIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiBoZShhKXthPWEuZGV0YWlsO3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmXCJkYXRhXCJpbiBhP2EuZGF0YTpudWxsfXZhciBpZT0hMTtmdW5jdGlvbiBqZShhLGIpe3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gaGUoYik7Y2FzZSBcImtleXByZXNzXCI6aWYoMzIhPT1iLndoaWNoKXJldHVybiBudWxsO2ZlPSEwO3JldHVybiBlZTtjYXNlIFwidGV4dElucHV0XCI6cmV0dXJuIGE9Yi5kYXRhLGE9PT1lZSYmZmU/bnVsbDphO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24ga2UoYSxiKXtpZihpZSlyZXR1cm5cImNvbXBvc2l0aW9uZW5kXCI9PT1hfHwhYWUmJmdlKGEsYik/KGE9bmQoKSxtZD1sZD1rZD1udWxsLGllPSExLGEpOm51bGw7c3dpdGNoKGEpe2Nhc2UgXCJwYXN0ZVwiOnJldHVybiBudWxsO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKCEoYi5jdHJsS2V5fHxiLmFsdEtleXx8Yi5tZXRhS2V5KXx8Yi5jdHJsS2V5JiZiLmFsdEtleSl7aWYoYi5jaGFyJiYxPGIuY2hhci5sZW5ndGgpcmV0dXJuIGIuY2hhcjtpZihiLndoaWNoKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpfXJldHVybiBudWxsO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBkZSYmXCJrb1wiIT09Yi5sb2NhbGU/bnVsbDpiLmRhdGE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgbGU9e2NvbG9yOiEwLGRhdGU6ITAsZGF0ZXRpbWU6ITAsXCJkYXRldGltZS1sb2NhbFwiOiEwLGVtYWlsOiEwLG1vbnRoOiEwLG51bWJlcjohMCxwYXNzd29yZDohMCxyYW5nZTohMCxzZWFyY2g6ITAsdGVsOiEwLHRleHQ6ITAsdGltZTohMCx1cmw6ITAsd2VlazohMH07ZnVuY3Rpb24gbWUoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWI/ISFsZVthLnR5cGVdOlwidGV4dGFyZWFcIj09PWI/ITA6ITF9ZnVuY3Rpb24gbmUoYSxiLGMsZCl7RWIoZCk7Yj1vZShiLFwib25DaGFuZ2VcIik7MDxiLmxlbmd0aCYmKGM9bmV3IHRkKFwib25DaGFuZ2VcIixcImNoYW5nZVwiLG51bGwsYyxkKSxhLnB1c2goe2V2ZW50OmMsbGlzdGVuZXJzOmJ9KSl9dmFyIHBlPW51bGwscWU9bnVsbDtmdW5jdGlvbiByZShhKXtzZShhLDApfWZ1bmN0aW9uIHRlKGEpe3ZhciBiPXVlKGEpO2lmKFdhKGIpKXJldHVybiBhfVxuZnVuY3Rpb24gdmUoYSxiKXtpZihcImNoYW5nZVwiPT09YSlyZXR1cm4gYn12YXIgd2U9ITE7aWYoaWEpe3ZhciB4ZTtpZihpYSl7dmFyIHllPVwib25pbnB1dFwiaW4gZG9jdW1lbnQ7aWYoIXllKXt2YXIgemU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt6ZS5zZXRBdHRyaWJ1dGUoXCJvbmlucHV0XCIsXCJyZXR1cm47XCIpO3llPVwiZnVuY3Rpb25cIj09PXR5cGVvZiB6ZS5vbmlucHV0fXhlPXllfWVsc2UgeGU9ITE7d2U9eGUmJighZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHw5PGRvY3VtZW50LmRvY3VtZW50TW9kZSl9ZnVuY3Rpb24gQWUoKXtwZSYmKHBlLmRldGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSxxZT1wZT1udWxsKX1mdW5jdGlvbiBCZShhKXtpZihcInZhbHVlXCI9PT1hLnByb3BlcnR5TmFtZSYmdGUocWUpKXt2YXIgYj1bXTtuZShiLHFlLGEseGIoYSkpO0piKHJlLGIpfX1cbmZ1bmN0aW9uIENlKGEsYixjKXtcImZvY3VzaW5cIj09PWE/KEFlKCkscGU9YixxZT1jLHBlLmF0dGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSk6XCJmb2N1c291dFwiPT09YSYmQWUoKX1mdW5jdGlvbiBEZShhKXtpZihcInNlbGVjdGlvbmNoYW5nZVwiPT09YXx8XCJrZXl1cFwiPT09YXx8XCJrZXlkb3duXCI9PT1hKXJldHVybiB0ZShxZSl9ZnVuY3Rpb24gRWUoYSxiKXtpZihcImNsaWNrXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBGZShhLGIpe2lmKFwiaW5wdXRcIj09PWF8fFwiY2hhbmdlXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBHZShhLGIpe3JldHVybiBhPT09YiYmKDAhPT1hfHwxL2E9PT0xL2IpfHxhIT09YSYmYiE9PWJ9dmFyIEhlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBPYmplY3QuaXM/T2JqZWN0LmlzOkdlO1xuZnVuY3Rpb24gSWUoYSxiKXtpZihIZShhLGIpKXJldHVybiEwO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYXx8bnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYnx8bnVsbD09PWIpcmV0dXJuITE7dmFyIGM9T2JqZWN0LmtleXMoYSksZD1PYmplY3Qua2V5cyhiKTtpZihjLmxlbmd0aCE9PWQubGVuZ3RoKXJldHVybiExO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF07aWYoIWphLmNhbGwoYixlKXx8IUhlKGFbZV0sYltlXSkpcmV0dXJuITF9cmV0dXJuITB9ZnVuY3Rpb24gSmUoYSl7Zm9yKDthJiZhLmZpcnN0Q2hpbGQ7KWE9YS5maXJzdENoaWxkO3JldHVybiBhfVxuZnVuY3Rpb24gS2UoYSxiKXt2YXIgYz1KZShhKTthPTA7Zm9yKHZhciBkO2M7KXtpZigzPT09Yy5ub2RlVHlwZSl7ZD1hK2MudGV4dENvbnRlbnQubGVuZ3RoO2lmKGE8PWImJmQ+PWIpcmV0dXJue25vZGU6YyxvZmZzZXQ6Yi1hfTthPWR9YTp7Zm9yKDtjOyl7aWYoYy5uZXh0U2libGluZyl7Yz1jLm5leHRTaWJsaW5nO2JyZWFrIGF9Yz1jLnBhcmVudE5vZGV9Yz12b2lkIDB9Yz1KZShjKX19ZnVuY3Rpb24gTGUoYSxiKXtyZXR1cm4gYSYmYj9hPT09Yj8hMDphJiYzPT09YS5ub2RlVHlwZT8hMTpiJiYzPT09Yi5ub2RlVHlwZT9MZShhLGIucGFyZW50Tm9kZSk6XCJjb250YWluc1wiaW4gYT9hLmNvbnRhaW5zKGIpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24/ISEoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSYxNik6ITE6ITF9XG5mdW5jdGlvbiBNZSgpe2Zvcih2YXIgYT13aW5kb3csYj1YYSgpO2IgaW5zdGFuY2VvZiBhLkhUTUxJRnJhbWVFbGVtZW50Oyl7dHJ5e3ZhciBjPVwic3RyaW5nXCI9PT10eXBlb2YgYi5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWZ9Y2F0Y2goZCl7Yz0hMX1pZihjKWE9Yi5jb250ZW50V2luZG93O2Vsc2UgYnJlYWs7Yj1YYShhLmRvY3VtZW50KX1yZXR1cm4gYn1mdW5jdGlvbiBOZShhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGImJihcImlucHV0XCI9PT1iJiYoXCJ0ZXh0XCI9PT1hLnR5cGV8fFwic2VhcmNoXCI9PT1hLnR5cGV8fFwidGVsXCI9PT1hLnR5cGV8fFwidXJsXCI9PT1hLnR5cGV8fFwicGFzc3dvcmRcIj09PWEudHlwZSl8fFwidGV4dGFyZWFcIj09PWJ8fFwidHJ1ZVwiPT09YS5jb250ZW50RWRpdGFibGUpfVxuZnVuY3Rpb24gT2UoYSl7dmFyIGI9TWUoKSxjPWEuZm9jdXNlZEVsZW0sZD1hLnNlbGVjdGlvblJhbmdlO2lmKGIhPT1jJiZjJiZjLm93bmVyRG9jdW1lbnQmJkxlKGMub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsYykpe2lmKG51bGwhPT1kJiZOZShjKSlpZihiPWQuc3RhcnQsYT1kLmVuZCx2b2lkIDA9PT1hJiYoYT1iKSxcInNlbGVjdGlvblN0YXJ0XCJpbiBjKWMuc2VsZWN0aW9uU3RhcnQ9YixjLnNlbGVjdGlvbkVuZD1NYXRoLm1pbihhLGMudmFsdWUubGVuZ3RoKTtlbHNlIGlmKGE9KGI9Yy5vd25lckRvY3VtZW50fHxkb2N1bWVudCkmJmIuZGVmYXVsdFZpZXd8fHdpbmRvdyxhLmdldFNlbGVjdGlvbil7YT1hLmdldFNlbGVjdGlvbigpO3ZhciBlPWMudGV4dENvbnRlbnQubGVuZ3RoLGY9TWF0aC5taW4oZC5zdGFydCxlKTtkPXZvaWQgMD09PWQuZW5kP2Y6TWF0aC5taW4oZC5lbmQsZSk7IWEuZXh0ZW5kJiZmPmQmJihlPWQsZD1mLGY9ZSk7ZT1LZShjLGYpO3ZhciBnPUtlKGMsXG5kKTtlJiZnJiYoMSE9PWEucmFuZ2VDb3VudHx8YS5hbmNob3JOb2RlIT09ZS5ub2RlfHxhLmFuY2hvck9mZnNldCE9PWUub2Zmc2V0fHxhLmZvY3VzTm9kZSE9PWcubm9kZXx8YS5mb2N1c09mZnNldCE9PWcub2Zmc2V0KSYmKGI9Yi5jcmVhdGVSYW5nZSgpLGIuc2V0U3RhcnQoZS5ub2RlLGUub2Zmc2V0KSxhLnJlbW92ZUFsbFJhbmdlcygpLGY+ZD8oYS5hZGRSYW5nZShiKSxhLmV4dGVuZChnLm5vZGUsZy5vZmZzZXQpKTooYi5zZXRFbmQoZy5ub2RlLGcub2Zmc2V0KSxhLmFkZFJhbmdlKGIpKSl9Yj1bXTtmb3IoYT1jO2E9YS5wYXJlbnROb2RlOykxPT09YS5ub2RlVHlwZSYmYi5wdXNoKHtlbGVtZW50OmEsbGVmdDphLnNjcm9sbExlZnQsdG9wOmEuc2Nyb2xsVG9wfSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZm9jdXMmJmMuZm9jdXMoKTtmb3IoYz0wO2M8Yi5sZW5ndGg7YysrKWE9YltjXSxhLmVsZW1lbnQuc2Nyb2xsTGVmdD1hLmxlZnQsYS5lbGVtZW50LnNjcm9sbFRvcD1hLnRvcH19XG52YXIgUGU9aWEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmMTE+PWRvY3VtZW50LmRvY3VtZW50TW9kZSxRZT1udWxsLFJlPW51bGwsU2U9bnVsbCxUZT0hMTtcbmZ1bmN0aW9uIFVlKGEsYixjKXt2YXIgZD1jLndpbmRvdz09PWM/Yy5kb2N1bWVudDo5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudDtUZXx8bnVsbD09UWV8fFFlIT09WGEoZCl8fChkPVFlLFwic2VsZWN0aW9uU3RhcnRcImluIGQmJk5lKGQpP2Q9e3N0YXJ0OmQuc2VsZWN0aW9uU3RhcnQsZW5kOmQuc2VsZWN0aW9uRW5kfTooZD0oZC5vd25lckRvY3VtZW50JiZkLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXd8fHdpbmRvdykuZ2V0U2VsZWN0aW9uKCksZD17YW5jaG9yTm9kZTpkLmFuY2hvck5vZGUsYW5jaG9yT2Zmc2V0OmQuYW5jaG9yT2Zmc2V0LGZvY3VzTm9kZTpkLmZvY3VzTm9kZSxmb2N1c09mZnNldDpkLmZvY3VzT2Zmc2V0fSksU2UmJkllKFNlLGQpfHwoU2U9ZCxkPW9lKFJlLFwib25TZWxlY3RcIiksMDxkLmxlbmd0aCYmKGI9bmV3IHRkKFwib25TZWxlY3RcIixcInNlbGVjdFwiLG51bGwsYixjKSxhLnB1c2goe2V2ZW50OmIsbGlzdGVuZXJzOmR9KSxiLnRhcmdldD1RZSkpKX1cbmZ1bmN0aW9uIFZlKGEsYil7dmFyIGM9e307Y1thLnRvTG93ZXJDYXNlKCldPWIudG9Mb3dlckNhc2UoKTtjW1wiV2Via2l0XCIrYV09XCJ3ZWJraXRcIitiO2NbXCJNb3pcIithXT1cIm1velwiK2I7cmV0dXJuIGN9dmFyIFdlPXthbmltYXRpb25lbmQ6VmUoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkVuZFwiKSxhbmltYXRpb25pdGVyYXRpb246VmUoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkl0ZXJhdGlvblwiKSxhbmltYXRpb25zdGFydDpWZShcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uU3RhcnRcIiksdHJhbnNpdGlvbmVuZDpWZShcIlRyYW5zaXRpb25cIixcIlRyYW5zaXRpb25FbmRcIil9LFhlPXt9LFllPXt9O1xuaWEmJihZZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFwiQW5pbWF0aW9uRXZlbnRcImluIHdpbmRvd3x8KGRlbGV0ZSBXZS5hbmltYXRpb25lbmQuYW5pbWF0aW9uLGRlbGV0ZSBXZS5hbmltYXRpb25pdGVyYXRpb24uYW5pbWF0aW9uLGRlbGV0ZSBXZS5hbmltYXRpb25zdGFydC5hbmltYXRpb24pLFwiVHJhbnNpdGlvbkV2ZW50XCJpbiB3aW5kb3d8fGRlbGV0ZSBXZS50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb24pO2Z1bmN0aW9uIFplKGEpe2lmKFhlW2FdKXJldHVybiBYZVthXTtpZighV2VbYV0pcmV0dXJuIGE7dmFyIGI9V2VbYV0sYztmb3IoYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykmJmMgaW4gWWUpcmV0dXJuIFhlW2FdPWJbY107cmV0dXJuIGF9dmFyICRlPVplKFwiYW5pbWF0aW9uZW5kXCIpLGFmPVplKFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIpLGJmPVplKFwiYW5pbWF0aW9uc3RhcnRcIiksY2Y9WmUoXCJ0cmFuc2l0aW9uZW5kXCIpLGRmPW5ldyBNYXAsZWY9XCJhYm9ydCBhdXhDbGljayBjYW5jZWwgY2FuUGxheSBjYW5QbGF5VGhyb3VnaCBjbGljayBjbG9zZSBjb250ZXh0TWVudSBjb3B5IGN1dCBkcmFnIGRyYWdFbmQgZHJhZ0VudGVyIGRyYWdFeGl0IGRyYWdMZWF2ZSBkcmFnT3ZlciBkcmFnU3RhcnQgZHJvcCBkdXJhdGlvbkNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBnb3RQb2ludGVyQ2FwdHVyZSBpbnB1dCBpbnZhbGlkIGtleURvd24ga2V5UHJlc3Mga2V5VXAgbG9hZCBsb2FkZWREYXRhIGxvYWRlZE1ldGFkYXRhIGxvYWRTdGFydCBsb3N0UG9pbnRlckNhcHR1cmUgbW91c2VEb3duIG1vdXNlTW92ZSBtb3VzZU91dCBtb3VzZU92ZXIgbW91c2VVcCBwYXN0ZSBwYXVzZSBwbGF5IHBsYXlpbmcgcG9pbnRlckNhbmNlbCBwb2ludGVyRG93biBwb2ludGVyTW92ZSBwb2ludGVyT3V0IHBvaW50ZXJPdmVyIHBvaW50ZXJVcCBwcm9ncmVzcyByYXRlQ2hhbmdlIHJlc2V0IHJlc2l6ZSBzZWVrZWQgc2Vla2luZyBzdGFsbGVkIHN1Ym1pdCBzdXNwZW5kIHRpbWVVcGRhdGUgdG91Y2hDYW5jZWwgdG91Y2hFbmQgdG91Y2hTdGFydCB2b2x1bWVDaGFuZ2Ugc2Nyb2xsIHRvZ2dsZSB0b3VjaE1vdmUgd2FpdGluZyB3aGVlbFwiLnNwbGl0KFwiIFwiKTtcbmZ1bmN0aW9uIGZmKGEsYil7ZGYuc2V0KGEsYik7ZmEoYixbYV0pfWZvcih2YXIgZ2Y9MDtnZjxlZi5sZW5ndGg7Z2YrKyl7dmFyIGhmPWVmW2dmXSxqZj1oZi50b0xvd2VyQ2FzZSgpLGtmPWhmWzBdLnRvVXBwZXJDYXNlKCkraGYuc2xpY2UoMSk7ZmYoamYsXCJvblwiK2tmKX1mZigkZSxcIm9uQW5pbWF0aW9uRW5kXCIpO2ZmKGFmLFwib25BbmltYXRpb25JdGVyYXRpb25cIik7ZmYoYmYsXCJvbkFuaW1hdGlvblN0YXJ0XCIpO2ZmKFwiZGJsY2xpY2tcIixcIm9uRG91YmxlQ2xpY2tcIik7ZmYoXCJmb2N1c2luXCIsXCJvbkZvY3VzXCIpO2ZmKFwiZm9jdXNvdXRcIixcIm9uQmx1clwiKTtmZihjZixcIm9uVHJhbnNpdGlvbkVuZFwiKTtoYShcIm9uTW91c2VFbnRlclwiLFtcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl0pO2hhKFwib25Nb3VzZUxlYXZlXCIsW1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXSk7aGEoXCJvblBvaW50ZXJFbnRlclwiLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdKTtcbmhhKFwib25Qb2ludGVyTGVhdmVcIixbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXSk7ZmEoXCJvbkNoYW5nZVwiLFwiY2hhbmdlIGNsaWNrIGZvY3VzaW4gZm9jdXNvdXQgaW5wdXQga2V5ZG93biBrZXl1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2ZhKFwib25TZWxlY3RcIixcImZvY3Vzb3V0IGNvbnRleHRtZW51IGRyYWdlbmQgZm9jdXNpbiBrZXlkb3duIGtleXVwIG1vdXNlZG93biBtb3VzZXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKSk7ZmEoXCJvbkJlZm9yZUlucHV0XCIsW1wiY29tcG9zaXRpb25lbmRcIixcImtleXByZXNzXCIsXCJ0ZXh0SW5wdXRcIixcInBhc3RlXCJdKTtmYShcIm9uQ29tcG9zaXRpb25FbmRcIixcImNvbXBvc2l0aW9uZW5kIGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTtmYShcIm9uQ29tcG9zaXRpb25TdGFydFwiLFwiY29tcG9zaXRpb25zdGFydCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7XG5mYShcIm9uQ29tcG9zaXRpb25VcGRhdGVcIixcImNvbXBvc2l0aW9udXBkYXRlIGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTt2YXIgbGY9XCJhYm9ydCBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIGR1cmF0aW9uY2hhbmdlIGVtcHRpZWQgZW5jcnlwdGVkIGVuZGVkIGVycm9yIGxvYWRlZGRhdGEgbG9hZGVkbWV0YWRhdGEgbG9hZHN0YXJ0IHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHJlc2l6ZSBzZWVrZWQgc2Vla2luZyBzdGFsbGVkIHN1c3BlbmQgdGltZXVwZGF0ZSB2b2x1bWVjaGFuZ2Ugd2FpdGluZ1wiLnNwbGl0KFwiIFwiKSxtZj1uZXcgU2V0KFwiY2FuY2VsIGNsb3NlIGludmFsaWQgbG9hZCBzY3JvbGwgdG9nZ2xlXCIuc3BsaXQoXCIgXCIpLmNvbmNhdChsZikpO1xuZnVuY3Rpb24gbmYoYSxiLGMpe3ZhciBkPWEudHlwZXx8XCJ1bmtub3duLWV2ZW50XCI7YS5jdXJyZW50VGFyZ2V0PWM7VWIoZCxiLHZvaWQgMCxhKTthLmN1cnJlbnRUYXJnZXQ9bnVsbH1cbmZ1bmN0aW9uIHNlKGEsYil7Yj0wIT09KGImNCk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10sZT1kLmV2ZW50O2Q9ZC5saXN0ZW5lcnM7YTp7dmFyIGY9dm9pZCAwO2lmKGIpZm9yKHZhciBnPWQubGVuZ3RoLTE7MDw9ZztnLS0pe3ZhciBoPWRbZ10saz1oLmluc3RhbmNlLGw9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7bmYoZSxoLGwpO2Y9a31lbHNlIGZvcihnPTA7ZzxkLmxlbmd0aDtnKyspe2g9ZFtnXTtrPWguaW5zdGFuY2U7bD1oLmN1cnJlbnRUYXJnZXQ7aD1oLmxpc3RlbmVyO2lmKGshPT1mJiZlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYnJlYWsgYTtuZihlLGgsbCk7Zj1rfX19aWYoUWIpdGhyb3cgYT1SYixRYj0hMSxSYj1udWxsLGE7fVxuZnVuY3Rpb24gRChhLGIpe3ZhciBjPWJbb2ZdO3ZvaWQgMD09PWMmJihjPWJbb2ZdPW5ldyBTZXQpO3ZhciBkPWErXCJfX2J1YmJsZVwiO2MuaGFzKGQpfHwocGYoYixhLDIsITEpLGMuYWRkKGQpKX1mdW5jdGlvbiBxZihhLGIsYyl7dmFyIGQ9MDtiJiYoZHw9NCk7cGYoYyxhLGQsYil9dmFyIHJmPVwiX3JlYWN0TGlzdGVuaW5nXCIrTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7ZnVuY3Rpb24gc2YoYSl7aWYoIWFbcmZdKXthW3JmXT0hMDtkYS5mb3JFYWNoKGZ1bmN0aW9uKGIpe1wic2VsZWN0aW9uY2hhbmdlXCIhPT1iJiYobWYuaGFzKGIpfHxxZihiLCExLGEpLHFmKGIsITAsYSkpfSk7dmFyIGI9OT09PWEubm9kZVR5cGU/YTphLm93bmVyRG9jdW1lbnQ7bnVsbD09PWJ8fGJbcmZdfHwoYltyZl09ITAscWYoXCJzZWxlY3Rpb25jaGFuZ2VcIiwhMSxiKSl9fVxuZnVuY3Rpb24gcGYoYSxiLGMsZCl7c3dpdGNoKGpkKGIpKXtjYXNlIDE6dmFyIGU9ZWQ7YnJlYWs7Y2FzZSA0OmU9Z2Q7YnJlYWs7ZGVmYXVsdDplPWZkfWM9ZS5iaW5kKG51bGwsYixjLGEpO2U9dm9pZCAwOyFMYnx8XCJ0b3VjaHN0YXJ0XCIhPT1iJiZcInRvdWNobW92ZVwiIT09YiYmXCJ3aGVlbFwiIT09Ynx8KGU9ITApO2Q/dm9pZCAwIT09ZT9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLHtjYXB0dXJlOiEwLHBhc3NpdmU6ZX0pOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITApOnZvaWQgMCE9PWU/YS5hZGRFdmVudExpc3RlbmVyKGIsYyx7cGFzc2l2ZTplfSk6YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMSl9XG5mdW5jdGlvbiBoZChhLGIsYyxkLGUpe3ZhciBmPWQ7aWYoMD09PShiJjEpJiYwPT09KGImMikmJm51bGwhPT1kKWE6Zm9yKDs7KXtpZihudWxsPT09ZClyZXR1cm47dmFyIGc9ZC50YWc7aWYoMz09PWd8fDQ9PT1nKXt2YXIgaD1kLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2lmKGg9PT1lfHw4PT09aC5ub2RlVHlwZSYmaC5wYXJlbnROb2RlPT09ZSlicmVhaztpZig0PT09Zylmb3IoZz1kLnJldHVybjtudWxsIT09Zzspe3ZhciBrPWcudGFnO2lmKDM9PT1rfHw0PT09aylpZihrPWcuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8saz09PWV8fDg9PT1rLm5vZGVUeXBlJiZrLnBhcmVudE5vZGU9PT1lKXJldHVybjtnPWcucmV0dXJufWZvcig7bnVsbCE9PWg7KXtnPVdjKGgpO2lmKG51bGw9PT1nKXJldHVybjtrPWcudGFnO2lmKDU9PT1rfHw2PT09ayl7ZD1mPWc7Y29udGludWUgYX1oPWgucGFyZW50Tm9kZX19ZD1kLnJldHVybn1KYihmdW5jdGlvbigpe3ZhciBkPWYsZT14YihjKSxnPVtdO1xuYTp7dmFyIGg9ZGYuZ2V0KGEpO2lmKHZvaWQgMCE9PWgpe3ZhciBrPXRkLG49YTtzd2l0Y2goYSl7Y2FzZSBcImtleXByZXNzXCI6aWYoMD09PW9kKGMpKWJyZWFrIGE7Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjprPVJkO2JyZWFrO2Nhc2UgXCJmb2N1c2luXCI6bj1cImZvY3VzXCI7az1GZDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjpuPVwiYmx1clwiO2s9RmQ7YnJlYWs7Y2FzZSBcImJlZm9yZWJsdXJcIjpjYXNlIFwiYWZ0ZXJibHVyXCI6az1GZDticmVhaztjYXNlIFwiY2xpY2tcIjppZigyPT09Yy5idXR0b24pYnJlYWsgYTtjYXNlIFwiYXV4Y2xpY2tcIjpjYXNlIFwiZGJsY2xpY2tcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcIm1vdXNlbW92ZVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcIm1vdXNlb3V0XCI6Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJjb250ZXh0bWVudVwiOms9QmQ7YnJlYWs7Y2FzZSBcImRyYWdcIjpjYXNlIFwiZHJhZ2VuZFwiOmNhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2V4aXRcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6Y2FzZSBcImRyYWdvdmVyXCI6Y2FzZSBcImRyYWdzdGFydFwiOmNhc2UgXCJkcm9wXCI6az1cbkRkO2JyZWFrO2Nhc2UgXCJ0b3VjaGNhbmNlbFwiOmNhc2UgXCJ0b3VjaGVuZFwiOmNhc2UgXCJ0b3VjaG1vdmVcIjpjYXNlIFwidG91Y2hzdGFydFwiOms9VmQ7YnJlYWs7Y2FzZSAkZTpjYXNlIGFmOmNhc2UgYmY6az1IZDticmVhaztjYXNlIGNmOms9WGQ7YnJlYWs7Y2FzZSBcInNjcm9sbFwiOms9dmQ7YnJlYWs7Y2FzZSBcIndoZWVsXCI6az1aZDticmVhaztjYXNlIFwiY29weVwiOmNhc2UgXCJjdXRcIjpjYXNlIFwicGFzdGVcIjprPUpkO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwicG9pbnRlcmNhbmNlbFwiOmNhc2UgXCJwb2ludGVyZG93blwiOmNhc2UgXCJwb2ludGVybW92ZVwiOmNhc2UgXCJwb2ludGVyb3V0XCI6Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJ1cFwiOms9VGR9dmFyIHQ9MCE9PShiJjQpLEo9IXQmJlwic2Nyb2xsXCI9PT1hLHg9dD9udWxsIT09aD9oK1wiQ2FwdHVyZVwiOm51bGw6aDt0PVtdO2Zvcih2YXIgdz1kLHU7bnVsbCE9PVxudzspe3U9dzt2YXIgRj11LnN0YXRlTm9kZTs1PT09dS50YWcmJm51bGwhPT1GJiYodT1GLG51bGwhPT14JiYoRj1LYih3LHgpLG51bGwhPUYmJnQucHVzaCh0Zih3LEYsdSkpKSk7aWYoSilicmVhazt3PXcucmV0dXJufTA8dC5sZW5ndGgmJihoPW5ldyBrKGgsbixudWxsLGMsZSksZy5wdXNoKHtldmVudDpoLGxpc3RlbmVyczp0fSkpfX1pZigwPT09KGImNykpe2E6e2g9XCJtb3VzZW92ZXJcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWE7az1cIm1vdXNlb3V0XCI9PT1hfHxcInBvaW50ZXJvdXRcIj09PWE7aWYoaCYmYyE9PXdiJiYobj1jLnJlbGF0ZWRUYXJnZXR8fGMuZnJvbUVsZW1lbnQpJiYoV2Mobil8fG5bdWZdKSlicmVhayBhO2lmKGt8fGgpe2g9ZS53aW5kb3c9PT1lP2U6KGg9ZS5vd25lckRvY3VtZW50KT9oLmRlZmF1bHRWaWV3fHxoLnBhcmVudFdpbmRvdzp3aW5kb3c7aWYoayl7aWYobj1jLnJlbGF0ZWRUYXJnZXR8fGMudG9FbGVtZW50LGs9ZCxuPW4/V2Mobik6bnVsbCxudWxsIT09XG5uJiYoSj1WYihuKSxuIT09Snx8NSE9PW4udGFnJiY2IT09bi50YWcpKW49bnVsbH1lbHNlIGs9bnVsbCxuPWQ7aWYoayE9PW4pe3Q9QmQ7Rj1cIm9uTW91c2VMZWF2ZVwiO3g9XCJvbk1vdXNlRW50ZXJcIjt3PVwibW91c2VcIjtpZihcInBvaW50ZXJvdXRcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEpdD1UZCxGPVwib25Qb2ludGVyTGVhdmVcIix4PVwib25Qb2ludGVyRW50ZXJcIix3PVwicG9pbnRlclwiO0o9bnVsbD09az9oOnVlKGspO3U9bnVsbD09bj9oOnVlKG4pO2g9bmV3IHQoRix3K1wibGVhdmVcIixrLGMsZSk7aC50YXJnZXQ9SjtoLnJlbGF0ZWRUYXJnZXQ9dTtGPW51bGw7V2MoZSk9PT1kJiYodD1uZXcgdCh4LHcrXCJlbnRlclwiLG4sYyxlKSx0LnRhcmdldD11LHQucmVsYXRlZFRhcmdldD1KLEY9dCk7Sj1GO2lmKGsmJm4pYjp7dD1rO3g9bjt3PTA7Zm9yKHU9dDt1O3U9dmYodSkpdysrO3U9MDtmb3IoRj14O0Y7Rj12ZihGKSl1Kys7Zm9yKDswPHctdTspdD12Zih0KSx3LS07Zm9yKDswPHUtdzspeD1cbnZmKHgpLHUtLTtmb3IoO3ctLTspe2lmKHQ9PT14fHxudWxsIT09eCYmdD09PXguYWx0ZXJuYXRlKWJyZWFrIGI7dD12Zih0KTt4PXZmKHgpfXQ9bnVsbH1lbHNlIHQ9bnVsbDtudWxsIT09ayYmd2YoZyxoLGssdCwhMSk7bnVsbCE9PW4mJm51bGwhPT1KJiZ3ZihnLEosbix0LCEwKX19fWE6e2g9ZD91ZShkKTp3aW5kb3c7az1oLm5vZGVOYW1lJiZoLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7aWYoXCJzZWxlY3RcIj09PWt8fFwiaW5wdXRcIj09PWsmJlwiZmlsZVwiPT09aC50eXBlKXZhciBuYT12ZTtlbHNlIGlmKG1lKGgpKWlmKHdlKW5hPUZlO2Vsc2V7bmE9RGU7dmFyIHhhPUNlfWVsc2Uoaz1oLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09ay50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09aC50eXBlfHxcInJhZGlvXCI9PT1oLnR5cGUpJiYobmE9RWUpO2lmKG5hJiYobmE9bmEoYSxkKSkpe25lKGcsbmEsYyxlKTticmVhayBhfXhhJiZ4YShhLGgsZCk7XCJmb2N1c291dFwiPT09YSYmKHhhPWguX3dyYXBwZXJTdGF0ZSkmJlxueGEuY29udHJvbGxlZCYmXCJudW1iZXJcIj09PWgudHlwZSYmY2IoaCxcIm51bWJlclwiLGgudmFsdWUpfXhhPWQ/dWUoZCk6d2luZG93O3N3aXRjaChhKXtjYXNlIFwiZm9jdXNpblwiOmlmKG1lKHhhKXx8XCJ0cnVlXCI9PT14YS5jb250ZW50RWRpdGFibGUpUWU9eGEsUmU9ZCxTZT1udWxsO2JyZWFrO2Nhc2UgXCJmb2N1c291dFwiOlNlPVJlPVFlPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlZG93blwiOlRlPSEwO2JyZWFrO2Nhc2UgXCJjb250ZXh0bWVudVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcImRyYWdlbmRcIjpUZT0hMTtVZShnLGMsZSk7YnJlYWs7Y2FzZSBcInNlbGVjdGlvbmNoYW5nZVwiOmlmKFBlKWJyZWFrO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6VWUoZyxjLGUpfXZhciAkYTtpZihhZSliOntzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uc3RhcnRcIjp2YXIgYmE9XCJvbkNvbXBvc2l0aW9uU3RhcnRcIjticmVhayBiO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOmJhPVwib25Db21wb3NpdGlvbkVuZFwiO1xuYnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb251cGRhdGVcIjpiYT1cIm9uQ29tcG9zaXRpb25VcGRhdGVcIjticmVhayBifWJhPXZvaWQgMH1lbHNlIGllP2dlKGEsYykmJihiYT1cIm9uQ29tcG9zaXRpb25FbmRcIik6XCJrZXlkb3duXCI9PT1hJiYyMjk9PT1jLmtleUNvZGUmJihiYT1cIm9uQ29tcG9zaXRpb25TdGFydFwiKTtiYSYmKGRlJiZcImtvXCIhPT1jLmxvY2FsZSYmKGllfHxcIm9uQ29tcG9zaXRpb25TdGFydFwiIT09YmE/XCJvbkNvbXBvc2l0aW9uRW5kXCI9PT1iYSYmaWUmJigkYT1uZCgpKTooa2Q9ZSxsZD1cInZhbHVlXCJpbiBrZD9rZC52YWx1ZTprZC50ZXh0Q29udGVudCxpZT0hMCkpLHhhPW9lKGQsYmEpLDA8eGEubGVuZ3RoJiYoYmE9bmV3IExkKGJhLGEsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6YmEsbGlzdGVuZXJzOnhhfSksJGE/YmEuZGF0YT0kYTooJGE9aGUoYyksbnVsbCE9PSRhJiYoYmEuZGF0YT0kYSkpKSk7aWYoJGE9Y2U/amUoYSxjKTprZShhLGMpKWQ9b2UoZCxcIm9uQmVmb3JlSW5wdXRcIiksXG4wPGQubGVuZ3RoJiYoZT1uZXcgTGQoXCJvbkJlZm9yZUlucHV0XCIsXCJiZWZvcmVpbnB1dFwiLG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmUsbGlzdGVuZXJzOmR9KSxlLmRhdGE9JGEpfXNlKGcsYil9KX1mdW5jdGlvbiB0ZihhLGIsYyl7cmV0dXJue2luc3RhbmNlOmEsbGlzdGVuZXI6YixjdXJyZW50VGFyZ2V0OmN9fWZ1bmN0aW9uIG9lKGEsYil7Zm9yKHZhciBjPWIrXCJDYXB0dXJlXCIsZD1bXTtudWxsIT09YTspe3ZhciBlPWEsZj1lLnN0YXRlTm9kZTs1PT09ZS50YWcmJm51bGwhPT1mJiYoZT1mLGY9S2IoYSxjKSxudWxsIT1mJiZkLnVuc2hpZnQodGYoYSxmLGUpKSxmPUtiKGEsYiksbnVsbCE9ZiYmZC5wdXNoKHRmKGEsZixlKSkpO2E9YS5yZXR1cm59cmV0dXJuIGR9ZnVuY3Rpb24gdmYoYSl7aWYobnVsbD09PWEpcmV0dXJuIG51bGw7ZG8gYT1hLnJldHVybjt3aGlsZShhJiY1IT09YS50YWcpO3JldHVybiBhP2E6bnVsbH1cbmZ1bmN0aW9uIHdmKGEsYixjLGQsZSl7Zm9yKHZhciBmPWIuX3JlYWN0TmFtZSxnPVtdO251bGwhPT1jJiZjIT09ZDspe3ZhciBoPWMsaz1oLmFsdGVybmF0ZSxsPWguc3RhdGVOb2RlO2lmKG51bGwhPT1rJiZrPT09ZClicmVhazs1PT09aC50YWcmJm51bGwhPT1sJiYoaD1sLGU/KGs9S2IoYyxmKSxudWxsIT1rJiZnLnVuc2hpZnQodGYoYyxrLGgpKSk6ZXx8KGs9S2IoYyxmKSxudWxsIT1rJiZnLnB1c2godGYoYyxrLGgpKSkpO2M9Yy5yZXR1cm59MCE9PWcubGVuZ3RoJiZhLnB1c2goe2V2ZW50OmIsbGlzdGVuZXJzOmd9KX12YXIgeGY9L1xcclxcbj8vZyx5Zj0vXFx1MDAwMHxcXHVGRkZEL2c7ZnVuY3Rpb24gemYoYSl7cmV0dXJuKFwic3RyaW5nXCI9PT10eXBlb2YgYT9hOlwiXCIrYSkucmVwbGFjZSh4ZixcIlxcblwiKS5yZXBsYWNlKHlmLFwiXCIpfWZ1bmN0aW9uIEFmKGEsYixjKXtiPXpmKGIpO2lmKHpmKGEpIT09YiYmYyl0aHJvdyBFcnJvcihwKDQyNSkpO31mdW5jdGlvbiBCZigpe31cbnZhciBDZj1udWxsLERmPW51bGw7ZnVuY3Rpb24gRWYoYSxiKXtyZXR1cm5cInRleHRhcmVhXCI9PT1hfHxcIm5vc2NyaXB0XCI9PT1hfHxcInN0cmluZ1wiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwibnVtYmVyXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT09Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx9XG52YXIgRmY9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDp2b2lkIDAsR2Y9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6dm9pZCAwLEhmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBQcm9taXNlP1Byb21pc2U6dm9pZCAwLEpmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBxdWV1ZU1pY3JvdGFzaz9xdWV1ZU1pY3JvdGFzazpcInVuZGVmaW5lZFwiIT09dHlwZW9mIEhmP2Z1bmN0aW9uKGEpe3JldHVybiBIZi5yZXNvbHZlKG51bGwpLnRoZW4oYSkuY2F0Y2goSWYpfTpGZjtmdW5jdGlvbiBJZihhKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYTt9KX1cbmZ1bmN0aW9uIEtmKGEsYil7dmFyIGM9YixkPTA7ZG97dmFyIGU9Yy5uZXh0U2libGluZzthLnJlbW92ZUNoaWxkKGMpO2lmKGUmJjg9PT1lLm5vZGVUeXBlKWlmKGM9ZS5kYXRhLFwiLyRcIj09PWMpe2lmKDA9PT1kKXthLnJlbW92ZUNoaWxkKGUpO2JkKGIpO3JldHVybn1kLS19ZWxzZVwiJFwiIT09YyYmXCIkP1wiIT09YyYmXCIkIVwiIT09Y3x8ZCsrO2M9ZX13aGlsZShjKTtiZChiKX1mdW5jdGlvbiBMZihhKXtmb3IoO251bGwhPWE7YT1hLm5leHRTaWJsaW5nKXt2YXIgYj1hLm5vZGVUeXBlO2lmKDE9PT1ifHwzPT09YilicmVhaztpZig4PT09Yil7Yj1hLmRhdGE7aWYoXCIkXCI9PT1ifHxcIiQhXCI9PT1ifHxcIiQ/XCI9PT1iKWJyZWFrO2lmKFwiLyRcIj09PWIpcmV0dXJuIG51bGx9fXJldHVybiBhfVxuZnVuY3Rpb24gTWYoYSl7YT1hLnByZXZpb3VzU2libGluZztmb3IodmFyIGI9MDthOyl7aWYoOD09PWEubm9kZVR5cGUpe3ZhciBjPWEuZGF0YTtpZihcIiRcIj09PWN8fFwiJCFcIj09PWN8fFwiJD9cIj09PWMpe2lmKDA9PT1iKXJldHVybiBhO2ItLX1lbHNlXCIvJFwiPT09YyYmYisrfWE9YS5wcmV2aW91c1NpYmxpbmd9cmV0dXJuIG51bGx9dmFyIE5mPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLE9mPVwiX19yZWFjdEZpYmVyJFwiK05mLFBmPVwiX19yZWFjdFByb3BzJFwiK05mLHVmPVwiX19yZWFjdENvbnRhaW5lciRcIitOZixvZj1cIl9fcmVhY3RFdmVudHMkXCIrTmYsUWY9XCJfX3JlYWN0TGlzdGVuZXJzJFwiK05mLFJmPVwiX19yZWFjdEhhbmRsZXMkXCIrTmY7XG5mdW5jdGlvbiBXYyhhKXt2YXIgYj1hW09mXTtpZihiKXJldHVybiBiO2Zvcih2YXIgYz1hLnBhcmVudE5vZGU7Yzspe2lmKGI9Y1t1Zl18fGNbT2ZdKXtjPWIuYWx0ZXJuYXRlO2lmKG51bGwhPT1iLmNoaWxkfHxudWxsIT09YyYmbnVsbCE9PWMuY2hpbGQpZm9yKGE9TWYoYSk7bnVsbCE9PWE7KXtpZihjPWFbT2ZdKXJldHVybiBjO2E9TWYoYSl9cmV0dXJuIGJ9YT1jO2M9YS5wYXJlbnROb2RlfXJldHVybiBudWxsfWZ1bmN0aW9uIENiKGEpe2E9YVtPZl18fGFbdWZdO3JldHVybiFhfHw1IT09YS50YWcmJjYhPT1hLnRhZyYmMTMhPT1hLnRhZyYmMyE9PWEudGFnP251bGw6YX1mdW5jdGlvbiB1ZShhKXtpZig1PT09YS50YWd8fDY9PT1hLnRhZylyZXR1cm4gYS5zdGF0ZU5vZGU7dGhyb3cgRXJyb3IocCgzMykpO31mdW5jdGlvbiBEYihhKXtyZXR1cm4gYVtQZl18fG51bGx9dmFyIFNmPVtdLFRmPS0xO2Z1bmN0aW9uIFVmKGEpe3JldHVybntjdXJyZW50OmF9fVxuZnVuY3Rpb24gRShhKXswPlRmfHwoYS5jdXJyZW50PVNmW1RmXSxTZltUZl09bnVsbCxUZi0tKX1mdW5jdGlvbiBHKGEsYil7VGYrKztTZltUZl09YS5jdXJyZW50O2EuY3VycmVudD1ifXZhciBWZj17fSxIPVVmKFZmKSxXZj1VZighMSksWGY9VmY7ZnVuY3Rpb24gWWYoYSxiKXt2YXIgYz1hLnR5cGUuY29udGV4dFR5cGVzO2lmKCFjKXJldHVybiBWZjt2YXIgZD1hLnN0YXRlTm9kZTtpZihkJiZkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9PT1iKXJldHVybiBkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0O3ZhciBlPXt9LGY7Zm9yKGYgaW4gYyllW2ZdPWJbZl07ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWIsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1lKTtyZXR1cm4gZX1cbmZ1bmN0aW9uIFpmKGEpe2E9YS5jaGlsZENvbnRleHRUeXBlcztyZXR1cm4gbnVsbCE9PWEmJnZvaWQgMCE9PWF9ZnVuY3Rpb24gJGYoKXtFKFdmKTtFKEgpfWZ1bmN0aW9uIGFnKGEsYixjKXtpZihILmN1cnJlbnQhPT1WZil0aHJvdyBFcnJvcihwKDE2OCkpO0coSCxiKTtHKFdmLGMpfWZ1bmN0aW9uIGJnKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTtiPWIuY2hpbGRDb250ZXh0VHlwZXM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGQuZ2V0Q2hpbGRDb250ZXh0KXJldHVybiBjO2Q9ZC5nZXRDaGlsZENvbnRleHQoKTtmb3IodmFyIGUgaW4gZClpZighKGUgaW4gYikpdGhyb3cgRXJyb3IocCgxMDgsUmEoYSl8fFwiVW5rbm93blwiLGUpKTtyZXR1cm4gQSh7fSxjLGQpfVxuZnVuY3Rpb24gY2coYSl7YT0oYT1hLnN0YXRlTm9kZSkmJmEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHR8fFZmO1hmPUguY3VycmVudDtHKEgsYSk7RyhXZixXZi5jdXJyZW50KTtyZXR1cm4hMH1mdW5jdGlvbiBkZyhhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoIWQpdGhyb3cgRXJyb3IocCgxNjkpKTtjPyhhPWJnKGEsYixYZiksZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dD1hLEUoV2YpLEUoSCksRyhILGEpKTpFKFdmKTtHKFdmLGMpfXZhciBlZz1udWxsLGZnPSExLGdnPSExO2Z1bmN0aW9uIGhnKGEpe251bGw9PT1lZz9lZz1bYV06ZWcucHVzaChhKX1mdW5jdGlvbiBpZyhhKXtmZz0hMDtoZyhhKX1cbmZ1bmN0aW9uIGpnKCl7aWYoIWdnJiZudWxsIT09ZWcpe2dnPSEwO3ZhciBhPTAsYj1DO3RyeXt2YXIgYz1lZztmb3IoQz0xO2E8Yy5sZW5ndGg7YSsrKXt2YXIgZD1jW2FdO2RvIGQ9ZCghMCk7d2hpbGUobnVsbCE9PWQpfWVnPW51bGw7Zmc9ITF9Y2F0Y2goZSl7dGhyb3cgbnVsbCE9PWVnJiYoZWc9ZWcuc2xpY2UoYSsxKSksYWMoZmMsamcpLGU7fWZpbmFsbHl7Qz1iLGdnPSExfX1yZXR1cm4gbnVsbH12YXIga2c9W10sbGc9MCxtZz1udWxsLG5nPTAsb2c9W10scGc9MCxxZz1udWxsLHJnPTEsc2c9XCJcIjtmdW5jdGlvbiB0ZyhhLGIpe2tnW2xnKytdPW5nO2tnW2xnKytdPW1nO21nPWE7bmc9Yn1cbmZ1bmN0aW9uIHVnKGEsYixjKXtvZ1twZysrXT1yZztvZ1twZysrXT1zZztvZ1twZysrXT1xZztxZz1hO3ZhciBkPXJnO2E9c2c7dmFyIGU9MzItb2MoZCktMTtkJj1+KDE8PGUpO2MrPTE7dmFyIGY9MzItb2MoYikrZTtpZigzMDxmKXt2YXIgZz1lLWUlNTtmPShkJigxPDxnKS0xKS50b1N0cmluZygzMik7ZD4+PWc7ZS09ZztyZz0xPDwzMi1vYyhiKStlfGM8PGV8ZDtzZz1mK2F9ZWxzZSByZz0xPDxmfGM8PGV8ZCxzZz1hfWZ1bmN0aW9uIHZnKGEpe251bGwhPT1hLnJldHVybiYmKHRnKGEsMSksdWcoYSwxLDApKX1mdW5jdGlvbiB3ZyhhKXtmb3IoO2E9PT1tZzspbWc9a2dbLS1sZ10sa2dbbGddPW51bGwsbmc9a2dbLS1sZ10sa2dbbGddPW51bGw7Zm9yKDthPT09cWc7KXFnPW9nWy0tcGddLG9nW3BnXT1udWxsLHNnPW9nWy0tcGddLG9nW3BnXT1udWxsLHJnPW9nWy0tcGddLG9nW3BnXT1udWxsfXZhciB4Zz1udWxsLHlnPW51bGwsST0hMSx6Zz1udWxsO1xuZnVuY3Rpb24gQWcoYSxiKXt2YXIgYz1CZyg1LG51bGwsbnVsbCwwKTtjLmVsZW1lbnRUeXBlPVwiREVMRVRFRFwiO2Muc3RhdGVOb2RlPWI7Yy5yZXR1cm49YTtiPWEuZGVsZXRpb25zO251bGw9PT1iPyhhLmRlbGV0aW9ucz1bY10sYS5mbGFnc3w9MTYpOmIucHVzaChjKX1cbmZ1bmN0aW9uIENnKGEsYil7c3dpdGNoKGEudGFnKXtjYXNlIDU6dmFyIGM9YS50eXBlO2I9MSE9PWIubm9kZVR5cGV8fGMudG9Mb3dlckNhc2UoKSE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKT9udWxsOmI7cmV0dXJuIG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLHhnPWEseWc9TGYoYi5maXJzdENoaWxkKSwhMCk6ITE7Y2FzZSA2OnJldHVybiBiPVwiXCI9PT1hLnBlbmRpbmdQcm9wc3x8MyE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLHhnPWEseWc9bnVsbCwhMCk6ITE7Y2FzZSAxMzpyZXR1cm4gYj04IT09Yi5ub2RlVHlwZT9udWxsOmIsbnVsbCE9PWI/KGM9bnVsbCE9PXFnP3tpZDpyZyxvdmVyZmxvdzpzZ306bnVsbCxhLm1lbW9pemVkU3RhdGU9e2RlaHlkcmF0ZWQ6Yix0cmVlQ29udGV4dDpjLHJldHJ5TGFuZToxMDczNzQxODI0fSxjPUJnKDE4LG51bGwsbnVsbCwwKSxjLnN0YXRlTm9kZT1iLGMucmV0dXJuPWEsYS5jaGlsZD1jLHhnPWEseWc9XG5udWxsLCEwKTohMTtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiBEZyhhKXtyZXR1cm4gMCE9PShhLm1vZGUmMSkmJjA9PT0oYS5mbGFncyYxMjgpfWZ1bmN0aW9uIEVnKGEpe2lmKEkpe3ZhciBiPXlnO2lmKGIpe3ZhciBjPWI7aWYoIUNnKGEsYikpe2lmKERnKGEpKXRocm93IEVycm9yKHAoNDE4KSk7Yj1MZihjLm5leHRTaWJsaW5nKTt2YXIgZD14ZztiJiZDZyhhLGIpP0FnKGQsYyk6KGEuZmxhZ3M9YS5mbGFncyYtNDA5N3wyLEk9ITEseGc9YSl9fWVsc2V7aWYoRGcoYSkpdGhyb3cgRXJyb3IocCg0MTgpKTthLmZsYWdzPWEuZmxhZ3MmLTQwOTd8MjtJPSExO3hnPWF9fX1mdW5jdGlvbiBGZyhhKXtmb3IoYT1hLnJldHVybjtudWxsIT09YSYmNSE9PWEudGFnJiYzIT09YS50YWcmJjEzIT09YS50YWc7KWE9YS5yZXR1cm47eGc9YX1cbmZ1bmN0aW9uIEdnKGEpe2lmKGEhPT14ZylyZXR1cm4hMTtpZighSSlyZXR1cm4gRmcoYSksST0hMCwhMTt2YXIgYjsoYj0zIT09YS50YWcpJiYhKGI9NSE9PWEudGFnKSYmKGI9YS50eXBlLGI9XCJoZWFkXCIhPT1iJiZcImJvZHlcIiE9PWImJiFFZihhLnR5cGUsYS5tZW1vaXplZFByb3BzKSk7aWYoYiYmKGI9eWcpKXtpZihEZyhhKSl0aHJvdyBIZygpLEVycm9yKHAoNDE4KSk7Zm9yKDtiOylBZyhhLGIpLGI9TGYoYi5uZXh0U2libGluZyl9RmcoYSk7aWYoMTM9PT1hLnRhZyl7YT1hLm1lbW9pemVkU3RhdGU7YT1udWxsIT09YT9hLmRlaHlkcmF0ZWQ6bnVsbDtpZighYSl0aHJvdyBFcnJvcihwKDMxNykpO2E6e2E9YS5uZXh0U2libGluZztmb3IoYj0wO2E7KXtpZig4PT09YS5ub2RlVHlwZSl7dmFyIGM9YS5kYXRhO2lmKFwiLyRcIj09PWMpe2lmKDA9PT1iKXt5Zz1MZihhLm5leHRTaWJsaW5nKTticmVhayBhfWItLX1lbHNlXCIkXCIhPT1jJiZcIiQhXCIhPT1jJiZcIiQ/XCIhPT1jfHxiKyt9YT1hLm5leHRTaWJsaW5nfXlnPVxubnVsbH19ZWxzZSB5Zz14Zz9MZihhLnN0YXRlTm9kZS5uZXh0U2libGluZyk6bnVsbDtyZXR1cm4hMH1mdW5jdGlvbiBIZygpe2Zvcih2YXIgYT15ZzthOylhPUxmKGEubmV4dFNpYmxpbmcpfWZ1bmN0aW9uIElnKCl7eWc9eGc9bnVsbDtJPSExfWZ1bmN0aW9uIEpnKGEpe251bGw9PT16Zz96Zz1bYV06emcucHVzaChhKX12YXIgS2c9dWEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWc7XG5mdW5jdGlvbiBMZyhhLGIsYyl7YT1jLnJlZjtpZihudWxsIT09YSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJlwib2JqZWN0XCIhPT10eXBlb2YgYSl7aWYoYy5fb3duZXIpe2M9Yy5fb3duZXI7aWYoYyl7aWYoMSE9PWMudGFnKXRocm93IEVycm9yKHAoMzA5KSk7dmFyIGQ9Yy5zdGF0ZU5vZGV9aWYoIWQpdGhyb3cgRXJyb3IocCgxNDcsYSkpO3ZhciBlPWQsZj1cIlwiK2E7aWYobnVsbCE9PWImJm51bGwhPT1iLnJlZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGIucmVmJiZiLnJlZi5fc3RyaW5nUmVmPT09ZilyZXR1cm4gYi5yZWY7Yj1mdW5jdGlvbihhKXt2YXIgYj1lLnJlZnM7bnVsbD09PWE/ZGVsZXRlIGJbZl06YltmXT1hfTtiLl9zdHJpbmdSZWY9ZjtyZXR1cm4gYn1pZihcInN0cmluZ1wiIT09dHlwZW9mIGEpdGhyb3cgRXJyb3IocCgyODQpKTtpZighYy5fb3duZXIpdGhyb3cgRXJyb3IocCgyOTAsYSkpO31yZXR1cm4gYX1cbmZ1bmN0aW9uIE1nKGEsYil7YT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYik7dGhyb3cgRXJyb3IocCgzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09YT9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGIpLmpvaW4oXCIsIFwiKStcIn1cIjphKSk7fWZ1bmN0aW9uIE5nKGEpe3ZhciBiPWEuX2luaXQ7cmV0dXJuIGIoYS5fcGF5bG9hZCl9XG5mdW5jdGlvbiBPZyhhKXtmdW5jdGlvbiBiKGIsYyl7aWYoYSl7dmFyIGQ9Yi5kZWxldGlvbnM7bnVsbD09PWQ/KGIuZGVsZXRpb25zPVtjXSxiLmZsYWdzfD0xNik6ZC5wdXNoKGMpfX1mdW5jdGlvbiBjKGMsZCl7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKDtudWxsIT09ZDspYihjLGQpLGQ9ZC5zaWJsaW5nO3JldHVybiBudWxsfWZ1bmN0aW9uIGQoYSxiKXtmb3IoYT1uZXcgTWFwO251bGwhPT1iOyludWxsIT09Yi5rZXk/YS5zZXQoYi5rZXksYik6YS5zZXQoYi5pbmRleCxiKSxiPWIuc2libGluZztyZXR1cm4gYX1mdW5jdGlvbiBlKGEsYil7YT1QZyhhLGIpO2EuaW5kZXg9MDthLnNpYmxpbmc9bnVsbDtyZXR1cm4gYX1mdW5jdGlvbiBmKGIsYyxkKXtiLmluZGV4PWQ7aWYoIWEpcmV0dXJuIGIuZmxhZ3N8PTEwNDg1NzYsYztkPWIuYWx0ZXJuYXRlO2lmKG51bGwhPT1kKXJldHVybiBkPWQuaW5kZXgsZDxjPyhiLmZsYWdzfD0yLGMpOmQ7Yi5mbGFnc3w9MjtyZXR1cm4gY31mdW5jdGlvbiBnKGIpe2EmJlxubnVsbD09PWIuYWx0ZXJuYXRlJiYoYi5mbGFnc3w9Mik7cmV0dXJuIGJ9ZnVuY3Rpb24gaChhLGIsYyxkKXtpZihudWxsPT09Ynx8NiE9PWIudGFnKXJldHVybiBiPVFnKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIGsoYSxiLGMsZCl7dmFyIGY9Yy50eXBlO2lmKGY9PT15YSlyZXR1cm4gbShhLGIsYy5wcm9wcy5jaGlsZHJlbixkLGMua2V5KTtpZihudWxsIT09YiYmKGIuZWxlbWVudFR5cGU9PT1mfHxcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mJiZmLiQkdHlwZW9mPT09SGEmJk5nKGYpPT09Yi50eXBlKSlyZXR1cm4gZD1lKGIsYy5wcm9wcyksZC5yZWY9TGcoYSxiLGMpLGQucmV0dXJuPWEsZDtkPVJnKGMudHlwZSxjLmtleSxjLnByb3BzLG51bGwsYS5tb2RlLGQpO2QucmVmPUxnKGEsYixjKTtkLnJldHVybj1hO3JldHVybiBkfWZ1bmN0aW9uIGwoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDQhPT1iLnRhZ3x8XG5iLnN0YXRlTm9kZS5jb250YWluZXJJbmZvIT09Yy5jb250YWluZXJJbmZvfHxiLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbiE9PWMuaW1wbGVtZW50YXRpb24pcmV0dXJuIGI9U2coYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMuY2hpbGRyZW58fFtdKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIG0oYSxiLGMsZCxmKXtpZihudWxsPT09Ynx8NyE9PWIudGFnKXJldHVybiBiPVRnKGMsYS5tb2RlLGQsZiksYi5yZXR1cm49YSxiO2I9ZShiLGMpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gcShhLGIsYyl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBiJiZcIlwiIT09Ynx8XCJudW1iZXJcIj09PXR5cGVvZiBiKXJldHVybiBiPVFnKFwiXCIrYixhLm1vZGUsYyksYi5yZXR1cm49YSxiO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYiYmbnVsbCE9PWIpe3N3aXRjaChiLiQkdHlwZW9mKXtjYXNlIHZhOnJldHVybiBjPVJnKGIudHlwZSxiLmtleSxiLnByb3BzLG51bGwsYS5tb2RlLGMpLFxuYy5yZWY9TGcoYSxudWxsLGIpLGMucmV0dXJuPWEsYztjYXNlIHdhOnJldHVybiBiPVNnKGIsYS5tb2RlLGMpLGIucmV0dXJuPWEsYjtjYXNlIEhhOnZhciBkPWIuX2luaXQ7cmV0dXJuIHEoYSxkKGIuX3BheWxvYWQpLGMpfWlmKGViKGIpfHxLYShiKSlyZXR1cm4gYj1UZyhiLGEubW9kZSxjLG51bGwpLGIucmV0dXJuPWEsYjtNZyhhLGIpfXJldHVybiBudWxsfWZ1bmN0aW9uIHIoYSxiLGMsZCl7dmFyIGU9bnVsbCE9PWI/Yi5rZXk6bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGMmJlwiXCIhPT1jfHxcIm51bWJlclwiPT09dHlwZW9mIGMpcmV0dXJuIG51bGwhPT1lP251bGw6aChhLGIsXCJcIitjLGQpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWMpe3N3aXRjaChjLiQkdHlwZW9mKXtjYXNlIHZhOnJldHVybiBjLmtleT09PWU/ayhhLGIsYyxkKTpudWxsO2Nhc2Ugd2E6cmV0dXJuIGMua2V5PT09ZT9sKGEsYixjLGQpOm51bGw7Y2FzZSBIYTpyZXR1cm4gZT1jLl9pbml0LHIoYSxcbmIsZShjLl9wYXlsb2FkKSxkKX1pZihlYihjKXx8S2EoYykpcmV0dXJuIG51bGwhPT1lP251bGw6bShhLGIsYyxkLG51bGwpO01nKGEsYyl9cmV0dXJuIG51bGx9ZnVuY3Rpb24geShhLGIsYyxkLGUpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgZCYmXCJcIiE9PWR8fFwibnVtYmVyXCI9PT10eXBlb2YgZClyZXR1cm4gYT1hLmdldChjKXx8bnVsbCxoKGIsYSxcIlwiK2QsZSk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBkJiZudWxsIT09ZCl7c3dpdGNoKGQuJCR0eXBlb2Ype2Nhc2UgdmE6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGsoYixhLGQsZSk7Y2FzZSB3YTpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsbChiLGEsZCxlKTtjYXNlIEhhOnZhciBmPWQuX2luaXQ7cmV0dXJuIHkoYSxiLGMsZihkLl9wYXlsb2FkKSxlKX1pZihlYihkKXx8S2EoZCkpcmV0dXJuIGE9YS5nZXQoYyl8fG51bGwsbShiLGEsZCxlLG51bGwpO01nKGIsZCl9cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBuKGUsZyxoLGspe2Zvcih2YXIgbD1udWxsLG09bnVsbCx1PWcsdz1nPTAseD1udWxsO251bGwhPT11JiZ3PGgubGVuZ3RoO3crKyl7dS5pbmRleD53Pyh4PXUsdT1udWxsKTp4PXUuc2libGluZzt2YXIgbj1yKGUsdSxoW3ddLGspO2lmKG51bGw9PT1uKXtudWxsPT09dSYmKHU9eCk7YnJlYWt9YSYmdSYmbnVsbD09PW4uYWx0ZXJuYXRlJiZiKGUsdSk7Zz1mKG4sZyx3KTtudWxsPT09bT9sPW46bS5zaWJsaW5nPW47bT1uO3U9eH1pZih3PT09aC5sZW5ndGgpcmV0dXJuIGMoZSx1KSxJJiZ0ZyhlLHcpLGw7aWYobnVsbD09PXUpe2Zvcig7dzxoLmxlbmd0aDt3KyspdT1xKGUsaFt3XSxrKSxudWxsIT09dSYmKGc9Zih1LGcsdyksbnVsbD09PW0/bD11Om0uc2libGluZz11LG09dSk7SSYmdGcoZSx3KTtyZXR1cm4gbH1mb3IodT1kKGUsdSk7dzxoLmxlbmd0aDt3KyspeD15KHUsZSx3LGhbd10sayksbnVsbCE9PXgmJihhJiZudWxsIT09eC5hbHRlcm5hdGUmJnUuZGVsZXRlKG51bGw9PT1cbngua2V5P3c6eC5rZXkpLGc9Zih4LGcsdyksbnVsbD09PW0/bD14Om0uc2libGluZz14LG09eCk7YSYmdS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtJJiZ0ZyhlLHcpO3JldHVybiBsfWZ1bmN0aW9uIHQoZSxnLGgsayl7dmFyIGw9S2EoaCk7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGwpdGhyb3cgRXJyb3IocCgxNTApKTtoPWwuY2FsbChoKTtpZihudWxsPT1oKXRocm93IEVycm9yKHAoMTUxKSk7Zm9yKHZhciB1PWw9bnVsbCxtPWcsdz1nPTAseD1udWxsLG49aC5uZXh0KCk7bnVsbCE9PW0mJiFuLmRvbmU7dysrLG49aC5uZXh0KCkpe20uaW5kZXg+dz8oeD1tLG09bnVsbCk6eD1tLnNpYmxpbmc7dmFyIHQ9cihlLG0sbi52YWx1ZSxrKTtpZihudWxsPT09dCl7bnVsbD09PW0mJihtPXgpO2JyZWFrfWEmJm0mJm51bGw9PT10LmFsdGVybmF0ZSYmYihlLG0pO2c9Zih0LGcsdyk7bnVsbD09PXU/bD10OnUuc2libGluZz10O3U9dDttPXh9aWYobi5kb25lKXJldHVybiBjKGUsXG5tKSxJJiZ0ZyhlLHcpLGw7aWYobnVsbD09PW0pe2Zvcig7IW4uZG9uZTt3Kyssbj1oLm5leHQoKSluPXEoZSxuLnZhbHVlLGspLG51bGwhPT1uJiYoZz1mKG4sZyx3KSxudWxsPT09dT9sPW46dS5zaWJsaW5nPW4sdT1uKTtJJiZ0ZyhlLHcpO3JldHVybiBsfWZvcihtPWQoZSxtKTshbi5kb25lO3crKyxuPWgubmV4dCgpKW49eShtLGUsdyxuLnZhbHVlLGspLG51bGwhPT1uJiYoYSYmbnVsbCE9PW4uYWx0ZXJuYXRlJiZtLmRlbGV0ZShudWxsPT09bi5rZXk/dzpuLmtleSksZz1mKG4sZyx3KSxudWxsPT09dT9sPW46dS5zaWJsaW5nPW4sdT1uKTthJiZtLmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO0kmJnRnKGUsdyk7cmV0dXJuIGx9ZnVuY3Rpb24gSihhLGQsZixoKXtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mJiZmLnR5cGU9PT15YSYmbnVsbD09PWYua2V5JiYoZj1mLnByb3BzLmNoaWxkcmVuKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mKXtzd2l0Y2goZi4kJHR5cGVvZil7Y2FzZSB2YTphOntmb3IodmFyIGs9XG5mLmtleSxsPWQ7bnVsbCE9PWw7KXtpZihsLmtleT09PWspe2s9Zi50eXBlO2lmKGs9PT15YSl7aWYoNz09PWwudGFnKXtjKGEsbC5zaWJsaW5nKTtkPWUobCxmLnByb3BzLmNoaWxkcmVuKTtkLnJldHVybj1hO2E9ZDticmVhayBhfX1lbHNlIGlmKGwuZWxlbWVudFR5cGU9PT1rfHxcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rJiZrLiQkdHlwZW9mPT09SGEmJk5nKGspPT09bC50eXBlKXtjKGEsbC5zaWJsaW5nKTtkPWUobCxmLnByb3BzKTtkLnJlZj1MZyhhLGwsZik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1jKGEsbCk7YnJlYWt9ZWxzZSBiKGEsbCk7bD1sLnNpYmxpbmd9Zi50eXBlPT09eWE/KGQ9VGcoZi5wcm9wcy5jaGlsZHJlbixhLm1vZGUsaCxmLmtleSksZC5yZXR1cm49YSxhPWQpOihoPVJnKGYudHlwZSxmLmtleSxmLnByb3BzLG51bGwsYS5tb2RlLGgpLGgucmVmPUxnKGEsZCxmKSxoLnJldHVybj1hLGE9aCl9cmV0dXJuIGcoYSk7Y2FzZSB3YTphOntmb3IobD1mLmtleTtudWxsIT09XG5kOyl7aWYoZC5rZXk9PT1sKWlmKDQ9PT1kLnRhZyYmZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbz09PWYuY29udGFpbmVySW5mbyYmZC5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb249PT1mLmltcGxlbWVudGF0aW9uKXtjKGEsZC5zaWJsaW5nKTtkPWUoZCxmLmNoaWxkcmVufHxbXSk7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1lbHNle2MoYSxkKTticmVha31lbHNlIGIoYSxkKTtkPWQuc2libGluZ31kPVNnKGYsYS5tb2RlLGgpO2QucmV0dXJuPWE7YT1kfXJldHVybiBnKGEpO2Nhc2UgSGE6cmV0dXJuIGw9Zi5faW5pdCxKKGEsZCxsKGYuX3BheWxvYWQpLGgpfWlmKGViKGYpKXJldHVybiBuKGEsZCxmLGgpO2lmKEthKGYpKXJldHVybiB0KGEsZCxmLGgpO01nKGEsZil9cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBmJiZcIlwiIT09Znx8XCJudW1iZXJcIj09PXR5cGVvZiBmPyhmPVwiXCIrZixudWxsIT09ZCYmNj09PWQudGFnPyhjKGEsZC5zaWJsaW5nKSxkPWUoZCxmKSxkLnJldHVybj1hLGE9ZCk6XG4oYyhhLGQpLGQ9UWcoZixhLm1vZGUsaCksZC5yZXR1cm49YSxhPWQpLGcoYSkpOmMoYSxkKX1yZXR1cm4gSn12YXIgVWc9T2coITApLFZnPU9nKCExKSxXZz1VZihudWxsKSxYZz1udWxsLFlnPW51bGwsWmc9bnVsbDtmdW5jdGlvbiAkZygpe1pnPVlnPVhnPW51bGx9ZnVuY3Rpb24gYWgoYSl7dmFyIGI9V2cuY3VycmVudDtFKFdnKTthLl9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBiaChhLGIsYyl7Zm9yKDtudWxsIT09YTspe3ZhciBkPWEuYWx0ZXJuYXRlOyhhLmNoaWxkTGFuZXMmYikhPT1iPyhhLmNoaWxkTGFuZXN8PWIsbnVsbCE9PWQmJihkLmNoaWxkTGFuZXN8PWIpKTpudWxsIT09ZCYmKGQuY2hpbGRMYW5lcyZiKSE9PWImJihkLmNoaWxkTGFuZXN8PWIpO2lmKGE9PT1jKWJyZWFrO2E9YS5yZXR1cm59fVxuZnVuY3Rpb24gY2goYSxiKXtYZz1hO1pnPVlnPW51bGw7YT1hLmRlcGVuZGVuY2llcztudWxsIT09YSYmbnVsbCE9PWEuZmlyc3RDb250ZXh0JiYoMCE9PShhLmxhbmVzJmIpJiYoZGg9ITApLGEuZmlyc3RDb250ZXh0PW51bGwpfWZ1bmN0aW9uIGVoKGEpe3ZhciBiPWEuX2N1cnJlbnRWYWx1ZTtpZihaZyE9PWEpaWYoYT17Y29udGV4dDphLG1lbW9pemVkVmFsdWU6YixuZXh0Om51bGx9LG51bGw9PT1ZZyl7aWYobnVsbD09PVhnKXRocm93IEVycm9yKHAoMzA4KSk7WWc9YTtYZy5kZXBlbmRlbmNpZXM9e2xhbmVzOjAsZmlyc3RDb250ZXh0OmF9fWVsc2UgWWc9WWcubmV4dD1hO3JldHVybiBifXZhciBmaD1udWxsO2Z1bmN0aW9uIGdoKGEpe251bGw9PT1maD9maD1bYV06ZmgucHVzaChhKX1cbmZ1bmN0aW9uIGhoKGEsYixjLGQpe3ZhciBlPWIuaW50ZXJsZWF2ZWQ7bnVsbD09PWU/KGMubmV4dD1jLGdoKGIpKTooYy5uZXh0PWUubmV4dCxlLm5leHQ9Yyk7Yi5pbnRlcmxlYXZlZD1jO3JldHVybiBpaChhLGQpfWZ1bmN0aW9uIGloKGEsYil7YS5sYW5lc3w9Yjt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmKGMubGFuZXN8PWIpO2M9YTtmb3IoYT1hLnJldHVybjtudWxsIT09YTspYS5jaGlsZExhbmVzfD1iLGM9YS5hbHRlcm5hdGUsbnVsbCE9PWMmJihjLmNoaWxkTGFuZXN8PWIpLGM9YSxhPWEucmV0dXJuO3JldHVybiAzPT09Yy50YWc/Yy5zdGF0ZU5vZGU6bnVsbH12YXIgamg9ITE7ZnVuY3Rpb24ga2goYSl7YS51cGRhdGVRdWV1ZT17YmFzZVN0YXRlOmEubWVtb2l6ZWRTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6bnVsbCxsYXN0QmFzZVVwZGF0ZTpudWxsLHNoYXJlZDp7cGVuZGluZzpudWxsLGludGVybGVhdmVkOm51bGwsbGFuZXM6MH0sZWZmZWN0czpudWxsfX1cbmZ1bmN0aW9uIGxoKGEsYil7YT1hLnVwZGF0ZVF1ZXVlO2IudXBkYXRlUXVldWU9PT1hJiYoYi51cGRhdGVRdWV1ZT17YmFzZVN0YXRlOmEuYmFzZVN0YXRlLGZpcnN0QmFzZVVwZGF0ZTphLmZpcnN0QmFzZVVwZGF0ZSxsYXN0QmFzZVVwZGF0ZTphLmxhc3RCYXNlVXBkYXRlLHNoYXJlZDphLnNoYXJlZCxlZmZlY3RzOmEuZWZmZWN0c30pfWZ1bmN0aW9uIG1oKGEsYil7cmV0dXJue2V2ZW50VGltZTphLGxhbmU6Yix0YWc6MCxwYXlsb2FkOm51bGwsY2FsbGJhY2s6bnVsbCxuZXh0Om51bGx9fVxuZnVuY3Rpb24gbmgoYSxiLGMpe3ZhciBkPWEudXBkYXRlUXVldWU7aWYobnVsbD09PWQpcmV0dXJuIG51bGw7ZD1kLnNoYXJlZDtpZigwIT09KEsmMikpe3ZhciBlPWQucGVuZGluZztudWxsPT09ZT9iLm5leHQ9YjooYi5uZXh0PWUubmV4dCxlLm5leHQ9Yik7ZC5wZW5kaW5nPWI7cmV0dXJuIGloKGEsYyl9ZT1kLmludGVybGVhdmVkO251bGw9PT1lPyhiLm5leHQ9YixnaChkKSk6KGIubmV4dD1lLm5leHQsZS5uZXh0PWIpO2QuaW50ZXJsZWF2ZWQ9YjtyZXR1cm4gaWgoYSxjKX1mdW5jdGlvbiBvaChhLGIsYyl7Yj1iLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iJiYoYj1iLnNoYXJlZCwwIT09KGMmNDE5NDI0MCkpKXt2YXIgZD1iLmxhbmVzO2QmPWEucGVuZGluZ0xhbmVzO2N8PWQ7Yi5sYW5lcz1jO0NjKGEsYyl9fVxuZnVuY3Rpb24gcGgoYSxiKXt2YXIgYz1hLnVwZGF0ZVF1ZXVlLGQ9YS5hbHRlcm5hdGU7aWYobnVsbCE9PWQmJihkPWQudXBkYXRlUXVldWUsYz09PWQpKXt2YXIgZT1udWxsLGY9bnVsbDtjPWMuZmlyc3RCYXNlVXBkYXRlO2lmKG51bGwhPT1jKXtkb3t2YXIgZz17ZXZlbnRUaW1lOmMuZXZlbnRUaW1lLGxhbmU6Yy5sYW5lLHRhZzpjLnRhZyxwYXlsb2FkOmMucGF5bG9hZCxjYWxsYmFjazpjLmNhbGxiYWNrLG5leHQ6bnVsbH07bnVsbD09PWY/ZT1mPWc6Zj1mLm5leHQ9ZztjPWMubmV4dH13aGlsZShudWxsIT09Yyk7bnVsbD09PWY/ZT1mPWI6Zj1mLm5leHQ9Yn1lbHNlIGU9Zj1iO2M9e2Jhc2VTdGF0ZTpkLmJhc2VTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6ZSxsYXN0QmFzZVVwZGF0ZTpmLHNoYXJlZDpkLnNoYXJlZCxlZmZlY3RzOmQuZWZmZWN0c307YS51cGRhdGVRdWV1ZT1jO3JldHVybn1hPWMubGFzdEJhc2VVcGRhdGU7bnVsbD09PWE/Yy5maXJzdEJhc2VVcGRhdGU9YjphLm5leHQ9XG5iO2MubGFzdEJhc2VVcGRhdGU9Yn1cbmZ1bmN0aW9uIHFoKGEsYixjLGQpe3ZhciBlPWEudXBkYXRlUXVldWU7amg9ITE7dmFyIGY9ZS5maXJzdEJhc2VVcGRhdGUsZz1lLmxhc3RCYXNlVXBkYXRlLGg9ZS5zaGFyZWQucGVuZGluZztpZihudWxsIT09aCl7ZS5zaGFyZWQucGVuZGluZz1udWxsO3ZhciBrPWgsbD1rLm5leHQ7ay5uZXh0PW51bGw7bnVsbD09PWc/Zj1sOmcubmV4dD1sO2c9azt2YXIgbT1hLmFsdGVybmF0ZTtudWxsIT09bSYmKG09bS51cGRhdGVRdWV1ZSxoPW0ubGFzdEJhc2VVcGRhdGUsaCE9PWcmJihudWxsPT09aD9tLmZpcnN0QmFzZVVwZGF0ZT1sOmgubmV4dD1sLG0ubGFzdEJhc2VVcGRhdGU9aykpfWlmKG51bGwhPT1mKXt2YXIgcT1lLmJhc2VTdGF0ZTtnPTA7bT1sPWs9bnVsbDtoPWY7ZG97dmFyIHI9aC5sYW5lLHk9aC5ldmVudFRpbWU7aWYoKGQmcik9PT1yKXtudWxsIT09bSYmKG09bS5uZXh0PXtldmVudFRpbWU6eSxsYW5lOjAsdGFnOmgudGFnLHBheWxvYWQ6aC5wYXlsb2FkLGNhbGxiYWNrOmguY2FsbGJhY2ssXG5uZXh0Om51bGx9KTthOnt2YXIgbj1hLHQ9aDtyPWI7eT1jO3N3aXRjaCh0LnRhZyl7Y2FzZSAxOm49dC5wYXlsb2FkO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBuKXtxPW4uY2FsbCh5LHEscik7YnJlYWsgYX1xPW47YnJlYWsgYTtjYXNlIDM6bi5mbGFncz1uLmZsYWdzJi02NTUzN3wxMjg7Y2FzZSAwOm49dC5wYXlsb2FkO3I9XCJmdW5jdGlvblwiPT09dHlwZW9mIG4/bi5jYWxsKHkscSxyKTpuO2lmKG51bGw9PT1yfHx2b2lkIDA9PT1yKWJyZWFrIGE7cT1BKHt9LHEscik7YnJlYWsgYTtjYXNlIDI6amg9ITB9fW51bGwhPT1oLmNhbGxiYWNrJiYwIT09aC5sYW5lJiYoYS5mbGFnc3w9NjQscj1lLmVmZmVjdHMsbnVsbD09PXI/ZS5lZmZlY3RzPVtoXTpyLnB1c2goaCkpfWVsc2UgeT17ZXZlbnRUaW1lOnksbGFuZTpyLHRhZzpoLnRhZyxwYXlsb2FkOmgucGF5bG9hZCxjYWxsYmFjazpoLmNhbGxiYWNrLG5leHQ6bnVsbH0sbnVsbD09PW0/KGw9bT15LGs9cSk6bT1tLm5leHQ9eSxnfD1yO1xuaD1oLm5leHQ7aWYobnVsbD09PWgpaWYoaD1lLnNoYXJlZC5wZW5kaW5nLG51bGw9PT1oKWJyZWFrO2Vsc2Ugcj1oLGg9ci5uZXh0LHIubmV4dD1udWxsLGUubGFzdEJhc2VVcGRhdGU9cixlLnNoYXJlZC5wZW5kaW5nPW51bGx9d2hpbGUoMSk7bnVsbD09PW0mJihrPXEpO2UuYmFzZVN0YXRlPWs7ZS5maXJzdEJhc2VVcGRhdGU9bDtlLmxhc3RCYXNlVXBkYXRlPW07Yj1lLnNoYXJlZC5pbnRlcmxlYXZlZDtpZihudWxsIT09Yil7ZT1iO2RvIGd8PWUubGFuZSxlPWUubmV4dDt3aGlsZShlIT09Yil9ZWxzZSBudWxsPT09ZiYmKGUuc2hhcmVkLmxhbmVzPTApO3JofD1nO2EubGFuZXM9ZzthLm1lbW9pemVkU3RhdGU9cX19XG5mdW5jdGlvbiBzaChhLGIsYyl7YT1iLmVmZmVjdHM7Yi5lZmZlY3RzPW51bGw7aWYobnVsbCE9PWEpZm9yKGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGQ9YVtiXSxlPWQuY2FsbGJhY2s7aWYobnVsbCE9PWUpe2QuY2FsbGJhY2s9bnVsbDtkPWM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGUpdGhyb3cgRXJyb3IocCgxOTEsZSkpO2UuY2FsbChkKX19fXZhciB0aD17fSx1aD1VZih0aCksdmg9VWYodGgpLHdoPVVmKHRoKTtmdW5jdGlvbiB4aChhKXtpZihhPT09dGgpdGhyb3cgRXJyb3IocCgxNzQpKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIHloKGEsYil7Ryh3aCxiKTtHKHZoLGEpO0codWgsdGgpO2E9Yi5ub2RlVHlwZTtzd2l0Y2goYSl7Y2FzZSA5OmNhc2UgMTE6Yj0oYj1iLmRvY3VtZW50RWxlbWVudCk/Yi5uYW1lc3BhY2VVUkk6bGIobnVsbCxcIlwiKTticmVhaztkZWZhdWx0OmE9OD09PWE/Yi5wYXJlbnROb2RlOmIsYj1hLm5hbWVzcGFjZVVSSXx8bnVsbCxhPWEudGFnTmFtZSxiPWxiKGIsYSl9RSh1aCk7Ryh1aCxiKX1mdW5jdGlvbiB6aCgpe0UodWgpO0UodmgpO0Uod2gpfWZ1bmN0aW9uIEFoKGEpe3hoKHdoLmN1cnJlbnQpO3ZhciBiPXhoKHVoLmN1cnJlbnQpO3ZhciBjPWxiKGIsYS50eXBlKTtiIT09YyYmKEcodmgsYSksRyh1aCxjKSl9ZnVuY3Rpb24gQmgoYSl7dmguY3VycmVudD09PWEmJihFKHVoKSxFKHZoKSl9dmFyIEw9VWYoMCk7XG5mdW5jdGlvbiBDaChhKXtmb3IodmFyIGI9YTtudWxsIT09Yjspe2lmKDEzPT09Yi50YWcpe3ZhciBjPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YyYmKGM9Yy5kZWh5ZHJhdGVkLG51bGw9PT1jfHxcIiQ/XCI9PT1jLmRhdGF8fFwiJCFcIj09PWMuZGF0YSkpcmV0dXJuIGJ9ZWxzZSBpZigxOT09PWIudGFnJiZ2b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMucmV2ZWFsT3JkZXIpe2lmKDAhPT0oYi5mbGFncyYxMjgpKXJldHVybiBifWVsc2UgaWYobnVsbCE9PWIuY2hpbGQpe2IuY2hpbGQucmV0dXJuPWI7Yj1iLmNoaWxkO2NvbnRpbnVlfWlmKGI9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWIuc2libGluZzspe2lmKG51bGw9PT1iLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ31yZXR1cm4gbnVsbH12YXIgRGg9W107XG5mdW5jdGlvbiBFaCgpe2Zvcih2YXIgYT0wO2E8RGgubGVuZ3RoO2ErKylEaFthXS5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeT1udWxsO0RoLmxlbmd0aD0wfXZhciBGaD11YS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLEdoPXVhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLEhoPTAsTT1udWxsLE49bnVsbCxPPW51bGwsSWg9ITEsSmg9ITEsS2g9MCxMaD0wO2Z1bmN0aW9uIFAoKXt0aHJvdyBFcnJvcihwKDMyMSkpO31mdW5jdGlvbiBNaChhLGIpe2lmKG51bGw9PT1iKXJldHVybiExO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGgmJmM8YS5sZW5ndGg7YysrKWlmKCFIZShhW2NdLGJbY10pKXJldHVybiExO3JldHVybiEwfVxuZnVuY3Rpb24gTmgoYSxiLGMsZCxlLGYpe0hoPWY7TT1iO2IubWVtb2l6ZWRTdGF0ZT1udWxsO2IudXBkYXRlUXVldWU9bnVsbDtiLmxhbmVzPTA7RmguY3VycmVudD1udWxsPT09YXx8bnVsbD09PWEubWVtb2l6ZWRTdGF0ZT9PaDpQaDthPWMoZCxlKTtpZihKaCl7Zj0wO2Rve0poPSExO0toPTA7aWYoMjU8PWYpdGhyb3cgRXJyb3IocCgzMDEpKTtmKz0xO089Tj1udWxsO2IudXBkYXRlUXVldWU9bnVsbDtGaC5jdXJyZW50PVFoO2E9YyhkLGUpfXdoaWxlKEpoKX1GaC5jdXJyZW50PVJoO2I9bnVsbCE9PU4mJm51bGwhPT1OLm5leHQ7SGg9MDtPPU49TT1udWxsO0loPSExO2lmKGIpdGhyb3cgRXJyb3IocCgzMDApKTtyZXR1cm4gYX1mdW5jdGlvbiBTaCgpe3ZhciBhPTAhPT1LaDtLaD0wO3JldHVybiBhfVxuZnVuY3Rpb24gVGgoKXt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpudWxsLGJhc2VTdGF0ZTpudWxsLGJhc2VRdWV1ZTpudWxsLHF1ZXVlOm51bGwsbmV4dDpudWxsfTtudWxsPT09Tz9NLm1lbW9pemVkU3RhdGU9Tz1hOk89Ty5uZXh0PWE7cmV0dXJuIE99ZnVuY3Rpb24gVWgoKXtpZihudWxsPT09Til7dmFyIGE9TS5hbHRlcm5hdGU7YT1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbH1lbHNlIGE9Ti5uZXh0O3ZhciBiPW51bGw9PT1PP00ubWVtb2l6ZWRTdGF0ZTpPLm5leHQ7aWYobnVsbCE9PWIpTz1iLE49YTtlbHNle2lmKG51bGw9PT1hKXRocm93IEVycm9yKHAoMzEwKSk7Tj1hO2E9e21lbW9pemVkU3RhdGU6Ti5tZW1vaXplZFN0YXRlLGJhc2VTdGF0ZTpOLmJhc2VTdGF0ZSxiYXNlUXVldWU6Ti5iYXNlUXVldWUscXVldWU6Ti5xdWV1ZSxuZXh0Om51bGx9O251bGw9PT1PP00ubWVtb2l6ZWRTdGF0ZT1PPWE6Tz1PLm5leHQ9YX1yZXR1cm4gT31cbmZ1bmN0aW9uIFZoKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihhKTpifVxuZnVuY3Rpb24gV2goYSl7dmFyIGI9VWgoKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgRXJyb3IocCgzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTt2YXIgZD1OLGU9ZC5iYXNlUXVldWUsZj1jLnBlbmRpbmc7aWYobnVsbCE9PWYpe2lmKG51bGwhPT1lKXt2YXIgZz1lLm5leHQ7ZS5uZXh0PWYubmV4dDtmLm5leHQ9Z31kLmJhc2VRdWV1ZT1lPWY7Yy5wZW5kaW5nPW51bGx9aWYobnVsbCE9PWUpe2Y9ZS5uZXh0O2Q9ZC5iYXNlU3RhdGU7dmFyIGg9Zz1udWxsLGs9bnVsbCxsPWY7ZG97dmFyIG09bC5sYW5lO2lmKChIaCZtKT09PW0pbnVsbCE9PWsmJihrPWsubmV4dD17bGFuZTowLGFjdGlvbjpsLmFjdGlvbixoYXNFYWdlclN0YXRlOmwuaGFzRWFnZXJTdGF0ZSxlYWdlclN0YXRlOmwuZWFnZXJTdGF0ZSxuZXh0Om51bGx9KSxkPWwuaGFzRWFnZXJTdGF0ZT9sLmVhZ2VyU3RhdGU6YShkLGwuYWN0aW9uKTtlbHNle3ZhciBxPXtsYW5lOm0sYWN0aW9uOmwuYWN0aW9uLGhhc0VhZ2VyU3RhdGU6bC5oYXNFYWdlclN0YXRlLFxuZWFnZXJTdGF0ZTpsLmVhZ2VyU3RhdGUsbmV4dDpudWxsfTtudWxsPT09az8oaD1rPXEsZz1kKTprPWsubmV4dD1xO00ubGFuZXN8PW07cmh8PW19bD1sLm5leHR9d2hpbGUobnVsbCE9PWwmJmwhPT1mKTtudWxsPT09az9nPWQ6ay5uZXh0PWg7SGUoZCxiLm1lbW9pemVkU3RhdGUpfHwoZGg9ITApO2IubWVtb2l6ZWRTdGF0ZT1kO2IuYmFzZVN0YXRlPWc7Yi5iYXNlUXVldWU9aztjLmxhc3RSZW5kZXJlZFN0YXRlPWR9YT1jLmludGVybGVhdmVkO2lmKG51bGwhPT1hKXtlPWE7ZG8gZj1lLmxhbmUsTS5sYW5lc3w9ZixyaHw9ZixlPWUubmV4dDt3aGlsZShlIT09YSl9ZWxzZSBudWxsPT09ZSYmKGMubGFuZXM9MCk7cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxjLmRpc3BhdGNoXX1cbmZ1bmN0aW9uIFhoKGEpe3ZhciBiPVVoKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IEVycm9yKHAoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7dmFyIGQ9Yy5kaXNwYXRjaCxlPWMucGVuZGluZyxmPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZSl7Yy5wZW5kaW5nPW51bGw7dmFyIGc9ZT1lLm5leHQ7ZG8gZj1hKGYsZy5hY3Rpb24pLGc9Zy5uZXh0O3doaWxlKGchPT1lKTtIZShmLGIubWVtb2l6ZWRTdGF0ZSl8fChkaD0hMCk7Yi5tZW1vaXplZFN0YXRlPWY7bnVsbD09PWIuYmFzZVF1ZXVlJiYoYi5iYXNlU3RhdGU9Zik7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mfXJldHVybltmLGRdfWZ1bmN0aW9uIFloKCl7fVxuZnVuY3Rpb24gWmgoYSxiKXt2YXIgYz1NLGQ9VWgoKSxlPWIoKSxmPSFIZShkLm1lbW9pemVkU3RhdGUsZSk7ZiYmKGQubWVtb2l6ZWRTdGF0ZT1lLGRoPSEwKTtkPWQucXVldWU7JGgoYWkuYmluZChudWxsLGMsZCxhKSxbYV0pO2lmKGQuZ2V0U25hcHNob3QhPT1ifHxmfHxudWxsIT09TyYmTy5tZW1vaXplZFN0YXRlLnRhZyYxKXtjLmZsYWdzfD0yMDQ4O2JpKDksY2kuYmluZChudWxsLGMsZCxlLGIpLHZvaWQgMCxudWxsKTtpZihudWxsPT09USl0aHJvdyBFcnJvcihwKDM0OSkpOzAhPT0oSGgmMzApfHxkaShjLGIsZSl9cmV0dXJuIGV9ZnVuY3Rpb24gZGkoYSxiLGMpe2EuZmxhZ3N8PTE2Mzg0O2E9e2dldFNuYXBzaG90OmIsdmFsdWU6Y307Yj1NLnVwZGF0ZVF1ZXVlO251bGw9PT1iPyhiPXtsYXN0RWZmZWN0Om51bGwsc3RvcmVzOm51bGx9LE0udXBkYXRlUXVldWU9YixiLnN0b3Jlcz1bYV0pOihjPWIuc3RvcmVzLG51bGw9PT1jP2Iuc3RvcmVzPVthXTpjLnB1c2goYSkpfVxuZnVuY3Rpb24gY2koYSxiLGMsZCl7Yi52YWx1ZT1jO2IuZ2V0U25hcHNob3Q9ZDtlaShiKSYmZmkoYSl9ZnVuY3Rpb24gYWkoYSxiLGMpe3JldHVybiBjKGZ1bmN0aW9uKCl7ZWkoYikmJmZpKGEpfSl9ZnVuY3Rpb24gZWkoYSl7dmFyIGI9YS5nZXRTbmFwc2hvdDthPWEudmFsdWU7dHJ5e3ZhciBjPWIoKTtyZXR1cm4hSGUoYSxjKX1jYXRjaChkKXtyZXR1cm4hMH19ZnVuY3Rpb24gZmkoYSl7dmFyIGI9aWgoYSwxKTtudWxsIT09YiYmZ2koYixhLDEsLTEpfVxuZnVuY3Rpb24gaGkoYSl7dmFyIGI9VGgoKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSYmKGE9YSgpKTtiLm1lbW9pemVkU3RhdGU9Yi5iYXNlU3RhdGU9YTthPXtwZW5kaW5nOm51bGwsaW50ZXJsZWF2ZWQ6bnVsbCxsYW5lczowLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjpWaCxsYXN0UmVuZGVyZWRTdGF0ZTphfTtiLnF1ZXVlPWE7YT1hLmRpc3BhdGNoPWlpLmJpbmQobnVsbCxNLGEpO3JldHVybltiLm1lbW9pemVkU3RhdGUsYV19XG5mdW5jdGlvbiBiaShhLGIsYyxkKXthPXt0YWc6YSxjcmVhdGU6YixkZXN0cm95OmMsZGVwczpkLG5leHQ6bnVsbH07Yj1NLnVwZGF0ZVF1ZXVlO251bGw9PT1iPyhiPXtsYXN0RWZmZWN0Om51bGwsc3RvcmVzOm51bGx9LE0udXBkYXRlUXVldWU9YixiLmxhc3RFZmZlY3Q9YS5uZXh0PWEpOihjPWIubGFzdEVmZmVjdCxudWxsPT09Yz9iLmxhc3RFZmZlY3Q9YS5uZXh0PWE6KGQ9Yy5uZXh0LGMubmV4dD1hLGEubmV4dD1kLGIubGFzdEVmZmVjdD1hKSk7cmV0dXJuIGF9ZnVuY3Rpb24gamkoKXtyZXR1cm4gVWgoKS5tZW1vaXplZFN0YXRlfWZ1bmN0aW9uIGtpKGEsYixjLGQpe3ZhciBlPVRoKCk7TS5mbGFnc3w9YTtlLm1lbW9pemVkU3RhdGU9YmkoMXxiLGMsdm9pZCAwLHZvaWQgMD09PWQ/bnVsbDpkKX1cbmZ1bmN0aW9uIGxpKGEsYixjLGQpe3ZhciBlPVVoKCk7ZD12b2lkIDA9PT1kP251bGw6ZDt2YXIgZj12b2lkIDA7aWYobnVsbCE9PU4pe3ZhciBnPU4ubWVtb2l6ZWRTdGF0ZTtmPWcuZGVzdHJveTtpZihudWxsIT09ZCYmTWgoZCxnLmRlcHMpKXtlLm1lbW9pemVkU3RhdGU9YmkoYixjLGYsZCk7cmV0dXJufX1NLmZsYWdzfD1hO2UubWVtb2l6ZWRTdGF0ZT1iaSgxfGIsYyxmLGQpfWZ1bmN0aW9uIG1pKGEsYil7cmV0dXJuIGtpKDgzOTA2NTYsOCxhLGIpfWZ1bmN0aW9uICRoKGEsYil7cmV0dXJuIGxpKDIwNDgsOCxhLGIpfWZ1bmN0aW9uIG5pKGEsYil7cmV0dXJuIGxpKDQsMixhLGIpfWZ1bmN0aW9uIG9pKGEsYil7cmV0dXJuIGxpKDQsNCxhLGIpfVxuZnVuY3Rpb24gcGkoYSxiKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYilyZXR1cm4gYT1hKCksYihhKSxmdW5jdGlvbigpe2IobnVsbCl9O2lmKG51bGwhPT1iJiZ2b2lkIDAhPT1iKXJldHVybiBhPWEoKSxiLmN1cnJlbnQ9YSxmdW5jdGlvbigpe2IuY3VycmVudD1udWxsfX1mdW5jdGlvbiBxaShhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIGxpKDQsNCxwaS5iaW5kKG51bGwsYixhKSxjKX1mdW5jdGlvbiByaSgpe31mdW5jdGlvbiBzaShhLGIpe3ZhciBjPVVoKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZNaChiLGRbMV0pKXJldHVybiBkWzBdO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1cbmZ1bmN0aW9uIHRpKGEsYil7dmFyIGM9VWgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJk1oKGIsZFsxXSkpcmV0dXJuIGRbMF07YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfWZ1bmN0aW9uIHVpKGEsYixjKXtpZigwPT09KEhoJjIxKSlyZXR1cm4gYS5iYXNlU3RhdGUmJihhLmJhc2VTdGF0ZT0hMSxkaD0hMCksYS5tZW1vaXplZFN0YXRlPWM7SGUoYyxiKXx8KGM9eWMoKSxNLmxhbmVzfD1jLHJofD1jLGEuYmFzZVN0YXRlPSEwKTtyZXR1cm4gYn1mdW5jdGlvbiB2aShhLGIpe3ZhciBjPUM7Qz0wIT09YyYmND5jP2M6NDthKCEwKTt2YXIgZD1HaC50cmFuc2l0aW9uO0doLnRyYW5zaXRpb249e307dHJ5e2EoITEpLGIoKX1maW5hbGx5e0M9YyxHaC50cmFuc2l0aW9uPWR9fWZ1bmN0aW9uIHdpKCl7cmV0dXJuIFVoKCkubWVtb2l6ZWRTdGF0ZX1cbmZ1bmN0aW9uIHhpKGEsYixjKXt2YXIgZD15aShhKTtjPXtsYW5lOmQsYWN0aW9uOmMsaGFzRWFnZXJTdGF0ZTohMSxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfTtpZih6aShhKSlBaShiLGMpO2Vsc2UgaWYoYz1oaChhLGIsYyxkKSxudWxsIT09Yyl7dmFyIGU9UigpO2dpKGMsYSxkLGUpO0JpKGMsYixkKX19XG5mdW5jdGlvbiBpaShhLGIsYyl7dmFyIGQ9eWkoYSksZT17bGFuZTpkLGFjdGlvbjpjLGhhc0VhZ2VyU3RhdGU6ITEsZWFnZXJTdGF0ZTpudWxsLG5leHQ6bnVsbH07aWYoemkoYSkpQWkoYixlKTtlbHNle3ZhciBmPWEuYWx0ZXJuYXRlO2lmKDA9PT1hLmxhbmVzJiYobnVsbD09PWZ8fDA9PT1mLmxhbmVzKSYmKGY9Yi5sYXN0UmVuZGVyZWRSZWR1Y2VyLG51bGwhPT1mKSl0cnl7dmFyIGc9Yi5sYXN0UmVuZGVyZWRTdGF0ZSxoPWYoZyxjKTtlLmhhc0VhZ2VyU3RhdGU9ITA7ZS5lYWdlclN0YXRlPWg7aWYoSGUoaCxnKSl7dmFyIGs9Yi5pbnRlcmxlYXZlZDtudWxsPT09az8oZS5uZXh0PWUsZ2goYikpOihlLm5leHQ9ay5uZXh0LGsubmV4dD1lKTtiLmludGVybGVhdmVkPWU7cmV0dXJufX1jYXRjaChsKXt9ZmluYWxseXt9Yz1oaChhLGIsZSxkKTtudWxsIT09YyYmKGU9UigpLGdpKGMsYSxkLGUpLEJpKGMsYixkKSl9fVxuZnVuY3Rpb24gemkoYSl7dmFyIGI9YS5hbHRlcm5hdGU7cmV0dXJuIGE9PT1NfHxudWxsIT09YiYmYj09PU19ZnVuY3Rpb24gQWkoYSxiKXtKaD1JaD0hMDt2YXIgYz1hLnBlbmRpbmc7bnVsbD09PWM/Yi5uZXh0PWI6KGIubmV4dD1jLm5leHQsYy5uZXh0PWIpO2EucGVuZGluZz1ifWZ1bmN0aW9uIEJpKGEsYixjKXtpZigwIT09KGMmNDE5NDI0MCkpe3ZhciBkPWIubGFuZXM7ZCY9YS5wZW5kaW5nTGFuZXM7Y3w9ZDtiLmxhbmVzPWM7Q2MoYSxjKX19XG52YXIgUmg9e3JlYWRDb250ZXh0OmVoLHVzZUNhbGxiYWNrOlAsdXNlQ29udGV4dDpQLHVzZUVmZmVjdDpQLHVzZUltcGVyYXRpdmVIYW5kbGU6UCx1c2VJbnNlcnRpb25FZmZlY3Q6UCx1c2VMYXlvdXRFZmZlY3Q6UCx1c2VNZW1vOlAsdXNlUmVkdWNlcjpQLHVzZVJlZjpQLHVzZVN0YXRlOlAsdXNlRGVidWdWYWx1ZTpQLHVzZURlZmVycmVkVmFsdWU6UCx1c2VUcmFuc2l0aW9uOlAsdXNlTXV0YWJsZVNvdXJjZTpQLHVzZVN5bmNFeHRlcm5hbFN0b3JlOlAsdXNlSWQ6UCx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LE9oPXtyZWFkQ29udGV4dDplaCx1c2VDYWxsYmFjazpmdW5jdGlvbihhLGIpe1RoKCkubWVtb2l6ZWRTdGF0ZT1bYSx2b2lkIDA9PT1iP251bGw6Yl07cmV0dXJuIGF9LHVzZUNvbnRleHQ6ZWgsdXNlRWZmZWN0Om1pLHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBraSg0MTk0MzA4LFxuNCxwaS5iaW5kKG51bGwsYixhKSxjKX0sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGtpKDQxOTQzMDgsNCxhLGIpfSx1c2VJbnNlcnRpb25FZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4ga2koNCwyLGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXt2YXIgYz1UaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1UaCgpO2I9dm9pZCAwIT09Yz9jKGIpOmI7ZC5tZW1vaXplZFN0YXRlPWQuYmFzZVN0YXRlPWI7YT17cGVuZGluZzpudWxsLGludGVybGVhdmVkOm51bGwsbGFuZXM6MCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6YSxsYXN0UmVuZGVyZWRTdGF0ZTpifTtkLnF1ZXVlPWE7YT1hLmRpc3BhdGNoPXhpLmJpbmQobnVsbCxNLGEpO3JldHVybltkLm1lbW9pemVkU3RhdGUsYV19LHVzZVJlZjpmdW5jdGlvbihhKXt2YXIgYj1cblRoKCk7YT17Y3VycmVudDphfTtyZXR1cm4gYi5tZW1vaXplZFN0YXRlPWF9LHVzZVN0YXRlOmhpLHVzZURlYnVnVmFsdWU6cmksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXtyZXR1cm4gVGgoKS5tZW1vaXplZFN0YXRlPWF9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1oaSghMSksYj1hWzBdO2E9dmkuYmluZChudWxsLGFbMV0pO1RoKCkubWVtb2l6ZWRTdGF0ZT1hO3JldHVybltiLGFdfSx1c2VNdXRhYmxlU291cmNlOmZ1bmN0aW9uKCl7fSx1c2VTeW5jRXh0ZXJuYWxTdG9yZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9TSxlPVRoKCk7aWYoSSl7aWYodm9pZCAwPT09Yyl0aHJvdyBFcnJvcihwKDQwNykpO2M9YygpfWVsc2V7Yz1iKCk7aWYobnVsbD09PVEpdGhyb3cgRXJyb3IocCgzNDkpKTswIT09KEhoJjMwKXx8ZGkoZCxiLGMpfWUubWVtb2l6ZWRTdGF0ZT1jO3ZhciBmPXt2YWx1ZTpjLGdldFNuYXBzaG90OmJ9O2UucXVldWU9ZjttaShhaS5iaW5kKG51bGwsZCxcbmYsYSksW2FdKTtkLmZsYWdzfD0yMDQ4O2JpKDksY2kuYmluZChudWxsLGQsZixjLGIpLHZvaWQgMCxudWxsKTtyZXR1cm4gY30sdXNlSWQ6ZnVuY3Rpb24oKXt2YXIgYT1UaCgpLGI9US5pZGVudGlmaWVyUHJlZml4O2lmKEkpe3ZhciBjPXNnO3ZhciBkPXJnO2M9KGQmfigxPDwzMi1vYyhkKS0xKSkudG9TdHJpbmcoMzIpK2M7Yj1cIjpcIitiK1wiUlwiK2M7Yz1LaCsrOzA8YyYmKGIrPVwiSFwiK2MudG9TdHJpbmcoMzIpKTtiKz1cIjpcIn1lbHNlIGM9TGgrKyxiPVwiOlwiK2IrXCJyXCIrYy50b1N0cmluZygzMikrXCI6XCI7cmV0dXJuIGEubWVtb2l6ZWRTdGF0ZT1ifSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LFBoPXtyZWFkQ29udGV4dDplaCx1c2VDYWxsYmFjazpzaSx1c2VDb250ZXh0OmVoLHVzZUVmZmVjdDokaCx1c2VJbXBlcmF0aXZlSGFuZGxlOnFpLHVzZUluc2VydGlvbkVmZmVjdDpuaSx1c2VMYXlvdXRFZmZlY3Q6b2ksdXNlTWVtbzp0aSx1c2VSZWR1Y2VyOldoLHVzZVJlZjpqaSx1c2VTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBXaChWaCl9LFxudXNlRGVidWdWYWx1ZTpyaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPVVoKCk7cmV0dXJuIHVpKGIsTi5tZW1vaXplZFN0YXRlLGEpfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9V2goVmgpWzBdLGI9VWgoKS5tZW1vaXplZFN0YXRlO3JldHVyblthLGJdfSx1c2VNdXRhYmxlU291cmNlOlloLHVzZVN5bmNFeHRlcm5hbFN0b3JlOlpoLHVzZUlkOndpLHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sUWg9e3JlYWRDb250ZXh0OmVoLHVzZUNhbGxiYWNrOnNpLHVzZUNvbnRleHQ6ZWgsdXNlRWZmZWN0OiRoLHVzZUltcGVyYXRpdmVIYW5kbGU6cWksdXNlSW5zZXJ0aW9uRWZmZWN0Om5pLHVzZUxheW91dEVmZmVjdDpvaSx1c2VNZW1vOnRpLHVzZVJlZHVjZXI6WGgsdXNlUmVmOmppLHVzZVN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIFhoKFZoKX0sdXNlRGVidWdWYWx1ZTpyaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPVVoKCk7cmV0dXJuIG51bGw9PT1cbk4/Yi5tZW1vaXplZFN0YXRlPWE6dWkoYixOLm1lbW9pemVkU3RhdGUsYSl9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1YaChWaClbMF0sYj1VaCgpLm1lbW9pemVkU3RhdGU7cmV0dXJuW2EsYl19LHVzZU11dGFibGVTb3VyY2U6WWgsdXNlU3luY0V4dGVybmFsU3RvcmU6WmgsdXNlSWQ6d2ksdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfTtmdW5jdGlvbiBDaShhLGIpe2lmKGEmJmEuZGVmYXVsdFByb3BzKXtiPUEoe30sYik7YT1hLmRlZmF1bHRQcm9wcztmb3IodmFyIGMgaW4gYSl2b2lkIDA9PT1iW2NdJiYoYltjXT1hW2NdKTtyZXR1cm4gYn1yZXR1cm4gYn1mdW5jdGlvbiBEaShhLGIsYyxkKXtiPWEubWVtb2l6ZWRTdGF0ZTtjPWMoZCxiKTtjPW51bGw9PT1jfHx2b2lkIDA9PT1jP2I6QSh7fSxiLGMpO2EubWVtb2l6ZWRTdGF0ZT1jOzA9PT1hLmxhbmVzJiYoYS51cGRhdGVRdWV1ZS5iYXNlU3RhdGU9Yyl9XG52YXIgRWk9e2lzTW91bnRlZDpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLl9yZWFjdEludGVybmFscyk/VmIoYSk9PT1hOiExfSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGQ9UigpLGU9eWkoYSksZj1taChkLGUpO2YucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZi5jYWxsYmFjaz1jKTtiPW5oKGEsZixlKTtudWxsIT09YiYmKGdpKGIsYSxlLGQpLG9oKGIsYSxlKSl9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGQ9UigpLGU9eWkoYSksZj1taChkLGUpO2YudGFnPTE7Zi5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihmLmNhbGxiYWNrPWMpO2I9bmgoYSxmLGUpO251bGwhPT1iJiYoZ2koYixhLGUsZCksb2goYixhLGUpKX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKGEsYil7YT1hLl9yZWFjdEludGVybmFsczt2YXIgYz1SKCksZD1cbnlpKGEpLGU9bWgoYyxkKTtlLnRhZz0yO3ZvaWQgMCE9PWImJm51bGwhPT1iJiYoZS5jYWxsYmFjaz1iKTtiPW5oKGEsZSxkKTtudWxsIT09YiYmKGdpKGIsYSxkLGMpLG9oKGIsYSxkKSl9fTtmdW5jdGlvbiBGaShhLGIsYyxkLGUsZixnKXthPWEuc3RhdGVOb2RlO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnNob3VsZENvbXBvbmVudFVwZGF0ZT9hLnNob3VsZENvbXBvbmVudFVwZGF0ZShkLGYsZyk6Yi5wcm90b3R5cGUmJmIucHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50PyFJZShjLGQpfHwhSWUoZSxmKTohMH1cbmZ1bmN0aW9uIEdpKGEsYixjKXt2YXIgZD0hMSxlPVZmO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9mPWVoKGYpOihlPVpmKGIpP1hmOkguY3VycmVudCxkPWIuY29udGV4dFR5cGVzLGY9KGQ9bnVsbCE9PWQmJnZvaWQgMCE9PWQpP1lmKGEsZSk6VmYpO2I9bmV3IGIoYyxmKTthLm1lbW9pemVkU3RhdGU9bnVsbCE9PWIuc3RhdGUmJnZvaWQgMCE9PWIuc3RhdGU/Yi5zdGF0ZTpudWxsO2IudXBkYXRlcj1FaTthLnN0YXRlTm9kZT1iO2IuX3JlYWN0SW50ZXJuYWxzPWE7ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1mKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIEhpKGEsYixjLGQpe2E9Yi5zdGF0ZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO2Iuc3RhdGUhPT1hJiZFaS5lbnF1ZXVlUmVwbGFjZVN0YXRlKGIsYi5zdGF0ZSxudWxsKX1cbmZ1bmN0aW9uIElpKGEsYixjLGQpe3ZhciBlPWEuc3RhdGVOb2RlO2UucHJvcHM9YztlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtlLnJlZnM9e307a2goYSk7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2UuY29udGV4dD1laChmKTooZj1aZihiKT9YZjpILmN1cnJlbnQsZS5jb250ZXh0PVlmKGEsZikpO2Uuc3RhdGU9YS5tZW1vaXplZFN0YXRlO2Y9Yi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGYmJihEaShhLGIsZixjKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50fHwoYj1lLnN0YXRlLFxuXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50JiZlLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpLGIhPT1lLnN0YXRlJiZFaS5lbnF1ZXVlUmVwbGFjZVN0YXRlKGUsZS5zdGF0ZSxudWxsKSxxaChhLGMsZSxkKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50RGlkTW91bnQmJihhLmZsYWdzfD00MTk0MzA4KX1mdW5jdGlvbiBKaShhLGIpe3RyeXt2YXIgYz1cIlwiLGQ9YjtkbyBjKz1QYShkKSxkPWQucmV0dXJuO3doaWxlKGQpO3ZhciBlPWN9Y2F0Y2goZil7ZT1cIlxcbkVycm9yIGdlbmVyYXRpbmcgc3RhY2s6IFwiK2YubWVzc2FnZStcIlxcblwiK2Yuc3RhY2t9cmV0dXJue3ZhbHVlOmEsc291cmNlOmIsc3RhY2s6ZSxkaWdlc3Q6bnVsbH19XG5mdW5jdGlvbiBLaShhLGIsYyl7cmV0dXJue3ZhbHVlOmEsc291cmNlOm51bGwsc3RhY2s6bnVsbCE9Yz9jOm51bGwsZGlnZXN0Om51bGwhPWI/YjpudWxsfX1mdW5jdGlvbiBMaShhLGIpe3RyeXtjb25zb2xlLmVycm9yKGIudmFsdWUpfWNhdGNoKGMpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBjO30pfX12YXIgTWk9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtNYXA/V2Vha01hcDpNYXA7ZnVuY3Rpb24gTmkoYSxiLGMpe2M9bWgoLTEsYyk7Yy50YWc9MztjLnBheWxvYWQ9e2VsZW1lbnQ6bnVsbH07dmFyIGQ9Yi52YWx1ZTtjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7T2l8fChPaT0hMCxQaT1kKTtMaShhLGIpfTtyZXR1cm4gY31cbmZ1bmN0aW9uIFFpKGEsYixjKXtjPW1oKC0xLGMpO2MudGFnPTM7dmFyIGQ9YS50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGU9Yi52YWx1ZTtjLnBheWxvYWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZChlKX07Yy5jYWxsYmFjaz1mdW5jdGlvbigpe0xpKGEsYil9fXZhciBmPWEuc3RhdGVOb2RlO251bGwhPT1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5jb21wb25lbnREaWRDYXRjaCYmKGMuY2FsbGJhY2s9ZnVuY3Rpb24oKXtMaShhLGIpO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBkJiYobnVsbD09PVJpP1JpPW5ldyBTZXQoW3RoaXNdKTpSaS5hZGQodGhpcykpO3ZhciBjPWIuc3RhY2s7dGhpcy5jb21wb25lbnREaWRDYXRjaChiLnZhbHVlLHtjb21wb25lbnRTdGFjazpudWxsIT09Yz9jOlwiXCJ9KX0pO3JldHVybiBjfVxuZnVuY3Rpb24gU2koYSxiLGMpe3ZhciBkPWEucGluZ0NhY2hlO2lmKG51bGw9PT1kKXtkPWEucGluZ0NhY2hlPW5ldyBNaTt2YXIgZT1uZXcgU2V0O2Quc2V0KGIsZSl9ZWxzZSBlPWQuZ2V0KGIpLHZvaWQgMD09PWUmJihlPW5ldyBTZXQsZC5zZXQoYixlKSk7ZS5oYXMoYyl8fChlLmFkZChjKSxhPVRpLmJpbmQobnVsbCxhLGIsYyksYi50aGVuKGEsYSkpfWZ1bmN0aW9uIFVpKGEpe2Rve3ZhciBiO2lmKGI9MTM9PT1hLnRhZyliPWEubWVtb2l6ZWRTdGF0ZSxiPW51bGwhPT1iP251bGwhPT1iLmRlaHlkcmF0ZWQ/ITA6ITE6ITA7aWYoYilyZXR1cm4gYTthPWEucmV0dXJufXdoaWxlKG51bGwhPT1hKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIFZpKGEsYixjLGQsZSl7aWYoMD09PShhLm1vZGUmMSkpcmV0dXJuIGE9PT1iP2EuZmxhZ3N8PTY1NTM2OihhLmZsYWdzfD0xMjgsYy5mbGFnc3w9MTMxMDcyLGMuZmxhZ3MmPS01MjgwNSwxPT09Yy50YWcmJihudWxsPT09Yy5hbHRlcm5hdGU/Yy50YWc9MTc6KGI9bWgoLTEsMSksYi50YWc9MixuaChjLGIsMSkpKSxjLmxhbmVzfD0xKSxhO2EuZmxhZ3N8PTY1NTM2O2EubGFuZXM9ZTtyZXR1cm4gYX12YXIgV2k9dWEuUmVhY3RDdXJyZW50T3duZXIsZGg9ITE7ZnVuY3Rpb24gWGkoYSxiLGMsZCl7Yi5jaGlsZD1udWxsPT09YT9WZyhiLG51bGwsYyxkKTpVZyhiLGEuY2hpbGQsYyxkKX1cbmZ1bmN0aW9uIFlpKGEsYixjLGQsZSl7Yz1jLnJlbmRlcjt2YXIgZj1iLnJlZjtjaChiLGUpO2Q9TmgoYSxiLGMsZCxmLGUpO2M9U2goKTtpZihudWxsIT09YSYmIWRoKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5mbGFncyY9LTIwNTMsYS5sYW5lcyY9fmUsWmkoYSxiLGUpO0kmJmMmJnZnKGIpO2IuZmxhZ3N8PTE7WGkoYSxiLGQsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiAkaShhLGIsYyxkLGUpe2lmKG51bGw9PT1hKXt2YXIgZj1jLnR5cGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGYmJiFhaihmKSYmdm9pZCAwPT09Zi5kZWZhdWx0UHJvcHMmJm51bGw9PT1jLmNvbXBhcmUmJnZvaWQgMD09PWMuZGVmYXVsdFByb3BzKXJldHVybiBiLnRhZz0xNSxiLnR5cGU9ZixiaihhLGIsZixkLGUpO2E9UmcoYy50eXBlLG51bGwsZCxiLGIubW9kZSxlKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9Zj1hLmNoaWxkO2lmKDA9PT0oYS5sYW5lcyZlKSl7dmFyIGc9Zi5tZW1vaXplZFByb3BzO2M9Yy5jb21wYXJlO2M9bnVsbCE9PWM/YzpJZTtpZihjKGcsZCkmJmEucmVmPT09Yi5yZWYpcmV0dXJuIFppKGEsYixlKX1iLmZsYWdzfD0xO2E9UGcoZixkKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9XG5mdW5jdGlvbiBiaihhLGIsYyxkLGUpe2lmKG51bGwhPT1hKXt2YXIgZj1hLm1lbW9pemVkUHJvcHM7aWYoSWUoZixkKSYmYS5yZWY9PT1iLnJlZilpZihkaD0hMSxiLnBlbmRpbmdQcm9wcz1kPWYsMCE9PShhLmxhbmVzJmUpKTAhPT0oYS5mbGFncyYxMzEwNzIpJiYoZGg9ITApO2Vsc2UgcmV0dXJuIGIubGFuZXM9YS5sYW5lcyxaaShhLGIsZSl9cmV0dXJuIGNqKGEsYixjLGQsZSl9XG5mdW5jdGlvbiBkaihhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1kLmNoaWxkcmVuLGY9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGw7aWYoXCJoaWRkZW5cIj09PWQubW9kZSlpZigwPT09KGIubW9kZSYxKSliLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczowLGNhY2hlUG9vbDpudWxsLHRyYW5zaXRpb25zOm51bGx9LEcoZWosZmopLGZqfD1jO2Vsc2V7aWYoMD09PShjJjEwNzM3NDE4MjQpKXJldHVybiBhPW51bGwhPT1mP2YuYmFzZUxhbmVzfGM6YyxiLmxhbmVzPWIuY2hpbGRMYW5lcz0xMDczNzQxODI0LGIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmEsY2FjaGVQb29sOm51bGwsdHJhbnNpdGlvbnM6bnVsbH0sYi51cGRhdGVRdWV1ZT1udWxsLEcoZWosZmopLGZqfD1hLG51bGw7Yi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6MCxjYWNoZVBvb2w6bnVsbCx0cmFuc2l0aW9uczpudWxsfTtkPW51bGwhPT1mP2YuYmFzZUxhbmVzOmM7Ryhlaixmaik7Zmp8PWR9ZWxzZSBudWxsIT09XG5mPyhkPWYuYmFzZUxhbmVzfGMsYi5tZW1vaXplZFN0YXRlPW51bGwpOmQ9YyxHKGVqLGZqKSxmanw9ZDtYaShhLGIsZSxjKTtyZXR1cm4gYi5jaGlsZH1mdW5jdGlvbiBnaihhLGIpe3ZhciBjPWIucmVmO2lmKG51bGw9PT1hJiZudWxsIT09Y3x8bnVsbCE9PWEmJmEucmVmIT09YyliLmZsYWdzfD01MTIsYi5mbGFnc3w9MjA5NzE1Mn1mdW5jdGlvbiBjaihhLGIsYyxkLGUpe3ZhciBmPVpmKGMpP1hmOkguY3VycmVudDtmPVlmKGIsZik7Y2goYixlKTtjPU5oKGEsYixjLGQsZixlKTtkPVNoKCk7aWYobnVsbCE9PWEmJiFkaClyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZmxhZ3MmPS0yMDUzLGEubGFuZXMmPX5lLFppKGEsYixlKTtJJiZkJiZ2ZyhiKTtiLmZsYWdzfD0xO1hpKGEsYixjLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gaGooYSxiLGMsZCxlKXtpZihaZihjKSl7dmFyIGY9ITA7Y2coYil9ZWxzZSBmPSExO2NoKGIsZSk7aWYobnVsbD09PWIuc3RhdGVOb2RlKWlqKGEsYiksR2koYixjLGQpLElpKGIsYyxkLGUpLGQ9ITA7ZWxzZSBpZihudWxsPT09YSl7dmFyIGc9Yi5zdGF0ZU5vZGUsaD1iLm1lbW9pemVkUHJvcHM7Zy5wcm9wcz1oO3ZhciBrPWcuY29udGV4dCxsPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBsJiZudWxsIT09bD9sPWVoKGwpOihsPVpmKGMpP1hmOkguY3VycmVudCxsPVlmKGIsbCkpO3ZhciBtPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLHE9XCJmdW5jdGlvblwiPT09dHlwZW9mIG18fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlO3F8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHxcbihoIT09ZHx8ayE9PWwpJiZIaShiLGcsZCxsKTtqaD0hMTt2YXIgcj1iLm1lbW9pemVkU3RhdGU7Zy5zdGF0ZT1yO3FoKGIsZCxnLGUpO2s9Yi5tZW1vaXplZFN0YXRlO2ghPT1kfHxyIT09a3x8V2YuY3VycmVudHx8amg/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBtJiYoRGkoYixjLG0sZCksaz1iLm1lbW9pemVkU3RhdGUpLChoPWpofHxGaShiLGMsaCxkLHIsayxsKSk/KHF8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudHx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudCYmZy5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00MTk0MzA4KSk6XG4oXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00MTk0MzA4KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9ayksZy5wcm9wcz1kLGcuc3RhdGU9ayxnLmNvbnRleHQ9bCxkPWgpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQxOTQzMDgpLGQ9ITEpfWVsc2V7Zz1iLnN0YXRlTm9kZTtsaChhLGIpO2g9Yi5tZW1vaXplZFByb3BzO2w9Yi50eXBlPT09Yi5lbGVtZW50VHlwZT9oOkNpKGIudHlwZSxoKTtnLnByb3BzPWw7cT1iLnBlbmRpbmdQcm9wcztyPWcuY29udGV4dDtrPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09az9rPWVoKGspOihrPVpmKGMpP1hmOkguY3VycmVudCxrPVlmKGIsaykpO3ZhciB5PWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOyhtPVwiZnVuY3Rpb25cIj09PXR5cGVvZiB5fHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSl8fFxuXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09cXx8ciE9PWspJiZIaShiLGcsZCxrKTtqaD0hMTtyPWIubWVtb2l6ZWRTdGF0ZTtnLnN0YXRlPXI7cWgoYixkLGcsZSk7dmFyIG49Yi5tZW1vaXplZFN0YXRlO2ghPT1xfHxyIT09bnx8V2YuY3VycmVudHx8amg/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiB5JiYoRGkoYixjLHksZCksbj1iLm1lbW9pemVkU3RhdGUpLChsPWpofHxGaShiLGMsbCxkLHIsbixrKXx8ITEpPyhtfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZXx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGUmJmcuY29tcG9uZW50V2lsbFVwZGF0ZShkLG4sayksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJlxuZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZShkLG4saykpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZSYmKGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYoYi5mbGFnc3w9MTAyNCkpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnI9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcj09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTEwMjQpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1uKSxnLnByb3BzPWQsZy5zdGF0ZT1uLGcuY29udGV4dD1rLGQ9bCk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcj09PVxuYS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnI9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD0xMDI0KSxkPSExKX1yZXR1cm4gamooYSxiLGMsZCxmLGUpfVxuZnVuY3Rpb24gamooYSxiLGMsZCxlLGYpe2dqKGEsYik7dmFyIGc9MCE9PShiLmZsYWdzJjEyOCk7aWYoIWQmJiFnKXJldHVybiBlJiZkZyhiLGMsITEpLFppKGEsYixmKTtkPWIuc3RhdGVOb2RlO1dpLmN1cnJlbnQ9Yjt2YXIgaD1nJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I/bnVsbDpkLnJlbmRlcigpO2IuZmxhZ3N8PTE7bnVsbCE9PWEmJmc/KGIuY2hpbGQ9VWcoYixhLmNoaWxkLG51bGwsZiksYi5jaGlsZD1VZyhiLG51bGwsaCxmKSk6WGkoYSxiLGgsZik7Yi5tZW1vaXplZFN0YXRlPWQuc3RhdGU7ZSYmZGcoYixjLCEwKTtyZXR1cm4gYi5jaGlsZH1mdW5jdGlvbiBraihhKXt2YXIgYj1hLnN0YXRlTm9kZTtiLnBlbmRpbmdDb250ZXh0P2FnKGEsYi5wZW5kaW5nQ29udGV4dCxiLnBlbmRpbmdDb250ZXh0IT09Yi5jb250ZXh0KTpiLmNvbnRleHQmJmFnKGEsYi5jb250ZXh0LCExKTt5aChhLGIuY29udGFpbmVySW5mbyl9XG5mdW5jdGlvbiBsaihhLGIsYyxkLGUpe0lnKCk7SmcoZSk7Yi5mbGFnc3w9MjU2O1hpKGEsYixjLGQpO3JldHVybiBiLmNoaWxkfXZhciBtaj17ZGVoeWRyYXRlZDpudWxsLHRyZWVDb250ZXh0Om51bGwscmV0cnlMYW5lOjB9O2Z1bmN0aW9uIG5qKGEpe3JldHVybntiYXNlTGFuZXM6YSxjYWNoZVBvb2w6bnVsbCx0cmFuc2l0aW9uczpudWxsfX1cbmZ1bmN0aW9uIG9qKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPUwuY3VycmVudCxmPSExLGc9MCE9PShiLmZsYWdzJjEyOCksaDsoaD1nKXx8KGg9bnVsbCE9PWEmJm51bGw9PT1hLm1lbW9pemVkU3RhdGU/ITE6MCE9PShlJjIpKTtpZihoKWY9ITAsYi5mbGFncyY9LTEyOTtlbHNlIGlmKG51bGw9PT1hfHxudWxsIT09YS5tZW1vaXplZFN0YXRlKWV8PTE7RyhMLGUmMSk7aWYobnVsbD09PWEpe0VnKGIpO2E9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1hJiYoYT1hLmRlaHlkcmF0ZWQsbnVsbCE9PWEpKXJldHVybiAwPT09KGIubW9kZSYxKT9iLmxhbmVzPTE6XCIkIVwiPT09YS5kYXRhP2IubGFuZXM9ODpiLmxhbmVzPTEwNzM3NDE4MjQsbnVsbDtnPWQuY2hpbGRyZW47YT1kLmZhbGxiYWNrO3JldHVybiBmPyhkPWIubW9kZSxmPWIuY2hpbGQsZz17bW9kZTpcImhpZGRlblwiLGNoaWxkcmVuOmd9LDA9PT0oZCYxKSYmbnVsbCE9PWY/KGYuY2hpbGRMYW5lcz0wLGYucGVuZGluZ1Byb3BzPVxuZyk6Zj1waihnLGQsMCxudWxsKSxhPVRnKGEsZCxjLG51bGwpLGYucmV0dXJuPWIsYS5yZXR1cm49YixmLnNpYmxpbmc9YSxiLmNoaWxkPWYsYi5jaGlsZC5tZW1vaXplZFN0YXRlPW5qKGMpLGIubWVtb2l6ZWRTdGF0ZT1taixhKTpxaihiLGcpfWU9YS5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1lJiYoaD1lLmRlaHlkcmF0ZWQsbnVsbCE9PWgpKXJldHVybiByaihhLGIsZyxkLGgsZSxjKTtpZihmKXtmPWQuZmFsbGJhY2s7Zz1iLm1vZGU7ZT1hLmNoaWxkO2g9ZS5zaWJsaW5nO3ZhciBrPXttb2RlOlwiaGlkZGVuXCIsY2hpbGRyZW46ZC5jaGlsZHJlbn07MD09PShnJjEpJiZiLmNoaWxkIT09ZT8oZD1iLmNoaWxkLGQuY2hpbGRMYW5lcz0wLGQucGVuZGluZ1Byb3BzPWssYi5kZWxldGlvbnM9bnVsbCk6KGQ9UGcoZSxrKSxkLnN1YnRyZWVGbGFncz1lLnN1YnRyZWVGbGFncyYxNDY4MDA2NCk7bnVsbCE9PWg/Zj1QZyhoLGYpOihmPVRnKGYsZyxjLG51bGwpLGYuZmxhZ3N8PTIpO2YucmV0dXJuPVxuYjtkLnJldHVybj1iO2Quc2libGluZz1mO2IuY2hpbGQ9ZDtkPWY7Zj1iLmNoaWxkO2c9YS5jaGlsZC5tZW1vaXplZFN0YXRlO2c9bnVsbD09PWc/bmooYyk6e2Jhc2VMYW5lczpnLmJhc2VMYW5lc3xjLGNhY2hlUG9vbDpudWxsLHRyYW5zaXRpb25zOmcudHJhbnNpdGlvbnN9O2YubWVtb2l6ZWRTdGF0ZT1nO2YuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXMmfmM7Yi5tZW1vaXplZFN0YXRlPW1qO3JldHVybiBkfWY9YS5jaGlsZDthPWYuc2libGluZztkPVBnKGYse21vZGU6XCJ2aXNpYmxlXCIsY2hpbGRyZW46ZC5jaGlsZHJlbn0pOzA9PT0oYi5tb2RlJjEpJiYoZC5sYW5lcz1jKTtkLnJldHVybj1iO2Quc2libGluZz1udWxsO251bGwhPT1hJiYoYz1iLmRlbGV0aW9ucyxudWxsPT09Yz8oYi5kZWxldGlvbnM9W2FdLGIuZmxhZ3N8PTE2KTpjLnB1c2goYSkpO2IuY2hpbGQ9ZDtiLm1lbW9pemVkU3RhdGU9bnVsbDtyZXR1cm4gZH1cbmZ1bmN0aW9uIHFqKGEsYil7Yj1waih7bW9kZTpcInZpc2libGVcIixjaGlsZHJlbjpifSxhLm1vZGUsMCxudWxsKTtiLnJldHVybj1hO3JldHVybiBhLmNoaWxkPWJ9ZnVuY3Rpb24gc2ooYSxiLGMsZCl7bnVsbCE9PWQmJkpnKGQpO1VnKGIsYS5jaGlsZCxudWxsLGMpO2E9cWooYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbik7YS5mbGFnc3w9MjtiLm1lbW9pemVkU3RhdGU9bnVsbDtyZXR1cm4gYX1cbmZ1bmN0aW9uIHJqKGEsYixjLGQsZSxmLGcpe2lmKGMpe2lmKGIuZmxhZ3MmMjU2KXJldHVybiBiLmZsYWdzJj0tMjU3LGQ9S2koRXJyb3IocCg0MjIpKSksc2ooYSxiLGcsZCk7aWYobnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSlyZXR1cm4gYi5jaGlsZD1hLmNoaWxkLGIuZmxhZ3N8PTEyOCxudWxsO2Y9ZC5mYWxsYmFjaztlPWIubW9kZTtkPXBqKHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmQuY2hpbGRyZW59LGUsMCxudWxsKTtmPVRnKGYsZSxnLG51bGwpO2YuZmxhZ3N8PTI7ZC5yZXR1cm49YjtmLnJldHVybj1iO2Quc2libGluZz1mO2IuY2hpbGQ9ZDswIT09KGIubW9kZSYxKSYmVWcoYixhLmNoaWxkLG51bGwsZyk7Yi5jaGlsZC5tZW1vaXplZFN0YXRlPW5qKGcpO2IubWVtb2l6ZWRTdGF0ZT1tajtyZXR1cm4gZn1pZigwPT09KGIubW9kZSYxKSlyZXR1cm4gc2ooYSxiLGcsbnVsbCk7aWYoXCIkIVwiPT09ZS5kYXRhKXtkPWUubmV4dFNpYmxpbmcmJmUubmV4dFNpYmxpbmcuZGF0YXNldDtcbmlmKGQpdmFyIGg9ZC5kZ3N0O2Q9aDtmPUVycm9yKHAoNDE5KSk7ZD1LaShmLGQsdm9pZCAwKTtyZXR1cm4gc2ooYSxiLGcsZCl9aD0wIT09KGcmYS5jaGlsZExhbmVzKTtpZihkaHx8aCl7ZD1RO2lmKG51bGwhPT1kKXtzd2l0Y2goZyYtZyl7Y2FzZSA0OmU9MjticmVhaztjYXNlIDE2OmU9ODticmVhaztjYXNlIDY0OmNhc2UgMTI4OmNhc2UgMjU2OmNhc2UgNTEyOmNhc2UgMTAyNDpjYXNlIDIwNDg6Y2FzZSA0MDk2OmNhc2UgODE5MjpjYXNlIDE2Mzg0OmNhc2UgMzI3Njg6Y2FzZSA2NTUzNjpjYXNlIDEzMTA3MjpjYXNlIDI2MjE0NDpjYXNlIDUyNDI4ODpjYXNlIDEwNDg1NzY6Y2FzZSAyMDk3MTUyOmNhc2UgNDE5NDMwNDpjYXNlIDgzODg2MDg6Y2FzZSAxNjc3NzIxNjpjYXNlIDMzNTU0NDMyOmNhc2UgNjcxMDg4NjQ6ZT0zMjticmVhaztjYXNlIDUzNjg3MDkxMjplPTI2ODQzNTQ1NjticmVhaztkZWZhdWx0OmU9MH1lPTAhPT0oZSYoZC5zdXNwZW5kZWRMYW5lc3xnKSk/MDplO1xuMCE9PWUmJmUhPT1mLnJldHJ5TGFuZSYmKGYucmV0cnlMYW5lPWUsaWgoYSxlKSxnaShkLGEsZSwtMSkpfXRqKCk7ZD1LaShFcnJvcihwKDQyMSkpKTtyZXR1cm4gc2ooYSxiLGcsZCl9aWYoXCIkP1wiPT09ZS5kYXRhKXJldHVybiBiLmZsYWdzfD0xMjgsYi5jaGlsZD1hLmNoaWxkLGI9dWouYmluZChudWxsLGEpLGUuX3JlYWN0UmV0cnk9YixudWxsO2E9Zi50cmVlQ29udGV4dDt5Zz1MZihlLm5leHRTaWJsaW5nKTt4Zz1iO0k9ITA7emc9bnVsbDtudWxsIT09YSYmKG9nW3BnKytdPXJnLG9nW3BnKytdPXNnLG9nW3BnKytdPXFnLHJnPWEuaWQsc2c9YS5vdmVyZmxvdyxxZz1iKTtiPXFqKGIsZC5jaGlsZHJlbik7Yi5mbGFnc3w9NDA5NjtyZXR1cm4gYn1mdW5jdGlvbiB2aihhLGIsYyl7YS5sYW5lc3w9Yjt2YXIgZD1hLmFsdGVybmF0ZTtudWxsIT09ZCYmKGQubGFuZXN8PWIpO2JoKGEucmV0dXJuLGIsYyl9XG5mdW5jdGlvbiB3aihhLGIsYyxkLGUpe3ZhciBmPWEubWVtb2l6ZWRTdGF0ZTtudWxsPT09Zj9hLm1lbW9pemVkU3RhdGU9e2lzQmFja3dhcmRzOmIscmVuZGVyaW5nOm51bGwscmVuZGVyaW5nU3RhcnRUaW1lOjAsbGFzdDpkLHRhaWw6Yyx0YWlsTW9kZTplfTooZi5pc0JhY2t3YXJkcz1iLGYucmVuZGVyaW5nPW51bGwsZi5yZW5kZXJpbmdTdGFydFRpbWU9MCxmLmxhc3Q9ZCxmLnRhaWw9YyxmLnRhaWxNb2RlPWUpfVxuZnVuY3Rpb24geGooYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9ZC5yZXZlYWxPcmRlcixmPWQudGFpbDtYaShhLGIsZC5jaGlsZHJlbixjKTtkPUwuY3VycmVudDtpZigwIT09KGQmMikpZD1kJjF8MixiLmZsYWdzfD0xMjg7ZWxzZXtpZihudWxsIT09YSYmMCE9PShhLmZsYWdzJjEyOCkpYTpmb3IoYT1iLmNoaWxkO251bGwhPT1hOyl7aWYoMTM9PT1hLnRhZyludWxsIT09YS5tZW1vaXplZFN0YXRlJiZ2aihhLGMsYik7ZWxzZSBpZigxOT09PWEudGFnKXZqKGEsYyxiKTtlbHNlIGlmKG51bGwhPT1hLmNoaWxkKXthLmNoaWxkLnJldHVybj1hO2E9YS5jaGlsZDtjb250aW51ZX1pZihhPT09YilicmVhayBhO2Zvcig7bnVsbD09PWEuc2libGluZzspe2lmKG51bGw9PT1hLnJldHVybnx8YS5yZXR1cm49PT1iKWJyZWFrIGE7YT1hLnJldHVybn1hLnNpYmxpbmcucmV0dXJuPWEucmV0dXJuO2E9YS5zaWJsaW5nfWQmPTF9RyhMLGQpO2lmKDA9PT0oYi5tb2RlJjEpKWIubWVtb2l6ZWRTdGF0ZT1cbm51bGw7ZWxzZSBzd2l0Y2goZSl7Y2FzZSBcImZvcndhcmRzXCI6Yz1iLmNoaWxkO2ZvcihlPW51bGw7bnVsbCE9PWM7KWE9Yy5hbHRlcm5hdGUsbnVsbCE9PWEmJm51bGw9PT1DaChhKSYmKGU9YyksYz1jLnNpYmxpbmc7Yz1lO251bGw9PT1jPyhlPWIuY2hpbGQsYi5jaGlsZD1udWxsKTooZT1jLnNpYmxpbmcsYy5zaWJsaW5nPW51bGwpO3dqKGIsITEsZSxjLGYpO2JyZWFrO2Nhc2UgXCJiYWNrd2FyZHNcIjpjPW51bGw7ZT1iLmNoaWxkO2ZvcihiLmNoaWxkPW51bGw7bnVsbCE9PWU7KXthPWUuYWx0ZXJuYXRlO2lmKG51bGwhPT1hJiZudWxsPT09Q2goYSkpe2IuY2hpbGQ9ZTticmVha31hPWUuc2libGluZztlLnNpYmxpbmc9YztjPWU7ZT1hfXdqKGIsITAsYyxudWxsLGYpO2JyZWFrO2Nhc2UgXCJ0b2dldGhlclwiOndqKGIsITEsbnVsbCxudWxsLHZvaWQgMCk7YnJlYWs7ZGVmYXVsdDpiLm1lbW9pemVkU3RhdGU9bnVsbH1yZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGlqKGEsYil7MD09PShiLm1vZGUmMSkmJm51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpfWZ1bmN0aW9uIFppKGEsYixjKXtudWxsIT09YSYmKGIuZGVwZW5kZW5jaWVzPWEuZGVwZW5kZW5jaWVzKTtyaHw9Yi5sYW5lcztpZigwPT09KGMmYi5jaGlsZExhbmVzKSlyZXR1cm4gbnVsbDtpZihudWxsIT09YSYmYi5jaGlsZCE9PWEuY2hpbGQpdGhyb3cgRXJyb3IocCgxNTMpKTtpZihudWxsIT09Yi5jaGlsZCl7YT1iLmNoaWxkO2M9UGcoYSxhLnBlbmRpbmdQcm9wcyk7Yi5jaGlsZD1jO2ZvcihjLnJldHVybj1iO251bGwhPT1hLnNpYmxpbmc7KWE9YS5zaWJsaW5nLGM9Yy5zaWJsaW5nPVBnKGEsYS5wZW5kaW5nUHJvcHMpLGMucmV0dXJuPWI7Yy5zaWJsaW5nPW51bGx9cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiB5aihhLGIsYyl7c3dpdGNoKGIudGFnKXtjYXNlIDM6a2ooYik7SWcoKTticmVhaztjYXNlIDU6QWgoYik7YnJlYWs7Y2FzZSAxOlpmKGIudHlwZSkmJmNnKGIpO2JyZWFrO2Nhc2UgNDp5aChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pO2JyZWFrO2Nhc2UgMTA6dmFyIGQ9Yi50eXBlLl9jb250ZXh0LGU9Yi5tZW1vaXplZFByb3BzLnZhbHVlO0coV2csZC5fY3VycmVudFZhbHVlKTtkLl9jdXJyZW50VmFsdWU9ZTticmVhaztjYXNlIDEzOmQ9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kKXtpZihudWxsIT09ZC5kZWh5ZHJhdGVkKXJldHVybiBHKEwsTC5jdXJyZW50JjEpLGIuZmxhZ3N8PTEyOCxudWxsO2lmKDAhPT0oYyZiLmNoaWxkLmNoaWxkTGFuZXMpKXJldHVybiBvaihhLGIsYyk7RyhMLEwuY3VycmVudCYxKTthPVppKGEsYixjKTtyZXR1cm4gbnVsbCE9PWE/YS5zaWJsaW5nOm51bGx9RyhMLEwuY3VycmVudCYxKTticmVhaztjYXNlIDE5OmQ9MCE9PShjJlxuYi5jaGlsZExhbmVzKTtpZigwIT09KGEuZmxhZ3MmMTI4KSl7aWYoZClyZXR1cm4geGooYSxiLGMpO2IuZmxhZ3N8PTEyOH1lPWIubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZSYmKGUucmVuZGVyaW5nPW51bGwsZS50YWlsPW51bGwsZS5sYXN0RWZmZWN0PW51bGwpO0coTCxMLmN1cnJlbnQpO2lmKGQpYnJlYWs7ZWxzZSByZXR1cm4gbnVsbDtjYXNlIDIyOmNhc2UgMjM6cmV0dXJuIGIubGFuZXM9MCxkaihhLGIsYyl9cmV0dXJuIFppKGEsYixjKX12YXIgemosQWosQmosQ2o7XG56aj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1iLmNoaWxkO251bGwhPT1jOyl7aWYoNT09PWMudGFnfHw2PT09Yy50YWcpYS5hcHBlbmRDaGlsZChjLnN0YXRlTm9kZSk7ZWxzZSBpZig0IT09Yy50YWcmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YilicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YilyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX07QWo9ZnVuY3Rpb24oKXt9O1xuQmo9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5tZW1vaXplZFByb3BzO2lmKGUhPT1kKXthPWIuc3RhdGVOb2RlO3hoKHVoLmN1cnJlbnQpO3ZhciBmPW51bGw7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOmU9WWEoYSxlKTtkPVlhKGEsZCk7Zj1bXTticmVhaztjYXNlIFwic2VsZWN0XCI6ZT1BKHt9LGUse3ZhbHVlOnZvaWQgMH0pO2Q9QSh7fSxkLHt2YWx1ZTp2b2lkIDB9KTtmPVtdO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmU9Z2IoYSxlKTtkPWdiKGEsZCk7Zj1bXTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLm9uQ2xpY2smJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLm9uQ2xpY2smJihhLm9uY2xpY2s9QmYpfXViKGMsZCk7dmFyIGc7Yz1udWxsO2ZvcihsIGluIGUpaWYoIWQuaGFzT3duUHJvcGVydHkobCkmJmUuaGFzT3duUHJvcGVydHkobCkmJm51bGwhPWVbbF0paWYoXCJzdHlsZVwiPT09bCl7dmFyIGg9ZVtsXTtmb3IoZyBpbiBoKWguaGFzT3duUHJvcGVydHkoZykmJlxuKGN8fChjPXt9KSxjW2ddPVwiXCIpfWVsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sJiZcImNoaWxkcmVuXCIhPT1sJiZcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09bCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWwmJlwiYXV0b0ZvY3VzXCIhPT1sJiYoZWEuaGFzT3duUHJvcGVydHkobCk/Znx8KGY9W10pOihmPWZ8fFtdKS5wdXNoKGwsbnVsbCkpO2ZvcihsIGluIGQpe3ZhciBrPWRbbF07aD1udWxsIT1lP2VbbF06dm9pZCAwO2lmKGQuaGFzT3duUHJvcGVydHkobCkmJmshPT1oJiYobnVsbCE9a3x8bnVsbCE9aCkpaWYoXCJzdHlsZVwiPT09bClpZihoKXtmb3IoZyBpbiBoKSFoLmhhc093blByb3BlcnR5KGcpfHxrJiZrLmhhc093blByb3BlcnR5KGcpfHwoY3x8KGM9e30pLGNbZ109XCJcIik7Zm9yKGcgaW4gaylrLmhhc093blByb3BlcnR5KGcpJiZoW2ddIT09a1tnXSYmKGN8fChjPXt9KSxjW2ddPWtbZ10pfWVsc2UgY3x8KGZ8fChmPVtdKSxmLnB1c2gobCxcbmMpKSxjPWs7ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWw/KGs9az9rLl9faHRtbDp2b2lkIDAsaD1oP2guX19odG1sOnZvaWQgMCxudWxsIT1rJiZoIT09ayYmKGY9Znx8W10pLnB1c2gobCxrKSk6XCJjaGlsZHJlblwiPT09bD9cInN0cmluZ1wiIT09dHlwZW9mIGsmJlwibnVtYmVyXCIhPT10eXBlb2Yga3x8KGY9Znx8W10pLnB1c2gobCxcIlwiK2spOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmKGVhLmhhc093blByb3BlcnR5KGwpPyhudWxsIT1rJiZcIm9uU2Nyb2xsXCI9PT1sJiZEKFwic2Nyb2xsXCIsYSksZnx8aD09PWt8fChmPVtdKSk6KGY9Znx8W10pLnB1c2gobCxrKSl9YyYmKGY9Znx8W10pLnB1c2goXCJzdHlsZVwiLGMpO3ZhciBsPWY7aWYoYi51cGRhdGVRdWV1ZT1sKWIuZmxhZ3N8PTR9fTtDaj1mdW5jdGlvbihhLGIsYyxkKXtjIT09ZCYmKGIuZmxhZ3N8PTQpfTtcbmZ1bmN0aW9uIERqKGEsYil7aWYoIUkpc3dpdGNoKGEudGFpbE1vZGUpe2Nhc2UgXCJoaWRkZW5cIjpiPWEudGFpbDtmb3IodmFyIGM9bnVsbDtudWxsIT09YjspbnVsbCE9PWIuYWx0ZXJuYXRlJiYoYz1iKSxiPWIuc2libGluZztudWxsPT09Yz9hLnRhaWw9bnVsbDpjLnNpYmxpbmc9bnVsbDticmVhaztjYXNlIFwiY29sbGFwc2VkXCI6Yz1hLnRhaWw7Zm9yKHZhciBkPW51bGw7bnVsbCE9PWM7KW51bGwhPT1jLmFsdGVybmF0ZSYmKGQ9YyksYz1jLnNpYmxpbmc7bnVsbD09PWQ/Ynx8bnVsbD09PWEudGFpbD9hLnRhaWw9bnVsbDphLnRhaWwuc2libGluZz1udWxsOmQuc2libGluZz1udWxsfX1cbmZ1bmN0aW9uIFMoYSl7dmFyIGI9bnVsbCE9PWEuYWx0ZXJuYXRlJiZhLmFsdGVybmF0ZS5jaGlsZD09PWEuY2hpbGQsYz0wLGQ9MDtpZihiKWZvcih2YXIgZT1hLmNoaWxkO251bGwhPT1lOyljfD1lLmxhbmVzfGUuY2hpbGRMYW5lcyxkfD1lLnN1YnRyZWVGbGFncyYxNDY4MDA2NCxkfD1lLmZsYWdzJjE0NjgwMDY0LGUucmV0dXJuPWEsZT1lLnNpYmxpbmc7ZWxzZSBmb3IoZT1hLmNoaWxkO251bGwhPT1lOyljfD1lLmxhbmVzfGUuY2hpbGRMYW5lcyxkfD1lLnN1YnRyZWVGbGFncyxkfD1lLmZsYWdzLGUucmV0dXJuPWEsZT1lLnNpYmxpbmc7YS5zdWJ0cmVlRmxhZ3N8PWQ7YS5jaGlsZExhbmVzPWM7cmV0dXJuIGJ9XG5mdW5jdGlvbiBFaihhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHM7d2coYik7c3dpdGNoKGIudGFnKXtjYXNlIDI6Y2FzZSAxNjpjYXNlIDE1OmNhc2UgMDpjYXNlIDExOmNhc2UgNzpjYXNlIDg6Y2FzZSAxMjpjYXNlIDk6Y2FzZSAxNDpyZXR1cm4gUyhiKSxudWxsO2Nhc2UgMTpyZXR1cm4gWmYoYi50eXBlKSYmJGYoKSxTKGIpLG51bGw7Y2FzZSAzOmQ9Yi5zdGF0ZU5vZGU7emgoKTtFKFdmKTtFKEgpO0VoKCk7ZC5wZW5kaW5nQ29udGV4dCYmKGQuY29udGV4dD1kLnBlbmRpbmdDb250ZXh0LGQucGVuZGluZ0NvbnRleHQ9bnVsbCk7aWYobnVsbD09PWF8fG51bGw9PT1hLmNoaWxkKUdnKGIpP2IuZmxhZ3N8PTQ6bnVsbD09PWF8fGEubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQmJjA9PT0oYi5mbGFncyYyNTYpfHwoYi5mbGFnc3w9MTAyNCxudWxsIT09emcmJihGaih6Zyksemc9bnVsbCkpO0FqKGEsYik7UyhiKTtyZXR1cm4gbnVsbDtjYXNlIDU6QmgoYik7dmFyIGU9eGgod2guY3VycmVudCk7XG5jPWIudHlwZTtpZihudWxsIT09YSYmbnVsbCE9Yi5zdGF0ZU5vZGUpQmooYSxiLGMsZCxlKSxhLnJlZiE9PWIucmVmJiYoYi5mbGFnc3w9NTEyLGIuZmxhZ3N8PTIwOTcxNTIpO2Vsc2V7aWYoIWQpe2lmKG51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcihwKDE2NikpO1MoYik7cmV0dXJuIG51bGx9YT14aCh1aC5jdXJyZW50KTtpZihHZyhiKSl7ZD1iLnN0YXRlTm9kZTtjPWIudHlwZTt2YXIgZj1iLm1lbW9pemVkUHJvcHM7ZFtPZl09YjtkW1BmXT1mO2E9MCE9PShiLm1vZGUmMSk7c3dpdGNoKGMpe2Nhc2UgXCJkaWFsb2dcIjpEKFwiY2FuY2VsXCIsZCk7RChcImNsb3NlXCIsZCk7YnJlYWs7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwiZW1iZWRcIjpEKFwibG9hZFwiLGQpO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihlPTA7ZTxsZi5sZW5ndGg7ZSsrKUQobGZbZV0sZCk7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkQoXCJlcnJvclwiLGQpO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkQoXCJlcnJvclwiLFxuZCk7RChcImxvYWRcIixkKTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkQoXCJ0b2dnbGVcIixkKTticmVhaztjYXNlIFwiaW5wdXRcIjpaYShkLGYpO0QoXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmQuX3dyYXBwZXJTdGF0ZT17d2FzTXVsdGlwbGU6ISFmLm11bHRpcGxlfTtEKFwiaW52YWxpZFwiLGQpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmhiKGQsZiksRChcImludmFsaWRcIixkKX11YihjLGYpO2U9bnVsbDtmb3IodmFyIGcgaW4gZilpZihmLmhhc093blByb3BlcnR5KGcpKXt2YXIgaD1mW2ddO1wiY2hpbGRyZW5cIj09PWc/XCJzdHJpbmdcIj09PXR5cGVvZiBoP2QudGV4dENvbnRlbnQhPT1oJiYoITAhPT1mLnN1cHByZXNzSHlkcmF0aW9uV2FybmluZyYmQWYoZC50ZXh0Q29udGVudCxoLGEpLGU9W1wiY2hpbGRyZW5cIixoXSk6XCJudW1iZXJcIj09PXR5cGVvZiBoJiZkLnRleHRDb250ZW50IT09XCJcIitoJiYoITAhPT1mLnN1cHByZXNzSHlkcmF0aW9uV2FybmluZyYmQWYoZC50ZXh0Q29udGVudCxcbmgsYSksZT1bXCJjaGlsZHJlblwiLFwiXCIraF0pOmVhLmhhc093blByb3BlcnR5KGcpJiZudWxsIT1oJiZcIm9uU2Nyb2xsXCI9PT1nJiZEKFwic2Nyb2xsXCIsZCl9c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOlZhKGQpO2RiKGQsZiwhMCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6VmEoZCk7amIoZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJvcHRpb25cIjpicmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLm9uQ2xpY2smJihkLm9uY2xpY2s9QmYpfWQ9ZTtiLnVwZGF0ZVF1ZXVlPWQ7bnVsbCE9PWQmJihiLmZsYWdzfD00KX1lbHNle2c9OT09PWUubm9kZVR5cGU/ZTplLm93bmVyRG9jdW1lbnQ7XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1hJiYoYT1rYihjKSk7XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1hP1wic2NyaXB0XCI9PT1jPyhhPWcuY3JlYXRlRWxlbWVudChcImRpdlwiKSxhLmlubmVySFRNTD1cIjxzY3JpcHQ+XFx4M2Mvc2NyaXB0PlwiLGE9YS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpKTpcblwic3RyaW5nXCI9PT10eXBlb2YgZC5pcz9hPWcuY3JlYXRlRWxlbWVudChjLHtpczpkLmlzfSk6KGE9Zy5jcmVhdGVFbGVtZW50KGMpLFwic2VsZWN0XCI9PT1jJiYoZz1hLGQubXVsdGlwbGU/Zy5tdWx0aXBsZT0hMDpkLnNpemUmJihnLnNpemU9ZC5zaXplKSkpOmE9Zy5jcmVhdGVFbGVtZW50TlMoYSxjKTthW09mXT1iO2FbUGZdPWQ7emooYSxiLCExLCExKTtiLnN0YXRlTm9kZT1hO2E6e2c9dmIoYyxkKTtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkQoXCJjYW5jZWxcIixhKTtEKFwiY2xvc2VcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwiZW1iZWRcIjpEKFwibG9hZFwiLGEpO2U9ZDticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoZT0wO2U8bGYubGVuZ3RoO2UrKylEKGxmW2VdLGEpO2U9ZDticmVhaztjYXNlIFwic291cmNlXCI6RChcImVycm9yXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkQoXCJlcnJvclwiLFxuYSk7RChcImxvYWRcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpEKFwidG9nZ2xlXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOlphKGEsZCk7ZT1ZYShhLGQpO0QoXCJpbnZhbGlkXCIsYSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmU9ZDticmVhaztjYXNlIFwic2VsZWN0XCI6YS5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIWQubXVsdGlwbGV9O2U9QSh7fSxkLHt2YWx1ZTp2b2lkIDB9KTtEKFwiaW52YWxpZFwiLGEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmhiKGEsZCk7ZT1nYihhLGQpO0QoXCJpbnZhbGlkXCIsYSk7YnJlYWs7ZGVmYXVsdDplPWR9dWIoYyxlKTtoPWU7Zm9yKGYgaW4gaClpZihoLmhhc093blByb3BlcnR5KGYpKXt2YXIgaz1oW2ZdO1wic3R5bGVcIj09PWY/c2IoYSxrKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1mPyhrPWs/ay5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJm5iKGEsaykpOlwiY2hpbGRyZW5cIj09PWY/XCJzdHJpbmdcIj09PXR5cGVvZiBrPyhcInRleHRhcmVhXCIhPT1cbmN8fFwiXCIhPT1rKSYmb2IoYSxrKTpcIm51bWJlclwiPT09dHlwZW9mIGsmJm9iKGEsXCJcIitrKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09ZiYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWYmJlwiYXV0b0ZvY3VzXCIhPT1mJiYoZWEuaGFzT3duUHJvcGVydHkoZik/bnVsbCE9ayYmXCJvblNjcm9sbFwiPT09ZiYmRChcInNjcm9sbFwiLGEpOm51bGwhPWsmJnRhKGEsZixrLGcpKX1zd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6VmEoYSk7ZGIoYSxkLCExKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShhKTtqYihhKTticmVhaztjYXNlIFwib3B0aW9uXCI6bnVsbCE9ZC52YWx1ZSYmYS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIrU2EoZC52YWx1ZSkpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphLm11bHRpcGxlPSEhZC5tdWx0aXBsZTtmPWQudmFsdWU7bnVsbCE9Zj9mYihhLCEhZC5tdWx0aXBsZSxmLCExKTpudWxsIT1kLmRlZmF1bHRWYWx1ZSYmZmIoYSwhIWQubXVsdGlwbGUsZC5kZWZhdWx0VmFsdWUsXG4hMCk7YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5vbkNsaWNrJiYoYS5vbmNsaWNrPUJmKX1zd2l0Y2goYyl7Y2FzZSBcImJ1dHRvblwiOmNhc2UgXCJpbnB1dFwiOmNhc2UgXCJzZWxlY3RcIjpjYXNlIFwidGV4dGFyZWFcIjpkPSEhZC5hdXRvRm9jdXM7YnJlYWsgYTtjYXNlIFwiaW1nXCI6ZD0hMDticmVhayBhO2RlZmF1bHQ6ZD0hMX19ZCYmKGIuZmxhZ3N8PTQpfW51bGwhPT1iLnJlZiYmKGIuZmxhZ3N8PTUxMixiLmZsYWdzfD0yMDk3MTUyKX1TKGIpO3JldHVybiBudWxsO2Nhc2UgNjppZihhJiZudWxsIT1iLnN0YXRlTm9kZSlDaihhLGIsYS5tZW1vaXplZFByb3BzLGQpO2Vsc2V7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBkJiZudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IocCgxNjYpKTtjPXhoKHdoLmN1cnJlbnQpO3hoKHVoLmN1cnJlbnQpO2lmKEdnKGIpKXtkPWIuc3RhdGVOb2RlO2M9Yi5tZW1vaXplZFByb3BzO2RbT2ZdPWI7aWYoZj1kLm5vZGVWYWx1ZSE9PWMpaWYoYT1cbnhnLG51bGwhPT1hKXN3aXRjaChhLnRhZyl7Y2FzZSAzOkFmKGQubm9kZVZhbHVlLGMsMCE9PShhLm1vZGUmMSkpO2JyZWFrO2Nhc2UgNTohMCE9PWEubWVtb2l6ZWRQcm9wcy5zdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcmJkFmKGQubm9kZVZhbHVlLGMsMCE9PShhLm1vZGUmMSkpfWYmJihiLmZsYWdzfD00KX1lbHNlIGQ9KDk9PT1jLm5vZGVUeXBlP2M6Yy5vd25lckRvY3VtZW50KS5jcmVhdGVUZXh0Tm9kZShkKSxkW09mXT1iLGIuc3RhdGVOb2RlPWR9UyhiKTtyZXR1cm4gbnVsbDtjYXNlIDEzOkUoTCk7ZD1iLm1lbW9pemVkU3RhdGU7aWYobnVsbD09PWF8fG51bGwhPT1hLm1lbW9pemVkU3RhdGUmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUuZGVoeWRyYXRlZCl7aWYoSSYmbnVsbCE9PXlnJiYwIT09KGIubW9kZSYxKSYmMD09PShiLmZsYWdzJjEyOCkpSGcoKSxJZygpLGIuZmxhZ3N8PTk4NTYwLGY9ITE7ZWxzZSBpZihmPUdnKGIpLG51bGwhPT1kJiZudWxsIT09ZC5kZWh5ZHJhdGVkKXtpZihudWxsPT09XG5hKXtpZighZil0aHJvdyBFcnJvcihwKDMxOCkpO2Y9Yi5tZW1vaXplZFN0YXRlO2Y9bnVsbCE9PWY/Zi5kZWh5ZHJhdGVkOm51bGw7aWYoIWYpdGhyb3cgRXJyb3IocCgzMTcpKTtmW09mXT1ifWVsc2UgSWcoKSwwPT09KGIuZmxhZ3MmMTI4KSYmKGIubWVtb2l6ZWRTdGF0ZT1udWxsKSxiLmZsYWdzfD00O1MoYik7Zj0hMX1lbHNlIG51bGwhPT16ZyYmKEZqKHpnKSx6Zz1udWxsKSxmPSEwO2lmKCFmKXJldHVybiBiLmZsYWdzJjY1NTM2P2I6bnVsbH1pZigwIT09KGIuZmxhZ3MmMTI4KSlyZXR1cm4gYi5sYW5lcz1jLGI7ZD1udWxsIT09ZDtkIT09KG51bGwhPT1hJiZudWxsIT09YS5tZW1vaXplZFN0YXRlKSYmZCYmKGIuY2hpbGQuZmxhZ3N8PTgxOTIsMCE9PShiLm1vZGUmMSkmJihudWxsPT09YXx8MCE9PShMLmN1cnJlbnQmMSk/MD09PVQmJihUPTMpOnRqKCkpKTtudWxsIT09Yi51cGRhdGVRdWV1ZSYmKGIuZmxhZ3N8PTQpO1MoYik7cmV0dXJuIG51bGw7Y2FzZSA0OnJldHVybiB6aCgpLFxuQWooYSxiKSxudWxsPT09YSYmc2YoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksUyhiKSxudWxsO2Nhc2UgMTA6cmV0dXJuIGFoKGIudHlwZS5fY29udGV4dCksUyhiKSxudWxsO2Nhc2UgMTc6cmV0dXJuIFpmKGIudHlwZSkmJiRmKCksUyhiKSxudWxsO2Nhc2UgMTk6RShMKTtmPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsPT09ZilyZXR1cm4gUyhiKSxudWxsO2Q9MCE9PShiLmZsYWdzJjEyOCk7Zz1mLnJlbmRlcmluZztpZihudWxsPT09ZylpZihkKURqKGYsITEpO2Vsc2V7aWYoMCE9PVR8fG51bGwhPT1hJiYwIT09KGEuZmxhZ3MmMTI4KSlmb3IoYT1iLmNoaWxkO251bGwhPT1hOyl7Zz1DaChhKTtpZihudWxsIT09Zyl7Yi5mbGFnc3w9MTI4O0RqKGYsITEpO2Q9Zy51cGRhdGVRdWV1ZTtudWxsIT09ZCYmKGIudXBkYXRlUXVldWU9ZCxiLmZsYWdzfD00KTtiLnN1YnRyZWVGbGFncz0wO2Q9Yztmb3IoYz1iLmNoaWxkO251bGwhPT1jOylmPWMsYT1kLGYuZmxhZ3MmPTE0NjgwMDY2LFxuZz1mLmFsdGVybmF0ZSxudWxsPT09Zz8oZi5jaGlsZExhbmVzPTAsZi5sYW5lcz1hLGYuY2hpbGQ9bnVsbCxmLnN1YnRyZWVGbGFncz0wLGYubWVtb2l6ZWRQcm9wcz1udWxsLGYubWVtb2l6ZWRTdGF0ZT1udWxsLGYudXBkYXRlUXVldWU9bnVsbCxmLmRlcGVuZGVuY2llcz1udWxsLGYuc3RhdGVOb2RlPW51bGwpOihmLmNoaWxkTGFuZXM9Zy5jaGlsZExhbmVzLGYubGFuZXM9Zy5sYW5lcyxmLmNoaWxkPWcuY2hpbGQsZi5zdWJ0cmVlRmxhZ3M9MCxmLmRlbGV0aW9ucz1udWxsLGYubWVtb2l6ZWRQcm9wcz1nLm1lbW9pemVkUHJvcHMsZi5tZW1vaXplZFN0YXRlPWcubWVtb2l6ZWRTdGF0ZSxmLnVwZGF0ZVF1ZXVlPWcudXBkYXRlUXVldWUsZi50eXBlPWcudHlwZSxhPWcuZGVwZW5kZW5jaWVzLGYuZGVwZW5kZW5jaWVzPW51bGw9PT1hP251bGw6e2xhbmVzOmEubGFuZXMsZmlyc3RDb250ZXh0OmEuZmlyc3RDb250ZXh0fSksYz1jLnNpYmxpbmc7RyhMLEwuY3VycmVudCYxfDIpO3JldHVybiBiLmNoaWxkfWE9XG5hLnNpYmxpbmd9bnVsbCE9PWYudGFpbCYmQigpPkdqJiYoYi5mbGFnc3w9MTI4LGQ9ITAsRGooZiwhMSksYi5sYW5lcz00MTk0MzA0KX1lbHNle2lmKCFkKWlmKGE9Q2goZyksbnVsbCE9PWEpe2lmKGIuZmxhZ3N8PTEyOCxkPSEwLGM9YS51cGRhdGVRdWV1ZSxudWxsIT09YyYmKGIudXBkYXRlUXVldWU9YyxiLmZsYWdzfD00KSxEaihmLCEwKSxudWxsPT09Zi50YWlsJiZcImhpZGRlblwiPT09Zi50YWlsTW9kZSYmIWcuYWx0ZXJuYXRlJiYhSSlyZXR1cm4gUyhiKSxudWxsfWVsc2UgMipCKCktZi5yZW5kZXJpbmdTdGFydFRpbWU+R2omJjEwNzM3NDE4MjQhPT1jJiYoYi5mbGFnc3w9MTI4LGQ9ITAsRGooZiwhMSksYi5sYW5lcz00MTk0MzA0KTtmLmlzQmFja3dhcmRzPyhnLnNpYmxpbmc9Yi5jaGlsZCxiLmNoaWxkPWcpOihjPWYubGFzdCxudWxsIT09Yz9jLnNpYmxpbmc9ZzpiLmNoaWxkPWcsZi5sYXN0PWcpfWlmKG51bGwhPT1mLnRhaWwpcmV0dXJuIGI9Zi50YWlsLGYucmVuZGVyaW5nPVxuYixmLnRhaWw9Yi5zaWJsaW5nLGYucmVuZGVyaW5nU3RhcnRUaW1lPUIoKSxiLnNpYmxpbmc9bnVsbCxjPUwuY3VycmVudCxHKEwsZD9jJjF8MjpjJjEpLGI7UyhiKTtyZXR1cm4gbnVsbDtjYXNlIDIyOmNhc2UgMjM6cmV0dXJuIEhqKCksZD1udWxsIT09Yi5tZW1vaXplZFN0YXRlLG51bGwhPT1hJiZudWxsIT09YS5tZW1vaXplZFN0YXRlIT09ZCYmKGIuZmxhZ3N8PTgxOTIpLGQmJjAhPT0oYi5tb2RlJjEpPzAhPT0oZmomMTA3Mzc0MTgyNCkmJihTKGIpLGIuc3VidHJlZUZsYWdzJjYmJihiLmZsYWdzfD04MTkyKSk6UyhiKSxudWxsO2Nhc2UgMjQ6cmV0dXJuIG51bGw7Y2FzZSAyNTpyZXR1cm4gbnVsbH10aHJvdyBFcnJvcihwKDE1NixiLnRhZykpO31cbmZ1bmN0aW9uIElqKGEsYil7d2coYik7c3dpdGNoKGIudGFnKXtjYXNlIDE6cmV0dXJuIFpmKGIudHlwZSkmJiRmKCksYT1iLmZsYWdzLGEmNjU1MzY/KGIuZmxhZ3M9YSYtNjU1Mzd8MTI4LGIpOm51bGw7Y2FzZSAzOnJldHVybiB6aCgpLEUoV2YpLEUoSCksRWgoKSxhPWIuZmxhZ3MsMCE9PShhJjY1NTM2KSYmMD09PShhJjEyOCk/KGIuZmxhZ3M9YSYtNjU1Mzd8MTI4LGIpOm51bGw7Y2FzZSA1OnJldHVybiBCaChiKSxudWxsO2Nhc2UgMTM6RShMKTthPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YSYmbnVsbCE9PWEuZGVoeWRyYXRlZCl7aWYobnVsbD09PWIuYWx0ZXJuYXRlKXRocm93IEVycm9yKHAoMzQwKSk7SWcoKX1hPWIuZmxhZ3M7cmV0dXJuIGEmNjU1MzY/KGIuZmxhZ3M9YSYtNjU1Mzd8MTI4LGIpOm51bGw7Y2FzZSAxOTpyZXR1cm4gRShMKSxudWxsO2Nhc2UgNDpyZXR1cm4gemgoKSxudWxsO2Nhc2UgMTA6cmV0dXJuIGFoKGIudHlwZS5fY29udGV4dCksbnVsbDtjYXNlIDIyOmNhc2UgMjM6cmV0dXJuIEhqKCksXG5udWxsO2Nhc2UgMjQ6cmV0dXJuIG51bGw7ZGVmYXVsdDpyZXR1cm4gbnVsbH19dmFyIEpqPSExLFU9ITEsS2o9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtTZXQ/V2Vha1NldDpTZXQsVj1udWxsO2Z1bmN0aW9uIExqKGEsYil7dmFyIGM9YS5yZWY7aWYobnVsbCE9PWMpaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGMpdHJ5e2MobnVsbCl9Y2F0Y2goZCl7VyhhLGIsZCl9ZWxzZSBjLmN1cnJlbnQ9bnVsbH1mdW5jdGlvbiBNaihhLGIsYyl7dHJ5e2MoKX1jYXRjaChkKXtXKGEsYixkKX19dmFyIE5qPSExO1xuZnVuY3Rpb24gT2ooYSxiKXtDZj1kZDthPU1lKCk7aWYoTmUoYSkpe2lmKFwic2VsZWN0aW9uU3RhcnRcImluIGEpdmFyIGM9e3N0YXJ0OmEuc2VsZWN0aW9uU3RhcnQsZW5kOmEuc2VsZWN0aW9uRW5kfTtlbHNlIGE6e2M9KGM9YS5vd25lckRvY3VtZW50KSYmYy5kZWZhdWx0Vmlld3x8d2luZG93O3ZhciBkPWMuZ2V0U2VsZWN0aW9uJiZjLmdldFNlbGVjdGlvbigpO2lmKGQmJjAhPT1kLnJhbmdlQ291bnQpe2M9ZC5hbmNob3JOb2RlO3ZhciBlPWQuYW5jaG9yT2Zmc2V0LGY9ZC5mb2N1c05vZGU7ZD1kLmZvY3VzT2Zmc2V0O3RyeXtjLm5vZGVUeXBlLGYubm9kZVR5cGV9Y2F0Y2goRil7Yz1udWxsO2JyZWFrIGF9dmFyIGc9MCxoPS0xLGs9LTEsbD0wLG09MCxxPWEscj1udWxsO2I6Zm9yKDs7KXtmb3IodmFyIHk7Oyl7cSE9PWN8fDAhPT1lJiYzIT09cS5ub2RlVHlwZXx8KGg9ZytlKTtxIT09Znx8MCE9PWQmJjMhPT1xLm5vZGVUeXBlfHwoaz1nK2QpOzM9PT1xLm5vZGVUeXBlJiYoZys9XG5xLm5vZGVWYWx1ZS5sZW5ndGgpO2lmKG51bGw9PT0oeT1xLmZpcnN0Q2hpbGQpKWJyZWFrO3I9cTtxPXl9Zm9yKDs7KXtpZihxPT09YSlicmVhayBiO3I9PT1jJiYrK2w9PT1lJiYoaD1nKTtyPT09ZiYmKyttPT09ZCYmKGs9Zyk7aWYobnVsbCE9PSh5PXEubmV4dFNpYmxpbmcpKWJyZWFrO3E9cjtyPXEucGFyZW50Tm9kZX1xPXl9Yz0tMT09PWh8fC0xPT09az9udWxsOntzdGFydDpoLGVuZDprfX1lbHNlIGM9bnVsbH1jPWN8fHtzdGFydDowLGVuZDowfX1lbHNlIGM9bnVsbDtEZj17Zm9jdXNlZEVsZW06YSxzZWxlY3Rpb25SYW5nZTpjfTtkZD0hMTtmb3IoVj1iO251bGwhPT1WOylpZihiPVYsYT1iLmNoaWxkLDAhPT0oYi5zdWJ0cmVlRmxhZ3MmMTAyOCkmJm51bGwhPT1hKWEucmV0dXJuPWIsVj1hO2Vsc2UgZm9yKDtudWxsIT09Vjspe2I9Vjt0cnl7dmFyIG49Yi5hbHRlcm5hdGU7aWYoMCE9PShiLmZsYWdzJjEwMjQpKXN3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpicmVhaztcbmNhc2UgMTppZihudWxsIT09bil7dmFyIHQ9bi5tZW1vaXplZFByb3BzLEo9bi5tZW1vaXplZFN0YXRlLHg9Yi5zdGF0ZU5vZGUsdz14LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKGIuZWxlbWVudFR5cGU9PT1iLnR5cGU/dDpDaShiLnR5cGUsdCksSik7eC5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZT13fWJyZWFrO2Nhc2UgMzp2YXIgdT1iLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOzE9PT11Lm5vZGVUeXBlP3UudGV4dENvbnRlbnQ9XCJcIjo5PT09dS5ub2RlVHlwZSYmdS5kb2N1bWVudEVsZW1lbnQmJnUucmVtb3ZlQ2hpbGQodS5kb2N1bWVudEVsZW1lbnQpO2JyZWFrO2Nhc2UgNTpjYXNlIDY6Y2FzZSA0OmNhc2UgMTc6YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihwKDE2MykpO319Y2F0Y2goRil7VyhiLGIucmV0dXJuLEYpfWE9Yi5zaWJsaW5nO2lmKG51bGwhPT1hKXthLnJldHVybj1iLnJldHVybjtWPWE7YnJlYWt9Vj1iLnJldHVybn1uPU5qO05qPSExO3JldHVybiBufVxuZnVuY3Rpb24gUGooYSxiLGMpe3ZhciBkPWIudXBkYXRlUXVldWU7ZD1udWxsIT09ZD9kLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09ZCl7dmFyIGU9ZD1kLm5leHQ7ZG97aWYoKGUudGFnJmEpPT09YSl7dmFyIGY9ZS5kZXN0cm95O2UuZGVzdHJveT12b2lkIDA7dm9pZCAwIT09ZiYmTWooYixjLGYpfWU9ZS5uZXh0fXdoaWxlKGUhPT1kKX19ZnVuY3Rpb24gUWooYSxiKXtiPWIudXBkYXRlUXVldWU7Yj1udWxsIT09Yj9iLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yil7dmFyIGM9Yj1iLm5leHQ7ZG97aWYoKGMudGFnJmEpPT09YSl7dmFyIGQ9Yy5jcmVhdGU7Yy5kZXN0cm95PWQoKX1jPWMubmV4dH13aGlsZShjIT09Yil9fWZ1bmN0aW9uIFJqKGEpe3ZhciBiPWEucmVmO2lmKG51bGwhPT1iKXt2YXIgYz1hLnN0YXRlTm9kZTtzd2l0Y2goYS50YWcpe2Nhc2UgNTphPWM7YnJlYWs7ZGVmYXVsdDphPWN9XCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihhKTpiLmN1cnJlbnQ9YX19XG5mdW5jdGlvbiBTaihhKXt2YXIgYj1hLmFsdGVybmF0ZTtudWxsIT09YiYmKGEuYWx0ZXJuYXRlPW51bGwsU2ooYikpO2EuY2hpbGQ9bnVsbDthLmRlbGV0aW9ucz1udWxsO2Euc2libGluZz1udWxsOzU9PT1hLnRhZyYmKGI9YS5zdGF0ZU5vZGUsbnVsbCE9PWImJihkZWxldGUgYltPZl0sZGVsZXRlIGJbUGZdLGRlbGV0ZSBiW29mXSxkZWxldGUgYltRZl0sZGVsZXRlIGJbUmZdKSk7YS5zdGF0ZU5vZGU9bnVsbDthLnJldHVybj1udWxsO2EuZGVwZW5kZW5jaWVzPW51bGw7YS5tZW1vaXplZFByb3BzPW51bGw7YS5tZW1vaXplZFN0YXRlPW51bGw7YS5wZW5kaW5nUHJvcHM9bnVsbDthLnN0YXRlTm9kZT1udWxsO2EudXBkYXRlUXVldWU9bnVsbH1mdW5jdGlvbiBUaihhKXtyZXR1cm4gNT09PWEudGFnfHwzPT09YS50YWd8fDQ9PT1hLnRhZ31cbmZ1bmN0aW9uIFVqKGEpe2E6Zm9yKDs7KXtmb3IoO251bGw9PT1hLnNpYmxpbmc7KXtpZihudWxsPT09YS5yZXR1cm58fFRqKGEucmV0dXJuKSlyZXR1cm4gbnVsbDthPWEucmV0dXJufWEuc2libGluZy5yZXR1cm49YS5yZXR1cm47Zm9yKGE9YS5zaWJsaW5nOzUhPT1hLnRhZyYmNiE9PWEudGFnJiYxOCE9PWEudGFnOyl7aWYoYS5mbGFncyYyKWNvbnRpbnVlIGE7aWYobnVsbD09PWEuY2hpbGR8fDQ9PT1hLnRhZyljb250aW51ZSBhO2Vsc2UgYS5jaGlsZC5yZXR1cm49YSxhPWEuY2hpbGR9aWYoIShhLmZsYWdzJjIpKXJldHVybiBhLnN0YXRlTm9kZX19XG5mdW5jdGlvbiBWaihhLGIsYyl7dmFyIGQ9YS50YWc7aWYoNT09PWR8fDY9PT1kKWE9YS5zdGF0ZU5vZGUsYj84PT09Yy5ub2RlVHlwZT9jLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsYik6Yy5pbnNlcnRCZWZvcmUoYSxiKTooOD09PWMubm9kZVR5cGU/KGI9Yy5wYXJlbnROb2RlLGIuaW5zZXJ0QmVmb3JlKGEsYykpOihiPWMsYi5hcHBlbmRDaGlsZChhKSksYz1jLl9yZWFjdFJvb3RDb250YWluZXIsbnVsbCE9PWMmJnZvaWQgMCE9PWN8fG51bGwhPT1iLm9uY2xpY2t8fChiLm9uY2xpY2s9QmYpKTtlbHNlIGlmKDQhPT1kJiYoYT1hLmNoaWxkLG51bGwhPT1hKSlmb3IoVmooYSxiLGMpLGE9YS5zaWJsaW5nO251bGwhPT1hOylWaihhLGIsYyksYT1hLnNpYmxpbmd9XG5mdW5jdGlvbiBXaihhLGIsYyl7dmFyIGQ9YS50YWc7aWYoNT09PWR8fDY9PT1kKWE9YS5zdGF0ZU5vZGUsYj9jLmluc2VydEJlZm9yZShhLGIpOmMuYXBwZW5kQ2hpbGQoYSk7ZWxzZSBpZig0IT09ZCYmKGE9YS5jaGlsZCxudWxsIT09YSkpZm9yKFdqKGEsYixjKSxhPWEuc2libGluZztudWxsIT09YTspV2ooYSxiLGMpLGE9YS5zaWJsaW5nfXZhciBYPW51bGwsWGo9ITE7ZnVuY3Rpb24gWWooYSxiLGMpe2ZvcihjPWMuY2hpbGQ7bnVsbCE9PWM7KVpqKGEsYixjKSxjPWMuc2libGluZ31cbmZ1bmN0aW9uIFpqKGEsYixjKXtpZihsYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGxjLm9uQ29tbWl0RmliZXJVbm1vdW50KXRyeXtsYy5vbkNvbW1pdEZpYmVyVW5tb3VudChrYyxjKX1jYXRjaChoKXt9c3dpdGNoKGMudGFnKXtjYXNlIDU6VXx8TGooYyxiKTtjYXNlIDY6dmFyIGQ9WCxlPVhqO1g9bnVsbDtZaihhLGIsYyk7WD1kO1hqPWU7bnVsbCE9PVgmJihYaj8oYT1YLGM9Yy5zdGF0ZU5vZGUsOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpOmEucmVtb3ZlQ2hpbGQoYykpOlgucmVtb3ZlQ2hpbGQoYy5zdGF0ZU5vZGUpKTticmVhaztjYXNlIDE4Om51bGwhPT1YJiYoWGo/KGE9WCxjPWMuc3RhdGVOb2RlLDg9PT1hLm5vZGVUeXBlP0tmKGEucGFyZW50Tm9kZSxjKToxPT09YS5ub2RlVHlwZSYmS2YoYSxjKSxiZChhKSk6S2YoWCxjLnN0YXRlTm9kZSkpO2JyZWFrO2Nhc2UgNDpkPVg7ZT1YajtYPWMuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87WGo9ITA7XG5ZaihhLGIsYyk7WD1kO1hqPWU7YnJlYWs7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OmlmKCFVJiYoZD1jLnVwZGF0ZVF1ZXVlLG51bGwhPT1kJiYoZD1kLmxhc3RFZmZlY3QsbnVsbCE9PWQpKSl7ZT1kPWQubmV4dDtkb3t2YXIgZj1lLGc9Zi5kZXN0cm95O2Y9Zi50YWc7dm9pZCAwIT09ZyYmKDAhPT0oZiYyKT9NaihjLGIsZyk6MCE9PShmJjQpJiZNaihjLGIsZykpO2U9ZS5uZXh0fXdoaWxlKGUhPT1kKX1ZaihhLGIsYyk7YnJlYWs7Y2FzZSAxOmlmKCFVJiYoTGooYyxiKSxkPWMuc3RhdGVOb2RlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudFdpbGxVbm1vdW50KSl0cnl7ZC5wcm9wcz1jLm1lbW9pemVkUHJvcHMsZC5zdGF0ZT1jLm1lbW9pemVkU3RhdGUsZC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGgpe1coYyxiLGgpfVlqKGEsYixjKTticmVhaztjYXNlIDIxOllqKGEsYixjKTticmVhaztjYXNlIDIyOmMubW9kZSYxPyhVPShkPVUpfHxudWxsIT09XG5jLm1lbW9pemVkU3RhdGUsWWooYSxiLGMpLFU9ZCk6WWooYSxiLGMpO2JyZWFrO2RlZmF1bHQ6WWooYSxiLGMpfX1mdW5jdGlvbiBhayhhKXt2YXIgYj1hLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iKXthLnVwZGF0ZVF1ZXVlPW51bGw7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbD09PWMmJihjPWEuc3RhdGVOb2RlPW5ldyBLaik7Yi5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBkPWJrLmJpbmQobnVsbCxhLGIpO2MuaGFzKGIpfHwoYy5hZGQoYiksYi50aGVuKGQsZCkpfSl9fVxuZnVuY3Rpb24gY2soYSxiKXt2YXIgYz1iLmRlbGV0aW9ucztpZihudWxsIT09Yylmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXTt0cnl7dmFyIGY9YSxnPWIsaD1nO2E6Zm9yKDtudWxsIT09aDspe3N3aXRjaChoLnRhZyl7Y2FzZSA1Olg9aC5zdGF0ZU5vZGU7WGo9ITE7YnJlYWsgYTtjYXNlIDM6WD1oLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO1hqPSEwO2JyZWFrIGE7Y2FzZSA0Olg9aC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztYaj0hMDticmVhayBhfWg9aC5yZXR1cm59aWYobnVsbD09PVgpdGhyb3cgRXJyb3IocCgxNjApKTtaaihmLGcsZSk7WD1udWxsO1hqPSExO3ZhciBrPWUuYWx0ZXJuYXRlO251bGwhPT1rJiYoay5yZXR1cm49bnVsbCk7ZS5yZXR1cm49bnVsbH1jYXRjaChsKXtXKGUsYixsKX19aWYoYi5zdWJ0cmVlRmxhZ3MmMTI4NTQpZm9yKGI9Yi5jaGlsZDtudWxsIT09YjspZGsoYixhKSxiPWIuc2libGluZ31cbmZ1bmN0aW9uIGRrKGEsYil7dmFyIGM9YS5hbHRlcm5hdGUsZD1hLmZsYWdzO3N3aXRjaChhLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OmNrKGIsYSk7ZWsoYSk7aWYoZCY0KXt0cnl7UGooMyxhLGEucmV0dXJuKSxRaigzLGEpfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX10cnl7UGooNSxhLGEucmV0dXJuKX1jYXRjaCh0KXtXKGEsYS5yZXR1cm4sdCl9fWJyZWFrO2Nhc2UgMTpjayhiLGEpO2VrKGEpO2QmNTEyJiZudWxsIT09YyYmTGooYyxjLnJldHVybik7YnJlYWs7Y2FzZSA1OmNrKGIsYSk7ZWsoYSk7ZCY1MTImJm51bGwhPT1jJiZMaihjLGMucmV0dXJuKTtpZihhLmZsYWdzJjMyKXt2YXIgZT1hLnN0YXRlTm9kZTt0cnl7b2IoZSxcIlwiKX1jYXRjaCh0KXtXKGEsYS5yZXR1cm4sdCl9fWlmKGQmNCYmKGU9YS5zdGF0ZU5vZGUsbnVsbCE9ZSkpe3ZhciBmPWEubWVtb2l6ZWRQcm9wcyxnPW51bGwhPT1jP2MubWVtb2l6ZWRQcm9wczpmLGg9YS50eXBlLGs9YS51cGRhdGVRdWV1ZTtcbmEudXBkYXRlUXVldWU9bnVsbDtpZihudWxsIT09ayl0cnl7XCJpbnB1dFwiPT09aCYmXCJyYWRpb1wiPT09Zi50eXBlJiZudWxsIT1mLm5hbWUmJmFiKGUsZik7dmIoaCxnKTt2YXIgbD12YihoLGYpO2ZvcihnPTA7ZzxrLmxlbmd0aDtnKz0yKXt2YXIgbT1rW2ddLHE9a1tnKzFdO1wic3R5bGVcIj09PW0/c2IoZSxxKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1tP25iKGUscSk6XCJjaGlsZHJlblwiPT09bT9vYihlLHEpOnRhKGUsbSxxLGwpfXN3aXRjaChoKXtjYXNlIFwiaW5wdXRcIjpiYihlLGYpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmliKGUsZik7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOnZhciByPWUuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZTtlLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU9ISFmLm11bHRpcGxlO3ZhciB5PWYudmFsdWU7bnVsbCE9eT9mYihlLCEhZi5tdWx0aXBsZSx5LCExKTpyIT09ISFmLm11bHRpcGxlJiYobnVsbCE9Zi5kZWZhdWx0VmFsdWU/ZmIoZSwhIWYubXVsdGlwbGUsXG5mLmRlZmF1bHRWYWx1ZSwhMCk6ZmIoZSwhIWYubXVsdGlwbGUsZi5tdWx0aXBsZT9bXTpcIlwiLCExKSl9ZVtQZl09Zn1jYXRjaCh0KXtXKGEsYS5yZXR1cm4sdCl9fWJyZWFrO2Nhc2UgNjpjayhiLGEpO2VrKGEpO2lmKGQmNCl7aWYobnVsbD09PWEuc3RhdGVOb2RlKXRocm93IEVycm9yKHAoMTYyKSk7ZT1hLnN0YXRlTm9kZTtmPWEubWVtb2l6ZWRQcm9wczt0cnl7ZS5ub2RlVmFsdWU9Zn1jYXRjaCh0KXtXKGEsYS5yZXR1cm4sdCl9fWJyZWFrO2Nhc2UgMzpjayhiLGEpO2VrKGEpO2lmKGQmNCYmbnVsbCE9PWMmJmMubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQpdHJ5e2JkKGIuY29udGFpbmVySW5mbyl9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfWJyZWFrO2Nhc2UgNDpjayhiLGEpO2VrKGEpO2JyZWFrO2Nhc2UgMTM6Y2soYixhKTtlayhhKTtlPWEuY2hpbGQ7ZS5mbGFncyY4MTkyJiYoZj1udWxsIT09ZS5tZW1vaXplZFN0YXRlLGUuc3RhdGVOb2RlLmlzSGlkZGVuPWYsIWZ8fFxubnVsbCE9PWUuYWx0ZXJuYXRlJiZudWxsIT09ZS5hbHRlcm5hdGUubWVtb2l6ZWRTdGF0ZXx8KGZrPUIoKSkpO2QmNCYmYWsoYSk7YnJlYWs7Y2FzZSAyMjptPW51bGwhPT1jJiZudWxsIT09Yy5tZW1vaXplZFN0YXRlO2EubW9kZSYxPyhVPShsPVUpfHxtLGNrKGIsYSksVT1sKTpjayhiLGEpO2VrKGEpO2lmKGQmODE5Mil7bD1udWxsIT09YS5tZW1vaXplZFN0YXRlO2lmKChhLnN0YXRlTm9kZS5pc0hpZGRlbj1sKSYmIW0mJjAhPT0oYS5tb2RlJjEpKWZvcihWPWEsbT1hLmNoaWxkO251bGwhPT1tOyl7Zm9yKHE9Vj1tO251bGwhPT1WOyl7cj1WO3k9ci5jaGlsZDtzd2l0Y2goci50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpQaig0LHIsci5yZXR1cm4pO2JyZWFrO2Nhc2UgMTpMaihyLHIucmV0dXJuKTt2YXIgbj1yLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2Ygbi5jb21wb25lbnRXaWxsVW5tb3VudCl7ZD1yO2M9ci5yZXR1cm47dHJ5e2I9ZCxuLnByb3BzPVxuYi5tZW1vaXplZFByb3BzLG4uc3RhdGU9Yi5tZW1vaXplZFN0YXRlLG4uY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaCh0KXtXKGQsYyx0KX19YnJlYWs7Y2FzZSA1OkxqKHIsci5yZXR1cm4pO2JyZWFrO2Nhc2UgMjI6aWYobnVsbCE9PXIubWVtb2l6ZWRTdGF0ZSl7Z2socSk7Y29udGludWV9fW51bGwhPT15Pyh5LnJldHVybj1yLFY9eSk6Z2socSl9bT1tLnNpYmxpbmd9YTpmb3IobT1udWxsLHE9YTs7KXtpZig1PT09cS50YWcpe2lmKG51bGw9PT1tKXttPXE7dHJ5e2U9cS5zdGF0ZU5vZGUsbD8oZj1lLnN0eWxlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLnNldFByb3BlcnR5P2Yuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsXCJub25lXCIsXCJpbXBvcnRhbnRcIik6Zi5kaXNwbGF5PVwibm9uZVwiKTooaD1xLnN0YXRlTm9kZSxrPXEubWVtb2l6ZWRQcm9wcy5zdHlsZSxnPXZvaWQgMCE9PWsmJm51bGwhPT1rJiZrLmhhc093blByb3BlcnR5KFwiZGlzcGxheVwiKT9rLmRpc3BsYXk6bnVsbCxoLnN0eWxlLmRpc3BsYXk9XG5yYihcImRpc3BsYXlcIixnKSl9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfX19ZWxzZSBpZig2PT09cS50YWcpe2lmKG51bGw9PT1tKXRyeXtxLnN0YXRlTm9kZS5ub2RlVmFsdWU9bD9cIlwiOnEubWVtb2l6ZWRQcm9wc31jYXRjaCh0KXtXKGEsYS5yZXR1cm4sdCl9fWVsc2UgaWYoKDIyIT09cS50YWcmJjIzIT09cS50YWd8fG51bGw9PT1xLm1lbW9pemVkU3RhdGV8fHE9PT1hKSYmbnVsbCE9PXEuY2hpbGQpe3EuY2hpbGQucmV0dXJuPXE7cT1xLmNoaWxkO2NvbnRpbnVlfWlmKHE9PT1hKWJyZWFrIGE7Zm9yKDtudWxsPT09cS5zaWJsaW5nOyl7aWYobnVsbD09PXEucmV0dXJufHxxLnJldHVybj09PWEpYnJlYWsgYTttPT09cSYmKG09bnVsbCk7cT1xLnJldHVybn1tPT09cSYmKG09bnVsbCk7cS5zaWJsaW5nLnJldHVybj1xLnJldHVybjtxPXEuc2libGluZ319YnJlYWs7Y2FzZSAxOTpjayhiLGEpO2VrKGEpO2QmNCYmYWsoYSk7YnJlYWs7Y2FzZSAyMTpicmVhaztkZWZhdWx0OmNrKGIsXG5hKSxlayhhKX19ZnVuY3Rpb24gZWsoYSl7dmFyIGI9YS5mbGFncztpZihiJjIpe3RyeXthOntmb3IodmFyIGM9YS5yZXR1cm47bnVsbCE9PWM7KXtpZihUaihjKSl7dmFyIGQ9YzticmVhayBhfWM9Yy5yZXR1cm59dGhyb3cgRXJyb3IocCgxNjApKTt9c3dpdGNoKGQudGFnKXtjYXNlIDU6dmFyIGU9ZC5zdGF0ZU5vZGU7ZC5mbGFncyYzMiYmKG9iKGUsXCJcIiksZC5mbGFncyY9LTMzKTt2YXIgZj1VaihhKTtXaihhLGYsZSk7YnJlYWs7Y2FzZSAzOmNhc2UgNDp2YXIgZz1kLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLGg9VWooYSk7VmooYSxoLGcpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IocCgxNjEpKTt9fWNhdGNoKGspe1coYSxhLnJldHVybixrKX1hLmZsYWdzJj0tM31iJjQwOTYmJihhLmZsYWdzJj0tNDA5Nyl9ZnVuY3Rpb24gaGsoYSxiLGMpe1Y9YTtpayhhLGIsYyl9XG5mdW5jdGlvbiBpayhhLGIsYyl7Zm9yKHZhciBkPTAhPT0oYS5tb2RlJjEpO251bGwhPT1WOyl7dmFyIGU9VixmPWUuY2hpbGQ7aWYoMjI9PT1lLnRhZyYmZCl7dmFyIGc9bnVsbCE9PWUubWVtb2l6ZWRTdGF0ZXx8Smo7aWYoIWcpe3ZhciBoPWUuYWx0ZXJuYXRlLGs9bnVsbCE9PWgmJm51bGwhPT1oLm1lbW9pemVkU3RhdGV8fFU7aD1Kajt2YXIgbD1VO0pqPWc7aWYoKFU9aykmJiFsKWZvcihWPWU7bnVsbCE9PVY7KWc9VixrPWcuY2hpbGQsMjI9PT1nLnRhZyYmbnVsbCE9PWcubWVtb2l6ZWRTdGF0ZT9qayhlKTpudWxsIT09az8oay5yZXR1cm49ZyxWPWspOmprKGUpO2Zvcig7bnVsbCE9PWY7KVY9ZixpayhmLGIsYyksZj1mLnNpYmxpbmc7Vj1lO0pqPWg7VT1sfWtrKGEsYixjKX1lbHNlIDAhPT0oZS5zdWJ0cmVlRmxhZ3MmODc3MikmJm51bGwhPT1mPyhmLnJldHVybj1lLFY9Zik6a2soYSxiLGMpfX1cbmZ1bmN0aW9uIGtrKGEpe2Zvcig7bnVsbCE9PVY7KXt2YXIgYj1WO2lmKDAhPT0oYi5mbGFncyY4NzcyKSl7dmFyIGM9Yi5hbHRlcm5hdGU7dHJ5e2lmKDAhPT0oYi5mbGFncyY4NzcyKSlzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6VXx8UWooNSxiKTticmVhaztjYXNlIDE6dmFyIGQ9Yi5zdGF0ZU5vZGU7aWYoYi5mbGFncyY0JiYhVSlpZihudWxsPT09YylkLmNvbXBvbmVudERpZE1vdW50KCk7ZWxzZXt2YXIgZT1iLmVsZW1lbnRUeXBlPT09Yi50eXBlP2MubWVtb2l6ZWRQcm9wczpDaShiLnR5cGUsYy5tZW1vaXplZFByb3BzKTtkLmNvbXBvbmVudERpZFVwZGF0ZShlLGMubWVtb2l6ZWRTdGF0ZSxkLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlKX12YXIgZj1iLnVwZGF0ZVF1ZXVlO251bGwhPT1mJiZzaChiLGYsZCk7YnJlYWs7Y2FzZSAzOnZhciBnPWIudXBkYXRlUXVldWU7aWYobnVsbCE9PWcpe2M9bnVsbDtpZihudWxsIT09Yi5jaGlsZClzd2l0Y2goYi5jaGlsZC50YWcpe2Nhc2UgNTpjPVxuYi5jaGlsZC5zdGF0ZU5vZGU7YnJlYWs7Y2FzZSAxOmM9Yi5jaGlsZC5zdGF0ZU5vZGV9c2goYixnLGMpfWJyZWFrO2Nhc2UgNTp2YXIgaD1iLnN0YXRlTm9kZTtpZihudWxsPT09YyYmYi5mbGFncyY0KXtjPWg7dmFyIGs9Yi5tZW1vaXplZFByb3BzO3N3aXRjaChiLnR5cGUpe2Nhc2UgXCJidXR0b25cIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwic2VsZWN0XCI6Y2FzZSBcInRleHRhcmVhXCI6ay5hdXRvRm9jdXMmJmMuZm9jdXMoKTticmVhaztjYXNlIFwiaW1nXCI6ay5zcmMmJihjLnNyYz1rLnNyYyl9fWJyZWFrO2Nhc2UgNjpicmVhaztjYXNlIDQ6YnJlYWs7Y2FzZSAxMjpicmVhaztjYXNlIDEzOmlmKG51bGw9PT1iLm1lbW9pemVkU3RhdGUpe3ZhciBsPWIuYWx0ZXJuYXRlO2lmKG51bGwhPT1sKXt2YXIgbT1sLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PW0pe3ZhciBxPW0uZGVoeWRyYXRlZDtudWxsIT09cSYmYmQocSl9fX1icmVhaztjYXNlIDE5OmNhc2UgMTc6Y2FzZSAyMTpjYXNlIDIyOmNhc2UgMjM6Y2FzZSAyNTpicmVhaztcbmRlZmF1bHQ6dGhyb3cgRXJyb3IocCgxNjMpKTt9VXx8Yi5mbGFncyY1MTImJlJqKGIpfWNhdGNoKHIpe1coYixiLnJldHVybixyKX19aWYoYj09PWEpe1Y9bnVsbDticmVha31jPWIuc2libGluZztpZihudWxsIT09Yyl7Yy5yZXR1cm49Yi5yZXR1cm47Vj1jO2JyZWFrfVY9Yi5yZXR1cm59fWZ1bmN0aW9uIGdrKGEpe2Zvcig7bnVsbCE9PVY7KXt2YXIgYj1WO2lmKGI9PT1hKXtWPW51bGw7YnJlYWt9dmFyIGM9Yi5zaWJsaW5nO2lmKG51bGwhPT1jKXtjLnJldHVybj1iLnJldHVybjtWPWM7YnJlYWt9Vj1iLnJldHVybn19XG5mdW5jdGlvbiBqayhhKXtmb3IoO251bGwhPT1WOyl7dmFyIGI9Vjt0cnl7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OnZhciBjPWIucmV0dXJuO3RyeXtRaig0LGIpfWNhdGNoKGspe1coYixjLGspfWJyZWFrO2Nhc2UgMTp2YXIgZD1iLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRNb3VudCl7dmFyIGU9Yi5yZXR1cm47dHJ5e2QuY29tcG9uZW50RGlkTW91bnQoKX1jYXRjaChrKXtXKGIsZSxrKX19dmFyIGY9Yi5yZXR1cm47dHJ5e1JqKGIpfWNhdGNoKGspe1coYixmLGspfWJyZWFrO2Nhc2UgNTp2YXIgZz1iLnJldHVybjt0cnl7UmooYil9Y2F0Y2goayl7VyhiLGcsayl9fX1jYXRjaChrKXtXKGIsYi5yZXR1cm4sayl9aWYoYj09PWEpe1Y9bnVsbDticmVha312YXIgaD1iLnNpYmxpbmc7aWYobnVsbCE9PWgpe2gucmV0dXJuPWIucmV0dXJuO1Y9aDticmVha31WPWIucmV0dXJufX1cbnZhciBsaz1NYXRoLmNlaWwsbWs9dWEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixuaz11YS5SZWFjdEN1cnJlbnRPd25lcixvaz11YS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxLPTAsUT1udWxsLFk9bnVsbCxaPTAsZmo9MCxlaj1VZigwKSxUPTAscGs9bnVsbCxyaD0wLHFrPTAscms9MCxzaz1udWxsLHRrPW51bGwsZms9MCxHaj1JbmZpbml0eSx1az1udWxsLE9pPSExLFBpPW51bGwsUmk9bnVsbCx2az0hMSx3az1udWxsLHhrPTAseWs9MCx6az1udWxsLEFrPS0xLEJrPTA7ZnVuY3Rpb24gUigpe3JldHVybiAwIT09KEsmNik/QigpOi0xIT09QWs/QWs6QWs9QigpfVxuZnVuY3Rpb24geWkoYSl7aWYoMD09PShhLm1vZGUmMSkpcmV0dXJuIDE7aWYoMCE9PShLJjIpJiYwIT09WilyZXR1cm4gWiYtWjtpZihudWxsIT09S2cudHJhbnNpdGlvbilyZXR1cm4gMD09PUJrJiYoQms9eWMoKSksQms7YT1DO2lmKDAhPT1hKXJldHVybiBhO2E9d2luZG93LmV2ZW50O2E9dm9pZCAwPT09YT8xNjpqZChhLnR5cGUpO3JldHVybiBhfWZ1bmN0aW9uIGdpKGEsYixjLGQpe2lmKDUwPHlrKXRocm93IHlrPTAsems9bnVsbCxFcnJvcihwKDE4NSkpO0FjKGEsYyxkKTtpZigwPT09KEsmMil8fGEhPT1RKWE9PT1RJiYoMD09PShLJjIpJiYocWt8PWMpLDQ9PT1UJiZDayhhLFopKSxEayhhLGQpLDE9PT1jJiYwPT09SyYmMD09PShiLm1vZGUmMSkmJihHaj1CKCkrNTAwLGZnJiZqZygpKX1cbmZ1bmN0aW9uIERrKGEsYil7dmFyIGM9YS5jYWxsYmFja05vZGU7d2MoYSxiKTt2YXIgZD11YyhhLGE9PT1RP1o6MCk7aWYoMD09PWQpbnVsbCE9PWMmJmJjKGMpLGEuY2FsbGJhY2tOb2RlPW51bGwsYS5jYWxsYmFja1ByaW9yaXR5PTA7ZWxzZSBpZihiPWQmLWQsYS5jYWxsYmFja1ByaW9yaXR5IT09Yil7bnVsbCE9YyYmYmMoYyk7aWYoMT09PWIpMD09PWEudGFnP2lnKEVrLmJpbmQobnVsbCxhKSk6aGcoRWsuYmluZChudWxsLGEpKSxKZihmdW5jdGlvbigpezA9PT0oSyY2KSYmamcoKX0pLGM9bnVsbDtlbHNle3N3aXRjaChEYyhkKSl7Y2FzZSAxOmM9ZmM7YnJlYWs7Y2FzZSA0OmM9Z2M7YnJlYWs7Y2FzZSAxNjpjPWhjO2JyZWFrO2Nhc2UgNTM2ODcwOTEyOmM9amM7YnJlYWs7ZGVmYXVsdDpjPWhjfWM9RmsoYyxHay5iaW5kKG51bGwsYSkpfWEuY2FsbGJhY2tQcmlvcml0eT1iO2EuY2FsbGJhY2tOb2RlPWN9fVxuZnVuY3Rpb24gR2soYSxiKXtBaz0tMTtCaz0wO2lmKDAhPT0oSyY2KSl0aHJvdyBFcnJvcihwKDMyNykpO3ZhciBjPWEuY2FsbGJhY2tOb2RlO2lmKEhrKCkmJmEuY2FsbGJhY2tOb2RlIT09YylyZXR1cm4gbnVsbDt2YXIgZD11YyhhLGE9PT1RP1o6MCk7aWYoMD09PWQpcmV0dXJuIG51bGw7aWYoMCE9PShkJjMwKXx8MCE9PShkJmEuZXhwaXJlZExhbmVzKXx8YiliPUlrKGEsZCk7ZWxzZXtiPWQ7dmFyIGU9SztLfD0yO3ZhciBmPUprKCk7aWYoUSE9PWF8fFohPT1iKXVrPW51bGwsR2o9QigpKzUwMCxLayhhLGIpO2RvIHRyeXtMaygpO2JyZWFrfWNhdGNoKGgpe01rKGEsaCl9d2hpbGUoMSk7JGcoKTttay5jdXJyZW50PWY7Sz1lO251bGwhPT1ZP2I9MDooUT1udWxsLFo9MCxiPVQpfWlmKDAhPT1iKXsyPT09YiYmKGU9eGMoYSksMCE9PWUmJihkPWUsYj1OayhhLGUpKSk7aWYoMT09PWIpdGhyb3cgYz1wayxLayhhLDApLENrKGEsZCksRGsoYSxCKCkpLGM7aWYoNj09PWIpQ2soYSxkKTtcbmVsc2V7ZT1hLmN1cnJlbnQuYWx0ZXJuYXRlO2lmKDA9PT0oZCYzMCkmJiFPayhlKSYmKGI9SWsoYSxkKSwyPT09YiYmKGY9eGMoYSksMCE9PWYmJihkPWYsYj1OayhhLGYpKSksMT09PWIpKXRocm93IGM9cGssS2soYSwwKSxDayhhLGQpLERrKGEsQigpKSxjO2EuZmluaXNoZWRXb3JrPWU7YS5maW5pc2hlZExhbmVzPWQ7c3dpdGNoKGIpe2Nhc2UgMDpjYXNlIDE6dGhyb3cgRXJyb3IocCgzNDUpKTtjYXNlIDI6UGsoYSx0ayx1ayk7YnJlYWs7Y2FzZSAzOkNrKGEsZCk7aWYoKGQmMTMwMDIzNDI0KT09PWQmJihiPWZrKzUwMC1CKCksMTA8Yikpe2lmKDAhPT11YyhhLDApKWJyZWFrO2U9YS5zdXNwZW5kZWRMYW5lcztpZigoZSZkKSE9PWQpe1IoKTthLnBpbmdlZExhbmVzfD1hLnN1c3BlbmRlZExhbmVzJmU7YnJlYWt9YS50aW1lb3V0SGFuZGxlPUZmKFBrLmJpbmQobnVsbCxhLHRrLHVrKSxiKTticmVha31QayhhLHRrLHVrKTticmVhaztjYXNlIDQ6Q2soYSxkKTtpZigoZCY0MTk0MjQwKT09PVxuZClicmVhaztiPWEuZXZlbnRUaW1lcztmb3IoZT0tMTswPGQ7KXt2YXIgZz0zMS1vYyhkKTtmPTE8PGc7Zz1iW2ddO2c+ZSYmKGU9Zyk7ZCY9fmZ9ZD1lO2Q9QigpLWQ7ZD0oMTIwPmQ/MTIwOjQ4MD5kPzQ4MDoxMDgwPmQ/MTA4MDoxOTIwPmQ/MTkyMDozRTM+ZD8zRTM6NDMyMD5kPzQzMjA6MTk2MCpsayhkLzE5NjApKS1kO2lmKDEwPGQpe2EudGltZW91dEhhbmRsZT1GZihQay5iaW5kKG51bGwsYSx0ayx1ayksZCk7YnJlYWt9UGsoYSx0ayx1ayk7YnJlYWs7Y2FzZSA1OlBrKGEsdGssdWspO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IocCgzMjkpKTt9fX1EayhhLEIoKSk7cmV0dXJuIGEuY2FsbGJhY2tOb2RlPT09Yz9Hay5iaW5kKG51bGwsYSk6bnVsbH1cbmZ1bmN0aW9uIE5rKGEsYil7dmFyIGM9c2s7YS5jdXJyZW50Lm1lbW9pemVkU3RhdGUuaXNEZWh5ZHJhdGVkJiYoS2soYSxiKS5mbGFnc3w9MjU2KTthPUlrKGEsYik7MiE9PWEmJihiPXRrLHRrPWMsbnVsbCE9PWImJkZqKGIpKTtyZXR1cm4gYX1mdW5jdGlvbiBGaihhKXtudWxsPT09dGs/dGs9YTp0ay5wdXNoLmFwcGx5KHRrLGEpfVxuZnVuY3Rpb24gT2soYSl7Zm9yKHZhciBiPWE7Oyl7aWYoYi5mbGFncyYxNjM4NCl7dmFyIGM9Yi51cGRhdGVRdWV1ZTtpZihudWxsIT09YyYmKGM9Yy5zdG9yZXMsbnVsbCE9PWMpKWZvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdLGY9ZS5nZXRTbmFwc2hvdDtlPWUudmFsdWU7dHJ5e2lmKCFIZShmKCksZSkpcmV0dXJuITF9Y2F0Y2goZyl7cmV0dXJuITF9fX1jPWIuY2hpbGQ7aWYoYi5zdWJ0cmVlRmxhZ3MmMTYzODQmJm51bGwhPT1jKWMucmV0dXJuPWIsYj1jO2Vsc2V7aWYoYj09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yi5zaWJsaW5nOyl7aWYobnVsbD09PWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuITA7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfX1yZXR1cm4hMH1cbmZ1bmN0aW9uIENrKGEsYil7YiY9fnJrO2ImPX5xazthLnN1c3BlbmRlZExhbmVzfD1iO2EucGluZ2VkTGFuZXMmPX5iO2ZvcihhPWEuZXhwaXJhdGlvblRpbWVzOzA8Yjspe3ZhciBjPTMxLW9jKGIpLGQ9MTw8YzthW2NdPS0xO2ImPX5kfX1mdW5jdGlvbiBFayhhKXtpZigwIT09KEsmNikpdGhyb3cgRXJyb3IocCgzMjcpKTtIaygpO3ZhciBiPXVjKGEsMCk7aWYoMD09PShiJjEpKXJldHVybiBEayhhLEIoKSksbnVsbDt2YXIgYz1JayhhLGIpO2lmKDAhPT1hLnRhZyYmMj09PWMpe3ZhciBkPXhjKGEpOzAhPT1kJiYoYj1kLGM9TmsoYSxkKSl9aWYoMT09PWMpdGhyb3cgYz1wayxLayhhLDApLENrKGEsYiksRGsoYSxCKCkpLGM7aWYoNj09PWMpdGhyb3cgRXJyb3IocCgzNDUpKTthLmZpbmlzaGVkV29yaz1hLmN1cnJlbnQuYWx0ZXJuYXRlO2EuZmluaXNoZWRMYW5lcz1iO1BrKGEsdGssdWspO0RrKGEsQigpKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIFFrKGEsYil7dmFyIGM9SztLfD0xO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e0s9YywwPT09SyYmKEdqPUIoKSs1MDAsZmcmJmpnKCkpfX1mdW5jdGlvbiBSayhhKXtudWxsIT09d2smJjA9PT13ay50YWcmJjA9PT0oSyY2KSYmSGsoKTt2YXIgYj1LO0t8PTE7dmFyIGM9b2sudHJhbnNpdGlvbixkPUM7dHJ5e2lmKG9rLnRyYW5zaXRpb249bnVsbCxDPTEsYSlyZXR1cm4gYSgpfWZpbmFsbHl7Qz1kLG9rLnRyYW5zaXRpb249YyxLPWIsMD09PShLJjYpJiZqZygpfX1mdW5jdGlvbiBIaigpe2ZqPWVqLmN1cnJlbnQ7RShlail9XG5mdW5jdGlvbiBLayhhLGIpe2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7dmFyIGM9YS50aW1lb3V0SGFuZGxlOy0xIT09YyYmKGEudGltZW91dEhhbmRsZT0tMSxHZihjKSk7aWYobnVsbCE9PVkpZm9yKGM9WS5yZXR1cm47bnVsbCE9PWM7KXt2YXIgZD1jO3dnKGQpO3N3aXRjaChkLnRhZyl7Y2FzZSAxOmQ9ZC50eXBlLmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1kJiZ2b2lkIDAhPT1kJiYkZigpO2JyZWFrO2Nhc2UgMzp6aCgpO0UoV2YpO0UoSCk7RWgoKTticmVhaztjYXNlIDU6QmgoZCk7YnJlYWs7Y2FzZSA0OnpoKCk7YnJlYWs7Y2FzZSAxMzpFKEwpO2JyZWFrO2Nhc2UgMTk6RShMKTticmVhaztjYXNlIDEwOmFoKGQudHlwZS5fY29udGV4dCk7YnJlYWs7Y2FzZSAyMjpjYXNlIDIzOkhqKCl9Yz1jLnJldHVybn1RPWE7WT1hPVBnKGEuY3VycmVudCxudWxsKTtaPWZqPWI7VD0wO3BrPW51bGw7cms9cWs9cmg9MDt0az1zaz1udWxsO2lmKG51bGwhPT1maCl7Zm9yKGI9XG4wO2I8ZmgubGVuZ3RoO2IrKylpZihjPWZoW2JdLGQ9Yy5pbnRlcmxlYXZlZCxudWxsIT09ZCl7Yy5pbnRlcmxlYXZlZD1udWxsO3ZhciBlPWQubmV4dCxmPWMucGVuZGluZztpZihudWxsIT09Zil7dmFyIGc9Zi5uZXh0O2YubmV4dD1lO2QubmV4dD1nfWMucGVuZGluZz1kfWZoPW51bGx9cmV0dXJuIGF9XG5mdW5jdGlvbiBNayhhLGIpe2Rve3ZhciBjPVk7dHJ5eyRnKCk7RmguY3VycmVudD1SaDtpZihJaCl7Zm9yKHZhciBkPU0ubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZDspe3ZhciBlPWQucXVldWU7bnVsbCE9PWUmJihlLnBlbmRpbmc9bnVsbCk7ZD1kLm5leHR9SWg9ITF9SGg9MDtPPU49TT1udWxsO0poPSExO0toPTA7bmsuY3VycmVudD1udWxsO2lmKG51bGw9PT1jfHxudWxsPT09Yy5yZXR1cm4pe1Q9MTtwaz1iO1k9bnVsbDticmVha31hOnt2YXIgZj1hLGc9Yy5yZXR1cm4saD1jLGs9YjtiPVo7aC5mbGFnc3w9MzI3Njg7aWYobnVsbCE9PWsmJlwib2JqZWN0XCI9PT10eXBlb2YgayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGsudGhlbil7dmFyIGw9ayxtPWgscT1tLnRhZztpZigwPT09KG0ubW9kZSYxKSYmKDA9PT1xfHwxMT09PXF8fDE1PT09cSkpe3ZhciByPW0uYWx0ZXJuYXRlO3I/KG0udXBkYXRlUXVldWU9ci51cGRhdGVRdWV1ZSxtLm1lbW9pemVkU3RhdGU9ci5tZW1vaXplZFN0YXRlLFxubS5sYW5lcz1yLmxhbmVzKToobS51cGRhdGVRdWV1ZT1udWxsLG0ubWVtb2l6ZWRTdGF0ZT1udWxsKX12YXIgeT1VaShnKTtpZihudWxsIT09eSl7eS5mbGFncyY9LTI1NztWaSh5LGcsaCxmLGIpO3kubW9kZSYxJiZTaShmLGwsYik7Yj15O2s9bDt2YXIgbj1iLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT1uKXt2YXIgdD1uZXcgU2V0O3QuYWRkKGspO2IudXBkYXRlUXVldWU9dH1lbHNlIG4uYWRkKGspO2JyZWFrIGF9ZWxzZXtpZigwPT09KGImMSkpe1NpKGYsbCxiKTt0aigpO2JyZWFrIGF9az1FcnJvcihwKDQyNikpfX1lbHNlIGlmKEkmJmgubW9kZSYxKXt2YXIgSj1VaShnKTtpZihudWxsIT09Sil7MD09PShKLmZsYWdzJjY1NTM2KSYmKEouZmxhZ3N8PTI1Nik7VmkoSixnLGgsZixiKTtKZyhKaShrLGgpKTticmVhayBhfX1mPWs9SmkoayxoKTs0IT09VCYmKFQ9Mik7bnVsbD09PXNrP3NrPVtmXTpzay5wdXNoKGYpO2Y9Zztkb3tzd2l0Y2goZi50YWcpe2Nhc2UgMzpmLmZsYWdzfD02NTUzNjtcbmImPS1iO2YubGFuZXN8PWI7dmFyIHg9TmkoZixrLGIpO3BoKGYseCk7YnJlYWsgYTtjYXNlIDE6aD1rO3ZhciB3PWYudHlwZSx1PWYuc3RhdGVOb2RlO2lmKDA9PT0oZi5mbGFncyYxMjgpJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHcuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxudWxsIT09dSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIHUuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09Uml8fCFSaS5oYXModSkpKSl7Zi5mbGFnc3w9NjU1MzY7YiY9LWI7Zi5sYW5lc3w9Yjt2YXIgRj1RaShmLGgsYik7cGgoZixGKTticmVhayBhfX1mPWYucmV0dXJufXdoaWxlKG51bGwhPT1mKX1TayhjKX1jYXRjaChuYSl7Yj1uYTtZPT09YyYmbnVsbCE9PWMmJihZPWM9Yy5yZXR1cm4pO2NvbnRpbnVlfWJyZWFrfXdoaWxlKDEpfWZ1bmN0aW9uIEprKCl7dmFyIGE9bWsuY3VycmVudDttay5jdXJyZW50PVJoO3JldHVybiBudWxsPT09YT9SaDphfVxuZnVuY3Rpb24gdGooKXtpZigwPT09VHx8Mz09PVR8fDI9PT1UKVQ9NDtudWxsPT09UXx8MD09PShyaCYyNjg0MzU0NTUpJiYwPT09KHFrJjI2ODQzNTQ1NSl8fENrKFEsWil9ZnVuY3Rpb24gSWsoYSxiKXt2YXIgYz1LO0t8PTI7dmFyIGQ9SmsoKTtpZihRIT09YXx8WiE9PWIpdWs9bnVsbCxLayhhLGIpO2RvIHRyeXtUaygpO2JyZWFrfWNhdGNoKGUpe01rKGEsZSl9d2hpbGUoMSk7JGcoKTtLPWM7bWsuY3VycmVudD1kO2lmKG51bGwhPT1ZKXRocm93IEVycm9yKHAoMjYxKSk7UT1udWxsO1o9MDtyZXR1cm4gVH1mdW5jdGlvbiBUaygpe2Zvcig7bnVsbCE9PVk7KVVrKFkpfWZ1bmN0aW9uIExrKCl7Zm9yKDtudWxsIT09WSYmIWNjKCk7KVVrKFkpfWZ1bmN0aW9uIFVrKGEpe3ZhciBiPVZrKGEuYWx0ZXJuYXRlLGEsZmopO2EubWVtb2l6ZWRQcm9wcz1hLnBlbmRpbmdQcm9wcztudWxsPT09Yj9TayhhKTpZPWI7bmsuY3VycmVudD1udWxsfVxuZnVuY3Rpb24gU2soYSl7dmFyIGI9YTtkb3t2YXIgYz1iLmFsdGVybmF0ZTthPWIucmV0dXJuO2lmKDA9PT0oYi5mbGFncyYzMjc2OCkpe2lmKGM9RWooYyxiLGZqKSxudWxsIT09Yyl7WT1jO3JldHVybn19ZWxzZXtjPUlqKGMsYik7aWYobnVsbCE9PWMpe2MuZmxhZ3MmPTMyNzY3O1k9YztyZXR1cm59aWYobnVsbCE9PWEpYS5mbGFnc3w9MzI3NjgsYS5zdWJ0cmVlRmxhZ3M9MCxhLmRlbGV0aW9ucz1udWxsO2Vsc2V7VD02O1k9bnVsbDtyZXR1cm59fWI9Yi5zaWJsaW5nO2lmKG51bGwhPT1iKXtZPWI7cmV0dXJufVk9Yj1hfXdoaWxlKG51bGwhPT1iKTswPT09VCYmKFQ9NSl9ZnVuY3Rpb24gUGsoYSxiLGMpe3ZhciBkPUMsZT1vay50cmFuc2l0aW9uO3RyeXtvay50cmFuc2l0aW9uPW51bGwsQz0xLFdrKGEsYixjLGQpfWZpbmFsbHl7b2sudHJhbnNpdGlvbj1lLEM9ZH1yZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIFdrKGEsYixjLGQpe2RvIEhrKCk7d2hpbGUobnVsbCE9PXdrKTtpZigwIT09KEsmNikpdGhyb3cgRXJyb3IocCgzMjcpKTtjPWEuZmluaXNoZWRXb3JrO3ZhciBlPWEuZmluaXNoZWRMYW5lcztpZihudWxsPT09YylyZXR1cm4gbnVsbDthLmZpbmlzaGVkV29yaz1udWxsO2EuZmluaXNoZWRMYW5lcz0wO2lmKGM9PT1hLmN1cnJlbnQpdGhyb3cgRXJyb3IocCgxNzcpKTthLmNhbGxiYWNrTm9kZT1udWxsO2EuY2FsbGJhY2tQcmlvcml0eT0wO3ZhciBmPWMubGFuZXN8Yy5jaGlsZExhbmVzO0JjKGEsZik7YT09PVEmJihZPVE9bnVsbCxaPTApOzA9PT0oYy5zdWJ0cmVlRmxhZ3MmMjA2NCkmJjA9PT0oYy5mbGFncyYyMDY0KXx8dmt8fCh2az0hMCxGayhoYyxmdW5jdGlvbigpe0hrKCk7cmV0dXJuIG51bGx9KSk7Zj0wIT09KGMuZmxhZ3MmMTU5OTApO2lmKDAhPT0oYy5zdWJ0cmVlRmxhZ3MmMTU5OTApfHxmKXtmPW9rLnRyYW5zaXRpb247b2sudHJhbnNpdGlvbj1udWxsO1xudmFyIGc9QztDPTE7dmFyIGg9SztLfD00O25rLmN1cnJlbnQ9bnVsbDtPaihhLGMpO2RrKGMsYSk7T2UoRGYpO2RkPSEhQ2Y7RGY9Q2Y9bnVsbDthLmN1cnJlbnQ9YztoayhjLGEsZSk7ZGMoKTtLPWg7Qz1nO29rLnRyYW5zaXRpb249Zn1lbHNlIGEuY3VycmVudD1jO3ZrJiYodms9ITEsd2s9YSx4az1lKTtmPWEucGVuZGluZ0xhbmVzOzA9PT1mJiYoUmk9bnVsbCk7bWMoYy5zdGF0ZU5vZGUsZCk7RGsoYSxCKCkpO2lmKG51bGwhPT1iKWZvcihkPWEub25SZWNvdmVyYWJsZUVycm9yLGM9MDtjPGIubGVuZ3RoO2MrKyllPWJbY10sZChlLnZhbHVlLHtjb21wb25lbnRTdGFjazplLnN0YWNrLGRpZ2VzdDplLmRpZ2VzdH0pO2lmKE9pKXRocm93IE9pPSExLGE9UGksUGk9bnVsbCxhOzAhPT0oeGsmMSkmJjAhPT1hLnRhZyYmSGsoKTtmPWEucGVuZGluZ0xhbmVzOzAhPT0oZiYxKT9hPT09ems/eWsrKzooeWs9MCx6az1hKTp5az0wO2pnKCk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBIaygpe2lmKG51bGwhPT13ayl7dmFyIGE9RGMoeGspLGI9b2sudHJhbnNpdGlvbixjPUM7dHJ5e29rLnRyYW5zaXRpb249bnVsbDtDPTE2PmE/MTY6YTtpZihudWxsPT09d2spdmFyIGQ9ITE7ZWxzZXthPXdrO3drPW51bGw7eGs9MDtpZigwIT09KEsmNikpdGhyb3cgRXJyb3IocCgzMzEpKTt2YXIgZT1LO0t8PTQ7Zm9yKFY9YS5jdXJyZW50O251bGwhPT1WOyl7dmFyIGY9VixnPWYuY2hpbGQ7aWYoMCE9PShWLmZsYWdzJjE2KSl7dmFyIGg9Zi5kZWxldGlvbnM7aWYobnVsbCE9PWgpe2Zvcih2YXIgaz0wO2s8aC5sZW5ndGg7aysrKXt2YXIgbD1oW2tdO2ZvcihWPWw7bnVsbCE9PVY7KXt2YXIgbT1WO3N3aXRjaChtLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpQaig4LG0sZil9dmFyIHE9bS5jaGlsZDtpZihudWxsIT09cSlxLnJldHVybj1tLFY9cTtlbHNlIGZvcig7bnVsbCE9PVY7KXttPVY7dmFyIHI9bS5zaWJsaW5nLHk9bS5yZXR1cm47U2oobSk7aWYobT09PVxubCl7Vj1udWxsO2JyZWFrfWlmKG51bGwhPT1yKXtyLnJldHVybj15O1Y9cjticmVha31WPXl9fX12YXIgbj1mLmFsdGVybmF0ZTtpZihudWxsIT09bil7dmFyIHQ9bi5jaGlsZDtpZihudWxsIT09dCl7bi5jaGlsZD1udWxsO2Rve3ZhciBKPXQuc2libGluZzt0LnNpYmxpbmc9bnVsbDt0PUp9d2hpbGUobnVsbCE9PXQpfX1WPWZ9fWlmKDAhPT0oZi5zdWJ0cmVlRmxhZ3MmMjA2NCkmJm51bGwhPT1nKWcucmV0dXJuPWYsVj1nO2Vsc2UgYjpmb3IoO251bGwhPT1WOyl7Zj1WO2lmKDAhPT0oZi5mbGFncyYyMDQ4KSlzd2l0Y2goZi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6UGooOSxmLGYucmV0dXJuKX12YXIgeD1mLnNpYmxpbmc7aWYobnVsbCE9PXgpe3gucmV0dXJuPWYucmV0dXJuO1Y9eDticmVhayBifVY9Zi5yZXR1cm59fXZhciB3PWEuY3VycmVudDtmb3IoVj13O251bGwhPT1WOyl7Zz1WO3ZhciB1PWcuY2hpbGQ7aWYoMCE9PShnLnN1YnRyZWVGbGFncyYyMDY0KSYmbnVsbCE9PVxudSl1LnJldHVybj1nLFY9dTtlbHNlIGI6Zm9yKGc9dztudWxsIT09Vjspe2g9VjtpZigwIT09KGguZmxhZ3MmMjA0OCkpdHJ5e3N3aXRjaChoLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpRaig5LGgpfX1jYXRjaChuYSl7VyhoLGgucmV0dXJuLG5hKX1pZihoPT09Zyl7Vj1udWxsO2JyZWFrIGJ9dmFyIEY9aC5zaWJsaW5nO2lmKG51bGwhPT1GKXtGLnJldHVybj1oLnJldHVybjtWPUY7YnJlYWsgYn1WPWgucmV0dXJufX1LPWU7amcoKTtpZihsYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGxjLm9uUG9zdENvbW1pdEZpYmVyUm9vdCl0cnl7bGMub25Qb3N0Q29tbWl0RmliZXJSb290KGtjLGEpfWNhdGNoKG5hKXt9ZD0hMH1yZXR1cm4gZH1maW5hbGx5e0M9Yyxvay50cmFuc2l0aW9uPWJ9fXJldHVybiExfWZ1bmN0aW9uIFhrKGEsYixjKXtiPUppKGMsYik7Yj1OaShhLGIsMSk7YT1uaChhLGIsMSk7Yj1SKCk7bnVsbCE9PWEmJihBYyhhLDEsYiksRGsoYSxiKSl9XG5mdW5jdGlvbiBXKGEsYixjKXtpZigzPT09YS50YWcpWGsoYSxhLGMpO2Vsc2UgZm9yKDtudWxsIT09Yjspe2lmKDM9PT1iLnRhZyl7WGsoYixhLGMpO2JyZWFrfWVsc2UgaWYoMT09PWIudGFnKXt2YXIgZD1iLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09Uml8fCFSaS5oYXMoZCkpKXthPUppKGMsYSk7YT1RaShiLGEsMSk7Yj1uaChiLGEsMSk7YT1SKCk7bnVsbCE9PWImJihBYyhiLDEsYSksRGsoYixhKSk7YnJlYWt9fWI9Yi5yZXR1cm59fVxuZnVuY3Rpb24gVGkoYSxiLGMpe3ZhciBkPWEucGluZ0NhY2hlO251bGwhPT1kJiZkLmRlbGV0ZShiKTtiPVIoKTthLnBpbmdlZExhbmVzfD1hLnN1c3BlbmRlZExhbmVzJmM7UT09PWEmJihaJmMpPT09YyYmKDQ9PT1UfHwzPT09VCYmKFomMTMwMDIzNDI0KT09PVomJjUwMD5CKCktZms/S2soYSwwKTpya3w9Yyk7RGsoYSxiKX1mdW5jdGlvbiBZayhhLGIpezA9PT1iJiYoMD09PShhLm1vZGUmMSk/Yj0xOihiPXNjLHNjPDw9MSwwPT09KHNjJjEzMDAyMzQyNCkmJihzYz00MTk0MzA0KSkpO3ZhciBjPVIoKTthPWloKGEsYik7bnVsbCE9PWEmJihBYyhhLGIsYyksRGsoYSxjKSl9ZnVuY3Rpb24gdWooYSl7dmFyIGI9YS5tZW1vaXplZFN0YXRlLGM9MDtudWxsIT09YiYmKGM9Yi5yZXRyeUxhbmUpO1lrKGEsYyl9XG5mdW5jdGlvbiBiayhhLGIpe3ZhciBjPTA7c3dpdGNoKGEudGFnKXtjYXNlIDEzOnZhciBkPWEuc3RhdGVOb2RlO3ZhciBlPWEubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZSYmKGM9ZS5yZXRyeUxhbmUpO2JyZWFrO2Nhc2UgMTk6ZD1hLnN0YXRlTm9kZTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHAoMzE0KSk7fW51bGwhPT1kJiZkLmRlbGV0ZShiKTtZayhhLGMpfXZhciBWaztcblZrPWZ1bmN0aW9uKGEsYixjKXtpZihudWxsIT09YSlpZihhLm1lbW9pemVkUHJvcHMhPT1iLnBlbmRpbmdQcm9wc3x8V2YuY3VycmVudClkaD0hMDtlbHNle2lmKDA9PT0oYS5sYW5lcyZjKSYmMD09PShiLmZsYWdzJjEyOCkpcmV0dXJuIGRoPSExLHlqKGEsYixjKTtkaD0wIT09KGEuZmxhZ3MmMTMxMDcyKT8hMDohMX1lbHNlIGRoPSExLEkmJjAhPT0oYi5mbGFncyYxMDQ4NTc2KSYmdWcoYixuZyxiLmluZGV4KTtiLmxhbmVzPTA7c3dpdGNoKGIudGFnKXtjYXNlIDI6dmFyIGQ9Yi50eXBlO2lqKGEsYik7YT1iLnBlbmRpbmdQcm9wczt2YXIgZT1ZZihiLEguY3VycmVudCk7Y2goYixjKTtlPU5oKG51bGwsYixkLGEsZSxjKTt2YXIgZj1TaCgpO2IuZmxhZ3N8PTE7XCJvYmplY3RcIj09PXR5cGVvZiBlJiZudWxsIT09ZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGUucmVuZGVyJiZ2b2lkIDA9PT1lLiQkdHlwZW9mPyhiLnRhZz0xLGIubWVtb2l6ZWRTdGF0ZT1udWxsLGIudXBkYXRlUXVldWU9XG5udWxsLFpmKGQpPyhmPSEwLGNnKGIpKTpmPSExLGIubWVtb2l6ZWRTdGF0ZT1udWxsIT09ZS5zdGF0ZSYmdm9pZCAwIT09ZS5zdGF0ZT9lLnN0YXRlOm51bGwsa2goYiksZS51cGRhdGVyPUVpLGIuc3RhdGVOb2RlPWUsZS5fcmVhY3RJbnRlcm5hbHM9YixJaShiLGQsYSxjKSxiPWpqKG51bGwsYixkLCEwLGYsYykpOihiLnRhZz0wLEkmJmYmJnZnKGIpLFhpKG51bGwsYixlLGMpLGI9Yi5jaGlsZCk7cmV0dXJuIGI7Y2FzZSAxNjpkPWIuZWxlbWVudFR5cGU7YTp7aWooYSxiKTthPWIucGVuZGluZ1Byb3BzO2U9ZC5faW5pdDtkPWUoZC5fcGF5bG9hZCk7Yi50eXBlPWQ7ZT1iLnRhZz1aayhkKTthPUNpKGQsYSk7c3dpdGNoKGUpe2Nhc2UgMDpiPWNqKG51bGwsYixkLGEsYyk7YnJlYWsgYTtjYXNlIDE6Yj1oaihudWxsLGIsZCxhLGMpO2JyZWFrIGE7Y2FzZSAxMTpiPVlpKG51bGwsYixkLGEsYyk7YnJlYWsgYTtjYXNlIDE0OmI9JGkobnVsbCxiLGQsQ2koZC50eXBlLGEpLGMpO2JyZWFrIGF9dGhyb3cgRXJyb3IocCgzMDYsXG5kLFwiXCIpKTt9cmV0dXJuIGI7Y2FzZSAwOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpDaShkLGUpLGNqKGEsYixkLGUsYyk7Y2FzZSAxOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpDaShkLGUpLGhqKGEsYixkLGUsYyk7Y2FzZSAzOmE6e2tqKGIpO2lmKG51bGw9PT1hKXRocm93IEVycm9yKHAoMzg3KSk7ZD1iLnBlbmRpbmdQcm9wcztmPWIubWVtb2l6ZWRTdGF0ZTtlPWYuZWxlbWVudDtsaChhLGIpO3FoKGIsZCxudWxsLGMpO3ZhciBnPWIubWVtb2l6ZWRTdGF0ZTtkPWcuZWxlbWVudDtpZihmLmlzRGVoeWRyYXRlZClpZihmPXtlbGVtZW50OmQsaXNEZWh5ZHJhdGVkOiExLGNhY2hlOmcuY2FjaGUscGVuZGluZ1N1c3BlbnNlQm91bmRhcmllczpnLnBlbmRpbmdTdXNwZW5zZUJvdW5kYXJpZXMsdHJhbnNpdGlvbnM6Zy50cmFuc2l0aW9uc30sYi51cGRhdGVRdWV1ZS5iYXNlU3RhdGU9XG5mLGIubWVtb2l6ZWRTdGF0ZT1mLGIuZmxhZ3MmMjU2KXtlPUppKEVycm9yKHAoNDIzKSksYik7Yj1saihhLGIsZCxjLGUpO2JyZWFrIGF9ZWxzZSBpZihkIT09ZSl7ZT1KaShFcnJvcihwKDQyNCkpLGIpO2I9bGooYSxiLGQsYyxlKTticmVhayBhfWVsc2UgZm9yKHlnPUxmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8uZmlyc3RDaGlsZCkseGc9YixJPSEwLHpnPW51bGwsYz1WZyhiLG51bGwsZCxjKSxiLmNoaWxkPWM7YzspYy5mbGFncz1jLmZsYWdzJi0zfDQwOTYsYz1jLnNpYmxpbmc7ZWxzZXtJZygpO2lmKGQ9PT1lKXtiPVppKGEsYixjKTticmVhayBhfVhpKGEsYixkLGMpfWI9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDU6cmV0dXJuIEFoKGIpLG51bGw9PT1hJiZFZyhiKSxkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGY9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOm51bGwsZz1lLmNoaWxkcmVuLEVmKGQsZSk/Zz1udWxsOm51bGwhPT1mJiZFZihkLGYpJiYoYi5mbGFnc3w9MzIpLFxuZ2ooYSxiKSxYaShhLGIsZyxjKSxiLmNoaWxkO2Nhc2UgNjpyZXR1cm4gbnVsbD09PWEmJkVnKGIpLG51bGw7Y2FzZSAxMzpyZXR1cm4gb2ooYSxiLGMpO2Nhc2UgNDpyZXR1cm4geWgoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxkPWIucGVuZGluZ1Byb3BzLG51bGw9PT1hP2IuY2hpbGQ9VWcoYixudWxsLGQsYyk6WGkoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDExOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpDaShkLGUpLFlpKGEsYixkLGUsYyk7Y2FzZSA3OnJldHVybiBYaShhLGIsYi5wZW5kaW5nUHJvcHMsYyksYi5jaGlsZDtjYXNlIDg6cmV0dXJuIFhpKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixjKSxiLmNoaWxkO2Nhc2UgMTI6cmV0dXJuIFhpKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixjKSxiLmNoaWxkO2Nhc2UgMTA6YTp7ZD1iLnR5cGUuX2NvbnRleHQ7ZT1iLnBlbmRpbmdQcm9wcztmPWIubWVtb2l6ZWRQcm9wcztcbmc9ZS52YWx1ZTtHKFdnLGQuX2N1cnJlbnRWYWx1ZSk7ZC5fY3VycmVudFZhbHVlPWc7aWYobnVsbCE9PWYpaWYoSGUoZi52YWx1ZSxnKSl7aWYoZi5jaGlsZHJlbj09PWUuY2hpbGRyZW4mJiFXZi5jdXJyZW50KXtiPVppKGEsYixjKTticmVhayBhfX1lbHNlIGZvcihmPWIuY2hpbGQsbnVsbCE9PWYmJihmLnJldHVybj1iKTtudWxsIT09Zjspe3ZhciBoPWYuZGVwZW5kZW5jaWVzO2lmKG51bGwhPT1oKXtnPWYuY2hpbGQ7Zm9yKHZhciBrPWguZmlyc3RDb250ZXh0O251bGwhPT1rOyl7aWYoay5jb250ZXh0PT09ZCl7aWYoMT09PWYudGFnKXtrPW1oKC0xLGMmLWMpO2sudGFnPTI7dmFyIGw9Zi51cGRhdGVRdWV1ZTtpZihudWxsIT09bCl7bD1sLnNoYXJlZDt2YXIgbT1sLnBlbmRpbmc7bnVsbD09PW0/ay5uZXh0PWs6KGsubmV4dD1tLm5leHQsbS5uZXh0PWspO2wucGVuZGluZz1rfX1mLmxhbmVzfD1jO2s9Zi5hbHRlcm5hdGU7bnVsbCE9PWsmJihrLmxhbmVzfD1jKTtiaChmLnJldHVybixcbmMsYik7aC5sYW5lc3w9YzticmVha31rPWsubmV4dH19ZWxzZSBpZigxMD09PWYudGFnKWc9Zi50eXBlPT09Yi50eXBlP251bGw6Zi5jaGlsZDtlbHNlIGlmKDE4PT09Zi50YWcpe2c9Zi5yZXR1cm47aWYobnVsbD09PWcpdGhyb3cgRXJyb3IocCgzNDEpKTtnLmxhbmVzfD1jO2g9Zy5hbHRlcm5hdGU7bnVsbCE9PWgmJihoLmxhbmVzfD1jKTtiaChnLGMsYik7Zz1mLnNpYmxpbmd9ZWxzZSBnPWYuY2hpbGQ7aWYobnVsbCE9PWcpZy5yZXR1cm49ZjtlbHNlIGZvcihnPWY7bnVsbCE9PWc7KXtpZihnPT09Yil7Zz1udWxsO2JyZWFrfWY9Zy5zaWJsaW5nO2lmKG51bGwhPT1mKXtmLnJldHVybj1nLnJldHVybjtnPWY7YnJlYWt9Zz1nLnJldHVybn1mPWd9WGkoYSxiLGUuY2hpbGRyZW4sYyk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgOTpyZXR1cm4gZT1iLnR5cGUsZD1iLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixjaChiLGMpLGU9ZWgoZSksZD1kKGUpLGIuZmxhZ3N8PTEsWGkoYSxiLGQsYyksXG5iLmNoaWxkO2Nhc2UgMTQ6cmV0dXJuIGQ9Yi50eXBlLGU9Q2koZCxiLnBlbmRpbmdQcm9wcyksZT1DaShkLnR5cGUsZSksJGkoYSxiLGQsZSxjKTtjYXNlIDE1OnJldHVybiBiaihhLGIsYi50eXBlLGIucGVuZGluZ1Byb3BzLGMpO2Nhc2UgMTc6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkNpKGQsZSksaWooYSxiKSxiLnRhZz0xLFpmKGQpPyhhPSEwLGNnKGIpKTphPSExLGNoKGIsYyksR2koYixkLGUpLElpKGIsZCxlLGMpLGpqKG51bGwsYixkLCEwLGEsYyk7Y2FzZSAxOTpyZXR1cm4geGooYSxiLGMpO2Nhc2UgMjI6cmV0dXJuIGRqKGEsYixjKX10aHJvdyBFcnJvcihwKDE1NixiLnRhZykpO307ZnVuY3Rpb24gRmsoYSxiKXtyZXR1cm4gYWMoYSxiKX1cbmZ1bmN0aW9uICRrKGEsYixjLGQpe3RoaXMudGFnPWE7dGhpcy5rZXk9Yzt0aGlzLnNpYmxpbmc9dGhpcy5jaGlsZD10aGlzLnJldHVybj10aGlzLnN0YXRlTm9kZT10aGlzLnR5cGU9dGhpcy5lbGVtZW50VHlwZT1udWxsO3RoaXMuaW5kZXg9MDt0aGlzLnJlZj1udWxsO3RoaXMucGVuZGluZ1Byb3BzPWI7dGhpcy5kZXBlbmRlbmNpZXM9dGhpcy5tZW1vaXplZFN0YXRlPXRoaXMudXBkYXRlUXVldWU9dGhpcy5tZW1vaXplZFByb3BzPW51bGw7dGhpcy5tb2RlPWQ7dGhpcy5zdWJ0cmVlRmxhZ3M9dGhpcy5mbGFncz0wO3RoaXMuZGVsZXRpb25zPW51bGw7dGhpcy5jaGlsZExhbmVzPXRoaXMubGFuZXM9MDt0aGlzLmFsdGVybmF0ZT1udWxsfWZ1bmN0aW9uIEJnKGEsYixjLGQpe3JldHVybiBuZXcgJGsoYSxiLGMsZCl9ZnVuY3Rpb24gYWooYSl7YT1hLnByb3RvdHlwZTtyZXR1cm4hKCFhfHwhYS5pc1JlYWN0Q29tcG9uZW50KX1cbmZ1bmN0aW9uIFprKGEpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBhaihhKT8xOjA7aWYodm9pZCAwIT09YSYmbnVsbCE9PWEpe2E9YS4kJHR5cGVvZjtpZihhPT09RGEpcmV0dXJuIDExO2lmKGE9PT1HYSlyZXR1cm4gMTR9cmV0dXJuIDJ9XG5mdW5jdGlvbiBQZyhhLGIpe3ZhciBjPWEuYWx0ZXJuYXRlO251bGw9PT1jPyhjPUJnKGEudGFnLGIsYS5rZXksYS5tb2RlKSxjLmVsZW1lbnRUeXBlPWEuZWxlbWVudFR5cGUsYy50eXBlPWEudHlwZSxjLnN0YXRlTm9kZT1hLnN0YXRlTm9kZSxjLmFsdGVybmF0ZT1hLGEuYWx0ZXJuYXRlPWMpOihjLnBlbmRpbmdQcm9wcz1iLGMudHlwZT1hLnR5cGUsYy5mbGFncz0wLGMuc3VidHJlZUZsYWdzPTAsYy5kZWxldGlvbnM9bnVsbCk7Yy5mbGFncz1hLmZsYWdzJjE0NjgwMDY0O2MuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXM7Yy5sYW5lcz1hLmxhbmVzO2MuY2hpbGQ9YS5jaGlsZDtjLm1lbW9pemVkUHJvcHM9YS5tZW1vaXplZFByb3BzO2MubWVtb2l6ZWRTdGF0ZT1hLm1lbW9pemVkU3RhdGU7Yy51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlO2I9YS5kZXBlbmRlbmNpZXM7Yy5kZXBlbmRlbmNpZXM9bnVsbD09PWI/bnVsbDp7bGFuZXM6Yi5sYW5lcyxmaXJzdENvbnRleHQ6Yi5maXJzdENvbnRleHR9O1xuYy5zaWJsaW5nPWEuc2libGluZztjLmluZGV4PWEuaW5kZXg7Yy5yZWY9YS5yZWY7cmV0dXJuIGN9XG5mdW5jdGlvbiBSZyhhLGIsYyxkLGUsZil7dmFyIGc9MjtkPWE7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpYWooYSkmJihnPTEpO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKWc9NTtlbHNlIGE6c3dpdGNoKGEpe2Nhc2UgeWE6cmV0dXJuIFRnKGMuY2hpbGRyZW4sZSxmLGIpO2Nhc2UgemE6Zz04O2V8PTg7YnJlYWs7Y2FzZSBBYTpyZXR1cm4gYT1CZygxMixjLGIsZXwyKSxhLmVsZW1lbnRUeXBlPUFhLGEubGFuZXM9ZixhO2Nhc2UgRWE6cmV0dXJuIGE9QmcoMTMsYyxiLGUpLGEuZWxlbWVudFR5cGU9RWEsYS5sYW5lcz1mLGE7Y2FzZSBGYTpyZXR1cm4gYT1CZygxOSxjLGIsZSksYS5lbGVtZW50VHlwZT1GYSxhLmxhbmVzPWYsYTtjYXNlIElhOnJldHVybiBwaihjLGUsZixiKTtkZWZhdWx0OmlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgQmE6Zz0xMDticmVhayBhO2Nhc2UgQ2E6Zz05O2JyZWFrIGE7Y2FzZSBEYTpnPTExO1xuYnJlYWsgYTtjYXNlIEdhOmc9MTQ7YnJlYWsgYTtjYXNlIEhhOmc9MTY7ZD1udWxsO2JyZWFrIGF9dGhyb3cgRXJyb3IocCgxMzAsbnVsbD09YT9hOnR5cGVvZiBhLFwiXCIpKTt9Yj1CZyhnLGMsYixlKTtiLmVsZW1lbnRUeXBlPWE7Yi50eXBlPWQ7Yi5sYW5lcz1mO3JldHVybiBifWZ1bmN0aW9uIFRnKGEsYixjLGQpe2E9QmcoNyxhLGQsYik7YS5sYW5lcz1jO3JldHVybiBhfWZ1bmN0aW9uIHBqKGEsYixjLGQpe2E9QmcoMjIsYSxkLGIpO2EuZWxlbWVudFR5cGU9SWE7YS5sYW5lcz1jO2Euc3RhdGVOb2RlPXtpc0hpZGRlbjohMX07cmV0dXJuIGF9ZnVuY3Rpb24gUWcoYSxiLGMpe2E9QmcoNixhLG51bGwsYik7YS5sYW5lcz1jO3JldHVybiBhfVxuZnVuY3Rpb24gU2coYSxiLGMpe2I9QmcoNCxudWxsIT09YS5jaGlsZHJlbj9hLmNoaWxkcmVuOltdLGEua2V5LGIpO2IubGFuZXM9YztiLnN0YXRlTm9kZT17Y29udGFpbmVySW5mbzphLmNvbnRhaW5lckluZm8scGVuZGluZ0NoaWxkcmVuOm51bGwsaW1wbGVtZW50YXRpb246YS5pbXBsZW1lbnRhdGlvbn07cmV0dXJuIGJ9XG5mdW5jdGlvbiBhbChhLGIsYyxkLGUpe3RoaXMudGFnPWI7dGhpcy5jb250YWluZXJJbmZvPWE7dGhpcy5maW5pc2hlZFdvcms9dGhpcy5waW5nQ2FjaGU9dGhpcy5jdXJyZW50PXRoaXMucGVuZGluZ0NoaWxkcmVuPW51bGw7dGhpcy50aW1lb3V0SGFuZGxlPS0xO3RoaXMuY2FsbGJhY2tOb2RlPXRoaXMucGVuZGluZ0NvbnRleHQ9dGhpcy5jb250ZXh0PW51bGw7dGhpcy5jYWxsYmFja1ByaW9yaXR5PTA7dGhpcy5ldmVudFRpbWVzPXpjKDApO3RoaXMuZXhwaXJhdGlvblRpbWVzPXpjKC0xKTt0aGlzLmVudGFuZ2xlZExhbmVzPXRoaXMuZmluaXNoZWRMYW5lcz10aGlzLm11dGFibGVSZWFkTGFuZXM9dGhpcy5leHBpcmVkTGFuZXM9dGhpcy5waW5nZWRMYW5lcz10aGlzLnN1c3BlbmRlZExhbmVzPXRoaXMucGVuZGluZ0xhbmVzPTA7dGhpcy5lbnRhbmdsZW1lbnRzPXpjKDApO3RoaXMuaWRlbnRpZmllclByZWZpeD1kO3RoaXMub25SZWNvdmVyYWJsZUVycm9yPWU7dGhpcy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhPVxubnVsbH1mdW5jdGlvbiBibChhLGIsYyxkLGUsZixnLGgsayl7YT1uZXcgYWwoYSxiLGMsaCxrKTsxPT09Yj8oYj0xLCEwPT09ZiYmKGJ8PTgpKTpiPTA7Zj1CZygzLG51bGwsbnVsbCxiKTthLmN1cnJlbnQ9ZjtmLnN0YXRlTm9kZT1hO2YubWVtb2l6ZWRTdGF0ZT17ZWxlbWVudDpkLGlzRGVoeWRyYXRlZDpjLGNhY2hlOm51bGwsdHJhbnNpdGlvbnM6bnVsbCxwZW5kaW5nU3VzcGVuc2VCb3VuZGFyaWVzOm51bGx9O2toKGYpO3JldHVybiBhfWZ1bmN0aW9uIGNsKGEsYixjKXt2YXIgZD0zPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bnVsbDtyZXR1cm57JCR0eXBlb2Y6d2Esa2V5Om51bGw9PWQ/bnVsbDpcIlwiK2QsY2hpbGRyZW46YSxjb250YWluZXJJbmZvOmIsaW1wbGVtZW50YXRpb246Y319XG5mdW5jdGlvbiBkbChhKXtpZighYSlyZXR1cm4gVmY7YT1hLl9yZWFjdEludGVybmFsczthOntpZihWYihhKSE9PWF8fDEhPT1hLnRhZyl0aHJvdyBFcnJvcihwKDE3MCkpO3ZhciBiPWE7ZG97c3dpdGNoKGIudGFnKXtjYXNlIDM6Yj1iLnN0YXRlTm9kZS5jb250ZXh0O2JyZWFrIGE7Y2FzZSAxOmlmKFpmKGIudHlwZSkpe2I9Yi5zdGF0ZU5vZGUuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ7YnJlYWsgYX19Yj1iLnJldHVybn13aGlsZShudWxsIT09Yik7dGhyb3cgRXJyb3IocCgxNzEpKTt9aWYoMT09PWEudGFnKXt2YXIgYz1hLnR5cGU7aWYoWmYoYykpcmV0dXJuIGJnKGEsYyxiKX1yZXR1cm4gYn1cbmZ1bmN0aW9uIGVsKGEsYixjLGQsZSxmLGcsaCxrKXthPWJsKGMsZCwhMCxhLGUsZixnLGgsayk7YS5jb250ZXh0PWRsKG51bGwpO2M9YS5jdXJyZW50O2Q9UigpO2U9eWkoYyk7Zj1taChkLGUpO2YuY2FsbGJhY2s9dm9pZCAwIT09YiYmbnVsbCE9PWI/YjpudWxsO25oKGMsZixlKTthLmN1cnJlbnQubGFuZXM9ZTtBYyhhLGUsZCk7RGsoYSxkKTtyZXR1cm4gYX1mdW5jdGlvbiBmbChhLGIsYyxkKXt2YXIgZT1iLmN1cnJlbnQsZj1SKCksZz15aShlKTtjPWRsKGMpO251bGw9PT1iLmNvbnRleHQ/Yi5jb250ZXh0PWM6Yi5wZW5kaW5nQ29udGV4dD1jO2I9bWgoZixnKTtiLnBheWxvYWQ9e2VsZW1lbnQ6YX07ZD12b2lkIDA9PT1kP251bGw6ZDtudWxsIT09ZCYmKGIuY2FsbGJhY2s9ZCk7YT1uaChlLGIsZyk7bnVsbCE9PWEmJihnaShhLGUsZyxmKSxvaChhLGUsZykpO3JldHVybiBnfVxuZnVuY3Rpb24gZ2woYSl7YT1hLmN1cnJlbnQ7aWYoIWEuY2hpbGQpcmV0dXJuIG51bGw7c3dpdGNoKGEuY2hpbGQudGFnKXtjYXNlIDU6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlO2RlZmF1bHQ6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlfX1mdW5jdGlvbiBobChhLGIpe2E9YS5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1hJiZudWxsIT09YS5kZWh5ZHJhdGVkKXt2YXIgYz1hLnJldHJ5TGFuZTthLnJldHJ5TGFuZT0wIT09YyYmYzxiP2M6Yn19ZnVuY3Rpb24gaWwoYSxiKXtobChhLGIpOyhhPWEuYWx0ZXJuYXRlKSYmaGwoYSxiKX1mdW5jdGlvbiBqbCgpe3JldHVybiBudWxsfXZhciBrbD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgcmVwb3J0RXJyb3I/cmVwb3J0RXJyb3I6ZnVuY3Rpb24oYSl7Y29uc29sZS5lcnJvcihhKX07ZnVuY3Rpb24gbGwoYSl7dGhpcy5faW50ZXJuYWxSb290PWF9XG5tbC5wcm90b3R5cGUucmVuZGVyPWxsLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5faW50ZXJuYWxSb290O2lmKG51bGw9PT1iKXRocm93IEVycm9yKHAoNDA5KSk7ZmwoYSxiLG51bGwsbnVsbCl9O21sLnByb3RvdHlwZS51bm1vdW50PWxsLnByb3RvdHlwZS51bm1vdW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5faW50ZXJuYWxSb290O2lmKG51bGwhPT1hKXt0aGlzLl9pbnRlcm5hbFJvb3Q9bnVsbDt2YXIgYj1hLmNvbnRhaW5lckluZm87UmsoZnVuY3Rpb24oKXtmbChudWxsLGEsbnVsbCxudWxsKX0pO2JbdWZdPW51bGx9fTtmdW5jdGlvbiBtbChhKXt0aGlzLl9pbnRlcm5hbFJvb3Q9YX1cbm1sLnByb3RvdHlwZS51bnN0YWJsZV9zY2hlZHVsZUh5ZHJhdGlvbj1mdW5jdGlvbihhKXtpZihhKXt2YXIgYj1IYygpO2E9e2Jsb2NrZWRPbjpudWxsLHRhcmdldDphLHByaW9yaXR5OmJ9O2Zvcih2YXIgYz0wO2M8UWMubGVuZ3RoJiYwIT09YiYmYjxRY1tjXS5wcmlvcml0eTtjKyspO1FjLnNwbGljZShjLDAsYSk7MD09PWMmJlZjKGEpfX07ZnVuY3Rpb24gbmwoYSl7cmV0dXJuISghYXx8MSE9PWEubm9kZVR5cGUmJjkhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGUpfWZ1bmN0aW9uIG9sKGEpe3JldHVybiEoIWF8fDEhPT1hLm5vZGVUeXBlJiY5IT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlJiYoOCE9PWEubm9kZVR5cGV8fFwiIHJlYWN0LW1vdW50LXBvaW50LXVuc3RhYmxlIFwiIT09YS5ub2RlVmFsdWUpKX1mdW5jdGlvbiBwbCgpe31cbmZ1bmN0aW9uIHFsKGEsYixjLGQsZSl7aWYoZSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe3ZhciBmPWQ7ZD1mdW5jdGlvbigpe3ZhciBhPWdsKGcpO2YuY2FsbChhKX19dmFyIGc9ZWwoYixkLGEsMCxudWxsLCExLCExLFwiXCIscGwpO2EuX3JlYWN0Um9vdENvbnRhaW5lcj1nO2FbdWZdPWcuY3VycmVudDtzZig4PT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YSk7UmsoKTtyZXR1cm4gZ31mb3IoO2U9YS5sYXN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoZSk7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe3ZhciBoPWQ7ZD1mdW5jdGlvbigpe3ZhciBhPWdsKGspO2guY2FsbChhKX19dmFyIGs9YmwoYSwwLCExLG51bGwsbnVsbCwhMSwhMSxcIlwiLHBsKTthLl9yZWFjdFJvb3RDb250YWluZXI9azthW3VmXT1rLmN1cnJlbnQ7c2YoOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO1JrKGZ1bmN0aW9uKCl7ZmwoYixrLGMsZCl9KTtyZXR1cm4ga31cbmZ1bmN0aW9uIHJsKGEsYixjLGQsZSl7dmFyIGY9Yy5fcmVhY3RSb290Q29udGFpbmVyO2lmKGYpe3ZhciBnPWY7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBoPWU7ZT1mdW5jdGlvbigpe3ZhciBhPWdsKGcpO2guY2FsbChhKX19ZmwoYixnLGEsZSl9ZWxzZSBnPXFsKGMsYixhLGUsZCk7cmV0dXJuIGdsKGcpfUVjPWZ1bmN0aW9uKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSAzOnZhciBiPWEuc3RhdGVOb2RlO2lmKGIuY3VycmVudC5tZW1vaXplZFN0YXRlLmlzRGVoeWRyYXRlZCl7dmFyIGM9dGMoYi5wZW5kaW5nTGFuZXMpOzAhPT1jJiYoQ2MoYixjfDEpLERrKGIsQigpKSwwPT09KEsmNikmJihHaj1CKCkrNTAwLGpnKCkpKX1icmVhaztjYXNlIDEzOlJrKGZ1bmN0aW9uKCl7dmFyIGI9aWgoYSwxKTtpZihudWxsIT09Yil7dmFyIGM9UigpO2dpKGIsYSwxLGMpfX0pLGlsKGEsMSl9fTtcbkZjPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPWloKGEsMTM0MjE3NzI4KTtpZihudWxsIT09Yil7dmFyIGM9UigpO2dpKGIsYSwxMzQyMTc3MjgsYyl9aWwoYSwxMzQyMTc3MjgpfX07R2M9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9eWkoYSksYz1paChhLGIpO2lmKG51bGwhPT1jKXt2YXIgZD1SKCk7Z2koYyxhLGIsZCl9aWwoYSxiKX19O0hjPWZ1bmN0aW9uKCl7cmV0dXJuIEN9O0ljPWZ1bmN0aW9uKGEsYil7dmFyIGM9Qzt0cnl7cmV0dXJuIEM9YSxiKCl9ZmluYWxseXtDPWN9fTtcbnliPWZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYil7Y2FzZSBcImlucHV0XCI6YmIoYSxjKTtiPWMubmFtZTtpZihcInJhZGlvXCI9PT1jLnR5cGUmJm51bGwhPWIpe2ZvcihjPWE7Yy5wYXJlbnROb2RlOyljPWMucGFyZW50Tm9kZTtjPWMucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9XCIrSlNPTi5zdHJpbmdpZnkoXCJcIitiKSsnXVt0eXBlPVwicmFkaW9cIl0nKTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKXt2YXIgZD1jW2JdO2lmKGQhPT1hJiZkLmZvcm09PT1hLmZvcm0pe3ZhciBlPURiKGQpO2lmKCFlKXRocm93IEVycm9yKHAoOTApKTtXYShkKTtiYihkLGUpfX19YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aWIoYSxjKTticmVhaztjYXNlIFwic2VsZWN0XCI6Yj1jLnZhbHVlLG51bGwhPWImJmZiKGEsISFjLm11bHRpcGxlLGIsITEpfX07R2I9UWs7SGI9Ums7XG52YXIgc2w9e3VzaW5nQ2xpZW50RW50cnlQb2ludDohMSxFdmVudHM6W0NiLHVlLERiLEViLEZiLFFrXX0sdGw9e2ZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOldjLGJ1bmRsZVR5cGU6MCx2ZXJzaW9uOlwiMTguMy4xXCIscmVuZGVyZXJQYWNrYWdlTmFtZTpcInJlYWN0LWRvbVwifTtcbnZhciB1bD17YnVuZGxlVHlwZTp0bC5idW5kbGVUeXBlLHZlcnNpb246dGwudmVyc2lvbixyZW5kZXJlclBhY2thZ2VOYW1lOnRsLnJlbmRlcmVyUGFja2FnZU5hbWUscmVuZGVyZXJDb25maWc6dGwucmVuZGVyZXJDb25maWcsb3ZlcnJpZGVIb29rU3RhdGU6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZURlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZVJlbmFtZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzOm51bGwsb3ZlcnJpZGVQcm9wc0RlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzUmVuYW1lUGF0aDpudWxsLHNldEVycm9ySGFuZGxlcjpudWxsLHNldFN1c3BlbnNlSGFuZGxlcjpudWxsLHNjaGVkdWxlVXBkYXRlOm51bGwsY3VycmVudERpc3BhdGNoZXJSZWY6dWEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixmaW5kSG9zdEluc3RhbmNlQnlGaWJlcjpmdW5jdGlvbihhKXthPVpiKGEpO3JldHVybiBudWxsPT09YT9udWxsOmEuc3RhdGVOb2RlfSxmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTp0bC5maW5kRmliZXJCeUhvc3RJbnN0YW5jZXx8XG5qbCxmaW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2g6bnVsbCxzY2hlZHVsZVJlZnJlc2g6bnVsbCxzY2hlZHVsZVJvb3Q6bnVsbCxzZXRSZWZyZXNoSGFuZGxlcjpudWxsLGdldEN1cnJlbnRGaWJlcjpudWxsLHJlY29uY2lsZXJWZXJzaW9uOlwiMTguMy4xLW5leHQtZjEzMzhmODA4MC0yMDI0MDQyNlwifTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyl7dmFyIHZsPV9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZighdmwuaXNEaXNhYmxlZCYmdmwuc3VwcG9ydHNGaWJlcil0cnl7a2M9dmwuaW5qZWN0KHVsKSxsYz12bH1jYXRjaChhKXt9fWV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9c2w7XG5leHBvcnRzLmNyZWF0ZVBvcnRhbD1mdW5jdGlvbihhLGIpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO2lmKCFubChiKSl0aHJvdyBFcnJvcihwKDIwMCkpO3JldHVybiBjbChhLGIsbnVsbCxjKX07ZXhwb3J0cy5jcmVhdGVSb290PWZ1bmN0aW9uKGEsYil7aWYoIW5sKGEpKXRocm93IEVycm9yKHAoMjk5KSk7dmFyIGM9ITEsZD1cIlwiLGU9a2w7bnVsbCE9PWImJnZvaWQgMCE9PWImJighMD09PWIudW5zdGFibGVfc3RyaWN0TW9kZSYmKGM9ITApLHZvaWQgMCE9PWIuaWRlbnRpZmllclByZWZpeCYmKGQ9Yi5pZGVudGlmaWVyUHJlZml4KSx2b2lkIDAhPT1iLm9uUmVjb3ZlcmFibGVFcnJvciYmKGU9Yi5vblJlY292ZXJhYmxlRXJyb3IpKTtiPWJsKGEsMSwhMSxudWxsLG51bGwsYywhMSxkLGUpO2FbdWZdPWIuY3VycmVudDtzZig4PT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YSk7cmV0dXJuIG5ldyBsbChiKX07XG5leHBvcnRzLmZpbmRET01Ob2RlPWZ1bmN0aW9uKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoMT09PWEubm9kZVR5cGUpcmV0dXJuIGE7dmFyIGI9YS5fcmVhY3RJbnRlcm5hbHM7aWYodm9pZCAwPT09Yil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEucmVuZGVyKXRocm93IEVycm9yKHAoMTg4KSk7YT1PYmplY3Qua2V5cyhhKS5qb2luKFwiLFwiKTt0aHJvdyBFcnJvcihwKDI2OCxhKSk7fWE9WmIoYik7YT1udWxsPT09YT9udWxsOmEuc3RhdGVOb2RlO3JldHVybiBhfTtleHBvcnRzLmZsdXNoU3luYz1mdW5jdGlvbihhKXtyZXR1cm4gUmsoYSl9O2V4cG9ydHMuaHlkcmF0ZT1mdW5jdGlvbihhLGIsYyl7aWYoIW9sKGIpKXRocm93IEVycm9yKHAoMjAwKSk7cmV0dXJuIHJsKG51bGwsYSxiLCEwLGMpfTtcbmV4cG9ydHMuaHlkcmF0ZVJvb3Q9ZnVuY3Rpb24oYSxiLGMpe2lmKCFubChhKSl0aHJvdyBFcnJvcihwKDQwNSkpO3ZhciBkPW51bGwhPWMmJmMuaHlkcmF0ZWRTb3VyY2VzfHxudWxsLGU9ITEsZj1cIlwiLGc9a2w7bnVsbCE9PWMmJnZvaWQgMCE9PWMmJighMD09PWMudW5zdGFibGVfc3RyaWN0TW9kZSYmKGU9ITApLHZvaWQgMCE9PWMuaWRlbnRpZmllclByZWZpeCYmKGY9Yy5pZGVudGlmaWVyUHJlZml4KSx2b2lkIDAhPT1jLm9uUmVjb3ZlcmFibGVFcnJvciYmKGc9Yy5vblJlY292ZXJhYmxlRXJyb3IpKTtiPWVsKGIsbnVsbCxhLDEsbnVsbCE9Yz9jOm51bGwsZSwhMSxmLGcpO2FbdWZdPWIuY3VycmVudDtzZihhKTtpZihkKWZvcihhPTA7YTxkLmxlbmd0aDthKyspYz1kW2FdLGU9Yy5fZ2V0VmVyc2lvbixlPWUoYy5fc291cmNlKSxudWxsPT1iLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE/Yi5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhPVtjLGVdOmIubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YS5wdXNoKGMsXG5lKTtyZXR1cm4gbmV3IG1sKGIpfTtleHBvcnRzLnJlbmRlcj1mdW5jdGlvbihhLGIsYyl7aWYoIW9sKGIpKXRocm93IEVycm9yKHAoMjAwKSk7cmV0dXJuIHJsKG51bGwsYSxiLCExLGMpfTtleHBvcnRzLnVubW91bnRDb21wb25lbnRBdE5vZGU9ZnVuY3Rpb24oYSl7aWYoIW9sKGEpKXRocm93IEVycm9yKHAoNDApKTtyZXR1cm4gYS5fcmVhY3RSb290Q29udGFpbmVyPyhSayhmdW5jdGlvbigpe3JsKG51bGwsbnVsbCxhLCExLGZ1bmN0aW9uKCl7YS5fcmVhY3RSb290Q29udGFpbmVyPW51bGw7YVt1Zl09bnVsbH0pfSksITApOiExfTtleHBvcnRzLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzPVFrO1xuZXhwb3J0cy51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcj1mdW5jdGlvbihhLGIsYyxkKXtpZighb2woYykpdGhyb3cgRXJyb3IocCgyMDApKTtpZihudWxsPT1hfHx2b2lkIDA9PT1hLl9yZWFjdEludGVybmFscyl0aHJvdyBFcnJvcihwKDM4KSk7cmV0dXJuIHJsKGEsYixjLCExLGQpfTtleHBvcnRzLnZlcnNpb249XCIxOC4zLjEtbmV4dC1mMTMzOGY4MDgwLTIwMjQwNDI2XCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBtID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBleHBvcnRzLmNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIGV4cG9ydHMuaHlkcmF0ZVJvb3QgPSBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBleHBvcnRzLmNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgZXhwb3J0cy5oeWRyYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIGgsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmh5ZHJhdGVSb290KGMsIGgsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2hlY2tEQ0UoKSB7XG4gIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbiAgaWYgKFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGJyYW5jaCBpcyB1bnJlYWNoYWJsZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWRcbiAgICAvLyBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGNvbmRpdGlvbiBpcyB0cnVlIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gICAgLy8gVGhlcmVmb3JlIGlmIHRoZSBicmFuY2ggaXMgc3RpbGwgaGVyZSwgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdhc24ndFxuICAgIC8vIHByb3Blcmx5IGFwcGxpZWQuXG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZSBtZXNzYWdlLiBSZWFjdCBEZXZUb29scyByZWxpZXMgb24gaXQuIEFsc28gbWFrZSBzdXJlXG4gICAgLy8gdGhpcyBtZXNzYWdlIGRvZXNuJ3Qgb2NjdXIgZWxzZXdoZXJlIGluIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgY2F1c2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgIHRocm93IG5ldyBFcnJvcignXl9eJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgY29kZSBhYm92ZSBoYXMgYmVlbiBkZWFkIGNvZGUgZWxpbWluYXRlZCAoRENFJ2QpLlxuICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRShjaGVja0RDRSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIERldlRvb2xzIHNob3VsZG4ndCBjcmFzaCBSZWFjdCwgbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gV2Ugc2hvdWxkIHN0aWxsIHJlcG9ydCBpbiBjYXNlIHdlIGJyZWFrIHRoaXMgY29kZS5cbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gRENFIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIFJlYWN0RE9NIGJ1bmRsZSBleGVjdXRlcyBzbyB0aGF0XG4gIC8vIERldlRvb2xzIGNhbiByZXBvcnQgYmFkIG1pbmlmaWNhdGlvbiBkdXJpbmcgaW5qZWN0aW9uLlxuICBjaGVja0RDRSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgZj1yZXF1aXJlKFwicmVhY3RcIiksaz1TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSxsPVN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKSxtPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksbj1mLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELlJlYWN0Q3VycmVudE93bmVyLHA9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIHEoYyxhLGcpe3ZhciBiLGQ9e30sZT1udWxsLGg9bnVsbDt2b2lkIDAhPT1nJiYoZT1cIlwiK2cpO3ZvaWQgMCE9PWEua2V5JiYoZT1cIlwiK2Eua2V5KTt2b2lkIDAhPT1hLnJlZiYmKGg9YS5yZWYpO2ZvcihiIGluIGEpbS5jYWxsKGEsYikmJiFwLmhhc093blByb3BlcnR5KGIpJiYoZFtiXT1hW2JdKTtpZihjJiZjLmRlZmF1bHRQcm9wcylmb3IoYiBpbiBhPWMuZGVmYXVsdFByb3BzLGEpdm9pZCAwPT09ZFtiXSYmKGRbYl09YVtiXSk7cmV0dXJueyQkdHlwZW9mOmssdHlwZTpjLGtleTplLHJlZjpoLHByb3BzOmQsX293bmVyOm4uY3VycmVudH19ZXhwb3J0cy5GcmFnbWVudD1sO2V4cG9ydHMuanN4PXE7ZXhwb3J0cy5qc3hzPXE7XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGw9U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIiksbj1TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpLHA9U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLHE9U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpLHI9U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpLHQ9U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpLHU9U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksdj1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksdz1TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIikseD1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSx5PVN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpLHo9U3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIEEoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPXomJmFbel18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1cbnZhciBCPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxDPU9iamVjdC5hc3NpZ24sRD17fTtmdW5jdGlvbiBFKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWV8fEJ9RS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtcbkUucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YSl0aHJvdyBFcnJvcihcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0UucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O2Z1bmN0aW9uIEYoKXt9Ri5wcm90b3R5cGU9RS5wcm90b3R5cGU7ZnVuY3Rpb24gRyhhLGIsZSl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1lfHxCfXZhciBIPUcucHJvdG90eXBlPW5ldyBGO1xuSC5jb25zdHJ1Y3Rvcj1HO0MoSCxFLnByb3RvdHlwZSk7SC5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgST1BcnJheS5pc0FycmF5LEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxLPXtjdXJyZW50Om51bGx9LEw9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIE0oYSxiLGUpe3ZhciBkLGM9e30saz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihkIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihrPVwiXCIrYi5rZXkpLGIpSi5jYWxsKGIsZCkmJiFMLmhhc093blByb3BlcnR5KGQpJiYoY1tkXT1iW2RdKTt2YXIgZz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWcpYy5jaGlsZHJlbj1lO2Vsc2UgaWYoMTxnKXtmb3IodmFyIGY9QXJyYXkoZyksbT0wO208ZzttKyspZlttXT1hcmd1bWVudHNbbSsyXTtjLmNoaWxkcmVuPWZ9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGQgaW4gZz1hLmRlZmF1bHRQcm9wcyxnKXZvaWQgMD09PWNbZF0mJihjW2RdPWdbZF0pO3JldHVybnskJHR5cGVvZjpsLHR5cGU6YSxrZXk6ayxyZWY6aCxwcm9wczpjLF9vd25lcjpLLmN1cnJlbnR9fVxuZnVuY3Rpb24gTihhLGIpe3JldHVybnskJHR5cGVvZjpsLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTyhhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09bH1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiK2EucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIFA9L1xcLysvZztmdW5jdGlvbiBRKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKFwiXCIrYS5rZXkpOmIudG9TdHJpbmcoMzYpfVxuZnVuY3Rpb24gUihhLGIsZSxkLGMpe3ZhciBrPXR5cGVvZiBhO2lmKFwidW5kZWZpbmVkXCI9PT1rfHxcImJvb2xlYW5cIj09PWspYT1udWxsO3ZhciBoPSExO2lmKG51bGw9PT1hKWg9ITA7ZWxzZSBzd2l0Y2goayl7Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJudW1iZXJcIjpoPSEwO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBsOmNhc2UgbjpoPSEwfX1pZihoKXJldHVybiBoPWEsYz1jKGgpLGE9XCJcIj09PWQ/XCIuXCIrUShoLDApOmQsSShjKT8oZT1cIlwiLG51bGwhPWEmJihlPWEucmVwbGFjZShQLFwiJCYvXCIpK1wiL1wiKSxSKGMsYixlLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KSk6bnVsbCE9YyYmKE8oYykmJihjPU4oYyxlKyghYy5rZXl8fGgmJmgua2V5PT09Yy5rZXk/XCJcIjooXCJcIitjLmtleSkucmVwbGFjZShQLFwiJCYvXCIpK1wiL1wiKSthKSksYi5wdXNoKGMpKSwxO2g9MDtkPVwiXCI9PT1kP1wiLlwiOmQrXCI6XCI7aWYoSShhKSlmb3IodmFyIGc9MDtnPGEubGVuZ3RoO2crKyl7az1cbmFbZ107dmFyIGY9ZCtRKGssZyk7aCs9UihrLGIsZSxmLGMpfWVsc2UgaWYoZj1BKGEpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWZvcihhPWYuY2FsbChhKSxnPTA7IShrPWEubmV4dCgpKS5kb25lOylrPWsudmFsdWUsZj1kK1EoayxnKyspLGgrPVIoayxiLGUsZixjKTtlbHNlIGlmKFwib2JqZWN0XCI9PT1rKXRocm93IGI9U3RyaW5nKGEpLEVycm9yKFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIisoXCJbb2JqZWN0IE9iamVjdF1cIj09PWI/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6YikrXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIpO3JldHVybiBofVxuZnVuY3Rpb24gUyhhLGIsZSl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgZD1bXSxjPTA7UihhLGQsXCJcIixcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNhbGwoZSxhLGMrKyl9KTtyZXR1cm4gZH1mdW5jdGlvbiBUKGEpe2lmKC0xPT09YS5fc3RhdHVzKXt2YXIgYj1hLl9yZXN1bHQ7Yj1iKCk7Yi50aGVuKGZ1bmN0aW9uKGIpe2lmKDA9PT1hLl9zdGF0dXN8fC0xPT09YS5fc3RhdHVzKWEuX3N0YXR1cz0xLGEuX3Jlc3VsdD1ifSxmdW5jdGlvbihiKXtpZigwPT09YS5fc3RhdHVzfHwtMT09PWEuX3N0YXR1cylhLl9zdGF0dXM9MixhLl9yZXN1bHQ9Yn0pOy0xPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTAsYS5fcmVzdWx0PWIpfWlmKDE9PT1hLl9zdGF0dXMpcmV0dXJuIGEuX3Jlc3VsdC5kZWZhdWx0O3Rocm93IGEuX3Jlc3VsdDt9XG52YXIgVT17Y3VycmVudDpudWxsfSxWPXt0cmFuc2l0aW9uOm51bGx9LFc9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6VSxSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzpWLFJlYWN0Q3VycmVudE93bmVyOkt9O2Z1bmN0aW9uIFgoKXt0aHJvdyBFcnJvcihcImFjdCguLi4pIGlzIG5vdCBzdXBwb3J0ZWQgaW4gcHJvZHVjdGlvbiBidWlsZHMgb2YgUmVhY3QuXCIpO31cbmV4cG9ydHMuQ2hpbGRyZW49e21hcDpTLGZvckVhY2g6ZnVuY3Rpb24oYSxiLGUpe1MoYSxmdW5jdGlvbigpe2IuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlKX0sY291bnQ6ZnVuY3Rpb24oYSl7dmFyIGI9MDtTKGEsZnVuY3Rpb24oKXtiKyt9KTtyZXR1cm4gYn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gUyhhLGZ1bmN0aW9uKGEpe3JldHVybiBhfSl8fFtdfSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFPKGEpKXRocm93IEVycm9yKFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIpO3JldHVybiBhfX07ZXhwb3J0cy5Db21wb25lbnQ9RTtleHBvcnRzLkZyYWdtZW50PXA7ZXhwb3J0cy5Qcm9maWxlcj1yO2V4cG9ydHMuUHVyZUNvbXBvbmVudD1HO2V4cG9ydHMuU3RyaWN0TW9kZT1xO2V4cG9ydHMuU3VzcGVuc2U9dztcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9VztleHBvcnRzLmFjdD1YO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGUpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIrYStcIi5cIik7dmFyIGQ9Qyh7fSxhLnByb3BzKSxjPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1LLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoYz1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUouY2FsbChiLGYpJiYhTC5oYXNPd25Qcm9wZXJ0eShmKSYmKGRbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZilkLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7XG5mb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpsLHR5cGU6YS50eXBlLGtleTpjLHJlZjprLHByb3BzOmQsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSl7YT17JCR0eXBlb2Y6dSxfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGwsX2RlZmF1bHRWYWx1ZTpudWxsLF9nbG9iYWxOYW1lOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnQsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PU07ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPU0uYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtcbmV4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TztleHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnksX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpUfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOngsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnN0YXJ0VHJhbnNpdGlvbj1mdW5jdGlvbihhKXt2YXIgYj1WLnRyYW5zaXRpb247Vi50cmFuc2l0aW9uPXt9O3RyeXthKCl9ZmluYWxseXtWLnRyYW5zaXRpb249Yn19O2V4cG9ydHMudW5zdGFibGVfYWN0PVg7ZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlQ29udGV4dChhKX07XG5leHBvcnRzLnVzZURlYnVnVmFsdWU9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudXNlRGVmZXJyZWRWYWx1ZT1mdW5jdGlvbihhKXtyZXR1cm4gVS5jdXJyZW50LnVzZURlZmVycmVkVmFsdWUoYSl9O2V4cG9ydHMudXNlRWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VJZD1mdW5jdGlvbigpe3JldHVybiBVLmN1cnJlbnQudXNlSWQoKX07ZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlPWZ1bmN0aW9uKGEsYixlKXtyZXR1cm4gVS5jdXJyZW50LnVzZUltcGVyYXRpdmVIYW5kbGUoYSxiLGUpfTtleHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlSW5zZXJ0aW9uRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VMYXlvdXRFZmZlY3QoYSxiKX07XG5leHBvcnRzLnVzZU1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZU1lbW8oYSxiKX07ZXhwb3J0cy51c2VSZWR1Y2VyPWZ1bmN0aW9uKGEsYixlKXtyZXR1cm4gVS5jdXJyZW50LnVzZVJlZHVjZXIoYSxiLGUpfTtleHBvcnRzLnVzZVJlZj1mdW5jdGlvbihhKXtyZXR1cm4gVS5jdXJyZW50LnVzZVJlZihhKX07ZXhwb3J0cy51c2VTdGF0ZT1mdW5jdGlvbihhKXtyZXR1cm4gVS5jdXJyZW50LnVzZVN0YXRlKGEpfTtleHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlPWZ1bmN0aW9uKGEsYixlKXtyZXR1cm4gVS5jdXJyZW50LnVzZVN5bmNFeHRlcm5hbFN0b3JlKGEsYixlKX07ZXhwb3J0cy51c2VUcmFuc2l0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIFUuY3VycmVudC51c2VUcmFuc2l0aW9uKCl9O2V4cG9ydHMudmVyc2lvbj1cIjE4LjMuMVwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHNjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7ZnVuY3Rpb24gZihhLGIpe3ZhciBjPWEubGVuZ3RoO2EucHVzaChiKTthOmZvcig7MDxjOyl7dmFyIGQ9Yy0xPj4+MSxlPWFbZF07aWYoMDxnKGUsYikpYVtkXT1iLGFbY109ZSxjPWQ7ZWxzZSBicmVhayBhfX1mdW5jdGlvbiBoKGEpe3JldHVybiAwPT09YS5sZW5ndGg/bnVsbDphWzBdfWZ1bmN0aW9uIGsoYSl7aWYoMD09PWEubGVuZ3RoKXJldHVybiBudWxsO3ZhciBiPWFbMF0sYz1hLnBvcCgpO2lmKGMhPT1iKXthWzBdPWM7YTpmb3IodmFyIGQ9MCxlPWEubGVuZ3RoLHc9ZT4+PjE7ZDx3Oyl7dmFyIG09MiooZCsxKS0xLEM9YVttXSxuPW0rMSx4PWFbbl07aWYoMD5nKEMsYykpbjxlJiYwPmcoeCxDKT8oYVtkXT14LGFbbl09YyxkPW4pOihhW2RdPUMsYVttXT1jLGQ9bSk7ZWxzZSBpZihuPGUmJjA+Zyh4LGMpKWFbZF09eCxhW25dPWMsZD1uO2Vsc2UgYnJlYWsgYX19cmV0dXJuIGJ9XG5mdW5jdGlvbiBnKGEsYil7dmFyIGM9YS5zb3J0SW5kZXgtYi5zb3J0SW5kZXg7cmV0dXJuIDAhPT1jP2M6YS5pZC1iLmlkfWlmKFwib2JqZWN0XCI9PT10eXBlb2YgcGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3cpe3ZhciBsPXBlcmZvcm1hbmNlO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIGwubm93KCl9fWVsc2V7dmFyIHA9RGF0ZSxxPXAubm93KCk7ZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gcC5ub3coKS1xfX12YXIgcj1bXSx0PVtdLHU9MSx2PW51bGwseT0zLHo9ITEsQT0hMSxCPSExLEQ9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDpudWxsLEU9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6bnVsbCxGPVwidW5kZWZpbmVkXCIhPT10eXBlb2Ygc2V0SW1tZWRpYXRlP3NldEltbWVkaWF0ZTpudWxsO1xuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBuYXZpZ2F0b3ImJnZvaWQgMCE9PW5hdmlnYXRvci5zY2hlZHVsaW5nJiZ2b2lkIDAhPT1uYXZpZ2F0b3Iuc2NoZWR1bGluZy5pc0lucHV0UGVuZGluZyYmbmF2aWdhdG9yLnNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcuYmluZChuYXZpZ2F0b3Iuc2NoZWR1bGluZyk7ZnVuY3Rpb24gRyhhKXtmb3IodmFyIGI9aCh0KTtudWxsIT09Yjspe2lmKG51bGw9PT1iLmNhbGxiYWNrKWsodCk7ZWxzZSBpZihiLnN0YXJ0VGltZTw9YSlrKHQpLGIuc29ydEluZGV4PWIuZXhwaXJhdGlvblRpbWUsZihyLGIpO2Vsc2UgYnJlYWs7Yj1oKHQpfX1mdW5jdGlvbiBIKGEpe0I9ITE7RyhhKTtpZighQSlpZihudWxsIT09aChyKSlBPSEwLEkoSik7ZWxzZXt2YXIgYj1oKHQpO251bGwhPT1iJiZLKEgsYi5zdGFydFRpbWUtYSl9fVxuZnVuY3Rpb24gSihhLGIpe0E9ITE7QiYmKEI9ITEsRShMKSxMPS0xKTt6PSEwO3ZhciBjPXk7dHJ5e0coYik7Zm9yKHY9aChyKTtudWxsIT09diYmKCEodi5leHBpcmF0aW9uVGltZT5iKXx8YSYmIU0oKSk7KXt2YXIgZD12LmNhbGxiYWNrO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2LmNhbGxiYWNrPW51bGw7eT12LnByaW9yaXR5TGV2ZWw7dmFyIGU9ZCh2LmV4cGlyYXRpb25UaW1lPD1iKTtiPWV4cG9ydHMudW5zdGFibGVfbm93KCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGU/di5jYWxsYmFjaz1lOnY9PT1oKHIpJiZrKHIpO0coYil9ZWxzZSBrKHIpO3Y9aChyKX1pZihudWxsIT09dil2YXIgdz0hMDtlbHNle3ZhciBtPWgodCk7bnVsbCE9PW0mJksoSCxtLnN0YXJ0VGltZS1iKTt3PSExfXJldHVybiB3fWZpbmFsbHl7dj1udWxsLHk9Yyx6PSExfX12YXIgTj0hMSxPPW51bGwsTD0tMSxQPTUsUT0tMTtcbmZ1bmN0aW9uIE0oKXtyZXR1cm4gZXhwb3J0cy51bnN0YWJsZV9ub3coKS1RPFA/ITE6ITB9ZnVuY3Rpb24gUigpe2lmKG51bGwhPT1PKXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO1E9YTt2YXIgYj0hMDt0cnl7Yj1PKCEwLGEpfWZpbmFsbHl7Yj9TKCk6KE49ITEsTz1udWxsKX19ZWxzZSBOPSExfXZhciBTO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBGKVM9ZnVuY3Rpb24oKXtGKFIpfTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgTWVzc2FnZUNoYW5uZWwpe3ZhciBUPW5ldyBNZXNzYWdlQ2hhbm5lbCxVPVQucG9ydDI7VC5wb3J0MS5vbm1lc3NhZ2U9UjtTPWZ1bmN0aW9uKCl7VS5wb3N0TWVzc2FnZShudWxsKX19ZWxzZSBTPWZ1bmN0aW9uKCl7RChSLDApfTtmdW5jdGlvbiBJKGEpe089YTtOfHwoTj0hMCxTKCkpfWZ1bmN0aW9uIEsoYSxiKXtMPUQoZnVuY3Rpb24oKXthKGV4cG9ydHMudW5zdGFibGVfbm93KCkpfSxiKX1cbmV4cG9ydHMudW5zdGFibGVfSWRsZVByaW9yaXR5PTU7ZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eT0xO2V4cG9ydHMudW5zdGFibGVfTG93UHJpb3JpdHk9NDtleHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5PTM7ZXhwb3J0cy51bnN0YWJsZV9Qcm9maWxpbmc9bnVsbDtleHBvcnRzLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5PTI7ZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaz1mdW5jdGlvbihhKXthLmNhbGxiYWNrPW51bGx9O2V4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb249ZnVuY3Rpb24oKXtBfHx6fHwoQT0hMCxJKEopKX07XG5leHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlPWZ1bmN0aW9uKGEpezA+YXx8MTI1PGE/Y29uc29sZS5lcnJvcihcImZvcmNlRnJhbWVSYXRlIHRha2VzIGEgcG9zaXRpdmUgaW50IGJldHdlZW4gMCBhbmQgMTI1LCBmb3JjaW5nIGZyYW1lIHJhdGVzIGhpZ2hlciB0aGFuIDEyNSBmcHMgaXMgbm90IHN1cHBvcnRlZFwiKTpQPTA8YT9NYXRoLmZsb29yKDFFMy9hKTo1fTtleHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsPWZ1bmN0aW9uKCl7cmV0dXJuIHl9O2V4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGU9ZnVuY3Rpb24oKXtyZXR1cm4gaChyKX07ZXhwb3J0cy51bnN0YWJsZV9uZXh0PWZ1bmN0aW9uKGEpe3N3aXRjaCh5KXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzp2YXIgYj0zO2JyZWFrO2RlZmF1bHQ6Yj15fXZhciBjPXk7eT1iO3RyeXtyZXR1cm4gYSgpfWZpbmFsbHl7eT1jfX07ZXhwb3J0cy51bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbj1mdW5jdGlvbigpe307XG5leHBvcnRzLnVuc3RhYmxlX3JlcXVlc3RQYWludD1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHk9ZnVuY3Rpb24oYSxiKXtzd2l0Y2goYSl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA0OmNhc2UgNTpicmVhaztkZWZhdWx0OmE9M312YXIgYz15O3k9YTt0cnl7cmV0dXJuIGIoKX1maW5hbGx5e3k9Y319O1xuZXhwb3J0cy51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWM/KGM9Yy5kZWxheSxjPVwibnVtYmVyXCI9PT10eXBlb2YgYyYmMDxjP2QrYzpkKTpjPWQ7c3dpdGNoKGEpe2Nhc2UgMTp2YXIgZT0tMTticmVhaztjYXNlIDI6ZT0yNTA7YnJlYWs7Y2FzZSA1OmU9MTA3Mzc0MTgyMzticmVhaztjYXNlIDQ6ZT0xRTQ7YnJlYWs7ZGVmYXVsdDplPTVFM31lPWMrZTthPXtpZDp1KyssY2FsbGJhY2s6Yixwcmlvcml0eUxldmVsOmEsc3RhcnRUaW1lOmMsZXhwaXJhdGlvblRpbWU6ZSxzb3J0SW5kZXg6LTF9O2M+ZD8oYS5zb3J0SW5kZXg9YyxmKHQsYSksbnVsbD09PWgocikmJmE9PT1oKHQpJiYoQj8oRShMKSxMPS0xKTpCPSEwLEsoSCxjLWQpKSk6KGEuc29ydEluZGV4PWUsZihyLGEpLEF8fHp8fChBPSEwLEkoSikpKTtyZXR1cm4gYX07XG5leHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPU07ZXhwb3J0cy51bnN0YWJsZV93cmFwQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9eTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz15O3k9Yjt0cnl7cmV0dXJuIGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZpbmFsbHl7eT1jfX19O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBnPXJlcXVpcmUoXCJyZWFjdFwiKTtmdW5jdGlvbiBuKGEsYil7cmV0dXJuIGE9PT1iJiYoMCE9PWF8fDEvYT09PTEvYil8fGEhPT1hJiZiIT09Yn12YXIgcD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgT2JqZWN0LmlzP09iamVjdC5pczpuLHE9Zy51c2VTeW5jRXh0ZXJuYWxTdG9yZSxyPWcudXNlUmVmLHQ9Zy51c2VFZmZlY3QsdT1nLnVzZU1lbW8sdj1nLnVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yPWZ1bmN0aW9uKGEsYixlLGwsaCl7dmFyIGM9cihudWxsKTtpZihudWxsPT09Yy5jdXJyZW50KXt2YXIgZj17aGFzVmFsdWU6ITEsdmFsdWU6bnVsbH07Yy5jdXJyZW50PWZ9ZWxzZSBmPWMuY3VycmVudDtjPXUoZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe2lmKCFjKXtjPSEwO2Q9YTthPWwoYSk7aWYodm9pZCAwIT09aCYmZi5oYXNWYWx1ZSl7dmFyIGI9Zi52YWx1ZTtpZihoKGIsYSkpcmV0dXJuIGs9Yn1yZXR1cm4gaz1hfWI9aztpZihwKGQsYSkpcmV0dXJuIGI7dmFyIGU9bChhKTtpZih2b2lkIDAhPT1oJiZoKGIsZSkpcmV0dXJuIGI7ZD1hO3JldHVybiBrPWV9dmFyIGM9ITEsZCxrLG09dm9pZCAwPT09ZT9udWxsOmU7cmV0dXJuW2Z1bmN0aW9uKCl7cmV0dXJuIGEoYigpKX0sbnVsbD09PW0/dm9pZCAwOmZ1bmN0aW9uKCl7cmV0dXJuIGEobSgpKX1dfSxbYixlLGwsaF0pO3ZhciBkPXEoYSxjWzBdLGNbMV0pO1xudChmdW5jdGlvbigpe2YuaGFzVmFsdWU9ITA7Zi52YWx1ZT1kfSxbZF0pO3YoZCk7cmV0dXJuIGR9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbnZhciBfMSA9IFwibzBVYnBRT096MlJYcFQ5WElDWHBcIjtcbmV4cG9ydCB7IF8xIGFzIFwiY29udGFpbmVyXCIgfVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG52YXIgXzEgPSBcIkNaRWpiMHFwNEJxd0d0N0ZyZTdoXCI7XG52YXIgXzIgPSBcIkFMTldCZTI4VkdTbGFHb2UyY1FjXCI7XG52YXIgXzMgPSBcImJ1UzNUMEY3S2o5N2I2bHNvTXo4XCI7XG52YXIgXzQgPSBcInU2eWxGbG9CaXozeU96T1dleTd2XCI7XG52YXIgXzUgPSBcIlA1alk2UnJpSlhIQ2tXaFVqMW1RXCI7XG52YXIgXzYgPSBcIlQ0MFVNRjFNQUFPVUZ5M2MwckkxXCI7XG52YXIgXzcgPSBcIlFmdkU5TVFiZHA3Y3hKcTVOVnJ3XCI7XG52YXIgXzggPSBcIm1Bb2hrNUhNNEtERlk2UlFWb1RrXCI7XG5leHBvcnQgeyBfMSBhcyBcImluY2x1ZGVkX2NoYXJcIiwgXzIgYXMgXCJsZXR0ZXJcIiwgXzMgYXMgXCJtYXRjaGVkX2NoYXJcIiwgXzQgYXMgXCJzaG93XCIsIF81IGFzIFwidW5rbm93blwiLCBfNiBhcyBcIndpZ2dsZVwiLCBfNyBhcyBcIndvcmRcIiwgXzggYXMgXCJ3cm9uZ19jaGFyXCIgfVxuIiwiLy8gc3JjL3V0aWxzL2Zvcm1hdFByb2RFcnJvck1lc3NhZ2UudHNcbmZ1bmN0aW9uIGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoY29kZSkge1xuICByZXR1cm4gYE1pbmlmaWVkIFJlZHV4IGVycm9yICMke2NvZGV9OyB2aXNpdCBodHRwczovL3JlZHV4LmpzLm9yZy9FcnJvcnM/Y29kZT0ke2NvZGV9IGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMuIGA7XG59XG5cbi8vIHNyYy91dGlscy9zeW1ib2wtb2JzZXJ2YWJsZS50c1xudmFyICQkb2JzZXJ2YWJsZSA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8IFwiQEBvYnNlcnZhYmxlXCIpKCk7XG52YXIgc3ltYm9sX29ic2VydmFibGVfZGVmYXVsdCA9ICQkb2JzZXJ2YWJsZTtcblxuLy8gc3JjL3V0aWxzL2FjdGlvblR5cGVzLnRzXG52YXIgcmFuZG9tU3RyaW5nID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KFwiXCIpLmpvaW4oXCIuXCIpO1xudmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiBgQEByZWR1eC9JTklUJHsvKiBAX19QVVJFX18gKi8gcmFuZG9tU3RyaW5nKCl9YCxcbiAgUkVQTEFDRTogYEBAcmVkdXgvUkVQTEFDRSR7LyogQF9fUFVSRV9fICovIHJhbmRvbVN0cmluZygpfWAsXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiAoKSA9PiBgQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTiR7cmFuZG9tU3RyaW5nKCl9YFxufTtcbnZhciBhY3Rpb25UeXBlc19kZWZhdWx0ID0gQWN0aW9uVHlwZXM7XG5cbi8vIHNyYy91dGlscy9pc1BsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBsZXQgcHJvdG8gPSBvYmo7XG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG8gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IG51bGw7XG59XG5cbi8vIHNyYy91dGlscy9raW5kT2YudHNcbmZ1bmN0aW9uIG1pbmlLaW5kT2YodmFsKSB7XG4gIGlmICh2YWwgPT09IHZvaWQgMClcbiAgICByZXR1cm4gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKHZhbCA9PT0gbnVsbClcbiAgICByZXR1cm4gXCJudWxsXCI7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgY2FzZSBcInN5bWJvbFwiOlxuICAgIGNhc2UgXCJmdW5jdGlvblwiOiB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcbiAgICByZXR1cm4gXCJhcnJheVwiO1xuICBpZiAoaXNEYXRlKHZhbCkpXG4gICAgcmV0dXJuIFwiZGF0ZVwiO1xuICBpZiAoaXNFcnJvcih2YWwpKVxuICAgIHJldHVybiBcImVycm9yXCI7XG4gIGNvbnN0IGNvbnN0cnVjdG9yTmFtZSA9IGN0b3JOYW1lKHZhbCk7XG4gIHN3aXRjaCAoY29uc3RydWN0b3JOYW1lKSB7XG4gICAgY2FzZSBcIlN5bWJvbFwiOlxuICAgIGNhc2UgXCJQcm9taXNlXCI6XG4gICAgY2FzZSBcIldlYWtNYXBcIjpcbiAgICBjYXNlIFwiV2Vha1NldFwiOlxuICAgIGNhc2UgXCJNYXBcIjpcbiAgICBjYXNlIFwiU2V0XCI6XG4gICAgICByZXR1cm4gY29uc3RydWN0b3JOYW1lO1xuICB9XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgXCJcIik7XG59XG5mdW5jdGlvbiBjdG9yTmFtZSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwuY29uc3RydWN0b3IgPT09IFwiZnVuY3Rpb25cIiA/IHZhbC5jb25zdHJ1Y3Rvci5uYW1lIDogbnVsbDtcbn1cbmZ1bmN0aW9uIGlzRXJyb3IodmFsKSB7XG4gIHJldHVybiB2YWwgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgdmFsLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3Iuc3RhY2tUcmFjZUxpbWl0ID09PSBcIm51bWJlclwiO1xufVxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiB2YWwudG9EYXRlU3RyaW5nID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHZhbC5nZXREYXRlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHZhbC5zZXREYXRlID09PSBcImZ1bmN0aW9uXCI7XG59XG5mdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gIGxldCB0eXBlT2ZWYWwgPSB0eXBlb2YgdmFsO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdHlwZU9mVmFsID0gbWluaUtpbmRPZih2YWwpO1xuICB9XG4gIHJldHVybiB0eXBlT2ZWYWw7XG59XG5cbi8vIHNyYy9jcmVhdGVTdG9yZS50c1xuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMikgOiBgRXhwZWN0ZWQgdGhlIHJvb3QgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJyR7a2luZE9mKHJlZHVjZXIpfSdgKTtcbiAgfVxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGVuaGFuY2VyID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIGVuaGFuY2VyID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMCkgOiBcIkl0IGxvb2tzIGxpa2UgeW91IGFyZSBwYXNzaW5nIHNldmVyYWwgc3RvcmUgZW5oYW5jZXJzIHRvIGNyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtIHRvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjY3JlYXRpbmctYS1zdG9yZS13aXRoLWVuaGFuY2VycyBmb3IgYW4gZXhhbXBsZS5cIik7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB2b2lkIDA7XG4gIH1cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMSkgOiBgRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnJHtraW5kT2YoZW5oYW5jZXIpfSdgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cbiAgbGV0IGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgbGV0IGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICBsZXQgY3VycmVudExpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGxldCBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgbGV0IGxpc3RlbmVySWRDb3VudGVyID0gMDtcbiAgbGV0IGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICBjdXJyZW50TGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgbmV4dExpc3RlbmVycy5zZXQoa2V5LCBsaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDMpIDogXCJZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiBUaGUgcmVkdWNlciBoYXMgYWxyZWFkeSByZWNlaXZlZCB0aGUgc3RhdGUgYXMgYW4gYXJndW1lbnQuIFBhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNCkgOiBgRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnJHtraW5kT2YobGlzdGVuZXIpfSdgKTtcbiAgICB9XG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDUpIDogXCJZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgY29tcG9uZW50IGFuZCBpbnZva2Ugc3RvcmUuZ2V0U3RhdGUoKSBpbiB0aGUgY2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBsYXRlc3Qgc3RhdGUuIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGkvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy5cIik7XG4gICAgfVxuICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBjb25zdCBsaXN0ZW5lcklkID0gbGlzdGVuZXJJZENvdW50ZXIrKztcbiAgICBuZXh0TGlzdGVuZXJzLnNldChsaXN0ZW5lcklkLCBsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNikgOiBcIllvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGkvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy5cIik7XG4gICAgICB9XG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVySWQpO1xuICAgICAgY3VycmVudExpc3RlbmVycyA9IG51bGw7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNykgOiBgQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuIEluc3RlYWQsIHRoZSBhY3R1YWwgdHlwZSB3YXM6ICcke2tpbmRPZihhY3Rpb24pfScuIFlvdSBtYXkgbmVlZCB0byBhZGQgbWlkZGxld2FyZSB0byB5b3VyIHN0b3JlIHNldHVwIHRvIGhhbmRsZSBkaXNwYXRjaGluZyBvdGhlciB2YWx1ZXMsIHN1Y2ggYXMgJ3JlZHV4LXRodW5rJyB0byBoYW5kbGUgZGlzcGF0Y2hpbmcgZnVuY3Rpb25zLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjbWlkZGxld2FyZSBhbmQgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTYtYXN5bmMtbG9naWMjdXNpbmctdGhlLXJlZHV4LXRodW5rLW1pZGRsZXdhcmUgZm9yIGV4YW1wbGVzLmApO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg4KSA6ICdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuIFlvdSBtYXkgaGF2ZSBtaXNzcGVsbGVkIGFuIGFjdGlvbiB0eXBlIHN0cmluZyBjb25zdGFudC4nKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTcpIDogYEFjdGlvbiBcInR5cGVcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nLiBJbnN0ZWFkLCB0aGUgYWN0dWFsIHR5cGUgd2FzOiAnJHtraW5kT2YoYWN0aW9uLnR5cGUpfScuIFZhbHVlIHdhczogJyR7YWN0aW9uLnR5cGV9JyAoc3RyaW5naWZpZWQpYCk7XG4gICAgfVxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg5KSA6IFwiUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLlwiKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMCkgOiBgRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnJHtraW5kT2YobmV4dFJlZHVjZXIpfWApO1xuICAgIH1cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzX2RlZmF1bHQuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgY29uc3Qgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gXCJvYmplY3RcIiB8fCBvYnNlcnZlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDExKSA6IGBFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZDogJyR7a2luZE9mKG9ic2VydmVyKX0nYCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyQXNPYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgICAgIGlmIChvYnNlcnZlckFzT2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXJBc09ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBbc3ltYm9sX29ic2VydmFibGVfZGVmYXVsdF0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzX2RlZmF1bHQuSU5JVFxuICB9KTtcbiAgY29uc3Qgc3RvcmUgPSB7XG4gICAgZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyLFxuICAgIFtzeW1ib2xfb2JzZXJ2YWJsZV9kZWZhdWx0XTogb2JzZXJ2YWJsZVxuICB9O1xuICByZXR1cm4gc3RvcmU7XG59XG5mdW5jdGlvbiBsZWdhY3lfY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpO1xufVxuXG4vLyBzcmMvdXRpbHMvd2FybmluZy50c1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbi8vIHNyYy9jb21iaW5lUmVkdWNlcnMudHNcbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIGNvbnN0IHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICBjb25zdCBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IGFjdGlvblR5cGVzX2RlZmF1bHQuSU5JVCA/IFwicHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlXCIgOiBcInByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyXCI7XG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gXCJTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgdG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLlwiO1xuICB9XG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiBgVGhlICR7YXJndW1lbnROYW1lfSBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJHtraW5kT2YoaW5wdXRTdGF0ZSl9XCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcga2V5czogXCIke3JlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpfVwiYDtcbiAgfVxuICBjb25zdCB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcigoa2V5KSA9PiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV0pO1xuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBhY3Rpb25UeXBlc19kZWZhdWx0LlJFUExBQ0UpXG4gICAgcmV0dXJuO1xuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBgVW5leHBlY3RlZCAke3VuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyBcImtleXNcIiA6IFwia2V5XCJ9IFwiJHt1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKX1cIiBmb3VuZCBpbiAke2FyZ3VtZW50TmFtZX0uIEV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIke3JlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpfVwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLmA7XG4gIH1cbn1cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih2b2lkIDAsIHtcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzX2RlZmF1bHQuSU5JVFxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMikgOiBgVGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcIiR7a2V5fVwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIElmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIHlvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuYCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih2b2lkIDAsIHtcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzX2RlZmF1bHQuUFJPQkVfVU5LTk9XTl9BQ1RJT04oKVxuICAgIH0pID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMykgOiBgVGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcIiR7a2V5fVwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIERvbid0IHRyeSB0byBoYW5kbGUgJyR7YWN0aW9uVHlwZXNfZGVmYXVsdC5JTklUfScgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiBuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuYCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICBjb25zdCByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgY29uc3QgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gcmVkdWNlcktleXNbaV07XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHdhcm5pbmcoYE5vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcIiR7a2V5fVwiYCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuICBjb25zdCBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XG4gIGxldCB1bmV4cGVjdGVkS2V5Q2FjaGU7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuICBsZXQgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tpXTtcbiAgICAgIGNvbnN0IHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW2tleV07XG4gICAgICBjb25zdCBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVba2V5XTtcbiAgICAgIGNvbnN0IG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE0KSA6IGBXaGVuIGNhbGxlZCB3aXRoIGFuIGFjdGlvbiBvZiB0eXBlICR7YWN0aW9uVHlwZSA/IGBcIiR7U3RyaW5nKGFjdGlvblR5cGUpfVwiYCA6IFwiKHVua25vd24gdHlwZSlcIn0sIHRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXCIke2tleX1cIiByZXR1cm5lZCB1bmRlZmluZWQuIFRvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuYCk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGVba2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKHN0YXRlKS5sZW5ndGg7XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuLy8gc3JjL2JpbmRBY3Rpb25DcmVhdG9ycy50c1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh0aGlzLCBhcmdzKSk7XG4gIH07XG59XG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09IFwib2JqZWN0XCIgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNikgOiBgYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBidXQgaW5zdGVhZCByZWNlaXZlZDogJyR7a2luZE9mKGFjdGlvbkNyZWF0b3JzKX0nLiBEaWQgeW91IHdyaXRlIFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cIiBpbnN0ZWFkIG9mIFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiP2ApO1xuICB9XG4gIGNvbnN0IGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICBjb25zdCBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuLy8gc3JjL2NvbXBvc2UudHNcbmZ1bmN0aW9uIGNvbXBvc2UoLi4uZnVuY3MpIHtcbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoYXJnKSA9PiBhcmc7XG4gIH1cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuICByZXR1cm4gZnVuY3MucmVkdWNlKChhLCBiKSA9PiAoLi4uYXJncykgPT4gYShiKC4uLmFyZ3MpKSk7XG59XG5cbi8vIHNyYy9hcHBseU1pZGRsZXdhcmUudHNcbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykge1xuICByZXR1cm4gKGNyZWF0ZVN0b3JlMikgPT4gKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZTIocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICAgIGxldCBkaXNwYXRjaCA9ICgpID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE1KSA6IFwiRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLlwiKTtcbiAgICB9O1xuICAgIGNvbnN0IG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICBkaXNwYXRjaDogKGFjdGlvbiwgLi4uYXJncykgPT4gZGlzcGF0Y2goYWN0aW9uLCAuLi5hcmdzKVxuICAgIH07XG4gICAgY29uc3QgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoKG1pZGRsZXdhcmUpID0+IG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSkpO1xuICAgIGRpc3BhdGNoID0gY29tcG9zZSguLi5jaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdG9yZSxcbiAgICAgIGRpc3BhdGNoXG4gICAgfTtcbiAgfTtcbn1cblxuLy8gc3JjL3V0aWxzL2lzQWN0aW9uLnRzXG5mdW5jdGlvbiBpc0FjdGlvbihhY3Rpb24pIHtcbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QoYWN0aW9uKSAmJiBcInR5cGVcIiBpbiBhY3Rpb24gJiYgdHlwZW9mIGFjdGlvbi50eXBlID09PSBcInN0cmluZ1wiO1xufVxuZXhwb3J0IHtcbiAgYWN0aW9uVHlwZXNfZGVmYXVsdCBhcyBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzLFxuICBhcHBseU1pZGRsZXdhcmUsXG4gIGJpbmRBY3Rpb25DcmVhdG9ycyxcbiAgY29tYmluZVJlZHVjZXJzLFxuICBjb21wb3NlLFxuICBjcmVhdGVTdG9yZSxcbiAgaXNBY3Rpb24sXG4gIGlzUGxhaW5PYmplY3QsXG4gIGxlZ2FjeV9jcmVhdGVTdG9yZVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZHV4Lm1qcy5tYXAiLCIvLyBzcmMvaW5kZXgudHNcbmZ1bmN0aW9uIGNyZWF0ZVRodW5rTWlkZGxld2FyZShleHRyYUFyZ3VtZW50KSB7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmFBcmd1bWVudCk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gIH07XG4gIHJldHVybiBtaWRkbGV3YXJlO1xufVxudmFyIHRodW5rID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKCk7XG52YXIgd2l0aEV4dHJhQXJndW1lbnQgPSBjcmVhdGVUaHVua01pZGRsZXdhcmU7XG5leHBvcnQge1xuICB0aHVuayxcbiAgd2l0aEV4dHJhQXJndW1lbnRcbn07XG4iLCIvLyBzcmMvdXRpbHMvZW52LnRzXG52YXIgTk9USElORyA9IFN5bWJvbC5mb3IoXCJpbW1lci1ub3RoaW5nXCIpO1xudmFyIERSQUZUQUJMRSA9IFN5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIik7XG52YXIgRFJBRlRfU1RBVEUgPSBTeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIik7XG5cbi8vIHNyYy91dGlscy9lcnJvcnMudHNcbnZhciBlcnJvcnMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBbXG4gIC8vIEFsbCBlcnJvciBjb2Rlcywgc3RhcnRpbmcgYnkgMDpcbiAgZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgcmV0dXJuIGBUaGUgcGx1Z2luIGZvciAnJHtwbHVnaW59JyBoYXMgbm90IGJlZW4gbG9hZGVkIGludG8gSW1tZXIuIFRvIGVuYWJsZSB0aGUgcGx1Z2luLCBpbXBvcnQgYW5kIGNhbGwgXFxgZW5hYmxlJHtwbHVnaW59KClcXGAgd2hlbiBpbml0aWFsaXppbmcgeW91ciBhcHBsaWNhdGlvbi5gO1xuICB9LFxuICBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBgcHJvZHVjZSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhpbmdzIHRoYXQgYXJlIGRyYWZ0YWJsZTogcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBNYXAsIFNldCBvciBjbGFzc2VzIHRoYXQgYXJlIG1hcmtlZCB3aXRoICdbaW1tZXJhYmxlXTogdHJ1ZScuIEdvdCAnJHt0aGluZ30nYDtcbiAgfSxcbiAgXCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLFxuICBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IHVzZSBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZC4gRGlkIHlvdSBwYXNzIGFuIG9iamVjdCBmcm9tIGluc2lkZSBhbiBpbW1lciBmdW5jdGlvbiB0byBhbiBhc3luYyBwcm9jZXNzPyBcIiArIGRhdGE7XG4gIH0sXG4gIFwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIixcbiAgXCJJbW1lciBmb3JiaWRzIGNpcmN1bGFyIHJlZmVyZW5jZXNcIixcbiAgXCJUaGUgZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb25cIixcbiAgXCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIixcbiAgXCJGaXJzdCBhcmd1bWVudCB0byBgY3JlYXRlRHJhZnRgIG11c3QgYmUgYSBwbGFpbiBvYmplY3QsIGFuIGFycmF5LCBvciBhbiBpbW1lcmFibGUgb2JqZWN0XCIsXG4gIFwiRmlyc3QgYXJndW1lbnQgdG8gYGZpbmlzaERyYWZ0YCBtdXN0IGJlIGEgZHJhZnQgcmV0dXJuZWQgYnkgYGNyZWF0ZURyYWZ0YFwiLFxuICBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBgJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiAke3RoaW5nfWA7XG4gIH0sXG4gIFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIixcbiAgXCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuICBcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLFxuICBcIkltbWVyIG9ubHkgc3VwcG9ydHMgc2V0dGluZyBhcnJheSBpbmRpY2VzIGFuZCB0aGUgJ2xlbmd0aCcgcHJvcGVydHlcIixcbiAgZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gYCdvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6ICR7dGhpbmd9YDtcbiAgfVxuICAvLyBOb3RlOiBpZiBtb3JlIGVycm9ycyBhcmUgYWRkZWQsIHRoZSBlcnJvck9mZnNldCBpbiBQYXRjaGVzLnRzIHNob3VsZCBiZSBpbmNyZWFzZWRcbiAgLy8gU2VlIFBhdGNoZXMudHMgZm9yIGFkZGl0aW9uYWwgZXJyb3JzXG5dIDogW107XG5mdW5jdGlvbiBkaWUoZXJyb3IsIC4uLmFyZ3MpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnN0IGUgPSBlcnJvcnNbZXJyb3JdO1xuICAgIGNvbnN0IG1zZyA9IHR5cGVvZiBlID09PSBcImZ1bmN0aW9uXCIgPyBlLmFwcGx5KG51bGwsIGFyZ3MpIDogZTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFtJbW1lcl0gJHttc2d9YCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiAke2Vycm9yfS4gRnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZmBcbiAgKTtcbn1cblxuLy8gc3JjL3V0aWxzL2NvbW1vbi50c1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuZnVuY3Rpb24gaXNEcmFmdCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiAhIXZhbHVlW0RSQUZUX1NUQVRFXTtcbn1cbmZ1bmN0aW9uIGlzRHJhZnRhYmxlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpXG4gICAgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgISF2YWx1ZVtEUkFGVEFCTEVdIHx8ICEhdmFsdWUuY29uc3RydWN0b3I/LltEUkFGVEFCTEVdIHx8IGlzTWFwKHZhbHVlKSB8fCBpc1NldCh2YWx1ZSk7XG59XG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IGdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgQ3RvciA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICBpZiAoQ3RvciA9PT0gT2JqZWN0KVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gXCJmdW5jdGlvblwiICYmIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoQ3RvcikgPT09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5mdW5jdGlvbiBvcmlnaW5hbCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnQodmFsdWUpKVxuICAgIGRpZSgxNSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWVbRFJBRlRfU1RBVEVdLmJhc2VfO1xufVxuZnVuY3Rpb24gZWFjaChvYmosIGl0ZXIpIHtcbiAgaWYgKGdldEFyY2h0eXBlKG9iaikgPT09IDAgLyogT2JqZWN0ICovKSB7XG4gICAgUmVmbGVjdC5vd25LZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpdGVyKGtleSwgb2JqW2tleV0sIG9iaik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4gaXRlcihpbmRleCwgZW50cnksIG9iaikpO1xuICB9XG59XG5mdW5jdGlvbiBnZXRBcmNodHlwZSh0aGluZykge1xuICBjb25zdCBzdGF0ZSA9IHRoaW5nW0RSQUZUX1NUQVRFXTtcbiAgcmV0dXJuIHN0YXRlID8gc3RhdGUudHlwZV8gOiBBcnJheS5pc0FycmF5KHRoaW5nKSA/IDEgLyogQXJyYXkgKi8gOiBpc01hcCh0aGluZykgPyAyIC8qIE1hcCAqLyA6IGlzU2V0KHRoaW5nKSA/IDMgLyogU2V0ICovIDogMCAvKiBPYmplY3QgKi87XG59XG5mdW5jdGlvbiBoYXModGhpbmcsIHByb3ApIHtcbiAgcmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gMiAvKiBNYXAgKi8gPyB0aGluZy5oYXMocHJvcCkgOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpbmcsIHByb3ApO1xufVxuZnVuY3Rpb24gZ2V0KHRoaW5nLCBwcm9wKSB7XG4gIHJldHVybiBnZXRBcmNodHlwZSh0aGluZykgPT09IDIgLyogTWFwICovID8gdGhpbmcuZ2V0KHByb3ApIDogdGhpbmdbcHJvcF07XG59XG5mdW5jdGlvbiBzZXQodGhpbmcsIHByb3BPck9sZFZhbHVlLCB2YWx1ZSkge1xuICBjb25zdCB0ID0gZ2V0QXJjaHR5cGUodGhpbmcpO1xuICBpZiAodCA9PT0gMiAvKiBNYXAgKi8pXG4gICAgdGhpbmcuc2V0KHByb3BPck9sZFZhbHVlLCB2YWx1ZSk7XG4gIGVsc2UgaWYgKHQgPT09IDMgLyogU2V0ICovKSB7XG4gICAgdGhpbmcuYWRkKHZhbHVlKTtcbiAgfSBlbHNlXG4gICAgdGhpbmdbcHJvcE9yT2xkVmFsdWVdID0gdmFsdWU7XG59XG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzTWFwKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgTWFwO1xufVxuZnVuY3Rpb24gaXNTZXQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBTZXQ7XG59XG5mdW5jdGlvbiBsYXRlc3Qoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLmNvcHlfIHx8IHN0YXRlLmJhc2VfO1xufVxuZnVuY3Rpb24gc2hhbGxvd0NvcHkoYmFzZSwgc3RyaWN0KSB7XG4gIGlmIChpc01hcChiYXNlKSkge1xuICAgIHJldHVybiBuZXcgTWFwKGJhc2UpO1xuICB9XG4gIGlmIChpc1NldChiYXNlKSkge1xuICAgIHJldHVybiBuZXcgU2V0KGJhc2UpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGJhc2UpKVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChiYXNlKTtcbiAgY29uc3QgaXNQbGFpbiA9IGlzUGxhaW5PYmplY3QoYmFzZSk7XG4gIGlmIChzdHJpY3QgPT09IHRydWUgfHwgc3RyaWN0ID09PSBcImNsYXNzX29ubHlcIiAmJiAhaXNQbGFpbikge1xuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYmFzZSk7XG4gICAgZGVsZXRlIGRlc2NyaXB0b3JzW0RSQUZUX1NUQVRFXTtcbiAgICBsZXQga2V5cyA9IFJlZmxlY3Qub3duS2V5cyhkZXNjcmlwdG9ycyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgY29uc3QgZGVzYyA9IGRlc2NyaXB0b3JzW2tleV07XG4gICAgICBpZiAoZGVzYy53cml0YWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChkZXNjLmdldCB8fCBkZXNjLnNldClcbiAgICAgICAgZGVzY3JpcHRvcnNba2V5XSA9IHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgLy8gY291bGQgbGl2ZSB3aXRoICEhZGVzYy5zZXQgYXMgd2VsbCBoZXJlLi4uXG4gICAgICAgICAgZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgICAgIHZhbHVlOiBiYXNlW2tleV1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoZ2V0UHJvdG90eXBlT2YoYmFzZSksIGRlc2NyaXB0b3JzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcm90byA9IGdldFByb3RvdHlwZU9mKGJhc2UpO1xuICAgIGlmIChwcm90byAhPT0gbnVsbCAmJiBpc1BsYWluKSB7XG4gICAgICByZXR1cm4geyAuLi5iYXNlIH07XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9iaiwgYmFzZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZyZWV6ZShvYmosIGRlZXAgPSBmYWxzZSkge1xuICBpZiAoaXNGcm96ZW4ob2JqKSB8fCBpc0RyYWZ0KG9iaikgfHwgIWlzRHJhZnRhYmxlKG9iaikpXG4gICAgcmV0dXJuIG9iajtcbiAgaWYgKGdldEFyY2h0eXBlKG9iaikgPiAxKSB7XG4gICAgb2JqLnNldCA9IG9iai5hZGQgPSBvYmouY2xlYXIgPSBvYmouZGVsZXRlID0gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zO1xuICB9XG4gIE9iamVjdC5mcmVlemUob2JqKTtcbiAgaWYgKGRlZXApXG4gICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IGZyZWV6ZSh2YWx1ZSwgdHJ1ZSkpO1xuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zKCkge1xuICBkaWUoMik7XG59XG5mdW5jdGlvbiBpc0Zyb3plbihvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5pc0Zyb3plbihvYmopO1xufVxuXG4vLyBzcmMvdXRpbHMvcGx1Z2lucy50c1xudmFyIHBsdWdpbnMgPSB7fTtcbmZ1bmN0aW9uIGdldFBsdWdpbihwbHVnaW5LZXkpIHtcbiAgY29uc3QgcGx1Z2luID0gcGx1Z2luc1twbHVnaW5LZXldO1xuICBpZiAoIXBsdWdpbikge1xuICAgIGRpZSgwLCBwbHVnaW5LZXkpO1xuICB9XG4gIHJldHVybiBwbHVnaW47XG59XG5mdW5jdGlvbiBsb2FkUGx1Z2luKHBsdWdpbktleSwgaW1wbGVtZW50YXRpb24pIHtcbiAgaWYgKCFwbHVnaW5zW3BsdWdpbktleV0pXG4gICAgcGx1Z2luc1twbHVnaW5LZXldID0gaW1wbGVtZW50YXRpb247XG59XG5cbi8vIHNyYy9jb3JlL3Njb3BlLnRzXG52YXIgY3VycmVudFNjb3BlO1xuZnVuY3Rpb24gZ2V0Q3VycmVudFNjb3BlKCkge1xuICByZXR1cm4gY3VycmVudFNjb3BlO1xufVxuZnVuY3Rpb24gY3JlYXRlU2NvcGUocGFyZW50XywgaW1tZXJfKSB7XG4gIHJldHVybiB7XG4gICAgZHJhZnRzXzogW10sXG4gICAgcGFyZW50XyxcbiAgICBpbW1lcl8sXG4gICAgLy8gV2hlbmV2ZXIgdGhlIG1vZGlmaWVkIGRyYWZ0IGNvbnRhaW5zIGEgZHJhZnQgZnJvbSBhbm90aGVyIHNjb3BlLCB3ZVxuICAgIC8vIG5lZWQgdG8gcHJldmVudCBhdXRvLWZyZWV6aW5nIHNvIHRoZSB1bm93bmVkIGRyYWZ0IGNhbiBiZSBmaW5hbGl6ZWQuXG4gICAgY2FuQXV0b0ZyZWV6ZV86IHRydWUsXG4gICAgdW5maW5hbGl6ZWREcmFmdHNfOiAwXG4gIH07XG59XG5mdW5jdGlvbiB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcikge1xuICBpZiAocGF0Y2hMaXN0ZW5lcikge1xuICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIik7XG4gICAgc2NvcGUucGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5pbnZlcnNlUGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5wYXRjaExpc3RlbmVyXyA9IHBhdGNoTGlzdGVuZXI7XG4gIH1cbn1cbmZ1bmN0aW9uIHJldm9rZVNjb3BlKHNjb3BlKSB7XG4gIGxlYXZlU2NvcGUoc2NvcGUpO1xuICBzY29wZS5kcmFmdHNfLmZvckVhY2gocmV2b2tlRHJhZnQpO1xuICBzY29wZS5kcmFmdHNfID0gbnVsbDtcbn1cbmZ1bmN0aW9uIGxlYXZlU2NvcGUoc2NvcGUpIHtcbiAgaWYgKHNjb3BlID09PSBjdXJyZW50U2NvcGUpIHtcbiAgICBjdXJyZW50U2NvcGUgPSBzY29wZS5wYXJlbnRfO1xuICB9XG59XG5mdW5jdGlvbiBlbnRlclNjb3BlKGltbWVyMikge1xuICByZXR1cm4gY3VycmVudFNjb3BlID0gY3JlYXRlU2NvcGUoY3VycmVudFNjb3BlLCBpbW1lcjIpO1xufVxuZnVuY3Rpb24gcmV2b2tlRHJhZnQoZHJhZnQpIHtcbiAgY29uc3Qgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG4gIGlmIChzdGF0ZS50eXBlXyA9PT0gMCAvKiBPYmplY3QgKi8gfHwgc3RhdGUudHlwZV8gPT09IDEgLyogQXJyYXkgKi8pXG4gICAgc3RhdGUucmV2b2tlXygpO1xuICBlbHNlXG4gICAgc3RhdGUucmV2b2tlZF8gPSB0cnVlO1xufVxuXG4vLyBzcmMvY29yZS9maW5hbGl6ZS50c1xuZnVuY3Rpb24gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKSB7XG4gIHNjb3BlLnVuZmluYWxpemVkRHJhZnRzXyA9IHNjb3BlLmRyYWZ0c18ubGVuZ3RoO1xuICBjb25zdCBiYXNlRHJhZnQgPSBzY29wZS5kcmFmdHNfWzBdO1xuICBjb25zdCBpc1JlcGxhY2VkID0gcmVzdWx0ICE9PSB2b2lkIDAgJiYgcmVzdWx0ICE9PSBiYXNlRHJhZnQ7XG4gIGlmIChpc1JlcGxhY2VkKSB7XG4gICAgaWYgKGJhc2VEcmFmdFtEUkFGVF9TVEFURV0ubW9kaWZpZWRfKSB7XG4gICAgICByZXZva2VTY29wZShzY29wZSk7XG4gICAgICBkaWUoNCk7XG4gICAgfVxuICAgIGlmIChpc0RyYWZ0YWJsZShyZXN1bHQpKSB7XG4gICAgICByZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgcmVzdWx0KTtcbiAgICAgIGlmICghc2NvcGUucGFyZW50XylcbiAgICAgICAgbWF5YmVGcmVlemUoc2NvcGUsIHJlc3VsdCk7XG4gICAgfVxuICAgIGlmIChzY29wZS5wYXRjaGVzXykge1xuICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oXG4gICAgICAgIGJhc2VEcmFmdFtEUkFGVF9TVEFURV0uYmFzZV8sXG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgc2NvcGUucGF0Y2hlc18sXG4gICAgICAgIHNjb3BlLmludmVyc2VQYXRjaGVzX1xuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIGJhc2VEcmFmdCwgW10pO1xuICB9XG4gIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgaWYgKHNjb3BlLnBhdGNoZXNfKSB7XG4gICAgc2NvcGUucGF0Y2hMaXN0ZW5lcl8oc2NvcGUucGF0Y2hlc18sIHNjb3BlLmludmVyc2VQYXRjaGVzXyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdCAhPT0gTk9USElORyA/IHJlc3VsdCA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGZpbmFsaXplKHJvb3RTY29wZSwgdmFsdWUsIHBhdGgpIHtcbiAgaWYgKGlzRnJvemVuKHZhbHVlKSlcbiAgICByZXR1cm4gdmFsdWU7XG4gIGNvbnN0IHN0YXRlID0gdmFsdWVbRFJBRlRfU1RBVEVdO1xuICBpZiAoIXN0YXRlKSB7XG4gICAgZWFjaChcbiAgICAgIHZhbHVlLFxuICAgICAgKGtleSwgY2hpbGRWYWx1ZSkgPT4gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCB2YWx1ZSwga2V5LCBjaGlsZFZhbHVlLCBwYXRoKVxuICAgICk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChzdGF0ZS5zY29wZV8gIT09IHJvb3RTY29wZSlcbiAgICByZXR1cm4gdmFsdWU7XG4gIGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG4gICAgbWF5YmVGcmVlemUocm9vdFNjb3BlLCBzdGF0ZS5iYXNlXywgdHJ1ZSk7XG4gICAgcmV0dXJuIHN0YXRlLmJhc2VfO1xuICB9XG4gIGlmICghc3RhdGUuZmluYWxpemVkXykge1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSB0cnVlO1xuICAgIHN0YXRlLnNjb3BlXy51bmZpbmFsaXplZERyYWZ0c18tLTtcbiAgICBjb25zdCByZXN1bHQgPSBzdGF0ZS5jb3B5XztcbiAgICBsZXQgcmVzdWx0RWFjaCA9IHJlc3VsdDtcbiAgICBsZXQgaXNTZXQyID0gZmFsc2U7XG4gICAgaWYgKHN0YXRlLnR5cGVfID09PSAzIC8qIFNldCAqLykge1xuICAgICAgcmVzdWx0RWFjaCA9IG5ldyBTZXQocmVzdWx0KTtcbiAgICAgIHJlc3VsdC5jbGVhcigpO1xuICAgICAgaXNTZXQyID0gdHJ1ZTtcbiAgICB9XG4gICAgZWFjaChcbiAgICAgIHJlc3VsdEVhY2gsXG4gICAgICAoa2V5LCBjaGlsZFZhbHVlKSA9PiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgc3RhdGUsIHJlc3VsdCwga2V5LCBjaGlsZFZhbHVlLCBwYXRoLCBpc1NldDIpXG4gICAgKTtcbiAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIHJlc3VsdCwgZmFsc2UpO1xuICAgIGlmIChwYXRoICYmIHJvb3RTY29wZS5wYXRjaGVzXykge1xuICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVBhdGNoZXNfKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcm9vdFNjb3BlLnBhdGNoZXNfLFxuICAgICAgICByb290U2NvcGUuaW52ZXJzZVBhdGNoZXNfXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGUuY29weV87XG59XG5mdW5jdGlvbiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgcGFyZW50U3RhdGUsIHRhcmdldE9iamVjdCwgcHJvcCwgY2hpbGRWYWx1ZSwgcm9vdFBhdGgsIHRhcmdldElzU2V0KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgY2hpbGRWYWx1ZSA9PT0gdGFyZ2V0T2JqZWN0KVxuICAgIGRpZSg1KTtcbiAgaWYgKGlzRHJhZnQoY2hpbGRWYWx1ZSkpIHtcbiAgICBjb25zdCBwYXRoID0gcm9vdFBhdGggJiYgcGFyZW50U3RhdGUgJiYgcGFyZW50U3RhdGUudHlwZV8gIT09IDMgLyogU2V0ICovICYmIC8vIFNldCBvYmplY3RzIGFyZSBhdG9taWMgc2luY2UgdGhleSBoYXZlIG5vIGtleXMuXG4gICAgIWhhcyhwYXJlbnRTdGF0ZS5hc3NpZ25lZF8sIHByb3ApID8gcm9vdFBhdGguY29uY2F0KHByb3ApIDogdm9pZCAwO1xuICAgIGNvbnN0IHJlcyA9IGZpbmFsaXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSwgcGF0aCk7XG4gICAgc2V0KHRhcmdldE9iamVjdCwgcHJvcCwgcmVzKTtcbiAgICBpZiAoaXNEcmFmdChyZXMpKSB7XG4gICAgICByb290U2NvcGUuY2FuQXV0b0ZyZWV6ZV8gPSBmYWxzZTtcbiAgICB9IGVsc2VcbiAgICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICh0YXJnZXRJc1NldCkge1xuICAgIHRhcmdldE9iamVjdC5hZGQoY2hpbGRWYWx1ZSk7XG4gIH1cbiAgaWYgKGlzRHJhZnRhYmxlKGNoaWxkVmFsdWUpICYmICFpc0Zyb3plbihjaGlsZFZhbHVlKSkge1xuICAgIGlmICghcm9vdFNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiByb290U2NvcGUudW5maW5hbGl6ZWREcmFmdHNfIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpO1xuICAgIGlmICgoIXBhcmVudFN0YXRlIHx8ICFwYXJlbnRTdGF0ZS5zY29wZV8ucGFyZW50XykgJiYgdHlwZW9mIHByb3AgIT09IFwic3ltYm9sXCIgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRhcmdldE9iamVjdCwgcHJvcCkpXG4gICAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiBtYXliZUZyZWV6ZShzY29wZSwgdmFsdWUsIGRlZXAgPSBmYWxzZSkge1xuICBpZiAoIXNjb3BlLnBhcmVudF8gJiYgc2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHNjb3BlLmNhbkF1dG9GcmVlemVfKSB7XG4gICAgZnJlZXplKHZhbHVlLCBkZWVwKTtcbiAgfVxufVxuXG4vLyBzcmMvY29yZS9wcm94eS50c1xuZnVuY3Rpb24gY3JlYXRlUHJveHlQcm94eShiYXNlLCBwYXJlbnQpIHtcbiAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYmFzZSk7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIHR5cGVfOiBpc0FycmF5ID8gMSAvKiBBcnJheSAqLyA6IDAgLyogT2JqZWN0ICovLFxuICAgIC8vIFRyYWNrIHdoaWNoIHByb2R1Y2UgY2FsbCB0aGlzIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAvLyBUcnVlIGZvciBib3RoIHNoYWxsb3cgYW5kIGRlZXAgY2hhbmdlcy5cbiAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgIC8vIFVzZWQgZHVyaW5nIGZpbmFsaXphdGlvbi5cbiAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAvLyBUcmFjayB3aGljaCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBhc3NpZ25lZCAodHJ1ZSkgb3IgZGVsZXRlZCAoZmFsc2UpLlxuICAgIGFzc2lnbmVkXzoge30sXG4gICAgLy8gVGhlIHBhcmVudCBkcmFmdCBzdGF0ZS5cbiAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgLy8gVGhlIGJhc2Ugc3RhdGUuXG4gICAgYmFzZV86IGJhc2UsXG4gICAgLy8gVGhlIGJhc2UgcHJveHkuXG4gICAgZHJhZnRfOiBudWxsLFxuICAgIC8vIHNldCBiZWxvd1xuICAgIC8vIFRoZSBiYXNlIGNvcHkgd2l0aCBhbnkgdXBkYXRlZCB2YWx1ZXMuXG4gICAgY29weV86IG51bGwsXG4gICAgLy8gQ2FsbGVkIGJ5IHRoZSBgcHJvZHVjZWAgZnVuY3Rpb24uXG4gICAgcmV2b2tlXzogbnVsbCxcbiAgICBpc01hbnVhbF86IGZhbHNlXG4gIH07XG4gIGxldCB0YXJnZXQgPSBzdGF0ZTtcbiAgbGV0IHRyYXBzID0gb2JqZWN0VHJhcHM7XG4gIGlmIChpc0FycmF5KSB7XG4gICAgdGFyZ2V0ID0gW3N0YXRlXTtcbiAgICB0cmFwcyA9IGFycmF5VHJhcHM7XG4gIH1cbiAgY29uc3QgeyByZXZva2UsIHByb3h5IH0gPSBQcm94eS5yZXZvY2FibGUodGFyZ2V0LCB0cmFwcyk7XG4gIHN0YXRlLmRyYWZ0XyA9IHByb3h5O1xuICBzdGF0ZS5yZXZva2VfID0gcmV2b2tlO1xuICByZXR1cm4gcHJveHk7XG59XG52YXIgb2JqZWN0VHJhcHMgPSB7XG4gIGdldChzdGF0ZSwgcHJvcCkge1xuICAgIGlmIChwcm9wID09PSBEUkFGVF9TVEFURSlcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICBjb25zdCBzb3VyY2UgPSBsYXRlc3Qoc3RhdGUpO1xuICAgIGlmICghaGFzKHNvdXJjZSwgcHJvcCkpIHtcbiAgICAgIHJldHVybiByZWFkUHJvcEZyb21Qcm90byhzdGF0ZSwgc291cmNlLCBwcm9wKTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBzb3VyY2VbcHJvcF07XG4gICAgaWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApKSB7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV9bcHJvcF0gPSBjcmVhdGVQcm94eSh2YWx1ZSwgc3RhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIGhhcyhzdGF0ZSwgcHJvcCkge1xuICAgIHJldHVybiBwcm9wIGluIGxhdGVzdChzdGF0ZSk7XG4gIH0sXG4gIG93bktleXMoc3RhdGUpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKGxhdGVzdChzdGF0ZSkpO1xuICB9LFxuICBzZXQoc3RhdGUsIHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgZGVzYyA9IGdldERlc2NyaXB0b3JGcm9tUHJvdG8obGF0ZXN0KHN0YXRlKSwgcHJvcCk7XG4gICAgaWYgKGRlc2M/LnNldCkge1xuICAgICAgZGVzYy5zZXQuY2FsbChzdGF0ZS5kcmFmdF8sIHZhbHVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgICAgY29uc3QgY3VycmVudDIgPSBwZWVrKGxhdGVzdChzdGF0ZSksIHByb3ApO1xuICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gY3VycmVudDI/LltEUkFGVF9TVEFURV07XG4gICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5iYXNlXyA9PT0gdmFsdWUpIHtcbiAgICAgICAgc3RhdGUuY29weV9bcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzKHZhbHVlLCBjdXJyZW50MikgJiYgKHZhbHVlICE9PSB2b2lkIDAgfHwgaGFzKHN0YXRlLmJhc2VfLCBwcm9wKSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY29weV9bcHJvcF0gPT09IHZhbHVlICYmIC8vIHNwZWNpYWwgY2FzZTogaGFuZGxlIG5ldyBwcm9wcyB3aXRoIHZhbHVlICd1bmRlZmluZWQnXG4gICAgKHZhbHVlICE9PSB2b2lkIDAgfHwgcHJvcCBpbiBzdGF0ZS5jb3B5XykgfHwgLy8gc3BlY2lhbCBjYXNlOiBOYU5cbiAgICBOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc05hTihzdGF0ZS5jb3B5X1twcm9wXSkpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBzdGF0ZS5jb3B5X1twcm9wXSA9IHZhbHVlO1xuICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5KHN0YXRlLCBwcm9wKSB7XG4gICAgaWYgKHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApICE9PSB2b2lkIDAgfHwgcHJvcCBpbiBzdGF0ZS5iYXNlXykge1xuICAgICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gZmFsc2U7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZS5hc3NpZ25lZF9bcHJvcF07XG4gICAgfVxuICAgIGlmIChzdGF0ZS5jb3B5Xykge1xuICAgICAgZGVsZXRlIHN0YXRlLmNvcHlfW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgLy8gTm90ZTogV2UgbmV2ZXIgY29lcmNlIGBkZXNjLnZhbHVlYCBpbnRvIGFuIEltbWVyIGRyYWZ0LCBiZWNhdXNlIHdlIGNhbid0IG1ha2VcbiAgLy8gdGhlIHNhbWUgZ3VhcmFudGVlIGluIEVTNSBtb2RlLlxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3RhdGUsIHByb3ApIHtcbiAgICBjb25zdCBvd25lciA9IGxhdGVzdChzdGF0ZSk7XG4gICAgY29uc3QgZGVzYyA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG93bmVyLCBwcm9wKTtcbiAgICBpZiAoIWRlc2MpXG4gICAgICByZXR1cm4gZGVzYztcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHN0YXRlLnR5cGVfICE9PSAxIC8qIEFycmF5ICovIHx8IHByb3AgIT09IFwibGVuZ3RoXCIsXG4gICAgICBlbnVtZXJhYmxlOiBkZXNjLmVudW1lcmFibGUsXG4gICAgICB2YWx1ZTogb3duZXJbcHJvcF1cbiAgICB9O1xuICB9LFxuICBkZWZpbmVQcm9wZXJ0eSgpIHtcbiAgICBkaWUoMTEpO1xuICB9LFxuICBnZXRQcm90b3R5cGVPZihzdGF0ZSkge1xuICAgIHJldHVybiBnZXRQcm90b3R5cGVPZihzdGF0ZS5iYXNlXyk7XG4gIH0sXG4gIHNldFByb3RvdHlwZU9mKCkge1xuICAgIGRpZSgxMik7XG4gIH1cbn07XG52YXIgYXJyYXlUcmFwcyA9IHt9O1xuZWFjaChvYmplY3RUcmFwcywgKGtleSwgZm4pID0+IHtcbiAgYXJyYXlUcmFwc1trZXldID0gZnVuY3Rpb24oKSB7XG4gICAgYXJndW1lbnRzWzBdID0gYXJndW1lbnRzWzBdWzBdO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSk7XG5hcnJheVRyYXBzLmRlbGV0ZVByb3BlcnR5ID0gZnVuY3Rpb24oc3RhdGUsIHByb3ApIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc05hTihwYXJzZUludChwcm9wKSkpXG4gICAgZGllKDEzKTtcbiAgcmV0dXJuIGFycmF5VHJhcHMuc2V0LmNhbGwodGhpcywgc3RhdGUsIHByb3AsIHZvaWQgMCk7XG59O1xuYXJyYXlUcmFwcy5zZXQgPSBmdW5jdGlvbihzdGF0ZSwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBwcm9wICE9PSBcImxlbmd0aFwiICYmIGlzTmFOKHBhcnNlSW50KHByb3ApKSlcbiAgICBkaWUoMTQpO1xuICByZXR1cm4gb2JqZWN0VHJhcHMuc2V0LmNhbGwodGhpcywgc3RhdGVbMF0sIHByb3AsIHZhbHVlLCBzdGF0ZVswXSk7XG59O1xuZnVuY3Rpb24gcGVlayhkcmFmdCwgcHJvcCkge1xuICBjb25zdCBzdGF0ZSA9IGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgY29uc3Qgc291cmNlID0gc3RhdGUgPyBsYXRlc3Qoc3RhdGUpIDogZHJhZnQ7XG4gIHJldHVybiBzb3VyY2VbcHJvcF07XG59XG5mdW5jdGlvbiByZWFkUHJvcEZyb21Qcm90byhzdGF0ZSwgc291cmNlLCBwcm9wKSB7XG4gIGNvbnN0IGRlc2MgPSBnZXREZXNjcmlwdG9yRnJvbVByb3RvKHNvdXJjZSwgcHJvcCk7XG4gIHJldHVybiBkZXNjID8gYHZhbHVlYCBpbiBkZXNjID8gZGVzYy52YWx1ZSA6IChcbiAgICAvLyBUaGlzIGlzIGEgdmVyeSBzcGVjaWFsIGNhc2UsIGlmIHRoZSBwcm9wIGlzIGEgZ2V0dGVyIGRlZmluZWQgYnkgdGhlXG4gICAgLy8gcHJvdG90eXBlLCB3ZSBzaG91bGQgaW52b2tlIGl0IHdpdGggdGhlIGRyYWZ0IGFzIGNvbnRleHQhXG4gICAgZGVzYy5nZXQ/LmNhbGwoc3RhdGUuZHJhZnRfKVxuICApIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApIHtcbiAgaWYgKCEocHJvcCBpbiBzb3VyY2UpKVxuICAgIHJldHVybiB2b2lkIDA7XG4gIGxldCBwcm90byA9IGdldFByb3RvdHlwZU9mKHNvdXJjZSk7XG4gIHdoaWxlIChwcm90bykge1xuICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm9wKTtcbiAgICBpZiAoZGVzYylcbiAgICAgIHJldHVybiBkZXNjO1xuICAgIHByb3RvID0gZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG5mdW5jdGlvbiBtYXJrQ2hhbmdlZChzdGF0ZSkge1xuICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgIHN0YXRlLm1vZGlmaWVkXyA9IHRydWU7XG4gICAgaWYgKHN0YXRlLnBhcmVudF8pIHtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlLnBhcmVudF8pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gcHJlcGFyZUNvcHkoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgIHN0YXRlLmNvcHlfID0gc2hhbGxvd0NvcHkoXG4gICAgICBzdGF0ZS5iYXNlXyxcbiAgICAgIHN0YXRlLnNjb3BlXy5pbW1lcl8udXNlU3RyaWN0U2hhbGxvd0NvcHlfXG4gICAgKTtcbiAgfVxufVxuXG4vLyBzcmMvY29yZS9pbW1lckNsYXNzLnRzXG52YXIgSW1tZXIyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmF1dG9GcmVlemVfID0gdHJ1ZTtcbiAgICB0aGlzLnVzZVN0cmljdFNoYWxsb3dDb3B5XyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoZSBgcHJvZHVjZWAgZnVuY3Rpb24gdGFrZXMgYSB2YWx1ZSBhbmQgYSBcInJlY2lwZSBmdW5jdGlvblwiICh3aG9zZVxuICAgICAqIHJldHVybiB2YWx1ZSBvZnRlbiBkZXBlbmRzIG9uIHRoZSBiYXNlIHN0YXRlKS4gVGhlIHJlY2lwZSBmdW5jdGlvbiBpc1xuICAgICAqIGZyZWUgdG8gbXV0YXRlIGl0cyBmaXJzdCBhcmd1bWVudCBob3dldmVyIGl0IHdhbnRzLiBBbGwgbXV0YXRpb25zIGFyZVxuICAgICAqIG9ubHkgZXZlciBhcHBsaWVkIHRvIGEgX19jb3B5X18gb2YgdGhlIGJhc2Ugc3RhdGUuXG4gICAgICpcbiAgICAgKiBQYXNzIG9ubHkgYSBmdW5jdGlvbiB0byBjcmVhdGUgYSBcImN1cnJpZWQgcHJvZHVjZXJcIiB3aGljaCByZWxpZXZlcyB5b3VcbiAgICAgKiBmcm9tIHBhc3NpbmcgdGhlIHJlY2lwZSBmdW5jdGlvbiBldmVyeSB0aW1lLlxuICAgICAqXG4gICAgICogT25seSBwbGFpbiBvYmplY3RzIGFuZCBhcnJheXMgYXJlIG1hZGUgbXV0YWJsZS4gQWxsIG90aGVyIG9iamVjdHMgYXJlXG4gICAgICogY29uc2lkZXJlZCB1bmNvcHlhYmxlLlxuICAgICAqXG4gICAgICogTm90ZTogVGhpcyBmdW5jdGlvbiBpcyBfX2JvdW5kX18gdG8gaXRzIGBJbW1lcmAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gYmFzZSAtIHRoZSBpbml0aWFsIHN0YXRlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVjaXBlIC0gZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIHByb3h5IG9mIHRoZSBiYXNlIHN0YXRlIGFzIGZpcnN0IGFyZ3VtZW50IGFuZCB3aGljaCBjYW4gYmUgZnJlZWx5IG1vZGlmaWVkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcGF0Y2hMaXN0ZW5lciAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCBhbGwgdGhlIHBhdGNoZXMgcHJvZHVjZWQgaGVyZVxuICAgICAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxuICAgICAqL1xuICAgIHRoaXMucHJvZHVjZSA9IChiYXNlLCByZWNpcGUsIHBhdGNoTGlzdGVuZXIpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjb25zdCBkZWZhdWx0QmFzZSA9IHJlY2lwZTtcbiAgICAgICAgcmVjaXBlID0gYmFzZTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkUHJvZHVjZShiYXNlMiA9IGRlZmF1bHRCYXNlLCAuLi5hcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYucHJvZHVjZShiYXNlMiwgKGRyYWZ0KSA9PiByZWNpcGUuY2FsbCh0aGlzLCBkcmFmdCwgLi4uYXJncykpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZGllKDYpO1xuICAgICAgaWYgKHBhdGNoTGlzdGVuZXIgIT09IHZvaWQgMCAmJiB0eXBlb2YgcGF0Y2hMaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBkaWUoNyk7XG4gICAgICBsZXQgcmVzdWx0O1xuICAgICAgaWYgKGlzRHJhZnRhYmxlKGJhc2UpKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gZW50ZXJTY29wZSh0aGlzKTtcbiAgICAgICAgY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShiYXNlLCB2b2lkIDApO1xuICAgICAgICBsZXQgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlY2lwZShwcm94eSk7XG4gICAgICAgICAgaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoaGFzRXJyb3IpXG4gICAgICAgICAgICByZXZva2VTY29wZShzY29wZSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgbGVhdmVTY29wZShzY29wZSk7XG4gICAgICAgIH1cbiAgICAgICAgdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWJhc2UgfHwgdHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVjaXBlKGJhc2UpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApXG4gICAgICAgICAgcmVzdWx0ID0gYmFzZTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gTk9USElORylcbiAgICAgICAgICByZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIGlmICh0aGlzLmF1dG9GcmVlemVfKVxuICAgICAgICAgIGZyZWV6ZShyZXN1bHQsIHRydWUpO1xuICAgICAgICBpZiAocGF0Y2hMaXN0ZW5lcikge1xuICAgICAgICAgIGNvbnN0IHAgPSBbXTtcbiAgICAgICAgICBjb25zdCBpcCA9IFtdO1xuICAgICAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKGJhc2UsIHJlc3VsdCwgcCwgaXApO1xuICAgICAgICAgIHBhdGNoTGlzdGVuZXIocCwgaXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGVsc2VcbiAgICAgICAgZGllKDEsIGJhc2UpO1xuICAgIH07XG4gICAgdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMgPSAoYmFzZSwgcmVjaXBlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gKHN0YXRlLCAuLi5hcmdzKSA9PiB0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyhzdGF0ZSwgKGRyYWZ0KSA9PiBiYXNlKGRyYWZ0LCAuLi5hcmdzKSk7XG4gICAgICB9XG4gICAgICBsZXQgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXM7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb2R1Y2UoYmFzZSwgcmVjaXBlLCAocCwgaXApID0+IHtcbiAgICAgICAgcGF0Y2hlcyA9IHA7XG4gICAgICAgIGludmVyc2VQYXRjaGVzID0gaXA7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbcmVzdWx0LCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc107XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZz8uYXV0b0ZyZWV6ZSA9PT0gXCJib29sZWFuXCIpXG4gICAgICB0aGlzLnNldEF1dG9GcmVlemUoY29uZmlnLmF1dG9GcmVlemUpO1xuICAgIGlmICh0eXBlb2YgY29uZmlnPy51c2VTdHJpY3RTaGFsbG93Q29weSA9PT0gXCJib29sZWFuXCIpXG4gICAgICB0aGlzLnNldFVzZVN0cmljdFNoYWxsb3dDb3B5KGNvbmZpZy51c2VTdHJpY3RTaGFsbG93Q29weSk7XG4gIH1cbiAgY3JlYXRlRHJhZnQoYmFzZSkge1xuICAgIGlmICghaXNEcmFmdGFibGUoYmFzZSkpXG4gICAgICBkaWUoOCk7XG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpXG4gICAgICBiYXNlID0gY3VycmVudChiYXNlKTtcbiAgICBjb25zdCBzY29wZSA9IGVudGVyU2NvcGUodGhpcyk7XG4gICAgY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShiYXNlLCB2b2lkIDApO1xuICAgIHByb3h5W0RSQUZUX1NUQVRFXS5pc01hbnVhbF8gPSB0cnVlO1xuICAgIGxlYXZlU2NvcGUoc2NvcGUpO1xuICAgIHJldHVybiBwcm94eTtcbiAgfVxuICBmaW5pc2hEcmFmdChkcmFmdCwgcGF0Y2hMaXN0ZW5lcikge1xuICAgIGNvbnN0IHN0YXRlID0gZHJhZnQgJiYgZHJhZnRbRFJBRlRfU1RBVEVdO1xuICAgIGlmICghc3RhdGUgfHwgIXN0YXRlLmlzTWFudWFsXylcbiAgICAgIGRpZSg5KTtcbiAgICBjb25zdCB7IHNjb3BlXzogc2NvcGUgfSA9IHN0YXRlO1xuICAgIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKTtcbiAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdCh2b2lkIDAsIHNjb3BlKTtcbiAgfVxuICAvKipcbiAgICogUGFzcyB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgZnJlZXplIGFsbCBjb3BpZXMgY3JlYXRlZCBieSBJbW1lci5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYXV0by1mcmVlemluZyBpcyBlbmFibGVkLlxuICAgKi9cbiAgc2V0QXV0b0ZyZWV6ZSh2YWx1ZSkge1xuICAgIHRoaXMuYXV0b0ZyZWV6ZV8gPSB2YWx1ZTtcbiAgfVxuICAvKipcbiAgICogUGFzcyB0cnVlIHRvIGVuYWJsZSBzdHJpY3Qgc2hhbGxvdyBjb3B5LlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBpbW1lciBkb2VzIG5vdCBjb3B5IHRoZSBvYmplY3QgZGVzY3JpcHRvcnMgc3VjaCBhcyBnZXR0ZXIsIHNldHRlciBhbmQgbm9uLWVudW1yYWJsZSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkodmFsdWUpIHtcbiAgICB0aGlzLnVzZVN0cmljdFNoYWxsb3dDb3B5XyA9IHZhbHVlO1xuICB9XG4gIGFwcGx5UGF0Y2hlcyhiYXNlLCBwYXRjaGVzKSB7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gcGF0Y2hlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuICAgICAgaWYgKHBhdGNoLnBhdGgubGVuZ3RoID09PSAwICYmIHBhdGNoLm9wID09PSBcInJlcGxhY2VcIikge1xuICAgICAgICBiYXNlID0gcGF0Y2gudmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBwYXRjaGVzID0gcGF0Y2hlcy5zbGljZShpICsgMSk7XG4gICAgfVxuICAgIGNvbnN0IGFwcGx5UGF0Y2hlc0ltcGwgPSBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmFwcGx5UGF0Y2hlc187XG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpIHtcbiAgICAgIHJldHVybiBhcHBseVBhdGNoZXNJbXBsKGJhc2UsIHBhdGNoZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9kdWNlKFxuICAgICAgYmFzZSxcbiAgICAgIChkcmFmdCkgPT4gYXBwbHlQYXRjaGVzSW1wbChkcmFmdCwgcGF0Y2hlcylcbiAgICApO1xuICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlUHJveHkodmFsdWUsIHBhcmVudCkge1xuICBjb25zdCBkcmFmdCA9IGlzTWFwKHZhbHVlKSA/IGdldFBsdWdpbihcIk1hcFNldFwiKS5wcm94eU1hcF8odmFsdWUsIHBhcmVudCkgOiBpc1NldCh2YWx1ZSkgPyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlTZXRfKHZhbHVlLCBwYXJlbnQpIDogY3JlYXRlUHJveHlQcm94eSh2YWx1ZSwgcGFyZW50KTtcbiAgY29uc3Qgc2NvcGUgPSBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCk7XG4gIHNjb3BlLmRyYWZ0c18ucHVzaChkcmFmdCk7XG4gIHJldHVybiBkcmFmdDtcbn1cblxuLy8gc3JjL2NvcmUvY3VycmVudC50c1xuZnVuY3Rpb24gY3VycmVudCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnQodmFsdWUpKVxuICAgIGRpZSgxMCwgdmFsdWUpO1xuICByZXR1cm4gY3VycmVudEltcGwodmFsdWUpO1xufVxuZnVuY3Rpb24gY3VycmVudEltcGwodmFsdWUpIHtcbiAgaWYgKCFpc0RyYWZ0YWJsZSh2YWx1ZSkgfHwgaXNGcm96ZW4odmFsdWUpKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgY29uc3Qgc3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV07XG4gIGxldCBjb3B5O1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLm1vZGlmaWVkXylcbiAgICAgIHJldHVybiBzdGF0ZS5iYXNlXztcbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gdHJ1ZTtcbiAgICBjb3B5ID0gc2hhbGxvd0NvcHkodmFsdWUsIHN0YXRlLnNjb3BlXy5pbW1lcl8udXNlU3RyaWN0U2hhbGxvd0NvcHlfKTtcbiAgfSBlbHNlIHtcbiAgICBjb3B5ID0gc2hhbGxvd0NvcHkodmFsdWUsIHRydWUpO1xuICB9XG4gIGVhY2goY29weSwgKGtleSwgY2hpbGRWYWx1ZSkgPT4ge1xuICAgIHNldChjb3B5LCBrZXksIGN1cnJlbnRJbXBsKGNoaWxkVmFsdWUpKTtcbiAgfSk7XG4gIGlmIChzdGF0ZSkge1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gY29weTtcbn1cblxuLy8gc3JjL3BsdWdpbnMvcGF0Y2hlcy50c1xuZnVuY3Rpb24gZW5hYmxlUGF0Y2hlcygpIHtcbiAgY29uc3QgZXJyb3JPZmZzZXQgPSAxNjtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGVycm9ycy5wdXNoKFxuICAgICAgJ1NldHMgY2Fubm90IGhhdmUgXCJyZXBsYWNlXCIgcGF0Y2hlcy4nLFxuICAgICAgZnVuY3Rpb24ob3ApIHtcbiAgICAgICAgcmV0dXJuIFwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIiArIG9wO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIgKyBwYXRoO1xuICAgICAgfSxcbiAgICAgIFwiUGF0Y2hpbmcgcmVzZXJ2ZWQgYXR0cmlidXRlcyBsaWtlIF9fcHJvdG9fXywgcHJvdG90eXBlIGFuZCBjb25zdHJ1Y3RvciBpcyBub3QgYWxsb3dlZFwiXG4gICAgKTtcbiAgfVxuICBjb25zdCBSRVBMQUNFID0gXCJyZXBsYWNlXCI7XG4gIGNvbnN0IEFERCA9IFwiYWRkXCI7XG4gIGNvbnN0IFJFTU9WRSA9IFwicmVtb3ZlXCI7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGF0Y2hlc18oc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHN3aXRjaCAoc3RhdGUudHlwZV8pIHtcbiAgICAgIGNhc2UgMCAvKiBPYmplY3QgKi86XG4gICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkKFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGJhc2VQYXRoLFxuICAgICAgICAgIHBhdGNoZXMsXG4gICAgICAgICAgaW52ZXJzZVBhdGNoZXNcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgMSAvKiBBcnJheSAqLzpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlQXJyYXlQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpO1xuICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlU2V0UGF0Y2hlcyhcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICBwYXRjaGVzLFxuICAgICAgICAgIGludmVyc2VQYXRjaGVzXG4gICAgICAgICk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlQXJyYXlQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBsZXQgeyBiYXNlXywgYXNzaWduZWRfIH0gPSBzdGF0ZTtcbiAgICBsZXQgY29weV8gPSBzdGF0ZS5jb3B5XztcbiAgICBpZiAoY29weV8ubGVuZ3RoIDwgYmFzZV8ubGVuZ3RoKSB7XG4gICAgICA7XG4gICAgICBbYmFzZV8sIGNvcHlfXSA9IFtjb3B5XywgYmFzZV9dO1xuICAgICAgW3BhdGNoZXMsIGludmVyc2VQYXRjaGVzXSA9IFtpbnZlcnNlUGF0Y2hlcywgcGF0Y2hlc107XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZV8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhc3NpZ25lZF9baV0gJiYgY29weV9baV0gIT09IGJhc2VfW2ldKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVQTEFDRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIC8vIE5lZWQgdG8gbWF5YmUgY2xvbmUgaXQsIGFzIGl0IGNhbiBpbiBmYWN0IGJlIHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAgIC8vIGR1ZSB0byB0aGUgYmFzZS9jb3B5IGludmVyc2lvbiBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvblxuICAgICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChjb3B5X1tpXSlcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGJhc2VfW2ldKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IGJhc2VfLmxlbmd0aDsgaSA8IGNvcHlfLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogQURELFxuICAgICAgICBwYXRoLFxuICAgICAgICAvLyBOZWVkIHRvIG1heWJlIGNsb25lIGl0LCBhcyBpdCBjYW4gaW4gZmFjdCBiZSB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgLy8gZHVlIHRvIHRoZSBiYXNlL2NvcHkgaW52ZXJzaW9uIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uXG4gICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChjb3B5X1tpXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gY29weV8ubGVuZ3RoIC0gMTsgYmFzZV8ubGVuZ3RoIDw9IGk7IC0taSkge1xuICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgIHBhdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIGNvbnN0IHsgYmFzZV8sIGNvcHlfIH0gPSBzdGF0ZTtcbiAgICBlYWNoKHN0YXRlLmFzc2lnbmVkXywgKGtleSwgYXNzaWduZWRWYWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ1ZhbHVlID0gZ2V0KGJhc2VfLCBrZXkpO1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXQoY29weV8sIGtleSk7XG4gICAgICBjb25zdCBvcCA9ICFhc3NpZ25lZFZhbHVlID8gUkVNT1ZFIDogaGFzKGJhc2VfLCBrZXkpID8gUkVQTEFDRSA6IEFERDtcbiAgICAgIGlmIChvcmlnVmFsdWUgPT09IHZhbHVlICYmIG9wID09PSBSRVBMQUNFKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KGtleSk7XG4gICAgICBwYXRjaGVzLnB1c2gob3AgPT09IFJFTU9WRSA/IHsgb3AsIHBhdGggfSA6IHsgb3AsIHBhdGgsIHZhbHVlIH0pO1xuICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaChcbiAgICAgICAgb3AgPT09IEFERCA/IHsgb3A6IFJFTU9WRSwgcGF0aCB9IDogb3AgPT09IFJFTU9WRSA/IHsgb3A6IEFERCwgcGF0aCwgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9yaWdWYWx1ZSkgfSA6IHsgb3A6IFJFUExBQ0UsIHBhdGgsIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvcmlnVmFsdWUpIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVTZXRQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBsZXQgeyBiYXNlXywgY29weV8gfSA9IHN0YXRlO1xuICAgIGxldCBpID0gMDtcbiAgICBiYXNlXy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCFjb3B5Xy5oYXModmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuICAgICAgICAgIG9wOiBBREQsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgICBpID0gMDtcbiAgICBjb3B5Xy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCFiYXNlXy5oYXModmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogQURELFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuICAgICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oYmFzZVZhbHVlLCByZXBsYWNlbWVudCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICBwYXRoOiBbXSxcbiAgICAgIHZhbHVlOiByZXBsYWNlbWVudCA9PT0gTk9USElORyA/IHZvaWQgMCA6IHJlcGxhY2VtZW50XG4gICAgfSk7XG4gICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICBvcDogUkVQTEFDRSxcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgdmFsdWU6IGJhc2VWYWx1ZVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFwcGx5UGF0Y2hlc18oZHJhZnQsIHBhdGNoZXMpIHtcbiAgICBwYXRjaGVzLmZvckVhY2goKHBhdGNoKSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGgsIG9wIH0gPSBwYXRjaDtcbiAgICAgIGxldCBiYXNlID0gZHJhZnQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudFR5cGUgPSBnZXRBcmNodHlwZShiYXNlKTtcbiAgICAgICAgbGV0IHAgPSBwYXRoW2ldO1xuICAgICAgICBpZiAodHlwZW9mIHAgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHAgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBwID0gXCJcIiArIHA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChwYXJlbnRUeXBlID09PSAwIC8qIE9iamVjdCAqLyB8fCBwYXJlbnRUeXBlID09PSAxIC8qIEFycmF5ICovKSAmJiAocCA9PT0gXCJfX3Byb3RvX19cIiB8fCBwID09PSBcImNvbnN0cnVjdG9yXCIpKVxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDMpO1xuICAgICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIiAmJiBwID09PSBcInByb3RvdHlwZVwiKVxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDMpO1xuICAgICAgICBiYXNlID0gZ2V0KGJhc2UsIHApO1xuICAgICAgICBpZiAodHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMiwgcGF0aC5qb2luKFwiL1wiKSk7XG4gICAgICB9XG4gICAgICBjb25zdCB0eXBlID0gZ2V0QXJjaHR5cGUoYmFzZSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRlZXBDbG9uZVBhdGNoVmFsdWUocGF0Y2gudmFsdWUpO1xuICAgICAgY29uc3Qga2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICBjYXNlIFJFUExBQ0U6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIDMgLyogU2V0ICovOlxuICAgICAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Vba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBBREQ6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDEgLyogQXJyYXkgKi86XG4gICAgICAgICAgICAgIHJldHVybiBrZXkgPT09IFwiLVwiID8gYmFzZS5wdXNoKHZhbHVlKSA6IGJhc2Uuc3BsaWNlKGtleSwgMCwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuYWRkKHZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgUkVNT1ZFOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxIC8qIEFycmF5ICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuZGVsZXRlKHBhdGNoLnZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBkZWxldGUgYmFzZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAxLCBvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRyYWZ0O1xuICB9XG4gIGZ1bmN0aW9uIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKSB7XG4gICAgaWYgKCFpc0RyYWZ0YWJsZShvYmopKVxuICAgICAgcmV0dXJuIG9iajtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKVxuICAgICAgcmV0dXJuIG9iai5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSk7XG4gICAgaWYgKGlzTWFwKG9iaikpXG4gICAgICByZXR1cm4gbmV3IE1hcChcbiAgICAgICAgQXJyYXkuZnJvbShvYmouZW50cmllcygpKS5tYXAoKFtrLCB2XSkgPT4gW2ssIGRlZXBDbG9uZVBhdGNoVmFsdWUodildKVxuICAgICAgKTtcbiAgICBpZiAoaXNTZXQob2JqKSlcbiAgICAgIHJldHVybiBuZXcgU2V0KEFycmF5LmZyb20ob2JqKS5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSkpO1xuICAgIGNvbnN0IGNsb25lZCA9IE9iamVjdC5jcmVhdGUoZ2V0UHJvdG90eXBlT2Yob2JqKSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKVxuICAgICAgY2xvbmVkW2tleV0gPSBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9ialtrZXldKTtcbiAgICBpZiAoaGFzKG9iaiwgRFJBRlRBQkxFKSlcbiAgICAgIGNsb25lZFtEUkFGVEFCTEVdID0gb2JqW0RSQUZUQUJMRV07XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuICBmdW5jdGlvbiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvYmopIHtcbiAgICBpZiAoaXNEcmFmdChvYmopKSB7XG4gICAgICByZXR1cm4gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmopO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIG9iajtcbiAgfVxuICBsb2FkUGx1Z2luKFwiUGF0Y2hlc1wiLCB7XG4gICAgYXBwbHlQYXRjaGVzXyxcbiAgICBnZW5lcmF0ZVBhdGNoZXNfLFxuICAgIGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzX1xuICB9KTtcbn1cblxuLy8gc3JjL3BsdWdpbnMvbWFwc2V0LnRzXG5mdW5jdGlvbiBlbmFibGVNYXBTZXQoKSB7XG4gIGNsYXNzIERyYWZ0TWFwIGV4dGVuZHMgTWFwIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuICAgICAgICB0eXBlXzogMiAvKiBNYXAgKi8sXG4gICAgICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAgICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgICAgICBjb3B5Xzogdm9pZCAwLFxuICAgICAgICBhc3NpZ25lZF86IHZvaWQgMCxcbiAgICAgICAgYmFzZV86IHRhcmdldCxcbiAgICAgICAgZHJhZnRfOiB0aGlzLFxuICAgICAgICBpc01hbnVhbF86IGZhbHNlLFxuICAgICAgICByZXZva2VkXzogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZTtcbiAgICB9XG4gICAgaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuaGFzKGtleSk7XG4gICAgfVxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGlmICghbGF0ZXN0KHN0YXRlKS5oYXMoa2V5KSB8fCBsYXRlc3Qoc3RhdGUpLmdldChrZXkpICE9PSB2YWx1ZSkge1xuICAgICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIHRydWUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWxldGUoa2V5KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICBpZiAoc3RhdGUuYmFzZV8uaGFzKGtleSkpIHtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5kZWxldGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmNvcHlfLmRlbGV0ZShrZXkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAobGF0ZXN0KHN0YXRlKS5zaXplKSB7XG4gICAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgICBlYWNoKHN0YXRlLmJhc2VfLCAoa2V5KSA9PiB7XG4gICAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvckVhY2goY2IsIHRoaXNBcmcpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBsYXRlc3Qoc3RhdGUpLmZvckVhY2goKF92YWx1ZSwga2V5LCBfbWFwKSA9PiB7XG4gICAgICAgIGNiLmNhbGwodGhpc0FyZywgdGhpcy5nZXQoa2V5KSwga2V5LCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gbGF0ZXN0KHN0YXRlKS5nZXQoa2V5KTtcbiAgICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZS5iYXNlXy5nZXQoa2V5KSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICBjb25zdCBkcmFmdCA9IGNyZWF0ZVByb3h5KHZhbHVlLCBzdGF0ZSk7XG4gICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICBzdGF0ZS5jb3B5Xy5zZXQoa2V5LCBkcmFmdCk7XG4gICAgICByZXR1cm4gZHJhZnQ7XG4gICAgfVxuICAgIGtleXMoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5rZXlzKCk7XG4gICAgfVxuICAgIHZhbHVlcygpIHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpcy5rZXlzKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4gdGhpcy52YWx1ZXMoKSxcbiAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHIgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHIuZG9uZSlcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoci52YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBlbnRyaWVzKCkge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLmtleXMoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB0aGlzLmVudHJpZXMoKSxcbiAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHIgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHIuZG9uZSlcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoci52YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IFtyLnZhbHVlLCB2YWx1ZV1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBbKERSQUZUX1NUQVRFLCBTeW1ib2wuaXRlcmF0b3IpXSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHJveHlNYXBfKHRhcmdldCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFmdE1hcCh0YXJnZXQsIHBhcmVudCk7XG4gIH1cbiAgZnVuY3Rpb24gcHJlcGFyZU1hcENvcHkoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICBzdGF0ZS5hc3NpZ25lZF8gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgc3RhdGUuY29weV8gPSBuZXcgTWFwKHN0YXRlLmJhc2VfKTtcbiAgICB9XG4gIH1cbiAgY2xhc3MgRHJhZnRTZXQgZXh0ZW5kcyBTZXQge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpc1tEUkFGVF9TVEFURV0gPSB7XG4gICAgICAgIHR5cGVfOiAzIC8qIFNldCAqLyxcbiAgICAgICAgcGFyZW50XzogcGFyZW50LFxuICAgICAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAgICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAgICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgICAgIGNvcHlfOiB2b2lkIDAsXG4gICAgICAgIGJhc2VfOiB0YXJnZXQsXG4gICAgICAgIGRyYWZ0XzogdGhpcyxcbiAgICAgICAgZHJhZnRzXzogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcbiAgICAgICAgcmV2b2tlZF86IGZhbHNlLFxuICAgICAgICBpc01hbnVhbF86IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLnNpemU7XG4gICAgfVxuICAgIGhhcyh2YWx1ZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5iYXNlXy5oYXModmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLmNvcHlfLmhhcyh2YWx1ZSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKSAmJiBzdGF0ZS5jb3B5Xy5oYXMoc3RhdGUuZHJhZnRzXy5nZXQodmFsdWUpKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuY29weV8uYWRkKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWxldGUodmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLmRlbGV0ZSh2YWx1ZSkgfHwgKHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKSA/IHN0YXRlLmNvcHlfLmRlbGV0ZShzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpIDogKFxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBmYWxzZVxuICAgICAgKSk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAobGF0ZXN0KHN0YXRlKS5zaXplKSB7XG4gICAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5Xy52YWx1ZXMoKTtcbiAgICB9XG4gICAgZW50cmllcygpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLmVudHJpZXMoKTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH1cbiAgICBbKERSQUZUX1NUQVRFLCBTeW1ib2wuaXRlcmF0b3IpXSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH1cbiAgICBmb3JFYWNoKGNiLCB0aGlzQXJnKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXMudmFsdWVzKCk7XG4gICAgICBsZXQgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgICAgICBjYi5jYWxsKHRoaXNBcmcsIHJlc3VsdC52YWx1ZSwgcmVzdWx0LnZhbHVlLCB0aGlzKTtcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwcm94eVNldF8odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWZ0U2V0KHRhcmdldCwgcGFyZW50KTtcbiAgfVxuICBmdW5jdGlvbiBwcmVwYXJlU2V0Q29weShzdGF0ZSkge1xuICAgIGlmICghc3RhdGUuY29weV8pIHtcbiAgICAgIHN0YXRlLmNvcHlfID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgIHN0YXRlLmJhc2VfLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICBjb25zdCBkcmFmdCA9IGNyZWF0ZVByb3h5KHZhbHVlLCBzdGF0ZSk7XG4gICAgICAgICAgc3RhdGUuZHJhZnRzXy5zZXQodmFsdWUsIGRyYWZ0KTtcbiAgICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQoZHJhZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLmNvcHlfLmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhc3NlcnRVbnJldm9rZWQoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUucmV2b2tlZF8pXG4gICAgICBkaWUoMywgSlNPTi5zdHJpbmdpZnkobGF0ZXN0KHN0YXRlKSkpO1xuICB9XG4gIGxvYWRQbHVnaW4oXCJNYXBTZXRcIiwgeyBwcm94eU1hcF8sIHByb3h5U2V0XyB9KTtcbn1cblxuLy8gc3JjL2ltbWVyLnRzXG52YXIgaW1tZXIgPSBuZXcgSW1tZXIyKCk7XG52YXIgcHJvZHVjZSA9IGltbWVyLnByb2R1Y2U7XG52YXIgcHJvZHVjZVdpdGhQYXRjaGVzID0gaW1tZXIucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQoXG4gIGltbWVyXG4pO1xudmFyIHNldEF1dG9GcmVlemUgPSBpbW1lci5zZXRBdXRvRnJlZXplLmJpbmQoaW1tZXIpO1xudmFyIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5ID0gaW1tZXIuc2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkuYmluZChpbW1lcik7XG52YXIgYXBwbHlQYXRjaGVzID0gaW1tZXIuYXBwbHlQYXRjaGVzLmJpbmQoaW1tZXIpO1xudmFyIGNyZWF0ZURyYWZ0ID0gaW1tZXIuY3JlYXRlRHJhZnQuYmluZChpbW1lcik7XG52YXIgZmluaXNoRHJhZnQgPSBpbW1lci5maW5pc2hEcmFmdC5iaW5kKGltbWVyKTtcbmZ1bmN0aW9uIGNhc3REcmFmdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjYXN0SW1tdXRhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCB7XG4gIEltbWVyMiBhcyBJbW1lcixcbiAgYXBwbHlQYXRjaGVzLFxuICBjYXN0RHJhZnQsXG4gIGNhc3RJbW11dGFibGUsXG4gIGNyZWF0ZURyYWZ0LFxuICBjdXJyZW50LFxuICBlbmFibGVNYXBTZXQsXG4gIGVuYWJsZVBhdGNoZXMsXG4gIGZpbmlzaERyYWZ0LFxuICBmcmVlemUsXG4gIERSQUZUQUJMRSBhcyBpbW1lcmFibGUsXG4gIGlzRHJhZnQsXG4gIGlzRHJhZnRhYmxlLFxuICBOT1RISU5HIGFzIG5vdGhpbmcsXG4gIG9yaWdpbmFsLFxuICBwcm9kdWNlLFxuICBwcm9kdWNlV2l0aFBhdGNoZXMsXG4gIHNldEF1dG9GcmVlemUsXG4gIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1tZXIubWpzLm1hcCIsIi8vIHNyYy9pbmRleC50c1xuZXhwb3J0ICogZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBwcm9kdWNlLCBjdXJyZW50IGFzIGN1cnJlbnQzLCBmcmVlemUsIG9yaWdpbmFsIGFzIG9yaWdpbmFsMiwgaXNEcmFmdCBhcyBpc0RyYWZ0NSB9IGZyb20gXCJpbW1lclwiO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvciBhcyBjcmVhdGVTZWxlY3RvckNyZWF0b3IyLCBscnVNZW1vaXplLCB3ZWFrTWFwTWVtb2l6ZSBhcyB3ZWFrTWFwTWVtb2l6ZTIgfSBmcm9tIFwicmVzZWxlY3RcIjtcblxuLy8gc3JjL2NyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yLnRzXG5pbXBvcnQgeyBjdXJyZW50LCBpc0RyYWZ0IH0gZnJvbSBcImltbWVyXCI7XG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvckNyZWF0b3IsIHdlYWtNYXBNZW1vaXplIH0gZnJvbSBcInJlc2VsZWN0XCI7XG52YXIgY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3JDcmVhdG9yID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgY3JlYXRlU2VsZWN0b3IyID0gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKC4uLmFyZ3MpO1xuICBjb25zdCBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcjIgPSBPYmplY3QuYXNzaWduKCguLi5hcmdzMikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IyKC4uLmFyZ3MyKTtcbiAgICBjb25zdCB3cmFwcGVkU2VsZWN0b3IgPSAodmFsdWUsIC4uLnJlc3QpID0+IHNlbGVjdG9yKGlzRHJhZnQodmFsdWUpID8gY3VycmVudCh2YWx1ZSkgOiB2YWx1ZSwgLi4ucmVzdCk7XG4gICAgT2JqZWN0LmFzc2lnbih3cmFwcGVkU2VsZWN0b3IsIHNlbGVjdG9yKTtcbiAgICByZXR1cm4gd3JhcHBlZFNlbGVjdG9yO1xuICB9LCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcjJcbiAgfSk7XG4gIHJldHVybiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcjI7XG59O1xudmFyIGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yQ3JlYXRvcih3ZWFrTWFwTWVtb2l6ZSk7XG5cbi8vIHNyYy9jb25maWd1cmVTdG9yZS50c1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSBhcyBjb21wb3NlMiwgY29tYmluZVJlZHVjZXJzLCBpc1BsYWluT2JqZWN0IGFzIGlzUGxhaW5PYmplY3QyIH0gZnJvbSBcInJlZHV4XCI7XG5cbi8vIHNyYy9kZXZ0b29sc0V4dGVuc2lvbi50c1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xudmFyIGNvbXBvc2VXaXRoRGV2VG9vbHMgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIDogZnVuY3Rpb24oKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdm9pZCAwO1xuICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIGNvbXBvc2U7XG4gIHJldHVybiBjb21wb3NlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59O1xudmFyIGRldlRvb2xzRW5oYW5jZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gOiBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG5vb3AzKSB7XG4gICAgcmV0dXJuIG5vb3AzO1xuICB9O1xufTtcblxuLy8gc3JjL2dldERlZmF1bHRNaWRkbGV3YXJlLnRzXG5pbXBvcnQgeyB0aHVuayBhcyB0aHVua01pZGRsZXdhcmUsIHdpdGhFeHRyYUFyZ3VtZW50IH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XG5cbi8vIHNyYy9jcmVhdGVBY3Rpb24udHNcbmltcG9ydCB7IGlzQWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XG5cbi8vIHNyYy90c0hlbHBlcnMudHNcbnZhciBoYXNNYXRjaEZ1bmN0aW9uID0gKHYpID0+IHtcbiAgcmV0dXJuIHYgJiYgdHlwZW9mIHYubWF0Y2ggPT09IFwiZnVuY3Rpb25cIjtcbn07XG5cbi8vIHNyYy9jcmVhdGVBY3Rpb24udHNcbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbih0eXBlLCBwcmVwYXJlQWN0aW9uKSB7XG4gIGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoLi4uYXJncykge1xuICAgIGlmIChwcmVwYXJlQWN0aW9uKSB7XG4gICAgICBsZXQgcHJlcGFyZWQgPSBwcmVwYXJlQWN0aW9uKC4uLmFyZ3MpO1xuICAgICAgaWYgKCFwcmVwYXJlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgwKSA6IFwicHJlcGFyZUFjdGlvbiBkaWQgbm90IHJldHVybiBhbiBvYmplY3RcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBwYXlsb2FkOiBwcmVwYXJlZC5wYXlsb2FkLFxuICAgICAgICAuLi5cIm1ldGFcIiBpbiBwcmVwYXJlZCAmJiB7XG4gICAgICAgICAgbWV0YTogcHJlcGFyZWQubWV0YVxuICAgICAgICB9LFxuICAgICAgICAuLi5cImVycm9yXCIgaW4gcHJlcGFyZWQgJiYge1xuICAgICAgICAgIGVycm9yOiBwcmVwYXJlZC5lcnJvclxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZSxcbiAgICAgIHBheWxvYWQ6IGFyZ3NbMF1cbiAgICB9O1xuICB9XG4gIGFjdGlvbkNyZWF0b3IudG9TdHJpbmcgPSAoKSA9PiBgJHt0eXBlfWA7XG4gIGFjdGlvbkNyZWF0b3IudHlwZSA9IHR5cGU7XG4gIGFjdGlvbkNyZWF0b3IubWF0Y2ggPSAoYWN0aW9uKSA9PiBpc0FjdGlvbihhY3Rpb24pICYmIGFjdGlvbi50eXBlID09PSB0eXBlO1xuICByZXR1cm4gYWN0aW9uQ3JlYXRvcjtcbn1cbmZ1bmN0aW9uIGlzQWN0aW9uQ3JlYXRvcihhY3Rpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBhY3Rpb24gPT09IFwiZnVuY3Rpb25cIiAmJiBcInR5cGVcIiBpbiBhY3Rpb24gJiYgLy8gaGFzTWF0Y2hGdW5jdGlvbiBvbmx5IHdhbnRzIE1hdGNoZXJzIGJ1dCBJIGRvbid0IHNlZSB0aGUgcG9pbnQgaW4gcmV3cml0aW5nIGl0XG4gIGhhc01hdGNoRnVuY3Rpb24oYWN0aW9uKTtcbn1cbmZ1bmN0aW9uIGlzRlNBKGFjdGlvbikge1xuICByZXR1cm4gaXNBY3Rpb24oYWN0aW9uKSAmJiBPYmplY3Qua2V5cyhhY3Rpb24pLmV2ZXJ5KGlzVmFsaWRLZXkpO1xufVxuZnVuY3Rpb24gaXNWYWxpZEtleShrZXkpIHtcbiAgcmV0dXJuIFtcInR5cGVcIiwgXCJwYXlsb2FkXCIsIFwiZXJyb3JcIiwgXCJtZXRhXCJdLmluZGV4T2Yoa2V5KSA+IC0xO1xufVxuXG4vLyBzcmMvYWN0aW9uQ3JlYXRvckludmFyaWFudE1pZGRsZXdhcmUudHNcbmZ1bmN0aW9uIGdldE1lc3NhZ2UodHlwZSkge1xuICBjb25zdCBzcGxpdFR5cGUgPSB0eXBlID8gYCR7dHlwZX1gLnNwbGl0KFwiL1wiKSA6IFtdO1xuICBjb25zdCBhY3Rpb25OYW1lID0gc3BsaXRUeXBlW3NwbGl0VHlwZS5sZW5ndGggLSAxXSB8fCBcImFjdGlvbkNyZWF0b3JcIjtcbiAgcmV0dXJuIGBEZXRlY3RlZCBhbiBhY3Rpb24gY3JlYXRvciB3aXRoIHR5cGUgXCIke3R5cGUgfHwgXCJ1bmtub3duXCJ9XCIgYmVpbmcgZGlzcGF0Y2hlZC4gXG5NYWtlIHN1cmUgeW91J3JlIGNhbGxpbmcgdGhlIGFjdGlvbiBjcmVhdG9yIGJlZm9yZSBkaXNwYXRjaGluZywgaS5lLiBcXGBkaXNwYXRjaCgke2FjdGlvbk5hbWV9KCkpXFxgIGluc3RlYWQgb2YgXFxgZGlzcGF0Y2goJHthY3Rpb25OYW1lfSlcXGAuIFRoaXMgaXMgbmVjZXNzYXJ5IGV2ZW4gaWYgdGhlIGFjdGlvbiBoYXMgbm8gcGF5bG9hZC5gO1xufVxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uQ3JlYXRvckludmFyaWFudE1pZGRsZXdhcmUob3B0aW9ucyA9IHt9KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICByZXR1cm4gKCkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IG5leHQoYWN0aW9uKTtcbiAgfVxuICBjb25zdCB7XG4gICAgaXNBY3Rpb25DcmVhdG9yOiBpc0FjdGlvbkNyZWF0b3IyID0gaXNBY3Rpb25DcmVhdG9yXG4gIH0gPSBvcHRpb25zO1xuICByZXR1cm4gKCkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgICBpZiAoaXNBY3Rpb25DcmVhdG9yMihhY3Rpb24pKSB7XG4gICAgICBjb25zb2xlLndhcm4oZ2V0TWVzc2FnZShhY3Rpb24udHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICB9O1xufVxuXG4vLyBzcmMvdXRpbHMudHNcbmltcG9ydCB7IHByb2R1Y2UgYXMgY3JlYXRlTmV4dFN0YXRlLCBpc0RyYWZ0YWJsZSB9IGZyb20gXCJpbW1lclwiO1xuZnVuY3Rpb24gZ2V0VGltZU1lYXN1cmVVdGlscyhtYXhEZWxheSwgZm5OYW1lKSB7XG4gIGxldCBlbGFwc2VkID0gMDtcbiAgcmV0dXJuIHtcbiAgICBtZWFzdXJlVGltZShmbikge1xuICAgICAgY29uc3Qgc3RhcnRlZCA9IERhdGUubm93KCk7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGNvbnN0IGZpbmlzaGVkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgZWxhcHNlZCArPSBmaW5pc2hlZCAtIHN0YXJ0ZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB3YXJuSWZFeGNlZWRlZCgpIHtcbiAgICAgIGlmIChlbGFwc2VkID4gbWF4RGVsYXkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2ZuTmFtZX0gdG9vayAke2VsYXBzZWR9bXMsIHdoaWNoIGlzIG1vcmUgdGhhbiB0aGUgd2FybmluZyB0aHJlc2hvbGQgb2YgJHttYXhEZWxheX1tcy4gXG5JZiB5b3VyIHN0YXRlIG9yIGFjdGlvbnMgYXJlIHZlcnkgbGFyZ2UsIHlvdSBtYXkgd2FudCB0byBkaXNhYmxlIHRoZSBtaWRkbGV3YXJlIGFzIGl0IG1pZ2h0IGNhdXNlIHRvbyBtdWNoIG9mIGEgc2xvd2Rvd24gaW4gZGV2ZWxvcG1lbnQgbW9kZS4gU2VlIGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvYXBpL2dldERlZmF1bHRNaWRkbGV3YXJlIGZvciBpbnN0cnVjdGlvbnMuXG5JdCBpcyBkaXNhYmxlZCBpbiBwcm9kdWN0aW9uIGJ1aWxkcywgc28geW91IGRvbid0IG5lZWQgdG8gd29ycnkgYWJvdXQgdGhhdC5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kKGl0ZXJhYmxlLCBjb21wYXJhdG9yKSB7XG4gIGZvciAoY29uc3QgZW50cnkgb2YgaXRlcmFibGUpIHtcbiAgICBpZiAoY29tcGFyYXRvcihlbnRyeSkpIHtcbiAgICAgIHJldHVybiBlbnRyeTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZvaWQgMDtcbn1cbnZhciBUdXBsZSA9IGNsYXNzIF9UdXBsZSBleHRlbmRzIEFycmF5IHtcbiAgY29uc3RydWN0b3IoLi4uaXRlbXMpIHtcbiAgICBzdXBlciguLi5pdGVtcyk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIF9UdXBsZS5wcm90b3R5cGUpO1xuICB9XG4gIHN0YXRpYyBnZXQgW1N5bWJvbC5zcGVjaWVzXSgpIHtcbiAgICByZXR1cm4gX1R1cGxlO1xuICB9XG4gIGNvbmNhdCguLi5hcnIpIHtcbiAgICByZXR1cm4gc3VwZXIuY29uY2F0LmFwcGx5KHRoaXMsIGFycik7XG4gIH1cbiAgcHJlcGVuZCguLi5hcnIpIHtcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFyclswXSkpIHtcbiAgICAgIHJldHVybiBuZXcgX1R1cGxlKC4uLmFyclswXS5jb25jYXQodGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IF9UdXBsZSguLi5hcnIuY29uY2F0KHRoaXMpKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGZyZWV6ZURyYWZ0YWJsZSh2YWwpIHtcbiAgcmV0dXJuIGlzRHJhZnRhYmxlKHZhbCkgPyBjcmVhdGVOZXh0U3RhdGUodmFsLCAoKSA9PiB7XG4gIH0pIDogdmFsO1xufVxuZnVuY3Rpb24gZW1wbGFjZShtYXAsIGtleSwgaGFuZGxlcikge1xuICBpZiAobWFwLmhhcyhrZXkpKSB7XG4gICAgbGV0IHZhbHVlID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChoYW5kbGVyLnVwZGF0ZSkge1xuICAgICAgdmFsdWUgPSBoYW5kbGVyLnVwZGF0ZSh2YWx1ZSwga2V5LCBtYXApO1xuICAgICAgbWFwLnNldChrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICghaGFuZGxlci5pbnNlcnQpIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEwKSA6IFwiTm8gaW5zZXJ0IHByb3ZpZGVkIGZvciBrZXkgbm90IGFscmVhZHkgaW4gbWFwXCIpO1xuICBjb25zdCBpbnNlcnRlZCA9IGhhbmRsZXIuaW5zZXJ0KGtleSwgbWFwKTtcbiAgbWFwLnNldChrZXksIGluc2VydGVkKTtcbiAgcmV0dXJuIGluc2VydGVkO1xufVxuXG4vLyBzcmMvaW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLnRzXG5mdW5jdGlvbiBpc0ltbXV0YWJsZURlZmF1bHQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IE9iamVjdC5pc0Zyb3plbih2YWx1ZSk7XG59XG5mdW5jdGlvbiB0cmFja0Zvck11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9iaikge1xuICBjb25zdCB0cmFja2VkUHJvcGVydGllcyA9IHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9iaik7XG4gIHJldHVybiB7XG4gICAgZGV0ZWN0TXV0YXRpb25zKCkge1xuICAgICAgcmV0dXJuIGRldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIHRyYWNrZWRQcm9wZXJ0aWVzLCBvYmopO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMgPSBbXSwgb2JqLCBwYXRoID0gXCJcIiwgY2hlY2tlZE9iamVjdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKSB7XG4gIGNvbnN0IHRyYWNrZWQgPSB7XG4gICAgdmFsdWU6IG9ialxuICB9O1xuICBpZiAoIWlzSW1tdXRhYmxlKG9iaikgJiYgIWNoZWNrZWRPYmplY3RzLmhhcyhvYmopKSB7XG4gICAgY2hlY2tlZE9iamVjdHMuYWRkKG9iaik7XG4gICAgdHJhY2tlZC5jaGlsZHJlbiA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgY29uc3QgY2hpbGRQYXRoID0gcGF0aCA/IHBhdGggKyBcIi5cIiArIGtleSA6IGtleTtcbiAgICAgIGlmIChpZ25vcmVQYXRocy5sZW5ndGggJiYgaWdub3JlUGF0aHMuaW5kZXhPZihjaGlsZFBhdGgpICE9PSAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRyYWNrZWQuY2hpbGRyZW5ba2V5XSA9IHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9ialtrZXldLCBjaGlsZFBhdGgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhY2tlZDtcbn1cbmZ1bmN0aW9uIGRldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlZFBhdGhzID0gW10sIHRyYWNrZWRQcm9wZXJ0eSwgb2JqLCBzYW1lUGFyZW50UmVmID0gZmFsc2UsIHBhdGggPSBcIlwiKSB7XG4gIGNvbnN0IHByZXZPYmogPSB0cmFja2VkUHJvcGVydHkgPyB0cmFja2VkUHJvcGVydHkudmFsdWUgOiB2b2lkIDA7XG4gIGNvbnN0IHNhbWVSZWYgPSBwcmV2T2JqID09PSBvYmo7XG4gIGlmIChzYW1lUGFyZW50UmVmICYmICFzYW1lUmVmICYmICFOdW1iZXIuaXNOYU4ob2JqKSkge1xuICAgIHJldHVybiB7XG4gICAgICB3YXNNdXRhdGVkOiB0cnVlLFxuICAgICAgcGF0aFxuICAgIH07XG4gIH1cbiAgaWYgKGlzSW1tdXRhYmxlKHByZXZPYmopIHx8IGlzSW1tdXRhYmxlKG9iaikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2FzTXV0YXRlZDogZmFsc2VcbiAgICB9O1xuICB9XG4gIGNvbnN0IGtleXNUb0RldGVjdCA9IHt9O1xuICBmb3IgKGxldCBrZXkgaW4gdHJhY2tlZFByb3BlcnR5LmNoaWxkcmVuKSB7XG4gICAga2V5c1RvRGV0ZWN0W2tleV0gPSB0cnVlO1xuICB9XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBrZXlzVG9EZXRlY3Rba2V5XSA9IHRydWU7XG4gIH1cbiAgY29uc3QgaGFzSWdub3JlZFBhdGhzID0gaWdub3JlZFBhdGhzLmxlbmd0aCA+IDA7XG4gIGZvciAobGV0IGtleSBpbiBrZXlzVG9EZXRlY3QpIHtcbiAgICBjb25zdCBuZXN0ZWRQYXRoID0gcGF0aCA/IHBhdGggKyBcIi5cIiArIGtleSA6IGtleTtcbiAgICBpZiAoaGFzSWdub3JlZFBhdGhzKSB7XG4gICAgICBjb25zdCBoYXNNYXRjaGVzID0gaWdub3JlZFBhdGhzLnNvbWUoKGlnbm9yZWQpID0+IHtcbiAgICAgICAgaWYgKGlnbm9yZWQgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICByZXR1cm4gaWdub3JlZC50ZXN0KG5lc3RlZFBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXN0ZWRQYXRoID09PSBpZ25vcmVkO1xuICAgICAgfSk7XG4gICAgICBpZiAoaGFzTWF0Y2hlcykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVkUGF0aHMsIHRyYWNrZWRQcm9wZXJ0eS5jaGlsZHJlbltrZXldLCBvYmpba2V5XSwgc2FtZVJlZiwgbmVzdGVkUGF0aCk7XG4gICAgaWYgKHJlc3VsdC53YXNNdXRhdGVkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHdhc011dGF0ZWQ6IGZhbHNlXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUob3B0aW9ucyA9IHt9KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICByZXR1cm4gKCkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IG5leHQoYWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgc3RyaW5naWZ5MiA9IGZ1bmN0aW9uKG9iaiwgc2VyaWFsaXplciwgaW5kZW50LCBkZWN5Y2xlcikge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgZ2V0U2VyaWFsaXplMihzZXJpYWxpemVyLCBkZWN5Y2xlciksIGluZGVudCk7XG4gICAgfSwgZ2V0U2VyaWFsaXplMiA9IGZ1bmN0aW9uKHNlcmlhbGl6ZXIsIGRlY3ljbGVyKSB7XG4gICAgICBsZXQgc3RhY2sgPSBbXSwga2V5cyA9IFtdO1xuICAgICAgaWYgKCFkZWN5Y2xlcikgZGVjeWNsZXIgPSBmdW5jdGlvbihfLCB2YWx1ZSkge1xuICAgICAgICBpZiAoc3RhY2tbMF0gPT09IHZhbHVlKSByZXR1cm4gXCJbQ2lyY3VsYXIgfl1cIjtcbiAgICAgICAgcmV0dXJuIFwiW0NpcmN1bGFyIH4uXCIgKyBrZXlzLnNsaWNlKDAsIHN0YWNrLmluZGV4T2YodmFsdWUpKS5qb2luKFwiLlwiKSArIFwiXVwiO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIHRoaXNQb3MgPSBzdGFjay5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgIH50aGlzUG9zID8gc3RhY2suc3BsaWNlKHRoaXNQb3MgKyAxKSA6IHN0YWNrLnB1c2godGhpcyk7XG4gICAgICAgICAgfnRoaXNQb3MgPyBrZXlzLnNwbGljZSh0aGlzUG9zLCBJbmZpbml0eSwga2V5KSA6IGtleXMucHVzaChrZXkpO1xuICAgICAgICAgIGlmICh+c3RhY2suaW5kZXhPZih2YWx1ZSkpIHZhbHVlID0gZGVjeWNsZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHN0YWNrLnB1c2godmFsdWUpO1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplciA9PSBudWxsID8gdmFsdWUgOiBzZXJpYWxpemVyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICB9O1xuICAgIH07XG4gICAgdmFyIHN0cmluZ2lmeSA9IHN0cmluZ2lmeTIsIGdldFNlcmlhbGl6ZSA9IGdldFNlcmlhbGl6ZTI7XG4gICAgbGV0IHtcbiAgICAgIGlzSW1tdXRhYmxlID0gaXNJbW11dGFibGVEZWZhdWx0LFxuICAgICAgaWdub3JlZFBhdGhzLFxuICAgICAgd2FybkFmdGVyID0gMzJcbiAgICB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB0cmFjayA9IHRyYWNrRm9yTXV0YXRpb25zLmJpbmQobnVsbCwgaXNJbW11dGFibGUsIGlnbm9yZWRQYXRocyk7XG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRTdGF0ZVxuICAgIH0pID0+IHtcbiAgICAgIGxldCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICBsZXQgdHJhY2tlciA9IHRyYWNrKHN0YXRlKTtcbiAgICAgIGxldCByZXN1bHQ7XG4gICAgICByZXR1cm4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbWVhc3VyZVV0aWxzID0gZ2V0VGltZU1lYXN1cmVVdGlscyh3YXJuQWZ0ZXIsIFwiSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlXCIpO1xuICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoKCkgPT4ge1xuICAgICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgICByZXN1bHQgPSB0cmFja2VyLmRldGVjdE11dGF0aW9ucygpO1xuICAgICAgICAgIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSk7XG4gICAgICAgICAgaWYgKHJlc3VsdC53YXNNdXRhdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxOSkgOiBgQSBzdGF0ZSBtdXRhdGlvbiB3YXMgZGV0ZWN0ZWQgYmV0d2VlbiBkaXNwYXRjaGVzLCBpbiB0aGUgcGF0aCAnJHtyZXN1bHQucGF0aCB8fCBcIlwifScuICBUaGlzIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IuIChodHRwczovL3JlZHV4LmpzLm9yZy9zdHlsZS1ndWlkZS9zdHlsZS1ndWlkZSNkby1ub3QtbXV0YXRlLXN0YXRlKWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRpc3BhdGNoZWRBY3Rpb24gPSBuZXh0KGFjdGlvbik7XG4gICAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZSgoKSA9PiB7XG4gICAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICAgIHJlc3VsdCA9IHRyYWNrZXIuZGV0ZWN0TXV0YXRpb25zKCk7XG4gICAgICAgICAgdHJhY2tlciA9IHRyYWNrKHN0YXRlKTtcbiAgICAgICAgICBpZiAocmVzdWx0Lndhc011dGF0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDIwKSA6IGBBIHN0YXRlIG11dGF0aW9uIHdhcyBkZXRlY3RlZCBpbnNpZGUgYSBkaXNwYXRjaCwgaW4gdGhlIHBhdGg6ICR7cmVzdWx0LnBhdGggfHwgXCJcIn0uIFRha2UgYSBsb29rIGF0IHRoZSByZWR1Y2VyKHMpIGhhbmRsaW5nIHRoZSBhY3Rpb24gJHtzdHJpbmdpZnkyKGFjdGlvbil9LiAoaHR0cHM6Ly9yZWR1eC5qcy5vcmcvc3R5bGUtZ3VpZGUvc3R5bGUtZ3VpZGUjZG8tbm90LW11dGF0ZS1zdGF0ZSlgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZWFzdXJlVXRpbHMud2FybklmRXhjZWVkZWQoKTtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoZWRBY3Rpb247XG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cblxuLy8gc3JjL3NlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZS50c1xuaW1wb3J0IHsgaXNBY3Rpb24gYXMgaXNBY3Rpb24yLCBpc1BsYWluT2JqZWN0IH0gZnJvbSBcInJlZHV4XCI7XG5mdW5jdGlvbiBpc1BsYWluKHZhbCkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgcmV0dXJuIHZhbCA9PSBudWxsIHx8IHR5cGUgPT09IFwic3RyaW5nXCIgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIgfHwgdHlwZSA9PT0gXCJudW1iZXJcIiB8fCBBcnJheS5pc0FycmF5KHZhbCkgfHwgaXNQbGFpbk9iamVjdCh2YWwpO1xufVxuZnVuY3Rpb24gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKHZhbHVlLCBwYXRoID0gXCJcIiwgaXNTZXJpYWxpemFibGUgPSBpc1BsYWluLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMgPSBbXSwgY2FjaGUpIHtcbiAgbGV0IGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlO1xuICBpZiAoIWlzU2VyaWFsaXphYmxlKHZhbHVlKSkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXlQYXRoOiBwYXRoIHx8IFwiPHJvb3Q+XCIsXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoY2FjaGU/Lmhhcyh2YWx1ZSkpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgZW50cmllcyA9IGdldEVudHJpZXMgIT0gbnVsbCA/IGdldEVudHJpZXModmFsdWUpIDogT2JqZWN0LmVudHJpZXModmFsdWUpO1xuICBjb25zdCBoYXNJZ25vcmVkUGF0aHMgPSBpZ25vcmVkUGF0aHMubGVuZ3RoID4gMDtcbiAgZm9yIChjb25zdCBba2V5LCBuZXN0ZWRWYWx1ZV0gb2YgZW50cmllcykge1xuICAgIGNvbnN0IG5lc3RlZFBhdGggPSBwYXRoID8gcGF0aCArIFwiLlwiICsga2V5IDoga2V5O1xuICAgIGlmIChoYXNJZ25vcmVkUGF0aHMpIHtcbiAgICAgIGNvbnN0IGhhc01hdGNoZXMgPSBpZ25vcmVkUGF0aHMuc29tZSgoaWdub3JlZCkgPT4ge1xuICAgICAgICBpZiAoaWdub3JlZCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgIHJldHVybiBpZ25vcmVkLnRlc3QobmVzdGVkUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5lc3RlZFBhdGggPT09IGlnbm9yZWQ7XG4gICAgICB9KTtcbiAgICAgIGlmIChoYXNNYXRjaGVzKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzU2VyaWFsaXphYmxlKG5lc3RlZFZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5UGF0aDogbmVzdGVkUGF0aCxcbiAgICAgICAgdmFsdWU6IG5lc3RlZFZhbHVlXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5lc3RlZFZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZSA9IGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShuZXN0ZWRWYWx1ZSwgbmVzdGVkUGF0aCwgaXNTZXJpYWxpemFibGUsIGdldEVudHJpZXMsIGlnbm9yZWRQYXRocywgY2FjaGUpO1xuICAgICAgaWYgKGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlKSB7XG4gICAgICAgIHJldHVybiBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGNhY2hlICYmIGlzTmVzdGVkRnJvemVuKHZhbHVlKSkgY2FjaGUuYWRkKHZhbHVlKTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNOZXN0ZWRGcm96ZW4odmFsdWUpIHtcbiAgaWYgKCFPYmplY3QuaXNGcm96ZW4odmFsdWUpKSByZXR1cm4gZmFsc2U7XG4gIGZvciAoY29uc3QgbmVzdGVkVmFsdWUgb2YgT2JqZWN0LnZhbHVlcyh2YWx1ZSkpIHtcbiAgICBpZiAodHlwZW9mIG5lc3RlZFZhbHVlICE9PSBcIm9iamVjdFwiIHx8IG5lc3RlZFZhbHVlID09PSBudWxsKSBjb250aW51ZTtcbiAgICBpZiAoIWlzTmVzdGVkRnJvemVuKG5lc3RlZFZhbHVlKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKG9wdGlvbnMgPSB7fSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcmV0dXJuICgpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiBuZXh0KGFjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTZXJpYWxpemFibGUgPSBpc1BsYWluLFxuICAgICAgZ2V0RW50cmllcyxcbiAgICAgIGlnbm9yZWRBY3Rpb25zID0gW10sXG4gICAgICBpZ25vcmVkQWN0aW9uUGF0aHMgPSBbXCJtZXRhLmFyZ1wiLCBcIm1ldGEuYmFzZVF1ZXJ5TWV0YVwiXSxcbiAgICAgIGlnbm9yZWRQYXRocyA9IFtdLFxuICAgICAgd2FybkFmdGVyID0gMzIsXG4gICAgICBpZ25vcmVTdGF0ZSA9IGZhbHNlLFxuICAgICAgaWdub3JlQWN0aW9ucyA9IGZhbHNlLFxuICAgICAgZGlzYWJsZUNhY2hlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBjYWNoZSA9ICFkaXNhYmxlQ2FjaGUgJiYgV2Vha1NldCA/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpIDogdm9pZCAwO1xuICAgIHJldHVybiAoc3RvcmVBUEkpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gICAgICBpZiAoIWlzQWN0aW9uMihhY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXh0KGFjdGlvbik7XG4gICAgICBjb25zdCBtZWFzdXJlVXRpbHMgPSBnZXRUaW1lTWVhc3VyZVV0aWxzKHdhcm5BZnRlciwgXCJTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVcIik7XG4gICAgICBpZiAoIWlnbm9yZUFjdGlvbnMgJiYgIShpZ25vcmVkQWN0aW9ucy5sZW5ndGggJiYgaWdub3JlZEFjdGlvbnMuaW5kZXhPZihhY3Rpb24udHlwZSkgIT09IC0xKSkge1xuICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUoYWN0aW9uLCBcIlwiLCBpc1NlcmlhbGl6YWJsZSwgZ2V0RW50cmllcywgaWdub3JlZEFjdGlvblBhdGhzLCBjYWNoZSk7XG4gICAgICAgICAgaWYgKGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAga2V5UGF0aCxcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH0gPSBmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQSBub24tc2VyaWFsaXphYmxlIHZhbHVlIHdhcyBkZXRlY3RlZCBpbiBhbiBhY3Rpb24sIGluIHRoZSBwYXRoOiBcXGAke2tleVBhdGh9XFxgLiBWYWx1ZTpgLCB2YWx1ZSwgXCJcXG5UYWtlIGEgbG9vayBhdCB0aGUgbG9naWMgdGhhdCBkaXNwYXRjaGVkIHRoaXMgYWN0aW9uOiBcIiwgYWN0aW9uLCBcIlxcbihTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvZmFxL2FjdGlvbnMjd2h5LXNob3VsZC10eXBlLWJlLWEtc3RyaW5nLW9yLWF0LWxlYXN0LXNlcmlhbGl6YWJsZS13aHktc2hvdWxkLW15LWFjdGlvbi10eXBlcy1iZS1jb25zdGFudHMpXCIsIFwiXFxuKFRvIGFsbG93IG5vbi1zZXJpYWxpemFibGUgdmFsdWVzIHNlZTogaHR0cHM6Ly9yZWR1eC10b29sa2l0LmpzLm9yZy91c2FnZS91c2FnZS1ndWlkZSN3b3JraW5nLXdpdGgtbm9uLXNlcmlhbGl6YWJsZS1kYXRhKVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFpZ25vcmVTdGF0ZSkge1xuICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmVBUEkuZ2V0U3RhdGUoKTtcbiAgICAgICAgICBjb25zdCBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUoc3RhdGUsIFwiXCIsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMsIGNhY2hlKTtcbiAgICAgICAgICBpZiAoZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGtleVBhdGgsXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9ID0gZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQSBub24tc2VyaWFsaXphYmxlIHZhbHVlIHdhcyBkZXRlY3RlZCBpbiB0aGUgc3RhdGUsIGluIHRoZSBwYXRoOiBcXGAke2tleVBhdGh9XFxgLiBWYWx1ZTpgLCB2YWx1ZSwgYFxuVGFrZSBhIGxvb2sgYXQgdGhlIHJlZHVjZXIocykgaGFuZGxpbmcgdGhpcyBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX0uXG4oU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2ZhcS9vcmdhbml6aW5nLXN0YXRlI2Nhbi1pLXB1dC1mdW5jdGlvbnMtcHJvbWlzZXMtb3Itb3RoZXItbm9uLXNlcmlhbGl6YWJsZS1pdGVtcy1pbi1teS1zdG9yZS1zdGF0ZSlgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZWFzdXJlVXRpbHMud2FybklmRXhjZWVkZWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfVxufVxuXG4vLyBzcmMvZ2V0RGVmYXVsdE1pZGRsZXdhcmUudHNcbmZ1bmN0aW9uIGlzQm9vbGVhbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJib29sZWFuXCI7XG59XG52YXIgYnVpbGRHZXREZWZhdWx0TWlkZGxld2FyZSA9ICgpID0+IGZ1bmN0aW9uIGdldERlZmF1bHRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIHRodW5rID0gdHJ1ZSxcbiAgICBpbW11dGFibGVDaGVjayA9IHRydWUsXG4gICAgc2VyaWFsaXphYmxlQ2hlY2sgPSB0cnVlLFxuICAgIGFjdGlvbkNyZWF0b3JDaGVjayA9IHRydWVcbiAgfSA9IG9wdGlvbnMgPz8ge307XG4gIGxldCBtaWRkbGV3YXJlQXJyYXkgPSBuZXcgVHVwbGUoKTtcbiAgaWYgKHRodW5rKSB7XG4gICAgaWYgKGlzQm9vbGVhbih0aHVuaykpIHtcbiAgICAgIG1pZGRsZXdhcmVBcnJheS5wdXNoKHRodW5rTWlkZGxld2FyZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pZGRsZXdhcmVBcnJheS5wdXNoKHdpdGhFeHRyYUFyZ3VtZW50KHRodW5rLmV4dHJhQXJndW1lbnQpKTtcbiAgICB9XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmIChpbW11dGFibGVDaGVjaykge1xuICAgICAgbGV0IGltbXV0YWJsZU9wdGlvbnMgPSB7fTtcbiAgICAgIGlmICghaXNCb29sZWFuKGltbXV0YWJsZUNoZWNrKSkge1xuICAgICAgICBpbW11dGFibGVPcHRpb25zID0gaW1tdXRhYmxlQ2hlY2s7XG4gICAgICB9XG4gICAgICBtaWRkbGV3YXJlQXJyYXkudW5zaGlmdChjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoaW1tdXRhYmxlT3B0aW9ucykpO1xuICAgIH1cbiAgICBpZiAoc2VyaWFsaXphYmxlQ2hlY2spIHtcbiAgICAgIGxldCBzZXJpYWxpemFibGVPcHRpb25zID0ge307XG4gICAgICBpZiAoIWlzQm9vbGVhbihzZXJpYWxpemFibGVDaGVjaykpIHtcbiAgICAgICAgc2VyaWFsaXphYmxlT3B0aW9ucyA9IHNlcmlhbGl6YWJsZUNoZWNrO1xuICAgICAgfVxuICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2goY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKHNlcmlhbGl6YWJsZU9wdGlvbnMpKTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbkNyZWF0b3JDaGVjaykge1xuICAgICAgbGV0IGFjdGlvbkNyZWF0b3JPcHRpb25zID0ge307XG4gICAgICBpZiAoIWlzQm9vbGVhbihhY3Rpb25DcmVhdG9yQ2hlY2spKSB7XG4gICAgICAgIGFjdGlvbkNyZWF0b3JPcHRpb25zID0gYWN0aW9uQ3JlYXRvckNoZWNrO1xuICAgICAgfVxuICAgICAgbWlkZGxld2FyZUFycmF5LnVuc2hpZnQoY3JlYXRlQWN0aW9uQ3JlYXRvckludmFyaWFudE1pZGRsZXdhcmUoYWN0aW9uQ3JlYXRvck9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pZGRsZXdhcmVBcnJheTtcbn07XG5cbi8vIHNyYy9hdXRvQmF0Y2hFbmhhbmNlci50c1xudmFyIFNIT1VMRF9BVVRPQkFUQ0ggPSBcIlJUS19hdXRvQmF0Y2hcIjtcbnZhciBwcmVwYXJlQXV0b0JhdGNoZWQgPSAoKSA9PiAocGF5bG9hZCkgPT4gKHtcbiAgcGF5bG9hZCxcbiAgbWV0YToge1xuICAgIFtTSE9VTERfQVVUT0JBVENIXTogdHJ1ZVxuICB9XG59KTtcbnZhciBjcmVhdGVRdWV1ZVdpdGhUaW1lciA9ICh0aW1lb3V0KSA9PiB7XG4gIHJldHVybiAobm90aWZ5KSA9PiB7XG4gICAgc2V0VGltZW91dChub3RpZnksIHRpbWVvdXQpO1xuICB9O1xufTtcbnZhciByQUYgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogY3JlYXRlUXVldWVXaXRoVGltZXIoMTApO1xudmFyIGF1dG9CYXRjaEVuaGFuY2VyID0gKG9wdGlvbnMgPSB7XG4gIHR5cGU6IFwicmFmXCJcbn0pID0+IChuZXh0KSA9PiAoLi4uYXJncykgPT4ge1xuICBjb25zdCBzdG9yZSA9IG5leHQoLi4uYXJncyk7XG4gIGxldCBub3RpZnlpbmcgPSB0cnVlO1xuICBsZXQgc2hvdWxkTm90aWZ5QXRFbmRPZlRpY2sgPSBmYWxzZTtcbiAgbGV0IG5vdGlmaWNhdGlvblF1ZXVlZCA9IGZhbHNlO1xuICBjb25zdCBsaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBxdWV1ZUNhbGxiYWNrID0gb3B0aW9ucy50eXBlID09PSBcInRpY2tcIiA/IHF1ZXVlTWljcm90YXNrIDogb3B0aW9ucy50eXBlID09PSBcInJhZlwiID8gckFGIDogb3B0aW9ucy50eXBlID09PSBcImNhbGxiYWNrXCIgPyBvcHRpb25zLnF1ZXVlTm90aWZpY2F0aW9uIDogY3JlYXRlUXVldWVXaXRoVGltZXIob3B0aW9ucy50aW1lb3V0KTtcbiAgY29uc3Qgbm90aWZ5TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIG5vdGlmaWNhdGlvblF1ZXVlZCA9IGZhbHNlO1xuICAgIGlmIChzaG91bGROb3RpZnlBdEVuZE9mVGljaykge1xuICAgICAgc2hvdWxkTm90aWZ5QXRFbmRPZlRpY2sgPSBmYWxzZTtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsKSA9PiBsKCkpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0b3JlLCB7XG4gICAgLy8gT3ZlcnJpZGUgdGhlIGJhc2UgYHN0b3JlLnN1YnNjcmliZWAgbWV0aG9kIHRvIGtlZXAgb3JpZ2luYWwgbGlzdGVuZXJzXG4gICAgLy8gZnJvbSBydW5uaW5nIGlmIHdlJ3JlIGRlbGF5aW5nIG5vdGlmaWNhdGlvbnNcbiAgICBzdWJzY3JpYmUobGlzdGVuZXIyKSB7XG4gICAgICBjb25zdCB3cmFwcGVkTGlzdGVuZXIgPSAoKSA9PiBub3RpZnlpbmcgJiYgbGlzdGVuZXIyKCk7XG4gICAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSh3cmFwcGVkTGlzdGVuZXIpO1xuICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcjIpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcjIpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIC8vIE92ZXJyaWRlIHRoZSBiYXNlIGBzdG9yZS5kaXNwYXRjaGAgbWV0aG9kIHNvIHRoYXQgd2UgY2FuIGNoZWNrIGFjdGlvbnNcbiAgICAvLyBmb3IgdGhlIGBzaG91bGRBdXRvQmF0Y2hgIGZsYWcgYW5kIGRldGVybWluZSBpZiBiYXRjaGluZyBpcyBhY3RpdmVcbiAgICBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5vdGlmeWluZyA9ICFhY3Rpb24/Lm1ldGE/LltTSE9VTERfQVVUT0JBVENIXTtcbiAgICAgICAgc2hvdWxkTm90aWZ5QXRFbmRPZlRpY2sgPSAhbm90aWZ5aW5nO1xuICAgICAgICBpZiAoc2hvdWxkTm90aWZ5QXRFbmRPZlRpY2spIHtcbiAgICAgICAgICBpZiAoIW5vdGlmaWNhdGlvblF1ZXVlZCkge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uUXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHF1ZXVlQ2FsbGJhY2sobm90aWZ5TGlzdGVuZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBub3RpZnlpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBzcmMvZ2V0RGVmYXVsdEVuaGFuY2Vycy50c1xudmFyIGJ1aWxkR2V0RGVmYXVsdEVuaGFuY2VycyA9IChtaWRkbGV3YXJlRW5oYW5jZXIpID0+IGZ1bmN0aW9uIGdldERlZmF1bHRFbmhhbmNlcnMob3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgYXV0b0JhdGNoID0gdHJ1ZVxuICB9ID0gb3B0aW9ucyA/PyB7fTtcbiAgbGV0IGVuaGFuY2VyQXJyYXkgPSBuZXcgVHVwbGUobWlkZGxld2FyZUVuaGFuY2VyKTtcbiAgaWYgKGF1dG9CYXRjaCkge1xuICAgIGVuaGFuY2VyQXJyYXkucHVzaChhdXRvQmF0Y2hFbmhhbmNlcih0eXBlb2YgYXV0b0JhdGNoID09PSBcIm9iamVjdFwiID8gYXV0b0JhdGNoIDogdm9pZCAwKSk7XG4gIH1cbiAgcmV0dXJuIGVuaGFuY2VyQXJyYXk7XG59O1xuXG4vLyBzcmMvY29uZmlndXJlU3RvcmUudHNcbmZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKG9wdGlvbnMpIHtcbiAgY29uc3QgZ2V0RGVmYXVsdE1pZGRsZXdhcmUgPSBidWlsZEdldERlZmF1bHRNaWRkbGV3YXJlKCk7XG4gIGNvbnN0IHtcbiAgICByZWR1Y2VyID0gdm9pZCAwLFxuICAgIG1pZGRsZXdhcmUsXG4gICAgZGV2VG9vbHMgPSB0cnVlLFxuICAgIHByZWxvYWRlZFN0YXRlID0gdm9pZCAwLFxuICAgIGVuaGFuY2VycyA9IHZvaWQgMFxuICB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgbGV0IHJvb3RSZWR1Y2VyO1xuICBpZiAodHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJvb3RSZWR1Y2VyID0gcmVkdWNlcjtcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0MihyZWR1Y2VyKSkge1xuICAgIHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXIpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEpIDogXCJgcmVkdWNlcmAgaXMgYSByZXF1aXJlZCBhcmd1bWVudCwgYW5kIG11c3QgYmUgYSBmdW5jdGlvbiBvciBhbiBvYmplY3Qgb2YgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBjb21iaW5lUmVkdWNlcnNcIik7XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBtaWRkbGV3YXJlICYmIHR5cGVvZiBtaWRkbGV3YXJlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyKSA6IFwiYG1pZGRsZXdhcmVgIGZpZWxkIG11c3QgYmUgYSBjYWxsYmFja1wiKTtcbiAgfVxuICBsZXQgZmluYWxNaWRkbGV3YXJlO1xuICBpZiAodHlwZW9mIG1pZGRsZXdhcmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZpbmFsTWlkZGxld2FyZSA9IG1pZGRsZXdhcmUoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIUFycmF5LmlzQXJyYXkoZmluYWxNaWRkbGV3YXJlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMykgOiBcIndoZW4gdXNpbmcgYSBtaWRkbGV3YXJlIGJ1aWxkZXIgZnVuY3Rpb24sIGFuIGFycmF5IG9mIG1pZGRsZXdhcmUgbXVzdCBiZSByZXR1cm5lZFwiKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZmluYWxNaWRkbGV3YXJlID0gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKTtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGZpbmFsTWlkZGxld2FyZS5zb21lKChpdGVtKSA9PiB0eXBlb2YgaXRlbSAhPT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDQpIDogXCJlYWNoIG1pZGRsZXdhcmUgcHJvdmlkZWQgdG8gY29uZmlndXJlU3RvcmUgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIGxldCBmaW5hbENvbXBvc2UgPSBjb21wb3NlMjtcbiAgaWYgKGRldlRvb2xzKSB7XG4gICAgZmluYWxDb21wb3NlID0gY29tcG9zZVdpdGhEZXZUb29scyh7XG4gICAgICAvLyBFbmFibGUgY2FwdHVyZSBvZiBzdGFjayB0cmFjZXMgZm9yIGRpc3BhdGNoZWQgUmVkdXggYWN0aW9uc1xuICAgICAgdHJhY2U6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIixcbiAgICAgIC4uLnR5cGVvZiBkZXZUb29scyA9PT0gXCJvYmplY3RcIiAmJiBkZXZUb29sc1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IG1pZGRsZXdhcmVFbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSguLi5maW5hbE1pZGRsZXdhcmUpO1xuICBjb25zdCBnZXREZWZhdWx0RW5oYW5jZXJzID0gYnVpbGRHZXREZWZhdWx0RW5oYW5jZXJzKG1pZGRsZXdhcmVFbmhhbmNlcik7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZW5oYW5jZXJzICYmIHR5cGVvZiBlbmhhbmNlcnMgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDUpIDogXCJgZW5oYW5jZXJzYCBmaWVsZCBtdXN0IGJlIGEgY2FsbGJhY2tcIik7XG4gIH1cbiAgbGV0IHN0b3JlRW5oYW5jZXJzID0gdHlwZW9mIGVuaGFuY2VycyA9PT0gXCJmdW5jdGlvblwiID8gZW5oYW5jZXJzKGdldERlZmF1bHRFbmhhbmNlcnMpIDogZ2V0RGVmYXVsdEVuaGFuY2VycygpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFBcnJheS5pc0FycmF5KHN0b3JlRW5oYW5jZXJzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDYpIDogXCJgZW5oYW5jZXJzYCBjYWxsYmFjayBtdXN0IHJldHVybiBhbiBhcnJheVwiKTtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHN0b3JlRW5oYW5jZXJzLnNvbWUoKGl0ZW0pID0+IHR5cGVvZiBpdGVtICE9PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNykgOiBcImVhY2ggZW5oYW5jZXIgcHJvdmlkZWQgdG8gY29uZmlndXJlU3RvcmUgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZmluYWxNaWRkbGV3YXJlLmxlbmd0aCAmJiAhc3RvcmVFbmhhbmNlcnMuaW5jbHVkZXMobWlkZGxld2FyZUVuaGFuY2VyKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJtaWRkbGV3YXJlcyB3ZXJlIHByb3ZpZGVkLCBidXQgbWlkZGxld2FyZSBlbmhhbmNlciB3YXMgbm90IGluY2x1ZGVkIGluIGZpbmFsIGVuaGFuY2VycyAtIG1ha2Ugc3VyZSB0byBjYWxsIGBnZXREZWZhdWx0RW5oYW5jZXJzYFwiKTtcbiAgfVxuICBjb25zdCBjb21wb3NlZEVuaGFuY2VyID0gZmluYWxDb21wb3NlKC4uLnN0b3JlRW5oYW5jZXJzKTtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgY29tcG9zZWRFbmhhbmNlcik7XG59XG5cbi8vIHNyYy9jcmVhdGVSZWR1Y2VyLnRzXG5pbXBvcnQgeyBwcm9kdWNlIGFzIGNyZWF0ZU5leHRTdGF0ZTIsIGlzRHJhZnQgYXMgaXNEcmFmdDIsIGlzRHJhZnRhYmxlIGFzIGlzRHJhZnRhYmxlMiB9IGZyb20gXCJpbW1lclwiO1xuXG4vLyBzcmMvbWFwQnVpbGRlcnMudHNcbmZ1bmN0aW9uIGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKGJ1aWxkZXJDYWxsYmFjaykge1xuICBjb25zdCBhY3Rpb25zTWFwID0ge307XG4gIGNvbnN0IGFjdGlvbk1hdGNoZXJzID0gW107XG4gIGxldCBkZWZhdWx0Q2FzZVJlZHVjZXI7XG4gIGNvbnN0IGJ1aWxkZXIgPSB7XG4gICAgYWRkQ2FzZSh0eXBlT3JBY3Rpb25DcmVhdG9yLCByZWR1Y2VyKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGlmIChhY3Rpb25NYXRjaGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMjYpIDogXCJgYnVpbGRlci5hZGRDYXNlYCBzaG91bGQgb25seSBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGJ1aWxkZXIuYWRkTWF0Y2hlcmBcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDI3KSA6IFwiYGJ1aWxkZXIuYWRkQ2FzZWAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiB0eXBlT3JBY3Rpb25DcmVhdG9yID09PSBcInN0cmluZ1wiID8gdHlwZU9yQWN0aW9uQ3JlYXRvciA6IHR5cGVPckFjdGlvbkNyZWF0b3IudHlwZTtcbiAgICAgIGlmICghdHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyOCkgOiBcImBidWlsZGVyLmFkZENhc2VgIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBhbiBlbXB0eSBhY3Rpb24gdHlwZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlIGluIGFjdGlvbnNNYXApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMjkpIDogYFxcYGJ1aWxkZXIuYWRkQ2FzZVxcYCBjYW5ub3QgYmUgY2FsbGVkIHdpdGggdHdvIHJlZHVjZXJzIGZvciB0aGUgc2FtZSBhY3Rpb24gdHlwZSAnJHt0eXBlfSdgKTtcbiAgICAgIH1cbiAgICAgIGFjdGlvbnNNYXBbdHlwZV0gPSByZWR1Y2VyO1xuICAgICAgcmV0dXJuIGJ1aWxkZXI7XG4gICAgfSxcbiAgICBhZGRNYXRjaGVyKG1hdGNoZXIsIHJlZHVjZXIpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDMwKSA6IFwiYGJ1aWxkZXIuYWRkTWF0Y2hlcmAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYWN0aW9uTWF0Y2hlcnMucHVzaCh7XG4gICAgICAgIG1hdGNoZXIsXG4gICAgICAgIHJlZHVjZXJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGJ1aWxkZXI7XG4gICAgfSxcbiAgICBhZGREZWZhdWx0Q2FzZShyZWR1Y2VyKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzMSkgOiBcImBidWlsZGVyLmFkZERlZmF1bHRDYXNlYCBjYW4gb25seSBiZSBjYWxsZWQgb25jZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVmYXVsdENhc2VSZWR1Y2VyID0gcmVkdWNlcjtcbiAgICAgIHJldHVybiBidWlsZGVyO1xuICAgIH1cbiAgfTtcbiAgYnVpbGRlckNhbGxiYWNrKGJ1aWxkZXIpO1xuICByZXR1cm4gW2FjdGlvbnNNYXAsIGFjdGlvbk1hdGNoZXJzLCBkZWZhdWx0Q2FzZVJlZHVjZXJdO1xufVxuXG4vLyBzcmMvY3JlYXRlUmVkdWNlci50c1xuZnVuY3Rpb24gaXNTdGF0ZUZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCI7XG59XG5mdW5jdGlvbiBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgbWFwT3JCdWlsZGVyQ2FsbGJhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICh0eXBlb2YgbWFwT3JCdWlsZGVyQ2FsbGJhY2sgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDgpIDogXCJUaGUgb2JqZWN0IG5vdGF0aW9uIGZvciBgY3JlYXRlUmVkdWNlcmAgaGFzIGJlZW4gcmVtb3ZlZC4gUGxlYXNlIHVzZSB0aGUgJ2J1aWxkZXIgY2FsbGJhY2snIG5vdGF0aW9uIGluc3RlYWQ6IGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvYXBpL2NyZWF0ZVJlZHVjZXJcIik7XG4gICAgfVxuICB9XG4gIGxldCBbYWN0aW9uc01hcCwgZmluYWxBY3Rpb25NYXRjaGVycywgZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXJdID0gZXhlY3V0ZVJlZHVjZXJCdWlsZGVyQ2FsbGJhY2sobWFwT3JCdWlsZGVyQ2FsbGJhY2spO1xuICBsZXQgZ2V0SW5pdGlhbFN0YXRlO1xuICBpZiAoaXNTdGF0ZUZ1bmN0aW9uKGluaXRpYWxTdGF0ZSkpIHtcbiAgICBnZXRJbml0aWFsU3RhdGUgPSAoKSA9PiBmcmVlemVEcmFmdGFibGUoaW5pdGlhbFN0YXRlKCkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZyb3plbkluaXRpYWxTdGF0ZSA9IGZyZWV6ZURyYWZ0YWJsZShpbml0aWFsU3RhdGUpO1xuICAgIGdldEluaXRpYWxTdGF0ZSA9ICgpID0+IGZyb3plbkluaXRpYWxTdGF0ZTtcbiAgfVxuICBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCksIGFjdGlvbikge1xuICAgIGxldCBjYXNlUmVkdWNlcnMgPSBbYWN0aW9uc01hcFthY3Rpb24udHlwZV0sIC4uLmZpbmFsQWN0aW9uTWF0Y2hlcnMuZmlsdGVyKCh7XG4gICAgICBtYXRjaGVyXG4gICAgfSkgPT4gbWF0Y2hlcihhY3Rpb24pKS5tYXAoKHtcbiAgICAgIHJlZHVjZXI6IHJlZHVjZXIyXG4gICAgfSkgPT4gcmVkdWNlcjIpXTtcbiAgICBpZiAoY2FzZVJlZHVjZXJzLmZpbHRlcigoY3IpID0+ICEhY3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2FzZVJlZHVjZXJzID0gW2ZpbmFsRGVmYXVsdENhc2VSZWR1Y2VyXTtcbiAgICB9XG4gICAgcmV0dXJuIGNhc2VSZWR1Y2Vycy5yZWR1Y2UoKHByZXZpb3VzU3RhdGUsIGNhc2VSZWR1Y2VyKSA9PiB7XG4gICAgICBpZiAoY2FzZVJlZHVjZXIpIHtcbiAgICAgICAgaWYgKGlzRHJhZnQyKHByZXZpb3VzU3RhdGUpKSB7XG4gICAgICAgICAgY29uc3QgZHJhZnQgPSBwcmV2aW91c1N0YXRlO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhc2VSZWR1Y2VyKGRyYWZ0LCBhY3Rpb24pO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzRHJhZnRhYmxlMihwcmV2aW91c1N0YXRlKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhc2VSZWR1Y2VyKHByZXZpb3VzU3RhdGUsIGFjdGlvbik7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNTdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXNTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQSBjYXNlIHJlZHVjZXIgb24gYSBub24tZHJhZnRhYmxlIHZhbHVlIG11c3Qgbm90IHJldHVybiB1bmRlZmluZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZU5leHRTdGF0ZTIocHJldmlvdXNTdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FzZVJlZHVjZXIoZHJhZnQsIGFjdGlvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2aW91c1N0YXRlO1xuICAgIH0sIHN0YXRlKTtcbiAgfVxuICByZWR1Y2VyLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTtcbiAgcmV0dXJuIHJlZHVjZXI7XG59XG5cbi8vIHNyYy9tYXRjaGVycy50c1xudmFyIG1hdGNoZXMgPSAobWF0Y2hlciwgYWN0aW9uKSA9PiB7XG4gIGlmIChoYXNNYXRjaEZ1bmN0aW9uKG1hdGNoZXIpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXIubWF0Y2goYWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbWF0Y2hlcihhY3Rpb24pO1xuICB9XG59O1xuZnVuY3Rpb24gaXNBbnlPZiguLi5tYXRjaGVycykge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIHJldHVybiBtYXRjaGVycy5zb21lKChtYXRjaGVyKSA9PiBtYXRjaGVzKG1hdGNoZXIsIGFjdGlvbikpO1xuICB9O1xufVxuZnVuY3Rpb24gaXNBbGxPZiguLi5tYXRjaGVycykge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIHJldHVybiBtYXRjaGVycy5ldmVyeSgobWF0Y2hlcikgPT4gbWF0Y2hlcyhtYXRjaGVyLCBhY3Rpb24pKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgdmFsaWRTdGF0dXMpIHtcbiAgaWYgKCFhY3Rpb24gfHwgIWFjdGlvbi5tZXRhKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGhhc1ZhbGlkUmVxdWVzdElkID0gdHlwZW9mIGFjdGlvbi5tZXRhLnJlcXVlc3RJZCA9PT0gXCJzdHJpbmdcIjtcbiAgY29uc3QgaGFzVmFsaWRSZXF1ZXN0U3RhdHVzID0gdmFsaWRTdGF0dXMuaW5kZXhPZihhY3Rpb24ubWV0YS5yZXF1ZXN0U3RhdHVzKSA+IC0xO1xuICByZXR1cm4gaGFzVmFsaWRSZXF1ZXN0SWQgJiYgaGFzVmFsaWRSZXF1ZXN0U3RhdHVzO1xufVxuZnVuY3Rpb24gaXNBc3luY1RodW5rQXJyYXkoYSkge1xuICByZXR1cm4gdHlwZW9mIGFbMF0gPT09IFwiZnVuY3Rpb25cIiAmJiBcInBlbmRpbmdcIiBpbiBhWzBdICYmIFwiZnVsZmlsbGVkXCIgaW4gYVswXSAmJiBcInJlamVjdGVkXCIgaW4gYVswXTtcbn1cbmZ1bmN0aW9uIGlzUGVuZGluZyguLi5hc3luY1RodW5rcykge1xuICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChhY3Rpb24pID0+IGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wicGVuZGluZ1wiXSk7XG4gIH1cbiAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcbiAgICByZXR1cm4gaXNQZW5kaW5nKCkoYXN5bmNUaHVua3NbMF0pO1xuICB9XG4gIHJldHVybiBpc0FueU9mKC4uLmFzeW5jVGh1bmtzLm1hcCgoYXN5bmNUaHVuaykgPT4gYXN5bmNUaHVuay5wZW5kaW5nKSk7XG59XG5mdW5jdGlvbiBpc1JlamVjdGVkKC4uLmFzeW5jVGh1bmtzKSB7XG4gIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKGFjdGlvbikgPT4gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCBbXCJyZWplY3RlZFwiXSk7XG4gIH1cbiAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcbiAgICByZXR1cm4gaXNSZWplY3RlZCgpKGFzeW5jVGh1bmtzWzBdKTtcbiAgfVxuICByZXR1cm4gaXNBbnlPZiguLi5hc3luY1RodW5rcy5tYXAoKGFzeW5jVGh1bmspID0+IGFzeW5jVGh1bmsucmVqZWN0ZWQpKTtcbn1cbmZ1bmN0aW9uIGlzUmVqZWN0ZWRXaXRoVmFsdWUoLi4uYXN5bmNUaHVua3MpIHtcbiAgY29uc3QgaGFzRmxhZyA9IChhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gYWN0aW9uICYmIGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLnJlamVjdGVkV2l0aFZhbHVlO1xuICB9O1xuICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGlzQWxsT2YoaXNSZWplY3RlZCguLi5hc3luY1RodW5rcyksIGhhc0ZsYWcpO1xuICB9XG4gIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XG4gICAgcmV0dXJuIGlzUmVqZWN0ZWRXaXRoVmFsdWUoKShhc3luY1RodW5rc1swXSk7XG4gIH1cbiAgcmV0dXJuIGlzQWxsT2YoaXNSZWplY3RlZCguLi5hc3luY1RodW5rcyksIGhhc0ZsYWcpO1xufVxuZnVuY3Rpb24gaXNGdWxmaWxsZWQoLi4uYXN5bmNUaHVua3MpIHtcbiAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoYWN0aW9uKSA9PiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFtcImZ1bGZpbGxlZFwiXSk7XG4gIH1cbiAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcbiAgICByZXR1cm4gaXNGdWxmaWxsZWQoKShhc3luY1RodW5rc1swXSk7XG4gIH1cbiAgcmV0dXJuIGlzQW55T2YoLi4uYXN5bmNUaHVua3MubWFwKChhc3luY1RodW5rKSA9PiBhc3luY1RodW5rLmZ1bGZpbGxlZCkpO1xufVxuZnVuY3Rpb24gaXNBc3luY1RodW5rQWN0aW9uKC4uLmFzeW5jVGh1bmtzKSB7XG4gIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKGFjdGlvbikgPT4gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCBbXCJwZW5kaW5nXCIsIFwiZnVsZmlsbGVkXCIsIFwicmVqZWN0ZWRcIl0pO1xuICB9XG4gIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XG4gICAgcmV0dXJuIGlzQXN5bmNUaHVua0FjdGlvbigpKGFzeW5jVGh1bmtzWzBdKTtcbiAgfVxuICByZXR1cm4gaXNBbnlPZiguLi5hc3luY1RodW5rcy5mbGF0TWFwKChhc3luY1RodW5rKSA9PiBbYXN5bmNUaHVuay5wZW5kaW5nLCBhc3luY1RodW5rLnJlamVjdGVkLCBhc3luY1RodW5rLmZ1bGZpbGxlZF0pKTtcbn1cblxuLy8gc3JjL25hbm9pZC50c1xudmFyIHVybEFscGhhYmV0ID0gXCJNb2R1bGVTeW1iaGFzT3duUHItMDEyMzQ1Njc4OUFCQ0RFRkdITlJWZmdjdGlVdnpfS3FZVEprTHhwWlhJalFXXCI7XG52YXIgbmFub2lkID0gKHNpemUgPSAyMSkgPT4ge1xuICBsZXQgaWQgPSBcIlwiO1xuICBsZXQgaSA9IHNpemU7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZCArPSB1cmxBbHBoYWJldFtNYXRoLnJhbmRvbSgpICogNjQgfCAwXTtcbiAgfVxuICByZXR1cm4gaWQ7XG59O1xuXG4vLyBzcmMvY3JlYXRlQXN5bmNUaHVuay50c1xudmFyIGNvbW1vblByb3BlcnRpZXMgPSBbXCJuYW1lXCIsIFwibWVzc2FnZVwiLCBcInN0YWNrXCIsIFwiY29kZVwiXTtcbnZhciBSZWplY3RXaXRoVmFsdWUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHBheWxvYWQsIG1ldGEpIHtcbiAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xuICAgIHRoaXMubWV0YSA9IG1ldGE7XG4gIH1cbiAgLypcbiAgdHlwZS1vbmx5IHByb3BlcnR5IHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gUmVqZWN0V2l0aFZhbHVlIGFuZCBGdWxmaWxsV2l0aE1ldGFcbiAgZG9lcyBub3QgZXhpc3QgYXQgcnVudGltZVxuICAqL1xuICBfdHlwZTtcbn07XG52YXIgRnVsZmlsbFdpdGhNZXRhID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihwYXlsb2FkLCBtZXRhKSB7XG4gICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcbiAgICB0aGlzLm1ldGEgPSBtZXRhO1xuICB9XG4gIC8qXG4gIHR5cGUtb25seSBwcm9wZXJ0eSB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIFJlamVjdFdpdGhWYWx1ZSBhbmQgRnVsZmlsbFdpdGhNZXRhXG4gIGRvZXMgbm90IGV4aXN0IGF0IHJ1bnRpbWVcbiAgKi9cbiAgX3R5cGU7XG59O1xudmFyIG1pbmlTZXJpYWxpemVFcnJvciA9ICh2YWx1ZSkgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2ltcGxlRXJyb3IgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIGNvbW1vblByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWVbcHJvcGVydHldID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHNpbXBsZUVycm9yW3Byb3BlcnR5XSA9IHZhbHVlW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNpbXBsZUVycm9yO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogU3RyaW5nKHZhbHVlKVxuICB9O1xufTtcbnZhciBjcmVhdGVBc3luY1RodW5rID0gLyogQF9fUFVSRV9fICovICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNyZWF0ZUFzeW5jVGh1bmsyKHR5cGVQcmVmaXgsIHBheWxvYWRDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZnVsZmlsbGVkID0gY3JlYXRlQWN0aW9uKHR5cGVQcmVmaXggKyBcIi9mdWxmaWxsZWRcIiwgKHBheWxvYWQsIHJlcXVlc3RJZCwgYXJnLCBtZXRhKSA9PiAoe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgLi4ubWV0YSB8fCB7fSxcbiAgICAgICAgYXJnLFxuICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgIHJlcXVlc3RTdGF0dXM6IFwiZnVsZmlsbGVkXCJcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgY29uc3QgcGVuZGluZyA9IGNyZWF0ZUFjdGlvbih0eXBlUHJlZml4ICsgXCIvcGVuZGluZ1wiLCAocmVxdWVzdElkLCBhcmcsIG1ldGEpID0+ICh7XG4gICAgICBwYXlsb2FkOiB2b2lkIDAsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIC4uLm1ldGEgfHwge30sXG4gICAgICAgIGFyZyxcbiAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICByZXF1ZXN0U3RhdHVzOiBcInBlbmRpbmdcIlxuICAgICAgfVxuICAgIH0pKTtcbiAgICBjb25zdCByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbih0eXBlUHJlZml4ICsgXCIvcmVqZWN0ZWRcIiwgKGVycm9yLCByZXF1ZXN0SWQsIGFyZywgcGF5bG9hZCwgbWV0YSkgPT4gKHtcbiAgICAgIHBheWxvYWQsXG4gICAgICBlcnJvcjogKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemVFcnJvciB8fCBtaW5pU2VyaWFsaXplRXJyb3IpKGVycm9yIHx8IFwiUmVqZWN0ZWRcIiksXG4gICAgICBtZXRhOiB7XG4gICAgICAgIC4uLm1ldGEgfHwge30sXG4gICAgICAgIGFyZyxcbiAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICByZWplY3RlZFdpdGhWYWx1ZTogISFwYXlsb2FkLFxuICAgICAgICByZXF1ZXN0U3RhdHVzOiBcInJlamVjdGVkXCIsXG4gICAgICAgIGFib3J0ZWQ6IGVycm9yPy5uYW1lID09PSBcIkFib3J0RXJyb3JcIixcbiAgICAgICAgY29uZGl0aW9uOiBlcnJvcj8ubmFtZSA9PT0gXCJDb25kaXRpb25FcnJvclwiXG4gICAgICB9XG4gICAgfSkpO1xuICAgIGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoYXJnKSB7XG4gICAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmEpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdElkID0gb3B0aW9ucz8uaWRHZW5lcmF0b3IgPyBvcHRpb25zLmlkR2VuZXJhdG9yKGFyZykgOiBuYW5vaWQoKTtcbiAgICAgICAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICBsZXQgYWJvcnRIYW5kbGVyO1xuICAgICAgICBsZXQgYWJvcnRSZWFzb247XG4gICAgICAgIGZ1bmN0aW9uIGFib3J0KHJlYXNvbikge1xuICAgICAgICAgIGFib3J0UmVhc29uID0gcmVhc29uO1xuICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgZmluYWxBY3Rpb247XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBjb25kaXRpb25SZXN1bHQgPSBvcHRpb25zPy5jb25kaXRpb24/LihhcmcsIHtcbiAgICAgICAgICAgICAgZ2V0U3RhdGUsXG4gICAgICAgICAgICAgIGV4dHJhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpc1RoZW5hYmxlKGNvbmRpdGlvblJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uUmVzdWx0ID0gYXdhaXQgY29uZGl0aW9uUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvblJlc3VsdCA9PT0gZmFsc2UgfHwgYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbmRpdGlvbkVycm9yXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBYm9ydGVkIGR1ZSB0byBjb25kaXRpb24gY2FsbGJhY2sgcmV0dXJuaW5nIGZhbHNlLlwiXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhYm9ydGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgYWJvcnRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIkFib3J0RXJyb3JcIixcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGFib3J0UmVhc29uIHx8IFwiQWJvcnRlZFwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGFib3J0SGFuZGxlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHBlbmRpbmcocmVxdWVzdElkLCBhcmcsIG9wdGlvbnM/LmdldFBlbmRpbmdNZXRhPy4oe1xuICAgICAgICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBnZXRTdGF0ZSxcbiAgICAgICAgICAgICAgZXh0cmFcbiAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICBmaW5hbEFjdGlvbiA9IGF3YWl0IFByb21pc2UucmFjZShbYWJvcnRlZFByb21pc2UsIFByb21pc2UucmVzb2x2ZShwYXlsb2FkQ3JlYXRvcihhcmcsIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2gsXG4gICAgICAgICAgICAgIGdldFN0YXRlLFxuICAgICAgICAgICAgICBleHRyYSxcbiAgICAgICAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICAgICAgICBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwsXG4gICAgICAgICAgICAgIGFib3J0LFxuICAgICAgICAgICAgICByZWplY3RXaXRoVmFsdWU6ICh2YWx1ZSwgbWV0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVqZWN0V2l0aFZhbHVlKHZhbHVlLCBtZXRhKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVsZmlsbFdpdGhWYWx1ZTogKHZhbHVlLCBtZXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGdWxmaWxsV2l0aE1ldGEodmFsdWUsIG1ldGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZWplY3RXaXRoVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZXN1bHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEZ1bGZpbGxXaXRoTWV0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdWxmaWxsZWQocmVzdWx0LnBheWxvYWQsIHJlcXVlc3RJZCwgYXJnLCByZXN1bHQubWV0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bGZpbGxlZChyZXN1bHQsIHJlcXVlc3RJZCwgYXJnKTtcbiAgICAgICAgICAgIH0pXSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBmaW5hbEFjdGlvbiA9IGVyciBpbnN0YW5jZW9mIFJlamVjdFdpdGhWYWx1ZSA/IHJlamVjdGVkKG51bGwsIHJlcXVlc3RJZCwgYXJnLCBlcnIucGF5bG9hZCwgZXJyLm1ldGEpIDogcmVqZWN0ZWQoZXJyLCByZXF1ZXN0SWQsIGFyZyk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChhYm9ydEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgYWJvcnRIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc2tpcERpc3BhdGNoID0gb3B0aW9ucyAmJiAhb3B0aW9ucy5kaXNwYXRjaENvbmRpdGlvblJlamVjdGlvbiAmJiByZWplY3RlZC5tYXRjaChmaW5hbEFjdGlvbikgJiYgZmluYWxBY3Rpb24ubWV0YS5jb25kaXRpb247XG4gICAgICAgICAgaWYgKCFza2lwRGlzcGF0Y2gpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZpbmFsQWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZpbmFsQWN0aW9uO1xuICAgICAgICB9KCk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb21pc2UsIHtcbiAgICAgICAgICBhYm9ydCxcbiAgICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgICAgYXJnLFxuICAgICAgICAgIHVud3JhcCgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4odW53cmFwUmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWN0aW9uQ3JlYXRvciwge1xuICAgICAgcGVuZGluZyxcbiAgICAgIHJlamVjdGVkLFxuICAgICAgZnVsZmlsbGVkLFxuICAgICAgc2V0dGxlZDogaXNBbnlPZihyZWplY3RlZCwgZnVsZmlsbGVkKSxcbiAgICAgIHR5cGVQcmVmaXhcbiAgICB9KTtcbiAgfVxuICBjcmVhdGVBc3luY1RodW5rMi53aXRoVHlwZXMgPSAoKSA9PiBjcmVhdGVBc3luY1RodW5rMjtcbiAgcmV0dXJuIGNyZWF0ZUFzeW5jVGh1bmsyO1xufSkoKTtcbmZ1bmN0aW9uIHVud3JhcFJlc3VsdChhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLnJlamVjdGVkV2l0aFZhbHVlKSB7XG4gICAgdGhyb3cgYWN0aW9uLnBheWxvYWQ7XG4gIH1cbiAgaWYgKGFjdGlvbi5lcnJvcikge1xuICAgIHRocm93IGFjdGlvbi5lcnJvcjtcbiAgfVxuICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG59XG5mdW5jdGlvbiBpc1RoZW5hYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuLy8gc3JjL2NyZWF0ZVNsaWNlLnRzXG52YXIgYXN5bmNUaHVua1N5bWJvbCA9IC8qIEBfX1BVUkVfXyAqLyBTeW1ib2wuZm9yKFwicnRrLXNsaWNlLWNyZWF0ZWFzeW5jdGh1bmtcIik7XG52YXIgYXN5bmNUaHVua0NyZWF0b3IgPSB7XG4gIFthc3luY1RodW5rU3ltYm9sXTogY3JlYXRlQXN5bmNUaHVua1xufTtcbnZhciBSZWR1Y2VyVHlwZSA9IC8qIEBfX1BVUkVfXyAqLyAoKFJlZHVjZXJUeXBlMikgPT4ge1xuICBSZWR1Y2VyVHlwZTJbXCJyZWR1Y2VyXCJdID0gXCJyZWR1Y2VyXCI7XG4gIFJlZHVjZXJUeXBlMltcInJlZHVjZXJXaXRoUHJlcGFyZVwiXSA9IFwicmVkdWNlcldpdGhQcmVwYXJlXCI7XG4gIFJlZHVjZXJUeXBlMltcImFzeW5jVGh1bmtcIl0gPSBcImFzeW5jVGh1bmtcIjtcbiAgcmV0dXJuIFJlZHVjZXJUeXBlMjtcbn0pKFJlZHVjZXJUeXBlIHx8IHt9KTtcbmZ1bmN0aW9uIGdldFR5cGUoc2xpY2UsIGFjdGlvbktleSkge1xuICByZXR1cm4gYCR7c2xpY2V9LyR7YWN0aW9uS2V5fWA7XG59XG5mdW5jdGlvbiBidWlsZENyZWF0ZVNsaWNlKHtcbiAgY3JlYXRvcnNcbn0gPSB7fSkge1xuICBjb25zdCBjQVQgPSBjcmVhdG9ycz8uYXN5bmNUaHVuaz8uW2FzeW5jVGh1bmtTeW1ib2xdO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlU2xpY2UyKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lLFxuICAgICAgcmVkdWNlclBhdGggPSBuYW1lXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMSkgOiBcImBuYW1lYCBpcyBhIHJlcXVpcmVkIG9wdGlvbiBmb3IgY3JlYXRlU2xpY2VcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbml0aWFsU3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91IG11c3QgcHJvdmlkZSBhbiBgaW5pdGlhbFN0YXRlYCB2YWx1ZSB0aGF0IGlzIG5vdCBgdW5kZWZpbmVkYC4gWW91IG1heSBoYXZlIG1pc3NwZWxsZWQgYGluaXRpYWxTdGF0ZWBcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlZHVjZXJzID0gKHR5cGVvZiBvcHRpb25zLnJlZHVjZXJzID09PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zLnJlZHVjZXJzKGJ1aWxkUmVkdWNlckNyZWF0b3JzKCkpIDogb3B0aW9ucy5yZWR1Y2VycykgfHwge307XG4gICAgY29uc3QgcmVkdWNlck5hbWVzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICBzbGljZUNhc2VSZWR1Y2Vyc0J5TmFtZToge30sXG4gICAgICBzbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZToge30sXG4gICAgICBhY3Rpb25DcmVhdG9yczoge30sXG4gICAgICBzbGljZU1hdGNoZXJzOiBbXVxuICAgIH07XG4gICAgY29uc3QgY29udGV4dE1ldGhvZHMgPSB7XG4gICAgICBhZGRDYXNlKHR5cGVPckFjdGlvbkNyZWF0b3IsIHJlZHVjZXIyKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdHlwZU9yQWN0aW9uQ3JlYXRvciA9PT0gXCJzdHJpbmdcIiA/IHR5cGVPckFjdGlvbkNyZWF0b3IgOiB0eXBlT3JBY3Rpb25DcmVhdG9yLnR5cGU7XG4gICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEyKSA6IFwiYGNvbnRleHQuYWRkQ2FzZWAgY2Fubm90IGJlIGNhbGxlZCB3aXRoIGFuIGVtcHR5IGFjdGlvbiB0eXBlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlIGluIGNvbnRleHQuc2xpY2VDYXNlUmVkdWNlcnNCeVR5cGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMykgOiBcImBjb250ZXh0LmFkZENhc2VgIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCB0d28gcmVkdWNlcnMgZm9yIHRoZSBzYW1lIGFjdGlvbiB0eXBlOiBcIiArIHR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuc2xpY2VDYXNlUmVkdWNlcnNCeVR5cGVbdHlwZV0gPSByZWR1Y2VyMjtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRNZXRob2RzO1xuICAgICAgfSxcbiAgICAgIGFkZE1hdGNoZXIobWF0Y2hlciwgcmVkdWNlcjIpIHtcbiAgICAgICAgY29udGV4dC5zbGljZU1hdGNoZXJzLnB1c2goe1xuICAgICAgICAgIG1hdGNoZXIsXG4gICAgICAgICAgcmVkdWNlcjogcmVkdWNlcjJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb250ZXh0TWV0aG9kcztcbiAgICAgIH0sXG4gICAgICBleHBvc2VBY3Rpb24obmFtZTIsIGFjdGlvbkNyZWF0b3IpIHtcbiAgICAgICAgY29udGV4dC5hY3Rpb25DcmVhdG9yc1tuYW1lMl0gPSBhY3Rpb25DcmVhdG9yO1xuICAgICAgICByZXR1cm4gY29udGV4dE1ldGhvZHM7XG4gICAgICB9LFxuICAgICAgZXhwb3NlQ2FzZVJlZHVjZXIobmFtZTIsIHJlZHVjZXIyKSB7XG4gICAgICAgIGNvbnRleHQuc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWVbbmFtZTJdID0gcmVkdWNlcjI7XG4gICAgICAgIHJldHVybiBjb250ZXh0TWV0aG9kcztcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlZHVjZXJOYW1lcy5mb3JFYWNoKChyZWR1Y2VyTmFtZSkgPT4ge1xuICAgICAgY29uc3QgcmVkdWNlckRlZmluaXRpb24gPSByZWR1Y2Vyc1tyZWR1Y2VyTmFtZV07XG4gICAgICBjb25zdCByZWR1Y2VyRGV0YWlscyA9IHtcbiAgICAgICAgcmVkdWNlck5hbWUsXG4gICAgICAgIHR5cGU6IGdldFR5cGUobmFtZSwgcmVkdWNlck5hbWUpLFxuICAgICAgICBjcmVhdGVOb3RhdGlvbjogdHlwZW9mIG9wdGlvbnMucmVkdWNlcnMgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgfTtcbiAgICAgIGlmIChpc0FzeW5jVGh1bmtTbGljZVJlZHVjZXJEZWZpbml0aW9uKHJlZHVjZXJEZWZpbml0aW9uKSkge1xuICAgICAgICBoYW5kbGVUaHVua0Nhc2VSZWR1Y2VyRGVmaW5pdGlvbihyZWR1Y2VyRGV0YWlscywgcmVkdWNlckRlZmluaXRpb24sIGNvbnRleHRNZXRob2RzLCBjQVQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGxlTm9ybWFsUmVkdWNlckRlZmluaXRpb24ocmVkdWNlckRldGFpbHMsIHJlZHVjZXJEZWZpbml0aW9uLCBjb250ZXh0TWV0aG9kcyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gYnVpbGRSZWR1Y2VyKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuZXh0cmFSZWR1Y2VycyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE0KSA6IFwiVGhlIG9iamVjdCBub3RhdGlvbiBmb3IgYGNyZWF0ZVNsaWNlLmV4dHJhUmVkdWNlcnNgIGhhcyBiZWVuIHJlbW92ZWQuIFBsZWFzZSB1c2UgdGhlICdidWlsZGVyIGNhbGxiYWNrJyBub3RhdGlvbiBpbnN0ZWFkOiBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL2FwaS9jcmVhdGVTbGljZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgW2V4dHJhUmVkdWNlcnMgPSB7fSwgYWN0aW9uTWF0Y2hlcnMgPSBbXSwgZGVmYXVsdENhc2VSZWR1Y2VyID0gdm9pZCAwXSA9IHR5cGVvZiBvcHRpb25zLmV4dHJhUmVkdWNlcnMgPT09IFwiZnVuY3Rpb25cIiA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG9wdGlvbnMuZXh0cmFSZWR1Y2VycykgOiBbb3B0aW9ucy5leHRyYVJlZHVjZXJzXTtcbiAgICAgIGNvbnN0IGZpbmFsQ2FzZVJlZHVjZXJzID0ge1xuICAgICAgICAuLi5leHRyYVJlZHVjZXJzLFxuICAgICAgICAuLi5jb250ZXh0LnNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGNyZWF0ZVJlZHVjZXIob3B0aW9ucy5pbml0aWFsU3RhdGUsIChidWlsZGVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBmaW5hbENhc2VSZWR1Y2Vycykge1xuICAgICAgICAgIGJ1aWxkZXIuYWRkQ2FzZShrZXksIGZpbmFsQ2FzZVJlZHVjZXJzW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHNNIG9mIGNvbnRleHQuc2xpY2VNYXRjaGVycykge1xuICAgICAgICAgIGJ1aWxkZXIuYWRkTWF0Y2hlcihzTS5tYXRjaGVyLCBzTS5yZWR1Y2VyKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBtIG9mIGFjdGlvbk1hdGNoZXJzKSB7XG4gICAgICAgICAgYnVpbGRlci5hZGRNYXRjaGVyKG0ubWF0Y2hlciwgbS5yZWR1Y2VyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmYXVsdENhc2VSZWR1Y2VyKSB7XG4gICAgICAgICAgYnVpbGRlci5hZGREZWZhdWx0Q2FzZShkZWZhdWx0Q2FzZVJlZHVjZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0U2VsZiA9IChzdGF0ZSkgPT4gc3RhdGU7XG4gICAgY29uc3QgaW5qZWN0ZWRTZWxlY3RvckNhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICBsZXQgX3JlZHVjZXI7XG4gICAgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBpZiAoIV9yZWR1Y2VyKSBfcmVkdWNlciA9IGJ1aWxkUmVkdWNlcigpO1xuICAgICAgcmV0dXJuIF9yZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICBpZiAoIV9yZWR1Y2VyKSBfcmVkdWNlciA9IGJ1aWxkUmVkdWNlcigpO1xuICAgICAgcmV0dXJuIF9yZWR1Y2VyLmdldEluaXRpYWxTdGF0ZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYWtlU2VsZWN0b3JQcm9wcyhyZWR1Y2VyUGF0aDIsIGluamVjdGVkID0gZmFsc2UpIHtcbiAgICAgIGZ1bmN0aW9uIHNlbGVjdFNsaWNlKHN0YXRlKSB7XG4gICAgICAgIGxldCBzbGljZVN0YXRlID0gc3RhdGVbcmVkdWNlclBhdGgyXTtcbiAgICAgICAgaWYgKHR5cGVvZiBzbGljZVN0YXRlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaWYgKGluamVjdGVkKSB7XG4gICAgICAgICAgICBzbGljZVN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE1KSA6IFwic2VsZWN0U2xpY2UgcmV0dXJuZWQgdW5kZWZpbmVkIGZvciBhbiB1bmluamVjdGVkIHNsaWNlIHJlZHVjZXJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzbGljZVN0YXRlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKHNlbGVjdFN0YXRlID0gc2VsZWN0U2VsZikge1xuICAgICAgICBjb25zdCBzZWxlY3RvckNhY2hlID0gZW1wbGFjZShpbmplY3RlZFNlbGVjdG9yQ2FjaGUsIGluamVjdGVkLCB7XG4gICAgICAgICAgaW5zZXJ0OiAoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVtcGxhY2Uoc2VsZWN0b3JDYWNoZSwgc2VsZWN0U3RhdGUsIHtcbiAgICAgICAgICBpbnNlcnQ6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZTIsIHNlbGVjdG9yXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLnNlbGVjdG9ycyA/PyB7fSkpIHtcbiAgICAgICAgICAgICAgbWFwW25hbWUyXSA9IHdyYXBTZWxlY3RvcihzZWxlY3Rvciwgc2VsZWN0U3RhdGUsIGdldEluaXRpYWxTdGF0ZSwgaW5qZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVkdWNlclBhdGg6IHJlZHVjZXJQYXRoMixcbiAgICAgICAgZ2V0U2VsZWN0b3JzLFxuICAgICAgICBnZXQgc2VsZWN0b3JzKCkge1xuICAgICAgICAgIHJldHVybiBnZXRTZWxlY3RvcnMoc2VsZWN0U2xpY2UpO1xuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RTbGljZVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2xpY2UgPSB7XG4gICAgICBuYW1lLFxuICAgICAgcmVkdWNlcixcbiAgICAgIGFjdGlvbnM6IGNvbnRleHQuYWN0aW9uQ3JlYXRvcnMsXG4gICAgICBjYXNlUmVkdWNlcnM6IGNvbnRleHQuc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWUsXG4gICAgICBnZXRJbml0aWFsU3RhdGUsXG4gICAgICAuLi5tYWtlU2VsZWN0b3JQcm9wcyhyZWR1Y2VyUGF0aCksXG4gICAgICBpbmplY3RJbnRvKGluamVjdGFibGUsIHtcbiAgICAgICAgcmVkdWNlclBhdGg6IHBhdGhPcHQsXG4gICAgICAgIC4uLmNvbmZpZ1xuICAgICAgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IG5ld1JlZHVjZXJQYXRoID0gcGF0aE9wdCA/PyByZWR1Y2VyUGF0aDtcbiAgICAgICAgaW5qZWN0YWJsZS5pbmplY3Qoe1xuICAgICAgICAgIHJlZHVjZXJQYXRoOiBuZXdSZWR1Y2VyUGF0aCxcbiAgICAgICAgICByZWR1Y2VyXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2xpY2UsXG4gICAgICAgICAgLi4ubWFrZVNlbGVjdG9yUHJvcHMobmV3UmVkdWNlclBhdGgsIHRydWUpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gc2xpY2U7XG4gIH07XG59XG5mdW5jdGlvbiB3cmFwU2VsZWN0b3Ioc2VsZWN0b3IsIHNlbGVjdFN0YXRlLCBnZXRJbml0aWFsU3RhdGUsIGluamVjdGVkKSB7XG4gIGZ1bmN0aW9uIHdyYXBwZXIocm9vdFN0YXRlLCAuLi5hcmdzKSB7XG4gICAgbGV0IHNsaWNlU3RhdGUgPSBzZWxlY3RTdGF0ZShyb290U3RhdGUpO1xuICAgIGlmICh0eXBlb2Ygc2xpY2VTdGF0ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKGluamVjdGVkKSB7XG4gICAgICAgIHNsaWNlU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE2KSA6IFwic2VsZWN0U3RhdGUgcmV0dXJuZWQgdW5kZWZpbmVkIGZvciBhbiB1bmluamVjdGVkIHNsaWNlIHJlZHVjZXJcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RvcihzbGljZVN0YXRlLCAuLi5hcmdzKTtcbiAgfVxuICB3cmFwcGVyLnVud3JhcHBlZCA9IHNlbGVjdG9yO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cbnZhciBjcmVhdGVTbGljZSA9IC8qIEBfX1BVUkVfXyAqLyBidWlsZENyZWF0ZVNsaWNlKCk7XG5mdW5jdGlvbiBidWlsZFJlZHVjZXJDcmVhdG9ycygpIHtcbiAgZnVuY3Rpb24gYXN5bmNUaHVuayhwYXlsb2FkQ3JlYXRvciwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9yZWR1Y2VyRGVmaW5pdGlvblR5cGU6IFwiYXN5bmNUaHVua1wiIC8qIGFzeW5jVGh1bmsgKi8sXG4gICAgICBwYXlsb2FkQ3JlYXRvcixcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH07XG4gIH1cbiAgYXN5bmNUaHVuay53aXRoVHlwZXMgPSAoKSA9PiBhc3luY1RodW5rO1xuICByZXR1cm4ge1xuICAgIHJlZHVjZXIoY2FzZVJlZHVjZXIpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgLy8gaGFjayBzbyB0aGUgd3JhcHBpbmcgZnVuY3Rpb24gaGFzIHRoZSBzYW1lIG5hbWUgYXMgdGhlIG9yaWdpbmFsXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gY3JlYXRlIGEgd3JhcHBlciBzbyB0aGUgYHJlZHVjZXJEZWZpbml0aW9uVHlwZWAgaXMgbm90IGFzc2lnbmVkIHRvIHRoZSBvcmlnaW5hbFxuICAgICAgICBbY2FzZVJlZHVjZXIubmFtZV0oLi4uYXJncykge1xuICAgICAgICAgIHJldHVybiBjYXNlUmVkdWNlciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgfVtjYXNlUmVkdWNlci5uYW1lXSwge1xuICAgICAgICBfcmVkdWNlckRlZmluaXRpb25UeXBlOiBcInJlZHVjZXJcIiAvKiByZWR1Y2VyICovXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHByZXBhcmVkUmVkdWNlcihwcmVwYXJlLCByZWR1Y2VyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfcmVkdWNlckRlZmluaXRpb25UeXBlOiBcInJlZHVjZXJXaXRoUHJlcGFyZVwiIC8qIHJlZHVjZXJXaXRoUHJlcGFyZSAqLyxcbiAgICAgICAgcHJlcGFyZSxcbiAgICAgICAgcmVkdWNlclxuICAgICAgfTtcbiAgICB9LFxuICAgIGFzeW5jVGh1bmtcbiAgfTtcbn1cbmZ1bmN0aW9uIGhhbmRsZU5vcm1hbFJlZHVjZXJEZWZpbml0aW9uKHtcbiAgdHlwZSxcbiAgcmVkdWNlck5hbWUsXG4gIGNyZWF0ZU5vdGF0aW9uXG59LCBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZSwgY29udGV4dCkge1xuICBsZXQgY2FzZVJlZHVjZXI7XG4gIGxldCBwcmVwYXJlQ2FsbGJhY2s7XG4gIGlmIChcInJlZHVjZXJcIiBpbiBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZSkge1xuICAgIGlmIChjcmVhdGVOb3RhdGlvbiAmJiAhaXNDYXNlUmVkdWNlcldpdGhQcmVwYXJlRGVmaW5pdGlvbihtYXliZVJlZHVjZXJXaXRoUHJlcGFyZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE3KSA6IFwiUGxlYXNlIHVzZSB0aGUgYGNyZWF0ZS5wcmVwYXJlZFJlZHVjZXJgIG5vdGF0aW9uIGZvciBwcmVwYXJlZCBhY3Rpb24gY3JlYXRvcnMgd2l0aCB0aGUgYGNyZWF0ZWAgbm90YXRpb24uXCIpO1xuICAgIH1cbiAgICBjYXNlUmVkdWNlciA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlLnJlZHVjZXI7XG4gICAgcHJlcGFyZUNhbGxiYWNrID0gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUucHJlcGFyZTtcbiAgfSBlbHNlIHtcbiAgICBjYXNlUmVkdWNlciA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlO1xuICB9XG4gIGNvbnRleHQuYWRkQ2FzZSh0eXBlLCBjYXNlUmVkdWNlcikuZXhwb3NlQ2FzZVJlZHVjZXIocmVkdWNlck5hbWUsIGNhc2VSZWR1Y2VyKS5leHBvc2VBY3Rpb24ocmVkdWNlck5hbWUsIHByZXBhcmVDYWxsYmFjayA/IGNyZWF0ZUFjdGlvbih0eXBlLCBwcmVwYXJlQ2FsbGJhY2spIDogY3JlYXRlQWN0aW9uKHR5cGUpKTtcbn1cbmZ1bmN0aW9uIGlzQXN5bmNUaHVua1NsaWNlUmVkdWNlckRlZmluaXRpb24ocmVkdWNlckRlZmluaXRpb24pIHtcbiAgcmV0dXJuIHJlZHVjZXJEZWZpbml0aW9uLl9yZWR1Y2VyRGVmaW5pdGlvblR5cGUgPT09IFwiYXN5bmNUaHVua1wiIC8qIGFzeW5jVGh1bmsgKi87XG59XG5mdW5jdGlvbiBpc0Nhc2VSZWR1Y2VyV2l0aFByZXBhcmVEZWZpbml0aW9uKHJlZHVjZXJEZWZpbml0aW9uKSB7XG4gIHJldHVybiByZWR1Y2VyRGVmaW5pdGlvbi5fcmVkdWNlckRlZmluaXRpb25UeXBlID09PSBcInJlZHVjZXJXaXRoUHJlcGFyZVwiIC8qIHJlZHVjZXJXaXRoUHJlcGFyZSAqLztcbn1cbmZ1bmN0aW9uIGhhbmRsZVRodW5rQ2FzZVJlZHVjZXJEZWZpbml0aW9uKHtcbiAgdHlwZSxcbiAgcmVkdWNlck5hbWVcbn0sIHJlZHVjZXJEZWZpbml0aW9uLCBjb250ZXh0LCBjQVQpIHtcbiAgaWYgKCFjQVQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxOCkgOiBcIkNhbm5vdCB1c2UgYGNyZWF0ZS5hc3luY1RodW5rYCBpbiB0aGUgYnVpbHQtaW4gYGNyZWF0ZVNsaWNlYC4gVXNlIGBidWlsZENyZWF0ZVNsaWNlKHsgY3JlYXRvcnM6IHsgYXN5bmNUaHVuazogYXN5bmNUaHVua0NyZWF0b3IgfSB9KWAgdG8gY3JlYXRlIGEgY3VzdG9taXNlZCB2ZXJzaW9uIG9mIGBjcmVhdGVTbGljZWAuXCIpO1xuICB9XG4gIGNvbnN0IHtcbiAgICBwYXlsb2FkQ3JlYXRvcixcbiAgICBmdWxmaWxsZWQsXG4gICAgcGVuZGluZyxcbiAgICByZWplY3RlZCxcbiAgICBzZXR0bGVkLFxuICAgIG9wdGlvbnNcbiAgfSA9IHJlZHVjZXJEZWZpbml0aW9uO1xuICBjb25zdCB0aHVuayA9IGNBVCh0eXBlLCBwYXlsb2FkQ3JlYXRvciwgb3B0aW9ucyk7XG4gIGNvbnRleHQuZXhwb3NlQWN0aW9uKHJlZHVjZXJOYW1lLCB0aHVuayk7XG4gIGlmIChmdWxmaWxsZWQpIHtcbiAgICBjb250ZXh0LmFkZENhc2UodGh1bmsuZnVsZmlsbGVkLCBmdWxmaWxsZWQpO1xuICB9XG4gIGlmIChwZW5kaW5nKSB7XG4gICAgY29udGV4dC5hZGRDYXNlKHRodW5rLnBlbmRpbmcsIHBlbmRpbmcpO1xuICB9XG4gIGlmIChyZWplY3RlZCkge1xuICAgIGNvbnRleHQuYWRkQ2FzZSh0aHVuay5yZWplY3RlZCwgcmVqZWN0ZWQpO1xuICB9XG4gIGlmIChzZXR0bGVkKSB7XG4gICAgY29udGV4dC5hZGRNYXRjaGVyKHRodW5rLnNldHRsZWQsIHNldHRsZWQpO1xuICB9XG4gIGNvbnRleHQuZXhwb3NlQ2FzZVJlZHVjZXIocmVkdWNlck5hbWUsIHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCB8fCBub29wLFxuICAgIHBlbmRpbmc6IHBlbmRpbmcgfHwgbm9vcCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWQgfHwgbm9vcCxcbiAgICBzZXR0bGVkOiBzZXR0bGVkIHx8IG5vb3BcbiAgfSk7XG59XG5mdW5jdGlvbiBub29wKCkge1xufVxuXG4vLyBzcmMvZW50aXRpZXMvZW50aXR5X3N0YXRlLnRzXG5mdW5jdGlvbiBnZXRJbml0aWFsRW50aXR5U3RhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgaWRzOiBbXSxcbiAgICBlbnRpdGllczoge31cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3Rvcnkoc3RhdGVBZGFwdGVyKSB7XG4gIGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShhZGRpdGlvbmFsU3RhdGUgPSB7fSwgZW50aXRpZXMpIHtcbiAgICBjb25zdCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oZ2V0SW5pdGlhbEVudGl0eVN0YXRlKCksIGFkZGl0aW9uYWxTdGF0ZSk7XG4gICAgcmV0dXJuIGVudGl0aWVzID8gc3RhdGVBZGFwdGVyLnNldEFsbChzdGF0ZSwgZW50aXRpZXMpIDogc3RhdGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBnZXRJbml0aWFsU3RhdGVcbiAgfTtcbn1cblxuLy8gc3JjL2VudGl0aWVzL3N0YXRlX3NlbGVjdG9ycy50c1xuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeSgpIHtcbiAgZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKHNlbGVjdFN0YXRlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBjcmVhdGVTZWxlY3RvcjogY3JlYXRlU2VsZWN0b3IyID0gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3JcbiAgICB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBzZWxlY3RJZHMgPSAoc3RhdGUpID0+IHN0YXRlLmlkcztcbiAgICBjb25zdCBzZWxlY3RFbnRpdGllcyA9IChzdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXM7XG4gICAgY29uc3Qgc2VsZWN0QWxsID0gY3JlYXRlU2VsZWN0b3IyKHNlbGVjdElkcywgc2VsZWN0RW50aXRpZXMsIChpZHMsIGVudGl0aWVzKSA9PiBpZHMubWFwKChpZCkgPT4gZW50aXRpZXNbaWRdKSk7XG4gICAgY29uc3Qgc2VsZWN0SWQgPSAoXywgaWQpID0+IGlkO1xuICAgIGNvbnN0IHNlbGVjdEJ5SWQgPSAoZW50aXRpZXMsIGlkKSA9PiBlbnRpdGllc1tpZF07XG4gICAgY29uc3Qgc2VsZWN0VG90YWwgPSBjcmVhdGVTZWxlY3RvcjIoc2VsZWN0SWRzLCAoaWRzKSA9PiBpZHMubGVuZ3RoKTtcbiAgICBpZiAoIXNlbGVjdFN0YXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RJZHMsXG4gICAgICAgIHNlbGVjdEVudGl0aWVzLFxuICAgICAgICBzZWxlY3RBbGwsXG4gICAgICAgIHNlbGVjdFRvdGFsLFxuICAgICAgICBzZWxlY3RCeUlkOiBjcmVhdGVTZWxlY3RvcjIoc2VsZWN0RW50aXRpZXMsIHNlbGVjdElkLCBzZWxlY3RCeUlkKVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzID0gY3JlYXRlU2VsZWN0b3IyKHNlbGVjdFN0YXRlLCBzZWxlY3RFbnRpdGllcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdElkczogY3JlYXRlU2VsZWN0b3IyKHNlbGVjdFN0YXRlLCBzZWxlY3RJZHMpLFxuICAgICAgc2VsZWN0RW50aXRpZXM6IHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcyxcbiAgICAgIHNlbGVjdEFsbDogY3JlYXRlU2VsZWN0b3IyKHNlbGVjdFN0YXRlLCBzZWxlY3RBbGwpLFxuICAgICAgc2VsZWN0VG90YWw6IGNyZWF0ZVNlbGVjdG9yMihzZWxlY3RTdGF0ZSwgc2VsZWN0VG90YWwpLFxuICAgICAgc2VsZWN0QnlJZDogY3JlYXRlU2VsZWN0b3IyKHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcywgc2VsZWN0SWQsIHNlbGVjdEJ5SWQpXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGdldFNlbGVjdG9yc1xuICB9O1xufVxuXG4vLyBzcmMvZW50aXRpZXMvc3RhdGVfYWRhcHRlci50c1xuaW1wb3J0IHsgcHJvZHVjZSBhcyBjcmVhdGVOZXh0U3RhdGUzLCBpc0RyYWZ0IGFzIGlzRHJhZnQzIH0gZnJvbSBcImltbWVyXCI7XG52YXIgaXNEcmFmdFR5cGVkID0gaXNEcmFmdDM7XG5mdW5jdGlvbiBjcmVhdGVTaW5nbGVBcmd1bWVudFN0YXRlT3BlcmF0b3IobXV0YXRvcikge1xuICBjb25zdCBvcGVyYXRvciA9IGNyZWF0ZVN0YXRlT3BlcmF0b3IoKF8sIHN0YXRlKSA9PiBtdXRhdG9yKHN0YXRlKSk7XG4gIHJldHVybiBmdW5jdGlvbiBvcGVyYXRpb24oc3RhdGUpIHtcbiAgICByZXR1cm4gb3BlcmF0b3Ioc3RhdGUsIHZvaWQgMCk7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTdGF0ZU9wZXJhdG9yKG11dGF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG9wZXJhdGlvbihzdGF0ZSwgYXJnKSB7XG4gICAgZnVuY3Rpb24gaXNQYXlsb2FkQWN0aW9uQXJndW1lbnQoYXJnMikge1xuICAgICAgcmV0dXJuIGlzRlNBKGFyZzIpO1xuICAgIH1cbiAgICBjb25zdCBydW5NdXRhdG9yID0gKGRyYWZ0KSA9PiB7XG4gICAgICBpZiAoaXNQYXlsb2FkQWN0aW9uQXJndW1lbnQoYXJnKSkge1xuICAgICAgICBtdXRhdG9yKGFyZy5wYXlsb2FkLCBkcmFmdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdXRhdG9yKGFyZywgZHJhZnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGlzRHJhZnRUeXBlZChzdGF0ZSkpIHtcbiAgICAgIHJ1bk11dGF0b3Ioc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlTmV4dFN0YXRlMyhzdGF0ZSwgcnVuTXV0YXRvcik7XG4gIH07XG59XG5cbi8vIHNyYy9lbnRpdGllcy91dGlscy50c1xuaW1wb3J0IHsgY3VycmVudCBhcyBjdXJyZW50MiwgaXNEcmFmdCBhcyBpc0RyYWZ0NCB9IGZyb20gXCJpbW1lclwiO1xuZnVuY3Rpb24gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKSB7XG4gIGNvbnN0IGtleSA9IHNlbGVjdElkKGVudGl0eSk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYga2V5ID09PSB2b2lkIDApIHtcbiAgICBjb25zb2xlLndhcm4oXCJUaGUgZW50aXR5IHBhc3NlZCB0byB0aGUgYHNlbGVjdElkYCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCB1bmRlZmluZWQuXCIsIFwiWW91IHNob3VsZCBwcm9iYWJseSBwcm92aWRlIHlvdXIgb3duIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb24uXCIsIFwiVGhlIGVudGl0eSB0aGF0IHdhcyBwYXNzZWQ6XCIsIGVudGl0eSwgXCJUaGUgYHNlbGVjdElkYCBpbXBsZW1lbnRhdGlvbjpcIiwgc2VsZWN0SWQudG9TdHJpbmcoKSk7XG4gIH1cbiAgcmV0dXJuIGtleTtcbn1cbmZ1bmN0aW9uIGVuc3VyZUVudGl0aWVzQXJyYXkoZW50aXRpZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGVudGl0aWVzKSkge1xuICAgIGVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhlbnRpdGllcyk7XG4gIH1cbiAgcmV0dXJuIGVudGl0aWVzO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudCh2YWx1ZSkge1xuICByZXR1cm4gaXNEcmFmdDQodmFsdWUpID8gY3VycmVudDIodmFsdWUpIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzcGxpdEFkZGVkVXBkYXRlZEVudGl0aWVzKG5ld0VudGl0aWVzLCBzZWxlY3RJZCwgc3RhdGUpIHtcbiAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcbiAgY29uc3QgZXhpc3RpbmdJZHNBcnJheSA9IGdldEN1cnJlbnQoc3RhdGUuaWRzKTtcbiAgY29uc3QgZXhpc3RpbmdJZHMgPSBuZXcgU2V0KGV4aXN0aW5nSWRzQXJyYXkpO1xuICBjb25zdCBhZGRlZCA9IFtdO1xuICBjb25zdCB1cGRhdGVkID0gW107XG4gIGZvciAoY29uc3QgZW50aXR5IG9mIG5ld0VudGl0aWVzKSB7XG4gICAgY29uc3QgaWQgPSBzZWxlY3RJZFZhbHVlKGVudGl0eSwgc2VsZWN0SWQpO1xuICAgIGlmIChleGlzdGluZ0lkcy5oYXMoaWQpKSB7XG4gICAgICB1cGRhdGVkLnB1c2goe1xuICAgICAgICBpZCxcbiAgICAgICAgY2hhbmdlczogZW50aXR5XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkZWQucHVzaChlbnRpdHkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW2FkZGVkLCB1cGRhdGVkLCBleGlzdGluZ0lkc0FycmF5XTtcbn1cblxuLy8gc3JjL2VudGl0aWVzL3Vuc29ydGVkX3N0YXRlX2FkYXB0ZXIudHNcbmZ1bmN0aW9uIGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkKSB7XG4gIGZ1bmN0aW9uIGFkZE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xuICAgIGNvbnN0IGtleSA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCk7XG4gICAgaWYgKGtleSBpbiBzdGF0ZS5lbnRpdGllcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGF0ZS5pZHMucHVzaChrZXkpO1xuICAgIHN0YXRlLmVudGl0aWVzW2tleV0gPSBlbnRpdHk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkTWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XG4gICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcbiAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBuZXdFbnRpdGllcykge1xuICAgICAgYWRkT25lTXV0YWJseShlbnRpdHksIHN0YXRlKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2V0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XG4gICAgY29uc3Qga2V5ID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKTtcbiAgICBpZiAoIShrZXkgaW4gc3RhdGUuZW50aXRpZXMpKSB7XG4gICAgICBzdGF0ZS5pZHMucHVzaChrZXkpO1xuICAgIH1cbiAgICA7XG4gICAgc3RhdGUuZW50aXRpZXNba2V5XSA9IGVudGl0eTtcbiAgfVxuICBmdW5jdGlvbiBzZXRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcbiAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIG5ld0VudGl0aWVzKSB7XG4gICAgICBzZXRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzZXRBbGxNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xuICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XG4gICAgc3RhdGUuaWRzID0gW107XG4gICAgc3RhdGUuZW50aXRpZXMgPSB7fTtcbiAgICBhZGRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZU9uZU11dGFibHkoa2V5LCBzdGF0ZSkge1xuICAgIHJldHVybiByZW1vdmVNYW55TXV0YWJseShba2V5XSwgc3RhdGUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZU1hbnlNdXRhYmx5KGtleXMsIHN0YXRlKSB7XG4gICAgbGV0IGRpZE11dGF0ZSA9IGZhbHNlO1xuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5IGluIHN0YXRlLmVudGl0aWVzKSB7XG4gICAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1trZXldO1xuICAgICAgICBkaWRNdXRhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChkaWRNdXRhdGUpIHtcbiAgICAgIHN0YXRlLmlkcyA9IHN0YXRlLmlkcy5maWx0ZXIoKGlkKSA9PiBpZCBpbiBzdGF0ZS5lbnRpdGllcyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZUFsbE11dGFibHkoc3RhdGUpIHtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgICBpZHM6IFtdLFxuICAgICAgZW50aXRpZXM6IHt9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdGFrZU5ld0tleShrZXlzLCB1cGRhdGUsIHN0YXRlKSB7XG4gICAgY29uc3Qgb3JpZ2luYWwzID0gc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcbiAgICBpZiAob3JpZ2luYWwzID09PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgdXBkYXRlZCA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsMywgdXBkYXRlLmNoYW5nZXMpO1xuICAgIGNvbnN0IG5ld0tleSA9IHNlbGVjdElkVmFsdWUodXBkYXRlZCwgc2VsZWN0SWQpO1xuICAgIGNvbnN0IGhhc05ld0tleSA9IG5ld0tleSAhPT0gdXBkYXRlLmlkO1xuICAgIGlmIChoYXNOZXdLZXkpIHtcbiAgICAgIGtleXNbdXBkYXRlLmlkXSA9IG5ld0tleTtcbiAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xuICAgIH1cbiAgICA7XG4gICAgc3RhdGUuZW50aXRpZXNbbmV3S2V5XSA9IHVwZGF0ZWQ7XG4gICAgcmV0dXJuIGhhc05ld0tleTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVPbmVNdXRhYmx5KHVwZGF0ZSwgc3RhdGUpIHtcbiAgICByZXR1cm4gdXBkYXRlTWFueU11dGFibHkoW3VwZGF0ZV0sIHN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVzLCBzdGF0ZSkge1xuICAgIGNvbnN0IG5ld0tleXMgPSB7fTtcbiAgICBjb25zdCB1cGRhdGVzUGVyRW50aXR5ID0ge307XG4gICAgdXBkYXRlcy5mb3JFYWNoKCh1cGRhdGUpID0+IHtcbiAgICAgIGlmICh1cGRhdGUuaWQgaW4gc3RhdGUuZW50aXRpZXMpIHtcbiAgICAgICAgdXBkYXRlc1BlckVudGl0eVt1cGRhdGUuaWRdID0ge1xuICAgICAgICAgIGlkOiB1cGRhdGUuaWQsXG4gICAgICAgICAgLy8gU3ByZWFkcyBpZ25vcmUgZmFsc3kgdmFsdWVzLCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgdGhlcmUgaXNuJ3RcbiAgICAgICAgICAvLyBhbiBleGlzdGluZyB1cGRhdGUgYWxyZWFkeSBhdCB0aGlzIGtleVxuICAgICAgICAgIGNoYW5nZXM6IHtcbiAgICAgICAgICAgIC4uLnVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXT8uY2hhbmdlcyxcbiAgICAgICAgICAgIC4uLnVwZGF0ZS5jaGFuZ2VzXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHVwZGF0ZXMgPSBPYmplY3QudmFsdWVzKHVwZGF0ZXNQZXJFbnRpdHkpO1xuICAgIGNvbnN0IGRpZE11dGF0ZUVudGl0aWVzID0gdXBkYXRlcy5sZW5ndGggPiAwO1xuICAgIGlmIChkaWRNdXRhdGVFbnRpdGllcykge1xuICAgICAgY29uc3QgZGlkTXV0YXRlSWRzID0gdXBkYXRlcy5maWx0ZXIoKHVwZGF0ZSkgPT4gdGFrZU5ld0tleShuZXdLZXlzLCB1cGRhdGUsIHN0YXRlKSkubGVuZ3RoID4gMDtcbiAgICAgIGlmIChkaWRNdXRhdGVJZHMpIHtcbiAgICAgICAgc3RhdGUuaWRzID0gT2JqZWN0LnZhbHVlcyhzdGF0ZS5lbnRpdGllcykubWFwKChlKSA9PiBzZWxlY3RJZFZhbHVlKGUsIHNlbGVjdElkKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwc2VydE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xuICAgIHJldHVybiB1cHNlcnRNYW55TXV0YWJseShbZW50aXR5XSwgc3RhdGUpO1xuICB9XG4gIGZ1bmN0aW9uIHVwc2VydE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xuICAgIGNvbnN0IFthZGRlZCwgdXBkYXRlZF0gPSBzcGxpdEFkZGVkVXBkYXRlZEVudGl0aWVzKG5ld0VudGl0aWVzLCBzZWxlY3RJZCwgc3RhdGUpO1xuICAgIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZWQsIHN0YXRlKTtcbiAgICBhZGRNYW55TXV0YWJseShhZGRlZCwgc3RhdGUpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVtb3ZlQWxsOiBjcmVhdGVTaW5nbGVBcmd1bWVudFN0YXRlT3BlcmF0b3IocmVtb3ZlQWxsTXV0YWJseSksXG4gICAgYWRkT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE9uZU11dGFibHkpLFxuICAgIGFkZE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkTWFueU11dGFibHkpLFxuICAgIHNldE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRPbmVNdXRhYmx5KSxcbiAgICBzZXRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE1hbnlNdXRhYmx5KSxcbiAgICBzZXRBbGw6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0QWxsTXV0YWJseSksXG4gICAgdXBkYXRlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU9uZU11dGFibHkpLFxuICAgIHVwZGF0ZU1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlTWFueU11dGFibHkpLFxuICAgIHVwc2VydE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRPbmVNdXRhYmx5KSxcbiAgICB1cHNlcnRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE1hbnlNdXRhYmx5KSxcbiAgICByZW1vdmVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IocmVtb3ZlT25lTXV0YWJseSksXG4gICAgcmVtb3ZlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihyZW1vdmVNYW55TXV0YWJseSlcbiAgfTtcbn1cblxuLy8gc3JjL2VudGl0aWVzL3NvcnRlZF9zdGF0ZV9hZGFwdGVyLnRzXG5mdW5jdGlvbiBmaW5kSW5zZXJ0SW5kZXgoc29ydGVkSXRlbXMsIGl0ZW0sIGNvbXBhcmlzb25GdW5jdGlvbikge1xuICBsZXQgbG93SW5kZXggPSAwO1xuICBsZXQgaGlnaEluZGV4ID0gc29ydGVkSXRlbXMubGVuZ3RoO1xuICB3aGlsZSAobG93SW5kZXggPCBoaWdoSW5kZXgpIHtcbiAgICBsZXQgbWlkZGxlSW5kZXggPSBsb3dJbmRleCArIGhpZ2hJbmRleCA+Pj4gMTtcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IHNvcnRlZEl0ZW1zW21pZGRsZUluZGV4XTtcbiAgICBjb25zdCByZXMgPSBjb21wYXJpc29uRnVuY3Rpb24oaXRlbSwgY3VycmVudEl0ZW0pO1xuICAgIGlmIChyZXMgPj0gMCkge1xuICAgICAgbG93SW5kZXggPSBtaWRkbGVJbmRleCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZ2hJbmRleCA9IG1pZGRsZUluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbG93SW5kZXg7XG59XG5mdW5jdGlvbiBpbnNlcnQoc29ydGVkSXRlbXMsIGl0ZW0sIGNvbXBhcmlzb25GdW5jdGlvbikge1xuICBjb25zdCBpbnNlcnRBdEluZGV4ID0gZmluZEluc2VydEluZGV4KHNvcnRlZEl0ZW1zLCBpdGVtLCBjb21wYXJpc29uRnVuY3Rpb24pO1xuICBzb3J0ZWRJdGVtcy5zcGxpY2UoaW5zZXJ0QXRJbmRleCwgMCwgaXRlbSk7XG4gIHJldHVybiBzb3J0ZWRJdGVtcztcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCwgY29tcGFyZXIpIHtcbiAgY29uc3Qge1xuICAgIHJlbW92ZU9uZSxcbiAgICByZW1vdmVNYW55LFxuICAgIHJlbW92ZUFsbFxuICB9ID0gY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQpO1xuICBmdW5jdGlvbiBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcbiAgICByZXR1cm4gYWRkTWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiBhZGRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUsIGV4aXN0aW5nSWRzKSB7XG4gICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcbiAgICBjb25zdCBleGlzdGluZ0tleXMgPSBuZXcgU2V0KGV4aXN0aW5nSWRzID8/IGdldEN1cnJlbnQoc3RhdGUuaWRzKSk7XG4gICAgY29uc3QgbW9kZWxzID0gbmV3RW50aXRpZXMuZmlsdGVyKChtb2RlbCkgPT4gIWV4aXN0aW5nS2V5cy5oYXMoc2VsZWN0SWRWYWx1ZShtb2RlbCwgc2VsZWN0SWQpKSk7XG4gICAgaWYgKG1vZGVscy5sZW5ndGggIT09IDApIHtcbiAgICAgIG1lcmdlRnVuY3Rpb24oc3RhdGUsIG1vZGVscyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNldE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xuICAgIHJldHVybiBzZXRNYW55TXV0YWJseShbZW50aXR5XSwgc3RhdGUpO1xuICB9XG4gIGZ1bmN0aW9uIHNldE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xuICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XG4gICAgaWYgKG5ld0VudGl0aWVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG5ld0VudGl0aWVzKSB7XG4gICAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1tzZWxlY3RJZChpdGVtKV07XG4gICAgICB9XG4gICAgICBtZXJnZUZ1bmN0aW9uKHN0YXRlLCBuZXdFbnRpdGllcyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNldEFsbE11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XG4gICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcbiAgICBzdGF0ZS5lbnRpdGllcyA9IHt9O1xuICAgIHN0YXRlLmlkcyA9IFtdO1xuICAgIGFkZE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSwgW10pO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZU9uZU11dGFibHkodXBkYXRlLCBzdGF0ZSkge1xuICAgIHJldHVybiB1cGRhdGVNYW55TXV0YWJseShbdXBkYXRlXSwgc3RhdGUpO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZXMsIHN0YXRlKSB7XG4gICAgbGV0IGFwcGxpZWRVcGRhdGVzID0gZmFsc2U7XG4gICAgbGV0IHJlcGxhY2VkSWRzID0gZmFsc2U7XG4gICAgZm9yIChsZXQgdXBkYXRlIG9mIHVwZGF0ZXMpIHtcbiAgICAgIGNvbnN0IGVudGl0eSA9IHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF07XG4gICAgICBpZiAoIWVudGl0eSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGFwcGxpZWRVcGRhdGVzID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5hc3NpZ24oZW50aXR5LCB1cGRhdGUuY2hhbmdlcyk7XG4gICAgICBjb25zdCBuZXdJZCA9IHNlbGVjdElkKGVudGl0eSk7XG4gICAgICBpZiAodXBkYXRlLmlkICE9PSBuZXdJZCkge1xuICAgICAgICByZXBsYWNlZElkcyA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xuICAgICAgICBjb25zdCBvbGRJbmRleCA9IHN0YXRlLmlkcy5pbmRleE9mKHVwZGF0ZS5pZCk7XG4gICAgICAgIHN0YXRlLmlkc1tvbGRJbmRleF0gPSBuZXdJZDtcbiAgICAgICAgc3RhdGUuZW50aXRpZXNbbmV3SWRdID0gZW50aXR5O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXBwbGllZFVwZGF0ZXMpIHtcbiAgICAgIG1lcmdlRnVuY3Rpb24oc3RhdGUsIFtdLCBhcHBsaWVkVXBkYXRlcywgcmVwbGFjZWRJZHMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB1cHNlcnRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcbiAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiB1cHNlcnRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcbiAgICBjb25zdCBbYWRkZWQsIHVwZGF0ZWQsIGV4aXN0aW5nSWRzQXJyYXldID0gc3BsaXRBZGRlZFVwZGF0ZWRFbnRpdGllcyhuZXdFbnRpdGllcywgc2VsZWN0SWQsIHN0YXRlKTtcbiAgICBpZiAodXBkYXRlZC5sZW5ndGgpIHtcbiAgICAgIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZWQsIHN0YXRlKTtcbiAgICB9XG4gICAgaWYgKGFkZGVkLmxlbmd0aCkge1xuICAgICAgYWRkTWFueU11dGFibHkoYWRkZWQsIHN0YXRlLCBleGlzdGluZ0lkc0FycmF5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWwoYSwgYikge1xuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSA9PT0gYltpXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgbWVyZ2VGdW5jdGlvbiA9IChzdGF0ZSwgYWRkZWRJdGVtcywgYXBwbGllZFVwZGF0ZXMsIHJlcGxhY2VkSWRzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEVudGl0aWVzID0gZ2V0Q3VycmVudChzdGF0ZS5lbnRpdGllcyk7XG4gICAgY29uc3QgY3VycmVudElkcyA9IGdldEN1cnJlbnQoc3RhdGUuaWRzKTtcbiAgICBjb25zdCBzdGF0ZUVudGl0aWVzID0gc3RhdGUuZW50aXRpZXM7XG4gICAgbGV0IGlkcyA9IGN1cnJlbnRJZHM7XG4gICAgaWYgKHJlcGxhY2VkSWRzKSB7XG4gICAgICBpZHMgPSBuZXcgU2V0KGN1cnJlbnRJZHMpO1xuICAgIH1cbiAgICBsZXQgc29ydGVkRW50aXRpZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgY29uc3QgZW50aXR5ID0gY3VycmVudEVudGl0aWVzW2lkXTtcbiAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgc29ydGVkRW50aXRpZXMucHVzaChlbnRpdHkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB3YXNQcmV2aW91c2x5RW1wdHkgPSBzb3J0ZWRFbnRpdGllcy5sZW5ndGggPT09IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFkZGVkSXRlbXMpIHtcbiAgICAgIHN0YXRlRW50aXRpZXNbc2VsZWN0SWQoaXRlbSldID0gaXRlbTtcbiAgICAgIGlmICghd2FzUHJldmlvdXNseUVtcHR5KSB7XG4gICAgICAgIGluc2VydChzb3J0ZWRFbnRpdGllcywgaXRlbSwgY29tcGFyZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2FzUHJldmlvdXNseUVtcHR5KSB7XG4gICAgICBzb3J0ZWRFbnRpdGllcyA9IGFkZGVkSXRlbXMuc2xpY2UoKS5zb3J0KGNvbXBhcmVyKTtcbiAgICB9IGVsc2UgaWYgKGFwcGxpZWRVcGRhdGVzKSB7XG4gICAgICBzb3J0ZWRFbnRpdGllcy5zb3J0KGNvbXBhcmVyKTtcbiAgICB9XG4gICAgY29uc3QgbmV3U29ydGVkSWRzID0gc29ydGVkRW50aXRpZXMubWFwKHNlbGVjdElkKTtcbiAgICBpZiAoIWFyZUFycmF5c0VxdWFsKGN1cnJlbnRJZHMsIG5ld1NvcnRlZElkcykpIHtcbiAgICAgIHN0YXRlLmlkcyA9IG5ld1NvcnRlZElkcztcbiAgICB9XG4gIH07XG4gIHJldHVybiB7XG4gICAgcmVtb3ZlT25lLFxuICAgIHJlbW92ZU1hbnksXG4gICAgcmVtb3ZlQWxsLFxuICAgIGFkZE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRPbmVNdXRhYmx5KSxcbiAgICB1cGRhdGVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlT25lTXV0YWJseSksXG4gICAgdXBzZXJ0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE9uZU11dGFibHkpLFxuICAgIHNldE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRPbmVNdXRhYmx5KSxcbiAgICBzZXRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE1hbnlNdXRhYmx5KSxcbiAgICBzZXRBbGw6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0QWxsTXV0YWJseSksXG4gICAgYWRkTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRNYW55TXV0YWJseSksXG4gICAgdXBkYXRlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVNYW55TXV0YWJseSksXG4gICAgdXBzZXJ0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRNYW55TXV0YWJseSlcbiAgfTtcbn1cblxuLy8gc3JjL2VudGl0aWVzL2NyZWF0ZV9hZGFwdGVyLnRzXG5mdW5jdGlvbiBjcmVhdGVFbnRpdHlBZGFwdGVyKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgc2VsZWN0SWQsXG4gICAgc29ydENvbXBhcmVyXG4gIH0gPSB7XG4gICAgc29ydENvbXBhcmVyOiBmYWxzZSxcbiAgICBzZWxlY3RJZDogKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5pZCxcbiAgICAuLi5vcHRpb25zXG4gIH07XG4gIGNvbnN0IHN0YXRlQWRhcHRlciA9IHNvcnRDb21wYXJlciA/IGNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCwgc29ydENvbXBhcmVyKSA6IGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkKTtcbiAgY29uc3Qgc3RhdGVGYWN0b3J5ID0gY3JlYXRlSW5pdGlhbFN0YXRlRmFjdG9yeShzdGF0ZUFkYXB0ZXIpO1xuICBjb25zdCBzZWxlY3RvcnNGYWN0b3J5ID0gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeSgpO1xuICByZXR1cm4ge1xuICAgIHNlbGVjdElkLFxuICAgIHNvcnRDb21wYXJlcixcbiAgICAuLi5zdGF0ZUZhY3RvcnksXG4gICAgLi4uc2VsZWN0b3JzRmFjdG9yeSxcbiAgICAuLi5zdGF0ZUFkYXB0ZXJcbiAgfTtcbn1cblxuLy8gc3JjL2xpc3RlbmVyTWlkZGxld2FyZS9pbmRleC50c1xuaW1wb3J0IHsgaXNBY3Rpb24gYXMgaXNBY3Rpb24zIH0gZnJvbSBcInJlZHV4XCI7XG5cbi8vIHNyYy9saXN0ZW5lck1pZGRsZXdhcmUvZXhjZXB0aW9ucy50c1xudmFyIHRhc2sgPSBcInRhc2tcIjtcbnZhciBsaXN0ZW5lciA9IFwibGlzdGVuZXJcIjtcbnZhciBjb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xudmFyIGNhbmNlbGxlZCA9IFwiY2FuY2VsbGVkXCI7XG52YXIgdGFza0NhbmNlbGxlZCA9IGB0YXNrLSR7Y2FuY2VsbGVkfWA7XG52YXIgdGFza0NvbXBsZXRlZCA9IGB0YXNrLSR7Y29tcGxldGVkfWA7XG52YXIgbGlzdGVuZXJDYW5jZWxsZWQgPSBgJHtsaXN0ZW5lcn0tJHtjYW5jZWxsZWR9YDtcbnZhciBsaXN0ZW5lckNvbXBsZXRlZCA9IGAke2xpc3RlbmVyfS0ke2NvbXBsZXRlZH1gO1xudmFyIFRhc2tBYm9ydEVycm9yID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihjb2RlKSB7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBgJHt0YXNrfSAke2NhbmNlbGxlZH0gKHJlYXNvbjogJHtjb2RlfSlgO1xuICB9XG4gIG5hbWUgPSBcIlRhc2tBYm9ydEVycm9yXCI7XG4gIG1lc3NhZ2U7XG59O1xuXG4vLyBzcmMvbGlzdGVuZXJNaWRkbGV3YXJlL3V0aWxzLnRzXG52YXIgYXNzZXJ0RnVuY3Rpb24gPSAoZnVuYywgZXhwZWN0ZWQpID0+IHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMzIpIDogYCR7ZXhwZWN0ZWR9IGlzIG5vdCBhIGZ1bmN0aW9uYCk7XG4gIH1cbn07XG52YXIgbm9vcDIgPSAoKSA9PiB7XG59O1xudmFyIGNhdGNoUmVqZWN0aW9uID0gKHByb21pc2UsIG9uRXJyb3IgPSBub29wMikgPT4ge1xuICBwcm9taXNlLmNhdGNoKG9uRXJyb3IpO1xuICByZXR1cm4gcHJvbWlzZTtcbn07XG52YXIgYWRkQWJvcnRTaWduYWxMaXN0ZW5lciA9IChhYm9ydFNpZ25hbCwgY2FsbGJhY2spID0+IHtcbiAgYWJvcnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGNhbGxiYWNrLCB7XG4gICAgb25jZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuICgpID0+IGFib3J0U2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBjYWxsYmFjayk7XG59O1xudmFyIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24gPSAoYWJvcnRDb250cm9sbGVyLCByZWFzb24pID0+IHtcbiAgY29uc3Qgc2lnbmFsID0gYWJvcnRDb250cm9sbGVyLnNpZ25hbDtcbiAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghKFwicmVhc29uXCIgaW4gc2lnbmFsKSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaWduYWwsIFwicmVhc29uXCIsIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogcmVhc29uLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICA7XG4gIGFib3J0Q29udHJvbGxlci5hYm9ydChyZWFzb24pO1xufTtcblxuLy8gc3JjL2xpc3RlbmVyTWlkZGxld2FyZS90YXNrLnRzXG52YXIgdmFsaWRhdGVBY3RpdmUgPSAoc2lnbmFsKSA9PiB7XG4gIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJlYXNvblxuICAgIH0gPSBzaWduYWw7XG4gICAgdGhyb3cgbmV3IFRhc2tBYm9ydEVycm9yKHJlYXNvbik7XG4gIH1cbn07XG5mdW5jdGlvbiByYWNlV2l0aFNpZ25hbChzaWduYWwsIHByb21pc2UpIHtcbiAgbGV0IGNsZWFudXAgPSBub29wMjtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBub3RpZnlSZWplY3Rpb24gPSAoKSA9PiByZWplY3QobmV3IFRhc2tBYm9ydEVycm9yKHNpZ25hbC5yZWFzb24pKTtcbiAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIG5vdGlmeVJlamVjdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhbnVwID0gYWRkQWJvcnRTaWduYWxMaXN0ZW5lcihzaWduYWwsIG5vdGlmeVJlamVjdGlvbik7XG4gICAgcHJvbWlzZS5maW5hbGx5KCgpID0+IGNsZWFudXAoKSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICBjbGVhbnVwID0gbm9vcDI7XG4gIH0pO1xufVxudmFyIHJ1blRhc2sgPSBhc3luYyAodGFzazIsIGNsZWFuVXApID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHRhc2syKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogXCJva1wiLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6IGVycm9yIGluc3RhbmNlb2YgVGFza0Fib3J0RXJyb3IgPyBcImNhbmNlbGxlZFwiIDogXCJyZWplY3RlZFwiLFxuICAgICAgZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIGNsZWFuVXA/LigpO1xuICB9XG59O1xudmFyIGNyZWF0ZVBhdXNlID0gKHNpZ25hbCkgPT4ge1xuICByZXR1cm4gKHByb21pc2UpID0+IHtcbiAgICByZXR1cm4gY2F0Y2hSZWplY3Rpb24ocmFjZVdpdGhTaWduYWwoc2lnbmFsLCBwcm9taXNlKS50aGVuKChvdXRwdXQpID0+IHtcbiAgICAgIHZhbGlkYXRlQWN0aXZlKHNpZ25hbCk7XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgY3JlYXRlRGVsYXkgPSAoc2lnbmFsKSA9PiB7XG4gIGNvbnN0IHBhdXNlID0gY3JlYXRlUGF1c2Uoc2lnbmFsKTtcbiAgcmV0dXJuICh0aW1lb3V0TXMpID0+IHtcbiAgICByZXR1cm4gcGF1c2UobmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dE1zKSkpO1xuICB9O1xufTtcblxuLy8gc3JjL2xpc3RlbmVyTWlkZGxld2FyZS9pbmRleC50c1xudmFyIHtcbiAgYXNzaWduXG59ID0gT2JqZWN0O1xudmFyIElOVEVSTkFMX05JTF9UT0tFTiA9IHt9O1xudmFyIGFsbSA9IFwibGlzdGVuZXJNaWRkbGV3YXJlXCI7XG52YXIgY3JlYXRlRm9yayA9IChwYXJlbnRBYm9ydFNpZ25hbCwgcGFyZW50QmxvY2tpbmdQcm9taXNlcykgPT4ge1xuICBjb25zdCBsaW5rQ29udHJvbGxlcnMgPSAoY29udHJvbGxlcikgPT4gYWRkQWJvcnRTaWduYWxMaXN0ZW5lcihwYXJlbnRBYm9ydFNpZ25hbCwgKCkgPT4gYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbihjb250cm9sbGVyLCBwYXJlbnRBYm9ydFNpZ25hbC5yZWFzb24pKTtcbiAgcmV0dXJuICh0YXNrRXhlY3V0b3IsIG9wdHMpID0+IHtcbiAgICBhc3NlcnRGdW5jdGlvbih0YXNrRXhlY3V0b3IsIFwidGFza0V4ZWN1dG9yXCIpO1xuICAgIGNvbnN0IGNoaWxkQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxpbmtDb250cm9sbGVycyhjaGlsZEFib3J0Q29udHJvbGxlcik7XG4gICAgY29uc3QgcmVzdWx0ID0gcnVuVGFzayhhc3luYyAoKSA9PiB7XG4gICAgICB2YWxpZGF0ZUFjdGl2ZShwYXJlbnRBYm9ydFNpZ25hbCk7XG4gICAgICB2YWxpZGF0ZUFjdGl2ZShjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWwpO1xuICAgICAgY29uc3QgcmVzdWx0MiA9IGF3YWl0IHRhc2tFeGVjdXRvcih7XG4gICAgICAgIHBhdXNlOiBjcmVhdGVQYXVzZShjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWwpLFxuICAgICAgICBkZWxheTogY3JlYXRlRGVsYXkoY2hpbGRBYm9ydENvbnRyb2xsZXIuc2lnbmFsKSxcbiAgICAgICAgc2lnbmFsOiBjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWxcbiAgICAgIH0pO1xuICAgICAgdmFsaWRhdGVBY3RpdmUoY2hpbGRBYm9ydENvbnRyb2xsZXIuc2lnbmFsKTtcbiAgICAgIHJldHVybiByZXN1bHQyO1xuICAgIH0sICgpID0+IGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oY2hpbGRBYm9ydENvbnRyb2xsZXIsIHRhc2tDb21wbGV0ZWQpKTtcbiAgICBpZiAob3B0cz8uYXV0b0pvaW4pIHtcbiAgICAgIHBhcmVudEJsb2NraW5nUHJvbWlzZXMucHVzaChyZXN1bHQuY2F0Y2gobm9vcDIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogY3JlYXRlUGF1c2UocGFyZW50QWJvcnRTaWduYWwpKHJlc3VsdCksXG4gICAgICBjYW5jZWwoKSB7XG4gICAgICAgIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oY2hpbGRBYm9ydENvbnRyb2xsZXIsIHRhc2tDYW5jZWxsZWQpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59O1xudmFyIGNyZWF0ZVRha2VQYXR0ZXJuID0gKHN0YXJ0TGlzdGVuaW5nLCBzaWduYWwpID0+IHtcbiAgY29uc3QgdGFrZSA9IGFzeW5jIChwcmVkaWNhdGUsIHRpbWVvdXQpID0+IHtcbiAgICB2YWxpZGF0ZUFjdGl2ZShzaWduYWwpO1xuICAgIGxldCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICB9O1xuICAgIGNvbnN0IHR1cGxlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzdG9wTGlzdGVuaW5nID0gc3RhcnRMaXN0ZW5pbmcoe1xuICAgICAgICBwcmVkaWNhdGUsXG4gICAgICAgIGVmZmVjdDogKGFjdGlvbiwgbGlzdGVuZXJBcGkpID0+IHtcbiAgICAgICAgICBsaXN0ZW5lckFwaS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIHJlc29sdmUoW2FjdGlvbiwgbGlzdGVuZXJBcGkuZ2V0U3RhdGUoKSwgbGlzdGVuZXJBcGkuZ2V0T3JpZ2luYWxTdGF0ZSgpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICAgIHN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2VzID0gW3R1cGxlUHJvbWlzZV07XG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lb3V0LCBudWxsKSkpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgcmFjZVdpdGhTaWduYWwoc2lnbmFsLCBQcm9taXNlLnJhY2UocHJvbWlzZXMpKTtcbiAgICAgIHZhbGlkYXRlQWN0aXZlKHNpZ25hbCk7XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChwcmVkaWNhdGUsIHRpbWVvdXQpID0+IGNhdGNoUmVqZWN0aW9uKHRha2UocHJlZGljYXRlLCB0aW1lb3V0KSk7XG59O1xudmFyIGdldExpc3RlbmVyRW50cnlQcm9wc0Zyb20gPSAob3B0aW9ucykgPT4ge1xuICBsZXQge1xuICAgIHR5cGUsXG4gICAgYWN0aW9uQ3JlYXRvcixcbiAgICBtYXRjaGVyLFxuICAgIHByZWRpY2F0ZSxcbiAgICBlZmZlY3RcbiAgfSA9IG9wdGlvbnM7XG4gIGlmICh0eXBlKSB7XG4gICAgcHJlZGljYXRlID0gY3JlYXRlQWN0aW9uKHR5cGUpLm1hdGNoO1xuICB9IGVsc2UgaWYgKGFjdGlvbkNyZWF0b3IpIHtcbiAgICB0eXBlID0gYWN0aW9uQ3JlYXRvci50eXBlO1xuICAgIHByZWRpY2F0ZSA9IGFjdGlvbkNyZWF0b3IubWF0Y2g7XG4gIH0gZWxzZSBpZiAobWF0Y2hlcikge1xuICAgIHByZWRpY2F0ZSA9IG1hdGNoZXI7XG4gIH0gZWxzZSBpZiAocHJlZGljYXRlKSB7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMjEpIDogXCJDcmVhdGluZyBvciByZW1vdmluZyBhIGxpc3RlbmVyIHJlcXVpcmVzIG9uZSBvZiB0aGUga25vd24gZmllbGRzIGZvciBtYXRjaGluZyBhbiBhY3Rpb25cIik7XG4gIH1cbiAgYXNzZXJ0RnVuY3Rpb24oZWZmZWN0LCBcIm9wdGlvbnMubGlzdGVuZXJcIik7XG4gIHJldHVybiB7XG4gICAgcHJlZGljYXRlLFxuICAgIHR5cGUsXG4gICAgZWZmZWN0XG4gIH07XG59O1xudmFyIGNyZWF0ZUxpc3RlbmVyRW50cnkgPSAvKiBAX19QVVJFX18gKi8gYXNzaWduKChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLFxuICAgIHByZWRpY2F0ZSxcbiAgICBlZmZlY3RcbiAgfSA9IGdldExpc3RlbmVyRW50cnlQcm9wc0Zyb20ob3B0aW9ucyk7XG4gIGNvbnN0IGlkID0gbmFub2lkKCk7XG4gIGNvbnN0IGVudHJ5ID0ge1xuICAgIGlkLFxuICAgIGVmZmVjdCxcbiAgICB0eXBlLFxuICAgIHByZWRpY2F0ZSxcbiAgICBwZW5kaW5nOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyMikgOiBcIlVuc3Vic2NyaWJlIG5vdCBpbml0aWFsaXplZFwiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBlbnRyeTtcbn0sIHtcbiAgd2l0aFR5cGVzOiAoKSA9PiBjcmVhdGVMaXN0ZW5lckVudHJ5XG59KTtcbnZhciBjYW5jZWxBY3RpdmVMaXN0ZW5lcnMgPSAoZW50cnkpID0+IHtcbiAgZW50cnkucGVuZGluZy5mb3JFYWNoKChjb250cm9sbGVyKSA9PiB7XG4gICAgYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbihjb250cm9sbGVyLCBsaXN0ZW5lckNhbmNlbGxlZCk7XG4gIH0pO1xufTtcbnZhciBjcmVhdGVDbGVhckxpc3RlbmVyTWlkZGxld2FyZSA9IChsaXN0ZW5lck1hcCkgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxpc3RlbmVyTWFwLmZvckVhY2goY2FuY2VsQWN0aXZlTGlzdGVuZXJzKTtcbiAgICBsaXN0ZW5lck1hcC5jbGVhcigpO1xuICB9O1xufTtcbnZhciBzYWZlbHlOb3RpZnlFcnJvciA9IChlcnJvckhhbmRsZXIsIGVycm9yVG9Ob3RpZnksIGVycm9ySW5mbykgPT4ge1xuICB0cnkge1xuICAgIGVycm9ySGFuZGxlcihlcnJvclRvTm90aWZ5LCBlcnJvckluZm8pO1xuICB9IGNhdGNoIChlcnJvckhhbmRsZXJFcnJvcikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhyb3cgZXJyb3JIYW5kbGVyRXJyb3I7XG4gICAgfSwgMCk7XG4gIH1cbn07XG52YXIgYWRkTGlzdGVuZXIgPSAvKiBAX19QVVJFX18gKi8gYXNzaWduKC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVBY3Rpb24oYCR7YWxtfS9hZGRgKSwge1xuICB3aXRoVHlwZXM6ICgpID0+IGFkZExpc3RlbmVyXG59KTtcbnZhciBjbGVhckFsbExpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVBY3Rpb24oYCR7YWxtfS9yZW1vdmVBbGxgKTtcbnZhciByZW1vdmVMaXN0ZW5lciA9IC8qIEBfX1BVUkVfXyAqLyBhc3NpZ24oLyogQF9fUFVSRV9fICovIGNyZWF0ZUFjdGlvbihgJHthbG19L3JlbW92ZWApLCB7XG4gIHdpdGhUeXBlczogKCkgPT4gcmVtb3ZlTGlzdGVuZXJcbn0pO1xudmFyIGRlZmF1bHRFcnJvckhhbmRsZXIgPSAoLi4uYXJncykgPT4ge1xuICBjb25zb2xlLmVycm9yKGAke2FsbX0vZXJyb3JgLCAuLi5hcmdzKTtcbn07XG52YXIgY3JlYXRlTGlzdGVuZXJNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmVPcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgbGlzdGVuZXJNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBjb25zdCB7XG4gICAgZXh0cmEsXG4gICAgb25FcnJvciA9IGRlZmF1bHRFcnJvckhhbmRsZXJcbiAgfSA9IG1pZGRsZXdhcmVPcHRpb25zO1xuICBhc3NlcnRGdW5jdGlvbihvbkVycm9yLCBcIm9uRXJyb3JcIik7XG4gIGNvbnN0IGluc2VydEVudHJ5ID0gKGVudHJ5KSA9PiB7XG4gICAgZW50cnkudW5zdWJzY3JpYmUgPSAoKSA9PiBsaXN0ZW5lck1hcC5kZWxldGUoZW50cnkuaWQpO1xuICAgIGxpc3RlbmVyTWFwLnNldChlbnRyeS5pZCwgZW50cnkpO1xuICAgIHJldHVybiAoY2FuY2VsT3B0aW9ucykgPT4ge1xuICAgICAgZW50cnkudW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmIChjYW5jZWxPcHRpb25zPy5jYW5jZWxBY3RpdmUpIHtcbiAgICAgICAgY2FuY2VsQWN0aXZlTGlzdGVuZXJzKGVudHJ5KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICBjb25zdCBzdGFydExpc3RlbmluZyA9IChvcHRpb25zKSA9PiB7XG4gICAgbGV0IGVudHJ5ID0gZmluZChBcnJheS5mcm9tKGxpc3RlbmVyTWFwLnZhbHVlcygpKSwgKGV4aXN0aW5nRW50cnkpID0+IGV4aXN0aW5nRW50cnkuZWZmZWN0ID09PSBvcHRpb25zLmVmZmVjdCk7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgZW50cnkgPSBjcmVhdGVMaXN0ZW5lckVudHJ5KG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gaW5zZXJ0RW50cnkoZW50cnkpO1xuICB9O1xuICBhc3NpZ24oc3RhcnRMaXN0ZW5pbmcsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHN0YXJ0TGlzdGVuaW5nXG4gIH0pO1xuICBjb25zdCBzdG9wTGlzdGVuaW5nID0gKG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlLFxuICAgICAgZWZmZWN0LFxuICAgICAgcHJlZGljYXRlXG4gICAgfSA9IGdldExpc3RlbmVyRW50cnlQcm9wc0Zyb20ob3B0aW9ucyk7XG4gICAgY29uc3QgZW50cnkgPSBmaW5kKEFycmF5LmZyb20obGlzdGVuZXJNYXAudmFsdWVzKCkpLCAoZW50cnkyKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaFByZWRpY2F0ZU9yVHlwZSA9IHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiID8gZW50cnkyLnR5cGUgPT09IHR5cGUgOiBlbnRyeTIucHJlZGljYXRlID09PSBwcmVkaWNhdGU7XG4gICAgICByZXR1cm4gbWF0Y2hQcmVkaWNhdGVPclR5cGUgJiYgZW50cnkyLmVmZmVjdCA9PT0gZWZmZWN0O1xuICAgIH0pO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkudW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmIChvcHRpb25zLmNhbmNlbEFjdGl2ZSkge1xuICAgICAgICBjYW5jZWxBY3RpdmVMaXN0ZW5lcnMoZW50cnkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gISFlbnRyeTtcbiAgfTtcbiAgYXNzaWduKHN0b3BMaXN0ZW5pbmcsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHN0b3BMaXN0ZW5pbmdcbiAgfSk7XG4gIGNvbnN0IG5vdGlmeUxpc3RlbmVyID0gYXN5bmMgKGVudHJ5LCBhY3Rpb24sIGFwaSwgZ2V0T3JpZ2luYWxTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGludGVybmFsVGFza0NvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgY29uc3QgdGFrZSA9IGNyZWF0ZVRha2VQYXR0ZXJuKHN0YXJ0TGlzdGVuaW5nLCBpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCk7XG4gICAgY29uc3QgYXV0b0pvaW5Qcm9taXNlcyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBlbnRyeS5wZW5kaW5nLmFkZChpbnRlcm5hbFRhc2tDb250cm9sbGVyKTtcbiAgICAgIGF3YWl0IFByb21pc2UucmVzb2x2ZShlbnRyeS5lZmZlY3QoXG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgLy8gVXNlIGFzc2lnbigpIHJhdGhlciB0aGFuIC4uLiB0byBhdm9pZCBleHRyYSBoZWxwZXIgZnVuY3Rpb25zIGFkZGVkIHRvIGJ1bmRsZVxuICAgICAgICBhc3NpZ24oe30sIGFwaSwge1xuICAgICAgICAgIGdldE9yaWdpbmFsU3RhdGUsXG4gICAgICAgICAgY29uZGl0aW9uOiAocHJlZGljYXRlLCB0aW1lb3V0KSA9PiB0YWtlKHByZWRpY2F0ZSwgdGltZW91dCkudGhlbihCb29sZWFuKSxcbiAgICAgICAgICB0YWtlLFxuICAgICAgICAgIGRlbGF5OiBjcmVhdGVEZWxheShpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCksXG4gICAgICAgICAgcGF1c2U6IGNyZWF0ZVBhdXNlKGludGVybmFsVGFza0NvbnRyb2xsZXIuc2lnbmFsKSxcbiAgICAgICAgICBleHRyYSxcbiAgICAgICAgICBzaWduYWw6IGludGVybmFsVGFza0NvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAgIGZvcms6IGNyZWF0ZUZvcmsoaW50ZXJuYWxUYXNrQ29udHJvbGxlci5zaWduYWwsIGF1dG9Kb2luUHJvbWlzZXMpLFxuICAgICAgICAgIHVuc3Vic2NyaWJlOiBlbnRyeS51bnN1YnNjcmliZSxcbiAgICAgICAgICBzdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgIGxpc3RlbmVyTWFwLnNldChlbnRyeS5pZCwgZW50cnkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2FuY2VsQWN0aXZlTGlzdGVuZXJzOiAoKSA9PiB7XG4gICAgICAgICAgICBlbnRyeS5wZW5kaW5nLmZvckVhY2goKGNvbnRyb2xsZXIsIF8sIHNldCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY29udHJvbGxlciAhPT0gaW50ZXJuYWxUYXNrQ29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oY29udHJvbGxlciwgbGlzdGVuZXJDYW5jZWxsZWQpO1xuICAgICAgICAgICAgICAgIHNldC5kZWxldGUoY29udHJvbGxlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgICBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGludGVybmFsVGFza0NvbnRyb2xsZXIsIGxpc3RlbmVyQ2FuY2VsbGVkKTtcbiAgICAgICAgICAgIGVudHJ5LnBlbmRpbmcuZGVsZXRlKGludGVybmFsVGFza0NvbnRyb2xsZXIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGhyb3dJZkNhbmNlbGxlZDogKCkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdGVBY3RpdmUoaW50ZXJuYWxUYXNrQ29udHJvbGxlci5zaWduYWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICkpO1xuICAgIH0gY2F0Y2ggKGxpc3RlbmVyRXJyb3IpIHtcbiAgICAgIGlmICghKGxpc3RlbmVyRXJyb3IgaW5zdGFuY2VvZiBUYXNrQWJvcnRFcnJvcikpIHtcbiAgICAgICAgc2FmZWx5Tm90aWZ5RXJyb3Iob25FcnJvciwgbGlzdGVuZXJFcnJvciwge1xuICAgICAgICAgIHJhaXNlZEJ5OiBcImVmZmVjdFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChhdXRvSm9pblByb21pc2VzKTtcbiAgICAgIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oaW50ZXJuYWxUYXNrQ29udHJvbGxlciwgbGlzdGVuZXJDb21wbGV0ZWQpO1xuICAgICAgZW50cnkucGVuZGluZy5kZWxldGUoaW50ZXJuYWxUYXNrQ29udHJvbGxlcik7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGVhckxpc3RlbmVyTWlkZGxld2FyZSA9IGNyZWF0ZUNsZWFyTGlzdGVuZXJNaWRkbGV3YXJlKGxpc3RlbmVyTWFwKTtcbiAgY29uc3QgbWlkZGxld2FyZSA9IChhcGkpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gICAgaWYgKCFpc0FjdGlvbjMoYWN0aW9uKSkge1xuICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKGFkZExpc3RlbmVyLm1hdGNoKGFjdGlvbikpIHtcbiAgICAgIHJldHVybiBzdGFydExpc3RlbmluZyhhY3Rpb24ucGF5bG9hZCk7XG4gICAgfVxuICAgIGlmIChjbGVhckFsbExpc3RlbmVycy5tYXRjaChhY3Rpb24pKSB7XG4gICAgICBjbGVhckxpc3RlbmVyTWlkZGxld2FyZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVtb3ZlTGlzdGVuZXIubWF0Y2goYWN0aW9uKSkge1xuICAgICAgcmV0dXJuIHN0b3BMaXN0ZW5pbmcoYWN0aW9uLnBheWxvYWQpO1xuICAgIH1cbiAgICBsZXQgb3JpZ2luYWxTdGF0ZSA9IGFwaS5nZXRTdGF0ZSgpO1xuICAgIGNvbnN0IGdldE9yaWdpbmFsU3RhdGUgPSAoKSA9PiB7XG4gICAgICBpZiAob3JpZ2luYWxTdGF0ZSA9PT0gSU5URVJOQUxfTklMX1RPS0VOKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDIzKSA6IGAke2FsbX06IGdldE9yaWdpbmFsU3RhdGUgY2FuIG9ubHkgYmUgY2FsbGVkIHN5bmNocm9ub3VzbHlgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnaW5hbFN0YXRlO1xuICAgIH07XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xuICAgICAgaWYgKGxpc3RlbmVyTWFwLnNpemUgPiAwKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGFwaS5nZXRTdGF0ZSgpO1xuICAgICAgICBjb25zdCBsaXN0ZW5lckVudHJpZXMgPSBBcnJheS5mcm9tKGxpc3RlbmVyTWFwLnZhbHVlcygpKTtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBsaXN0ZW5lckVudHJpZXMpIHtcbiAgICAgICAgICBsZXQgcnVuTGlzdGVuZXIgPSBmYWxzZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcnVuTGlzdGVuZXIgPSBlbnRyeS5wcmVkaWNhdGUoYWN0aW9uLCBjdXJyZW50U3RhdGUsIG9yaWdpbmFsU3RhdGUpO1xuICAgICAgICAgIH0gY2F0Y2ggKHByZWRpY2F0ZUVycm9yKSB7XG4gICAgICAgICAgICBydW5MaXN0ZW5lciA9IGZhbHNlO1xuICAgICAgICAgICAgc2FmZWx5Tm90aWZ5RXJyb3Iob25FcnJvciwgcHJlZGljYXRlRXJyb3IsIHtcbiAgICAgICAgICAgICAgcmFpc2VkQnk6IFwicHJlZGljYXRlXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXJ1bkxpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbm90aWZ5TGlzdGVuZXIoZW50cnksIGFjdGlvbiwgYXBpLCBnZXRPcmlnaW5hbFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBvcmlnaW5hbFN0YXRlID0gSU5URVJOQUxfTklMX1RPS0VOO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4ge1xuICAgIG1pZGRsZXdhcmUsXG4gICAgc3RhcnRMaXN0ZW5pbmcsXG4gICAgc3RvcExpc3RlbmluZyxcbiAgICBjbGVhckxpc3RlbmVyczogY2xlYXJMaXN0ZW5lck1pZGRsZXdhcmVcbiAgfTtcbn07XG5cbi8vIHNyYy9keW5hbWljTWlkZGxld2FyZS9pbmRleC50c1xuaW1wb3J0IHsgY29tcG9zZSBhcyBjb21wb3NlMyB9IGZyb20gXCJyZWR1eFwiO1xudmFyIGNyZWF0ZU1pZGRsZXdhcmVFbnRyeSA9IChtaWRkbGV3YXJlKSA9PiAoe1xuICBpZDogbmFub2lkKCksXG4gIG1pZGRsZXdhcmUsXG4gIGFwcGxpZWQ6IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKClcbn0pO1xudmFyIG1hdGNoSW5zdGFuY2UgPSAoaW5zdGFuY2VJZCkgPT4gKGFjdGlvbikgPT4gYWN0aW9uPy5tZXRhPy5pbnN0YW5jZUlkID09PSBpbnN0YW5jZUlkO1xudmFyIGNyZWF0ZUR5bmFtaWNNaWRkbGV3YXJlID0gKCkgPT4ge1xuICBjb25zdCBpbnN0YW5jZUlkID0gbmFub2lkKCk7XG4gIGNvbnN0IG1pZGRsZXdhcmVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBjb25zdCB3aXRoTWlkZGxld2FyZSA9IE9iamVjdC5hc3NpZ24oY3JlYXRlQWN0aW9uKFwiZHluYW1pY01pZGRsZXdhcmUvYWRkXCIsICguLi5taWRkbGV3YXJlcykgPT4gKHtcbiAgICBwYXlsb2FkOiBtaWRkbGV3YXJlcyxcbiAgICBtZXRhOiB7XG4gICAgICBpbnN0YW5jZUlkXG4gICAgfVxuICB9KSksIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHdpdGhNaWRkbGV3YXJlXG4gIH0pO1xuICBjb25zdCBhZGRNaWRkbGV3YXJlID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbiBhZGRNaWRkbGV3YXJlMiguLi5taWRkbGV3YXJlcykge1xuICAgIG1pZGRsZXdhcmVzLmZvckVhY2goKG1pZGRsZXdhcmUyKSA9PiB7XG4gICAgICBsZXQgZW50cnkgPSBmaW5kKEFycmF5LmZyb20obWlkZGxld2FyZU1hcC52YWx1ZXMoKSksIChlbnRyeTIpID0+IGVudHJ5Mi5taWRkbGV3YXJlID09PSBtaWRkbGV3YXJlMik7XG4gICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgIGVudHJ5ID0gY3JlYXRlTWlkZGxld2FyZUVudHJ5KG1pZGRsZXdhcmUyKTtcbiAgICAgIH1cbiAgICAgIG1pZGRsZXdhcmVNYXAuc2V0KGVudHJ5LmlkLCBlbnRyeSk7XG4gICAgfSk7XG4gIH0sIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IGFkZE1pZGRsZXdhcmVcbiAgfSk7XG4gIGNvbnN0IGdldEZpbmFsTWlkZGxld2FyZSA9IChhcGkpID0+IHtcbiAgICBjb25zdCBhcHBsaWVkTWlkZGxld2FyZSA9IEFycmF5LmZyb20obWlkZGxld2FyZU1hcC52YWx1ZXMoKSkubWFwKChlbnRyeSkgPT4gZW1wbGFjZShlbnRyeS5hcHBsaWVkLCBhcGksIHtcbiAgICAgIGluc2VydDogKCkgPT4gZW50cnkubWlkZGxld2FyZShhcGkpXG4gICAgfSkpO1xuICAgIHJldHVybiBjb21wb3NlMyguLi5hcHBsaWVkTWlkZGxld2FyZSk7XG4gIH07XG4gIGNvbnN0IGlzV2l0aE1pZGRsZXdhcmUgPSBpc0FsbE9mKHdpdGhNaWRkbGV3YXJlLCBtYXRjaEluc3RhbmNlKGluc3RhbmNlSWQpKTtcbiAgY29uc3QgbWlkZGxld2FyZSA9IChhcGkpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gICAgaWYgKGlzV2l0aE1pZGRsZXdhcmUoYWN0aW9uKSkge1xuICAgICAgYWRkTWlkZGxld2FyZSguLi5hY3Rpb24ucGF5bG9hZCk7XG4gICAgICByZXR1cm4gYXBpLmRpc3BhdGNoO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0RmluYWxNaWRkbGV3YXJlKGFwaSkobmV4dCkoYWN0aW9uKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBtaWRkbGV3YXJlLFxuICAgIGFkZE1pZGRsZXdhcmUsXG4gICAgd2l0aE1pZGRsZXdhcmUsXG4gICAgaW5zdGFuY2VJZFxuICB9O1xufTtcblxuLy8gc3JjL2NvbWJpbmVTbGljZXMudHNcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyBhcyBjb21iaW5lUmVkdWNlcnMyIH0gZnJvbSBcInJlZHV4XCI7XG52YXIgaXNTbGljZUxpa2UgPSAobWF5YmVTbGljZUxpa2UpID0+IFwicmVkdWNlclBhdGhcIiBpbiBtYXliZVNsaWNlTGlrZSAmJiB0eXBlb2YgbWF5YmVTbGljZUxpa2UucmVkdWNlclBhdGggPT09IFwic3RyaW5nXCI7XG52YXIgZ2V0UmVkdWNlcnMgPSAoc2xpY2VzKSA9PiBzbGljZXMuZmxhdE1hcCgoc2xpY2VPck1hcCkgPT4gaXNTbGljZUxpa2Uoc2xpY2VPck1hcCkgPyBbW3NsaWNlT3JNYXAucmVkdWNlclBhdGgsIHNsaWNlT3JNYXAucmVkdWNlcl1dIDogT2JqZWN0LmVudHJpZXMoc2xpY2VPck1hcCkpO1xudmFyIE9SSUdJTkFMX1NUQVRFID0gU3ltYm9sLmZvcihcInJ0ay1zdGF0ZS1wcm94eS1vcmlnaW5hbFwiKTtcbnZhciBpc1N0YXRlUHJveHkgPSAodmFsdWUpID0+ICEhdmFsdWUgJiYgISF2YWx1ZVtPUklHSU5BTF9TVEFURV07XG52YXIgc3RhdGVQcm94eU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGNyZWF0ZVN0YXRlUHJveHkgPSAoc3RhdGUsIHJlZHVjZXJNYXApID0+IGVtcGxhY2Uoc3RhdGVQcm94eU1hcCwgc3RhdGUsIHtcbiAgaW5zZXJ0OiAoKSA9PiBuZXcgUHJveHkoc3RhdGUsIHtcbiAgICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PiB7XG4gICAgICBpZiAocHJvcCA9PT0gT1JJR0lOQUxfU1RBVEUpIHJldHVybiB0YXJnZXQ7XG4gICAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyTWFwW3Byb3AudG9TdHJpbmcoKV07XG4gICAgICAgIGlmIChyZWR1Y2VyKSB7XG4gICAgICAgICAgY29uc3QgcmVkdWNlclJlc3VsdCA9IHJlZHVjZXIodm9pZCAwLCB7XG4gICAgICAgICAgICB0eXBlOiBuYW5vaWQoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVkdWNlclJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMjQpIDogYFRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXCIke3Byb3AudG9TdHJpbmcoKX1cIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBjYWxsZWQgZm9yIHNlbGVjdG9yKCkuIElmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIHlvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZWR1Y2VyUmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSlcbn0pO1xudmFyIG9yaWdpbmFsID0gKHN0YXRlKSA9PiB7XG4gIGlmICghaXNTdGF0ZVByb3h5KHN0YXRlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDI1KSA6IFwib3JpZ2luYWwgbXVzdCBiZSB1c2VkIG9uIHN0YXRlIFByb3h5XCIpO1xuICB9XG4gIHJldHVybiBzdGF0ZVtPUklHSU5BTF9TVEFURV07XG59O1xudmFyIG5vb3BSZWR1Y2VyID0gKHN0YXRlID0ge30pID0+IHN0YXRlO1xuZnVuY3Rpb24gY29tYmluZVNsaWNlcyguLi5zbGljZXMpIHtcbiAgY29uc3QgcmVkdWNlck1hcCA9IE9iamVjdC5mcm9tRW50cmllcyhnZXRSZWR1Y2VycyhzbGljZXMpKTtcbiAgY29uc3QgZ2V0UmVkdWNlciA9ICgpID0+IE9iamVjdC5rZXlzKHJlZHVjZXJNYXApLmxlbmd0aCA/IGNvbWJpbmVSZWR1Y2VyczIocmVkdWNlck1hcCkgOiBub29wUmVkdWNlcjtcbiAgbGV0IHJlZHVjZXIgPSBnZXRSZWR1Y2VyKCk7XG4gIGZ1bmN0aW9uIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH1cbiAgY29tYmluZWRSZWR1Y2VyLndpdGhMYXp5TG9hZGVkU2xpY2VzID0gKCkgPT4gY29tYmluZWRSZWR1Y2VyO1xuICBjb25zdCBpbmplY3QgPSAoc2xpY2UsIGNvbmZpZyA9IHt9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgcmVkdWNlclBhdGgsXG4gICAgICByZWR1Y2VyOiByZWR1Y2VyVG9JbmplY3RcbiAgICB9ID0gc2xpY2U7XG4gICAgY29uc3QgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyTWFwW3JlZHVjZXJQYXRoXTtcbiAgICBpZiAoIWNvbmZpZy5vdmVycmlkZUV4aXN0aW5nICYmIGN1cnJlbnRSZWR1Y2VyICYmIGN1cnJlbnRSZWR1Y2VyICE9PSByZWR1Y2VyVG9JbmplY3QpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYGNhbGxlZCBcXGBpbmplY3RcXGAgdG8gb3ZlcnJpZGUgYWxyZWFkeS1leGlzdGluZyByZWR1Y2VyICR7cmVkdWNlclBhdGh9IHdpdGhvdXQgc3BlY2lmeWluZyBcXGBvdmVycmlkZUV4aXN0aW5nOiB0cnVlXFxgYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyO1xuICAgIH1cbiAgICByZWR1Y2VyTWFwW3JlZHVjZXJQYXRoXSA9IHJlZHVjZXJUb0luamVjdDtcbiAgICByZWR1Y2VyID0gZ2V0UmVkdWNlcigpO1xuICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXI7XG4gIH07XG4gIGNvbnN0IHNlbGVjdG9yID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbiBtYWtlU2VsZWN0b3Ioc2VsZWN0b3JGbiwgc2VsZWN0U3RhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gc2VsZWN0b3IyKHN0YXRlLCAuLi5hcmdzKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3JGbihjcmVhdGVTdGF0ZVByb3h5KHNlbGVjdFN0YXRlID8gc2VsZWN0U3RhdGUoc3RhdGUsIC4uLmFyZ3MpIDogc3RhdGUsIHJlZHVjZXJNYXApLCAuLi5hcmdzKTtcbiAgICB9O1xuICB9LCB7XG4gICAgb3JpZ2luYWxcbiAgfSk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKGNvbWJpbmVkUmVkdWNlciwge1xuICAgIGluamVjdCxcbiAgICBzZWxlY3RvclxuICB9KTtcbn1cblxuLy8gc3JjL2Zvcm1hdFByb2RFcnJvck1lc3NhZ2UudHNcbmZ1bmN0aW9uIGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoY29kZSkge1xuICByZXR1cm4gYE1pbmlmaWVkIFJlZHV4IFRvb2xraXQgZXJyb3IgIyR7Y29kZX07IHZpc2l0IGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvRXJyb3JzP2NvZGU9JHtjb2RlfSBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzLiBgO1xufVxuZXhwb3J0IHtcbiAgUmVkdWNlclR5cGUsXG4gIFNIT1VMRF9BVVRPQkFUQ0gsXG4gIFRhc2tBYm9ydEVycm9yLFxuICBUdXBsZSxcbiAgYWRkTGlzdGVuZXIsXG4gIGFzeW5jVGh1bmtDcmVhdG9yLFxuICBhdXRvQmF0Y2hFbmhhbmNlcixcbiAgYnVpbGRDcmVhdGVTbGljZSxcbiAgY2xlYXJBbGxMaXN0ZW5lcnMsXG4gIGNvbWJpbmVTbGljZXMsXG4gIGNvbmZpZ3VyZVN0b3JlLFxuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFjdGlvbkNyZWF0b3JJbnZhcmlhbnRNaWRkbGV3YXJlLFxuICBjcmVhdGVBc3luY1RodW5rLFxuICBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcixcbiAgY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3JDcmVhdG9yLFxuICBjcmVhdGVEeW5hbWljTWlkZGxld2FyZSxcbiAgY3JlYXRlRW50aXR5QWRhcHRlcixcbiAgY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLFxuICBjcmVhdGVMaXN0ZW5lck1pZGRsZXdhcmUsXG4gIHByb2R1Y2UgYXMgY3JlYXRlTmV4dFN0YXRlLFxuICBjcmVhdGVSZWR1Y2VyLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgY3JlYXRlU2VsZWN0b3JDcmVhdG9yMiBhcyBjcmVhdGVTZWxlY3RvckNyZWF0b3IsXG4gIGNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSxcbiAgY3JlYXRlU2xpY2UsXG4gIGN1cnJlbnQzIGFzIGN1cnJlbnQsXG4gIGZpbmROb25TZXJpYWxpemFibGVWYWx1ZSxcbiAgZm9ybWF0UHJvZEVycm9yTWVzc2FnZSxcbiAgZnJlZXplLFxuICBpc0FjdGlvbkNyZWF0b3IsXG4gIGlzQWxsT2YsXG4gIGlzQW55T2YsXG4gIGlzQXN5bmNUaHVua0FjdGlvbixcbiAgaXNEcmFmdDUgYXMgaXNEcmFmdCxcbiAgaXNGU0EgYXMgaXNGbHV4U3RhbmRhcmRBY3Rpb24sXG4gIGlzRnVsZmlsbGVkLFxuICBpc0ltbXV0YWJsZURlZmF1bHQsXG4gIGlzUGVuZGluZyxcbiAgaXNQbGFpbixcbiAgaXNSZWplY3RlZCxcbiAgaXNSZWplY3RlZFdpdGhWYWx1ZSxcbiAgbHJ1TWVtb2l6ZSxcbiAgbWluaVNlcmlhbGl6ZUVycm9yLFxuICBuYW5vaWQsXG4gIG9yaWdpbmFsMiBhcyBvcmlnaW5hbCxcbiAgcHJlcGFyZUF1dG9CYXRjaGVkLFxuICByZW1vdmVMaXN0ZW5lcixcbiAgdW53cmFwUmVzdWx0LFxuICB3ZWFrTWFwTWVtb2l6ZTIgYXMgd2Vha01hcE1lbW9pemVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWR1eC10b29sa2l0Lm1vZGVybi5tanMubWFwIiwiLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQgKiBhcyBSZWFjdDIgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjIgfSBmcm9tIFwidXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qc1wiO1xuXG4vLyBzcmMvdXRpbHMvcmVhY3QudHNcbmltcG9ydCAqIGFzIFJlYWN0T3JpZ2luYWwgZnJvbSBcInJlYWN0XCI7XG52YXIgUmVhY3QgPSAoXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG4gIFwiZGVmYXVsdFwiIGluIFJlYWN0T3JpZ2luYWwgPyBSZWFjdE9yaWdpbmFsW1wiZGVmYXVsdFwiXSA6IFJlYWN0T3JpZ2luYWxcbik7XG5cbi8vIHNyYy9jb21wb25lbnRzL0NvbnRleHQudHNcbnZhciBDb250ZXh0S2V5ID0gU3ltYm9sLmZvcihgcmVhY3QtcmVkdXgtY29udGV4dGApO1xudmFyIGdUID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogKFxuICAvKiBmYWxsIGJhY2sgdG8gYSBwZXItbW9kdWxlIHNjb3BlIChwcmUtOC4xIGJlaGF2aW91cikgaWYgYGdsb2JhbFRoaXNgIGlzIG5vdCBhdmFpbGFibGUgKi9cbiAge31cbik7XG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICBpZiAoIVJlYWN0LmNyZWF0ZUNvbnRleHQpXG4gICAgcmV0dXJuIHt9O1xuICBjb25zdCBjb250ZXh0TWFwID0gZ1RbQ29udGV4dEtleV0gPz8gKGdUW0NvbnRleHRLZXldID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gIGxldCByZWFsQ29udGV4dCA9IGNvbnRleHRNYXAuZ2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQpO1xuICBpZiAoIXJlYWxDb250ZXh0KSB7XG4gICAgcmVhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgcmVhbENvbnRleHQuZGlzcGxheU5hbWUgPSBcIlJlYWN0UmVkdXhcIjtcbiAgICB9XG4gICAgY29udGV4dE1hcC5zZXQoUmVhY3QuY3JlYXRlQ29udGV4dCwgcmVhbENvbnRleHQpO1xuICB9XG4gIHJldHVybiByZWFsQ29udGV4dDtcbn1cbnZhciBSZWFjdFJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBnZXRDb250ZXh0KCk7XG5cbi8vIHNyYy91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZS50c1xudmFyIG5vdEluaXRpYWxpemVkID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJ1U0VTIG5vdCBpbml0aWFsaXplZCFcIik7XG59O1xuXG4vLyBzcmMvaG9va3MvdXNlUmVkdXhDb250ZXh0LnRzXG5mdW5jdGlvbiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0MigpIHtcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KGNvbnRleHQpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImNvdWxkIG5vdCBmaW5kIHJlYWN0LXJlZHV4IGNvbnRleHQgdmFsdWU7IHBsZWFzZSBlbnN1cmUgdGhlIGNvbXBvbmVudCBpcyB3cmFwcGVkIGluIGEgPFByb3ZpZGVyPlwiXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICB9O1xufVxudmFyIHVzZVJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVSZWR1eENvbnRleHRIb29rKCk7XG5cbi8vIHNyYy9ob29rcy91c2VTZWxlY3Rvci50c1xudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZVVzZVNlbGVjdG9yID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gZm47XG59O1xudmFyIHJlZkVxdWFsaXR5ID0gKGEsIGIpID0+IGEgPT09IGI7XG5mdW5jdGlvbiBjcmVhdGVTZWxlY3Rvckhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZVNlbGVjdG9yMiA9IChzZWxlY3RvciwgZXF1YWxpdHlGbk9yT3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBlcXVhbGl0eUZuID0gcmVmRXF1YWxpdHksIGRldk1vZGVDaGVja3MgPSB7fSB9ID0gdHlwZW9mIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IHsgZXF1YWxpdHlGbjogZXF1YWxpdHlGbk9yT3B0aW9ucyB9IDogZXF1YWxpdHlGbk9yT3B0aW9ucztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlcXVhbGl0eUZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYW4gZXF1YWxpdHkgZnVuY3Rpb24gdG8gdXNlU2VsZWN0b3JgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGUsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgY29uc3QgZmlyc3RSdW4gPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gICAgY29uc3Qgd3JhcHBlZFNlbGVjdG9yID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgICB7XG4gICAgICAgIFtzZWxlY3Rvci5uYW1lXShzdGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrOiBmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayxcbiAgICAgICAgICAgICAgc3RhYmlsaXR5Q2hlY2s6IGZpbmFsU3RhYmlsaXR5Q2hlY2tcbiAgICAgICAgICAgIH0gPSB7XG4gICAgICAgICAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgICAgICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2ssXG4gICAgICAgICAgICAgIC4uLmRldk1vZGVDaGVja3NcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZmluYWxTdGFiaWxpdHlDaGVjayA9PT0gXCJhbHdheXNcIiB8fCBmaW5hbFN0YWJpbGl0eUNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRvQ29tcGFyZSA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICAgICAgaWYgKCFlcXVhbGl0eUZuKHNlbGVjdGVkLCB0b0NvbXBhcmUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAoeyBzdGFjayB9ID0gZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIFwiU2VsZWN0b3IgXCIgKyAoc2VsZWN0b3IubmFtZSB8fCBcInVua25vd25cIikgKyBcIiByZXR1cm5lZCBhIGRpZmZlcmVudCByZXN1bHQgd2hlbiBjYWxsZWQgd2l0aCB0aGUgc2FtZSBwYXJhbWV0ZXJzLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gYSBuZXcgcmVmZXJlbmNlIChzdWNoIGFzIGFuIG9iamVjdCBvciBhbiBhcnJheSkgc2hvdWxkIGJlIG1lbW9pemVkOiBodHRwczovL3JlZHV4LmpzLm9yZy91c2FnZS9kZXJpdmluZy1kYXRhLXNlbGVjdG9ycyNvcHRpbWl6aW5nLXNlbGVjdG9ycy13aXRoLW1lbW9pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQyOiB0b0NvbXBhcmUsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcImFsd2F5c1wiIHx8IGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICh7IHN0YWNrIH0gPSBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgXCJTZWxlY3RvciBcIiArIChzZWxlY3Rvci5uYW1lIHx8IFwidW5rbm93blwiKSArIFwiIHJldHVybmVkIHRoZSByb290IHN0YXRlIHdoZW4gY2FsbGVkLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gdGhlIGVudGlyZSBzdGF0ZSBhcmUgYWxtb3N0IGNlcnRhaW5seSBhIG1pc3Rha2UsIGFzIHRoZXkgd2lsbCBjYXVzZSBhIHJlcmVuZGVyIHdoZW5ldmVyICphbnl0aGluZyogaW4gc3RhdGUgY2hhbmdlcy5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhY2sgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaXJzdFJ1bi5jdXJyZW50KVxuICAgICAgICAgICAgICBmaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgfVtzZWxlY3Rvci5uYW1lXSxcbiAgICAgIFtzZWxlY3Rvciwgc3RhYmlsaXR5Q2hlY2ssIGRldk1vZGVDaGVja3Muc3RhYmlsaXR5Q2hlY2tdXG4gICAgKTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IoXG4gICAgICBzdWJzY3JpcHRpb24uYWRkTmVzdGVkU3ViLFxuICAgICAgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSB8fCBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgIHdyYXBwZWRTZWxlY3RvcixcbiAgICAgIGVxdWFsaXR5Rm5cbiAgICApO1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoc2VsZWN0ZWRTdGF0ZSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU2VsZWN0b3IyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VTZWxlY3RvcjJcbiAgfSk7XG4gIHJldHVybiB1c2VTZWxlY3RvcjI7XG59XG52YXIgdXNlU2VsZWN0b3IgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU2VsZWN0b3JIb29rKCk7XG5cbi8vIHNyYy91dGlscy9yZWFjdC1pcy50c1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpO1xudmFyIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc2VydmVyX2NvbnRleHRcIik7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKTtcbnZhciBSRUFDVF9DTElFTlRfUkVGRVJFTkNFID0gU3ltYm9sLmZvcihcInJlYWN0LmNsaWVudC5yZWZlcmVuY2VcIik7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcIm9iamVjdFwiICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DTElFTlRfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9iamVjdC50eXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBjb25zdCAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRToge1xuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuXG4vLyBzcmMvdXRpbHMvd2FybmluZy50c1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbi8vIHNyYy9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy50c1xuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lKSB7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdmFsdWUgZm9yICR7bWV0aG9kTmFtZX0gaW4gY29ubmVjdC5gKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSBcIm1hcFN0YXRlVG9Qcm9wc1wiIHx8IG1ldGhvZE5hbWUgPT09IFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgXCJkZXBlbmRzT25Pd25Qcm9wc1wiKSkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgYFRoZSBzZWxlY3RvciBmb3IgJHttZXRob2ROYW1lfSBvZiBjb25uZWN0IGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKTtcbiAgdmVyaWZ5KG1lcmdlUHJvcHMsIFwibWVyZ2VQcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LnRzXG5mdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIHtcbiAgYXJlU3RhdGVzRXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbFxufSkge1xuICBsZXQgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgbGV0IHN0YXRlO1xuICBsZXQgb3duUHJvcHM7XG4gIGxldCBzdGF0ZVByb3BzO1xuICBsZXQgZGlzcGF0Y2hQcm9wcztcbiAgbGV0IG1lcmdlZFByb3BzO1xuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3U3RhdGUoKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpXG4gICAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICBjb25zdCBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwoXG4gICAgICBuZXh0U3RhdGUsXG4gICAgICBzdGF0ZSxcbiAgICAgIG5leHRPd25Qcm9wcyxcbiAgICAgIG93blByb3BzXG4gICAgKTtcbiAgICBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IG5leHRPd25Qcm9wcztcbiAgICBpZiAocHJvcHNDaGFuZ2VkICYmIHN0YXRlQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3U3RhdGUoKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIHtcbiAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgaW5pdE1lcmdlUHJvcHMsXG4gIC4uLm9wdGlvbnNcbn0pIHtcbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gaW5pdE1hcFN0YXRlVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKTtcbiAgfVxuICByZXR1cm4gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn1cblxuLy8gc3JjL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycy50c1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBjb25zdCBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9ICguLi5hcmdzKSA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yKC4uLmFyZ3MpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbi8vIHNyYy91dGlscy9pc1BsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpXG4gICAgcmV0dXJuIHRydWU7XG4gIGxldCBiYXNlUHJvdG8gPSBwcm90bztcbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cbiAgcmV0dXJuIHByb3RvID09PSBiYXNlUHJvdG87XG59XG5cbi8vIHNyYy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gdmVyaWZ5UGxhaW5PYmplY3QodmFsdWUsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgYCR7bWV0aG9kTmFtZX0oKSBpbiAke2Rpc3BsYXlOYW1lfSBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3ZhbHVlfS5gXG4gICAgKTtcbiAgfVxufVxuXG4vLyBzcmMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy50c1xuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoKTtcbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59XG5mdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufVxuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCB7IGRpc3BsYXlOYW1lIH0pIHtcbiAgICBjb25zdCBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIHZvaWQgMCk7XG4gICAgfTtcbiAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IHRydWU7XG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgbGV0IHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L2ludmFsaWRBcmdGYWN0b3J5LnRzXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShhcmcsIG5hbWUpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgb3B0aW9ucykgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIHZhbHVlIG9mIHR5cGUgJHt0eXBlb2YgYXJnfSBmb3IgJHtuYW1lfSBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50ICR7b3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZX0uYFxuICAgICk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy50c1xuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcIm9iamVjdFwiID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChcbiAgICAoZGlzcGF0Y2gpID0+IChcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGJpbmRBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKVxuICAgIClcbiAgKSA6ICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KChkaXNwYXRjaCkgPT4gKHtcbiAgICBkaXNwYXRjaFxuICB9KSkgOiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcImZ1bmN0aW9uXCIgPyAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpXG4gICkgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMudHNcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwU3RhdGVUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudCgoKSA9PiAoe30pKSA6IHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIilcbiAgKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L21lcmdlUHJvcHMudHNcbmZ1bmN0aW9uIGRlZmF1bHRNZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gIHJldHVybiB7IC4uLm93blByb3BzLCAuLi5zdGF0ZVByb3BzLCAuLi5kaXNwYXRjaFByb3BzIH07XG59XG5mdW5jdGlvbiB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdE1lcmdlUHJvcHNQcm94eShkaXNwYXRjaCwgeyBkaXNwbGF5TmFtZSwgYXJlTWVyZ2VkUHJvcHNFcXVhbCB9KSB7XG4gICAgbGV0IGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICBsZXQgbWVyZ2VkUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgY29uc3QgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgICBpZiAoaGFzUnVuT25jZSkge1xuICAgICAgICBpZiAoIWFyZU1lcmdlZFByb3BzRXF1YWwobmV4dE1lcmdlZFByb3BzLCBtZXJnZWRQcm9wcykpXG4gICAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgdmVyaWZ5UGxhaW5PYmplY3QobWVyZ2VkUHJvcHMsIGRpc3BsYXlOYW1lLCBcIm1lcmdlUHJvcHNcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gKCkgPT4gZGVmYXVsdE1lcmdlUHJvcHMgOiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWVyZ2VQcm9wcywgXCJtZXJnZVByb3BzXCIpO1xufVxuXG4vLyBzcmMvdXRpbHMvYmF0Y2gudHNcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxuLy8gc3JjL3V0aWxzL1N1YnNjcmlwdGlvbi50c1xuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICBsZXQgZmlyc3QgPSBudWxsO1xuICBsZXQgbGFzdCA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgY2xlYXIoKSB7XG4gICAgICBmaXJzdCA9IG51bGw7XG4gICAgICBsYXN0ID0gbnVsbDtcbiAgICB9LFxuICAgIG5vdGlmeSgpIHtcbiAgICAgIGRlZmF1bHROb29wQmF0Y2goKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0KCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfSxcbiAgICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBsYXN0ID0ge1xuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgcHJldjogbGFzdFxuICAgICAgfTtcbiAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBsaXN0ZW5lcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaXJzdCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxudmFyIG51bGxMaXN0ZW5lcnMgPSB7XG4gIG5vdGlmeSgpIHtcbiAgfSxcbiAgZ2V0OiAoKSA9PiBbXVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gIGxldCB1bnN1YnNjcmliZTtcbiAgbGV0IGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gIGxldCBzdWJzY3JpcHRpb25zQW1vdW50ID0gMDtcbiAgbGV0IHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIGNvbnN0IGNsZWFudXBMaXN0ZW5lciA9IGxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cExpc3RlbmVyKCk7XG4gICAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzKCkge1xuICAgIGxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VXcmFwcGVyKCkge1xuICAgIGlmIChzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBzZWxmU3Vic2NyaWJlZDtcbiAgfVxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmUoKSB7XG4gICAgc3Vic2NyaXB0aW9uc0Ftb3VudCsrO1xuICAgIGlmICghdW5zdWJzY3JpYmUpIHtcbiAgICAgIHVuc3Vic2NyaWJlID0gcGFyZW50U3ViID8gcGFyZW50U3ViLmFkZE5lc3RlZFN1YihoYW5kbGVDaGFuZ2VXcmFwcGVyKSA6IHN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIGxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50LS07XG4gICAgaWYgKHVuc3Vic2NyaWJlICYmIHN1YnNjcmlwdGlvbnNBbW91bnQgPT09IDApIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB1bnN1YnNjcmliZSA9IHZvaWQgMDtcbiAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoIXNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmIChzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHtcbiAgICBhZGROZXN0ZWRTdWIsXG4gICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICBoYW5kbGVDaGFuZ2VXcmFwcGVyLFxuICAgIGlzU3Vic2NyaWJlZCxcbiAgICB0cnlTdWJzY3JpYmU6IHRyeVN1YnNjcmliZVNlbGYsXG4gICAgdHJ5VW5zdWJzY3JpYmU6IHRyeVVuc3Vic2NyaWJlU2VsZixcbiAgICBnZXRMaXN0ZW5lcnM6ICgpID0+IGxpc3RlbmVyc1xuICB9O1xuICByZXR1cm4gc3Vic2NyaXB0aW9uO1xufVxuXG4vLyBzcmMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC50c1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpO1xudmFyIGlzUmVhY3ROYXRpdmUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCI7XG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IGNhblVzZURPTSB8fCBpc1JlYWN0TmF0aXZlID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xuXG4vLyBzcmMvdXRpbHMvc2hhbGxvd0VxdWFsLnRzXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKVxuICAgIHJldHVybiB0cnVlO1xuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIHNyYy91dGlscy9ob2lzdFN0YXRpY3MudHNcbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge1xuICBbRm9yd2FyZFJlZl06IEZPUldBUkRfUkVGX1NUQVRJQ1MsXG4gIFtNZW1vXTogTUVNT19TVEFUSUNTXG59O1xuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgaWYgKGlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfVxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFtcIiQkdHlwZW9mXCJdXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgY29uc3QgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIGNvbnN0IHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxuLy8gc3JjL2NvbXBvbmVudHMvY29ubmVjdC50c3hcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IG5vdEluaXRpYWxpemVkO1xudmFyIGluaXRpYWxpemVDb25uZWN0ID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gZm47XG59O1xudmFyIE5PX1NVQlNDUklQVElPTl9BUlJBWSA9IFtudWxsLCBudWxsXTtcbnZhciBzdHJpbmdpZnlDb21wb25lbnQgPSAoQ29tcCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShDb21wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhDb21wKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhlZmZlY3RGdW5jLCBlZmZlY3RBcmdzLCBkZXBlbmRlbmNpZXMpIHtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiBlZmZlY3RGdW5jKC4uLmVmZmVjdEFyZ3MpLCBkZXBlbmRlbmNpZXMpO1xufVxuZnVuY3Rpb24gY2FwdHVyZVdyYXBwZXJQcm9wcyhsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vicykge1xuICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQgPSB3cmFwcGVyUHJvcHM7XG4gIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmVVcGRhdGVzKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGlzTW91bnRlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKSB7XG4gIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfTtcbiAgbGV0IGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG4gIGxldCBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICBjb25zdCBjaGVja0ZvclVwZGF0ZXMgPSAoKSA9PiB7XG4gICAgaWYgKGRpZFVuc3Vic2NyaWJlIHx8ICFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXRlc3RTdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBsZXQgbmV3Q2hpbGRQcm9wcywgZXJyb3I7XG4gICAgdHJ5IHtcbiAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IoXG4gICAgICAgIGxhdGVzdFN0b3JlU3RhdGUsXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgIH1cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICAgIH1cbiAgICBpZiAobmV3Q2hpbGRQcm9wcyA9PT0gbGFzdENoaWxkUHJvcHMuY3VycmVudCkge1xuICAgICAgaWYgKCFyZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50KSB7XG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IHRydWU7XG4gICAgICBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG4gIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gIGNoZWNrRm9yVXBkYXRlcygpO1xuICBjb25zdCB1bnN1YnNjcmliZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICBpZiAobGFzdFRocm93bkVycm9yKSB7XG4gICAgICB0aHJvdyBsYXN0VGhyb3duRXJyb3I7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdW5zdWJzY3JpYmVXcmFwcGVyO1xufVxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gZmFsc2U7XG5mdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCB7XG4gIC8vIFRoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQsIHNvIFRTIGRvZXNuJ3QgbGlrZSB1cyBkZXN0cnVjdHVyaW5nIHRoaXMgdG8gY2hlY2sgaXRzIGV4aXN0ZW5jZS5cbiAgLy8gQHRzLWlnbm9yZVxuICBwdXJlLFxuICBhcmVTdGF0ZXNFcXVhbCA9IHN0cmljdEVxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIC8vIHVzZSBSZWFjdCdzIGZvcndhcmRSZWYgdG8gZXhwb3NlIGEgcmVmIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudFxuICBmb3J3YXJkUmVmID0gZmFsc2UsXG4gIC8vIHRoZSBjb250ZXh0IGNvbnN1bWVyIHRvIHVzZVxuICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHRcbn0gPSB7fSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHB1cmUgIT09IHZvaWQgMCAmJiAhaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbikge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IHRydWU7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAnVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gYGNvbm5lY3RgIGlzIG5vdyBhbHdheXMgYSBcInB1cmUvbWVtb2l6ZWRcIiBjb21wb25lbnQnXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb25zdCBDb250ZXh0ID0gY29udGV4dDtcbiAgY29uc3QgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1lcmdlUHJvcHMgPSBtZXJnZVByb3BzRmFjdG9yeShtZXJnZVByb3BzKTtcbiAgY29uc3Qgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCB3cmFwV2l0aENvbm5lY3QgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSAvKiBAX19QVVJFX18gKi8gaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgaWYgKCFpc1ZhbGlkKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFlvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGNvbm5lY3QuIEluc3RlYWQgcmVjZWl2ZWQgJHtzdHJpbmdpZnlDb21wb25lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgKX1gXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgXCJDb21wb25lbnRcIjtcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGBDb25uZWN0KCR7d3JhcHBlZENvbXBvbmVudE5hbWV9KWA7XG4gICAgY29uc3Qgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IHtcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIGRpc3BsYXlOYW1lLFxuICAgICAgd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIENvbm5lY3RGdW5jdGlvbihwcm9wcykge1xuICAgICAgY29uc3QgW3Byb3BzQ29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgd3JhcHBlclByb3BzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYyLCAuLi53cmFwcGVyUHJvcHMyIH0gPSBwcm9wcztcbiAgICAgICAgcmV0dXJuIFtwcm9wcy5jb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmMiwgd3JhcHBlclByb3BzMl07XG4gICAgICB9LCBbcHJvcHNdKTtcbiAgICAgIGNvbnN0IENvbnRleHRUb1VzZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBsZXQgUmVzdWx0Q29udGV4dCA9IENvbnRleHQ7XG4gICAgICAgIGlmIChwcm9wc0NvbnRleHQ/LkNvbnN1bWVyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IC8qIEBfX1BVUkVfXyAqLyBpc0NvbnRleHRDb25zdW1lcihcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wc0NvbnRleHQuQ29uc3VtZXIsIG51bGwpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIllvdSBtdXN0IHBhc3MgYSB2YWxpZCBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIGFzIGBwcm9wcy5jb250ZXh0YFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZXN1bHRDb250ZXh0ID0gcHJvcHNDb250ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVzdWx0Q29udGV4dDtcbiAgICAgIH0sIFtwcm9wc0NvbnRleHQsIENvbnRleHRdKTtcbiAgICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dFRvVXNlKTtcbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA9IEJvb2xlYW4ocHJvcHMuc3RvcmUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZ2V0U3RhdGUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPSBCb29sZWFuKGNvbnRleHRWYWx1ZSkgJiYgQm9vbGVhbihjb250ZXh0VmFsdWUuc3RvcmUpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhZGlkU3RvcmVDb21lRnJvbVByb3BzICYmICFkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENvdWxkIG5vdCBmaW5kIFwic3RvcmVcIiBpbiB0aGUgY29udGV4dCBvZiBcIiR7ZGlzcGxheU5hbWV9XCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sIG9yIHBhc3MgYSBjdXN0b20gUmVhY3QgY29udGV4dCBwcm92aWRlciB0byA8UHJvdmlkZXI+IGFuZCB0aGUgY29ycmVzcG9uZGluZyBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIHRvICR7ZGlzcGxheU5hbWV9IGluIGNvbm5lY3Qgb3B0aW9ucy5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBzdG9yZSA9IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHByb3BzLnN0b3JlIDogY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgY29uc3QgZ2V0U2VydmVyU3RhdGUgPSBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA/IGNvbnRleHRWYWx1ZS5nZXRTZXJ2ZXJTdGF0ZSA6IHN0b3JlLmdldFN0YXRlO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuICAgICAgY29uc3QgW3N1YnNjcmlwdGlvbiwgbm90aWZ5TmVzdGVkU3Vic10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpXG4gICAgICAgICAgcmV0dXJuIE5PX1NVQlNDUklQVElPTl9BUlJBWTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uMiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihcbiAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyB2b2lkIDAgOiBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5vdGlmeU5lc3RlZFN1YnMyID0gc3Vic2NyaXB0aW9uMi5ub3RpZnlOZXN0ZWRTdWJzLmJpbmQoc3Vic2NyaXB0aW9uMik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uMiwgbm90aWZ5TmVzdGVkU3ViczJdO1xuICAgICAgfSwgW3N0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZV0pO1xuICAgICAgY29uc3Qgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoZGlkU3RvcmVDb21lRnJvbVByb3BzKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNvbnRleHRWYWx1ZSxcbiAgICAgICAgICBzdWJzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICAgIH0sIFtkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZSwgc3Vic2NyaXB0aW9uXSk7XG4gICAgICBjb25zdCBsYXN0Q2hpbGRQcm9wcyA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgbGFzdFdyYXBwZXJQcm9wcyA9IFJlYWN0LnVzZVJlZih3cmFwcGVyUHJvcHMpO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgcmVuZGVySXNTY2hlZHVsZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgaXNNb3VudGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSBSZWFjdC51c2VSZWYoXG4gICAgICAgIHZvaWQgMFxuICAgICAgKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIGNvbnN0IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ICYmIHdyYXBwZXJQcm9wcyA9PT0gbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgIH0sIFtzdG9yZSwgd3JhcHBlclByb3BzXSk7XG4gICAgICBjb25zdCBzdWJzY3JpYmVGb3JSZWFjdCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmUgPSAocmVhY3RMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1YnNjcmliZVVwZGF0ZXMoXG4gICAgICAgICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNoaWxkUHJvcHNTZWxlY3RvcixcbiAgICAgICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgICAgICBsYXN0Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLFxuICAgICAgICAgICAgaXNNb3VudGVkLFxuICAgICAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSxcbiAgICAgICAgICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgICAgICAgICByZWFjdExpc3RlbmVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZTtcbiAgICAgIH0sIFtzdWJzY3JpcHRpb25dKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhjYXB0dXJlV3JhcHBlclByb3BzLCBbXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgIGxhc3RDaGlsZFByb3BzLFxuICAgICAgICByZW5kZXJJc1NjaGVkdWxlZCxcbiAgICAgICAgd3JhcHBlclByb3BzLFxuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLFxuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzXG4gICAgICBdKTtcbiAgICAgIGxldCBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWN0dWFsQ2hpbGRQcm9wcyA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgICAgICAgIC8vIFRPRE8gV2UncmUgcGFzc2luZyB0aHJvdWdoIGEgYmlnIHdyYXBwZXIgdGhhdCBkb2VzIGEgYnVuY2ggb2YgZXh0cmEgc2lkZSBlZmZlY3RzIGJlc2lkZXMgc3Vic2NyaWJpbmdcbiAgICAgICAgICBzdWJzY3JpYmVGb3JSZWFjdCxcbiAgICAgICAgICAvLyBUT0RPIFRoaXMgaXMgaW5jcmVkaWJseSBoYWNreS4gV2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgdGhlIHN0b3JlIHVwZGF0ZSBhbmQgY2FsY3VsYXRlZCBuZXcgY2hpbGQgcHJvcHMsXG4gICAgICAgICAgLy8gVE9ETyBhbmQgd2UncmUganVzdCBwYXNzaW5nIHRoYXQgdGhyb3VnaCBzbyBpdCB0cmlnZ2VycyBhIHJlLXJlbmRlciBmb3IgdXMgcmF0aGVyIHRoYW4gcmVseWluZyBvbiBgdVNFU2AuXG4gICAgICAgICAgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yLFxuICAgICAgICAgIGdldFNlcnZlclN0YXRlID8gKCkgPT4gY2hpbGRQcm9wc1NlbGVjdG9yKGdldFNlcnZlclN0YXRlKCksIHdyYXBwZXJQcm9wcykgOiBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3JcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAobGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgO1xuICAgICAgICAgIGVyci5tZXNzYWdlICs9IGBcblRoZSBlcnJvciBtYXkgYmUgY29ycmVsYXRlZCB3aXRoIHRoaXMgcHJldmlvdXMgZXJyb3I6XG4ke2xhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudC5zdGFja31cblxuYDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgfSk7XG4gICAgICBjb25zdCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5hY3R1YWxDaGlsZFByb3BzLFxuICAgICAgICAgICAgICByZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9LCBbcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgV3JhcHBlZENvbXBvbmVudCwgYWN0dWFsQ2hpbGRQcm9wc10pO1xuICAgICAgY29uc3QgcmVuZGVyZWRDaGlsZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwgeyB2YWx1ZTogb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICB9LCBbQ29udGV4dFRvVXNlLCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQsIG92ZXJyaWRkZW5Db250ZXh0VmFsdWVdKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkO1xuICAgIH1cbiAgICBjb25zdCBfQ29ubmVjdCA9IFJlYWN0Lm1lbW8oQ29ubmVjdEZ1bmN0aW9uKTtcbiAgICBjb25zdCBDb25uZWN0ID0gX0Nvbm5lY3Q7XG4gICAgQ29ubmVjdC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBDb25uZWN0LmRpc3BsYXlOYW1lID0gQ29ubmVjdEZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIGNvbnN0IF9mb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAgICAgICBmdW5jdGlvbiBmb3J3YXJkQ29ubmVjdFJlZihwcm9wcywgcmVmKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3QsIHsgLi4ucHJvcHMsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlZiB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGZvcndhcmRlZCA9IF9mb3J3YXJkZWQ7XG4gICAgICBmb3J3YXJkZWQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIGZvcndhcmRlZC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaG9pc3ROb25SZWFjdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBob2lzdE5vblJlYWN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBXaXRoQ29ubmVjdDtcbn1cbnZhciBjb25uZWN0X2RlZmF1bHQgPSBjb25uZWN0O1xuXG4vLyBzcmMvY29tcG9uZW50cy9Qcm92aWRlci50c3hcbmZ1bmN0aW9uIFByb3ZpZGVyKHtcbiAgc3RvcmUsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICBzZXJ2ZXJTdGF0ZSxcbiAgc3RhYmlsaXR5Q2hlY2sgPSBcIm9uY2VcIixcbiAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrID0gXCJvbmNlXCJcbn0pIHtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZTogc2VydmVyU3RhdGUgPyAoKSA9PiBzZXJ2ZXJTdGF0ZSA6IHZvaWQgMCxcbiAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXG4gICAgfTtcbiAgfSwgW3N0b3JlLCBzZXJ2ZXJTdGF0ZSwgc3RhYmlsaXR5Q2hlY2ssIGlkZW50aXR5RnVuY3Rpb25DaGVja10pO1xuICBjb25zdCBwcmV2aW91c1N0YXRlID0gUmVhY3QudXNlTWVtbygoKSA9PiBzdG9yZS5nZXRTdGF0ZSgpLCBbc3RvcmVdKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBzdWJzY3JpcHRpb24gfSA9IGNvbnRleHRWYWx1ZTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgICBpZiAocHJldmlvdXNTdGF0ZSAhPT0gc3RvcmUuZ2V0U3RhdGUoKSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSB2b2lkIDA7XG4gICAgfTtcbiAgfSwgW2NvbnRleHRWYWx1ZSwgcHJldmlvdXNTdGF0ZV0pO1xuICBjb25zdCBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHRWYWx1ZSB9LCBjaGlsZHJlbik7XG59XG52YXIgUHJvdmlkZXJfZGVmYXVsdCA9IFByb3ZpZGVyO1xuXG4vLyBzcmMvaG9va3MvdXNlU3RvcmUudHNcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0MiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlUmVkdXhDb250ZXh0IDogKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQpXG4gICk7XG4gIGNvbnN0IHVzZVN0b3JlMiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgcmV0dXJuIHN0b3JlO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZVN0b3JlMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlU3RvcmUyXG4gIH0pO1xuICByZXR1cm4gdXNlU3RvcmUyO1xufVxudmFyIHVzZVN0b3JlID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVN0b3JlSG9vaygpO1xuXG4vLyBzcmMvaG9va3MvdXNlRGlzcGF0Y2gudHNcbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlU3RvcmUyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VTdG9yZSA6IGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KTtcbiAgY29uc3QgdXNlRGlzcGF0Y2gyID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUyKCk7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZURpc3BhdGNoMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlRGlzcGF0Y2gyXG4gIH0pO1xuICByZXR1cm4gdXNlRGlzcGF0Y2gyO1xufVxudmFyIHVzZURpc3BhdGNoID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZURpc3BhdGNoSG9vaygpO1xuXG4vLyBzcmMvZXhwb3J0cy50c1xudmFyIGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDtcblxuLy8gc3JjL2luZGV4LnRzXG5pbml0aWFsaXplVXNlU2VsZWN0b3IodXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IyKTtcbmluaXRpYWxpemVDb25uZWN0KFJlYWN0Mi51c2VTeW5jRXh0ZXJuYWxTdG9yZSk7XG5leHBvcnQge1xuICBQcm92aWRlcl9kZWZhdWx0IGFzIFByb3ZpZGVyLFxuICBSZWFjdFJlZHV4Q29udGV4dCxcbiAgYmF0Y2gsXG4gIGNvbm5lY3RfZGVmYXVsdCBhcyBjb25uZWN0LFxuICBjcmVhdGVEaXNwYXRjaEhvb2ssXG4gIGNyZWF0ZVNlbGVjdG9ySG9vayxcbiAgY3JlYXRlU3RvcmVIb29rLFxuICBzaGFsbG93RXF1YWwsXG4gIHVzZURpc3BhdGNoLFxuICB1c2VTZWxlY3RvcixcbiAgdXNlU3RvcmVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1yZWR1eC5tanMubWFwIiwiaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1RNYWluU3RhdGV9IGZyb20gXCJAc3JjL2FwcC9zdG9yZXNcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUFwcFNlbGVjdG9yID0gdXNlU2VsZWN0b3Iud2l0aFR5cGVzPFRNYWluU3RhdGU+KCkiLCJleHBvcnQgY29uc3QgdXNlUmFuZG9tID0gKGZyb20gPSAwLCB0bzogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgciA9IE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIDEwICoqIDE1KVxuICAgIHJldHVybiBmcm9tICsgciAlICh0byArIDEpXG59IiwiZXhwb3J0IHt1c2VBcHBTZWxlY3Rvcn0gZnJvbSAnLi91c2VBcHBTZWxlY3RvcidcbmV4cG9ydCB7dXNlUmFuZG9tfSBmcm9tICcuL3VzZVJhbmRvbSciLCJpbXBvcnQgd29yZHMgZnJvbSAnLi93b3Jkcy5qc29uJ1xuaW1wb3J0IHt1c2VSYW5kb219IGZyb20gXCJAc3JjL3NoYXJlZC9saWJcIjtcblxuZXhwb3J0IGNvbnN0IGdldFdvcmRzID0gKCkgPT4ge1xuICAgIHJldHVybiB3b3Jkc1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tV29yZCA9ICgpID0+IHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IHVzZVJhbmRvbSgwLCB3b3Jkcy5sZW5ndGggLSAxKVxuICAgIHJldHVybiB3b3Jkc1tyYW5kb21JbmRleF1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2dldFdvcmRzJyIsImltcG9ydCB7Y3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb259IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQge1RDaGFyLCBUR2FtZVN0YXRlLCBUU2V0UG9pbnRlclBheWxvYWQsIFRTZXRXb3JkUGF5bG9hZCwgVFdvcmR9IGZyb20gXCJAc3JjL2VudGl0aWVzL2dhbWUvbW9kZWxcIjtcbmltcG9ydCB7Z2V0UmFuZG9tV29yZCwgZ2V0V29yZHN9IGZyb20gXCJAc3JjL2VudGl0aWVzL2dhbWUvbGliXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVEdhbWVTdGF0ZSA9IHtcbiAgICB3b3Jkczoge1xuICAgICAgICAxOiAnJyxcbiAgICAgICAgMjogJycsXG4gICAgICAgIDM6ICcnLFxuICAgICAgICA0OiAnJyxcbiAgICAgICAgNTogJycsXG4gICAgICAgIDY6ICcnXG4gICAgfSxcbiAgICB3b3JkTWF0Y2hlczoge1xuICAgICAgICAxOiBbXSxcbiAgICAgICAgMjogW10sXG4gICAgICAgIDM6IFtdLFxuICAgICAgICA0OiBbXSxcbiAgICAgICAgNTogW10sXG4gICAgICAgIDY6IFtdXG4gICAgfSxcbiAgICB1c2VkQ2hhcnM6IHt9LFxuICAgIHBvaW50ZXI6IDEsXG4gICAgY3VycmVudFdvcmQ6ICdibGFua193b3JkJyxcbiAgICBnYW1lT3ZlcjogZmFsc2UsXG4gICAgZ2FtZVdpbjogZmFsc2UsXG4gICAgdW5rbm93bkluZGV4OiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGNvbnN0IGdhbWVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnZ2FtZScsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBnZXRQb2ludGVyOiAoc3RhdGUpID0+IHN0YXRlLnBvaW50ZXIsXG4gICAgICAgIGdldFdvcmRCeUlkOiAoc3RhdGUsIHdvcmRJZDoga2V5b2YgVEdhbWVTdGF0ZVsnd29yZHMnXSkgPT4gc3RhdGUud29yZHNbd29yZElkXSxcbiAgICAgICAgZ2V0Q3VycmVudFdvcmQ6IChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFdvcmQsXG4gICAgICAgIGdldE1hdGNoQnlJZDogKHN0YXRlLCB3b3JkSWQ6IGtleW9mIFRHYW1lU3RhdGVbJ3dvcmRzJ10pID0+IHN0YXRlLndvcmRNYXRjaGVzW3dvcmRJZF0sXG4gICAgICAgIGdldFVzZWRDaGFyczogKHN0YXRlKSA9PiBzdGF0ZS51c2VkQ2hhcnMsXG4gICAgICAgIGdldEdhbWVPdmVyOiAoc3RhdGUpID0+IHN0YXRlLmdhbWVPdmVyLFxuICAgICAgICBnZXRHYW1lV2luOiAoc3RhdGUpID0+IHN0YXRlLmdhbWVXaW4sXG4gICAgICAgIGdldFVua25vd25JbmRleDogKHN0YXRlKSA9PiBzdGF0ZS51bmtub3duSW5kZXgsXG4gICAgfSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRXb3JkQnlJZDogKHN0YXRlLCB7cGF5bG9hZH06IFBheWxvYWRBY3Rpb248VFNldFdvcmRQYXlsb2FkPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUud29yZHNbcGF5bG9hZC53b3JkSWRdID0gcGF5bG9hZC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBzZXRQb2ludGVyOiAoc3RhdGUsIHtwYXlsb2FkfTogUGF5bG9hZEFjdGlvbjxUU2V0UG9pbnRlclBheWxvYWQ+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5wb2ludGVyID0gcGF5bG9hZFxuICAgICAgICB9LFxuICAgICAgICBwdXNoUG9pbnRlZENoYXI6IChzdGF0ZSwge3BheWxvYWR9OiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS53b3Jkc1tzdGF0ZS5wb2ludGVyXS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUud29yZHNbc3RhdGUucG9pbnRlcl0gKz0gcGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwb3BQb2ludGVkQ2hhcjogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50V29yZCA9IHN0YXRlLndvcmRzW3N0YXRlLnBvaW50ZXJdXG4gICAgICAgICAgICBzdGF0ZS53b3Jkc1tzdGF0ZS5wb2ludGVyXSA9IGN1cnJlbnRXb3JkLnNsaWNlKDAsIGN1cnJlbnRXb3JkLmxlbmd0aCAtIDEpXG4gICAgICAgIH0sXG4gICAgICAgIGVudGVyUG9pbnRlZFdvcmQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgLy/Qv9GA0L7QstC10YDQutCwLCDRgdC+0YHRgtC+0LjRgiDQu9C4INGB0LvQvtCy0L4g0LjQtyA1INCx0YPQutCyXG4gICAgICAgICAgICBpZiAoc3RhdGUud29yZHNbc3RhdGUucG9pbnRlcl0ubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLndvcmRzW3N0YXRlLnBvaW50ZXJdID09PSBzdGF0ZS5jdXJyZW50V29yZCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS53b3JkTWF0Y2hlc1tzdGF0ZS5wb2ludGVyXSA9IG5ldyBBcnJheSg1KS5maWxsKCdtYXRjaGVkJylcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZ2FtZVdpbiA9IHRydWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdldFdvcmRzKCkuaW5jbHVkZXMoc3RhdGUud29yZHNbc3RhdGUucG9pbnRlcl0udG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnBvaW50ZXIgPCA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS53b3Jkc1tzdGF0ZS5wb2ludGVyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY2hhciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnRXb3JkLmluY2x1ZGVzKGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFyU3RhdHVzID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jdXJyZW50V29yZFtpbmRleF0gPT09IGNoYXIgPyAnbWF0Y2hlZCcgOiAnaW5jbHVkZWQnXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZWRDaGFyc1tjaGFyIGFzIFRDaGFyXSA9IGNoYXJTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLndvcmRNYXRjaGVzW3N0YXRlLnBvaW50ZXJdLnB1c2goY2hhclN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZWRDaGFyc1tjaGFyIGFzIFRDaGFyXSA9ICd3cm9uZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLndvcmRNYXRjaGVzW3N0YXRlLnBvaW50ZXJdLnB1c2goJ3dyb25nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5wb2ludGVyKytcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmdhbWVPdmVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucG9pbnRlcisrIC8v0Y3RgtC+INC90YPQttC90L4g0LTQu9GPINGB0L3Rj9C90LjRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVua25vd25JbmRleCA9IHN0YXRlLnBvaW50ZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldEN1cnJlbnRXb3JkOiAoc3RhdGUsIHtwYXlsb2FkfTogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50V29yZCA9IHBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgc2V0R2FtZU92ZXI6IChzdGF0ZSwge3BheWxvYWR9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IHBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgc2V0TmV3R2FtZTogKHN0YXRlID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnBvaW50ZXIgPSAxXG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50V29yZCA9IGdldFJhbmRvbVdvcmQoKVxuICAgICAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSBpbml0aWFsU3RhdGUuZ2FtZU92ZXJcbiAgICAgICAgICAgIHN0YXRlLmdhbWVXaW4gPSBpbml0aWFsU3RhdGUuZ2FtZVdpblxuICAgICAgICAgICAgc3RhdGUud29yZHMgPSBpbml0aWFsU3RhdGUud29yZHNcbiAgICAgICAgICAgIHN0YXRlLnVzZWRDaGFycyA9IHt9XG4gICAgICAgICAgICBzdGF0ZS53b3JkTWF0Y2hlcyA9IGluaXRpYWxTdGF0ZS53b3JkTWF0Y2hlc1xuICAgICAgICAgICAgc3RhdGUudW5rbm93bkluZGV4ID0gaW5pdGlhbFN0YXRlLnVua25vd25JbmRleFxuICAgICAgICB9KSxcbiAgICAgICAgcmVtb3ZlVW5rbm93bkluZGV4OiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnVua25vd25JbmRleCA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHtcbiAgICBzZXRXb3JkQnlJZCxcbiAgICBzZXRQb2ludGVyLFxuICAgIHNldEN1cnJlbnRXb3JkLFxuICAgIHB1c2hQb2ludGVkQ2hhcixcbiAgICBwb3BQb2ludGVkQ2hhcixcbiAgICBlbnRlclBvaW50ZWRXb3JkLFxuICAgIHNldEdhbWVPdmVyLFxuICAgIHNldE5ld0dhbWUsXG4gICAgcmVtb3ZlVW5rbm93bkluZGV4XG59ID0gZ2FtZVNsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGNvbnN0IHtcbiAgICBnZXRQb2ludGVyLFxuICAgIGdldFdvcmRCeUlkLFxuICAgIGdldEN1cnJlbnRXb3JkLFxuICAgIGdldE1hdGNoQnlJZCxcbiAgICBnZXRVc2VkQ2hhcnMsXG4gICAgZ2V0R2FtZU92ZXIsXG4gICAgZ2V0R2FtZVdpbixcbiAgICBnZXRVbmtub3duSW5kZXhcbn0gPSBnYW1lU2xpY2UuZ2V0U2VsZWN0b3JzKClcbiIsImV4cG9ydCAqIGZyb20gJy4vZ2FtZS5zbGljZSdcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnIiwiaW1wb3J0ICogYXMgcyBmcm9tICcuL1dvcmRJbnB1dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtyZW1vdmVVbmtub3duSW5kZXgsIFRDaGFyTWF0Y2gsIFRXb3JkSW5wdXQsIFRXb3JkTWF0Y2h9IGZyb20gXCJAc3JjL2VudGl0aWVzL2dhbWUvbW9kZWxcIjtcbmltcG9ydCB7bWVtbywgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHZhbHVlOiBUV29yZElucHV0LFxuICAgIG1hdGNoZXM6IFRXb3JkTWF0Y2gsXG4gICAgdW5rbm93bjogYm9vbGVhbixcbn1cblxuY29uc3QgV29yZElucHV0ID0gbWVtbygocDogUHJvcHMpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgICBjb25zdCB3b3JkUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICAgIGNvbnN0IGxldHRlcnMgPSBwLnZhbHVlLnBhZEVuZCg1LCAnICcpXG4gICAgY29uc3QgY29udGFpbmVyQ2xhc3NlcyA9IFtzLndvcmRdXG5cbiAgICBpZiAocC51bmtub3duKSB7XG4gICAgICAgIGNvbnRhaW5lckNsYXNzZXMucHVzaChzLnVua25vd24pXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChyZW1vdmVVbmtub3duSW5kZXgoKSlcbiAgICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzLmpvaW4oJyAnKX0gcmVmPXt3b3JkUmVmfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXJzLnNwbGl0KCcnKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChsZXR0ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtzLmxldHRlcl1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwLm1hdGNoZXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1czogUmVjb3JkPFRDaGFyTWF0Y2gsIGFueT4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd3JvbmcnOiBzLndyb25nX2NoYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWF0Y2hlZCc6IHMubWF0Y2hlZF9jaGFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY2x1ZGVkJzogcy5pbmNsdWRlZF9jaGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHN0YXR1c1twLm1hdGNoZXNbaW5kZXhdXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXMuam9pbignICcpfT57bGV0dGVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0pXG5cbmV4cG9ydCB7V29yZElucHV0fSIsImV4cG9ydCB7V29yZElucHV0fSBmcm9tICcuL1dvcmRJbnB1dCciLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbnZhciBfMSA9IFwiY3RkbnVQd0Z0YjQ5ZjdzdHZidE9cIjtcbnZhciBfMiA9IFwiT3U3NklwWEtFN1dtQXNMSUQ0ZlpcIjtcbnZhciBfMyA9IFwieU41RTNUNDlxUTVCRzN6RFJkSU9cIjtcbnZhciBfNCA9IFwielhvS0VkMTRVRm4xVGVORGlySXRcIjtcbnZhciBfNSA9IFwiRDVFVGpIQ04wb2Z3NEVDR1gxaHRcIjtcbmV4cG9ydCB7IF8xIGFzIFwiaW5jbHVkZWRcIiwgXzIgYXMgXCJrZXlib2FyZF9jb250YWluZXJcIiwgXzMgYXMgXCJrZXlib2FyZF9yb3dcIiwgXzQgYXMgXCJtYXRjaGVkXCIsIF81IGFzIFwid3JvbmdcIiB9XG4iLCJpbXBvcnQgKiBhcyBzIGZyb20gJy4vS2V5Ym9hcmQubW9kdWxlLmNzcydcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgICBlbnRlclBvaW50ZWRXb3JkLFxuICAgIGdldFVzZWRDaGFycyxcbiAgICBwb3BQb2ludGVkQ2hhcixcbiAgICBwdXNoUG9pbnRlZENoYXIsXG4gICAgVENoYXIsXG4gICAgVENoYXJNYXRjaFxufSBmcm9tIFwiQHNyYy9lbnRpdGllcy9nYW1lL21vZGVsXCI7XG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZUFwcFNlbGVjdG9yfSBmcm9tIFwiQHNyYy9zaGFyZWQvbGliXCI7XG5cbmV4cG9ydCBjb25zdCBLZXlib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VkQ2hhcnMgPVxuICAgICAgICB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBnZXRVc2VkQ2hhcnMoc3RhdGUuZ2FtZSkpXG5cbiAgICBjb25zdCByb3dzID0gW1xuICAgICAgICBbJ9C5JywgJ9GGJywgJ9GDJywgJ9C6JywgJ9C1JywgJ9C9JywgJ9CzJywgJ9GIJywgJ9GJJywgJ9C3JywgJ9GFJywgJ9GKJ10sXG4gICAgICAgIFsn0YQnLCAn0YsnLCAn0LInLCAn0LAnLCAn0L8nLCAn0YAnLCAn0L4nLCAn0LsnLCAn0LQnLCAn0LYnLCAn0Y0nXSxcbiAgICAgICAgWyfRjycsICfRhycsICfRgScsICfQvCcsICfQuCcsICfRgicsICfRjCcsICfQsScsICfRjiddXG4gICAgXVxuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgICBjb25zdCBoYW5kbGVLZXlVcCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHBvcFBvaW50ZWRDaGFyKCkpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgZGlzcGF0Y2goZW50ZXJQb2ludGVkV29yZCgpKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWdleCA9IC9b0JAt0K/QsC3Rj10vaVxuICAgICAgICBpZiAocmVnZXgudGVzdChlLmtleSkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHB1c2hQb2ludGVkQ2hhcihlLmtleS50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlS2V5VXApO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVLZXlVcCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgcHVzaENoYXIgPSAoaTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHB1c2hQb2ludGVkQ2hhcihpKSlcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0dXNlczogUmVjb3JkPFRDaGFyTWF0Y2gsIHN0cmluZz4gPSB7XG4gICAgICAgICd3cm9uZyc6IHMud3JvbmcsXG4gICAgICAgICdtYXRjaGVkJzogcy5tYXRjaGVkLFxuICAgICAgICAnaW5jbHVkZWQnOiBzLmluY2x1ZGVkLFxuICAgIH1cblxuICAgIGNvbnN0IGdldENsYXNzID0gKGNoYXI6IFRDaGFyKSA9PiB1c2VkQ2hhcnNbY2hhcl0gPyBzdGF0dXNlc1t1c2VkQ2hhcnNbY2hhcl0gYXMgVENoYXJNYXRjaF06ICcnXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Mua2V5Ym9hcmRfY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5rZXlib2FyZF9yb3d9PlxuICAgICAgICAgICAgICAgICAgICB7cm93c1swXS5tYXAoaSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzKGkgYXMgVENoYXIpfSBvbkNsaWNrPXsoKSA9PiBwdXNoQ2hhcihpKX0+e2l9PC9kaXY+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5rZXlib2FyZF9yb3d9PlxuICAgICAgICAgICAgICAgICAgICB7cm93c1sxXS5tYXAoaSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzKGkgYXMgVENoYXIpfSBvbkNsaWNrPXsoKSA9PiBwdXNoQ2hhcihpKX0+e2l9PC9kaXY+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5rZXlib2FyZF9yb3d9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHBvcFBvaW50ZWRDaGFyKCkpfT5iYWNrc3BhY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3Jvd3NbMl0ubWFwKGkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzcyhpIGFzIFRDaGFyKX0gb25DbGljaz17KCkgPT4gcHVzaENoYXIoaSl9PntpfTwvZGl2Pil9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZW50ZXJQb2ludGVkV29yZCgpKX0+RW50ZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiZXhwb3J0ICogZnJvbSAnLi9LZXlib2FyZCc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG52YXIgXzEgPSBcImVKZnBoY0tmR0FKMVIwTnJhbExCXCI7XG52YXIgXzIgPSBcIkJ6bDJXM3Z3emJWMzJrb3hWMEVxXCI7XG52YXIgXzMgPSBcIlF5Q3ZUTWkwQ1JJSEhURWxiNUJEXCI7XG52YXIgXzQgPSBcImJhQjBiUGxCQ2xjZkJhM1BnRUxwXCI7XG52YXIgXzUgPSBcInhZN1VhcTJEbHNlWnRpQ3JOc2drXCI7XG5leHBvcnQgeyBfMSBhcyBcImJ1dHRvblwiLCBfMiBhcyBcImNvbnRhaW5lclwiLCBfMyBhcyBcImN1cnJlbnRfd29yZFwiLCBfNCBhcyBcImN1cnJlbnRfd29yZF9jb250YWluZXJcIiwgXzUgYXMgXCJoZWFkaW5nXCIgfVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG52YXIgXzEgPSBcInFNVXlTdFV2WWFVV09qeE5kT2YzXCI7XG52YXIgXzIgPSBcImg2WTY3ZlRFcHZmQW1UenZlSEs4XCI7XG52YXIgXzMgPSBcImJLYV93MTVWZVVQMk01QmlYb2hLXCI7XG5leHBvcnQgeyBfMSBhcyBcIm1vZGFsX2NvbnRhaW5lclwiLCBfMiBhcyBcIm92ZXJsYXlcIiwgXzMgYXMgXCJzaG93TW9kYWxcIiB9XG4iLCJpbXBvcnQge1Byb3BzV2l0aENoaWxkcmVufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIHMgZnJvbSAnLi9Nb2RhbC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtjcmVhdGVQb3J0YWx9IGZyb20gXCJyZWFjdC1kb21cIjtcblxuZXhwb3J0IHR5cGUgVE1vZGFsID0ge1xuICAgIG9wZW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IE1vZGFsID0gKHAgOiBQcm9wc1dpdGhDaGlsZHJlbjxUTW9kYWw+KSA9PiB7XG4gICAgcmV0dXJuIHAub3BlbiAmJiBjcmVhdGVQb3J0YWwoXG4gICAgICAgICg8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Mub3ZlcmxheX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW9kYWxfY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAge3AuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+KSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXBvcnRhbCcpIGFzIEhUTUxFbGVtZW50LFxuICAgIClcbn0iLCJleHBvcnQgKiBmcm9tICcuL01vZGFsJyIsImltcG9ydCAqIGFzIHMgZnJvbSAnLi9HYW1lTW9kYWwubW9kdWxlLmNzcydcbmltcG9ydCB7TW9kYWx9IGZyb20gXCJAc3JjL3NoYXJlZC91aS9Nb2RhbFwiO1xuaW1wb3J0IHt1c2VBcHBTZWxlY3Rvcn0gZnJvbSBcIkBzcmMvc2hhcmVkL2xpYlwiO1xuaW1wb3J0IHtnZXRDdXJyZW50V29yZCwgZ2V0R2FtZU92ZXIsIHNldE5ld0dhbWV9IGZyb20gXCJAc3JjL2VudGl0aWVzL2dhbWUvbW9kZWxcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5leHBvcnQgY29uc3QgR2FtZU92ZXJNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgICBjb25zdCBpc0dhbWVPdmVyID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gZ2V0R2FtZU92ZXIoc3RhdGUuZ2FtZSkpXG4gICAgY29uc3QgY3VycmVudFdvcmQgPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBnZXRDdXJyZW50V29yZChzdGF0ZS5nYW1lKSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWwgb3Blbj17aXNHYW1lT3Zlcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17cy5oZWFkaW5nfT7QmNCz0YDQsCDQvtC60L7QvdGH0LXQvdCwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY3VycmVudF93b3JkX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICDQl9Cw0LPQsNC00LDQvdC90L7QtSDRgdC70L7QstC+OiA8c3BhbiBjbGFzc05hbWU9e3MuY3VycmVudF93b3JkfT57Y3VycmVudFdvcmR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0TmV3R2FtZSgpKX1cbiAgICAgICAgICAgICAgICAgICAgPtCd0L7QstCw0Y8g0LjQs9GA0LA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG4gICAgKVxufSIsImV4cG9ydCAqIGZyb20gJy4vR2FtZU92ZXJNb2RhbCciLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbnZhciBfMSA9IFwibGxpb2NlNDdYUmNjNXNlUVBOQVFcIjtcbnZhciBfMiA9IFwiXzI0a21qUXFSVGszU21VbmVDR0F3XCI7XG52YXIgXzMgPSBcIkhfTXVGX1E1VXZuNU1kZFhLdnFBXCI7XG5leHBvcnQgeyBfMSBhcyBcImJ1dHRvblwiLCBfMiBhcyBcImNvbnRhaW5lclwiLCBfMyBhcyBcImhlYWRpbmdcIiB9XG4iLCJpbXBvcnQgKiBhcyBzIGZyb20gJy4vR2FtZVdpbk1vZGFsLm1vZHVsZS5jc3MnXG5pbXBvcnQge01vZGFsfSBmcm9tIFwiQHNyYy9zaGFyZWQvdWkvTW9kYWxcIjtcbmltcG9ydCB7dXNlQXBwU2VsZWN0b3J9IGZyb20gXCJAc3JjL3NoYXJlZC9saWJcIjtcbmltcG9ydCB7Z2V0R2FtZVdpbiwgc2V0TmV3R2FtZX0gZnJvbSBcIkBzcmMvZW50aXRpZXMvZ2FtZS9tb2RlbFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmV4cG9ydCBjb25zdCBHYW1lV2luTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgY29uc3QgZ2FtZVdpbiA9IHVzZUFwcFNlbGVjdG9yKHN0YXRlID0+IGdldEdhbWVXaW4oc3RhdGUuZ2FtZSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsIG9wZW49e2dhbWVXaW59PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3MuaGVhZGluZ30+0JLRiyDQvtGC0LPQsNC00LDQu9C4INGB0LvQvtCy0L4hPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldE5ld0dhbWUoKSl9XG4gICAgICAgICAgICAgICAgICAgID7QndC+0LLQsNGPINC40LPRgNCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL0dhbWVXaW5Nb2RhbCciLCJpbXBvcnQgKiBhcyBzIGZyb20gJy4vR2FtZUNvbnRhaW5lci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtXb3JkSW5wdXR9IGZyb20gXCJAc3JjL3BhZ2VzL2dhbWUvdWkvV29yZElucHV0XCI7XG5pbXBvcnQge2dldE1hdGNoQnlJZCwgZ2V0VW5rbm93bkluZGV4LCBnZXRXb3JkQnlJZCwgc2V0Q3VycmVudFdvcmQsIFRHYW1lU3RhdGV9IGZyb20gXCJAc3JjL2VudGl0aWVzL2dhbWUvbW9kZWxcIjtcbmltcG9ydCB7dXNlQXBwU2VsZWN0b3J9IGZyb20gXCJAc3JjL3NoYXJlZC9saWJcIjtcbmltcG9ydCB7S2V5Ym9hcmR9IGZyb20gXCJAc3JjL3BhZ2VzL2dhbWUvdWkvS2V5Ym9hcmRcIjtcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtnZXRSYW5kb21Xb3JkfSBmcm9tIFwiQHNyYy9lbnRpdGllcy9nYW1lL2xpYlwiO1xuaW1wb3J0IHtHYW1lT3Zlck1vZGFsfSBmcm9tIFwiQHNyYy9wYWdlcy9nYW1lL3VpL0dhbWVPdmVyTW9kYWxcIjtcbmltcG9ydCB7R2FtZVdpbk1vZGFsfSBmcm9tIFwiQHNyYy9wYWdlcy9nYW1lL3VpL0dhbWVXaW5Nb2RhbFwiO1xuXG5jb25zdCBHYW1lQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB1bmtub3duSW5kZXggPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBnZXRVbmtub3duSW5kZXgoc3RhdGUuZ2FtZSkpXG5cbiAgICBjb25zdCB3b3JkcyA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3b3JkID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT5cbiAgICAgICAgICAgICAgICBnZXRXb3JkQnlJZChzdGF0ZS5nYW1lLCBpIGFzIGtleW9mIFRHYW1lU3RhdGVbJ3dvcmRzJ10pKSBhcyBzdHJpbmdcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT5cbiAgICAgICAgICAgICAgICBnZXRNYXRjaEJ5SWQoc3RhdGUuZ2FtZSwgaSBhcyBrZXlvZiBUR2FtZVN0YXRlWyd3b3JkcyddKSlcbiAgICAgICAgICAgIHN0YWNrLnB1c2goeyB3b3JkLCBtYXRjaCB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGFja1xuICAgIH0pKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRXb3JkKGdldFJhbmRvbVdvcmQoKSkpXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd29yZHMubWFwKCh7d29yZCwgbWF0Y2h9LCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29yZElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzPXttYXRjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5rbm93bj17dW5rbm93bkluZGV4ID8gdW5rbm93bkluZGV4IC0gMSA9PT0gaW5kZXggOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxLZXlib2FyZC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxHYW1lT3Zlck1vZGFsLz5cbiAgICAgICAgICAgIDxHYW1lV2luTW9kYWwvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCB7R2FtZUNvbnRhaW5lcn0iLCJleHBvcnQge0dhbWVDb250YWluZXJ9IGZyb20gJy4vR2FtZUNvbnRhaW5lciciLCJpbXBvcnQge0dhbWVDb250YWluZXJ9IGZyb20gXCJAc3JjL3BhZ2VzL2dhbWUvdWkvR2FtZUNvbnRhaW5lclwiO1xuXG5jb25zdCBHYW1lUGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEdhbWVDb250YWluZXIvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCB7R2FtZVBhZ2V9XG4iLCJleHBvcnQge0dhbWVQYWdlfSBmcm9tICcuL0dhbWVQYWdlJyIsImV4cG9ydCB7R2FtZVBhZ2V9IGZyb20gJy4vdWknIiwiaW1wb3J0IHtjb25maWd1cmVTdG9yZX0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7Z2FtZVNsaWNlfSBmcm9tIFwiQHNyYy9lbnRpdGllcy9nYW1lL21vZGVsXCI7XG5cbmV4cG9ydCBjb25zdCBtYWluU3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjoge1xuICAgICAgICBbZ2FtZVNsaWNlLm5hbWVdOiBnYW1lU2xpY2UucmVkdWNlclxuICAgIH1cbn0pXG5cbmV4cG9ydCB0eXBlIFRNYWluU3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBtYWluU3RvcmUuZ2V0U3RhdGU+OyIsImV4cG9ydCAqIGZyb20gJy4vbWFpblN0b3JlJyIsImltcG9ydCB7UHJvcHNXaXRoQ2hpbGRyZW59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge21haW5TdG9yZX0gZnJvbSAnQHNyYy9hcHAvc3RvcmVzJ1xuXG5leHBvcnQgY29uc3QgTWFpblByb3ZpZGVyID0gKHtjaGlsZHJlbn06IFByb3BzV2l0aENoaWxkcmVuKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e21haW5TdG9yZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1Byb3ZpZGVyPlxuICAgIClcbn0iLCJleHBvcnQgKiBmcm9tICcuL01haW5Qcm92aWRlciciLCJpbXBvcnQgJ0BzcmMvYXBwL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IHtHYW1lUGFnZX0gZnJvbSAnQHNyYy9wYWdlcy9nYW1lJ1xuaW1wb3J0IHtNYWluUHJvdmlkZXJ9IGZyb20gXCJAc3JjL2FwcC9wcm92aWRlcnNcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TWFpblByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxHYW1lUGFnZS8+XG4gICAgICAgICAgICA8L01haW5Qcm92aWRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQge0FwcH0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCdcbmltcG9ydCB7QXBwfSBmcm9tIFwiQHNyYy9hcHAvQXBwXCI7XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuXG5pZiAocm9vdEVsZW1lbnQpIHtcbiAgICBjb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChyb290RWxlbWVudClcbiAgICByb290LnJlbmRlcig8QXBwLz4pXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=