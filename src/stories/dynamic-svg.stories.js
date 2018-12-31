import {storiesOf} from '@storybook/vue';
import DynamicSvg from '../base-components/dynamic-svg';
import CountryCodeToSvgPathService from '../services/country-code-to-svg-path-service.js';

storiesOf('Dynamic Svg', module)
	.add('static', () => ({
		components: {DynamicSvg},
		template: '<dynamic-svg src="discount.svg"></dynamic-svg>',
	}))
	.add('switching', () => ({
		components: {DynamicSvg},
		data: () => ({
			country: 'BE',
		}),
		template: '<div><div>{{svgPath}}</div><dynamic-svg :src="svgPath"></dynamic-svg></div>',
		mounted: function () {
			setInterval(function(){
				this.country = this.country === 'BE' ? 'US' : 'BE';
			}.bind(this), 1000);
		},
		computed: {
			svgPath: function () {
				return CountryCodeToSvgPathService.getSvgPath(this.country);
			}
		}
	}));


