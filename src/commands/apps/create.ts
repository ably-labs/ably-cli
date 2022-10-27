import {CliUx, Flags} from '@oclif/core'
import {AblyApp} from '../../helpers/ably-app'
import CommandWithGlobalConfig from '../command-with-global-config'

export default class Create extends CommandWithGlobalConfig {
  static description = 'Create an Ably Application'

  static examples = [
    `$ ably apps:create
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
      const app = await this.ablyControlApi!.createApp(flags.name!, flags.tlsonly)
      const apps: AblyApp[] = [app]
      CliUx.ux.table(apps as Record<string, any>[], {
        name: {
          header: 'Name',
          minWidth: 25,
        },
        id: {
          header: 'ID',
          minWidth: 10,
        },
        status: {
          header: 'Status',
          minWidth: 10,
        },
        tlsOnly: {
          header: 'TLS Only',
          minWidth: 10,
        },
        created: {
          header: 'Created',
          get: row => new Date(row.created).toUTCString(),
          minWidth: 10,
        },
      }, {
        printLine: this.log.bind(this),
        ...flags,
      })
    }
  }
}
