<script>
    import mocks from "./mocks/components";

    import CardComponent from "./lib/CardComponent.svelte";
    import HeadingComponent from "./lib/HeadingComponent.svelte";
    import TagComponent from "./lib/TagComponent.svelte";

    const { sampleCard, tags } = mocks;
</script>

<h1>Components list</h1>
<HeadingComponent title="Card" />
<CardComponent {...sampleCard} />
<HeadingComponent title="Tags" />
{#each tags as tag}
    <TagComponent {...tag} />
{/each}
