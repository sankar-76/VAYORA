import React, { useState, useEffect } from 'react';

const SafeImage = ({ src, alt, className, style, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // High quality SVG gradient placeholder fallback
      setImgSrc("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22600%22%20viewBox%3D%220%200%20800%20600%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230F2C23%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23173F33%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23g)%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23E8E0D0%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%3EVAYORA%20DESTINATION%3C%2Ftext%3E%3C%2Fsvg%3E");
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || "VAYORA Experience"}
      className={className}
      onError={handleError}
      loading="lazy"
      style={style}
      {...props}
    />
  );
};

export default SafeImage;
