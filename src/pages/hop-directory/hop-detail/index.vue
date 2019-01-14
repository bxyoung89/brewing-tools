<template>
	<div class="body-content">
		<app-header/>
		<div v-if="!hop">
			<h1>
				Can't find hop. <br>Try checking the
				<router-link to="/hop-directory">Directory</router-link>
				?
			</h1>
		</div>
		<div v-if="hop">
			<h1 class="hop-detail-title">
				<span class="title-flag">
					<dynamic-svg :src="getFlagFromCountry(hop.country)"/>
				</span>
				<span>
					{{hop.name}}
				</span>
			</h1>
			<div class="hop-detail-content">
				<div class="sections-and-value-sidebar">
					<div class="sections">
						<div class="horizontal-section">
							<div class="section-label">
								Aroma Profiles
							</div>
							<div class="section-content">
								<div class="aroma-profile" v-for="aroma in hop.aromaProfile" :key="aroma">
									<div>
										{{aroma}}
									</div>
									<dynamic-svg src="hop.svg"/>
								</div>
							</div>
						</div>
						<div class="horizontal-section">
							<div class="section-label">
								Beer Styles
							</div>
							<div class="section-content">
								<div class="aroma-profile" v-for="beerStyle in hop.styles" :key="beerStyle">
									<div>
										{{beerStyle}}
									</div>
									<dynamic-svg src="beer.svg"/>
								</div>
							</div>
						</div>
						<div class="horizontal-section">
							<div class="section-label">
								Description
							</div>
							<div class="description">
								{{hop.description}}
							</div>
						</div>
						<div class="navigation-footer">
							<router-link :to="`/hop-directory/${previousHop.id}`" class="previous-link" v-if="previousHop">
								<app-button theme="dark-blue" class="hop-navigation-link">
									<div class="arrow">
										<dynamic-svg src="left-arrow.svg"/>
									</div>
									<div class="hop-flag">
										<dynamic-svg :src="getFlagFromCountry(previousHop.country)"/>
									</div>
									<div class="hop-name">
										{{previousHop.name}}
									</div>
								</app-button>
							</router-link>
							<div v-if="!previousHop"></div>
							<router-link :to="`/hop-directory`">
								Back to the directory!
							</router-link>
							<router-link :to="`/hop-directory/${nextHop.id}`" class="next-link" v-if="nextHop">
								<app-button theme="dark-blue" class="hop-navigation-link">
									<div class="hop-flag">
										<dynamic-svg :src="getFlagFromCountry(nextHop.country)"/>
									</div>
									<div class="hop-name">
										{{nextHop.name}}
									</div>
									<div class="arrow">
										<dynamic-svg src="right-arrow.svg"/>
									</div>
								</app-button>
							</router-link>
							<div v-if="!nextHop"></div>
						</div>
					</div>
					<div class="value-side-bar">
						<div class="section-label">
							Brewing Values
						</div>
						<brewing-value
							v-for="(value, index) in brewingValues"
							:name="value.name"
							:maxHop="maxHop"
							:property-function="value.propertyFunction"
							:format-function="value.formatFunction"
							:hop="hop"
							:key="index"
							class-name="brewing-value"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import allHops from "../../../data/hop-directory";
import CountryCodeToSvgPathService from "../../../services/country-code-to-svg-path-service";
import HopDirectoryService from "../../../services/hop-directory-service";
import BrewingValue from "./components/brewing-value.vue";


export default {
	name: "hop-detail",
	data() {
		const index = allHops.findIndex(hop => hop.id === Number.parseInt(this.$route.params.id, 10));
		const hop = allHops[index];
		const nextHop = allHops[index + 1];
		const previousHop = allHops[index - 1];
		return {
			hop,
			getFlagFromCountry: country => CountryCodeToSvgPathService.getSvgPath(country),
			allHops,
			nextHop,
			previousHop,
			maxHop: HopDirectoryService.getMaxValues(),
			brewingValues: [
				{
					name: "Aplha Acids",
					propertyFunction: h => h.averageAlphaAcidPercentage,
					formatFunction: value => `${value}%`,
				},
				{
					name: "Beta Acids",
					propertyFunction: h => h.averageBetaAcidPercentage,
					formatFunction: value => `${value}%`,
				},
				{
					name: "Oil Content",
					propertyFunction: h => h.averageTotalOil,
					formatFunction: value => `${value} ml/100g`,
				},
				{
					name: "β-Pinene",
					propertyFunction: h => h.oilBreakdown.bPinene,
					formatFunction: value => `${value} ml/100g`,
				},
				{
					name: "Myrcene",
					propertyFunction: h => h.oilBreakdown.myrcene,
					formatFunction: value => `${value} ml/100g`,
				},
				{
					name: "Linalool",
					propertyFunction: h => h.oilBreakdown.linalool,
					formatFunction: value => `${value} ml/100g`,
				},
				{
					name: "Caryophyllene",
					propertyFunction: h => h.oilBreakdown.caryophyllene,
					formatFunction: value => `${value} ml/100g`,
				},
				{
					name: "Farnesene",
					propertyFunction: h => h.oilBreakdown.farnesene,
					formatFunction: value => `${value} ml/100g`,
				},
				{
					name: "Humulene",
					propertyFunction: h => h.oilBreakdown.humulene,
					formatFunction: value => `${value} ml/100g`,
				},
				{
					name: "Geraniol",
					propertyFunction: h => h.oilBreakdown.geraniol,
					formatFunction: value => `${value} ml/100g`,
				},
				{
					name: "Selinene",
					propertyFunction: h => h.oilBreakdown.selinene,
					formatFunction: value => `${value} ml/100g`,
				},
				{
					name: "Other Oils",
					propertyFunction: h => h.oilBreakdown.other,
					formatFunction: value => `${value} ml/100g`,
				},
			],
		};
	},
	components: {
		BrewingValue,
	},
};
</script>

<style lang="scss" scoped>
	@import "../../../styles/core";

	.hop-detail-title {
		/deep/ > * {
			vertical-align: top;
		}
	}

	.hop-detail-content {
		margin-top: 40px;

		/deep/ .hop-navigation-link {
			display: flex;
			font-size: 16px;
			line-height: 30px;
			align-content: center;
			padding: 10px;


			.hop-flag {
				height: 30px;
				width: 30px;
				margin: 0 10px;

				/deep/ svg {
					height: 100%;
					width: 100%;
				}
			}

			.arrow {
				height: 30px;
				width: 30px;

				/deep/ svg {
					height: 100%;
					width: 100%;
					fill: $white;
				}
			}
		}
	}

	.title-flag {
		height: 100px;
		width: 100px;
		display: inline-block;
		vertical-align: top;

		/deep/ > svg {
			height: 100%;
			width: 100%;
		}
	}

	.sections-and-value-sidebar {
		display: flex;
	}

	.sections {
		flex-grow: 1;
		position: relative;
		padding-bottom: 80px;
	}

	.value-side-bar {
		min-width: 300px;
		margin-left: 50px;
	}

	.horizontal-section {
		margin-bottom: 20px;
	}

	.section-label {
		color: $dark-blue;
		margin-bottom: 10px;
		font-weight: 700;
	}

	.aroma-profile {
		@include berkshire-swash();
		text-transform: capitalize;
		letter-spacing: 2px;
		font-weight: 200;
		font-size: 0;
		display: inline-block;
		vertical-align: top;
		line-height: 35px;

		/deep/ > * {
			display: inline-block;
			vertical-align: top;
			margin-right: 20px;
		}

		/deep/ > div {
			font-size: 24px;
		}

		/deep/ > svg {
			height: 28px;
			width: 28px;
			fill: $white;
			opacity: 0.5;
		}

		&:last-child {
			/deep/ > svg {
				display: none;
			}
		}
	}

	.description {
		font-size: 16px;
	}

	.brewing-value {
		margin-bottom: 10px;
	}

	.navigation-footer {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		/deep/ > a {
			text-decoration: none;
		}
	}


</style>
