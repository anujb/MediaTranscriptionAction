import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    const context: any = github.context;

    const github_env = core.getInput("GITHUB_ENV", { required: true })

    core.debug(github_env)


    if (context.payload == null) {
      core.setFailed('No context found.');
      return;
    }

    core.debug(`Context: ${context}`);

    core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    core.debug(new Date().toTimeString())


    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
