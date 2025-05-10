<script lang="ts">
  import Content from '$components/Content.svelte'
  import basePath from '$lib/basePath'
  import Hero from '$assets/images/hero.jpg'
  const title = 'Structures'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content {title}>
  <a href={`${basePath}/subteams/`} class="font-light text-xl hover:text-blue-600 active:text-blue-800">Back to Subteams</a>
  <img src={Hero} alt="Hero Drone" class="w-11/12 h-auto" width="2000" height="926">
  <h3 class="text-xl font-medium">The Drone</h3>
  <p>
    The Structures team is responsible for the design, build, and testing of the drone. To design, we use Solidworks to model and analyze the quadcopter’s custom and off the shelf components. To build, we use carbon fiber layups, machining, and additive manufacturing processes. To test, we fly (and crash) the vehicle indoors as well as at the MAir outdoor test facility.
  </p>
  <h3 class="text-xl font-medium">The Mast</h3>
  <p>
    For Mission 9, the Structures subteam is also tasked with building the Mast per the spec given by IARC, with which we will test our drone and ultimately compete in the competition using.
  </p>
</Content>