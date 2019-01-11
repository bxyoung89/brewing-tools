<template>
	<div class="header">
		<router-link to="/">
			Brewing Tools
		</router-link>
	</div>
</template>

<script>
export default {
	name: "app-header",
};
</script>

<style lang="scss" scoped>
	@import "../styles/core";

	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: auto;
		color: $not-white;
		padding: 15px;
		line-height: 30px;
		font-size: 30px;

		@include berkshire-swash();

		/deep/ a {
			text-decoration: none;
			color: $not-white;

			&:hover {
				opacity: 0.75;
			}
		}
	}
</style>
