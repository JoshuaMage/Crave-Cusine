<script>
	import Star from '$lib/image/star.png';
    import Plate3 from '$lib/image/plate3.png';
    
	const star = [
		{ image: Star, alt: 'star' },
		{ image: Star, alt: 'star' },
		{ image: Star, alt: 'star' },
		{ image: Star, alt: 'star' },
		{ image: Star, alt: 'star' }
	];
</script>

<div class="section-wrapper">
	<div class="bg-primary flex 2xl:h-[1017px] 2xl:w-[1600px] h-full w-full  items-center justify-center p-4">
		<div class="grid 2xl:size-[80%] md:grid-cols-2">
			<section class="relative z-1">
				<div class="max-md:text-center">
					<p class="mb-4 text-lg text-gray-400">TESTIMONIALS</p>
					<p class="mb-5 xl:mb-10 text-4xl xl:text-5xl font-bold">Our Guest Share This <br /> About Our Foods.</p>
				</div>
				<div class=" xl:h-[521px] md:bg-black md:p-15 p-10">
					<div class="md:mb-8 mb-4 flex">
						{#each star as { image, alt }}
							<img src={image} {alt} />
						{/each}
					</div>
					<p class="mb-6 text-2xl text-gray-300">
						“Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a
						restaurant that serves delicious, soon to try more of their culinary delights”
					</p>
					<h5 class="text-4xl font-bold">Joshua Del Rosario</h5>
					<p class="text-lg text-gray-400">Web Developer</p>
				</div>
			</section>

			<section class="md:relative">
				<img src={Plate3} alt="Plate3" class="md:absolute md:right-[10%] z-0 md:h-[657px]" />
			</section>
			<div class="xl:relative md:bottom-8 md:left-full md:m-10 m-4 flex max-md:justify-center">
				<button class="h-12 w-20 bg-white text-3xl font-bold text-black">←</button>
				<button class="h-12 w-20 bg-black text-3xl font-bold">→</button>
			</div>
		</div>
	</div>
</div>
