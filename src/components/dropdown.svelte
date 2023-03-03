<script lang="ts">
  export let trigger: 'click' | 'hover' = 'hover';
  let open = false;

  const toggle = (type: 'click' | 'hover') => {
    if (type === trigger) open = !open;
  };
</script>

<div
  on:click={() => toggle('click')}
  on:keyup={() => toggle('click')}
  on:mouseenter={() => toggle('hover')}
  on:mouseleave={() => toggle('hover')}
  class="container"
>
  <slot name="target" />

  <dialog class={`nes-container is-rounded ${open ? 'visible' : 'invisible'}`}>
    <slot name="content" />
  </dialog>
</div>

<style>
  .container {
    position: relative;
    display: inline-block;
  }
  dialog {
    display: none;
    width: fit-content;
  }
  dialog.visible {
    display: inline-block;
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    z-index: 1;
  }
</style>
