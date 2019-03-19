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
				Developed using storybook as a UI playground. To learn about the project check out <a
				href="https://storybook.js.org/.">https://storybook.js.org/</a>.
			</p>
			<p>
				You can view the instance for this site <a href="./dist/storybook/index.html">here</a>.
			</p>
		</div>
		<div class="section">
			<h2>
				Hop Information
			</h2>
			<p>
				A lot of the hop information comes from the hop variety PDF available from Yakima Chief hops. You can see the original on <a href="https://www.yakimachief.com/wp-content/uploads/Yakima_Chief_Hops_Varieties.pdf">their website</a>.
			</p>
		</div>
		<div class="section">
			<h2>
				Team
			</h2>
			<div class="team-member">
				<div class="team-member-name">
					Broderick Young
				</div>
				<div class="team-member-blurb">
					Web developer based in Austin, Texas. I also am an aspiring homebrewer. Thanks for stopping by!
				</div>
				<div class="social-links">
					<a href="https://twitter.com/bxyoung89" target="_blank" rel="noreferrer noopener" alt="Broderick Young's Twitter">
						<dynamic-svg src="social-icons/013-twitter-1.svg" />
					</a>
					<a href="https://github.com/bxyoung89/" target="_blank" rel="noreferrer noopener" alt="Broderick Young's GitHub">
						<dynamic-svg src="social-icons/039-github.svg" />
					</a>
					<a href="http://broderickyoung.com/" target="_blank" rel="noreferrer noopener" alt="Broderick Young's Website">
						<dynamic-svg src="website.svg" />
					</a>
				</div>
			</div>
			<div class="team-member">
				<div class="team-member-name">
					Shaun Fox
				</div>
				<div class="team-member-blurb">
					Shaun is a UX Designer based in Austin, Texas. On this site he's helped out with some design and css tweaks.
				</div>
				<div class="social-links">
					<a href="https://github.com/shaunrfox" target="_blank" rel="noreferrer noopener" alt="Shaun Fox's GitHub">
						<dynamic-svg src="social-icons/039-github.svg" />
					</a>
					<a href="https://dribbble.com/shaunrfox" target="_blank" rel="noreferrer noopener" alt="Shaun Fox's Dribble">
						<dynamic-svg src="social-icons/048-dribbble.svg" />
					</a>
					<a href="http://shaunfox.com/" target="_blank" rel="noreferrer noopener" alt="Shaun Fox's Website">
						<dynamic-svg src="website.svg" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "about",
};
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

		&::after {
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

	.team-member {
		margin-bottom: 10px;
		background: rgba($light-blue, 50%);
		border-radius: 5px;
		padding: 10px;
		color: $dark-blue;
		position: relative;
		padding-bottom: 50px;
	}

	.team-member-name {
		@include berkshire-swash();
		font-size: 24px;
		margin-bottom: 10px;
	}

	.team-member-blurb {
		margin-bottom: 10px;
	}

	.social-links {
		position: absolute;
		left: 10px;
		right: 10px;
		bottom: 10px;
		text-align: right;


		/deep/ > a {
			margin-right: 10px;
			opacity: 0.5;
			text-decoration: none;
			height: 30px;
			width: 30px;
			display: inline-block;

			&:hover {
				opacity: 0.75;
			}
		}

		/deep/ svg {
			height: 30px;
			width: 30px;
			fill: $white;
		}
	}

	@media (max-width: 800px) {
		.section {
			padding-bottom: 10px;
			margin-bottom: 10px;
		}
	}
</style>
