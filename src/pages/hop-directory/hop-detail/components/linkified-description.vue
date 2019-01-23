<template>
	<div v-html="linkifiedText"></div>
</template>

<script>
	import StringService from '../../../../services/string-service';
	import hops from "../../../../data/hop-directory";

	export default {
		name: "linkified-description",
		props:['text', 'hopId'],
		computed: {
			linkifiedText: function() {
				return hops.reduce((currentText, hop, index) => {
					if(this.hopId === index){
						return currentText;
					}
					return StringService.replaceAll(currentText, hop.name, `<a href='#/hop-directory/${index}'>${hop.name}</a>`);
				}, this.text);
			},
		}
	}
</script>

<style scoped>

</style>