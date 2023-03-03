<script lang="ts">
  export let url = '';
  export let name = '';
  export let size: 'small' | 'medium' | 'large' = 'large';
</script>

<img class={`nes-avatar is-rounded is-${size}`} src={url} alt={name} />
