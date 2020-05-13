import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './loader.scss';

export interface LoaderProps {
  className?: string;
  size?: 'sm';
}

const Loader: React.FC<LoaderProps> = ({ className, size }) => (
  <div className={`row d-flex justify-content-center ${className}`}>
    <Spinner animation="border" role="status" className="loader-color" size={size}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

Loader.defaultProps = {
  className: '',
  size: 'sm',
};

export default Loader;
