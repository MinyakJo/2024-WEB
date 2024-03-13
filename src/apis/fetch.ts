import axios, { AxiosRequestHeaders, Method } from "axios";

type fetchType = {
  method: Method;
  url: string;
  data?: any;
  headers?: AxiosRequestHeaders;
};

export const fetch = async ({ method, url, data, headers }: fetchType) => {
  let fetchData = null;

  try {
    fetchData = await axios({
      method: method,
      url: `${process.env.REACT_APP_API}${url}`,
      data: data,
      headers: headers,
    });
  } catch (response: any) {
    throw new Error(response.error);
  }

  return fetchData;
};
