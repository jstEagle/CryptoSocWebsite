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
        background: rgba(40, 40, 40, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        padding: 1.5rem;
        transition: box-shadow 0.1s ease, scale 0.3s ease;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        will-change: transform;
        transform: translateZ(0);
        
        @media (max-width: 768px) {
            padding: 1rem;
            max-width: 100%;
        }
    }

    .card-title :global(h2) {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        /* Bitcoin Orange Gradient */
        background: linear-gradient(45deg, var(--color-theme-1), #ffb86c); /* Orange to lighter orange */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        text-shadow: 0 0 1px rgba(247, 147, 26, 0.1);
        text-decoration: none;
        transition: text-decoration 0.1s ease;
    }

    .card-link:hover .card-title :global(h2) {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
        text-decoration-color: var(--color-theme-1); /* Orange underline */
    }

    .card-body :global(p) {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.7); /* Lighter paragraph text */
        line-height: 1.6;
        
        @media (max-width: 768px) {
            font-size: 0.9rem;
        }
    }
</style>