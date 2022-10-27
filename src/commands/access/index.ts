import {CliUx} from '@oclif/core'
import CommandWithGlobalConfig from '../command-with-global-config'

export default class Index extends CommandWithGlobalConfig {
	static description = 'Provides instructions for setting up access for the Ably CLI'

	static examples = [`$ ably access
`]

static hidden = false

  static flags = {
    ...CommandWithGlobalConfig.flags,
  }

  async run(): Promise<void> {
    this.log('To give the Ably CLI access to your account it needs two things:')
    this.log()
    this.log('1. An Access Token')
    this.log('2. Your Ably Account ID')
    this.log()

    this.log('Please follow these instructions to create an Access Token:')
    await CliUx.ux.url('https://ably.com/docs/control-api#authentication', 'https://ably.com/docs/control-api#authentication')
    this.log()
    this.globalConfig.controlApiToken = await CliUx.ux.prompt('What is the Access Token?')

    this.log('And the instructions here to get your Account ID:')
    await CliUx.ux.url('https://ably.com/docs/control-api#ids', 'https://ably.com/docs/control-api#ids')
    this.log()
    this.globalConfig.accountId = await CliUx.ux.prompt('What is your Account ID?')

    this.saveGlobalConfig()
  }
}
