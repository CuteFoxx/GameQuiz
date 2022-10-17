import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setError(null);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setData(null);
        setError(err);
        setIsLoading(false);
      });
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
