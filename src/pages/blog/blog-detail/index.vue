<template>
	<div class="body-content">
		<app-header/>
		<div v-html="markdownContent">

		</div>
	</div>
</template>

<script>
	export default {
		name: "blog-detail",
		mounted() {
			import(`../../../data/blog-posts/${this.fileName}`).then((blogPost) => {
				this.markdownContent = blogPost;
			});
		},
		data: function () {
			const fileName = this.$route.params.id;
			return {
				fileName,
				markdownContent: '',
			};
		},
	}
</script>

<style scoped>

</style>