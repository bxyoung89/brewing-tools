<template>
	<div>
		<app-header/>
		<div class="body-content">
			<h1>
				What's on Tap
			</h1>
			<div class="beers-list">
				<BeerOnTap
					v-for="beer in beers"
					:key="beer.name"
					:form-factor="beer.formFactor"
					:name="beer.name"
					:beerStyle="beer.beerStyle"
					:abv="beer.abv"
					:hops="beer.hops"
					:yeast="beer.yeast"
					:malts="beer.malts"
					:description="beer.description"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import BeerOnTap from "./components/beer-on-tap.vue";

const beers = [
	{
		formFactor: "bottle",
		name: "Secret Chemistry",
		beerStyle: "New England IPA",
		abv: "6.8",
		hops: ["El Dorado", "Strata", "Centennial"],
		yeast: "Omega Labs Voss Kivek",
		malts: ["Pale Ale", "Flaked Wheat", "Flaked Oats"],
		description: "A strange combination of hops come together for big tropical notes. To find out more read the blog about it.",
	},
	{
		formFactor: "bottle",
		name: "Welcome to the Stratasphere",
		beerStyle: "Pale Ale",
		abv: "4.83",
		hops: ["Strata"],
		yeast: "Safale US-05",
		malts: ["Pilsner"],
		description: "Latest batch in my SMASH series. Clean, crisp, and refreshing with a hit of bitterness at the end.",
	},
	{
		formFactor: "bottle",
		name: "Mama Knows Best",
		beerStyle: "Kolsch",
		abv: "6.8",
		hops: ["Sterling"],
		yeast: "WLP029 German Ale",
		malts: ["Pilsner", "Aromatic", "Vienna"],
		description: "Spent 2 months lagering for a really easy going beer. Perhaps a bit more carbination than needed but still pretty great.",
	},
	{
		formFactor: "bottle",
		name: "It Came from Planet Rock",
		beerStyle: "Hazy Pale ale",
		abv: "4.67",
		hops: ["Comet", "Galaxy"],
		yeast: "WLP546 Marañón River Canyon Wild Cacao",
		malts: ["Pale Ale", "Pilsner", "Golden Naked Oats", "Wheat Malt"],
		description: "I bought a couple of vials from White Lab's yeast vault. With the legend of a yeast harvested from a once extinct cacao plant, I couldn't resist. While I didn't get the saison flavor I was hoping for, the comet and galaxy make it enjoyable",
	},
	{
		formFactor: "bottle",
		name: "Pomegranate Cider",
		beerStyle: "Cider",
		abv: "6.64",
		hops: [],
		yeast: "Safale US-O5",
		malts: [],
		description: "Another fruit cider experiment.",
	},
	{
		formFactor: "bottle",
		name: "Starberry",
		beerStyle: "Strawberry Cider",
		abv: "8",
		hops: [],
		yeast: "Safale SO4",
		malts: [],
		description: "Wanted to experiment with other fruits and lactose. Taste is a bit sweet with strawberry flavor coming through.",
	},
	{
		formFactor: "keg",
		name: "Wonder from Down Under",
		beerStyle: "Lager",
		abv: "5.53",
		hops: ["Pride of Ringwood"],
		yeast: "Wyeast 2007 Pilsen Lager",
		malts: ["Pilsner", "Munich", "Carapils"],
		description: "First attempt at a larger. Wanted to emulate an Austrailian style larger in homage to my Mom's time as a exchange student there.",
	},
];

export default {
	name: "whats-on-tap",
	data: () => ({
		beers,
	}),
	components: {
		BeerOnTap,
	},
};
</script>

<style lang="scss" scoped>
	@import "../../styles/core";


</style>
