<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import type { TopicGroupings } from './types';

    const initTopicGroupings: TopicGroupings= {
        featuredPosts: [],
        topics: []
    }

	export const globalStore = writable(initTopicGroupings);
</script>
