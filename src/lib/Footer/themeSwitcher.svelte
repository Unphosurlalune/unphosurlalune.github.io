<script>
	import IconMoon from '$lib/Icons/moon.svelte';
	import IconSun from '$lib/Icons/sun.svelte';
	function displayDark() {
		window.document.body.classList.remove('light-mode');
		document.getElementById('display_light').classList.remove('active');
		document.getElementById('display_dark').classList.add('active');
	}
	function displayLight() {
		window.document.body.classList.add('light-mode');
		document.getElementById('display_dark').classList.remove('active');
		document.getElementById('display_light').classList.add('active');
	}
</script>

<div class="viewModeButtons">
	<span on:click={displayLight} class="button" id="display_light">
		<IconSun />
	</span>
	<span on:click={displayDark} class="button active" id="display_dark">
		<IconMoon />
	</span>
</div>

<style>
	.viewModeButtons {
		position: fixed;
		display: inline-flex;
		padding: 4px 6px;
		right: 5px;
		background-color: var(--color_BG);
		border-radius: 10px;
	}
	.button {
		margin-left: 3px;
	}
	#display_dark {
		margin-top: 2px;
		margin-left: 15px;
	}
	.button.active {
		color: var(--color_link);
	}
	.button:hover {
		color: var(--color_linkHover);
	}
</style>
