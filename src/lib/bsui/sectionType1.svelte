<script>
	export let title = 'Deuh.Github.io';
	export let subtitle = "You don't need to know";
</script>

<div class="section1__type1">
	<section class="Section Section--clipped Section--ignoreTopPadding">
		<div class="Section__Background Section__Background--clipped">
			<div class="Background Background--blueRedGradient" style="--dots-opacity:0.3;">
			</div>
		</div>
		<div class="block">
			<div class="block__main">
				<div class="blockContent">
					<h2 class="blockContent__title">{title}</h2>
					<p class="blockContent__copy">{subtitle}</p>
					<br />
					<slot />
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.Background {
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		overflow: hidden;
		z-index: -1;
	}
	.Background--dark {
		background-color: #343c52;
	}
	.Background--blueRedGradient {
		background: linear-gradient(90deg, rgba(229, 231, 235,1), rgba(229, 231, 235, 0.6));
	}
	.Background__Overlay {
		z-index: 0;
		pointer-events: none;
		content: ' ';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: cover;
		mask-size: cover;
		-webkit-mask-position: center center;
		mask-position: center center;
	}
	.Background__Graphic--dark {
		background-color: rgba(34, 43, 63, 0.5);
	}
	.Background__Graphic--dark.Background__Graphic--circle {
		background-color: rgba(0, 0, 0, 0.8);
	}
	.Background__Graphic--circle {
		top: unset;
		bottom: -30%;
		height: 100%;
		max-width: 866px;
		margin: 0 auto;
		-webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY2IiBoZWlnaHQ9Ijg2NiIgdmlld0JveD0iMCAwIDg2NiA4NjYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIG9wYWNpdHk9IjAuMiI+CjxjaXJjbGUgY3g9IjQzMyIgY3k9IjQzMyIgcj0iMzkyLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iODEiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpvdmVybGF5Ii8+CjwvZz4KPGcgb3BhY2l0eT0iMC4yIj4KPGNpcmNsZSBjeD0iNDMzIiBjeT0iNDMzIiByPSIyNTguNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSI1MSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm92ZXJsYXkiLz4KPC9nPgo8L3N2Zz4K);
		mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY2IiBoZWlnaHQ9Ijg2NiIgdmlld0JveD0iMCAwIDg2NiA4NjYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIG9wYWNpdHk9IjAuMiI+CjxjaXJjbGUgY3g9IjQzMyIgY3k9IjQzMyIgcj0iMzkyLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iODEiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpvdmVybGF5Ii8+CjwvZz4KPGcgb3BhY2l0eT0iMC4yIj4KPGNpcmNsZSBjeD0iNDMzIiBjeT0iNDMzIiByPSIyNTguNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSI1MSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm92ZXJsYXkiLz4KPC9nPgo8L3N2Zz4K);
		-webkit-mask-position: center top;
		mask-position: center top;
	}
	.Background__Dots {
		background: rgba(0, 0, 0, 0.2);
		background-repeat: repeat-x;
		background-size: 12px 780px;
		opacity: var(--dots-opacity);
	}
	.Background__Dots--topLeft {
		-webkit-mask-image: linear-gradient(135deg, transparent 75%, #fff),
			radial-gradient(circle at bottom right, #fff, transparent 25%);
		mask-image: linear-gradient(135deg, transparent 75%, #fff),
			radial-gradient(circle at bottom right, #fff, transparent 25%);
		background-position: 100% 100%;
	}
	.Background__Dots--bottomRight {
		background-position: 0 0;
		-webkit-mask-image: linear-gradient(315deg, transparent 75%, #fff),
			radial-gradient(circle at top left, #fff, transparent 25%);
		mask-image: linear-gradient(315deg, transparent 75%, #fff),
			radial-gradient(circle at top left, #fff, transparent 25%);
	}
	.block {
		width: 100%;
		padding: 0 20px;
	}
	@media (max-width: 20em) {
		.block {
			padding: 0 8px;
		}
	}
	@media (min-width: 46em) {
		.block {
			padding: 0 48px;
		}
	}
	@media (min-width: 64em) {
		.block {
			padding: 0 80px;
		}
	}
	@media (min-width: 80em) {
		.block {
			padding: 0 136px;
		}
	}
	@media (min-width: 112.5em) {
		.block {
			padding: 0 136px;
		}
	}
	.block__main {
		margin: 0 auto;
		max-width: 1600px;
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
	.Section {
		--diagonal-size: 20px;
		--section-padding: 70px;
		--header-size: 17px;
		--header-error-size: 150px;
		padding: var(--section-padding) 0;
		position: relative;
		z-index: 0;
	}
	@media (min-width: 56.25em) {
		.Section {
			--diagonal-size: 30px;
			--section-padding: 90px;
			--header-size: 117px;
			--header-error-size: 200px;
		}
	}
	.Section--clipped {
		margin-top: calc(var(--diagonal-size) * -1);
	}
	.Section--ignoreTopPadding {
		padding-top: 0;
	}
	.Section__Background {
		z-index: -1;
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.Section__Background--clipped {
		-webkit-clip-path: polygon(0 var(--diagonal-size), 100% 0, 100% 100%, 0 100%);
		clip-path: polygon(0 var(--diagonal-size), 100% 0, 100% 100%, 0 100%);
	}
	.blockContent {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding-top: 50px;
		padding-bottom: 50px;
	}
	.blockContent__title {
		text-shadow: -2px -2px 0 #040404, 0 -2px 0 #040404, 2px -2px 0 #040404, 2px 0 0 #040404,
			2px 2px 0 #040404, 0 2px 0 #040404, -2px 2px 0 #040404, -2px 0 0 #040404, 0 3.5px 0 #040404,
			-2px 3.5px 0 #040404, 2px 3.5px 0 #040404;
		font-size: 34px;
	}
	.blockContent__copy,
	.blockContent__title {
		color: #fff;
		font-weight: 400;
		font-family: Roboto Mono, monospace;
		text-transform: none;
		text-transform: uppercase;
	}
	.blockContent__copy {
		text-shadow: -1.5px -1.5px 0 #040404, 0 -1.5px 0 #040404, 1.5px -1.5px 0 #040404,
			1.5px 0 0 #040404, 1.5px 1.5px 0 #040404, 0 1.5px 0 #040404, -1.5px 1.5px 0 #040404,
			-1.5px 0 0 #040404, 0 3px 0 #040404, -1.5px 3px 0 #040404, 1.5px 3px 0 #040404;
		font-size: 16px;
		margin-top: 20px;
	}
	@supports (padding: 0px) {
		.CheerButton {
			margin-bottom: calc(env(safe-area-inset-bottom) + 10px);
		}
	}
	.section1 {
		position: relative;
	}
	@media (min-width: 56.25em) {
		.section1__type1 .Section {
			padding-top: 90px;
		}
	}
	@media (max-width: 56.24em) {
		.section1__type1 .Background__Graphic {
			display: none;
		}
	}
	@supports (padding: 0px) {
		.FeedScrollButton {
			margin-bottom: calc(env(safe-area-inset-bottom) + 22px);
		}
	}
	.section1 {
		position: relative;
	}
	@media (min-width: 56.25em) {
		.section1__type1 .Section {
			padding-top: 90px;
		}
	}
	@media (max-width: 56.24em) {
		.section1__type1 .Background__Graphic {
			display: none;
		}
	}
</style>
