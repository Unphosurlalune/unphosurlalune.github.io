<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Accueil</a></li>
		<li class="separator">•</li>
		<li class:active={$page.path === '/blog'}><a sveltekit:prefetch href="/blog">Blog</a></li>
		<li class="separator">•</li>
		<li class:active={$page.path === '/categories'}><a sveltekit:prefetch href="/categories">Categories</a></li>
		<li class="separator">•</li>
		<li class:active={$page.path === '/a-propos'}><a sveltekit:prefetch href="/a-propos">A propos</a></li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		color: var(--color__textInButton);
		padding: 0.3rem 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
	}

	ul {
		position: relative;
		border-radius: 4px;
		padding: 0;
		margin: 0;
		height: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: #dad9d7;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.separator {
		top: 5px;
		color: var(--color__text);
	}
	li.active a{
		color:var(--color__text);
	}

	li.active::after {
		--size:6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color__text-link-hover);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--color__text-link);
		font-size: 1em;
		text-transform: uppercase;
		letter-spacing: 20%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color__text-link-hover);
		border-top: 1px solid var(--color__text-link-hover);
	}
</style>
