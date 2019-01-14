<script>
import VueSelect from "vue-select";
import allHops from "../data/hop-directory";
import CountryCodeToSvgPathService from "../services/country-code-to-svg-path-service";

export default {
	name: "hop-dropdown",
	props: ["value"],
	data() {
		return {
			allHops,
			getFlagFromCountry: country => CountryCodeToSvgPathService.getSvgPath(country),
		};
	},
	components: {
		"v-select": VueSelect,
	},
};
</script>

<template>
	<div class="hop-dropdown">
		<v-select :options="allHops" label="name" v-on:input="(val) => {this.$emit('input', val)}" :value="value" taggable>
			<template slot="option" slot-scope="option">
				<div class="dropdown-option">
					<div class="flag-wrapper" v-if="option.averageAlphaAcidPercentage">
						<dynamic-svg :src="getFlagFromCountry(option.country)"/>
					</div>
					<div class="name-and-alpha-acid">
						<div :class="{ 'hop-name': true, 'no-aa': !option.averageAlphaAcidPercentage}">
							{{option.name}}
						</div>
						<div class="hop-alpha-acid" v-if="option.averageAlphaAcidPercentage">
							Average Alpha Acid {{option.averageAlphaAcidPercentage}}%
						</div>
					</div>
				</div>
			</template>
		</v-select>
	</div>
</template>

<style lang="scss" scoped>
	@import "../styles/core";

	.hop-dropdown {
		/deep/ .dropdown-toggle {
			background: $white;
		}
	}

	.dropdown-option {
		height: 40px;
		align-items: center;
		padding: 5px 0;
		display: flex;
	}

	.flag-wrapper {
		height: 40px;
		width: 40px;
		padding: 5px;

		/deep/ > svg {
			height: 30px;
		}
	}

	.name-and-alpha-acid {
		flex-grow: 1;
	}

	.hop-name {
		font-size: 16px;
		line-height: 16px;

		/deep/ &.no-aa {
			line-height: 30px;
		}
	}

	.hop-alpha-acid {
		opacity: 0.75;
		font-size: 12px;
	}


</style>
