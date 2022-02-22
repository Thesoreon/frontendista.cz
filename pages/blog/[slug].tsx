import * as React from "react";

import { GET_ALL_POST_SLUG, GET_POST_BY_SLUG } from "@queries/post";
import { GRAPHQL_CLIENT } from "@utils/graphql-client";

import {
  GetAllPostSlug,
  GetPostBySlug,
  GetPostBySlugVariables,
  GetPostBySlug_allPost,
} from "@queries/__generated__";
import type { ParsedUrlQuery } from "querystring";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";

interface BlogPostPageProps extends InferGetStaticPropsType<typeof getStaticProps> {}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { allPost } = await GRAPHQL_CLIENT.request<GetAllPostSlug>(GET_ALL_POST_SLUG);

  // NOTE: This isn't really necessary as slug should never be null because it's required and validated in CMS.
  const slugs = allPost
    .map(post => post.slug?.current)
    .filter((slug): slug is string => !!slug)
    .map(slug => `/blog/${slug}`);

  if (slugs.length !== allPost.length) {
    throw new Error("Some posts don't have a slug.");
  }

  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<GetPostBySlug_allPost, Params> = async ({
  params,
}) => {
  const { allPost } = await GRAPHQL_CLIENT.request<GetPostBySlug, GetPostBySlugVariables>(
    GET_POST_BY_SLUG,
    {
      slug: params!.slug,
    },
  );

  if (allPost.length < 1) {
    throw new Error(`No post with slug '${params!.slug}' found.`);
  } else if (allPost.length > 1) {
    throw new Error(`Multiple posts with the slug '${params!.slug}' found.`);
  }

  const post = allPost[0];

  return {
    props: {
      ...post,
    },
  };
};

export default BlogPostPage;