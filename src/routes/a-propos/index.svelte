<script>
	import PageTitle from '$lib/pageTitle.svelte';
	import Button from '$lib/buttons/button.svelte';
	import SectionType1 from '$lib/bsui/sectionType1.svelte';

	import SectionType2 from '$lib/bsui/sectionType2.svelte';
</script>

<PageTitle title="A-propos" />
<p>Un petit propos à propos d'UnPhoSurLalUne</p>

<SectionType2 title="UnPhoSur What ??!" text='ca se dit "info sur la lune"' />
<SectionType1 title="" subtitle="Flux Utile">    
	<p>Des flux rss a utiliser, a écouter !</p>
	<Button url="/rss" text="flux rss" />
</SectionType1>


<style>
	p {
		margin-bottom: 10px;
	}
</style>
