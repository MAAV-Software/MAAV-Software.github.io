<script lang="ts">
  import Content from '$components/Content.svelte'
  import Ford from '$assets/sponsors/ford.png'
  import Lockheed from '$assets/sponsors/lockheed-martin.png'
  import Northrop from '$assets/sponsors/northrop-grumman.png'
  import Raytheon from '$assets/sponsors/raytheon.png'
  const title = 'Sponsors'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content {title}>
  <p>
    Our work would not be possible without the generous support of our various sponsors. 
    If you would like to become a sponsor of our team, please reach out at
     <a href="mailto:maav-leads@umich.org" class="underline hover:text-blue-600 active:text-blue-800">maav-leads@umich.edu</a>.
  </p>
  <div class="!max-w-none flex justify-center items-center gap-8 flex-wrap">
    <a href="https://www.ford.com/">
      <img src={Ford} alt="Ford" class="w-auto h-14" width="2050" height="800">
    </a>
    <a href="https://www.lockheedmartin.com/">
      <img src={Lockheed} alt="Lockheed Martin" class="w-auto h-14" width="160" height="113">
    </a>
    <a href="https://www.northropgrumman.com/">
      <img src={Northrop} alt="Northrop Grumman" class="w-auto h-14" width="1430" height="251">
    </a>
    <a href="https://www.rtx.com/">
      <img src={Raytheon} alt="Raytheon" class="w-auto h-14" width="1600" height="410">
    </a>
  </div>
</Content>