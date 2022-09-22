<script>
    
</script>

<nav class="PageHeader">
	<div class="PageHeader__Content">
		<div  class="block">
			<div  class="block__main">
				<div  class="PageHeader__Container">

				</div>
			</div>
		</div>
	</div>
</nav>

<style>
	.PageHeader {
		position: fixed;
		width: 100%;
		z-index: 10;
		pointer-events: none;
		--diagonal-size: 20px;
	}
	@media (min-width: 56.25em) {
		.PageHeader {
			--diagonal-size: 30px;
		}
	}

	.PageHeader__Content {
		position: relative;
	}
	.PageHeader__Content:after,
	.PageHeader__Content:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: -1;
		-webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--diagonal-size)), 0 100%);
		clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--diagonal-size)), 0 100%);
	}
	.PageHeader__Content:after {
		height: 52px;
		background-color: #343c52;
	}
	@media (min-width: 56.25em) {
		.PageHeader__Content:after {
			height: 67px;
		}
	}
	.PageHeader__Content:before {
		height: 54px;
		background-color: #000;
	}
	@media (min-width: 56.25em) {
		.PageHeader__Content:before {
			height: 69px;
		}
	}
	.PageHeader__Content--error {
		padding-top: 20px;
	}
	.PageHeader__Container {
		width: 100%;
		padding-top: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
	.PageHeader__Logo {
		width: 100px;
		height: auto;
	}
	@media (max-width: 23.4275em) {
		.PageHeader__Logo {
			width: 70px;
		}
	}
	@media (min-width: 56.25em) {
		.PageHeader__Logo {
			width: 130px;
		}
	}
	.PageHeader__SignInBtn,
	.PageHeader__UserProfile {
		flex-grow: 0;
	}
	@media (min-width: 46em) {
		.PageHeader__SignInBtn,
		.PageHeader__UserProfile {
			min-width: 190px;
		}
	}
	main{display:block}.block{width:100%;padding:0 20px}@media (max-width:20em){.block{padding:0 8px}}@media (min-width:46em){.block{padding:0 48px}}@media (min-width:64em){.block{padding:0 80px}}@media (min-width:80em){.block{padding:0 136px}}@media (min-width:112.5em){.block{padding:0 136px}}.block__main{margin:0 auto;max-width:1600px}.PageHeader{position:fixed;width:100%;z-index:10;pointer-events:none;--diagonal-size:20px}@media (min-width:56.25em){.PageHeader{--diagonal-size:30px}}.PageHeader__Content{position:relative}.PageHeader__Content:after,.PageHeader__Content:before{content:"";position:absolute;top:0;left:0;width:100%;z-index:-1;-webkit-clip-path:polygon(0 0,100% 0,100% calc(100% - var(--diagonal-size)),0 100%);clip-path:polygon(0 0,100% 0,100% calc(100% - var(--diagonal-size)),0 100%)}.PageHeader__Content:after{height:52px;background-color:#343c52}@media (min-width:56.25em){.PageHeader__Content:after{height:67px}}.PageHeader__Content:before{height:54px;background-color:#000}@media (min-width:56.25em){.PageHeader__Content:before{height:69px}}.PageHeader__Container{width:100%;padding-top:10px;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.nav{display:flex;justify-content:space-around;align-items:flex-start;background-color:rgba(52,60,82,.6);position:fixed;z-index:16;width:100vw;gap:10px;padding:10px}.Container{width:100%;margin-top:10px;margin-bottom:20px}@font-face{font-family:swiper-icons;src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#fff}:root{--swiper-navigation-size:44px}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}@supports (padding:0px){.CheerButton{margin-bottom:calc(env(safe-area-inset-bottom) + 10px)}}@supports (padding:0px){.FeedScrollButton{margin-bottom:calc(env(safe-area-inset-bottom) + 22px)}}
</style>
