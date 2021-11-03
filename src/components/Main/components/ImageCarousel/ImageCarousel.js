import './ImageCarousel.scss';
import { useLayoutEffect, useRef, useState } from 'react';

const ImageCarousel = ({ mattresses, currentMattressIndex }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const sizeListener = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();

        setContainerWidth(width);
      }
    };

    sizeListener();
    window.addEventListener('resize', sizeListener);

    return () => window.removeEventListener('resize', sizeListener);
  }, []);

  return (
    <div className='image-carousel' ref={containerRef}>
      <ul
        className='carousel-container'
        style={{
          width: `${containerWidth * mattresses.length}px`,
          height: `${containerWidth * 0.666}px`,
          transform: `translateX(${
            -1 * currentMattressIndex * containerWidth
          }px)`,
        }}
      >
        {mattresses.map(({ imageFileName, name }) => {
          return (
            <li
              className='carousel-image'
              style={{
                backgroundImage: `url("${process.env.PUBLIC_URL}/images/${imageFileName}")`,
                width: containerWidth,
              }}
              key={name}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ImageCarousel;
