<script>
    import mocks from "./mocks/components";

    import BaseCard from "./lib/BaseCard.svelte";
    import BaseHeading from "./lib/BaseHeading.svelte";
    import BaseTag from "./lib/BaseTag.svelte";
import TheFooter from "./lib/TheFooter.svelte";

    const { sampleCard, tags } = mocks;
</script>

<h1>Components list</h1>

<BaseHeading title="Card" />
<BaseCard {...sampleCard} />

<BaseHeading title="Tags" />
{#each tags as tag}
    <BaseTag {...tag} />
{/each}


<TheFooter/>