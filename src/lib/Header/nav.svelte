<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Accueil</a></li>
		<li class:active={$page.path === '/a-propos'}><a sveltekit:prefetch href="/">a-propos</a></li>
		<!--
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/post">post</a></li>
			<li class:active={$page.path === '/labs'}><a sveltekit:prefetch href="/a-propos">About</a></li>
		 <li class:active={$page.path === '/nfts'}><a sveltekit:prefetch href="/nfts">NFTs</a></li> -->
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: left;
		--background: var(--color_BG_navBar);
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
		background: var(--color_BG_navBar);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color_linkHover);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--color_link);
		font-size: 1em;
		text-transform: uppercase;
		letter-spacing: 20%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color_linkHover);
		border-top: 1px solid var(--color_linkHover);
	}
</style>
