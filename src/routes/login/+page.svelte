<script>
  import Button from '../../components/button.svelte';
  import { signIn } from '../../modules/auth';
</script>

<h1>This is Login</h1>
<Button on:click={signIn}>Login</Button>
