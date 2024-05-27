<script lang="ts">
	import { siteContent, pageTitle } from '../lib/global_store.svelte';
	import Post from '../lib/post.svelte'
	pageTitle.set("Featured Posts")

	// TODO:
	// update readme - Static rendering - parsing at build, how to add pages
	// display last updated
	// fix post formatting

	//Tailwind CSS: https://v1.tailwindcss.com/components

	/*
  
*/
</script>

<svelte:head><title>Digital Garden</title></svelte:head>

<div class="grid grid-cols-1 gap-6">

	{#each $siteContent.featuredPosts as post}
		<Post post={post} />
	{/each}
</div>
