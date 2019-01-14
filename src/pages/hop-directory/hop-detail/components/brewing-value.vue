<template>
	<div :class="{'brewing-value': true, [className]: true}" v-if="realValue > 0">
		<div class="name-and-value">
			<div class="name">
				{{name}}
			</div>
			<div class="value">
				{{value}}
			</div>
		</div>

		<!-- todo cool animation-->
		<div class="bar">
			<div class="filled-bar" :style="{width: `${percentage}%`}" ></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "brewing-value",
	props: ["name", "propertyFunction", "formatFunction", "hop", "maxHop", "className"],
	data() {
		const {
			hop, maxHop, propertyFunction, formatFunction,
		} = this;
		return {
			realValue: propertyFunction(hop),
			value: formatFunction(propertyFunction(hop)),
			percentage: (propertyFunction(hop) / propertyFunction(maxHop)) * 100,
		};
	},
};
</script>

<style lang="scss" scoped>
	@import "../../../../styles/core";

	.brewing-value {
		background: $white;
		border-radius: 5px;
		padding: 5px;
	}

	.name-and-value {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.name {
		color: $dark-blue;
		font-weight: 700;
		font-size: 16px;
	}

	.value {
		font-size: 24px;
		color: $blue;
		font-weight: 700;
	}

	.bar {
		margin-top: 10px;
		background: $light-blue;
		width: 100%;
		height: 10px;
	}

	.filled-bar {
		height: 100%;
		background: $blue;
		position: relative;

		&:after {
			content: "";
			position: absolute;
			bottom: 100%;
			right: 0;
			height: 0;
			width: 0;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-top: 10px solid $blue;
			margin-right: -5px;
		}
	}

</style>
