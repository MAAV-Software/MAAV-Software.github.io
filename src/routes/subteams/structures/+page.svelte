<script lang="ts">
  import Content from '$components/Content.svelte'
  import basePath from '$lib/basePath'
  import TestDrone from '$assets/images/Quadplane.jpg'
  const title = 'Structures'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content {title}>
  <a href={`${basePath}/subteams/`} class="font-light text-xl hover:text-blue-600 active:text-blue-800">Back to Subteams</a>
  <img src={TestDrone} alt="Hero Drone" class="w-11/12 h-auto" width="2000" height="926">
  <h3 class="text-xl font-medium">The Frame</h3>
  <p>
    The Structures team is responsible for the design, build, and testing of the drone frame. 
    To design, we use Solidworks to model and analyze the quadcopter’s custom and off the shelf components. 
    To build, we use carbon fiber layups, machining, and additive manufacturing processes. 
    To test, we fly (and crash) the vehicle at the MAir outdoor test facility to ensure its structural integrity.
  </p>
  <h3 class="text-xl font-medium">Team Members</h3>
	<ol class="list-disc flex justify-center items-center flex-wrap gap-x-6 font-light line-height-1">
		<li>  Avery Xi  </li>
		<li>  Matthew Sperry  </li>
		<li>  Olivia Ma </li>
	</ol>
</Content>