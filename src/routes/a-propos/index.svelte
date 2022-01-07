<script>
import PageTitle from "$lib/pageTitle.svelte";
import Button from "$lib/buttons/button.svelte";
</script>

<PageTitle title='A-propos' />
<p>"UnPhoSurLalUne" se dit "info sur la lune"</p>

<h2> Flux Rss utile</h2>
<p>
    Des flux rss a utiliser, a écouter !
</p>
<Button url="/rss" text='rss' />
<style>
    p {
        margin-bottom: 10px;
    }
</style>