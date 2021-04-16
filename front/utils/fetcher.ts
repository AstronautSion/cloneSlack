import React from 'react';
import axios from 'axios';

const fetcher = (url: string) => {
  return axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};
export default fetcher;
