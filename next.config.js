module.exports = {
  images: {
    loader: "custom",
  },
  typescript: { ignoreBuildErrors: false },
  webpack: (config) => {
    config.experiments = { topLevelAwait: true }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};
