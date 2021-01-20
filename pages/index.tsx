import React from "react";
import ImageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import classNames from "classnames";

import type { GetStaticProps, NextPage } from "next";
import type { BlogFeed } from "src/components/blogfeed-preview/blogfeed-preview";

import { PageLayout } from "src/components/page-layout/page-layout.component";
import { sanityClient } from "src/utils/data-fetching/sanity-client";
import { BlogFeedPreview } from "src/components/blogfeed-preview/blogfeed-preview.component";

import styles from "src/assets/stylesheets/index.module.scss";

interface IndexProps {
  blogFeed: BlogFeed[];
}

const Index: NextPage<IndexProps> = ({ blogFeed }) => {
  return (
    <PageLayout>
      <main className="max-w-main mx-auto">
        <h1 className="text-7xl font-bold mb-8">
          I’m a Software Engineer from Prague, Czech republic
        </h1>
        <p className={styles.introductionParagraph}>
          Focused on Frontend technologies such as <strong>React</strong>,{" "}
          <strong>Next.js</strong>, <strong>TypeScript</strong> and other complementary
          tools for fully-fledged projects.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <a
              className={classNames(
                "inline-block bg-blue-500 px-8 py-4 text-white font-bold text-2xl mr-4",
                styles.textShadowBase,
                styles.bevel,
              )}
            >
              Contact me
            </a>
          </Link>
          <Link href="/work">
            <a
              className={classNames(
                "inline-block bg-gray-100 px-8 py-4 text-gray-800 font-bold text-2xl",
                styles.textShadowBase,
                styles.bevel,
              )}
            >
              View work
            </a>
          </Link>
        </div>
      </main>

      {/* {blogFeed.map(preview => {
        const { _id } = preview;

        return <BlogFeedPreview key={_id} preview={preview} />;
      })} */}
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogFeedQuery = `*[_type == "gallery" || _type == "post"] {
    _id,
    _type,
    title,
    photos[] {
      asset-> {
        _id,
        metadata {
          lqip,
          dimensions {
            aspectRatio,
            height,
            width,
          }
        }
      }
    }
  }`;

  try {
    const blogFeed = await sanityClient.fetch<BlogFeed[]>(blogFeedQuery);
    const imageUrlBuilder = ImageUrlBuilder(sanityClient);

    if (blogFeed.length == 0) throw "Error in fetching data from Sanity CMS";

    blogFeed.forEach(feed => {
      if (feed._type == "gallery") {
        feed.photos.forEach(photo => {
          const url = imageUrlBuilder.image(photo.asset._id).url();

          if (!url) throw "Error in imageUrlBuilder, url was Null.";

          photo.asset.url = url;
        });
      }
    });

    return {
      props: {
        blogFeed,
      },
    };
  } catch (error) {
    console.error("\x1b[31m", `🟥 ${error}`);

    if (process.env.NODE_ENV != "development") {
      process.exit(1);
    }

    return {
      props: {},
    };
  }
};

export default Index;
