<template>
	<div :class="{'x-button': true, [this.className]: true}">
		<app-button theme="unstyled" :click="() => this.click()" class-name="inner-button">
			<dynamic-svg src="cancel.svg"/>
		</app-button>
	</div>
</template>

<script>
	export default {
		name: "x-button",
		props: ['click', 'className']
	}
</script>

<style lang="scss" scoped>
	@import "../styles/core";
	.x-button {
		/deep/ .inner-button {
			height: 100%;
			width: 100%;
			border: 0;
			cursor: pointer;
			padding: 5px;

			&:hover {
				> svg {
					fill: $white;
				}
			}

			> svg {
				height: 100%;
				width: 100%;
				fill: tint($red, 30);
			}
		}
	}
</style>