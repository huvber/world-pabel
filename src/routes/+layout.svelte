<script>
  import { goto } from '$app/navigation';
  import { user } from '../stores/user';
  import { browser } from '$app/environment';
  import { player } from '../stores/players';

  if (browser) {
    user.subscribe((currentUser) => {
      if (!currentUser) return goto('/login');
      player.create({
        name: currentUser.displayName,
        avatar: currentUser.photoURL,
        email: currentUser.email,
        level: 1.5,
        uid: currentUser.uid
      });
      return goto('/');
    });
  }
</script>

<svelte:head>
  <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<slot />

<style>
  :global(body) {
    padding: 1rem;
    font-family: 'Press Start 2P', monospace;
  }
</style>
