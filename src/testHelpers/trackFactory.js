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
        permalink_url: "https://soundcloud.com/user2835985",
      },
      ...attributes,
    }
  },
}
