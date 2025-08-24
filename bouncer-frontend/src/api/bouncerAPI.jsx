import axios from "axios";

// Safe fallback to backend URL from environment or localhost
const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5959";
const BASE_URL = rawBaseUrl.replace(/\/+$/, "") + "/api";

console.log("🌐 Bouncer API Base URL:", BASE_URL);

// Auth APIs
export const registerBouncer = (payload) =>
  axios.post(`${BASE_URL}/auth/register`, payload);

export const loginBouncer = (payload) =>
  axios.post(`${BASE_URL}/auth/login`, payload);

// Example Bouncer APIs
export const fetchAllBouncers = () => axios.get(`${BASE_URL}/bouncers`);

export const fetchFilteredBouncers = (filters) =>
  axios.post(`${BASE_URL}/bouncers/filter/newfilter`, filters);
