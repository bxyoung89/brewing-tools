<template>
	<div v-bind:id="divId"></div>
</template>

<script>
	import GuidService from '../services/guid-service';
	import RegularExpressionService from '../services/regular-expression-service';

	export default {
		name: "dynamic-svg",
		props: ['src'],
		data: () => ({
			divId: `dynamic-svg-${GuidService.newGuid()}`,
		}),
		// using arrow functions will lose instance
		created: function() {
			import(`../../images/${this.src}`).then((svgText) => {
					const div = document.getElementById(this.divId);
					div.insertAdjacentHTML('afterend', svgText);
					div.remove();
			});
		}
	}
</script>

<style lang="scss" scoped>

</style>