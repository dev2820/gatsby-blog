// TODO: JSON-LD 적용

import { getAllPosts, getPostBySlug } from "@/utils/post";
import path from "node:path";

const TITLE = process.env.title ?? "";
const AUTHOR = process.env.author ?? "";
const SITE_URL = process.env.siteURL ?? "";
const GITHUB_URL = process.env.github_URL ?? "";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((p) => ({
    slug: p.data.slug,
  }));
}

// TODO: Metadata 적용
export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  return {
    title: `${TITLE} - ${post?.data.title}`,
    description: post?.data.summary,
    author: AUTHOR,
    alternates: {
      canonical: path.join(SITE_URL, slug),
    },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url: path.join(SITE_URL, slug),
      title: post?.data.title,
      description: post?.data.summary,
      images: [
        {
          url: post?.data.image,
          width: 800,
          height: 600,
          alt: post?.data.title,
        },
      ],
      article: {
        publishedTime: post?.data.created,
        modifiedTime: post?.data.modified,
        authors: [GITHUB_URL],
        tags: post?.data.tags,
      },
    },
  };
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}