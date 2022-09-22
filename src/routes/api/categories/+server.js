import { error } from '@sveltejs/kit';
 
export async function GET() {
    const allPostFiles = import.meta.glob('/src/data/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
  
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = path.replace('/src/data', '')
        
        return {
          meta: metadata.categories,
          path: postPath,
        }
      })
    )
    
    const categories = allPosts.reduce((acc, { meta, path }) => {
        meta.forEach(category => {
            if (!acc[category]) {
                acc[category] = {
                    name: category,
                    posts: [path],
                    path: '/categories/' + category
                }
            }
            else
            {
                acc[category].posts.push(path)
            }
        }
        )
        return acc
    }
    , {})

    return new Response(JSON.stringify(categories));
}