<script>
	import PageTitle from '$lib/pageTitle.svelte';
	import Button from '$lib/buttons/button.svelte';
	import SectionType1 from '$lib/bsui/sectionType1.svelte';

	import SectionType2 from '$lib/bsui/sectionType2.svelte';
</script>

<PageTitle title="A-propos" />
<p>"UnPhoSurLalUne" se dit "info sur la lune"</p>

<SectionType2 />
<SectionType1 title="RSS" subtitle="Flux Utile">    
	<p>Des flux rss a utiliser, a écouter !</p>
	<Button url="/rss" text="flux rss" />
</SectionType1>


<style>
	p {
		margin-bottom: 10px;
	}
</style>
