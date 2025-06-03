<script>
	import Bartender from '$lib/image/bartender.png';
	import CoffeandCake from '$lib/image/coffe-cake.png';
</script>

<div class="section-wrapper">
	<div class="grid h-[1264px] w-[1296px] grid-cols-2 justify-center">
		<div class="relative flex flex-col items-center">
			<img src={Bartender} alt="bartender" class="z-10 h-[932px] w-[628px]" />
			<div class="mt-10 w-96">
				<p class="font-semibold tracking-widest">
					Indulge in the comforting warmth and invigorating aroma that only a perfect cup of coffee
					can bring. At Bouffe, we believe in making every morning brighter and
				</p>
			</div>
		</div>
		<div class="m-10 flex flex-col gap-6">
			<h6 class="text-primary">INCREMENTS</h6>
			<p class="text-3xl font-bold tracking-wider">
				It's always a good idea to drink coffee in the mornings and at night, too. It makes mornings
				better and nights longer.
			</p>
			<p class="text-xl font-semibold tracking-wide">How to Process a Special Cup of Coffee</p>

			<div class="m-10 flex gap-20">
				{#each [['Select Your Coffee Beans', 'Grind Your Coffee Beans', 'Brewing Method', 'Measure Your Coffee'], ['Heat Your Water', 'Brew Your Coffee', 'Taste and Adjust', 'Enjoy Your Coffee']] as steps}
					<section>
						<ul
							class="border-primary flex flex-col gap-2 border-l-4 pl-4 font-[cursive] text-sm font-thin tracking-widest"
						>
							{#each steps as step}
								<li>{step}</li>
							{/each}
						</ul>
					</section>
				{/each}
			</div>
			<div class="relative h-[557px] w-[760px]">
				<img src={CoffeandCake} alt="Coffee and Cake" class="absolute top-20 right-20 z-0 w-full" />
			</div>
		</div>
	</div>
</div>
