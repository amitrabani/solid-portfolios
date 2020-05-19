import { useState, useEffect } from 'react';

import useLayoutSize from './useLayoutSize';

const useWideMode = () => {
  const [isWideMode, setWideMode] = useState(false);
  const [width] = useLayoutSize();

  useEffect(() => {
    if (width < 730) {
      setWideMode(false);
    } else {
      setWideMode(true);
    }
  }, [width]);

  return isWideMode;
};

export default useWideMode;
