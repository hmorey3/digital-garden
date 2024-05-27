export type TopicLabels = 'App Engineering' | 'TableTop RPGs'

export type TopicMeta = {
    name: string,
    route: string
}

export type GlobalData = {
    featuredPosts: Array<PostMeta>,
    topics: Array<TopicMeta>,
    posts: Array<PostMeta>
}

export type PostMeta = {
    lastUpdated: string
    name: string,
    route: string,
    topicLabels: Array<string>
}