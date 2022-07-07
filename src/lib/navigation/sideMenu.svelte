<script>
    import Button from '$lib/buttons/button.svelte';
    import { navigating } from '$app/stores';

    export let open = false;
    export let width;
    export let paddingTop = '25px';

    let handleClick = function() {
        open = !open
    }

    $: if($navigating) handleClick();
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
        <Button url="/blog" text='Blog'  /><br>
        <Button url="/categories" text='Categories' /><br>
        <Button url="/a-propos" text='A propos' /><br>
    </div>
</div>