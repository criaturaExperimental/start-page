import Link from "next/link";
import { css } from '@emotion/react';

export default function NavBar() {
  return (
    <div
    css={css`
      background-color: hotpink;
    `}
  >
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  );
}
