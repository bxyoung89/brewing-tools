(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{133:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"body-content"},[a("app-header"),t._v(" "),a("h1",[t._v("\n\t\tHop Directory\n\t")]),t._v(" "),a("div",{staticClass:"hop-directory"},t._l(t.allHops,function(n){return a("router-link",{key:n.id,staticClass:"hop-link",attrs:{to:"/hop-directory/"+n.id}},[a("div",{staticClass:"hop-flag"},[a("dynamic-svg",{attrs:{src:t.getFlagFromCountry(n.country)}})],1),t._v(" "),a("div",{staticClass:"hop-name"},[t._v("\n\t\t\t\t"+t._s(n.name)+"\n\t\t\t")])])}),1)],1)},o=[];e._withStripped=!0,a.d(n,"render",function(){return e}),a.d(n,"staticRenderFns",function(){return o})},134:function(t,n,a){"use strict";var e=a(55),o=a(18),r={name:"hop-directory",data:function(){return{allHops:e.a,getFlagFromCountry:function(t){return o.a.getSvgPath(t)}}}};n.a=r},157:function(t,n,a){"use strict";var e=a(98);a.n(e).a},204:function(t,n,a){"use strict";a.r(n);var e=a(133),o=a(134),r=(a(157),a(0)),i=Object(r.a)(o.a,e.render,e.staticRenderFns,!1,null,"7f772858",null),s=a(2);s.install(a(1)),s.compatible&&(t.hot.accept(),t.hot.data?s.reload("7f772858",i.options):s.createRecord("7f772858",i.options),t.hot.accept(133,function(t){e=a(133),s.rerender("7f772858",{render:e.render,staticRenderFns:e.staticRenderFns})})),i.options.__file="src/pages/hop-directory/index.vue",n.default=i.exports},98:function(t,n,a){var e=a(99);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=(0,a(4).default)("0a297978",e,!1,{});e.locals||t.hot.accept(99,function(){var n=a(99);"string"==typeof n&&(n=[[t.i,n,""]]),o(n)}),t.hot.dispose(function(){o()})},99:function(t,n,a){(n=t.exports=a(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Berkshire+Swash|Fira+Sans);",""]),n.push([t.i,".hop-link[data-v-7f772858] {\n  display: flex;\n  margin-bottom: 5px;\n  cursor: pointer;\n  height: 40px;\n  width: 100%;\n  background: #1D3557;\n  color: #FFF;\n  text-decoration: none;\n}\n.hop-link[data-v-7f772858]:hover {\n    background: #4a5d79;\n}\n.hop-link[data-v-7f772858]:active {\n    background: #344968;\n}\n.hop-flag[data-v-7f772858] {\n  height: 40px;\n  width: 40px;\n  padding: 5px;\n  margin-right: 10px;\n}\n.hop-flag[data-v-7f772858] > svg {\n    height: 100%;\n    width: 100%;\n}\n.hop-name[data-v-7f772858] {\n  line-height: 40px;\n  flex-grow: 1;\n  font-size: 16px;\n}\n",""])}}]);
//# sourceMappingURL=10.bundle.js.map