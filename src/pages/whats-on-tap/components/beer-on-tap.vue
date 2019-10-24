<template>
	<div class="beer-on-tap">
		<div class="form-factor">
			<dynamic-svg src="beer-bottle.svg"  v-if="formFactor === 'bottle'"/>
			<dynamic-svg src="beer-keg.svg"  v-if="formFactor === 'keg'"/>
		</div>
		<div class="info-section">
			<div class="name">
				{{name}}
			</div>
			<div class="abv-and-style">
				<div class="abv">
					{{abv}}%
				</div>
				&nbsp;
				<div class="style">
					{{beerStyle}}
				</div>
			</div>
			<div class="ingredient-section" v-if="hops.length > 0">
				<div class="ingredient-label">
					Hops
				</div>
				<div class="hops">
					<div class="hop" v-for="hop in hops" :key="hop">
						{{hop}}
					</div>
				</div>
			</div>
			<div class="ingredient-section">
				<div class="ingredient-label">
					yeast
				</div>
				<div class="yeast">
					{{yeast}}
				</div>
			</div>
			<div class="ingredient-section" v-if="malts.length > 0">
				<div class="ingredient-label">
					malts
				</div>
				<div class="malts">
					<div class="malt" v-for="malt in malts" :key="malt">
						{{malt}}
					</div>
				</div>
			</div>
			<div class="description">
				{{description}}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "beer-on-tap",
	props: ["formFactor", "name", "beerStyle", "abv", "hops", "yeast", "malts", "description"],
};
</script>

<style lang="scss" scoped>
	@import "../../../styles/core";

	.beer-on-tap {
		display: flex;

		&:not(:last-child) {
			padding-bottom: 40px;
			margin-bottom: 40px;
			border-bottom: 1px solid $white;
		}
	}

	.form-factor {
		min-width: 100px;
		width: 100px;
		/deep/ svg {
			width: 100%;
			fill: $white;
		}
	}

	.info-section {
		flex-grow: 1;
	}

	.name {
		@include berkshire-swash();
		font-size: 48px;
		margin-bottom: 5px;
	}

	.abv-and-style {
		@include berkshire-swash();
		color: $light-blue;
		font-size: 32px;
		margin-bottom: 10px;
		display: flex;
	}

	.ingredient-section {
		margin-bottom: 10px;
	}

	.ingredient-label {
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 14px;
		color: $light-blue;
	}

	.hops, .malts, .yeast {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24px;
	}

	.description {
		font-size: 16px;
		color: $light-blue;
	}


	@media (max-width: 800px) {
		.hops, .malts, .yeast {
			display: block;
			/deep/ * {
				margin-bottom: 5px;
			}
		}
	}
</style>
