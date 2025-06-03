<script>
    import SVG from '../frontEnd/svg.svelte';
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

<div class="section-wrapper">
    <div class="flex  w-full md:w-[1600px] flex-col justify-center">
        <hr />
        <div class="max-md:flex-col my-20 flex items-center md:justify-between max-md:gap-4">
            <h6 class="text-4xl font-bold tracking-wider">Subscribe for Daily Update</h6>
            <div class="flex h-12 md:w-[524px]">
                <input type="email" placeholder="Enter Email Address" class="border px-10 py-4" />
                <button class="text-prim1ary bg-primary p-4"> Subscribe Now</button>
            </div>
        </div>

        <div class="md:mx-auto grid md:h-[319px] md:w-[1297px] w-full md:grid-cols-4 items-center justify-center">
            {#each Footer as section}
                <div class="flex flex-col max-md:p-10 {section.custom ? 'gap-4' : 'md:items-center'}">
                    <div>
                        <h6 class="{section.custom ? 'text-5xl' : 'text-3xl'} font-bold">{section.title}</h6>
                    </div>
                    <div class="md:h-64 md:w-36">
                        {#if section.content}
                            {#each section.content as paragraph}
                                <p class="w-80 text-gray-500">{paragraph}</p>
                            {/each}
                        {/if}

                        {#if section.list}
                            <ul class="mt-4 grid grid-cols-2 md:flex md:flex-col gap-2 text-gray-400">
                                {#each section.list as item}
                                    <li class="text-xl">{item}</li>
                                {/each}
                            </ul>
                        {/if}
                        <div class="mt-5">
                            {#if section.custom}
                                <SVG />
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <hr class="mt-20" />
        <div class="m-8 flex max-md:flex-col max-md:gap-4 justify-between">
            <p class="text-xl">copyright @joshua2025 | All Rights Reserved</p>
            <p class="text-lg">Designed by Joshua</p>
        </div>
    </div>
</div>