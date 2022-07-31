<script>
	import Button from '$lib/buttons/button.svelte';
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';
	import Sidebar from '$lib/navigation/sidebar.svelte';
	import Hamburger from '$lib/navigation/hamburger.svelte';
	
	export let open = false;
	
    let handleClose = function() {
        open = false
    }
    $: if($navigating) handleClose();

</script>

<nav class="z-200">
	<ul class="invisible sm:visible">
		<li class:active={$page.url.pathname === '/'}>
			<Button url='/' text='Accueil' />
		</li>
		<li class:active={$page.url.pathname === '/blog'}>
			<Button url="/blog" text='Blog' /></li>
		<li class:active={$page.url.pathname === '/categories'}>
			<Button url="/categories" text='Categories' /></li>
		<li class:active={$page.url.pathname === '/a-propos'}>
			<Button url="/a-propos" text='A propos' /></li>
	</ul>
	<div class="visible xs:invisible sm:invisible">
		<div style="position:absolute; top: 5px; text-align:center; width:100%">
			<Button url='/' text='UnPhoSurLaLune' />
		</div>
		<Hamburger bind:open/>
		<Sidebar bind:open>
			<Button url="/blog" text='Blog' /><br>
			<Button url="/categories" text='Categories'/><br>
			<Button url="/a-propos" text='A propos' /><br>
		</Sidebar>
	</div>
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
