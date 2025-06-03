<script>
	import Team1 from '$lib/image/team1.png';
	import Team2 from '$lib/image/team2.png';
    
	const chefs = [
		{ image: Team1, alt: 'chefs1', name: 'Wilson Rastan', position: 'Master Chefs' },
		{ image: Team2, alt: 'chefs2', name: 'Annie Pork', position: 'Master Chefs' }
	];
</script>

<div class="section-wrapper">
	<div class="flex md:h-[920px] md:w-[1296px] w-full flex-col justify-center">
		<div class="flex flex-col items-center py-4 text-center">
			<h4 class="text-primary text-lg font-bold">OUR BEST CHEF'S</h4>
			<p class="text-5xl font-bold tracking-wider">
				Meet Our Exclusive <br />
				Kitchen Teams
			</p>
			<hr class="mt-10 w-96" />
		</div>

		<div class="flex max-md:flex-col gap-4">
			{#each chefs as { image, alt, name, position }}
				<div class="flex flex-col">
					<div class="relative h-[547px] md:w-[636px] overflow-hidden rounded-md max-md:rounded-2xl">
						<img src={image} {alt} class="h-full w-full object-cover" />
						<div class="absolute inset-0 bg-black/40"></div>

						<div
							class="absolute inset-0 top-10/12 flex flex-col items-center justify-center text-center text-white"
						>
							<p class="text-5xl font-bold">{name}</p>
							<p class="text-gray-200">{position}</p>
						</div>
					</div>
					<hr class="border-primary w-[636px] border-t-2" />
				</div>
			{/each}
		</div>
		<div class="mt-5 flex items-center justify-center gap-4">
			<button
				class="flex size-2 items-center justify-center rounded-full bg-gray-600 text-white"
				aria-label="Next"
			></button>
			<button
				class="bg-primary flex size-3 items-center justify-center rounded-full text-white"
				aria-label="center"
			></button>
			<button
				class="flex size-2 items-center justify-center rounded-full bg-gray-600 text-white"
				aria-label="Previous"
			></button>
		</div>
	</div>
</div>
