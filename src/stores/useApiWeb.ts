import axios, { type AxiosResponse } from "axios";
import { defineStore } from "pinia";

export const useHttpApi = defineStore('httpApi', () => {
  const createPostQuery = async (link: string, params: any) => {

    let data = params;

    let config = {
      method: 'POST',
      bodyMaxLength: Infinity,
      headers: {
        'Content-Type': 'application/json'
      },
      url: link,
      data: data
    }

    try {
      const response: AxiosResponse = await axios.request(config);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }

  const createGetQuery = async (link: string, bearerToken: string, params: any) => {
    let data = params;

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: link,
      headers: {
        'Authorization': 'Bearer ' + bearerToken,
      },
      data: data
    };

    try {
      const response: AxiosResponse = await axios.request(config);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }

  return {
    createPostQuery,
    createGetQuery
  }
})

