<template>
	<div :id="divId"></div>
</template>

<script>
import GuidService from "../services/guid-service";

const updateElementWithSvgText = (elementId, svgText) => {
	const element = document.getElementById(elementId);
	if (!element) {
		return;
	}
	element.insertAdjacentHTML("afterend", svgText);
	element.nextElementSibling.setAttribute("id", elementId);
	element.remove();
};

const handleSvgLoaded = function (svg) {
	const { id, viewBox } = svg.default;
	const svgText = `<svg viewBox="${viewBox}"><use xlink:href="#${id}"></use></svg>`;
	updateElementWithSvgText(this.divId, svgText);
};

export default {
	name: "dynamic-svg",
	props: ["src"],
	data: () => ({
		divId: `dynamic-svg-${GuidService.newGuid()}`,
	}),
	mounted() {
			import(`../../images/${this.src}`).then(handleSvgLoaded.bind(this));
	},
	// using arrow functions will lose instance
	updated() {
			import(`../../images/${this.src}`).then(handleSvgLoaded.bind(this));
	},
};
</script>
