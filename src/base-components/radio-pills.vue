<template>
	<div :class="`radio-pills ${className}`">
		<app-button
			v-for="(item, index) in items"
			:class-name="`radio-pill ${selectedItem && selectedItem[labelProperty] === item[labelProperty] && 'selected'}`"
			:click="() => onItemSelected(item)"
			:theme="theme"
			:key="index"
		>
			{{item[labelProperty]}}
		</app-button>
	</div>
</template>

<script>
export default {
	name: "radio-pills",
	props: ["items", "selectedItem", "labelProperty", "className", "theme", "onItemSelected"],
};
</script>

<style lang="scss" scoped>
	.radio-pill {
		opacity: 0.5;
		margin-right: 10px;
		margin-bottom: 10px;
		display: inline-block;
		vertical-align: top;

		&:hover,
		&.selected {
			opacity: 1
		}
	}
</style>
