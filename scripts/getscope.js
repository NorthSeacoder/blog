const {execSync} = require('child_process');

// const core = require('@actions/core');

const shell = require('shelljs');
const chalk = require('chalk');

const {log} = console;
const {green, cyan} = chalk;

let msg = execSync('git --no-pager log -1 --pretty=format:"%s"').toString();
const scope = msg.match(/\[(\w+.\w+)\]/)[1];
log(green(`开始部署子项目`,cyan(` ${scope} `)));
// core.exportVariable('SCOPE', scope);
shell.cd(`projects/${scope}`)
log(green(`开始安装依赖并 build`));
shell.exec('npm run ali:build')