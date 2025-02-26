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
        color: rgb(37, 37, 37);
        z-index: 0;
        box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);
        transform: scale(2);
    }

    .button:hover {
        background: rgb(193, 228, 248);
        color: rgb(33, 0, 85);
    }

    .button:active {
        transform: scale(2.8);
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
        background: rgb(222, 0, 75);
        background: linear-gradient(
            90deg,
            #02e77c 0%,
            rgb(70, 255, 233) 49%,
            #00b4d8 100%
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
