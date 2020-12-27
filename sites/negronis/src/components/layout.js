/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { Global } from '@emotion/react';
import { Link } from 'gatsby';

const Layout = ({ children }) => (
  <Fragment>
    <Global
      styles={(theme) => ({
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          fontSize: 20,
          margin: 0,
        },
      })}
    />
    <header sx={{ bg: 'primary', color: 'background', p: 3 }}>
      <Link
        to="/"
        sx={{
          color: 'background',
          fontWeight: 'bold',
          textDecoration: 'none',
          ':focust': {
            outline: (theme) => `2px solid ${theme.colors.background}`,
            outlineoffSet: 4,
          },
        }}
      >
        Negroni Appreciation society
      </Link>
    </header>
    <main sx={{ my: 4, mx: 'auto', maxWidth: 650, width: '90vw ' }}>
      {children}
    </main>
  </Fragment>
);
export default Layout;
