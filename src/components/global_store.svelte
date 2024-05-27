<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import type { SiteContent } from '../routes/types';


    const initSiteContent: SiteContent= {
        featuredPosts: [],
        topics: [],
        posts: []
    }

	export const siteContent = writable(initSiteContent);
    export const pageTitle = writable('');
</script>
