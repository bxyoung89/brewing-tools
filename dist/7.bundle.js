(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{163:function(t,e,a){var r=a(164);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=(0,a(4).default)("306ddd16",r,!1,{});r.locals||t.hot.accept(164,(function(){var e=a(164);"string"==typeof e&&(e=[[t.i,e,""]]),n(e)})),t.hot.dispose((function(){n()}))},164:function(t,e,a){(e=t.exports=a(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Berkshire+Swash|Fira+Sans);",""]),e.push([t.i,".priming-sugar-calculator[data-v-50543c9e]{margin-top:30px;background:#fffbfb}.priming-sugar-calculator>*[data-v-50543c9e]{width:100%}.priming-sugar-calculator[data-v-50543c9e] .dropdown-toggle{background:#fff}.priming-sugar-calculator[data-v-50543c9e] .clear{display:none}.inputs[data-v-50543c9e]{background:#eb616b;padding:20px}.sugars[data-v-50543c9e]{color:#1D3557;padding:20px}.sugar[data-v-50543c9e]{padding:10px;display:flex;justify-content:space-between}.sugar[data-v-50543c9e]:nth-child(even){background:rgba(29,53,87,0.2)}.input-with-label[data-v-50543c9e]:not(:last-child){margin-bottom:20px}.input-with-label .label[data-v-50543c9e]{text-transform:uppercase;letter-spacing:0.1em;font-weight:700;font-size:12px;line-height:14px;margin-bottom:5px;color:#1D3557}.input-with-label[data-v-50543c9e] >input{width:100%}@media (max-width: 800px){.priming-sugar-calculator[data-v-50543c9e]{margin-top:10px;display:block}}\n",""])},177:function(t,e,a){"use strict";var r=a(231),n=a.n(r);function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,a,r;return e=t,(a=[{key:"getDisolvedCO2",value:function(t){return-.9753*Math.log(t)+4.9648}},{key:"getSugarsWithWeights",value:function(t,e,a){var r=e-this.getDisolvedCO2(a),c=3.78541*t;return n.a.map((function(t){var e=t.factor,a=t.weightFactor;return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(a,!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},t,{ounces:(r*e*c*a/28.34952).toFixed(2)})}))}}])&&c(e.prototype,a),r&&c(e,r),t}()),u={name:"priming-sugar-calculator",data:function(){return{beerVolume:5,desiredCO2:2.2,temperature:68}},computed:{sugars:function(){return s.getSugarsWithWeights(this.beerVolume,this.desiredCO2,this.temperature)}}};e.a=u},194:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body-content"},[a("app-header"),t._v(" "),a("h1",[t._v("\n\t\tPriming Sugar Calculator\n\t")]),t._v(" "),a("div",{staticClass:"priming-sugar-calculator"},[a("div",{staticClass:"inputs"},[a("div",{staticClass:"input-with-label"},[a("div",{staticClass:"label"},[t._v("\n\t\t\t\t\tBeer Volume (gal)\n\t\t\t\t")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.beerVolume,expression:"beerVolume"}],attrs:{type:"number"},domProps:{value:t.beerVolume},on:{input:function(e){e.target.composing||(t.beerVolume=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-with-label"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.desiredCO2,expression:"desiredCO2"}],attrs:{type:"number"},domProps:{value:t.desiredCO2},on:{input:function(e){e.target.composing||(t.desiredCO2=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-with-label"},[a("div",{staticClass:"label"},[t._v("\n\t\t\t\t\tTemperature\n\t\t\t\t")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temperature,expression:"temperature"}],attrs:{type:"number"},domProps:{value:t.temperature},on:{input:function(e){e.target.composing||(t.temperature=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"sugars"},t._l(t.sugars,(function(e){return a("div",{key:e.name,staticClass:"sugar"},[a("div",{staticClass:"name"},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"volume"},[t._v("\n\t\t\t\t\t"+t._s(e.ounces)+" oz\n\t\t\t\t")])])})),0)])],1)},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"label"},[this._v("\n\t\t\t\t\tDesired CO"),e("sub",[this._v("2")])])}];r._withStripped=!0,a.d(e,"render",(function(){return r})),a.d(e,"staticRenderFns",(function(){return n}))},231:function(t,e){t.exports=[{name:"Corn Sugar",factor:4,weightFactor:1},{name:"Sucrose",factor:4,weightFactor:.91},{name:"Turbinado",factor:4,weightFactor:.91},{name:"Demarara",factor:4,weightFactor:.91},{name:"Dextrose",factor:4,weightFactor:1},{name:"Corn Syrup",factor:5.3,weightFactor:1},{name:"Brown Sugar",factor:4.1,weightFactor:1},{name:"Molasses",factor:5.1,weightFactor:1},{name:"Maple Syrup",factor:4.7,weightFactor:1},{name:"Sorghum Syrup",factor:5.3,weightFactor:1},{name:"Honey",factor:4.9,weightFactor:1},{name:"DME - All Varieties",factor:5.33,weightFactor:1},{name:"DME - Laaglander",factor:7.3,weightFactor:1},{name:"Belgian Candy Syrup - All",factor:5.75,weightFactor:1},{name:"Belgian Candy Sugar - All",factor:4.85,weightFactor:1},{name:"Invert Sugar Syrup - All",factor:4,weightFactor:1},{name:"Black Treacle",factor:4.2,weightFactor:1},{name:"Rice Solids",factor:4.6,weightFactor:1}]},232:function(t,e,a){"use strict";var r=a(163);a.n(r).a},250:function(t,e,a){"use strict";a.r(e);var r=a(194),n=a(177),i=(a(232),a(0)),o=Object(i.a)(n.a,r.render,r.staticRenderFns,!1,null,"50543c9e",null),c=a(2);c.install(a(1)),c.compatible&&(t.hot.accept(),c.isRecorded("50543c9e")?c.reload("50543c9e",o.options):c.createRecord("50543c9e",o.options),t.hot.accept(194,function(t){r=a(194),c.rerender("50543c9e",{render:r.render,staticRenderFns:r.staticRenderFns})}.bind(this))),o.options.__file="src/pages/priming-sugar-calculator/index.vue",e.default=o.exports}}]);
//# sourceMappingURL=7.bundle.js.map