import Link from "next/link";
import styled from 'styled-components';

const NavStyled = styled.nav`
  width: 100%;
  height: 4rem;
  background: papayawhip;
`;

export default function NavBar() {
  return (
    <NavStyled
      css={`
        color: red;
      `}
    >
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </NavStyled>
  );
}
