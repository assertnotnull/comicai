<script lang="ts">
  let count = $state(0);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<button on:click={() => count++}> clicks: {count}</button>
