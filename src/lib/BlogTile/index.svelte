<script>
	export let post;
</script>

<a href="/blog/{post.slug}">
    <div class="button">
        {post.title}
    </div>
</a>

<style>
	.button {
        margin-bottom: 5px;
        padding: 2px 5px;
        display:inline-block;
        background-color: var(--color__text-link-background);
    }
</style>
