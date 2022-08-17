import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { babel } from '@rollup/plugin-babel'

import externals from 'rollup-plugin-node-externals'

import { name as packageName } from './package.json'

const extensions = ['.js', '.ts', '.json']

const rollupConfig = {
  input: 'src/index.ts',
  plugins: [
    externals({
      include: ['inquirer/lib/**'],
    }),
    json(),
    resolve({ extensions }),
    commonjs(),
    babel({
      rootMode: 'upward',
      babelHelpers: 'runtime',
      extensions: ['.js', '.ts'],
      skipPreflightCheck: true,
    }),
  ],
  output: {
    name: packageName,
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: process.env.development === 'true',
  },
}

export default rollupConfig
