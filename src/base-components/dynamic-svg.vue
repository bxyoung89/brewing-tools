<template>
	<div :id="divId">{{src}}</div>
</template>

<script>
	import GuidService from '../services/guid-service';

	const updateElementWithSvgText = (elementId, svgText) => {
		const element = document.getElementById(elementId);
		if(!element){
			return;
		}
		element.insertAdjacentHTML('afterend', svgText);
		element.nextElementSibling.setAttribute('id', elementId);
		element.remove();
	};

	export default {
		name: "dynamic-svg",
		props: ['src'],
		data: () => ({
			divId: `dynamic-svg-${GuidService.newGuid()}`,
		}),
		mounted: function(){
			import(`../../images/${this.src}`).then((svgText) => {
				updateElementWithSvgText(this.divId, svgText);
			});
		},
		// using arrow functions will lose instance
		updated: function() {
			import(`../../images/${this.src}`).then((svgText) => {
				updateElementWithSvgText(this.divId, svgText);
			});
		}
	}
</script>