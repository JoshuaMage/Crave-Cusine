<script>
	import Hand from '$lib/image/hand.png';
	import logo from '$lib/image/logo.png';
	import Coffee from '$lib/image/coffee.png';
	import Vector from '$lib/image/Vector.png';
	import Cheif from '$lib/image/Cheif.png';
	import Plate from '$lib/image/Plate.png';
	import Plate2 from '$lib/image/plate2.png';
	import Group from '$lib/image/Group.png';
	import Group1 from '$lib/image/Group-1.png';
	import Phone from '$lib/image/phone.png';
	import Table3 from '$lib/image/table3.png';
	import logo1 from '$lib/image/logo1.png';
	import logo2 from '$lib/image/logo2.png';
	import logo3 from '$lib/image/logo3.png';
	import logo4 from '$lib/image/logo4.png';
	import logo5 from '$lib/image/logo5.png';
	import Certified from '$lib/image/certified.png';
	import SafetyFood from '$lib/image/foodSafety.png';
	import BurgerFries from '$lib/image/burgFires.png';
	import Menu from '$lib/image/menu.png';
	import Menu1 from '$lib/image/menu1.png';
	import Menu2 from '$lib/image/menu3.png';
	import Menu3 from '$lib/image/menu4.png';
	import Menu4 from '$lib/image/menu5.png';
	import Menu5 from '$lib/image/menu6.png';
	import Team1 from '$lib/image/team1.png';
	import Team2 from '$lib/image/team2.png';
	import SVG from './frontEnd/svg.svelte';
	import Star from '$lib/image/star.png';
	import Plate3 from '$lib/image/plate3.png';
	import Bartender from '$lib/image/bartender.png';
	import CoffeandCake from '$lib/image/coffe-cake.png';
	import PlateBackground from '$lib/image/background-plate.png';
	import User from '$lib/image/user.png';
	import Customer from '$lib/image/customer.png';
	import Customer1 from '$lib/image/customer1.png';
	import Customer2 from '$lib/image/customer2.png';
	import Svg from './frontEnd/svg.svelte';

	const imagelogo = [
		{ image: logo1, alt: 'logo1' },
		{ image: logo2, alt: 'logo2' },
		{ image: logo3, alt: 'logo3' },
		{ image: logo4, alt: 'logo4' },
		{ image: logo5, alt: 'logo5' }
	];

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

	const menu = [
		{
			image: Menu2,
			alt: 'menu2',
			title: 'Hamburger',
			price: '$29',
			detail: 'Roasted Langoustine Consomrne'
		},
		{
			image: Menu3,
			alt: 'menu3',
			title: 'Pizza',
			price: '$49',
			detail: 'Roasted Langoustine Consomrne'
		},
		{
			image: Menu4,
			alt: 'menu4',
			title: 'Backed Chicken Wings',
			price: '$59',
			detail: 'Roasted Langoustine Consomrne'
		},
		{
			image: Menu5,
			alt: 'menu5',
			title: 'Sandwhich',
			price: '629',
			detail: 'Roasted Langoustine Consomrne'
		}
	];

	const chefs = [
		{ image: Team1, alt: 'chefs1', name: 'Wilson Rastan', position: 'Master Chefs' },
		{ image: Team2, alt: 'chefs2', name: 'Annie Pork', position: 'Master Chefs' }
	];

	const star = [
		{ image: Star, alt: 'star' },
		{ image: Star, alt: 'star' },
		{ image: Star, alt: 'star' },
		{ image: Star, alt: 'star' },
		{ image: Star, alt: 'star' }
	];

	const Footer = [
		{
			title: 'Foody',
			content: [
				'Our meni is celebration of flavors from aournd the world, crafted with care and creativity by our talented'
			],
			custom: true // we will render <Svg /> only here
		},
		{
			title: 'Quik Links',
			list: ['Home', 'Our Menu', 'Reservation', 'About us', 'Chefs Details']
		},
		{
			title: 'Food Menu',
			list: ['Fast-food', 'Italian Food', 'Thai food', 'Bengali food', "Chef's food"]
		},
		{
			title: 'Contact Us',
			list: ['Mariveles Bataan Philippines', '123 (456) 789', 'jdelrosario2121@gmail.com']
		}
	];
</script>

<div class="flex min-h-screen flex-col gap-32 py-4">
	<div class="section-wrapper">
		<div class="relative flex max-h-[1056px] w-full max-w-[1638px] gap-4">
			<div>
				<img src={Hand} alt="hand" class="h-[843px] w-[657px]" />
			</div>
			<div
				class="absolute top-1/2 left-1/2 flex h-[340px] w-[560px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center bg-black p-10 text-start"
			>
				<p class="mb-4 text-5xl">Celebration of Flavors <br /> from around the World Crafted</p>
				<button class="bg-primary w-60 p-3"
					>VIEW OUR MENU <span class="font-bold">&#8594;</span></button
				>
			</div>
			<div class="flex flex-col">
				<h1 class="font-cormorant py-6 text-[90px] leading-none font-bold">
					RESERVE YOUR <br /> TABLE TODAY
				</h1>
				<img src={logo} alt="logo" class="absolute top-1/2 right-1/4 z-1 size-[150px]" />
				<img src={Vector} alt="vector" class="absolute top-[58%] right-1/6 z-0" />
				<img src={Coffee} alt="coffee" class="absolute right-1 bottom-1 h-[363px] w-[482px]" />
			</div>
		</div>
	</div>

	<div class="section-wrapper">
		<div class="flex h-[586px] w-[1296px] justify-center gap-10">
			<div class="grid h-[586px] w-[713px] grid-cols-2 gap-4">
				<section class="grid grid-cols-1 grid-rows-2">
					<div>
						<img src={Cheif} alt="Cheif" class="w-full" />
					</div>
					<div class="flex flex-col gap-8 py-3 text-end">
						<h4 class="text-xl font-bold">OPENING HOURS</h4>
						<p class="font-serif text-xs text-gray-500">Mon-Saturday | 8:00 am to 11:00pm</p>
						<p class="font-serif text-xs text-gray-500">Sunday | 10:00 am to 11:45pm</p>
					</div>
				</section>

				<section>
					<img src={Plate} alt="Plate" class="mb-4" />
					<img src={Plate2} alt="Plate2" />
				</section>
			</div>

			<div class="flex w-[503px] flex-col justify-between">
				<h5 class="text-primary text-xl font-bold">ABOUT OUR FOOD</h5>
				<p class="text-3xl font-bold tracking-widest">
					The best Delicous Food <br /> Made From us
				</p>
				<p class="text-sm text-gray-400">
					Our menu is a celebration of flavors from around the world, crafted with care and
					creativity by our talented team of chefs. From savory appetizers to decadent desserts,
					each dish is a masterpiece
				</p>
				<section class="flex">
					<div class="mx-2 rounded-full border border-white p-3">
						<img src={Group} alt="Group" class="size-12" />
					</div>
					<div class="flex flex-col">
						<h6 class=" text-xl font-semibold">Traditional Foods</h6>
						<p class="text-sm text-gray-500">
							our talented team of chefs. From savory appetizers to <br />decadent desserts, each
							dish is a masterpiece
						</p>
					</div>
				</section>
				<section class="flex">
					<div class="bg-primary mx-3 rounded-full border border-white p-3">
						<img src={Group1} alt="Group1" class="size-12" />
					</div>

					<div class="flex flex-col">
						<h6 class=" text-xl font-semibold">Passionate Chefs</h6>
						<p class="text-sm text-gray-500">
							our talented team of chefs. From savory appetizers to decadent desserts, each dish is
							a masterpiece
						</p>
					</div>
				</section>

				<div class="flex">
					<button class="bg-primary mr-6 p-3 text-sm"
						>ABOUT MORE <span class="font-bold">&#8594;</span></button
					>
					<img src={Phone} alt="Phone" class="mr-3 size-10" />
					<section class="flex flex-col text-sm">
						<section>
							<p>000 (123) 456 789</p>
						</section>
						<p>Call for Order</p>
					</section>
				</div>
			</div>
		</div>
	</div>

	<div class="section-wrapper">
		<div class="grid grid-cols-2">
			<section class="flex flex-col pt-40">
				<h6 class="text-primary text-start text-2xl font-semibold">FIND RESTAURANT</h6>
				<p class="text-6xl font-bold">
					Find Your Best Restaurant in <br />
					Your Area
				</p>
				<span class="mt-8 w-6/12"><hr /></span>
				<div class="mt-10 flex flex-col gap-5 text-xl text-gray-400">
					<p>Mariveles Bataan <span>Philippines</span></p>
					<p>service@craveCusine.com</p>
					<p>000 (123) 456 789</p>
				</div>
				<div class="mt-10 flex items-center gap-6">
					<button class="bg-primary p-3 text-lg">
						Contact Us <span class="font-bold">&#8594;</span></button
					>
					<p>or</p>
					<SVG />
				</div>
			</section>
			<section>
				<img src={Table3} alt="table3" class="h-[644px] w-[788px]" />
			</section>
		</div>
	</div>

	<div class="section-wrapper">
		<div class="flex h-[237px] w-[1600px] items-center justify-around gap-10 bg-white p-6">
			{#each imagelogo as { image, alt }}
				<img src={image} {alt} class="h-[120px] w-[140pxx]" />
			{/each}
		</div>
	</div>

	<div class="section-wrapper">
		<div
			class="flex h-[703px] w-[1600px] flex-col items-center justify-center gap-10 bg-neutral-900 p-20"
		>
			<section class="grid grid-cols-2 items-center px-16">
				<div>
					<h6 class="text-primary mb-2 text-sm font-black">OUR POPULAR SERVICES</h6>
					<h5 class="text-5xl font-bold">Best Category Foods Menu</h5>
				</div>
				<div>
					<p class="text-gray-200">
						Our menu is a celebration of flavors from around the world, crafted with care and
						creativity by our talented team of chefs. From desserts, each dish is a masterpiece
					</p>
				</div>
			</section>
			<section class="flex gap-10">
				{#each category as { image, alt, title, detail, goto }}
					<div
						class={`h-[321px] w-[306px]  border-2 p-5 ${
							title === 'Popular Food' ? 'border-red-700 bg-red-700' : 'border-red-700 bg-black'
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

	<div class="section-wrapper">
		<div class="flex h-[700px] w-[1296px] flex-col items-center justify-center">
			<div class="mb-10 text-center">
				<h6 class="text-primary text-bold mb-4 text-lg">TESTY MENU</h6>
				<p class="text-4xl font-bold tracking-widest">EXPLORE THE YUMMY <br /> MENU</p>
			</div>
			<div class="flex gap-10">
				<img src={Menu} alt="menu" class="w-72" />
				<div class="flex w-[636px] flex-col justify-between">
					{#each menu as { image, alt, title, price, detail }}
						<div class="flex w-full gap-4">
							<img src={image} {alt} class="h-17 w-19" />
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
				ABOUT MORE <span class="font-bold">&#8594;</span></button
			>
		</div>
	</div>

	<div class="section-wrapper">
		<div class="flex h-[920px] w-[1296px] flex-col justify-center">
			<div class="flex flex-col items-center py-4 text-center">
				<h4 class="text-primary text-lg font-bold">OUR BEST CHEF'S</h4>
				<p class="text-5xl font-bold tracking-wider">
					Meet Our Exclusive <br />
					Kitchen Teams
				</p>
				<hr class="mt-10 w-96" />
			</div>

			<div class="flex gap-4">
				{#each chefs as { image, alt, name, position }}
					<div class="flex flex-col">
						<div class="relative h-[547px] w-[636px] overflow-hidden rounded-md">
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
						<img src="" alt="" />
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

	<div class="section-wrapper">
		<div class="grid h-[1264px] w-[1296px] grid-cols-2 justify-center">
			<div class="relative flex flex-col items-center">
				<img src={Bartender} alt="bartender" class="z-10 h-[932px] w-[628px]" />
				<div class="mt-10 w-96">
					<p class="font-semibold tracking-widest">
						Indulge in the comforting warmth and invigorating aroma that only a perfect cup of
						coffee can bring. At Bouffe, we believe in making every morning brighter and
					</p>
				</div>
			</div>
			<div>
				<div class="m-10 flex flex-col gap-6">
					<h6 class="text-primary">INCREMENTS</h6>
					<p class="text-3xl font-bold tracking-wider">
						It's always a good idea to drink of coffee in the mornings and at night, too. It makes
						mornings better and nights longer.
					</p>
					<p class="text-xl font-semibold tracking-wide">How to Process Special a Cup of Coffee</p>

					<div class="m-10 flex gap-20">
						<section>
							<ul
								class="border-primary flex flex-col gap-2 border-l-4 pl-4 font-[cursive] text-sm font-thin tracking-widest"
							>
								<li>Select Your Coffee Beans</li>
								<li>Grind Your Coffee Beans</li>
								<li>Brewing Method</li>
								<li>Measure Your Coffee</li>
							</ul>
						</section>
						<section>
							<ul
								class="border-primary flex flex-col gap-2 border-l-4 pl-4 font-[cursive] text-sm font-thin tracking-widest"
							>
								<li>Heat Your Water</li>
								<li>Brew Your Coffee</li>
								<li>Taste and Adjust</li>
								<li>Enjoy Your Coffee</li>
							</ul>
						</section>
					</div>
					<div class="relative h-[557px] w-[760px]">
						<img
							src={CoffeandCake}
							alt="Coffee and Cake"
							class="absolute top-20 right-20 z-0 w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section-wrapper">
		<div
			class="relative h-[606px] w-[1600px] bg-cover bg-center"
			style="background-image: url({PlateBackground});"
		>
			<div class="absolute inset-0 z-0 bg-black/70"></div>
			<div
				class="absolute inset-0 z-10 mt-20 flex flex-col items-center justify-center text-center text-white"
			>
				<div class="flex flex-col gap-4">
					<h6 class="text-primary text-lg font-bold">BOOKING TABLE</h6>
					<p class="mb-1 text-4xl font-bold tracking-wider">Make A Reservations Table</p>
					<p class="max-w-xl text-sm text-gray-200">
						To Make a Reservation At Our Restaurant. Simply Call Our Booking <br />
						Hotline or Use Our Website
					</p>
				</div>
				<div class="mt-4 flex flex-wrap justify-center gap-4">
					<div class="relative h-16 w-[416px]">
						<input
							type="Date"
							class="h-full w-full border border-gray-400 p-4 pr-12 text-lg"
							placeholder="Date"
						/>
					</div>
					<div class="relative h-16 w-[416px]">
						<input
							type="time"
							class="h-full w-full border border-gray-400 p-4 pr-12 text-lg"
							placeholder="Time"
						/>
					</div>
					<div class="relative h-16 w-[416px]">
						<input
							type="text"
							placeholder="Person"
							class="h-full w-full border border-gray-400 p-4 pr-12 text-lg"
						/>
						<img
							src={User}
							alt="User"
							class="pointer-events-none absolute top-1/2 right-10 h-6 w-6 -translate-y-1/2"
						/>
					</div>
				</div>

				<button class="bg-primary mt-4 px-6 py-3"
					>ABOUT MORE <span class="font-bold">&#8594;</span></button
				>
			</div>
		</div>
	</div>

	<div class="section-wrapper">
		<div class="flex flex-col items-center justify-center gap-10">
			<div class="text-center">
				<h6 class="text-primary mb-4 font-bold">LATEST BLOG</h6>
				<p class="text-bold text-4xl font-bold">Read Our Latest & Trending <br /> News Blogs</p>
			</div>
			<div class="grid h-96 w-[1296px] grid-cols-2">
				<div class="flex gap-2">
					<img
						src={PlateBackground}
						alt="PlateBackground"
						class="h-[347px] w-[306px] object-cover"
					/>
					<div class="mx-6 my-3 flex flex-col gap-4">
						<p class="bg-primary w-[40%] p-1 text-center text-white">RECEPIES</p>
						<p class="text-lg tracking-wide">
							THE ART OF FOOD PAIRING TO <br /> PERFECT YOUR PLATE GUID
						</p>
						<p class="text-gray-400">
							Majority have suffered alteration in some form Marketing System
						</p>
						<div class="flex items-center gap-2">
							<img src={Customer2} alt="Customer2" />
							<p class="text-xs">Joshua Del Rosario</p>
						</div>
						<hr class="text-gray-500" />
						<p class="text-gray-400">Jun 10,2025 / RECIPES</p>
					</div>
				</div>

				<div class="flex gap-2">
					<img src={Customer} alt="Customer" class="h-[347px] w-[306px] object-cover" />
					<div class="mx-6 my-3 flex flex-col gap-4">
						<p class="bg-primary w-[40%] p-1 text-center text-white">PASTY</p>
						<p class="text-lg tracking-wider">REVOLUTIONIZING DINING <br /> RISE OF RESTAURANT</p>
						<p class="text-gray-400">
							Majority have suffered alteration in some form Marketing System
						</p>
						<div class="flex items-center gap-2">
							<img src={Customer1} alt="Customer2" />
							<p class="text-xs">Yuhan Ken Del Rosario</p>
						</div>
						<hr class="text-gray-500" />
						<p class="text-gray-400">Jun 10,2025 / RECIPES</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section-wrapper">
		<div class="flex w-[1600px] flex-col justify-center">
			<hr />
			<div class="my-20 flex items-center justify-between">
				<h6 class="text-4xl font-bold tracking-wider">Subscribe for Daily Update</h6>
				<div class="flex h-12 w-[524px]">
					<input type="email" placeholder="Enter Email Address" class="border px-10 py-4" />
					<button class="text-prim1ary bg-primary p-4"> Subscribe Now</button>
				</div>
			</div>

			<div class="mx-auto grid h-[319px] w-[1297px] grid-cols-4 items-center justify-center">
				{#each Footer as section}
					<div class="flex flex-col {section.custom ? 'gap-4' : 'items-center'}">
						<div>
							<h6 class="{section.custom ? 'text-5xl' : 'text-3xl'} font-bold">{section.title}</h6>
						</div>
						<div class="h-64 w-36">
							{#if section.content}
								{#each section.content as paragraph}
									<p class="w-80 text-gray-500">{paragraph}</p>
								{/each}
							{/if}

							{#if section.list}
								<ul class="mt-4 flex flex-col gap-2 text-gray-400">
									{#each section.list as item}
										<li class="text-xl">{item}</li>
									{/each}
								</ul>
							{/if}
							<div class="mt-5">
								{#if section.custom}
									<Svg />
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
			<hr class="mt-20" />
			<div class="flex justify-between m-8">
				<p class="text-xl">copyright @joshua2025 | All Rights Reserved</p>
				<p class="text-lg">Designed by Joshua</p>
			</div>
		</div>
	</div>
</div>
