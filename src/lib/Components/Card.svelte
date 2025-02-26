<script lang="ts">
    export let href: string;
</script>

{#if href.length > 0}
    <a {href} class="card-link">
        <div class="card-component">
            <h2 class="card-title">
                <slot name="title"/>
            </h2>
            <div class="card-body">
                <slot name="body"/>
            </div>
        </div>
    </a>
{:else}
    <div class="card-component">
        <h2 class="card-title">
            <slot name="title"/>
        </h2>
        <div class="card-body">
            <slot name="body"/>
        </div>
    </div>
{/if}

<style>
    .card-link {
        text-decoration: none;
        color: inherit;
        width: 100%;
    }

    .card-component {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 1rem 2rem;
        transition: box-shadow 0.1s ease, scale 0.3s ease;
        max-width: 100%;
        min-height: fit-content;
        max-height: 100%;
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        will-change: transform;
        transform: translateZ(0);
    }

    .card-component:hover {
        box-shadow: 0 0 25px rgba(0, 255, 136, 0.2);
    }

    .card-title :global(h2) {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        background: linear-gradient(45deg, #01cf6b, #00cccc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        text-shadow: 0 0 1px rgba(0, 255, 136, 0.1);
        text-decoration: none;
        transition: text-decoration 0.1s ease;
    }

    .card-link:hover .card-title :global(h2) {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
        text-decoration-color: #02d56f;
    }

    .card-body :global(p) {
        font-size: 1rem;
        color: #8b8b8b;
        line-height: 1.6;
    }
</style>