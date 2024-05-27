<script lang="ts">
  import {globalStore} from '../components/global_store.svelte'
  
  // TODO: 
  // deploy to github
  // update readme - Static rendering - parsing at build, how to add pages
// display last updated

	//Tailwind CSS: https://v1.tailwindcss.com/components

  /*
  
  
*/
  
</script>

<svelte:head><title>Digital Garden</title></svelte:head>


<div class="grid grid-cols-2 gap-6">
	{#each $globalStore.topics as topic}
		<a href={topic.route} style="color: inherit">
			<div class="p-6 shadow bg-white rounded-lg">
				{topic.name}
			</div>
		</a>
	{/each}
</div>
