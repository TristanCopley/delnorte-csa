<script lang="ts">
	import ThemeDropdown from './ThemeDropdown.svelte';
	import { authenticated, logOut } from '$firebase';
	import { goto } from '$app/navigation';

	import { fade, fly } from 'svelte/transition';

	import LucideSun from '~icons/lucide/sun';
	import LucideMoon from '~icons/lucide/moon';
	import { codeTheme } from '$stores/theme';

	function switchTheme() {
		codeTheme.update((data) => {
			if (data === 'dark') {
				if (document.getElementById('theme-switch-moon')) {
					document.getElementById('theme-switch-moon')?.classList.remove('swap-off');
					document.getElementById('theme-switch-moon')?.classList.add('swap-on');

					if (document.getElementById('theme-switch-sun')) {
						document.getElementById('theme-switch-sun')?.classList.remove('swap-on');
						document.getElementById('theme-switch-sun')?.classList.add('swap-off');
					}
				}

				document.body.classList.remove('dark');
				document.documentElement.style.setProperty('color-scheme', 'light');

				return 'light';
			} else {
				if (document.getElementById('theme-switch-sun')) {
					document.getElementById('theme-switch-sun')?.classList.add('swap-on');
					document.getElementById('theme-switch-sun')?.classList.remove('swap-off');

					if (document.getElementById('theme-switch-moon')) {
						document.getElementById('theme-switch-moon')?.classList.add('swap-off');
						document.getElementById('theme-switch-moon')?.classList.remove('swap-on');
					}
				}

				document.body.classList.add('dark');
				document.documentElement.style.setProperty('color-scheme', 'dark');

				return 'dark';
			}
		});
	}
</script>

<div class="navbar bg-base-100/80 fixed gap-2 z-20 backdrop-blur-sm">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost uppercase">AP Computer Science A</a>
	</div>
	<button
		class="swap swap-rotate swap-active btn btn-ghost p-2 h-full flex relative gap-2 justify-center"
		on:click={switchTheme}
	>
		<div id="theme-switch-sun" class="swap-on text-lg self-center">
			<LucideMoon size={'30'} strokeWidth={'2px'} />
		</div>
		<div id="theme-switch-moon" class="swap-off absolute text-lg left-0 pl-2 self-center">
			<LucideSun size={'30'} strokeWidth={'2px'} />
		</div>
		<button class="uppercase w-[2.2rem] relative flex justify-center">
			{#if $codeTheme === 'light'}
				<span
					class="absolute inline self-center"
					in:fade={{
						duration: 100
					}}
					out:fade={{
						duration: 100
					}}>Light</span
				>
			{:else}
				<span
					class="absolute inline self-center"
					in:fade={{
						duration: 100
					}}
					out:fade={{
						duration: 100
					}}>Dark</span
				>
			{/if}
		</button>
		<svg
			width="12px"
			height="12px"
			class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block self-center"
			xmlns="http://www.w3.org/2000/svg"
			viewbox="0 0 2048 2048"
			><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" /></svg
		>
	</button>
	<div class="flex">
		<ThemeDropdown />
	</div>
	{#if $authenticated}
		<div class="flex">
			<button
				on:click={() => {
					goto('/');
					logOut();
				}}
				class="btn btn-ghost uppercase">Logout</button
			>
		</div>
	{/if}
</div>
