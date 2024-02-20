<script>
  import { onMount } from "svelte";
	import dices from "./constants/dices";

	let sides = [];

	onMount(shuffle)
	function shuffle() {
		const shuffled = [];
		for (const dice of dices) {
			const i = Math.floor(Math.random() * dice.length);
			shuffled.push(dice[i]);
		}
		sides = [...shuffled];
		console.log(sides);
	}
</script>

<main class="flex flex-col h-screen">
	<div class="flex justify-center p-8 text-4xl font-bold">PicStory</div>
	<div class="flex gap-20 justify-center">
		<div class="flex gap-4">
			{#each sides as side}
				<img src={`/icons/${side.img}`} alt="sideImage" class="h-20 aspect-square bg-orange-500 rounded-lg" />
			{/each}
		</div>

		<div class="flex items-center gap-4">
			<button on:click={shuffle} class="px-4 py-2 bg-orange-500 rounded-lg"
				>Shuffle</button
			>
			<button class="px-4 py-2 bg-orange-500 rounded-lg">Generate</button>
		</div>
	</div>
	<div
		class="max-h-full grid grid-cols-2 border border-grey-100 mx-20 my-10 rounded-lg overflow-y-auto"
	>
		<img
			src="https://infinitylearn.com/surge/wp-content/uploads/2023/11/MicrosoftTeams-image-53-1.jpg"
			class="w-[85%] aspect-square"
			alt="generatedImage"
		/>
		<div class=" size-full p-4 overscroll-auto">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Quisque non tellus
			orci ac. Vulputate dignissim suspendisse in est. Ultricies mi quis
			hendrerit dolor magna eget. Malesuada proin libero nunc consequat
			interdum. Amet consectetur adipiscing elit ut aliquam purus. Amet nisl
			purus in mollis nunc sed id. Maecenas sed enim ut sem viverra aliquet. Sed
			ullamcorper morbi tincidunt ornare massa eget. Elementum pulvinar etiam
			non quam lacus. Ipsum faucibus vitae aliquet nec ullamcorper. Rhoncus urna
			neque viverra justo nec ultrices dui. Mattis aliquam faucibus purus in
			massa tempor nec feugiat nisl. Consectetur a erat nam at. Id porta nibh
			venenatis cras. Ultrices tincidunt arcu non sodales neque sodales ut etiam
			sit. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Ornare massa
			eget egestas purus viverra. Condimentum mattis pellentesque id nibh.
			Facilisis leo vel fringilla est. Sollicitudin aliquam ultrices sagittis
			orci a scelerisque purus semper. Leo in vitae turpis massa sed elementum
			tempus egestas sed. Aliquet enim tortor at auctor urna nunc. Blandit
			libero volutpat sed cras ornare arcu. Posuere sollicitudin aliquam
			ultrices sagittis. Commodo quis imperdiet massa tincidunt nunc pulvinar. A
			diam maecenas sed enim ut sem viverra aliquet. Velit scelerisque in dictum
			non consectetur a erat nam. Amet aliquam id diam maecenas. Aliquam
			faucibus purus in massa tempor nec. Velit dignissim sodales ut eu sem
			ltricies integer quis auctor. A arcu cursus vitae congue
			c habitasse platea dictumst vestibulum rhoncus est
			pellentesque. Platea dictumst vestibulum rhoncus est pellentesque elit
			ullamcorper dignissim cras. In massa tempor nec feugiat nisl pretium.
		</div>
	</div>
</main>
