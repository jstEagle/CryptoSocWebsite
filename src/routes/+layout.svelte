<script lang="ts">
	import '../app.css';
	import CryptoFloatingCards from '$lib/Components/CryptoFloatingCards.svelte';

	let { children } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>
</div>

<style>
	main {
		overflow: hidden;
	}
</style>
