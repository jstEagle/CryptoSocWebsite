<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/all';

    import GradientButton from '$lib/Components/GradientButton.svelte';
    import Card from '$lib/Components/Card.svelte';
    import Footer from '$lib/Components/Footer.svelte';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
        gsap.set(".header-container", { scale: 1, y: "0vh"});

        gsap.to(".header-container", {
            scrollTrigger: {
                trigger: ".header-container",
                start: "center center",
                end: "+= 800px",
                pin: true,
                scrub: 2
            },
            scale: 0.6,
            y: "-10vh",
            ease: "power2.inOut"
        });

        // Scroll indicator animations
        gsap.to(".scroll-dot", {
            y: 8,
            repeat: -1,
            duration: 1.5,
            ease: "power2.inOut",
            yoyo: true
        });

        // Fade out scroll indicator on scroll
        gsap.to(".scroll-indicator", {
            scrollTrigger: {
                trigger: ".header-container",
                start: "top top",
                end: "+=200",
                scrub: true
            },
            opacity: 0,
            y: 20
        });

        gsap.from(".card-section", {
            x: -1600,
            duration: 1,
            scrollTrigger: {
                trigger: ".card-section",
                start: "top center+=300",
                end: "top center-=100",
                scrub: 1
            }
        });

        // Individual card animations
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            gsap.from(card, {
                x: index % 2 === 0 ? -400 : 400,
                opacity: 0,
                duration: 0.5,
                scale: 0.5,
                scrollTrigger: {
                    trigger: card,
                    start: 'top center+=200',
                    end: 'top center-=150',
                    scrub: 1,
                    pin: false,
                }
            });
        });

        gsap.from(".action-buttons", {
            y: 50,
            opacity: 0,
            duration: 0.6,
            scale: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".action-buttons",
                start: "top center+=200",
                end: "top center-=200",
                scrub: 1,
                pin: false,
            }
        });
	});
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

    <div class="scroll-indicator">
        <svg width="60" height="100" viewBox="0 0 30 50">
            <rect x="9" y="2" width="12" height="24" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>
            <circle class="scroll-dot" cx="15" cy="10" r="3" fill="currentColor"/>
        </svg>
    </div>

	<div class="cards-container">
		<div class="card" id="who">
			<h2>Who</h2>
			<p>
				Established in 2018 and recognized as New Zealand’s first university DAO in 2024. We are UC's hub for blockchain and decentralized finance enthusiasts.
			</p>
			<p>
				We foster <u>crypto education</u>, <u>community building</u>, and <u>adoption</u> through industry events, sponsorships, and a shared passion for financial sovereignty.
			</p>
		</div>
		<div class="card" id="what">
			<h2>What</h2>
			<p>
				Crypto, or blockchain technology, began with Bitcoin – an open-source, decentralized, proof-of-work network created by the anonymous Satoshi Nakamoto to give people control over their own money.
			</p>
			<p>
				Over the past 20+ years, blockchain has evolved to support money, gaming, data storage, computing, finance, and even real estate, enabling decentralization and tokenization across industries!
			</p>
		</div>
		<div class="card" id="how">
			<h2>How</h2>
			<p>
				If this sparks your interest or if you're already part of the ever-growing crypto revolution, now is the perfect time to get involved! Join the club and connect with like-minded innovators who are shaping the future of decentralized finance.
			</p>
			<p>
				As a member, you'll have the opportunity to participate in our DAO, where you can help shape decisions, vote on key proposals, and truly be part of a community-driven movement.
			</p>
		</div>
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

    <Footer />
</section>

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
        position: relative; /* Change from sticky to relative */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 10vh;
        height: 100vh;
        transform-origin: center center; /* Set transform origin for scaling */
        will-change: transform;
        transform: translateZ(0);
    }

    .scroll-indicator {
        margin-top: -25vh;
        color: #888888;
    }

	.title {
		position: relative;
		z-index: 100;
		font-size: 10rem;
		font-weight: 800;
		margin-bottom: 0.5rem;
		background: linear-gradient(50deg, #02e77c, #00b4d8);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: drop-shadow(0 10px 15px rgba(0, 255, 136, 0.3));
		text-shadow: 2px 2px 4px rgba(0, 255, 136, 0.2),
			-2px -2px 4px rgba(0, 255, 238, 0.2);
        will-change: transform;
        transform: translateZ(0);
	}

	.subtitle {
		position: relative;
		z-index: 100;
		font-size: 3rem;
		color: #888888;
        will-change: transform;
        transform: translateZ(0);
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
</style>
