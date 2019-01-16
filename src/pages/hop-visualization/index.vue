<template>
	<div class="body-content">
		<app-header/>
		<h1>
			Hop Visualization
		</h1>
		<div class="hop-visualization">
			<v-select
				:options="dropdownOptions"
				label="valueName"
				v-on:input="(val) => {this.selectedDropdownOption = val}"
				:value="selectedDropdownOption"
			>
			</v-select>
			<hop-chart
				:hops="hops"
				:valueFunction="selectedDropdownOption.valueFunction"
				:valueName="selectedDropdownOption.valueName"
				:valueFormatter="selectedDropdownOption.valueFormatter"
				:maxValue="selectedDropdownOption.maxValue"
			/>
		</div>
	</div>
</template>

<script>
	import VueSelect from "vue-select";
	import HopChart from './components/hop-chart.vue';
	import hops from '../../data/hop-directory';
	import HopDirectoryService from '../../services/hop-directory-service';

	const maxHop = HopDirectoryService.getMaxValues();
	const percentageFormatter = value => `${value}%`;
	const mlFormatter = value => `${value} mL/100g`;

	const dropdownOptions = [
		{
			valueFunction: hop => hop.averageAlphaAcidPercentage,
			valueName: "Alpha Acids",
			valueFormatter: percentageFormatter,
			maxValue: maxHop.averageAlphaAcidPercentage,
		},
		{
			valueFunction: hop => hop.averageBetaAcidPercentage,
			valueName: "Beta Acids",
			valueFormatter: percentageFormatter,
			maxValue: maxHop.averageBetaAcidPercentage,
		},
		{
			valueFunction: hop => hop.averageTotalOil,
			valueName: "Total Oil",
			valueFormatter: mlFormatter,
			maxValue: maxHop.averageTotalOil,
		},
		{
			valueFunction: hop => hop.oilBreakdown.bPinene,
			valueName: "β-Pinene",
			valueFormatter: mlFormatter,
			maxValue: maxHop.oilBreakdown.bPinene,
		},
		{
			valueFunction: hop => hop.oilBreakdown.myrcene,
			valueName: "Myrcene",
			valueFormatter: mlFormatter,
			maxValue: maxHop.oilBreakdown.myrcene,
		},
		{
			valueFunction: hop => hop.oilBreakdown.linalool,
			valueName: "Linalool",
			valueFormatter: mlFormatter,
			maxValue: maxHop.oilBreakdown.linalool,
		},
		{
			valueFunction: hop => hop.oilBreakdown.caryophyllene,
			valueName: "Caryophyllene",
			valueFormatter: mlFormatter,
			maxValue: maxHop.oilBreakdown.caryophyllene,
		},
		{
			valueFunction: hop => hop.oilBreakdown.farnesene,
			valueName: "Farnesene",
			valueFormatter: mlFormatter,
			maxValue: maxHop.oilBreakdown.farnesene,
		},
		{
			valueFunction: hop => hop.oilBreakdown.humulene,
			valueName: "Humulene",
			valueFormatter: mlFormatter,
			maxValue: maxHop.oilBreakdown.humulene,
		},
		{
			valueFunction: hop => hop.oilBreakdown.geraniol,
			valueName: "Geraniol",
			valueFormatter: mlFormatter,
			maxValue: maxHop.oilBreakdown.geraniol,
		},
		{
			valueFunction: hop => hop.oilBreakdown.selinene,
			valueName: "Selinene",
			valueFormatter: mlFormatter,
			maxValue: maxHop.oilBreakdown.selinene,
		},
		{
			valueFunction: hop => hop.oilBreakdown.other,
			valueName: "Other Oils",
			valueFormatter: mlFormatter,
			maxValue: maxHop.oilBreakdown.other,
		},
	];

	export default {
		name: "hop-visualization",
		data: () => ({
			hops,
			maxHop,
			dropdownOptions,
			selectedDropdownOption: dropdownOptions[0],
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
			"v-select": VueSelect,
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	.hop-visualization {
		margin-top: 30px;
	}

</style>
