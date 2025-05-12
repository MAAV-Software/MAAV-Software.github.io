<script lang="ts">
  import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from 'svelte-vertical-timeline'
  import Content from '$components/Content.svelte'
  import timelineData from '$lib/timeline'
  import teamPic from '$assets/images/TeamPic.jpg'
  const today = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date())
  const title = 'About'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="w-screen h-80 -mx-8 -mt-8 sm:-mx-12 sm:-mt-12 overflow-hidden flex justify-center items-center">
  <img src={teamPic} alt="Team Shot" class="-z-10 opacity-60 w-full h-full object-cover " width="4032" height="3024" />
</div>

<Content title="A Little Bit About Us">
  <p>
    Michigan Autonomous Aerial Vehicles (MAAV) is a student-run group at the University of Michigan that is participating in the annual 
    <a href="https://suas-competition.org/" class="underline hover:text-blue-600 active:text-blue-800">SUAS Competition</a>. 
    Members of MAAV engage in the design, building, and testing of an autonomous unmanned aerial system (UAS) 
    while furthering multiple areas of Computer Science and Aerospace Engineering research. 
  </p>
  <p>
    MAAV as an organization has existed at U-M for nearly 15 years. 
    However, post-COVID we went through a period of major knowledge loss and 
    and therefore last year we attempted to attend the SUAS competition but were unable to get a 
    working flight demo with autonomous control. Going to competition this year was our 
    main focus; we are thrilled with our progress the past few years and are excited to compete!
  </p>
</Content>
<Content title="Our Advisor">
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

  <p class="font-light">
    Please click on
    <a href="https://docs.google.com/document/d/1b-eCcivvkqpGTdrzidZXXgWy-SkBBgjzy9uAiRch6Lg/edit?usp=sharing" class="underline hover:text-blue-600 active:text-blue-800">this link </a>
    to read our technical design report for the 2025 competition to learn more about the full timeline and details of the project.
  </p>

</Content>
