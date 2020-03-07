import React from "react";

import Link from "next/link";

const BlogPostListComponent: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/about">
        <a>hello, World</a>
      </Link>
    </div>
  );
};

export default BlogPostListComponent;
