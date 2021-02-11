import pkg from './package.json';
import commonjs from '@rollup/plugin-commonjs';

export default {
 input: 'src/index.js', // our source file
 output: [
  {
   file: pkg.main,
   format: 'cjs'
  },
  {
   file: pkg.module,
   format: 'es' // the preferred format
  },
  {
   file: pkg.browser,
   format: 'iife',
   name: 'hubl' // the global which can be used in a browser
  }
 ],
 external: [
  ...Object.keys(pkg.dependencies || {})
 ],
 plugins: [commonjs()]
};