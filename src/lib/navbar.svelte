<script lang="ts">
	import { getStores } from '$app/stores';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	const { page } = getStores();

	interface Route {
		name: string;
		to: string;
		element: HTMLAnchorElement | null;
	}

	const routes: Route[] = [
		{
			name: 'Home',
			to: '/',
			element: null
		},
		{
			name: 'Test',
			to: '/test',
			element: null
		},
		{
			name: 'Events',
			to: '/events',
			element: null
		}
	];

	let offset = tweened(undefined, { duration: 200, easing: cubicOut });

	$: selectorStyle = $offset ? `left: ${$offset}px;` : '';
	$: active = routes.find((r) => r.to === $page.path);
	$: {
		if (active && active.element) {
			offset.set(active.element.offsetLeft);
		}
	}

	let mounted = false;

	onMount(() => {
		offset.set(active.element.offsetLeft);
		mounted = true;
	});
</script>

<svelte:window
	on:resize={() => {
		if (active && active.element) offset.set(active.element.offsetLeft);
	}}
/>

<nav class="my-3 py-1 flex justify-center relative">
	{#each routes as route}
		<a href={route.to} class="nav-link" class:active={route === active} bind:this={route.element}
			>{route.name}</a
		>
	{/each}
	<div class="selector" style={selectorStyle} />
</nav>

<style lang="postcss">
	.nav-link {
		@apply mx-2 w-20;
		@apply font-display font-semibold text-lg text-center;
		@apply transition-colors hover:text-gray-600;

		&.active {
			@apply text-gray-600;
		}
	}

	.selector {
		@apply absolute bottom-0;
		@apply w-20 h-0.5 rounded;
		@apply bg-gray-600;
	}
</style>
