<script lang="ts">
	import '../app.css';
	import CryptoFloatingCards from '$lib/Components/CryptoFloatingCards.svelte';

	let { children } = $props();
</script>

<div class="app">
	<main>
		<CryptoFloatingCards />
		{@render children()}
	</main>
</div>

<style>
</style>
