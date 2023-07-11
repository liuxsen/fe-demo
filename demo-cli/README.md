# demo-cli


- [commander](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md)
- [yargs](https://github.com/yargs/yargs)
- [configstore](https://www.npmjs.com/package/configstore)
- [chalk](https://www.npmjs.com/package/chalk)
- [enquirer](https://www.npmjs.com/package/enquirer)
- [prompts](https://www.npmjs.com/package/prompts)

## 系统差异

```js
#!/usr/bin/env node

// rest...
```

```js
const cliExecPath = 'program.js'
const process = childProcess.spawn('node', [cliExecPath])
```

## 避免拼接路径

跨不同平台的路径构造截然不同。当通过拼接字符串手动构建它们时，它们必然在不同平台之间不能互相操作。

让我们思考以下**不良做法**示例：

```js
const myPath = `${__dirname}/../bin/myBin.js`;
```

假定正斜杠是路径分隔符，例如在Windows上使用反斜杠。

与其手动构建文件系统路径，不如使用 Node.js 自己的 path 模块来执行此操作：

```js
const myPath = path.join(__dirname, "..", "bin", "myBin.js");
```