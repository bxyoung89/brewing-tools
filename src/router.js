import Vue from "vue";
import Router from "vue-router";
import MainPage from "./pages/main-page/index.vue";
import LauteringCalculator from "./pages/lautering-calculator/index.vue";
import About from "./pages/about/index.vue";
import HydrometerTemperatureCorrection from "./pages/hydrometer-temperature-correction/index.vue";
import IBUCalculator from "./pages/ibu-calculator/index.vue";
import HopDirectory from "./pages/hop-directory/index.vue";
import HopDetail from "./pages/hop-directory/hop-detail/index.vue";
import HopVisualization from "./pages/hop-visualization/index.vue";
import ABVCaluclator from "./pages/abv-calculator/index.vue";
import Blog from "./pages/blog/index.vue";
import BlogDetail from "./pages/blog/blog-detail/index.vue";

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
	],
});
