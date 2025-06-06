<script>
	import Cheif from '$lib/image/Cheif.png';
	import Plate from '$lib/image/Plate.png';
	import Group from '$lib/image/Group.png';
	import Group1 from '$lib/image/Group-1.png';
	import Plate2 from '$lib/image/plate2.png';
	import Phone from '$lib/image/phone.png';

	const openingHours = [
		{ day: 'Mon-Saturday', time: '8:00 am to 11:00pm' },
		{ day: 'Sunday', time: '10:00 am to 11:45pm' }
	];

	const foodSections = [
		{
			image: Group,
			title: 'Traditional Foods',
			description:
				'Our talented team of chefs. From savory appetizers to decadent desserts, each dish is a masterpiece.'
		},
		{
			image: Group1,
			title: 'Passionate Chefs',
			description:
				'Our talented team of chefs. From savory appetizers to decadent desserts, each dish is a masterpiece.'
		}
	];
</script>

<div class="section-wrapper">
	<div class="flex max-2xl:flex-col  w-full h-full 2xl:w-[1296px] justify-center gap-10  2xl:h-[586px] max-md:mx-8">
		<div class="flex 2xl:grid 2xl:grid-cols-2 w-full justify-center gap-4 2xl:h-[586px] 2xl:w-[713px] ">
			<section class="grid 2xl:grid-cols-1 2xl:grid-rows-2">
				<div>
					<img src={Cheif} alt="Cheif" class="w-full max-md:rounded-2xl" />
				</div>
				<div class="flex flex-col gap-8 py-3 text-center md:text-end">
					<h4 class="text-xl font-bold">OPENING HOURS</h4>
					{#each openingHours as { day, time }}
						<p class="font-serif text-xs text-gray-500">{day} | {time}</p>
					{/each}
				</div>
			</section>

			<section class="max-md:flex max-md:flex-col max-md:gap-2">
				<img src={Plate} alt="Plate" class="mb-4 max-md:rounded-2xl" />
				<img src={Plate2} alt="Plate2" class="max-md:rounded-2xl" />
			</section>
		</div>

		<div class="flex flex-col  max-2xl:gap-4  w-full  2xl:justify-between 2xl:w-[503px]">
			<h5 class="text-primary text-xl font-bold max-2xl:text-center ">ABOUT OUR FOOD</h5>
			<p class="text-3xl font-bold md:tracking-widest max-2xl:text-center">
				The best Delicious Food <br class="max-md:hidden"/> Made From us
			</p>
			
			<p class="text-sm text-gray-400 max-2xl:text-center">
				Our menu is a celebration of flavors from around the world, crafted with care and creativity
				by our talented team of chefs. <br class="min-2xl:hidden"> From savory appetizers to decadent desserts, each dish is a
				masterpiece.
			</p>
		
			{#each foodSections as { image, title, description }}
				<section class="flex max-2xl:justify-center max-2xl:items-center">
					<div class="mx-2 rounded-full border border-white p-3">
						<img src={image} alt={title} class="size-12" />
					</div>
					<div class="flex flex-col">
						<h6 class="text-xl font-semibold">{title}</h6>
						<p class="text-sm text-gray-500">{description}</p>
					</div>
				</section>
			{/each}

			<div class="flex max-2xl:justify-center">
				<button class="bg-primary mr-6 p-3 text-sm max-2xl:rounded-2xl">
					ABOUT MORE <span class="font-bold">&#8594;</span>
				</button>
				<img src={Phone} alt="Phone" class="mr-3 size-10 max-lg:hidden" />
				<section class="flex flex-col text-sm max-lg:hidden">
					<section>
						<p>000 (123) 456 789</p>
					</section>
					<p>Call for Order</p>
				</section>
			</div>
		</div>
	</div>
</div>
