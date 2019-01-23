<template>
	<div>
		<app-header/>
		<div class="body-content">
			<h1>
				Hop Visualization
			</h1>
			<div class="radio-pills">
				<radio-pills
					:items="dropdownOptions"
					label-property="valueName"
					:on-item-selected="(val) => {this.selectedDropdownOption = val}"
					:selected-item="selectedDropdownOption"
					theme="dark-blue"
				/>
			</div>
		</div>
		<div class="hop-visualization">
			<div id="hop-chart-wrapper">
				<hop-chart
					:hops="hops"
					:valueFunction="selectedDropdownOption.valueFunction"
					:valueName="selectedDropdownOption.valueName"
					:valueFormatter="selectedDropdownOption.valueFormatter"
					:maxValue="selectedDropdownOption.maxValue"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import HopChart from "./components/hop-chart.vue";
import hops from "../../data/hop-directory";
import HopDirectoryService from "../../services/hop-directory-service";

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
	components: {
		HopChart,
	},
};
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	.hop-visualization {
		width: 75%;
		margin: 0 auto;
	}

	.radio-pills {
		margin-bottom: 50px;
	}

</style>
