import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
        extensions: ['.js', '.jsx'],
      }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', { modules: false }],
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
        extensions: ['.js', '.jsx'],
      }),
      postcss({
        extract: true,
        minimize: true,
        inject: false,
      }),
    ],
    external: (id) => {
      return (
        id === 'react' ||
        id === 'react-dom' ||
        id === 'next' ||
        id.startsWith('react/') ||
        id.startsWith('react-dom/')
      );
    },
  },
];
