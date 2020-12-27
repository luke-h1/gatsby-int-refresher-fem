import React from 'react';
import Form from '../components/form';
import Results from '../components/Results';

const Search = () => (
  <>
    <h1>Search for Rick and morty character lookup</h1>
    <p>
      trying to remember which rick you're talking about ? try out this handy
      search interface !
    </p>
    <Form />
    <Results name='rick'/>
  </>
);
export default Search;
