<script>
    // Blog specific
    import BlogTile from '$lib/BlogTile/index.svelte';

    // Buttons
    import Button from '$lib/buttons/button.svelte';
    
    // Page
    import PageTitle from '$lib/pageTitle.svelte';
    import ExternalTile from '$lib/externalTile.svelte';
    import CategoryTiles from '$lib/categoryTiles.svelte';
    import HomeTitle from '$lib/homeTitle.svelte';

    // Sections


    // in blog
    import BlogHeading from "../blog/blogHeading.svelte";
</script>

BlogHeading:
<BlogHeading title="UnPhoSurLaLune" author="author" date="xx-xx-xx"/>

<br>
BlogTile:
<BlogTile  />

<hr><br>
Button
<Button />

<hr><br>
CategroryTiles
<CategoryTiles />
ExternalTile:
<ExternalTile url="#" text="Url to external link" />
HomeTile
<HomeTitle title="title"/>
PageTitle:
<PageTitle title="Some title here" />