<script lang="ts">
    import PostMetadata from './post_metadata.svelte'
    export let post;
</script>

<a href={post.route} style="color: inherit">
    <div class="p-6 shadow bg-white rounded-lg">
        <div class="flex items-left">
            <!-- News Icon https://iconmonstr.com/newspaper-13-svg/-->
            <svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(167 139 250 / var(--tw-bg-opacity))" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z"/></svg>
            <p class="mb-3 ml-2">{post.name}</p>
        </div>
        <PostMetadata post={post} />
    </div>
</a>