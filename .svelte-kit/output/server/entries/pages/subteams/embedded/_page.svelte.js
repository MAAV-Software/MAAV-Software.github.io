import { aa as head, a5 as escape_html, X as attr } from "../../../../chunks/index.js";
import { C as Content } from "../../../../chunks/Content.js";
import { b as basePath } from "../../../../chunks/basePath.js";
const Quad = "/maav-website/_app/immutable/assets/QuadDesk.CtxfzA4t.jpg";
function _page($$payload) {
  const title = "Embedded Systems";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
  });
  Content($$payload, {
    title,
    children: ($$payload2) => {
      $$payload2.out += `<a${attr("href", `${basePath}/subteams/`)} class="font-light text-xl hover:text-blue-600 active:text-blue-800">Back to Subteams</a> <img${attr("src", Quad)} alt="Circuit Board" class="w-11/12 h-auto" width="1370" height="675"> <p>The Embedded Systems subteam designs and builds the vehicles' electrical hardware and
		electronics, as well as integrates all components into a cohesive product.</p> <h3 class="text-xl font-medium">Circuitry</h3> <p>The vehicles' printed circuit boards (PCBs) have to provide platforms for the control software
		to run and communicate with the navigation software, as well as manage the safety of the
		batteries, motors, and operators. We design with Altium Designer and Eagle, as well as use
		off-the-shelf parts.</p> <h3 class="text-xl font-medium">Integration</h3> <p>Embedded Systems is mainly considered the "bridge" between the hardware and the software of the
		drone. More specifically, ES mainly focuses on all the circuity required for the vehicle and ensures 
		that all of the components are effectively working together.</p> <h3 class="text-xl font-medium">Team Members</h3> <ol class="list-disc flex justify-center items-center flex-wrap gap-x-6 font-light line-height-1"><li>Cadin Cross</li> <li>Eli Goreta</li> <li>Ian Stough</li> <li>James Spielman</li> <li>Kaanan Datt</li> <li>Tiffany Cheung</li> <li>Vishal Dattathreya</li> <li>Wooyoung Song</li></ol>`;
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
