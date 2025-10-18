import React, { useState, useEffect } from 'react'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  fallbackSrc = "/images/placeholder.png",
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  // 🔥 Whenever `src` prop changes, update internal state
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default Image;
