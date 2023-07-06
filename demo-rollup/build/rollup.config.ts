import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: "src/consts.ts",
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
  plugins: [typescript()]
})