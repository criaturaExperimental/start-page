import type { NextPage } from 'next';
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { Clock } from '../components/Clock';

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <main
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 4px 5px 8px black;
        height: 100vh;
        background-position: center;
        background-size: cover;
        background-image: url('https://images.unsplash.com/photo-1650346910623-3a0d9ee1f2ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80');
      `}
    >
      <Clock />
    </main>
  );
};

export default Home;
