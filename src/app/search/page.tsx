"use client";

import { useMount } from "@/hooks/use-mount";
import { search, type SearchResult } from "@/utils/search";
import Link from "next/link";
import {
  ComponentProps,
  ElementRef,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from "react";
import { cx } from "@/utils/cx";
import type { Post } from "@/types/post";
import { delayFn } from "@/utils/delay";
import Image from "next/image";
import pepeSadImg from "@/assets/images/pepe-sad.png";
import { SearchInput } from "@/components/search/SearchInput";
import { fetchPostListForSearch } from "@/utils/search";
import { isFailed, isNil } from "@/utils/predicate";
import { Tag } from "@/components/Tag";
import { useSearchParams } from "next/navigation";
import { Skeleton } from "terra-design-system/react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get("q");
  const [posts, setPosts] = useState<Post[]>([]);
  const [isFetching, setIsFetchPosts] = useState<boolean>(false);
  const tagsMap = useMemo(() => {
    return posts
      .map((p) => p.data.tags)
      .flat()
      .reduce(
        (map, tag) => map.set(tag, (map.get(tag) ?? 0) + 1),
        new Map<string, number>()
      );
  }, [posts]);

  const queriedPosts = useMemo<SearchResult<Post>[] | null>(() => {
    if (!currentQuery || posts.length <= 0) {
      return null;
    }
    return search(currentQuery, posts, {
      keys: ["data.title", "data.tags", "data.summary", "content"],
    });
  }, [currentQuery, posts]);

  const searchInputRef = useRef<ElementRef<typeof SearchInput>>(null);
  const [typedQuery, setTypedQuery] = useState<string>(currentQuery ?? "");

  const updatePosts = async () => {
    const result = await fetchPostListForSearch();
    if (isFailed(result)) {
      return;
    }

    const posts = result.value;
    setPosts(posts);
    setIsFetchPosts(true);
  };

  useMount(() => {
    delayFn(200, () => {
      searchInputRef.current?.focus();
    });

    updatePosts();
  });

  const handleChangeQuery = (newQuery: string) => {
    setTypedQuery(newQuery ?? "");
  };

  const handleClearQuery = () => {
    setTypedQuery("");
  };

  return (
    <search className={cx("rounded-md flex flex-col items-center")}>
      <fieldset className="rounded-lg w-full pt-20 pb-6 flex flex-col place-items-center">
        <h2 className="text-5xl font-bold mb-8">Search</h2>
        <form
          className="w-full max-w-[568px] flex flex-col gap-4"
          action={`/search?q=${typedQuery}`}
          method="get"
        >
          <SearchInput
            className="flex-1 h-11"
            placeholder="Type to search"
            value={typedQuery}
            onChangeSearch={handleChangeQuery}
            onClearSearch={handleClearQuery}
            ref={searchInputRef}
            name="q"
          />
        </form>
      </fieldset>
      <hr className="w-full my-8" />
      <div className="text-left w-full">
        {currentQuery && (
          <>
            {isNil(queriedPosts) && (
              <>
                <Skeleton className="">
                  <strong className="block text-3xl font-bold">
                    loading...
                  </strong>
                </Skeleton>
                <Skeleton className="mt-4 block h-32" />
              </>
            )}
            {!isNil(queriedPosts) && (
              <>
                <strong className="block text-3xl font-bold">
                  <Highlight>&quot;{currentQuery}&quot;</Highlight> 검색 결과:{" "}
                  <Highlight>{queriedPosts?.length}</Highlight>개의 포스트
                </strong>
                {queriedPosts.length <= 0 && (
                  <div className="flex flex-col place-items-center mt-16">
                    <Image
                      src={pepeSadImg}
                      alt={"pepe-sad"}
                      width={192}
                      height={0}
                    />
                    <p className="text-lg mt-8">검색 결과가 없습니다요...</p>
                  </div>
                )}
                {queriedPosts.length > 0 && (
                  <ul className="mt-4">
                    {queriedPosts.map((sr) => (
                      <li key={sr.refIndex} className="mb-4 last:mb-0">
                        <Link href={`/posts/${sr.item.data.slug}`}>
                          <SearchResultSection
                            result={sr}
                            className="bg-gray-100 hover:bg-gray-200 duration-200"
                          ></SearchResultSection>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </>
        )}
      </div>
      {/**
       * 이런 포스트는 어떠세요
       */}
    </search>
  );
}

type SearchResultSection = ComponentProps<"section"> & {
  result: SearchResult<Post>;
};
const SearchResultSection = (props: SearchResultSection) => {
  const { result, className, ...rest } = props;
  const { item, matches } = result;

  const titleMatch = matches?.find((match) => match.key === "data.title");
  const summaryMatch = matches?.find((match) => match.key === "data.summary");

  return (
    <section className={cx("rounded-md p-4", className)} {...rest}>
      {titleMatch && titleMatch.value && titleMatch.indices ? (
        <h3 className="text-2xl font-semibold">
          {splitByIndices(
            titleMatch.value,
            titleMatch.indices as [number, number][]
          ).map((token, idx) =>
            idx % 2 === 1 ? <Highlight key={idx}>{token}</Highlight> : token
          )}
        </h3>
      ) : (
        <h3 className="text-2xl">{item.data.title}</h3>
      )}
      {summaryMatch && summaryMatch.value && summaryMatch.indices ? (
        <p className="mt-4">
          {splitByIndices(
            summaryMatch.value,
            summaryMatch.indices as [number, number][]
          ).map((token, idx) =>
            idx % 2 === 1 ? <Highlight key={idx}>{token}</Highlight> : token
          )}
        </p>
      ) : (
        <p className="mt-4">{item.data.summary}</p>
      )}
      <div className="mt-2 flex flex-row flex-wrap gap-1">
        {item.data.tags.map((tag) => (
          <Link href={`/tags/${tag}`}>
            <Tag key={tag} text={tag} />
          </Link>
        ))}
      </div>
    </section>
  );
};

const Highlight = ({ children }: { children: ReactNode }) => {
  return <span className="text-primary">{children}</span>;
};

function splitByIndices(str: string, pairs: [number, number][]) {
  const result = [];
  let lastIdx = 0;

  pairs.forEach((pair) => {
    const [startIdx, endIdx] = pair;

    // lastIdx부터 startIdx까지 자른 부분을 배열에 추가
    result.push(str.slice(lastIdx, startIdx));

    // startIdx부터 endIdx까지 자른 부분을 배열에 추가
    result.push(str.slice(startIdx, endIdx + 1));

    // 마지막 인덱스를 업데이트
    lastIdx = endIdx + 1;
  });

  // 마지막 범위부터 끝까지 남은 부분을 배열에 추가
  result.push(str.slice(lastIdx));

  return result;
}
async function fetchPostList() {}
