import { W as fallback, X as attr, a5 as escape_html, Y as slot, Z as bind_props } from "./index.js";
function Content($$payload, $$props) {
  let title = fallback($$props["title"], "");
  let constrain = fallback($$props["constrain"], true);
  $$payload.out += `<div${attr("class", `flex flex-col items-center gap-8 ${constrain ? "[&>*]:max-w-prose" : ""}`)}><h1 class="text-3xl font-semibold">${escape_html(title)}</h1> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { title, constrain });
}
export {
  Content as C
};
