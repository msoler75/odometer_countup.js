import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/odometer.js',
    context: 'window',
    output: {
      file: 'dist/odometer.min.js',
      format: 'esm',
    },
    plugins: [terser()]
  },
  {
    input: 'src/odometer.js',
    context: 'window',
    output: {
      file: 'dist/odometer.umd.js',
      name: 'Odometer',
      format: 'umd',
    },
    plugins: [terser()]
  }
];