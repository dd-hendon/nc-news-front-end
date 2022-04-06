export default function checkValidTopic(topic, topics) {
  if (!topic || !topics) {
    return null;
  }
  const error = {
    response: {
      status: 404,
      statusText: "Not Found",
      data: { message: `Topic '${topic}' does not exist` },
    },
  };
  if (!topics.map((topic) => topic.slug).includes(topic)) {
    return error;
  }
}
