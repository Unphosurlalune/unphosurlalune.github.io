<script>
	import Button from '$lib/buttons/button.svelte';
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li class:active={$page.path === '/'}>
			<Button url='/' text='Accueil' />
		</li>
		<li class:active={$page.path === '/blog'}>
			<Button url="/blog" text='Blog' /></li>
		<li class:active={$page.path === '/categories'}>
			<Button url="/categories" text='Categories' /></li>
		<li class:active={$page.path === '/a-propos'}>
			<Button url="/a-propos" text='A propos' /></li>
	</ul>
</nav>

<style>
	nav {
		width: 100%;
		max-width: 1024px;
		margin: 5px auto;
	}
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		margin-right: 5px;
	}

	ul:first-child {
		margin-right: 0px;
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
		z-index: 11;
	}
</style>
