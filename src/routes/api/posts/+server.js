import { error } from '@sveltejs/kit';
 
export async function GET() {
    const allPostFiles = import.meta.glob('/src/data/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
  
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = path.replace("/src/data", "").replace(".md", "");
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
  
    const sortedPosts = allPosts.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date)
    })

    return new Response(JSON.stringify(sortedPosts));
}