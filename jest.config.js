module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy"
  },
  testEnvironment: "jsdom",
  testMatch: ["**/__test__/**/*.test.js"],
}
