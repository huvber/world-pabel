<script>
import Button from "../components/button.svelte";
import PageWrapper from "../components/page-wrapper.svelte";

</script>

<PageWrapper>
  <Button on:click={() => alert('login')}>Login</Button>
</PageWrapper>