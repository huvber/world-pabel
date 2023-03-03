<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const click = () => dispatch('click');
  let type: 'primary' | 'success' | 'warning' | 'error' | 'disabled' = 'primary';
</script>

<button {...$$props} type="button" class={`nes-btn is-${type}`} on:click={click}><slot /></button>
