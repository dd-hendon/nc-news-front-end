import axios from "axios";

const baseURL = "https://nc-news-ddhendon.herokuapp.com/api";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseURL}/users`);
    return response.data.users;
  } catch (error) {
    console.log(error);
  }
};

export const getTopics = async () => {
  try {
    const response = await axios.get(`${baseURL}/topics`);
    return response.data.topics;
  } catch (error) {
    console.log(error);
  }
};
