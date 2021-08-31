<div class="container">
    <slot />
</div>

<style>
    .container {
        width: 100%;
        max-width: var(--container-width, 100rem);
        margin-left: auto;
        margin-right: auto;

        padding-left: 1rem;
        padding-right: 1rem;
    }
</style>
