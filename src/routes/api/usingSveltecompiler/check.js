// https://mdsvex.pngwn.io/docs/#mdsvex-1


const svelte = require('svelte/compiler');
const { mdsvex } = require('mdsvex');

// This will give you a valid svelte component
const preprocessed = await svelte.preprocess(
	source,
	mdsvex(mdsvex_opts)
);

// Now you can compile it if you wish
const compiled = svelte.compile(
	preprocessed,
	compiler_options
);