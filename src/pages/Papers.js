import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/papers';

const Papers = () => (
  <Main
    title="Papers"
    description="Learn about Leandro Passos's papers."
  >
    <article className="post" id="papers">
      <header>
        <div className="title">
          <h2><Link to="/papers">Papers</Link></h2>
          <p>A selection of most relevant published papers</p>
        </div>
      </header>
      {data.map((papers) => (
        <Cell
          data={papers}
          key={papers.title}
        />
      ))}
    </article>
  </Main>
);

export default Papers;
