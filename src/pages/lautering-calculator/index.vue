<template>
	<div class="body-content">
		<app-header/>
		<h1>
			Lautering Efficiency Calculator
		</h1>
		<div class="lautering-calculator">
			<div class="inputs">
				<div class="inputs-title">
					Enter yo digits...
				</div>
				<div class="double-section">
					<div class="input-section">
						<div class="input-section-title">
							Wort Volume (Gallons)
						</div>
						<div class="regular-input">
							<input type="number" placeholder="dat volume in dat dere pot" v-model="wortVolume">
						</div>
					</div>
					<div class="input-section">
						<div class="input-section-title">
							Gravity Measurement (1.xxx)
						</div>
						<div class="regular-input">
							<input type="number" placeholder="how heavy is yo shit" v-model="gravityMeasurement">
						</div>
					</div>
				</div>
				<div class="grains-section">
					<div class="grains-section-title">
						Grains
					</div>
					<div class="grain-list" v-for="(grain, index) in grains">
						<grain-card
							:grain="grain"
							:remove-grain-at-index="removeGrainAtIndex"
							:index="index"
							:number-of-cards="grains.length"
						/>
					</div>
					<div class="more-grains-button">
						<app-button theme="dark-blue" :click="addNewGrain">
							Add more grains
						</app-button>
					</div>

				</div>

			</div>
			<div class="efficiency">
				<div class="efficiency-title">
					Your efficiency is
				</div>
				<div class="efficiency-number">
					{{efficiency}}
				</div>
				<div v-if="Number.parseFloat(efficiency) > 100" class="efficiency-warning">
					Seems a bit high.<br><br>Check your numbers?
				</div>
				<div v-if="Number.parseFloat(efficiency) < 30" class="efficiency-warning">
					Seems a bit low.<br><br>Check your numbers?
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import GrainCard from './components/grain-card.vue';
	import LauteringCalculatorService from '../../services/lautering-calculator-service.js';

	const emptyGrain = {
		grain: undefined,
		pounds: 0,
	};


	export default {
		name: "lautering-calculator",
		data: () => ({
			wortVolume: 5.5,
			gravityMeasurement: 1.050,
			grains: [
				{
					...emptyGrain,
				}
			],
		}),
		methods: {
			removeGrainAtIndex: function (index) {
				this.grains.splice(index, 1);
			},
			addNewGrain: function () {
				this.grains.push({
					...emptyGrain,
				});
			},
		},
		computed: {
			efficiency: function () {
				return LauteringCalculatorService.getEfficiency(this.wortVolume, this.gravityMeasurement, this.grains);
			},
		},
		components: {
			GrainCard,
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	.lautering-calculator {
		margin-top: 30px;
		display: flex;
		background: $blue;
	}

	.inputs {
		flex-grow: 1;
		padding: 20px;
	}

	.inputs-title {
		margin-bottom: 20px;
		font-size: 36px;
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
	}

	.regular-input {
		width: 100%;

		> input {
			width: 100%;
		}
	}


	.efficiency {
		width: 350px;
		background: $light-blue;
		padding: 20px;
		color: $dark-blue;
	}

	.efficiency-title {
		width: 100%;
		text-align: center;
		@include small-caps();
	}

	.efficiency-number {
		text-align: center;
		font-size: 80px;
		line-height: 140px;
		@include berkshire-swash();
	}

	.efficiency-warning {
		text-align: center;
		@include small-caps();
		color: $red;
		font-size: 12px;
		line-height: 10px;
	}

	.grains-section-title {
		@include small-caps();
		margin-bottom: 5px;
		font-size: 24px;
	}

	.more-grains-button {
		width: 100%;

		/deep/ > button {
			width: 100%;
			padding: 10px;
			font-size: 24px;
		}
	}
</style>