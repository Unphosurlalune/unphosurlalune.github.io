<script>
import PageTitle from "$lib/pageTitle.svelte";
import Button from "$lib/buttons/button.svelte";
</script>

<PageTitle title='A-propos' />
<p>"UnPhoSurLalUne" se dit "info sur la lune"</p>
<br><br>
<h2> Flux Rss utile</h2>
<p>
    Des flux rss a utiliser, a écouter !
</p>
<div>
    <Button url="/rss" text='flux rss' />
</div>

<style>
    p {
        margin-bottom: 10px;
    }
</style>