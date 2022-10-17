import { useEffect, useState } from 'react';

export const useFetch = (url: string, options?) => {
  const [status, setStatus] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  async function fetchNow(url, options) {
    setStatus({ loading: true, data: undefined, error: undefined });
    try {
      const result = await window.fetch(url, options).then(res => res.json);

      setStatus({ loading: true, data: result, error: undefined });

      console.log(result);
    } catch (error) {
      setStatus({ loading: false, data: undefined, error });
    }
  }

  useEffect(() => {
    if (url) {
      fetchNow(url, options);
    }
  }, []);

  return { ...status, fetchNow };
};
