import { useEffect, useRef } from 'react';

const ClickOutsideWrapper = ({ onClickOutside, children }) => {
  const containerRef = useRef();
  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      onClickOutside(e);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return <div ref={containerRef}>{children}</div>;
};

export default ClickOutsideWrapper;
