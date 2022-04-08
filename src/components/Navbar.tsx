import Link from 'next/link';
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';

export default function NavBar() {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-color: ${theme.color.terciary};
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
