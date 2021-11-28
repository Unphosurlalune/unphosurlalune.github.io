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
        query PostsIndex {
          posts {
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
  
  <h1>UnPhoSurLaLune</h1>
  <ul>
    {#each posts as post}
    <li>
      <a href="/post/{post.slug}">{post.title}</a>
    </li>
    {/each}
  </ul> 

  <style>
      :global(body) {
          background-color: #b7b8ba;
          color: #383C49;
          /*
           color1: #445369;
            color2: #b7b8ba;
            color3: #849cac;
            color4: #847c84;
            color5: #2c2c2c;
      }
  </style>