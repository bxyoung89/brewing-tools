<template>
	<div class="hop-chart-point">
		<router-link :to="`/hop-directory/${hop.id}`">
			<div class="content">
				<div class="background-flag">
					<dynamic-svg :src="unknownCountryFlag"/>
				</div>
				<div class="regular-flag">
					<dynamic-svg :src="getFlagFromCountry(hop.country)"/>
				</div>
				<div class="tool-tip">
					<div class="name-and-value-label">
						<div class="name">
							{{hop.name}}
						</div>
						<div class="value-label">
							{{valueName}}
						</div>
					</div>
					<div class="value">
						{{valueFormatter(valueFunction(hop))}}
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
import CountryCodeToSvgPathService from "../../../services/country-code-to-svg-path-service";

export default {
	name: "hop-chart-point",
	data() {
		return {
			getFlagFromCountry: country => CountryCodeToSvgPathService.getSvgPath(country),
			unknownCountryFlag: CountryCodeToSvgPathService.getUnknownCountryFlag(),
		};
	},
	props: ["hop", "valueFunction", "valueName", "valueFormatter"],
};
</script>

<style scoped lang="scss">
	@import "../../../styles/core";

	.hop-chart-point {
		position: relative;
		z-index: 1;

		&:hover {
			z-index: 2;

			.tool-tip {
				display: flex;
			}
		}
	}

	.content {
		height: 20px;
		width: 20px;
		position: relative;

		/deep/ > svg {
			z-index: 4;
			position: absolute;
			left: 0;
			bottom: 0;
			height: 20px;
			width: 20px;
		}
	}

	.background-flag,
	.regular-flag {
		position: absolute;
		left: 0;
		bottom: 0;
		/deep/ > svg {
			height: 100%;
			width: 100%;
		}
	}

	.background-flag {
		z-index: 4;
		height: 24px;
		width: 24px;
		margin-left: -2px;
		margin-bottom: -2px;
		/deep/ > svg {
			fill: $white;
		}
	}

	.regular-flag {
		z-index: 5;
		height: 20px;
		width: 20px;
	}

	.tool-tip {
		position: absolute;
		z-index: 1;
		left: -10px;
		bottom: -10px;
		display: none;
		background: $dark-blue;
		border-radius: 5px;
		padding: 10px;
		padding-bottom: 40px;
		min-width: 200px;
		justify-content: space-between;
		pointer-events: none;
	}

	.name {
		@include berkshire-swash();
		font-size: 24px;
		white-space: nowrap;
		color: $white;
	}

	.value-label {
		@include small-caps();
		font-size: 12px;
		opacity: 0.75;
		white-space: nowrap;
	}

	.value {
		font-size: 48px;
		margin-left: 20px;
		color: $light-blue;
		white-space: nowrap;
	}

</style>
