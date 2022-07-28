<script lang="ts">
	import { setContext } from 'svelte';
  	import { writable } from 'svelte/store';
  	const layout = writable('layout1');
  	setContext('setLayout', layout.set);
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import '../app.css';
</script>


<Header />
{#if $layout === 'layout1'}
<main class="layout1">
	<slot />
</main>
{/if}

{#if $layout === 'fullPage'}
	<slot />
{/if}


<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 678px;
		margin: 0 auto;
		box-sizing: border-box;
		margin-bottom: 4em;
		padding-top: 35px;
	}
</style>
