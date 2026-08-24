import axios from "axios";

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
  },
});

const pexelsApi = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    Authorization: import.meta.env.VITE_PEXELS_KEY,
  },
});

export async function fetchUnsplashImages(query) {
  return await unsplashApi.get("/search/photos", {
    params: {
      query,
      per_page: 10,
    },
  });
}

export async function fetchPexelsImages(query) {
  return await pexelsApi.get("/videos/search", {
    params: {
      query,
      per_page: 10,
    },
  });
} 