<template>
	<div class="body-content">
		<h1>
			Brewing Tools
		</h1>
		<p>
			In order to get more knowledge about brewing I made a couple of tools. Check them out if you want!
		</p>
		<div class="grid-with-title">
			<h2>
				Calculators
			</h2>
			<div class="grid">
				<div class="grid-item" v-for="tool in tools" :key="tool.url">
					<main-page-link
						:url="tool.url"
						:text="tool.text"
						:svg="tool.svg"
					/>
				</div>
			</div>
		</div>
		<app-footer />
	</div>
</template>

<script>
import MainPageLink from "./components/main-page-link.vue";
import AppFooter from "./components/app-footer.vue";

export default {
	name: "main-page",
	data: () => ({
		tools: [
			{
				url: "/lautering-calculator",
				text: "Lautering Efficiency Calculator",
				svg: "discount.svg",
			},
			{
				url: "/hydrometer-correction",
				text: "Hydrometer Temperature Correction",
				svg: "thermometer.svg",
			},
			{
				url: "/ibu-calculator",
				text: "IBU Calculator",
				svg: "hop.svg",
			},
			{
				url: "/hop-directory",
				text: "Hop Directory",
				svg: "hop.svg",
			},
			{
				url: "/hop-visualization",
				text: "Hop Visualization",
				svg: "hop.svg",
			},
			{
				url: "/abv-calculator",
				text: "ABV Calculator",
				svg: "thermometer.svg",
			},
			{
				url: "/blog",
				text: "Blog",
				svg: "social-icons/053-blogger.svg",
			},
		],
	}),
	components: {
		MainPageLink,
		AppFooter,
	},
};
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	p {
		margin-bottom: 60px;
	}

	h2 {
		font-size: 24px;
		margin: 0 0 20px;
		border-bottom: 1px solid $not-white;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 10px;

		> * {
			height: 300px;
			background: $dark-blue;
		}
	}

</style>
