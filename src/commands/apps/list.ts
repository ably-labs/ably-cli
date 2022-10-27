import {CliUx} from '@oclif/core'
import CommandWithGlobalConfig from '../command-with-global-config'

export default class List extends CommandWithGlobalConfig {
  static description = 'List the Ably Applications'

  static examples = [
    `$ ably apps:list
`,
  ]

  static flags = {
    ...CommandWithGlobalConfig.flags,
    ...CliUx.ux.table.flags(),
  }

  async run(): Promise<void> {
    if (this.globalConfig === undefined) {
      this.log('Configuration not set')
    } else {
      const {flags} = await this.parse(List)
      const apps = (await this.ablyControlApi!.listApps()).sort((a, b) => a.name.localeCompare(b.name))
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
