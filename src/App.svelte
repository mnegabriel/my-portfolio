<script>
    import { fetchPortifolioItems } from "./services/api";

    import mocks from "./mocks/components";

    import BaseCard from "./lib/BaseCard.svelte";
    import BaseHeading from "./lib/BaseHeading.svelte";
    import BaseTag from "./lib/BaseTag.svelte";
    import TheFooter from "./lib/TheFooter.svelte";

    const { sampleCard, tags } = mocks;

    let projects = [];

    (async () => (projects = await fetchPortifolioItems()))();
</script>

<h1>Components list</h1>

<BaseHeading title="Card" />
{#each projects as project (project.id)}
    <BaseCard
        description={project.description}
        image={{ src: project.image, alt: project.name }}
        title={project.name}
    >
        <div slot="tags">
            {#each project.Tags as tag (tag.id)}
                <BaseTag
                    image={{ src: tag.link, alt: tag.Name }}
                    name={tag.Name}
                    color={tag.color}
                />
            {/each}
        </div>
    </BaseCard>
{/each}

<TheFooter />
