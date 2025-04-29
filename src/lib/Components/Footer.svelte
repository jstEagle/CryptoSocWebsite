<script lang="ts">
    import { fade } from 'svelte/transition';
    import { page } from '$app/stores';
</script>

<nav transition:fade class="bottom-nav">
    <a href="/" class="nav-item" class:active={$page.url.pathname === '/'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        </svg>
        <span>Home</span>
    </a>
    <a href="/about" class="nav-item" class:active={$page.url.pathname === '/about'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
        </svg>
        <span>About</span>
    </a>
    <a href="/dao" class="nav-item" class:active={$page.url.pathname === '/dao'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span>DAO</span>
    </a>
</nav>

<style>
    .bottom-nav {
        position: fixed;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(20, 20, 20, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 32px 16px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        
        @media (max-width: 768px) {
            left: 0;
            right: 0;
            bottom: 0;
            top: auto;
            transform: none;
            flex-direction: row;
            justify-content: space-around;
            padding: 16px;
            border-radius: 16px 16px 0 0;
            gap: 16px;
        }
    }

    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        color: #999;
        text-decoration: none;
        transition: all 0.3s ease;
        padding: 12px 20px;
        border-radius: 12px;
    }

    .nav-item:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.05);
    }

    .nav-item.active {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .nav-item span {
        font-size: 14px;
        font-weight: 500;
    }

    .nav-item svg {
        width: 24px;
        height: 24px;
    }

    @media (max-width: 768px) {
        .bottom-nav {
            left: 20px;
            padding: 24px 12px;
            gap: 20px;
        }

        .nav-item {
            padding: 8px 16px;
        }

        .nav-item svg {
            width: 20px;
            height: 20px;
        }

        .nav-item span {
            font-size: 12px;
        }
    }
</style>