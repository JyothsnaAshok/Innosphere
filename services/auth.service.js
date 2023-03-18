import axios from "axios";
import { BACKEND_ROOT_URL } from "../constants";
const API_URL = `${BACKEND_ROOT_URL}`;

export const loginRequest = async ({ username, password }) => {
  const response = await axios.post(`${API_URL}/login`, {
    username,
    password,
  });
  return response.data;
};

export const startupLoginRequest = async ({ username, password }) => {
  const response = await axios.post(`${API_URL}/startuplogin`, {
    username,
    password,
  });
  return response.data;
};

export const getStartupDetails = async () => {
  const response = await axios.get(`${API_URL}/startupDetails`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};

export const getMentorDetails = async () => {
  const response = await axios.get(`${API_URL}/listMentors`, {});

  return response.data;
};

export const getPastHiring = async () => {
  const Options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.post(`${API_URL}/getPastHiring`, {}, Options);
  return response.data;
};

export const postJobHiring = async (values) => {
  const Options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.post(
    `${API_URL}/insertHiringMessage`,
    values,
    Options
  );
  return response.data;
};

export const getFeedback = async () => {
  const response = await axios.get(`${API_URL}/getFeedback`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const getServices = async () => {
  const response = await axios.get(`${API_URL}/getPastServices`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const getAllHirings = async () => {
  const response = await axios.get(`${API_URL}/getAllHiring`, {});
  return response.data;
};
export const postServices = async (values) => {
  const Options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.post(
    `${API_URL}/insertServices`,
    values,
    Options
  );
  return response.data;
};

