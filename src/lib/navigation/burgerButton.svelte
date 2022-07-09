<script>
	export let open;
</script>

<div class="button" class:open on:click={() => (open = !open)}>
	<div class="relative inline-block text-lg group">
		<span
			class="relative z-10 block px-2 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white"
		>
			<span class="absolute inset-0 w-full h-full px-2 py-1 rounded-lg bg-gray-50" />
			<span
				class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"
			/>
			<span class="relative">
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
						fill="currentColor"
					/>
					<path
						d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
						fill="currentColor"
					/>
					<path
						d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
						fill="currentColor"
					/>
				</svg>
			</span>
		</span>
		<span
			class="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
			data-rounded="rounded-lg"
		/>
	</div>
</div>

<style>
	.button {
		position: absolute;
		top: 5px;
		left: 8px;
	}
	</style>
