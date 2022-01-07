<script>
    export let title = '';
    export let author = '';
    export let date = '';
</script>

<div class="w-full md:w-3/3 px-5 py-2 my-3 bg-gray-100 rounded-lg">
    <div class="flex items-center">
        <h2 class="text-xl text-gray-800 font-medium mr-auto">{title}</h2>
    </div>
    <div class="flex items-center justify-end mt-1 top-auto text-gray-600">
        {author} - {date}
    </div>
</div>