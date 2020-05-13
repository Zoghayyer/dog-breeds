import React from 'react';
import { Link } from 'react-router-dom';
import './not-found.scss';

const NotFound: React.FC = () => (
  <div className="not-found">
    <div className="mb-4">
      <span className="not-found-message">Sorry! We couldn't find the page you were looking for.</span>
    </div>
    <div>
      <Link to="/" className="navigation-link">
        <span>Go to the main page</span>
      </Link>
    </div>
  </div>
);

export default NotFound;
