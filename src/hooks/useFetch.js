import { useState, useEffect } from "react";
import {
  fetchProjects,
  fetchSkills,
  fetchRecommendations,
} from "../api/backendApi";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let result;
        switch (endpoint) {
          case "projects":
            result = await fetchProjects();
            break;
          case "skills":
            result = await fetchSkills();
            break;
          case "recommendations":
            result = await fetchRecommendations();
            break;
          default:
            throw new Error("Invalid endpoint");
        }
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
