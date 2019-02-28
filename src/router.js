import Vue from "vue";
import Router from "vue-router";
import MainPage from "./pages/main-page/index.vue";
import LauteringCalculator from "./dynamic-routes/lautering-calculator";
import About from "./dynamic-routes/about";
import HydrometerTemperatureCorrection from "./dynamic-routes/hydrometer-temperature-correction";
import IBUCalculator from "./dynamic-routes/ibu-calculator";
import HopDirectory from "./dynamic-routes/hop-directory";
import HopDetail from "./dynamic-routes/hop-detail";
import HopVisualization from "./dynamic-routes/hop-visualization";
import ABVCaluclator from "./dynamic-routes/abv-calculator";
import Blog from "./dynamic-routes/blog";
import BlogDetail from "./dynamic-routes/blog-detail";
import PrimingSugarCalculator from "./dynamic-routes/priming-sugar-calculator";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			component: MainPage,
		},
		{
			path: "*",
			component: MainPage,
		},
		{
			path: "/lautering-calculator",
			component: LauteringCalculator,
		},
		{
			path: "/about",
			component: About,
		},
		{
			path: "/hydrometer-correction",
			component: HydrometerTemperatureCorrection,
		},
		{
			path: "/ibu-calculator",
			component: IBUCalculator,
		},
		{
			path: "/ibu-calculator",
			component: IBUCalculator,
		},
		{
			path: "/hop-directory",
			component: HopDirectory,
		},
		{
			path: "/hop-directory/:id",
			component: HopDetail,
		},
		{
			path: "/hop-visualization",
			component: HopVisualization,
		},
		{
			path: "/abv-calculator",
			component: ABVCaluclator,
		},
		{
			path: "/blog",
			component: Blog,
		},
		{
			path: "/blog/:id",
			component: BlogDetail,
		},
		{
			path: '/priming-sugar-calculator',
			component: PrimingSugarCalculator,
		}
	],
});
