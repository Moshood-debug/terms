import axios from "axios";

const baseURL = "https://clear-clause-server.vercel.app/api/";

const apiCall = async ({ url, method = "GET", data = null, token = null }) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const response = await axios({
      baseURL: baseURL,
      url,
      method,
      data,
      headers,
    });

    // console.log("API call successful:", response.data);
    return response.data; // Return the API response
  } catch (error) {
    console.error("API call failed:", error);
    throw error.response?.data || { message: "An unexpected error occurred" }; // Throw appropriate error message
  }
};

export default apiCall;
