<script lang="ts">
	/**
	 * Grows card on hover
	 */
	export let grow = false;

	export let color:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'warning'
		| 'info'
		| undefined = undefined;

	export let flat = false;

	$: classes = ['card', color, $$props.class].filter((v) => !!v).join(' ');
</script>

<div on:click class={classes} class:grow class:flat>
	{#if $$slots.header}
		<slot name="header" />
	{/if}
	{#if $$slots.title}
		<div class="card-title">
			<slot name="title" />
		</div>
	{/if}
	{#if $$slots.default}
		<div class="card-content">
			<slot />
		</div>
	{/if}
	{#if $$slots.footer}
		<div class="card-footer">
			<slot name="footer" />
		</div>
	{/if}
</div>

<style lang="postcss">
	/*
	 * Card container
	 */
	.card {
		@apply rounded;
		@apply transition-shadow shadow-lg hover:shadow-xl;

		&.flat {
			@apply shadow-none;
			@apply rounded-none;
		}

		/*
		* Base spacing
		*/
		& .card-title,
		& .card-content,
		& .card-footer {
			@apply py-4 px-6;
		}

		/*
		* Title typography
		*/
		& .card-title {
			@apply font-display text-lg font-medium;
		}

		/*
		* Content & footer typography
		*/
		& .card-content,
		& .card-footer {
			@apply font-serif text-base;
		}
	}

	/*
	 * Grow behavior
	 */
	.card.grow {
		@apply transition-transform hover:scale-105;
		@apply cursor-pointer;
	}

	/** COLORS */

	.card.primary {
		@apply bg-primary-100;
		/* keeping text color black for primary */
	}

	.card.secondary {
		@apply bg-secondary-100;
		/* keeping text color black for secondary */
	}

	.card.info {
		@apply bg-info-100;
		& .card-title {
			@apply text-info-900;
		}
	}

	.card.warning {
		@apply bg-warning-100;
		& .card-title {
			@apply text-warning-900;
		}
	}

	.card.error {
		@apply bg-error-100;
		& .card-title {
			@apply text-error-900;
		}
	}

	.card.success {
		@apply bg-success-100;
		& .card-title {
			@apply text-success-900;
		}
	}
</style>
