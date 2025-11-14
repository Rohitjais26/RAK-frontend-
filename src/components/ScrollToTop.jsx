import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Utility component that forces the window to scroll to the top
 * whenever the route changes. It is used in App.jsx.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the window on every route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;