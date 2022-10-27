import {CliUx, Flags} from '@oclif/core'
import {AblyApp} from '../../helpers/ably-app'
import {ablyAppColumns} from '../../helpers/ably-app-table-columns'
import CommandWithGlobalConfig from '../command-with-global-config'

export default class Create extends CommandWithGlobalConfig {
  static description = 'Create an Ably Application'

  static examples = [
    `$ ably apps create --name <value> [--tlsonly <value>]
`,
  ]

  static flags = {
    ...CommandWithGlobalConfig.flags,
    name: Flags.string({
      required: true,
      summary: 'Name of the Ably app',
    }),
    tlsonly: Flags.boolean({
      required: false,
      summary: 'Only use TLS connections',
    }),
    ...CliUx.ux.table.flags(),
  }

  async run(): Promise<void> {
    if (this.globalConfig === undefined) {
      this.log('Configuration not set')
    } else {
      const {flags} = await this.parse(Create)
      const app = await this.ablyControlApi!.getOrCreateApp(flags.name!, flags.tlsonly)
      const apps: AblyApp[] = [app]
      CliUx.ux.table(apps as Record<string, any>[],
        ablyAppColumns,
        {
          printLine: this.log.bind(this),
          ...flags,
        })
    }
  }
}
