import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ANIMATED_PATHS = ['/', '/cookingblog'];

export default function BackgroundAnimator() {
  const location = useLocation();

  useEffect(() => {
    const shouldAnimate = ANIMATED_PATHS.includes(location.pathname);
    document.body.classList.toggle('bg-animated', shouldAnimate);

    // cleanup on unmount, just in case
    return () => document.body.classList.remove('bg-animated');
  }, [location.pathname]);

  return null;
}