<script lang="ts">
	import type { PostMeta } from "../types";
    export let data: {metadata: PostMeta} | undefined
    import { pageTitle} from '../../components/global_store.svelte';
    pageTitle.set(data?.metadata.name ?? "Error")
</script>

<svelte:head>
	<title>{data?.metadata?.name ?? "error"} - Digital Garden</title>
</svelte:head>


<div>
    {#if data}
        <p class="text-xs text-gray-400">
            {#each data.metadata.topicLabels ?? [] as label}
                #{label}
            {/each}
        </p>
        <p class="text-xs text-gray-400">
            Last Updated: {data.metadata?.lastUpdated}
        </p>
        <slot></slot>
    {:else}
        <p>Error loading post</p>
    {/if}
</div>