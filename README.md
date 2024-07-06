# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Adding Content

Add a new blog post by adding a new md page under src/routes/posts/md/<your-post-name>/+page.svelte.md

## How the site work

This is a static site. At build time routes/+layout.server.ts parses the src/routes/posts/md/ markdown files into metadata, which is put in a svelte store. Markdown labels are used to categorize posts - the "Name" metadata is the human-readable name shown in post links. The name of the folder is the slug for the route. Mdsvex is used to render markdown as a svelte component.


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
