import type { PostMeta, GlobalData } from "./types"
import fs from 'fs'
import path from 'path'
import { CONFIG } from "./config";
import { base } from '$app/paths';

export async function load(): Promise<GlobalData> {
    const posts: Array<PostMeta> = await getPosts()
    const topicLabels: Array<string> = getTopicLabels(posts)
    const featuredPosts: Array<PostMeta> = posts.filter(post => post.featured)

    return {
        featuredPosts: featuredPosts,
        topics: topicLabels.map(topicLabel => ({
            name: topicLabel,
            route: `${base}${CONFIG.pathToTopic}/${createSlug(topicLabel)}`
        })),
        posts
    }
}
function createSlug(name: string): string {
    return name.replace(' ', '_').toLowerCase()
}

function getTopicLabels(posts: Array<PostMeta>): Array<string> {
    const topicLabelsDuplicates: Array<string> = posts.reduce((prev: Array<string>, curr) => {
        prev.push(...curr.topicLabels)
        return prev
    }, [])
    const topicLabels: Array<string> = Array.from(new Set(topicLabelsDuplicates))
    return topicLabels
}

async function getPosts(): Promise<Array<PostMeta>> {

    const pathToPosts = path.join('src/routes', CONFIG.pathToPostMdDir);
    const postPageNames: Array<string> = fs.readdirSync(pathToPosts);

    const parsedPosts: Array<PostMeta> = postPageNames.map(pageName => {
        try {
            const file = fs.readFileSync(path.join(pathToPosts, pageName, CONFIG.postFileName), 'utf-8')
            const metadataRaw = file.split('---')[1].trim()
            const metadata: Record<string, string> = metadataRaw.split('\n').reduce((prev: Record<string, string>, curr: string) => {
                const [key, val] = curr.split(':')
                prev[key] = val.trim()
                return prev
            }, {})
            return {
                featured: !!(metadata.featured?.toLowerCase() == "true"),
                lastUpdated: metadata.lastUpdated,
                route: `${base}${CONFIG.pathToPostMdDir}/${pageName}`,
                name: metadata.name,
                topicLabels: metadata.topicLabels.split(',')
            }
        } catch(e) {
            console.error("Error parsing post markdown file. Pagename: ", pageName, e);
            throw e;
        }
    })

    return parsedPosts
}