<template>
	<div class="body-content">
		<app-header/>
		<div v-html="markdownContent" class="blog-post">

		</div>
	</div>
</template>

<script>
export default {
	name: "blog-detail",
	mounted() {
			import(`../../../data/blog-posts/${this.fileName}`).then((blogPost) => {
				this.markdownContent = blogPost.default;
			});
	},
	data() {
		const fileName = this.$route.params.id;
		return {
			fileName,
			markdownContent: "",
		};
	},
};
</script>

<style lang="scss" scoped>
	@import "../../../styles/core";

	.blog-post {
		/deep/ img {
			max-width: 100%;
		}

		/deep/ p {
			line-height: 1.5em;
		}

		/deep/ table {
			background: $dark-blue;
			border-collapse: collapse;
		}

		/deep/ tr {
			&:nth-child(even) {
				background: rgba($light-blue, .2);
			}
		}

		/deep/ th {
			padding: 10px;
			background: $light-blue;
			color: $dark-blue;
			text-align: left;
		}

		/deep/ td {
			padding: 10px;
		}
	}

</style>
