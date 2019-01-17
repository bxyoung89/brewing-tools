<template>
	<div class="hop-chart">
		<div class="value-name">
			{{valueName}}
		</div>
		<svg :id="id"></svg>
		<div class="chart-points" id="chart-points">
			<div v-for="point in chartPoints" :style="{top: `${point.y - 12}px`, left: `${point.scaledX - 10}px`}" class="chart-point">
				<HopChartPoint
						:hop="point"
						:value-function="valueFunction"
						:value-formatter="valueFormatter"
						:value-name="valueName"
					/>
			</div>
		</div>
	</div>

</template>

<script>
	import ChartRenderer from './chart-renderers/chart-renderer';
	import CountryCodeToSvgPathService from "../../../services/country-code-to-svg-path-service";
	import HopChartService from '../../../services/hop-chart-service';
	import HopChartPoint from './hop-chart-point.vue';

	export default {
		name: "hop-chart",
		data: function(){
			return {
				id: 'hop-chart',
				getFlagFromCountry: country => CountryCodeToSvgPathService.getSvgPath(country),
				mounted: false,
			};
		},
		computed: {
			chartPoints: function() {
				if(!this.mounted){
					return [];
				}
				const domElement = document.getElementById('chart-points');
				const widht = domElement.clientWidth;
				const xScale = HopChartService.getXScale(this.maxValue, widht);


				const mappedData = this.hops.map(hop => ({...hop, x: this.valueFunction(hop), scaledX: xScale(this.valueFunction(hop))})).sort((a, b) => b.x - a.x);
				const filteredData = mappedData.filter(hop => hop.x !== 0);
				const processedData = HopChartService.getYValuesForData(filteredData, xScale);
				return processedData;
			}
		},
		props: ['hops', 'valueFunction', 'valueName', 'valueFormatter', 'maxValue'],
		mounted: function(){
			this.mounted = true;
			ChartRenderer.render(this);
		},
		updated: function(){
			ChartRenderer.render(this);
		},
		components: {
			HopChartPoint
		},
	}
</script>

<style lang="scss">
	@import "../../../styles/core";

	.hop-chart {
		width: 100%;
		height: 1200px;
		position: relative;

		.value-name {
			display: none;
		}

		> svg {
			height: 100%;
			width: 100%;
		}

		.center-line {
			stroke: $white;
		}

		.chart-points {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			transform: translateY(50%);
		}

		.chart-point {
			height: 20px;
			width: 20px;
			position: absolute;
			> svg {
				height: 100%;
				width: 100%;
			}
		}
	}
</style>