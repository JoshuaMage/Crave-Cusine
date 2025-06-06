<script>
	import logo1 from '$lib/image/logo1.png';
	import logo2 from '$lib/image/logo2.png';
	import logo3 from '$lib/image/logo3.png';
	import logo4 from '$lib/image/logo4.png';
	import logo5 from '$lib/image/logo5.png';

	const imagelogo = [
		{ image: logo1, alt: 'logo1' },
		{ image: logo2, alt: 'logo2' },
		{ image: logo3, alt: 'logo3' },
		{ image: logo4, alt: 'logo4' },
		{ image: logo5, alt: 'logo5' }
	];
</script>

<div class="section-wrapper">
	<div class="flex max-md:rounded-2xl h-30 md:h-[237px] w-full md:w-[1600px] items-center justify-around md:gap-10 bg-white  md:p-6">
		{#each imagelogo as { image, alt }}
			<img src={image} {alt} class="lg:h-[120px] md:w-[140px] w-15" />
		{/each}
	</div>
</div>
