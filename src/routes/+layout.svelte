<script lang="ts">
	import Header from '../components/header.svelte';
	import Sidebar from '../components/sidebar.svelte';
	import { siteContent, pageTitle} from '../components/global_store.svelte';
	import './styles.css';
	import type { GlobalData } from './types';

	export let data: GlobalData;
	siteContent.set(data)
	console.log('Layout loaded pre-rendered data:', data)

</script>

<div class="app">
	<div class="" style="width: 80%; margin: 0 auto"><Header /></div>
	<div style="width: 80%; margin: 0 auto" class="grid grid-cols-3 gap-5">
		<div class="col-span-3 p-6 shadow bg-violet-400 text-white rounded-lg">{$pageTitle}</div>
		<div class="col-span-2">
			<main style="padding: 0">
				<slot />
			</main>
		</div>
		<div>
			<Sidebar />
		</div>
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
