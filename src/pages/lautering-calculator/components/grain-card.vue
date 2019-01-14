<script>
export default {
	name: "grain-card",
	props: ["index", "grain", "removeGrainAtIndex", "numberOfCards"],
};
</script>

<template>
	<div class="grain-card">
		<div class="grain-content">
			<div class="input-section">
				<div class="input-section-title">
					Grain
				</div>
				<grain-dropdown v-model="grain.grain" />
			</div>

			<div class="input-section">
				<div class="input-section-title">
					Pounds
				</div>
				<div class="regular-input">
					<input type="number" placeholder="pounds" value="0" v-model="grain.pounds">
				</div>
			</div>
		</div>
		<x-button :click="() => removeGrainAtIndex(index)" class-name="remove-grain-button" v-if="numberOfCards > 1" />
	</div>
</template>

<style lang="scss" scoped>
	@import "../../../styles/core";

	.grain-card {
		padding: 20px 0;
		border-top: 1px solid tint($red, 50);
		border-bottom: 1px solid tint($red, 50);
		display: flex;
		margin-bottom: -1px;
		border-radius: 5px;

		.grain-content {
			flex-grow: 1;
			> * {
				flex-grow: 1;
			}

			> .input-section {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-bottom: 10px;

				&:last-child {
					margin-bottom: 0;
				}
			}

			.input-section-title {
				@include small-caps();
				margin-right: 15px;
				font-size: 12px;
				color: $dark-blue;
			}

			.grain-dropdown {
				min-width: 180px;
				width: 100%;
			}
		}

		.remove-grain-button {
			margin-left: 20px;
			width: 30px;
		}
	}

	.regular-input {
		width: 100%;

		> input {
			width: 100%;
		}
	}
</style>
