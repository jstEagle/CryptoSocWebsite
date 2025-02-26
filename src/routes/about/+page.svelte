<script lang="ts">
    import Card from '$lib/Components/Card.svelte'
</script>

<a href="/" class="back-link">← Back to Home</a>

<section>
    <div class="card-container">
        <Card href="">
            <svelte:fragment slot="title">
                <h2>Who are we?</h2>
            </svelte:fragment>
            <svelte:fragment slot="body">
                <p>Established in 2018 and officially recognized as a DAO (Decentralized Autonomous Organization) in 2024, UC Crypto Soc stands as the University of Canterbury's exclusive society dedicated to blockchain and decentralized finance. As the title implies, we form a community of like-minded UC students passionate about financial sovereignty, decentralized ideology, investing, finance, freedom, and the future of money</p>   
                <p>Our primary goal is to promote crypto education, community building, adoption, and awareness on campus. In our brief history, we have hosted numerous events with industry leaders, garnered sponsorship from New Zealand's industry giants, and etched our name in history as the first NZ university DAO.</p>
                <p>For those seeking to connect with decentralized finance enthusiasts at UC, your search ends with Crypto Soc.</p>
            </svelte:fragment>
        </Card>
    </div>
</section>

<style>
    section {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .card-container {
        width: 80vw;
        height: 70vh;
        margin-top: 10vh;
        transform: scale(1.2);
        user-select: none;
    }

    .back-link {
        position: absolute;
        top: 2rem;
        left: 2rem;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        transition: all 0.3s ease;
        background: linear-gradient(45deg, #02e77c, #00b4d8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 2px 4px rgba(0, 255, 136, 0.2));
    }

    .back-link:hover {
        filter: drop-shadow(0 4px 8px rgba(0, 255, 136, 0.3));
        transform: translateY(-2px);
    }

    .back-link:active {
        transform: translateY(0px);
    }
</style>