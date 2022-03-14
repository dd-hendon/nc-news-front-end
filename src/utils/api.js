import axios from "axios";

const baseURL = "https://nc-news-ddhendon.herokuapp.com/api";

export const getArticles = async (topic) => {
  try {
    const response = await axios.get(`${baseURL}/articles`, {
      params: { topic: topic },
    });
    return response.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const getArticle = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/articles/${id}`);
    return response.data.article;
  } catch (error) {
    console.log(error);
  }
};

export const patchVotes = async (id, inc_votes) => {
  const response = await axios.patch(`${baseURL}/articles/${id}`, {
    inc_votes,
  });
  return response.data.article;
};

export const getComments = async (id) => {
  const response = await axios.get(`${baseURL}/articles/${id}/comments`);
  return response.data.comments;
};

export const postComment = async (id, username, body) => {
  const request = { username, body };
  const response = await axios.post(
    `${baseURL}/articles/${id}/comments`,
    request
  );
  return response.data.createdComment;
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
