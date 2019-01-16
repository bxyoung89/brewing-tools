<template>
	<div class="body-content">
		<app-header/>
		<h1>
			Hop Visualization
		</h1>
		<div class="hop-visualization">
			<hop-chart
				:hops="hops"
				:valueFunction="hop => hop.averageAlphaAcidPercentage"
				valueName="Alpha Acids"
				:valueFormatter="value => `${value}%`"
				:maxValue="maxHop.averageAlphaAcidPercentage"
			/>
		</div>
	</div>
</template>

<script>
	import HopChart from './components/hop-chart.vue';
	import hops from '../../data/hop-directory';
	import HopDirectoryService from '../../services/hop-directory-service';

	export default {
		name: "hop-visualization",
		data: () => ({
			hops,
			maxHop: HopDirectoryService.getMaxValues(),
		}),
		methods: {
			removeGrainAtIndex(index) {
				this.grains.splice(index, 1);
			},
			addNewGrain() {
				this.grains.push({
					...emptyGrain,
				});
			},
		},
		components: {
			HopChart,
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	.hop-visualization {
		margin-top: 30px;
	}

</style>
