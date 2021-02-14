import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    core.info("Starting action...");
    core.debug("Starting action...");

    const token = process.env['GITHUB_TOKEN'];
    // if (!token) return;
    // const octokit: github.GitHub = new github.GitHub(token)
    const octoKit = github.getOctokit(token);

    console.log(github.context.payload);

    const issue = github.context.payload.issue;
    core.debug("Issue number: " + issue?.number);


    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
