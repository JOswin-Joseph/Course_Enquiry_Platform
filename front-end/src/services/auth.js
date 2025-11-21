// ================================
// 🔧 API BASE URL
// ================================
// If VITE_API_URL exists → use it
// Else → use http://localhost:3000/api
const BASE_API = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Final API URL: http://localhost:3000/api/auth
const API_URL = `${BASE_API}/auth`;


// ================================
// ✅ SIGNUP API
// ================================
export const signupUser = async (name, email, password) => {
  try {
    const res = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    return await res.json();
  } catch (err) {
    return { error: "Unable to connect to server" };
  }
};


// ================================
// ✅ LOGIN API
// ================================
export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    return await res.json();
  } catch (err) {
    return { error: "Unable to connect to server" };
  }
};


// ================================
// ✅ GET LOGGED-IN USER (/me)
// ================================
export const fetchUserProfile = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`${API_URL}/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await res.json();
  } catch (err) {
    return { error: "Unable to connect to server" };
  }
};


// ================================
// ✅ STORE AUTH DATA
// ================================
export const setAuthData = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("role", user.role);
};


// ================================
// ❌ CLEAR AUTH ON LOGOUT
// ================================
export const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("role");
};


// ================================
// ⭐ Helper Getters
// ================================
export const getToken = () => localStorage.getItem("token");

export const getUser = () => JSON.parse(localStorage.getItem("user"));

export const getUserRole = () => localStorage.getItem("role");
