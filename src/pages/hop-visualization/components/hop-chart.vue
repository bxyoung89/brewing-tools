<template>
	<div class="hop-chart">
		<svg :id="id"></svg>
	</div>

</template>

<script>
	import ChartRenderer from './chart-renderers/chart-renderer';

	export default {
		name: "hop-chart",
		data: function(){
			return {
				id: 'hop-chart',
			};
		},
		props: ['hops', 'valueFunction', 'valueName', 'valueFormatter', 'maxValue'],
		mounted: function(){
			ChartRenderer.render(this);
		},
		updated: function(){
			ChartRenderer.render(this);
		}
	}
</script>

<style lang="scss">
	@import "../../../styles/core";

	.hop-chart {
		width: 100%;
		height: 500px;
		background: $dark-blue;

		> svg {
			height: 100%;
			width: 100%;
		}

		.center-line {
			stroke: $white;
		}
	}
</style>