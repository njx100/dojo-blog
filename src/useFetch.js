import { useState, useEffect } from "react";

const useFetch = (urltoFetch) => {
  const [data, setData] = useState(null); // initiate of blogs
  const [isPending, setIspending] = useState(true); // initiate state of ispending
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(urltoFetch) // fetch api from local json server
      .then((res) => {
        console.log(res);
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
        setError(err.message);
        setIspending(false);
      });
  }, [urltoFetch]);
  return { data, isPending, error };
};

export default useFetch;
