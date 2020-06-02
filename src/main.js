import App from './App.svelte'

const app = new App({
	target: document.body,
	props: {
		name: 'hot module reloading'
	}
});

window.app = app;

export default app;
