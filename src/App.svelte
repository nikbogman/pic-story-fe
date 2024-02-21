<script>
	import { onMount } from "svelte";
	import dices from "./constants/dices";
  
	let sides = [];
	let generatedImage = ""; // Placeholder for the generated image URL
	let generatedText = ""; // Placeholder for the generated text
  
	onMount(shuffle);
  
	function shuffle() {
	  const shuffled = [];
	  for (const dice of dices) {
		const i = Math.floor(Math.random() * dice.length);
		shuffled.push(dice[i]);
	  }
	  sides = [...shuffled];
	  console.log(sides);
	}

	async function handleGenerateContent(prompt) {
		await generateText('Create a story with the following key words: ' + prompt);
		console.log(generatedText);
		await createImage(generatedText);
	}
  
	async function createImage(text) {
	  const response = await fetch('http://localhost:5000/create_image', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({ text }),
	  });
  
	  if (response.ok) {
		const data = await response.json();
		generatedImage = data.output_url; // Assuming 'output_url' is the key where the image URL is stored
	  } else {
		console.error('Failed to create image');
	  }
	}
  
	async function generateText(text) {
	  const response = await fetch('http://localhost:5000/generate_text', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({ text }),
	  });
  
	  if (response.ok) {
		const data = await response.json();
		generatedText = data.output; // Adjust based on the actual response structure
	  } else {
		console.error('Failed to generate text');
	  }
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
			<button on:click={()=>{handleGenerateContent(sides.map((s)=> s.prompt).join(','))}} class="px-4 py-2 bg-orange-500 rounded-lg">Generate</button>
		</div>
	</div>
	<div
		class="max-h-full grid grid-cols-2 border border-grey-100 mx-20 my-10 rounded-lg overflow-y-auto"
	>
		<img
			src={generatedImage}
			class="w-[85%] aspect-square"
			alt="generatedImage"
		/>
		<div class=" size-full p-4 overscroll-auto">
			{generatedText}
		</div>
	</div>
</main>
