import template from './template.js';
import allGrains from '../../../../data/grains.js';
import CountryCodeToSvgPathService from '../../../../services/country-code-to-svg-path-service.js';

Vue.component('grain-card', {
	template,
	props: ['index', 'grain', 'removeGrainAtIndex', 'numberOfCards'],
	data: function() {
		return {
			allGrains,
			getFlagFromCountry: (country) => CountryCodeToSvgPathService.getSvgPath(country),
		};
	},
});