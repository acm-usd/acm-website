<script lang="ts">
	import Icon from './icon.svelte';

	/**
	 * Icon before path
	 */
	export let iconBefore: string = undefined;

	/**
	 * Icon after path
	 */
	export let iconAfter: string = undefined;

	/**
	 * Icon styling
	 */
	export let icon = false;

	/**
	 * Flat styling
	 */
	export let flat = false;

	/**
	 * Tile styling
	 */
	export let tile = false;

	/**
	 * Color styling
	 */
	export let color: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' = undefined;

	$: classes = ['btn', color, $$props.class].filter((v) => !!v).join(' ');
</script>

<button
	on:click
	on:blur
	on:focus
	on:mouseenter
	on:mouseleave
	class={classes}
	class:flat
	class:tile
	class:icon
>
	{#if iconBefore}
		<div class="icon before">
			<Icon icon={iconBefore} />
		</div>
	{/if}
	{#if $$slots.before}
		<slot name="before" />
	{/if}
	{#if $$slots.default}
		<span>
			<slot />
		</span>
	{/if}
	{#if $$slots.after}
		<slot name="after" />
	{/if}
	{#if iconAfter}
		<div class="icon after">
			<Icon icon={iconAfter} />
		</div>
	{/if}
</button>

<style lang="postcss">
	.btn {
		@apply px-5 py-2.5;
		@apply font-medium rounded-lg text-sm;
		@apply bg-gray-100 text-gray-500 transition-all;
		@apply hover:bg-gray-200 hover:text-gray-600;
		@apply shadow-md;
		@apply hover:shadow-lg;
		@apply mx-2;
		@apply flex flex-nowrap justify-center items-center;

		&.flat {
			@apply shadow-none hover:shadow-none;
		}

		&.tile {
			@apply rounded-none;
		}

		&.icon {
			@apply rounded-full bg-transparent;
			@apply hover:bg-gray-200;
			@apply shadow-none;
			@apply px-2.5 py-2.5;
		}

		&.primary {
			@apply bg-primary-100 hover:bg-primary-200;

			&.icon {
				@apply bg-transparent hover:bg-primary-200;
			}
		}

		&.secondary {
			@apply bg-secondary-100 hover:bg-secondary-200;

			&.icon {
				@apply bg-transparent hover:bg-secondary-200;
			}
		}

		&.success {
			@apply bg-success-100 hover:bg-success-200;
			@apply text-success-800 hover:text-success-900;

			&.icon {
				@apply bg-transparent hover:bg-success-200;
			}
		}

		&.error {
			@apply bg-error-100 hover:bg-error-200;
			@apply text-error-800 hover:text-error-900;

			&.icon {
				@apply bg-transparent hover:bg-error-200;
			}
		}

		&.warning {
			@apply bg-warning-100 hover:bg-warning-200;
			@apply text-warning-800 hover:text-warning-900;

			&.icon {
				@apply bg-transparent hover:bg-warning-200;
			}
		}

		&.info {
			@apply bg-info-100 hover:bg-info-200;
			@apply text-info-800 hover:text-info-900;

			&.icon {
				@apply bg-transparent hover:bg-info-200;
			}
		}

		& .icon {
			@apply w-4;
			&.before {
				@apply mr-1;
			}
			&.after {
				@apply ml-1;
			}
			&.icon:only-child {
				@apply m-0;
			}
		}
	}
</style>
