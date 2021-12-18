
  <script context="module">
    import { gql, GraphQLClient } from 'graphql-request'
    import CategoryTiles from './categoryTiles.svelte';
    export async function load() {
      const graphcms = new GraphQLClient(
        import.meta.env.VITE_GRAPHCMS_URL,
        {
          headers: {},
        }
      )
  
      const query = gql`
        query GetCategories {
          categories {
            slug,
            name,
            description
        }
        }
      `
  
      const { categories } = await graphcms.request(query)
  
      return {
        props: {
          categories,
        },
      }
    }
  </script>
  
  <script>
    export let categories;
    import PageTitle from "$lib/pageTitle.svelte";
  </script>

    <PageTitle title='Categories' />
    <p class="text-center my-5">
        Voici la liste de categories
    </p>
  <ul class="text-center">
    {#each categories as category}
    <li>
      <CategoryTiles url="/categories/{category.slug}" text='{category.name}' />
    </li>
    {/each}
  </ul>