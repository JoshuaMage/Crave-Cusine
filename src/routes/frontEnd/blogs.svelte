<script>
	import PlateBackground from '$lib/image/background-plate.png';
	import Customer from '$lib/image/customer.png';
	import Customer1 from '$lib/image/customer1.png';
	import Customer2 from '$lib/image/customer2.png';

	const blogPosts = [
		{
			image: PlateBackground,
			category: 'RECEPIES',
			title: 'THE ART OF FOOD PAIRING TO PERFECT YOUR PLATE GUID',
			description: 'Majority have suffered alteration in some form Marketing System',
			author: 'Joshua Del Rosario',
			date: 'Jun 10, 2025',
			categoryTag: 'RECIPES'
		},
		{
			image: Customer,
			category: 'PASTY',
			title: 'REVOLUTIONIZING DINING RISE OF RESTAURANT',
			description: 'Majority have suffered alteration in some form Marketing System',
			author: 'Yuhan Ken Del Rosario',
			date: 'Jun 10, 2025',
			categoryTag: 'RECIPES'
		}
	];
</script>

<div class="section-wrapper">
	<div class="flex h-full flex-col items-center justify-center gap-10">
		<div class="text-center">
			<h6 class="text-primary mb-4 font-bold">LATEST BLOG</h6>
			<p class="text-bold text-4xl font-bold">Read Our Latest & Trending <br /> News Blogs</p>
		</div>
	
			<div class="grid h-full w-full justify-center md:grid-cols-2 2xl:h-96 2xl:w-[1296px] gap-6">
				{#each blogPosts as { image, category, title, description, author, date, categoryTag }}
					<div class="flex gap-2 max-xl:flex-col max-xl:mx-auto max-xl:items-center">
						<img
							src={image}
							alt={category}
							class="h-[347px] object-cover max-xl:rounded-2xl w-[306px]"
						/>
						<div class="mx-6 my-3 flex flex-col max-xl:items-center gap-4">
							<p class="bg-primary w-[40%] p-1 text-center text-white">{category}</p>
							<p class="text-lg tracking-wide">{title}</p>
							<p class="text-gray-400">{description}</p>
							<div class="flex items-center gap-2 max-md:justify-center">
								<img src={author === 'Joshua Del Rosario' ? Customer2 : Customer1} alt={author} />
								<p class="text-xs">{author}</p>
							</div>
							<hr class="text-gray-500" />
							<p class="text-gray-400 max-md:text-center">{date} / {categoryTag}</p>
						</div>
					</div>
				{/each}
			</div>
		
	</div>
</div>
