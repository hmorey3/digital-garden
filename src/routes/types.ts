export type TopicLabels = 'App Engineering' | 'TableTop RPGs'

export type TopicRoute = {
    name: string,
    route: string
}

export type PostRoute = {route: string} & Post

export type TopicGroupings = {
    featuredPosts: Array<PostRoute>, // TODO finish propagating this type change
    topics: Array<TopicRoute>
}

export type Post = {
    featured?: boolean,
    lastUpdated: Date
    name: string,
    slug: string,
    content: string,
    topicLabels: Array<string>
}