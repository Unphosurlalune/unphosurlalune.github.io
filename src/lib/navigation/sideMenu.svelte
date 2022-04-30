<script>
    import Button from '$lib/buttons/button.svelte';
    export let open = false;
    export let width;
    export let paddingTop = '25px';
</script>

<style>
    #container {
        position: absolute;
        height: 100vh;
        top: 0px;
        overflow-y: auto;
    }
    
    #menu {
        text-align: left;
    }
</style>
 
<div id="container" class="bg-gray-200" style="width: auto; left: {open ? '0px' : ('-' + width)}; transition: left 0.4s ease-in-out">
    <div id="menu" class="px-5 pl-1" style="padding-top: {paddingTop};">
        <Button url="/blog" text='Blog'  on:click={() => (open = !open)} /><br>
        <Button url="/categories" text='Categories' on:click={() => (open = !open)} /><br>
        <Button url="/a-propos" text='A propos' on:click={() => (open = !open)} /><br>
    </div>
</div>