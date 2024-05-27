<script lang="ts">
	import Header from '../components/Header_DG.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import { globalStore} from '../components/global_store.svelte';
	import './styles.css';
	import type { GlobalData } from './types';

	export let data: GlobalData;
	globalStore.set(data)

	console.log('Layout loaded pre-rendered data:', data)
</script>

<div class="app">
	<div class="" style="width: 80%; margin: 0 auto"><Header /></div>
	<div style="width: 80%; margin: 0 auto" class="grid grid-cols-2 gap-10">
		<div>
			<main style="padding: 0">
				<slot />
			</main>
		</div>
		<div>
			<Sidebar />
		</div>
	</div>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
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
