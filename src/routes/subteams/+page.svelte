<script lang="ts">
	import Content from '$components/Content.svelte';
	import basePath from '$lib/basePath';
	import Office from '$assets/images/office.jpg';
	const title = 'Subteams';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Content {title}>
	<div class="flex justify-center items-center flex-wrap gap-4 font-light text-xl">
		<a href={`${basePath}/subteams/software/`} class="hover:text-blue-600 active:text-blue-800"
			>Software</a
		>
		<div class="border-l-2 self-stretch"></div>
		<a href={`${basePath}/subteams/structures/`} class="hover:text-blue-600 active:text-blue-800"
			>Structures</a
		>
		<div class="border-l-2 self-stretch"></div>
		<a href={`${basePath}/subteams/embedded/`} class="hover:text-blue-600 active:text-blue-800"
			>Embedded Systems</a
		>
	</div>
	<img src={Office} alt="MAAV Office" class="w-11/12 h-auto" width="4032" height="3024" />
	<p>
		We've broken down our work into smaller groups, each focusing on one of three key parts of the
		project: software, structures, and embedded systems. Each group handles a specific part, led by
		a team lead. These leads are in charge of keeping their group on track to hit their goals.
	</p>
</Content>
