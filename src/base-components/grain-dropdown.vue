<script>
import VueSelect from "vue-select";
import allGrains from "../data/grains";
import CountryCodeToSvgPathService from "../services/country-code-to-svg-path-service";

export default {
	name: "grain-dropdown",
	props: ["value"],
	data() {
		return {
			allGrains,
			getFlagFromCountry: country => CountryCodeToSvgPathService.getSvgPath(country),
		};
	},
	components: {
		"v-select": VueSelect,
	},
};
</script>

<template>
	<div class="grain-dropdown">
		<v-select :options="allGrains" label="name" v-on:input="(val) => {this.$emit('input', val)}" :value="value">
			<template slot="option" slot-scope="option">
				<div class="dropdown-option">
					<dynamic-svg :src="getFlagFromCountry(option.country)"/>
					<div>
						{{option.name}}
					</div>
				</div>
			</template>
		</v-select>
	</div>
</template>

<style lang="scss" scoped>
	@import "../styles/core";

	.grain-dropdown {
		/deep/ .dropdown-toggle {
			background: $white;
		}
	}

	.dropdown-option {
		display: flex;
		height: 40px;
		align-items: center;
		padding: 0 5px;

		/deep/ > svg {
			height: 30px;
			margin: 5px;
		}

		/deep/ > div {
			flex-grow: 1;
		}
	}
</style>
