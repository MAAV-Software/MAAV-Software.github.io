import { aa as head, a5 as escape_html, X as attr } from "../../../../chunks/index.js";
import { C as Content } from "../../../../chunks/Content.js";
import { b as basePath } from "../../../../chunks/basePath.js";
const GitScreenshot = "/maav-website/_app/immutable/assets/Git.DOVXCQjC.png";
function _page($$payload) {
  const title = "Software";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
  });
  Content($$payload, {
    title,
    children: ($$payload2) => {
      $$payload2.out += `<a${attr("href", `${basePath}/subteams/`)} class="font-light text-xl hover:text-blue-600 active:text-blue-800">Back to Subteams</a> <img${attr("src", GitScreenshot)} alt="Test Drone" class="w-11/12 h-auto" width="3888" height="2592"> <h3 class="text-xl font-medium">Computer Vision</h3> <p>Our Software team leverages the Raspberry Pi Arducam to capture and analyze the surrounding environment. 
    To meet the challenges of our new mission, we develop and refine state-of-the-art algorithms for tasks such as detection, mapping, and tracking using images from the drone. 
    These algorithms are executed on a Jetson Orin Nano embedded GPU to ensure high-performance processing in real-time.</p> <h3 class="text-xl font-medium">Guidance, Navigation, and Control</h3> <p>Guidance, Navigation, and Control is a critical focus of our team. 
    We process inputs from the PX4 flight controller to determine the drone's position and generate precise flight paths to guide it to its destination.
    The Software subteam also develops a series of control states tailored to different mission phases, 
    including mapping, waypoint navigation, landing/takeoff, and object detection/drop operations.</p> <h3 class="text-xl font-medium">Utilities</h3> <p>In addition to core mission tasks, our Software subteam develops tools to support and streamline the team's workflow. 
    We maintain a Gazebo simulation that replicates the competition environment, simulating sensor inputs to test and validate our software in a realistic virtual setting. 
    This simulated world includes key mission elements such as airfields, waypoints, and drop targets, ensuring our software is mission-ready.</p> <h3 class="text-xl font-medium">Team Members</h3> <ol class="list-disc flex justify-center items-center flex-wrap gap-x-6 font-light line-height-1"><li>Dermot Molony</li> <li>Dervin Tian</li> <li>Habib Shakour</li> <li>Jacob Eggerd</li> <li>Lindsay Huynh</li> <li>Mehmed Kerem Uludag</li></ol>`;
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
