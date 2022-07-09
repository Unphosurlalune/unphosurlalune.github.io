<script context="module">
    import { gql, GraphQLClient } from 'graphql-request';
    import BlogHeading from './blogHeading.svelte'; 
  
    export async function load(context) {
      const graphcms = new GraphQLClient(
        import.meta.env.VITE_GRAPHCMS_URL,
        {
          headers: {},
        }
      )
  
      const query = gql`
        query PostPageQuery($slug: String!) {
          post(where: { slug: $slug }) {
            title
            date
            content {
              html
            }
            tags
            author {
              id
              name
            }
          }
        }
      `
  
      const variables = {
        slug: context.params.slug,
      }
  
      const { post } = await graphcms.request(query, variables)
  
      return {
        props: {
          post,
        },
      }
    }
  </script>
  
  <script>
    export let post
  </script>
  
  <svelte:head>
    <title>{post.meta.title}</title>
  </svelte:head>
  
  <div class="text-center w-full">
  <BlogHeading title='{post.meta.title}' author='{post.author.name}' date='{post.date}' />
  <p>{post?.tags}</p>
  {@html post?.content?.html}
  </div> 