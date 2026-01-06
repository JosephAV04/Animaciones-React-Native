module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ... otros plugins si ya tenías alguno
      'react-native-reanimated/plugin',
    ],
  };
};