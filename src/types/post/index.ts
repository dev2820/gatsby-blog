export type Post = {
  data: PostData;
  content: string;
};

export type PostData = {
  title: string;
  created: string;
  tags: string[];
  summary?: string;
  draft?: boolean;
  slug?: string;
};
