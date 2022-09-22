
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';
 
export async function GET() {
    const allPostFiles = import.meta.glob('/src/data/blog/*.md', { eager: true })
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const data = await resolver;
        const metadata = data.metadata
        const postPath = path.replace("/src/data", "").replace(".md", "");
        const body  = data.default.render().html;
        return {
          meta: metadata,
          path: postPath,
          body: body
        }
      })
    )
    return new Response(JSON.stringify(allPosts));
}


/*
import { error } from '@sveltejs/kit';

export async function GET({ url }) {
	const slug = url.searchParams.get('slug');
	//let path = '/src/data/blog/' + slug + '.md';

	const allPostFiles = import.meta.globEager('/src/data/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.replace('/src/data', '').replace('.md', '');
			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	const filteredPosts = posts.filter((p) => {
        return slug.toLowerCase() === p.path.toLowerCase();
      });

	return new Response(JSON.stringify(filteredPosts));
}
*/