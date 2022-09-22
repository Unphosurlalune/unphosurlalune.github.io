export const load = async ({ fetch }) => {
    const categories = await fetch('../api/categories');
    const allCategories = await categories.json()
    
    return {
        categories: allCategories
    };
};