import type { Post } from "./types"
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export async function load() {

    const __dirname = dirname(fileURLToPath(import.meta.url));
    var pathToPosts = path.join(__dirname, 'posts');
    var postFileNames: Array<string> = fs.readdirSync(pathToPosts);
    const postFiles = postFileNames.map(postFileName =>
        fs.readFileSync(path.join(pathToPosts, postFileName), 'utf-8')
    )
    console.log('files', postFiles)

    console.log('dynamic import', await import('./posts/post1'))
    const posts: Array<Post> = await getPosts()
    const topicLabels: Array<string> = getTopicLabels(posts)
    const featuredPosts: Array<Post> = posts.filter(post => post.featured)

    return {
        featuredPosts: featuredPosts,
        topics: topicLabels.map(topicLabel => ({
            name: topicLabel,
            route: `/topics/${topicLabel}`
        }))
    }
}

function createSlug(name: string): string {
    return name.replace(' ', '_').toLowerCase()
}

function getTopicLabels(posts: Array<Post>): Array<string> {
    const topicLabelsDuplicates: Array<string> = posts.reduce((prev: Array<string>, curr) => {
        prev.push(...curr.topicLabels)
        return prev
    }, [])
    const topicLabels: Array<string> = Array.from(new Set(topicLabelsDuplicates))
    return topicLabels
}

async function getPosts(): Promise<Array<Post>> {
    const rawPosts = [
        await import("./posts/post1"),
        await import("./posts/post2")
    ]

    const parsedPosts: Array<Post> = rawPosts.map(rawPost => ({
        featured: rawPost.featured,
        lastUpdated: rawPost.lastUpdated,
        slug: createSlug(rawPost.name),
        name: rawPost.name,
        content: rawPost.content,
        topicLabels: rawPost.topicLabels
    }))

    return parsedPosts
}