module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '*': ['./src'],
          '@components': './src/components',
          '@views': ['./src/views'],
          '@store': ['./src/redux'],
          '@route': ['./src/route'],
          '@assets': ['./assets'],
        },
      },
    ],
  ],
}
