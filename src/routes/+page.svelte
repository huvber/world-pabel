<script>
  import Avatar from '../components/avatar.svelte';
  import Button from '../components/button.svelte';
  import Container from '../components/container.svelte';
  import Dropdown from '../components/dropdown.svelte';
  import { signOut } from '../modules/auth';
</script>

<Container title="Main Page">
  <Dropdown>
    <Avatar
      slot="target"
      url="https://lh3.googleusercontent.com/a/AEdFTp57qiRnixPnAvn0I39reQd42VRn6yidQM_Df2oNVg=s83-c-mo"
      name="me"
    />
    <nav slot="content">
      <Button
        on:click={() => {
          signOut();
        }}
      >
        Sign Out
      </Button>
    </nav>
  </Dropdown>
</Container>
