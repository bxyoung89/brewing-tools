(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{151:function(t,n,a){var e=a(152);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=(0,a(4).default)("675decc9",e,!1,{});e.locals||t.hot.accept(152,function(){var n=a(152);"string"==typeof n&&(n=[[t.i,n,""]]),i(n)}),t.hot.dispose(function(){i()})},152:function(t,n,a){(n=t.exports=a(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Berkshire+Swash|Fira+Sans);",""]),n.push([t.i,'.abv-calculator[data-v-16f401e1] {\n  margin-top: 30px;\n  background: #fffbfb;\n  display: flex;\n}\n.abv-calculator > *[data-v-16f401e1] {\n    width: 100%;\n}\n.abv-calculator[data-v-16f401e1] .dropdown-toggle {\n    background: #FFF;\n}\n.abv-calculator[data-v-16f401e1] .clear {\n    display: none;\n}\n.inputs[data-v-16f401e1] {\n  background: #eb616b;\n  padding: 20px;\n}\n.adjusted-gravity[data-v-16f401e1] {\n  font-family: "Berkshire Swash", cursive;\n  width: 350px;\n  min-width: 350px;\n  text-align: center;\n  font-size: 80px;\n  color: #1D3557;\n  border-left: 15px solid #E63946;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.input-with-label[data-v-16f401e1]:not(:last-child) {\n  margin-bottom: 20px;\n}\n.input-with-label .label[data-v-16f401e1] {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 14px;\n  margin-bottom: 5px;\n  color: #1D3557;\n}\n.input-with-label[data-v-16f401e1] > input {\n  width: 100%;\n}\n@media (max-width: 800px) {\n.abv-calculator[data-v-16f401e1] {\n    margin-top: 10px;\n    display: block;\n}\n.adjusted-gravity[data-v-16f401e1] {\n    width: 100%;\n    background: #fffbfb;\n    border-left: 0;\n    height: 150px;\n}\n}\n',""])},162:function(t,n,a){"use strict";var e=a(17),i=a.n(e);function r(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var o=[{name:"Alternate (optimized for high gravity)",getAbv:function(t,n){return 76.08*(t-n)/(1.775-t)*(n/.794)}},{name:"Basic",getAbv:function(t,n){return 131.25*(t-n)}}],l=new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,a,e;return n=t,(a=[{key:"getABVFormulae",value:function(){return o}}])&&r(n.prototype,a),e&&r(n,e),t}()),s={name:"abv-calculator",data:function(){return{abvFormulae:l.getABVFormulae(),selectedFormula:l.getABVFormulae()[0],originalGravity:1.05,finalGravity:1.01}},computed:{abv:function(){return this.selectedFormula.getAbv(this.originalGravity,this.finalGravity)}},components:{"v-select":i.a}};n.a=s},170:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"body-content"},[a("app-header"),t._v(" "),a("h1",[t._v("\n\t\tAlcohol by Volume Calculator\n\t")]),t._v(" "),a("div",{staticClass:"abv-calculator"},[a("div",{staticClass:"inputs"},[a("div",{staticClass:"input-with-label"},[a("v-select",{attrs:{label:"name",options:t.abvFormulae,searchable:!1},model:{value:t.selectedFormula,callback:function(n){t.selectedFormula=n},expression:"selectedFormula"}})],1),t._v(" "),a("div",{staticClass:"input-with-label"},[a("div",{staticClass:"label"},[t._v("\n\t\t\t\t\tOriginal Gravity\n\t\t\t\t")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.originalGravity,expression:"originalGravity"}],attrs:{type:"number"},domProps:{value:t.originalGravity},on:{input:function(n){n.target.composing||(t.originalGravity=n.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-with-label"},[a("div",{staticClass:"label"},[t._v("\n\t\t\t\t\tFinal Gravity\n\t\t\t\t")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.finalGravity,expression:"finalGravity"}],attrs:{type:"number"},domProps:{value:t.finalGravity},on:{input:function(n){n.target.composing||(t.finalGravity=n.target.value)}}})])]),t._v(" "),a("div",{staticClass:"adjusted-gravity"},[t._v("\n\t\t\t"+t._s(t.abv.toFixed(2))+"%\n\t\t")])])],1)},i=[];e._withStripped=!0,a.d(n,"render",function(){return e}),a.d(n,"staticRenderFns",function(){return i})},212:function(t,n,a){"use strict";var e=a(151);a.n(e).a},229:function(t,n,a){"use strict";a.r(n);var e=a(170),i=a(162),r=(a(212),a(0)),o=Object(r.a)(i.a,e.render,e.staticRenderFns,!1,null,"16f401e1",null),l=a(2);l.install(a(1)),l.compatible&&(t.hot.accept(),t.hot.data?l.reload("16f401e1",o.options):l.createRecord("16f401e1",o.options),t.hot.accept(170,function(t){e=a(170),l.rerender("16f401e1",{render:e.render,staticRenderFns:e.staticRenderFns})}.bind(this))),o.options.__file="src/pages/abv-calculator/index.vue",n.default=o.exports}}]);
//# sourceMappingURL=9.bundle.js.map