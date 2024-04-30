<script lang="ts">
  import {globalStore} from './global_store.svelte'
  
	//TODO: make topic import automatic (on site build)
  // dynamic page for posts and topic list? maybe
  // finish setting up mdsvex (need to add preprocessor to webpack config or rollup)
  // deploy to github

	//Tailwind CSS: https://v1.tailwindcss.com/components

  /*
  
  
*/
  
</script>


<div class="grid grid-cols-2 gap-6">
	{#each $globalStore.topics as topic}
		<a href={topic.route} style="color: inherit">
			<div class="p-6 shadow bg-white rounded-lg">{topic.name}</div>
		</a>
	{/each}
</div>
