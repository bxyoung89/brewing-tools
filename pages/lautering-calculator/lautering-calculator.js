// import '../components/site-nav/index.js';
// import '../components/translation/index.js';
// import '../components/home-page/index.js';
// import '../components/about-page/index.js';
// import '../components/about-section/index.js';
import './components/grain-card/index.js';
import LauteringCalculatorService from '../../services/lautering-calculator-service.js';

const emptyGrain = {
	grain: undefined,
	pounds: 0,
};

Vue.component('v-select', VueSelect.VueSelect);

const app = new Vue({
	el: '#app',
	data: {
		wortVolume: 5.5,
		gravityMeasurement: 1.050,
		grains: [
			{
				...emptyGrain,
			}
		],
	},
	methods: {
		removeGrainAtIndex: function(index) {
			this.grains.splice(index, 1);
		},
		addNewGrain: function () {
			this.grains.push({
				...emptyGrain,
			});
		},
	},
	computed: {
		efficiency: function() {
			return LauteringCalculatorService.getEfficiency(this.wortVolume, this.gravityMeasurement, this.grains);
		},
	}
});