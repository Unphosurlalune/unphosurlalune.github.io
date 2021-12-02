<script lang="ts">
	import ThemeSwicther from '$lib/Footer/themeSwitcher.svelte'
import Breadcrumbs from './breadcrumbs.svelte';
</script>

<footer>
	<p>UnPhoSurLaLune</p>
	<ThemeSwicther />
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color_BG_navBar);
		position: fixed;
		bottom: 0;
		width: 100%;    
		margin: 0px;
		padding: 0px 5px 2px;
	}

	@media (max-width: 425px) {
		footer {
			justify-content: right;
			padding: 0px 1rem;
		}
	}
</style>
