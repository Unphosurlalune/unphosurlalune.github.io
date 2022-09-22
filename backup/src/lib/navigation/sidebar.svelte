<script>
	export let open = false
</script>

<aside class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<nav class="pb-16 pt-6">
		<slot />
	</nav>
</aside>

<style>
	aside {
		bottom: -100%;
		transition: bottom 0.3s ease-in-out;
		height: auto;
		position: fixed;
		text-align: center;
	}
	
	.open {
		bottom: 0
	}
</style>