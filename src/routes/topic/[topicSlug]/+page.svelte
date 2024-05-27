<script lang="ts">
	import { pageTitle } from '../../../lib/global_store.svelte';
	import Post from '../../../lib/post.svelte'

    export let data
    $: posts = data.postsWithLabel ?? []
	$: pageTitle.set(data.topicName ?? "Error")
</script>

<svelte:head><title>{data.topicName} - Digital Garden</title></svelte:head>

<div>
	{#if data.postsWithLabel}
		<div class="grid grid-cols-1 gap-6">
			{#each posts as post}
				<Post post={post} />
			{/each}
		</div>
	{:else}
			<p>Could not find post data</p>
	{/if}

    <!-- <slot></slot> -->
</div>