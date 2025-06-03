<script>
	import '../app.css';
	let showMenu = $state(false);
	let { children } = $props();
</script>

<nav class="relative mx-10 flex h-20 items-center justify-between">
	<a href="/food" class="text-center font-serif text-3xl">Foody</a>

	<ul class="hidden gap-5 text-xl md:flex">
		<li><a href="/">Home</a></li>
		<li><a href="/">Page</a></li>
		<li><a href="/">Shop</a></li>
		<li><a href="/">Menu</a></li>
		<li><a href="/">About us</a></li>
		<li><a href="/">Blog</a></li>
	</ul>

	<button
		class="text-3xl focus:outline-none md:hidden"
		onclick={() => (showMenu = !showMenu)}
		aria-label="Toggle Menu"
	>
		☰
	</button>

	<a href="/order" class="bg-primary hidden p-3 md:inline">
		ORDER NOW <span class="text-2xl font-bold">&#8594;</span>
	</a>

	{#if showMenu}
		<ul
			class="absolute top-full right-0 left-0 z-50 mt-2 flex flex-col gap-4 bg-black p-4 px-10 text-xl opacity-90 shadow-md md:hidden"
		>
			<li class="transition-all duration-300 ease-in-out hover:text-2xl">
				<a href="/">Home</a>
			</li>
			<li class="transition-all duration-300 ease-in-out hover:text-2xl">
				<a href="/">Page</a>
			</li>
			<li class="transition-all duration-300 ease-in-out hover:text-2xl">
				<a href="/">Shop</a>
			</li>
			<li class="transition-all duration-300 ease-in-out hover:text-2xl">
				<a href="/">Menu</a>
			</li>
			<li class="transition-all duration-300 ease-in-out hover:text-2xl">
				<a href="/">About us</a>
			</li>
			<li class="transition-all duration-300 ease-in-out hover:text-2xl">
				<a href="/">Blog</a>
			</li>
			<li class="transition-all duration-300 ease-in-out hover:text-2xl">
				<a href="/order">
					ORDER NOW <span>&#8594;</span>
				</a>
			</li>
		</ul>
	{/if}
</nav>

{@render children()}
