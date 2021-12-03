<script context="module">
    import { gql, GraphQLClient } from 'graphql-request'
    import BlogTile from '$lib/BlogTile/index.svelte';
    
    export async function load() {
      const graphcms = new GraphQLClient(
        import.meta.env.VITE_GRAPHCMS_URL,
        {
          headers: {},
        }
      )
  
      const query = gql`
        query PostsIndex {
          posts(orderBy: publishedAt_DESC) {
            id
            title
            slug
            date
            excerpt
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
  
  <h1 class="page-title">Blog</h1>
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
    }
  </style>