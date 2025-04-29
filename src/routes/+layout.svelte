<script lang="ts">
    import '../app.css';
    import CryptoFloatingCards from '$lib/Components/CryptoFloatingCards.svelte';
    import Footer from '$lib/Components/Footer.svelte';

    let { children } = $props();
</script>

<div class="app">
    <main>
        {@render children()}
    </main>
    <Footer />
</div>

<style>
    .app {
        display: flex;
        min-height: 100vh;
        width: 100%;
        position: relative;
        overflow-x: hidden; /* Prevent horizontal scroll */
    }

    main {
        flex: 1; /* Allow main to grow and take available space */
        width: 100%; /* Ensure it tries to use full width */
        overflow-x: hidden; /* Prevent horizontal scroll within main */
        display: flex;
        flex-direction: column; /* Stack content vertically */
        align-items: center; /* Center content horizontally */
        padding: 2rem 5vw; /* Keep internal padding for content spacing */
        box-sizing: border-box; /* Ensure padding is included in width calculation */
    }

    /* Desktop: Add left margin for the fixed sidebar */
    @media (min-width: 769px) {
        main {
            /* Remove padding adjustment */
            /* padding-left: calc(5vw + 100px); */
            margin-left: calc(5vw + 100px); /* Add margin to push content right */
            /* Adjust width calculation if needed, though flex: 1 should handle it */
             width: calc(100% - (5vw + 100px)); /* Explicitly set width considering margin */
        }
    }

    /* Mobile: Add bottom margin for the fixed bottom bar */
    @media (max-width: 768px) {
        main {
            /* Remove padding adjustment */
            /* padding-bottom: 80px; */
            margin-bottom: 80px; /* Add margin to push content up */
            /* Reset desktop margin and width */
            margin-left: 0;
            width: 100%;
            /* Keep mobile-specific padding if needed, already handled by default padding */
            /* padding-top: 2rem; */
            /* padding-left: 5vw; */
            /* padding-right: 5vw; */
        }
    }
</style>
