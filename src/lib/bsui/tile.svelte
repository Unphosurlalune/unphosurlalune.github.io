<script>
	import IcoPoints from '$lib/bsui/img/ico_points.svelte';
	export let title = 'Pattern';
	export let description = 'The pattern is the pattern';
</script>

<div class="baseModal__content">
	<div class="baseModal__scroll">
		<div class="basicModal">
			<span class="basicModal__title">
				{title}
				<IcoPoints />
			</span>
			<span class="basicModal__body">
				<p>{description}</p>
			</span>
		</div>
	</div>
</div>

<style>
	p {
		margin: 0;
		padding: 0;
	}
	p {
		user-select: text;
		-moz-user-select: text;
		-webkit-user-select: text;
		-ms-user-select: text;
	}
	.basicModal {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.basicModal__title {
		text-shadow: -2px -2px 0 #040404, 0 -2px 0 #040404, 2px -2px 0 #040404, 2px 0 0 #040404,
			2px 2px 0 #040404, 0 2px 0 #040404, -2px 2px 0 #040404, -2px 0 0 #040404, 0 3.5px 0 #040404,
			-2px 3.5px 0 #040404, 2px 3.5px 0 #040404;
		color: #fff;
		font-weight: 400;
		font-family: Roboto Mono, monospace;
		text-transform: none;
		text-transform: uppercase;
		font-size: 24px;
		text-shadow: unset;
		color: #000;
	}
	.basicModal__body {
		color: #040404;
		font-size: 14px;
		font-family: Montserrat, sans-serif;
		font-weight: 700;
		margin-top: 10px;
		max-width: 500px;
	}
	.basicModal__body:lang(jp),
	.basicModal__body:lang(kr),
	.basicModal__body:lang(pl),
	.basicModal__body:lang(ru),
	.basicModal__body:lang(tr),
	.basicModal__body:lang(zh_cn),
	.basicModal__body:lang(zh_tw) {
		font-family: NotoSans, sans-serif;
		font-weight: 700;
	}
	@font-face {
		font-family: swiper-icons;
		src: url('data:application/font-woff;charset=utf-8;base64, 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')
			format('woff');
		font-weight: 400;
		font-style: normal;
	}
	:root {
		--swiper-theme-color: #fff;
	}
	:root {
		--swiper-navigation-size: 44px;
	}
	@keyframes swiper-preloader-spin {
		to {
			transform: rotate(1turn);
		}
	}
	.baseModal {
		position: absolute;
	}
	@supports (padding: 0px) {
		.CheerButton {
			margin-bottom: calc(env(safe-area-inset-bottom) + 10px);
		}
	}
	.baseModal {
		position: absolute;
		height: 100vh;
	}
	@supports (padding: 0px) {
		.FeedScrollButton {
			margin-bottom: calc(env(safe-area-inset-bottom) + 22px);
		}
	}
	.baseModal {
		position: absolute;
		height: 100vh;
	}
	.baseModal {
		position: absolute;
	}
	.baseModal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1001;
	}
	.baseModal__content {
		box-shadow: 0 2px #040404;
		border-radius: 5px;
		border: 2px solid #040404;
		margin: 0 auto;
		width: -webkit-fit-content;
		width: -moz-fit-content;
		width: fit-content;
		max-width: 830px;
		min-width: 250px;
		position: relative;
		background-color: #fff;
		padding: 20px 25px;
	}
	.baseModal__scroll {
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		max-height: 80vh;
	}
	.baseModal__scroll::-webkit-scrollbar {
		display: none;
	}
</style>
