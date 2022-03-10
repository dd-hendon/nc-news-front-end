import axios from "axios";

const baseURL = "https://nc-news-ddhendon.herokuapp.com/api";

export const getArticles = async (topic) => {
  try {
    let querystring = topic
      ? `${baseURL}/articles?topic=${topic}`
      : `${baseURL}/articles`;
    const response = await axios.get(querystring);
    return response.data.articles;
  } catch (error) {
    console.log(error);
  }
};

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
