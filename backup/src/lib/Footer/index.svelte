<script>
	import ThemeSwicther from '$lib/Footer/themeSwitcher.svelte'
	import Breadcrumbs from './breadcrumbs.svelte';
</script>

<footer>
	<p>• UnPhoSurLaLune •</p>
</footer>


<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--color__textInButton);
		background-color: var(--color__button-background);
		position: fixed;
		bottom: 0;
		width: 100%;    
		margin: 0px;
		padding: 10px 5px;
	}

	@media (max-width: 425px) {
		footer {
			justify-content: center;
			padding: 0px 1rem;
		}
	}
</style>
