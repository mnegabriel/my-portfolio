<script>
    import { fetchPortifolioItems } from "../services/api";

    import BaseCard from "./BaseCard.svelte";
    import TagList from "./TagList.svelte";

    let projects = [];

    (async () => (projects = await fetchPortifolioItems()))();
</script>

{#each projects as project (project.id)}
    <BaseCard
        description={project.description}
        image={{ src: project.image, alt: project.name }}
        title={project.name}
    >
        <svelte:fragment slot="tags">
            {#if project.Tags.length}
                <TagList tags={project.Tags} />
            {/if}
        </svelte:fragment>
    </BaseCard>
{/each}
