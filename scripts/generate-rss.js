import { Feed } from "feed";
import config from "../config.json" assert { type: "json" };
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "public/posts");
const postNames = fs
  .readdirSync(postDir)
  .filter((p) => !p.startsWith("."))
  .filter((p) => p !== "README.md");
const posts = postNames.map((p) => {
  const path2out = path.join(process.cwd(), "out/posts");
  const mdxPath = path.join(path2out, p, "index.mdx");
  const mdxFile = fs.readFileSync(mdxPath, "utf8");
  const { data } = matter(mdxFile);
  const htmlPath = path.join(path2out, `${data.slug}.html`);
  const htmlFile = fs.readFileSync(htmlPath, "utf8");

  return {
    data,
    content: htmlFile,
  };
});
/**
 * @see https://github.com/jpmonette/feed
 */
const feed = new Feed({
  title: config.title,
  description: config.description,
  id: config.siteURL,
  link: config.siteURL,
  language: config.language,
  image: config.image,
  favicon: config.favicon,
  copyright: `All rights reserved ${new Date().getFullYear()}, ${config.author.name}`,
  author: config.author,
  feedLinks: {
    rss2: `${config.siteURL}/rss.xml`,
    json: `${config.siteURL}/feed.json`,
    atom: `${config.siteURL}/atom.xml`,
  },
});

posts.forEach((post) => {
  feed.addItem({
    title: post.data.title,
    id: post.data.slug,
    link: `${config.link}${post.data.slug}`,
    description: post.data.description,
    content: post.content,
    author: [config.author],
    date: new Date(post.data.created),
    image:
      post.data.image &&
      path.join(config.siteURL, post.data.slug, post.data.image),
    category: post.data.tags?.map((tag) => ({ name: tag })),
  });
});

feed.addCategory("Technologie");

// Output: RSS 2.0
fs.writeFileSync("out/rss.xml", feed.rss2(), "utf-8");
// Output: Atom 1.0
fs.writeFileSync("out/atom.xml", feed.atom1(), "utf-8");
// Output: JSON Feed 1.0
fs.writeFileSync("out/feed.json", feed.json1(), "utf-8");
