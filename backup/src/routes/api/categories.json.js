export const get = async () => {
    const allPostFiles = import.meta.glob('../blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
  
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = path.slice(2, -3)
        
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


    return {
      body: categories
    }
  }