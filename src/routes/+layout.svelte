<script>
	import '../app.css';

	let { children } = $props();
</script>

<nav class="mx-10 flex h-20 items-center justify-between">
	<a href="/food" class="text-center font-serif text-3xl">Foody</a>

	<ul class="flex gap-5 text-xl">
		<li><a href="/home">Home</a></li>
		<li><a href="/Page">Page</a></li>
		<li><a href="/Shop">Shop</a></li>
		<li><a href="/Menu">Menu</a></li>
		<li><a href="/About">About us</a></li>
		<li><a href="/Blog">Blog</a></li>
	</ul>

	<a href="/order" class="bg-primary p-3"
		>ORDER NOW <span class="text-2xl font-bold">&#8594;</span></a
	>
</nav>

{@render children()}
