<script lang="ts">
  import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from 'svelte-vertical-timeline'
  import Content from '$components/Content.svelte'
  import timelineData from '$lib/timeline'
  import Tzoumas from '$assets/sponsors/tzoumas.jpg'
  const today = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date())
  const title = 'About'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content title="A Little Bit About Us">
  <p>
    Michigan Autonomous Aerial Vehicles (MAAV) is a student-run group at the University of Michigan that is participating in the annual 
    <a href="https://suas-competition.org/" class="underline hover:text-blue-600 active:text-blue-800">SUAS Competition</a>. 
    Members of MAAV engage in the design, building, and testing of an autonomous unmanned aerial system (UAS) 
    while furthering multiple areas of Computer Science and Aerospace Engineering research. 
  </p>
  <p>
    MAAV as an organization has existed within UMich for nearly 15 years. 
    However, post-COVID we went through a period of major knowledge loss and 
    have essentuially restarted as a team with members interested in drones, 
    but little to slight hobbyist level knowledge of them. 
    Last year we attempted to attend the SUAS competition but were unable to get a 
    working flight demo with autonomous control. Going into the competition this year our 
    main focus was on getting a working demo, and being able to compete in any way we can. 
    We are thrilled with our progrss the past few years and are exctited to learn from the competetition!
  </p>
</Content>
<Content title="Advisor">
  <p>
    Our staff advisor is Assistant Professor Derrick Yeo, a lecturer of Robotics Engineering at the University of Michigan. 
    Our work would not be possible without his continued assistance and expertise.
    You can find some more info about him 
    <a href="https://robotics.umich.edu/people/faculty/derrick-yeo/" class="underline hover:text-blue-600 active:text-blue-800">here</a>.
  </p>
  <img src={"https://robotics.umich.edu/_astro/dyeo.BokCXjxS_FYuCN.webp"} alt="Professor Derrick Yeo" class="w-auto h-60" width="344" height="351">
</Content>
<Content title="Project Timeline">
  <div class="w-screen text-start -mx-8">
    <Timeline position="alternate">
      {#each timelineData as { time, title, description }, index}
        <TimelineItem>
          <TimelineOppositeContent slot="opposite-content">
            <p class="font-light">{time}</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot style="background-color: #7CD5E2;" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style="margin-bottom: 1rem;">
            <h3 class="font-medium">{title}</h3>
            <p class="font-light max-w-sm" class:float-right={index % 2 === 1}>{description}</p>
          </TimelineContent>
        </TimelineItem>
      {/each}
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p class="font-light">{today}</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style="background-color: #364153; border-color: #364153; position: absolute; z-index: -10; animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;" />
          <TimelineDot style="background-color: #7CD5E2;" />
        </TimelineSeparator>
        <TimelineContent>
          <h3 class="font-medium">Today</h3>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </div>
</Content>
