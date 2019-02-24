(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{117:function(t,n,e){"use strict";var a=e(17),o=e.n(a),i=e(154);function r(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var s={litres:3.78541},c={gallons:1/3.78541},l={grams:28.3495},u={ounces:1/28.3495},p=new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,a;return n=t,(e=[{key:"convertGallonsToLitres",value:function(t){return s.litres*t}},{key:"convertLitresToGallons",value:function(t){return c.gallons*t}},{key:"convertOuncesToGrams",value:function(t){return l.grams*t}},{key:"convertGramsToOunces",value:function(t){return u.ounces*t}}])&&r(n.prototype,e),a&&r(n,a),t}()),d=function(t){return t.filter(function(t){return t.boilTime>0&&t.alphaAcid>0&&t.ounces>0})};function v(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var h=[{name:"Tinsenth",id:"Tinsenth",calculateIBUs:function(t,n,e){return d(t).map(function(t){var a=t.alphaAcid,o=t.boilTime,i=t.ounces,r=(1-Math.pow(Math.E,-.04*o))/4.15;return 75*a*i*1.65*Math.pow(125e-6,e-1)*r/n}).reduce(function(t,n){return t+n},0)}},{name:"Rager",id:"Rager",calculateIBUs:function(t,n,e){var a,o=d(t),i=(a=e)<=1.05?a:1+(a-1.05)/2,r=p.convertGallonsToLitres(n)*i;return o.map(function(t){var n=t.alphaAcid,e=t.boilTime,a=t.isWholeHop,o=t.ounces;return p.convertOuncesToGrams(o)*(a?function(t){return t<10?.05:t<20?.12:t<30?.15:t<45?.19:t<60?.22:t<75?.24:.27}(e):function(t){return t<10?.06:t<20?.15:t<30?.19:t<45?.24:t<60?.27:t<75?.3:.34}(e))*(n/100)*1e3/r}).reduce(function(t,n){return t+n},0)}}],f=new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,a;return n=t,(e=[{key:"getAllIBUCalculators",value:function(){return h}},{key:"getIBUs",value:function(t,n,e,a){return(h.find(function(n){return n.id===t})||h[0]).calculateIBUs(n,e,a).toFixed(0)}}])&&v(n.prototype,e),a&&v(n,a),t}());function b(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},a=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.forEach(function(n){m(t,n,e[n])})}return t}function m(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var g={name:"",averageAlphaAcidPercentage:0,boilTime:60,isWholeHop:!1,ounces:0},x={name:"ibu-calculator",data:function(){return{finalVolume:5.5,boilGravity:1.05,hops:[b({},g)],selectedCalculator:f.getAllIBUCalculators()[0],ibuCalculators:f.getAllIBUCalculators()}},methods:{removeHopAtIndex:function(t){this.hops.splice(t,1)},addNewHop:function(){this.hops.push(b({},g))},updateHopAtIndex:function(t,n){this.hops.splice(n,1,t)}},computed:{ibu:function(){return f.getIBUs(this.selectedCalculator.id,this.hops,this.finalVolume,this.boilGravity)}},components:{HopCard:i.a,"v-select":o.a}};n.a=x},131:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"body-content"},[e("app-header"),t._v(" "),e("h1",[t._v("\n\t\tIBU Calculator\n\t")]),t._v(" "),e("div",{staticClass:"ibu-calculator"},[e("div",{staticClass:"inputs"},[e("div",{staticClass:"input-section"},[e("div",{staticClass:"input-section-title"},[t._v("\n\t\t\t\t\tIBU Formula\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"regular-input"},[e("v-select",{attrs:{label:"name",options:t.ibuCalculators,searchable:!1},model:{value:t.selectedCalculator,callback:function(n){t.selectedCalculator=n},expression:"selectedCalculator"}})],1)]),t._v(" "),e("div",{staticClass:"double-section"},[e("div",{staticClass:"input-section"},[e("div",{staticClass:"input-section-title"},[t._v("\n\t\t\t\t\t\tAfter Boil Wort Volume (Gallons)\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"regular-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.finalVolume,expression:"finalVolume"}],attrs:{type:"number",placeholder:"dat volume in dat dere pot"},domProps:{value:t.finalVolume},on:{input:function(n){n.target.composing||(t.finalVolume=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"input-section"},[e("div",{staticClass:"input-section-title"},[t._v("\n\t\t\t\t\t\tGravity Measurement During Boil (1.xxx)\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"regular-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boilGravity,expression:"boilGravity"}],attrs:{type:"number",placeholder:"how heavy is yo shit"},domProps:{value:t.boilGravity},on:{input:function(n){n.target.composing||(t.boilGravity=n.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"hops-section"},[e("div",{staticClass:"hops-section-title"},[t._v("\n\t\t\t\t\tHops\n\t\t\t\t")]),t._v(" "),e("hop-card",{attrs:{"number-of-cards":t.hops.length}}),t._v(" "),t._l(t.hops,function(n,a){return e("div",{key:a,staticClass:"hop-list"},[e("hop-card",{attrs:{hop:n,"remove-hop-at-index":t.removeHopAtIndex,index:a,"number-of-cards":t.hops.length},on:{changed:t.updateHopAtIndex}})],1)}),t._v(" "),e("div",{staticClass:"more-hops-button"},[e("app-button",{attrs:{theme:"dark-blue",click:t.addNewHop}},[t._v("\n\t\t\t\t\t\tAdd more hops\n\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"footnotes"},[t._v("\n\t\t\t\t\t* If you add hops in at 60 minutes of a 60 minute boil, put 60.\n\t\t\t\t")])],2)]),t._v(" "),e("div",{staticClass:"ibu"},[e("div",{staticClass:"ibu-title"},[t._v("\n\t\t\t\tYour estimated IBUs are\n\t\t\t")]),t._v(" "),e("div",{staticClass:"ibu-number"},[t._v("\n\t\t\t\t"+t._s(t.ibu)+"\n\t\t\t")]),t._v(" "),Number.parseFloat(t.ibu)>200?e("div",{staticClass:"ibu-warning"},[t._v("\n\t\t\t\tSeems a bit high."),e("br"),e("br"),t._v("Check your numbers?\n\t\t\t")]):t._e()])])],1)},o=[];a._withStripped=!0,e.d(n,"render",function(){return a}),e.d(n,"staticRenderFns",function(){return o})},141:function(t,n,e){"use strict";function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var o={name:"hop-card",props:["index","hop","removeHopAtIndex","numberOfCards"],methods:{onHopDropdownChange:function(t){if(this.hop.name!==t.name){var n=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){a(t,n,e[n])})}return t}({},this.hop,t,{alphaAcid:t.averageAlphaAcidPercentage||t.alphaAcid||this.hop.alphaAcid});this.$emit("changed",n,this.index)}}}};n.a=o},145:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hop-card"},[void 0===t.hop?e("div",{class:{"hop-card-content":!0,"title-row":!0,"has-cancel-button":t.numberOfCards>1}},[e("div",[t._v("\n\t\t\tName\n\t\t")]),t._v(" "),e("div",[t._v("\n\t\t\tAlpha Acid\n\t\t")]),t._v(" "),t._m(0),t._v(" "),e("div",[t._v("\n\t\t\tOunces\n\t\t")]),t._v(" "),e("div",[t._v("\n\t\t\tWhole Hop?\n\t\t")]),t._v(" "),t.numberOfCards>1?e("div"):t._e()]):t._e(),t._v(" "),void 0!==t.hop?e("div",{class:{"hop-card-content":!0,"has-cancel-button":t.numberOfCards>1}},[e("div",[e("hop-dropdown",{attrs:{value:t.hop},on:{input:t.onHopDropdownChange}})],1),t._v(" "),e("div",[e("input",{attrs:{type:"number"},domProps:{value:t.hop.alphaAcid},on:{input:function(n){return t.onHopDropdownChange({alphaAcid:Number.parseFloat(n.target.value)})}}})]),t._v(" "),e("div",[e("input",{attrs:{type:"number"},domProps:{value:t.hop.boilTime},on:{input:function(n){return t.onHopDropdownChange({boilTime:Number.parseFloat(n.target.value)})}}})]),t._v(" "),e("div",[e("input",{attrs:{type:"number"},domProps:{value:t.hop.ounces},on:{input:function(n){return t.onHopDropdownChange({ounces:Number.parseFloat(n.target.value)})}}})]),t._v(" "),e("div",[e("div",{staticClass:"checkbox-wrapper"},[e("checkbox",{attrs:{value:t.hop.isWholeHop},on:{input:function(n){return t.onHopDropdownChange({isWholeHop:n})}},model:{value:t.hop.isWholeHop,callback:function(n){t.$set(t.hop,"isWholeHop",n)},expression:"hop.isWholeHop"}})],1)]),t._v(" "),t.numberOfCards>1?e("x-button",{attrs:{click:function(){return t.removeHopAtIndex(t.index)},"class-name":"remove-hop-button"}}):t._e()],1):t._e()])},o=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[this._v("\n\t\t\tBoil Time"),n("i",[this._v("*")])])}];a._withStripped=!0,e.d(n,"render",function(){return a}),e.d(n,"staticRenderFns",function(){return o})},154:function(t,n,e){"use strict";var a=e(145),o=e(141),i=(e(155),e(0)),r=Object(i.a)(o.a,a.render,a.staticRenderFns,!1,null,"06252e56",null),s=e(2);s.install(e(1)),s.compatible&&(t.hot.accept(),t.hot.data?s.reload("06252e56",r.options):s.createRecord("06252e56",r.options),t.hot.accept(145,function(t){a=e(145),s.rerender("06252e56",{render:a.render,staticRenderFns:a.staticRenderFns})})),r.options.__file="src/pages/ibu-calculator/components/hop-card.vue",n.a=r.exports},155:function(t,n,e){"use strict";var a=e(94);e.n(a).a},156:function(t,n,e){"use strict";var a=e(96);e.n(a).a},203:function(t,n,e){"use strict";e.r(n);var a=e(131),o=e(117),i=(e(156),e(0)),r=Object(i.a)(o.a,a.render,a.staticRenderFns,!1,null,"707abe3a",null),s=e(2);s.install(e(1)),s.compatible&&(t.hot.accept(),t.hot.data?s.reload("707abe3a",r.options):s.createRecord("707abe3a",r.options),t.hot.accept(131,function(t){a=e(131),s.rerender("707abe3a",{render:a.render,staticRenderFns:a.staticRenderFns})})),r.options.__file="src/pages/ibu-calculator/index.vue",n.default=r.exports},94:function(t,n,e){var a=e(95);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=(0,e(4).default)("0b9e0034",a,!1,{});a.locals||t.hot.accept(95,function(){var n=e(95);"string"==typeof n&&(n=[[t.i,n,""]]),o(n)}),t.hot.dispose(function(){o()})},95:function(t,n,e){(n=t.exports=e(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Berkshire+Swash|Fira+Sans);",""]),n.push([t.i,".hop-card[data-v-06252e56] .clear {\n  display: none;\n}\n.hop-card-content[data-v-06252e56] {\n  display: grid;\n  margin-bottom: 10px;\n  grid-template-columns: 220px 80px 80px 80px 100px;\n  grid-column-gap: 10px;\n}\n.hop-card-content[data-v-06252e56] > div > input {\n    width: 100%;\n}\n[data-v-06252e56] .hop-card-content.has-cancel-button {\n    grid-template-columns: 220px 80px 80px 50px 100px 30px;\n}\n.title-row[data-v-06252e56] {\n  text-align: center;\n  font-size: 14px;\n  color: #1D3557;\n}\n.checkbox-wrapper[data-v-06252e56] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.remove-hop-button[data-v-06252e56] {\n  height: 100%;\n  width: 20px;\n}\n",""])},96:function(t,n,e){var a=e(97);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=(0,e(4).default)("7d298736",a,!1,{});a.locals||t.hot.accept(97,function(){var n=e(97);"string"==typeof n&&(n=[[t.i,n,""]]),o(n)}),t.hot.dispose(function(){o()})},97:function(t,n,e){(n=t.exports=e(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Berkshire+Swash|Fira+Sans);",""]),n.push([t.i,'.ibu-calculator[data-v-707abe3a] {\n  margin-top: 30px;\n  display: flex;\n  background: #eb616b;\n}\n.ibu-calculator[data-v-707abe3a] .dropdown-toggle {\n    background: #FFF;\n}\n.ibu-calculator[data-v-707abe3a] .clear {\n    display: none;\n}\n.inputs[data-v-707abe3a] {\n  flex-grow: 1;\n  padding: 20px;\n}\n.double-section[data-v-707abe3a] {\n  display: flex;\n  justify-content: space-between;\n}\n.double-section > *[data-v-707abe3a] {\n    flex-grow: 1;\n}\n.double-section > *[data-v-707abe3a]:first-child {\n      padding-right: 20px;\n}\n.double-section > *[data-v-707abe3a]:last-child {\n      padding-left: 20px;\n}\n.input-section[data-v-707abe3a] {\n  margin-bottom: 20px;\n}\n.input-section-title[data-v-707abe3a] {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  margin-bottom: 5px;\n  font-size: 12px;\n  color: #1D3557;\n}\n.regular-input[data-v-707abe3a] {\n  width: 100%;\n}\n.regular-input > input[data-v-707abe3a] {\n    width: 100%;\n}\n.ibu[data-v-707abe3a] {\n  width: 350px;\n  min-width: 350px;\n  padding: 20px;\n  color: #1D3557;\n  background: #fffbfb;\n  border-left: 15px solid #E63946;\n}\n.ibu-title[data-v-707abe3a] {\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n}\n.ibu-number[data-v-707abe3a] {\n  text-align: center;\n  font-size: 80px;\n  line-height: 140px;\n  font-family: "Berkshire Swash", cursive;\n}\n.ibu-warning[data-v-707abe3a] {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  color: #E63946;\n  font-size: 12px;\n  line-height: 10px;\n}\n.hops-section-title[data-v-707abe3a] {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n  margin-bottom: 5px;\n  font-size: 24px;\n}\n.more-hops-button[data-v-707abe3a] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.more-hops-button[data-v-707abe3a] > button {\n    padding: 10px;\n    font-size: 18px;\n    margin: 0 auto;\n}\n.footnotes[data-v-707abe3a] {\n  margin-top: 30px;\n  font-size: 12px;\n  opacity: 0.75;\n  color: #1D3557;\n  text-align: center;\n}\n',""])}}]);
//# sourceMappingURL=5.bundle.js.map