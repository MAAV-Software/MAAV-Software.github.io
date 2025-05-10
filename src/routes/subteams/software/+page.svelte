<script lang="ts">
  import Content from '$components/Content.svelte'
  import basePath from '$lib/basePath'
  import TestDrone from '$assets/images/test-drone.jpg'
  const title = 'Software'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content {title}>
  <a href={`${basePath}/subteams/`} class="font-light text-lg hover:text-blue-600 active:text-blue-800">Back to Subteams</a>
  <img src={TestDrone} alt="Test Drone" class="w-11/12 h-auto" width="3888" height="2592">
  <h3 class="text-xl font-medium">Computer Vision</h3>
  <p>
    Our Software team leverages the Raspberry Pi Arducam to capture and analyze the surrounding environment. 
    To meet the challenges of our new mission, we develop and refine state-of-the-art algorithms for tasks such as detection, mapping, and tracking using images from the drone. 
    These algorithms are executed on a Jetson Orin Nano embedded GPU to ensure high-performance processing in real-time.
  </p>
  <h3 class="text-xl font-medium">Guidance, Navigation, and Control</h3>
  <p>
    Guidance, Navigation, and Control is a critical focus of our team. 
    We process inputs from the PX4 flight controller to determine the drone's position and generate precise flight paths to guide it to its destination.
    The Software subteam also develops a series of control states tailored to different mission phases, 
    including mapping, waypoint navigation, landing/takeoff, and object detection/drop operations.
  </p>
  <h3 class="text-xl font-medium">Utilities</h3>
  <p>
    In addition to core mission tasks, our Software subteam develops tools to support and streamline the team's workflow. 
    We maintain a Gazebo simulation that replicates the competition environment, simulating sensor inputs to test and validate our software in a realistic virtual setting. 
    This simulated world includes key mission elements such as airfields, waypoints, and drop targets, ensuring our software is mission-ready.
</Content>