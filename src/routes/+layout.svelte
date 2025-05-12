<script lang="ts">
  import { onMount } from 'svelte'
  import '../app.css'
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
  let headerHeight = 0
  let footerHeight = 0
  let ready = false
  onMount(() => {
    ready = true
  })
</script>

<div class="font-montserrat">
  <Header bind:height={headerHeight} />
  {#if ready}
    <main class="p-8 sm:p-12 flex flex-col items-center gap-12 text-lg text-center overflow-x-hidden" style:margin-top="{headerHeight}px" style:margin-bottom="{footerHeight}px">
      <slot />
    </main>
  {/if}
  <Footer bind:height={footerHeight} />
</div>