# rollup

> node>16.0

## 采用命令方式构建

1. 浏览器环境

```shell
rollup src/main.js --file bundle.js --format iife
```

2. node 环境

```shell
rollup src/main.js --file bundle.js --format cjs
```

3. 浏览器和node环境

```shell
rollup src/main.js --file bundle.js --format umd --name mybundle
```

## treeShaking

## config

```js
export default {
  input: './src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  }
}
```

### 使用ts config

1. 安装 `typescript` `@rollup/plugin-typescript`

```json
"@rollup/plugin-typescript": "11.1.2",
"typescript": "5.1.6"
```