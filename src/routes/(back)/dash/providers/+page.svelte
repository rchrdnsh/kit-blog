<script lang='ts'>
  import { onMount } from 'svelte'
  // import type { AuthSession } from '@supabase/supabase-js';
  import { supabase } from '$library/supabase/supabaseClient.js';

  let loading: boolean = false

  interface Provider {
    username: string,
    provider: string,
    specialty: string,
    address: string,
    city: string,
    state: string,
    zip: string
  }

  // let profiles: object | null = null
  // let profiles: ArrayLike<unknown> | null = null
  // let profiles = null;
  let profiles: Provider[] | null = null;

  // const getProfileTable = async () => {

  //   const { data, error } = await supabase
  //     .from(`profiles`)
  //     .select()
  // }

  const getAllProfiles = async () => {
    try {
      loading = true
      // const { user } = session

      const { data, error, status } = await supabase
        .from(`profiles`)
        .select(`username, provider, specialty, address, city, state, zip`)
        .select()
        // .eq('id', user.id)
        // .single()
        // console.log(data)

      if (data) {
        profiles = data
        // username = data.username
        // provider = data.provider
        // specialty = data.specialty
        // avatarUrl = data.avatar_url
        // address = data.address
        // city = data.city
        // state = data.state
        // zip = data.zip
      }

      if (error && status !== 406) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
  }

  onMount(() => {
    getAllProfiles()
  })
</script>

<!-- <div class='profiles-table'>{JSON.stringify(profiles)}</div> -->

<div class='container'>

  <h1>Providers</h1>
  
  <div class='table'>
    <div class='label-row'>
      <p>Provider</p>
      <p>Specialty</p>
      <p>Address</p>
      <p>City</p>
      <p>State</p>
      <p>Zip</p>
    </div>
    {#if profiles !== null}
      {#each profiles as {username, provider, specialty, address, city, state, zip}}
        <div class='row'>
          <p>{provider}</p>
          <p>{specialty}</p>
          <p>{address}</p>
          <p>{city}</p>
          <p>{state}</p>
          <p>{zip}</p>
        </div>
      {/each}
    {:else if profiles === null}
      <p class='loading'>Loading...</p>
    {/if}
  </div>

</div>

<style>
  .container {
    padding: 32px;
    display: grid;
    row-gap: 16px;
  }

  .table {
    padding: 0;
    display: grid;
  }

  .label-row, .row {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1.5fr 1fr 2fr 1fr 0.75fr 0.75fr;
    border-bottom: 1px solid #ccc;
    height: 48px;
    align-items: center;
    font-size: 14px;
  }
  .label-row > p {
    font-weight: bold;
  }

  .loading {
    place-self: center;
  }
</style>