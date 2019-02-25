<script>
export default {
	name: "hop-card",
	props: ["index", "hop", "removeHopAtIndex", "numberOfCards"],
	methods: {
		onHopDropdownChange(hop) {
			if (this.hop.name === hop.name) {
				return;
			}
			const newHop = {
				...this.hop,
				...hop,
				alphaAcid: hop.averageAlphaAcidPercentage || hop.alphaAcid || this.hop.alphaAcid,
			};
			this.$emit("changed", newHop, this.index);
		},
	},
};
</script>

<template>
	<div class="hop-card">
		<div
			:class="{'hop-card-content': true, 'title-row': true, 'has-cancel-button': numberOfCards > 1}"
			v-if="hop === undefined"
		>
			<div>
				Name
			</div>
			<div>
				Alpha Acid
			</div>
			<div>
				Boil Time<i>*</i>
			</div>
			<div>
				Ounces
			</div>
			<div>
				Whole Hop?
			</div>
			<div v-if="numberOfCards > 1">

			</div>
		</div>
		<div :class="{'hop-card-content': true, 'has-cancel-button': numberOfCards > 1}" v-if="hop !== undefined">
			<div>
				<div class="input-label">
					Name
				</div>
				<hop-dropdown v-on:input="onHopDropdownChange" :value="hop"/>
			</div>
			<div>
				<div class="input-label">
					Alpha Acid
				</div>
				<input
					type="number"
					:value="hop.alphaAcid"
					v-on:input="(event) => onHopDropdownChange({alphaAcid: Number.parseFloat(event.target.value)})"
				/>
			</div>
			<div>
				<div class="input-label">
					Boil Time
				</div>
				<input
					type="number"
					:value="hop.boilTime"
					v-on:input="(event) => onHopDropdownChange({boilTime: Number.parseFloat(event.target.value)})"
				/>
			</div>
			<div>
				<div class="input-label">
					Ounces
				</div>
				<input
					type="number"
					:value="hop.ounces"
					v-on:input="(event) => onHopDropdownChange({ounces: Number.parseFloat(event.target.value)})"
				/>
			</div>
			<div>
				<div class="checkbox-wrapper">
					<checkbox
						v-model="hop.isWholeHop"
						:value="hop.isWholeHop"
						v-on:input="(value) => onHopDropdownChange({isWholeHop: value})"
					>
						<span class="checkbox-label">Whole Hop?</span>
					</checkbox>
				</div>
			</div>
			<x-button v-if="numberOfCards > 1" :click="() => removeHopAtIndex(index)" class-name="remove-hop-button"/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "../../../styles/core";

	.hop-card {
		/deep/ .clear {
			display: none;
		}
	}

	.hop-card-content {
		display: grid;
		margin-bottom: 10px;
		grid-template-columns: 1fr 80px 80px 80px 100px;
		grid-column-gap: 10px;

		/deep/ > div > input {
			width: 100%;
		}

		/deep/ &.has-cancel-button {
			grid-template-columns: 1fr 80px 80px 50px 100px 30px;
		}
	}

	.title-row {
		text-align: center;
		font-size: 14px;
		color: $dark-blue;
	}

	.checkbox-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.remove-hop-button {
		height: 100%;
		width: 20px;
	}

	.input-label {
		display: none;
		font-size: 12px;
	}

	.checkbox-label {
		display: none;
	}


	@media (max-width: 700px) {
		.hop-card-content {
			background: rgba($blue, .4);
			padding: 10px;
			margin-bottom: 10px;
			display: block;
			font-size: 0;
			> * {
				margin-bottom: 10px;
				display: inline-block;
				vertical-align: top;
				width: calc(50% - 5px);
				font-size: 16px;

				&:nth-child(odd) {
					margin-right: 5px;
				}

				&:nth-child(even) {
					margin-left: 5px;
				}
			}
		}

		.title-row{
			display: none;
		}

		.input-label {
			display: block;
		}

		.checkbox-label {
			display: inline-block;
		}

		.checkbox-wrapper {
			align-items: flex-start;
			justify-content: flex-start;
		}

		.remove-hop-button{
			height: 30px;
		}
	}
</style>
