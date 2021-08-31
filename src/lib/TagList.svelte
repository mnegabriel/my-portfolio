<script>
    import BaseTag from "./BaseTag.svelte";

    export let tags;
</script>

<div class="tags">
    {#each tags as tag (tag.id)}
        <BaseTag
            image={{ src: tag.link, alt: tag.Name }}
            name={tag.Name}
            color={tag.color}
        />
    {/each}
</div>

<style>
    .tags {
        margin-top: 1rem;
    }
</style>
