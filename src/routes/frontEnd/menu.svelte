<script>
	import Menu from '$lib/image/menu.png';
	import Menu1 from '$lib/image/menu1.png';
	import Menu2 from '$lib/image/menu3.png';
	import Menu3 from '$lib/image/menu4.png';
	import Menu4 from '$lib/image/menu5.png';
	import Menu5 from '$lib/image/menu6.png';

	const menu = [
		{
			image: Menu2,
			alt: 'Hamburger',
			title: 'Hamburger',
			price: '$29',
			detail: 'Roasted Langoustine Consommé'
		},
		{
			image: Menu3,
			alt: 'Pizza',
			title: 'Pizza',
			price: '$49',
			detail: 'Roasted Langoustine Consommé'
		},
		{
			image: Menu4,
			alt: 'Baked Chicken Wings',
			title: 'Baked Chicken Wings',
			price: '$59',
			detail: 'Roasted Langoustine Consommé'
		},
		{
			image: Menu5,
			alt: 'Sandwich',
			title: 'Sandwich',
			price: '$69',
			detail: 'Roasted Langoustine Consommé'
		}
	];
</script>

<div class="section-wrapper">
	<div class="flex h-[700px] w-[1296px] flex-col items-center justify-center">
		<div class="mb-10 text-center">
			<h6 class="text-primary text-bold mb-4 text-lg">TASTY MENU</h6>
			<p class="text-4xl font-bold tracking-widest">EXPLORE THE YUMMY <br /> MENU</p>
		</div>
		<div class="flex gap-10">
			<img src={Menu} alt="menu" class="w-72" />
			<div class="flex w-[636px] flex-col justify-between">
				{#each menu as { image, alt, title, price, detail }}
					<div class="flex w-full gap-4">
						<img src={image} alt={alt} class="h-17 w-19" />
						<div class="w-full">
							<div class="flex items-center justify-between">
								<h6 class="text-lg font-semibold">{title}</h6>
								<p class="text-xl font-bold">{price}</p>
							</div>
							<hr class="my-1 w-full border border-white" />
							<p class="text-sm text-gray-300">{detail}</p>
						</div>
					</div>
				{/each}
			</div>
			<img src={Menu1} alt="menu1" class="w-72" />
		</div>
		<button class="bg-primary mt-5 p-3 text-lg">
			ABOUT MORE <span class="font-bold">&#8594;</span>
		</button>
	</div>
</div>