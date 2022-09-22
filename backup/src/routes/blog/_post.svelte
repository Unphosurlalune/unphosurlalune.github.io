<!-- _post.svelte -->
<script>
	export let title;
	export let date;
	export let author;
	export let categories;
	import BlogHeading from './blogHeading.svelte';
</script>

<svelte:head>
	<title>{title} | UnphoSurLaLune</title>
</svelte:head>

<BlogHeading {title} {author} {date} />

<div class="text-center w-full">
	<slot />
</div>
<br />
{#if categories.length}
	<aside>
		<h2>Categories:</h2>
		<ul>
			{#each categories as category}
				<li>
					<a href="/categories/{category}">
						#{category}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
