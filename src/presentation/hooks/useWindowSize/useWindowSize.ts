import { useState, useEffect } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize(): void {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener<'resize'>('resize', handleResize);

    handleResize();

    return (): void =>
      window.removeEventListener<'resize'>('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
