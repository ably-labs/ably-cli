import {Flags} from '@oclif/core'
import CommandWithGlobalConfig from '../command-with-global-config'

export default class Update extends CommandWithGlobalConfig {
	static description = 'Update the control key used by the Ably CLI'

	static examples = [`$ ably access set --accountid <value> --controlkey <value>
`]

static hidden = false

  static flags = {
    ...CommandWithGlobalConfig.flags,
    accountid: Flags.string({description: 'The account ID', required: true}),
    controlkey: Flags.string({description: 'The control API key', required: true}),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Update)

    this.globalConfig.accountId = flags.accountid
    this.globalConfig.controlApiToken = flags.controlkey

    this.log(`Control API key to be set to ${flags.accountid} ${flags.controlkey}`)
    await this.saveGlobalConfig()
  }
}
