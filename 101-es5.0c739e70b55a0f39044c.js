(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{obrF:function(t,e){var r=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""},n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,s=/@import[^;]*;/gim,i=/^@[^\s]*keyframes/,o=/\s+/g;function a(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var s=r+n.index;return{start:s,end:s+n[0].length}}return null}var u=/\bvar\(/,c=/\B--[\w-]+\s*:/,l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,p=/^[\t ]+\n/gm;function f(t,e,r){var n=function(t,e){var r=a(u,t,e);if(!r)return null;var n=function(t,e){for(var r=0,n=e;n<t.length;n++){var s=t[n];if("("===s)r++;else if(")"===s&&--r<=0)return n+1}return n}(t,r.start),s=t.substring(r.end,n-1).split(","),i=s[0],o=s.slice(1);return{start:r.start,end:n,propName:i.trim(),fallback:o.length>0?o.join(",").trim():void 0}}(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,i=null!=n.fallback?d(n.fallback):void 0;return e.push(t.substring(r,n.start),(function(t){return function(t,e,r){return t[e]?t[e]:r?h(r,t):""}(t,s,i)})),n.end}function h(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"==typeof s?s:s(e)}return r}function v(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var i=t[s];if(r)n&&'"'===i&&(r=!1),n||"'"!==i||(r=!1);else if('"'===i)r=!0,n=!0;else if("'"===i)r=!0,n=!1;else{if(";"===i)return s+1;if("}"===i)return s}}return s}function d(t){var e=0;t=function(t){for(var e="",r=0;;){var n=a(c,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=v(t,s)}return e}(t=t.replace(l,"")).replace(p,"");for(var r=[];e<t.length;)e=f(t,r,e);return r}function m(t){var e={};t.forEach((function(t){t.declarations.forEach((function(t){e[t.prop]=t.value}))}));for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach((function(t){var n=t[0],s=h(t[1],r);s!==r[n]&&(r[n]=s,e=!0)})),!e)return"break"},i=0;i<10&&"break"!==s();i++);return r}function g(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter((function(t){return 1===t.type})).forEach((function(t){var n=function(t){for(var e,r=[];e=y.exec(t.trim());){var n=b(e[2]),s=n.value,i=n.important;r.push({prop:e[1].trim(),value:d(s),important:i})}return r}(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach((function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:1,nu:e})})),e++})),r}var y=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function b(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith("!important");return e&&(t=t.substr(0,t.length-"!important".length).trim()),{value:t,important:e}}function S(t){var e=[];return t.forEach((function(t){e.push.apply(e,t.selectors)})),e}function M(t){var e,a=function t(e,r){var n=r.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){n=(n=(n=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t}))}(n=r.substring(e.previous?e.previous.end:e.parent.start,e.start-1))).replace(o," ")).substring(n.lastIndexOf(";")+1);var s=e.parsedSelector=e.selector=n.trim();e.atRule=0===s.indexOf("@"),e.atRule?0===s.indexOf("@media")?e.type=4:s.match(i)&&(e.type=7,e.keyframesName=e.selector.split(o).pop()):e.type=0===s.indexOf("--")?1e3:1}var a=e.rules;if(a)for(var u=0,c=a.length,l=void 0;u<c&&(l=a[u]);u++)t(l,r);return e}(function(t){var e=new r;e.start=0,e.end=t.length;for(var n=e,s=0,i=t.length;s<i;s++)if("{"===t[s]){n.rules||(n.rules=[]);var o=n,a=o.rules[o.rules.length-1]||null;(n=new r).start=s+1,n.parent=o,n.previous=a,o.rules.push(n)}else"}"===t[s]&&(n.end=s+1,n=n.parent||e);return e}(e=(e=t).replace(n,"").replace(s,"")),e),u=d(t);return{original:t,template:u,selectors:g(a),usesCssVars:u.length>1}}function w(t,e){var r=M(e.innerHTML);r.styleEl=e,t.push(r)}function E(t,e,r){var n;return n="."+r,t.replace(new RegExp("\\."+e,"g"),n)}function x(t,e,r){var n=r.href;return fetch(n).then((function(t){return t.text()})).then((function(s){if(((o=s).indexOf("var(")>-1||k.test(o))&&r.parentNode){(function(t){return T.lastIndex=0,T.test(t)})(s)&&(s=function(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(T,(function(t,e){return t.replace(e,r+e)}))}(s,n));var i=t.createElement("style");i.setAttribute("data-styles",""),i.innerHTML=s,w(e,i),r.parentNode.insertBefore(i,r),r.remove()}var o})).catch((function(t){console.error(t)}))}var k=/[\s;{]--[-a-zA-Z0-9]+\s*:/m,T=/url[\s]*\([\s]*['"]?(?![http|/])([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,H=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map}return t.prototype.initShim=function(){var t=this;return new Promise((function(e){t.win.requestAnimationFrame((function(){var r,n;(r=t.doc,n=t.globalScopes,function(t,e){for(var r=t.querySelectorAll("style:not([data-styles])"),n=0;n<r.length;n++)w(e,r[n])}(r,n),function(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]'),s=0;s<n.length;s++)r.push(x(t,e,n[s]));return Promise.all(r)}(r,n)).then((function(){return e()}))}))}))},t.prototype.addLink=function(t){var e=this;return x(this.doc,this.globalScopes,t).then((function(){e.updateGlobal()}))},t.prototype.addGlobalStyle=function(t){w(this.globalScopes,t),this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var s,i,o,a,u=this.registerHostTemplate(r,e,n),c=this.doc.createElement("style");return u.usesCssVars?n?(c["s-sc"]=e=u.scopeId+"-"+this.count,c.innerHTML="/*needs update*/",this.hostStyleMap.set(t,c),this.hostScopeMap.set(t,(i=e,o=(s=u).template.map((function(t){return"string"==typeof t?E(t,s.scopeId,i):t})),a=s.selectors.map((function(t){return Object.assign({},t,{selector:E(t.selector,s.scopeId,i)})})),Object.assign({},s,{template:o,selectors:a,scopeId:i}))),this.count++):(u.styleEl=c,u.usesCssVars||(c.innerHTML=h(u.template,{})),this.globalScopes.push(u),this.updateGlobal(),this.hostScopeMap.set(t,u)):c.innerHTML=r,c},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=m(function(t,e,r){var n,s=[],i=function(t,e){for(var r=[];e;){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}(e,t);return r.forEach((function(t){return s.push(t)})),i.forEach((function(t){return s.push(t)})),(n=S(s).filter((function(e){return function(t,e){return":root"===e||"html"===e||t.matches(e)}(t,e.selector)}))).sort((function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity})),n}(t,this.hostScopeMap,this.globalScopes));r.innerHTML=h(e.template,n)}}},t.prototype.updateGlobal=function(){var t,e;e=m(S(t=this.globalScopes)),t.forEach((function(t){t.usesCssVars&&(t.styleEl.innerHTML=h(t.template,e))}))},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||((n=M(t)).scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}(),C=window;C.__stencil_cssshim||C.CSS&&C.CSS.supports&&C.CSS.supports("color","var(--c)")||(C.__stencil_cssshim=new H(C,document))}}]);