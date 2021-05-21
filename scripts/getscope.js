const {execSync} = require('child_process');
const core = require('@actions/core');

let msg = execSync('git --no-pager log -1 --pretty=format:"%s"').toString();
const scope = msg.match(/\[(\w+.\w+)\]/)[1];

core.exportVariable('SCOPE', scope);