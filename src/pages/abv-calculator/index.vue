<template>
	<div class="body-content">
		<app-header/>
		<h1>
			Alcohol by Volume Calculator
		</h1>
		<div class="abv-calculator">
			<div class="inputs">
				<div class="input-with-label">
					<v-select v-model="selectedFormula" label="name" :options="abvFormulae" :searchable="false"/>
				</div>
				<div class="input-with-label">
					<div class="label">
						Original Gravity
					</div>
					<input v-model="originalGravity" type="number"/>
				</div>
				<div class="input-with-label">
					<div class="label">
						Final Gravity
					</div>
					<input v-model="finalGravity" type="number"/>
				</div>
			</div>
			<div class="adjusted-gravity">
				{{abv.toFixed(2)}}%
			</div>
		</div>
	</div>
</template>

<script>
import VueSelect from "vue-select";
import ABVService from "../../services/abv-service";

export default {
	name: "abv-calculator",
	data: () => ({
		abvFormulae: ABVService.getABVFormulae(),
		selectedFormula: ABVService.getABVFormulae()[0],
		originalGravity: 1.05,
		finalGravity: 1.01,
	}),
	computed: {
		abv() {
			return this.selectedFormula.getAbv(this.originalGravity, this.finalGravity);
		},
	},
	components: {
		"v-select": VueSelect,
	},
};
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	.abv-calculator {
		margin-top: 30px;
		background: tint($red, 2);
		display: flex;

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

	.adjusted-gravity {
		@include berkshire-swash();
		width: 350px;
		min-width: 350px;
		text-align: center;
		font-size: 80px;
		color: $dark-blue;
		border-left: 15px solid $red;
		display: flex;
		align-items: center;
		justify-content: center;
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
</style>
