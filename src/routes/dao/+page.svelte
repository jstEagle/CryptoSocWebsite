<script lang="ts">
    import { onMount } from 'svelte';
    import Footer from '$lib/Components/Footer.svelte';
    import { browser } from '$app/environment';
    import { load } from './data';

    let mounted = false;
    let loading = true;
    let daoData: any;

    onMount(async () => {
        if (browser) {
            mounted = true;
            
            try {
                const result = await load();
                daoData = result.dao;
            } catch (error) {
                console.error('Failed to load DAO data:', error);
            } finally {
                loading = false;
            }
        }
    });
</script>

<svelte:head>
    <title>CryptoSOC DAO</title>
    <meta name="description" content="UC CryptoSOC DAO Statistics and Proposals" />
</svelte:head>

{#if mounted || !browser}
    <a href="/" class="back-link">← Back to Home</a>

    <section class="container">
        <div class="header-container">
            <h1 class="title">DAO Dashboard</h1>
            <div class="subtitle">Real-time statistics and proposals</div>
        </div>

        {#if loading}
            <div class="loading-container">
                <div class="loading-spinner"></div>
                <p>Loading DAO data...</p>
            </div>
        {:else}
            <div class="stats-container">
                <div class="stat-card">
                    <h3>Members</h3>
                    <p>{daoData?.activeMemberCount ?? 0}</p>
                </div>
                <div class="stat-card">
                    <h3>Total Shares</h3>
                    <p>{daoData?.totalShares ?? 0}</p>
                </div>
                <div class="stat-card">
                    <h3>Proposals</h3>
                    <p>{daoData?.proposalCount ?? 0}</p>
                </div>
                <div class="stat-card">
                    <h3>Active Proposals</h3>
                    <p>{daoData?.activeProposals ?? 0}</p>
                </div>
            </div>

            <div class="section-header">
                <h2 class="section-title fade-on-scroll">Proposals</h2>
            </div>

            <div class="proposals-container">
                {#if daoData?.proposals?.length}
                    {#each daoData.proposals as proposal}
                        <div class="proposal-card">
                            <h2 class="proposal-title">{proposal.title}</h2>
                            <p class="proposal-description">{proposal.description}</p>
                            <div class="proposal-footer">
                                <span class="proposal-id">ID: {proposal.id}</span>
                                <div class="progress-container">
                                    <div class="progress-bar" 
                                        style:width="{proposal.progress}%"
                                        class:passed={proposal.status === 'Passed'}
                                        class:failed={proposal.status === 'Failed'}>
                                    </div>
                                    <span class="progress-text">
                                        Quorum: {Math.round(proposal.progress)}% 
                                        ({proposal.quorum.current} / {proposal.quorum.required} votes)
                                    </span>
                                </div>
                                <span class="proposal-status">{proposal.status}</span>
                                <span class="proposal-date">Created: {proposal.createdAt}</span>
                            </div>
                        </div>
                    {/each}
                {:else}
                    <div class="no-proposals">
                        <p>No active proposals at the moment.</p>
                    </div>
                {/if}
            </div>
        {/if}

        <Footer />
    </section>
{/if}

<style>
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
        background: linear-gradient(45deg, var(--color-theme-1), var(--color-theme-2));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 2px 4px rgba(247, 147, 26, 0.2));
    }

    .back-link:hover {
        filter: drop-shadow(0 4px 8px rgba(247, 147, 26, 0.3));
        transform: translateY(-2px);
    }

    .back-link:active {
        transform: translateY(0px);
    }
    .container {
        min-height: 100vh;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header-container {
        text-align: center;
        margin-bottom: 4rem;
    }

    .title {
        font-size: 4rem;
        font-weight: 800;
        background: linear-gradient(45deg, var(--color-theme-1), var(--color-theme-2));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 1rem;
    }

    .stat-card p {
        font-size: 2rem;
        background: linear-gradient(45deg, var(--color-theme-1), var(--color-theme-2));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .container {
        min-height: 100vh;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header-container {
        text-align: center;
        margin-bottom: 4rem;
    }

    .subtitle {
        font-size: 1.5rem;
        color: #888888;
    }

    .stats-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        width: 80%;
        margin-bottom: 4rem;
    }

    .stat-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 2rem;
        text-align: center;
        backdrop-filter: blur(10px);
    }

    .stat-card h3 {
        color: #888888;
        margin-bottom: 1rem;
    }

    .section-header {
        text-align: center;
        margin-top: 5vh;
    }

    .section-title {
        font-size: 2.5rem;
        margin-bottom: 4rem;
        color: #888888;
    }

    .scroll-indicator {
        color: #888888;
    }

    .proposals-container {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 4rem;
    }

    .proposal-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 2rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
    }

    .proposal-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 12px rgba(0, 255, 136, 0.1);
    }


    .progress-container {
        margin: 1.5rem 0;
    }

    .progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 0.5rem;
    }

    .no-proposals {
        text-align: center;
        color: #888888;
        padding: 2rem;
    }

    .proposal-card {
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 1rem;
    }

    .proposal-title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .proposal-description {
        margin-bottom: 1rem;
        color: #666;
    }

    .proposal-footer {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .progress-container {
        position: relative;
        height: 20px;
        background: #eee;
        border-radius: 10px;
        overflow: hidden;
    }

    .progress-bar {
        height: 100%;
        background: var(--color-theme-1);
        transition: width 0.3s ease;
    }

    .proposal-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 12px rgba(247, 147, 26, 0.1);
    }

    .progress-bar.failed {
        background: #f44336;
    }

    .progress-text {
        position: absolute;
        width: 100%;
        text-align: center;
        line-height: 20px;
        color: white;
        text-shadow: 0 0 2px rgba(0,0,0,0.5);
    }

    .proposal-status {
        font-weight: bold;
    }

    .loading {
        text-align: center;
        padding: 2rem;
        color: #888888;
        font-size: 1.2rem;
    }

    .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 50vh;
        gap: 1rem;
    }

    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        border-top-color: #02e77c;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    .loading-container p {
        color: #888888;
        font-size: 1.2rem;
    }
</style>