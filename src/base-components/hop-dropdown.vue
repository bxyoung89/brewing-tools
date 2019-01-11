<script>
import VueSelect from "vue-select";
import allHops from "../data/hops";

export default {
	name: "hop-dropdown",
	props: ["value"],
	data() {
		return {
			allHops,
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
					<div :class="{ 'hop-name': true, 'no-aa': !option.avgaa}" >
						{{option.name}}
					</div>
					<div class="hop-alpha-acid" v-if="option.avgaa">
						Average Alpha Acid {{option.avgaa}}%
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
