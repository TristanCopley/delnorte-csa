<script lang="ts">
	import '../app.css';
	import NavigationBar from '$components/navbar/NavigationBar.svelte';
	import Loading from '$components/Loading.svelte';
	import { authenticated } from '$firebase';
	import { fly } from 'svelte/transition';
	import Dashboard from './Dashboard.svelte';
	import AuthForm from '$/lib/components/AuthForm.svelte';
	import VerifyPopup from '$/lib/components/VerifyPopup.svelte';
	import { fade } from 'svelte/transition';

	import prismLight from '$lib/prism/prism-light.txt?raw';
	import prismDark from '$lib/prism/prism-dark.txt?raw';
	import { codeTheme } from '$stores/theme';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let unsubscribe: () => void;

	onMount(async () => {
		const prismCSS = document.createElement('style');
		prismCSS.id = 'prism-css';
		prismCSS.textContent = prismDark;
		document.head.appendChild(prismCSS);

		unsubscribe = codeTheme.subscribe((value) => {
			const prismCSS = document.getElementById('prism-css');
			if (prismCSS) prismCSS.textContent = value === 'dark' ? prismLight : prismDark;
		});
	});

	onDestroy(() => {
		if (browser) {
			const prismCSS = document.getElementById('prism-css');
			if (prismCSS) prismCSS.remove();
		}

		if (typeof unsubscribe === 'function') unsubscribe();
	});

	let _authenticated = false;
	let _loading = true;

	authenticated.subscribe((state) => {
		_authenticated = state || false;
	});

	setTimeout(() => {
		_loading = false;
	}, 500); // ms
</script>

<div class="transition-container w-full h-full">
	{#if _loading}
		<Loading />
	{:else}
		<div
			in:fly={{
				x: 0,
				y: -100,
				duration: 1000,
				delay: 100
			}}
		>
			<NavigationBar />
		</div>
		{#if _authenticated}
			<Dashboard>
				<slot />
			</Dashboard>
		{:else}
			<div class="bg-base-100 w-full h-screen flex justify-center">
				<AuthForm />
			</div>
		{/if}
	{/if}

	{#if _authenticated}
		<VerifyPopup />
	{/if}
</div>
