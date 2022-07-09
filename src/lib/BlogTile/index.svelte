<script>
	export let post = {
		'path': "/path/to/post",
		'meta': {
			'title': "Post title",
			'excerpt': "Post excerpt",
			'author': "Post author",
			'date': "Post date"
		}
	}
</script>

<a href="{post.path}">
	<div class="w-full  px-5 py-2 my-5 bg-gray-200  rounded-lg">
		<div class="flex items-center">
			<h2 class="text-xl text-gray-800 font-medium mr-auto">{post.meta.title}</h2>
		</div>
		<p class="text-sm text-gray-700 mt-4">
			{post.meta.excerpt}
		</p>
		<p class="text-gray-600 font-semibold tracking-tighter" />
		<div class="flex items-center justify-end mt-1 top-auto">
			{post.meta.author}
			{post.meta.date}
		</div>
	</div>
</a>

<style>
    a:hover h2 {
        color: var(--color__text-link-hover);
    }
</style>