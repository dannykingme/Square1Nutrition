/*! jQuery v2.1.0-pre | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}(this,function(a){var b=[],c=b.slice,d=b.concat,e=b.push,f=b.indexOf,g={},h=g.toString,i=g.hasOwnProperty,j="".trim,k={},l=a.document,m=a.jQuery,n=a.$,o="2.1.0-pre",p=function(a,b){return new p.fn.init(a,b)},q=/^-ms-/,r=/-([\da-z])/gi,s=function(a,b){return b.toUpperCase()};p.fn=p.prototype={jquery:o,constructor:p,selector:"",length:0,toArray:function(){return c.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:c.call(this)},pushStack:function(a){var b=p.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return p.each(this,a,b)},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(c.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:e,sort:b.sort,splice:b.splice},p.extend=p.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||p.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(p.isPlainObject(d)||(e=p.isArray(d)))?(e?(e=!1,f=c&&p.isArray(c)?c:[]):f=c&&p.isPlainObject(c)?c:{},g[b]=p.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},p.extend({expando:"jQuery"+(o+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},noConflict:function(b){return a.$===p&&(a.$=n),b&&a.jQuery===p&&(a.jQuery=m),p},isFunction:function(a){return"function"===p.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==p.type(a)||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!i.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?g[h.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=p.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(q,"ms-").replace(r,s)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=t(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":j.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(t(Object(a))?p.merge(c,"string"==typeof a?[a]:a):e.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:f.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var e,f=0,g=a.length,h=t(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,c),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&i.push(e);return d.apply([],i)},guid:1,proxy:function(a,b){var d,e,f;return"string"==typeof b&&(d=a[b],b=a,a=d),p.isFunction(a)?(e=c.call(arguments,2),f=function(){return a.apply(b||this,e.concat(c.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):void 0},now:Date.now,support:k}),p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){g["[object "+b+"]"]=b.toLowerCase()});function t(a){var b=a.length,c=p.type(a);return"function"===c||p.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var u=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t="sizzle"+-new Date,u=a.document,v=0,w=0,x=fb(),y=fb(),z=fb(),A=function(a,b){return a===b&&(k=!0),0},B="undefined",C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=E.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")"+L+"*(?:([*^$|!~]?=)"+L+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+N+")|)|)"+L+"*\\]",P=":("+M+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+O.replace(3,8)+")*)|.*)\\)|)",Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(P),V=new RegExp("^"+N+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,ab=/'|\\/g,bb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),cb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{H.apply(E=I.call(u.childNodes),u.childNodes),E[u.childNodes.length].nodeType}catch(db){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function eb(a,b,d,e){var f,g,h,i,j,k,n,q,r,v;if((b?b.ownerDocument||b:u)!==m&&l(b),b=b||m,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(o&&!e){if(f=$.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&s(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!p||!p.test(a))){if(q=n=t,r=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){k=pb(a),(n=b.getAttribute("id"))?q=n.replace(ab,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=k.length;while(j--)k[j]=q+qb(k[j]);r=_.test(a)&&nb(b.parentNode)||b,v=k.join(",")}if(v)try{return H.apply(d,r.querySelectorAll(v)),d}catch(w){}finally{n||b.removeAttribute("id")}}}return yb(a.replace(Q,"$1"),b,d,e)}function fb(){var a=[];function b(c,d){return a.push(c+" ")>e.cacheLength&&delete b[a.shift()],b[c+" "]=d}return b}function gb(a){return a[t]=!0,a}function hb(a){var b=m.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ib(a,b){var c=a.split("|"),d=a.length;while(d--)e.attrHandle[c[d]]=b}function jb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function mb(a){return gb(function(b){return b=+b,gb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function nb(a){return a&&typeof a.getElementsByTagName!==B&&a}c=eb.support={},g=eb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},l=eb.setDocument=function(a){var b,d=a?a.ownerDocument||a:u,f=d.defaultView;return d!==m&&9===d.nodeType&&d.documentElement?(m=d,n=d.documentElement,o=!g(d),f&&f!==f.top&&(f.addEventListener?f.addEventListener("unload",function(){l()},!1):f.attachEvent&&f.attachEvent("onunload",function(){l()})),c.attributes=hb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=hb(function(a){return a.appendChild(d.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(d.getElementsByClassName)&&hb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=hb(function(a){return n.appendChild(a).id=t,!d.getElementsByName||!d.getElementsByName(t).length}),c.getById?(e.find.ID=function(a,b){if(typeof b.getElementById!==B&&o){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},e.filter.ID=function(a){var b=a.replace(bb,cb);return function(a){return a.getAttribute("id")===b}}):(delete e.find.ID,e.filter.ID=function(a){var b=a.replace(bb,cb);return function(a){var c=typeof a.getAttributeNode!==B&&a.getAttributeNode("id");return c&&c.value===b}}),e.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==B?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},e.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==B&&o?b.getElementsByClassName(a):void 0},q=[],p=[],(c.qsa=Z.test(d.querySelectorAll))&&(hb(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||p.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll(":checked").length||p.push(":checked")}),hb(function(a){var b=d.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("t",""),a.querySelectorAll("[t^='']").length&&p.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll(":enabled").length||p.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),p.push(",.*:")})),(c.matchesSelector=Z.test(r=n.webkitMatchesSelector||n.mozMatchesSelector||n.oMatchesSelector||n.msMatchesSelector))&&hb(function(a){c.disconnectedMatch=r.call(a,"div"),r.call(a,"[s!='']:x"),q.push("!=",P)}),p=p.length&&new RegExp(p.join("|")),q=q.length&&new RegExp(q.join("|")),b=Z.test(n.compareDocumentPosition),s=b||Z.test(n.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},A=b?function(a,b){if(a===b)return k=!0,0;var e=!a.compareDocumentPosition-!b.compareDocumentPosition;return e?e:(e=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&e||!c.sortDetached&&b.compareDocumentPosition(a)===e?a===d||a.ownerDocument===u&&s(u,a)?-1:b===d||b.ownerDocument===u&&s(u,b)?1:j?J.call(j,a)-J.call(j,b):0:4&e?-1:1)}:function(a,b){if(a===b)return k=!0,0;var c,e=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===d?-1:b===d?1:f?-1:g?1:j?J.call(j,a)-J.call(j,b):0;if(f===g)return jb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[e]===i[e])e++;return e?jb(h[e],i[e]):h[e]===u?-1:i[e]===u?1:0},d):m},eb.matches=function(a,b){return eb(a,null,null,b)},eb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==m&&l(a),b=b.replace(T,"='$1']"),!(!c.matchesSelector||!o||q&&q.test(b)||p&&p.test(b)))try{var d=r.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return eb(b,m,null,[a]).length>0},eb.contains=function(a,b){return(a.ownerDocument||a)!==m&&l(a),s(a,b)},eb.attr=function(a,b){(a.ownerDocument||a)!==m&&l(a);var d=e.attrHandle[b.toLowerCase()],f=d&&D.call(e.attrHandle,b.toLowerCase())?d(a,b,!o):void 0;return void 0!==f?f:c.attributes||!o?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},eb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},eb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(k=!c.detectDuplicates,j=!c.sortStable&&a.slice(0),a.sort(A),k){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return j=null,a},f=eb.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(3===e||4===e)return a.nodeValue}else while(b=a[d++])c+=f(b);return c},e=eb.selectors={cacheLength:50,createPseudo:gb,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(bb,cb),a[3]=(a[4]||a[5]||"").replace(bb,cb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||eb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&eb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return W.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&U.test(c)&&(b=pb(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(bb,cb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=x[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&x(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==B&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=eb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[t]||(q[t]={}),j=k[a]||[],n=j[0]===v&&j[1],m=j[0]===v&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[v,n,m];break}}else if(s&&(j=(b[t]||(b[t]={}))[a])&&j[0]===v)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[t]||(l[t]={}))[a]=[v,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||eb.error("unsupported pseudo: "+a);return d[t]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?gb(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=J.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:gb(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[t]?gb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:gb(function(a){return function(b){return eb(a,b).length>0}}),contains:gb(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),lang:gb(function(a){return V.test(a||"")||eb.error("unsupported lang: "+a),a=a.replace(bb,cb).toLowerCase(),function(b){var c;do if(c=o?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===n},focus:function(a){return a===m.activeElement&&(!m.hasFocus||m.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!e.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:mb(function(){return[0]}),last:mb(function(a,b){return[b-1]}),eq:mb(function(a,b,c){return[0>c?c+b:c]}),even:mb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:mb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:mb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:mb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},e.pseudos.nth=e.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})e.pseudos[b]=kb(b);for(b in{submit:!0,reset:!0})e.pseudos[b]=lb(b);function ob(){}ob.prototype=e.filters=e.pseudos,e.setFilters=new ob;function pb(a,b){var c,d,f,g,h,i,j,k=y[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){(!c||(d=R.exec(h)))&&(d&&(h=h.slice(d[0].length)||h),i.push(f=[])),c=!1,(d=S.exec(h))&&(c=d.shift(),f.push({value:c,type:d[0].replace(Q," ")}),h=h.slice(c.length));for(g in e.filter)!(d=W[g].exec(h))||j[g]&&!(d=j[g](d))||(c=d.shift(),f.push({value:c,type:g,matches:d}),h=h.slice(c.length));if(!c)break}return b?h.length:h?eb.error(a):y(a,i).slice(0)}function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var e=b.dir,f=c&&"parentNode"===e,g=w++;return b.first?function(b,c,d){while(b=b[e])if(1===b.nodeType||f)return a(b,c,d)}:function(b,c,h){var i,j,k,l=v+" "+g;if(h){while(b=b[e])if((1===b.nodeType||f)&&a(b,c,h))return!0}else while(b=b[e])if(1===b.nodeType||f)if(k=b[t]||(b[t]={}),(j=k[e])&&j[0]===l){if((i=j[1])===!0||i===d)return i===!0}else if(j=k[e]=[l],j[1]=a(b,c,h)||d,j[1]===!0)return!0}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function ub(a,b,c,d,e,f){return d&&!d[t]&&(d=ub(d)),e&&!e[t]&&(e=ub(e,f)),gb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||xb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:tb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=tb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=tb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function vb(a){for(var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],j=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return J.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==i)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=e.relative[a[j].type])m=[rb(sb(m),c)];else{if(c=e.filter[a[j].type].apply(null,a[j].matches),c[t]){for(d=++j;f>d;d++)if(e.relative[a[d].type])break;return ub(j>1&&sb(m),j>1&&qb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(Q,"$1"),c,d>j&&vb(a.slice(j,d)),f>d&&vb(a=a.slice(d)),f>d&&qb(a))}m.push(c)}return sb(m)}function wb(a,b){var c=0,f=b.length>0,g=a.length>0,h=function(h,j,k,l,n){var o,p,q,r=0,s="0",t=h&&[],u=[],w=i,x=h||g&&e.find.TAG("*",n),y=v+=null==w?1:Math.random()||.1,z=x.length;for(n&&(i=j!==m&&j,d=c);s!==z&&null!=(o=x[s]);s++){if(g&&o){p=0;while(q=a[p++])if(q(o,j,k)){l.push(o);break}n&&(v=y,d=++c)}f&&((o=!q&&o)&&r--,h&&t.push(o))}if(r+=s,f&&s!==r){p=0;while(q=b[p++])q(t,u,j,k);if(h){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(l));u=tb(u)}H.apply(l,u),n&&!h&&u.length>0&&r+b.length>1&&eb.uniqueSort(l)}return n&&(v=y,i=w),t};return f?gb(h):h}h=eb.compile=function(a,b){var c,d=[],e=[],f=z[a+" "];if(!f){b||(b=pb(a)),c=b.length;while(c--)f=vb(b[c]),f[t]?d.push(f):e.push(f);f=z(a,wb(e,d))}return f};function xb(a,b,c){for(var d=0,e=b.length;e>d;d++)eb(a,b[d],c);return c}function yb(a,b,d,f){var g,i,j,k,l,m=pb(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&o&&e.relative[i[1].type]){if(b=(e.find.ID(j.matches[0].replace(bb,cb),b)||[])[0],!b)return d;a=a.slice(i.shift().value.length)}g=W.needsContext.test(a)?0:i.length;while(g--){if(j=i[g],e.relative[k=j.type])break;if((l=e.find[k])&&(f=l(j.matches[0].replace(bb,cb),_.test(i[0].type)&&nb(b.parentNode)||b))){if(i.splice(g,1),a=f.length&&qb(i),!a)return H.apply(d,f),d;break}}}return h(a,m)(f,b,!o,d,_.test(a)&&nb(b.parentNode)||b),d}return c.sortStable=t.split("").sort(A).join("")===t,c.detectDuplicates=!!k,l(),c.sortDetached=hb(function(a){return 1&a.compareDocumentPosition(m.createElement("div"))}),hb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ib("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&hb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ib("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),hb(function(a){return null==a.getAttribute("disabled")})||ib(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),eb}(a);p.find=u,p.expr=u.selectors,p.expr[":"]=p.expr.pseudos,p.unique=u.uniqueSort,p.text=u.getText,p.isXMLDoc=u.isXML,p.contains=u.contains;var v=p.expr.match.needsContext,w=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,x=/^.[^:#\[\.,]*$/;function y(a,b,c){if(p.isFunction(b))return p.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return p.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(x.test(b))return p.filter(b,a,c);b=p.filter(b,a)}return p.grep(a,function(a){return f.call(b,a)>=0!==c})}p.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?p.find.matchesSelector(d,a)?[d]:[]:p.find.matches(a,p.grep(b,function(a){return 1===a.nodeType}))},p.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(p(a).filter(function(){for(b=0;e>b;b++)if(p.contains(d[b],this))return!0}));for(b=0;e>b;b++)p.find(a,d[b],c);return c=this.pushStack(e>1?p.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(y(this,a||[],!1))},not:function(a){return this.pushStack(y(this,a||[],!0))},is:function(a){return!!y(this,"string"==typeof a&&v.test(a)?p(a):a||[],!1).length}});var z,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=p.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||z).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof p?b[0]:b,p.merge(this,p.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),w.test(c[1])&&p.isPlainObject(b))for(c in b)p.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):p.isFunction(a)?"undefined"!=typeof z.ready?z.ready(a):a(p):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))};B.prototype=p.fn,z=p(l);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};p.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&p(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),p.fn.extend({has:function(a){var b=p(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(p.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=v.test(a)||"string"!=typeof a?p(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&p.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?p.unique(f):f)},index:function(a){return a?"string"==typeof a?f.call(p(a),this[0]):f.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){var c="string"==typeof a?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(p.unique(d))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){while((a=a[b])&&1!==a.nodeType);return a}p.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return a.contentDocument||p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=p.filter(d,e)),this.length>1&&(D[a]||p.unique(e),C.test(a)&&e.reverse()),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return p.each(a.match(F)||[],function(a,c){b[c]=!0}),b}p.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):p.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){p.each(b,function(b,c){var d=p.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?p.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,f){var g=p.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,d=c.call(arguments),e=d.length,f=1!==e||a&&p.isFunction(a.promise)?e:0,g=1===f?a:p.Deferred(),h=function(a,b,d){return function(e){b[a]=this,d[a]=arguments.length>1?c.call(arguments):e,d===i?g.notifyWith(b,d):--f||g.resolveWith(b,d)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)d[b]&&p.isFunction(d[b].promise)?d[b].promise().done(h(b,k,d)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,d),g.promise()}});var I;p.fn.ready=function(a){return p.ready.promise().done(a),this},p.extend({isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){(a===!0?--p.readyWait:p.isReady)||(p.isReady=!0,a!==!0&&--p.readyWait>0||(I.resolveWith(l,[p]),p.fn.trigger&&p(l).trigger("ready").off("ready")))}});function J(){l.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1),p.ready()}p.ready.promise=function(b){return I||(I=p.Deferred(),"complete"===l.readyState?setTimeout(p.ready):(l.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1))),I.promise(b)},p.ready.promise();var K=p.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===p.type(c)){e=!0;for(h in c)p.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,p.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(p(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};p.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function L(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=p.expando+Math.random()}L.uid=1,L.accepts=p.acceptData,L.prototype={key:function(a){if(!L.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=L.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,p.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(p.isEmptyObject(f))p.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,p.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{p.isArray(b)?d=b.concat(b.map(p.camelCase)):(e=p.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(F)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!p.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var M=new L,N=new L,O=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,P=/([A-Z])/g;function Q(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(P,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:O.test(c)?p.parseJSON(c):c}catch(e){}N.set(a,b,c)}else c=void 0;return c}p.extend({hasData:function(a){return N.hasData(a)||M.hasData(a)},data:function(a,b,c){return N.access(a,b,c)},removeData:function(a,b){N.remove(a,b)},_data:function(a,b,c){return M.access(a,b,c)},_removeData:function(a,b){M.remove(a,b)}}),p.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=N.get(f),1===f.nodeType&&!M.get(f,"hasDataAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=p.camelCase(d.slice(5)),Q(f,d,e[d]));M.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){N.set(this,a)}):K(this,function(b){var c,d=p.camelCase(a);if(f&&void 0===b){if(c=N.get(f,a),void 0!==c)return c;if(c=N.get(f,d),void 0!==c)return c;if(c=Q(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=N.get(this,d);N.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&N.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){N.remove(this,a)})}}),p.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=M.get(a,b),c&&(!d||p.isArray(c)?d=M.access(a,b,p.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return M.get(a,c)||M.access(a,c,{empty:p.Callbacks("once memory").add(function(){M.remove(a,[b+"queue",c])})})}}),p.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?p.queue(this[0],a):void 0===b?this:this.each(function(){var c=p.queue(this,a,b);p._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=p.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=M.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var R=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,S=["Top","Right","Bottom","Left"],T=function(a,b){return a=b||a,"none"===p.css(a,"display")||!p.contains(a.ownerDocument,a)},U=/^(?:checkbox|radio)$/i;!function(){var a,b=l.createDocumentFragment(),c=b.appendChild(l.createElement("div"));c.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,a=l.createElement("input"),a.type="checkbox",a.checked=!0,k.noCloneChecked=a.cloneNode(!0).checked}();var V="undefined";k.focusinBubbles="onfocusin"in a;var W=/^key/,X=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=/^([^.]*)(?:\.(.+)|)$/;function $(){return!0}function _(){return!1}function ab(){try{return l.activeElement}catch(a){}}p.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=M.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=p.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof p!==V&&p.event.triggered!==b.type?p.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(F)||[""],j=b.length;while(j--)h=Z.exec(b[j])||[],n=q=h[1],o=(h[2]||"").split(".").sort(),n&&(l=p.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=p.event.special[n]||{},k=p.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&p.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),p.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=M.hasData(a)&&M.get(a);if(r&&(i=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=Z.exec(b[j])||[],n=q=h[1],o=(h[2]||"").split(".").sort(),n){l=p.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,r.handle)!==!1||p.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)p.event.remove(a,n+b[j],c,d,!0);p.isEmptyObject(i)&&(delete r.handle,M.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,j,k,m,n,o=[d||l],q=i.call(b,"type")?b.type:b,r=i.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!Y.test(q+p.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[p.expando]?b:new p.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:p.makeArray(c,[b]),n=p.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!p.isWindow(d)){for(j=n.delegateType||q,Y.test(j+q)||(g=g.parentNode);g;g=g.parentNode)o.push(g),h=g;h===(d.ownerDocument||l)&&o.push(h.defaultView||h.parentWindow||a)}f=0;while((g=o[f++])&&!b.isPropagationStopped())b.type=f>1?j:n.bindType||q,m=(M.get(g,"events")||{})[b.type]&&M.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&p.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!p.acceptData(d)||k&&p.isFunction(d[q])&&!p.isWindow(d)&&(h=d[k],h&&(d[k]=null),p.event.triggered=q,d[q](),p.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=p.event.fix(a);var b,d,e,f,g,h=[],i=c.call(arguments),j=(M.get(this,"events")||{})[a.type]||[],k=p.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=p.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((p.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?p(e,this).index(i)>=0:p.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=X.test(e)?this.mouseHooks:W.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new p.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ab()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ab()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&p.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return p.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},p.Event=function(a,b){return this instanceof p.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?$:_):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0,void 0):new p.Event(a,b)},p.Event.prototype={isDefaultPrevented:_,isPropagationStopped:_,isImmediatePropagationStopped:_,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=$,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=$,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=$,this.stopPropagation()}},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!p.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=M.access(d,b);e||d.addEventListener(a,c,!0),M.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=M.access(d,b)-1;e?M.access(d,b,e):(d.removeEventListener(a,c,!0),M.remove(d,b))}}}),p.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=_;else if(!d)return this;return 1===e&&(f=d,d=function(a){return p().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=p.guid++)),this.each(function(){p.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,p(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=_),this.each(function(){p.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?p.event.trigger(a,b,c,!0):void 0}});var bb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,cb=/<([\w:]+)/,db=/<|&#?\w+;/,eb=/<(?:script|style|link)/i,fb=/checked\s*(?:[^=]|=\s*.checked.)/i,gb=/^$|\/(?:java|ecma)script/i,hb=/^true\/(.*)/,ib=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,jb={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};jb.optgroup=jb.option,jb.tbody=jb.tfoot=jb.colgroup=jb.caption=jb.thead,jb.th=jb.td;function kb(a,b){return p.nodeName(a,"table")&&p.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function lb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function mb(a){var b=hb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function nb(a,b){for(var c=0,d=a.length;d>c;c++)M.set(a[c],"globalEval",!b||M.get(b[c],"globalEval"))}function ob(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(M.hasData(a)&&(f=M.access(a),g=M.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)p.event.add(b,e,j[e][c])}N.hasData(a)&&(h=N.access(a),i=p.extend({},h),N.set(b,i))}}function pb(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&p.nodeName(a,b)?p.merge([a],c):c}function qb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&U.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}p.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=p.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||p.isXMLDoc(a)))for(g=pb(h),f=pb(a),d=0,e=f.length;e>d;d++)qb(f[d],g[d]);if(b)if(c)for(f=f||pb(a),g=g||pb(h),d=0,e=f.length;e>d;d++)ob(f[d],g[d]);else ob(a,h);return g=pb(h,"script"),g.length>0&&nb(g,!i&&pb(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===p.type(e))p.merge(l,e.nodeType?[e]:e);else if(db.test(e)){f=f||k.appendChild(b.createElement("div")),g=(cb.exec(e)||["",""])[1].toLowerCase(),h=jb[g]||jb._default,f.innerHTML=h[1]+e.replace(bb,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;p.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===p.inArray(e,d))&&(i=p.contains(e.ownerDocument,e),f=pb(k.appendChild(e),"script"),i&&nb(f),c)){j=0;while(e=f[j++])gb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=p.event.special,i=0;void 0!==(c=a[i]);i++){if(p.acceptData(c)&&(f=c[M.expando],f&&(b=M.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?p.event.remove(c,e):p.removeEvent(c,e,b.handle);M.cache[f]&&delete M.cache[f]}delete N.cache[c[N.expando]]}}}),p.fn.extend({text:function(a){return K(this,function(a){return void 0===a?p.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=kb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=kb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?p.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||p.cleanData(pb(c)),c.parentNode&&(b&&p.contains(c.ownerDocument,c)&&nb(pb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(p.cleanData(pb(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!eb.test(a)&&!jb[(cb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(p.cleanData(pb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,p.cleanData(pb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=d.apply([],a);var c,e,f,g,h,i,j=0,l=this.length,m=this,n=l-1,o=a[0],q=p.isFunction(o);if(q||l>1&&"string"==typeof o&&!k.checkClone&&fb.test(o))return this.each(function(c){var d=m.eq(c);q&&(a[0]=o.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=p.buildFragment(a,this[0].ownerDocument,!1,this),e=c.firstChild,1===c.childNodes.length&&(c=e),e)){for(f=p.map(pb(c,"script"),lb),g=f.length;l>j;j++)h=c,j!==n&&(h=p.clone(h,!0,!0),g&&p.merge(f,pb(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,p.map(f,mb),j=0;g>j;j++)h=f[j],gb.test(h.type||"")&&!M.access(h,"globalEval")&&p.contains(i,h)&&(h.src?p._evalUrl&&p._evalUrl(h.src):p.globalEval(h.textContent.replace(ib,"")))}return this}}),p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(a){for(var c,d=[],f=p(a),g=f.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),p(f[h])[b](c),e.apply(d,c.get());return this.pushStack(d)}});var rb,sb={};function tb(b,c){var d=p(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:p.css(d[0],"display");return d.detach(),e}function ub(a){var b=l,c=sb[a];return c||(c=tb(a,b),"none"!==c&&c||(rb=(rb||p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=rb[0].contentDocument,b.write(),b.close(),c=tb(a,b),rb.detach()),sb[a]=c),c}var vb=/^margin/,wb=new RegExp("^("+R+")(?!px)[a-z%]+$","i"),xb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function yb(a,b,c){var d,e,f,g,h=a.style;return c=c||xb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||p.contains(a.ownerDocument,a)||(g=p.style(a,b)),wb.test(g)&&vb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function zb(a,b){return{get:function(){return a()?(delete this.get,void 0):(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=l.documentElement,f=l.createElement("div"),g=l.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&p.extend(k,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(l.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),p.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ab=/^(none|table(?!-c[ea]).+)/,Bb=new RegExp("^("+R+")(.*)$","i"),Cb=new RegExp("^([+-])=("+R+")","i"),Db={position:"absolute",visibility:"hidden",display:"block"},Eb={letterSpacing:0,fontWeight:400},Fb=["Webkit","O","Moz","ms"];function Gb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Fb.length;while(e--)if(b=Fb[e]+c,b in a)return b;return d}function Hb(a,b,c){var d=Bb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ib(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=p.css(a,c+S[f],!0,e)),d?("content"===c&&(g-=p.css(a,"padding"+S[f],!0,e)),"margin"!==c&&(g-=p.css(a,"border"+S[f]+"Width",!0,e))):(g+=p.css(a,"padding"+S[f],!0,e),"padding"!==c&&(g+=p.css(a,"border"+S[f]+"Width",!0,e)));return g}function Jb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=xb(a),g="border-box"===p.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=yb(a,b,f),(0>e||null==e)&&(e=a.style[b]),wb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ib(a,b,c||(g?"border":"content"),d,f)+"px"}function Kb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=M.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&T(d)&&(f[g]=M.access(d,"olddisplay",ub(d.nodeName)))):f[g]||(e=T(d),(c&&"none"!==c||!e)&&M.set(d,"olddisplay",e?c:p.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=yb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=p.camelCase(b),i=a.style;return b=p.cssProps[h]||(p.cssProps[h]=Gb(i,h)),g=p.cssHooks[b]||p.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Cb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(p.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||p.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=p.camelCase(b);return b=p.cssProps[h]||(p.cssProps[h]=Gb(a.style,h)),g=p.cssHooks[b]||p.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=yb(a,b,d)),"normal"===e&&b in Eb&&(e=Eb[b]),""===c||c?(f=parseFloat(e),c===!0||p.isNumeric(f)?f||0:e):e}}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Ab.test(p.css(a,"display"))?p.swap(a,Db,function(){return Jb(a,b,d)}):Jb(a,b,d):void 0},set:function(a,c,d){var e=d&&xb(a);return Hb(a,c,d?Ib(a,b,d,"border-box"===p.css(a,"boxSizing",!1,e),e):0)}}}),p.cssHooks.marginRight=zb(k.reliableMarginRight,function(a,b){return b?p.swap(a,{display:"inline-block"},yb,[a,"marginRight"]):void 0}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+S[d]+b]=f[d]||f[d-2]||f[0];return e}},vb.test(a)||(p.cssHooks[a+b].set=Hb)}),p.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(p.isArray(b)){for(d=xb(a),e=b.length;e>g;g++)f[b[g]]=p.css(a,b[g],!1,d);return f}return void 0!==c?p.style(a,b,c):p.css(a,b)},a,b,arguments.length>1)},show:function(){return Kb(this,!0)},hide:function(){return Kb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){T(this)?p(this).show():p(this).hide()})}});function Lb(a,b,c,d,e){return new Lb.prototype.init(a,b,c,d,e)}p.Tween=Lb,Lb.prototype={constructor:Lb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=Lb.propHooks[this.prop];return a&&a.get?a.get(this):Lb.propHooks._default.get(this)},run:function(a){var b,c=Lb.propHooks[this.prop];return this.pos=b=this.options.duration?p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Lb.propHooks._default.set(this),this}},Lb.prototype.init.prototype=Lb.prototype,Lb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=p.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[p.cssProps[a.prop]]||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Lb.propHooks.scrollTop=Lb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.fx=Lb.prototype.init,p.fx.step={};var Mb,Nb,Ob=/^(?:toggle|show|hide)$/,Pb=new RegExp("^(?:([+-])=|)("+R+")([a-z%]*)$","i"),Qb=/queueHooks$/,Rb=[Wb],Sb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Pb.exec(b),f=e&&e[3]||(p.cssNumber[a]?"":"px"),g=(p.cssNumber[a]||"px"!==f&&+d)&&Pb.exec(p.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,p.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Tb(){return setTimeout(function(){Mb=void 0}),Mb=p.now()}function Ub(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=S[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function Vb(a,b,c){for(var d,e=(Sb[b]||[]).concat(Sb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Wb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&T(a),o=M.get(a,"fxshow");c.queue||(h=p._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,p.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=p.css(a,"display"),"none"===j&&(j=ub(a.nodeName)),"inline"===j&&"none"===p.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ob.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!o||void 0===o[d])continue;n=!0}l[d]=o&&o[d]||p.style(a,d)}if(!p.isEmptyObject(l)){o?"hidden"in o&&(n=o.hidden):o=M.access(a,"fxshow",{}),f&&(o.hidden=!n),n?p(a).show():k.done(function(){p(a).hide()}),k.done(function(){var b;M.remove(a,"fxshow");for(b in l)p.style(a,b,l[b])});for(d in l)g=Vb(n?o[d]:0,d,k),d in o||(o[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Xb(a,b){var c,d,e,f,g;for(c in a)if(d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Yb(a,b,c){var d,e,f=0,g=Rb.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Mb||Tb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Mb||Tb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Xb(k,j.opts.specialEasing);g>f;f++)if(d=Rb[f].call(j,a,k,j.opts))return d;return p.map(k,Vb,j),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}p.Animation=p.extend(Yb,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Sb[c]=Sb[c]||[],Sb[c].unshift(b)},prefilter:function(a,b){b?Rb.unshift(a):Rb.push(a)}}),p.speed=function(a,b,c){var d=a&&"object"==typeof a?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};return d.duration=p.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(T).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=Yb(this,p.extend({},a),f);(e||M.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=p.timers,g=M.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Qb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&p.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=M.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=p.timers,g=d?d.length:0;for(c.finish=!0,p.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ub(b,!0),a,d,e)}}),p.each({slideDown:Ub("show"),slideUp:Ub("hide"),slideToggle:Ub("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.timers=[],p.fx.tick=function(){var a,b=p.timers,c=0;for(Mb=p.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||p.fx.stop(),Mb=void 0},p.fx.timer=function(a){a()&&p.timers.push(a)&&p.fx.start()},p.fx.interval=13,p.fx.start=function(){Nb||(Nb=setInterval(p.fx.tick,p.fx.interval))},p.fx.stop=function(){clearInterval(Nb),Nb=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fn.delay=function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Zb,$b,_b=p.expr.attrHandle;p.fn.extend({attr:function(a,b){return K(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})}}),p.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===V?p.prop(a,b,c):(1===f&&p.isXMLDoc(a)||(b=b.toLowerCase(),d=p.attrHooks[b]||(p.expr.match.bool.test(b)?$b:Zb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=p.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):(p.removeAttr(a,b),void 0))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=p.propFix[c]||c,p.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),$b={set:function(a,b,c){return b===!1?p.removeAttr(a,c):a.setAttribute(c,c),c
}},p.each(p.expr.match.bool.source.match(/\w+/g),function(a,b){var c=_b[b]||p.find.attr;_b[b]=function(a,b,d){var e,f;return d||(f=_b[b],_b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,_b[b]=f),e}});var ac=/^(?:input|select|textarea|button)$/i;p.fn.extend({prop:function(a,b){return K(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[p.propFix[a]||a]})}}),p.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!p.isXMLDoc(a),f&&(b=p.propFix[b]||b,e=p.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||ac.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(p.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),p.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){p.propFix[this.toLowerCase()]=this});var bc=/[\t\r\n\f]/g;p.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(bc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=p.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(bc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?p.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c){var b,d=0,e=p(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===V||"boolean"===c)&&(this.className&&M.set(this,"__className__",this.className),this.className=this.className||a===!1?"":M.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(bc," ").indexOf(b)>=0)return!0;return!1}});var cc=/\r/g;p.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=p.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,p(this).val()):a,null==e?e="":"number"==typeof e?e+="":p.isArray(e)&&(e=p.map(e,function(a){return null==a?"":a+""})),b=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=p.valHooks[e.type]||p.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(cc,""):null==c?"":c)}}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&p.nodeName(c.parentNode,"optgroup"))){if(b=p(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=p.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=p.inArray(p(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]={set:function(a,b){return p.isArray(b)?a.checked=p.inArray(p(a).val(),b)>=0:void 0}},k.checkOn||(p.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),p.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var dc=p.now(),ec=/\?/;p.parseJSON=function(a){return JSON.parse(a+"")},p.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+a),b};var fc,gc,hc=/#.*$/,ic=/([?&])_=[^&]*/,jc=/^(.*?):[ \t]*([^\r\n]*)$/gm,kc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,lc=/^(?:GET|HEAD)$/,mc=/^\/\//,nc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,oc={},pc={},qc="*/".concat("*");try{gc=location.href}catch(rc){gc=l.createElement("a"),gc.href="",gc=gc.href}fc=nc.exec(gc.toLowerCase())||[];function sc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(p.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function tc(a,b,c,d){var e={},f=a===pc;function g(h){var i;return e[h]=!0,p.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function uc(a,b){var c,d,e=p.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&p.extend(!0,a,d),a}function vc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function wc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}p.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:gc,type:"GET",isLocal:kc.test(fc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":qc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?uc(uc(a,p.ajaxSettings),b):uc(p.ajaxSettings,a)},ajaxPrefilter:sc(oc),ajaxTransport:sc(pc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=p.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?p(l):p.event,n=p.Deferred(),o=p.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=jc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=o.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||gc)+"").replace(hc,"").replace(mc,fc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=p.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(h=nc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===fc[1]&&h[2]===fc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(fc[3]||("http:"===fc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=p.param(k.data,k.traditional)),tc(oc,k,b,v),2===t)return v;i=k.global,i&&0===p.active++&&p.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!lc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(ec.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=ic.test(d)?d.replace(ic,"$1_="+dc++):d+(ec.test(d)?"&":"?")+"_="+dc++)),k.ifModified&&(p.lastModified[d]&&v.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&v.setRequestHeader("If-None-Match",p.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+qc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=tc(pc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=vc(k,v,f)),u=wc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(p.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),o.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--p.active||p.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return p.get(a,b,c,"json")},getScript:function(a,b){return p.get(a,void 0,b,"script")}}),p.each(["get","post"],function(a,b){p[b]=function(a,c,d,e){return p.isFunction(c)&&(e=e||d,d=c,c=void 0),p.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),p.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p._evalUrl=function(a){return p.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},p.fn.extend({wrapAll:function(a){var b;return p.isFunction(a)?this.each(function(b){p(this).wrapAll(a.call(this,b))}):(this[0]&&(b=p(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()}}),p.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)};var xc=/%20/g,yc=/\[\]$/,zc=/\r?\n/g,Ac=/^(?:submit|button|image|reset|file)$/i,Bc=/^(?:input|select|textarea|keygen)/i;function Cc(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||yc.test(a)?d(a,e):Cc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==p.type(b))d(a,b);else for(e in b)Cc(a+"["+e+"]",b[e],c,d)}p.param=function(a,b){var c,d=[],e=function(a,b){b=p.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=p.ajaxSettings&&p.ajaxSettings.traditional),p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){e(this.name,this.value)});else for(c in a)Cc(c,a[c],b,e);return d.join("&").replace(xc,"+")},p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=p.prop(this,"elements");return a?p.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!p(this).is(":disabled")&&Bc.test(this.nodeName)&&!Ac.test(a)&&(this.checked||!U.test(a))}).map(function(a,b){var c=p(this).val();return null==c?null:p.isArray(c)?p.map(c,function(a){return{name:b.name,value:a.replace(zc,"\r\n")}}):{name:b.name,value:c.replace(zc,"\r\n")}}).get()}}),p.ajaxSettings.xhr=function(){if(this.isLocal)try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){}try{return new XMLHttpRequest}catch(a){}};var Dc=0,Ec={},Fc={0:200,1223:204},Gc=p.ajaxSettings.xhr();a.ActiveXObject&&p(a).on("unload",function(){for(var a in Ec)Ec[a]()}),k.cors=!!Gc&&"withCredentials"in Gc,k.ajax=Gc=!!Gc,p.ajaxTransport(function(a){var b;return k.cors||Gc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Dc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Ec[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Fc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Ec[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),p.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=p("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Hc=[],Ic=/(=)\?(?=&|$)|\?\?/;p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Hc.pop()||p.expando+"_"+dc++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ic.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ic.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=p.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ic,"$1"+e):b.jsonp!==!1&&(b.url+=(ec.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||p.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Hc.push(e)),g&&p.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),p.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=w.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=p.buildFragment([a],b,e),e&&e.length&&p(e).remove(),p.merge([],d.childNodes))};var Jc=p.fn.load;p.fn.load=function(a,b,c){if("string"!=typeof a&&Jc)return Jc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),p.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&p.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?p("<div>").append(p.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length};var Kc=a.document.documentElement;function Lc(a){return p.isWindow(a)?a:9===a.nodeType&&a.defaultView}return p.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=p.css(a,"position"),l=p(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=p.css(a,"top"),i=p.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),p.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},p.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){p.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,p.contains(b,d)?(typeof d.getBoundingClientRect!==V&&(e=d.getBoundingClientRect()),c=Lc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===p.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),p.nodeName(a[0],"html")||(d=a.offset()),d.top+=p.css(a[0],"borderTopWidth",!0),d.left+=p.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-p.css(c,"marginTop",!0),left:b.left-d.left-p.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Kc;while(a&&!p.nodeName(a,"html")&&"static"===p.css(a,"position"))a=a.offsetParent;return a||Kc})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;p.fn[b]=function(e){return K(this,function(b,e,f){var g=Lc(b);return void 0===f?g?g[c]:b[e]:(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f,void 0)},b,e,arguments.length,null)}}),p.each(["top","left"],function(a,b){p.cssHooks[b]=zb(k.pixelPosition,function(a,c){return c?(c=yb(a,b),wb.test(c)?p(a).position()[b]+"px":c):void 0})}),p.each({Height:"height",Width:"width"},function(a,b){p.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){p.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return p.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?p.css(b,c,g):p.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),p.fn.size=function(){return this.length},p.fn.andSelf=p.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return p}),a.jQuery=a.$=p});
//# sourceMappingURL=jquery.min.map
;

/*! skrollr 0.6.17 (2013-10-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */

(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render},ft=r.forceHeight!==!1,ft&&(zt=r.scale||1),pt=r.mobileDeceleration||E,gt=r.smoothScrolling!==!1,dt=r.smoothScrollingDuration||x,vt={targetTop:it.getScrollTop()},Bt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Bt?(st=t.getElementById("skrollr-body"),st&&at(),X(),Ft(o,[y,S],[T])):Ft(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Lt||e!==It)&&(Lt=t,It=e,Mt=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i=e.skrollr={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.17"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",p="touchcancel",m="touchend",g="skrollable",d=g+"-before",v=g+"-between",h=g+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",w="linear",k=1e3,E=.004,x=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",P=/^(?:input|textarea|button|select)$/i,V=/^\s+|\s+$/g,z=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,N=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,O=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,I=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,B=/[a-z\-]+-gradient/g,_="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(_=n.match(e)||+n==n&&t[n].match(e))break;if(!_)return _=G="",r;_=_[0],"-"===_.slice(0,1)?(G=_,_={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[_]):G="-"+_.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[_.toLowerCase()+"RequestAnimationFrame"],r=Ht();return(Bt||!t)&&(t=function(t){var n=Ht()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Ht(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[_.toLowerCase()+"CancelAnimationFrame"];return(Bt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],$t=0,e=t.getElementsByTagName("*")):e=[].concat(e),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=gt,f=yt;if(i.attributes){for(var u=0,p=i.attributes.length;p>u;u++){var m=i.attributes[u];if("data-anchor-target"!==m.name)if("data-smooth-scrolling"!==m.name)if("data-edge-strategy"!==m.name){var d=m.name.match(z);if(null!==d){var v={props:m.value,element:i};s.push(v);var h=d[1];h=h&&ut[h.substr(1)]||0;var y=d[2];/p$/.test(y)?(v.isPercentage=!0,v.offset=((0|y.slice(0,-1))+h)/100):v.offset=(0|y)+h;var T=d[3],b=d[4]||T;T&&T!==A&&T!==F?(v.mode="relative",v.anchors=[T,b]):(v.mode="absolute",T===F?v.isEnd=!0:v.isPercentage||(v.frame=v.offset*zt,delete v.offset))}}else f=m.value;else c="off"!==m.value;else if(l=t.querySelector(m.value),null===l)throw'Unable to find anchor target "'+m.value+'"'}if(s.length){var S,w,k;!a&&H in i?(k=i[H],S=lt[k].styleAttr,w=lt[k].classAttr):(k=i[H]=$t++,S=i.style.cssText,w=At(i)),lt[k]={element:i,styleAttr:S,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f},Ft(i,[g],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Ht(),o=it.getScrollTop();return mt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||k,startTime:n,endTime:n+(t.duration||k),easing:U[t.easing||w],done:t.done},mt.topDiff||(mt.done&&mt.done.call(it,!1),mt=r),it},n.prototype.stopAnimateTo=function(){mt&&mt.done&&mt.done.call(it,!0),mt=r},n.prototype.isAnimatingTo=function(){return!!mt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,Bt?_t=s.min(s.max(t,0),Vt):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Bt?_t:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Vt},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),kt(),Ft(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="auto",o.style.height=a.style.height="auto",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Vt=0,zt=1,ut=r,pt=r,Nt="down",Ot=-1,It=0,Lt=0,Mt=!1,mt=r,gt=r,dt=r,vt=r,ht=r,$t=0,yt=r,Bt=!1,_t=0,Tt=r};var X=function(){var n,i,l,c,g,d,v,h,y,T,b,S;St(o,[f,u,p,m].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(g=o.clientY,d=o.clientX,T=e.timeStamp,P.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=g,l=d,y=T;break;case u:h=g-v,S=T-b,it.setScrollTop(_t-h,!0),v=g,b=T;break;default:case p:case m:var a=i-g,w=l-d,k=w*w+a*a;if(49>k){if(!P.test(n.tagName)){n.focus();var E=t.createEvent("MouseEvents");E.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(E)}return}n=r;var x=h/S;x=s.max(s.min(x,3),-3);var A=s.abs(x/pt),F=x*A+.5*pt*A*A,C=it.getScrollTop()-F,D=0;C>Vt?(D=(Vt-C)/F,C=Vt):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f;for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++){l=n[a];var u=l.offset;l.isPercentage&&(u*=o.clientHeight,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),ft&&!l.isEnd&&l.frame>Vt&&(Vt=l.frame)}for(Vt=s.max(Vt,xt()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],l.isEnd&&(l.frame=Vt-l.offset);e.keyFrames.sort(Pt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,p=u[0].frame,m=u[u.length-1].frame,y=p>f,T=f>m,b=u[y?0:u.length-1];if(y||T){if(y&&-1===s.edge||T&&1===s.edge)continue;switch(Ft(c,[y?d:h],[d,v,h]),s.edge=y?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=b.frame;break;default:case"set":var S=b.props;for(o in S)l.call(S,o)&&(a=nt(S[o].value),i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Ft(c,[g,v],[d,h]),s.edge=0);for(var w=0,k=u.length-1;k>w;w++)if(f>=u[w].frame&&u[w+1].frame>=f){var E=u[w],x=u[w+1];for(o in E.props)if(l.call(E.props,o)){var A=(f-E.frame)/(x.frame-E.frame);A=E.props[o].easing(A),a=rt(E.props[o].value,x.props[o].value,A),a=nt(a),i.setStyle(c,o,a)}break}}},Z=function(){Mt&&(Mt=!1,Et());var e,t,n=it.getScrollTop(),o=Ht();if(mt)o>=mt.endTime?(n=mt.targetTop,e=mt.done,mt=r):(t=mt.easing((o-mt.startTime)/mt.duration),n=0|mt.startTop+t*mt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:Ot,topDiff:n-Ot,targetTop:n,startTime:qt,endTime:qt+dt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/dt),n=0|vt.startTop+t*vt.topDiff)}if(Bt&&st&&i.setStyle(st,"transform","translate(0, "+-_t+"px) "+Tt),ht||Ot!==n){Nt=n>Ot?"down":Ot>n?"up":Nt,ht=!1;var l={curTop:n,lastTop:Ot,maxTop:Vt,direction:Nt},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),Ot=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}qt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=N.exec(l.props));)a=i[1],o=i[2],n=a.match(O),null!==n?(a=n[1],n=n[2]):n=w,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(B.lastIndex=0,e=e.replace(B,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Ft(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=At(n),n.style.cssText=r.styleAttr,Ft(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{_&&(n[_+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,pt,mt,gt,dt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Gt.push({element:t,name:a,listener:n})},wt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},kt=function(){for(var e,t=0,r=Gt.length;r>t;t++)e=Gt[t],wt(e.element,e.name,e.listener);Gt=[]},Et=function(){var e=it.getScrollTop();Vt=0,ft&&!Bt&&(a.style.height="auto"),j(),ft&&!Bt&&(a.style.height=Vt+o.clientHeight+"px"),Bt?it.setScrollTop(s.min(it.getScrollTop(),Vt)):it.setScrollTop(e,!0),ht=!0},xt=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},At=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Ft=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Dt(i).replace(Dt(o[l])," ");i=Ct(i);for(var c=0,f=n.length;f>c;c++)-1===Dt(i).indexOf(Dt(n[c]))&&(i+=" "+n[c]);t[a]=Ct(i)},Ct=function(e){return e.replace(V,"")},Dt=function(e){return" "+e+" "},Ht=Date.now||function(){return+new Date},Pt=function(e,t){return e.frame-t.frame},Vt=0,zt=1,Nt="down",Ot=-1,qt=Ht(),It=0,Lt=0,Mt=!1,$t=0,Bt=!1,_t=0,Gt=[]})(window,document);
/**
 * jquery.cbpQTRotator.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {

	'use strict';

	// global
	var Modernizr = window.Modernizr;

	$.CBPQTRotator = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	// the options
	$.CBPQTRotator.defaults = {
		// default transition speed (ms)
		speed : 700,
		// default transition easing
		easing : 'ease',
		// rotator interval (ms)
		interval : 8000
	};

	$.CBPQTRotator.prototype = {
		_init : function( options ) {

			// options
			this.options = $.extend( true, {}, $.CBPQTRotator.defaults, options );
			// cache some elements and initialize some variables
			this._config();
			// show current item
			this.$items.eq( this.current ).addClass( 'cbp-qtcurrent' );
			// set the transition to the items
			if( this.support ) {
				this._setTransition();
			}
			// start rotating the items
			this._startRotator();

		},
		_config : function() {

			// the content items
			this.$items = this.$el.children( 'div.cbp-qtcontent' );
			// total items
			this.itemsCount = this.$items.length;
			// current item's index
			this.current = 0;
			// support for CSS Transitions
			this.support = Modernizr.csstransitions;
			// add the progress bar
			if( this.support ) {
				this.$progress = $( '<span class="cbp-qtprogress"></span>' ).appendTo( this.$el );
			}

		},
		_setTransition : function() {
			setTimeout( $.proxy( function() {
				this.$items.css( 'transition', 'opacity ' + this.options.speed + 'ms ' + this.options.easing );
			}, this ), 25 );
		},
		_startRotator: function() {

			if( this.support ) {
				this._startProgress();
			}

			setTimeout( $.proxy( function() {
				if( this.support ) {
					this._resetProgress();
				}
				this._next();
				this._startRotator();
			}, this ), this.options.interval );

		},
		_next : function() {

			// hide previous item
			this.$items.eq( this.current ).removeClass( 'cbp-qtcurrent' );
			// update current value
			this.current = this.current < this.itemsCount - 1 ? this.current + 1 : 0;
			// show next item
			this.$items.eq( this.current ).addClass('cbp-qtcurrent');

		},
		_startProgress : function() {

			setTimeout( $.proxy( function() {
				this.$progress.css( { transition : 'width ' + this.options.interval + 'ms linear', width : '100%' } );
			}, this ), 25 );

		},
		_resetProgress : function() {
			this.$progress.css( { transition : 'none', width : '0%' } );
		},
		destroy : function() {
			if( this.support ) {
				this.$items.css( 'transition', 'none' );
				this.$progress.remove();
			}
			this.$items.removeClass( 'cbp-qtcurrent' ).css( {
				'position' : 'relative',
				'z-index' : 100,
				'pointer-events' : 'auto',
				'opacity' : 1
			} );
		}
	};

	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );
		}
	};

	$.fn.cbpQTRotator = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				var instance = $.data( this, 'cbpQTRotator' );
				if ( !instance ) {
					logError( "cannot call methods on cbpQTRotator prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for cbpQTRotator instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		}
		else {
			this.each(function() {
				var instance = $.data( this, 'cbpQTRotator' );
				if ( instance ) {
					instance._init();
				}
				else {
					instance = $.data( this, 'cbpQTRotator', new $.CBPQTRotator( options, this ) );
				}
			});
		}
		return this;
	};

} )( jQuery, window );
// function thirty_pc() {
//     var height = $(window).height();
//     var thirtypc = (105 * height) / 100;
//     thirtypc = parseInt(thirtypc) + 'px';
//     $(".intro").css('height', thirtypc);
//     $(".contact").css('height', thirtypc);
// }
$(document).ready(function () {
    thirty_pc();
    $(window).bind('resize', thirty_pc);
});
$(document).ready(function () {
    $('body').smoothScroll(600);
    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(41.875, -87.675),
            zoom: 14,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                "stylers": [{
                    "saturation": -100
                }, {
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#222222"
                }]
            }, {
                "featureType": "administrative.province",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#7f411b"
                }]
            }, {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#dddddd"
                }]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#f06a1b"
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff8436"
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.business",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff924c"
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffad78"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ff9f63"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ff924c"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffbf95"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ff924c"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ef5f17"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffad78"
                }]
            }]
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }
    $(".phone-btn").popover({
        placement: "right",
        trigger: "hover",
        delay: {
            show: 300,
            hide: 100
        },
        title: "We'd love to hear from you",
        content: "1.630.699.1918"
    });
    $("#top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#top').fadeIn(1000);
            } else {
                $('#top').fadeOut();
            }
        });
    });
});
//$(window).scroll(function () {
//    if ($(window).scrollTop() <= 100) {
//        $(".rdy-logo").fadeIn("slow")
//    } else {
//        $(".rdy-logo").fadeOut("fast")
//    }
//});
(function (a, c) {
    var b = (function () {
        var d = c(a.documentElement),
            f = c(a.body),
            e;
        if (d.scrollTop()) {
            return d;
        } else {
            e = f.scrollTop();
            if (f.scrollTop(e + 1).scrollTop() == e) {
                return d;
            } else {
                return f.scrollTop(e);
            }
        }
    }());
    c.fn.smoothScroll = function (d) {
        d = ~~d || 400;
        return this.find('a[href*="#"]').click(function (f) {
            var g = this.hash,
                e = c(g);
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                if (e.length) {
                    f.preventDefault();
                    b.stop().animate({
                        scrollTop: e.offset().top
                    }, d, function () {
                        location.hash = g;
                    });
                }
            }
        }).end();
    };
}(document, jQuery));
$(document).ready(function () {
    $(".twitter-btn").popover({
        placement: "right",
        trigger: "hover",
        delay: {
            show: 300,
            hide: 100
        },
        html: true,
        title: "Jennifer just tweeted:",
        content: function () {
            return $("#tweet").html();
        }
    });
    $.getJSON("https://api.twitter.com/1/statuses/user_timeline/sq1_nutrition.json?count=1&include_rts=1&callback=?", function (e) {
        $("#tweet").html(e[0].text);
    });
});
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/



(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define('waypoints', ['jquery'], function($) {
        return factory($, root);
      });
    } else {
      return factory(root.jQuery, root);
    }
  })(this, function($, window) {
    var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;

    $w = $(window);
    isTouch = __indexOf.call(window, 'ontouchstart') >= 0;
    allWaypoints = {
      horizontal: {},
      vertical: {}
    };
    contextCounter = 1;
    contexts = {};
    contextKey = 'waypoints-context-id';
    resizeEvent = 'resize.waypoints';
    scrollEvent = 'scroll.waypoints';
    waypointCounter = 1;
    waypointKey = 'waypoints-waypoint-ids';
    wp = 'waypoint';
    wps = 'waypoints';
    Context = (function() {
      function Context($element) {
        var _this = this;

        this.$element = $element;
        this.element = $element[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = 'context' + contextCounter++;
        this.oldScroll = {
          x: $element.scrollLeft(),
          y: $element.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        $element.data(contextKey, this.id);
        contexts[this.id] = this;
        $element.bind(scrollEvent, function() {
          var scrollHandler;

          if (!(_this.didScroll || isTouch)) {
            _this.didScroll = true;
            scrollHandler = function() {
              _this.doScroll();
              return _this.didScroll = false;
            };
            return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
          }
        });
        $element.bind(resizeEvent, function() {
          var resizeHandler;

          if (!_this.didResize) {
            _this.didResize = true;
            resizeHandler = function() {
              $[wps]('refresh');
              return _this.didResize = false;
            };
            return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
          }
        });
      }

      Context.prototype.doScroll = function() {
        var axes,
          _this = this;

        axes = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left'
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up'
          }
        };
        if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
          $[wps]('refresh');
        }
        $.each(axes, function(aKey, axis) {
          var direction, isForward, triggered;

          triggered = [];
          isForward = axis.newScroll > axis.oldScroll;
          direction = isForward ? axis.forward : axis.backward;
          $.each(_this.waypoints[aKey], function(wKey, waypoint) {
            var _ref, _ref1;

            if ((axis.oldScroll < (_ref = waypoint.offset) && _ref <= axis.newScroll)) {
              return triggered.push(waypoint);
            } else if ((axis.newScroll < (_ref1 = waypoint.offset) && _ref1 <= axis.oldScroll)) {
              return triggered.push(waypoint);
            }
          });
          triggered.sort(function(a, b) {
            return a.offset - b.offset;
          });
          if (!isForward) {
            triggered.reverse();
          }
          return $.each(triggered, function(i, waypoint) {
            if (waypoint.options.continuous || i === triggered.length - 1) {
              return waypoint.trigger([direction]);
            }
          });
        });
        return this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll
        };
      };

      Context.prototype.refresh = function() {
        var axes, cOffset, isWin,
          _this = this;

        isWin = $.isWindow(this.element);
        cOffset = this.$element.offset();
        this.doScroll();
        axes = {
          horizontal: {
            contextOffset: isWin ? 0 : cOffset.left,
            contextScroll: isWin ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left',
            offsetProp: 'left'
          },
          vertical: {
            contextOffset: isWin ? 0 : cOffset.top,
            contextScroll: isWin ? 0 : this.oldScroll.y,
            contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up',
            offsetProp: 'top'
          }
        };
        return $.each(axes, function(aKey, axis) {
          return $.each(_this.waypoints[aKey], function(i, waypoint) {
            var adjustment, elementOffset, oldOffset, _ref, _ref1;

            adjustment = waypoint.options.offset;
            oldOffset = waypoint.offset;
            elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
            if ($.isFunction(adjustment)) {
              adjustment = adjustment.apply(waypoint.element);
            } else if (typeof adjustment === 'string') {
              adjustment = parseFloat(adjustment);
              if (waypoint.options.offset.indexOf('%') > -1) {
                adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
              }
            }
            waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
            if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
              return;
            }
            if (oldOffset !== null && (oldOffset < (_ref = axis.oldScroll) && _ref <= waypoint.offset)) {
              return waypoint.trigger([axis.backward]);
            } else if (oldOffset !== null && (oldOffset > (_ref1 = axis.oldScroll) && _ref1 >= waypoint.offset)) {
              return waypoint.trigger([axis.forward]);
            } else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
              return waypoint.trigger([axis.forward]);
            }
          });
        });
      };

      Context.prototype.checkEmpty = function() {
        if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([resizeEvent, scrollEvent].join(' '));
          return delete contexts[this.id];
        }
      };

      return Context;

    })();
    Waypoint = (function() {
      function Waypoint($element, context, options) {
        var idList, _ref;

        options = $.extend({}, $.fn[wp].defaults, options);
        if (options.offset === 'bottom-in-view') {
          options.offset = function() {
            var contextHeight;

            contextHeight = $[wps]('viewportHeight');
            if (!$.isWindow(context.element)) {
              contextHeight = context.$element.height();
            }
            return contextHeight - $(this).outerHeight();
          };
        }
        this.$element = $element;
        this.element = $element[0];
        this.axis = options.horizontal ? 'horizontal' : 'vertical';
        this.callback = options.handler;
        this.context = context;
        this.enabled = options.enabled;
        this.id = 'waypoints' + waypointCounter++;
        this.offset = null;
        this.options = options;
        context.waypoints[this.axis][this.id] = this;
        allWaypoints[this.axis][this.id] = this;
        idList = (_ref = $element.data(waypointKey)) != null ? _ref : [];
        idList.push(this.id);
        $element.data(waypointKey, idList);
      }

      Waypoint.prototype.trigger = function(args) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, args);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      Waypoint.prototype.disable = function() {
        return this.enabled = false;
      };

      Waypoint.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true;
      };

      Waypoint.prototype.destroy = function() {
        delete allWaypoints[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      Waypoint.getWaypointsByElement = function(element) {
        var all, ids;

        ids = $(element).data(waypointKey);
        if (!ids) {
          return [];
        }
        all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
        return $.map(ids, function(id) {
          return all[id];
        });
      };

      return Waypoint;

    })();
    methods = {
      init: function(f, options) {
        var _ref;

        if (options == null) {
          options = {};
        }
        if ((_ref = options.handler) == null) {
          options.handler = f;
        }
        this.each(function() {
          var $this, context, contextElement, _ref1;

          $this = $(this);
          contextElement = (_ref1 = options.context) != null ? _ref1 : $.fn[wp].defaults.context;
          if (!$.isWindow(contextElement)) {
            contextElement = $this.closest(contextElement);
          }
          contextElement = $(contextElement);
          context = contexts[contextElement.data(contextKey)];
          if (!context) {
            context = new Context(contextElement);
          }
          return new Waypoint($this, context, options);
        });
        $[wps]('refresh');
        return this;
      },
      disable: function() {
        return methods._invoke(this, 'disable');
      },
      enable: function() {
        return methods._invoke(this, 'enable');
      },
      destroy: function() {
        return methods._invoke(this, 'destroy');
      },
      prev: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index > 0) {
            return stack.push(waypoints[index - 1]);
          }
        });
      },
      next: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index < waypoints.length - 1) {
            return stack.push(waypoints[index + 1]);
          }
        });
      },
      _traverse: function(axis, selector, push) {
        var stack, waypoints;

        if (axis == null) {
          axis = 'vertical';
        }
        if (selector == null) {
          selector = window;
        }
        waypoints = jQMethods.aggregate(selector);
        stack = [];
        this.each(function() {
          var index;

          index = $.inArray(this, waypoints[axis]);
          return push(stack, index, waypoints[axis]);
        });
        return this.pushStack(stack);
      },
      _invoke: function($elements, method) {
        $elements.each(function() {
          var waypoints;

          waypoints = Waypoint.getWaypointsByElement(this);
          return $.each(waypoints, function(i, waypoint) {
            waypoint[method]();
            return true;
          });
        });
        return this;
      }
    };
    $.fn[wp] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (methods[method]) {
        return methods[method].apply(this, args);
      } else if ($.isFunction(method)) {
        return methods.init.apply(this, arguments);
      } else if ($.isPlainObject(method)) {
        return methods.init.apply(this, [null, method]);
      } else if (!method) {
        return $.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return $.error("The " + method + " method does not exist in jQuery Waypoints.");
      }
    };
    $.fn[wp].defaults = {
      context: window,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    jQMethods = {
      refresh: function() {
        return $.each(contexts, function(i, context) {
          return context.refresh();
        });
      },
      viewportHeight: function() {
        var _ref;

        return (_ref = window.innerHeight) != null ? _ref : $w.height();
      },
      aggregate: function(contextSelector) {
        var collection, waypoints, _ref;

        collection = allWaypoints;
        if (contextSelector) {
          collection = (_ref = contexts[$(contextSelector).data(contextKey)]) != null ? _ref.waypoints : void 0;
        }
        if (!collection) {
          return [];
        }
        waypoints = {
          horizontal: [],
          vertical: []
        };
        $.each(waypoints, function(axis, arr) {
          $.each(collection[axis], function(key, waypoint) {
            return arr.push(waypoint);
          });
          arr.sort(function(a, b) {
            return a.offset - b.offset;
          });
          waypoints[axis] = $.map(arr, function(waypoint) {
            return waypoint.element;
          });
          return waypoints[axis] = $.unique(waypoints[axis]);
        });
        return waypoints;
      },
      above: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.y;
        });
      },
      below: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.y;
        });
      },
      left: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.x;
        });
      },
      right: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.x;
        });
      },
      enable: function() {
        return jQMethods._invoke('enable');
      },
      disable: function() {
        return jQMethods._invoke('disable');
      },
      destroy: function() {
        return jQMethods._invoke('destroy');
      },
      extendFn: function(methodName, f) {
        return methods[methodName] = f;
      },
      _invoke: function(method) {
        var waypoints;

        waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
        return $.each(waypoints, function(key, waypoint) {
          waypoint[method]();
          return true;
        });
      },
      _filter: function(selector, axis, test) {
        var context, waypoints;

        context = contexts[$(selector).data(contextKey)];
        if (!context) {
          return [];
        }
        waypoints = [];
        $.each(context.waypoints[axis], function(i, waypoint) {
          if (test(context, waypoint)) {
            return waypoints.push(waypoint);
          }
        });
        waypoints.sort(function(a, b) {
          return a.offset - b.offset;
        });
        return $.map(waypoints, function(waypoint) {
          return waypoint.element;
        });
      }
    };
    $[wps] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (jQMethods[method]) {
        return jQMethods[method].apply(null, args);
      } else {
        return jQMethods.aggregate.call(null, method);
      }
    };
    $[wps].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return $w.load(function() {
      return $[wps]('refresh');
    });
  });

}).call(this);






