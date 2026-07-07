import { useEffect, useState } from 'react';

export const usePageLoader = (duration = 2000) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), duration);
    return () => window.clearTimeout(timer);
  }, [duration]);

  return loading;
};
