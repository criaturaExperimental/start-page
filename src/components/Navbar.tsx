import Link from 'next/link';
import styled from 'styled-components';

const NavStyled = styled.nav`
  width: 100%;
  height: 4rem;
  background: papayawhip;
  padding: 1rem 2rem 0rem;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 6%) 0px 0px 2px, rgb(0 0 0 / 4%) 0px 0px 1px;
`;

const TabStyled = styled.li`
  color: red;
`;

const TabContainer = styled.ul`
  display: flex;
`

export default function NavBar() {
  return (
    <NavStyled>
      <TabContainer>
        <TabStyled>
          <Link href="/">
            <a>home</a>
          </Link>
        </TabStyled>
        <TabStyled>
          <Link href="/about">
            <a>about</a>
          </Link>
        </TabStyled>
      </TabContainer>
    </NavStyled>
  );
}
