<script lang='ts'>
	import { siteContent} from './global_store.svelte';
</script>


<div>
	<p class="mb-5">Explore By Topic</p>
	{#each $siteContent.topics as topic}
		<div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-violet-300 py-2 px-3.5 mr-3 mb-3 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
			<a href={topic.route} style="color: inherit">#{topic.name}</a>
		</div>
	{/each}
</div>
