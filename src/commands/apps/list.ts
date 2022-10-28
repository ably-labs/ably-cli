import {CliUx} from '@oclif/core'
import {ablyAppColumns} from '../../helpers/ably-app-table-columns'
import CommandWithGlobalConfig from '../command-with-global-config'

export default class List extends CommandWithGlobalConfig {
  static description = 'List the Ably Applications'

  static examples = [
    `$ ably apps list
`,
  ]

  static hidden = false

  static flags = {
    ...CommandWithGlobalConfig.flags,
    ...CliUx.ux.table.flags(),
  }

  async run(): Promise<void> {
    if (this.globalConfig === undefined) {
      this.log('Configuration not set')
    } else {
      const {flags} = await this.parse(List)
      const apps = await this.ablyControlApi!.listApps()
      CliUx.ux.table(apps as Record<string, any>[],
        ablyAppColumns
        , {
          printLine: this.log.bind(this),
          ...flags,
        })
    }
  }
}
