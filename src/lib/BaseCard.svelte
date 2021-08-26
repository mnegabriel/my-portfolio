<script>
    export let image = { src: "", alt: "", };
    export let title = ''
    export let description = ''
</script>

<article class:grid={image?.src}>
    {#if image?.src}
        <section class="image">
            <img src={image.src} alt={image.alt} />
        </section>
    {/if}

    <section class="content">
        <h4>{title}</h4>
        <p>{description}</p>
        <slot name="tags"></slot>
    </section>
</article>

<style>
    /* temp */
    article {
        margin: 10px;
    }
    /* temp */

    article {
        overflow: hidden;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }

    section,
    img {
        width: 100%;
    }

    img {
        min-height: 180px;
        object-fit: cover;
    }

    .content {
        padding: 10px 18px 14px;
    }

    @media (min-width: 600px) {
        article.grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
        }

        img {
            height: 100%;
            /* min-height: unset; */
        }
    }
</style>
