<script>
	let count = 0;
	const increment = () => {
		count += 1;
	};
</script>

<button class="bg-green-500" on:click={increment}>
	count is {count}
</button>
