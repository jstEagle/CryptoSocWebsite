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
    <div class="hero-section">
        <div class="header-container">
            <h1 class="title">CryptoSOC</h1>
            <div class="subtitle">The future of finance and ownership</div>
        </div>
        <div class="hero-graphic">
            <div class="coin">
                <div class="side heads">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 4091.27 4091.73">
                        <g id="Layer_x0020_1">
                            <g id="_1421344023328">
                                <path fill="#F7931A" fill-rule="nonzero" d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"></path>
                                <path fill="white" fill-rule="nonzero" d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="side tails">
                    <svg xmlns="http://www.w3.org/2000/svg" class="svg_back" xml:space="preserve" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 4091.27 4091.73">
                        <g id="Layer_x0020_1">
                            <g id="_1421344023328">
                                <path fill="#F7931A" fill-rule="nonzero" d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"></path>
                                <path fill="white" fill-rule="nonzero" d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
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

<style>
    .container {
        min-height: fit-content;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        user-select: none;
        overflow-x: hidden;
    }

    .hero-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1400px;
        margin-bottom: 10vh;
        min-height: 90vh; /* Increased from 80vh */
        padding: 0 4rem; /* Increased padding */
    }

    .header-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        max-width: 600px;
    }

    .hero-graphic {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 800px; /* Increased from 600px */
        height: 800px; /* Increased from 600px */
        position: relative;
    }

    .coin {
        font-size: 300px; /* Increased from 200px */
        width: 0.1em;
        height: 1em;
        background: linear-gradient(#faa504, #141001);
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: rotate_4001510 7s infinite linear;
        transform-style: preserve-3d;
    }

    .coin .side,
    .coin:before,
    .coin:after {
        content: "";
        position: absolute;
        width: 1em;
        height: 1em;
        overflow: hidden;
        border-radius: 50%;
        right: -0.4em;
        text-align: center;
        line-height: 1;
        transform: rotateY(-90deg);
        -moz-backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .coin .tails,
    .coin:after {
        left: -0.4em;
        transform: rotateY(90deg);
    }

    .coin:before,
    .coin:after {
        background: linear-gradient(#faa504, #141001);
        backface-visibility: hidden;
        transform: rotateY(90deg);
    }

    .coin:after {
        transform: rotateY(-90deg);
    }

    @keyframes rotate_4001510 {
        100% {
            transform: translate(-50%, -50%) rotateY(360deg);
        }
    }

    .svg_back {
        transform: scaleX(-1);
    }

    /* Add responsive styles for the coin */
    @media (max-width: 768px) {
        .coin {
            font-size: 200px; /* Adjusted for mobile */
        }
        
        .hero-graphic {
            height: 500px;
        }
    }

    .hero-graphic img {
        width: 100%;
        height: auto;
        max-width: 500px;
    }

    .title {
        font-size: 7rem;
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
