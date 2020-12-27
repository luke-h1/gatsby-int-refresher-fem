import React from 'react';
import Form from '../components/form';
import Results from '../components/Results';

const Search = ({ location }) => {
  const query =
    (location.state && location.state.query) ||
    location.pathname.replace(/^\search\/?/, '') ||
    '';
  const name = query.replace(/-+/g, ' ');
  return (
    <>
      <h1>
        {name
          ? `Showing results for "${name}"`
          : 'Search for Rick and morty character lookup'}
      </h1>
      <p>
        trying to remember which rick you're talking about ? try out this handy
        search interface !
      </p>
      <Form />
      {name && <Results name={name} />}
    </>
  );
};
export default Search;
