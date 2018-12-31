<script>
	import allGrains from '../../../data/grains.js';
	import CountryCodeToSvgPathService from '../../../services/country-code-to-svg-path-service.js';
	import VueSelect from 'vue-select'
	export default {
		name: 'grain-card',
		props: ['index', 'grain', 'removeGrainAtIndex', 'numberOfCards'],
		data: function() {
			return {
				allGrains,
				getFlagFromCountry: (country) => CountryCodeToSvgPathService.getSvgPath(country),
			};
		},
		components: {
			'v-select': VueSelect,
		}
	}
</script>

<template>
	<div class="grain-card">
		<div class="grain-content">
			<div class="input-section">
				<div class="input-section-title">
					Grain
				</div>
				<div class="dropdown-wrapper">
					<v-select :options="allGrains" label="name" v-model="grain.grain">
						<template slot="option" slot-scope="option">
							<div class="dropdown-option">
								<dynamic-svg :src="getFlagFromCountry(option.country)" />
								<div>
									{{option.name}}
								</div>
							</div>
						</template>
					</v-select>
				</div>
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


		.dropdown-option {
			display: flex;
			height: 40px;
			align-items: center;

			/deep/ > svg {
				height: 30px;
				margin-right: 10px;
			}

			/deep/ > div {
				flex-grow: 1;
			}
		}

		.dropdown-wrapper {
			/deep/ .dropdown-toggle {
				background: $white;
			}
		}
	}
</style>