(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{120:function(t,n,e){"use strict";var i=e(148);function a(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,i;return n=t,(e=[{key:"getEfficiency",value:function(t,n,e){if(!t||!n)return"--";var i=e.filter(function(t){return t.grain&&t.pounds>0});if(0===i.length)return"--";var a=i.map(function(n){var e=n.grain,i=n.pounds;return e.ppg*i/t}).reduce(function(t,n){return t+n},0);return"".concat((1e3*(n-1)/a*100).toFixed(2),"%")}}])&&a(n.prototype,e),i&&a(n,i),t}());function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(n){o(t,n,e[n])})}return t}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c={grain:void 0,pounds:0},d={name:"lautering-calculator",data:function(){return{wortVolume:5.5,gravityMeasurement:1.05,grains:[s({},c)]}},methods:{removeGrainAtIndex:function(t){this.grains.splice(t,1)},addNewGrain:function(){this.grains.push(s({},c))}},computed:{efficiency:function(){return r.getEfficiency(this.wortVolume,this.gravityMeasurement,this.grains)}},components:{GrainCard:i.a}};n.a=d},126:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"body-content"},[e("app-header"),t._v(" "),e("h1",[t._v("\n\t\tLautering Efficiency Calculator\n\t")]),t._v(" "),e("div",{staticClass:"lautering-calculator"},[e("div",{staticClass:"inputs"},[e("div",{staticClass:"inputs-title"},[t._v("\n\t\t\t\tEnter yo digits...\n\t\t\t")]),t._v(" "),e("div",{staticClass:"double-section"},[e("div",{staticClass:"input-section"},[e("div",{staticClass:"input-section-title"},[t._v("\n\t\t\t\t\t\tWort Volume (Gallons)\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"regular-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.wortVolume,expression:"wortVolume"}],attrs:{type:"number",placeholder:"dat volume in dat dere pot"},domProps:{value:t.wortVolume},on:{input:function(n){n.target.composing||(t.wortVolume=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"input-section"},[e("div",{staticClass:"input-section-title"},[t._v("\n\t\t\t\t\t\tGravity Measurement (1.xxx)\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"regular-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gravityMeasurement,expression:"gravityMeasurement"}],attrs:{type:"number",placeholder:"how heavy is yo shit"},domProps:{value:t.gravityMeasurement},on:{input:function(n){n.target.composing||(t.gravityMeasurement=n.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"grains-section"},[e("div",{staticClass:"grains-section-title"},[t._v("\n\t\t\t\t\tGrains\n\t\t\t\t")]),t._v(" "),t._l(t.grains,function(n,i){return e("div",{key:i,staticClass:"grain-list"},[e("grain-card",{attrs:{grain:n,"remove-grain-at-index":t.removeGrainAtIndex,index:i,"number-of-cards":t.grains.length}})],1)}),t._v(" "),e("div",{staticClass:"more-grains-button"},[e("app-button",{attrs:{theme:"dark-blue",click:t.addNewGrain}},[t._v("\n\t\t\t\t\t\tAdd more grains\n\t\t\t\t\t")])],1)],2)]),t._v(" "),e("div",{staticClass:"efficiency"},[e("div",{staticClass:"efficiency-title"},[t._v("\n\t\t\t\tYour efficiency is\n\t\t\t")]),t._v(" "),e("div",{staticClass:"efficiency-number"},[t._v("\n\t\t\t\t"+t._s(t.efficiency)+"\n\t\t\t")]),t._v(" "),Number.parseFloat(t.efficiency)>100?e("div",{staticClass:"efficiency-warning"},[t._v("\n\t\t\t\tSeems a bit high."),e("br"),e("br"),t._v("Check your numbers?\n\t\t\t")]):t._e(),t._v(" "),Number.parseFloat(t.efficiency)<30?e("div",{staticClass:"efficiency-warning"},[t._v("\n\t\t\t\tSeems a bit low."),e("br"),e("br"),t._v("Check your numbers?\n\t\t\t")]):t._e()])])],1)},a=[];i._withStripped=!0,e.d(n,"render",function(){return i}),e.d(n,"staticRenderFns",function(){return a})},141:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"grain-card"},[e("div",{staticClass:"grain-content"},[e("div",{staticClass:"input-section"},[e("div",{staticClass:"input-section-title"},[t._v("\n\t\t\t\tGrain\n\t\t\t")]),t._v(" "),e("grain-dropdown",{model:{value:t.grain.grain,callback:function(n){t.$set(t.grain,"grain",n)},expression:"grain.grain"}})],1),t._v(" "),e("div",{staticClass:"input-section"},[e("div",{staticClass:"input-section-title"},[t._v("\n\t\t\t\tPounds\n\t\t\t")]),t._v(" "),e("div",{staticClass:"regular-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.grain.pounds,expression:"grain.pounds"}],attrs:{type:"number",placeholder:"pounds",value:"0"},domProps:{value:t.grain.pounds},on:{input:function(n){n.target.composing||t.$set(t.grain,"pounds",n.target.value)}}})])])]),t._v(" "),t.numberOfCards>1?e("x-button",{attrs:{click:function(){return t.removeGrainAtIndex(t.index)},"class-name":"remove-grain-button"}}):t._e()],1)},a=[];i._withStripped=!0,e.d(n,"render",function(){return i}),e.d(n,"staticRenderFns",function(){return a})},143:function(t,n,e){"use strict";n.a={name:"grain-card",props:["index","grain","removeGrainAtIndex","numberOfCards"]}},148:function(t,n,e){"use strict";var i=e(141),a=e(143),r=(e(149),e(0)),s=Object(r.a)(a.a,i.render,i.staticRenderFns,!1,null,"2aed8d04",null),o=e(2);o.install(e(1)),o.compatible&&(t.hot.accept(),t.hot.data?o.reload("2aed8d04",s.options):o.createRecord("2aed8d04",s.options),t.hot.accept(141,function(t){i=e(141),o.rerender("2aed8d04",{render:i.render,staticRenderFns:i.staticRenderFns})})),s.options.__file="src/pages/lautering-calculator/components/grain-card.vue",n.a=s.exports},149:function(t,n,e){"use strict";var i=e(86);e.n(i).a},150:function(t,n,e){"use strict";var i=e(88);e.n(i).a},198:function(t,n,e){"use strict";e.r(n);var i=e(126),a=e(120),r=(e(150),e(0)),s=Object(r.a)(a.a,i.render,i.staticRenderFns,!1,null,"6c171f15",null),o=e(2);o.install(e(1)),o.compatible&&(t.hot.accept(),t.hot.data?o.reload("6c171f15",s.options):o.createRecord("6c171f15",s.options),t.hot.accept(126,function(t){i=e(126),o.rerender("6c171f15",{render:i.render,staticRenderFns:i.staticRenderFns})})),s.options.__file="src/pages/lautering-calculator/index.vue",n.default=s.exports},86:function(t,n,e){var i=e(87);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=(0,e(4).default)("22bbc230",i,!1,{});i.locals||t.hot.accept(87,function(){var n=e(87);"string"==typeof n&&(n=[[t.i,n,""]]),a(n)}),t.hot.dispose(function(){a()})},87:function(t,n,e){(n=t.exports=e(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Berkshire+Swash|Fira+Sans);",""]),n.push([t.i,".grain-card[data-v-2aed8d04] {\n  padding: 20px 0;\n  border-top: 1px solid #f39ca3;\n  border-bottom: 1px solid #f39ca3;\n  display: flex;\n  margin-bottom: -1px;\n  border-radius: 5px;\n}\n.grain-card .grain-content[data-v-2aed8d04] {\n    flex-grow: 1;\n}\n.grain-card .grain-content > *[data-v-2aed8d04] {\n      flex-grow: 1;\n}\n.grain-card .grain-content > .input-section[data-v-2aed8d04] {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      margin-bottom: 10px;\n}\n.grain-card .grain-content > .input-section[data-v-2aed8d04]:last-child {\n        margin-bottom: 0;\n}\n.grain-card .grain-content .input-section-title[data-v-2aed8d04] {\n      text-transform: uppercase;\n      letter-spacing: 0.1em;\n      font-weight: 700;\n      margin-right: 15px;\n      font-size: 12px;\n      color: #1D3557;\n}\n.grain-card .grain-content .grain-dropdown[data-v-2aed8d04] {\n      min-width: 180px;\n      width: 100%;\n}\n.grain-card .remove-grain-button[data-v-2aed8d04] {\n    margin-left: 20px;\n    width: 30px;\n}\n.regular-input[data-v-2aed8d04] {\n  width: 100%;\n}\n.regular-input > input[data-v-2aed8d04] {\n    width: 100%;\n}\n",""])},88:function(t,n,e){var i=e(89);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=(0,e(4).default)("5f8a0869",i,!1,{});i.locals||t.hot.accept(89,function(){var n=e(89);"string"==typeof n&&(n=[[t.i,n,""]]),a(n)}),t.hot.dispose(function(){a()})},89:function(t,n,e){(n=t.exports=e(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Berkshire+Swash|Fira+Sans);",""]),n.push([t.i,'.lautering-calculator[data-v-6c171f15] {\n  margin-top: 30px;\n  display: flex;\n  background: #eb616b;\n}\n.inputs[data-v-6c171f15] {\n  flex-grow: 1;\n  padding: 20px;\n}\n.inputs-title[data-v-6c171f15] {\n  margin-bottom: 20px;\n  font-size: 36px;\n}\n.double-section[data-v-6c171f15] {\n  display: flex;\n  justify-content: space-between;\n}\n.double-section > *[data-v-6c171f15] {\n    flex-grow: 1;\n}\n.double-section > *[data-v-6c171f15]:first-child {\n      padding-right: 20px;\n}\n.double-section > *[data-v-6c171f15]:last-child {\n      padding-left: 20px;\n}\n.input-section[data-v-6c171f15] {\n  margin-bottom: 20px;\n}\n.input-section-title[data-v-6c171f15] {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  margin-bottom: 5px;\n  font-size: 12px;\n  color: #1D3557;\n}\n.regular-input[data-v-6c171f15] {\n  width: 100%;\n}\n.regular-input > input[data-v-6c171f15] {\n    width: 100%;\n}\n.efficiency[data-v-6c171f15] {\n  width: 350px;\n  background: #fffbfb;\n  padding: 20px;\n  color: #1D3557;\n  border-left: 15px solid #E63946;\n}\n.efficiency-title[data-v-6c171f15] {\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n}\n.efficiency-number[data-v-6c171f15] {\n  text-align: center;\n  font-size: 80px;\n  line-height: 140px;\n  font-family: "Berkshire Swash", cursive;\n}\n.efficiency-warning[data-v-6c171f15] {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  color: #E63946;\n  font-size: 12px;\n  line-height: 10px;\n}\n.grains-section-title[data-v-6c171f15] {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  margin-bottom: 5px;\n  font-size: 24px;\n}\n.more-grains-button[data-v-6c171f15] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n.more-grains-button[data-v-6c171f15] > button {\n    padding: 10px;\n    font-size: 18px;\n    margin: 0 auto;\n}\n',""])}}]);
//# sourceMappingURL=6.bundle.js.map