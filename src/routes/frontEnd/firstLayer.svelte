<script>
	import Hand from '$lib/image/hand.png';
	import logo from '$lib/image/logo.png';
	import Coffee from '$lib/image/coffee.png';
	import Vector from '$lib/image/Vector.png';
</script>

<div class="section-wrapper">
	<!-- Responsive flex: column on mobile, row on md+ -->
	<div class="relative flex flex-col md:flex-row w-full max-w-[1638px] max-h-full md:max-h-[1056px] gap-4">
		
		<!-- Left Image -->
		<div class="flex justify-center md:block">
			<img src={Hand} alt="hand" class="w-full md:w-[657px] h-auto md:h-[843px] rounded-2xl" />
		</div>

		<!-- Center Box -->
		<div
			class="relative md:absolute md:top-1/2 md:left-1/2 w-full md:w-[560px] h-auto md:h-[340px] translate-x-0 translate-y-0 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center bg-black p-6 md:p-10 text-start rounded-2xl"
		>
			<p class="mb-4 text-2xl md:text-5xl max-md:text-center">
				Celebration of Flavors <br />
				from around the World Crafted
			</p>
			<button class="bg-primary w-full md:w-60 p-3 max-md:rounded-2xl">
				VIEW OUR MENU <span class="font-bold">&#8594;</span>
			</button>
		</div>

		<!-- Text and Decorative Images -->
		<div class="relative flex flex-col items-center md:items-start text-center md:text-left">
			<h1 class="font-cormorant py-6 text-3xl md:text-[90px] leading-tight md:leading-none font-bold">
				RESERVE YOUR <br class="max-md:hidden"/>
				TABLE TODAY
			</h1>

			<!-- Logo: static on mobile, absolute on md+ -->
			<img
				src={logo}
				alt="logo"
				class="relative md:absolute md:top-1/2 md:left-60 z-10 w-[100px] md:w-[150px] h-auto max-md:hidden"
			/>

			<!-- Vector: hide on mobile -->
			<img
				src={Vector}
				alt="vector"
				class="hidden md:block absolute top-[58%] right-1/6 z-0"
			/>

			<!-- Coffee Image: relative on mobile, absolute on md+ -->
			<img
				src={Coffee}
				alt="coffee"
				class="relative md:absolute md:left-[280px] md:bottom-1 w-full md:w-[550px] h-auto md:h-[363px] rounded-2xl"
			/>
		</div>
	</div>
</div>
