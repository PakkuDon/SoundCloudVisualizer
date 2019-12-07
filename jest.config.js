module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["./config/enzyme.config.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "node",
  testMatch: ["**/__test__/**/*.test.js"],
}
