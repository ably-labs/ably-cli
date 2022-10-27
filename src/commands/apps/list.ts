import CommandWithGlobalConfig from '../command-with-global-config'
import {AblyControlApi} from '../../helpers/control-api'

export default class List extends CommandWithGlobalConfig {
  static description = 'List the Ably Applications'

  static examples = [
    `$ ably apps:list
`,
  ]

  static flags = {
    ...CommandWithGlobalConfig.flags,
  }

  async run(): Promise<void> {
    if (this.globalConfig === undefined) {
      this.log('Configuration not set')
    } else {
      // TODO this needs to be moved so all commands can use it
      const controlApi = new AblyControlApi(this.globalConfig.accountId!, this.globalConfig.controlApiToken!)
      // TODO pipe to output
      controlApi.listApps()
    }
  }
}
