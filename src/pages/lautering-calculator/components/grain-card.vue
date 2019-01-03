<script>
	export default {
		name: 'grain-card',
		props: ['index', 'grain', 'removeGrainAtIndex', 'numberOfCards'],
	}
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
		<div class="remove-grain-button" v-if="numberOfCards > 1">
			<app-button theme="unstyled" :click="() => removeGrainAtIndex(index)" >
				<dynamic-svg src="cancel.svg" />
			</app-button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "../../../styles/core";

	.grain-card {
		background: rgba($not-white, 0.1);
		padding: 20px;
		display: flex;
		margin-bottom: 10px;
		border-radius: 5px;


		.grain-content {
			flex-grow: 1;
			> select {

			}

			> .input-section {

			}
		}

		.remove-grain-button {
			margin-left: 20px;

			/deep/ > button {
				height: 100%;
				width: 40px;
				border: 0;
				cursor: pointer;
				border-radius: 5px;
				display: flex;
				justify-content: center;
				padding: 5px;

				&:hover {
					> svg {
						fill: $red;
					}
				}

				> svg {
					height: 100%;
					width: 100%;
					fill: $not-white;
				}
			}
		}
	}
</style>