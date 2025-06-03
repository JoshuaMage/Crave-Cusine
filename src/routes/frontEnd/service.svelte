<script>
	import Bartender from '$lib/image/bartender.png';
	import CoffeandCake from '$lib/image/coffe-cake.png';
</script>

<div class="section-wrapper">
	<div class="md:grid w-full md:h-[1264px] md:w-[1296px] md:grid-cols-2 justify-center">
		<div class="md:relative flex flex-col items-center">
			<img src={Bartender} alt="bartender" class="md:z-10 md:h-[932px] md:w-[628px]  max-md:rounded-2xl" />
			<div class="mt-10 md:w-96">
				<p class="font-semibold md:tracking-widest max-md:text-center">
					Indulge in the comforting warmth and invigorating aroma that only a perfect cup of coffee
					can bring. At Bouffe, we believe in making every morning brighter and
				</p>
			</div>
		</div>
		<div class="m-10 flex flex-col gap-6">
			<h6 class="text-primary max-md:text-center">INCREMENTS</h6>
			<p class="text-3xl font-bold tracking-wider">
				It's always a good idea to drink coffee in the mornings and at night, too. It makes mornings
				better and nights longer.
			</p>
			<p class="text-xl font-semibold tracking-wide max-md:text-center">How to Process a Special Cup of Coffee</p>

			<div class="m-10 flex max-md:flex-col gap-20">
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
			<div class="relative md:h-[557px] md:w-[760px]">
				<img src={CoffeandCake} alt="Coffee and Cake" class="md:absolute top-20 right-20 z-0 w-full max-md:rounded-2xl" />
			</div>
		</div>
	</div>
</div>
