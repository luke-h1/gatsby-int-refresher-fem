import React from 'react';
import { Link } from 'gatsby';

const Index = () => (
  <>
    <h1>Rick and morty character lookup</h1>
    <p>
      Look up your fav characters from <em>Rick and morty</em>using the{' '}
      <a href="https://rickandmortyapi.com">Rick and morty gql API</a>
    </p>
    <Link to="/search">Search</Link>
  </>
);
export default Index;
