<template>
	<div class="body-content">
		<app-header/>
		<h1>
			Priming Sugar Calculator
		</h1>
		<div class="priming-sugar-calculator">
			<div class="inputs">
				<div class="input-with-label">
					<div class="label">
						Beer Volume (gal)
					</div>
					<input v-model="beerVolume" type="number"/>
				</div>
				<div class="input-with-label">
					<div class="label">
						Desired CO<sub>2</sub>
					</div>
					<input v-model="desiredCO2" type="number"/>
				</div>
				<div class="input-with-label">
					<div class="label">
						Temperature
					</div>
					<input v-model="temperature" type="number"/>
				</div>
			</div>
			<div class="sugars">
				<div class="sugar" v-for="sugar in sugars" key="sugar.name">
					<div class="name">
						{{sugar.name}}
					</div>
					<div class="volume">
						{{sugar.ounces}} oz
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VueSelect from "vue-select";
import ABVService from "../../services/abv-service";
import PrimingSugarService from '../../services/priming-sugar-calculator-service';

export default {
	name: "priming-sugar-calculator",
	data: () => ({
		beerVolume: 5,
		desiredCO2: 2.2,
		temperature: 68,
	}),
	computed: {
		sugars() {
			return PrimingSugarService.getSugarsWithWeights(this.beerVolume, this.desiredCO2, this.temperature);
		},
	},
	components: {
		"v-select": VueSelect,
	},
};
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	.priming-sugar-calculator {
		margin-top: 30px;
		background: tint($red, 2);

		> * {
			width: 100%;
		}

		/deep/ .dropdown-toggle {
			background: $white;
		}

		/deep/ .clear {
			display: none;
		}
	}

	.inputs {
		background: tint($red, 80);
		padding: 20px;
	}

	.sugars {
		color: $dark-blue;
		padding: 20px;
	}

	.sugar {
		padding: 10px;
		display: flex;
		justify-content: space-between;
		&:nth-child(even){
			background: rgba($dark-blue, .2);
		}
	}

	.input-with-label {
		&:not(:last-child) {
			margin-bottom: 20px;
		}

		.label {
			@include small-caps();

			font-size: 12px;
			line-height: 14px;
			margin-bottom: 5px;
			color: $dark-blue;
		}

		/deep/ > input {
			width: 100%;
		}
	}

	@media (max-width: 800px) {
		.priming-sugar-calculator {
			margin-top: 10px;
			display: block;
		}

	}
</style>
