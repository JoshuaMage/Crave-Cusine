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
	<div class="flex w-[1296px] justify-center gap-10 max-md:flex-col md:h-[586px] max-md:mx-8">
		<div class="grid w-full gap-4 md:h-[586px] md:w-[713px] md:grid-cols-2">
			<section class="grid md:grid-cols-1 md:grid-rows-2">
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

			<section class="max-md:flex max-md:gap-2">
				<img src={Plate} alt="Plate" class="mb-4 max-md:rounded-2xl" />
				<img src={Plate2} alt="Plate2" class="max-md:rounded-2xl" />
			</section>
		</div>

		<div class="flex flex-col  md:justify-between max-md:gap-7 md:w-[503px]">
			<h5 class="text-primary text-xl font-bold max-md:text-center ">ABOUT OUR FOOD</h5>
			<p class="text-3xl font-bold md:tracking-widest max-md:text-center">
				The best Delicious Food <br class="max-md:hidden"/> Made From us
			</p>
			<p class="text-sm text-gray-400 max-md:text-center">
				Our menu is a celebration of flavors from around the world, crafted with care and creativity
				by our talented team of chefs. From savory appetizers to decadent desserts, each dish is a
				masterpiece.
			</p>
			{#each foodSections as { image, title, description }}
				<section class="flex max-md:items-center">
					<div class="mx-2 rounded-full border border-white p-3">
						<img src={image} alt={title} class="size-12" />
					</div>
					<div class="flex flex-col">
						<h6 class="text-xl font-semibold">{title}</h6>
						<p class="text-sm text-gray-500">{description}</p>
					</div>
				</section>
			{/each}

			<div class="flex">
				<button class="bg-primary mr-6 p-3 text-sm max-md:rounded-2xl">
					ABOUT MORE <span class="font-bold">&#8594;</span>
				</button>
				<img src={Phone} alt="Phone" class="mr-3 size-10 max-md:hidden" />
				<section class="flex flex-col text-sm max-md:hidden">
					<section>
						<p>000 (123) 456 789</p>
					</section>
					<p>Call for Order</p>
				</section>
			</div>
		</div>
	</div>
</div>
