<script context="module">
    import { gql, GraphQLClient } from 'graphql-request'
    import BlogTile from '$lib/BlogTile/index.svelte';
    import PageTitle from '$lib/pageTitle.svelte';
    
    export async function load() {
      const graphcms = new GraphQLClient(
        import.meta.env.VITE_GRAPHCMS_URL,
        {
          headers: {},
        }
      )
  
      const query = gql`
        query PostsIndex {
          posts(last: 3) {
            id
            title
            slug
            date
            excerpt
            author {
              name
            }
          }
        }
      `
  
      const { posts } = await graphcms.request(query)
  
      return {
        props: {
          posts,
        },
      }
    }
  </script>
  
  <script>
    export let posts
  </script>
  
 <PageTitle title='UnPhoSurLaLune' />
  <p>Bonjour et bienvenue sur notre blog.</p>
  <br>
  <h2> Les 3 derniers post</h2>
  <ul>
    {#each posts as post}
    <li>
      <BlogTile post={post} />
    </li>
    {/each}
  </ul> 
  


  <style>
    ul {
      list-style-type: none;
      padding-inline-start: 0px;
    }
  </style>