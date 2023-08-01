import { useState, useEffect } from "react";

const useFetch = (urltoFetch) => {
  const [data, setData] = useState(null); // initiate of blogs
  const [isPending, setIspending] = useState(true); // initiate state of ispending
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(urltoFetch, {
      signal: abortCont.signal,
    }) // fetch api from local json server
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIspending(false); // change state of Ispending
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(err.message);
          setIspending(false);
        }
      });
    return () => abortCont.abort();
  }, [urltoFetch]);
  return { data, isPending, error };
};

export default useFetch;
