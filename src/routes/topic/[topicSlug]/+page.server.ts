import type { SiteContent } from "../../types";

export async function load({ parent, params }: { parent: () => Promise<SiteContent>, params: { topicSlug: string } }) {
	const { posts, topics } = await parent();
	const topicName = topics.find(topic => topic.route.endsWith(`/${params.topicSlug}`))?.name
	let postsWithLabel = topicName
		? posts.filter(post => post.topicLabels.includes(topicName))
		: undefined
	
	return {
		postsWithLabel,
		topicName
	};
}