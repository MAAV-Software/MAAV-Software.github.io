import { Q as push, W as fallback, S as setContext, X as attr, Y as slot, Z as bind_props, T as pop, ab as sanitize_slots, V as getContext, _ as stringify, aa as head, a5 as escape_html, a2 as ensure_array_like } from "../../../chunks/index.js";
import { C as Content } from "../../../chunks/Content.js";
function Timeline($$payload, $$props) {
  push();
  let position = fallback($$props["position"], "right");
  let style = fallback($$props["style"], null);
  setContext("TimelineConfig", { rootPosition: position });
  $$payload.out += `<ul class="timeline svelte-1qwd6n8"${attr("style", style)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></ul>`;
  bind_props($$props, { position, style });
  pop();
}
function TimelineItem($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  push();
  let position = fallback($$props["position"], null);
  let style = fallback($$props["style"], null);
  const config = getContext("TimelineConfig");
  const itemPosition = position ? position : config.rootPosition;
  setContext("ParentPosition", itemPosition);
  $$payload.out += `<li${attr("class", `${stringify(`timeline-item ${itemPosition}`)} svelte-1ls0pgo`)}${attr("style", style)}>`;
  if (!$$slots["opposite-content"]) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="opposite-block svelte-1ls0pgo"></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "opposite-content", {});
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></li>`;
  bind_props($$props, { position, style });
  pop();
}
function TimelineSeparator($$payload, $$props) {
  let style = fallback($$props["style"], null);
  $$payload.out += `<div class="timeline-separator svelte-1fw2mmo"${attr("style", style)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { style });
}
function TimelineDot($$payload, $$props) {
  let style = fallback($$props["style"], null);
  $$payload.out += `<span class="timeline-dot svelte-1uwswu1"${attr("style", style)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></span>`;
  bind_props($$props, { style });
}
function TimelineConnector($$payload, $$props) {
  let style = fallback($$props["style"], null);
  $$payload.out += `<span class="timeline-connector svelte-gf5h9g"${attr("style", style)}></span>`;
  bind_props($$props, { style });
}
function TimelineContent($$payload, $$props) {
  push();
  let style = fallback($$props["style"], null);
  const config = getContext("TimelineConfig");
  const parentPosition = getContext("ParentPosition");
  const itemPosition = parentPosition ? parentPosition : config.rootPosition;
  $$payload.out += `<div${attr("class", `${stringify(`timeline-content ${itemPosition}`)} svelte-bnwk7k`)}${attr("style", style)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { style });
  pop();
}
function TimelineOppositeContent($$payload, $$props) {
  push();
  let style = fallback($$props["style"], null);
  const config = getContext("TimelineConfig");
  const parentPosition = getContext("ParentPosition");
  const itemPosition = parentPosition ? parentPosition : config.rootPosition;
  $$payload.out += `<div${attr("class", `${stringify(`timeline-opposite-content ${itemPosition}`)} svelte-jl4g4d`)}${attr("style", style)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { style });
  pop();
}
const timelineData = [
  {
    time: "September 2023",
    title: "SUAS 2024 Announcement",
    description: "SUAS releases the first version of the rules for Summer 2024 competetion."
  },
  {
    time: "November 2023",
    title: "Work Begins",
    description: "MAAV starts planning its first attempt at the SUAS competition, pivoting from the previous years of work on IARC."
  },
  {
    time: "December 2023",
    title: "Design Finalized; Work Begins",
    description: "MAAV finishes the design for the drone: a standard quadcopter. Work begins."
  },
  {
    time: "February 2024",
    title: "Major Issues with the Drone",
    description: "MAAV runs into major issues with the drone, including RC control, flight performance, the payload system, and the autonomous control system."
  },
  {
    time: "April 2024",
    title: "Issues Continue",
    description: "Issues continue, MAAV accepts that the drone is not suitable for the 2024 competition and work begins on a plan for a 2025 drone."
  },
  {
    time: "September 2024",
    title: "SUAS 2025 Announcement",
    description: "SUAS releases the first version of the rules for Summer 2025 competetion"
  },
  {
    time: "December 2024",
    title: "Design Finalized; Work Begins",
    description: "MAAV finishes the design for the drone, including the custom VTOL quadcopter frame, choice of electronics, and plan for the autonomous control system. Work begins to build the drone"
  },
  {
    time: "March 2025",
    title: "Construction Done; Testing Begins",
    description: "MAAV finishes construction of the drone and begins testing the flight performance in the field and autonomous control systems in simulation"
  },
  {
    time: "April 2025",
    title: "Testing Continues and Improvements Made",
    description: "Testing uncovered a number of issues with the drone, including flight performance and autonomous control-related issued. MAAV works to resolve these issues and improve the drone"
  },
  {
    time: "May 2025",
    title: "SUAS Prep Work",
    description: "MAAV registers for SUAS and submits required documentation. The team continues work on the drone to improve performance and reliability."
  }
];
const teamPic = "/maav-website/_app/immutable/assets/TeamPic.c3pccT6D.jpg";
function _page($$payload, $$props) {
  push();
  const today = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(/* @__PURE__ */ new Date());
  const title = "About";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
  });
  $$payload.out += `<div class="w-screen h-80 -mx-8 -mt-8 sm:-mx-12 sm:-mt-12 overflow-hidden flex justify-center items-center"><img${attr("src", teamPic)} alt="Team Shot" class="-z-10 opacity-60 w-full h-full object-cover" width="4032" height="3024"></div> `;
  Content($$payload, {
    title: "A Little Bit About Us",
    children: ($$payload2) => {
      $$payload2.out += `<p>Michigan Autonomous Aerial Vehicles (MAAV) is a student-run group at the University of Michigan that is participating in the annual <a href="https://suas-competition.org/" class="underline hover:text-blue-600 active:text-blue-800">SUAS Competition</a>. 
    Members of MAAV engage in the design, building, and testing of an autonomous unmanned aerial system (UAS) 
    while furthering multiple areas of Computer Science and Aerospace Engineering research.</p> <p>MAAV as an organization has existed at U-M for nearly 15 years. 
    However, post-COVID we went through a period of major knowledge loss and 
    and therefore last year we attempted to attend the SUAS competition but were unable to get a 
    working flight demo with autonomous control. Going to competition this year was our 
    main focus; we are thrilled with our progress the past few years and are excited to compete!</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Content($$payload, {
    title: "Our Advisor",
    children: ($$payload2) => {
      $$payload2.out += `<p>Our staff advisor is Assistant Professor Derrick Yeo, a lecturer of Robotics Engineering at the University of Michigan. 
    Our work would not be possible without his continued assistance and expertise.
    You can find some more info about him <a href="https://robotics.umich.edu/people/faculty/derrick-yeo/" class="underline hover:text-blue-600 active:text-blue-800">here</a>.</p> <img${attr("src", "https://robotics.umich.edu/_astro/dyeo.BokCXjxS_FYuCN.webp")} alt="Professor Derrick Yeo" class="w-auto h-60" width="344" height="351">`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Content($$payload, {
    title: "Project Timeline",
    children: ($$payload2) => {
      $$payload2.out += `<div class="w-screen text-start -mx-8">`;
      Timeline($$payload2, {
        position: "alternate",
        children: ($$payload3) => {
          const each_array = ensure_array_like(timelineData);
          $$payload3.out += `<!--[-->`;
          for (let index = 0, $$length = each_array.length; index < $$length; index++) {
            let { time, title: title2, description } = each_array[index];
            TimelineItem($$payload3, {
              children: ($$payload4) => {
                TimelineSeparator($$payload4, {
                  children: ($$payload5) => {
                    TimelineDot($$payload5, { style: "background-color: #7CD5E2;" });
                    $$payload5.out += `<!----> `;
                    TimelineConnector($$payload5, {});
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                TimelineContent($$payload4, {
                  style: "margin-bottom: 1rem;",
                  children: ($$payload5) => {
                    $$payload5.out += `<h3 class="font-medium">${escape_html(title2)}</h3> <p${attr("class", `font-light max-w-sm ${stringify([index % 2 === 1 ? "float-right" : ""].filter(Boolean).join(" "))}`)}>${escape_html(description)}</p>`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: {
                default: true,
                "opposite-content": ($$payload4) => {
                  TimelineOppositeContent($$payload4, {
                    slot: "opposite-content",
                    children: ($$payload5) => {
                      $$payload5.out += `<p class="font-light">${escape_html(time)}</p>`;
                    },
                    $$slots: { default: true }
                  });
                }
              }
            });
          }
          $$payload3.out += `<!--]--> `;
          TimelineItem($$payload3, {
            children: ($$payload4) => {
              TimelineSeparator($$payload4, {
                children: ($$payload5) => {
                  TimelineDot($$payload5, {
                    style: "background-color: #364153; border-color: #364153; position: absolute; z-index: -10; animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;"
                  });
                  $$payload5.out += `<!----> `;
                  TimelineDot($$payload5, { style: "background-color: #7CD5E2;" });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TimelineContent($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<h3 class="font-medium">Today</h3>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: {
              default: true,
              "opposite-content": ($$payload4) => {
                TimelineOppositeContent($$payload4, {
                  slot: "opposite-content",
                  children: ($$payload5) => {
                    $$payload5.out += `<p class="font-light">${escape_html(today)}</p>`;
                  },
                  $$slots: { default: true }
                });
              }
            }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <p class="font-light">Please click on <a href="https://docs.google.com/document/d/1b-eCcivvkqpGTdrzidZXXgWy-SkBBgjzy9uAiRch6Lg/edit?usp=sharing" class="underline hover:text-blue-600 active:text-blue-800">this link</a> to read our technical design report for the 2025 competition to learn more about the full timeline and details of the project.</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
