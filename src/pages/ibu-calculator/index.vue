<template>
	<div class="body-content">
		<app-header/>
		<h1>
			IBU Calculator
		</h1>
		<div class="ibu-calculator">
			<div class="inputs">
				<div class="input-section">
					<div class="input-section-title">
						IBU Formula
					</div>
					<div class="regular-input">
						<v-select v-model="selectedCalculator" label="name" :options="ibuCalculators" :searchable="false"/>
					</div>
				</div>
				<div class="double-section">
					<div class="input-section">
						<div class="input-section-title">
							After Boil Wort Volume (Gallons)
						</div>
						<div class="regular-input">
							<input type="number" placeholder="dat volume in dat dere pot" v-model="finalVolume">
						</div>
					</div>
					<div class="input-section">
						<div class="input-section-title">
							Gravity Measurement During Boil (1.xxx)
						</div>
						<div class="regular-input">
							<input type="number" placeholder="how heavy is yo shit" v-model="boilGravity">
						</div>
					</div>
				</div>
				<div class="hops-section">
					<div class="hops-section-title">
						Hops
					</div>
					<hop-card :number-of-cards="hops.length" />
					<div class="hop-list" v-for="(hop, index) in hops" :key="index">
						<hop-card
							:hop="hop"
							:remove-hop-at-index="removeHopAtIndex"
							:index="index"
							:number-of-cards="hops.length"
							v-on:changed="updateHopAtIndex"
						/>
					</div>
					<div class="more-hops-button">
						<app-button theme="dark-blue" :click="addNewHop">
							Add more hops
						</app-button>
					</div>
					<div class="footnotes">
						* If you add hops in at 60 minutes of a 60 minute boil, put 60.
					</div>
				</div>
			</div>
			<div class="ibu">
				<div class="ibu-title">
					Your estimated IBUs are
				</div>
				<div class="ibu-number">
					{{ibu}}
				</div>
				<div v-if="Number.parseFloat(ibu) > 200" class="ibu-warning">
					Seems a bit high.<br><br>Check your numbers?
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VueSelect from "vue-select";
import HopCard from "./components/hop-card.vue";
import IBUService from "../../services/ibu-service";

const emptyHop = {
	name: "",
	averageAlphaAcidPercentage: 0,
	boilTime: 60,
	isWholeHop: false,
	ounces: 0,
};


export default {
	name: "ibu-calculator",
	data: () => ({
		finalVolume: 5.5,
		boilGravity: 1.050,
		hops: [
			{
				...emptyHop,
			},
		],
		selectedCalculator: IBUService.getAllIBUCalculators()[0],
		ibuCalculators: IBUService.getAllIBUCalculators(),
	}),
	methods: {
		removeHopAtIndex(index) {
			this.hops.splice(index, 1);
		},
		addNewHop() {
			this.hops.push({
				...emptyHop,
			});
		},
		updateHopAtIndex(hop, index) {
			this.hops.splice(index, 1, hop);
		},
	},
	computed: {
		ibu() {
			return IBUService.getIBUs(this.selectedCalculator.id, this.hops, this.finalVolume, this.boilGravity);
		},
	},
	components: {
		HopCard,
		"v-select": VueSelect,
	},
};
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	.ibu-calculator {
		margin-top: 30px;
		display: flex;
		background: tint($red, 80);

		/deep/ .dropdown-toggle {
			background: $white;
		}

		/deep/ .clear {
			display: none;
		}
	}

	.inputs {
		flex-grow: 1;
		padding: 20px;
	}

	.double-section {
		display: flex;
		justify-content: space-between;

		> * {
			flex-grow: 1;

			&:first-child {
				padding-right: 20px;
			}

			&:last-child {
				padding-left: 20px;
			}
		}
	}

	.input-section {
		margin-bottom: 20px;
	}

	.input-section-title {
		@include small-caps();

		margin-bottom: 5px;
		font-size: 12px;
		color: $dark-blue;
	}

	.regular-input {
		width: 100%;

		> input {
			width: 100%;
		}
	}


	.ibu {
		width: 350px;
		min-width: 350px;
		padding: 20px;
		color: $dark-blue;
		background: tint($red, 2);
		border-left: 15px solid $red;
	}

	.ibu-title {
		width: 100%;
		text-align: center;

		@include small-caps();
	}

	.ibu-number {
		text-align: center;
		font-size: 80px;
		line-height: 140px;

		@include berkshire-swash();
	}

	.ibu-warning {
		text-align: center;

		@include small-caps();

		color: $red;
		font-size: 12px;
		line-height: 10px;
	}

	.hops-section-title {
		@include small-caps();

		margin-bottom: 5px;
		font-size: 24px;
	}

	.more-hops-button {
		width: 100%;
		display: flex;
		align-items: center;

		/deep/ > button {
			padding: 10px;
			font-size: 18px;
			margin: 0 auto;
		}
	}

	.footnotes {
		margin-top: 30px;
		font-size: 12px;
		opacity: 0.75;
		color: $dark-blue;
		text-align: center;
	}

	@media (max-width: 1000px) {
		.ibu-calculator {
			margin-top: 10px;
			display: block;
		}

		.ibu {
			width: 100%;
			background: tint($red, 2);
			border-left: 0;
		}
	}
</style>
