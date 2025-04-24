import terser from '@rollup/plugin-terser';

export default {
  input: 'src/odometer.js',
  context: 'window',
  output: {
    file: 'dist/odometer.min.js',
    format: 'esm',
    sourcemap: false,
  },
  plugins: [terser()]
};