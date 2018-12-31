(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{125:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(155),__webpack_require__(0),__webpack_require__(33),__webpack_require__(34);function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}var s4=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},guid_service=new(function(){function GuidService(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GuidService)}return Constructor=GuidService,(protoProps=[{key:"newGuid",value:function(){return"".concat(s4()).concat(s4(),"-").concat(s4(),"-").concat(s4(),"-").concat(s4(),"-").concat(s4()).concat(s4()).concat(s4())}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),GuidService;var Constructor,protoProps,staticProps}()),updateElementWithSvgText=function(elementId,svgText){var element=document.getElementById(elementId);element&&(element.insertAdjacentHTML("afterend",svgText),element.nextElementSibling.setAttribute("id",elementId),element.remove())},base_components_dynamic_svgvue_type_script_lang_js_={name:"dynamic-svg",props:["src"],data:function(){return{divId:"dynamic-svg-".concat(guid_service.newGuid())}},mounted:function(){var _this=this;new Promise(function(resolve){__webpack_require__.e(0).then(function(require){resolve(__webpack_require__(810)("./".concat(_this.src)))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)}).then(function(svgText){updateElementWithSvgText(_this.divId,svgText)})},updated:function(){var _this2=this;new Promise(function(resolve){__webpack_require__.e(0).then(function(require){resolve(__webpack_require__(810)("./".concat(_this2.src)))}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)}).then(function(svgText){updateElementWithSvgText(_this2.divId,svgText)})}},componentNormalizer=__webpack_require__(51),component=Object(componentNormalizer.a)(base_components_dynamic_svgvue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)("div",{attrs:{id:this.divId}},[this._v(this._s(this.src))])},[],!1,null,null,null);component.options.__file="dynamic-svg.vue";__webpack_exports__.a=component.exports},198:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0);function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}var countryCodeToSvgPath={NZ:"flag-icons/264-new-zealand.svg",US:"flag-icons/264-united-states.svg",BE:"flag-icons/264-belgium.svg",CA:"flag-icons/264-canada.svg",FI:"flag-icons/264-finland.svg",DE:"flag-icons/264-germany.svg",UK:"flag-icons/264-united-kingdom.svg",IE:"flag-icons/264-ireland.svg"},CountryCodeToSVGPathService=function(){function CountryCodeToSVGPathService(){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CountryCodeToSVGPathService)}return Constructor=CountryCodeToSVGPathService,(protoProps=[{key:"getSvgPath",value:function(countryCode){return countryCodeToSvgPath[countryCode]||"flag-icons/unknown-country.svg"}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),CountryCodeToSVGPathService;var Constructor,protoProps,staticProps}();__webpack_exports__.a=new CountryCodeToSVGPathService},199:function(module,__webpack_exports__,__webpack_require__){"use strict";var base_components_app_headervue_type_script_lang_js_={name:"app-header"},componentNormalizer=(__webpack_require__(371),__webpack_require__(51)),component=Object(componentNormalizer.a)(base_components_app_headervue_type_script_lang_js_,function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"header"},[_c("router-link",{attrs:{to:"/"}},[this._v("\n\t\tBrewing Tools\n\t")])],1)},[],!1,null,"22f04db4",null);component.options.__file="app-header.vue";__webpack_exports__.a=component.exports},200:function(module,exports,__webpack_require__){__webpack_require__(201),__webpack_require__(280),module.exports=__webpack_require__(281)},281:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(7),__webpack_require__(8),__webpack_require__(9);var _storybook_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(35),req=__webpack_require__(366);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_3__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(70)(module))},366:function(module,exports,__webpack_require__){var map={"./app-button.stories.js":367,"./app-header.stories.js":370,"./dynamic-svg.stories.js":489};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=366},367:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35),_base_components_app_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("App Button",module).add("white-button",function(){return{components:{AppButton:_base_components_app_button__WEBPACK_IMPORTED_MODULE_1__.a},template:"<app-button>Hello World!</app-button>"}}).add("red-button",function(){return{components:{AppButton:_base_components_app_button__WEBPACK_IMPORTED_MODULE_1__.a},template:'<app-button theme="red">Hello World!</app-button>'}}).add("light-blue-button",function(){return{components:{AppButton:_base_components_app_button__WEBPACK_IMPORTED_MODULE_1__.a},template:'<app-button theme="light-blue">Hello World!</app-button>'}}).add("blue-button",function(){return{components:{AppButton:_base_components_app_button__WEBPACK_IMPORTED_MODULE_1__.a},template:'<app-button theme="blue">Hello World!</app-button>'}}).add("dark-blue",function(){return{components:{AppButton:_base_components_app_button__WEBPACK_IMPORTED_MODULE_1__.a},template:'<app-button theme="dark-blue">Hello World!</app-button>'}})}.call(this,__webpack_require__(70)(module))},368:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_button_vue_vue_type_style_index_0_id_00a9ce34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86);__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_button_vue_vue_type_style_index_0_id_00a9ce34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__).a},369:function(module,exports,__webpack_require__){(exports=module.exports=__webpack_require__(175)(!1)).push([module.i,"@import url(https://fonts.googleapis.com/css?family=Berkshire+Swash|Fira+Sans);",""]),exports.push([module.i,".app-button[data-v-00a9ce34] {\n  border: 0;\n  background: #FFF;\n  border-bottom: 2px solid gray;\n  border-radius: 5px;\n  color: #1d3557;\n  padding: 5px;\n  font-size: 12px;\n  line-height: 20px;\n  cursor: pointer;\n}\n.app-button[data-v-00a9ce34]:hover {\n    background: #cccccc;\n}\n.app-button[data-v-00a9ce34]:active {\n    border-top: 2px solid gray;\n    border-bottom: 0;\n}\n.app-button[data-v-00a9ce34]:focus {\n    outline: 0;\n    box-shadow: 0 0 5px 2px #457b9d;\n}\n.app-button.red-button[data-v-00a9ce34] {\n    background: #e63946;\n    border-bottom: 2px solid #770f17;\n    color: #f1faee;\n}\n.app-button.red-button[data-v-00a9ce34]:hover {\n      background: #d21a28;\n}\n.app-button.red-button[data-v-00a9ce34]:active {\n      border-top: 2px solid #770f17;\n      border-bottom: 0;\n}\n.app-button.light-blue-button[data-v-00a9ce34] {\n    background: #a8dadc;\n    border-bottom: 2px solid #358083;\n}\n.app-button.light-blue-button[data-v-00a9ce34]:hover {\n      background: #5fbbbf;\n}\n.app-button.light-blue-button[data-v-00a9ce34]:active {\n      border-top: 2px solid #358083;\n      border-bottom: 0;\n}\n.app-button.blue-button[data-v-00a9ce34] {\n    background: #457b9d;\n    border-bottom: 2px solid #162833;\n    color: #f1faee;\n}\n.app-button.blue-button[data-v-00a9ce34]:hover {\n      background: #355f7a;\n}\n.app-button.blue-button[data-v-00a9ce34]:active {\n      border-top: 2px solid #162833;\n      border-bottom: 0;\n}\n.app-button.dark-blue-button[data-v-00a9ce34] {\n    background: #1d3557;\n    border-bottom: 2px solid #101e31;\n    color: #f1faee;\n}\n.app-button.dark-blue-button[data-v-00a9ce34]:hover {\n      background: #2a4c7d;\n}\n.app-button.dark-blue-button[data-v-00a9ce34]:active {\n      border-top: 2px solid #101e31;\n      border-bottom: 0;\n}\n.app-button.unstyled-button[data-v-00a9ce34] {\n    border: 0;\n    background: transparent;\n    border-radius: 0;\n    padding: 0;\n    height: auto;\n    line-height: 1.2em;\n}\n.app-button.unstyled-button[data-v-00a9ce34]:hover {\n      background: transparent;\n}\n.app-button.unstyled-button[data-v-00a9ce34]:active {\n      border-top: 0;\n      border-bottom: 0;\n}\n.app-button.unstyled-button[data-v-00a9ce34]:focus {\n      outline: 0;\n      box-shadow: none;\n}\n",""])},370:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35),_base_components_app_header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(199),storybook_vue_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(197),storybook_vue_router__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(storybook_vue_router__WEBPACK_IMPORTED_MODULE_2__);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("App Header",module).addDecorator(storybook_vue_router__WEBPACK_IMPORTED_MODULE_2___default()()).add("header",function(){return{components:{AppHeader:_base_components_app_header__WEBPACK_IMPORTED_MODULE_1__.a},template:"<app-header/>"}})}.call(this,__webpack_require__(70)(module))},371:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_22f04db4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(87);__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_22f04db4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__).a},372:function(module,exports,__webpack_require__){(exports=module.exports=__webpack_require__(175)(!1)).push([module.i,"@import url(https://fonts.googleapis.com/css?family=Berkshire+Swash|Fira+Sans);",""]),exports.push([module.i,'.header[data-v-22f04db4] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40px;\n  background: #1d3557;\n  color: #f1faee;\n  padding: 5px;\n  line-height: 30px;\n  font-size: 30px;\n  font-family: "Berkshire Swash", cursive;\n}\n.header[data-v-22f04db4] a {\n    text-decoration: none;\n    color: #f1faee;\n}\n.header[data-v-22f04db4] a:hover {\n      opacity: 0.75;\n}\n',""])},489:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(108);var _storybook_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(35),_base_components_dynamic_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(125),_services_country_code_to_svg_path_service_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(198);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Dynamic Svg",module).add("static",function(){return{components:{DynamicSvg:_base_components_dynamic_svg__WEBPACK_IMPORTED_MODULE_2__.a},template:'<dynamic-svg src="discount.svg"></dynamic-svg>'}}).add("switching",function(){return{components:{DynamicSvg:_base_components_dynamic_svg__WEBPACK_IMPORTED_MODULE_2__.a},data:function(){return{country:"BE"}},template:'<div><div>{{svgPath}}</div><dynamic-svg :src="svgPath"></dynamic-svg></div>',mounted:function(){setInterval(function(){this.country="BE"===this.country?"US":"BE"}.bind(this),1e3)},computed:{svgPath:function(){return _services_country_code_to_svg_path_service_js__WEBPACK_IMPORTED_MODULE_3__.a.getSvgPath(this.country)}}}})}.call(this,__webpack_require__(70)(module))},52:function(module,__webpack_exports__,__webpack_require__){"use strict";var themeToClassMap={white:"white-button",red:"red-button","light-blue":"light-blue-button",blue:"blue-button","dark-blue":"dark-blue-button",unstyled:"unstyled-button"},base_components_app_buttonvue_type_script_lang_js_={name:"app-button",props:["theme","click"],computed:{finalClassName:function(){return"app-button ".concat(themeToClassMap[this.theme||"white"])}}},componentNormalizer=(__webpack_require__(368),__webpack_require__(51)),component=Object(componentNormalizer.a)(base_components_app_buttonvue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)("button",{class:this.finalClassName,on:{click:this.click}},[this._t("default")],2)},[],!1,null,"00a9ce34",null);component.options.__file="app-button.vue";__webpack_exports__.a=component.exports},86:function(module,exports,__webpack_require__){var content=__webpack_require__(369);"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(196).default)("aa369072",content,!0,{})},87:function(module,exports,__webpack_require__){var content=__webpack_require__(372);"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(196).default)("3d1cfe38",content,!0,{})}},[[200,2,3]]]);
//# sourceMappingURL=main.e833061c57e63b926d6e.bundle.js.map