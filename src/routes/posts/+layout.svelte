<script lang="ts">
	import type { PostMeta } from "../types";
    export let data: {metadata: PostMeta} | undefined
    import { pageTitle} from '../../lib/global_store.svelte';
	import PostMetadata from "../../lib/post_metadata.svelte";
    pageTitle.set(data?.metadata.name ?? "Error")
</script>

<svelte:head>
	<title>{data?.metadata?.name ?? "error"} - Digital Garden</title>
</svelte:head>


<div>
    {#if data}
        <PostMetadata post={data.metadata} />
        <div class="text-left" style="text-align: left !important">
            <slot></slot>
        </div>
    {:else}
        <p>Error loading post</p>
    {/if}
</div>