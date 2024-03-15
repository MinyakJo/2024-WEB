import { useState, useEffect } from "react";
import axios, { AxiosRequestHeaders, Method } from "axios";

type fetchType = {
  method: Method;
  url: string;
  data?: any;
  headers?: AxiosRequestHeaders;
  dependency?: any;
  condition?: boolean;
};

type returnType = {
  data: any;
  isLoading: boolean;
  error: any;
};

const useFetch = ({
  method,
  url,
  data,
  headers,
  dependency,
  condition,
}: fetchType): returnType => {
  //state
  const [fData, setFData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios({
        method: method,
        url: `${process.env.REACT_APP_API}${url}`,
        data: data,
        headers: headers,
      });
      console.log(url);
      if (
        response.data.statusCode === 200 ||
        response.data.statusCode === 201
      ) {
        setFData(response.data);
        setIsLoading(false);
      } else {
        setError(response.data.message);
        setIsLoading(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data.message;
      }
      return;
    }
  };

  useEffect(() => {
    if (condition || condition === undefined) {
      fetchData();
    }
  }, [dependency]);

  return { data: fData, isLoading, error };
};

export default useFetch;
