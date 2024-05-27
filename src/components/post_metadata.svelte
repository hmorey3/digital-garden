<script lang="ts">
	import type { PostMeta } from "../routes/types";

    export let post: PostMeta
</script>

<div class="text-xs text-gray-400">
    <div class="flex items-center">
        <!-- Folder Icon -->
        <svg width="24" height="24" style="transform: scale(0.5); fill: grey;" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M0 2h8l3 3h10v4h3l-4 13h-20v-20zm22.646 8h-17.907l-3.385 11h17.907l3.385-11zm-2.646-1v-3h-9.414l-3-3h-6.586v15.75l3-9.75h16z"/></svg>
        {#each post.topicLabels as label}
            <span class="pr-1">#{label}</span>
        {/each}
        <!-- Clock Icon https://iconmonstr.com/time-3-svg/-->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="transform: scale(0.5); fill: grey;" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"/></svg>
        Last Updated: {post.lastUpdated}
    </div>
</div>