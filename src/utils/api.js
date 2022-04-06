import axios from "axios";

const baseURL = "https://nc-news-ddhendon.herokuapp.com/api";

export const getArticles = async (topic, order, sortBy) => {
  const response = await axios.get(`${baseURL}/articles`, {
    params: { topic, order, sort_by: sortBy },
  });
  return response.data.articles;
};

export const getArticle = async (id) => {
  const response = await axios.get(`${baseURL}/articles/${id}`);
  return response.data.article;
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

export const deleteComment = async (id) => {
  await axios.delete(`${baseURL}/comments/${id}`);
};

export const getUsers = async () => {
  const response = await axios.get(`${baseURL}/users`);
  return response.data.users;
};

export const getTopics = async () => {
  const response = await axios.get(`${baseURL}/topics`);
  return response.data.topics;
};
