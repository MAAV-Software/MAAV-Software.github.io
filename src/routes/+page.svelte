<script lang="ts">
  import Content from '$components/Content.svelte'
  import Logo from '$assets/resources/logo512-cropped.png'
  import Backdrop from '$assets/images/m-air.jpg'
import InstagramEmbed from '$components/InstagramEmbed.svelte'
  const title = 'Michigan Autonomous Aerial Vehicles'
</script>

<script context="module">
  export const router = false;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="w-screen h-80 -mx-8 -mt-8 sm:-mx-12 sm:-mt-12 overflow-hidden flex justify-center items-center">
  <img src={Logo} alt="Big Logo" class="absolute w-72 h-auto" width="431" height="234" />
  <img src={Backdrop} alt="M-Air" class="-z-10 opacity-60 w-full h-full object-cover" width="4032" height="3024" />
</div>
<Content {title}>
  <p>
    Michigan Autonomous Aerial Vehicles (MAAV) is a student-run project team at the University of Michigan that 
    competes in the annual <a href="https://suas-competition.org/" 
    class="underline hover:text-blue-600 active:text-blue-800">Student Unmanned Aerial Systems</a> (SUAS) Competition.
  </p>
  <p>
    MAAV strives to provide practical, hands-on experience for students by competing annually in the 
    SUAS Competition. Members of MAAV engage in the design, building, 
    and testing of an autonomous unmanned aerial system (UAS) while furthering multiple areas of Computer
    Science, Embedded Systems, Mechanical Engineering, and Aerospace Engineering research. 
  </p>
  <p>
    Have a question? Send us an email at <a href="mailto:maav-leads@umich.org" class="underline hover:text-blue-600 active:text-blue-800">maav-leads@umich.edu</a>.
  </p>
</Content>

<InstagramEmbed />
