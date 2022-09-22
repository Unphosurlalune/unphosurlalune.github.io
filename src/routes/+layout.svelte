<script>
	import '../app.postcss';
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
</script>


<Header />
<main>
	<slot />
</main>
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
