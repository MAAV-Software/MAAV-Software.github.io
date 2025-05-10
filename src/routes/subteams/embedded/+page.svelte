<script lang="ts">
	import Content from '$components/Content.svelte';
	import basePath from '$lib/basePath';
	import Circuits from '$assets/images/circuits.png';
	const title = 'Embedded Systems';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Content {title}>
	<a
		href={`${basePath}/subteams/`}
		class="font-light text-xl hover:text-blue-600 active:text-blue-800">Back to Subteams</a
	>
	<img src={Circuits} alt="Circuit Board" class="w-11/12 h-auto" width="1370" height="675" />
	<p>
		The Embedded Systems subteam designs and builds the vehicles' electrical hardware and
		electronics, as well as integrates all components into a cohesive product.
	</p>
	<h3 class="text-xl font-medium">Circuitry</h3>
	<p>
		The vehicles' printed circuit boards (PCBs) have to provide platforms for the control software
		to run and communicate with the navigation software, as well as manage the safety of the
		batteries, motors, and operators. We design with Altium Designer and Eagle, as well as use
		off-the-shelf parts.
	</p>
	<h3 class="text-xl font-medium">Integration</h3>
	<p>
		Embedded Systems is mainly considerfed the "bridge" between the hardware and the software of the
		drone. More specefically, ES mainly focuses on all the circuity requred for the vehicle and ensures 
		that all of the components are effectivley working togther. 
	</p>
</Content>
