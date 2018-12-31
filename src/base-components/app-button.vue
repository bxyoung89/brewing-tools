<template>
	<button v-on:click="click" :class="finalClassName">
		<slot></slot>
	</button>
</template>

<script>
	const themeToClassMap = {
		'white': 'white-button',
		'red': 'red-button',
		'light-blue': 'light-blue-button',
		'blue': 'blue-button',
		'dark-blue': 'dark-blue-button',
		'unstyled': 'unstyled-button',
	};


	export default {
		name: "app-button",
		props: ['theme', 'click'],
		computed: {
			finalClassName: function () {
				return `app-button ${themeToClassMap[this.theme || 'white']}`;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../styles/core';

	.app-button {
		border: 0;
		background: $white;
		border-bottom: 2px solid darken($white, 50%);
		border-radius: 5px;
		color: $dark-blue;
		padding: 5px;
		font-size: 12px;
		line-height: 20px;
		cursor: pointer;

		&:hover {
			background: darken($white, 20%);
		}

		&:active {
			border-top: 2px solid darken($white, 50%);
			border-bottom: 0;
		}

		&:focus {
			outline: 0;
			box-shadow: 0 0 5px 2px rgba($blue, 10%);
		}


		&.red-button {
			background: $red;
			border-bottom: 2px solid darken($red, 30%);
			color: $not-white;

			&:hover {
				background: darken($red, 10%);
			}

			&:active {
				border-top: 2px solid darken($red, 30%);
				border-bottom: 0;
			}
		}

		&.light-blue-button {
			background: $light-blue;
			border-bottom: 2px solid darken($light-blue, 40%);

			&:hover {
				background: darken($light-blue, 20%);
			}

			&:active {
				border-top: 2px solid darken($light-blue, 40%);
				border-bottom: 0;
			}
		}

		&.blue-button {
			background: $blue;
			border-bottom: 2px solid darken($blue, 30%);
			color: $not-white;

			&:hover {
				background: darken($blue, 10%);
			}

			&:active {
				border-top: 2px solid darken($blue, 30%);
				border-bottom: 0;
			}
		}

		&.dark-blue-button {
			background: $dark-blue;
			border-bottom: 2px solid darken($dark-blue, 10%);
			color: $not-white;

			&:hover {
				background: lighten($dark-blue, 10%);
			}

			&:active {
				border-top: 2px solid darken($dark-blue, 10%);
				border-bottom: 0;
			}
		}

		&.unstyled-button {
			border: 0;
			background: transparent;
			border-radius: 0;
			padding: 0;
			height: auto;
			line-height: 1.2em;

			&:hover {
				background: transparent;
			}

			&:active {
				border-top: 0;
				border-bottom: 0;
			}

			&:focus {
				outline: 0;
				box-shadow: none;
			}
		}
	}
</style>