<script>
    import SVG from '../frontEnd/svg.svelte';
    const Footer = [
		{
			title: 'Foody',
			content: [
				'Our meni is celebration of flavors from aournd the world, crafted with care and creativity by our talented'
			],
			custom: true 
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
    <div class="flex  w-full 2xl:w-[1600px] flex-col justify-center">
        <hr />
        <div class="flex max-lg:flex-col max-2xl:justify-around 2xl:justify-between items-center gap-8 py-10">
            <h6 class="text-4xl font-bold tracking-wider">Subscribe for Daily Update</h6>
            <div class="flex h-12 ">
                <input type="email" placeholder="Enter Email Address" class="border px-10 py-4" />
                <button class="text-prim1ary bg-primary p-4 "> Subscribe Now</button>
            </div>
        </div>

        <div class="grid 2xl:grid-cols-4 min-md:grid-cols-2 gap-4  w-full 2xl:h-[319px] 2xl:w-[1297px] justify-center max-2xl:text-center  mx-auto 2xl:mt-20">
            {#each Footer as section}
                <div class="flex flex-col max-md:p-2 {section.custom ? 'gap-4' : 'items-center'}">
                    <div>
                        <h6 class="{section.custom ? 'text-5xl' : 'text-3xl'} font-bold">{section.title}</h6>
                    </div>
                    <div class="2xl:h-64  2xl:w-36">
                        {#if section.content}
                            {#each section.content as paragraph}
                                <p class="2xl:w-80 max-md:px-0 max-2xl:px-20 text-gray-500">{paragraph}</p>
                            {/each}
                        {/if}

                        {#if section.list}
                            <ul class="mt-4  flex flex-col gap-2 text-gray-400">
                                {#each section.list as item}
                                    <li class="text-xl">{item}</li>
                                {/each}
                            </ul>
                        {/if}
                        <div class="mt-5  flex justify-center items-center">
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