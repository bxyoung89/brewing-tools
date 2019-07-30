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
			display: block;
			margin: 0 auto;
			max-width: 300px;
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

		/deep/ h2 {
			font-size: 32px;
			font-weight: 700;
			padding-bottom: 5px;
			margin-bottom: 5px;
			border-bottom: 1px solid $white;
			color: $dark-blue;
		}

		/deep/ h3 {
			font-size: 24px;
			font-weight: 700;
			color: $dark-blue;
		}

		/deep/ h4 {
			font-size: 16px;
			font-style: italic;
			font-weight: 700;
			margin: 24px 0;
			color: $dark-blue;
			opacity: 0.75;
		}

		/deep/ h5 {
			font-size: 14px;
			font-style: italic;
			margin: 24px 0;
			color: $dark-blue;
			opacity: 0.75;
		}
	}

</style>
