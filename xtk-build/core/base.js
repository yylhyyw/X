var f=this;function g(d,e){var c=d.split("."),a=f;!(c[0]in a)&&a.execScript&&a.execScript("var "+c[0]);for(var b;c.length&&(b=c.shift());)!c.length&&e!==void 0?a[b]=e:a=a[b]?a[b]:a[b]={}};function i(){this.a="base"}i.prototype.b=function(){return this.a};i.prototype.print=function(){var d=Object.keys(this),e="",c="<unknown>",a;for(a in d){var b="this."+d[a],h=eval(b);b=="this._className"?c=h:e+=b+": "+h+"\n"}d="== X."+c+" ==\n";d+=e;return d};g("X.base",i);g("X.base.prototype.getClassName",i.prototype.b);g("X.base.prototype.print",i.prototype.print);
