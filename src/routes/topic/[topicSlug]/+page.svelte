<script lang="ts">

    export let data
    const posts = data.postsWithLabel ?? []
</script>

<div>
	{#if data.postsWithLabel}
		<p class="text-l text-black ">Topic: {data.topicName}</p>
		{#each posts as post}
			<a href={post.route} style="color: inherit">
				<div class="p-6 shadow bg-white rounded-lg">
					{post.name}
				</div>
			</a>
		{/each}
	{:else}
			<p>Could not find post data</p>
	{/if}

    <!-- <slot></slot> -->
</div>