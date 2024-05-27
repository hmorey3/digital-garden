<script lang="ts">
	import { siteContent, pageTitle } from '../components/global_store.svelte';
	pageTitle.set("Home")

	// TODO:
	// deploy to github
	// update readme - Static rendering - parsing at build, how to add pages
	// display last updated

	//Tailwind CSS: https://v1.tailwindcss.com/components

	/*
  
*/
</script>

<svelte:head><title>Digital Garden</title></svelte:head>

<div class="grid grid-cols-1 gap-6">

	{#each $siteContent.featuredPosts as post}
		<a href={post.route} style="color: inherit">
			<div class="p-6 shadow bg-white rounded-lg">
				{post.name}
				<p class="text-xs text-gray-400">
					{#each post.topicLabels as label}
						#{label}
					{/each}
					Last Updated: {post.lastUpdated}
				</p>
			</div>
		</a>
	{/each}
</div>
