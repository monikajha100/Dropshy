import axios from "axios";

const serverURL = "http://localhost:5000";

async function getData(url) {
  try {
    const response = await axios.get(`${serverURL}/${url}`);
    return response.data;
  } catch (e) {
    console.error("GET API ERROR:", e);

    return {
      status: false,
      message:
        e.response?.data?.message ||
        e.message ||
        "GET request failed",
      error: e.response?.data || null,
    };
  }
}

async function postData(url, body) {
  try {
    const response = await axios.post(`${serverURL}/${url}`, body);

    console.log("POST API RESPONSE:", response.data);

    return response.data;
  } catch (e) {
    console.error("POST API ERROR:", e);

    return {
      status: false,
      message:
        e.response?.data?.message ||
        `API Error: ${e.response?.status || ""} ${e.message}`,
      error: e.response?.data || null,
    };
  }
}

export { serverURL, getData, postData };