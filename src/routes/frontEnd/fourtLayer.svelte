<script>
    import Group1 from '$lib/image/Group-1.png';
	import Certified from '$lib/image/certified.png';
	import SafetyFood from '$lib/image/foodSafety.png';
	import BurgerFries from '$lib/image/burgFires.png';

	const category = [
		{
			image: Certified,
			alt: 'Certified',
			title: 'Specials Foods',
			detail: 'celebration of flavors from around the world, crafted ',
			goto: 'Learn More'
		},
		{
			image: Group1,
			alt: 'Cheif',
			title: 'Professional chefs',
			detail: 'celebration of flavors from around the world, crafted ',
			goto: 'Learn More'
		},
		{
			image: SafetyFood,
			alt: 'SafetyFood',
			title: 'Quality foods',
			detail: 'celebration of flavors from around the world, crafted ',
			goto: 'Learn More'
		},
		{
			image: BurgerFries,
			alt: 'BurgerFries',
			title: 'Popular Food',
			detail: 'celebration of flavors from around the world, crafted ',
			goto: 'Learn More'
		}
	];
</script>

<div class="section-wrapper">
	<div
		class="flex  md:h-[703px] md:w-[1600px] w-full flex-col items-center justify-center gap-10 bg-neutral-900 p-20"
	>
		<section class="grid md:grid-cols-2 items-center md:px-16 max-md:text-center max-md:gap-6">
			<div>
				<h6 class="text-primary mb-2 text-sm font-black ">OUR POPULAR SERVICES</h6>
				<h5 class="text-5xl font-bold">Best Category Foods Menu</h5>
			</div>
			<div>
				<p class="text-gray-200">
					Our menu is a celebration of flavors from around the world, crafted with care and
					creativity by our talented team of chefs. From desserts, each dish is a masterpiece
				</p>
			</div>
		</section>
		<section class="flex max-md:flex-col gap-10">
			{#each category as { image, alt, title, detail, goto }}
				<div
					class={`h-[321px] w-[306px]  border-2 p-5 ${
						title === 'Popular Food' ? 'border-red-700 bg-red-700 max-md:rounded-2xl' : 'border-red-700 bg-black max-md:rounded-2xl'
					}`}
				>
					<img src={image} {alt} class="size-14" />
					<div class="mt-10 flex flex-col items-start gap-3 text-start">
						<h5 class="text-2xl font-bold">{title}</h5>
						<p class="text-sm text-gray-400">{detail}</p>
						<button>{goto} <span class="font-bold">&#8594;</span></button>
					</div>
				</div>
			{/each}
		</section>
	</div>
</div>
