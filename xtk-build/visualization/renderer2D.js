var h=null;function i(a){return function(){return this[a]}}var j,k=this;
function l(a){var c=typeof a;if(c=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if(b=="[object Window]")return"object";if(b=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(b=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(c=="function"&&typeof a.call=="undefined")return"object";return c}function m(a){var c=l(a);return c=="array"||c=="object"&&typeof a.length=="number"}function n(a){return typeof a=="string"}function o(a){a=l(a);return a=="object"||a=="array"||a=="function"}function p(a,c){var b=a.split("."),e=k;!(b[0]in e)&&e.execScript&&e.execScript("var "+b[0]);for(var f;b.length&&(f=b.shift());)!b.length&&c!==void 0?e[f]=c:e=e[f]?e[f]:e[f]={}}
function q(a,c){function b(){}b.prototype=c.prototype;a.w=c.prototype;a.prototype=new b};function r(){this.b="base"}r.prototype.l=i("b");r.prototype.print=function(){var a=Object.keys(this),c="",b="<unknown>",e;for(e in a){var f="this."+a[e],d=eval(f);f=="this._className"?b=d:c+=f+": "+d+"\n"}a="== X."+b+" ==\n";a+=c;return a};p("X.base",r);p("X.base.prototype.getClassName",r.prototype.l);p("X.base.prototype.print",r.prototype.print);function s(a){this.b="base";this.b="exception";this.u=a?a:"Unknown error!";this.v=Error().stack}q(s,r);p("X.exception",s);function v(a){if(!w.test(a))return a;a.indexOf("&")!=-1&&(a=a.replace(y,"&amp;"));a.indexOf("<")!=-1&&(a=a.replace(z,"&lt;"));a.indexOf(">")!=-1&&(a=a.replace(A,"&gt;"));a.indexOf('"')!=-1&&(a=a.replace(aa,"&quot;"));return a}var y=/&/g,z=/</g,A=/>/g,aa=/\"/g,w=/[&<>\"]/;
function B(a){for(var c=0,b=String(C).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(b.length,a.length),f=0;c==0&&f<e;f++){var d=b[f]||"",g=a[f]||"",x=RegExp("(\\d*)(\\D*)","g"),ba=RegExp("(\\d*)(\\D*)","g");do{var t=x.exec(d)||["","",""],u=ba.exec(g)||["","",""];if(t[0].length==0&&u[0].length==0)break;c=D(t[1].length==0?0:parseInt(t[1],10),u[1].length==0?0:parseInt(u[1],10))||D(t[2].length==0,u[2].length==0)||D(t[2],u[2])}while(c==
0)}return c}function D(a,c){if(a<c)return-1;else if(a>c)return 1;return 0};var E=Array.prototype,ca=E.indexOf?function(a,c,b){return E.indexOf.call(a,c,b)}:function(a,c,b){b=b==h?0:b<0?Math.max(0,a.length+b):b;if(n(a))return!n(c)||c.length!=1?-1:a.indexOf(c,b);for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},da=E.forEach?function(a,c,b){E.forEach.call(a,c,b)}:function(a,c,b){for(var e=a.length,f=n(a)?a.split(""):a,d=0;d<e;d++)d in f&&c.call(b,f[d],d,a)};function ea(a){return E.concat.apply(E,arguments)}
function fa(a){if(l(a)=="array")return ea(a);else{for(var c=[],b=0,e=a.length;b<e;b++)c[b]=a[b];return c}}function ga(a,c,b){return arguments.length<=2?E.slice.call(a,c):E.slice.call(a,c,b)};function ha(a,c){var b;b=(b=a.className)&&typeof b.split=="function"?b.split(/\s+/):[];var e=ga(arguments,1),f;f=b;for(var d=0,g=0;g<e.length;g++)ca(f,e[g])>=0||(f.push(e[g]),d++);f=d==e.length;a.className=b.join(" ");return f};function ia(a,c){for(var b in a)c.call(void 0,a[b],b,a)}var F=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];function ja(a,c){for(var b,e,f=1;f<arguments.length;f++){e=arguments[f];for(b in e)a[b]=e[b];for(var d=0;d<F.length;d++)b=F[d],Object.prototype.hasOwnProperty.call(e,b)&&(a[b]=e[b])}};var G,H,I,J;function K(){return k.navigator?k.navigator.userAgent:h}J=I=H=G=!1;var L;if(L=K()){var ka=k.navigator;G=L.indexOf("Opera")==0;H=!G&&L.indexOf("MSIE")!=-1;I=!G&&L.indexOf("WebKit")!=-1;J=!G&&!I&&ka.product=="Gecko"}var M=H,N=J,la=I,C;
a:{var O="",P;if(G&&k.opera)var Q=k.opera.version,O=typeof Q=="function"?Q():Q;else if(N?P=/rv\:([^\);]+)(\)|;)/:M?P=/MSIE\s+([^\);]+)(\)|;)/:la&&(P=/WebKit\/(\S+)/),P)var R=P.exec(K()),O=R?R[1]:"";if(M){var S,T=k.document;S=T?T.documentMode:void 0;if(S>parseFloat(O)){C=String(S);break a}}C=O}var U={},V={};function W(){return V[9]||(V[9]=M&&document.documentMode&&document.documentMode>=9)};var ma=!M||W();if(N||M)if(!M||!W())N&&(U["1.9.1"]||(U["1.9.1"]=B("1.9.1")>=0));M&&(U["9"]||(U["9"]=B("9")>=0));function na(a,c){ia(c,function(b,c){c=="style"?a.style.cssText=b:c=="class"?a.className=b:c=="for"?a.htmlFor=b:c in Y?a.setAttribute(Y[c],b):c.lastIndexOf("aria-",0)==0?a.setAttribute(c,b):a[c]=b})}var Y={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"};
function oa(a,c,b){var e=arguments,f=document,d=e[0],g=e[1];if(!ma&&g&&(g.name||g.type)){d=["<",d];g.name&&d.push(' name="',v(g.name),'"');if(g.type){d.push(' type="',v(g.type),'"');var x={};ja(x,g);g=x;delete g.type}d.push(">");d=d.join("")}d=f.createElement(d);if(g)n(g)?d.className=g:l(g)=="array"?ha.apply(h,[d].concat(g)):na(d,g);e.length>2&&pa(f,d,e);return d}
function pa(a,c,b){function e(b){b&&c.appendChild(n(b)?a.createTextNode(b):b)}for(var f=2;f<b.length;f++){var d=b[f];if(m(d)&&!(o(d)&&d.nodeType>0)){var g;a:{if(d&&typeof d.length=="number")if(o(d)){g=typeof d.item=="function"||typeof d.item=="string";break a}else if(l(d)=="function"){g=typeof d.item=="function";break a}g=!1}da(g?fa(d):d,e)}else e(d)}};function Z(a,c){this.b="base";this.b="renderer";this.g=-1;this.e=a;this.d=c;this.f="#000000";this.j=this.a=this.c=h}q(Z,r);j=Z.prototype;j.m=i("g");j.o=i("e");j.t=function(a){this.a&&this.a.style.setProperty("width",a.toString());this.e=a};j.n=i("d");j.s=function(a){this.a&&this.a.style.setProperty("height",a.toString());this.d=a};j.k=i("f");j.q=function(a){this.a&&this.a.style.setProperty("background-color",a.toString());this.f=a};
j.h=function(){if(!this.c){var a=document.body;if(!a)throw new s("Fatal: Could not find <body></body>!");this.c=a}return this.c};j.i=function(a){if(!a)throw new s("Fatal: Could not find container!");this.c=a};j.r=function(a){this.i(n(a)?document.getElementById(a):a)};
j.p=function(){if(!this.a){var a=oa("canvas");a.style.setProperty("width",this.e.toString());a.style.setProperty("height",this.d.toString());a.style.setProperty("background-color",this.f.toString());this.h().appendChild(a);try{var c=a.getContext("experimental-webgl")}catch(b){throw new s("Fatal: Exception while getting GL Context!\n"+b);}if(!c)throw new s("Fatal: WebGL not supported!");try{c.viewport(0,0,this.e,this.d)}catch(e){throw new s("Fatal: Exception while accessing GL Context!\n"+e);}this.j=
c;this.a=a}};p("X.renderer",Z);p("X.renderer.prototype.getDimension",Z.prototype.m);p("X.renderer.prototype.getWidth",Z.prototype.o);p("X.renderer.prototype.setWidth",Z.prototype.t);p("X.renderer.prototype.getHeight",Z.prototype.n);p("X.renderer.prototype.setHeight",Z.prototype.s);p("X.renderer.prototype.getBackgroundColor",Z.prototype.k);p("X.renderer.prototype.setBackgroundColor",Z.prototype.q);p("X.renderer.prototype.getContainer",Z.prototype.h);p("X.renderer.prototype.setContainer",Z.prototype.i);
p("X.renderer.prototype.init",Z.prototype.p);p("X.renderer.prototype.setContainerById",Z.prototype.r);function $(a,c){Z.call(this,a,c);this.b="renderer2D";this.g=2}q($,Z);p("X.renderer2D",$);
