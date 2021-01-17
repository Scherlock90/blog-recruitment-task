import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 - Nie ma takiej strony!</h1>
    <Link to={'/'}>Wróć do strony głównej</Link>
  </div>
);

export { NotFound as default };
