import { aa as head, a5 as escape_html, X as attr } from "../../../chunks/index.js";
import { C as Content } from "../../../chunks/Content.js";
const Ford = "/maav-website/_app/immutable/assets/ford.viql9BCq.png";
const Lockheed = "/maav-website/_app/immutable/assets/lockheed-martin.B8djq55H.png";
const Northrop = "/maav-website/_app/immutable/assets/northrop-grumman.BcdZmWAs.png";
const Raytheon = "/maav-website/_app/immutable/assets/raytheon.CCmSTfRi.png";
function _page($$payload) {
  const title = "Sponsors";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
  });
  Content($$payload, {
    title,
    children: ($$payload2) => {
      $$payload2.out += `<p>Our work would not be possible without the generous support of our various sponsors. 
    If you would like to become a sponsor of our team, please reach out at <a href="mailto:maav-leads@umich.org" class="underline hover:text-blue-600 active:text-blue-800">maav-leads@umich.edu</a>.</p> <div class="!max-w-none flex justify-center items-center gap-8 flex-wrap"><a href="https://www.ford.com/"><img${attr("src", Ford)} alt="Ford" class="w-auto h-14" width="2050" height="800"></a> <a href="https://www.lockheedmartin.com/"><img${attr("src", Lockheed)} alt="Lockheed Martin" class="w-auto h-14" width="160" height="113"></a> <a href="https://www.northropgrumman.com/"><img${attr("src", Northrop)} alt="Northrop Grumman" class="w-auto h-14" width="1430" height="251"></a> <a href="https://www.rtx.com/"><img${attr("src", Raytheon)} alt="Raytheon" class="w-auto h-14" width="1600" height="410"></a></div>`;
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
