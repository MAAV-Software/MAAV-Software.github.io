<script lang="ts">
  import { page as current } from '$app/stores'
  import NavButton from '$components/atomics/NavButton.svelte'
  import Logo from '$assets/resources/header.png'
  import Button from '$components/atomics/Button.svelte'
  import NavLi from './atomics/NavLi.svelte';
  import IconJoin from '~icons/bi/arrow-right-circle'
  import { internal as pages } from '$lib/pages'
  export let height = 0
  import basePath from '$lib/basePath';  // Ensure basePath is correctly set
</script>

<nav class="shrink-0 fixed top-0 z-10 w-full p-4 flex gap-2 items-center font-semibold bg-slate-700" bind:clientHeight={height}>
  <NavButton href={`${basePath}/`} active={`${basePath}/` === $current.url.pathname} class="flex-shrink-0" innerClass="!p-2">
    <img src={Logo} alt="MAAV Logo" class="w-28 md:w-40" />
  </NavButton>  
  <div class="flex gap-4 -my-3 pt-1 pb-2 px-3 overflow-x-auto overflow-y-hidden mask-edges lg:mask-none">
    {#each pages as page}
      {#if page.showInNav}
        {#if page.title === "Subteams"}
          <div class="lg:dropdown">
            <NavButton href={page.path} active={(page.path === $current.url.pathname) || (page.subPages && page.subPages.some(subPage => subPage.path === $current.url.pathname))} class="droproot">
              {page.title}
            </NavButton>
            <div class="dropcontent">
              <ul class="pt-2">
                {#if page.subPages}
                  {#each page.subPages as { title, path }}
                    <NavLi href={path} active={path === $current.url.pathname}>
                      {title}
                    </NavLi>
                  {/each}
                {/if}
              </ul>
            </div>
          </div>
        {:else}
          <NavButton href={page.path} active={page.path === $current.url.pathname}>
            {page.title}
          </NavButton>
        {/if}
      {/if}
    {/each}
  </div>
  <a href="https://forms.gle/RR3aCsgZxHZ6NAzK8" class="ml-auto">
    <Button class="flex gap-2 items-center transition-all text-white bg-blue-700 active:bg-blue-900 focus:ring focus:ring-blue-400 hover:bg-blue-800">
      <span>Join</span>
      <IconJoin class="text-lg hidden md:inline" />
    </Button>
  </a>
</nav>