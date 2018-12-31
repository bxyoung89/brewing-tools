<template>
	<div class="body-content">
		<app-header/>
		<h1>
			About ❧
		</h1>
		<div class="section">
			<h2>
				Icons
			</h2>
			<p>
				Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a
				href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a
				href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
			</p>
		</div>

		<div class="section">
			<h2>
				Fonts
			</h2>
			<p>
				Used Fira Sans and Berkshire Swash courtesy of google fonts.
			</p>
		</div>

		<div class="section">
			<h2>
				Storybook
			</h2>
			<p>
				Developed using storybook as a UI playground. To learn about the project check out https://storybook.js.org/.
			</p>
			<p>
				You can view my instance <a href="/dist/storybook/index.html">here</a>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "about"
	}
</script>

<style lang="scss" scoped>
	@import "../../styles/core";

	.about-page-content {
		max-width: 1000px;
		margin: 0 auto;
		padding-top: 200px;
	}

	.section {
		padding-bottom: 40px;
		margin-bottom: 40px;
		position: relative;

		&:after {
			content: "\2766";
			position: absolute;
			top: 100%;
			left: 50%;
			transform: translateX(-50%);
			margin-top: -10px;
			color: $white;
			font-size: 24px;
		}
	}
</style>