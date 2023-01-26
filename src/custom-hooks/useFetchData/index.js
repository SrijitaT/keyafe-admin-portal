import { useEffect, useState } from "react";
import axiosInterceptor from "../../utils/api/axiosInterceptor";

const useFetchData = (url, params, dependency) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      let isMounted = true;
      const fetchData = async () => {
        try {
          const response = await axiosInterceptor.get(url, params);
          if (isMounted) {
            setData(response.data.data);
          }
          console.log("data", response.data);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      };

      fetchData();
      return () => {
        isMounted = false;
      };
    },
    dependency == undefined || dependency == null ? [] : dependency
  );

  return {
    data,
    loading,
    setData,
  };
};

export default useFetchData;
