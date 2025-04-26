<script lang="ts">
    import GradientButton from '$lib/Components/GradientButton.svelte';
    import Card from '$lib/Components/Card.svelte';
    import Footer from '$lib/Components/Footer.svelte';
</script>

<svelte:head>
    <title>CryptoSOC</title>
    <meta name="description" content="UC CryptoSOC website" />
</svelte:head>

<section class="container">
    <div class="header-container">
        <h1 class="title">CryptoSOC</h1>
        <div class="subtitle">The future of finance and ownership</div>
    </div>

    <div class="cards-container">
        <Card href="/about">
            <svelte:fragment slot="title">
                <h2>Learn more about us</h2>
            </svelte:fragment>
            <svelte:fragment slot="body">
                <p>If what you read above about our community doesn't satisfy your curiosity. Click this card and learn more!</p>
            </svelte:fragment>
        </Card>
        <Card href="https://docs.google.com/forms/d/e/1FAIpQLSdNJ6iozYWmHPDYHRgv9swUZrxxdhZ2oAI5cIx2JgfH8nNgqw/viewform">
            <svelte:fragment slot="title">
                <h2>Become a Sponsor</h2>
            </svelte:fragment>
            <svelte:fragment slot="body">
                <p>If you have too much money or phylanthropy is your thing and your values align with ours, feel free to fill out a sponsorship form by clicking on this card!</p>
            </svelte:fragment>
        </Card>
        <Card href="/dao">
            <svelte:fragment slot="title">
                <h2>Dive Deeper into the DAO</h2>
            </svelte:fragment>
            <svelte:fragment slot="body">
                <p>What is a decentralized Autonomous Organisation? What does it look like? How does it operate? Why make one? If these are the questions on your mind, click this card to find out more!</p>
            </svelte:fragment>
        </Card>
    </div>

    <div class="action-buttons">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScvnLytHluiYJqNvmRimAX7zJzYxwwd8-YoDuvrlqCCOOa5xQ/viewform" target="_blank">
            <GradientButton text="Join the SOC"/>
        </a>
        <a href="https://admin.daohaus.club/#/molochv3/0xa/0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a" target="_blank">
            <GradientButton text="Join the DAO"/>
        </a>
    </div>

    <div class="card-section">
        <Card href="/about">
            <svelte:fragment slot="title">
                <h2>Learn more about us</h2>
            </svelte:fragment>
            <svelte:fragment slot="body">
                <p>If what you read above about our community doesn't satisfy your curiosity. Click this card and learn more!</p>
            </svelte:fragment>
        </Card>
        <Card href="https://docs.google.com/forms/d/e/1FAIpQLSdNJ6iozYWmHPDYHRgv9swUZrxxdhZ2oAI5cIx2JgfH8nNgqw/viewform">
            <svelte:fragment slot="title">
                <h2>Become a Sponsor</h2>
            </svelte:fragment>
            <svelte:fragment slot="body">
                <p>If you have too much money or phylanthropy is your thing and your values align with ours, feel free to fill out a sponsorship form by clicking on this card!</p>
            </svelte:fragment>
        </Card>
        <Card href="/dao">
            <svelte:fragment slot="title">
                <h2>Dive Deeper into the DAO</h2>
            </svelte:fragment>
            <svelte:fragment slot="body">
                <p>What is a decentralized Autonomous Organisation? What does it look like? How does it operate? Why make one? If these are the questions on your mind, click this card to find out more!</p>
            </svelte:fragment>
        </Card>
    </div>
</section>

    <Footer />

<nav class="bottom-nav">
    <a href="/" class="nav-item active">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        </svg>
        <span>Home</span>
    </a>
    <a href="/about" class="nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
        </svg>
        <span>About</span>
    </a>
    <a href="/dao" class="nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span>DAO</span>
    </a>
</nav>

<style>
    /* Update the container style */
    .container {
        min-height: fit-content; /* Increased to allow for scrolling */
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        user-select: none;
        overflow-x: hidden;
    }

    /* Update header-container style */
    .header-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 10vh;
    }

    .title {
        position: relative;
        z-index: 100;
        font-size: 6rem; /* Reduced from 10rem */
        font-weight: 800;
        margin-bottom: 0.5rem;
        background: linear-gradient(50deg, var(--color-theme-1), var(--color-theme-2)); /* Bitcoin Orange gradient */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 10px 15px rgba(247, 147, 26, 0.3)); /* Bitcoin Orange shadow */
        text-shadow: 2px 2px 4px rgba(247, 147, 26, 0.2),
            -2px -2px 4px rgba(232, 135, 26, 0.2); /* Bitcoin Orange text shadow */
        will-change: transform;
        transform: translateZ(0);
        text-align: left; /* Ensure left alignment */
    }

    .subtitle {
        position: relative;
        z-index: 100;
        font-size: 2rem; /* Reduced from 3rem */
        color: rgba(255, 255, 255, 0.7); /* Lighter text color */
        will-change: transform;
        transform: translateZ(0);
        text-align: left; /* Ensure left alignment */
        max-width: 600px; /* Limit the width */
    }

	.cards-container {
		display: flex;
		flex-direction: column;
		gap: 25vh; /* large gap so each card fills the viewport */
		align-items: center;
		width: 100%;
        margin-top: 1vh;
        margin-bottom: 40vh;
	}

	.card {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 15px;
		padding: 3rem;
		transition: box-shadow 0.1s ease;
		backdrop-filter: blur(10px);
		max-width: 60vw;
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
        will-change: transform;
        transform: translateZ(0);
	}

	.card:hover {
		/* The hover scale is now handled by GSAP */
		box-shadow: 0 0 25px rgba(0, 255, 136, 0.2);
	}

	.card h2 {
		font-size: 2.8rem;
		margin-bottom: 1.5rem;
	}

	.card p {
        font-size: 1.5rem;
		color: #8b8b8b;
		line-height: 1.6;
	}

	#who h2 {
		background: linear-gradient(45deg, #00ff85, #00ff00);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 700;
		text-shadow: 0 0 1px rgba(0, 255, 136, 0.1);
	}

	#what h2 {
		background: linear-gradient(45deg, #16d2d2, #00ffff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 700;
		text-shadow: 0 0 1px rgba(0, 255, 136, 0.1);
	}

	#how h2 {
		background: linear-gradient(45deg, #1ed4e8, #1f85c9);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

    .action-buttons {
        display: flex;
        justify-content: center;
        gap: 15rem;
        align-items: center;
        height: 20vh;
        margin-bottom: 10vh;
        width: 100vw;
    }

    .card-section {
        margin-top: 0;
        display: flex;
        gap: 10rem;
        height: 30vh;
        width: 80vw;
        margin-bottom: 20vh;
    }

    .bottom-nav {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50px;
        padding: 12px 24px;
        display: flex;
        gap: 32px;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        color: #888;
        text-decoration: none;
        transition: all 0.3s ease;
        padding: 8px 16px;
        border-radius: 50px;
    }

    .nav-item:hover, .nav-item.active {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
    }

    .nav-item span {
        font-size: 12px;
        font-weight: 500;
    }

    .nav-item svg {
        width: 20px;
        height: 20px;
    }

    @media (max-width: 768px) {
        .bottom-nav {
            bottom: 10px;
            padding: 8px 16px;
            gap: 16px;
        }

        .nav-item {
            padding: 6px 12px;
        }

        .nav-item svg {
            width: 18px;
            height: 18px;
        }

        .nav-item span {
            font-size: 10px;
        }
    }
</style>
