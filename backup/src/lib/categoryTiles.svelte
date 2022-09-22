<script>
    export let text = 'Titre';
    export let url = '#_';
</script>

<a href="{url}" class="relative inline-block px-4 py-2 font-medium group my-1">
    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-300 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span class="absolute inset-0 w-full h-full bg-white border-2 border-gray-300 group-hover:bg-gray-300"></span>
    <span class="relative text-black group-hover:text-white">{text}</span>
</a>