const API_BASE_URL = "http://127.0.0.1:5000";

export const loginUser = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId }),
  });
  return response.json();
};

export const registerUser = async (userId, favoriteMovie, favoriteDirector) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: userId,
      favorite_movie: favoriteMovie,
      favorite_director: favoriteDirector,
    }),
  });
  return response.json();
};

export const searchMovies = async (keyword) => {
  const response = await fetch(`${API_BASE_URL}/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ keyword }),
  });
  return response.json();
};
