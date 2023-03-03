

<script>
  export let title = '';
</script>

<main class="nes-container with-title is-centered">
  {#if title}
    <p class="title">{title}</p>
  {/if}
  <slot />
</main>