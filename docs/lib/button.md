# Button

[Home](../)

UI button component

## Usage

```svelte
<script>
	import Button from '$lib/button.svelte';
	import { mdiLightningBolt } from '@mdi/js';
</script>

<Button>Button</Button>
<Button flat>Flat</Button>
<Button tile flat>Tile</Button>
<Button iconBefore={mdiLightningBolt}>Icon Before</Button>
<Button iconAfter={mdiLightningBolt}>Icon After</Button>
<Button icon iconBefore={mdiLightningBolt} />
<Button color="primary">Primary</Button>
<Button color="secondary">Secoondary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="error">Error</Button>
```

## Props

| **Prop**   | **Type** | **Description**       | **Required** |
| ---------- | -------- | --------------------- | ------------ |
| iconBefore | string   | @mdi/js path          | -            |
| iconAfter  | string   | @mdi/js path          | -            |
| icon       | boolean  | Icon styling          | -            |
| flat       | boolean  | Removes Box-shadow    | -            |
| tile       | boolean  | Removes border-radius | -            |
| color      | string   | color of button       | -            |

## Slots

| **Slot** | **Description**                             |
| -------- | ------------------------------------------- |
| default  | Button content                              |
| before   | customized styling before `default` content |
| after    | customized styling after `default` content  |

## Events

| **Event**  | **Description**           |
| ---------- | ------------------------- |
| click      | button `click` event      |
| blur       | button `blur` event       |
| focus      | button `focus` event      |
| mouseenter | button `mouseenter` event |
| mouseleave | button `mouseleave` event |
