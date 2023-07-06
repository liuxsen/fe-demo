import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import server from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload';
import { watch } from 'rollup';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs'
import json from "@rollup/plugin-json";

// import pkg from '../package.json';

// const externalPkgs = Object.entries(pkg.dependencies).map(item => {
//   return item[0]
// })
export default defineConfig({
  input: "src/app.ts",
  output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs'
      },
      {
        file: 'dist/es/index.js',
        format: 'es'
      },
      {
        file: 'dist/iife/index.js',
        format: 'iife',
        name: 'libName'
      },
      {
        file: 'dist/umd/index.js',
        format: 'umd',
        name: 'libName'
      },
    ],
  external: [
    "react",
    "lodash-es"
  ],
  plugins: [
    json({
      compact: true,
    }),
    typescript({
      resolveJsonModule: true
    }),
    commonjs(),
    resolve(), // 可以打包npm包，不然不会将npm包打包到依赖中
    // server({
    //   open: true,
    //   port: 8088,
    //   host: 'localhost',
    //   historyApiFallback: true,
    //   openPage: "/src/"
    // }),
    // livereload({
    //   watch: [
    //     "dist"
    //   ]
    // }),
  ]
})