<template>
	<div class="body-content">
		<app-header/>
		<h1>
			Hop Directory
		</h1>
		<div class="hop-directory">
			<!--todo sorting, filtering and visualization-->
			<router-link :to="`/hop-directory/${hop.id}`" v-for="hop in allHops" :key="hop.id" class="hop-link">
				<div class="hop-flag">
					<dynamic-svg :src="getFlagFromCountry(hop.country)"/>
				</div>
				<div class="hop-name">
					{{hop.name}}
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import allHops from "../../data/hop-directory";
import CountryCodeToSvgPathService from "../../services/country-code-to-svg-path-service";

export default {
	name: "hop-directory",
	data: () => ({
		allHops,
		getFlagFromCountry: country => CountryCodeToSvgPathService.getSvgPath(country),
	}),
};
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	.hop-link {
		display: flex;
		margin-bottom: 5px;
		cursor: pointer;
		height: 40px;
		width: 100%;
		background: $dark-blue;
		color: $white;
		text-decoration: none;

		&:hover {
			background: tint($dark-blue, 80);
		}

		&:active {
			background: tint($dark-blue, 90);
		}
	}

	.hop-flag {
		height: 40px;
		width: 40px;
		padding: 5px;
		margin-right: 10px;

		/deep/ > svg {
			height: 100%;
			width: 100%;
		}
	}

	.hop-name {
		line-height: 40px;
		flex-grow: 1;
		font-size: 16px;
	}
</style>
