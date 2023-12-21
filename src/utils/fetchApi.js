import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "80b0a796fbmsh6e8ca8cb7a1e823p102454jsn47bf3a4ee65e",
    },
  });

  return data;
};
