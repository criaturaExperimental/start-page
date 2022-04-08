import type { NextPage } from 'next';
import { css } from '@emotion/react';
import Layout from '../components/Layout';
import { useTheme } from '@emotion/react';

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Layout>
      <div
        css={css`
          height: 600px;
          background-color: ${theme.color.light};
        `}
      >
        Hello world
      </div>
    </Layout>
  );
};

export default Home;
