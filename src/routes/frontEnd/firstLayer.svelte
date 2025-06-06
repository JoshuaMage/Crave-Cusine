<script>
	import Hand from '$lib/image/hand.png';
	import logo from '$lib/image/logo.png';
	import Coffee from '$lib/image/coffee.png';
	import Vector from '$lib/image/Vector.png';
</script>

<div class="section-wrapper">
	<div
		class="relative flex w-full max-w-[1638px] flex-col gap-4 2xl:h-[1056px] 2xl:grid 2xl:grid-cols-2"
	>
		<!-- Left Side -->
		<div class="max-xl:flex max-xl:flex-col">
			<div class="w-full justify-center 2xl:block">
				<img src={Hand} alt="hand" class=" mx-auto rounded-2xl 2xl:h-[843px]" />
			</div>

			<div
				class="flex flex-col max-2xl:items-center justify-center rounded-2xl bg-black 2xl:p-6 max-2xl:text-start 2xl:-translate-x-1/2 2xl:-translate-y-1/2 md:p-10 2xl:h-[340px] 2xl:absolute 2xl:top-1/2 2xl:left-1/2 2xl:w-[560px]"
			>
				<p class="2xl:mb-15 text-2xl max-2xl:text-center 2xl:text-5xl">
					Celebration of Flavors from around the World Crafted
				</p>
				<button class=" bg-primary max-2xl:mt-4  p-3 max-2xl:rounded-2xl w-65 2xl:w-60">
					VIEW OUR MENU <span class="font-bold">&#8594;</span>
				</button>
			</div>
		</div>

		<!-- Right Side -->
		<div class="2xl:relative flex flex-col items-center 2xl:items-start md:text-left max-md:mt-10">
			<h1 class="font-cormorant 2xl:py-6 leading-tight font-bold md:leading-none max-md:text-xl text-3xl 2xl:text-[90px]">
				RESERVE YOUR TABLE TODAY
			</h1>

			<!-- Logo: only visible at 2xl+ -->
			<img
				src={logo}
				alt="logo"
				class="absolute top-1/2 z-10 hidden h-auto 2xl:w-[150px] 2xl:left-60 2xl:block"
			/>

			<!-- Vector: only visible at 2xl+ -->
			<img src={Vector} alt="vector" class="absolute top-[58%] z-0 hidden 2xl:right-70 2xl:block" />

			<!-- Coffee Image -->
			<img
				src={Coffee}
				alt="coffee"
				class="h-auto rounded-2xl 2xl:absolute md:bottom-1 2xl:h-[363px] 2xl:left-[250px] w-[650px] 2xl:w-[550px]"
			/>
		</div>
	</div>
</div>
