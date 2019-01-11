<template>
	<div class="main-page-link">
		<router-link :to="url">
			<div class="grid-item-icon">
				<dynamic-svg :src="svg" />
			</div>
			<div class="wave-header">
				<div class="wave-content">
					<div class="wave wave1"></div>
					<div class="wave wave2"></div>
					<div class="wave wave3"></div>
				</div>
			</div>
			<div class="grid-item-content">
				{{text}}
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "main-page-link",
	props: ["url", "text", "svg"],
};
</script>

<style lang="scss" scoped>
	@import "../../../styles/core";

	.main-page-link {
		display: block;
		height: 100%;
		position: relative;
		overflow: hidden;
		cursor: pointer;

		&:hover {
			.grid-item-content {
				top: 100px;
			}

			.wave-header {
				top: 0;
			}
		}
	}

	.grid-item-icon {
		height: 100%;
		width: 100%;
		padding: 20px;

		/deep/ > svg {
			height: 100%;
			width: 100%;
			fill: $not-white;
			opacity: 0.75;
		}
	}

	.grid-item-content {
		position: absolute;
		top: calc(100% + 100px);
		left: 0;
		right: 0;
		height: 100%;
		padding: 20px;
		transition: all 300ms ease;
		font-size: 48px;
		background: rgba($not-white, 0.9);
		color: $dark-blue;
	}

	.discount {
		fill: $not-white;
		opacity: 0.75;
	}

	.wave-header {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		transition: all 300ms ease;
	}

	.wave-content {
		position: relative;
		height: 100px;
		overflow: hidden;
		transform: translate3d(0, 0, 0);
		opacity: 0.8;
	}

	.wave {
		position: absolute;
		top: 40px;
		left: -90px;
		background: $blue;
		width: 500px;
		height: 500px;
		transform-origin: 50% 48%;
		border-radius: 43%;
		animation: drift 3000ms infinite linear;

		&.wave2 {
			animation: drift 7000ms infinite linear;
		}

		&.wave3 {
			animation: drift 5000ms infinite linear;
		}
	}

	@keyframes drift {
		from {
			transform: rotate(0deg);
		}

		from {
			transform: rotate(360deg);
		}
	}
</style>
