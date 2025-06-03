<script>
	import FirstLayer from './frontEnd/firstLayer.svelte';
	import About from './frontEnd/about.svelte';
	import Location from './frontEnd/location.svelte';
	import Logo from './frontEnd/logo.svelte';
	import FourtLayer from './frontEnd/fourtLayer.svelte';
	import Menu from './frontEnd/menu.svelte';
	import SixthLayer from './frontEnd/sixthLayer.svelte';
	import SeventLayer from './frontEnd/seventLayer.svelte';
	import Service from './frontEnd/service.svelte';
	import Reservation from './frontEnd/reservation.svelte';
	import Blogs from './frontEnd/blogs.svelte';
	import Footer from './frontEnd/footer.svelte';
	import Group1 from '$lib/image/Group-1.png';
</script>

<div class="flex min-h-screen flex-col gap-32 p-4 overflow-hidden">
	<FirstLayer />

	<About />

	<Location />

	<Logo />

	<FourtLayer />

	<Menu />

	<SixthLayer />

	<SeventLayer />

	<Service />

	<Reservation />

	<Blogs />

	<Footer />
</div>
