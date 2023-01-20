<script>
  export let url='';
  export let name='';
</script>

<style>
  .image {
    border-radius: 50px;
    border: 3px solid #45ff32;
    width: 2.5em;
    height: 2.5em;
    display: block;
  }
</style>

<img class="image" src={url} alt='name' />