<script>
	export default {
		name: 'hop-card',
		props: ['index', 'hop', 'removeHopAtIndex', 'numberOfCards'],
		methods: {
			onHopDropdownChange: function (hop) {
				if(this.hop.name === hop.name){
					return;
				}
				const newHop = {
					...this.hop,
					...hop,
					alphaAcid: hop.avgaa || hop.alphaAcid || this.hop.alphaAcid,
				};
				this.$emit('changed', newHop, this.index);
			},
		},
	}
</script>

<template>
	<div class="hop-card">
		<div :class="{'hop-card-content': true, 'title-row': true, 'has-cancel-button': numberOfCards > 1}" v-if="hop === undefined">
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
				<hop-dropdown v-on:input="onHopDropdownChange" :value="hop"/>
			</div>
			<div>
				<input
					type="number"
					:value="hop.alphaAcid"
					v-on:input="(event) => onHopDropdownChange({alphaAcid: event.target.value})"
				/>
			</div>
			<div>
				<input
					type="number"
					:value="hop.boilTime"
					v-on:input="(event) => onHopDropdownChange({boilTime: event.target.value})"
				/>
			</div>
			<div>
				<input
					type="number"
					:value="hop.ounces"
					v-on:input="(event) => onHopDropdownChange({ounces: event.target.value})"
				/>
			</div>
			<div>
				<div class="checkbox-wrapper">
					<checkbox
						v-model="hop.isWholeHop"
						:value="hop.isWholeHop"
						v-on:input="(value) => onHopDropdownChange({isWholeHop: value})"
					/>
				</div>
			</div>
			<div class="remove-hop-button" v-if="numberOfCards > 1">
				<app-button theme="unstyled" :click="() => removeHopAtIndex(index)">
					<dynamic-svg src="cancel.svg"/>
				</app-button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "../../../styles/core";

	.hop-card {

	}

	.hop-card-content {
		display: grid;
		margin-bottom: 10px;
		grid-template-columns: 220px 80px 80px 80px 100px;
		grid-column-gap: 10px;

		/deep/ > div > input {
			width: 100%;
		}

		/deep/ &.has-cancel-button {
			grid-template-columns: 220px 80px 80px 50px 100px 30px;
		}
	}

	.title-row {
		text-align: center;
		font-size: 14px;
	}

	.checkbox-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.remove-hop-button {
		/deep/ > button {
			height: 100%;
			width: 30px;
			border: 0;
			cursor: pointer;
			border-radius: 5px;
			display: flex;
			justify-content: center;
			padding: 5px;

			&:hover {
				> svg {
					fill: $red;
				}
			}

			> svg {
				height: 100%;
				width: 100%;
				fill: $not-white;
			}
		}
	}
</style>