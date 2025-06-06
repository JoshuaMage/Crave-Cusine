<script>
	import Bartender from '$lib/image/bartender.png';
	import CoffeandCake from '$lib/image/coffe-cake.png';
</script>

<div class="section-wrapper">
	<div class="h-full w-full justify-center lg:grid lg:grid-cols-2 2xl:h-[1264px] 2xl:w-[1296px]">
		<div class="flex flex-col items-center md:relative">
			<img
				src={Bartender}
				alt="bartender"
				class="max-md:rounded-2xl md:z-10 md:h-[932px] md:w-[628px]"
			/>
			<div class="mt-10 lg:w-96 2xl:w-[450px]">
				<p class="font-semibold max-xl:text-center md:tracking-widest">
					Indulge in the comforting warmth and invigorating aroma that only a perfect cup of coffee
					can bring. At Bouffe, we believe in making every morning brighter and
				</p>
			</div>
		</div>
		<div class="m-10 flex flex-col gap-6">
			<h6 class="text-primary max-xl:text-center">INCREMENTS</h6>
			<p class="text-3xl font-bold tracking-wider">
				It's always a good idea to drink coffee in the mornings and at night, too. It makes mornings
				better and nights longer.
			</p>
			<p class="text-xl font-semibold tracking-wide max-md:text-center">
				How to Process a Special Cup of Coffee
			</p>

			<div class="2xl:m-10 flex gap-10 2xl:gap-20 max-xl:justify-center">
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

			<div class="relative h-full w-full lg:h-[557px] lg:w-[760px]">
				<img
					src={CoffeandCake}
					alt="Coffee and Cake"
					class="top-20 right-20 z-0 w-full max-md:rounded-2xl lg:absolute"
				/>
			</div>
		</div>
	</div>
</div>
