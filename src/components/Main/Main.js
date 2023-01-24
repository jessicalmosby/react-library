import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <p>
        Take a look at the <Link to="/books">catalog</Link>
      </p>
    </main>
  );
}
