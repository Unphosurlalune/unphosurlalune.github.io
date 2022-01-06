<script>
import PageTitle from "$lib/pageTitle.svelte";
import ExternalTile from '$lib/externalTile.svelte';
let flux = [
    '100.xml',
    '130.xml',
    '160.xml',
    '190.xml',
    '220.xml',
    '260.xml',
    '110.xml',
    '140.xml',
    '170.xml',
    '200.xml',
    '230.xml',
    '270.xml',
    '120.xml',
    '150.xml',
    '180.xml',
    '210.xml',
    '240.xml',
    'paraboles.xml'
];

</script>

<PageTitle title='Des liens Rss' />
Sources:
<ExternalTile url="https://www.enseignements-bibliques-jmthobois.com" text="www.enseignements-bibliques-jmthobois.com"/>
<ExternalTile url="https://www.youtube.com/channel/UCqikEBiVFFPmPhj0CtBoJrQ" text="Youtube: Association Keren"/>
<br>
<br>
Flux:
<ul class="">
    {#each flux as flu}
    <li>
        <ExternalTile text="{flu}" url="rss/jmt/{flu}" />
    </li>
    {/each}
</ul>

<style>
    p {
        margin-bottom: 10px;
    }
</style>