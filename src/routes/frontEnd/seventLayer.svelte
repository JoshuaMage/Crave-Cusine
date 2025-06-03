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
	<div class="bg-primary flex h-[1017px] w-[1600px] items-center justify-center">
		<div class="grid size-[80%] grid-cols-2">
			<section class="relative z-1">
				<div class="">
					<p class="mb-4 text-lg text-gray-400">TESTIMONIALS</p>
					<p class="mb-10 text-5xl font-bold">Our Guest Share This <br /> About Our Foods.</p>
				</div>
				<div class=" h-[521px] bg-black p-15">
					<div class="mb-8 flex">
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

			<section class="relative">
				<img src={Plate3} alt="Plate3" class="absolute right-[10%] z-0 h-[657px]" />
			</section>
			<div class="relative bottom-8 left-full m-10 flex">
				<button class="h-12 w-20 bg-white text-3xl font-bold text-black">←</button>
				<button class="h-12 w-20 bg-black text-3xl font-bold">→</button>
			</div>
		</div>
	</div>
</div>
