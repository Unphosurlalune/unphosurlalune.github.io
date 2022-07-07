<script context="module">
	import { gql, GraphQLClient } from 'graphql-request';
	import PageTitle from '$lib/pageTitle.svelte';
	import BlogTile from '$lib/BlogTile/index.svelte';

	export async function load(context) {
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
			headers: {}
		});

		const query = gql`
			query getCategory($slug: String!) {
				category(where: { slug: $slug }) {
					name
					description
					posts {
						... on Post {
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
				}
			}
		`;

		const variables = {
			slug: context.params.slug
		};
		const { category } = await graphcms.request(query, variables);

		return {
			props: {
				category
			}
		};
	}
</script>

<script>
	export let category;
</script>

<svelte:head>
	<title>{category.name}</title>
</svelte:head>

<div class="text-center w-full">
	<PageTitle title={category.name} />
	<p>{category?.description}</p>
	<ul>
		{#each category?.posts as post}
			<li>
				<BlogTile {post} />
			</li>
		{/each}
	</ul>
</div>
