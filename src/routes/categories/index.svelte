
  <script context="module">
    import { gql, GraphQLClient } from 'graphql-request'
    
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
    export let categories
    console.log(categories);
  </script>
  
  <h1 class="page-title">
    Categories
</h1>
<p>
    Voici la liste de categories
</p>
  <ul>
    {#each categories as category}
    <li>
      <a href="/categories/{category.slug}">
        <div class="button">
            {category.name}
        </div>
    </a>
    </li>
    {/each}
  </ul>