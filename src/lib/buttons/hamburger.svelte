<script>
    export let open = false;
    export let duration = 2;
    export let burgerColor = '#DDDD';
    export let menuColor = 'EEEE';
</script>


<button class:open on:click={() => open = !open} style="transition: color {duration}s ease-in-out; color: {open ? menuColor : burgerColor};">
<div class="relative inline-block text-lg group">
	<span
		class="relative z-10 block px-2 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white"
	>
		<span class="absolute inset-0 w-full h-full px-2 py-1 rounded-lg bg-gray-50" />
		<span
			class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"
		/>
		<span class="relative">
            <svg width=32 height=32>
                <line id="top" x1=0 y1=9    x2=32 y2=9    style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"/>
                <line id="mid" x1=0 y1=18.5 x2=32 y2=18.5 style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"/>
                <line id="bot" x1=0 y1=28    x2=32 y2=28  style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"/>
            </svg>
		</span>
	</span>
	<span
		class="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
		data-rounded="rounded-lg"
	/>
</div>



	
</button>