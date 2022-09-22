export const load = async ({ params, fetch }) => {
    const currentCategory = params.slug;
    const response = await fetch('../api/posts');
    const posts = await response.json();
    //TODO: migrate slug  resolve in the endpoint itself
    const matchingPosts = posts.filter((post) => post.meta.categories.includes(currentCategory));

    return {
            category: currentCategory,
            posts: matchingPosts
    };
};