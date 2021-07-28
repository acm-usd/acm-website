<script lang="ts">
	export let icon: string;
	export let size: 'sm' | 'md' | 'lg' | 'fill' = 'fill';

	let width: number;
	$: switch (size) {
		case 'sm':
			width = 12;
			break;
		case 'md':
			width = 24;
			break;
		case 'lg':
			width = 36;
			break;
		case 'fill':
			width = undefined;
			break;
	}
</script>

<svg class="fill-current" viewBox="0 0 24 24" {width} height={width}>
	<path d={icon} />
</svg>
