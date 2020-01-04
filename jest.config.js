module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["./config/enzyme.config.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "jsdom",
  testMatch: ["**/__test__/**/*.test.js"],
}
