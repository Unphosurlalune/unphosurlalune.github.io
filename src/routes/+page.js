export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts');
    const allPosts = await posts.json()
    
    return {
        posts: allPosts.slice(0,2)
    }
}