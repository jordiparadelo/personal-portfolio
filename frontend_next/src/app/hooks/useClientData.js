import { useEffect, useState } from "react";
// Data
import { client } from "clients";

export const useClientData = (query) => {
  const queries = Array.isArray(query) ? [...query] : [query];
  const request = queries.map((query) => client.fetch(query));
  
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    Promise.all(request)
      .then((responses) =>
        responses.forEach((response) => {
          setData(responses.length > 1 ? [...responses] : response);
        })
      )
      .finally(() => setIsFetching(false));
  }, [request]);

  return { data, isFetching };
};
