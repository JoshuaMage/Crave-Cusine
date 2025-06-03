<script>
	import PlateBackground from '$lib/image/background-plate.png';
	import User from '$lib/image/user.png';
</script>

<div class="section-wrapper">
	<div
		class="relative h-[606px] w-[1600px] bg-cover bg-center"
		style="background-image: url({PlateBackground});"
	>
		<div class="absolute inset-0 z-0 bg-black/70"></div>
		<div class="absolute inset-0 z-10 mt-20 flex flex-col items-center justify-center text-center text-white">
			<div class="flex flex-col gap-4">
				<h6 class="text-primary text-lg font-bold">BOOKING TABLE</h6>
				<p class="mb-1 text-4xl font-bold tracking-wider">Make A Reservation Table</p>
				<p class="max-w-xl text-sm text-gray-200">
					To make a reservation at our restaurant, simply call our booking <br />
					hotline or use our website.
				</p>
			</div>
			<div class="mt-4 flex flex-wrap justify-center gap-4">
				{#each ['Date', 'Time', 'Person'] as placeholder}
					<div class="relative h-16 w-[416px]">
						<input
							type={placeholder === 'Date' ? 'date' : placeholder === 'Time' ? 'time' : 'text'}
							placeholder={placeholder}
							class="h-full w-full border border-gray-400 p-4 pr-12 text-lg"
						/>
						{#if placeholder === 'Person'}
							<img
								src={User }
								alt="User "
								class="pointer-events-none absolute top-1/2 right-10 h-6 w-6 -translate-y-1/2"
							/>
						{/if}
					</div>
				{/each}
			</div>

			<button class="bg-primary mt-4 px-6 py-3">
				ABOUT MORE <span class="font-bold">&#8594;</span>
			</button>
		</div>
	</div>
</div>