<script>
  import '$styles/app.css';
  import { supabase } from '$library/supabase/supabaseClient';
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      invalidate('supabase:auth')
    })

    return () => {
      subscription.unsubscribe()
    }
  })
</script>

<SvelteToast/>

<div class='container'>
  <div class='text'>
    <p>Main Layout</p>
    <a href='/'>Front</a>
    <a href='/dash'>Back</a>
  </div>
  <slot/>
</div>

<style>
  .container {
    width: 100vw;
    height: 100vh;
    padding: 8px;
    display: grid;
    grid-template-rows: 24px 1fr;
    row-gap: 8px;
  }
  .text {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    column-gap: 12px;
    font-size: 16px;
    /* border: 1px solid red; */
    line-height: 1;
    margin-left: 16px;
  }
</style>