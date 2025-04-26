<script lang="ts">
    export let text = "Foo";
</script>

<button class="button">
    {text}
    <div class="hoverEffect">
        <div></div>
    </div>
</button>

<style>
    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 15px 30px;
        border: 0;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        transition: all 0.02s;
        font-weight: bold;
        cursor: pointer;
        color: #1f1f1f; /* Dark text for light button */
        z-index: 0;
        box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);
        transform: scale(1); /* Reset scale if needed */
        padding: 12px 24px; /* Adjust padding */
        font-size: 1rem; /* Adjust font size */
        border-radius: 8px; /* Ensure radius */
    }

    .button:hover {
        background: #f0f0f0; /* Lighter background on hover */
        color: #1a1a1a; /* Darker text on hover */
    }

    .button:active {
        transform: scale(0.98); /* Slight shrink on click */
    }

    .hoverEffect {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .hoverEffect div {
        /* Bitcoin Orange Gradient */
        background: linear-gradient(
            90deg,
            var(--color-theme-1) 0%,
            var(--color-theme-2) 49%,
            #ffad4a 100% /* Lighter orange for end */
        );
        border-radius: 40rem;
        width: 10rem;
        height: 10rem;
        transition: 0.4s;
        filter: blur(20px);
        animation: effect infinite 3s linear;
        opacity: 0.5;
    }

    .button:hover .hoverEffect div {
        width: 8rem;
        height: 8rem;
    }

    @keyframes effect {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

</style>
