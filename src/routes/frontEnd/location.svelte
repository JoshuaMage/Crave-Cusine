<script>
	import SVG from './svg.svelte';
	import Table3 from '$lib/image/table3.png';
</script>

<div class="section-wrapper">
	<div class="grid md:grid-cols-2">
		<section class="flex flex-col md:pt-40">
			<h6 class="text-primary text-start text-2xl font-semibold max-md:text-center">FIND RESTAURANT</h6>
			<p class="text-6xl font-bold max-md:text-center">
				Find Your Best Restaurant in <br class="max-md:hidden"/>
				Your Area
			</p>
			<span class="mt-8 md:w-6/12"><hr /></span>
			<div class="text-gray-400 mt-10 flex flex-col gap-5 text-xl">
				<p>Mariveles Bataan <span>Philippines</span></p>
				<p>service@craveCusine.com</p>
				<p>000 (123) 456 789</p>
			</div>
			<div class="mt-10 max-md:mb-2 flex items-center gap-6">
				<button class="bg-primary p-3 text-lg max-md:rounded-2xl">
					Contact Us <span class="font-bold">&#8594;</span></button
				>
				<p>or</p>
				<SVG />
			</div>
		</section>
		<section>
			<img src={Table3} alt="table3" class="md:h-[644px] md:w-[788px] max-md:rounded-2xl" />
		</section>
	</div>
</div>
