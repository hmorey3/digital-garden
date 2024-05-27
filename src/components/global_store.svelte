<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import type { GlobalData } from './types';

    const initTopicGroupings: GlobalData= {
        featuredPosts: [],
        topics: []
    }

	export const globalStore = writable(initTopicGroupings);
</script>
