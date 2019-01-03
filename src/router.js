import Vue from "vue";
import Router from "vue-router";
import MainPage from "./pages/main-page/index.vue";
import LauteringCalculator from "./pages/lautering-calculator/index.vue";
import About from "./pages/about/index.vue";
import HydrometerTemperatureCorrection from "./pages/hydrometer-temperature-correction/index.vue";
import IBUCalculator from "./pages/ibu-calculator/index.vue";

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
	],
});
