import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import minify from 'rollup-plugin-babel-minify'

export default {
  input: 'src/test-version.js',
  output: {
    file: 'test/composi.js',
    format: 'umd',
    name: 'composi',
    sourcemap: true,
    sourcemapFile: 'test/composi.js.map'
  },
  plugins:
    [
      babel({
        exclude: 'node_modules/**'
      }),
      resolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      commonjs(),
      minify({
        mangle: { topLevel: true },
        comments: false
      })
    ]
}