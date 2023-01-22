<header>
	<h1>spencer.dev</h1>
	<nav>
		<a href="/">Home</a>
		<a href="/projects">Projects</a>
		<a href="/experience">Experience</a>
		<a href="/contact">Contact Me</a>
	</nav>
</header>

<slot />

<style lang="scss">
	// :global(h1) {
	// 	color: red;
	// }
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		a {
			text-decoration: none;
		}
	}
</style>
