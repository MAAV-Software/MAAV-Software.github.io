import { aa as head, a5 as escape_html, X as attr } from "../../../chunks/index.js";
import { C as Content } from "../../../chunks/Content.js";
import { b as basePath } from "../../../chunks/basePath.js";
const Office = "/maav-website/_app/immutable/assets/office.CGLSNmIn.jpg";
function _page($$payload) {
  const title = "Subteams";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
  });
  Content($$payload, {
    title,
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex justify-center items-center flex-wrap gap-4 font-light text-xl"><a${attr("href", `${basePath}/subteams/software/`)} class="hover:text-blue-600 active:text-blue-800">Software</a> <div class="border-l-2 self-stretch"></div> <a${attr("href", `${basePath}/subteams/structures/`)} class="hover:text-blue-600 active:text-blue-800">Structures</a> <div class="border-l-2 self-stretch"></div> <a${attr("href", `${basePath}/subteams/embedded/`)} class="hover:text-blue-600 active:text-blue-800">Embedded Systems</a></div> <img${attr("src", Office)} alt="MAAV Office" class="w-11/12 h-auto" width="4032" height="3024"> <p>We've broken down our work into smaller groups, each focusing on one of three key parts of the
		project: software, structures, and embedded systems. Each group handles a specific part, led by
		a team lead. These leads are in charge of keeping their group on track to hit their goals.</p>`;
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
