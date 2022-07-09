<script>
	import BurgerButton from '$lib/navigation/burgerButton.svelte';
	import SideMenu from '$lib/navigation/sideMenu.svelte';
	export let open = false;
	export let duration = 0.4;
	export let width = '15em';
	export let padding = '25px';
	export let paddingTop = '50px';
	export let backgroundColor = 'rgb(1, 0, 74)';
	export let burgerColor = 'rgb(18.4, 18.4, 18.4)';
	export let menuColor = 'rgb(180, 180, 180)';
	let burgerProps = {
		duration: duration,
		burgerColor: burgerColor,
		menuColor: menuColor
	};
	let menuProps = {
		duration: duration,
		width: width,
		padding: padding,
		paddingTop: paddingTop,
		backgroundColor: backgroundColor,
		menuColor: menuColor
	};

	let closeFn = () => {
		open = false;
	}
	
</script>


<div class="">
	<BurgerButton {...burgerProps} bind:open />
	<SideMenu {...menuProps} bind:open />
</div>

