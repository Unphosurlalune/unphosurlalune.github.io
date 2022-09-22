import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, params }) => {
  console.log('page.js');
	let targetSlug = '/blog/' + params.slug;
	let postSlug = 'slug=' + params.slug;
	const posts = await fetch('../api/post?' + postSlug);
	const allPost = await posts.json();

  const filteredPosts = allPost.filter((p) => {
    return targetSlug.toLowerCase() === p.path.toLowerCase();
  });

  if (filteredPosts)
  {
    return filteredPosts[0];
  }

	throw error(404, 'Not found');
};
