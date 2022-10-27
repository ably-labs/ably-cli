import {Flags} from '@oclif/core'
import CommandWithGlobalConfig from '../command-with-global-config'

export default class Set extends CommandWithGlobalConfig {
	static description = 'Update the control key used by the Ably CLI'

	static examples = [`$ ably access set --accountid <value> --accesstoken <value>
`]

static hidden = false

  static flags = {
    ...CommandWithGlobalConfig.flags,
    accountid: Flags.string({description: 'The Account ID', required: true}),
    accesstoken: Flags.string({description: 'The Control API Access Token', required: true}),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Set)

    this.globalConfig.accountId = flags.accountid
    this.globalConfig.controlApiToken = flags.accesstoken

    this.log(`Control API key to be set to ${flags.accountid} ${flags.accesstoken}`)
    await this.saveGlobalConfig()
  }
}
