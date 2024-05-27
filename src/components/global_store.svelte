<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import type { GlobalData } from '../routes/types';


    const initTopicGroupings: GlobalData= {
        featuredPosts: [],
        topics: [],
        posts: []
    }

	export const siteContent = writable(initTopicGroupings);
    export const pageTitle = writable('');
</script>
