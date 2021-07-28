# Card

[Home](../README.md)

UI component for organizing information

## Usage

```svelte
<Card>
	<div slot="header">Styleless header</div>
	<h1 slot="title">Title</h1>
	<p>Primary content</p>
	<p slot="footer">Footer content</p>
</Card>
```

## Props

| **Prop** | **Type** | **Description**                           | **Required** |
| -------- | -------- | ----------------------------------------- | ------------ |
| grow     | boolean  | Weather or not to scale card when hovered | -            |
| color    | string   | Color of the card                         | -            |
| flat     | boolean  | Removed shadow from card                  | -            |

## Slots

| **Slot** | **Description**  |
| -------- | ---------------- |
| default  | primary content  |
| header   | Styleless header |
| title    | Padded Title     |
| footer   | Padded footer    |
