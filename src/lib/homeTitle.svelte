<script>
    export let title = '';
</script>

<h1 class="text-center page-title text-xl">{title}</h1>

<style>
	.page-title {
		margin: 25px 0px;
	}

	.page-title::before {
		content: '•';
		position: relative;
		top: 2px;
		right: 3px;
	}	

	.page-title::after {
		content: '•';
		position: relative;
		top: 2px;
		left: 3px;
	}
</style>