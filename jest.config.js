module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["./config/enzyme.config.js"],
  testEnvironment: "node",
  testMatch: ["**/__test__/**/*.test.js"],
}
