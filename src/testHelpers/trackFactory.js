export default {
  create(attributes) {
    return {
      id: 1,
      title: "Hello World",
      genre: "",
      permalink_url: "",
      stream_url: "",
      artwork_url: "",
      user: {
        username: "Bob",
      },
      ...attributes,
    }
  },
}
