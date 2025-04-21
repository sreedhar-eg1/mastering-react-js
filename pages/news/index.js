// news page -> our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

export default function NewsPage() {
  return (
    <Fragment>
      <h2>News page</h2>
      <ul>
        <li>
          <Link href="/news/News 1">News 1</Link>
        </li>
        <li>
          <Link href="/news/News 2">News 2</Link>
        </li>
      </ul>
    </Fragment>
  );
}
