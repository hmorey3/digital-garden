<script lang="ts">
    export let lastUpdated: string
    export let topicLabels: string
</script>

<div>
    <p class="text-xs text-gray-400">
        {#each topicLabels as label}
            #{label}
        {/each}
    </p>
    <p class="text-xs text-gray-400">
        Last Updated: {lastUpdated}
    </p>
    <slot></slot>
</div>