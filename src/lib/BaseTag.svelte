<script>
    export let image = { src: "", alt: "" };
    export let name = "";
    export let color = ""
    
    let box

    $: colorStyle = color && /#[\da-f]{6}/gi.test(color)
        ? `--border-color: ${color};`
        : ''

</script>

<div
    class="tag"
    style={colorStyle}
    bind:this={box}
>
    <div class="icon">
        <img src={image.src} alt={`icone ${image.alt}`} />
    </div>
    <div class="title">
        <span>{name}</span>
    </div>
</div>

<style>
    .tag,
    .icon,
    .title {
        display: inline-flex;
    }

    .tag {
        --border-color: black;
        border: 0.1rem solid var(--border-color);
        border-radius: 10rem;

        padding: .7rem .8rem;
        
        align-items: center;
        gap: 0.5rem;

        max-width:4.3rem;
        
        transition: all 0.3s ease;
    }
    
    .icon {
        height: 2.6rem;
    }
    
    img {
        height: 100%;
        padding: .3rem;
    }
    
    .title {
        overflow: hidden;
    }

    .tag span {
        white-space: nowrap;
    }
    
    .tag:hover {
        max-width: 100%;
        padding-left: 1.4rem;
        padding-right: 1.4rem;
    }

</style>
