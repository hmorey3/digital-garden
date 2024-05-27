import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({route, parent}) => {
    const postSlug = route.id.split('/').pop()
    const parentMeta = await parent()
    const metadata = parentMeta.posts.find(post => post.route.endsWith(`/${postSlug}`))

    return {
        metadata
    };
};