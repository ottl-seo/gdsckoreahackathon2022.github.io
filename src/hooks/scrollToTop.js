import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 페이지 이동시 상단으로 스크롤
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.scrollTop = 0;
    window.scroll(0, 0);
  }, [pathname]);

  return null;
}
