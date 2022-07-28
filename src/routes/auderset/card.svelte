<script>
	export let book;
	import LangFlag from './lang_flag.svelte';
</script>

<div class="card book-card-grid">
	<div class="images">
		{#if book.img}
			<img alt="book" src="/img/auderset/{book.img}.webp" />
		{/if}
	</div>

	<div class="details-grid">
		<p>Alain Auderset</p>
		<h1>{book.originalName}</h1>
		<p class="desc">
			{#if book.desc}
				{book.desc}
			{:else}
				Some description
			{/if}
		</p>
		<div class="buttons hidden">
			<button class="add">Acheter</button>
		</div>
	</div>
	<div class="lang-grid">
		<p class="pick">Disponible en</p>
		<div class="sizes">
			{#each book.languages as lang}
				<LangFlag {lang} />
			{/each}
		</div>
	</div>
</div>

<style>
	.book-card-grid {
		width: 100%;
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		column-gap: 15px;
	}
	.lang-grid {
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.details-grid {
		grid-column-start: 2;
		grid-column-end: 3;
	}
	.card {
		padding: 15px 10px;
		background: #f5f5f5;
		box-shadow: 5px 5px 15px rgba(38, 38, 38, 0.5);
		border-radius: 5px;
	}
	.book-card {
		position: relative;
		margin: auto;
		overflow: hidden;
		width: 100%;
		height: auto;
		padding: 15px 0px;
		background: #f5f5f5;
		box-shadow: 5px 5px 15px rgba(38, 38, 38, 0.5);
		border-radius: 5px;
	}

	p {
		font-size: 0.8em;
		color: #1a3547;
		letter-spacing: 1px;
	}

	h1 {
		font-size: 1.2em;
		color: #262626;
		line-height: 1em;
	}

	h2 {
		color: #c3a1a0;
		line-height: 1em;
	}

	img {
		width: auto;
		height: 180px;
		position: relative;
		left: 5%;
	}

	.product {
		position: absolute;
		width: 50%;
		height: 100%;
		top: 6%;
		left: 51%;
	}

	.desc {
		text-transform: none;
		letter-spacing: 0;
		margin-bottom: 17px;
		margin-top: 5px;
		color: #4e4e4e;
		font-size: 0.7em;
		line-height: 1.3em;
		margin-right: 17px;
		text-align: justify;
	}

	button {
		background: #1a3547;
		padding: 10px;
		display: inline-block;
		outline: 0;
		border: 0;
		margin: -1px;
		border-radius: 2px;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: #f5f5f5;
		cursor: pointer;
	}
	button:hover {
		background: #46bb5d;
		transition: all 0.4s ease-in-out;
	}

	.add {
		width: 67%;
	}
	.sizes {
		display: grid;
		color: #d9aab7;
		grid-template-columns: repeat(auto-fill, 30px);
		grid-gap: 4px;
		margin-left: 20px;
		margin-top: 5px;
	}
	.sizes:hover {
		cursor: pointer;
	}

	.pick {
		margin-top: 11px;
		margin-bottom: 0;
		margin-left: 20px;
	}
</style>
