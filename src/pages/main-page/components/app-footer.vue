<template>
	<div class="footer">
		<a href="https://github.com/bxyoung89/brewing-tools" target="_blank">
			<dynamic-svg src="social-icons/039-github.svg" />
		</a>
		<router-link to="/about">
			<dynamic-svg src="question-mark.svg" />
		</router-link>
	</div>
</template>

<script>
export default {
	name: "app-footer",
};
</script>

<style lang="scss" scoped>
	@import "../../../styles/core";

	.footer {
		position: fixed;
		bottom: 10px;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		cursor: pointer;

		> a {
			height: 30px;
			width: 30px;
			margin: 0 5px;
			opacity: 0.5;
			transition: all 300ms ease;
			fill: $white;

			&:hover {
				opacity: 0.8;
			}

			> svg {
				height: 100%;
				width: 100%;
				pointer-events: none;
			}
		}
	}
</style>
