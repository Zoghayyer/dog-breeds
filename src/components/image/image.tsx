import React from 'react';

export interface ImageProps {
  alt: string;
  className?: string;
  src: string;
  style?: any;
}

const Image: React.FC<ImageProps> = ({ alt, className, style, src }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    style={style}
  />
);

export default Image;
