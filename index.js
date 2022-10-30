const core = require('@actions/core');
const github = require('@actions/github');
var fs = require('fs');

try {
  // `who-to-greet` input defined in action metadata file
  // const nameToGreet = core.getInput('who-to-greet');
  console.log(`Starting action!`);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  let path = core.getInput('path');
  console.log(path);
  var files = fs.readdirSync(path);
  console.log(files);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}