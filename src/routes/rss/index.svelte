<script>
	import PageTitle from '$lib/pageTitle.svelte';
	import ExternalTile from '$lib/externalTile.svelte';
	let flux = [
		{
			url: 'rss/jmt/100.xml',
			title: 'Série 100 - Doctrine de Dieu'
		},
		{
			url: 'rss/jmt/110.xml',
			title: 'Série 110 - Doctrine du Salut'
		},
		{
			url: 'rss/jmt/120.xml',
			title: 'Série 120 - La Doctrine de Christ'
		},
		{
			url: 'rss/jmt/130.xml',
			title: 'Série 130 - La Doctrine du Saint-Esprit'
		},
		{
			url: 'rss/jmt/140.xml',
			title: 'Série 140 - Les Ministères'
		},
		{
			url: 'rss/jmt/150.xml',
			title: 'Série 150 - Le monde des esprits'
		},
		{
			url: 'rss/jmt/160.xml',
			title: "Série 160 - La Doctrine de l'Eglise"
		},
		{
			url: 'rss/jmt/170.xml',
			title: "Série 170 - La Doctrine d'Israël"
		},
		{
			url: 'rss/jmt/180.xml',
			title: 'Série 180 - La Doctrine des choses dernières'
		},
		{
			url: 'rss/jmt/190.xml',
			title: 'Série 190 - Les Ecritures'
		},
		{
			url: 'rss/jmt/200.xml',
			title: 'Série 200 - La Doctrine de la Bible'
		},
		{
			url: 'rss/jmt/210.xml',
			title: 'Série 210 - Anthropologie'
		},
		{
			url: 'rss/jmt/220.xml',
			title: 'Série 220 - Herméneutique'
		},
		{
			url: 'rss/jmt/230.xml',
			title: 'Série 230 - Ethique'
		},
		{
			url: 'rss/jmt/240.xml',
			title: 'Série 240 - Le protestantisme'
		},
		{
			url: 'rss/jmt/260.xml',
			title: 'Série 260 - Archéologie Biblique'
		},
		{
			url: 'rss/jmt/270.xml',
			title: 'Série 270 - Le catholisisme'
		},
        {
            url: 'rss/jmt/paraboles.xml',
            title: 'Paraboles du Royaume'
        },
		{
			url: 'rss/jmt/evangile-de-matthieu.xml',
			title: "Lecture hébraïque de l'évangile de Matthieu"
		}
	];
</script>

<PageTitle title="Des liens Rss" />
Sources:
<div>
    <ExternalTile
        url="https://www.associationkeren.com/"
        text="Association Keren (officiel)"
    />
	<ExternalTile
		url="https://www.enseignements-bibliques-jmthobois.com"
		text="www.enseignements-bibliques-jmthobois.com"
	/>
	<ExternalTile
		url="https://www.youtube.com/channel/UCqikEBiVFFPmPhj0CtBoJrQ"
		text="Youtube: Association Keren"
	/>
    
</div>
<br />
<br />
Flux:
<ul class="">
	{#each flux as flu}
		<li>
			<ExternalTile text={flu.title} url="{flu.url}" />
		</li>
	{/each}
</ul>

<style>
	p {
		margin-bottom: 10px;
	}
</style>
