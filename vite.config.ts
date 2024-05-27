import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
        rollupOptions: {
            external: ['fs', 'path'] // Exclude 'fs' and 'path' from the client-side bundle
        }
    }
});

