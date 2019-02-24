<template>
	<div class="body-content">
		<app-header/>
		<h1>
			Blog
		</h1>
		<div class="blog-posts">
			<router-link v-for="post in posts" class="blog-post" :key="post.timestamp" :to="`/blog/${post.fileName}`">
				<div class="title">
					{{post.title}}
				</div>
				<div class="date">
					{{post.formattedDate}}
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import BlogData from "../../data/blog-data";

export default {
	name: "blog",
	data: () => ({
		posts: BlogData,
	}),
};
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	.blog-post {
		display: block;
		text-decoration: none;
		padding: 10px;
		background: $white;
		border-radius: 5px;
		margin-bottom: 10px;
	}

	.title {
		font-size: 24px;
	}
</style>
