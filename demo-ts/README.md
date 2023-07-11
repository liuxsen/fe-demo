# demo-ts

## 初始化 ts项目

```shell
mkidr demo-ts
npm init -y
npx tsc --init
```

## 配置ts编译目标为低版本的环境

ts 编译的时候，默认会将高级语法编译到当前文件，为了避免重复编译导致包变大，可以使用tslib

### 问题 tslib模块找不到

`npm install tslib -S`

```json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "ESNext",
    "baseUrl": ".",
    "paths": {
      "tslib": ["./node_modules/tslib/tslib.d.ts"] // 这里的路径是相对于baseUrl的，如果配置之后，需要注意
    },
  }
}
```


## react 相关

### jsx

代码如下

```js
export const HelloWorld = () => <h1>Hello world</h1>;
```

1. react

```js
import React from 'react';
export const HelloWorld = () => React.createElement("h1", null, "Hello world");
```

2. preserve

```js
import React from 'react';
export const HelloWorld = () => <h1>Hello world</h1>;
```

3. react-jsx （React 17 transform）

```js
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const HelloWorld = () => _jsx("h1", { children: "Hello world" });
```

## tsx

问题： 类型“JSX.IntrinsicElements”上不存在属性“div”

需要配置tsconfig

```json
 "module": "Node16",      // Node | Node16
```

## 不需要在项目顶部引入react

- [参考地址](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)

如果ts项目配置 jsx: react-jsx 项目将不需要引入react；
如果ts项目配置 jsx: react 项目将需要引入 react  `import React, {useState} from 'react'`
