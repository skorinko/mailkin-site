// Use-case pages: who Mailkin is for, with realistic scenarios. English first.
export default {
  schema: ["article"],
  tags: ["usecase"],
  eleventyComputed: {
    permalink: (d) => (d.page.fileSlug === "for" ? "/for/" : `/for/${d.page.fileSlug}/`),
    crumbs: (d) => (d.page.fileSlug === "for" ? [{ name: "Use cases" }] : [{ name: "Use cases", url: "/for/" }, { name: d.short || d.title }]),
  },
};
