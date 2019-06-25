(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(t,e,a){var n=a(152);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=(0,a(4).default)("06b9fc4f",n,!1,{});n.locals||t.hot.accept(152,function(){var e=a(152);"string"==typeof e&&(e=[[t.i,e,""]]),r(e)}),t.hot.dispose(function(){r()})},152:function(t,e,a){(e=t.exports=a(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Berkshire+Swash|Fira+Sans);",""]),e.push([t.i,".priming-sugar-calculator[data-v-50543c9e] {\n  margin-top: 30px;\n  background: #fffbfb;\n}\n.priming-sugar-calculator > *[data-v-50543c9e] {\n    width: 100%;\n}\n.priming-sugar-calculator[data-v-50543c9e] .dropdown-toggle {\n    background: #FFF;\n}\n.priming-sugar-calculator[data-v-50543c9e] .clear {\n    display: none;\n}\n.inputs[data-v-50543c9e] {\n  background: #eb616b;\n  padding: 20px;\n}\n.sugars[data-v-50543c9e] {\n  color: #1D3557;\n  padding: 20px;\n}\n.sugar[data-v-50543c9e] {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.sugar[data-v-50543c9e]:nth-child(even) {\n    background: rgba(29, 53, 87, 0.2);\n}\n.input-with-label[data-v-50543c9e]:not(:last-child) {\n  margin-bottom: 20px;\n}\n.input-with-label .label[data-v-50543c9e] {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 14px;\n  margin-bottom: 5px;\n  color: #1D3557;\n}\n.input-with-label[data-v-50543c9e] > input {\n  width: 100%;\n}\n@media (max-width: 800px) {\n.priming-sugar-calculator[data-v-50543c9e] {\n    margin-top: 10px;\n    display: block;\n}\n}\n",""])},158:function(t,e,a){"use strict";var n=a(210),r=a.n(n);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,a,n;return e=t,(a=[{key:"getDisolvedCO2",value:function(t){return-.9753*Math.log(t)+4.9648}},{key:"getSugarsWithWeights",value:function(t,e,a){var n=e-this.getDisolvedCO2(a),o=3.78541*t;return r.a.map(function(t){var e=t.factor,a=t.weightFactor;return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){i(t,e,a[e])})}return t}({},t,{ounces:(n*e*o*a/28.34952).toFixed(2)})})}}])&&o(e.prototype,a),n&&o(e,n),t}()),s={name:"priming-sugar-calculator",data:function(){return{beerVolume:5,desiredCO2:2.2,temperature:68}},computed:{sugars:function(){return c.getSugarsWithWeights(this.beerVolume,this.desiredCO2,this.temperature)}}};e.a=s},176:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body-content"},[a("app-header"),t._v(" "),a("h1",[t._v("\n\t\tPriming Sugar Calculator\n\t")]),t._v(" "),a("div",{staticClass:"priming-sugar-calculator"},[a("div",{staticClass:"inputs"},[a("div",{staticClass:"input-with-label"},[a("div",{staticClass:"label"},[t._v("\n\t\t\t\t\tBeer Volume (gal)\n\t\t\t\t")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.beerVolume,expression:"beerVolume"}],attrs:{type:"number"},domProps:{value:t.beerVolume},on:{input:function(e){e.target.composing||(t.beerVolume=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-with-label"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.desiredCO2,expression:"desiredCO2"}],attrs:{type:"number"},domProps:{value:t.desiredCO2},on:{input:function(e){e.target.composing||(t.desiredCO2=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-with-label"},[a("div",{staticClass:"label"},[t._v("\n\t\t\t\t\tTemperature\n\t\t\t\t")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temperature,expression:"temperature"}],attrs:{type:"number"},domProps:{value:t.temperature},on:{input:function(e){e.target.composing||(t.temperature=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"sugars"},t._l(t.sugars,function(e){return a("div",{key:e.name,staticClass:"sugar"},[a("div",{staticClass:"name"},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"volume"},[t._v("\n\t\t\t\t\t"+t._s(e.ounces)+" oz\n\t\t\t\t")])])}),0)])],1)},r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"label"},[this._v("\n\t\t\t\t\tDesired CO"),e("sub",[this._v("2")])])}];n._withStripped=!0,a.d(e,"render",function(){return n}),a.d(e,"staticRenderFns",function(){return r})},210:function(t,e){t.exports=[{name:"Corn Sugar",factor:4,weightFactor:1},{name:"Sucrose",factor:4,weightFactor:.91},{name:"Turbinado",factor:4,weightFactor:.91},{name:"Demarara",factor:4,weightFactor:.91},{name:"Dextrose",factor:4,weightFactor:1},{name:"Corn Syrup",factor:5.3,weightFactor:1},{name:"Brown Sugar",factor:4.1,weightFactor:1},{name:"Molasses",factor:5.1,weightFactor:1},{name:"Maple Syrup",factor:4.7,weightFactor:1},{name:"Sorghum Syrup",factor:5.3,weightFactor:1},{name:"Honey",factor:4.9,weightFactor:1},{name:"DME - All Varieties",factor:5.33,weightFactor:1},{name:"DME - Laaglander",factor:7.3,weightFactor:1},{name:"Belgian Candy Syrup - All",factor:5.75,weightFactor:1},{name:"Belgian Candy Sugar - All",factor:4.85,weightFactor:1},{name:"Invert Sugar Syrup - All",factor:4,weightFactor:1},{name:"Black Treacle",factor:4.2,weightFactor:1},{name:"Rice Solids",factor:4.6,weightFactor:1}]},211:function(t,e,a){"use strict";var n=a(151);a.n(n).a},225:function(t,e,a){"use strict";a.r(e);var n=a(176),r=a(158),i=(a(211),a(0)),o=Object(i.a)(r.a,n.render,n.staticRenderFns,!1,null,"50543c9e",null),c=a(2);c.install(a(1)),c.compatible&&(t.hot.accept(),t.hot.data?c.reload("50543c9e",o.options):c.createRecord("50543c9e",o.options),t.hot.accept(176,function(t){n=a(176),c.rerender("50543c9e",{render:n.render,staticRenderFns:n.staticRenderFns})}.bind(this))),o.options.__file="src/pages/priming-sugar-calculator/index.vue",e.default=o.exports}}]);
//# sourceMappingURL=6.bundle.js.map