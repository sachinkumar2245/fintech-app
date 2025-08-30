// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;

export async function getData() {
  if (!API_URL) {
    throw new Error('API_URL is not defined in environment variables');
  }
  const res = await fetch(`${API_URL}`, {
    credentials: 'include', // needed if you're using cookies for auth
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
