<script>
	import SVG from './svg.svelte';
	import Table3 from '$lib/image/table3.png';
</script>

<div class="section-wrapper">
	<div class="grid lg:grid-cols-2">
		<section class="flex flex-col 2xl:pt-40 max-xl:mb-4">
			<h6 class="text-primary text-start text-2xl font-semibold max-lg:text-center">FIND RESTAURANT</h6>
			<p class="text-4xl 2xl:text-6xl font-bold max-lg:text-center">
				Find Your Best Restaurant in <br class="max-2xl:hidden"/>
				Your Area
			</p>
			<span class="mt-8 lg:w-6/12"><hr /></span>
			<div class="text-gray-400 mt-10 flex flex-col gap-5 text-xl max-lg:text-center">
				<p>Mariveles Bataan <span>Philippines</span></p>
				<p>service@craveCusine.com</p>
				<p>000 (123) 456 789</p>
			</div>
			<div class="mt-10 max-md:mb-2 flex max-lg:justify-center items-center gap-2 md:gap-6">
				<button class="bg-primary p-3 md:text-lg max-md:rounded-2xl max-md:flex">
					Contact Us <span class="md:font-bold">&#8594;</span></button
				>
				<p>or</p>
				<SVG />
			</div>
		</section>
		<section>
			<img src={Table3} alt="table3" class="md:h-[644px] md:w-[788px] max-xl:rounded-2xl" />
		</section>
	</div>
</div>
