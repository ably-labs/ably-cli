import {Flags} from '@oclif/core'
import CommandWithGlobalConfig from '../command-with-global-config'

export default class Update extends CommandWithGlobalConfig {
	static description = 'Update Ably CLI configuration'

	static examples = [`$ ably config:update --controlkey
`]

  static flags = {
    ...CommandWithGlobalConfig.flags,
    controlkey: Flags.string({description: 'The control API key', required: true}),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Update)

    this.globalConfig.controlApiToken = flags.controlkey

    this.log(`Control API to be set to ${flags.controlkey}`)
    await this.saveGlobalConfig()
  }
}
