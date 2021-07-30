# Navbar

[Home](../)

Global UI component for navigation. Simplistic navigation with slight animation.

![](https://user-images.githubusercontent.com/50666443/127571778-6e80b8db-0218-463d-af13-e7c7e8715e9b.gif)

## Adding routes

Adding routes is only a matter of updating the `routes` variable with another route.

```ts
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
```

The object must follow this structure:

```ts
interface Route {
	name: string;
	to: string;
	element: HTMLAnchorElement | null;
}
```

| **Property** | **Description**                                              |
| ------------ | ------------------------------------------------------------ |
| name         | Name displayed on the navbar                                 |
| to           | Route to navigate to                                         |
| element      | Bound element to DOM. Should always be initialized as `null` |
