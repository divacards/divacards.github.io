module.exports = {
  images: {
    loader: "custom",
  },
  typescript: { ignoreBuildErrors: false },
  webpack: (config) => {
    config.experiments = { topLevelAwait: true }
    return config;
  }
};
