import React from 'react';

export interface ImageProps {
  alt: string;
  className?: string;
  src: string;
}

const Image: React.FC<ImageProps> = ({alt, className, src }) => (
  <img
    src={src}
    alt={alt}
    className={className}
  />
);

export default Image;
