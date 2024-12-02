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
const words_namespaceObject = /*#__PURE__*/JSON.parse('["абаза","абазе","абазу","абазы","абака","абаке","абаки","абаку","аббат","абвер","абзац","аборт","абрам","абрек","абрис","абхаз","абцуг","абшид","аваль","аванс","авары","авгит","авгур","авдот","авель","авеля","авеню","аверс","авизо","авист","авлос","авось","авраа","аврал","авран","автол","автор","агава","агаве","агаву","агавы","агама","агами","агари","агарь","агата","агате","агато","агату","агаты","агафь","агаша","аггел","агент","аглае","аглаи","аглаю","аглая","агнат","агнец","агнии","агнца","агнце","агнцу","агнцы","агора","аграф","агути","адама","адаме","адаму","адель","адепт","адлер","адлец","админ","адова","адово","адову","адовы","адрес","адрон","адски","адско","адуев","адъют","адыге","ажгон","ажите","ажура","ажуре","ажуру","азама","азами","азарт","азбук","азиат","азида","азиде","азиду","азиды","азины","азола","азоле","азолу","азолы","азота","азоте","азоту","азхар","аиром","аиста","аисте","аисту","аисты","айвой","айвою","айкай","айкал","айкаю","айкая","аймак","айран","айрол","айсор","акад.","акаде","акаем","акает","акажу","акала","акали","акало","акант","аканф","акать","акаци","акают","акбар","акима","акиме","акиму","аккур","акмит","акрам","акрах","акрид","акрил","акров","акром","аксен","аксон","актам","актах","актер","актёр","актив","актин","актов","актом","актри","акула","акуле","акулу","акулы","акциз","акции","акций","акцию","акция","акына","акыне","акыну","акыны","алгол","алеем","алеет","алеко","алекс","алела","алели","алело","алена","алене","алену","алены","алеть","алеут","алеша","алеше","алеши","алешу","алеют","алиби","алины","алкал","алкан","алкаш","алкаю","алкая","алкен","алкид","алкил","аллах","аллее","аллеи","аллей","аллен","аллею","аллея","аллил","аллод","аллюр","алмаз","алого","алому","алтее","алтей","алтею","алтея","алтын","алунд","алчба","алчбе","алчбу","алчбы","алчем","алчен","алчет","алчна","алчно","алчны","алчут","алыми","алыча","алыче","алычи","алычу","альба","альма","альмы","альпы","альта","альте","альту","альты","альфа","альфе","альфу","альфы","амали","амаль","амбал","амбар","амбра","амбре","амбру","амбры","амвон","амеба","амёба","амебе","амёбе","амебу","амёбу","амебы","амёбы","амида","амиде","амиду","амиды","амией","амиею","амила","амиле","амилу","амилы","амина","амине","амину","амины","аминь","амиям","амиях","аммос","аможе","амоса","ампер","ампир","ампул","амура","амуре","амуру","амуры","амфор","анапе","анапу","анапы","анаша","анаше","анаши","анашу","анбар","ангар","ангел","ангин","англ.","англи","англо","ангоб","андре","андри","анекд","анели","анеля","анжел","аники","аниме","анион","аниса","анисе","анису","анись","анкер","анкет","анной","аннот","анода","аноде","аноду","аноды","анонс","антиг","антик","антип","антич","антон","антре","ануса","анусе","анусу","анфас","анфил","анфим","анфис","анчар","аншеф","анюта","аорта","аорте","аорту","аорты","апачи","апекс","аписа","аписе","апису","аписы","аплит","аплод","апноэ","апорт","апрел","апрош","апсид","аптек","апфан","апчхи","апшин","араба","арабе","арабо","арабу","арабы","арака","араке","аракс","араку","арами","арапа","арапе","арапу","арапы","арбам","арбат","арбах","арбой","арбою","арбуз","аргал","аргон","аргус","ардал","ареал","арена","арене","арену","арены","арест","арефа","ариан","арией","ариек","ариец","ариею","арина","арине","арину","арины","арист","арифм","ариям","ариях","аркад","аркам","аркан","арках","аркой","аркою","арлем","армад","арман","армии","армий","армию","армия","армюр","армяк","армян","арома","арсин","артем","артил","артис","артос","артур","арфам","арфах","арфой","арфою","архар","архее","архей","архею","архея","архив","архип","арчой","арчою","аршин","арыка","арыке","арыки","арыку","асами","аскер","аскет","асмус","аспид","ассиг","астат","астаф","астле","астма","астме","астму","астмы","астра","астре","астру","астры","асцит","атака","атаке","атаки","атако","атаку","атлас","атлет","атмос","атого","атолл","атома","атоме","атому","атомы","атрии","атрий","атрию","атрия","аттес","аттик","аться","аудио","аудит","аукай","аукал","аукаю","аукая","аукни","аукну","аулам","аулах","аулов","аулом","аурат","аурой","аурою","аусте","аутам","аутах","аутов","аутом","афект","афера","афере","аферу","аферы","афины","афиша","афише","афиши","афишу","афоне","африк","ахаем","ахает","ахала","ахали","ахало","ахами","ахать","ахают","ахеец","ахилл","ахнем","ахнет","ахнув","ахнул","ахнут","ацтек","аэроб","аэрон","бабам","бабах","бабий","бабищ","бабка","бабке","бабки","бабку","бабой","бабок","бабою","бабус","бабуш","бабье","бабьё","бабьи","бабью","бабья","багаж","багги","багер","багет","багор","багра","багре","багру","багры","багрю","багря","бадаб","бадан","бадей","баден","бадье","бадьи","бадью","бадья","базам","базар","базах","базис","базой","базою","базук","байка","байке","байки","байку","байта","байте","байту","байты","бакам","бакан","баках","бакен","баков","баком","бакса","баксе","баксу","баксы","балал","балам","балах","балда","балде","балду","балды","балет","балка","балке","балки","балку","балла","балле","баллу","баллы","балов","балок","балом","балта","балте","балту","балты","балуй","балую","балуя","балык","банан","банда","банде","банду","банды","баней","банек","банею","банит","банка","банке","банки","банко","банку","банно","банок","банта","банте","банту","банты","баням","банях","барак","барам","баран","барах","барда","барде","барду","барды","бареж","баржа","барже","баржи","баржу","барии","барий","барин","барит","барич","барию","бария","барка","барке","барки","баркл","барку","бармы","барна","барне","барну","барны","баров","барок","баром","барон","барро","барса","барсе","барск","барсу","барсы","барха","барчо","барыг","барын","барыш","басам","басах","басен","басил","басим","басит","баска","баске","баски","баску","басма","басме","басму","басмы","басне","басни","баснь","басню","басня","басов","басок","басом","басон","бассо","баста","бастр","басят","батал","батан","батат","батей","батек","батею","батик","батог","батон","батуд","батум","батун","батут","батые","батый","батыр","батыя","батюш","баула","бауле","баулу","баулы","бахал","бахаю","бахая","бахил","бахну","бахро","бахус","бахча","бахче","бахчи","бахчу","бацай","бацал","бацаю","бацая","бацну","бачил","бачиш","бачка","бачке","бачки","бачку","бачок","башек","башен","башка","башке","башки","башку","башма","башне","башни","башню","башня","башта","баяли","баями","баяна","баяне","баяну","баяны","баять","бдела","бдели","бдело","бдени","бдеть","бдите","бдишь","бебут","бегай","бегал","бегам","бегат","бегах","бегаю","бегая","бегла","бегло","бегов","бегом","бегун","бегут","бегуш","бедам","бедах","беден","бедер","бёдер","бедна","бедно","бедны","бедой","бедою","бедра","бёдра","бедре","бедро","бедру","бедст","бедую","бедуя","бежав","бежал","бежат","бежим","бежит","безбо","безве","безде","бездн","бездо","безлю","безме","безна","безоб","безос","безот","безош","безру","безум","безус","бейка","бейся","бейте","бекам","бекар","бекас","беках","бекеш","беков","беком","бекон","белая","белев","белее","белей","белек","белёк","белел","белен","белён","белец","белею","белея","белил","белим","белит","белиц","белка","белке","белки","белку","белог","белое","белой","белок","белом","белою","белуг","белух","белую","белые","белый","белым","белын","белых","белье","бельё","бельм","белью","белья","беляк","белям","белят","белях","беляш","бемит","бёмит","бенди","беник","бенку","бердо","бёрдо","берег","берёг","береж","берез","берёз","берем","берём","берет","берёт","берли","берма","берте","берус","берут","берце","бёрце","берцо","бесам","бесах","бесед","бесен","бесил","бесим","бесит","беско","бесов","бесом","беспа","беспо","беспр","бессв","бессл","бессм","бессп","бесче","бесчу","бесят","бетиз","бетой","бетон","бетою","бетхо","бешен","бзика","бзике","бзики","бзику","бивак","бивал","бивне","бивни","бивню","бивня","бигус","бидон","бизон","биксе","билас","билет","билле","билли","билль","биллю","билля","билон","бился","билый","бимса","бимсе","бимсу","бимсы","бинок","бином","бинта","бинте","бинту","бинты","биогр","биол.","бионт","биота","биоте","биоту","биоты","биржа","бирже","биржи","биржу","бирка","бирке","бирки","бирку","бирок","бирюз","бирюк","бирюч","бисер","бистр","битам","битах","битая","битва","битве","битву","битвы","битки","битла","битле","битлу","битлы","битов","битое","битой","биток","битом","битою","битум","битую","битые","битый","битым","битых","битье","битьё","битью","битья","битюг","бифшт","бичам","бичах","бичей","бичом","бичуй","бичую","бичуя","биясь","блага","благе","благи","благо","благу","блаже","блажи","блажь","бланк","бланш","блата","блате","блату","бледн","блеем","блеет","бленд","блеск","блесн","блефа","блефе","блефу","блешу","блещу","блеют","блеял","ближе","ближн","близк","близо","близь","блика","блике","блики","блику","блина","блине","блинт","блину","блины","блица","блице","блицу","блицы","блога","блоге","блоги","блогу","блока","блоке","блоки","блоку","блонд","блоха","блохе","блохи","блоху","блуда","блуде","блуди","блудн","блуду","блудя","блужу","блуза","блузе","блузу","блузы","блюда","блюде","блюди","блюдо","блюду","блюем","блюём","блюет","блюёт","блюза","блюзе","блюзу","блюзы","блюла","блюли","блюло","блюма","блюме","блюмс","блюму","блюмы","блюют","бляди","блядь","блямб","бляха","бляхе","бляхи","бляху","бобам","бобах","бобби","бобер","бобёр","бобик","бобин","бобка","бобке","бобки","бобку","бобов","бобок","бобом","бобон","бобра","бобре","бобру","бобры","бобчи","богам","богат","богах","богач","богин","богов","богоз","богом","богос","бодай","бодал","бодам","бодах","бодаю","бодая","бодни","бодну","бодов","бодом","бодра","бодре","бодро","бодры","бодрю","бодун","бодяк","боево","божба","божбе","божбу","божбы","божес","божие","божии","божий","божию","божия","божка","божке","божки","божку","божой","божок","божом","божье","божьи","божью","божья","бозон","боимс","боинг","боитс","боишь","бойка","бойке","бойки","бойко","бойку","бойне","бойни","бойню","бойня","бойсь","бойся","бойте","бойца","бойце","бойцу","бойцы","бойче","бокаж","бокал","бокам","бокан","боках","бокль","бокля","боков","боком","бокса","боксе","боксу","боксы","болва","более","болез","болей","болел","болен","болею","болея","болид","болит","болот","болта","болте","болту","болты","больн","больш","болью","болюс","болям","болят","болях","бомба","бомбе","бомби","бомбу","бомбы","бомбя","бомжа","бомже","бомжи","бомжу","бонам","бонах","бонбы","бонды","бонза","бонзе","бонзу","бонзы","бонмо","бонна","бонне","бонну","бонны","боной","боною","бонте","бонус","бопре","борам","борат","борах","бордо","борее","бореи","борей","борет","борец","борею","борея","борзо","борид","борис","борме","бормо","боров","бород","борой","борок","бором","борон","борта","борте","борту","борты","борть","борца","борце","борцу","борцы","борща","борще","борщи","борщу","борьб","босая","боски","босое","босой","босом","босою","босса","боссе","боссу","боссы","босую","босые","босым","босых","босяк","ботал","ботам","ботах","ботаю","ботая","ботва","ботве","ботву","ботвы","ботик","ботов","боток","ботом","бочаг","бочар","бочек","бочит","бочка","бочке","бочки","бочко","бочку","бочок","бочут","бошам","бошах","бошей","боюсь","бояли","боялс","боями","бояре","бояры","боясь","боять","брава","брави","браво","бравы","брага","браге","браги","брагу","брада","браду","брака","браке","браки","брако","браку","брала","брали","брало","брама","брамы","брани","брань","браню","браня","браса","брасе","брасл","брасс","брасу","брасы","брата","брате","брати","брато","брату","братц","браты","брать","бреве","бреда","бреде","бреди","бреду","бредя","бреем","бреет","брежу","брейк","брела","брели","брело","брема","бремя","бренд","брест","брета","брете","бреха","брёха","брехе","брёхе","бреху","брёху","бреше","бреши","брешу","брешь","бреют","брибр","брига","бриге","бриги","бригу","бридж","бриза","бризе","бризу","бризы","брика","брики","брику","брила","брили","брило","брита","бритв","брито","бритт","бриты","брить","бричк","брови","бровь","брода","броде","броди","броду","броды","бродь","бродя","брожу","брома","броме","брому","броне","бронз","брони","бронх","бронь","броню","броня","броса","броси","брось","броше","броши","брошу","брошь","бруса","брусе","брусу","брута","брыжи","брызг","брыла","брылы","брысь","брюзг","брюкв","брюки","брюле","брюне","брюта","брюте","брюту","брюха","брюхе","брюхо","брюху","брякн","буало","бубен","бубён","бубли","бубна","бубне","бубни","бубну","бубны","бубню","бубня","бубон","бугае","бугаи","бугай","бугаю","бугая","бугор","бугра","бугре","бугру","бугры","бугря","будег","будем","буден","будет","будеш","будил","будим","будит","будка","будке","будки","будку","будни","будок","будра","будто","будут","будуч","будущ","будьт","будят","буера","буере","буеру","буеры","бужам","бужах","бужей","бузил","бузим","бузит","бузой","бузою","бузун","бузыг","бузят","буйво","буйка","буйке","буйки","буйку","буйна","буйно","буйны","букам","букан","буках","буква","букве","букву","буквы","букет","букле","букли","буклю","букля","буков","букой","буком","букою","букса","буксе","буксу","буксы","булав","булат","булга","булев","булка","булке","булки","булку","булла","булле","буллу","буллы","булок","булоч","бульк","бумаг","бумаж","бумом","бунам","бунах","бунда","бунде","бунду","бунин","буной","буною","бунта","бунте","бунту","бунты","бурав","бурак","бурам","буран","бурат","бурах","бурая","бурда","бурде","бурдо","бурду","бурды","бурей","бурел","бурен","бурею","бурея","бурже","бурил","бурим","бурит","бурка","бурке","бурки","бурку","бурли","бурлю","бурля","бурна","бурно","бурны","буров","бурое","бурой","бурок","буром","бурою","бурре","бурса","бурсе","бурсу","бурсы","бурта","бурте","бурту","бурты","бурум","бурун","бурую","бурча","бурчи","бурчу","бурша","бурые","бурый","бурым","бурых","буряк","бурям","бурят","бурях","бусам","бусах","бусин","бутан","бутен","бутик","бутил","бутим","бутит","бутон","бутса","бутсе","бутсу","бутсы","бутуз","бутят","буфам","буфах","буфер","буфет","бухай","бухал","бухаю","бухая","бухни","бухну","бухта","бухте","бухту","бухты","бучат","бучей","бучею","бучил","бучим","бучит","бушка","бушуй","бушую","бушуя","буями","буяна","буяне","буяну","буяны","буянь","буяню","буяня","бывае","бывай","бывал","быват","бываю","бывая","бывша","бывше","бывши","быдла","быдле","быдло","быдлу","быдто","быкам","быках","быков","быком","былая","былей","былем","былин","былое","былой","былом","былою","былую","былые","былым","былых","былье","быльё","былью","былья","былям","бымши","быстр","бысть","бытие","бытии","бытию","бытия","бытов","бытом","бытую","бытуя","бытье","бытьё","бытью","бытья","бычий","бычка","бычке","бычки","бычку","бычок","бычье","бычьи","бычью","бычья","бьете","бьёте","бьефа","бьефе","бьефу","бьефы","бьешь","бьёшь","бьиги","бьюик","бьюсь","бьютс","бэлою","бэрам","бэрах","бэров","бэром","бювар","бювет","бюкса","бюксе","бюксу","бюксы","бюрта","бюста","бюсте","бюсту","бюсты","бязью","бякам","бяках","бякой","бякою","бяшка","ваала","ваалу","вааль","вабик","вагам","вагах","вагой","вагон","вагою","важен","важна","важно","важны","вазам","вазах","вазой","вазон","вазою","вайся","вакан","вакса","ваксе","ваксу","ваксы","вакся","вакха","вакшу","валам","валах","валек","валёк","валер","валет","валец","валик","валил","валим","валин","валит","валищ","валка","валке","валки","валко","валку","валов","валок","валом","валуе","валуи","валуй","валун","валух","валую","валуя","вальс","валют","валяй","валял","валян","валят","валяю","валяя","ваней","ванек","ванин","ванна","ванне","ванну","ванны","ванта","ванте","ванту","ванты","ваньк","вапор","варан","варва","варей","варен","варил","варим","варит","варка","варке","варки","варко","варку","варом","варух","варьк","варяг","варят","васей","васил","васин","васюк","ватаг","ватер","ватин","ватка","ватке","ватки","ватку","ватой","ваток","ватою","ватта","ватте","ватту","ватты","вафле","вафли","вафлю","вафля","вахня","вахта","вахте","вахту","вахты","вашег","вашей","вашем","вашею","вашим","ваших","ваяем","ваяет","ваяла","ваяли","ваяло","ваять","ваяют","вбеги","вбегу","вберу","вбива","вбила","вбили","вбило","вбита","вбито","вбиты","вбить","вброд","ввали","ввалю","введи","введу","введя","ввези","ввезу","ввезя","ввела","ввели","ввело","вверг","вверх","вверь","вверю","ввест","ввиду","ввить","ввода","вводе","вводи","вводу","вводы","вводя","ввожу","ввоза","ввозе","ввози","ввозу","ввозя","вволю","ввысь","вгиба","вгибе","вгибу","вгибы","вгоню","вдави","вдали","вдаль","вдарь","вдарю","вдвое","вдела","вдели","вдело","вдену","вдень","вдета","вдето","вдеты","вдеть","вдоба","вдова","вдове","вдову","вдовы","вдоль","вдоха","вдохе","вдохи","вдохн","вдоху","вдруг","вдуем","вдует","вдула","вдули","вдуло","вдуну","вдуть","вдуют","вебер","ведай","ведал","ведам","ведах","ведаю","ведая","ведем","ведём","веден","ведён","ведер","вёдер","ведет","ведёт","ведой","ведою","ведра","вёдра","ведре","ведро","вёдро","ведру","ведун","ведут","ведущ","ведьм","веера","веере","вееру","вееры","вежам","вежах","вежда","вежде","вежду","вежды","вежей","вежею","вежли","везде","везем","везём","везен","везён","везет","везёт","везир","везла","везли","везло","везся","вёзся","везти","везть","везут","везуч","вейка","вейсе","вейся","вейте","векам","веках","веков","веком","вексе","векую","векуя","векша","векше","векши","векшу","велев","велел","велии","велик","велим","велит","велич","велся","вёлся","вельч","велюр","велят","венам","венах","венгр","венда","венде","венду","венды","венед","венер","венет","венец","веник","венка","венке","венки","венку","веной","венок","веноч","веною","вента","венца","венце","венцу","венцы","вепре","вепри","вепрь","вепрю","вепря","верам","верба","вербе","верби","вербу","вербы","вервь","верев","веред","верее","верен","верес","верея","верже","вериг","верил","верим","верит","верки","верна","верне","верни","верно","верну","верны","верой","верол","верою","вероя","верст","вёрст","верте","верти","верть","вертя","веруй","верую","веруя","верфи","верфь","верха","верхе","верхи","верхо","верху","верчу","верша","верши","вершу","верят","весам","весах","весей","весел","вёсел","весен","вёсен","весил","весим","весит","веска","вески","веско","веску","весла","вёсла","весле","весло","веслу","весна","весне","весну","весны","вёсны","весов","весок","весом","вести","весты","весть","весьм","весью","весям","весят","весях","ветве","ветви","ветвь","ветел","вётел","ветер","ветка","ветке","ветки","ветку","ветла","ветле","ветлу","ветлы","вётлы","веток","ветра","ветре","ветро","ветру","ветры","ветха","ветхи","ветхо","ветше","вехам","вехах","вехой","вехою","вечен","вечер","вечна","вечно","вечны","вечор","вешай","вешал","вешаю","вешая","вешек","вешка","вешке","вешки","вешку","вещай","вещал","вещам","вещах","вещаю","вещая","вещее","вещей","вещем","вещею","вещие","вещий","вещим","вещих","вещиц","вещун","вещую","вещью","веяла","веяли","веяло","веять","вжала","вжали","вжало","вжата","вжато","вжаты","вжать","вживе","вживи","взаем","взаём","взаим","взбей","взбес","взбив","взбил","взбит","взбух","взвар","взвел","взвёл","взвеш","взвив","взвиз","взвил","взвод","взвоз","взвой","взвол","взвою","взвыв","взвыл","взгля","вздев","вздел","вздер","вздор","вздох","вздра","вздро","вздув","вздуй","вздул","вздум","вздую","вздых","взлез","взлет","взлёт","взлом","взмах","взмет","взмёт","взмой","взмок","взмою","взмыв","взмыл","взнес","взнёс","взнос","взогр","взора","взоре","взору","взоры","взоше","взошл","взрез","взрос","взрыв","взыск","взыщи","взыщу","взявш","взяла","взяли","взяло","взята","взято","взяты","взять","виват","вивер","вивёр","вивьр","видав","видал","видам","видан","видат","видах","видаю","видел","виден","видео","видет","видех","видик","видим","видит","видиш","видло","видна","видно","видны","видов","видок","видом","видоп","видыв","видят","вижду","визам","визах","визга","визге","визги","визгл","визгу","визжа","визжи","визжу","визир","визит","визой","визою","вийди","викой","викою","вилам","вилах","вилка","вилке","вилки","вилку","вилла","вилле","виллу","виллы","вилой","вилок","вился","вилье","вильм","виляй","вилял","виляю","виляя","винам","винах","винил","виним","винит","винно","винов","виной","вином","виною","винта","винте","винти","винту","винты","винтя","винца","винце","винцо","винцу","винчи","винчу","винье","винят","виола","виоле","виолу","виолы","вираж","вирус","вирши","висел","висим","висит","виска","виске","виски","виску","висла","висле","висли","висло","вислы","висни","висну","висок","виста","висте","висту","висят","витай","витал","витаю","витая","витик","витин","вития","витка","витке","витки","витку","витое","витой","виток","витом","витою","витую","витые","витый","витым","витых","витье","витьё","вихор","вихра","вихре","вихри","вихры","вихрь","вихрю","вихря","вицам","вишен","вишне","вишни","вишню","вишня","вкати","вкачу","вкини","вкину","вклад","вклей","вклеп","вклею","включ","вколи","вколю","вкопы","вкось","вкруг","вкупе","вкуса","вкусе","вкуси","вкусо","вкусу","вкусы","вкушу","влага","влаге","влаги","влагу","владе","влады","влажу","влазь","влазя","власа","власт","власы","влача","влачи","влачу","влево","влезу","влезь","влеки","влеку","влепи","влета","влёта","влете","влёте","влети","влету","влёту","влечу","влечь","влива","влила","влили","влило","влита","влито","влиты","влить","влияй","влиял","влиян","влияю","влияя","вложи","вложу","влюбе","влюби","влюбл","вмажу","вмажь","вмале","вмени","вменю","вмерз","вмёрз","вмест","вмеша","вмещу","вмяла","вмяли","вмяло","вмята","вмято","вмяты","вмять","внаем","внаём","внеза","внеси","внесу","внеся","внешн","вниду","внизу","вникн","внима","внове","внову","вновь","вноса","вносе","вноси","вносу","внося","вношу","внука","внуке","внуки","внуку","внутр","внуша","внуши","внушу","вняла","вняли","вняло","внять","вобла","вобле","воблу","воблы","вобью","вовек","вовне","вовсе","вовсю","вогна","вогни","вогну","вогул","водам","водах","водил","водим","водит","водка","водке","водки","водку","водно","водой","водок","водол","водою","водят","военн","воете","воешь","вожак","вожде","вожди","вождь","вождю","вождя","вожжа","вожже","вожжи","вожжу","вожму","возам","возах","возбу","возве","возвр","возвы","возгл","воздв","возду","возже","воззр","возик","возил","возим","возит","возка","возке","возки","возку","возла","возле","возмо","возму","возна","возне","возни","возно","возню","возня","возов","возок","возом","возра","возьм","возяс","возят","воина","воине","воину","воины","воите","войди","войду","войдя","война","войне","войну","войны","войск","войте","войти","войяж","вокал","вокру","волам","волан","волах","волга","волге","волги","волго","волгу","волей","волен","волею","волка","волке","волки","волко","волку","волна","волне","волно","волну","волны","волов","волок","волом","волос","волох","волхв","волше","вольн","вольт","вольф","волью","волюм","вомни","вомну","вонам","вонах","вонжу","вонзи","воной","воною","вонью","вонюч","воняй","вонял","воняю","воняя","вообр","вообщ","вооду","вопил","вопим","вопит","вопию","вопия","вопки","вопле","вопли","вопль","воплю","вопля","вопро","вопру","вопят","ворам","ворах","ворва","воров","ворог","вором","ворон","ворот","ворох","вороч","ворса","ворсе","ворсу","ворся","воруй","ворую","воруя","ворча","ворчи","ворчу","воршу","ворье","ворьё","ворью","ворья","ворюг","восем","воска","воске","воскл","воско","воскр","воску","воспи","воспо","восст","восто","восхи","восьм","вотку","вотру","вотум","вотще","вотяк","вохлы","вохра","вохры","вошед","вошек","вошел","вошёл","вошка","вошке","вошки","вошку","вошла","вошли","вошло","вошью","вощат","вощил","вощим","вощит","воюем","воюет","воюют","вояжа","вояже","вояжи","вояжу","вояка","вояке","вояки","вояку","впада","впаду","впала","впали","впало","впаяв","впаяй","впаял","впаян","впаяю","вперв","впере","впери","вперт","впёрт","вперь","вперю","впеча","впечь","впилс","впить","впиши","впишу","вплел","вплёл","вплот","вплыв","вплыл","вполз","вполн","впору","впосл","вправ","впред","впрок","впроч","впряг","впрял","впряч","впуск","впущу","врага","враге","враги","враго","врагу","вражд","враже","враки","врала","врале","врали","врало","враль","вралю","враля","враны","врата","врать","врача","враче","врачи","врачу","вреда","вреде","вреди","вредн","вреду","вредя","врежу","врежь","време","время","врете","врёте","врешь","врёшь","вриси","врите","вроде","вроем","вроет","врозь","вроют","вруби","врубл","вруна","вруне","вруну","вруны","вручи","вручу","вруша","вруше","вруши","врушу","врыла","врыли","врыло","врыта","врыто","врыты","врыть","всади","всажу","всево","всегд","всего","всели","вселю","вселя","всеми","всему","всемя","всеоб","всепо","всече","вскак","вскин","вскип","вскок","вскор","вскоц","вскоч","вскри","вслас","вслед","вслух","всоси","всосу","вспле","всплы","вспом","вспух","вспых","встав","встал","встан","встаю","встре","вступ","встык","всуну","всунь","всучи","всучу","всхли","всход","всыпь","всюду","всяка","всяки","всяко","всяку","втайн","втащи","втащу","втерт","втёрт","втечь","втора","вторг","втори","второ","втору","вторы","вторю","вторя","вточь","втрое","втуза","втузе","втузу","втузы","втуне","втяни","втяну","вуали","вуаль","вувер","вузам","вузах","вузов","вузом","вуича","вукол","вурме","входа","входе","входи","входн","входу","входы","входя","вхожа","вхоже","вхожи","вхожу","вцепи","вчера","вчетв","вчина","вчини","вчиню","вчуже","вшами","вшива","вшиво","вшивы","вшила","вшили","вшило","вширь","вшита","вшито","вшиты","вшить","въеду","въезд","въеха","въяве","въявь","выбег","выбеж","выбей","выбив","выбил","выбит","выбор","выбра","выбро","выбыв","выбыл","выбью","вывал","вывед","вывез","вывел","вывес","вывих","вывод","вывоз","выгар","выгиб","выгля","выгни","выгну","выгов","выгод","выгон","выгул","выдав","выдае","выдай","выдал","выдам","выдан","выдаю","выдел","выдер","выдет","выдох","выдою","выдра","выдре","выдру","выдры","выдув","выдуй","выдул","выдум","выдут","выдую","выеду","выезд","выела","выели","выело","выемк","выест","выеха","выешь","выжав","выжал","выжат","выжги","выжгу","выжди","выжду","выжег","выжив","выжиг","выжил","выжим","выжит","выжми","выжму","выжри","выжру","вызва","выздо","вызов","вызол","вызыв","выигр","выищу","выйде","выйди","выйду","выйдя","выйти","выказ","выкай","выкал","выкат","выкаю","выкая","выкос","выкри","выкуй","выкуп","выкус","выкую","вылаз","вылез","вылей","вылет","вылеч","вылив","вылил","вылит","вылов","вылом","вылью","вымел","вымер","вымой","вымок","вымол","вымою","вымыв","вымыл","вымыт","вынем","вынес","вынет","выним","вынос","вынув","вынуд","вынул","вынут","выпав","выпад","выпал","выпас","выпей","выпек","выпер","выпив","выпил","выпис","выпит","выплы","выпор","выпот","выпра","выпри","выпру","выпря","выпуч","выпъю","выпью","выпям","выпят","выпях","вырав","выраж","выраз","вырва","вырви","вырву","вырез","вырин","вырой","вырос","вырою","выруб","выруч","вырыв","вырыл","вырыт","высво","высев","высей","высек","высёк","высел","высеч","высею","высиж","выска","высмо","высов","высок","высот","высох","высоч","выста","выстр","высту","высун","высчи","высше","высши","высып","высью","высям","высях","вытас","вытащ","вытек","вытер","вытку","вытол","вытри","вытру","вытье","вытьё","вытью","вытья","вытян","выуди","выужу","выучи","выучу","выход","выхож","вычел","вычер","вычет","вычит","вычла","вычли","вычло","вычти","вычту","вычтя","вышаг","вышед","вышей","вышек","вышел","вышес","вышиб","вышив","вышил","вышин","вышит","вышка","вышке","вышки","вышку","вышла","вышли","вышло","вышлю","вышью","выяви","вьете","вьёте","вьешь","вьёшь","вьюга","вьюге","вьюги","вьюгу","вьюка","вьюке","вьюки","вьюку","вьюна","вьюне","вьюну","вьюны","вьюня","вьюсь","вьючу","вьюще","вьющи","вяжем","вяжет","вяжут","вязал","вязам","вязах","вязка","вязке","вязки","вязко","вязку","вязла","вязли","вязло","вязни","вязну","вязов","вязок","вязом","вязче","вязьм","вязью","вякай","вякал","вякаю","вякая","вякни","вякну","вялая","вялил","вялим","вялит","вялое","вялой","вялом","вялою","вялую","вялые","вялый","вялым","вялых","вялят","вянем","вянет","вянул","вянут","вятич","вятка","вяток","вятск","вящая","вящее","вящей","вящем","вящею","вящие","вящий","вящим","вящих","вящую","гаван","гавот","гаври","гагам","гагар","гагат","гагах","гагой","гагою","гагры","гадай","гадал","гадам","гадах","гадаю","гадая","гадил","гадим","гадин","гадит","гадка","гадки","гадко","гадов","гадок","гадом","гадью","гадюк","гадят","гадяч","гаера","гаере","гаеру","гаеры","газам","газах","газет","газик","газов","газом","газон","газуй","газую","газуя","гайда","гайду","гайка","гайке","гайки","гайку","гайне","гайну","гаком","галди","галдя","галей","галек","галер","галет","галжу","галил","галит","галич","галка","галке","галки","галку","галла","галле","галлу","галлы","галок","галоп","галош","галса","галсе","галсу","галун","гамак","гаман","гамаш","гамба","гамбе","гамбр","гамбу","гамбы","гамет","гамле","гамма","гамме","гамму","гаммы","гамом","ганау","ганаш","ганей","ганец","ганза","ганзе","ганзу","ганзы","ганна","ганне","ганну","ганны","ганса","гапка","гапке","гапки","гараж","гарда","гарем","гариб","гария","гармо","гарни","гарри","гарун","гарус","гарью","гасил","гасим","гасит","гасла","гасли","гасло","гасну","гасят","гатей","гатью","гатям","гатях","гаусс","гаучо","гачек","гашей","гашиш","гвалт","гвида","гвозд","гдето","гевея","гедим","гезну","гейне","гейша","гейше","гейши","гейшу","гелей","гелем","гелии","гелий","гелию","гелия","гельд","гелям","гелях","гемма","гемме","гемму","геммы","гемом","генам","генах","генез","генер","гензи","гении","гений","гению","гения","генов","геном","генри","генту","генуе","генуи","геогр","геоид","геол.","геом.","герба","гербе","гербу","гербы","герва","герма","герое","герои","герой","герою","героя","герца","герце","герцу","герцы","гетер","гетит","гётит","гетра","гетре","гетру","гетры","гетто","гетьм","геями","гжати","гжели","гжель","гибел","гибка","гибки","гибко","гибла","гибли","гибло","гибне","гибни","гибну","гибок","гибче","гидам","гидах","гидов","гидом","гидра","гидре","гидру","гидры","гиена","гиене","гиену","гиены","гикай","гикал","гикам","гиках","гикаю","гикая","гикну","гиков","гиком","гилее","гилеи","гилею","гилея","гильз","гиляк","гимна","гимне","гимну","гимны","гинее","гинеи","гиней","гинем","гинет","гинею","гинея","гинув","гинул","гинут","гинце","гипса","гипсе","гипсу","гипюр","гирей","гирек","гирею","гирло","гирям","гирях","гисар","гитар","гитов","гитом","гифам","гифах","гичек","гичка","гичке","гички","гичку","глава","главе","главк","главн","главу","главы","глада","глади","гладк","гладь","гладя","глаже","глажу","глаза","глазе","глазк","глазо","глазу","гланд","гласа","гласе","гласу","гласы","глася","глаша","глеем","глень","глета","глёта","глете","глёте","глету","глёту","глией","глиею","глина","глине","глину","глины","глиня","глипт","глист","глифа","глифе","глифу","глифы","гложу","глотк","глото","глубж","глуби","глубо","глубь","глупа","глупе","глупи","глупо","глупу","глупы","глупя","глуха","глухи","глухо","глуша","глуше","глуши","глушу","глушь","глыба","глыбе","глыбу","глыбы","глюка","глюке","глюки","глюку","глюон","гляде","гляди","глядь","глядя","гляже","гляжу","гляну","глянь","глясе","гмина","гнала","гнали","гнало","гнать","гнева","гневе","гневи","гнево","гневу","гневя","гнезд","гнёзд","гнейс","гнело","гнета","гнёта","гнете","гнёте","гнету","гнёту","гнешь","гнёшь","гнида","гниде","гниду","гниды","гнием","гниём","гниет","гниёт","гнила","гнили","гнило","гнилы","гниль","гнись","гните","гнить","гниют","гноем","гноил","гноим","гноит","гнома","гноме","гному","гномы","гноят","гнула","гнули","гнуло","гнуса","гнусе","гнусу","гнусь","гнута","гнуто","гнуты","гнуть","гобое","гобои","гобой","гобою","гобоя","говел","говет","говею","говея","говна","говне","говно","говну","говор","гогол","гогот","годам","годах","годен","годик","годит","годка","годке","годки","годку","годна","годно","годны","годов","годок","годом","гожий","гокко","голам","голах","голая","голец","голик","голов","голод","голое","голой","голом","голос","голою","голуб","голую","голые","голый","голым","голых","голыш","гольд","голье","гольё","гольф","голью","голья","голяд","голяк","гомер","гомец","гомон","гонад","гонга","гонге","гонги","гонгу","гонды","гонец","гоним","гонит","гонка","гонке","гонки","гонко","гонку","гонок","гоном","гонор","гонта","гонту","гонца","гонце","гонцу","гонцы","гоняй","гонял","гонят","гоняю","гоняя","гопак","гопля","гоппе","гораз","горал","горам","горах","горба","горбе","горби","горбу","горбы","горбя","горда","гордо","горды","горек","горел","горем","горец","горим","горит","горка","горке","горки","горку","горла","горле","горло","горлу","горна","горне","горно","горну","горны","город","горой","горок","горох","горою","горст","горца","горце","горцу","горцы","горча","горче","горше","горшк","горьк","горюй","горюн","горюч","горюю","горюя","горят","горяч","госпи","госпо","госте","гости","гость","гостю","гостя","госуд","готам","готах","готов","готув","гофра","гофре","гофру","гофры","гоффа","граба","грабе","граби","грабу","грабы","грабь","грабя","граве","града","граде","граду","гражд","грамм","грамо","грана","гранд","гране","грани","грант","грану","граны","грань","граню","граня","грата","графа","графе","графи","графс","графу","графы","граци","грача","граче","грачи","грачу","греба","греби","гребу","гребя","греем","греет","грежу","греза","грёза","грезе","грёзе","грези","грезу","грёзу","грезы","грёзы","грезь","грезя","грека","греке","греки","греко","греку","грела","грели","грело","греме","греми","гремя","грена","греть","греха","грехе","грехи","грехо","греху","греча","грече","гречи","гречн","гречу","греша","греши","грешн","грешу","греют","грзая","гриба","грибе","грибк","грибу","грибы","грива","гриве","гривн","гриву","гривы","григо","гридь","гриле","гриль","грилю","гриля","грима","гриме","гриму","гримы","грипа","грипп","грипы","грифа","грифе","грифу","грифы","гриша","гришк","гроба","гробе","гробу","гробы","гробь","гробя","грога","гроге","грогу","грожу","гроза","грозд","грозе","грози","грозн","грозу","грозы","грозя","грома","громе","громи","громк","грому","громч","громы","громя","гросс","грота","гроте","гроту","гроты","гроша","гроше","гроши","грошу","груба","груби","грубо","грубу","грубы","грубя","груда","груде","груди","грудк","груду","груды","грудь","гружу","груза","грузе","грузи","грузу","грузы","грузя","грума","груме","груму","грумы","груне","грунт","групп","груст","груша","груше","груши","грушу","грущу","грыжа","грыже","грыжи","грыжу","грызи","грызу","грызя","грымз","гряда","гряде","гряду","гряды","грязи","грязн","грязь","гряну","грянь","гуава","гуано","гуаши","гуашь","губам","губан","губах","губер","губил","губим","губит","губка","губке","губки","губку","гублю","губно","губой","губок","губою","губят","гувер","гугня","гудел","гудет","гудим","гудит","гудка","гудке","гудки","гудку","гудок","гудом","гудят","гужам","гужах","гужей","гужик","гужом","гузка","гузке","гузки","гузку","гузно","гукай","гукал","гукаю","гукая","гукни","гукну","гулак","гулей","гулен","гулён","гулею","гулка","гулки","гулко","гулок","гулом","гульд","гуляй","гуляк","гулял","гулям","гулят","гулях","гуляш","гуляю","гуляя","гумен","гумит","гумма","гумме","гумми","гумму","гуммы","гумна","гумне","гумно","гумну","гумны","гумус","гунна","гунне","гунну","гунны","гуппи","гуран","гурго","гурда","гурии","гурий","гурию","гурия","гурта","гурте","гурту","гурты","гусак","гусар","гусей","гусек","гусёк","гусем","гусит","гуска","гуске","гусли","густа","густи","густо","густы","гусям","гусят","гусях","гуцев","гуцул","гущам","гущах","гущей","гущею","гюрги","гюрза","гюрзе","гюрзу","гюрзы","да-да","давав","давай","давал","дават","давая","давеч","давеш","давид","давил","давим","давит","давка","давке","давки","давку","давлю","давно","давок","давши","давят","дадим","дадут","даете","даёте","даешь","даёшь","дайка","дайке","дайки","дайку","дайна","дайра","дайре","дайру","дайры","дайся","дайте","далай","далее","далей","далек","далёк","далия","дался","дальн","дальш","далью","далям","далях","дамам","дамах","дамба","дамбе","дамбу","дамбы","дамка","дамке","дамки","дамку","дамно","дамой","дамок","дамою","дампа","дампе","дампу","дампы","дамск","дамся","даней","дании","данно","данта","данте","данью","даням","данях","дарам","дарах","дарда","дарен","дарии","дарий","дарил","дарим","дарит","дарию","дария","дарма","даров","даром","даруй","дарую","даруя","дарье","дарьи","дарью","дарья","дарят","датам","датах","датой","датою","дафан","дацан","дацит","дачам","дачах","дачей","дачек","дачею","дачка","дачке","дачки","дачку","дачно","дашей","дашка","дашку","даюсь","двадц","дважд","двена","двере","двери","дверц","дверь","дверя","двест","движе","движу","двину","двины","двинь","двоек","двоен","двоим","двоих","двойн","двома","двора","дворе","дворн","двору","дворы","дворя","двоюр","двугр","двумя","двух-","дебае","дебай","дебаю","дебая","дебет","дебил","дебит","дебош","дебри","дебрь","дебют","девай","девал","девам","девах","деваю","девая","девиз","девиц","девич","девка","девке","девки","девку","девой","девок","девон","девоч","девою","девти","девуш","девян","девят","дегте","дёгте","дегти","дёгти","дегтю","дёгтю","дегтя","дёгтя","дедам","дедах","дедка","дедов","дедом","дежка","дёжка","деизм","деист","дейст","декад","декам","декан","деках","декой","декор","декою","делае","делай","делал","делам","делан","делат","делах","делаю","делая","дележ","делёж","делен","делён","делец","делик","делил","делим","делит","делля","делов","делом","делся","дельт","дельц","деляг","делят","демен","демид","демка","демон","демос","денди","денег","денеж","денек","денёк","денем","денет","денеш","денис","дения","денно","денут","денщи","деньг","депар","депеш","дерба","дерби","дерев","дерем","дерём","дерен","дёрен","дерет","дерёт","держа","держи","держу","дерзи","дерзк","дерзя","дерма","дерме","дерму","дермы","дерна","дёрна","дерне","дёрне","дерни","дёрни","дерну","дёрну","дерть","дерут","дерха","дерюг","десен","дёсен","деска","десна","десне","десну","десны","дёсны","дести","десть","десят","детва","детве","детву","детвы","детей","детин","детищ","детка","детке","детки","детку","деток","детск","детст","детьм","детям","детях","дефис","децим","дешев","дешёв","деяте","джаза","джазе","джазу","джема","джеме","джему","джемы","джент","джига","джигу","джина","джине","джинн","джину","джины","джипа","джипе","джипу","джипы","джута","джуте","джуту","дзета","дзете","дзету","дзеты","дзинь","дзота","дзоте","дзоту","дзоты","дзюдо","диале","диана","диане","дианк","дианы","дибич","дивам","диван","дивах","дивен","дивил","дивим","дивит","дивлю","дивна","дивно","дивны","дивой","дивом","дивою","дивча","дивят","дидро","диего","диеза","диезе","диезу","диезы","диена","диене","диену","диены","диета","диете","диету","диеты","дикая","дикие","дикий","диким","диких","дикое","дикой","диком","дикою","дикую","дилер","димер","динам","динар","динас","динах","динго","динод","диной","диною","диода","диоде","диоду","диоды","диола","диоле","диолу","диолы","дирек","диска","диске","диски","диско","диску","диста","дисци","дитей","дитею","дихта","дичал","дичаю","дичая","дичка","дичке","дички","дичку","дичок","дичью","диэту","длани","длань","длила","длили","длило","длиля","длина","длине","длинн","длину","длины","длись","длите","длить","длишь","длясь","дмитр","днепр","днесь","днища","днище","днищу","днюем","днюет","днюют","днями","добей","добив","добил","добит","добор","добра","добре","добри","добро","добру","добры","добыв","добыл","добыт","добью","довед","довез","довёз","довел","довёл","довер","довод","довол","догад","догам","догах","догма","догме","догму","догмы","догов","догом","догон","додал","додан","доеду","доела","доели","доело","доена","доено","доены","доест","доеха","доешь","дожав","дожал","дожам","дожат","дожах","дожда","дожде","дожди","дожду","дождь","дождю","дождя","дожей","дожем","дожив","дожид","дожил","дожми","дожму","дожуй","дожую","дозам","дозах","дозво","дозой","дозор","дозою","доила","доили","доило","доите","доить","доишь","дойде","дойди","дойду","дойдя","дойка","дойке","дойки","дойку","дойму","дойна","дойра","дойти","доказ","докам","доках","докер","докла","доков","доком","докра","докто","докум","долам","долах","долби","долбя","долга","долге","долги","долго","долгу","долее","долез","долей","долек","долею","долже","должн","долив","долил","долин","долит","долл.","долов","долог","долож","долой","долом","долот","долью","долям","долях","домам","домах","домаш","домен","домик","домин","домищ","домка","домна","домне","домну","домны","домов","домой","домок","домом","домою","домра","домре","домру","домры","домчи","домчу","домыв","домыл","домыт","донам","донах","донга","донге","донги","донгу","донес","донёс","донец","донка","донке","донки","донку","донна","донне","донну","донны","донов","донок","доном","донор","донос","донца","донце","донцу","донцы","донын","донье","доньи","донью","донья","донял","донят","допев","допей","допек","допёк","допел","допер","допёр","допив","допил","допит","допод","допой","допою","допри","допру","допус","допыт","допью","дорог","дорож","дорой","дорос","дорош","дорою","дорыв","дорыл","досад","досел","доска","доске","доски","доску","досок","досол","досох","доста","дости","досто","досту","досуг","досье","дотам","дотах","дотек","дотёк","дотер","дотёр","дотла","дотов","дотом","дотри","дотро","дотру","доучи","доучу","дофин","дохам","дохах","дохла","дохли","дохло","дохни","дохну","доход","дохой","дохою","дохту","дочек","дочел","дочер","дочка","дочке","дочки","дочку","дочла","дошед","дошей","дошел","дошёл","дошил","дошла","дошли","дошло","дошлю","дошью","дощан","дощат","дояра","дояре","дояру","дояры","драга","драге","драги","драгу","драже","драил","драим","драит","драйв","драка","драке","драки","драку","драла","драли","драло","дралс","драма","драме","драму","драмы","драни","дрань","драпа","драпе","драпу","драпы","драть","драхм","драят","древа","древе","древн","древо","древу","дрейф","дрели","дрель","дрема","дрёма","дреме","дрёме","дрему","дрёму","дремы","дрёмы","дрена","дриад","дрибу","дроби","дробь","дробя","дрова","дрога","дроге","дроги","дрогн","дрогу","дрожа","дрожи","дрожк","дрожу","дрожь","дрозд","дрока","дроке","дроку","дрона","дроня","дросс","дроту","дрофа","дрофе","дрофу","дрофы","дрочи","дрочу","друга","друге","други","друго","другу","дружа","дружб","друже","дружи","дружу","друза","друзе","друзу","друзы","друзь","друид","друцу","друцы","дрына","дрыне","дрыну","дрыны","дрюча","дрючу","дрязг","дряни","дрянь","дряхл","дубам","дубах","дубил","дубим","дубин","дубит","дубка","дубке","дубки","дубку","дубле","дубли","дубль","дублю","дубля","дубне","дубно","дубов","дубок","дубом","дубье","дубьё","дубью","дубья","дубят","дуван","дугам","дугах","дугой","дугою","дудак","дудел","дудит","дудка","дудке","дудки","дудку","дудой","дудок","дудою","дудят","дуете","дуешь","дужек","дужка","дужке","дужки","дужку","дуйся","дуйте","дукат","дулам","дулах","дулеб","дулей","дулею","дулом","дулся","дулям","дулях","думае","думай","думал","думам","думат","думах","думаю","думая","думец","думка","думке","думки","думку","думой","думок","думою","думца","думце","думцу","думцы","дуней","дунем","дунет","дунеч","дунит","дунст","дунув","дунул","дунут","дуоли","дуоль","дупел","дупла","дупле","дупли","дупло","дуплу","дурак","дурам","дурах","дурей","дурел","дурен","дурён","дурех","дурёх","дурею","дурея","дурий","дурил","дурим","дурит","дурна","дурне","дурни","дурно","дурны","дурню","дурня","дурой","дурою","дурра","дурро","дурье","дурьи","дурью","дурья","дурят","дуста","дусте","дусту","дутар","дутая","дутик","дутое","дутой","дутом","дутою","дутую","дутые","дутый","дутым","дутых","дутыш","дутье","дутьё","дутью","дутья","духам","духан","духах","духов","духом","душам","душат","душах","душев","душей","душем","душен","душею","душил","душим","душит","душка","душке","душки","душко","душку","душна","душно","душны","душой","душок","душою","дуэле","дуэли","дуэль","дуэта","дуэте","дуэту","дуэты","дуюсь","дуясь","дщери","дщерь","дыбой","дыбом","дыбою","дылда","дылде","дылду","дылды","дымам","дымах","дымил","дымим","дымит","дымка","дымке","дымки","дымку","дымлю","дымно","дымов","дымок","дымом","дымят","дыней","дынек","дынею","дыням","дынях","дырам","дырах","дырищ","дырка","дырке","дырки","дырку","дырой","дырок","дырою","дыхан","дыхни","дыхну","дышал","дышат","дышащ","дышим","дышит","дышла","дышле","дышло","дышлу","дьюар","дьяво","дьяка","дьяке","дьяки","дьяку","дюбар","дюжая","дюжее","дюжей","дюжем","дюжею","дюжие","дюжий","дюжим","дюжин","дюжих","дюжую","дюзам","дюзах","дюзой","дюзою","дюйма","дюйме","дюйму","дюймы","дюкер","дюнам","дюнах","дюной","дюною","дюран","дюссо","дюшес","дядей","дядек","дядею","дядин","дядям","дядях","дятел","дятла","дятле","дятлу","дятлы","евген","евина","евнух","еврее","евреи","еврей","еврею","еврея","европ","евсее","евсей","евсею","евсея","евфия","евшая","евшее","евшей","евшем","евшею","евшие","евший","евшим","евших","евшую","егере","егери","егерс","егерь","егерю","егеря","египе","егожу","егоза","егозе","егози","егозу","егозы","егозя","егора","егоро","егору","едала","едали","едало","едать","едете","едешь","едина","едине","едино","единс","едину","едины","едите","едкая","едкие","едкий","едким","едких","едкое","едкой","едком","едкою","едкую","едока","едоке","едоки","едоку","едучи","ежами","ежась","ёжась","ежата","ежедн","ежели","ежеми","ежика","ёжика","ежике","ёжике","ежики","ёжики","ежику","ёжику","ежила","ёжила","ежили","ёжили","ежило","ёжило","ежите","ёжите","ежить","ёжить","ежиха","ежихе","ежихи","ежиху","ежишь","ёжишь","ежусь","ёжусь","ежься","ёжься","ежьте","ёжьте","ездил","ездим","ездит","ездка","ездке","ездки","ездку","ездой","ездок","ездою","ездры","ездят","езжай","езжал","езопа","езопу","ей-ей","ейная","ейчан","екаем","ёкаем","екает","ёкает","екала","ёкала","екали","ёкали","екало","ёкало","екате","екать","ёкать","екают","ёкают","еккле","екнем","ёкнем","екнет","ёкнет","екнув","ёкнув","екнул","ёкнул","екнут","ёкнут","елеем","елена","елене","елену","елены","елико","елись","елицы","елкам","ёлкам","елках","ёлках","елкой","ёлкой","елкою","ёлкою","еложу","елозь","елозя","елями","емеле","емель","емелю","емеля","емкая","ёмкая","емкие","ёмкие","емкий","ёмкий","емким","ёмким","емких","ёмких","емкое","ёмкое","емкой","ёмкой","емком","ёмком","емкою","ёмкою","емкую","ёмкую","емшан","ендит","енигм","енола","еноле","енолу","енолы","енота","еноте","еноту","еноты","еноха","епанч","ерала","ерами","ерани","ерань","ервые","ерему","ереси","ересь","ерзай","ёрзай","ерзал","ёрзал","ерзаю","ёрзаю","ерзая","ёрзая","ермак","ерник","ёрник","ероты","ероша","ерошу","ерошь","ершам","ершах","ершей","ершик","ёршик","ершом","есаул","еслиб","еспер","ессей","естем","естес","ефесе","ефима","ефимо","ефиму","ефиоп","ефрат","ефрем","ефтом","ехала","ехали","ехало","ехать","ехида","ехидн","ечную","ешьте","жабам","жабах","жабий","жабка","жабки","жабой","жабою","жабра","жабре","жабру","жабры","жабье","жабьи","жабью","жабья","жаден","жадин","жадна","жадно","жадну","жадны","жадом","жадюг","жажда","жажде","жажди","жажду","жажды","жайте","жакан","жакет","жакоб","жалам","жалах","жалей","жалел","жалет","жалею","жалея","жалил","жалим","жалит","жалка","жалки","жалко","жалоб","жалов","жалок","жалом","жалос","жался","жалуе","жалуй","жалую","жалуя","жалче","жалят","жамка","жанра","жанре","жанру","жанры","жарил","жарим","жарит","жарка","жарке","жарки","жарко","жарку","жарни","жаров","жарой","жарок","жаром","жарою","жарче","жарят","жасно","жатая","жатва","жатве","жатву","жатвы","жатка","жатке","жатки","жатку","жатое","жатой","жаток","жатом","жатою","жатую","жатые","жатый","жатым","жатых","жахни","жахну","жбана","жбане","жбану","жбаны","жвала","жгите","жгута","жгуте","жгуту","жгуты","жгуча","жгуче","жгучи","ждала","ждали","ждало","ждать","ждете","ждёте","ждешь","ждёшь","ждите","жевал","жеват","жевок","жегся","жёгся","жезла","жезле","жезлу","жезлы","желае","желай","желал","желан","желаю","желая","желез","желёз","желна","желоб","жёлоб","желта","желти","желтк","желто","жёлто","желты","жёлты","желть","желуд","желчи","жёлчи","желчу","желчь","жёлчь","женам","жёнам","женат","женах","жёнах","женив","жение","женил","женим","женин","женит","жених","женка","жёнка","женке","жёнке","женки","жёнки","женку","жёнку","женни","женой","женок","жёнок","женою","женск","женщи","женят","жеода","жеоде","жеоду","жеоды","жерди","жердь","жердя","жерех","жерла","жерле","жерло","жерлу","жертв","жеста","жесте","жести","жесто","жесту","жесты","жесть","жестя","жесче","жетон","жжете","жжёте","жжешь","жжёшь","живал","живая","живее","живей","живем","живём","живет","живёт","живец","живил","живим","живит","живлю","живог","живое","живой","живом","живоп","живос","живот","живою","живут","живуч","живую","живца","живце","живцу","живцы","живые","живым","живых","живят","жигам","жиган","жигах","жигой","жигою","жидам","жидах","жидка","жидки","жидко","жидов","жидок","жидом","жидче","жижей","жижею","жизни","жизнь","жилам","жилах","жилая","жилет","жилец","жилиц","жилищ","жилка","жилке","жилки","жилку","жилое","жилой","жилок","жилом","жилою","жилую","жилые","жилым","жилых","жилье","жильё","жильц","жилью","жилья","жинка","жинке","жинки","жинко","жинку","жинок","жирам","жираф","жирах","жирей","жирел","жирен","жирею","жирея","жирка","жирке","жирки","жирко","жирку","жирна","жирно","жирны","жиров","жирок","жиром","жиряк","жисть","житей","жител","житие","житии","житию","жития","житом","житье","житьё","житью","житья","жлоба","жлобе","жлобу","жлобы","жмене","жмени","жмень","жменю","жменя","жмете","жмёте","жмешь","жмёшь","жмите","жмота","жмоте","жмоту","жмоты","жмудь","жмурь","жмурю","жмуря","жмусь","жмыха","жмыхе","жмыхи","жмыху","жнеей","жнеёй","жнеек","жнеею","жнеёю","жнете","жнёте","жнеца","жнеце","жнецу","жнецы","жнешь","жнёшь","жнеям","жнеях","жнива","жниво","жница","жнице","жницу","жницы","жодин","жозеф","жокее","жокеи","жокей","жокею","жокея","жолчь","жомин","жомом","жопам","жопах","жопой","жопою","жоржа","жором","жохом","жрала","жрали","жрало","жрать","жрете","жрёте","жреца","жреце","жрецу","жрецы","жрешь","жрёшь","жрите","жрица","жрице","жрицу","жрицы","жуана","жубер","жуете","жуёте","жуешь","жуёшь","жужжа","жужжи","жужжу","жуира","жуире","жуиру","жуиры","жуйте","жукам","жуках","жуков","жуком","жулан","жулик","жулье","жульё","жулью","жулья","жупан","жупел","журил","журим","журит","журна","журча","журчи","журчу","журят","жутка","жутки","жутко","жуток","жутче","жутью","жухла","жухли","жухло","жучат","жучил","жучим","жучит","жучка","жучке","жучки","жучку","жучок","жуясь","жцань","забав","забве","забег","забеж","забей","забер","забес","забив","забил","забит","забла","заблу","забог","забое","забои","забой","забол","забор","забот","забою","забоя","забуд","забыв","забыл","забыт","забью","завал","завам","завах","завед","завез","завёз","завей","завел","завёл","завес","завет","завещ","завив","завид","завиз","завил","завис","завит","завов","завод","завоз","завой","завом","завоп","завою","завтр","завуч","завыв","завыл","завью","завяз","завял","загад","загал","загар","загиб","загни","загну","загов","загон","загор","загре","загса","загсе","загсу","загсы","загул","задав","задай","задал","задам","задан","задах","задач","задаю","задев","задел","задер","задет","задик","задир","задка","задке","задки","задку","задов","задок","задол","задом","задор","задро","задув","задуй","задул","задум","задут","задую","задых","заеду","заезд","заезж","заела","заели","заело","заест","заешь","зажав","зажал","зажат","зажги","зажгл","зажгу","зажег","зажёг","зажеч","зажив","зажил","зажим","зажин","зажми","зажму","зажор","зажую","зазор","зазря","зазыв","заигр","заика","заике","заики","заику","заинт","зайде","зайди","зайду","зайдя","зайка","зайке","зайки","зайку","займа","займе","займи","займу","займы","зайти","зайца","зайце","зайцу","зайцы","заказ","закал","закат","закип","закис","закла","заклю","закол","закон","закос","закра","закри","закру","закры","закуд","закуй","закуп","закур","закут","закую","залай","залам","залах","залаю","залег","залёг","залез","залей","залет","залёт","залец","залив","зализ","залил","залип","залит","залов","залог","залой","залом","залпа","залпе","залпу","залпы","залью","заляг","замай","замам","заман","замах","замед","замел","замёл","замен","замер","замес","замет","замёт","замеч","замеш","замир","замка","замке","замки","замку","замну","замов","замок","замол","замом","замор","замоч","замою","замри","замру","замуж","замша","замше","замши","замшу","замыв","замыл","замыш","замяв","замял","замят","занав","занды","занес","занёс","заним","заноз","заной","занос","заноч","заною","зануд","заныв","заныл","заняв","занял","занят","заодн","заори","заору","заост","запав","запад","запал","запам","запас","запах","запач","запев","запей","запек","запёк","запел","запер","запив","запил","запир","запис","запит","запла","запле","запое","запои","запой","запор","запою","запоя","запра","запре","запри","запро","запру","запут","запью","зараз","заран","зарев","зарез","зарей","зарёй","зарею","зарёю","заржу","зарин","зарит","зарод","зарож","зарой","зарок","зарос","зарою","заруб","зарыв","зарыд","зарыл","зарыт","заряд","заряж","засад","засал","засве","засев","засед","засей","засек","засёк","засел","засею","засим","заслу","засме","засни","засну","засов","засол","засор","засос","засох","заста","засто","застр","засту","застя","засун","засух","засып","затаи","затаю","затво","затее","затеи","затей","затек","затёк","затем","затер","затёр","затес","затёс","затею","затея","затих","затку","затми","заток","затон","затор","затра","затри","затру","затря","затух","затыл","затяг","заужу","зауми","заумь","заучи","заучу","захар","захва","захле","захло","захны","заход","захож","захот","захоч","зацве","зацеп","зачав","зачал","зачат","зачах","зачел","зачёл","зачем","зачес","зачёс","зачет","зачёт","зачин","зачла","зачли","зачло","зачну","зачом","зачти","зачту","зачтя","зашаг","зашед","зашей","зашел","зашёл","зашиб","зашив","зашил","зашит","зашла","зашли","зашло","зашлю","зашью","защип","защит","заюлю","заяви","звала","звали","звало","зваль","звана","звани","звано","званы","звать","звезд","звёзд","звена","звене","звени","звено","звену","звеню","звеня","звере","звери","зверк","зверь","зверю","зверя","зволь","звона","звоне","звони","звонк","звону","звоны","звоню","звоня","звука","звуке","звуки","звуко","звуку","звуча","звучн","здали","здани","здесь","здеся","здешн","здоро","здрав","здужа","здэсь","зебра","зебре","зебру","зебры","зевай","зевак","зевал","зевам","зёвам","зевах","зёвах","зеваю","зевая","зевес","зевка","зевке","зевки","зевку","зевни","зевну","зевов","зёвов","зевок","зевом","зёвом","зевса","зелен","зелие","зелий","зелот","зелье","зельм","зельц","зелью","зелья","земец","земле","земли","землю","земля","земно","земны","земск","зенит","зениц","зенки","зенок","зерен","зёрен","зерка","зерна","зёрна","зерне","зерно","зерну","зернь","зерца","зетом","зефир","ззаду","зигза","зигот","зижде","зилам","зилах","зилов","зилом","зимам","зимах","зимне","зимов","зимой","зимою","зимуй","зимую","зимуя","зиной","зипун","зисты","зияем","зияет","зияла","зияли","зияло","зиять","зияют","злака","злаке","злаки","злаку","злата","злате","злато","злату","злеть","злила","злили","злило","злись","злите","злить","злишь","злоба","злобе","злобн","злобу","злобы","зловр","злого","злоде","злому","злост","злота","злото","злыми","злюка","злюке","злюки","злюку","злюсь","злясь","змеев","змеей","змеёй","змеек","змеем","змеею","змеёю","змеям","змеят","змеях","змием","знавш","знаем","знает","знаеш","знайт","знака","знаке","знаки","знако","знаку","знала","знали","знало","зналь","знаме","знамо","знамя","знате","знати","знато","знать","знача","значе","значи","значу","значь","знашь","знают","знову","зноем","зноен","зобам","зобах","зобов","зобом","зовем","зовём","зовет","зовёт","зовом","зовут","зойка","зойке","зойку","зойти","золей","золем","золка","золой","золот","золою","золям","золях","зоман","зомби","зонам","зонах","зонда","зонде","зонду","зонды","зоной","зоном","зоною","зонта","зонте","зонти","зонту","зонты","зорек","зорка","зорки","зорко","зорок","зорче","зорям","зорях","зосим","зраза","зразе","зразу","зразы","зрачк","зреем","зреет","зрела","зрели","зрело","зрени","зреть","зреют","зрима","зримо","зримы","зрите","зришь","зряча","зряче","зрячи","зуава","зуаве","зуаву","зуавы","зубам","зубах","зубец","зубик","зубил","зубка","зубке","зубки","зубку","зубов","зубок","зубом","зубра","зубре","зубри","зубру","зубры","зубрю","зубря","зубца","зубце","зубцу","зубцы","зубья","зудел","зудим","зудит","зудом","зудят","зуйка","зуйке","зуйки","зуйку","зулус","зумпф","зурка","зурна","зурне","зурну","зурны","зыбей","зыбка","зыбки","зыбко","зыбку","зыбок","зыбом","зыбун","зыбуч","зыбче","зыбью","зыкал","зыкам","зыках","зыкаю","зыкая","зыкну","зыков","зыком","зырян","зычен","зычна","зычно","зычны","зэкам","зэках","зэков","зэком","зюзей","зюзею","зюзям","зюзях","зюйда","зюйде","зюйду","зябка","зябки","зябко","зябла","зябли","зябло","зябни","зябну","зябок","зябью","зяйка","зятев","зятек","зятёк","зятем","зятья","иаков","иберы","ибиса","ибисе","ибису","ибисы","ивами","ивана","иване","ивано","ивану","иваны","иваси","ивась","ивасю","ивася","ивина","ивняк","иволг","иврит","иглам","иглах","иглой","иглою","игнат","играв","играй","играл","играм","игран","играх","играю","играя","игрек","игрец","игрив","игрой","игрок","игрою","игрун","игуан","игуме","идеал","идеей","идеек","идеен","идеею","идете","идёте","идешь","идёшь","идеям","идеях","идиом","идиот","идите","идиша","идише","идишу","идола","идоле","идолу","идолы","идучи","идуще","иезуи","иенам","иенах","иеной","иеною","иерее","иереи","иерей","иерею","иерея","иером","иесея","ижица","ижице","ижицу","ижицы","ижора","ижоре","ижору","ижоры","из-за","изана","избав","избам","избах","избач","избег","избеж","избей","избив","избил","избит","избищ","избой","избою","избра","избуш","извел","извёл","извер","извес","извет","извив","извил","извин","извит","извне","извод","извоз","извол","изгиб","изгна","изгое","изгои","изгой","изгол","изгон","изгою","изгоя","издав","издай","издал","издам","издан","издаю","издел","издер","издох","изжив","изжил","изжит","изжуй","изжую","иззяб","изиде","изиды","излаг","излей","излер","излет","излёт","излив","излил","излит","излиш","излом","измен","измер","измок","измор","измуч","измяв","измял","измят","изнан","износ","изнут","изныл","изоби","изобр","изобь","изойд","израи","изред","изрез","изрек","изрёк","изреч","изрещ","изрыт","изуми","изумр","изуча","изучи","изучу","изшед","изъев","изъел","изъяв","изъял","изъян","изъят","изыди","изыду","изыми","изыму","изыск","изыщу","изюбр","изюма","изюме","изюмо","изюму","иисус","икаем","икает","икала","икали","икало","икара","икать","икают","икему","икнем","икнём","икнет","икнёт","икнув","икнул","икнут","икона","иконе","икону","иконы","икота","икоте","икоту","икоты","икрам","икрах","икрой","икрою","иксам","иксах","иксия","иксов","иксом","иксор","иктус","илеус","илист","иллюз","иллюс","ильей","ильин","ильич","илька","ильма","ильме","ильму","ильмы","илюша","илюше","илюши","илюшу","имаго","имама","имаме","имаму","имамы","имаши","имеем","имеет","имела","имели","имело","имена","имене","имени","именн","иметь","имеют","имеющ","имида","имиде","имидж","имиду","имиды","иначе","инвар","ингуш","индан","индау","инден","индии","индий","индию","индия","индол","индус","индюк","индюх","инеем","инжир","иници","инкам","инках","инков","инког","инкой","инкор","инкою","иногд","иного","инока","иноке","иноки","иноку","иному","инсти","интер","интим","иными","иоанн","иоган","иодат","иоиля","иолит","иомен","ионам","ионах","ионий","ионит","ионно","ионов","ионол","ионом","ионыч","иорик","иосиф","иохим","иппол","иприт","ирана","ирбис","иргой","иргою","ирина","ирины","ириса","ирисе","ирису","ирисы","ирмос","ирный","ирода","ироде","ироду","ироды","иррна","иртыш","исаии","исаия","исайя","искаж","искал","искам","искат","исках","исклю","исков","иском","искра","искре","искри","искро","искру","искры","искря","искуп","искус","искуш","ислам","испей","испек","испёк","испив","испил","испис","испит","испов","испод","испол","испор","испра","испуг","испыт","иссек","иссёк","иссоп","иссох","иссту","иссяк","истая","истек","истёк","истер","истёр","истец","истин","истиц","истов","истод","истое","истой","исток","истол","истом","истор","истою","истую","истца","истце","истцу","истцы","истые","истый","истым","истых","истяз","исусе","исход","исчах","исчез","исьць","итал.","итала","итало","итить","итога","итоге","итоги","итого","итогу","итожа","итожу","итожь","иудам","иудах","иудее","иудеи","иудей","иудею","иудея","иудин","иудой","иудою","ихнее","ихней","ихнем","ихнею","ихние","ихний","ихним","ихних","ихнюю","ихняя","ичиги","ишака","ишаке","ишаки","ишаку","ишачу","ишачь","ишиас","ишиме","ищеек","ищете","ищешь","ищите","ищусь","июлей","июлем","июлям","июлях","июней","июнем","июням","июнях","йенец","йенца","йенце","йенцу","йенцы","йогам","йогах","йогов","йогой","йогом","йогою","йодид","йодле","йодль","йодлю","йодля","йодом","йомен","йорке","йотой","йотою","йсики","кааба","кабак","кабан","кабач","кабил","кабин","каблу","кабул","кавал","кавун","кагал","каган","кагат","кагор","кадет","кадий","кадил","кадим","кадит","кадка","кадке","кадки","кадку","кадок","кадра","кадре","кадру","кадры","кадык","кадят","кажда","каждо","кажду","кажды","кажем","кажет","кажис","кажут","кажын","казак","казал","казан","казах","казац","казач","казен","казна","казне","казни","казну","казны","казнь","казню","казня","казус","каика","каике","каики","каику","каина","каине","каину","каины","каира","каире","кайла","кайле","кайло","кайлу","кайлы","кайма","кайме","кайму","каймы","кайра","кайре","кайру","кайры","кайса","кайсе","кайсу","кайсы","кайся","кайта","кайте","кайту","кайты","кайфа","кайфе","кайфу","какай","какал","какао","какаю","какая","какие","каким","каких","каков","каког","какое","какой","каком","какою","както","какую","калам","калан","калач","калга","калеб","калек","кален","калён","калии","калий","калил","калим","калин","калит","калиф","калию","калия","калла","калле","каллу","каллы","калом","калош","калым","калят","камее","камеи","камей","камен","камер","камеш","камею","камея","камин","камка","камке","камки","камку","камне","камни","камню","камня","камор","камса","камсе","камсу","камча","камыш","канав","канал","канат","канва","канве","канву","канвы","канд.","канда","канев","канем","канет","канна","канон","каноэ","канта","канте","канту","канты","канув","канул","канун","канут","канце","канюк","капай","капал","капам","капах","капаю","капая","капел","капер","капит","капищ","капле","капли","каплю","капля","капни","капну","капов","капок","капом","капор","капот","каппа","каппе","каппу","каппы","капри","капус","капут","карай","карал","карам","карат","карах","караш","караю","карая","карга","карге","карги","карго","каргу","карда","карел","карем","карет","карие","карий","карим","карих","карла","карле","карло","карлу","карль","карма","карме","карму","кармы","карно","карой","карош","карою","карпа","карпе","карпо","карпу","карпы","карры","карса","карст","карта","карте","карти","карту","карты","карча","касае","касал","касаю","каска","каске","каски","каско","каску","касок","касса","кассе","кассу","кассы","каста","касте","кастр","касту","касты","катай","катал","катар","катас","катаю","катая","катей","катер","катет","катею","катил","катим","катит","катка","катке","катки","катку","катод","каток","катол","катом","катор","катыш","катюш","катят","каури","кафта","кацап","качай","качал","качаю","качая","качек","качес","качка","качке","качки","качку","качни","качну","качча","качче","каччи","каччу","кашам","кашах","кашей","кашек","кашел","кашею","кашка","кашке","кашки","кашку","кашле","кашлю","кашля","кашне","кашпо","кашуб","кащей","каюсь","каюта","каюте","каюту","каюты","кающе","каясь","кбайт","квагг","квадр","квакш","квант","кварк","кварт","кварц","кваса","квасе","квасу","квася","квашу","квело","квинт","квиты","квота","квоте","квоту","квоты","кебаб","кебам","кебах","кебла","кебов","кебом","кегле","кегли","кегль","кеглю","кегля","кедам","кедах","кедов","кедом","кедра","кедре","кедру","кедры","кейса","кейсе","кейсу","кейсы","кейфа","кейфе","кейфу","кекса","кексе","кексу","кексы","кекур","келес","келии","келий","келих","келия","келье","кельи","кельн","кельт","келью","келья","кенар","кенаф","кепка","кепке","кепки","кепку","кепок","керак","керна","керне","керну","керны","керчи","керчь","кетен","кетоз","кетой","кетон","кетою","кефир","кечуа","кешью","кеятр","кзади","кибер","кибуц","кивай","кивал","киваю","кивая","кивер","кивка","кивке","кивки","кивку","кивни","кивну","кивок","кивот","кидай","кидал","кидар","кидас","кидаю","кидая","киева","киеве","киеву","кизил","кизяк","килей","килек","килем","килим","килой","килою","килям","килях","кинем","кинет","кинза","кинзе","кинзу","кинзы","киник","кинин","кино-","кинув","кинул","кинут","киоск","киота","кипам","кипах","кипел","кипим","кипит","киплю","кипой","кипою","кипре","кипуч","кипят","кирас","кирза","кирил","кирка","кирке","кирки","кирку","кирок","кирха","кирхе","кирхи","кирху","кисам","кисах","кисее","кисеи","кисет","кисею","кисея","киска","киске","киски","киску","кисла","кисли","кисло","кисни","кисну","кисой","кисок","кисою","киста","кисте","кисти","кисту","кисты","кисть","китай","китам","китах","китая","кител","китов","китом","китят","кифоз","кихот","кичка","кичке","кишат","кишек","кишел","кишит","кишка","кишке","кишки","кишку","кишмя","кишок","киями","клавд","клада","кладб","кладе","клади","кладн","кладу","клады","кладь","кладя","клака","клаке","клаки","клаку","клала","клали","клало","клана","клане","клану","кланы","кланя","клара","кларе","кларк","клару","клары","класс","клева","клёва","клеве","клёве","клеву","клёву","клеек","клеем","клеил","клеим","клеит","клейм","клемм","клена","клёна","клене","клёне","клену","клёну","клены","клёны","клерк","клест","клёст","клети","клеть","клеши","клешн","клеща","клеще","клещи","клещу","клеют","клеят","клизм","клика","клике","клики","кликн","клико","клику","клима","клина","клине","клину","клинч","клипа","клипе","клипс","клипу","клипы","клира","клире","клиру","клита","клича","кличе","кличи","кличу","кличь","клише","клоак","клодт","клока","клоке","клоки","клоку","клона","клоне","клони","клону","клоны","клоню","клоня","клопа","клопе","клопу","клопы","клоун","клуба","клубе","клубу","клубы","клумб","клуня","клупп","клуша","клуше","клуши","клушу","клыка","клыке","клыки","клыку","клюва","клюве","клюву","клювы","клюем","клюём","клюет","клюёт","клюза","клюзе","клюзу","клюзы","клюка","клюке","клюки","клюку","клюну","клюнь","клюфт","ключа","ключе","ключи","ключу","клюют","клякс","кляла","кляли","кляло","кляни","кляну","кляня","кляпа","кляпе","кляпу","кляпы","клятв","кляуз","кляча","кляче","клячи","клячо","клячу","кмоль","кнели","кнель","кнехт","книга","книге","книги","книго","книгу","книжк","книжн","книзу","кница","книша","книшу","кнопа","кнопе","кнопу","кнопы","кнута","кнуте","кнуто","кнуту","кнуты","княги","княжн","князе","князь","князю","князя","коайт","коала","коати","кобел","кобёл","кобза","кобзе","кобзу","кобзы","кобол","кобра","кобре","кобру","кобры","кобур","кобыл","ковал","кован","ковар","ковач","ковер","ковёр","ковка","ковке","ковки","ковко","ковку","ковна","ковну","ковны","ковок","ковра","ковре","ковру","ковры","ковша","ковше","ковши","ковшу","ковыл","когда","когте","когти","когтю","когтя","когут","кодак","кодам","кодах","кодек","кодов","кодой","кодом","кодон","кодою","коего","коему","кожам","кожан","кожах","кожей","кожею","кожиц","кожно","кожух","козак","козам","козах","козац","козач","козел","козёл","козий","козла","козле","козлу","козлы","козни","козой","козон","козою","козье","козьи","козью","козья","коими","койка","койке","койки","койку","койне","койот","кокам","коках","кокер","кокет","кокка","кокке","кокки","кокку","кокни","кокну","коков","кокой","коком","кокон","кокор","кокос","кокош","кокою","кокса","коксе","коксу","колам","колах","колба","колбе","колбу","колбы","колее","колеи","колей","колем","колен","колер","колес","колёс","колет","колец","колею","колея","колик","колит","колич","колка","колке","колки","колко","колку","колле","колли","колоб","колов","колод","колой","колок","колол","колом","колон","колос","колот","колош","колою","колум","колун","колчи","колыб","колье","кольт","кольц","колью","колья","колюр","колют","колюч","коляд","коляс","коман","комар","комет","комех","комик","комис","комка","комке","комки","комку","комма","комме","комми","комму","коммы","комна","комод","комой","комок","комом","комор","комою","компа","компе","компу","компы","комуз","комья","конам","конах","конве","конго","конде","конди","кондр","конев","коней","конек","конёк","конем","конём","конец","конеч","коник","конка","конке","конки","конку","конов","конок","коном","коноп","конпа","консе","конто","контр","конур","конус","конфи","конца","конце","концо","концу","концы","конча","конче","кончи","кончу","конюх","коняг","коням","конях","копай","копал","копам","копах","копач","копаю","копая","копей","копен","копён","копер","копёр","копие","копии","копий","копил","копим","копир","копит","копию","копия","копка","копке","копки","копку","коплю","копна","копне","копни","копну","копны","копов","копом","копра","копре","копру","копры","копти","копты","коптя","копун","копуш","копчу","копыл","копыс","копыт","копье","копьё","копью","копья","копям","копят","копях","кораб","коран","корда","корде","корду","корды","корен","корец","кореш","коржа","корже","коржи","коржу","корзи","корил","корим","корит","корка","корке","корки","корку","корма","корме","корми","корму","кормы","кормя","корне","корни","корню","корня","короб","коров","корой","корок","корон","корот","корою","корпу","корр.","корре","корта","корте","корту","корты","корфа","корцу","корча","корчи","корчм","корчу","корчь","корыс","корыт","корье","корьё","корью","корья","коряв","коряг","коряк","корят","косам","косар","косах","косач","косая","косве","косец","косил","косим","косит","косиц","косищ","космы","косно","косну","косое","косой","косок","косом","косою","косте","кости","кость","костю","костя","косую","косца","косце","косцу","косцы","косые","косым","косых","косяк","косят","котам","котах","котел","котёл","котик","котла","котле","котлу","котлы","котов","котом","котон","котор","котяр","котят","коуша","коуше","коушу","кофеи","кофей","кофею","кофий","кофию","кофра","кофре","кофру","кофры","кофта","кофте","кофту","кофты","кохия","кохом","кочан","кочек","кочет","кочка","кочке","кочки","кочку","кочна","кочни","кочуй","кочую","кочуя","кошам","кошах","кошей","кошек","кошем","кошен","кошер","кошка","кошке","кошки","кошку","кошма","кошме","кошму","кошмы","кошон","кощее","кощей","кощею","кощея","коэфф","краба","крабе","крабу","крабы","крага","краге","краги","крагу","кради","краду","крадя","краев","краёв","краем","кража","краже","кражи","кражу","крайн","крала","крале","крали","крало","кралю","краля","крана","кране","крану","краны","крапа","крапе","крапп","крапу","краса","красе","краси","краск","красн","красо","красу","красы","крась","крася","краул","краха","крахе","крахи","краху","краше","крашу","краюх","краюш","краям","краях","креди","кредо","креза","крезе","крезу","крезы","крема","креме","крему","кремы","крена","крене","крену","креню","креня","креол","крепа","крепе","крепи","крепк","крепо","крепс","крепу","крепч","крепы","крепь","крепя","кресе","кресл","кресс","крест","креще","крещу","крива","криви","криво","кривы","кривя","кригс","криза","кризе","кризу","кризы","крика","крике","крики","крикн","крико","крику","криле","криль","крилю","криля","крина","крине","крину","крипа","крипе","крипу","криса","крисе","крист","крису","крисы","крица","крице","крицу","крицы","крича","кричи","кричу","крова","крове","крови","кровн","крову","кровь","кроем","кроен","кроет","кроил","кроим","кроит","кроки","кроле","кроль","кролю","кроля","кроме","кромы","кромя","крона","кроне","крону","кроны","кропи","кропя","кросс","крота","кроте","кротк","крото","кроту","кроты","кроха","крохе","крохи","кроху","кроша","кроше","кроши","крошу","кроют","кроят","круга","круге","круги","кругл","круго","кругу","кружа","кружи","кружк","кружу","круиз","крупа","крупе","крупн","крупу","крупы","крута","крути","круто","круты","круть","крутя","круча","круче","кручи","кручу","круша","круши","крушу","крыга","крыги","крыгу","крыла","крыле","крыли","крыло","крылу","крыль","крыма","крыму","крыса","крысе","крысу","крысы","крыта","крыто","крыты","крыть","крыша","крыше","крыши","крышу","крюка","крюке","крюки","крюку","крючк","крючо","кряду","кряжа","кряже","кряжи","кряжу","крякв","кряки","кряче","ксеня","ксерь","ксерю","ксива","ксиве","ксиву","ксивы","кстат","ктото","ктура","ктыре","ктырь","ктырю","ктыря","ку-ку","кубам","кубах","кубик","кубка","кубке","кубки","кубку","кубла","кубов","кубок","кубом","кугой","кугою","кудея","кудри","куете","куёте","куешь","куёшь","кузек","кузен","кузин","кузне","кузни","кузню","кузня","кузов","куйте","кукам","кукан","куках","кукиш","кукла","кукле","куклу","куклы","кукой","кукол","кукою","кукуб","кукуй","кукую","кукуя","кулаж","кулак","кулан","кулей","кулек","кулёк","кулем","кулём","кулеш","кулик","кулис","кулич","кулиш","кулон","культ","кулям","кулях","кумач","кумжа","кумин","кумир","кумов","кумой","кумол","кумом","кумою","кумык","кумыс","кунак","куний","куниц","кунту","кунье","куньи","кунью","кунья","купав","купаж","купай","купал","купам","купах","купаю","купая","купен","купец","купив","купил","купим","купит","купка","купле","купли","куплю","купля","купно","купой","купол","купон","купою","купца","купце","купцу","купцы","купчи","купчу","купюр","купят","кураж","курам","курах","курва","курве","курву","курвы","кургу","курда","курде","курду","курды","курен","курий","курил","курим","курит","куриц","курия","курка","курке","курки","курку","курно","курну","курой","курок","курса","курсе","курсу","курсы","куртк","курье","курьи","курью","курья","курян","курят","кусай","кусак","кусал","кусам","кусан","кусах","кусаю","кусая","куска","куске","куски","куску","кусну","кусов","кусок","кусом","куста","кусте","кусту","кусты","кутай","кутал","кутас","кутаю","кутая","кутеж","кутёж","кутил","кутим","кутит","кутну","кутня","куток","кутум","кутъю","кутье","кутьи","кутью","кутья","кутюр","кутят","кухар","кухва","кухне","кухни","кухню","кухня","куцая","куцее","куцей","куцем","куцую","куцые","куцый","куцым","куцых","кучам","кучах","кучей","кучек","кучер","кучею","кучка","кучке","кучки","кучку","кучно","кучум","кушае","кушай","кушак","кушал","кушам","кушан","кушах","кушаю","кушая","кушей","кушем","кушет","кущам","кущах","кущей","кущею","кхмер","кэфии","кювет","кюрии","кюрий","кюрин","кюрию","кюрия","кяриз","лабаз","лабух","лавам","лавах","лаваш","лавин","лавка","лавке","лавки","лавко","лавку","лавой","лавок","лавоч","лавою","лавра","лавре","лавру","лавры","лагам","лагах","лагов","лагом","лагун","ладам","ладан","ладах","ладей","ладен","ладил","ладим","ладит","ладка","ладке","ладку","ладна","ладно","ладны","ладов","ладок","ладом","ладон","ладош","ладье","ладьи","ладью","ладья","ладят","лаете","лаешь","лажде","лажей","лажею","лазай","лазал","лазам","лазар","лазах","лазаю","лазая","лазер","лазею","лазий","лазил","лазим","лазит","лазка","лазов","лазом","лазят","лайба","лайбе","лайбу","лайбы","лайда","лайка","лайке","лайки","лайку","лайся","лайте","лакай","лакал","лакам","лаках","лакаю","лакая","лакее","лакеи","лакей","лакею","лакея","лакир","лаков","лаком","лакун","ламам","ламах","ламой","ламою","лампа","лампе","лампу","лампы","ламут","ландо","ланды","ланей","ланит","ланка","ланна","ланок","ланпы","ланью","ланям","ланях","лапай","лапал","лапам","лапах","лапаю","лапая","лапищ","лапка","лапке","лапки","лапку","лапой","лапок","лапою","лапта","лапте","лапти","лапту","лапты","лаптю","лаптя","лапша","лапше","лапши","лапшу","ларго","ларей","ларек","ларёк","ларем","ларём","ларец","ларца","ларце","ларцу","ларцы","ларям","ларях","ласка","ласке","ласки","ласко","ласку","ласок","ласпи","лассо","ласта","ласте","ласто","ласту","ласты","латай","латал","латам","латан","латах","латаю","латая","латка","латке","латки","латку","латок","латук","латыш","лафет","лафит","лачка","лачке","лачку","лачок","лачуг","лаюсь","лаяка","лаяла","лаяли","лаяло","лаясь","лаять","лбами","лбина","лбище","лбова","лбову","лгала","лгали","лгало","лгать","лгите","лгуна","лгуне","лгуну","лгуны","лебед","лебяд","левак","левам","левах","левая","левее","левей","левит","левка","левко","левку","левов","левое","левой","левом","левою","левую","левша","левше","левши","левшу","левые","левый","левым","левых","легат","легаш","леген","легка","легки","лёгки","легко","легла","легли","легло","легок","лёгок","легро","легче","легши","ледащ","ледве","леден","ледка","ледке","ледку","ледок","ледрю","ледян","леера","леере","лееру","лееры","лежав","лежак","лежал","лежат","лежим","лежит","лежка","лёжка","лежке","лёжке","лежки","лёжки","лежку","лёжку","лежмя","лежне","лежни","лежню","лежня","лезем","лезет","лезла","лезли","лезло","лезть","лезут","лезши","лейба","лейбл","лейбу","лейка","лейке","лейки","лейку","лейте","лекаж","лекан","лекко","лекто","лелее","лелей","лелею","лелея","лембк","лемех","лемиш","лемма","лемме","лемму","леммы","лемур","ленам","ленах","ленив","ленил","ленин","ленка","ленке","ленку","ленно","ленов","ленок","леном","леноч","лента","ленте","ленто","ленту","ленты","ленца","ленча","ленче","ленчи","ленчу","ленью","леона","лепей","лепет","лепех","лепёх","лепил","лепим","лепит","лепка","лепке","лепки","лепку","леплю","лепно","лепра","лепре","лепру","лепры","лепта","лепте","лепту","лепты","лепят","лерка","лерке","лерки","лерку","лерок","лесам","лесах","лесби","лесен","лесин","леска","леске","лески","леско","леску","лесна","лесни","лесов","лесой","лесок","лесом","лесса","лёсса","лессе","лёссе","лессу","лёссу","лести","лестн","лесть","летай","летал","летам","летах","летаю","летая","летел","летет","летим","летит","летка","лётка","летке","лётке","летки","лётки","летку","лётку","летни","летно","лётно","леток","лёток","летом","лётом","летоп","летун","летуч","летье","летят","лечат","лечен","лечил","лечим","лечит","лешак","лешая","лешее","лешей","лешем","лешею","лешие","леший","лешим","леших","лешка","лешую","лещам","лещах","лещей","лещик","лещом","леэть","леями","лжете","лжёте","лжеца","лжеце","лжецу","лжецы","лжешь","лжёшь","лжива","лживо","лживы","лиана","лиане","лиану","лианы","ливан","ливер","ливмя","ливне","ливни","ливню","ливня","ливре","лигам","лигах","лигой","лигою","лидар","лидер","лидии","лидин","лидию","лидия","лижем","лижет","лижут","лизал","лизан","лизин","лизис","лизни","лизну","лизой","лизол","лизою","лизун","ликам","ликах","ликер","ликёр","ликов","ликом","ликуй","ликую","ликуя","лилеи","лилей","лилии","лилий","лилию","лилия","лилов","лился","лиман","лимба","лимбе","лимбу","лимбы","лимит","лимов","лимой","лимон","лимфа","лимфе","лимфу","лимфы","лингв","линей","линек","линёк","линем","линём","линза","линзе","линзу","линзы","линии","линий","линию","линия","линка","линке","линки","линку","линуй","линую","линуя","линце","линча","линяй","линял","линям","линях","линяю","линяя","лионе","липаз","липам","липах","липец","липид","липка","липке","липки","липко","липку","липла","липли","липло","липну","липой","липок","липом","липою","липси","липут","липче","лирам","лирах","лирик","лирой","лиром","лирою","лисам","лисах","лисий","лисил","лисиц","лисов","лисой","лисом","лисою","листа","листе","листо","листу","листы","лисье","лисьи","лисью","лисья","лисят","литав","литам","литах","литая","литве","литву","литвы","литер","литии","литий","литию","лития","литка","литов","литое","литой","литом","литою","литра","литре","литру","литры","литую","литые","литый","литым","литых","литье","литьё","литью","литья","лифом","лифта","лифте","лифту","лифты","лихач","лихая","лихва","лихие","лихим","лихих","лихое","лихой","лихом","лихор","лихою","лихую","лицам","лицах","лицее","лицеи","лицей","лицем","лицею","лицея","лицом","лицую","лицуя","личек","личик","лично","личну","личны","лишае","лишаи","лишай","лишал","лишар","лишат","лишаю","лишая","лишек","лишен","лишён","лишив","лишил","лишим","лишит","лишка","лишку","лишне","лишни","лннию","лобан","лобби","лобик","лобио","лобия","лобка","лобке","лобки","лобку","лобно","лобов","лобок","лобыз","ловец","ловил","ловим","ловит","ловка","ловки","ловко","ловле","ловли","ловлю","ловля","ловок","ловом","ловца","ловце","ловцу","ловцы","ловча","ловче","ловчи","ловчу","ловят","ловящ","логам","логах","логик","логин","логов","логом","логос","лодзи","лодка","лодке","лодки","лодку","лодок","лодыж","ложам","ложах","ложей","ложек","ложем","ложен","ложею","ложис","ложка","ложке","ложки","ложку","ложна","ложно","ложны","ложок","ложью","лозам","лозах","лозен","лозин","лозой","лозою","локва","локон","локте","локти","локтю","локтя","локус","ломай","ломак","ломал","ломам","ломах","ломаю","ломая","ломик","ломил","ломим","ломит","ломка","ломке","ломки","ломко","ломку","ломлю","ломов","ломок","ломом","ломот","ломте","ломти","ломтю","ломтя","ломче","ломят","лондо","лонжа","лоном","лопай","лопал","лопат","лопаю","лопая","лопни","лопну","лопух","лорам","лорах","лорда","лорде","лорду","лорды","лорет","лорис","лорне","лоров","лором","лосей","лосем","лосих","лоска","лоске","лоску","лосям","лосят","лосях","лотам","лотах","лотка","лотке","лотки","лотку","лотов","лоток","лотом","лотос","лохам","лохах","лохмы","лохов","лохом","лоции","лоций","лоцию","лоция","лошад","лошак","лощат","лощен","лощён","лощил","лощим","лощин","лощит","лубка","лубке","лубки","лубку","лубок","лубом","лубье","лугам","лугах","лугов","лугом","лудил","лудим","лудит","лудой","лудою","лудят","лужам","лужах","лужей","лужен","лужён","лужею","лужин","лужиц","лужка","лужке","лужки","лужку","лужок","лузам","лузах","лузга","лузге","лузги","лузгу","лузой","лузою","лузях","луиза","луизе","лукав","лукам","луках","лукич","лукно","луков","луком","лукою","лукум","лунам","лунах","луней","лунем","лунём","лунка","лунке","лунки","лунку","лунно","луной","лунок","луною","луням","лунях","лупам","лупах","лупил","лупим","лупит","лупка","луплю","лупой","лупою","лупят","лурой","луром","лурою","лутка","луцка","лучам","лучан","лучат","лучах","лучей","лучем","лучик","лучил","лучим","лучин","лучит","лучка","лучке","лучку","лучок","лучом","лучше","лучши","лущат","лущен","лущён","лущил","лущим","лущит","лчать","лыжам","лыжах","лыжей","лыжен","лыжею","лыжне","лыжни","лыжню","лыжня","лыком","лысая","лысей","лысел","лысею","лысея","лысин","лысое","лысой","лысом","лысою","лысун","лысух","лысую","лысые","лысый","лысым","лысых","лычек","лычка","лычке","лычки","лычко","лычку","львам","львах","львиц","львов","львом","львят","льгот","льдам","льдах","льдин","льдов","льдом","льете","льёте","льешь","льёшь","льнем","льнём","льнет","льнёт","льном","льнул","льнут","льсти","льстя","льшая","льшим","льших","льшую","льюсь","льяло","любая","любви","любец","любил","любим","любит","любиш","любия","люблю","любов","любое","любой","любом","любоп","любос","любою","любуе","любую","любые","любый","любым","любых","любят","людев","людей","люден","людие","людна","людно","людны","людом","людск","людьм","людям","людях","люкам","люках","люков","люком","люкса","люксе","люксу","люксы","люлек","люмен","люнет","люпин","люпус","люстр","лютая","лютее","лютей","лютен","лютер","лютик","лютич","лютне","лютни","лютню","лютня","лютое","лютой","лютом","лютою","лютуй","лютую","лютуя","лютые","лютый","лютым","лютых","люфта","люфте","люфту","люций","лючка","лючке","лючки","лючку","лючок","люэса","люэсе","люэсу","лягай","лягал","лягаю","лягая","лягни","лягну","лягте","лягут","лягуш","лядам","лядом","ляжек","ляжем","ляжет","ляжка","ляжке","ляжки","ляжку","лязга","лязге","лязгу","лямка","лямке","лямки","лямку","лямок","лямши","ляпай","ляпал","ляпам","ляпах","ляпаю","ляпая","ляпис","ляпни","ляпну","ляпов","ляпом","лярва","лярда","лярде","лярду","ляссе","ляхам","ляхов","ляхом","ляшка","ляюсь","маана","мабиш","мавра","мавре","мавру","мавры","магам","магах","магии","магий","магию","магия","магма","магме","магму","магмы","магов","магом","магот","мадам","мадия","маета","маете","маету","маеты","маешь","мажем","мажет","мажор","мажут","мазал","мазан","мазар","мазей","мазер","мазик","мазил","мазка","мазке","мазки","мазко","мазку","мазло","мазне","мазни","мазну","мазню","мазня","мазок","мазур","мазут","мазью","мазям","мазях","маиор","маиса","маисе","маису","маисы","майка","майке","майки","майку","майна","майор","майся","макай","макак","макал","макам","макао","макар","маках","макаю","макая","макет","макни","макну","маков","маком","макса","макси","малая","малей","малек","малёк","мален","малец","малик","малин","малка","малке","малки","малку","малое","малой","малок","малом","малос","малою","малоя","малую","малые","малый","малым","малых","малыш","малье","мальё","мальц","мальч","малюй","малюю","малюя","маляр","мамам","маман","мамах","мамаш","мамба","мамбе","мамбо","мамбу","мамбы","мамен","мамин","мамка","мамке","мамки","мамку","мамой","мамок","мамон","мамою","манат","манга","манге","манги","манго","мангу","манев","манеж","манер","манжу","мание","мании","маний","манил","маним","манир","манит","маниф","манию","мания","манка","манке","манки","манко","манку","манна","манне","манно","манну","манны","манов","манок","манон","манси","манти","манто","манул","манчи","манят","маори","марай","марал","маран","мараю","марая","марго","маржа","марже","маржи","маржу","марии","марин","марию","мария","марка","марке","марки","марко","маркс","марку","марле","марли","марлю","марля","марме","марой","марок","марою","мароя","марса","марсе","марта","марте","марту","марфа","марфе","марфо","марфу","марфы","марша","марше","марши","маршу","марье","марьи","марью","марья","масаи","масел","маска","маске","маски","маску","масла","масле","масли","масло","маслу","маслю","масля","масок","масон","масса","массе","массу","массы","маста","масте","масти","масть","матам","матах","матве","матем","матер","матка","матке","матки","матку","матов","маток","матом","маточ","матуш","матча","матче","матчи","матчу","мафии","мафий","мафию","мафия","махай","махал","махам","махах","махаю","махая","махин","махни","махну","махов","махом","махра","махре","махру","махры","мацой","мацою","мачех","мачок","мачта","мачте","мачту","мачты","машей","машем","машет","машин","машка","машки","машут","маюсь","маяка","маяке","маяки","маяку","маясь","маятн","маять","маяча","маячу","маячь","мбайт","мглис","мглой","мглою","мгнов","мегер","мегом","медам","медее","медеи","медей","медею","медея","меджи","медик","медка","медке","медку","медле","медли","медлю","медля","медно","медну","медны","медок","медом","мёдом","медуз","медью","медяк","межам","межах","между","межей","межой","межою","мезга","мезге","мезги","мезгу","мезон","мейер","мейоз","мекки","мекку","мелей","мелел","мелем","мелен","мелён","мелет","мелея","мелис","мелка","мелке","мелки","мелко","мелку","мелок","мелом","мелос","мелоч","мельк","мелью","мелют","мелям","мелях","менад","менее","менно","меной","меною","мента","менте","менту","менты","меняй","менял","меняю","меняя","мерам","мерах","мереж","мерёж","мерен","мерещ","мерея","мерзл","мерил","мерим","мерин","мерит","мерич","мерка","мерке","мерки","мерку","мерла","мёрла","мерли","мёрли","мерло","мёрло","мерно","мерой","мерок","мерою","мерси","мертв","мёртв","меряй","мерял","мерят","меряю","меряя","месил","месим","месит","месса","мессе","мессу","мессы","места","месте","мести","место","месту","месть","месье","месят","месяц","метал","метан","метек","метел","мётел","метем","метём","метет","метёт","метил","метим","метис","метит","метка","метке","метки","метко","метку","метла","метле","метлу","метлы","мётлы","метни","метну","метод","меток","метол","метоп","метра","метре","метро","метру","метры","метут","метче","метят","мехам","мехах","мехов","мехом","меццо","мечам","мечах","мечей","мечем","мечен","мечет","мечом","мечта","мечте","мечту","мечты","мечут","мешае","мешай","мешал","мешат","мешаю","мешая","мешен","мешка","мешке","мешки","мешку","мешок","мешоч","мещан","мздой","мздою","миазм","миазы","мигай","мигал","мигам","мигах","мигач","мигаю","мигая","мигли","мигни","мигну","мигов","мигом","мидас","мидии","мидий","мидию","мидия","мизер","микоз","микро","микст","милан","милая","милее","милей","милен","милею","милий","милка","милке","милки","милку","милле","милое","милой","милок","милом","милос","милою","милуй","милую","милуя","милые","милый","милым","милых","мильх","милям","милях","мимам","мимах","мимов","мимоз","мимом","минам","минах","минаю","минга","минеи","миней","минем","минер","минёр","минет","минея","минна","минне","минны","миног","миной","минор","миною","минск","минув","минуй","минул","минус","минут","миную","минуя","минья","миняй","миома","миоме","миому","миомы","мираж","мирам","мирах","мирбо","мирго","мирен","мирза","мирзу","мирил","мирим","мирит","мирка","мирке","мирки","мирку","мирна","мирно","мирну","мирны","миров","мирок","миром","мирон","мирра","мирре","мирру","мирры","мирта","мирте","мирту","мирты","мирян","мирят","миска","миске","миски","миску","мисок","миссы","митей","митоз","митра","митре","митро","митру","митры","митяй","митяя","мифам","мифах","мифим","мифов","мифом","михаи","михай","михей","михею","михея","михин","мишей","мишек","мишка","мишке","мишки","мишку","мишур","младо","младш","млеем","млеет","млеко","млела","млели","млело","млеть","млеют","млина","млине","млрд.","млына","ммоль","мнени","мнете","мнёте","мнешь","мнёшь","мнила","мнили","мнило","мнимо","мнись","мните","мнить","мнишь","многа","многи","много","множа","множе","множу","множь","мнози","мнусь","моава","моаве","мобил","мовчи","могар","моген","могил","могла","могли","могло","могол","могут","могуч","могущ","могши","модам","модах","модем","моден","модна","модно","модны","модой","модою","модус","моего","моему","моете","моешь","можай","можем","может","можеш","можно","можут","мозга","мозге","мозги","мозгл","мозгу","мозем","моими","мойва","мойве","мойву","мойвы","мойка","мойке","мойки","мойку","мойра","мойся","мойте","мокий","мокка","мокко","мокла","мокли","мокло","мокни","мокну","мокор","мокра","мокро","мокры","мокша","молам","молах","молва","молве","молви","молву","молвы","молвь","молдо","молей","молил","молим","молит","молни","молов","молод","молож","молок","молол","молом","молот","молох","молоч","молча","молчи","молчу","мольб","молье","молью","молюс","молям","моляр","молят","молях","монад","монас","монах","монаш","монба","монет","моном","монот","монте","мопед","мопса","мопсе","мопсу","мопсы","морга","морге","морги","моргу","морда","морде","морду","морды","морей","морем","морен","морён","моржа","морже","моржи","моржу","морзе","мориа","морил","морим","морит","мороз","морок","мором","морса","морсе","морск","морсу","морсы","морус","морфа","морфе","морфу","морфы","морцо","морща","морщи","морщу","морщь","моряк","морям","морят","морях","мосек","мосий","мосия","москв","моско","мосол","моста","мосте","мости","мосту","мосты","мосье","мотае","мотай","мотал","мотам","мотах","мотаю","мотая","мотет","мотив","мотиш","мотка","мотке","мотки","мотку","мотни","мотну","мотню","мотня","мотов","моток","мотом","мотор","мотру","мотто","мотыг","мохер","мохна","мохны","мохом","моцио","мочат","мочек","мочен","мочил","мочим","мочит","мочка","мочке","мочки","мочку","мочой","мочою","мошек","мошен","мошка","мошке","мошки","мошку","мошна","мошне","мошну","мошны","мощам","мощах","мощей","мощен","мощён","мощна","мощно","мощны","мощью","моюсь","моясь","мрази","мразь","мрака","мраке","мраку","мрамо","мраче","мрачн","мрежа","мстил","мстим","мстис","мстит","мстят","муара","муаре","муару","мувен","мудра","мудри","мудро","мудры","мудрю","мудря","мужал","мужам","мужах","мужаю","мужая","мужей","мужем","мужес","мужик","мужич","мужчи","мужья","музам","музах","музее","музеи","музей","музею","музея","музой","музою","мукам","муках","мукой","мукою","мулам","мулат","мулах","мулек","мулёк","мулла","мулле","муллу","муллы","мулов","мулом","муляж","мулят","мумер","мумие","мумиё","мумии","мумий","мумию","мумия","мумму","мунда","мунди","мураш","мурда","мурен","мурза","мурзе","мурзу","мурзы","мурин","мурка","мурке","мурки","мурку","мурла","мурле","мурло","мурлу","мурой","мурок","муром","мурою","муруй","мурую","муруя","мурья","мусор","мусса","муссе","муссу","мусье","мусью","мутен","мутил","мутим","мутит","мутна","мутно","мутны","мутон","мутью","мутят","муфта","муфте","муфту","муфты","мухам","мухах","мухой","мухою","муцин","мучай","мучат","мучаю","мучая","мучил","мучим","мучит","мучка","мушек","мушка","мушке","мушки","мушку","мхами","мцыри","мчала","мчали","мчало","мчась","мчать","мчись","мчите","мчишь","мчусь","мшист","мшить","мывши","мыкал","мыкаю","мыкол","мылил","мылим","мылит","мылка","мылки","мылко","мылок","мылом","мылся","мылят","мымра","мымре","мымру","мымры","мысам","мысах","мысик","мыска","мыске","мыски","мыску","мысле","мысли","мысль","мыслю","мысля","мысов","мысок","мысом","мытая","мытое","мытой","мытом","мытою","мытую","мытые","мытый","мытым","мытых","мытье","мытьё","мытью","мытья","мычал","мычат","мычим","мычит","мычки","мышам","мышат","мышах","мышей","мышек","мыший","мышка","мышке","мышки","мышко","мышку","мышца","мышце","мышцу","мышцы","мышью","мэлан","мэрам","мэрах","мэрии","мэрий","мэрию","мэрия","мэров","мэром","мэрон","мэтра","мэтре","мэтру","мэтры","мюзет","мюзик","мюона","мюоне","мюону","мюоны","мюрат","мюрид","мягка","мягки","мягко","мягок","мягча","мягче","мягчу","мякиш","мякла","мякли","мякло","мякну","мялка","мялке","мялки","мялку","мялок","мялся","мямле","мямли","мямлю","мямля","мяска","мяске","мяско","мяску","мясов","мясом","мяста","мясца","мясце","мясцо","мясцу","мятая","мятеж","мятие","мятно","мятое","мятой","мятом","мятою","мятую","мятые","мятый","мятым","мятых","мятье","мятьё","мячам","мячах","мячей","мячем","мячик","мячом","на-ка","набат","набег","набей","набер","набив","набил","набит","набла","набле","наблу","наблы","набоб","набок","набор","набра","набре","набро","набух","набью","навал","навар","навез","навёз","навей","навек","навел","навёл","навер","навес","навет","навею","навзр","навий","навин","навис","навит","навод","навоз","навой","навра","наври","навру","навсе","навст","навыв","навыд","навык","навью","навья","навяз","нагай","наган","нагар","нагая","нагиб","нагие","нагим","нагих","нагла","нагле","нагло","наглы","нагля","нагна","нагни","нагну","нагов","нагое","нагой","нагом","нагон","нагою","награ","нагул","нагую","надаю","надев","надее","надеж","надей","надел","наден","надет","надею","надея","надзо","надир","надме","надоб","надое","надои","надой","надол","надор","надою","надоя","надпи","надса","надтр","надув","надуе","надуй","надул","надум","надут","надую","наеди","наеду","наезд","наела","наели","наело","наест","наешь","нажав","нажал","нажат","нажив","нажил","нажим","нажин","нажит","нажми","нажму","нажри","нажру","назад","назар","назва","назем","назём","назло","назна","назыв","наибл","наибо","наивн","найде","найди","найду","найдя","найма","найме","найми","найму","найти","наказ","накал","накан","накат","накип","накло","накол","након","накоп","накос","накре","налег","налёг","налез","налей","налет","налёт","налив","налил","налим","налип","налит","налиц","налог","налож","налой","налоя","налью","наляг","намаз","намек","намёк","намел","намёл","намер","намес","намет","намёт","намеч","намин","намну","намой","намок","намол","намою","намыв","намыл","намяв","намяк","намял","нанду","нанес","нанёс","наниз","наним","нанка","нанке","нанки","нанко","нанку","нанос","наняв","нанял","нанят","наори","наору","наотр","напав","напак","напал","напас","напев","напек","напёк","напел","напер","напёр","напет","напеч","напив","напил","напис","напит","напич","напои","напой","напол","напом","напор","напою","напр.","напра","напри","напро","напру","напря","нарам","нарас","нарах","нарве","нарви","нарву","нарвы","нарда","нарде","нарду","нарды","нарез","нарек","нарёк","народ","нарой","нарос","нароч","нарою","нарта","нарте","нарту","нарты","наруж","наруш","нарыв","нарыл","нарыт","наряд","насад","насаж","насев","насек","насёк","насел","насею","насий","насил","наска","наско","насла","насле","насме","насос","наспл","наста","насте","насти","насто","настр","насту","настю","настя","насуп","насущ","насую","насче","насып","натал","наташ","натаю","натек","натёк","натер","натёр","натра","натре","натри","натру","натур","натяг","натян","наудя","наук.","наука","науке","науки","науку","научи","научу","науще","нафта","нафте","нафту","нафты","нахал","нахло","нахму","наход","нацел","нации","наций","нацио","нацию","нация","начав","начал","начат","начел","начес","начёс","начет","начёт","начею","начин","начит","начне","начни","начну","нашег","нашед","нашей","нашел","нашёл","нашем","нашею","нашив","нашил","нашим","нашит","наших","нашла","нашли","нашло","нашлю","нашью","нащеп","наяву","наяда","наяде","наяду","наяды","ндарь","небес","небол","небом","нёбом","небре","небыт","невда","невеж","невер","невес","невзр","невид","невин","невни","невод","невоз","невой","невол","невск","негаа","негде","негод","негож","негой","негою","негра","негре","негру","негры","негус","недав","недал","недар","недел","недет","недоб","недов","недол","недор","недоу","недра","недре","недру","недры","недуг","недур","нежат","нежба","нежел","нежен","нежил","нежим","нежин","нежит","нежна","нежно","нежну","нежны","незав","незад","нездо","незна","неизв","неизм","неист","нейди","нейти","некай","некал","некаю","некая","некем","некие","некий","неким","неких","неког","некое","некой","неком","некот","некою","некто","некую","нелеп","нелли","нелов","нельз","нелюб","немаз","немал","немая","немед","немел","немец","немею","немея","немил","немка","немке","немки","немку","немно","немое","немой","немок","немом","немою","немую","немца","немце","немцу","немцы","немые","немым","немых","ненав","ненад","ненас","ненец","нения","ненка","ненуж","ненца","ненце","ненцу","ненцы","необх","необъ","необы","неожи","неона","неоне","неону","неопи","неопр","непир","непог","непод","непон","непор","непос","непра","непре","непри","непро","нераз","нерал","нерва","нерве","нервн","нерву","нервы","неред","нерка","нерке","нерки","нерку","нерол","нерон","нерпа","нерпе","нерпу","нерпы","нерях","несем","несём","несет","несёт","неско","несла","несли","несло","несме","несмо","несно","несог","несом","несоо","неспо","неспр","несся","нёсся","несте","нести","несть","несун","несут","несча","несче","несыт","нетер","нетто","нетяг","нетях","неуда","неуде","неудо","неуду","неуды","неуже","неужт","неуме","неуча","неуче","неучи","неучу","нефам","нефах","нефед","нефов","нефом","нефти","нефть","нехай","нехор","нехри","нечая","нечег","нечем","нечет","нечто","нечуй","нешто","ни-ни","нибуд","нивам","нивах","нивка","нивоз","нивой","нивою","нивух","нивха","нивхе","нивху","нигде","нигил","нижем","нижет","нижни","нижут","нижче","низал","низам","низах","низен","низин","низка","низке","низки","низко","низов","низок","низом","никак","никем","никит","никиф","никла","никли","никло","никни","никну","никог","никой","никол","ником","никон","никто","никуд","нилом","нилот","нилус","нилыч","нильс","нимба","нимбе","нимбу","нимбы","нимфа","нимфе","нимфу","нимфы","ниной","нипоч","нисан","нитам","нитах","нитей","нитка","нитке","нитки","нитку","нитов","ниток","нитом","нитон","нитью","нитям","нитях","ницца","ницце","ниццу","ниццы","ничег","ничей","ничем","ничто","ничье","ничьё","ничьи","ничью","ничья","нишам","нишах","нишей","нишею","нищал","нищаю","нищая","нищее","нищей","нищем","нищет","нищею","нищие","нищий","нищим","нищих","нищую","нница","новая","новее","новей","новен","новик","новоб","новог","новое","новои","новой","новом","новос","новою","новую","новые","новый","новым","новых","новью","ногам","ногах","ногой","ногою","ногте","ногти","ногтю","ногтя","ноете","ноешь","ножам","ножах","ножей","ножек","ножем","ножен","ножик","ножич","ножищ","ножка","ножке","ножки","ножку","ножни","ножны","ножом","ноздр","нойон","нойте","нолей","нолем","нолём","нолик","нолям","нолях","номад","номам","номах","номер","номов","номом","нонам","нонах","нонет","ноной","ноною","нонче","норам","норах","норда","норде","норду","нории","норий","норию","нория","норка","норке","норки","норку","норма","норме","норму","нормы","норов","норой","норок","норою","носам","носат","носах","носач","носик","носил","носим","носит","носка","носке","носки","носко","носку","носов","носои","носок","носом","ности","носух","носью","носят","нотам","нотах","нотис","нотка","нотке","нотки","нотку","нотой","ноток","нотою","ночам","ночах","ночва","ночей","ночек","ночка","ночке","ночки","ночку","ночно","ночуй","ночую","ночуя","ночью","ношам","ношах","ношей","ношен","ношею","ношпа","нощно","нрава","нраве","нрави","нраво","нравс","нраву","нравы","нравя","ну-ка","ну-ну","нубии","нугой","нугою","нуден","нудил","нудим","нудит","нудна","нудно","нудны","нудью","нудят","нужда","нужде","нужду","нужды","нужен","нужна","нужно","нужны","нукай","нукал","нукаю","нукая","нукер","нулей","нулем","нулём","нулик","нулям","нулях","нумер","нутка","нутом","нутра","нутре","нутро","нутру","нынеш","нынче","нырка","нырке","нырки","нырку","нырни","нырну","нырок","ныряй","нырял","ныряю","ныряя","нытик","нытье","нытьё","нытью","нытья","нэпом","нюанс","нюней","нюнею","нюням","нюнях","нюхай","нюхал","нюхаю","нюхая","нюхни","нюхну","нюхом","няней","нянек","нянею","нянин","нянча","нянчи","нянчу","няньк","няням","нянях","оазис","обаче","обаял","обаян","оббив","оббил","оббит","обвал","обвел","обвёл","обвес","обвив","обвил","обвин","обвис","обвит","обвод","обвоз","обвор","обгон","обдав","обдай","обдал","обдам","обдан","обдаю","обдир","обдув","обдуй","обдул","обдум","обдут","обдую","обеги","обегу","обеда","обеде","обедн","обедо","обеду","обеды","обезо","обеим","обеих","обелю","оберн","оберт","оберу","обесп","обета","обете","обету","обеты","обеща","обжат","обжег","обжёг","обжив","обжиг","обжил","обжим","обжин","обжит","обжог","обжор","обзол","обзор","обида","обиде","обидн","обиду","обидч","обиды","обидь","обижа","обижу","обила","обили","обило","обиня","обита","обито","обиты","обить","обкат","обком","обкос","облав","облай","облак","облас","облач","облаю","облая","облез","облей","облек","облёк","облет","облёт","облив","облик","облил","облит","облов","облог","облое","облож","облой","облок","облом","облою","облоя","облую","облые","облый","облым","облых","облюю","обмак","обман","обмен","обмер","обмет","обмёт","обмин","обмой","обмол","обмор","обмоч","обмою","обмыв","обмыл","обмяв","обмяк","обмял","обмят","обнаж","обнар","обнес","обнёс","обним","обнов","обнос","обняв","обнял","обогн","обода","ободе","ободр","ободу","обоев","обоек","обожа","обоза","обозе","обозн","обозо","обозу","обозы","обоим","обоих","обойм","обокр","обола","оболе","оболу","оболы","оболь","обора","оборв","оборо","оботр","обочь","обошл","обоюд","обоям","обоях","обрад","образ","обрат","обращ","обрез","обрей","обрек","обрёк","обрел","обрёл","обрет","обрею","обрив","обрил","обрит","оброк","оброн","оброс","оброч","обруб","обруч","обрыв","обряд","обсев","обсох","обста","обсто","обсуж","обтек","обтёк","обтер","обтёр","обтян","обуви","обувь","обуем","обует","обуза","обузе","обузу","обузы","обула","обули","обуло","обута","обуто","обуты","обуть","обуха","обухе","обухи","обуху","обучи","обучу","обуют","обуял","обуян","обхаю","обхва","обход","обчел","обчёл","обшей","обшил","обшит","обшла","общая","общег","общее","общей","общем","общес","общеч","общею","общие","общий","общим","общин","общих","общую","объев","объел","объем","объём","объяв","объял","объяс","объят","обыкн","обыск","обыча","обычн","обыщи","обыщу","обяжу","обяза","оваго","овала","овале","овалу","овалы","овамо","овеем","овеет","овечк","овеют","овеяв","овеял","овеян","овила","овили","овило","овина","овине","овину","овины","овита","овито","овиты","овить","овлад","овода","оводе","оводу","оводы","овоща","овоще","овощи","овощу","овраг","овров","овсец","овсов","овсом","овсюг","овцам","овцах","овцей","овцею","овцой","овцою","овчар","овчин","овьем","овьём","овьет","овьёт","овьют","огаре","огарь","огарю","огаря","оглох","оглуш","огляд","оглян","огнев","огней","огнем","огнём","огнен","огням","огнях","оголи","оголю","огонь","огоро","огорч","ограб","оград","огрев","огрей","огрел","огрех","огрею","огром","огуре","одаль","одами","одари","одарю","одева","одежа","одёжа","одежд","одеже","одёже","одежи","одёжи","одежу","одёжу","одела","одели","одело","оделс","оделю","одену","одень","одеон","одерж","одест","одета","одето","одетт","одеты","одеть","одеял","одина","одине","одинн","одино","одича","однаж","однак","одная","однех","одним","одних","одно-","одног","одной","одном","одною","одную","одобр","одоле","одров","одром","одури","одурь","одуше","ожгла","ожгли","ожгло","ожгут","ожеро","ожечь","ожжем","ожжём","ожжет","ожжёт","оживи","оживу","ожида","ожила","ожили","ожило","ожить","ожога","ожоге","ожоги","ожогу","озабо","озада","озами","озари","озарю","озаря","оземь","озера","озёра","озере","озеро","озеру","озими","озимь","озлен","озлён","озлив","озлил","озлим","озлит","озлоб","озлят","означ","озноб","озона","озоне","озону","оидии","ой-ой","ойкай","ойкал","ойкаю","ойкая","ойкну","ойрот","окаем","окает","окажи","окажу","оказа","оказы","окала","окали","окало","окапи","окати","окать","окачу","окают","океан","окину","окинь","окиси","окись","оклад","оклей","оклею","оклик","окнам","окнах","окном","оковы","окоем","окоём","окола","около","оконч","окопа","окопе","окопу","окопы","окорм","окота","окоте","окоту","окошк","окраи","окрас","окраш","окреп","окрес","окрик","окрол","округ","окруж","оксид","оксим","октав","октан","октет","октод","окуем","окуём","окует","окуёт","окуне","окуни","окуну","окунь","окуню","окуня","окупи","окурю","окуют","олеат","олега","олеин","олене","олени","олень","оленю","оленя","олесе","олеси","олесю","олеся","олеум","олива","оливе","оливу","оливы","олимп","олиту","олифа","олифе","олифу","олифы","олифя","олова","олове","олово","олову","олуха","олухе","олухи","олуху","олуши","ольга","ольге","ольги","ольго","ольгу","ольха","ольхе","ольхи","ольху","омами","омара","омаре","омару","омары","омега","омеге","омеги","омегу","омела","омеле","омелу","омелы","омерз","омету","ометы","омлет","омоем","омоет","омочи","омочу","омоют","омрак","омуле","омули","омуль","омулю","омуля","омута","омуте","омуту","омуты","омыла","омыли","омыло","омыта","омыто","омыты","омыть","онагр","оникс","оного","оному","оноре","онуфр","онуча","онуче","онучи","онучу","оными","оолит","опала","опале","опали","опало","опалу","опалы","опалю","опана","опара","опаре","опару","опары","опаса","опасн","опека","опеке","опеки","опеку","опеле","опели","опель","опелю","опеля","опера","опере","оперу","оперш","оперы","опеча","опешу","опием","опила","опили","опило","опилю","описа","описи","опись","опить","опиум","опиши","опишу","оплел","оплёл","оплеу","оплот","оплыв","оплыл","оплюй","оплюю","опоек","опоен","опоён","опоив","опоил","опоим","опоит","опока","опоке","опоки","опоку","ополз","опомн","опора","опоре","опору","опоры","опоят","оправ","опред","опрок","опрос","опрят","оптик","оптим","оптом","опубл","опуса","опусе","опуст","опусу","опусы","опушу","опущу","опции","опций","опцию","опция","опыта","опыте","опытн","опыту","опыты","опята","опять","орава","ораве","ораву","оравы","орала","орали","орало","орарь","орато","орать","орбит","орган","оргии","оргий","оргию","оргия","ордам","ордах","орден","ордер","ордой","ордою","ордын","ореол","орест","орете","орёте","ореха","орехе","орехи","ореху","орешь","орёшь","ориги","орион","орите","оркан","оркес","орлам","орлан","орлах","орлец","орлий","орлик","орлиц","орлов","орлом","орляк","орлят","ороки","ороси","орочи","орошу","оррьр","ортам","ортах","ортит","ортов","ортом","оруди","орфей","орхит","орчан","оршад","оршею","осада","осаде","осади","осаду","осады","осажу","осами","освед","освет","освещ","освоб","освой","освою","освящ","осела","оселе","осели","осело","осени","осень","осеню","осерд","осетр","осётр","осечь","осиль","осилю","осина","осине","осину","осины","осипа","осипу","осиян","оскал","оскол","оскор","ослаб","ослам","ослах","ослеп","ослиз","ослий","ослик","ослих","ослиц","ослов","ослом","ослоп","ослыш","осляк","ослят","осман","осмат","осмел","осмею","осмии","осмий","осмию","осмия","осмол","осмос","осмот","осмыс","основ","оснуй","осную","особа","особе","особи","особл","особо","особу","особы","особь","осоед","осока","осоке","осоки","осоку","оспин","оспой","оспою","остав","остае","остал","остан","остап","остат","остаф","остей","остер","остёр","остит","остов","остом","остор","остра","остри","остро","остры","острю","остыв","остыл","остью","остяк","остям","остях","осуди","осужд","осужу","осуши","осушу","осыпи","осыпь","осяду","осядь","осяза","осями","отава","отаве","отаву","отавы","отара","отаре","отару","отары","отбей","отбив","отбил","отбит","отбое","отбой","отбор","отбою","отбоя","отбро","отбыв","отбыл","отбыт","отваж","отвал","отвар","отвед","отвез","отвёз","отвел","отвёл","отвер","отвес","ответ","отвеч","отвис","отвле","отвод","отвоз","отвор","отвра","отвык","отгад","отгиб","отгон","отгул","отдав","отдае","отдай","отдал","отдам","отдан","отдач","отдаю","отдел","отдух","отдых","отдыш","отека","отёка","отеке","отёке","отеки","отёки","отеку","отёку","отела","отёла","отеле","отёле","отели","отелу","отёлу","отель","отелю","отеля","отерт","отёрт","отечь","отжав","отжал","отжат","отжег","отжёг","отжив","отжиг","отжил","отжим","отжит","отжог","отжуй","отжую","отзол","отзыв","отира","отита","отите","отиту","откаж","отказ","откат","откло","откол","откос","откро","откры","откуд","откуй","откуп","откус","откую","отлаю","отлег","отлёг","отлей","отлет","отлёт","отлив","отлил","отлип","отлит","отлич","отлов","отлог","отлож","отлуп","отмах","отмел","отмёл","отмер","отмой","отмою","отмст","отмщу","отмыв","отмыл","отмыт","отмяк","отнес","отнёс","отним","относ","отнош","отнын","отняв","отнял","отнят","отозв","отопи","оторв","отпав","отпад","отпал","отпев","отпей","отпел","отпер","отпет","отпив","отпил","отпор","отпою","отпра","отпус","отпущ","отрав","отраж","отраз","отреб","отрез","отрем","отрём","отрет","отрёт","отрог","отрок","отрос","отрою","отруб","отрут","отрыв","отрыж","отрыл","отрыт","отряд","отряс","отрях","отсев","отсей","отсек","отсёк","отсел","отсею","отсос","отсох","отста","отсту","отсюд","оттал","оттаю","оттек","оттёк","оттен","оттер","оттёр","оттог","отток","оттуд","отума","отуча","отучи","отучу","отход","отцам","отцах","отцеп","отцов","отцом","отчаи","отчал","отчас","отчая","отчег","отчее","отчей","отчем","отчет","отчёт","отчею","отчие","отчий","отчим","отчих","отчую","отшат","отшей","отшел","отшиб","отшив","отшил","отщеп","отъев","отъез","отъел","отъем","отъём","отъяв","отъял","отъят","отыде","отыск","отыщи","отыщу","офене","офени","офень","офеню","офеня","оферт","офиса","офисе","офису","офисы","офита","офите","офиту","офице","офици","офорт","офсет","офшор","охаем","охает","охала","охали","охало","охами","охань","охать","охают","охаяв","охаял","охаян","охват","охнем","охнет","охнув","охнул","охнут","охота","охоте","охоту","охоты","охочи","охран","охрил","охрим","охрип","охрит","охрой","охрою","охрят","оцени","оценю","оцепе","оцепи","очага","очаге","очаги","очагу","очами","очаро","очеви","очень","очере","очерк","очерт","очеса","очёса","очесе","очёсе","очесу","очёсу","очеяь","очини","очиню","очист","очища","очищу","очкам","очках","очков","очком","очкур","очная","очник","очное","очной","очном","очною","очнул","очнут","очную","очные","очный","очным","очных","ошеек","ошень","ошиба","ошибк","ошибл","ошибо","ошуюю","ощерю","ощупа","ощупи","ощупь","ощути","ощуща","ощуще","ощущу","пабам","пабах","пабов","пабом","павам","павах","павел","павий","павла","павле","павло","павлу","павлы","павой","павою","павье","павьи","павью","павья","паган","пагод","падай","падал","падам","падат","падаю","падая","падеж","падёж","падем","падём","паден","падет","падёт","падка","падки","падко","падла","падле","падло","падлу","падок","падре","падуб","падун","падут","падши","пажам","пажах","пажей","пажом","пазам","пазах","пазка","пазке","пазки","пазку","пазов","пазок","пазом","пазух","паиси","пайка","пайке","пайки","пайку","пакет","пакле","пакли","паклю","пакля","паком","пакта","пакте","пакту","пакты","пакуй","пакую","пакуя","палам","палас","палат","палах","палац","палач","палаш","палая","пален","палён","палец","палея","палий","палил","палим","палис","палит","палиц","палия","палка","палке","палки","палко","палку","палов","палое","палой","палок","палом","палою","палуб","палую","палые","палый","палым","палых","палыч","пальм","пальт","пальц","палят","памба","памбу","памбы","памва","памве","памву","памвы","пампа","пампе","пампу","пампы","памят","панам","панас","панах","панаш","панда","панде","панду","панды","паней","панею","паниб","паник","паних","панич","панка","панке","панки","панку","панна","панне","панно","панну","панны","панов","панок","паном","панси","панта","панты","паную","паныч","панье","папам","папах","папаш","папен","папин","папка","папке","папки","папку","папой","папок","папою","папуа","папул","папхе","папыч","папье","парад","парам","параф","парах","пардо","парез","парен","париж","парии","парий","парик","парил","парим","парит","парию","пария","парка","парке","парки","парко","парку","парле","парль","парне","парни","парно","парню","парня","паров","парод","парой","парок","паром","парою","парт-","парта","парте","парти","парту","парты","парус","парфе","парча","парче","парчи","парчу","парша","парше","парши","паршу","парят","пасаж","пасам","пасах","пасек","пасем","пасём","пасет","пасёт","пасла","пасли","пасло","пасма","пасме","пасмо","пасни","пасну","пасов","пасом","пасса","пассе","пасси","пассу","пассы","пасся","паста","пасте","пасти","пасту","пасты","пасть","пасуй","пасут","пасую","пасуя","пасха","пасхе","пасхи","пасху","пасюк","патан","патер","патио","патла","патле","патлу","патлы","патом","патуа","пауза","паузе","паузу","паузы","паука","пауке","пауки","пауко","пауку","пафос","пахал","пахан","пахви","пахит","пахла","пахли","пахло","пахне","пахни","пахну","пахом","пахре","пахта","пахте","пахту","пахты","пахуч","пацан","пацие","пацюк","пачек","пачка","пачке","пачки","пачку","пашам","пашах","пашей","пашем","пашен","пашет","пашею","пашки","пашко","пашне","пашни","пашню","пашня","пашой","пашут","паюса","паюсе","паюсу","паяем","паяет","паяла","паяли","паяло","паями","паяна","паяно","паяны","паять","паяца","паяце","паяцу","паяцы","паяют","пеана","пеане","пеану","певал","певец","певиц","певун","певуч","певца","певце","певцу","певцы","пегас","пегаш","пегая","пегие","пегий","пегим","пегих","пегог","пегое","пегой","пегом","пегою","пегую","педра","педро","педру","пейса","пейсе","пейсу","пейсы","пейте","пекан","пекла","пекле","пекли","пекло","пеклу","пеком","пекся","пёкся","пекто","пекут","пелен","пелит","пелся","пемза","пемзе","пемзу","пемзы","пенал","пеней","пенек","пенёк","пенеч","пенею","пензе","пензу","пензы","пение","пении","пенил","пеним","пенис","пенит","пению","пения","пенка","пенке","пенки","пенку","пенни","пенно","пеной","пенок","пеною","пенса","пенсе","пенсу","пенсы","пенье","пеньё","пенью","пенья","пеняй","пенял","пенят","пеняю","пеняя","пепел","пепла","пепле","пеплу","пеплы","пепси","перва","перво","перву","первы","перга","переб","перев","перег","перед","перёд","перее","перек","перел","перем","перен","переп","перер","перес","перет","перех","перец","переш","перил","перин","перка","пёрка","перла","пёрла","перле","перли","пёрли","перло","пёрло","перлу","перлы","перми","пермь","перов","пером","перса","персе","перси","перст","персу","персы","перся","пёрся","перун","перца","перце","перцу","перцы","перча","перчу","перья","песен","песет","песец","песий","пёсий","песик","пёсик","песка","песке","пески","песко","песку","песне","песни","песнь","песню","песня","песок","пестр","пёстр","песца","песце","песцу","песцы","песье","пёсье","песьи","пёсьи","песью","пёсью","песья","пёсья","петая","петей","петел","петен","петер","петит","петле","петли","петлю","петля","петра","петре","петри","петро","петру","петух","петый","пехом","печал","печам","печат","печах","печей","печек","печем","печём","печен","печён","печет","печёт","печка","печке","печки","печку","печны","печью","пешая","пешее","пешей","пешек","пешем","пешею","пешие","пеший","пешим","пеших","пешка","пешке","пешки","пешко","пешку","пешни","пешня","пешую","пещер","пещур","пиала","пиале","пиалу","пиалы","пиано","пиара","пиаре","пиару","пивал","пивка","пивке","пивко","пивку","пивом","пивца","пивце","пивцо","пивцу","пивши","пигус","пиесе","пиесу","пижам","пижма","пижме","пижму","пижмы","пижон","пиита","пиите","пииту","пииты","пикай","пикал","пикам","пикан","пикап","пиках","пикаю","пикая","пикет","пикни","пикну","пиков","пикой","пиком","пикон","пикою","пикша","пикше","пикши","пикшу","пикюр","пилав","пилад","пилам","пилах","пилен","пилил","пилим","пилит","пилка","пилке","пилки","пилку","пилой","пилок","пилон","пилот","пилою","пился","пилят","пимам","пимах","пимен","пинай","пинал","пинаю","пиная","пинде","пинен","пинии","пиний","пинию","пиния","пинка","пинке","пинки","пинку","пинок","пинта","пинте","пинту","пинты","пиона","пионе","пиону","пионы","пипка","пирам","пират","пирах","пирее","пирей","пирен","пирит","пирке","пиров","пирог","пирож","пиром","пирон","пироп","пирса","пирсе","пирсу","пирсы","пируй","пирую","пируя","писак","писал","писан","писар","писат","писаю","писая","писем","писец","писка","писке","писки","писку","писто","писун","писца","писце","писцу","писцы","письм","питай","питал","питаю","питая","питер","питие","питии","питию","пития","питой","питон","питою","питух","питый","питье","питьё","питью","питья","пифии","пифий","пифию","пифия","пифос","пихай","пихал","пихаю","пихая","пихни","пихну","пихта","пихте","пихту","пихты","пицца","пицце","пиццу","пиццы","пичуг","пичук","пишем","пишет","пишут","пищал","пищат","пищей","пищею","пищик","пищим","пищит","пищух","плави","плавн","плавт","плаву","плавь","плавя","плака","плаке","плакс","пламя","плана","плане","плану","планы","пласт","плата","плате","плати","платк","плато","плату","платы","плать","платя","плаун","плаха","плахе","плахи","плахт","плаху","плаца","плаце","плацу","плацы","плача","плаче","плачи","плачу","плачь","плаща","плаще","плащи","плащу","плебс","плева","плеве","плево","плеву","плевы","пледа","пледе","пледу","пледы","плеер","плела","плели","плело","племя","плена","плене","плени","пленн","плену","пленю","плеса","плёса","плесе","плёсе","плеск","плесу","плёсу","плесы","плёсы","плете","плети","плету","плеть","плетя","плеча","плече","плечи","плечо","плечу","плеши","плешь","плещи","плещу","плинт","плинф","плиса","плисе","плису","плита","плите","плиту","плиты","плица","плице","плицу","плицы","плова","плове","плову","плода","плоде","плоди","плоду","плоды","плодя","пложу","пломб","плоск","плота","плоте","плоти","плотн","плоту","плоты","плоть","плоха","плохи","плохо","плоше","плошк","площа","площе","плуга","плуге","плуги","плугу","плута","плуте","плуту","плуты","плыви","плыву","плывя","плыла","плыли","плыло","плыть","плюем","плюём","плюет","плюёт","плюну","плюнь","плюса","плюсе","плюсу","плюсы","плюха","плюхе","плюхи","плюху","плюша","плюше","плюшу","плюща","плюще","плющи","плющу","плюют","пляжа","пляже","пляжи","пляжу","пляса","плясе","плясу","пляши","пляшу","пнете","пнёте","пнешь","пнёшь","пните","пнище","пнула","пнули","пнуло","пнуть","пнями","по-ее","по-за","по-их","побаг","побег","побед","побеж","побей","побер","побив","побил","побит","побла","побле","побои","побой","побор","побра","побыв","побыл","побыт","побью","повал","повар","повед","повеж","повез","повёз","повел","повёл","повем","повен","повер","повес","повет","повея","повид","повис","повну","повод","повоз","повой","повор","повре","повто","повык","повыш","повял","поган","погас","погиб","погло","погля","погни","погну","погов","погод","погон","погре","погро","погру","погуб","подав","подад","подай","подал","подам","подан","подар","подат","подах","подач","подаю","подби","подбо","подва","подве","подви","подвы","подго","подде","подей","подел","подер","подий","подин","подия","подко","подкр","подла","подле","подли","подло","подлы","подме","подмо","подмы","подне","подни","подно","подня","подоб","подов","подог","подож","подоз","подои","подол","подом","подох","подош","подою","подпи","подро","подря","подсл","подсм","подст","подта","подтв","подув","подуй","подул","подум","подую","подхв","подхо","подче","подчи","подым","поеди","поеду","поезд","поезж","поела","поели","поело","поена","поено","поены","поест","поете","поёте","поешь","поёшь","пожав","пожал","пожар","пожат","пожги","пожгу","пожди","пожду","пожег","пожёг","пожел","пожив","пожил","пожим","пожир","пожми","пожму","пожну","пожня","пожог","пожру","пожуй","пожух","пожую","позаб","позав","позад","позам","позах","позво","поздн","поздр","позем","позём","позер","позёр","позже","позли","позлю","позна","позов","позой","позол","позор","позою","позыв","поила","поили","поило","поиск","поите","поить","поишь","поищи","поищу","пойде","пойди","пойду","пойдя","пойка","пойла","пойле","пойло","пойлу","пойма","пойме","пойми","пойму","поймы","пойте","пойти","покаж","показ","покам","покат","покач","покер","покид","покло","покое","покои","покой","покол","покон","покор","покос","покою","покоя","покра","покри","покры","покуп","покус","полаг","полай","полам","полах","полаю","полая","полба","полбе","полбу","полбы","полго","полег","полёг","полез","полей","полек","полем","полен","полет","полёт","ползи","ползу","ползш","ползя","полив","полик","полил","полин","полип","полир","полис","полит","полиц","полка","полке","полки","полко","полку","полна","полне","полни","полно","полну","полны","полов","полог","полое","полож","полоз","полой","полок","полол","полом","полон","полос","полот","полою","полто","полть","полуг","полуз","полук","полун","полус","получ","полуш","полую","полча","полые","полый","полым","полых","польз","польш","полью","полюб","полюс","полют","поляк","полям","полян","полях","помад","помал","помел","помер","помес","помет","помёт","помех","помеш","помещ","помил","помин","помир","помни","помну","помню","помня","помог","помож","помои","помой","помол","помор","помоч","помощ","помою","помпа","помпе","помпу","помпы","помре","помри","помру","помуч","помчу","помыв","помыл","помыт","помыш","помыю","помяв","помял","помян","помят","понад","понга","понге","понгу","понев","понед","понес","понёс","поник","поним","понос","понош","понра","понур","пончо","понюх","поняв","понял","понят","пообе","пооди","поори","поору","поощр","попав","попад","попал","попам","попас","попах","попев","попей","попел","попер","попёр","попеч","попив","попик","попил","попит","попка","попке","попки","попку","попла","попов","попод","попои","попой","попок","попом","попон","попою","попро","попру","попса","попул","попью","пораж","пораз","порам","порах","порви","порву","порее","порез","порей","порем","порет","пореч","пореш","порею","порея","порка","порке","порки","порку","порог","пород","пороз","порой","порок","порол","порос","порот","порох","пороч","порою","порск","порта","порте","порти","портн","порто","портр","порту","порты","порть","портя","поруч","порфи","порхн","порци","порча","порче","порчи","порчу","порыв","порыл","порют","посад","посвя","посев","посей","посек","посёк","посел","посет","посещ","посею","посея","посид","поска","поско","посла","после","посло","послу","послы","посля","посме","посмо","посов","посол","посох","поспе","поспи","посре","поссо","поста","посте","посто","постр","посту","посты","посул","посыл","посяг","потам","потас","потах","поташ","потаю","потво","потей","потек","потёк","потел","потер","потёр","потех","потею","потея","потир","потов","поток","потол","потом","потон","потоп","потор","потре","потри","потро","потру","потря","потуг","потуп","потух","потяг","потян","поуже","поужу","поучи","поучу","похва","поход","похож","похор","похул","поцел","почал","почат","почва","почве","почву","почвы","почек","почел","почёл","почем","почём","почер","почет","почёт","почив","почий","почил","почин","почию","почка","почке","почки","почку","почла","почли","почло","почта","почте","почти","почтм","почто","почту","почты","почтя","почув","почуй","почую","почуя","пошат","пошей","пошел","пошёл","пошиб","пошив","пошил","пошит","пошла","пошли","пошло","пошлы","пошлю","пошто","пошты","пошью","пощад","пощеч","пощуп","поэма","поэме","поэму","поэмы","поэта","поэте","поэту","поэты","появл","пояса","поясе","поясн","поясу","пояти","права","правд","праве","прави","право","праву","правы","правь","правя","прага","праге","праги","прагу","празд","прайд","прайс","праха","прахе","прахи","праху","праща","праще","пращи","пращу","пребл","пребы","прево","преда","предв","преде","предз","преди","предл","предм","предо","предп","предс","преду","предч","преем","преет","прежд","прежн","прези","презр","преим","прейс","прекр","прела","преле","прели","прело","прель","прелю","прене","преос","препо","препр","препя","прерв","пресл","пресп","пресс","прест","прете","прёте","претр","преть","преув","преуд","прешь","прёшь","преют","приба","прибе","прибл","прибо","прибу","прибы","прибь","прива","приве","привл","привс","привы","привя","пригл","пригн","приго","прида","придв","приде","приди","придт","приду","придя","приед","приез","прием","приём","приех","прижа","прижи","приза","призе","призм","призн","призу","призы","приид","приис","прика","прики","прикл","прико","прикр","приле","прили","прило","приль","приля","прима","приме","прими","приму","примы","прина","прине","прини","прино","прину","принц","приня","приоб","приор","приос","припа","припо","приро","присе","приск","присл","присм","присн","прист","прису","присы","прись","прися","притв","прите","прито","притч","притя","приуз","прихо","прице","прича","приче","причи","причт","прише","пришл","приют","прият","проба","пробе","пробо","пробу","пробы","прова","прове","прови","прово","прогл","прогн","прого","прогр","прогу","прода","проде","продо","проев","проел","проем","проём","проеш","прожи","проза","прозе","прозр","прозу","прозы","проиг","произ","проис","пройд","прока","проке","прокл","проко","прокр","проку","проле","проло","промо","промы","проне","прони","пропа","пропе","пропи","пропо","пропс","пропу","проро","проса","просв","просе","проси","просм","просн","просо","просп","прост","просу","прось","просю","прося","проте","проти","прото","протя","проул","проф.","профи","прохл","прохо","проце","проча","проче","прочи","прочт","прочу","прочь","проше","прошл","прошу","проща","проще","прощу","прояв","пруда","пруде","пруди","пруду","пруды","прудя","пружу","пруса","прусе","прусс","прусу","прусь","прута","пруте","пруту","пруты","пруша","прыга","прыгн","прыти","прыть","прыща","прыще","прыщи","прыщу","пряди","пряду","прядь","пряжа","пряже","пряжи","пряжу","пряла","пряли","пряло","пряма","пряме","прямо","прямы","пряно","пряну","прята","пряха","пряхе","пряхи","пряху","пряча","прячу","прячь","псами","псаре","псари","псарь","псарю","псаря","псина","псине","псину","псины","психа","психе","психи","психу","псица","псков","птаха","птахе","птахи","птаху","птенц","птица","птице","птицу","птицы","птичк","птичь","пуаза","пуазе","пуазу","пуазы","пуант","публи","пугае","пугай","пугал","пуган","пугач","пугаю","пугая","пугли","пугни","пугну","пугов","пугою","пудам","пудах","пудел","пудик","пудов","пудом","пудра","пудре","пудри","пудру","пудры","пудрю","пудря","пузан","пузат","пузач","пузом","пукам","пуках","пукля","пукну","пуков","пуком","пулам","пулах","пулей","пулек","пулею","пулов","пулом","пульс","пульт","пулям","пулях","пумам","пумах","пумой","пумою","пункт","пунша","пунше","пуншу","пуньк","пупка","пупке","пупки","пупку","пупок","пупом","пупса","пупсе","пупсу","пупсы","пурга","пурге","пурги","пургу","пурин","пурка","пурке","пурки","пурку","пурок","пуска","пуске","пуски","пуску","пуста","пусти","пусто","пусты","пусть","пустя","путай","путал","путам","путан","путах","путаю","путая","путей","путем","путём","путец","путло","путля","путно","путрю","путти","путча","путче","путчи","путчу","путям","путях","пуфам","пуфах","пуфик","пуфов","пуфом","пухла","пухли","пухло","пухни","пухну","пухом","пучат","пучил","пучим","пучит","пучка","пучке","пучки","пучко","пучку","пучок","пушат","пушек","пушил","пушим","пушит","пушка","пушке","пушки","пушку","пушок","пушту","пущай","пущам","пущах","пущаю","пущая","пущее","пущей","пущем","пущен","пущею","пущие","пущий","пущим","пущих","пущую","пхать","пхнем","пхнём","пхнет","пхнёт","пхнув","пхнул","пхнут","пчела","пчеле","пчелу","пчелы","пчёлы","пшена","пшене","пшени","пшено","пшену","пшика","пшике","пшику","пыжам","пыжах","пыжей","пыжик","пыжом","пылав","пылай","пылал","пылаю","пылая","пыле-","пылен","пылил","пылим","пылин","пылит","пылка","пылки","пылко","пылок","пылом","пылче","пыльн","пылью","пылят","пырее","пырей","пырею","пырея","пырни","пырну","пытае","пытай","пытал","пытан","пытаю","пытая","пытка","пытке","пытки","пытку","пытли","пыток","пыхал","пыхну","пыхти","пыхтя","пыхчу","пышат","пышек","пышем","пышен","пышет","пышка","пышке","пышки","пышку","пышна","пышно","пышны","пышут","пьеза","пьеро","пьеру","пьеса","пьесе","пьесу","пьесы","пьете","пьёте","пьешь","пьёшь","пьюсь","пьяна","пьяни","пьяно","пьяну","пьянч","пьяны","пэрам","пэрах","пэров","пэром","пядей","пядью","пядям","пядях","пялец","пялил","пялим","пялит","пялка","пялке","пялки","пялку","пялок","пялят","пясти","пясть","пятак","пятам","пятах","пятач","пятая","пятен","пятид","пятил","пятим","пятин","пятип","пятит","пятка","пятке","пятки","пятку","пятна","пятне","пятно","пятну","пятог","пятое","пятой","пяток","пятом","пятою","пятую","пятые","пятый","пятым","пятых","пятьд","пятью","пятят","рабам","рабат","рабах","рабий","рабин","рабов","рабой","рабом","работ","рабоч","рабою","рабье","рабьи","рабью","рабья","равен","равна","равно","равны","радар","радей","радел","радею","радея","раджа","радже","раджи","раджу","радии","радий","радио","радию","радия","радон","радос","радуг","радуе","радуй","радуш","радую","радуя","ражая","ражее","ражей","ражем","ражею","ражие","ражий","ражим","ражих","ражую","разам","разах","разбе","разби","разбо","разбу","разве","разви","разво","развр","развя","разгн","разго","разда","разде","разди","раздо","раздр","разду","разжа","разик","разил","разим","разин","разит","разка","разке","разки","разку","разли","разлу","разма","разме","размы","размя","разни","разно","разны","разоб","разов","разой","разок","разом","разор","разоч","разош","разра","разре","разру","разры","разув","разул","разум","разую","разъе","разъя","разыс","разят","раина","раиса","раисы","райка","райке","райку","район","райте","райяк","ракам","раках","ракет","ракит","ракля","раков","ракой","раком","ракою","ракун","ракша","ракше","ракши","ракшу","ралли","рамам","рамах","рамир","рамка","рамке","рамки","рамку","рамлэ","рамно","рамой","рамок","рамою","рампа","рампе","рампу","рампы","ранам","ранах","ранга","ранге","ранги","рангу","ранее","ранен","ранет","ранец","ранив","ранил","раним","ранит","ранка","ранке","ранки","ранку","ранне","ранни","раной","ранок","раною","ранта","ранте","ранту","ранты","ранца","ранце","ранцу","ранцы","ранчо","раным","раньш","ранью","ранят","рапид","рапир","рапой","рапою","рапса","рапсе","рапсу","расам","расах","расее","расин","раска","раско","раскр","расой","расою","распа","распи","распл","распо","распр","распу","расса","рассв","рассе","расск","рассм","рассп","расст","рассу","рассч","рассы","расте","расти","расто","растр","расту","растя","расхо","расче","ратаз","ратай","ратей","ратин","ратуй","ратуш","ратую","ратуя","ратью","ратям","ратях","раунд","раута","рауте","рауту","рауты","рафид","рафии","рафик","рафию","рафия","рахат","рахис","рахит","рахум","рацеи","рацей","рацею","рацея","рации","раций","рацию","рация","рачий","рачка","рачке","рачки","рачку","рачок","рачье","рачьи","рачью","рачья","рвала","рвали","рвало","рвами","рвани","рвану","рвань","рвать","рвача","рваче","рвачи","рвачу","рвени","рвете","рвёте","рвешь","рвёшь","рвись","рвите","рвота","рвоте","рвоту","рвоты","рвусь","рдеет","рдела","рдели","рдело","рдест","рдеть","рдеют","реакц","реала","реале","реалу","реалы","ребен","ребер","рёбер","ребра","рёбра","ребре","ребро","ребру","ребус","ребят","ревел","ревем","ревём","ревет","ревёт","ревеш","ревиз","ревма","ревмя","ревне","ревно","ревну","ревой","рёвой","револ","ревом","рёвом","ревою","рёвою","ревун","ревут","регат","регби","регги","регия","регул","редак","редан","редек","редел","редея","редис","редка","редки","редко","редок","редут","реете","реешь","режем","режет","режим","режут","резак","резал","резам","резах","резва","резво","резвы","резей","резец","резит","резка","резке","резки","резко","резку","резне","резни","резню","резня","резов","резок","резол","резом","резон","резул","резус","резца","резце","резцу","резцы","резче","резьб","резью","резям","резях","рейда","рейде","рейду","рейды","рейка","рейке","рейки","рейку","рейне","рейса","рейсе","рейсу","рейсы","рейха","рейхе","рейху","рекам","реках","рекой","реком","рекою","рекут","релей","религ","релиз","релит","рельс","ремез","ремиз","ремне","ремни","ремню","ремня","ренет","рении","рений","ренин","рению","рения","рента","ренте","ренту","ренты","ренца","ренье","репам","репах","репей","репер","репет","репка","репке","репки","репку","репой","репок","репор","репою","репут","репье","репьи","репью","репья","ресно","ресто","ретив","ретро","ретуз","речам","речах","речей","речек","речка","речке","речки","речку","речью","решай","решал","решат","решаю","решая","решен","решён","решет","решёт","решив","решил","решим","решит","решка","решке","решки","решку","реяла","реяли","реяло","реями","реять","ржаво","ржавь","ржала","ржали","ржало","ржами","ржать","ржете","ржёте","ржешь","ржёшь","ржите","ржище","риала","риале","риалу","риалы","ригам","ригах","ригой","ригою","рижан","ризам","ризах","ризка","ризой","ризою","рикша","рикше","рикши","рикшу","римск","ринга","ринге","ринги","рингу","ринит","ринка","рипах","рипса","рипус","риска","риске","риски","рискн","риску","рисом","рисуй","рисую","рисуя","ритма","ритме","ритму","ритмы","ритор","рифам","рифах","рифее","рифей","рифею","рифея","рифли","рифма","рифме","рифму","рифмы","рифов","рифом","рифта","рифте","рифту","рифты","рихой","рицин","ришар","ришта","рлица","роали","робам","робах","робей","робел","робею","робея","робил","робка","робки","робко","робой","робок","робос","робот","робою","робче","робят","ровен","ровик","ровна","ровне","ровни","ровно","ровну","ровны","ровню","ровня","рогам","роган","рогат","рогах","рогач","рогов","рогож","рогоз","рогом","родам","родан","родах","родей","родео","родив","родии","родий","родил","родим","родин","родит","родич","родию","родия","родна","родне","родни","родно","родны","родню","родня","родов","родом","родон","родст","родьк","родят","роете","роешь","рожай","рожал","рожам","рожах","рожаю","рожая","рожей","рожек","рожею","рожиц","рожка","рожке","рожки","рожку","рожна","рожок","рожон","рожью","розам","розан","розах","розга","розге","розги","розгу","розни","розно","розну","рознь","розов","розог","розой","розою","розыс","роила","роили","роило","роись","роите","роить","роишь","ройба","ройся","ройте","рокер","роков","роком","рокот","ролей","ролик","ролла","ролью","ролям","ролях","роман","ромаш","ромба","ромбе","ромбу","ромбы","ромео","ромку","ромом","ронам","рондо","ронжа","роняй","ронял","роняю","роняя","ропак","ропот","ропща","ропщи","ропщу","росам","росах","росин","роско","росла","росли","росло","рослы","росно","росой","росою","росси","россо","роста","росте","росто","ростр","росту","росты","росче","ротам","ротах","ротик","ротна","ротны","ротой","роток","ротон","ротор","ротою","ротши","рохле","рохли","рохлю","рохля","рошую","рощам","рощах","рощей","рощею","рощиц","роюсь","рояле","рояли","рояль","роялю","рояля","роями","роясь","рпите","ртами","ртище","ртути","ртуть","рубаи","рубай","рубак","рубал","рубах","рубаш","рубаю","рубая","рубеж","рубец","рубил","рубим","рубин","рубит","рубищ","рубка","рубке","рубки","рубку","рубле","рубли","рубль","рублю","рубля","рубок","рубца","рубце","рубцу","рубцы","рубят","ругае","ругай","ругал","ругат","ругаю","ругая","ругмя","ругне","ругни","ругну","ругню","ругня","рудам","рудах","рудни","рудню","рудой","рудом","рудою","рудый","рудым","рудяк","ружан","ружей","ружом","ружье","ружьё","ружью","ружья","руина","руине","руину","руины","рукав","рукам","руках","руков","рукой","рукоп","рукою","рулад","рулей","рулек","рулем","рулём","рулет","рулил","рулим","рулит","рулон","рулям","рулят","рулях","румба","румбе","румбу","румбы","румын","румян","рунам","рунах","рунет","рунец","руном","рунца","рунце","рунцу","рунцы","рупии","рупий","рупию","рупия","рупор","русак","русая","русел","русин","русла","русле","русло","руслу","русое","русой","русом","русою","русск","руссо","руста","русте","русту","русты","русую","русые","русый","русым","русых","русью","рутам","рутах","рутил","рутин","рутой","рутою","руффо","рухни","рухну","ручей","ручек","ручищ","ручка","ручке","ручки","ручку","ручни","ручье","ручьи","ручью","ручья","рушат","рушил","рушим","рушит","рушни","рыбак","рыбам","рыбах","рыбец","рыбий","рыбин","рыбиц","рыбищ","рыбка","рыбке","рыбки","рыбку","рыбно","рыбой","рыбок","рыбол","рыбою","рыбье","рыбьи","рыбью","рыбья","рывка","рывке","рывки","рывку","рывок","рыгай","рыгал","рыгаю","рыгая","рыгну","рыдай","рыдал","рыдан","рыдаю","рыдая","рыжая","рыжее","рыжей","рыжем","рыжен","рыжею","рыжие","рыжий","рыжик","рыжим","рыжих","рыжую","рыкай","рыкал","рыкам","рыках","рыкаю","рыкая","рыкни","рыкну","рыков","рыком","рылам","рылах","рылец","рылом","рылся","рымом","рында","рынде","рынду","рынды","рынка","рынке","рынки","рынку","рынок","рыноч","рысак","рысей","рысий","рысих","рыска","рыске","рыску","рысца","рысье","рысьи","рысью","рысья","рысям","рысят","рысях","рытая","рытое","рытой","рытом","рытою","рытую","рытые","рытый","рытым","рытых","рытье","рытьё","рытью","рытья","рыхла","рыхли","рыхло","рыхлы","рыхлю","рыхля","рыцар","рычаг","рычал","рычат","рычим","рычит","рыщем","рыщет","рыщут","рьяна","рьяно","рьяны","рэкет","рэлее","рэлей","рэлею","рэлея","рюмка","рюмке","рюмки","рюмку","рюмок","рюхам","рюхах","рюхой","рюхою","рюшам","рюшах","рюшей","рюшем","рюшка","рябая","рябил","рябим","рябин","рябит","рябки","ряблю","рябое","рябой","рябок","рябом","рябою","рябух","рябую","рябые","рябый","рябым","рябых","рябью","рябят","рядам","рядах","ряден","рядил","рядим","рядит","рядка","рядке","рядки","рядку","рядно","рядов","рядок","рядом","рядят","ряжен","рясам","рясах","ряска","ряске","ряски","ряску","рясны","рясой","рясою","ряшка","ряшке","ряшки","ряшку","с.-х.","саади","саами","сабан","сабза","сабле","сабли","саблю","сабля","сабур","саван","савва","савву","савел","савич","савка","савки","савла","сагам","саган","сагах","сагиб","сагой","сагою","садам","садах","саджа","садик","садил","садим","садис","садит","садка","садке","садки","садку","садня","садов","садок","садом","садче","садят","сажай","сажал","сажаю","сажая","сажей","сажен","сажею","сазан","саиса","сайга","сайге","сайги","сайгу","сайда","сайде","сайду","сайды","сайка","сайке","сайки","сайку","сайра","сайре","сайру","сайры","сайта","сайте","сайту","сайты","саква","сакле","сакли","саклю","сакля","саком","саксы","салаг","салак","салат","сален","салка","салки","салок","салол","салом","салон","салоп","салун","салфе","салют","саман","самая","самба","самбе","самбо","самбу","самбы","самец","самим","самих","самка","самке","самки","самку","самог","самое","самоё","самой","самок","самол","самом","самон","самою","самсо","самум","самую","самца","самце","самцу","самцы","самые","самый","самым","самых","санам","санах","санда","саней","санки","санкт","санно","санов","санок","саном","санта","саням","санях","сапер","сапёр","сапка","сапог","сапой","сапом","сапою","сапун","сарае","сараи","сарай","саран","сараю","сарая","сарда","сарде","сарду","саржа","сарже","саржи","саржу","сарос","сарра","сарре","сарыч","сатин","сатир","сауна","сауне","сауну","сауны","сахар","сахиб","сачка","сачке","сачки","сачку","сачок","сашей","сашка","сашке","сашки","сашку","сбавк","сбавь","сбеги","сбегу","сбежа","сбере","сбива","сбила","сбили","сбило","сбита","сбито","сбиты","сбить","сбоев","сбоем","сбоил","сбоим","сбоит","сбоку","сбора","сборе","сбору","сборы","сбоям","сбоят","сбоях","сбрас","сбред","сбрею","сбрив","сбрил","сбрит","сброд","сброс","сбруе","сбруи","сбруй","сбрую","сбруя","сбуде","сбуду","сбыла","сбыли","сбыло","сбыта","сбыте","сбыто","сбыту","сбыты","сбыть","свадь","сваей","сваею","свази","свали","свалю","свана","сване","свану","сваны","свара","сваре","свари","свару","свары","сварю","свата","свате","свато","свату","сваты","сваха","свахе","свахи","сваху","сваям","сваях","сведи","сведу","сведя","свеем","свежа","свеже","свежи","свежо","свези","свезт","свезу","свезя","свекл","свёкл","свекр","свела","свели","свело","сверг","сверк","сверл","свёрл","сверн","сверх","сверь","сверю","свест","свесь","света","свете","свети","светл","свето","светс","свету","светя","свеча","свече","свечи","свечк","свечо","свечу","свешу","свещи","свида","свиде","свидр","свила","свили","свило","свиль","свинг","свини","свинь","свист","свита","свите","свито","свиту","свиты","свить","свичи","свища","свище","свищи","свищу","свобо","свово","свода","своде","своди","своду","своды","сводя","своег","своей","своем","своём","своею","своея","свожу","свози","своим","своих","свойс","свора","своре","свору","своры","свояк","свыше","свяжи","свяжу","связа","связе","связи","связь","свята","святе","святи","свято","святы","свячу","свяще","сгиба","сгибе","сгибу","сгибы","сгину","сгинь","сглаз","сгнив","сгнил","сгнию","сгнои","сгною","сгона","сгоне","сгони","сгону","сгоню","сгори","сгорю","сгреб","сгрёб","сгруб","сгрыз","сгуби","сгущу","сдави","сдаем","сдаём","сдает","сдаёт","сдала","сдали","сдало","сдана","сдано","сданы","сдаст","сдать","сдача","сдаче","сдачи","сдачу","сдашь","сдают","сдвиг","сдвою","сдела","сдерж","сдерн","сдеру","сдоба","сдобе","сдобн","сдобу","сдобы","сдоен","сдуем","сдует","сдула","сдули","сдуло","сдуру","сдута","сдуто","сдуты","сдуть","сдуют","сеанс","севак","севас","север","севец","севка","севке","севки","севку","севок","севом","севши","сегод","сегюр","седай","седал","седан","седая","седел","сёдел","седею","седея","седин","седла","сёдла","седле","седло","седлу","седми","седмь","седое","седой","седок","седом","седою","седую","седые","седым","седых","седьм","сеете","сеешь","сезам","сезон","сейма","сейме","сейму","сейте","сейфа","сейфе","сейфу","сейфы","сейча","сейша","секач","секир","секла","секли","секло","секса","сексе","секст","сексу","секта","секте","секту","секты","секун","секут","селам","сёлам","селах","сёлах","селем","селен","селил","селим","селит","селиф","селом","селям","селян","селят","семга","сёмга","семге","сёмге","семги","сёмги","семгу","сёмгу","семей","семен","семид","семик","семин","семит","семна","семой","семом","семьд","семье","семьи","семью","семья","семян","сенаж","сенат","сеней","сенец","сенна","сенне","сенну","сенны","сеном","сент.","сенца","сенцо","сенцы","сенью","сеням","сенях","сепии","сепий","сепию","сепия","серая","серба","сербе","сербу","сербы","серге","серде","серди","сердц","сердя","сереб","серег","серёг","серед","серее","серей","серел","серею","серея","сержу","серии","серий","серин","серию","серия","серка","серко","серна","серне","серну","серны","серое","серой","сером","серою","серпа","серпе","серпу","серпы","серсо","серум","серую","серце","серые","серый","серым","серых","серьг","серье","серяк","сестр","сесть","сетам","сетах","сетей","сетка","сетке","сетки","сетку","сетов","сеток","сетом","сетуй","сетую","сетуя","сетью","сетям","сетях","сечей","сечем","сечём","сечен","сечён","сечет","сечёт","сечею","сечка","сечке","сечки","сечку","сечью","сеяла","сеяли","сеяло","сеяна","сеяно","сеяны","сеять","сжала","сжали","сжало","сжарю","сжата","сжато","сжаты","сжать","сжечь","сживу","сжила","сжили","сжило","сжима","сжить","сжуем","сжуём","сжует","сжуёт","сжуют","сзади","сзаду","сибир","сиваш","сивая","сивер","сивка","сивке","сивки","сивко","сивку","сивое","сивой","сивок","сивом","сивою","сивуч","сивую","сивые","сивый","сивым","сивых","сигай","сигал","сигам","сигар","сигах","сигаю","сигая","сигма","сигме","сигму","сигмы","сигов","сигом","сидев","сидел","сидет","сидим","сидит","сидка","сидмя","сидок","сидон","сидор","сидра","сидре","сидру","сидры","сидят","сидящ","сиена","сижок","сизая","сизиф","сизоб","сизое","сизой","сизом","сизою","сизую","сизые","сизый","сизым","сизых","сизяк","сийес","сикоз","сикха","сикхе","сикху","силам","силан","силах","силач","силен","силён","силил","силин","силка","силке","силки","силку","силой","силок","силом","силон","силос","силою","силур","сильн","сильф","симка","симке","симки","симку","симок","симон","симпа","синае","синап","сингл","синдх","синдя","синее","синей","синек","синел","синем","синен","синён","синец","синею","синея","синие","синий","синил","синим","синит","синих","синиц","синод","синус","синью","синюю","синяк","синят","синяя","сионе","сипае","сипаи","сипай","сипаю","сипая","сипел","сипим","сипит","сипла","сипли","сипло","сиплы","сиплю","сипну","сипят","сирая","сирен","сирии","сирин","сирию","сирия","сирое","сирой","сиром","сироп","сирот","сирою","сирую","сирые","сирый","сирым","сирых","сисей","сисек","сисею","систр","сисям","сисях","ситам","ситар","ситах","ситец","ситом","ситро","ситху","ситца","ситце","ситцу","ситцы","сифон","сичас","сияем","сияет","сияла","сияли","сияло","сияте","сиять","сияют","сияющ","скаже","скажи","скажу","сказа","сказе","сказк","сказу","скаку","скала","скале","скали","скало","скалу","скалы","скаль","скалю","скаля","скаме","сканд","скань","скарб","скарн","ската","скате","скати","скату","скаты","скаут","скача","скаче","скачи","скачк","скачу","сквер","сквид","сквоз","скеба","скебе","скебу","скебы","скейт","скетч","скибы","скида","скиде","скиду","скина","скине","скину","скины","скинь","скипа","скипе","скипу","скипы","скирд","скита","ските","скиту","скиты","скифа","скифе","скифу","скифы","склад","склей","склеп","склею","склиз","склок","склон","склюю","склян","скоба","скобе","скобу","скобы","ского","скоки","скола","сколе","сколу","сколы","сколь","сколю","сконф","скопа","скопе","скопи","скопо","скопу","скора","скоре","скорм","скоро","скорч","скоры","скоса","скосе","скоси","скосу","скосы","скота","скоте","скотт","скоту","скотч","скоты","скошу","скощу","скрап","скреб","скрёб","скреп","скрес","скрип","скрои","скрой","скром","скрою","скрыв","скрыл","скрып","скрыт","скряг","скудо","скуем","скуём","скует","скуёт","скука","скуке","скуки","скуку","скула","скуле","скули","скулу","скулы","скулю","скуля","скунс","скупа","скупи","скупо","скупы","скури","скурю","скучн","скушу","скуют","слаба","слабо","слабы","слава","славе","славн","славу","славы","славь","славя","слага","слада","сладк","сладо","сладу","сладь","слажу","слазь","слазя","слайд","слала","слали","слало","слань","слать","слаще","слева","слега","слеге","слеги","слегк","слегу","следа","следе","следи","следо","следс","следу","следы","следя","слежу","слеза","слезе","слези","слезу","слезы","слёзы","слезь","сленг","слепа","слепи","слепо","слепы","слепя","слета","слёта","слете","слёте","слети","слету","слёту","слеты","слёты","слечу","слечь","слива","сливе","сливу","сливы","сливя","слижи","слижу","слизи","слизь","слила","слили","слило","слита","слито","слиты","слить","сличи","сличу","слишк","слова","слове","слови","словн","слово","слову","слога","слоге","слоги","слогу","слоев","слоёв","слоек","слоем","слоен","слоён","сложа","сложи","сложн","сложу","слома","сломе","сломи","слому","сломя","слона","слоне","слону","слоны","слота","слоте","слоту","слоты","слоям","слоях","слуга","слуге","слуги","слугу","служа","служб","служе","служи","служу","слупи","слуха","слухе","слухи","слуху","случа","случи","случу","слуша","слыву","слыла","слыли","слыло","слыть","слыха","слыша","слыши","слышн","слышу","слышь","слюда","слюде","слюду","слюды","слюна","слюне","слюни","слюнк","слюно","слюну","слюны","слюню","слюня","сляба","слябе","слябу","слягу","смажу","смажь","смазн","смазы","смазь","смайл","смака","смаке","смаку","смалу","смани","сманю","смеем","смеет","смежу","смекн","смела","смели","смело","смелы","смель","смелю","смена","смене","смени","смену","смены","сменю","смерд","смерк","смерт","смерч","смерь","смерю","смеси","смесь","смета","смете","смети","смету","сметы","сметь","смеха","смехе","смехи","смеху","смеша","смеши","смешн","смешу","смещу","смеюс","смеют","смеял","смеяс","смеят","смире","смири","смирн","смирю","смита","смите","смога","смоге","смогу","смоем","смоет","смокв","смола","смоле","смоли","смолк","смолу","смолы","смоль","смолю","смоля","смори","сморщ","сморю","смотр","смоче","смочи","смочу","смочь","смоют","смрад","смугл","смуро","смута","смуте","смути","смутн","смуту","смуты","смуща","смуще","смущу","смште","смыва","смыве","смыву","смывы","смыла","смыли","смыло","смысл","смыта","смыто","смыты","смыть","смычо","смягч","смяла","смяли","смяло","смята","смяте","смято","смяты","смять","снадо","снами","снаст","снача","снега","снеге","снеги","снего","снегу","снеди","снедь","снеси","снесл","снесу","снеся","снижу","снизу","снизь","снили","снима","сними","сниму","снись","снищу","сноба","снобе","снобу","снобы","снова","снопа","снопе","снопу","снопы","сноса","сносе","сноси","сносу","сносы","сноха","снохе","снохи","сноху","сношу","снуем","снуём","снует","снуёт","снуть","снуют","сныть","снюсь","сняла","сняли","сняло","снясь","снята","снято","сняту","сняты","снять","собак","собер","собес","собир","соблю","собой","собол","собор","собою","собра","собст","событ","собью","совал","совам","соват","совах","совел","совер","совес","совет","совею","совея","совий","совик","совка","совке","совки","совку","совой","совок","совою","совре","соври","совру","совсе","совью","совят","согды","согла","согни","согну","содей","содер","содею","содит","содой","содом","содою","соеди","сожал","сожги","сожгу","сожже","сожми","сожму","сожра","сожри","сожру","созда","созер","созид","созна","созыв","сойга","сойде","сойди","сойду","сойдя","сойка","сойке","сойки","сойку","сойма","сойот","сойти","сокам","соках","соков","сокол","соком","сокра","сокро","солга","солгу","солда","солее","солей","солен","солею","солея","солил","солим","солит","солка","солке","солки","солку","солне","солнц","солод","солом","солон","солью","солям","соляр","солят","солях","сомам","сомах","сомне","сомни","сомну","сомов","сомом","сомон","сомры","сомят","сонар","сонат","соней","сонет","сонеч","сонею","сонин","сонма","сонме","сонму","сонно","сонны","сонце","соням","сонях","сообр","сообщ","соотв","сопел","сопер","сопим","сопит","сопка","сопке","сопки","сопку","сопла","сопле","сопли","сопло","соплу","соплю","сопля","сопок","сопор","сопро","сопру","сопун","сопят","сорва","сорви","сорву","сорго","сорил","сорим","сорит","сорно","сорок","сором","сорта","сорте","сорто","сорту","сортэ","сорус","сорят","сосав","сосал","сосед","сосем","сосём","сосен","сосет","сосёт","сосец","соска","соске","соски","соску","сосна","сосне","сосну","сосны","сосок","соста","состо","сосуд","сосун","сосут","сосца","сосце","сосцу","сосцы","сосчи","сотам","сотах","сотая","сотен","сотка","сотке","сотки","сотку","сотне","сотни","сотню","сотня","сотов","сотое","сотой","соток","сотом","сотою","сотри","сотру","сотря","сотую","сотые","сотый","сотым","сотых","соуса","соусе","соусо","соусу","соусы","софам","софах","софии","софит","софию","софия","софой","софою","софта","софте","софту","софты","софье","софьи","софью","софья","сохам","сохах","сохла","сохли","сохло","сохне","сохни","сохну","сохой","сохою","сохра","социа","сочен","сочла","сочли","сочло","сочна","сочне","сочни","сочно","сочны","сочню","сочня","сочок","сочти","сочту","сочтя","сошек","сошел","сошёл","сошка","сошке","сошки","сошку","сошла","сошли","сошло","сошлю","сошье","сошью","союза","союзе","союзу","союзы","спада","спаде","спади","спаду","спады","спаев","спаек","спаем","спазм","спала","спали","спало","спалю","спама","спаме","спаму","спаса","спасе","спаси","спасо","спаст","спасу","спати","спать","спаяв","спаяй","спаял","спаям","спаян","спаях","спаяю","спеет","спеки","спеку","спела","спели","спело","сперв","сперт","спёрт","спеси","спесь","спета","спето","спеты","спеть","спеху","спец.","спеца","спеце","специ","спецу","спецы","спечь","спеша","спеши","спешу","спеют","спили","спилю","спина","спине","спину","спины","спира","спири","спиро","спирт","спирю","спиря","списа","списк","спите","спить","спица","спице","спицу","спицы","спича","спиче","спичи","спичк","спичу","спиши","спишу","спишь","сплав","сплел","сплёл","сплес","сплин","сплит","сплош","сплыл","сплят","споем","споём","споен","споет","споёт","споив","споил","споим","споит","споко","сполз","спора","споре","спори","споро","спорт","спору","споры","спорь","спорю","споря","спосо","спочи","споют","споят","справ","спраш","спрос","спрош","спрут","спрял","спрят","спуда","спуде","спуду","спурт","спуск","спуст","спуща","спущу","спышь","спяти","спять","спячу","спящи","сравн","сраже","сражу","срази","сразу","срама","сраме","срами","сраму","срамя","сраск","сращу","среда","среде","среди","средн","средс","среду","среды","средь","срежу","срежь","среза","срезе","срезу","срезы","сроду","сроем","сроет","срока","сроке","сроки","сроко","сроку","срост","сроют","сруба","срубе","сруби","срубу","срубы","срыва","срыве","срыву","срывы","срыла","срыли","срыло","срыта","срыто","срыты","срыть","сряду","ссади","ссажу","ссебя","ссечь","ссора","ссоре","ссори","ссору","ссоры","ссорь","ссорю","ссоря","ссуда","ссуде","ссуди","ссуду","ссуды","ссужу","ссыла","ссыпь","става","стави","ставр","ставш","ставы","ставь","ставя","стада","стаде","стадо","стаду","стаей","стаек","стает","стаею","стажа","стаже","стажи","стажу","стаза","стазе","стазу","стазы","стака","стала","стали","стало","сталы","сталь","сталя","стамб","стами","стана","стане","стани","стано","станс","стану","станц","станы","стань","стара","старе","стари","старо","старт","стару","старц","старч","старш","стары","старь","старю","старя","стати","статс","стать","стащи","стащу","стаяв","стаял","стаям","стаях","ствол","створ","стега","стезе","стези","стезю","стезя","стека","стеке","стеки","стекл","стеку","стела","стеле","стели","стелу","стелы","стель","стелю","стеля","стема","стеме","стему","стемы","стена","стенд","стене","стено","стену","стены","степа","степе","степи","степс","степу","степы","степь","степя","стерв","стерт","стёрт","стесн","стечь","стешу","стигм","стиле","стили","стило","стиль","стилю","стиля","стирк","стиха","стихе","стихи","стихо","стиху","стлал","стога","стоге","стоги","стогн","стогу","стоек","стоик","стоил","стоим","стоит","стойл","стойт","стока","стоке","стоки","стокс","стоку","стола","столб","столе","столи","столо","столп","столу","столы","столь","стона","стоне","стони","стону","стоны","стопа","стопе","стопу","стопы","сторе","сторо","стору","сторы","стоты","сточи","сточу","стояв","стояк","стоял","стоян","стоят","стоящ","страд","страж","страз","страм","стран","страс","страх","страш","стрек","стрел","стриг","стриж","стрий","строб","строг","строе","строж","строи","строй","строк","строп","строф","строю","строя","струг","струе","струи","струй","струм","струн","струп","струс","струю","струя","стряс","студе","студи","студя","стужа","стуже","стужи","стужу","стука","стуке","стуки","стукн","стуку","стула","стуле","стулу","стуль","ступа","ступе","ступи","ступу","ступы","стуса","стуча","стучи","стучу","стыда","стыде","стыди","стыдл","стыдн","стыду","стыдя","стыжу","стыка","стыке","стыки","стыку","стыла","стыли","стыло","стыну","стынь","стырь","стырю","стыть","стяга","стяге","стягу","стяни","стяну","суаре","субал","суббо","сувой","сугуб","судак","судам","судар","судах","судеб","судей","судил","судим","судит","судию","судия","судка","судке","судки","судку","судна","судне","судно","судну","судов","судок","судом","судор","судьб","судье","судьи","судью","судья","судят","суета","суете","суёте","суету","суеты","суешь","суёшь","сужай","сужал","сужаю","сужая","сужде","сужен","сузив","сузил","сузим","сузит","сузят","суйся","суйте","сукам","суках","сукин","сукна","сукне","сукно","сукну","сукню","суков","сукой","суком","сукон","сукою","сулеи","сулей","сулен","сулён","сулею","сулея","сулил","сулим","сулит","сулое","сулой","сулою","сулоя","сулье","сулят","сумас","сумат","сумах","сумев","сумей","сумел","сумер","сумет","сумёт","сумею","сумка","сумке","сумки","сумку","сумма","сумме","сумму","суммы","сумни","сумой","сумок","сумою","сумра","сунду","сунем","сунет","сунна","сунув","сунул","сунут","суоми","супам","супах","супер","супец","супин","супов","супом","супос","супру","сурам","сурах","суржа","сурик","сурка","сурке","сурки","сурко","сурку","сурна","суров","сурой","сурок","суроп","сурою","сусак","сусек","сусла","сусле","сусло","суслу","сутаж","сутан","сутки","суток","сутра","сутре","сутру","сутры","сутью","сутяг","суфий","суфле","сухая","сухие","сухим","сухих","сухое","сухой","сухом","сухою","сухум","сухую","сучат","сучек","сучен","сучий","сучил","сучим","сучит","сучка","сучке","сучки","сучку","сучок","сучье","сучьи","сучью","сучья","сушам","сушат","сушах","сушей","сушек","сушен","сушею","сушил","сушим","сушит","сушка","сушке","сушки","сушку","сушью","сущая","сущее","сущей","сущем","сущес","сущею","сущие","сущий","сущик","сущим","сущих","сущно","сущую","суюсь","суясь","сфена","сфене","сфену","сфера","сфере","сферу","сферы","схват","схема","схеме","схему","схемы","схима","схиме","схимн","схиму","схимы","схитр","схода","сходе","сходи","сходу","сходы","сходя","схожа","схоже","схожи","схожу","схоро","сцеди","сцежу","сцена","сцене","сцену","сцены","сцепи","сцепу","сцепы","сцинк","счаст","счеса","счёса","счесе","счёсе","счесу","счёсу","счета","счёта","счете","счёте","счету","счёту","счеты","счёты","счеши","счешу","счита","счищу","сшибл","сшибу","сшила","сшили","сшило","сшита","сшито","сшиты","сшить","съеда","съеде","съеду","съезд","съела","съели","съело","съема","съёма","съеме","съёме","съему","съёму","съест","съеха","съешь","сынам","сынах","сынка","сынке","сынки","сынку","сынов","сынок","сыном","сыпал","сыпей","сыпет","сыпец","сыплю","сыпля","сыпуч","сыпью","сыпям","сыпят","сыпях","сырам","сырах","сырая","сырее","сырел","сырец","сырею","сырка","сырке","сырки","сырку","сыров","сырое","сырой","сырок","сыром","сырою","сырть","сырую","сырца","сырце","сырцу","сырцы","сырые","сырым","сырых","сырье","сырьё","сырью","сырья","сыска","сыске","сыску","сысой","сытая","сытен","сытна","сытно","сытны","сытог","сытое","сытой","сытом","сытою","сытую","сытые","сытый","сытым","сытых","сытью","сычам","сычах","сычей","сычом","сычуг","сыщем","сыщет","сыщик","сыщиц","сыщут","сэрам","сэрах","сэров","сэром","сюжет","сюита","сюите","сюиту","сюиты","сюрпр","сюрту","сядем","сядет","сядут","сядьт","сяжки","сяжок","сякая","сякие","сяким","сяких","сякое","сякой","сяком","сякою","сякую","табак","табес","табл.","табло","табор","табун","табха","табхе","табхи","тавот","тавра","тавре","таври","тавро","тавру","тавры","тагал","таган","таете","таешь","тазам","тазах","тазик","тазов","тазом","таила","таили","таило","таись","таите","таить","таишь","тайга","тайге","тайги","тайгу","тайко","тайма","тайме","тайму","таймы","тайна","тайне","тайни","тайно","тайну","тайны","тайте","так-с","такая","также","такие","такий","таким","таких","таков","таког","такое","такой","таком","такою","такса","таксе","такси","таксу","таксы","такта","такте","такту","такты","такую","такыр","талан","талая","талей","талер","талес","талие","талии","талий","талик","талиф","талию","талия","талое","талой","талом","талон","талою","талую","талые","талый","талым","талых","талыш","талье","тальи","тальк","талью","талья","талям","талях","тамга","тамге","тамги","тамгу","тамер","тамил","тамто","танго","таней","танец","танин","танка","танке","танки","танку","танта","танти","танто","танца","танце","танцу","танцы","тапер","тапёр","тапир","тапка","тапке","тапки","тапку","тапок","таран","тарас","тарик","тариф","тарой","тарою","тарут","таска","таски","тасуй","тасую","тасуя","татам","татар","татах","татей","татем","татка","татов","татом","татям","татях","тафта","тафте","тафту","тафты","тафья","тахин","тахта","тахте","тахту","тахты","тацет","тацит","тачал","тачаю","тачая","тачек","тачка","тачке","тачки","тачку","ташка","ташке","ташки","тащат","тащил","тащим","тащит","таюсь","таяла","таяли","таяло","таясь","таяся","таять","твари","тварь","тваря","тверд","твёрд","тверж","твери","тверь","твида","твиде","твиду","твина","твине","твину","твист","твиши","твово","твоег","твоей","твоем","твоём","твоею","твоея","твоим","твоих","творе","твори","творю","творя","театр","тевкр","тегам","тегах","тегов","тегом","тезам","тезах","тезис","тезка","тёзка","тезке","тёзке","тезки","тёзки","тезку","тёзку","тезой","тезок","тёзок","тезою","теизм","теина","теине","теину","теист","текла","текли","текло","текст","текут","текуч","текущ","телам","телах","телег","тележ","телес","телеф","телец","телик","телка","тёлка","телке","тёлке","телки","тёлки","телку","тёлку","телль","телля","телок","тёлок","телом","телят","темам","темах","тембр","темен","тёмен","темна","темне","темни","темно","тёмно","темну","темны","темню","темня","темой","темою","темпа","темпе","темпу","темпы","темью","тенге","теней","тенек","тенёк","тенет","тенёт","тению","тенор","тента","тенте","тенту","тенты","тенью","теням","тенях","тепел","тёпел","тепер","тепла","тепле","тепло","теплу","теплы","тепля","тереб","терем","терец","терза","терка","тёрка","терке","тёрке","терки","тёрки","терку","тёрку","терла","тёрла","терли","тёрли","терло","тёрло","терма","терме","терму","термы","терна","тёрна","терне","тёрне","терну","тёрну","терок","тёрок","терпе","терпи","терпл","терпя","терра","терся","тёрся","терта","тёрта","терто","тёрто","терты","тёрты","теряй","терял","терят","теряю","теряя","тесак","тесал","тесан","тёсан","тесен","тесин","теска","тёска","теске","тёске","тески","тёски","теску","тёску","тесла","тесло","тесна","тесни","тесно","тесны","тесню","тесня","тесок","тёсок","тесом","тёсом","теста","тесте","тесто","тесту","тесты","тесть","тестю","тестя","тетей","тётей","тетею","тётею","тетив","тетин","тётин","тетка","тётка","тетке","тётке","тетки","тётки","тетку","тётку","теток","тёток","тетра","тетям","тётям","тетях","тётях","теург","техн.","техно","техпд","течам","течах","течей","течен","течет","течёт","течка","течке","течки","течку","течью","тешат","тешей","тёшей","тешем","тешет","тешею","тёшею","тешил","тешим","тешит","тешка","тёшка","тешут","тещам","тёщам","тещах","тёщах","тещей","тёщей","тещею","тёщею","тещин","тёщин","тиара","тиаре","тиару","тиары","тигле","тигли","тиглю","тигля","тигра","тигре","тигру","тигры","тикай","тикал","тикам","тиках","тикаю","тикая","тиков","тиком","тильд","тимин","тимол","тимоф","тимус","тиной","тиною","типаж","типам","типах","типец","типик","типич","типов","типом","типун","тирад","тираж","тирам","тиран","тирах","тиров","тиром","тирса","тирсе","тирсу","тирсы","тирую","тисам","тисах","тиски","тисни","тисну","тисов","тисом","титан","титек","титла","титле","титло","титлу","титов","титом","титор","титра","титре","титру","титры","титул","тифом","тифон","тихая","тихие","тихий","тихим","тихих","тихое","тихой","тихом","тихон","тихою","тихую","тишин","тишью","ткала","ткали","ткало","ткана","ткани","ткано","тканы","ткань","ткать","ткача","ткаче","ткачи","ткачу","ткете","ткёте","ткешь","ткёшь","ткнем","ткнём","ткнет","ткнёт","ткнув","ткнул","ткнут","тлеем","тлеет","тлела","тлели","тлело","тлена","тлене","тлену","тлеть","тлеют","тлить","тлями","тмина","тмине","тмину","тмить","то-се","то-то","тобой","тобою","товар","товсь","тогам","тогах","тогда","тогой","тогою","тожде","тойон","тойот","токае","токай","токам","токах","токаю","токая","токма","токмо","токмя","токов","током","токуй","токую","токуя","толем","толка","толке","толки","толкн","толко","толку","толок","толом","толоп","толпа","толпе","толпи","толпу","толпы","толст","толче","толчк","толща","толще","толщи","толщу","толщь","тольк","томам","томас","томат","томах","томен","томик","томил","томим","томит","томлю","томна","томно","томны","томов","томом","томят","тонам","тонах","тондо","тонее","тоней","тонем","тонен","тонер","тонет","тоник","тонка","тонки","тонко","тонна","тонне","тонну","тонны","тонов","тонок","тоном","тонул","тонус","тонут","топаз","топай","топал","топаю","топая","топей","топик","топил","топим","топит","топка","топке","топки","топко","топку","топлю","топни","топну","топок","топом","топор","топот","топча","топче","топчи","топчу","топью","топям","топят","топях","торам","торах","торба","торбе","торбу","торбы","торга","торге","торги","торго","торгу","торен","торён","торец","торже","тории","торий","торит","торию","тория","торов","тором","торон","тороп","торос","торра","торре","торру","торры","торса","торсе","торсу","торсы","торта","торте","торту","торты","торфа","торфе","торфу","торца","торце","торцу","торцы","торча","торчу","тоска","тоске","тоски","тоско","тоску","тоста","тосте","тости","тосту","тосты","тотем","тотча","тохар","точат","точек","точен","точён","точил","точим","точит","точию","точка","точке","точки","точку","точна","точно","точны","точок","тошен","тошна","тошни","тошно","тошны","тощая","тощее","тощей","тощем","тощею","тощие","тощий","тощим","тощих","тощую","трабы","трава","траве","трави","травк","травм","траво","траву","травы","травя","траге","траги","тради","тракт","трала","трале","тралу","тралы","траль","тралю","траля","трама","транс","транш","трапа","трапе","трапп","трапу","трапы","трасс","траст","трата","трате","трати","трату","траты","трать","тратя","траур","трачу","треба","требе","требо","требу","требы","трево","трезв","трезо","трека","треке","треки","треку","трели","трель","трема","тремя","тренд","трень","трепа","трёпа","трепе","трёпе","трепу","трёпу","треск","трест","тресь","трете","трёте","трети","треть","треух","трефа","трефе","трефу","трефы","трешь","трёшь","треща","трещи","трещу","триад","триас","триба","трибе","трибу","трибы","тридц","триер","триех","тризм","трико","трина","триод","трипс","трите","трога","троек","троен","трожь","троил","троим","троит","троих","тройк","троки","тромб","тромп","трона","троне","трону","троны","тронь","тропа","тропе","тропу","тропы","троса","тросе","трост","тросу","тросы","трота","троте","троту","трофи","трохи","трояк","троят","труба","трубе","труби","трубк","трубу","трубы","трубя","труда","труде","труди","трудн","трудо","труду","труды","труню","труня","трупа","трупе","трупп","трупу","трупы","труса","трусе","трусу","трусы","трусь","труся","трута","труте","труту","труха","трухе","трухи","труху","трушу","трюка","трюке","трюки","трюку","трюма","трюме","трюмо","трюму","трюмы","трюши","трясе","тряси","трясу","тряся","тубам","тубах","тубой","тубою","тубус","тугае","тугаи","тугай","тугаю","тугая","тугие","тугим","тугих","тугое","тугой","тугом","тугою","тугун","тугую","тужат","тужил","тужим","тужит","тузам","тузах","тузик","тузил","тузим","тузит","тузов","тузом","тузят","тукал","тукан","тукаю","тукая","туком","тулей","тулии","тулий","тулию","тулия","тулон","тулуз","тулук","тулуп","тулье","тульи","тулью","тулья","туляк","тумак","туман","тумба","тумбе","тумбу","тумбы","тумор","тунбе","тунга","тунге","тунгу","тунец","туник","тунца","тунце","тунцу","тунцы","тупая","тупее","тупей","тупел","тупец","тупею","тупея","тупик","тупил","тупим","тупит","тупиц","туплю","тупое","тупой","тупом","тупою","тупую","тупые","тупым","тупых","тупыш","тупят","турам","турах","турий","турка","турке","турки","турку","турне","турни","турну","туров","турок","туром","туррр","турье","турьи","турью","турья","турят","тускл","тутор","тутти","туфам","туфах","туфле","туфли","туфлю","туфля","туфов","туфом","туфта","туфте","туфту","туфты","тухла","тухли","тухло","тухну","тучам","тучах","тучей","тучек","тучен","тучею","тучка","тучке","тучки","тучку","тучна","тучно","тучны","тушам","тушат","тушах","тушей","тушек","тушем","тушен","тушею","тушил","тушим","тушин","тушит","тушка","тушке","тушки","тушку","тушью","туями","тщась","тщесл","тщета","тщете","тщету","тщеты","тщись","тщусь","тыкай","тыкал","тыкаю","тыкая","тыква","тыкве","тыкву","тыквы","тыком","тылам","тылах","тылов","тылом","тымиш","тынка","тынке","тынки","тынку","тынок","тыном","тырил","тырим","тырит","тырла","тырле","тырло","тырлу","тырса","тырсу","тырят","тысяч","тычем","тычет","тычка","тычке","тычки","тычку","тычок","тычут","тьера","тьмой","тьмою","тьпфу","тэгам","тэгах","тэгов","тэгом","тэкое","тэкой","тэуле","тю-тю","тюбик","тюкал","тюкам","тюках","тюкаю","тюкая","тюкни","тюкну","тюков","тюком","тюлек","тюлем","тюнен","тюнер","тюник","тюрби","тюрей","тюрем","тюрею","тюрка","тюрке","тюрки","тюрку","тюрок","тюрьм","тюрюк","тютей","тютею","тютюн","тютям","тютях","тюфяк","тюхам","тюхах","тюхой","тюхою","тючка","тючке","тючки","тючку","тючок","тябла","тябло","тяблы","тягай","тягал","тягач","тягаю","тягая","тягла","тягло","тягой","тягот","тягою","тягуч","тяжам","тяжах","тяжба","тяжбе","тяжбу","тяжбы","тяжей","тяжек","тяжел","тяжёл","тяжка","тяжки","тяжко","тяжом","тяжче","тямлю","тянем","тянет","тянул","тянут","тяпка","тяпке","тяпки","тяпку","тяпни","тяпну","тяпок","тятей","тятек","тятею","тятям","тятях","уазик","убавь","убега","убеги","убегу","убеди","убежа","убежд","убежу","убери","уберу","убива","убийс","убийц","убила","убили","убило","убира","убита","убито","убиты","убить","убога","убоги","убого","убоев","убоем","убора","уборе","убору","уборы","убоям","убоях","убрав","убрал","убран","убрат","убрел","убрёл","убрус","убуду","убыла","убыли","убыло","убыль","убыто","убыть","убьем","убьём","убьет","убьёт","убьют","уважа","уваже","уважу","уважь","увала","увари","уварю","уведи","уведу","уведя","увези","увезл","увезт","увезу","увезя","увела","увели","увело","увере","увери","уверо","уверт","уверх","уверь","уверю","уверя","увесь","увеча","увечн","увечу","увечь","увеша","увида","увиде","увиди","увидя","увижу","увила","увили","увило","увита","увито","увиты","увить","увлек","увлёк","увлеч","увода","уводе","уводи","уводу","уводя","увожу","увоза","увозе","увози","увозу","увозя","уволь","уволю","увраж","увьем","увьём","увьет","увьёт","увьют","увяжу","увяла","увяли","увяло","увяну","увянь","угада","угара","угаре","угару","угаси","угашу","углам","углах","углей","углем","углём","углов","углом","углуб","углям","углях","угнав","угнал","угнан","угнах","угова","угово","угода","угоди","угодн","угоду","угодь","угожу","уголк","уголо","уголь","угона","угоне","угони","угону","угоны","угоню","угори","угорь","угорю","угощу","угрей","угрем","угрём","угрож","угроз","угрою","угрюм","угрям","угрят","угрях","удава","удаве","удави","удавл","удаву","удавы","удала","удали","удало","удалы","удаль","удалю","удаля","удара","ударе","удари","удару","удары","ударь","ударю","удача","удаче","удачи","удачу","удвое","удвой","удвою","удела","уделе","удели","уделу","уделы","уделю","удерж","удеру","удиви","удивл","удила","удили","удило","удина","удине","удино","удину","удины","удите","удить","удишь","удобн","удовл","удово","удода","удоде","удоду","удоды","удоев","удоем","удоен","удоям","удоях","удрав","удрал","удруг","удуши","удушу","удэге","уедем","уедет","уедим","уедин","уедут","уедят","уезда","уезде","уезду","уезды","уезжа","уезжу","уесть","уехав","уехал","ужала","ужали","ужало","ужаль","ужалю","ужами","ужарю","ужаса","ужасе","ужасн","ужасо","ужасу","ужасы","ужата","ужать","ужели","ужель","уживч","ужина","ужине","ужину","ужины","ужмем","ужмём","ужмет","ужмёт","ужмут","узами","узбек","узвар","уздам","уздах","уздой","уздою","уздцы","узень","узина","узине","узину","узины","узить","узкая","узкие","узкий","узким","узких","узко-","узкое","узкой","узком","узкою","узкую","узлам","узлах","узлов","узлом","узнав","узнае","узнай","узнал","узнан","узнат","узнаю","узник","узниц","узора","узоре","узору","узоры","узрев","узрел","узрет","узрим","узрит","узрят","уйгур","уйдем","уйдём","уйдет","уйдёт","уйдеш","уйдут","уймем","уймём","уймет","уймёт","уймой","уймою","уймут","укаем","укает","укаже","укажи","укажу","указа","указе","указу","указы","укала","укали","укало","укати","укать","укачу","укают","уклад","уклон","укола","уколе","уколи","уколу","уколы","уколю","укора","укоре","укори","укоро","укору","укоры","укорю","укоря","укоса","укосе","укосу","укосы","украв","украд","украл","украш","укрой","укроп","укрою","укрут","укрыв","укрый","укрыл","укрыт","укрюк","уксус","укуса","укусе","укуси","укусу","укусы","укушу","улади","уладь","улажу","улана","улане","улану","уланы","улара","уларе","улару","улары","улащу","улепе","улета","улёта","улете","улёте","улету","улёту","улечу","улещу","улизн","улика","улике","улики","улику","улисс","улита","улите","улиту","улиты","улица","улице","улицу","улицы","уличи","уличу","улова","улове","улови","улову","уловы","уложе","уложи","уложу","улуса","улусе","улусу","улуча","улучи","улучу","улучш","улыба","улыбк","улыбн","улыбо","ульев","ульем","ульям","ульях","улюлю","умаем","умает","умали","умалю","умами","умани","умащу","умают","умаяв","умаял","умбра","умбре","умбру","умбры","умеем","умеет","умейн","умела","умели","умело","умелы","умень","умере","умерш","умерь","умерю","умета","умёта","умете","умёте","умету","умёту","уметь","умещу","умеют","умиле","умили","умилю","умира","умище","умная","умнее","умней","умнел","умнем","умнём","умнет","умнёт","умнею","умнея","умник","умниц","умное","умнож","умной","умном","умною","умнут","умную","умные","умный","умным","умных","умоем","умоет","умоли","умолк","умолю","умоля","умора","уморе","умори","умору","уморы","уморю","умоют","умрем","умрём","умрет","умрёт","умрут","умчав","умчал","умчат","умчим","умчит","умыла","умыли","умыло","умыта","умыто","умыты","умыть","умяла","умяли","умяло","умята","умято","умяты","умять","унаби","ундер","унеси","унесу","унеся","унзер","униат","униве","унией","униею","униже","унижу","унизи","унизь","унион","уничт","униям","униях","уноса","уносе","уноси","уносу","унося","уношу","унтам","унтах","унтер","унтов","унтом","унции","унций","унцию","унция","уныла","уныло","унылы","уныни","уняла","уняли","уняло","унять","упада","упаде","упади","упаду","упала","упали","упало","упарь","упарю","упаси","упаст","упасу","упеки","упеку","уперт","упёрт","упечь","упира","уплел","уплёл","уплыв","уплыл","упоен","упоён","упоит","упоко","уполз","уполн","упоми","упора","упоре","упорн","упорс","упору","упоры","употр","управ","упраз","упрек","упрёк","упрем","упрём","упрет","упрёт","упрос","упрот","упруг","упрут","упрям","упущу","упыре","упыри","упырь","упырю","упыря","урале","урана","уране","урану","урвав","урвал","урвем","урвём","урвет","урвёт","урвут","урдою","урежу","урежь","уреза","урезе","урезу","урема","уреус","урина","урине","урину","урины","уркам","урках","уркой","уркою","урман","урнам","урнах","урной","урною","урода","уроде","уроду","уроды","урожа","урожу","урока","уроке","уроки","уроко","уроку","урона","уроне","урони","урону","уроны","уроню","урчал","урчат","урчим","урчит","урюка","урюке","урюку","усади","усадь","усаже","усажи","усажу","усами","усата","усато","усаты","усача","усаче","усачи","усачу","усвой","усвою","усевш","усеем","усеет","усеку","усечь","усеют","усеяв","усеял","усеян","усиди","усижу","усика","усике","усики","усику","усиле","усили","усиль","усилю","усища","усище","усищи","усищу","услав","услал","услан","услов","услуг","услыш","усмех","усмеш","усмот","уснем","уснём","уснет","уснёт","уснув","уснул","уснут","успев","успей","успел","успех","успею","успок","устав","устал","устам","устар","устах","устаю","устий","устно","устое","устои","устой","устою","устоя","устра","устре","устро","уступ","устье","устью","устья","усыпи","усыпь","утаен","утаён","утаив","утаил","утаим","утаит","утаще","утащи","утащу","утаят","утвер","утеку","утере","утери","утерт","утёрт","утерю","утеря","утеса","утёса","утесе","утёсе","утесу","утёсу","утесы","утёсы","утеха","утехе","утехи","утеху","утечь","утеше","утешу","утешь","утиле","утиль","утилю","утиля","утица","утиши","утишу","уткам","уткан","утках","уткни","уткну","уткой","уткою","утлая","утлое","утлой","утлом","утлою","утлую","утлые","утлый","утлым","утлых","утоли","утолю","утоми","утони","утону","утопи","утрам","утрат","утрах","утрем","утрём","утрен","утрет","утрёт","утрой","утром","утрою","утрут","утряс","утюга","утюге","утюги","утюгу","утюжа","утюжу","утюжь","утяни","утяну","утята","ухаба","ухабе","ухабу","ухабы","ухаем","ухает","ухала","ухали","ухало","ухарь","ухать","ухают","ухват","ухнем","ухнет","ухнув","ухнул","ухнут","ухода","уходе","уходи","уходу","уходы","уходя","ухожу","ухожь","уценю","уцепи","участ","учась","учать","учащу","учеба","учёба","учебе","учёбе","учебу","учёбу","учебы","учёбы","учена","учено","учену","учены","учеса","учёса","учесе","учёсе","учесу","учёсу","учета","учёта","учете","учёте","учету","учёту","учила","учили","учило","учини","учиню","учись","учите","учить","учишь","учреж","учтем","учтём","учтен","учтён","учтет","учтёт","учтив","учтут","учуем","учует","учусь","учуют","учуяв","учуял","учуян","учхоз","ушами","ушаст","ушата","ушате","ушату","ушаты","ушиба","ушибе","ушибу","ушибы","ушила","ушили","ушило","уширю","ушить","ушица","ушице","ушицу","ушицы","ушкам","ушкан","ушках","ушков","ушком","ушкуе","ушкуи","ушкуй","ушкую","ушкуя","ушлая","ушлем","ушлём","ушлет","ушлёт","ушлое","ушлой","ушлом","ушлою","ушлую","ушлые","ушлый","ушлым","ушлых","ушлют","ушная","ушник","ушное","ушной","ушном","ушною","ушную","ушные","ушным","ушных","ушьем","ушьём","ушьет","ушьёт","ушьют","ущеми","ущерб","уютен","уютна","уютно","уютны","уютом","уязви","уязвл","уясни","уясню","фабра","фабрю","фабря","фабул","фавна","фавне","фавну","фавны","фавор","фавус","фагам","фагах","фагов","фагом","фагот","фадей","фазам","фазан","фазах","фазис","фазой","фазою","файла","файле","файлу","файлы","факел","факир","факса","факсе","факсу","факсы","факта","факте","факти","факто","факту","факты","фалал","фалам","фалах","фалда","фалде","фалду","фалды","фалов","фалом","фальс","фальц","фальш","фамил","фанат","фанга","фанге","фангу","фанер","фанза","фанзе","фанзу","фанзы","фанта","фанте","фанту","фанты","фарад","фарам","фарах","фарой","фарою","фарса","фарсе","фарси","фарсу","фарсы","фарта","фарте","фарту","фарты","фарша","фарше","фаршу","фасад","фасет","фаска","фаске","фаски","фаску","фасок","фасом","фасон","фасуй","фасую","фасуя","фатам","фатах","фатер","фатой","фатом","фатою","фатум","фатюй","фауна","фауне","фауну","фауны","фауст","фацет","фации","фаций","фацию","фация","фаянс","федор","федос","федот","федра","федьк","фекла","фелон","фельд","фелюг","фенам","фенах","феней","фенею","фении","фений","фенил","фению","фения","фенов","фенол","феном","фёном","феням","фенях","ферзе","ферзи","ферзь","ферзю","ферзя","ферма","ферме","ферми","ферму","фермы","ферта","ферте","ферту","феска","феске","фески","феску","фесок","фетва","фетве","фетву","фетвы","фетиш","фетра","фетре","фетру","фетюк","фефер","феями","фиакр","фиата","фиате","фиату","фиаты","фибра","фибре","фибру","фибры","фигам","фигах","фигли","фигне","фигни","фигню","фигня","фигой","фигою","фигур","фидер","фидий","фиест","фижмы","физии","физий","физик","физич","физию","физия","фикса","фиксе","фиксу","фиксы","фикус","филат","филее","филей","филер","филёр","филею","филея","филин","филип","филия","филол","филос","фильм","филях","фимоз","финал","финик","финиш","финка","финке","финки","финку","финна","финне","финну","финны","финок","финта","финте","финти","финту","финты","финтя","финчу","фиорд","фирма","фирме","фирму","фирмы","фирна","фирне","фирну","фиска","фиске","фиску","фитам","фитах","фитин","фитой","фитою","фифам","фифах","фифой","фифою","фишек","фишка","фишке","фишки","фишку","флага","флаге","флаги","флагу","фланг","флане","фланк","флегм","флейт","флейц","флера","флёра","флере","флёре","флеру","флёру","флеши","флешь","флиге","флика","флике","флику","флинт","флирт","флокс","флора","флоре","флору","флоры","флота","флоте","флотс","флоту","флоты","флюид","флюса","флюсе","флюсу","флюсы","фляга","фляге","фляги","флягу","фобии","фобий","фобию","фобия","фойны","фокин","фоком","фокус","фолио","фольг","фомин","фомич","фомка","фомке","фомки","фомку","фомой","фомок","фомою","фонам","фонар","фонах","фонда","фонде","фонду","фонды","фонем","фонил","фонит","фонов","фоном","фонон","фонят","форда","форде","форду","форды","форел","форма","форме","форму","формы","форой","форос","форою","форса","форсе","форсо","форсу","форта","форте","форто","форту","форты","форум","форшу","фоска","фотам","фотах","фотия","фотка","фотке","фотки","фотку","фото-","фотов","фотог","фоток","фотом","фотон","фофан","фохта","фраер","фраза","фразе","фразу","фразы","фрака","фраке","фраки","фраку","франк","франт","франц","фрахт","фреза","фрезе","фрезу","фрезы","фрейм","френч","фреон","фридр","фриза","фризе","фризу","фризы","фрины","фрица","фрице","фрицу","фрицы","фрола","фронт","фрукт","фрунт","фтора","фторе","фтору","фу-ты","фугам","фугас","фугах","фугой","фугою","фужер","фузеи","фузея","фузии","фузию","фузия","фукай","фукал","фукаю","фукая","фукни","фукну","фукса","фуксе","фуксу","фукус","фуляр","фунта","фунте","фунту","фунты","фураж","фурам","фуран","фурах","фурии","фурий","фурию","фурия","фурма","фурме","фурму","фурмы","фурой","фурор","фурою","фурье","футам","футах","футер","футов","футом","футор","фуфла","фуфле","фуфло","фуфлу","фуэте","фыркн","фыров","фырок","фырча","фырчу","фьорд","фьють","фюйть","фюрер","ха-ха","хабар","хаджа","хадже","хаджи","хаджу","хаете","хаешь","хазам","хазар","хазах","хазой","хазою","хаить","хайла","хайле","хайло","хайлу","хайте","хакас","хакер","халам","халат","халах","халва","халве","халву","халвы","халда","халет","халиф","халой","халою","халуп","хамам","хамах","хамил","хамим","хамит","хамка","хамке","хамки","хамку","хамлю","хамов","хамок","хамом","хамса","хамсе","хамсу","хамсы","хамье","хамьё","хамью","хамья","хамят","ханам","ханах","ханжа","ханже","ханжи","ханжу","ханов","ханом","ханты","ханум","ханша","хаоса","хаосе","хаосу","хапай","хапал","хапан","хапаю","хапая","хапни","хапну","хапуг","хапун","харак","харда","харде","харду","харды","харей","харею","харит","харуф","харча","харче","харчи","харчо","харчу","харям","харях","хасид","хатам","хатах","хатка","хатке","хатки","хатку","хатой","хаток","хатою","хауса","хаусе","хаусу","хаусы","хафиз","хаяла","хаяли","хаяло","хаять","хвала","хвале","хвали","хвалу","хвалы","хвалю","хваля","хвата","хвате","хвати","хвату","хваты","хвать","хвачу","хвоей","хвоею","хвора","хвори","хворо","хворы","хворь","хвост","хвоща","хвоще","хвощи","хвощу","хе-хе","хедер","хедив","хеком","херес","херик","херил","херим","херит","хером","херуг","херят","хетты","хи-хи","хиазм","хибар","хиврю","хивря","хижин","хилая","хилее","хилей","хилич","хилое","хилой","хилом","хилою","хилус","хилую","хилые","хилый","хилым","хилых","хиляк","химер","химии","химик","химию","химия","химус","хинди","хинин","хинов","хиной","хинон","хиною","хиппи","хирей","хирел","хирею","хирея","хитам","хитах","хитер","хитёр","хитин","хитов","хитом","хитон","хитра","хитри","хитро","хитры","хитрю","хитря","хищен","хищна","хищно","хищны","хлада","хладе","хладу","хлама","хламе","хламо","хламу","хлеба","хлебе","хлебн","хлебо","хлебу","хлебы","хлева","хлеве","хлеву","хлест","хлёст","хлеще","хлещи","хлещу","хлище","хлопо","хлора","хлоре","хлору","хлупь","хлыст","хлыща","хлыще","хлыщи","хлыщу","хльст","хлюст","хляби","хлябь","хмара","хмарь","хмеле","хмель","хмелю","хмеля","хмура","хмуре","хмуро","хмуры","хмурь","хмурю","хмуря","хмыре","хмыри","хмырь","хмырю","хмыря","хныча","хнычу","хнычь","хо-хо","хоана","хобар","хобби","хобот","ходам","ходах","ходжа","ходик","ходил","ходим","ходит","ходка","ходки","ходко","ходня","ходов","ходок","ходом","ходун","ходче","ходят","ходяч","хозар","хозяи","хозяй","хокку","холен","холил","холим","холин","холит","холка","холке","холки","холку","холла","холле","холлу","холлы","холма","холме","холму","холмы","холод","холоп","холос","холст","холуе","холуи","холуй","холую","холуя","холят","хомою","хомут","хомяк","хорал","хорам","хорах","хорда","хорде","хорду","хорды","хорее","хорей","хорек","хорёк","хорем","хорём","хорею","хорея","хоров","хором","хорон","хорош","хорти","хорям","хорях","хотам","хотах","хотел","хотим","хотит","хотой","хотою","хотяй","хотят","хохла","хохле","хохлу","хохлы","хохма","хохме","хохми","хохму","хохмы","хохмя","хохол","хохот","хочем","хочет","хочеш","хощет","хощут","храбр","храма","храме","храму","храмы","храни","хранц","храню","храня","храпа","храпе","храпи","храпу","храпя","хрена","хрене","хрену","хрест","хрипа","хрипе","хрипи","хрипл","хрипу","хрипы","хрипя","христ","хрома","хроме","хромо","хрому","хромы","хрони","хруст","хруща","хруще","хрущи","хрущу","хрыча","хрыче","хрычи","хрычу","хряка","хряке","хряки","хряку","хряпа","хряск","хряст","хрясь","хряща","хряще","хрящи","хрящу","хтось","худая","худее","худей","худел","худен","худею","худея","худое","худож","худой","худом","худою","худую","худые","худым","худых","хукам","хуках","хуков","хуком","хулен","хулён","хулил","хулим","хулит","хулой","хулою","хулят","хумай","хунта","хунте","хунту","хунты","хурал","хурда","хурма","хурме","хурму","хурмы","хутор","хцешь","хыбыз","цадик","цанга","цанге","цанги","цангу","цапай","цапал","цапаю","цапая","цапка","цапле","цапли","цаплю","цапля","цапни","цапну","цапок","цапун","цапфа","цапфе","цапфу","цапфы","царап","царев","царёв","царей","царек","царёк","царем","царём","царил","царим","царит","цариц","царст","царям","царят","царях","цахур","цацам","цацах","цацей","цацек","цацею","цацка","цацке","цацки","цацку","цвела","цвели","цвело","цвель","цвета","цвете","цвето","цвету","цветы","цгали","цевка","цевке","цевки","цевку","цевок","цевье","цевьё","цевью","цевья","цедил","цедим","цедит","цедра","цедре","цедру","цедры","цедят","цежен","цезии","цезий","цезию","цезия","цезур","целая","целеб","целее","целей","целен","целик","целил","целим","целит","целию","целко","целов","целог","целое","целой","целом","целою","целуй","целую","целуя","целые","целый","целым","целых","целыя","целью","целям","целят","целях","цемен","ценам","ценах","ценен","ценза","цензе","цензу","цензы","ценил","ценим","ценит","ценна","ценно","ценны","ценоз","ценой","ценою","цента","центе","центр","центу","центы","ценур","ценят","цепам","цепах","цепей","цепка","цепке","цепки","цепко","цепку","цепне","цепни","цепню","цепня","цепов","цепок","цепом","цепче","цепью","цепям","цепях","церем","церии","церий","церию","церия","церкв","церко","цетан","цехам","цехах","цехин","цехов","цехом","циана","циане","циану","цибик","цикад","цикла","цикле","цикли","циклу","циклы","циклю","цикля","цилин","цимол","цинаш","цинга","цинге","цинги","цингу","циник","цинич","цинка","цинке","цинку","цирка","цирке","цирки","цирку","циста","цисте","цисту","цисты","цитат","цитир","цитра","цифра","цифре","цифро","цифру","цифры","цокай","цокал","цокаю","цокая","цокни","цокну","цокот","цугам","цугах","цугов","цугом","цукат","цурки","цуцик","цыган","цыкай","цыкал","цыкаю","цыкая","цыкни","цыкну","цыпка","цыпке","цыпки","цыпку","цыпля","цыпок","цыпоч","цюрих","чабан","чабер","чабёр","чагой","чагою","чадам","чадах","чадил","чадим","чадит","чадно","чадом","чадра","чадре","чадру","чадры","чадят","чаете","чаешь","чайка","чайке","чайки","чайку","чайни","чайно","чакан","чакон","чакра","чакре","чакру","чакры","чалам","чалах","чалая","чалил","чалим","чалит","чалка","чалке","чалки","чалку","чалма","чалме","чалму","чалмы","чалов","чалое","чалой","чалом","чалою","чалую","чалые","чалый","чалым","чалых","чалят","чанам","чанах","чанов","чаном","чапли","чарам","чарах","чарка","чарке","чарки","чарку","чарок","чарта","чарте","чарту","чарты","чаруй","чарую","чаруя","чарши","часам","часах","часик","часка","часке","часки","часку","часов","часок","часом","часта","часте","части","часто","часты","часть","частя","чатал","чатом","чахла","чахли","чахло","чахну","чахот","чачей","чачею","чашам","чашах","чашей","чашек","чашею","чашка","чашке","чашки","чашку","чащам","чащах","чащей","чащею","чаяла","чаяли","чаяло","чаями","чаяти","чаять","чвани","чебак","чебот","чёбот","чекал","чекам","чекан","чеках","чеков","чекой","чеком","чекою","челам","чёлам","челах","чёлах","челка","чёлка","челке","чёлке","челки","чёлки","челку","чёлку","челна","чёлна","челне","чёлне","челну","чёлну","челны","чёлны","челов","челок","чёлок","челом","чемер","чемод","чемто","чения","чепан","чепец","чепух","чепца","чепце","чепцу","чепцы","чепчи","черва","черве","черви","черво","черву","червы","червь","червю","червя","черед","черёд","через","черен","чёрен","череп","черна","черне","черни","черно","чёрно","черны","чёрны","чернь","черню","черня","черта","чёрта","черте","чёрте","черти","черто","черту","чёрту","черты","чертя","черчу","чесал","чесан","чёсан","ческа","чёска","ческе","чёске","чески","чёски","ческу","чёску","чесом","чёсом","чести","честн","често","честь","четве","четен","чётен","четий","четка","чётка","четки","чётки","четко","чётко","четку","четна","чётна","четно","чётно","четны","чётны","четой","четок","чёток","четою","четче","чётче","четъи","четыр","четьи","чехам","чехах","чехия","чехла","чехле","чехлу","чехлы","чехов","чехол","чехом","чечен","чечет","чечне","чечни","чешек","чешем","чешет","чешка","чешке","чешки","чешку","чешуе","чешуи","чешут","чешую","чешуя","чибис","чивая","чижам","чижах","чижей","чижик","чижов","чижом","чикал","чикаю","чикая","чилим","чинам","чинар","чинах","чинен","чинён","чинил","чиним","чинит","чинка","чинке","чинки","чинку","чинна","чинно","чинны","чинов","чином","чинуш","чинят","чипам","чипах","чипов","чипом","чипсы","чирей","чирик","чирка","чирке","чирки","чирку","чирок","чирье","чирьи","чирью","чирья","чисел","числа","числе","числи","число","числу","числю","числя","чиста","чисти","чисто","чисты","чистя","читав","читае","читай","читал","читан","читат","читаю","читая","читка","читке","читки","читку","чихай","чихал","чихаю","чихая","чихни","чихну","чихом","чичаг","чичас","чичер","чичик","чищен","члена","члене","члено","члену","члены","чомга","чомге","чомги","чомгу","чорта","чорту","чохом","чрева","чреве","чрево","чреву","чреда","чреде","чреду","чреды","чрезв","чрезм","чресл","чтени","чтете","чтёте","чтеца","чтеце","чтецу","чтецы","чтешь","чтёшь","чтива","чтиве","чтиво","чтиву","чтила","чтили","чтило","чтите","чтить","чтица","чтице","чтицу","чтицы","чтишь","чтоба","чтобы","чтото","чубам","чубат","чубах","чубов","чубом","чубук","чувак","чувал","чуваш","чувих","чувст","чувяк","чугун","чудак","чуден","чудес","чудик","чудил","чудим","чудит","чудищ","чудна","чудно","чудны","чудов","чудом","чудью","чудят","чуете","чуешь","чужак","чужан","чужая","чужда","чуждо","чужды","чужие","чужим","чужих","чужое","чужой","чужом","чужою","чужую","чуйка","чуйке","чуйку","чуйте","чукча","чукче","чукчи","чукчу","чулан","чулка","чулке","чулки","чулку","чулок","чумаз","чумак","чумка","чумке","чумки","чумку","чумой","чумою","чуней","чунею","чуням","чунях","чупри","чурек","чурка","чурке","чурки","чурку","чурок","чутка","чутки","чутко","чуток","чутче","чутье","чутьё","чутью","чутья","чухна","чухны","чухон","чучел","чучхе","чушек","чушка","чушке","чушки","чушку","чушью","чуяла","чуяли","чуяло","чуять","чхать","чхнет","чьего","чьему","чьето","чьими","шабаш","шабер","шабёр","шабли","шабот","шавка","шавке","шавки","шавку","шавок","шагай","шагал","шагам","шагах","шагаю","шагая","шагни","шагну","шагов","шагом","шажка","шажке","шажки","шажку","шажок","шайба","шайбе","шайбу","шайбы","шайка","шайке","шайки","шайку","шакал","шалав","шалаш","шалая","шалей","шалел","шалею","шалея","шалил","шалим","шалит","шалое","шалой","шалом","шалос","шалою","шался","шалун","шалую","шалые","шалый","шалым","шалых","шалью","шалям","шалят","шалях","шаман","шамбр","шамот","шампа","шанец","шанкр","шанса","шансе","шансу","шансы","шануй","шапка","шапке","шапки","шапку","шапок","шарад","шарам","шарап","шарах","шаржа","шарже","шаржи","шаржу","шарик","шарил","шарим","шарит","шарко","шарма","шарме","шарму","шармы","шаров","шарок","шаром","шарфа","шарфе","шарфу","шарфы","шарый","шарят","шассе","шасси","шасть","шатав","шатай","шатал","шатан","шатаю","шатая","шатен","шатер","шатёр","шатии","шатию","шатия","шатка","шатки","шатко","шатку","шатни","шатну","шатов","шаток","шатра","шатре","шатру","шатры","шатун","шаурм","шафер","шахам","шахах","шахер","шахид","шахов","шахом","шахта","шахте","шахту","шахты","шашек","шашка","шашке","шашки","шашку","шашни","шваба","швабе","швабр","швабу","швабы","швали","шваль","швами","шванк","швара","шварк","шварт","шведа","шведе","шведу","шведы","швеей","швеёй","швеею","швеёю","швейц","шверт","швеца","швеце","швецу","швеям","швеях","швырк","швырн","шевер","шевич","шевро","шедши","шеина","шеину","шеины","шеища","шеище","шеищи","шеищу","шейка","шейке","шейки","шейку","шейте","шейха","шейхе","шейхи","шейху","шелеп","шелес","шелка","шёлка","шелке","шёлке","шелки","шелку","шёлку","шелом","шельм","шельф","шемая","шемес","шенно","шенье","шеола","шепни","шепну","шепот","шёпот","шепта","шепча","шепчи","шепчу","шериф","шерла","шерле","шерлу","шерпы","шерри","шерст","шеста","шесте","шести","шестн","шесту","шесты","шесть","шефам","шефах","шефов","шефом","шеяку","шеями","шибал","шибаю","шибая","шибер","шибка","шибки","шибко","шибок","шибче","шигал","шизик","шиизм","шиита","шиите","шииту","шииты","шикай","шикал","шикаю","шикая","шикну","шиком","шикуй","шикую","шикуя","шилом","шился","шилья","шимми","шинам","шинах","шинел","шинка","шинке","шинки","шинку","шиной","шинок","шиною","шипам","шипах","шипел","шипен","шипим","шипит","шипке","шиплю","шипов","шипом","шипун","шипуч","шипят","ширил","ширим","ширит","ширма","ширме","ширму","ширмы","широк","широт","широч","ширью","ширят","шитая","шитво","шитик","шитое","шитой","шитом","шитою","шитую","шитые","шитый","шитым","шитых","шитье","шитьё","шитью","шитья","шифер","шифон","шифра","шифре","шифру","шифры","шихан","шихта","шихте","шихту","шихты","шишак","шишам","шишах","шишей","шишек","шишка","шишке","шишки","шишку","шишом","шкала","шкале","шкалу","шкалы","шкапа","шкапе","шкапы","шкаре","шкафа","шкафе","шкафу","шкафы","шквал","шкерт","шкета","шкете","шкету","шкеты","шкива","шкиве","шкиву","шкивы","шклов","шкода","шкоде","шкоду","шкоды","шкодя","школа","школе","школо","школу","школы","школь","шкота","шкоту","шкоты","шкура","шкуре","шкуру","шкуры","шкурю","шкуря","шлага","шлаге","шлагу","шлака","шлаке","шлаки","шлаку","шлама","шламе","шламу","шланг","шлеей","шлеёй","шлеек","шлеею","шлеёю","шлейф","шлема","шлеме","шлему","шлемы","шлете","шлёте","шлешь","шлёшь","шлите","шлифа","шлифе","шлифу","шлифы","шлиха","шлихе","шлиху","шлица","шлице","шлицу","шлицы","шлыка","шлыке","шлюза","шлюзе","шлюзу","шлюзы","шлюпа","шлюпе","шлюпу","шлюпы","шлюха","шлюхе","шлюхи","шлюху","шляпа","шляпе","шляпу","шляпы","шляха","шляхе","шляхи","шляху","шмата","шмате","шмату","шматы","шмеле","шмели","шмель","шмелю","шмеля","шмецк","шмигу","шмона","шмоне","шмону","шмуль","шнапс","шнека","шнеке","шнеки","шнеку","шнитт","шнура","шнуре","шнуру","шнуры","шоком","шопен","шопот","шорам","шорах","шорец","шорка","шорня","шорой","шорох","шорою","шорты","шоссе","шофер","шофёр","шпага","шпаге","шпаги","шпагу","шпаки","шпала","шпале","шпалу","шпалы","шпана","шпане","шпанс","шпану","шпаны","шпарь","шпарю","шпаря","шпата","шпате","шпату","шпаты","шпень","шпика","шпике","шпики","шпику","шпиле","шпили","шпиль","шпилю","шпиля","шпинь","шпион","шпису","шпица","шпице","шпицу","шпицы","шпона","шпоне","шпону","шпоны","шпора","шпоре","шпору","шпоры","шприц","шпрот","шпуля","шпунт","шпура","шпуре","шпуру","шпуры","шпынь","шрама","шраме","шраму","шрамы","шримс","шрифт","штаба","штабе","штабс","штабу","штабы","штамб","штамм","штамп","штанг","штаны","штата","штате","штату","штаты","штейн","штиле","штили","штиль","штилю","штиля","штифт","штока","штоке","штоки","штоку","штоль","штора","шторе","шторм","штору","шторы","штосе","штосс","штофа","штофе","штофу","штраф","штрек","штрих","штука","штуке","штуки","штуку","штурм","штуфа","штуфе","штуфу","штучк","штыка","штыке","штыки","штыку","штыль","штыре","штыри","штырь","штырю","штыря","шуана","шуане","шуану","шуаны","шубам","шубах","шубка","шубке","шубки","шубку","шубой","шубок","шубою","шугае","шугай","шугал","шугаю","шугая","шугой","шугою","шудра","шуйца","шулер","шульг","шульц","шумам","шумах","шумел","шумен","шумер","шумёр","шумим","шумит","шумка","шумке","шумки","шумко","шумку","шумлю","шумна","шумно","шумны","шумов","шумок","шумом","шумск","шумят","шунта","шунте","шунту","шунты","шурин","шурле","шуроч","шурпа","шурпе","шурпу","шурпы","шуруй","шуруп","шурую","шуруя","шурфа","шурфе","шурфу","шурфы","шурша","шурши","шуршу","шурья","шутам","шутах","шутил","шутим","шутит","шутих","шутка","шутке","шутки","шутко","шутку","шутли","шутов","шуток","шутом","шутят","шушва","шушун","шхеры","шхуна","шхуне","шхуну","шхуны","шьете","шьёте","шьешь","шьёшь","щавин","щадил","щадим","щадит","щадят","щаной","щебет","щебне","щебни","щебню","щебня","щегла","щегле","щеглу","щеглы","щегол","щедра","щедро","щедры","щекам","щеках","щекий","щекой","щекот","щёкот","щекою","щелей","щелка","щёлка","щелке","щёлке","щелки","щёлки","щелку","щёлку","щелок","щёлок","щелчк","щелью","щелям","щелях","щемил","щемит","щенка","щенке","щенки","щенку","щенок","щенят","щепам","щепах","щепет","щепка","щепке","щепки","щепку","щепой","щепок","щепою","щерил","щерим","щерит","щерят","щетка","щётка","щетке","щётке","щетки","щётки","щетку","щётку","щеток","щёток","щечек","щёчек","щечка","щёчка","щечке","щёчке","щечки","щёчки","щечко","щечку","щёчку","щипай","щипал","щипан","щипач","щипаю","щипая","щипет","щипец","щипка","щипке","щипки","щипку","щипли","щиплю","щипля","щипни","щипну","щипок","щипца","щипцы","щипят","щитам","щитах","щитик","щитка","щитке","щитки","щитку","щитов","щиток","щитом","щукам","щуках","щукин","щукой","щукою","щупай","щупал","щупам","щупах","щупаю","щупая","щупик","щупов","щупом","щурам","щурах","щурил","щурим","щурит","щурка","щуров","щурок","щуром","щурят","щучат","щучек","щучий","щучил","щучим","щучит","щучка","щучке","щучки","щучку","щучье","щучьи","щучью","щучья","ылдыз","эачем","эвбея","эвенк","эверс","эвона","эвося","эврик","эгида","эгиде","эгиду","эгиды","эгину","эгрет","эдаки","эдако","эдаку","эдема","эдеме","эдему","эдемы","эдесь","эдикт","эдипа","эдипе","эзопу","эйкем","эйлау","эквив","экера","экере","экеру","экзек","экзот","экими","экипа","эккер","эклер","эклог","экого","экому","эконо","экося","экран","экспе","экспо","экста","эксце","элеат","элита","элите","элиту","элиты","эллин","эльбе","эльфа","эльфе","эльфу","эльфы","элями","эмали","эмаль","эмбии","эмира","эмире","эмиру","эмиры","эммер","эндем","эндом","энерг","энзим","энная","энное","энной","энном","энною","энную","энные","энный","энным","энных","эозин","эолит","эолов","эоцен","эпика","эпике","эпики","эпику","эпода","эподе","эподу","эпонж","эпоса","эпосе","эпосу","эпоха","эпохе","эпохи","эпоху","эпузы","эпюра","эпюре","эпюру","эпюры","эразм","эрами","эрара","эраст","эрбии","эрбий","эрбию","эрбия","эргам","эргах","эргов","эргом","эрзац","эрзян","эркел","эркер","эроса","эросе","эросу","эсдек","эсера","эсере","эсеру","эсеры","эскиз","эспад","эспер","эспри","эссен","эстам","эстет","эстов","эстра","этажа","этаже","этажи","этажу","этака","этаки","этако","этаку","этана","этане","этану","этапа","этапе","этапу","этапы","этика","этике","этики","этико","этику","этила","этиле","этилу","этилы","этими","этнос","этово","этого","этому","этюда","этюде","этюду","этюды","эфами","эфеса","эфесе","эфесу","эфесы","эфика","эфиоп","эфира","эфире","эфирн","эфиру","эфиры","эфтом","эффек","эчень","юаней","юанем","юаням","юанях","юбкам","юбках","юбкой","юбкою","юбовь","юдоли","юдоль","южане","южная","южнее","южней","южное","южной","южном","южною","южную","южные","южный","южным","южных","юзами","юзист","юзыся","юккой","юккою","юкола","юлами","юлиан","юлией","юлила","юлили","юлило","юлите","юлить","юлишь","юлька","юмизм","юмора","юморе","юмору","юнгам","юнгах","юнгой","юнгою","юнеть","юнион","юниор","юница","юнице","юницу","юницы","юнкер","юнкор","юннат","юного","юному","юност","юноша","юноше","юноши","юношу","юнцам","юнцах","юнцов","юнцом","юными","юриди","юрист","юркай","юркал","юркам","юрках","юркаю","юркая","юркие","юркий","юрким","юрких","юркни","юркну","юрков","юркое","юркой","юрком","юркою","юркую","юрово","юрода","юроде","юроду","юртам","юртах","юртой","юртою","юрфак","юрьев","юрьич","юсуфа","ютами","ютись","ютясь","юферс","юфтью","юхнов","ючусь","юшкой","юшкою","ююбой","ююбою","ябеда","ябеде","ябеду","ябеды","яблок","яблон","явила","явили","явило","явилс","явись","явися","явите","явить","явишь","явкам","явках","явкой","явкою","явлен","являе","являй","являл","являю","являя","явная","явное","явной","явном","явною","явную","явные","явный","явным","явных","явств","явтух","явясь","ягами","ягеле","ягель","ягелю","ягеля","ягнят","ягода","ягоде","ягоду","ягоды","ягуар","ядами","ядови","ядоша","ядрам","ядрах","ядрен","ядрён","ядром","ядяше","язвам","язвах","язвил","язвим","язвит","язвлю","язвой","язвою","язвят","языка","языке","языки","языко","языку","язями","яичек","яичка","яичке","яички","яичко","яичку","яично","яйлой","яйлою","яйцам","яйцах","яйцом","якаем","якает","якала","якали","якало","яками","якать","якают","якобы","якова","якове","яковл","якову","якого","якоже","якому","якоре","якори","якорь","якорю","якоря","якута","якуте","якуту","якуты","ялами","ялбот","ялика","ялике","ялики","ялику","ялтой","ямаец","ямами","ямбов","ямбом","ямина","ямине","ямину","ямины","ямища","ямище","ямищи","ямищу","ямкам","ямках","ямкой","ямкою","ямная","ямное","ямной","ямном","ямною","ямную","ямные","ямный","ямным","ямных","ямсом","ямщик","январ","яранг","ярдам","ярдах","ярдов","ярдом","ярить","ярица","яркая","яркие","яркий","ярким","ярких","яркое","яркой","ярком","яркос","яркою","яркую","ярлык","ярмол","ярмом","яровы","ярого","ярому","яросл","ярост","яруга","яруса","ярусе","ярусу","ярусы","ярцев","ярыга","ярыми","ярюсь","ярясь","ясака","ясаке","ясаку","ясене","ясени","ясень","ясеню","ясеня","яслей","яслям","яслях","ясмин","ясная","яснее","ясней","яснел","яснею","яснея","ясное","ясной","ясном","ясною","ясную","ясные","ясный","ясным","ясных","яспис","яссах","яства","ястве","яство","яству","ястык","ясырь","ятвяг","ятках","яткой","яткою","ятных","ятовь","яться","ятями","яффой","яхонт","яхтам","яхтах","яхтой","яхтою","ячать","ячеей","ячеёй","ячеек","ячеею","ячеёю","ячеям","ячеях","ячная","ячное","ячной","ячном","ячною","ячную","ячные","ячный","ячным","ячных","ячьей","ячьем","ячьим","ячьих","яшмой","яшмою","ящера","ящере","ящеру","ящеры","ящика","ящике","ящики","ящику","ящура","ящуре","ящуру","афёре","боись","гарде","гарду","гарды","дедке","дедки","дедку","дедок","зубищ","ифрит","княжа","княжу","княжь","лесою"]');
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
            if (state.words[state.pointer].length === 5) {
                if (state.pointer < 6) {
                    if (state.words[state.pointer] === state.currentWord) {
                        state.wordMatches[state.pointer] = new Array(5).fill('matched');
                        state.gameWin = true;
                    }
                    else if (getWords().includes(state.words[state.pointer].toLowerCase())) {
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
                        state.unknownIndex = state.pointer;
                    }
                }
                else {
                    state.gameOver = true;
                    state.pointer++; //это нужно для сняния возможности редактирования
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
        removeUnknownIndex: (state) => { state.unknownIndex = undefined; }
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
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)(Modal, { open: isGameOver, children: (0,jsx_runtime.jsxs)("div", { className: GameModal_module_2, children: [(0,jsx_runtime.jsx)("h2", { className: GameModal_module_5, children: "\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430" }), (0,jsx_runtime.jsxs)("div", { className: GameModal_module_4, children: ["\u0417\u0430\u0433\u0430\u0434\u043E\u043D\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E: ", (0,jsx_runtime.jsx)("span", { className: GameModal_module_3, children: currentWord })] }), (0,jsx_runtime.jsx)("button", { className: GameModal_module_1, onClick: () => dispatch(setNewGame()), children: "\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430" })] }) }) }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLTU3NDVhZTVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYSxPQUFPLG1CQUFPLENBQUMsR0FBTyxLQUFLLG1CQUFPLENBQUMsR0FBVyxFQUFFLGNBQWMseUVBQXlFLG1CQUFtQixtREFBbUQsb0NBQW9DLDJIQUEySCxxQkFBcUIsaUJBQWlCLFFBQVE7QUFDdmEsaUJBQWlCLFFBQVEsUUFBUSxXQUFXO0FBQzVDO0FBQ0EsRUFBRSxPQUFPLGVBQWUsMEJBQTBCLDBCQUEwQiw4QkFBOEIsU0FBUyxTQUFTLHFCQUFxQixpQ0FBaUMsaUJBQWlCLHVDQUF1Qyw2QkFBNkIscUNBQXFDLDZCQUE2QiwrQkFBK0I7QUFDeFcscUJBQXFCLDBEQUEwRCxjQUFjLDJCQUEyQixnQkFBZ0Isb0JBQW9CLHVCQUF1Qiw0QkFBNEIsU0FBUywwQkFBMEIseUNBQXlDLHFCQUFxQiwwQkFBMEIsdUJBQXVCLG9CQUFvQixZQUFZLG1CQUFtQix5QkFBeUI7QUFDN2Esc0tBQXNLLGdDQUFnQyxFQUFFLDRIQUE0SCxXQUFXLG1DQUFtQyxFQUFFLHlFQUF5RSw4Q0FBOEM7QUFDM2UsNEZBQTRGLGdDQUFnQyxFQUFFLDZRQUE2USw4Q0FBOEM7QUFDemIsOERBQThELGdDQUFnQyxFQUFFLDJDQUEyQyxnQ0FBZ0MsRUFBRSxrREFBa0QsZ0NBQWdDLEVBQUUsd0NBQXdDLDhDQUE4QyxFQUFFLHVCQUF1QixlQUFlO0FBQy9YLHlsQ0FBeWxDO0FBQ3psQyxJQUFJLGdDQUFnQyxFQUFFLDBHQUEwRyx1QkFBdUIsMERBQTBELEVBQUUsd0RBQXdELHVCQUF1QixrRUFBa0UsRUFBRSwrQ0FBK0MsOENBQThDO0FBQ25kLHNGQUFzRix5REFBeUQsOENBQThDO0FBQzdMLHFCQUFxQixvQ0FBb0M7QUFDekQsNGJBQTRiLDBCQUEwQjtBQUN0ZCxxQ0FBcUMsa0NBQWtDLDBCQUEwQixtQ0FBbUMsdUJBQXVCLGVBQWUsNkNBQTZDLDZCQUE2QixtQ0FBbUMsdUJBQXVCLGVBQWUsbUJBQW1CLGVBQWUsU0FBUywyQ0FBMkMsZUFBZSxnQkFBZ0I7QUFDbGIsaUJBQWlCLG1CQUFtQixNQUFNLDhCQUE4QiwrQkFBK0IsSUFBSSxxQkFBcUIsZUFBZSw0Q0FBNEMsZUFBZSxnQkFBZ0IsZ0RBQWdELElBQUksd0JBQXdCLFNBQVMsUUFBUSwwQkFBMEIsS0FBSyxJQUFJLFNBQVMsU0FBUyxJQUFJLG9CQUFvQixLQUFLLElBQUksZUFBZSxTQUFTLElBQUksS0FBSyxTQUFTLG9DQUFvQztBQUMzZCxnREFBZ0Qsd0JBQXdCLEtBQUssS0FBSyxXQUFXLHdCQUF3QixpQkFBaUIsZ0NBQWdDLDJDQUEyQyxxRkFBcUYsU0FBUyxrQkFBa0IsUUFBUSxRQUFRLGdDQUFnQztBQUNqWCxlQUFlLGNBQWMseUJBQXlCLDBCQUEwQiw4QkFBOEIsa0NBQWtDLCtDQUErQyx3Q0FBd0MsZ0NBQWdDO0FBQ3ZRLGVBQWUsdUJBQXVCLDREQUE0RCxnQ0FBZ0MsVUFBVSx5QkFBeUIsdUJBQXVCLHlCQUF5QiwyQkFBMkIseUJBQXlCLDZCQUE2QiwwQ0FBMEMscURBQXFELDhEQUE4RCx1QkFBdUIsZ0JBQWdCO0FBQzFlLHNEQUFzRCxTQUFTLG1FQUFtRSxxQkFBcUIsVUFBVSxJQUFJLGdCQUFnQixXQUFXO0FBQ2hNLGVBQWUsYUFBYSxjQUFjLHNCQUFzQixvREFBb0QsOERBQThELG1DQUFtQywrR0FBK0csd0JBQXdCLGdCQUFnQixzQkFBc0Isb0JBQW9CLG9CQUFvQixxQkFBcUIseUNBQXlDO0FBQ3hlLHlCQUF5QixzQkFBc0IseUJBQXlCLDZCQUE2Qiw4QkFBOEIseUdBQXlHLGdDQUFnQyxZQUFZLGVBQWUsaUJBQWlCLHFFQUFxRSx1QkFBdUI7QUFDcFosZUFBZSxhQUFhO0FBQzVCLGVBQWUscUdBQXFHLHVHQUF1RyxvQkFBb0IsMkJBQTJCLCtCQUErQixvQkFBb0IsaUJBQWlCLE9BQU8sZ0JBQWdCLEVBQUUsMkJBQTJCLHdCQUF3QixFQUFFLE9BQU8sb0JBQW9CLFNBQVMsc0JBQXNCLE9BQU8seUJBQXlCO0FBQ3RmLEtBQUssZUFBZSxlQUFlLHlDQUF5QyxlQUFlLGVBQWUsc0JBQXNCLGVBQWUsbUJBQW1CLFNBQVMsOENBQThDLElBQUksbUNBQW1DLGVBQWUscURBQXFELHNDQUFzQyxJQUFJLCtCQUErQixTQUFTO0FBQ3RaLGlCQUFpQixnQkFBZ0IsV0FBVyxJQUFJLHdHQUF3RyxFQUFFLGlCQUFpQiwwRkFBMEYsOEJBQThCLGlCQUFpQixnSEFBZ0gsaUJBQWlCLFlBQVk7QUFDamMsaUJBQWlCLFFBQVEsMkJBQTJCLDRCQUE0QixnREFBZ0Qsb0NBQW9DLG1DQUFtQywyQkFBMkIsT0FBTywyR0FBMkc7QUFDcFYsbUJBQW1CLGdFQUFnRSxhQUFhLHlFQUF5RSxrQ0FBa0MsNEJBQTRCLGlCQUFpQixTQUFTLG9CQUFvQixrREFBa0Q7QUFDdlUsbUJBQW1CLDZJQUE2STtBQUNoSyxxQkFBcUIsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLG1CQUFtQixRQUFRLFdBQVcsNEdBQTRHLEtBQUssV0FBVyxPQUFPLFFBQVEsV0FBVyxLQUFLLG1CQUFtQixpQkFBaUIsNkJBQTZCLE9BQU8sa0NBQWtDO0FBQzlXLGlCQUFpQixzREFBc0QsV0FBVyxJQUFJLDBFQUEwRSxFQUFFLGlCQUFpQixjQUFjLFlBQVksYUFBYSxpQkFBaUIsWUFBWSw4QkFBOEIsVUFBVSxpQ0FBaUMsT0FBTyxJQUFJLGdCQUFnQixJQUFJLGlCQUFpQjtBQUNoWCxpQkFBaUIsdUNBQXVDLHdHQUF3RywrQkFBK0IsZUFBZSxvQkFBb0IsZ0VBQWdFLGVBQWUsVUFBVSw4Q0FBOEMsdURBQXVEO0FBQ2hhLGlCQUFpQjtBQUNqQixzQkFBc0Isa0ZBQWtGLHlDQUF5QyxrQkFBa0IsRUFBRSxHQUFHLGVBQWUsZ0ZBQWdGLEtBQUsscUNBQXFDLHFEQUFxRCxvQkFBb0IsYUFBYSw2QkFBNkIsS0FBSyxhQUFhLDhCQUE4QjtBQUNwZCxpQkFBaUIsTUFBTSxtQkFBbUIsdUNBQXVDLGNBQWMsUUFBUTtBQUN2RyxRQUFRO0FBQ1IsaUpBQWlKLDhCQUE4QixvQ0FBb0MsdUJBQXVCLDZDQUE2QyxZQUFZLEVBQUUsRUFBRSxtQkFBbUI7QUFDMVQsaUJBQWlCLFVBQVUsdUNBQXVDLHlDQUF5Qyw0QkFBNEIsNkJBQTZCLFVBQVUsWUFBWSxFQUFFLHlIQUF5SDtBQUNyVCxpQkFBaUIsTUFBTSxvRkFBb0Ysb0NBQW9DLHVDQUF1Qyw0R0FBNEc7QUFDbFMsaUJBQWlCLG9EQUFvRCxVQUFVLGtMQUFrTCxrQkFBa0IsWUFBWSxlQUFlLGlDQUFpQyx5REFBeUQscUNBQXFDO0FBQzdhLGVBQWUsWUFBWSw4Q0FBOEMsa0JBQWtCLHVDQUF1QyxlQUFlLDZCQUE2QixjQUFjLE9BQU8sY0FBYyxXQUFXLE1BQU0sYUFBYSxXQUFXLGNBQWMsaUJBQWlCLFlBQVksZUFBZSxVQUFVLG1CQUFtQixvQkFBb0IsTUFBTSxJQUFJLGlCQUFpQixRQUFRO0FBQ3hZLGlCQUFpQixrQkFBa0Isd0JBQXdCLFlBQVksd0JBQXdCLE9BQU8sWUFBWSxzVUFBc1UsS0FBSyxRQUFRLGFBQWEsaUJBQWlCO0FBQ25lLHdDQUF3QyxTQUFTLFVBQVUsVUFBVSxVQUFVLG9DQUFvQyxlQUFlLE9BQU8sRUFBRSxzQ0FBc0MseUNBQXlDLFNBQVMsTUFBTSwrQkFBK0IsOENBQThDLElBQUksYUFBYSxTQUFTLGlCQUFpQixvQ0FBb0Msb0JBQW9CLE1BQU0sT0FBTywrQkFBK0IsTUFBTSxRQUFRO0FBQ25kLCtCQUErQix5QkFBeUIsT0FBTyxPQUFPLFNBQVMsTUFBTSxRQUFRLHlCQUF5QixrQkFBa0IsZUFBZSxZQUFZLG9CQUFvQixTQUFTLFlBQVksS0FBSyxJQUFJLG1EQUFtRCxTQUFTLHdCQUF3QixlQUFlLGVBQWUsc0JBQXNCLHdEQUF3RCxnQ0FBZ0MsWUFBWSxlQUFlO0FBQ2hkLGVBQWUsa0JBQWtCLE9BQU8sUUFBUSxnQ0FBZ0Msb0JBQW9CLGlCQUFpQixFQUFFLGVBQWUsa0JBQWtCLGtCQUFrQixhQUFhLFdBQVcsYUFBYSxJQUFJLFNBQVMsTUFBTSxzQkFBc0IsY0FBYyxFQUFFLEVBQUUsd0JBQXdCLHdCQUF3QixZQUFZLHFCQUFxQiwrQkFBK0IsS0FBSyx1QkFBdUIsRUFBRSxFQUFFLFVBQVUsS0FBSyxJQUFJLElBQUksTUFBTSxVQUFVLEtBQUssSUFBSSxJQUFJLE1BQU0sWUFBWSxPQUFPLGNBQWMsRUFBRSxFQUFFO0FBQ3pmLEdBQUcsS0FBSyxJQUFJLElBQUksTUFBTSxVQUFVLEtBQUssSUFBSSxJQUFJLE1BQU0sWUFBWSw0QkFBNEIsd0NBQXdDLGlDQUFpQyxtQ0FBbUMsZUFBZSxRQUFRLDJCQUEyQixlQUFlLGlDQUFpQyxjQUFjLFNBQVMsRUFBRSxZQUFZLHFCQUFxQixZQUFZO0FBQy9XLDRWQUE0VixlQUFlLG9EQUFvRCw4REFBOEQ7QUFDN2Qsd0RBQXdELGVBQWUsT0FBTyxrQ0FBa0M7QUFDaEgsZUFBZSxhQUFhLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixrQkFBa0Isa0JBQWtCLDJMQUEyTCx1RkFBdUYsZ0NBQWdDLGdDQUFnQyxnQ0FBZ0M7QUFDbGYsa0JBQWtCLGlCQUFpQixxQkFBcUIsa0JBQWtCLHlEQUF5RCxVQUFVLFdBQVcsc0NBQXNDLDJDQUEyQyxrQkFBa0IsbUZBQW1GLHFCQUFxQixtQkFBbUIsb0NBQW9DLElBQUksaUNBQWlDO0FBQy9iLGlCQUFpQixVQUFVLGtDQUFrQyw4TUFBOE0sNkVBQTZFLHNFQUFzRTtBQUM5WixpQkFBaUIsZ0ZBQWdGLElBQUksRUFBRSw2QkFBNkIsV0FBVyxxQ0FBcUMsK0JBQStCLE9BQU8sZUFBZSw2QkFBNkIseUNBQXlDLGNBQWMsU0FBUyxPQUFPLDBCQUEwQixTQUFTLGVBQWUsaUJBQWlCLEtBQUssY0FBYztBQUNuYSxtQkFBbUIsa0JBQWtCLG9EQUFvRCxlQUFlLFdBQVcsT0FBTyxpQkFBaUIsd0JBQXdCLGlCQUFpQixtQkFBbUIsZ0JBQWdCLGtCQUFrQixzQkFBc0Isb0JBQW9CLGtCQUFrQixtQkFBbUIsd0JBQXdCLElBQUksRUFBRSxzQkFBc0IsT0FBTyxRQUFRLFFBQVE7QUFDblksaUJBQWlCLDBCQUEwQixzQkFBc0IsRUFBRSxFQUFFLHNCQUFzQixzQkFBc0IsT0FBTyxRQUFRLGVBQWUsTUFBTSxrREFBa0Q7QUFDdk0saUJBQWlCLFVBQVUsdUNBQXVDLE1BQU0sMENBQTBDLE1BQU0seUNBQXlDLE1BQU0sNERBQTRELE1BQU07QUFDek8seUJBQXlCLHlDQUF5QyxpRkFBaUYsdUNBQXVDLHNCQUFzQixxQkFBcUIsdUNBQXVDO0FBQzVRLHVCQUF1QixVQUFVLDZDQUE2QywrQ0FBK0MsK0NBQStDLHFDQUFxQyx3Q0FBd0MsU0FBUyx5RkFBeUY7QUFDM1YsZUFBZSxtQkFBbUIsYUFBYSxZQUFZLCtCQUErQixxQkFBcUIsY0FBYyx5QkFBeUIsTUFBTSxFQUFFLFFBQVEsK0RBQStELHFEQUFxRCxRQUFRO0FBQ2xTLGVBQWUsK0JBQStCLDZCQUE2QixXQUFXLEVBQUUsK0RBQStELGFBQWEsZ0JBQWdCLGtDQUFrQyxLQUFLLDBCQUEwQixRQUFRLHFEQUFxRCxVQUFVLFNBQVMsbUJBQW1CLG1CQUFtQixjQUFjLE1BQU0sNkJBQTZCLDZCQUE2Qiw2QkFBNkIsZUFBZTtBQUNyZSxpQkFBaUI7QUFDakIsZUFBZSxjQUFjLGVBQWUsZ0JBQWdCLFlBQVksWUFBWSxZQUFZLEtBQUssWUFBWSxxQ0FBcUMsb0JBQW9CLG9CQUFvQixvQkFBb0IsY0FBYyxjQUFjLFFBQVEsWUFBWSxnREFBZ0QsS0FBSywwQ0FBMEMsc0NBQXNDO0FBQ3ZZLHFCQUFxQix3QkFBd0IsbUJBQW1CLElBQUksZ0JBQWdCLFFBQVEscUJBQXFCLHFCQUFxQix3QkFBd0IsbUJBQW1CLElBQUksZ0JBQWdCLFFBQVE7QUFDN00scUJBQXFCLE9BQU8sa0JBQWtCLG1DQUFtQywwQ0FBMEMsdUNBQXVDLEtBQUssU0FBUyxFQUFFLFlBQVksZ0JBQWdCLGNBQWMseUJBQXlCLGVBQWUsSUFBSSw4QkFBOEIsdUJBQXVCO0FBQzdULHFCQUFxQixRQUFRLFFBQVEsUUFBUSx1Q0FBdUMsd0JBQXdCLFFBQVEscUJBQXFCLE9BQU8sZUFBZSxrR0FBa0csT0FBTyxxQkFBcUIsS0FBSztBQUNsUyxlQUFlLFVBQVUsczBCQUFzMEI7QUFDLzFCLDRCQUE0QixpQkFBaUIsaUJBQWlCLDBCQUEwQix5QkFBeUIsa0JBQWtCLG1CQUFtQiw0QkFBNEIsY0FBYyxnQkFBZ0IsMEVBQTBFLFFBQVEsaUJBQWlCLEtBQUssVUFBVSxRQUFRLHNCQUFzQixLQUFLO0FBQ3JXLGVBQWUsZ0JBQWdCLHdEQUF3RCxlQUFlLHlCQUF5QixjQUFjLFNBQVMsY0FBYztBQUNwSyxlQUFlLHNCQUFzQixrQkFBa0IsbUJBQW1CLFlBQVksbUJBQW1CLGNBQWMsd0JBQXdCLGlFQUFpRSwrRkFBK0YsNkJBQTZCLFlBQVksZUFBZSwwQkFBMEIseUJBQXlCLHVCQUF1QjtBQUNqYiwrQ0FBK0MsNEJBQTRCLHVCQUF1QiwrSEFBK0gscUJBQXFCLGlCQUFpQixFQUFFO0FBQ3pRLFFBQVEsMERBQTBELCtCQUErQixnQ0FBZ0Msa0JBQWtCLEtBQUssZ0JBQWdCLDRCQUE0QixLQUFLLGlLQUFpSyx1R0FBdUcsdUJBQXVCO0FBQ3hlLHFCQUFxQixrR0FBa0csVUFBVSx1QkFBdUIsc0NBQXNDLG1CQUFtQixLQUFLLGVBQWUsbUJBQW1CLEtBQUssZ0JBQWdCLG1CQUFtQixLQUFLLDhDQUE4QyxtQkFBbUIsS0FBSywwQkFBMEIsZ0VBQWdFLG1CQUFtQixLQUFLLE9BQU8sZ0JBQWdCO0FBQ3BmLDhMQUE4TCxLQUFLO0FBQ25NLDBGQUEwRixLQUFLLGdFQUFnRSxlQUFlLHVCQUF1QixvRUFBb0UsY0FBYztBQUN2UixXQUFXLEtBQUssZ0JBQWdCLFVBQVUsdUJBQXVCLCtCQUErQixnSkFBZ0osc0hBQXNILGtDQUFrQyxxQkFBcUIsdURBQXVELG1CQUFtQjtBQUN2ZSwrREFBK0QsbUJBQW1CLEtBQUssK0dBQStHLG1CQUFtQixLQUFLLHVHQUF1RyxtQkFBbUIsS0FBSyw2Q0FBNkMsbUJBQW1CLEtBQUssbUJBQW1CLCtEQUErRDtBQUNwZixtQkFBbUIsOEZBQThGLHNCQUFzQix1RUFBdUUsMERBQTBEO0FBQ3hRLGlCQUFpQixVQUFVLDhDQUE4QyxzQ0FBc0MsMERBQTBELGtCQUFrQixlQUFlLFdBQVcsa0RBQWtELFVBQVUsaUJBQWlCLFVBQVUsbUNBQW1DLDRDQUE0QyxNQUFNLFVBQVUsbURBQW1EO0FBQzliLGlCQUFpQixtRkFBbUYsVUFBVSx5QkFBeUIsMkVBQTJFLHlDQUF5QywrQ0FBK0MsWUFBWSw2REFBNkQ7QUFDblgsUUFBUSxtSkFBbUosZUFBZSw4Q0FBOEMsb0RBQW9ELHFCQUFxQixNQUFNLG1CQUFtQiw0REFBNEQsb0JBQW9CLEdBQUcsb0JBQW9CLGVBQWUsUUFBUSxlQUFlLFlBQVk7QUFDbmQsaUJBQWlCLHlCQUF5QixVQUFVLE9BQU8sT0FBTyxPQUFPLDRCQUE0QixRQUFRLHFDQUFxQyxrQ0FBa0MsR0FBRyxrQ0FBa0MsTUFBTSxXQUFXLHlEQUF5RCxjQUFjLHVEQUF1RCxlQUFlLHFDQUFxQyxTQUFTLGlCQUFpQjtBQUN0YixtQkFBbUIsMEZBQTBGLGVBQWUsbUVBQW1FLGlCQUFpQiw0QkFBNEIsaUJBQWlCLDBDQUEwQyxpQkFBaUIsK0NBQStDO0FBQ3ZXLGlCQUFpQixvQkFBb0IseUVBQXlFLHNDQUFzQyxnQ0FBZ0MsUUFBUSxXQUFXLEtBQUssV0FBVywwQ0FBMEMsU0FBUyxlQUFlLEtBQUssZ0JBQWdCLGdCQUFnQjtBQUM5VCxpQkFBaUIsWUFBWSxJQUFJLFVBQVUsRUFBRSxFQUFFLG1CQUFtQix5QkFBeUIscUJBQXFCLG1CQUFtQixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUUsa0JBQWtCLGdCQUFnQixRQUFRLGVBQWUsU0FBUyxTQUFTLGlCQUFpQjtBQUMvTyxjQUFjLHdCQUF3QixpQ0FBaUMsRUFBRSxJQUFJLHNEQUFzRCxTQUFTLEtBQUssdUJBQXVCLFdBQVcsaUJBQWlCLFNBQVMsZUFBZSw4Q0FBOEM7QUFDMVEsZUFBZSw4Q0FBOEMscUVBQXFFLDRJQUE0SSwrRUFBK0UsbUJBQW1CLGlEQUFpRCxxQ0FBcUMsOEJBQThCLFVBQVU7QUFDOWUsR0FBRyx3UkFBd1IsS0FBSyxRQUFRLGVBQWUseUJBQXlCLDRDQUE0QyxFQUFFLHVDQUF1QyxRQUFRLFdBQVc7QUFDeGI7QUFDQSxtQkFBbUIsK0RBQStELCtEQUErRCwwQ0FBMEMsNkVBQTZFLG9HQUFvRyxzR0FBc0csb0JBQW9CO0FBQ3RlLGlCQUFpQixTQUFTLG1DQUFtQyx5QkFBeUIsbUJBQW1CLFNBQVMsUUFBUSxtTUFBbU0sTUFBTTtBQUNuVSxvUEFBb1AsZUFBZSxzQkFBc0IsbUJBQW1CLGNBQWMsNkRBQTZELFNBQVM7QUFDaFksaUJBQWlCLFlBQVksVUFBVSxhQUFhLGFBQWEsTUFBTSxxRUFBcUUsZUFBZSx3QkFBd0IsOEJBQThCLDBCQUEwQiwrQkFBK0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIsNENBQTRDLDRDQUE0QztBQUMzYSxrREFBa0QsOEZBQThGLGlIQUFpSCxzRUFBc0UsNkZBQTZGO0FBQ3BhLG1HQUFtRztBQUNuRyxtQkFBbUIsOEJBQThCLGtCQUFrQixpQkFBaUI7QUFDcEYsaUJBQWlCLFlBQVksWUFBWSxXQUFXLEtBQUsscUJBQXFCLGNBQWMsR0FBRyxhQUFhLDBCQUEwQixLQUFLLEtBQUssMENBQTBDLGFBQWEsMkNBQTJDLFVBQVUsSUFBSSxhQUFhLFdBQVcsS0FBSyxPQUFPLGFBQWEsa0JBQWtCLGFBQWEsMkNBQTJDLFVBQVUsTUFBTTtBQUMzWSxnQkFBZ0IsWUFBWSw4QkFBOEIsbUJBQW1CLGtDQUFrQyxtQkFBbUIsUUFBUSxVQUFVLFlBQVksNkRBQTZELGVBQWUsV0FBVyxTQUFTLHVCQUF1QiwwREFBMEQsRUFBRSx1Q0FBdUM7QUFDMVgscUJBQXFCLGNBQWMsZ0JBQWdCLE1BQU0sWUFBWSxNQUFNLGFBQWEscUJBQXFCLFNBQVMsNERBQTRELHFDQUFxQyxxQkFBcUIsZ0VBQWdFLFVBQVU7QUFDdFQsdUJBQXVCLFFBQVEsMENBQTBDLEVBQUUsbUJBQW1CLFlBQVksaUJBQWlCLGdDQUFnQyxpREFBaUQsd0JBQXdCLFNBQVMsRUFBRSxZQUFZLDhGQUE4RixXQUFXLEtBQUssU0FBUyxFQUFFLFFBQVEsbUJBQW1CLFFBQVEsaUJBQWlCLE1BQU0sV0FBVyxnQkFBZ0IsV0FBVyxjQUFjO0FBQ2xlLEdBQUcsZ0JBQWdCLGVBQWUsYUFBYSxVQUFVLHFDQUFxQyxpQ0FBaUMsTUFBTSx5QkFBeUIsS0FBSyxNQUFNLHlCQUF5QixLQUFLLE1BQU0sd0NBQXdDLE1BQU0scUNBQXFDLDBJQUEwSSxNQUFNO0FBQ2hiLEdBQUcsTUFBTSwyRUFBMkUsTUFBTSw2QkFBNkIsTUFBTSxhQUFhLE1BQU0sbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0seUNBQXlDLE1BQU0seUtBQXlLLG1FQUFtRSxLQUFLLGNBQWM7QUFDL2UsRUFBRSxFQUFFLElBQUksa0JBQWtCLDRFQUE0RSxXQUFXLFdBQVcsMkNBQTJDLG9CQUFvQixJQUFJLGNBQWMsR0FBRyxxQ0FBcUMsbUNBQW1DLHlFQUF5RSxTQUFTLDBFQUEwRSxNQUFNO0FBQzFiLGdEQUFnRCxnQkFBZ0IsVUFBVSxLQUFLLGlCQUFpQixpQkFBaUIsVUFBVSw4RkFBOEYsa0JBQWtCLGtCQUFrQiwyQkFBMkIsV0FBVyxrQkFBa0IsT0FBTyx5RUFBeUUsSUFBSSxXQUFXLElBQUksSUFBSSxJQUFJLFFBQVEsRUFBRSxZQUFZLElBQUksUUFBUSxFQUFFLFlBQVksS0FBSyxNQUFNLGFBQWEsS0FBSyxNQUFNO0FBQ25mLFVBQVUsS0FBSyxJQUFJLEVBQUUsNENBQTRDLFFBQVEsUUFBUSxPQUFPLFlBQVkseUJBQXlCLHFDQUFxQyxHQUFHLGlCQUFpQix1Q0FBdUMsd0RBQXdELDBCQUEwQixLQUFLLE1BQU0sVUFBVSxnR0FBZ0cscUJBQXFCLGFBQWEsUUFBUSxjQUFjO0FBQzVkLHlEQUF5RCxrQkFBa0IsVUFBVSx5RUFBeUUsTUFBTSw4QkFBOEIsTUFBTSx1QkFBdUIsTUFBTSx1REFBdUQsVUFBVSxNQUFNLG1DQUFtQyxzQ0FBc0MsT0FBTyxTQUFTLFVBQVUsb0RBQW9ELFFBQVE7QUFDM2MsUUFBUSxrREFBa0QsUUFBUSxVQUFVLG1HQUFtRyxpTkFBaU4sc0JBQXNCLHFEQUFxRDtBQUMzYyxzRUFBc0Usb0JBQW9CLGFBQWEsUUFBUSxFQUFFLG1CQUFtQixPQUFPLHVDQUF1QyxpQkFBaUIsMkJBQTJCLFNBQVMsRUFBRSxzQkFBc0Isd0dBQXdHLFdBQVcsU0FBUyxlQUFlLHdCQUF3QixjQUFjLG9CQUFvQjtBQUNwYyx1QkFBdUIsNEJBQTRCLGdCQUFnQixFQUFFLG9DQUFvQyx5QkFBeUIsaUhBQWlILFdBQVcsc0JBQXNCLG9CQUFvQixFQUFFLG9DQUFvQyxlQUFlLG1FQUFtRSxtQkFBbUIsUUFBUSxxQ0FBcUM7QUFDaGUsb0JBQW9CLGlCQUFpQjtBQUNyQyx1UEFBdVAsMENBQTBDLElBQUksZUFBZSxzQkFBc0IsU0FBUztBQUNuVixpQkFBaUIsWUFBWSxHQUFHLG9CQUFvQixpQkFBaUIsMkNBQTJDLFVBQVUsaUJBQWlCLE1BQU0sT0FBTyxJQUFJLHFDQUFxQyxJQUFJLFNBQVMsTUFBTSxlQUFlLEtBQUssUUFBUSxpQkFBaUIsaUJBQWlCLHNCQUFzQixVQUFVLFNBQVMscUNBQXFDLHlCQUF5QjtBQUN6WCxlQUFlLG9CQUFvQixZQUFZLEVBQUUsRUFBRSxtQkFBbUIsYUFBYSxnQ0FBZ0Msa0JBQWtCLElBQUksa0JBQWtCLG9CQUFvQixZQUFZO0FBQzNMLGVBQWUsWUFBWSxjQUFjLHVCQUF1QixFQUFFLEVBQUUsbUJBQW1CLGNBQWMsd0RBQXdELFNBQVMsRUFBRSxvQkFBb0IsUUFBUSxTQUFTLElBQUksZUFBZSxZQUFZLGVBQWUsZUFBZSw2REFBNkQsZUFBZSwyQ0FBMkMsb0JBQW9CLGVBQWUsbUJBQW1CLGdCQUFnQixlQUFlLE9BQU87QUFDN2QsY0FBYywwQ0FBMEMsZ0JBQWdCLEtBQUssaUJBQWlCLFlBQVksU0FBUywwQkFBMEIsaUJBQWlCLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDJHQUEyRyxRQUFRLEdBQUcscUJBQXFCLGlIQUFpSDtBQUN0ZCxlQUFlLHNCQUFzQiw0QkFBNEIsY0FBYyxNQUFNLEtBQUssbUJBQW1CLHNDQUFzQyxPQUFPLFFBQVEsbUJBQW1CLGtCQUFrQixzQkFBc0Isa0RBQWtELHNCQUFzQixtRUFBbUUsV0FBVztBQUNuWCxlQUFlLG1FQUFtRSxhQUFhLE9BQU8saUJBQWlCLFNBQVMsbUJBQW1CLGtCQUFrQiwwQkFBMEIsdUZBQXVGLFFBQVEsd0JBQXdCLGVBQWUsNEJBQTRCLGVBQWUsTUFBTTtBQUN0WCxjQUFjLG1CQUFtQixNQUFNLFlBQVksSUFBSSxTQUFTLFFBQVEsV0FBVyxLQUFLLFdBQVcsV0FBVyxnQkFBZ0IsUUFBUSxNQUFNLFNBQVMsaURBQWlELFFBQVEsV0FBVyxZQUFZLDBEQUEwRCxpQkFBaUIsWUFBWSxZQUFZLEtBQUs7QUFDN1UsbUJBQW1CLFlBQVksWUFBWSxZQUFZLEtBQUssU0FBUyxLQUFLLGlCQUFpQixXQUFXLEtBQUssaUJBQWlCLFNBQVMsWUFBWSw0QkFBNEIsTUFBTSxLQUFLLHdCQUF3QixPQUFPLHlCQUF5QixlQUFlLHFDQUFxQyxlQUFlLEtBQUssT0FBTyxpREFBaUQsS0FBSyxPQUFPLHlFQUF5RTtBQUNyYyxpQkFBaUIsd0JBQXdCLHdCQUF3QixjQUFjLFdBQVcsY0FBYztBQUN4RyxpQkFBaUIsY0FBYyxvQkFBb0Isb0VBQW9FLCtEQUErRCx1R0FBdUcsOERBQThELGtCQUFrQix1QkFBdUIsZ0RBQWdEO0FBQ3BiLFlBQVksa0JBQWtCLGVBQWUseUNBQXlDLGVBQWUsTUFBTSxTQUFTLE1BQU0sUUFBUSxhQUFhLDZCQUE2QixvQkFBb0IsU0FBUyx3REFBd0QsS0FBSyw2QkFBNkIsd0JBQXdCLEtBQUssT0FBTyxlQUFlLGVBQWUsMkNBQTJDLFlBQVk7QUFDNVosZUFBZSxtQkFBbUIsMkJBQTJCLE1BQU0sZ0dBQWdHLGNBQWMsa0NBQWtDLEtBQUssRUFBRSw2QkFBNkIsTUFBTSxlQUFlLGtCQUFrQiw2QkFBNkIsMEJBQTBCLEdBQUcsZ0JBQWdCLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixhQUFhLGFBQWEsVUFBVSxxQkFBcUIsUUFBUSxJQUFJLHFDQUFxQyxnQkFBZ0I7QUFDamdCLE1BQU0sNENBQTRDLFNBQVMsY0FBYyxhQUFhLEVBQUUscUJBQXFCLGNBQWMsV0FBVyxLQUFLLGVBQWUsNEJBQTRCO0FBQ3RMLG1CQUFtQixRQUFRLHlEQUF5RCxhQUFhLFdBQVcsTUFBTSxpQ0FBaUMsa0JBQWtCLDRCQUE0QixlQUFlLHdGQUF3RixjQUFjLGFBQWEsNkJBQTZCLGVBQWUsU0FBUywyQ0FBMkMsb0NBQW9DO0FBQ3ZjLGlCQUFpQixvQ0FBb0MsMERBQTBELDhCQUE4QixPQUFPLGVBQWUsY0FBYztBQUNqTCxlQUFlLGdCQUFnQixNQUFNLGtCQUFrQixrREFBa0QsZ0JBQWdCLGtCQUFrQixLQUFLLFNBQVMsb0JBQW9CLFlBQVksZ0JBQWdCLGNBQWMsU0FBUywwREFBMEQsU0FBUyxnQkFBZ0IsVUFBVSxVQUFVLGVBQWUsU0FBUyxrQkFBa0IsVUFBVSxnQ0FBZ0MsY0FBYyxrREFBa0QsV0FBVyxTQUFTLGNBQWM7QUFDN2YsaUNBQWlDLFNBQVMsb0JBQW9CLDREQUE0RCxTQUFTLFdBQVcsU0FBUyxvQkFBb0IsYUFBYSxpREFBaUQsb0pBQW9KLHlDQUF5QyxnQkFBZ0IsV0FBVyxTQUFTLG9CQUFvQjtBQUM5ZCxnSUFBZ0ksc0JBQXNCLFdBQVcsU0FBUyxzQkFBc0IsOERBQThELFNBQVMsV0FBVyxTQUFTLGtCQUFrQiw0RkFBNEYsa0NBQWtDLG1CQUFtQjtBQUM5YixnQ0FBZ0MsNkNBQTZDLHNCQUFzQiw0QkFBNEIsMERBQTBELFFBQVEsWUFBWSxvQkFBb0IsMEJBQTBCLHVGQUF1RixrQ0FBa0MsbUJBQW1CLHlDQUF5Qyx5Q0FBeUM7QUFDemQsbUJBQW1CLHFEQUFxRCxRQUFRLFlBQVksc0JBQXNCLDBGQUEwRixrQ0FBa0MsbUJBQW1CLDhEQUE4RCw4REFBOEQsc0JBQXNCLGdDQUFnQyx3REFBd0QsUUFBUTtBQUNuZixvQkFBb0IsdUNBQXVDLHFCQUFxQixLQUFLLG1DQUFtQyxvQkFBb0IsYUFBYSxnQkFBZ0IsTUFBTSxpQ0FBaUMsV0FBVyx5QkFBeUIsSUFBSSxJQUFJLDJDQUEyQyxhQUFhLEtBQUssV0FBVyxzRUFBc0UsV0FBVyxTQUFTLGFBQWEsV0FBVztBQUN0Yix3REFBd0QseUJBQXlCLGNBQWMsRUFBRSxXQUFXLFNBQVMsb0JBQW9CLFlBQVksNkNBQTZDLFlBQVksK0JBQStCLDZDQUE2QyxrQkFBa0IsZ0JBQWdCLG1DQUFtQyx1QkFBdUIsYUFBYSxnQkFBZ0IsTUFBTSxpQ0FBaUMsV0FBVyx5QkFBeUIsSUFBSSxJQUFJO0FBQ3RlLGdCQUFnQixhQUFhLEtBQUssUUFBUSxvRkFBb0YsV0FBVyxTQUFTLGFBQWEsUUFBUSw4SUFBOEkseUJBQXlCLGNBQWMsRUFBRSxXQUFXLFNBQVMsb0JBQW9CLCtFQUErRSxrQ0FBa0MsbUJBQW1CLFdBQVc7QUFDcmhCLFVBQVUsU0FBUyxFQUFFLGNBQWMsU0FBUyxXQUFXLGNBQWMsZUFBZSx3QkFBd0IsV0FBVyxJQUFJLFNBQVMsMkZBQTJGLGVBQWUsZUFBZSxnQkFBZ0IsV0FBVyxJQUFJLFFBQVEsT0FBTyxNQUFNLFlBQVksWUFBWSw2SUFBNkksWUFBWSxXQUFXLFlBQVk7QUFDemYsRUFBRSxFQUFFLHVIQUF1SCxlQUFlLHNCQUFzQixXQUFXLElBQUksUUFBUSxLQUFLLE9BQU8sTUFBTSxZQUFZLFlBQVksaUJBQWlCLFdBQVcsSUFBSSxZQUFZLGdEQUFnRCwyQkFBMkIsMkJBQTJCLFFBQVE7QUFDM1gsc0RBQXNELFNBQVMsNERBQTRELGNBQWMsY0FBYyxlQUFlLGlCQUFpQixNQUFNLGtCQUFrQixtQkFBbUIsS0FBSyxTQUFTLEVBQUUsa0JBQWtCLHFIQUFxSCxlQUFlO0FBQ3hZLGlCQUFpQixLQUFLLFdBQVcsaUJBQWlCLGdGQUFnRixlQUFlLHNCQUFzQixnQkFBZ0Isb0NBQW9DLFlBQVksaUNBQWlDLEtBQUssaUJBQWlCLHdCQUF3QixrQkFBa0IsU0FBUyxZQUFZLGVBQWU7QUFDNVcscUJBQXFCLG9CQUFvQixtREFBbUQsZ0JBQWdCLGVBQWUsaUJBQWlCLFdBQVcsa0JBQWtCLHVCQUF1QixJQUFJLGVBQWUsU0FBUywwRUFBMEUsa0NBQWtDLFVBQVUsZUFBZSxlQUFlLDJFQUEyRSxzQ0FBc0M7QUFDamUsaUJBQWlCLGdCQUFnQixtQ0FBbUMsMEhBQTBILEVBQUUsaUJBQWlCLE9BQU87QUFDeE4sbUJBQW1CLG9CQUFvQix3QkFBd0IsV0FBVyxjQUFjLGdCQUFnQiwyQ0FBMkMsWUFBWSxlQUFlLGdCQUFnQixtREFBbUQsZ0JBQWdCLGVBQWUsbUJBQW1CLGdCQUFnQiwyQ0FBMkMsY0FBYyxrQkFBa0IsS0FBSyxVQUFVO0FBQzdZLGlCQUFpQixrQ0FBa0Msc0NBQXNDLGtCQUFrQixvQkFBb0IsYUFBYSxHQUFHLE9BQU8sNkZBQTZGLDBCQUEwQixTQUFTLGdCQUFnQiwwQkFBMEIsV0FBVyxHQUFHLDRGQUE0RixnQkFBZ0IsT0FBTyxtQkFBbUI7QUFDcGQsRUFBRTtBQUNGLHFCQUFxQixvQkFBb0IsTUFBTSw4REFBOEQsYUFBYSxzQkFBc0IsaUJBQWlCLFlBQVksc0JBQXNCLElBQUksa0JBQWtCLGlIQUFpSCxhQUFhLGtCQUFrQixJQUFJLFdBQVcsSUFBSSxHQUFHLDJCQUEyQixjQUFjLHFCQUFxQjtBQUM3YixVQUFVLEVBQUUsR0FBRyxZQUFZLElBQUksSUFBSSxjQUFjLG1CQUFtQiwwQkFBMEIsZ0JBQWdCLFFBQVEsSUFBSSxRQUFRLGtDQUFrQyxtQkFBbUIsd0NBQXdDLGdDQUFnQyxNQUFNLE1BQU0sUUFBUSxjQUFjLDBGQUEwRixRQUFRLDZFQUE2RTtBQUNoZCxTQUFTLGlEQUFpRCx1RUFBdUUsU0FBUyxnQkFBZ0IsY0FBYyxvQkFBb0IsbUJBQW1CLHVCQUF1QixhQUFhLElBQUksc0JBQXNCLGFBQWEsa0NBQWtDLE1BQU0sVUFBVTtBQUM1VSxtQkFBbUIsWUFBWSxlQUFlLG9CQUFvQixXQUFXLEtBQUssd0JBQXdCLGFBQWEsZ0JBQWdCLElBQUksK0NBQStDLFlBQVksU0FBUywrQkFBK0IsZUFBZSw4QkFBOEI7QUFDM1IsaUJBQWlCLFFBQVEsUUFBUSxTQUFTLGFBQWEsVUFBVSxrRUFBa0UsTUFBTSw0RUFBNEUsTUFBTSxRQUFRLGNBQWMsTUFBTSxNQUFNLE1BQU0sZUFBZSxlQUFlLHFCQUFxQixtQkFBbUIseUJBQXlCLGVBQWUsOEJBQThCO0FBQy9ZLGVBQWUsWUFBWSxTQUFTLEVBQUUsZUFBZSxzQkFBc0IsOEVBQThFLDBEQUEwRCw4QkFBOEIsd0JBQXdCLGlCQUFpQixVQUFVLFNBQVMsZUFBZSxLQUFLLGlCQUFpQixFQUFFLDZDQUE2QyxXQUFXLDBCQUEwQixZQUFZLFlBQVk7QUFDOWIsY0FBYyxZQUFZLFlBQVksNkNBQTZDLFlBQVksK0dBQStHLGFBQWEscUJBQXFCLGlCQUFpQixxQkFBcUIsWUFBWSx1QkFBdUIsK0JBQStCO0FBQ3hWLHlCQUF5QixLQUFLLElBQUkscUJBQXFCLG1CQUFtQixVQUFVLGtEQUFrRCxTQUFTLE9BQU8sSUFBSSxHQUFHLE1BQU0sS0FBSyw2QkFBNkIsS0FBSyxTQUFTLG1CQUFtQixjQUFjLFNBQVMsVUFBVSxjQUFjLDBCQUEwQixLQUFLLFdBQVcsTUFBTSx5QkFBeUIsU0FBUyxjQUFjLGFBQWEsS0FBSztBQUN2WSxjQUFjLE9BQU8sdUVBQXVFLHdDQUF3QyxTQUFTLGNBQWMsYUFBYSxrQkFBa0IsZ0NBQWdDLGNBQWMsc0NBQXNDLG9CQUFvQixLQUFLLGdDQUFnQyxJQUFJLEdBQUcsbUdBQW1HLHdDQUF3QztBQUN6ZCxpQkFBaUI7QUFDakIsZUFBZSxxQkFBcUIsZ0NBQWdDLHdCQUF3QixrQ0FBa0MsYUFBYSxhQUFhLGFBQWEsY0FBYyxTQUFTLGdCQUFnQixlQUFlLGFBQWEsU0FBUyxjQUFjLHdCQUF3QixHQUFHLGFBQWEsbUNBQW1DLHVGQUF1RiwrQ0FBK0MsS0FBSyxPQUFPO0FBQzVkLG1DQUFtQyxnQ0FBZ0MsV0FBVyxNQUFNLFNBQVMsdUJBQXVCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLGNBQWMsY0FBYyxzQkFBc0IsZ0JBQWdCLGFBQWEsSUFBSSxzQ0FBc0MsYUFBYSwyQkFBMkI7QUFDNVYsZUFBZSxxQkFBcUIsZ0NBQWdDLHdCQUF3QiwrQ0FBK0MsYUFBYSxlQUFlLGVBQWUsNEJBQTRCLGFBQWEsK0JBQStCLGtCQUFrQixvQ0FBb0Msc0JBQXNCLFlBQVk7QUFDdFYsaUJBQWlCLDhDQUE4Qyw2QkFBNkIsVUFBVSw0QkFBNEIsMERBQTBELGNBQWMsd0NBQXdDLGdDQUFnQyx1QkFBdUIsU0FBUyxtQkFBbUIsZUFBZSxHQUFHLHVCQUF1QixnQkFBZ0IsYUFBYSw0QkFBNEI7QUFDdmEscUJBQXFCLFVBQVUsZ0JBQWdCLGFBQWEsbUJBQW1CLG9CQUFvQixhQUFhLEVBQUUsZUFBZSxvQkFBb0IsVUFBVSxJQUFJLFVBQVUsZUFBZSxTQUFTLFVBQVUsZUFBZSxjQUFjO0FBQzVPLGVBQWUsV0FBVywrQkFBK0IsOEJBQThCLEdBQUcsZ0dBQWdHLFVBQVUsK0JBQStCO0FBQ25PLHFCQUFxQixHQUFHLDJDQUEyQyxnQkFBZ0IsYUFBYSw0QkFBNEIsb0lBQW9JLFNBQVMsY0FBYywwQkFBMEIscUJBQXFCLFdBQVcsV0FBVztBQUM1VixxQkFBcUIsV0FBVyxvQkFBb0IsYUFBYSxhQUFhLHNCQUFzQixZQUFZLDJCQUEyQiw0QkFBNEIsUUFBUSxXQUFXLDhCQUE4QixpQkFBaUIseUJBQXlCLGlCQUFpQixzQkFBc0IsaUJBQWlCLG1CQUFtQixpQkFBaUI7QUFDOVYsaUJBQWlCLHNEQUFzRCxTQUFTLDREQUE0RCxnQkFBZ0IsbUJBQW1CLDBDQUEwQyxtQ0FBbUMsZUFBZSxpQkFBaUIsV0FBVyxvQkFBb0Isc0JBQXNCLDhDQUE4QyxzQkFBc0I7QUFDclosaUJBQWlCLFdBQVcsb0JBQW9CLHNCQUFzQiw4Q0FBOEMsTUFBTSxzQkFBc0IsU0FBUyxtQkFBbUIsNEVBQTRFLGtEQUFrRCxTQUFTLGlCQUFpQixRQUFRLGlCQUFpQixNQUFNLG9CQUFvQixpQkFBaUIsSUFBSSxVQUFVLFFBQVEscUJBQXFCLGNBQWM7QUFDamMsbUJBQW1CLFlBQVksR0FBRyw0REFBNEQsaUJBQWlCLGdDQUFnQyxVQUFVLFlBQVk7QUFDckssbUJBQW1CLGVBQWUsNERBQTRELGlCQUFpQixLQUFLLGtCQUFrQixnRkFBZ0YsbUNBQW1DLG1CQUFtQixlQUFlLFlBQVksb0JBQW9CLG1EQUFtRCxnQkFBZ0IsUUFBUSxVQUFVLFNBQVMsY0FBYztBQUN2YSxlQUFlLGtCQUFrQiw4QkFBOEIsaUJBQWlCLFNBQVMsZ0JBQWdCLDJDQUEyQyxZQUFZLG1CQUFtQixvQkFBb0IsY0FBYyxrQkFBa0IsS0FBSyxVQUFVO0FBQ3RQLFFBQVEsK1JBQStSLEtBQUsseUNBQXlDLHlDQUF5QyxTQUFTLGdFQUFnRSwwQ0FBMEM7QUFDamYsdUJBQXVCLCtCQUErQix5QkFBeUIsa0NBQWtDLG1CQUFtQix1QkFBdUIsV0FBVyxvQkFBb0IsTUFBTSxzQkFBc0IsU0FBUyw0QkFBNEIsV0FBVyxvQkFBb0IsOEJBQThCLEdBQUcsK0ZBQStGLFVBQVUsK0JBQStCLDBCQUEwQixvQkFBb0I7QUFDamYsS0FBSyxHQUFHLFdBQVcseUJBQXlCLDJEQUEyRCw0QkFBNEIsMEJBQTBCLG9CQUFvQixxQkFBcUIscUJBQXFCLFlBQVksOEJBQThCLHNDQUFzQyxlQUFlLE1BQU0sa0NBQWtDLE1BQU0sS0FBSyxNQUFNLGdDQUFnQyx1QkFBdUIsa0JBQWtCLE9BQU8sdUJBQXVCLFVBQVU7QUFDcGUsVUFBVSxjQUFjLHdDQUF3QyxTQUFTLGtCQUFrQixnQ0FBZ0MsTUFBTSxTQUFTLFNBQVMsc0NBQXNDLGNBQWMsT0FBTyw2QkFBNkIsT0FBTywyQ0FBMkMseUJBQXlCLDZCQUE2QixLQUFLLGdMQUFnTCxjQUFjO0FBQ3RoQiw4Q0FBOEMsV0FBVywrQkFBK0IsMEJBQTBCLHFDQUFxQyxZQUFZLGtGQUFrRixLQUFLLGdMQUFnTCxjQUFjLCtDQUErQyxXQUFXO0FBQ2xmLDRDQUE0QywwQkFBMEIscUNBQXFDLFlBQVksbUZBQW1GLGlCQUFpQixzQkFBc0IsTUFBTSxJQUFJLGlCQUFpQiwwQ0FBMEMsU0FBUyxTQUFTLHFCQUFxQixrQkFBa0IsU0FBUyw2QkFBNkIsTUFBTSxrQkFBa0I7QUFDN2EsUUFBUSxzQkFBc0IseUNBQXlDLGlDQUFpQyxvQkFBb0IsNEJBQTRCLFlBQVkscUNBQXFDLFlBQVksa0NBQWtDLHFDQUFxQyxvQkFBb0IsNEJBQTRCLFFBQVEsWUFBWSxxQ0FBcUMsWUFBWSxrQ0FBa0Msa0NBQWtDLG9CQUFvQjtBQUN6ZSxnQkFBZ0IsUUFBUSxxQ0FBcUMsWUFBWSxvQ0FBb0MsMkJBQTJCLGNBQWM7QUFDdEosbUJBQW1CLGNBQWMsb0JBQW9CLG9IQUFvSCxhQUFhLDhEQUE4RCxhQUFhLGNBQWMsb0JBQW9CLGlIQUFpSDtBQUNwWixxQkFBcUIsVUFBVSxrRkFBa0YsZ0dBQWdHO0FBQ2pOLHFCQUFxQixrQkFBa0IsVUFBVSx3QkFBd0IsVUFBVSxNQUFNLG9CQUFvQix1RkFBdUYsd0JBQXdCLDZCQUE2Qiw2REFBNkQ7QUFDdFQseU9BQXlPLDREQUE0RCxpQkFBaUIsSUFBSSxhQUFhLHVCQUF1QixTQUFTLFFBQVEsU0FBUyxzREFBc0QsT0FBTztBQUNyYixtQkFBbUIsT0FBTyxnRUFBZ0UsaUJBQWlCLElBQUksdUJBQXVCLFNBQVMsc0JBQXNCLFNBQVMsR0FBRywrQ0FBK0MsbUJBQW1CLFdBQVcsUUFBUSxXQUFXLGNBQWMsY0FBYyxzQkFBc0IsaUJBQWlCLFNBQVM7QUFDN1YsbUJBQW1CLFdBQVcsUUFBUSxzQ0FBc0MsMEJBQTBCLGNBQWMscUJBQXFCLGFBQWEsc0JBQXNCLFNBQVMsa0JBQWtCLDBFQUEwRSxRQUFRLG1FQUFtRSxjQUFjLGdDQUFnQyw2QkFBNkIsRUFBRSxFQUFFO0FBQzNhLG1CQUFtQixrQkFBa0IsYUFBYSxxQkFBcUIsY0FBYyxXQUFXLG1EQUFtRCx1REFBdUQsZUFBZSxHQUFHLE1BQU0sMEVBQTBFLGNBQWMsV0FBVyxnQkFBZ0I7QUFDclYsdUJBQXVCLGtMQUFrTCxlQUFlLFVBQVUsU0FBUyxrQ0FBa0MscUJBQXFCO0FBQ2xTLHVCQUF1QixXQUFXLFlBQVksUUFBUSxrQkFBa0IsT0FBTyx5RkFBeUYsWUFBWSxXQUFXLFlBQVk7QUFDM00sdUJBQXVCLGFBQWEsYUFBYSw0SUFBNEksK0JBQStCLFlBQVksV0FBVyxpQkFBaUIsVUFBVSxvQkFBb0Isc0JBQXNCLFlBQVksZ0JBQWdCLDBDQUEwQyxXQUFXLFVBQVUsWUFBWSxXQUFXO0FBQzFhLHVCQUF1QixhQUFhLHNCQUFzQixvR0FBb0csc0NBQXNDO0FBQ3BNLG1CQUFtQixrRUFBa0Usd0RBQXdELDRDQUE0QyxnQkFBZ0IsS0FBSyx5R0FBeUcsNENBQTRDLHdDQUF3QyxpQkFBaUIsNkNBQTZDLHlCQUF5QixTQUFTLE1BQU07QUFDamYsNERBQTRELFlBQVksZUFBZSxpQkFBaUIsWUFBWSx5RUFBeUUsdUJBQXVCLHlCQUF5QixVQUFVLFFBQVEsa0JBQWtCLE9BQU8seUZBQXlGLFlBQVksV0FBVyxZQUFZO0FBQ3BaLHVCQUF1QixVQUFVLFNBQVMsTUFBTSxVQUFVLFFBQVEseURBQXlELGtCQUFrQixvQ0FBb0MsVUFBVSxnQ0FBZ0MsdUVBQXVFLHdHQUF3RztBQUMxWSw0QkFBNEIsTUFBTSxzQkFBc0IsVUFBVSxZQUFZLGtCQUFrQjtBQUNoRywwTUFBME0sS0FBSyxjQUFjLFFBQVEsa0JBQWtCLHdDQUF3QyxVQUFVLGlCQUFpQixZQUFZLGdCQUFnQix1RUFBdUUsaUNBQWlDO0FBQzliLHFJQUFxSSxNQUFNLGtCQUFrQixVQUFVLFlBQVksc0JBQXNCO0FBQ3pNO0FBQ0EsNklBQTZJO0FBQzdJLHlCQUF5QixRQUFRLHdCQUF3Qix5Q0FBeUMsY0FBYyxhQUFhLHdFQUF3RSxXQUFXLDhFQUE4RSx3QkFBd0IsY0FBYyxlQUFlLGVBQWUsa0JBQWtCLG1HQUFtRztBQUN2ZCx1QkFBdUIsS0FBSyxNQUFNLGFBQWEsWUFBWSxlQUFlLFFBQVEsOENBQThDLGVBQWUsT0FBTztBQUN0SixtQkFBbUIsNERBQTRELHlEQUF5RCx3QkFBd0IsOENBQThDLFNBQVMsYUFBYSxNQUFNLGtCQUFrQix1SEFBdUgsYUFBYSxhQUFhLGdDQUFnQyx5QkFBeUI7QUFDdGMsMklBQTJJLGtCQUFrQixnRUFBZ0UsTUFBTSxhQUFhLFNBQVMsVUFBVSxZQUFZLE9BQU8sbUNBQW1DLHVJQUF1SSxpREFBaUQ7QUFDamYsRUFBRSxXQUFXLFlBQVksVUFBVSxJQUFJLFVBQVUsd0JBQXdCLGtCQUFrQixrRUFBa0Usa0JBQWtCLDZCQUE2QixtQkFBbUIsU0FBUyxVQUFVLFlBQVksUUFBUSxtQ0FBbUMsRUFBRSw0QkFBNEIsV0FBVyxlQUFlLDJFQUEyRSxVQUFVLHFCQUFxQjtBQUMzYyxpQkFBaUIsTUFBTSwwQkFBMEIsZ0JBQWdCLFdBQVcsaUJBQWlCLHFCQUFxQixnQkFBZ0IscUJBQXFCLGdDQUFnQyxXQUFXLHFCQUFxQjtBQUN2TiwyQkFBMkIsTUFBTSxvRUFBb0UsbUVBQW1FLGFBQWEsU0FBUyxNQUFNLG1DQUFtQyxXQUFXLGlCQUFpQixXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUscUNBQXFDLDRCQUE0QixtQkFBbUIsU0FBUyx3Q0FBd0Msa0JBQWtCO0FBQ2pkLGtCQUFrQixJQUFJLGdCQUFnQixpQkFBaUIsbUJBQW1CLHVCQUF1QixVQUFVLElBQUksYUFBYSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sbVBBQW1QLE1BQU0sMkJBQTJCLE1BQU0sWUFBWTtBQUNsZCw2REFBNkQsS0FBSyxvQkFBb0IsbUJBQW1CLDRGQUE0RixnQkFBZ0IscUJBQXFCLEtBQUssS0FBSyxRQUFRLDJFQUEyRSxtQkFBbUIsY0FBYyxTQUFTLG1CQUFtQixXQUFXLGtCQUFrQix1QkFBdUI7QUFDeGIsdUJBQXVCLHNCQUFzQiwwQkFBMEIsMkVBQTJFO0FBQ2xKLG1CQUFtQiw4Q0FBOEMscUJBQXFCLFlBQVksa0NBQWtDLEtBQUssK0NBQStDLFNBQVMsRUFBRSxnREFBZ0QsNkJBQTZCLHdCQUF3QixpQkFBaUIsVUFBVSxTQUFTLGlCQUFpQixLQUFLLGlCQUFpQixFQUFFLHlDQUF5QyxXQUFXLDBCQUEwQixZQUFZLEtBQUssT0FBTztBQUMzZCxLQUFLLGVBQWUsMEJBQTBCLFdBQVcsU0FBUyx5REFBeUQsSUFBSSwrREFBK0QsZUFBZSxNQUFNLHdCQUF3QixVQUFVLGlCQUFpQixTQUFTLEVBQUUsY0FBYywyQkFBMkIsVUFBVSxNQUFNLFlBQVksWUFBWSxJQUFJLElBQUksa0JBQWtCLE1BQU0sMENBQTBDLE1BQU0sNkJBQTZCO0FBQy9jLGlCQUFpQix5RUFBeUUsbUJBQW1CLDBDQUEwQyxZQUFZLG9DQUFvQyxtREFBbUQsbUJBQW1CLFVBQVUsdUJBQXVCLFVBQVUsZUFBZSxpQkFBaUIseURBQXlELGVBQWU7QUFDaGEsbUJBQW1CLGNBQWMsYUFBYSxLQUFLLE1BQU0sYUFBYSxNQUFNLHlCQUF5QixNQUFNLHVDQUF1QyxNQUFNLHNEQUFzRCxzQkFBc0Isa0JBQWtCLE1BQU0sMEJBQTBCLGFBQWEsaUVBQWlFLCtDQUErQyxpQkFBaUIsWUFBWSwrQkFBK0IsaUJBQWlCLE1BQU07QUFDdGUsY0FBYyxzQkFBc0Isc0JBQXNCLGFBQWEsa0JBQWtCLDJEQUEyRCxlQUFlLFdBQVcsaUJBQWlCLDJDQUEyQyxpQkFBaUI7QUFDM1AsaUJBQWlCLGtCQUFrQixTQUFTLEVBQUUsbURBQW1ELG1DQUFtQyxpQkFBaUIsVUFBVSxTQUFTLGVBQWUsS0FBSyxpQkFBaUIsRUFBRSx3Q0FBd0MsV0FBVywwQkFBMEIsY0FBYztBQUMxUyxxQkFBcUIsc0JBQXNCLFVBQVUsY0FBYyxlQUFlLFdBQVcsVUFBVSx1QkFBdUIsVUFBVSxLQUFLLE1BQU0sb0JBQW9CLElBQUksYUFBYSxFQUFFLE1BQU0sSUFBSSxhQUFhLEVBQUUsS0FBSyxNQUFNLDBCQUEwQixVQUFVLEtBQUssTUFBTSxxRkFBcUYsUUFBUSxNQUFNLE9BQU8sb0ZBQW9GLFdBQVc7QUFDdGQsU0FBUyxXQUFXLGtNQUFrTSxZQUFZLFdBQVcsc0JBQXNCLHVFQUF1RSxrRUFBa0UsV0FBVyxzREFBc0QsYUFBYTtBQUMxZCxRQUFRLDJXQUEyVyw2QkFBNkIsUUFBUSxnQ0FBZ0MscUJBQXFCO0FBQzdjLGlCQUFpQix5QkFBeUIsdUJBQXVCLGVBQWUsU0FBUyx1Q0FBdUMsb0NBQW9DLE1BQU0sMEJBQTBCLGVBQWUsU0FBUyx1Q0FBdUM7QUFDblEsY0FBYyw4REFBOEQsdUJBQXVCLFNBQVMsK0ZBQStGLG1CQUFtQixTQUFTLDZFQUE2RSxrQkFBa0IsZUFBZTtBQUNyVixtQkFBbUIscUJBQXFCLE1BQU0sY0FBYyw0RkFBNEYseUNBQXlDLHFCQUFxQixLQUFLLE1BQU0sS0FBSyxLQUFLLHFFQUFxRSxvSkFBb0osUUFBUSxLQUFLLFlBQVksYUFBYTtBQUMxZSxTQUFTLDRGQUE0RixLQUFLLE9BQU8sMENBQTBDLEtBQUssWUFBWSxpQkFBaUIsVUFBVSxjQUFjLFNBQVMsc0JBQXNCLFFBQVEsUUFBUSxpQkFBaUIsVUFBVSw0QkFBNEIsYUFBYSxNQUFNLHFEQUFxRCxNQUFNLGtDQUFrQyxZQUFZLGVBQWUsTUFBTSwyQkFBMkIsTUFBTTtBQUM3ZSxHQUFHLFlBQVksTUFBTSw2QkFBNkIsTUFBTSxxQkFBcUIsZUFBZSxNQUFNLCtCQUErQiwwQkFBMEIsZUFBZSxNQUFNLHVDQUF1QyxRQUFRLE9BQU8sdUNBQXVDLFdBQVc7QUFDeFIsdUZBQXVGLFVBQVUsbUJBQW1CLFdBQVcsTUFBTSxzQkFBc0IsTUFBTSxNQUFNLGtDQUFrQyxzREFBc0QsSUFBSSxnQkFBZ0IsdUJBQXVCLEtBQUssbUNBQW1DLDhDQUE4QztBQUNoWSw0Q0FBNEMsUUFBUSx1SEFBdUgsUUFBUSxRQUFRLGNBQWMsY0FBYyxHQUFHLFVBQVUsVUFBVSw0QkFBNEIsYUFBYSxJQUFJLE1BQU0scURBQXFELElBQUksTUFBTSxrQ0FBa0MsWUFBWSxlQUFlLElBQUksTUFBTSwyQkFBMkIsSUFBSSxNQUFNO0FBQzVjLEdBQUcsWUFBWSxJQUFJLE1BQU0sNkJBQTZCLElBQUksTUFBTSxxQkFBcUIsVUFBVSxlQUFlLE1BQU0sa0JBQWtCLE1BQU0sK0JBQStCLDBCQUEwQixNQUFNLElBQUksYUFBYSxFQUFFLGVBQWUsTUFBTSx3QkFBd0IsVUFBVSxlQUFlLE1BQU0sWUFBWSxRQUFRLElBQUksbUNBQW1DLFdBQVc7QUFDaFgsOE5BQThOLFVBQVUsbUJBQW1CLFdBQVcsTUFBTSxzQkFBc0IsTUFBTSxNQUFNLG9FQUFvRSxNQUFNLHNDQUFzQyxVQUFVO0FBQ3hhLElBQUksTUFBTSxzREFBc0QsVUFBVSx5RUFBeUUsUUFBUSxnQkFBZ0IsUUFBUSxjQUFjLGdCQUFnQiw4Q0FBOEMsS0FBSyxZQUFZLHlEQUF5RCxLQUFLLCtEQUErRCxpQkFBaUIsZUFBZSxVQUFVLGNBQWMsa0JBQWtCLFFBQVE7QUFDL2QsMEJBQTBCLHdDQUF3QyxNQUFNLHVGQUF1RixnQkFBZ0Isa0ZBQWtGLEtBQUssWUFBWSxhQUFhLGtCQUFrQix3RUFBd0UsaUZBQWlGLCtDQUErQztBQUN6ZixHQUFHLDBCQUEwQixrQkFBa0IsNkJBQTZCLDBCQUEwQixRQUFRLCtEQUErRCxLQUFLLEtBQUssc0NBQXNDLGtDQUFrQyx3Q0FBd0MsV0FBVyxpSUFBaUksbUNBQW1DLEtBQUssWUFBWTtBQUN2ZSwwREFBMEQsNkNBQTZDLDBDQUEwQyxhQUFhLGtCQUFrQiw2QkFBNkIsb0JBQW9CLGNBQWMsMEJBQTBCLEtBQUssb0RBQW9ELFNBQVMsRUFBRSxRQUFRLGFBQWEsYUFBYSxTQUFTLGdCQUFnQix1Q0FBdUMsaUJBQWlCLElBQUksY0FBYyxTQUFTO0FBQzNkLHdhQUF3YSwwQ0FBMEMsY0FBYyxtQkFBbUIsZUFBZTtBQUNsZ0IsVUFBVSxvRUFBb0UsS0FBSywyQkFBMkIsNkpBQTZKLGlHQUFpRywrRkFBK0Y7QUFDM2MsMEZBQTBGLEtBQUssWUFBWSxxTUFBcU0sb0JBQW9CLG9CQUFvQjtBQUN4VixpQkFBaUIsTUFBTSxjQUFjLCtFQUErRSxzR0FBc0cseUJBQXlCLGFBQWEsa0JBQWtCLGtDQUFrQywwQ0FBMEMsS0FBSyxVQUFVLDZDQUE2Qyx5QkFBeUIsd0JBQXdCLHdDQUF3QztBQUNuZixLQUFLLG9CQUFvQixxQkFBcUIsaUVBQWlFLGlCQUFpQixZQUFZLHlDQUF5QyxRQUFRLFNBQVMsU0FBUyxvQkFBb0IsbUJBQW1CLElBQUksSUFBSSxTQUFTLFVBQVU7QUFDalIsaUJBQWlCLE1BQU0sT0FBTyxVQUFVLCtCQUErQiwyQ0FBMkMsUUFBUSw2Q0FBNkMsdUNBQXVDLHdCQUF3QixlQUFlLG1DQUFtQyxnQkFBZ0IsSUFBSSxzQkFBc0IsU0FBUyxPQUFPLFFBQVEscUNBQXFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsc0NBQXNDLHNDQUFzQztBQUNsZSxvQkFBb0IsaUNBQWlDLElBQUksSUFBSSxNQUFNLEVBQUUsaUJBQWlCLHNCQUFzQixzQkFBc0Isa0NBQWtDLElBQUksZUFBZSxJQUFJLHVCQUF1QixlQUFlLFlBQVksTUFBTSxlQUFlLFlBQVksSUFBSSxnQ0FBZ0MsTUFBTSxRQUFRLFNBQVMscUVBQXFFLFVBQVUsU0FBUyxFQUFFLElBQUksSUFBSSxrQkFBa0Isb0NBQW9DO0FBQ2plLG9CQUFvQiwySEFBMkgsd0NBQXdDLE1BQU0sdUNBQXVDLG9HQUFvRyxNQUFNLG1DQUFtQyw4QkFBOEIsU0FBUyxnQkFBZ0IsWUFBWSxhQUFhLGtCQUFrQixJQUFJLE1BQU0sV0FBVyxLQUFLLE1BQU07QUFDbmYsbUJBQW1CLG9CQUFvQiw2QkFBNkIsYUFBYSxlQUFlLEdBQUcsa0JBQWtCLGdCQUFnQixpQkFBaUIsc0JBQXNCLFNBQVMsY0FBYyxpQkFBaUIsZ0JBQWdCLDZCQUE2QixhQUFhLGVBQWUsR0FBRyxrQkFBa0IsZUFBZSxjQUFjLFNBQVMsY0FBYyxlQUFlLFlBQVksYUFBYSxrQkFBa0IsY0FBYyxXQUFXLE1BQU0sWUFBWTtBQUMzYyxlQUFlLGtCQUFrQixtQ0FBbUMsYUFBYSxpQkFBaUIsZUFBZSx3R0FBd0csaUJBQWlCLGNBQWMsb0JBQW9CLHFCQUFxQixxQkFBcUIsb0JBQW9CLGlCQUFpQixtQkFBbUIsZUFBZTtBQUM3WCxlQUFlLFFBQVEsRUFBRSxLQUFLLGlCQUFpQixFQUFFLDZDQUE2QyxXQUFXLDBCQUEwQixnQkFBZ0IsaUNBQWlDLEVBQUUsd0JBQXdCLHdDQUF3QyxnQ0FBZ0M7QUFDdFIsbUJBQW1CLFlBQVksOFBBQThQLDhEQUE4RCxTQUFTO0FBQ3BXLG1CQUFtQixZQUFZLHFFQUFxRSw4REFBOEQsU0FBUyx1QkFBdUIsaUJBQWlCLG1CQUFtQixjQUFjLFNBQVM7QUFDN1AsbUJBQW1CLHVEQUF1RCw4QkFBOEIsVUFBVSxjQUFjLGtCQUFrQixvQkFBb0IsT0FBTyxVQUFVLElBQUksS0FBSywwSEFBMEgsTUFBTSw2SEFBNkgsTUFBTSxXQUFXLEtBQUssNEJBQTRCO0FBQy9lLFVBQVUsSUFBSSxLQUFLLE1BQU0sNkZBQTZGLFdBQVcsR0FBRyxvQkFBb0IsUUFBUSx1REFBdUQsU0FBUyxhQUFhLFVBQVUsTUFBTSxxRkFBcUYseUVBQXlFLFNBQVMsU0FBUyxVQUFVLE1BQU0sa0JBQWtCLE1BQU07QUFDcmQseUNBQXlDLE1BQU0sbUJBQW1CLGVBQWUsb0JBQW9CLGFBQWEsbUJBQW1CLGtCQUFrQixpQ0FBaUMsc0JBQXNCLHdCQUF3QixpQ0FBaUM7QUFDdlEsaUJBQWlCLGtCQUFrQix3QkFBd0IsV0FBVyxLQUFLLFdBQVcsSUFBSSxnQkFBZ0IsT0FBTyxTQUFTLEVBQUUsY0FBYyxxQkFBcUIsTUFBTSxRQUFRLG1DQUFtQyxNQUFNLFFBQVEsbUNBQW1DLE1BQU0sUUFBUSxXQUFXLGdDQUFnQyxVQUFVLE9BQU8sTUFBTSxrQkFBa0IsMEJBQTBCLGNBQWMsU0FBUyxVQUFVLHNDQUFzQyxTQUFTO0FBQzdjLGlCQUFpQiw0QkFBNEIsY0FBYyx1Q0FBdUMsTUFBTSxRQUFRLElBQUkseUJBQXlCLFNBQVMsZ0JBQWdCLElBQUksaUJBQWlCLFNBQVMsaUJBQWlCLE1BQU0sZUFBZSxNQUFNLGdDQUFnQyxNQUFNLGVBQWUsTUFBTSxnQ0FBZ0MsZUFBZSxrQkFBa0IsSUFBSSxTQUFTLFNBQVMsaUJBQWlCLGlDQUFpQztBQUNwYixtQkFBbUIsZ0JBQWdCLHFEQUFxRCxRQUFRLGNBQWMsUUFBUSxXQUFXLE1BQU0sb0JBQW9CLDZGQUE2RixVQUFVLHFCQUFxQixNQUFNLHdCQUF3QixNQUFNLGdEQUFnRCx5Q0FBeUMsY0FBYztBQUNsYSwyREFBMkQsUUFBUSxTQUFTLGlCQUFpQixNQUFNLGVBQWUsTUFBTSxRQUFRLDBDQUEwQyxjQUFjLGtCQUFrQixJQUFJLGNBQWMsU0FBUyxpQkFBaUIsTUFBTSxlQUFlLE1BQU0sbURBQW1ELG9CQUFvQixTQUFTLGdCQUFnQixNQUFNLGVBQWUsTUFBTSxNQUFNLGdCQUFnQixNQUFNLFVBQVU7QUFDbGIsZ0VBQWdFLFdBQVcsTUFBTSwyQ0FBMkMsMENBQTBDLE1BQU0sV0FBVyx5QkFBeUIsa0VBQWtFLFNBQVMsRUFBRSxVQUFVLFNBQVMsRUFBRSxJQUFJLFVBQVUsY0FBYyxnREFBZ0QsTUFBTSxzQkFBc0Isa0JBQWtCLCtDQUErQyxJQUFJLFdBQVcsSUFBSTtBQUM5ZSxpRUFBaUUsU0FBUyxVQUFVLE1BQU0sc0JBQXNCLE1BQU0sbUNBQW1DLE1BQU0sVUFBVSxnQ0FBZ0MsWUFBWSxrQkFBa0IsRUFBRSxjQUFjLGFBQWEsSUFBSSxJQUFJO0FBQzVRLGlCQUFpQixTQUFTLGtCQUFrQixtQkFBbUIsZ0JBQWdCLDJDQUEyQyxTQUFTLGlCQUFpQixpRkFBaUYsaUJBQWlCLFVBQVUsU0FBUyxpQkFBaUIsS0FBSyxpQkFBaUIsRUFBRSx5Q0FBeUMsZ0JBQWdCLFdBQVcsZ0JBQWdCLDBCQUEwQixhQUFhLE1BQU0sZ0JBQWdCLE1BQU0sV0FBVyxNQUFNLGNBQWM7QUFDeGUsVUFBVSxlQUFlLGNBQWMsUUFBUSxJQUFJLEdBQUcsbUJBQW1CLFNBQVMsRUFBRSxVQUFVLFFBQVEsUUFBUSxXQUFXLHFCQUFxQixjQUFjLHlCQUF5QixvQ0FBb0MsWUFBWSxVQUFVLE1BQU0sc0RBQXNELFVBQVUsTUFBTSw4QkFBOEIsU0FBUyxnQkFBZ0IsWUFBWSx5QkFBeUIsbUJBQW1CLElBQUk7QUFDOWEsbUJBQW1CLHlCQUF5QixTQUFTLEVBQUUsa0JBQWtCLGtCQUFrQixpQ0FBaUMsT0FBTyx3REFBd0QsS0FBSyxRQUFRLEtBQUsscUJBQXFCLFNBQVMsd0ZBQXdGLEtBQUssU0FBUywyQkFBMkIsSUFBSSxLQUFLLElBQUksVUFBVTtBQUNuWSxlQUFlLEtBQUssU0FBUyxFQUFFLFFBQVEsdUJBQXVCLGtCQUFrQixJQUFJLG9DQUFvQyxrQ0FBa0MsTUFBTSx5QkFBeUIsbURBQW1ELEtBQUssd0VBQXdFLDhFQUE4RSxvQkFBb0Isb0JBQW9CLE1BQU0sMkJBQTJCLGFBQWEsT0FBTyxzQ0FBc0M7QUFDMWdCLGtCQUFrQixNQUFNLDJCQUEyQixVQUFVLE1BQU0seUJBQXlCLHdCQUF3QixJQUFJLHNCQUFzQixlQUFlLGdGQUFnRixNQUFNLGlDQUFpQyxNQUFNLGFBQWEsYUFBYSxjQUFjLG1DQUFtQyxrQkFBa0IsYUFBYSxzQkFBc0IsYUFBYSxtQkFBbUIsa0JBQWtCLE1BQU07QUFDbGQsNkJBQTZCLHNCQUFzQixTQUFTLGlCQUFpQixVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsa0JBQWtCLElBQUksTUFBTSxZQUFZLGVBQWUsS0FBSyxTQUFTLEVBQUUsUUFBUSxVQUFVLE9BQU8sTUFBTSxnQkFBZ0IsYUFBYSxrQkFBa0IsSUFBSSxNQUFNO0FBQzVSLGVBQWUsS0FBSyxTQUFTLEVBQUUsUUFBUSxJQUFJLGNBQWMsc0NBQXNDLElBQUksUUFBUSxTQUFTLFNBQVMsTUFBTSx5QkFBeUIsNENBQTRDLGVBQWUsSUFBSSxzQkFBc0IsU0FBUyxVQUFVLGVBQWUsSUFBSSxNQUFNLFNBQVMsU0FBUyxNQUFNLHNCQUFzQixJQUFJLE1BQU0sU0FBUyxXQUFXLFNBQVMsZ0JBQWdCLFVBQVUsT0FBTyxNQUFNLGdCQUFnQixhQUFhLGtCQUFrQixJQUFJLE1BQU07QUFDbGQsNlFBQTZRLGFBQWE7QUFDMVIsZUFBZSwyQkFBMkIsZ0NBQWdDLG9EQUFvRCxJQUFJLGtCQUFrQixlQUFlLDJCQUEyQixTQUFTLHFCQUFxQiwwQ0FBMEMsVUFBVTtBQUNoUixpQkFBaUIscUJBQXFCLFFBQVEsc0JBQXNCLGtFQUFrRSx1Q0FBdUMsZUFBZSx5RUFBeUUsZ0JBQWdCLFNBQVMsS0FBSyxjQUFjLFlBQVksTUFBTSxZQUFZLE1BQU0sYUFBYSxNQUFNLG9CQUFvQixNQUFNLGFBQWEsd0JBQXdCLHFCQUFxQjtBQUM1YixpQkFBaUIsTUFBTSxLQUFLLGlDQUFpQyxxQkFBcUIsd0NBQXdDLHNCQUFzQixxQkFBcUIsbURBQW1ELEtBQUssSUFBSSxRQUFRLEtBQUssV0FBVywyQ0FBMkMsT0FBTyxLQUFLLE1BQU0sU0FBUyxRQUFRLFNBQVMsS0FBSyxhQUFhLElBQUksOEJBQThCLFVBQVUsd0NBQXdDLGdEQUFnRDtBQUN0ZSxLQUFLLHNCQUFzQix3SEFBd0gsaUJBQWlCLGtCQUFrQixVQUFVLGtDQUFrQyxtQkFBbUIsTUFBTSxlQUFlLDJDQUEyQyxxQkFBcUIsbUJBQW1CLGNBQWMsSUFBSSxrQ0FBa0MsTUFBTSw0Q0FBNEMsTUFBTSxZQUFZLE1BQU0sZUFBZTtBQUMxZSxRQUFRLGVBQWUsU0FBUyxJQUFJLEVBQUUsZUFBZSxPQUFPLE9BQU8sV0FBVyxNQUFNLElBQUksUUFBUSx3RkFBd0YsU0FBUyw0Q0FBNEMsTUFBTSxZQUFZLE1BQU0sbUJBQW1CLE1BQU0sK0JBQStCLFVBQVU7QUFDdlUsaUJBQWlCLFNBQVMsMkRBQTJELFVBQVUsbUNBQW1DLFNBQVMsZUFBZTtBQUMxSixlQUFlLGFBQWEsRUFBRSxrQkFBa0Isb0JBQW9CLCtDQUErQyxXQUFXLEtBQUssMkJBQTJCLFVBQVUsSUFBSSx1QkFBdUIsU0FBUyxXQUFXLFVBQVUsaURBQWlELEtBQUssZUFBZSxLQUFLLGlCQUFpQixFQUFFLDBDQUEwQyxXQUFXLDBCQUEwQixhQUFhO0FBQzFaLGlCQUFpQixPQUFPLE9BQU8sb0JBQW9CLGtCQUFrQix3QkFBd0IsSUFBSSxFQUFFLHNCQUFzQixRQUFRLE9BQU8sZUFBZSxpQ0FBaUMsS0FBSyxjQUFjLG1DQUFtQyxjQUFjLHFCQUFxQixZQUFZLHVCQUF1QixnREFBZ0QsNkJBQTZCLG1DQUFtQyxrQkFBa0IsWUFBWSxVQUFVO0FBQzVjLGlCQUFpQixRQUFRLEtBQUssSUFBSSxZQUFZLFFBQVEsa0NBQWtDLGVBQWUsdUNBQXVDLFFBQVEsS0FBSyx3QkFBd0IsSUFBSSx1Q0FBdUMsUUFBUSx5Q0FBeUMsY0FBYyxjQUFjO0FBQzNTLGlCQUFpQixvQkFBb0Isa0JBQWtCLHNCQUFzQixtQ0FBbUMsMkJBQTJCLFNBQVMsRUFBRSxRQUFRLE1BQU0sY0FBYyxrQ0FBa0MsMkJBQTJCLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLGFBQWEsTUFBTSxZQUFZLE1BQU0sYUFBYSxNQUFNLGFBQWEsTUFBTSw0QkFBNEIsTUFBTSxxQkFBcUIsV0FBVyxJQUFJLHVCQUF1QixPQUFPLElBQUksUUFBUSxXQUFXLFdBQVcsY0FBYztBQUN0ZixFQUFFLFlBQVkseUNBQXlDLG1CQUFtQix5QkFBeUIsYUFBYSxhQUFhLFNBQVMsU0FBUyxZQUFZLFFBQVE7QUFDbkssaUJBQWlCLEdBQUcsUUFBUSxJQUFJLEtBQUssY0FBYyxPQUFPLDBCQUEwQixTQUFTLEVBQUUsY0FBYywyQkFBMkIsU0FBUyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssZ0JBQWdCLDhCQUE4QixJQUFJLEtBQUssT0FBTyxNQUFNLEdBQUcsMkJBQTJCLElBQUksZUFBZSw4REFBOEQsb0JBQW9CLDRDQUE0QyxrQkFBa0I7QUFDdmIsMkRBQTJELFlBQVksYUFBYSxjQUFjLGNBQWMsb0JBQW9CLElBQUksSUFBSSxvQkFBb0IsYUFBYSxjQUFjLFNBQVMsZ0JBQWdCLGNBQWMsUUFBUSxLQUFLLGNBQWMsVUFBVSxLQUFLLFFBQVEsaUJBQWlCLHFCQUFxQixZQUFZLGFBQWEsb0NBQW9DLGNBQWMsWUFBWSxTQUFTLFlBQVksYUFBYSw0QkFBNEIsSUFBSSxHQUFHLGNBQWM7QUFDcGUsTUFBTSxXQUFXLGdCQUFnQixRQUFRLFFBQVEsV0FBVywyQkFBMkIsb0pBQW9KLGVBQWUsTUFBTSxXQUFXLGdCQUFnQixRQUFRLFNBQVMsV0FBVyxnQkFBZ0IsTUFBTSxVQUFVLEtBQUssZ0NBQWdDLFNBQVMsTUFBTSxTQUFTLGNBQWMsaUJBQWlCLGNBQWM7QUFDamMsY0FBYywyQkFBMkIsMERBQTBELGlCQUFpQixRQUFRLEtBQUssV0FBVyxnQ0FBZ0MsT0FBTyxLQUFLLE1BQU0sU0FBUyxRQUFRLFNBQVMsS0FBSyxJQUFJLGFBQWEsZ0NBQWdDLE9BQU8sSUFBSSxTQUFTLGNBQWMsS0FBSyxTQUFTLE9BQU8sY0FBYyxLQUFLLGdCQUFnQixPQUFPLGVBQWUsMkJBQTJCLCtCQUErQixtQkFBbUI7QUFDM2MsZUFBZSxRQUFRLEdBQUcsa0JBQWtCLFdBQVcsd0JBQXdCLDBCQUEwQixJQUFJLFFBQVEsS0FBSyxVQUFVLGFBQWEsZUFBZSxJQUFJLE9BQU8sNkRBQTZELEtBQUssSUFBSSxPQUFPLFFBQVEsWUFBWSxhQUFhLElBQUksT0FBTyxNQUFNLGdCQUFnQixhQUFhLG1CQUFtQix3QkFBd0IsSUFBSSxtQ0FBbUMsUUFBUSxvQkFBb0I7QUFDcmIscUJBQXFCLFFBQVEsaUJBQWlCLGlDQUFpQyxpQkFBaUIsc0JBQXNCLHdCQUF3QixvQkFBb0Isa0JBQWtCLHFDQUFxQyxvQkFBb0IscUJBQXFCLDJCQUEyQixRQUFRLHNCQUFzQiwyRUFBMkUsS0FBSyxZQUFZLEdBQUcsc0JBQXNCLGtDQUFrQyxnQkFBZ0I7QUFDbGUsUUFBUSxJQUFJLFFBQVEsS0FBSyxnQkFBZ0IsUUFBUSxRQUFRLE9BQU8sUUFBUSxXQUFXLFlBQVksVUFBVSxLQUFLLElBQUksSUFBSSxnQkFBZ0IsaUJBQWlCLHNCQUFzQixpQkFBaUIsaUJBQWlCLGtCQUFrQixVQUFVLDJDQUEyQyxXQUFXLHNCQUFzQix1Q0FBdUMsRUFBRSxpQ0FBaUMsNEJBQTRCLGlCQUFpQix1Q0FBdUMsS0FBSztBQUMxZCxjQUFjLGNBQWMsaUNBQWlDLElBQUksbUJBQW1CLFlBQVksc0JBQXNCLEtBQUssS0FBSyxRQUFRLEtBQUssaUNBQWlDLFFBQVEsS0FBSyxnQkFBZ0IsU0FBUyxFQUFFLGtCQUFrQixxQkFBcUIsa0JBQWtCLGFBQWEsWUFBWSxXQUFXLEtBQUssV0FBVyxRQUFRLFNBQVMsRUFBRSxRQUFRLGNBQWMsaUNBQWlDLGNBQWMsMkJBQTJCLFVBQVUsU0FBUyxFQUFFLElBQUksMkJBQTJCLE1BQU07QUFDaGYsR0FBRyxPQUFPLE1BQU0sYUFBYSxXQUFXLElBQUksTUFBTSxNQUFNLGtCQUFrQixhQUFhLGNBQWMsYUFBYSxhQUFhLEdBQUcsZ0JBQWdCLGVBQWUsSUFBSSxpQkFBaUIsS0FBSyxzREFBc0QsWUFBWSxTQUFTLEVBQUUsSUFBSSxvQ0FBb0Msd0NBQXdDLGdCQUFnQixhQUFhLGtCQUFrQixJQUFJLFFBQVEsWUFBWSxnQkFBZ0IsUUFBUSxTQUFTLEVBQUUsSUFBSSxjQUFjO0FBQ3BkLGlCQUFpQixlQUFlLFNBQVMsRUFBRSxJQUFJLDBCQUEwQixjQUFjLGdDQUFnQyxVQUFVLGlCQUFpQixVQUFVLE9BQU8sUUFBUSxnQkFBZ0IsYUFBYSxrQkFBa0IsSUFBSSxRQUFRLFlBQVksSUFBSSxLQUFLLHdEQUF3RCwrQkFBK0IsV0FBVyxLQUFLLFNBQVMsUUFBUSxxQkFBcUIsU0FBUyxtQkFBbUIsVUFBVSxZQUFZLFlBQVksTUFBTTtBQUM1YyxrQkFBa0IsdUJBQXVCLFVBQVUsU0FBUyxFQUFFLGNBQWMsVUFBVSxNQUFNLG1CQUFtQixrQkFBa0IsMEhBQTBILFVBQVUsWUFBWSxZQUFZLE1BQU0sOEJBQThCLE9BQU87QUFDeFUsbUJBQW1CLGtCQUFrQixzQkFBc0IsTUFBTSxrQ0FBa0MsOEVBQThFLFFBQVEsaUJBQWlCLDJFQUEyRSxVQUFVLFVBQVUsOEJBQThCLGVBQWUsMEJBQTBCLDBCQUEwQjtBQUMxWSxpQkFBaUIsUUFBUSxjQUFjLDBCQUEwQixzQkFBc0IsMEJBQTBCLE1BQU0sc0JBQXNCLE1BQU0sNkJBQTZCLHNCQUFzQixRQUFRO0FBQzlNLG1CQUFtQixrRUFBa0UsS0FBSyw2REFBNkQsOEJBQThCLHNEQUFzRCxVQUFVLGNBQWMsb0JBQW9CLFFBQVEsaUJBQWlCLHNCQUFzQixRQUFRLHFCQUFxQixXQUFXLFdBQVc7QUFDelgsa09BQWtPLFNBQVMsd0JBQXdCLEdBQUcsUUFBUSxpQkFBaUIsVUFBVSxnQkFBZ0IsU0FBUyxjQUFjLFVBQVUsVUFBVSwwQkFBMEIsUUFBUSwwQkFBMEIsUUFBUSwyQkFBMkIsUUFBUSxzQ0FBc0MsUUFBUTtBQUN6ZixRQUFRLFNBQVMsb0ZBQW9GLG9GQUFvRixVQUFVLE1BQU0sZ0NBQWdDLGlCQUFpQixrQkFBa0IsWUFBWSxRQUFRLGVBQWUsc0JBQXNCLFlBQVksd0JBQXdCLHdIQUF3SDtBQUNqZSxpQ0FBaUMsc0JBQXNCLGdCQUFnQixRQUFRLGVBQWUsc0JBQXNCLGdCQUFnQixRQUFRLGtHQUFrRyxFQUFFLHFDQUFxQyxLQUFLLEtBQUssVUFBVSxZQUFZLFFBQVEsWUFBWSxVQUFVLFNBQVM7QUFDNVYsNEJBQTRCLG1DQUFtQyx5QkFBeUIsbUhBQW1ILHFGQUFxRiwrQ0FBK0Msd0RBQXdELHlEQUF5RCxXQUFXLGtCQUFrQixpQkFBaUI7QUFDOWUsVUFBVSxzQkFBc0Isa0JBQWtCLDhCQUE4Qix5Q0FBeUMsWUFBWSxTQUFTLDBDQUEwQyxTQUFTLEVBQUUscUJBQXFCLGFBQWEsVUFBVSx5QkFBeUIsU0FBUyxFQUFFLGtCQUFrQixjQUFjLGNBQWMsUUFBUSxvQkFBb0IsYUFBYSxXQUFXLGdCQUFnQiwyQ0FBMkMsYUFBYSxXQUFXLGNBQWMsdUJBQXVCO0FBQzdlLEtBQUssV0FBVyxNQUFNLFVBQVUsa0RBQWtELG9CQUFvQixXQUFXLGdDQUFnQyxXQUFXLGNBQWMsdUJBQXVCLFVBQVUsWUFBWSxlQUFlLHVCQUF1QixhQUFhLFNBQVMsRUFBRSxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsa0JBQWtCLElBQUksTUFBTSxXQUFXLElBQUkscUJBQXFCLFVBQVUsU0FBUztBQUN4WixRQUFRLDRFQUE0RSwrQ0FBK0MsaUtBQWlLLHlCQUF5Qix5QkFBeUIsNEJBQTRCLGlCQUFpQjtBQUNuWSxxQkFBcUIsV0FBVyxXQUFXLG1GQUFtRixhQUFhLGNBQWMsb0JBQW9CLDhFQUE4RSxZQUFZLCtCQUErQixvQkFBb0IsNkJBQTZCLG9CQUFvQixxQkFBcUIsdUJBQXVCLGVBQWUsY0FBYztBQUNwYixlQUFlLDBDQUEwQyx5QkFBeUIsYUFBYSxvQkFBb0Isb0JBQW9CO0FBQ3ZJLGlCQUFpQixrQkFBa0IsaU5BQWlOLHlCQUF5QiwwQkFBMEIsZ0JBQWdCLGdCQUFnQixnQ0FBZ0MsZ0NBQWdDLDRCQUE0QixpQkFBaUIsOEJBQThCO0FBQ2xkLG9CQUFvQixnQkFBZ0IsWUFBWTtBQUNoRCx5QkFBeUIsUUFBUSxJQUFJLHNDQUFzQyxnQ0FBZ0MsaUJBQWlCLG9DQUFvQyxZQUFZLEtBQUssTUFBTSw2REFBNkQsMkRBQTJELDJEQUEyRCwyQkFBMkIsNERBQTRELGFBQWEsUUFBUSxZQUFZLFFBQVE7QUFDMWUsUUFBUSxhQUFhLFFBQVEsYUFBYSxPQUFPLFFBQVEsMkNBQTJDLGNBQWMsZ0JBQWdCLFNBQVMsVUFBVSxTQUFTLHFCQUFxQixjQUFjLFVBQVUsU0FBUyxxQkFBcUIsZUFBZSxpQkFBaUIsVUFBVSxhQUFhLGFBQWEsU0FBUyxtQkFBbUIsaUJBQWlCLFVBQVU7QUFDcFcsbUJBQW1CLGdEQUFnRCxVQUFVLGFBQWEsb0ZBQW9GO0FBQzlLLHVCQUF1QixXQUFXLHFCQUFxQix3RUFBd0Usc0JBQXNCLHdEQUF3RCx3QkFBd0Isc0JBQXNCLDRCQUE0Qix3SUFBd0kseUJBQXlCLHdCQUF3QiwwQkFBMEI7QUFDMWUsS0FBSywrQkFBK0Isb0JBQW9CLCtCQUErQixvQkFBb0IsWUFBWSxjQUFjLGlCQUFpQixxRkFBcUYsTUFBTSxTQUFTLG1CQUFtQixrRUFBa0UsT0FBTztBQUN0VixlQUFlLGdCQUFnQixvQkFBb0IsR0FBRyw0Q0FBNEMsUUFBUSxHQUFHLGNBQWMsNkJBQTZCLFFBQVEsc0JBQXNCLHdEQUF3RCxTQUFTLFdBQVcsZ0JBQWdCLHFCQUFxQixjQUFjLGFBQWEsMEJBQTBCO0FBQzVWLCtCQUErQix5QkFBeUIsbUJBQW1CLFlBQVksTUFBTSxRQUFRLFVBQVUsdUNBQXVDLFVBQVUsa0JBQWtCLFVBQVUsUUFBUSxTQUFTLHFCQUFxQiw4QkFBOEIsUUFBUSxnREFBZ0QsVUFBVSxXQUFXLFdBQVcsb0JBQW9CLHlCQUF5QixZQUFZLGtDQUFrQztBQUNuYixlQUFlLFlBQVksd0JBQXdCLG9CQUFvQixnQ0FBZ0Msa0NBQWtDLGlCQUFpQixrQkFBa0Isa0NBQWtDLGtCQUFrQiw0QkFBNEIsaUJBQWlCLFFBQVEseUJBQXlCLGNBQWMsWUFBWSwrREFBK0Qsa0JBQWtCLGVBQWU7QUFDeGEsb0RBQW9ELHlCQUF5QixnQ0FBZ0MsbUJBQW1CLHFEQUFxRCx5QkFBeUIsYUFBYSx3QkFBd0Isc0JBQXNCLGNBQWMscUJBQXFCLEVBQUUsYUFBYSxlQUFlO0FBQzFVLG9EQUFvRCxNQUFNLFdBQVcsR0FBRyxvQ0FBb0MsWUFBWSxxQ0FBcUMsS0FBSyxpQkFBaUIsZUFBZSxlQUFlLDZEQUE2RCxlQUFlLDZIQUE2SDtBQUMxWix1QkFBdUIsTUFBTSwwQkFBMEIsUUFBUSxhQUFhLFlBQVksV0FBVyxtQ0FBbUMsd0JBQXdCLGdCQUFnQixrQ0FBa0MsS0FBSyxTQUFTLEtBQUssY0FBYyxrQkFBa0IsMEJBQTBCLFFBQVEsYUFBYSxZQUFZLFdBQVcsdUNBQXVDLHdCQUF3QixnQkFBZ0Isa0NBQWtDLGNBQWMsWUFBWSxFQUFFO0FBQ3RkLHVCQUF1Qiw0QkFBNEIsTUFBTSxRQUFRLDBCQUEwQixRQUFRLGFBQWEsWUFBWSxXQUFXLFlBQVkscUJBQXFCLGFBQWEsZUFBZSxjQUFjLHlCQUF5Qix5Q0FBeUMseUJBQXlCLDBEQUEwRCxNQUFNLHNCQUFzQixjQUFjLGFBQWEsVUFBVSxhQUFhO0FBQ3JiLGVBQWUsZUFBZSxzQkFBc0IsYUFBYSxVQUFVLG9CQUFvQixrQkFBa0IsZUFBZSxlQUFlLHNCQUFzQixhQUFhLFVBQVUsWUFBWSxVQUFVLGNBQWMsVUFBVSxpQkFBaUIsUUFBUSxJQUFJLGVBQWUsUUFBUTtBQUM5UixtQkFBbUIsVUFBVSxxQkFBcUIsU0FBUyw4QkFBOEIsUUFBUSxhQUFhLGdCQUFnQiwyRUFBMkUsUUFBUSxXQUFXLEtBQUssV0FBVywyQkFBMkIsWUFBWSx5QkFBeUIsTUFBTSxVQUFVLE1BQU0sd0JBQXdCLE1BQU0sMkRBQTJELE1BQU07QUFDamEsUUFBUSxvREFBb0QsS0FBSztBQUNqRSxRQUFRLGtiQUFrYixRQUFRLGlDQUFpQztBQUNuZSw0S0FBNEssd0RBQXdELHNDQUFzQyx3Q0FBd0MsdUJBQXVCLFdBQVcsMERBQTBEO0FBQzlZLG9CQUFvQixlQUFlLGtFQUFrRSw4QkFBOEIsdUJBQXVCLGtCQUFrQixlQUFlLDhCQUE4QixtQkFBbUIsdUtBQXVLLGdDQUFnQyxnQkFBZ0Isa0NBQWtDO0FBQ3JlLG1CQUFtQixhQUFhLHVCQUF1QiwyQkFBMkIsd0JBQXdCLGVBQWUsb0RBQW9ELDJCQUEyQix1QkFBdUIsUUFBUSw0QkFBNEIsVUFBVSxpQkFBaUIsYUFBYSxjQUFjLGVBQWUsaUJBQWlCLDhCQUE4QjtBQUN2WCxtQkFBbUIsaUJBQWlCLDhCQUE4QixzREFBc0QsdUtBQXVLLHlDQUF5QyxnQkFBZ0IsTUFBTSxhQUFhLFdBQVc7QUFDdFgsR0FBRyxrQkFBa0IsY0FBYyxpQkFBaUIsOEJBQThCLDBCQUEwQiw4QkFBOEIsYUFBYSw2QkFBNkIsNENBQTRDLDZCQUE2QiwyQkFBMkIsV0FBVyxFQUFFLFVBQVUsK0JBQStCO0FBQzlVLDJDQUEyQyxtQkFBbUIsOEJBQThCLDBEQUEwRCx1QkFBdUIsZUFBZTs7Ozs7Ozs7QUNqVS9LOztBQUViLFFBQVEsbUJBQU8sQ0FBQyxHQUFXO0FBQzNCLElBQUksSUFBcUM7QUFDekMsRUFBRSxrQkFBa0I7QUFDcEIsRUFBRSxtQkFBbUI7QUFDckIsRUFBRSxLQUFLLFVBa0JOOzs7Ozs7OztBQ3hCWTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyxFQUFFLEVBUzFDO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQSxFQUFFLHlDQUE2RDtBQUMvRCxFQUFFLEtBQUssRUFFTjs7Ozs7Ozs7QUNyQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2EsTUFBTSxtQkFBTyxDQUFDLEdBQU8sNktBQTZLO0FBQy9NLGtCQUFrQixVQUFVLGVBQWUscUJBQXFCLDZCQUE2QiwwQkFBMEIsMERBQTBELDRFQUE0RSxPQUFPLHdEQUF3RCxnQkFBZ0IsR0FBRyxXQUFXLEdBQUcsWUFBWTs7Ozs7Ozs7QUNWelc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2EscVdBQXFXLGNBQWMsNkNBQTZDLDJCQUEyQjtBQUN4YyxPQUFPLHFCQUFxQixTQUFTLGdDQUFnQyxpQ0FBaUMsOEJBQThCLHNCQUFzQixrQkFBa0IsYUFBYSxlQUFlLFlBQVksa0JBQWtCO0FBQ3RPLG1DQUFtQyw0TEFBNEwsbURBQW1ELG9DQUFvQyx1REFBdUQsY0FBYyx3QkFBd0Isa0JBQWtCLGFBQWEsZUFBZSxZQUFZLGtCQUFrQjtBQUMvZCxnQkFBZ0IsaUJBQWlCLDBCQUEwQix5REFBeUQsYUFBYSxJQUFJO0FBQ3JJLGtCQUFrQixVQUFVLGVBQWUsNEhBQTRILHlCQUF5QixzQkFBc0IsYUFBYSx1QkFBdUIsSUFBSSx3QkFBd0IsYUFBYSw0RUFBNEUsT0FBTztBQUN0WCxnQkFBZ0IsT0FBTyxzRUFBc0UsY0FBYyxvREFBb0QsbUJBQW1CLE9BQU8sbUJBQW1CLHdDQUF3QyxZQUFZLEVBQUUsYUFBYSxnQkFBZ0I7QUFDL1Isc0JBQXNCLGVBQWUseUNBQXlDLFNBQVMsaUJBQWlCLGVBQWUsaUNBQWlDLE1BQU0saUNBQWlDLG9CQUFvQixtSEFBbUgsU0FBUywyR0FBMkcsSUFBSSxtQkFBbUIsb0JBQW9CLFdBQVcsS0FBSztBQUNyZixLQUFLLGVBQWUsZ0JBQWdCLHlEQUF5RCxtQkFBbUIsd0NBQXdDLHlJQUF5SSw4QkFBOEIsa0ZBQWtGO0FBQ2paLGtCQUFrQixvQkFBb0IsYUFBYSx3QkFBd0IsdUJBQXVCLEVBQUUsU0FBUyxjQUFjLG1CQUFtQixnQkFBZ0IsTUFBTSxtQkFBbUIseURBQXlELGFBQWEseURBQXlELEVBQUUsMENBQTBDLDBDQUEwQztBQUM1WSxPQUFPLGFBQWEsSUFBSSxnQkFBZ0IsSUFBSSx3RUFBd0UsYUFBYTtBQUNqSSxnQkFBZ0IsRUFBRSw4QkFBOEIsZUFBZSx3QkFBd0IsSUFBSSxtQkFBbUIsUUFBUSxlQUFlLElBQUksRUFBRSxTQUFTLHFCQUFxQix1QkFBdUIsU0FBUyxNQUFNLGtCQUFrQiw4RkFBOEYsV0FBVyxpQkFBaUIsR0FBRyxnQkFBZ0IsR0FBRyxnQkFBZ0IsR0FBRyxxQkFBcUIsR0FBRyxrQkFBa0IsR0FBRyxnQkFBZ0I7QUFDamMsMERBQTBELEdBQUcsV0FBVztBQUN4RSxvQkFBb0IsaUJBQWlCLDRIQUE0SCxVQUFVLHFDQUFxQyxZQUFZLHNDQUFzQyw2QkFBNkIseURBQXlELHlGQUF5Rix5QkFBeUIsc0JBQXNCLGFBQWE7QUFDN2UsWUFBWSxJQUFJLHdCQUF3QixhQUFhLE9BQU8sc0RBQXNELHFCQUFxQixhQUFhLEdBQUcsNEhBQTRILFlBQVksdUJBQXVCLHFCQUFxQixxQkFBcUIsR0FBRyxxQkFBcUIsYUFBYSxxQkFBcUIsU0FBUyxVQUFVLGlCQUFpQixZQUFZLE9BQU87QUFDamQsa0JBQWtCLGFBQWEsT0FBTyxzQkFBc0Isc0JBQXNCLEdBQUcsWUFBWSxhQUFhLE9BQU8scUJBQXFCLHFCQUFxQixXQUFXLFlBQVksZUFBZSxPQUFPLDhDQUE4Qyx1QkFBdUIsYUFBYSxtQkFBbUIsZ0JBQWdCLElBQUksSUFBSSxRQUFRLGlCQUFpQixvQkFBb0IsR0FBRyxtQkFBbUIsZUFBZSxtQ0FBbUMsa0JBQWtCLGFBQWE7QUFDN2QscUJBQXFCLGNBQWMsd0JBQXdCLGFBQWEsc0NBQXNDLGlCQUFpQixlQUFlLGlDQUFpQyxhQUFhLFlBQVksMEJBQTBCLDJCQUEyQixpQkFBaUIsNkNBQTZDLDBCQUEwQixlQUFlLDBDQUEwQyx1QkFBdUIsZUFBZTtBQUNwYixlQUFlLGVBQWUsK0JBQStCLGtCQUFrQixpQkFBaUIsb0NBQW9DLGNBQWMsYUFBYSw0QkFBNEIsZ0JBQWdCLGFBQWEsOEJBQThCLDRCQUE0QixpQkFBaUIsOENBQThDLHFCQUFxQixZQUFZLGtDQUFrQyxlQUFlOzs7Ozs7OztBQ3pCdFo7O0FBRWIsSUFBSSxJQUFxQztBQUN6QyxFQUFFLHlDQUF5RDtBQUMzRCxFQUFFLEtBQUssRUFFTjs7Ozs7Ozs7QUNOWTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDLEVBQUUsd0NBQXFFO0FBQ3ZFLEVBQUUsS0FBSyxFQUVOOzs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhLGdCQUFnQixlQUFlLFVBQVUsT0FBTyxJQUFJLEVBQUUscUJBQXFCLDhCQUE4QixjQUFjLGNBQWMsOEJBQThCLGNBQWMsNEJBQTRCLHFCQUFxQixVQUFVLE9BQU8saUNBQWlDLElBQUksRUFBRSxvQ0FBb0Msa0VBQWtFLHdDQUF3QyxjQUFjO0FBQ25jLGdCQUFnQiw4QkFBOEIseUJBQXlCLHVFQUF1RSxrQkFBa0Isb0JBQW9CLFlBQVksZ0JBQWdCLEtBQUsscUJBQXFCLG9CQUFvQixZQUFZLGtCQUFrQjtBQUM1Uiw0S0FBNEssY0FBYyxlQUFlLFNBQVMsRUFBRSwwQkFBMEIsZ0VBQWdFLFdBQVcsUUFBUSxjQUFjLEtBQUssS0FBSywrQkFBK0IsS0FBSyxXQUFXO0FBQ3hZLGdCQUFnQixLQUFLLG9CQUFvQixLQUFLLFFBQVEsSUFBSSxLQUFLLFdBQVcsMkNBQTJDLEVBQUUsaUJBQWlCLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDZCQUE2Qix5QkFBeUIsa0RBQWtELEtBQUssVUFBVSxPQUFPLHFCQUFxQixLQUFLLFdBQVcsNkJBQTZCLEtBQUssU0FBUyxRQUFRLGlCQUFpQjtBQUMzYSxhQUFhLHdDQUF3QyxhQUFhLGFBQWEsNkJBQTZCLElBQUksU0FBUyxJQUFJLFVBQVUsUUFBUSxxQkFBcUIsVUFBVSxNQUFNLHNDQUFzQyxNQUFNLDZDQUE2QyxtQ0FBbUMsb0JBQW9CLGFBQWEscUJBQXFCLGtCQUFrQixRQUFRLGNBQWMsSUFBSSxjQUFjLGdCQUFnQixlQUFlLDBCQUEwQjtBQUN6ZCw2QkFBNkIsR0FBRyxrQ0FBa0MsR0FBRyw0QkFBNEIsR0FBRywrQkFBK0IsR0FBRywwQkFBMEIsTUFBTSxxQ0FBcUMsR0FBRywrQkFBK0IsYUFBYSxpQkFBaUIsa0NBQWtDLFlBQVk7QUFDelQsK0JBQStCLGFBQWEsdUtBQXVLLHdDQUF3QyxZQUFZLFVBQVUscUNBQXFDLFlBQVksYUFBYSxxQkFBcUIsYUFBYSxVQUFVLDZCQUE2QixNQUFNLFlBQVksUUFBUSxJQUFJLElBQUksV0FBVyxRQUFRLE1BQU0sK0JBQStCO0FBQ2xmLDZCQUE2QixjQUFjLGdDQUFnQyxlQUFlLFVBQVUseUNBQXlDLFlBQVksUUFBUSxJQUFJLElBQUksV0FBVyxRQUFRO0FBQzVMLGlDQUFpQyxpQkFBaUIsNkJBQTZCLCtFQUErRSxVQUFVLGdCQUFnQixNQUFNLGFBQWEsTUFBTSxvQkFBb0IsTUFBTSxhQUFhLE1BQU0sY0FBYyxNQUFNLEdBQUcsNkVBQTZFLHlIQUF5SDtBQUMzZCw0QkFBNEIsR0FBRyw2QkFBNkIsYUFBYSxRQUFRLGtCQUFrQixRQUFRLElBQUksSUFBSSwrQkFBK0IsUUFBUTs7Ozs7Ozs7QUNsQjdJOztBQUViLElBQUksSUFBcUM7QUFDekMsRUFBRSx5Q0FBNkQ7QUFDL0QsRUFBRSxLQUFLLEVBRU47Ozs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2EsTUFBTSxtQkFBTyxDQUFDLEdBQU8sRUFBRSxnQkFBZ0IsK0NBQStDO0FBQ25HLHdDQUF3QyxxQkFBcUIsY0FBYyxxQkFBcUIsT0FBTyx3QkFBd0IsWUFBWSxpQkFBaUIsZUFBZSxjQUFjLE9BQU8sS0FBSyxJQUFJLE9BQU8sMkJBQTJCLGNBQWMscUJBQXFCLFdBQVcsSUFBSSxtQkFBbUIsV0FBVywrQkFBK0IsSUFBSSxXQUFXLGlDQUFpQyxrQkFBa0IsY0FBYyw0QkFBNEIsY0FBYyxFQUFFLFlBQVk7QUFDbGUsYUFBYSxjQUFjLFVBQVUsTUFBTSxLQUFLOzs7Ozs7OztBQ1huQzs7QUFFYixJQUFJLElBQXFDO0FBQ3pDLEVBQUUseUNBQXlGO0FBQzNGLEVBQUUsS0FBSyxFQUVOOzs7Ozs7O1VDTkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0RBQXNEO1dBQ3RELHNDQUFzQyxpRUFBaUU7V0FDdkc7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQzRCOzs7QUNGNUI7QUFDQSxJQUFJLGtCQUFFO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUo7OztBQ1R2SjtBQUNBO0FBQ0Esa0NBQWtDLE9BQU8seUNBQXlDLE1BQU07QUFDeEY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrQkFBK0I7QUFDdEQsNkJBQTZCLCtCQUErQjtBQUM1RCw2REFBNkQsZUFBZTtBQUM1RTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxtQkFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLEVBQUUsRUFFMUM7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFxQywrQkFBK0IsQ0FBcUY7QUFDN0s7QUFDQTtBQUNBLG9CQUFvQixLQUFxQywrQkFBK0IsQ0FBa1E7QUFDMVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUMsK0JBQStCLENBQWtGO0FBQzVLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUMsK0JBQStCLENBQXNNO0FBQ2hTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUMsK0JBQStCLENBQWtGO0FBQzVLO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUMsK0JBQStCLENBQWlUO0FBQzNZO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEtBQXFDLCtCQUErQixDQUFzSjtBQUNsUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQkFBYTtBQUN0QixzQkFBc0IsS0FBcUMsK0JBQStCLENBQTJaO0FBQ3JmO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUMsK0JBQStCLENBQTRHO0FBQ3RNO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUMsZ0NBQWdDLENBQTRJO0FBQ3ZPO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUMsK0JBQStCLENBQW9DO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUMsZ0NBQWdDLENBQXVGO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsS0FBcUMsZ0NBQWdDLENBQWlGO0FBQ2hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUJBQWE7QUFDcEIsa0JBQWtCLGNBQWMsMEJBQTBCLG1CQUFtQixpRUFBaUUseUJBQXlCO0FBQ3ZLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBNEMsR0FBRyw0QkFBNEIsYUFBYSxhQUFhLDZEQUE2RCx5QkFBeUI7QUFDcE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQkFBc0IsS0FBcUMsZ0NBQWdDLENBQStTO0FBQzFZO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0IsS0FBcUMsZ0NBQWdDLENBQW9iO0FBQy9nQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQSxRQUFRLEtBQXFDLEVBQUUsRUFJMUM7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLEVBQUUsRUFFMUM7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDLEVBQUUsRUFLMUM7QUFDTDtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsS0FBcUMsZ0NBQWdDLENBQWtUO0FBQy9ZO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFxQyxnQ0FBZ0MsQ0FBa007QUFDM1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixLQUFxQyxnQ0FBZ0MsQ0FBd0g7QUFDbk47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGNBQVE7QUFDakIsU0FBUyxtQkFBYTtBQUN0QjtBQVdFO0FBQ0Y7O0FDNVlBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpQkFBSztBQUNUO0FBSUU7OztBQ2ZGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxNQUFxQyxHQUFHLENBOEJwRDtBQUNEO0FBQ0EsTUFBTSxLQUFxQyxFQUFFLEVBSTFDO0FBQ0g7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLGFBQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsbUJBQWE7QUFDdEI7QUFDQTtBQUNBLFNBQVMsbUJBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxhQUFPO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixhQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBb0U7QUFDMUUsSUFBSSxFQUFPO0FBQ1gsTUFBTSxhQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGFBQU87QUFDZjtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsTUFBTSxLQUE4RDtBQUNwRSxJQUFJLEVBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQW1GO0FBQ3pGLElBQUksRUFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekIsaUJBQWlCLEtBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsYUFBTztBQUNmLGFBQWEsYUFBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxhQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsYUFBTztBQUNoQixPQUFPLGFBQU87QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUMsRUFBRSxFQVcxQztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQkFBbUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsbUNBQW1DLG1CQUFtQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsV0FBVyxJQUFJLGlCQUFpQjtBQUNyRTtBQUNBLHVCQUF1QixtQkFBbUIsb0JBQW9CLDJEQUEyRCxJQUFJO0FBQzdIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxVQUFVLGVBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxhQUFPO0FBQ2Y7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsbUJBQW1CO0FBQ3BCO0FBQ0EsWUFBWSxNQUFNLEdBQUcsVUFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUk7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLEtBQXFDLEdBQUcsMkNBQXNCLE9BQU8sQ0FBNkM7QUFDeEk7QUFDQSwwQ0FBMEMsWUFBb0Isb0JBQW9CLEVBSTdFO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEtBQXFDLEdBQUcsMkNBQXNCLE9BQU8sQ0FBOEQ7QUFDN0o7QUFDQTtBQUNBLDBCQUEwQixLQUFxQyxHQUFHLDJDQUFzQixPQUFPLENBQXdGO0FBQ3ZMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsVUFBVSxLQUFxQyxFQUFFLEVBSTFDO0FBQ1AsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTLEtBQXFDLEVBQUUsRUFFakQ7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsU0FBUyxLQUFxQyxFQUFFLEVBRWpEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBcUMsR0FBRywyQ0FBc0IsT0FBTyxDQUEyRztBQUN0TTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQkFBb0IsS0FBcUMsR0FBRywyQ0FBc0IsT0FBTyxDQUF3TDtBQUNqUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUN5RTtBQUN6RSxtQkFBbUIsd0RBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNpRTtBQUNqRTtBQUNBO0FBQ0EsTUFBTSxLQUF1RCxFQUFFLEVBRTVEO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUM4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3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QUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsY0FBRTtBQUNYO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGNBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQyxrRUFBa0UsY0FBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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cmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3dvcmRsZS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL3dvcmRsZS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtcnVudGltZS5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3dpdGgtc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd29yZGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmRsZS93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3JkbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvcmRsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmRsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9wYWdlcy9nYW1lL3VpL0dhbWVDb250YWluZXIvR2FtZUNvbnRhaW5lci5tb2R1bGUuY3NzPzNiOWMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvV29yZElucHV0L1dvcmRJbnB1dC5tb2R1bGUuY3NzPzQ0NzgiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2Rpc3QvcmVkdXgubWpzIiwid2VicGFjazovL3dvcmRsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9kaXN0L3JlZHV4LXRodW5rLm1qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9pbW1lci5tanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9yZWR1eC10b29sa2l0Lm1vZGVybi5tanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2Rpc3QvcmVhY3QtcmVkdXgubWpzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9zaGFyZWQvbGliL3VzZUFwcFNlbGVjdG9yLnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9zaGFyZWQvbGliL3VzZVJhbmRvbS50cyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvc2hhcmVkL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvZW50aXRpZXMvZ2FtZS9saWIvZ2V0V29yZHMudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL2VudGl0aWVzL2dhbWUvbGliL2luZGV4LnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9lbnRpdGllcy9nYW1lL21vZGVsL2dhbWUuc2xpY2UudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL2VudGl0aWVzL2dhbWUvbW9kZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvV29yZElucHV0L1dvcmRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvV29yZElucHV0L2luZGV4LnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9wYWdlcy9nYW1lL3VpL0tleWJvYXJkL0tleWJvYXJkLm1vZHVsZS5jc3M/YWVjMCIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvcGFnZXMvZ2FtZS91aS9LZXlib2FyZC9LZXlib2FyZC50c3giLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvS2V5Ym9hcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvR2FtZU92ZXJNb2RhbC9HYW1lTW9kYWwubW9kdWxlLmNzcz8xN2ExIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9zaGFyZWQvdWkvTW9kYWwvTW9kYWwubW9kdWxlLmNzcz8xZmNjIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9zaGFyZWQvdWkvTW9kYWwvTW9kYWwudHN4Iiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9zaGFyZWQvdWkvTW9kYWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvR2FtZU92ZXJNb2RhbC9HYW1lT3Zlck1vZGFsLnRzeCIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvcGFnZXMvZ2FtZS91aS9HYW1lT3Zlck1vZGFsL2luZGV4LnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9wYWdlcy9nYW1lL3VpL0dhbWVXaW5Nb2RhbC9HYW1lV2luTW9kYWwubW9kdWxlLmNzcz83ZmExIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9wYWdlcy9nYW1lL3VpL0dhbWVXaW5Nb2RhbC9HYW1lV2luTW9kYWwudHN4Iiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9wYWdlcy9nYW1lL3VpL0dhbWVXaW5Nb2RhbC9pbmRleC50cyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvcGFnZXMvZ2FtZS91aS9HYW1lQ29udGFpbmVyL0dhbWVDb250YWluZXIudHN4Iiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9wYWdlcy9nYW1lL3VpL0dhbWVDb250YWluZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3BhZ2VzL2dhbWUvdWkvR2FtZVBhZ2UudHN4Iiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9wYWdlcy9nYW1lL3VpL2luZGV4LnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9wYWdlcy9nYW1lL2luZGV4LnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9hcHAvc3RvcmVzL21haW5TdG9yZS50cyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvYXBwL3N0b3Jlcy9pbmRleC50cyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvYXBwL3Byb3ZpZGVycy9NYWluUHJvdmlkZXIudHN4Iiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9hcHAvcHJvdmlkZXJzL2luZGV4LnRzIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9hcHAvQXBwLnRzeCIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKlxuIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgYWE9cmVxdWlyZShcInJlYWN0XCIpLGNhPXJlcXVpcmUoXCJzY2hlZHVsZXJcIik7ZnVuY3Rpb24gcChhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn12YXIgZGE9bmV3IFNldCxlYT17fTtmdW5jdGlvbiBmYShhLGIpe2hhKGEsYik7aGEoYStcIkNhcHR1cmVcIixiKX1cbmZ1bmN0aW9uIGhhKGEsYil7ZWFbYV09Yjtmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKWRhLmFkZChiW2FdKX1cbnZhciBpYT0hKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudHx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCksamE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxrYT0vXls6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF1bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRcXC0uMC05XFx1MDBCN1xcdTAzMDAtXFx1MDM2RlxcdTIwM0YtXFx1MjA0MF0qJC8sbGE9XG57fSxtYT17fTtmdW5jdGlvbiBvYShhKXtpZihqYS5jYWxsKG1hLGEpKXJldHVybiEwO2lmKGphLmNhbGwobGEsYSkpcmV0dXJuITE7aWYoa2EudGVzdChhKSlyZXR1cm4gbWFbYV09ITA7bGFbYV09ITA7cmV0dXJuITF9ZnVuY3Rpb24gcGEoYSxiLGMsZCl7aWYobnVsbCE9PWMmJjA9PT1jLnR5cGUpcmV0dXJuITE7c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwiZnVuY3Rpb25cIjpjYXNlIFwic3ltYm9sXCI6cmV0dXJuITA7Y2FzZSBcImJvb2xlYW5cIjppZihkKXJldHVybiExO2lmKG51bGwhPT1jKXJldHVybiFjLmFjY2VwdHNCb29sZWFuczthPWEudG9Mb3dlckNhc2UoKS5zbGljZSgwLDUpO3JldHVyblwiZGF0YS1cIiE9PWEmJlwiYXJpYS1cIiE9PWE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBxYShhLGIsYyxkKXtpZihudWxsPT09Ynx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifHxwYShhLGIsYyxkKSlyZXR1cm4hMDtpZihkKXJldHVybiExO2lmKG51bGwhPT1jKXN3aXRjaChjLnR5cGUpe2Nhc2UgMzpyZXR1cm4hYjtjYXNlIDQ6cmV0dXJuITE9PT1iO2Nhc2UgNTpyZXR1cm4gaXNOYU4oYik7Y2FzZSA2OnJldHVybiBpc05hTihiKXx8MT5ifXJldHVybiExfWZ1bmN0aW9uIHYoYSxiLGMsZCxlLGYsZyl7dGhpcy5hY2NlcHRzQm9vbGVhbnM9Mj09PWJ8fDM9PT1ifHw0PT09Yjt0aGlzLmF0dHJpYnV0ZU5hbWU9ZDt0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZT1lO3RoaXMubXVzdFVzZVByb3BlcnR5PWM7dGhpcy5wcm9wZXJ0eU5hbWU9YTt0aGlzLnR5cGU9Yjt0aGlzLnNhbml0aXplVVJMPWY7dGhpcy5yZW1vdmVFbXB0eVN0cmluZz1nfXZhciB6PXt9O1xuXCJjaGlsZHJlbiBkYW5nZXJvdXNseVNldElubmVySFRNTCBkZWZhdWx0VmFsdWUgZGVmYXVsdENoZWNrZWQgaW5uZXJIVE1MIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgc3R5bGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMCwhMSxhLG51bGwsITEsITEpfSk7W1tcImFjY2VwdENoYXJzZXRcIixcImFjY2VwdC1jaGFyc2V0XCJdLFtcImNsYXNzTmFtZVwiLFwiY2xhc3NcIl0sW1wiaHRtbEZvclwiLFwiZm9yXCJdLFtcImh0dHBFcXVpdlwiLFwiaHR0cC1lcXVpdlwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hWzBdO3pbYl09bmV3IHYoYiwxLCExLGFbMV0sbnVsbCwhMSwhMSl9KTtbXCJjb250ZW50RWRpdGFibGVcIixcImRyYWdnYWJsZVwiLFwic3BlbGxDaGVja1wiLFwidmFsdWVcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMiwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbltcImF1dG9SZXZlcnNlXCIsXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXCJmb2N1c2FibGVcIixcInByZXNlcnZlQWxwaGFcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMiwhMSxhLG51bGwsITEsITEpfSk7XCJhbGxvd0Z1bGxTY3JlZW4gYXN5bmMgYXV0b0ZvY3VzIGF1dG9QbGF5IGNvbnRyb2xzIGRlZmF1bHQgZGVmZXIgZGlzYWJsZWQgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUgZGlzYWJsZVJlbW90ZVBsYXliYWNrIGZvcm1Ob1ZhbGlkYXRlIGhpZGRlbiBsb29wIG5vTW9kdWxlIG5vVmFsaWRhdGUgb3BlbiBwbGF5c0lubGluZSByZWFkT25seSByZXF1aXJlZCByZXZlcnNlZCBzY29wZWQgc2VhbWxlc3MgaXRlbVNjb3BlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDMsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJjaGVja2VkXCIsXCJtdWx0aXBsZVwiLFwibXV0ZWRcIixcInNlbGVjdGVkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDMsITAsYSxudWxsLCExLCExKX0pO1tcImNhcHR1cmVcIixcImRvd25sb2FkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDQsITEsYSxudWxsLCExLCExKX0pO1tcImNvbHNcIixcInJvd3NcIixcInNpemVcIixcInNwYW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsNiwhMSxhLG51bGwsITEsITEpfSk7W1wicm93U3BhblwiLFwic3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsNSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTt2YXIgcmE9L1tcXC06XShbYS16XSkvZztmdW5jdGlvbiBzYShhKXtyZXR1cm4gYVsxXS50b1VwcGVyQ2FzZSgpfVxuXCJhY2NlbnQtaGVpZ2h0IGFsaWdubWVudC1iYXNlbGluZSBhcmFiaWMtZm9ybSBiYXNlbGluZS1zaGlmdCBjYXAtaGVpZ2h0IGNsaXAtcGF0aCBjbGlwLXJ1bGUgY29sb3ItaW50ZXJwb2xhdGlvbiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgY29sb3ItcHJvZmlsZSBjb2xvci1yZW5kZXJpbmcgZG9taW5hbnQtYmFzZWxpbmUgZW5hYmxlLWJhY2tncm91bmQgZmlsbC1vcGFjaXR5IGZpbGwtcnVsZSBmbG9vZC1jb2xvciBmbG9vZC1vcGFjaXR5IGZvbnQtZmFtaWx5IGZvbnQtc2l6ZSBmb250LXNpemUtYWRqdXN0IGZvbnQtc3RyZXRjaCBmb250LXN0eWxlIGZvbnQtdmFyaWFudCBmb250LXdlaWdodCBnbHlwaC1uYW1lIGdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwgZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwgaG9yaXotYWR2LXggaG9yaXotb3JpZ2luLXggaW1hZ2UtcmVuZGVyaW5nIGxldHRlci1zcGFjaW5nIGxpZ2h0aW5nLWNvbG9yIG1hcmtlci1lbmQgbWFya2VyLW1pZCBtYXJrZXItc3RhcnQgb3ZlcmxpbmUtcG9zaXRpb24gb3ZlcmxpbmUtdGhpY2tuZXNzIHBhaW50LW9yZGVyIHBhbm9zZS0xIHBvaW50ZXItZXZlbnRzIHJlbmRlcmluZy1pbnRlbnQgc2hhcGUtcmVuZGVyaW5nIHN0b3AtY29sb3Igc3RvcC1vcGFjaXR5IHN0cmlrZXRocm91Z2gtcG9zaXRpb24gc3RyaWtldGhyb3VnaC10aGlja25lc3Mgc3Ryb2tlLWRhc2hhcnJheSBzdHJva2UtZGFzaG9mZnNldCBzdHJva2UtbGluZWNhcCBzdHJva2UtbGluZWpvaW4gc3Ryb2tlLW1pdGVybGltaXQgc3Ryb2tlLW9wYWNpdHkgc3Ryb2tlLXdpZHRoIHRleHQtYW5jaG9yIHRleHQtZGVjb3JhdGlvbiB0ZXh0LXJlbmRlcmluZyB1bmRlcmxpbmUtcG9zaXRpb24gdW5kZXJsaW5lLXRoaWNrbmVzcyB1bmljb2RlLWJpZGkgdW5pY29kZS1yYW5nZSB1bml0cy1wZXItZW0gdi1hbHBoYWJldGljIHYtaGFuZ2luZyB2LWlkZW9ncmFwaGljIHYtbWF0aGVtYXRpY2FsIHZlY3Rvci1lZmZlY3QgdmVydC1hZHYteSB2ZXJ0LW9yaWdpbi14IHZlcnQtb3JpZ2luLXkgd29yZC1zcGFjaW5nIHdyaXRpbmctbW9kZSB4bWxuczp4bGluayB4LWhlaWdodFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShyYSxcbnNhKTt6W2JdPW5ldyB2KGIsMSwhMSxhLG51bGwsITEsITEpfSk7XCJ4bGluazphY3R1YXRlIHhsaW5rOmFyY3JvbGUgeGxpbms6cm9sZSB4bGluazpzaG93IHhsaW5rOnRpdGxlIHhsaW5rOnR5cGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UocmEsc2EpO3pbYl09bmV3IHYoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITEsITEpfSk7W1wieG1sOmJhc2VcIixcInhtbDpsYW5nXCIsXCJ4bWw6c3BhY2VcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UocmEsc2EpO3pbYl09bmV3IHYoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIiwhMSwhMSl9KTtbXCJ0YWJJbmRleFwiLFwiY3Jvc3NPcmlnaW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbnoueGxpbmtIcmVmPW5ldyB2KFwieGxpbmtIcmVmXCIsMSwhMSxcInhsaW5rOmhyZWZcIixcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMCwhMSk7W1wic3JjXCIsXCJocmVmXCIsXCJhY3Rpb25cIixcImZvcm1BY3Rpb25cIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMCwhMCl9KTtcbmZ1bmN0aW9uIHRhKGEsYixjLGQpe3ZhciBlPXouaGFzT3duUHJvcGVydHkoYik/eltiXTpudWxsO2lmKG51bGwhPT1lPzAhPT1lLnR5cGU6ZHx8ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdKXFhKGIsYyxlLGQpJiYoYz1udWxsKSxkfHxudWxsPT09ZT9vYShiKSYmKG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOmEuc2V0QXR0cmlidXRlKGIsXCJcIitjKSk6ZS5tdXN0VXNlUHJvcGVydHk/YVtlLnByb3BlcnR5TmFtZV09bnVsbD09PWM/Mz09PWUudHlwZT8hMTpcIlwiOmM6KGI9ZS5hdHRyaWJ1dGVOYW1lLGQ9ZS5hdHRyaWJ1dGVOYW1lc3BhY2UsbnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6KGU9ZS50eXBlLGM9Mz09PWV8fDQ9PT1lJiYhMD09PWM/XCJcIjpcIlwiK2MsZD9hLnNldEF0dHJpYnV0ZU5TKGQsYixjKTphLnNldEF0dHJpYnV0ZShiLGMpKSl9XG52YXIgdWE9YWEuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsdmE9U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIiksd2E9U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKSx5YT1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIiksemE9U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpLEFhPVN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKSxCYT1TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIiksQ2E9U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksRGE9U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLEVhPVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSxGYT1TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKSxHYT1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxIYT1TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTtTeW1ib2wuZm9yKFwicmVhY3Quc2NvcGVcIik7U3ltYm9sLmZvcihcInJlYWN0LmRlYnVnX3RyYWNlX21vZGVcIik7XG52YXIgSWE9U3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKTtTeW1ib2wuZm9yKFwicmVhY3QubGVnYWN5X2hpZGRlblwiKTtTeW1ib2wuZm9yKFwicmVhY3QuY2FjaGVcIik7U3ltYm9sLmZvcihcInJlYWN0LnRyYWNpbmdfbWFya2VyXCIpO3ZhciBKYT1TeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gS2EoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPUphJiZhW0phXXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfXZhciBBPU9iamVjdC5hc3NpZ24sTGE7ZnVuY3Rpb24gTWEoYSl7aWYodm9pZCAwPT09TGEpdHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGMpe3ZhciBiPWMuc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7TGE9YiYmYlsxXXx8XCJcIn1yZXR1cm5cIlxcblwiK0xhK2F9dmFyIE5hPSExO1xuZnVuY3Rpb24gT2EoYSxiKXtpZighYXx8TmEpcmV0dXJuXCJcIjtOYT0hMDt2YXIgYz1FcnJvci5wcmVwYXJlU3RhY2tUcmFjZTtFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT12b2lkIDA7dHJ5e2lmKGIpaWYoYj1mdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYi5wcm90b3R5cGUsXCJwcm9wc1wiLHtzZXQ6ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcigpO319KSxcIm9iamVjdFwiPT09dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3QuY29uc3RydWN0KXt0cnl7UmVmbGVjdC5jb25zdHJ1Y3QoYixbXSl9Y2F0Y2gobCl7dmFyIGQ9bH1SZWZsZWN0LmNvbnN0cnVjdChhLFtdLGIpfWVsc2V7dHJ5e2IuY2FsbCgpfWNhdGNoKGwpe2Q9bH1hLmNhbGwoYi5wcm90b3R5cGUpfWVsc2V7dHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGwpe2Q9bH1hKCl9fWNhdGNoKGwpe2lmKGwmJmQmJlwic3RyaW5nXCI9PT10eXBlb2YgbC5zdGFjayl7Zm9yKHZhciBlPWwuc3RhY2suc3BsaXQoXCJcXG5cIiksXG5mPWQuc3RhY2suc3BsaXQoXCJcXG5cIiksZz1lLmxlbmd0aC0xLGg9Zi5sZW5ndGgtMTsxPD1nJiYwPD1oJiZlW2ddIT09ZltoXTspaC0tO2Zvcig7MTw9ZyYmMDw9aDtnLS0saC0tKWlmKGVbZ10hPT1mW2hdKXtpZigxIT09Z3x8MSE9PWgpe2RvIGlmKGctLSxoLS0sMD5ofHxlW2ddIT09ZltoXSl7dmFyIGs9XCJcXG5cIitlW2ddLnJlcGxhY2UoXCIgYXQgbmV3IFwiLFwiIGF0IFwiKTthLmRpc3BsYXlOYW1lJiZrLmluY2x1ZGVzKFwiPGFub255bW91cz5cIikmJihrPWsucmVwbGFjZShcIjxhbm9ueW1vdXM+XCIsYS5kaXNwbGF5TmFtZSkpO3JldHVybiBrfXdoaWxlKDE8PWcmJjA8PWgpfWJyZWFrfX19ZmluYWxseXtOYT0hMSxFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT1jfXJldHVybihhPWE/YS5kaXNwbGF5TmFtZXx8YS5uYW1lOlwiXCIpP01hKGEpOlwiXCJ9XG5mdW5jdGlvbiBQYShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTpyZXR1cm4gTWEoYS50eXBlKTtjYXNlIDE2OnJldHVybiBNYShcIkxhenlcIik7Y2FzZSAxMzpyZXR1cm4gTWEoXCJTdXNwZW5zZVwiKTtjYXNlIDE5OnJldHVybiBNYShcIlN1c3BlbnNlTGlzdFwiKTtjYXNlIDA6Y2FzZSAyOmNhc2UgMTU6cmV0dXJuIGE9T2EoYS50eXBlLCExKSxhO2Nhc2UgMTE6cmV0dXJuIGE9T2EoYS50eXBlLnJlbmRlciwhMSksYTtjYXNlIDE6cmV0dXJuIGE9T2EoYS50eXBlLCEwKSxhO2RlZmF1bHQ6cmV0dXJuXCJcIn19XG5mdW5jdGlvbiBRYShhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBhLmRpc3BsYXlOYW1lfHxhLm5hbWV8fG51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXJldHVybiBhO3N3aXRjaChhKXtjYXNlIHlhOnJldHVyblwiRnJhZ21lbnRcIjtjYXNlIHdhOnJldHVyblwiUG9ydGFsXCI7Y2FzZSBBYTpyZXR1cm5cIlByb2ZpbGVyXCI7Y2FzZSB6YTpyZXR1cm5cIlN0cmljdE1vZGVcIjtjYXNlIEVhOnJldHVyblwiU3VzcGVuc2VcIjtjYXNlIEZhOnJldHVyblwiU3VzcGVuc2VMaXN0XCJ9aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIENhOnJldHVybihhLmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuQ29uc3VtZXJcIjtjYXNlIEJhOnJldHVybihhLl9jb250ZXh0LmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuUHJvdmlkZXJcIjtjYXNlIERhOnZhciBiPWEucmVuZGVyO2E9YS5kaXNwbGF5TmFtZTthfHwoYT1iLmRpc3BsYXlOYW1lfHxcbmIubmFtZXx8XCJcIixhPVwiXCIhPT1hP1wiRm9yd2FyZFJlZihcIithK1wiKVwiOlwiRm9yd2FyZFJlZlwiKTtyZXR1cm4gYTtjYXNlIEdhOnJldHVybiBiPWEuZGlzcGxheU5hbWV8fG51bGwsbnVsbCE9PWI/YjpRYShhLnR5cGUpfHxcIk1lbW9cIjtjYXNlIEhhOmI9YS5fcGF5bG9hZDthPWEuX2luaXQ7dHJ5e3JldHVybiBRYShhKGIpKX1jYXRjaChjKXt9fXJldHVybiBudWxsfVxuZnVuY3Rpb24gUmEoYSl7dmFyIGI9YS50eXBlO3N3aXRjaChhLnRhZyl7Y2FzZSAyNDpyZXR1cm5cIkNhY2hlXCI7Y2FzZSA5OnJldHVybihiLmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuQ29uc3VtZXJcIjtjYXNlIDEwOnJldHVybihiLl9jb250ZXh0LmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuUHJvdmlkZXJcIjtjYXNlIDE4OnJldHVyblwiRGVoeWRyYXRlZEZyYWdtZW50XCI7Y2FzZSAxMTpyZXR1cm4gYT1iLnJlbmRlcixhPWEuZGlzcGxheU5hbWV8fGEubmFtZXx8XCJcIixiLmRpc3BsYXlOYW1lfHwoXCJcIiE9PWE/XCJGb3J3YXJkUmVmKFwiK2ErXCIpXCI6XCJGb3J3YXJkUmVmXCIpO2Nhc2UgNzpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSA1OnJldHVybiBiO2Nhc2UgNDpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgMzpyZXR1cm5cIlJvb3RcIjtjYXNlIDY6cmV0dXJuXCJUZXh0XCI7Y2FzZSAxNjpyZXR1cm4gUWEoYik7Y2FzZSA4OnJldHVybiBiPT09emE/XCJTdHJpY3RNb2RlXCI6XCJNb2RlXCI7Y2FzZSAyMjpyZXR1cm5cIk9mZnNjcmVlblwiO1xuY2FzZSAxMjpyZXR1cm5cIlByb2ZpbGVyXCI7Y2FzZSAyMTpyZXR1cm5cIlNjb3BlXCI7Y2FzZSAxMzpyZXR1cm5cIlN1c3BlbnNlXCI7Y2FzZSAxOTpyZXR1cm5cIlN1c3BlbnNlTGlzdFwiO2Nhc2UgMjU6cmV0dXJuXCJUcmFjaW5nTWFya2VyXCI7Y2FzZSAxOmNhc2UgMDpjYXNlIDE3OmNhc2UgMjpjYXNlIDE0OmNhc2UgMTU6aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGIuZGlzcGxheU5hbWV8fGIubmFtZXx8bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGIpcmV0dXJuIGJ9cmV0dXJuIG51bGx9ZnVuY3Rpb24gU2EoYSl7c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcInVuZGVmaW5lZFwiOnJldHVybiBhO2Nhc2UgXCJvYmplY3RcIjpyZXR1cm4gYTtkZWZhdWx0OnJldHVyblwiXCJ9fVxuZnVuY3Rpb24gVGEoYSl7dmFyIGI9YS50eXBlO3JldHVybihhPWEubm9kZU5hbWUpJiZcImlucHV0XCI9PT1hLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1ifHxcInJhZGlvXCI9PT1iKX1cbmZ1bmN0aW9uIFVhKGEpe3ZhciBiPVRhKGEpP1wiY2hlY2tlZFwiOlwidmFsdWVcIixjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsYiksZD1cIlwiK2FbYl07aWYoIWEuaGFzT3duUHJvcGVydHkoYikmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZ2V0JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5zZXQpe3ZhciBlPWMuZ2V0LGY9Yy5zZXQ7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LHNldDpmdW5jdGlvbihhKXtkPVwiXCIrYTtmLmNhbGwodGhpcyxhKX19KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtlbnVtZXJhYmxlOmMuZW51bWVyYWJsZX0pO3JldHVybntnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBkfSxzZXRWYWx1ZTpmdW5jdGlvbihhKXtkPVwiXCIrYX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7YS5fdmFsdWVUcmFja2VyPVxubnVsbDtkZWxldGUgYVtiXX19fX1mdW5jdGlvbiBWYShhKXthLl92YWx1ZVRyYWNrZXJ8fChhLl92YWx1ZVRyYWNrZXI9VWEoYSkpfWZ1bmN0aW9uIFdhKGEpe2lmKCFhKXJldHVybiExO3ZhciBiPWEuX3ZhbHVlVHJhY2tlcjtpZighYilyZXR1cm4hMDt2YXIgYz1iLmdldFZhbHVlKCk7dmFyIGQ9XCJcIjthJiYoZD1UYShhKT9hLmNoZWNrZWQ/XCJ0cnVlXCI6XCJmYWxzZVwiOmEudmFsdWUpO2E9ZDtyZXR1cm4gYSE9PWM/KGIuc2V0VmFsdWUoYSksITApOiExfWZ1bmN0aW9uIFhhKGEpe2E9YXx8KFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQ/ZG9jdW1lbnQ6dm9pZCAwKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e3JldHVybiBhLmFjdGl2ZUVsZW1lbnR8fGEuYm9keX1jYXRjaChiKXtyZXR1cm4gYS5ib2R5fX1cbmZ1bmN0aW9uIFlhKGEsYil7dmFyIGM9Yi5jaGVja2VkO3JldHVybiBBKHt9LGIse2RlZmF1bHRDaGVja2VkOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLHZhbHVlOnZvaWQgMCxjaGVja2VkOm51bGwhPWM/YzphLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWR9KX1mdW5jdGlvbiBaYShhLGIpe3ZhciBjPW51bGw9PWIuZGVmYXVsdFZhbHVlP1wiXCI6Yi5kZWZhdWx0VmFsdWUsZD1udWxsIT1iLmNoZWNrZWQ/Yi5jaGVja2VkOmIuZGVmYXVsdENoZWNrZWQ7Yz1TYShudWxsIT1iLnZhbHVlP2IudmFsdWU6Yyk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsQ2hlY2tlZDpkLGluaXRpYWxWYWx1ZTpjLGNvbnRyb2xsZWQ6XCJjaGVja2JveFwiPT09Yi50eXBlfHxcInJhZGlvXCI9PT1iLnR5cGU/bnVsbCE9Yi5jaGVja2VkOm51bGwhPWIudmFsdWV9fWZ1bmN0aW9uIGFiKGEsYil7Yj1iLmNoZWNrZWQ7bnVsbCE9YiYmdGEoYSxcImNoZWNrZWRcIixiLCExKX1cbmZ1bmN0aW9uIGJiKGEsYil7YWIoYSxiKTt2YXIgYz1TYShiLnZhbHVlKSxkPWIudHlwZTtpZihudWxsIT1jKWlmKFwibnVtYmVyXCI9PT1kKXtpZigwPT09YyYmXCJcIj09PWEudmFsdWV8fGEudmFsdWUhPWMpYS52YWx1ZT1cIlwiK2N9ZWxzZSBhLnZhbHVlIT09XCJcIitjJiYoYS52YWx1ZT1cIlwiK2MpO2Vsc2UgaWYoXCJzdWJtaXRcIj09PWR8fFwicmVzZXRcIj09PWQpe2EucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIik7cmV0dXJufWIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKT9jYihhLGIudHlwZSxjKTpiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpJiZjYihhLGIudHlwZSxTYShiLmRlZmF1bHRWYWx1ZSkpO251bGw9PWIuY2hlY2tlZCYmbnVsbCE9Yi5kZWZhdWx0Q2hlY2tlZCYmKGEuZGVmYXVsdENoZWNrZWQ9ISFiLmRlZmF1bHRDaGVja2VkKX1cbmZ1bmN0aW9uIGRiKGEsYixjKXtpZihiLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fGIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpe3ZhciBkPWIudHlwZTtpZighKFwic3VibWl0XCIhPT1kJiZcInJlc2V0XCIhPT1kfHx2b2lkIDAhPT1iLnZhbHVlJiZudWxsIT09Yi52YWx1ZSkpcmV0dXJuO2I9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlO2N8fGI9PT1hLnZhbHVlfHwoYS52YWx1ZT1iKTthLmRlZmF1bHRWYWx1ZT1ifWM9YS5uYW1lO1wiXCIhPT1jJiYoYS5uYW1lPVwiXCIpO2EuZGVmYXVsdENoZWNrZWQ9ISFhLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWQ7XCJcIiE9PWMmJihhLm5hbWU9Yyl9XG5mdW5jdGlvbiBjYihhLGIsYyl7aWYoXCJudW1iZXJcIiE9PWJ8fFhhKGEub3duZXJEb2N1bWVudCkhPT1hKW51bGw9PWM/YS5kZWZhdWx0VmFsdWU9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlOmEuZGVmYXVsdFZhbHVlIT09XCJcIitjJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitjKX12YXIgZWI9QXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIGZiKGEsYixjLGQpe2E9YS5vcHRpb25zO2lmKGIpe2I9e307Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspYltcIiRcIitjW2VdXT0hMDtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWU9Yi5oYXNPd25Qcm9wZXJ0eShcIiRcIithW2NdLnZhbHVlKSxhW2NdLnNlbGVjdGVkIT09ZSYmKGFbY10uc2VsZWN0ZWQ9ZSksZSYmZCYmKGFbY10uZGVmYXVsdFNlbGVjdGVkPSEwKX1lbHNle2M9XCJcIitTYShjKTtiPW51bGw7Zm9yKGU9MDtlPGEubGVuZ3RoO2UrKyl7aWYoYVtlXS52YWx1ZT09PWMpe2FbZV0uc2VsZWN0ZWQ9ITA7ZCYmKGFbZV0uZGVmYXVsdFNlbGVjdGVkPSEwKTtyZXR1cm59bnVsbCE9PWJ8fGFbZV0uZGlzYWJsZWR8fChiPWFbZV0pfW51bGwhPT1iJiYoYi5zZWxlY3RlZD0hMCl9fVxuZnVuY3Rpb24gZ2IoYSxiKXtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXRocm93IEVycm9yKHAoOTEpKTtyZXR1cm4gQSh7fSxiLHt2YWx1ZTp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCxjaGlsZHJlbjpcIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWV9KX1mdW5jdGlvbiBoYihhLGIpe3ZhciBjPWIudmFsdWU7aWYobnVsbD09Yyl7Yz1iLmNoaWxkcmVuO2I9Yi5kZWZhdWx0VmFsdWU7aWYobnVsbCE9Yyl7aWYobnVsbCE9Yil0aHJvdyBFcnJvcihwKDkyKSk7aWYoZWIoYykpe2lmKDE8Yy5sZW5ndGgpdGhyb3cgRXJyb3IocCg5MykpO2M9Y1swXX1iPWN9bnVsbD09YiYmKGI9XCJcIik7Yz1ifWEuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbFZhbHVlOlNhKGMpfX1cbmZ1bmN0aW9uIGliKGEsYil7dmFyIGM9U2EoYi52YWx1ZSksZD1TYShiLmRlZmF1bHRWYWx1ZSk7bnVsbCE9YyYmKGM9XCJcIitjLGMhPT1hLnZhbHVlJiYoYS52YWx1ZT1jKSxudWxsPT1iLmRlZmF1bHRWYWx1ZSYmYS5kZWZhdWx0VmFsdWUhPT1jJiYoYS5kZWZhdWx0VmFsdWU9YykpO251bGwhPWQmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2QpfWZ1bmN0aW9uIGpiKGEpe3ZhciBiPWEudGV4dENvbnRlbnQ7Yj09PWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWUmJlwiXCIhPT1iJiZudWxsIT09YiYmKGEudmFsdWU9Yil9ZnVuY3Rpb24ga2IoYSl7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7Y2FzZSBcIm1hdGhcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtkZWZhdWx0OnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifX1cbmZ1bmN0aW9uIGxiKGEsYil7cmV0dXJuIG51bGw9PWF8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YT9rYihiKTpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT1hJiZcImZvcmVpZ25PYmplY3RcIj09PWI/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6YX1cbnZhciBtYixuYj1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIE1TQXBwJiZNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbj9mdW5jdGlvbihiLGMsZCxlKXtNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbihmdW5jdGlvbigpe3JldHVybiBhKGIsYyxkLGUpfSl9OmF9KGZ1bmN0aW9uKGEsYil7aWYoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIT09YS5uYW1lc3BhY2VVUkl8fFwiaW5uZXJIVE1MXCJpbiBhKWEuaW5uZXJIVE1MPWI7ZWxzZXttYj1tYnx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTttYi5pbm5lckhUTUw9XCI8c3ZnPlwiK2IudmFsdWVPZigpLnRvU3RyaW5nKCkrXCI8L3N2Zz5cIjtmb3IoYj1tYi5maXJzdENoaWxkO2EuZmlyc3RDaGlsZDspYS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO2Zvcig7Yi5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGIuZmlyc3RDaGlsZCl9fSk7XG5mdW5jdGlvbiBvYihhLGIpe2lmKGIpe3ZhciBjPWEuZmlyc3RDaGlsZDtpZihjJiZjPT09YS5sYXN0Q2hpbGQmJjM9PT1jLm5vZGVUeXBlKXtjLm5vZGVWYWx1ZT1iO3JldHVybn19YS50ZXh0Q29udGVudD1ifVxudmFyIHBiPXthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxhc3BlY3RSYXRpbzohMCxib3JkZXJJbWFnZU91dHNldDohMCxib3JkZXJJbWFnZVNsaWNlOiEwLGJvcmRlckltYWdlV2lkdGg6ITAsYm94RmxleDohMCxib3hGbGV4R3JvdXA6ITAsYm94T3JkaW5hbEdyb3VwOiEwLGNvbHVtbkNvdW50OiEwLGNvbHVtbnM6ITAsZmxleDohMCxmbGV4R3JvdzohMCxmbGV4UG9zaXRpdmU6ITAsZmxleFNocmluazohMCxmbGV4TmVnYXRpdmU6ITAsZmxleE9yZGVyOiEwLGdyaWRBcmVhOiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3BhbjohMCxncmlkUm93U3RhcnQ6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TcGFuOiEwLGdyaWRDb2x1bW5TdGFydDohMCxmb250V2VpZ2h0OiEwLGxpbmVDbGFtcDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx0YWJTaXplOiEwLHdpZG93czohMCx6SW5kZXg6ITAsXG56b29tOiEwLGZpbGxPcGFjaXR5OiEwLGZsb29kT3BhY2l0eTohMCxzdG9wT3BhY2l0eTohMCxzdHJva2VEYXNoYXJyYXk6ITAsc3Ryb2tlRGFzaG9mZnNldDohMCxzdHJva2VNaXRlcmxpbWl0OiEwLHN0cm9rZU9wYWNpdHk6ITAsc3Ryb2tlV2lkdGg6ITB9LHFiPVtcIldlYmtpdFwiLFwibXNcIixcIk1velwiLFwiT1wiXTtPYmplY3Qua2V5cyhwYikuZm9yRWFjaChmdW5jdGlvbihhKXtxYi5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9YithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyaW5nKDEpO3BiW2JdPXBiW2FdfSl9KTtmdW5jdGlvbiByYihhLGIsYyl7cmV0dXJuIG51bGw9PWJ8fFwiYm9vbGVhblwiPT09dHlwZW9mIGJ8fFwiXCI9PT1iP1wiXCI6Y3x8XCJudW1iZXJcIiE9PXR5cGVvZiBifHwwPT09Ynx8cGIuaGFzT3duUHJvcGVydHkoYSkmJnBiW2FdPyhcIlwiK2IpLnRyaW0oKTpiK1wicHhcIn1cbmZ1bmN0aW9uIHNiKGEsYil7YT1hLnN0eWxlO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPTA9PT1jLmluZGV4T2YoXCItLVwiKSxlPXJiKGMsYltjXSxkKTtcImZsb2F0XCI9PT1jJiYoYz1cImNzc0Zsb2F0XCIpO2Q/YS5zZXRQcm9wZXJ0eShjLGUpOmFbY109ZX19dmFyIHRiPUEoe21lbnVpdGVtOiEwfSx7YXJlYTohMCxiYXNlOiEwLGJyOiEwLGNvbDohMCxlbWJlZDohMCxocjohMCxpbWc6ITAsaW5wdXQ6ITAsa2V5Z2VuOiEwLGxpbms6ITAsbWV0YTohMCxwYXJhbTohMCxzb3VyY2U6ITAsdHJhY2s6ITAsd2JyOiEwfSk7XG5mdW5jdGlvbiB1YihhLGIpe2lmKGIpe2lmKHRiW2FdJiYobnVsbCE9Yi5jaGlsZHJlbnx8bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IocCgxMzcsYSkpO2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2lmKG51bGwhPWIuY2hpbGRyZW4pdGhyb3cgRXJyb3IocCg2MCkpO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTHx8IShcIl9faHRtbFwiaW4gYi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IocCg2MSkpO31pZihudWxsIT1iLnN0eWxlJiZcIm9iamVjdFwiIT09dHlwZW9mIGIuc3R5bGUpdGhyb3cgRXJyb3IocCg2MikpO319XG5mdW5jdGlvbiB2YihhLGIpe2lmKC0xPT09YS5pbmRleE9mKFwiLVwiKSlyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGIuaXM7c3dpdGNoKGEpe2Nhc2UgXCJhbm5vdGF0aW9uLXhtbFwiOmNhc2UgXCJjb2xvci1wcm9maWxlXCI6Y2FzZSBcImZvbnQtZmFjZVwiOmNhc2UgXCJmb250LWZhY2Utc3JjXCI6Y2FzZSBcImZvbnQtZmFjZS11cmlcIjpjYXNlIFwiZm9udC1mYWNlLWZvcm1hdFwiOmNhc2UgXCJmb250LWZhY2UtbmFtZVwiOmNhc2UgXCJtaXNzaW5nLWdseXBoXCI6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMH19dmFyIHdiPW51bGw7ZnVuY3Rpb24geGIoYSl7YT1hLnRhcmdldHx8YS5zcmNFbGVtZW50fHx3aW5kb3c7YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCYmKGE9YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCk7cmV0dXJuIDM9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphfXZhciB5Yj1udWxsLHpiPW51bGwsQWI9bnVsbDtcbmZ1bmN0aW9uIEJiKGEpe2lmKGE9Q2IoYSkpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiB5Yil0aHJvdyBFcnJvcihwKDI4MCkpO3ZhciBiPWEuc3RhdGVOb2RlO2ImJihiPURiKGIpLHliKGEuc3RhdGVOb2RlLGEudHlwZSxiKSl9fWZ1bmN0aW9uIEViKGEpe3piP0FiP0FiLnB1c2goYSk6QWI9W2FdOnpiPWF9ZnVuY3Rpb24gRmIoKXtpZih6Yil7dmFyIGE9emIsYj1BYjtBYj16Yj1udWxsO0JiKGEpO2lmKGIpZm9yKGE9MDthPGIubGVuZ3RoO2ErKylCYihiW2FdKX19ZnVuY3Rpb24gR2IoYSxiKXtyZXR1cm4gYShiKX1mdW5jdGlvbiBIYigpe312YXIgSWI9ITE7ZnVuY3Rpb24gSmIoYSxiLGMpe2lmKEliKXJldHVybiBhKGIsYyk7SWI9ITA7dHJ5e3JldHVybiBHYihhLGIsYyl9ZmluYWxseXtpZihJYj0hMSxudWxsIT09emJ8fG51bGwhPT1BYilIYigpLEZiKCl9fVxuZnVuY3Rpb24gS2IoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtpZihudWxsPT09YylyZXR1cm4gbnVsbDt2YXIgZD1EYihjKTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtjPWRbYl07YTpzd2l0Y2goYil7Y2FzZSBcIm9uQ2xpY2tcIjpjYXNlIFwib25DbGlja0NhcHR1cmVcIjpjYXNlIFwib25Eb3VibGVDbGlja1wiOmNhc2UgXCJvbkRvdWJsZUNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRG93blwiOmNhc2UgXCJvbk1vdXNlRG93bkNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZU1vdmVcIjpjYXNlIFwib25Nb3VzZU1vdmVDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VVcFwiOmNhc2UgXCJvbk1vdXNlVXBDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VFbnRlclwiOihkPSFkLmRpc2FibGVkKXx8KGE9YS50eXBlLGQ9IShcImJ1dHRvblwiPT09YXx8XCJpbnB1dFwiPT09YXx8XCJzZWxlY3RcIj09PWF8fFwidGV4dGFyZWFcIj09PWEpKTthPSFkO2JyZWFrIGE7ZGVmYXVsdDphPSExfWlmKGEpcmV0dXJuIG51bGw7aWYoYyYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgYyl0aHJvdyBFcnJvcihwKDIzMSxiLHR5cGVvZiBjKSk7cmV0dXJuIGN9dmFyIExiPSExO2lmKGlhKXRyeXt2YXIgTWI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KE1iLFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtMYj0hMH19KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixNYixNYik7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsTWIsTWIpfWNhdGNoKGEpe0xiPSExfWZ1bmN0aW9uIE5iKGEsYixjLGQsZSxmLGcsaCxrKXt2YXIgbD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMyk7dHJ5e2IuYXBwbHkoYyxsKX1jYXRjaChtKXt0aGlzLm9uRXJyb3IobSl9fXZhciBPYj0hMSxQYj1udWxsLFFiPSExLFJiPW51bGwsU2I9e29uRXJyb3I6ZnVuY3Rpb24oYSl7T2I9ITA7UGI9YX19O2Z1bmN0aW9uIFRiKGEsYixjLGQsZSxmLGcsaCxrKXtPYj0hMTtQYj1udWxsO05iLmFwcGx5KFNiLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBVYihhLGIsYyxkLGUsZixnLGgsayl7VGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKE9iKXtpZihPYil7dmFyIGw9UGI7T2I9ITE7UGI9bnVsbH1lbHNlIHRocm93IEVycm9yKHAoMTk4KSk7UWJ8fChRYj0hMCxSYj1sKX19ZnVuY3Rpb24gVmIoYSl7dmFyIGI9YSxjPWE7aWYoYS5hbHRlcm5hdGUpZm9yKDtiLnJldHVybjspYj1iLnJldHVybjtlbHNle2E9YjtkbyBiPWEsMCE9PShiLmZsYWdzJjQwOTgpJiYoYz1iLnJldHVybiksYT1iLnJldHVybjt3aGlsZShhKX1yZXR1cm4gMz09PWIudGFnP2M6bnVsbH1mdW5jdGlvbiBXYihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWImJihhPWEuYWx0ZXJuYXRlLG51bGwhPT1hJiYoYj1hLm1lbW9pemVkU3RhdGUpKTtpZihudWxsIT09YilyZXR1cm4gYi5kZWh5ZHJhdGVkfXJldHVybiBudWxsfWZ1bmN0aW9uIFhiKGEpe2lmKFZiKGEpIT09YSl0aHJvdyBFcnJvcihwKDE4OCkpO31cbmZ1bmN0aW9uIFliKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXtiPVZiKGEpO2lmKG51bGw9PT1iKXRocm93IEVycm9yKHAoMTg4KSk7cmV0dXJuIGIhPT1hP251bGw6YX1mb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm47aWYobnVsbD09PWUpYnJlYWs7dmFyIGY9ZS5hbHRlcm5hdGU7aWYobnVsbD09PWYpe2Q9ZS5yZXR1cm47aWYobnVsbCE9PWQpe2M9ZDtjb250aW51ZX1icmVha31pZihlLmNoaWxkPT09Zi5jaGlsZCl7Zm9yKGY9ZS5jaGlsZDtmOyl7aWYoZj09PWMpcmV0dXJuIFhiKGUpLGE7aWYoZj09PWQpcmV0dXJuIFhiKGUpLGI7Zj1mLnNpYmxpbmd9dGhyb3cgRXJyb3IocCgxODgpKTt9aWYoYy5yZXR1cm4hPT1kLnJldHVybiljPWUsZD1mO2Vsc2V7Zm9yKHZhciBnPSExLGg9ZS5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1lO2Q9ZjticmVha31pZihoPT09ZCl7Zz0hMDtkPWU7Yz1mO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXtmb3IoaD1mLmNoaWxkO2g7KXtpZihoPT09XG5jKXtnPSEwO2M9ZjtkPWU7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1mO2M9ZTticmVha31oPWguc2libGluZ31pZighZyl0aHJvdyBFcnJvcihwKDE4OSkpO319aWYoYy5hbHRlcm5hdGUhPT1kKXRocm93IEVycm9yKHAoMTkwKSk7fWlmKDMhPT1jLnRhZyl0aHJvdyBFcnJvcihwKDE4OCkpO3JldHVybiBjLnN0YXRlTm9kZS5jdXJyZW50PT09Yz9hOmJ9ZnVuY3Rpb24gWmIoYSl7YT1ZYihhKTtyZXR1cm4gbnVsbCE9PWE/JGIoYSk6bnVsbH1mdW5jdGlvbiAkYihhKXtpZig1PT09YS50YWd8fDY9PT1hLnRhZylyZXR1cm4gYTtmb3IoYT1hLmNoaWxkO251bGwhPT1hOyl7dmFyIGI9JGIoYSk7aWYobnVsbCE9PWIpcmV0dXJuIGI7YT1hLnNpYmxpbmd9cmV0dXJuIG51bGx9XG52YXIgYWM9Y2EudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxiYz1jYS51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayxjYz1jYS51bnN0YWJsZV9zaG91bGRZaWVsZCxkYz1jYS51bnN0YWJsZV9yZXF1ZXN0UGFpbnQsQj1jYS51bnN0YWJsZV9ub3csZWM9Y2EudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwsZmM9Y2EudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHksZ2M9Y2EudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksaGM9Y2EudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksaWM9Y2EudW5zdGFibGVfTG93UHJpb3JpdHksamM9Y2EudW5zdGFibGVfSWRsZVByaW9yaXR5LGtjPW51bGwsbGM9bnVsbDtmdW5jdGlvbiBtYyhhKXtpZihsYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGxjLm9uQ29tbWl0RmliZXJSb290KXRyeXtsYy5vbkNvbW1pdEZpYmVyUm9vdChrYyxhLHZvaWQgMCwxMjg9PT0oYS5jdXJyZW50LmZsYWdzJjEyOCkpfWNhdGNoKGIpe319XG52YXIgb2M9TWF0aC5jbHozMj9NYXRoLmNsejMyOm5jLHBjPU1hdGgubG9nLHFjPU1hdGguTE4yO2Z1bmN0aW9uIG5jKGEpe2E+Pj49MDtyZXR1cm4gMD09PWE/MzI6MzEtKHBjKGEpL3FjfDApfDB9dmFyIHJjPTY0LHNjPTQxOTQzMDQ7XG5mdW5jdGlvbiB0YyhhKXtzd2l0Y2goYSYtYSl7Y2FzZSAxOnJldHVybiAxO2Nhc2UgMjpyZXR1cm4gMjtjYXNlIDQ6cmV0dXJuIDQ7Y2FzZSA4OnJldHVybiA4O2Nhc2UgMTY6cmV0dXJuIDE2O2Nhc2UgMzI6cmV0dXJuIDMyO2Nhc2UgNjQ6Y2FzZSAxMjg6Y2FzZSAyNTY6Y2FzZSA1MTI6Y2FzZSAxMDI0OmNhc2UgMjA0ODpjYXNlIDQwOTY6Y2FzZSA4MTkyOmNhc2UgMTYzODQ6Y2FzZSAzMjc2ODpjYXNlIDY1NTM2OmNhc2UgMTMxMDcyOmNhc2UgMjYyMTQ0OmNhc2UgNTI0Mjg4OmNhc2UgMTA0ODU3NjpjYXNlIDIwOTcxNTI6cmV0dXJuIGEmNDE5NDI0MDtjYXNlIDQxOTQzMDQ6Y2FzZSA4Mzg4NjA4OmNhc2UgMTY3NzcyMTY6Y2FzZSAzMzU1NDQzMjpjYXNlIDY3MTA4ODY0OnJldHVybiBhJjEzMDAyMzQyNDtjYXNlIDEzNDIxNzcyODpyZXR1cm4gMTM0MjE3NzI4O2Nhc2UgMjY4NDM1NDU2OnJldHVybiAyNjg0MzU0NTY7Y2FzZSA1MzY4NzA5MTI6cmV0dXJuIDUzNjg3MDkxMjtjYXNlIDEwNzM3NDE4MjQ6cmV0dXJuIDEwNzM3NDE4MjQ7XG5kZWZhdWx0OnJldHVybiBhfX1mdW5jdGlvbiB1YyhhLGIpe3ZhciBjPWEucGVuZGluZ0xhbmVzO2lmKDA9PT1jKXJldHVybiAwO3ZhciBkPTAsZT1hLnN1c3BlbmRlZExhbmVzLGY9YS5waW5nZWRMYW5lcyxnPWMmMjY4NDM1NDU1O2lmKDAhPT1nKXt2YXIgaD1nJn5lOzAhPT1oP2Q9dGMoaCk6KGYmPWcsMCE9PWYmJihkPXRjKGYpKSl9ZWxzZSBnPWMmfmUsMCE9PWc/ZD10YyhnKTowIT09ZiYmKGQ9dGMoZikpO2lmKDA9PT1kKXJldHVybiAwO2lmKDAhPT1iJiZiIT09ZCYmMD09PShiJmUpJiYoZT1kJi1kLGY9YiYtYixlPj1mfHwxNj09PWUmJjAhPT0oZiY0MTk0MjQwKSkpcmV0dXJuIGI7MCE9PShkJjQpJiYoZHw9YyYxNik7Yj1hLmVudGFuZ2xlZExhbmVzO2lmKDAhPT1iKWZvcihhPWEuZW50YW5nbGVtZW50cyxiJj1kOzA8YjspYz0zMS1vYyhiKSxlPTE8PGMsZHw9YVtjXSxiJj1+ZTtyZXR1cm4gZH1cbmZ1bmN0aW9uIHZjKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTpjYXNlIDI6Y2FzZSA0OnJldHVybiBiKzI1MDtjYXNlIDg6Y2FzZSAxNjpjYXNlIDMyOmNhc2UgNjQ6Y2FzZSAxMjg6Y2FzZSAyNTY6Y2FzZSA1MTI6Y2FzZSAxMDI0OmNhc2UgMjA0ODpjYXNlIDQwOTY6Y2FzZSA4MTkyOmNhc2UgMTYzODQ6Y2FzZSAzMjc2ODpjYXNlIDY1NTM2OmNhc2UgMTMxMDcyOmNhc2UgMjYyMTQ0OmNhc2UgNTI0Mjg4OmNhc2UgMTA0ODU3NjpjYXNlIDIwOTcxNTI6cmV0dXJuIGIrNUUzO2Nhc2UgNDE5NDMwNDpjYXNlIDgzODg2MDg6Y2FzZSAxNjc3NzIxNjpjYXNlIDMzNTU0NDMyOmNhc2UgNjcxMDg4NjQ6cmV0dXJuLTE7Y2FzZSAxMzQyMTc3Mjg6Y2FzZSAyNjg0MzU0NTY6Y2FzZSA1MzY4NzA5MTI6Y2FzZSAxMDczNzQxODI0OnJldHVybi0xO2RlZmF1bHQ6cmV0dXJuLTF9fVxuZnVuY3Rpb24gd2MoYSxiKXtmb3IodmFyIGM9YS5zdXNwZW5kZWRMYW5lcyxkPWEucGluZ2VkTGFuZXMsZT1hLmV4cGlyYXRpb25UaW1lcyxmPWEucGVuZGluZ0xhbmVzOzA8Zjspe3ZhciBnPTMxLW9jKGYpLGg9MTw8ZyxrPWVbZ107aWYoLTE9PT1rKXtpZigwPT09KGgmYyl8fDAhPT0oaCZkKSllW2ddPXZjKGgsYil9ZWxzZSBrPD1iJiYoYS5leHBpcmVkTGFuZXN8PWgpO2YmPX5ofX1mdW5jdGlvbiB4YyhhKXthPWEucGVuZGluZ0xhbmVzJi0xMDczNzQxODI1O3JldHVybiAwIT09YT9hOmEmMTA3Mzc0MTgyND8xMDczNzQxODI0OjB9ZnVuY3Rpb24geWMoKXt2YXIgYT1yYztyYzw8PTE7MD09PShyYyY0MTk0MjQwKSYmKHJjPTY0KTtyZXR1cm4gYX1mdW5jdGlvbiB6YyhhKXtmb3IodmFyIGI9W10sYz0wOzMxPmM7YysrKWIucHVzaChhKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIEFjKGEsYixjKXthLnBlbmRpbmdMYW5lc3w9Yjs1MzY4NzA5MTIhPT1iJiYoYS5zdXNwZW5kZWRMYW5lcz0wLGEucGluZ2VkTGFuZXM9MCk7YT1hLmV2ZW50VGltZXM7Yj0zMS1vYyhiKTthW2JdPWN9ZnVuY3Rpb24gQmMoYSxiKXt2YXIgYz1hLnBlbmRpbmdMYW5lcyZ+YjthLnBlbmRpbmdMYW5lcz1iO2Euc3VzcGVuZGVkTGFuZXM9MDthLnBpbmdlZExhbmVzPTA7YS5leHBpcmVkTGFuZXMmPWI7YS5tdXRhYmxlUmVhZExhbmVzJj1iO2EuZW50YW5nbGVkTGFuZXMmPWI7Yj1hLmVudGFuZ2xlbWVudHM7dmFyIGQ9YS5ldmVudFRpbWVzO2ZvcihhPWEuZXhwaXJhdGlvblRpbWVzOzA8Yzspe3ZhciBlPTMxLW9jKGMpLGY9MTw8ZTtiW2VdPTA7ZFtlXT0tMTthW2VdPS0xO2MmPX5mfX1cbmZ1bmN0aW9uIENjKGEsYil7dmFyIGM9YS5lbnRhbmdsZWRMYW5lc3w9Yjtmb3IoYT1hLmVudGFuZ2xlbWVudHM7Yzspe3ZhciBkPTMxLW9jKGMpLGU9MTw8ZDtlJmJ8YVtkXSZiJiYoYVtkXXw9Yik7YyY9fmV9fXZhciBDPTA7ZnVuY3Rpb24gRGMoYSl7YSY9LWE7cmV0dXJuIDE8YT80PGE/MCE9PShhJjI2ODQzNTQ1NSk/MTY6NTM2ODcwOTEyOjQ6MX12YXIgRWMsRmMsR2MsSGMsSWMsSmM9ITEsS2M9W10sTGM9bnVsbCxNYz1udWxsLE5jPW51bGwsT2M9bmV3IE1hcCxQYz1uZXcgTWFwLFFjPVtdLFJjPVwibW91c2Vkb3duIG1vdXNldXAgdG91Y2hjYW5jZWwgdG91Y2hlbmQgdG91Y2hzdGFydCBhdXhjbGljayBkYmxjbGljayBwb2ludGVyY2FuY2VsIHBvaW50ZXJkb3duIHBvaW50ZXJ1cCBkcmFnZW5kIGRyYWdzdGFydCBkcm9wIGNvbXBvc2l0aW9uZW5kIGNvbXBvc2l0aW9uc3RhcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBpbnB1dCB0ZXh0SW5wdXQgY29weSBjdXQgcGFzdGUgY2xpY2sgY2hhbmdlIGNvbnRleHRtZW51IHJlc2V0IHN1Ym1pdFwiLnNwbGl0KFwiIFwiKTtcbmZ1bmN0aW9uIFNjKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c2luXCI6Y2FzZSBcImZvY3Vzb3V0XCI6TGM9bnVsbDticmVhaztjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdsZWF2ZVwiOk1jPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJtb3VzZW91dFwiOk5jPW51bGw7YnJlYWs7Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpPYy5kZWxldGUoYi5wb2ludGVySWQpO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpQYy5kZWxldGUoYi5wb2ludGVySWQpfX1cbmZ1bmN0aW9uIFRjKGEsYixjLGQsZSxmKXtpZihudWxsPT09YXx8YS5uYXRpdmVFdmVudCE9PWYpcmV0dXJuIGE9e2Jsb2NrZWRPbjpiLGRvbUV2ZW50TmFtZTpjLGV2ZW50U3lzdGVtRmxhZ3M6ZCxuYXRpdmVFdmVudDpmLHRhcmdldENvbnRhaW5lcnM6W2VdfSxudWxsIT09YiYmKGI9Q2IoYiksbnVsbCE9PWImJkZjKGIpKSxhO2EuZXZlbnRTeXN0ZW1GbGFnc3w9ZDtiPWEudGFyZ2V0Q29udGFpbmVycztudWxsIT09ZSYmLTE9PT1iLmluZGV4T2YoZSkmJmIucHVzaChlKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIFVjKGEsYixjLGQsZSl7c3dpdGNoKGIpe2Nhc2UgXCJmb2N1c2luXCI6cmV0dXJuIExjPVRjKExjLGEsYixjLGQsZSksITA7Y2FzZSBcImRyYWdlbnRlclwiOnJldHVybiBNYz1UYyhNYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJtb3VzZW92ZXJcIjpyZXR1cm4gTmM9VGMoTmMsYSxiLGMsZCxlKSwhMDtjYXNlIFwicG9pbnRlcm92ZXJcIjp2YXIgZj1lLnBvaW50ZXJJZDtPYy5zZXQoZixUYyhPYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSk7cmV0dXJuITA7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6cmV0dXJuIGY9ZS5wb2ludGVySWQsUGMuc2V0KGYsVGMoUGMuZ2V0KGYpfHxudWxsLGEsYixjLGQsZSkpLCEwfXJldHVybiExfVxuZnVuY3Rpb24gVmMoYSl7dmFyIGI9V2MoYS50YXJnZXQpO2lmKG51bGwhPT1iKXt2YXIgYz1WYihiKTtpZihudWxsIT09YylpZihiPWMudGFnLDEzPT09Yil7aWYoYj1XYihjKSxudWxsIT09Yil7YS5ibG9ja2VkT249YjtJYyhhLnByaW9yaXR5LGZ1bmN0aW9uKCl7R2MoYyl9KTtyZXR1cm59fWVsc2UgaWYoMz09PWImJmMuc3RhdGVOb2RlLmN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQpe2EuYmxvY2tlZE9uPTM9PT1jLnRhZz9jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7cmV0dXJufX1hLmJsb2NrZWRPbj1udWxsfVxuZnVuY3Rpb24gWGMoYSl7aWYobnVsbCE9PWEuYmxvY2tlZE9uKXJldHVybiExO2Zvcih2YXIgYj1hLnRhcmdldENvbnRhaW5lcnM7MDxiLmxlbmd0aDspe3ZhciBjPVljKGEuZG9tRXZlbnROYW1lLGEuZXZlbnRTeXN0ZW1GbGFncyxiWzBdLGEubmF0aXZlRXZlbnQpO2lmKG51bGw9PT1jKXtjPWEubmF0aXZlRXZlbnQ7dmFyIGQ9bmV3IGMuY29uc3RydWN0b3IoYy50eXBlLGMpO3diPWQ7Yy50YXJnZXQuZGlzcGF0Y2hFdmVudChkKTt3Yj1udWxsfWVsc2UgcmV0dXJuIGI9Q2IoYyksbnVsbCE9PWImJkZjKGIpLGEuYmxvY2tlZE9uPWMsITE7Yi5zaGlmdCgpfXJldHVybiEwfWZ1bmN0aW9uIFpjKGEsYixjKXtYYyhhKSYmYy5kZWxldGUoYil9ZnVuY3Rpb24gJGMoKXtKYz0hMTtudWxsIT09TGMmJlhjKExjKSYmKExjPW51bGwpO251bGwhPT1NYyYmWGMoTWMpJiYoTWM9bnVsbCk7bnVsbCE9PU5jJiZYYyhOYykmJihOYz1udWxsKTtPYy5mb3JFYWNoKFpjKTtQYy5mb3JFYWNoKFpjKX1cbmZ1bmN0aW9uIGFkKGEsYil7YS5ibG9ja2VkT249PT1iJiYoYS5ibG9ja2VkT249bnVsbCxKY3x8KEpjPSEwLGNhLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2soY2EudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksJGMpKSl9XG5mdW5jdGlvbiBiZChhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBhZChiLGEpfWlmKDA8S2MubGVuZ3RoKXthZChLY1swXSxhKTtmb3IodmFyIGM9MTtjPEtjLmxlbmd0aDtjKyspe3ZhciBkPUtjW2NdO2QuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpfX1udWxsIT09TGMmJmFkKExjLGEpO251bGwhPT1NYyYmYWQoTWMsYSk7bnVsbCE9PU5jJiZhZChOYyxhKTtPYy5mb3JFYWNoKGIpO1BjLmZvckVhY2goYik7Zm9yKGM9MDtjPFFjLmxlbmd0aDtjKyspZD1RY1tjXSxkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKTtmb3IoOzA8UWMubGVuZ3RoJiYoYz1RY1swXSxudWxsPT09Yy5ibG9ja2VkT24pOylWYyhjKSxudWxsPT09Yy5ibG9ja2VkT24mJlFjLnNoaWZ0KCl9dmFyIGNkPXVhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLGRkPSEwO1xuZnVuY3Rpb24gZWQoYSxiLGMsZCl7dmFyIGU9QyxmPWNkLnRyYW5zaXRpb247Y2QudHJhbnNpdGlvbj1udWxsO3RyeXtDPTEsZmQoYSxiLGMsZCl9ZmluYWxseXtDPWUsY2QudHJhbnNpdGlvbj1mfX1mdW5jdGlvbiBnZChhLGIsYyxkKXt2YXIgZT1DLGY9Y2QudHJhbnNpdGlvbjtjZC50cmFuc2l0aW9uPW51bGw7dHJ5e0M9NCxmZChhLGIsYyxkKX1maW5hbGx5e0M9ZSxjZC50cmFuc2l0aW9uPWZ9fVxuZnVuY3Rpb24gZmQoYSxiLGMsZCl7aWYoZGQpe3ZhciBlPVljKGEsYixjLGQpO2lmKG51bGw9PT1lKWhkKGEsYixkLGlkLGMpLFNjKGEsZCk7ZWxzZSBpZihVYyhlLGEsYixjLGQpKWQuc3RvcFByb3BhZ2F0aW9uKCk7ZWxzZSBpZihTYyhhLGQpLGImNCYmLTE8UmMuaW5kZXhPZihhKSl7Zm9yKDtudWxsIT09ZTspe3ZhciBmPUNiKGUpO251bGwhPT1mJiZFYyhmKTtmPVljKGEsYixjLGQpO251bGw9PT1mJiZoZChhLGIsZCxpZCxjKTtpZihmPT09ZSlicmVhaztlPWZ9bnVsbCE9PWUmJmQuc3RvcFByb3BhZ2F0aW9uKCl9ZWxzZSBoZChhLGIsZCxudWxsLGMpfX12YXIgaWQ9bnVsbDtcbmZ1bmN0aW9uIFljKGEsYixjLGQpe2lkPW51bGw7YT14YihkKTthPVdjKGEpO2lmKG51bGwhPT1hKWlmKGI9VmIoYSksbnVsbD09PWIpYT1udWxsO2Vsc2UgaWYoYz1iLnRhZywxMz09PWMpe2E9V2IoYik7aWYobnVsbCE9PWEpcmV0dXJuIGE7YT1udWxsfWVsc2UgaWYoMz09PWMpe2lmKGIuc3RhdGVOb2RlLmN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQpcmV0dXJuIDM9PT1iLnRhZz9iLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7YT1udWxsfWVsc2UgYiE9PWEmJihhPW51bGwpO2lkPWE7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBqZChhKXtzd2l0Y2goYSl7Y2FzZSBcImNhbmNlbFwiOmNhc2UgXCJjbGlja1wiOmNhc2UgXCJjbG9zZVwiOmNhc2UgXCJjb250ZXh0bWVudVwiOmNhc2UgXCJjb3B5XCI6Y2FzZSBcImN1dFwiOmNhc2UgXCJhdXhjbGlja1wiOmNhc2UgXCJkYmxjbGlja1wiOmNhc2UgXCJkcmFnZW5kXCI6Y2FzZSBcImRyYWdzdGFydFwiOmNhc2UgXCJkcm9wXCI6Y2FzZSBcImZvY3VzaW5cIjpjYXNlIFwiZm9jdXNvdXRcIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwiaW52YWxpZFwiOmNhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXByZXNzXCI6Y2FzZSBcImtleXVwXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcInBhc3RlXCI6Y2FzZSBcInBhdXNlXCI6Y2FzZSBcInBsYXlcIjpjYXNlIFwicG9pbnRlcmNhbmNlbFwiOmNhc2UgXCJwb2ludGVyZG93blwiOmNhc2UgXCJwb2ludGVydXBcIjpjYXNlIFwicmF0ZWNoYW5nZVwiOmNhc2UgXCJyZXNldFwiOmNhc2UgXCJyZXNpemVcIjpjYXNlIFwic2Vla2VkXCI6Y2FzZSBcInN1Ym1pdFwiOmNhc2UgXCJ0b3VjaGNhbmNlbFwiOmNhc2UgXCJ0b3VjaGVuZFwiOmNhc2UgXCJ0b3VjaHN0YXJ0XCI6Y2FzZSBcInZvbHVtZWNoYW5nZVwiOmNhc2UgXCJjaGFuZ2VcIjpjYXNlIFwic2VsZWN0aW9uY2hhbmdlXCI6Y2FzZSBcInRleHRJbnB1dFwiOmNhc2UgXCJjb21wb3NpdGlvbnN0YXJ0XCI6Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6Y2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6Y2FzZSBcImJlZm9yZWJsdXJcIjpjYXNlIFwiYWZ0ZXJibHVyXCI6Y2FzZSBcImJlZm9yZWlucHV0XCI6Y2FzZSBcImJsdXJcIjpjYXNlIFwiZnVsbHNjcmVlbmNoYW5nZVwiOmNhc2UgXCJmb2N1c1wiOmNhc2UgXCJoYXNoY2hhbmdlXCI6Y2FzZSBcInBvcHN0YXRlXCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJzZWxlY3RzdGFydFwiOnJldHVybiAxO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnZXhpdFwiOmNhc2UgXCJkcmFnbGVhdmVcIjpjYXNlIFwiZHJhZ292ZXJcIjpjYXNlIFwibW91c2Vtb3ZlXCI6Y2FzZSBcIm1vdXNlb3V0XCI6Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJwb2ludGVybW92ZVwiOmNhc2UgXCJwb2ludGVyb3V0XCI6Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInNjcm9sbFwiOmNhc2UgXCJ0b2dnbGVcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcIndoZWVsXCI6Y2FzZSBcIm1vdXNlZW50ZXJcIjpjYXNlIFwibW91c2VsZWF2ZVwiOmNhc2UgXCJwb2ludGVyZW50ZXJcIjpjYXNlIFwicG9pbnRlcmxlYXZlXCI6cmV0dXJuIDQ7XG5jYXNlIFwibWVzc2FnZVwiOnN3aXRjaChlYygpKXtjYXNlIGZjOnJldHVybiAxO2Nhc2UgZ2M6cmV0dXJuIDQ7Y2FzZSBoYzpjYXNlIGljOnJldHVybiAxNjtjYXNlIGpjOnJldHVybiA1MzY4NzA5MTI7ZGVmYXVsdDpyZXR1cm4gMTZ9ZGVmYXVsdDpyZXR1cm4gMTZ9fXZhciBrZD1udWxsLGxkPW51bGwsbWQ9bnVsbDtmdW5jdGlvbiBuZCgpe2lmKG1kKXJldHVybiBtZDt2YXIgYSxiPWxkLGM9Yi5sZW5ndGgsZCxlPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGY9ZS5sZW5ndGg7Zm9yKGE9MDthPGMmJmJbYV09PT1lW2FdO2ErKyk7dmFyIGc9Yy1hO2ZvcihkPTE7ZDw9ZyYmYltjLWRdPT09ZVtmLWRdO2QrKyk7cmV0dXJuIG1kPWUuc2xpY2UoYSwxPGQ/MS1kOnZvaWQgMCl9XG5mdW5jdGlvbiBvZChhKXt2YXIgYj1hLmtleUNvZGU7XCJjaGFyQ29kZVwiaW4gYT8oYT1hLmNoYXJDb2RlLDA9PT1hJiYxMz09PWImJihhPTEzKSk6YT1iOzEwPT09YSYmKGE9MTMpO3JldHVybiAzMjw9YXx8MTM9PT1hP2E6MH1mdW5jdGlvbiBwZCgpe3JldHVybiEwfWZ1bmN0aW9uIHFkKCl7cmV0dXJuITF9XG5mdW5jdGlvbiByZChhKXtmdW5jdGlvbiBiKGIsZCxlLGYsZyl7dGhpcy5fcmVhY3ROYW1lPWI7dGhpcy5fdGFyZ2V0SW5zdD1lO3RoaXMudHlwZT1kO3RoaXMubmF0aXZlRXZlbnQ9Zjt0aGlzLnRhcmdldD1nO3RoaXMuY3VycmVudFRhcmdldD1udWxsO2Zvcih2YXIgYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJihiPWFbY10sdGhpc1tjXT1iP2IoZik6ZltjXSk7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9KG51bGwhPWYuZGVmYXVsdFByZXZlbnRlZD9mLmRlZmF1bHRQcmV2ZW50ZWQ6ITE9PT1mLnJldHVyblZhbHVlKT9wZDpxZDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXFkO3JldHVybiB0aGlzfUEoYi5wcm90b3R5cGUse3ByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwO3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOlwidW5rbm93blwiIT09dHlwZW9mIGEucmV0dXJuVmFsdWUmJlxuKGEucmV0dXJuVmFsdWU9ITEpLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPXBkKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5zdG9wUHJvcGFnYXRpb24/YS5zdG9wUHJvcGFnYXRpb24oKTpcInVua25vd25cIiE9PXR5cGVvZiBhLmNhbmNlbEJ1YmJsZSYmKGEuY2FuY2VsQnViYmxlPSEwKSx0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXBkKX0scGVyc2lzdDpmdW5jdGlvbigpe30saXNQZXJzaXN0ZW50OnBkfSk7cmV0dXJuIGJ9XG52YXIgc2Q9e2V2ZW50UGhhc2U6MCxidWJibGVzOjAsY2FuY2VsYWJsZTowLHRpbWVTdGFtcDpmdW5jdGlvbihhKXtyZXR1cm4gYS50aW1lU3RhbXB8fERhdGUubm93KCl9LGRlZmF1bHRQcmV2ZW50ZWQ6MCxpc1RydXN0ZWQ6MH0sdGQ9cmQoc2QpLHVkPUEoe30sc2Qse3ZpZXc6MCxkZXRhaWw6MH0pLHZkPXJkKHVkKSx3ZCx4ZCx5ZCxBZD1BKHt9LHVkLHtzY3JlZW5YOjAsc2NyZWVuWTowLGNsaWVudFg6MCxjbGllbnRZOjAscGFnZVg6MCxwYWdlWTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGFsdEtleTowLG1ldGFLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkLGJ1dHRvbjowLGJ1dHRvbnM6MCxyZWxhdGVkVGFyZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hLnJlbGF0ZWRUYXJnZXQ/YS5mcm9tRWxlbWVudD09PWEuc3JjRWxlbWVudD9hLnRvRWxlbWVudDphLmZyb21FbGVtZW50OmEucmVsYXRlZFRhcmdldH0sbW92ZW1lbnRYOmZ1bmN0aW9uKGEpe2lmKFwibW92ZW1lbnRYXCJpblxuYSlyZXR1cm4gYS5tb3ZlbWVudFg7YSE9PXlkJiYoeWQmJlwibW91c2Vtb3ZlXCI9PT1hLnR5cGU/KHdkPWEuc2NyZWVuWC15ZC5zY3JlZW5YLHhkPWEuc2NyZWVuWS15ZC5zY3JlZW5ZKTp4ZD13ZD0wLHlkPWEpO3JldHVybiB3ZH0sbW92ZW1lbnRZOmZ1bmN0aW9uKGEpe3JldHVyblwibW92ZW1lbnRZXCJpbiBhP2EubW92ZW1lbnRZOnhkfX0pLEJkPXJkKEFkKSxDZD1BKHt9LEFkLHtkYXRhVHJhbnNmZXI6MH0pLERkPXJkKENkKSxFZD1BKHt9LHVkLHtyZWxhdGVkVGFyZ2V0OjB9KSxGZD1yZChFZCksR2Q9QSh7fSxzZCx7YW5pbWF0aW9uTmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksSGQ9cmQoR2QpLElkPUEoe30sc2Qse2NsaXBib2FyZERhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuXCJjbGlwYm9hcmREYXRhXCJpbiBhP2EuY2xpcGJvYXJkRGF0YTp3aW5kb3cuY2xpcGJvYXJkRGF0YX19KSxKZD1yZChJZCksS2Q9QSh7fSxzZCx7ZGF0YTowfSksTGQ9cmQoS2QpLE1kPXtFc2M6XCJFc2NhcGVcIixcblNwYWNlYmFyOlwiIFwiLExlZnQ6XCJBcnJvd0xlZnRcIixVcDpcIkFycm93VXBcIixSaWdodDpcIkFycm93UmlnaHRcIixEb3duOlwiQXJyb3dEb3duXCIsRGVsOlwiRGVsZXRlXCIsV2luOlwiT1NcIixNZW51OlwiQ29udGV4dE1lbnVcIixBcHBzOlwiQ29udGV4dE1lbnVcIixTY3JvbGw6XCJTY3JvbGxMb2NrXCIsTW96UHJpbnRhYmxlS2V5OlwiVW5pZGVudGlmaWVkXCJ9LE5kPXs4OlwiQmFja3NwYWNlXCIsOTpcIlRhYlwiLDEyOlwiQ2xlYXJcIiwxMzpcIkVudGVyXCIsMTY6XCJTaGlmdFwiLDE3OlwiQ29udHJvbFwiLDE4OlwiQWx0XCIsMTk6XCJQYXVzZVwiLDIwOlwiQ2Fwc0xvY2tcIiwyNzpcIkVzY2FwZVwiLDMyOlwiIFwiLDMzOlwiUGFnZVVwXCIsMzQ6XCJQYWdlRG93blwiLDM1OlwiRW5kXCIsMzY6XCJIb21lXCIsMzc6XCJBcnJvd0xlZnRcIiwzODpcIkFycm93VXBcIiwzOTpcIkFycm93UmlnaHRcIiw0MDpcIkFycm93RG93blwiLDQ1OlwiSW5zZXJ0XCIsNDY6XCJEZWxldGVcIiwxMTI6XCJGMVwiLDExMzpcIkYyXCIsMTE0OlwiRjNcIiwxMTU6XCJGNFwiLDExNjpcIkY1XCIsMTE3OlwiRjZcIiwxMTg6XCJGN1wiLFxuMTE5OlwiRjhcIiwxMjA6XCJGOVwiLDEyMTpcIkYxMFwiLDEyMjpcIkYxMVwiLDEyMzpcIkYxMlwiLDE0NDpcIk51bUxvY2tcIiwxNDU6XCJTY3JvbGxMb2NrXCIsMjI0OlwiTWV0YVwifSxPZD17QWx0OlwiYWx0S2V5XCIsQ29udHJvbDpcImN0cmxLZXlcIixNZXRhOlwibWV0YUtleVwiLFNoaWZ0Olwic2hpZnRLZXlcIn07ZnVuY3Rpb24gUGQoYSl7dmFyIGI9dGhpcy5uYXRpdmVFdmVudDtyZXR1cm4gYi5nZXRNb2RpZmllclN0YXRlP2IuZ2V0TW9kaWZpZXJTdGF0ZShhKTooYT1PZFthXSk/ISFiW2FdOiExfWZ1bmN0aW9uIHpkKCl7cmV0dXJuIFBkfVxudmFyIFFkPUEoe30sdWQse2tleTpmdW5jdGlvbihhKXtpZihhLmtleSl7dmFyIGI9TWRbYS5rZXldfHxhLmtleTtpZihcIlVuaWRlbnRpZmllZFwiIT09YilyZXR1cm4gYn1yZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/KGE9b2QoYSksMTM9PT1hP1wiRW50ZXJcIjpTdHJpbmcuZnJvbUNoYXJDb2RlKGEpKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP05kW2Eua2V5Q29kZV18fFwiVW5pZGVudGlmaWVkXCI6XCJcIn0sY29kZTowLGxvY2F0aW9uOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLHJlcGVhdDowLGxvY2FsZTowLGdldE1vZGlmaWVyU3RhdGU6emQsY2hhckNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlP29kKGEpOjB9LGtleUNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH0sd2hpY2g6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09XG5hLnR5cGU/b2QoYSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH19KSxSZD1yZChRZCksU2Q9QSh7fSxBZCx7cG9pbnRlcklkOjAsd2lkdGg6MCxoZWlnaHQ6MCxwcmVzc3VyZTowLHRhbmdlbnRpYWxQcmVzc3VyZTowLHRpbHRYOjAsdGlsdFk6MCx0d2lzdDowLHBvaW50ZXJUeXBlOjAsaXNQcmltYXJ5OjB9KSxUZD1yZChTZCksVWQ9QSh7fSx1ZCx7dG91Y2hlczowLHRhcmdldFRvdWNoZXM6MCxjaGFuZ2VkVG91Y2hlczowLGFsdEtleTowLG1ldGFLZXk6MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkfSksVmQ9cmQoVWQpLFdkPUEoe30sc2Qse3Byb3BlcnR5TmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksWGQ9cmQoV2QpLFlkPUEoe30sQWQse2RlbHRhWDpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWFwiaW4gYT9hLmRlbHRhWDpcIndoZWVsRGVsdGFYXCJpbiBhPy1hLndoZWVsRGVsdGFYOjB9LFxuZGVsdGFZOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFZXCJpbiBhP2EuZGVsdGFZOlwid2hlZWxEZWx0YVlcImluIGE/LWEud2hlZWxEZWx0YVk6XCJ3aGVlbERlbHRhXCJpbiBhPy1hLndoZWVsRGVsdGE6MH0sZGVsdGFaOjAsZGVsdGFNb2RlOjB9KSxaZD1yZChZZCksJGQ9WzksMTMsMjcsMzJdLGFlPWlhJiZcIkNvbXBvc2l0aW9uRXZlbnRcImluIHdpbmRvdyxiZT1udWxsO2lhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJihiZT1kb2N1bWVudC5kb2N1bWVudE1vZGUpO3ZhciBjZT1pYSYmXCJUZXh0RXZlbnRcImluIHdpbmRvdyYmIWJlLGRlPWlhJiYoIWFlfHxiZSYmODxiZSYmMTE+PWJlKSxlZT1TdHJpbmcuZnJvbUNoYXJDb2RlKDMyKSxmZT0hMTtcbmZ1bmN0aW9uIGdlKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJrZXl1cFwiOnJldHVybi0xIT09JGQuaW5kZXhPZihiLmtleUNvZGUpO2Nhc2UgXCJrZXlkb3duXCI6cmV0dXJuIDIyOSE9PWIua2V5Q29kZTtjYXNlIFwia2V5cHJlc3NcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcImZvY3Vzb3V0XCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gaGUoYSl7YT1hLmRldGFpbDtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJlwiZGF0YVwiaW4gYT9hLmRhdGE6bnVsbH12YXIgaWU9ITE7ZnVuY3Rpb24gamUoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIGhlKGIpO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDMyIT09Yi53aGljaClyZXR1cm4gbnVsbDtmZT0hMDtyZXR1cm4gZWU7Y2FzZSBcInRleHRJbnB1dFwiOnJldHVybiBhPWIuZGF0YSxhPT09ZWUmJmZlP251bGw6YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbmZ1bmN0aW9uIGtlKGEsYil7aWYoaWUpcmV0dXJuXCJjb21wb3NpdGlvbmVuZFwiPT09YXx8IWFlJiZnZShhLGIpPyhhPW5kKCksbWQ9bGQ9a2Q9bnVsbCxpZT0hMSxhKTpudWxsO3N3aXRjaChhKXtjYXNlIFwicGFzdGVcIjpyZXR1cm4gbnVsbDtjYXNlIFwia2V5cHJlc3NcIjppZighKGIuY3RybEtleXx8Yi5hbHRLZXl8fGIubWV0YUtleSl8fGIuY3RybEtleSYmYi5hbHRLZXkpe2lmKGIuY2hhciYmMTxiLmNoYXIubGVuZ3RoKXJldHVybiBiLmNoYXI7aWYoYi53aGljaClyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShiLndoaWNoKX1yZXR1cm4gbnVsbDtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gZGUmJlwia29cIiE9PWIubG9jYWxlP251bGw6Yi5kYXRhO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxudmFyIGxlPXtjb2xvcjohMCxkYXRlOiEwLGRhdGV0aW1lOiEwLFwiZGF0ZXRpbWUtbG9jYWxcIjohMCxlbWFpbDohMCxtb250aDohMCxudW1iZXI6ITAscGFzc3dvcmQ6ITAscmFuZ2U6ITAsc2VhcmNoOiEwLHRlbDohMCx0ZXh0OiEwLHRpbWU6ITAsdXJsOiEwLHdlZWs6ITB9O2Z1bmN0aW9uIG1lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iPyEhbGVbYS50eXBlXTpcInRleHRhcmVhXCI9PT1iPyEwOiExfWZ1bmN0aW9uIG5lKGEsYixjLGQpe0ViKGQpO2I9b2UoYixcIm9uQ2hhbmdlXCIpOzA8Yi5sZW5ndGgmJihjPW5ldyB0ZChcIm9uQ2hhbmdlXCIsXCJjaGFuZ2VcIixudWxsLGMsZCksYS5wdXNoKHtldmVudDpjLGxpc3RlbmVyczpifSkpfXZhciBwZT1udWxsLHFlPW51bGw7ZnVuY3Rpb24gcmUoYSl7c2UoYSwwKX1mdW5jdGlvbiB0ZShhKXt2YXIgYj11ZShhKTtpZihXYShiKSlyZXR1cm4gYX1cbmZ1bmN0aW9uIHZlKGEsYil7aWYoXCJjaGFuZ2VcIj09PWEpcmV0dXJuIGJ9dmFyIHdlPSExO2lmKGlhKXt2YXIgeGU7aWYoaWEpe3ZhciB5ZT1cIm9uaW5wdXRcImluIGRvY3VtZW50O2lmKCF5ZSl7dmFyIHplPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7emUuc2V0QXR0cmlidXRlKFwib25pbnB1dFwiLFwicmV0dXJuO1wiKTt5ZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgemUub25pbnB1dH14ZT15ZX1lbHNlIHhlPSExO3dlPXhlJiYoIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8OTxkb2N1bWVudC5kb2N1bWVudE1vZGUpfWZ1bmN0aW9uIEFlKCl7cGUmJihwZS5kZXRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkscWU9cGU9bnVsbCl9ZnVuY3Rpb24gQmUoYSl7aWYoXCJ2YWx1ZVwiPT09YS5wcm9wZXJ0eU5hbWUmJnRlKHFlKSl7dmFyIGI9W107bmUoYixxZSxhLHhiKGEpKTtKYihyZSxiKX19XG5mdW5jdGlvbiBDZShhLGIsYyl7XCJmb2N1c2luXCI9PT1hPyhBZSgpLHBlPWIscWU9YyxwZS5hdHRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkpOlwiZm9jdXNvdXRcIj09PWEmJkFlKCl9ZnVuY3Rpb24gRGUoYSl7aWYoXCJzZWxlY3Rpb25jaGFuZ2VcIj09PWF8fFwia2V5dXBcIj09PWF8fFwia2V5ZG93blwiPT09YSlyZXR1cm4gdGUocWUpfWZ1bmN0aW9uIEVlKGEsYil7aWYoXCJjbGlja1wiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gRmUoYSxiKXtpZihcImlucHV0XCI9PT1hfHxcImNoYW5nZVwiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gR2UoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1ifXZhciBIZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgT2JqZWN0LmlzP09iamVjdC5pczpHZTtcbmZ1bmN0aW9uIEllKGEsYil7aWYoSGUoYSxiKSlyZXR1cm4hMDtpZihcIm9iamVjdFwiIT09dHlwZW9mIGF8fG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGJ8fG51bGw9PT1iKXJldHVybiExO3ZhciBjPU9iamVjdC5rZXlzKGEpLGQ9T2JqZWN0LmtleXMoYik7aWYoYy5sZW5ndGghPT1kLmxlbmd0aClyZXR1cm4hMTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdO2lmKCFqYS5jYWxsKGIsZSl8fCFIZShhW2VdLGJbZV0pKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIEplKGEpe2Zvcig7YSYmYS5maXJzdENoaWxkOylhPWEuZmlyc3RDaGlsZDtyZXR1cm4gYX1cbmZ1bmN0aW9uIEtlKGEsYil7dmFyIGM9SmUoYSk7YT0wO2Zvcih2YXIgZDtjOyl7aWYoMz09PWMubm9kZVR5cGUpe2Q9YStjLnRleHRDb250ZW50Lmxlbmd0aDtpZihhPD1iJiZkPj1iKXJldHVybntub2RlOmMsb2Zmc2V0OmItYX07YT1kfWE6e2Zvcig7Yzspe2lmKGMubmV4dFNpYmxpbmcpe2M9Yy5uZXh0U2libGluZzticmVhayBhfWM9Yy5wYXJlbnROb2RlfWM9dm9pZCAwfWM9SmUoYyl9fWZ1bmN0aW9uIExlKGEsYil7cmV0dXJuIGEmJmI/YT09PWI/ITA6YSYmMz09PWEubm9kZVR5cGU/ITE6YiYmMz09PWIubm9kZVR5cGU/TGUoYSxiLnBhcmVudE5vZGUpOlwiY29udGFpbnNcImluIGE/YS5jb250YWlucyhiKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPyEhKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikmMTYpOiExOiExfVxuZnVuY3Rpb24gTWUoKXtmb3IodmFyIGE9d2luZG93LGI9WGEoKTtiIGluc3RhbmNlb2YgYS5IVE1MSUZyYW1lRWxlbWVudDspe3RyeXt2YXIgYz1cInN0cmluZ1wiPT09dHlwZW9mIGIuY29udGVudFdpbmRvdy5sb2NhdGlvbi5ocmVmfWNhdGNoKGQpe2M9ITF9aWYoYylhPWIuY29udGVudFdpbmRvdztlbHNlIGJyZWFrO2I9WGEoYS5kb2N1bWVudCl9cmV0dXJuIGJ9ZnVuY3Rpb24gTmUoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBiJiYoXCJpbnB1dFwiPT09YiYmKFwidGV4dFwiPT09YS50eXBlfHxcInNlYXJjaFwiPT09YS50eXBlfHxcInRlbFwiPT09YS50eXBlfHxcInVybFwiPT09YS50eXBlfHxcInBhc3N3b3JkXCI9PT1hLnR5cGUpfHxcInRleHRhcmVhXCI9PT1ifHxcInRydWVcIj09PWEuY29udGVudEVkaXRhYmxlKX1cbmZ1bmN0aW9uIE9lKGEpe3ZhciBiPU1lKCksYz1hLmZvY3VzZWRFbGVtLGQ9YS5zZWxlY3Rpb25SYW5nZTtpZihiIT09YyYmYyYmYy5vd25lckRvY3VtZW50JiZMZShjLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGMpKXtpZihudWxsIT09ZCYmTmUoYykpaWYoYj1kLnN0YXJ0LGE9ZC5lbmQsdm9pZCAwPT09YSYmKGE9YiksXCJzZWxlY3Rpb25TdGFydFwiaW4gYyljLnNlbGVjdGlvblN0YXJ0PWIsYy5zZWxlY3Rpb25FbmQ9TWF0aC5taW4oYSxjLnZhbHVlLmxlbmd0aCk7ZWxzZSBpZihhPShiPWMub3duZXJEb2N1bWVudHx8ZG9jdW1lbnQpJiZiLmRlZmF1bHRWaWV3fHx3aW5kb3csYS5nZXRTZWxlY3Rpb24pe2E9YS5nZXRTZWxlY3Rpb24oKTt2YXIgZT1jLnRleHRDb250ZW50Lmxlbmd0aCxmPU1hdGgubWluKGQuc3RhcnQsZSk7ZD12b2lkIDA9PT1kLmVuZD9mOk1hdGgubWluKGQuZW5kLGUpOyFhLmV4dGVuZCYmZj5kJiYoZT1kLGQ9ZixmPWUpO2U9S2UoYyxmKTt2YXIgZz1LZShjLFxuZCk7ZSYmZyYmKDEhPT1hLnJhbmdlQ291bnR8fGEuYW5jaG9yTm9kZSE9PWUubm9kZXx8YS5hbmNob3JPZmZzZXQhPT1lLm9mZnNldHx8YS5mb2N1c05vZGUhPT1nLm5vZGV8fGEuZm9jdXNPZmZzZXQhPT1nLm9mZnNldCkmJihiPWIuY3JlYXRlUmFuZ2UoKSxiLnNldFN0YXJ0KGUubm9kZSxlLm9mZnNldCksYS5yZW1vdmVBbGxSYW5nZXMoKSxmPmQ/KGEuYWRkUmFuZ2UoYiksYS5leHRlbmQoZy5ub2RlLGcub2Zmc2V0KSk6KGIuc2V0RW5kKGcubm9kZSxnLm9mZnNldCksYS5hZGRSYW5nZShiKSkpfWI9W107Zm9yKGE9YzthPWEucGFyZW50Tm9kZTspMT09PWEubm9kZVR5cGUmJmIucHVzaCh7ZWxlbWVudDphLGxlZnQ6YS5zY3JvbGxMZWZ0LHRvcDphLnNjcm9sbFRvcH0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmZvY3VzJiZjLmZvY3VzKCk7Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKylhPWJbY10sYS5lbGVtZW50LnNjcm9sbExlZnQ9YS5sZWZ0LGEuZWxlbWVudC5zY3JvbGxUb3A9YS50b3B9fVxudmFyIFBlPWlhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJjExPj1kb2N1bWVudC5kb2N1bWVudE1vZGUsUWU9bnVsbCxSZT1udWxsLFNlPW51bGwsVGU9ITE7XG5mdW5jdGlvbiBVZShhLGIsYyl7dmFyIGQ9Yy53aW5kb3c9PT1jP2MuZG9jdW1lbnQ6OT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQ7VGV8fG51bGw9PVFlfHxRZSE9PVhhKGQpfHwoZD1RZSxcInNlbGVjdGlvblN0YXJ0XCJpbiBkJiZOZShkKT9kPXtzdGFydDpkLnNlbGVjdGlvblN0YXJ0LGVuZDpkLnNlbGVjdGlvbkVuZH06KGQ9KGQub3duZXJEb2N1bWVudCYmZC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fHx3aW5kb3cpLmdldFNlbGVjdGlvbigpLGQ9e2FuY2hvck5vZGU6ZC5hbmNob3JOb2RlLGFuY2hvck9mZnNldDpkLmFuY2hvck9mZnNldCxmb2N1c05vZGU6ZC5mb2N1c05vZGUsZm9jdXNPZmZzZXQ6ZC5mb2N1c09mZnNldH0pLFNlJiZJZShTZSxkKXx8KFNlPWQsZD1vZShSZSxcIm9uU2VsZWN0XCIpLDA8ZC5sZW5ndGgmJihiPW5ldyB0ZChcIm9uU2VsZWN0XCIsXCJzZWxlY3RcIixudWxsLGIsYyksYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpkfSksYi50YXJnZXQ9UWUpKSl9XG5mdW5jdGlvbiBWZShhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBXZT17YW5pbWF0aW9uZW5kOlZlKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOlZlKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6VmUoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6VmUoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxYZT17fSxZZT17fTtcbmlhJiYoWWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgV2UuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgV2UuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgV2UuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgV2UudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBaZShhKXtpZihYZVthXSlyZXR1cm4gWGVbYV07aWYoIVdlW2FdKXJldHVybiBhO3ZhciBiPVdlW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIFllKXJldHVybiBYZVthXT1iW2NdO3JldHVybiBhfXZhciAkZT1aZShcImFuaW1hdGlvbmVuZFwiKSxhZj1aZShcImFuaW1hdGlvbml0ZXJhdGlvblwiKSxiZj1aZShcImFuaW1hdGlvbnN0YXJ0XCIpLGNmPVplKFwidHJhbnNpdGlvbmVuZFwiKSxkZj1uZXcgTWFwLGVmPVwiYWJvcnQgYXV4Q2xpY2sgY2FuY2VsIGNhblBsYXkgY2FuUGxheVRocm91Z2ggY2xpY2sgY2xvc2UgY29udGV4dE1lbnUgY29weSBjdXQgZHJhZyBkcmFnRW5kIGRyYWdFbnRlciBkcmFnRXhpdCBkcmFnTGVhdmUgZHJhZ092ZXIgZHJhZ1N0YXJ0IGRyb3AgZHVyYXRpb25DaGFuZ2UgZW1wdGllZCBlbmNyeXB0ZWQgZW5kZWQgZXJyb3IgZ290UG9pbnRlckNhcHR1cmUgaW5wdXQgaW52YWxpZCBrZXlEb3duIGtleVByZXNzIGtleVVwIGxvYWQgbG9hZGVkRGF0YSBsb2FkZWRNZXRhZGF0YSBsb2FkU3RhcnQgbG9zdFBvaW50ZXJDYXB0dXJlIG1vdXNlRG93biBtb3VzZU1vdmUgbW91c2VPdXQgbW91c2VPdmVyIG1vdXNlVXAgcGFzdGUgcGF1c2UgcGxheSBwbGF5aW5nIHBvaW50ZXJDYW5jZWwgcG9pbnRlckRvd24gcG9pbnRlck1vdmUgcG9pbnRlck91dCBwb2ludGVyT3ZlciBwb2ludGVyVXAgcHJvZ3Jlc3MgcmF0ZUNoYW5nZSByZXNldCByZXNpemUgc2Vla2VkIHNlZWtpbmcgc3RhbGxlZCBzdWJtaXQgc3VzcGVuZCB0aW1lVXBkYXRlIHRvdWNoQ2FuY2VsIHRvdWNoRW5kIHRvdWNoU3RhcnQgdm9sdW1lQ2hhbmdlIHNjcm9sbCB0b2dnbGUgdG91Y2hNb3ZlIHdhaXRpbmcgd2hlZWxcIi5zcGxpdChcIiBcIik7XG5mdW5jdGlvbiBmZihhLGIpe2RmLnNldChhLGIpO2ZhKGIsW2FdKX1mb3IodmFyIGdmPTA7Z2Y8ZWYubGVuZ3RoO2dmKyspe3ZhciBoZj1lZltnZl0samY9aGYudG9Mb3dlckNhc2UoKSxrZj1oZlswXS50b1VwcGVyQ2FzZSgpK2hmLnNsaWNlKDEpO2ZmKGpmLFwib25cIitrZil9ZmYoJGUsXCJvbkFuaW1hdGlvbkVuZFwiKTtmZihhZixcIm9uQW5pbWF0aW9uSXRlcmF0aW9uXCIpO2ZmKGJmLFwib25BbmltYXRpb25TdGFydFwiKTtmZihcImRibGNsaWNrXCIsXCJvbkRvdWJsZUNsaWNrXCIpO2ZmKFwiZm9jdXNpblwiLFwib25Gb2N1c1wiKTtmZihcImZvY3Vzb3V0XCIsXCJvbkJsdXJcIik7ZmYoY2YsXCJvblRyYW5zaXRpb25FbmRcIik7aGEoXCJvbk1vdXNlRW50ZXJcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtoYShcIm9uTW91c2VMZWF2ZVwiLFtcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl0pO2hhKFwib25Qb2ludGVyRW50ZXJcIixbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXSk7XG5oYShcIm9uUG9pbnRlckxlYXZlXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO2ZhKFwib25DaGFuZ2VcIixcImNoYW5nZSBjbGljayBmb2N1c2luIGZvY3Vzb3V0IGlucHV0IGtleWRvd24ga2V5dXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtmYShcIm9uU2VsZWN0XCIsXCJmb2N1c291dCBjb250ZXh0bWVudSBkcmFnZW5kIGZvY3VzaW4ga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2ZhKFwib25CZWZvcmVJbnB1dFwiLFtcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXSk7ZmEoXCJvbkNvbXBvc2l0aW9uRW5kXCIsXCJjb21wb3NpdGlvbmVuZCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7ZmEoXCJvbkNvbXBvc2l0aW9uU3RhcnRcIixcImNvbXBvc2l0aW9uc3RhcnQgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO1xuZmEoXCJvbkNvbXBvc2l0aW9uVXBkYXRlXCIsXCJjb21wb3NpdGlvbnVwZGF0ZSBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7dmFyIGxmPVwiYWJvcnQgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSByZXNpemUgc2Vla2VkIHNlZWtpbmcgc3RhbGxlZCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmdcIi5zcGxpdChcIiBcIiksbWY9bmV3IFNldChcImNhbmNlbCBjbG9zZSBpbnZhbGlkIGxvYWQgc2Nyb2xsIHRvZ2dsZVwiLnNwbGl0KFwiIFwiKS5jb25jYXQobGYpKTtcbmZ1bmN0aW9uIG5mKGEsYixjKXt2YXIgZD1hLnR5cGV8fFwidW5rbm93bi1ldmVudFwiO2EuY3VycmVudFRhcmdldD1jO1ViKGQsYix2b2lkIDAsYSk7YS5jdXJyZW50VGFyZ2V0PW51bGx9XG5mdW5jdGlvbiBzZShhLGIpe2I9MCE9PShiJjQpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLGU9ZC5ldmVudDtkPWQubGlzdGVuZXJzO2E6e3ZhciBmPXZvaWQgMDtpZihiKWZvcih2YXIgZz1kLmxlbmd0aC0xOzA8PWc7Zy0tKXt2YXIgaD1kW2ddLGs9aC5pbnN0YW5jZSxsPWguY3VycmVudFRhcmdldDtoPWgubGlzdGVuZXI7aWYoayE9PWYmJmUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlicmVhayBhO25mKGUsaCxsKTtmPWt9ZWxzZSBmb3IoZz0wO2c8ZC5sZW5ndGg7ZysrKXtoPWRbZ107az1oLmluc3RhbmNlO2w9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7bmYoZSxoLGwpO2Y9a319fWlmKFFiKXRocm93IGE9UmIsUWI9ITEsUmI9bnVsbCxhO31cbmZ1bmN0aW9uIEQoYSxiKXt2YXIgYz1iW29mXTt2b2lkIDA9PT1jJiYoYz1iW29mXT1uZXcgU2V0KTt2YXIgZD1hK1wiX19idWJibGVcIjtjLmhhcyhkKXx8KHBmKGIsYSwyLCExKSxjLmFkZChkKSl9ZnVuY3Rpb24gcWYoYSxiLGMpe3ZhciBkPTA7YiYmKGR8PTQpO3BmKGMsYSxkLGIpfXZhciByZj1cIl9yZWFjdExpc3RlbmluZ1wiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO2Z1bmN0aW9uIHNmKGEpe2lmKCFhW3JmXSl7YVtyZl09ITA7ZGEuZm9yRWFjaChmdW5jdGlvbihiKXtcInNlbGVjdGlvbmNoYW5nZVwiIT09YiYmKG1mLmhhcyhiKXx8cWYoYiwhMSxhKSxxZihiLCEwLGEpKX0pO3ZhciBiPTk9PT1hLm5vZGVUeXBlP2E6YS5vd25lckRvY3VtZW50O251bGw9PT1ifHxiW3JmXXx8KGJbcmZdPSEwLHFmKFwic2VsZWN0aW9uY2hhbmdlXCIsITEsYikpfX1cbmZ1bmN0aW9uIHBmKGEsYixjLGQpe3N3aXRjaChqZChiKSl7Y2FzZSAxOnZhciBlPWVkO2JyZWFrO2Nhc2UgNDplPWdkO2JyZWFrO2RlZmF1bHQ6ZT1mZH1jPWUuYmluZChudWxsLGIsYyxhKTtlPXZvaWQgMDshTGJ8fFwidG91Y2hzdGFydFwiIT09YiYmXCJ0b3VjaG1vdmVcIiE9PWImJlwid2hlZWxcIiE9PWJ8fChlPSEwKTtkP3ZvaWQgMCE9PWU/YS5hZGRFdmVudExpc3RlbmVyKGIsYyx7Y2FwdHVyZTohMCxwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCEwKTp2b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse3Bhc3NpdmU6ZX0pOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfVxuZnVuY3Rpb24gaGQoYSxiLGMsZCxlKXt2YXIgZj1kO2lmKDA9PT0oYiYxKSYmMD09PShiJjIpJiZudWxsIT09ZClhOmZvcig7Oyl7aWYobnVsbD09PWQpcmV0dXJuO3ZhciBnPWQudGFnO2lmKDM9PT1nfHw0PT09Zyl7dmFyIGg9ZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztpZihoPT09ZXx8OD09PWgubm9kZVR5cGUmJmgucGFyZW50Tm9kZT09PWUpYnJlYWs7aWYoND09PWcpZm9yKGc9ZC5yZXR1cm47bnVsbCE9PWc7KXt2YXIgaz1nLnRhZztpZigzPT09a3x8ND09PWspaWYoaz1nLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLGs9PT1lfHw4PT09ay5ub2RlVHlwZSYmay5wYXJlbnROb2RlPT09ZSlyZXR1cm47Zz1nLnJldHVybn1mb3IoO251bGwhPT1oOyl7Zz1XYyhoKTtpZihudWxsPT09ZylyZXR1cm47az1nLnRhZztpZig1PT09a3x8Nj09PWspe2Q9Zj1nO2NvbnRpbnVlIGF9aD1oLnBhcmVudE5vZGV9fWQ9ZC5yZXR1cm59SmIoZnVuY3Rpb24oKXt2YXIgZD1mLGU9eGIoYyksZz1bXTtcbmE6e3ZhciBoPWRmLmdldChhKTtpZih2b2lkIDAhPT1oKXt2YXIgaz10ZCxuPWE7c3dpdGNoKGEpe2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDA9PT1vZChjKSlicmVhayBhO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6az1SZDticmVhaztjYXNlIFwiZm9jdXNpblwiOm49XCJmb2N1c1wiO2s9RmQ7YnJlYWs7Y2FzZSBcImZvY3Vzb3V0XCI6bj1cImJsdXJcIjtrPUZkO2JyZWFrO2Nhc2UgXCJiZWZvcmVibHVyXCI6Y2FzZSBcImFmdGVyYmx1clwiOms9RmQ7YnJlYWs7Y2FzZSBcImNsaWNrXCI6aWYoMj09PWMuYnV0dG9uKWJyZWFrIGE7Y2FzZSBcImF1eGNsaWNrXCI6Y2FzZSBcImRibGNsaWNrXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZW1vdmVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJtb3VzZW91dFwiOmNhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwiY29udGV4dG1lbnVcIjprPUJkO2JyZWFrO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbmRcIjpjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdleGl0XCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmNhc2UgXCJkcmFnb3ZlclwiOmNhc2UgXCJkcmFnc3RhcnRcIjpjYXNlIFwiZHJvcFwiOms9XG5EZDticmVhaztjYXNlIFwidG91Y2hjYW5jZWxcIjpjYXNlIFwidG91Y2hlbmRcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcInRvdWNoc3RhcnRcIjprPVZkO2JyZWFrO2Nhc2UgJGU6Y2FzZSBhZjpjYXNlIGJmOms9SGQ7YnJlYWs7Y2FzZSBjZjprPVhkO2JyZWFrO2Nhc2UgXCJzY3JvbGxcIjprPXZkO2JyZWFrO2Nhc2UgXCJ3aGVlbFwiOms9WmQ7YnJlYWs7Y2FzZSBcImNvcHlcIjpjYXNlIFwiY3V0XCI6Y2FzZSBcInBhc3RlXCI6az1KZDticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcInBvaW50ZXJjYW5jZWxcIjpjYXNlIFwicG9pbnRlcmRvd25cIjpjYXNlIFwicG9pbnRlcm1vdmVcIjpjYXNlIFwicG9pbnRlcm91dFwiOmNhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVydXBcIjprPVRkfXZhciB0PTAhPT0oYiY0KSxKPSF0JiZcInNjcm9sbFwiPT09YSx4PXQ/bnVsbCE9PWg/aCtcIkNhcHR1cmVcIjpudWxsOmg7dD1bXTtmb3IodmFyIHc9ZCx1O251bGwhPT1cbnc7KXt1PXc7dmFyIEY9dS5zdGF0ZU5vZGU7NT09PXUudGFnJiZudWxsIT09RiYmKHU9RixudWxsIT09eCYmKEY9S2Iodyx4KSxudWxsIT1GJiZ0LnB1c2godGYodyxGLHUpKSkpO2lmKEopYnJlYWs7dz13LnJldHVybn0wPHQubGVuZ3RoJiYoaD1uZXcgayhoLG4sbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6aCxsaXN0ZW5lcnM6dH0pKX19aWYoMD09PShiJjcpKXthOntoPVwibW91c2VvdmVyXCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hO2s9XCJtb3VzZW91dFwiPT09YXx8XCJwb2ludGVyb3V0XCI9PT1hO2lmKGgmJmMhPT13YiYmKG49Yy5yZWxhdGVkVGFyZ2V0fHxjLmZyb21FbGVtZW50KSYmKFdjKG4pfHxuW3VmXSkpYnJlYWsgYTtpZihrfHxoKXtoPWUud2luZG93PT09ZT9lOihoPWUub3duZXJEb2N1bWVudCk/aC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3c6d2luZG93O2lmKGspe2lmKG49Yy5yZWxhdGVkVGFyZ2V0fHxjLnRvRWxlbWVudCxrPWQsbj1uP1djKG4pOm51bGwsbnVsbCE9PVxubiYmKEo9VmIobiksbiE9PUp8fDUhPT1uLnRhZyYmNiE9PW4udGFnKSluPW51bGx9ZWxzZSBrPW51bGwsbj1kO2lmKGshPT1uKXt0PUJkO0Y9XCJvbk1vdXNlTGVhdmVcIjt4PVwib25Nb3VzZUVudGVyXCI7dz1cIm1vdXNlXCI7aWYoXCJwb2ludGVyb3V0XCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hKXQ9VGQsRj1cIm9uUG9pbnRlckxlYXZlXCIseD1cIm9uUG9pbnRlckVudGVyXCIsdz1cInBvaW50ZXJcIjtKPW51bGw9PWs/aDp1ZShrKTt1PW51bGw9PW4/aDp1ZShuKTtoPW5ldyB0KEYsdytcImxlYXZlXCIsayxjLGUpO2gudGFyZ2V0PUo7aC5yZWxhdGVkVGFyZ2V0PXU7Rj1udWxsO1djKGUpPT09ZCYmKHQ9bmV3IHQoeCx3K1wiZW50ZXJcIixuLGMsZSksdC50YXJnZXQ9dSx0LnJlbGF0ZWRUYXJnZXQ9SixGPXQpO0o9RjtpZihrJiZuKWI6e3Q9azt4PW47dz0wO2Zvcih1PXQ7dTt1PXZmKHUpKXcrKzt1PTA7Zm9yKEY9eDtGO0Y9dmYoRikpdSsrO2Zvcig7MDx3LXU7KXQ9dmYodCksdy0tO2Zvcig7MDx1LXc7KXg9XG52Zih4KSx1LS07Zm9yKDt3LS07KXtpZih0PT09eHx8bnVsbCE9PXgmJnQ9PT14LmFsdGVybmF0ZSlicmVhayBiO3Q9dmYodCk7eD12Zih4KX10PW51bGx9ZWxzZSB0PW51bGw7bnVsbCE9PWsmJndmKGcsaCxrLHQsITEpO251bGwhPT1uJiZudWxsIT09SiYmd2YoZyxKLG4sdCwhMCl9fX1hOntoPWQ/dWUoZCk6d2luZG93O2s9aC5ub2RlTmFtZSYmaC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKFwic2VsZWN0XCI9PT1rfHxcImlucHV0XCI9PT1rJiZcImZpbGVcIj09PWgudHlwZSl2YXIgbmE9dmU7ZWxzZSBpZihtZShoKSlpZih3ZSluYT1GZTtlbHNle25hPURlO3ZhciB4YT1DZX1lbHNlKGs9aC5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWsudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWgudHlwZXx8XCJyYWRpb1wiPT09aC50eXBlKSYmKG5hPUVlKTtpZihuYSYmKG5hPW5hKGEsZCkpKXtuZShnLG5hLGMsZSk7YnJlYWsgYX14YSYmeGEoYSxoLGQpO1wiZm9jdXNvdXRcIj09PWEmJih4YT1oLl93cmFwcGVyU3RhdGUpJiZcbnhhLmNvbnRyb2xsZWQmJlwibnVtYmVyXCI9PT1oLnR5cGUmJmNiKGgsXCJudW1iZXJcIixoLnZhbHVlKX14YT1kP3VlKGQpOndpbmRvdztzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjppZihtZSh4YSl8fFwidHJ1ZVwiPT09eGEuY29udGVudEVkaXRhYmxlKVFlPXhhLFJlPWQsU2U9bnVsbDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjpTZT1SZT1RZT1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZWRvd25cIjpUZT0hMDticmVhaztjYXNlIFwiY29udGV4dG1lbnVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJkcmFnZW5kXCI6VGU9ITE7VWUoZyxjLGUpO2JyZWFrO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihQZSlicmVhaztjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOlVlKGcsYyxlKX12YXIgJGE7aWYoYWUpYjp7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbnN0YXJ0XCI6dmFyIGJhPVwib25Db21wb3NpdGlvblN0YXJ0XCI7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpiYT1cIm9uQ29tcG9zaXRpb25FbmRcIjtcbmJyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6YmE9XCJvbkNvbXBvc2l0aW9uVXBkYXRlXCI7YnJlYWsgYn1iYT12b2lkIDB9ZWxzZSBpZT9nZShhLGMpJiYoYmE9XCJvbkNvbXBvc2l0aW9uRW5kXCIpOlwia2V5ZG93blwiPT09YSYmMjI5PT09Yy5rZXlDb2RlJiYoYmE9XCJvbkNvbXBvc2l0aW9uU3RhcnRcIik7YmEmJihkZSYmXCJrb1wiIT09Yy5sb2NhbGUmJihpZXx8XCJvbkNvbXBvc2l0aW9uU3RhcnRcIiE9PWJhP1wib25Db21wb3NpdGlvbkVuZFwiPT09YmEmJmllJiYoJGE9bmQoKSk6KGtkPWUsbGQ9XCJ2YWx1ZVwiaW4ga2Q/a2QudmFsdWU6a2QudGV4dENvbnRlbnQsaWU9ITApKSx4YT1vZShkLGJhKSwwPHhhLmxlbmd0aCYmKGJhPW5ldyBMZChiYSxhLG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmJhLGxpc3RlbmVyczp4YX0pLCRhP2JhLmRhdGE9JGE6KCRhPWhlKGMpLG51bGwhPT0kYSYmKGJhLmRhdGE9JGEpKSkpO2lmKCRhPWNlP2plKGEsYyk6a2UoYSxjKSlkPW9lKGQsXCJvbkJlZm9yZUlucHV0XCIpLFxuMDxkLmxlbmd0aCYmKGU9bmV3IExkKFwib25CZWZvcmVJbnB1dFwiLFwiYmVmb3JlaW5wdXRcIixudWxsLGMsZSksZy5wdXNoKHtldmVudDplLGxpc3RlbmVyczpkfSksZS5kYXRhPSRhKX1zZShnLGIpfSl9ZnVuY3Rpb24gdGYoYSxiLGMpe3JldHVybntpbnN0YW5jZTphLGxpc3RlbmVyOmIsY3VycmVudFRhcmdldDpjfX1mdW5jdGlvbiBvZShhLGIpe2Zvcih2YXIgYz1iK1wiQ2FwdHVyZVwiLGQ9W107bnVsbCE9PWE7KXt2YXIgZT1hLGY9ZS5zdGF0ZU5vZGU7NT09PWUudGFnJiZudWxsIT09ZiYmKGU9ZixmPUtiKGEsYyksbnVsbCE9ZiYmZC51bnNoaWZ0KHRmKGEsZixlKSksZj1LYihhLGIpLG51bGwhPWYmJmQucHVzaCh0ZihhLGYsZSkpKTthPWEucmV0dXJufXJldHVybiBkfWZ1bmN0aW9uIHZmKGEpe2lmKG51bGw9PT1hKXJldHVybiBudWxsO2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNSE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9XG5mdW5jdGlvbiB3ZihhLGIsYyxkLGUpe2Zvcih2YXIgZj1iLl9yZWFjdE5hbWUsZz1bXTtudWxsIT09YyYmYyE9PWQ7KXt2YXIgaD1jLGs9aC5hbHRlcm5hdGUsbD1oLnN0YXRlTm9kZTtpZihudWxsIT09ayYmaz09PWQpYnJlYWs7NT09PWgudGFnJiZudWxsIT09bCYmKGg9bCxlPyhrPUtiKGMsZiksbnVsbCE9ayYmZy51bnNoaWZ0KHRmKGMsayxoKSkpOmV8fChrPUtiKGMsZiksbnVsbCE9ayYmZy5wdXNoKHRmKGMsayxoKSkpKTtjPWMucmV0dXJufTAhPT1nLmxlbmd0aCYmYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpnfSl9dmFyIHhmPS9cXHJcXG4/L2cseWY9L1xcdTAwMDB8XFx1RkZGRC9nO2Z1bmN0aW9uIHpmKGEpe3JldHVybihcInN0cmluZ1wiPT09dHlwZW9mIGE/YTpcIlwiK2EpLnJlcGxhY2UoeGYsXCJcXG5cIikucmVwbGFjZSh5ZixcIlwiKX1mdW5jdGlvbiBBZihhLGIsYyl7Yj16ZihiKTtpZih6ZihhKSE9PWImJmMpdGhyb3cgRXJyb3IocCg0MjUpKTt9ZnVuY3Rpb24gQmYoKXt9XG52YXIgQ2Y9bnVsbCxEZj1udWxsO2Z1bmN0aW9uIEVmKGEsYil7cmV0dXJuXCJ0ZXh0YXJlYVwiPT09YXx8XCJub3NjcmlwdFwiPT09YXx8XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm51bWJlclwiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9PWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfVxudmFyIEZmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dm9pZCAwLEdmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMCxIZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlOnZvaWQgMCxKZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgcXVldWVNaWNyb3Rhc2s/cXVldWVNaWNyb3Rhc2s6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBIZj9mdW5jdGlvbihhKXtyZXR1cm4gSGYucmVzb2x2ZShudWxsKS50aGVuKGEpLmNhdGNoKElmKX06RmY7ZnVuY3Rpb24gSWYoYSl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGE7fSl9XG5mdW5jdGlvbiBLZihhLGIpe3ZhciBjPWIsZD0wO2Rve3ZhciBlPWMubmV4dFNpYmxpbmc7YS5yZW1vdmVDaGlsZChjKTtpZihlJiY4PT09ZS5ub2RlVHlwZSlpZihjPWUuZGF0YSxcIi8kXCI9PT1jKXtpZigwPT09ZCl7YS5yZW1vdmVDaGlsZChlKTtiZChiKTtyZXR1cm59ZC0tfWVsc2VcIiRcIiE9PWMmJlwiJD9cIiE9PWMmJlwiJCFcIiE9PWN8fGQrKztjPWV9d2hpbGUoYyk7YmQoYil9ZnVuY3Rpb24gTGYoYSl7Zm9yKDtudWxsIT1hO2E9YS5uZXh0U2libGluZyl7dmFyIGI9YS5ub2RlVHlwZTtpZigxPT09Ynx8Mz09PWIpYnJlYWs7aWYoOD09PWIpe2I9YS5kYXRhO2lmKFwiJFwiPT09Ynx8XCIkIVwiPT09Ynx8XCIkP1wiPT09YilicmVhaztpZihcIi8kXCI9PT1iKXJldHVybiBudWxsfX1yZXR1cm4gYX1cbmZ1bmN0aW9uIE1mKGEpe2E9YS5wcmV2aW91c1NpYmxpbmc7Zm9yKHZhciBiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIkXCI9PT1jfHxcIiQhXCI9PT1jfHxcIiQ/XCI9PT1jKXtpZigwPT09YilyZXR1cm4gYTtiLS19ZWxzZVwiLyRcIj09PWMmJmIrK31hPWEucHJldmlvdXNTaWJsaW5nfXJldHVybiBudWxsfXZhciBOZj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSxPZj1cIl9fcmVhY3RGaWJlciRcIitOZixQZj1cIl9fcmVhY3RQcm9wcyRcIitOZix1Zj1cIl9fcmVhY3RDb250YWluZXIkXCIrTmYsb2Y9XCJfX3JlYWN0RXZlbnRzJFwiK05mLFFmPVwiX19yZWFjdExpc3RlbmVycyRcIitOZixSZj1cIl9fcmVhY3RIYW5kbGVzJFwiK05mO1xuZnVuY3Rpb24gV2MoYSl7dmFyIGI9YVtPZl07aWYoYilyZXR1cm4gYjtmb3IodmFyIGM9YS5wYXJlbnROb2RlO2M7KXtpZihiPWNbdWZdfHxjW09mXSl7Yz1iLmFsdGVybmF0ZTtpZihudWxsIT09Yi5jaGlsZHx8bnVsbCE9PWMmJm51bGwhPT1jLmNoaWxkKWZvcihhPU1mKGEpO251bGwhPT1hOyl7aWYoYz1hW09mXSlyZXR1cm4gYzthPU1mKGEpfXJldHVybiBifWE9YztjPWEucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDYihhKXthPWFbT2ZdfHxhW3VmXTtyZXR1cm4hYXx8NSE9PWEudGFnJiY2IT09YS50YWcmJjEzIT09YS50YWcmJjMhPT1hLnRhZz9udWxsOmF9ZnVuY3Rpb24gdWUoYSl7aWYoNT09PWEudGFnfHw2PT09YS50YWcpcmV0dXJuIGEuc3RhdGVOb2RlO3Rocm93IEVycm9yKHAoMzMpKTt9ZnVuY3Rpb24gRGIoYSl7cmV0dXJuIGFbUGZdfHxudWxsfXZhciBTZj1bXSxUZj0tMTtmdW5jdGlvbiBVZihhKXtyZXR1cm57Y3VycmVudDphfX1cbmZ1bmN0aW9uIEUoYSl7MD5UZnx8KGEuY3VycmVudD1TZltUZl0sU2ZbVGZdPW51bGwsVGYtLSl9ZnVuY3Rpb24gRyhhLGIpe1RmKys7U2ZbVGZdPWEuY3VycmVudDthLmN1cnJlbnQ9Yn12YXIgVmY9e30sSD1VZihWZiksV2Y9VWYoITEpLFhmPVZmO2Z1bmN0aW9uIFlmKGEsYil7dmFyIGM9YS50eXBlLmNvbnRleHRUeXBlcztpZighYylyZXR1cm4gVmY7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoZCYmZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PT09YilyZXR1cm4gZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dDt2YXIgZT17fSxmO2ZvcihmIGluIGMpZVtmXT1iW2ZdO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1iLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9ZSk7cmV0dXJuIGV9XG5mdW5jdGlvbiBaZihhKXthPWEuY2hpbGRDb250ZXh0VHlwZXM7cmV0dXJuIG51bGwhPT1hJiZ2b2lkIDAhPT1hfWZ1bmN0aW9uICRmKCl7RShXZik7RShIKX1mdW5jdGlvbiBhZyhhLGIsYyl7aWYoSC5jdXJyZW50IT09VmYpdGhyb3cgRXJyb3IocCgxNjgpKTtHKEgsYik7RyhXZixjKX1mdW5jdGlvbiBiZyhhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7Yj1iLmNoaWxkQ29udGV4dFR5cGVzO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBkLmdldENoaWxkQ29udGV4dClyZXR1cm4gYztkPWQuZ2V0Q2hpbGRDb250ZXh0KCk7Zm9yKHZhciBlIGluIGQpaWYoIShlIGluIGIpKXRocm93IEVycm9yKHAoMTA4LFJhKGEpfHxcIlVua25vd25cIixlKSk7cmV0dXJuIEEoe30sYyxkKX1cbmZ1bmN0aW9uIGNnKGEpe2E9KGE9YS5zdGF0ZU5vZGUpJiZhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0fHxWZjtYZj1ILmN1cnJlbnQ7RyhILGEpO0coV2YsV2YuY3VycmVudCk7cmV0dXJuITB9ZnVuY3Rpb24gZGcoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2lmKCFkKXRocm93IEVycm9yKHAoMTY5KSk7Yz8oYT1iZyhhLGIsWGYpLGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ9YSxFKFdmKSxFKEgpLEcoSCxhKSk6RShXZik7RyhXZixjKX12YXIgZWc9bnVsbCxmZz0hMSxnZz0hMTtmdW5jdGlvbiBoZyhhKXtudWxsPT09ZWc/ZWc9W2FdOmVnLnB1c2goYSl9ZnVuY3Rpb24gaWcoYSl7Zmc9ITA7aGcoYSl9XG5mdW5jdGlvbiBqZygpe2lmKCFnZyYmbnVsbCE9PWVnKXtnZz0hMDt2YXIgYT0wLGI9Qzt0cnl7dmFyIGM9ZWc7Zm9yKEM9MTthPGMubGVuZ3RoO2ErKyl7dmFyIGQ9Y1thXTtkbyBkPWQoITApO3doaWxlKG51bGwhPT1kKX1lZz1udWxsO2ZnPSExfWNhdGNoKGUpe3Rocm93IG51bGwhPT1lZyYmKGVnPWVnLnNsaWNlKGErMSkpLGFjKGZjLGpnKSxlO31maW5hbGx5e0M9YixnZz0hMX19cmV0dXJuIG51bGx9dmFyIGtnPVtdLGxnPTAsbWc9bnVsbCxuZz0wLG9nPVtdLHBnPTAscWc9bnVsbCxyZz0xLHNnPVwiXCI7ZnVuY3Rpb24gdGcoYSxiKXtrZ1tsZysrXT1uZztrZ1tsZysrXT1tZzttZz1hO25nPWJ9XG5mdW5jdGlvbiB1ZyhhLGIsYyl7b2dbcGcrK109cmc7b2dbcGcrK109c2c7b2dbcGcrK109cWc7cWc9YTt2YXIgZD1yZzthPXNnO3ZhciBlPTMyLW9jKGQpLTE7ZCY9figxPDxlKTtjKz0xO3ZhciBmPTMyLW9jKGIpK2U7aWYoMzA8Zil7dmFyIGc9ZS1lJTU7Zj0oZCYoMTw8ZyktMSkudG9TdHJpbmcoMzIpO2Q+Pj1nO2UtPWc7cmc9MTw8MzItb2MoYikrZXxjPDxlfGQ7c2c9ZithfWVsc2Ugcmc9MTw8ZnxjPDxlfGQsc2c9YX1mdW5jdGlvbiB2ZyhhKXtudWxsIT09YS5yZXR1cm4mJih0ZyhhLDEpLHVnKGEsMSwwKSl9ZnVuY3Rpb24gd2coYSl7Zm9yKDthPT09bWc7KW1nPWtnWy0tbGddLGtnW2xnXT1udWxsLG5nPWtnWy0tbGddLGtnW2xnXT1udWxsO2Zvcig7YT09PXFnOylxZz1vZ1stLXBnXSxvZ1twZ109bnVsbCxzZz1vZ1stLXBnXSxvZ1twZ109bnVsbCxyZz1vZ1stLXBnXSxvZ1twZ109bnVsbH12YXIgeGc9bnVsbCx5Zz1udWxsLEk9ITEsemc9bnVsbDtcbmZ1bmN0aW9uIEFnKGEsYil7dmFyIGM9QmcoNSxudWxsLG51bGwsMCk7Yy5lbGVtZW50VHlwZT1cIkRFTEVURURcIjtjLnN0YXRlTm9kZT1iO2MucmV0dXJuPWE7Yj1hLmRlbGV0aW9ucztudWxsPT09Yj8oYS5kZWxldGlvbnM9W2NdLGEuZmxhZ3N8PTE2KTpiLnB1c2goYyl9XG5mdW5jdGlvbiBDZyhhLGIpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnZhciBjPWEudHlwZTtiPTEhPT1iLm5vZGVUeXBlfHxjLnRvTG93ZXJDYXNlKCkhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/bnVsbDpiO3JldHVybiBudWxsIT09Yj8oYS5zdGF0ZU5vZGU9Yix4Zz1hLHlnPUxmKGIuZmlyc3RDaGlsZCksITApOiExO2Nhc2UgNjpyZXR1cm4gYj1cIlwiPT09YS5wZW5kaW5nUHJvcHN8fDMhPT1iLm5vZGVUeXBlP251bGw6YixudWxsIT09Yj8oYS5zdGF0ZU5vZGU9Yix4Zz1hLHlnPW51bGwsITApOiExO2Nhc2UgMTM6cmV0dXJuIGI9OCE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhjPW51bGwhPT1xZz97aWQ6cmcsb3ZlcmZsb3c6c2d9Om51bGwsYS5tZW1vaXplZFN0YXRlPXtkZWh5ZHJhdGVkOmIsdHJlZUNvbnRleHQ6YyxyZXRyeUxhbmU6MTA3Mzc0MTgyNH0sYz1CZygxOCxudWxsLG51bGwsMCksYy5zdGF0ZU5vZGU9YixjLnJldHVybj1hLGEuY2hpbGQ9Yyx4Zz1hLHlnPVxubnVsbCwhMCk6ITE7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gRGcoYSl7cmV0dXJuIDAhPT0oYS5tb2RlJjEpJiYwPT09KGEuZmxhZ3MmMTI4KX1mdW5jdGlvbiBFZyhhKXtpZihJKXt2YXIgYj15ZztpZihiKXt2YXIgYz1iO2lmKCFDZyhhLGIpKXtpZihEZyhhKSl0aHJvdyBFcnJvcihwKDQxOCkpO2I9TGYoYy5uZXh0U2libGluZyk7dmFyIGQ9eGc7YiYmQ2coYSxiKT9BZyhkLGMpOihhLmZsYWdzPWEuZmxhZ3MmLTQwOTd8MixJPSExLHhnPWEpfX1lbHNle2lmKERnKGEpKXRocm93IEVycm9yKHAoNDE4KSk7YS5mbGFncz1hLmZsYWdzJi00MDk3fDI7ST0hMTt4Zz1hfX19ZnVuY3Rpb24gRmcoYSl7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWEmJjUhPT1hLnRhZyYmMyE9PWEudGFnJiYxMyE9PWEudGFnOylhPWEucmV0dXJuO3hnPWF9XG5mdW5jdGlvbiBHZyhhKXtpZihhIT09eGcpcmV0dXJuITE7aWYoIUkpcmV0dXJuIEZnKGEpLEk9ITAsITE7dmFyIGI7KGI9MyE9PWEudGFnKSYmIShiPTUhPT1hLnRhZykmJihiPWEudHlwZSxiPVwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYhRWYoYS50eXBlLGEubWVtb2l6ZWRQcm9wcykpO2lmKGImJihiPXlnKSl7aWYoRGcoYSkpdGhyb3cgSGcoKSxFcnJvcihwKDQxOCkpO2Zvcig7YjspQWcoYSxiKSxiPUxmKGIubmV4dFNpYmxpbmcpfUZnKGEpO2lmKDEzPT09YS50YWcpe2E9YS5tZW1vaXplZFN0YXRlO2E9bnVsbCE9PWE/YS5kZWh5ZHJhdGVkOm51bGw7aWYoIWEpdGhyb3cgRXJyb3IocCgzMTcpKTthOnthPWEubmV4dFNpYmxpbmc7Zm9yKGI9MDthOyl7aWYoOD09PWEubm9kZVR5cGUpe3ZhciBjPWEuZGF0YTtpZihcIi8kXCI9PT1jKXtpZigwPT09Yil7eWc9TGYoYS5uZXh0U2libGluZyk7YnJlYWsgYX1iLS19ZWxzZVwiJFwiIT09YyYmXCIkIVwiIT09YyYmXCIkP1wiIT09Y3x8YisrfWE9YS5uZXh0U2libGluZ315Zz1cbm51bGx9fWVsc2UgeWc9eGc/TGYoYS5zdGF0ZU5vZGUubmV4dFNpYmxpbmcpOm51bGw7cmV0dXJuITB9ZnVuY3Rpb24gSGcoKXtmb3IodmFyIGE9eWc7YTspYT1MZihhLm5leHRTaWJsaW5nKX1mdW5jdGlvbiBJZygpe3lnPXhnPW51bGw7ST0hMX1mdW5jdGlvbiBKZyhhKXtudWxsPT09emc/emc9W2FdOnpnLnB1c2goYSl9dmFyIEtnPXVhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnO1xuZnVuY3Rpb24gTGcoYSxiLGMpe2E9Yy5yZWY7aWYobnVsbCE9PWEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZcIm9iamVjdFwiIT09dHlwZW9mIGEpe2lmKGMuX293bmVyKXtjPWMuX293bmVyO2lmKGMpe2lmKDEhPT1jLnRhZyl0aHJvdyBFcnJvcihwKDMwOSkpO3ZhciBkPWMuc3RhdGVOb2RlfWlmKCFkKXRocm93IEVycm9yKHAoMTQ3LGEpKTt2YXIgZT1kLGY9XCJcIithO2lmKG51bGwhPT1iJiZudWxsIT09Yi5yZWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlZiYmYi5yZWYuX3N0cmluZ1JlZj09PWYpcmV0dXJuIGIucmVmO2I9ZnVuY3Rpb24oYSl7dmFyIGI9ZS5yZWZzO251bGw9PT1hP2RlbGV0ZSBiW2ZdOmJbZl09YX07Yi5fc3RyaW5nUmVmPWY7cmV0dXJuIGJ9aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBhKXRocm93IEVycm9yKHAoMjg0KSk7aWYoIWMuX293bmVyKXRocm93IEVycm9yKHAoMjkwLGEpKTt9cmV0dXJuIGF9XG5mdW5jdGlvbiBNZyhhLGIpe2E9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGIpO3Rocm93IEVycm9yKHAoMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PWE/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhiKS5qb2luKFwiLCBcIikrXCJ9XCI6YSkpO31mdW5jdGlvbiBOZyhhKXt2YXIgYj1hLl9pbml0O3JldHVybiBiKGEuX3BheWxvYWQpfVxuZnVuY3Rpb24gT2coYSl7ZnVuY3Rpb24gYihiLGMpe2lmKGEpe3ZhciBkPWIuZGVsZXRpb25zO251bGw9PT1kPyhiLmRlbGV0aW9ucz1bY10sYi5mbGFnc3w9MTYpOmQucHVzaChjKX19ZnVuY3Rpb24gYyhjLGQpe2lmKCFhKXJldHVybiBudWxsO2Zvcig7bnVsbCE9PWQ7KWIoYyxkKSxkPWQuc2libGluZztyZXR1cm4gbnVsbH1mdW5jdGlvbiBkKGEsYil7Zm9yKGE9bmV3IE1hcDtudWxsIT09YjspbnVsbCE9PWIua2V5P2Euc2V0KGIua2V5LGIpOmEuc2V0KGIuaW5kZXgsYiksYj1iLnNpYmxpbmc7cmV0dXJuIGF9ZnVuY3Rpb24gZShhLGIpe2E9UGcoYSxiKTthLmluZGV4PTA7YS5zaWJsaW5nPW51bGw7cmV0dXJuIGF9ZnVuY3Rpb24gZihiLGMsZCl7Yi5pbmRleD1kO2lmKCFhKXJldHVybiBiLmZsYWdzfD0xMDQ4NTc2LGM7ZD1iLmFsdGVybmF0ZTtpZihudWxsIT09ZClyZXR1cm4gZD1kLmluZGV4LGQ8Yz8oYi5mbGFnc3w9MixjKTpkO2IuZmxhZ3N8PTI7cmV0dXJuIGN9ZnVuY3Rpb24gZyhiKXthJiZcbm51bGw9PT1iLmFsdGVybmF0ZSYmKGIuZmxhZ3N8PTIpO3JldHVybiBifWZ1bmN0aW9uIGgoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDYhPT1iLnRhZylyZXR1cm4gYj1RZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBrKGEsYixjLGQpe3ZhciBmPWMudHlwZTtpZihmPT09eWEpcmV0dXJuIG0oYSxiLGMucHJvcHMuY2hpbGRyZW4sZCxjLmtleSk7aWYobnVsbCE9PWImJihiLmVsZW1lbnRUeXBlPT09Znx8XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZiYmZi4kJHR5cGVvZj09PUhhJiZOZyhmKT09PWIudHlwZSkpcmV0dXJuIGQ9ZShiLGMucHJvcHMpLGQucmVmPUxnKGEsYixjKSxkLnJldHVybj1hLGQ7ZD1SZyhjLnR5cGUsYy5rZXksYy5wcm9wcyxudWxsLGEubW9kZSxkKTtkLnJlZj1MZyhhLGIsYyk7ZC5yZXR1cm49YTtyZXR1cm4gZH1mdW5jdGlvbiBsKGEsYixjLGQpe2lmKG51bGw9PT1ifHw0IT09Yi50YWd8fFxuYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyE9PWMuY29udGFpbmVySW5mb3x8Yi5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb24hPT1jLmltcGxlbWVudGF0aW9uKXJldHVybiBiPVNnKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjLmNoaWxkcmVufHxbXSk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBtKGEsYixjLGQsZil7aWYobnVsbD09PWJ8fDchPT1iLnRhZylyZXR1cm4gYj1UZyhjLGEubW9kZSxkLGYpLGIucmV0dXJuPWEsYjtiPWUoYixjKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIHEoYSxiLGMpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYiYmXCJcIiE9PWJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYilyZXR1cm4gYj1RZyhcIlwiK2IsYS5tb2RlLGMpLGIucmV0dXJuPWEsYjtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iKXtzd2l0Y2goYi4kJHR5cGVvZil7Y2FzZSB2YTpyZXR1cm4gYz1SZyhiLnR5cGUsYi5rZXksYi5wcm9wcyxudWxsLGEubW9kZSxjKSxcbmMucmVmPUxnKGEsbnVsbCxiKSxjLnJldHVybj1hLGM7Y2FzZSB3YTpyZXR1cm4gYj1TZyhiLGEubW9kZSxjKSxiLnJldHVybj1hLGI7Y2FzZSBIYTp2YXIgZD1iLl9pbml0O3JldHVybiBxKGEsZChiLl9wYXlsb2FkKSxjKX1pZihlYihiKXx8S2EoYikpcmV0dXJuIGI9VGcoYixhLm1vZGUsYyxudWxsKSxiLnJldHVybj1hLGI7TWcoYSxiKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiByKGEsYixjLGQpe3ZhciBlPW51bGwhPT1iP2Iua2V5Om51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBjJiZcIlwiIT09Y3x8XCJudW1iZXJcIj09PXR5cGVvZiBjKXJldHVybiBudWxsIT09ZT9udWxsOmgoYSxiLFwiXCIrYyxkKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jKXtzd2l0Y2goYy4kJHR5cGVvZil7Y2FzZSB2YTpyZXR1cm4gYy5rZXk9PT1lP2soYSxiLGMsZCk6bnVsbDtjYXNlIHdhOnJldHVybiBjLmtleT09PWU/bChhLGIsYyxkKTpudWxsO2Nhc2UgSGE6cmV0dXJuIGU9Yy5faW5pdCxyKGEsXG5iLGUoYy5fcGF5bG9hZCksZCl9aWYoZWIoYyl8fEthKGMpKXJldHVybiBudWxsIT09ZT9udWxsOm0oYSxiLGMsZCxudWxsKTtNZyhhLGMpfXJldHVybiBudWxsfWZ1bmN0aW9uIHkoYSxiLGMsZCxlKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGQmJlwiXCIhPT1kfHxcIm51bWJlclwiPT09dHlwZW9mIGQpcmV0dXJuIGE9YS5nZXQoYyl8fG51bGwsaChiLGEsXCJcIitkLGUpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQpe3N3aXRjaChkLiQkdHlwZW9mKXtjYXNlIHZhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxrKGIsYSxkLGUpO2Nhc2Ugd2E6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGwoYixhLGQsZSk7Y2FzZSBIYTp2YXIgZj1kLl9pbml0O3JldHVybiB5KGEsYixjLGYoZC5fcGF5bG9hZCksZSl9aWYoZWIoZCl8fEthKGQpKXJldHVybiBhPWEuZ2V0KGMpfHxudWxsLG0oYixhLGQsZSxudWxsKTtNZyhiLGQpfXJldHVybiBudWxsfVxuZnVuY3Rpb24gbihlLGcsaCxrKXtmb3IodmFyIGw9bnVsbCxtPW51bGwsdT1nLHc9Zz0wLHg9bnVsbDtudWxsIT09dSYmdzxoLmxlbmd0aDt3Kyspe3UuaW5kZXg+dz8oeD11LHU9bnVsbCk6eD11LnNpYmxpbmc7dmFyIG49cihlLHUsaFt3XSxrKTtpZihudWxsPT09bil7bnVsbD09PXUmJih1PXgpO2JyZWFrfWEmJnUmJm51bGw9PT1uLmFsdGVybmF0ZSYmYihlLHUpO2c9ZihuLGcsdyk7bnVsbD09PW0/bD1uOm0uc2libGluZz1uO209bjt1PXh9aWYodz09PWgubGVuZ3RoKXJldHVybiBjKGUsdSksSSYmdGcoZSx3KSxsO2lmKG51bGw9PT11KXtmb3IoO3c8aC5sZW5ndGg7dysrKXU9cShlLGhbd10sayksbnVsbCE9PXUmJihnPWYodSxnLHcpLG51bGw9PT1tP2w9dTptLnNpYmxpbmc9dSxtPXUpO0kmJnRnKGUsdyk7cmV0dXJuIGx9Zm9yKHU9ZChlLHUpO3c8aC5sZW5ndGg7dysrKXg9eSh1LGUsdyxoW3ddLGspLG51bGwhPT14JiYoYSYmbnVsbCE9PXguYWx0ZXJuYXRlJiZ1LmRlbGV0ZShudWxsPT09XG54LmtleT93Ongua2V5KSxnPWYoeCxnLHcpLG51bGw9PT1tP2w9eDptLnNpYmxpbmc9eCxtPXgpO2EmJnUuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7SSYmdGcoZSx3KTtyZXR1cm4gbH1mdW5jdGlvbiB0KGUsZyxoLGspe3ZhciBsPUthKGgpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBsKXRocm93IEVycm9yKHAoMTUwKSk7aD1sLmNhbGwoaCk7aWYobnVsbD09aCl0aHJvdyBFcnJvcihwKDE1MSkpO2Zvcih2YXIgdT1sPW51bGwsbT1nLHc9Zz0wLHg9bnVsbCxuPWgubmV4dCgpO251bGwhPT1tJiYhbi5kb25lO3crKyxuPWgubmV4dCgpKXttLmluZGV4Pnc/KHg9bSxtPW51bGwpOng9bS5zaWJsaW5nO3ZhciB0PXIoZSxtLG4udmFsdWUsayk7aWYobnVsbD09PXQpe251bGw9PT1tJiYobT14KTticmVha31hJiZtJiZudWxsPT09dC5hbHRlcm5hdGUmJmIoZSxtKTtnPWYodCxnLHcpO251bGw9PT11P2w9dDp1LnNpYmxpbmc9dDt1PXQ7bT14fWlmKG4uZG9uZSlyZXR1cm4gYyhlLFxubSksSSYmdGcoZSx3KSxsO2lmKG51bGw9PT1tKXtmb3IoOyFuLmRvbmU7dysrLG49aC5uZXh0KCkpbj1xKGUsbi52YWx1ZSxrKSxudWxsIT09biYmKGc9ZihuLGcsdyksbnVsbD09PXU/bD1uOnUuc2libGluZz1uLHU9bik7SSYmdGcoZSx3KTtyZXR1cm4gbH1mb3IobT1kKGUsbSk7IW4uZG9uZTt3Kyssbj1oLm5leHQoKSluPXkobSxlLHcsbi52YWx1ZSxrKSxudWxsIT09biYmKGEmJm51bGwhPT1uLmFsdGVybmF0ZSYmbS5kZWxldGUobnVsbD09PW4ua2V5P3c6bi5rZXkpLGc9ZihuLGcsdyksbnVsbD09PXU/bD1uOnUuc2libGluZz1uLHU9bik7YSYmbS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtJJiZ0ZyhlLHcpO3JldHVybiBsfWZ1bmN0aW9uIEooYSxkLGYsaCl7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZiYmZi50eXBlPT09eWEmJm51bGw9PT1mLmtleSYmKGY9Zi5wcm9wcy5jaGlsZHJlbik7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zil7c3dpdGNoKGYuJCR0eXBlb2Ype2Nhc2UgdmE6YTp7Zm9yKHZhciBrPVxuZi5rZXksbD1kO251bGwhPT1sOyl7aWYobC5rZXk9PT1rKXtrPWYudHlwZTtpZihrPT09eWEpe2lmKDc9PT1sLnRhZyl7YyhhLGwuc2libGluZyk7ZD1lKGwsZi5wcm9wcy5jaGlsZHJlbik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX19ZWxzZSBpZihsLmVsZW1lbnRUeXBlPT09a3x8XCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09ayYmay4kJHR5cGVvZj09PUhhJiZOZyhrKT09PWwudHlwZSl7YyhhLGwuc2libGluZyk7ZD1lKGwsZi5wcm9wcyk7ZC5yZWY9TGcoYSxsLGYpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9YyhhLGwpO2JyZWFrfWVsc2UgYihhLGwpO2w9bC5zaWJsaW5nfWYudHlwZT09PXlhPyhkPVRnKGYucHJvcHMuY2hpbGRyZW4sYS5tb2RlLGgsZi5rZXkpLGQucmV0dXJuPWEsYT1kKTooaD1SZyhmLnR5cGUsZi5rZXksZi5wcm9wcyxudWxsLGEubW9kZSxoKSxoLnJlZj1MZyhhLGQsZiksaC5yZXR1cm49YSxhPWgpfXJldHVybiBnKGEpO2Nhc2Ugd2E6YTp7Zm9yKGw9Zi5rZXk7bnVsbCE9PVxuZDspe2lmKGQua2V5PT09bClpZig0PT09ZC50YWcmJmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm89PT1mLmNvbnRhaW5lckluZm8mJmQuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uPT09Zi5pbXBsZW1lbnRhdGlvbil7YyhhLGQuc2libGluZyk7ZD1lKGQsZi5jaGlsZHJlbnx8W10pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsZCk7YnJlYWt9ZWxzZSBiKGEsZCk7ZD1kLnNpYmxpbmd9ZD1TZyhmLGEubW9kZSxoKTtkLnJldHVybj1hO2E9ZH1yZXR1cm4gZyhhKTtjYXNlIEhhOnJldHVybiBsPWYuX2luaXQsSihhLGQsbChmLl9wYXlsb2FkKSxoKX1pZihlYihmKSlyZXR1cm4gbihhLGQsZixoKTtpZihLYShmKSlyZXR1cm4gdChhLGQsZixoKTtNZyhhLGYpfXJldHVyblwic3RyaW5nXCI9PT10eXBlb2YgZiYmXCJcIiE9PWZ8fFwibnVtYmVyXCI9PT10eXBlb2YgZj8oZj1cIlwiK2YsbnVsbCE9PWQmJjY9PT1kLnRhZz8oYyhhLGQuc2libGluZyksZD1lKGQsZiksZC5yZXR1cm49YSxhPWQpOlxuKGMoYSxkKSxkPVFnKGYsYS5tb2RlLGgpLGQucmV0dXJuPWEsYT1kKSxnKGEpKTpjKGEsZCl9cmV0dXJuIEp9dmFyIFVnPU9nKCEwKSxWZz1PZyghMSksV2c9VWYobnVsbCksWGc9bnVsbCxZZz1udWxsLFpnPW51bGw7ZnVuY3Rpb24gJGcoKXtaZz1ZZz1YZz1udWxsfWZ1bmN0aW9uIGFoKGEpe3ZhciBiPVdnLmN1cnJlbnQ7RShXZyk7YS5fY3VycmVudFZhbHVlPWJ9ZnVuY3Rpb24gYmgoYSxiLGMpe2Zvcig7bnVsbCE9PWE7KXt2YXIgZD1hLmFsdGVybmF0ZTsoYS5jaGlsZExhbmVzJmIpIT09Yj8oYS5jaGlsZExhbmVzfD1iLG51bGwhPT1kJiYoZC5jaGlsZExhbmVzfD1iKSk6bnVsbCE9PWQmJihkLmNoaWxkTGFuZXMmYikhPT1iJiYoZC5jaGlsZExhbmVzfD1iKTtpZihhPT09YylicmVhazthPWEucmV0dXJufX1cbmZ1bmN0aW9uIGNoKGEsYil7WGc9YTtaZz1ZZz1udWxsO2E9YS5kZXBlbmRlbmNpZXM7bnVsbCE9PWEmJm51bGwhPT1hLmZpcnN0Q29udGV4dCYmKDAhPT0oYS5sYW5lcyZiKSYmKGRoPSEwKSxhLmZpcnN0Q29udGV4dD1udWxsKX1mdW5jdGlvbiBlaChhKXt2YXIgYj1hLl9jdXJyZW50VmFsdWU7aWYoWmchPT1hKWlmKGE9e2NvbnRleHQ6YSxtZW1vaXplZFZhbHVlOmIsbmV4dDpudWxsfSxudWxsPT09WWcpe2lmKG51bGw9PT1YZyl0aHJvdyBFcnJvcihwKDMwOCkpO1lnPWE7WGcuZGVwZW5kZW5jaWVzPXtsYW5lczowLGZpcnN0Q29udGV4dDphfX1lbHNlIFlnPVlnLm5leHQ9YTtyZXR1cm4gYn12YXIgZmg9bnVsbDtmdW5jdGlvbiBnaChhKXtudWxsPT09Zmg/Zmg9W2FdOmZoLnB1c2goYSl9XG5mdW5jdGlvbiBoaChhLGIsYyxkKXt2YXIgZT1iLmludGVybGVhdmVkO251bGw9PT1lPyhjLm5leHQ9YyxnaChiKSk6KGMubmV4dD1lLm5leHQsZS5uZXh0PWMpO2IuaW50ZXJsZWF2ZWQ9YztyZXR1cm4gaWgoYSxkKX1mdW5jdGlvbiBpaChhLGIpe2EubGFuZXN8PWI7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJihjLmxhbmVzfD1iKTtjPWE7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWE7KWEuY2hpbGRMYW5lc3w9YixjPWEuYWx0ZXJuYXRlLG51bGwhPT1jJiYoYy5jaGlsZExhbmVzfD1iKSxjPWEsYT1hLnJldHVybjtyZXR1cm4gMz09PWMudGFnP2Muc3RhdGVOb2RlOm51bGx9dmFyIGpoPSExO2Z1bmN0aW9uIGtoKGEpe2EudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLm1lbW9pemVkU3RhdGUsZmlyc3RCYXNlVXBkYXRlOm51bGwsbGFzdEJhc2VVcGRhdGU6bnVsbCxzaGFyZWQ6e3BlbmRpbmc6bnVsbCxpbnRlcmxlYXZlZDpudWxsLGxhbmVzOjB9LGVmZmVjdHM6bnVsbH19XG5mdW5jdGlvbiBsaChhLGIpe2E9YS51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPT09YSYmKGIudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLmJhc2VTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6YS5maXJzdEJhc2VVcGRhdGUsbGFzdEJhc2VVcGRhdGU6YS5sYXN0QmFzZVVwZGF0ZSxzaGFyZWQ6YS5zaGFyZWQsZWZmZWN0czphLmVmZmVjdHN9KX1mdW5jdGlvbiBtaChhLGIpe3JldHVybntldmVudFRpbWU6YSxsYW5lOmIsdGFnOjAscGF5bG9hZDpudWxsLGNhbGxiYWNrOm51bGwsbmV4dDpudWxsfX1cbmZ1bmN0aW9uIG5oKGEsYixjKXt2YXIgZD1hLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT1kKXJldHVybiBudWxsO2Q9ZC5zaGFyZWQ7aWYoMCE9PShLJjIpKXt2YXIgZT1kLnBlbmRpbmc7bnVsbD09PWU/Yi5uZXh0PWI6KGIubmV4dD1lLm5leHQsZS5uZXh0PWIpO2QucGVuZGluZz1iO3JldHVybiBpaChhLGMpfWU9ZC5pbnRlcmxlYXZlZDtudWxsPT09ZT8oYi5uZXh0PWIsZ2goZCkpOihiLm5leHQ9ZS5uZXh0LGUubmV4dD1iKTtkLmludGVybGVhdmVkPWI7cmV0dXJuIGloKGEsYyl9ZnVuY3Rpb24gb2goYSxiLGMpe2I9Yi51cGRhdGVRdWV1ZTtpZihudWxsIT09YiYmKGI9Yi5zaGFyZWQsMCE9PShjJjQxOTQyNDApKSl7dmFyIGQ9Yi5sYW5lcztkJj1hLnBlbmRpbmdMYW5lcztjfD1kO2IubGFuZXM9YztDYyhhLGMpfX1cbmZ1bmN0aW9uIHBoKGEsYil7dmFyIGM9YS51cGRhdGVRdWV1ZSxkPWEuYWx0ZXJuYXRlO2lmKG51bGwhPT1kJiYoZD1kLnVwZGF0ZVF1ZXVlLGM9PT1kKSl7dmFyIGU9bnVsbCxmPW51bGw7Yz1jLmZpcnN0QmFzZVVwZGF0ZTtpZihudWxsIT09Yyl7ZG97dmFyIGc9e2V2ZW50VGltZTpjLmV2ZW50VGltZSxsYW5lOmMubGFuZSx0YWc6Yy50YWcscGF5bG9hZDpjLnBheWxvYWQsY2FsbGJhY2s6Yy5jYWxsYmFjayxuZXh0Om51bGx9O251bGw9PT1mP2U9Zj1nOmY9Zi5uZXh0PWc7Yz1jLm5leHR9d2hpbGUobnVsbCE9PWMpO251bGw9PT1mP2U9Zj1iOmY9Zi5uZXh0PWJ9ZWxzZSBlPWY9YjtjPXtiYXNlU3RhdGU6ZC5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmUsbGFzdEJhc2VVcGRhdGU6ZixzaGFyZWQ6ZC5zaGFyZWQsZWZmZWN0czpkLmVmZmVjdHN9O2EudXBkYXRlUXVldWU9YztyZXR1cm59YT1jLmxhc3RCYXNlVXBkYXRlO251bGw9PT1hP2MuZmlyc3RCYXNlVXBkYXRlPWI6YS5uZXh0PVxuYjtjLmxhc3RCYXNlVXBkYXRlPWJ9XG5mdW5jdGlvbiBxaChhLGIsYyxkKXt2YXIgZT1hLnVwZGF0ZVF1ZXVlO2poPSExO3ZhciBmPWUuZmlyc3RCYXNlVXBkYXRlLGc9ZS5sYXN0QmFzZVVwZGF0ZSxoPWUuc2hhcmVkLnBlbmRpbmc7aWYobnVsbCE9PWgpe2Uuc2hhcmVkLnBlbmRpbmc9bnVsbDt2YXIgaz1oLGw9ay5uZXh0O2submV4dD1udWxsO251bGw9PT1nP2Y9bDpnLm5leHQ9bDtnPWs7dmFyIG09YS5hbHRlcm5hdGU7bnVsbCE9PW0mJihtPW0udXBkYXRlUXVldWUsaD1tLmxhc3RCYXNlVXBkYXRlLGghPT1nJiYobnVsbD09PWg/bS5maXJzdEJhc2VVcGRhdGU9bDpoLm5leHQ9bCxtLmxhc3RCYXNlVXBkYXRlPWspKX1pZihudWxsIT09Zil7dmFyIHE9ZS5iYXNlU3RhdGU7Zz0wO209bD1rPW51bGw7aD1mO2Rve3ZhciByPWgubGFuZSx5PWguZXZlbnRUaW1lO2lmKChkJnIpPT09cil7bnVsbCE9PW0mJihtPW0ubmV4dD17ZXZlbnRUaW1lOnksbGFuZTowLHRhZzpoLnRhZyxwYXlsb2FkOmgucGF5bG9hZCxjYWxsYmFjazpoLmNhbGxiYWNrLFxubmV4dDpudWxsfSk7YTp7dmFyIG49YSx0PWg7cj1iO3k9Yztzd2l0Y2godC50YWcpe2Nhc2UgMTpuPXQucGF5bG9hZDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2Ygbil7cT1uLmNhbGwoeSxxLHIpO2JyZWFrIGF9cT1uO2JyZWFrIGE7Y2FzZSAzOm4uZmxhZ3M9bi5mbGFncyYtNjU1Mzd8MTI4O2Nhc2UgMDpuPXQucGF5bG9hZDtyPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBuP24uY2FsbCh5LHEscik6bjtpZihudWxsPT09cnx8dm9pZCAwPT09cilicmVhayBhO3E9QSh7fSxxLHIpO2JyZWFrIGE7Y2FzZSAyOmpoPSEwfX1udWxsIT09aC5jYWxsYmFjayYmMCE9PWgubGFuZSYmKGEuZmxhZ3N8PTY0LHI9ZS5lZmZlY3RzLG51bGw9PT1yP2UuZWZmZWN0cz1baF06ci5wdXNoKGgpKX1lbHNlIHk9e2V2ZW50VGltZTp5LGxhbmU6cix0YWc6aC50YWcscGF5bG9hZDpoLnBheWxvYWQsY2FsbGJhY2s6aC5jYWxsYmFjayxuZXh0Om51bGx9LG51bGw9PT1tPyhsPW09eSxrPXEpOm09bS5uZXh0PXksZ3w9cjtcbmg9aC5uZXh0O2lmKG51bGw9PT1oKWlmKGg9ZS5zaGFyZWQucGVuZGluZyxudWxsPT09aClicmVhaztlbHNlIHI9aCxoPXIubmV4dCxyLm5leHQ9bnVsbCxlLmxhc3RCYXNlVXBkYXRlPXIsZS5zaGFyZWQucGVuZGluZz1udWxsfXdoaWxlKDEpO251bGw9PT1tJiYoaz1xKTtlLmJhc2VTdGF0ZT1rO2UuZmlyc3RCYXNlVXBkYXRlPWw7ZS5sYXN0QmFzZVVwZGF0ZT1tO2I9ZS5zaGFyZWQuaW50ZXJsZWF2ZWQ7aWYobnVsbCE9PWIpe2U9YjtkbyBnfD1lLmxhbmUsZT1lLm5leHQ7d2hpbGUoZSE9PWIpfWVsc2UgbnVsbD09PWYmJihlLnNoYXJlZC5sYW5lcz0wKTtyaHw9ZzthLmxhbmVzPWc7YS5tZW1vaXplZFN0YXRlPXF9fVxuZnVuY3Rpb24gc2goYSxiLGMpe2E9Yi5lZmZlY3RzO2IuZWZmZWN0cz1udWxsO2lmKG51bGwhPT1hKWZvcihiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBkPWFbYl0sZT1kLmNhbGxiYWNrO2lmKG51bGwhPT1lKXtkLmNhbGxiYWNrPW51bGw7ZD1jO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlKXRocm93IEVycm9yKHAoMTkxLGUpKTtlLmNhbGwoZCl9fX12YXIgdGg9e30sdWg9VWYodGgpLHZoPVVmKHRoKSx3aD1VZih0aCk7ZnVuY3Rpb24geGgoYSl7aWYoYT09PXRoKXRocm93IEVycm9yKHAoMTc0KSk7cmV0dXJuIGF9XG5mdW5jdGlvbiB5aChhLGIpe0cod2gsYik7Ryh2aCxhKTtHKHVoLHRoKTthPWIubm9kZVR5cGU7c3dpdGNoKGEpe2Nhc2UgOTpjYXNlIDExOmI9KGI9Yi5kb2N1bWVudEVsZW1lbnQpP2IubmFtZXNwYWNlVVJJOmxiKG51bGwsXCJcIik7YnJlYWs7ZGVmYXVsdDphPTg9PT1hP2IucGFyZW50Tm9kZTpiLGI9YS5uYW1lc3BhY2VVUkl8fG51bGwsYT1hLnRhZ05hbWUsYj1sYihiLGEpfUUodWgpO0codWgsYil9ZnVuY3Rpb24gemgoKXtFKHVoKTtFKHZoKTtFKHdoKX1mdW5jdGlvbiBBaChhKXt4aCh3aC5jdXJyZW50KTt2YXIgYj14aCh1aC5jdXJyZW50KTt2YXIgYz1sYihiLGEudHlwZSk7YiE9PWMmJihHKHZoLGEpLEcodWgsYykpfWZ1bmN0aW9uIEJoKGEpe3ZoLmN1cnJlbnQ9PT1hJiYoRSh1aCksRSh2aCkpfXZhciBMPVVmKDApO1xuZnVuY3Rpb24gQ2goYSl7Zm9yKHZhciBiPWE7bnVsbCE9PWI7KXtpZigxMz09PWIudGFnKXt2YXIgYz1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWMmJihjPWMuZGVoeWRyYXRlZCxudWxsPT09Y3x8XCIkP1wiPT09Yy5kYXRhfHxcIiQhXCI9PT1jLmRhdGEpKXJldHVybiBifWVsc2UgaWYoMTk9PT1iLnRhZyYmdm9pZCAwIT09Yi5tZW1vaXplZFByb3BzLnJldmVhbE9yZGVyKXtpZigwIT09KGIuZmxhZ3MmMTI4KSlyZXR1cm4gYn1lbHNlIGlmKG51bGwhPT1iLmNoaWxkKXtiLmNoaWxkLnJldHVybj1iO2I9Yi5jaGlsZDtjb250aW51ZX1pZihiPT09YSlicmVhaztmb3IoO251bGw9PT1iLnNpYmxpbmc7KXtpZihudWxsPT09Yi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9cmV0dXJuIG51bGx9dmFyIERoPVtdO1xuZnVuY3Rpb24gRWgoKXtmb3IodmFyIGE9MDthPERoLmxlbmd0aDthKyspRGhbYV0uX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9bnVsbDtEaC5sZW5ndGg9MH12YXIgRmg9dWEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixHaD11YS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxIaD0wLE09bnVsbCxOPW51bGwsTz1udWxsLEloPSExLEpoPSExLEtoPTAsTGg9MDtmdW5jdGlvbiBQKCl7dGhyb3cgRXJyb3IocCgzMjEpKTt9ZnVuY3Rpb24gTWgoYSxiKXtpZihudWxsPT09YilyZXR1cm4hMTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoJiZjPGEubGVuZ3RoO2MrKylpZighSGUoYVtjXSxiW2NdKSlyZXR1cm4hMTtyZXR1cm4hMH1cbmZ1bmN0aW9uIE5oKGEsYixjLGQsZSxmKXtIaD1mO009YjtiLm1lbW9pemVkU3RhdGU9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7Yi5sYW5lcz0wO0ZoLmN1cnJlbnQ9bnVsbD09PWF8fG51bGw9PT1hLm1lbW9pemVkU3RhdGU/T2g6UGg7YT1jKGQsZSk7aWYoSmgpe2Y9MDtkb3tKaD0hMTtLaD0wO2lmKDI1PD1mKXRocm93IEVycm9yKHAoMzAxKSk7Zis9MTtPPU49bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7RmguY3VycmVudD1RaDthPWMoZCxlKX13aGlsZShKaCl9RmguY3VycmVudD1SaDtiPW51bGwhPT1OJiZudWxsIT09Ti5uZXh0O0hoPTA7Tz1OPU09bnVsbDtJaD0hMTtpZihiKXRocm93IEVycm9yKHAoMzAwKSk7cmV0dXJuIGF9ZnVuY3Rpb24gU2goKXt2YXIgYT0wIT09S2g7S2g9MDtyZXR1cm4gYX1cbmZ1bmN0aW9uIFRoKCl7dmFyIGE9e21lbW9pemVkU3RhdGU6bnVsbCxiYXNlU3RhdGU6bnVsbCxiYXNlUXVldWU6bnVsbCxxdWV1ZTpudWxsLG5leHQ6bnVsbH07bnVsbD09PU8/TS5tZW1vaXplZFN0YXRlPU89YTpPPU8ubmV4dD1hO3JldHVybiBPfWZ1bmN0aW9uIFVoKCl7aWYobnVsbD09PU4pe3ZhciBhPU0uYWx0ZXJuYXRlO2E9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGx9ZWxzZSBhPU4ubmV4dDt2YXIgYj1udWxsPT09Tz9NLm1lbW9pemVkU3RhdGU6Ty5uZXh0O2lmKG51bGwhPT1iKU89YixOPWE7ZWxzZXtpZihudWxsPT09YSl0aHJvdyBFcnJvcihwKDMxMCkpO049YTthPXttZW1vaXplZFN0YXRlOk4ubWVtb2l6ZWRTdGF0ZSxiYXNlU3RhdGU6Ti5iYXNlU3RhdGUsYmFzZVF1ZXVlOk4uYmFzZVF1ZXVlLHF1ZXVlOk4ucXVldWUsbmV4dDpudWxsfTtudWxsPT09Tz9NLm1lbW9pemVkU3RhdGU9Tz1hOk89Ty5uZXh0PWF9cmV0dXJuIE99XG5mdW5jdGlvbiBWaChhLGIpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IoYSk6Yn1cbmZ1bmN0aW9uIFdoKGEpe3ZhciBiPVVoKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IEVycm9yKHAoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7dmFyIGQ9TixlPWQuYmFzZVF1ZXVlLGY9Yy5wZW5kaW5nO2lmKG51bGwhPT1mKXtpZihudWxsIT09ZSl7dmFyIGc9ZS5uZXh0O2UubmV4dD1mLm5leHQ7Zi5uZXh0PWd9ZC5iYXNlUXVldWU9ZT1mO2MucGVuZGluZz1udWxsfWlmKG51bGwhPT1lKXtmPWUubmV4dDtkPWQuYmFzZVN0YXRlO3ZhciBoPWc9bnVsbCxrPW51bGwsbD1mO2Rve3ZhciBtPWwubGFuZTtpZigoSGgmbSk9PT1tKW51bGwhPT1rJiYoaz1rLm5leHQ9e2xhbmU6MCxhY3Rpb246bC5hY3Rpb24saGFzRWFnZXJTdGF0ZTpsLmhhc0VhZ2VyU3RhdGUsZWFnZXJTdGF0ZTpsLmVhZ2VyU3RhdGUsbmV4dDpudWxsfSksZD1sLmhhc0VhZ2VyU3RhdGU/bC5lYWdlclN0YXRlOmEoZCxsLmFjdGlvbik7ZWxzZXt2YXIgcT17bGFuZTptLGFjdGlvbjpsLmFjdGlvbixoYXNFYWdlclN0YXRlOmwuaGFzRWFnZXJTdGF0ZSxcbmVhZ2VyU3RhdGU6bC5lYWdlclN0YXRlLG5leHQ6bnVsbH07bnVsbD09PWs/KGg9az1xLGc9ZCk6az1rLm5leHQ9cTtNLmxhbmVzfD1tO3JofD1tfWw9bC5uZXh0fXdoaWxlKG51bGwhPT1sJiZsIT09Zik7bnVsbD09PWs/Zz1kOmsubmV4dD1oO0hlKGQsYi5tZW1vaXplZFN0YXRlKXx8KGRoPSEwKTtiLm1lbW9pemVkU3RhdGU9ZDtiLmJhc2VTdGF0ZT1nO2IuYmFzZVF1ZXVlPWs7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1kfWE9Yy5pbnRlcmxlYXZlZDtpZihudWxsIT09YSl7ZT1hO2RvIGY9ZS5sYW5lLE0ubGFuZXN8PWYscmh8PWYsZT1lLm5leHQ7d2hpbGUoZSE9PWEpfWVsc2UgbnVsbD09PWUmJihjLmxhbmVzPTApO3JldHVybltiLm1lbW9pemVkU3RhdGUsYy5kaXNwYXRjaF19XG5mdW5jdGlvbiBYaChhKXt2YXIgYj1VaCgpLGM9Yi5xdWV1ZTtpZihudWxsPT09Yyl0aHJvdyBFcnJvcihwKDMxMSkpO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO3ZhciBkPWMuZGlzcGF0Y2gsZT1jLnBlbmRpbmcsZj1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWUpe2MucGVuZGluZz1udWxsO3ZhciBnPWU9ZS5uZXh0O2RvIGY9YShmLGcuYWN0aW9uKSxnPWcubmV4dDt3aGlsZShnIT09ZSk7SGUoZixiLm1lbW9pemVkU3RhdGUpfHwoZGg9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO251bGw9PT1iLmJhc2VRdWV1ZSYmKGIuYmFzZVN0YXRlPWYpO2MubGFzdFJlbmRlcmVkU3RhdGU9Zn1yZXR1cm5bZixkXX1mdW5jdGlvbiBZaCgpe31cbmZ1bmN0aW9uIFpoKGEsYil7dmFyIGM9TSxkPVVoKCksZT1iKCksZj0hSGUoZC5tZW1vaXplZFN0YXRlLGUpO2YmJihkLm1lbW9pemVkU3RhdGU9ZSxkaD0hMCk7ZD1kLnF1ZXVlOyRoKGFpLmJpbmQobnVsbCxjLGQsYSksW2FdKTtpZihkLmdldFNuYXBzaG90IT09Ynx8Znx8bnVsbCE9PU8mJk8ubWVtb2l6ZWRTdGF0ZS50YWcmMSl7Yy5mbGFnc3w9MjA0ODtiaSg5LGNpLmJpbmQobnVsbCxjLGQsZSxiKSx2b2lkIDAsbnVsbCk7aWYobnVsbD09PVEpdGhyb3cgRXJyb3IocCgzNDkpKTswIT09KEhoJjMwKXx8ZGkoYyxiLGUpfXJldHVybiBlfWZ1bmN0aW9uIGRpKGEsYixjKXthLmZsYWdzfD0xNjM4NDthPXtnZXRTbmFwc2hvdDpiLHZhbHVlOmN9O2I9TS51cGRhdGVRdWV1ZTtudWxsPT09Yj8oYj17bGFzdEVmZmVjdDpudWxsLHN0b3JlczpudWxsfSxNLnVwZGF0ZVF1ZXVlPWIsYi5zdG9yZXM9W2FdKTooYz1iLnN0b3JlcyxudWxsPT09Yz9iLnN0b3Jlcz1bYV06Yy5wdXNoKGEpKX1cbmZ1bmN0aW9uIGNpKGEsYixjLGQpe2IudmFsdWU9YztiLmdldFNuYXBzaG90PWQ7ZWkoYikmJmZpKGEpfWZ1bmN0aW9uIGFpKGEsYixjKXtyZXR1cm4gYyhmdW5jdGlvbigpe2VpKGIpJiZmaShhKX0pfWZ1bmN0aW9uIGVpKGEpe3ZhciBiPWEuZ2V0U25hcHNob3Q7YT1hLnZhbHVlO3RyeXt2YXIgYz1iKCk7cmV0dXJuIUhlKGEsYyl9Y2F0Y2goZCl7cmV0dXJuITB9fWZ1bmN0aW9uIGZpKGEpe3ZhciBiPWloKGEsMSk7bnVsbCE9PWImJmdpKGIsYSwxLC0xKX1cbmZ1bmN0aW9uIGhpKGEpe3ZhciBiPVRoKCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJihhPWEoKSk7Yi5tZW1vaXplZFN0YXRlPWIuYmFzZVN0YXRlPWE7YT17cGVuZGluZzpudWxsLGludGVybGVhdmVkOm51bGwsbGFuZXM6MCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6VmgsbGFzdFJlbmRlcmVkU3RhdGU6YX07Yi5xdWV1ZT1hO2E9YS5kaXNwYXRjaD1paS5iaW5kKG51bGwsTSxhKTtyZXR1cm5bYi5tZW1vaXplZFN0YXRlLGFdfVxuZnVuY3Rpb24gYmkoYSxiLGMsZCl7YT17dGFnOmEsY3JlYXRlOmIsZGVzdHJveTpjLGRlcHM6ZCxuZXh0Om51bGx9O2I9TS51cGRhdGVRdWV1ZTtudWxsPT09Yj8oYj17bGFzdEVmZmVjdDpudWxsLHN0b3JlczpudWxsfSxNLnVwZGF0ZVF1ZXVlPWIsYi5sYXN0RWZmZWN0PWEubmV4dD1hKTooYz1iLmxhc3RFZmZlY3QsbnVsbD09PWM/Yi5sYXN0RWZmZWN0PWEubmV4dD1hOihkPWMubmV4dCxjLm5leHQ9YSxhLm5leHQ9ZCxiLmxhc3RFZmZlY3Q9YSkpO3JldHVybiBhfWZ1bmN0aW9uIGppKCl7cmV0dXJuIFVoKCkubWVtb2l6ZWRTdGF0ZX1mdW5jdGlvbiBraShhLGIsYyxkKXt2YXIgZT1UaCgpO00uZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPWJpKDF8YixjLHZvaWQgMCx2b2lkIDA9PT1kP251bGw6ZCl9XG5mdW5jdGlvbiBsaShhLGIsYyxkKXt2YXIgZT1VaCgpO2Q9dm9pZCAwPT09ZD9udWxsOmQ7dmFyIGY9dm9pZCAwO2lmKG51bGwhPT1OKXt2YXIgZz1OLm1lbW9pemVkU3RhdGU7Zj1nLmRlc3Ryb3k7aWYobnVsbCE9PWQmJk1oKGQsZy5kZXBzKSl7ZS5tZW1vaXplZFN0YXRlPWJpKGIsYyxmLGQpO3JldHVybn19TS5mbGFnc3w9YTtlLm1lbW9pemVkU3RhdGU9YmkoMXxiLGMsZixkKX1mdW5jdGlvbiBtaShhLGIpe3JldHVybiBraSg4MzkwNjU2LDgsYSxiKX1mdW5jdGlvbiAkaChhLGIpe3JldHVybiBsaSgyMDQ4LDgsYSxiKX1mdW5jdGlvbiBuaShhLGIpe3JldHVybiBsaSg0LDIsYSxiKX1mdW5jdGlvbiBvaShhLGIpe3JldHVybiBsaSg0LDQsYSxiKX1cbmZ1bmN0aW9uIHBpKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGE9YSgpLGIoYSksZnVuY3Rpb24oKXtiKG51bGwpfTtpZihudWxsIT09YiYmdm9pZCAwIT09YilyZXR1cm4gYT1hKCksYi5jdXJyZW50PWEsZnVuY3Rpb24oKXtiLmN1cnJlbnQ9bnVsbH19ZnVuY3Rpb24gcWkoYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBsaSg0LDQscGkuYmluZChudWxsLGIsYSksYyl9ZnVuY3Rpb24gcmkoKXt9ZnVuY3Rpb24gc2koYSxiKXt2YXIgYz1VaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmTWgoYixkWzFdKSlyZXR1cm4gZFswXTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9XG5mdW5jdGlvbiB0aShhLGIpe3ZhciBjPVVoKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZNaChiLGRbMV0pKXJldHVybiBkWzBdO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1mdW5jdGlvbiB1aShhLGIsYyl7aWYoMD09PShIaCYyMSkpcmV0dXJuIGEuYmFzZVN0YXRlJiYoYS5iYXNlU3RhdGU9ITEsZGg9ITApLGEubWVtb2l6ZWRTdGF0ZT1jO0hlKGMsYil8fChjPXljKCksTS5sYW5lc3w9YyxyaHw9YyxhLmJhc2VTdGF0ZT0hMCk7cmV0dXJuIGJ9ZnVuY3Rpb24gdmkoYSxiKXt2YXIgYz1DO0M9MCE9PWMmJjQ+Yz9jOjQ7YSghMCk7dmFyIGQ9R2gudHJhbnNpdGlvbjtHaC50cmFuc2l0aW9uPXt9O3RyeXthKCExKSxiKCl9ZmluYWxseXtDPWMsR2gudHJhbnNpdGlvbj1kfX1mdW5jdGlvbiB3aSgpe3JldHVybiBVaCgpLm1lbW9pemVkU3RhdGV9XG5mdW5jdGlvbiB4aShhLGIsYyl7dmFyIGQ9eWkoYSk7Yz17bGFuZTpkLGFjdGlvbjpjLGhhc0VhZ2VyU3RhdGU6ITEsZWFnZXJTdGF0ZTpudWxsLG5leHQ6bnVsbH07aWYoemkoYSkpQWkoYixjKTtlbHNlIGlmKGM9aGgoYSxiLGMsZCksbnVsbCE9PWMpe3ZhciBlPVIoKTtnaShjLGEsZCxlKTtCaShjLGIsZCl9fVxuZnVuY3Rpb24gaWkoYSxiLGMpe3ZhciBkPXlpKGEpLGU9e2xhbmU6ZCxhY3Rpb246YyxoYXNFYWdlclN0YXRlOiExLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9O2lmKHppKGEpKUFpKGIsZSk7ZWxzZXt2YXIgZj1hLmFsdGVybmF0ZTtpZigwPT09YS5sYW5lcyYmKG51bGw9PT1mfHwwPT09Zi5sYW5lcykmJihmPWIubGFzdFJlbmRlcmVkUmVkdWNlcixudWxsIT09ZikpdHJ5e3ZhciBnPWIubGFzdFJlbmRlcmVkU3RhdGUsaD1mKGcsYyk7ZS5oYXNFYWdlclN0YXRlPSEwO2UuZWFnZXJTdGF0ZT1oO2lmKEhlKGgsZykpe3ZhciBrPWIuaW50ZXJsZWF2ZWQ7bnVsbD09PWs/KGUubmV4dD1lLGdoKGIpKTooZS5uZXh0PWsubmV4dCxrLm5leHQ9ZSk7Yi5pbnRlcmxlYXZlZD1lO3JldHVybn19Y2F0Y2gobCl7fWZpbmFsbHl7fWM9aGgoYSxiLGUsZCk7bnVsbCE9PWMmJihlPVIoKSxnaShjLGEsZCxlKSxCaShjLGIsZCkpfX1cbmZ1bmN0aW9uIHppKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO3JldHVybiBhPT09TXx8bnVsbCE9PWImJmI9PT1NfWZ1bmN0aW9uIEFpKGEsYil7Smg9SWg9ITA7dmFyIGM9YS5wZW5kaW5nO251bGw9PT1jP2IubmV4dD1iOihiLm5leHQ9Yy5uZXh0LGMubmV4dD1iKTthLnBlbmRpbmc9Yn1mdW5jdGlvbiBCaShhLGIsYyl7aWYoMCE9PShjJjQxOTQyNDApKXt2YXIgZD1iLmxhbmVzO2QmPWEucGVuZGluZ0xhbmVzO2N8PWQ7Yi5sYW5lcz1jO0NjKGEsYyl9fVxudmFyIFJoPXtyZWFkQ29udGV4dDplaCx1c2VDYWxsYmFjazpQLHVzZUNvbnRleHQ6UCx1c2VFZmZlY3Q6UCx1c2VJbXBlcmF0aXZlSGFuZGxlOlAsdXNlSW5zZXJ0aW9uRWZmZWN0OlAsdXNlTGF5b3V0RWZmZWN0OlAsdXNlTWVtbzpQLHVzZVJlZHVjZXI6UCx1c2VSZWY6UCx1c2VTdGF0ZTpQLHVzZURlYnVnVmFsdWU6UCx1c2VEZWZlcnJlZFZhbHVlOlAsdXNlVHJhbnNpdGlvbjpQLHVzZU11dGFibGVTb3VyY2U6UCx1c2VTeW5jRXh0ZXJuYWxTdG9yZTpQLHVzZUlkOlAsdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxPaD17cmVhZENvbnRleHQ6ZWgsdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXtUaCgpLm1lbW9pemVkU3RhdGU9W2Esdm9pZCAwPT09Yj9udWxsOmJdO3JldHVybiBhfSx1c2VDb250ZXh0OmVoLHVzZUVmZmVjdDptaSx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4ga2koNDE5NDMwOCxcbjQscGkuYmluZChudWxsLGIsYSksYyl9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBraSg0MTk0MzA4LDQsYSxiKX0sdXNlSW5zZXJ0aW9uRWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGtpKDQsMixhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9VGgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX0sdXNlUmVkdWNlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9VGgoKTtiPXZvaWQgMCE9PWM/YyhiKTpiO2QubWVtb2l6ZWRTdGF0ZT1kLmJhc2VTdGF0ZT1iO2E9e3BlbmRpbmc6bnVsbCxpbnRlcmxlYXZlZDpudWxsLGxhbmVzOjAsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmEsbGFzdFJlbmRlcmVkU3RhdGU6Yn07ZC5xdWV1ZT1hO2E9YS5kaXNwYXRjaD14aS5iaW5kKG51bGwsTSxhKTtyZXR1cm5bZC5tZW1vaXplZFN0YXRlLGFdfSx1c2VSZWY6ZnVuY3Rpb24oYSl7dmFyIGI9XG5UaCgpO2E9e2N1cnJlbnQ6YX07cmV0dXJuIGIubWVtb2l6ZWRTdGF0ZT1hfSx1c2VTdGF0ZTpoaSx1c2VEZWJ1Z1ZhbHVlOnJpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7cmV0dXJuIFRoKCkubWVtb2l6ZWRTdGF0ZT1hfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9aGkoITEpLGI9YVswXTthPXZpLmJpbmQobnVsbCxhWzFdKTtUaCgpLm1lbW9pemVkU3RhdGU9YTtyZXR1cm5bYixhXX0sdXNlTXV0YWJsZVNvdXJjZTpmdW5jdGlvbigpe30sdXNlU3luY0V4dGVybmFsU3RvcmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPU0sZT1UaCgpO2lmKEkpe2lmKHZvaWQgMD09PWMpdGhyb3cgRXJyb3IocCg0MDcpKTtjPWMoKX1lbHNle2M9YigpO2lmKG51bGw9PT1RKXRocm93IEVycm9yKHAoMzQ5KSk7MCE9PShIaCYzMCl8fGRpKGQsYixjKX1lLm1lbW9pemVkU3RhdGU9Yzt2YXIgZj17dmFsdWU6YyxnZXRTbmFwc2hvdDpifTtlLnF1ZXVlPWY7bWkoYWkuYmluZChudWxsLGQsXG5mLGEpLFthXSk7ZC5mbGFnc3w9MjA0ODtiaSg5LGNpLmJpbmQobnVsbCxkLGYsYyxiKSx2b2lkIDAsbnVsbCk7cmV0dXJuIGN9LHVzZUlkOmZ1bmN0aW9uKCl7dmFyIGE9VGgoKSxiPVEuaWRlbnRpZmllclByZWZpeDtpZihJKXt2YXIgYz1zZzt2YXIgZD1yZztjPShkJn4oMTw8MzItb2MoZCktMSkpLnRvU3RyaW5nKDMyKStjO2I9XCI6XCIrYitcIlJcIitjO2M9S2grKzswPGMmJihiKz1cIkhcIitjLnRvU3RyaW5nKDMyKSk7Yis9XCI6XCJ9ZWxzZSBjPUxoKyssYj1cIjpcIitiK1wiclwiK2MudG9TdHJpbmcoMzIpK1wiOlwiO3JldHVybiBhLm1lbW9pemVkU3RhdGU9Yn0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxQaD17cmVhZENvbnRleHQ6ZWgsdXNlQ2FsbGJhY2s6c2ksdXNlQ29udGV4dDplaCx1c2VFZmZlY3Q6JGgsdXNlSW1wZXJhdGl2ZUhhbmRsZTpxaSx1c2VJbnNlcnRpb25FZmZlY3Q6bmksdXNlTGF5b3V0RWZmZWN0Om9pLHVzZU1lbW86dGksdXNlUmVkdWNlcjpXaCx1c2VSZWY6amksdXNlU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gV2goVmgpfSxcbnVzZURlYnVnVmFsdWU6cmksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1VaCgpO3JldHVybiB1aShiLE4ubWVtb2l6ZWRTdGF0ZSxhKX0sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPVdoKFZoKVswXSxiPVVoKCkubWVtb2l6ZWRTdGF0ZTtyZXR1cm5bYSxiXX0sdXNlTXV0YWJsZVNvdXJjZTpZaCx1c2VTeW5jRXh0ZXJuYWxTdG9yZTpaaCx1c2VJZDp3aSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LFFoPXtyZWFkQ29udGV4dDplaCx1c2VDYWxsYmFjazpzaSx1c2VDb250ZXh0OmVoLHVzZUVmZmVjdDokaCx1c2VJbXBlcmF0aXZlSGFuZGxlOnFpLHVzZUluc2VydGlvbkVmZmVjdDpuaSx1c2VMYXlvdXRFZmZlY3Q6b2ksdXNlTWVtbzp0aSx1c2VSZWR1Y2VyOlhoLHVzZVJlZjpqaSx1c2VTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBYaChWaCl9LHVzZURlYnVnVmFsdWU6cmksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1VaCgpO3JldHVybiBudWxsPT09XG5OP2IubWVtb2l6ZWRTdGF0ZT1hOnVpKGIsTi5tZW1vaXplZFN0YXRlLGEpfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9WGgoVmgpWzBdLGI9VWgoKS5tZW1vaXplZFN0YXRlO3JldHVyblthLGJdfSx1c2VNdXRhYmxlU291cmNlOlloLHVzZVN5bmNFeHRlcm5hbFN0b3JlOlpoLHVzZUlkOndpLHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX07ZnVuY3Rpb24gQ2koYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1BKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSk7cmV0dXJuIGJ9cmV0dXJuIGJ9ZnVuY3Rpb24gRGkoYSxiLGMsZCl7Yj1hLm1lbW9pemVkU3RhdGU7Yz1jKGQsYik7Yz1udWxsPT09Y3x8dm9pZCAwPT09Yz9iOkEoe30sYixjKTthLm1lbW9pemVkU3RhdGU9YzswPT09YS5sYW5lcyYmKGEudXBkYXRlUXVldWUuYmFzZVN0YXRlPWMpfVxudmFyIEVpPXtpc01vdW50ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5fcmVhY3RJbnRlcm5hbHMpP1ZiKGEpPT09YTohMX0sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPVIoKSxlPXlpKGEpLGY9bWgoZCxlKTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7Yj1uaChhLGYsZSk7bnVsbCE9PWImJihnaShiLGEsZSxkKSxvaChiLGEsZSkpfSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPVIoKSxlPXlpKGEpLGY9bWgoZCxlKTtmLnRhZz0xO2YucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZi5jYWxsYmFjaz1jKTtiPW5oKGEsZixlKTtudWxsIT09YiYmKGdpKGIsYSxlLGQpLG9oKGIsYSxlKSl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGM9UigpLGQ9XG55aShhKSxlPW1oKGMsZCk7ZS50YWc9Mjt2b2lkIDAhPT1iJiZudWxsIT09YiYmKGUuY2FsbGJhY2s9Yik7Yj1uaChhLGUsZCk7bnVsbCE9PWImJihnaShiLGEsZCxjKSxvaChiLGEsZCkpfX07ZnVuY3Rpb24gRmkoYSxiLGMsZCxlLGYsZyl7YT1hLnN0YXRlTm9kZTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5zaG91bGRDb21wb25lbnRVcGRhdGU/YS5zaG91bGRDb21wb25lbnRVcGRhdGUoZCxmLGcpOmIucHJvdG90eXBlJiZiLnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudD8hSWUoYyxkKXx8IUllKGUsZik6ITB9XG5mdW5jdGlvbiBHaShhLGIsYyl7dmFyIGQ9ITEsZT1WZjt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/Zj1laChmKTooZT1aZihiKT9YZjpILmN1cnJlbnQsZD1iLmNvbnRleHRUeXBlcyxmPShkPW51bGwhPT1kJiZ2b2lkIDAhPT1kKT9ZZihhLGUpOlZmKTtiPW5ldyBiKGMsZik7YS5tZW1vaXplZFN0YXRlPW51bGwhPT1iLnN0YXRlJiZ2b2lkIDAhPT1iLnN0YXRlP2Iuc3RhdGU6bnVsbDtiLnVwZGF0ZXI9RWk7YS5zdGF0ZU5vZGU9YjtiLl9yZWFjdEludGVybmFscz1hO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1lLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9Zik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBIaShhLGIsYyxkKXthPWIuc3RhdGU7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtiLnN0YXRlIT09YSYmRWkuZW5xdWV1ZVJlcGxhY2VTdGF0ZShiLGIuc3RhdGUsbnVsbCl9XG5mdW5jdGlvbiBJaShhLGIsYyxkKXt2YXIgZT1hLnN0YXRlTm9kZTtlLnByb3BzPWM7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7ZS5yZWZzPXt9O2toKGEpO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9lLmNvbnRleHQ9ZWgoZik6KGY9WmYoYik/WGY6SC5jdXJyZW50LGUuY29udGV4dD1ZZihhLGYpKTtlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtmPWIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBmJiYoRGkoYSxiLGYsYyksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc3x8XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudHx8KGI9ZS5zdGF0ZSxcblwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudCYmZS5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSxiIT09ZS5zdGF0ZSYmRWkuZW5xdWV1ZVJlcGxhY2VTdGF0ZShlLGUuc3RhdGUsbnVsbCkscWgoYSxjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudERpZE1vdW50JiYoYS5mbGFnc3w9NDE5NDMwOCl9ZnVuY3Rpb24gSmkoYSxiKXt0cnl7dmFyIGM9XCJcIixkPWI7ZG8gYys9UGEoZCksZD1kLnJldHVybjt3aGlsZShkKTt2YXIgZT1jfWNhdGNoKGYpe2U9XCJcXG5FcnJvciBnZW5lcmF0aW5nIHN0YWNrOiBcIitmLm1lc3NhZ2UrXCJcXG5cIitmLnN0YWNrfXJldHVybnt2YWx1ZTphLHNvdXJjZTpiLHN0YWNrOmUsZGlnZXN0Om51bGx9fVxuZnVuY3Rpb24gS2koYSxiLGMpe3JldHVybnt2YWx1ZTphLHNvdXJjZTpudWxsLHN0YWNrOm51bGwhPWM/YzpudWxsLGRpZ2VzdDpudWxsIT1iP2I6bnVsbH19ZnVuY3Rpb24gTGkoYSxiKXt0cnl7Y29uc29sZS5lcnJvcihiLnZhbHVlKX1jYXRjaChjKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYzt9KX19dmFyIE1pPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrTWFwP1dlYWtNYXA6TWFwO2Z1bmN0aW9uIE5pKGEsYixjKXtjPW1oKC0xLGMpO2MudGFnPTM7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe09pfHwoT2k9ITAsUGk9ZCk7TGkoYSxiKX07cmV0dXJuIGN9XG5mdW5jdGlvbiBRaShhLGIsYyl7Yz1taCgtMSxjKTtjLnRhZz0zO3ZhciBkPWEudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe3ZhciBlPWIudmFsdWU7Yy5wYXlsb2FkPWZ1bmN0aW9uKCl7cmV0dXJuIGQoZSl9O2MuY2FsbGJhY2s9ZnVuY3Rpb24oKXtMaShhLGIpfX12YXIgZj1hLnN0YXRlTm9kZTtudWxsIT09ZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuY29tcG9uZW50RGlkQ2F0Y2gmJihjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7TGkoYSxiKTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgZCYmKG51bGw9PT1SaT9SaT1uZXcgU2V0KFt0aGlzXSk6UmkuYWRkKHRoaXMpKTt2YXIgYz1iLnN0YWNrO3RoaXMuY29tcG9uZW50RGlkQ2F0Y2goYi52YWx1ZSx7Y29tcG9uZW50U3RhY2s6bnVsbCE9PWM/YzpcIlwifSl9KTtyZXR1cm4gY31cbmZ1bmN0aW9uIFNpKGEsYixjKXt2YXIgZD1hLnBpbmdDYWNoZTtpZihudWxsPT09ZCl7ZD1hLnBpbmdDYWNoZT1uZXcgTWk7dmFyIGU9bmV3IFNldDtkLnNldChiLGUpfWVsc2UgZT1kLmdldChiKSx2b2lkIDA9PT1lJiYoZT1uZXcgU2V0LGQuc2V0KGIsZSkpO2UuaGFzKGMpfHwoZS5hZGQoYyksYT1UaS5iaW5kKG51bGwsYSxiLGMpLGIudGhlbihhLGEpKX1mdW5jdGlvbiBVaShhKXtkb3t2YXIgYjtpZihiPTEzPT09YS50YWcpYj1hLm1lbW9pemVkU3RhdGUsYj1udWxsIT09Yj9udWxsIT09Yi5kZWh5ZHJhdGVkPyEwOiExOiEwO2lmKGIpcmV0dXJuIGE7YT1hLnJldHVybn13aGlsZShudWxsIT09YSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBWaShhLGIsYyxkLGUpe2lmKDA9PT0oYS5tb2RlJjEpKXJldHVybiBhPT09Yj9hLmZsYWdzfD02NTUzNjooYS5mbGFnc3w9MTI4LGMuZmxhZ3N8PTEzMTA3MixjLmZsYWdzJj0tNTI4MDUsMT09PWMudGFnJiYobnVsbD09PWMuYWx0ZXJuYXRlP2MudGFnPTE3OihiPW1oKC0xLDEpLGIudGFnPTIsbmgoYyxiLDEpKSksYy5sYW5lc3w9MSksYTthLmZsYWdzfD02NTUzNjthLmxhbmVzPWU7cmV0dXJuIGF9dmFyIFdpPXVhLlJlYWN0Q3VycmVudE93bmVyLGRoPSExO2Z1bmN0aW9uIFhpKGEsYixjLGQpe2IuY2hpbGQ9bnVsbD09PWE/VmcoYixudWxsLGMsZCk6VWcoYixhLmNoaWxkLGMsZCl9XG5mdW5jdGlvbiBZaShhLGIsYyxkLGUpe2M9Yy5yZW5kZXI7dmFyIGY9Yi5yZWY7Y2goYixlKTtkPU5oKGEsYixjLGQsZixlKTtjPVNoKCk7aWYobnVsbCE9PWEmJiFkaClyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZmxhZ3MmPS0yMDUzLGEubGFuZXMmPX5lLFppKGEsYixlKTtJJiZjJiZ2ZyhiKTtiLmZsYWdzfD0xO1hpKGEsYixkLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gJGkoYSxiLGMsZCxlKXtpZihudWxsPT09YSl7dmFyIGY9Yy50eXBlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmJiYhYWooZikmJnZvaWQgMD09PWYuZGVmYXVsdFByb3BzJiZudWxsPT09Yy5jb21wYXJlJiZ2b2lkIDA9PT1jLmRlZmF1bHRQcm9wcylyZXR1cm4gYi50YWc9MTUsYi50eXBlPWYsYmooYSxiLGYsZCxlKTthPVJnKGMudHlwZSxudWxsLGQsYixiLm1vZGUsZSk7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfWY9YS5jaGlsZDtpZigwPT09KGEubGFuZXMmZSkpe3ZhciBnPWYubWVtb2l6ZWRQcm9wcztjPWMuY29tcGFyZTtjPW51bGwhPT1jP2M6SWU7aWYoYyhnLGQpJiZhLnJlZj09PWIucmVmKXJldHVybiBaaShhLGIsZSl9Yi5mbGFnc3w9MTthPVBnKGYsZCk7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfVxuZnVuY3Rpb24gYmooYSxiLGMsZCxlKXtpZihudWxsIT09YSl7dmFyIGY9YS5tZW1vaXplZFByb3BzO2lmKEllKGYsZCkmJmEucmVmPT09Yi5yZWYpaWYoZGg9ITEsYi5wZW5kaW5nUHJvcHM9ZD1mLDAhPT0oYS5sYW5lcyZlKSkwIT09KGEuZmxhZ3MmMTMxMDcyKSYmKGRoPSEwKTtlbHNlIHJldHVybiBiLmxhbmVzPWEubGFuZXMsWmkoYSxiLGUpfXJldHVybiBjaihhLGIsYyxkLGUpfVxuZnVuY3Rpb24gZGooYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9ZC5jaGlsZHJlbixmPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsO2lmKFwiaGlkZGVuXCI9PT1kLm1vZGUpaWYoMD09PShiLm1vZGUmMSkpYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6MCxjYWNoZVBvb2w6bnVsbCx0cmFuc2l0aW9uczpudWxsfSxHKGVqLGZqKSxmanw9YztlbHNle2lmKDA9PT0oYyYxMDczNzQxODI0KSlyZXR1cm4gYT1udWxsIT09Zj9mLmJhc2VMYW5lc3xjOmMsYi5sYW5lcz1iLmNoaWxkTGFuZXM9MTA3Mzc0MTgyNCxiLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczphLGNhY2hlUG9vbDpudWxsLHRyYW5zaXRpb25zOm51bGx9LGIudXBkYXRlUXVldWU9bnVsbCxHKGVqLGZqKSxmanw9YSxudWxsO2IubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOjAsY2FjaGVQb29sOm51bGwsdHJhbnNpdGlvbnM6bnVsbH07ZD1udWxsIT09Zj9mLmJhc2VMYW5lczpjO0coZWosZmopO2ZqfD1kfWVsc2UgbnVsbCE9PVxuZj8oZD1mLmJhc2VMYW5lc3xjLGIubWVtb2l6ZWRTdGF0ZT1udWxsKTpkPWMsRyhlaixmaiksZmp8PWQ7WGkoYSxiLGUsYyk7cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24gZ2ooYSxiKXt2YXIgYz1iLnJlZjtpZihudWxsPT09YSYmbnVsbCE9PWN8fG51bGwhPT1hJiZhLnJlZiE9PWMpYi5mbGFnc3w9NTEyLGIuZmxhZ3N8PTIwOTcxNTJ9ZnVuY3Rpb24gY2ooYSxiLGMsZCxlKXt2YXIgZj1aZihjKT9YZjpILmN1cnJlbnQ7Zj1ZZihiLGYpO2NoKGIsZSk7Yz1OaChhLGIsYyxkLGYsZSk7ZD1TaCgpO2lmKG51bGwhPT1hJiYhZGgpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmZsYWdzJj0tMjA1MyxhLmxhbmVzJj1+ZSxaaShhLGIsZSk7SSYmZCYmdmcoYik7Yi5mbGFnc3w9MTtYaShhLGIsYyxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGhqKGEsYixjLGQsZSl7aWYoWmYoYykpe3ZhciBmPSEwO2NnKGIpfWVsc2UgZj0hMTtjaChiLGUpO2lmKG51bGw9PT1iLnN0YXRlTm9kZSlpaihhLGIpLEdpKGIsYyxkKSxJaShiLGMsZCxlKSxkPSEwO2Vsc2UgaWYobnVsbD09PWEpe3ZhciBnPWIuc3RhdGVOb2RlLGg9Yi5tZW1vaXplZFByb3BzO2cucHJvcHM9aDt2YXIgaz1nLmNvbnRleHQsbD1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgbCYmbnVsbCE9PWw/bD1laChsKToobD1aZihjKT9YZjpILmN1cnJlbnQsbD1ZZihiLGwpKTt2YXIgbT1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyxxPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBtfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZTtxfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8XG4oaCE9PWR8fGshPT1sKSYmSGkoYixnLGQsbCk7amg9ITE7dmFyIHI9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cjtxaChiLGQsZyxlKTtrPWIubWVtb2l6ZWRTdGF0ZTtoIT09ZHx8ciE9PWt8fFdmLmN1cnJlbnR8fGpoPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgbSYmKERpKGIsYyxtLGQpLGs9Yi5tZW1vaXplZFN0YXRlKSwoaD1qaHx8RmkoYixjLGgsZCxyLGssbCkpPyhxfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnR8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnQmJmcuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NDE5NDMwOCkpOlxuKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NDE5NDMwOCksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPWspLGcucHJvcHM9ZCxnLnN0YXRlPWssZy5jb250ZXh0PWwsZD1oKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00MTk0MzA4KSxkPSExKX1lbHNle2c9Yi5zdGF0ZU5vZGU7bGgoYSxiKTtoPWIubWVtb2l6ZWRQcm9wcztsPWIudHlwZT09PWIuZWxlbWVudFR5cGU/aDpDaShiLnR5cGUsaCk7Zy5wcm9wcz1sO3E9Yi5wZW5kaW5nUHJvcHM7cj1nLmNvbnRleHQ7az1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWs/az1laChrKTooaz1aZihjKT9YZjpILmN1cnJlbnQsaz1ZZihiLGspKTt2YXIgeT1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczsobT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgeXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpfHxcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PXF8fHIhPT1rKSYmSGkoYixnLGQsayk7amg9ITE7cj1iLm1lbW9pemVkU3RhdGU7Zy5zdGF0ZT1yO3FoKGIsZCxnLGUpO3ZhciBuPWIubWVtb2l6ZWRTdGF0ZTtoIT09cXx8ciE9PW58fFdmLmN1cnJlbnR8fGpoPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgeSYmKERpKGIsYyx5LGQpLG49Yi5tZW1vaXplZFN0YXRlKSwobD1qaHx8RmkoYixjLGwsZCxyLG4sayl8fCExKT8obXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGV8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlJiZnLmNvbXBvbmVudFdpbGxVcGRhdGUoZCxuLGspLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZcbmcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUoZCxuLGspKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGUmJihiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKGIuZmxhZ3N8PTEwMjQpKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZyPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnI9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD0xMDI0KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9biksZy5wcm9wcz1kLGcuc3RhdGU9bixnLmNvbnRleHQ9ayxkPWwpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnI9PT1cbmEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZyPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MTAyNCksZD0hMSl9cmV0dXJuIGpqKGEsYixjLGQsZixlKX1cbmZ1bmN0aW9uIGpqKGEsYixjLGQsZSxmKXtnaihhLGIpO3ZhciBnPTAhPT0oYi5mbGFncyYxMjgpO2lmKCFkJiYhZylyZXR1cm4gZSYmZGcoYixjLCExKSxaaShhLGIsZik7ZD1iLnN0YXRlTm9kZTtXaS5jdXJyZW50PWI7dmFyIGg9ZyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGMuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yP251bGw6ZC5yZW5kZXIoKTtiLmZsYWdzfD0xO251bGwhPT1hJiZnPyhiLmNoaWxkPVVnKGIsYS5jaGlsZCxudWxsLGYpLGIuY2hpbGQ9VWcoYixudWxsLGgsZikpOlhpKGEsYixoLGYpO2IubWVtb2l6ZWRTdGF0ZT1kLnN0YXRlO2UmJmRnKGIsYywhMCk7cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24ga2ooYSl7dmFyIGI9YS5zdGF0ZU5vZGU7Yi5wZW5kaW5nQ29udGV4dD9hZyhhLGIucGVuZGluZ0NvbnRleHQsYi5wZW5kaW5nQ29udGV4dCE9PWIuY29udGV4dCk6Yi5jb250ZXh0JiZhZyhhLGIuY29udGV4dCwhMSk7eWgoYSxiLmNvbnRhaW5lckluZm8pfVxuZnVuY3Rpb24gbGooYSxiLGMsZCxlKXtJZygpO0pnKGUpO2IuZmxhZ3N8PTI1NjtYaShhLGIsYyxkKTtyZXR1cm4gYi5jaGlsZH12YXIgbWo9e2RlaHlkcmF0ZWQ6bnVsbCx0cmVlQ29udGV4dDpudWxsLHJldHJ5TGFuZTowfTtmdW5jdGlvbiBuaihhKXtyZXR1cm57YmFzZUxhbmVzOmEsY2FjaGVQb29sOm51bGwsdHJhbnNpdGlvbnM6bnVsbH19XG5mdW5jdGlvbiBvaihhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1MLmN1cnJlbnQsZj0hMSxnPTAhPT0oYi5mbGFncyYxMjgpLGg7KGg9Zyl8fChoPW51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlPyExOjAhPT0oZSYyKSk7aWYoaClmPSEwLGIuZmxhZ3MmPS0xMjk7ZWxzZSBpZihudWxsPT09YXx8bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSllfD0xO0coTCxlJjEpO2lmKG51bGw9PT1hKXtFZyhiKTthPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YSYmKGE9YS5kZWh5ZHJhdGVkLG51bGwhPT1hKSlyZXR1cm4gMD09PShiLm1vZGUmMSk/Yi5sYW5lcz0xOlwiJCFcIj09PWEuZGF0YT9iLmxhbmVzPTg6Yi5sYW5lcz0xMDczNzQxODI0LG51bGw7Zz1kLmNoaWxkcmVuO2E9ZC5mYWxsYmFjaztyZXR1cm4gZj8oZD1iLm1vZGUsZj1iLmNoaWxkLGc9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpnfSwwPT09KGQmMSkmJm51bGwhPT1mPyhmLmNoaWxkTGFuZXM9MCxmLnBlbmRpbmdQcm9wcz1cbmcpOmY9cGooZyxkLDAsbnVsbCksYT1UZyhhLGQsYyxudWxsKSxmLnJldHVybj1iLGEucmV0dXJuPWIsZi5zaWJsaW5nPWEsYi5jaGlsZD1mLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT1uaihjKSxiLm1lbW9pemVkU3RhdGU9bWosYSk6cWooYixnKX1lPWEubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZSYmKGg9ZS5kZWh5ZHJhdGVkLG51bGwhPT1oKSlyZXR1cm4gcmooYSxiLGcsZCxoLGUsYyk7aWYoZil7Zj1kLmZhbGxiYWNrO2c9Yi5tb2RlO2U9YS5jaGlsZDtoPWUuc2libGluZzt2YXIgaz17bW9kZTpcImhpZGRlblwiLGNoaWxkcmVuOmQuY2hpbGRyZW59OzA9PT0oZyYxKSYmYi5jaGlsZCE9PWU/KGQ9Yi5jaGlsZCxkLmNoaWxkTGFuZXM9MCxkLnBlbmRpbmdQcm9wcz1rLGIuZGVsZXRpb25zPW51bGwpOihkPVBnKGUsayksZC5zdWJ0cmVlRmxhZ3M9ZS5zdWJ0cmVlRmxhZ3MmMTQ2ODAwNjQpO251bGwhPT1oP2Y9UGcoaCxmKTooZj1UZyhmLGcsYyxudWxsKSxmLmZsYWdzfD0yKTtmLnJldHVybj1cbmI7ZC5yZXR1cm49YjtkLnNpYmxpbmc9ZjtiLmNoaWxkPWQ7ZD1mO2Y9Yi5jaGlsZDtnPWEuY2hpbGQubWVtb2l6ZWRTdGF0ZTtnPW51bGw9PT1nP25qKGMpOntiYXNlTGFuZXM6Zy5iYXNlTGFuZXN8YyxjYWNoZVBvb2w6bnVsbCx0cmFuc2l0aW9uczpnLnRyYW5zaXRpb25zfTtmLm1lbW9pemVkU3RhdGU9ZztmLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzJn5jO2IubWVtb2l6ZWRTdGF0ZT1tajtyZXR1cm4gZH1mPWEuY2hpbGQ7YT1mLnNpYmxpbmc7ZD1QZyhmLHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmQuY2hpbGRyZW59KTswPT09KGIubW9kZSYxKSYmKGQubGFuZXM9Yyk7ZC5yZXR1cm49YjtkLnNpYmxpbmc9bnVsbDtudWxsIT09YSYmKGM9Yi5kZWxldGlvbnMsbnVsbD09PWM/KGIuZGVsZXRpb25zPVthXSxiLmZsYWdzfD0xNik6Yy5wdXNoKGEpKTtiLmNoaWxkPWQ7Yi5tZW1vaXplZFN0YXRlPW51bGw7cmV0dXJuIGR9XG5mdW5jdGlvbiBxaihhLGIpe2I9cGooe21vZGU6XCJ2aXNpYmxlXCIsY2hpbGRyZW46Yn0sYS5tb2RlLDAsbnVsbCk7Yi5yZXR1cm49YTtyZXR1cm4gYS5jaGlsZD1ifWZ1bmN0aW9uIHNqKGEsYixjLGQpe251bGwhPT1kJiZKZyhkKTtVZyhiLGEuY2hpbGQsbnVsbCxjKTthPXFqKGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4pO2EuZmxhZ3N8PTI7Yi5tZW1vaXplZFN0YXRlPW51bGw7cmV0dXJuIGF9XG5mdW5jdGlvbiByaihhLGIsYyxkLGUsZixnKXtpZihjKXtpZihiLmZsYWdzJjI1NilyZXR1cm4gYi5mbGFncyY9LTI1NyxkPUtpKEVycm9yKHAoNDIyKSkpLHNqKGEsYixnLGQpO2lmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpcmV0dXJuIGIuY2hpbGQ9YS5jaGlsZCxiLmZsYWdzfD0xMjgsbnVsbDtmPWQuZmFsbGJhY2s7ZT1iLm1vZGU7ZD1waih7bW9kZTpcInZpc2libGVcIixjaGlsZHJlbjpkLmNoaWxkcmVufSxlLDAsbnVsbCk7Zj1UZyhmLGUsZyxudWxsKTtmLmZsYWdzfD0yO2QucmV0dXJuPWI7Zi5yZXR1cm49YjtkLnNpYmxpbmc9ZjtiLmNoaWxkPWQ7MCE9PShiLm1vZGUmMSkmJlVnKGIsYS5jaGlsZCxudWxsLGcpO2IuY2hpbGQubWVtb2l6ZWRTdGF0ZT1uaihnKTtiLm1lbW9pemVkU3RhdGU9bWo7cmV0dXJuIGZ9aWYoMD09PShiLm1vZGUmMSkpcmV0dXJuIHNqKGEsYixnLG51bGwpO2lmKFwiJCFcIj09PWUuZGF0YSl7ZD1lLm5leHRTaWJsaW5nJiZlLm5leHRTaWJsaW5nLmRhdGFzZXQ7XG5pZihkKXZhciBoPWQuZGdzdDtkPWg7Zj1FcnJvcihwKDQxOSkpO2Q9S2koZixkLHZvaWQgMCk7cmV0dXJuIHNqKGEsYixnLGQpfWg9MCE9PShnJmEuY2hpbGRMYW5lcyk7aWYoZGh8fGgpe2Q9UTtpZihudWxsIT09ZCl7c3dpdGNoKGcmLWcpe2Nhc2UgNDplPTI7YnJlYWs7Y2FzZSAxNjplPTg7YnJlYWs7Y2FzZSA2NDpjYXNlIDEyODpjYXNlIDI1NjpjYXNlIDUxMjpjYXNlIDEwMjQ6Y2FzZSAyMDQ4OmNhc2UgNDA5NjpjYXNlIDgxOTI6Y2FzZSAxNjM4NDpjYXNlIDMyNzY4OmNhc2UgNjU1MzY6Y2FzZSAxMzEwNzI6Y2FzZSAyNjIxNDQ6Y2FzZSA1MjQyODg6Y2FzZSAxMDQ4NTc2OmNhc2UgMjA5NzE1MjpjYXNlIDQxOTQzMDQ6Y2FzZSA4Mzg4NjA4OmNhc2UgMTY3NzcyMTY6Y2FzZSAzMzU1NDQzMjpjYXNlIDY3MTA4ODY0OmU9MzI7YnJlYWs7Y2FzZSA1MzY4NzA5MTI6ZT0yNjg0MzU0NTY7YnJlYWs7ZGVmYXVsdDplPTB9ZT0wIT09KGUmKGQuc3VzcGVuZGVkTGFuZXN8ZykpPzA6ZTtcbjAhPT1lJiZlIT09Zi5yZXRyeUxhbmUmJihmLnJldHJ5TGFuZT1lLGloKGEsZSksZ2koZCxhLGUsLTEpKX10aigpO2Q9S2koRXJyb3IocCg0MjEpKSk7cmV0dXJuIHNqKGEsYixnLGQpfWlmKFwiJD9cIj09PWUuZGF0YSlyZXR1cm4gYi5mbGFnc3w9MTI4LGIuY2hpbGQ9YS5jaGlsZCxiPXVqLmJpbmQobnVsbCxhKSxlLl9yZWFjdFJldHJ5PWIsbnVsbDthPWYudHJlZUNvbnRleHQ7eWc9TGYoZS5uZXh0U2libGluZyk7eGc9YjtJPSEwO3pnPW51bGw7bnVsbCE9PWEmJihvZ1twZysrXT1yZyxvZ1twZysrXT1zZyxvZ1twZysrXT1xZyxyZz1hLmlkLHNnPWEub3ZlcmZsb3cscWc9Yik7Yj1xaihiLGQuY2hpbGRyZW4pO2IuZmxhZ3N8PTQwOTY7cmV0dXJuIGJ9ZnVuY3Rpb24gdmooYSxiLGMpe2EubGFuZXN8PWI7dmFyIGQ9YS5hbHRlcm5hdGU7bnVsbCE9PWQmJihkLmxhbmVzfD1iKTtiaChhLnJldHVybixiLGMpfVxuZnVuY3Rpb24gd2ooYSxiLGMsZCxlKXt2YXIgZj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWY/YS5tZW1vaXplZFN0YXRlPXtpc0JhY2t3YXJkczpiLHJlbmRlcmluZzpudWxsLHJlbmRlcmluZ1N0YXJ0VGltZTowLGxhc3Q6ZCx0YWlsOmMsdGFpbE1vZGU6ZX06KGYuaXNCYWNrd2FyZHM9YixmLnJlbmRlcmluZz1udWxsLGYucmVuZGVyaW5nU3RhcnRUaW1lPTAsZi5sYXN0PWQsZi50YWlsPWMsZi50YWlsTW9kZT1lKX1cbmZ1bmN0aW9uIHhqKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQucmV2ZWFsT3JkZXIsZj1kLnRhaWw7WGkoYSxiLGQuY2hpbGRyZW4sYyk7ZD1MLmN1cnJlbnQ7aWYoMCE9PShkJjIpKWQ9ZCYxfDIsYi5mbGFnc3w9MTI4O2Vsc2V7aWYobnVsbCE9PWEmJjAhPT0oYS5mbGFncyYxMjgpKWE6Zm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2lmKDEzPT09YS50YWcpbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSYmdmooYSxjLGIpO2Vsc2UgaWYoMTk9PT1hLnRhZyl2aihhLGMsYik7ZWxzZSBpZihudWxsIT09YS5jaGlsZCl7YS5jaGlsZC5yZXR1cm49YTthPWEuY2hpbGQ7Y29udGludWV9aWYoYT09PWIpYnJlYWsgYTtmb3IoO251bGw9PT1hLnNpYmxpbmc7KXtpZihudWxsPT09YS5yZXR1cm58fGEucmV0dXJuPT09YilicmVhayBhO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjthPWEuc2libGluZ31kJj0xfUcoTCxkKTtpZigwPT09KGIubW9kZSYxKSliLm1lbW9pemVkU3RhdGU9XG5udWxsO2Vsc2Ugc3dpdGNoKGUpe2Nhc2UgXCJmb3J3YXJkc1wiOmM9Yi5jaGlsZDtmb3IoZT1udWxsO251bGwhPT1jOylhPWMuYWx0ZXJuYXRlLG51bGwhPT1hJiZudWxsPT09Q2goYSkmJihlPWMpLGM9Yy5zaWJsaW5nO2M9ZTtudWxsPT09Yz8oZT1iLmNoaWxkLGIuY2hpbGQ9bnVsbCk6KGU9Yy5zaWJsaW5nLGMuc2libGluZz1udWxsKTt3aihiLCExLGUsYyxmKTticmVhaztjYXNlIFwiYmFja3dhcmRzXCI6Yz1udWxsO2U9Yi5jaGlsZDtmb3IoYi5jaGlsZD1udWxsO251bGwhPT1lOyl7YT1lLmFsdGVybmF0ZTtpZihudWxsIT09YSYmbnVsbD09PUNoKGEpKXtiLmNoaWxkPWU7YnJlYWt9YT1lLnNpYmxpbmc7ZS5zaWJsaW5nPWM7Yz1lO2U9YX13aihiLCEwLGMsbnVsbCxmKTticmVhaztjYXNlIFwidG9nZXRoZXJcIjp3aihiLCExLG51bGwsbnVsbCx2b2lkIDApO2JyZWFrO2RlZmF1bHQ6Yi5tZW1vaXplZFN0YXRlPW51bGx9cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBpaihhLGIpezA9PT0oYi5tb2RlJjEpJiZudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKX1mdW5jdGlvbiBaaShhLGIsYyl7bnVsbCE9PWEmJihiLmRlcGVuZGVuY2llcz1hLmRlcGVuZGVuY2llcyk7cmh8PWIubGFuZXM7aWYoMD09PShjJmIuY2hpbGRMYW5lcykpcmV0dXJuIG51bGw7aWYobnVsbCE9PWEmJmIuY2hpbGQhPT1hLmNoaWxkKXRocm93IEVycm9yKHAoMTUzKSk7aWYobnVsbCE9PWIuY2hpbGQpe2E9Yi5jaGlsZDtjPVBnKGEsYS5wZW5kaW5nUHJvcHMpO2IuY2hpbGQ9Yztmb3IoYy5yZXR1cm49YjtudWxsIT09YS5zaWJsaW5nOylhPWEuc2libGluZyxjPWMuc2libGluZz1QZyhhLGEucGVuZGluZ1Byb3BzKSxjLnJldHVybj1iO2Muc2libGluZz1udWxsfXJldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24geWooYSxiLGMpe3N3aXRjaChiLnRhZyl7Y2FzZSAzOmtqKGIpO0lnKCk7YnJlYWs7Y2FzZSA1OkFoKGIpO2JyZWFrO2Nhc2UgMTpaZihiLnR5cGUpJiZjZyhiKTticmVhaztjYXNlIDQ6eWgoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTticmVhaztjYXNlIDEwOnZhciBkPWIudHlwZS5fY29udGV4dCxlPWIubWVtb2l6ZWRQcm9wcy52YWx1ZTtHKFdnLGQuX2N1cnJlbnRWYWx1ZSk7ZC5fY3VycmVudFZhbHVlPWU7YnJlYWs7Y2FzZSAxMzpkPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCl7aWYobnVsbCE9PWQuZGVoeWRyYXRlZClyZXR1cm4gRyhMLEwuY3VycmVudCYxKSxiLmZsYWdzfD0xMjgsbnVsbDtpZigwIT09KGMmYi5jaGlsZC5jaGlsZExhbmVzKSlyZXR1cm4gb2ooYSxiLGMpO0coTCxMLmN1cnJlbnQmMSk7YT1aaShhLGIsYyk7cmV0dXJuIG51bGwhPT1hP2Euc2libGluZzpudWxsfUcoTCxMLmN1cnJlbnQmMSk7YnJlYWs7Y2FzZSAxOTpkPTAhPT0oYyZcbmIuY2hpbGRMYW5lcyk7aWYoMCE9PShhLmZsYWdzJjEyOCkpe2lmKGQpcmV0dXJuIHhqKGEsYixjKTtiLmZsYWdzfD0xMjh9ZT1iLm1lbW9pemVkU3RhdGU7bnVsbCE9PWUmJihlLnJlbmRlcmluZz1udWxsLGUudGFpbD1udWxsLGUubGFzdEVmZmVjdD1udWxsKTtHKEwsTC5jdXJyZW50KTtpZihkKWJyZWFrO2Vsc2UgcmV0dXJuIG51bGw7Y2FzZSAyMjpjYXNlIDIzOnJldHVybiBiLmxhbmVzPTAsZGooYSxiLGMpfXJldHVybiBaaShhLGIsYyl9dmFyIHpqLEFqLEJqLENqO1xuemo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9Yi5jaGlsZDtudWxsIT09Yzspe2lmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKWEuYXBwZW5kQ2hpbGQoYy5zdGF0ZU5vZGUpO2Vsc2UgaWYoNCE9PWMudGFnJiZudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWIpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWIpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319O0FqPWZ1bmN0aW9uKCl7fTtcbkJqPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEubWVtb2l6ZWRQcm9wcztpZihlIT09ZCl7YT1iLnN0YXRlTm9kZTt4aCh1aC5jdXJyZW50KTt2YXIgZj1udWxsO3N3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjplPVlhKGEsZSk7ZD1ZYShhLGQpO2Y9W107YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmU9QSh7fSxlLHt2YWx1ZTp2b2lkIDB9KTtkPUEoe30sZCx7dmFsdWU6dm9pZCAwfSk7Zj1bXTticmVhaztjYXNlIFwidGV4dGFyZWFcIjplPWdiKGEsZSk7ZD1nYihhLGQpO2Y9W107YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5vbkNsaWNrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5vbkNsaWNrJiYoYS5vbmNsaWNrPUJmKX11YihjLGQpO3ZhciBnO2M9bnVsbDtmb3IobCBpbiBlKWlmKCFkLmhhc093blByb3BlcnR5KGwpJiZlLmhhc093blByb3BlcnR5KGwpJiZudWxsIT1lW2xdKWlmKFwic3R5bGVcIj09PWwpe3ZhciBoPWVbbF07Zm9yKGcgaW4gaCloLmhhc093blByb3BlcnR5KGcpJiZcbihjfHwoYz17fSksY1tnXT1cIlwiKX1lbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCYmXCJjaGlsZHJlblwiIT09bCYmXCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiZcImF1dG9Gb2N1c1wiIT09bCYmKGVhLmhhc093blByb3BlcnR5KGwpP2Z8fChmPVtdKTooZj1mfHxbXSkucHVzaChsLG51bGwpKTtmb3IobCBpbiBkKXt2YXIgaz1kW2xdO2g9bnVsbCE9ZT9lW2xdOnZvaWQgMDtpZihkLmhhc093blByb3BlcnR5KGwpJiZrIT09aCYmKG51bGwhPWt8fG51bGwhPWgpKWlmKFwic3R5bGVcIj09PWwpaWYoaCl7Zm9yKGcgaW4gaCkhaC5oYXNPd25Qcm9wZXJ0eShnKXx8ayYmay5oYXNPd25Qcm9wZXJ0eShnKXx8KGN8fChjPXt9KSxjW2ddPVwiXCIpO2ZvcihnIGluIGspay5oYXNPd25Qcm9wZXJ0eShnKSYmaFtnXSE9PWtbZ10mJihjfHwoYz17fSksY1tnXT1rW2ddKX1lbHNlIGN8fChmfHwoZj1bXSksZi5wdXNoKGwsXG5jKSksYz1rO2Vsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1sPyhrPWs/ay5fX2h0bWw6dm9pZCAwLGg9aD9oLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmaCE9PWsmJihmPWZ8fFtdKS5wdXNoKGwsaykpOlwiY2hpbGRyZW5cIj09PWw/XCJzdHJpbmdcIiE9PXR5cGVvZiBrJiZcIm51bWJlclwiIT09dHlwZW9mIGt8fChmPWZ8fFtdKS5wdXNoKGwsXCJcIitrKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09bCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWwmJihlYS5oYXNPd25Qcm9wZXJ0eShsKT8obnVsbCE9ayYmXCJvblNjcm9sbFwiPT09bCYmRChcInNjcm9sbFwiLGEpLGZ8fGg9PT1rfHwoZj1bXSkpOihmPWZ8fFtdKS5wdXNoKGwsaykpfWMmJihmPWZ8fFtdKS5wdXNoKFwic3R5bGVcIixjKTt2YXIgbD1mO2lmKGIudXBkYXRlUXVldWU9bCliLmZsYWdzfD00fX07Q2o9ZnVuY3Rpb24oYSxiLGMsZCl7YyE9PWQmJihiLmZsYWdzfD00KX07XG5mdW5jdGlvbiBEaihhLGIpe2lmKCFJKXN3aXRjaChhLnRhaWxNb2RlKXtjYXNlIFwiaGlkZGVuXCI6Yj1hLnRhaWw7Zm9yKHZhciBjPW51bGw7bnVsbCE9PWI7KW51bGwhPT1iLmFsdGVybmF0ZSYmKGM9YiksYj1iLnNpYmxpbmc7bnVsbD09PWM/YS50YWlsPW51bGw6Yy5zaWJsaW5nPW51bGw7YnJlYWs7Y2FzZSBcImNvbGxhcHNlZFwiOmM9YS50YWlsO2Zvcih2YXIgZD1udWxsO251bGwhPT1jOyludWxsIT09Yy5hbHRlcm5hdGUmJihkPWMpLGM9Yy5zaWJsaW5nO251bGw9PT1kP2J8fG51bGw9PT1hLnRhaWw/YS50YWlsPW51bGw6YS50YWlsLnNpYmxpbmc9bnVsbDpkLnNpYmxpbmc9bnVsbH19XG5mdW5jdGlvbiBTKGEpe3ZhciBiPW51bGwhPT1hLmFsdGVybmF0ZSYmYS5hbHRlcm5hdGUuY2hpbGQ9PT1hLmNoaWxkLGM9MCxkPTA7aWYoYilmb3IodmFyIGU9YS5jaGlsZDtudWxsIT09ZTspY3w9ZS5sYW5lc3xlLmNoaWxkTGFuZXMsZHw9ZS5zdWJ0cmVlRmxhZ3MmMTQ2ODAwNjQsZHw9ZS5mbGFncyYxNDY4MDA2NCxlLnJldHVybj1hLGU9ZS5zaWJsaW5nO2Vsc2UgZm9yKGU9YS5jaGlsZDtudWxsIT09ZTspY3w9ZS5sYW5lc3xlLmNoaWxkTGFuZXMsZHw9ZS5zdWJ0cmVlRmxhZ3MsZHw9ZS5mbGFncyxlLnJldHVybj1hLGU9ZS5zaWJsaW5nO2Euc3VidHJlZUZsYWdzfD1kO2EuY2hpbGRMYW5lcz1jO3JldHVybiBifVxuZnVuY3Rpb24gRWooYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzO3dnKGIpO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmNhc2UgMTY6Y2FzZSAxNTpjYXNlIDA6Y2FzZSAxMTpjYXNlIDc6Y2FzZSA4OmNhc2UgMTI6Y2FzZSA5OmNhc2UgMTQ6cmV0dXJuIFMoYiksbnVsbDtjYXNlIDE6cmV0dXJuIFpmKGIudHlwZSkmJiRmKCksUyhiKSxudWxsO2Nhc2UgMzpkPWIuc3RhdGVOb2RlO3poKCk7RShXZik7RShIKTtFaCgpO2QucGVuZGluZ0NvbnRleHQmJihkLmNvbnRleHQ9ZC5wZW5kaW5nQ29udGV4dCxkLnBlbmRpbmdDb250ZXh0PW51bGwpO2lmKG51bGw9PT1hfHxudWxsPT09YS5jaGlsZClHZyhiKT9iLmZsYWdzfD00Om51bGw9PT1hfHxhLm1lbW9pemVkU3RhdGUuaXNEZWh5ZHJhdGVkJiYwPT09KGIuZmxhZ3MmMjU2KXx8KGIuZmxhZ3N8PTEwMjQsbnVsbCE9PXpnJiYoRmooemcpLHpnPW51bGwpKTtBaihhLGIpO1MoYik7cmV0dXJuIG51bGw7Y2FzZSA1OkJoKGIpO3ZhciBlPXhoKHdoLmN1cnJlbnQpO1xuYz1iLnR5cGU7aWYobnVsbCE9PWEmJm51bGwhPWIuc3RhdGVOb2RlKUJqKGEsYixjLGQsZSksYS5yZWYhPT1iLnJlZiYmKGIuZmxhZ3N8PTUxMixiLmZsYWdzfD0yMDk3MTUyKTtlbHNle2lmKCFkKXtpZihudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IocCgxNjYpKTtTKGIpO3JldHVybiBudWxsfWE9eGgodWguY3VycmVudCk7aWYoR2coYikpe2Q9Yi5zdGF0ZU5vZGU7Yz1iLnR5cGU7dmFyIGY9Yi5tZW1vaXplZFByb3BzO2RbT2ZdPWI7ZFtQZl09ZjthPTAhPT0oYi5tb2RlJjEpO3N3aXRjaChjKXtjYXNlIFwiZGlhbG9nXCI6RChcImNhbmNlbFwiLGQpO0QoXCJjbG9zZVwiLGQpO2JyZWFrO2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RChcImxvYWRcIixkKTticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoZT0wO2U8bGYubGVuZ3RoO2UrKylEKGxmW2VdLGQpO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpEKFwiZXJyb3JcIixkKTticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpEKFwiZXJyb3JcIixcbmQpO0QoXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpEKFwidG9nZ2xlXCIsZCk7YnJlYWs7Y2FzZSBcImlucHV0XCI6WmEoZCxmKTtEKFwiaW52YWxpZFwiLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpkLl93cmFwcGVyU3RhdGU9e3dhc011bHRpcGxlOiEhZi5tdWx0aXBsZX07RChcImludmFsaWRcIixkKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpoYihkLGYpLEQoXCJpbnZhbGlkXCIsZCl9dWIoYyxmKTtlPW51bGw7Zm9yKHZhciBnIGluIGYpaWYoZi5oYXNPd25Qcm9wZXJ0eShnKSl7dmFyIGg9ZltnXTtcImNoaWxkcmVuXCI9PT1nP1wic3RyaW5nXCI9PT10eXBlb2YgaD9kLnRleHRDb250ZW50IT09aCYmKCEwIT09Zi5zdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcmJkFmKGQudGV4dENvbnRlbnQsaCxhKSxlPVtcImNoaWxkcmVuXCIsaF0pOlwibnVtYmVyXCI9PT10eXBlb2YgaCYmZC50ZXh0Q29udGVudCE9PVwiXCIraCYmKCEwIT09Zi5zdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcmJkFmKGQudGV4dENvbnRlbnQsXG5oLGEpLGU9W1wiY2hpbGRyZW5cIixcIlwiK2hdKTplYS5oYXNPd25Qcm9wZXJ0eShnKSYmbnVsbCE9aCYmXCJvblNjcm9sbFwiPT09ZyYmRChcInNjcm9sbFwiLGQpfXN3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpWYShkKTtkYihkLGYsITApO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlZhKGQpO2piKGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpjYXNlIFwib3B0aW9uXCI6YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5vbkNsaWNrJiYoZC5vbmNsaWNrPUJmKX1kPWU7Yi51cGRhdGVRdWV1ZT1kO251bGwhPT1kJiYoYi5mbGFnc3w9NCl9ZWxzZXtnPTk9PT1lLm5vZGVUeXBlP2U6ZS5vd25lckRvY3VtZW50O1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YSYmKGE9a2IoYykpO1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YT9cInNjcmlwdFwiPT09Yz8oYT1nLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYS5pbm5lckhUTUw9XCI8c2NyaXB0PlxceDNjL3NjcmlwdD5cIixhPWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKSk6XG5cInN0cmluZ1wiPT09dHlwZW9mIGQuaXM/YT1nLmNyZWF0ZUVsZW1lbnQoYyx7aXM6ZC5pc30pOihhPWcuY3JlYXRlRWxlbWVudChjKSxcInNlbGVjdFwiPT09YyYmKGc9YSxkLm11bHRpcGxlP2cubXVsdGlwbGU9ITA6ZC5zaXplJiYoZy5zaXplPWQuc2l6ZSkpKTphPWcuY3JlYXRlRWxlbWVudE5TKGEsYyk7YVtPZl09YjthW1BmXT1kO3pqKGEsYiwhMSwhMSk7Yi5zdGF0ZU5vZGU9YTthOntnPXZiKGMsZCk7c3dpdGNoKGMpe2Nhc2UgXCJkaWFsb2dcIjpEKFwiY2FuY2VsXCIsYSk7RChcImNsb3NlXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RChcImxvYWRcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGU9MDtlPGxmLmxlbmd0aDtlKyspRChsZltlXSxhKTtlPWQ7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkQoXCJlcnJvclwiLGEpO2U9ZDticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpEKFwiZXJyb3JcIixcbmEpO0QoXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RChcInRvZ2dsZVwiLGEpO2U9ZDticmVhaztjYXNlIFwiaW5wdXRcIjpaYShhLGQpO2U9WWEoYSxkKTtEKFwiaW52YWxpZFwiLGEpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjplPWQ7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmEuX3dyYXBwZXJTdGF0ZT17d2FzTXVsdGlwbGU6ISFkLm11bHRpcGxlfTtlPUEoe30sZCx7dmFsdWU6dm9pZCAwfSk7RChcImludmFsaWRcIixhKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpoYihhLGQpO2U9Z2IoYSxkKTtEKFwiaW52YWxpZFwiLGEpO2JyZWFrO2RlZmF1bHQ6ZT1kfXViKGMsZSk7aD1lO2ZvcihmIGluIGgpaWYoaC5oYXNPd25Qcm9wZXJ0eShmKSl7dmFyIGs9aFtmXTtcInN0eWxlXCI9PT1mP3NiKGEsayk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zj8oaz1rP2suX19odG1sOnZvaWQgMCxudWxsIT1rJiZuYihhLGspKTpcImNoaWxkcmVuXCI9PT1mP1wic3RyaW5nXCI9PT10eXBlb2Ygaz8oXCJ0ZXh0YXJlYVwiIT09XG5jfHxcIlwiIT09aykmJm9iKGEsayk6XCJudW1iZXJcIj09PXR5cGVvZiBrJiZvYihhLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWYmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1mJiZcImF1dG9Gb2N1c1wiIT09ZiYmKGVhLmhhc093blByb3BlcnR5KGYpP251bGwhPWsmJlwib25TY3JvbGxcIj09PWYmJkQoXCJzY3JvbGxcIixhKTpudWxsIT1rJiZ0YShhLGYsayxnKSl9c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOlZhKGEpO2RiKGEsZCwhMSk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6VmEoYSk7amIoYSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOm51bGwhPWQudmFsdWUmJmEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiK1NhKGQudmFsdWUpKTticmVhaztjYXNlIFwic2VsZWN0XCI6YS5tdWx0aXBsZT0hIWQubXVsdGlwbGU7Zj1kLnZhbHVlO251bGwhPWY/ZmIoYSwhIWQubXVsdGlwbGUsZiwhMSk6bnVsbCE9ZC5kZWZhdWx0VmFsdWUmJmZiKGEsISFkLm11bHRpcGxlLGQuZGVmYXVsdFZhbHVlLFxuITApO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGUub25DbGljayYmKGEub25jbGljaz1CZil9c3dpdGNoKGMpe2Nhc2UgXCJidXR0b25cIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwic2VsZWN0XCI6Y2FzZSBcInRleHRhcmVhXCI6ZD0hIWQuYXV0b0ZvY3VzO2JyZWFrIGE7Y2FzZSBcImltZ1wiOmQ9ITA7YnJlYWsgYTtkZWZhdWx0OmQ9ITF9fWQmJihiLmZsYWdzfD00KX1udWxsIT09Yi5yZWYmJihiLmZsYWdzfD01MTIsYi5mbGFnc3w9MjA5NzE1Mil9UyhiKTtyZXR1cm4gbnVsbDtjYXNlIDY6aWYoYSYmbnVsbCE9Yi5zdGF0ZU5vZGUpQ2ooYSxiLGEubWVtb2l6ZWRQcm9wcyxkKTtlbHNle2lmKFwic3RyaW5nXCIhPT10eXBlb2YgZCYmbnVsbD09PWIuc3RhdGVOb2RlKXRocm93IEVycm9yKHAoMTY2KSk7Yz14aCh3aC5jdXJyZW50KTt4aCh1aC5jdXJyZW50KTtpZihHZyhiKSl7ZD1iLnN0YXRlTm9kZTtjPWIubWVtb2l6ZWRQcm9wcztkW09mXT1iO2lmKGY9ZC5ub2RlVmFsdWUhPT1jKWlmKGE9XG54ZyxudWxsIT09YSlzd2l0Y2goYS50YWcpe2Nhc2UgMzpBZihkLm5vZGVWYWx1ZSxjLDAhPT0oYS5tb2RlJjEpKTticmVhaztjYXNlIDU6ITAhPT1hLm1lbW9pemVkUHJvcHMuc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJiZBZihkLm5vZGVWYWx1ZSxjLDAhPT0oYS5tb2RlJjEpKX1mJiYoYi5mbGFnc3w9NCl9ZWxzZSBkPSg5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudCkuY3JlYXRlVGV4dE5vZGUoZCksZFtPZl09YixiLnN0YXRlTm9kZT1kfVMoYik7cmV0dXJuIG51bGw7Y2FzZSAxMzpFKEwpO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGw9PT1hfHxudWxsIT09YS5tZW1vaXplZFN0YXRlJiZudWxsIT09YS5tZW1vaXplZFN0YXRlLmRlaHlkcmF0ZWQpe2lmKEkmJm51bGwhPT15ZyYmMCE9PShiLm1vZGUmMSkmJjA9PT0oYi5mbGFncyYxMjgpKUhnKCksSWcoKSxiLmZsYWdzfD05ODU2MCxmPSExO2Vsc2UgaWYoZj1HZyhiKSxudWxsIT09ZCYmbnVsbCE9PWQuZGVoeWRyYXRlZCl7aWYobnVsbD09PVxuYSl7aWYoIWYpdGhyb3cgRXJyb3IocCgzMTgpKTtmPWIubWVtb2l6ZWRTdGF0ZTtmPW51bGwhPT1mP2YuZGVoeWRyYXRlZDpudWxsO2lmKCFmKXRocm93IEVycm9yKHAoMzE3KSk7ZltPZl09Yn1lbHNlIElnKCksMD09PShiLmZsYWdzJjEyOCkmJihiLm1lbW9pemVkU3RhdGU9bnVsbCksYi5mbGFnc3w9NDtTKGIpO2Y9ITF9ZWxzZSBudWxsIT09emcmJihGaih6Zyksemc9bnVsbCksZj0hMDtpZighZilyZXR1cm4gYi5mbGFncyY2NTUzNj9iOm51bGx9aWYoMCE9PShiLmZsYWdzJjEyOCkpcmV0dXJuIGIubGFuZXM9YyxiO2Q9bnVsbCE9PWQ7ZCE9PShudWxsIT09YSYmbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSkmJmQmJihiLmNoaWxkLmZsYWdzfD04MTkyLDAhPT0oYi5tb2RlJjEpJiYobnVsbD09PWF8fDAhPT0oTC5jdXJyZW50JjEpPzA9PT1UJiYoVD0zKTp0aigpKSk7bnVsbCE9PWIudXBkYXRlUXVldWUmJihiLmZsYWdzfD00KTtTKGIpO3JldHVybiBudWxsO2Nhc2UgNDpyZXR1cm4gemgoKSxcbkFqKGEsYiksbnVsbD09PWEmJnNmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLFMoYiksbnVsbDtjYXNlIDEwOnJldHVybiBhaChiLnR5cGUuX2NvbnRleHQpLFMoYiksbnVsbDtjYXNlIDE3OnJldHVybiBaZihiLnR5cGUpJiYkZigpLFMoYiksbnVsbDtjYXNlIDE5OkUoTCk7Zj1iLm1lbW9pemVkU3RhdGU7aWYobnVsbD09PWYpcmV0dXJuIFMoYiksbnVsbDtkPTAhPT0oYi5mbGFncyYxMjgpO2c9Zi5yZW5kZXJpbmc7aWYobnVsbD09PWcpaWYoZClEaihmLCExKTtlbHNle2lmKDAhPT1UfHxudWxsIT09YSYmMCE9PShhLmZsYWdzJjEyOCkpZm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2c9Q2goYSk7aWYobnVsbCE9PWcpe2IuZmxhZ3N8PTEyODtEaihmLCExKTtkPWcudXBkYXRlUXVldWU7bnVsbCE9PWQmJihiLnVwZGF0ZVF1ZXVlPWQsYi5mbGFnc3w9NCk7Yi5zdWJ0cmVlRmxhZ3M9MDtkPWM7Zm9yKGM9Yi5jaGlsZDtudWxsIT09YzspZj1jLGE9ZCxmLmZsYWdzJj0xNDY4MDA2Nixcbmc9Zi5hbHRlcm5hdGUsbnVsbD09PWc/KGYuY2hpbGRMYW5lcz0wLGYubGFuZXM9YSxmLmNoaWxkPW51bGwsZi5zdWJ0cmVlRmxhZ3M9MCxmLm1lbW9pemVkUHJvcHM9bnVsbCxmLm1lbW9pemVkU3RhdGU9bnVsbCxmLnVwZGF0ZVF1ZXVlPW51bGwsZi5kZXBlbmRlbmNpZXM9bnVsbCxmLnN0YXRlTm9kZT1udWxsKTooZi5jaGlsZExhbmVzPWcuY2hpbGRMYW5lcyxmLmxhbmVzPWcubGFuZXMsZi5jaGlsZD1nLmNoaWxkLGYuc3VidHJlZUZsYWdzPTAsZi5kZWxldGlvbnM9bnVsbCxmLm1lbW9pemVkUHJvcHM9Zy5tZW1vaXplZFByb3BzLGYubWVtb2l6ZWRTdGF0ZT1nLm1lbW9pemVkU3RhdGUsZi51cGRhdGVRdWV1ZT1nLnVwZGF0ZVF1ZXVlLGYudHlwZT1nLnR5cGUsYT1nLmRlcGVuZGVuY2llcyxmLmRlcGVuZGVuY2llcz1udWxsPT09YT9udWxsOntsYW5lczphLmxhbmVzLGZpcnN0Q29udGV4dDphLmZpcnN0Q29udGV4dH0pLGM9Yy5zaWJsaW5nO0coTCxMLmN1cnJlbnQmMXwyKTtyZXR1cm4gYi5jaGlsZH1hPVxuYS5zaWJsaW5nfW51bGwhPT1mLnRhaWwmJkIoKT5HaiYmKGIuZmxhZ3N8PTEyOCxkPSEwLERqKGYsITEpLGIubGFuZXM9NDE5NDMwNCl9ZWxzZXtpZighZClpZihhPUNoKGcpLG51bGwhPT1hKXtpZihiLmZsYWdzfD0xMjgsZD0hMCxjPWEudXBkYXRlUXVldWUsbnVsbCE9PWMmJihiLnVwZGF0ZVF1ZXVlPWMsYi5mbGFnc3w9NCksRGooZiwhMCksbnVsbD09PWYudGFpbCYmXCJoaWRkZW5cIj09PWYudGFpbE1vZGUmJiFnLmFsdGVybmF0ZSYmIUkpcmV0dXJuIFMoYiksbnVsbH1lbHNlIDIqQigpLWYucmVuZGVyaW5nU3RhcnRUaW1lPkdqJiYxMDczNzQxODI0IT09YyYmKGIuZmxhZ3N8PTEyOCxkPSEwLERqKGYsITEpLGIubGFuZXM9NDE5NDMwNCk7Zi5pc0JhY2t3YXJkcz8oZy5zaWJsaW5nPWIuY2hpbGQsYi5jaGlsZD1nKTooYz1mLmxhc3QsbnVsbCE9PWM/Yy5zaWJsaW5nPWc6Yi5jaGlsZD1nLGYubGFzdD1nKX1pZihudWxsIT09Zi50YWlsKXJldHVybiBiPWYudGFpbCxmLnJlbmRlcmluZz1cbmIsZi50YWlsPWIuc2libGluZyxmLnJlbmRlcmluZ1N0YXJ0VGltZT1CKCksYi5zaWJsaW5nPW51bGwsYz1MLmN1cnJlbnQsRyhMLGQ/YyYxfDI6YyYxKSxiO1MoYik7cmV0dXJuIG51bGw7Y2FzZSAyMjpjYXNlIDIzOnJldHVybiBIaigpLGQ9bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSxudWxsIT09YSYmbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSE9PWQmJihiLmZsYWdzfD04MTkyKSxkJiYwIT09KGIubW9kZSYxKT8wIT09KGZqJjEwNzM3NDE4MjQpJiYoUyhiKSxiLnN1YnRyZWVGbGFncyY2JiYoYi5mbGFnc3w9ODE5MikpOlMoYiksbnVsbDtjYXNlIDI0OnJldHVybiBudWxsO2Nhc2UgMjU6cmV0dXJuIG51bGx9dGhyb3cgRXJyb3IocCgxNTYsYi50YWcpKTt9XG5mdW5jdGlvbiBJaihhLGIpe3dnKGIpO3N3aXRjaChiLnRhZyl7Y2FzZSAxOnJldHVybiBaZihiLnR5cGUpJiYkZigpLGE9Yi5mbGFncyxhJjY1NTM2PyhiLmZsYWdzPWEmLTY1NTM3fDEyOCxiKTpudWxsO2Nhc2UgMzpyZXR1cm4gemgoKSxFKFdmKSxFKEgpLEVoKCksYT1iLmZsYWdzLDAhPT0oYSY2NTUzNikmJjA9PT0oYSYxMjgpPyhiLmZsYWdzPWEmLTY1NTM3fDEyOCxiKTpudWxsO2Nhc2UgNTpyZXR1cm4gQmgoYiksbnVsbDtjYXNlIDEzOkUoTCk7YT1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWEmJm51bGwhPT1hLmRlaHlkcmF0ZWQpe2lmKG51bGw9PT1iLmFsdGVybmF0ZSl0aHJvdyBFcnJvcihwKDM0MCkpO0lnKCl9YT1iLmZsYWdzO3JldHVybiBhJjY1NTM2PyhiLmZsYWdzPWEmLTY1NTM3fDEyOCxiKTpudWxsO2Nhc2UgMTk6cmV0dXJuIEUoTCksbnVsbDtjYXNlIDQ6cmV0dXJuIHpoKCksbnVsbDtjYXNlIDEwOnJldHVybiBhaChiLnR5cGUuX2NvbnRleHQpLG51bGw7Y2FzZSAyMjpjYXNlIDIzOnJldHVybiBIaigpLFxubnVsbDtjYXNlIDI0OnJldHVybiBudWxsO2RlZmF1bHQ6cmV0dXJuIG51bGx9fXZhciBKaj0hMSxVPSExLEtqPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrU2V0P1dlYWtTZXQ6U2V0LFY9bnVsbDtmdW5jdGlvbiBMaihhLGIpe3ZhciBjPWEucmVmO2lmKG51bGwhPT1jKWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjKXRyeXtjKG51bGwpfWNhdGNoKGQpe1coYSxiLGQpfWVsc2UgYy5jdXJyZW50PW51bGx9ZnVuY3Rpb24gTWooYSxiLGMpe3RyeXtjKCl9Y2F0Y2goZCl7VyhhLGIsZCl9fXZhciBOaj0hMTtcbmZ1bmN0aW9uIE9qKGEsYil7Q2Y9ZGQ7YT1NZSgpO2lmKE5lKGEpKXtpZihcInNlbGVjdGlvblN0YXJ0XCJpbiBhKXZhciBjPXtzdGFydDphLnNlbGVjdGlvblN0YXJ0LGVuZDphLnNlbGVjdGlvbkVuZH07ZWxzZSBhOntjPShjPWEub3duZXJEb2N1bWVudCkmJmMuZGVmYXVsdFZpZXd8fHdpbmRvdzt2YXIgZD1jLmdldFNlbGVjdGlvbiYmYy5nZXRTZWxlY3Rpb24oKTtpZihkJiYwIT09ZC5yYW5nZUNvdW50KXtjPWQuYW5jaG9yTm9kZTt2YXIgZT1kLmFuY2hvck9mZnNldCxmPWQuZm9jdXNOb2RlO2Q9ZC5mb2N1c09mZnNldDt0cnl7Yy5ub2RlVHlwZSxmLm5vZGVUeXBlfWNhdGNoKEYpe2M9bnVsbDticmVhayBhfXZhciBnPTAsaD0tMSxrPS0xLGw9MCxtPTAscT1hLHI9bnVsbDtiOmZvcig7Oyl7Zm9yKHZhciB5Ozspe3EhPT1jfHwwIT09ZSYmMyE9PXEubm9kZVR5cGV8fChoPWcrZSk7cSE9PWZ8fDAhPT1kJiYzIT09cS5ub2RlVHlwZXx8KGs9ZytkKTszPT09cS5ub2RlVHlwZSYmKGcrPVxucS5ub2RlVmFsdWUubGVuZ3RoKTtpZihudWxsPT09KHk9cS5maXJzdENoaWxkKSlicmVhaztyPXE7cT15fWZvcig7Oyl7aWYocT09PWEpYnJlYWsgYjtyPT09YyYmKytsPT09ZSYmKGg9Zyk7cj09PWYmJisrbT09PWQmJihrPWcpO2lmKG51bGwhPT0oeT1xLm5leHRTaWJsaW5nKSlicmVhaztxPXI7cj1xLnBhcmVudE5vZGV9cT15fWM9LTE9PT1ofHwtMT09PWs/bnVsbDp7c3RhcnQ6aCxlbmQ6a319ZWxzZSBjPW51bGx9Yz1jfHx7c3RhcnQ6MCxlbmQ6MH19ZWxzZSBjPW51bGw7RGY9e2ZvY3VzZWRFbGVtOmEsc2VsZWN0aW9uUmFuZ2U6Y307ZGQ9ITE7Zm9yKFY9YjtudWxsIT09VjspaWYoYj1WLGE9Yi5jaGlsZCwwIT09KGIuc3VidHJlZUZsYWdzJjEwMjgpJiZudWxsIT09YSlhLnJldHVybj1iLFY9YTtlbHNlIGZvcig7bnVsbCE9PVY7KXtiPVY7dHJ5e3ZhciBuPWIuYWx0ZXJuYXRlO2lmKDAhPT0oYi5mbGFncyYxMDI0KSlzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6YnJlYWs7XG5jYXNlIDE6aWYobnVsbCE9PW4pe3ZhciB0PW4ubWVtb2l6ZWRQcm9wcyxKPW4ubWVtb2l6ZWRTdGF0ZSx4PWIuc3RhdGVOb2RlLHc9eC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShiLmVsZW1lbnRUeXBlPT09Yi50eXBlP3Q6Q2koYi50eXBlLHQpLEopO3guX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGU9d31icmVhaztjYXNlIDM6dmFyIHU9Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbzsxPT09dS5ub2RlVHlwZT91LnRleHRDb250ZW50PVwiXCI6OT09PXUubm9kZVR5cGUmJnUuZG9jdW1lbnRFbGVtZW50JiZ1LnJlbW92ZUNoaWxkKHUuZG9jdW1lbnRFbGVtZW50KTticmVhaztjYXNlIDU6Y2FzZSA2OmNhc2UgNDpjYXNlIDE3OmJyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IocCgxNjMpKTt9fWNhdGNoKEYpe1coYixiLnJldHVybixGKX1hPWIuc2libGluZztpZihudWxsIT09YSl7YS5yZXR1cm49Yi5yZXR1cm47Vj1hO2JyZWFrfVY9Yi5yZXR1cm59bj1OajtOaj0hMTtyZXR1cm4gbn1cbmZ1bmN0aW9uIFBqKGEsYixjKXt2YXIgZD1iLnVwZGF0ZVF1ZXVlO2Q9bnVsbCE9PWQ/ZC5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWQpe3ZhciBlPWQ9ZC5uZXh0O2Rve2lmKChlLnRhZyZhKT09PWEpe3ZhciBmPWUuZGVzdHJveTtlLmRlc3Ryb3k9dm9pZCAwO3ZvaWQgMCE9PWYmJk1qKGIsYyxmKX1lPWUubmV4dH13aGlsZShlIT09ZCl9fWZ1bmN0aW9uIFFqKGEsYil7Yj1iLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe3ZhciBjPWI9Yi5uZXh0O2Rve2lmKChjLnRhZyZhKT09PWEpe3ZhciBkPWMuY3JlYXRlO2MuZGVzdHJveT1kKCl9Yz1jLm5leHR9d2hpbGUoYyE9PWIpfX1mdW5jdGlvbiBSaihhKXt2YXIgYj1hLnJlZjtpZihudWxsIT09Yil7dmFyIGM9YS5zdGF0ZU5vZGU7c3dpdGNoKGEudGFnKXtjYXNlIDU6YT1jO2JyZWFrO2RlZmF1bHQ6YT1jfVwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IoYSk6Yi5jdXJyZW50PWF9fVxuZnVuY3Rpb24gU2ooYSl7dmFyIGI9YS5hbHRlcm5hdGU7bnVsbCE9PWImJihhLmFsdGVybmF0ZT1udWxsLFNqKGIpKTthLmNoaWxkPW51bGw7YS5kZWxldGlvbnM9bnVsbDthLnNpYmxpbmc9bnVsbDs1PT09YS50YWcmJihiPWEuc3RhdGVOb2RlLG51bGwhPT1iJiYoZGVsZXRlIGJbT2ZdLGRlbGV0ZSBiW1BmXSxkZWxldGUgYltvZl0sZGVsZXRlIGJbUWZdLGRlbGV0ZSBiW1JmXSkpO2Euc3RhdGVOb2RlPW51bGw7YS5yZXR1cm49bnVsbDthLmRlcGVuZGVuY2llcz1udWxsO2EubWVtb2l6ZWRQcm9wcz1udWxsO2EubWVtb2l6ZWRTdGF0ZT1udWxsO2EucGVuZGluZ1Byb3BzPW51bGw7YS5zdGF0ZU5vZGU9bnVsbDthLnVwZGF0ZVF1ZXVlPW51bGx9ZnVuY3Rpb24gVGooYSl7cmV0dXJuIDU9PT1hLnRhZ3x8Mz09PWEudGFnfHw0PT09YS50YWd9XG5mdW5jdGlvbiBVaihhKXthOmZvcig7Oyl7Zm9yKDtudWxsPT09YS5zaWJsaW5nOyl7aWYobnVsbD09PWEucmV0dXJufHxUaihhLnJldHVybikpcmV0dXJuIG51bGw7YT1hLnJldHVybn1hLnNpYmxpbmcucmV0dXJuPWEucmV0dXJuO2ZvcihhPWEuc2libGluZzs1IT09YS50YWcmJjYhPT1hLnRhZyYmMTghPT1hLnRhZzspe2lmKGEuZmxhZ3MmMiljb250aW51ZSBhO2lmKG51bGw9PT1hLmNoaWxkfHw0PT09YS50YWcpY29udGludWUgYTtlbHNlIGEuY2hpbGQucmV0dXJuPWEsYT1hLmNoaWxkfWlmKCEoYS5mbGFncyYyKSlyZXR1cm4gYS5zdGF0ZU5vZGV9fVxuZnVuY3Rpb24gVmooYSxiLGMpe3ZhciBkPWEudGFnO2lmKDU9PT1kfHw2PT09ZClhPWEuc3RhdGVOb2RlLGI/OD09PWMubm9kZVR5cGU/Yy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLGIpOmMuaW5zZXJ0QmVmb3JlKGEsYik6KDg9PT1jLm5vZGVUeXBlPyhiPWMucGFyZW50Tm9kZSxiLmluc2VydEJlZm9yZShhLGMpKTooYj1jLGIuYXBwZW5kQ2hpbGQoYSkpLGM9Yy5fcmVhY3RSb290Q29udGFpbmVyLG51bGwhPT1jJiZ2b2lkIDAhPT1jfHxudWxsIT09Yi5vbmNsaWNrfHwoYi5vbmNsaWNrPUJmKSk7ZWxzZSBpZig0IT09ZCYmKGE9YS5jaGlsZCxudWxsIT09YSkpZm9yKFZqKGEsYixjKSxhPWEuc2libGluZztudWxsIT09YTspVmooYSxiLGMpLGE9YS5zaWJsaW5nfVxuZnVuY3Rpb24gV2ooYSxiLGMpe3ZhciBkPWEudGFnO2lmKDU9PT1kfHw2PT09ZClhPWEuc3RhdGVOb2RlLGI/Yy5pbnNlcnRCZWZvcmUoYSxiKTpjLmFwcGVuZENoaWxkKGEpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihXaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KVdqKGEsYixjKSxhPWEuc2libGluZ312YXIgWD1udWxsLFhqPSExO2Z1bmN0aW9uIFlqKGEsYixjKXtmb3IoYz1jLmNoaWxkO251bGwhPT1jOylaaihhLGIsYyksYz1jLnNpYmxpbmd9XG5mdW5jdGlvbiBaaihhLGIsYyl7aWYobGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBsYy5vbkNvbW1pdEZpYmVyVW5tb3VudCl0cnl7bGMub25Db21taXRGaWJlclVubW91bnQoa2MsYyl9Y2F0Y2goaCl7fXN3aXRjaChjLnRhZyl7Y2FzZSA1OlV8fExqKGMsYik7Y2FzZSA2OnZhciBkPVgsZT1YajtYPW51bGw7WWooYSxiLGMpO1g9ZDtYaj1lO251bGwhPT1YJiYoWGo/KGE9WCxjPWMuc3RhdGVOb2RlLDg9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKTphLnJlbW92ZUNoaWxkKGMpKTpYLnJlbW92ZUNoaWxkKGMuc3RhdGVOb2RlKSk7YnJlYWs7Y2FzZSAxODpudWxsIT09WCYmKFhqPyhhPVgsYz1jLnN0YXRlTm9kZSw4PT09YS5ub2RlVHlwZT9LZihhLnBhcmVudE5vZGUsYyk6MT09PWEubm9kZVR5cGUmJktmKGEsYyksYmQoYSkpOktmKFgsYy5zdGF0ZU5vZGUpKTticmVhaztjYXNlIDQ6ZD1YO2U9WGo7WD1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO1hqPSEwO1xuWWooYSxiLGMpO1g9ZDtYaj1lO2JyZWFrO2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTppZighVSYmKGQ9Yy51cGRhdGVRdWV1ZSxudWxsIT09ZCYmKGQ9ZC5sYXN0RWZmZWN0LG51bGwhPT1kKSkpe2U9ZD1kLm5leHQ7ZG97dmFyIGY9ZSxnPWYuZGVzdHJveTtmPWYudGFnO3ZvaWQgMCE9PWcmJigwIT09KGYmMik/TWooYyxiLGcpOjAhPT0oZiY0KSYmTWooYyxiLGcpKTtlPWUubmV4dH13aGlsZShlIT09ZCl9WWooYSxiLGMpO2JyZWFrO2Nhc2UgMTppZighVSYmKExqKGMsYiksZD1jLnN0YXRlTm9kZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnRXaWxsVW5tb3VudCkpdHJ5e2QucHJvcHM9Yy5tZW1vaXplZFByb3BzLGQuc3RhdGU9Yy5tZW1vaXplZFN0YXRlLGQuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChoKXtXKGMsYixoKX1ZaihhLGIsYyk7YnJlYWs7Y2FzZSAyMTpZaihhLGIsYyk7YnJlYWs7Y2FzZSAyMjpjLm1vZGUmMT8oVT0oZD1VKXx8bnVsbCE9PVxuYy5tZW1vaXplZFN0YXRlLFlqKGEsYixjKSxVPWQpOllqKGEsYixjKTticmVhaztkZWZhdWx0OllqKGEsYixjKX19ZnVuY3Rpb24gYWsoYSl7dmFyIGI9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YS51cGRhdGVRdWV1ZT1udWxsO3ZhciBjPWEuc3RhdGVOb2RlO251bGw9PT1jJiYoYz1hLnN0YXRlTm9kZT1uZXcgS2opO2IuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD1iay5iaW5kKG51bGwsYSxiKTtjLmhhcyhiKXx8KGMuYWRkKGIpLGIudGhlbihkLGQpKX0pfX1cbmZ1bmN0aW9uIGNrKGEsYil7dmFyIGM9Yi5kZWxldGlvbnM7aWYobnVsbCE9PWMpZm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF07dHJ5e3ZhciBmPWEsZz1iLGg9ZzthOmZvcig7bnVsbCE9PWg7KXtzd2l0Y2goaC50YWcpe2Nhc2UgNTpYPWguc3RhdGVOb2RlO1hqPSExO2JyZWFrIGE7Y2FzZSAzOlg9aC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztYaj0hMDticmVhayBhO2Nhc2UgNDpYPWguc3RhdGVOb2RlLmNvbnRhaW5lckluZm87WGo9ITA7YnJlYWsgYX1oPWgucmV0dXJufWlmKG51bGw9PT1YKXRocm93IEVycm9yKHAoMTYwKSk7WmooZixnLGUpO1g9bnVsbDtYaj0hMTt2YXIgaz1lLmFsdGVybmF0ZTtudWxsIT09ayYmKGsucmV0dXJuPW51bGwpO2UucmV0dXJuPW51bGx9Y2F0Y2gobCl7VyhlLGIsbCl9fWlmKGIuc3VidHJlZUZsYWdzJjEyODU0KWZvcihiPWIuY2hpbGQ7bnVsbCE9PWI7KWRrKGIsYSksYj1iLnNpYmxpbmd9XG5mdW5jdGlvbiBkayhhLGIpe3ZhciBjPWEuYWx0ZXJuYXRlLGQ9YS5mbGFncztzd2l0Y2goYS50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpjayhiLGEpO2VrKGEpO2lmKGQmNCl7dHJ5e1BqKDMsYSxhLnJldHVybiksUWooMyxhKX1jYXRjaCh0KXtXKGEsYS5yZXR1cm4sdCl9dHJ5e1BqKDUsYSxhLnJldHVybil9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfX1icmVhaztjYXNlIDE6Y2soYixhKTtlayhhKTtkJjUxMiYmbnVsbCE9PWMmJkxqKGMsYy5yZXR1cm4pO2JyZWFrO2Nhc2UgNTpjayhiLGEpO2VrKGEpO2QmNTEyJiZudWxsIT09YyYmTGooYyxjLnJldHVybik7aWYoYS5mbGFncyYzMil7dmFyIGU9YS5zdGF0ZU5vZGU7dHJ5e29iKGUsXCJcIil9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfX1pZihkJjQmJihlPWEuc3RhdGVOb2RlLG51bGwhPWUpKXt2YXIgZj1hLm1lbW9pemVkUHJvcHMsZz1udWxsIT09Yz9jLm1lbW9pemVkUHJvcHM6ZixoPWEudHlwZSxrPWEudXBkYXRlUXVldWU7XG5hLnVwZGF0ZVF1ZXVlPW51bGw7aWYobnVsbCE9PWspdHJ5e1wiaW5wdXRcIj09PWgmJlwicmFkaW9cIj09PWYudHlwZSYmbnVsbCE9Zi5uYW1lJiZhYihlLGYpO3ZiKGgsZyk7dmFyIGw9dmIoaCxmKTtmb3IoZz0wO2c8ay5sZW5ndGg7Zys9Mil7dmFyIG09a1tnXSxxPWtbZysxXTtcInN0eWxlXCI9PT1tP3NiKGUscSk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09bT9uYihlLHEpOlwiY2hpbGRyZW5cIj09PW0/b2IoZSxxKTp0YShlLG0scSxsKX1zd2l0Y2goaCl7Y2FzZSBcImlucHV0XCI6YmIoZSxmKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihlLGYpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjp2YXIgcj1lLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU7ZS5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlPSEhZi5tdWx0aXBsZTt2YXIgeT1mLnZhbHVlO251bGwhPXk/ZmIoZSwhIWYubXVsdGlwbGUseSwhMSk6ciE9PSEhZi5tdWx0aXBsZSYmKG51bGwhPWYuZGVmYXVsdFZhbHVlP2ZiKGUsISFmLm11bHRpcGxlLFxuZi5kZWZhdWx0VmFsdWUsITApOmZiKGUsISFmLm11bHRpcGxlLGYubXVsdGlwbGU/W106XCJcIiwhMSkpfWVbUGZdPWZ9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfX1icmVhaztjYXNlIDY6Y2soYixhKTtlayhhKTtpZihkJjQpe2lmKG51bGw9PT1hLnN0YXRlTm9kZSl0aHJvdyBFcnJvcihwKDE2MikpO2U9YS5zdGF0ZU5vZGU7Zj1hLm1lbW9pemVkUHJvcHM7dHJ5e2Uubm9kZVZhbHVlPWZ9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfX1icmVhaztjYXNlIDM6Y2soYixhKTtlayhhKTtpZihkJjQmJm51bGwhPT1jJiZjLm1lbW9pemVkU3RhdGUuaXNEZWh5ZHJhdGVkKXRyeXtiZChiLmNvbnRhaW5lckluZm8pfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX1icmVhaztjYXNlIDQ6Y2soYixhKTtlayhhKTticmVhaztjYXNlIDEzOmNrKGIsYSk7ZWsoYSk7ZT1hLmNoaWxkO2UuZmxhZ3MmODE5MiYmKGY9bnVsbCE9PWUubWVtb2l6ZWRTdGF0ZSxlLnN0YXRlTm9kZS5pc0hpZGRlbj1mLCFmfHxcbm51bGwhPT1lLmFsdGVybmF0ZSYmbnVsbCE9PWUuYWx0ZXJuYXRlLm1lbW9pemVkU3RhdGV8fChmaz1CKCkpKTtkJjQmJmFrKGEpO2JyZWFrO2Nhc2UgMjI6bT1udWxsIT09YyYmbnVsbCE9PWMubWVtb2l6ZWRTdGF0ZTthLm1vZGUmMT8oVT0obD1VKXx8bSxjayhiLGEpLFU9bCk6Y2soYixhKTtlayhhKTtpZihkJjgxOTIpe2w9bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZTtpZigoYS5zdGF0ZU5vZGUuaXNIaWRkZW49bCkmJiFtJiYwIT09KGEubW9kZSYxKSlmb3IoVj1hLG09YS5jaGlsZDtudWxsIT09bTspe2ZvcihxPVY9bTtudWxsIT09Vjspe3I9Vjt5PXIuY2hpbGQ7c3dpdGNoKHIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6UGooNCxyLHIucmV0dXJuKTticmVhaztjYXNlIDE6TGoocixyLnJldHVybik7dmFyIG49ci5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIG4uY29tcG9uZW50V2lsbFVubW91bnQpe2Q9cjtjPXIucmV0dXJuO3RyeXtiPWQsbi5wcm9wcz1cbmIubWVtb2l6ZWRQcm9wcyxuLnN0YXRlPWIubWVtb2l6ZWRTdGF0ZSxuLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2godCl7VyhkLGMsdCl9fWJyZWFrO2Nhc2UgNTpMaihyLHIucmV0dXJuKTticmVhaztjYXNlIDIyOmlmKG51bGwhPT1yLm1lbW9pemVkU3RhdGUpe2drKHEpO2NvbnRpbnVlfX1udWxsIT09eT8oeS5yZXR1cm49cixWPXkpOmdrKHEpfW09bS5zaWJsaW5nfWE6Zm9yKG09bnVsbCxxPWE7Oyl7aWYoNT09PXEudGFnKXtpZihudWxsPT09bSl7bT1xO3RyeXtlPXEuc3RhdGVOb2RlLGw/KGY9ZS5zdHlsZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5zZXRQcm9wZXJ0eT9mLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLFwibm9uZVwiLFwiaW1wb3J0YW50XCIpOmYuZGlzcGxheT1cIm5vbmVcIik6KGg9cS5zdGF0ZU5vZGUsaz1xLm1lbW9pemVkUHJvcHMuc3R5bGUsZz12b2lkIDAhPT1rJiZudWxsIT09ayYmay5oYXNPd25Qcm9wZXJ0eShcImRpc3BsYXlcIik/ay5kaXNwbGF5Om51bGwsaC5zdHlsZS5kaXNwbGF5PVxucmIoXCJkaXNwbGF5XCIsZykpfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19fWVsc2UgaWYoNj09PXEudGFnKXtpZihudWxsPT09bSl0cnl7cS5zdGF0ZU5vZGUubm9kZVZhbHVlPWw/XCJcIjpxLm1lbW9pemVkUHJvcHN9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfX1lbHNlIGlmKCgyMiE9PXEudGFnJiYyMyE9PXEudGFnfHxudWxsPT09cS5tZW1vaXplZFN0YXRlfHxxPT09YSkmJm51bGwhPT1xLmNoaWxkKXtxLmNoaWxkLnJldHVybj1xO3E9cS5jaGlsZDtjb250aW51ZX1pZihxPT09YSlicmVhayBhO2Zvcig7bnVsbD09PXEuc2libGluZzspe2lmKG51bGw9PT1xLnJldHVybnx8cS5yZXR1cm49PT1hKWJyZWFrIGE7bT09PXEmJihtPW51bGwpO3E9cS5yZXR1cm59bT09PXEmJihtPW51bGwpO3Euc2libGluZy5yZXR1cm49cS5yZXR1cm47cT1xLnNpYmxpbmd9fWJyZWFrO2Nhc2UgMTk6Y2soYixhKTtlayhhKTtkJjQmJmFrKGEpO2JyZWFrO2Nhc2UgMjE6YnJlYWs7ZGVmYXVsdDpjayhiLFxuYSksZWsoYSl9fWZ1bmN0aW9uIGVrKGEpe3ZhciBiPWEuZmxhZ3M7aWYoYiYyKXt0cnl7YTp7Zm9yKHZhciBjPWEucmV0dXJuO251bGwhPT1jOyl7aWYoVGooYykpe3ZhciBkPWM7YnJlYWsgYX1jPWMucmV0dXJufXRocm93IEVycm9yKHAoMTYwKSk7fXN3aXRjaChkLnRhZyl7Y2FzZSA1OnZhciBlPWQuc3RhdGVOb2RlO2QuZmxhZ3MmMzImJihvYihlLFwiXCIpLGQuZmxhZ3MmPS0zMyk7dmFyIGY9VWooYSk7V2ooYSxmLGUpO2JyZWFrO2Nhc2UgMzpjYXNlIDQ6dmFyIGc9ZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyxoPVVqKGEpO1ZqKGEsaCxnKTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHAoMTYxKSk7fX1jYXRjaChrKXtXKGEsYS5yZXR1cm4sayl9YS5mbGFncyY9LTN9YiY0MDk2JiYoYS5mbGFncyY9LTQwOTcpfWZ1bmN0aW9uIGhrKGEsYixjKXtWPWE7aWsoYSxiLGMpfVxuZnVuY3Rpb24gaWsoYSxiLGMpe2Zvcih2YXIgZD0wIT09KGEubW9kZSYxKTtudWxsIT09Vjspe3ZhciBlPVYsZj1lLmNoaWxkO2lmKDIyPT09ZS50YWcmJmQpe3ZhciBnPW51bGwhPT1lLm1lbW9pemVkU3RhdGV8fEpqO2lmKCFnKXt2YXIgaD1lLmFsdGVybmF0ZSxrPW51bGwhPT1oJiZudWxsIT09aC5tZW1vaXplZFN0YXRlfHxVO2g9Smo7dmFyIGw9VTtKaj1nO2lmKChVPWspJiYhbClmb3IoVj1lO251bGwhPT1WOylnPVYsaz1nLmNoaWxkLDIyPT09Zy50YWcmJm51bGwhPT1nLm1lbW9pemVkU3RhdGU/amsoZSk6bnVsbCE9PWs/KGsucmV0dXJuPWcsVj1rKTpqayhlKTtmb3IoO251bGwhPT1mOylWPWYsaWsoZixiLGMpLGY9Zi5zaWJsaW5nO1Y9ZTtKaj1oO1U9bH1rayhhLGIsYyl9ZWxzZSAwIT09KGUuc3VidHJlZUZsYWdzJjg3NzIpJiZudWxsIT09Zj8oZi5yZXR1cm49ZSxWPWYpOmtrKGEsYixjKX19XG5mdW5jdGlvbiBrayhhKXtmb3IoO251bGwhPT1WOyl7dmFyIGI9VjtpZigwIT09KGIuZmxhZ3MmODc3Mikpe3ZhciBjPWIuYWx0ZXJuYXRlO3RyeXtpZigwIT09KGIuZmxhZ3MmODc3Mikpc3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OlV8fFFqKDUsYik7YnJlYWs7Y2FzZSAxOnZhciBkPWIuc3RhdGVOb2RlO2lmKGIuZmxhZ3MmNCYmIVUpaWYobnVsbD09PWMpZC5jb21wb25lbnREaWRNb3VudCgpO2Vsc2V7dmFyIGU9Yi5lbGVtZW50VHlwZT09PWIudHlwZT9jLm1lbW9pemVkUHJvcHM6Q2koYi50eXBlLGMubWVtb2l6ZWRQcm9wcyk7ZC5jb21wb25lbnREaWRVcGRhdGUoZSxjLm1lbW9pemVkU3RhdGUsZC5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZSl9dmFyIGY9Yi51cGRhdGVRdWV1ZTtudWxsIT09ZiYmc2goYixmLGQpO2JyZWFrO2Nhc2UgMzp2YXIgZz1iLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1nKXtjPW51bGw7aWYobnVsbCE9PWIuY2hpbGQpc3dpdGNoKGIuY2hpbGQudGFnKXtjYXNlIDU6Yz1cbmIuY2hpbGQuc3RhdGVOb2RlO2JyZWFrO2Nhc2UgMTpjPWIuY2hpbGQuc3RhdGVOb2RlfXNoKGIsZyxjKX1icmVhaztjYXNlIDU6dmFyIGg9Yi5zdGF0ZU5vZGU7aWYobnVsbD09PWMmJmIuZmxhZ3MmNCl7Yz1oO3ZhciBrPWIubWVtb2l6ZWRQcm9wcztzd2l0Y2goYi50eXBlKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOmsuYXV0b0ZvY3VzJiZjLmZvY3VzKCk7YnJlYWs7Y2FzZSBcImltZ1wiOmsuc3JjJiYoYy5zcmM9ay5zcmMpfX1icmVhaztjYXNlIDY6YnJlYWs7Y2FzZSA0OmJyZWFrO2Nhc2UgMTI6YnJlYWs7Y2FzZSAxMzppZihudWxsPT09Yi5tZW1vaXplZFN0YXRlKXt2YXIgbD1iLmFsdGVybmF0ZTtpZihudWxsIT09bCl7dmFyIG09bC5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1tKXt2YXIgcT1tLmRlaHlkcmF0ZWQ7bnVsbCE9PXEmJmJkKHEpfX19YnJlYWs7Y2FzZSAxOTpjYXNlIDE3OmNhc2UgMjE6Y2FzZSAyMjpjYXNlIDIzOmNhc2UgMjU6YnJlYWs7XG5kZWZhdWx0OnRocm93IEVycm9yKHAoMTYzKSk7fVV8fGIuZmxhZ3MmNTEyJiZSaihiKX1jYXRjaChyKXtXKGIsYi5yZXR1cm4scil9fWlmKGI9PT1hKXtWPW51bGw7YnJlYWt9Yz1iLnNpYmxpbmc7aWYobnVsbCE9PWMpe2MucmV0dXJuPWIucmV0dXJuO1Y9YzticmVha31WPWIucmV0dXJufX1mdW5jdGlvbiBnayhhKXtmb3IoO251bGwhPT1WOyl7dmFyIGI9VjtpZihiPT09YSl7Vj1udWxsO2JyZWFrfXZhciBjPWIuc2libGluZztpZihudWxsIT09Yyl7Yy5yZXR1cm49Yi5yZXR1cm47Vj1jO2JyZWFrfVY9Yi5yZXR1cm59fVxuZnVuY3Rpb24gamsoYSl7Zm9yKDtudWxsIT09Vjspe3ZhciBiPVY7dHJ5e3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTp2YXIgYz1iLnJldHVybjt0cnl7UWooNCxiKX1jYXRjaChrKXtXKGIsYyxrKX1icmVhaztjYXNlIDE6dmFyIGQ9Yi5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkTW91bnQpe3ZhciBlPWIucmV0dXJuO3RyeXtkLmNvbXBvbmVudERpZE1vdW50KCl9Y2F0Y2goayl7VyhiLGUsayl9fXZhciBmPWIucmV0dXJuO3RyeXtSaihiKX1jYXRjaChrKXtXKGIsZixrKX1icmVhaztjYXNlIDU6dmFyIGc9Yi5yZXR1cm47dHJ5e1JqKGIpfWNhdGNoKGspe1coYixnLGspfX19Y2F0Y2goayl7VyhiLGIucmV0dXJuLGspfWlmKGI9PT1hKXtWPW51bGw7YnJlYWt9dmFyIGg9Yi5zaWJsaW5nO2lmKG51bGwhPT1oKXtoLnJldHVybj1iLnJldHVybjtWPWg7YnJlYWt9Vj1iLnJldHVybn19XG52YXIgbGs9TWF0aC5jZWlsLG1rPXVhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsbms9dWEuUmVhY3RDdXJyZW50T3duZXIsb2s9dWEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsSz0wLFE9bnVsbCxZPW51bGwsWj0wLGZqPTAsZWo9VWYoMCksVD0wLHBrPW51bGwscmg9MCxxaz0wLHJrPTAsc2s9bnVsbCx0az1udWxsLGZrPTAsR2o9SW5maW5pdHksdWs9bnVsbCxPaT0hMSxQaT1udWxsLFJpPW51bGwsdms9ITEsd2s9bnVsbCx4az0wLHlrPTAsems9bnVsbCxBaz0tMSxCaz0wO2Z1bmN0aW9uIFIoKXtyZXR1cm4gMCE9PShLJjYpP0IoKTotMSE9PUFrP0FrOkFrPUIoKX1cbmZ1bmN0aW9uIHlpKGEpe2lmKDA9PT0oYS5tb2RlJjEpKXJldHVybiAxO2lmKDAhPT0oSyYyKSYmMCE9PVopcmV0dXJuIFomLVo7aWYobnVsbCE9PUtnLnRyYW5zaXRpb24pcmV0dXJuIDA9PT1CayYmKEJrPXljKCkpLEJrO2E9QztpZigwIT09YSlyZXR1cm4gYTthPXdpbmRvdy5ldmVudDthPXZvaWQgMD09PWE/MTY6amQoYS50eXBlKTtyZXR1cm4gYX1mdW5jdGlvbiBnaShhLGIsYyxkKXtpZig1MDx5ayl0aHJvdyB5az0wLHprPW51bGwsRXJyb3IocCgxODUpKTtBYyhhLGMsZCk7aWYoMD09PShLJjIpfHxhIT09USlhPT09USYmKDA9PT0oSyYyKSYmKHFrfD1jKSw0PT09VCYmQ2soYSxaKSksRGsoYSxkKSwxPT09YyYmMD09PUsmJjA9PT0oYi5tb2RlJjEpJiYoR2o9QigpKzUwMCxmZyYmamcoKSl9XG5mdW5jdGlvbiBEayhhLGIpe3ZhciBjPWEuY2FsbGJhY2tOb2RlO3djKGEsYik7dmFyIGQ9dWMoYSxhPT09UT9aOjApO2lmKDA9PT1kKW51bGwhPT1jJiZiYyhjKSxhLmNhbGxiYWNrTm9kZT1udWxsLGEuY2FsbGJhY2tQcmlvcml0eT0wO2Vsc2UgaWYoYj1kJi1kLGEuY2FsbGJhY2tQcmlvcml0eSE9PWIpe251bGwhPWMmJmJjKGMpO2lmKDE9PT1iKTA9PT1hLnRhZz9pZyhFay5iaW5kKG51bGwsYSkpOmhnKEVrLmJpbmQobnVsbCxhKSksSmYoZnVuY3Rpb24oKXswPT09KEsmNikmJmpnKCl9KSxjPW51bGw7ZWxzZXtzd2l0Y2goRGMoZCkpe2Nhc2UgMTpjPWZjO2JyZWFrO2Nhc2UgNDpjPWdjO2JyZWFrO2Nhc2UgMTY6Yz1oYzticmVhaztjYXNlIDUzNjg3MDkxMjpjPWpjO2JyZWFrO2RlZmF1bHQ6Yz1oY31jPUZrKGMsR2suYmluZChudWxsLGEpKX1hLmNhbGxiYWNrUHJpb3JpdHk9YjthLmNhbGxiYWNrTm9kZT1jfX1cbmZ1bmN0aW9uIEdrKGEsYil7QWs9LTE7Qms9MDtpZigwIT09KEsmNikpdGhyb3cgRXJyb3IocCgzMjcpKTt2YXIgYz1hLmNhbGxiYWNrTm9kZTtpZihIaygpJiZhLmNhbGxiYWNrTm9kZSE9PWMpcmV0dXJuIG51bGw7dmFyIGQ9dWMoYSxhPT09UT9aOjApO2lmKDA9PT1kKXJldHVybiBudWxsO2lmKDAhPT0oZCYzMCl8fDAhPT0oZCZhLmV4cGlyZWRMYW5lcyl8fGIpYj1JayhhLGQpO2Vsc2V7Yj1kO3ZhciBlPUs7S3w9Mjt2YXIgZj1KaygpO2lmKFEhPT1hfHxaIT09Yil1az1udWxsLEdqPUIoKSs1MDAsS2soYSxiKTtkbyB0cnl7TGsoKTticmVha31jYXRjaChoKXtNayhhLGgpfXdoaWxlKDEpOyRnKCk7bWsuY3VycmVudD1mO0s9ZTtudWxsIT09WT9iPTA6KFE9bnVsbCxaPTAsYj1UKX1pZigwIT09Yil7Mj09PWImJihlPXhjKGEpLDAhPT1lJiYoZD1lLGI9TmsoYSxlKSkpO2lmKDE9PT1iKXRocm93IGM9cGssS2soYSwwKSxDayhhLGQpLERrKGEsQigpKSxjO2lmKDY9PT1iKUNrKGEsZCk7XG5lbHNle2U9YS5jdXJyZW50LmFsdGVybmF0ZTtpZigwPT09KGQmMzApJiYhT2soZSkmJihiPUlrKGEsZCksMj09PWImJihmPXhjKGEpLDAhPT1mJiYoZD1mLGI9TmsoYSxmKSkpLDE9PT1iKSl0aHJvdyBjPXBrLEtrKGEsMCksQ2soYSxkKSxEayhhLEIoKSksYzthLmZpbmlzaGVkV29yaz1lO2EuZmluaXNoZWRMYW5lcz1kO3N3aXRjaChiKXtjYXNlIDA6Y2FzZSAxOnRocm93IEVycm9yKHAoMzQ1KSk7Y2FzZSAyOlBrKGEsdGssdWspO2JyZWFrO2Nhc2UgMzpDayhhLGQpO2lmKChkJjEzMDAyMzQyNCk9PT1kJiYoYj1mays1MDAtQigpLDEwPGIpKXtpZigwIT09dWMoYSwwKSlicmVhaztlPWEuc3VzcGVuZGVkTGFuZXM7aWYoKGUmZCkhPT1kKXtSKCk7YS5waW5nZWRMYW5lc3w9YS5zdXNwZW5kZWRMYW5lcyZlO2JyZWFrfWEudGltZW91dEhhbmRsZT1GZihQay5iaW5kKG51bGwsYSx0ayx1ayksYik7YnJlYWt9UGsoYSx0ayx1ayk7YnJlYWs7Y2FzZSA0OkNrKGEsZCk7aWYoKGQmNDE5NDI0MCk9PT1cbmQpYnJlYWs7Yj1hLmV2ZW50VGltZXM7Zm9yKGU9LTE7MDxkOyl7dmFyIGc9MzEtb2MoZCk7Zj0xPDxnO2c9YltnXTtnPmUmJihlPWcpO2QmPX5mfWQ9ZTtkPUIoKS1kO2Q9KDEyMD5kPzEyMDo0ODA+ZD80ODA6MTA4MD5kPzEwODA6MTkyMD5kPzE5MjA6M0UzPmQ/M0UzOjQzMjA+ZD80MzIwOjE5NjAqbGsoZC8xOTYwKSktZDtpZigxMDxkKXthLnRpbWVvdXRIYW5kbGU9RmYoUGsuYmluZChudWxsLGEsdGssdWspLGQpO2JyZWFrfVBrKGEsdGssdWspO2JyZWFrO2Nhc2UgNTpQayhhLHRrLHVrKTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHAoMzI5KSk7fX19RGsoYSxCKCkpO3JldHVybiBhLmNhbGxiYWNrTm9kZT09PWM/R2suYmluZChudWxsLGEpOm51bGx9XG5mdW5jdGlvbiBOayhhLGIpe3ZhciBjPXNrO2EuY3VycmVudC5tZW1vaXplZFN0YXRlLmlzRGVoeWRyYXRlZCYmKEtrKGEsYikuZmxhZ3N8PTI1Nik7YT1JayhhLGIpOzIhPT1hJiYoYj10ayx0az1jLG51bGwhPT1iJiZGaihiKSk7cmV0dXJuIGF9ZnVuY3Rpb24gRmooYSl7bnVsbD09PXRrP3RrPWE6dGsucHVzaC5hcHBseSh0ayxhKX1cbmZ1bmN0aW9uIE9rKGEpe2Zvcih2YXIgYj1hOzspe2lmKGIuZmxhZ3MmMTYzODQpe3ZhciBjPWIudXBkYXRlUXVldWU7aWYobnVsbCE9PWMmJihjPWMuc3RvcmVzLG51bGwhPT1jKSlmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXSxmPWUuZ2V0U25hcHNob3Q7ZT1lLnZhbHVlO3RyeXtpZighSGUoZigpLGUpKXJldHVybiExfWNhdGNoKGcpe3JldHVybiExfX19Yz1iLmNoaWxkO2lmKGIuc3VidHJlZUZsYWdzJjE2Mzg0JiZudWxsIT09YyljLnJldHVybj1iLGI9YztlbHNle2lmKGI9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWIuc2libGluZzspe2lmKG51bGw9PT1iLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiEwO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ319cmV0dXJuITB9XG5mdW5jdGlvbiBDayhhLGIpe2ImPX5yaztiJj1+cWs7YS5zdXNwZW5kZWRMYW5lc3w9YjthLnBpbmdlZExhbmVzJj1+Yjtmb3IoYT1hLmV4cGlyYXRpb25UaW1lczswPGI7KXt2YXIgYz0zMS1vYyhiKSxkPTE8PGM7YVtjXT0tMTtiJj1+ZH19ZnVuY3Rpb24gRWsoYSl7aWYoMCE9PShLJjYpKXRocm93IEVycm9yKHAoMzI3KSk7SGsoKTt2YXIgYj11YyhhLDApO2lmKDA9PT0oYiYxKSlyZXR1cm4gRGsoYSxCKCkpLG51bGw7dmFyIGM9SWsoYSxiKTtpZigwIT09YS50YWcmJjI9PT1jKXt2YXIgZD14YyhhKTswIT09ZCYmKGI9ZCxjPU5rKGEsZCkpfWlmKDE9PT1jKXRocm93IGM9cGssS2soYSwwKSxDayhhLGIpLERrKGEsQigpKSxjO2lmKDY9PT1jKXRocm93IEVycm9yKHAoMzQ1KSk7YS5maW5pc2hlZFdvcms9YS5jdXJyZW50LmFsdGVybmF0ZTthLmZpbmlzaGVkTGFuZXM9YjtQayhhLHRrLHVrKTtEayhhLEIoKSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBRayhhLGIpe3ZhciBjPUs7S3w9MTt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtLPWMsMD09PUsmJihHaj1CKCkrNTAwLGZnJiZqZygpKX19ZnVuY3Rpb24gUmsoYSl7bnVsbCE9PXdrJiYwPT09d2sudGFnJiYwPT09KEsmNikmJkhrKCk7dmFyIGI9SztLfD0xO3ZhciBjPW9rLnRyYW5zaXRpb24sZD1DO3RyeXtpZihvay50cmFuc2l0aW9uPW51bGwsQz0xLGEpcmV0dXJuIGEoKX1maW5hbGx5e0M9ZCxvay50cmFuc2l0aW9uPWMsSz1iLDA9PT0oSyY2KSYmamcoKX19ZnVuY3Rpb24gSGooKXtmaj1lai5jdXJyZW50O0UoZWopfVxuZnVuY3Rpb24gS2soYSxiKXthLmZpbmlzaGVkV29yaz1udWxsO2EuZmluaXNoZWRMYW5lcz0wO3ZhciBjPWEudGltZW91dEhhbmRsZTstMSE9PWMmJihhLnRpbWVvdXRIYW5kbGU9LTEsR2YoYykpO2lmKG51bGwhPT1ZKWZvcihjPVkucmV0dXJuO251bGwhPT1jOyl7dmFyIGQ9Yzt3ZyhkKTtzd2l0Y2goZC50YWcpe2Nhc2UgMTpkPWQudHlwZS5jaGlsZENvbnRleHRUeXBlcztudWxsIT09ZCYmdm9pZCAwIT09ZCYmJGYoKTticmVhaztjYXNlIDM6emgoKTtFKFdmKTtFKEgpO0VoKCk7YnJlYWs7Y2FzZSA1OkJoKGQpO2JyZWFrO2Nhc2UgNDp6aCgpO2JyZWFrO2Nhc2UgMTM6RShMKTticmVhaztjYXNlIDE5OkUoTCk7YnJlYWs7Y2FzZSAxMDphaChkLnR5cGUuX2NvbnRleHQpO2JyZWFrO2Nhc2UgMjI6Y2FzZSAyMzpIaigpfWM9Yy5yZXR1cm59UT1hO1k9YT1QZyhhLmN1cnJlbnQsbnVsbCk7Wj1maj1iO1Q9MDtwaz1udWxsO3JrPXFrPXJoPTA7dGs9c2s9bnVsbDtpZihudWxsIT09Zmgpe2ZvcihiPVxuMDtiPGZoLmxlbmd0aDtiKyspaWYoYz1maFtiXSxkPWMuaW50ZXJsZWF2ZWQsbnVsbCE9PWQpe2MuaW50ZXJsZWF2ZWQ9bnVsbDt2YXIgZT1kLm5leHQsZj1jLnBlbmRpbmc7aWYobnVsbCE9PWYpe3ZhciBnPWYubmV4dDtmLm5leHQ9ZTtkLm5leHQ9Z31jLnBlbmRpbmc9ZH1maD1udWxsfXJldHVybiBhfVxuZnVuY3Rpb24gTWsoYSxiKXtkb3t2YXIgYz1ZO3RyeXskZygpO0ZoLmN1cnJlbnQ9Umg7aWYoSWgpe2Zvcih2YXIgZD1NLm1lbW9pemVkU3RhdGU7bnVsbCE9PWQ7KXt2YXIgZT1kLnF1ZXVlO251bGwhPT1lJiYoZS5wZW5kaW5nPW51bGwpO2Q9ZC5uZXh0fUloPSExfUhoPTA7Tz1OPU09bnVsbDtKaD0hMTtLaD0wO25rLmN1cnJlbnQ9bnVsbDtpZihudWxsPT09Y3x8bnVsbD09PWMucmV0dXJuKXtUPTE7cGs9YjtZPW51bGw7YnJlYWt9YTp7dmFyIGY9YSxnPWMucmV0dXJuLGg9YyxrPWI7Yj1aO2guZmxhZ3N8PTMyNzY4O2lmKG51bGwhPT1rJiZcIm9iamVjdFwiPT09dHlwZW9mIGsmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBrLnRoZW4pe3ZhciBsPWssbT1oLHE9bS50YWc7aWYoMD09PShtLm1vZGUmMSkmJigwPT09cXx8MTE9PT1xfHwxNT09PXEpKXt2YXIgcj1tLmFsdGVybmF0ZTtyPyhtLnVwZGF0ZVF1ZXVlPXIudXBkYXRlUXVldWUsbS5tZW1vaXplZFN0YXRlPXIubWVtb2l6ZWRTdGF0ZSxcbm0ubGFuZXM9ci5sYW5lcyk6KG0udXBkYXRlUXVldWU9bnVsbCxtLm1lbW9pemVkU3RhdGU9bnVsbCl9dmFyIHk9VWkoZyk7aWYobnVsbCE9PXkpe3kuZmxhZ3MmPS0yNTc7VmkoeSxnLGgsZixiKTt5Lm1vZGUmMSYmU2koZixsLGIpO2I9eTtrPWw7dmFyIG49Yi51cGRhdGVRdWV1ZTtpZihudWxsPT09bil7dmFyIHQ9bmV3IFNldDt0LmFkZChrKTtiLnVwZGF0ZVF1ZXVlPXR9ZWxzZSBuLmFkZChrKTticmVhayBhfWVsc2V7aWYoMD09PShiJjEpKXtTaShmLGwsYik7dGooKTticmVhayBhfWs9RXJyb3IocCg0MjYpKX19ZWxzZSBpZihJJiZoLm1vZGUmMSl7dmFyIEo9VWkoZyk7aWYobnVsbCE9PUopezA9PT0oSi5mbGFncyY2NTUzNikmJihKLmZsYWdzfD0yNTYpO1ZpKEosZyxoLGYsYik7SmcoSmkoayxoKSk7YnJlYWsgYX19Zj1rPUppKGssaCk7NCE9PVQmJihUPTIpO251bGw9PT1zaz9zaz1bZl06c2sucHVzaChmKTtmPWc7ZG97c3dpdGNoKGYudGFnKXtjYXNlIDM6Zi5mbGFnc3w9NjU1MzY7XG5iJj0tYjtmLmxhbmVzfD1iO3ZhciB4PU5pKGYsayxiKTtwaChmLHgpO2JyZWFrIGE7Y2FzZSAxOmg9azt2YXIgdz1mLnR5cGUsdT1mLnN0YXRlTm9kZTtpZigwPT09KGYuZmxhZ3MmMTI4KSYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiB3LmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8bnVsbCE9PXUmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiB1LmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVJpfHwhUmkuaGFzKHUpKSkpe2YuZmxhZ3N8PTY1NTM2O2ImPS1iO2YubGFuZXN8PWI7dmFyIEY9UWkoZixoLGIpO3BoKGYsRik7YnJlYWsgYX19Zj1mLnJldHVybn13aGlsZShudWxsIT09Zil9U2soYyl9Y2F0Y2gobmEpe2I9bmE7WT09PWMmJm51bGwhPT1jJiYoWT1jPWMucmV0dXJuKTtjb250aW51ZX1icmVha313aGlsZSgxKX1mdW5jdGlvbiBKaygpe3ZhciBhPW1rLmN1cnJlbnQ7bWsuY3VycmVudD1SaDtyZXR1cm4gbnVsbD09PWE/Umg6YX1cbmZ1bmN0aW9uIHRqKCl7aWYoMD09PVR8fDM9PT1UfHwyPT09VClUPTQ7bnVsbD09PVF8fDA9PT0ocmgmMjY4NDM1NDU1KSYmMD09PShxayYyNjg0MzU0NTUpfHxDayhRLFopfWZ1bmN0aW9uIElrKGEsYil7dmFyIGM9SztLfD0yO3ZhciBkPUprKCk7aWYoUSE9PWF8fFohPT1iKXVrPW51bGwsS2soYSxiKTtkbyB0cnl7VGsoKTticmVha31jYXRjaChlKXtNayhhLGUpfXdoaWxlKDEpOyRnKCk7Sz1jO21rLmN1cnJlbnQ9ZDtpZihudWxsIT09WSl0aHJvdyBFcnJvcihwKDI2MSkpO1E9bnVsbDtaPTA7cmV0dXJuIFR9ZnVuY3Rpb24gVGsoKXtmb3IoO251bGwhPT1ZOylVayhZKX1mdW5jdGlvbiBMaygpe2Zvcig7bnVsbCE9PVkmJiFjYygpOylVayhZKX1mdW5jdGlvbiBVayhhKXt2YXIgYj1WayhhLmFsdGVybmF0ZSxhLGZqKTthLm1lbW9pemVkUHJvcHM9YS5wZW5kaW5nUHJvcHM7bnVsbD09PWI/U2soYSk6WT1iO25rLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIFNrKGEpe3ZhciBiPWE7ZG97dmFyIGM9Yi5hbHRlcm5hdGU7YT1iLnJldHVybjtpZigwPT09KGIuZmxhZ3MmMzI3NjgpKXtpZihjPUVqKGMsYixmaiksbnVsbCE9PWMpe1k9YztyZXR1cm59fWVsc2V7Yz1JaihjLGIpO2lmKG51bGwhPT1jKXtjLmZsYWdzJj0zMjc2NztZPWM7cmV0dXJufWlmKG51bGwhPT1hKWEuZmxhZ3N8PTMyNzY4LGEuc3VidHJlZUZsYWdzPTAsYS5kZWxldGlvbnM9bnVsbDtlbHNle1Q9NjtZPW51bGw7cmV0dXJufX1iPWIuc2libGluZztpZihudWxsIT09Yil7WT1iO3JldHVybn1ZPWI9YX13aGlsZShudWxsIT09Yik7MD09PVQmJihUPTUpfWZ1bmN0aW9uIFBrKGEsYixjKXt2YXIgZD1DLGU9b2sudHJhbnNpdGlvbjt0cnl7b2sudHJhbnNpdGlvbj1udWxsLEM9MSxXayhhLGIsYyxkKX1maW5hbGx5e29rLnRyYW5zaXRpb249ZSxDPWR9cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBXayhhLGIsYyxkKXtkbyBIaygpO3doaWxlKG51bGwhPT13ayk7aWYoMCE9PShLJjYpKXRocm93IEVycm9yKHAoMzI3KSk7Yz1hLmZpbmlzaGVkV29yazt2YXIgZT1hLmZpbmlzaGVkTGFuZXM7aWYobnVsbD09PWMpcmV0dXJuIG51bGw7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkTGFuZXM9MDtpZihjPT09YS5jdXJyZW50KXRocm93IEVycm9yKHAoMTc3KSk7YS5jYWxsYmFja05vZGU9bnVsbDthLmNhbGxiYWNrUHJpb3JpdHk9MDt2YXIgZj1jLmxhbmVzfGMuY2hpbGRMYW5lcztCYyhhLGYpO2E9PT1RJiYoWT1RPW51bGwsWj0wKTswPT09KGMuc3VidHJlZUZsYWdzJjIwNjQpJiYwPT09KGMuZmxhZ3MmMjA2NCl8fHZrfHwodms9ITAsRmsoaGMsZnVuY3Rpb24oKXtIaygpO3JldHVybiBudWxsfSkpO2Y9MCE9PShjLmZsYWdzJjE1OTkwKTtpZigwIT09KGMuc3VidHJlZUZsYWdzJjE1OTkwKXx8Zil7Zj1vay50cmFuc2l0aW9uO29rLnRyYW5zaXRpb249bnVsbDtcbnZhciBnPUM7Qz0xO3ZhciBoPUs7S3w9NDtuay5jdXJyZW50PW51bGw7T2ooYSxjKTtkayhjLGEpO09lKERmKTtkZD0hIUNmO0RmPUNmPW51bGw7YS5jdXJyZW50PWM7aGsoYyxhLGUpO2RjKCk7Sz1oO0M9Zztvay50cmFuc2l0aW9uPWZ9ZWxzZSBhLmN1cnJlbnQ9Yzt2ayYmKHZrPSExLHdrPWEseGs9ZSk7Zj1hLnBlbmRpbmdMYW5lczswPT09ZiYmKFJpPW51bGwpO21jKGMuc3RhdGVOb2RlLGQpO0RrKGEsQigpKTtpZihudWxsIT09Yilmb3IoZD1hLm9uUmVjb3ZlcmFibGVFcnJvcixjPTA7YzxiLmxlbmd0aDtjKyspZT1iW2NdLGQoZS52YWx1ZSx7Y29tcG9uZW50U3RhY2s6ZS5zdGFjayxkaWdlc3Q6ZS5kaWdlc3R9KTtpZihPaSl0aHJvdyBPaT0hMSxhPVBpLFBpPW51bGwsYTswIT09KHhrJjEpJiYwIT09YS50YWcmJkhrKCk7Zj1hLnBlbmRpbmdMYW5lczswIT09KGYmMSk/YT09PXprP3lrKys6KHlrPTAsems9YSk6eWs9MDtqZygpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gSGsoKXtpZihudWxsIT09d2spe3ZhciBhPURjKHhrKSxiPW9rLnRyYW5zaXRpb24sYz1DO3RyeXtvay50cmFuc2l0aW9uPW51bGw7Qz0xNj5hPzE2OmE7aWYobnVsbD09PXdrKXZhciBkPSExO2Vsc2V7YT13azt3az1udWxsO3hrPTA7aWYoMCE9PShLJjYpKXRocm93IEVycm9yKHAoMzMxKSk7dmFyIGU9SztLfD00O2ZvcihWPWEuY3VycmVudDtudWxsIT09Vjspe3ZhciBmPVYsZz1mLmNoaWxkO2lmKDAhPT0oVi5mbGFncyYxNikpe3ZhciBoPWYuZGVsZXRpb25zO2lmKG51bGwhPT1oKXtmb3IodmFyIGs9MDtrPGgubGVuZ3RoO2srKyl7dmFyIGw9aFtrXTtmb3IoVj1sO251bGwhPT1WOyl7dmFyIG09Vjtzd2l0Y2gobS50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6UGooOCxtLGYpfXZhciBxPW0uY2hpbGQ7aWYobnVsbCE9PXEpcS5yZXR1cm49bSxWPXE7ZWxzZSBmb3IoO251bGwhPT1WOyl7bT1WO3ZhciByPW0uc2libGluZyx5PW0ucmV0dXJuO1NqKG0pO2lmKG09PT1cbmwpe1Y9bnVsbDticmVha31pZihudWxsIT09cil7ci5yZXR1cm49eTtWPXI7YnJlYWt9Vj15fX19dmFyIG49Zi5hbHRlcm5hdGU7aWYobnVsbCE9PW4pe3ZhciB0PW4uY2hpbGQ7aWYobnVsbCE9PXQpe24uY2hpbGQ9bnVsbDtkb3t2YXIgSj10LnNpYmxpbmc7dC5zaWJsaW5nPW51bGw7dD1KfXdoaWxlKG51bGwhPT10KX19Vj1mfX1pZigwIT09KGYuc3VidHJlZUZsYWdzJjIwNjQpJiZudWxsIT09ZylnLnJldHVybj1mLFY9ZztlbHNlIGI6Zm9yKDtudWxsIT09Vjspe2Y9VjtpZigwIT09KGYuZmxhZ3MmMjA0OCkpc3dpdGNoKGYudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OlBqKDksZixmLnJldHVybil9dmFyIHg9Zi5zaWJsaW5nO2lmKG51bGwhPT14KXt4LnJldHVybj1mLnJldHVybjtWPXg7YnJlYWsgYn1WPWYucmV0dXJufX12YXIgdz1hLmN1cnJlbnQ7Zm9yKFY9dztudWxsIT09Vjspe2c9Vjt2YXIgdT1nLmNoaWxkO2lmKDAhPT0oZy5zdWJ0cmVlRmxhZ3MmMjA2NCkmJm51bGwhPT1cbnUpdS5yZXR1cm49ZyxWPXU7ZWxzZSBiOmZvcihnPXc7bnVsbCE9PVY7KXtoPVY7aWYoMCE9PShoLmZsYWdzJjIwNDgpKXRyeXtzd2l0Y2goaC50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6UWooOSxoKX19Y2F0Y2gobmEpe1coaCxoLnJldHVybixuYSl9aWYoaD09PWcpe1Y9bnVsbDticmVhayBifXZhciBGPWguc2libGluZztpZihudWxsIT09Ril7Ri5yZXR1cm49aC5yZXR1cm47Vj1GO2JyZWFrIGJ9Vj1oLnJldHVybn19Sz1lO2pnKCk7aWYobGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBsYy5vblBvc3RDb21taXRGaWJlclJvb3QpdHJ5e2xjLm9uUG9zdENvbW1pdEZpYmVyUm9vdChrYyxhKX1jYXRjaChuYSl7fWQ9ITB9cmV0dXJuIGR9ZmluYWxseXtDPWMsb2sudHJhbnNpdGlvbj1ifX1yZXR1cm4hMX1mdW5jdGlvbiBYayhhLGIsYyl7Yj1KaShjLGIpO2I9TmkoYSxiLDEpO2E9bmgoYSxiLDEpO2I9UigpO251bGwhPT1hJiYoQWMoYSwxLGIpLERrKGEsYikpfVxuZnVuY3Rpb24gVyhhLGIsYyl7aWYoMz09PWEudGFnKVhrKGEsYSxjKTtlbHNlIGZvcig7bnVsbCE9PWI7KXtpZigzPT09Yi50YWcpe1hrKGIsYSxjKTticmVha31lbHNlIGlmKDE9PT1iLnRhZyl7dmFyIGQ9Yi5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVJpfHwhUmkuaGFzKGQpKSl7YT1KaShjLGEpO2E9UWkoYixhLDEpO2I9bmgoYixhLDEpO2E9UigpO251bGwhPT1iJiYoQWMoYiwxLGEpLERrKGIsYSkpO2JyZWFrfX1iPWIucmV0dXJufX1cbmZ1bmN0aW9uIFRpKGEsYixjKXt2YXIgZD1hLnBpbmdDYWNoZTtudWxsIT09ZCYmZC5kZWxldGUoYik7Yj1SKCk7YS5waW5nZWRMYW5lc3w9YS5zdXNwZW5kZWRMYW5lcyZjO1E9PT1hJiYoWiZjKT09PWMmJig0PT09VHx8Mz09PVQmJihaJjEzMDAyMzQyNCk9PT1aJiY1MDA+QigpLWZrP0trKGEsMCk6cmt8PWMpO0RrKGEsYil9ZnVuY3Rpb24gWWsoYSxiKXswPT09YiYmKDA9PT0oYS5tb2RlJjEpP2I9MTooYj1zYyxzYzw8PTEsMD09PShzYyYxMzAwMjM0MjQpJiYoc2M9NDE5NDMwNCkpKTt2YXIgYz1SKCk7YT1paChhLGIpO251bGwhPT1hJiYoQWMoYSxiLGMpLERrKGEsYykpfWZ1bmN0aW9uIHVqKGEpe3ZhciBiPWEubWVtb2l6ZWRTdGF0ZSxjPTA7bnVsbCE9PWImJihjPWIucmV0cnlMYW5lKTtZayhhLGMpfVxuZnVuY3Rpb24gYmsoYSxiKXt2YXIgYz0wO3N3aXRjaChhLnRhZyl7Y2FzZSAxMzp2YXIgZD1hLnN0YXRlTm9kZTt2YXIgZT1hLm1lbW9pemVkU3RhdGU7bnVsbCE9PWUmJihjPWUucmV0cnlMYW5lKTticmVhaztjYXNlIDE5OmQ9YS5zdGF0ZU5vZGU7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihwKDMxNCkpO31udWxsIT09ZCYmZC5kZWxldGUoYik7WWsoYSxjKX12YXIgVms7XG5Waz1mdW5jdGlvbihhLGIsYyl7aWYobnVsbCE9PWEpaWYoYS5tZW1vaXplZFByb3BzIT09Yi5wZW5kaW5nUHJvcHN8fFdmLmN1cnJlbnQpZGg9ITA7ZWxzZXtpZigwPT09KGEubGFuZXMmYykmJjA9PT0oYi5mbGFncyYxMjgpKXJldHVybiBkaD0hMSx5aihhLGIsYyk7ZGg9MCE9PShhLmZsYWdzJjEzMTA3Mik/ITA6ITF9ZWxzZSBkaD0hMSxJJiYwIT09KGIuZmxhZ3MmMTA0ODU3NikmJnVnKGIsbmcsYi5pbmRleCk7Yi5sYW5lcz0wO3N3aXRjaChiLnRhZyl7Y2FzZSAyOnZhciBkPWIudHlwZTtpaihhLGIpO2E9Yi5wZW5kaW5nUHJvcHM7dmFyIGU9WWYoYixILmN1cnJlbnQpO2NoKGIsYyk7ZT1OaChudWxsLGIsZCxhLGUsYyk7dmFyIGY9U2goKTtiLmZsYWdzfD0xO1wib2JqZWN0XCI9PT10eXBlb2YgZSYmbnVsbCE9PWUmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLnJlbmRlciYmdm9pZCAwPT09ZS4kJHR5cGVvZj8oYi50YWc9MSxiLm1lbW9pemVkU3RhdGU9bnVsbCxiLnVwZGF0ZVF1ZXVlPVxubnVsbCxaZihkKT8oZj0hMCxjZyhiKSk6Zj0hMSxiLm1lbW9pemVkU3RhdGU9bnVsbCE9PWUuc3RhdGUmJnZvaWQgMCE9PWUuc3RhdGU/ZS5zdGF0ZTpudWxsLGtoKGIpLGUudXBkYXRlcj1FaSxiLnN0YXRlTm9kZT1lLGUuX3JlYWN0SW50ZXJuYWxzPWIsSWkoYixkLGEsYyksYj1qaihudWxsLGIsZCwhMCxmLGMpKTooYi50YWc9MCxJJiZmJiZ2ZyhiKSxYaShudWxsLGIsZSxjKSxiPWIuY2hpbGQpO3JldHVybiBiO2Nhc2UgMTY6ZD1iLmVsZW1lbnRUeXBlO2E6e2lqKGEsYik7YT1iLnBlbmRpbmdQcm9wcztlPWQuX2luaXQ7ZD1lKGQuX3BheWxvYWQpO2IudHlwZT1kO2U9Yi50YWc9WmsoZCk7YT1DaShkLGEpO3N3aXRjaChlKXtjYXNlIDA6Yj1jaihudWxsLGIsZCxhLGMpO2JyZWFrIGE7Y2FzZSAxOmI9aGoobnVsbCxiLGQsYSxjKTticmVhayBhO2Nhc2UgMTE6Yj1ZaShudWxsLGIsZCxhLGMpO2JyZWFrIGE7Y2FzZSAxNDpiPSRpKG51bGwsYixkLENpKGQudHlwZSxhKSxjKTticmVhayBhfXRocm93IEVycm9yKHAoMzA2LFxuZCxcIlwiKSk7fXJldHVybiBiO2Nhc2UgMDpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6Q2koZCxlKSxjaihhLGIsZCxlLGMpO2Nhc2UgMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6Q2koZCxlKSxoaihhLGIsZCxlLGMpO2Nhc2UgMzphOntraihiKTtpZihudWxsPT09YSl0aHJvdyBFcnJvcihwKDM4NykpO2Q9Yi5wZW5kaW5nUHJvcHM7Zj1iLm1lbW9pemVkU3RhdGU7ZT1mLmVsZW1lbnQ7bGgoYSxiKTtxaChiLGQsbnVsbCxjKTt2YXIgZz1iLm1lbW9pemVkU3RhdGU7ZD1nLmVsZW1lbnQ7aWYoZi5pc0RlaHlkcmF0ZWQpaWYoZj17ZWxlbWVudDpkLGlzRGVoeWRyYXRlZDohMSxjYWNoZTpnLmNhY2hlLHBlbmRpbmdTdXNwZW5zZUJvdW5kYXJpZXM6Zy5wZW5kaW5nU3VzcGVuc2VCb3VuZGFyaWVzLHRyYW5zaXRpb25zOmcudHJhbnNpdGlvbnN9LGIudXBkYXRlUXVldWUuYmFzZVN0YXRlPVxuZixiLm1lbW9pemVkU3RhdGU9ZixiLmZsYWdzJjI1Nil7ZT1KaShFcnJvcihwKDQyMykpLGIpO2I9bGooYSxiLGQsYyxlKTticmVhayBhfWVsc2UgaWYoZCE9PWUpe2U9SmkoRXJyb3IocCg0MjQpKSxiKTtiPWxqKGEsYixkLGMsZSk7YnJlYWsgYX1lbHNlIGZvcih5Zz1MZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLmZpcnN0Q2hpbGQpLHhnPWIsST0hMCx6Zz1udWxsLGM9VmcoYixudWxsLGQsYyksYi5jaGlsZD1jO2M7KWMuZmxhZ3M9Yy5mbGFncyYtM3w0MDk2LGM9Yy5zaWJsaW5nO2Vsc2V7SWcoKTtpZihkPT09ZSl7Yj1aaShhLGIsYyk7YnJlYWsgYX1YaShhLGIsZCxjKX1iPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA1OnJldHVybiBBaChiKSxudWxsPT09YSYmRWcoYiksZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxmPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpudWxsLGc9ZS5jaGlsZHJlbixFZihkLGUpP2c9bnVsbDpudWxsIT09ZiYmRWYoZCxmKSYmKGIuZmxhZ3N8PTMyKSxcbmdqKGEsYiksWGkoYSxiLGcsYyksYi5jaGlsZDtjYXNlIDY6cmV0dXJuIG51bGw9PT1hJiZFZyhiKSxudWxsO2Nhc2UgMTM6cmV0dXJuIG9qKGEsYixjKTtjYXNlIDQ6cmV0dXJuIHloKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksZD1iLnBlbmRpbmdQcm9wcyxudWxsPT09YT9iLmNoaWxkPVVnKGIsbnVsbCxkLGMpOlhpKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6Q2koZCxlKSxZaShhLGIsZCxlLGMpO2Nhc2UgNzpyZXR1cm4gWGkoYSxiLGIucGVuZGluZ1Byb3BzLGMpLGIuY2hpbGQ7Y2FzZSA4OnJldHVybiBYaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEyOnJldHVybiBYaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEwOmE6e2Q9Yi50eXBlLl9jb250ZXh0O2U9Yi5wZW5kaW5nUHJvcHM7Zj1iLm1lbW9pemVkUHJvcHM7XG5nPWUudmFsdWU7RyhXZyxkLl9jdXJyZW50VmFsdWUpO2QuX2N1cnJlbnRWYWx1ZT1nO2lmKG51bGwhPT1mKWlmKEhlKGYudmFsdWUsZykpe2lmKGYuY2hpbGRyZW49PT1lLmNoaWxkcmVuJiYhV2YuY3VycmVudCl7Yj1aaShhLGIsYyk7YnJlYWsgYX19ZWxzZSBmb3IoZj1iLmNoaWxkLG51bGwhPT1mJiYoZi5yZXR1cm49Yik7bnVsbCE9PWY7KXt2YXIgaD1mLmRlcGVuZGVuY2llcztpZihudWxsIT09aCl7Zz1mLmNoaWxkO2Zvcih2YXIgaz1oLmZpcnN0Q29udGV4dDtudWxsIT09azspe2lmKGsuY29udGV4dD09PWQpe2lmKDE9PT1mLnRhZyl7az1taCgtMSxjJi1jKTtrLnRhZz0yO3ZhciBsPWYudXBkYXRlUXVldWU7aWYobnVsbCE9PWwpe2w9bC5zaGFyZWQ7dmFyIG09bC5wZW5kaW5nO251bGw9PT1tP2submV4dD1rOihrLm5leHQ9bS5uZXh0LG0ubmV4dD1rKTtsLnBlbmRpbmc9a319Zi5sYW5lc3w9YztrPWYuYWx0ZXJuYXRlO251bGwhPT1rJiYoay5sYW5lc3w9Yyk7YmgoZi5yZXR1cm4sXG5jLGIpO2gubGFuZXN8PWM7YnJlYWt9az1rLm5leHR9fWVsc2UgaWYoMTA9PT1mLnRhZylnPWYudHlwZT09PWIudHlwZT9udWxsOmYuY2hpbGQ7ZWxzZSBpZigxOD09PWYudGFnKXtnPWYucmV0dXJuO2lmKG51bGw9PT1nKXRocm93IEVycm9yKHAoMzQxKSk7Zy5sYW5lc3w9YztoPWcuYWx0ZXJuYXRlO251bGwhPT1oJiYoaC5sYW5lc3w9Yyk7YmgoZyxjLGIpO2c9Zi5zaWJsaW5nfWVsc2UgZz1mLmNoaWxkO2lmKG51bGwhPT1nKWcucmV0dXJuPWY7ZWxzZSBmb3IoZz1mO251bGwhPT1nOyl7aWYoZz09PWIpe2c9bnVsbDticmVha31mPWcuc2libGluZztpZihudWxsIT09Zil7Zi5yZXR1cm49Zy5yZXR1cm47Zz1mO2JyZWFrfWc9Zy5yZXR1cm59Zj1nfVhpKGEsYixlLmNoaWxkcmVuLGMpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDk6cmV0dXJuIGU9Yi50eXBlLGQ9Yi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sY2goYixjKSxlPWVoKGUpLGQ9ZChlKSxiLmZsYWdzfD0xLFhpKGEsYixkLGMpLFxuYi5jaGlsZDtjYXNlIDE0OnJldHVybiBkPWIudHlwZSxlPUNpKGQsYi5wZW5kaW5nUHJvcHMpLGU9Q2koZC50eXBlLGUpLCRpKGEsYixkLGUsYyk7Y2FzZSAxNTpyZXR1cm4gYmooYSxiLGIudHlwZSxiLnBlbmRpbmdQcm9wcyxjKTtjYXNlIDE3OnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpDaShkLGUpLGlqKGEsYiksYi50YWc9MSxaZihkKT8oYT0hMCxjZyhiKSk6YT0hMSxjaChiLGMpLEdpKGIsZCxlKSxJaShiLGQsZSxjKSxqaihudWxsLGIsZCwhMCxhLGMpO2Nhc2UgMTk6cmV0dXJuIHhqKGEsYixjKTtjYXNlIDIyOnJldHVybiBkaihhLGIsYyl9dGhyb3cgRXJyb3IocCgxNTYsYi50YWcpKTt9O2Z1bmN0aW9uIEZrKGEsYil7cmV0dXJuIGFjKGEsYil9XG5mdW5jdGlvbiAkayhhLGIsYyxkKXt0aGlzLnRhZz1hO3RoaXMua2V5PWM7dGhpcy5zaWJsaW5nPXRoaXMuY2hpbGQ9dGhpcy5yZXR1cm49dGhpcy5zdGF0ZU5vZGU9dGhpcy50eXBlPXRoaXMuZWxlbWVudFR5cGU9bnVsbDt0aGlzLmluZGV4PTA7dGhpcy5yZWY9bnVsbDt0aGlzLnBlbmRpbmdQcm9wcz1iO3RoaXMuZGVwZW5kZW5jaWVzPXRoaXMubWVtb2l6ZWRTdGF0ZT10aGlzLnVwZGF0ZVF1ZXVlPXRoaXMubWVtb2l6ZWRQcm9wcz1udWxsO3RoaXMubW9kZT1kO3RoaXMuc3VidHJlZUZsYWdzPXRoaXMuZmxhZ3M9MDt0aGlzLmRlbGV0aW9ucz1udWxsO3RoaXMuY2hpbGRMYW5lcz10aGlzLmxhbmVzPTA7dGhpcy5hbHRlcm5hdGU9bnVsbH1mdW5jdGlvbiBCZyhhLGIsYyxkKXtyZXR1cm4gbmV3ICRrKGEsYixjLGQpfWZ1bmN0aW9uIGFqKGEpe2E9YS5wcm90b3R5cGU7cmV0dXJuISghYXx8IWEuaXNSZWFjdENvbXBvbmVudCl9XG5mdW5jdGlvbiBaayhhKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gYWooYSk/MTowO2lmKHZvaWQgMCE9PWEmJm51bGwhPT1hKXthPWEuJCR0eXBlb2Y7aWYoYT09PURhKXJldHVybiAxMTtpZihhPT09R2EpcmV0dXJuIDE0fXJldHVybiAyfVxuZnVuY3Rpb24gUGcoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsPT09Yz8oYz1CZyhhLnRhZyxiLGEua2V5LGEubW9kZSksYy5lbGVtZW50VHlwZT1hLmVsZW1lbnRUeXBlLGMudHlwZT1hLnR5cGUsYy5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGUsYy5hbHRlcm5hdGU9YSxhLmFsdGVybmF0ZT1jKTooYy5wZW5kaW5nUHJvcHM9YixjLnR5cGU9YS50eXBlLGMuZmxhZ3M9MCxjLnN1YnRyZWVGbGFncz0wLGMuZGVsZXRpb25zPW51bGwpO2MuZmxhZ3M9YS5mbGFncyYxNDY4MDA2NDtjLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzO2MubGFuZXM9YS5sYW5lcztjLmNoaWxkPWEuY2hpbGQ7Yy5tZW1vaXplZFByb3BzPWEubWVtb2l6ZWRQcm9wcztjLm1lbW9pemVkU3RhdGU9YS5tZW1vaXplZFN0YXRlO2MudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZTtiPWEuZGVwZW5kZW5jaWVzO2MuZGVwZW5kZW5jaWVzPW51bGw9PT1iP251bGw6e2xhbmVzOmIubGFuZXMsZmlyc3RDb250ZXh0OmIuZmlyc3RDb250ZXh0fTtcbmMuc2libGluZz1hLnNpYmxpbmc7Yy5pbmRleD1hLmluZGV4O2MucmVmPWEucmVmO3JldHVybiBjfVxuZnVuY3Rpb24gUmcoYSxiLGMsZCxlLGYpe3ZhciBnPTI7ZD1hO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKWFqKGEpJiYoZz0xKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlnPTU7ZWxzZSBhOnN3aXRjaChhKXtjYXNlIHlhOnJldHVybiBUZyhjLmNoaWxkcmVuLGUsZixiKTtjYXNlIHphOmc9ODtlfD04O2JyZWFrO2Nhc2UgQWE6cmV0dXJuIGE9QmcoMTIsYyxiLGV8MiksYS5lbGVtZW50VHlwZT1BYSxhLmxhbmVzPWYsYTtjYXNlIEVhOnJldHVybiBhPUJnKDEzLGMsYixlKSxhLmVsZW1lbnRUeXBlPUVhLGEubGFuZXM9ZixhO2Nhc2UgRmE6cmV0dXJuIGE9QmcoMTksYyxiLGUpLGEuZWxlbWVudFR5cGU9RmEsYS5sYW5lcz1mLGE7Y2FzZSBJYTpyZXR1cm4gcGooYyxlLGYsYik7ZGVmYXVsdDppZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIEJhOmc9MTA7YnJlYWsgYTtjYXNlIENhOmc9OTticmVhayBhO2Nhc2UgRGE6Zz0xMTtcbmJyZWFrIGE7Y2FzZSBHYTpnPTE0O2JyZWFrIGE7Y2FzZSBIYTpnPTE2O2Q9bnVsbDticmVhayBhfXRocm93IEVycm9yKHAoMTMwLG51bGw9PWE/YTp0eXBlb2YgYSxcIlwiKSk7fWI9QmcoZyxjLGIsZSk7Yi5lbGVtZW50VHlwZT1hO2IudHlwZT1kO2IubGFuZXM9ZjtyZXR1cm4gYn1mdW5jdGlvbiBUZyhhLGIsYyxkKXthPUJnKDcsYSxkLGIpO2EubGFuZXM9YztyZXR1cm4gYX1mdW5jdGlvbiBwaihhLGIsYyxkKXthPUJnKDIyLGEsZCxiKTthLmVsZW1lbnRUeXBlPUlhO2EubGFuZXM9YzthLnN0YXRlTm9kZT17aXNIaWRkZW46ITF9O3JldHVybiBhfWZ1bmN0aW9uIFFnKGEsYixjKXthPUJnKDYsYSxudWxsLGIpO2EubGFuZXM9YztyZXR1cm4gYX1cbmZ1bmN0aW9uIFNnKGEsYixjKXtiPUJnKDQsbnVsbCE9PWEuY2hpbGRyZW4/YS5jaGlsZHJlbjpbXSxhLmtleSxiKTtiLmxhbmVzPWM7Yi5zdGF0ZU5vZGU9e2NvbnRhaW5lckluZm86YS5jb250YWluZXJJbmZvLHBlbmRpbmdDaGlsZHJlbjpudWxsLGltcGxlbWVudGF0aW9uOmEuaW1wbGVtZW50YXRpb259O3JldHVybiBifVxuZnVuY3Rpb24gYWwoYSxiLGMsZCxlKXt0aGlzLnRhZz1iO3RoaXMuY29udGFpbmVySW5mbz1hO3RoaXMuZmluaXNoZWRXb3JrPXRoaXMucGluZ0NhY2hlPXRoaXMuY3VycmVudD10aGlzLnBlbmRpbmdDaGlsZHJlbj1udWxsO3RoaXMudGltZW91dEhhbmRsZT0tMTt0aGlzLmNhbGxiYWNrTm9kZT10aGlzLnBlbmRpbmdDb250ZXh0PXRoaXMuY29udGV4dD1udWxsO3RoaXMuY2FsbGJhY2tQcmlvcml0eT0wO3RoaXMuZXZlbnRUaW1lcz16YygwKTt0aGlzLmV4cGlyYXRpb25UaW1lcz16YygtMSk7dGhpcy5lbnRhbmdsZWRMYW5lcz10aGlzLmZpbmlzaGVkTGFuZXM9dGhpcy5tdXRhYmxlUmVhZExhbmVzPXRoaXMuZXhwaXJlZExhbmVzPXRoaXMucGluZ2VkTGFuZXM9dGhpcy5zdXNwZW5kZWRMYW5lcz10aGlzLnBlbmRpbmdMYW5lcz0wO3RoaXMuZW50YW5nbGVtZW50cz16YygwKTt0aGlzLmlkZW50aWZpZXJQcmVmaXg9ZDt0aGlzLm9uUmVjb3ZlcmFibGVFcnJvcj1lO3RoaXMubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1cbm51bGx9ZnVuY3Rpb24gYmwoYSxiLGMsZCxlLGYsZyxoLGspe2E9bmV3IGFsKGEsYixjLGgsayk7MT09PWI/KGI9MSwhMD09PWYmJihifD04KSk6Yj0wO2Y9QmcoMyxudWxsLG51bGwsYik7YS5jdXJyZW50PWY7Zi5zdGF0ZU5vZGU9YTtmLm1lbW9pemVkU3RhdGU9e2VsZW1lbnQ6ZCxpc0RlaHlkcmF0ZWQ6YyxjYWNoZTpudWxsLHRyYW5zaXRpb25zOm51bGwscGVuZGluZ1N1c3BlbnNlQm91bmRhcmllczpudWxsfTtraChmKTtyZXR1cm4gYX1mdW5jdGlvbiBjbChhLGIsYyl7dmFyIGQ9Mzxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm51bGw7cmV0dXJueyQkdHlwZW9mOndhLGtleTpudWxsPT1kP251bGw6XCJcIitkLGNoaWxkcmVuOmEsY29udGFpbmVySW5mbzpiLGltcGxlbWVudGF0aW9uOmN9fVxuZnVuY3Rpb24gZGwoYSl7aWYoIWEpcmV0dXJuIFZmO2E9YS5fcmVhY3RJbnRlcm5hbHM7YTp7aWYoVmIoYSkhPT1hfHwxIT09YS50YWcpdGhyb3cgRXJyb3IocCgxNzApKTt2YXIgYj1hO2Rve3N3aXRjaChiLnRhZyl7Y2FzZSAzOmI9Yi5zdGF0ZU5vZGUuY29udGV4dDticmVhayBhO2Nhc2UgMTppZihaZihiLnR5cGUpKXtiPWIuc3RhdGVOb2RlLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0O2JyZWFrIGF9fWI9Yi5yZXR1cm59d2hpbGUobnVsbCE9PWIpO3Rocm93IEVycm9yKHAoMTcxKSk7fWlmKDE9PT1hLnRhZyl7dmFyIGM9YS50eXBlO2lmKFpmKGMpKXJldHVybiBiZyhhLGMsYil9cmV0dXJuIGJ9XG5mdW5jdGlvbiBlbChhLGIsYyxkLGUsZixnLGgsayl7YT1ibChjLGQsITAsYSxlLGYsZyxoLGspO2EuY29udGV4dD1kbChudWxsKTtjPWEuY3VycmVudDtkPVIoKTtlPXlpKGMpO2Y9bWgoZCxlKTtmLmNhbGxiYWNrPXZvaWQgMCE9PWImJm51bGwhPT1iP2I6bnVsbDtuaChjLGYsZSk7YS5jdXJyZW50LmxhbmVzPWU7QWMoYSxlLGQpO0RrKGEsZCk7cmV0dXJuIGF9ZnVuY3Rpb24gZmwoYSxiLGMsZCl7dmFyIGU9Yi5jdXJyZW50LGY9UigpLGc9eWkoZSk7Yz1kbChjKTtudWxsPT09Yi5jb250ZXh0P2IuY29udGV4dD1jOmIucGVuZGluZ0NvbnRleHQ9YztiPW1oKGYsZyk7Yi5wYXlsb2FkPXtlbGVtZW50OmF9O2Q9dm9pZCAwPT09ZD9udWxsOmQ7bnVsbCE9PWQmJihiLmNhbGxiYWNrPWQpO2E9bmgoZSxiLGcpO251bGwhPT1hJiYoZ2koYSxlLGcsZiksb2goYSxlLGcpKTtyZXR1cm4gZ31cbmZ1bmN0aW9uIGdsKGEpe2E9YS5jdXJyZW50O2lmKCFhLmNoaWxkKXJldHVybiBudWxsO3N3aXRjaChhLmNoaWxkLnRhZyl7Y2FzZSA1OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZTtkZWZhdWx0OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZX19ZnVuY3Rpb24gaGwoYSxiKXthPWEubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YSYmbnVsbCE9PWEuZGVoeWRyYXRlZCl7dmFyIGM9YS5yZXRyeUxhbmU7YS5yZXRyeUxhbmU9MCE9PWMmJmM8Yj9jOmJ9fWZ1bmN0aW9uIGlsKGEsYil7aGwoYSxiKTsoYT1hLmFsdGVybmF0ZSkmJmhsKGEsYil9ZnVuY3Rpb24gamwoKXtyZXR1cm4gbnVsbH12YXIga2w9XCJmdW5jdGlvblwiPT09dHlwZW9mIHJlcG9ydEVycm9yP3JlcG9ydEVycm9yOmZ1bmN0aW9uKGEpe2NvbnNvbGUuZXJyb3IoYSl9O2Z1bmN0aW9uIGxsKGEpe3RoaXMuX2ludGVybmFsUm9vdD1hfVxubWwucHJvdG90eXBlLnJlbmRlcj1sbC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuX2ludGVybmFsUm9vdDtpZihudWxsPT09Yil0aHJvdyBFcnJvcihwKDQwOSkpO2ZsKGEsYixudWxsLG51bGwpfTttbC5wcm90b3R5cGUudW5tb3VudD1sbC5wcm90b3R5cGUudW5tb3VudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuX2ludGVybmFsUm9vdDtpZihudWxsIT09YSl7dGhpcy5faW50ZXJuYWxSb290PW51bGw7dmFyIGI9YS5jb250YWluZXJJbmZvO1JrKGZ1bmN0aW9uKCl7ZmwobnVsbCxhLG51bGwsbnVsbCl9KTtiW3VmXT1udWxsfX07ZnVuY3Rpb24gbWwoYSl7dGhpcy5faW50ZXJuYWxSb290PWF9XG5tbC5wcm90b3R5cGUudW5zdGFibGVfc2NoZWR1bGVIeWRyYXRpb249ZnVuY3Rpb24oYSl7aWYoYSl7dmFyIGI9SGMoKTthPXtibG9ja2VkT246bnVsbCx0YXJnZXQ6YSxwcmlvcml0eTpifTtmb3IodmFyIGM9MDtjPFFjLmxlbmd0aCYmMCE9PWImJmI8UWNbY10ucHJpb3JpdHk7YysrKTtRYy5zcGxpY2UoYywwLGEpOzA9PT1jJiZWYyhhKX19O2Z1bmN0aW9uIG5sKGEpe3JldHVybiEoIWF8fDEhPT1hLm5vZGVUeXBlJiY5IT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlKX1mdW5jdGlvbiBvbChhKXtyZXR1cm4hKCFhfHwxIT09YS5ub2RlVHlwZSYmOSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZSYmKDghPT1hLm5vZGVUeXBlfHxcIiByZWFjdC1tb3VudC1wb2ludC11bnN0YWJsZSBcIiE9PWEubm9kZVZhbHVlKSl9ZnVuY3Rpb24gcGwoKXt9XG5mdW5jdGlvbiBxbChhLGIsYyxkLGUpe2lmKGUpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgZj1kO2Q9ZnVuY3Rpb24oKXt2YXIgYT1nbChnKTtmLmNhbGwoYSl9fXZhciBnPWVsKGIsZCxhLDAsbnVsbCwhMSwhMSxcIlwiLHBsKTthLl9yZWFjdFJvb3RDb250YWluZXI9ZzthW3VmXT1nLmN1cnJlbnQ7c2YoOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO1JrKCk7cmV0dXJuIGd9Zm9yKDtlPWEubGFzdENoaWxkOylhLnJlbW92ZUNoaWxkKGUpO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgaD1kO2Q9ZnVuY3Rpb24oKXt2YXIgYT1nbChrKTtoLmNhbGwoYSl9fXZhciBrPWJsKGEsMCwhMSxudWxsLG51bGwsITEsITEsXCJcIixwbCk7YS5fcmVhY3RSb290Q29udGFpbmVyPWs7YVt1Zl09ay5jdXJyZW50O3NmKDg9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphKTtSayhmdW5jdGlvbigpe2ZsKGIsayxjLGQpfSk7cmV0dXJuIGt9XG5mdW5jdGlvbiBybChhLGIsYyxkLGUpe3ZhciBmPWMuX3JlYWN0Um9vdENvbnRhaW5lcjtpZihmKXt2YXIgZz1mO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgaD1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1nbChnKTtoLmNhbGwoYSl9fWZsKGIsZyxhLGUpfWVsc2UgZz1xbChjLGIsYSxlLGQpO3JldHVybiBnbChnKX1FYz1mdW5jdGlvbihhKXtzd2l0Y2goYS50YWcpe2Nhc2UgMzp2YXIgYj1hLnN0YXRlTm9kZTtpZihiLmN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQpe3ZhciBjPXRjKGIucGVuZGluZ0xhbmVzKTswIT09YyYmKENjKGIsY3wxKSxEayhiLEIoKSksMD09PShLJjYpJiYoR2o9QigpKzUwMCxqZygpKSl9YnJlYWs7Y2FzZSAxMzpSayhmdW5jdGlvbigpe3ZhciBiPWloKGEsMSk7aWYobnVsbCE9PWIpe3ZhciBjPVIoKTtnaShiLGEsMSxjKX19KSxpbChhLDEpfX07XG5GYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1paChhLDEzNDIxNzcyOCk7aWYobnVsbCE9PWIpe3ZhciBjPVIoKTtnaShiLGEsMTM0MjE3NzI4LGMpfWlsKGEsMTM0MjE3NzI4KX19O0djPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPXlpKGEpLGM9aWgoYSxiKTtpZihudWxsIT09Yyl7dmFyIGQ9UigpO2dpKGMsYSxiLGQpfWlsKGEsYil9fTtIYz1mdW5jdGlvbigpe3JldHVybiBDfTtJYz1mdW5jdGlvbihhLGIpe3ZhciBjPUM7dHJ5e3JldHVybiBDPWEsYigpfWZpbmFsbHl7Qz1jfX07XG55Yj1mdW5jdGlvbihhLGIsYyl7c3dpdGNoKGIpe2Nhc2UgXCJpbnB1dFwiOmJiKGEsYyk7Yj1jLm5hbWU7aWYoXCJyYWRpb1wiPT09Yy50eXBlJiZudWxsIT1iKXtmb3IoYz1hO2MucGFyZW50Tm9kZTspYz1jLnBhcmVudE5vZGU7Yz1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVwiK0pTT04uc3RyaW5naWZ5KFwiXCIrYikrJ11bdHlwZT1cInJhZGlvXCJdJyk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTtpZihkIT09YSYmZC5mb3JtPT09YS5mb3JtKXt2YXIgZT1EYihkKTtpZighZSl0aHJvdyBFcnJvcihwKDkwKSk7V2EoZCk7YmIoZCxlKX19fWJyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmliKGEsYyk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmI9Yy52YWx1ZSxudWxsIT1iJiZmYihhLCEhYy5tdWx0aXBsZSxiLCExKX19O0diPVFrO0hiPVJrO1xudmFyIHNsPXt1c2luZ0NsaWVudEVudHJ5UG9pbnQ6ITEsRXZlbnRzOltDYix1ZSxEYixFYixGYixRa119LHRsPXtmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTpXYyxidW5kbGVUeXBlOjAsdmVyc2lvbjpcIjE4LjMuMVwiLHJlbmRlcmVyUGFja2FnZU5hbWU6XCJyZWFjdC1kb21cIn07XG52YXIgdWw9e2J1bmRsZVR5cGU6dGwuYnVuZGxlVHlwZSx2ZXJzaW9uOnRsLnZlcnNpb24scmVuZGVyZXJQYWNrYWdlTmFtZTp0bC5yZW5kZXJlclBhY2thZ2VOYW1lLHJlbmRlcmVyQ29uZmlnOnRsLnJlbmRlcmVyQ29uZmlnLG92ZXJyaWRlSG9va1N0YXRlOm51bGwsb3ZlcnJpZGVIb29rU3RhdGVEZWxldGVQYXRoOm51bGwsb3ZlcnJpZGVIb29rU3RhdGVSZW5hbWVQYXRoOm51bGwsb3ZlcnJpZGVQcm9wczpudWxsLG92ZXJyaWRlUHJvcHNEZWxldGVQYXRoOm51bGwsb3ZlcnJpZGVQcm9wc1JlbmFtZVBhdGg6bnVsbCxzZXRFcnJvckhhbmRsZXI6bnVsbCxzZXRTdXNwZW5zZUhhbmRsZXI6bnVsbCxzY2hlZHVsZVVwZGF0ZTpudWxsLGN1cnJlbnREaXNwYXRjaGVyUmVmOnVhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsZmluZEhvc3RJbnN0YW5jZUJ5RmliZXI6ZnVuY3Rpb24oYSl7YT1aYihhKTtyZXR1cm4gbnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZX0sZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6dGwuZmluZEZpYmVyQnlIb3N0SW5zdGFuY2V8fFxuamwsZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoOm51bGwsc2NoZWR1bGVSZWZyZXNoOm51bGwsc2NoZWR1bGVSb290Om51bGwsc2V0UmVmcmVzaEhhbmRsZXI6bnVsbCxnZXRDdXJyZW50RmliZXI6bnVsbCxyZWNvbmNpbGVyVmVyc2lvbjpcIjE4LjMuMS1uZXh0LWYxMzM4ZjgwODAtMjAyNDA0MjZcIn07aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pe3ZhciB2bD1fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYoIXZsLmlzRGlzYWJsZWQmJnZsLnN1cHBvcnRzRmliZXIpdHJ5e2tjPXZsLmluamVjdCh1bCksbGM9dmx9Y2F0Y2goYSl7fX1leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPXNsO1xuZXhwb3J0cy5jcmVhdGVQb3J0YWw9ZnVuY3Rpb24oYSxiKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtpZighbmwoYikpdGhyb3cgRXJyb3IocCgyMDApKTtyZXR1cm4gY2woYSxiLG51bGwsYyl9O2V4cG9ydHMuY3JlYXRlUm9vdD1mdW5jdGlvbihhLGIpe2lmKCFubChhKSl0aHJvdyBFcnJvcihwKDI5OSkpO3ZhciBjPSExLGQ9XCJcIixlPWtsO251bGwhPT1iJiZ2b2lkIDAhPT1iJiYoITA9PT1iLnVuc3RhYmxlX3N0cmljdE1vZGUmJihjPSEwKSx2b2lkIDAhPT1iLmlkZW50aWZpZXJQcmVmaXgmJihkPWIuaWRlbnRpZmllclByZWZpeCksdm9pZCAwIT09Yi5vblJlY292ZXJhYmxlRXJyb3ImJihlPWIub25SZWNvdmVyYWJsZUVycm9yKSk7Yj1ibChhLDEsITEsbnVsbCxudWxsLGMsITEsZCxlKTthW3VmXT1iLmN1cnJlbnQ7c2YoOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO3JldHVybiBuZXcgbGwoYil9O1xuZXhwb3J0cy5maW5kRE9NTm9kZT1mdW5jdGlvbihhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKDE9PT1hLm5vZGVUeXBlKXJldHVybiBhO3ZhciBiPWEuX3JlYWN0SW50ZXJuYWxzO2lmKHZvaWQgMD09PWIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnJlbmRlcil0aHJvdyBFcnJvcihwKDE4OCkpO2E9T2JqZWN0LmtleXMoYSkuam9pbihcIixcIik7dGhyb3cgRXJyb3IocCgyNjgsYSkpO31hPVpiKGIpO2E9bnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZTtyZXR1cm4gYX07ZXhwb3J0cy5mbHVzaFN5bmM9ZnVuY3Rpb24oYSl7cmV0dXJuIFJrKGEpfTtleHBvcnRzLmh5ZHJhdGU9ZnVuY3Rpb24oYSxiLGMpe2lmKCFvbChiKSl0aHJvdyBFcnJvcihwKDIwMCkpO3JldHVybiBybChudWxsLGEsYiwhMCxjKX07XG5leHBvcnRzLmh5ZHJhdGVSb290PWZ1bmN0aW9uKGEsYixjKXtpZighbmwoYSkpdGhyb3cgRXJyb3IocCg0MDUpKTt2YXIgZD1udWxsIT1jJiZjLmh5ZHJhdGVkU291cmNlc3x8bnVsbCxlPSExLGY9XCJcIixnPWtsO251bGwhPT1jJiZ2b2lkIDAhPT1jJiYoITA9PT1jLnVuc3RhYmxlX3N0cmljdE1vZGUmJihlPSEwKSx2b2lkIDAhPT1jLmlkZW50aWZpZXJQcmVmaXgmJihmPWMuaWRlbnRpZmllclByZWZpeCksdm9pZCAwIT09Yy5vblJlY292ZXJhYmxlRXJyb3ImJihnPWMub25SZWNvdmVyYWJsZUVycm9yKSk7Yj1lbChiLG51bGwsYSwxLG51bGwhPWM/YzpudWxsLGUsITEsZixnKTthW3VmXT1iLmN1cnJlbnQ7c2YoYSk7aWYoZClmb3IoYT0wO2E8ZC5sZW5ndGg7YSsrKWM9ZFthXSxlPWMuX2dldFZlcnNpb24sZT1lKGMuX3NvdXJjZSksbnVsbD09Yi5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhP2IubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1bYyxlXTpiLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGEucHVzaChjLFxuZSk7cmV0dXJuIG5ldyBtbChiKX07ZXhwb3J0cy5yZW5kZXI9ZnVuY3Rpb24oYSxiLGMpe2lmKCFvbChiKSl0aHJvdyBFcnJvcihwKDIwMCkpO3JldHVybiBybChudWxsLGEsYiwhMSxjKX07ZXhwb3J0cy51bm1vdW50Q29tcG9uZW50QXROb2RlPWZ1bmN0aW9uKGEpe2lmKCFvbChhKSl0aHJvdyBFcnJvcihwKDQwKSk7cmV0dXJuIGEuX3JlYWN0Um9vdENvbnRhaW5lcj8oUmsoZnVuY3Rpb24oKXtybChudWxsLG51bGwsYSwhMSxmdW5jdGlvbigpe2EuX3JlYWN0Um9vdENvbnRhaW5lcj1udWxsO2FbdWZdPW51bGx9KX0pLCEwKTohMX07ZXhwb3J0cy51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcz1RaztcbmV4cG9ydHMudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoIW9sKGMpKXRocm93IEVycm9yKHAoMjAwKSk7aWYobnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbHMpdGhyb3cgRXJyb3IocCgzOCkpO3JldHVybiBybChhLGIsYywhMSxkKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTguMy4xLW5leHQtZjEzMzhmODA4MC0yMDI0MDQyNlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZXhwb3J0cy5jcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBleHBvcnRzLmh5ZHJhdGVSb290ID0gbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgZXhwb3J0cy5jcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGV4cG9ydHMuaHlkcmF0ZVJvb3QgPSBmdW5jdGlvbihjLCBoLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5oeWRyYXRlUm9vdChjLCBoLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNoZWNrRENFKCkge1xuICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG4gIGlmIChcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBicmFuY2ggaXMgdW5yZWFjaGFibGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgY2FsbGVkXG4gICAgLy8gaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBjb25kaXRpb24gaXMgdHJ1ZSBvbmx5IGluIGRldmVsb3BtZW50LlxuICAgIC8vIFRoZXJlZm9yZSBpZiB0aGUgYnJhbmNoIGlzIHN0aWxsIGhlcmUsIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3YXNuJ3RcbiAgICAvLyBwcm9wZXJseSBhcHBsaWVkLlxuICAgIC8vIERvbid0IGNoYW5nZSB0aGUgbWVzc2FnZS4gUmVhY3QgRGV2VG9vbHMgcmVsaWVzIG9uIGl0LiBBbHNvIG1ha2Ugc3VyZVxuICAgIC8vIHRoaXMgbWVzc2FnZSBkb2Vzbid0IG9jY3VyIGVsc2V3aGVyZSBpbiB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGNhdXNlXG4gICAgLy8gYSBmYWxzZSBwb3NpdGl2ZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ15fXicpO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGNvZGUgYWJvdmUgaGFzIGJlZW4gZGVhZCBjb2RlIGVsaW1pbmF0ZWQgKERDRSdkKS5cbiAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UoY2hlY2tEQ0UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBEZXZUb29scyBzaG91bGRuJ3QgY3Jhc2ggUmVhY3QsIG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIFdlIHNob3VsZCBzdGlsbCByZXBvcnQgaW4gY2FzZSB3ZSBicmVhayB0aGlzIGNvZGUuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIERDRSBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSBSZWFjdERPTSBidW5kbGUgZXhlY3V0ZXMgc28gdGhhdFxuICAvLyBEZXZUb29scyBjYW4gcmVwb3J0IGJhZCBtaW5pZmljYXRpb24gZHVyaW5nIGluamVjdGlvbi5cbiAgY2hlY2tEQ0UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGY9cmVxdWlyZShcInJlYWN0XCIpLGs9U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIiksbD1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIiksbT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LG49Zi5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRC5SZWFjdEN1cnJlbnRPd25lcixwPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBxKGMsYSxnKXt2YXIgYixkPXt9LGU9bnVsbCxoPW51bGw7dm9pZCAwIT09ZyYmKGU9XCJcIitnKTt2b2lkIDAhPT1hLmtleSYmKGU9XCJcIithLmtleSk7dm9pZCAwIT09YS5yZWYmJihoPWEucmVmKTtmb3IoYiBpbiBhKW0uY2FsbChhLGIpJiYhcC5oYXNPd25Qcm9wZXJ0eShiKSYmKGRbYl09YVtiXSk7aWYoYyYmYy5kZWZhdWx0UHJvcHMpZm9yKGIgaW4gYT1jLmRlZmF1bHRQcm9wcyxhKXZvaWQgMD09PWRbYl0mJihkW2JdPWFbYl0pO3JldHVybnskJHR5cGVvZjprLHR5cGU6YyxrZXk6ZSxyZWY6aCxwcm9wczpkLF9vd25lcjpuLmN1cnJlbnR9fWV4cG9ydHMuRnJhZ21lbnQ9bDtleHBvcnRzLmpzeD1xO2V4cG9ydHMuanN4cz1xO1xuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBsPVN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpLG49U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKSxwPVN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKSxxPVN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKSxyPVN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKSx0PVN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKSx1PVN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpLHY9U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLHc9U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpLHg9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikseT1TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKSx6PVN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBBKGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT16JiZhW3pdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9XG52YXIgQj17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sQz1PYmplY3QuYXNzaWduLEQ9e307ZnVuY3Rpb24gRShhLGIsZSl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1lfHxCfUUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307XG5FLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWEpdGhyb3cgRXJyb3IoXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIik7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtFLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtmdW5jdGlvbiBGKCl7fUYucHJvdG90eXBlPUUucHJvdG90eXBlO2Z1bmN0aW9uIEcoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZXx8Qn12YXIgSD1HLnByb3RvdHlwZT1uZXcgRjtcbkguY29uc3RydWN0b3I9RztDKEgsRS5wcm90b3R5cGUpO0guaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEk9QXJyYXkuaXNBcnJheSxKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksSz17Y3VycmVudDpudWxsfSxMPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBNKGEsYixlKXt2YXIgZCxjPXt9LGs9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoZCBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoaz1cIlwiK2Iua2V5KSxiKUouY2FsbChiLGQpJiYhTC5oYXNPd25Qcm9wZXJ0eShkKSYmKGNbZF09YltkXSk7dmFyIGc9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1nKWMuY2hpbGRyZW49ZTtlbHNlIGlmKDE8Zyl7Zm9yKHZhciBmPUFycmF5KGcpLG09MDttPGc7bSsrKWZbbV09YXJndW1lbnRzW20rMl07Yy5jaGlsZHJlbj1mfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihkIGluIGc9YS5kZWZhdWx0UHJvcHMsZyl2b2lkIDA9PT1jW2RdJiYoY1tkXT1nW2RdKTtyZXR1cm57JCR0eXBlb2Y6bCx0eXBlOmEsa2V5OmsscmVmOmgscHJvcHM6Yyxfb3duZXI6Sy5jdXJyZW50fX1cbmZ1bmN0aW9uIE4oYSxiKXtyZXR1cm57JCR0eXBlb2Y6bCx0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9fWZ1bmN0aW9uIE8oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWx9ZnVuY3Rpb24gZXNjYXBlKGEpe3ZhciBiPXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIithLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBQPS9cXC8rL2c7ZnVuY3Rpb24gUShhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShcIlwiK2Eua2V5KTpiLnRvU3RyaW5nKDM2KX1cbmZ1bmN0aW9uIFIoYSxiLGUsZCxjKXt2YXIgaz10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09a3x8XCJib29sZWFuXCI9PT1rKWE9bnVsbDt2YXIgaD0hMTtpZihudWxsPT09YSloPSEwO2Vsc2Ugc3dpdGNoKGspe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6aD0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgbDpjYXNlIG46aD0hMH19aWYoaClyZXR1cm4gaD1hLGM9YyhoKSxhPVwiXCI9PT1kP1wiLlwiK1EoaCwwKTpkLEkoYyk/KGU9XCJcIixudWxsIT1hJiYoZT1hLnJlcGxhY2UoUCxcIiQmL1wiKStcIi9cIiksUihjLGIsZSxcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBhfSkpOm51bGwhPWMmJihPKGMpJiYoYz1OKGMsZSsoIWMua2V5fHxoJiZoLmtleT09PWMua2V5P1wiXCI6KFwiXCIrYy5rZXkpLnJlcGxhY2UoUCxcIiQmL1wiKStcIi9cIikrYSkpLGIucHVzaChjKSksMTtoPTA7ZD1cIlwiPT09ZD9cIi5cIjpkK1wiOlwiO2lmKEkoYSkpZm9yKHZhciBnPTA7ZzxhLmxlbmd0aDtnKyspe2s9XG5hW2ddO3ZhciBmPWQrUShrLGcpO2grPVIoayxiLGUsZixjKX1lbHNlIGlmKGY9QShhKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksZz0wOyEoaz1hLm5leHQoKSkuZG9uZTspaz1rLnZhbHVlLGY9ZCtRKGssZysrKSxoKz1SKGssYixlLGYsYyk7ZWxzZSBpZihcIm9iamVjdFwiPT09ayl0aHJvdyBiPVN0cmluZyhhKSxFcnJvcihcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIrKFwiW29iamVjdCBPYmplY3RdXCI9PT1iP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmIpK1wiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiKTtyZXR1cm4gaH1cbmZ1bmN0aW9uIFMoYSxiLGUpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGQ9W10sYz0wO1IoYSxkLFwiXCIsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYi5jYWxsKGUsYSxjKyspfSk7cmV0dXJuIGR9ZnVuY3Rpb24gVChhKXtpZigtMT09PWEuX3N0YXR1cyl7dmFyIGI9YS5fcmVzdWx0O2I9YigpO2IudGhlbihmdW5jdGlvbihiKXtpZigwPT09YS5fc3RhdHVzfHwtMT09PWEuX3N0YXR1cylhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yn0sZnVuY3Rpb24oYil7aWYoMD09PWEuX3N0YXR1c3x8LTE9PT1hLl9zdGF0dXMpYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWJ9KTstMT09PWEuX3N0YXR1cyYmKGEuX3N0YXR1cz0wLGEuX3Jlc3VsdD1iKX1pZigxPT09YS5fc3RhdHVzKXJldHVybiBhLl9yZXN1bHQuZGVmYXVsdDt0aHJvdyBhLl9yZXN1bHQ7fVxudmFyIFU9e2N1cnJlbnQ6bnVsbH0sVj17dHJhbnNpdGlvbjpudWxsfSxXPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOlUsUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6VixSZWFjdEN1cnJlbnRPd25lcjpLfTtmdW5jdGlvbiBYKCl7dGhyb3cgRXJyb3IoXCJhY3QoLi4uKSBpcyBub3Qgc3VwcG9ydGVkIGluIHByb2R1Y3Rpb24gYnVpbGRzIG9mIFJlYWN0LlwiKTt9XG5leHBvcnRzLkNoaWxkcmVuPXttYXA6Uyxmb3JFYWNoOmZ1bmN0aW9uKGEsYixlKXtTKGEsZnVuY3Rpb24oKXtiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZSl9LGNvdW50OmZ1bmN0aW9uKGEpe3ZhciBiPTA7UyhhLGZ1bmN0aW9uKCl7YisrfSk7cmV0dXJuIGJ9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7cmV0dXJuIFMoYSxmdW5jdGlvbihhKXtyZXR1cm4gYX0pfHxbXX0sb25seTpmdW5jdGlvbihhKXtpZighTyhhKSl0aHJvdyBFcnJvcihcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiKTtyZXR1cm4gYX19O2V4cG9ydHMuQ29tcG9uZW50PUU7ZXhwb3J0cy5GcmFnbWVudD1wO2V4cG9ydHMuUHJvZmlsZXI9cjtleHBvcnRzLlB1cmVDb21wb25lbnQ9RztleHBvcnRzLlN0cmljdE1vZGU9cTtleHBvcnRzLlN1c3BlbnNlPXc7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPVc7ZXhwb3J0cy5hY3Q9WDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixlKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiK2ErXCIuXCIpO3ZhciBkPUMoe30sYS5wcm9wcyksYz1hLmtleSxrPWEucmVmLGg9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihrPWIucmVmLGg9Sy5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGM9XCJcIitiLmtleSk7aWYoYS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzKXZhciBnPWEudHlwZS5kZWZhdWx0UHJvcHM7Zm9yKGYgaW4gYilKLmNhbGwoYixmKSYmIUwuaGFzT3duUHJvcGVydHkoZikmJihkW2ZdPXZvaWQgMD09PWJbZl0mJnZvaWQgMCE9PWc/Z1tmXTpiW2ZdKX12YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZC5jaGlsZHJlbj1lO2Vsc2UgaWYoMTxmKXtnPUFycmF5KGYpO1xuZm9yKHZhciBtPTA7bTxmO20rKylnW21dPWFyZ3VtZW50c1ttKzJdO2QuY2hpbGRyZW49Z31yZXR1cm57JCR0eXBlb2Y6bCx0eXBlOmEudHlwZSxrZXk6YyxyZWY6ayxwcm9wczpkLF9vd25lcjpofX07ZXhwb3J0cy5jcmVhdGVDb250ZXh0PWZ1bmN0aW9uKGEpe2E9eyQkdHlwZW9mOnUsX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsLF9kZWZhdWx0VmFsdWU6bnVsbCxfZ2xvYmFsTmFtZTpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjp0LF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9O2V4cG9ydHMuY3JlYXRlRWxlbWVudD1NO2V4cG9ydHMuY3JlYXRlRmFjdG9yeT1mdW5jdGlvbihhKXt2YXIgYj1NLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn07ZXhwb3J0cy5jcmVhdGVSZWY9ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX07XG5leHBvcnRzLmZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnYscmVuZGVyOmF9fTtleHBvcnRzLmlzVmFsaWRFbGVtZW50PU87ZXhwb3J0cy5sYXp5PWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp5LF9wYXlsb2FkOntfc3RhdHVzOi0xLF9yZXN1bHQ6YX0sX2luaXQ6VH19O2V4cG9ydHMubWVtbz1mdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjp4LHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX07ZXhwb3J0cy5zdGFydFRyYW5zaXRpb249ZnVuY3Rpb24oYSl7dmFyIGI9Vi50cmFuc2l0aW9uO1YudHJhbnNpdGlvbj17fTt0cnl7YSgpfWZpbmFsbHl7Vi50cmFuc2l0aW9uPWJ9fTtleHBvcnRzLnVuc3RhYmxlX2FjdD1YO2V4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZUNhbGxiYWNrKGEsYil9O2V4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihhKXtyZXR1cm4gVS5jdXJyZW50LnVzZUNvbnRleHQoYSl9O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZURlZmVycmVkVmFsdWU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VEZWZlcnJlZFZhbHVlKGEpfTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSWQ9ZnVuY3Rpb24oKXtyZXR1cm4gVS5jdXJyZW50LnVzZUlkKCl9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixlKX07ZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZUluc2VydGlvbkVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlTGF5b3V0RWZmZWN0KGEsYil9O1xuZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWR1Y2VyKGEsYixlKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VTdGF0ZShhKX07ZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VTeW5jRXh0ZXJuYWxTdG9yZShhLGIsZSl9O2V4cG9ydHMudXNlVHJhbnNpdGlvbj1mdW5jdGlvbigpe3JldHVybiBVLmN1cnJlbnQudXNlVHJhbnNpdGlvbigpfTtleHBvcnRzLnZlcnNpb249XCIxOC4zLjFcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiBzY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO2Z1bmN0aW9uIGYoYSxiKXt2YXIgYz1hLmxlbmd0aDthLnB1c2goYik7YTpmb3IoOzA8Yzspe3ZhciBkPWMtMT4+PjEsZT1hW2RdO2lmKDA8ZyhlLGIpKWFbZF09YixhW2NdPWUsYz1kO2Vsc2UgYnJlYWsgYX19ZnVuY3Rpb24gaChhKXtyZXR1cm4gMD09PWEubGVuZ3RoP251bGw6YVswXX1mdW5jdGlvbiBrKGEpe2lmKDA9PT1hLmxlbmd0aClyZXR1cm4gbnVsbDt2YXIgYj1hWzBdLGM9YS5wb3AoKTtpZihjIT09Yil7YVswXT1jO2E6Zm9yKHZhciBkPTAsZT1hLmxlbmd0aCx3PWU+Pj4xO2Q8dzspe3ZhciBtPTIqKGQrMSktMSxDPWFbbV0sbj1tKzEseD1hW25dO2lmKDA+ZyhDLGMpKW48ZSYmMD5nKHgsQyk/KGFbZF09eCxhW25dPWMsZD1uKTooYVtkXT1DLGFbbV09YyxkPW0pO2Vsc2UgaWYobjxlJiYwPmcoeCxjKSlhW2RdPXgsYVtuXT1jLGQ9bjtlbHNlIGJyZWFrIGF9fXJldHVybiBifVxuZnVuY3Rpb24gZyhhLGIpe3ZhciBjPWEuc29ydEluZGV4LWIuc29ydEluZGV4O3JldHVybiAwIT09Yz9jOmEuaWQtYi5pZH1pZihcIm9iamVjdFwiPT09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgcGVyZm9ybWFuY2Uubm93KXt2YXIgbD1wZXJmb3JtYW5jZTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBsLm5vdygpfX1lbHNle3ZhciBwPURhdGUscT1wLm5vdygpO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHAubm93KCktcX19dmFyIHI9W10sdD1bXSx1PTEsdj1udWxsLHk9Myx6PSExLEE9ITEsQj0hMSxEPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6bnVsbCxFPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0Om51bGwsRj1cInVuZGVmaW5lZFwiIT09dHlwZW9mIHNldEltbWVkaWF0ZT9zZXRJbW1lZGlhdGU6bnVsbDtcblwidW5kZWZpbmVkXCIhPT10eXBlb2YgbmF2aWdhdG9yJiZ2b2lkIDAhPT1uYXZpZ2F0b3Iuc2NoZWR1bGluZyYmdm9pZCAwIT09bmF2aWdhdG9yLnNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcmJm5hdmlnYXRvci5zY2hlZHVsaW5nLmlzSW5wdXRQZW5kaW5nLmJpbmQobmF2aWdhdG9yLnNjaGVkdWxpbmcpO2Z1bmN0aW9uIEcoYSl7Zm9yKHZhciBiPWgodCk7bnVsbCE9PWI7KXtpZihudWxsPT09Yi5jYWxsYmFjaylrKHQpO2Vsc2UgaWYoYi5zdGFydFRpbWU8PWEpayh0KSxiLnNvcnRJbmRleD1iLmV4cGlyYXRpb25UaW1lLGYocixiKTtlbHNlIGJyZWFrO2I9aCh0KX19ZnVuY3Rpb24gSChhKXtCPSExO0coYSk7aWYoIUEpaWYobnVsbCE9PWgocikpQT0hMCxJKEopO2Vsc2V7dmFyIGI9aCh0KTtudWxsIT09YiYmSyhILGIuc3RhcnRUaW1lLWEpfX1cbmZ1bmN0aW9uIEooYSxiKXtBPSExO0ImJihCPSExLEUoTCksTD0tMSk7ej0hMDt2YXIgYz15O3RyeXtHKGIpO2Zvcih2PWgocik7bnVsbCE9PXYmJighKHYuZXhwaXJhdGlvblRpbWU+Yil8fGEmJiFNKCkpOyl7dmFyIGQ9di5jYWxsYmFjaztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7di5jYWxsYmFjaz1udWxsO3k9di5wcmlvcml0eUxldmVsO3ZhciBlPWQodi5leHBpcmF0aW9uVGltZTw9Yik7Yj1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlP3YuY2FsbGJhY2s9ZTp2PT09aChyKSYmayhyKTtHKGIpfWVsc2UgayhyKTt2PWgocil9aWYobnVsbCE9PXYpdmFyIHc9ITA7ZWxzZXt2YXIgbT1oKHQpO251bGwhPT1tJiZLKEgsbS5zdGFydFRpbWUtYik7dz0hMX1yZXR1cm4gd31maW5hbGx5e3Y9bnVsbCx5PWMsej0hMX19dmFyIE49ITEsTz1udWxsLEw9LTEsUD01LFE9LTE7XG5mdW5jdGlvbiBNKCl7cmV0dXJuIGV4cG9ydHMudW5zdGFibGVfbm93KCktUTxQPyExOiEwfWZ1bmN0aW9uIFIoKXtpZihudWxsIT09Tyl7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtRPWE7dmFyIGI9ITA7dHJ5e2I9TyghMCxhKX1maW5hbGx5e2I/UygpOihOPSExLE89bnVsbCl9fWVsc2UgTj0hMX12YXIgUztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgRilTPWZ1bmN0aW9uKCl7RihSKX07ZWxzZSBpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsKXt2YXIgVD1uZXcgTWVzc2FnZUNoYW5uZWwsVT1ULnBvcnQyO1QucG9ydDEub25tZXNzYWdlPVI7Uz1mdW5jdGlvbigpe1UucG9zdE1lc3NhZ2UobnVsbCl9fWVsc2UgUz1mdW5jdGlvbigpe0QoUiwwKX07ZnVuY3Rpb24gSShhKXtPPWE7Tnx8KE49ITAsUygpKX1mdW5jdGlvbiBLKGEsYil7TD1EKGZ1bmN0aW9uKCl7YShleHBvcnRzLnVuc3RhYmxlX25vdygpKX0sYil9XG5leHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eT01O2V4cG9ydHMudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHk9MTtleHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5PTQ7ZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eT0zO2V4cG9ydHMudW5zdGFibGVfUHJvZmlsaW5nPW51bGw7ZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eT0yO2V4cG9ydHMudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7YS5jYWxsYmFjaz1udWxsfTtleHBvcnRzLnVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7QXx8enx8KEE9ITAsSShKKSl9O1xuZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbihhKXswPmF8fDEyNTxhP2NvbnNvbGUuZXJyb3IoXCJmb3JjZUZyYW1lUmF0ZSB0YWtlcyBhIHBvc2l0aXZlIGludCBiZXR3ZWVuIDAgYW5kIDEyNSwgZm9yY2luZyBmcmFtZSByYXRlcyBoaWdoZXIgdGhhbiAxMjUgZnBzIGlzIG5vdCBzdXBwb3J0ZWRcIik6UD0wPGE/TWF0aC5mbG9vcigxRTMvYSk6NX07ZXhwb3J0cy51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbD1mdW5jdGlvbigpe3JldHVybiB5fTtleHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGgocil9O2V4cG9ydHMudW5zdGFibGVfbmV4dD1mdW5jdGlvbihhKXtzd2l0Y2goeSl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6dmFyIGI9MzticmVhaztkZWZhdWx0OmI9eX12YXIgYz15O3k9Yjt0cnl7cmV0dXJuIGEoKX1maW5hbGx5e3k9Y319O2V4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb249ZnVuY3Rpb24oKXt9O1xuZXhwb3J0cy51bnN0YWJsZV9yZXF1ZXN0UGFpbnQ9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5PWZ1bmN0aW9uKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6YnJlYWs7ZGVmYXVsdDphPTN9dmFyIGM9eTt5PWE7dHJ5e3JldHVybiBiKCl9ZmluYWxseXt5PWN9fTtcbmV4cG9ydHMudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jPyhjPWMuZGVsYXksYz1cIm51bWJlclwiPT09dHlwZW9mIGMmJjA8Yz9kK2M6ZCk6Yz1kO3N3aXRjaChhKXtjYXNlIDE6dmFyIGU9LTE7YnJlYWs7Y2FzZSAyOmU9MjUwO2JyZWFrO2Nhc2UgNTplPTEwNzM3NDE4MjM7YnJlYWs7Y2FzZSA0OmU9MUU0O2JyZWFrO2RlZmF1bHQ6ZT01RTN9ZT1jK2U7YT17aWQ6dSsrLGNhbGxiYWNrOmIscHJpb3JpdHlMZXZlbDphLHN0YXJ0VGltZTpjLGV4cGlyYXRpb25UaW1lOmUsc29ydEluZGV4Oi0xfTtjPmQ/KGEuc29ydEluZGV4PWMsZih0LGEpLG51bGw9PT1oKHIpJiZhPT09aCh0KSYmKEI/KEUoTCksTD0tMSk6Qj0hMCxLKEgsYy1kKSkpOihhLnNvcnRJbmRleD1lLGYocixhKSxBfHx6fHwoQT0hMCxJKEopKSk7cmV0dXJuIGF9O1xuZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1NO2V4cG9ydHMudW5zdGFibGVfd3JhcENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPXk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9eTt5PWI7dHJ5e3JldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1maW5hbGx5e3k9Y319fTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgZz1yZXF1aXJlKFwicmVhY3RcIik7ZnVuY3Rpb24gbihhLGIpe3JldHVybiBhPT09YiYmKDAhPT1hfHwxL2E9PT0xL2IpfHxhIT09YSYmYiE9PWJ9dmFyIHA9XCJmdW5jdGlvblwiPT09dHlwZW9mIE9iamVjdC5pcz9PYmplY3QuaXM6bixxPWcudXNlU3luY0V4dGVybmFsU3RvcmUscj1nLnVzZVJlZix0PWcudXNlRWZmZWN0LHU9Zy51c2VNZW1vLHY9Zy51c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3Rvcj1mdW5jdGlvbihhLGIsZSxsLGgpe3ZhciBjPXIobnVsbCk7aWYobnVsbD09PWMuY3VycmVudCl7dmFyIGY9e2hhc1ZhbHVlOiExLHZhbHVlOm51bGx9O2MuY3VycmVudD1mfWVsc2UgZj1jLmN1cnJlbnQ7Yz11KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXtpZighYyl7Yz0hMDtkPWE7YT1sKGEpO2lmKHZvaWQgMCE9PWgmJmYuaGFzVmFsdWUpe3ZhciBiPWYudmFsdWU7aWYoaChiLGEpKXJldHVybiBrPWJ9cmV0dXJuIGs9YX1iPWs7aWYocChkLGEpKXJldHVybiBiO3ZhciBlPWwoYSk7aWYodm9pZCAwIT09aCYmaChiLGUpKXJldHVybiBiO2Q9YTtyZXR1cm4gaz1lfXZhciBjPSExLGQsayxtPXZvaWQgMD09PWU/bnVsbDplO3JldHVybltmdW5jdGlvbigpe3JldHVybiBhKGIoKSl9LG51bGw9PT1tP3ZvaWQgMDpmdW5jdGlvbigpe3JldHVybiBhKG0oKSl9XX0sW2IsZSxsLGhdKTt2YXIgZD1xKGEsY1swXSxjWzFdKTtcbnQoZnVuY3Rpb24oKXtmLmhhc1ZhbHVlPSEwO2YudmFsdWU9ZH0sW2RdKTt2KGQpO3JldHVybiBkfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG52YXIgXzEgPSBcIm8wVWJwUU9PejJSWHBUOVhJQ1hwXCI7XG5leHBvcnQgeyBfMSBhcyBcImNvbnRhaW5lclwiIH1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxudmFyIF8xID0gXCJDWkVqYjBxcDRCcXdHdDdGcmU3aFwiO1xudmFyIF8yID0gXCJBTE5XQmUyOFZHU2xhR29lMmNRY1wiO1xudmFyIF8zID0gXCJidVMzVDBGN0tqOTdiNmxzb016OFwiO1xudmFyIF80ID0gXCJ1NnlsRmxvQml6M3lPek9XZXk3dlwiO1xudmFyIF81ID0gXCJQNWpZNlJyaUpYSENrV2hVajFtUVwiO1xudmFyIF82ID0gXCJUNDBVTUYxTUFBT1VGeTNjMHJJMVwiO1xudmFyIF83ID0gXCJRZnZFOU1RYmRwN2N4SnE1TlZyd1wiO1xudmFyIF84ID0gXCJtQW9oazVITTRLREZZNlJRVm9Ua1wiO1xuZXhwb3J0IHsgXzEgYXMgXCJpbmNsdWRlZF9jaGFyXCIsIF8yIGFzIFwibGV0dGVyXCIsIF8zIGFzIFwibWF0Y2hlZF9jaGFyXCIsIF80IGFzIFwic2hvd1wiLCBfNSBhcyBcInVua25vd25cIiwgXzYgYXMgXCJ3aWdnbGVcIiwgXzcgYXMgXCJ3b3JkXCIsIF84IGFzIFwid3JvbmdfY2hhclwiIH1cbiIsIi8vIHNyYy91dGlscy9mb3JtYXRQcm9kRXJyb3JNZXNzYWdlLnRzXG5mdW5jdGlvbiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKGNvZGUpIHtcbiAgcmV0dXJuIGBNaW5pZmllZCBSZWR1eCBlcnJvciAjJHtjb2RlfTsgdmlzaXQgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvRXJyb3JzP2NvZGU9JHtjb2RlfSBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzLiBgO1xufVxuXG4vLyBzcmMvdXRpbHMvc3ltYm9sLW9ic2VydmFibGUudHNcbnZhciAkJG9ic2VydmFibGUgPSAvKiBAX19QVVJFX18gKi8gKCgpID0+IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wub2JzZXJ2YWJsZSB8fCBcIkBAb2JzZXJ2YWJsZVwiKSgpO1xudmFyIHN5bWJvbF9vYnNlcnZhYmxlX2RlZmF1bHQgPSAkJG9ic2VydmFibGU7XG5cbi8vIHNyYy91dGlscy9hY3Rpb25UeXBlcy50c1xudmFyIHJhbmRvbVN0cmluZyA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdChcIlwiKS5qb2luKFwiLlwiKTtcbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogYEBAcmVkdXgvSU5JVCR7LyogQF9fUFVSRV9fICovIHJhbmRvbVN0cmluZygpfWAsXG4gIFJFUExBQ0U6IGBAQHJlZHV4L1JFUExBQ0Ukey8qIEBfX1BVUkVfXyAqLyByYW5kb21TdHJpbmcoKX1gLFxuICBQUk9CRV9VTktOT1dOX0FDVElPTjogKCkgPT4gYEBAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT04ke3JhbmRvbVN0cmluZygpfWBcbn07XG52YXIgYWN0aW9uVHlwZXNfZGVmYXVsdCA9IEFjdGlvblR5cGVzO1xuXG4vLyBzcmMvdXRpbHMvaXNQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgfHwgb2JqID09PSBudWxsKVxuICAgIHJldHVybiBmYWxzZTtcbiAgbGV0IHByb3RvID0gb2JqO1xuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IHByb3RvIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBudWxsO1xufVxuXG4vLyBzcmMvdXRpbHMva2luZE9mLnRzXG5mdW5jdGlvbiBtaW5pS2luZE9mKHZhbCkge1xuICBpZiAodmFsID09PSB2b2lkIDApXG4gICAgcmV0dXJuIFwidW5kZWZpbmVkXCI7XG4gIGlmICh2YWwgPT09IG51bGwpXG4gICAgcmV0dXJuIFwibnVsbFwiO1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgY2FzZSBcIm51bWJlclwiOlxuICAgIGNhc2UgXCJzeW1ib2xcIjpcbiAgICBjYXNlIFwiZnVuY3Rpb25cIjoge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXG4gICAgcmV0dXJuIFwiYXJyYXlcIjtcbiAgaWYgKGlzRGF0ZSh2YWwpKVxuICAgIHJldHVybiBcImRhdGVcIjtcbiAgaWYgKGlzRXJyb3IodmFsKSlcbiAgICByZXR1cm4gXCJlcnJvclwiO1xuICBjb25zdCBjb25zdHJ1Y3Rvck5hbWUgPSBjdG9yTmFtZSh2YWwpO1xuICBzd2l0Y2ggKGNvbnN0cnVjdG9yTmFtZSkge1xuICAgIGNhc2UgXCJTeW1ib2xcIjpcbiAgICBjYXNlIFwiUHJvbWlzZVwiOlxuICAgIGNhc2UgXCJXZWFrTWFwXCI6XG4gICAgY2FzZSBcIldlYWtTZXRcIjpcbiAgICBjYXNlIFwiTWFwXCI6XG4gICAgY2FzZSBcIlNldFwiOlxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yTmFtZTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xufVxuZnVuY3Rpb24gY3Rvck5hbWUodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yID09PSBcImZ1bmN0aW9uXCIgPyB2YWwuY29uc3RydWN0b3IubmFtZSA6IG51bGw7XG59XG5mdW5jdGlvbiBpc0Vycm9yKHZhbCkge1xuICByZXR1cm4gdmFsIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIHZhbC5tZXNzYWdlID09PSBcInN0cmluZ1wiICYmIHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLnN0YWNrVHJhY2VMaW1pdCA9PT0gXCJudW1iZXJcIjtcbn1cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpXG4gICAgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgdmFsLnRvRGF0ZVN0cmluZyA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB2YWwuZ2V0RGF0ZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB2YWwuc2V0RGF0ZSA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24ga2luZE9mKHZhbCkge1xuICBsZXQgdHlwZU9mVmFsID0gdHlwZW9mIHZhbDtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHR5cGVPZlZhbCA9IG1pbmlLaW5kT2YodmFsKTtcbiAgfVxuICByZXR1cm4gdHlwZU9mVmFsO1xufVxuXG4vLyBzcmMvY3JlYXRlU3RvcmUudHNcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDIpIDogYEV4cGVjdGVkIHRoZSByb290IHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICcke2tpbmRPZihyZWR1Y2VyKX0nYCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBhcmd1bWVudHNbM10gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDApIDogXCJJdCBsb29rcyBsaWtlIHlvdSBhcmUgcGFzc2luZyBzZXZlcmFsIHN0b3JlIGVuaGFuY2VycyB0byBjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSB0b2dldGhlciB0byBhIHNpbmdsZSBmdW5jdGlvbi4gU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC00LXN0b3JlI2NyZWF0aW5nLWEtc3RvcmUtd2l0aC1lbmhhbmNlcnMgZm9yIGFuIGV4YW1wbGUuXCIpO1xuICB9XG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZW5oYW5jZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdm9pZCAwO1xuICB9XG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEpIDogYEV4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJyR7a2luZE9mKGVuaGFuY2VyKX0nYCk7XG4gICAgfVxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG4gIGxldCBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIGxldCBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgbGV0IGN1cnJlbnRMaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBsZXQgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIGxldCBsaXN0ZW5lcklkQ291bnRlciA9IDA7XG4gIGxldCBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgY3VycmVudExpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIG5leHRMaXN0ZW5lcnMuc2V0KGtleSwgbGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzKSA6IFwiWW91IG1heSBub3QgY2FsbCBzdG9yZS5nZXRTdGF0ZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gVGhlIHJlZHVjZXIgaGFzIGFscmVhZHkgcmVjZWl2ZWQgdGhlIHN0YXRlIGFzIGFuIGFyZ3VtZW50LiBQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDQpIDogYEV4cGVjdGVkIHRoZSBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJyR7a2luZE9mKGxpc3RlbmVyKX0nYCk7XG4gICAgfVxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg1KSA6IFwiWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuIElmIHlvdSB3b3VsZCBsaWtlIHRvIGJlIG5vdGlmaWVkIGFmdGVyIHRoZSBzdG9yZSBoYXMgYmVlbiB1cGRhdGVkLCBzdWJzY3JpYmUgZnJvbSBhIGNvbXBvbmVudCBhbmQgaW52b2tlIHN0b3JlLmdldFN0YXRlKCkgaW4gdGhlIGNhbGxiYWNrIHRvIGFjY2VzcyB0aGUgbGF0ZXN0IHN0YXRlLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuXCIpO1xuICAgIH1cbiAgICBsZXQgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgY29uc3QgbGlzdGVuZXJJZCA9IGxpc3RlbmVySWRDb3VudGVyKys7XG4gICAgbmV4dExpc3RlbmVycy5zZXQobGlzdGVuZXJJZCwgbGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDYpIDogXCJZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuXCIpO1xuICAgICAgfVxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICBuZXh0TGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcklkKTtcbiAgICAgIGN1cnJlbnRMaXN0ZW5lcnMgPSBudWxsO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDcpIDogYEFjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiBJbnN0ZWFkLCB0aGUgYWN0dWFsIHR5cGUgd2FzOiAnJHtraW5kT2YoYWN0aW9uKX0nLiBZb3UgbWF5IG5lZWQgdG8gYWRkIG1pZGRsZXdhcmUgdG8geW91ciBzdG9yZSBzZXR1cCB0byBoYW5kbGUgZGlzcGF0Y2hpbmcgb3RoZXIgdmFsdWVzLCBzdWNoIGFzICdyZWR1eC10aHVuaycgdG8gaGFuZGxlIGRpc3BhdGNoaW5nIGZ1bmN0aW9ucy4gU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC00LXN0b3JlI21pZGRsZXdhcmUgYW5kIGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC02LWFzeW5jLWxvZ2ljI3VzaW5nLXRoZS1yZWR1eC10aHVuay1taWRkbGV3YXJlIGZvciBleGFtcGxlcy5gKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoOCkgOiAnQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiBZb3UgbWF5IGhhdmUgbWlzc3BlbGxlZCBhbiBhY3Rpb24gdHlwZSBzdHJpbmcgY29uc3RhbnQuJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE3KSA6IGBBY3Rpb24gXCJ0eXBlXCIgcHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZy4gSW5zdGVhZCwgdGhlIGFjdHVhbCB0eXBlIHdhczogJyR7a2luZE9mKGFjdGlvbi50eXBlKX0nLiBWYWx1ZSB3YXM6ICcke2FjdGlvbi50eXBlfScgKHN0cmluZ2lmaWVkKWApO1xuICAgIH1cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoOSkgOiBcIlJlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy5cIik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTApIDogYEV4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJyR7a2luZE9mKG5leHRSZWR1Y2VyKX1gKTtcbiAgICB9XG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBhY3Rpb25UeXBlc19kZWZhdWx0LlJFUExBQ0VcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIGNvbnN0IG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09IFwib2JqZWN0XCIgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMSkgOiBgRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICcke2tpbmRPZihvYnNlcnZlcil9J2ApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBjb25zdCBvYnNlcnZlckFzT2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXJBc09ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyQXNPYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgW3N5bWJvbF9vYnNlcnZhYmxlX2RlZmF1bHRdKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlc19kZWZhdWx0LklOSVRcbiAgfSk7XG4gIGNvbnN0IHN0b3JlID0ge1xuICAgIGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcixcbiAgICBbc3ltYm9sX29ic2VydmFibGVfZGVmYXVsdF06IG9ic2VydmFibGVcbiAgfTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuZnVuY3Rpb24gbGVnYWN5X2NyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcbn1cblxuLy8gc3JjL3V0aWxzL3dhcm5pbmcudHNcbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgdHJ5IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG4vLyBzcmMvY29tYmluZVJlZHVjZXJzLnRzXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICBjb25zdCByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgY29uc3QgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBhY3Rpb25UeXBlc19kZWZhdWx0LklOSVQgPyBcInByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZVwiIDogXCJwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlclwiO1xuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFwiU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkIHRvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy5cIjtcbiAgfVxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gYFRoZSAke2FyZ3VtZW50TmFtZX0gaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcIiR7a2luZE9mKGlucHV0U3RhdGUpfVwiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIGtleXM6IFwiJHtyZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKX1cImA7XG4gIH1cbiAgY29uc3QgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoKGtleSkgPT4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldKTtcbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gYWN0aW9uVHlwZXNfZGVmYXVsdC5SRVBMQUNFKVxuICAgIHJldHVybjtcbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gYFVuZXhwZWN0ZWQgJHt1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gXCJrZXlzXCIgOiBcImtleVwifSBcIiR7dW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJyl9XCIgZm91bmQgaW4gJHthcmd1bWVudE5hbWV9LiBFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6IFwiJHtyZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKX1cIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC5gO1xuICB9XG59XG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodm9pZCAwLCB7XG4gICAgICB0eXBlOiBhY3Rpb25UeXBlc19kZWZhdWx0LklOSVRcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTIpIDogYFRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXCIke2tleX1cIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiBJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCB5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLmApO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodm9pZCAwLCB7XG4gICAgICB0eXBlOiBhY3Rpb25UeXBlc19kZWZhdWx0LlBST0JFX1VOS05PV05fQUNUSU9OKClcbiAgICB9KSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTMpIDogYFRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXCIke2tleX1cIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiBEb24ndCB0cnkgdG8gaGFuZGxlICcke2FjdGlvblR5cGVzX2RlZmF1bHQuSU5JVH0nIG9yIG90aGVyIGFjdGlvbnMgaW4gXCJyZWR1eC8qXCIgbmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIGFjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZCwgYnV0IGNhbiBiZSBudWxsLmApO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgY29uc3QgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIGNvbnN0IGZpbmFsUmVkdWNlcnMgPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB3YXJuaW5nKGBObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXCIke2tleX1cImApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpO1xuICBsZXQgdW5leHBlY3RlZEtleUNhY2hlO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cbiAgbGV0IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlID0ge30sIGFjdGlvbikge1xuICAgIGlmIChzaGFwZUFzc2VydGlvbkVycm9yKSB7XG4gICAgICB0aHJvdyBzaGFwZUFzc2VydGlvbkVycm9yO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zdCB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICB3YXJuaW5nKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGZpbmFsUmVkdWNlcktleXNbaV07XG4gICAgICBjb25zdCByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1trZXldO1xuICAgICAgY29uc3QgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW2tleV07XG4gICAgICBjb25zdCBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjb25zdCBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNCkgOiBgV2hlbiBjYWxsZWQgd2l0aCBhbiBhY3Rpb24gb2YgdHlwZSAke2FjdGlvblR5cGUgPyBgXCIke1N0cmluZyhhY3Rpb25UeXBlKX1cImAgOiBcIih1bmtub3duIHR5cGUpXCJ9LCB0aGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFwiJHtrZXl9XCIgcmV0dXJuZWQgdW5kZWZpbmVkLiBUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIElmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLmApO1xuICAgICAgfVxuICAgICAgbmV4dFN0YXRlW2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhzdGF0ZSkubGVuZ3RoO1xuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cbi8vIHNyYy9iaW5kQWN0aW9uQ3JlYXRvcnMudHNcbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJncykpO1xuICB9O1xufVxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSBcIm9iamVjdFwiIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTYpIDogYGJpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgYnV0IGluc3RlYWQgcmVjZWl2ZWQ6ICcke2tpbmRPZihhY3Rpb25DcmVhdG9ycyl9Jy4gRGlkIHlvdSB3cml0ZSBcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXCIgaW5zdGVhZCBvZiBcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cIj9gKTtcbiAgfVxuICBjb25zdCBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbi8vIHNyYy9jb21wb3NlLnRzXG5mdW5jdGlvbiBjb21wb3NlKC4uLmZ1bmNzKSB7XG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKGFyZykgPT4gYXJnO1xuICB9XG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZSgoYSwgYikgPT4gKC4uLmFyZ3MpID0+IGEoYiguLi5hcmdzKSkpO1xufVxuXG4vLyBzcmMvYXBwbHlNaWRkbGV3YXJlLnRzXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpIHtcbiAgcmV0dXJuIChjcmVhdGVTdG9yZTIpID0+IChyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUyKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgICBsZXQgZGlzcGF0Y2ggPSAoKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNSkgOiBcIkRpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuIE90aGVyIG1pZGRsZXdhcmUgd291bGQgbm90IGJlIGFwcGxpZWQgdG8gdGhpcyBkaXNwYXRjaC5cIik7XG4gICAgfTtcbiAgICBjb25zdCBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgZGlzcGF0Y2g6IChhY3Rpb24sIC4uLmFyZ3MpID0+IGRpc3BhdGNoKGFjdGlvbiwgLi4uYXJncylcbiAgICB9O1xuICAgIGNvbnN0IGNoYWluID0gbWlkZGxld2FyZXMubWFwKChtaWRkbGV3YXJlKSA9PiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpKTtcbiAgICBkaXNwYXRjaCA9IGNvbXBvc2UoLi4uY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RvcmUsXG4gICAgICBkaXNwYXRjaFxuICAgIH07XG4gIH07XG59XG5cbi8vIHNyYy91dGlscy9pc0FjdGlvbi50c1xuZnVuY3Rpb24gaXNBY3Rpb24oYWN0aW9uKSB7XG4gIHJldHVybiBpc1BsYWluT2JqZWN0KGFjdGlvbikgJiYgXCJ0eXBlXCIgaW4gYWN0aW9uICYmIHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gXCJzdHJpbmdcIjtcbn1cbmV4cG9ydCB7XG4gIGFjdGlvblR5cGVzX2RlZmF1bHQgYXMgX19ET19OT1RfVVNFX19BY3Rpb25UeXBlcyxcbiAgYXBwbHlNaWRkbGV3YXJlLFxuICBiaW5kQWN0aW9uQ3JlYXRvcnMsXG4gIGNvbWJpbmVSZWR1Y2VycyxcbiAgY29tcG9zZSxcbiAgY3JlYXRlU3RvcmUsXG4gIGlzQWN0aW9uLFxuICBpc1BsYWluT2JqZWN0LFxuICBsZWdhY3lfY3JlYXRlU3RvcmVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWR1eC5tanMubWFwIiwiLy8gc3JjL2luZGV4LnRzXG5mdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCkge1xuICBjb25zdCBtaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICB9O1xuICByZXR1cm4gbWlkZGxld2FyZTtcbn1cbnZhciB0aHVuayA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZSgpO1xudmFyIHdpdGhFeHRyYUFyZ3VtZW50ID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlO1xuZXhwb3J0IHtcbiAgdGh1bmssXG4gIHdpdGhFeHRyYUFyZ3VtZW50XG59O1xuIiwiLy8gc3JjL3V0aWxzL2Vudi50c1xudmFyIE5PVEhJTkcgPSBTeW1ib2wuZm9yKFwiaW1tZXItbm90aGluZ1wiKTtcbnZhciBEUkFGVEFCTEUgPSBTeW1ib2wuZm9yKFwiaW1tZXItZHJhZnRhYmxlXCIpO1xudmFyIERSQUZUX1NUQVRFID0gU3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpO1xuXG4vLyBzcmMvdXRpbHMvZXJyb3JzLnRzXG52YXIgZXJyb3JzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gW1xuICAvLyBBbGwgZXJyb3IgY29kZXMsIHN0YXJ0aW5nIGJ5IDA6XG4gIGZ1bmN0aW9uKHBsdWdpbikge1xuICAgIHJldHVybiBgVGhlIHBsdWdpbiBmb3IgJyR7cGx1Z2lufScgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIFxcYGVuYWJsZSR7cGx1Z2lufSgpXFxgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uYDtcbiAgfSxcbiAgZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gYHByb2R1Y2UgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoaW5ncyB0aGF0IGFyZSBkcmFmdGFibGU6IHBsYWluIG9iamVjdHMsIGFycmF5cywgTWFwLCBTZXQgb3IgY2xhc3NlcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCAnW2ltbWVyYWJsZV06IHRydWUnLiBHb3QgJyR7dGhpbmd9J2A7XG4gIH0sXG4gIFwiVGhpcyBvYmplY3QgaGFzIGJlZW4gZnJvemVuIGFuZCBzaG91bGQgbm90IGJlIG11dGF0ZWRcIixcbiAgZnVuY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiBcIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIgKyBkYXRhO1xuICB9LFxuICBcIkFuIGltbWVyIHByb2R1Y2VyIHJldHVybmVkIGEgbmV3IHZhbHVlICphbmQqIG1vZGlmaWVkIGl0cyBkcmFmdC4gRWl0aGVyIHJldHVybiBhIG5ldyB2YWx1ZSAqb3IqIG1vZGlmeSB0aGUgZHJhZnQuXCIsXG4gIFwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsXG4gIFwiVGhlIGZpcnN0IG9yIHNlY29uZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uXCIsXG4gIFwiVGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIsXG4gIFwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLFxuICBcIkZpcnN0IGFyZ3VtZW50IHRvIGBmaW5pc2hEcmFmdGAgbXVzdCBiZSBhIGRyYWZ0IHJldHVybmVkIGJ5IGBjcmVhdGVEcmFmdGBcIixcbiAgZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gYCdjdXJyZW50JyBleHBlY3RzIGEgZHJhZnQsIGdvdDogJHt0aGluZ31gO1xuICB9LFxuICBcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsXG4gIFwiT2JqZWN0LnNldFByb3RvdHlwZU9mKCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIixcbiAgXCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIixcbiAgXCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsXG4gIGZ1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIGAnb3JpZ2luYWwnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiAke3RoaW5nfWA7XG4gIH1cbiAgLy8gTm90ZTogaWYgbW9yZSBlcnJvcnMgYXJlIGFkZGVkLCB0aGUgZXJyb3JPZmZzZXQgaW4gUGF0Y2hlcy50cyBzaG91bGQgYmUgaW5jcmVhc2VkXG4gIC8vIFNlZSBQYXRjaGVzLnRzIGZvciBhZGRpdGlvbmFsIGVycm9yc1xuXSA6IFtdO1xuZnVuY3Rpb24gZGllKGVycm9yLCAuLi5hcmdzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBjb25zdCBlID0gZXJyb3JzW2Vycm9yXTtcbiAgICBjb25zdCBtc2cgPSB0eXBlb2YgZSA9PT0gXCJmdW5jdGlvblwiID8gZS5hcHBseShudWxsLCBhcmdzKSA6IGU7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbSW1tZXJdICR7bXNnfWApO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgW0ltbWVyXSBtaW5pZmllZCBlcnJvciBucjogJHtlcnJvcn0uIEZ1bGwgZXJyb3IgYXQ6IGh0dHBzOi8vYml0Lmx5LzNjWEVLV2ZgXG4gICk7XG59XG5cbi8vIHNyYy91dGlscy9jb21tb24udHNcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbmZ1bmN0aW9uIGlzRHJhZnQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgISF2YWx1ZVtEUkFGVF9TVEFURV07XG59XG5mdW5jdGlvbiBpc0RyYWZ0YWJsZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKVxuICAgIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpIHx8ICEhdmFsdWVbRFJBRlRBQkxFXSB8fCAhIXZhbHVlLmNvbnN0cnVjdG9yPy5bRFJBRlRBQkxFXSB8fCBpc01hcCh2YWx1ZSkgfHwgaXNTZXQodmFsdWUpO1xufVxudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCk7XG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcHJvdG8gPSBnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IEN0b3IgPSBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgaWYgKEN0b3IgPT09IE9iamVjdClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09IFwiZnVuY3Rpb25cIiAmJiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKEN0b3IpID09PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuZnVuY3Rpb24gb3JpZ2luYWwodmFsdWUpIHtcbiAgaWYgKCFpc0RyYWZ0KHZhbHVlKSlcbiAgICBkaWUoMTUsIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlW0RSQUZUX1NUQVRFXS5iYXNlXztcbn1cbmZ1bmN0aW9uIGVhY2gob2JqLCBpdGVyKSB7XG4gIGlmIChnZXRBcmNodHlwZShvYmopID09PSAwIC8qIE9iamVjdCAqLykge1xuICAgIFJlZmxlY3Qub3duS2V5cyhvYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaXRlcihrZXksIG9ialtrZXldLCBvYmopO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iai5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IGl0ZXIoaW5kZXgsIGVudHJ5LCBvYmopKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0QXJjaHR5cGUodGhpbmcpIHtcbiAgY29uc3Qgc3RhdGUgPSB0aGluZ1tEUkFGVF9TVEFURV07XG4gIHJldHVybiBzdGF0ZSA/IHN0YXRlLnR5cGVfIDogQXJyYXkuaXNBcnJheSh0aGluZykgPyAxIC8qIEFycmF5ICovIDogaXNNYXAodGhpbmcpID8gMiAvKiBNYXAgKi8gOiBpc1NldCh0aGluZykgPyAzIC8qIFNldCAqLyA6IDAgLyogT2JqZWN0ICovO1xufVxuZnVuY3Rpb24gaGFzKHRoaW5nLCBwcm9wKSB7XG4gIHJldHVybiBnZXRBcmNodHlwZSh0aGluZykgPT09IDIgLyogTWFwICovID8gdGhpbmcuaGFzKHByb3ApIDogT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaW5nLCBwcm9wKTtcbn1cbmZ1bmN0aW9uIGdldCh0aGluZywgcHJvcCkge1xuICByZXR1cm4gZ2V0QXJjaHR5cGUodGhpbmcpID09PSAyIC8qIE1hcCAqLyA/IHRoaW5nLmdldChwcm9wKSA6IHRoaW5nW3Byb3BdO1xufVxuZnVuY3Rpb24gc2V0KHRoaW5nLCBwcm9wT3JPbGRWYWx1ZSwgdmFsdWUpIHtcbiAgY29uc3QgdCA9IGdldEFyY2h0eXBlKHRoaW5nKTtcbiAgaWYgKHQgPT09IDIgLyogTWFwICovKVxuICAgIHRoaW5nLnNldChwcm9wT3JPbGRWYWx1ZSwgdmFsdWUpO1xuICBlbHNlIGlmICh0ID09PSAzIC8qIFNldCAqLykge1xuICAgIHRoaW5nLmFkZCh2YWx1ZSk7XG4gIH0gZWxzZVxuICAgIHRoaW5nW3Byb3BPck9sZFZhbHVlXSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5mdW5jdGlvbiBpc01hcCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIE1hcDtcbn1cbmZ1bmN0aW9uIGlzU2V0KHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgU2V0O1xufVxuZnVuY3Rpb24gbGF0ZXN0KHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5jb3B5XyB8fCBzdGF0ZS5iYXNlXztcbn1cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KGJhc2UsIHN0cmljdCkge1xuICBpZiAoaXNNYXAoYmFzZSkpIHtcbiAgICByZXR1cm4gbmV3IE1hcChiYXNlKTtcbiAgfVxuICBpZiAoaXNTZXQoYmFzZSkpIHtcbiAgICByZXR1cm4gbmV3IFNldChiYXNlKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShiYXNlKSlcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYmFzZSk7XG4gIGNvbnN0IGlzUGxhaW4gPSBpc1BsYWluT2JqZWN0KGJhc2UpO1xuICBpZiAoc3RyaWN0ID09PSB0cnVlIHx8IHN0cmljdCA9PT0gXCJjbGFzc19vbmx5XCIgJiYgIWlzUGxhaW4pIHtcbiAgICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGJhc2UpO1xuICAgIGRlbGV0ZSBkZXNjcmlwdG9yc1tEUkFGVF9TVEFURV07XG4gICAgbGV0IGtleXMgPSBSZWZsZWN0Lm93bktleXMoZGVzY3JpcHRvcnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGNvbnN0IGRlc2MgPSBkZXNjcmlwdG9yc1trZXldO1xuICAgICAgaWYgKGRlc2Mud3JpdGFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpXG4gICAgICAgIGRlc2NyaXB0b3JzW2tleV0gPSB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIC8vIGNvdWxkIGxpdmUgd2l0aCAhIWRlc2Muc2V0IGFzIHdlbGwgaGVyZS4uLlxuICAgICAgICAgIGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcbiAgICAgICAgICB2YWx1ZTogYmFzZVtrZXldXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKGdldFByb3RvdHlwZU9mKGJhc2UpLCBkZXNjcmlwdG9ycyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihiYXNlKTtcbiAgICBpZiAocHJvdG8gIT09IG51bGwgJiYgaXNQbGFpbikge1xuICAgICAgcmV0dXJuIHsgLi4uYmFzZSB9O1xuICAgIH1cbiAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKHByb3RvKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIGJhc2UpO1xuICB9XG59XG5mdW5jdGlvbiBmcmVlemUob2JqLCBkZWVwID0gZmFsc2UpIHtcbiAgaWYgKGlzRnJvemVuKG9iaikgfHwgaXNEcmFmdChvYmopIHx8ICFpc0RyYWZ0YWJsZShvYmopKVxuICAgIHJldHVybiBvYmo7XG4gIGlmIChnZXRBcmNodHlwZShvYmopID4gMSkge1xuICAgIG9iai5zZXQgPSBvYmouYWRkID0gb2JqLmNsZWFyID0gb2JqLmRlbGV0ZSA9IGRvbnRNdXRhdGVGcm96ZW5Db2xsZWN0aW9ucztcbiAgfVxuICBPYmplY3QuZnJlZXplKG9iaik7XG4gIGlmIChkZWVwKVxuICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiBmcmVlemUodmFsdWUsIHRydWUpKTtcbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIGRvbnRNdXRhdGVGcm96ZW5Db2xsZWN0aW9ucygpIHtcbiAgZGllKDIpO1xufVxuZnVuY3Rpb24gaXNGcm96ZW4ob2JqKSB7XG4gIHJldHVybiBPYmplY3QuaXNGcm96ZW4ob2JqKTtcbn1cblxuLy8gc3JjL3V0aWxzL3BsdWdpbnMudHNcbnZhciBwbHVnaW5zID0ge307XG5mdW5jdGlvbiBnZXRQbHVnaW4ocGx1Z2luS2V5KSB7XG4gIGNvbnN0IHBsdWdpbiA9IHBsdWdpbnNbcGx1Z2luS2V5XTtcbiAgaWYgKCFwbHVnaW4pIHtcbiAgICBkaWUoMCwgcGx1Z2luS2V5KTtcbiAgfVxuICByZXR1cm4gcGx1Z2luO1xufVxuZnVuY3Rpb24gbG9hZFBsdWdpbihwbHVnaW5LZXksIGltcGxlbWVudGF0aW9uKSB7XG4gIGlmICghcGx1Z2luc1twbHVnaW5LZXldKVxuICAgIHBsdWdpbnNbcGx1Z2luS2V5XSA9IGltcGxlbWVudGF0aW9uO1xufVxuXG4vLyBzcmMvY29yZS9zY29wZS50c1xudmFyIGN1cnJlbnRTY29wZTtcbmZ1bmN0aW9uIGdldEN1cnJlbnRTY29wZSgpIHtcbiAgcmV0dXJuIGN1cnJlbnRTY29wZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNjb3BlKHBhcmVudF8sIGltbWVyXykge1xuICByZXR1cm4ge1xuICAgIGRyYWZ0c186IFtdLFxuICAgIHBhcmVudF8sXG4gICAgaW1tZXJfLFxuICAgIC8vIFdoZW5ldmVyIHRoZSBtb2RpZmllZCBkcmFmdCBjb250YWlucyBhIGRyYWZ0IGZyb20gYW5vdGhlciBzY29wZSwgd2VcbiAgICAvLyBuZWVkIHRvIHByZXZlbnQgYXV0by1mcmVlemluZyBzbyB0aGUgdW5vd25lZCBkcmFmdCBjYW4gYmUgZmluYWxpemVkLlxuICAgIGNhbkF1dG9GcmVlemVfOiB0cnVlLFxuICAgIHVuZmluYWxpemVkRHJhZnRzXzogMFxuICB9O1xufVxuZnVuY3Rpb24gdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpIHtcbiAgaWYgKHBhdGNoTGlzdGVuZXIpIHtcbiAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpO1xuICAgIHNjb3BlLnBhdGNoZXNfID0gW107XG4gICAgc2NvcGUuaW52ZXJzZVBhdGNoZXNfID0gW107XG4gICAgc2NvcGUucGF0Y2hMaXN0ZW5lcl8gPSBwYXRjaExpc3RlbmVyO1xuICB9XG59XG5mdW5jdGlvbiByZXZva2VTY29wZShzY29wZSkge1xuICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgc2NvcGUuZHJhZnRzXy5mb3JFYWNoKHJldm9rZURyYWZ0KTtcbiAgc2NvcGUuZHJhZnRzXyA9IG51bGw7XG59XG5mdW5jdGlvbiBsZWF2ZVNjb3BlKHNjb3BlKSB7XG4gIGlmIChzY29wZSA9PT0gY3VycmVudFNjb3BlKSB7XG4gICAgY3VycmVudFNjb3BlID0gc2NvcGUucGFyZW50XztcbiAgfVxufVxuZnVuY3Rpb24gZW50ZXJTY29wZShpbW1lcjIpIHtcbiAgcmV0dXJuIGN1cnJlbnRTY29wZSA9IGNyZWF0ZVNjb3BlKGN1cnJlbnRTY29wZSwgaW1tZXIyKTtcbn1cbmZ1bmN0aW9uIHJldm9rZURyYWZ0KGRyYWZ0KSB7XG4gIGNvbnN0IHN0YXRlID0gZHJhZnRbRFJBRlRfU1RBVEVdO1xuICBpZiAoc3RhdGUudHlwZV8gPT09IDAgLyogT2JqZWN0ICovIHx8IHN0YXRlLnR5cGVfID09PSAxIC8qIEFycmF5ICovKVxuICAgIHN0YXRlLnJldm9rZV8oKTtcbiAgZWxzZVxuICAgIHN0YXRlLnJldm9rZWRfID0gdHJ1ZTtcbn1cblxuLy8gc3JjL2NvcmUvZmluYWxpemUudHNcbmZ1bmN0aW9uIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSkge1xuICBzY29wZS51bmZpbmFsaXplZERyYWZ0c18gPSBzY29wZS5kcmFmdHNfLmxlbmd0aDtcbiAgY29uc3QgYmFzZURyYWZ0ID0gc2NvcGUuZHJhZnRzX1swXTtcbiAgY29uc3QgaXNSZXBsYWNlZCA9IHJlc3VsdCAhPT0gdm9pZCAwICYmIHJlc3VsdCAhPT0gYmFzZURyYWZ0O1xuICBpZiAoaXNSZXBsYWNlZCkge1xuICAgIGlmIChiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLm1vZGlmaWVkXykge1xuICAgICAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuICAgICAgZGllKDQpO1xuICAgIH1cbiAgICBpZiAoaXNEcmFmdGFibGUocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIHJlc3VsdCk7XG4gICAgICBpZiAoIXNjb3BlLnBhcmVudF8pXG4gICAgICAgIG1heWJlRnJlZXplKHNjb3BlLCByZXN1bHQpO1xuICAgIH1cbiAgICBpZiAoc2NvcGUucGF0Y2hlc18pIHtcbiAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKFxuICAgICAgICBiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLmJhc2VfLFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIHNjb3BlLnBhdGNoZXNfLFxuICAgICAgICBzY29wZS5pbnZlcnNlUGF0Y2hlc19cbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGZpbmFsaXplKHNjb3BlLCBiYXNlRHJhZnQsIFtdKTtcbiAgfVxuICByZXZva2VTY29wZShzY29wZSk7XG4gIGlmIChzY29wZS5wYXRjaGVzXykge1xuICAgIHNjb3BlLnBhdGNoTGlzdGVuZXJfKHNjb3BlLnBhdGNoZXNfLCBzY29wZS5pbnZlcnNlUGF0Y2hlc18pO1xuICB9XG4gIHJldHVybiByZXN1bHQgIT09IE5PVEhJTkcgPyByZXN1bHQgOiB2b2lkIDA7XG59XG5mdW5jdGlvbiBmaW5hbGl6ZShyb290U2NvcGUsIHZhbHVlLCBwYXRoKSB7XG4gIGlmIChpc0Zyb3plbih2YWx1ZSkpXG4gICAgcmV0dXJuIHZhbHVlO1xuICBjb25zdCBzdGF0ZSA9IHZhbHVlW0RSQUZUX1NUQVRFXTtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIGVhY2goXG4gICAgICB2YWx1ZSxcbiAgICAgIChrZXksIGNoaWxkVmFsdWUpID0+IGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBzdGF0ZSwgdmFsdWUsIGtleSwgY2hpbGRWYWx1ZSwgcGF0aClcbiAgICApO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoc3RhdGUuc2NvcGVfICE9PSByb290U2NvcGUpXG4gICAgcmV0dXJuIHZhbHVlO1xuICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgc3RhdGUuYmFzZV8sIHRydWUpO1xuICAgIHJldHVybiBzdGF0ZS5iYXNlXztcbiAgfVxuICBpZiAoIXN0YXRlLmZpbmFsaXplZF8pIHtcbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gdHJ1ZTtcbiAgICBzdGF0ZS5zY29wZV8udW5maW5hbGl6ZWREcmFmdHNfLS07XG4gICAgY29uc3QgcmVzdWx0ID0gc3RhdGUuY29weV87XG4gICAgbGV0IHJlc3VsdEVhY2ggPSByZXN1bHQ7XG4gICAgbGV0IGlzU2V0MiA9IGZhbHNlO1xuICAgIGlmIChzdGF0ZS50eXBlXyA9PT0gMyAvKiBTZXQgKi8pIHtcbiAgICAgIHJlc3VsdEVhY2ggPSBuZXcgU2V0KHJlc3VsdCk7XG4gICAgICByZXN1bHQuY2xlYXIoKTtcbiAgICAgIGlzU2V0MiA9IHRydWU7XG4gICAgfVxuICAgIGVhY2goXG4gICAgICByZXN1bHRFYWNoLFxuICAgICAgKGtleSwgY2hpbGRWYWx1ZSkgPT4gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCByZXN1bHQsIGtleSwgY2hpbGRWYWx1ZSwgcGF0aCwgaXNTZXQyKVxuICAgICk7XG4gICAgbWF5YmVGcmVlemUocm9vdFNjb3BlLCByZXN1bHQsIGZhbHNlKTtcbiAgICBpZiAocGF0aCAmJiByb290U2NvcGUucGF0Y2hlc18pIHtcbiAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVQYXRjaGVzXyhcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHBhdGgsXG4gICAgICAgIHJvb3RTY29wZS5wYXRjaGVzXyxcbiAgICAgICAgcm9vdFNjb3BlLmludmVyc2VQYXRjaGVzX1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlLmNvcHlfO1xufVxuZnVuY3Rpb24gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHBhcmVudFN0YXRlLCB0YXJnZXRPYmplY3QsIHByb3AsIGNoaWxkVmFsdWUsIHJvb3RQYXRoLCB0YXJnZXRJc1NldCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGNoaWxkVmFsdWUgPT09IHRhcmdldE9iamVjdClcbiAgICBkaWUoNSk7XG4gIGlmIChpc0RyYWZ0KGNoaWxkVmFsdWUpKSB7XG4gICAgY29uc3QgcGF0aCA9IHJvb3RQYXRoICYmIHBhcmVudFN0YXRlICYmIHBhcmVudFN0YXRlLnR5cGVfICE9PSAzIC8qIFNldCAqLyAmJiAvLyBTZXQgb2JqZWN0cyBhcmUgYXRvbWljIHNpbmNlIHRoZXkgaGF2ZSBubyBrZXlzLlxuICAgICFoYXMocGFyZW50U3RhdGUuYXNzaWduZWRfLCBwcm9wKSA/IHJvb3RQYXRoLmNvbmNhdChwcm9wKSA6IHZvaWQgMDtcbiAgICBjb25zdCByZXMgPSBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUsIHBhdGgpO1xuICAgIHNldCh0YXJnZXRPYmplY3QsIHByb3AsIHJlcyk7XG4gICAgaWYgKGlzRHJhZnQocmVzKSkge1xuICAgICAgcm9vdFNjb3BlLmNhbkF1dG9GcmVlemVfID0gZmFsc2U7XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAodGFyZ2V0SXNTZXQpIHtcbiAgICB0YXJnZXRPYmplY3QuYWRkKGNoaWxkVmFsdWUpO1xuICB9XG4gIGlmIChpc0RyYWZ0YWJsZShjaGlsZFZhbHVlKSAmJiAhaXNGcm96ZW4oY2hpbGRWYWx1ZSkpIHtcbiAgICBpZiAoIXJvb3RTY29wZS5pbW1lcl8uYXV0b0ZyZWV6ZV8gJiYgcm9vdFNjb3BlLnVuZmluYWxpemVkRHJhZnRzXyA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmluYWxpemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlKTtcbiAgICBpZiAoKCFwYXJlbnRTdGF0ZSB8fCAhcGFyZW50U3RhdGUuc2NvcGVfLnBhcmVudF8pICYmIHR5cGVvZiBwcm9wICE9PSBcInN5bWJvbFwiICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0YXJnZXRPYmplY3QsIHByb3ApKVxuICAgICAgbWF5YmVGcmVlemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlKTtcbiAgfVxufVxuZnVuY3Rpb24gbWF5YmVGcmVlemUoc2NvcGUsIHZhbHVlLCBkZWVwID0gZmFsc2UpIHtcbiAgaWYgKCFzY29wZS5wYXJlbnRfICYmIHNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiBzY29wZS5jYW5BdXRvRnJlZXplXykge1xuICAgIGZyZWV6ZSh2YWx1ZSwgZGVlcCk7XG4gIH1cbn1cblxuLy8gc3JjL2NvcmUvcHJveHkudHNcbmZ1bmN0aW9uIGNyZWF0ZVByb3h5UHJveHkoYmFzZSwgcGFyZW50KSB7XG4gIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGJhc2UpO1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICB0eXBlXzogaXNBcnJheSA/IDEgLyogQXJyYXkgKi8gOiAwIC8qIE9iamVjdCAqLyxcbiAgICAvLyBUcmFjayB3aGljaCBwcm9kdWNlIGNhbGwgdGhpcyBpcyBhc3NvY2lhdGVkIHdpdGguXG4gICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgLy8gVHJ1ZSBmb3IgYm90aCBzaGFsbG93IGFuZCBkZWVwIGNoYW5nZXMuXG4gICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAvLyBVc2VkIGR1cmluZyBmaW5hbGl6YXRpb24uXG4gICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgLy8gVHJhY2sgd2hpY2ggcHJvcGVydGllcyBoYXZlIGJlZW4gYXNzaWduZWQgKHRydWUpIG9yIGRlbGV0ZWQgKGZhbHNlKS5cbiAgICBhc3NpZ25lZF86IHt9LFxuICAgIC8vIFRoZSBwYXJlbnQgZHJhZnQgc3RhdGUuXG4gICAgcGFyZW50XzogcGFyZW50LFxuICAgIC8vIFRoZSBiYXNlIHN0YXRlLlxuICAgIGJhc2VfOiBiYXNlLFxuICAgIC8vIFRoZSBiYXNlIHByb3h5LlxuICAgIGRyYWZ0XzogbnVsbCxcbiAgICAvLyBzZXQgYmVsb3dcbiAgICAvLyBUaGUgYmFzZSBjb3B5IHdpdGggYW55IHVwZGF0ZWQgdmFsdWVzLlxuICAgIGNvcHlfOiBudWxsLFxuICAgIC8vIENhbGxlZCBieSB0aGUgYHByb2R1Y2VgIGZ1bmN0aW9uLlxuICAgIHJldm9rZV86IG51bGwsXG4gICAgaXNNYW51YWxfOiBmYWxzZVxuICB9O1xuICBsZXQgdGFyZ2V0ID0gc3RhdGU7XG4gIGxldCB0cmFwcyA9IG9iamVjdFRyYXBzO1xuICBpZiAoaXNBcnJheSkge1xuICAgIHRhcmdldCA9IFtzdGF0ZV07XG4gICAgdHJhcHMgPSBhcnJheVRyYXBzO1xuICB9XG4gIGNvbnN0IHsgcmV2b2tlLCBwcm94eSB9ID0gUHJveHkucmV2b2NhYmxlKHRhcmdldCwgdHJhcHMpO1xuICBzdGF0ZS5kcmFmdF8gPSBwcm94eTtcbiAgc3RhdGUucmV2b2tlXyA9IHJldm9rZTtcbiAgcmV0dXJuIHByb3h5O1xufVxudmFyIG9iamVjdFRyYXBzID0ge1xuICBnZXQoc3RhdGUsIHByb3ApIHtcbiAgICBpZiAocHJvcCA9PT0gRFJBRlRfU1RBVEUpXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgY29uc3Qgc291cmNlID0gbGF0ZXN0KHN0YXRlKTtcbiAgICBpZiAoIWhhcyhzb3VyY2UsIHByb3ApKSB7XG4gICAgICByZXR1cm4gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGUsIHNvdXJjZSwgcHJvcCk7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gc291cmNlW3Byb3BdO1xuICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBwZWVrKHN0YXRlLmJhc2VfLCBwcm9wKSkge1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfW3Byb3BdID0gY3JlYXRlUHJveHkodmFsdWUsIHN0YXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBoYXMoc3RhdGUsIHByb3ApIHtcbiAgICByZXR1cm4gcHJvcCBpbiBsYXRlc3Qoc3RhdGUpO1xuICB9LFxuICBvd25LZXlzKHN0YXRlKSB7XG4gICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyhsYXRlc3Qoc3RhdGUpKTtcbiAgfSxcbiAgc2V0KHN0YXRlLCBwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IGRlc2MgPSBnZXREZXNjcmlwdG9yRnJvbVByb3RvKGxhdGVzdChzdGF0ZSksIHByb3ApO1xuICAgIGlmIChkZXNjPy5zZXQpIHtcbiAgICAgIGRlc2Muc2V0LmNhbGwoc3RhdGUuZHJhZnRfLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQyID0gcGVlayhsYXRlc3Qoc3RhdGUpLCBwcm9wKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnQyPy5bRFJBRlRfU1RBVEVdO1xuICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUuYmFzZV8gPT09IHZhbHVlKSB7XG4gICAgICAgIHN0YXRlLmNvcHlfW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpcyh2YWx1ZSwgY3VycmVudDIpICYmICh2YWx1ZSAhPT0gdm9pZCAwIHx8IGhhcyhzdGF0ZS5iYXNlXywgcHJvcCkpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIHByZXBhcmVDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmNvcHlfW3Byb3BdID09PSB2YWx1ZSAmJiAvLyBzcGVjaWFsIGNhc2U6IGhhbmRsZSBuZXcgcHJvcHMgd2l0aCB2YWx1ZSAndW5kZWZpbmVkJ1xuICAgICh2YWx1ZSAhPT0gdm9pZCAwIHx8IHByb3AgaW4gc3RhdGUuY29weV8pIHx8IC8vIHNwZWNpYWwgY2FzZTogTmFOXG4gICAgTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNOYU4oc3RhdGUuY29weV9bcHJvcF0pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgc3RhdGUuY29weV9bcHJvcF0gPSB2YWx1ZTtcbiAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eShzdGF0ZSwgcHJvcCkge1xuICAgIGlmIChwZWVrKHN0YXRlLmJhc2VfLCBwcm9wKSAhPT0gdm9pZCAwIHx8IHByb3AgaW4gc3RhdGUuYmFzZV8pIHtcbiAgICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IGZhbHNlO1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgc3RhdGUuYXNzaWduZWRfW3Byb3BdO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY29weV8pIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZS5jb3B5X1twcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIC8vIE5vdGU6IFdlIG5ldmVyIGNvZXJjZSBgZGVzYy52YWx1ZWAgaW50byBhbiBJbW1lciBkcmFmdCwgYmVjYXVzZSB3ZSBjYW4ndCBtYWtlXG4gIC8vIHRoZSBzYW1lIGd1YXJhbnRlZSBpbiBFUzUgbW9kZS5cbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHN0YXRlLCBwcm9wKSB7XG4gICAgY29uc3Qgb3duZXIgPSBsYXRlc3Qoc3RhdGUpO1xuICAgIGNvbnN0IGRlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvd25lciwgcHJvcCk7XG4gICAgaWYgKCFkZXNjKVxuICAgICAgcmV0dXJuIGRlc2M7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiBzdGF0ZS50eXBlXyAhPT0gMSAvKiBBcnJheSAqLyB8fCBwcm9wICE9PSBcImxlbmd0aFwiLFxuICAgICAgZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgdmFsdWU6IG93bmVyW3Byb3BdXG4gICAgfTtcbiAgfSxcbiAgZGVmaW5lUHJvcGVydHkoKSB7XG4gICAgZGllKDExKTtcbiAgfSxcbiAgZ2V0UHJvdG90eXBlT2Yoc3RhdGUpIHtcbiAgICByZXR1cm4gZ2V0UHJvdG90eXBlT2Yoc3RhdGUuYmFzZV8pO1xuICB9LFxuICBzZXRQcm90b3R5cGVPZigpIHtcbiAgICBkaWUoMTIpO1xuICB9XG59O1xudmFyIGFycmF5VHJhcHMgPSB7fTtcbmVhY2gob2JqZWN0VHJhcHMsIChrZXksIGZuKSA9PiB7XG4gIGFycmF5VHJhcHNba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgIGFyZ3VtZW50c1swXSA9IGFyZ3VtZW50c1swXVswXTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0pO1xuYXJyYXlUcmFwcy5kZWxldGVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHN0YXRlLCBwcm9wKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNOYU4ocGFyc2VJbnQocHJvcCkpKVxuICAgIGRpZSgxMyk7XG4gIHJldHVybiBhcnJheVRyYXBzLnNldC5jYWxsKHRoaXMsIHN0YXRlLCBwcm9wLCB2b2lkIDApO1xufTtcbmFycmF5VHJhcHMuc2V0ID0gZnVuY3Rpb24oc3RhdGUsIHByb3AsIHZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJvcCAhPT0gXCJsZW5ndGhcIiAmJiBpc05hTihwYXJzZUludChwcm9wKSkpXG4gICAgZGllKDE0KTtcbiAgcmV0dXJuIG9iamVjdFRyYXBzLnNldC5jYWxsKHRoaXMsIHN0YXRlWzBdLCBwcm9wLCB2YWx1ZSwgc3RhdGVbMF0pO1xufTtcbmZ1bmN0aW9uIHBlZWsoZHJhZnQsIHByb3ApIHtcbiAgY29uc3Qgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG4gIGNvbnN0IHNvdXJjZSA9IHN0YXRlID8gbGF0ZXN0KHN0YXRlKSA6IGRyYWZ0O1xuICByZXR1cm4gc291cmNlW3Byb3BdO1xufVxuZnVuY3Rpb24gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGUsIHNvdXJjZSwgcHJvcCkge1xuICBjb25zdCBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApO1xuICByZXR1cm4gZGVzYyA/IGB2YWx1ZWAgaW4gZGVzYyA/IGRlc2MudmFsdWUgOiAoXG4gICAgLy8gVGhpcyBpcyBhIHZlcnkgc3BlY2lhbCBjYXNlLCBpZiB0aGUgcHJvcCBpcyBhIGdldHRlciBkZWZpbmVkIGJ5IHRoZVxuICAgIC8vIHByb3RvdHlwZSwgd2Ugc2hvdWxkIGludm9rZSBpdCB3aXRoIHRoZSBkcmFmdCBhcyBjb250ZXh0IVxuICAgIGRlc2MuZ2V0Py5jYWxsKHN0YXRlLmRyYWZ0XylcbiAgKSA6IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGdldERlc2NyaXB0b3JGcm9tUHJvdG8oc291cmNlLCBwcm9wKSB7XG4gIGlmICghKHByb3AgaW4gc291cmNlKSlcbiAgICByZXR1cm4gdm9pZCAwO1xuICBsZXQgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihzb3VyY2UpO1xuICB3aGlsZSAocHJvdG8pIHtcbiAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgcHJvcCk7XG4gICAgaWYgKGRlc2MpXG4gICAgICByZXR1cm4gZGVzYztcbiAgICBwcm90byA9IGdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufVxuZnVuY3Rpb24gbWFya0NoYW5nZWQoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICBzdGF0ZS5tb2RpZmllZF8gPSB0cnVlO1xuICAgIGlmIChzdGF0ZS5wYXJlbnRfKSB7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZS5wYXJlbnRfKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHByZXBhcmVDb3B5KHN0YXRlKSB7XG4gIGlmICghc3RhdGUuY29weV8pIHtcbiAgICBzdGF0ZS5jb3B5XyA9IHNoYWxsb3dDb3B5KFxuICAgICAgc3RhdGUuYmFzZV8sXG4gICAgICBzdGF0ZS5zY29wZV8uaW1tZXJfLnVzZVN0cmljdFNoYWxsb3dDb3B5X1xuICAgICk7XG4gIH1cbn1cblxuLy8gc3JjL2NvcmUvaW1tZXJDbGFzcy50c1xudmFyIEltbWVyMiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5hdXRvRnJlZXplXyA9IHRydWU7XG4gICAgdGhpcy51c2VTdHJpY3RTaGFsbG93Q29weV8gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgYHByb2R1Y2VgIGZ1bmN0aW9uIHRha2VzIGEgdmFsdWUgYW5kIGEgXCJyZWNpcGUgZnVuY3Rpb25cIiAod2hvc2VcbiAgICAgKiByZXR1cm4gdmFsdWUgb2Z0ZW4gZGVwZW5kcyBvbiB0aGUgYmFzZSBzdGF0ZSkuIFRoZSByZWNpcGUgZnVuY3Rpb24gaXNcbiAgICAgKiBmcmVlIHRvIG11dGF0ZSBpdHMgZmlyc3QgYXJndW1lbnQgaG93ZXZlciBpdCB3YW50cy4gQWxsIG11dGF0aW9ucyBhcmVcbiAgICAgKiBvbmx5IGV2ZXIgYXBwbGllZCB0byBhIF9fY29weV9fIG9mIHRoZSBiYXNlIHN0YXRlLlxuICAgICAqXG4gICAgICogUGFzcyBvbmx5IGEgZnVuY3Rpb24gdG8gY3JlYXRlIGEgXCJjdXJyaWVkIHByb2R1Y2VyXCIgd2hpY2ggcmVsaWV2ZXMgeW91XG4gICAgICogZnJvbSBwYXNzaW5nIHRoZSByZWNpcGUgZnVuY3Rpb24gZXZlcnkgdGltZS5cbiAgICAgKlxuICAgICAqIE9ubHkgcGxhaW4gb2JqZWN0cyBhbmQgYXJyYXlzIGFyZSBtYWRlIG11dGFibGUuIEFsbCBvdGhlciBvYmplY3RzIGFyZVxuICAgICAqIGNvbnNpZGVyZWQgdW5jb3B5YWJsZS5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRoaXMgZnVuY3Rpb24gaXMgX19ib3VuZF9fIHRvIGl0cyBgSW1tZXJgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGJhc2UgLSB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlY2lwZSAtIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSBwcm94eSBvZiB0aGUgYmFzZSBzdGF0ZSBhcyBmaXJzdCBhcmd1bWVudCBhbmQgd2hpY2ggY2FuIGJlIGZyZWVseSBtb2RpZmllZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHBhdGNoTGlzdGVuZXIgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggYWxsIHRoZSBwYXRjaGVzIHByb2R1Y2VkIGhlcmVcbiAgICAgKiBAcmV0dXJucyB7YW55fSBhIG5ldyBzdGF0ZSwgb3IgdGhlIGluaXRpYWwgc3RhdGUgaWYgbm90aGluZyB3YXMgbW9kaWZpZWRcbiAgICAgKi9cbiAgICB0aGlzLnByb2R1Y2UgPSAoYmFzZSwgcmVjaXBlLCBwYXRjaExpc3RlbmVyKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgcmVjaXBlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdEJhc2UgPSByZWNpcGU7XG4gICAgICAgIHJlY2lwZSA9IGJhc2U7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY3VycmllZFByb2R1Y2UoYmFzZTIgPSBkZWZhdWx0QmFzZSwgLi4uYXJncykge1xuICAgICAgICAgIHJldHVybiBzZWxmLnByb2R1Y2UoYmFzZTIsIChkcmFmdCkgPT4gcmVjaXBlLmNhbGwodGhpcywgZHJhZnQsIC4uLmFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVjaXBlICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGRpZSg2KTtcbiAgICAgIGlmIChwYXRjaExpc3RlbmVyICE9PSB2b2lkIDAgJiYgdHlwZW9mIHBhdGNoTGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZGllKDcpO1xuICAgICAgbGV0IHJlc3VsdDtcbiAgICAgIGlmIChpc0RyYWZ0YWJsZShiYXNlKSkge1xuICAgICAgICBjb25zdCBzY29wZSA9IGVudGVyU2NvcGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHByb3h5ID0gY3JlYXRlUHJveHkoYmFzZSwgdm9pZCAwKTtcbiAgICAgICAgbGV0IGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSByZWNpcGUocHJveHkpO1xuICAgICAgICAgIGhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGhhc0Vycm9yKVxuICAgICAgICAgICAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGxlYXZlU2NvcGUoc2NvcGUpO1xuICAgICAgICB9XG4gICAgICAgIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSk7XG4gICAgICB9IGVsc2UgaWYgKCFiYXNlIHx8IHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlY2lwZShiYXNlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKVxuICAgICAgICAgIHJlc3VsdCA9IGJhc2U7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IE5PVEhJTkcpXG4gICAgICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICBpZiAodGhpcy5hdXRvRnJlZXplXylcbiAgICAgICAgICBmcmVlemUocmVzdWx0LCB0cnVlKTtcbiAgICAgICAgaWYgKHBhdGNoTGlzdGVuZXIpIHtcbiAgICAgICAgICBjb25zdCBwID0gW107XG4gICAgICAgICAgY29uc3QgaXAgPSBbXTtcbiAgICAgICAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhiYXNlLCByZXN1bHQsIHAsIGlwKTtcbiAgICAgICAgICBwYXRjaExpc3RlbmVyKHAsIGlwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSBlbHNlXG4gICAgICAgIGRpZSgxLCBiYXNlKTtcbiAgICB9O1xuICAgIHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzID0gKGJhc2UsIHJlY2lwZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIChzdGF0ZSwgLi4uYXJncykgPT4gdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMoc3RhdGUsIChkcmFmdCkgPT4gYmFzZShkcmFmdCwgLi4uYXJncykpO1xuICAgICAgfVxuICAgICAgbGV0IHBhdGNoZXMsIGludmVyc2VQYXRjaGVzO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wcm9kdWNlKGJhc2UsIHJlY2lwZSwgKHAsIGlwKSA9PiB7XG4gICAgICAgIHBhdGNoZXMgPSBwO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcyA9IGlwO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gW3Jlc3VsdCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXNdO1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjb25maWc/LmF1dG9GcmVlemUgPT09IFwiYm9vbGVhblwiKVxuICAgICAgdGhpcy5zZXRBdXRvRnJlZXplKGNvbmZpZy5hdXRvRnJlZXplKTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZz8udXNlU3RyaWN0U2hhbGxvd0NvcHkgPT09IFwiYm9vbGVhblwiKVxuICAgICAgdGhpcy5zZXRVc2VTdHJpY3RTaGFsbG93Q29weShjb25maWcudXNlU3RyaWN0U2hhbGxvd0NvcHkpO1xuICB9XG4gIGNyZWF0ZURyYWZ0KGJhc2UpIHtcbiAgICBpZiAoIWlzRHJhZnRhYmxlKGJhc2UpKVxuICAgICAgZGllKDgpO1xuICAgIGlmIChpc0RyYWZ0KGJhc2UpKVxuICAgICAgYmFzZSA9IGN1cnJlbnQoYmFzZSk7XG4gICAgY29uc3Qgc2NvcGUgPSBlbnRlclNjb3BlKHRoaXMpO1xuICAgIGNvbnN0IHByb3h5ID0gY3JlYXRlUHJveHkoYmFzZSwgdm9pZCAwKTtcbiAgICBwcm94eVtEUkFGVF9TVEFURV0uaXNNYW51YWxfID0gdHJ1ZTtcbiAgICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH1cbiAgZmluaXNoRHJhZnQoZHJhZnQsIHBhdGNoTGlzdGVuZXIpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGRyYWZ0ICYmIGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgICBpZiAoIXN0YXRlIHx8ICFzdGF0ZS5pc01hbnVhbF8pXG4gICAgICBkaWUoOSk7XG4gICAgY29uc3QgeyBzY29wZV86IHNjb3BlIH0gPSBzdGF0ZTtcbiAgICB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcik7XG4gICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQodm9pZCAwLCBzY29wZSk7XG4gIH1cbiAgLyoqXG4gICAqIFBhc3MgdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IGZyZWV6ZSBhbGwgY29waWVzIGNyZWF0ZWQgYnkgSW1tZXIuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGF1dG8tZnJlZXppbmcgaXMgZW5hYmxlZC5cbiAgICovXG4gIHNldEF1dG9GcmVlemUodmFsdWUpIHtcbiAgICB0aGlzLmF1dG9GcmVlemVfID0gdmFsdWU7XG4gIH1cbiAgLyoqXG4gICAqIFBhc3MgdHJ1ZSB0byBlbmFibGUgc3RyaWN0IHNoYWxsb3cgY29weS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgaW1tZXIgZG9lcyBub3QgY29weSB0aGUgb2JqZWN0IGRlc2NyaXB0b3JzIHN1Y2ggYXMgZ2V0dGVyLCBzZXR0ZXIgYW5kIG5vbi1lbnVtcmFibGUgcHJvcGVydGllcy5cbiAgICovXG4gIHNldFVzZVN0cmljdFNoYWxsb3dDb3B5KHZhbHVlKSB7XG4gICAgdGhpcy51c2VTdHJpY3RTaGFsbG93Q29weV8gPSB2YWx1ZTtcbiAgfVxuICBhcHBseVBhdGNoZXMoYmFzZSwgcGF0Y2hlcykge1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IHBhdGNoZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IHBhdGNoID0gcGF0Y2hlc1tpXTtcbiAgICAgIGlmIChwYXRjaC5wYXRoLmxlbmd0aCA9PT0gMCAmJiBwYXRjaC5vcCA9PT0gXCJyZXBsYWNlXCIpIHtcbiAgICAgICAgYmFzZSA9IHBhdGNoLnZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgcGF0Y2hlcyA9IHBhdGNoZXMuc2xpY2UoaSArIDEpO1xuICAgIH1cbiAgICBjb25zdCBhcHBseVBhdGNoZXNJbXBsID0gZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5hcHBseVBhdGNoZXNfO1xuICAgIGlmIChpc0RyYWZ0KGJhc2UpKSB7XG4gICAgICByZXR1cm4gYXBwbHlQYXRjaGVzSW1wbChiYXNlLCBwYXRjaGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjZShcbiAgICAgIGJhc2UsXG4gICAgICAoZHJhZnQpID0+IGFwcGx5UGF0Y2hlc0ltcGwoZHJhZnQsIHBhdGNoZXMpXG4gICAgKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVByb3h5KHZhbHVlLCBwYXJlbnQpIHtcbiAgY29uc3QgZHJhZnQgPSBpc01hcCh2YWx1ZSkgPyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlNYXBfKHZhbHVlLCBwYXJlbnQpIDogaXNTZXQodmFsdWUpID8gZ2V0UGx1Z2luKFwiTWFwU2V0XCIpLnByb3h5U2V0Xyh2YWx1ZSwgcGFyZW50KSA6IGNyZWF0ZVByb3h5UHJveHkodmFsdWUsIHBhcmVudCk7XG4gIGNvbnN0IHNjb3BlID0gcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpO1xuICBzY29wZS5kcmFmdHNfLnB1c2goZHJhZnQpO1xuICByZXR1cm4gZHJhZnQ7XG59XG5cbi8vIHNyYy9jb3JlL2N1cnJlbnQudHNcbmZ1bmN0aW9uIGN1cnJlbnQodmFsdWUpIHtcbiAgaWYgKCFpc0RyYWZ0KHZhbHVlKSlcbiAgICBkaWUoMTAsIHZhbHVlKTtcbiAgcmV0dXJuIGN1cnJlbnRJbXBsKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGN1cnJlbnRJbXBsKHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdGFibGUodmFsdWUpIHx8IGlzRnJvemVuKHZhbHVlKSlcbiAgICByZXR1cm4gdmFsdWU7XG4gIGNvbnN0IHN0YXRlID0gdmFsdWVbRFJBRlRfU1RBVEVdO1xuICBsZXQgY29weTtcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pXG4gICAgICByZXR1cm4gc3RhdGUuYmFzZV87XG4gICAgc3RhdGUuZmluYWxpemVkXyA9IHRydWU7XG4gICAgY29weSA9IHNoYWxsb3dDb3B5KHZhbHVlLCBzdGF0ZS5zY29wZV8uaW1tZXJfLnVzZVN0cmljdFNoYWxsb3dDb3B5Xyk7XG4gIH0gZWxzZSB7XG4gICAgY29weSA9IHNoYWxsb3dDb3B5KHZhbHVlLCB0cnVlKTtcbiAgfVxuICBlYWNoKGNvcHksIChrZXksIGNoaWxkVmFsdWUpID0+IHtcbiAgICBzZXQoY29weSwga2V5LCBjdXJyZW50SW1wbChjaGlsZFZhbHVlKSk7XG4gIH0pO1xuICBpZiAoc3RhdGUpIHtcbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGNvcHk7XG59XG5cbi8vIHNyYy9wbHVnaW5zL3BhdGNoZXMudHNcbmZ1bmN0aW9uIGVuYWJsZVBhdGNoZXMoKSB7XG4gIGNvbnN0IGVycm9yT2Zmc2V0ID0gMTY7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBlcnJvcnMucHVzaChcbiAgICAgICdTZXRzIGNhbm5vdCBoYXZlIFwicmVwbGFjZVwiIHBhdGNoZXMuJyxcbiAgICAgIGZ1bmN0aW9uKG9wKSB7XG4gICAgICAgIHJldHVybiBcIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIgKyBvcDtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCBhcHBseSBwYXRjaCwgcGF0aCBkb2Vzbid0IHJlc29sdmU6IFwiICsgcGF0aDtcbiAgICAgIH0sXG4gICAgICBcIlBhdGNoaW5nIHJlc2VydmVkIGF0dHJpYnV0ZXMgbGlrZSBfX3Byb3RvX18sIHByb3RvdHlwZSBhbmQgY29uc3RydWN0b3IgaXMgbm90IGFsbG93ZWRcIlxuICAgICk7XG4gIH1cbiAgY29uc3QgUkVQTEFDRSA9IFwicmVwbGFjZVwiO1xuICBjb25zdCBBREQgPSBcImFkZFwiO1xuICBjb25zdCBSRU1PVkUgPSBcInJlbW92ZVwiO1xuICBmdW5jdGlvbiBnZW5lcmF0ZVBhdGNoZXNfKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBzd2l0Y2ggKHN0YXRlLnR5cGVfKSB7XG4gICAgICBjYXNlIDAgLyogT2JqZWN0ICovOlxuICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlUGF0Y2hlc0Zyb21Bc3NpZ25lZChcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICBwYXRjaGVzLFxuICAgICAgICAgIGludmVyc2VQYXRjaGVzXG4gICAgICAgICk7XG4gICAgICBjYXNlIDEgLyogQXJyYXkgKi86XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUFycmF5UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKTtcbiAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVNldFBhdGNoZXMoXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgICAgcGF0Y2hlcyxcbiAgICAgICAgICBpbnZlcnNlUGF0Y2hlc1xuICAgICAgICApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZUFycmF5UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgbGV0IHsgYmFzZV8sIGFzc2lnbmVkXyB9ID0gc3RhdGU7XG4gICAgbGV0IGNvcHlfID0gc3RhdGUuY29weV87XG4gICAgaWYgKGNvcHlfLmxlbmd0aCA8IGJhc2VfLmxlbmd0aCkge1xuICAgICAgO1xuICAgICAgW2Jhc2VfLCBjb3B5X10gPSBbY29weV8sIGJhc2VfXTtcbiAgICAgIFtwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc10gPSBbaW52ZXJzZVBhdGNoZXMsIHBhdGNoZXNdO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2VfLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXNzaWduZWRfW2ldICYmIGNvcHlfW2ldICE9PSBiYXNlX1tpXSkge1xuICAgICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICAvLyBOZWVkIHRvIG1heWJlIGNsb25lIGl0LCBhcyBpdCBjYW4gaW4gZmFjdCBiZSB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgICAvLyBkdWUgdG8gdGhlIGJhc2UvY29weSBpbnZlcnNpb24gYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9baV0pXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVQTEFDRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChiYXNlX1tpXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBiYXNlXy5sZW5ndGg7IGkgPCBjb3B5Xy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgb3A6IEFERCxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgLy8gTmVlZCB0byBtYXliZSBjbG9uZSBpdCwgYXMgaXQgY2FuIGluIGZhY3QgYmUgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgIC8vIGR1ZSB0byB0aGUgYmFzZS9jb3B5IGludmVyc2lvbiBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvblxuICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9baV0pXG4gICAgICB9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IGNvcHlfLmxlbmd0aCAtIDE7IGJhc2VfLmxlbmd0aCA8PSBpOyAtLWkpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICBwYXRoXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBjb25zdCB7IGJhc2VfLCBjb3B5XyB9ID0gc3RhdGU7XG4gICAgZWFjaChzdGF0ZS5hc3NpZ25lZF8sIChrZXksIGFzc2lnbmVkVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdWYWx1ZSA9IGdldChiYXNlXywga2V5KTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0KGNvcHlfLCBrZXkpO1xuICAgICAgY29uc3Qgb3AgPSAhYXNzaWduZWRWYWx1ZSA/IFJFTU9WRSA6IGhhcyhiYXNlXywga2V5KSA/IFJFUExBQ0UgOiBBREQ7XG4gICAgICBpZiAob3JpZ1ZhbHVlID09PSB2YWx1ZSAmJiBvcCA9PT0gUkVQTEFDRSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChrZXkpO1xuICAgICAgcGF0Y2hlcy5wdXNoKG9wID09PSBSRU1PVkUgPyB7IG9wLCBwYXRoIH0gOiB7IG9wLCBwYXRoLCB2YWx1ZSB9KTtcbiAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goXG4gICAgICAgIG9wID09PSBBREQgPyB7IG9wOiBSRU1PVkUsIHBhdGggfSA6IG9wID09PSBSRU1PVkUgPyB7IG9wOiBBREQsIHBhdGgsIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvcmlnVmFsdWUpIH0gOiB7IG9wOiBSRVBMQUNFLCBwYXRoLCB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob3JpZ1ZhbHVlKSB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlU2V0UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgbGV0IHsgYmFzZV8sIGNvcHlfIH0gPSBzdGF0ZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgYmFzZV8uZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGlmICghY29weV8uaGFzKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFTU9WRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy51bnNoaWZ0KHtcbiAgICAgICAgICBvcDogQURELFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfSk7XG4gICAgaSA9IDA7XG4gICAgY29weV8uZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGlmICghYmFzZV8uaGFzKHZhbHVlKSkge1xuICAgICAgICBjb25zdCBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IEFERCxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy51bnNoaWZ0KHtcbiAgICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKGJhc2VWYWx1ZSwgcmVwbGFjZW1lbnQsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgcGF0aDogW10sXG4gICAgICB2YWx1ZTogcmVwbGFjZW1lbnQgPT09IE5PVEhJTkcgPyB2b2lkIDAgOiByZXBsYWNlbWVudFxuICAgIH0pO1xuICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICBwYXRoOiBbXSxcbiAgICAgIHZhbHVlOiBiYXNlVmFsdWVcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhcHBseVBhdGNoZXNfKGRyYWZ0LCBwYXRjaGVzKSB7XG4gICAgcGF0Y2hlcy5mb3JFYWNoKChwYXRjaCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoLCBvcCB9ID0gcGF0Y2g7XG4gICAgICBsZXQgYmFzZSA9IGRyYWZ0O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjb25zdCBwYXJlbnRUeXBlID0gZ2V0QXJjaHR5cGUoYmFzZSk7XG4gICAgICAgIGxldCBwID0gcGF0aFtpXTtcbiAgICAgICAgaWYgKHR5cGVvZiBwICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBwICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgcCA9IFwiXCIgKyBwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgocGFyZW50VHlwZSA9PT0gMCAvKiBPYmplY3QgKi8gfHwgcGFyZW50VHlwZSA9PT0gMSAvKiBBcnJheSAqLykgJiYgKHAgPT09IFwiX19wcm90b19fXCIgfHwgcCA9PT0gXCJjb25zdHJ1Y3RvclwiKSlcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIgJiYgcCA9PT0gXCJwcm90b3R5cGVcIilcbiAgICAgICAgICBkaWUoZXJyb3JPZmZzZXQgKyAzKTtcbiAgICAgICAgYmFzZSA9IGdldChiYXNlLCBwKTtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgIGRpZShlcnJvck9mZnNldCArIDIsIHBhdGguam9pbihcIi9cIikpO1xuICAgICAgfVxuICAgICAgY29uc3QgdHlwZSA9IGdldEFyY2h0eXBlKGJhc2UpO1xuICAgICAgY29uc3QgdmFsdWUgPSBkZWVwQ2xvbmVQYXRjaFZhbHVlKHBhdGNoLnZhbHVlKTtcbiAgICAgIGNvbnN0IGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgIHN3aXRjaCAob3ApIHtcbiAgICAgICAgY2FzZSBSRVBMQUNFOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAyIC8qIE1hcCAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAzIC8qIFNldCAqLzpcbiAgICAgICAgICAgICAgZGllKGVycm9yT2Zmc2V0KTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQUREOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxIC8qIEFycmF5ICovOlxuICAgICAgICAgICAgICByZXR1cm4ga2V5ID09PSBcIi1cIiA/IGJhc2UucHVzaCh2YWx1ZSkgOiBiYXNlLnNwbGljZShrZXksIDAsIHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgMiAvKiBNYXAgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmFkZCh2YWx1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIFJFTU9WRTpcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMSAvKiBBcnJheSAqLzpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc3BsaWNlKGtleSwgMSk7XG4gICAgICAgICAgICBjYXNlIDIgLyogTWFwICovOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIGNhc2UgMyAvKiBTZXQgKi86XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmRlbGV0ZShwYXRjaC52YWx1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlIGJhc2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZGllKGVycm9yT2Zmc2V0ICsgMSwgb3ApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkcmFmdDtcbiAgfVxuICBmdW5jdGlvbiBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9iaikge1xuICAgIGlmICghaXNEcmFmdGFibGUob2JqKSlcbiAgICAgIHJldHVybiBvYmo7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSlcbiAgICAgIHJldHVybiBvYmoubWFwKGRlZXBDbG9uZVBhdGNoVmFsdWUpO1xuICAgIGlmIChpc01hcChvYmopKVxuICAgICAgcmV0dXJuIG5ldyBNYXAoXG4gICAgICAgIEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSkubWFwKChbaywgdl0pID0+IFtrLCBkZWVwQ2xvbmVQYXRjaFZhbHVlKHYpXSlcbiAgICAgICk7XG4gICAgaWYgKGlzU2V0KG9iaikpXG4gICAgICByZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKG9iaikubWFwKGRlZXBDbG9uZVBhdGNoVmFsdWUpKTtcbiAgICBjb25zdCBjbG9uZWQgPSBPYmplY3QuY3JlYXRlKGdldFByb3RvdHlwZU9mKG9iaikpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iailcbiAgICAgIGNsb25lZFtrZXldID0gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmpba2V5XSk7XG4gICAgaWYgKGhhcyhvYmosIERSQUZUQUJMRSkpXG4gICAgICBjbG9uZWRbRFJBRlRBQkxFXSA9IG9ialtEUkFGVEFCTEVdO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbiAgZnVuY3Rpb24gY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob2JqKSB7XG4gICAgaWYgKGlzRHJhZnQob2JqKSkge1xuICAgICAgcmV0dXJuIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKTtcbiAgICB9IGVsc2VcbiAgICAgIHJldHVybiBvYmo7XG4gIH1cbiAgbG9hZFBsdWdpbihcIlBhdGNoZXNcIiwge1xuICAgIGFwcGx5UGF0Y2hlc18sXG4gICAgZ2VuZXJhdGVQYXRjaGVzXyxcbiAgICBnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc19cbiAgfSk7XG59XG5cbi8vIHNyYy9wbHVnaW5zL21hcHNldC50c1xuZnVuY3Rpb24gZW5hYmxlTWFwU2V0KCkge1xuICBjbGFzcyBEcmFmdE1hcCBleHRlbmRzIE1hcCB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzW0RSQUZUX1NUQVRFXSA9IHtcbiAgICAgICAgdHlwZV86IDIgLyogTWFwICovLFxuICAgICAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgICAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgICAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAgICAgY29weV86IHZvaWQgMCxcbiAgICAgICAgYXNzaWduZWRfOiB2b2lkIDAsXG4gICAgICAgIGJhc2VfOiB0YXJnZXQsXG4gICAgICAgIGRyYWZ0XzogdGhpcyxcbiAgICAgICAgaXNNYW51YWxfOiBmYWxzZSxcbiAgICAgICAgcmV2b2tlZF86IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLnNpemU7XG4gICAgfVxuICAgIGhhcyhrZXkpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLmhhcyhrZXkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBpZiAoIWxhdGVzdChzdGF0ZSkuaGFzKGtleSkgfHwgbGF0ZXN0KHN0YXRlKS5nZXQoa2V5KSAhPT0gdmFsdWUpIHtcbiAgICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCB0cnVlKTtcbiAgICAgICAgc3RhdGUuY29weV8uc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgaWYgKHN0YXRlLmJhc2VfLmhhcyhrZXkpKSB7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5jb3B5Xy5kZWxldGUoa2V5KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKGxhdGVzdChzdGF0ZSkuc2l6ZSkge1xuICAgICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgICAgZWFjaChzdGF0ZS5iYXNlXywgKGtleSkgPT4ge1xuICAgICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3JFYWNoKGNiLCB0aGlzQXJnKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgbGF0ZXN0KHN0YXRlKS5mb3JFYWNoKChfdmFsdWUsIGtleSwgX21hcCkgPT4ge1xuICAgICAgICBjYi5jYWxsKHRoaXNBcmcsIHRoaXMuZ2V0KGtleSksIGtleSwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSk7XG4gICAgICBpZiAoc3RhdGUuZmluYWxpemVkXyB8fCAhaXNEcmFmdGFibGUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGUuYmFzZV8uZ2V0KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgZHJhZnQgPSBjcmVhdGVQcm94eSh2YWx1ZSwgc3RhdGUpO1xuICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgc3RhdGUuY29weV8uc2V0KGtleSwgZHJhZnQpO1xuICAgICAgcmV0dXJuIGRyYWZ0O1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkua2V5cygpO1xuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXMua2V5cygpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHRoaXMudmFsdWVzKCksXG4gICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCByID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChyLmRvbmUpXG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KHIudmFsdWUpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgZW50cmllcygpIHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpcy5rZXlzKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4gdGhpcy5lbnRyaWVzKCksXG4gICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCByID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChyLmRvbmUpXG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KHIudmFsdWUpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBbci52YWx1ZSwgdmFsdWVdXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgWyhEUkFGVF9TVEFURSwgU3ltYm9sLml0ZXJhdG9yKV0oKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHByb3h5TWFwXyh0YXJnZXQsIHBhcmVudCkge1xuICAgIHJldHVybiBuZXcgRHJhZnRNYXAodGFyZ2V0LCBwYXJlbnQpO1xuICB9XG4gIGZ1bmN0aW9uIHByZXBhcmVNYXBDb3B5KHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgc3RhdGUuYXNzaWduZWRfID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgIHN0YXRlLmNvcHlfID0gbmV3IE1hcChzdGF0ZS5iYXNlXyk7XG4gICAgfVxuICB9XG4gIGNsYXNzIERyYWZ0U2V0IGV4dGVuZHMgU2V0IHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuICAgICAgICB0eXBlXzogMyAvKiBTZXQgKi8sXG4gICAgICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAgICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgICAgICBjb3B5Xzogdm9pZCAwLFxuICAgICAgICBiYXNlXzogdGFyZ2V0LFxuICAgICAgICBkcmFmdF86IHRoaXMsXG4gICAgICAgIGRyYWZ0c186IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksXG4gICAgICAgIHJldm9rZWRfOiBmYWxzZSxcbiAgICAgICAgaXNNYW51YWxfOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5zaXplO1xuICAgIH1cbiAgICBoYXModmFsdWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgICByZXR1cm4gc3RhdGUuYmFzZV8uaGFzKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5jb3B5Xy5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChzdGF0ZS5kcmFmdHNfLmhhcyh2YWx1ZSkgJiYgc3RhdGUuY29weV8uaGFzKHN0YXRlLmRyYWZ0c18uZ2V0KHZhbHVlKSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhZGQodmFsdWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmFkZCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVsZXRlKHZhbHVlKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5Xy5kZWxldGUodmFsdWUpIHx8IChzdGF0ZS5kcmFmdHNfLmhhcyh2YWx1ZSkgPyBzdGF0ZS5jb3B5Xy5kZWxldGUoc3RhdGUuZHJhZnRzXy5nZXQodmFsdWUpKSA6IChcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgZmFsc2VcbiAgICAgICkpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgaWYgKGxhdGVzdChzdGF0ZSkuc2l6ZSkge1xuICAgICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuY29weV8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWVzKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8udmFsdWVzKCk7XG4gICAgfVxuICAgIGVudHJpZXMoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3B5Xy5lbnRyaWVzKCk7XG4gICAgfVxuICAgIGtleXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9XG4gICAgWyhEUkFGVF9TVEFURSwgU3ltYm9sLml0ZXJhdG9yKV0oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9XG4gICAgZm9yRWFjaChjYiwgdGhpc0FyZykge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzLnZhbHVlcygpO1xuICAgICAgbGV0IHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgY2IuY2FsbCh0aGlzQXJnLCByZXN1bHQudmFsdWUsIHJlc3VsdC52YWx1ZSwgdGhpcyk7XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHJveHlTZXRfKHRhcmdldCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFmdFNldCh0YXJnZXQsIHBhcmVudCk7XG4gIH1cbiAgZnVuY3Rpb24gcHJlcGFyZVNldENvcHkoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICBzdGF0ZS5jb3B5XyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgICBzdGF0ZS5iYXNlXy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoaXNEcmFmdGFibGUodmFsdWUpKSB7XG4gICAgICAgICAgY29uc3QgZHJhZnQgPSBjcmVhdGVQcm94eSh2YWx1ZSwgc3RhdGUpO1xuICAgICAgICAgIHN0YXRlLmRyYWZ0c18uc2V0KHZhbHVlLCBkcmFmdCk7XG4gICAgICAgICAgc3RhdGUuY29weV8uYWRkKGRyYWZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYXNzZXJ0VW5yZXZva2VkKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLnJldm9rZWRfKVxuICAgICAgZGllKDMsIEpTT04uc3RyaW5naWZ5KGxhdGVzdChzdGF0ZSkpKTtcbiAgfVxuICBsb2FkUGx1Z2luKFwiTWFwU2V0XCIsIHsgcHJveHlNYXBfLCBwcm94eVNldF8gfSk7XG59XG5cbi8vIHNyYy9pbW1lci50c1xudmFyIGltbWVyID0gbmV3IEltbWVyMigpO1xudmFyIHByb2R1Y2UgPSBpbW1lci5wcm9kdWNlO1xudmFyIHByb2R1Y2VXaXRoUGF0Y2hlcyA9IGltbWVyLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKFxuICBpbW1lclxuKTtcbnZhciBzZXRBdXRvRnJlZXplID0gaW1tZXIuc2V0QXV0b0ZyZWV6ZS5iaW5kKGltbWVyKTtcbnZhciBzZXRVc2VTdHJpY3RTaGFsbG93Q29weSA9IGltbWVyLnNldFVzZVN0cmljdFNoYWxsb3dDb3B5LmJpbmQoaW1tZXIpO1xudmFyIGFwcGx5UGF0Y2hlcyA9IGltbWVyLmFwcGx5UGF0Y2hlcy5iaW5kKGltbWVyKTtcbnZhciBjcmVhdGVEcmFmdCA9IGltbWVyLmNyZWF0ZURyYWZ0LmJpbmQoaW1tZXIpO1xudmFyIGZpbmlzaERyYWZ0ID0gaW1tZXIuZmluaXNoRHJhZnQuYmluZChpbW1lcik7XG5mdW5jdGlvbiBjYXN0RHJhZnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY2FzdEltbXV0YWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnQge1xuICBJbW1lcjIgYXMgSW1tZXIsXG4gIGFwcGx5UGF0Y2hlcyxcbiAgY2FzdERyYWZ0LFxuICBjYXN0SW1tdXRhYmxlLFxuICBjcmVhdGVEcmFmdCxcbiAgY3VycmVudCxcbiAgZW5hYmxlTWFwU2V0LFxuICBlbmFibGVQYXRjaGVzLFxuICBmaW5pc2hEcmFmdCxcbiAgZnJlZXplLFxuICBEUkFGVEFCTEUgYXMgaW1tZXJhYmxlLFxuICBpc0RyYWZ0LFxuICBpc0RyYWZ0YWJsZSxcbiAgTk9USElORyBhcyBub3RoaW5nLFxuICBvcmlnaW5hbCxcbiAgcHJvZHVjZSxcbiAgcHJvZHVjZVdpdGhQYXRjaGVzLFxuICBzZXRBdXRvRnJlZXplLFxuICBzZXRVc2VTdHJpY3RTaGFsbG93Q29weVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLm1qcy5tYXAiLCIvLyBzcmMvaW5kZXgudHNcbmV4cG9ydCAqIGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgcHJvZHVjZSwgY3VycmVudCBhcyBjdXJyZW50MywgZnJlZXplLCBvcmlnaW5hbCBhcyBvcmlnaW5hbDIsIGlzRHJhZnQgYXMgaXNEcmFmdDUgfSBmcm9tIFwiaW1tZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvckNyZWF0b3IgYXMgY3JlYXRlU2VsZWN0b3JDcmVhdG9yMiwgbHJ1TWVtb2l6ZSwgd2Vha01hcE1lbW9pemUgYXMgd2Vha01hcE1lbW9pemUyIH0gZnJvbSBcInJlc2VsZWN0XCI7XG5cbi8vIHNyYy9jcmVhdGVEcmFmdFNhZmVTZWxlY3Rvci50c1xuaW1wb3J0IHsgY3VycmVudCwgaXNEcmFmdCB9IGZyb20gXCJpbW1lclwiO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3JDcmVhdG9yLCB3ZWFrTWFwTWVtb2l6ZSB9IGZyb20gXCJyZXNlbGVjdFwiO1xudmFyIGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yQ3JlYXRvciA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVNlbGVjdG9yMiA9IGNyZWF0ZVNlbGVjdG9yQ3JlYXRvciguLi5hcmdzKTtcbiAgY29uc3QgY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IyID0gT2JqZWN0LmFzc2lnbigoLi4uYXJnczIpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yMiguLi5hcmdzMik7XG4gICAgY29uc3Qgd3JhcHBlZFNlbGVjdG9yID0gKHZhbHVlLCAuLi5yZXN0KSA9PiBzZWxlY3Rvcihpc0RyYWZ0KHZhbHVlKSA/IGN1cnJlbnQodmFsdWUpIDogdmFsdWUsIC4uLnJlc3QpO1xuICAgIE9iamVjdC5hc3NpZ24od3JhcHBlZFNlbGVjdG9yLCBzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHdyYXBwZWRTZWxlY3RvcjtcbiAgfSwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IyXG4gIH0pO1xuICByZXR1cm4gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IyO1xufTtcbnZhciBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvciA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvckNyZWF0b3Iod2Vha01hcE1lbW9pemUpO1xuXG4vLyBzcmMvY29uZmlndXJlU3RvcmUudHNcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgYXMgY29tcG9zZTIsIGNvbWJpbmVSZWR1Y2VycywgaXNQbGFpbk9iamVjdCBhcyBpc1BsYWluT2JqZWN0MiB9IGZyb20gXCJyZWR1eFwiO1xuXG4vLyBzcmMvZGV2dG9vbHNFeHRlbnNpb24udHNcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcbnZhciBjb21wb3NlV2l0aERldlRvb2xzID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6IGZ1bmN0aW9uKCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHZvaWQgMDtcbiAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwib2JqZWN0XCIpIHJldHVybiBjb21wb3NlO1xuICByZXR1cm4gY29tcG9zZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufTtcbnZhciBkZXZUb29sc0VuaGFuY2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIDogZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihub29wMykge1xuICAgIHJldHVybiBub29wMztcbiAgfTtcbn07XG5cbi8vIHNyYy9nZXREZWZhdWx0TWlkZGxld2FyZS50c1xuaW1wb3J0IHsgdGh1bmsgYXMgdGh1bmtNaWRkbGV3YXJlLCB3aXRoRXh0cmFBcmd1bWVudCB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xuXG4vLyBzcmMvY3JlYXRlQWN0aW9uLnRzXG5pbXBvcnQgeyBpc0FjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xuXG4vLyBzcmMvdHNIZWxwZXJzLnRzXG52YXIgaGFzTWF0Y2hGdW5jdGlvbiA9ICh2KSA9PiB7XG4gIHJldHVybiB2ICYmIHR5cGVvZiB2Lm1hdGNoID09PSBcImZ1bmN0aW9uXCI7XG59O1xuXG4vLyBzcmMvY3JlYXRlQWN0aW9uLnRzXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24odHlwZSwgcHJlcGFyZUFjdGlvbikge1xuICBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKC4uLmFyZ3MpIHtcbiAgICBpZiAocHJlcGFyZUFjdGlvbikge1xuICAgICAgbGV0IHByZXBhcmVkID0gcHJlcGFyZUFjdGlvbiguLi5hcmdzKTtcbiAgICAgIGlmICghcHJlcGFyZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMCkgOiBcInByZXBhcmVBY3Rpb24gZGlkIG5vdCByZXR1cm4gYW4gb2JqZWN0XCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgcGF5bG9hZDogcHJlcGFyZWQucGF5bG9hZCxcbiAgICAgICAgLi4uXCJtZXRhXCIgaW4gcHJlcGFyZWQgJiYge1xuICAgICAgICAgIG1ldGE6IHByZXBhcmVkLm1ldGFcbiAgICAgICAgfSxcbiAgICAgICAgLi4uXCJlcnJvclwiIGluIHByZXBhcmVkICYmIHtcbiAgICAgICAgICBlcnJvcjogcHJlcGFyZWQuZXJyb3JcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBwYXlsb2FkOiBhcmdzWzBdXG4gICAgfTtcbiAgfVxuICBhY3Rpb25DcmVhdG9yLnRvU3RyaW5nID0gKCkgPT4gYCR7dHlwZX1gO1xuICBhY3Rpb25DcmVhdG9yLnR5cGUgPSB0eXBlO1xuICBhY3Rpb25DcmVhdG9yLm1hdGNoID0gKGFjdGlvbikgPT4gaXNBY3Rpb24oYWN0aW9uKSAmJiBhY3Rpb24udHlwZSA9PT0gdHlwZTtcbiAgcmV0dXJuIGFjdGlvbkNyZWF0b3I7XG59XG5mdW5jdGlvbiBpc0FjdGlvbkNyZWF0b3IoYWN0aW9uKSB7XG4gIHJldHVybiB0eXBlb2YgYWN0aW9uID09PSBcImZ1bmN0aW9uXCIgJiYgXCJ0eXBlXCIgaW4gYWN0aW9uICYmIC8vIGhhc01hdGNoRnVuY3Rpb24gb25seSB3YW50cyBNYXRjaGVycyBidXQgSSBkb24ndCBzZWUgdGhlIHBvaW50IGluIHJld3JpdGluZyBpdFxuICBoYXNNYXRjaEZ1bmN0aW9uKGFjdGlvbik7XG59XG5mdW5jdGlvbiBpc0ZTQShhY3Rpb24pIHtcbiAgcmV0dXJuIGlzQWN0aW9uKGFjdGlvbikgJiYgT2JqZWN0LmtleXMoYWN0aW9uKS5ldmVyeShpc1ZhbGlkS2V5KTtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRLZXkoa2V5KSB7XG4gIHJldHVybiBbXCJ0eXBlXCIsIFwicGF5bG9hZFwiLCBcImVycm9yXCIsIFwibWV0YVwiXS5pbmRleE9mKGtleSkgPiAtMTtcbn1cblxuLy8gc3JjL2FjdGlvbkNyZWF0b3JJbnZhcmlhbnRNaWRkbGV3YXJlLnRzXG5mdW5jdGlvbiBnZXRNZXNzYWdlKHR5cGUpIHtcbiAgY29uc3Qgc3BsaXRUeXBlID0gdHlwZSA/IGAke3R5cGV9YC5zcGxpdChcIi9cIikgOiBbXTtcbiAgY29uc3QgYWN0aW9uTmFtZSA9IHNwbGl0VHlwZVtzcGxpdFR5cGUubGVuZ3RoIC0gMV0gfHwgXCJhY3Rpb25DcmVhdG9yXCI7XG4gIHJldHVybiBgRGV0ZWN0ZWQgYW4gYWN0aW9uIGNyZWF0b3Igd2l0aCB0eXBlIFwiJHt0eXBlIHx8IFwidW5rbm93blwifVwiIGJlaW5nIGRpc3BhdGNoZWQuIFxuTWFrZSBzdXJlIHlvdSdyZSBjYWxsaW5nIHRoZSBhY3Rpb24gY3JlYXRvciBiZWZvcmUgZGlzcGF0Y2hpbmcsIGkuZS4gXFxgZGlzcGF0Y2goJHthY3Rpb25OYW1lfSgpKVxcYCBpbnN0ZWFkIG9mIFxcYGRpc3BhdGNoKCR7YWN0aW9uTmFtZX0pXFxgLiBUaGlzIGlzIG5lY2Vzc2FyeSBldmVuIGlmIHRoZSBhY3Rpb24gaGFzIG5vIHBheWxvYWQuYDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbkNyZWF0b3JJbnZhcmlhbnRNaWRkbGV3YXJlKG9wdGlvbnMgPSB7fSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcmV0dXJuICgpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiBuZXh0KGFjdGlvbik7XG4gIH1cbiAgY29uc3Qge1xuICAgIGlzQWN0aW9uQ3JlYXRvcjogaXNBY3Rpb25DcmVhdG9yMiA9IGlzQWN0aW9uQ3JlYXRvclxuICB9ID0gb3B0aW9ucztcbiAgcmV0dXJuICgpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gICAgaWYgKGlzQWN0aW9uQ3JlYXRvcjIoYWN0aW9uKSkge1xuICAgICAgY29uc29sZS53YXJuKGdldE1lc3NhZ2UoYWN0aW9uLnR5cGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgfTtcbn1cblxuLy8gc3JjL3V0aWxzLnRzXG5pbXBvcnQgeyBwcm9kdWNlIGFzIGNyZWF0ZU5leHRTdGF0ZSwgaXNEcmFmdGFibGUgfSBmcm9tIFwiaW1tZXJcIjtcbmZ1bmN0aW9uIGdldFRpbWVNZWFzdXJlVXRpbHMobWF4RGVsYXksIGZuTmFtZSkge1xuICBsZXQgZWxhcHNlZCA9IDA7XG4gIHJldHVybiB7XG4gICAgbWVhc3VyZVRpbWUoZm4pIHtcbiAgICAgIGNvbnN0IHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjb25zdCBmaW5pc2hlZCA9IERhdGUubm93KCk7XG4gICAgICAgIGVsYXBzZWQgKz0gZmluaXNoZWQgLSBzdGFydGVkO1xuICAgICAgfVxuICAgIH0sXG4gICAgd2FybklmRXhjZWVkZWQoKSB7XG4gICAgICBpZiAoZWxhcHNlZCA+IG1heERlbGF5KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtmbk5hbWV9IHRvb2sgJHtlbGFwc2VkfW1zLCB3aGljaCBpcyBtb3JlIHRoYW4gdGhlIHdhcm5pbmcgdGhyZXNob2xkIG9mICR7bWF4RGVsYXl9bXMuIFxuSWYgeW91ciBzdGF0ZSBvciBhY3Rpb25zIGFyZSB2ZXJ5IGxhcmdlLCB5b3UgbWF5IHdhbnQgdG8gZGlzYWJsZSB0aGUgbWlkZGxld2FyZSBhcyBpdCBtaWdodCBjYXVzZSB0b28gbXVjaCBvZiBhIHNsb3dkb3duIGluIGRldmVsb3BtZW50IG1vZGUuIFNlZSBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL2FwaS9nZXREZWZhdWx0TWlkZGxld2FyZSBmb3IgaW5zdHJ1Y3Rpb25zLlxuSXQgaXMgZGlzYWJsZWQgaW4gcHJvZHVjdGlvbiBidWlsZHMsIHNvIHlvdSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoYXQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZmluZChpdGVyYWJsZSwgY29tcGFyYXRvcikge1xuICBmb3IgKGNvbnN0IGVudHJ5IG9mIGl0ZXJhYmxlKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IoZW50cnkpKSB7XG4gICAgICByZXR1cm4gZW50cnk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG52YXIgVHVwbGUgPSBjbGFzcyBfVHVwbGUgZXh0ZW5kcyBBcnJheSB7XG4gIGNvbnN0cnVjdG9yKC4uLml0ZW1zKSB7XG4gICAgc3VwZXIoLi4uaXRlbXMpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBfVHVwbGUucHJvdG90eXBlKTtcbiAgfVxuICBzdGF0aWMgZ2V0IFtTeW1ib2wuc3BlY2llc10oKSB7XG4gICAgcmV0dXJuIF9UdXBsZTtcbiAgfVxuICBjb25jYXQoLi4uYXJyKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNvbmNhdC5hcHBseSh0aGlzLCBhcnIpO1xuICB9XG4gIHByZXBlbmQoLi4uYXJyKSB7XG4gICAgaWYgKGFyci5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcnJbMF0pKSB7XG4gICAgICByZXR1cm4gbmV3IF9UdXBsZSguLi5hcnJbMF0uY29uY2F0KHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBfVHVwbGUoLi4uYXJyLmNvbmNhdCh0aGlzKSk7XG4gIH1cbn07XG5mdW5jdGlvbiBmcmVlemVEcmFmdGFibGUodmFsKSB7XG4gIHJldHVybiBpc0RyYWZ0YWJsZSh2YWwpID8gY3JlYXRlTmV4dFN0YXRlKHZhbCwgKCkgPT4ge1xuICB9KSA6IHZhbDtcbn1cbmZ1bmN0aW9uIGVtcGxhY2UobWFwLCBrZXksIGhhbmRsZXIpIHtcbiAgaWYgKG1hcC5oYXMoa2V5KSkge1xuICAgIGxldCB2YWx1ZSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoaGFuZGxlci51cGRhdGUpIHtcbiAgICAgIHZhbHVlID0gaGFuZGxlci51cGRhdGUodmFsdWUsIGtleSwgbWFwKTtcbiAgICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoIWhhbmRsZXIuaW5zZXJ0KSB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMCkgOiBcIk5vIGluc2VydCBwcm92aWRlZCBmb3Iga2V5IG5vdCBhbHJlYWR5IGluIG1hcFwiKTtcbiAgY29uc3QgaW5zZXJ0ZWQgPSBoYW5kbGVyLmluc2VydChrZXksIG1hcCk7XG4gIG1hcC5zZXQoa2V5LCBpbnNlcnRlZCk7XG4gIHJldHVybiBpbnNlcnRlZDtcbn1cblxuLy8gc3JjL2ltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZS50c1xuZnVuY3Rpb24gaXNJbW11dGFibGVEZWZhdWx0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT0gbnVsbCB8fCBPYmplY3QuaXNGcm96ZW4odmFsdWUpO1xufVxuZnVuY3Rpb24gdHJhY2tGb3JNdXRhdGlvbnMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCBvYmopIHtcbiAgY29uc3QgdHJhY2tlZFByb3BlcnRpZXMgPSB0cmFja1Byb3BlcnRpZXMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCBvYmopO1xuICByZXR1cm4ge1xuICAgIGRldGVjdE11dGF0aW9ucygpIHtcbiAgICAgIHJldHVybiBkZXRlY3RNdXRhdGlvbnMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCB0cmFja2VkUHJvcGVydGllcywgb2JqKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiB0cmFja1Byb3BlcnRpZXMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzID0gW10sIG9iaiwgcGF0aCA9IFwiXCIsIGNoZWNrZWRPYmplY3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSkge1xuICBjb25zdCB0cmFja2VkID0ge1xuICAgIHZhbHVlOiBvYmpcbiAgfTtcbiAgaWYgKCFpc0ltbXV0YWJsZShvYmopICYmICFjaGVja2VkT2JqZWN0cy5oYXMob2JqKSkge1xuICAgIGNoZWNrZWRPYmplY3RzLmFkZChvYmopO1xuICAgIHRyYWNrZWQuY2hpbGRyZW4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgIGNvbnN0IGNoaWxkUGF0aCA9IHBhdGggPyBwYXRoICsgXCIuXCIgKyBrZXkgOiBrZXk7XG4gICAgICBpZiAoaWdub3JlUGF0aHMubGVuZ3RoICYmIGlnbm9yZVBhdGhzLmluZGV4T2YoY2hpbGRQYXRoKSAhPT0gLTEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB0cmFja2VkLmNoaWxkcmVuW2tleV0gPSB0cmFja1Byb3BlcnRpZXMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCBvYmpba2V5XSwgY2hpbGRQYXRoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRyYWNrZWQ7XG59XG5mdW5jdGlvbiBkZXRlY3RNdXRhdGlvbnMoaXNJbW11dGFibGUsIGlnbm9yZWRQYXRocyA9IFtdLCB0cmFja2VkUHJvcGVydHksIG9iaiwgc2FtZVBhcmVudFJlZiA9IGZhbHNlLCBwYXRoID0gXCJcIikge1xuICBjb25zdCBwcmV2T2JqID0gdHJhY2tlZFByb3BlcnR5ID8gdHJhY2tlZFByb3BlcnR5LnZhbHVlIDogdm9pZCAwO1xuICBjb25zdCBzYW1lUmVmID0gcHJldk9iaiA9PT0gb2JqO1xuICBpZiAoc2FtZVBhcmVudFJlZiAmJiAhc2FtZVJlZiAmJiAhTnVtYmVyLmlzTmFOKG9iaikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2FzTXV0YXRlZDogdHJ1ZSxcbiAgICAgIHBhdGhcbiAgICB9O1xuICB9XG4gIGlmIChpc0ltbXV0YWJsZShwcmV2T2JqKSB8fCBpc0ltbXV0YWJsZShvYmopKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdhc011dGF0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBjb25zdCBrZXlzVG9EZXRlY3QgPSB7fTtcbiAgZm9yIChsZXQga2V5IGluIHRyYWNrZWRQcm9wZXJ0eS5jaGlsZHJlbikge1xuICAgIGtleXNUb0RldGVjdFtrZXldID0gdHJ1ZTtcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAga2V5c1RvRGV0ZWN0W2tleV0gPSB0cnVlO1xuICB9XG4gIGNvbnN0IGhhc0lnbm9yZWRQYXRocyA9IGlnbm9yZWRQYXRocy5sZW5ndGggPiAwO1xuICBmb3IgKGxldCBrZXkgaW4ga2V5c1RvRGV0ZWN0KSB7XG4gICAgY29uc3QgbmVzdGVkUGF0aCA9IHBhdGggPyBwYXRoICsgXCIuXCIgKyBrZXkgOiBrZXk7XG4gICAgaWYgKGhhc0lnbm9yZWRQYXRocykge1xuICAgICAgY29uc3QgaGFzTWF0Y2hlcyA9IGlnbm9yZWRQYXRocy5zb21lKChpZ25vcmVkKSA9PiB7XG4gICAgICAgIGlmIChpZ25vcmVkIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgcmV0dXJuIGlnbm9yZWQudGVzdChuZXN0ZWRQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVzdGVkUGF0aCA9PT0gaWdub3JlZDtcbiAgICAgIH0pO1xuICAgICAgaWYgKGhhc01hdGNoZXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGRldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlZFBhdGhzLCB0cmFja2VkUHJvcGVydHkuY2hpbGRyZW5ba2V5XSwgb2JqW2tleV0sIHNhbWVSZWYsIG5lc3RlZFBhdGgpO1xuICAgIGlmIChyZXN1bHQud2FzTXV0YXRlZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3YXNNdXRhdGVkOiBmYWxzZVxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKG9wdGlvbnMgPSB7fSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcmV0dXJuICgpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiBuZXh0KGFjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHN0cmluZ2lmeTIgPSBmdW5jdGlvbihvYmosIHNlcmlhbGl6ZXIsIGluZGVudCwgZGVjeWNsZXIpIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIGdldFNlcmlhbGl6ZTIoc2VyaWFsaXplciwgZGVjeWNsZXIpLCBpbmRlbnQpO1xuICAgIH0sIGdldFNlcmlhbGl6ZTIgPSBmdW5jdGlvbihzZXJpYWxpemVyLCBkZWN5Y2xlcikge1xuICAgICAgbGV0IHN0YWNrID0gW10sIGtleXMgPSBbXTtcbiAgICAgIGlmICghZGVjeWNsZXIpIGRlY3ljbGVyID0gZnVuY3Rpb24oXywgdmFsdWUpIHtcbiAgICAgICAgaWYgKHN0YWNrWzBdID09PSB2YWx1ZSkgcmV0dXJuIFwiW0NpcmN1bGFyIH5dXCI7XG4gICAgICAgIHJldHVybiBcIltDaXJjdWxhciB+LlwiICsga2V5cy5zbGljZSgwLCBzdGFjay5pbmRleE9mKHZhbHVlKSkuam9pbihcIi5cIikgKyBcIl1cIjtcbiAgICAgIH07XG4gICAgICByZXR1cm4gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciB0aGlzUG9zID0gc3RhY2suaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICB+dGhpc1BvcyA/IHN0YWNrLnNwbGljZSh0aGlzUG9zICsgMSkgOiBzdGFjay5wdXNoKHRoaXMpO1xuICAgICAgICAgIH50aGlzUG9zID8ga2V5cy5zcGxpY2UodGhpc1BvcywgSW5maW5pdHksIGtleSkgOiBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICBpZiAofnN0YWNrLmluZGV4T2YodmFsdWUpKSB2YWx1ZSA9IGRlY3ljbGVyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBzdGFjay5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZXIgPT0gbnVsbCA/IHZhbHVlIDogc2VyaWFsaXplci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBzdHJpbmdpZnkgPSBzdHJpbmdpZnkyLCBnZXRTZXJpYWxpemUgPSBnZXRTZXJpYWxpemUyO1xuICAgIGxldCB7XG4gICAgICBpc0ltbXV0YWJsZSA9IGlzSW1tdXRhYmxlRGVmYXVsdCxcbiAgICAgIGlnbm9yZWRQYXRocyxcbiAgICAgIHdhcm5BZnRlciA9IDMyXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgdHJhY2sgPSB0cmFja0Zvck11dGF0aW9ucy5iaW5kKG51bGwsIGlzSW1tdXRhYmxlLCBpZ25vcmVkUGF0aHMpO1xuICAgIHJldHVybiAoe1xuICAgICAgZ2V0U3RhdGVcbiAgICB9KSA9PiB7XG4gICAgICBsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgbGV0IHRyYWNrZXIgPSB0cmFjayhzdGF0ZSk7XG4gICAgICBsZXQgcmVzdWx0O1xuICAgICAgcmV0dXJuIChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lYXN1cmVVdGlscyA9IGdldFRpbWVNZWFzdXJlVXRpbHMod2FybkFmdGVyLCBcIkltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZVwiKTtcbiAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKCgpID0+IHtcbiAgICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gdHJhY2tlci5kZXRlY3RNdXRhdGlvbnMoKTtcbiAgICAgICAgICB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xuICAgICAgICAgIGlmIChyZXN1bHQud2FzTXV0YXRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTkpIDogYEEgc3RhdGUgbXV0YXRpb24gd2FzIGRldGVjdGVkIGJldHdlZW4gZGlzcGF0Y2hlcywgaW4gdGhlIHBhdGggJyR7cmVzdWx0LnBhdGggfHwgXCJcIn0nLiAgVGhpcyBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yLiAoaHR0cHM6Ly9yZWR1eC5qcy5vcmcvc3R5bGUtZ3VpZGUvc3R5bGUtZ3VpZGUjZG8tbm90LW11dGF0ZS1zdGF0ZSlgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkaXNwYXRjaGVkQWN0aW9uID0gbmV4dChhY3Rpb24pO1xuICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoKCkgPT4ge1xuICAgICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgICByZXN1bHQgPSB0cmFja2VyLmRldGVjdE11dGF0aW9ucygpO1xuICAgICAgICAgIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSk7XG4gICAgICAgICAgaWYgKHJlc3VsdC53YXNNdXRhdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyMCkgOiBgQSBzdGF0ZSBtdXRhdGlvbiB3YXMgZGV0ZWN0ZWQgaW5zaWRlIGEgZGlzcGF0Y2gsIGluIHRoZSBwYXRoOiAke3Jlc3VsdC5wYXRoIHx8IFwiXCJ9LiBUYWtlIGEgbG9vayBhdCB0aGUgcmVkdWNlcihzKSBoYW5kbGluZyB0aGUgYWN0aW9uICR7c3RyaW5naWZ5MihhY3Rpb24pfS4gKGh0dHBzOi8vcmVkdXguanMub3JnL3N0eWxlLWd1aWRlL3N0eWxlLWd1aWRlI2RvLW5vdC1tdXRhdGUtc3RhdGUpYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKCk7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaGVkQWN0aW9uO1xuICAgICAgfTtcbiAgICB9O1xuICB9XG59XG5cbi8vIHNyYy9zZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUudHNcbmltcG9ydCB7IGlzQWN0aW9uIGFzIGlzQWN0aW9uMiwgaXNQbGFpbk9iamVjdCB9IGZyb20gXCJyZWR1eFwiO1xuZnVuY3Rpb24gaXNQbGFpbih2YWwpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIHJldHVybiB2YWwgPT0gbnVsbCB8fCB0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGUgPT09IFwiYm9vbGVhblwiIHx8IHR5cGUgPT09IFwibnVtYmVyXCIgfHwgQXJyYXkuaXNBcnJheSh2YWwpIHx8IGlzUGxhaW5PYmplY3QodmFsKTtcbn1cbmZ1bmN0aW9uIGZpbmROb25TZXJpYWxpemFibGVWYWx1ZSh2YWx1ZSwgcGF0aCA9IFwiXCIsIGlzU2VyaWFsaXphYmxlID0gaXNQbGFpbiwgZ2V0RW50cmllcywgaWdub3JlZFBhdGhzID0gW10sIGNhY2hlKSB7XG4gIGxldCBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZTtcbiAgaWYgKCFpc1NlcmlhbGl6YWJsZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5UGF0aDogcGF0aCB8fCBcIjxyb290PlwiLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGNhY2hlPy5oYXModmFsdWUpKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGVudHJpZXMgPSBnZXRFbnRyaWVzICE9IG51bGwgPyBnZXRFbnRyaWVzKHZhbHVlKSA6IE9iamVjdC5lbnRyaWVzKHZhbHVlKTtcbiAgY29uc3QgaGFzSWdub3JlZFBhdGhzID0gaWdub3JlZFBhdGhzLmxlbmd0aCA+IDA7XG4gIGZvciAoY29uc3QgW2tleSwgbmVzdGVkVmFsdWVdIG9mIGVudHJpZXMpIHtcbiAgICBjb25zdCBuZXN0ZWRQYXRoID0gcGF0aCA/IHBhdGggKyBcIi5cIiArIGtleSA6IGtleTtcbiAgICBpZiAoaGFzSWdub3JlZFBhdGhzKSB7XG4gICAgICBjb25zdCBoYXNNYXRjaGVzID0gaWdub3JlZFBhdGhzLnNvbWUoKGlnbm9yZWQpID0+IHtcbiAgICAgICAgaWYgKGlnbm9yZWQgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICByZXR1cm4gaWdub3JlZC50ZXN0KG5lc3RlZFBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXN0ZWRQYXRoID09PSBpZ25vcmVkO1xuICAgICAgfSk7XG4gICAgICBpZiAoaGFzTWF0Y2hlcykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc1NlcmlhbGl6YWJsZShuZXN0ZWRWYWx1ZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleVBhdGg6IG5lc3RlZFBhdGgsXG4gICAgICAgIHZhbHVlOiBuZXN0ZWRWYWx1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuZXN0ZWRWYWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgZm91bmROZXN0ZWRTZXJpYWxpemFibGUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUobmVzdGVkVmFsdWUsIG5lc3RlZFBhdGgsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMsIGNhY2hlKTtcbiAgICAgIGlmIChmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZSkge1xuICAgICAgICByZXR1cm4gZm91bmROZXN0ZWRTZXJpYWxpemFibGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChjYWNoZSAmJiBpc05lc3RlZEZyb3plbih2YWx1ZSkpIGNhY2hlLmFkZCh2YWx1ZSk7XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzTmVzdGVkRnJvemVuKHZhbHVlKSB7XG4gIGlmICghT2JqZWN0LmlzRnJvemVuKHZhbHVlKSkgcmV0dXJuIGZhbHNlO1xuICBmb3IgKGNvbnN0IG5lc3RlZFZhbHVlIG9mIE9iamVjdC52YWx1ZXModmFsdWUpKSB7XG4gICAgaWYgKHR5cGVvZiBuZXN0ZWRWYWx1ZSAhPT0gXCJvYmplY3RcIiB8fCBuZXN0ZWRWYWx1ZSA9PT0gbnVsbCkgY29udGludWU7XG4gICAgaWYgKCFpc05lc3RlZEZyb3plbihuZXN0ZWRWYWx1ZSkpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShvcHRpb25zID0ge30pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHJldHVybiAoKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4gbmV4dChhY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU2VyaWFsaXphYmxlID0gaXNQbGFpbixcbiAgICAgIGdldEVudHJpZXMsXG4gICAgICBpZ25vcmVkQWN0aW9ucyA9IFtdLFxuICAgICAgaWdub3JlZEFjdGlvblBhdGhzID0gW1wibWV0YS5hcmdcIiwgXCJtZXRhLmJhc2VRdWVyeU1ldGFcIl0sXG4gICAgICBpZ25vcmVkUGF0aHMgPSBbXSxcbiAgICAgIHdhcm5BZnRlciA9IDMyLFxuICAgICAgaWdub3JlU3RhdGUgPSBmYWxzZSxcbiAgICAgIGlnbm9yZUFjdGlvbnMgPSBmYWxzZSxcbiAgICAgIGRpc2FibGVDYWNoZSA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgY2FjaGUgPSAhZGlzYWJsZUNhY2hlICYmIFdlYWtTZXQgPyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKSA6IHZvaWQgMDtcbiAgICByZXR1cm4gKHN0b3JlQVBJKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuICAgICAgaWYgKCFpc0FjdGlvbjIoYWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xuICAgICAgY29uc3QgbWVhc3VyZVV0aWxzID0gZ2V0VGltZU1lYXN1cmVVdGlscyh3YXJuQWZ0ZXIsIFwiU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlXCIpO1xuICAgICAgaWYgKCFpZ25vcmVBY3Rpb25zICYmICEoaWdub3JlZEFjdGlvbnMubGVuZ3RoICYmIGlnbm9yZWRBY3Rpb25zLmluZGV4T2YoYWN0aW9uLnR5cGUpICE9PSAtMSkpIHtcbiAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKGFjdGlvbiwgXCJcIiwgaXNTZXJpYWxpemFibGUsIGdldEVudHJpZXMsIGlnbm9yZWRBY3Rpb25QYXRocywgY2FjaGUpO1xuICAgICAgICAgIGlmIChmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGtleVBhdGgsXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9ID0gZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEEgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZSB3YXMgZGV0ZWN0ZWQgaW4gYW4gYWN0aW9uLCBpbiB0aGUgcGF0aDogXFxgJHtrZXlQYXRofVxcYC4gVmFsdWU6YCwgdmFsdWUsIFwiXFxuVGFrZSBhIGxvb2sgYXQgdGhlIGxvZ2ljIHRoYXQgZGlzcGF0Y2hlZCB0aGlzIGFjdGlvbjogXCIsIGFjdGlvbiwgXCJcXG4oU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2ZhcS9hY3Rpb25zI3doeS1zaG91bGQtdHlwZS1iZS1hLXN0cmluZy1vci1hdC1sZWFzdC1zZXJpYWxpemFibGUtd2h5LXNob3VsZC1teS1hY3Rpb24tdHlwZXMtYmUtY29uc3RhbnRzKVwiLCBcIlxcbihUbyBhbGxvdyBub24tc2VyaWFsaXphYmxlIHZhbHVlcyBzZWU6IGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvdXNhZ2UvdXNhZ2UtZ3VpZGUjd29ya2luZy13aXRoLW5vbi1zZXJpYWxpemFibGUtZGF0YSlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghaWdub3JlU3RhdGUpIHtcbiAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlQVBJLmdldFN0YXRlKCk7XG4gICAgICAgICAgY29uc3QgZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKHN0YXRlLCBcIlwiLCBpc1NlcmlhbGl6YWJsZSwgZ2V0RW50cmllcywgaWdub3JlZFBhdGhzLCBjYWNoZSk7XG4gICAgICAgICAgaWYgKGZvdW5kU3RhdGVOb25TZXJpYWxpemFibGVWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBrZXlQYXRoLFxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfSA9IGZvdW5kU3RhdGVOb25TZXJpYWxpemFibGVWYWx1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEEgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZSB3YXMgZGV0ZWN0ZWQgaW4gdGhlIHN0YXRlLCBpbiB0aGUgcGF0aDogXFxgJHtrZXlQYXRofVxcYC4gVmFsdWU6YCwgdmFsdWUsIGBcblRha2UgYSBsb29rIGF0IHRoZSByZWR1Y2VyKHMpIGhhbmRsaW5nIHRoaXMgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9LlxuKFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9mYXEvb3JnYW5pemluZy1zdGF0ZSNjYW4taS1wdXQtZnVuY3Rpb25zLXByb21pc2VzLW9yLW90aGVyLW5vbi1zZXJpYWxpemFibGUtaXRlbXMtaW4tbXktc3RvcmUtc3RhdGUpYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH1cbn1cblxuLy8gc3JjL2dldERlZmF1bHRNaWRkbGV3YXJlLnRzXG5mdW5jdGlvbiBpc0Jvb2xlYW4oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwiYm9vbGVhblwiO1xufVxudmFyIGJ1aWxkR2V0RGVmYXVsdE1pZGRsZXdhcmUgPSAoKSA9PiBmdW5jdGlvbiBnZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICB0aHVuayA9IHRydWUsXG4gICAgaW1tdXRhYmxlQ2hlY2sgPSB0cnVlLFxuICAgIHNlcmlhbGl6YWJsZUNoZWNrID0gdHJ1ZSxcbiAgICBhY3Rpb25DcmVhdG9yQ2hlY2sgPSB0cnVlXG4gIH0gPSBvcHRpb25zID8/IHt9O1xuICBsZXQgbWlkZGxld2FyZUFycmF5ID0gbmV3IFR1cGxlKCk7XG4gIGlmICh0aHVuaykge1xuICAgIGlmIChpc0Jvb2xlYW4odGh1bmspKSB7XG4gICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaCh0aHVua01pZGRsZXdhcmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaCh3aXRoRXh0cmFBcmd1bWVudCh0aHVuay5leHRyYUFyZ3VtZW50KSk7XG4gICAgfVxuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoaW1tdXRhYmxlQ2hlY2spIHtcbiAgICAgIGxldCBpbW11dGFibGVPcHRpb25zID0ge307XG4gICAgICBpZiAoIWlzQm9vbGVhbihpbW11dGFibGVDaGVjaykpIHtcbiAgICAgICAgaW1tdXRhYmxlT3B0aW9ucyA9IGltbXV0YWJsZUNoZWNrO1xuICAgICAgfVxuICAgICAgbWlkZGxld2FyZUFycmF5LnVuc2hpZnQoY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKGltbXV0YWJsZU9wdGlvbnMpKTtcbiAgICB9XG4gICAgaWYgKHNlcmlhbGl6YWJsZUNoZWNrKSB7XG4gICAgICBsZXQgc2VyaWFsaXphYmxlT3B0aW9ucyA9IHt9O1xuICAgICAgaWYgKCFpc0Jvb2xlYW4oc2VyaWFsaXphYmxlQ2hlY2spKSB7XG4gICAgICAgIHNlcmlhbGl6YWJsZU9wdGlvbnMgPSBzZXJpYWxpemFibGVDaGVjaztcbiAgICAgIH1cbiAgICAgIG1pZGRsZXdhcmVBcnJheS5wdXNoKGNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShzZXJpYWxpemFibGVPcHRpb25zKSk7XG4gICAgfVxuICAgIGlmIChhY3Rpb25DcmVhdG9yQ2hlY2spIHtcbiAgICAgIGxldCBhY3Rpb25DcmVhdG9yT3B0aW9ucyA9IHt9O1xuICAgICAgaWYgKCFpc0Jvb2xlYW4oYWN0aW9uQ3JlYXRvckNoZWNrKSkge1xuICAgICAgICBhY3Rpb25DcmVhdG9yT3B0aW9ucyA9IGFjdGlvbkNyZWF0b3JDaGVjaztcbiAgICAgIH1cbiAgICAgIG1pZGRsZXdhcmVBcnJheS51bnNoaWZ0KGNyZWF0ZUFjdGlvbkNyZWF0b3JJbnZhcmlhbnRNaWRkbGV3YXJlKGFjdGlvbkNyZWF0b3JPcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtaWRkbGV3YXJlQXJyYXk7XG59O1xuXG4vLyBzcmMvYXV0b0JhdGNoRW5oYW5jZXIudHNcbnZhciBTSE9VTERfQVVUT0JBVENIID0gXCJSVEtfYXV0b0JhdGNoXCI7XG52YXIgcHJlcGFyZUF1dG9CYXRjaGVkID0gKCkgPT4gKHBheWxvYWQpID0+ICh7XG4gIHBheWxvYWQsXG4gIG1ldGE6IHtcbiAgICBbU0hPVUxEX0FVVE9CQVRDSF06IHRydWVcbiAgfVxufSk7XG52YXIgY3JlYXRlUXVldWVXaXRoVGltZXIgPSAodGltZW91dCkgPT4ge1xuICByZXR1cm4gKG5vdGlmeSkgPT4ge1xuICAgIHNldFRpbWVvdXQobm90aWZ5LCB0aW1lb3V0KTtcbiAgfTtcbn07XG52YXIgckFGID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA6IGNyZWF0ZVF1ZXVlV2l0aFRpbWVyKDEwKTtcbnZhciBhdXRvQmF0Y2hFbmhhbmNlciA9IChvcHRpb25zID0ge1xuICB0eXBlOiBcInJhZlwiXG59KSA9PiAobmV4dCkgPT4gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBuZXh0KC4uLmFyZ3MpO1xuICBsZXQgbm90aWZ5aW5nID0gdHJ1ZTtcbiAgbGV0IHNob3VsZE5vdGlmeUF0RW5kT2ZUaWNrID0gZmFsc2U7XG4gIGxldCBub3RpZmljYXRpb25RdWV1ZWQgPSBmYWxzZTtcbiAgY29uc3QgbGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3QgcXVldWVDYWxsYmFjayA9IG9wdGlvbnMudHlwZSA9PT0gXCJ0aWNrXCIgPyBxdWV1ZU1pY3JvdGFzayA6IG9wdGlvbnMudHlwZSA9PT0gXCJyYWZcIiA/IHJBRiA6IG9wdGlvbnMudHlwZSA9PT0gXCJjYWxsYmFja1wiID8gb3B0aW9ucy5xdWV1ZU5vdGlmaWNhdGlvbiA6IGNyZWF0ZVF1ZXVlV2l0aFRpbWVyKG9wdGlvbnMudGltZW91dCk7XG4gIGNvbnN0IG5vdGlmeUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBub3RpZmljYXRpb25RdWV1ZWQgPSBmYWxzZTtcbiAgICBpZiAoc2hvdWxkTm90aWZ5QXRFbmRPZlRpY2spIHtcbiAgICAgIHNob3VsZE5vdGlmeUF0RW5kT2ZUaWNrID0gZmFsc2U7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobCkgPT4gbCgpKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdG9yZSwge1xuICAgIC8vIE92ZXJyaWRlIHRoZSBiYXNlIGBzdG9yZS5zdWJzY3JpYmVgIG1ldGhvZCB0byBrZWVwIG9yaWdpbmFsIGxpc3RlbmVyc1xuICAgIC8vIGZyb20gcnVubmluZyBpZiB3ZSdyZSBkZWxheWluZyBub3RpZmljYXRpb25zXG4gICAgc3Vic2NyaWJlKGxpc3RlbmVyMikge1xuICAgICAgY29uc3Qgd3JhcHBlZExpc3RlbmVyID0gKCkgPT4gbm90aWZ5aW5nICYmIGxpc3RlbmVyMigpO1xuICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUod3JhcHBlZExpc3RlbmVyKTtcbiAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIyKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIyKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAvLyBPdmVycmlkZSB0aGUgYmFzZSBgc3RvcmUuZGlzcGF0Y2hgIG1ldGhvZCBzbyB0aGF0IHdlIGNhbiBjaGVjayBhY3Rpb25zXG4gICAgLy8gZm9yIHRoZSBgc2hvdWxkQXV0b0JhdGNoYCBmbGFnIGFuZCBkZXRlcm1pbmUgaWYgYmF0Y2hpbmcgaXMgYWN0aXZlXG4gICAgZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgICB0cnkge1xuICAgICAgICBub3RpZnlpbmcgPSAhYWN0aW9uPy5tZXRhPy5bU0hPVUxEX0FVVE9CQVRDSF07XG4gICAgICAgIHNob3VsZE5vdGlmeUF0RW5kT2ZUaWNrID0gIW5vdGlmeWluZztcbiAgICAgICAgaWYgKHNob3VsZE5vdGlmeUF0RW5kT2ZUaWNrKSB7XG4gICAgICAgICAgaWYgKCFub3RpZmljYXRpb25RdWV1ZWQpIHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgICBxdWV1ZUNhbGxiYWNrKG5vdGlmeUxpc3RlbmVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgbm90aWZ5aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuLy8gc3JjL2dldERlZmF1bHRFbmhhbmNlcnMudHNcbnZhciBidWlsZEdldERlZmF1bHRFbmhhbmNlcnMgPSAobWlkZGxld2FyZUVuaGFuY2VyKSA9PiBmdW5jdGlvbiBnZXREZWZhdWx0RW5oYW5jZXJzKG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGF1dG9CYXRjaCA9IHRydWVcbiAgfSA9IG9wdGlvbnMgPz8ge307XG4gIGxldCBlbmhhbmNlckFycmF5ID0gbmV3IFR1cGxlKG1pZGRsZXdhcmVFbmhhbmNlcik7XG4gIGlmIChhdXRvQmF0Y2gpIHtcbiAgICBlbmhhbmNlckFycmF5LnB1c2goYXV0b0JhdGNoRW5oYW5jZXIodHlwZW9mIGF1dG9CYXRjaCA9PT0gXCJvYmplY3RcIiA/IGF1dG9CYXRjaCA6IHZvaWQgMCkpO1xuICB9XG4gIHJldHVybiBlbmhhbmNlckFycmF5O1xufTtcblxuLy8gc3JjL2NvbmZpZ3VyZVN0b3JlLnRzXG5mdW5jdGlvbiBjb25maWd1cmVTdG9yZShvcHRpb25zKSB7XG4gIGNvbnN0IGdldERlZmF1bHRNaWRkbGV3YXJlID0gYnVpbGRHZXREZWZhdWx0TWlkZGxld2FyZSgpO1xuICBjb25zdCB7XG4gICAgcmVkdWNlciA9IHZvaWQgMCxcbiAgICBtaWRkbGV3YXJlLFxuICAgIGRldlRvb2xzID0gdHJ1ZSxcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHZvaWQgMCxcbiAgICBlbmhhbmNlcnMgPSB2b2lkIDBcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIGxldCByb290UmVkdWNlcjtcbiAgaWYgKHR5cGVvZiByZWR1Y2VyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByb290UmVkdWNlciA9IHJlZHVjZXI7XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdDIocmVkdWNlcikpIHtcbiAgICByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2VyKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxKSA6IFwiYHJlZHVjZXJgIGlzIGEgcmVxdWlyZWQgYXJndW1lbnQsIGFuZCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gb2JqZWN0IG9mIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gY29tYmluZVJlZHVjZXJzXCIpO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbWlkZGxld2FyZSAmJiB0eXBlb2YgbWlkZGxld2FyZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMikgOiBcImBtaWRkbGV3YXJlYCBmaWVsZCBtdXN0IGJlIGEgY2FsbGJhY2tcIik7XG4gIH1cbiAgbGV0IGZpbmFsTWlkZGxld2FyZTtcbiAgaWYgKHR5cGVvZiBtaWRkbGV3YXJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmaW5hbE1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlKGdldERlZmF1bHRNaWRkbGV3YXJlKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFBcnJheS5pc0FycmF5KGZpbmFsTWlkZGxld2FyZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDMpIDogXCJ3aGVuIHVzaW5nIGEgbWlkZGxld2FyZSBidWlsZGVyIGZ1bmN0aW9uLCBhbiBhcnJheSBvZiBtaWRkbGV3YXJlIG11c3QgYmUgcmV0dXJuZWRcIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZpbmFsTWlkZGxld2FyZSA9IGdldERlZmF1bHRNaWRkbGV3YXJlKCk7XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBmaW5hbE1pZGRsZXdhcmUuc29tZSgoaXRlbSkgPT4gdHlwZW9mIGl0ZW0gIT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg0KSA6IFwiZWFjaCBtaWRkbGV3YXJlIHByb3ZpZGVkIHRvIGNvbmZpZ3VyZVN0b3JlIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBsZXQgZmluYWxDb21wb3NlID0gY29tcG9zZTI7XG4gIGlmIChkZXZUb29scykge1xuICAgIGZpbmFsQ29tcG9zZSA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoe1xuICAgICAgLy8gRW5hYmxlIGNhcHR1cmUgb2Ygc3RhY2sgdHJhY2VzIGZvciBkaXNwYXRjaGVkIFJlZHV4IGFjdGlvbnNcbiAgICAgIHRyYWNlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgICAuLi50eXBlb2YgZGV2VG9vbHMgPT09IFwib2JqZWN0XCIgJiYgZGV2VG9vbHNcbiAgICB9KTtcbiAgfVxuICBjb25zdCBtaWRkbGV3YXJlRW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUoLi4uZmluYWxNaWRkbGV3YXJlKTtcbiAgY29uc3QgZ2V0RGVmYXVsdEVuaGFuY2VycyA9IGJ1aWxkR2V0RGVmYXVsdEVuaGFuY2VycyhtaWRkbGV3YXJlRW5oYW5jZXIpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGVuaGFuY2VycyAmJiB0eXBlb2YgZW5oYW5jZXJzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg1KSA6IFwiYGVuaGFuY2Vyc2AgZmllbGQgbXVzdCBiZSBhIGNhbGxiYWNrXCIpO1xuICB9XG4gIGxldCBzdG9yZUVuaGFuY2VycyA9IHR5cGVvZiBlbmhhbmNlcnMgPT09IFwiZnVuY3Rpb25cIiA/IGVuaGFuY2VycyhnZXREZWZhdWx0RW5oYW5jZXJzKSA6IGdldERlZmF1bHRFbmhhbmNlcnMoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhQXJyYXkuaXNBcnJheShzdG9yZUVuaGFuY2VycykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg2KSA6IFwiYGVuaGFuY2Vyc2AgY2FsbGJhY2sgbXVzdCByZXR1cm4gYW4gYXJyYXlcIik7XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBzdG9yZUVuaGFuY2Vycy5zb21lKChpdGVtKSA9PiB0eXBlb2YgaXRlbSAhPT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDcpIDogXCJlYWNoIGVuaGFuY2VyIHByb3ZpZGVkIHRvIGNvbmZpZ3VyZVN0b3JlIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGZpbmFsTWlkZGxld2FyZS5sZW5ndGggJiYgIXN0b3JlRW5oYW5jZXJzLmluY2x1ZGVzKG1pZGRsZXdhcmVFbmhhbmNlcikpIHtcbiAgICBjb25zb2xlLmVycm9yKFwibWlkZGxld2FyZXMgd2VyZSBwcm92aWRlZCwgYnV0IG1pZGRsZXdhcmUgZW5oYW5jZXIgd2FzIG5vdCBpbmNsdWRlZCBpbiBmaW5hbCBlbmhhbmNlcnMgLSBtYWtlIHN1cmUgdG8gY2FsbCBgZ2V0RGVmYXVsdEVuaGFuY2Vyc2BcIik7XG4gIH1cbiAgY29uc3QgY29tcG9zZWRFbmhhbmNlciA9IGZpbmFsQ29tcG9zZSguLi5zdG9yZUVuaGFuY2Vycyk7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGNvbXBvc2VkRW5oYW5jZXIpO1xufVxuXG4vLyBzcmMvY3JlYXRlUmVkdWNlci50c1xuaW1wb3J0IHsgcHJvZHVjZSBhcyBjcmVhdGVOZXh0U3RhdGUyLCBpc0RyYWZ0IGFzIGlzRHJhZnQyLCBpc0RyYWZ0YWJsZSBhcyBpc0RyYWZ0YWJsZTIgfSBmcm9tIFwiaW1tZXJcIjtcblxuLy8gc3JjL21hcEJ1aWxkZXJzLnRzXG5mdW5jdGlvbiBleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjayhidWlsZGVyQ2FsbGJhY2spIHtcbiAgY29uc3QgYWN0aW9uc01hcCA9IHt9O1xuICBjb25zdCBhY3Rpb25NYXRjaGVycyA9IFtdO1xuICBsZXQgZGVmYXVsdENhc2VSZWR1Y2VyO1xuICBjb25zdCBidWlsZGVyID0ge1xuICAgIGFkZENhc2UodHlwZU9yQWN0aW9uQ3JlYXRvciwgcmVkdWNlcikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpZiAoYWN0aW9uTWF0Y2hlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDI2KSA6IFwiYGJ1aWxkZXIuYWRkQ2FzZWAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZE1hdGNoZXJgXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyNykgOiBcImBidWlsZGVyLmFkZENhc2VgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdHlwZU9yQWN0aW9uQ3JlYXRvciA9PT0gXCJzdHJpbmdcIiA/IHR5cGVPckFjdGlvbkNyZWF0b3IgOiB0eXBlT3JBY3Rpb25DcmVhdG9yLnR5cGU7XG4gICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMjgpIDogXCJgYnVpbGRlci5hZGRDYXNlYCBjYW5ub3QgYmUgY2FsbGVkIHdpdGggYW4gZW1wdHkgYWN0aW9uIHR5cGVcIik7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSBpbiBhY3Rpb25zTWFwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDI5KSA6IGBcXGBidWlsZGVyLmFkZENhc2VcXGAgY2Fubm90IGJlIGNhbGxlZCB3aXRoIHR3byByZWR1Y2VycyBmb3IgdGhlIHNhbWUgYWN0aW9uIHR5cGUgJyR7dHlwZX0nYCk7XG4gICAgICB9XG4gICAgICBhY3Rpb25zTWFwW3R5cGVdID0gcmVkdWNlcjtcbiAgICAgIHJldHVybiBidWlsZGVyO1xuICAgIH0sXG4gICAgYWRkTWF0Y2hlcihtYXRjaGVyLCByZWR1Y2VyKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzMCkgOiBcImBidWlsZGVyLmFkZE1hdGNoZXJgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFjdGlvbk1hdGNoZXJzLnB1c2goe1xuICAgICAgICBtYXRjaGVyLFxuICAgICAgICByZWR1Y2VyXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBidWlsZGVyO1xuICAgIH0sXG4gICAgYWRkRGVmYXVsdENhc2UocmVkdWNlcikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpZiAoZGVmYXVsdENhc2VSZWR1Y2VyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMzEpIDogXCJgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWAgY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2VcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlZmF1bHRDYXNlUmVkdWNlciA9IHJlZHVjZXI7XG4gICAgICByZXR1cm4gYnVpbGRlcjtcbiAgICB9XG4gIH07XG4gIGJ1aWxkZXJDYWxsYmFjayhidWlsZGVyKTtcbiAgcmV0dXJuIFthY3Rpb25zTWFwLCBhY3Rpb25NYXRjaGVycywgZGVmYXVsdENhc2VSZWR1Y2VyXTtcbn1cblxuLy8gc3JjL2NyZWF0ZVJlZHVjZXIudHNcbmZ1bmN0aW9uIGlzU3RhdGVGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIG1hcE9yQnVpbGRlckNhbGxiYWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAodHlwZW9mIG1hcE9yQnVpbGRlckNhbGxiYWNrID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg4KSA6IFwiVGhlIG9iamVjdCBub3RhdGlvbiBmb3IgYGNyZWF0ZVJlZHVjZXJgIGhhcyBiZWVuIHJlbW92ZWQuIFBsZWFzZSB1c2UgdGhlICdidWlsZGVyIGNhbGxiYWNrJyBub3RhdGlvbiBpbnN0ZWFkOiBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL2FwaS9jcmVhdGVSZWR1Y2VyXCIpO1xuICAgIH1cbiAgfVxuICBsZXQgW2FjdGlvbnNNYXAsIGZpbmFsQWN0aW9uTWF0Y2hlcnMsIGZpbmFsRGVmYXVsdENhc2VSZWR1Y2VyXSA9IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG1hcE9yQnVpbGRlckNhbGxiYWNrKTtcbiAgbGV0IGdldEluaXRpYWxTdGF0ZTtcbiAgaWYgKGlzU3RhdGVGdW5jdGlvbihpbml0aWFsU3RhdGUpKSB7XG4gICAgZ2V0SW5pdGlhbFN0YXRlID0gKCkgPT4gZnJlZXplRHJhZnRhYmxlKGluaXRpYWxTdGF0ZSgpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmcm96ZW5Jbml0aWFsU3RhdGUgPSBmcmVlemVEcmFmdGFibGUoaW5pdGlhbFN0YXRlKTtcbiAgICBnZXRJbml0aWFsU3RhdGUgPSAoKSA9PiBmcm96ZW5Jbml0aWFsU3RhdGU7XG4gIH1cbiAgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpLCBhY3Rpb24pIHtcbiAgICBsZXQgY2FzZVJlZHVjZXJzID0gW2FjdGlvbnNNYXBbYWN0aW9uLnR5cGVdLCAuLi5maW5hbEFjdGlvbk1hdGNoZXJzLmZpbHRlcigoe1xuICAgICAgbWF0Y2hlclxuICAgIH0pID0+IG1hdGNoZXIoYWN0aW9uKSkubWFwKCh7XG4gICAgICByZWR1Y2VyOiByZWR1Y2VyMlxuICAgIH0pID0+IHJlZHVjZXIyKV07XG4gICAgaWYgKGNhc2VSZWR1Y2Vycy5maWx0ZXIoKGNyKSA9PiAhIWNyKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNhc2VSZWR1Y2VycyA9IFtmaW5hbERlZmF1bHRDYXNlUmVkdWNlcl07XG4gICAgfVxuICAgIHJldHVybiBjYXNlUmVkdWNlcnMucmVkdWNlKChwcmV2aW91c1N0YXRlLCBjYXNlUmVkdWNlcikgPT4ge1xuICAgICAgaWYgKGNhc2VSZWR1Y2VyKSB7XG4gICAgICAgIGlmIChpc0RyYWZ0MihwcmV2aW91c1N0YXRlKSkge1xuICAgICAgICAgIGNvbnN0IGRyYWZ0ID0gcHJldmlvdXNTdGF0ZTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYXNlUmVkdWNlcihkcmFmdCwgYWN0aW9uKTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1N0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2UgaWYgKCFpc0RyYWZ0YWJsZTIocHJldmlvdXNTdGF0ZSkpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYXNlUmVkdWNlcihwcmV2aW91c1N0YXRlLCBhY3Rpb24pO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzU3RhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkEgY2FzZSByZWR1Y2VyIG9uIGEgbm9uLWRyYWZ0YWJsZSB2YWx1ZSBtdXN0IG5vdCByZXR1cm4gdW5kZWZpbmVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVOZXh0U3RhdGUyKHByZXZpb3VzU3RhdGUsIChkcmFmdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhc2VSZWR1Y2VyKGRyYWZ0LCBhY3Rpb24pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldmlvdXNTdGF0ZTtcbiAgICB9LCBzdGF0ZSk7XG4gIH1cbiAgcmVkdWNlci5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7XG4gIHJldHVybiByZWR1Y2VyO1xufVxuXG4vLyBzcmMvbWF0Y2hlcnMudHNcbnZhciBtYXRjaGVzID0gKG1hdGNoZXIsIGFjdGlvbikgPT4ge1xuICBpZiAoaGFzTWF0Y2hGdW5jdGlvbihtYXRjaGVyKSkge1xuICAgIHJldHVybiBtYXRjaGVyLm1hdGNoKGFjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG1hdGNoZXIoYWN0aW9uKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGlzQW55T2YoLi4ubWF0Y2hlcnMpIHtcbiAgcmV0dXJuIChhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gbWF0Y2hlcnMuc29tZSgobWF0Y2hlcikgPT4gbWF0Y2hlcyhtYXRjaGVyLCBhY3Rpb24pKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzQWxsT2YoLi4ubWF0Y2hlcnMpIHtcbiAgcmV0dXJuIChhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gbWF0Y2hlcnMuZXZlcnkoKG1hdGNoZXIpID0+IG1hdGNoZXMobWF0Y2hlciwgYWN0aW9uKSk7XG4gIH07XG59XG5mdW5jdGlvbiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIHZhbGlkU3RhdHVzKSB7XG4gIGlmICghYWN0aW9uIHx8ICFhY3Rpb24ubWV0YSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBoYXNWYWxpZFJlcXVlc3RJZCA9IHR5cGVvZiBhY3Rpb24ubWV0YS5yZXF1ZXN0SWQgPT09IFwic3RyaW5nXCI7XG4gIGNvbnN0IGhhc1ZhbGlkUmVxdWVzdFN0YXR1cyA9IHZhbGlkU3RhdHVzLmluZGV4T2YoYWN0aW9uLm1ldGEucmVxdWVzdFN0YXR1cykgPiAtMTtcbiAgcmV0dXJuIGhhc1ZhbGlkUmVxdWVzdElkICYmIGhhc1ZhbGlkUmVxdWVzdFN0YXR1cztcbn1cbmZ1bmN0aW9uIGlzQXN5bmNUaHVua0FycmF5KGEpIHtcbiAgcmV0dXJuIHR5cGVvZiBhWzBdID09PSBcImZ1bmN0aW9uXCIgJiYgXCJwZW5kaW5nXCIgaW4gYVswXSAmJiBcImZ1bGZpbGxlZFwiIGluIGFbMF0gJiYgXCJyZWplY3RlZFwiIGluIGFbMF07XG59XG5mdW5jdGlvbiBpc1BlbmRpbmcoLi4uYXN5bmNUaHVua3MpIHtcbiAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoYWN0aW9uKSA9PiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFtcInBlbmRpbmdcIl0pO1xuICB9XG4gIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XG4gICAgcmV0dXJuIGlzUGVuZGluZygpKGFzeW5jVGh1bmtzWzBdKTtcbiAgfVxuICByZXR1cm4gaXNBbnlPZiguLi5hc3luY1RodW5rcy5tYXAoKGFzeW5jVGh1bmspID0+IGFzeW5jVGh1bmsucGVuZGluZykpO1xufVxuZnVuY3Rpb24gaXNSZWplY3RlZCguLi5hc3luY1RodW5rcykge1xuICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChhY3Rpb24pID0+IGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wicmVqZWN0ZWRcIl0pO1xuICB9XG4gIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XG4gICAgcmV0dXJuIGlzUmVqZWN0ZWQoKShhc3luY1RodW5rc1swXSk7XG4gIH1cbiAgcmV0dXJuIGlzQW55T2YoLi4uYXN5bmNUaHVua3MubWFwKChhc3luY1RodW5rKSA9PiBhc3luY1RodW5rLnJlamVjdGVkKSk7XG59XG5mdW5jdGlvbiBpc1JlamVjdGVkV2l0aFZhbHVlKC4uLmFzeW5jVGh1bmtzKSB7XG4gIGNvbnN0IGhhc0ZsYWcgPSAoYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGFjdGlvbiAmJiBhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5yZWplY3RlZFdpdGhWYWx1ZTtcbiAgfTtcbiAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBpc0FsbE9mKGlzUmVqZWN0ZWQoLi4uYXN5bmNUaHVua3MpLCBoYXNGbGFnKTtcbiAgfVxuICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xuICAgIHJldHVybiBpc1JlamVjdGVkV2l0aFZhbHVlKCkoYXN5bmNUaHVua3NbMF0pO1xuICB9XG4gIHJldHVybiBpc0FsbE9mKGlzUmVqZWN0ZWQoLi4uYXN5bmNUaHVua3MpLCBoYXNGbGFnKTtcbn1cbmZ1bmN0aW9uIGlzRnVsZmlsbGVkKC4uLmFzeW5jVGh1bmtzKSB7XG4gIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKGFjdGlvbikgPT4gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCBbXCJmdWxmaWxsZWRcIl0pO1xuICB9XG4gIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XG4gICAgcmV0dXJuIGlzRnVsZmlsbGVkKCkoYXN5bmNUaHVua3NbMF0pO1xuICB9XG4gIHJldHVybiBpc0FueU9mKC4uLmFzeW5jVGh1bmtzLm1hcCgoYXN5bmNUaHVuaykgPT4gYXN5bmNUaHVuay5mdWxmaWxsZWQpKTtcbn1cbmZ1bmN0aW9uIGlzQXN5bmNUaHVua0FjdGlvbiguLi5hc3luY1RodW5rcykge1xuICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChhY3Rpb24pID0+IGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wicGVuZGluZ1wiLCBcImZ1bGZpbGxlZFwiLCBcInJlamVjdGVkXCJdKTtcbiAgfVxuICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xuICAgIHJldHVybiBpc0FzeW5jVGh1bmtBY3Rpb24oKShhc3luY1RodW5rc1swXSk7XG4gIH1cbiAgcmV0dXJuIGlzQW55T2YoLi4uYXN5bmNUaHVua3MuZmxhdE1hcCgoYXN5bmNUaHVuaykgPT4gW2FzeW5jVGh1bmsucGVuZGluZywgYXN5bmNUaHVuay5yZWplY3RlZCwgYXN5bmNUaHVuay5mdWxmaWxsZWRdKSk7XG59XG5cbi8vIHNyYy9uYW5vaWQudHNcbnZhciB1cmxBbHBoYWJldCA9IFwiTW9kdWxlU3ltYmhhc093blByLTAxMjM0NTY3ODlBQkNERUZHSE5SVmZnY3RpVXZ6X0txWVRKa0x4cFpYSWpRV1wiO1xudmFyIG5hbm9pZCA9IChzaXplID0gMjEpID0+IHtcbiAgbGV0IGlkID0gXCJcIjtcbiAgbGV0IGkgPSBzaXplO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgaWQgKz0gdXJsQWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIDY0IHwgMF07XG4gIH1cbiAgcmV0dXJuIGlkO1xufTtcblxuLy8gc3JjL2NyZWF0ZUFzeW5jVGh1bmsudHNcbnZhciBjb21tb25Qcm9wZXJ0aWVzID0gW1wibmFtZVwiLCBcIm1lc3NhZ2VcIiwgXCJzdGFja1wiLCBcImNvZGVcIl07XG52YXIgUmVqZWN0V2l0aFZhbHVlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihwYXlsb2FkLCBtZXRhKSB7XG4gICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcbiAgICB0aGlzLm1ldGEgPSBtZXRhO1xuICB9XG4gIC8qXG4gIHR5cGUtb25seSBwcm9wZXJ0eSB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIFJlamVjdFdpdGhWYWx1ZSBhbmQgRnVsZmlsbFdpdGhNZXRhXG4gIGRvZXMgbm90IGV4aXN0IGF0IHJ1bnRpbWVcbiAgKi9cbiAgX3R5cGU7XG59O1xudmFyIEZ1bGZpbGxXaXRoTWV0YSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IocGF5bG9hZCwgbWV0YSkge1xuICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgdGhpcy5tZXRhID0gbWV0YTtcbiAgfVxuICAvKlxuICB0eXBlLW9ubHkgcHJvcGVydHkgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBSZWplY3RXaXRoVmFsdWUgYW5kIEZ1bGZpbGxXaXRoTWV0YVxuICBkb2VzIG5vdCBleGlzdCBhdCBydW50aW1lXG4gICovXG4gIF90eXBlO1xufTtcbnZhciBtaW5pU2VyaWFsaXplRXJyb3IgPSAodmFsdWUpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNpbXBsZUVycm9yID0ge307XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBjb21tb25Qcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlW3Byb3BlcnR5XSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBzaW1wbGVFcnJvcltwcm9wZXJ0eV0gPSB2YWx1ZVtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaW1wbGVFcnJvcjtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6IFN0cmluZyh2YWx1ZSlcbiAgfTtcbn07XG52YXIgY3JlYXRlQXN5bmNUaHVuayA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4ge1xuICBmdW5jdGlvbiBjcmVhdGVBc3luY1RodW5rMih0eXBlUHJlZml4LCBwYXlsb2FkQ3JlYXRvciwgb3B0aW9ucykge1xuICAgIGNvbnN0IGZ1bGZpbGxlZCA9IGNyZWF0ZUFjdGlvbih0eXBlUHJlZml4ICsgXCIvZnVsZmlsbGVkXCIsIChwYXlsb2FkLCByZXF1ZXN0SWQsIGFyZywgbWV0YSkgPT4gKHtcbiAgICAgIHBheWxvYWQsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIC4uLm1ldGEgfHwge30sXG4gICAgICAgIGFyZyxcbiAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICByZXF1ZXN0U3RhdHVzOiBcImZ1bGZpbGxlZFwiXG4gICAgICB9XG4gICAgfSkpO1xuICAgIGNvbnN0IHBlbmRpbmcgPSBjcmVhdGVBY3Rpb24odHlwZVByZWZpeCArIFwiL3BlbmRpbmdcIiwgKHJlcXVlc3RJZCwgYXJnLCBtZXRhKSA9PiAoe1xuICAgICAgcGF5bG9hZDogdm9pZCAwLFxuICAgICAgbWV0YToge1xuICAgICAgICAuLi5tZXRhIHx8IHt9LFxuICAgICAgICBhcmcsXG4gICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgcmVxdWVzdFN0YXR1czogXCJwZW5kaW5nXCJcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgY29uc3QgcmVqZWN0ZWQgPSBjcmVhdGVBY3Rpb24odHlwZVByZWZpeCArIFwiL3JlamVjdGVkXCIsIChlcnJvciwgcmVxdWVzdElkLCBhcmcsIHBheWxvYWQsIG1ldGEpID0+ICh7XG4gICAgICBwYXlsb2FkLFxuICAgICAgZXJyb3I6IChvcHRpb25zICYmIG9wdGlvbnMuc2VyaWFsaXplRXJyb3IgfHwgbWluaVNlcmlhbGl6ZUVycm9yKShlcnJvciB8fCBcIlJlamVjdGVkXCIpLFxuICAgICAgbWV0YToge1xuICAgICAgICAuLi5tZXRhIHx8IHt9LFxuICAgICAgICBhcmcsXG4gICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgcmVqZWN0ZWRXaXRoVmFsdWU6ICEhcGF5bG9hZCxcbiAgICAgICAgcmVxdWVzdFN0YXR1czogXCJyZWplY3RlZFwiLFxuICAgICAgICBhYm9ydGVkOiBlcnJvcj8ubmFtZSA9PT0gXCJBYm9ydEVycm9yXCIsXG4gICAgICAgIGNvbmRpdGlvbjogZXJyb3I/Lm5hbWUgPT09IFwiQ29uZGl0aW9uRXJyb3JcIlxuICAgICAgfVxuICAgIH0pKTtcbiAgICBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKGFyZykge1xuICAgICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RJZCA9IG9wdGlvbnM/LmlkR2VuZXJhdG9yID8gb3B0aW9ucy5pZEdlbmVyYXRvcihhcmcpIDogbmFub2lkKCk7XG4gICAgICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgbGV0IGFib3J0SGFuZGxlcjtcbiAgICAgICAgbGV0IGFib3J0UmVhc29uO1xuICAgICAgICBmdW5jdGlvbiBhYm9ydChyZWFzb24pIHtcbiAgICAgICAgICBhYm9ydFJlYXNvbiA9IHJlYXNvbjtcbiAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9taXNlID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGV0IGZpbmFsQWN0aW9uO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgY29uZGl0aW9uUmVzdWx0ID0gb3B0aW9ucz8uY29uZGl0aW9uPy4oYXJnLCB7XG4gICAgICAgICAgICAgIGdldFN0YXRlLFxuICAgICAgICAgICAgICBleHRyYVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaXNUaGVuYWJsZShjb25kaXRpb25SZXN1bHQpKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvblJlc3VsdCA9IGF3YWl0IGNvbmRpdGlvblJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25kaXRpb25SZXN1bHQgPT09IGZhbHNlIHx8IGFib3J0Q29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb25kaXRpb25FcnJvclwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWJvcnRlZCBkdWUgdG8gY29uZGl0aW9uIGNhbGxiYWNrIHJldHVybmluZyBmYWxzZS5cIlxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWJvcnRlZFByb21pc2UgPSBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGFib3J0SGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJBYm9ydEVycm9yXCIsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBhYm9ydFJlYXNvbiB8fCBcIkFib3J0ZWRcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBhYm9ydEhhbmRsZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXNwYXRjaChwZW5kaW5nKHJlcXVlc3RJZCwgYXJnLCBvcHRpb25zPy5nZXRQZW5kaW5nTWV0YT8uKHtcbiAgICAgICAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICAgICAgICBhcmdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZ2V0U3RhdGUsXG4gICAgICAgICAgICAgIGV4dHJhXG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgZmluYWxBY3Rpb24gPSBhd2FpdCBQcm9taXNlLnJhY2UoW2Fib3J0ZWRQcm9taXNlLCBQcm9taXNlLnJlc29sdmUocGF5bG9hZENyZWF0b3IoYXJnLCB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoLFxuICAgICAgICAgICAgICBnZXRTdGF0ZSxcbiAgICAgICAgICAgICAgZXh0cmEsXG4gICAgICAgICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAgICAgICBhYm9ydCxcbiAgICAgICAgICAgICAgcmVqZWN0V2l0aFZhbHVlOiAodmFsdWUsIG1ldGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlamVjdFdpdGhWYWx1ZSh2YWx1ZSwgbWV0YSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bGZpbGxXaXRoVmFsdWU6ICh2YWx1ZSwgbWV0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRnVsZmlsbFdpdGhNZXRhKHZhbHVlLCBtZXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUmVqZWN0V2l0aFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzdWx0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBGdWxmaWxsV2l0aE1ldGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVsZmlsbGVkKHJlc3VsdC5wYXlsb2FkLCByZXF1ZXN0SWQsIGFyZywgcmVzdWx0Lm1ldGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmdWxmaWxsZWQocmVzdWx0LCByZXF1ZXN0SWQsIGFyZyk7XG4gICAgICAgICAgICB9KV0pO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZmluYWxBY3Rpb24gPSBlcnIgaW5zdGFuY2VvZiBSZWplY3RXaXRoVmFsdWUgPyByZWplY3RlZChudWxsLCByZXF1ZXN0SWQsIGFyZywgZXJyLnBheWxvYWQsIGVyci5tZXRhKSA6IHJlamVjdGVkKGVyciwgcmVxdWVzdElkLCBhcmcpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoYWJvcnRIYW5kbGVyKSB7XG4gICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGFib3J0SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHNraXBEaXNwYXRjaCA9IG9wdGlvbnMgJiYgIW9wdGlvbnMuZGlzcGF0Y2hDb25kaXRpb25SZWplY3Rpb24gJiYgcmVqZWN0ZWQubWF0Y2goZmluYWxBY3Rpb24pICYmIGZpbmFsQWN0aW9uLm1ldGEuY29uZGl0aW9uO1xuICAgICAgICAgIGlmICghc2tpcERpc3BhdGNoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmaW5hbEFjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmaW5hbEFjdGlvbjtcbiAgICAgICAgfSgpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7XG4gICAgICAgICAgYWJvcnQsXG4gICAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICAgIGFyZyxcbiAgICAgICAgICB1bndyYXAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKHVud3JhcFJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFjdGlvbkNyZWF0b3IsIHtcbiAgICAgIHBlbmRpbmcsXG4gICAgICByZWplY3RlZCxcbiAgICAgIGZ1bGZpbGxlZCxcbiAgICAgIHNldHRsZWQ6IGlzQW55T2YocmVqZWN0ZWQsIGZ1bGZpbGxlZCksXG4gICAgICB0eXBlUHJlZml4XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlQXN5bmNUaHVuazIud2l0aFR5cGVzID0gKCkgPT4gY3JlYXRlQXN5bmNUaHVuazI7XG4gIHJldHVybiBjcmVhdGVBc3luY1RodW5rMjtcbn0pKCk7XG5mdW5jdGlvbiB1bndyYXBSZXN1bHQoYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5yZWplY3RlZFdpdGhWYWx1ZSkge1xuICAgIHRocm93IGFjdGlvbi5wYXlsb2FkO1xuICB9XG4gIGlmIChhY3Rpb24uZXJyb3IpIHtcbiAgICB0aHJvdyBhY3Rpb24uZXJyb3I7XG4gIH1cbiAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xufVxuZnVuY3Rpb24gaXNUaGVuYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG59XG5cbi8vIHNyYy9jcmVhdGVTbGljZS50c1xudmFyIGFzeW5jVGh1bmtTeW1ib2wgPSAvKiBAX19QVVJFX18gKi8gU3ltYm9sLmZvcihcInJ0ay1zbGljZS1jcmVhdGVhc3luY3RodW5rXCIpO1xudmFyIGFzeW5jVGh1bmtDcmVhdG9yID0ge1xuICBbYXN5bmNUaHVua1N5bWJvbF06IGNyZWF0ZUFzeW5jVGh1bmtcbn07XG52YXIgUmVkdWNlclR5cGUgPSAvKiBAX19QVVJFX18gKi8gKChSZWR1Y2VyVHlwZTIpID0+IHtcbiAgUmVkdWNlclR5cGUyW1wicmVkdWNlclwiXSA9IFwicmVkdWNlclwiO1xuICBSZWR1Y2VyVHlwZTJbXCJyZWR1Y2VyV2l0aFByZXBhcmVcIl0gPSBcInJlZHVjZXJXaXRoUHJlcGFyZVwiO1xuICBSZWR1Y2VyVHlwZTJbXCJhc3luY1RodW5rXCJdID0gXCJhc3luY1RodW5rXCI7XG4gIHJldHVybiBSZWR1Y2VyVHlwZTI7XG59KShSZWR1Y2VyVHlwZSB8fCB7fSk7XG5mdW5jdGlvbiBnZXRUeXBlKHNsaWNlLCBhY3Rpb25LZXkpIHtcbiAgcmV0dXJuIGAke3NsaWNlfS8ke2FjdGlvbktleX1gO1xufVxuZnVuY3Rpb24gYnVpbGRDcmVhdGVTbGljZSh7XG4gIGNyZWF0b3JzXG59ID0ge30pIHtcbiAgY29uc3QgY0FUID0gY3JlYXRvcnM/LmFzeW5jVGh1bms/Llthc3luY1RodW5rU3ltYm9sXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVNsaWNlMihvcHRpb25zKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIHJlZHVjZXJQYXRoID0gbmFtZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTEpIDogXCJgbmFtZWAgaXMgYSByZXF1aXJlZCBvcHRpb24gZm9yIGNyZWF0ZVNsaWNlXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgaWYgKG9wdGlvbnMuaW5pdGlhbFN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBtdXN0IHByb3ZpZGUgYW4gYGluaXRpYWxTdGF0ZWAgdmFsdWUgdGhhdCBpcyBub3QgYHVuZGVmaW5lZGAuIFlvdSBtYXkgaGF2ZSBtaXNzcGVsbGVkIGBpbml0aWFsU3RhdGVgXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZWR1Y2VycyA9ICh0eXBlb2Ygb3B0aW9ucy5yZWR1Y2VycyA9PT0gXCJmdW5jdGlvblwiID8gb3B0aW9ucy5yZWR1Y2VycyhidWlsZFJlZHVjZXJDcmVhdG9ycygpKSA6IG9wdGlvbnMucmVkdWNlcnMpIHx8IHt9O1xuICAgIGNvbnN0IHJlZHVjZXJOYW1lcyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWU6IHt9LFxuICAgICAgc2xpY2VDYXNlUmVkdWNlcnNCeVR5cGU6IHt9LFxuICAgICAgYWN0aW9uQ3JlYXRvcnM6IHt9LFxuICAgICAgc2xpY2VNYXRjaGVyczogW11cbiAgICB9O1xuICAgIGNvbnN0IGNvbnRleHRNZXRob2RzID0ge1xuICAgICAgYWRkQ2FzZSh0eXBlT3JBY3Rpb25DcmVhdG9yLCByZWR1Y2VyMikge1xuICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIHR5cGVPckFjdGlvbkNyZWF0b3IgPT09IFwic3RyaW5nXCIgPyB0eXBlT3JBY3Rpb25DcmVhdG9yIDogdHlwZU9yQWN0aW9uQ3JlYXRvci50eXBlO1xuICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMikgOiBcImBjb250ZXh0LmFkZENhc2VgIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBhbiBlbXB0eSBhY3Rpb24gdHlwZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSBpbiBjb250ZXh0LnNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTMpIDogXCJgY29udGV4dC5hZGRDYXNlYCBjYW5ub3QgYmUgY2FsbGVkIHdpdGggdHdvIHJlZHVjZXJzIGZvciB0aGUgc2FtZSBhY3Rpb24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlW3R5cGVdID0gcmVkdWNlcjI7XG4gICAgICAgIHJldHVybiBjb250ZXh0TWV0aG9kcztcbiAgICAgIH0sXG4gICAgICBhZGRNYXRjaGVyKG1hdGNoZXIsIHJlZHVjZXIyKSB7XG4gICAgICAgIGNvbnRleHQuc2xpY2VNYXRjaGVycy5wdXNoKHtcbiAgICAgICAgICBtYXRjaGVyLFxuICAgICAgICAgIHJlZHVjZXI6IHJlZHVjZXIyXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29udGV4dE1ldGhvZHM7XG4gICAgICB9LFxuICAgICAgZXhwb3NlQWN0aW9uKG5hbWUyLCBhY3Rpb25DcmVhdG9yKSB7XG4gICAgICAgIGNvbnRleHQuYWN0aW9uQ3JlYXRvcnNbbmFtZTJdID0gYWN0aW9uQ3JlYXRvcjtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRNZXRob2RzO1xuICAgICAgfSxcbiAgICAgIGV4cG9zZUNhc2VSZWR1Y2VyKG5hbWUyLCByZWR1Y2VyMikge1xuICAgICAgICBjb250ZXh0LnNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lW25hbWUyXSA9IHJlZHVjZXIyO1xuICAgICAgICByZXR1cm4gY29udGV4dE1ldGhvZHM7XG4gICAgICB9XG4gICAgfTtcbiAgICByZWR1Y2VyTmFtZXMuZm9yRWFjaCgocmVkdWNlck5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHJlZHVjZXJEZWZpbml0aW9uID0gcmVkdWNlcnNbcmVkdWNlck5hbWVdO1xuICAgICAgY29uc3QgcmVkdWNlckRldGFpbHMgPSB7XG4gICAgICAgIHJlZHVjZXJOYW1lLFxuICAgICAgICB0eXBlOiBnZXRUeXBlKG5hbWUsIHJlZHVjZXJOYW1lKSxcbiAgICAgICAgY3JlYXRlTm90YXRpb246IHR5cGVvZiBvcHRpb25zLnJlZHVjZXJzID09PSBcImZ1bmN0aW9uXCJcbiAgICAgIH07XG4gICAgICBpZiAoaXNBc3luY1RodW5rU2xpY2VSZWR1Y2VyRGVmaW5pdGlvbihyZWR1Y2VyRGVmaW5pdGlvbikpIHtcbiAgICAgICAgaGFuZGxlVGh1bmtDYXNlUmVkdWNlckRlZmluaXRpb24ocmVkdWNlckRldGFpbHMsIHJlZHVjZXJEZWZpbml0aW9uLCBjb250ZXh0TWV0aG9kcywgY0FUKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZU5vcm1hbFJlZHVjZXJEZWZpbml0aW9uKHJlZHVjZXJEZXRhaWxzLCByZWR1Y2VyRGVmaW5pdGlvbiwgY29udGV4dE1ldGhvZHMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGJ1aWxkUmVkdWNlcigpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmV4dHJhUmVkdWNlcnMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNCkgOiBcIlRoZSBvYmplY3Qgbm90YXRpb24gZm9yIGBjcmVhdGVTbGljZS5leHRyYVJlZHVjZXJzYCBoYXMgYmVlbiByZW1vdmVkLiBQbGVhc2UgdXNlIHRoZSAnYnVpbGRlciBjYWxsYmFjaycgbm90YXRpb24gaW5zdGVhZDogaHR0cHM6Ly9yZWR1eC10b29sa2l0LmpzLm9yZy9hcGkvY3JlYXRlU2xpY2VcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IFtleHRyYVJlZHVjZXJzID0ge30sIGFjdGlvbk1hdGNoZXJzID0gW10sIGRlZmF1bHRDYXNlUmVkdWNlciA9IHZvaWQgMF0gPSB0eXBlb2Ygb3B0aW9ucy5leHRyYVJlZHVjZXJzID09PSBcImZ1bmN0aW9uXCIgPyBleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjayhvcHRpb25zLmV4dHJhUmVkdWNlcnMpIDogW29wdGlvbnMuZXh0cmFSZWR1Y2Vyc107XG4gICAgICBjb25zdCBmaW5hbENhc2VSZWR1Y2VycyA9IHtcbiAgICAgICAgLi4uZXh0cmFSZWR1Y2VycyxcbiAgICAgICAgLi4uY29udGV4dC5zbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBjcmVhdGVSZWR1Y2VyKG9wdGlvbnMuaW5pdGlhbFN0YXRlLCAoYnVpbGRlcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZmluYWxDYXNlUmVkdWNlcnMpIHtcbiAgICAgICAgICBidWlsZGVyLmFkZENhc2Uoa2V5LCBmaW5hbENhc2VSZWR1Y2Vyc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBzTSBvZiBjb250ZXh0LnNsaWNlTWF0Y2hlcnMpIHtcbiAgICAgICAgICBidWlsZGVyLmFkZE1hdGNoZXIoc00ubWF0Y2hlciwgc00ucmVkdWNlcik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbSBvZiBhY3Rpb25NYXRjaGVycykge1xuICAgICAgICAgIGJ1aWxkZXIuYWRkTWF0Y2hlcihtLm1hdGNoZXIsIG0ucmVkdWNlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xuICAgICAgICAgIGJ1aWxkZXIuYWRkRGVmYXVsdENhc2UoZGVmYXVsdENhc2VSZWR1Y2VyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdFNlbGYgPSAoc3RhdGUpID0+IHN0YXRlO1xuICAgIGNvbnN0IGluamVjdGVkU2VsZWN0b3JDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgbGV0IF9yZWR1Y2VyO1xuICAgIGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgICAgaWYgKCFfcmVkdWNlcikgX3JlZHVjZXIgPSBidWlsZFJlZHVjZXIoKTtcbiAgICAgIHJldHVybiBfcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgaWYgKCFfcmVkdWNlcikgX3JlZHVjZXIgPSBidWlsZFJlZHVjZXIoKTtcbiAgICAgIHJldHVybiBfcmVkdWNlci5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFrZVNlbGVjdG9yUHJvcHMocmVkdWNlclBhdGgyLCBpbmplY3RlZCA9IGZhbHNlKSB7XG4gICAgICBmdW5jdGlvbiBzZWxlY3RTbGljZShzdGF0ZSkge1xuICAgICAgICBsZXQgc2xpY2VTdGF0ZSA9IHN0YXRlW3JlZHVjZXJQYXRoMl07XG4gICAgICAgIGlmICh0eXBlb2Ygc2xpY2VTdGF0ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGlmIChpbmplY3RlZCkge1xuICAgICAgICAgICAgc2xpY2VTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNSkgOiBcInNlbGVjdFNsaWNlIHJldHVybmVkIHVuZGVmaW5lZCBmb3IgYW4gdW5pbmplY3RlZCBzbGljZSByZWR1Y2VyXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2xpY2VTdGF0ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGdldFNlbGVjdG9ycyhzZWxlY3RTdGF0ZSA9IHNlbGVjdFNlbGYpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JDYWNoZSA9IGVtcGxhY2UoaW5qZWN0ZWRTZWxlY3RvckNhY2hlLCBpbmplY3RlZCwge1xuICAgICAgICAgIGluc2VydDogKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbXBsYWNlKHNlbGVjdG9yQ2FjaGUsIHNlbGVjdFN0YXRlLCB7XG4gICAgICAgICAgaW5zZXJ0OiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXAgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW25hbWUyLCBzZWxlY3Rvcl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5zZWxlY3RvcnMgPz8ge30pKSB7XG4gICAgICAgICAgICAgIG1hcFtuYW1lMl0gPSB3cmFwU2VsZWN0b3Ioc2VsZWN0b3IsIHNlbGVjdFN0YXRlLCBnZXRJbml0aWFsU3RhdGUsIGluamVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZHVjZXJQYXRoOiByZWR1Y2VyUGF0aDIsXG4gICAgICAgIGdldFNlbGVjdG9ycyxcbiAgICAgICAgZ2V0IHNlbGVjdG9ycygpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0U2VsZWN0b3JzKHNlbGVjdFNsaWNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0U2xpY2VcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNsaWNlID0ge1xuICAgICAgbmFtZSxcbiAgICAgIHJlZHVjZXIsXG4gICAgICBhY3Rpb25zOiBjb250ZXh0LmFjdGlvbkNyZWF0b3JzLFxuICAgICAgY2FzZVJlZHVjZXJzOiBjb250ZXh0LnNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lLFxuICAgICAgZ2V0SW5pdGlhbFN0YXRlLFxuICAgICAgLi4ubWFrZVNlbGVjdG9yUHJvcHMocmVkdWNlclBhdGgpLFxuICAgICAgaW5qZWN0SW50byhpbmplY3RhYmxlLCB7XG4gICAgICAgIHJlZHVjZXJQYXRoOiBwYXRoT3B0LFxuICAgICAgICAuLi5jb25maWdcbiAgICAgIH0gPSB7fSkge1xuICAgICAgICBjb25zdCBuZXdSZWR1Y2VyUGF0aCA9IHBhdGhPcHQgPz8gcmVkdWNlclBhdGg7XG4gICAgICAgIGluamVjdGFibGUuaW5qZWN0KHtcbiAgICAgICAgICByZWR1Y2VyUGF0aDogbmV3UmVkdWNlclBhdGgsXG4gICAgICAgICAgcmVkdWNlclxuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnNsaWNlLFxuICAgICAgICAgIC4uLm1ha2VTZWxlY3RvclByb3BzKG5ld1JlZHVjZXJQYXRoLCB0cnVlKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHNsaWNlO1xuICB9O1xufVxuZnVuY3Rpb24gd3JhcFNlbGVjdG9yKHNlbGVjdG9yLCBzZWxlY3RTdGF0ZSwgZ2V0SW5pdGlhbFN0YXRlLCBpbmplY3RlZCkge1xuICBmdW5jdGlvbiB3cmFwcGVyKHJvb3RTdGF0ZSwgLi4uYXJncykge1xuICAgIGxldCBzbGljZVN0YXRlID0gc2VsZWN0U3RhdGUocm9vdFN0YXRlKTtcbiAgICBpZiAodHlwZW9mIHNsaWNlU3RhdGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChpbmplY3RlZCkge1xuICAgICAgICBzbGljZVN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNikgOiBcInNlbGVjdFN0YXRlIHJldHVybmVkIHVuZGVmaW5lZCBmb3IgYW4gdW5pbmplY3RlZCBzbGljZSByZWR1Y2VyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0b3Ioc2xpY2VTdGF0ZSwgLi4uYXJncyk7XG4gIH1cbiAgd3JhcHBlci51bndyYXBwZWQgPSBzZWxlY3RvcjtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG52YXIgY3JlYXRlU2xpY2UgPSAvKiBAX19QVVJFX18gKi8gYnVpbGRDcmVhdGVTbGljZSgpO1xuZnVuY3Rpb24gYnVpbGRSZWR1Y2VyQ3JlYXRvcnMoKSB7XG4gIGZ1bmN0aW9uIGFzeW5jVGh1bmsocGF5bG9hZENyZWF0b3IsIGNvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICBfcmVkdWNlckRlZmluaXRpb25UeXBlOiBcImFzeW5jVGh1bmtcIiAvKiBhc3luY1RodW5rICovLFxuICAgICAgcGF5bG9hZENyZWF0b3IsXG4gICAgICAuLi5jb25maWdcbiAgICB9O1xuICB9XG4gIGFzeW5jVGh1bmsud2l0aFR5cGVzID0gKCkgPT4gYXN5bmNUaHVuaztcbiAgcmV0dXJuIHtcbiAgICByZWR1Y2VyKGNhc2VSZWR1Y2VyKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8vIGhhY2sgc28gdGhlIHdyYXBwaW5nIGZ1bmN0aW9uIGhhcyB0aGUgc2FtZSBuYW1lIGFzIHRoZSBvcmlnaW5hbFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGNyZWF0ZSBhIHdyYXBwZXIgc28gdGhlIGByZWR1Y2VyRGVmaW5pdGlvblR5cGVgIGlzIG5vdCBhc3NpZ25lZCB0byB0aGUgb3JpZ2luYWxcbiAgICAgICAgW2Nhc2VSZWR1Y2VyLm5hbWVdKC4uLmFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gY2FzZVJlZHVjZXIoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH1bY2FzZVJlZHVjZXIubmFtZV0sIHtcbiAgICAgICAgX3JlZHVjZXJEZWZpbml0aW9uVHlwZTogXCJyZWR1Y2VyXCIgLyogcmVkdWNlciAqL1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBwcmVwYXJlZFJlZHVjZXIocHJlcGFyZSwgcmVkdWNlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX3JlZHVjZXJEZWZpbml0aW9uVHlwZTogXCJyZWR1Y2VyV2l0aFByZXBhcmVcIiAvKiByZWR1Y2VyV2l0aFByZXBhcmUgKi8sXG4gICAgICAgIHByZXBhcmUsXG4gICAgICAgIHJlZHVjZXJcbiAgICAgIH07XG4gICAgfSxcbiAgICBhc3luY1RodW5rXG4gIH07XG59XG5mdW5jdGlvbiBoYW5kbGVOb3JtYWxSZWR1Y2VyRGVmaW5pdGlvbih7XG4gIHR5cGUsXG4gIHJlZHVjZXJOYW1lLFxuICBjcmVhdGVOb3RhdGlvblxufSwgbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUsIGNvbnRleHQpIHtcbiAgbGV0IGNhc2VSZWR1Y2VyO1xuICBsZXQgcHJlcGFyZUNhbGxiYWNrO1xuICBpZiAoXCJyZWR1Y2VyXCIgaW4gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUpIHtcbiAgICBpZiAoY3JlYXRlTm90YXRpb24gJiYgIWlzQ2FzZVJlZHVjZXJXaXRoUHJlcGFyZURlZmluaXRpb24obWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNykgOiBcIlBsZWFzZSB1c2UgdGhlIGBjcmVhdGUucHJlcGFyZWRSZWR1Y2VyYCBub3RhdGlvbiBmb3IgcHJlcGFyZWQgYWN0aW9uIGNyZWF0b3JzIHdpdGggdGhlIGBjcmVhdGVgIG5vdGF0aW9uLlwiKTtcbiAgICB9XG4gICAgY2FzZVJlZHVjZXIgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZS5yZWR1Y2VyO1xuICAgIHByZXBhcmVDYWxsYmFjayA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlLnByZXBhcmU7XG4gIH0gZWxzZSB7XG4gICAgY2FzZVJlZHVjZXIgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZTtcbiAgfVxuICBjb250ZXh0LmFkZENhc2UodHlwZSwgY2FzZVJlZHVjZXIpLmV4cG9zZUNhc2VSZWR1Y2VyKHJlZHVjZXJOYW1lLCBjYXNlUmVkdWNlcikuZXhwb3NlQWN0aW9uKHJlZHVjZXJOYW1lLCBwcmVwYXJlQ2FsbGJhY2sgPyBjcmVhdGVBY3Rpb24odHlwZSwgcHJlcGFyZUNhbGxiYWNrKSA6IGNyZWF0ZUFjdGlvbih0eXBlKSk7XG59XG5mdW5jdGlvbiBpc0FzeW5jVGh1bmtTbGljZVJlZHVjZXJEZWZpbml0aW9uKHJlZHVjZXJEZWZpbml0aW9uKSB7XG4gIHJldHVybiByZWR1Y2VyRGVmaW5pdGlvbi5fcmVkdWNlckRlZmluaXRpb25UeXBlID09PSBcImFzeW5jVGh1bmtcIiAvKiBhc3luY1RodW5rICovO1xufVxuZnVuY3Rpb24gaXNDYXNlUmVkdWNlcldpdGhQcmVwYXJlRGVmaW5pdGlvbihyZWR1Y2VyRGVmaW5pdGlvbikge1xuICByZXR1cm4gcmVkdWNlckRlZmluaXRpb24uX3JlZHVjZXJEZWZpbml0aW9uVHlwZSA9PT0gXCJyZWR1Y2VyV2l0aFByZXBhcmVcIiAvKiByZWR1Y2VyV2l0aFByZXBhcmUgKi87XG59XG5mdW5jdGlvbiBoYW5kbGVUaHVua0Nhc2VSZWR1Y2VyRGVmaW5pdGlvbih7XG4gIHR5cGUsXG4gIHJlZHVjZXJOYW1lXG59LCByZWR1Y2VyRGVmaW5pdGlvbiwgY29udGV4dCwgY0FUKSB7XG4gIGlmICghY0FUKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTgpIDogXCJDYW5ub3QgdXNlIGBjcmVhdGUuYXN5bmNUaHVua2AgaW4gdGhlIGJ1aWx0LWluIGBjcmVhdGVTbGljZWAuIFVzZSBgYnVpbGRDcmVhdGVTbGljZSh7IGNyZWF0b3JzOiB7IGFzeW5jVGh1bms6IGFzeW5jVGh1bmtDcmVhdG9yIH0gfSlgIHRvIGNyZWF0ZSBhIGN1c3RvbWlzZWQgdmVyc2lvbiBvZiBgY3JlYXRlU2xpY2VgLlwiKTtcbiAgfVxuICBjb25zdCB7XG4gICAgcGF5bG9hZENyZWF0b3IsXG4gICAgZnVsZmlsbGVkLFxuICAgIHBlbmRpbmcsXG4gICAgcmVqZWN0ZWQsXG4gICAgc2V0dGxlZCxcbiAgICBvcHRpb25zXG4gIH0gPSByZWR1Y2VyRGVmaW5pdGlvbjtcbiAgY29uc3QgdGh1bmsgPSBjQVQodHlwZSwgcGF5bG9hZENyZWF0b3IsIG9wdGlvbnMpO1xuICBjb250ZXh0LmV4cG9zZUFjdGlvbihyZWR1Y2VyTmFtZSwgdGh1bmspO1xuICBpZiAoZnVsZmlsbGVkKSB7XG4gICAgY29udGV4dC5hZGRDYXNlKHRodW5rLmZ1bGZpbGxlZCwgZnVsZmlsbGVkKTtcbiAgfVxuICBpZiAocGVuZGluZykge1xuICAgIGNvbnRleHQuYWRkQ2FzZSh0aHVuay5wZW5kaW5nLCBwZW5kaW5nKTtcbiAgfVxuICBpZiAocmVqZWN0ZWQpIHtcbiAgICBjb250ZXh0LmFkZENhc2UodGh1bmsucmVqZWN0ZWQsIHJlamVjdGVkKTtcbiAgfVxuICBpZiAoc2V0dGxlZCkge1xuICAgIGNvbnRleHQuYWRkTWF0Y2hlcih0aHVuay5zZXR0bGVkLCBzZXR0bGVkKTtcbiAgfVxuICBjb250ZXh0LmV4cG9zZUNhc2VSZWR1Y2VyKHJlZHVjZXJOYW1lLCB7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQgfHwgbm9vcCxcbiAgICBwZW5kaW5nOiBwZW5kaW5nIHx8IG5vb3AsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkIHx8IG5vb3AsXG4gICAgc2V0dGxlZDogc2V0dGxlZCB8fCBub29wXG4gIH0pO1xufVxuZnVuY3Rpb24gbm9vcCgpIHtcbn1cblxuLy8gc3JjL2VudGl0aWVzL2VudGl0eV9zdGF0ZS50c1xuZnVuY3Rpb24gZ2V0SW5pdGlhbEVudGl0eVN0YXRlKCkge1xuICByZXR1cm4ge1xuICAgIGlkczogW10sXG4gICAgZW50aXRpZXM6IHt9XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVJbml0aWFsU3RhdGVGYWN0b3J5KHN0YXRlQWRhcHRlcikge1xuICBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoYWRkaXRpb25hbFN0YXRlID0ge30sIGVudGl0aWVzKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBPYmplY3QuYXNzaWduKGdldEluaXRpYWxFbnRpdHlTdGF0ZSgpLCBhZGRpdGlvbmFsU3RhdGUpO1xuICAgIHJldHVybiBlbnRpdGllcyA/IHN0YXRlQWRhcHRlci5zZXRBbGwoc3RhdGUsIGVudGl0aWVzKSA6IHN0YXRlO1xuICB9XG4gIHJldHVybiB7XG4gICAgZ2V0SW5pdGlhbFN0YXRlXG4gIH07XG59XG5cbi8vIHNyYy9lbnRpdGllcy9zdGF0ZV9zZWxlY3RvcnMudHNcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yc0ZhY3RvcnkoKSB7XG4gIGZ1bmN0aW9uIGdldFNlbGVjdG9ycyhzZWxlY3RTdGF0ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgY3JlYXRlU2VsZWN0b3I6IGNyZWF0ZVNlbGVjdG9yMiA9IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qgc2VsZWN0SWRzID0gKHN0YXRlKSA9PiBzdGF0ZS5pZHM7XG4gICAgY29uc3Qgc2VsZWN0RW50aXRpZXMgPSAoc3RhdGUpID0+IHN0YXRlLmVudGl0aWVzO1xuICAgIGNvbnN0IHNlbGVjdEFsbCA9IGNyZWF0ZVNlbGVjdG9yMihzZWxlY3RJZHMsIHNlbGVjdEVudGl0aWVzLCAoaWRzLCBlbnRpdGllcykgPT4gaWRzLm1hcCgoaWQpID0+IGVudGl0aWVzW2lkXSkpO1xuICAgIGNvbnN0IHNlbGVjdElkID0gKF8sIGlkKSA9PiBpZDtcbiAgICBjb25zdCBzZWxlY3RCeUlkID0gKGVudGl0aWVzLCBpZCkgPT4gZW50aXRpZXNbaWRdO1xuICAgIGNvbnN0IHNlbGVjdFRvdGFsID0gY3JlYXRlU2VsZWN0b3IyKHNlbGVjdElkcywgKGlkcykgPT4gaWRzLmxlbmd0aCk7XG4gICAgaWYgKCFzZWxlY3RTdGF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0SWRzLFxuICAgICAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAgICAgc2VsZWN0QWxsLFxuICAgICAgICBzZWxlY3RUb3RhbCxcbiAgICAgICAgc2VsZWN0QnlJZDogY3JlYXRlU2VsZWN0b3IyKHNlbGVjdEVudGl0aWVzLCBzZWxlY3RJZCwgc2VsZWN0QnlJZClcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcyA9IGNyZWF0ZVNlbGVjdG9yMihzZWxlY3RTdGF0ZSwgc2VsZWN0RW50aXRpZXMpO1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RJZHM6IGNyZWF0ZVNlbGVjdG9yMihzZWxlY3RTdGF0ZSwgc2VsZWN0SWRzKSxcbiAgICAgIHNlbGVjdEVudGl0aWVzOiBzZWxlY3RHbG9iYWxpemVkRW50aXRpZXMsXG4gICAgICBzZWxlY3RBbGw6IGNyZWF0ZVNlbGVjdG9yMihzZWxlY3RTdGF0ZSwgc2VsZWN0QWxsKSxcbiAgICAgIHNlbGVjdFRvdGFsOiBjcmVhdGVTZWxlY3RvcjIoc2VsZWN0U3RhdGUsIHNlbGVjdFRvdGFsKSxcbiAgICAgIHNlbGVjdEJ5SWQ6IGNyZWF0ZVNlbGVjdG9yMihzZWxlY3RHbG9iYWxpemVkRW50aXRpZXMsIHNlbGVjdElkLCBzZWxlY3RCeUlkKVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBnZXRTZWxlY3RvcnNcbiAgfTtcbn1cblxuLy8gc3JjL2VudGl0aWVzL3N0YXRlX2FkYXB0ZXIudHNcbmltcG9ydCB7IHByb2R1Y2UgYXMgY3JlYXRlTmV4dFN0YXRlMywgaXNEcmFmdCBhcyBpc0RyYWZ0MyB9IGZyb20gXCJpbW1lclwiO1xudmFyIGlzRHJhZnRUeXBlZCA9IGlzRHJhZnQzO1xuZnVuY3Rpb24gY3JlYXRlU2luZ2xlQXJndW1lbnRTdGF0ZU9wZXJhdG9yKG11dGF0b3IpIHtcbiAgY29uc3Qgb3BlcmF0b3IgPSBjcmVhdGVTdGF0ZU9wZXJhdG9yKChfLCBzdGF0ZSkgPT4gbXV0YXRvcihzdGF0ZSkpO1xuICByZXR1cm4gZnVuY3Rpb24gb3BlcmF0aW9uKHN0YXRlKSB7XG4gICAgcmV0dXJuIG9wZXJhdG9yKHN0YXRlLCB2b2lkIDApO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlU3RhdGVPcGVyYXRvcihtdXRhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiBvcGVyYXRpb24oc3RhdGUsIGFyZykge1xuICAgIGZ1bmN0aW9uIGlzUGF5bG9hZEFjdGlvbkFyZ3VtZW50KGFyZzIpIHtcbiAgICAgIHJldHVybiBpc0ZTQShhcmcyKTtcbiAgICB9XG4gICAgY29uc3QgcnVuTXV0YXRvciA9IChkcmFmdCkgPT4ge1xuICAgICAgaWYgKGlzUGF5bG9hZEFjdGlvbkFyZ3VtZW50KGFyZykpIHtcbiAgICAgICAgbXV0YXRvcihhcmcucGF5bG9hZCwgZHJhZnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXV0YXRvcihhcmcsIGRyYWZ0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpc0RyYWZ0VHlwZWQoc3RhdGUpKSB7XG4gICAgICBydW5NdXRhdG9yKHN0YXRlKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZU5leHRTdGF0ZTMoc3RhdGUsIHJ1bk11dGF0b3IpO1xuICB9O1xufVxuXG4vLyBzcmMvZW50aXRpZXMvdXRpbHMudHNcbmltcG9ydCB7IGN1cnJlbnQgYXMgY3VycmVudDIsIGlzRHJhZnQgYXMgaXNEcmFmdDQgfSBmcm9tIFwiaW1tZXJcIjtcbmZ1bmN0aW9uIHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCkge1xuICBjb25zdCBrZXkgPSBzZWxlY3RJZChlbnRpdHkpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGtleSA9PT0gdm9pZCAwKSB7XG4gICAgY29uc29sZS53YXJuKFwiVGhlIGVudGl0eSBwYXNzZWQgdG8gdGhlIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgdW5kZWZpbmVkLlwiLCBcIllvdSBzaG91bGQgcHJvYmFibHkgcHJvdmlkZSB5b3VyIG93biBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uLlwiLCBcIlRoZSBlbnRpdHkgdGhhdCB3YXMgcGFzc2VkOlwiLCBlbnRpdHksIFwiVGhlIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb246XCIsIHNlbGVjdElkLnRvU3RyaW5nKCkpO1xuICB9XG4gIHJldHVybiBrZXk7XG59XG5mdW5jdGlvbiBlbnN1cmVFbnRpdGllc0FycmF5KGVudGl0aWVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShlbnRpdGllcykpIHtcbiAgICBlbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoZW50aXRpZXMpO1xuICB9XG4gIHJldHVybiBlbnRpdGllcztcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnQodmFsdWUpIHtcbiAgcmV0dXJuIGlzRHJhZnQ0KHZhbHVlKSA/IGN1cnJlbnQyKHZhbHVlKSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc3BsaXRBZGRlZFVwZGF0ZWRFbnRpdGllcyhuZXdFbnRpdGllcywgc2VsZWN0SWQsIHN0YXRlKSB7XG4gIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XG4gIGNvbnN0IGV4aXN0aW5nSWRzQXJyYXkgPSBnZXRDdXJyZW50KHN0YXRlLmlkcyk7XG4gIGNvbnN0IGV4aXN0aW5nSWRzID0gbmV3IFNldChleGlzdGluZ0lkc0FycmF5KTtcbiAgY29uc3QgYWRkZWQgPSBbXTtcbiAgY29uc3QgdXBkYXRlZCA9IFtdO1xuICBmb3IgKGNvbnN0IGVudGl0eSBvZiBuZXdFbnRpdGllcykge1xuICAgIGNvbnN0IGlkID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKTtcbiAgICBpZiAoZXhpc3RpbmdJZHMuaGFzKGlkKSkge1xuICAgICAgdXBkYXRlZC5wdXNoKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNoYW5nZXM6IGVudGl0eVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZGVkLnB1c2goZW50aXR5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFthZGRlZCwgdXBkYXRlZCwgZXhpc3RpbmdJZHNBcnJheV07XG59XG5cbi8vIHNyYy9lbnRpdGllcy91bnNvcnRlZF9zdGF0ZV9hZGFwdGVyLnRzXG5mdW5jdGlvbiBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCkge1xuICBmdW5jdGlvbiBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcbiAgICBjb25zdCBrZXkgPSBzZWxlY3RJZFZhbHVlKGVudGl0eSwgc2VsZWN0SWQpO1xuICAgIGlmIChrZXkgaW4gc3RhdGUuZW50aXRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhdGUuaWRzLnB1c2goa2V5KTtcbiAgICBzdGF0ZS5lbnRpdGllc1trZXldID0gZW50aXR5O1xuICB9XG4gIGZ1bmN0aW9uIGFkZE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xuICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XG4gICAgZm9yIChjb25zdCBlbnRpdHkgb2YgbmV3RW50aXRpZXMpIHtcbiAgICAgIGFkZE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNldE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xuICAgIGNvbnN0IGtleSA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCk7XG4gICAgaWYgKCEoa2V5IGluIHN0YXRlLmVudGl0aWVzKSkge1xuICAgICAgc3RhdGUuaWRzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgO1xuICAgIHN0YXRlLmVudGl0aWVzW2tleV0gPSBlbnRpdHk7XG4gIH1cbiAgZnVuY3Rpb24gc2V0TWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XG4gICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcbiAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBuZXdFbnRpdGllcykge1xuICAgICAgc2V0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2V0QWxsTXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcbiAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xuICAgIHN0YXRlLmlkcyA9IFtdO1xuICAgIHN0YXRlLmVudGl0aWVzID0ge307XG4gICAgYWRkTWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVPbmVNdXRhYmx5KGtleSwgc3RhdGUpIHtcbiAgICByZXR1cm4gcmVtb3ZlTWFueU11dGFibHkoW2tleV0sIHN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVNYW55TXV0YWJseShrZXlzLCBzdGF0ZSkge1xuICAgIGxldCBkaWRNdXRhdGUgPSBmYWxzZTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSBpbiBzdGF0ZS5lbnRpdGllcykge1xuICAgICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNba2V5XTtcbiAgICAgICAgZGlkTXV0YXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZGlkTXV0YXRlKSB7XG4gICAgICBzdGF0ZS5pZHMgPSBzdGF0ZS5pZHMuZmlsdGVyKChpZCkgPT4gaWQgaW4gc3RhdGUuZW50aXRpZXMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByZW1vdmVBbGxNdXRhYmx5KHN0YXRlKSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgaWRzOiBbXSxcbiAgICAgIGVudGl0aWVzOiB7fVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHRha2VOZXdLZXkoa2V5cywgdXBkYXRlLCBzdGF0ZSkge1xuICAgIGNvbnN0IG9yaWdpbmFsMyA9IHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF07XG4gICAgaWYgKG9yaWdpbmFsMyA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZWQgPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbDMsIHVwZGF0ZS5jaGFuZ2VzKTtcbiAgICBjb25zdCBuZXdLZXkgPSBzZWxlY3RJZFZhbHVlKHVwZGF0ZWQsIHNlbGVjdElkKTtcbiAgICBjb25zdCBoYXNOZXdLZXkgPSBuZXdLZXkgIT09IHVwZGF0ZS5pZDtcbiAgICBpZiAoaGFzTmV3S2V5KSB7XG4gICAgICBrZXlzW3VwZGF0ZS5pZF0gPSBuZXdLZXk7XG4gICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcbiAgICB9XG4gICAgO1xuICAgIHN0YXRlLmVudGl0aWVzW25ld0tleV0gPSB1cGRhdGVkO1xuICAgIHJldHVybiBoYXNOZXdLZXk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlT25lTXV0YWJseSh1cGRhdGUsIHN0YXRlKSB7XG4gICAgcmV0dXJuIHVwZGF0ZU1hbnlNdXRhYmx5KFt1cGRhdGVdLCBzdGF0ZSk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlTWFueU11dGFibHkodXBkYXRlcywgc3RhdGUpIHtcbiAgICBjb25zdCBuZXdLZXlzID0ge307XG4gICAgY29uc3QgdXBkYXRlc1BlckVudGl0eSA9IHt9O1xuICAgIHVwZGF0ZXMuZm9yRWFjaCgodXBkYXRlKSA9PiB7XG4gICAgICBpZiAodXBkYXRlLmlkIGluIHN0YXRlLmVudGl0aWVzKSB7XG4gICAgICAgIHVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXSA9IHtcbiAgICAgICAgICBpZDogdXBkYXRlLmlkLFxuICAgICAgICAgIC8vIFNwcmVhZHMgaWdub3JlIGZhbHN5IHZhbHVlcywgc28gdGhpcyB3b3JrcyBldmVuIGlmIHRoZXJlIGlzbid0XG4gICAgICAgICAgLy8gYW4gZXhpc3RpbmcgdXBkYXRlIGFscmVhZHkgYXQgdGhpcyBrZXlcbiAgICAgICAgICBjaGFuZ2VzOiB7XG4gICAgICAgICAgICAuLi51cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF0/LmNoYW5nZXMsXG4gICAgICAgICAgICAuLi51cGRhdGUuY2hhbmdlc1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB1cGRhdGVzID0gT2JqZWN0LnZhbHVlcyh1cGRhdGVzUGVyRW50aXR5KTtcbiAgICBjb25zdCBkaWRNdXRhdGVFbnRpdGllcyA9IHVwZGF0ZXMubGVuZ3RoID4gMDtcbiAgICBpZiAoZGlkTXV0YXRlRW50aXRpZXMpIHtcbiAgICAgIGNvbnN0IGRpZE11dGF0ZUlkcyA9IHVwZGF0ZXMuZmlsdGVyKCh1cGRhdGUpID0+IHRha2VOZXdLZXkobmV3S2V5cywgdXBkYXRlLCBzdGF0ZSkpLmxlbmd0aCA+IDA7XG4gICAgICBpZiAoZGlkTXV0YXRlSWRzKSB7XG4gICAgICAgIHN0YXRlLmlkcyA9IE9iamVjdC52YWx1ZXMoc3RhdGUuZW50aXRpZXMpLm1hcCgoZSkgPT4gc2VsZWN0SWRWYWx1ZShlLCBzZWxlY3RJZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB1cHNlcnRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcbiAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiB1cHNlcnRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcbiAgICBjb25zdCBbYWRkZWQsIHVwZGF0ZWRdID0gc3BsaXRBZGRlZFVwZGF0ZWRFbnRpdGllcyhuZXdFbnRpdGllcywgc2VsZWN0SWQsIHN0YXRlKTtcbiAgICB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVkLCBzdGF0ZSk7XG4gICAgYWRkTWFueU11dGFibHkoYWRkZWQsIHN0YXRlKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlbW92ZUFsbDogY3JlYXRlU2luZ2xlQXJndW1lbnRTdGF0ZU9wZXJhdG9yKHJlbW92ZUFsbE11dGFibHkpLFxuICAgIGFkZE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRPbmVNdXRhYmx5KSxcbiAgICBhZGRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE1hbnlNdXRhYmx5KSxcbiAgICBzZXRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0T25lTXV0YWJseSksXG4gICAgc2V0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRNYW55TXV0YWJseSksXG4gICAgc2V0QWxsOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldEFsbE11dGFibHkpLFxuICAgIHVwZGF0ZU9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVPbmVNdXRhYmx5KSxcbiAgICB1cGRhdGVNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU1hbnlNdXRhYmx5KSxcbiAgICB1cHNlcnRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBzZXJ0T25lTXV0YWJseSksXG4gICAgdXBzZXJ0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRNYW55TXV0YWJseSksXG4gICAgcmVtb3ZlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHJlbW92ZU9uZU11dGFibHkpLFxuICAgIHJlbW92ZU1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IocmVtb3ZlTWFueU11dGFibHkpXG4gIH07XG59XG5cbi8vIHNyYy9lbnRpdGllcy9zb3J0ZWRfc3RhdGVfYWRhcHRlci50c1xuZnVuY3Rpb24gZmluZEluc2VydEluZGV4KHNvcnRlZEl0ZW1zLCBpdGVtLCBjb21wYXJpc29uRnVuY3Rpb24pIHtcbiAgbGV0IGxvd0luZGV4ID0gMDtcbiAgbGV0IGhpZ2hJbmRleCA9IHNvcnRlZEl0ZW1zLmxlbmd0aDtcbiAgd2hpbGUgKGxvd0luZGV4IDwgaGlnaEluZGV4KSB7XG4gICAgbGV0IG1pZGRsZUluZGV4ID0gbG93SW5kZXggKyBoaWdoSW5kZXggPj4+IDE7XG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSBzb3J0ZWRJdGVtc1ttaWRkbGVJbmRleF07XG4gICAgY29uc3QgcmVzID0gY29tcGFyaXNvbkZ1bmN0aW9uKGl0ZW0sIGN1cnJlbnRJdGVtKTtcbiAgICBpZiAocmVzID49IDApIHtcbiAgICAgIGxvd0luZGV4ID0gbWlkZGxlSW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWdoSW5kZXggPSBtaWRkbGVJbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxvd0luZGV4O1xufVxuZnVuY3Rpb24gaW5zZXJ0KHNvcnRlZEl0ZW1zLCBpdGVtLCBjb21wYXJpc29uRnVuY3Rpb24pIHtcbiAgY29uc3QgaW5zZXJ0QXRJbmRleCA9IGZpbmRJbnNlcnRJbmRleChzb3J0ZWRJdGVtcywgaXRlbSwgY29tcGFyaXNvbkZ1bmN0aW9uKTtcbiAgc29ydGVkSXRlbXMuc3BsaWNlKGluc2VydEF0SW5kZXgsIDAsIGl0ZW0pO1xuICByZXR1cm4gc29ydGVkSXRlbXM7XG59XG5mdW5jdGlvbiBjcmVhdGVTb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQsIGNvbXBhcmVyKSB7XG4gIGNvbnN0IHtcbiAgICByZW1vdmVPbmUsXG4gICAgcmVtb3ZlTWFueSxcbiAgICByZW1vdmVBbGxcbiAgfSA9IGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkKTtcbiAgZnVuY3Rpb24gYWRkT25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XG4gICAgcmV0dXJuIGFkZE1hbnlNdXRhYmx5KFtlbnRpdHldLCBzdGF0ZSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkTWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlLCBleGlzdGluZ0lkcykge1xuICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XG4gICAgY29uc3QgZXhpc3RpbmdLZXlzID0gbmV3IFNldChleGlzdGluZ0lkcyA/PyBnZXRDdXJyZW50KHN0YXRlLmlkcykpO1xuICAgIGNvbnN0IG1vZGVscyA9IG5ld0VudGl0aWVzLmZpbHRlcigobW9kZWwpID0+ICFleGlzdGluZ0tleXMuaGFzKHNlbGVjdElkVmFsdWUobW9kZWwsIHNlbGVjdElkKSkpO1xuICAgIGlmIChtb2RlbHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBtZXJnZUZ1bmN0aW9uKHN0YXRlLCBtb2RlbHMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzZXRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcbiAgICByZXR1cm4gc2V0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiBzZXRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcbiAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xuICAgIGlmIChuZXdFbnRpdGllcy5sZW5ndGggIT09IDApIHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBuZXdFbnRpdGllcykge1xuICAgICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNbc2VsZWN0SWQoaXRlbSldO1xuICAgICAgfVxuICAgICAgbWVyZ2VGdW5jdGlvbihzdGF0ZSwgbmV3RW50aXRpZXMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzZXRBbGxNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xuICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XG4gICAgc3RhdGUuZW50aXRpZXMgPSB7fTtcbiAgICBzdGF0ZS5pZHMgPSBbXTtcbiAgICBhZGRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUsIFtdKTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVPbmVNdXRhYmx5KHVwZGF0ZSwgc3RhdGUpIHtcbiAgICByZXR1cm4gdXBkYXRlTWFueU11dGFibHkoW3VwZGF0ZV0sIHN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVzLCBzdGF0ZSkge1xuICAgIGxldCBhcHBsaWVkVXBkYXRlcyA9IGZhbHNlO1xuICAgIGxldCByZXBsYWNlZElkcyA9IGZhbHNlO1xuICAgIGZvciAobGV0IHVwZGF0ZSBvZiB1cGRhdGVzKSB7XG4gICAgICBjb25zdCBlbnRpdHkgPSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xuICAgICAgaWYgKCFlbnRpdHkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBhcHBsaWVkVXBkYXRlcyA9IHRydWU7XG4gICAgICBPYmplY3QuYXNzaWduKGVudGl0eSwgdXBkYXRlLmNoYW5nZXMpO1xuICAgICAgY29uc3QgbmV3SWQgPSBzZWxlY3RJZChlbnRpdHkpO1xuICAgICAgaWYgKHVwZGF0ZS5pZCAhPT0gbmV3SWQpIHtcbiAgICAgICAgcmVwbGFjZWRJZHMgPSB0cnVlO1xuICAgICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcbiAgICAgICAgY29uc3Qgb2xkSW5kZXggPSBzdGF0ZS5pZHMuaW5kZXhPZih1cGRhdGUuaWQpO1xuICAgICAgICBzdGF0ZS5pZHNbb2xkSW5kZXhdID0gbmV3SWQ7XG4gICAgICAgIHN0YXRlLmVudGl0aWVzW25ld0lkXSA9IGVudGl0eTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFwcGxpZWRVcGRhdGVzKSB7XG4gICAgICBtZXJnZUZ1bmN0aW9uKHN0YXRlLCBbXSwgYXBwbGllZFVwZGF0ZXMsIHJlcGxhY2VkSWRzKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBzZXJ0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XG4gICAgcmV0dXJuIHVwc2VydE1hbnlNdXRhYmx5KFtlbnRpdHldLCBzdGF0ZSk7XG4gIH1cbiAgZnVuY3Rpb24gdXBzZXJ0TWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XG4gICAgY29uc3QgW2FkZGVkLCB1cGRhdGVkLCBleGlzdGluZ0lkc0FycmF5XSA9IHNwbGl0QWRkZWRVcGRhdGVkRW50aXRpZXMobmV3RW50aXRpZXMsIHNlbGVjdElkLCBzdGF0ZSk7XG4gICAgaWYgKHVwZGF0ZWQubGVuZ3RoKSB7XG4gICAgICB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVkLCBzdGF0ZSk7XG4gICAgfVxuICAgIGlmIChhZGRlZC5sZW5ndGgpIHtcbiAgICAgIGFkZE1hbnlNdXRhYmx5KGFkZGVkLCBzdGF0ZSwgZXhpc3RpbmdJZHNBcnJheSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGFyZUFycmF5c0VxdWFsKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFbaV0gPT09IGJbaV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IG1lcmdlRnVuY3Rpb24gPSAoc3RhdGUsIGFkZGVkSXRlbXMsIGFwcGxpZWRVcGRhdGVzLCByZXBsYWNlZElkcykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRFbnRpdGllcyA9IGdldEN1cnJlbnQoc3RhdGUuZW50aXRpZXMpO1xuICAgIGNvbnN0IGN1cnJlbnRJZHMgPSBnZXRDdXJyZW50KHN0YXRlLmlkcyk7XG4gICAgY29uc3Qgc3RhdGVFbnRpdGllcyA9IHN0YXRlLmVudGl0aWVzO1xuICAgIGxldCBpZHMgPSBjdXJyZW50SWRzO1xuICAgIGlmIChyZXBsYWNlZElkcykge1xuICAgICAgaWRzID0gbmV3IFNldChjdXJyZW50SWRzKTtcbiAgICB9XG4gICAgbGV0IHNvcnRlZEVudGl0aWVzID0gW107XG4gICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcbiAgICAgIGNvbnN0IGVudGl0eSA9IGN1cnJlbnRFbnRpdGllc1tpZF07XG4gICAgICBpZiAoZW50aXR5KSB7XG4gICAgICAgIHNvcnRlZEVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgd2FzUHJldmlvdXNseUVtcHR5ID0gc29ydGVkRW50aXRpZXMubGVuZ3RoID09PSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhZGRlZEl0ZW1zKSB7XG4gICAgICBzdGF0ZUVudGl0aWVzW3NlbGVjdElkKGl0ZW0pXSA9IGl0ZW07XG4gICAgICBpZiAoIXdhc1ByZXZpb3VzbHlFbXB0eSkge1xuICAgICAgICBpbnNlcnQoc29ydGVkRW50aXRpZXMsIGl0ZW0sIGNvbXBhcmVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdhc1ByZXZpb3VzbHlFbXB0eSkge1xuICAgICAgc29ydGVkRW50aXRpZXMgPSBhZGRlZEl0ZW1zLnNsaWNlKCkuc29ydChjb21wYXJlcik7XG4gICAgfSBlbHNlIGlmIChhcHBsaWVkVXBkYXRlcykge1xuICAgICAgc29ydGVkRW50aXRpZXMuc29ydChjb21wYXJlcik7XG4gICAgfVxuICAgIGNvbnN0IG5ld1NvcnRlZElkcyA9IHNvcnRlZEVudGl0aWVzLm1hcChzZWxlY3RJZCk7XG4gICAgaWYgKCFhcmVBcnJheXNFcXVhbChjdXJyZW50SWRzLCBuZXdTb3J0ZWRJZHMpKSB7XG4gICAgICBzdGF0ZS5pZHMgPSBuZXdTb3J0ZWRJZHM7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIHJlbW92ZU9uZSxcbiAgICByZW1vdmVNYW55LFxuICAgIHJlbW92ZUFsbCxcbiAgICBhZGRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkT25lTXV0YWJseSksXG4gICAgdXBkYXRlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU9uZU11dGFibHkpLFxuICAgIHVwc2VydE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRPbmVNdXRhYmx5KSxcbiAgICBzZXRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0T25lTXV0YWJseSksXG4gICAgc2V0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRNYW55TXV0YWJseSksXG4gICAgc2V0QWxsOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldEFsbE11dGFibHkpLFxuICAgIGFkZE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkTWFueU11dGFibHkpLFxuICAgIHVwZGF0ZU1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlTWFueU11dGFibHkpLFxuICAgIHVwc2VydE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBzZXJ0TWFueU11dGFibHkpXG4gIH07XG59XG5cbi8vIHNyYy9lbnRpdGllcy9jcmVhdGVfYWRhcHRlci50c1xuZnVuY3Rpb24gY3JlYXRlRW50aXR5QWRhcHRlcihvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHNlbGVjdElkLFxuICAgIHNvcnRDb21wYXJlclxuICB9ID0ge1xuICAgIHNvcnRDb21wYXJlcjogZmFsc2UsXG4gICAgc2VsZWN0SWQ6IChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuaWQsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBjb25zdCBzdGF0ZUFkYXB0ZXIgPSBzb3J0Q29tcGFyZXIgPyBjcmVhdGVTb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQsIHNvcnRDb21wYXJlcikgOiBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCk7XG4gIGNvbnN0IHN0YXRlRmFjdG9yeSA9IGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3Rvcnkoc3RhdGVBZGFwdGVyKTtcbiAgY29uc3Qgc2VsZWN0b3JzRmFjdG9yeSA9IGNyZWF0ZVNlbGVjdG9yc0ZhY3RvcnkoKTtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RJZCxcbiAgICBzb3J0Q29tcGFyZXIsXG4gICAgLi4uc3RhdGVGYWN0b3J5LFxuICAgIC4uLnNlbGVjdG9yc0ZhY3RvcnksXG4gICAgLi4uc3RhdGVBZGFwdGVyXG4gIH07XG59XG5cbi8vIHNyYy9saXN0ZW5lck1pZGRsZXdhcmUvaW5kZXgudHNcbmltcG9ydCB7IGlzQWN0aW9uIGFzIGlzQWN0aW9uMyB9IGZyb20gXCJyZWR1eFwiO1xuXG4vLyBzcmMvbGlzdGVuZXJNaWRkbGV3YXJlL2V4Y2VwdGlvbnMudHNcbnZhciB0YXNrID0gXCJ0YXNrXCI7XG52YXIgbGlzdGVuZXIgPSBcImxpc3RlbmVyXCI7XG52YXIgY29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcbnZhciBjYW5jZWxsZWQgPSBcImNhbmNlbGxlZFwiO1xudmFyIHRhc2tDYW5jZWxsZWQgPSBgdGFzay0ke2NhbmNlbGxlZH1gO1xudmFyIHRhc2tDb21wbGV0ZWQgPSBgdGFzay0ke2NvbXBsZXRlZH1gO1xudmFyIGxpc3RlbmVyQ2FuY2VsbGVkID0gYCR7bGlzdGVuZXJ9LSR7Y2FuY2VsbGVkfWA7XG52YXIgbGlzdGVuZXJDb21wbGV0ZWQgPSBgJHtsaXN0ZW5lcn0tJHtjb21wbGV0ZWR9YDtcbnZhciBUYXNrQWJvcnRFcnJvciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoY29kZSkge1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5tZXNzYWdlID0gYCR7dGFza30gJHtjYW5jZWxsZWR9IChyZWFzb246ICR7Y29kZX0pYDtcbiAgfVxuICBuYW1lID0gXCJUYXNrQWJvcnRFcnJvclwiO1xuICBtZXNzYWdlO1xufTtcblxuLy8gc3JjL2xpc3RlbmVyTWlkZGxld2FyZS91dGlscy50c1xudmFyIGFzc2VydEZ1bmN0aW9uID0gKGZ1bmMsIGV4cGVjdGVkKSA9PiB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDMyKSA6IGAke2V4cGVjdGVkfSBpcyBub3QgYSBmdW5jdGlvbmApO1xuICB9XG59O1xudmFyIG5vb3AyID0gKCkgPT4ge1xufTtcbnZhciBjYXRjaFJlamVjdGlvbiA9IChwcm9taXNlLCBvbkVycm9yID0gbm9vcDIpID0+IHtcbiAgcHJvbWlzZS5jYXRjaChvbkVycm9yKTtcbiAgcmV0dXJuIHByb21pc2U7XG59O1xudmFyIGFkZEFib3J0U2lnbmFsTGlzdGVuZXIgPSAoYWJvcnRTaWduYWwsIGNhbGxiYWNrKSA9PiB7XG4gIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBjYWxsYmFjaywge1xuICAgIG9uY2U6IHRydWVcbiAgfSk7XG4gIHJldHVybiAoKSA9PiBhYm9ydFNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgY2FsbGJhY2spO1xufTtcbnZhciBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uID0gKGFib3J0Q29udHJvbGxlciwgcmVhc29uKSA9PiB7XG4gIGNvbnN0IHNpZ25hbCA9IGFib3J0Q29udHJvbGxlci5zaWduYWw7XG4gIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIShcInJlYXNvblwiIGluIHNpZ25hbCkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2lnbmFsLCBcInJlYXNvblwiLCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHJlYXNvbixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgO1xuICBhYm9ydENvbnRyb2xsZXIuYWJvcnQocmVhc29uKTtcbn07XG5cbi8vIHNyYy9saXN0ZW5lck1pZGRsZXdhcmUvdGFzay50c1xudmFyIHZhbGlkYXRlQWN0aXZlID0gKHNpZ25hbCkgPT4ge1xuICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICBjb25zdCB7XG4gICAgICByZWFzb25cbiAgICB9ID0gc2lnbmFsO1xuICAgIHRocm93IG5ldyBUYXNrQWJvcnRFcnJvcihyZWFzb24pO1xuICB9XG59O1xuZnVuY3Rpb24gcmFjZVdpdGhTaWduYWwoc2lnbmFsLCBwcm9taXNlKSB7XG4gIGxldCBjbGVhbnVwID0gbm9vcDI7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgbm90aWZ5UmVqZWN0aW9uID0gKCkgPT4gcmVqZWN0KG5ldyBUYXNrQWJvcnRFcnJvcihzaWduYWwucmVhc29uKSk7XG4gICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICBub3RpZnlSZWplY3Rpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYW51cCA9IGFkZEFib3J0U2lnbmFsTGlzdGVuZXIoc2lnbmFsLCBub3RpZnlSZWplY3Rpb24pO1xuICAgIHByb21pc2UuZmluYWxseSgoKSA9PiBjbGVhbnVwKCkpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgY2xlYW51cCA9IG5vb3AyO1xuICB9KTtcbn1cbnZhciBydW5UYXNrID0gYXN5bmMgKHRhc2syLCBjbGVhblVwKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgY29uc3QgdmFsdWUgPSBhd2FpdCB0YXNrMigpO1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6IFwib2tcIixcbiAgICAgIHZhbHVlXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiBlcnJvciBpbnN0YW5jZW9mIFRhc2tBYm9ydEVycm9yID8gXCJjYW5jZWxsZWRcIiA6IFwicmVqZWN0ZWRcIixcbiAgICAgIGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGVhblVwPy4oKTtcbiAgfVxufTtcbnZhciBjcmVhdGVQYXVzZSA9IChzaWduYWwpID0+IHtcbiAgcmV0dXJuIChwcm9taXNlKSA9PiB7XG4gICAgcmV0dXJuIGNhdGNoUmVqZWN0aW9uKHJhY2VXaXRoU2lnbmFsKHNpZ25hbCwgcHJvbWlzZSkudGhlbigob3V0cHV0KSA9PiB7XG4gICAgICB2YWxpZGF0ZUFjdGl2ZShzaWduYWwpO1xuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9KSk7XG4gIH07XG59O1xudmFyIGNyZWF0ZURlbGF5ID0gKHNpZ25hbCkgPT4ge1xuICBjb25zdCBwYXVzZSA9IGNyZWF0ZVBhdXNlKHNpZ25hbCk7XG4gIHJldHVybiAodGltZW91dE1zKSA9PiB7XG4gICAgcmV0dXJuIHBhdXNlKG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXRNcykpKTtcbiAgfTtcbn07XG5cbi8vIHNyYy9saXN0ZW5lck1pZGRsZXdhcmUvaW5kZXgudHNcbnZhciB7XG4gIGFzc2lnblxufSA9IE9iamVjdDtcbnZhciBJTlRFUk5BTF9OSUxfVE9LRU4gPSB7fTtcbnZhciBhbG0gPSBcImxpc3RlbmVyTWlkZGxld2FyZVwiO1xudmFyIGNyZWF0ZUZvcmsgPSAocGFyZW50QWJvcnRTaWduYWwsIHBhcmVudEJsb2NraW5nUHJvbWlzZXMpID0+IHtcbiAgY29uc3QgbGlua0NvbnRyb2xsZXJzID0gKGNvbnRyb2xsZXIpID0+IGFkZEFib3J0U2lnbmFsTGlzdGVuZXIocGFyZW50QWJvcnRTaWduYWwsICgpID0+IGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oY29udHJvbGxlciwgcGFyZW50QWJvcnRTaWduYWwucmVhc29uKSk7XG4gIHJldHVybiAodGFza0V4ZWN1dG9yLCBvcHRzKSA9PiB7XG4gICAgYXNzZXJ0RnVuY3Rpb24odGFza0V4ZWN1dG9yLCBcInRhc2tFeGVjdXRvclwiKTtcbiAgICBjb25zdCBjaGlsZEFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBsaW5rQ29udHJvbGxlcnMoY2hpbGRBYm9ydENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHJ1blRhc2soYXN5bmMgKCkgPT4ge1xuICAgICAgdmFsaWRhdGVBY3RpdmUocGFyZW50QWJvcnRTaWduYWwpO1xuICAgICAgdmFsaWRhdGVBY3RpdmUoY2hpbGRBYm9ydENvbnRyb2xsZXIuc2lnbmFsKTtcbiAgICAgIGNvbnN0IHJlc3VsdDIgPSBhd2FpdCB0YXNrRXhlY3V0b3Ioe1xuICAgICAgICBwYXVzZTogY3JlYXRlUGF1c2UoY2hpbGRBYm9ydENvbnRyb2xsZXIuc2lnbmFsKSxcbiAgICAgICAgZGVsYXk6IGNyZWF0ZURlbGF5KGNoaWxkQWJvcnRDb250cm9sbGVyLnNpZ25hbCksXG4gICAgICAgIHNpZ25hbDogY2hpbGRBYm9ydENvbnRyb2xsZXIuc2lnbmFsXG4gICAgICB9KTtcbiAgICAgIHZhbGlkYXRlQWN0aXZlKGNoaWxkQWJvcnRDb250cm9sbGVyLnNpZ25hbCk7XG4gICAgICByZXR1cm4gcmVzdWx0MjtcbiAgICB9LCAoKSA9PiBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGNoaWxkQWJvcnRDb250cm9sbGVyLCB0YXNrQ29tcGxldGVkKSk7XG4gICAgaWYgKG9wdHM/LmF1dG9Kb2luKSB7XG4gICAgICBwYXJlbnRCbG9ja2luZ1Byb21pc2VzLnB1c2gocmVzdWx0LmNhdGNoKG5vb3AyKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IGNyZWF0ZVBhdXNlKHBhcmVudEFib3J0U2lnbmFsKShyZXN1bHQpLFxuICAgICAgY2FuY2VsKCkge1xuICAgICAgICBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGNoaWxkQWJvcnRDb250cm9sbGVyLCB0YXNrQ2FuY2VsbGVkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufTtcbnZhciBjcmVhdGVUYWtlUGF0dGVybiA9IChzdGFydExpc3RlbmluZywgc2lnbmFsKSA9PiB7XG4gIGNvbnN0IHRha2UgPSBhc3luYyAocHJlZGljYXRlLCB0aW1lb3V0KSA9PiB7XG4gICAgdmFsaWRhdGVBY3RpdmUoc2lnbmFsKTtcbiAgICBsZXQgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgfTtcbiAgICBjb25zdCB0dXBsZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc3RvcExpc3RlbmluZyA9IHN0YXJ0TGlzdGVuaW5nKHtcbiAgICAgICAgcHJlZGljYXRlLFxuICAgICAgICBlZmZlY3Q6IChhY3Rpb24sIGxpc3RlbmVyQXBpKSA9PiB7XG4gICAgICAgICAgbGlzdGVuZXJBcGkudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICByZXNvbHZlKFthY3Rpb24sIGxpc3RlbmVyQXBpLmdldFN0YXRlKCksIGxpc3RlbmVyQXBpLmdldE9yaWdpbmFsU3RhdGUoKV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgICBzdG9wTGlzdGVuaW5nKCk7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlcyA9IFt0dXBsZVByb21pc2VdO1xuICAgIGlmICh0aW1lb3V0ICE9IG51bGwpIHtcbiAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dCwgbnVsbCkpKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHJhY2VXaXRoU2lnbmFsKHNpZ25hbCwgUHJvbWlzZS5yYWNlKHByb21pc2VzKSk7XG4gICAgICB2YWxpZGF0ZUFjdGl2ZShzaWduYWwpO1xuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAocHJlZGljYXRlLCB0aW1lb3V0KSA9PiBjYXRjaFJlamVjdGlvbih0YWtlKHByZWRpY2F0ZSwgdGltZW91dCkpO1xufTtcbnZhciBnZXRMaXN0ZW5lckVudHJ5UHJvcHNGcm9tID0gKG9wdGlvbnMpID0+IHtcbiAgbGV0IHtcbiAgICB0eXBlLFxuICAgIGFjdGlvbkNyZWF0b3IsXG4gICAgbWF0Y2hlcixcbiAgICBwcmVkaWNhdGUsXG4gICAgZWZmZWN0XG4gIH0gPSBvcHRpb25zO1xuICBpZiAodHlwZSkge1xuICAgIHByZWRpY2F0ZSA9IGNyZWF0ZUFjdGlvbih0eXBlKS5tYXRjaDtcbiAgfSBlbHNlIGlmIChhY3Rpb25DcmVhdG9yKSB7XG4gICAgdHlwZSA9IGFjdGlvbkNyZWF0b3IudHlwZTtcbiAgICBwcmVkaWNhdGUgPSBhY3Rpb25DcmVhdG9yLm1hdGNoO1xuICB9IGVsc2UgaWYgKG1hdGNoZXIpIHtcbiAgICBwcmVkaWNhdGUgPSBtYXRjaGVyO1xuICB9IGVsc2UgaWYgKHByZWRpY2F0ZSkge1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDIxKSA6IFwiQ3JlYXRpbmcgb3IgcmVtb3ZpbmcgYSBsaXN0ZW5lciByZXF1aXJlcyBvbmUgb2YgdGhlIGtub3duIGZpZWxkcyBmb3IgbWF0Y2hpbmcgYW4gYWN0aW9uXCIpO1xuICB9XG4gIGFzc2VydEZ1bmN0aW9uKGVmZmVjdCwgXCJvcHRpb25zLmxpc3RlbmVyXCIpO1xuICByZXR1cm4ge1xuICAgIHByZWRpY2F0ZSxcbiAgICB0eXBlLFxuICAgIGVmZmVjdFxuICB9O1xufTtcbnZhciBjcmVhdGVMaXN0ZW5lckVudHJ5ID0gLyogQF9fUFVSRV9fICovIGFzc2lnbigob3B0aW9ucykgPT4ge1xuICBjb25zdCB7XG4gICAgdHlwZSxcbiAgICBwcmVkaWNhdGUsXG4gICAgZWZmZWN0XG4gIH0gPSBnZXRMaXN0ZW5lckVudHJ5UHJvcHNGcm9tKG9wdGlvbnMpO1xuICBjb25zdCBpZCA9IG5hbm9pZCgpO1xuICBjb25zdCBlbnRyeSA9IHtcbiAgICBpZCxcbiAgICBlZmZlY3QsXG4gICAgdHlwZSxcbiAgICBwcmVkaWNhdGUsXG4gICAgcGVuZGluZzogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSxcbiAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMjIpIDogXCJVbnN1YnNjcmliZSBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gZW50cnk7XG59LCB7XG4gIHdpdGhUeXBlczogKCkgPT4gY3JlYXRlTGlzdGVuZXJFbnRyeVxufSk7XG52YXIgY2FuY2VsQWN0aXZlTGlzdGVuZXJzID0gKGVudHJ5KSA9PiB7XG4gIGVudHJ5LnBlbmRpbmcuZm9yRWFjaCgoY29udHJvbGxlcikgPT4ge1xuICAgIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oY29udHJvbGxlciwgbGlzdGVuZXJDYW5jZWxsZWQpO1xuICB9KTtcbn07XG52YXIgY3JlYXRlQ2xlYXJMaXN0ZW5lck1pZGRsZXdhcmUgPSAobGlzdGVuZXJNYXApID0+IHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lck1hcC5mb3JFYWNoKGNhbmNlbEFjdGl2ZUxpc3RlbmVycyk7XG4gICAgbGlzdGVuZXJNYXAuY2xlYXIoKTtcbiAgfTtcbn07XG52YXIgc2FmZWx5Tm90aWZ5RXJyb3IgPSAoZXJyb3JIYW5kbGVyLCBlcnJvclRvTm90aWZ5LCBlcnJvckluZm8pID0+IHtcbiAgdHJ5IHtcbiAgICBlcnJvckhhbmRsZXIoZXJyb3JUb05vdGlmeSwgZXJyb3JJbmZvKTtcbiAgfSBjYXRjaCAoZXJyb3JIYW5kbGVyRXJyb3IpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRocm93IGVycm9ySGFuZGxlckVycm9yO1xuICAgIH0sIDApO1xuICB9XG59O1xudmFyIGFkZExpc3RlbmVyID0gLyogQF9fUFVSRV9fICovIGFzc2lnbigvKiBAX19QVVJFX18gKi8gY3JlYXRlQWN0aW9uKGAke2FsbX0vYWRkYCksIHtcbiAgd2l0aFR5cGVzOiAoKSA9PiBhZGRMaXN0ZW5lclxufSk7XG52YXIgY2xlYXJBbGxMaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlQWN0aW9uKGAke2FsbX0vcmVtb3ZlQWxsYCk7XG52YXIgcmVtb3ZlTGlzdGVuZXIgPSAvKiBAX19QVVJFX18gKi8gYXNzaWduKC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVBY3Rpb24oYCR7YWxtfS9yZW1vdmVgKSwge1xuICB3aXRoVHlwZXM6ICgpID0+IHJlbW92ZUxpc3RlbmVyXG59KTtcbnZhciBkZWZhdWx0RXJyb3JIYW5kbGVyID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc29sZS5lcnJvcihgJHthbG19L2Vycm9yYCwgLi4uYXJncyk7XG59O1xudmFyIGNyZWF0ZUxpc3RlbmVyTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlT3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IGxpc3RlbmVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgY29uc3Qge1xuICAgIGV4dHJhLFxuICAgIG9uRXJyb3IgPSBkZWZhdWx0RXJyb3JIYW5kbGVyXG4gIH0gPSBtaWRkbGV3YXJlT3B0aW9ucztcbiAgYXNzZXJ0RnVuY3Rpb24ob25FcnJvciwgXCJvbkVycm9yXCIpO1xuICBjb25zdCBpbnNlcnRFbnRyeSA9IChlbnRyeSkgPT4ge1xuICAgIGVudHJ5LnVuc3Vic2NyaWJlID0gKCkgPT4gbGlzdGVuZXJNYXAuZGVsZXRlKGVudHJ5LmlkKTtcbiAgICBsaXN0ZW5lck1hcC5zZXQoZW50cnkuaWQsIGVudHJ5KTtcbiAgICByZXR1cm4gKGNhbmNlbE9wdGlvbnMpID0+IHtcbiAgICAgIGVudHJ5LnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAoY2FuY2VsT3B0aW9ucz8uY2FuY2VsQWN0aXZlKSB7XG4gICAgICAgIGNhbmNlbEFjdGl2ZUxpc3RlbmVycyhlbnRyeSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgY29uc3Qgc3RhcnRMaXN0ZW5pbmcgPSAob3B0aW9ucykgPT4ge1xuICAgIGxldCBlbnRyeSA9IGZpbmQoQXJyYXkuZnJvbShsaXN0ZW5lck1hcC52YWx1ZXMoKSksIChleGlzdGluZ0VudHJ5KSA9PiBleGlzdGluZ0VudHJ5LmVmZmVjdCA9PT0gb3B0aW9ucy5lZmZlY3QpO1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgIGVudHJ5ID0gY3JlYXRlTGlzdGVuZXJFbnRyeShvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc2VydEVudHJ5KGVudHJ5KTtcbiAgfTtcbiAgYXNzaWduKHN0YXJ0TGlzdGVuaW5nLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiBzdGFydExpc3RlbmluZ1xuICB9KTtcbiAgY29uc3Qgc3RvcExpc3RlbmluZyA9IChvcHRpb25zKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIGVmZmVjdCxcbiAgICAgIHByZWRpY2F0ZVxuICAgIH0gPSBnZXRMaXN0ZW5lckVudHJ5UHJvcHNGcm9tKG9wdGlvbnMpO1xuICAgIGNvbnN0IGVudHJ5ID0gZmluZChBcnJheS5mcm9tKGxpc3RlbmVyTWFwLnZhbHVlcygpKSwgKGVudHJ5MikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hQcmVkaWNhdGVPclR5cGUgPSB0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiA/IGVudHJ5Mi50eXBlID09PSB0eXBlIDogZW50cnkyLnByZWRpY2F0ZSA9PT0gcHJlZGljYXRlO1xuICAgICAgcmV0dXJuIG1hdGNoUHJlZGljYXRlT3JUeXBlICYmIGVudHJ5Mi5lZmZlY3QgPT09IGVmZmVjdDtcbiAgICB9KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAob3B0aW9ucy5jYW5jZWxBY3RpdmUpIHtcbiAgICAgICAgY2FuY2VsQWN0aXZlTGlzdGVuZXJzKGVudHJ5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICEhZW50cnk7XG4gIH07XG4gIGFzc2lnbihzdG9wTGlzdGVuaW5nLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiBzdG9wTGlzdGVuaW5nXG4gIH0pO1xuICBjb25zdCBub3RpZnlMaXN0ZW5lciA9IGFzeW5jIChlbnRyeSwgYWN0aW9uLCBhcGksIGdldE9yaWdpbmFsU3RhdGUpID0+IHtcbiAgICBjb25zdCBpbnRlcm5hbFRhc2tDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGNvbnN0IHRha2UgPSBjcmVhdGVUYWtlUGF0dGVybihzdGFydExpc3RlbmluZywgaW50ZXJuYWxUYXNrQ29udHJvbGxlci5zaWduYWwpO1xuICAgIGNvbnN0IGF1dG9Kb2luUHJvbWlzZXMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZW50cnkucGVuZGluZy5hZGQoaW50ZXJuYWxUYXNrQ29udHJvbGxlcik7XG4gICAgICBhd2FpdCBQcm9taXNlLnJlc29sdmUoZW50cnkuZWZmZWN0KFxuICAgICAgICBhY3Rpb24sXG4gICAgICAgIC8vIFVzZSBhc3NpZ24oKSByYXRoZXIgdGhhbiAuLi4gdG8gYXZvaWQgZXh0cmEgaGVscGVyIGZ1bmN0aW9ucyBhZGRlZCB0byBidW5kbGVcbiAgICAgICAgYXNzaWduKHt9LCBhcGksIHtcbiAgICAgICAgICBnZXRPcmlnaW5hbFN0YXRlLFxuICAgICAgICAgIGNvbmRpdGlvbjogKHByZWRpY2F0ZSwgdGltZW91dCkgPT4gdGFrZShwcmVkaWNhdGUsIHRpbWVvdXQpLnRoZW4oQm9vbGVhbiksXG4gICAgICAgICAgdGFrZSxcbiAgICAgICAgICBkZWxheTogY3JlYXRlRGVsYXkoaW50ZXJuYWxUYXNrQ29udHJvbGxlci5zaWduYWwpLFxuICAgICAgICAgIHBhdXNlOiBjcmVhdGVQYXVzZShpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCksXG4gICAgICAgICAgZXh0cmEsXG4gICAgICAgICAgc2lnbmFsOiBpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICBmb3JrOiBjcmVhdGVGb3JrKGludGVybmFsVGFza0NvbnRyb2xsZXIuc2lnbmFsLCBhdXRvSm9pblByb21pc2VzKSxcbiAgICAgICAgICB1bnN1YnNjcmliZTogZW50cnkudW5zdWJzY3JpYmUsXG4gICAgICAgICAgc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lck1hcC5zZXQoZW50cnkuaWQsIGVudHJ5KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhbmNlbEFjdGl2ZUxpc3RlbmVyczogKCkgPT4ge1xuICAgICAgICAgICAgZW50cnkucGVuZGluZy5mb3JFYWNoKChjb250cm9sbGVyLCBfLCBzZXQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIgIT09IGludGVybmFsVGFza0NvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGNvbnRyb2xsZXIsIGxpc3RlbmVyQ2FuY2VsbGVkKTtcbiAgICAgICAgICAgICAgICBzZXQuZGVsZXRlKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbihpbnRlcm5hbFRhc2tDb250cm9sbGVyLCBsaXN0ZW5lckNhbmNlbGxlZCk7XG4gICAgICAgICAgICBlbnRyeS5wZW5kaW5nLmRlbGV0ZShpbnRlcm5hbFRhc2tDb250cm9sbGVyKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRocm93SWZDYW5jZWxsZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRlQWN0aXZlKGludGVybmFsVGFza0NvbnRyb2xsZXIuc2lnbmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApKTtcbiAgICB9IGNhdGNoIChsaXN0ZW5lckVycm9yKSB7XG4gICAgICBpZiAoIShsaXN0ZW5lckVycm9yIGluc3RhbmNlb2YgVGFza0Fib3J0RXJyb3IpKSB7XG4gICAgICAgIHNhZmVseU5vdGlmeUVycm9yKG9uRXJyb3IsIGxpc3RlbmVyRXJyb3IsIHtcbiAgICAgICAgICByYWlzZWRCeTogXCJlZmZlY3RcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYXV0b0pvaW5Qcm9taXNlcyk7XG4gICAgICBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGludGVybmFsVGFza0NvbnRyb2xsZXIsIGxpc3RlbmVyQ29tcGxldGVkKTtcbiAgICAgIGVudHJ5LnBlbmRpbmcuZGVsZXRlKGludGVybmFsVGFza0NvbnRyb2xsZXIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2xlYXJMaXN0ZW5lck1pZGRsZXdhcmUgPSBjcmVhdGVDbGVhckxpc3RlbmVyTWlkZGxld2FyZShsaXN0ZW5lck1hcCk7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSAoYXBpKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuICAgIGlmICghaXNBY3Rpb24zKGFjdGlvbikpIHtcbiAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgfVxuICAgIGlmIChhZGRMaXN0ZW5lci5tYXRjaChhY3Rpb24pKSB7XG4gICAgICByZXR1cm4gc3RhcnRMaXN0ZW5pbmcoYWN0aW9uLnBheWxvYWQpO1xuICAgIH1cbiAgICBpZiAoY2xlYXJBbGxMaXN0ZW5lcnMubWF0Y2goYWN0aW9uKSkge1xuICAgICAgY2xlYXJMaXN0ZW5lck1pZGRsZXdhcmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlbW92ZUxpc3RlbmVyLm1hdGNoKGFjdGlvbikpIHtcbiAgICAgIHJldHVybiBzdG9wTGlzdGVuaW5nKGFjdGlvbi5wYXlsb2FkKTtcbiAgICB9XG4gICAgbGV0IG9yaWdpbmFsU3RhdGUgPSBhcGkuZ2V0U3RhdGUoKTtcbiAgICBjb25zdCBnZXRPcmlnaW5hbFN0YXRlID0gKCkgPT4ge1xuICAgICAgaWYgKG9yaWdpbmFsU3RhdGUgPT09IElOVEVSTkFMX05JTF9UT0tFTikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyMykgOiBgJHthbG19OiBnZXRPcmlnaW5hbFN0YXRlIGNhbiBvbmx5IGJlIGNhbGxlZCBzeW5jaHJvbm91c2x5YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3JpZ2luYWxTdGF0ZTtcbiAgICB9O1xuICAgIGxldCByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IG5leHQoYWN0aW9uKTtcbiAgICAgIGlmIChsaXN0ZW5lck1hcC5zaXplID4gMCkge1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBhcGkuZ2V0U3RhdGUoKTtcbiAgICAgICAgY29uc3QgbGlzdGVuZXJFbnRyaWVzID0gQXJyYXkuZnJvbShsaXN0ZW5lck1hcC52YWx1ZXMoKSk7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgbGlzdGVuZXJFbnRyaWVzKSB7XG4gICAgICAgICAgbGV0IHJ1bkxpc3RlbmVyID0gZmFsc2U7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJ1bkxpc3RlbmVyID0gZW50cnkucHJlZGljYXRlKGFjdGlvbiwgY3VycmVudFN0YXRlLCBvcmlnaW5hbFN0YXRlKTtcbiAgICAgICAgICB9IGNhdGNoIChwcmVkaWNhdGVFcnJvcikge1xuICAgICAgICAgICAgcnVuTGlzdGVuZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHNhZmVseU5vdGlmeUVycm9yKG9uRXJyb3IsIHByZWRpY2F0ZUVycm9yLCB7XG4gICAgICAgICAgICAgIHJhaXNlZEJ5OiBcInByZWRpY2F0ZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFydW5MaXN0ZW5lcikge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vdGlmeUxpc3RlbmVyKGVudHJ5LCBhY3Rpb24sIGFwaSwgZ2V0T3JpZ2luYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgb3JpZ2luYWxTdGF0ZSA9IElOVEVSTkFMX05JTF9UT0tFTjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBtaWRkbGV3YXJlLFxuICAgIHN0YXJ0TGlzdGVuaW5nLFxuICAgIHN0b3BMaXN0ZW5pbmcsXG4gICAgY2xlYXJMaXN0ZW5lcnM6IGNsZWFyTGlzdGVuZXJNaWRkbGV3YXJlXG4gIH07XG59O1xuXG4vLyBzcmMvZHluYW1pY01pZGRsZXdhcmUvaW5kZXgudHNcbmltcG9ydCB7IGNvbXBvc2UgYXMgY29tcG9zZTMgfSBmcm9tIFwicmVkdXhcIjtcbnZhciBjcmVhdGVNaWRkbGV3YXJlRW50cnkgPSAobWlkZGxld2FyZSkgPT4gKHtcbiAgaWQ6IG5hbm9pZCgpLFxuICBtaWRkbGV3YXJlLFxuICBhcHBsaWVkOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpXG59KTtcbnZhciBtYXRjaEluc3RhbmNlID0gKGluc3RhbmNlSWQpID0+IChhY3Rpb24pID0+IGFjdGlvbj8ubWV0YT8uaW5zdGFuY2VJZCA9PT0gaW5zdGFuY2VJZDtcbnZhciBjcmVhdGVEeW5hbWljTWlkZGxld2FyZSA9ICgpID0+IHtcbiAgY29uc3QgaW5zdGFuY2VJZCA9IG5hbm9pZCgpO1xuICBjb25zdCBtaWRkbGV3YXJlTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgY29uc3Qgd2l0aE1pZGRsZXdhcmUgPSBPYmplY3QuYXNzaWduKGNyZWF0ZUFjdGlvbihcImR5bmFtaWNNaWRkbGV3YXJlL2FkZFwiLCAoLi4ubWlkZGxld2FyZXMpID0+ICh7XG4gICAgcGF5bG9hZDogbWlkZGxld2FyZXMsXG4gICAgbWV0YToge1xuICAgICAgaW5zdGFuY2VJZFxuICAgIH1cbiAgfSkpLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB3aXRoTWlkZGxld2FyZVxuICB9KTtcbiAgY29uc3QgYWRkTWlkZGxld2FyZSA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24gYWRkTWlkZGxld2FyZTIoLi4ubWlkZGxld2FyZXMpIHtcbiAgICBtaWRkbGV3YXJlcy5mb3JFYWNoKChtaWRkbGV3YXJlMikgPT4ge1xuICAgICAgbGV0IGVudHJ5ID0gZmluZChBcnJheS5mcm9tKG1pZGRsZXdhcmVNYXAudmFsdWVzKCkpLCAoZW50cnkyKSA9PiBlbnRyeTIubWlkZGxld2FyZSA9PT0gbWlkZGxld2FyZTIpO1xuICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICBlbnRyeSA9IGNyZWF0ZU1pZGRsZXdhcmVFbnRyeShtaWRkbGV3YXJlMik7XG4gICAgICB9XG4gICAgICBtaWRkbGV3YXJlTWFwLnNldChlbnRyeS5pZCwgZW50cnkpO1xuICAgIH0pO1xuICB9LCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiBhZGRNaWRkbGV3YXJlXG4gIH0pO1xuICBjb25zdCBnZXRGaW5hbE1pZGRsZXdhcmUgPSAoYXBpKSA9PiB7XG4gICAgY29uc3QgYXBwbGllZE1pZGRsZXdhcmUgPSBBcnJheS5mcm9tKG1pZGRsZXdhcmVNYXAudmFsdWVzKCkpLm1hcCgoZW50cnkpID0+IGVtcGxhY2UoZW50cnkuYXBwbGllZCwgYXBpLCB7XG4gICAgICBpbnNlcnQ6ICgpID0+IGVudHJ5Lm1pZGRsZXdhcmUoYXBpKVxuICAgIH0pKTtcbiAgICByZXR1cm4gY29tcG9zZTMoLi4uYXBwbGllZE1pZGRsZXdhcmUpO1xuICB9O1xuICBjb25zdCBpc1dpdGhNaWRkbGV3YXJlID0gaXNBbGxPZih3aXRoTWlkZGxld2FyZSwgbWF0Y2hJbnN0YW5jZShpbnN0YW5jZUlkKSk7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSAoYXBpKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuICAgIGlmIChpc1dpdGhNaWRkbGV3YXJlKGFjdGlvbikpIHtcbiAgICAgIGFkZE1pZGRsZXdhcmUoLi4uYWN0aW9uLnBheWxvYWQpO1xuICAgICAgcmV0dXJuIGFwaS5kaXNwYXRjaDtcbiAgICB9XG4gICAgcmV0dXJuIGdldEZpbmFsTWlkZGxld2FyZShhcGkpKG5leHQpKGFjdGlvbik7XG4gIH07XG4gIHJldHVybiB7XG4gICAgbWlkZGxld2FyZSxcbiAgICBhZGRNaWRkbGV3YXJlLFxuICAgIHdpdGhNaWRkbGV3YXJlLFxuICAgIGluc3RhbmNlSWRcbiAgfTtcbn07XG5cbi8vIHNyYy9jb21iaW5lU2xpY2VzLnRzXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgYXMgY29tYmluZVJlZHVjZXJzMiB9IGZyb20gXCJyZWR1eFwiO1xudmFyIGlzU2xpY2VMaWtlID0gKG1heWJlU2xpY2VMaWtlKSA9PiBcInJlZHVjZXJQYXRoXCIgaW4gbWF5YmVTbGljZUxpa2UgJiYgdHlwZW9mIG1heWJlU2xpY2VMaWtlLnJlZHVjZXJQYXRoID09PSBcInN0cmluZ1wiO1xudmFyIGdldFJlZHVjZXJzID0gKHNsaWNlcykgPT4gc2xpY2VzLmZsYXRNYXAoKHNsaWNlT3JNYXApID0+IGlzU2xpY2VMaWtlKHNsaWNlT3JNYXApID8gW1tzbGljZU9yTWFwLnJlZHVjZXJQYXRoLCBzbGljZU9yTWFwLnJlZHVjZXJdXSA6IE9iamVjdC5lbnRyaWVzKHNsaWNlT3JNYXApKTtcbnZhciBPUklHSU5BTF9TVEFURSA9IFN5bWJvbC5mb3IoXCJydGstc3RhdGUtcHJveHktb3JpZ2luYWxcIik7XG52YXIgaXNTdGF0ZVByb3h5ID0gKHZhbHVlKSA9PiAhIXZhbHVlICYmICEhdmFsdWVbT1JJR0lOQUxfU1RBVEVdO1xudmFyIHN0YXRlUHJveHlNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBjcmVhdGVTdGF0ZVByb3h5ID0gKHN0YXRlLCByZWR1Y2VyTWFwKSA9PiBlbXBsYWNlKHN0YXRlUHJveHlNYXAsIHN0YXRlLCB7XG4gIGluc2VydDogKCkgPT4gbmV3IFByb3h5KHN0YXRlLCB7XG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4ge1xuICAgICAgaWYgKHByb3AgPT09IE9SSUdJTkFMX1NUQVRFKSByZXR1cm4gdGFyZ2V0O1xuICAgICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlck1hcFtwcm9wLnRvU3RyaW5nKCldO1xuICAgICAgICBpZiAocmVkdWNlcikge1xuICAgICAgICAgIGNvbnN0IHJlZHVjZXJSZXN1bHQgPSByZWR1Y2VyKHZvaWQgMCwge1xuICAgICAgICAgICAgdHlwZTogbmFub2lkKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlZHVjZXJSZXN1bHQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDI0KSA6IGBUaGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFwiJHtwcm9wLnRvU3RyaW5nKCl9XCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gY2FsbGVkIGZvciBzZWxlY3RvcigpLiBJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCB5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVkdWNlclJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0pXG59KTtcbnZhciBvcmlnaW5hbCA9IChzdGF0ZSkgPT4ge1xuICBpZiAoIWlzU3RhdGVQcm94eShzdGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyNSkgOiBcIm9yaWdpbmFsIG11c3QgYmUgdXNlZCBvbiBzdGF0ZSBQcm94eVwiKTtcbiAgfVxuICByZXR1cm4gc3RhdGVbT1JJR0lOQUxfU1RBVEVdO1xufTtcbnZhciBub29wUmVkdWNlciA9IChzdGF0ZSA9IHt9KSA9PiBzdGF0ZTtcbmZ1bmN0aW9uIGNvbWJpbmVTbGljZXMoLi4uc2xpY2VzKSB7XG4gIGNvbnN0IHJlZHVjZXJNYXAgPSBPYmplY3QuZnJvbUVudHJpZXMoZ2V0UmVkdWNlcnMoc2xpY2VzKSk7XG4gIGNvbnN0IGdldFJlZHVjZXIgPSAoKSA9PiBPYmplY3Qua2V5cyhyZWR1Y2VyTWFwKS5sZW5ndGggPyBjb21iaW5lUmVkdWNlcnMyKHJlZHVjZXJNYXApIDogbm9vcFJlZHVjZXI7XG4gIGxldCByZWR1Y2VyID0gZ2V0UmVkdWNlcigpO1xuICBmdW5jdGlvbiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9XG4gIGNvbWJpbmVkUmVkdWNlci53aXRoTGF6eUxvYWRlZFNsaWNlcyA9ICgpID0+IGNvbWJpbmVkUmVkdWNlcjtcbiAgY29uc3QgaW5qZWN0ID0gKHNsaWNlLCBjb25maWcgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHJlZHVjZXJQYXRoLFxuICAgICAgcmVkdWNlcjogcmVkdWNlclRvSW5qZWN0XG4gICAgfSA9IHNsaWNlO1xuICAgIGNvbnN0IGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlck1hcFtyZWR1Y2VyUGF0aF07XG4gICAgaWYgKCFjb25maWcub3ZlcnJpZGVFeGlzdGluZyAmJiBjdXJyZW50UmVkdWNlciAmJiBjdXJyZW50UmVkdWNlciAhPT0gcmVkdWNlclRvSW5qZWN0KSB7XG4gICAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBjYWxsZWQgXFxgaW5qZWN0XFxgIHRvIG92ZXJyaWRlIGFscmVhZHktZXhpc3RpbmcgcmVkdWNlciAke3JlZHVjZXJQYXRofSB3aXRob3V0IHNwZWNpZnlpbmcgXFxgb3ZlcnJpZGVFeGlzdGluZzogdHJ1ZVxcYGApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcjtcbiAgICB9XG4gICAgcmVkdWNlck1hcFtyZWR1Y2VyUGF0aF0gPSByZWR1Y2VyVG9JbmplY3Q7XG4gICAgcmVkdWNlciA9IGdldFJlZHVjZXIoKTtcbiAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyO1xuICB9O1xuICBjb25zdCBzZWxlY3RvciA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24gbWFrZVNlbGVjdG9yKHNlbGVjdG9yRm4sIHNlbGVjdFN0YXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHNlbGVjdG9yMihzdGF0ZSwgLi4uYXJncykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yRm4oY3JlYXRlU3RhdGVQcm94eShzZWxlY3RTdGF0ZSA/IHNlbGVjdFN0YXRlKHN0YXRlLCAuLi5hcmdzKSA6IHN0YXRlLCByZWR1Y2VyTWFwKSwgLi4uYXJncyk7XG4gICAgfTtcbiAgfSwge1xuICAgIG9yaWdpbmFsXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjb21iaW5lZFJlZHVjZXIsIHtcbiAgICBpbmplY3QsXG4gICAgc2VsZWN0b3JcbiAgfSk7XG59XG5cbi8vIHNyYy9mb3JtYXRQcm9kRXJyb3JNZXNzYWdlLnRzXG5mdW5jdGlvbiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKGNvZGUpIHtcbiAgcmV0dXJuIGBNaW5pZmllZCBSZWR1eCBUb29sa2l0IGVycm9yICMke2NvZGV9OyB2aXNpdCBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL0Vycm9ycz9jb2RlPSR7Y29kZX0gZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycy4gYDtcbn1cbmV4cG9ydCB7XG4gIFJlZHVjZXJUeXBlLFxuICBTSE9VTERfQVVUT0JBVENILFxuICBUYXNrQWJvcnRFcnJvcixcbiAgVHVwbGUsXG4gIGFkZExpc3RlbmVyLFxuICBhc3luY1RodW5rQ3JlYXRvcixcbiAgYXV0b0JhdGNoRW5oYW5jZXIsXG4gIGJ1aWxkQ3JlYXRlU2xpY2UsXG4gIGNsZWFyQWxsTGlzdGVuZXJzLFxuICBjb21iaW5lU2xpY2VzLFxuICBjb25maWd1cmVTdG9yZSxcbiAgY3JlYXRlQWN0aW9uLFxuICBjcmVhdGVBY3Rpb25DcmVhdG9ySW52YXJpYW50TWlkZGxld2FyZSxcbiAgY3JlYXRlQXN5bmNUaHVuayxcbiAgY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IsXG4gIGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yQ3JlYXRvcixcbiAgY3JlYXRlRHluYW1pY01pZGRsZXdhcmUsXG4gIGNyZWF0ZUVudGl0eUFkYXB0ZXIsXG4gIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSxcbiAgY3JlYXRlTGlzdGVuZXJNaWRkbGV3YXJlLFxuICBwcm9kdWNlIGFzIGNyZWF0ZU5leHRTdGF0ZSxcbiAgY3JlYXRlUmVkdWNlcixcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcjIgYXMgY3JlYXRlU2VsZWN0b3JDcmVhdG9yLFxuICBjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUsXG4gIGNyZWF0ZVNsaWNlLFxuICBjdXJyZW50MyBhcyBjdXJyZW50LFxuICBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUsXG4gIGZvcm1hdFByb2RFcnJvck1lc3NhZ2UsXG4gIGZyZWV6ZSxcbiAgaXNBY3Rpb25DcmVhdG9yLFxuICBpc0FsbE9mLFxuICBpc0FueU9mLFxuICBpc0FzeW5jVGh1bmtBY3Rpb24sXG4gIGlzRHJhZnQ1IGFzIGlzRHJhZnQsXG4gIGlzRlNBIGFzIGlzRmx1eFN0YW5kYXJkQWN0aW9uLFxuICBpc0Z1bGZpbGxlZCxcbiAgaXNJbW11dGFibGVEZWZhdWx0LFxuICBpc1BlbmRpbmcsXG4gIGlzUGxhaW4sXG4gIGlzUmVqZWN0ZWQsXG4gIGlzUmVqZWN0ZWRXaXRoVmFsdWUsXG4gIGxydU1lbW9pemUsXG4gIG1pbmlTZXJpYWxpemVFcnJvcixcbiAgbmFub2lkLFxuICBvcmlnaW5hbDIgYXMgb3JpZ2luYWwsXG4gIHByZXBhcmVBdXRvQmF0Y2hlZCxcbiAgcmVtb3ZlTGlzdGVuZXIsXG4gIHVud3JhcFJlc3VsdCxcbiAgd2Vha01hcE1lbW9pemUyIGFzIHdlYWtNYXBNZW1vaXplXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVkdXgtdG9vbGtpdC5tb2Rlcm4ubWpzLm1hcCIsIi8vIHNyYy9pbmRleC50c1xuaW1wb3J0ICogYXMgUmVhY3QyIGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgYXMgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IyIH0gZnJvbSBcInVzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3dpdGgtc2VsZWN0b3IuanNcIjtcblxuLy8gc3JjL3V0aWxzL3JlYWN0LnRzXG5pbXBvcnQgKiBhcyBSZWFjdE9yaWdpbmFsIGZyb20gXCJyZWFjdFwiO1xudmFyIFJlYWN0ID0gKFxuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgLy8gQHRzLWlnbm9yZVxuICBcImRlZmF1bHRcIiBpbiBSZWFjdE9yaWdpbmFsID8gUmVhY3RPcmlnaW5hbFtcImRlZmF1bHRcIl0gOiBSZWFjdE9yaWdpbmFsXG4pO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db250ZXh0LnRzXG52YXIgQ29udGV4dEtleSA9IFN5bWJvbC5mb3IoYHJlYWN0LXJlZHV4LWNvbnRleHRgKTtcbnZhciBnVCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IChcbiAgLyogZmFsbCBiYWNrIHRvIGEgcGVyLW1vZHVsZSBzY29wZSAocHJlLTguMSBiZWhhdmlvdXIpIGlmIGBnbG9iYWxUaGlzYCBpcyBub3QgYXZhaWxhYmxlICovXG4gIHt9XG4pO1xuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgaWYgKCFSZWFjdC5jcmVhdGVDb250ZXh0KVxuICAgIHJldHVybiB7fTtcbiAgY29uc3QgY29udGV4dE1hcCA9IGdUW0NvbnRleHRLZXldID8/IChnVFtDb250ZXh0S2V5XSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICBsZXQgcmVhbENvbnRleHQgPSBjb250ZXh0TWFwLmdldChSZWFjdC5jcmVhdGVDb250ZXh0KTtcbiAgaWYgKCFyZWFsQ29udGV4dCkge1xuICAgIHJlYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcbiAgICAgIG51bGxcbiAgICApO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHJlYWxDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSZWFjdFJlZHV4XCI7XG4gICAgfVxuICAgIGNvbnRleHRNYXAuc2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQsIHJlYWxDb250ZXh0KTtcbiAgfVxuICByZXR1cm4gcmVhbENvbnRleHQ7XG59XG52YXIgUmVhY3RSZWR1eENvbnRleHQgPSAvKiBAX19QVVJFX18gKi8gZ2V0Q29udGV4dCgpO1xuXG4vLyBzcmMvdXRpbHMvdXNlU3luY0V4dGVybmFsU3RvcmUudHNcbnZhciBub3RJbml0aWFsaXplZCA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKFwidVNFUyBub3QgaW5pdGlhbGl6ZWQhXCIpO1xufTtcblxuLy8gc3JjL2hvb2tzL3VzZVJlZHV4Q29udGV4dC50c1xuZnVuY3Rpb24gY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVJlZHV4Q29udGV4dDIoKSB7XG4gICAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlQ29udGV4dChjb250ZXh0KTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFjb250ZXh0VmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJjb3VsZCBub3QgZmluZCByZWFjdC1yZWR1eCBjb250ZXh0IHZhbHVlOyBwbGVhc2UgZW5zdXJlIHRoZSBjb21wb25lbnQgaXMgd3JhcHBlZCBpbiBhIDxQcm92aWRlcj5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgfTtcbn1cbnZhciB1c2VSZWR1eENvbnRleHQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlUmVkdXhDb250ZXh0SG9vaygpO1xuXG4vLyBzcmMvaG9va3MvdXNlU2VsZWN0b3IudHNcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IG5vdEluaXRpYWxpemVkO1xudmFyIGluaXRpYWxpemVVc2VTZWxlY3RvciA9IChmbikgPT4ge1xuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IGZuO1xufTtcbnZhciByZWZFcXVhbGl0eSA9IChhLCBiKSA9PiBhID09PSBiO1xuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VSZWR1eENvbnRleHQyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VSZWR1eENvbnRleHQgOiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQpO1xuICBjb25zdCB1c2VTZWxlY3RvcjIgPSAoc2VsZWN0b3IsIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHsgZXF1YWxpdHlGbiA9IHJlZkVxdWFsaXR5LCBkZXZNb2RlQ2hlY2tzID0ge30gfSA9IHR5cGVvZiBlcXVhbGl0eUZuT3JPcHRpb25zID09PSBcImZ1bmN0aW9uXCIgPyB7IGVxdWFsaXR5Rm46IGVxdWFsaXR5Rm5Pck9wdGlvbnMgfSA6IGVxdWFsaXR5Rm5Pck9wdGlvbnM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgZXF1YWxpdHlGbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGFuIGVxdWFsaXR5IGZ1bmN0aW9uIHRvIHVzZVNlbGVjdG9yYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGdldFNlcnZlclN0YXRlLFxuICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tcbiAgICB9ID0gdXNlUmVkdXhDb250ZXh0MigpO1xuICAgIGNvbnN0IGZpcnN0UnVuID0gUmVhY3QudXNlUmVmKHRydWUpO1xuICAgIGNvbnN0IHdyYXBwZWRTZWxlY3RvciA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICAge1xuICAgICAgICBbc2VsZWN0b3IubmFtZV0oc3RhdGUpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVjazogZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2ssXG4gICAgICAgICAgICAgIHN0YWJpbGl0eUNoZWNrOiBmaW5hbFN0YWJpbGl0eUNoZWNrXG4gICAgICAgICAgICB9ID0ge1xuICAgICAgICAgICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgICAgICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrLFxuICAgICAgICAgICAgICAuLi5kZXZNb2RlQ2hlY2tzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGZpbmFsU3RhYmlsaXR5Q2hlY2sgPT09IFwiYWx3YXlzXCIgfHwgZmluYWxTdGFiaWxpdHlDaGVjayA9PT0gXCJvbmNlXCIgJiYgZmlyc3RSdW4uY3VycmVudCkge1xuICAgICAgICAgICAgICBjb25zdCB0b0NvbXBhcmUgPSBzZWxlY3RvcihzdGF0ZSk7XG4gICAgICAgICAgICAgIGlmICghZXF1YWxpdHlGbihzZWxlY3RlZCwgdG9Db21wYXJlKSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFjayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgKHsgc3RhY2sgfSA9IGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICBcIlNlbGVjdG9yIFwiICsgKHNlbGVjdG9yLm5hbWUgfHwgXCJ1bmtub3duXCIpICsgXCIgcmV0dXJuZWQgYSBkaWZmZXJlbnQgcmVzdWx0IHdoZW4gY2FsbGVkIHdpdGggdGhlIHNhbWUgcGFyYW1ldGVycy4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSByZXJlbmRlcnMuXFxuU2VsZWN0b3JzIHRoYXQgcmV0dXJuIGEgbmV3IHJlZmVyZW5jZSAoc3VjaCBhcyBhbiBvYmplY3Qgb3IgYW4gYXJyYXkpIHNob3VsZCBiZSBtZW1vaXplZDogaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdXNhZ2UvZGVyaXZpbmctZGF0YS1zZWxlY3RvcnMjb3B0aW1pemluZy1zZWxlY3RvcnMtd2l0aC1tZW1vaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkMjogdG9Db21wYXJlLFxuICAgICAgICAgICAgICAgICAgICBzdGFja1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayA9PT0gXCJhbHdheXNcIiB8fCBmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayA9PT0gXCJvbmNlXCIgJiYgZmlyc3RSdW4uY3VycmVudCkge1xuICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAoeyBzdGFjayB9ID0gZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIFwiU2VsZWN0b3IgXCIgKyAoc2VsZWN0b3IubmFtZSB8fCBcInVua25vd25cIikgKyBcIiByZXR1cm5lZCB0aGUgcm9vdCBzdGF0ZSB3aGVuIGNhbGxlZC4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSByZXJlbmRlcnMuXFxuU2VsZWN0b3JzIHRoYXQgcmV0dXJuIHRoZSBlbnRpcmUgc3RhdGUgYXJlIGFsbW9zdCBjZXJ0YWlubHkgYSBtaXN0YWtlLCBhcyB0aGV5IHdpbGwgY2F1c2UgYSByZXJlbmRlciB3aGVuZXZlciAqYW55dGhpbmcqIGluIHN0YXRlIGNoYW5nZXMuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YWNrIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3RSdW4uY3VycmVudClcbiAgICAgICAgICAgICAgZmlyc3RSdW4uY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1bc2VsZWN0b3IubmFtZV0sXG4gICAgICBbc2VsZWN0b3IsIHN0YWJpbGl0eUNoZWNrLCBkZXZNb2RlQ2hlY2tzLnN0YWJpbGl0eUNoZWNrXVxuICAgICk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKFxuICAgICAgc3Vic2NyaXB0aW9uLmFkZE5lc3RlZFN1YixcbiAgICAgIHN0b3JlLmdldFN0YXRlLFxuICAgICAgZ2V0U2VydmVyU3RhdGUgfHwgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICB3cmFwcGVkU2VsZWN0b3IsXG4gICAgICBlcXVhbGl0eUZuXG4gICAgKTtcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHNlbGVjdGVkU3RhdGUpO1xuICAgIHJldHVybiBzZWxlY3RlZFN0YXRlO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZVNlbGVjdG9yMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlU2VsZWN0b3IyXG4gIH0pO1xuICByZXR1cm4gdXNlU2VsZWN0b3IyO1xufVxudmFyIHVzZVNlbGVjdG9yID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVNlbGVjdG9ySG9vaygpO1xuXG4vLyBzcmMvdXRpbHMvcmVhY3QtaXMudHNcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTtcbnZhciBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnNlcnZlcl9jb250ZXh0XCIpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5vZmZzY3JlZW5cIik7XG52YXIgUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jbGllbnQucmVmZXJlbmNlXCIpO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIGNvbnN0ICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBvYmplY3QudHlwZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgY29uc3QgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6IHtcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cblxuLy8gc3JjL3V0aWxzL3dhcm5pbmcudHNcbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgdHJ5IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG4vLyBzcmMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMudHNcbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSkge1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHZhbHVlIGZvciAke21ldGhvZE5hbWV9IGluIGNvbm5lY3QuYCk7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gXCJtYXBTdGF0ZVRvUHJvcHNcIiB8fCBtZXRob2ROYW1lID09PSBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2VsZWN0b3IsIFwiZGVwZW5kc09uT3duUHJvcHNcIikpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIGBUaGUgc2VsZWN0b3IgZm9yICR7bWV0aG9kTmFtZX0gb2YgY29ubmVjdCBkaWQgbm90IHNwZWNpZnkgYSB2YWx1ZSBmb3IgZGVwZW5kc09uT3duUHJvcHMuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcykge1xuICB2ZXJpZnkobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKTtcbiAgdmVyaWZ5KG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIik7XG4gIHZlcmlmeShtZXJnZVByb3BzLCBcIm1lcmdlUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeS50c1xuZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCB7XG4gIGFyZVN0YXRlc0VxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWxcbn0pIHtcbiAgbGV0IGhhc1J1bkF0TGVhc3RPbmNlID0gZmFsc2U7XG4gIGxldCBzdGF0ZTtcbiAgbGV0IG93blByb3BzO1xuICBsZXQgc3RhdGVQcm9wcztcbiAgbGV0IGRpc3BhdGNoUHJvcHM7XG4gIGxldCBtZXJnZWRQcm9wcztcbiAgZnVuY3Rpb24gaGFuZGxlRmlyc3RDYWxsKGZpcnN0U3RhdGUsIGZpcnN0T3duUHJvcHMpIHtcbiAgICBzdGF0ZSA9IGZpcnN0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBmaXJzdE93blByb3BzO1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICBoYXNSdW5BdExlYXN0T25jZSA9IHRydWU7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKSB7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHMoKSB7XG4gICAgaWYgKG1hcFN0YXRlVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIGNvbnN0IG5leHRTdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVQcm9wc0NoYW5nZWQgPSAhYXJlU3RhdGVQcm9wc0VxdWFsKG5leHRTdGF0ZVByb3BzLCBzdGF0ZVByb3BzKTtcbiAgICBzdGF0ZVByb3BzID0gbmV4dFN0YXRlUHJvcHM7XG4gICAgaWYgKHN0YXRlUHJvcHNDaGFuZ2VkKVxuICAgICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgY29uc3QgcHJvcHNDaGFuZ2VkID0gIWFyZU93blByb3BzRXF1YWwobmV4dE93blByb3BzLCBvd25Qcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVDaGFuZ2VkID0gIWFyZVN0YXRlc0VxdWFsKFxuICAgICAgbmV4dFN0YXRlLFxuICAgICAgc3RhdGUsXG4gICAgICBuZXh0T3duUHJvcHMsXG4gICAgICBvd25Qcm9wc1xuICAgICk7XG4gICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBuZXh0T3duUHJvcHM7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpO1xuICAgIGlmIChwcm9wc0NoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3UHJvcHMoKTtcbiAgICBpZiAoc3RhdGVDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgcmV0dXJuIGhhc1J1bkF0TGVhc3RPbmNlID8gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA6IGhhbmRsZUZpcnN0Q2FsbChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcyk7XG4gIH07XG59XG5mdW5jdGlvbiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KGRpc3BhdGNoLCB7XG4gIGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gIGluaXRNZXJnZVByb3BzLFxuICAuLi5vcHRpb25zXG59KSB7XG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgY29uc3QgbWVyZ2VQcm9wcyA9IGluaXRNZXJnZVByb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgb3B0aW9ucyk7XG59XG5cbi8vIHNyYy91dGlscy9iaW5kQWN0aW9uQ3JlYXRvcnMudHNcbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgY29uc3QgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIGNvbnN0IGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSAoLi4uYXJncykgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvciguLi5hcmdzKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG4vLyBzcmMvdXRpbHMvaXNQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgfHwgb2JqID09PSBudWxsKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgaWYgKHByb3RvID09PSBudWxsKVxuICAgIHJldHVybiB0cnVlO1xuICBsZXQgYmFzZVByb3RvID0gcHJvdG87XG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKSAhPT0gbnVsbCkge1xuICAgIGJhc2VQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pO1xuICB9XG4gIHJldHVybiBwcm90byA9PT0gYmFzZVByb3RvO1xufVxuXG4vLyBzcmMvdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QudHNcbmZ1bmN0aW9uIHZlcmlmeVBsYWluT2JqZWN0KHZhbHVlLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybmluZyhcbiAgICAgIGAke21ldGhvZE5hbWV9KCkgaW4gJHtkaXNwbGF5TmFtZX0gbXVzdCByZXR1cm4gYSBwbGFpbiBvYmplY3QuIEluc3RlYWQgcmVjZWl2ZWQgJHt2YWx1ZX0uYFxuICAgICk7XG4gIH1cbn1cblxuLy8gc3JjL2Nvbm5lY3Qvd3JhcE1hcFRvUHJvcHMudHNcbmZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZ2V0Q29uc3RhbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRDb25zdGFudFNlbGVjdG9yKGRpc3BhdGNoKSB7XG4gICAgY29uc3QgY29uc3RhbnQgPSBnZXRDb25zdGFudChkaXNwYXRjaCk7XG4gICAgZnVuY3Rpb24gY29uc3RhbnRTZWxlY3RvcigpIHtcbiAgICAgIHJldHVybiBjb25zdGFudDtcbiAgICB9XG4gICAgY29uc3RhbnRTZWxlY3Rvci5kZXBlbmRzT25Pd25Qcm9wcyA9IGZhbHNlO1xuICAgIHJldHVybiBjb25zdGFudFNlbGVjdG9yO1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcykge1xuICByZXR1cm4gbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyA/IEJvb2xlYW4obWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgOiBtYXBUb1Byb3BzLmxlbmd0aCAhPT0gMTtcbn1cbmZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBUb1Byb3BzLCBtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0UHJveHlTZWxlY3RvcihkaXNwYXRjaCwgeyBkaXNwbGF5TmFtZSB9KSB7XG4gICAgY29uc3QgcHJveHkgPSBmdW5jdGlvbiBtYXBUb1Byb3BzUHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcmV0dXJuIHByb3h5LmRlcGVuZHNPbk93blByb3BzID8gcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSA6IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCB2b2lkIDApO1xuICAgIH07XG4gICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSB0cnVlO1xuICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBmdW5jdGlvbiBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBtYXBUb1Byb3BzO1xuICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKTtcbiAgICAgIGxldCBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBwcm9wcztcbiAgICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7XG4gICAgICAgIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICB2ZXJpZnlQbGFpbk9iamVjdChwcm9wcywgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xufVxuXG4vLyBzcmMvY29ubmVjdC9pbnZhbGlkQXJnRmFjdG9yeS50c1xuZnVuY3Rpb24gY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkoYXJnLCBuYW1lKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCB2YWx1ZSBvZiB0eXBlICR7dHlwZW9mIGFyZ30gZm9yICR7bmFtZX0gYXJndW1lbnQgd2hlbiBjb25uZWN0aW5nIGNvbXBvbmVudCAke29wdGlvbnMud3JhcHBlZENvbXBvbmVudE5hbWV9LmBcbiAgICApO1xuICB9O1xufVxuXG4vLyBzcmMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMudHNcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBEaXNwYXRjaFRvUHJvcHMgJiYgdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gXCJvYmplY3RcIiA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoXG4gICAgKGRpc3BhdGNoKSA9PiAoXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBiaW5kQWN0aW9uQ3JlYXRvcnMobWFwRGlzcGF0Y2hUb1Byb3BzLCBkaXNwYXRjaClcbiAgICApXG4gICkgOiAhbWFwRGlzcGF0Y2hUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudCgoZGlzcGF0Y2gpID0+ICh7XG4gICAgZGlzcGF0Y2hcbiAgfSkpIDogdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKVxuICApIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzLnRzXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHNGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcFN0YXRlVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoKCkgPT4gKHt9KSkgOiB0eXBlb2YgbWFwU3RhdGVUb1Byb3BzID09PSBcImZ1bmN0aW9uXCIgPyAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpXG4gICkgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9tZXJnZVByb3BzLnRzXG5mdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICByZXR1cm4geyAuLi5vd25Qcm9wcywgLi4uc3RhdGVQcm9wcywgLi4uZGlzcGF0Y2hQcm9wcyB9O1xufVxuZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIHsgZGlzcGxheU5hbWUsIGFyZU1lcmdlZFByb3BzRXF1YWwgfSkge1xuICAgIGxldCBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgbGV0IG1lcmdlZFByb3BzO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZVByb3BzUHJveHkoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICAgIGNvbnN0IG5leHRNZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgICAgaWYgKGhhc1J1bk9uY2UpIHtcbiAgICAgICAgaWYgKCFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcywgbWVyZ2VkUHJvcHMpKVxuICAgICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFzUnVuT25jZSA9IHRydWU7XG4gICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgXCJtZXJnZVByb3BzXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBtZXJnZVByb3BzRmFjdG9yeShtZXJnZVByb3BzKSB7XG4gIHJldHVybiAhbWVyZ2VQcm9wcyA/ICgpID0+IGRlZmF1bHRNZXJnZVByb3BzIDogdHlwZW9mIG1lcmdlUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1lcmdlUHJvcHMsIFwibWVyZ2VQcm9wc1wiKTtcbn1cblxuLy8gc3JjL3V0aWxzL2JhdGNoLnRzXG5mdW5jdGlvbiBkZWZhdWx0Tm9vcEJhdGNoKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKCk7XG59XG5cbi8vIHNyYy91dGlscy9TdWJzY3JpcHRpb24udHNcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpIHtcbiAgbGV0IGZpcnN0ID0gbnVsbDtcbiAgbGV0IGxhc3QgPSBudWxsO1xuICByZXR1cm4ge1xuICAgIGNsZWFyKCkge1xuICAgICAgZmlyc3QgPSBudWxsO1xuICAgICAgbGFzdCA9IG51bGw7XG4gICAgfSxcbiAgICBub3RpZnkoKSB7XG4gICAgICBkZWZhdWx0Tm9vcEJhdGNoKCgpID0+IHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gZmlyc3Q7XG4gICAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKCk7XG4gICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IFtdO1xuICAgICAgbGV0IGxpc3RlbmVyID0gZmlyc3Q7XG4gICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgICBsZXQgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gbGFzdCA9IHtcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgIHByZXY6IGxhc3RcbiAgICAgIH07XG4gICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0ID0gbGlzdGVuZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICghaXNTdWJzY3JpYmVkIHx8IGZpcnN0ID09PSBudWxsKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChsaXN0ZW5lci5uZXh0KSB7XG4gICAgICAgICAgbGlzdGVuZXIubmV4dC5wcmV2ID0gbGlzdGVuZXIucHJldjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0ID0gbGlzdGVuZXIucHJldjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlyc3QgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cbnZhciBudWxsTGlzdGVuZXJzID0ge1xuICBub3RpZnkoKSB7XG4gIH0sXG4gIGdldDogKCkgPT4gW11cbn07XG5mdW5jdGlvbiBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUsIHBhcmVudFN1Yikge1xuICBsZXQgdW5zdWJzY3JpYmU7XG4gIGxldCBsaXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICBsZXQgc3Vic2NyaXB0aW9uc0Ftb3VudCA9IDA7XG4gIGxldCBzZWxmU3Vic2NyaWJlZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBhZGROZXN0ZWRTdWIobGlzdGVuZXIpIHtcbiAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICBjb25zdCBjbGVhbnVwTGlzdGVuZXIgPSBsaXN0ZW5lcnMuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICBsZXQgcmVtb3ZlZCA9IGZhbHNlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIXJlbW92ZWQpIHtcbiAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIGNsZWFudXBMaXN0ZW5lcigpO1xuICAgICAgICB0cnlVbnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3VicygpIHtcbiAgICBsaXN0ZW5lcnMubm90aWZ5KCk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlV3JhcHBlcigpIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGlzU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gc2VsZlN1YnNjcmliZWQ7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlKCkge1xuICAgIHN1YnNjcmlwdGlvbnNBbW91bnQrKztcbiAgICBpZiAoIXVuc3Vic2NyaWJlKSB7XG4gICAgICB1bnN1YnNjcmliZSA9IHBhcmVudFN1YiA/IHBhcmVudFN1Yi5hZGROZXN0ZWRTdWIoaGFuZGxlQ2hhbmdlV3JhcHBlcikgOiBzdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlV3JhcHBlcik7XG4gICAgICBsaXN0ZW5lcnMgPSBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmUoKSB7XG4gICAgc3Vic2NyaXB0aW9uc0Ftb3VudC0tO1xuICAgIGlmICh1bnN1YnNjcmliZSAmJiBzdWJzY3JpcHRpb25zQW1vdW50ID09PSAwKSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgdW5zdWJzY3JpYmUgPSB2b2lkIDA7XG4gICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgIGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVN1YnNjcmliZVNlbGYoKSB7XG4gICAgaWYgKCFzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgdHJ5U3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoc2VsZlN1YnNjcmliZWQpIHtcbiAgICAgIHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICB0cnlVbnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICBjb25zdCBzdWJzY3JpcHRpb24gPSB7XG4gICAgYWRkTmVzdGVkU3ViLFxuICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgaGFuZGxlQ2hhbmdlV3JhcHBlcixcbiAgICBpc1N1YnNjcmliZWQsXG4gICAgdHJ5U3Vic2NyaWJlOiB0cnlTdWJzY3JpYmVTZWxmLFxuICAgIHRyeVVuc3Vic2NyaWJlOiB0cnlVbnN1YnNjcmliZVNlbGYsXG4gICAgZ2V0TGlzdGVuZXJzOiAoKSA9PiBsaXN0ZW5lcnNcbiAgfTtcbiAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbn1cblxuLy8gc3JjL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QudHNcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKTtcbnZhciBpc1JlYWN0TmF0aXZlID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJSZWFjdE5hdGl2ZVwiO1xudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBjYW5Vc2VET00gfHwgaXNSZWFjdE5hdGl2ZSA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcblxuLy8gc3JjL3V0aWxzL3NoYWxsb3dFcXVhbC50c1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBzcmMvdXRpbHMvaG9pc3RTdGF0aWNzLnRzXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAkJHR5cGVvZjogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAkJHR5cGVvZjogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHtcbiAgW0ZvcndhcmRSZWZdOiBGT1JXQVJEX1JFRl9TVEFUSUNTLFxuICBbTWVtb106IE1FTU9fU1RBVElDU1xufTtcbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIGlmIChpc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH1cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbXCIkJHR5cGVvZlwiXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIGNvbnN0IGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICBjb25zdCBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbi8vIHNyYy9jb21wb25lbnRzL2Nvbm5lY3QudHN4XG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBub3RJbml0aWFsaXplZDtcbnZhciBpbml0aWFsaXplQ29ubmVjdCA9IChmbikgPT4ge1xuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IGZuO1xufTtcbnZhciBOT19TVUJTQ1JJUFRJT05fQVJSQVkgPSBbbnVsbCwgbnVsbF07XG52YXIgc3RyaW5naWZ5Q29tcG9uZW50ID0gKENvbXApID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoQ29tcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcoQ29tcCk7XG4gIH1cbn07XG5mdW5jdGlvbiB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoZWZmZWN0RnVuYywgZWZmZWN0QXJncywgZGVwZW5kZW5jaWVzKSB7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4gZWZmZWN0RnVuYyguLi5lZmZlY3RBcmdzKSwgZGVwZW5kZW5jaWVzKTtcbn1cbmZ1bmN0aW9uIGNhcHR1cmVXcmFwcGVyUHJvcHMobGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCB3cmFwcGVyUHJvcHMsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMpIHtcbiAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50ID0gd3JhcHBlclByb3BzO1xuICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gZmFsc2U7XG4gIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQpIHtcbiAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBudWxsO1xuICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlVXBkYXRlcyhzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsIHN0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3RvciwgbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCBpc01vdW50ZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIGFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcikge1xuICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcylcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgIH07XG4gIGxldCBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuICBsZXQgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgY29uc3QgY2hlY2tGb3JVcGRhdGVzID0gKCkgPT4ge1xuICAgIGlmIChkaWRVbnN1YnNjcmliZSB8fCAhaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGF0ZXN0U3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgbGV0IG5ld0NoaWxkUHJvcHMsIGVycm9yO1xuICAgIHRyeSB7XG4gICAgICBuZXdDaGlsZFByb3BzID0gY2hpbGRQcm9wc1NlbGVjdG9yKFxuICAgICAgICBsYXRlc3RTdG9yZVN0YXRlLFxuICAgICAgICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnRcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgICAgbGFzdFRocm93bkVycm9yID0gZTtcbiAgICB9XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKG5ld0NoaWxkUHJvcHMgPT09IGxhc3RDaGlsZFByb3BzLmN1cnJlbnQpIHtcbiAgICAgIGlmICghcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCkge1xuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IGNoZWNrRm9yVXBkYXRlcztcbiAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgY29uc3QgdW5zdWJzY3JpYmVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IG51bGw7XG4gICAgaWYgKGxhc3RUaHJvd25FcnJvcikge1xuICAgICAgdGhyb3cgbGFzdFRocm93bkVycm9yO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVuc3Vic2NyaWJlV3JhcHBlcjtcbn1cbmZ1bmN0aW9uIHN0cmljdEVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IGZhbHNlO1xuZnVuY3Rpb24gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywge1xuICAvLyBUaGUgYHB1cmVgIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLCBzbyBUUyBkb2Vzbid0IGxpa2UgdXMgZGVzdHJ1Y3R1cmluZyB0aGlzIHRvIGNoZWNrIGl0cyBleGlzdGVuY2UuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcHVyZSxcbiAgYXJlU3RhdGVzRXF1YWwgPSBzdHJpY3RFcXVhbCxcbiAgYXJlT3duUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgYXJlU3RhdGVQcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICAvLyB1c2UgUmVhY3QncyBmb3J3YXJkUmVmIHRvIGV4cG9zZSBhIHJlZiBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnRcbiAgZm9yd2FyZFJlZiA9IGZhbHNlLFxuICAvLyB0aGUgY29udGV4dCBjb25zdW1lciB0byB1c2VcbiAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0XG59ID0ge30pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmIChwdXJlICE9PSB2b2lkIDAgJiYgIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24pIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24gPSB0cnVlO1xuICAgICAgd2FybmluZyhcbiAgICAgICAgJ1RoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQuIGBjb25uZWN0YCBpcyBub3cgYWx3YXlzIGEgXCJwdXJlL21lbW9pemVkXCIgY29tcG9uZW50J1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgQ29udGV4dCA9IGNvbnRleHQ7XG4gIGNvbnN0IGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHNGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcyk7XG4gIGNvbnN0IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcyk7XG4gIGNvbnN0IGluaXRNZXJnZVByb3BzID0gbWVyZ2VQcm9wc0ZhY3RvcnkobWVyZ2VQcm9wcyk7XG4gIGNvbnN0IHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyA9IEJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKTtcbiAgY29uc3Qgd3JhcFdpdGhDb25uZWN0ID0gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gLyogQF9fUFVSRV9fICovIGlzVmFsaWRFbGVtZW50VHlwZShXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgIGlmICghaXNWYWxpZClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBjb25uZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICR7c3RyaW5naWZ5Q29tcG9uZW50KFxuICAgICAgICAgICAgV3JhcHBlZENvbXBvbmVudFxuICAgICAgICAgICl9YFxuICAgICAgICApO1xuICAgIH1cbiAgICBjb25zdCB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8IFwiQ29tcG9uZW50XCI7XG4gICAgY29uc3QgZGlzcGxheU5hbWUgPSBgQ29ubmVjdCgke3dyYXBwZWRDb21wb25lbnROYW1lfSlgO1xuICAgIGNvbnN0IHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMgPSB7XG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBkaXNwbGF5TmFtZSxcbiAgICAgIHdyYXBwZWRDb21wb25lbnROYW1lLFxuICAgICAgV3JhcHBlZENvbXBvbmVudCxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMsXG4gICAgICBhcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBDb25uZWN0RnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgIGNvbnN0IFtwcm9wc0NvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIHdyYXBwZXJQcm9wc10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmOiByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmMiwgLi4ud3JhcHBlclByb3BzMiB9ID0gcHJvcHM7XG4gICAgICAgIHJldHVybiBbcHJvcHMuY29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjIsIHdyYXBwZXJQcm9wczJdO1xuICAgICAgfSwgW3Byb3BzXSk7XG4gICAgICBjb25zdCBDb250ZXh0VG9Vc2UgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgbGV0IFJlc3VsdENvbnRleHQgPSBDb250ZXh0O1xuICAgICAgICBpZiAocHJvcHNDb250ZXh0Py5Db25zdW1lcikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSAvKiBAX19QVVJFX18gKi8gaXNDb250ZXh0Q29uc3VtZXIoXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcHNDb250ZXh0LkNvbnN1bWVyLCBudWxsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJZb3UgbXVzdCBwYXNzIGEgdmFsaWQgUmVhY3QgY29udGV4dCBjb25zdW1lciBhcyBgcHJvcHMuY29udGV4dGBcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVzdWx0Q29udGV4dCA9IHByb3BzQ29udGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlc3VsdENvbnRleHQ7XG4gICAgICB9LCBbcHJvcHNDb250ZXh0LCBDb250ZXh0XSk7XG4gICAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHRUb1VzZSk7XG4gICAgICBjb25zdCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPSBCb29sZWFuKHByb3BzLnN0b3JlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmdldFN0YXRlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID0gQm9vbGVhbihjb250ZXh0VmFsdWUpICYmIEJvb2xlYW4oY29udGV4dFZhbHVlLnN0b3JlKTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWRpZFN0b3JlQ29tZUZyb21Qcm9wcyAmJiAhZGlkU3RvcmVDb21lRnJvbUNvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDb3VsZCBub3QgZmluZCBcInN0b3JlXCIgaW4gdGhlIGNvbnRleHQgb2YgXCIke2Rpc3BsYXlOYW1lfVwiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCBvciBwYXNzIGEgY3VzdG9tIFJlYWN0IGNvbnRleHQgcHJvdmlkZXIgdG8gPFByb3ZpZGVyPiBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgUmVhY3QgY29udGV4dCBjb25zdW1lciB0byAke2Rpc3BsYXlOYW1lfSBpbiBjb25uZWN0IG9wdGlvbnMuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RvcmUgPSBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBwcm9wcy5zdG9yZSA6IGNvbnRleHRWYWx1ZS5zdG9yZTtcbiAgICAgIGNvbnN0IGdldFNlcnZlclN0YXRlID0gZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPyBjb250ZXh0VmFsdWUuZ2V0U2VydmVyU3RhdGUgOiBzdG9yZS5nZXRTdGF0ZTtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNTZWxlY3RvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShzdG9yZS5kaXNwYXRjaCwgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyk7XG4gICAgICB9LCBbc3RvcmVdKTtcbiAgICAgIGNvbnN0IFtzdWJzY3JpcHRpb24sIG5vdGlmeU5lc3RlZFN1YnNdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKVxuICAgICAgICAgIHJldHVybiBOT19TVUJTQ1JJUFRJT05fQVJSQVk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbjIgPSBjcmVhdGVTdWJzY3JpcHRpb24oXG4gICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgZGlkU3RvcmVDb21lRnJvbVByb3BzID8gdm9pZCAwIDogY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvblxuICAgICAgICApO1xuICAgICAgICBjb25zdCBub3RpZnlOZXN0ZWRTdWJzMiA9IHN1YnNjcmlwdGlvbjIubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHN1YnNjcmlwdGlvbjIpO1xuICAgICAgICByZXR1cm4gW3N1YnNjcmlwdGlvbjIsIG5vdGlmeU5lc3RlZFN1YnMyXTtcbiAgICAgIH0sIFtzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWVdKTtcbiAgICAgIGNvbnN0IG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGRpZFN0b3JlQ29tZUZyb21Qcm9wcykge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5jb250ZXh0VmFsdWUsXG4gICAgICAgICAgc3Vic2NyaXB0aW9uXG4gICAgICAgIH07XG4gICAgICB9LCBbZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWUsIHN1YnNjcmlwdGlvbl0pO1xuICAgICAgY29uc3QgbGFzdENoaWxkUHJvcHMgPSBSZWFjdC51c2VSZWYodm9pZCAwKTtcbiAgICAgIGNvbnN0IGxhc3RXcmFwcGVyUHJvcHMgPSBSZWFjdC51c2VSZWYod3JhcHBlclByb3BzKTtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUgPSBSZWFjdC51c2VSZWYodm9pZCAwKTtcbiAgICAgIGNvbnN0IHJlbmRlcklzU2NoZWR1bGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGlzTW91bnRlZCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yID0gUmVhY3QudXNlUmVmKFxuICAgICAgICB2b2lkIDBcbiAgICAgICk7XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICB9LCBbXSk7XG4gICAgICBjb25zdCBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCAmJiB3cmFwcGVyUHJvcHMgPT09IGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNTZWxlY3RvcihzdG9yZS5nZXRTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICB9LCBbc3RvcmUsIHdyYXBwZXJQcm9wc10pO1xuICAgICAgY29uc3Qgc3Vic2NyaWJlRm9yUmVhY3QgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlID0gKHJlYWN0TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVVcGRhdGVzKFxuICAgICAgICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24sXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjaGlsZFByb3BzU2VsZWN0b3IsXG4gICAgICAgICAgICBsYXN0V3JhcHBlclByb3BzLFxuICAgICAgICAgICAgbGFzdENoaWxkUHJvcHMsXG4gICAgICAgICAgICByZW5kZXJJc1NjaGVkdWxlZCxcbiAgICAgICAgICAgIGlzTW91bnRlZCxcbiAgICAgICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsXG4gICAgICAgICAgICBub3RpZnlOZXN0ZWRTdWJzLFxuICAgICAgICAgICAgcmVhY3RMaXN0ZW5lclxuICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmU7XG4gICAgICB9LCBbc3Vic2NyaXB0aW9uXSk7XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoY2FwdHVyZVdyYXBwZXJQcm9wcywgW1xuICAgICAgICBsYXN0V3JhcHBlclByb3BzLFxuICAgICAgICBsYXN0Q2hpbGRQcm9wcyxcbiAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQsXG4gICAgICAgIHdyYXBwZXJQcm9wcyxcbiAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSxcbiAgICAgICAgbm90aWZ5TmVzdGVkU3Vic1xuICAgICAgXSk7XG4gICAgICBsZXQgYWN0dWFsQ2hpbGRQcm9wcztcbiAgICAgIHRyeSB7XG4gICAgICAgIGFjdHVhbENoaWxkUHJvcHMgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShcbiAgICAgICAgICAvLyBUT0RPIFdlJ3JlIHBhc3NpbmcgdGhyb3VnaCBhIGJpZyB3cmFwcGVyIHRoYXQgZG9lcyBhIGJ1bmNoIG9mIGV4dHJhIHNpZGUgZWZmZWN0cyBiZXNpZGVzIHN1YnNjcmliaW5nXG4gICAgICAgICAgc3Vic2NyaWJlRm9yUmVhY3QsXG4gICAgICAgICAgLy8gVE9ETyBUaGlzIGlzIGluY3JlZGlibHkgaGFja3kuIFdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIHRoZSBzdG9yZSB1cGRhdGUgYW5kIGNhbGN1bGF0ZWQgbmV3IGNoaWxkIHByb3BzLFxuICAgICAgICAgIC8vIFRPRE8gYW5kIHdlJ3JlIGp1c3QgcGFzc2luZyB0aGF0IHRocm91Z2ggc28gaXQgdHJpZ2dlcnMgYSByZS1yZW5kZXIgZm9yIHVzIHJhdGhlciB0aGFuIHJlbHlpbmcgb24gYHVTRVNgLlxuICAgICAgICAgIGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvcixcbiAgICAgICAgICBnZXRTZXJ2ZXJTdGF0ZSA/ICgpID0+IGNoaWxkUHJvcHNTZWxlY3RvcihnZXRTZXJ2ZXJTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpIDogYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgICAgIDtcbiAgICAgICAgICBlcnIubWVzc2FnZSArPSBgXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxuJHtsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQuc3RhY2t9XG5cbmA7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCA9IHZvaWQgMDtcbiAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gYWN0dWFsQ2hpbGRQcm9wcztcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgV3JhcHBlZENvbXBvbmVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLi4uYWN0dWFsQ2hpbGRQcm9wcyxcbiAgICAgICAgICAgICAgcmVmOiByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSwgW3JlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIFdyYXBwZWRDb21wb25lbnQsIGFjdHVhbENoaWxkUHJvcHNdKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkQ2hpbGQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykge1xuICAgICAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0VG9Vc2UuUHJvdmlkZXIsIHsgdmFsdWU6IG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgfSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgfSwgW0NvbnRleHRUb1VzZSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50LCBvdmVycmlkZGVuQ29udGV4dFZhbHVlXSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZDtcbiAgICB9XG4gICAgY29uc3QgX0Nvbm5lY3QgPSBSZWFjdC5tZW1vKENvbm5lY3RGdW5jdGlvbik7XG4gICAgY29uc3QgQ29ubmVjdCA9IF9Db25uZWN0O1xuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IENvbm5lY3RGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIGlmIChmb3J3YXJkUmVmKSB7XG4gICAgICBjb25zdCBfZm9yd2FyZGVkID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgICAgICAgZnVuY3Rpb24gZm9yd2FyZENvbm5lY3RSZWYocHJvcHMsIHJlZikge1xuICAgICAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0LCB7IC4uLnByb3BzLCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmOiByZWYgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBmb3J3YXJkZWQgPSBfZm9yd2FyZGVkO1xuICAgICAgZm9yd2FyZGVkLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICBmb3J3YXJkZWQuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKGZvcndhcmRlZCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgfVxuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaG9pc3ROb25SZWFjdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG4gIHJldHVybiB3cmFwV2l0aENvbm5lY3Q7XG59XG52YXIgY29ubmVjdF9kZWZhdWx0ID0gY29ubmVjdDtcblxuLy8gc3JjL2NvbXBvbmVudHMvUHJvdmlkZXIudHN4XG5mdW5jdGlvbiBQcm92aWRlcih7XG4gIHN0b3JlLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgc2VydmVyU3RhdGUsXG4gIHN0YWJpbGl0eUNoZWNrID0gXCJvbmNlXCIsXG4gIGlkZW50aXR5RnVuY3Rpb25DaGVjayA9IFwib25jZVwiXG59KSB7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGU6IHNlcnZlclN0YXRlID8gKCkgPT4gc2VydmVyU3RhdGUgOiB2b2lkIDAsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH07XG4gIH0sIFtzdG9yZSwgc2VydmVyU3RhdGUsIHN0YWJpbGl0eUNoZWNrLCBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tdKTtcbiAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gc3RvcmUuZ2V0U3RhdGUoKSwgW3N0b3JlXSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgc3Vic2NyaXB0aW9uIH0gPSBjb250ZXh0VmFsdWU7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicztcbiAgICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IHN0b3JlLmdldFN0YXRlKCkpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gdm9pZCAwO1xuICAgIH07XG4gIH0sIFtjb250ZXh0VmFsdWUsIHByZXZpb3VzU3RhdGVdKTtcbiAgY29uc3QgQ29udGV4dCA9IGNvbnRleHQgfHwgUmVhY3RSZWR1eENvbnRleHQ7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0VmFsdWUgfSwgY2hpbGRyZW4pO1xufVxudmFyIFByb3ZpZGVyX2RlZmF1bHQgPSBQcm92aWRlcjtcblxuLy8gc3JjL2hvb2tzL3VzZVN0b3JlLnRzXG5mdW5jdGlvbiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0KVxuICApO1xuICBjb25zdCB1c2VTdG9yZTIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdXNlUmVkdXhDb250ZXh0MigpO1xuICAgIHJldHVybiBzdG9yZTtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VTdG9yZTIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZVN0b3JlMlxuICB9KTtcbiAgcmV0dXJuIHVzZVN0b3JlMjtcbn1cbnZhciB1c2VTdG9yZSA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTdG9yZUhvb2soKTtcblxuLy8gc3JjL2hvb2tzL3VzZURpc3BhdGNoLnRzXG5mdW5jdGlvbiBjcmVhdGVEaXNwYXRjaEhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVN0b3JlMiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlU3RvcmUgOiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZURpc3BhdGNoMiA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlMigpO1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaDtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VEaXNwYXRjaDIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZURpc3BhdGNoMlxuICB9KTtcbiAgcmV0dXJuIHVzZURpc3BhdGNoMjtcbn1cbnZhciB1c2VEaXNwYXRjaCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVEaXNwYXRjaEhvb2soKTtcblxuLy8gc3JjL2V4cG9ydHMudHNcbnZhciBiYXRjaCA9IGRlZmF1bHROb29wQmF0Y2g7XG5cbi8vIHNyYy9pbmRleC50c1xuaW5pdGlhbGl6ZVVzZVNlbGVjdG9yKHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yMik7XG5pbml0aWFsaXplQ29ubmVjdChSZWFjdDIudXNlU3luY0V4dGVybmFsU3RvcmUpO1xuZXhwb3J0IHtcbiAgUHJvdmlkZXJfZGVmYXVsdCBhcyBQcm92aWRlcixcbiAgUmVhY3RSZWR1eENvbnRleHQsXG4gIGJhdGNoLFxuICBjb25uZWN0X2RlZmF1bHQgYXMgY29ubmVjdCxcbiAgY3JlYXRlRGlzcGF0Y2hIb29rLFxuICBjcmVhdGVTZWxlY3Rvckhvb2ssXG4gIGNyZWF0ZVN0b3JlSG9vayxcbiAgc2hhbGxvd0VxdWFsLFxuICB1c2VEaXNwYXRjaCxcbiAgdXNlU2VsZWN0b3IsXG4gIHVzZVN0b3JlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtcmVkdXgubWpzLm1hcCIsImltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtUTWFpblN0YXRlfSBmcm9tIFwiQHNyYy9hcHAvc3RvcmVzXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvciA9IHVzZVNlbGVjdG9yLndpdGhUeXBlczxUTWFpblN0YXRlPigpIiwiZXhwb3J0IGNvbnN0IHVzZVJhbmRvbSA9IChmcm9tID0gMCwgdG86IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHIgPSBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiAxMCAqKiAxNSlcbiAgICByZXR1cm4gZnJvbSArIHIgJSAodG8gKyAxKVxufSIsImV4cG9ydCB7dXNlQXBwU2VsZWN0b3J9IGZyb20gJy4vdXNlQXBwU2VsZWN0b3InXG5leHBvcnQge3VzZVJhbmRvbX0gZnJvbSAnLi91c2VSYW5kb20nIiwiaW1wb3J0IHdvcmRzIGZyb20gJy4vd29yZHMuanNvbidcbmltcG9ydCB7dXNlUmFuZG9tfSBmcm9tIFwiQHNyYy9zaGFyZWQvbGliXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRXb3JkcyA9ICgpID0+IHtcbiAgICByZXR1cm4gd29yZHNcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbVdvcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB1c2VSYW5kb20oMCwgd29yZHMubGVuZ3RoIC0gMSlcbiAgICByZXR1cm4gd29yZHNbcmFuZG9tSW5kZXhdXG59IiwiZXhwb3J0ICogZnJvbSAnLi9nZXRXb3JkcyciLCJpbXBvcnQge2NyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9ufSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHtUQ2hhciwgVEdhbWVTdGF0ZSwgVFNldFBvaW50ZXJQYXlsb2FkLCBUU2V0V29yZFBheWxvYWQsIFRXb3JkfSBmcm9tIFwiQHNyYy9lbnRpdGllcy9nYW1lL21vZGVsXCI7XG5pbXBvcnQge2dldFJhbmRvbVdvcmQsIGdldFdvcmRzfSBmcm9tIFwiQHNyYy9lbnRpdGllcy9nYW1lL2xpYlwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IFRHYW1lU3RhdGUgPSB7XG4gICAgd29yZHM6IHtcbiAgICAgICAgMTogJycsXG4gICAgICAgIDI6ICcnLFxuICAgICAgICAzOiAnJyxcbiAgICAgICAgNDogJycsXG4gICAgICAgIDU6ICcnLFxuICAgICAgICA2OiAnJ1xuICAgIH0sXG4gICAgd29yZE1hdGNoZXM6IHtcbiAgICAgICAgMTogW10sXG4gICAgICAgIDI6IFtdLFxuICAgICAgICAzOiBbXSxcbiAgICAgICAgNDogW10sXG4gICAgICAgIDU6IFtdLFxuICAgICAgICA2OiBbXVxuICAgIH0sXG4gICAgdXNlZENoYXJzOiB7fSxcbiAgICBwb2ludGVyOiAxLFxuICAgIGN1cnJlbnRXb3JkOiAnYmxhbmtfd29yZCcsXG4gICAgZ2FtZU92ZXI6IGZhbHNlLFxuICAgIGdhbWVXaW46IGZhbHNlLFxuICAgIHVua25vd25JbmRleDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjb25zdCBnYW1lU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2dhbWUnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgZ2V0UG9pbnRlcjogKHN0YXRlKSA9PiBzdGF0ZS5wb2ludGVyLFxuICAgICAgICBnZXRXb3JkQnlJZDogKHN0YXRlLCB3b3JkSWQ6IGtleW9mIFRHYW1lU3RhdGVbJ3dvcmRzJ10pID0+IHN0YXRlLndvcmRzW3dvcmRJZF0sXG4gICAgICAgIGdldEN1cnJlbnRXb3JkOiAoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRXb3JkLFxuICAgICAgICBnZXRNYXRjaEJ5SWQ6IChzdGF0ZSwgd29yZElkOiBrZXlvZiBUR2FtZVN0YXRlWyd3b3JkcyddKSA9PiBzdGF0ZS53b3JkTWF0Y2hlc1t3b3JkSWRdLFxuICAgICAgICBnZXRVc2VkQ2hhcnM6IChzdGF0ZSkgPT4gc3RhdGUudXNlZENoYXJzLFxuICAgICAgICBnZXRHYW1lT3ZlcjogKHN0YXRlKSA9PiBzdGF0ZS5nYW1lT3ZlcixcbiAgICAgICAgZ2V0R2FtZVdpbjogKHN0YXRlKSA9PiBzdGF0ZS5nYW1lV2luLFxuICAgICAgICBnZXRVbmtub3duSW5kZXg6IChzdGF0ZSkgPT4gc3RhdGUudW5rbm93bkluZGV4LFxuICAgIH0sXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0V29yZEJ5SWQ6IChzdGF0ZSwge3BheWxvYWR9OiBQYXlsb2FkQWN0aW9uPFRTZXRXb3JkUGF5bG9hZD4pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLndvcmRzW3BheWxvYWQud29yZElkXSA9IHBheWxvYWQudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UG9pbnRlcjogKHN0YXRlLCB7cGF5bG9hZH06IFBheWxvYWRBY3Rpb248VFNldFBvaW50ZXJQYXlsb2FkPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucG9pbnRlciA9IHBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgcHVzaFBvaW50ZWRDaGFyOiAoc3RhdGUsIHtwYXlsb2FkfTogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUud29yZHNbc3RhdGUucG9pbnRlcl0ubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLndvcmRzW3N0YXRlLnBvaW50ZXJdICs9IHBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcG9wUG9pbnRlZENoYXI6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFdvcmQgPSBzdGF0ZS53b3Jkc1tzdGF0ZS5wb2ludGVyXVxuICAgICAgICAgICAgc3RhdGUud29yZHNbc3RhdGUucG9pbnRlcl0gPSBjdXJyZW50V29yZC5zbGljZSgwLCBjdXJyZW50V29yZC5sZW5ndGggLSAxKVxuICAgICAgICB9LFxuICAgICAgICBlbnRlclBvaW50ZWRXb3JkOiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS53b3Jkc1tzdGF0ZS5wb2ludGVyXS5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucG9pbnRlciA8IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLndvcmRzW3N0YXRlLnBvaW50ZXJdID09PSBzdGF0ZS5jdXJyZW50V29yZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUud29yZE1hdGNoZXNbc3RhdGUucG9pbnRlcl0gPSBuZXcgQXJyYXkoNSkuZmlsbCgnbWF0Y2hlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5nYW1lV2luID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2V0V29yZHMoKS5pbmNsdWRlcyhzdGF0ZS53b3Jkc1tzdGF0ZS5wb2ludGVyXS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUud29yZHNbc3RhdGUucG9pbnRlcl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKGNoYXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jdXJyZW50V29yZC5pbmNsdWRlcyhjaGFyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhclN0YXR1cyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudFdvcmRbaW5kZXhdID09PSBjaGFyID8gJ21hdGNoZWQnIDogJ2luY2x1ZGVkJ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VkQ2hhcnNbY2hhciBhcyBUQ2hhcl0gPSBjaGFyU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS53b3JkTWF0Y2hlc1tzdGF0ZS5wb2ludGVyXS5wdXNoKGNoYXJTdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VkQ2hhcnNbY2hhciBhcyBUQ2hhcl0gPSAnd3JvbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS53b3JkTWF0Y2hlc1tzdGF0ZS5wb2ludGVyXS5wdXNoKCd3cm9uZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucG9pbnRlcisrXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51bmtub3duSW5kZXggPSBzdGF0ZS5wb2ludGVyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucG9pbnRlcisrIC8v0Y3RgtC+INC90YPQttC90L4g0LTQu9GPINGB0L3Rj9C90LjRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldEN1cnJlbnRXb3JkOiAoc3RhdGUsIHtwYXlsb2FkfTogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50V29yZCA9IHBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgc2V0R2FtZU92ZXI6IChzdGF0ZSwge3BheWxvYWR9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IHBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgc2V0TmV3R2FtZTogKHN0YXRlID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnBvaW50ZXIgPSAxXG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50V29yZCA9IGdldFJhbmRvbVdvcmQoKVxuICAgICAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSBpbml0aWFsU3RhdGUuZ2FtZU92ZXJcbiAgICAgICAgICAgIHN0YXRlLmdhbWVXaW4gPSBpbml0aWFsU3RhdGUuZ2FtZVdpblxuICAgICAgICAgICAgc3RhdGUud29yZHMgPSBpbml0aWFsU3RhdGUud29yZHNcbiAgICAgICAgICAgIHN0YXRlLnVzZWRDaGFycyA9IHt9XG4gICAgICAgICAgICBzdGF0ZS53b3JkTWF0Y2hlcyA9IGluaXRpYWxTdGF0ZS53b3JkTWF0Y2hlc1xuICAgICAgICAgICAgc3RhdGUudW5rbm93bkluZGV4ID0gaW5pdGlhbFN0YXRlLnVua25vd25JbmRleFxuICAgICAgICB9KSxcbiAgICAgICAgcmVtb3ZlVW5rbm93bkluZGV4OiAoc3RhdGUpID0+IHsgc3RhdGUudW5rbm93bkluZGV4ID0gdW5kZWZpbmVkIH1cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3Qge1xuICAgIHNldFdvcmRCeUlkLFxuICAgIHNldFBvaW50ZXIsXG4gICAgc2V0Q3VycmVudFdvcmQsXG4gICAgcHVzaFBvaW50ZWRDaGFyLFxuICAgIHBvcFBvaW50ZWRDaGFyLFxuICAgIGVudGVyUG9pbnRlZFdvcmQsXG4gICAgc2V0R2FtZU92ZXIsXG4gICAgc2V0TmV3R2FtZSxcbiAgICByZW1vdmVVbmtub3duSW5kZXhcbn0gPSBnYW1lU2xpY2UuYWN0aW9uc1xuXG5leHBvcnQgY29uc3Qge1xuICAgIGdldFBvaW50ZXIsXG4gICAgZ2V0V29yZEJ5SWQsXG4gICAgZ2V0Q3VycmVudFdvcmQsXG4gICAgZ2V0TWF0Y2hCeUlkLFxuICAgIGdldFVzZWRDaGFycyxcbiAgICBnZXRHYW1lT3ZlcixcbiAgICBnZXRHYW1lV2luLFxuICAgIGdldFVua25vd25JbmRleFxufSA9IGdhbWVTbGljZS5nZXRTZWxlY3RvcnMoKVxuIiwiZXhwb3J0ICogZnJvbSAnLi9nYW1lLnNsaWNlJ1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcyciLCJpbXBvcnQgKiBhcyBzIGZyb20gJy4vV29yZElucHV0Lm1vZHVsZS5jc3MnXG5pbXBvcnQge3JlbW92ZVVua25vd25JbmRleCwgVENoYXJNYXRjaCwgVFdvcmRJbnB1dCwgVFdvcmRNYXRjaH0gZnJvbSBcIkBzcmMvZW50aXRpZXMvZ2FtZS9tb2RlbFwiO1xuaW1wb3J0IHttZW1vLCB1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgdmFsdWU6IFRXb3JkSW5wdXQsXG4gICAgbWF0Y2hlczogVFdvcmRNYXRjaCxcbiAgICB1bmtub3duOiBib29sZWFuLFxufVxuXG5jb25zdCBXb3JkSW5wdXQgPSBtZW1vKChwOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IHdvcmRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gICAgY29uc3QgbGV0dGVycyA9IHAudmFsdWUucGFkRW5kKDUsICcgJylcbiAgICBjb25zdCBjb250YWluZXJDbGFzc2VzID0gW3Mud29yZF1cblxuICAgIGlmIChwLnVua25vd24pIHtcbiAgICAgICAgY29udGFpbmVyQ2xhc3Nlcy5wdXNoKHMudW5rbm93bilcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZVVua25vd25JbmRleCgpKVxuICAgICAgICB9LCA1MDApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzZXMuam9pbignICcpfSByZWY9e3dvcmRSZWZ9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldHRlcnMuc3BsaXQoJycpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGxldHRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gW3MubGV0dGVyXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAubWF0Y2hlc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzOiBSZWNvcmQ8VENoYXJNYXRjaCwgYW55PiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3cm9uZyc6IHMud3JvbmdfY2hhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYXRjaGVkJzogcy5tYXRjaGVkX2NoYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jbHVkZWQnOiBzLmluY2x1ZGVkX2NoYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goc3RhdHVzW3AubWF0Y2hlc1tpbmRleF1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2luKCcgJyl9PntsZXR0ZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSlcblxuZXhwb3J0IHtXb3JkSW5wdXR9IiwiZXhwb3J0IHtXb3JkSW5wdXR9IGZyb20gJy4vV29yZElucHV0JyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxudmFyIF8xID0gXCJjdGRudVB3RnRiNDlmN3N0dmJ0T1wiO1xudmFyIF8yID0gXCJPdTc2SXBYS0U3V21Bc0xJRDRmWlwiO1xudmFyIF8zID0gXCJ5TjVFM1Q0OXFRNUJHM3pEUmRJT1wiO1xudmFyIF80ID0gXCJ6WG9LRWQxNFVGbjFUZU5EaXJJdFwiO1xudmFyIF81ID0gXCJENUVUakhDTjBvZnc0RUNHWDFodFwiO1xuZXhwb3J0IHsgXzEgYXMgXCJpbmNsdWRlZFwiLCBfMiBhcyBcImtleWJvYXJkX2NvbnRhaW5lclwiLCBfMyBhcyBcImtleWJvYXJkX3Jvd1wiLCBfNCBhcyBcIm1hdGNoZWRcIiwgXzUgYXMgXCJ3cm9uZ1wiIH1cbiIsImltcG9ydCAqIGFzIHMgZnJvbSAnLi9LZXlib2FyZC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuICAgIGVudGVyUG9pbnRlZFdvcmQsXG4gICAgZ2V0VXNlZENoYXJzLFxuICAgIHBvcFBvaW50ZWRDaGFyLFxuICAgIHB1c2hQb2ludGVkQ2hhcixcbiAgICBUQ2hhcixcbiAgICBUQ2hhck1hdGNoXG59IGZyb20gXCJAc3JjL2VudGl0aWVzL2dhbWUvbW9kZWxcIjtcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlQXBwU2VsZWN0b3J9IGZyb20gXCJAc3JjL3NoYXJlZC9saWJcIjtcblxuZXhwb3J0IGNvbnN0IEtleWJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZWRDaGFycyA9XG4gICAgICAgIHVzZUFwcFNlbGVjdG9yKHN0YXRlID0+IGdldFVzZWRDaGFycyhzdGF0ZS5nYW1lKSlcblxuICAgIGNvbnN0IHJvd3MgPSBbXG4gICAgICAgIFsn0LknLCAn0YYnLCAn0YMnLCAn0LonLCAn0LUnLCAn0L0nLCAn0LMnLCAn0YgnLCAn0YknLCAn0LcnLCAn0YUnLCAn0YonXSxcbiAgICAgICAgWyfRhCcsICfRiycsICfQsicsICfQsCcsICfQvycsICfRgCcsICfQvicsICfQuycsICfQtCcsICfQticsICfRjSddLFxuICAgICAgICBbJ9GPJywgJ9GHJywgJ9GBJywgJ9C8JywgJ9C4JywgJ9GCJywgJ9GMJywgJ9CxJywgJ9GOJ11cbiAgICBdXG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICAgIGNvbnN0IGhhbmRsZUtleVVwID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICAgICAgZGlzcGF0Y2gocG9wUG9pbnRlZENoYXIoKSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChlbnRlclBvaW50ZWRXb3JkKCkpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL1vQkC3Qr9CwLdGPXS9pXG4gICAgICAgIGlmIChyZWdleC50ZXN0KGUua2V5KSkge1xuICAgICAgICAgICAgZGlzcGF0Y2gocHVzaFBvaW50ZWRDaGFyKGUua2V5LnRvTG93ZXJDYXNlKCkpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVLZXlVcCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZUtleVVwKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBwdXNoQ2hhciA9IChpOiBzdHJpbmcpID0+IHtcbiAgICAgICAgZGlzcGF0Y2gocHVzaFBvaW50ZWRDaGFyKGkpKVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXR1c2VzOiBSZWNvcmQ8VENoYXJNYXRjaCwgc3RyaW5nPiA9IHtcbiAgICAgICAgJ3dyb25nJzogcy53cm9uZyxcbiAgICAgICAgJ21hdGNoZWQnOiBzLm1hdGNoZWQsXG4gICAgICAgICdpbmNsdWRlZCc6IHMuaW5jbHVkZWQsXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2xhc3MgPSAoY2hhcjogVENoYXIpID0+IHVzZWRDaGFyc1tjaGFyXSA/IHN0YXR1c2VzW3VzZWRDaGFyc1tjaGFyXSBhcyBUQ2hhck1hdGNoXTogJydcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5rZXlib2FyZF9jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmtleWJvYXJkX3Jvd30+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzWzBdLm1hcChpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3MoaSBhcyBUQ2hhcil9IG9uQ2xpY2s9eygpID0+IHB1c2hDaGFyKGkpfT57aX08L2Rpdj4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmtleWJvYXJkX3Jvd30+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzWzFdLm1hcChpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3MoaSBhcyBUQ2hhcil9IG9uQ2xpY2s9eygpID0+IHB1c2hDaGFyKGkpfT57aX08L2Rpdj4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmtleWJvYXJkX3Jvd30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZGlzcGF0Y2gocG9wUG9pbnRlZENoYXIoKSl9PmJhY2tzcGFjZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7cm93c1syXS5tYXAoaSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzKGkgYXMgVENoYXIpfSBvbkNsaWNrPXsoKSA9PiBwdXNoQ2hhcihpKX0+e2l9PC9kaXY+KX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChlbnRlclBvaW50ZWRXb3JkKCkpfT5FbnRlcjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJleHBvcnQgKiBmcm9tICcuL0tleWJvYXJkJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbnZhciBfMSA9IFwiZUpmcGhjS2ZHQUoxUjBOcmFsTEJcIjtcbnZhciBfMiA9IFwiQnpsMlczdnd6YlYzMmtveFYwRXFcIjtcbnZhciBfMyA9IFwiUXlDdlRNaTBDUklISFRFbGI1QkRcIjtcbnZhciBfNCA9IFwiYmFCMGJQbEJDbGNmQmEzUGdFTHBcIjtcbnZhciBfNSA9IFwieFk3VWFxMkRsc2VadGlDck5zZ2tcIjtcbmV4cG9ydCB7IF8xIGFzIFwiYnV0dG9uXCIsIF8yIGFzIFwiY29udGFpbmVyXCIsIF8zIGFzIFwiY3VycmVudF93b3JkXCIsIF80IGFzIFwiY3VycmVudF93b3JkX2NvbnRhaW5lclwiLCBfNSBhcyBcImhlYWRpbmdcIiB9XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbnZhciBfMSA9IFwicU1VeVN0VXZZYVVXT2p4TmRPZjNcIjtcbnZhciBfMiA9IFwiaDZZNjdmVEVwdmZBbVR6dmVISzhcIjtcbnZhciBfMyA9IFwiYkthX3cxNVZlVVAyTTVCaVhvaEtcIjtcbmV4cG9ydCB7IF8xIGFzIFwibW9kYWxfY29udGFpbmVyXCIsIF8yIGFzIFwib3ZlcmxheVwiLCBfMyBhcyBcInNob3dNb2RhbFwiIH1cbiIsImltcG9ydCB7UHJvcHNXaXRoQ2hpbGRyZW59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgcyBmcm9tICcuL01vZGFsLm1vZHVsZS5jc3MnXG5pbXBvcnQge2NyZWF0ZVBvcnRhbH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5leHBvcnQgdHlwZSBUTW9kYWwgPSB7XG4gICAgb3BlbjogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgTW9kYWwgPSAocCA6IFByb3BzV2l0aENoaWxkcmVuPFRNb2RhbD4pID0+IHtcbiAgICByZXR1cm4gcC5vcGVuICYmIGNyZWF0ZVBvcnRhbChcbiAgICAgICAgKDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5vdmVybGF5fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb2RhbF9jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7cC5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz4pLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtcG9ydGFsJykgYXMgSFRNTEVsZW1lbnQsXG4gICAgKVxufSIsImV4cG9ydCAqIGZyb20gJy4vTW9kYWwnIiwiaW1wb3J0ICogYXMgcyBmcm9tICcuL0dhbWVNb2RhbC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtNb2RhbH0gZnJvbSBcIkBzcmMvc2hhcmVkL3VpL01vZGFsXCI7XG5pbXBvcnQge3VzZUFwcFNlbGVjdG9yfSBmcm9tIFwiQHNyYy9zaGFyZWQvbGliXCI7XG5pbXBvcnQge2dldEN1cnJlbnRXb3JkLCBnZXRHYW1lT3Zlciwgc2V0TmV3R2FtZX0gZnJvbSBcIkBzcmMvZW50aXRpZXMvZ2FtZS9tb2RlbFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmV4cG9ydCBjb25zdCBHYW1lT3Zlck1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IGlzR2FtZU92ZXIgPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBnZXRHYW1lT3ZlcihzdGF0ZS5nYW1lKSlcbiAgICBjb25zdCBjdXJyZW50V29yZCA9IHVzZUFwcFNlbGVjdG9yKHN0YXRlID0+IGdldEN1cnJlbnRXb3JkKHN0YXRlLmdhbWUpKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNb2RhbCBvcGVuPXtpc0dhbWVPdmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzLmhlYWRpbmd9PtCY0LPRgNCwINC+0LrQvtC90YfQtdC90LA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jdXJyZW50X3dvcmRfY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgINCX0LDQs9Cw0LTQvtC90L3QvtC1INGB0LvQvtCy0L46IDxzcGFuIGNsYXNzTmFtZT17cy5jdXJyZW50X3dvcmR9PntjdXJyZW50V29yZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXROZXdHYW1lKCkpfVxuICAgICAgICAgICAgICAgICAgICA+0J3QvtCy0LDRjyDQuNCz0YDQsDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiZXhwb3J0ICogZnJvbSAnLi9HYW1lT3Zlck1vZGFsJyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxudmFyIF8xID0gXCJsbGlvY2U0N1hSY2M1c2VRUE5BUVwiO1xudmFyIF8yID0gXCJfMjRrbWpRcVJUazNTbVVuZUNHQXdcIjtcbnZhciBfMyA9IFwiSF9NdUZfUTVVdm41TWRkWEt2cUFcIjtcbmV4cG9ydCB7IF8xIGFzIFwiYnV0dG9uXCIsIF8yIGFzIFwiY29udGFpbmVyXCIsIF8zIGFzIFwiaGVhZGluZ1wiIH1cbiIsImltcG9ydCAqIGFzIHMgZnJvbSAnLi9HYW1lV2luTW9kYWwubW9kdWxlLmNzcydcbmltcG9ydCB7TW9kYWx9IGZyb20gXCJAc3JjL3NoYXJlZC91aS9Nb2RhbFwiO1xuaW1wb3J0IHt1c2VBcHBTZWxlY3Rvcn0gZnJvbSBcIkBzcmMvc2hhcmVkL2xpYlwiO1xuaW1wb3J0IHtnZXRHYW1lV2luLCBzZXROZXdHYW1lfSBmcm9tIFwiQHNyYy9lbnRpdGllcy9nYW1lL21vZGVsXCI7XG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWVXaW5Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgICBjb25zdCBnYW1lV2luID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gZ2V0R2FtZVdpbihzdGF0ZS5nYW1lKSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWwgb3Blbj17Z2FtZVdpbn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17cy5oZWFkaW5nfT7QktGLINC+0YLQs9Cw0LTQsNC70Lgg0YHQu9C+0LLQviE8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0TmV3R2FtZSgpKX1cbiAgICAgICAgICAgICAgICAgICAgPtCd0L7QstCw0Y8g0LjQs9GA0LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vR2FtZVdpbk1vZGFsJyIsImltcG9ydCAqIGFzIHMgZnJvbSAnLi9HYW1lQ29udGFpbmVyLm1vZHVsZS5jc3MnXG5pbXBvcnQge1dvcmRJbnB1dH0gZnJvbSBcIkBzcmMvcGFnZXMvZ2FtZS91aS9Xb3JkSW5wdXRcIjtcbmltcG9ydCB7Z2V0TWF0Y2hCeUlkLCBnZXRVbmtub3duSW5kZXgsIGdldFdvcmRCeUlkLCBzZXRDdXJyZW50V29yZCwgVEdhbWVTdGF0ZX0gZnJvbSBcIkBzcmMvZW50aXRpZXMvZ2FtZS9tb2RlbFwiO1xuaW1wb3J0IHt1c2VBcHBTZWxlY3Rvcn0gZnJvbSBcIkBzcmMvc2hhcmVkL2xpYlwiO1xuaW1wb3J0IHtLZXlib2FyZH0gZnJvbSBcIkBzcmMvcGFnZXMvZ2FtZS91aS9LZXlib2FyZFwiO1xuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge2dldFJhbmRvbVdvcmR9IGZyb20gXCJAc3JjL2VudGl0aWVzL2dhbWUvbGliXCI7XG5pbXBvcnQge0dhbWVPdmVyTW9kYWx9IGZyb20gXCJAc3JjL3BhZ2VzL2dhbWUvdWkvR2FtZU92ZXJNb2RhbFwiO1xuaW1wb3J0IHtHYW1lV2luTW9kYWx9IGZyb20gXCJAc3JjL3BhZ2VzL2dhbWUvdWkvR2FtZVdpbk1vZGFsXCI7XG5cbmNvbnN0IEdhbWVDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHVua25vd25JbmRleCA9IHVzZUFwcFNlbGVjdG9yKHN0YXRlID0+IGdldFVua25vd25JbmRleChzdGF0ZS5nYW1lKSlcblxuICAgIGNvbnN0IHdvcmRzID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHdvcmQgPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PlxuICAgICAgICAgICAgICAgIGdldFdvcmRCeUlkKHN0YXRlLmdhbWUsIGkgYXMga2V5b2YgVEdhbWVTdGF0ZVsnd29yZHMnXSkpIGFzIHN0cmluZ1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PlxuICAgICAgICAgICAgICAgIGdldE1hdGNoQnlJZChzdGF0ZS5nYW1lLCBpIGFzIGtleW9mIFRHYW1lU3RhdGVbJ3dvcmRzJ10pKVxuICAgICAgICAgICAgc3RhY2sucHVzaCh7IHdvcmQsIG1hdGNoIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YWNrXG4gICAgfSkoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFdvcmQoZ2V0UmFuZG9tV29yZCgpKSlcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jkcy5tYXAoKHt3b3JkLCBtYXRjaH0sIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JkSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXM9e21hdGNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmtub3duPXt1bmtub3duSW5kZXggPyB1bmtub3duSW5kZXggLSAxID09PSBpbmRleCA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEtleWJvYXJkLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEdhbWVPdmVyTW9kYWwvPlxuICAgICAgICAgICAgPEdhbWVXaW5Nb2RhbC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IHtHYW1lQ29udGFpbmVyfSIsImV4cG9ydCB7R2FtZUNvbnRhaW5lcn0gZnJvbSAnLi9HYW1lQ29udGFpbmVyJyIsImltcG9ydCB7R2FtZUNvbnRhaW5lcn0gZnJvbSBcIkBzcmMvcGFnZXMvZ2FtZS91aS9HYW1lQ29udGFpbmVyXCI7XG5cbmNvbnN0IEdhbWVQYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8R2FtZUNvbnRhaW5lci8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IHtHYW1lUGFnZX1cbiIsImV4cG9ydCB7R2FtZVBhZ2V9IGZyb20gJy4vR2FtZVBhZ2UnIiwiZXhwb3J0IHtHYW1lUGFnZX0gZnJvbSAnLi91aSciLCJpbXBvcnQge2NvbmZpZ3VyZVN0b3JlfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHtnYW1lU2xpY2V9IGZyb20gXCJAc3JjL2VudGl0aWVzL2dhbWUvbW9kZWxcIjtcblxuZXhwb3J0IGNvbnN0IG1haW5TdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICAgIFtnYW1lU2xpY2UubmFtZV06IGdhbWVTbGljZS5yZWR1Y2VyXG4gICAgfVxufSlcblxuZXhwb3J0IHR5cGUgVE1haW5TdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIG1haW5TdG9yZS5nZXRTdGF0ZT47IiwiZXhwb3J0ICogZnJvbSAnLi9tYWluU3RvcmUnIiwiaW1wb3J0IHtQcm9wc1dpdGhDaGlsZHJlbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7bWFpblN0b3JlfSBmcm9tICdAc3JjL2FwcC9zdG9yZXMnXG5cbmV4cG9ydCBjb25zdCBNYWluUHJvdmlkZXIgPSAoe2NoaWxkcmVufTogUHJvcHNXaXRoQ2hpbGRyZW4pID0+IHtcbiAgICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17bWFpblN0b3JlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvUHJvdmlkZXI+XG4gICAgKVxufSIsImV4cG9ydCAqIGZyb20gJy4vTWFpblByb3ZpZGVyJyIsImltcG9ydCAnQHNyYy9hcHAvc3R5bGVzL2dsb2JhbC5jc3MnXG5pbXBvcnQge0dhbWVQYWdlfSBmcm9tICdAc3JjL3BhZ2VzL2dhbWUnXG5pbXBvcnQge01haW5Qcm92aWRlcn0gZnJvbSBcIkBzcmMvYXBwL3Byb3ZpZGVyc1wiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNYWluUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPEdhbWVQYWdlLz5cbiAgICAgICAgICAgIDwvTWFpblByb3ZpZGVyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCB7QXBwfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IHtBcHB9IGZyb20gXCJAc3JjL2FwcC9BcHBcIjtcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cbmlmIChyb290RWxlbWVudCkge1xuICAgIGNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KHJvb3RFbGVtZW50KVxuICAgIHJvb3QucmVuZGVyKDxBcHAvPilcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==