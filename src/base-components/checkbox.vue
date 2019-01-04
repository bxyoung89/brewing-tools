<template>
	<div :class="{'checkbox': true, 'doesnt-have-label': !$slots.default}">
		<input
			type="checkbox"
			:id="checkboxId"
			v-on:change="() => {this.$emit('input', !this.value)}"
			:checked="value"
		>
		<label class="checkbox-label" :for="checkboxId">
			<div :class="{'styled-checkbox': true, 'has-label': $slots.default}">
			</div>
			<div>
				<slot></slot>
			</div>
		</label>
	</div>

</template>

<script>
	import GuidService from '../services/guid-service';

	export default {
		name: "checkbox",
		props: ['value'],
		data: () => ({
			checkboxId: `checkbox-${GuidService.newGuid()}`,
		}),
	}
</script>

<style lang="scss" scoped>
	@import "../styles/core";

	.checkbox {
		&.doesnt-have-label {
			display: inline-block;

			/deep/ .checkbox-label {
				display: inline-block;
			}
		}

		/deep/ > input {
			display: none;
		}

		/deep/ > input:checked + label {
			&:hover {
				.styled-checkbox {
					background: rgba($dark-blue, .5);
				}
			}

			.styled-checkbox {
				background: $dark-blue;

				&:before,
				&:after {
					opacity: 1;
				}
			}
		}
	}

	.checkbox-label {
		display: flex;
		align-items: center;
		cursor: pointer;

		&:hover {
			/deep/ > .styled-checkbox {
				&:before,
				&:after {
					opacity: 1;
				}
			}
		}
	}

	.styled-checkbox {
		height: 30px;
		width: 30px;
		border-radius: 5px;
		border: 2px solid $not-white;
		position: relative;

		&:before {
			content: "";
			position: absolute;
			width: 3px;
			height: 15px;
			background: $not-white;
			transform: rotate(45deg);
			left: 14px;
			top: 5px;
			opacity: 0;
		}

		&:after {
			content: "";
			position: absolute;
			width: 3px;
			height: 6px;
			background: $not-white;
			transform: rotate(-45deg);
			left: 7px;
			top: 11px;
			opacity: 0;
		}


		/deep/ &.has-label {
			margin-right: 10px;
		}
	}
</style>