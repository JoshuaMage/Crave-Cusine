<script>
	import Hand from '$lib/image/hand.png';
	import logo from '$lib/image/logo.png';
	import Coffee from '$lib/image/coffee.png';
	import Vector from '$lib/image/Vector.png';
</script>

<div class="section-wrapper">
	<div class="relative flex max-h-[1056px] w-full max-w-[1638px] gap-4">
		<div>
			<img src={Hand} alt="hand" class="h-[843px] w-[657px]" />
		</div>
		<div class="absolute top-1/2 left-1/2 flex h-[340px] w-[560px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center bg-black p-10 text-start">
			<p class="mb-4 text-5xl">Celebration of Flavors <br /> from around the World Crafted</p>
			<button class="bg-primary w-60 p-3">
				VIEW OUR MENU <span class="font-bold">&#8594;</span>
			</button>
		</div>
		<div class="flex flex-col relative">
			<h1 class="font-cormorant py-6 text-[90px] leading-none font-bold">
				RESERVE YOUR <br /> TABLE TODAY
			</h1>
			<img src={logo} alt="logo" class="absolute top-1/2 left-60 z-10 size-[150px]" />
			<img src={Vector} alt="vector" class="absolute top-[58%] right-1/6 z-0" />
			<img src={Coffee} alt="coffee" class="absolute left-70 bottom-1 h-[363px] w-[550px]" />
		</div>
	</div>
</div>