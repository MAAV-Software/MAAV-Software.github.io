import { V as getContext, W as fallback, X as attr, Y as slot, Z as bind_props, _ as stringify, $ as clsx, a0 as sanitize_props, a1 as spread_attributes, a2 as ensure_array_like, a3 as store_get, a4 as unsubscribe_stores, T as pop, Q as push, a5 as escape_html, a6 as add_styles, a7 as copy_payload, a8 as assign_payload } from "../../chunks/index.js";
import "../../chunks/client.js";
import { b as basePath } from "../../chunks/basePath.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Button($$payload, $$props) {
  let className = fallback($$props["class"], "");
  let title = fallback($$props["title"], "");
  $$payload.out += `<button type="button"${attr("title", title)}${attr("class", `rounded-xl px-4 py-2 ${stringify(className || "")}`)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></button>`;
  bind_props($$props, { class: className, title });
}
function NavButton($$payload, $$props) {
  let href = fallback($$props["href"], "");
  let title = fallback($$props["title"], "");
  let active = fallback($$props["active"], false);
  let className = fallback($$props["class"], "");
  let innerClass = fallback($$props["innerClass"], "");
  let handleClick = fallback($$props["handleClick"], () => {
  });
  $$payload.out += `<a${attr("href", href)}${attr("title", title)}${attr("class", clsx(className))}>`;
  Button($$payload, {
    title,
    class: `transition-all text-white active:bg-slate-900 focus:ring focus:ring-slate-400 ${stringify(active ? "bg-slate-800" : "hover:bg-slate-800")} ${stringify(innerClass || "")}`,
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      slot($$payload2, $$props, "default", {});
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></a>`;
  bind_props($$props, {
    href,
    title,
    active,
    class: className,
    innerClass,
    handleClick
  });
}
const Logo = "/maav-website/_app/immutable/assets/header.COSLURrc.png";
function NavLi($$payload, $$props) {
  let href = fallback($$props["href"], "");
  let active = fallback($$props["active"], false);
  $$payload.out += `<li><a${attr("href", href)}><button type="button"${attr("class", `relative w-full p-4 text-start transition-all text-white bg-slate-600 active:bg-slate-900 focus:z-10 focus:ring focus:ring-slate-400 ${stringify(active ? "!bg-slate-800" : "hover:bg-slate-800")}`)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></button></a></li>`;
  bind_props($$props, { href, active });
}
function Arrow_right_circle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 16 16",
      width: "1.2em",
      height: "1.2em",
      ...$$sanitized_props
    },
    void 0,
    void 0,
    3
  )}>${html(`<path fill="currentColor" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>`)}</svg>`;
}
const internal = [
  {
    title: "Home",
    path: "/",
    showInNav: false
  },
  {
    title: "About",
    path: "/about/",
    showInNav: true
  },
  {
    title: "Subteams",
    path: "/subteams/",
    showInNav: true,
    subPages: [
      {
        title: "Software",
        path: `${basePath}/subteams/software/`
      },
      {
        title: "Structures",
        path: `${basePath}/subteams/structures/`
      },
      {
        title: "Embedded Systems",
        path: `${basePath}/subteams/embedded/`
      }
    ]
  },
  {
    title: "Sponsors",
    path: "/sponsors/",
    showInNav: true
  },
  {
    title: "Join",
    path: "https://forms.gle/C9xCty7A2RkK2x7YA",
    showInNav: false
  }
].map((page2) => ({ ...page2, path: `${basePath}${page2.path}` }));
const external = [
  {
    title: "IARC",
    path: "http://www.aerialroboticscompetition.org/"
  },
  {
    title: "Maize Pages",
    path: "https://maizepages.umich.edu/organization/maav/"
  },
  {
    title: "Internal Wiki",
    path: "https://sites.google.com/umich.edu/maav/"
  },
  {
    title: "Github",
    path: "https://github.com/MAAV-Software/"
  },
  {
    title: "Instagram",
    path: "https://www.instagram.com/umichmaav/"
  }
];
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  let height = fallback($$props["height"], 0);
  const each_array = ensure_array_like(internal);
  $$payload.out += `<nav class="shrink-0 fixed top-0 z-10 w-full p-4 flex gap-2 items-center font-semibold bg-slate-700">`;
  NavButton($$payload, {
    href: `${basePath}/`,
    active: `${basePath}/` === store_get($$store_subs ??= {}, "$current", page).url.pathname,
    class: "flex-shrink-0",
    innerClass: "!p-2",
    children: ($$payload2) => {
      $$payload2.out += `<img${attr("src", Logo)} alt="MAAV Logo" class="w-28 md:w-40">`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="flex gap-4 -my-3 pt-1 pb-2 px-3 overflow-x-auto overflow-y-hidden mask-edges lg:mask-none"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let page$1 = each_array[$$index_1];
    if (page$1.showInNav) {
      $$payload.out += "<!--[-->";
      if (page$1.title === "Subteams") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div class="lg:dropdown">`;
        NavButton($$payload, {
          href: page$1.path,
          active: page$1.path === store_get($$store_subs ??= {}, "$current", page).url.pathname || page$1.subPages && page$1.subPages.some((subPage) => subPage.path === store_get($$store_subs ??= {}, "$current", page).url.pathname),
          class: "droproot",
          children: ($$payload2) => {
            $$payload2.out += `<!---->${escape_html(page$1.title)}`;
          },
          $$slots: { default: true }
        });
        $$payload.out += `<!----> <div class="dropcontent"><ul class="pt-2">`;
        if (page$1.subPages) {
          $$payload.out += "<!--[-->";
          const each_array_1 = ensure_array_like(page$1.subPages);
          $$payload.out += `<!--[-->`;
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let { title, path } = each_array_1[$$index];
            NavLi($$payload, {
              href: path,
              active: path === store_get($$store_subs ??= {}, "$current", page).url.pathname,
              children: ($$payload2) => {
                $$payload2.out += `<!---->${escape_html(title)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload.out += `<!--]-->`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--></ul></div></div>`;
      } else {
        $$payload.out += "<!--[!-->";
        NavButton($$payload, {
          href: page$1.path,
          active: page$1.path === store_get($$store_subs ??= {}, "$current", page).url.pathname,
          children: ($$payload2) => {
            $$payload2.out += `<!---->${escape_html(page$1.title)}`;
          },
          $$slots: { default: true }
        });
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> <a href="https://forms.gle/RR3aCsgZxHZ6NAzK8" class="ml-auto">`;
  Button($$payload, {
    class: "flex gap-2 items-center transition-all text-white bg-blue-700 active:bg-blue-900 focus:ring focus:ring-blue-400 hover:bg-blue-800",
    children: ($$payload2) => {
      $$payload2.out += `<span>Join</span> `;
      Arrow_right_circle($$payload2, { class: "text-lg hidden md:inline" });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></a></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { height });
  pop();
}
function Github($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 16 16",
      width: "1.2em",
      height: "1.2em",
      ...$$sanitized_props
    },
    void 0,
    void 0,
    3
  )}>${html(`<path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>`)}</svg>`;
}
function Instagram($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 16 16",
      width: "1.2em",
      height: "1.2em",
      ...$$sanitized_props
    },
    void 0,
    void 0,
    3
  )}>${html(`<path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"/>`)}</svg>`;
}
function Envelope($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 16 16",
      width: "1.2em",
      height: "1.2em",
      ...$$sanitized_props
    },
    void 0,
    void 0,
    3
  )}>${html(`<path fill="currentColor" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2l7-4.2V4a1 1 0 0 0-1-1zm13 2.383l-4.708 2.825L15 11.105zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795l-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>`)}</svg>`;
}
function List($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 16 16",
      width: "1.2em",
      height: "1.2em",
      ...$$sanitized_props
    },
    void 0,
    void 0,
    3
  )}>${html(`<path fill="currentColor" fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>`)}</svg>`;
}
function X_lg($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 16 16",
      width: "1.2em",
      height: "1.2em",
      ...$$sanitized_props
    },
    void 0,
    void 0,
    3
  )}>${html(`<path fill="currentColor" d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>`)}</svg>`;
}
function IconButton($$payload, $$props) {
  let href = fallback($$props["href"], "");
  let title = fallback($$props["title"], "");
  let className = fallback($$props["class"], "");
  let innerClass = fallback($$props["innerClass"], "");
  let handleClick = fallback($$props["handleClick"], () => {
  });
  $$payload.out += `<a${attr("href", href)}${attr("title", title)}${attr("class", clsx(className))}><button type="button"${attr("title", title)}${attr("class", `transition-all hover:text-blue-500 active:text-blue-700 ${innerClass}`)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></button></a>`;
  bind_props($$props, {
    href,
    title,
    class: className,
    innerClass,
    handleClick
  });
}
function PrettyLink($$payload, $$props) {
  let href = fallback($$props["href"], "");
  let title = fallback($$props["title"], "");
  let className = fallback($$props["class"], "");
  let active = fallback($$props["active"], false);
  let handleClick = fallback($$props["handleClick"], () => {
  });
  $$payload.out += `<a${attr("href", href)}${attr("title", title)}${attr("class", `transition-all font-semibold ${stringify(active ? "text-blue-500" : "hover:text-blue-500")} active:text-blue-700 ${stringify(className || "")}`)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></a>`;
  bind_props($$props, {
    href,
    title,
    class: className,
    active,
    handleClick
  });
}
function Plus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 16 16",
      width: "1.2em",
      height: "1.2em",
      ...$$sanitized_props
    },
    void 0,
    void 0,
    3
  )}>${html(`<path fill="currentColor" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>`)}</svg>`;
}
function Dash($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 16 16",
      width: "1.2em",
      height: "1.2em",
      ...$$sanitized_props
    },
    void 0,
    void 0,
    3
  )}>${html(`<path fill="currentColor" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>`)}</svg>`;
}
function ExpandingLink($$payload, $$props) {
  push();
  var $$store_subs;
  let href = fallback($$props["href"], "");
  let title = fallback($$props["title"], "");
  let className = fallback($$props["class"], "");
  let active = fallback($$props["active"], false);
  let handleClick = fallback($$props["handleClick"], () => {
  });
  let subPages = fallback($$props["subPages"], () => [], true);
  const each_array = ensure_array_like(subPages);
  $$payload.out += `<div class="overflow-hidden"><div class="flex justify-between items-center">`;
  PrettyLink($$payload, {
    href,
    title,
    active,
    class: className,
    handleClick,
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      slot($$payload2, $$props, "default", {});
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <button type="button" title="Toggle Subteams Visibility" class="relative w-6 h-6 flex justify-center items-center hover:text-blue-500 active:text-blue-700">`;
  Plus($$payload, {
    class: `text-xl absolute inset-0 transition-all ${""}`
  });
  $$payload.out += `<!----> `;
  Dash($$payload, {
    class: `text-xl absolute inset-0 transition-all ${"invisible opacity-0 -rotate-90"}`
  });
  $$payload.out += `<!----></button></div> <div${add_styles({ height: 0 })}${attr("class", `transition-all duration-300 ${"opacity-0"}`)}><div class="pt-1 pl-2 flex flex-col gap-1"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let child = each_array[$$index];
    PrettyLink($$payload, {
      href: child.path,
      active: child.path === store_get($$store_subs ??= {}, "$current", page).url.pathname,
      class: "!font-medium",
      handleClick,
      children: ($$payload2) => {
        $$payload2.out += `<!---->${escape_html(child.title)}`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    href,
    title,
    class: className,
    active,
    handleClick,
    subPages
  });
  pop();
}
function Footer($$payload, $$props) {
  push();
  var $$store_subs;
  let showMenu = false;
  let height = fallback($$props["height"], 0);
  $$payload.out += `<footer class="shrink-0 fixed bottom-0 z-10 w-full h-14 p-4 flex items-center gap-6 bg-slate-200 border-t-2 border-slate-300">`;
  IconButton($$payload, {
    href: "https://www.instagram.com/umichmaav/",
    title: "Instagram",
    children: ($$payload2) => {
      Instagram($$payload2, { class: "text-xl" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  IconButton($$payload, {
    href: "https://github.com/MAAV-Software/",
    title: "Github",
    children: ($$payload2) => {
      Github($$payload2, { class: "text-xl" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  IconButton($$payload, {
    href: "mailto:maav-leads@umich.edu",
    title: "Email",
    children: ($$payload2) => {
      Envelope($$payload2, { class: "text-xl" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  IconButton($$payload, {
    class: "ml-auto",
    handleClick: () => showMenu = true,
    title: "Open Menu",
    children: ($$payload2) => {
      List($$payload2, { class: "text-xl" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></footer> `;
  if (showMenu) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(internal);
    const each_array_1 = ensure_array_like(external);
    $$payload.out += `<div class="fixed inset-0 w-full h-full backdrop-blur-sm z-40"></div> <div class="fixed top-0 right-0 h-full w-64 z-50 bg-slate-100 shadow-xl p-6 flex flex-col gap-4"><div class="flex flex-col gap-2"><p>MAAV</p> <div class="flex flex-col gap-2 ml-2"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let page$1 = each_array[$$index];
      if (page$1.title === "Subteams") {
        $$payload.out += "<!--[-->";
        ExpandingLink($$payload, {
          href: page$1.path,
          active: page$1.path === store_get($$store_subs ??= {}, "$current", page).url.pathname || page$1.subPages && page$1.subPages.some((subPage) => subPage.path === store_get($$store_subs ??= {}, "$current", page).url.pathname),
          handleClick: () => showMenu = false,
          subPages: page$1.subPages,
          children: ($$payload2) => {
            $$payload2.out += `<!---->${escape_html(page$1.title)}`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload.out += "<!--[!-->";
        PrettyLink($$payload, {
          href: page$1.path,
          active: page$1.path === store_get($$store_subs ??= {}, "$current", page).url.pathname,
          handleClick: () => showMenu = false,
          children: ($$payload2) => {
            $$payload2.out += `<!---->${escape_html(page$1.title)}`;
          },
          $$slots: { default: true }
        });
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--></div></div> <div class="flex flex-col gap-2"><p>External</p> <div class="flex flex-col gap-2 ml-2"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let page$1 = each_array_1[$$index_1];
      PrettyLink($$payload, {
        href: page$1.path,
        active: page$1.path === store_get($$store_subs ??= {}, "$current", page).url.pathname,
        children: ($$payload2) => {
          $$payload2.out += `<!---->${escape_html(page$1.title)}`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--></div></div> <div class="flex flex-col gap-2"><p>Email</p> <a href="mailto:maav-leads@umich.edu" class="ml-2 transition-all font-medium text-yellow-500 hover:text-yellow-700 active:text-yellow-800">maav-leads@umich.edu</a></div> `;
    IconButton($$payload, {
      class: "absolute bottom-0 right-0 p-4 bg-slate-100",
      handleClick: () => showMenu = false,
      title: "Close Menu",
      children: ($$payload2) => {
        X_lg($$payload2, { class: "text-xl" });
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { height });
  pop();
}
function _layout($$payload, $$props) {
  push();
  let headerHeight = 0;
  let footerHeight = 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="font-montserrat">`;
    Header($$payload2, {
      get height() {
        return headerHeight;
      },
      set height($$value) {
        headerHeight = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    Footer($$payload2, {
      get height() {
        return footerHeight;
      },
      set height($$value) {
        footerHeight = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _layout as default
};
