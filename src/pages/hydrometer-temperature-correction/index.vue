<template>
	<div class="body-content">
		<app-header/>
		<h1>
			Hydrometer Temperature Correction
		</h1>
		<div class="hydrometer-temperature-correction">
			<div class="inputs">
				<div class="input-with-label">
					<div class="label">
						Gravity Reading
					</div>
					<input v-model="gravityReading" type="number"/>
				</div>
				<div class="input-with-label">
					<div class="label">
						Current Temperature (F)
					</div>
					<input v-model="currentTemperature" type="number"/>
				</div>
				<div class="input-with-label">
					<div class="label">
						Calibration Temperature (F)
					</div>
					<input v-model="calibrationTemperature" type="number"/>
				</div>
			</div>
			<div class="adjusted-gravity">
				{{adjustedGravity}}
			</div>
		</div>
	</div>
</template>

<script>
import HydrometerCorrectionService from "../../services/hydrometer-correction-service";

export default {
	name: "hydrometer-temperature-correction",
	data: () => ({
		gravityReading: 1.05,
		currentTemperature: 80,
		calibrationTemperature: 68,
	}),
	computed: {
		adjustedGravity() {
			return HydrometerCorrectionService.getCorrectedValue(this.gravityReading, this.currentTemperature, this.calibrationTemperature);
		},
	},
};
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	.hydrometer-temperature-correction {
		margin-top: 30px;
		background: tint($red, 2);
		display: flex;

		> * {
			width: 100%;
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

	@media (max-width: 800px) {
		.hydrometer-temperature-correction {
			margin-top: 10px;
			display: block;
		}

		.adjusted-gravity {
			width: 100%;
			background: tint($red, 2);
			border-left: 0;
			height: 150px;
		}
	}
</style>
