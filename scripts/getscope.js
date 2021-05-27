const {execSync} = require('child_process');

const core = require('@actions/core');

const shell = require('shelljs');
const chalk = require('chalk');
const {deployProject} = require('../package.json');
const {log} = console;
const {green, cyan} = chalk;

let msg = execSync('git --no-pager log -1 --pretty=format:"%s"').toString();
// let deployProjectStr = execSync("cat package.json|grep 'deployProject'|sed '$s/.$//'").toString();
const scope = msg.match(/\[(\w+.\w+)\]/)[1];
// const  deployProject = deployProjectStr.split(":")[1].split(",")
// console.log(deployProjectStr)
//检查是否需要部署
log(green(`可部署项目为`, cyan(` ${deployProject} `)));
if (!deployProject.includes(scope)){
    core.setFailed(`${scope} 不需要部署,终止`);
}

log(green(`开始部署子项目`, cyan(` ${scope} `)));
core.exportVariable('SCOPE', scope);

// core.exportVariable('DEPLOY', scope);

shell.cd(`projects/${scope}`)
log(green(`开始安装依赖并 build`));
shell.exec('npm run ali:build')
