<script>
    import { goto } from "$app/navigation";
import Avatar from "../components/avatar.svelte";
import Button from "../components/button.svelte";
import PageWrapper from "../components/page-wrapper.svelte";
import { isLogged } from "../modules/auth";

const logged = isLogged();
if(!logged) goto('/login');
</script>

<PageWrapper title="Main Page">
  <Button on:click={() => alert('login')}>Login</Button>
  <Avatar url="https://lh3.googleusercontent.com/a/AEdFTp57qiRnixPnAvn0I39reQd42VRn6yidQM_Df2oNVg=s83-c-mo" name="me" />
</PageWrapper>