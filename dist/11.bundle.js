(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{121:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var r=function(t){return 1.00130346-.000134722124*t+204052596e-14*Math.pow(t,2)-2.32820948e-9*Math.pow(t,3)},i=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"getCorrectedValue",value:function(t,e,n){var a=Number.parseFloat(t),i=Number.parseFloat(e),o=Number.parseFloat(n);return Number.isNaN(a)||Number.isNaN(i)||Number.isNaN(o)||0===o?"--":(a*(r(i)/r(o))).toFixed(3)}}])&&a(e.prototype,n),i&&a(e,i),t}()),o={name:"hydrometer-temperature-correction",data:function(){return{gravityReading:1.05,currentTemperature:80,calibrationTemperature:68}},computed:{adjustedGravity:function(){return i.getCorrectedValue(this.gravityReading,this.currentTemperature,this.calibrationTemperature)}}};e.a=o},128:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body-content"},[n("app-header"),t._v(" "),n("h1",[t._v("\n\t\tHydrometer Temperature Correction\n\t")]),t._v(" "),n("div",{staticClass:"hydrometer-temperature-correction"},[n("div",{staticClass:"inputs"},[n("div",{staticClass:"input-with-label"},[n("div",{staticClass:"label"},[t._v("\n\t\t\t\t\tGravity Reading\n\t\t\t\t")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.gravityReading,expression:"gravityReading"}],attrs:{type:"number"},domProps:{value:t.gravityReading},on:{input:function(e){e.target.composing||(t.gravityReading=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-with-label"},[n("div",{staticClass:"label"},[t._v("\n\t\t\t\t\tCurrent Temperature (F)\n\t\t\t\t")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTemperature,expression:"currentTemperature"}],attrs:{type:"number"},domProps:{value:t.currentTemperature},on:{input:function(e){e.target.composing||(t.currentTemperature=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-with-label"},[n("div",{staticClass:"label"},[t._v("\n\t\t\t\t\tCalibration Temperature (F)\n\t\t\t\t")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.calibrationTemperature,expression:"calibrationTemperature"}],attrs:{type:"number"},domProps:{value:t.calibrationTemperature},on:{input:function(e){e.target.composing||(t.calibrationTemperature=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"adjusted-gravity"},[t._v("\n\t\t\t"+t._s(t.adjustedGravity)+"\n\t\t")])])],1)},r=[];a._withStripped=!0,n.d(e,"render",function(){return a}),n.d(e,"staticRenderFns",function(){return r})},152:function(t,e,n){"use strict";var a=n(92);n.n(a).a},200:function(t,e,n){"use strict";n.r(e);var a=n(128),r=n(121),i=(n(152),n(0)),o=Object(i.a)(r.a,a.render,a.staticRenderFns,!1,null,"580440fa",null),s=n(2);s.install(n(1)),s.compatible&&(t.hot.accept(),t.hot.data?s.reload("580440fa",o.options):s.createRecord("580440fa",o.options),t.hot.accept(128,function(t){a=n(128),s.rerender("580440fa",{render:a.render,staticRenderFns:a.staticRenderFns})})),o.options.__file="src/pages/hydrometer-temperature-correction/index.vue",e.default=o.exports},92:function(t,e,n){var a=n(93);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=(0,n(4).default)("4a6c6c58",a,!1,{});a.locals||t.hot.accept(93,function(){var e=n(93);"string"==typeof e&&(e=[[t.i,e,""]]),r(e)}),t.hot.dispose(function(){r()})},93:function(t,e,n){(e=t.exports=n(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Berkshire+Swash|Fira+Sans);",""]),e.push([t.i,'.hydrometer-temperature-correction[data-v-580440fa] {\n  margin-top: 30px;\n  background: #fffbfb;\n  display: flex;\n}\n.hydrometer-temperature-correction > *[data-v-580440fa] {\n    width: 100%;\n}\n.inputs[data-v-580440fa] {\n  background: #eb616b;\n  padding: 20px;\n}\n.adjusted-gravity[data-v-580440fa] {\n  font-family: "Berkshire Swash", cursive;\n  width: 350px;\n  min-width: 350px;\n  text-align: center;\n  font-size: 80px;\n  color: #1D3557;\n  border-left: 15px solid #E63946;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.input-with-label[data-v-580440fa]:not(:last-child) {\n  margin-bottom: 20px;\n}\n.input-with-label .label[data-v-580440fa] {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 14px;\n  margin-bottom: 5px;\n  color: #1D3557;\n}\n.input-with-label[data-v-580440fa] > input {\n  width: 100%;\n}\n@media (max-width: 800px) {\n.hydrometer-temperature-correction[data-v-580440fa] {\n    margin-top: 10px;\n    display: block;\n}\n.adjusted-gravity[data-v-580440fa] {\n    width: 100%;\n    background: #fffbfb;\n    border-left: 0;\n    height: 150px;\n}\n}\n',""])}}]);
//# sourceMappingURL=11.bundle.js.map