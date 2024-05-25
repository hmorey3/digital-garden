<script lang='ts'>
	import { globalStore} from './global_store.svelte';
</script>

<div>
	<p>Featured Posts</p>
	{#each $globalStore.featuredPosts as post}
		<a href={post.route} style="color: inherit">
			<div class="p-6 shadow bg-white rounded-lg">
				{post.name}
				<p class="text-xs text-gray-400">Last Updated: {post.lastUpdated}</p>
			</div>
		</a>
	{/each}
</div>
