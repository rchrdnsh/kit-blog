<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { supabase } from '$library/supabase/supabaseClient';

  export let size = 10
  export let url: string | null
  export let canEdit: boolean = false;

  let avatarUrl: string | null = null
  let uploading = false
  let files: FileList

  const dispatch = createEventDispatcher()

  const downloadImage = async (path: string) => {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path)

      if (error) {
        throw error
      }

      const url = URL.createObjectURL(data)
      avatarUrl = url
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error downloading image: ', error.message)
      }
    }
  }

  const uploadAvatar = async () => {
    try {
      uploading = true

      if (!files || files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = files[0]
      const fileExt = file.name.split('.').pop()
      const filePath = `${Math.random()}.${fileExt}`

      let { error } = await supabase.storage.from('avatars').upload(filePath, file)

      if (error) {
        throw error
      }

      url = filePath
      dispatch('upload')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      uploading = false
    }
  }

  $: if (url) downloadImage(url)
</script>

<div class='box'>
  {#if avatarUrl}
    <img
      src={avatarUrl}
      alt={avatarUrl ? 'Avatar' : 'No image'}
      class="avatar image"
      style="height: {size}px; width: {size}px;"
    />
  {:else}
    <div
      class="avatar no-image"
      style="height: {size}px; width: {size}px;"
    />
  {/if}

  {#if canEdit === true}
    <div style="width: {size}px;">
      <label for="single">
        {uploading ? 'Uploading ...' : 'Upload'}
      </label>
      <input
        style="visibility: hidden; position:absolute;"
        type="file"
        id="single"
        accept="image/*"
        bind:files
        on:change="{uploadAvatar}"
        disabled="{uploading}"
      />
    </div>
  {/if}

</div>

<style>
  .box {
    display: grid;
  }

  label {
    margin: 0;
    padding: 6px 12px;
    border: 1px solid #000;
    border-radius: 4px;
    background-color: #265dab;
    color: white;
  }
</style>