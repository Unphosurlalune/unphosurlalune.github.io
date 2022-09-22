<script>
	import { page } from '$app/stores';
	import { each } from 'svelte/internal';

	$: $page, updateBreadcrumbs();
	
	let breadCrumbs = [];
	function updateBreadcrumbs(){
		let pathArray = $page.url.pathname.split('/').slice(1);
		breadCrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
			breadcrumbArray.push({
			to: breadcrumbArray[idx - 1] > 0
				? "/" + breadcrumbArray[idx - 1].path + "/" + path
				: "/" + path,
			text: path,
			});
			return breadcrumbArray;
		}, [])
	}
	
</script>

<ul class="breadcrumbs">
	<li class:active={$page.url.pathname === '/'}>
		<a href="/"><img src="/logo-192.png" alt="Home" id="home-icon" /></a>
	</li>
	{#if $page.url.pathname != '/'}
		{#each breadCrumbs as breadCrumb}
			 &gt; 
			<li>
                <a href="{breadCrumb.to}">
				    {breadCrumb.text}
                </a>
			</li>
		{/each}
	{/if}
</ul>

<style>
	#home-icon {
		width: 15px;
		height: 15px;
	}
    .breadcrumbs {
        display: flex;
        width: 100%;
        max-width: 1024px;
        padding: 0;
    }
	ul {
		position: relative;
		display: flex;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	a {
		height: 100%;
        padding: 0 0.2em;
		align-items: right;
		color: var(--color__text-link);
		font-size: 1em;
		text-transform: uppercase;
		letter-spacing: 20%;
		text-decoration: none;
	}

	a:hover {
		color: var(--color__text-link-hover);
	}
</style>
